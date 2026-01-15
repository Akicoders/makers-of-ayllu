import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { useTheme } from '@/stores/themeContext';

interface RevenueStreamWidgetProps {
    title?: string;
}

const RevenueStreamWidget: React.FC<RevenueStreamWidgetProps> = ({ title = 'Ventas últimos 6 meses' }) => {
    const { darkMode } = useTheme();
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    // We use a simplified implementation without querying layoutConfig from context if not needed,
    // or we can use computed layoutConfig if we want to follow themes precisely.
    // For now, matching Vue logic using computed styles.

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const primaryColor = documentStyle.getPropertyValue('--primary-400') || '#60a5fa'; // Fallback to blue-400

        const data = {
            labels: ['Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep'],
            datasets: [
                {
                    type: 'bar',
                    label: 'Ventas',
                    backgroundColor: primaryColor,
                    data: [120, 150, 180, 90, 200, 170],
                    barThickness: 32,
                    borderRadius: 6,
                    borderSkipped: false
                }
            ]
        };
        
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        color: textColorSecondary
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: 'transparent',
                        borderColor: 'transparent'
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder || '#e2e8f0', // fallback
                        borderColor: 'transparent',
                        drawTicks: false
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);

    }, [darkMode]); // Re-run when dark mode changes to pick up new CSS variables

    return (
        <div className="card bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm">
            <div className="font-semibold text-xl mb-4 text-slate-900 dark:text-slate-0">{title}</div>
            <Chart type="bar" data={chartData} options={chartOptions} className="h-80" />
        </div>
    );
};

export default RevenueStreamWidget;
