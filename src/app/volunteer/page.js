import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { PageHero } from "@/components/PageHero";
import { VolunteerMission } from "@/sections/volunteer/VolunteerMission";
import { VolunteerStats } from "@/sections/volunteer/VolunteerStats";
import { VolunteerTestimonial } from "@/sections/volunteer/VolunteerTestimonial";
import { VolunteerForm } from "@/sections/volunteer/VolunteerForm";
import { VolunteerOtherWays } from "@/sections/volunteer/VolunteerOtherWays";

export const metadata = {
  title: "Volunteer — John for Oregon",
  description:
    "Knock doors, phone bank, host an event, or chip in. Every shift moves the campaign forward.",
};

export default function VolunteerPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <PageHero
          eyebrow="Join the Team · 2026"
          title="Make a difference. One shift at a time."
          description="We can't out-spend the PACs — but we can out-organize them. Sign up, pick a county, and we'll plug you in within 48 hours."
          image="https://picsum.photos/seed/volunteers-canvassing-oregon/1000/1250"
          imageAlt="Campaign volunteers canvassing in Portland"
          imageCaption="SE Portland canvass"
          imageMeta="Spring 2026"
        />
        <VolunteerMission />
        <VolunteerStats />
        <VolunteerTestimonial />
        <VolunteerForm />
        <VolunteerOtherWays />
      </main>
      <Footer />
    </>
  );
}
