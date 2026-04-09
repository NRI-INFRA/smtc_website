"use client";

import PageHero from "@/components/PageHero";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        label="Get in Touch"
        title="Let's Talk Business"
        subtitle="Whether you're looking to buy, sell, or partner — we'd love to hear from you."
      />

      <section style={{ padding: "80px 0" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}>

          {/* Left — contact info */}
          <div className="reveal">
            <h2 className="section-title" style={{ fontSize: "1.8rem", marginBottom: "24px" }}>Contact Information</h2>

            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--blue-500)" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z" />
                  </svg>
                ),
                label: "Phone",
                value: "+91 99721 41144",
                href: "tel:+919972141144",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--blue-500)" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                  </svg>
                ),
                label: "Email",
                value: "nriinfratechblr@gmail.com",
                href: "mailto:nriinfratechblr@gmail.com",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--blue-500)" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                ),
                label: "Headquarters",
                value: "NRI INFRA GROUP, #102_First Floor Brigade IRV center, Nallurhalli Road, Nallurhalli, Whitefield Bangalore-560066",
                href: "https://www.google.com/maps/dir//Brigade+IRV+Centre,+Nallurhalli+Rd,+Nallurhalli,+Whitefield,+Bengaluru,+Karnataka+560066/@12.9466368,77.676544,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae13e3251958e9:0xf29e3f66c54fed82!2m2!1d77.7306452!2d12.9706806",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--blue-500)" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                ),
                label: "Business Hours",
                value: "Mon - Sat: 9:00 AM - 7:00 PM IST",
                href: "#",
              },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", gap: "16px", alignItems: "flex-start", marginBottom: "28px" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "var(--blue-50)", border: "1px solid var(--blue-100)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: ".75rem", fontWeight: 600, color: "var(--slate-400)", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: "2px" }}>{item.label}</div>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: ".95rem", color: "var(--slate-700)", textDecoration: "none", fontWeight: 500, lineHeight: 1.5, display: "block" }}>{item.value}</a>
                </div>
              </div>
            ))}

            {/* Map placeholder -> Brigade IRV center, Whitefield Bangalore */}
            <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--slate-100)", height: "220px", background: "var(--slate-50)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--slate-400)", fontSize: ".9rem", marginTop: "32px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9620701460334!2d77.7303038758652!3d12.97495048734139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11f0c1692ec1%3A0xc3f14065625442a8!2sBrigade%20IRV%20Centre!5e0!3m2!1sen!2sin!4v1712000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NRI INFRA GROUP HQ"
              />
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal">
            {submitted ? (
              <div style={{ background: "var(--blue-50)", border: "1px solid var(--blue-200)", borderRadius: "var(--radius-lg)", padding: "48px 40px", textAlign: "center" }}>
                <div style={{ fontSize: "3rem", marginBottom: "16px" }}>✅</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.4rem", color: "var(--slate-800)", marginBottom: "8px" }}>Message Sent!</h3>
                <p style={{ color: "var(--slate-500)" }}>We&apos;ll get back to you within 24 hours. Thank you for reaching out.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ background: "var(--surface)", border: "1px solid var(--slate-100)", borderRadius: "var(--radius-lg)", padding: "40px", boxShadow: "0 8px 32px rgba(0,0,0,.04)" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.3rem", color: "var(--slate-800)", marginBottom: "28px" }}>Send Us a Message</h3>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                  {[
                    { id: "name", label: "Full Name", type: "text", placeholder: "John Doe" },
                    { id: "company", label: "Company", type: "text", placeholder: "Your Company" },
                  ].map((f) => (
                    <div key={f.id}>
                      <label htmlFor={f.id} style={{ display: "block", fontSize: ".8rem", fontWeight: 600, color: "var(--slate-600)", marginBottom: "6px" }}>{f.label}</label>
                      <input id={f.id} name={f.id} type={f.type} placeholder={f.placeholder} required style={{ width: "100%", padding: "10px 14px", border: "1px solid var(--slate-200)", borderRadius: "var(--radius-sm)", fontSize: ".9rem", color: "var(--slate-800)", outline: "none", transition: "border-color .2s", background: "var(--slate-50)" }} />
                    </div>
                  ))}
                </div>

                {[
                  { id: "email", label: "Email Address", type: "email", placeholder: "you@company.com" },
                  { id: "phone", label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                ].map((f) => (
                  <div key={f.id} style={{ marginBottom: "16px" }}>
                    <label htmlFor={f.id} style={{ display: "block", fontSize: ".8rem", fontWeight: 600, color: "var(--slate-600)", marginBottom: "6px" }}>{f.label}</label>
                    <input id={f.id} name={f.id} type={f.type} placeholder={f.placeholder} required style={{ width: "100%", padding: "10px 14px", border: "1px solid var(--slate-200)", borderRadius: "var(--radius-sm)", fontSize: ".9rem", color: "var(--slate-800)", outline: "none", background: "var(--slate-50)" }} />
                  </div>
                ))}

                <div style={{ marginBottom: "16px" }}>
                  <label htmlFor="commodity" style={{ display: "block", fontSize: ".8rem", fontWeight: 600, color: "var(--slate-600)", marginBottom: "6px" }}>Commodity of Interest</label>
                  <select id="commodity" name="commodity" style={{ width: "100%", padding: "10px 14px", border: "1px solid var(--slate-200)", borderRadius: "var(--radius-sm)", fontSize: ".9rem", color: "var(--slate-800)", outline: "none", background: "var(--slate-50)" }}>
                    <option value="">Select a commodity</option>
                    {["Rice", "Sugar", "Dal / Pulses", "Maize", "Wheat / Flour", "Oil Seeds", "Other"].map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label htmlFor="message" style={{ display: "block", fontSize: ".8rem", fontWeight: 600, color: "var(--slate-600)", marginBottom: "6px" }}>Message</label>
                  <textarea id="message" name="message" rows={4} placeholder="Tell us about your requirements, volume, and delivery location..." required style={{ width: "100%", padding: "10px 14px", border: "1px solid var(--slate-200)", borderRadius: "var(--radius-sm)", fontSize: ".9rem", color: "var(--slate-800)", outline: "none", background: "var(--slate-50)", resize: "vertical" }} />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Send Message
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </>
  );
}
