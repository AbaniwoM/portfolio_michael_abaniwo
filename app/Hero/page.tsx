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
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
      <motion.div style={{ y: y1 }} className="absolute top-1/4 left-10 md:left-20">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-teal-400 opacity-30">
          <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 18V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 21H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 3H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute top-1/2 right-10 md:right-20">
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-teal-400 opacity-30">
            <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
         </svg>
      </motion.div>
      <motion.div style={{ y: y3 }} className="absolute bottom-1/4 left-1/4">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-teal-400 opacity-30">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 2L12 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M2 12L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </motion.div>
      <motion.div style={{ y: y4 }} className="absolute bottom-1/3 right-1/4">
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-teal-400 opacity-30">
          <path d="M12 2V22M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
      <div className="relative mb-8">
        <div className="w-40 h-40 rounded-full bg-green-400 blur-2xl absolute -inset-2"></div>
        <Image
          src="/mike.jpeg" // Make sure to add a profile picture in your `public` folder
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full relative"
        />
      </div>
      <h1 className="heroText text-5xl md:text-7xl font-light leading-tight">
        I&apos;m a web developer
        <br />
        specialized in
        <br />
        <span className="inline-block border-b-2 border-gray-500 w-174">ReactJs (NextJs)</span>.
      </h1>
    </div>
  );
};

export default Hero;