"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChronicleButton } from "./chronicle-button";

interface TextStyle {
  color?: string;
  fontSize?: string;
  gradient?: string;
}
interface ButtonStyle {
  backgroundColor?: string;
  color?: string;
  borderRadius?: string;
  hoverColor?: string;
  hoverForeground?: string;
}
interface SlideContent {
  title: string;
  image: string;
}
interface DicedHeroSectionProps {
  topText: string;
  mainText: string;
  subMainText: string;
  buttonText: string;
  slides: SlideContent[];
  onMainButtonClick?: () => void;
  onGridImageHover?: (index: number) => void;
  onGridImageClick?: (index: number) => void;
  topTextStyle?: TextStyle;
  mainTextStyle?: TextStyle;
  subMainTextStyle?: TextStyle;
  buttonStyle?: ButtonStyle;
  componentBorderRadius?: string;
  backgroundColor?: string;
  separatorColor?: string;
  maxContentWidth?: string;
  mobileBreakpoint?: number;
  fontFamily?: string;
  isRTL?: boolean;
}

export const DicedHeroSection: React.FC<DicedHeroSectionProps> = ({
  topText,
  mainText,
  subMainText,
  buttonText,
  slides,
  onMainButtonClick,
  onGridImageHover,
  onGridImageClick,
  topTextStyle,
  mainTextStyle,
  subMainTextStyle,
  buttonStyle = {},
  componentBorderRadius = "0px",
  backgroundColor,
  separatorColor = "var(--brand-500)",
  maxContentWidth = "1536px",
  mobileBreakpoint = 1000,
  fontFamily = "inherit",
  isRTL = false,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const isRTLText = (text: string): boolean =>
    /[\u0590-\u05FF\u0600-\u06FF\u0700-\u074F]/.test(text);

  useEffect(() => {
    const checkMobile = () => {
      if (containerRef.current) {
        setIsMobile(containerRef.current.offsetWidth < mobileBreakpoint);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [mobileBreakpoint]);

  const getGradientStyle = (gradient?: string) => {
    if (gradient) {
      return {
        backgroundImage: gradient,
        WebkitBackgroundClip: "text" as const,
        WebkitTextFillColor: "transparent",
      };
    }
    return {};
  };

  const corners = ["bottom-right", "bottom-left", "top-right", "top-left"] as const;
  const orderedSlides = [slides[3], slides[2], slides[1], slides[0]];

  return (
    <main
      ref={containerRef}
      style={{
        borderRadius: componentBorderRadius,
        backgroundColor,
        padding: "2rem",
        overflow: "hidden",
        display: "flex",
        flexDirection: isMobile ? "column" : isRTL ? "row-reverse" : "row",
        justifyContent: "center",
        alignItems: "stretch",
        width: "100%",
        maxWidth: maxContentWidth,
        margin: "0 auto",
        fontFamily,
        position: "relative",
      }}
    >
      {/* Left — text content */}
      <div
        style={{
          flex: 1,
          marginRight: isMobile ? 0 : isRTL ? 0 : "2rem",
          marginLeft: isMobile ? 0 : isRTL ? "2rem" : 0,
          textAlign: isMobile ? "center" : isRTL ? "right" : "left",
          alignItems: isMobile ? "center" : isRTL ? "flex-end" : "flex-start",
          maxWidth: isMobile ? "100%" : "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          zIndex: 1,
          paddingBottom: isMobile ? "2rem" : 0,
        }}
      >
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              ...topTextStyle,
              ...getGradientStyle(topTextStyle?.gradient),
              direction: isRTLText(topText) ? "rtl" : "ltr",
              display: "block",
            }}
          >
            {topText}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              ...mainTextStyle,
              direction: isRTLText(mainText) ? "rtl" : "ltr",
              textAlign: isMobile ? "center" : isRTLText(mainText) ? "right" : "left",
              fontSize: mainTextStyle?.fontSize,
            }}
          >
            <motion.span
              style={{
                ...getGradientStyle(mainTextStyle?.gradient),
                display: "inline-block",
              }}
            >
              {mainText}
            </motion.span>
          </motion.h2>

          <motion.hr
            initial={{ width: 0 }}
            animate={{ width: "6.25rem" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              height: "0.25rem",
              background: separatorColor,
              border: "none",
              margin: isMobile
                ? "1.125rem auto 1.875rem"
                : isRTLText(mainText)
                ? "1.125rem 0 1.875rem auto"
                : "1.125rem 0 1.875rem",
              alignSelf: isMobile ? "center" : isRTLText(mainText) ? "flex-end" : "flex-start",
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              ...subMainTextStyle,
              ...getGradientStyle(subMainTextStyle?.gradient),
              direction: isRTLText(subMainText) ? "rtl" : "ltr",
            }}
          >
            {subMainText}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            marginTop: "1.5rem",
            display: "flex",
            justifyContent: isMobile ? "center" : isRTL ? "flex-end" : "flex-start",
          }}
        >
          <ChronicleButton
            text={buttonText}
            onClick={onMainButtonClick}
            hoverColor={buttonStyle?.hoverColor}
            hoverForeground={buttonStyle?.hoverForeground ?? "#fff"}
            borderRadius={buttonStyle?.borderRadius}
            fontFamily={fontFamily}
            customBackground={buttonStyle?.backgroundColor}
            customForeground={buttonStyle?.color}
          />
        </motion.div>
      </div>

      {/* Right — diced image grid */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: isRTL ? "flex-start" : "flex-end",
          position: "relative",
          width: isMobile ? "100%" : "50%",
          paddingLeft: isMobile ? 0 : isRTL ? 0 : "2rem",
          paddingRight: isMobile ? 0 : isRTL ? "2rem" : 0,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
            width: "100%",
            aspectRatio: "1 / 1",
          }}
        >
          {orderedSlides.map((slide, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "100%",
                overflow: "hidden",
                borderRadius: "20px",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={slide.image}
                alt={slide.title}
                className={`diced-img diced-${corners[index]}`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                onClick={() => onGridImageClick?.(index)}
                onMouseEnter={() => onGridImageHover?.(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
