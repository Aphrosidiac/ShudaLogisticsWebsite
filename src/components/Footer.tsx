"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  const [truckSmoke, setTruckSmoke] = useState(false);

  return (
    <footer className="bg-[#1a0a2e] text-white">
      {/* CTA banner */}
      <div className="bg-[#6B2D8B] py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-black mb-1">Ready to Ship Today?</h3>
            <p className="text-white/70">Our trucks leave daily — don't miss the next run.</p>
          </div>
          <motion.a
            href="https://wa.me/60127239510"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 bg-white text-[#6B2D8B] px-8 py-3.5 rounded-full font-bold text-base shadow-xl hover:shadow-white/20 transition-all flex-shrink-0"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#25D366]">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us Now
          </motion.a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Image
              src="/Logo/Shuda Logistics White Logo Transparent.png"
              alt="Shuda Logistics"
              width={180}
              height={70}
              className="object-contain mb-4"
            />
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              速达货运有限公司 — Daily freight between Johor, Malacca, and Kuala Lumpur.
            </p>
            <div className="text-white/30 text-xs">License No. 1489547.W</div>
          </div>

          {/* Quick links */}
          <div>
            <div className="font-semibold text-white/80 mb-4 text-sm uppercase tracking-wide">Quick Links</div>
            <ul className="space-y-2">
              {["#services", "#routes", "#about", "#contact"].map((href) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-white/50 hover:text-white text-sm transition-colors capitalize"
                  >
                    {href.replace("#", "")}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Easter egg truck */}
          <div className="flex flex-col items-start md:items-end">
            <div className="font-semibold text-white/80 mb-4 text-sm uppercase tracking-wide">
              Daily Departures
            </div>
            <p className="text-white/50 text-sm mb-1">Always Open · 24/7</p>
            <p className="text-white/50 text-sm mb-1">+60 12-723 9510</p>
            <p className="text-white/50 text-sm mb-1">No. 16, Jalan Mutiara Perdana 1</p>
            <p className="text-white/50 text-sm mb-6">83000 Batu Pahat, Johor</p>

            {/* Easter egg: truck with smoke on hover */}
            <div
              className="relative cursor-pointer group"
              onMouseEnter={() => setTruckSmoke(true)}
              onMouseLeave={() => setTruckSmoke(false)}
              title="Vroom! 🚛"
            >
              <span className="text-xs text-white/20 group-hover:text-white/50 transition-colors absolute -top-5 left-0 whitespace-nowrap">
                {truckSmoke ? "Vroom! 🚛" : "hover me..."}
              </span>
              {/* Smoke puffs */}
              {truckSmoke && (
                <div className="absolute -top-8 left-0 flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ y: 0, opacity: 0.8, scale: 0.5 }}
                      animate={{ y: -20, opacity: 0, scale: 1.5 }}
                      transition={{ duration: 0.8, delay: i * 0.15, repeat: Infinity }}
                      className="w-3 h-3 rounded-full bg-white/20"
                    />
                  ))}
                </div>
              )}
              <svg viewBox="0 0 80 32" className="w-20 h-8 fill-white/20 group-hover:fill-white/40 transition-colors">
                <rect x="0" y="8" width="55" height="16" rx="3" />
                <rect x="42" y="4" width="22" height="14" rx="2" />
                <rect x="55" y="12" width="8" height="4" rx="1" />
                <circle cx="15" cy="26" r="5" fill="#1a0a2e" stroke="white" strokeWidth="1.5" strokeOpacity="0.3" />
                <circle cx="55" cy="26" r="5" fill="#1a0a2e" stroke="white" strokeWidth="1.5" strokeOpacity="0.3" />
                <circle cx="15" cy="26" r="2" />
                <circle cx="55" cy="26" r="2" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Shuda Logistics Sdn. Bhd. · 速达货运有限公司 · All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            License No. 1489547.W · Malaysia
          </p>
        </div>
      </div>
    </footer>
  );
}
