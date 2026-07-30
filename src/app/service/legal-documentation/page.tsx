import { Metadata } from "next";
import { SidebarEnquiryForm } from "@/components/sections/SidebarEnquiryForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal Documentation Lawyer in Meerut & NCR | Contract Drafting & Agreement Services | Prime Legal Service",
  description:
    "Expert legal documentation services in Meerut, Ghaziabad, Noida & NCR. Prime Legal Service provides professional drafting of contracts, agreements, affidavits, MOUs, sale deeds, power of attorney, wills, and all types of legal documents for individuals and businesses across Meerut and Meerut.",
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="Legal Documentation Services in Meerut & NCR"
        subtitle="Professional Drafting of Contracts, Agreements, Deeds & All Legal Documents"
      />

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

            {/* Left Content Area */}
            <div className="lg:col-span-8">
              <div className="relative h-[220px] sm:h-[320px] md:h-[420px] lg:h-[450px] rounded-xl overflow-hidden mb-8">
                <img
                  src="/images (5).jpg"
                  alt="Legal Documentation Lawyer in Meerut NCR | Prime Legal Service"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0b1120] mb-5">
                Expert Legal Documentation Services in Meerut & NCR
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed text-[14px] sm:text-[15px]">
                <p>
                  Accurate and legally sound documentation is the foundation of every successful transaction, agreement, and legal proceeding. At <strong>Prime Legal Service</strong>, our experienced legal documentation lawyers in Meerut and NCR provide precise drafting, review, and vetting of all types of legal documents — including contracts, agreements, affidavits, sale deeds, lease deeds, Memoranda of Understanding (MOUs), power of attorney, wills, and court submissions — ensuring that your interests are fully protected and every document is legally enforceable across Meerut, Ghaziabad, Noida, and the broader NCR region.
                </p>

                <p>
                  Whether you are an individual in Meerut seeking a will or power of attorney, a business in Ghaziabad or Noida requiring commercial contracts and employment agreements, or a party in a property transaction needing stamp duty guidance and registration assistance in Uttar Pradesh, our legal team provides meticulous documentation services tailored to your specific requirements, in full compliance with applicable Indian laws and UP registration regulations.
                </p>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl md:text-[28px] font-bold text-[#0b1120] mt-10 mb-4">
                Our Legal Documentation Services in Meerut & NCR
              </h3>

              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">
                At <strong>Prime Legal Service</strong>, we provide comprehensive legal drafting and documentation assistance across personal, commercial, and property-related matters for clients across Meerut and NCR, ensuring accuracy and legal validity.
              </p>

              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">Our services include:</p>

              <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[14px] sm:text-[15px] leading-relaxed">
                <li>
                  <strong>Contract & Agreement Drafting</strong> – Professional drafting of business contracts, service agreements, partnership deeds, joint venture agreements, and commercial contracts for clients across Meerut, Ghaziabad & Noida.
                </li>
                <li>
                  <strong>Property Documents</strong> – Drafting of sale deeds, gift deeds, lease agreements, leave and licence agreements, mortgage deeds, and property development agreements with UP stamp duty guidance and registration assistance.
                </li>
                <li>
                  <strong>Power of Attorney (POA)</strong> – Drafting and registration of General and Special Power of Attorney for property transactions, legal proceedings, and personal matters in Meerut & NCR.
                </li>
                <li>
                  <strong>Wills & Succession Documents</strong> – Drafting of legally valid Wills, Codicils, and succession-related documents ensuring proper testamentary disposition of assets for families in Meerut & NCR.
                </li>
                <li>
                  <strong>Affidavits & Declarations</strong> – Drafting of affidavits, statutory declarations, indemnity bonds, and undertakings for courts, government authorities, and private use across Uttar Pradesh.
                </li>
                <li>
                  <strong>MOUs & LOIs</strong> – Drafting Memoranda of Understanding (MOUs) and Letters of Intent (LOIs) for business collaborations, partnerships, and pre-contractual arrangements.
                </li>
                <li>
                  <strong>Employment & HR Documents</strong> – Drafting of employment contracts, appointment letters, non-disclosure agreements (NDAs), non-compete clauses, and HR policies for businesses in Meerut & NCR.
                </li>
                <li>
                  <strong>Court Pleadings & Petitions</strong> – Drafting of plaints, written statements, petitions, applications, replies, and appeals for filing before courts and tribunals in Meerut, Ghaziabad, Noida, and the Allahabad High Court.
                </li>
              </ul>

              <h3 className="font-heading text-xl sm:text-2xl md:text-[28px] font-bold text-[#0b1120] mt-10 mb-4">
                Why Choose Prime Legal Service for Legal Documentation in Meerut & NCR?
              </h3>

              <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[14px] sm:text-[15px] leading-relaxed">
                <li>Experienced legal drafters in Meerut with in-depth knowledge of Indian contract law, UP property law, and procedural requirements</li>
                <li>Precise and customised documentation to meet each client's unique legal and commercial needs across Meerut & NCR</li>
                <li>Thorough review and vetting of third-party documents to identify risks and protect client interests</li>
                <li>Guidance on UP stamp duty, registration requirements, and document legalisation procedures</li>
                <li>Quick turnaround on urgent documentation requirements</li>
                <li>Complete confidentiality in handling sensitive personal and business documentation</li>
              </ul>
            </div>

            {/* Right Sidebar Area */}
            <div className="lg:col-span-4 space-y-6 lg:space-y-8">              {/* Contact Form */}
              <SidebarEnquiryForm subject="Legal Documentation" />

              {/* Need Help Box */}
              <div className="bg-[#071018] text-white p-5 sm:p-8 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("/images.jpg")', backgroundSize: 'cover' }}></div>
                <div className="relative z-10">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2">Need Legal Documentation?</h3>
                  <p className="text-gray-400 text-sm mb-6 sm:mb-8">Call us for expert drafting & documentation in Meerut & NCR</p>
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
