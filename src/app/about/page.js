import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { PageHero } from "@/components/PageHero";
import { AboutStory } from "@/sections/about/AboutStory";
import { AboutCredentials } from "@/sections/about/AboutCredentials";
import { AboutTimeline } from "@/sections/about/AboutTimeline";
import { AboutValues } from "@/sections/about/AboutValues";
import { AboutPolicy } from "@/sections/about/AboutPolicy";
import { AboutCta } from "@/sections/about/AboutCta";

export const metadata = {
  title: "About John Hartwell — John for Oregon",
  description:
    "Born in Coos Bay, made by Oregon. Meet John Hartwell — Reed College professor, AFT union rep, and the candidate running to put working families first.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <PageHero
          eyebrow="The Candidate · 2026"
          title="A neighbor, not a consultant."
          description="John Hartwell isn't a career politician. He's a Reed College professor, AFT union rep, and the dad of three Oregon public-school kids — running because the Oregon that built him is slipping away from the next generation."
          image="https://picsum.photos/seed/john-portrait-about/1000/1250"
          imageAlt="John Hartwell speaking at a town hall in Oregon"
          imageCaption="Town hall · Eugene"
          imageMeta="February 2026"
        />
        <AboutStory />
        <AboutCredentials />
        <AboutTimeline />
        <AboutValues />
        <AboutPolicy />
        <AboutCta />
      </main>
      <Footer />
    </>
  );
}
