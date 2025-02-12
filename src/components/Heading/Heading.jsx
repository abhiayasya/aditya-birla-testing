import React from 'react';

const Heading = ({ boldText, regularText,className }) => {
  return (
    <h1 className={`text-3xl md:text-5xl ${className}`}>
      <span>{regularText}</span>
      <span className='font-bold'>{boldText}</span>
    </h1>
  );
};

export default Heading;
