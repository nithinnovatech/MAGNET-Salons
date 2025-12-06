import React from 'react';
import { Link } from 'react-router-dom';
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
} from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const branches = [
        {
            name: 'Magunta Layout, Nellore',
            address:
                '3rd Floor, Lakshmi Priya Imperial Towers, Above SBI Bank, Magunta Layout, Nellore - 524001',
        },
        {
            name: 'Childrens Park, Nellore',
            address:
                'First Floor, Aadhya Enclave, Childrens Park Main Road, Above Canara Bank, Nellore - 524003',
        },
        {
            name: 'Tirupati',
            address:
                'First Floor, Opp. Yamaha Showroom, New Balaji Colony, AIR Bypass Road, Tirupati',
        },
    ];

    const services = [
        'Skin Treatments',
        'Hair Treatments',
        'Laser Hair Removal',
        'Permanent Makeup',
        'Weight Loss',
        'Salon Services',
    ];

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About Us', path: '/about' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <footer className="bg-gradient-dark text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* About Section */}
                    <div>
                        <h3 className="text-3xl font-black mb-6">
                            <span className="magnet-brand">MAGNET</span> Salons
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Your premium beauty destination offering world-class services in a
                            luxurious setting. Experience the transformation.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com/magnetsalons"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 hover:bg-orange-500 p-3 rounded-full transition-all duration-300 hover:scale-110"
                            >
                                <FaFacebookF className="h-5 w-5" />
                            </a>
                            <a
                                href="https://instagram.com/magnetsalons"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 hover:bg-orange-500 p-3 rounded-full transition-all duration-300 hover:scale-110"
                            >
                                <FaInstagram className="h-5 w-5" />
                            </a>
                            <a
                                href="https://youtube.com/@magnetsalons"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 hover:bg-orange-500 p-3 rounded-full transition-all duration-300 hover:scale-110"
                            >
                                <FaYoutube className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-300 hover:text-orange-500 transition-colors duration-200 flex items-center group"
                                    >
                                        <span className="mr-2 transform group-hover:translate-x-1 transition-transform">
                                            →
                                        </span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-xl font-bold mb-6">Our Services</h4>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service}>
                                    <Link
                                        to="/services"
                                        className="text-gray-300 hover:text-orange-500 transition-colors duration-200 flex items-center group"
                                    >
                                        <span className="mr-2 transform group-hover:translate-x-1 transition-transform">
                                            →
                                        </span>
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-bold mb-6">Get In Touch</h4>
                        <div className="space-y-4">
                            <a
                                href="tel:9885077796"
                                className="flex items-start space-x-3 text-gray-300 hover:text-orange-500 transition-colors"
                            >
                                <FaPhone className="h-5 w-5 mt-1 flex-shrink-0" />
                                <span>98850 77796</span>
                            </a>
                            <a
                                href="mailto:contact@magnetsalons.com"
                                className="flex items-start space-x-3 text-gray-300 hover:text-orange-500 transition-colors break-all"
                            >
                                <FaEnvelope className="h-5 w-5 mt-1 flex-shrink-0" />
                                <span>contact@magnetsalons.com</span>
                            </a>
                            <div className="flex items-start space-x-3 text-gray-300">
                                <FaClock className="h-5 w-5 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold">Business Hours</p>
                                    <p>9:00 AM - 9:00 PM</p>
                                    <p>Monday - Sunday</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Branches */}
                <div className="mt-16 pt-12 border-t border-white/10">
                    <h4 className="text-2xl font-bold mb-8 text-center">
                        Our <span className="magnet-brand">Locations</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {branches.map((branch, index) => (
                            <div
                                key={index}
                                className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="flex items-start space-x-3">
                                    <FaMapMarkerAlt className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h5 className="font-bold text-lg mb-2">{branch.name}</h5>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            {branch.address}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © {currentYear}{' '}
                            <span className="magnet-brand font-bold">MAGNET</span> Salons. All
                            rights reserved.
                        </p>
                        <p className="text-gray-400 text-sm">
                            Crafted with ❤️ for beauty excellence
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
