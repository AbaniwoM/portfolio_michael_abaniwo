'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight } from "react-icons/fa";

type CardProps = {
  image: string;
  title: string;
  description: string;
  linkOne?: string;
  linkTwo?: string;
  linkOneText?: string;
  linkTwoText?: string;
  text: string;
  skillOne: string;
  skillTwo: string;
  skillThree: string;
  skillFour?: string;
  downloadLinkOne?: boolean;
};

export default function ProjectCard({ title, image, description, skillOne, skillTwo, skillThree, skillFour, linkOne, linkTwo, linkOneText = "View project", linkTwoText = "View code", text, downloadLinkOne }: CardProps) {
  return (
    <div className="prjCard rounded-2xl min-w-90 bg-slate-900/25 backdrop-blur-md border border-slate-800/60 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-500 overflow-hidden group">
      <div className="relative w-full h-52 overflow-hidden">
        <Image 
          src={image} 
          alt={text} 
          width={360} 
          height={208} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent opacity-60"></div>
      </div>
      <div className='prjPad p-6 flex flex-col gap-4'>
        <h2 className="text-[1.35rem] font-display font-bold text-slate-100 tracking-tight group-hover:text-emerald-400 transition-colors duration-300">{title}</h2>
        <p className="text-[0.95rem] text-slate-400 leading-relaxed min-h-12">{description}</p>
        <div className='flex flex-wrap gap-2.5 mt-1'>
          <div className='skillPad text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-inner'>{skillOne}</div>
          <div className='skillPad text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-inner'>{skillTwo}</div>
          <div className='skillPad text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-inner'>{skillThree}</div>
          {skillFour && <div className='skillPad text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-inner'>{skillFour}</div>}
        </div>
        <div className='prjBtm flex justify-between text-white mt-4 border-t border-slate-800/60 pt-4'>
          {linkOne && (
            downloadLinkOne ? (
              <a href={linkOne} download className='flex items-center gap-1.5 text-sm text-slate-300 hover:text-emerald-400 font-semibold transition-all duration-300 group/link cursor-pointer'>
                {linkOneText} <FaChevronRight className="text-xs transition-transform duration-300 group-hover/link:translate-x-1" />
              </a>
            ) : (
              <Link href={linkOne} target="_blank" rel="noopener noreferrer" className='flex items-center gap-1.5 text-sm text-slate-300 hover:text-emerald-400 font-semibold transition-all duration-300 group/link cursor-pointer'>
                {linkOneText} <FaChevronRight className="text-xs transition-transform duration-300 group-hover/link:translate-x-1" />
              </Link>
            )
          )}
          {linkTwo && (
            <Link href={linkTwo} target="_blank" rel="noopener noreferrer" className='flex items-center gap-1.5 text-sm text-slate-300 hover:text-emerald-400 font-semibold transition-all duration-300 group/link cursor-pointer'>
              {linkTwoText} <FaChevronRight className="text-xs transition-transform duration-300 group-hover/link:translate-x-1" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}