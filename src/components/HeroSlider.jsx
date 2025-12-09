import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: '/images/hero-1.png',
            title: 'Transform Your Look',
            subtitle: 'Experience Premium Beauty & Hair Services',
            cta: 'Book Appointment',
            ctaLink: '/contact',
        },
        {
            image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80',
            title: 'Luxury Hair Treatments',
            subtitle: 'Expert Stylists • Premium Products • Stunning Results',
            cta: 'Explore Services',
            ctaLink: '/services',
        },
        {
            image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1920&q=80',
            title: 'Your Beauty Sanctuary',
            subtitle: 'Skin Care • Makeup • Spa Treatments • Weight Loss',
            cta: 'Learn More',
            ctaLink: '/about',
        },
    ];

    // Auto-advance slides
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-105'
                        }`}
                >
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${slide.image})`,
                        }}
                    >
                        {/* Dark overlay for better text visibility */}
                        <div className="absolute inset-0 bg-black/40" />
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex items-center">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                            <div className="max-w-3xl">
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight animate-slide-up">
                                    {slide.title.split(' ').map((word, i) =>
                                        word.toLowerCase() === 'magnet' ? (
                                            <span key={i} className="magnet-brand">
                                                {word}{' '}
                                            </span>
                                        ) : (
                                            <span key={i}>{word} </span>
                                        )
                                    )}
                                </h1>
                                <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-10 font-light">
                                    {slide.subtitle}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link to={slide.ctaLink} className="btn-primary text-lg px-10 py-4">
                                        {slide.cta}
                                    </Link>
                                    <a href="tel:9885077796" className="btn-secondary text-lg px-10 py-4 text-white border-white hover:bg-white hover:text-orange-500">
                                        Call: 98850 77796
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
                aria-label="Previous slide"
            >
                <ChevronLeftIcon className="h-6 w-6 md:h-8 md:w-8" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
                aria-label="Next slide"
            >
                <ChevronRightIcon className="h-6 w-6 md:h-8 md:w-8" />
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 rounded-full ${index === currentSlide
                            ? 'bg-orange-500 w-12 h-3'
                            : 'bg-white/50 hover:bg-white/75 w-3 h-3'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden md:block z-10">
                <div className="flex flex-col items-center gap-2 text-white/80 animate-bounce">
                    <span className="text-sm uppercase tracking-wider">Scroll</span>
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
                        <div className="w-1 h-3 bg-white rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSlider;
