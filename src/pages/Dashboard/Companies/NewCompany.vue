<template>
  <section class="mx-auto w-full max-w-screen-xl overflow-auto px-6">
    <div class="flex items-center my-6 justify-between">
      <h1 class="text-2xl font-bold">New Company</h1>
    </div>
    <div class="alert primary mb-6">
      <span>This page helps you to create a new company.</span>
    </div>
    <div v-if="error" class="alert danger mb-6">
      <span>{{ error }}</span>
    </div>
    <form class="w-full">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="companyName">
            Name <span class="text-red-600">*</span>
          </label>
          <input 
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
            id="companyName" 
            type="text" 
            placeholder="Full company name"
            v-model="companyName">
          <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="logo">
            Logo URL <span class="text-red-600">*</span>
          </label>
          <input 
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
            id="companyName" 
            type="text" 
            placeholder="https://..."
            v-model="companyLogoURL">
          <p class="text-red-500 text-xs italic">Şirket logosunu google drive'a yükleyip linki buraya yerleştiriniz.</p>
          <!-- <input class="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            appearance-none
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="logo"> -->
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="companyDescription">
            Description <span class="text-red-600">*</span>
          </label>
          <textarea 
            type="text" 
            id="companyDescription" 
            placeholder="Company description" 
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 resize-none" 
            rows="7"
            v-model="companyDescription"></textarea>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="companyContact">
            Contact <span class="text-red-600">*</span>
          </label>
          <input 
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="companyContact" 
            type="text" 
            placeholder="+90 500 000 0000"
            v-model="companyContact">
        </div>
        <div class="w-full md:w-1/3 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="companyEmail">
            Email <span class="text-red-600">*</span>
          </label>
          <input 
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="companyEmail" 
            type="text" 
            placeholder="info@company.com"
            v-model="companyEmail">
        </div>
        <div class="w-full md:w-1/3 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="companyWebsite">
            Website <span class="text-red-600">*</span>
          </label>
          <input 
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="companyWebsite" 
            type="text" 
            placeholder="www.site.com"
            v-model="companyWebsite">
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="companyAddress">
            Address <span class="text-red-600">*</span>
          </label>
          <input 
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="companyAddress" 
            type="text" 
            placeholder="Mahalle, Sokak/Cadde. No, İlçe"
            v-model="companyAddress">
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="companyCity">
            City <span class="text-red-600">*</span>
          </label>
          <input 
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="companyCity" 
            type="text" 
            placeholder="Şehir"
            v-model="companyCity">
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="companyCountry">
            Country <span class="text-red-600">*</span>
          </label>
          <input 
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="companyCountry" 
            type="text" 
            placeholder="Ülke"
            v-model="companyCountry">
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="companyZIP">
            Zip <span class="text-red-600">*</span>
          </label>
          <input 
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="companyZIP" 
            type="text" 
            placeholder="Posta kodu"
            v-model="companyZIP">
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="companyStatus">
            Status <span class="text-red-600">*</span>
          </label>
          <select 
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="companyStatus"
            v-model="companyStatus">
            <option :value="true">Görünür</option>
            <option :value="false">Gizli</option>
          </select>
        </div>
      </div>
      <div class="flex md:flex-wrap flex-wrap-reverse mb-4 md:my-4 w-full md:justify-end md:h-auto md:items-center">
        <router-link class="btn md:mr-4 w-full text-center mt-4 md:w-auto md:mt-0" to="/dashboard/companies">
          Cancel
        </router-link>
        <a class="flex items-center justify-center btn btn-primary w-full md:w-auto" href="#" @click="onSubmit">Create</a>
      </div>
    </form>
  </section>
</template>

<script>
import { onMounted, ref } from "vue"
import { addDoc } from "@firebase/firestore"
import { companiesCollection } from "../../../firebase"
import { useRouter } from 'vue-router'
import { onBeforeRouteLeave } from 'vue-router'
export default {
    setup() {
        const companyName = ref('')
        const companyLogoURL = ref('')
        const companyDescription = ref('')
        const companyContact = ref('')
        const companyWebsite = ref('')
        const companyAddress = ref('')
        const companyCity = ref('')
        const companyCountry = ref('')
        const companyZIP = ref('')
        const companyEmail = ref('')
        const companyStatus = ref(true)
        const error = ref('')

        const router = useRouter()

        onMounted(() => {
            document.querySelectorAll('[href="/dashboard/companies"]')[0].classList.add('router-link-active')
            document.querySelectorAll('[href="/dashboard/companies"]')[1].classList.add('router-link-active')
        })

        onBeforeRouteLeave((to, from) => {
            document.querySelectorAll('[href="/dashboard/companies"]')[0].classList.remove('router-link-active')
            document.querySelectorAll('[href="/dashboard/companies"]')[1].classList.remove('router-link-active')
        })

        async function onSubmit() {
            const res = await addDoc(companiesCollection, {
                name: companyName.value,
                logoURL: companyLogoURL.value,
                description: companyDescription.value,
                contact: companyContact.value,
                website: companyWebsite.value,
                address: companyAddress.value,
                city: companyCity.value,
                country: companyCountry.value,
                ZIP: companyZIP.value,
                email: companyEmail.value,
                status: companyStatus.value
            })
            if(res) {
                router.push("/dashboard/companies")
            } else {
                error.value = "Something went wrong! Please try again."
            }
        }

        return {
            companyName,
            companyLogoURL,
            companyDescription,
            companyContact,
            companyWebsite,
            companyAddress,
            companyCity,
            companyCountry,
            companyZIP,
            companyEmail,
            companyStatus,
            error,
            onSubmit
        }
    }
}
</script>

<style>

</style>