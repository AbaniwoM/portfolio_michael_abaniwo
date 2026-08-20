"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { FaPlay, FaTimes, FaDownload } from 'react-icons/fa';

const GAIN_BOOST = 6; // 6× amplification (600% volume)

const About = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const sourceNodeRef = useRef<MediaElementAudioSourceNode | null>(null); // Track the source connection

  const openModal = () => {
    dialogRef.current?.showModal();

    const video = videoRef.current;
    if (!video) return;

    // Set native volume to max
    video.volume = 1;

    // Initialize the audio graph ONLY ONCE to avoid "MediaElementAudioSourceNode already exists" errors
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      
      const source = ctx.createMediaElementSource(video);
      const gainNode = ctx.createGain();
      
      gainNode.gain.value = GAIN_BOOST;
      source.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      audioCtxRef.current = ctx;
      sourceNodeRef.current = source;
    }

    // Safely resume context (browser autoplay policies) then play the media
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }

    video.play().catch(err => console.log("Video play interrupted:", err));
  };

  const closeModal = () => {
    videoRef.current?.pause();
    dialogRef.current?.close();
  };

  const handleLightDismiss = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      videoRef.current?.pause();
      dialogRef.current?.close();
    }
  };

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden bg-slate-950/20">
      <div className="absolute right-10 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.02] text-[10rem] font-display font-black tracking-widest text-slate-100 whitespace-nowrap hidden lg:block">
        ABOUT ME
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Video Preview Cover */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px] aspect-4/5 rounded-3xl overflow-hidden group border border-slate-800/80 shadow-2xl">
              <div className="absolute -inset-1.5 bg-linear-to-tr from-emerald-500/30 via-teal-500/20 to-cyan-500/30 rounded-3xl blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
              
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-slate-900">
                <Image
                  src="/thumbnail.png"
                  alt="Michael Abaniwo - Video Introduction Thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                
                <button 
                  onClick={openModal}
                  aria-label="Play introduction video"
                  className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 flex items-center justify-center shadow-lg shadow-emerald-500/20 cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300 group/play"
                >
                  <FaPlay className="text-xl translate-x-0.5 transition-transform duration-300 group-hover/play:scale-110" />
                </button>
                
                <div className="absolute bottom-6 left-6 right-6 text-center pointer-events-none">
                  <span className="text-[0.7rem] uppercase tracking-widest text-emerald-400 font-bold block mb-1">Interactive Intro</span>
                  <span className="text-xs text-slate-300 font-semibold">Watch my video introduction</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About text and CV action buttons */}
          <div className="md:col-span-7 flex flex-col justify-center gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">ABOUT ME</span>
              <h2 className="text-[3rem] font-display font-extrabold text-slate-100 tracking-tight leading-tight">
                Failure is the condiment that gives <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">success</span>
              </h2>
            </div>
            
            <p className="text-[1.1rem] leading-relaxed text-slate-400 max-w-xl">
              I am a dedicated and results-driven software engineer specializing in building premium web applications. 
              With a deep focus on NextJs, React Native, NodeJs, TypeScript, and custom styling systems, I help client businesses craft 
              responsive, high-performance, and pixel-perfect visual experiences.
            </p>
            
            <p className="text-[1rem] leading-relaxed text-slate-400 max-w-xl">
              I spend more time focusing on the important structural aspects of web code: modular component structure, 
              robust state management, and optimized asset delivery to make sure your product loads instantly and feels incredibly premium.
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href="#contact"
                className="px-6 py-3.5 font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-lg shadow-emerald-500/10 hover:shadow-emerald-400/20 hover:-translate-y-0.5 transition-all duration-300 text-sm cursor-pointer"
              >
                Let&apos;s Build Together
              </a>
              <a
                href="/MICHAEL-ABANIWO-Resume.pdf"
                download="MICHAEL-ABANIWO-Resume.pdf"
                className="px-6 py-3.5 font-bold text-slate-200 border border-slate-800 hover:border-emerald-500/40 hover:bg-emerald-500/5 rounded-xl transition-all duration-300 text-sm flex items-center gap-2 cursor-pointer"
              >
                <FaDownload className="text-xs" /> Download CV
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* HTML5 Native Video Dialog Modal */}
      <dialog
        ref={dialogRef}
        onClick={handleLightDismiss}
        className="fixed inset-0 m-auto w-[92vw] max-w-sm rounded-2xl bg-black border border-slate-800/80 p-0 text-white shadow-2xl backdrop:bg-slate-950/85 backdrop:backdrop-blur-md outline-none scale-95 opacity-0 open:scale-100 open:opacity-100 transition-all duration-300 ease-out"
      >
        <div className="flex justify-end px-3 pt-3 pb-1 bg-black">
          <button
            onClick={closeModal}
            aria-label="Close video"
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer border border-slate-700"
          >
            <FaTimes className="text-sm" />
          </button>
        </div>

        {/* Added crossOrigin="anonymous" to solve the Cloudinary CORS block */}
        <video
          ref={videoRef}
          src="https://res.cloudinary.com/dxcjoih6t/video/upload/v1781218076/MICHAEL_ABANIWO_-_VIDEO_INTRO_cabtms.mov"
          poster="/thumbnail.png"
          className="w-full block max-h-[82vh]"
          controls
          controlsList="nodownload"
          playsInline
          crossOrigin="anonymous" 
        />
      </dialog>
    </section>
  );
};

export default About;