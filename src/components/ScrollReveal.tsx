"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // 1. Setup IntersectionObserver
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observerRef.current?.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    // 2. Initial observing function
    const scanAndObserve = () => {
      const revealEls = document.querySelectorAll(".reveal:not(.visible)");
      revealEls.forEach((el) => {
        observerRef.current?.observe(el);
      });
    };

    // 3. Setup MutationObserver to watch for newly added .reveal elements
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          scanAndObserve();
        }
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Initial scan
    const timer = setTimeout(scanAndObserve, 100);

    return () => {
      observerRef.current?.disconnect();
      mutationObserver.disconnect();
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
