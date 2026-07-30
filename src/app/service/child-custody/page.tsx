import { Metadata } from "next";
import { SidebarEnquiryForm } from "@/components/sections/SidebarEnquiryForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Child Custody Lawyer in Meerut & NCR | Guardianship & Visitation Rights | Prime Legal Service",
  description:
    "Expert child custody and guardianship lawyers in Meerut, Ghaziabad, Noida & NCR. Prime Legal Service handles custody disputes, visitation rights, child maintenance, guardianship petitions, and international child abduction cases under the Hindu Minority & Guardianship Act and Guardians & Wards Act.",
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="Child Custody Lawyer in Meerut & NCR"
        subtitle="Compassionate & Effective Legal Representation for Child Custody & Guardianship Matters"
      />

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

            {/* Left Content Area */}
            <div className="lg:col-span-8">
              <div className="relative h-[220px] sm:h-[320px] md:h-[420px] lg:h-[450px] rounded-xl overflow-hidden mb-8">
                <img
                  src="/service/family.jpg"
                  alt="Child Custody Lawyer in Meerut NCR | Prime Legal Service"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0b1120] mb-5">
                Expert Child Custody Lawyer in Meerut & NCR
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed text-[14px] sm:text-[15px]">
                <p>
                  Child custody disputes are among the most emotionally sensitive and legally complex family law matters. At <strong>Prime Legal Service</strong>, our experienced child custody lawyers in Meerut and NCR approach every case with deep compassion and legal expertise, always keeping the best interests of the child at the forefront. We represent parents and guardians in custody, guardianship, and visitation disputes before Family Courts, District Courts across Meerut, Ghaziabad, Noida, and the Allahabad High Court.
                </p>

                <p>
                  Our legal team has comprehensive knowledge of the Hindu Minority and Guardianship Act, 1956, the Guardians and Wards Act, 1890, the Juvenile Justice (Care and Protection of Children) Act, and relevant provisions of the Special Marriage Act and personal laws applicable to different communities. Whether you are seeking primary custody, joint custody, or visitation rights for your child in Meerut or any NCR district, we provide strategic legal counsel to protect your parental rights while prioritising child welfare.
                </p>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl md:text-[28px] font-bold text-[#0b1120] mt-10 mb-4">
                Our Child Custody Legal Services in Meerut & NCR
              </h3>

              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">
                At <strong>Prime Legal Service</strong>, we provide end-to-end legal support for all types of child custody and guardianship matters across Meerut, Ghaziabad, Hapur, Bulandshahr, and Noida, tailored to the unique facts of each family's situation.
              </p>

              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">Our services include:</p>

              <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[14px] sm:text-[15px] leading-relaxed">
                <li>
                  <strong>Child Custody Petitions</strong> – Filing and contesting custody petitions before Family Courts and District Courts in Meerut and NCR, seeking physical and legal custody of minor children.
                </li>
                <li>
                  <strong>Guardianship Petitions</strong> – Legal representation in guardianship proceedings under the Guardians and Wards Act for appointment and removal of guardians of minors.
                </li>
                <li>
                  <strong>Interim Custody Orders</strong> – Seeking urgent interim custody and ex-parte orders in time-sensitive situations to ensure the immediate safety and welfare of the child.
                </li>
                <li>
                  <strong>Visitation & Access Rights</strong> – Negotiating and litigating visitation schedules, holiday access arrangements, and supervised visitation orders for non-custodial parents.
                </li>
                <li>
                  <strong>Child Maintenance & Support</strong> – Filing applications for child maintenance and support under Section 125 CrPC and applicable personal laws before courts in Meerut & NCR.
                </li>
                <li>
                  <strong>International Child Abduction Cases</strong> – Legal assistance in cases involving cross-border parental abduction and seeking the return of children taken abroad without consent.
                </li>
                <li>
                  <strong>Custody Appeals Before Allahabad High Court</strong> – Filing appeals before the Allahabad High Court challenging unfavourable custody orders passed by Family Courts or District Courts in UP and NCR.
                </li>
              </ul>

              <h3 className="font-heading text-xl sm:text-2xl md:text-[28px] font-bold text-[#0b1120] mt-10 mb-4">
                Why Choose Prime Legal Service for Child Custody Matters in Meerut & NCR?
              </h3>

              <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[14px] sm:text-[15px] leading-relaxed">
                <li>Compassionate advocates who understand the emotional complexities of child custody disputes in Meerut & NCR</li>
                <li>Strong expertise in both Hindu and Muslim personal laws, Special Marriage Act, and secular family law</li>
                <li>Proven track record in securing favourable custody and visitation orders before courts across Meerut, Ghaziabad, and Noida</li>
                <li>Client-focused approach with transparent communication and regular case updates</li>
                <li>Skilled in mediation and family counselling to resolve custody disputes amicably wherever possible</li>
                <li>Representation before Family Courts, District Courts, and the Allahabad High Court</li>
              </ul>
            </div>

            {/* Right Sidebar Area */}
            <div className="lg:col-span-4 space-y-6 lg:space-y-8">              {/* Contact Form */}
              <SidebarEnquiryForm subject="Child Custody" />

              {/* Need Help Box */}
              <div className="bg-[#071018] text-white p-5 sm:p-8 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("/images.jpg")', backgroundSize: 'cover' }}></div>
                <div className="relative z-10">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2">Need Child Custody Help?</h3>
                  <p className="text-gray-400 text-sm mb-6 sm:mb-8">Call us for compassionate legal support in Meerut & NCR</p>
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
