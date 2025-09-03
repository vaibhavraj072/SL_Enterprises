import React, { useEffect, useState } from "react";
import { Wrench, Fuel, Boxes, Truck, Phone, Mail, MapPin, CheckCircle2, ChevronRight, ArrowUpRight, Linkedin, Instagram, FileText } from "lucide-react";
import logoNavbar from "../assets/logo_navbar.png";

// ---- Utility: Smooth scroll for in-page links ----
const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

// ---- Brand constants ----
const BRAND = {
  name: "Shree Laxmi Enterprises",
  tagline: "Your One‑Stop Destination for Premium Automotive & Industrial Spares",
  phones: ["+91 88828 27722", "+91 81780 93391"],
  email: "shashi.shanu@rediffmail.com",
  locations: [
    { label: "Kashmere Gate, Delhi", gmap: "https://maps.google.com/?q=Kashmere+Gate,+Delhi" },
    { label: "Karawal Nagar, Delhi", gmap: "https://maps.google.com/?q=Karawal+Nagar,+Delhi" },
  ],
};

const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "work", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

const services = [
  {
    icon: Fuel,
    title: "Fuel Injection & CRDI Spares",
    desc: "Precision spares for pumps, injectors, and modern CRDI systems, trusted by workshops and fleets.",
  },
  {
    icon: Wrench,
    title: "Tools & Genset Components",
    desc: "Robust tools and generator parts to minimize downtime and keep power on.",
  },
  {
    icon: Truck,
    title: "Earthmoving Equipment Parts",
    desc: "High‑duty spares for excavators, loaders, and construction machinery.",
  },
  {
    icon: Boxes,
    title: "Govt. Order & Specimen Supplies",
    desc: "Compliant supplies for government tenders and institutional needs with complete documentation.",
  },
];

const highlights = [
  { stat: "25+", label: "Years of Trust" },
  { stat: "2", label: "Delhi Branches" },
  { stat: "5k+", label: "Parts Catalogued" },
  { stat: "48h", label: "Dispatch SLA" },
];

const portfolio = [
  {
    title: "Fleet Fuel System Overhaul",
    summary: "CRDI injector & pump refurb kits supplied to a logistics fleet, reducing breakdowns by 32%.",
  },
  {
    title: "Genset Uptime Program",
    summary: "Spare kits for 100+ backup generators across facilities with quarterly preventive maintenance stock.",
  },
  {
    title: "Metro Depot Tooling",
    summary: "Delivered calibrated torque tools and fixtures under a rapid procurement schedule.",
  },
  {
    title: "Earthmover Rebuild Support",
    summary: "Seals, filters, and wear parts for loader overhaul—project completed ahead of deadline.",
  },
];

export default function ShreeLaxmiEnterprisesSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showToTop, setShowToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowToTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen text-zinc-900 bg-gradient-to-b from-amber-50 via-white to-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Logo image */}
              <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-amber-100 border border-amber-200 overflow-hidden">
                <img src={logoNavbar} alt="Logo" className="w-8 h-8 object-contain" />
              </div>
              <div className="leading-tight">
                <div className="font-semibold tracking-tight">{BRAND.name}</div>
                <div className="text-xs text-zinc-600">Automotive & Industrial Spares</div>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              {nav.map((n) => (
                <button key={n.id} onClick={() => scrollToId(n.id)} className="text-sm text-zinc-700 hover:text-zinc-900">
                  {n.label}
                </button>
              ))}
              <a
                href={`mailto:${BRAND.email}`}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-900 text-white text-sm shadow hover:bg-zinc-800"
              >
                <Mail className="w-4 h-4" /> Get Quote
              </a>
            </nav>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden inline-flex items-center px-3 py-2 rounded-xl border">
              <span className="sr-only">Toggle menu</span>
              <ChevronRight className={`w-5 h-5 transition-transform ${menuOpen ? "rotate-90" : "rotate-0"}`} />
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col gap-2">
                {nav.map((n) => (
                  <button key={n.id} onClick={() => { setMenuOpen(false); scrollToId(n.id); }} className="text-left px-2 py-2 rounded-lg hover:bg-amber-50">
                    {n.label}
                  </button>
                ))}
                <a href={`mailto:${BRAND.email}`} className="px-2 py-2 rounded-lg bg-zinc-900 text-white text-center">Get Quote</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.12),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900">
                {BRAND.tagline}
              </h1>
              <p className="mt-5 text-lg text-zinc-700 leading-relaxed">
                We supply trusted parts and tooling that keep your machines running and your work moving—backed by speed, documentation, and decades of service.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button onClick={() => scrollToId("services")} className="px-4 py-2 rounded-xl bg-amber-500 text-white hover:bg-amber-600 shadow">
                  Explore Services
                </button>
                <button onClick={() => scrollToId("contact")} className="px-4 py-2 rounded-xl border border-zinc-300 hover:bg-zinc-50">
                  Contact Us
                </button>
              </div>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {highlights.map((h, i) => (
                  <div key={i} className="rounded-2xl border bg-white p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold">{h.stat}</div>
                    <div className="text-xs text-zinc-600">{h.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-3xl border bg-white shadow-xl p-6 grid place-items-center">
                {/* Company logo image */}
                <div className="text-center">
                  <div className="mx-auto w-28 h-28 rounded-full border grid place-items-center overflow-hidden bg-white group">
                    <img 
                      src={logoNavbar} 
                      alt="Logo" 
                      className="w-20 h-20 object-contain transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 rotate-[-3deg] bg-amber-100 border border-amber-200 rounded-2xl p-3 text-xs shadow">
                Fast Dispatch • Genuine Parts • Pan‑India Shipping
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold tracking-tight">About Us</h2>
              <p className="mt-3 text-zinc-700">Based in Delhi, {BRAND.name} has been a reliable partner for workshops, fleets, and infrastructure projects. We focus on genuine parts, ready stock, and documentation support—so your operations never stop.</p>
              <ul className="mt-6 space-y-3">
                {["Decades of domain expertise", "Multi‑category parts under one roof", "Compliant supplies for tenders", "Responsive support & quick turnaround"].map((t, i) => (
                  <li key={i} className="flex items-center gap-2 text-zinc-700"><CheckCircle2 className="w-5 h-5 text-amber-500" /> {t}</li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {services.map((s, i) => (
                <div key={i} className="rounded-2xl border p-6 bg-amber-50/40 hover:bg-amber-50 transition">
                  <s.icon className="w-8 h-8" />
                  <div className="mt-3 font-semibold">{s.title}</div>
                  <p className="mt-1 text-sm text-zinc-700">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-gradient-to-b from-white to-amber-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-bold tracking-tight">What We Do</h2>
            <a href={`mailto:${BRAND.email}`} className="hidden sm:inline-flex items-center gap-1 text-sm underline hover:no-underline">
              Request full catalogue <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={i} className="rounded-3xl border bg-white p-6 shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-200 grid place-items-center">
                  <s.icon className="w-6 h-6" />
                </div>
                <div className="mt-4 font-semibold">{s.title}</div>
                <p className="mt-2 text-sm text-zinc-700 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio / Work */}
      <section id="work" className="py-16 border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Recent Work</h2>
          <p className="mt-2 text-zinc-700">A snapshot of engagements that demonstrate our capability and reliability.</p>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {portfolio.map((p, i) => (
              <article key={i} className="rounded-3xl border p-6 bg-white shadow-sm">
                <div className="text-lg font-semibold">{p.title}</div>
                <p className="mt-2 text-sm text-zinc-700 leading-relaxed">{p.summary}</p>
                <div className="mt-4 text-xs text-zinc-500">*Client identities available upon request, subject to NDA.</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Callout */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border bg-amber-500 text-white p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-lg">
            <div>
              <h3 className="text-2xl font-bold">Need a quick quote or part match?</h3>
              <p className="text-white/90 mt-1">Send the part number, photos, or equipment model. Our team will respond fast.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a href={`mailto:${BRAND.email}`} className="px-4 py-2 rounded-xl bg-white text-zinc-900 font-medium">Email {BRAND.email}</a>
              <a href={`tel:${BRAND.phones[0].replaceAll(' ', '')}`} className="px-4 py-2 rounded-xl border border-white/70">Call {BRAND.phones[0]}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Contact Us</h2>
              <p className="mt-2 text-zinc-700">Reach out via phone or email, or leave us a message. We serve pan‑India with swift dispatch from Delhi.</p>

              <div className="mt-6 space-y-4">
                {BRAND.locations.map((loc, i) => (
                  <a key={i} href={loc.gmap} target="_blank" rel="noreferrer" className="flex items-start gap-3 p-4 rounded-2xl border hover:bg-amber-50">
                    <MapPin className="w-5 h-5 mt-0.5" />
                    <div>
                      <div className="font-medium">{loc.label}</div>
                      <div className="text-xs text-zinc-600">Open Mon–Sat, 10:00–19:00</div>
                    </div>
                  </a>
                ))}
                <div className="flex items-center gap-3 p-4 rounded-2xl border">
                  <Phone className="w-5 h-5" />
                  <div className="text-sm">
                    {BRAND.phones.join(" • ")}
                  </div>
                </div>
                <a href={`mailto:${BRAND.email}`} className="flex items-center gap-3 p-4 rounded-2xl border hover:bg-amber-50">
                  <Mail className="w-5 h-5" />
                  <div className="text-sm">{BRAND.email}</div>
                </a>
              </div>

              <div className="mt-6 flex gap-3 text-sm text-zinc-700">
                <a className="underline" href="#">Brochure (PDF)</a>
                <a className="underline" href="#">GST & Certifications</a>
              </div>
            </div>

            <form onSubmit={(e)=>e.preventDefault()} className="rounded-3xl border p-6 bg-zinc-50">
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block text-sm">Name
                  <input className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="Your name" required />
                </label>
                <label className="block text-sm">Email
                  <input type="email" className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="you@example.com" required />
                </label>
                <label className="block text-sm sm:col-span-2">Phone
                  <input className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="Optional" />
                </label>
                <label className="block text-sm sm:col-span-2">Message
                  <textarea rows={5} className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="Tell us what you need…" required />
                </label>
              </div>
              <button className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800">
                Send Inquiry <ArrowUpRight className="w-4 h-4" />
              </button>
              <p className="mt-2 text-xs text-zinc-500">This demo form does not send data. Hook it to your backend or a service like Formspree.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="font-semibold">{BRAND.name}</div>
              <p className="mt-2 text-sm text-zinc-600">Premium spares for automotive, power, and earthmoving applications.</p>
            </div>
            <div>
              <div className="font-medium">Quick Links</div>
              <div className="mt-3 flex flex-col text-sm gap-2">
                {nav.map(n => (
                  <button key={n.id} onClick={() => scrollToId(n.id)} className="text-left hover:underline">{n.label}</button>
                ))}
              </div>
            </div>
            <div>
              <div className="font-medium">Get in touch</div>
              <div className="mt-3 text-sm text-zinc-700">
                <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> {BRAND.phones[0]} • {BRAND.phones[1]}</div>
                <div className="flex items-center gap-2 mt-1"><Mail className="w-4 h-4" /> {BRAND.email}</div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-xs text-zinc-500">© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div>
        </div>
      </footer>

      {/* Back to top */}
      {showToTop && (
        <button onClick={() => scrollToId("home")} className="fixed bottom-6 right-6 rounded-full p-3 bg-zinc-900 text-white shadow-lg">
          <ArrowUpRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

// ---- Deployment Notes ----
// 1) Replace the logo placeholders with your provided PNG/SVG (e.g., import logo from '/logo.png').
// 2) For a pure HTML build, this component can be mounted in a Vite + React + Tailwind app.
// 3) Hook the contact form to your backend (Node/Express) or a service (Formspree) to receive inquiries.
