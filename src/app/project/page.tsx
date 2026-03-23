import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Numbers",
  description: "Explore the financial transparency and investment breakdown of Kwas House, a project by the Fraser Inclusive and Supportive Housing Society.",
};

export default function Project() {
  const metrics = [
    { label: "Land Value", value: "$500,000", description: "Generously donated by Olga Kwas at 477 Hudson Bay St." },
    { label: "Hard Costs", value: "$3,198,915", description: "Construction, materials, and site labor for 14 units." },
    { label: "Soft Costs", value: "$670,200", description: "Design, permits, legal, and project management." },
    { label: "Total Cost", value: "$4,369,115", description: "Total Development Cost (TDC)." },
  ];

  return (
    <div className="pt-4 pb-16 px-6 max-w-7xl mx-auto space-y-12">
      {/* Hero Section: The Big Picture */}
      <section className="bg-surface-container-low rounded-2xl p-10 md:p-16 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-6 tracking-tighter">
            Transparency in <br />
            <span className="text-secondary">Every Dollar</span>
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            The Kwas House project is a $4.37M investment in the future of our community. 
            Through a combination of land donation, government grants, and community 
            fundraising, we are making inclusive housing a reality.
          </p>
        </div>
        <div className="bg-white p-8 rounded-full shadow-lg border-4 border-secondary/10 flex flex-col items-center justify-center w-64 h-64 shrink-0">
          <span className="text-secondary font-bold text-sm uppercase tracking-widest mb-1">Total Valuation</span>
          <span className="text-4xl font-black text-primary">$4.37M</span>
        </div>
      </section>

      {/* Valuation Card: Main Highlight */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-8 bg-primary rounded-xl p-10 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-secondary-container font-bold uppercase tracking-widest text-xs mb-2">
              Phase 1 Funding Goal
            </p>
            <h3 className="text-lg opacity-80 mb-1">Current Milestone Target</h3>
            <div className="text-6xl md:text-8xl font-black tracking-tighter">$1.2M</div>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="space-y-1">
              <p className="text-on-primary-container text-sm font-semibold">Total Funds Raised</p>
              <p className="text-3xl font-bold text-white">$957,535</p>
              <div className="w-full bg-white/10 h-2 rounded-full mt-2">
                <div className="bg-secondary-container h-full rounded-full" style={{ width: "79.8%" }}></div>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-on-primary-container text-sm font-semibold">Progress to Goal</p>
              <p className="text-3xl font-bold text-white">79.8%</p>
              <p className="text-xs text-secondary-container font-medium uppercase tracking-tighter">
                Completed
              </p>
            </div>
          </div>
          {/* Abstract Grain Texture Decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFFFFF" d="M44.7,-76.4C58.3,-69.2,70,-58.5,78.2,-45.6C86.4,-32.7,91.1,-17.6,90.4,-2.8C89.7,12,83.6,26.4,75.1,39.6C66.5,52.8,55.5,64.8,42.4,72.4C29.3,80.1,14.6,83.4,-0.4,84.1C-15.4,84.8,-30.9,82.9,-44.6,75.7C-58.3,68.5,-70.2,56,-77.8,41.7C-85.3,27.5,-88.6,11.5,-87.5,-4.1C-86.3,-19.7,-80.9,-34.9,-71.4,-47.3C-61.9,-59.7,-48.3,-69.3,-34.4,-76.3C-20.5,-83.3,-6.4,-87.7,8.2,-90.1C22.8,-92.5,44.7,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>

        <div className="lg:col-span-4 bg-secondary-container rounded-xl p-8 flex flex-col justify-center text-primary">
          <h4 className="font-bold text-xl mb-4 leading-tight">Investment for Longevity</h4>
          <p className="text-sm opacity-90 leading-relaxed mb-6">
            Kwas House is designed for efficiency and durability. By maintaining a 
            competitive cost position, we ensure that resources are directed 
            where they matter most: the quality of life for our residents.
          </p>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-primary/10 pb-2">
              <span className="text-xs font-bold uppercase">TDC per Unit</span>
              <span className="font-bold">$312,080</span>
            </div>
            <div className="flex justify-between items-center border-b border-primary/10 pb-2">
              <span className="text-xs font-bold uppercase">TDC per Gross SF</span>
              <span className="font-bold">$401 / SF</span>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Breakdown */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <h3 className="text-2xl font-bold text-primary">Budget Breakdown</h3>
          <div className="h-px bg-outline-variant flex-grow"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item) => (
            <div key={item.label} className="bg-surface-container rounded-xl p-6 hover:bg-surface-container-high transition-colors">
              <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">{item.label}</p>
              <p className="text-3xl font-black text-primary mb-2">{item.value}</p>
              <p className="text-xs text-on-surface-variant leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Anchor: Asymmetrical Editorial Card */}
      <section className="relative bg-surface-container-low rounded-xl overflow-hidden flex flex-col md:flex-row items-center gap-0">
        <div className="w-full md:w-1/2 h-80 md:h-[500px] relative">
          <img
            alt="Kwas House project"
            className="absolute inset-0 w-full h-full object-cover"
            src="/kwashouse.jpg"
          />
          <div className="absolute inset-0 bg-primary/20"></div>
        </div>
        <div className="w-full md:w-1/2 p-12 md:p-16 space-y-6">
          <span className="text-secondary font-bold uppercase tracking-widest text-sm">
            Our Impact
          </span>
          <h3 className="text-4xl font-extrabold text-primary tracking-tighter leading-none">
            Sustainability Built In.
          </h3>
          <p className="text-on-surface-variant text-lg">
            Every dollar invested is leveraged to ensure Kwas House remains a permanent
            fixture in the community for decades, providing safe and inclusive homes.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="px-4 py-2 bg-surface-container-highest rounded-lg text-primary text-sm font-bold">
              14 Affordable Units
            </div>
            <div className="px-4 py-2 bg-surface-container-highest rounded-lg text-primary text-sm font-bold">
              Community Partnerships
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-2">Project Journey</h2>
          <p className="text-on-surface-variant">
            From a parent-led vision to a community reality.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-outline-variant/30 transform -translate-x-1/2"></div>
          <div className="space-y-12">
            {/* Milestone 1 */}
            <div className="relative flex flex-col md:flex-row items-center group">
              <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                <span className="text-secondary font-bold text-sm">2017 - 2020</span>
                <h4 className="text-xl font-bold text-primary">Vision & Formation</h4>
                <p className="text-on-surface-variant text-sm mt-1">
                  Tillicum Centre parents form a committee and incorporate FISH Society.
                </p>
              </div>
              <div className="z-10 w-4 h-4 rounded-full bg-secondary ring-4 ring-secondary/20"></div>
              <div className="md:w-1/2 md:pl-12"></div>
            </div>
            {/* Milestone 2 */}
            <div className="relative flex flex-col md:flex-row-reverse items-center group">
              <div className="md:w-1/2 md:pl-12 mb-4 md:mb-0">
                <span className="text-secondary font-bold text-sm">2021 - 2022</span>
                <h4 className="text-xl font-bold text-primary">Land & Partnership</h4>
                <p className="text-on-surface-variant text-sm mt-1">
                  Olga Kwas donates the land; Anhart Community Housing joins as development partner.
                </p>
              </div>
              <div className="z-10 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/10"></div>
              <div className="md:w-1/2 md:pr-12"></div>
            </div>
            {/* Milestone 3 */}
            <div className="relative flex flex-col md:flex-row items-center group">
              <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                <span className="text-secondary font-bold text-sm">Current Phase</span>
                <h4 className="text-xl font-bold text-primary">Capital Campaign</h4>
                <p className="text-on-surface-variant text-sm mt-1">
                  Securing the final $1.2M target for the $4.37M total development.
                </p>
              </div>
              <div className="z-10 w-4 h-4 rounded-full bg-secondary ring-4 ring-secondary/20"></div>
              <div className="md:w-1/2 md:pl-12"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
