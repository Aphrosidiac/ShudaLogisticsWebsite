"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: 500, suffix: "+", label: "Deliveries / Month", chinese: "每月配送" },
  { value: 4, suffix: "", label: "States Covered", chinese: "覆盖州属" },
  { value: 10, suffix: "+", label: "Years Experience", chinese: "年营运经验" },
  { value: 100, suffix: "%", label: "Daily Departures", chinese: "每日准时出发" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = value / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-[#6B2D8B] py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((stat) => (
            <div key={stat.label} className="group">
              <div className="text-4xl md:text-5xl font-black mb-1 tabular-nums">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white/60 text-xs mb-1">{stat.chinese}</div>
              <div className="text-white/80 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
