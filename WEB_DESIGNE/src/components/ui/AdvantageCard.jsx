import React from 'react';
import { ArrowRight } from 'lucide-react';

const AdvantageCard = ({ image, title, description, hasImage = false }) => {
  return (
    <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-zinc-800/50 transition-all duration-300 group border border-zinc-800">
      <div className={`${hasImage ? 'grid md:grid-cols-2' : 'block'}`}>
        {hasImage && image && (
          <div className="relative h-64 md:h-full overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        
        <div className="p-8 flex flex-col justify-center">
          <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">
            {title}
          </h3>
          
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            {description}
          </p>
          
          <button className="flex items-center gap-2 text-white/60 hover:text-white transition-all duration-300 group-hover:gap-4 w-fit">
            <span className="uppercase text-xs tracking-wider font-medium">Explore</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvantageCard;