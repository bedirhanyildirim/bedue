<template>
  <section class="mx-auto w-full max-w-screen-xl overflow-auto px-6">
    <div class="flex items-center my-6 justify-between">
      <h1 class="text-2xl font-bold">New Product</h1>
    </div>
    <div class="alert primary mb-6">
      <span>This page helps you to create a new product.</span>
    </div>
    <div v-if="error" class="alert danger mb-6">
      <span>{{ error }}</span>
    </div>
    <form class="w-full">
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="selectCompany">
                    Company <span class="text-red-600">*</span>
                </label>
                <companiesDropdown @selectedCompany="selectCompany" id="selectCompany"></companiesDropdown>
            </div>
        </div>
        <div class="w-full" v-show="showForm">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="productName">
                        Name <span class="text-red-600">*</span>
                    </label>
                    <input 
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                    id="productName" 
                    type="text" 
                    placeholder="Ocean 500 mg"
                    v-model="productName">
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="productType">
                        Type <span class="text-red-600">*</span>
                    </label>
                    <input 
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                      id="productType" 
                      type="text" 
                      placeholder="Capsules"
                      v-model="productType">
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="productSummary">
                        Summary <span class="text-red-600">*</span>
                    </label>
                    <textarea 
                        type="text" 
                        id="productSummary" 
                        placeholder="Ocean 500 mg is a clean and naturally concentrated fish oil, containing purified omega-3 fatty acids EPA and DHA." 
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 resize-none" 
                        rows="3"
                        v-model="productSummary"></textarea>
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="productRDA">
                        Recommended Daily Allowance <span class="text-red-600">*</span>
                    </label>
                    <input 
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                    id="productRDA" 
                    type="text" 
                    placeholder="1 or 2 Capsules daily"
                    v-model="productRDA">
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="productStatus">
                        Status <span class="text-red-600">*</span>
                    </label>
                    <select 
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="productStatus"
                    v-model="productStatus">
                        <option :value="true">Active</option>
                        <option :value="false">Deactivate</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="flex md:flex-wrap flex-wrap-reverse mb-4 md:my-4 w-full md:justify-end md:h-auto md:items-center">
            <router-link class="btn md:mr-4 w-full text-center mt-4 md:w-auto md:mt-0" to="/dashboard/products">
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
import { productsCollection } from "../../../firebase"
import { useRouter } from 'vue-router'
import companiesDropdown from "../../../components/dashboard/companies/companiesDropdown.vue"
export default {
    components: {
        companiesDropdown
    },
    setup() {
        const selectedCompany = ref({})
        const productName = ref('')
        const productSummary = ref('')
        const productType = ref('')
        const productRDA = ref('')
        const productPhoto = ref('')
        const productStatus = ref(true)
        const error = ref('')
        const isloading = ref(false)
        const showForm = ref(false)

        const router = useRouter()

        async function onSubmit() {
            const res = await addDoc(productsCollection, {
                name: productName.value,
                summary: productSummary.value,
                type: productType.value,
                rda: productRDA.value,
                status: productStatus.value,
                company: selectedCompany.value
            })
            if(res) {
                router.push("/dashboard/products")
            } else {
                error.value = "Something went wrong! Please try again."
            }
        }

        function selectCompany(value) {
            selectedCompany.value = value
            showForm.value = value.data ? true : false
        }

        return {
            selectedCompany,
            productName,
            productSummary,
            productType,
            productRDA,
            productStatus,
            error,
            isloading,
            showForm,
            onSubmit,
            selectCompany
        }
    }
}
</script>

<style>

</style>