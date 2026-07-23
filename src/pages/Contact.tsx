import { useState } from "react";
import { Phone, Globe, Linkedin, Mail, Send, Check, MessageSquare, Clock } from "lucide-react";
import { inter, manrope } from "@/utils/fonts";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage("");

    // To make this fully functional:
    // 1. Go to https://web3forms.com/ and enter kosala@diabsense.com to get your free access key.
    // 2. Paste your access key below (replace "YOUR_WEB3FORMS_ACCESS_KEY").
    const accessKey: string = "bf1a12b2-9c3c-4d42-8e4e-dc6492e2fe4b";

    if (!accessKey || accessKey === "YOUR_WEB3FORMS_ACCESS_KEY") {
      // Fallback local simulation if key is not yet set
      setTimeout(() => {
        setSubmitting(false);
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 1200);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "DiabSense Web Form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setErrorMessage(result.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Network error. Please check your internet connection.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white min-h-screen">
      {/* ── Hero Section ── */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#2d8ab8] text-xs font-bold uppercase tracking-[5px] mb-4" style={manrope}>
              Get In Touch
            </p>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[#181c1f] leading-tight mb-6" style={manrope}>
              Connect with DiabSense
            </h1>
            <p className="text-[#434654] text-lg leading-relaxed" style={inter}>
              Whether you are a healthcare provider seeking clinical solutions, a researcher interested in partnership, or a patient wanting to learn more, our team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main Content Grid ── */}
      <section className="py-20 bg-[#f3f4f6]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* ── Left Column: Contact Info (col-span-5) ── */}
            <div className="lg:col-span-5 space-y-6">

              {/* Call & WhatsApp Card */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#003d9b]/10 rounded-2xl flex items-center justify-center text-[#003d9b] shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#181c1f] mb-1" style={manrope}>Call / WhatsApp</h3>
                    <p className="text-[#434654] font-medium text-lg mb-4" style={inter}>+94 77 555 5174</p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="tel:+94775555174"
                        className="bg-[#003d9b] hover:bg-[#104fae] text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl transition-colors inline-block"
                        style={manrope}
                      >
                        Call Now
                      </a>
                      <a
                        href="https://wa.me/94775555174"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25D366] hover:bg-[#20ba56] text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl transition-colors inline-block"
                        style={manrope}
                      >
                        WhatsApp Chat
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2d8ab8]/10 rounded-2xl flex items-center justify-center text-[#2d8ab8] shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#181c1f] mb-1" style={manrope}>Email Inquiry</h3>
                    <p className="text-[#434654] font-medium text-lg mb-4" style={inter}>kosala@diabsense.com</p>
                    <a
                      href="mailto:kosala@diabsense.com"
                      className="text-xs font-bold uppercase tracking-wider text-[#003d9b] hover:text-[#104fae] transition-colors flex items-center gap-1.5"
                      style={manrope}
                    >
                      Send Direct Mail <Send size={12} />
                    </a>
                  </div>
                </div>
              </div>

              {/* LinkedIn & Web Card */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow space-y-6">

                {/* LinkedIn Section */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0077b5]/10 rounded-2xl flex items-center justify-center text-[#0077b5] shrink-0">
                    <Linkedin size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#181c1f] mb-1" style={manrope}>LinkedIn Page</h3>
                    <p className="text-sm text-[#434654] mb-2" style={inter}>Stay updated with our corporate network.</p>
                    <a
                      href="https://linkedin.com/company/diabsense"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold uppercase tracking-wider text-[#003d9b] hover:text-[#104fae] transition-colors"
                      style={manrope}
                    >
                      linkedin.com/company/diabsense
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-6"></div>

                {/* Web Section */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#456274]/10 rounded-2xl flex items-center justify-center text-[#456274] shrink-0">
                    <Globe size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#181c1f] mb-1" style={manrope}>Official Website</h3>
                    <p className="text-sm text-[#434654] mb-2" style={inter}>Main portal and user resources.</p>
                    <a
                      href="https://www.diabsense.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold uppercase tracking-wider text-[#003d9b] hover:text-[#104fae] transition-colors"
                      style={manrope}
                    >
                      www.diabsense.com
                    </a>
                  </div>
                </div>

              </div>

              {/* Support Info Card */}
              <div className="bg-gradient-to-br from-[#101417] to-[#1a2126] text-white rounded-3xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={20} className="text-[#2d8ab8]" />
                  <h4 className="font-bold text-sm uppercase tracking-wider" style={manrope}>Support Desk Hours</h4>
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-4" style={inter}>
                  We monitor urgent clinical integration inquiries 24/7. General inquiries will be responded to within 1 business day.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold text-white/90" style={manrope}>Kosala is Online</span>
                </div>
              </div>

            </div>

            {/* ── Right Column: Message Form (col-span-7) ── */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-sm">
              <div className="mb-8">
                <h2 className="text-2xl font-extrabold text-[#181c1f] tracking-tight mb-2" style={manrope}>
                  Send Us a Message
                </h2>
                <p className="text-[#434654] text-sm" style={inter}>
                  Fill out this form to send a direct email message to our coordinator, <strong>kosala@diabsense.com</strong>.
                </p>
              </div>

              {submitted ? (
                <div className="bg-green-50 border border-green-100 rounded-2xl p-8 text-center animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md shadow-green-500/20">
                    <Check size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-green-900 mb-2" style={manrope}>Message Sent Successfully!</h3>
                  <p className="text-green-700 text-sm leading-relaxed mb-6" style={inter}>
                    Your message has been safely delivered to <strong>kosala@diabsense.com</strong>. We will review your inquiry and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-[#003d9b] hover:bg-[#104fae] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl transition-colors shadow-lg hover:shadow-xl"
                    style={manrope}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="bg-red-50 border border-red-100 text-red-700 text-sm px-4 py-3 rounded-xl" style={inter}>
                      {errorMessage}
                    </div>
                  )}

                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#456274]" style={manrope}>
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full bg-[#f3f4f6] border border-transparent rounded-xl px-5 py-4 text-sm text-[#181c1f] placeholder-gray-400 focus:outline-none focus:bg-white focus:border-[#003d9b]/30 focus:ring-2 focus:ring-[#003d9b]/15 transition-all"
                        style={inter}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#456274]" style={manrope}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="doctor@hospital.org"
                        className="w-full bg-[#f3f4f6] border border-transparent rounded-xl px-5 py-4 text-sm text-[#181c1f] placeholder-gray-400 focus:outline-none focus:bg-white focus:border-[#003d9b]/30 focus:ring-2 focus:ring-[#003d9b]/15 transition-all"
                        style={inter}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-[#456274]" style={manrope}>
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Clinical trials integration request"
                      className="w-full bg-[#f3f4f6] border border-transparent rounded-xl px-5 py-4 text-sm text-[#181c1f] placeholder-gray-400 focus:outline-none focus:bg-white focus:border-[#003d9b]/30 focus:ring-2 focus:ring-[#003d9b]/15 transition-all"
                      style={inter}
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#456274]" style={manrope}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your detailed inquiry here..."
                      className="w-full bg-[#f3f4f6] border border-transparent rounded-xl px-5 py-4 text-sm text-[#181c1f] placeholder-gray-400 focus:outline-none focus:bg-white focus:border-[#003d9b]/30 focus:ring-2 focus:ring-[#003d9b]/15 transition-all resize-none"
                      style={inter}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-[#003d9b] hover:bg-[#104fae] disabled:bg-gray-400 text-white font-bold uppercase tracking-wider text-xs py-4 px-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
                    style={manrope}
                  >
                    {submitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
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
