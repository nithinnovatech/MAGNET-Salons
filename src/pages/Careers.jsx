import React, { useState } from 'react';
import {
    BriefcaseIcon,
    AcademicCapIcon,
    CurrencyDollarIcon,
    HeartIcon,
    UserGroupIcon,
    TrophyIcon,
} from '@heroicons/react/24/outline';

const Careers = () => {
    const [application, setApplication] = useState({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        message: '',
    });

    const handleChange = (e) => {
        setApplication({
            ...application,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = `Job Application: ${application.position} - ${application.name}`;
        const body = `
Name: ${application.name}
Email: ${application.email}
Phone: ${application.phone}
Position: ${application.position}
Experience: ${application.experience}

Message/Why Join:
${application.message}
        `.trim();

        window.location.href = `mailto:contact@magnetsalons.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Reset form (optional, but good UX if they come back)
        setApplication({
            name: '',
            email: '',
            phone: '',
            position: '',
            experience: '',
            message: '',
        });
    };

    const benefits = [
        {
            icon: CurrencyDollarIcon,
            title: 'Competitive Salary',
            description: 'Industry-leading compensation packages',
        },
        {
            icon: AcademicCapIcon,
            title: 'Training & Development',
            description: 'Continuous learning and skill enhancement',
        },
        {
            icon: HeartIcon,
            title: 'Work-Life Balance',
            description: 'Flexible schedules and supportive environment',
        },
        {
            icon: UserGroupIcon,
            title: 'Team Culture',
            description: 'Collaborative and inclusive workplace',
        },
        {
            icon: TrophyIcon,
            title: 'Career Growth',
            description: 'Clear path for advancement opportunities',
        },
        {
            icon: BriefcaseIcon,
            title: 'Premium Work Environment',
            description: 'State-of-the-art facilities and tools',
        },
    ];

    const openings = [
        {
            title: 'Senior Hair Stylist',
            location: 'Nellore / Tirupati',
            type: 'Full-time',
            experience: '3+ years',
            description:
                'Experienced hairstylist with expertise in cutting, coloring, and styling. Must have strong client communication skills.',
        },
        {
            title: 'Beautician',
            location: 'All Locations',
            type: 'Full-time',
            experience: '2+ years',
            description:
                'Skilled beautician for facials, waxing, threading, and other beauty services. Certification required.',
        },
        {
            title: 'Makeup Artist',
            location: 'Nellore',
            type: 'Full-time / Part-time',
            experience: '1+ years',
            description:
                'Professional makeup artist for bridal, party, and special occasion makeup. Portfolio required.',
        },
        {
            title: 'Spa Therapist',
            location: 'Tirupati',
            type: 'Full-time',
            experience: '2+ years',
            description:
                'Certified spa therapist for massage, skincare treatments, and wellness services.',
        },
        {
            title: 'Receptionist',
            location: 'All Locations',
            type: 'Full-time',
            experience: '0-1 years',
            description:
                'Front desk executive with good communication skills and customer service experience.',
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
                        Join the <span className="magnet-brand">MAGNET</span> Family
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                        Build your career in the beauty industry with us
                    </p>
                </div>
            </section>

            {/* Why Work With Us */}
            <section className="section-padding bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="section-title">
                            Why Work at <span className="magnet-brand">MAGNET</span> Salons?
                        </h2>
                        <p className="section-subtitle">
                            Join a team that values growth, creativity, and excellence
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="inline-flex p-4 bg-gradient-orange rounded-full mb-6">
                                    <benefit.icon className="h-10 w-10 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Current Openings */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="section-title">
                            Current <span className="magnet-brand">Openings</span>
                        </h2>
                        <p className="section-subtitle">
                            Explore exciting career opportunities with us
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {openings.map((job, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-orange-500 transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                                    <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold">
                                        {job.type}
                                    </span>
                                </div>
                                <div className="text space-y-2 mb-4">
                                    <p className="text-gray-600">
                                        📍 <span className="font-semibold">{job.location}</span>
                                    </p>
                                    <p className="text-gray-600">
                                        💼 <span className="font-semibold">{job.experience}</span> experience
                                    </p>
                                </div>
                                <p className="text-gray-700 leading-relaxed mb-6">{job.description}</p>
                                <button
                                    onClick={() =>
                                        document.getElementById('application-form').scrollIntoView({
                                            behavior: 'smooth',
                                        })
                                    }
                                    className="btn-primary w-full"
                                >
                                    Apply Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section
                id="application-form"
                className="section-padding bg-gradient-dark text-white"
            >
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-black mb-4">
                            Apply <span className="magnet-brand">Now</span>
                        </h2>
                        <p className="text-xl text-gray-300">
                            Take the first step towards an exciting career
                        </p>
                    </div>

                    <div className="bg-white text-gray-900 p-8 md:p-12 rounded-3xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={application.name}
                                        onChange={handleChange}
                                        required
                                        className="input-primary"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={application.email}
                                        onChange={handleChange}
                                        required
                                        className="input-primary"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={application.phone}
                                        onChange={handleChange}
                                        required
                                        className="input-primary"
                                        placeholder="+91 98850 77796"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        Position Applied For *
                                    </label>
                                    <select
                                        name="position"
                                        value={application.position}
                                        onChange={handleChange}
                                        required
                                        className="input-primary"
                                    >
                                        <option value="">Select Position</option>
                                        {openings.map((job, index) => (
                                            <option key={index} value={job.title}>
                                                {job.title}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">
                                    Years of Experience *
                                </label>
                                <input
                                    type="text"
                                    name="experience"
                                    value={application.experience}
                                    onChange={handleChange}
                                    required
                                    className="input-primary"
                                    placeholder="e.g., 3 years"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">
                                    Why do you want to join MAGNET Salons? *
                                </label>
                                <textarea
                                    name="message"
                                    value={application.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="input-primary resize-none"
                                    placeholder="Tell us why you're a great fit..."
                                />
                            </div>

                            <button type="submit" className="btn-primary w-full text-lg py-4">
                                Submit Application
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-gray-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Don't see the right position?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Send us your resume anyway! We're always looking for talented individuals.
                    </p>
                    <a
                        href="mailto:contact@magnetsalons.in"
                        className="btn-primary text-lg px-12 py-4"
                    >
                        Send Your Resume
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Careers;
