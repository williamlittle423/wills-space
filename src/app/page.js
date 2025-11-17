"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import About from "./components/about";
import Experience from "./components/experience";
import { experienceList } from "./data/experiences";

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");

  // Rotating skills
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [showSkill, setShowSkill] = useState(false);

  // Time/date
  const [currentTime, setCurrentTime] = useState(new Date());
  const startTimeRef = useRef(Date.now());
  const [elapsedMs, setElapsedMs] = useState(0);

  // Router
  const router = useRouter();

  // Update current time every second
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const elapsedInterval = setInterval(() => {
      setElapsedMs(Date.now() - startTimeRef.current);
    }, 1000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(elapsedInterval);
    };
  }, []);

  // Rotating skills array
  const skills = [
    "DATA SCIENCE",
    "MACHINE LEARNING",
    "SOFTWARE ENGINEERING",
    "APPLIED PHYSICS",
    "HIGH PERFORMANCE COMPUTING",
    "COMPUTATIONAL MODELING",
  ];

  // Rotating skills effect
  useEffect(() => {
    setShowSkill(true);

    const cycleSkill = () => {
      setShowSkill(false);
      setTimeout(() => {
        setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
        setShowSkill(true);
      }, 500);
    };

    const skillInterval = setInterval(() => {
      cycleSkill();
    }, 2500);

    return () => clearInterval(skillInterval);
  }, [skills.length]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  // Time formatting
  const timeString = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const dateString = currentTime
    .toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    })
    .toUpperCase();

  function msToTimeString(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  }

  return (
    <div
      style={{
        /* The entire page is pinned so background doesn’t scroll. */
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#000",
        color: "#fff",
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 1,
          zIndex: -1,
        }}
      >
        <source src="/waves.mp4" type="video/mp4" />
      </video>

      {/* Top Header */}
      <div
        style={{
          position: "fixed",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "24px",
          fontWeight: "bold",
          opacity: 0.6,
          zIndex: 2,
        }}
      >
        WILLIAM LITTLE
      </div>

      {/* Side Tab Bar */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          fontSize: "20px",
          zIndex: 2,
          alignItems: "flex-start",
          textAlign: "left",
        }}
      >
        {/* ABOUT */}
        <div
          onClick={() => handleTabClick("about")}
          style={{
            cursor: "pointer",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            opacity: activeTab === "about" ? 1 : 0.6,
          }}
        >
          {activeTab === "about" && (
            <span style={{ fontSize: "12px", lineHeight: "1", color: "#fff" }}>
              ▶
            </span>
          )}
          <span
            style={{
              backgroundColor: activeTab === "about" ? "#fff" : "transparent",
              color: activeTab === "about" ? "#000" : "#fff",
              padding: "2px 4px",
              display: "inline-block",
              lineHeight: 1.2,
            }}
          >
            ABOUT
          </span>
        </div>

        {/* EXPERIENCE */}
        <div
          onClick={() => handleTabClick("experience")}
          style={{
            cursor: "pointer",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            opacity: activeTab === "experience" ? 1 : 0.6,
          }}
        >
          {activeTab === "experience" && (
            <span style={{ fontSize: "12px", lineHeight: "1", color: "#fff" }}>
              ▶
            </span>
          )}
          <span
            style={{
              backgroundColor:
                activeTab === "experience" ? "#fff" : "transparent",
              color: activeTab === "experience" ? "#000" : "#fff",
              padding: "2px 4px",
              display: "inline-block",
              lineHeight: 1.2,
            }}
          >
            EXPERIENCE
          </span>
        </div>
      </div>

      {/* Bottom Left: Current Date/Time */}
      <div
        style={{
          position: "fixed",
          bottom: "10px",
          left: "10px",
          fontSize: "20px",
          zIndex: 2,
        }}
      >
        {timeString}
        <br />
        {dateString}
      </div>

      {/* Bottom Right: Elapsed Time on Site */}
      <div
        style={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
          fontSize: "20px",
          textAlign: "right",
          zIndex: 2,
        }}
      >
        PLAY
        <br />
        {msToTimeString(elapsedMs)}
      </div>

      {/* 
        Main content containers:
        - If "about" is active, show a static container in the center
        - If "experience" is active, show a container with 80vh + scroll
      */}
      {activeTab === "about" && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50vw",
            zIndex: 2,
            textAlign: "left",
          }}
        >
          <About
            skills={skills}
            currentSkillIndex={currentSkillIndex}
            showSkill={showSkill}
          />
        </div>
      )}

      {activeTab === "experience" && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60vw",
            height: "80vh", // Large container
            overflowY: "auto", // scrollable
            zIndex: 2,
            textAlign: "left",
            paddingRight: "1rem",
          }}
        >
          <Experience experienceList={experienceList} />
        </div>
      )}
    </div>
  );
}
