import Image from 'next/image'
import React from 'react'
import proddly from '../../public/proddly.png'
import reveriesandknight from '../../public/reveries&knight.jpg'

const Partners = () => {
  return (
    <div className='partners flex flex-col justify-between items-center p-6 mt-18 gap-9'>
        <p className='font-light'>Trusted by</p>
        <div className='partnerCover flex gap-8'>
            <Image src={proddly} alt="proddly" className='partnerImage w-40 h-20 rounded-lg' />
            <Image src={reveriesandknight} alt="reveriesandknight" className='w-40 h-20 rounded-lg' />
        </div>
    </div>
  )
}

export default Partners