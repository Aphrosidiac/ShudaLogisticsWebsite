"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-[#6B2D8B] to-[#2d1354] rounded-3xl p-10 overflow-hidden">
              {/* Background pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
              <div className="relative">
                <Image
                  src="/Logo/Shuda Logistics White Logo Transparent.png"
                  alt="Shuda Logistics"
                  width={400}
                  height={220}
                  className="object-contain mx-auto animate-float"
                />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#6B2D8B]/10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-[#6B2D8B]" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">Licensed Operator</div>
                  <div className="text-xs text-gray-400">Lic. No. 1489547.W</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block text-[#6B2D8B] font-semibold text-sm uppercase tracking-widest mb-3">
              About Us · 关于我们
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              速达货运<br />
              <span className="text-[#6B2D8B]">Shuda Logistics</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Shuda Logistics (速达货运有限公司) is a registered Malaysian freight operator dedicated to connecting businesses across Johor, Malacca, and Kuala Lumpur with fast, dependable daily deliveries.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              Founded on the principle that every shipment matters, we operate 7 days a week — because your business doesn't take a day off, and neither do we.
            </p>
            <p className="text-gray-500 leading-relaxed text-sm">
              每日运行 柔佛，马六甲，吉隆坡 — Whether you're shipping machinery parts, consumer goods, or anything in between, Shuda delivers it safely and on time.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Johor", "Malacca", "Kuala Lumpur", "Daily Ops", "Licensed"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full bg-purple-50 text-[#6B2D8B] text-sm font-medium border border-purple-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
