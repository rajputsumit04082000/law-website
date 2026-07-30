import { Metadata } from "next";
import { SidebarEnquiryForm } from "@/components/sections/SidebarEnquiryForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Property Lawyer in Meerut & NCR | Real Estate Legal Services | Prime Legal Service",
  description:
    "Expert property lawyers in Meerut, Ghaziabad, Noida & NCR for property disputes, title verification, sale deed drafting, landlord-tenant disputes, partition suits, and real estate legal advisory. Prime Legal Service provides comprehensive property law services across Meerut and Delhi NCR.",
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="Property Lawyer in Meerut & NCR"
        subtitle="Expert Legal Representation for Property Disputes, Title Verification & Real Estate Matters"
      />

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

            {/* Left Content Area */}
            <div className="lg:col-span-8">
              <div className="relative h-[220px] sm:h-[320px] md:h-[420px] lg:h-[450px] rounded-xl overflow-hidden mb-8">
                <img
                  src="/images10.jpg"
                  alt="Property Lawyer in Meerut NCR | Real Estate Legal Services | Prime Legal Service"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0b1120] mb-5">
                Expert Property Lawyer in Meerut & NCR – Protecting Your Property Rights
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed text-[14px] sm:text-[15px]">
                <p>
                  Property disputes and real estate transactions in Meerut and NCR involve significant financial stakes and complex legal considerations. At <strong>Prime Legal Service</strong>, our experienced property lawyers in Meerut provide comprehensive legal services for all property-related matters — from title verification and property registration to litigation in property disputes, partition suits, landlord-tenant conflicts, and builder-buyer disputes before Civil Courts in Meerut, Ghaziabad, Noida, and the Allahabad High Court.
                </p>

                <p>
                  We advise individuals, families, businesses, and real estate developers across Meerut, Hapur, Bulandshahr, Ghaziabad, Noida, and the broader NCR on the full spectrum of property law under the Transfer of Property Act, Registration Act, Specific Relief Act, UP Zamindari Abolition & Land Reforms Act, and RERA. Our legal team ensures that every property transaction in Meerut and NCR is legally sound, risk-minimised, and documented with precision to safeguard your long-term interests.
                </p>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl md:text-[28px] font-bold text-[#0b1120] mt-10 mb-4">
                Our Property Law Legal Services in Meerut & NCR
              </h3>

              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">
                At <strong>Prime Legal Service</strong>, we provide end-to-end legal support for all property and real estate matters across Meerut and NCR, from transactional advisory to adversarial litigation.
              </p>

              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">Our services include:</p>

              <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[14px] sm:text-[15px] leading-relaxed">
                <li>
                  <strong>Title Verification & Due Diligence</strong> – Thorough legal examination of property title documents, ownership history, encumbrances, and revenue records in Meerut & NCR to identify risks before purchase.
                </li>
                <li>
                  <strong>Sale Deed & Property Document Drafting</strong> – Drafting of sale deeds, agreement to sell, lease deeds, gift deeds, mortgage deeds, and relinquishment deeds with UP stamp duty guidance and sub-registrar registration assistance.
                </li>
                <li>
                  <strong>Property Dispute Litigation</strong> – Legal representation in civil suits for possession, injunction, specific performance, declaration, and permanent injunction before civil courts in Meerut, Ghaziabad, and Noida.
                </li>
                <li>
                  <strong>Partition Suits & Family Property Disputes</strong> – Filing and contesting partition suits for division of ancestral and joint family property among co-owners and legal heirs in Meerut & NCR.
                </li>
                <li>
                  <strong>Landlord-Tenant Disputes</strong> – Legal representation in eviction proceedings, rent disputes, tenancy agreements, and matters under the UP Urban Buildings (Regulation of Letting, Rent and Eviction) Act.
                </li>
                <li>
                  <strong>Builder-Buyer Disputes</strong> – Legal assistance against builders in Meerut, Ghaziabad, and Noida for delayed possession, construction defects, and breach of allotment letters and builder-buyer agreements.
                </li>
                <li>
                  <strong>Mutation & Succession</strong> – Legal assistance for mutation of property records (dakhil kharij), succession certificate applications, and legal heir certifications after the owner's death in Meerut & NCR.
                </li>
              </ul>

              <h3 className="font-heading text-xl sm:text-2xl md:text-[28px] font-bold text-[#0b1120] mt-10 mb-4">
                Why Choose Prime Legal Service for Property Matters in Meerut & NCR?
              </h3>

              <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[14px] sm:text-[15px] leading-relaxed">
                <li>Experienced property lawyers in Meerut with deep expertise in UP real estate law and civil court litigation</li>
                <li>Comprehensive title due diligence services to protect buyers from fraud and encumbrances in Meerut & NCR property transactions</li>
                <li>Strong track record in property litigation before Meerut District Courts, Ghaziabad Courts, and the Allahabad High Court</li>
                <li>Precise drafting of all property documents with appropriate UP stamp duty and registration compliance</li>
                <li>Transparent legal fees and clear timelines for property transactions and litigation</li>
                <li>End-to-end advisory from acquisition and documentation to dispute resolution across Meerut and NCR</li>
              </ul>
            </div>

            {/* Right Sidebar Area */}
            <div className="lg:col-span-4 space-y-6 lg:space-y-8">              {/* Contact Form */}
              <SidebarEnquiryForm subject="Property Lawyer" />

              {/* Need Help Box */}
              <div className="bg-[#071018] text-white p-5 sm:p-8 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("/images.jpg")', backgroundSize: 'cover' }}></div>
                <div className="relative z-10">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2">Need Property Legal Help?</h3>
                  <p className="text-gray-400 text-sm mb-6 sm:mb-8">Call us for expert property law assistance in Meerut & NCR</p>
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
