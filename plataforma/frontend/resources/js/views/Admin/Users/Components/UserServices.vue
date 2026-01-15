<script setup>
import { ref, watch } from "vue";
import { useForm, usePage } from "@inertiajs/vue3";
import BaseDrawer from "@/components/BaseDrawer.vue";
import Card from "primevue/card";
import InputNumber from "primevue/inputnumber";
import ProgressSpinner from "primevue/progressspinner";

const show = defineModel("show", { type: Boolean, default: false });

const page = usePage();
const form = useForm({
    id: null,
    first_name: "",
    last_name: "",
    email: "",
    current_role: null,
    current_rank: null,
    services: [],
});

watch(show, (val) => {
    if (!val) {
        setTimeout(() => {
            form.reset();
            form.clearErrors();
        }, 300);
    }
});

const onSave = () => {
    const payload = {
        user_id: form.id,
        services: form.services.map((s) => ({
            service_id: s.service_id,
            custom_cost: s.custom_cost || 0,
            is_active: !!s.is_active,
        })),
    };

    form.transform(() => ({ ...payload }))
        .post("/administrador/usuarios/services/update/", {
            onStart: () => { },
            onSuccess: () => {
                show.value = false;
                form.clearErrors();
            },
            onError: () => { },
        });
};


const setCustomCost = (index, value) => {
    form.services[index].custom_cost = Number(value || 0);
    const s = form.services[index];
    s.final_cost = s.custom_cost && s.custom_cost > 0 ? s.custom_cost : s.base_cost;
};


watch(() => page.props.user, (user) => {
    if (user) {
        form.id = user.id;
        form.first_name = user.first_name;
        form.last_name = user.last_name;
        form.email = user.email;
        form.current_role = user.current_role;
        form.current_rank = user.current_rank;
        form.services = user.services.map((s) => ({
            ...s,
            custom_cost: s.custom_cost ?? s.base_cost,
            final_cost: s.custom_cost && s.custom_cost > 0 ? s.custom_cost : s.base_cost,
        }));

        form.clearErrors();
    }
});

</script>

<template>
    <BaseDrawer v-model:show="show" title="Personalizar Servicios de Usuario"
        subtitle="Actualiza los creditos de los servicios" icon="pi pi-user-edit" confirmLabel="Guardar Cambios"
        :loading="form.processing" @confirm="onSave" @cancel="show = false">
        <main class="py-4 sm:py-6 ">
            <div v-if="form.processing"
                class="absolute inset-0 bg-slate-100/50 dark:bg-slate-900/50 z-10 flex items-center justify-center backdrop-blur-sm">
                <ProgressSpinner strokeWidth="4" animationDuration=".5s" style="width: 50px; height: 50px" />
            </div>

            <div class="mb-4">
                <h3 class="text-lg font-semibold">
                    Usuario: {{ form.first_name }} {{ form.last_name }}
                </h3>
            </div>
            <transition enter-active-class="transition ease-out duration-500" enter-from-class="opacity-0 translate-y-4"
                enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-300"
                leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-4" appear>
                <form v-if="show" @submit.prevent="onSave" class="space-y-6">
                    <Card v-for="(s, idx) in form.services" :key="s.service_id"
                        class="shadow-xl rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
                        <template #content>
                            <div class="flex items-center justify-between gap-4">
                                <div class="flex-1">
                                    <div class="font-bold">{{ s.name }}</div>
                                </div>

                                <div class="w-56 flex flex-col items-end gap-2">
                                    <div class="flex items-center gap-2">
                                        <InputNumber v-model="form.services[idx].custom_cost" :showButtons="true"
                                            :min="0" :useGrouping="false"
                                            @value-change="(e) => setCustomCost(idx, e)" />
                                    </div>
                                </div>
                            </div>
                        </template>
                    </Card>
                </form>
            </transition>
            <div v-if="form.errors.services" class="mt-3 text-red-600">
                {{ form.errors.services }}
            </div>
        </main>
    </BaseDrawer>
</template>

<style scoped></style>
