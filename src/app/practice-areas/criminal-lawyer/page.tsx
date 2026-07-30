import { Metadata } from "next";
import { SidebarEnquiryForm } from "@/components/sections/SidebarEnquiryForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Criminal Lawyer in Meerut | Criminal Defense Advocate | Prime Legal Service",
  description:
    "Looking for an experienced Criminal Lawyer in Meerut? Prime Legal Service provides expert legal representation in bail matters, FIRs, criminal trials, anticipatory bail, white-collar crimes, and High Court proceedings across Meerut and Delhi NCR.",
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="Criminal Lawyer in Meerut & NCR"
        subtitle="Expert Legal Representation"
      />

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

            {/* Left Content Area */}
            <div className="lg:col-span-8">
              <div className="relative h-[220px] sm:h-[320px] md:h-[420px] lg:h-[450px] rounded-xl overflow-hidden mb-8">
                <img
                  src="/images (3).jpg"
                  alt="Criminal Lawyer in Meerut | Criminal Defense Advocate | Prime Legal Service"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0b1120] mb-5">
                Experienced Criminal Lawyer in Meerut
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed text-[14px] sm:text-[15px]">
                <p>
                  If you are facing criminal allegations or require immediate legal assistance, Prime Legal Service provides experienced criminal lawyers in Meerut who are committed to protecting your legal rights at every stage of the criminal justice process. We represent individuals in matters involving FIR registration, anticipatory bail, regular bail, criminal investigations, police proceedings, trial representation, appeals, and revisions. Our legal team develops practical defense strategies while ensuring complete confidentiality and professional guidance throughout your case.
                </p>

                <p>
                  Our criminal law practice covers a wide range of offences under the Bharatiya Nyaya Sanhita (BNS), Narcotic Drugs and Psychotropic Substances (NDPS) Act, Prevention of Corruption Act, cyber crime laws, cheque dishonour matters, economic offences, and other criminal litigation. Whether your matter is before the Magistrate Court, Sessions Court, High Court, or Supreme Court, our lawyers work diligently to safeguard your interests and achieve the best possible legal outcome.
                </p>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl md:text-[28px] font-bold text-[#0b1120] mt-10 mb-4">
                Our Criminal Lawyer Services
              </h3>

              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">
                Prime Legal Service offers comprehensive criminal litigation services for individuals, professionals, and businesses throughout Meerut and Delhi NCR. Our advocates provide strategic legal advice, courtroom representation, and timely legal solutions in every criminal matter.
              </p>

              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">Our services include:</p>

              <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[14px] sm:text-[15px] leading-relaxed">
                <li><strong>FIR & Criminal Complaints</strong> – Legal advice, drafting, registration, and defence against criminal complaints and police investigations.</li>
                <li><strong>Bail & Anticipatory Bail</strong> – Professional representation for anticipatory bail, regular bail, interim bail, and cancellation proceedings.</li>
                <li><strong>Trial Representation</strong> – Complete representation before Magistrate Courts, Sessions Courts, and Special Courts throughout criminal trials.</li>
                <li><strong>Appeals & Criminal Revisions</strong> – Filing criminal appeals, revisions, and petitions before the High Court and appellate courts.</li>
                <li><strong>White Collar & Cyber Crime Cases</strong> – Legal defence for financial offences, cyber crimes, fraud investigations, and corporate criminal litigation.</li>
              </ul>
            </div>

            {/* Right Sidebar Area */}
            <div className="lg:col-span-4 space-y-6 lg:space-y-8">              {/* Contact Form */}
              <SidebarEnquiryForm subject="Criminal Lawyer" />

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

