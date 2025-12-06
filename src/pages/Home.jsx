import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ServicesPreview from '../components/ServicesPreview';
import BranchLocations from '../components/BranchLocations';
import { CheckCircleIcon, StarIcon, UsersIcon, SparklesIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Home = () => {
    const features = [
        {
            icon: CheckCircleIcon,
            title: 'Expert Professionals',
            description: 'Highly trained stylists and beauty experts with years of experience',
        },
        {
            icon: StarIcon,
            title: 'Premium Products',
            description: 'Only the best international brands and professional-grade products',
        },
        {
            icon: UsersIcon,
            title: '10,000+ Happy Clients',
            description: 'Trusted by thousands for their beauty and wellness needs',
        },
        {
            icon: SparklesIcon,
            title: 'Luxury Experience',
            description: 'State-of-the-art facilities designed for your comfort and relaxation',
        },
    ];

    const testimonials = [
        {
            name: 'Priya Sharma',
            service: 'Hair Spa Treatment',
            comment:
                'Amazing experience! The staff is so professional and the ambiance is luxurious. My hair has never looked better!',
            rating: 5,
        },
        {
            name: 'Rajesh Kumar',
            service: 'Laser Hair Removal',
            comment:
                'Best decision ever! The laser treatment was painless and the results are fantastic. Highly recommend MAGNET Salons.',
            rating: 5,
        },
        {
            name: 'Divya Reddy',
            service: 'Bridal Makeup',
            comment:
                'They made my wedding day perfect! The bridal package was worth every penny. I felt like a princess!',
            rating: 5,
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Slider */}
            <HeroSlider />

            {/* Welcome Section */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                                Welcome to <span className="magnet-brand">MAGNET</span> Salons
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Your premier destination for beauty, wellness, and transformation. With three
                                convenient locations in Nellore and Tirupati, we bring world-class beauty
                                services closer to you.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                From cutting-edge hair treatments to advanced skin care, laser services, and
                                permanent makeup - we offer a complete range of beauty solutions tailored to
                                your unique needs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Link to="/services" className="btn-primary">
                                    Explore Our Services
                                </Link>
                                <Link to="/contact" className="btn-secondary">
                                    Book an Appointment
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
                                alt="Salon Experience"
                                className="rounded-3xl shadow-2xl w-full object-cover h-[500px]"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-gradient-orange text-white p-8 rounded-2xl shadow-xl">
                                <p className="text-5xl font-black">10+</p>
                                <p className="text-lg font-semibold">Years Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="section-title">
                            Why Choose <span className="magnet-brand">MAGNET</span> Salons?
                        </h2>
                        <p className="section-subtitle">
                            Experience the difference with our commitment to excellence
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="inline-flex p-4 bg-gradient-orange rounded-full mb-6">
                                    <feature.icon className="h-10 w-10 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <ServicesPreview />

            {/* Testimonials */}
            <section className="section-padding bg-gradient-dark text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="section-title text-white">
                            What Our Clients <span className="magnet-brand">Say</span>
                        </h2>
                        <p className="section-subtitle text-gray-300">
                            Real experiences from real people
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300"
                            >
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-200 mb-6 leading-relaxed italic">
                                    "{testimonial.comment}"
                                </p>
                                <div>
                                    <p className="font-bold text-white">{testimonial.name}</p>
                                    <p className="text-orange-400 text-sm">{testimonial.service}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Branch Locations */}
            <BranchLocations />

            {/* CTA Section */}
            <section className="section-padding bg-gradient-orange text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">
                        Ready to Transform Your Look?
                    </h2>
                    <p className="text-xl mb-10 text-white/90">
                        Book your appointment today and experience the MAGNET difference
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:9885077796"
                            className="btn-dark text-lg px-12 py-4"
                        >
                            Call: 98850 77796
                        </a>
                        <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-orange-500 text-lg px-12 py-4">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
