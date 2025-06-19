<template>
  <div class="">
    <div class="flex flex-col md:flex-row gap-8 w-full bg-[#2C3930] p-8 py-16 md:p-24 justify-around">
      <div class="flex-1 text-white lg:max-w-lg md:py-12 flex flex-col">
        <h2 class="text-4xl w-full text-center lg:text-left pb-1 leading-7 font-bebas-neue tracking-wider">Get In Touch
          With</h2>
        <h2 class="text-6xl w-full text-center lg:text-left font-bebas-neue tracking-wide">OAKRIDGE INTERIORS</h2>
        <p class="text-2xl text-center md:text-left font-extralight leading-snug text-white pt-2">
          Our team is ready to discuss your needs, provide a free consultation, and offer expert guidance to bring your
          vision to life. Contact us today and let us transform your space with our professional services.
        </p>
        <div class="flex flex-row md:flex-col pt-6 md:pt-8 md:pb-4 gap-4 justify-center md:justify-start">
          <HeaderContactCard title="CALL US 24/7" subtitle="Click To Call Us" icon="heroicons-outline:phone"
            url="tel:+19718038020">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c-.363-.271-.527-.734-.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
          </HeaderContactCard>
          <HeaderContactCard title="SEND A MESSAGE" subtitle="Click To Email Us" icon="heroicons-outline:mail"
            url="mailto:oakridgeinteriors22@gmail.com">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </HeaderContactCard>
        </div>
      </div>
      <div class="flex-shrink-0">
        <div class="flex flex-col max-w-xl h-full bg-white p-6 py-12 gap-6">
          <h2 class="text-5xl text-center md:text-left pb-1 font-bebas-neue tracking-wide text-black">Send Us a Message
          </h2>
          <form @submit.prevent="submitForm" class="space-y-6">
            <UFormField label="Name" required>
              <UInput v-model="form.name" placeholder="Enter your full name" icon="i-lucide-user" size="xl"
                variant="outline" required class="w-full rounded-none" />
            </UFormField>

            <UFormField label="Phone" required>
              <UInput v-model="form.phone" type="tel" placeholder="Enter your phone number" icon="i-lucide-phone"
                size="xl" variant="outline" required class="w-full" />
            </UFormField>

            <UFormField label="Email" required class="">
              <UInput v-model="form.email" type="email" placeholder="Enter your email address" icon="i-lucide-mail"
                size="xl" variant="outline" required class="w-full" />
            </UFormField>

            <UFormField label="Message" required>
              <UTextarea v-model="form.message" placeholder="Tell us about your project or ask any questions..." :rows=5
                size="xl" variant="outline" required class="w-full" />
            </UFormField>
            
            <div class="turnstile-container">
              <NuxtTurnstile 
                ref="turnstile" 
                v-model="turnstileToken"
                @success="onTurnstileSuccess" 
                @error="onTurnstileError"
                @expired="onTurnstileExpired" 
              />
            </div>

            <button type="submit"
              class="text-white w-full font-bebas-neue px-6 py-3 text-2xl tracking-wider bg-[#A27B5C] disabled:opacity-50 disabled:cursor-not-allowed"
              :disabled="isSubmitDisabled">
              {{ status === 'loading' ? 'Sending...' : 'Submit' }}
            </button>
            
            <p v-if="result" :class="status === 'success' ? 'text-green-600' : 'text-red-600'" class="text-center mt-4">
              {{ result }}
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import HeaderContactCard from '~/components/HeaderContactCard.vue'

interface Web3FormsResponse {
  status: number
  message: string
}

const form = ref({
  access_key: process.env.WEB3FORMS_ACCESSKEY,
  subject: 'New Submission from Oakridge Interiors',
  name: '',
  phone: '',
  email: '',
  message: '',
})

const result = ref('')
const status = ref('')
const turnstile = ref<any>(null)
const turnstileToken = ref('')

// Computed property to determine if submit should be disabled
const isSubmitDisabled = computed(() => {
  return status.value === 'loading' || !turnstileToken.value
})

// Turnstile event handlers
const onTurnstileSuccess = (token: string) => {
  console.log('Turnstile success:', !!token) // Debug log
  turnstileToken.value = token
  
  // Clear any previous captcha error messages
  if (status.value === 'error' && result.value.includes('CAPTCHA')) {
    result.value = ''
    status.value = ''
  }
}

const onTurnstileError = (error: any) => {
  console.log('Turnstile error:', error) // Debug log
  turnstileToken.value = ''
  status.value = 'error'
  result.value = 'CAPTCHA verification failed. Please try again.'
}

const onTurnstileExpired = () => {
  console.log('Turnstile expired') // Debug log
  turnstileToken.value = ''
}

const submitForm = async () => {
  // Clear previous messages
  result.value = ''
  status.value = ''

  // Double-check Turnstile token
  if (!turnstileToken.value) {
    status.value = 'error'
    result.value = 'Please complete the CAPTCHA verification before submitting.'
    return
  }

  try {
    status.value = 'loading'
    
    const response = await $fetch<Web3FormsResponse>('https://api.web3forms.com/submit', {
      method: 'POST',
      body: {
        ...form.value,
        'cf-turnstile-response': turnstileToken.value,
      },
    })

    result.value = response.message
    if (response.status === 200) {
      status.value = 'success'
      
      // Reset form
      form.value.name = ''
      form.value.phone = ''
      form.value.email = ''
      form.value.message = ''

      // Reset Turnstile token and widget
      turnstileToken.value = ''
      if (turnstile.value?.reset) {
        turnstile.value.reset()
      }
    } else {
      status.value = 'error'
      // Don't reset turnstile on API error, let user retry
    }
  } catch (error) {
    console.error('Form submission error:', error)
    status.value = 'error'
    result.value = 'Something went wrong! Please try again.'
    // Don't reset turnstile on network error, let user retry
  } finally {
    // Clear messages after timeout
    if (status.value !== 'success') {
      setTimeout(() => {
        if (status.value !== 'loading') { // Don't clear if still loading
          result.value = ''
          status.value = ''
        }
      }, 5000)
    } else {
      setTimeout(() => {
        result.value = ''
        status.value = ''
      }, 10000)
    }
  }
}
</script>

<style scoped>
.font-bebas-neue {
  font-family: 'Bebas Neue', sans-serif;
}

.turnstile-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>