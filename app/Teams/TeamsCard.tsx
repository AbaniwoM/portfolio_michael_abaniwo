'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaChevronRight } from "react-icons/fa";

type CardProps = {
  image: string;
  description: string;
  linkOne: string;
  text: string;
};

export default function TeamsCard({ image, description, linkOne, text }: CardProps) {
  return (
    <div className="teamWidth rounded-lg w-85 bg-transparent border border-green-400">
      <div className='p-6 flex flex-col gap-3'>
      <Image src={image} alt={text} width={150} height={150} className="w-40 h-20 rounded-lg" />
      <p className="text-[1rem] text-gray-400">{description}</p>
      <div className='flex justify-between text-white mt-4'>
        <Link href={linkOne} className='flex items-center gap-2 cursor-pointer'>View project <FaChevronRight /></Link>
      </div>
      </div>
    </div>
  );
}