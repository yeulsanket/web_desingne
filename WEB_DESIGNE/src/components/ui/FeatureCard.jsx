// src/components/ui/FeatureCard.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-lg hover:bg-zinc-800/50 transition-all duration-300 group cursor-pointer border border-zinc-800">
      <div className="mb-6">
        {Icon && <Icon className="w-10 h-10 text-white/70" />}
      </div>
      
      <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">
        {title}
      </h3>
      
      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
        {description}
      </p>
      
      <button className="flex items-center gap-2 text-white/60 hover:text-white transition-all duration-300 group-hover:gap-4">
        <span className="uppercase text-xs tracking-wider font-medium">Learn More</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default FeatureCard;