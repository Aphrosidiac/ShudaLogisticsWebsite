"use client";

import { motion } from "framer-motion";

// Clean SVG icons — no emojis
const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);
const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const IconBell = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5h3m-6.75-14.054A7.5 7.5 0 0119.5 12v.75a4.5 4.5 0 004.5 4.5H.75a4.5 4.5 0 004.5-4.5V12a7.5 7.5 0 012.25-5.304" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c.966 0 1.75.784 1.75 1.75v.575a7.5 7.5 0 015 7.175V12" />
  </svg>
);
const IconTag = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
  </svg>
);
const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>
);
const IconTruck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
  </svg>
);

const features = [
  {
    icon: <IconClock />,
    title: "Daily Departures",
    chinese: "每日出发",
    desc: "We don't skip days. Rain or shine, your cargo departs on schedule — every single day.",
    stat: "365",
    statLabel: "days a year",
  },
  {
    icon: <IconBell />,
    title: "Real-Time Updates",
    chinese: "实时更新",
    desc: "WhatsApp notifications at every milestone — dispatched, in transit, delivered.",
    stat: "24/7",
    statLabel: "always reachable",
  },
  {
    icon: <IconTag />,
    title: "Competitive Rates",
    chinese: "价格优惠",
    desc: "Transparent pricing, no hidden fees. Fair rates for SMEs and large businesses alike.",
    stat: "0",
    statLabel: "hidden charges",
  },
  {
    icon: <IconTruck />,
    title: "Experienced Drivers",
    chinese: "经验丰富",
    desc: "Seasoned drivers who know every route — professional, careful, and punctual.",
    stat: "10+",
    statLabel: "years on the road",
  },
];

export default function WhyUs() {
  return (
    <section className="py-28 bg-[#F3EEF9] relative overflow-hidden">
      {/* Faint radial gradient top-right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-100/60 blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-[#6B2D8B] font-semibold text-sm uppercase tracking-widest mb-4">
              <div className="w-6 h-px bg-[#6B2D8B]" />
              Why Shuda · 为何选择我们
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              The Difference Is<br />
              in the <span className="text-[#6B2D8B]">Details</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-gray-500 text-lg leading-relaxed lg:mb-1"
          >
            We're not just another truck on the highway. Every shipment is handled with the care and precision of a true logistics partner.
          </motion.p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Featured card — Licensed & Registered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:row-span-2 group relative bg-[#6B2D8B] rounded-3xl p-8 flex flex-col justify-between overflow-hidden min-h-[320px]"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "radial-gradient(circle at 30% 70%, white 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            {/* Top glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-purple-400/30 blur-2xl" />

            <div className="relative">
              <div className="inline-flex p-3 rounded-2xl bg-white/15 text-white mb-6">
                <IconShield />
              </div>
              <h3 className="text-white font-black text-2xl mb-1">Licensed &</h3>
              <h3 className="text-white font-black text-2xl mb-2">Registered</h3>
              <div className="text-purple-200 text-sm font-medium mb-5">持牌经营</div>
              <p className="text-white/70 text-sm leading-relaxed">
                Fully licensed freight operator under the Commercial Vehicle Licensing Board of Malaysia.
              </p>
            </div>

            {/* License number — hero element */}
            <div className="relative mt-8">
              <div className="text-purple-300/60 text-xs font-semibold uppercase tracking-widest mb-2">
                License No.
              </div>
              <div className="text-white font-black text-4xl tracking-wide">
                1489547.W
              </div>
              <div className="mt-3 inline-flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-white/80 text-xs font-medium">Verified operator</span>
              </div>
            </div>
          </motion.div>

          {/* Feature cards — 4 cards filling 2 cols × 2 rows */}
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i + 1) * 0.08 }}
              className="group bg-white rounded-3xl p-7 border border-purple-100 shadow-sm hover:border-[#6B2D8B]/30 hover:shadow-xl hover:shadow-purple-200/50 transition-all duration-300 flex flex-col justify-between min-h-[155px]"
            >
              <div>
                <div className="flex items-start justify-between mb-5">
                  <div className="inline-flex p-2.5 rounded-xl bg-purple-50 text-[#6B2D8B] group-hover:bg-[#6B2D8B] group-hover:text-white transition-colors duration-300">
                    {f.icon}
                  </div>
                  {/* Stat badge */}
                  <div className="text-right">
                    <div className="text-2xl font-black text-gray-900">{f.stat}</div>
                    <div className="text-gray-400 text-xs">{f.statLabel}</div>
                  </div>
                </div>
                <h3 className="text-gray-900 font-bold text-lg mb-0.5">{f.title}</h3>
                <div className="text-[#6B2D8B] text-xs font-medium mb-3">{f.chinese}</div>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}

          {/* Wide bottom card — Trusted by SMEs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:col-span-3 bg-gray-900 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden relative"
          >
            <div className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
            <div className="relative">
              <div className="inline-flex p-2.5 rounded-xl bg-white/10 text-white mb-4">
                <IconUsers />
              </div>
              <h3 className="text-white font-bold text-xl mb-1">Trusted by Malaysian SMEs</h3>
              <div className="text-purple-300 text-xs font-medium mb-3">中小企业首选</div>
              <p className="text-white/50 text-sm leading-relaxed max-w-md">
                Hundreds of businesses across Johor, Malacca, and KL rely on Shuda for their regular freight needs — from manufacturers to retailers.
              </p>
            </div>
            <div className="relative flex-shrink-0 flex gap-4">
              {[["500+", "Monthly Deliveries"], ["3", "States"], ["10+", "Years Running"]].map(([num, label]) => (
                <div key={label} className="text-center bg-white/5 rounded-2xl px-5 py-4 border border-white/10">
                  <div className="text-white font-black text-2xl">{num}</div>
                  <div className="text-white/40 text-xs mt-0.5 whitespace-nowrap">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
