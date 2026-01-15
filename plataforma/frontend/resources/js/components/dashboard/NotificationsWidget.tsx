import React, { useRef } from 'react';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import { MenuItem } from 'primereact/menuitem';

const NotificationsWidget: React.FC = () => {
    const menuRef = useRef<Menu>(null);

    const items: MenuItem[] = [
        { label: 'Add New', icon: 'pi pi-fw pi-plus' },
        { label: 'Remove', icon: 'pi pi-fw pi-trash' }
    ];

    return (
        <div className="card">
            <div className="flex items-center justify-between mb-6">
                <div className="font-semibold text-xl">Notifications</div>
                <div>
                    <Button icon="pi pi-ellipsis-v" className="p-button-text p-button-plain p-button-rounded" onClick={(event) => menuRef.current?.toggle(event)}></Button>
                    <Menu ref={menuRef} popup model={items} className="!min-w-40"></Menu>
                </div>
            </div>

            <span className="block text-muted-color font-medium mb-4">TODAY</span>
            <ul className="p-0 mx-0 mt-0 mb-6 list-none">
                <li className="flex items-center py-2 border-b border-surface">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-full mr-4 shrink-0">
                        <i className="pi pi-dollar !text-xl text-blue-500"></i>
                    </div>
                    <span className="text-surface-900 dark:text-surface-0 leading-normal">
                        Richard Jones
                        <span className="text-surface-700 dark:text-surface-100"> has purchased a blue t-shirt for <span className="text-primary font-bold">$79.00</span></span>
                    </span>
                </li>
                <li className="flex items-center py-2">
                    <div className="w-12 h-12 flex items-center justify-center bg-orange-100 dark:bg-orange-400/10 rounded-full mr-4 shrink-0">
                        <i className="pi pi-download !text-xl text-orange-500"></i>
                    </div>
                    <span className="text-surface-700 dark:text-surface-100 leading-normal">Your request for withdrawal of <span className="text-primary font-bold">$2500.00</span> has been initiated.</span>
                </li>
            </ul>

            <span className="block text-muted-color font-medium mb-4">YESTERDAY</span>
            <ul className="p-0 m-0 list-none mb-6">
                <li className="flex items-center py-2 border-b border-surface">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-full mr-4 shrink-0">
                        <i className="pi pi-dollar !text-xl text-blue-500"></i>
                    </div>
                    <span className="text-surface-900 dark:text-surface-0 leading-normal">
                        Keyser Wick
                        <span className="text-surface-700 dark:text-surface-100"> has purchased a black jacket for <span className="text-primary font-bold">$59.00</span></span>
                    </span>
                </li>
                <li className="flex items-center py-2 border-b border-surface">
                    <div className="w-12 h-12 flex items-center justify-center bg-pink-100 dark:bg-pink-400/10 rounded-full mr-4 shrink-0">
                        <i className="pi pi-question !text-xl text-pink-500"></i>
                    </div>
                    <span className="text-surface-900 dark:text-surface-0 leading-normal">
                        Jane Davis
                        <span className="text-surface-700 dark:text-surface-100"> has posted a new questions about your product.</span>
                    </span>
                </li>
            </ul>
            <span className="block text-muted-color font-medium mb-4">LAST WEEK</span>
            <ul className="p-0 m-0 list-none">
                <li className="flex items-center py-2 border-b border-surface">
                    <div className="w-12 h-12 flex items-center justify-center bg-green-100 dark:bg-green-400/10 rounded-full mr-4 shrink-0">
                        <i className="pi pi-arrow-up !text-xl text-green-500"></i>
                    </div>
                    <span className="text-surface-900 dark:text-surface-0 leading-normal">Your revenue has increased by <span className="text-primary font-bold">%25</span>.</span>
                </li>
                <li className="flex items-center py-2 border-b border-surface">
                    <div className="w-12 h-12 flex items-center justify-center bg-purple-100 dark:bg-purple-400/10 rounded-full mr-4 shrink-0">
                        <i className="pi pi-heart !text-xl text-purple-500"></i>
                    </div>
                    <span className="text-surface-900 dark:text-surface-0 leading-normal"><span className="text-primary font-bold">12</span> users have added your products to their wishlist.</span>
                </li>
            </ul>
        </div>
    );
};

export default NotificationsWidget;
