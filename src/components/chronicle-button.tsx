"use client";

import { useState } from "react";

interface ChronicleButtonProps {
  text: string;
  onClick?: () => void;
  hoverColor?: string;
  hoverForeground?: string;
  borderRadius?: string;
  fontFamily?: string;
  customBackground?: string;
  customForeground?: string;
}

export function ChronicleButton({
  text,
  onClick,
  hoverColor = "var(--brand-600)",
  hoverForeground = "#fff",
  borderRadius = "6px",
  fontFamily = "inherit",
  customBackground = "var(--brand-500)",
  customForeground = "#fff",
}: ChronicleButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "13px 28px",
        borderRadius,
        background: hovered ? hoverColor : customBackground,
        color: hovered ? hoverForeground : customForeground,
        fontFamily,
        fontSize: ".88rem",
        fontWeight: 600,
        letterSpacing: ".01em",
        border: "none",
        cursor: "pointer",
        transition: "background .25s, color .25s, transform .2s, box-shadow .25s",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 8px 28px rgba(2,132,199,.35)"
          : "0 4px 16px rgba(2,132,199,.2)",
      }}
    >
      {text}
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        style={{
          transform: hovered ? "translateX(3px)" : "translateX(0)",
          transition: "transform .25s",
        }}
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  );
}
