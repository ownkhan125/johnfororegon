import { notFound } from "next/navigation";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { EVENTS, findEventBySlug, getRelatedEvents } from "@/data/events";
import { EventHero } from "@/sections/event-detail/EventHero";
import { EventDetails } from "@/sections/event-detail/EventDetails";
import { EventLocation } from "@/sections/event-detail/EventLocation";
import { EventSchedule } from "@/sections/event-detail/EventSchedule";
import { EventRsvp } from "@/sections/event-detail/EventRsvp";
import { EventCta } from "@/sections/event-detail/EventCta";
import { EventRelated } from "@/sections/event-detail/EventRelated";

export function generateStaticParams() {
  return EVENTS.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const ev = findEventBySlug(slug);
  if (!ev) return { title: "Event not found — John for Oregon" };
  return {
    title: `${ev.title} — John for Oregon`,
    description: ev.summary,
  };
}

export default async function EventDetailPage({ params }) {
  const { slug } = await params;
  const ev = findEventBySlug(slug);
  if (!ev) notFound();
  const related = getRelatedEvents(slug, 3);

  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <EventHero event={ev} />
        <EventDetails event={ev} />
        <EventLocation event={ev} />
        <EventSchedule event={ev} />
        <EventRsvp event={ev} />
        <EventCta event={ev} />
        <EventRelated events={related} />
      </main>
      <Footer />
    </>
  );
}
