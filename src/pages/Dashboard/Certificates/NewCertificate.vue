<template>
  <section class="mx-auto w-full max-w-screen-xl overflow-auto px-6">
    <div class="flex items-center my-6 justify-between">
      <h1 class="text-2xl font-bold">New Certificate</h1>
    </div>
    <div class="alert primary mb-6">
      <span>This page helps you to create a new certificatesCollection.</span>
    </div>
    <div v-if="error" class="alert danger mb-6">
      <span>{{ error }}</span>
    </div>
    <form class="w-full">
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Name <span class="text-red-600">*</span>
                </label>
                <input 
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                  id="grid-first-name" 
                  type="text" 
                  placeholder="Orzaks Ilac ve Kimya Sanayi Tic. A.S."
                  v-model="certificationName">
                <p class="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
            <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="logo">
                    Logo <span class="text-red-600">*</span>
                </label>
                <input class="form-control
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
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile">
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="description">
                    Description <span class="text-red-600">*</span>
                </label>
                <textarea 
                    type="text" 
                    id="description" 
                    placeholder="Orzaks Pharmaceuticals was established in 2004 with the aim of bringing health professionals together with pharmacists, physicians and investors. The first products produced with the knowledge and experience of the years brought to market in 2005. These products were followed by innovative and pioneering products in the field. Over the years, we expanded our product portfolio and market share and reached over 60 product types. We aim to provide our customers with the aim of providing the best quality and the most natural with the consciousness and responsibility of offering our products for the protection of human health. In October 2012, we established our own factory to meet our increasing sales volume." 
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 resize-none" 
                    rows="7"
                    v-model="certificationDescription"></textarea>
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Status <span class="text-red-600">*</span>
                </label>
                <select 
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  v-model="certificationStatus">
                    <option :value="true">Active</option>
                    <option :value="false">Deactivate</option>
                </select>
            </div>
        </div>
        <div class="flex md:flex-wrap flex-wrap-reverse mb-4 md:my-4 w-full md:justify-end md:h-auto md:items-center">
            <router-link class="btn md:mr-4 w-full text-center mt-4 md:w-auto md:mt-0" to="/dashboard/certificates">
                Cancel
            </router-link>
            <a class="flex items-center justify-center btn btn-primary w-full md:w-auto" href="#" @click="onSubmit">Create</a>
        </div>
    </form>
  </section>
</template>

<script>
import { ref } from "vue"
import { addDoc } from "@firebase/firestore"
import { certificatesCollection } from "../../../firebase"
import { useRouter } from 'vue-router'
export default {
    setup() {
        const certificationName = ref('')
        const certificationDescription = ref('')
        const certificationStatus = ref(true)
        const certificationLogo = ref('')
        const error = ref('')

        const router = useRouter()

        async function onSubmit() {
            const res = await addDoc(certificatesCollection, {
                name: certificationName.value,
                description: certificationDescription.value,
                status: certificationStatus.value
            })
            if(res) {
                router.push("/dashboard/certificates")
            } else {
                error.value = "Something went wrong! Please try again."
            }
        }

        return {
            certificationName,
            certificationDescription,
            certificationStatus,
            certificationLogo,
            error,
            onSubmit
        }
    }
}
</script>

<style>

</style>