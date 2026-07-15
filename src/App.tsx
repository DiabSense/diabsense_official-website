import { useState } from "react";
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

  return (
    <div className="min-h-screen bg-white" style={inter}>
      <Navbar page={page} setPage={navigate} />
      <main className="pt-20">
        {page === "home"     && <Home     setPage={navigate} />}
        {page === "solution" && <Solution />}
        {page === "products" && <Products />}
        {page === "clinical" && <Clinical />}
        {page === "about"    && <About    />}
        {page === "news"     && <News     />}
        {page === "contact"  && <Contact  />}
      </main>
      <Footer setPage={navigate} />
    </div>
  );
}
