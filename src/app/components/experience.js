"use client";
import React, { useState } from "react";

export default function Experience({ experienceList }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // heightMap: { [index]: number } -> each image’s full displayed height
  const [heightMap, setHeightMap] = useState({});

  // On image load, measure how tall it is (including the text above if needed).
  // But here, we only measure the <img> itself, and assume the text’s height
  // is relatively small. If you need to measure the entire container, see notes below.
  const handleImageLoad = (e, index) => {
    const imgEl = e.currentTarget;
    const realHeight = imgEl.offsetHeight;

    // Store it in state
    setHeightMap((prev) => ({
      ...prev,
      [index]: realHeight,
    }));
  };

  return (
    <>
      <h2 style={{ fontSize: "36px", marginBottom: "1.5rem" }}>EXPERIENCE</h2>

      {experienceList.map((exp, i) => {
        // If we have a measured height, use it. Otherwise fallback to 0.
        const fullHeight = heightMap[i] || 0;

        return (
          <div
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{ marginBottom: "2rem" }}
          >
            {/* Title & Date always visible */}
            <div style={{ fontWeight: "bold", fontSize: "28px" }}>
              {exp.title}
            </div>
            <div style={{ fontSize: "16px", opacity: 0.8 }}>{exp.date}</div>

            {/* Slide/Fade container */}
            <div
              style={{
                overflow: "hidden",
                // Transition from 0 -> fullHeight for a smooth slide
                transition: "max-height 0.4s ease, opacity 0.4s ease",
                maxHeight: hoveredIndex === i ? `${fullHeight + 150}px` : "0",
                // +150 is a buffer for the text area above the image
                // or you can measure container instead to be more exact
                opacity: hoveredIndex === i ? 1 : 0,
                marginTop: "0.5rem",
              }}
            >
              {/* Description (some extra margin) */}
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

              {/* Image: "width: exp.width" uses the viewport-based width */}
              {exp.image && (
                <img
                  src={exp.image}
                  alt={exp.title}
                  style={{
                    display: "block",
                    margin: "0 auto", // center horizontally
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
