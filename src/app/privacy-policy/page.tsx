import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Konnon Technologies",
  description: "Privacy Policy for Konnon Technologies Private Limited — how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "March 17, 2026";

  return (
    <main className="min-h-screen bg-[#030407] text-slate-200">
      {/* Header */}
      <div className="border-b border-slate-800/60 bg-[#030407]/80 backdrop-blur-xl sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
            <span>←</span> Back to Konnon
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        {/* Title */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 mb-6 text-xs text-slate-400 uppercase tracking-widest">
            Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-slate-500 text-sm">
            Last updated: <span className="text-slate-400">{lastUpdated}</span>
          </p>
        </div>

        {/* Intro */}
        <Section>
          <P>
            Konnon Technologies Private Limited (&ldquo;Konnon&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), incorporated under the Companies Act 2013 with its registered office in Bengaluru, Karnataka, India, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at <strong className="text-slate-300">konnon.com</strong> (the &ldquo;Site&rdquo;) or interact with our services.
          </P>
          <P>
            By accessing or using the Site, you consent to the data practices described in this policy. This policy complies with the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (&ldquo;SPDI Rules&rdquo;), and the Digital Personal Data Protection Act, 2023 (&ldquo;DPDP Act&rdquo;) of India.
          </P>
        </Section>

        <H2>1. Information We Collect</H2>
        <Section>
          <H3>1.1 Information You Provide Directly</H3>
          <ul className="list-disc list-inside space-y-2 text-slate-400 text-base leading-relaxed">
            <li><strong className="text-slate-300">Contact Form Data:</strong> When you contact us via our Contact page, we collect your name, email address, and message content.</li>
            <li><strong className="text-slate-300">Career Applications:</strong> When you apply for a position, we collect your name, email address, phone number, resume/CV files, cover letters, and any other information you voluntarily submit.</li>
            <li><strong className="text-slate-300">Account Information:</strong> If you register for any Konnon admin or partner portal, we collect login credentials and profile information.</li>
          </ul>

          <H3>1.2 Information Collected Automatically</H3>
          <ul className="list-disc list-inside space-y-2 text-slate-400 text-base leading-relaxed">
            <li><strong className="text-slate-300">Usage Data:</strong> IP address, browser type, operating system, referring URLs, pages visited, and timestamps.</li>
            <li><strong className="text-slate-300">Device Information:</strong> Hardware model, device identifiers, and screen resolution to optimise delivery of our Site.</li>
            <li><strong className="text-slate-300">Cookies &amp; Local Storage:</strong> Session cookies for authentication and preference storage. We do not use tracking cookies for advertising purposes.</li>
          </ul>
        </Section>

        <H2>2. How We Use Your Information</H2>
        <Section>
          <P>We use the information we collect for the following purposes:</P>
          <ul className="list-disc list-inside space-y-2 text-slate-400 text-base leading-relaxed">
            <li>To respond to your contact form enquiries and provide customer support.</li>
            <li>To evaluate job applications and communicate with candidates about open roles.</li>
            <li>To operate, maintain, and improve our website and services.</li>
            <li>To send you administrative communications (not marketing emails without explicit consent).</li>
            <li>To detect, prevent, and address technical issues and security vulnerabilities.</li>
            <li>To comply with applicable laws and legal obligations, including requests from Indian regulatory authorities.</li>
            <li>To analyse aggregated, anonymised usage patterns to improve the user experience.</li>
          </ul>
          <P>
            We will never sell your personal data to third parties for commercial purposes.
          </P>
        </Section>

        <H2>3. Cookies</H2>
        <Section>
          <P>
            Our Site uses strictly necessary cookies to ensure the website functions correctly (e.g., session management, CSRF protection). We do not deploy third-party advertising or behavioural tracking cookies.
          </P>
          <P>
            You may disable cookies via your browser settings. Please note that disabling cookies may affect the functionality of certain parts of the site, such as the admin portal.
          </P>
        </Section>

        <H2>4. Third-Party Services</H2>
        <Section>
          <P>We use the following third-party providers to operate our services. Each has its own privacy policy:</P>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border border-slate-800 rounded-xl overflow-hidden">
              <thead className="bg-slate-900 text-slate-300 uppercase text-xs">
                <tr>
                  <th className="px-4 py-3">Provider</th>
                  <th className="px-4 py-3">Purpose</th>
                  <th className="px-4 py-3">Data Shared</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-400">
                {[
                  ["Google Firebase", "Database, authentication, file storage (resumes)", "Name, email, file uploads"],
                  ["Vercel / Firebase App Hosting", "Website hosting and CDN delivery", "IP address, usage logs"],
                  ["Spline (spline.design)", "3D scene rendering on hero section", "None — client-side only"],
                ].map(([provider, purpose, data]) => (
                  <tr key={provider} className="hover:bg-slate-900/40 transition-colors">
                    <td className="px-4 py-3 text-slate-300 font-medium">{provider}</td>
                    <td className="px-4 py-3">{purpose}</td>
                    <td className="px-4 py-3">{data}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <H2>5. Data Retention</H2>
        <Section>
          <ul className="list-disc list-inside space-y-2 text-slate-400 text-base leading-relaxed">
            <li><strong className="text-slate-300">Contact enquiries:</strong> Retained for up to 2 years for follow-up purposes, then securely deleted.</li>
            <li><strong className="text-slate-300">Job applications:</strong> Retained for up to 1 year from the date of application. If you are hired, your data is transferred to our HR records subject to our employee privacy practices.</li>
            <li><strong className="text-slate-300">Server logs:</strong> Automatically deleted after 90 days.</li>
          </ul>
        </Section>

        <H2>6. Data Security</H2>
        <Section>
          <P>
            We implement industry-standard security measures including TLS/HTTPS encryption for data in transit, Firebase Security Rules for access control, and role-based access controls for internal data access. However, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security.
          </P>
          <P>
            In the event of a data breach that affects your personal data, we will notify you in accordance with applicable Indian law.
          </P>
        </Section>

        <H2>7. Your Rights (DPDP Act 2023)</H2>
        <Section>
          <P>Under the Digital Personal Data Protection Act, 2023 and other applicable law, you have the following rights regarding your personal data:</P>
          <ul className="list-disc list-inside space-y-2 text-slate-400 text-base leading-relaxed">
            <li><strong className="text-slate-300">Right to Access:</strong> Request a copy of the personal data we hold about you.</li>
            <li><strong className="text-slate-300">Right to Correction:</strong> Request correction of inaccurate or incomplete personal data.</li>
            <li><strong className="text-slate-300">Right to Erasure:</strong> Request deletion of your personal data where we no longer have a lawful basis to retain it.</li>
            <li><strong className="text-slate-300">Right to Withdraw Consent:</strong> Withdraw consent for data processing at any time, without affecting the lawfulness of processing before withdrawal.</li>
            <li><strong className="text-slate-300">Right to Nominate:</strong> Nominate another individual to exercise your rights in the event of your death or incapacity.</li>
            <li><strong className="text-slate-300">Right to Grievance:</strong> Lodge a complaint with our Data Protection Officer or the Data Protection Board of India.</li>
          </ul>
          <P>
            To exercise any of these rights, email us at <a href="mailto:legal@konnon.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">legal@konnon.com</a>. We will respond within 30 days.
          </P>
        </Section>

        <H2>8. Children&apos;s Privacy</H2>
        <Section>
          <P>
            Our Site is not directed to individuals under the age of 18. We do not knowingly collect personal data from minors. If we become aware that we have inadvertently collected information from a minor, we will promptly delete it.
          </P>
        </Section>

        <H2>9. Cross-Border Data Transfers</H2>
        <Section>
          <P>
            Some of our third-party service providers (e.g., Google Firebase) may store and process data on servers located outside India. Where personal data is transferred internationally, we ensure appropriate safeguards are in place in compliance with the DPDP Act 2023 and any applicable transfer regulations notified by the Government of India.
          </P>
        </Section>

        <H2>10. Changes to This Policy</H2>
        <Section>
          <P>
            We may update this Privacy Policy from time to time. We will notify you of material changes by updating the &ldquo;Last updated&rdquo; date at the top of this page. We encourage you to review this page periodically. Continued use of the Site after changes are posted constitutes your acceptance of the revised policy.
          </P>
        </Section>

        <H2>11. Contact Us</H2>
        <Section>
          <P>
            If you have any questions about this Privacy Policy, wish to exercise your rights, or wish to file a grievance, please contact:
          </P>
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/60 space-y-2 text-sm">
            <p className="text-slate-300 font-bold text-base">Konnon Technologies Private Limited</p>
            <p className="text-slate-400">Bengaluru, Karnataka, India</p>
            <p className="text-slate-400">
              Email:{" "}
              <a href="mailto:legal@konnon.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                legal@konnon.com
              </a>
            </p>
            <p className="text-slate-400">
              General:{" "}
              <a href="mailto:hello@konnon.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                hello@konnon.com
              </a>
            </p>
          </div>
        </Section>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-wrap gap-6 text-sm text-slate-500">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
      </div>
    </main>
  );
}

/* ─── Layout Helpers ─────────────────────────────────── */
function Section({ children }: { children: React.ReactNode }) {
  return <div className="mb-10 space-y-4">{children}</div>;
}
function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold text-white mt-12 mb-4 tracking-tight border-l-2 border-slate-700 pl-4">
      {children}
    </h2>
  );
}
function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-base font-bold text-slate-200 mt-6 mb-2 uppercase tracking-widest text-xs">{children}</h3>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="text-slate-400 text-base leading-relaxed">{children}</p>;
}
