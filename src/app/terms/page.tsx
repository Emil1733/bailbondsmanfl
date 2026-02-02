
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Bond Florida',
  description: 'Terms of Service for Statewide Bail Bonds Florida.',
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
            By accessing the website of Statewide Bail Bonds Florida, you agree to the following terms and conditions.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Services</h2>
          <p>
            We provide licensed surety bail bond services in the State of Florida. All bonds are subject to approval and underwriting requirements.
            The 10% premium fee is mandated by Florida State Law and is fully earned upon posting of the bond. It is non-refundable.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Indemnitor Responsibility</h2>
          <p>
            As a signer (indemnitor) on a bail bond, you are financially responsible for the full face value of the bond if the defendant fails to appear in court.
            It is your responsibility to ensure the defendant attends all required hearings.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Disclaimer</h2>
          <p>
            The information on this website is for general informational purposes only and does not constitute legal advice.
            For legal counsel regarding a criminal case, please consult a qualified attorney.
          </p>
        </div>
      </div>
    </main>
  );
}
