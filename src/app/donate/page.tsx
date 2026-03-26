import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate",
  description: "Support the Fraser Inclusive and Supportive Housing Society. Your contribution directly powers Kwas House in providing affordable homes in Hope, BC.",
};

export default function Donate() {
  return (
    <div className="pt-4 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Hero Section */}
        <header className="mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-primary tracking-tighter mb-6 max-w-2xl leading-[1.1]">
            Build the <span className="text-secondary-container">Forever Home</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
            Your contribution directly powers Kwas House, providing permanent stability 
            and a sense of belonging in the heart of Hope.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Donation Call to Action */}
          <div className="lg:col-span-7 bg-surface-container-low rounded-xl p-8 lg:p-12 shadow-sm border border-outline-variant/10">
            <h2 className="text-3xl font-bold text-primary mb-6">Support Our Mission</h2>
            <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
              Your generosity makes a direct impact on the lives of adults with cognitive
              disabilities in our community. Every dollar helps build a safe, affordable, and
              supportive sanctuary.
            </p>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl border border-secondary/20 shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-2">Financial Contributions</h3>
                <p className="text-on-surface-variant mb-6">
                  We process our online donations through a secure portal to ensure your
                  information is protected.
                </p>
                <Link
                  href="https://www.canadahelps.org/en/dn/76476"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-gradient-to-r from-secondary to-secondary-container text-on-secondary text-center py-5 rounded-full font-extrabold text-xl shadow-lg active:scale-95 duration-200 transition-all"
                >
                  Donate Now
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 bg-surface-container-high rounded-xl">
                  <h4 className="font-bold text-primary mb-2 text-sm uppercase tracking-wider">E-Transfer</h4>
                  <p className="text-secondary font-bold text-lg mb-1 truncate">fishsociety321@gmail.com</p>
                  <p className="text-xs text-on-surface-variant">Please include your name and address in the notes for a tax receipt.</p>
                </div>
                <div className="p-6 bg-surface-container-high rounded-xl">
                  <h4 className="font-bold text-primary mb-2 text-sm uppercase tracking-wider">By Cheque</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Payable to: <span className="font-bold text-primary">Fraser Inclusive &amp; Supportive Housing Society</span><br />
                    477 Hudson Bay Street<br />
                    Hope, BC V0X 1L0
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Ways to Help & Transparency */}
          <div className="lg:col-span-5 space-y-10">
            {/* Transparency Section */}
            <div className="bg-surface-container-high rounded-xl p-8">
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                    stroke="#895200"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                  />
                  <circle cx="12" cy="12" r="3" stroke="#FDA945" strokeWidth="2.5" />
                </svg>
                Where your money goes
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center shrink-0">
                    <svg
                      fill="none"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 10L12 3L21 10V21H15V15H9V21H3V10Z"
                        stroke="#895200"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm">65% Housing &amp; Shelters</h4>
                    <p className="text-xs text-on-surface-variant">
                      Direct maintenance and expansion of our residential facilities.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center shrink-0">
                    <svg
                      fill="none"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 5V19M5 12H19"
                        stroke="#895200"
                        strokeLinecap="round"
                        strokeWidth="2"
                      />
                      <circle cx="12" cy="12" r="9" stroke="#FDA945" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm">20% Community Kitchen</h4>
                    <p className="text-xs text-on-surface-variant">
                      Providing over 500 nutritious meals every single week.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center shrink-0">
                    <svg
                      fill="none"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 10L12 5L2 10L12 15L22 10Z"
                        stroke="#895200"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                      <path
                        d="M6 12V17C6 17 8 20 12 20C16 20 18 17 18 17V12"
                        stroke="#FDA945"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm">15% Skill Programs</h4>
                    <p className="text-xs text-on-surface-variant">
                      Workshops and counseling for long-term independent living.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Ways to Help (Asymmetric Layout) */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-6">4 Ways to Help</h3>
              <div className="grid grid-cols-1 gap-4">
                {/* Way 1 */}
                <Link 
                  href="https://www.canadahelps.org/en/dn/76476"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-5 bg-white rounded-xl shadow-[0_4px_20px_rgba(2,39,75,0.03)] hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary-container/10 flex items-center justify-center">
                      <svg
                        fill="none"
                        height="22"
                        viewBox="0 0 24 24"
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect height="14" rx="2" stroke="#FDA945" strokeWidth="2" width="20" x="2" y="5" />
                        <circle cx="12" cy="12" r="3" stroke="#895200" strokeWidth="2" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-bold text-primary block">Cash Donation</span>
                      <span className="text-xs text-on-surface-variant">Instant tax receipt for $10 - $1,000</span>
                    </div>
                  </div>
                  <svg
                    className="text-outline group-hover:text-secondary transition-colors"
                    fill="none"
                    height="16"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                    width="16"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>
                {/* Way 2 */}
                <Link 
                  href="/contact"
                  className="group flex items-center justify-between p-5 bg-white rounded-xl shadow-[0_4px_20px_rgba(2,39,75,0.03)] hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary-container/10 flex items-center justify-center">
                      <svg
                        fill="none"
                        height="22"
                        viewBox="0 0 24 24"
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z"
                          stroke="#FDA945"
                          strokeWidth="2"
                        />
                        <path
                          d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88"
                          stroke="#895200"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="font-bold text-primary block">Community Champion</span>
                      <span className="text-xs text-on-surface-variant">Building contracts for local companies</span>
                    </div>
                  </div>
                  <svg
                    className="text-outline group-hover:text-secondary transition-colors"
                    fill="none"
                    height="16"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                    width="16"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>
                {/* Way 3 */}
                <Link 
                  href="/contact"
                  className="group flex items-center justify-between p-5 bg-white rounded-xl shadow-[0_4px_20px_rgba(2,39,75,0.03)] hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary-container/10 flex items-center justify-center">
                      <svg
                        fill="none"
                        height="22"
                        viewBox="0 0 24 24"
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"
                          stroke="#FDA945"
                          strokeWidth="2"
                        />
                        <path
                          d="M12 7V17M7 12H17"
                          stroke="#895200"
                          strokeLinecap="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="font-bold text-primary block">Community Bond</span>
                      <span className="text-xs text-on-surface-variant">Invest $1,000 - $10,000 with ROI</span>
                    </div>
                  </div>
                  <svg
                    className="text-outline group-hover:text-secondary transition-colors"
                    fill="none"
                    height="16"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                    width="16"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>
                {/* Way 4 */}
                <Link 
                  href="/contact"
                  className="group flex items-center justify-between p-5 bg-white rounded-xl shadow-[0_4px_20px_rgba(2,39,75,0.03)] hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary-container/10 flex items-center justify-center">
                      <svg
                        fill="none"
                        height="22"
                        viewBox="0 0 24 24"
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23 6L13.5 15.5L8.5 10.5L1 18"
                          stroke="#895200"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                        <path
                          d="M17 6H23V12"
                          stroke="#FDA945"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="font-bold text-primary block">Impact Loan</span>
                      <span className="text-xs text-on-surface-variant">Secured loans for $10,000 - $100,000</span>
                    </div>
                  </div>
                  <svg
                    className="text-outline group-hover:text-secondary transition-colors"
                    fill="none"
                    height="16"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                    width="16"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Community Spotlight */}
            <div className="relative overflow-hidden rounded-xl bg-primary aspect-[16/10] group">
              <img
                alt="diverse group of community members laughing and working together in a bright, modern setting with warm sunlight"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp2ASwk6uDSCbA2gqIrhzgYJ_qp51ya8PpI613tbpUSmKqYb0ZrYk0U5nhT5UE5X1ZedoEPXK5U-u2AhHahIMf0jD7Y_wf4-ByWVz0VUsiN2LTJCW5-g_jdTltXK8JqSS541tHytx11Cz_rkHGBAw8-vtsBFxo1gbl0ctD2ZPWa7qbIKj3oZVz0WENulI-seN7svNLr2M2O95sYOsiDax1uJDsOBvZnMaOgpQSn15GNeSNA-1L1ZmxOUrexLp1VIrqCWaCIo4u5-E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-sm font-semibold uppercase tracking-widest mb-2">
                  Our Impact
                </p>
                <h4 className="text-white text-2xl font-bold leading-tight">
                  &quot;This house isn&apos;t just a roof; it&apos;s where I found my voice again.&quot;
                </h4>
                <p className="text-white/80 text-xs mt-2">— Sarah, Former Resident</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
