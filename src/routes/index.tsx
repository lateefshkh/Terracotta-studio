import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Hammer,
  Home,
  Instagram,
  Mail,
  MapPin,
  Menu,
  PencilRuler,
  Phone,
  Sofa,
  Sparkles,
  UserRound,
  Wrench,
  X,
  KeyRound,
  Star,
} from "lucide-react";
import { toast } from "sonner";

import heroHome from "@/assets/hero-home.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import craftDetail from "@/assets/craft-detail.jpg";
import founder from "@/assets/founder.jpg";
import contactStill from "@/assets/contact-still.jpg";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Terracotta Builders | Luxury Custom Homes in Danville, CA" },
      {
        name: "description",
        content:
          "Terracotta Builders crafts luxury custom homes, design-build projects and whole-home renovations across Danville, Alamo, and the San Francisco Bay Area.",
      },
      { property: "og:title", content: "Terracotta Builders | Luxury Custom Homes" },
      {
        property: "og:description",
        content:
          "Homes crafted for generations. Custom home building, design-build and renovations in Danville, California.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#projects" },
  { name: "Craftsmanship", href: "#craftsmanship" },
  { name: "Our Process", href: "#process" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: Home,
    title: "Custom Home Building",
    body: "Ground-up architectural estates built to your land, your light and the way you live.",
    details:
      "We orchestrate complex hillside engineering, geothermal systems, custom framing, and bespoke exterior envelopes. Every detail is monitored under single-point superintendent oversight.",
    specs: [
      "Hillside & Flatland Sites",
      "Custom Structural Engineering",
      "Permit & City Approvals",
      "Full Turnkey Handover",
    ],
  },
  {
    icon: Wrench,
    title: "Design + Build",
    body: "One accountable team from first conceptual sketches through final interior walkthrough.",
    details:
      "Bridging the gap between architectural vision and budget realities early in the process prevents compromises. Our in-house designers work seamlessly with master builders.",
    specs: [
      "Concept to 3D Renderings",
      "Integrated Cost Estimating",
      "Interior Finish Selections",
      "Value Engineering",
    ],
  },
  {
    icon: Sofa,
    title: "Whole Home Renovations",
    body: "Thoughtful reinvention of premier Bay Area estates with reverence for architectural heritage.",
    details:
      "From expanding floor plans to transforming historic Spanish Colonial and mid-century modern residences, we elevate structural integrity while introducing contemporary luxury.",
    specs: [
      "Historic Spanish Restorations",
      "Modern Floorplan Openings",
      "Architectural Additions",
      "Energy Efficiency Retrofits",
    ],
  },
  {
    icon: ClipboardList,
    title: "Estate Project Management",
    body: "Schedules, transparent open-book budgets and master trades held to an uncompromising standard.",
    details:
      "Clients enjoy weekly photo progress reports, proprietary schedule transparency, and direct weekly access to James Morgan and the lead site superintendent.",
    specs: [
      "Open-Book Cost Accounting",
      "Weekly Drone & Site Updates",
      "Vetted Master Craftsmen",
      "10-Year Craftsmanship Warranty",
    ],
  },
];

type ProjectItem = {
  id: string;
  img: string;
  name: string;
  place: string;
  category: "all" | "estates" | "contemporary" | "interiors";
  categoryLabel: string;
  sqft: string;
  year: string;
  description: string;
  architect: string;
  highlights: string[];
};

const PROJECTS: ProjectItem[] = [
  {
    id: "p1",
    img: project1,
    name: "Vista Encantada",
    place: "Danville, California",
    category: "estates",
    categoryLabel: "Spanish Revival Estate",
    sqft: "7,800 sq. ft.",
    year: "2024",
    architect: "Studio Del Mar",
    description:
      "A grand Spanish Colonial Revival estate set upon 2.5 oak-studded hillside acres in west Danville. Features authentic clay barrel-tiled rooflines, handcrafted plaster archways, imported limestone flooring, and an open-air central courtyard.",
    highlights: [
      "Handcrafted plaster archways",
      "Central limestone courtyard fountain",
      "Passive solar courtyard cooling",
    ],
  },
  {
    id: "p4",
    img: project4,
    name: "Hacienda del Sol",
    place: "Diablo, California",
    category: "estates",
    categoryLabel: "Spanish Colonial Villa",
    sqft: "6,400 sq. ft.",
    year: "2025",
    architect: "Terracotta Design Studio",
    description:
      "A sun-drenched sanctuary honoring historic California architecture. Wrapped around ancient olive trees, this residence seamlessly blends indoor living rooms with breezeway loggias, exposed cedar rafters, and handcrafted terracotta pavers.",
    highlights: [
      "Centuries-old olive tree courtyard",
      "Custom handcrafted terracotta tile",
      "Hand-carved solid timber loggia",
    ],
  },
  {
    id: "p5",
    img: project5,
    name: "Ridgeline Sanctuary",
    place: "Danville Foothills, CA",
    category: "contemporary",
    categoryLabel: "Hillside Modern",
    sqft: "8,200 sq. ft.",
    year: "2024",
    architect: "Vance & Partners Architects",
    description:
      "An architectural masterpiece suspended above the Danville hills. Floor-to-ceiling glass pavilions open to a zero-edge travertine pool overlooking Mount Diablo at dusk. Clad in charred horizontal cedar and architectural concrete.",
    highlights: [
      "Motorized glass pocket walls",
      "Cantilevered infinity-edge pool",
      "Board-formed concrete spine",
    ],
  },
  {
    id: "p2",
    img: project2,
    name: "The Oakhurst Kitchen & Salon",
    place: "Alamo, California",
    category: "interiors",
    categoryLabel: "Architectural Interior",
    sqft: "1,850 sq. ft. suite",
    year: "2024",
    architect: "Terracotta Craftsmen Studio",
    description:
      "A bespoke culinary suite featuring custom bookmatched walnut cabinetry, honed Calacatta marble slab islands with waterfall edges, hand-forged patinated bronze hardware, and concealed professional grade scullery.",
    highlights: [
      "Bookmatched walnut cabinetry",
      "Double honed Calacatta islands",
      "Concealed chef's scullery",
    ],
  },
  {
    id: "p3",
    img: project3,
    name: "Orinda Hillside Pavilion",
    place: "Orinda, California",
    category: "contemporary",
    categoryLabel: "Contemporary Residence",
    sqft: "5,900 sq. ft.",
    year: "2023",
    architect: "Loomis Architectural Guild",
    description:
      "Engineered into a steep Orinda slope, this warm minimalist home captures filtered pine light through 14-foot architectural glass. Warm white oak flooring, hand-applied limewash walls, and private outdoor soaking terrace.",
    highlights: [
      "Seismic cliffside foundation",
      "Custom rift-sawn oak millwork",
      "Indoor-outdoor cedar spa deck",
    ],
  },
  {
    id: "p6",
    img: project6,
    name: "The Vintage Cellar & Tasting Salon",
    place: "Lafayette, California",
    category: "interiors",
    categoryLabel: "Artisan Cellar Suite",
    sqft: "1,200 sq. ft.",
    year: "2025",
    architect: "Terracotta Craftsmen Studio",
    description:
      "Subterranean 2,000-bottle wine cellar beneath a historic Spanish compound. Barrel-vaulted antique brick ceiling, integrated ambient brass lighting, dark rift-oak racking, and a monolithic reclaimed timber tasting table.",
    highlights: [
      "Barrel-vaulted reclaimed brick ceiling",
      "Vapor-barrier climate precision",
      "Custom solid bronze hardware",
    ],
  },
];

const STEPS = [
  {
    n: "01",
    icon: UserRound,
    label: "Discover & Feasibility",
    body: "We start on the land. We study your topography, solar orientation, budget parameters, and the daily rhythm of how your family lives.",
  },
  {
    n: "02",
    icon: PencilRuler,
    label: "Design & Engineering",
    body: "Architectural drafts, 3D spatial models, Contra Costa zoning checks, and comprehensive cost accounting develop in harmony.",
  },
  {
    n: "03",
    icon: Hammer,
    label: "Precision Construction",
    body: "Master craftsmen, daily job site protection, weekly digital progress reports, and unannounced quality audits at every trade handover.",
  },
  {
    n: "04",
    icon: KeyRound,
    label: "Deliver & Stewardship",
    body: "A spotless white-glove handover, custom home manuals, and continuous preventative care long after your family moves in.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Terracotta Builders built our home the way we hoped someone still would — patiently, honestly, and with a craftsman's eye on every joint. Two years later, every visitor remarks on the quiet solidity of the house.",
    name: "Sarah & Michael Thompson",
    place: "Lafayette, California",
    project: "7,400 sq. ft. Spanish Revival Estate",
    avatar: client1,
  },
  {
    quote:
      "From breaking ground on our steep Danville hillside to hanging the final art piece, James and his superintendents treated our project as if they were building for their own family. Their cost transparency was refreshing.",
    name: "Marcus & Evelyn Vance",
    place: "Danville, California",
    project: "8,200 sq. ft. Modern Hillside Home",
    avatar: client2,
  },
  {
    quote:
      "Every question was answered before we thought to ask it. Their attention to natural light and acoustic isolation transformed our everyday living experience. Three years on, the home feels brand new.",
    name: "Elena Vasquez",
    place: "Alamo, California",
    project: "Historic Whole-Home Renovation",
    avatar: client1,
  },
];

const FAQS = [
  {
    q: "What is the typical timeline for building a custom luxury home in Danville?",
    a: "Ground-up custom homes typically take 14 to 22 months from architectural completion and Contra Costa County permit approval to move-in. During pre-construction, we front-load all trade scheduling and long-lead material orders to avoid costly on-site delays.",
  },
  {
    q: "Do you collaborate with our existing architect, or do you provide design-build?",
    a: "Both. Over half of our estates are built in collaboration with premier Bay Area and national architectural firms where we serve as the master general contractor during pre-construction and build phases. We also offer integrated in-house Design + Build for clients wanting a seamless single-source experience.",
  },
  {
    q: "How does Terracotta Builders manage budget transparency and prevent surprises?",
    a: "We operate on an open-book transparent model. Prior to breaking ground, you receive an itemized cost schedule with verified trade bids. Throughout construction, you receive bi-weekly accounting updates and photos, so there are never unexpected surprises.",
  },
  {
    q: "Do you handle Contra Costa County permitting, grading, and HOA review?",
    a: "Yes. Having built in Danville, Alamo, Orinda, and Blackhawk for over 25 years, our team navigates local zoning boards, environmental hillside ordinances, tree preservation permits, and architectural review committees with deep local relationships.",
  },
  {
    q: "What kind of warranty and ongoing service do you provide after move-in?",
    a: "We back every custom home with our comprehensive 10-Year Structural and Craftsmanship Warranty. At 30 days, 6 months, and 12 months post-handover, our superintendent conducts proactive seasonal tune-ups and inspections.",
  },
];

function Logo({ tone = "cream" }: { tone?: "cream" | "dark" }) {
  return (
    <a
      href="#"
      className="flex items-center gap-3 group transition-transform duration-300 hover:scale-[1.02]"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8 text-primary transition-transform duration-500 group-hover:rotate-6"
        fill="none"
        aria-hidden="true"
      >
        <path d="M3 15 16 4l13 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M7 14v14h18V14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M13 28v-8h6v8" stroke="currentColor" strokeWidth="1.6" />
      </svg>
      <span className={tone === "cream" ? "text-espresso-foreground" : "text-foreground"}>
        <span className="block font-display text-base leading-none tracking-[0.14em]">
          TERRACOTTA
        </span>
        <span className="mt-1 block text-[0.6rem] tracking-[0.42em] opacity-75 font-sans font-medium">
          BUILDERS
        </span>
      </span>
    </a>
  );
}

function Index() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [projectCategory, setProjectCategory] = useState<
    "all" | "estates" | "contemporary" | "interiors"
  >("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedService, setSelectedService] = useState<(typeof SERVICES)[0] | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Ground-Up Custom Estate",
    budget: "$3M - $5M",
    location: "Danville / Alamo",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProjects =
    projectCategory === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === projectCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error("Please provide your name and email address.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Consultation Request Received", {
        description: `Thank you, ${formData.name}. Our Danville studio will review your project details and contact you within 24 hours.`,
        duration: 5000,
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "Ground-Up Custom Estate",
        budget: "$3M - $5M",
        location: "Danville / Alamo",
        message: "",
      });
    }, 900);
  };

  const t = TESTIMONIALS[activeTestimonial] ?? TESTIMONIALS[0]!;

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-foreground">
      {/* HEADER */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-espresso/95 backdrop-blur-md shadow-lg shadow-black/10 py-3"
            : "bg-espresso/80 backdrop-blur-sm py-5"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-8 px-6 lg:px-12">
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link text-espresso-foreground/75 hover:text-espresso-foreground hover:scale-105 transition-transform"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-[0.6875rem] font-medium tracking-[0.16em] text-primary-foreground uppercase shadow-md shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile navigation menu"
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-espresso-foreground/20 text-espresso-foreground transition-colors hover:bg-espresso-foreground/10"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-espresso-foreground/10 bg-espresso/98 px-6 py-6 backdrop-blur-xl animate-hero-fade">
            <nav className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium tracking-wider uppercase text-espresso-foreground/80 hover:text-primary transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-espresso-foreground/10">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-xs tracking-wider uppercase text-primary-foreground font-medium"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-[96vh] w-full overflow-hidden flex flex-col justify-end">
        <img
          src={heroHome}
          alt="Luxury custom estate in Danville at dusk with warm interior lighting"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/70 to-espresso/35" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.582_0.113_45/0.25),transparent_70%)]" />

        <div className="relative mx-auto flex w-full max-w-[1400px] flex-col justify-end px-6 pb-28 pt-44 lg:px-12">
           
          

          <h1 className="mt-7 max-w-4xl font-display text-5xl leading-[1.08] text-espresso-foreground md:text-6xl lg:text-7xl animate-hero-delay-1">
            Homes Crafted
            <br />
            <span className="text-primary italic font-serif">for Generations.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-espresso-foreground/80 md:text-lg animate-hero-delay-2">
            For over twenty-five years we have built singular custom residences across Danville,
            Alamo, and the greater East Bay. Each home is shaped by its topography, natural light,
            and an uncompromising passion for enduring craftsmanship.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 animate-hero-delay-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-xs tracking-[0.16em] text-primary-foreground font-medium uppercase shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
            >
              <span>Explore Portfolio</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-espresso-foreground/40 bg-espresso/40 px-8 py-4 text-xs tracking-[0.16em] text-espresso-foreground font-medium uppercase backdrop-blur-md transition-all hover:bg-espresso-foreground/15 hover:border-espresso-foreground"
            >
              <span>Request Consultation</span>
            </a>
          </div>

          {/* Trust stats bar */}
          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-espresso-foreground/15 pt-8 sm:grid-cols-4 animate-hero-delay-3">
            {[
              { num: "25+", label: "Years in Danville & East Bay" },
              { num: "65+", label: "Custom Estates Completed" },
              { num: "$3M – $20M+", label: "Project Investment Range" },
              { num: "10-Year", label: "Craftsmanship & Structural Care" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-display text-3xl font-normal text-espresso-foreground sm:text-4xl">
                  {stat.num}
                </span>
                <span className="mt-1 text-xs text-espresso-foreground/60 tracking-wider uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-background py-24 lg:py-32 scroll-mt-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,2fr)]">
            <div>
              <p className="eyebrow">Comprehensive Expertise</p>
              <h2 className="mt-4 font-display text-4xl leading-[1.15] text-foreground lg:text-[2.75rem]">
                Master Building Services, Tailored to Your Vision.
              </h2>
              <div className="mt-6 h-1 w-16 bg-primary" />
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                We bridge high architecture with on-site artisan execution, maintaining strict cost
                transparency and relentless schedule discipline from ground-breaking to occupancy.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {SERVICES.map((service) => {
                const Icon = service.icon;
                return (
                  <article
                    key={service.title}
                    className="group relative flex flex-col justify-between rounded-xl border border-border/80 bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/40"
                  >
                    <div>
                      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-6 w-6" strokeWidth={1.4} />
                      </div>
                      <h3 className="font-display text-2xl text-card-foreground">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {service.body}
                      </p>

                      <ul className="mt-6 space-y-2 border-t border-border/50 pt-5">
                        {service.specs.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-xs text-foreground/80"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className="mt-7 inline-flex items-center gap-2 text-[0.6875rem] font-medium tracking-[0.18em] text-primary uppercase transition-all group-hover:text-primary/80 group-hover:gap-3"
                    >
                      <span>Explore Scope</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO / PROJECTS */}
      <section
        id="projects"
        className="bg-beige/40 py-24 lg:py-32 border-y border-border/50 scroll-mt-20"
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Curated Portfolio</p>
              <h2 className="mt-4 font-display text-4xl leading-[1.15] text-foreground lg:text-[2.75rem]">
                Inspired Spaces. Built Beautifully.
              </h2>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All Projects" },
                { id: "estates", label: "Spanish Estates" },
                { id: "contemporary", label: "Contemporary" },
                { id: "interiors", label: "Artisan Interiors" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() =>
                    setProjectCategory(tab.id as "all" | "estates" | "contemporary" | "interiors")
                  }
                  className={`rounded-full px-5 py-2.5 text-xs font-medium tracking-wider uppercase transition-all duration-200 ${
                    projectCategory === tab.id
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105"
                      : "bg-card/80 text-foreground/75 hover:bg-card hover:text-foreground border border-border/60"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((p) => (
              <figure
                key={p.id}
                onClick={() => setSelectedProject(p)}
                className="group cursor-pointer overflow-hidden rounded-xl border border-border/60 bg-card shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/40"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-6">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-medium text-espresso shadow-lg">
                      <span>View Project Details</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                  <span className="absolute top-4 left-4 rounded-full bg-espresso/80 px-3.5 py-1 text-[0.625rem] font-medium tracking-widest uppercase text-espresso-foreground backdrop-blur-md">
                    {p.categoryLabel}
                  </span>
                </div>

                <figcaption className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl text-card-foreground group-hover:text-primary transition-colors">
                      {p.name}
                    </h3>
                    <span className="text-xs font-medium text-muted-foreground">{p.year}</span>
                  </div>
                  <p className="mt-1 text-xs tracking-wider text-muted-foreground uppercase flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                    <span>{p.place}</span>
                  </p>
                  <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-4 text-xs font-medium text-primary">
                    <span className="text-muted-foreground font-normal">{p.sqft}</span>
                    <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Inspect Residence <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CRAFTSMANSHIP SPOTLIGHT */}
      <section
        id="craftsmanship"
        className="bg-espresso text-espresso-foreground py-24 lg:py-32 scroll-mt-20 overflow-hidden relative"
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 relative z-10">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="eyebrow text-primary">The Studio Philosophy</p>
              <h2 className="mt-4 font-display text-4xl leading-[1.15] text-espresso-foreground lg:text-[2.75rem]">
                The Anatomy of Enduring Architecture.
              </h2>
              <div className="mt-6 h-1 w-16 bg-primary" />
              <p className="mt-6 text-sm leading-relaxed text-espresso-foreground/80">
                True luxury is found in what is felt before it is seen. The soundproofing between
                rooms, the heft of custom-milled white oak entry doors, hand-hewn structural
                trusses, and tactile Spanish clay pavers that have weathered decades of California
                sun.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {[
                  {
                    title: "Hand-Hewn Joinery",
                    desc: "Solid European white oak beams mortised and tenoned on-site by master timberwrights.",
                  },
                  {
                    title: "Authentic Terracotta",
                    desc: "Hand-pressed clay roof tiles and pavers sourced from generational Mediterranean kilns.",
                  },
                  {
                    title: "Passive Thermal Envelopes",
                    desc: "Continuous exterior insulation, high-performance thermal glazing, and airtight building wraps.",
                  },
                  {
                    title: "Unlacquered Solid Brass",
                    desc: "Custom architectural hardware finished to develop a rich, living patina over decades.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-espresso-foreground/15 bg-espresso/60 p-5 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-2 text-primary">
                      <Sparkles className="h-4 w-4" />
                      <h4 className="font-display text-base text-espresso-foreground">
                        {item.title}
                      </h4>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-espresso-foreground/70">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-xs tracking-[0.16em] text-primary-foreground font-medium uppercase shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-105"
                >
                  <span>Discuss Your Project Vision</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-espresso-foreground/15">
                <img
                  src={craftDetail}
                  alt="Architectural workshop with blueprints, European oak and terracotta tile samples"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full object-cover aspect-[4/3] lg:aspect-square hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent flex items-end p-8">
                  <div className="rounded-xl bg-espresso/90 border border-white/10 p-5 backdrop-blur-md">
                    <p className="text-xs uppercase tracking-widest text-primary font-medium">
                      Workshop Artifact
                    </p>
                    <p className="font-display text-lg text-espresso-foreground mt-1">
                      Material Sample Archive & Blueprint Suite
                    </p>
                    <p className="text-xs text-espresso-foreground/70 mt-1">
                      Danville Design Studio · Hartz Avenue
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY / FOUNDER */}
      <section id="about" className="bg-background py-24 lg:py-32 scroll-mt-20">
        <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-6 lg:grid-cols-2 lg:px-12">
          <div className="relative overflow-hidden rounded-2xl shadow-card border border-border/60">
            <img
              src={founder}
              alt="James Morgan, founder of Terracotta Builders, reviewing plans in his Danville studio"
              loading="lazy"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-card/95 p-6 backdrop-blur-md border border-border/80 shadow-lg">
              <p className="font-display text-2xl text-card-foreground">James Morgan</p>
              <p className="mt-1 text-xs tracking-widest text-primary uppercase font-medium">
                Founder & Master Builder · CSLB License #1042887
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow">Our Legacy</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.15] text-foreground lg:text-[2.75rem]">
              Built on Integrity.
              <br />
              <span className="text-primary italic font-serif">
                Focused on Timeless Excellence.
              </span>
            </h2>
            <div className="mt-6 h-1 w-16 bg-primary" />
            <p className="mt-8 text-base leading-relaxed text-muted-foreground">
              Terracotta Builders began over twenty-five years ago in a small Danville workshop with
              a simple conviction: a home should outlive the people who build it. That guiding
              belief still directs every joint, every structural calculation, and every frank
              conversation we have with our homeowners.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              We purposefully limit our active construction calendar to no more than five concurrent
              estates. This guarantees that James Morgan and our veteran superintendents remain
              actively present on your job site every single week.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8">
              <div>
                <span className="font-display text-3xl font-normal text-primary">100%</span>
                <p className="mt-1 text-xs tracking-wider uppercase text-muted-foreground">
                  On-Time Move-In Record
                </p>
              </div>
              <div>
                <span className="font-display text-3xl font-normal text-primary">Danville</span>
                <p className="mt-1 text-xs tracking-wider uppercase text-muted-foreground">
                  Founded & Based Locally
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        id="process"
        className="bg-card py-24 lg:py-32 border-y border-border/60 scroll-mt-20"
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,2.2fr)]">
            <div>
              <p className="eyebrow">Methodical Execution</p>
              <h2 className="mt-4 font-display text-4xl leading-[1.15] text-card-foreground lg:text-[2.75rem]">
                A Meticulous Process. From Ground-Breaking to Keys.
              </h2>
              <div className="mt-6 h-1 w-16 bg-primary" />
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                We remove ambiguity through disciplined scheduling, weekly owner communication, and
                unannounced site audits at every trade transition.
              </p>
              <a
                href="#contact"
                className="mt-9 inline-flex items-center gap-2 rounded-full border border-primary px-7 py-3.5 text-xs tracking-[0.16em] text-primary uppercase font-medium transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <span>Initiate Your Project</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map(({ n, icon: Icon, label, body }) => (
                <div
                  key={n}
                  className="relative rounded-xl border border-border/80 bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-primary/50"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md shadow-primary/25">
                      <Icon className="h-6 w-6" strokeWidth={1.4} />
                    </span>
                    <span className="font-display text-2xl font-bold text-primary/40">{n}</span>
                  </div>
                  <h3 className="mt-6 font-display text-lg text-foreground">{label}</h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-primary py-24 text-primary-foreground relative overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-primary-foreground text-primary-foreground" />
            ))}
            <span className="text-xs uppercase tracking-widest text-primary-foreground/80 font-medium ml-2">
              Verified East Bay Homeowners
            </span>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[auto_minmax(0,1fr)_auto]">
            <span className="font-display text-8xl leading-none opacity-30 select-none">“</span>
            <blockquote className="font-display text-2xl leading-relaxed italic md:text-3xl transition-opacity duration-300">
              {t.quote}
            </blockquote>
            <div className="flex items-center gap-4 rounded-2xl bg-black/15 p-4 backdrop-blur-sm border border-primary-foreground/20">
              <img
                src={t.avatar}
                alt={t.name}
                loading="lazy"
                width={128}
                height={128}
                className="h-16 w-16 rounded-full object-cover border-2 border-primary-foreground/40"
              />
              <div>
                <p className="text-base font-medium">{t.name}</p>
                <p className="text-xs tracking-wider uppercase opacity-80">{t.place}</p>
                <p className="text-[0.6875rem] opacity-65 mt-0.5">{t.project}</p>
              </div>
            </div>
          </div>

          <div className="mt-14 flex items-center justify-between border-t border-primary-foreground/20 pt-8">
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() =>
                  setActiveTestimonial((i) => (i + TESTIMONIALS.length - 1) % TESTIMONIALS.length)
                }
                className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/40 transition-all hover:bg-primary-foreground/20 active:scale-95"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => setActiveTestimonial((i) => (i + 1) % TESTIMONIALS.length)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/40 transition-all hover:bg-primary-foreground/20 active:scale-95"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="flex gap-2.5">
              {TESTIMONIALS.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Testimonial ${i + 1}`}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === activeTestimonial
                      ? "w-8 bg-primary-foreground"
                      : "w-2.5 bg-primary-foreground/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION SECTION */}
      <section id="faq" className="bg-background py-24 lg:py-32 scroll-mt-20">
        <div className="mx-auto max-w-[1000px] px-6 lg:px-12">
          <div className="text-center">
            <p className="eyebrow">Frequently Asked Questions</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.15] text-foreground lg:text-[2.75rem]">
              Clarity on Building Your Estate.
            </h2>
            <div className="mx-auto mt-6 h-1 w-16 bg-primary" />
          </div>

          <div className="mt-14 space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = expandedFaq === index;
              return (
                <div
                  key={faq.q}
                  className={`overflow-hidden rounded-xl border transition-all duration-200 ${
                    isOpen
                      ? "border-primary/50 bg-card shadow-md"
                      : "border-border/80 bg-card/60 hover:border-border"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setExpandedFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-6 text-left transition-colors"
                  >
                    <span className="font-display text-lg text-foreground pr-4">{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-primary shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm leading-relaxed text-muted-foreground border-t border-border/40 animate-hero-fade">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT & CONSULTATION BOOKING FORM */}
      <section
        id="contact"
        className="bg-beige/40 py-24 lg:py-32 border-t border-border/60 scroll-mt-20"
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Get in Touch</p>
              <h2 className="mt-4 font-display text-4xl leading-[1.15] text-foreground lg:text-[2.75rem]">
                Let's Build Something Extraordinary Together.
              </h2>
              <div className="mt-6 h-1 w-16 bg-primary" />
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Whether you have an architect's set of plans or are just exploring the potential of
                a piece of land in Danville, Alamo, or Lafayette, we welcome an initial confidential
                conversation.
              </p>

              <div className="mt-10 overflow-hidden rounded-2xl shadow-card border border-border/80">
                <img
                  src={contactStill}
                  alt="Stylized terracotta pottery and design monographs in our Danville studio"
                  loading="lazy"
                  width={1024}
                  height={1200}
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>

              <dl className="mt-10 space-y-4 text-sm text-foreground">
                {[
                  { icon: Phone, text: "(925) 555-0148", desc: "Mon–Fri 8am–5pm PST" },
                  {
                    icon: Mail,
                    text: "studio@terracottabuilders.com",
                    desc: "Private client inquiries",
                  },
                  {
                    icon: MapPin,
                    text: "410 Hartz Avenue, Danville, CA 94526",
                    desc: "By appointment",
                  },
                  {
                    icon: Home,
                    text: "Serving Danville, Alamo, Orinda, Diablo & East Bay",
                    desc: "Licensed General Contractor",
                  },
                ].map(({ icon: Icon, text, desc }) => (
                  <div
                    key={text}
                    className="flex items-start gap-4 rounded-xl border border-border/60 bg-card p-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                      <Icon className="h-5 w-5" strokeWidth={1.4} />
                    </span>
                    <div>
                      <p className="font-medium text-foreground">{text}</p>
                      <p className="text-xs text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            {/* Interactive Form */}
            <div className="rounded-2xl border border-border/80 bg-card p-8 shadow-xl sm:p-10">
              <h3 className="font-display text-2xl text-card-foreground">
                Schedule a Consultation
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Provide preliminary details about your property or vision. We will follow up to
                arrange an in-studio or on-site meeting.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-foreground mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. eleanor@vance.com"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(925) 555-0100"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-foreground mb-2">
                      Property City / Area
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option>Danville</option>
                      <option>Alamo</option>
                      <option>Diablo</option>
                      <option>Orinda</option>
                      <option>Lafayette</option>
                      <option>Blackhawk</option>
                      <option>Other Bay Area Location</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-foreground mb-2">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option>Ground-Up Custom Estate</option>
                      <option>Integrated Design + Build</option>
                      <option>Whole-Home Transformation</option>
                      <option>Architectural Addition / Cellar</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-foreground mb-2">
                      Anticipated Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option>$1.5M – $3M</option>
                      <option>$3M – $5M</option>
                      <option>$5M – $10M</option>
                      <option>$10M+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-foreground mb-2">
                    Project Details & Site Notes
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your property, architectural preferences, desired timeline, or any existing plans..."
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-primary py-4 text-xs font-medium tracking-[0.18em] uppercase text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Submit Consultation Request</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-[0.6875rem] text-muted-foreground">
                  Your information is kept completely confidential under strict privacy standards.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-espresso pt-20 pb-12 text-espresso-foreground border-t border-espresso-foreground/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <Logo />
              <p className="mt-6 max-w-xs text-sm leading-6 text-espresso-foreground/65">
                Luxury custom home building, architectural design-build and estate renovations
                across Danville, Alamo, and the San Francisco Bay Area.
              </p>
              <div className="mt-7 flex gap-3">
                {[Instagram, Home, Hammer].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Social profile"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-espresso-foreground/25 transition-all hover:border-primary hover:text-primary hover:scale-110"
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.4} />
                  </a>
                ))}
              </div>
            </div>

            {[
              {
                title: "Navigation",
                links: [
                  { name: "About the Studio", href: "#about" },
                  { name: "Building Services", href: "#services" },
                  { name: "Curated Portfolio", href: "#projects" },
                  { name: "Our Process", href: "#process" },
                  { name: "Frequently Asked Questions", href: "#faq" },
                ],
              },
              {
                title: "Practice Areas",
                links: [
                  { name: "Ground-Up Custom Homes", href: "#services" },
                  { name: "Architectural Design + Build", href: "#services" },
                  { name: "Whole-Home Transformations", href: "#services" },
                  { name: "Wine Cellars & Tasting Rooms", href: "#services" },
                  { name: "Hillside & Cantilever Engineering", href: "#services" },
                ],
              },
              {
                title: "Danville Studio",
                links: [
                  { name: "410 Hartz Avenue", href: "#contact" },
                  { name: "Danville, CA 94526", href: "#contact" },
                  { name: "(925) 555-0148", href: "tel:9255550148" },
                  {
                    name: "studio@terracottabuilders.com",
                    href: "mailto:studio@terracottabuilders.com",
                  },
                ],
              },
            ].map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-medium tracking-[0.22em] text-primary uppercase">
                  {col.title}
                </h3>
                <ul className="mt-6 space-y-3 text-sm text-espresso-foreground/65">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="transition-colors hover:text-espresso-foreground"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-espresso-foreground/15 pt-8 text-xs tracking-wider text-espresso-foreground/50 uppercase">
            <p>
              © 2026 Terracotta Builders. All rights reserved. California License CSLB #1042887.
            </p>
            <p className="flex items-center gap-2">
              <span>Danville</span>
              <span>·</span>
              <span>Alamo</span>
              <span>·</span>
              <span>Diablo</span>
              <span>·</span>
              <span>Orinda</span>
            </p>
          </div>
        </div>
      </footer>

      {/* PROJECT LIGHTBOX MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-hero-fade">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card border border-border shadow-2xl p-6 sm:p-8">
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project modal"
              className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground hover:bg-muted transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={selectedProject.img}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover aspect-[4/5]"
                />
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <span className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs uppercase font-medium tracking-wider">
                    {selectedProject.categoryLabel}
                  </span>
                  <h3 className="font-display text-3xl text-card-foreground mt-3">
                    {selectedProject.name}
                  </h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider flex items-center gap-1.5 mt-1">
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                    <span>{selectedProject.place}</span>
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-4 border-y border-border py-4 text-xs">
                    <div>
                      <span className="text-muted-foreground uppercase tracking-wider block">
                        Scale
                      </span>
                      <span className="font-medium text-foreground">{selectedProject.sqft}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground uppercase tracking-wider block">
                        Completed
                      </span>
                      <span className="font-medium text-foreground">{selectedProject.year}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-muted-foreground uppercase tracking-wider block">
                        Architecture
                      </span>
                      <span className="font-medium text-foreground">
                        {selectedProject.architect}
                      </span>
                    </div>
                  </div>

                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                    {selectedProject.description}
                  </p>

                  <div className="mt-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      Signature Details
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {selectedProject.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-xs text-foreground/80">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border flex gap-4">
                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 text-center rounded-full bg-primary py-3 text-xs font-medium uppercase tracking-wider text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Inquire About This Style
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SERVICE DETAIL MODAL */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-hero-fade">
          <div className="relative w-full max-w-xl rounded-2xl bg-card border border-border shadow-2xl p-6 sm:p-8">
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              aria-label="Close service modal"
              className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground hover:bg-muted transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <selectedService.icon className="h-6 w-6" />
            </span>
            <h3 className="font-display text-2xl text-card-foreground mt-4">
              {selectedService.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {selectedService.details}
            </p>

            <h4 className="mt-6 text-xs font-semibold uppercase tracking-wider text-foreground">
              Included Deliverables
            </h4>
            <ul className="mt-3 space-y-2">
              {selectedService.specs.map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs text-foreground/85">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-border flex gap-4">
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="w-full text-center rounded-full bg-primary py-3 text-xs font-medium uppercase tracking-wider text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Discuss This Service
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
