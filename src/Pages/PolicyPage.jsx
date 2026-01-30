import React from 'react';
import { Mail, ArrowLeft, Clock, ShieldCheck, Cookie, Database, Trash2, Globe, ShieldAlert, Info } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* Navigation / Header */}
      <nav className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-[80rem] mx-auto px-[5vw] h-[4rem] flex items-center justify-between">
          <div className="flex items-center gap-[0.5rem] text-white font-bold tracking-tight" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
            <ShieldCheck className="w-[1.5rem] h-[1.5rem] text-blue-500" />
            <span>Legal Center</span>
          </div>
          <button
            onClick={() =>
              window.location.href = "https://thirdvizion.com"
            }
            className="font-medium hover:text-white transition-colors flex items-center gap-[0.5rem]" style={{ fontSize: 'clamp(0.75rem, 1vw, 0.875rem)' }}>
            <ArrowLeft className="w-[1rem] h-[1rem]" /> Back to Home
          </button>
        </div>
      </nav>

      <main className="max-w-[64rem] mx-auto px-[5vw] py-[8vw] lg:py-[5rem]">
        {/* Header Section */}
        <header className="mb-[4rem] border-b border-zinc-800 pb-[3rem]">
          <h1
            className="font-extrabold text-white mb-[1.5rem] tracking-tight leading-[1.1]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            Privacy Policy
          </h1>
          <div className="flex flex-wrap items-center gap-[1.5rem] text-zinc-400" style={{ fontSize: 'clamp(0.8rem, 1.2vw, 1rem)' }}>
            <div className="flex items-center gap-[0.5rem]">
              <Clock className="w-[1.1rem] h-[1.1rem]" />
              <span>Last updated: January 30, 2026</span>
            </div>
            <div className="px-[1rem] py-[0.25rem] bg-zinc-900 rounded-full border border-zinc-800 text-zinc-300">
              Official Document
            </div>
          </div>
          <p
            className="mt-[2rem] leading-relaxed text-zinc-400 max-w-[45rem]"
            style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}
          >
            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
          </p>
        </header>

        {/* Content Body */}
        <div className="space-y-[6rem]">

          {/* Section 1: Interpretation & Definitions */}
          <section id="definitions">
            <h2 className="font-bold text-white mb-[2rem] flex items-center gap-[0.75rem]" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
              <span className="text-blue-500 font-mono text-[0.8em]">01.</span>
              Interpretation and Definitions
            </h2>

            <div className="space-y-[2.5rem]">
              <div>
                <h3 className="font-semibold text-zinc-100 mb-[0.75rem]" style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)' }}>Interpretation</h3>
                <p className="leading-relaxed" style={{ fontSize: 'clamp(0.95rem, 1.3vw, 1.125rem)' }}>
                  The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-zinc-100 mb-[1rem]" style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)' }}>Definitions</h3>
                <div className="grid gap-[1.25rem]">
                  {[
                    { title: "Account", desc: "Means a unique account created for You to access our Service or parts of our Service." },
                    { title: "Affiliate", desc: "Means an entity that controls, is controlled by or is under common control with a party, where 'control' means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority." },
                    { title: "Company", desc: "(referred to as either 'the Company', 'We', 'Us' or 'Our' in this Agreement) refers to My Company Name." },
                    { title: "Cookies", desc: "Are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses." },
                    { title: "Country", desc: "Refers to: United Kingdom" },
                    { title: "Device", desc: "Means any device that can access the Service such as a computer, a cellphone or a digital tablet." },
                    { title: "Personal Data", desc: "Is any information that relates to an identified or identifiable individual." },
                    { title: "Service", desc: "Refers to the Website." },
                    { title: "Usage Data", desc: "Refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit)." }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-zinc-900/40 border border-zinc-800/60 p-[1.5rem] rounded-[1rem] hover:bg-zinc-900/60 transition-colors">
                      <strong className="text-white block mb-[0.25rem]" style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)' }}>{item.title}</strong>
                      <span className="text-zinc-400" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1rem)' }}>{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Data Collection Details */}
          <section id="collection">
            <h2 className="font-bold text-white mb-[2rem] flex items-center gap-[0.75rem]" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
              <span className="text-blue-500 font-mono text-[0.8em]">02.</span>
              Collecting and Using Your Personal Data
            </h2>

            <div className="space-y-[3rem]">
              <div className="ml-[1.5rem] border-l-2 border-zinc-800 pl-[2rem] space-y-[2.5rem]">
                <div>
                  <h3 className="font-bold text-zinc-100 mb-[1rem]" style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)' }}>Types of Data Collected</h3>
                  <h4 className="font-bold text-zinc-300 mb-[0.75rem] underline decoration-blue-500/30 underline-offset-8" style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)' }}>Personal Data</h4>
                  <p className="mb-[1.5rem]" style={{ fontSize: 'clamp(0.95rem, 1.3vw, 1.125rem)' }}>
                    While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-[0.75rem] text-zinc-400" style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1rem)' }}>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Email address</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> First name and last name</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Phone number</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Usage Data</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-zinc-300 mb-[0.75rem] underline decoration-blue-500/30 underline-offset-8" style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)' }}>Tracking Technologies and Cookies</h4>
                  <p className="mb-[1.5rem] text-zinc-400" style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1rem)' }}>
                    We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service.
                  </p>
                  <div className="space-y-[1.5rem]">
                    <div className="flex gap-[1.5rem] p-[1.5rem] bg-zinc-900/30 rounded-xl border border-zinc-800/50">
                      <Cookie className="w-[1.5rem] h-[1.5rem] text-blue-400 shrink-0" />
                      <div>
                        <p className="font-semibold text-white mb-1">Session Cookies</p>
                        <p className="text-sm text-zinc-500">Essential to provide You with services available through the Website and to enable You to use some of its features.</p>
                      </div>
                    </div>
                    <div className="flex gap-[1.5rem] p-[1.5rem] bg-zinc-900/30 rounded-xl border border-zinc-800/50">
                      <ShieldAlert className="w-[1.5rem] h-[1.5rem] text-blue-400 shrink-0" />
                      <div>
                        <p className="font-semibold text-white mb-1">Notice Acceptance Cookies</p>
                        <p className="text-sm text-zinc-500">Identifies if users have accepted the use of cookies on the Website.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Retention & Transfer */}
          <section id="retention" className="grid gap-[4rem] lg:grid-cols-2">
            <div className="bg-zinc-900/20 border border-zinc-800 p-[2.5rem] rounded-[2rem]">
              <Database className="w-[2.5rem] h-[2.5rem] text-blue-500 mb-[1.5rem]" />
              <h2 className="text-xl font-bold text-white mb-[1rem]">Retention of Your Personal Data</h2>
              <p className="text-zinc-400 leading-relaxed" style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1rem)' }}>
                The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements.
              </p>
            </div>

            <div className="bg-zinc-900/20 border border-zinc-800 p-[2.5rem] rounded-[2rem]">
              <Globe className="w-[2.5rem] h-[2.5rem] text-blue-500 mb-[1.5rem]" />
              <h2 className="text-xl font-bold text-white mb-[1rem]">Transfer of Your Personal Data</h2>
              <p className="text-zinc-400 leading-relaxed" style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1rem)' }}>
                Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state.
              </p>
            </div>
          </section>

          {/* Section 4: Deletion & Disclosure */}
          <section id="deletion">
            <h2 className="font-bold text-white mb-[2rem] flex items-center gap-[0.75rem]" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
              <span className="text-blue-500 font-mono text-[0.8em]">03.</span>
              Your Data Rights
            </h2>
            <div className="space-y-[2rem]">
              <div className="bg-zinc-900 border border-zinc-800 p-[3vw] rounded-[2rem] flex flex-col md:flex-row gap-[2rem] items-center">
                <Trash2 className="w-[4rem] h-[4rem] text-red-500/50 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Delete Your Personal Data</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You. Our Service may give You the ability to delete certain information about You from within the Service. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.
                  </p>
                </div>
              </div>

              <div className="grid gap-[2rem] md:grid-cols-2">
                <div className="p-[2rem] border border-zinc-800 rounded-2xl">
                  <h4 className="font-bold text-white mb-3">Business Transactions</h4>
                  <p className="text-sm text-zinc-500">If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred.</p>
                </div>
                <div className="p-[2rem] border border-zinc-800 rounded-2xl">
                  <h4 className="font-bold text-white mb-3">Law Enforcement</h4>
                  <p className="text-sm text-zinc-500">Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Security, Children, & Policy Changes */}
          <section id="additional" className="space-y-[4rem]">
            <div className="bg-blue-600/5 border border-blue-500/20 p-[3rem] rounded-[2rem]">
              <h3 className="text-2xl font-bold text-white mb-4">Security of Your Personal Data</h3>
              <p className="text-zinc-400 leading-relaxed">The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-[3rem]">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Children's Privacy</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Links to Other Websites</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
              </div>
            </div>

            <div className="border-t border-zinc-800 pt-[4rem]">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-500" />
                Changes to this Privacy Policy
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page. We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.</p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="pt-[4rem] border-t border-zinc-800 text-center pb-[5rem]">
            <h2 className="font-bold text-white mb-[1rem]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Contact Us</h2>
            <p className="text-zinc-400 mb-[3rem]" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}>If you have any questions about this Privacy Policy, You can contact us:</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-[1.5rem]">
              <a
                href="mailto:support@example.com"
                className="flex items-center gap-[0.75rem] px-[2.5rem] py-[1rem] bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all duration-200 shadow-xl shadow-white/5"
                style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1rem)' }}
              >
                <Mail className="w-[1.2rem] h-[1.2rem]" />
                By email: support@example.com
              </a>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 font-medium underline underline-offset-4"
                style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1rem)' }}
              >
                Visit our Contact Page
              </a>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 py-[4rem]">
        <div className="max-w-[80rem] mx-auto px-[5vw] flex flex-col md:flex-row justify-between items-center gap-[2rem] text-zinc-500" style={{ fontSize: 'clamp(0.75rem, 1vw, 0.875rem)' }}>
          <p>© 2026 My Company Name. All rights reserved.</p>
          <div className="flex gap-[3rem]">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;