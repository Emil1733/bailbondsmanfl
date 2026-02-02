
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Bond Florida',
  description: 'Privacy Policy for Statewide Bail Bonds Florida.',
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
            Effective Date: {new Date().getFullYear()}-01-01
          </p>
          <p>
            At Statewide Bail Bonds Florida ("we", "us", "our"), we respect your privacy and are committed to protecting the personal information you share with us.
            This policy outlines how we handle your data.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you call our agents or submit a contact form. This may include:
            Name, Phone Number, Email Address, and Case Details relating to the defendant.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Use of Information</h2>
          <p>
            We use your information solely to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Facilitate the bail bond process and secure release.</li>
            <li>Communicate with indemnitors regarding court dates and payment schedules.</li>
            <li>Comply with Florida Department of Financial Services regulations.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Data Security</h2>
          <p>
            We implement strict security measures to protect your personal and financial data. We do not sell your personal information to third-party marketing agencies.
          </p>
        </div>
      </div>
    </main>
  );
}
