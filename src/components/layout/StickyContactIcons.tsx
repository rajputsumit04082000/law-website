import Link from "next/link";
import { Mail, Phone } from "lucide-react";

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white" className="w-4 h-4 sm:w-5 sm:h-5">
      <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.471 2.027 7.773L0 32l8.459-2.004A15.926 15.926 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.091a13.04 13.04 0 01-6.647-1.819l-.476-.284-4.935 1.169 1.218-4.806-.311-.493A13.061 13.061 0 012.909 16C2.909 9.32 8.32 3.909 16 3.909S29.091 9.32 29.091 16 23.68 29.091 16 29.091zm7.13-9.763c-.39-.194-2.308-1.139-2.665-1.268-.356-.13-.616-.194-.875.194-.26.39-1.005 1.268-1.233 1.528-.227.26-.454.291-.844.097-.39-.194-1.645-.606-3.134-1.932-1.159-1.032-1.942-2.306-2.17-2.696-.227-.39-.024-.6.17-.794.175-.174.39-.454.584-.681.195-.227.26-.39.39-.649.13-.26.065-.487-.032-.681-.098-.194-.875-2.112-1.2-2.892-.315-.76-.635-.656-.875-.668l-.746-.013c-.26 0-.681.098-.1038.487-.357.39-1.362 1.332-1.362 3.25s1.395 3.77 1.59 4.03c.194.26 2.745 4.19 6.65 5.875.929.4 1.654.64 2.219.82.932.296 1.78.254 2.45.155.747-.112 2.308-.943 2.634-1.855.325-.91.325-1.69.227-1.855-.097-.162-.356-.26-.746-.454z" />
    </svg>
  );
}

export function StickyContactIcons() {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-[150] flex flex-col gap-1.5">
      <Link
        href="mailto:lawyersandhya@gmail.com"
        aria-label="Email Us"
        className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#e0332f] shadow-lg transition-all duration-200 hover:brightness-110"
        style={{ borderRadius: "0 6px 6px 0" }}
      >
        <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
      </Link>

      <Link
        href="tel:+919911077828"
        aria-label="Call Us"
        className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#1877f2] shadow-lg transition-all duration-200 hover:brightness-110"
        style={{ borderRadius: "0 6px 6px 0" }}
      >
        <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
      </Link>

      <Link
        href="https://wa.me/919911077828"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Us"
        className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#25d366] shadow-lg transition-all duration-200 hover:brightness-110"
        style={{ borderRadius: "0 6px 6px 0" }}
      >
        <WhatsAppIcon />
      </Link>
    </div>
  );
}
