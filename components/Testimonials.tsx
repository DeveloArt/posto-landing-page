import React from 'react';
import { Icon } from './Icon';
import { TestimonialData } from '../types';
import profileIcon from '../assets/images/profile-icon.png';

const testimonial: TestimonialData = {
  quote: "I've lost 15 pounds in 2 months! The app makes it so easy to stay on track without feeling deprived. It completely changed how I view food.",
  author: "Sarah Jenkins",
  avatarUrl: profileIcon,
  rating: 5
};

const testimonials: TestimonialData[] = [testimonial, testimonial, testimonial];

export const Testimonials: React.FC = () => {
  return (
    <section className="w-full py-20 lg:py-24" id="testimonials">
      <div className="bg-white lg:bg-transparent rounded-3xl pt-5 pb-10 lg:py-12">
          <div className="text-center">
            <span className="inline-block text-primary font-bold text-xs uppercase tracking-widest bg-green-100 px-4 py-1.5 rounded-full">
              Testimonials
            </span>
            <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 mt-8 mb-16 text-center tracking-tight">Real Stories, Real Results</h2> 
          </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 px-4 sm:px-6 lg:pl-28 lg:pr-12">
          {testimonials.map((item, index) => (
            <div key={index} className="flex flex-col items-center lg:items-center rounded-3xl py-8 px-6 bg-gray-100 max-w-[400px] mx-auto w-full transition-all duration-300 hover:shadow-xl hover:shadow-gray-900/10 hover:-translate-y-1 hover:bg-gray-150">
              <div className="relative mb-5">
                <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-gray-200 p-1 lg:p-1.5 border-2 border-dashed border-primary/30">
                  <img
                    src={item.avatarUrl}
                    alt={item.author}
                    className="w-full h-full object-contain rounded-full shadow-md"
                  />
                </div>
                <div className="absolute h-8 w-8 -bottom-2 -right-2 bg-white p-1.5 rounded-full shadow-md flex items-center justify-center">
                  <Icon name="favorite" className="text-red-500 text-lg lg:text-xl" filled />
                </div>
              </div>
              <div className="text-center lg:text-left max-w-[200px] mx-auto lg:mx-0">
                <div className="mb-3 flex justify-center lg:justify-start">
                  {[...Array(item.rating)].map((_, i) => (
                    <Icon key={i} name="star" className="text-yellow-400 text-sm lg:text-base mr-0.5" filled />
                  ))}
                </div>
                <h3 className="text-sm lg:text-base font-bold text-gray-900 italic leading-normal mb-3 relative inline-block">
                  {item.quote}
                </h3>
                <div>
                  <p className="text-xs font-semibold text-gray-900">{item.author}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="lucide lucide-user-check-icon lucide-user-check"><path d="m16 11 2 2 4-4"/><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                    <p className="text-gray-500 text-[10px] font-medium">Verified User • Lost 15lbs</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};