import React from 'react';

const HighlightsWidget: React.FC = () => {
    return (
        <div id="highlights" className="py-6 px-6 lg:px-20 mx-0 my-12 lg:mx-20">
            <div className="text-center">
                <div className="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">Powerful Everywhere</div>
                <span className="text-muted-color text-2xl">Amet consectetur adipiscing elit...</span>
            </div>

            <div className="grid grid-cols-12 gap-4 mt-20 pb-2 md:pb-20">
                <div className="flex justify-center col-span-12 lg:col-span-6 bg-purple-100 p-0 order-1 lg:order-none" style={{ borderRadius: '8px' }}>
                    <img src="/demo/images/landing/mockup.svg" className="w-11/12" alt="mockup mobile" />
                </div>

                <div className="col-span-12 lg:col-span-6 my-auto flex flex-col lg:items-end text-center lg:text-right gap-4">
                    <div className="flex items-center justify-center bg-purple-200 self-center lg:self-end" style={{ width: '4.2rem', height: '4.2rem', borderRadius: '10px' }}>
                        <i className="pi pi-fw pi-mobile !text-4xl text-purple-700"></i>
                    </div>
                    <div className="leading-none text-surface-900 dark:text-surface-0 text-3xl font-normal">Congue Quisque Egestas</div>
                    <span className="text-surface-700 dark:text-surface-100 text-2xl leading-normal ml-0 md:ml-2" style={{ maxWidth: '650px' }}>
                        Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Sit amet mattis vulputate enim nulla aliquet.
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-4 my-20 pt-2 md:pt-20">
                <div className="col-span-12 lg:col-span-6 my-auto flex flex-col text-center lg:text-left lg:items-start gap-4">
                    <div className="flex items-center justify-center bg-yellow-200 self-center lg:self-start" style={{ width: '4.2rem', height: '4.2rem', borderRadius: '10px' }}>
                        <i className="pi pi-fw pi-desktop !text-3xl text-yellow-700"></i>
                    </div>
                    <div className="leading-none text-surface-900 dark:text-surface-0 text-3xl font-normal">Celerisque Eu Ultrices</div>
                    <span className="text-surface-700 dark:text-surface-100 text-2xl leading-normal mr-0 md:mr-2" style={{ maxWidth: '650px' }}>
                        Adipiscing commodo elit at imperdiet dui. Viverra nibh cras pulvinar mattis nunc sed blandit libero. Suspendisse in est ante in. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi.
                    </span>
                </div>

                <div className="flex justify-end order-1 sm:order-2 col-span-12 lg:col-span-6 bg-yellow-100 p-0" style={{ borderRadius: '8px' }}>
                    <img src="/demo/images/landing/mockup-desktop.svg" className="w-11/12" alt="mockup" />
                </div>
            </div>
        </div>
    );
};

export default HighlightsWidget;
