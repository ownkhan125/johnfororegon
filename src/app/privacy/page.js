import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";

export const metadata = {
  title: "Privacy Policy — John for Oregon",
  description:
    "How John for Oregon collects, uses, and protects your data when you visit this site or sign up to volunteer.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <LegalLayout
          eyebrow="Legal"
          title="Privacy Policy."
          updated="June 1, 2026"
        >
          <p className="text-lg leading-relaxed text-cream/85">
            Hartwell for Oregon (the &ldquo;campaign,&rdquo; &ldquo;we,&rdquo;
            or &ldquo;us&rdquo;) respects your privacy. This policy explains
            what information we collect when you visit johnfororegon.com or
            sign up to volunteer, and how we use it.
          </p>

          <LegalSection heading="Information we collect">
            <p>
              When you fill out a form on this site — to volunteer, host an
              event, contact us, or subscribe to SMS updates — we collect the
              information you provide, including your name, email address,
              phone number, ZIP code, and any message content you share.
            </p>
            <p>
              We also collect basic technical information from your browser,
              such as your IP address, device type, and pages visited, to keep
              the site secure and improve performance.
            </p>
          </LegalSection>

          <LegalSection heading="How we use your information">
            <p>
              We use the information you provide to coordinate volunteer
              shifts, respond to messages, send campaign updates, and report
              aggregated activity to the FEC where required by law.
            </p>
            <p>
              We never sell your personal information to third parties. We
              share data only with vendors that help operate the campaign
              (such as email and SMS providers) under contracts that require
              them to protect it.
            </p>
          </LegalSection>

          <LegalSection heading="SMS communications">
            <p>
              If you opt in to SMS updates, message and data rates may apply.
              Frequency varies. Reply STOP at any time to unsubscribe, or HELP
              for help. We never share your phone number with affiliates for
              marketing purposes.
            </p>
          </LegalSection>

          <LegalSection heading="Your choices">
            <p>
              You can request to access, correct, or delete the personal
              information we hold about you by emailing
              <span> info@johnfororegon.com</span>. You may also opt out of
              email and SMS updates at any time using the unsubscribe links or
              keywords provided in each message.
            </p>
          </LegalSection>

          <LegalSection heading="Cookies">
            <p>
              We use a small number of essential cookies to keep the site
              working. We do not use third-party advertising cookies. You can
              configure your browser to refuse cookies at any time.
            </p>
          </LegalSection>

          <LegalSection heading="Children's privacy">
            <p>
              This site is intended for adults. We do not knowingly collect
              information from anyone under 16. If you believe a child has
              submitted information, please contact us so we can delete it.
            </p>
          </LegalSection>

          <LegalSection heading="Contact us">
            <p>
              Questions about this policy? Email
              <span> info@johnfororegon.com</span> or write to
              Hartwell for Oregon, PO Box 1776, Salem, OR 97301.
            </p>
          </LegalSection>
        </LegalLayout>
      </main>
      <Footer />
    </>
  );
}
