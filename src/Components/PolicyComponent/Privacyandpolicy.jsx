import React from "react";
import { Shield, Lock, Eye, Database, Users, Mail, Phone, MapPin, ChevronRight } from "lucide-react";

const PrivacyAndPolicy = () => {
  return (
    <div className="min-h-screen bg-black pt-40 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center mb-8">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-30"></div>
              <Shield className="relative h-16 w-16 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Policy</span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            At ThirdVizion Labs, we are committed to protecting your privacy and ensuring 
            the security of your personal information. Your trust is our priority.
          </p>
          <div className="mt-8 flex items-center justify-center text-gray-500">
           
            
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Introduction */}
            <section className="relative">
              <div className="absolute -left-4 top-0">
                <Eye className="h-6 w-6 text-blue-400" />
              </div>
              <div className="ml-8">
                <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    This Privacy Policy describes how ThirdVizion Labs ("we," "us," or "our") collects, 
                    uses, and shares your personal information when you use our website, products, and services.
                  </p>
                  <p>
                    We are committed to maintaining the trust and confidence of our clients and visitors 
                    through transparent data practices and robust security measures.
                  </p>
                </div>
              </div>
            </section>

            {/* Information Collection */}
            <section className="relative">
              <div className="absolute -left-4 top-0">
                <Database className="h-6 w-6 text-emerald-400" />
              </div>
              <div className="ml-8">
                <h2 className="text-2xl font-bold text-white mb-8">Information We Collect</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <span className="h-2 w-2 rounded-full bg-blue-400 mr-3"></span>
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-5">
                      {[
                        "Full name and contact details",
                        "Email address and phone number",
                        "Company/organization details",
                        "Billing and payment information"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center text-gray-400 group">
                          <ChevronRight className="h-4 w-4 text-blue-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 mr-3"></span>
                      Technical & Usage Data
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-5">
                      {[
                        "IP address and device information",
                        "Browser type and operating system",
                        "Usage patterns and analytics data",
                        "Cookies and tracking technologies"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center text-gray-400 group">
                          <ChevronRight className="h-4 w-4 text-emerald-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="relative">
              <div className="absolute -left-4 top-0">
                <Users className="h-6 w-6 text-purple-400" />
              </div>
              <div className="ml-8">
                <h2 className="text-2xl font-bold text-white mb-8">How We Use Your Information</h2>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-lg"></div>
                      <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-b-lg border border-gray-800 group-hover:border-blue-500/30 transition-colors">
                        <h3 className="text-lg font-semibold text-white mb-3">Service Delivery</h3>
                        <p className="text-gray-400">
                          Provide, maintain, and improve our services, process transactions, and communicate with you.
                        </p>
                      </div>
                    </div>
                    
                    <div className="group">
                      <div className="h-1 w-full bg-gradient-to-r from-red-500 to-red-600 rounded-t-lg"></div>
                      <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-b-lg border border-gray-800 group-hover:border-red-500/30 transition-colors">
                        <h3 className="text-lg font-semibold text-white mb-3">Security & Protection</h3>
                        <p className="text-gray-400">
                          Protect against fraudulent activity and ensure the security of our systems and your data.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-t-lg"></div>
                      <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-b-lg border border-gray-800 group-hover:border-purple-500/30 transition-colors">
                        <h3 className="text-lg font-semibold text-white mb-3">Personalization</h3>
                        <p className="text-gray-400">
                          Customize your experience and deliver relevant content and product offerings.
                        </p>
                      </div>
                    </div>
                    
                    <div className="group">
                      <div className="h-1 w-full bg-gradient-to-r from-gray-600 to-gray-700 rounded-t-lg"></div>
                      <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-b-lg border border-gray-800 group-hover:border-gray-600/30 transition-colors">
                        <h3 className="text-lg font-semibold text-white mb-3">Legal Compliance</h3>
                        <p className="text-gray-400">
                          Comply with legal obligations and protect our rights and interests.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Sharing & Protection */}
            <section className="relative">
              <div className="ml-8">
                <h2 className="text-2xl font-bold text-white mb-6">Data Sharing & Protection</h2>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    We do not sell, trade, or rent your personal information to third parties. 
                    Data is shared only under strict conditions:
                  </p>
                  <div className="space-y-3 ml-4">
                    {[
                      "Trusted service providers under confidentiality agreements",
                      "Legal authorities when required by law",
                      "Business partners with your explicit consent"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="h-2 w-2 rounded-full bg-amber-400 mt-2 mr-3 flex-shrink-0"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Data Retention */}
            <section className="relative">
              <div className="ml-8">
                <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
                <p className="text-gray-400 leading-relaxed">
                  We retain personal information only for as long as necessary to fulfill the purposes 
                  outlined in this policy, unless a longer retention period is required or permitted by law.
                  All data is securely encrypted and regularly audited.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar - Rights & Contact */}
          <div className="space-y-12">
            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Your Rights</h2>
              <div className="space-y-4">
                {[
                  { title: "Access", desc: "Request access to your personal data" },
                  { title: "Rectification", desc: "Correct inaccurate information" },
                  { title: "Erasure", desc: "Request deletion of your data" },
                  { title: "Restriction", desc: "Limit processing of your data" },
                  { title: "Portability", desc: "Receive your data in structured format" },
                  { title: "Objection", desc: "Object to certain data processing" }
                ].map((right, index) => (
                  <div 
                    key={index} 
                    className="group p-4 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:bg-gray-900/50 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-white group-hover:text-blue-300 transition-colors">
                        {right.title}
                      </h3>
                      <ChevronRight className="h-4 w-4 text-gray-600 group-hover:text-blue-400 transform group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-sm text-gray-500 mt-2 group-hover:text-gray-400 transition-colors">
                      {right.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
           

            {/* Policy Updates */}
            <div className="p-6 rounded-lg border border-gray-800 bg-gradient-to-br from-gray-900/50 to-black/50">
              <h3 className="font-semibold text-white mb-3">Policy Updates</h3>
              <p className="text-sm text-gray-400">
                We may update this privacy policy periodically. Significant changes will be communicated 
                through our website and, where appropriate, via email notification.
              </p>
              <div className="mt-4 flex items-center text-gray-500 text-sm">
                <Lock className="h-3 w-3 mr-2" />
                <span>Always review for the latest version</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyAndPolicy;