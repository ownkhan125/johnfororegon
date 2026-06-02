import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { PageHero } from "@/components/PageHero";
import { EventsList } from "@/sections/events/EventsList";
import { EventsCallout } from "@/sections/events/EventsCallout";

export const metadata = {
  title: "Events — John for Oregon",
  description:
    "Town halls, canvasses, and house parties — find the next time John will be in your county.",
};

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <PageHero
          eyebrow="On the Trail · 2026"
          title="Join the campaign."
          description="Every event is free and open. Bring a friend, bring a tough question — we'll bring the coffee."
          image="https://picsum.photos/seed/john-rally-events/1000/1250"
          imageAlt="John at a rally in Oregon"
          imageCaption="Pioneer Square rally"
          imageMeta="April 2026"
        />
        <EventsList />
        <EventsCallout />
      </main>
      <Footer />
    </>
  );
}
