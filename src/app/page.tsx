"use client";

import { DicedHeroSection } from "@/components/diced-hero-section";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero-v2">
        {/* Video */}
        <video
          className="hero-v2-video"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Overlays */}
        <div className="hero-v2-overlay" />
        <div className="hero-v2-vignette" />

        {/* Left-aligned content */}
        <div className="container hero-v2-content">
          <div className="hero-v2-inner">
            <p className="hero-v2-eyebrow">India&apos;s Premier Commodity Trader</p>

            <h1 className="hero-v2-heading">
              From Farm<br />
              to Market,<br />
              <span className="hero-v2-accent">Seamlessly.</span>
            </h1>

            <p className="hero-v2-sub">
              SMTC Trading connects 500+ verified vendors with buyers across India —
              supplying rice, sugar, dal, maize, iron, metal pellets and more with guaranteed quality and on-time delivery.
            </p>

            <div className="hero-v2-actions">
              <a href="/products" className="hero-v2-btn-primary">
                Explore Products
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="/contact" className="hero-v2-btn-ghost">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="trust reveal">
        <div className="container trust-inner">
          <div className="trust-stat">
            <div className="trust-stat-value">500<span className="accent">+</span></div>
            <div className="trust-stat-label">Verified Vendors</div>
          </div>
          <div className="trust-divider" />
          <div className="trust-stat">
            <div className="trust-stat-value">1,000<span className="accent">+</span></div>
            <div className="trust-stat-label">Retail Partners</div>
          </div>
          <div className="trust-divider" />
          <div className="trust-stat">
            <div className="trust-stat-value">Pan-India</div>
            <div className="trust-stat-label">Supply Network</div>
          </div>
          <div className="trust-divider" />
          <div className="trust-stat">
            <div className="trust-stat-value">50K<span className="accent">+</span></div>
            <div className="trust-stat-label">Tonnes Traded</div>
          </div>
        </div>
      </section>

      {/* CATEGORIES — Diced Hero */}
      <section className="categories" id="categories" style={{ padding: "80px 0" }}>
        <DicedHeroSection
          topText="Core Categories"
          mainText="What We Trade"
          subMainText="Sourcing and supplying the finest agricultural and industrial commodities across India — from paddy fields to steel mills."
          buttonText="View All Categories"
          onMainButtonClick={() => { window.location.href = "/categories"; }}
          separatorColor="var(--brand-500)"
          backgroundColor="transparent"
          topTextStyle={{
            color: "var(--brand-600)",
            fontSize: ".75rem",
          }}
          mainTextStyle={{
            color: "var(--slate-900)",
            fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
          }}
          subMainTextStyle={{
            color: "var(--slate-500)",
            fontSize: "1.05rem",
          }}
          buttonStyle={{
            backgroundColor: "var(--brand-500)",
            color: "#fff",
            hoverColor: "var(--brand-600)",
            hoverForeground: "#fff",
            borderRadius: "6px",
          }}
          slides={[
            { title: "Rice",  image: "/images/rice.png" },
            { title: "Sugar", image: "/images/sugar.png" },
            { title: "Dal",   image: "/images/dal.png" },
            { title: "Maize", image: "/images/maize.png" },
            { title: "Iron",  image: "/images/iron.png" },
            { title: "Iron Ore", image: "/images/iron-ore.png" },
            { title: "Metal Pellets", image: "/images/metal-pellets.png" },
          ]}
        />
      </section>

      {/* PRODUCTS */}
      <section className="products" id="products">
        <div className="container">
          <div className="products-header reveal">
            <div className="section-label">Featured Products</div>
            <h2 className="section-title">Popular Commodities</h2>
            <p className="section-subtitle">Hand-picked selections from our most traded and in-demand product lines.</p>
          </div>
          <div className="products-grid">
            {[
              { delay: "reveal-delay-1", src: "/images/rice.png", alt: "Basmati Rice", cat: "Rice", title: "Basmati Rice", desc: "Long-grain aromatic Basmati, aged and premium-quality for export and domestic markets.", tag: "Premium Grade" },
              { delay: "reveal-delay-2", src: "/images/rice.png", alt: "Sona Masoori", cat: "Rice", title: "Sona Masoori", desc: "Lightweight, aromatic medium-grain rice — the preferred choice for South Indian markets.", tag: "Best Seller" },
              { delay: "reveal-delay-3", src: "/images/dal.png", alt: "Toor Dal", cat: "Dal", title: "Toor Dal", desc: "Polished and unpolished Toor dal varieties, sourced directly from processing mills.", tag: "Bulk Ready" },
              { delay: "reveal-delay-1", src: "/images/dal.png", alt: "Chana Dal", cat: "Dal", title: "Chana Dal", desc: "High-protein split chickpeas, cleaned and graded for wholesale distribution.", tag: "High Demand" },
              { delay: "reveal-delay-2", src: "/images/sugar.png", alt: "Refined Sugar", cat: "Sugar", title: "Refined Sugar", desc: "S-30 and M-30 grade refined sugar from top sugar mills across Maharashtra and UP.", tag: "Industrial Grade" },
              { delay: "reveal-delay-3", src: "/images/maize.png", alt: "Yellow Maize", cat: "Maize", title: "Yellow Maize", desc: "Feed-grade and food-grade yellow maize for animal nutrition and starch industries.", tag: "Multi-Use" },
              { delay: "reveal-delay-1", src: "/images/iron.png", alt: "Pig Iron", cat: "Iron", title: "Pig Iron", desc: "High-grade pig iron sourced from leading blast furnaces for foundry and steelmaking.", tag: "Foundry Grade" },
              { delay: "reveal-delay-2", src: "/images/iron-ore.png", alt: "Hematite Ore", cat: "Iron Ore", title: "Hematite Ore", desc: "High Fe-content hematite iron ore fines and lumps from major mining belts.", tag: "High Fe" },
              { delay: "reveal-delay-3", src: "/images/metal-pellets.png", alt: "Iron Ore Pellets", cat: "Metal Pellets", title: "Iron Ore Pellets", desc: "Blast furnace and DR grade iron ore pellets with consistent Fe content.", tag: "Steel Grade" },
            ].map((p) => (
              <div key={p.title} className={`product-card reveal ${p.delay}`}>
                <div className="product-card-inner">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="product-card-img" src={p.src} alt={p.alt} />
                  <div className="product-card-body">
                    <div className="product-card-cat">{p.cat}</div>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </div>
                  <div className="product-card-footer">
                    <span className="product-tag">{p.tag}</span>
                    <span className="product-arrow">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="container about-grid">
          <div className="about-visual reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="about-img-main" src="/images/hero.png" alt="Agriculture field" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="about-img-float" src="/images/wheat.png" alt="Warehouse" />
            <div className="about-stats-float">
              <div className="val">10+</div>
              <div className="lbl">Years of Experience</div>
            </div>
          </div>
          <div className="about-text reveal">
            <div className="section-label">About SMTC</div>
            <h2 className="section-title">Built on Trust,<br />Scaled with Purpose</h2>
            <p>
              SMTC Trading Pvt Ltd is a leading B2B commodity trading company connecting producers,
              processors, and retailers across India. We bring efficiency, transparency, and reliability
              to the agricultural and industrial commodity supply chain.
            </p>
            <p>
              With deep relationships across farming communities and a robust logistics network, we ensure
              consistent quality and timely delivery at every scale.
            </p>
            <div className="about-features">
              {["Pan-India Sourcing", "Quality Tested", "Timely Logistics", "Fair Pricing"].map((f) => (
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
            <a href="/about" className="btn btn-secondary">Learn More About Us</a>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="why" id="why">
        <div className="container">
          <div className="why-header reveal">
            <div className="section-label">Our Edge</div>
            <h2 className="section-title">Why Partner With Us</h2>
            <p className="section-subtitle">What makes SMTC Trading the preferred choice for agri-commodity procurement.</p>
          </div>
          <div className="why-grid">
            {[
              {
                delay: "reveal-delay-1",
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-300)" strokeWidth="1.75"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
                title: "Reliable Supply Chain",
                desc: "Robust sourcing and logistics ensure consistent availability and on-time delivery across regions.",
              },
              {
                delay: "reveal-delay-2",
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-300)" strokeWidth="1.75"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
                title: "Quality Assured",
                desc: "Every batch undergoes rigorous quality checks, grading, and certification before dispatch.",
              },
              {
                delay: "reveal-delay-3",
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-300)" strokeWidth="1.75"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
                title: "Vendor Network",
                desc: "Access to 500+ verified vendors and direct farmer partnerships for best-source procurement.",
              },
              {
                delay: "reveal-delay-4",
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-300)" strokeWidth="1.75"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
                title: "Transparent Pricing",
                desc: "Real-time market-linked pricing with no hidden charges. Fair rates for buyers and sellers.",
              },
            ].map((w) => (
              <div key={w.title} className={`why-card reveal ${w.delay}`}>
                <div className="why-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <div className="container">
          <div className="cta-box reveal">
            <div className="cta-glow-orb cta-glow-1" />
            <div className="cta-glow-orb cta-glow-2" />
            <h2>Ready to Scale Your<br />Agri Business?</h2>
            <p>Join hundreds of businesses that trust SMTC Trading for reliable, quality commodity supply.</p>
            <a href="/contact" className="btn btn-primary">
              Contact Us Today
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
