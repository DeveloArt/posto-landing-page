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
    const testimonials = [testimonial, testimonial, testimonial]; // trzy identyczne recenzje

    return (
        <section id="testimonials" className="px-6 py-16 lg:py-20 max-w-full mx-auto">
            <div className="lg:bg-transparent rounded-3xl p-0">
                <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8 lg:justify-center flex-wrap">
                    {testimonials.map((t, idx) => (
                        <article
                            key={idx}
                            className="bg-white rounded-2xl p-6 flex flex-col lg:flex-row items-center lg:items-start lg:gap-6 w-full lg:w-[30rem] mx-auto"
                        >
                            {/* Avatar Area */}
                            <div className="relative mb-4 lg:mb-0 shrink-0">
                                <div className="w-16 h-16 lg:w-28 lg:h-28 rounded-full bg-gray-200 p-1 lg:p-2 border-2 border-dashed border-primary/30">
                                    <img
                                        src={t.avatarUrl}
                                        alt={t.author}
                                        className="w-full h-full object-cover rounded-full shadow-sm"
                                    />
                                </div>
                                <div className="absolute h-8 w-8 -bottom-2 -right-2 bg-white p-1 rounded-full shadow-sm">
                                    <Icon name="favorite" className="text-red-500 text-lg lg:text-xl" filled />
                                </div>
                            </div>

                            {/* Text Area */}
                            <div className="text-center lg:text-left">
                                <div className="mb-4 flex justify-center lg:justify-start">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Icon key={i} name="star" className="text-yellow-400 text-lg lg:text-xl mr-1" filled />
                                    ))}
                                </div>

                                <h3 className="text-lg lg:text-xl font-bold text-gray-900 italic leading-snug mb-4 relative inline-block max-w-[36rem]">
                                    <span className="text-4xl lg:text-5xl text-green-200 absolute -top-6 -left-6 -z-10 font-serif opacity-50">"</span>
                                    {t.quote}
                                </h3>

                                <div>
                                    <p className="text-base font-semibold text-gray-900">{t.author}</p>
                                    <p className="text-gray-500 text-sm font-medium">Verified User • Lost 15lbs</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};