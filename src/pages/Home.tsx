import { useState, useEffect } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Page } from "@/components/layout/Navbar";
import imgScanningInterface from "@/assets/images/home/home-hero.png";
import imgEcoSystem1 from "@/assets/images/home/diabsense_eco_system.jpg";
import imgEcoSystem2 from "@/assets/images/home/diabsense_eco_system2.jpg";
import imgEcoSystem3 from "@/assets/images/home/diabsense_eco_system3.jpg";

// import imgHomeHeroBg from "@/assets/images/home/home-hero-bg.png";
import { inter, manrope } from "@/utils/fonts";
import { HomeIcons } from "@/assets/icons/index";

// Hashed PNG mapping:
// logo -> logo.png
// 90c7fae2613fbd6ff987787a3232cb0d784d1759.png -> scanning-interface.png
// 4f398329bf1654e75201c772bde6e3fad57eb35f.png -> medical-solution.png
// 33bcf4541b199827c17f6b41ff5363d359e28155.png -> home-hero-bg.png

interface HomeProps {
  setPage: (p: Page) => void;
}

export default function Home({ setPage }: HomeProps) {
  const carouselImages = [
    imgEcoSystem1,
    imgEcoSystem2,
    imgEcoSystem3
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative min-h-[calc(100vh-5rem)] bg-[#fafbfd] overflow-hidden flex items-center py-16 lg:py-0">
        <style>{`
          @keyframes scan {
            0% { top: 0%; }
            50% { top: 100%; }
            100% { top: 0%; }
          }
          .animate-scan {
            animation: scan 4s linear infinite;
          }
        `}</style>

        {/* Subtle grid background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,61,155,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,61,155,0.04)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        {/* Ambient tech glow effects */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-400/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-300/5 blur-[100px] pointer-events-none" />

        <div className="relative w-full max-w-[1280px] mx-auto px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Column - Content */}
            <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center text-left">
              {/* Modern Tag Badge */}
              <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#003d9b]/5 border border-[#003d9b]/10 mb-6 backdrop-blur-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2d8ab8] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2d8ab8]"></span>
                </span>
                <span className="text-[#003d9b] text-[10px] font-extrabold uppercase tracking-[2px] font-sans" style={manrope}>AI Clinical Monitoring</span>
              </div>

              <p className="text-[#2d8ab8] text-xs font-bold uppercase tracking-[5px] mb-3" style={manrope}>DiabSense</p>

              <h1 className="text-4xl lg:text-5xl font-black text-[#191c1e] leading-[1.15] mb-6 tracking-tight" style={manrope}>
                AI-Powered Early Detection of{" "}
                <span className="bg-gradient-to-r from-[#003d9b] to-[#2d8ab8] bg-clip-text text-transparent block sm:inline">Diabetic Foot</span>{" "}
                <span className="text-[#b02f00] relative inline-block">
                  Complications
                  <span className="absolute bottom-1 left-0 w-full h-[4px] bg-[#b02f00]/10 rounded-full" />
                </span>
              </h1>

              <p className="text-[#434654] text-lg leading-relaxed mb-8 max-w-xl" style={inter}>
                Prevent foot ulcers through early thermal monitoring using AI powered dual spectrum thermal + visual technology.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
                <button onClick={() => setPage("contact")}
                  className="group bg-[#003d9b] hover:bg-[#00296d] text-white px-7 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(0,61,155,0.25)] hover:shadow-[0_6px_25px_rgba(0,61,155,0.35)] flex items-center gap-2" style={manrope}>
                  <span>Request Consultation</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => setPage("products")}
                  className="bg-white hover:bg-slate-50 text-[#003d9b] border-2 border-slate-200 hover:border-[#003d9b]/35 px-7 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
                  style={manrope}
                >
                  <span>View Products</span>
                </button>
              </div>

              {/* Trust Metric Parameters */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200/80 max-w-lg">
                <div>
                  <p className="text-2xl font-extrabold text-[#003d9b] leading-none" style={manrope}>0.1°C</p>
                  <p className="text-[9px] text-[#737685] font-extrabold uppercase tracking-wider mt-1.5" style={manrope}>Thermal Accuracy</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-[#2d8ab8] leading-none" style={manrope}>30 Sec</p>
                  <p className="text-[9px] text-[#737685] font-extrabold uppercase tracking-wider mt-1.5" style={manrope}>Daily Checkup</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-[#b02f00] leading-none" style={manrope}>99.9%</p>
                  <p className="text-[9px] text-[#737685] font-extrabold uppercase tracking-wider mt-1.5" style={manrope}>AI Precision</p>
                </div>
              </div>
            </div>

            {/* Right Column - Smart Interactive Console */}
            <div className="lg:col-span-5 xl:col-span-6 flex justify-center lg:justify-end items-center">
              <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] bg-slate-950 border border-slate-800 group">
                {/* Background scanning interface image */}
                <img src={imgScanningInterface} alt="Scanning Interface" className="w-full h-full object-cover opacity-80 group-hover:scale-[1.03] transition-all duration-700" />

                {/* Active scan line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#2d8ab8] to-transparent shadow-[0_0_10px_#2d8ab8] animate-scan z-20" />

                {/* Cyber tech grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-10" />

                {/* Visual shadow mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/40 pointer-events-none z-10" />

                {/* Dashboard top header */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-center bg-slate-950/70 backdrop-blur-md px-3.5 py-2 rounded-lg border border-white/10 z-20">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] font-bold text-white uppercase tracking-wider font-mono">SYSTEM ONLINE</span>
                  </div>
                  <span className="text-[9px] font-bold text-slate-400 font-mono">SYS.TEMP_OK</span>
                </div>

                {/* Medical reticle crosshairs */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20">
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <div className="absolute inset-0 border border-[#2d8ab8]/40 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                    <div className="absolute w-14 h-14 border border-[#003d9b]/60 rounded-full animate-spin" style={{ animationDuration: '10s' }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#b02f00] shadow-[0_0_8px_rgba(176,47,0,0.8)]" />
                  </div>
                </div>

                {/* Bottom monitoring panel */}
                <div className="absolute bottom-3 left-3 right-3 bg-slate-950/80 backdrop-blur-md p-3.5 rounded-xl border border-white/10 z-20">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <p className="text-[9px] font-semibold text-[#2d8ab8] uppercase tracking-wider font-mono">LOWER EXTREMITY SCAN</p>
                      <h4 className="text-xs font-bold text-white" style={manrope}>Dynamic Thermal Capture</h4>
                    </div>
                    <span className="bg-[#b02f00]/20 text-[#ff6b57] text-[8px] font-bold px-2 py-0.5 rounded uppercase tracking-wider font-mono border border-[#b02f00]/40">
                      Auto-Calibrated
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5 font-mono text-[9px]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2d8ab8]" />
                      <span className="text-slate-400">Mean Temp:</span>
                      <span className="text-slate-200 font-bold">31.4 °C</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#b02f00]" />
                      <span className="text-slate-400">Deviance:</span>
                      <span className="text-red-400 font-bold">+2.7 °C</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Global Crisis Stats ── */}
      <section className="bg-[#f3f4f6] py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#2d8ab8] text-xs font-bold uppercase tracking-[5px] mb-4" style={manrope}>The Growing Global Crisis</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#181c1f] tracking-tight" style={manrope}>
              Protecting Millions from Preventable Amputations
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "700M", label: "Diabetic Patients", color: "#181c1f" },
              { value: "45M", label: "Foot Ulcers Annually", color: "#805200" },
              { value: "9M", label: "Amputations", color: "#ba1a1a" },
              { value: "5M", label: "Related Deaths", color: "#3f484e" },
            ].map(stat => (
              <div key={stat.label} className="bg-white rounded-2xl p-8 text-center drop-shadow-[0px_4px_26px_rgba(0,0,0,0.25)]">
                <p className="text-4xl lg:text-5xl font-extrabold mb-2" style={{ color: stat.color, ...manrope }}>{stat.value}</p>
                <p className="text-xs font-bold uppercase tracking-[0.7px] text-[#456274]" style={manrope}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Solution ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="rounded-2xl overflow-hidden bg-[#f3f4f6] aspect-[4/3] relative group shadow-lg border border-gray-100/50">
              {/* Slides */}
              {carouselImages.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                >
                  <img
                    src={img}
                    alt={`DiabSense Solution slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[rgba(0,61,155,0.05)] mix-blend-multiply" />
                </div>
              ))}

              {/* Prev / Next buttons on hover */}
              <button
                type="button"
                onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm"
                aria-label="Previous slide"
              >
                <ArrowRight size={16} className="rotate-180" />
              </button>
              <button
                type="button"
                onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselImages.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm"
                aria-label="Next slide"
              >
                <ArrowRight size={16} />
              </button>

              {/* Navigation Indicators */}
              <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
                {carouselImages.map((_, index) => (
                  <button
                    type="button"
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide
                      ? "bg-white w-6 shadow-sm"
                      : "bg-white/50 hover:bg-white/80"
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <div>
              <p className="text-[#2d8ab8] text-xs font-bold uppercase tracking-[5px] mb-6" style={manrope}>Our Solution</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#191c1e] leading-tight mb-6" style={manrope}>
                Bridging the Gap Between{" "}
                <span className="text-[#003d9b]">Home Care</span>{" "}
                &{" "}
                <span className="text-[#b02f00]">Clinical Precision</span>
              </h2>
              <p className="text-[#434654] text-lg leading-relaxed mb-8" style={inter}>
                Our proprietary AI engine combines dual-spectrum imaging High-Resolution Visual and Deep Thermal to identify inflammation markers long before they are visible to the naked eye.
              </p>
              <div className="space-y-6">
                {[
                  { iconKey: "icon1", title: "Thermal Signature Mapping", desc: "Detect temperature variances up to 0.1°C accuracy across the entire plantar surface." },
                  { iconKey: "icon2", title: "AI Diagnostic Engine", desc: "Continuous learning models validated against thousands of clinical ulcer cases." },
                  { iconKey: "icon3", title: "Seamless Ecosystem", desc: "Instant data synchronization between home devices and specialist dashboards." },
                ].map(f => (
                  <div key={f.title} className="flex gap-4 items-start">
                    <div className="w-[42px] h-[42px] rounded bg-[#003d9b]/10 flex items-center justify-center shrink-0">
                      <img src={HomeIcons[f.iconKey]} alt={f.title} className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#191c1e] text-base mb-1" style={manrope}>{f.title}</h4>
                      <p className="text-[#737685] text-sm leading-relaxed" style={inter}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5-Step Protocol ── */}
      <section className="bg-[#f7f9fe] py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#2d8ab8] text-xs font-bold uppercase tracking-[5px] mb-4" style={manrope}>User Experience</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#181c1f] tracking-tight" style={manrope}>The 5-Step Protocol</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6">
            {[
              { iconKey: "icon4", step: "01", title: "Scan feet daily", desc: "30-second daily habit to capture thermal signatures." },
              { iconKey: "icon5", step: "02", title: "Upload to cloud", desc: "Instant sync to our secure medical-grade cloud." },
              { iconKey: "icon6", step: "03", title: "AI analysis", desc: "Diagnostic engines compare data to historical norms." },
              { iconKey: "icon7", step: "04", title: "Risk detection", desc: "Immediate identification of high-risk temperature spikes." },
              { iconKey: "icon8", step: "05", title: "Doctor alert", desc: "Automated notification to clinical partners." },
            ].map(s => (
              <div key={s.step} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white rounded-xl shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] flex items-center justify-center mb-8">
                  <img src={HomeIcons[s.iconKey]} alt={s.title} className="w-7 h-7" />
                </div>
                <p className="text-[10px] font-extrabold uppercase tracking-[1px] text-[#2d8ab8]/40 mb-2" style={manrope}>Step {s.step}</p>
                <h4 className="font-bold text-[#181c1f] text-lg tracking-tight mb-3" style={manrope}>{s.title}</h4>
                <p className="text-[#456274] text-sm leading-relaxed font-light" style={manrope}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Deployment Tiers ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#2d8ab8] text-xs font-bold uppercase tracking-[5px] mb-4" style={manrope}>Product Ecosystem</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#181c1f] tracking-tight" style={manrope}>Deployment Tiers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                badge: "Wellness", badgeBg: "#e6e8ec", badgeColor: "#3f484e",
                title: "FootScan Lite",
                desc: "Essential thermal monitoring for health-conscious patients looking for peace of mind through daily checks.",
                features: ["Thermal Imaging", "Smartphone App", "Daily Health Tips"],
                btn: "Learn More", btnPrimary: false, btnColor: "#2d8ab8",
              },
              {
                badge: "Medical Grade", badgeBg: "rgba(45,138,184,0.1)", badgeColor: "#2d8ab8",
                title: "FootScan Home",
                desc: "Our flagship at-home clinical device. Remote patient monitoring with direct clinical oversight and AI diagnostic reporting.",
                features: ["24/7 Continuous Monitoring", "Predictive Hypo-Alerts", "Family Share Ecosystem"],
                btn: "Select Home", btnPrimary: true, btnColor: "#003d9b",
              },
              {
                badge: "Institutional", badgeBg: "#e6e8ec", badgeColor: "#3f484e",
                title: "FootScan Pro",
                desc: "Advanced diagnostic kiosk for clinics, podiatry offices, and diabetic centers for high-volume patient screening.",
                features: ["Multi-Patient Management", "Billing Integration", "Advanced Doppler API"],
                btn: "Contact Sales", btnPrimary: false, btnColor: "#2d8ab8",
              },
            ].map((product) => (
              <div key={product.title} className="bg-white rounded-3xl p-10 drop-shadow-[0px_5px_7px_rgba(0,0,0,0.1)]">
                <div className="mb-6">
                  <span
                    className="text-[10px] font-bold uppercase tracking-[1px] px-3 py-1 rounded-sm"
                    style={{ background: product.badgeBg, color: product.badgeColor, ...manrope }}
                  >
                    {product.badge}
                  </span>
                </div>
                <h3 className="text-3xl font-extrabold text-[#181c1f] mb-4" style={manrope}>{product.title}</h3>
                <p className="text-[#456274] text-sm leading-relaxed mb-8" style={manrope}>{product.desc}</p>
                <ul className="space-y-4 mb-10">
                  {product.features.map(f => (
                    <li key={f} className="flex items-center gap-3">
                      {/* <Check size={20} color="#2d8ab8" className="shrink-0" /> */}
                      <img src={HomeIcons["icon10"]} alt={f} className="w-5 h-5" />
                      <span className="text-sm font-medium text-[#181c1f]" style={manrope}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setPage("products")}
                  className="w-full py-[18px] rounded-xl text-xs font-bold uppercase tracking-[1.2px] transition-colors"
                  style={{
                    ...manrope,
                    background: product.btnPrimary ? product.btnColor : "transparent",
                    color: product.btnPrimary ? "white" : product.btnColor,
                    border: product.btnPrimary ? "none" : `2px solid ${product.btnColor}`,
                  }}
                >
                  {product.btn}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why DiabSense Wins ── */}
      <section className="py-24 bg-[#f3f4f6]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#181c1f]" style={manrope}>Why DiabSense Wins</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Full Foot Scan Technology", desc: "Complete plantar surface coverage with medical-grade thermal precision, not spot checks.", accent: "#2d8ab8" },
              { title: "Thermal + Visual", desc: "Dual-spectrum imaging for comprehensive tissue assessment beyond the visible spectrum.", accent: "#b02f00" },
              { title: "Daily Monitoring", desc: "Continuous daily scans catch developing conditions that episodic check-ups consistently miss.", accent: "#003d9b" },
              { title: "Clinical Integration", desc: "Seamless EHR integration with automated clinical alerts to specialist teams.", accent: "#2d8ab8" },
              { title: "AI Validated Engine", desc: "Trained on thousands of clinical cases with 99.9% uptime SLA for medical-grade reliability.", accent: "#003d9b" },
              { title: "Patient Empowerment", desc: "Simple 30-second daily scans with immediate feedback and clinical support on demand.", accent: "#b02f00" },
            ].map(f => (
              <div key={f.title} className="bg-white rounded-2xl p-8">
                <div className="w-2 h-2 rounded-full mb-4" style={{ background: f.accent }} />
                <h4 className="font-bold text-[#181c1f] text-lg mb-3" style={manrope}>{f.title}</h4>
                <p className="text-[#456274] text-sm leading-relaxed" style={inter}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Development Roadmap ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#2d8ab8] text-xs font-bold uppercase tracking-[5px] mb-4" style={manrope}>Development</p>
            <h2 className="text-4xl font-extrabold text-[#181c1f] tracking-tight" style={manrope}>Development Roadmap</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { period: "2022–2023", title: "Clinical Prototyping", items: ["Thermal prototype dev", "Clinical partner onboarding", "IRB approvals"] },
              { period: "2024–2025", title: "Expanded Pilot", items: ["Multi-site validation", "FDA Pre-Submission", "ISO 13485 Cert."] },
              { period: "2025", title: "FootScan Pro Launch", items: ["Full FDA 510(k)", "US market rollout", "Expanded distribution"] },
              { period: "2026+", title: "Global Deployment", items: ["EU MDR compliance", "Asia-Pacific expansion", "Government contracts"] },
            ].map((r, i) => (
              <div key={i}>
                <p className="text-[#2d8ab8] text-xs font-bold mb-1" style={inter}>{r.period}</p>
                <h4 className="font-bold text-[#181c1f] text-base mb-4" style={manrope}>{r.title}</h4>
                <ul className="space-y-2">
                  {r.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#456274]" style={inter}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2d8ab8] mt-1.5 shrink-0 block" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="bg-[#2d8ab8] rounded-[40px] p-16 lg:p-24 text-center overflow-hidden relative">
            {/* <img src={imgHomeHeroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" /> */}
            <div className="relative">
              <p className="text-white/60 text-xs font-bold uppercase tracking-[5px] mb-4" style={manrope}>Prevention</p>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-8" style={manrope}>
                Ready to prevent the next amputation?
              </h2>
              <p className="text-white text-md font-medium mb-8" style={manrope}>Join the hundreds of healthcare providers and thousands of patients securing their future with DiabSense AI.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => setPage("contact")} className="cursor-pointer bg-white text-[#2d8ab8] px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-wide hover:bg-white/90 transition-colors" style={manrope}>
                  Book Your FootScan Demo
                </button>
                <button onClick={() => setPage("contact")} className="cursor-pointer border-2 border-white text-white px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-wide hover:bg-white/10 transition-colors" style={manrope}>
                  Partner With Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
