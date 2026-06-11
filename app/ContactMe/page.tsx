import React from 'react'
import { FiMail } from "react-icons/fi";
import { FaPhone } from "react-icons/fa6";
import ContactForm from './ContactForm';
import CallablePhoneNumber from './CallablePhoneNumber';

const ContactMe = () => {
  return (
    <div className='contactMe flex justify-between p-6 mt-25 gap-10 items-start'>
        <div className='flex flex-col gap-6'>
            <h2 className='techHeader text-[3rem] font-display font-extrabold text-slate-100 tracking-tight leading-tight'>
              Get in <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">touch</span>
            </h2>
            <p className='techText text-[1.1rem] leading-relaxed w-120 text-slate-400'>
              Drop me a line, give me a call, or send me a message by submitting the form.
            </p>
            <div className='flex flex-col gap-4 mt-2'>
                <div className='flex gap-3 items-center group'>
                    <FiMail className='text-[1.5rem] text-slate-400 group-hover:text-emerald-400 transition-colors duration-300' />
                    <a href="mailto:michaelabaniwo@gmail.com" className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 cursor-pointer">
                      michaelabaniwo@gmail.com
                    </a>
                </div>
                <div className='flex gap-3 items-center group'>
                    <FaPhone className='text-[1.5rem] text-slate-400 group-hover:text-emerald-400 transition-colors duration-300' />
                    <CallablePhoneNumber 
                        phoneNumber="+2348076578993" 
                        className="text-slate-300 hover:text-emerald-400 transition-colors duration-300"
                    />
                </div>
            </div>
        </div>
        <ContactForm />
    </div>
  )
}

export default ContactMe