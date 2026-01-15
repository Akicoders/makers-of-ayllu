import React from 'react';
import { Head } from '@inertiajs/react';

const Documentation: React.FC = () => {
    return (
        <>
            <Head title="Documentación" />
            <div className="card">
                <div className="font-semibold text-2xl mb-4">Documentation</div>
                <div className="font-medium text-xl text-900 mb-4">Getting Started</div>
                <p className="text-lg mb-4">
                    Sakai is an application template for React based on the <a href="https://github.com/primefaces/sakai-react" className="font-medium text-primary hover:underline">Sakai React</a> project.
                    The goal is to provide a solid foundation for your React applications using PrimeReact and Tailwind CSS.
                </p>

                <div className="font-medium text-xl text-900 mb-4">Structure</div>
                <p className="text-lg mb-4">
                    The project structure is organized as follows:
                </p>
                <ul className="list-disc pl-8 text-lg mb-4">
                    <li><span className="font-medium">resources/js/components</span>: Reusable React components.</li>
                    <li><span className="font-medium">resources/js/views</span>: Page views and layouts.</li>
                    <li><span className="font-medium">resources/js/layout</span>: Main layout components (Sidebar, Topbar, etc.).</li>
                    <li><span className="font-medium">resources/js/service</span>: Service layers for API calls.</li>
                </ul>

                <div className="font-medium text-xl text-900 mb-4">Tailwind CSS</div>
                <p className="text-lg mb-4">
                    The project uses Tailwind CSS for styling. You can find the configuration in <span className="font-medium">tailwind.config.js</span>.
                    PrimeReact components are styled using the Passthrough API to integrate seamlessly with Tailwind.
                </p>

                <div className="font-medium text-xl text-900 mb-4">Inertia.js</div>
                <p className="text-lg mb-4">
                    Routing and server-side interaction are handled by Inertia.js, providing a modern SPA experience within a Django backend.
                </p>
            </div>
        </>
    );
};

export default Documentation;
