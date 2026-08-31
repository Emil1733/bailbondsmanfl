
import { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Privacy Policy | Bond Florida',
    description: 'Read how Bond Florida collects, uses, stores, and shares information submitted through its contact form, and how to request a correction or deletion.',
    path: '/privacy',
  }),
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-24 px-6 font-sans text-slate-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-white mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none space-y-6">
          <p>
            Effective date: August 31, 2026
          </p>
          <p>
            Bond Florida ("we", "us", "our") operates this directory and contact form. This policy explains what the website collects, why it is collected, and the choices available to you.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you call our agents or submit a contact form. This may include:
            your name, phone number, the defendant&apos;s name, and a short optional directory question. The form also records the submission time and source page. Basic server and bot-protection logs may contain an IP address, browser information, request timestamps, and automated-abuse signals for security and troubleshooting.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Use of Information</h2>
          <p>
            We use submitted information to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to the inquiry and provide the requested contact.</li>
            <li>Locate the relevant county or facility information.</li>
            <li>Prevent spam, abuse, and repeated automated submissions.</li>
            <li>Correct directory information and troubleshoot the website.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Data Security</h2>
          <p>
            Contact-form records are transmitted to Airtable for storage and follow-up. Internet transmission and cloud storage cannot be guaranteed to be completely secure, so do not submit charges or case narratives, Social Security numbers, identification images, immigration identifiers, payment-card or bank details, medical records, account passwords, or confidential attorney communications through this form.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Sharing and Service Providers</h2>
          <p>
            We do not sell contact-form information. Vercel processes hosting, delivery, server logs, analytics, and automated-abuse signals. Airtable stores the contact record used for follow-up. Only the site owner and people specifically authorized to respond to inquiries should have access to those records. We may also disclose information when required by law or when reasonably necessary to protect the website and its users.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Retention and Your Choices</h2>
          <p>
            Contact-form records should be reviewed and deleted from Airtable within 90 days of submission unless they are still needed to respond to the inquiry, resolve a dispute, prevent abuse, or meet a legal obligation. Access should be removed promptly when an authorized responder no longer needs it. To ask what contact information we hold, request a correction, or request deletion where permitted, email <a className="text-yellow-500 underline" href="mailto:tevatrosyan13.17@gmail.com">tevatrosyan13.17@gmail.com</a>. We may need to verify the request before acting on it and will respond within 30 days.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. External Links and Policy Changes</h2>
          <p>
            County inmate searches and other official resources are operated by third parties with their own privacy practices. We may revise this policy when the website or its data practices change; the effective date above will identify the current version.
          </p>
        </div>
      </div>
    </main>
  );
}
