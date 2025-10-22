'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaChevronRight } from "react-icons/fa";

type CardProps = {
  image: string;
  title: string;
  description: string;
  linkOne: string;
  linkTwo: string;
  text: string;
  skillOne: string;
  skillTwo: string;
  skillThree: string;
};

export default function ProjectCard({ title, image, description, skillOne, skillTwo, skillThree, linkOne, linkTwo, text }: CardProps) {
  return (
    <div className="prjCard rounded-lg min-w-90 bg-transparent border border-green-400">
      <Image src={image} alt={text} width={150} height={150} className="w-90 h-60 rounded-t-lg" />
      <div className='prjPad p-6 flex flex-col gap-3'>
      <h2 className="text-[1.5rem] font-extralight text-white">{title}</h2>
      <p className="text-[1rem] text-gray-400">{description}</p>
      <div className='flex gap-4'>
        <div className='skillPad bg-green-400 text-black p-2 rounded-md'>{skillOne}</div>
        <div className='skillPad bg-green-400 text-black p-2 rounded-md'>{skillTwo}</div>
        <div className='skillPad bg-green-400 text-black p-2 rounded-md'>{skillThree}</div>
      </div>
      <div className='prjBtm flex justify-between text-white mt-4'>
        <Link href={linkOne} className='flex items-center gap-2 cursor-pointer'>View project <FaChevronRight /></Link>
        <Link href={linkTwo} className='flex items-center gap-2 cursor-pointer'>View code <FaChevronRight /></Link>
      </div>
      </div>
    </div>
  );
}