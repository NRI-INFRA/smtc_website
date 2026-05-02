"use client";

import PageHero from "@/components/PageHero";
import Carousel from "@/components/Carousel";

const categories = [
  {
    icon: "🍚",
    title: "Rice",
    desc: "Premium Basmati, Sona Masoori & regional varieties sourced from top paddy-growing regions across India.",
    varieties: ["Basmati", "Sona Masoori", "IR-64", "Ponni", "Raw Rice"],
    img: "/images/rice.png",
    highlight: "Most Traded",
  },
  {
    icon: "🧂",
    title: "Sugar",
    desc: "Refined and raw sugar grades for industrial, wholesale and retail distribution from leading mills.",
    varieties: ["S-30 Refined", "M-30 Refined", "Raw Sugar", "Jaggery", "Brown Sugar"],
    img: "/images/sugar.png",
    highlight: "Industrial Grade",
  },
  {
    icon: "🫘",
    title: "Dal & Pulses",
    desc: "Toor, Chana, Moong & Masoor dal — cleaned, graded, and bulk-ready for supply across India.",
    varieties: ["Toor Dal", "Chana Dal", "Moong Dal", "Masoor Dal", "Urad Dal"],
    img: "/images/dal.png",
    highlight: "High Protein",
  },
  {
    icon: "🌽",
    title: "Maize",
    desc: "Yellow maize for feed, starch production, and food processing industries at competitive prices.",
    varieties: ["Yellow Maize", "White Maize", "Sweet Corn", "Maize Flour", "Feed Grade"],
    img: "/images/maize.png",
    highlight: "Multi-Use",
  },
  {
    icon: "🌾",
    title: "Wheat & Flour",
    desc: "High-quality wheat and milled flour products for bakeries, food manufacturers and wholesalers.",
    varieties: ["Sharbati Wheat", "Lokwan Wheat", "Maida", "Atta", "Semolina"],
    img: "/images/wheat.png",
    highlight: "Premium Quality",
  },
  {
    icon: "🫙",
    title: "Oil Seeds",
    desc: "Groundnut, soybean and other oil seeds sourced directly from agricultural belts for crushing and export.",
    varieties: ["Groundnut", "Soybean", "Sunflower", "Sesame", "Mustard"],
    img: "/images/oil-seeds.png",
    highlight: "Export Ready",
  },
  {
    icon: "🔩",
    title: "Iron",
    desc: "High-quality pig iron, sponge iron and cast iron sourced from leading furnaces and mills across India.",
    varieties: ["Pig Iron", "Sponge Iron", "Cast Iron", "Wrought Iron", "TMT Bars"],
    img: "/images/iron.png",
    highlight: "Industrial Grade",
  },
  {
    icon: "⛏️",
    title: "Iron Ore",
    desc: "Premium hematite and magnetite iron ore — fines, lumps and calibrated grades from major mining regions.",
    varieties: ["Hematite Ore", "Magnetite Ore", "Iron Ore Fines", "Iron Ore Lumps", "Pellet Feed"],
    img: "/images/iron-ore.png",
    highlight: "High Fe Content",
  },
  {
    icon: "⚙️",
    title: "Metal Pellets",
    desc: "Blast furnace and DR grade iron ore pellets and ferro alloy pellets for steel manufacturing.",
    varieties: ["Iron Ore Pellets", "DRI Pellets", "Ferro Alloy Pellets", "BF Grade", "DR Grade"],
    img: "/images/metal-pellets.png",
    highlight: "Steel Grade",
  },
];

export default function CategoriesPage() {
  return (
    <>
      <PageHero
        label="What We Trade"
        title="Our Commodity Categories"
        subtitle="A comprehensive range of agricultural and industrial commodities sourced from India's finest growing regions, processing mills, and mining belts."
      />

      {/* Featured carousel */}
      <section style={{ padding: "80px 0 40px", background: "var(--bg)" }}>
        <div className="container">
          <div className="categories-header reveal" style={{ marginBottom: "40px" }}>
            <div className="section-label">Browse by Category</div>
            <h2 className="section-title">What We Source &amp; Supply</h2>
          </div>
          <div className="reveal">
            <Carousel autoplay interval={5000}>
              {categories.map((cat) => (
                <div
                  key={cat.title}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 0,
                    borderRadius: "var(--radius-lg)",
                    overflow: "hidden",
                    border: "1px solid var(--slate-100)",
                    boxShadow: "0 8px 40px rgba(0,0,0,.06)",
                    background: "var(--surface)",
                  }}
                >
                  {/* Image side */}
                  <div style={{ position: "relative", minHeight: "360px" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cat.img}
                      alt={cat.title}
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(2,6,23,.55), rgba(2,20,60,.35))" }} />
                    <div style={{ position: "absolute", top: "24px", left: "24px" }}>
                      <span style={{ display: "inline-block", background: "var(--brand-500)", color: "#fff", fontSize: ".68rem", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", padding: "4px 12px", borderRadius: "50px" }}>{cat.highlight}</span>
                    </div>
                    <div style={{ position: "absolute", bottom: "24px", left: "24px" }}>
                      <div style={{ fontSize: "3rem", marginBottom: "8px" }}>{cat.icon}</div>
                      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "2rem", color: "#fff", letterSpacing: "-0.02em" }}>{cat.title}</h3>
                    </div>
                  </div>
                  {/* Content side */}
                  <div style={{ padding: "40px 36px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "20px" }}>
                    <p style={{ fontSize: "1rem", color: "var(--slate-600)", lineHeight: 1.75 }}>{cat.desc}</p>
                    <div>
                      <div style={{ fontSize: ".72rem", fontWeight: 700, color: "var(--brand-600)", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: "12px" }}>Available Varieties</div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {cat.varieties.map((v) => (
                          <span key={v} className="product-tag">{v}</span>
                        ))}
                      </div>
                    </div>
                    <a href="/contact" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
                      Enquire Now
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </a>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Card grid overview */}
      <section style={{ padding: "40px 0 80px", background: "var(--bg)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}>
            {categories.map((cat, i) => (
              <div key={cat.title} className={`product-card reveal reveal-delay-${(i % 3) + 1}`} style={{ borderRadius: "var(--radius-lg)" }}>
                <div className="product-card-inner">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="product-card-img" src={cat.img} alt={cat.title} style={{ height: "200px" }} />
                  <div className="product-card-body">
                    <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{cat.icon}</div>
                    <div className="product-card-cat">Category</div>
                    <h3 style={{ letterSpacing: "-0.01em" }}>{cat.title}</h3>
                    <p>{cat.desc}</p>
                    <div style={{ marginTop: "14px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {cat.varieties.map((v) => (
                        <span key={v} className="product-tag">{v}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box reveal">
            <div className="cta-glow-orb cta-glow-1" />
            <div className="cta-glow-orb cta-glow-2" />
            <h2>Need a Specific Commodity?</h2>
            <p>Tell us your requirements and we&apos;ll source the right product at the right price.</p>
            <a href="/contact" className="btn btn-primary">
              Talk to Our Team
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
