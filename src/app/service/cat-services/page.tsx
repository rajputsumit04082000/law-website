import { Metadata } from "next";
import { SidebarEnquiryForm } from "@/components/sections/SidebarEnquiryForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "CAT Lawyer in Meerut & NCR | Central Administrative Tribunal | Prime Legal Service",
  description:
    "Expert legal representation before the Central Administrative Tribunal (CAT) in Meerut, Ghaziabad, Noida & Delhi NCR. Prime Legal Service handles service matters, promotions, departmental proceedings, suspension, and pension disputes for government employees across Uttar Pradesh and NCR.",
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="CAT (Central Administrative Tribunal) Lawyer in Meerut & NCR"
        subtitle="Expert Legal Representation for Government Employees Before CAT"
      />

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

            {/* Left Content Area */}
            <div className="lg:col-span-8">
              <div className="relative h-[220px] sm:h-[320px] md:h-[420px] lg:h-[450px] rounded-xl overflow-hidden mb-8">
                <img
                  src="/service/corporate.jpg"
                  alt="CAT Lawyer in Meerut NCR | Central Administrative Tribunal | Prime Legal Service"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0b1120] mb-5">
                Expert CAT Lawyer in Meerut & NCR for Government Employees
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed text-[14px] sm:text-[15px]">
                <p>
                  The Central Administrative Tribunal (CAT) is a specialised quasi-judicial body established to adjudicate service matters of Central Government employees, including those employed in public sector undertakings and statutory bodies. At <strong>Prime Legal Service</strong>, our experienced CAT lawyers in Meerut and NCR provide dedicated legal representation to government servants facing issues related to service conditions, promotions, transfers, departmental proceedings, suspensions, pension disputes, and other service-related grievances before CAT and appellate courts.
                </p>

                <p>
                  Serving clients across Meerut, Ghaziabad, Noida, Hapur, Bulandshahr, and the broader NCR region, our legal team has a thorough understanding of the Administrative Tribunals Act, 1985, Central Civil Services Rules, DoPT guidelines, and related service laws. We represent government employees at every stage — from filing Original Applications (OAs) before CAT to pursuing appeals before the Allahabad High Court and the Supreme Court of India.
                </p>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl md:text-[28px] font-bold text-[#0b1120] mt-10 mb-4">
                Our CAT Legal Services in Meerut & NCR
              </h3>

              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">
                At <strong>Prime Legal Service</strong>, we provide comprehensive legal support for all categories of Central Administrative Tribunal matters. Our CAT advocates handle a wide range of service disputes with strategic precision and professional diligence across Meerut and the NCR region.
              </p>

              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">Our services include:</p>

              <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[14px] sm:text-[15px] leading-relaxed">
                <li>
                  <strong>Service Matter Disputes</strong> – Legal representation in matters involving wrongful termination, illegal dismissal, arbitrary transfers, and service condition grievances before CAT.
                </li>
                <li>
                  <strong>Promotion & Seniority Disputes</strong> – Filing OAs and pursuing cases related to denial of due promotion, seniority disputes, and Departmental Promotion Committee (DPC) matters.
                </li>
                <li>
                  <strong>Departmental Proceedings & Charge Sheets</strong> – Expert defence in major and minor penalty proceedings, charge sheet responses, inquiry officer proceedings, and show cause notices.
                </li>
                <li>
                  <strong>Suspension & Reinstatement Cases</strong> – Legal assistance for employees facing illegal suspension, seeking revocation of suspension orders, or pursuing reinstatement before the tribunal.
                </li>
                <li>
                  <strong>Pension & Retirement Benefits</strong> – Representation in disputes regarding pension fixation, gratuity, leave encashment, and other post-retirement entitlements.
                </li>
                <li>
                  <strong>Appeals Before Allahabad High Court & Supreme Court</strong> – Filing writ petitions and Special Leave Petitions (SLPs) challenging CAT orders before the Allahabad High Court and the Supreme Court of India.
                </li>
                <li>
                  <strong>Pre-litigation Advisory</strong> – Legal consultation and drafting of representations to be submitted before administrative authorities prior to approaching CAT.
                </li>
              </ul>

              <h3 className="font-heading text-xl sm:text-2xl md:text-[28px] font-bold text-[#0b1120] mt-10 mb-4">
                Why Choose Prime Legal Service for CAT Matters in Meerut & NCR?
              </h3>

              <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[14px] sm:text-[15px] leading-relaxed">
                <li>Experienced advocates with deep expertise in Central Government service laws and CAT proceedings in Meerut & NCR</li>
                <li>Strong track record of securing relief for government employees in complex service disputes across Uttar Pradesh</li>
                <li>Thorough knowledge of the Administrative Tribunals Act, 1985, CCS Rules, and DoPT guidelines</li>
                <li>Strategic preparation of Original Applications (OAs), replies, and counter-arguments</li>
                <li>Representation before CAT Circuit Benches, Allahabad High Court, and the Supreme Court of India</li>
                <li>Complete confidentiality and transparent communication throughout the case</li>
              </ul>
            </div>

            {/* Right Sidebar Area */}
            <div className="lg:col-span-4 space-y-6 lg:space-y-8">              {/* Contact Form */}
              <SidebarEnquiryForm subject="CAT Services" />

              {/* Need Help Box */}
              <div className="bg-[#071018] text-white p-5 sm:p-8 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("/images.jpg")', backgroundSize: 'cover' }}></div>
                <div className="relative z-10">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2">Need CAT Legal Help?</h3>
                  <p className="text-gray-400 text-sm mb-6 sm:mb-8">Call us for immediate legal consultation in Meerut & NCR</p>
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
