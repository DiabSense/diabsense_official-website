import imgLogo from "@/assets/images/logo.png";
import { Page } from "./Navbar";
import { Phone, Mail, Linkedin, Globe, ChevronRight, Heart, ArrowUpRight } from "lucide-react";
import { inter, manrope } from "@/utils/fonts";

interface FooterProps {
  setPage: (p: Page) => void;
}

export default function Footer({ setPage }: FooterProps) {
  const handleNav = (p: Page) => {
    setPage(p);
  };

  return (
    <footer className="bg-[#0a0d0f] text-white pt-20 pb-8 border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">

        {/* ── Top Section: 4-Column Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">

          {/* Column 1: Brand & Socials (col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <button onClick={() => handleNav("home")} className="shrink-0 block text-left">
              <img src={imgLogo} alt="DiabSense" className="h-11 w-auto mb-4 hover:opacity-90 transition-opacity" />
            </button>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm" style={inter}>
              Pioneering early detection for diabetic foot health through proprietary thermal + visual AI technology. Saving limbs, improving lives.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://linkedin.com/company/diabsense"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#0077b5] text-white/70 hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.diabsense.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#2d8ab8] text-white/70 hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              >
                <Globe size={18} />
              </a>
              <a
                href="mailto:kosala@diabsense.com"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#003d9b] text-white/70 hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Solutions & Products (col-span-3) */}
          <div className="lg:col-span-3 lg:pl-4">
            <h4 className="text-xs font-extrabold uppercase tracking-[2px] text-[#456274] mb-6" style={manrope}>
              Platform & Tech
            </h4>
            <ul className="space-y-3.5">
              {[
                { label: "Home", page: "home" as Page },
                { label: "About Us", page: "about" as Page },
                { label: "Solution", page: "solution" as Page },
                { label: "Product", page: "products" as Page },
                { label: "Clinical Evidence", page: "clinical" as Page },
                { label: "News", page: "news" as Page },
                { label: "Contact", page: "contact" as Page }
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.page)}
                    className="group flex items-center text-sm text-white/60 hover:text-white transition-colors text-left"
                    style={inter}
                  >
                    <ChevronRight size={14} className="text-[#2d8ab8] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 mr-1.5" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Clinical & News (col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-extrabold uppercase tracking-[2px] text-[#456274] mb-6" style={manrope}>
              Evidence & News
            </h4>
            <ul className="space-y-3.5">
              {[
                { label: "Clinical Trials", page: "clinical" as Page },
                { label: "FDA breakthrough", page: "clinical" as Page },
                { label: "News & Updates", page: "news" as Page },
                { label: "Whitepapers", page: "clinical" as Page },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.page)}
                    className="group flex items-center text-sm text-white/60 hover:text-white transition-colors text-left"
                    style={inter}
                  >
                    <ChevronRight size={14} className="text-[#2d8ab8] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 mr-1.5" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office (col-span-3) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-xs font-extrabold uppercase tracking-[2px] text-[#456274] mb-6" style={manrope}>
              Direct Contact
            </h4>
            <div className="space-y-3.5">
              <a
                href="tel:+94775555174"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors"
                style={inter}
              >
                <Phone size={16} className="text-[#2d8ab8] shrink-0" />
                <span>+94 77 555 5174</span>
              </a>
              <a
                href="mailto:kosala@diabsense.com"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors"
                style={inter}
              >
                <Mail size={16} className="text-[#2d8ab8] shrink-0" />
                <span>kosala@diabsense.com</span>
              </a>
            </div>
            <div className="pt-2">
              <button
                onClick={() => handleNav("contact")}
                className="w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-xs font-bold uppercase tracking-wider py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5"
                style={manrope}
              >
                <span>Get Support</span>
                <ArrowUpRight size={14} className="text-[#2d8ab8]" />
              </button>
            </div>
          </div>

        </div>

        {/* ── Bottom Section: Copyright & Legal info ── */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-[1.2px] text-white/30" style={manrope}>
              © {new Date().getFullYear()} DiabSense. All rights reserved.
            </p>
            <span className="hidden md:inline text-white/20 text-xs">•</span>
            <p className="text-[11px] text-white/40 flex items-center gap-1" style={inter}>
              Pioneered with <Heart size={10} className="text-red-500 fill-current" /> for healthcare innovation.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {["Privacy Policy", "Terms of Service", "Compliance"].map((item) => (
              <span
                key={item}
                className="text-xs font-bold uppercase tracking-[1.2px] text-white/30 hover:text-white/70 cursor-pointer transition-colors"
                style={manrope}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
