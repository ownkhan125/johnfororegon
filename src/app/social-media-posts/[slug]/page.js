import { notFound } from "next/navigation";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import {
  SOCIAL_POSTS,
  findPostBySlug,
  getAdjacentPosts,
} from "@/data/social-posts";
import { PostDetailHero } from "@/sections/post-detail/PostDetailHero";
import { PostRelated } from "@/sections/post-detail/PostRelated";

export function generateStaticParams() {
  return SOCIAL_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = findPostBySlug(slug);
  if (!post) return { title: "Post not found — John for Oregon" };
  return {
    title: `${post.title} — Social Posts — John for Oregon`,
    description: post.summary,
  };
}

export default async function PostDetailPage({ params }) {
  const { slug } = await params;
  const post = findPostBySlug(slug);
  if (!post) notFound();
  const { prev, next } = getAdjacentPosts(slug);

  // Related — three posts in the same format, skipping the current one.
  const related = SOCIAL_POSTS
    .filter((p) => p.format === post.format && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <PostDetailHero post={post} prev={prev} next={next} />
        <PostRelated posts={related} />
      </main>
      <Footer />
    </>
  );
}
