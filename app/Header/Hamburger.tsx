'use client';

import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";
import Link from 'next/link';


const Hamburger = () => {
  const [nav, setNav] = useState(false);

  const showNav = () => {
    setNav(!nav);
  };

  const links = [
    {name: 'Home', href: "#" },
    {name: 'Tech Stack', href: "#tech-stack" },
    {name: 'Projects', href: '#projects' },
    {name: 'Testimonials', href: '#testimonials' },
  ]

  return (
    <>
      <header className="">
        {/* hamburger */}
        {nav ? (
          // close button
          <i
            className="fixed text-white left-93 -mt-4 text-3xl closeBtn cursor-pointer"
            aria-hidden="true"
            onClick={showNav}
          ><LiaTimesSolid /></i>
        ) : (
          <i
            className="text-3xl sm:text-[1.5rem] md:block sm:block cursor-pointer"
            aria-hidden="true"
            onClick={showNav}
          ><RxHamburgerMenu /></i>
        )}

        {/* mobile nav */}
        <nav
          className={`bg-gray-900 text-white text-center flex items-center justify-center h-full fixed overflow-y-auto top-0 w-full md:w-full sm:flex sm:items-center sm:justify-center sm:text-center md:flex md:items-center md:justify-center md:text-center sm:z-40 md:z-40 hamBg z-50 duration-1000 ${
            nav ? "left-0" : "left-[-180vw]"
          } `}
        >
        <div className='sm:text-white sm:flex sm:flex-col sm:gap-8 sm:text-[1.1rem] md:flex md:flex-col md:gap-12 md:text-[2rem]'>
        <ul className="space-y-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-white text-[1rem]"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="logout flex items-center mt-10 cursor-pointer">
        <Link href="#contact" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 cursor-pointer">
          Get in touch
        </Link>
      </div>
        </div>
        </nav>
      </header>
    </>
  );
};

export default Hamburger;