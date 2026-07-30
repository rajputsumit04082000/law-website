import { Metadata } from "next";
import { SidebarEnquiryForm } from "@/components/sections/SidebarEnquiryForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Civil Lawyer in Meerut | Civil Litigation Lawyer | Prime Legal Service",
  description:
    "Prime Legal Service provides experienced civil lawyers in Meerut, Ghaziabad, Noida, Delhi NCR, and nearby regions. Expert legal assistance for property disputes, recovery suits, injunctions, partition suits, civil litigation, and legal notices.",
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="Civil Lawyer in Meerut & NCR"
        subtitle="Trusted Civil Litigation & Legal Advisory Services"
      />

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

            {/* Left Content Area */}
            <div className="lg:col-span-8">
              <div className="relative h-[220px] sm:h-[320px] md:h-[420px] lg:h-[450px] rounded-xl overflow-hidden mb-8">
                <img
                  src="/service/civil.jpg"
                  alt="Civil Lawyer in Meerut | Civil Litigation Lawyer | Prime Legal Service"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0b1120] mb-5">
                Civil Lawyer in Meerut & NCR
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed text-[14px] sm:text-[15px]">
                <p>
                  <strong>Prime Legal Service</strong> provides reliable civil legal services for individuals,
                  families, businesses, and property owners across Meerut, Ghaziabad, Noida,
                  Delhi NCR, and nearby regions. Our experienced civil lawyers handle a wide
                  range of civil matters including property disputes, recovery suits,
                  partition cases, injunctions, contract disputes, landlord-tenant matters,
                  and civil litigation. We focus on protecting your legal rights through
                  practical advice and effective courtroom representation.
                </p>

                <p>
                  Whether you are involved in a property conflict, breach of contract,
                  ownership dispute, or any other civil matter, our legal team develops
                  customized legal strategies to achieve the best possible outcome. <strong>Prime
                    Legal Service </strong> is committed to providing timely legal solutions, transparent
                  guidance, and strong representation before civil courts throughout Meerut
                  and the NCR region.
                </p>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl md:text-[28px] font-bold text-[#0b1120] mt-10 mb-4">
                Our Civil Legal Services
              </h3>

              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">
                At <strong> Prime Legal Service </strong>, our civil lawyers provide comprehensive legal
                assistance for civil disputes, property matters, contractual conflicts, and
                recovery proceedings. We combine legal expertise with practical solutions to
                safeguard your rights and interests.
              </p>

              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">
                Our civil legal services include:
              </p>

              <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[14px] sm:text-[15px] leading-relaxed">
                <li>
                  <strong>Property Disputes</strong> – Legal representation for ownership
                  disputes, boundary conflicts, possession matters, and title verification.
                </li>

                <li>
                  <strong>Partition & Family Property Cases</strong> – Assistance in family
                  property division, partition suits, succession disputes, and inheritance
                  matters.
                </li>

                <li>
                  <strong>Recovery & Contract Disputes</strong> – Representation in money
                  recovery suits, breach of contract cases, commercial agreements, and civil
                  claims.
                </li>

                <li>
                  <strong>Injunction & Civil Court Proceedings</strong> – Filing injunction
                  suits, stay applications, legal notices, and representation before civil
                  courts.
                </li>

                <li>
                  <strong>Landlord-Tenant Matters</strong> – Legal assistance for eviction,
                  rent recovery, tenancy agreements, lease disputes, and possession matters.
                </li>
              </ul>
            </div>

            {/* Right Sidebar Area */}
            <div className="lg:col-span-4 space-y-6 lg:space-y-8">              {/* Contact Form */}
              <SidebarEnquiryForm subject="Civil Lawyer" />

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
