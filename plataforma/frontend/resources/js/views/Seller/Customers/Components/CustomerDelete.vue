<script setup>
import { watch, computed } from 'vue'
import { useForm, usePage } from '@inertiajs/vue3'
import ModalDeleteBase from '@/components/ModalDeleteBase.vue'

const show = defineModel('show', { type: Boolean, default: false })
const page = usePage()
const form = useForm({ id: null })

watch(() => page.props.customer, (user) => {
    if (user) form.id = user.id
})

const userInitials = computed(() => {
    const user = page.props.customer
    return user?.first_name && user?.last_name
        ? `${user.first_name.charAt(0)}${user.last_name.charAt(0)}`
        : ''
})

const submitDelete = () => {
    form.post('/vendedor/clientes/destroy/', {
        onSuccess: () => show.value = false
    })
}
</script>

<template>
    <ModalDeleteBase v-model:show="show" :userInitials="userInitials"
        :userName="page.props.customer?.first_name + ' ' + page.props.customer?.last_name" :userEmail="page.props.customer?.email"
        :loading="form.processing" confirmLabel="Eliminar Cliente" title="¿Eliminar cliente?"
        subtitle="Esta acción eliminará permanentemente al cliente." @confirm="submitDelete">
        <template #warning>
            <div
                class="flex items-start gap-3 p-3 text-sm bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-900/80 rounded-lg animate-fade-in-up">
                <i class="pi pi-shield text-red-500 mt-0.5 flex-shrink-0"></i>
                <p class="text-red-700 dark:text-red-300 font-medium text-left">
                    Advertencia: Esta acción no se puede deshacer.
                </p>
            </div>
        </template>
    </ModalDeleteBase>
</template>
