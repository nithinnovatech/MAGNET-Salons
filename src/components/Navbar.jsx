import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
        { name: 'Careers', path: '/careers' },
        { name: 'About Us', path: '/about' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-gray-800 shadow-lg'
                : 'bg-gray-800'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-28">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-1">
                        <img
                            src="/images/magnet_logo_recolor.png"
                            alt="Magnet Salon & Aesthetics"
                            className="h-24 md:h-32 w-auto object-contain"
                        />
                        <span className="text-orange-500 font-bold text-xs md:text-sm -ml-1 mt-2 md:mt-3">®</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-base font-semibold transition-colors duration-200 relative group ${isActive(link.path)
                                    ? 'text-orange-500'
                                    : 'text-white hover:text-orange-400'
                                    }`}
                            >
                                {link.name}
                                <span
                                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full ${isActive(link.path) ? 'w-full' : ''
                                        }`}
                                />
                            </Link>
                        ))}
                        <a
                            href="tel:9885077796"
                            className="btn-primary flex items-center space-x-2"
                        >
                            <PhoneIcon className="h-5 w-5" />
                            <span>Book Now</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 rounded-lg transition-colors text-white hover:bg-gray-700"
                    >
                        {isMobileMenuOpen ? (
                            <XMarkIcon className="h-7 w-7" />
                        ) : (
                            <Bars3Icon className="h-7 w-7" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
                    }`}
            >
                <div className="bg-white border-t border-gray-200 px-4 py-6 space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block py-2 text-lg font-semibold transition-colors ${isActive(link.path)
                                ? 'text-orange-500'
                                : 'text-gray-700 hover:text-orange-500'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="tel:9885077796"
                        className="btn-primary w-full flex items-center justify-center space-x-2"
                    >
                        <PhoneIcon className="h-5 w-5" />
                        <span>Book Now</span>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
