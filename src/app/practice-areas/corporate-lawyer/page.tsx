import { Metadata } from "next";
import { SidebarEnquiryForm } from "@/components/sections/SidebarEnquiryForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Corporate Lawyer in Meerut | Corporate Legal Services in NCR | Prime Legal Service",
  description:
    "Prime Legal Service provides trusted corporate legal services in Meerut, Ghaziabad, Noida, Delhi NCR, and surrounding regions. Expert assistance for company registration, contracts, compliance, business disputes, mergers, and corporate advisory.",
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="Corporate Lawyer in Meerut & NCR"
        subtitle="Trusted Corporate Legal Solutions for Businesses & Startups"
      />

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

            {/* Left Content Area */}
            <div className="lg:col-span-8">
              <div className="relative h-[220px] sm:h-[320px] md:h-[420px] lg:h-[450px] rounded-xl overflow-hidden mb-8">
                <img
                  src="/service/corporate.jpg"
                  alt="Corporate Lawyer in Meerut | Corporate Legal Services in NCR | Prime Legal Service"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0b1120] mb-5">
                Corporate Lawyer in Meerut & NCR
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed text-[14px] sm:text-[15px]">
                <p>
                  <strong>Prime Legal Service</strong> provides professional corporate legal services for
                  startups, private companies, LLPs, partnerships, and established
                  businesses across Meerut, Ghaziabad, Noida, Delhi NCR, and nearby
                  regions. Our experienced corporate lawyers assist businesses with legal
                  documentation, regulatory compliance, contract drafting, company
                  formation, mergers, acquisitions, shareholder disputes, and commercial
                  litigation. We focus on minimizing legal risks while helping businesses
                  operate with confidence and complete legal compliance.
                </p>

                <p>
                  Whether you are launching a new business, expanding your company,
                  negotiating commercial agreements, or resolving corporate disputes, our
                  legal team provides practical, strategic, and result-oriented solutions.
                  Prime Legal Service works closely with entrepreneurs, SMEs, and large
                  organizations to protect their commercial interests while ensuring
                  compliance with Indian corporate laws and business regulations.
                </p>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl md:text-[28px] font-bold text-[#0b1120] mt-10 mb-4">
                Our Corporate Legal Services
              </h3>

              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">
                At <strong>Prime Legal Service</strong>, our corporate lawyers provide comprehensive legal
                support for businesses of every size. We deliver practical legal
                solutions that help organizations remain compliant, reduce legal risks,
                and achieve long-term business growth.
              </p>

              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">
                Our corporate legal services include:
              </p>

              <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[14px] sm:text-[15px] leading-relaxed">
                <li>
                  <strong>Business Formation & Registration</strong> – Legal assistance
                  for company incorporation, LLP registration, partnership firms, and
                  startup compliance.
                </li>

                <li>
                  <strong>Contract Drafting & Review</strong> – Preparation and review of
                  commercial agreements, vendor contracts, employment contracts, NDAs,
                  and business transactions.
                </li>

                <li>
                  <strong>Corporate Compliance</strong> – Advisory on Companies Act,
                  corporate governance, ROC compliance, statutory filings, and regulatory
                  requirements.
                </li>

                <li>
                  <strong>Mergers & Business Transactions</strong> – Legal support for
                  mergers, acquisitions, restructuring, due diligence, and investment
                  documentation.
                </li>

                <li>
                  <strong>Commercial Dispute Resolution</strong> – Representation in
                  shareholder disputes, breach of contract matters, arbitration,
                  mediation, and commercial litigation.
                </li>
              </ul>
            </div>

            {/* Right Sidebar Area */}
            <div className="lg:col-span-4 space-y-6 lg:space-y-8">              {/* Contact Form */}
              <SidebarEnquiryForm subject="Corporate Lawyer" />

              {/* Need Help Box */}
              <div className="bg-[#071018] text-white p-5 sm:p-8 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600")', backgroundSize: 'cover' }}></div>
                <div className="relative z-10">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2">Need any legal help?</h3>
                  <p className="text-gray-400 text-sm mb-6 sm:mb-8">Call us 24/7 for legal support</p>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-[#0b1120] flex-shrink-0">
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-[14px] sm:text-[15px]">Call Us</p>
                        <p className="text-gray-300 text-[13px] sm:text-[14px]">+919911077828</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-[#0b1120] flex-shrink-0">
                        <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-[14px] sm:text-[15px]">Mail Us</p>
                        <p className="text-gray-300 text-[13px] sm:text-[14px]">info@primelegalservice.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-[#0b1120] flex-shrink-0">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-[14px] sm:text-[15px]">Our Location</p>
                        <p className="text-gray-300 text-[13px] sm:text-[14px]">Meerut, Uttar Pradesh</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

