import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Forever Home in the Heart of Hope | Kwas House",
  description: "A community-driven vision of affordable housing in Hope, BC. Join the Fraser Inclusive and Supportive Housing Society in building 14 apartments for adults with cognitive challenges and seniors.",
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative px-6 lg:px-12 py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center px-3 py-1 bg-surface-container-high rounded-lg text-primary text-xs font-bold tracking-widest uppercase">
              Housing by the Community
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-primary tracking-tighter leading-[1.05]">
              A Forever Home in <br />
              <span className="text-secondary">the Heart of Hope.</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed">
              Kwas House was born from the dreams of parents at the Tillicum Centre. Join us in building 14 affordable apartments for adults with cognitive challenges and seniors in Hope, BC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="https://kwashouse.org/donate/" className="inline-block text-center bg-gradient-to-r from-secondary to-secondary-container text-on-secondary px-8 py-4 rounded-xl font-bold text-lg shadow-[0_10px_20px_rgba(137,82,0,0.2)] active:scale-95 transition-transform">
                Support the Dream
              </Link>
              <Link 
                href="https://www.youtube.com/watch?v=H0S2v2Uwz8o" 
                target="_blank"
                className="flex items-center justify-center gap-2 text-primary font-bold px-8 py-4 rounded-xl hover:bg-surface-container-low transition-colors group"
              >
                {/* Custom Play Icon */}
                <svg
                  className="w-6 h-6 transition-transform group-hover:scale-110"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeWidth="1.5"
                  />
                  <path d="M15.5 12L10 15.5V8.5L15.5 12Z" fill="currentColor" />
                </svg>
                Watch our Story
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                alt="Kwas House Architectural Drawing"
                className="w-full h-full object-cover"
                src="/kwashouse.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>
            {/* Overlapping Bento Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[280px]">
              <div className="flex items-center gap-3 mb-2">
                {/* Custom Heart/Home Hybrid Icon */}
                <svg
                  className="w-6 h-6 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 11V15M10 13H14"
                    stroke="white"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                  />
                </svg>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                  Our Mission
                </span>
              </div>
              <p className="text-sm text-on-surface-variant italic">
                &quot;We are building more than walls; we are building hope.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fundraising Progress (Tonal Shift Section) */}
      <section className="bg-surface-container-low py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6 tracking-tight">
                Our Fundraising Milestone
              </h2>
              <p className="text-on-surface-variant text-lg mb-8">
                Every contribution brings us closer to securing permanent housing for 14 families. See how far we&apos;ve come together.
              </p>
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-5xl font-extrabold text-primary tracking-tighter">
                      $957,535
                    </span>
                    <span className="text-on-surface-variant font-medium ml-2">Raised</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-bold text-secondary">79.8%</span>
                    <div className="text-xs text-on-surface-variant font-bold uppercase tracking-wider">
                      of $1,200,000 (Goal)
                    </div>
                  </div>
                </div>
                {/* Progress Bar */}
                <div className="h-4 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-secondary to-secondary-container rounded-full"
                    style={{ width: "79.8%" }}
                  ></div>
                </div>
                <p className="text-sm text-on-surface-variant mt-4">
                  Total project development cost: $4,369,115
                </p>
              </div>
            </div>
            {/* Feature Image Grid (Asymmetric) */}
            <div className="grid grid-cols-2 gap-4 h-[400px]">
              <div className="rounded-xl overflow-hidden shadow-lg h-full">
                <img
                  alt="Community Living Space"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPENDHDuAxwW-xtCAvwg8EWqQ9f0Av6Jo92PIsHwv_aMmKU3BBOYSEnUBNrZOHbpyB5rIyxEUObMDzdCNKIm8uSZb7o2ieLNRnc5SqeN_tlJsuh4ghNjTGHAwTcQdxsjbeNcO87p4VLMHUlcWZ_sGIKUdXpRe55-HsosOl_SlsOHrtTKuENcqQ1ZU7BHmTQyUB0t6HuBqvIRyCSqZbpionVrqXrmqqHSFcXft3lzsmXVP6LyryYe-8HRlsH8kTbDmArw6WzNFFXbs"
                />
              </div>
              <div className="grid grid-rows-2 gap-4 h-full">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    alt="Community Leaders"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNJGm5qTNaDMbFlPkiRIuo-zQ75zfjt7ZIjFOYUUIZt0Rl1_R6Bi-x8dH2vxJmT3cuTRokNfNYmfiQ10F9K2HZBf7U0NUDNdohEHF2S33mAlMP8PdJVOPbmqxi4waMfUDqJy5ttMPVf1gyXRSffRm0J90RSUVIA9Qz4LYOx4CdCpmMvpESsN5ZkuFzddeAPx6xZCb2gJIGef0UWCs-ggcwqGAcE8nvq1RBoUXcTL1vohhYjDZnUEFXqS2lzQr0Ac6q-E4ztjfzVr0"
                  />
                </div>
                <div className="bg-primary p-8 rounded-xl flex flex-col justify-center text-white">
                  {/* Custom Chart/Impact Icon */}
                  <svg
                    className="w-10 h-10 text-secondary-container mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 21H21"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2"
                    />
                    <path
                      d="M5 17V11"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2"
                    />
                    <path
                      d="M10 17V7"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2"
                    />
                    <path
                      d="M15 17V13"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2"
                    />
                    <path
                      d="M20 17V9"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2"
                    />
                    <circle cx="10" cy="5" fill="currentColor" r="2" />
                  </svg>
                  <div className="text-xl font-bold">14 New Units</div>
                  <p className="text-sm text-on-primary-container">
                    Providing dignity and stability for local families.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section (By The Numbers) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-16">
          <h2 className="text-4xl font-extrabold text-primary tracking-tighter mb-4">
            By The Numbers
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Transparency is our foundation. Here is the impact of your support and the scale
            of our mission.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="p-8 bg-surface-container-low rounded-2xl transition-transform hover:-translate-y-2">
            <div className="text-4xl font-extrabold text-primary mb-2">14</div>
            <div className="text-sm font-bold text-secondary uppercase tracking-widest">
              Affordable Apts
            </div>
          </div>
          <div className="p-8 bg-surface-container-low rounded-2xl transition-transform hover:-translate-y-2">
            <div className="text-4xl font-extrabold text-primary mb-2">100%</div>
            <div className="text-sm font-bold text-secondary uppercase tracking-widest">
              Community Led
            </div>
          </div>
          <div className="p-8 bg-surface-container-low rounded-2xl transition-transform hover:-translate-y-2">
            <div className="text-4xl font-extrabold text-primary mb-2">Since</div>
            <div className="text-sm font-bold text-secondary uppercase tracking-widest">
              2020 (FISH)
            </div>
          </div>
          <div className="p-8 bg-surface-container-low rounded-2xl transition-transform hover:-translate-y-2">
            <div className="text-4xl font-extrabold text-primary mb-2">2025</div>
            <div className="text-sm font-bold text-secondary uppercase tracking-widest">
              Target Opening
            </div>
          </div>
        </div>
      </section>

      {/* Video Highlight (Community Spotlight Card) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <div className="relative bg-surface-container-low rounded-[2rem] overflow-hidden p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h3 className="text-3xl font-bold text-primary mb-6">
              Watch a Kwas House Video
            </h3>
            <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
              Step inside the vision. Hear from our architects, community leaders, and future
              residents about what Kwas House means for our neighborhood.
            </p>
            <Link 
              href="https://www.youtube.com/watch?v=H0S2v2Uwz8o" 
              target="_blank"
              className="inline-flex items-center gap-4 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-colors group"
            >
              {/* Custom Journey Icon */}
              <svg
                className="w-8 h-8 text-secondary-container"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                  fill="currentColor"
                />
                <path
                  d="M11 7L16 12L11 17L9.59 15.59L13.17 12L9.59 8.41L11 7Z"
                  fill="currentColor"
                />
              </svg>
              Play the Journey
            </Link>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/H0S2v2Uwz8o"
                title="Kwas House Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
