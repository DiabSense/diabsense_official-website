import { Check } from "lucide-react";
import imgClinicalEnvironment from "@/assets/images/solution/clinical-environment.png";
import imgSolutionTech from "@/assets/images/solution/solution-tech.png";
import imgSolutionCtaBg from "@/assets/images/solution/solution-cta-bg.png";
import { inter, manrope } from "@/utils/fonts";

// Hashed PNG mapping:
// c538c7933453f4f737931af6411409cb6499acff.png -> clinical-environment.png
// 35e4b720a513d0ee1254b3dac119815d5d9cf050.png -> solution-tech.png
// 5320c7e3b25f981df63117206bf810da203bc6a7.png -> solution-cta-bg.png

export default function Solution() {
  return (
    <div>
      {/* ── The Problem Hero ── */}
      <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden flex items-center justify-center py-16 lg:py-0">
        <div className="absolute inset-0">
          <img src={imgClinicalEnvironment} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[rgba(0,41,109,0.4)] mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(45,138,184,0.6)] via-[rgba(45,138,184,0.4)] to-[rgba(45,138,184,0.2)]" />
        </div>
        <div className="relative text-center px-6 lg:px-8 max-w-3xl mx-auto w-full">
          <p className="text-[#91afff] text-sm tracking-[3.2px] mb-8" style={manrope}>THE PROBLEM</p>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-8" style={manrope}>
            Reactive diabetic care is failing patients and providers alike.
          </h1>
          <p className="text-[rgba(218,226,255,0.9)] text-lg lg:text-xl leading-relaxed mb-10" style={inter}>
            Current monitoring protocols rely on episodic snapshots that miss critical physiological shifts, leading to preventable complications and escalating clinical costs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              { icon: "#fd6537", title: "Fragmented Data", desc: "Information is siloed between home and clinic, creating dangerous visibility gaps in patient health." },
              { icon: "#fd6537", title: "High Complications", desc: "Lack of real-time trend analysis leads to late-stage interventions and lower clinical outcomes." },
            ].map(card => (
              <div key={card.title} className="backdrop-blur-[10px] bg-white/90 rounded-xl p-6">
                <div className="w-5 h-5 rounded-sm mb-4" style={{ background: card.icon }} />
                <h4 className="text-[#00296d] text-base mb-3" style={manrope}>{card.title}</h4>
                <p className="text-[#434652] text-sm leading-relaxed" style={inter}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ecosystem Diagram ── */}
      <section className="bg-[#f8f9fb] py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#2d8ab8] text-xs font-bold uppercase tracking-[5px] mb-4" style={manrope}>The DiabSense Ecosystem</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-black" style={manrope}>A Closed-Loop Continuum of Care</h2>
          </div>
          <div className="flex flex-col items-center gap-12 max-w-lg mx-auto relative">
            <div className="absolute left-[calc(50%-2px)] top-0 bottom-0 w-1 bg-gray-200/60 opacity-20 rounded-full" />
            {[
              { color: "#003d9b", title: "Continuous Sensing", desc: "Medical-grade biosensors capture high-fidelity physiological markers 24/7 without patient intervention." },
              { color: "#fd6537", title: "AI Intelligence", desc: "Proprietary clinical algorithms process raw data into actionable insights, identifying patterns before they become crises." },
              { color: "#003d9b", title: "Provider Portal", desc: "Clinical teams receive prioritized alerts and comprehensive trend visualizations for precise decision support." },
            ].map((node, i) => (
              <div key={i} className="flex flex-col items-center relative z-10 w-full">
                <div className="w-16 h-16 rounded-full flex items-center justify-center border-4 border-white shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] mb-4" style={{ background: node.color }}>
                  <div className="w-5 h-5 bg-white rounded-sm opacity-80" />
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-[0px_1px_1px_rgba(0,0,0,0.05)] border border-[rgba(196,198,212,0.3)] w-full text-center">
                  <h4 className="text-[#00296d] text-base mb-3" style={manrope}>{node.title}</h4>
                  <p className="text-[#434652] text-base leading-relaxed" style={inter}>{node.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Technology ── */}
      <section className="bg-[#f8f9fb] py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00296d] mb-4" style={manrope}>Precision Bio-Sensing Architecture</h2>
            <p className="text-[#747783] text-lg lg:text-xl max-w-2xl mx-auto" style={inter}>
              Our proprietary sensing layer integrates molecular biology with edge-computing to deliver lab-grade accuracy in a wearable form factor.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-8">
            {/* Main tech card */}
            <div className="col-span-12 lg:col-span-8 bg-[#00296d] rounded-2xl overflow-hidden relative min-h-[400px] flex flex-col justify-end shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1)]">
              <img src={imgSolutionTech} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
              <div className="relative p-10 lg:p-12">
                <div className="inline-block bg-[#003d9b] text-[#91afff] text-[11px] font-semibold tracking-[2.2px] px-3 py-1 rounded mb-4">ENGINEERING PEAK</div>
                <h3 className="text-4xl lg:text-6xl font-extrabold text-white tracking-tight mb-4" style={manrope}>Quantum-Drift Sensor™</h3>
                <p className="text-[#dae2ff] text-lg lg:text-xl leading-relaxed max-w-xl" style={inter}>
                  Zero-calibration technology that measures interstitial fluid glucose at the molecular level with 99.8% clinical correlation.
                </p>
              </div>
            </div>

            {/* Side stats */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
              {[
                { bg: "#b2ecfd", title: "Neural Link", desc: "Instant synchronization with our HIPAA-compliant cloud for real-time provider alerts." },
                { bg: "#ffdbd1", title: "30-Day Cycle", desc: "Ultra-low power optimization allowing for a full month of monitoring on a single charge." },
              ].map(card => (
                <div key={card.title} className="backdrop-blur-[10px] bg-white/70 rounded-2xl border border-white/40 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] p-8">
                  <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ background: card.bg }}>
                    <div className="w-4 h-4 bg-[#003d9b]/50 rounded-sm" />
                  </div>
                  <h4 className="text-[#00296d] text-2xl font-bold mb-3" style={manrope}>{card.title}</h4>
                  <p className="text-[#747783] leading-relaxed" style={inter}>{card.desc}</p>
                </div>
              ))}
            </div>

            {/* Bottom feature tiles */}
            {[
              { value: "10ms", title: "Latency Floor", desc: "Faster data processing for immediate hypoglycemic rescue actions." },
              { value: "AES-256", title: "Military Encryption", desc: "End-to-end data protection for patient privacy and provider security." },
              { value: "IP68", title: "Submersible", desc: "Continuous monitoring during swimming, showering, and active lifestyle." },
            ].map(stat => (
              <div key={stat.value} className="col-span-12 md:col-span-4 backdrop-blur-[10px] bg-white/70 rounded-2xl border border-white/40 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] p-8">
                <p className="text-[#00296d] text-3xl font-extrabold mb-2" style={manrope}>{stat.value}</p>
                <h4 className="text-[#191c1e] text-lg font-semibold mb-2" style={inter}>{stat.title}</h4>
                <p className="text-[#747783] text-sm leading-relaxed" style={inter}>{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Strategic Commercialization ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00296d] mb-4" style={manrope}>Strategic Commercialization</h2>
            <p className="text-[#747783] text-lg max-w-xl" style={inter}>
              A disciplined approach to market penetration, clinical validation, and global scaling.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { phase: "PHASE 01", color: "#00296d", title: "Clinical Trials", desc: "Multi-center FDA pivotal studies across 12 leading endocrinology institutions.", status: "Completed Q4 2023" },
              { phase: "PHASE 02", color: "#003d9b", title: "FDA Submission", desc: "Premarket Approval (PMA) pathway for Class III medical device designation.", status: "In Progress" },
              { phase: "PHASE 03", color: "#456274", title: "Provider Pilot", desc: "Nationwide rollout with 50 flagship clinic partnerships and RPM billing integration.", status: "2025 Target" },
              { phase: "PHASE 04", color: "#456274", title: "Global Launch", desc: "CE Mark certification for EU expansion and strategic Asia-Pacific distributor network.", status: "2026 Planned" },
            ].map(p => (
              <div key={p.phase} className="bg-white rounded-2xl border-l-4 pl-8 pr-6 py-8 shadow-[0px_1px_1px_rgba(0,0,0,0.05)]" style={{ borderColor: p.color }}>
                <p className="text-[11px] font-semibold tracking-[2.2px] mb-3" style={{ color: p.color, ...inter }}>{p.phase}</p>
                <h4 className="text-[#00296d] text-2xl font-bold mb-3" style={manrope}>{p.title}</h4>
                <p className="text-[#747783] text-sm leading-relaxed mb-4" style={inter}>{p.desc}</p>
                <div className="flex items-center gap-2">
                  <Check size={16} style={{ color: p.color }} />
                  <span className="text-sm font-semibold" style={{ color: p.color, ...inter }}>{p.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why DiabSense Wins Comparison ── */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#2d8ab8] text-xs font-bold uppercase tracking-[5px] mb-4" style={manrope}>Competitive Analysis</p>
            <h2 className="text-4xl font-bold text-[#181c1f]" style={manrope}>Why DiabSense Wins</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-8 text-left text-sm font-semibold text-[#181c1f]" style={manrope}>Capability</th>
                  <th className="py-4 px-4 text-left text-sm font-semibold text-[#456274]" style={manrope}>Traditional CGM</th>
                  <th className="py-4 px-4 text-left text-sm font-semibold text-[#2d8ab8]" style={manrope}>DiabSense</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Monitoring Frequency", "Episodic / Manual", "Continuous 24/7"],
                  ["Actionability", "Alert Management", "AI Risk Prediction"],
                  ["Predictive Capacity", "Trend Management", "Risk Forecasting"],
                  ["Point Compliance", "High Patient Burden", "30-Second Scan"],
                  ["Clinical Access", "Portal Viewing Only", "Direct Clinical Alerts"],
                ].map(([cap, trad, diab]) => (
                  <tr key={cap as string} className="border-b border-gray-100">
                    <td className="py-4 pr-8 text-sm font-medium text-[#181c1f]" style={manrope}>{cap}</td>
                    <td className="py-4 px-4 text-sm text-[#456274]" style={inter}>{trad}</td>
                    <td className="py-4 px-4 text-sm font-semibold text-[#003d9b]" style={inter}>{diab}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="bg-[#2d8ab8] rounded-[40px] p-16 lg:p-24 text-center overflow-hidden relative">
            <img src={imgSolutionCtaBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
            <div className="relative">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-8" style={manrope}>
                Ready to define the future of clinical intelligence?
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-[#2d8ab8] px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-wide hover:bg-white/90 transition-colors" style={manrope}>
                  Partner With Us
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-wide hover:bg-white/10 transition-colors" style={manrope}>
                  View Research Data
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
