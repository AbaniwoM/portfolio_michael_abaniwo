"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

type Testimonial = {
  image: string;
  name: string;
  description: string;
  link: string;
  imgClassName?: string;
};

const testimonials: Testimonial[] = [
  {
    image: "/proddly.png",
    name: "Proddly Guides",
    description: "Built the learn module of the proddly application that gives users access to materials in different learning stacks.",
    link: "https://learn.proddly.com/learn/proddly-guides",
    imgClassName: "w-28 h-28 object-contain"
  },
  {
    image: "/reveries&knight.jpg",
    name: "Reveries & Knight Law Firm",
    description: "Built the Reveries & Knight Law firm website with nextjs and modern technologies.",
    link: "https://reveriesandknight.com",
    imgClassName: "w-28 h-28 object-contain rounded-xl"
  },
  {
    image: "/meava.jpeg",
    name: "Meava Couture",
    description: "Excellent work Michael! The application has made running my business much easier. I can calculate costs, generate receipts, and manage transactions seamlessly. It helped with my branding strategy for 2026. Thank you for your professionalism, responsiveness, and attention to detail. I highly recommend your services.",
    link: "https://fashion-design-solution.netlify.app",
    imgClassName: "w-28 h-28 object-contain rounded-xl"
  },
  {
    image: "/logo.png",
    name: "Great Grace Collection",
    description: "Developed e-commerce shopping workflows with Next.js, Stripe checkout, and automated invoices.",
    link: "https://great-grace-collection.netlify.app/",
    imgClassName: "w-24 h-24 object-contain rounded-lg"
  }
];

const Teams = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0
    })
  };

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="teamContent flex flex-col p-6 mt-22 max-w-5xl mx-auto relative overflow-hidden">
      <div className="flex flex-col items-center text-center gap-3 mb-12">
        <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          TESTIMONIALS
        </span>
        <h2 className='techHeader text-[3rem] font-display font-extrabold text-slate-100 tracking-tight leading-tight'>
          Clients I have <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">worked for</span>
        </h2>
      </div>

      {/* Testimonial slider workspace */}
      <div className="relative w-full min-h-[360px] md:min-h-[300px] flex items-center justify-center bg-slate-900/15 border border-slate-900/60 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-2xl">
        
        {/* Decorative Quote Icon */}
        <FaQuoteLeft className="absolute top-8 left-8 text-4xl text-emerald-500/10 pointer-events-none" />

        <div className="relative w-full overflow-hidden flex flex-col items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full flex flex-col items-center text-center gap-6"
            >
              {/* Logo / Image container */}
              <div className="w-32 h-32 flex items-center justify-center bg-slate-950/60 border border-slate-800/40 rounded-full p-4 hover:border-emerald-500/30 transition-all duration-300 shadow-inner">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    width={100}
                    height={100}
                    className="max-w-full max-h-full object-contain filter brightness-90 contrast-105"
                  />
                </div>
              </div>

              {/* Testimonial Description Quote */}
              <blockquote className="text-[1.1rem] md:text-[1.25rem] text-slate-300 leading-relaxed max-w-2xl font-medium italic">
                &ldquo;{testimonials[current].description}&rdquo;
              </blockquote>

              {/* Client/Project Name and Action link */}
              <div className="flex flex-col gap-1.5 mt-2">
                <cite className="not-italic font-display font-bold text-slate-100 text-lg">
                  {testimonials[current].name}
                </cite>
                <a
                  href={testimonials[current].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 tracking-wider uppercase transition-colors duration-200"
                >
                  View live project &rarr;
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Arrow Controls */}
        <div className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4 z-20">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-950/80 border border-slate-800/60 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 hover:scale-105 transition-all duration-200 cursor-pointer flex items-center justify-center"
          >
            <FaChevronLeft className="text-sm md:text-base" />
          </button>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 z-20">
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-950/80 border border-slate-800/60 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 hover:scale-105 transition-all duration-200 cursor-pointer flex items-center justify-center"
          >
            <FaChevronRight className="text-sm md:text-base" />
          </button>
        </div>
      </div>

      {/* Pagination dot indicators */}
      <div className="flex justify-center gap-2.5 mt-8">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > current ? 1 : -1);
              setCurrent(idx);
            }}
            aria-label={`Go to slide ${idx + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === current 
                ? "bg-emerald-400 w-6 shadow-md shadow-emerald-500/20" 
                : "bg-slate-800 hover:bg-slate-700"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Teams;