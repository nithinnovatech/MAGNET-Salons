import React from 'react';
import { MapPinIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline';

const BranchLocations = () => {
    const branches = [
        {
            name: 'Magunta Layout',
            city: 'Nellore',
            address:
                '3rd Floor, Lakshmi Priya Imperial Towers, above SBI Bank, Nellore, 524003, AP, IN',
            phone: '98850 77796',
            mapLink: 'https://www.google.com/maps/search/Magnet%20Salon/@14.43504811,79.97851457,17z',
            image:
                'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80',
        },
        {
            name: 'Childrens Park',
            city: 'Nellore',
            address:
                '16-15-986-1, Aadhya Enclave, Childrens Park Road / Main Road, 1, Nellore, 524002, AP, IN',
            phone: '98850 77796',
            mapLink: 'https://www.google.com/maps/search/Magnet%20Salon/@14.44010656,79.99281092,17z',
            image:
                'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80',
        },
        {
            name: 'AIR Bypass Road',
            city: 'Tirupati',
            address:
                'First Floor, Opp. Yamaha Showroom, New Balaji Colony, AIR Bypass Road, Tirupati',
            phone: '98850 77796',
            mapLink: 'https://maps.google.com/?q=AIR+Bypass+Road+Tirupati',
            image:
                'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=800&q=80',
        },
    ];

    return (
        <section className="section-padding bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="section-title">
                        Visit Our <span className="magnet-brand">Locations</span>
                    </h2>
                    <p className="section-subtitle">
                        Find the nearest MAGNET Salon to experience premium beauty services
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {branches.map((branch, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={branch.image}
                                    alt={`${branch.name} branch`}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-2xl font-bold text-white mb-1">
                                        {branch.name}
                                    </h3>
                                    <p className="text-orange-400 font-semibold text-lg">
                                        {branch.city}
                                    </p>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start space-x-3">
                                    <MapPinIcon className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                                    <a
                                        href={branch.mapLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 leading-relaxed hover:text-orange-500 transition-colors"
                                    >
                                        {branch.address}
                                    </a>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <PhoneIcon className="h-6 w-6 text-orange-500 flex-shrink-0" />
                                    <a
                                        href={`tel:${branch.phone}`}
                                        className="text-gray-900 font-semibold hover:text-orange-500 transition-colors"
                                    >
                                        {branch.phone}
                                    </a>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <ClockIcon className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                                    <div className="text-gray-600">
                                        <p className="font-semibold text-gray-900">
                                            9:00 AM - 9:00 PM
                                        </p>
                                        <p className="text-sm">Monday - Sunday</p>
                                    </div>
                                </div>

                                <a
                                    href={branch.mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary w-full mt-4"
                                >
                                    Get Directions
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BranchLocations;
