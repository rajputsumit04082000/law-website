import { Metadata } from "next";
import { SidebarEnquiryForm } from "@/components/sections/SidebarEnquiryForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "RERA Lawyer in Meerut & NCR | Real Estate Regulatory Authority Complaints | Prime Legal Service",
  description:
    "Expert RERA lawyers in Meerut, Ghaziabad, Noida & NCR for homebuyer complaints against builders, delayed possession, refund claims, interest on delay, and appeals before the UP RERA Appellate Tribunal. Prime Legal Service provides dedicated RERA legal representation across Meerut and Delhi NCR.",
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="RERA Lawyer in Meerut & NCR"
        subtitle="Expert Legal Representation Before UP RERA Authority & Appellate Tribunal for Homebuyer Disputes"
      />

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

            {/* Left Content Area */}
            <div className="lg:col-span-8">
              <div className="relative h-[220px] sm:h-[320px] md:h-[420px] lg:h-[450px] rounded-xl overflow-hidden mb-8">
                <img
                  src="/tingey-injury-law-firm-L4YGuSg0fxs-unsplash.jpg"
                  alt="RERA Lawyer in Meerut NCR | UP RERA | Prime Legal Service"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0b1120] mb-5">
                Expert RERA Lawyer in Meerut & NCR – Protecting Homebuyer Rights Under UP RERA
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed text-[14px] sm:text-[15px]">
                <p>
                  The Real Estate (Regulation and Development) Act, 2016 (RERA) was enacted to bring transparency, accountability, and consumer protection to India's real estate sector. At <strong>Prime Legal Service</strong>, our experienced RERA lawyers in Meerut and NCR represent homebuyers, investors, and project allottees in filing and pursuing complaints against builders and promoters before the Uttar Pradesh Real Estate Regulatory Authority (UP RERA) and the UP RERA Appellate Tribunal, ensuring that your legal rights as a property buyer in Meerut, Ghaziabad, Noida, or Hapur are vigorously protected.
                </p>

                <p>
                  Whether you are a homebuyer in Meerut or NCR facing delayed possession, structural defects, deviation from approved plans, failure to provide occupation certificate, or misrepresentation by a local builder, our RERA legal team provides strategic and decisive legal action to secure compensation, interest on delay, refunds, and all other reliefs available under the Act. We also advise builders and developers in Meerut and the NCR region on UP RERA compliance to avoid regulatory action and homebuyer complaints.
                </p>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl md:text-[28px] font-bold text-[#0b1120] mt-10 mb-4">
                Our RERA Legal Services in Meerut & NCR
              </h3>

              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">
                At <strong>Prime Legal Service</strong>, we provide comprehensive legal representation and advisory for all RERA-related matters before UP RERA and appellate courts, protecting homebuyer rights across Meerut and NCR.
              </p>

              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">Our services include:</p>

              <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[14px] sm:text-[15px] leading-relaxed">
                <li>
                  <strong>UP RERA Complaints for Delayed Possession</strong> – Filing complaints before the UP RERA Authority against builders in Meerut, Ghaziabad, and Noida for delay in handing over possession, claiming interest at prescribed RERA rates.
                </li>
                <li>
                  <strong>Refund Claims Under UP RERA</strong> – Legal representation for homebuyers in Meerut & NCR seeking full refund of amounts paid with interest from builders in cases of inordinate delay, project abandonment, or structural defects.
                </li>
                <li>
                  <strong>Structural Defect & Deficiency of Services</strong> – Filing complaints against builders in Meerut and NCR for structural defects, poor construction quality, deviation from sanctioned plans, and failure to provide promised amenities.
                </li>
                <li>
                  <strong>Non-Registration of Project Under RERA</strong> – Legal action against builders who market and sell projects in Meerut & NCR without obtaining mandatory UP RERA registration.
                </li>
                <li>
                  <strong>Occupation Certificate & Conveyance Deed</strong> – Legal assistance in compelling builders in Meerut & NCR to obtain Occupation Certificates (OC) and execute registered conveyance/sale deeds in favour of allottees.
                </li>
                <li>
                  <strong>Appeals Before UP RERA Appellate Tribunal</strong> – Filing and contesting appeals before the UP RERA Appellate Tribunal against orders of the UP RERA Authority.
                </li>
                <li>
                  <strong>Builder RERA Compliance Advisory</strong> – Advisory services to builders, developers, and promoters in Meerut and NCR for UP RERA project registration, compliance filings, and regulatory obligations.
                </li>
              </ul>

              <h3 className="font-heading text-xl sm:text-2xl md:text-[28px] font-bold text-[#0b1120] mt-10 mb-4">
                Why Choose Prime Legal Service for RERA Matters in Meerut & NCR?
              </h3>

              <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[14px] sm:text-[15px] leading-relaxed">
                <li>Dedicated RERA lawyers in Meerut with in-depth expertise in UP RERA and the Real Estate (Regulation and Development) Act, 2016</li>
                <li>Proven track record in securing possession, refunds, and interest compensation for homebuyers before UP RERA Authority</li>
                <li>Swift filing of RERA complaints and applications to minimise delays in obtaining relief for clients across Meerut, Ghaziabad & Noida</li>
                <li>Experienced in both homebuyer complaints and builder-side UP RERA compliance advisory</li>
                <li>Representation before UP RERA Authority, UP RERA Appellate Tribunal, Allahabad High Court, and the Supreme Court of India</li>
                <li>Client-centric approach with regular updates and transparent legal strategy throughout proceedings</li>
              </ul>
            </div>

            {/* Right Sidebar Area */}
            <div className="lg:col-span-4 space-y-6 lg:space-y-8">              {/* Contact Form */}
              <SidebarEnquiryForm subject="RERA Matters" />

              {/* Need Help Box */}
              <div className="bg-[#071018] text-white p-5 sm:p-8 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("/images.jpg")', backgroundSize: 'cover' }}></div>
                <div className="relative z-10">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2">Need RERA Legal Help?</h3>
                  <p className="text-gray-400 text-sm mb-6 sm:mb-8">Call us to fight against your builder legally in Meerut & NCR</p>
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
