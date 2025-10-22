import Link from 'next/link'
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
        <div className='footerTop flex justify-between items-center p-6 mt-22'>
            <div className="text-2xl font-bold">
                Michael<span className="text-green-400">Abaniwo</span>
            </div>
            <div className='flex gap-5'>
                <Link href="https://github.com/AbaniwoM" className="hover:text-green-400 cursor-pointer text-[1.5rem]"><FaGithub /></Link>
                <Link href="https://www.linkedin.com/in/michael-abaniwo/" className="hover:text-green-400 cursor-pointer text-[1.5rem]"><FaLinkedin /></Link>
                <Link href="https://x.com/_codedr" className="hover:text-green-400 cursor-pointer text-[1.5rem]"><BsTwitterX /></Link>
            </div>
        </div>
        <div className='border-b-gray-300 border-b-[0.05rem] ml-6 mr-6'></div>
        <div className='footerBtm flex flex-col justify-center items-center mt-7 gap-1 mb-12'>
            <h2>&copy; 2025. All rights reserved.</h2>
            <p className='italic'>Bringing you code with a touch from Heaven!</p>
        </div>
    </div>
  )
}

export default Footer