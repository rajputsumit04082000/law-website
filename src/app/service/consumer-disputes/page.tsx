import { Metadata } from "next";
import { SidebarEnquiryForm } from "@/components/sections/SidebarEnquiryForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Consumer Disputes Lawyer in Meerut & NCR | Consumer Forum & NCDRC | Prime Legal Service",
  description:
    "Expert consumer dispute lawyers in Meerut, Ghaziabad, Noida & NCR. Prime Legal Service represents consumers before District Consumer Forums, State Consumer Disputes Redressal Commission (SCDRC), and the National Consumer Disputes Redressal Commission (NCDRC) for defective goods, deficient services, insurance disputes, and builder complaints.",
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="Consumer Disputes Lawyer in Meerut & NCR"
        subtitle="Protecting Consumer Rights Before District Forums, SCDRC & NCDRC"
      />

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

            {/* Left Content Area */}
            <div className="lg:col-span-8">
              <div className="relative h-[220px] sm:h-[320px] md:h-[420px] lg:h-[450px] rounded-xl overflow-hidden mb-8">
                <img
                  src="/images (1).jpg"
                  alt="Consumer Disputes Lawyer in Meerut NCR | Prime Legal Service"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0b1120] mb-5">
                Expert Consumer Disputes Lawyer in Meerut & NCR
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed text-[14px] sm:text-[15px]">
                <p>
                  Every consumer has the legal right to seek redressal against defective products, deficient services, and unfair trade practices. At <strong>Prime Legal Service</strong>, our skilled consumer dispute lawyers in Meerut and NCR provide effective legal representation before the District Consumer Disputes Redressal Forum in Meerut, Ghaziabad, Noida, and Hapur, as well as the Uttar Pradesh State Consumer Disputes Redressal Commission (SCDRC) and the National Consumer Disputes Redressal Commission (NCDRC), New Delhi, under the Consumer Protection Act, 2019.
                </p>

                <p>
                  Whether you are a buyer of defective goods, a recipient of substandard services from a builder, bank, insurance company, telecom provider, hospital, or e-commerce platform in Meerut or anywhere in the NCR, our legal team helps you assert your consumer rights with precision and professionalism. We handle cases from complaint drafting through final hearings and appeals, ensuring every client receives the justice they are entitled to under the law.
                </p>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl md:text-[28px] font-bold text-[#0b1120] mt-10 mb-4">
                Our Consumer Dispute Legal Services in Meerut & NCR
              </h3>

              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">
                At <strong>Prime Legal Service</strong>, we handle a diverse range of consumer disputes with strategic legal counsel and dedicated advocacy before all levels of consumer redressal forums serving Meerut and NCR.
              </p>

              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">Our services include:</p>

              <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[14px] sm:text-[15px] leading-relaxed">
                <li>
                  <strong>Defective Goods & Product Liability</strong> – Legal representation for consumers seeking compensation and replacement for defective products, counterfeit goods, and product liability claims before District Forums in Meerut & NCR.
                </li>
                <li>
                  <strong>Deficiency in Services</strong> – Filing consumer complaints against builders, banks, insurance companies, hospitals, airlines, hotels, telecom providers, and e-commerce platforms for deficient services.
                </li>
                <li>
                  <strong>Insurance Disputes & Claim Rejections</strong> – Representing policyholders in disputes against insurance companies for wrongful claim rejection, delay in settlement, and unfair policy terms.
                </li>
                <li>
                  <strong>Real Estate & Builder Complaints</strong> – Pursuing complaints against builders and developers in Meerut, Ghaziabad, and Noida for delayed possession, construction defects, false promises, and breach of builder-buyer agreements.
                </li>
                <li>
                  <strong>Banking & Financial Disputes</strong> – Filing consumer complaints against banks and financial institutions for unauthorised charges, fraudulent transactions, and loan-related grievances.
                </li>
                <li>
                  <strong>Unfair Trade Practices</strong> – Legal action against businesses engaging in misleading advertisements, overcharging, hidden charges, and other unfair commercial practices.
                </li>
                <li>
                  <strong>Appeals Before SCDRC (UP) & NCDRC</strong> – Filing and contesting appeals before the UP State Consumer Commission and NCDRC, New Delhi, against unfavourable District Forum orders.
                </li>
              </ul>

              <h3 className="font-heading text-xl sm:text-2xl md:text-[28px] font-bold text-[#0b1120] mt-10 mb-4">
                Why Choose Prime Legal Service for Consumer Disputes in Meerut & NCR?
              </h3>

              <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[14px] sm:text-[15px] leading-relaxed">
                <li>Dedicated consumer rights advocates with proven experience before District Forums in Meerut, Ghaziabad & Noida, SCDRC (UP), and NCDRC</li>
                <li>Deep knowledge of the Consumer Protection Act, 2019, and latest consumer jurisprudence</li>
                <li>Efficient handling of urgent interim relief applications and stay orders</li>
                <li>Cost-effective legal representation focused on maximum compensation for consumers</li>
                <li>Transparent fee structure and regular updates on case progress</li>
                <li>Successful track record in complex consumer disputes across Meerut and the broader NCR region</li>
              </ul>
            </div>

            {/* Right Sidebar Area */}
            <div className="lg:col-span-4 space-y-6 lg:space-y-8">              {/* Contact Form */}
              <SidebarEnquiryForm subject="Consumer Disputes" />

              {/* Need Help Box */}
              <div className="bg-[#071018] text-white p-5 sm:p-8 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("/images.jpg")', backgroundSize: 'cover' }}></div>
                <div className="relative z-10">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2">Need Consumer Legal Help?</h3>
                  <p className="text-gray-400 text-sm mb-6 sm:mb-8">Call us to assert your consumer rights in Meerut & NCR</p>
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
