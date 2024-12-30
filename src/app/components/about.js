"use client"; // ensure it's a client component if it uses React hooks or client-only APIs

import React from "react";

export default function About({ skills, currentSkillIndex, showSkill }) {
  return (
    <>
      <h1 style={{ marginBottom: "1rem", fontSize: "32px" }}>
        HI, I'M WILLIAM LITTLE.
      </h1>
      <p style={{ fontSize: "20px" }}>
        I BELIEVE DATA HAS THE POWER TO SHAPE A BETTER FUTURE. AS A DEVELOPER
        AND PROBLEM SOLVER, I TURN COMPLEX CHALLENGES INTO MEANINGFUL
        OPPORTUNITIES THROUGH MACHINE LEARNING, AI, AND COMPUTATIONAL
        MODELLING.
      </p>

      {/* Rotating Skills Section */}
      <p style={{ fontSize: "20px", marginTop: "2rem" }}>
        I AM PASSIONATE ABOUT AND SKILLED IN{" "}
        <span
          style={{
            backgroundColor: "#fff",
            color: "#000",
            padding: "2px 4px",
            transition: "opacity 0.5s ease-in-out",
            opacity: showSkill ? 1 : 0,
          }}
        >
          {skills[currentSkillIndex]}
        </span>
        .
      </p>

      {/* Residence/Uni Info */}
      <p style={{ fontSize: "20px", marginTop: "2rem" }}>
        CURRENTLY, I RESIDE IN KINGSTON, ONTARIO ATTENDING MY FINAL YEAR AT
        QUEEN'S UNIVERSITY WHERE I STUDY ENGINEERING PHYSICS SPECIALIZING IN
        COMPUTING APPLICATIONS.
      </p>

      {/* GITHUB Link */}
      <p style={{ fontSize: "20px", marginTop: "2rem" }}>
        TAKE A LOOK AT MY WORK ON MY{" "}
        <a
          href="https://www.github.com/williamlittle423"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#fff",
            color: "#000",
            padding: "2px 4px",
            textDecoration: "none",
          }}
        >
          GITHUB
        </a>
        .
      </p>
    </>
  );
}
