import { Metadata } from "next";
import { SidebarEnquiryForm } from "@/components/sections/SidebarEnquiryForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Debt Recovery Tribunal (DRT) Lawyer in Meerut & NCR | SARFAESI & NPA Recovery | Prime Legal Service",
  description:
    "Expert Debt Recovery Tribunal (DRT) lawyers in Meerut, Ghaziabad, Noida & NCR. Prime Legal Service provides legal representation for banks, financial institutions, and borrowers in DRT proceedings, SARFAESI actions, NPA loan recovery, and debt restructuring disputes across Uttar Pradesh and Meerut.",
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="Debt Recovery Tribunal (DRT) Lawyer in Meerut & NCR"
        subtitle="Expert Legal Representation for Banks, Financial Institutions & Borrowers Before DRT"
      />

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

            {/* Left Content Area */}
            <div className="lg:col-span-8">
              <div className="relative h-[220px] sm:h-[320px] md:h-[420px] lg:h-[450px] rounded-xl overflow-hidden mb-8">
                <img
                  src="/images (3).jpg"
                  alt="Debt Recovery Tribunal Lawyer in Meerut NCR | Prime Legal Service"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0b1120] mb-5">
                Expert Debt Recovery Tribunal (DRT) Lawyer in Meerut & NCR
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed text-[14px] sm:text-[15px]">
                <p>
                  The Debt Recovery Tribunal (DRT) is a specialised legal forum established under the Recovery of Debts and Bankruptcy Act, 1993, to adjudicate debt recovery disputes involving banks and financial institutions. At <strong>Prime Legal Service</strong>, our experienced DRT lawyers in Meerut and NCR represent both lenders and borrowers in Original Applications (OAs), Counter Claims, SARFAESI proceedings, and appeals before the Debt Recovery Appellate Tribunal (DRAT), ensuring effective resolution of complex financial disputes across Uttar Pradesh and Meerut.
                </p>

                <p>
                  We have a thorough understanding of the Recovery of Debts Due to Banks and Financial Institutions Act, 1993, the SARFAESI Act, 2002, and the Insolvency and Bankruptcy Code, 2016. Our legal team advises banks, NBFCs, corporate borrowers, and individuals across Meerut, Ghaziabad, Noida, and Hapur on strategic approaches to debt recovery and defence against recovery actions.
                </p>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl md:text-[28px] font-bold text-[#0b1120] mt-10 mb-4">
                Our Debt Recovery Tribunal Legal Services in Meerut & NCR
              </h3>

              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">
                At <strong>Prime Legal Service</strong>, we provide comprehensive legal representation across all phases of DRT proceedings and debt recovery matters for clients across Meerut and the NCR region, catering to both lenders seeking recovery and borrowers contesting recovery actions.
              </p>

              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">Our services include:</p>

              <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[14px] sm:text-[15px] leading-relaxed">
                <li>
                  <strong>Original Applications (OA) Before DRT</strong> – Filing and contesting Original Applications on behalf of banks, financial institutions, and NBFCs in Meerut & NCR for recovery of outstanding dues.
                </li>
                <li>
                  <strong>Counter Claims & Borrower Defence</strong> – Representing borrowers and guarantors in filing counter claims and contesting recovery proceedings initiated by lenders before the DRT.
                </li>
                <li>
                  <strong>SARFAESI Act Proceedings</strong> – Legal assistance in challenging and defending SARFAESI actions including possession notices, auction challenges, and Section 17 applications before DRT.
                </li>
                <li>
                  <strong>NPA & Loan Recovery Disputes</strong> – Advisory and litigation support for disputes arising from NPA classification, loan account irregularities, and wilful defaulter declarations in Meerut & NCR.
                </li>
                <li>
                  <strong>Appeals Before DRAT</strong> – Filing and arguing appeals before the Debt Recovery Appellate Tribunal against DRT orders, including applications for stay of recovery proceedings.
                </li>
                <li>
                  <strong>One-Time Settlement (OTS) Advisory</strong> – Legal guidance to borrowers in Meerut and NCR for negotiating and finalising One-Time Settlement proposals with banks and financial institutions.
                </li>
                <li>
                  <strong>Insolvency & Bankruptcy Code Matters</strong> – Legal representation in NCLT proceedings under the IBC for Corporate Insolvency Resolution Process (CIRP) and personal insolvency matters.
                </li>
              </ul>

              <h3 className="font-heading text-xl sm:text-2xl md:text-[28px] font-bold text-[#0b1120] mt-10 mb-4">
                Why Choose Prime Legal Service for DRT Matters in Meerut & NCR?
              </h3>

              <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[14px] sm:text-[15px] leading-relaxed">
                <li>Experienced DRT advocates with deep expertise in banking law, SARFAESI, and debt recovery litigation in Meerut & NCR</li>
                <li>Proven track record in representing both lenders and borrowers in complex DRT proceedings across Uttar Pradesh</li>
                <li>Strategic legal planning with a focus on cost-effective and time-efficient resolution</li>
                <li>Strong understanding of IBC, RBI guidelines, and banking regulations impacting debt recovery</li>
                <li>Representation before DRT, DRAT, Allahabad High Court, and the Supreme Court of India</li>
                <li>Confidential and professional handling of sensitive financial disputes</li>
              </ul>
            </div>

            {/* Right Sidebar Area */}
            <div className="lg:col-span-4 space-y-6 lg:space-y-8">              {/* Contact Form */}
              <SidebarEnquiryForm subject="Debt Recovery" />

              {/* Need Help Box */}
              <div className="bg-[#071018] text-white p-5 sm:p-8 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("/images.jpg")', backgroundSize: 'cover' }}></div>
                <div className="relative z-10">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2">Need DRT Legal Help?</h3>
                  <p className="text-gray-400 text-sm mb-6 sm:mb-8">Call us for expert debt recovery legal support in Meerut & NCR</p>
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
