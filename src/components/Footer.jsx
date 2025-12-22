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
                '3rd Floor, Lakshmi Priya Imperial Towers, above SBI Bank, Nellore, 524003, AP, IN',
            mapLink: 'https://maps.app.goo.gl/vA8Swx428q62S3VL8',
        },
        {
            name: 'Childrens Park, Nellore',
            address:
                '16-15-986-1, Aadhya Enclave, Childrens Park Road / Main Road, 1, Nellore, 524002, AP, IN',
            mapLink: 'https://maps.app.goo.gl/dpvnJDkTzbJuMBvC6',
        },
        {
            name: 'Tirupati',
            address:
                'First Floor, Opp. Yamaha Showroom, New Balaji Colony, AIR Bypass Road, Tirupati',
            mapLink: 'https://www.google.com/maps/search/?api=1&query=Magnet+Salon+Tirupati',
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
                        <div className="mb-6">
                            <div className="relative inline-flex items-center">
                                <img
                                    src="/images/magnet_logo_recolor.png"
                                    alt="Magnet Salon & Aesthetics"
                                    className="h-28 w-auto"
                                />
                                <span className="text-white text-xs font-medium absolute top-8 right-[5%]">®</span>
                            </div>
                        </div>
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
                        <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
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
                        <h4 className="text-xl font-bold mb-6 text-white">Our Services</h4>
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
                        <h4 className="text-xl font-bold mb-6 text-white">Get In Touch</h4>
                        <div className="space-y-4">
                            <a
                                href="tel:9885077796"
                                className="flex items-start space-x-3 text-gray-300 hover:text-orange-500 transition-colors"
                            >
                                <FaPhone className="h-5 w-5 mt-1 flex-shrink-0" />
                                <span>98850 77796</span>
                            </a>
                            <a
                                href="mailto:contact@magnetsalons.in"
                                className="flex items-start space-x-3 text-gray-300 hover:text-orange-500 transition-colors break-all"
                            >
                                <FaEnvelope className="h-5 w-5 mt-1 flex-shrink-0" />
                                <span>contact@magnetsalons.in</span>
                            </a>
                            <div className="flex items-start space-x-3 text-gray-300">
                                <FaClock className="h-5 w-5 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold text-white">Business Hours</p>
                                    <p>9:00 AM - 9:00 PM</p>
                                    <p>Monday - Sunday</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Branches */}
                <div className="mt-16 pt-12 border-t border-white/10">
                    <h4 className="text-2xl font-bold mb-8 text-center text-white">
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
                                        <h5 className="font-bold text-lg mb-2 text-white">{branch.name}</h5>
                                        <a
                                            href={branch.mapLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-300 text-sm leading-relaxed hover:text-orange-500 transition-colors"
                                        >
                                            {branch.address}
                                        </a>
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

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
