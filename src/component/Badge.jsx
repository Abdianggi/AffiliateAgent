import React from 'react';

const Badge = ({
  value,
  bgColor = 'bg-gray-100',
  textColor = 'text-gray-500',
  padding = 'py-1 px-3',
  rounded = 'rounded-full',
  className = '',
}) => {
  return (
    <span className={`${padding} ${bgColor} ${textColor} ${rounded} ${className}`}>
      {value}
    </span>
  );
};

export default Badge;
