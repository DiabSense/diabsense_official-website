import { useState, useEffect } from "react";
import Navbar, { Page } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import Solution from "@/pages/Solution";
import Products from "@/pages/Products";
import Clinical from "@/pages/Clinical";
import About from "@/pages/About";
import News from "@/pages/News";
import Contact from "@/pages/Contact";
import { inter } from "@/utils/fonts";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  const navigate = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    // Collect all revealable elements
    const revealElements = document.querySelectorAll(
      ".reveal, .reveal-fade, .reveal-scale, .reveal-stagger"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            // Unobserve once revealed to keep animation clean and avoid redundant runs
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12, // Trigger when 12% of the element is visible
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before it fully rolls in
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, [page]); // Re-initialize observer on page changes so new elements are bound

  return (
    <div className="min-h-screen bg-white" style={inter}>
      <Navbar page={page} setPage={navigate} />
      <main className="pt-20">
        <div key={page} className="animate-fade-in-page">
          {page === "home"     && <Home     setPage={navigate} />}
          {page === "solution" && <Solution />}
          {page === "products" && <Products />}
          {page === "clinical" && <Clinical />}
          {page === "about"    && <About    />}
          {page === "news"     && <News     />}
          {page === "contact"  && <Contact  />}
        </div>
      </main>
      <Footer setPage={navigate} />
    </div>
  );
}
