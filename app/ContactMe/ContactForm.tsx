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
    <div className="flex items-center justify-center min-h-140 bg-black">
      <div className="contactForm min-w-140 max-w-md p-8 space-y-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full p-2.5 bg-transparent border-2 border-green-500 rounded-lg shadow-[0_0_10px_#00ff00] focus:ring-green-400 focus:border-green-400 focus:outline-none text-white transition-shadow duration-300 ease-in-out"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full p-2.5 bg-transparent border-2 border-green-500 rounded-lg shadow-[0_0_10px_#00ff00] focus:ring-green-400 focus:border-green-400 focus:outline-none text-white transition-shadow duration-300 ease-in-out"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="block w-full p-2.5 bg-transparent border-2 border-green-500 rounded-lg shadow-[0_0_10px_#00ff00] focus:ring-green-400 focus:border-green-400 focus:outline-none text-white transition-shadow duration-300 ease-in-out"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-5 py-2.5 font-bold text-black bg-white rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors duration-300 ease-in-out cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;