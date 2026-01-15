<script setup>
import { watch, computed } from 'vue'
import { useForm, usePage } from '@inertiajs/vue3'
import ModalDeleteBase from '@/components/ModalDeleteBase.vue'

const show = defineModel('show', { type: Boolean, default: false })
const page = usePage()
const form = useForm({ id: null })

watch(() => page.props.role, (role) => {
    if (role) form.id = role.id
})

const roleInitial = computed(() => {
    return page.props.role?.name?.charAt(0) ?? ''
})

const submitDelete = () => {
    form.post('/administrador/roles/destroy/', {
        onSuccess: () => show.value = false
    })
}
</script>

<template>
    <ModalDeleteBase v-model:show="show" :userInitials="roleInitial" :userName="page.props.role?.name" :userEmail="''"
        :loading="form.processing" confirmLabel="Eliminar Rol" title="¿Eliminar rol?"
        subtitle="Esta acción eliminará permanentemente el rol." @confirm="submitDelete">

        <template #warning>
            <div
                class="flex items-start gap-3 p-3 text-sm bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-900/80 rounded-lg">
                <i class="pi pi-shield text-red-500 mt-0.5 flex-shrink-0"></i>
                <p class="text-red-700 dark:text-red-300 font-medium text-left">
                    Advertencia: Esta acción no se puede deshacer.
                </p>
            </div>
        </template>
    </ModalDeleteBase>
</template>
