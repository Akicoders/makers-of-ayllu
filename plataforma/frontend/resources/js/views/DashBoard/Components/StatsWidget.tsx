import React from 'react';

interface StatsWidgetProps {
    type?: string;
    value: string | number;
    subtitle?: string;
    footerMain?: string;
    footerSub?: string;
}

const StatsWidget: React.FC<StatsWidgetProps> = ({ type = 'users', value, subtitle = '', footerMain = '', footerSub = '' }) => {
    const getBgColor = () => {
        if (type === 'users' || type === 'my_clients') return 'bg-blue-100 dark:bg-blue-500/20';
        if (type === 'sales' || type === 'my_sales') return 'bg-green-100 dark:bg-green-500/20';
        if (type === 'consults') return 'bg-cyan-100 dark:bg-cyan-500/20';
        if (type === 'clients') return 'bg-purple-100 dark:bg-purple-500/20';
        if (type === 'sellers') return 'bg-indigo-100 dark:bg-indigo-500/20';
        if (type === 'top_service' || type === 'my_top_service') return 'bg-teal-100 dark:bg-teal-500/20';
        if (type === 'top_client' || type === 'top_seller') return 'bg-amber-100 dark:bg-amber-500/20';
        if (type === 'credits' || type === 'total_credits' || type === 'credits_sold') return 'bg-violet-100 dark:bg-violet-500/20';
        return '';
    };

    const getIconClass = () => {
        if (type === 'users' || type === 'my_clients') return 'pi pi-users text-blue-500';
        if (type === 'sales' || type === 'my_sales') return 'pi pi-dollar text-green-500';
        if (type === 'consults') return 'pi pi-comment text-cyan-500';
        if (type === 'clients') return 'pi pi-user text-purple-500';
        if (type === 'sellers') return 'pi pi-briefcase text-indigo-500';
        if (type === 'top_service' || type === 'my_top_service') return 'pi pi-star-fill text-teal-500';
        if (type === 'top_client' || type === 'top_seller') return 'pi pi-star-fill text-amber-500';
        if (type === 'credits' || type === 'total_credits' || type === 'credits_sold') return 'pi pi-wallet text-violet-500';
        return '';
    };

    return (
        <div className="card transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 bg-white dark:bg-surface-card border border-gray-200 dark:border-surface-border rounded-xl p-4">
            <div className="flex justify-between mb-4">
                <div>
                    <span className="block text-slate-500 dark:text-slate-400 font-medium mb-3">{subtitle}</span>
                    <div className="text-slate-900 dark:text-slate-100 font-bold text-2xl">{value}</div>
                </div>
                <div className={`flex items-center justify-center rounded-full w-12 h-12 flex-shrink-0 ${getBgColor()}`}>
                    <i className={`!text-xl ${getIconClass()}`}></i>
                </div>
            </div>
            <div>
                {footerMain && <span className="text-blue-500 font-medium">{footerMain}</span>}
                {footerSub && <span className="text-slate-500 dark:text-slate-400"> {footerSub}</span>}
            </div>
        </div>
    );
};

export default StatsWidget;
