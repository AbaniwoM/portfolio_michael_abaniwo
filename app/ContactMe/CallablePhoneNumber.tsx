import React, { FC } from 'react';
import { FaPhoneAlt } from 'react-icons/fa'; // Importing a phone icon

// Define the props for the component
interface CallablePhoneNumberProps {
  phoneNumber: string;
  className?: string;
}

const CallablePhoneNumber: FC<CallablePhoneNumberProps> = ({ phoneNumber, className }) => {
  // E.164 format is recommended for the href attribute for international compatibility.
  // This format includes the country code prefixed with a '+'.
  // Example: +12223334444
  // We will remove any non-digit characters except for the '+' at the start for the href.
  const callableNumber = `tel:${phoneNumber.replace(/[^0-9+]/g, '')}`;

  return (
    <a 
      href={callableNumber} 
      className={`inline-flex items-center space-x-2 text-blue-500 hover:text-blue-700 transition-colors duration-300 cursor-pointer ${className}`}
    >
      <span>{phoneNumber}</span>
    </a>
  );
};

export default CallablePhoneNumber;