import Image from 'next/image'
import React from 'react'
import reactImg from '../../public/reactjs.png'
import typescriptImg from '../../public/typescript.png'
import tailwindcssImg from '../../public/tailwindcss.png'
import sanityImg from '../../public/sanity.png'

const Technologies = () => {
  return (
    <div className='techContent flex p-6 justify-between flex-wrap items-center mt-22'>
        <div className='techCenter flex flex-col gap-5'>
            <h2 className='techHeader text-[3rem] text-green-400'>Technologies I work with</h2>
            <p className='techText text-[1.2rem] w-120 text-gray-300'>I work with a number of Technologies namely; ReactJs (NextJs), TypeScript, TailwindCSS, Sanity. These help me to deliver accurate work in specified time.</p>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='flex gap-5'>
            <Image src={reactImg} alt='react-img' className='techImage w-68 h-32' />
            <Image src={typescriptImg} alt='typescript-img' className='techImage w-68 h-32' />
          </div>
          <div className='flex gap-5'>
            <Image src={tailwindcssImg} alt='tailwindcss-img' className='techImage w-68 h-32' />
            <Image src={sanityImg} alt='react-img' className='techImage w-68 h-32' />
          </div>
        </div>
    </div>
  )
}

export default Technologies