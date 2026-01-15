<script setup>
import { ref } from "vue";
import AppLayout from "@/layout/AppLayout.vue";
import { useForm } from "@inertiajs/vue3";

import AutoComplete from "primevue/autocomplete";
import Button from "primevue/button";
import Card from "primevue/card";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import Tag from 'primevue/tag';
import Avatar from 'primevue/avatar';
import Message from 'primevue/message';
import InputNumber from 'primevue/inputnumber';

const props = defineProps({
    users: Array,
    packages: Array,
    sales: Array,
});


const step = ref(1);

const selectedUser = ref(null);
const selectedPackage = ref(null);

const form = useForm({
    user_id: "",
    plan_package_id: "",
    amount_credits: 0,
});


const searchUserQuery = ref('');
const filteredUsers = ref();

const searchUser = (event) => {
    if (!event.query.trim().length) {
        filteredUsers.value = [...props.users];
    } else {
        filteredUsers.value = props.users.filter((user) => {
            return user.name.toLowerCase().startsWith(event.query.toLowerCase()) ||
                user.email.toLowerCase().startsWith(event.query.toLowerCase());
        });
    }
}


const onUserSelect = (event) => {
    selectedUser.value = event.value;
    form.user_id = selectedUser.value.id;
    step.value = 2;
};


const selectPackage = (pkg) => {
    selectedPackage.value = pkg;
    form.plan_package_id = pkg.id;
    form.amount_credits = pkg.amount_credits;

};

const resetAndGoToStep1 = () => {
    step.value = 1;
    selectedUser.value = null;
    selectedPackage.value = null;
    searchUserQuery.value = '';
    form.reset();
    form.clearErrors();
};

const submitSale = () => {
    form.post("/vendedor/ventas/store/", {
        onSuccess: () => {
            resetAndGoToStep1();
        },
        preserveState: true,
        preserveScroll: true,
    });
};


const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString("es-ES", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
};

</script>

<template>
    <AppLayout>
        <div class="grid grid-cols-1 gap-6">

            <div class="">
                <Card
                    class="shadow-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-800 transition-all duration-500">
                    <template #title>
                        <div class="flex justify-between items-center">
                            <h2 class="text-xl font-bold text-gray-800 dark:text-gray-100">Registrar Nueva Venta</h2>
                            <div class="text-sm font-medium text-gray-500">Paso {{ step }} de 2</div>
                        </div>
                    </template>

                    <template #content>
                        <div class="p-2">
                            <Transition name="fade" mode="out-in">

                                <div v-if="step === 1" class="space-y-4">
                                    <h3 class="font-semibold text-gray-700 dark:text-gray-300">Comencemos por encontrar
                                        al cliente</h3>

                                    <div class="flex flex-col">
                                        <label for="user-search"
                                            class="mb-2 font-medium text-gray-600 dark:text-gray-400">
                                            Buscar Cliente
                                        </label>
                                        <AutoComplete v-model="searchUserQuery" :suggestions="filteredUsers"
                                            @complete="searchUser" @item-select="onUserSelect"
                                            placeholder="Escribe para buscar..." input-id="user-search"
                                            input-class="w-full" forceSelection dropdown>
                                            <template #option="slotProps">
                                                <div class="flex items-center gap-3 p-2">
                                                    <Avatar :label="slotProps.option.name.charAt(0).toUpperCase()"
                                                        shape="circle" class="bg-blue-500 text-white" />
                                                    <div>
                                                        <div class="font-bold text-gray-800 dark:text-gray-200">
                                                            {{ slotProps.option.name }}
                                                        </div>
                                                        <div class="text-xs text-gray-500">
                                                            {{ slotProps.option.email }}
                                                        </div>
                                                        <div class="flex flex-wrap gap-2 mt-1 text-xs">
                                                            <Tag severity="info"
                                                                :value="`Créditos: ${slotProps.option.credits}`" />
                                                            <Tag v-if="slotProps.option.rank" severity="secondary"
                                                                :value="`Rango: ${slotProps.option.rank.name}`" />
                                                            <Tag v-if="slotProps.option.role" severity="secondary"
                                                                :value="`Rol: ${slotProps.option.role.name}`" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </template>

                                            <template #empty>
                                                <div class="p-3 text-gray-500 dark:text-gray-400">
                                                    No se encontraron clientes
                                                </div>
                                            </template>
                                        </AutoComplete>


                                        <Message v-if="form.errors.user_id" severity="error" :closable="false"
                                            class="mt-2">
                                            {{ form.errors.user_id }}
                                        </Message>
                                    </div>

                                </div>

                                <div v-else-if="step === 2" class="space-y-6">
                                    <div
                                        class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border dark:border-gray-600 flex justify-between items-center">
                                        <div>
                                            <p class="text-sm text-gray-500 dark:text-gray-400">Cliente Seleccionado:
                                            </p>
                                            <p class="font-bold text-lg text-gray-800 dark:text-gray-100">{{
                                                selectedUser.name }}</p>
                                            <p class="text-sm text-gray-600 dark:text-gray-300">{{ selectedUser.email }}
                                            </p>
                                        </div>
                                        <Button icon="pi pi-user-edit" label="Cambiar" text plain
                                            @click="resetAndGoToStep1" />
                                    </div>


                                    <div>
                                        <h3 class="font-semibold text-gray-700 dark:text-gray-300 mb-3">1. Elige un
                                            paquete como punto de partida</h3>
                                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div v-for="pkg in props.packages" :key="pkg.id" @click="selectPackage(pkg)"
                                                :class="[
                                                    'p-4 border rounded-lg cursor-pointer transition-all duration-200 transform hover:shadow-lg',
                                                    selectedPackage?.id === pkg.id ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/50 ring-2 ring-blue-500' : 'bg-white dark:bg-gray-700/50 border-gray-300 dark:border-gray-600'
                                                ]">
                                                <div class="flex justify-between items-center">
                                                    <h4 class="font-bold text-lg text-gray-800 dark:text-gray-200">{{
                                                        pkg.name }}</h4>
                                                    <i v-if="selectedPackage?.id === pkg.id"
                                                        class="pi pi-check-circle text-blue-500 text-xl"></i>
                                                </div>
                                                <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                                    Créditos: <span
                                                        class="font-semibold text-blue-600 dark:text-blue-400">{{
                                                            pkg.amount_credits
                                                        }}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <Message v-if="form.errors.plan_package_id" severity="error" :closable="false"
                                            class="mt-2">{{
                                                form.errors.plan_package_id }}</Message>
                                    </div>


                                    <Transition name="fade">
                                        <div v-if="selectedPackage"
                                            class="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                                            <h3 class="font-semibold text-gray-700 dark:text-gray-300">2. Personaliza
                                                los detalles de la venta</h3>
                                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

                                                <div class="flex flex-col">
                                                    <label for="credits"
                                                        class="mb-2 font-medium text-gray-600 dark:text-gray-400">Créditos
                                                        a
                                                        Otorgar</label>
                                                    <InputNumber v-model="form.amount_credits" inputId="credits"
                                                        mode="decimal" :min="0" />
                                                    <Message v-if="form.errors.amount_credits" severity="error"
                                                        :closable="false" class="mt-2 text-xs">
                                                        {{ form.errors.amount_credits }}</Message>
                                                </div>

                                            </div>
                                        </div>
                                    </Transition>


                                    <div class="border-t dark:border-gray-600 pt-4 flex justify-end">
                                        <Button label="Finalizar y Guardar Venta" icon="pi pi-check"
                                            class="w-full md:w-auto" @click="submitSale" :loading="form.processing"
                                            :disabled="!selectedPackage" />
                                    </div>
                                </div>
                            </Transition>
                        </div>
                    </template>
                </Card>
            </div>


            <div class="">
                <Card class="shadow-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-800">
                    <template #title>
                        <h2 class="text-xl font-bold text-gray-800 dark:text-gray-100">Actividad Reciente (Última 10
                            ventas)</h2>
                    </template>
                    <template #content>
                        <DataTable :value="props.sales" responsiveLayout="scroll" class="text-sm" paginator :rows="5">
                            <Column header="Cliente">
                                <template #body="slotProps">
                                    <div class="flex items-center gap-3">
                                        <Avatar :label="slotProps.data.cliente.charAt(0).toUpperCase()"
                                            shape="circle" />
                                        <span class="font-medium">{{ slotProps.data.cliente }}</span>
                                    </div>
                                </template>
                            </Column>
                            <Column field="paquete" header="Paquete"></Column>
                            <Column field="credits" header="Créditos"></Column>
                            <Column header="Rango">
                                <template #body="slotProps">
                                    <Tag :value="slotProps.data.rank" />
                                </template>
                            </Column>
                            <Column header="Fecha">
                                <template #body="slotProps">
                                    {{ formatDate(slotProps.data.fecha) }}
                                </template>
                            </Column>
                        </DataTable>
                    </template>
                </Card>
            </div>
        </div>
    </AppLayout>
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
</style>
