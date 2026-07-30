import { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { MapPin, Phone, Mail } from "lucide-react";
import { SidebarEnquiryForm } from "@/components/sections/SidebarEnquiryForm";

export const metadata: Metadata = {
  title: "Cheque Bounce Lawyer in Meerut & NCR | Sec 138 NI Act | Prime Legal Service",
  description:
    "Experienced Cheque Bounce Lawyer in Meerut & NCR providing legal assistance under Section 138 of the Negotiable Instruments Act for cheque dishonour cases, recovery notices, Section 138 complaints, and court representation.",
};

export default function Page() {
  return (
    <>
      <PageHeader 
        title="Cheque Bounce Lawyer in Meerut & NCR" 
        subtitle="Expert Legal Representation under Section 138 NI Act"
      />

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Left Content Area */}
            <div className="lg:col-span-8">
              <div className="relative h-[220px] sm:h-[320px] md:h-[420px] lg:h-[450px] rounded-xl overflow-hidden mb-8">
                <img 
                  src="/images (1).jpg" 
                  alt="Cheque Bounce Lawyer in Meerut & NCR | Prime Legal Service" 
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0b1120] mb-5">
                Cheque Bounce Lawyer in Meerut & NCR
              </h2>
              
              <div className="space-y-4 text-gray-700 leading-relaxed text-[14px] sm:text-[15px]">
                <p>
                  <strong>Prime Legal Service</strong> offers professional legal services as an experienced Cheque Bounce Lawyer in Meerut, Ghaziabad, Noida, and NCR, assisting individuals, businesses, traders, and financial institutions in matters relating to dishonoured cheques under Section 138 of the Negotiable Instruments Act, 1881. We provide strategic legal advice and effective representation to help clients recover outstanding dues while ensuring compliance with all statutory requirements.
                </p>

                <p>
                  Our legal team assists clients throughout the entire legal process, including drafting legal notices within the statutory 30-day period, filing cheque bounce complaints before Magistrate Courts in Meerut & NCR, representing clients during trial, negotiating out-of-court settlements, and pursuing criminal appeals when required. We focus on delivering practical, timely, and result-oriented legal solutions to protect our clients' financial interests.
                </p>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl md:text-[28px] font-bold text-[#0b1120] mt-10 mb-4">
                Our Cheque Bounce Legal Services
              </h3>
              
              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">
                At <strong>Prime Legal Service</strong>, we provide comprehensive legal support for cheque dishonour disputes across Meerut and Delhi NCR. From issuing statutory demand notices to representing clients before court, our experienced advocates ensure every matter is handled with precision and a strong legal strategy.
              </p>
              
              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">
                Our cheque bounce legal services include:
              </p>
              
              <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[14px] sm:text-[15px] leading-relaxed">
                <li>
                  <strong>Statutory Legal Notice Drafting</strong> – Preparing and serving formal demand legal notices under Section 138 of the Negotiable Instruments Act within statutory timelines.
                </li>

                <li>
                  <strong>Cheque Bounce Complaint Filing</strong> – Drafting and filing criminal complaints before the Judicial Magistrate Courts in Meerut, Ghaziabad, and Noida.
                </li>

                <li>
                  <strong>Court Representation & Defence</strong> – Professional representation during summons stage, bail, evidence, cross-examination, and final arguments for complainants as well as accused persons.
                </li>

                <li>
                  <strong>Payment Recovery & Settlement</strong> – Assisting clients in recovering outstanding amounts quickly through compoundable settlements, mediation, and legally binding agreements.
                </li>

                <li>
                  <strong>Summary Suits & Money Recovery</strong> – Filing Summary Suits under Order 37 CPC alongside Section 138 proceedings for speedy recovery of money in commercial transactions.
                </li>

                <li>
                  <strong>Appeals & Revision Petitions</strong> – Filing and contesting appeals and revision petitions before Sessions Courts and the Allahabad High Court against trial court orders.
                </li>
              </ul>
            </div>

            {/* Right Sidebar Area */}
            <div className="lg:col-span-4 space-y-6 lg:space-y-8">
              
              {/* Contact Form */}
              <SidebarEnquiryForm subject="Cheque Bounce" />

              {/* Need Help Box */}
              <div className="bg-[#071018] text-white p-5 sm:p-8 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("/images.jpg")', backgroundSize: 'cover' }}></div>
                <div className="relative z-10">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2">Need Cheque Bounce Help?</h3>
                  <p className="text-gray-400 text-sm mb-6 sm:mb-8">Call us 24/7 for legal support in Meerut & NCR</p>
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
