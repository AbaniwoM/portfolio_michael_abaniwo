"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import typescriptImg from '../../public/typescript.png';
import tailwindcssImg from '../../public/tailwindcss.png';
import sanityImg from '../../public/sanity.png';
import nextImg from '../../public/next.png';
import reactNativeImg from '../../public/react-native-logo.png';
import pythonImg from '../../public/python.png';
import fireBaseImg from '../../public/firebase-logo.png';
import expoImg from '../../public/expo-logo.png';

type SkillCircleProps = {
  percentage: number;
};

const SkillCircle = ({ percentage }: SkillCircleProps) => {
  const radius = 22;
  const strokeWidth = 3.5;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="relative w-14 h-14 flex items-center justify-center flex-none">
      <svg className="w-full h-full transform -rotate-90">
        {/* Track circle */}
        <circle
          cx="28"
          cy="28"
          r={radius}
          className="stroke-slate-800/80"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Animated progress circle */}
        <motion.circle
          cx="28"
          cy="28"
          r={radius}
          className="stroke-emerald-400"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: circumference - (circumference * percentage) / 100 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </svg>
      {/* Percentage text inside circle */}
      <span className="absolute text-[10px] font-bold font-display text-slate-300">
        {percentage}%
      </span>
    </div>
  );
};

const Technologies = () => {
  return (
    <div className='techContent flex p-6 justify-between flex-wrap items-center mt-22 gap-10'>
      <div className='techCenter flex flex-col gap-5'>
        <h2 className='techHeader text-[3rem] font-display font-extrabold text-slate-100 tracking-tight leading-tight'>
          Technologies I <span className="bg-linear-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">work with</span>
        </h2>
        <p className='techText text-[1.1rem] leading-relaxed w-120 text-slate-400'>
          I work with a number of Technologies namely; ReactJs (NextJs), TypeScript, TailwindCSS, Sanity, Python. These help me to deliver accurate work in specified time.
        </p>
      </div>
      <div className='flex flex-col gap-5'>
        <div className='flex gap-5'>
          {/* Next.js card */}
          <div className="techImage w-68 h-32 bg-slate-900/30 backdrop-blur-sm border border-slate-800/60 rounded-2xl flex items-center justify-between p-5 transition-all duration-300 hover:scale-105 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 group">
            <div className="flex items-center justify-center flex-1 mr-4 h-full">
              <Image src={nextImg} alt='next-img' className='max-h-full w-auto object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300' />
            </div>
            <SkillCircle percentage={90} />
          </div>
          {/* React Native card */}
          <div className="techImage w-68 h-32 bg-slate-900/30 backdrop-blur-sm border border-slate-800/60 rounded-2xl flex items-center justify-between p-5 transition-all duration-300 hover:scale-105 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 group">
            <div className="flex items-center justify-center flex-1 mr-4 h-full">
              <Image src={reactNativeImg} alt='react-native-img' className='max-h-full w-auto object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300' />
            </div>
            <SkillCircle percentage={80} />
          </div>
        </div>
        <div className='flex gap-5'>
          {/* NodeJs card */}
          <div className="techImage w-68 h-32 bg-slate-900/30 backdrop-blur-sm border border-slate-800/60 rounded-2xl flex items-center justify-between p-5 transition-all duration-300 hover:scale-105 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 group">
            <div className="flex items-center justify-center flex-1 mr-4 h-full">
              <Image src={expoImg} alt='node-img' className='max-h-full w-auto object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300' />
            </div>
            <SkillCircle percentage={80} />
          </div>
          {/* Firebase card */}
          <div className="techImage w-68 h-32 bg-slate-900/30 backdrop-blur-sm border border-slate-800/60 rounded-2xl flex items-center justify-between p-5 transition-all duration-300 hover:scale-105 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 group">
            <div className="flex items-center justify-center flex-1 mr-4 h-full">
              <Image src={fireBaseImg} alt='fire-base-img' className='max-h-full w-auto object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300' />
            </div>
            <SkillCircle percentage={80} />
          </div>
        </div>
        <div className='flex gap-5'>
          {/* TypeScript card */}
          <div className="techImage w-68 h-32 bg-slate-900/30 backdrop-blur-sm border border-slate-800/60 rounded-2xl flex items-center justify-between p-5 transition-all duration-300 hover:scale-105 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 group">
            <div className="flex items-center justify-center flex-1 mr-4 h-full">
              <Image src={typescriptImg} alt='typescript-img' className='max-h-full w-auto object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300' />
            </div>
            <SkillCircle percentage={85} />
          </div>
          {/* TailwindCSS card */}
          <div className="techImage w-68 h-32 bg-slate-900/30 backdrop-blur-sm border border-slate-800/60 rounded-2xl flex items-center justify-between p-5 transition-all duration-300 hover:scale-105 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 group">
            <div className="flex items-center justify-center flex-1 mr-4 h-full">
              <Image src={tailwindcssImg} alt='tailwindcss-img' className='max-h-full w-auto object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300' />
            </div>
            <SkillCircle percentage={95} />
          </div>
        </div>
        <div className='flex gap-5'>
          {/* Sanity card */}
          <div className="techImage w-68 h-32 bg-slate-900/30 backdrop-blur-sm border border-slate-800/60 rounded-2xl flex items-center justify-between p-5 transition-all duration-300 hover:scale-105 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 group">
            <div className="flex items-center justify-center flex-1 mr-4 h-full">
              <Image src={sanityImg} alt='sanity-img' className='max-h-full w-auto object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300' />
            </div>
            <SkillCircle percentage={80} />
          </div>
          {/* Python card */}
          <div className="techImage w-68 h-32 bg-slate-900/30 backdrop-blur-sm border border-slate-800/60 rounded-2xl flex items-center justify-between p-5 transition-all duration-300 hover:scale-105 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 group">
            <div className="flex items-center justify-center flex-1 mr-4 h-full">
              <Image src={pythonImg} alt='python-img' className='max-h-full w-auto object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300' />
            </div>
            <SkillCircle percentage={70} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;