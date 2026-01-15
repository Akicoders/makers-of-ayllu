<script setup>
defineProps({
    type: { type: String, default: "users" },
    value: { type: [String, Number], required: true },
    subtitle: { type: String, default: "" },
    footerMain: { type: String, default: "" },
    footerSub: { type: String, default: "" },
});
</script>

<template>
    <div class="card transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
        <div class="flex justify-between mb-4">
            <div>
                <span class="block text-muted-color font-medium mb-3">{{ subtitle }}</span>
                <div class="text-surface-900 dark:text-surface-0 font-bold text-2xl">
                    {{ value }}
                </div>
            </div>
            <div class="flex items-center justify-center rounded-full w-12 h-12 flex-shrink-0" :class="{
                'bg-blue-100 dark:bg-blue-500/20': type === 'users' || type === 'my_clients',
                'bg-green-100 dark:bg-green-500/20': type === 'sales' || type === 'my_sales',
                'bg-cyan-100 dark:bg-cyan-500/20': type === 'consults',
                'bg-purple-100 dark:bg-purple-500/20': type === 'clients',
                'bg-indigo-100 dark:bg-indigo-500/20': type === 'sellers',
                'bg-teal-100 dark:bg-teal-500/20': type === 'top_service' || type === 'my_top_service',
                'bg-amber-100 dark:bg-amber-500/20': type === 'top_client' || type === 'top_seller',
                'bg-violet-100 dark:bg-violet-500/20': type === 'credits' || type === 'total_credits' || type === 'credits_sold',
            }">
                <i class="!text-xl" :class="{
                    'pi pi-users text-blue-500': type === 'users' || type === 'my_clients',
                    'pi pi-dollar text-green-500': type === 'sales' || type === 'my_sales',
                    'pi pi-comment text-cyan-500': type === 'consults',
                    'pi pi-user text-purple-500': type === 'clients',
                    'pi pi-briefcase text-indigo-500': type === 'sellers',
                    'pi pi-star-fill text-teal-500': type === 'top_service' || type === 'my_top_service',
                    'pi pi-star-fill text-amber-500': type === 'top_client' || type === 'top_seller',
                    'pi pi-wallet text-violet-500': type === 'credits' || type === 'total_credits' || type === 'credits_sold',
                }"></i>
            </div>
        </div>
        <div>
            <span v-if="footerMain" class="text-primary font-medium">{{ footerMain }}</span>
            <span v-if="footerSub" class="text-muted-color"> {{ footerSub }}</span>
        </div>
    </div>
</template>