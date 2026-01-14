// src/components/home/FeaturesSection.jsx
import React from 'react';
import FeatureCard from '../ui/FeatureCard';
import { Sparkles, Diamond, Award, Leaf } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'INDEPENDENCE',
      description: 'Explore the creativity of independent designers from around the globe.',
    },
    {
      icon: Diamond,
      title: 'UNIQUITY',
      description: 'Discover the charm of unique pieces that stand out effortlessly.',
    },
    {
      icon: Award,
      title: 'QUALITY',
      description: 'Experience unparalleled craftsmanship and attention to detail.',
    },
    {
      icon: Leaf,
      title: 'SUSTAINABILITY',
      description: 'Embrace eco-conscious ethical choices without compromising on style.',
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;