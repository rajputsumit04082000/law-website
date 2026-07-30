import { Metadata } from "next";
import { SidebarEnquiryForm } from "@/components/sections/SidebarEnquiryForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Domestic Violence Lawyer in Meerut & NCR | Prime Legal Service",
  description:
    "Prime Legal Service provides trusted legal assistance for domestic violence cases, protection orders, maintenance, residence rights, and legal representation across Meerut, Ghaziabad, Noida, and Meerut.",
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="Domestic Violence Lawyer in Meerut & NCR"
        subtitle="Compassionate Legal Support to Protect Your Rights"
      />

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

            {/* Left Content Area */}
            <div className="lg:col-span-8">
              <div className="relative h-[220px] sm:h-[320px] md:h-[420px] lg:h-[450px] rounded-xl overflow-hidden mb-8">
                <img
                  src="/service/domestic-violence.jpg"
                  alt="Best Domestic Violence Lawyer in Meerut & NCR"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0b1120] mb-5">
                Domestic Violence Lawyer in Meerut & NCR
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed text-[14px] sm:text-[15px]">
                <p>
                  Domestic violence can have serious emotional, physical, and financial
                  consequences. At <strong>Prime Legal Service</strong>, we provide
                  compassionate and confidential legal assistance for individuals seeking
                  protection under the applicable laws. Our experienced lawyers assist
                  clients across Meerut, Ghaziabad, Noida, Meerut, and nearby regions,
                  ensuring every matter is handled with sensitivity, professionalism, and
                  respect.
                </p>

                <p>
                  Whether you require legal advice, protection orders, residence rights,
                  maintenance claims, or representation before the court, our legal team is
                  committed to protecting your rights at every stage. We provide practical
                  legal solutions tailored to your situation while helping you understand
                  your legal options and confidently move forward.
                </p>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl md:text-[28px] font-bold text-[#0b1120] mt-10 mb-4">
                Our Domestic Violence Legal Services
              </h3>

              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">
                At <strong>Prime Legal Service</strong>, we offer comprehensive legal
                assistance for domestic violence matters with complete confidentiality and
                professional representation. Our lawyers work diligently to protect your
                legal rights and guide you throughout the legal process.
              </p>

              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">
                Our services include:
              </p>

              <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[14px] sm:text-[15px] leading-relaxed">
                <li>
                  <strong>Legal Consultation</strong> – Confidential legal advice to help
                  you understand your rights, available legal remedies, and the appropriate
                  course of action.
                </li>

                <li>
                  <strong>Protection Orders</strong> – Assistance in obtaining protection,
                  residence, and other reliefs available under applicable domestic violence
                  laws.
                </li>

                <li>
                  <strong>Maintenance & Financial Relief</strong> – Legal representation for
                  maintenance, monetary relief, and financial support claims before the
                  competent court.
                </li>

                <li>
                  <strong>Court Representation</strong> – Strong representation before the
                  appropriate courts with complete legal documentation and effective
                  advocacy.
                </li>

                <li>
                  <strong>Mediation & Legal Guidance</strong> – Professional guidance for
                  settlement discussions, mediation, and legal support while safeguarding
                  your interests.
                </li>
              </ul>
            </div>

            {/* Right Sidebar Area */}
            <div className="lg:col-span-4 space-y-6 lg:space-y-8">              {/* Contact Form */}
              <SidebarEnquiryForm subject="Domestic Violence" />

              {/* Need Help Box */}
              <div className="bg-[#071018] text-white p-5 sm:p-8 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600")', backgroundSize: 'cover' }}></div>
                <div className="relative z-10">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2">Need Expert Legal Assistance?</h3>
                  <p className="text-gray-400 text-sm mb-6 sm:mb-8">Speak with our experienced legal team today.</p>
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
