import React from 'react';

const StatsWidget: React.FC = () => {
    return (
        <>
            <div className="col-span-12 lg:col-span-6 xl:col-span-3">
                <div className="card mb-0">
                    <div className="flex justify-between mb-4">
                        <div>
                            <span className="block text-muted-color font-medium mb-4">Orders</span>
                            <div className="text-surface-900 dark:text-surface-0 font-medium text-xl">152</div>
                        </div>
                        <div className="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-shopping-cart text-blue-500 !text-xl"></i>
                        </div>
                    </div>
                    <span className="text-primary font-medium">24 new </span>
                    <span className="text-muted-color">since last visit</span>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-6 xl:col-span-3">
                <div className="card mb-0">
                    <div className="flex justify-between mb-4">
                        <div>
                            <span className="block text-muted-color font-medium mb-4">Revenue</span>
                            <div className="text-surface-900 dark:text-surface-0 font-medium text-xl">$2.100</div>
                        </div>
                        <div className="flex items-center justify-center bg-orange-100 dark:bg-orange-400/10 rounded-border" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-dollar text-orange-500 !text-xl"></i>
                        </div>
                    </div>
                    <span className="text-primary font-medium">%52+ </span>
                    <span className="text-muted-color">since last week</span>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-6 xl:col-span-3">
                <div className="card mb-0">
                    <div className="flex justify-between mb-4">
                        <div>
                            <span className="block text-muted-color font-medium mb-4">Customers</span>
                            <div className="text-surface-900 dark:text-surface-0 font-medium text-xl">28441</div>
                        </div>
                        <div className="flex items-center justify-center bg-cyan-100 dark:bg-cyan-400/10 rounded-border" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-users text-cyan-500 !text-xl"></i>
                        </div>
                    </div>
                    <span className="text-primary font-medium">520 </span>
                    <span className="text-muted-color">newly registered</span>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-6 xl:col-span-3">
                <div className="card mb-0">
                    <div className="flex justify-between mb-4">
                        <div>
                            <span className="block text-muted-color font-medium mb-4">Comments</span>
                            <div className="text-surface-900 dark:text-surface-0 font-medium text-xl">152 Unread</div>
                        </div>
                        <div className="flex items-center justify-center bg-purple-100 dark:bg-purple-400/10 rounded-border" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-comment text-purple-500 !text-xl"></i>
                        </div>
                    </div>
                    <span className="text-primary font-medium">85 </span>
                    <span className="text-muted-color">responded</span>
                </div>
            </div>
        </>
    );
};

export default StatsWidget;
