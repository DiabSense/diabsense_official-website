import { useState } from "react";
import { ArrowRight, Check, Calendar, User, Newspaper, Mail } from "lucide-react";
import imgFdaBreakthrough from "@/assets/images/news/fda-breakthrough.png";
import imgClinicalStudy from "@/assets/images/news/clinical-study.png";
import imgPartnership from "@/assets/images/news/partnership.png";
import { inter, manrope } from "@/utils/fonts";

interface Article {
  id: string;
  category: string;
  date: string;
  author: string;
  title: string;
  summary: string;
  image: string;
  readTime: string;
}

const ARTICLES: Article[] = [
  {
    id: "fda-breakthrough",
    category: "Regulatory Milestone",
    date: "July 10, 2026",
    author: "Regulatory Affairs Team",
    title: "DiabSense Receives FDA Breakthrough Device Designation for AI Thermal Foot Scanner",
    summary: "The U.S. Food and Drug Administration (FDA) has granted Breakthrough Device Designation to DiabSense's proprietary AI-powered dual-spectrum thermal scanner. This designation recognizes the device's potential to provide more effective early detection of diabetic foot ulcers compared to standard clinical care.",
    image: imgFdaBreakthrough,
    readTime: "4 min read",
  },
  {
    id: "clinical-study-2026",
    category: "Clinical Research",
    date: "June 24, 2026",
    author: "Dr. Sarah Lin, Chief Medical Officer",
    title: "New Clinical Trial Shows 85% Reduction in Diabetic Foot Ulcer Incidence",
    summary: "A multi-center randomized controlled trial involving 420 patients has demonstrated that daily remote thermal monitoring using the DiabSense AI platform led to an 85% reduction in diabetic foot ulcer (DFU) incidence over a 12-month period, compared to regular standard care.",
    image: imgClinicalStudy,
    readTime: "6 min read",
  },
  {
    id: "global-partnership",
    category: "Partnerships",
    date: "May 15, 2026",
    author: "Business Development",
    title: "DiabSense Partners with Global Diabetes Care Association to Expand Access",
    summary: "DiabSense is proud to announce a strategic partnership with the Global Diabetes Care Association. Together, we will launch a pilot program across 50 clinics to integrate remote thermal scanning into routine diabetic care pathways, reaching over 10,000 high-risk patients.",
    image: imgPartnership,
    readTime: "3 min read",
  },
];

export default function News() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Regulatory Milestone", "Clinical Research", "Partnerships"];

  const filteredArticles = activeCategory === "All"
    ? ARTICLES
    : ARTICLES.filter(art => art.category === activeCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  // Find the most recent article to display as featured (FDA breakthrough)
  const featuredArticle = ARTICLES[0];
  const gridArticles = filteredArticles.filter(art => art.id !== featuredArticle.id || activeCategory !== "All");

  return (
    <div className="bg-white min-h-screen">
      {/* ── Hero Section ── */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#2d8ab8] text-xs font-bold uppercase tracking-[5px] mb-4" style={manrope}>
              News & Press Releases
            </p>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[#181c1f] leading-tight mb-6" style={manrope}>
              The Latest from DiabSense
            </h1>
            <p className="text-[#434654] text-lg leading-relaxed" style={inter}>
              Follow our journey as we pioneer AI-powered early detection for diabetic foot health, share clinical research breakthrough data, and announce corporate integrations.
            </p>
          </div>
        </div>
      </section>

      {/* ── Category Filter ── */}
      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-[#456274] text-xs font-bold uppercase tracking-wider mr-2" style={manrope}>
              Filter by Category:
            </span>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#003d9b] text-white shadow-md shadow-[#003d9b]/15"
                    : "bg-white text-[#456274] border border-gray-200 hover:border-[#003d9b]/30 hover:bg-gray-50"
                }`}
                style={manrope}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Post Section (Only when viewing "All") ── */}
      {activeCategory === "All" && (
        <section className="py-16 bg-white reveal">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="mb-10 flex items-center justify-between">
              <h2 className="text-2xl font-extrabold text-[#181c1f] tracking-tight" style={manrope}>
                Featured Story
              </h2>
              <div className="h-[1px] flex-1 bg-gray-100 mx-6"></div>
            </div>

            <div className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="lg:col-span-7 overflow-hidden h-[300px] lg:h-auto min-h-[300px] relative">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-[#2d8ab8]/10 text-[#2d8ab8] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider" style={manrope}>
                    {featuredArticle.category}
                  </span>
                  <span className="text-gray-400 text-xs flex items-center gap-1" style={inter}>
                    <Calendar size={12} /> {featuredArticle.date}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-[#181c1f] leading-tight mb-4 group-hover:text-[#003d9b] transition-colors" style={manrope}>
                  {featuredArticle.title}
                </h3>
                <p className="text-[#434654] text-sm leading-relaxed mb-6" style={inter}>
                  {featuredArticle.summary}
                </p>
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-xs text-[#456274]" style={inter}>
                    <User size={14} className="text-[#2d8ab8]" />
                    <span>{featuredArticle.author}</span>
                  </div>
                  <button className="flex items-center gap-2 text-[#003d9b] text-xs font-bold uppercase tracking-wider group/btn" style={manrope}>
                    Read Article <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Articles Grid ── */}
      <section className={`py-16 bg-[#f3f4f6] reveal ${activeCategory !== "All" ? "pt-16" : ""}`}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-2xl font-extrabold text-[#181c1f] tracking-tight" style={manrope}>
              {activeCategory === "All" ? "Latest Updates" : `${activeCategory} Updates`}
            </h2>
            <div className="h-[1px] flex-1 bg-gray-200 mx-6"></div>
          </div>

          {gridArticles.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <Newspaper size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-[#434654] font-medium" style={inter}>No articles found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {gridArticles.map(art => (
                <div
                  key={art.id}
                  className="group flex flex-col bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/95 backdrop-blur-sm text-[#003d9b] shadow-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider" style={manrope}>
                        {art.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-400 text-xs flex items-center gap-1" style={inter}>
                        <Calendar size={12} /> {art.date}
                      </span>
                      <span className="text-[#2d8ab8] text-xs font-semibold" style={inter}>
                        {art.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#181c1f] leading-snug mb-4 group-hover:text-[#003d9b] transition-colors" style={manrope}>
                      {art.title}
                    </h3>
                    <p className="text-[#434654] text-sm leading-relaxed mb-6 line-clamp-3" style={inter}>
                      {art.summary}
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-xs text-[#456274]" style={inter}>
                        <User size={14} className="text-[#2d8ab8]" />
                        <span>{art.author}</span>
                      </div>
                      <button className="flex items-center gap-2 text-[#003d9b] text-xs font-bold uppercase tracking-wider group/btn" style={manrope}>
                        Read More <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Newsletter Section ── */}
      <section className="py-24 bg-white border-t border-gray-100 reveal">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="bg-gradient-to-r from-[#003d9b] to-[#104fae] rounded-3xl p-8 md:p-16 text-white text-center relative overflow-hidden shadow-2xl">
            <div className="absolute -right-24 -bottom-24 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -left-24 -top-24 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 max-w-xl mx-auto">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail size={24} className="text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold mb-4" style={manrope}>
                Subscribe to Clinical & Regulatory Updates
              </h2>
              <p className="text-white/80 text-sm leading-relaxed mb-8" style={inter}>
                Get our clinical summaries, FDA breakthrough announcements, and publications directly in your inbox. No spam. Unsubscribe anytime.
              </p>

              {subscribed ? (
                <div className="flex flex-col items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 transition-all duration-300 animate-in fade-in zoom-in-95">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-3">
                    <Check size={20} className="text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-1" style={manrope}>Subscription Confirmed!</h4>
                  <p className="text-white/80 text-xs" style={inter}>Thank you. You have been added to our clinical updates list.</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your professional email"
                    className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-4 text-white text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
                    style={inter}
                  />
                  <button
                    type="submit"
                    className="bg-white text-[#003d9b] hover:bg-gray-50 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors shadow-lg hover:shadow-xl"
                    style={manrope}
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
