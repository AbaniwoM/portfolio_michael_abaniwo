"use client"

import React, { FC, useState, ChangeEvent, FormEvent } from 'react';

const ContactForm: FC = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Your WhatsApp number (replace with your actual number)
  // Include country code, but no '+' or other symbols. For example: '15551234567'
  const whatsappNumber = '2348076578993'; 

  // Handles input changes and updates the state
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handles form submission
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents the default form submission

    // Format the message with form data
    const message = `*New Form Submission*:\n\n*Name*: ${formData.name}\n*Email*: ${formData.email}\n*Message*: ${formData.message}`;
    
    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(message);

    // Create the WhatsApp click-to-chat URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open the URL in a new tab
    window.open(whatsappURL, '_blank');

    console.log('Form data sent to WhatsApp:', formData);
  };

  return (
    <div className="flex items-center justify-center min-h-140 bg-transparent">
      <div className="contactForm min-w-140 max-w-md p-8 space-y-6 bg-slate-900/20 backdrop-blur-md border border-slate-800/60 rounded-2xl shadow-xl shadow-slate-950/30">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-xs uppercase tracking-wider font-semibold text-slate-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="block w-full p-3 bg-slate-950/40 border border-slate-800/60 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 focus:outline-none text-white placeholder-slate-600 transition-all duration-300 ease-in-out shadow-inner"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-xs uppercase tracking-wider font-semibold text-slate-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="block w-full p-3 bg-slate-950/40 border border-slate-800/60 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 focus:outline-none text-white placeholder-slate-600 transition-all duration-300 ease-in-out shadow-inner"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-xs uppercase tracking-wider font-semibold text-slate-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="block w-full p-3 bg-slate-950/40 border border-slate-800/60 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 focus:outline-none text-white placeholder-slate-600 transition-all duration-300 ease-in-out shadow-inner resize-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-5 py-3.5 font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-lg shadow-emerald-500/10 hover:shadow-emerald-400/20 hover:-translate-y-0.5 transition-all duration-300 focus:outline-none cursor-pointer text-sm"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;