import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";

export const metadata = {
  title: "Terms of Service — John for Oregon",
  description:
    "The rules of the road for using johnfororegon.com.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <LegalLayout
          eyebrow="Legal"
          title="Terms of Service."
          updated="June 1, 2026"
        >
          <p className="text-lg leading-relaxed text-cream/85">
            These terms govern your use of johnfororegon.com (the
            &ldquo;site&rdquo;), operated by Hartwell for Oregon (the
            &ldquo;campaign,&rdquo; &ldquo;we,&rdquo; or &ldquo;us&rdquo;). By
            visiting the site, you agree to these terms.
          </p>

          <LegalSection heading="Use of the site">
            <p>
              You may use this site for personal, lawful purposes — to learn
              about the campaign, sign up to volunteer, attend events, or
              contact us. You may not use the site to harass other users,
              attempt to bypass security, scrape personal data, or distribute
              malicious code.
            </p>
          </LegalSection>

          <LegalSection heading="Content and ownership">
            <p>
              All content on this site — including text, images, logos, and
              video — is the property of the campaign or its licensors. You
              may share campaign content on social media and in personal
              communications. You may not reproduce it for commercial use
              without written permission.
            </p>
          </LegalSection>

          <LegalSection heading="Submissions">
            <p>
              If you submit a message, story, or other content through a form
              on this site, you grant the campaign a non-exclusive right to
              use it for campaign purposes — including in newsletters, social
              media, or campaign materials. We will never use your personal
              story without your explicit consent.
            </p>
          </LegalSection>

          <LegalSection heading="Donations">
            <p>
              Donations are governed by FEC regulations. By contributing, you
              affirm that you are a U.S. citizen or lawful permanent resident,
              over 18, contributing your own funds — and that you are not a
              federal contractor or foreign national. Contributions are not
              tax-deductible.
            </p>
          </LegalSection>

          <LegalSection heading="Disclaimers">
            <p>
              The site is provided on an &ldquo;as is&rdquo; basis. The
              campaign does not warrant that the site will be uninterrupted or
              error-free, and is not liable for damages arising from its use,
              to the maximum extent permitted by law.
            </p>
          </LegalSection>

          <LegalSection heading="Changes">
            <p>
              We may update these terms from time to time. We will post the
              date of the latest update at the top of this page. Continued use
              of the site means you accept the updated terms.
            </p>
          </LegalSection>

          <LegalSection heading="Contact">
            <p>
              Questions? Email
              <span> info@johnfororegon.com</span> or write to Hartwell for
              Oregon, PO Box 1776, Salem, OR 97301.
            </p>
          </LegalSection>
        </LegalLayout>
      </main>
      <Footer />
    </>
  );
}
