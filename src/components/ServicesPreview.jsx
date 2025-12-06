import React from 'react';
import { Link } from 'react-router-dom';
import {
    SparklesIcon,
    ScissorsIcon,
    FireIcon,
    PaintBrushIcon,
    ScaleIcon,
    UserGroupIcon,
} from '@heroicons/react/24/outline';

const ServicesPreview = () => {
    const services = [
        {
            icon: SparklesIcon,
            title: 'Skin Treatments',
            description:
                'Rejuvenate your skin with our advanced facial treatments and skincare solutions.',
            color: 'from-orange-400 to-pink-500',
        },
        {
            icon: ScissorsIcon,
            title: 'Hair Treatments',
            description:
                'From cuts to colors, our expert stylists create the perfect look for you.',
            color: 'from-purple-400 to-pink-600',
        },
        {
            icon: FireIcon,
            title: 'Laser Hair Removal',
            description:
                'Permanent hair reduction with state-of-the-art laser technology.',
            color: 'from-red-400 to-orange-500',
        },
        {
            icon: PaintBrushIcon,
            title: 'Permanent Makeup',
            description:
                'Enhance your natural beauty with our professional permanent makeup services.',
            color: 'from-blue-400 to-indigo-600',
        },
        {
            icon: ScaleIcon,
            title: 'Weight Loss',
            description:
                'Achieve your fitness goals with our personalized weight loss programs.',
            color: 'from-green-400 to-teal-500',
        },
        {
            icon: UserGroupIcon,
            title: 'Salon Services',
            description:
                'Complete beauty solutions including manicures, pedicures, and spa treatments.',
            color: 'from-yellow-400 to-orange-500',
        },
    ];

    return (
        <section className="section-padding bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="section-title">
                        Our <span className="magnet-brand">Premium</span> Services
                    </h2>
                    <p className="section-subtitle">
                        Discover a world of beauty and wellness tailored just for you
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer relative overflow-hidden"
                        >
                            {/* Gradient Background on Hover */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                            />

                            {/* Content */}
                            <div className="relative z-10">
                                <div
                                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6 transform group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <service.icon className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-orange-500 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <Link
                                    to="/services"
                                    className="inline-flex items-center text-orange-500 font-semibold group-hover:gap-3 transition-all duration-300"
                                >
                                    <span>Learn More</span>
                                    <svg
                                        className="w-5 h-5 transform group-hover:translate-x-2 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link to="/services" className="btn-primary text-lg px-12 py-4">
                        View All Services
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesPreview;
