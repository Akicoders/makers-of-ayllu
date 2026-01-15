import React from 'react';
import { Head } from '@inertiajs/react';
import TopbarWidget from '@/components/landing/TopbarWidget';
import HeroWidget from '@/components/landing/HeroWidget';
import FeaturesWidget from '@/components/landing/FeaturesWidget';
import HighlightsWidget from '@/components/landing/HighlightsWidget';
import PricingWidget from '@/components/landing/PricingWidget';
import FooterWidget from '@/components/landing/FooterWidget';

const Landing: React.FC = () => {
    return (
        <div className="bg-surface-0 dark:bg-surface-900">
            <Head title="Bienvenido" />
            <div id="home" className="landing-wrapper overflow-hidden">
                <div className="py-6 px-6 mx-0 md:mx-12 lg:mx-20 lg:px-20 flex items-center justify-between relative lg:static">
                    <TopbarWidget />
                </div>
                <HeroWidget />
                <FeaturesWidget />
                <HighlightsWidget />
                <PricingWidget />
                <FooterWidget />
            </div>
        </div>
    );
};

export default Landing;
