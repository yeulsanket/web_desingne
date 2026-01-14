// src/components/home/AdvantagesSection.jsx
import React from 'react';
import AdvantageCard from '../ui/AdvantageCard';

const AdvantagesSection = () => {
  const advantages = [
    {
      title: 'INDEPENDENT DESIGNERS',
      description: 'Our platform celebrates the ingenuity of independent designers, offering a diverse range of fashion-forward garments that reflect the creativity and innovation of the artists behind them. Explore curated collections showcasing unique pieces from independent designers.',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200&auto=format&fit=crop',
      hasImage: true,
    },
    {
      title: 'EXCLUSIVE & UNIQUITY',
      description: 'Indulge in curated collections showcasing exclusive, one-of-a-kind pieces, each with its own story and charm. Experience the allure of unique fashion pieces that radiate sophistication and individuality. Curated for those who seek exclusivity.',
      image: null,
      hasImage: false,
    },
    {
      title: 'HIGH QUALITY',
      description: 'Embrace superior craftsmanship with our meticulously curated, enduringly high-quality garments. Discover garments crafted with utmost attention to detail and finest materials, promising longevity and timeless style.',
      image: null,
      hasImage: false,
    },
    {
      title: 'ECO-FRIENDLY',
      description: 'Join our commitment to sustainability with eco-friendly fashion options, stylish yet mindful of our planet. Explore guilt-free designer collections, crafted with planet-friendly materials and ethical practices.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&auto=format&fit=crop',
      hasImage: true,
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-12 text-center lg:text-left">
          OUR ADVANTAGES
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* First advantage - full width with image */}
          <div className="lg:col-span-2">
            <AdvantageCard
              title={advantages[0].title}
              description={advantages[0].description}
              image={advantages[0].image}
              hasImage={advantages[0].hasImage}
            />
          </div>

          {/* Second advantage - left column */}
          <AdvantageCard
            title={advantages[1].title}
            description={advantages[1].description}
            image={advantages[1].image}
            hasImage={advantages[1].hasImage}
          />

          {/* Third and Fourth advantages - right column stacked */}
          <div className="space-y-6">
            <AdvantageCard
              title={advantages[2].title}
              description={advantages[2].description}
              image={advantages[2].image}
              hasImage={advantages[2].hasImage}
            />
            
            <AdvantageCard
              title={advantages[3].title}
              description={advantages[3].description}
              image={advantages[3].image}
              hasImage={advantages[3].hasImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
