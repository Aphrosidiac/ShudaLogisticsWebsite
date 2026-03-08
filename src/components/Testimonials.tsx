"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ahmad Razif",
    company: "AR Hardware, Johor Bahru",
    text: "Shuda has been our go-to for over 3 years. Never missed a single delivery — our KL customers always get their orders on time.",
    rating: 5,
    initial: "A",
  },
  {
    name: "Mei Ling Tan",
    company: "Tan Textile, Malacca",
    text: "Very reliable and the rates are very reasonable. WhatsApp updates make it easy to track. Highly recommend to any SME.",
    rating: 5,
    initial: "M",
  },
  {
    name: "Ravi Kumar",
    company: "RK Electronics, Kuala Lumpur",
    text: "I ship from KL to Johor weekly. Shuda handles it all — pickup, delivery, everything. Very professional service.",
    rating: 5,
    initial: "R",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="w-4 h-4 fill-yellow-400">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block text-[#6B2D8B] font-semibold text-sm uppercase tracking-widest mb-3">
            Testimonials · 客户评价
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Trusted by <span className="text-[#6B2D8B]">Real Businesses</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Don't take our word for it — here's what our customers say.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-purple-100 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Quote mark */}
              <div className="text-5xl text-purple-100 font-serif leading-none mb-4">"</div>

              <Stars count={t.rating} />

              <p className="text-gray-600 mt-4 mb-6 text-sm leading-relaxed">"{t.text}"</p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#6B2D8B] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {t.initial}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
