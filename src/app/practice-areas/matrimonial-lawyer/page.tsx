import { Metadata } from "next";
import { SidebarEnquiryForm } from "@/components/sections/SidebarEnquiryForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Matrimonial Lawyer in Meerut & NCR | Prime Legal Service",
  description:
    "Prime Legal Service provides trusted matrimonial legal services in Meerut & NCR for divorce, judicial separation, child custody, maintenance, alimony, restitution of conjugal rights, and other family law matters.",
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="Matrimonial Lawyer in Meerut & NCR"
        subtitle="Professional Legal Solutions for Family & Matrimonial Matters"
      />

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

            {/* Left Content Area */}
            <div className="lg:col-span-8">
              <div className="relative h-[220px] sm:h-[320px] md:h-[420px] lg:h-[450px] rounded-xl overflow-hidden mb-8">
                <img
                  src="/service/matrimonial.jpg"
                  alt="Best Matrimonial Lawyer in Meerut & NCR"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0b1120] mb-5">
                Matrimonial Lawyer in Meerut & NCR
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed text-[14px] sm:text-[15px]">
                <p>
                  Matrimonial disputes require practical legal guidance, confidentiality,
                  and a thoughtful approach. At <strong>Prime Legal Service</strong>, we
                  provide comprehensive matrimonial legal services for individuals and
                  families across Meerut, Ghaziabad, Noida, Greater Noida, and Delhi NCR.
                  Our experienced matrimonial lawyers assist clients with legal matters
                  including divorce, judicial separation, maintenance, alimony, child
                  custody, domestic disputes, and settlement negotiations. Every case is
                  handled with professionalism while protecting the rights and interests of
                  our clients.
                </p>

                <p>
                  Whether you are seeking legal advice before initiating proceedings or
                  require experienced representation before the Family Court, our legal
                  team provides strategic solutions tailored to your circumstances. We
                  focus on achieving fair outcomes through negotiation whenever possible
                  while remaining fully prepared to represent your interests in litigation
                  when required. Our commitment is to deliver reliable legal support with
                  transparency, compassion, and complete confidentiality throughout every
                  stage of the legal process.
                </p>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl md:text-[28px] font-bold text-[#0b1120] mt-10 mb-4">
                Our Matrimonial Legal Services
              </h3>

              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">
                At <strong>Prime Legal Service</strong>, our experienced matrimonial
                lawyers provide practical legal guidance for a wide range of family law
                matters. From consultation and documentation to courtroom representation,
                we ensure every client receives professional legal support tailored to
                their specific circumstances while safeguarding their legal rights and
                long-term interests.
              </p>

              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">
                Our services include:
              </p>

              <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[14px] sm:text-[15px] leading-relaxed">
                <li>
                  <strong>Divorce & Judicial Separation</strong> – Professional legal
                  representation for contested divorce, mutual consent divorce, and
                  judicial separation proceedings before the Family Court.
                </li>

                <li>
                  <strong>Child Custody & Visitation Rights</strong> – Legal assistance
                  for custody disputes, visitation arrangements, guardianship matters,
                  and protecting the best interests of the child.
                </li>

                <li>
                  <strong>Maintenance & Alimony</strong> – Representation for maintenance,
                  permanent alimony, interim maintenance, and related financial claims
                  under applicable family laws.
                </li>

                <li>
                  <strong>Matrimonial Litigation</strong> – Comprehensive legal support
                  for family court proceedings, documentation, pleadings, evidence, and
                  effective courtroom representation.
                </li>

                <li>
                  <strong>Mediation & Family Settlement</strong> – Assistance with
                  negotiation, mediation, and amicable settlement of matrimonial disputes
                  to reduce lengthy litigation whenever possible.
                </li>
              </ul>
            </div>

            {/* Right Sidebar Area */}
            <div className="lg:col-span-4 space-y-6 lg:space-y-8">              {/* Contact Form */}
              <SidebarEnquiryForm subject="Matrimonial Lawyer" />

              {/* Need Help Box */}
              <div className="bg-[#071018] text-white p-5 sm:p-8 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600")', backgroundSize: 'cover' }}></div>
                <div className="relative z-10">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2">Need Expert Matrimonial Legal Advice?</h3>
                  <p className="text-gray-400 text-sm mb-6 sm:mb-8">Speak with our experienced matrimonial lawyers today.</p>
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

