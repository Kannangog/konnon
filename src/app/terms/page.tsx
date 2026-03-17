import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Konnon Technologies",
  description: "Terms and Conditions governing use of the Konnon Technologies website and services.",
};

export default function TermsPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Terms of Service</h1>
          <p className="text-slate-500 text-sm">
            Last updated: <span className="text-slate-400">{lastUpdated}</span>
          </p>
        </div>

        <Section>
          <P>
            These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (&ldquo;User&rdquo;, &ldquo;you&rdquo;) and Konnon Technologies Private Limited (&ldquo;Konnon&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), a company incorporated under the Companies Act, 2013 with its registered office in Bengaluru, Karnataka, India.
          </P>
          <P>
            By accessing or using the website at <strong className="text-slate-300">konnon.com</strong>, any subdomains thereof, or any products or services offered by Konnon (collectively, the &ldquo;Services&rdquo;), you agree to be bound by these Terms. If you do not agree, please discontinue use of the Services immediately.
          </P>
        </Section>

        <H2>1. Eligibility</H2>
        <Section>
          <P>
            You must be at least 18 years of age to use our Services. By using the Services, you represent and warrant that you are at least 18 years old, have the legal capacity to enter into this agreement, and are not prohibited from doing so under any applicable law.
          </P>
        </Section>

        <H2>2. Permitted Use</H2>
        <Section>
          <P>You agree to use the Site only for lawful purposes. You must not:</P>
          <ul className="list-disc list-inside space-y-2 text-slate-400 text-base leading-relaxed">
            <li>Use the Site in any way that violates applicable local, national, or international laws or regulations.</li>
            <li>Attempt to gain unauthorised access to any part of the Site, its servers, databases, or any connected infrastructure.</li>
            <li>Transmit unsolicited commercial communications (spam).</li>
            <li>Introduce viruses, Trojan horses, worms, logic bombs, or other malicious material.</li>
            <li>Use automated tools (scrapers, crawlers, bots) to extract content without our prior written consent.</li>
            <li>Attempt to decompile, reverse engineer, or disassemble any software used to provide the Services.</li>
            <li>Impersonate Konnon, its employees, or any other person or entity.</li>
          </ul>
        </Section>

        <H2>3. Intellectual Property</H2>
        <Section>
          <P>
            All content on this Site — including but not limited to text, graphics, logos, icons, images, audio clips, code, and software — is the exclusive property of Konnon Technologies Private Limited or its content suppliers and is protected by Indian and international copyright law, trademark law, and other applicable intellectual property laws.
          </P>
          <P>
            You are granted a limited, non-exclusive, non-transferable, revocable licence to access and view the Site for your personal, non-commercial use. No content may be reproduced, distributed, modified, transmitted, republished, displayed, or performed without the prior written consent of Konnon.
          </P>
          <P>
            &ldquo;KONNON&rdquo;, &ldquo;RONNON AI&rdquo;, and associated logos are trademarks of Konnon Technologies Private Limited. Unauthorised use is strictly prohibited.
          </P>
        </Section>

        <H2>4. User-Submitted Content</H2>
        <Section>
          <P>
            When you submit content to us (e.g., enquiries, job application materials), you grant Konnon a worldwide, non-exclusive, royalty-free licence to use, store, and process that content solely for the purpose of responding to your submission and providing the requested service.
          </P>
          <P>
            You represent that any content you submit is your own or that you have the right to submit it, and that it does not infringe the rights of any third party.
          </P>
        </Section>

        <H2>5. Third-Party Links</H2>
        <Section>
          <P>
            The Site may contain links to third-party websites (e.g., ronnon.com, GitHub repositories, partner sites). These links are provided for convenience only. Konnon has no control over, and assumes no responsibility for, the content, privacy policies, or practices of third-party sites. Visiting linked sites is at your own risk.
          </P>
        </Section>

        <H2>6. Disclaimers</H2>
        <Section>
          <P>
            THE SITE AND SERVICES ARE PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, OR NON-INFRINGEMENT.
          </P>
          <P>
            Konnon does not warrant that (i) the Services will be uninterrupted or error-free, (ii) any defects will be corrected, (iii) the Site is free of viruses or other harmful components, or (iv) the results of using the Services will meet your requirements.
          </P>
          <P>
            Information on this Site is provided for general informational purposes only and should not be relied upon as professional advice (legal, financial, technical, or otherwise).
          </P>
        </Section>

        <H2>7. Limitation of Liability</H2>
        <Section>
          <P>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, KONNON TECHNOLOGIES PRIVATE LIMITED, ITS DIRECTORS, EMPLOYEES, CONTRACTORS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES — INCLUDING LOSS OF PROFITS, DATA, GOODWILL, OR BUSINESS INTERRUPTION — ARISING FROM OR RELATED TO YOUR USE OF OR INABILITY TO USE THE SERVICES, EVEN IF KONNON HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </P>
          <P>
            In jurisdictions that do not allow the exclusion or limitation of liability for consequential or incidental damages, our liability is limited to the fullest extent permitted by applicable law.
          </P>
        </Section>

        <H2>8. Indemnification</H2>
        <Section>
          <P>
            You agree to indemnify, defend, and hold harmless Konnon Technologies Private Limited and its officers, directors, employees, agents, and partners from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or related to: (a) your access to or use of the Services; (b) your violation of these Terms; (c) your violation of any rights of a third party; or (d) any content you submit to the Services.
          </P>
        </Section>

        <H2>9. Privacy</H2>
        <Section>
          <P>
            Your use of the Services is also governed by our{" "}
            <Link href="/privacy-policy" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Privacy Policy
            </Link>
            , which is incorporated into these Terms by reference. Please review it carefully.
          </P>
        </Section>

        <H2>10. Modifications</H2>
        <Section>
          <P>
            Konnon reserves the right to modify these Terms at any time at its sole discretion. We will indicate the date of the most recent revision at the top of this page. Your continued use of the Services after any changes constitutes your acceptance of the revised Terms. If you disagree with the changes, please discontinue use of the Services.
          </P>
        </Section>

        <H2>11. Termination</H2>
        <Section>
          <P>
            Konnon reserves the right to terminate or suspend your access to the Services, without notice and at our sole discretion, for conduct that we believe violates these Terms, is harmful to other users, us, third parties, or for any other reason. Upon termination, all rights and licences granted to you will immediately cease.
          </P>
        </Section>

        <H2>12. Governing Law &amp; Dispute Resolution</H2>
        <Section>
          <P>
            These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. The courts of competent jurisdiction in Bengaluru, Karnataka, India shall have exclusive jurisdiction over any disputes arising from these Terms or your use of the Services.
          </P>
          <P>
            In the event of any dispute, the parties agree to first attempt to resolve the matter amicably through good-faith negotiation for a period of 30 days before initiating formal legal proceedings.
          </P>
        </Section>

        <H2>13. Severability</H2>
        <Section>
          <P>
            If any provision of these Terms is held to be unenforceable or invalid under applicable law, that provision will be modified to the minimum extent necessary to make it enforceable, and the remaining provisions will continue in full force and effect.
          </P>
        </Section>

        <H2>14. Entire Agreement</H2>
        <Section>
          <P>
            These Terms, together with the Privacy Policy, constitute the entire agreement between you and Konnon Technologies Private Limited regarding your use of the Services and supersede all prior agreements and understandings between the parties.
          </P>
        </Section>

        <H2>15. Contact Us</H2>
        <Section>
          <P>For questions about these Terms, please contact:</P>
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/60 space-y-2 text-sm">
            <p className="text-slate-300 font-bold text-base">Konnon Technologies Private Limited</p>
            <p className="text-slate-400">Bengaluru, Karnataka, India</p>
            <p className="text-slate-400">
              Legal:{" "}
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
          <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
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
function P({ children }: { children: React.ReactNode }) {
  return <p className="text-slate-400 text-base leading-relaxed">{children}</p>;
}
