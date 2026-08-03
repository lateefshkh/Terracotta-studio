import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Hammer,
  Home,
  Instagram,
  Mail,
  MapPin,
  PencilRuler,
  Phone,
  Sofa,
  UserRound,
  Wrench,
  KeyRound,
} from "lucide-react";

import heroHome from "@/assets/hero-home.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import founder from "@/assets/founder.jpg";
import contactStill from "@/assets/contact-still.jpg";
import client1 from "@/assets/client-1.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Terracotta Builders | Luxury Custom Homes in Danville, CA" },
      {
        name: "description",
        content:
          "Terracotta Builders crafts luxury custom homes, design-build projects and whole-home renovations across Danville and the Bay Area.",
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

const NAV = ["Home", "About", "Services", "Portfolio", "Our Process", "Journal", "Contact"];

const SERVICES = [
  {
    icon: Home,
    title: "Custom Home Building",
    body: "Ground-up estates built to your land, your light and the way you live.",
  },
  {
    icon: Wrench,
    title: "Design + Build",
    body: "One accountable team from first sketch through final walkthrough.",
  },
  {
    icon: Sofa,
    title: "Whole Home Renovations",
    body: "Thoughtful reinvention of existing homes with respect for their bones.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    body: "Schedules, budgets and trades held to a single exacting standard.",
  },
];

const PROJECTS = [
  { img: project1, name: "Vista Encantada", place: "Danville, California" },
  { img: project2, name: "The Oakhurst Kitchen", place: "Alamo, California" },
  { img: project3, name: "Ridgeline Residence", place: "Orinda, California" },
];

const STEPS = [
  { n: "01", icon: UserRound, label: "Discover", body: "We listen first — site, budget, and the life you want inside it." },
  { n: "02", icon: PencilRuler, label: "Design", body: "Architecture, interiors and estimating advance together." },
  { n: "03", icon: Hammer, label: "Build", body: "Master trades, weekly reporting, no surprises on site." },
  { n: "04", icon: KeyRound, label: "Deliver", body: "A meticulous handover and care long after move-in." },
];

const TESTIMONIALS = [
  {
    quote:
      "They built our home the way we hoped someone still would — patiently, honestly, and with a craftsman's eye on every detail.",
    name: "Sarah & Michael Thompson",
    place: "Lafayette, California",
  },
  {
    quote:
      "Every question was answered before we thought to ask it. Three years on, the house still feels brand new.",
    name: "Elena Vasquez",
    place: "Danville, California",
  },
];

function Logo({ tone = "cream" }: { tone?: "cream" | "dark" }) {
  return (
    <div className="flex items-center gap-3">
      <svg viewBox="0 0 32 32" className="h-8 w-8 text-primary" fill="none" aria-hidden="true">
        <path d="M3 15 16 4l13 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M7 14v14h18V14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M13 28v-8h6v8" stroke="currentColor" strokeWidth="1.4" />
      </svg>
      <span className={tone === "cream" ? "text-espresso-foreground" : "text-foreground"}>
        <span className="block font-display text-base leading-none tracking-[0.14em]">TERRACOTTA</span>
        <span className="mt-1 block text-[0.6rem] tracking-[0.42em] opacity-70">BUILDERS</span>
      </span>
    </div>
  );
}

function Index() {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];

  return (
    <div className="min-h-screen bg-background">
      {/* HEADER */}
      <header className="fixed inset-x-0 top-0 z-50 bg-espresso/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-8 px-6 py-4 lg:px-12">
          <Logo />
          <nav className="hidden items-center gap-8 xl:flex">
            {NAV.map((item, i) => (
              <a
                key={item}
                href="#"
                className={`nav-link ${
                  i === 0
                    ? "border-b border-primary pb-1 text-espresso-foreground"
                    : "text-espresso-foreground/70 hover:text-espresso-foreground"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-primary px-6 py-3 text-[0.6875rem] tracking-[0.16em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
          >
            Let's Talk
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[92vh] w-full overflow-hidden">
        <img
          src={heroHome}
          alt="Luxury custom home at dusk with warm interior lighting"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top_right,oklch(0.235_0.018_55/0.92),oklch(0.235_0.018_55/0.55)_45%,transparent_85%)]" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-[1400px] flex-col justify-end px-6 pb-24 pt-40 lg:px-12">
          <p className="eyebrow">Luxury Custom Home Builder</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.08] text-espresso-foreground md:text-6xl lg:text-7xl">
            Homes Crafted
            <br />
            for Generations
          </h1>
          <p className="mt-7 max-w-xl text-sm leading-7 text-espresso-foreground/75">
            For over twenty-five years we have built singular custom homes across Danville and the
            greater Bay Area. Each one is shaped by its site, its family, and an obsession with the
            details no one is meant to notice.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-primary px-8 py-4 text-[0.6875rem] tracking-[0.16em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
            >
              View Our Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-espresso-foreground/50 px-8 py-4 text-[0.6875rem] tracking-[0.16em] text-espresso-foreground uppercase transition-colors hover:bg-espresso-foreground/10"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,2fr)] lg:px-12">
          <div>
            <p className="eyebrow">What We Do</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.15] lg:text-[2.75rem]">
              Comprehensive Building Services, Tailored to You.
            </h2>
            <div className="mt-8 h-px w-16 bg-primary" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {SERVICES.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="flex flex-col bg-card p-8 shadow-card transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="mb-7 inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.3} />
                </span>
                <h3 className="font-display text-xl leading-snug">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{body}</p>
                <a
                  href="#"
                  className="mt-7 inline-flex items-center gap-2 text-[0.625rem] tracking-[0.2em] text-primary uppercase"
                >
                  Learn More <ArrowRight className="h-3 w-3" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-beige py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,2.2fr)] lg:px-12">
          <div>
            <p className="eyebrow">Featured Projects</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.15] lg:text-[2.75rem]">
              Inspired Spaces.
              <br />
              Built Beautifully.
            </h2>
            <a
              href="#"
              className="mt-9 inline-block rounded-full border border-primary px-7 py-3.5 text-[0.6875rem] tracking-[0.16em] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              View All Projects
            </a>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {PROJECTS.map((p) => (
              <figure key={p.name} className="group">
                <div className="overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="pt-6">
                  <h3 className="font-display text-xl">{p.name}</h3>
                  <p className="mt-2 text-[0.625rem] tracking-[0.2em] text-muted-foreground uppercase">
                    {p.place}
                  </p>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center gap-2 text-[0.625rem] tracking-[0.2em] text-primary uppercase"
                  >
                    View Project <ArrowRight className="h-3 w-3" />
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-6 lg:grid-cols-2 lg:px-12">
          <img
            src={founder}
            alt="James Morgan, founder of Terracotta Builders, in his study"
            loading="lazy"
            width={1024}
            height={1280}
            className="aspect-[4/5] w-full object-cover"
          />
          <div>
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.15] lg:text-[2.75rem]">
              Built on Integrity.
              <br />
              <span className="text-primary">Focused on Excellence.</span>
            </h2>
            <p className="mt-8 text-sm leading-7 text-muted-foreground">
              Terracotta Builders began in a small Danville workshop with a simple conviction: a home
              should outlive the people who build it. That belief still governs every joint, every
              schedule and every conversation we have with a client.
            </p>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              We keep our calendar deliberately small so the same team you meet on day one is the team
              standing in your entryway on move-in day.
            </p>
            <p className="mt-10 font-display text-3xl italic text-primary">James Morgan</p>
            <p className="mt-3 text-[0.625rem] tracking-[0.2em] text-muted-foreground uppercase">
              James Morgan, Founder
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-card py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,2.2fr)] lg:px-12">
          <div>
            <p className="eyebrow">Our Process</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.15] lg:text-[2.75rem]">
              A Thoughtful Process. From Start to Finish.
            </h2>
            <a
              href="#"
              className="mt-9 inline-block rounded-full border border-primary px-7 py-3.5 text-[0.6875rem] tracking-[0.16em] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              How We Work
            </a>
          </div>
          <div className="relative grid gap-10 sm:grid-cols-4">
            <div className="absolute top-8 right-8 left-8 hidden border-t border-dashed border-primary/40 sm:block" />
            {STEPS.map(({ n, icon: Icon, label, body }) => (
              <div key={n} className="relative">
                <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Icon className="h-6 w-6" strokeWidth={1.3} />
                </span>
                <p className="mt-6 text-[0.625rem] tracking-[0.2em] text-primary">{n}</p>
                <h3 className="mt-2 text-xs font-semibold tracking-[0.18em] uppercase">{label}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-primary py-20 text-primary-foreground lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-[auto_minmax(0,1fr)_auto]">
            <span className="font-display text-8xl leading-none opacity-40 select-none">“</span>
            <blockquote className="font-display text-2xl leading-relaxed italic lg:text-[1.75rem]">
              {t.quote}
            </blockquote>
            <div className="flex items-center gap-4">
              <img
                src={client1}
                alt={t.name}
                loading="lazy"
                width={512}
                height={512}
                className="h-16 w-16 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium">{t.name}</p>
                <p className="mt-1 text-[0.625rem] tracking-[0.2em] uppercase opacity-75">{t.place}</p>
              </div>
            </div>
          </div>
          <div className="mt-12 flex items-center gap-6">
            <button
              aria-label="Previous testimonial"
              onClick={() => setActive((i) => (i + TESTIMONIALS.length - 1) % TESTIMONIALS.length)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/40 transition-colors hover:bg-primary-foreground/10"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              aria-label="Next testimonial"
              onClick={() => setActive((i) => (i + 1) % TESTIMONIALS.length)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/40 transition-colors hover:bg-primary-foreground/10"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <div className="ml-2 flex gap-2">
              {TESTIMONIALS.map((item, i) => (
                <button
                  key={item.name}
                  aria-label={`Testimonial ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`h-1.5 w-1.5 rounded-full transition-opacity ${
                    i === active ? "bg-primary-foreground" : "bg-primary-foreground/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-background py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-6 lg:grid-cols-2 lg:px-12">
          <img
            src={contactStill}
            alt="Styled console table with terracotta vase and books"
            loading="lazy"
            width={1024}
            height={1200}
            className="aspect-[4/5] w-full object-cover"
          />
          <div>
            <p className="eyebrow">Get in Touch</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.15] lg:text-[2.75rem]">
              Let's Build Something Extraordinary Together.
            </h2>
            <a
              href="#"
              className="mt-9 inline-block rounded-full bg-primary px-8 py-4 text-[0.6875rem] tracking-[0.16em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
            >
              Schedule a Consultation
            </a>
            <dl className="mt-12 space-y-5 border-t border-border pt-10 text-sm text-muted-foreground">
              {[
                { icon: Phone, text: "(925) 555-0148" },
                { icon: Mail, text: "studio@terracottabuilders.com" },
                { icon: MapPin, text: "410 Hartz Avenue, Danville, CA 94526" },
                { icon: Home, text: "Serving Danville, Alamo, Lafayette & the East Bay" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-4">
                  <Icon className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.4} />
                  <span>{text}</span>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-espresso pt-20 pb-10 text-espresso-foreground">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
          <div>
            <Logo />
            <p className="mt-6 max-w-xs text-sm leading-6 text-espresso-foreground/60">
              Luxury custom homes, design-build and renovations across Danville and the Bay Area.
            </p>
            <div className="mt-7 flex gap-3">
              {[Instagram, Home, Hammer].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social profile"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-espresso-foreground/25 transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.3} />
                </a>
              ))}
            </div>
          </div>
          {[
            { title: "Company", links: ["About", "Our Process", "Careers", "Journal"] },
            {
              title: "Services",
              links: ["Custom Homes", "Design + Build", "Renovations", "Project Management"],
            },
            { title: "Visit", links: ["410 Hartz Avenue", "Danville, CA 94526", "(925) 555-0148"] },
          ].map((col) => (
            <div key={col.title}>
              <h3 className="text-[0.625rem] tracking-[0.24em] text-primary uppercase">{col.title}</h3>
              <ul className="mt-6 space-y-3 text-sm text-espresso-foreground/60">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="transition-colors hover:text-espresso-foreground">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-16 flex max-w-[1400px] flex-wrap justify-between gap-4 border-t border-espresso-foreground/15 px-6 pt-8 text-[0.625rem] tracking-[0.18em] text-espresso-foreground/45 uppercase lg:px-12">
          <p>© 2026 Terracotta Builders · CSLB #1042887</p>
          <p>Danville, California</p>
        </div>
      </footer>
    </div>
  );
}
