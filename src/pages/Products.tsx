import { Check, ArrowRight } from "lucide-react";
import imgProductsHero from "@/assets/images/products/products-hero.png";
import imgFootScanPro from "@/assets/images/products/FootScan Pro.jpg";
import imgFootScanLite from "@/assets/images/products/FootScan Lite.jpg";
import imgFootScanHome from "@/assets/images/products/FootScan Home.jpg";
import imgProductsClinic from "@/assets/images/products/products-clinic.png";
import { inter, manrope, erasBook } from "@/utils/fonts";
import { ProductPageIcons } from "@/assets/icons/index";

// Hashed PNG mapping:
// 1dec618a58dcc3d38486877feed068a024ec0034.png -> lite-product.png
// bd4f80d8a16de49861ed47b56c06f9340eb99943.png -> home-product.png
// a4ff6aa03e5b432936928e331c127db51078b010.png -> pro-product.png
// a6e243e4fe333a44e3bc1c88f3fc91ce9d6ba136.png -> products-hero.png
// 49d38c9d8a59131aa9a9ee1b45e0c2a0b035b87d.png -> products-sensor.png
// 5ae834337f9e29a99ddc1268454c87023e66e355.png -> products-foot-scan.png
// 20b5c982f99a9092441c827dc627612c690b5e93.png -> products-device.png
// 2b641eae8d2067ec754837805b634aad1dcec605.png -> products-clinic.png

export default function Products() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative bg-[#101417] min-h-[calc(100vh-5rem)] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img src={imgProductsHero} alt="" className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00333d] via-[rgba(16,20,23,0.6)] to-[rgba(0,99,137,0.4)]" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 py-24 w-full">
          <div className="max-w-2xl">
            <h1 className="tracking-tight mb-6" style={{ ...inter, fontSize: "clamp(3rem,7vw,4.5rem)", lineHeight: 1 }}>
              <span className="text-[#81cfff] block" style={erasBook}>DiabSense</span>
              <span className="font-extrabold text-white block">Ecosystem</span>
            </h1>
            <p className="text-[#adcae0] text-lg lg:text-xl leading-relaxed mb-8" style={inter}>
              A complete diabetic foot monitoring platform designed for wellness users, patients, and healthcare providers. From preventive care to clinical diagnostics.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="bg-[#181c1f] border border-[rgba(63,72,78,0.3)] rounded px-4 py-2 flex items-center gap-2">
                <img src={ProductPageIcons.icon1} alt="" className="w-5 h-5" />
                <span className="text-[#81cfff] text-sm font-semibold   tracking-[1.4px] uppercase" style={manrope}>Cloud AI Integration</span>
              </div>
              <div className="bg-[#181c1f] border border-[rgba(63,72,78,0.3)] rounded px-4 py-2 flex items-center gap-2">
                <img src={ProductPageIcons.icon2} alt="" className="w-5 h-5" />
                <span className="text-[#81cfff] text-sm font-semibold tracking-[1.4px] uppercase" style={manrope}>Ecosystem Connect</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Product Ecosystem Cards ── */}
      <section className="bg-[#eff4ff] py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#0b1c30] mb-4" style={inter}>Precision at Every Scale.</h2>
            <p className="text-[#434654] text-base max-w-xl mx-auto" style={inter}>
              Choose the solution that matches your care delivery model, from individual monitoring to full enterprise clinical oversight.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Lite */}
            <div className="bg-white rounded-xl shadow-[0px_4px_12px_0px_rgba(0,43,107,0.06)] overflow-hidden flex flex-col">
              <div className="h-85 overflow-hidden">
                <img src={imgFootScanLite} alt="FootScan Lite" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <p className="text-[#006b5f] text-xs font-semibold tracking-[1.2px] mb-2" style={inter}>MOBILE FIRST</p>
                <h3 className="text-2xl font-semibold text-[#0b1c30] mb-3" style={inter}>FootScan Lite</h3>
                <p className="text-[#434654] text-sm leading-relaxed mb-4" style={inter}>Individual monitoring with AI-driven meal logs and basic trend analysis. Perfect for early-stage management.</p>
                <ul className="space-y-3 mb-6 flex-1">
                  {["Manual Glucose Logs", "AI Nutritional Scanning"].map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#0b1c30]" style={inter}>
                      <Check size={12} color="#006b5f" className="shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 border-2 border-[#006b5f] text-[#006b5f] rounded-lg font-semibold text-base hover:bg-[#006b5f] hover:text-white transition-colors" style={inter}>Get Started</button>
              </div>
            </div>

            {/* Home – featured */}
            <div className="bg-white rounded-xl border-2 border-[#003d9b] shadow-[0px_4px_12px_0px_rgba(0,43,107,0.06)] overflow-hidden flex flex-col">
              <div className="h-85 overflow-hidden relative">
                <img src={imgFootScanHome} alt="FootScan Home" className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-[#003d9b] text-white text-[10px] font-bold px-3 py-1 rounded-full" style={inter}>BEST FOR PATIENTS</div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <p className="text-[#003d9b] text-xs font-semibold tracking-[1.2px] mb-2" style={inter}>CONTINUOUS CARE</p>
                <h3 className="text-2xl font-semibold text-[#0b1c30] mb-3" style={inter}>FootScan Home</h3>
                <p className="text-[#434654] text-sm leading-relaxed mb-4" style={inter}>Integrated hardware CGM paired with our full predictive suite. Real-time alerts for the patient and their loved ones.</p>
                <ul className="space-y-3 mb-6 flex-1">
                  {["24/7 Continuous Monitoring", "Predictive Hypo-Alerts", "Family Share Ecosystem"].map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#0b1c30]" style={inter}>
                      <Check size={12} color="#003d9b" className="shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 bg-[#003d9b] text-white rounded-lg font-semibold text-base hover:bg-[#00296d] transition-colors" style={inter}>Select Home</button>
              </div>
            </div>

            {/* Pro */}
            <div className="bg-white rounded-xl shadow-[0px_4px_12px_0px_rgba(0,43,107,0.06)] overflow-hidden flex flex-col">
              <div className="h-85 overflow-hidden">
                <img src={imgFootScanPro} alt="FootScan Pro" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <p className="text-[#404445] text-xs font-semibold tracking-[1.2px] mb-2" style={inter}>CLINICAL SUITE</p>
                <h3 className="text-2xl font-semibold text-[#0b1c30] mb-3" style={inter}>FootScan Pro</h3>
                <p className="text-[#434654] text-sm leading-relaxed mb-4" style={inter}>Enterprise-grade RPM portal for clinics. Manage thousands of patients with automated risk stratification and billing.</p>
                <ul className="space-y-3 mb-6 flex-1">
                  {["Clinical Portal Integration", "Automated CPT Billing"].map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#0b1c30]" style={inter}>
                      <Check size={12} color="#404445" className="shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 border-2 border-[#404445] text-[#404445] rounded-lg font-semibold text-base hover:bg-[#404445] hover:text-white transition-colors" style={inter}>Request Enterprise</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FootScan Lite detail ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-[#006389] text-xs font-extrabold uppercase tracking-[1.2px] mb-2" style={manrope}>Wellness / Consumer</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#181c1f] mb-4" style={manrope}>FootScan Lite</h2>
              <p className="text-[#3f484e] text-base leading-relaxed mb-8" style={manrope}>
                Lightweight preventive care for daily wellness enthusiasts. Real-time monitoring and basic thermal health tracking.
              </p>
              <ul className="space-y-4 mb-8">
                {["Smart Wellness Scanner", "Thermal Basics", "Preventive Mobile Alerts"].map(f => (
                  <li key={f} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#006389]/10 text-[#006389] flex items-center justify-center">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="text-sm font-semibold text-[#181c1f]" style={manrope}>{f}</span>
                  </li>
                ))}
              </ul>
              <div>
                <button className="group inline-flex items-center gap-2 border border-[#006389] text-[#006389] hover:bg-[#006389] hover:text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-sm hover:shadow-md" style={manrope}>
                  Explore Lite
                  <ArrowRight size={16} className="transform transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
            <div className="relative w-full flex justify-center items-center py-10 lg:py-16 bg-gradient-to-br from-slate-50/80 to-slate-100/40 rounded-3xl border border-slate-100 shadow-sm overflow-hidden group">
              <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-[#006389]/5 blur-3xl transition-opacity group-hover:opacity-80" />
              <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-[#006389]/5 blur-3xl transition-opacity group-hover:opacity-80" />
              <div className="relative z-10 w-11/12 max-w-[460px] aspect-square rounded-2xl overflow-hidden shadow-lg bg-white border border-slate-200/50 p-3 transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-xl">
                <img
                  src={imgFootScanLite}
                  alt="FootScan Lite sensor"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FootScan Home detail ── */}
      <section className="py-24 bg-[#7ba9ca40]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative w-full flex justify-center items-center py-10 lg:py-16 bg-gradient-to-br from-slate-50/80 to-slate-100/40 rounded-3xl border border-slate-100 shadow-sm overflow-hidden group">
                <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-[#003d9b]/5 blur-3xl transition-opacity group-hover:opacity-80" />
                <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-[#003d9b]/5 blur-3xl transition-opacity group-hover:opacity-80" />
                <div className="relative z-10 w-11/12 max-w-[460px] aspect-square rounded-2xl overflow-hidden shadow-lg bg-white border border-slate-200/50 p-3 transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-xl">
                  <img
                    src={imgFootScanHome}
                    alt="FootScan Home"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-[#003d9b] text-xs font-extrabold uppercase tracking-[1.2px] mb-2" style={manrope}>At-Home / Patient</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#181c1f] mb-4" style={manrope}>FootScan Home</h2>
              <p className="text-[#3f484e] text-base leading-relaxed mb-8" style={manrope}>
                Our flagship at-home clinical device for remote patient monitoring with direct clinical oversight and AI diagnostic reporting.
              </p>
              <ul className="space-y-4 mb-8">
                {["Smart Daily Scanner", "Predictive Analysis", "Doctor Alert System"].map(f => (
                  <li key={f} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#003d9b]/10 text-[#003d9b] flex items-center justify-center">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="text-sm font-semibold text-[#181c1f]" style={manrope}>{f}</span>
                  </li>
                ))}
              </ul>
              <div>
                <button className="group inline-flex items-center gap-2 border border-[#003d9b] text-[#003d9b] hover:bg-[#003d9b] hover:text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-sm hover:shadow-md" style={manrope}>
                  Explore Home
                  <ArrowRight size={16} className="transform transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FootScan Pro detail ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-[#404445] text-xs font-extrabold uppercase tracking-[1.2px] mb-2" style={manrope}>Institutional / Clinical</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#181c1f] mb-4" style={manrope}>FootScan Pro</h2>
              <p className="text-[#3f484e] text-base leading-relaxed mb-8" style={manrope}>
                Advanced diagnostic kiosk for clinics and diabetic centers. High-volume patient screening with full EHR integration.
              </p>
              <ul className="space-y-4 mb-8">
                {["Multi-Patient Dashboard", "Billing Automation", "Advanced Doppler Analysis"].map(f => (
                  <li key={f} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#404445]/10 text-[#404445] flex items-center justify-center">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="text-sm font-semibold text-[#181c1f]" style={manrope}>{f}</span>
                  </li>
                ))}
              </ul>
              <div>
                <button className="group inline-flex items-center gap-2 border border-[#404445] text-[#404445] hover:bg-[#404445] hover:text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-sm hover:shadow-md" style={manrope}>
                  Explore Pro
                  <ArrowRight size={16} className="transform transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
            <div className="relative w-full flex justify-center items-center py-10 lg:py-16 bg-gradient-to-br from-slate-50/80 to-slate-100/40 rounded-3xl border border-slate-100 shadow-sm overflow-hidden group">
              <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-[#404445]/5 blur-3xl transition-opacity group-hover:opacity-80" />
              <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-[#404445]/5 blur-3xl transition-opacity group-hover:opacity-80" />
              <div className="relative z-10 w-11/12 max-w-[460px] aspect-square rounded-2xl overflow-hidden shadow-lg bg-white border border-slate-200/50 p-3 transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-xl">
                <img
                  src={imgFootScanPro}
                  alt="FootScan Pro"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Surgical Precision ── */}
      <section className="py-24 bg-[#0b1c30]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={manrope}>Surgical Precision in Every Pixel.</h2>
              <p className="text-[#81cfff] text-5xl font-extrabold mb-4" style={manrope}>23x</p>
              <p className="text-[#adcae0] text-lg leading-relaxed mb-6" style={inter}>
                Higher resolution than standard thermal devices. DiabSense captures sub-millimeter temperature variations critical for early wound prediction.
              </p>
              <ul className="space-y-3">
                {["Thermal + Visual Fusion", "Clinical-Grade Resolution", "Real-Time Analysis"].map(f => (
                  <li key={f} className="flex items-center gap-3 text-[#adcae0] text-sm" style={inter}>
                    <Check size={16} color="#81cfff" className="shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img src={imgProductsClinic} alt="Precision Scanning" className="w-full rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Choose Your Plan ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#181c1f]" style={manrope}>Choose Your Plan</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px]">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-8 text-left text-sm font-semibold text-[#181c1f]" style={manrope}>Feature</th>
                  <th className="py-4 px-6 text-sm font-semibold text-[#006389] text-center" style={manrope}>Lite</th>
                  <th className="py-4 px-6 text-sm font-semibold text-[#003d9b] text-center" style={manrope}>Home</th>
                  <th className="py-4 px-6 text-sm font-semibold text-[#404445] text-center" style={manrope}>Pro</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Thermal Scanning", "Basic", "Advanced", "Clinical Grade"],
                  ["AI Analysis", "—", "Predictive", "Full Suite"],
                  ["Cloud Sync", "✓", "✓", "✓"],
                  ["Clinical Alerts", "—", "✓", "✓"],
                  ["Multi-Patient", "—", "—", "✓"],
                  ["EHR Integration", "—", "—", "✓"],
                ].map(([feat, lite, home, pro]) => (
                  <tr key={feat as string} className="border-b border-gray-100">
                    <td className="py-4 pr-8 text-sm font-medium text-[#181c1f]" style={manrope}>{feat}</td>
                    <td className="py-4 px-6 text-sm text-center text-[#006389]" style={inter}>{lite}</td>
                    <td className="py-4 px-6 text-sm text-center text-[#003d9b]" style={inter}>{home}</td>
                    <td className="py-4 px-6 text-sm text-center text-[#404445]" style={inter}>{pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Unified Care Journey ── */}
      <section className="bg-[#f1f4f8] py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#181c1f] mb-4" style={manrope}>Unified Care Journey</h2>
            <p className="text-[#3f484e] text-base" style={manrope}>Data continuity from prevention to surgery.</p>
          </div>
          <div className="relative flex flex-col md:flex-row items-stretch gap-12 md:gap-10">
            <div className="absolute top-[50%] left-0 right-0 h-px bg-[rgba(191,200,207,0.3)] -translate-y-1/2 hidden md:block" />
            {[
              { n: "1", bg: "#006389", title: "Prevention", desc: "Lite devices monitor daily habits and flag early temperature shifts." },
              { n: "2", bg: "#805200", title: "Monitoring", desc: "Home devices track progression and alert clinical teams automatically." },
              { n: "3", bg: "#101417", title: "Intervention", desc: "Pro devices guide clinicians in surgical and treatment decision making." },
            ].map(stage => (
              <div key={stage.n} className="flex-1 bg-white rounded-sm p-8 pt-14 relative border border-[rgba(191,200,207,0.2)]">
                <div
                  className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl flex items-center justify-center text-white text-base shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]"
                  style={{ background: stage.bg, ...manrope }}
                >
                  {stage.n}
                </div>
                <h4 className="text-[#181c1f] text-base font-bold text-center mb-2" style={manrope}>{stage.title}</h4>
                <p className="text-[#3f484e] text-sm text-center leading-relaxed" style={manrope}>{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-[#f1f4f8]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="bg-[#2d8ab8] rounded-[40px] p-16 lg:p-24 text-center">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-8" style={manrope}>
              Ready to Redefine Diabetic Care?
            </h2>
            <button className="bg-white text-[#2d8ab8] px-10 py-3 rounded-xl text-xs font-bold uppercase tracking-wide hover:bg-white/90 transition-colors" style={manrope}>
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
