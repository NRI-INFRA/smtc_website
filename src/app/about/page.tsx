import PageHero from "@/components/PageHero";

const milestones = [
  { year: "2014", title: "Founded", desc: "SMTC Trading Pvt Ltd established with a vision to modernize agri-commodity trade in India." },
  { year: "2016", title: "500+ Vendors", desc: "Built a verified network of 500+ farmers and processors across 8 states." },
  { year: "2018", title: "Pan-India Logistics", desc: "Launched end-to-end logistics operations covering 18 states with bonded warehousing." },
  { year: "2020", title: "Export Operations", desc: "Commenced international trade with buyers in the Middle East and South Asia." },
  { year: "2022", title: "1,000+ Partners", desc: "Crossed 1,000 active retail and institutional partnerships across India." },
  { year: "2024", title: "50K Tonnes", desc: "Surpassed 50,000 metric tonnes of commodities traded annually." },
];


export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Our Story"
        title="Built on Trust, Scaled with Purpose"
        subtitle="A decade of connecting India's agricultural heartland to markets near and far."
      />

      {/* Mission */}
      <section style={{ padding: "80px 0" }}>
        <div className="container about-grid">
          <div className="about-visual reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="about-img-main" src="/images/hero.png" alt="Agriculture field" />
            <div className="about-stats-float">
              <div className="val">10+</div>
              <div className="lbl">Years of Experience</div>
            </div>
          </div>
          <div className="about-text reveal">
            <div className="section-label">Who We Are</div>
            <h2 className="section-title">India&apos;s Trusted Agri-Commodity Partner</h2>
            <p>SMTC Trading Pvt Ltd is a leading B2B agricultural trading company connecting producers, processors, and retailers across India. We bring efficiency, transparency, and reliability to the agri-commodity supply chain.</p>
            <p>With deep relationships across farming communities and a robust logistics network, we ensure consistent quality and timely delivery — whether you need 1 tonne or 1,000 tonnes.</p>
            <p>Our mission is simple: eliminate inefficiency from India&apos;s food supply chain and ensure fair value for every stakeholder — from farmer to retailer.</p>
            <div className="about-features">
              {["Pan-India Sourcing", "Quality Tested", "Timely Logistics", "Fair Pricing", "Export Ready", "Direct Farmer Ties"].map((f) => (
                <div key={f} className="about-feature">
                  <div className="about-feature-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--brand-600)" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: "80px 0", background: "var(--slate-50)" }}>
        <div className="container">
          <div className="categories-header reveal">
            <div className="section-label">Our Journey</div>
            <h2 className="section-title">A Decade of Growth</h2>
          </div>
          <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: "2px", background: "linear-gradient(180deg, var(--blue-400), var(--navy-700))", transform: "translateX(-50%)" }} />
            {milestones.map((m, i) => (
              <div key={m.year} className="reveal" style={{ display: "flex", justifyContent: i % 2 === 0 ? "flex-start" : "flex-end", marginBottom: "40px", position: "relative" }}>
                <div style={{ width: "calc(50% - 32px)", background: "var(--surface)", borderRadius: "var(--radius)", padding: "24px", border: "1px solid var(--slate-100)", boxShadow: "0 4px 20px rgba(0,0,0,.04)" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.4rem", color: "var(--blue-500)", marginBottom: "4px" }}>{m.year}</div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, marginBottom: "6px", color: "var(--slate-800)" }}>{m.title}</h3>
                  <p style={{ fontSize: ".88rem", color: "var(--slate-500)", lineHeight: 1.6 }}>{m.desc}</p>
                </div>
                <div style={{ position: "absolute", left: "50%", top: "24px", width: "14px", height: "14px", borderRadius: "50%", background: "var(--blue-400)", border: "3px solid var(--surface)", transform: "translateX(-50%)", boxShadow: "0 0 0 3px var(--blue-100)" }} />
              </div>
            ))}
          </div>
        </div>
      </section>


<section className="cta-section">
        <div className="container">
          <div className="cta-box reveal">
            <div className="cta-glow-orb cta-glow-1" />
            <div className="cta-glow-orb cta-glow-2" />
            <h2>Want to Know More?</h2>
            <p>Reach out to our team for partnerships, sourcing requirements or any queries.</p>
            <a href="/contact" className="btn btn-primary">
              Contact Us
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
