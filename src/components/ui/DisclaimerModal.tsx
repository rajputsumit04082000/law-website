"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasAccepted = sessionStorage.getItem("disclaimerAccepted");
    if (!hasAccepted) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    sessionStorage.setItem("disclaimerAccepted", "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-2xl z-10 max-h-[90vh] flex flex-col">

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="px-8 py-5 overflow-y-auto flex-1">
          {/* Title */}
          <h2 className="text-xl font-serif font-bold text-center text-gray-900 mb-4">
            Disclaimer
          </h2>

          {/* Content */}
          <div className="text-[12px] text-gray-700 space-y-2 leading-relaxed">
            <p className="font-bold">
              The Bar Council of India prohibits the developing of the website for the advertisement by an Advocate.
            </p>

            <p>
              By clicking &ldquo;I Agree&rdquo; below, the user acknowledges the following:
              This website is meant only for information purposes and not for any advertisement, personal communication, invitation or inducement of any sort from us or any of our members to solicit or advert any work through this website.
            </p>

            <p>
              If you wish to get more information about us or would like to get in touch with <strong>ABC &amp; Associates</strong>, you may contact us on our registered email address: ABC@gmail.com.
            </p>

            <p>As per the rules of the Bar Council of India, Advocates are not permitted to solicit or advertise their work. By clicking on &ldquo;I Agree&rdquo; below, the user (you) acknowledges the following:</p>

            <ul className="list-disc pl-4 space-y-1">
              <li>
                There exists no any sort of advertisement, personal communication, solicitation, invitation or inducement of any sort whatsoever from us or any of our members and we are not soliciting any work through this website.
              </li>
              <li>
                The user deliberates and wishes to get more information about us for his/her own information, use and voluntary will.
              </li>
              <li>
                The information, if any, that may be provided to the user by us would have been provided upon user&apos;s specific request and any such information obtained, retained or downloaded from this website is absolutely the act of volition of the user and any transmission, receipt or use of information or links to this site would not create any lawyer-client relationship.
              </li>
            </ul>

            <p>
              The information provided under this website is only available at your request for informational purposes rigidly, and should not be interpreted as soliciting or advertisement in any manner. We are neither privy nor responsible or liable for any consequence of any action taken by the user relying upon our material/information provided under this website. In case the user has any legal issues, the user must seek independent legal advice.
            </p>

            <p className="font-medium">
              Note: Access will only be granted once you confirm you have read and agree to the above.
            </p>
          </div>

          <div className="flex justify-center mt-5">
            <button
              onClick={handleAccept}
              className="px-10 py-2.5 bg-[#a67c52] hover:bg-[#8a6440] text-white font-semibold rounded-full transition-colors duration-300 text-sm"
            >
              I agree
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
