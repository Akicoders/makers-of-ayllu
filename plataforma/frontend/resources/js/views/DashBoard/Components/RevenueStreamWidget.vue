<script setup>
import { onMounted, ref, watch } from 'vue';
import Chart from 'primevue/chart';
import { useThemeStore } from '@/stores/themeStore';

const props = defineProps({
    title: {
        type: String,
        default: 'Ventas últimos 6 meses'
    }
});

const themeStore = useThemeStore();
const chartData = ref(null);
const chartOptions = ref(null);

function setChartData() {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
        labels: ['Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep'],
        datasets: [
            {
                type: 'bar',
                label: 'Ventas',
                backgroundColor: documentStyle.getPropertyValue('--p-primary-400'),
                data: [120, 150, 180, 90, 200, 170],
                barThickness: 32,
                borderRadius: 6,
                borderSkipped: false
            }
        ]
    };
}

function setChartOptions() {
    const documentStyle = getComputedStyle(document.documentElement);
    const borderColor = documentStyle.getPropertyValue('--surface-border');
    const textMutedColor = documentStyle.getPropertyValue('--text-color-secondary');

    return {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
            legend: {
                labels: {
                    color: textMutedColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textMutedColor
                },
                grid: {
                    color: 'transparent',
                    borderColor: 'transparent'
                }
            },
            y: {
                ticks: {
                    color: textMutedColor
                },
                grid: {
                    color: borderColor,
                    borderColor: 'transparent',
                    drawTicks: false
                }
            }
        }
    };
}

watch(
    () => themeStore.darkMode,
    () => {
        chartData.value = setChartData();
        chartOptions.value = setChartOptions();
    }
);

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});
</script>

<template>
    <div class="card">
        <div class="font-semibold text-xl mb-4 text-surface-900 dark:text-surface-0">{{ title }}</div>
        <Chart type="bar" :data="chartData" :options="chartOptions" class="h-80" />
    </div>
</template>