import React, { useState } from 'react';
import {
    MapPinIcon,
    PhoneIcon,
    EnvelopeIcon,
    ClockIcon,
} from '@heroicons/react/24/outline';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        branch: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = `New Contact Inquiry from ${formData.name}`;
        const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Preferred Branch: ${formData.branch}

Message:
${formData.message}
        `.trim();

        window.location.href = `mailto:contact@magnetsalons.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        setFormData({ name: '', email: '', phone: '', branch: '', message: '' });
    };

    const branches = [
        {
            name: 'Magunta Layout, Nellore',
            address:
                '3rd Floor, Lakshmi Priya Imperial Towers, Above SBI Bank, Magunta Layout, Nellore - 524001',
            phone: '98850 77796',
            mapEmbed:
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245535.56250893784!2d79.73925415!3d14.44810675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf6ae60000001%3A0x36e038e47f654981!2sNellore%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123',
        },
        {
            name: 'Childrens Park, Nellore',
            address:
                'First Floor, Aadhya Enclave, Childrens Park Main Road, Above Canara Bank, Nellore - 524003',
            phone: '98850 77796',
            mapEmbed:
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245535.56250893784!2d79.73925415!3d14.44810675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf6ae60000001%3A0x36e038e47f654981!2sNellore%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123',
        },
        {
            name: 'Tirupati',
            address:
                'First Floor, Opp. Yamaha Showroom, New Balaji Colony, AIR Bypass Road, Tirupati',
            phone: '98850 77796',
            mapEmbed:
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245535.56250893784!2d79.41999545!3d13.62851275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b0f88a1cb87%3A0xf3dac7b9a5aa7e42!2sTirupati%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123',
        },
    ];

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            'url(https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1920&q=80)',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-dark opacity-80" />
                </div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
                        Get in <span className="magnet-brand">Touch</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200">
                        We'd love to hear from you!
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="section-padding bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all">
                            <div className="inline-flex p-4 bg-gradient-orange rounded-full mb-4">
                                <PhoneIcon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Call Us</h3>
                            <a
                                href="tel:9885077796"
                                className="text-orange-500 text-lg font-semibold hover:underline"
                            >
                                98850 77796
                            </a>
                            <p className="text-gray-600 mt-2">Monday - Sunday, 9am - 9pm</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all">
                            <div className="inline-flex p-4 bg-gradient-orange rounded-full mb-4">
                                <EnvelopeIcon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Email Us</h3>
                            <a
                                href="mailto:contact@magnetsalons.com"
                                className="text-orange-500 text-lg font-semibold hover:underline  break-all"
                            >
                                contact@magnetsalons.com
                            </a>
                            <p className="text-gray-600 mt-2">24/7 Email Support</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all">
                            <div className="inline-flex p-4 bg-gradient-orange rounded-full mb-4">
                                <ClockIcon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Working Hours</h3>
                            <p className="text-gray-800 text-lg font-semibold">9:00 AM - 9:00 PM</p>
                            <p className="text-gray-600 mt-2">All Days of the Week</p>
                        </div>
                    </div>

                    {/* Contact Form & Social */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Form */}
                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg">
                            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="input-primary"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="input-primary"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">
                                            Phone *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="input-primary"
                                            placeholder="+91 98850 77796"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        Preferred Branch
                                    </label>
                                    <select
                                        name="branch"
                                        value={formData.branch}
                                        onChange={handleChange}
                                        className="input-primary"
                                    >
                                        <option value="">Select a branch</option>
                                        <option value="magunta">Magunta Layout, Nellore</option>
                                        <option value="childrens">Childrens Park, Nellore</option>
                                        <option value="tirupati">Tirupati</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="input-primary resize-none"
                                        placeholder="Tell us how we can help you..."
                                    />
                                </div>

                                <button type="submit" className="btn-primary w-full text-lg py-4">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Social Media */}
                        <div>
                            <div className="bg-gradient-dark text-white p-8 md:p-10 rounded-3xl mb-8">
                                <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
                                <p className="text-gray-300 mb-8">
                                    Follow us on social media for the latest updates, beauty tips, and
                                    exclusive offers!
                                </p>
                                <div className="space-y-4">
                                    <a
                                        href="https://facebook.com/magnetsalons"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all"
                                    >
                                        <FaFacebookF className="h-6 w-6 text-orange-500" />
                                        <div>
                                            <p className="font-semibold">Facebook</p>
                                            <p className="text-sm text-gray-300">@magnetsalons</p>
                                        </div>
                                    </a>
                                    <a
                                        href="https://instagram.com/magnetsalons"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all"
                                    >
                                        <FaInstagram className="h-6 w-6 text-orange-500" />
                                        <div>
                                            <p className="font-semibold">Instagram</p>
                                            <p className="text-sm text-gray-300">@magnetsalons</p>
                                        </div>
                                    </a>
                                    <a
                                        href="https://youtube.com/@magnetsalons"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all"
                                    >
                                        <FaYoutube className="h-6 w-6 text-orange-500" />
                                        <div>
                                            <p className="font-semibold">YouTube</p>
                                            <p className="text-sm text-gray-300">@magnetsalons</p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-3xl shadow-lg">
                                <h3 className="text-2xl font-bold mb-4">Visit Us</h3>
                                <p className="text-gray-600 mb-4">
                                    Experience our world-class services at any of our three locations. Walk-ins
                                    welcome!
                                </p>
                                <p className="text-orange-500 font-semibold">
                                    See our locations below ↓
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Branch Locations with Maps */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="section-title mb-16">
                        Our <span className="magnet-brand">Locations</span>
                    </h2>

                    <div className="space-y-12">
                        {branches.map((branch, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2">
                                    <div className="p-8 md:p-10 flex flex-col justify-center">
                                        <h3 className="text-3xl font-bold mb-4">{branch.name}</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-start space-x-3">
                                                <MapPinIcon className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                                                <p className="text-gray-700 leading-relaxed">
                                                    {branch.address}
                                                </p>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <PhoneIcon className="h-6 w-6 text-orange-500" />
                                                <a
                                                    href={`tel:${branch.phone}`}
                                                    className="text-gray-900 font-semibold hover:text-orange-500"
                                                >
                                                    {branch.phone}
                                                </a>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                                <ClockIcon className="h-6 w-6 text-orange-500" />
                                                <div>
                                                    <p className="font-semibold">9:00 AM - 9:00 PM</p>
                                                    <p className="text-gray-600">Monday - Sunday</p>
                                                </div>
                                            </div>
                                        </div>
                                        <a
                                            href={`https://maps.google.com/?q=${encodeURIComponent(
                                                branch.address
                                            )}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary mt-6 w-max"
                                        >
                                            Get Directions
                                        </a>
                                    </div>
                                    <div className="h-96 lg:h-full">
                                        <iframe
                                            src={branch.mapEmbed}
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title={`Map of ${branch.name}`}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
