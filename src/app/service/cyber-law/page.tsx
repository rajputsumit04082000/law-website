import { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Cyber Law Cases Lawyer | Sandhya Gupta & Associates",
  description: "Expert legal services for Cyber Law Cases Lawyer in Delhi.",
};

export default function Page() {
  return (
    <>
      <PageHeader 
        title="Cyber Law Cases Lawyer" 
        subtitle="Expert Legal Representation"
      />

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Left Content Area */}
            <div className="lg:col-span-8">
              <div className="relative h-[220px] sm:h-[320px] md:h-[420px] lg:h-[450px] rounded-xl overflow-hidden mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200" 
                  alt="Cyber Law Cases Lawyer" 
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0b1120] mb-5">Cyber Law Cases Lawyer</h2>
              
              <div className="space-y-4 text-gray-700 leading-relaxed text-[14px] sm:text-[15px]">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl md:text-[28px] font-bold text-[#0b1120] mt-10 mb-4">
                Our Cyber Law Cases Lawyer Services
              </h3>
              
              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">
                At Sandhya Gupta &amp; Associates, we offer expert legal assistance tailored to your needs. Our skilled lawyers are well-versed in the laws and provide comprehensive support throughout your case.
              </p>
              
              <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-4">Our services include:</p>
              
              <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[14px] sm:text-[15px] leading-relaxed">
                <li><strong>Pre-litigation Services</strong> &ndash; Drafting comprehensive representations to be submitted before the concerned departments.</li>
                <li><strong>Drafting and Filing Petitions</strong> &ndash; Preparing and filing service-related petitions and original applications before the court.</li>
                <li><strong>Representation for Clients</strong> &ndash; Strategic argumentation and representation for various clients covered under the relevant laws.</li>
                <li><strong>Appeals and Review Petitions</strong> &ndash; Filing appeals, review petitions, and execution of court orders.</li>
                <li><strong>Alternative Dispute Resolution</strong> &ndash; Handling mediation and arbitration for out-of-court settlements.</li>
              </ul>
            </div>

            {/* Right Sidebar Area */}
            <div className="lg:col-span-4 space-y-6 lg:space-y-8">
              
              {/* Contact Form */}
              <div className="bg-[#f5f5f5] p-5 sm:p-8 rounded-xl">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-[#0b1120] mb-5">Get In Touch</h3>
                <form className="space-y-3 sm:space-y-4">
                  <div className="space-y-1">
                    <label className="text-[12px] sm:text-[13px] font-semibold text-gray-700">Your Name</label>
                    <input type="text" placeholder="Enter your name" className="w-full h-10 sm:h-11 px-4 rounded-md border border-gray-300 bg-transparent text-[13px] sm:text-[14px] outline-none focus:border-[#a67c52]" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[12px] sm:text-[13px] font-semibold text-gray-700">Your Email</label>
                    <input type="email" placeholder="Enter your email" className="w-full h-10 sm:h-11 px-4 rounded-md border border-gray-300 bg-transparent text-[13px] sm:text-[14px] outline-none focus:border-[#a67c52]" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[12px] sm:text-[13px] font-semibold text-gray-700">Your Phone Number</label>
                    <input type="tel" placeholder="Enter your number" className="w-full h-10 sm:h-11 px-4 rounded-md border border-gray-300 bg-transparent text-[13px] sm:text-[14px] outline-none focus:border-[#a67c52]" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[12px] sm:text-[13px] font-semibold text-gray-700">Subject</label>
                    <input type="text" placeholder="Enter your subject" className="w-full h-10 sm:h-11 px-4 rounded-md border border-gray-300 bg-transparent text-[13px] sm:text-[14px] outline-none focus:border-[#a67c52]" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[12px] sm:text-[13px] font-semibold text-gray-700">Query / Message</label>
                    <textarea rows={4} placeholder="Write your message here..." className="w-full p-3 sm:p-4 rounded-md border border-gray-300 bg-transparent text-[13px] sm:text-[14px] outline-none focus:border-[#a67c52] resize-none" />
                  </div>
                  <button type="button" className="w-full bg-[#a67c52] hover:bg-[#8B6914] text-white font-semibold py-3 rounded-md transition-colors flex items-center justify-center gap-2 mt-2">
                    Send Message
                  </button>
                </form>
              </div>

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
                        <p className="text-gray-300 text-[13px] sm:text-[14px]">lawyersandhya@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-[#0b1120] flex-shrink-0">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-[14px] sm:text-[15px]">Our Location</p>
                        <p className="text-gray-300 text-[13px] sm:text-[14px]">Delhi</p>
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
