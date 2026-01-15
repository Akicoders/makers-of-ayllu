<script setup>
import { useForm } from "@inertiajs/vue3"
import { ref, computed, onMounted, onUnmounted } from "vue"

import InputOtp from "primevue/inputotp"
import Button from "primevue/button"
import ProgressSpinner from "primevue/progressspinner"
import Message from "primevue/message"

import FloatingConfigurator from "@/components/FloatingConfigurator.vue"

const props = defineProps({
  email: String,
  errors: Object,
  success: String,
})

const form = useForm({ code: "" })
const resendForm = useForm({})
const resendCooldown = ref(0)
const canResend = computed(() => resendCooldown.value === 0)
let countdownInterval = null

const startResendCooldown = () => {
  resendCooldown.value = 60
  countdownInterval = setInterval(() => {
    resendCooldown.value--
    if (resendCooldown.value <= 0) clearInterval(countdownInterval)
  }, 1000)
}

const submitForm = () => {
  if (form.code.trim().length !== 6) return
  form.post("/verify-code/", {
    onSuccess: () => {
      form.clearErrors()
    },
  })
}

const resendCode = () => {
  if (!canResend.value) return
  resendForm.post("/resend-code/", { onSuccess: startResendCooldown })
}

const maskedEmail = computed(() => {
  if (!props.email) return ""
  const [local, domain] = props.email.split("@")
  if (local.length <= 2) return `${local[0]}*@${domain}`
  const first = local.substring(0, 2)
  const last = local.substring(local.length - 1)
  return `${first}${"*".repeat(local.length - 3)}${last}@${domain}`
})

onMounted(() => startResendCooldown())
onUnmounted(() => countdownInterval && clearInterval(countdownInterval))
</script>

<template>
  <FloatingConfigurator />

  <div class="min-h-screen flex items-center justify-center p-4 transition-colors duration-300">

    <div v-if="form.processing || resendForm.processing"
      class="fixed inset-0 bg-slate-100/50 dark:bg-slate-900/50 z-50 flex items-center justify-center backdrop-blur-sm">
      <ProgressSpinner strokeWidth="4" animationDuration=".5s" style="width: 50px; height: 50px" />
    </div>

    <div class="flex flex-col items-center justify-center w-full max-w-lg">
      <div
        class="rounded-3xl p-1 shadow-2xl backdrop-blur-xl border border-white/20 dark:border-white/10 transition-all duration-300 hover:shadow-primary-400/40 bg-gradient-to-b from-primary-500/20 via-surface-0 dark:via-surface-900 to-transparent">
        <div class="w-full bg-surface-0/90 dark:bg-surface-900/90 py-10 px-6 sm:px-10 rounded-2xl">


          <div class="text-center mb-8">
            <i class="pi pi-envelope text-4xl text-primary mb-4 animate-bounce"></i>
            <h1 class="text-3xl font-extrabold tracking-tight text-surface-900 dark:text-surface-0 mb-2">
              Verifica tu <span class="text-primary">Email</span>
            </h1>
            <p class="text-surface-500 dark:text-surface-400 mb-4">
              Hemos enviado un código de verificación a:
            </p>
            <p
              class="font-semibold text-surface-900 dark:text-surface-100 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg inline-block">
              {{ maskedEmail }}
            </p>
          </div>


          <Message v-if="success" severity="success" class="mb-6">{{ success }}</Message>


          <form @submit.prevent="submitForm" class="space-y-6">

            <div class="flex flex-col items-center">
              <label for="code" class="block text-slate-600 dark:text-slate-300 font-semibold mb-4">
                Ingresa el código de 6 carácteres
              </label>
              <InputOtp id="code" v-model="form.code" :length="6" :disabled="form.processing"
                class="gap-3 [&>input]:!rounded-xl [&>input]:!w-12 [&>input]:!h-14 [&>input]:!text-xl [&>input]:!text-center [&>input]:focus:ring-2 [&>input]:focus:ring-primary"
                :class="{
                  'p-invalid animate-shake': form.errors.code || form.errors.__all__,
                  'border-green-400': form.code.length === 6 && !form.errors.code
                }" />

              <small v-if="form.errors.code" class="p-error mt-2">{{ form.errors.code[0] }}</small>
              <small v-if="form.errors.__all__" class="p-error mt-2">{{ form.errors.__all__ }}</small>
            </div>


            <Button type="submit" :disabled="form.code.length !== 6 || form.processing" :loading="form.processing"
              class="w-full transition-transform hover:scale-[1.02]" size="large">
              <template v-if="!form.processing">
                <i class="pi pi-check mr-2"></i>
                Verificar Código
              </template>
            </Button>
          </form>


          <div class="mt-6 text-center">
            <p class="text-sm text-slate-600 dark:text-slate-400 mb-2">¿No recibiste el código?</p>
            <Button type="button" @click="resendCode" :disabled="!canResend || resendForm.processing"
              :loading="resendForm.processing" severity="secondary" text class="hover:text-primary transition-colors">
              <template v-if="canResend && !resendForm.processing">
                <i class="pi pi-refresh mr-2"></i> Reenviar Código
              </template>
              <template v-else-if="!resendForm.processing">
                <i class="pi pi-clock mr-2"></i> Reenviar en {{ resendCooldown }}s
              </template>
            </Button>


            <div v-if="!canResend" class="w-full bg-slate-200 dark:bg-slate-700 h-1 rounded mt-3">
              <div class="bg-primary h-1 rounded transition-all duration-1000"
                :style="{ width: (100 - (resendCooldown / 60) * 100) + '%' }"></div>
            </div>
          </div>


          <div class="text-center pt-6 border-t border-slate-200 dark:border-slate-700 mt-6">
            <Button as="a" href="/register/" severity="secondary" text size="small" class="hover:text-primary">
              <i class="pi pi-arrow-left mr-2"></i>
              Volver al Registro
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@keyframes shake {

  0%,
  100% {
    transform: translateX(0);
  }

  20%,
  60% {
    transform: translateX(-6px);
  }

  40%,
  80% {
    transform: translateX(6px);
  }
}

.animate-shake {
  animation: shake 0.4s ease-in-out;
}
</style>
