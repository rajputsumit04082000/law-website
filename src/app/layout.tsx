import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DisclaimerModal } from "@/components/ui/DisclaimerModal";
import { StickyContactIcons } from "@/components/layout/StickyContactIcons";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Advocates & Legal Consultants",
    template: "%s | Advocates & Legal Consultants"
  },
  description: "A leading law firm providing expert legal consultation, solicitors, and representation across various practice areas.",
  openGraph: {
    title: "Advocates & Legal Consultants",
    description: "Expert legal consultation and representation.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans selection:bg-accent selection:text-white overflow-x-hidden">
        <DisclaimerModal />
        <StickyContactIcons />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
