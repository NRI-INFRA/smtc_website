"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import Carousel from "@/components/Carousel";

const products = [
  { cat: "Rice",      title: "Basmati Rice",       desc: "Long-grain aromatic Basmati, aged and premium-quality for export and domestic markets.",         tag: "Premium Grade",    img: "/images/rice.png", featured: true },
  { cat: "Rice",      title: "Sona Masoori",        desc: "Lightweight, aromatic medium-grain rice — the preferred choice for South Indian markets.",        tag: "Best Seller",      img: "/images/rice.png", featured: true },
  { cat: "Rice",      title: "IR-64 Parboiled",     desc: "Machine-cleaned and moisture-tested parboiled rice ideal for bulk export.",                      tag: "Export Grade",     img: "/images/rice.png", featured: false },
  
  { cat: "Dal",       title: "Toor Dal",            desc: "Polished and unpolished Toor dal varieties, sourced directly from processing mills.",             tag: "Bulk Ready",       img: "/images/dal.png", featured: true },
  { cat: "Dal",       title: "Chana Dal",           desc: "High-protein split chickpeas, cleaned and graded for wholesale distribution.",                   tag: "High Demand",      img: "/images/dal.png", featured: false },
  { cat: "Dal",       title: "Moong Dal",           desc: "Split green gram, washed and sorted, ideal for retail and institutional buyers.",                 tag: "Premium",          img: "/images/dal.png", featured: false },
  { cat: "Dal",       title: "Urad Dal",            desc: "Split and whole black gram, essential for traditional south Indian preparations.",               tag: "Bulk Supply",      img: "/images/dal.png", featured: false },

  { cat: "Sugar",     title: "Refined Sugar S-30",  desc: "S-30 and M-30 grade refined sugar from top sugar mills across Maharashtra and UP.",              tag: "Industrial Grade",  img: "/images/sugar.png", featured: true },
  { cat: "Sugar",     title: "Raw Cane Sugar",      desc: "Unrefined raw cane sugar for industrial processing and export markets.",                         tag: "Export Ready",     img: "/images/sugar.png", featured: false },
  { cat: "Sugar",     title: "Icing Sugar",         desc: "Finely powdered sugar for bakeries and confectionery industries.",                               tag: "Specialty",        img: "/images/sugar.png", featured: false },

  { cat: "Maize",     title: "Yellow Maize",        desc: "Feed-grade and food-grade yellow maize for animal nutrition and starch industries.",              tag: "Multi-Use",        img: "/images/maize.png", featured: true },
  { cat: "Maize",     title: "Sweet Corn",          desc: "Quality sweet corn kernels for processing and retail packaging.",                                tag: "Fresh Grade",      img: "/images/maize.png", featured: false },

  { cat: "Wheat",     title: "Sharbati Wheat",      desc: "Premium MP Sharbati wheat — golden grain known for its superior taste and quality.",              tag: "Premium",          img: "/images/wheat.png", featured: false },
  { cat: "Wheat",     title: "Maida (Flour)",       desc: "Finely milled refined wheat flour for bakeries, confectionaries and food processors.",            tag: "Bulk Available",   img: "/images/wheat.png", featured: false },
  { cat: "Wheat",     title: "Durum Wheat",         desc: "Hard wheat variety ideal for pasta and semolina production.",                                    tag: "Specialty",        img: "/images/wheat.png", featured: true },

  { cat: "Oil Seeds", title: "Groundnut Kernels",   desc: "Machine-cleaned groundnuts kernels for crushing, snacking and export.",                           tag: "Multi-Use",        img: "/images/oil-seeds.png", featured: false },
  { cat: "Oil Seeds", title: "Mustard Seeds",       desc: "High oil-content mustard seeds sourced from the heart of Rajasthan.",                            tag: "High Yield",       img: "/images/oil-seeds.png", featured: true },
  { cat: "Oil Seeds", title: "Soybean",             desc: "Graded soybeans for oil extraction and food processing units.",                                  tag: "Wholesale",        img: "/images/oil-seeds.png", featured: false },

  { cat: "Iron",      title: "Pig Iron",            desc: "High-grade pig iron sourced from leading blast furnaces for foundry and steelmaking applications.", tag: "Foundry Grade",    img: "/images/iron.png", featured: true },
  { cat: "Iron",      title: "Sponge Iron (DRI)",   desc: "Direct reduced iron for electric arc furnaces and secondary steelmaking.",                        tag: "Industrial",       img: "/images/iron.png", featured: false },
  { cat: "Iron",      title: "Cast Iron",           desc: "Grey and ductile cast iron for heavy engineering and automotive components.",                     tag: "Premium Grade",    img: "/images/iron.png", featured: false },

  { cat: "Iron Ore",  title: "Hematite Ore",        desc: "High Fe-content hematite iron ore fines and lumps from major mining belts.",                      tag: "High Fe",          img: "/images/iron-ore.png", featured: true },
  { cat: "Iron Ore",  title: "Magnetite Ore",       desc: "Premium magnetite ore for pelletization and beneficiation plants.",                               tag: "Beneficiation",    img: "/images/iron-ore.png", featured: false },
  { cat: "Iron Ore",  title: "Iron Ore Fines",      desc: "Calibrated iron ore fines for sintering and pellet production.",                                  tag: "Bulk Supply",      img: "/images/iron-ore.png", featured: false },

  { cat: "Metal Pellets", title: "Iron Ore Pellets",  desc: "Blast furnace and DR grade iron ore pellets with consistent Fe content.",                       tag: "Steel Grade",      img: "/images/metal-pellets.png", featured: true },
  { cat: "Metal Pellets", title: "DRI Pellets",       desc: "Direct reduction grade pellets optimized for sponge iron production.",                          tag: "DR Grade",         img: "/images/metal-pellets.png", featured: false },
  { cat: "Metal Pellets", title: "Ferro Alloy Pellets", desc: "Specialized ferro alloy pellets for alloy steel manufacturing.",                              tag: "Specialty",        img: "/images/metal-pellets.png", featured: false },
];

const cats = ["All", "Rice", "Dal", "Sugar", "Maize", "Wheat", "Oil Seeds", "Iron", "Iron Ore", "Metal Pellets"];
const featured = products.filter((p) => p.featured);

export default function ProductsPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? products : products.filter((p) => p.cat === active);

  return (
    <>
      <PageHero
        label="Our Products"
        title="Popular Commodities"
        subtitle="Hand-picked selections from our most traded and in-demand product lines — consistently available, quality-tested."
      />

      {/* Featured carousel */}
      <section style={{ padding: "80px 0 48px", background: "var(--bg)" }}>
        <div className="container">
          <div className="products-header reveal" style={{ marginBottom: "36px" }}>
            <div className="section-label">Featured</div>
            <h2 className="section-title">Top Commodities</h2>
            <p className="section-subtitle">Our most in-demand products — always in stock, quality assured.</p>
          </div>
          <div className="reveal">
            <Carousel autoplay interval={5500} itemsPerView={3}>
              {featured.map((p) => (
                <div key={p.title} className="product-card" style={{ display: "flex", flexDirection: "column" }}>
                  <div className="product-card-inner" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="product-card-img" src={p.img} alt={p.title} />
                    <div className="product-card-body" style={{ flex: 1 }}>
                      <div className="product-card-cat">{p.cat}</div>
                      <h3 style={{ letterSpacing: "-0.01em" }}>{p.title}</h3>
                      <p>{p.desc}</p>
                    </div>
                    <div className="product-card-footer">
                      <span className="product-tag">{p.tag}</span>
                      <a href="/contact" className="product-arrow" style={{ color: "inherit", textDecoration: "none" }}>→</a>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Full product grid with filter */}
      <section style={{ padding: "40px 0 80px", background: "linear-gradient(180deg, var(--bg), var(--slate-50))" }}>
        <div className="container">
          <div className="products-header reveal" style={{ marginBottom: "32px" }}>
            <div className="section-label">Browse All</div>
            <h2 className="section-title">All Products</h2>
          </div>

          {/* Filter chips */}
          <div className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "40px" }}>
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                style={{
                  padding: "8px 20px",
                  borderRadius: "50px",
                  border: `1.5px solid ${active === c ? "var(--brand-500)" : "var(--slate-200)"}`,
                  background: active === c ? "var(--brand-500)" : "var(--surface)",
                  color: active === c ? "#fff" : "var(--slate-600)",
                  fontSize: ".83rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all .25s",
                  fontFamily: "var(--font-body)",
                  letterSpacing: ".01em",
                }}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="products-grid">
            {filtered.map((p, i) => (
              <div key={p.title} className={`product-card reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="product-card-inner">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="product-card-img" src={p.img} alt={p.title} />
                  <div className="product-card-body">
                    <div className="product-card-cat">{p.cat}</div>
                    <h3 style={{ letterSpacing: "-0.01em" }}>{p.title}</h3>
                    <p>{p.desc}</p>
                  </div>
                  <div className="product-card-footer">
                    <span className="product-tag">{p.tag}</span>
                    <a href="/contact" className="product-arrow" style={{ color: "inherit", textDecoration: "none" }}>→</a>
                  </div>
                </div>
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
            <h2>Looking for Bulk Orders?</h2>
            <p>Get competitive pricing and assured supply for large-volume requirements across India.</p>
            <a href="/contact" className="btn btn-primary">
              Request a Quote
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
