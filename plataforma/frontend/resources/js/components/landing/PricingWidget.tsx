import React from 'react';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';

const PricingWidget: React.FC = () => {
    return (
        <div id="pricing" className="py-6 px-6 lg:px-20 my-2 md:my-6">
            <div className="text-center mb-6">
                <div className="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">Matchless Pricing</div>
                <span className="text-muted-color text-2xl">Amet consectetur adipiscing elit...</span>
            </div>

            <div className="grid grid-cols-12 gap-4 justify-between mt-20 md:mt-0">
                <div className="col-span-12 lg:col-span-4 p-0 md:p-4">
                    <div className="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style={{ borderRadius: '10px' }}>
                        <div className="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl">Free</div>
                        <img src="/demo/images/landing/free.svg" className="w-10/12 mx-auto" alt="free" />
                        <div className="my-8 flex flex-col items-center gap-4">
                            <div className="flex items-center">
                                <span className="text-5xl font-bold mr-2 text-surface-900 dark:text-surface-0">$0</span>
                                <span className="text-surface-600 dark:text-surface-200">per month</span>
                            </div>
                            <Button label="Get Started" className="p-button-rounded border-0 ml-4 font-light leading-tight bg-blue-500 text-white"></Button>
                        </div>
                        <Divider className="w-full bg-surface-200"></Divider>
                        <ul className="my-8 list-none p-0 flex text-surface-900 dark:text-surface-0 flex-col px-8">
                            <li className="py-2">
                                <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span className="text-xl leading-normal">Responsive Layout</span>
                            </li>
                            <li className="py-2">
                                <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span className="text-xl leading-normal">Unlimited Push Messages</span>
                            </li>
                            <li className="py-2">
                                <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span className="text-xl leading-normal">50 Support Ticket</span>
                            </li>
                            <li className="py-2">
                                <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span className="text-xl leading-normal">Free Shipping</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-4 p-0 md:p-4 mt-6 md:mt-0">
                    <div className="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style={{ borderRadius: '10px' }}>
                        <div className="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl">Startup</div>
                        <img src="/demo/images/landing/startup.svg" className="w-10/12 mx-auto" alt="startup" />
                        <div className="my-8 flex flex-col items-center gap-4">
                            <div className="flex items-center">
                                <span className="text-5xl font-bold mr-2 text-surface-900 dark:text-surface-0">$1</span>
                                <span className="text-surface-600 dark:text-surface-200">per month</span>
                            </div>
                            <Button label="Get Started" className="p-button-rounded border-0 ml-4 font-light leading-tight bg-blue-500 text-white"></Button>
                        </div>
                        <Divider className="w-full bg-surface-200"></Divider>
                        <ul className="my-8 list-none p-0 flex text-surface-900 dark:text-surface-0 flex-col px-8">
                            <li className="py-2">
                                <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span className="text-xl leading-normal">Responsive Layout</span>
                            </li>
                            <li className="py-2">
                                <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span className="text-xl leading-normal">Unlimited Push Messages</span>
                            </li>
                            <li className="py-2">
                                <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span className="text-xl leading-normal">50 Support Ticket</span>
                            </li>
                            <li className="py-2">
                                <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span className="text-xl leading-normal">Free Shipping</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-4 p-0 md:p-4 mt-6 md:mt-0">
                    <div className="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style={{ borderRadius: '10px' }}>
                        <div className="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl">Enterprise</div>
                        <img src="/demo/images/landing/enterprise.svg" className="w-10/12 mx-auto" alt="enterprise" />
                        <div className="my-8 flex flex-col items-center gap-4">
                            <div className="flex items-center">
                                <span className="text-5xl font-bold mr-2 text-surface-900 dark:text-surface-0">$5</span>
                                <span className="text-surface-600 dark:text-surface-200">per month</span>
                            </div>
                            <Button label="Get Started" className="p-button-rounded border-0 ml-4 font-light leading-tight bg-blue-500 text-white"></Button>
                        </div>
                        <Divider className="w-full bg-surface-200"></Divider>
                        <ul className="my-8 list-none p-0 flex text-surface-900 dark:text-surface-0 flex-col px-8">
                            <li className="py-2">
                                <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span className="text-xl leading-normal">Responsive Layout</span>
                            </li>
                            <li className="py-2">
                                <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span className="text-xl leading-normal">Unlimited Push Messages</span>
                            </li>
                            <li className="py-2">
                                <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span className="text-xl leading-normal">50 Support Ticket</span>
                            </li>
                            <li className="py-2">
                                <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span className="text-xl leading-normal">Free Shipping</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingWidget;
