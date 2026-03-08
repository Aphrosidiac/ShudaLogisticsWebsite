"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const cities = [
  {
    name: "Johor",
    chinese: "柔佛",
    desc: "Southern hub",
    sub: "Daily pickup & dispatch",
  },
  {
    name: "Malacca",
    chinese: "马六甲",
    desc: "Central stop",
    sub: "Express transit point",
  },
  {
    name: "Kuala Lumpur",
    chinese: "吉隆坡",
    desc: "Capital delivery",
    sub: "On-time, every time",
  },
];

// At what truck progress (0–1) each city activates
const THRESHOLDS = [0.02, 0.5, 0.97];

export default function Routes() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-120px" });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    let p = 0;
    const step = () => {
      p += 0.004;
      if (p <= 1) {
        setProgress(p);
        frame = requestAnimationFrame(step);
      } else {
        setProgress(1);
      }
    };
    const delay = setTimeout(() => { frame = requestAnimationFrame(step); }, 500);
    return () => { clearTimeout(delay); cancelAnimationFrame(frame); };
  }, [inView]);

  return (
    <section
      id="routes"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-[#1a0a2e] via-[#2d1354] to-[#4A1D63] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-purple-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block text-purple-300 font-semibold text-sm uppercase tracking-widest mb-3">
            Daily Routes · 每日路线
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            We Cover the <span className="text-[#C084FC]">West Coast</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Departing daily — connecting Malaysia's three most important commercial corridors.
          </p>
        </motion.div>

        {/* Route tracker */}
        <div className="relative px-4 md:px-12">

          {/* City dots + line row */}
          <div className="relative flex items-center justify-between mb-0">

            {/* Track background (full width grey line) */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-white/10 rounded-full" />

            {/* Animated fill line */}
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 h-1 rounded-full transition-none"
              style={{
                width: `${progress * 100}%`,
                background: "linear-gradient(90deg, #A855F7, #C084FC)",
                boxShadow: "0 0 12px rgba(168,85,247,0.7)",
                transition: "width 0.05s linear",
              }}
            />

            {/* Truck icon */}
            <div
              className="absolute top-1/2 z-20 pointer-events-none"
              style={{
                left: `calc(${progress * 100}% - 18px)`,
                transform: "translateY(-50%)",
                transition: "left 0.05s linear",
              }}
            >
              {/* Light trail */}
              <div
                className="absolute right-full top-1/2 -translate-y-1/2 h-1 w-10 rounded-full"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(192,132,252,0.5))",
                }}
              />
              {/* Truck SVG */}
              <svg viewBox="0 0 36 20" className="w-9 h-5 drop-shadow-lg">
                {/* Body */}
                <rect x="0" y="4" width="24" height="12" rx="2.5" fill="#7C3AED" />
                {/* Cab */}
                <rect x="19" y="2" width="11" height="14" rx="2" fill="#9333EA" />
                {/* Windshield */}
                <rect x="21" y="3.5" width="7" height="6" rx="1" fill="white" opacity="0.9" />
                {/* Cargo stripe */}
                <rect x="2" y="6" width="16" height="2" rx="1" fill="#6D28D9" opacity="0.6" />
                {/* Wheels */}
                <circle cx="7" cy="17.5" r="3" fill="#1e1b4b" />
                <circle cx="7" cy="17.5" r="1.4" fill="#7C3AED" />
                <circle cx="24" cy="17.5" r="3" fill="#1e1b4b" />
                <circle cx="24" cy="17.5" r="1.4" fill="#7C3AED" />
                {/* Headlight */}
                <circle cx="30.5" cy="9" r="2" fill="#FDE68A" opacity="0.95" />
                <circle cx="30.5" cy="9" r="4" fill="#FDE68A" opacity="0.15" />
              </svg>
            </div>

            {/* City nodes */}
            {cities.map((city, i) => {
              const active = progress >= THRESHOLDS[i];
              return (
                <div key={city.name} className="relative z-10 flex flex-col items-center">
                  {/* Outer pulse ring */}
                  {active && (
                    <div
                      className="absolute w-8 h-8 rounded-full border border-purple-400"
                      style={{ animation: "pulseRing 2s ease-out infinite", opacity: 0.4 }}
                    />
                  )}
                  {/* Dot */}
                  <div
                    className="w-5 h-5 rounded-full border-2 border-white/30 flex items-center justify-center transition-all duration-500"
                    style={{
                      background: active
                        ? "linear-gradient(135deg, #A855F7, #6B2D8B)"
                        : "rgba(255,255,255,0.1)",
                      boxShadow: active ? "0 0 16px rgba(168,85,247,0.6)" : "none",
                      borderColor: active ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.2)",
                    }}
                  >
                    {active && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                </div>
              );
            })}
          </div>

          {/* City labels — below the track */}
          <div className="flex justify-between mt-8">
            {cities.map((city, i) => {
              const active = progress >= THRESHOLDS[i];
              return (
                <motion.div
                  key={city.name}
                  className="flex flex-col items-center text-center max-w-[140px]"
                  animate={{ opacity: active ? 1 : 0.3 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-white font-black text-lg md:text-xl mb-0.5 leading-tight">
                    {city.name}
                  </div>
                  <div
                    className="text-sm font-medium mb-2 transition-colors duration-500"
                    style={{ color: active ? "#C084FC" : "rgba(255,255,255,0.3)" }}
                  >
                    {city.chinese}
                  </div>
                  <div className="hidden md:block text-white/50 text-xs leading-snug">
                    {city.sub}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom info strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 text-center"
        >
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Trucks departing <span className="text-white font-semibold ml-1">every day</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/20" />
          <div className="text-white/60 text-sm">
            Including <span className="text-white font-semibold">weekends & public holidays</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/20" />
          <div className="text-white/60 text-sm">
            Always Open · <span className="text-white font-semibold">24/7</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
