"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const words = ["Fast.", "Reliable.", "Every Day."];

function SpeedLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent opacity-30"
          style={{
            top: `${15 + i * 10}%`,
            width: `${60 + Math.random() * 40}%`,
            left: "-100%",
            animation: `speedLine ${1.5 + i * 0.2}s ease-out ${i * 0.08}s forwards`,
          }}
        />
      ))}
    </div>
  );
}

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => {
        const size = 2 + (i % 3);
        const left = `${5 + i * 4.5}%`;
        const top = `${10 + (i % 8) * 11}%`;
        const delay = `${i * 0.3}s`;
        const duration = `${4 + (i % 4)}s`;
        return (
          <div
            key={i}
            className="absolute rounded-full bg-purple-400 opacity-20"
            style={{
              width: size,
              height: size,
              left,
              top,
              animation: `float ${duration} ease-in-out ${delay} infinite`,
            }}
          />
        );
      })}
    </div>
  );
}

export default function Hero() {
  const [truckLoaded, setTruckLoaded] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setTruckLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!truckLoaded) return;
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [truckLoaded]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[#1a0a2e] via-[#2d1354] to-[#4A1D63]">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <FloatingParticles />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/80 text-sm">Daily Departures — Operating Now</span>
            </motion.div>

            {/* Headline */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight"
              >
                Delivering
              </motion.h1>
            </div>

            {/* Animated rotating word */}
            <div className="h-20 md:h-24 overflow-hidden mb-4">
              <motion.div
                key={wordIndex}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -60, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-5xl md:text-6xl lg:text-7xl font-black text-[#C084FC] leading-tight"
              >
                {words[wordIndex]}
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.6 }}
              className="text-white/70 text-lg md:text-xl mb-3"
            >
              每日准时，速达全马
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="text-white/50 text-base mb-10"
            >
              Daily freight runs · Johor · Malacca · Kuala Lumpur
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://wa.me/60127239510"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group flex items-center gap-2 bg-white text-[#6B2D8B] px-7 py-3.5 rounded-full font-bold text-base shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
              >
                {/* Pulse rings */}
                <span className="absolute inset-0 rounded-full bg-white animate-pulse-ring opacity-30 scale-110" />
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#25D366]">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Book via WhatsApp
              </a>
              <a
                href="#services"
                className="flex items-center gap-2 border-2 border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-base hover:bg-white/10 transition-all duration-300 hover:border-white/60"
              >
                Our Services
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Truck side */}
          <div className="relative flex flex-col items-center justify-center gap-4">
            <SpeedLines />

            {/* Glow behind truck */}
            <div className="absolute w-80 h-80 rounded-full bg-purple-500/20 blur-3xl" />

            {/* Truck image */}
            <div className={truckLoaded ? "animate-truck-in" : "opacity-0"}>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/Logo/Shuda Logistics White Logo Transparent.png"
                  alt="Shuda Logistics Truck"
                  width={520}
                  height={280}
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </motion.div>
            </div>

            {/* License badge — sits below the logo, no overlap */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.5 }}
              className="relative flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-5 py-2"
            >
              <span className="text-white/50 text-xs">License No.</span>
              <span className="text-white font-bold text-sm">1489547.W</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full fill-white">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
