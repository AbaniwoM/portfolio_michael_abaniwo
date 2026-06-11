'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight } from "react-icons/fa";
import { cn } from '@/lib/utils';

type CardProps = {
  image: string;
  description: string;
  linkOne: string;
  text: string;
  imgClassName?: string;
};

export default function TeamsCard({ image, description, linkOne, text, imgClassName }: CardProps) {
  return (
    <div className="teamWidth rounded-2xl w-85 bg-slate-900/25 backdrop-blur-md border border-slate-800/60 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-500 overflow-hidden group">
      <div className='p-6 flex flex-col gap-4'>
        <div className="w-full h-32 flex items-center justify-center bg-slate-950/45 rounded-xl p-4 border border-slate-900/40 mb-2">
          <Image 
            src={image} 
            alt={text} 
            className={cn("max-h-full w-auto object-contain filter opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500", imgClassName)} 
            width={150} 
            height={150} 
          />
        </div>
        <p className="text-[0.95rem] text-slate-400 leading-relaxed min-h-[72px]">{description}</p>
        <div className='flex justify-between text-white mt-4 border-t border-slate-800/60 pt-4'>
          <Link href={linkOne} target="_blank" rel="noopener noreferrer" className='flex items-center gap-1.5 text-sm text-slate-300 hover:text-emerald-400 font-semibold transition-all duration-300 group/link cursor-pointer'>
            View project <FaChevronRight className="text-xs transition-transform duration-300 group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}