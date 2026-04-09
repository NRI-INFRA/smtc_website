"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  useEffect(() => {
    const nav = document.getElementById("nav");
    const handleScroll = () => {
      nav?.classList.toggle("scrolled", window.scrollY > 40);
    };
    // On non-home pages always show scrolled style
    if (pathname !== "/") {
      nav?.classList.add("scrolled");
    } else {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [pathname]);

  return (
    <nav id="nav" className={pathname !== "/" ? "scrolled" : ""}>
      <div className="container nav-inner">
        <Link href="/" className="logo">
          {/* Official Logo Image */}
          <div className="logo-img-wrapper" style={{ width: "40px", height: "40px", position: "relative" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/logo.png" 
              alt="SMTC Trading Logo" 
              style={{ width: "100%", height: "100%", objectFit: "contain" }} 
            />
          </div>
          <div className="logo-text">SMTC <span>Trading</span></div>
        </Link>
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/categories">Categories</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/why">Why Us</Link></li>
          <li>
            <Link href="/contact" className="btn btn-primary nav-cta">
              Get in Touch
            </Link>
          </li>
        </ul>
        <button
          className="mobile-menu"
          onClick={() =>
            document.querySelector(".nav-links")?.classList.toggle("mobile-open")
          }
        >
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
