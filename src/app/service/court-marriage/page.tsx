import { Metadata } from "next";
import { SidebarEnquiryForm } from "@/components/sections/SidebarEnquiryForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Court Marriage Lawyer in Meerut & NCR | Special Marriage Act Registration | Prime Legal Service",
  description:
    "Expert court marriage lawyers in Meerut, Ghaziabad, Noida & NCR. Prime Legal Service assists couples with court marriage registration under the Special Marriage Act, 1954, Arya Samaj marriage, marriage certificates, and inter-caste & inter-religion marriages with complete legal compliance across Uttar Pradesh and NCR.",
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="Court Marriage Lawyer in Meerut & NCR"
        subtitle="Hassle-Free Court Marriage Registration Under the Special Marriage Act, 1954"
      />

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

            {/* Left Content Area */}
            <div className="lg:col-span-8">
              <div className="relative h-[220px] sm:h-[320px] md:h-[420px] lg:h-[450px] rounded-xl overflow-hidden mb-8">
                <img
                  src="/service/matrimonial.jpg"
                  alt="Court Marriage Lawyer in Meerut NCR | Special Marriage Act | Prime Legal Service"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0b1120] mb-5">
                Court Marriage Lawyer in Meerut & NCR – Simplified & Legal Marriage Registration
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed text-[14px] sm:text-[15px]">
                <p>
                  Court marriage is a legally recognised form of marriage solemnised under the <strong>Special Marriage Act, 1954</strong>, providing couples of any religion, caste, or nationality the right to marry with full legal validity. At <strong>Prime Legal Service</strong>, our experienced court marriage lawyers in Meerut and NCR guide couples through every step — from filing the notice of intended marriage to solemnisation before the Marriage Officer and obtaining the marriage certificate, covering Meerut, Ghaziabad, Noida, Hapur, and surrounding areas.
                </p>

                <p>
                  Whether you are seeking an inter-caste marriage, inter-religion marriage, or a simple legal marriage registration in Meerut or any NCR district, we ensure a smooth, legally compliant process with minimal procedural hassle. We also assist with Arya Samaj marriages, Hindu Marriage Act registrations before the Sub-Divisional Magistrate (SDM), and obtaining certified copies of marriage certificates for use in India and abroad.
                </p>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl md:text-[28px] font-bold text-[#0b1120] mt-10 mb-4">
                Our Court Marriage Legal Services in Meerut & NCR
              </h3>

              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">
                At <strong>Prime Legal Service</strong>, we provide comprehensive assistance for court marriages and marriage registrations across Meerut and NCR, ensuring every step is handled with legal accuracy and professional efficiency.
              </p>

              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">Our services include:</p>

              <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[14px] sm:text-[15px] leading-relaxed">
                <li>
                  <strong>Court Marriage under Special Marriage Act, 1954</strong> – Complete legal assistance for solemnising and registering marriages under the Special Marriage Act before the Marriage Officer in Meerut & NCR.
                </li>
                <li>
                  <strong>Hindu Marriage Act Registration</strong> – Assistance with registration of marriages solemnised under the Hindu Marriage Act, 1955, before the Sub-Divisional Magistrate (SDM) in Meerut, Ghaziabad, and Noida.
                </li>
                <li>
                  <strong>Arya Samaj Marriage</strong> – Legal guidance for Arya Samaj marriage ceremonies in Meerut and subsequent registration to obtain a legally valid marriage certificate.
                </li>
                <li>
                  <strong>Inter-Caste & Inter-Religion Marriages</strong> – Dedicated legal support for couples from different castes or religions in Meerut & NCR, navigating societal and legal complexities in their marriage process.
                </li>
                <li>
                  <strong>Marriage Certificate for Visa & Passport</strong> – Obtaining marriage certificates and apostille certification required for visa applications, passport name changes, and overseas use.
                </li>
                <li>
                  <strong>Notice of Intended Marriage</strong> – Drafting and filing the statutory 30-day notice of intended marriage under the Special Marriage Act and professionally handling the objection period.
                </li>
                <li>
                  <strong>Protection Petitions for Couples</strong> – Filing protection petitions before courts in Meerut and Allahabad High Court for inter-caste or inter-religion couples facing threats or harassment.
                </li>
              </ul>

              <h3 className="font-heading text-xl sm:text-2xl md:text-[28px] font-bold text-[#0b1120] mt-10 mb-4">
                Why Choose Prime Legal Service for Court Marriage in Meerut & NCR?
              </h3>

              <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[14px] sm:text-[15px] leading-relaxed">
                <li>Experienced court marriage advocates in Meerut with in-depth knowledge of the Special Marriage Act and all applicable marriage laws</li>
                <li>Complete end-to-end assistance from document preparation to marriage certificate collection</li>
                <li>Sensitive and confidential handling of inter-caste and inter-religion marriages across Meerut & NCR</li>
                <li>Quick turnaround on marriage registration and certificate procurement</li>
                <li>Assistance with apostille and attestation of marriage certificates for use abroad</li>
                <li>Client-centred approach with transparent guidance and zero procedural surprises</li>
              </ul>
            </div>

            {/* Right Sidebar Area */}
            <div className="lg:col-span-4 space-y-6 lg:space-y-8">              {/* Contact Form */}
              <SidebarEnquiryForm subject="Court Marriage" />

              {/* Need Help Box */}
              <div className="bg-[#071018] text-white p-5 sm:p-8 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("/images.jpg")', backgroundSize: 'cover' }}></div>
                <div className="relative z-10">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2">Need Court Marriage Help?</h3>
                  <p className="text-gray-400 text-sm mb-6 sm:mb-8">Call us for quick & hassle-free assistance in Meerut & NCR</p>
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
