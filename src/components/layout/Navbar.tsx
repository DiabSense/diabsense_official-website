import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import imgLogo from "@/assets/images/logo.png";
import { inter } from "@/utils/fonts";

export type Page = "home" | "solution" | "products" | "clinical" | "about" | "news" | "contact";

export const NAV_LINKS: { id: Page; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "solution", label: "Solution" },
  { id: "products", label: "Products" },
  { id: "clinical", label: "Clinical Evidence" },
  { id: "about", label: "About" },
];

interface NavbarProps {
  page: Page;
  setPage: (p: Page) => void;
}

export default function Navbar({ page, setPage }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if user scrolled down past 10px to apply floating style
      setIsScrolled(currentScrollY > 10);

      // Scroll logic for show/hide
      if (currentScrollY <= 80) {
        // Keep navbar visible at the top of the page
        setVisible(true);
      } else if (currentScrollY > lastScrollY && !open) {
        // Scrolling down and mobile drawer is closed -> hide navbar
        setVisible(false);
      } else {
        // Scrolling up -> show navbar
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, open]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ease-in-out ${visible ? "translate-y-0" : "-translate-y-full"
        } ${isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-100/50 shadow-sm shadow-black/5"
          : "bg-white border-b border-gray-100"
        }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-full flex items-center justify-between">
        <button onClick={() => setPage("home")} className="shrink-0">
          <img src={imgLogo} alt="DiabSense" className="h-11 w-auto" />
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 h-full">
          {NAV_LINKS.map((n) => (
            <button
              key={n.id}
              onClick={() => setPage(n.id)}
              className={`relative group text-[13px] uppercase tracking-wide transition-colors whitespace-nowrap py-2 ${page === n.id
                  ? "text-[#003d9b] font-bold"
                  : "text-gray-700 font-medium hover:text-[#003d9b]"
                }`}
              style={inter}
            >
              {n.label}
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#003d9b] transition-transform duration-300 origin-left ${page === n.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
              />
            </button>
          ))}
          <button
            onClick={() => setPage("news")}
            className={`relative group hidden xl:block text-[13px] uppercase tracking-wide transition-colors whitespace-nowrap py-2 ${page === "news"
                ? "text-[#003d9b] font-bold"
                : "text-gray-700 font-medium hover:text-[#003d9b]"
              }`}
            style={inter}
          >
            News & Updates
            <span
              className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#003d9b] transition-transform duration-300 origin-left ${page === "news" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
            />
          </button>
          <button
            onClick={() => setPage("contact")}
            className={`relative group text-[13px] uppercase tracking-wide transition-colors whitespace-nowrap py-2 ${page === "contact"
                ? "text-[#003d9b] font-bold"
                : "text-gray-700 font-medium hover:text-[#003d9b]"
              }`}
            style={inter}
          >
            Contact
            <span
              className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#003d9b] transition-transform duration-300 origin-left ${page === "contact" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
            />
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-8 py-6 flex flex-col gap-5 shadow-lg">
          {NAV_LINKS.map((n) => (
            <button
              key={n.id}
              onClick={() => { setPage(n.id); setOpen(false); }}
              className={`text-sm font-medium uppercase tracking-wide text-left ${page === n.id ? "text-[#003d9b] font-bold" : "text-gray-700"
                }`}
              style={inter}
            >
              {n.label}
            </button>
          ))}
          <button
            onClick={() => { setPage("news"); setOpen(false); }}
            className={`text-sm font-medium uppercase tracking-wide text-left ${page === "news" ? "text-[#003d9b] font-bold" : "text-gray-700"
              }`}
            style={inter}
          >
            News & Updates
          </button>
          <button
            onClick={() => { setPage("contact"); setOpen(false); }}
            className={`text-sm font-medium uppercase tracking-wide text-left ${page === "contact" ? "text-[#003d9b] font-bold" : "text-gray-700"
              }`}
            style={inter}
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}
