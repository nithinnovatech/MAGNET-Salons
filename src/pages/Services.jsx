import React from 'react';
import {
    SparklesIcon,
    ScissorsIcon,
    FireIcon,
    PaintBrushIcon,
    ScaleIcon,
    UserGroupIcon,
    BeakerIcon,
    FaceSmileIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Services = () => {
    const serviceCategories = [
        {
            icon: SparklesIcon,
            title: 'Skin Treatments',
            color: 'from-orange-400 to-pink-500',
            services: [
                'Anti-Aging Facials',
                'Deep Cleansing',
                'Chemical Peels',
                'Microdermabrasion',
                'Acne Treatment',
                'Skin Brightening',
                'Hydra Facial',
                'Gold Facial',
            ],
        },
        {
            icon: ScissorsIcon,
            title: 'Hair Treatments',
            color: 'from-purple-400 to-pink-600',
            services: [
                'Hair Cuts & Styling',
                'Hair Coloring',
                'Highlights & Balayage',
                'Keratin Treatment',
                'Hair Spa',
                'Smoothening & Straightening',
                'Perming & Rebonding',
                'Scalp Treatment',
            ],
        },
        {
            icon: FireIcon,
            title: 'Laser Hair Removal',
            color: 'from-red-400 to-orange-500',
            services: [
                'Full Body Laser',
                'Facial Hair Removal',
                'Arms & Legs',
                'Underarms',
                'Bikini Line',
                'Brazilian',
                'Back & Chest',
                'Custom Packages',
            ],
        },
        {
            icon: PaintBrushIcon,
            title: 'Permanent Makeup',
            color: 'from-blue-400 to-indigo-600',
            services: [
                'Microblading Eyebrows',
                'Lip Blushing',
                'Eyeliner Tattoo',
                'Eyebrow Tinting',
                'Lash Extensions',
                'Brow Lamination',
                'HD Brows',
                'Semi-Permanent Makeup',
            ],
        },
        {
            icon: ScaleIcon,
            title: 'Weight Loss',
            color: 'from-green-400 to-teal-500',
            services: [
                'Body Contouring',
                'Fat Freezing (Cryolipolysis)',
                'Cavitation',
                'RF Skin Tightening',
                'Inch Loss Treatment',
                'Cellulite Reduction',
                'Slimming Wraps',
                'Personalized Diet Plans',
            ],
        },
        {
            icon: UserGroupIcon,
            title: 'Salon Services',
            color: 'from-yellow-400 to-orange-500',
            services: [
                'Manicure & Pedicure',
                'Gel Nails',
                'Nail Art',
                'Waxing Services',
                'Threading',
                'Bridal Packages',
                'Party Makeup',
                'Hair Extensions',
            ],
        },
    ];

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            'url(https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1920&q=80)',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-dark opacity-80" />
                </div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
                        Our <span className="magnet-brand">Premium</span> Services
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                        Comprehensive beauty and wellness solutions tailored for you
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section-padding bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {serviceCategories.map((category, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
                            >
                                <div className="flex items-start gap-6 mb-6">
                                    <div
                                        className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${category.color}`}
                                    >
                                        <category.icon className="h-10 w-10 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-3xl font-bold text-gray-900 mb-2">
                                            {category.title}
                                        </h3>
                                        <div className="h-1 w-20 bg-gradient-orange rounded" />
                                    </div>
                                </div>

                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 flex-grow">
                                    {category.services.map((service, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center space-x-2 text-gray-700 group"
                                        >
                                            <span className="text-orange-500 group-hover:scale-125 transition-transform flex-shrink-0">
                                                ✓
                                            </span>
                                            <span className="group-hover:text-orange-500 transition-colors text-sm sm:text-base">
                                                {service}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={`https://wa.me/919885077796?text=Hi, I am interested in ${category.title} at Magnet Salons`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary w-full flex items-center justify-center space-x-2 py-3 rounded-xl text-lg font-semibold"
                                >
                                    <span>Book via WhatsApp</span>
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.272-.57-.422z"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12 0C5.373 0 0 5.373 0 12c0 2.122.553 4.12 1.528 5.864L.367 22.846l5.122-1.341A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.815c-1.805 0-3.525-.483-5.022-1.319l-.36-.201-3.733.978.996-3.636-.234-.372A9.82 9.82 0 0112 2.185c5.411 0 9.815 4.404 9.815 9.815 0 5.411-4.404 9.815-9.815 9.815z"
                                        />
                                    </svg>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="section-title">
                            How It <span className="magnet-brand">Works</span>
                        </h2>
                        <p className="section-subtitle">
                            Your journey to beauty in four simple steps
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            {
                                step: '01',
                                title: 'Book Appointment',
                                description: 'Choose your service and preferred time slot',
                                icon: '📅',
                            },
                            {
                                step: '02',
                                title: 'Consultation',
                                description: 'Discuss your needs with our experts',
                                icon: '💬',
                            },
                            {
                                step: '03',
                                title: 'Treatment',
                                description: 'Relax and enjoy premium services',
                                icon: '✨',
                            },
                            {
                                step: '04',
                                title: 'Follow-up',
                                description: 'Get personalized care recommendations',
                                icon: '💖',
                            },
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="text-6xl mb-4">{item.icon}</div>
                                <div className="text-4xl font-black text-orange-500 mb-3">
                                    {item.step}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">
                                    {item.title}
                                </h4>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-orange text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl mb-10 text-white/90">
                        Book your appointment now and get 20% off on your first visit!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:9885077796" className="btn-dark text-lg px-12 py-4">
                            Call Now: 98850 77796
                        </a>
                        <Link
                            to="/contact"
                            className="btn-secondary border-white text-white hover:bg-white hover:text-orange-500 text-lg px-12 py-4"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
