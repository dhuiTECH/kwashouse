import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Fraser Inclusive and Supportive Housing Society in Hope, BC. We're here to help with housing assistance or partnership inquiries.",
};

export default function Contact() {
  return (
    <>
      <div className="pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Page Header */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold text-primary tracking-tighter mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-on-surface-variant max-w-2xl">
              We are here to listen, support, and guide you. Whether you have questions 
              about the Kwas House project or want to learn more, we want to hear from you.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Society Info & Actions */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* Contact Card */}
              <div className="bg-surface-container-low rounded-xl p-8 relative overflow-hidden group">
                <div className="flex flex-col gap-6 relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-1">FISH Society</h3>
                    <p className="text-secondary font-semibold text-sm tracking-wide uppercase mb-4">
                      Fraser Inclusive & Supportive Housing
                    </p>
                    <p className="text-on-surface-variant leading-relaxed mb-6">
                      Our board and partners are dedicated to making Kwas House a reality. 
                      Reach out for more information on our mission and progress.
                    </p>
                    <div className="flex flex-col gap-3">
                      <a
                        className="flex items-center gap-3 p-3 bg-surface-container-lowest rounded-lg hover:bg-secondary-container/10 transition-colors group/link"
                        href="tel:+17787832965"
                      >
                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover/link:bg-secondary group-hover/link:text-white transition-all">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                        </div>
                        <div>
                          <span className="block text-xs text-on-surface-variant font-medium">
                            Phone
                          </span>
                          <span className="text-primary font-bold">+1 (778) 783-2965</span>
                        </div>
                      </a>
                      <a
                        className="flex items-center gap-3 p-3 bg-surface-container-lowest rounded-lg hover:bg-secondary-container/10 transition-colors group/link"
                        href="mailto:fishsociety@hotmail.com"
                      >
                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover/link:bg-secondary group-hover/link:text-white transition-all">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <path d="M22 6l-10 7L2 6" strokeWidth="2" />
                          </svg>
                        </div>
                        <div>
                          <span className="block text-xs text-on-surface-variant font-medium">
                            Email
                          </span>
                          <span className="text-primary font-bold">fishsociety@hotmail.com</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Office Location Block */}
              <div className="bg-surface-container-high rounded-xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" fill="#fda945" r="3" stroke="#fda945" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary">Location</h4>
                    <p className="text-on-surface-variant">
                      477 Hudson Bay Street<br />
                      Hope, BC V0X 1L0
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Quick Message Form */}
            <div className="lg:col-span-7">
              <div className="bg-surface-container-lowest rounded-xl p-8 md:p-12 shadow-[0_40px_80px_rgba(2,39,75,0.04)] h-full">
                <h3 className="text-3xl font-bold text-primary mb-2">Quick Message</h3>
                <p className="text-on-surface-variant mb-10">
                  Have a specific question? Send us a message and our team will get back to
                  you as soon as possible.
                </p>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary ml-1">
                        Full Name
                      </label>
                      <input
                        className="w-full bg-surface-container-highest border-none rounded-lg focus:ring-2 focus:ring-secondary py-4 px-5 text-primary placeholder:text-on-surface-variant/50"
                        placeholder="Your name"
                        type="text"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary ml-1">
                        Email Address
                      </label>
                      <input
                        className="w-full bg-surface-container-highest border-none rounded-lg focus:ring-2 focus:ring-secondary py-4 px-5 text-primary placeholder:text-on-surface-variant/50"
                        placeholder="example@email.com"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary ml-1">Subject</label>
                    <select className="w-full bg-surface-container-highest border-none rounded-lg focus:ring-2 focus:ring-secondary py-4 px-5 text-primary">
                      <option>Housing Inquiry</option>
                      <option>Donation Information</option>
                      <option>General Support</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary ml-1">
                      How can we help?
                    </label>
                    <textarea
                      className="w-full bg-surface-container-highest border-none rounded-lg focus:ring-2 focus:ring-secondary py-4 px-5 text-primary placeholder:text-on-surface-variant/50 resize-none"
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                    ></textarea>
                  </div>
                  <button
                    className="w-full bg-[#fda945] py-5 rounded-lg text-white font-extrabold text-lg shadow-xl shadow-secondary/20 hover:scale-[1.02] transition-transform active:scale-95 flex items-center justify-center gap-3"
                    type="submit"
                  >
                    Send Message
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 2L11 13" />
                      <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <section className="bg-primary py-20 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-white mb-6">Want to Partner with Us?</h2>
            <p className="text-primary-fixed text-lg mb-8 opacity-80 leading-relaxed">
              We are always looking for community champions, businesses, and individuals 
              who want to make a lasting impact. Join us in building a radiant sanctuary.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/donate" className="bg-secondary text-white font-bold px-8 py-4 rounded-full flex items-center gap-3 transition-transform hover:scale-105">
                Support the Mission
              </Link>
              <Link href="/about" className="bg-white/10 text-white font-bold px-8 py-4 rounded-full flex items-center gap-3 backdrop-blur-sm transition-transform hover:scale-105">
                About the Project
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <div className="aspect-square bg-secondary-container/20 rounded-[2rem] rotate-6 flex items-center justify-center p-8 border-2 border-white/10">
              <div className="text-center">
                <svg
                  className="w-10 h-10 text-[#fda945] mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                    fill="#fda945"
                  />
                </svg>
                <p className="text-white font-bold text-3xl">$4.37M</p>
                <p className="text-primary-fixed text-sm font-semibold mt-1">
                  Total Project Investment
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative background elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary-container/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      </section>
    </>
  );
}
