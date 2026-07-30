import { Metadata } from "next";
import { SidebarEnquiryForm } from "@/components/sections/SidebarEnquiryForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Divorce Lawyer in Meerut & NCR | Prime Legal Service",
  description:
    "Prime Legal Service offers expert legal assistance for mutual consent divorce, contested divorce, child custody, alimony, and family disputes across Meerut, Ghaziabad, Noida, and Delhi NCR.",
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="Divorce Lawyer in Meerut & NCR"
        subtitle="Trusted Legal Representation for Divorce, Child Custody & Family Matters"
      />

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

            {/* Left Content Area */}
            <div className="lg:col-span-8">
              <div className="relative h-[220px] sm:h-[320px] md:h-[420px] lg:h-[450px] rounded-xl overflow-hidden mb-8">
                <img
                  src="/service/divorce_lawyer.jpeg"
                  alt="Best Divorce Lawyer in Meerut & NCR"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0b1120] mb-5">
                Divorce Lawyer in Meerut & NCR
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed text-[14px] sm:text-[15px]">
                <p>
                  Going through a divorce can be emotionally and legally
                  challenging. At <strong>Prime Legal Service</strong>, we
                  provide trusted legal guidance for individuals and families
                  across Meerut, Ghaziabad, Noida, Delhi NCR, and nearby
                  regions. Whether you are seeking a mutual consent divorce or
                  facing a contested divorce, our experienced advocates are
                  committed to protecting your rights while ensuring complete
                  confidentiality throughout the legal process.
                </p>

                <p>
                  Every family matter is unique and deserves a personalized
                  legal approach. Our legal team provides comprehensive
                  assistance for divorce, child custody, alimony, maintenance,
                  domestic violence matters, and matrimonial disputes. From
                  legal consultation and documentation to court representation
                  and settlement negotiations, we work diligently to achieve the
                  best possible outcome while making the legal process as smooth
                  and transparent as possible.
                </p>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl md:text-[28px] font-bold text-[#0b1120] mt-10 mb-4">
                Our Divorce Legal Services
              </h3>

              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">
                At <strong>Prime Legal Service</strong>, we provide complete
                legal assistance for all types of matrimonial and family law
                matters. Our experienced divorce lawyers offer strategic legal
                advice, transparent communication, and dedicated representation
                tailored to your individual circumstances.
              </p>

              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">
                Our services include:
              </p>

              <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[14px] sm:text-[15px] leading-relaxed">
                <li>
                  <strong>Mutual Consent Divorce</strong> – Professional legal
                  assistance for couples seeking a smooth, confidential, and
                  legally compliant mutual consent divorce.
                </li>

                <li>
                  <strong>Contested Divorce Cases</strong> – Strong legal
                  representation in contested divorce proceedings involving
                  disputes, evidence, and court hearings.
                </li>

                <li>
                  <strong>Child Custody & Visitation Rights</strong> – Expert
                  legal guidance for child custody, guardianship, visitation
                  rights, and protecting the best interests of your child.
                </li>

                <li>
                  <strong>Alimony & Maintenance</strong> – Assistance with
                  interim maintenance, permanent alimony, spousal support, and
                  financial settlements under applicable family laws.
                </li>

                <li>
                  <strong>Mediation & Court Representation</strong> – Effective
                  mediation, legal documentation, settlement negotiations, and
                  strong representation before the Family Court whenever
                  required.
                </li>
              </ul>
            </div>

            {/* Right Sidebar Area */}
            <div className="lg:col-span-4 space-y-6 lg:space-y-8">              {/* Contact Form */}
              <SidebarEnquiryForm subject="Divorce Lawyer" />

              {/* Need Help Box */}
              <div className="bg-[#071018] text-white p-5 sm:p-8 rounded-xl relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600")',
                    backgroundSize: "cover",
                  }}
                ></div>

                <div className="relative z-10">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2">
                    Need Expert Legal Assistance?
                  </h3>

                  <p className="text-gray-400 text-sm mb-6 sm:mb-8">
                    Speak with our experienced legal team today.
                  </p>

                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-[#0b1120] flex-shrink-0">
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>

                      <div>
                        <p className="font-semibold text-[14px] sm:text-[15px]">
                          Call Us
                        </p>
                        <p className="text-gray-300 text-[13px] sm:text-[14px]">
                          +91 99110 77828
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-[#0b1120] flex-shrink-0">
                        <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>

                      <div>
                        <p className="font-semibold text-[14px] sm:text-[15px]">
                          Mail Us
                        </p>
                        <p className="text-gray-300 text-[13px] sm:text-[14px]">
                          info@primelegalservice.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-[#0b1120] flex-shrink-0">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>

                      <div>
                        <p className="font-semibold text-[14px] sm:text-[15px]">
                          Our Location
                        </p>
                        <p className="text-gray-300 text-[13px] sm:text-[14px]">
                          Meerut, Uttar Pradesh
                        </p>
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