import React from 'react';
import { Icon } from './Icon';
import { TestimonialData } from '../types';

const testimonial: TestimonialData = {
  quote: "I've lost 15 pounds in 2 months! The app makes it so easy to stay on track without feeling deprived. It completely changed how I view food.",
  author: "Sarah Jenkins",
  avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKvFFrburayb6BISuiXGykvdxC5OZNhchQ1esBp3wd_fBzCX6A2X9WLs_-fP1d2cwkztBjAaJs50NeWxL5M7pNYBQt0ws5jjlm5KYaChXzFD3K-rN1inoo4Tl-sezBxd0tERP1_NHvhfbxAc-taH44_l0WQ2OTdAT90KGGEV2s-aBPBa_pMXcyZN86G2_L8xCa2Ooozi9ac-TA283yBu1Ze1fghQ329vqxfPyY_zisJKQlzgA6BM-M7sVr7e8N0P975yxnjn3G8w",
  rating: 5
};

export const Testimonials: React.FC = () => {
  return (
    <section className="px-6 py-20 lg:py-24 max-w-full mx-auto">
      <div className="bg-white lg:bg-transparent rounded-3xl p-8 lg:p-0">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center lg:gap-16">
          
          {/* Avatar Area */}
          <div className="relative mb-8 lg:mb-0 shrink-0">
             <div className="w-24 h-24 lg:w-40 lg:h-40 rounded-full bg-gray-200 p-1 lg:p-2 border-2 border-dashed border-primary/30">
                <img
                  src={testimonial.avatarUrl}
                  alt={testimonial.author}
                  className="w-full h-full object-cover rounded-full shadow-md"
                />
             </div>
             <div className="absolute h-10 w-10 -bottom-3 -right-3 bg-white p-2 rounded-full shadow-md">
                 <Icon name="favorite" className="text-red-500 text-xl lg:text-2xl" filled />
             </div>
          </div>

          {/* Text Area */}
          <div className="text-center lg:text-left max-w-2xl">
            <div className="mb-6 flex justify-center lg:justify-start">
                 {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="star" className="text-yellow-400 text-xl lg:text-2xl mr-1" filled />
                  ))}
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 italic leading-normal mb-6 relative inline-block">
               <span className="text-6xl text-green-200 absolute -top-8 -left-8 -z-10 font-serif opacity-50">"</span>
               {testimonial.quote}
            </h3>
            
            <div>
              <p className="text-lg font-bold text-gray-900">{testimonial.author}</p>
              <p className="text-gray-500 text-sm font-medium">Verified User • Lost 15lbs</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};