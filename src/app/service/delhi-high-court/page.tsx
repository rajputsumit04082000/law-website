import { Metadata } from "next";
import { SidebarEnquiryForm } from "@/components/sections/SidebarEnquiryForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Delhi High Court Lawyer | Writ Petitions, Appeals & Civil Matters | Prime Legal Service Meerut",
  description:
    "Expert Delhi High Court lawyers from Meerut & NCR for writ petitions, civil appeals, criminal appeals, matrimonial appeals, service matters, and commercial disputes. Prime Legal Service provides skilled advocacy before the Delhi High Court and Division Benches for clients across Meerut, Ghaziabad, Noida, and NCR.",
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="Delhi High Court Lawyer"
        subtitle="Expert Advocacy Before the Delhi High Court for Clients Across Meerut & NCR"
      />

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

            {/* Left Content Area */}
            <div className="lg:col-span-8">
              <div className="relative h-[220px] sm:h-[320px] md:h-[420px] lg:h-[450px] rounded-xl overflow-hidden mb-8">
                <img
                  src="/images (4).jpg"
                  alt="Delhi High Court Lawyer for Meerut NCR | Prime Legal Service"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0b1120] mb-5">
                Expert Delhi High Court Lawyer – Serving Clients from Meerut & NCR
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed text-[14px] sm:text-[15px]">
                <p>
                  The Delhi High Court is one of India's premier constitutional courts, exercising original, appellate, and writ jurisdiction over a wide range of civil, criminal, constitutional, and commercial matters. At <strong>Prime Legal Service</strong>, our experienced Delhi High Court lawyers provide skilled legal representation for clients from Meerut, Ghaziabad, Noida, Hapur, Bulandshahr, and across the NCR — filing and arguing writ petitions under Article 226, contesting civil appeals, criminal revisions, service matters, matrimonial appeals, and company law cases before the Delhi High Court.
                </p>

                <p>
                  Our legal team has extensive experience navigating the complex procedural and substantive landscape of High Court litigation. Individuals, companies, government bodies, and institutions from Meerut and NCR rely on us for diligent preparation, strategic argumentation, and timely legal action before both the Single Bench and Division Bench of the Delhi High Court, and before the Supreme Court of India when necessary.
                </p>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl md:text-[28px] font-bold text-[#0b1120] mt-10 mb-4">
                Our Delhi High Court Legal Services for Meerut & NCR Clients
              </h3>

              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">
                At <strong>Prime Legal Service</strong>, we handle a wide spectrum of Delhi High Court matters for clients across Meerut and NCR, with professional expertise and strategic legal insight.
              </p>

              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">Our services include:</p>

              <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[14px] sm:text-[15px] leading-relaxed">
                <li>
                  <strong>Writ Petitions (Article 226)</strong> – Filing and arguing writ petitions including Habeas Corpus, Mandamus, Certiorari, Prohibition, and Quo Warranto before the Delhi High Court on behalf of clients from Meerut & NCR.
                </li>
                <li>
                  <strong>Civil Appeals & Revisions</strong> – Representation in First Appeals, Second Appeals, Regular First Appeals, and Civil Revision Petitions challenging orders of subordinate courts in Uttar Pradesh and NCR.
                </li>
                <li>
                  <strong>Criminal Appeals & Revisions</strong> – Filing criminal appeals, criminal revisions, bail applications before the Delhi High Court, and applications under Section 482 CrPC for quashing of FIRs.
                </li>
                <li>
                  <strong>Service & Employment Matters</strong> – Representation in writ petitions by government employees from Meerut & NCR challenging illegal termination, suspension, promotion disputes, and disciplinary proceedings.
                </li>
                <li>
                  <strong>Matrimonial & Family Appeals</strong> – Contesting appeals arising from Family Court orders in divorce, maintenance, custody, and matrimonial property matters for clients across Meerut and NCR.
                </li>
                <li>
                  <strong>Commercial Court Matters</strong> – Representing parties from Meerut and NCR in commercial disputes, arbitration appeals, and intellectual property matters before the Commercial Division of the Delhi High Court.
                </li>
                <li>
                  <strong>Stay Applications & Urgent Reliefs</strong> – Filing urgent applications for interim stays, injunctions, and protective orders before the Delhi High Court on a priority basis for clients requiring immediate relief.
                </li>
              </ul>

              <h3 className="font-heading text-xl sm:text-2xl md:text-[28px] font-bold text-[#0b1120] mt-10 mb-4">
                Why Choose Prime Legal Service for Delhi High Court Matters?
              </h3>

              <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[14px] sm:text-[15px] leading-relaxed">
                <li>Seasoned Delhi High Court advocates with extensive experience across civil, criminal, and constitutional matters for clients from Meerut & NCR</li>
                <li>Strategic preparation of petitions and appeals with detailed legal research and precise argumentation</li>
                <li>Comprehensive understanding of Delhi High Court rules, procedures, and listing requirements</li>
                <li>Strong track record in obtaining interim reliefs, stays, and urgent orders on short notice</li>
                <li>Transparent communication with clients in Meerut & NCR at every stage of proceedings</li>
                <li>Experienced in both Single Bench and Division Bench proceedings, including Letters Patent Appeals</li>
              </ul>
            </div>

            {/* Right Sidebar Area */}
            <div className="lg:col-span-4 space-y-6 lg:space-y-8">              {/* Contact Form */}
              <SidebarEnquiryForm subject="Delhi High Court" />

              {/* Need Help Box */}
              <div className="bg-[#071018] text-white p-5 sm:p-8 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("/images.jpg")', backgroundSize: 'cover' }}></div>
                <div className="relative z-10">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2">Need High Court Help?</h3>
                  <p className="text-gray-400 text-sm mb-6 sm:mb-8">Call us for expert Delhi High Court representation from Meerut & NCR</p>
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
