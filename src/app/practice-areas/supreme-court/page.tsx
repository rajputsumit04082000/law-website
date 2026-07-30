import { Metadata } from "next";
import { SidebarEnquiryForm } from "@/components/sections/SidebarEnquiryForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Supreme Court Lawyer in Meerut & NCR | SLPs, Appeals & Writs | Prime Legal Service",
  description:
    "Experienced Supreme Court lawyers serving clients in Meerut, Ghaziabad, Noida & NCR. Prime Legal Service offers expert legal representation in Special Leave Petitions (SLPs), civil appeals, criminal appeals, writ petitions, and review petitions before the Supreme Court of India.",
};

export default function Page() {
  return (
    <>
      <PageHeader 
        title="Supreme Court Lawyer in Meerut & NCR" 
        subtitle="Expert Legal Representation Before the Supreme Court of India"
      />

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Left Content Area */}
            <div className="lg:col-span-8">
              <div className="relative h-[220px] sm:h-[320px] md:h-[420px] lg:h-[450px] rounded-xl overflow-hidden mb-8">
                <img 
                  src="/images (4).jpg" 
                  alt="Supreme Court Lawyer for Meerut & NCR | Prime Legal Service" 
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0b1120] mb-5">
                Supreme Court Lawyer for Clients in Meerut & NCR
              </h2>
              
              <div className="space-y-4 text-gray-700 leading-relaxed text-[14px] sm:text-[15px]">
                <p>
                  <strong>Prime Legal Service</strong> provides trusted legal representation as an experienced Supreme Court law firm serving clients across Meerut, Ghaziabad, Noida, Hapur, and the broader NCR region. Our team represents individuals, corporate entities, business owners, and institutions before the Supreme Court of India in complex civil, criminal, constitutional, matrimonial, service, property, and commercial matters. We focus on delivering strategic legal solutions backed by thorough research, strong advocacy, and meticulous case preparation.
                </p>

                <p>
                  Whether you need assistance in challenging orders of High Courts through a Special Leave Petition (SLP), Civil Appeal, Criminal Appeal, Writ Petition, Transfer Petition, Review Petition, or Curative Petition, our legal team offers comprehensive guidance throughout the proceedings. Every matter is handled with professionalism, confidentiality, and complete dedication to protecting our clients' legal rights before the apex court of the country.
                </p>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl md:text-[28px] font-bold text-[#0b1120] mt-10 mb-4">
                Our Supreme Court Legal Services
              </h3>
              
              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">
                As a prominent legal practice serving Meerut &amp; NCR, <strong>Prime Legal Service</strong> offers comprehensive representation before the Supreme Court of India. From initial opinion and drafting of petitions to senior advocate conferences and final hearings, we ensure every case receives detailed legal analysis and effective courtroom advocacy.
              </p>
              
              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">
                Our Supreme Court legal services include:
              </p>
              
              <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[14px] sm:text-[15px] leading-relaxed">
                <li>
                  <strong>Special Leave Petitions (SLPs)</strong> – Filing and arguing Special Leave Petitions under Article 136 of the Constitution challenging judgments passed by High Courts (including Allahabad High Court & Delhi High Court) and National Tribunals.
                </li>

                <li>
                  <strong>Civil &amp; Criminal Appeals</strong> – Professional representation in civil appeals, criminal appeals, bail matters, and constitutional disputes before the Supreme Court.
                </li>

                <li>
                  <strong>Writ Petitions (Article 32)</strong> – Legal assistance in drafting and filing writ petitions for enforcement of fundamental rights and public interest litigation (PIL).
                </li>

                <li>
                  <strong>Transfer Petitions</strong> – Seeking transfer of civil, matrimonial, or criminal cases from one state court to another under Section 25 CPC or Section 406 CrPC.
                </li>

                <li>
                  <strong>Review &amp; Curative Petitions</strong> – Drafting and filing review petitions and curative petitions adhering to strict Supreme Court rules and benchmarks.
                </li>

                <li>
                  <strong>End-to-End Supreme Court Advocacy</strong> – Complete legal support including case strategy, drafting by Advocates-on-Record (AOR), document preparation, and representation by senior advocates.
                </li>
              </ul>
            </div>

            {/* Right Sidebar Area */}
            <div className="lg:col-span-4 space-y-6 lg:space-y-8">              {/* Contact Form */}
              <SidebarEnquiryForm subject="Supreme Court" />

              {/* Need Help Box */}
              <div className="bg-[#071018] text-white p-5 sm:p-8 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("/images.jpg")', backgroundSize: 'cover' }}></div>
                <div className="relative z-10">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2">Need Supreme Court Help?</h3>
                  <p className="text-gray-400 text-sm mb-6 sm:mb-8">Call us 24/7 for legal support in Meerut & NCR</p>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-[#0b1120] flex-shrink-0">
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-[14px] sm:text-[15px]">Call Us</p>
                        <p className="text-gray-300 text-[13px] sm:text-[14px]">+917417617432</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-[#0b1120] flex-shrink-0">
                        <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-[14px] sm:text-[15px]">Mail Us</p>
                        <p className="text-gray-300 text-[13px] sm:text-[14px]">abhinavpradhan748@gmail.com</p>
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
