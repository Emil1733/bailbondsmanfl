
import { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Terms of Service | Bond Florida',
    description: 'Read the terms governing use of the Bond Florida directory, including informational limits, external resources, contact requests, and corrections.',
    path: '/terms',
  }),
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-24 px-6 font-sans text-slate-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-white mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-none space-y-6">
          <p>
            Effective date: August 31, 2026. By using Bond Florida, you agree to these terms. If you do not agree, do not use the website or submit its contact form.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Directory and Contact Requests</h2>
          <p>
            The website provides a directory of county jail contacts, links to official inmate-search resources, and general educational information. Submitting a form does not create an attorney-client relationship, guarantee that a person is eligible for release, guarantee a response time, or guarantee any outcome. Any service, fee, collateral, or payment arrangement must be stated in a separate written agreement with the responsible provider.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. No Legal Advice or Release Guarantee</h2>
          <p>
            Website content is general information, not legal advice. Bail eligibility, conditions, bond amounts, booking status, and release timing are controlled by courts, detention facilities, and applicable law. Consult a qualified attorney about a specific criminal matter and verify current information with the responsible court, sheriff, jail, or government agency.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Accuracy and External Websites</h2>
          <p>
            We work to keep directory information useful, but facility contacts, procedures, and external links can change without notice. External websites are operated by their respective agencies or owners; we do not control their content, availability, security, or privacy practices. Verify important details directly before relying on them.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Acceptable Use</h2>
          <p>
            Do not misuse the website, attempt unauthorized access, interfere with its operation, submit false or unlawful information, impersonate another person, or use automated tools to overload the contact form. We may restrict access or decline submissions when reasonably necessary to protect the website or other users.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Privacy, Changes, and Contact</h2>
          <p>
            Contact-form data is handled as described in our <a className="text-yellow-500 underline" href="/privacy">Privacy Policy</a>. We may update these terms when the website changes; the effective date above identifies the current version. Questions or correction requests may be sent to <a className="text-yellow-500 underline" href="mailto:tevatrosyan13.17@gmail.com">tevatrosyan13.17@gmail.com</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
