import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Story of a Forever Home | About Us",
  description: "Learn about the Fraser Inclusive and Supportive Housing Society's story, our community values, and the dedicated Board of Directors behind Kwas House.",
};

export default function About() {
  const fishDirectors = [
    { name: "Garry Vath", description: "Retired VPD officer and former firefighter." },
    { name: "Frank Wise", description: "President of the Hope Lions Club." },
    { name: "Naomi Bergstrom", description: "Executive Director at Tillicum Centre for 15+ years." },
    { name: "Jan Bentley", description: "Long-time Hope resident, retired from Victim Services." },
    { name: "Marlene Schmidt", description: "Treasurer for the Tillicum Centre." },
  ];

  const anhartPartners = [
    { name: "Gordon 'Keith' Wiebe", description: "Executive Director of Anhart Community Housing Society." },
    { name: "Crystal Wiebe", description: "Financial oversight and tenant support database developer." },
    { name: "Marcie Good", description: "Communications and website content lead." },
    { name: "Vy Nguyen", description: "Executive administration and Sustainable Villages lead." },
    { name: "Christine Wang", description: "Housing consultancy and financial management." },
  ];

  return (
    <>
      {/* Hero Section: A Foundation of Kinship & Dignity */}
      <section className="relative px-8 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
              OUR STORY
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-primary leading-tight tracking-tighter mb-8">
              The Story of a <br />
              <span className="text-secondary-container">Forever Home</span>
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-xl">
              In 2017, a group of parents in Hope, BC, connected through the Tillicum Centre, began asking a tough question: Who would look after their adult children with cognitive challenges when they no longer could? 
              <br /><br />
              In 2020, they formed the Fraser Inclusive and Supportive Housing Society (FISH). With a generous land donation from Olga Kwas and a partnership with Anhart Community Housing, the dream of Kwas House became possible.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/project" className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary/90 transition-all text-center">
                Explore The Project
              </Link>
              <Link href="https://kwashouse.org/donate/" className="bg-surface-container-high text-primary px-8 py-4 rounded-lg font-bold hover:bg-surface-container-highest transition-all text-center">
                Support Us
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl transform rotate-2">
              <img
                alt="diverse group of people laughing together"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtyky0IcD1UGEgnz_d9X8v62L89T-2x3CQxYB3DwBGislVvS0F4av2Q0-RDjhg3m6JKm917MRLDtnvvkGIdQo95uRZzHGJt1PQnMrngRVqp_sGYrrEfMerLvKLE64J72xYhmeTzqzECFtMDBmc4bZgjGvneVX_RtLsu83Ovh4RqZe8afrbfzd4D2HAbUVJ-j7-AkodWALRhqbAY_6FuKLTfslSH7TzEL1kv1sjsFCtCoCuxbScYO5RlOvExw_gQLDMP1ygEiKLo_M"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-64 aspect-square rounded-2xl overflow-hidden shadow-xl transform -rotate-3 border-8 border-background">
              <img
                alt="hands reaching out"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuANdOKRLNwHtdEpfsMLQfXXIkDdTKTnlpoxWDlAjLKbMMy-s7o626cGwHC1Lw_uEXqhtRj1P4zMqs3x7zEMOpKGSVhh8yZhmJDZWSsQp8QMmO4cz-cizXs2M-GBvzyj07AeEBc5WcivAlbZvqDCW7cxSVQNODt18ywW3DpWHKBRaMQvQh8vNeBxh0QXuSLaFXTdUAb8bwg9EPVovuk9LL4eXLsFEj8nEDua-jpOyNK6l7oiR4qXFnTRVwIzTZC8hHnqFQvaLHjnpcU"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Inspirational Quotes */}
      <section className="bg-primary text-white py-24 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <p className="text-2xl italic leading-relaxed">
              &quot;Let&apos;s look past the disabled part and think about their wants, their needs and desires like everybody else does. Let&apos;s give them a forever home.&quot;
            </p>
            <p className="font-bold">— Naomi Bergstrom, Executive Director at Tillicum Centre</p>
          </div>
          <div className="space-y-6">
            <p className="text-2xl italic leading-relaxed">
              &quot;He&apos;s got to be set up for the future, for his independence. It would be better for him to live with people that he has a connection with.&quot;
            </p>
            <p className="font-bold">— Garry Vath, Parent & FISH Director</p>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
              LEADERSHIP
            </span>
            <h2 className="text-4xl font-extrabold text-primary tracking-tight mb-2">
              FISH Board of Directors
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {fishDirectors.map((director) => (
              <div key={director.name} className="group p-6 bg-surface-container-low rounded-xl">
                <h4 className="text-xl font-bold text-primary">{director.name}</h4>
                <p className="text-on-surface-variant text-sm mt-2">{director.description}</p>
              </div>
            ))}
          </div>

          <div className="mb-16">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
              PARTNERS
            </span>
            <h2 className="text-4xl font-extrabold text-primary tracking-tight">
              Anhart Development Team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {anhartPartners.map((partner) => (
              <div key={partner.name} className="group p-6 bg-surface-container-low rounded-xl">
                <h4 className="text-xl font-bold text-primary">{partner.name}</h4>
                <p className="text-on-surface-variant text-sm mt-2">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Component: Community Spotlight */}
      <section className="py-24 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto bg-primary rounded-[2.5rem] p-12 lg:p-20 relative text-white flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Join the <br />
              <span className="text-secondary-container">Dream of Home</span>
            </h2>
            <p className="text-on-primary-container text-lg mb-10 leading-relaxed">
              We are building a future where no one is left behind. Your support provides the 
              stability and kinship needed for adults with cognitive challenges to thrive in 
              their own community.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://kwashouse.org/donate/"
                className="bg-secondary-container text-primary font-bold px-10 py-5 rounded-full hover:shadow-[0_0_20px_rgba(253,169,69,0.4)] transition-all active:scale-95"
              >
                Become a Partner
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                alt="workshop"
                className="w-full h-[400px] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfPAGJEuGyA8UealKiXr3DLfal5zGUKMGSLB78Ah70p2fUUOtM3OS98YdOfMoPPfOTd5NSXWFd4BKpacy994UkDg6_x3L-4pKfDCTjJ-ihINFKVoadPXLmsStJa7xER3c2BEEQvAbU7PahF5-E3ko8YpSjN4Shzg9t6H0xSnw4EICstm6m5ol3hyFDkC_0R3uEvTKJ5WvyPxQVM60O78xH8w6morx6hxzBG9dQFrjXgi90dqLBiz21X9ACi1GH11GauSZAZliTa74"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary-container rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary-container rounded-full opacity-30 blur-3xl"></div>
          </div>
        </div>
      </section>
    </>
  );
}
