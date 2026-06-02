import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/sections/contact/ContactForm";
import { ContactInfo } from "@/sections/contact/ContactInfo";
import { ContactFaq } from "@/sections/contact/ContactFaq";

export const metadata = {
  title: "Contact — John for Oregon",
  description:
    "Get in touch with the campaign. We read every message.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <PageHero
          eyebrow="Get in Touch"
          title="We want to hear from you."
          description="Press inquiry, scheduling request, neighborhood concern — drop a note below or use the contact lines on this page. We read every message."
          image="https://picsum.photos/seed/john-contact-listening/1000/1250"
          imageAlt="John taking notes at a community event"
          imageCaption="Coffee with constituents"
          imageMeta="Spring 2026"
        />
        <ContactForm />
        <ContactInfo />
        <ContactFaq />
      </main>
      <Footer />
    </>
  );
}
