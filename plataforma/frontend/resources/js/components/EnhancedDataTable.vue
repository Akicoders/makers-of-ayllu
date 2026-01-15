<script setup>
import { useForm, usePage } from '@inertiajs/vue3'
import { debounce } from 'lodash-es'
import { computed, ref, watch } from 'vue'

import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Paginator from 'primevue/paginator'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import ProgressSpinner from 'primevue/progressspinner'
import Button from 'primevue/button'
import Skeleton from 'primevue/skeleton'
import Tooltip from 'primevue/tooltip'

const props = defineProps({
    headers: { type: Array, required: true },
    data: { type: Object, required: true },
    placeholderSearch: { type: String, default: 'Buscar...' },
    defaultFilters: { type: Object, default: () => ({}) },
    routeSearch: { type: String, required: true },
    sortableColumns: { type: Array, default: () => [] }
})

const page = usePage()
const showAdvancedFilters = ref(false)
const perPageOptions = [5, 10, 20, 50].map(val => ({ label: `${val}`, value: val }))


const filters = useForm({
    search: props.data?.filters?.search ?? '',
    page: props.data?.current_page ?? 1,
    per_page: props.data?.per_page ?? 10,
    sort_by: props.data?.filters?.sort_by ?? null,
    sort_direction: props.data?.filters?.sort_direction ?? 'asc',
    ...props.defaultFilters,
    ...props.data?.filters,
})

const filterSubmit = (isClean = false) => {
    const cleanFilters = Object.entries(filters.data()).reduce((acc, [k, v]) => {
        if (v !== null && v !== '' && !(Array.isArray(v) && v.length === 0)) acc[k] = v
        return acc
    }, {})

    filters.transform(() => cleanFilters)
        .get(props.routeSearch, {
            preserveState: true,
            preserveScroll: true,
            replace: true,
        })
}

const debouncedSearch = debounce(() => {
    filters.page = 1
    filterSubmit()
}, 400)

watch(() => filters.search, debouncedSearch)
watch(() => filters.per_page, () => {
    filters.page = 1
    filterSubmit()
})

const onPageChange = (event) => {
    filters.page = event.page + 1
    filterSubmit()
}

const onSort = (event) => {
    filters.sort_by = event.sortField
    filters.sort_direction = event.sortOrder === 1 ? 'asc' : 'desc'
    filterSubmit()
}

const clearFilters = () => {
    filters.reset({
        search: '',
        page: 1,
        per_page: 10,
        sort_by: null,
        sort_direction: 'asc',
        ...Object.fromEntries(Object.keys(props.defaultFilters).map(k => [k, null])),
    })
    filterSubmit(true)
}

const items = computed(() => props.data?.data ?? [])
const firstRecord = computed(() => (props.data.current_page - 1) * props.data.per_page)
</script>

<template>
    <div
        class="card dark:backdrop-blur-sm rounded-2xl shadow-lg shadow-slate-200/50 dark:shadow-black/20 p-4 sm:p-6 space-y-6">

        <div class="flex flex-wrap items-center justify-between gap-4">
            <div class="relative w-full sm:w-auto sm:flex-grow max-w-md">
                <i
                    class="pi pi-search absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 dark:text-slate-500"></i>
                <InputText v-model="filters.search" :placeholder="placeholderSearch"
                    class="w-full !pl-10 !py-2.5 !rounded-full border-transparent focus:border-sky-500 focus:ring-2 focus:ring-sky-500/50 transition-all duration-300" />
                <button v-if="filters.search" @click="filters.search = ''"
                    class="absolute inset-y-0 right-0 flex items-center pr-3 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition">
                    <i class="pi pi-times text-slate-500 text-sm"></i>
                </button>
            </div>

            <div class="flex items-center gap-2 w-full sm:w-auto justify-end">
                <Button v-tooltip.bottom="'Filtros avanzados'" @click="showAdvancedFilters = !showAdvancedFilters"
                    icon="pi pi-sliders-h" text rounded severity="secondary"
                    class="transition-colors !bg-slate-100 hover:!bg-slate-200 dark:!bg-slate-800 dark:hover:!bg-slate-700"
                    :class="{ '!bg-sky-100 dark:!bg-sky-900/50 text-sky-500': showAdvancedFilters }" />

                <Button v-tooltip.bottom="'Limpiar filtros'" icon="pi pi-filter-slash" text rounded severity="secondary"
                    @click="clearFilters"
                    class="transition-all duration-300 hover:rotate-12 hover:scale-110 !bg-slate-100 hover:!bg-slate-200 dark:!bg-slate-800 dark:hover:!bg-slate-700" />

                <div class="flex items-center gap-2">
                    <label
                        class="text-sm font-medium text-slate-600 dark:text-slate-400 hidden sm:block">Mostrar:</label>
                    <Dropdown v-model="filters.per_page" :options="perPageOptions" optionLabel="label"
                        optionValue="value" class="w-24 text-sm" :pt="{
                            root: 'rounded-xl border-slate-200 dark:border-slate-700',
                            input: '!py-2 !text-sm',
                            trigger: '!w-10'
                        }" />
                </div>
            </div>
        </div>

        <Transition name="slide-fade">
            <div v-if="showAdvancedFilters"
                class="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                <slot name="filters" :filters="filters" :submit="filterSubmit" />
            </div>
        </Transition>
        <div class="relative overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 min-h-[300px]">
            <Transition name="fade" mode="out-in">
                <div v-if="filters.processing"
                    class="absolute inset-0 bg-white/70 dark:bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-20">
                    <div class="text-center">
                        <ProgressSpinner style="width:50px; height:50px" strokeWidth="3" class="text-sky-500" />
                        <p class="mt-3 text-slate-600 dark:text-slate-300 font-semibold animate-pulse">Cargando...</p>
                    </div>
                </div>
            </Transition>

            <DataTable :value="items" :sort-field="filters.sort_by"
                :sort-order="filters.sort_direction === 'asc' ? 1 : -1" @sort="onSort" :pt="{
                    table: 'w-full min-w-[700px]',
                    thead: 'border-b border-slate-200 dark:border-slate-700',
                    headerCell: '!px-4 !py-3 !text-left !text-xs !font-semibold !uppercase tracking-wider text-slate-500 dark:text-slate-400',
                    bodyRow: 'border-b border-slate-100 dark:border-slate-800 transition-colors duration-200 hover:!bg-sky-50 dark:hover:!bg-sky-900/20',
                    bodyCell: '!p-4 !align-middle text-sm text-slate-700 dark:text-slate-200',
                }">

                <Column v-for="col in props.headers" :key="col.key" :field="col.key" :header="col.title"
                    :sortable="sortableColumns.includes(col.key)">
                    <template #body="{ data }">
                        <slot :name="`body-${col.key}`" :item="data">
                            <span>{{ data[col.key] }}</span>
                        </slot>
                    </template>
                </Column>

                <template #empty>
                    <div class="text-center py-16 text-slate-500 dark:text-slate-400">
                        <i class="pi pi-database text-6xl text-slate-300 dark:text-slate-600"></i>
                        <h3 class="mt-4 font-bold text-lg">No hay nada por aquí</h3>
                        <p class="text-sm">Prueba con otros filtros o ajusta la búsqueda.</p>
                    </div>
                </template>

                <template #loading>
                    <div class="p-4 space-y-4">
                        <div v-for="i in filters.per_page" :key="i" class="flex items-center space-x-4">
                            <Skeleton shape="circle" size="2.5rem" />
                            <div class="flex-1 space-y-2">
                                <Skeleton width="40%" height="0.75rem" />
                                <Skeleton width="70%" height="0.75rem" />
                            </div>
                            <Skeleton width="15%" height="1.5rem" />
                        </div>
                    </div>
                </template>
            </DataTable>
        </div>


        <div v-if="data?.total > 0" class="flex flex-wrap items-center justify-between gap-4 pt-2">
            <span class="text-sm text-slate-600 dark:text-slate-400 font-medium">
                Mostrando {{ props.data.from }} a {{ props.data.to }} de {{ props.data.total }} registros
            </span>
            <Paginator :rows="props.data.per_page" :totalRecords="props.data.total" :first="firstRecord"
                @page="onPageChange" template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink" :pt="{
                    root: 'flex items-center gap-1',
                    pageButton: ({ context }) => ({
                        class: [
                            'w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200',
                            {
                                'bg-sky-500 text-white shadow-md hover:bg-sky-600': context.active,
                                ' text-slate-700 dark:text-slate-300': !context.active,
                            },
                        ],
                    }),
                    firstPageButton: 'w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 dark:text-slate-300 transition-colors',
                    prevPageButton: 'w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 dark:text-slate-300 transition-colors',
                    nextPageButton: 'w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 dark:text-slate-300 transition-colors',
                    lastPageButton: 'w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 dark:text-slate-300 transition-colors',
                }" />
        </div>
    </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
}
</style>
