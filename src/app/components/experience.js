"use client";
import React, { useState } from "react";

export default function Experience({ experienceList }) {
  const [openIndex, setOpenIndex] = useState(null);

  // For storing each image’s true height once loaded
  const [heightMap, setHeightMap] = useState({});

  const handleImageLoad = (e, index) => {
    const imgEl = e.currentTarget;
    const realHeight = imgEl.offsetHeight;

    setHeightMap((prev) => ({
      ...prev,
      [index]: realHeight,
    }));
  };

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <>
      <h2 style={{ fontSize: "36px", marginBottom: "1.5rem" }}>EXPERIENCE</h2>

      {experienceList.map((exp, i) => {
        const fullHeight = heightMap[i] || 0;
        const isOpen = openIndex === i;

        return (
          <div key={i} style={{ marginBottom: "2rem" }}>
            {/* Clickable header area */}
            <div
              onClick={() => toggle(i)}
              style={{
                cursor: "pointer",
                userSelect: "none",
              }}
            >
              <div style={{ fontWeight: "bold", fontSize: "28px" }}>
                {exp.title}
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "0.25rem",
                }}
              >
                {/* Date */}
                <div style={{ fontSize: "16px", opacity: 0.8 }}>{exp.date}</div>

                {/* View More / View Less + Arrow */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "14px",
                    opacity: 0.8,
                  }}
                >
                  <span>{isOpen ? "View Less" : "View More"}</span>
                  <span
                    style={{
                      display: "inline-block",
                      transition: "transform 0.3s ease",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    ▼
                  </span>
                </div>
              </div>
            </div>

            {/* Expandable content */}
            <div
              style={{
                overflow: "hidden",
                transition: "max-height 0.4s ease, opacity 0.4s ease",
                maxHeight: isOpen ? `${fullHeight + 150}px` : "0",
                opacity: isOpen ? 1 : 0,
                marginTop: "0.5rem",
              }}
            >
              <div
                style={{
                  marginBottom: "1rem",
                  opacity: 0.8,
                  fontSize: "18px",
                  textAlign: "left",
                }}
              >
                {exp.description}
              </div>

              {exp.image && (
                <img
                  src={exp.image}
                  alt={exp.title}
                  style={{
                    display: "block",
                    margin: "0 auto",
                    borderRadius: "10px",
                    border: "1px solid #666",
                    width: exp.width || "50vw",
                    height: "auto",
                  }}
                  onLoad={(e) => handleImageLoad(e, i)}
                />
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}
