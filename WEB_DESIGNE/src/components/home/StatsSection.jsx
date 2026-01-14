// src/components/home/StatsSection.jsx
import React from 'react';
import StatCard from '../ui/StatCard';

const StatsSection = () => {
  const stats = [
    { label: 'DESIGNERS', number: '150+' },
    { label: 'CLIENTS', number: '500+' },
    { label: 'MASTERPIECES', number: '20K+' },
    { label: 'EVENTS', number: '50+' },
  ];

  return (
    <section className="py-16 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-zinc-800">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              label={stat.label}
              number={stat.number}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;