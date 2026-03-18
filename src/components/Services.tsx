"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: "Full Truck Load",
    chinese: "整车运输",
    description: "Dedicated truck solely for your cargo. Maximum efficiency and security for large-volume shipments across all three corridors.",
    tag: "Best for large orders",
  },
  {
    num: "02",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: "LTL Cargo",
    chinese: "零担运输",
    description: "Share truck space with other shipments. Pay only for what you use — perfect for smaller businesses managing freight costs.",
    tag: "Cost-effective",
  },
  {
    num: "03",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Same-Day Dispatch",
    chinese: "当天发货",
    description: "Book before cut-off and your cargo departs the same day. Because in logistics, timing is everything.",
    tag: "Time-sensitive",
  },
  {
    num: "04",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Door-to-Door",
    chinese: "上门取送",
    description: "We collect from your premises and deliver directly to the recipient. No middlemen, no depot runs — fully handled.",
    tag: "Most convenient",
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" className="py-16 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-[#6B2D8B] font-semibold text-sm uppercase tracking-widest mb-4">
              <div className="w-6 h-px bg-[#6B2D8B]" />
              What We Offer · 我们的服务
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Built for Malaysian<br />
              <span className="text-[#6B2D8B]">Businesses</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-gray-500 text-base sm:text-lg leading-relaxed"
          >
            From single parcels to full truckloads — we move your goods daily across the most important corridors in Malaysia.
          </motion.p>
        </div>

        {/* Service list */}
        <div className="divide-y divide-gray-100">
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-start sm:items-center py-6 sm:py-8 px-4 sm:px-6 cursor-default overflow-hidden"
            >
              {/* Hover fill — slides in from left */}
              <div
                className="absolute inset-0 bg-[#6B2D8B] rounded-2xl transition-all duration-500 ease-out pointer-events-none"
                style={{
                  transform: hovered === i ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                  opacity: hovered === i ? 1 : 0,
                }}
              />

              {/* Large background number */}
              <div
                className="absolute right-6 top-1/2 -translate-y-1/2 font-black text-[100px] leading-none select-none pointer-events-none transition-colors duration-500"
                style={{
                  color: hovered === i ? "rgba(255,255,255,0.06)" : "rgba(107,45,139,0.05)",
                }}
              >
                {service.num}
              </div>

              {/* Mobile layout: icon + title row */}
              <div className="relative sm:hidden flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                  style={{
                    background: hovered === i ? "rgba(255,255,255,0.15)" : "#F3EEF9",
                    color: hovered === i ? "white" : "#6B2D8B",
                  }}
                >
                  {service.icon}
                </div>
                <div>
                  <h3
                    className="font-black text-lg transition-colors duration-300"
                    style={{ color: hovered === i ? "white" : "#111827" }}
                  >
                    {service.title}
                  </h3>
                  <div
                    className="text-sm font-medium transition-colors duration-300"
                    style={{ color: hovered === i ? "rgba(255,255,255,0.6)" : "#9B4DC8" }}
                  >
                    {service.chinese}
                  </div>
                </div>
                <span
                  className="font-black text-xs ml-auto transition-colors duration-300"
                  style={{ color: hovered === i ? "rgba(255,255,255,0.4)" : "#D8B4FE" }}
                >
                  {service.num}
                </span>
              </div>

              {/* Mobile: description */}
              <div className="relative sm:hidden">
                <p
                  className="text-sm leading-relaxed transition-colors duration-300"
                  style={{ color: hovered === i ? "rgba(255,255,255,0.75)" : "#6B7280" }}
                >
                  {service.description}
                </p>
              </div>

              {/* Mobile: tag pill */}
              <div className="relative sm:hidden flex items-center gap-2">
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full transition-all duration-300"
                  style={{
                    background: hovered === i ? "rgba(255,255,255,0.15)" : "#F3EEF9",
                    color: hovered === i ? "rgba(255,255,255,0.8)" : "#6B2D8B",
                  }}
                >
                  {service.tag}
                </span>
              </div>

              {/* Desktop: Number */}
              <div className="relative hidden sm:block sm:col-span-1">
                <span
                  className="font-black text-sm transition-colors duration-300"
                  style={{ color: hovered === i ? "rgba(255,255,255,0.4)" : "#D8B4FE" }}
                >
                  {service.num}
                </span>
              </div>

              {/* Desktop: Icon */}
              <div className="relative hidden sm:block sm:col-span-1">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    background: hovered === i ? "rgba(255,255,255,0.15)" : "#F3EEF9",
                    color: hovered === i ? "white" : "#6B2D8B",
                  }}
                >
                  {service.icon}
                </div>
              </div>

              {/* Desktop: Title */}
              <div className="relative hidden sm:block sm:col-span-3">
                <h3
                  className="font-black text-xl transition-colors duration-300"
                  style={{ color: hovered === i ? "white" : "#111827" }}
                >
                  {service.title}
                </h3>
                <div
                  className="text-sm font-medium mt-0.5 transition-colors duration-300"
                  style={{ color: hovered === i ? "rgba(255,255,255,0.6)" : "#9B4DC8" }}
                >
                  {service.chinese}
                </div>
              </div>

              {/* Desktop: Description */}
              <div className="relative hidden sm:block sm:col-span-5">
                <p
                  className="text-sm leading-relaxed transition-colors duration-300"
                  style={{ color: hovered === i ? "rgba(255,255,255,0.75)" : "#6B7280" }}
                >
                  {service.description}
                </p>
              </div>

              {/* Desktop: Tag + Arrow */}
              <div className="relative hidden sm:flex sm:col-span-2 items-center justify-end gap-3">
                <span
                  className="hidden lg:block text-xs font-semibold px-3 py-1 rounded-full transition-all duration-300 whitespace-nowrap"
                  style={{
                    background: hovered === i ? "rgba(255,255,255,0.15)" : "#F3EEF9",
                    color: hovered === i ? "rgba(255,255,255,0.8)" : "#6B2D8B",
                  }}
                >
                  {service.tag}
                </span>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                  style={{
                    background: hovered === i ? "rgba(255,255,255,0.2)" : "#F3EEF9",
                    color: hovered === i ? "white" : "#6B2D8B",
                    transform: hovered === i ? "translateX(4px)" : "translateX(0)",
                  }}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
