import { Metadata } from "next";
import { SidebarEnquiryForm } from "@/components/sections/SidebarEnquiryForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Bail Matters Lawyer in Meerut & NCR | Anticipatory Bail | Prime Legal Service",
  description:
    "Need urgent bail assistance? Prime Legal Service provides expert legal representation for anticipatory bail, regular bail, interim bail, and bail cancellation matters across Meerut, Ghaziabad, Noida, and Delhi NCR.",
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="Bail Matters Lawyer in Meerut & NCR"
        subtitle="Swift & Effective Legal Representation for Bail Proceedings"
      />

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

            {/* Left Content Area */}
            <div className="lg:col-span-8">
              <div className="relative h-[220px] sm:h-[320px] md:h-[420px] lg:h-[450px] rounded-xl overflow-hidden mb-8">
                <img
                  src="/images.jpg"
                  alt="Bail Matters Lawyer in Meerut | Prime Legal Service"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0b1120] mb-5">
                Expert Bail Matters Lawyer in Meerut & NCR
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed text-[14px] sm:text-[15px]">
                <p>
                  When facing arrest or police custody, securing bail at the earliest stage is critical to protecting your freedom and legal rights. At <strong>Prime Legal Service</strong>, our experienced bail lawyers in Meerut provide swift and effective legal representation for anticipatory bail, regular bail, interim bail, and bail cancellation matters before Magistrate Courts, Sessions Courts, the Allahabad High Court, and the Supreme Court of India.
                </p>

                <p>
                  Our legal team understands the urgency of bail proceedings and works with diligence to file applications promptly, present compelling arguments, and secure the best possible relief for our clients. We represent individuals in all types of criminal matters including FIRs under the Bharatiya Nyaya Sanhita (BNS), NDPS Act, Prevention of Corruption Act, cyber crimes, cheque bounce cases, and other serious offences across Meerut and Delhi NCR.
                </p>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl md:text-[28px] font-bold text-[#0b1120] mt-10 mb-4">
                Our Bail Matters Legal Services
              </h3>

              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">
                At <strong>Prime Legal Service</strong>, we provide comprehensive and time-sensitive legal assistance for all types of bail matters with complete confidentiality and professional representation. Our advocates are experienced in handling urgent bail applications and complex criminal proceedings before all courts.
              </p>

              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">Our services include:</p>

              <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[14px] sm:text-[15px] leading-relaxed">
                <li>
                  <strong>Anticipatory Bail</strong> – Legal representation for anticipatory bail applications before Sessions Courts and High Courts to protect individuals apprehending arrest in non-bailable offences.
                </li>
                <li>
                  <strong>Regular Bail</strong> – Filing and arguing regular bail applications before Magistrate Courts, Sessions Courts, and High Courts for individuals in judicial custody.
                </li>
                <li>
                  <strong>Interim Bail</strong> – Urgent representation for interim bail on medical, humanitarian, or other grounds requiring immediate court intervention.
                </li>
                <li>
                  <strong>Bail Cancellation Defence</strong> – Defending clients against bail cancellation applications filed by the prosecution or opposing parties before competent courts.
                </li>
                <li>
                  <strong>High Court & Supreme Court Bail</strong> – Representation in bail matters before the Allahabad High Court and the Supreme Court of India when bail is denied by lower courts.
                </li>
                <li>
                  <strong>Surety & Bail Bond Assistance</strong> – Legal guidance and assistance in completing bail formalities, including surety arrangements and bail bond documentation.
                </li>
              </ul>

              <h3 className="font-heading text-xl sm:text-2xl md:text-[28px] font-bold text-[#0b1120] mt-10 mb-4">
                Why Choose Prime Legal Service for Bail Matters?
              </h3>

              <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[14px] sm:text-[15px] leading-relaxed">
                <li>Experienced advocates with a strong track record in bail proceedings across Meerut and Delhi NCR</li>
                <li>24/7 availability for urgent bail matters and police custody situations</li>
                <li>Thorough knowledge of the Bharatiya Nagarik Suraksha Sanhita (BNSS) and relevant criminal laws</li>
                <li>Strategic preparation of bail applications with compelling legal arguments</li>
                <li>Complete confidentiality and professional handling of your case</li>
                <li>Representation from Magistrate Court to the Supreme Court of India</li>
              </ul>
            </div>

            {/* Right Sidebar Area */}
            <div className="lg:col-span-4 space-y-6 lg:space-y-8">              {/* Contact Form */}
              <SidebarEnquiryForm subject="Bail Matters" />

              {/* Need Help Box */}
              <div className="bg-[#071018] text-white p-5 sm:p-8 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("/images.jpg")', backgroundSize: 'cover' }}></div>
                <div className="relative z-10">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2">Need Urgent Bail Help?</h3>
                  <p className="text-gray-400 text-sm mb-6 sm:mb-8">Call us 24/7 for immediate legal support</p>
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
