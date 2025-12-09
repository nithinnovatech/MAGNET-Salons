import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const About = () => {
    const stats = [
        { number: '3', label: 'Premium Locations' },
        { number: '8+', label: 'Years Experience' },
        { number: '10K+', label: 'Happy Clients' },
        { number: '50+', label: 'Expert Professionals' },
    ];

    const values = [
        {
            title: 'Excellence',
            description:
                'We strive for perfection in every service, ensuring you leave feeling confident and beautiful.',
        },
        {
            title: 'Innovation',
            description:
                'Staying ahead with the latest beauty trends, techniques, and international products.',
        },
        {
            title: 'Customer First',
            description:
                'Your satisfaction is our priority. We listen, understand, and deliver personalized care.',
        },
        {
            title: 'Professionalism',
            description:
                'Our certified experts maintain the highest standards of hygiene, safety, and service quality.',
        },
    ];

    const milestones = [
        {
            year: '2016',
            event: 'MAGNET Salons founded by B. Surya Narayana Raju in Magunta Layout, Nellore',
        },
        {
            year: '2018',
            event: 'Opened second branch in Children\'s Park Road, Nellore due to growing demand',
        },
        {
            year: '2019',
            event: 'Expanded to Tirupati with AIR Bypass Road branch, bringing premium services to more customers',
        },
        {
            year: '2022',
            event: 'Ventured into cosmetic retail business with exclusive range of beauty products',
        },
        {
            year: '2024',
            event: 'Recognized as one of the leading salon chains in Andhra Pradesh',
        },
    ];

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80)',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                            About <span className="magnet-brand">MAGNET</span> Salons
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                            Redefining beauty standards with premium services, expert professionals,
                            and a commitment to excellence since 2016.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-orange bg-clip-text mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-lg text-gray-600 font-semibold">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="section-padding bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black mb-6">
                                Our <span className="magnet-brand">Story</span>
                            </h2>
                            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                                <p>
                                    Magnet was established in 2016 in Magunta Layout, Nellore by our founder,
                                    B. Surya Narayana Raju, with the aim of offering exceptional beauty and
                                    wellness services. Due to growing demand, we opened a second branch in
                                    Children's Park Road, Nellore in 2018, followed by the launch of our
                                    Tirupati branch in 2019.
                                </p>
                                <p>
                                    In 2022, we ventured into the cosmetic retail business, offering an
                                    exclusive range of beauty products to complement our salon services.
                                    At Magnet Salon & Aesthetics, we are committed to delivering personalized
                                    treatments and luxurious experiences that leave you feeling confident and
                                    rejuvenated.
                                </p>
                                <p>
                                    Today, MAGNET Salons stands as a symbol of excellence in the beauty
                                    industry, known for our commitment to quality, innovation, and
                                    exceptional customer service. We continue to evolve, adding new services
                                    and staying ahead of beauty trends to serve you better.
                                </p>
                            </div>
                            <div className="mt-8">
                                <Link to="/services" className="btn-primary">
                                    Explore Our Services
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80"
                                alt="Salon Interior"
                                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="section-title">
                            Our <span className="magnet-brand">Values</span>
                        </h2>
                        <p className="section-subtitle">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-orange-500 transition-colors">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section-padding bg-gradient-dark text-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black mb-4">
                            Our <span className="magnet-brand">Journey</span>
                        </h2>
                        <p className="text-xl text-gray-300">
                            Milestones that shaped our success story
                        </p>
                    </div>

                    <div className="space-y-8">
                        {milestones.map((milestone, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-6 group"
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-20 h-20 rounded-full bg-gradient-orange flex items-center justify-center text-white font-black text-lg shadow-lg group-hover:scale-110 transition-transform">
                                        {milestone.year}
                                    </div>
                                </div>
                                <div className="flex-1 bg-white/10 p-6 rounded-xl group-hover:bg-white/20 transition-all">
                                    <p className="text-xl text-gray-200 leading-relaxed">
                                        {milestone.event}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=800&q=80"
                                alt="Professional Team"
                                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black mb-6">
                                Why Choose <span className="magnet-brand">MAGNET</span>?
                            </h2>
                            <div className="space-y-4">
                                {[
                                    'Certified and experienced beauty professionals',
                                    'International standard products and equipment',
                                    'Hygienic and luxurious salon environment',
                                    'Personalized consultation for every client',
                                    'Competitive pricing with premium quality',
                                    'Latest beauty trends and techniques',
                                    'Convenient locations across Nellore and Tirupati',
                                    'Flexible appointment scheduling',
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <CheckCircleIcon className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                                        <p className="text-lg text-gray-700">{item}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                <Link to="/contact" className="btn-primary">
                                    Visit Us Today
                                </Link>
                                <a href="tel:9885077796" className="btn-secondary">
                                    Call: 98850 77796
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-gradient-orange text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">
                        Experience the MAGNET Difference
                    </h2>
                    <p className="text-xl mb-10 text-white/90">
                        Join thousands of satisfied customers who trust us for their beauty needs
                    </p>
                    <Link to="/services" className="btn-dark text-lg px-12 py-4">
                        View Our Services
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;
