import { Check, ArrowRight, ChevronRight } from "lucide-react";
import imgAboutHero from "@/assets/images/about/about-hero.png";
import imgAboutWorldMap from "@/assets/images/about/about-world-map.png";
import imgTeam1 from "@/assets/images/about/team1.png";
import imgTeam2 from "@/assets/images/about/team2.png";
import imgTeam3 from "@/assets/images/about/team3.png";
import imgTeam4 from "@/assets/images/about/team4.png";
import { inter, manrope } from "@/utils/fonts";

// Hashed PNG mapping:
// f929a9517b5cf80a0cd78ee5ca9e66c3e3637f0c.png -> about-hero.png
// 8fdf433623ea480251b628354298ff2b5e7f887a.png -> about-world-map.png
// a80f8135f657088a96b3fd6e9d8edc5ddf0fb88d.png -> team1.png
// 638be62719997c44ba85864088af7fd7bc84a98c.png -> team2.png
// 5225a6a32bfc7b338962c31766a4b8977be81d47.png -> team3.png
// 88b2becccf35b6e6301c7b59106b15593c4c7720.png -> team4.png

export default function About() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#2d8ab8] text-xs font-bold uppercase tracking-[5px] mb-4" style={manrope}>Clinical Evidence Standards v1.0</p>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-[#181c1f] leading-tight mb-6" style={manrope}>
                Building the Future of Diabetic Foot Prevention
              </h1>
              <p className="text-[#434654] text-lg leading-relaxed mb-8" style={inter}>
                We are pioneering clinical experiences with advanced sensing technology to eliminate preventable amputations globally.
              </p>
              <div className="flex gap-12">
                <div>
                  <p className="text-3xl font-extrabold text-[#003d9b]" style={manrope}>700M+</p>
                  <p className="text-sm text-[#456274]" style={manrope}>Global Patients</p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-[#003d9b]" style={manrope}>80+</p>
                  <p className="text-sm text-[#456274]" style={manrope}>Health Studies</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src={imgAboutHero} alt="About DiabSense" className="w-full h-72 lg:h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Redefining Preventative Care ── */}
      <section className="py-24 bg-[#f3f4f6]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img src={imgAboutWorldMap} alt="Global reach" className="w-full rounded-2xl" />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#181c1f] mb-6" style={manrope}>Redefining Preventative Care</h2>
              <p className="text-[#434654] text-lg leading-relaxed mb-8" style={inter}>
                Every 30 seconds, a lower limb is lost to diabetes somewhere in the world. DiabSense was born from the conviction that this is preventable. We are on a mission to bring clinical-grade early detection technology to every patient globally.
              </p>
              <ul className="space-y-4">
                {[
                  "80% reduction of thermal anomalies indicating post-risk.",
                  "Continuous data sampling within clinical disruption.",
                  "Seamless integration with global healthcare portals.",
                ].map(f => (
                  <li key={f} className="flex items-start gap-3 text-[#434654] text-sm" style={inter}>
                    <Check size={18} color="#2d8ab8" className="shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#181c1f] mb-4" style={manrope}>Precision Engineering, Medical Integrity</h2>
            <p className="text-[#434654] text-lg max-w-2xl mx-auto" style={inter}>
              Excellence in the confluence of non-invasive sensing, cutting-edge engineering and rigorous medical systems.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f3f4f6] rounded-2xl p-8">
              <div className="w-12 h-12 bg-[#003d9b]/10 rounded-xl flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-[#003d9b]/40 rounded" />
              </div>
              <h4 className="text-xl font-bold text-[#181c1f] mb-3" style={manrope}>Medical Innovation</h4>
              <p className="text-[#434654] text-sm leading-relaxed mb-6" style={inter}>
                Our multidisciplinary teams work across endocrinology, biomechanics and AI to advance non-invasive biomedical diagnostics, creating truly novel monitoring treatments in impossible problem spaces.
              </p>
              <div className="flex gap-4">
                <button className="text-sm font-semibold text-[#003d9b]" style={inter}>Learn More</button>
                <button className="text-sm font-semibold text-[#456274]" style={inter}>Our Partners</button>
              </div>
            </div>
            <div className="bg-[#003d9b] rounded-2xl p-8 relative overflow-hidden">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-white/60 rounded" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3" style={manrope}>Engineering Excellence</h4>
              <p className="text-white/80 text-sm leading-relaxed mb-6" style={inter}>
                We operate at the limits of what is possible in current sensor technology and machine learning, using only manufacturing processes that can be reproduced at scale with military-grade durability.
              </p>
              <button className="text-sm font-semibold text-[#81cfff] flex items-center gap-2 hover:gap-3 transition-all" style={inter}>
                Get In Touch <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Leadership Team ── */}
      <section className="py-24 bg-[#f3f4f6]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-[#2d8ab8] text-xs font-bold uppercase tracking-[5px] mb-2" style={manrope}>The Minds Behind DiabSense</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#181c1f]" style={manrope}>Visionary Leadership</h2>
            </div>
            <div className="hidden sm:flex gap-3">
              <button className="w-10 h-10 rounded-full border border-[#c4c6d4] flex items-center justify-center hover:bg-gray-200 transition-colors">
                <ChevronRight size={16} className="rotate-180" />
              </button>
              <button className="w-10 h-10 rounded-full border border-[#c4c6d4] flex items-center justify-center hover:bg-gray-200 transition-colors">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {[
              { img: imgTeam1, name: "Dr. Alistair Vance", title: "Co-Founder & CEO", desc: "Leads strategic direction at MIT, with a doctorate in Biomedical Engineering." },
              { img: imgTeam2, name: "Sarah Jenkins", title: "Chief Scientific Officer", desc: "Former Head of Academic Neurology with 15+ years in non-invasive biomedical sensing." },
              { img: imgTeam3, name: "Marcus Thomas", title: "Head of Engineering", desc: "Ex-SpaceX manufacturing engineer, coordinates global cross-functional R&D teams." },
              { img: imgTeam4, name: "Dr. Elena Rodriguez", title: "Chief of Medicine", desc: "Board-certified endocrinologist specializing in diabetic care and amputation research." },
            ].map(m => (
              <div key={m.name}>
                <div className="rounded-2xl overflow-hidden mb-4 aspect-[3/4]">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-[#181c1f] text-base mb-1" style={manrope}>{m.name}</h4>
                <p className="text-[#2d8ab8] text-sm font-medium mb-2" style={manrope}>{m.title}</p>
                <p className="text-[#456274] text-xs leading-relaxed" style={inter}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scientific Advisory Board ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#2d8ab8] text-xs font-bold uppercase tracking-[5px] mb-4" style={manrope}>Expert Guidance</p>
            <h2 className="text-4xl font-bold text-[#181c1f]" style={manrope}>Scientific Advisory Board</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Oxford Health Sciences Network", desc: "Pioneering academic integration and access in 200+ healthcare networks." },
              { name: "Prof. David Armstrong", desc: "World-leading authority in diabetic limb salvage and regenerative vascular surgery association." },
            ].map(m => (
              <div key={m.name} className="flex items-start gap-6 p-6 rounded-2xl bg-[#f3f4f6]">
                <div className="w-12 h-12 bg-[#2d8ab8]/10 rounded-full flex items-center justify-center shrink-0">
                  <div className="w-6 h-6 bg-[#2d8ab8]/30 rounded-full" />
                </div>
                <div>
                  <h4 className="font-bold text-[#181c1f] text-base mb-2" style={manrope}>{m.name}</h4>
                  <p className="text-[#456274] text-sm leading-relaxed" style={inter}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Engineered by ExcelTech ── */}
      <section className="py-24 bg-[#003d9b]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#91afff] text-xs font-bold uppercase tracking-[5px] mb-4" style={manrope}>Synergy Partner</p>
              <h2 className="text-4xl font-bold text-white mb-6" style={manrope}>Engineered by ExcelTech</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8" style={inter}>
                Our strategic partnership with ExcelTech, the world's leading medical sensor manufacturer, ensures that DiabSense devices are engineered with class-leading precision. This partnership ensures that every DiabSense unit you receive will perform.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-[#003d9b] px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wide hover:bg-white/90 transition-colors" style={manrope}>
                  Next-Gen Sensors
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wide hover:bg-white/10 transition-colors" style={manrope}>
                  Military-Grade Durability
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-56 h-56 lg:w-64 lg:h-64 bg-white/10 rounded-full flex items-center justify-center">
                <div className="w-44 h-44 lg:w-48 lg:h-48 bg-white/10 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/20 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Join Us ── */}
      <section className="py-24 bg-[#f3f4f6]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <p className="text-[#2d8ab8] text-xs font-bold uppercase tracking-[5px] mb-4" style={manrope}>Investors & Advisors</p>
          <h2 className="text-4xl font-bold text-[#181c1f] mb-4" style={manrope}>Join Us in Saving Limbs</h2>
          <p className="text-[#434654] text-lg max-w-xl mx-auto mb-8" style={inter}>
            We are currently seeking strategic partners and investors for our Series A expansion. Help us scale clinical accuracy globally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#003d9b] text-[#003d9b] px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-wide hover:bg-[#003d9b]/10 transition-colors bg-transparent border-2 border-[#003d9b] invisible" style={manrope}>
              Partner With Us
            </button>
            <button className="bg-[#003d9b] text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-wide hover:bg-[#00296d] transition-colors" style={manrope}>
              Partner With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
