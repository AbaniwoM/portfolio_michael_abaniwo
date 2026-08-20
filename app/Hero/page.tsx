"use client"; // Add this line for Next.js 13+ App Router

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 400], [0, 70]);
  const y2 = useTransform(scrollY, [0, 400], [0, -60]);
  const y3 = useTransform(scrollY, [0, 400], [0, 50]);
  const y4 = useTransform(scrollY, [0, 400], [0, -40]);


  return (
    <div className="bg-slate-950 text-white min-h-screen flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
      {/* Sleek cyber grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40"></div>

      {/* Floating SVGs with Scroll Parallax */}
      <motion.div style={{ y: y1 }} className="absolute top-1/4 left-10 md:left-20 pointer-events-none hidden sm:block">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-emerald-500 opacity-20">
          <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 18V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 21H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute top-1/2 right-10 md:right-20 pointer-events-none hidden sm:block">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-teal-500 opacity-20">
          <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
      <motion.div style={{ y: y3 }} className="absolute bottom-1/4 left-1/4 pointer-events-none hidden sm:block">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-emerald-500 opacity-20">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 2L12 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </motion.div>
      <motion.div style={{ y: y4 }} className="absolute bottom-1/3 right-1/4 pointer-events-none hidden sm:block">
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-teal-500 opacity-20">
          <path d="M12 2V22M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>

      {/* Greeting Tag */}
      <div className="z-10 mb-6">
        <span className="text-xs uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20 font-semibold shadow-inner select-none">
          Available for new opportunities
        </span>
      </div>

      {/* Glowing profile photo wrapper */}
      <div className="relative mb-10 group cursor-pointer z-10">
        <div className="w-40 h-40 rounded-full bg-linear-to-tr from-emerald-500 via-teal-400 to-cyan-400 blur-2xl absolute -inset-2 opacity-50 group-hover:opacity-75 group-hover:scale-105 transition-all duration-500"></div>
        <div className="relative w-[150px] h-[150px] rounded-full p-0.5 bg-linear-to-tr from-emerald-500 via-teal-400 to-cyan-400 group-hover:scale-102 transition-transform duration-500">
          <Image
            src="/mike.jpeg"
            alt="Profile Picture"
            width={146}
            height={146}
            className="rounded-full object-cover w-full h-full bg-slate-900"
          />
        </div>
      </div>

      <h1 className="heroText text-5xl md:text-7xl font-display font-extrabold tracking-tight leading-tight z-10">
        I&apos;m a <span className="bg-linear-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Software Engineer</span>
        <br />
        specialized in
        <br />
        <span className="inline-block relative text-emerald-400 after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-emerald-400 after:to-teal-400 after:rounded-full">NextJs, React Native, NodeJs</span>.
      </h1>
    </div>
  );
};

export default Hero;