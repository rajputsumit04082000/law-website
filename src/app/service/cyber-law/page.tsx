import { Metadata } from "next";
import { SidebarEnquiryForm } from "@/components/sections/SidebarEnquiryForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Cyber Law Lawyer in Meerut & NCR | Cyber Crime, IT Act & Online Fraud Cases | Prime Legal Service",
  description:
    "Expert cyber law lawyers in Meerut, Ghaziabad, Noida & NCR. Prime Legal Service provides legal representation in cyber crime, online fraud, data privacy, cyber defamation, digital evidence, hacking, phishing, and IT Act matters across Meerut and Meerut.",
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="Cyber Law Lawyer in Meerut & NCR"
        subtitle="Expert Legal Representation for Cyber Crime, Online Fraud & IT Act Cases"
      />

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

            {/* Left Content Area */}
            <div className="lg:col-span-8">
              <div className="relative h-[220px] sm:h-[320px] md:h-[420px] lg:h-[450px] rounded-xl overflow-hidden mb-8">
                <img
                  src="/images (2).jpg"
                  alt="Cyber Law Lawyer in Meerut NCR | Prime Legal Service"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0b1120] mb-5">
                Expert Cyber Law Lawyer in Meerut & NCR – Protecting Your Digital Rights
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed text-[14px] sm:text-[15px]">
                <p>
                  <strong>Prime Legal Service</strong> offers comprehensive legal assistance in cyber law matters for individuals, businesses, startups, and organisations across Meerut, Ghaziabad, Noida, Hapur, and the broader NCR region. With the rapid growth of digital transactions and internet-based services, cyber crimes have become increasingly common. Our legal team provides strategic advice and effective representation in matters involving hacking, online fraud, identity theft, phishing scams, cyber defamation, data theft, privacy violations, and offences under the Information Technology Act, 2000.
                </p>

                <p>
                  We assist clients in Meerut and NCR from the initial legal consultation through complaint filing with the Cyber Crime Police Station, police investigations, digital evidence management, litigation before courts in Meerut and Ghaziabad, appeals, and settlement wherever appropriate. Our objective is to protect your legal rights while ensuring quick and effective legal remedies in cyber-related disputes across Meerut, Ghaziabad, Noida, and Meerut.
                </p>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl md:text-[28px] font-bold text-[#0b1120] mt-10 mb-4">
                Our Cyber Law Legal Services in Meerut & NCR
              </h3>

              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">
                <strong>Prime Legal Service</strong> provides legal representation across a broad range of cyber law matters for clients across Meerut and NCR, including:
              </p>

              <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[14px] sm:text-[15px] leading-relaxed">
                <li>
                  <strong>Cyber Crime Complaints</strong> – Legal assistance in filing and pursuing complaints involving hacking, phishing, identity theft, ransomware, and online financial fraud before the Cyber Crime Police Station in Meerut and Ghaziabad.
                </li>

                <li>
                  <strong>Online Financial Fraud Cases</strong> – Representation in matters involving unauthorised bank transactions, UPI fraud, credit card fraud, and digital payment disputes affecting residents of Meerut & NCR.
                </li>

                <li>
                  <strong>Data Privacy & Data Protection</strong> – Legal guidance on data breaches, privacy violations, confidentiality issues, and regulatory compliance under applicable laws.
                </li>

                <li>
                  <strong>Cyber Defamation</strong> – Assistance in cases involving social media defamation, fake profiles, defamatory online content, and reputation damage for individuals and businesses in Meerut & NCR.
                </li>

                <li>
                  <strong>Digital Evidence & Investigation Support</strong> – Legal assistance in collecting, preserving, and presenting electronic evidence before courts and investigative agencies in Meerut & NCR.
                </li>

                <li>
                  <strong>IT Act Litigation</strong> – Representation before appropriate courts and authorities in matters arising under the Information Technology Act, 2000 and other applicable laws.
                </li>

                <li>
                  <strong>Cyber Compliance Advisory</strong> – Legal support for businesses in Meerut and NCR on cybersecurity policies, data protection practices, and regulatory compliance.
                </li>

                <li>
                  <strong>Appeals & Legal Remedies</strong> – Filing appeals, writ petitions, and pursuing appropriate legal remedies in cyber law disputes before Allahabad High Court and the Supreme Court of India.
                </li>
              </ul>

              <h3 className="font-heading text-xl sm:text-2xl md:text-[28px] font-bold text-[#0b1120] mt-10 mb-4">
                Why Choose Prime Legal Service for Cyber Law Matters in Meerut & NCR?
              </h3>

              <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[14px] sm:text-[15px] leading-relaxed">
                <li>Experienced cyber law advocates in Meerut & NCR with in-depth knowledge of the IT Act, 2000, and cybercrime jurisprudence</li>
                <li>Prompt legal action including filing complaints with Cyber Crime Police Stations in Meerut and Ghaziabad</li>
                <li>Expert handling of digital evidence collection, preservation, and presentation before courts</li>
                <li>Strong representation in matters involving financial fraud, online harassment, data privacy, and IT Act violations</li>
                <li>Confidential advisory for businesses in Meerut & NCR on cybersecurity compliance and data protection policies</li>
                <li>Representation before local courts, Allahabad High Court, and the Supreme Court of India</li>
              </ul>
            </div>

            {/* Right Sidebar Area */}
            <div className="lg:col-span-4 space-y-6 lg:space-y-8">              {/* Contact Form */}
              <SidebarEnquiryForm subject="Cyber Law" />

              {/* Need Help Box */}
              <div className="bg-[#071018] text-white p-5 sm:p-8 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("/images.jpg")', backgroundSize: 'cover' }}></div>
                <div className="relative z-10">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2">Need Cyber Law Help?</h3>
                  <p className="text-gray-400 text-sm mb-6 sm:mb-8">Call us 24/7 for immediate cyber crime legal support in Meerut & NCR</p>
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
