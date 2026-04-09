"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"visible" | "fadeout" | "done">("visible");

  useEffect(() => {
    const duration = 2500; // 2.5s for progress to reach 100%
    const interval = 20; // 20ms update rate
    const steps = duration / interval;
    const increment = 1 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 1) {
          clearInterval(timer);
          setTimeout(() => setPhase("fadeout"), 500);
          return 1;
        }
        return prev + increment;
      });
    }, interval);

    const backup = setTimeout(() => setPhase("fadeout"), 4000);

    return () => {
      clearInterval(timer);
      clearTimeout(backup);
    };
  }, []);

  useEffect(() => {
    if (phase !== "fadeout") return;
    const t = setTimeout(() => setPhase("done"), 1200);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "done") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div className={`pl${phase === "fadeout" ? " pl--out" : ""}`}>
      {/* Background Image instead of video */}
      <div 
        className="pl__bg" 
        style={{ 
          position: "absolute", 
          inset: 0, 
          backgroundImage: "url('/images/preloader-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `scale(${1 + progress * 0.05})`, // Subtle zoom in
          transition: "transform 0.1s linear",
          opacity: phase === "fadeout" ? 0 : 1
        }} 
      />

      {/* cinematic grade */}
      <div className="pl__grade" />

      {/* letterbox */}
      <div className="pl__lb pl__lb--t" />
      <div className="pl__lb pl__lb--b" />

      {/* centred lockup */}
      <div className="pl__stage">
        <div className="pl__rule pl__rule--top" />
        
        {/* Official Logo */}
        <div className="pl__logo" style={{ width: "160px", height: "160px", margin: "0 auto 30px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/logo.png" 
            alt="SMTC Logo" 
            style={{ width: "100%", height: "100%", objectFit: "contain" }} 
          />
        </div>

        <div className="pl__brand">
          <span className="pl__smtc" style={{ fontSize: "2.5rem" }}>SMTC</span>
          <span className="pl__trading" style={{ fontSize: "2.5rem" }}>Trading</span>
        </div>

        <p className="pl__pvt" style={{ marginTop: "-5px", marginBottom: "15px" }}>Pvt. Ltd.</p>

        <div className="pl__rule pl__rule--bot" />

        <p className="pl__tag">Powering India&apos;s Agricultural Supply Chain</p>
      </div>

      {/* smooth progress bar */}
      <div className="pl__prog-track">
        <div 
          className="pl__prog-fill" 
          style={{ 
            transform: `scaleX(${progress})`,
            transition: "transform 0.1s linear"
          }} 
        />
      </div>
    </div>
  );
}
