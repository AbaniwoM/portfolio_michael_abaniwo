import Link from 'next/link'
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="mt-10">
        <div className='footerTop flex justify-between items-center p-6 mt-22'>
            <div className="text-2xl font-display font-extrabold tracking-tight">
                Michael<span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Abaniwo</span>
            </div>
            <div className='flex gap-5'>
                <Link href="https://github.com/AbaniwoM" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 hover:scale-110 transition-all duration-300 cursor-pointer text-[1.5rem]"><FaGithub /></Link>
                <Link href="https://www.linkedin.com/in/michael-abaniwo/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 hover:scale-110 transition-all duration-300 cursor-pointer text-[1.5rem]"><FaLinkedin /></Link>
                <Link href="https://x.com/_codedr" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 hover:scale-110 transition-all duration-300 cursor-pointer text-[1.5rem]"><BsTwitterX /></Link>
            </div>
        </div>
        <div className='border-b-slate-850 border-b-[0.05rem] ml-6 mr-6'></div>
        <div className='footerBtm flex flex-col justify-center items-center mt-8 gap-1.5 mb-12 text-slate-500'>
            <h2 className="text-sm font-medium">&copy; 2026. All rights reserved.</h2>
            <p className='text-xs italic tracking-wider font-semibold text-slate-600 bg-slate-900/10 px-3 py-1 rounded-full border border-slate-900/20'>Bringing you code with a touch from Heaven!</p>
        </div>
    </div>
  )
}

export default Footer