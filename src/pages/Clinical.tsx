import { ArrowRight, Check } from "lucide-react";
import imgHospitalSetting from "@/assets/images/clinical/hospital-setting.png";
import imgAnalyticsDashboard from "@/assets/images/clinical/analytics-dashboard.png";
import imgPatientInteraction from "@/assets/images/clinical/patient-interaction.png";
import { inter, manrope } from "@/utils/fonts";
import { ClinicalPageIcons } from "@/assets/icons/clinical_page";

// Hashed PNG mapping:
// 05488866d06a06251c292cd1bba351b89b23b261.png -> hospital-setting.png
// 32c923dbab90fbc4eb29684526595024c2ad1548.png -> analytics-dashboard.png
// 6544747b2a1d8b58840d82525282635fb1acf61b.png -> patient-interaction.png

export default function Clinical() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#2d8ab8] text-xs font-bold uppercase tracking-[5px] mb-4" style={manrope}>Clinical Evidence Standards v1.0</p>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-[#181c1f] leading-tight mb-6" style={manrope}>
                Clinically Validated AI for Early Detection of Diabetic Foot Complications
              </h1>
              <p className="text-[#434654] text-lg leading-relaxed mb-8" style={inter}>
                Backed by real-world patient studies, hospital-grade imaging, and medical professionals' endorsement for preventable complications.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "600+", label: "Patient Studies" },
                  { value: "M45", label: "Data Points Analyzed" },
                  { value: "84%", label: "Accuracy Rate" },
                  { value: "Pre-Symptomatic", label: "Detection Stage" },
                ].map(s => (
                  <div key={s.label}>
                    <p className="text-2xl font-extrabold text-[#003d9b] mb-1" style={manrope}>{s.value}</p>
                    <p className="text-sm text-[#456274]" style={manrope}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src={imgHospitalSetting} alt="Clinical Setting" className="w-full h-72 lg:h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Verification Engine ── */}
      <section className="bg-[#f3f4f6] py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#2d8ab8] text-xs font-bold uppercase tracking-[5px] mb-4" style={manrope}>Clinical Evidence Standards v1.0</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#181c1f] mb-4" style={manrope}>Precision Diabetic Care Verification Engine</h2>
            <p className="text-[#434654] text-lg max-w-2xl mx-auto" style={inter}>
              Trained on diverse clinical outcomes data that rigorously tests innovation. Ensuring every metric carries the highest standard of patient safety.
            </p>
          </div>
          <div className="flex justify-center gap-12 lg:gap-20 flex-wrap">
            {[
              { value: "8.2%", label: "Avg. Weekly Ulcer Rate", sub: "Below Baseline" },
              { value: "12.5K", label: "Validated Patients", sub: "Clinical Trials" },
              { value: "99.9%", label: "True Positive Rate", sub: "Uptime SLA" },
            ].map(s => (
              <div key={s.label} className="text-center">
                <p className="text-4xl font-extrabold text-[#003d9b] mb-1" style={manrope}>{s.value}</p>
                <p className="text-sm font-medium text-[#181c1f]" style={manrope}>{s.label}</p>
                <p className="text-xs text-[#456274]" style={manrope}>{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Validation Pillars ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-[#181c1f]" style={manrope}>Validation Pillars</h2>
            <button className="text-sm text-[#2d8ab8] font-semibold flex items-center gap-2 hover:gap-3 transition-all" style={inter}>
              View All Research <ArrowRight size={16} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: ClinicalPageIcons.icon7, title: "Bio-Signal Analysis", desc: "Proprietary algorithm suite that processes over 200 biomarkers per scan to deliver sub-millimeter lesion detection.", status: "STUDY", color: "#003d9b" },
              { icon: ClinicalPageIcons.icon8, title: "HIPAA Secured Lane", desc: "Every data transmission is encrypted with AES-256, with HIPAA-compliant infrastructure in all 50 US states.", status: "CERTIFIED", color: "#003d9b" },
              { icon: ClinicalPageIcons.icon9, title: "EHR Integration", desc: "Native HL7 FHIR compatibility ensures smooth data flow into patients' existing electronic health records.", status: "PUBLISHED", color: "#456274" },
              { icon: ClinicalPageIcons.icon10, title: "Cohort Analytics", desc: "Cross-institutional data pooling enables population-level insights while preserving individual patient privacy.", status: "ONGOING", color: "#456274" },
            ].map(p => (
              <div key={p.title} className="border border-gray-200 rounded-2xl p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-[#003d9b]/10 rounded-xl flex items-center justify-center">
                    <img src={p.icon} alt="" className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded border" style={{ color: p.color, borderColor: p.color, ...inter }}>{p.status}</span>
                </div>
                <h4 className="text-xl font-bold text-[#181c1f] mb-3" style={manrope}>{p.title}</h4>
                <p className="text-[#456274] text-sm leading-relaxed" style={inter}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Empowering Clinical Confidence ── */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            <div className="relative rounded-[32px] bg-gradient-to-b from-[#0b274a] to-[#041427] p-8 pb-10 shadow-[0_20px_50px_rgba(8,112,184,0.15)] border border-white/5 overflow-hidden flex flex-col justify-between h-full">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-lg mb-6 flex-1 min-h-[240px]">
                <img
                  src={imgAnalyticsDashboard}
                  alt="Analytics Dashboard"
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b274a] via-transparent to-transparent" />
              </div>
              <div>
                <h3 className="text-white text-2xl font-bold mb-2" style={manrope}>Real-time Visualization</h3>
                <p className="text-white/75 text-sm leading-relaxed" style={inter}>
                  Every data point is tracked, verified, and visualized for clinical stakeholders.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#181c1f] mb-6" style={manrope}>Empowering Clinical Confidence</h2>
              <p className="text-[#434654] text-lg leading-relaxed mb-8" style={inter}>
                Our platform bridge the gap between hardware engineering and clinical application. By providing a transparent, auditable trail of evidence, we accelerate the path to market for breakthrough diabetic technologies.
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#2d8ab8] flex items-center justify-center text-[#2d8ab8]">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#181c1f] text-base" style={manrope}>Automated Evidence Generation</h4>
                    <p className="text-[#5b6170] text-sm mt-1" style={inter}>
                      Reduce regulatory submission timelines by up to 40%.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#2d8ab8] flex items-center justify-center text-[#2d8ab8]">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#181c1f] text-base" style={manrope}>Site Performance Monitoring</h4>
                    <p className="text-[#5b6170] text-sm mt-1" style={inter}>
                      Monitor site-level variance and protocol compliance in real-time.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <button className="bg-[#2d8ab8] hover:bg-[#24739b] text-white px-6 py-3.5 rounded-xl font-bold text-sm inline-flex items-center gap-2 transition-colors shadow-sm" style={manrope}>
                  Schedule a Methodology Deep Dive <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Real-Time Metrics ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#2d8ab8] text-xs font-bold uppercase tracking-[5px] mb-4" style={manrope}>Explore Your Brief</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#181c1f] mb-6" style={manrope}>
                Implementing Real-Time Metrics in Pediatric Care
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  "22% additional ulcer reduction verified across 3 clinical cohorts",
                  "42% additional amputation screening accuracy",
                  "1.9x faster clinical data integrity",
                ].map(f => (
                  <li key={f} className="flex items-start gap-3 text-[#434654] text-sm" style={inter}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2d8ab8] mt-1.5 shrink-0 block" /> {f}
                  </li>
                ))}
              </ul>
              <button className="bg-[#003d9b] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wide hover:bg-[#00296d] transition-colors" style={manrope}>
                Explore Full Report
              </button>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src={imgPatientInteraction} alt="Patient Interaction" className="w-full h-72 lg:h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Clinical Deployment Roadmap ── */}
      <section className="py-24 bg-[#f3f4f6]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#181c1f]" style={manrope}>Clinical Deployment Roadmap</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { period: "2022–2023", title: "Clinical Prototyping", items: ["Pilot in 5 clinics", "IRB approvals", "First thermal dataset"] },
              { period: "2024–2025", title: "Expanded Pilot", items: ["12 hospital networks", "FDA Pre-Submission", "ISO 13485 Completion"] },
              { period: "2025", title: "FootScan Pro Launch", items: ["Full market rollout", "EHR integrations", "Expanded protocols"] },
              { period: "2026+", title: "Global Deployment", items: ["EU CE Mark", "APAC launch", "Government contracts"] },
            ].map((r, i) => (
              <div key={i}>
                <p className="text-[#2d8ab8] text-xs font-bold mb-1" style={inter}>{r.period}</p>
                <h4 className="font-bold text-[#181c1f] text-base mb-4" style={manrope}>{r.title}</h4>
                <ul className="space-y-2">
                  {r.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#456274]" style={inter}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2d8ab8] mt-1.5 shrink-0 block" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="bg-[#003d9b] rounded-[40px] p-16 lg:p-24 text-center">
            <p className="text-[#91afff] text-xs font-bold uppercase tracking-[5px] mb-4" style={manrope}>DiabSense Inc.</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4" style={manrope}>
              Advancing Diabetic Care Through Clinical Data Integrity
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto" style={inter}>
              Healthcare partners and clinical researchers are invited to submit for our limited methodology validation requests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#003d9b] px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-wide hover:bg-white/90 transition-colors" style={manrope}>
                Request Data Brief
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-wide hover:bg-white/10 transition-colors" style={manrope}>
                Partner With Institutions
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
