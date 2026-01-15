import React from 'react';
import { Link } from '@inertiajs/react';

const HeroWidget: React.FC = () => {
    return (
        <div 
            id="hero" 
            className="flex flex-col pt-6 px-6 lg:px-20 overflow-hidden"
            style={{
                background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, rgb(238, 239, 175) 0%, rgb(195, 227, 250) 100%)',
                clipPath: 'ellipse(150% 87% at 93% 13%)'
            }}
        >
            <div className="mx-6 md:mx-20 mt-0 md:mt-6">
                <h1 className="text-6xl font-bold text-gray-900 leading-tight">
                    <span className="font-light block">Eu sem integer</span>eget magna fermentum
                </h1>
                <p className="font-normal text-2xl leading-normal md:mt-4 text-gray-700">
                    Sed blandit libero volutpat sed cras. Fames ac turpis egestas integer. Placerat in egestas erat...
                </p>
                <Link href="/" as="button" className="p-button p-component p-button-rounded !text-xl mt-8 !px-4">
                    <span className="p-button-label">Get Started</span>
                </Link>
            </div>
            <div className="flex justify-center md:justify-end">
                <img src="/demo/images/landing/screen-1.png" alt="Hero Image" className="w-9/12 md:w-auto" />
            </div>
        </div>
    );
};

export default HeroWidget;
