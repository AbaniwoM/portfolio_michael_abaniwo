"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

type TimelineItem = {
  year: string;
  role: string;
  company: string;
  description: string;
};

const timelineData: TimelineItem[] = [
  {
    year: "2025 - PRESENT",
    role: "Lead Frontend Engineer",
    company: "Proddly",
    description: "Architected and built the main learning module guides platform, enabling users to access multi-stack software tutorials and documents seamlessly."
  },
  {
    year: "2025",
    role: "Frontend Developer",
    company: "Reveries & Knight",
    description: "Designed and implemented the legal firm's official web presence using Next.js, building a custom appointment scheduler and high-speed page routers."
  },
  {
    year: "2025 - 2026",
    role: "Technical Partner",
    company: "Meava Couture",
    description: "Developed a custom client-facing business portal and specialized measurement tracking ledger app, automating design workflows."
  },
  {
    year: "2026",
    role: "Full-Stack Web Developer",
    company: "Great Grace Collection",
    description: "Built a production-grade e-commerce application integrating Stripe checkout, shopping cart state management, and real-time email invoicing."
  }
];

const Career = () => {
  return (
    <section id="career" className="relative py-24 px-6 bg-slate-950/40 border-t border-slate-900/40">
      {/* Background outline text decoration */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.02] text-[10rem] font-display font-black tracking-widest text-slate-100 whitespace-nowrap hidden lg:block">
        MY CAREER
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            EXPERIENCE
          </span>
          <h2 className="text-[3rem] font-display font-extrabold text-slate-100 tracking-tight leading-tight">
            My Professional <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Timeline</span>
          </h2>
          <p className="text-[1.1rem] leading-relaxed text-slate-400 max-w-lg mt-2">
            A history of building responsive client-facing websites and software solutions.
          </p>
        </div>

        {/* Vertical Timeline Tree */}
        <div className="relative border-l border-slate-800/80 ml-4 md:ml-32 py-4 flex flex-col gap-12">
          {timelineData.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Icon indicator node */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border-2 border-slate-800 group-hover:border-emerald-400 flex items-center justify-center text-slate-400 group-hover:text-emerald-400 shadow-lg transition-colors duration-300">
                <FaBriefcase className="text-xs" />
              </div>

              {/* Float Time Container for larger screens */}
              <div className="md:absolute md:right-[calc(100%+2.5rem)] md:top-2 flex items-center gap-1.5 md:justify-end text-xs font-semibold tracking-wider text-emerald-400 select-none mb-2 md:mb-0 md:w-32">
                <FaCalendarAlt className="text-[10px] opacity-70" />
                <span>{item.year}</span>
              </div>

              {/* Timeline Card */}
              <div className="p-6 rounded-2xl bg-slate-900/20 backdrop-blur-sm border border-slate-850 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300">
                <div className="flex flex-col gap-1 mb-3">
                  <h3 className="text-xl font-display font-bold text-slate-100 group-hover:text-emerald-400 transition-colors duration-300">
                    {item.role}
                  </h3>
                  <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                    {item.company}
                  </span>
                </div>
                <p className="text-[0.95rem] text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
