<script setup>
import Sidebar from "primevue/sidebar"
import Button from "primevue/button"

const show = defineModel("show", { type: Boolean, default: false })

defineProps({
    title: { type: String, required: true },
    subtitle: { type: String, default: "" },
    icon: { type: String, default: "pi pi-pencil" },
    width: { type: String, default: "36rem" },
    confirmLabel: { type: String, default: "Guardar" },
    cancelLabel: { type: String, default: "Cancelar" },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
})

const emit = defineEmits(["confirm", "cancel"])
</script>

<template>
    <Sidebar v-model:visible="show" position="right" :showCloseIcon="false" :style="{ width }" :modal="true"
        class="shadow-2xl" :pt="{ mask: 'transition-opacity duration-300 ease-in-out' }" :transitionOptions="{
            enterFromClass: 'translate-x-full opacity-90',
            enterActiveClass: 'transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)]',
            leaveToClass: 'translate-x-full opacity-90',
            leaveActiveClass: 'transition-all duration-300 ease-in'
        }">
        <div class="flex flex-col h-full">
            <header class="p-6 border-b-2">
                <div class="flex items-center gap-4 transition-all duration-500"
                    :class="show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'">
                    <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 shadow-md transition-all duration-500 delay-100"
                        :class="show ? 'scale-100 opacity-100' : 'scale-75 opacity-0'">
                        <i :class="[icon, 'text-2xl text-primary-600 dark:text-primary-300']"></i>
                    </div>
                    <div>
                        <h2 class="text-xl font-bold text-gray-800 dark:text-gray-100 transition-all duration-500 delay-200"
                            :class="show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'">
                            {{ title }}
                        </h2>
                        <p v-if="subtitle"
                            class="text-sm text-gray-500 dark:text-gray-400 transition-all duration-500 delay-300"
                            :class="show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'">
                            {{ subtitle }}
                        </p>
                    </div>
                </div>
            </header>

            <slot :is-visible="show" />

            <footer
                class="p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-t-2 border-gray-200 dark:border-gray-700 flex justify-end gap-3 sticky z-50 -bottom-8 transition-opacity duration-500 delay-500"
                :class="show ? 'opacity-100' : 'opacity-0'">
                <Button :label="cancelLabel" severity="secondary" text @click="$emit('cancel')" />
                <Button :label="confirmLabel" icon="pi pi-check-circle" :loading="loading"
                    :disabled="loading || disabled" @click="$emit('confirm')" />
            </footer>
        </div>
    </Sidebar>
</template>

<style>
.p-sidebar-content {
    padding: 0 !important;
    height: 100%;
}


.fade-slide-enter-active {
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.fade-slide-enter-from {
    opacity: 0;
    transform: translateY(20px);
}


.input-container,
.generic-container {
    position: relative;
    padding-bottom: 1.5rem;
}

.input-container::after {
    content: '';
    position: absolute;
    bottom: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 1px;
    background-color: #cbd5e1;

    transition: background-color 0.2s ease;
}

.input-container::before {
    content: '';
    position: absolute;
    bottom: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: #3b82f6;

    transition: width 0.3s cubic-bezier(0.25, 1, 0.5, 1);
    z-index: 1;
}

.input-container:focus-within::before {
    width: 100%;
}

.p-error {
    position: absolute;
    left: 0;
    bottom: 0;
    color: #ef4444;

}

.input-container.has-error {
    animation: shake 0.5s ease-in-out;
}

@keyframes shake {

    0%,
    100% {
        transform: translateX(0);
    }

    20%,
    60% {
        transform: translateX(-4px);
    }

    40%,
    80% {
        transform: translateX(4px);
    }
}
</style>
