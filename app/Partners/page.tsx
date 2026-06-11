import Image from 'next/image'
import React from 'react'
import proddly from '../../public/proddly.png'
import meava from '../../public/meava.jpeg'
import reveriesandknight from '../../public/reveries&knight.jpg'
import greatGraceCollection from '../../public/logo.png'


const Partners = () => {
  return (
    <div className='partners flex flex-col justify-between items-center p-6 mt-18 gap-8'>
        <p className='text-xs uppercase tracking-widest text-slate-500 font-semibold tracking-wider select-none'>Trusted by</p>
        <div className='partnerCover flex flex-wrap justify-center items-center gap-6'>
            <div className="partnerImage w-40 h-20 bg-slate-900/30 backdrop-blur-sm border border-slate-800/60 rounded-xl flex items-center justify-center p-4 hover:border-emerald-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/5 group">
                <Image src={proddly} alt="proddly" className='w-full h-full object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500' />
            </div>
            <div className="w-40 h-20 bg-slate-900/30 backdrop-blur-sm border border-slate-800/60 rounded-xl flex items-center justify-center p-4 hover:border-emerald-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/5 group">
                <Image src={reveriesandknight} alt="reveriesandknight" className='w-full h-full object-contain rounded-lg filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500' />
            </div>
            <div className="w-40 h-20 bg-slate-900/30 backdrop-blur-sm border border-slate-800/60 rounded-xl flex items-center justify-center p-4 hover:border-emerald-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/5 group">
                <Image src={meava} alt="meava" className='w-full h-full object-contain rounded-lg filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500' />
            </div>
            <div className="w-20 h-20 bg-slate-900/30 backdrop-blur-sm border border-slate-800/60 rounded-xl flex items-center justify-center p-3 hover:border-emerald-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/5 group">
                <Image src={greatGraceCollection} alt="greatgracecollection" className='w-full h-full object-contain rounded-lg filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500' />
            </div>
        </div>
    </div>
  )
}

export default Partners