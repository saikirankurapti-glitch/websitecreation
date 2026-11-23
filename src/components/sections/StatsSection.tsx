'use client';

import { STATS } from '@/lib/constants';
import { useEffect, useRef, useState } from 'react';

function AnimatedNumber({ value }: { value: string }) {
  const [displayed, setDisplayed] = useState('0');
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const numericPart = parseFloat(value.replace(/[^0-9.]/g, ''));
          const suffix = value.replace(/[0-9.]/g, '');
          const duration = 1800;
          const steps = 50;
          const stepValue = numericPart / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += stepValue;
            if (current >= numericPart) {
              clearInterval(timer);
              setDisplayed(value);
            } else {
              setDisplayed(
                `${Number.isInteger(numericPart) ? Math.floor(current) : current.toFixed(1)}${suffix}`
              );
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="gradient-text">
      {displayed}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="relative py-20 px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/50 via-[#030712] to-[#030712] pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="glass glass-hover rounded-2xl p-6 text-center group"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="text-4xl md:text-5xl font-black mb-2 tracking-tight">
                <AnimatedNumber value={stat.value} />
              </div>
              <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
              <div className="text-slate-500 text-xs">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
