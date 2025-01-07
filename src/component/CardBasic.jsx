import React from 'react';

const CardBasic = ({ color, backgroundColor, title, subtitle, value, disabled }) => {
  return (
    <div
      className={`bg-white mt-1 mr-2 rounded-lg p-6 sm:p-4 w-full sm:w-3/4 md:w-1/2 border-l-4 shadow-[0_0_9px_rgba(0,0,0,0.1)] 
      ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      style={{ borderColor: color, backgroundColor: backgroundColor }}
    >
      <p className="text-md font-medium text-black">{title}</p>
      <p className="text-sm font-light text-[#72787F]">{subtitle}</p>
      <p
        className="text-lg font-semibold mt-4 px-2 py-1 inline-block rounded-sm"
        style={{
          color: color,
          backgroundColor: `${color}14`,
        }}
      >
        {value}
      </p>
    </div>
  );
};

export default CardBasic;
