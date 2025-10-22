import React from 'react'
import { FiMail } from "react-icons/fi";
import { FaPhone } from "react-icons/fa6";
import ContactForm from './ContactForm';
import CallablePhoneNumber from './CallablePhoneNumber';

const ContactMe = () => {
  return (
    <div className='contactMe flex justify-between p-6 mt-25'>
        <div className='flex flex-col gap-5'>
            <h2 className='techHead text-[3rem] text-green-400'>Get in touch</h2>
            <p className='techText text-[1.2rem] w-120 text-gray-300'>Drop me a line, give me a call, or send me a message by submitting the form.</p>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-3 items-center'>
                    <FiMail className='text-[1.5rem] text-gray-300' />
                    <p>michaelabaniwo@gmail.com</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <FaPhone className='text-[1.5rem] text-gray-300' />
                    <CallablePhoneNumber 
                        phoneNumber="+2348076578993" 
                        className="text-lg"
                    />
                </div>
            </div>
        </div>
        <ContactForm />
    </div>
  )
}

export default ContactMe