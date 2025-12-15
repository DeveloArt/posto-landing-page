import React from 'react';
import { Icon } from './Icon';

export const Pricing: React.FC = () => {
    return (
        <section className="px-6 py-20 lg:py-24 max-w-full mx-auto bg-gray-50" id="pricing">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold text-xs uppercase tracking-widest bg-green-100 px-4 py-1.5 rounded-full">
                        Pricing
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-6 leading-tight">
                        Simple, transparent pricing
                    </h2>
                    <p className="text-gray-500 mt-4 text-lg">
                        No hidden fees. No credit card required.
                    </p>
                </div>

                <div className="bg-white rounded-4xl p-8 lg:p-12 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 p-5 group-hover:scale-110 transition-transform bg-green-100 rounded-2xl mt-5 ml-5 w-14 h-14 flex items-center justify-center shrink-0">
                        <Icon name="attach_money" className="text-green-600 text-2xl" />
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10 mt-5">
                        <div className="flex-1 text-center lg:text-left">
                            <div className="flex items-baseline justify-center lg:justify-start gap-1">
                                <span className="text-5xl font-bold text-gray-900">Free</span>
                            </div>
                            <p className="text-gray-500 mt-4 leading-relaxed">
                                Enjoy all features completely free. We believe in accessible health tools for everyone.
                            </p>
                        </div>

                        <div className="h-px lg:h-auto lg:w-px bg-gray-100 self-stretch w-full" />

                        <div className="flex-1 w-full lg:w-auto">
                            <ul role="list" className="space-y-4">
                                {[
                                    'Unlimited functionality',
                                    'Zero advertisements',
                                    'No subscription needed',
                                    'Full data privacy',
                                    'All future updates included'
                                ].map((feature, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <div className="shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                                            <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col items-center">
                        <p className="text-gray-400 text-sm mt-4">
                            No credit card required. Just download and start.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};