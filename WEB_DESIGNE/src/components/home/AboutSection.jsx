// src/components/home/AboutSection.jsx
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-gray-500 uppercase text-xs tracking-widest mb-4 font-medium">
              ABOUT
            </p>
            
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight">
              WHERE FASHION<br />MEETS FREEDOM
            </h2>
            
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                We believe that fashion should be an expression of individuality. We encourage 
                creativity and originality in every item we offer, presenting customers with exclusive 
                designs that stand apart from mass-produced fashion. With a commitment to fostering 
                a community of creativity and innovation.
              </p>
              
              <p>
                We strive to connect designers with fashion enthusiasts who appreciate the artistry and 
                individuality behind each piece. Driven by our dedication to authenticity, we curate 
                collections that celebrate diverse voices and perspectives, offering designs that inspire 
                confidence and self-expression.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 lg:h-full min-h-[400px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2020"
              alt="Fashion Model"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;