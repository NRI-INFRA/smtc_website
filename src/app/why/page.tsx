"use client";

import PageHero from "@/components/PageHero";
import Carousel from "@/components/Carousel";

const reasons = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--brand-500)" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Reliable Supply Chain",
    desc: "Robust sourcing and logistics ensure consistent availability and on-time delivery across regions — even during seasonal fluctuations.",
    stat: "98.2%", statLabel: "On-time Delivery",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--brand-500)" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Quality Assured",
    desc: "Every batch undergoes rigorous quality checks, moisture testing, grading, and certification before dispatch from our facilities.",
    stat: "100%", statLabel: "Quality Checked",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--brand-500)" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Verified Vendor Network",
    desc: "Access to 500+ verified vendors and direct farmer partnerships ensures best-source procurement at competitive market rates.",
    stat: "500+", statLabel: "Verified Vendors",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--brand-500)" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Transparent Pricing",
    desc: "Real-time market-linked pricing with no hidden charges. Fair rates for buyers and sellers — tracked daily across commodity exchanges.",
    stat: "₹0", statLabel: "Hidden Charges",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--brand-500)" strokeWidth="2">
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Pan-India Reach",
    desc: "Operational across 18+ states with bonded warehousing hubs enabling rapid dispatch to any location in India.",
    stat: "18+", statLabel: "States Covered",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--brand-500)" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: "Dedicated Account Management",
    desc: "Every client gets a dedicated relationship manager for seamless communication, order tracking, and issue resolution.",
    stat: "24/7", statLabel: "Support Available",
  },
];

const testimonials = [
  {
    name: "Vikram Mehta",
    company: "Mehta Food Industries, Pune",
    quote: "SMTC has been our primary sugar supplier for 4 years. Their delivery consistency and pricing transparency is unmatched in the market.",
    img: "/images/t1.png",
  },
  {
    name: "Lakshmi Devi",
    company: "Sri Foods, Hyderabad",
    quote: "We source all our Toor and Chana dal through SMTC. The quality grading and timely supply has helped us scale our retail operations significantly.",
    img: "/images/t2.png",
  },
  {
    name: "Suresh Agarwal",
    company: "Agarwal Rice Mills, Raipur",
    quote: "SMTC's understanding of the rice market is exceptional. They helped us find the right export buyers and ensured compliance at every step.",
    img: "/images/t3.png",
  },
  {
    name: "Anita Pillai",
    company: "Pillai Agro, Kochi",
    quote: "Switching to SMTC for maize procurement was one of the best decisions we made. Consistent grade, competitive pricing, no surprises.",
    img: "/images/t4.png",
  },
  {
    name: "Deepak Rathore",
    company: "Rathore Wholesale, Jaipur",
    quote: "The dedicated account manager concept is a game changer. We always have someone on call who knows our requirements and acts fast.",
    img: "/images/t5.png",
  },
  {
    name: "Meenakshi Rao",
    company: "Rao Grocers, Bengaluru",
    quote: "Quality is never a concern with SMTC. Every delivery matches the promised grade. They've genuinely transformed how we manage our sourcing.",
    img: "/images/t6.png",
  },
];

export default function WhyPage() {
  return (
    <>
      <PageHero
        label="Our Edge"
        title="Why Partner With SMTC"
        subtitle="What makes SMTC Trading the preferred choice for agri-commodity procurement across India."
      />

      {/* Reasons grid */}
      <section style={{ padding: "100px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "32px" }}>
            {reasons.map((r) => (
              <div key={r.title} className="why-card-static reveal" style={{ textAlign: "left", display: "flex", flexDirection: "column", gap: "16px", padding: "40px 32px" }}>
                <div className="why-icon" style={{ margin: 0, marginBottom: "8px" }}>{r.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.4rem", color: "#ffffff", letterSpacing: "-0.015em" }}>{r.title}</h3>
                <p style={{ fontSize: "1rem", color: "rgba(255,255,255,.7)", lineHeight: 1.8, flex: 1 }}>{r.desc}</p>
                <div style={{ paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,.1)", display: "flex", alignItems: "baseline", gap: "10px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.85rem", color: "var(--brand-400)", letterSpacing: "-0.02em", lineHeight: 1 }}>{r.stat}</span>
                  <span style={{ fontSize: ".8125rem", color: "rgba(255,255,255,.45)", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em" }}>{r.statLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials carousel */}
      <section style={{ padding: "100px 0", background: "var(--navy-50)" }}>
        <div className="container">
          <div className="categories-header reveal" style={{ marginBottom: "60px" }}>
            <div className="section-label">Testimonials</div>
            <h2 className="section-title">Wholesale Partners &amp; Success Stories</h2>
            <p className="section-subtitle">Trusted by 500+ businesses across India — here&apos;s what they have to say about SMTC.</p>
          </div>
          <div className="reveal">
            <Carousel autoplay interval={7000} itemsPerView={3}>
              {testimonials.map((t) => (
                <div key={t.name} className="why-card" style={{ textAlign: "left", height: "100%", padding: "48px 36px", border: "1px solid var(--slate-200)", background: "#fff" }}>
                  {/* Quote mark (Subtle blue) */}
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "4rem", lineHeight: 1, color: "var(--brand-400)", marginBottom: "4px", opacity: 0.2 }}>&ldquo;</div>
                  <p style={{ fontSize: "1.05rem", color: "var(--slate-700)", lineHeight: 1.8, marginBottom: "32px", flex: 1, fontWeight: 400 }}>{t.quote}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.img} alt={t.name} style={{ width: "52px", height: "52px", borderRadius: "50%", objectFit: "cover", border: "2.5px solid var(--brand-100)" }} />
                    <div>
                      <div style={{ fontWeight: 800, fontSize: ".95rem", color: "var(--navy-950)", fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}>{t.name}</div>
                      <div style={{ fontSize: ".8125rem", color: "var(--slate-500)", marginTop: "2px", fontWeight: 500 }}>{t.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-box reveal">
            <div className="cta-glow-orb cta-glow-1" />
            <div className="cta-glow-orb cta-glow-2" />
            <h2>Ready to Experience the Difference?</h2>
            <p>Join 500+ businesses that trust SMTC for reliable, quality agri-commodity supply.</p>
            <a href="/contact" className="btn btn-primary">
              Get Started Today
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
