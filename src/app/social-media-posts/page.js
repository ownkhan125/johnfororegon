import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { PageHero } from "@/components/PageHero";
import { PostsGallery } from "@/sections/social-posts/PostsGallery";
import { PostsCallout } from "@/sections/social-posts/PostsCallout";

export const metadata = {
  title: "Social Media Posts — John for Oregon",
  description:
    "A library of campaign social-media creatives — feed posts and vertical stories, designed for organizers, volunteers, and the press.",
};

export default function SocialMediaPostsPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <PageHero
          eyebrow="Content Library · MMXXVI"
          title="Social Media Posts."
          description="A working set of campaign creatives — twenty pieces across feed and story formats. Open any post for the full-resolution view, share-ready and unclipped."
          image="https://picsum.photos/seed/john-social-library/1000/1250"
          imageAlt="John on a stage, addressing supporters"
          imageCaption="Pioneer Square rally"
          imageMeta="Spring 2026"
        />
        <PostsGallery />
        <PostsCallout />
      </main>
      <Footer />
    </>
  );
}
