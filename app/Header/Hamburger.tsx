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
            className="absolute text-slate-300 hover:text-emerald-450 transition-colors left-93 -mt-4 text-3xl closeBtn cursor-pointer z-50"
            aria-hidden="true"
            onClick={showNav}
          ><LiaTimesSolid /></i>
        ) : (
          <i
            className="text-3xl sm:text-[1.5rem] md:block sm:block cursor-pointer text-slate-300 hover:text-emerald-400 transition-colors"
            aria-hidden="true"
            onClick={showNav}
          ><RxHamburgerMenu /></i>
        )}

        {/* mobile nav */}
        <nav
          className={`hamNav bg-slate-950/98 backdrop-blur-xl text-white text-center flex items-center justify-center h-full fixed overflow-y-hidden top-0 w-full md:w-full sm:flex sm:items-center sm:justify-center sm:text-center md:flex md:items-center md:justify-center md:text-center sm:z-40 md:z-40 hamBg z-50 duration-500 ease-in-out ${
            nav ? "left-0" : "left-[-180vw]"
          } `}
        >
          <div className='sm:text-white sm:flex sm:flex-col sm:gap-8 sm:text-[1.1rem] md:flex md:flex-col md:gap-12 md:text-[2rem]'>
            <ul className="space-y-8">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={showNav}
                    className="text-slate-300 hover:text-emerald-400 font-display font-medium text-xl tracking-wide transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="logout flex items-center justify-center mt-12 cursor-pointer">
              <Link 
                href="#contact" 
                onClick={showNav}
                className="bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-lg shadow-emerald-500/10 transition-all duration-300 cursor-pointer text-sm"
              >
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