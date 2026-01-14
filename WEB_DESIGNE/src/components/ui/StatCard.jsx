import React from 'react';

const StatCard = ({ label, number }) => {
  return (
    <div className="text-center py-8">
      <p className="text-gray-500 uppercase text-xs tracking-widest mb-3 font-medium">
        {label}
      </p>
      <h3 className="text-5xl md:text-6xl font-light text-white">
        {number}
      </h3>
    </div>
  );
};

export default StatCard;