<template>
  <section class="mx-auto w-full max-w-screen-xl overflow-auto px-6 bg-gray-50">
    <div class="flex my-6">
      <h1 class="text-2xl font-bold">Dashboard</h1>
    </div>
    <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 relative">
      <div class="flex items-center p-4 bg-white rounded border shadow-xs">
        <div class="p-3 mr-4 text-orange-600 bg-orange-100 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor"><path d="M2.5 17.5V5.812H5.812V2.5H14.188V9.125H17.5V17.5H10.875V14.188H9.125V17.5ZM4.25 15.75H5.812V14.188H4.25ZM4.25 12.438H5.812V10.875H4.25ZM4.25 9.125H5.812V7.562H4.25ZM7.562 12.438H9.125V10.875H7.562ZM7.562 9.125H9.125V7.562H7.562ZM7.562 5.812H9.125V4.25H7.562ZM10.875 12.438H12.438V10.875H10.875ZM10.875 9.125H12.438V7.562H10.875ZM10.875 5.812H12.438V4.25H10.875ZM14.188 15.75H15.75V14.188H14.188ZM14.188 12.438H15.75V10.875H14.188Z"/></svg>
        </div>
        <div class="w-full">
          <p class="mb-2 text-sm font-medium text-gray-600">
            Companies
          </p>
          <p class="text-lg font-semibold text-gray-700">
            {{ companyCount }}
          </p>
        </div>
      </div>
      <div class="flex items-center p-4 bg-white rounded border shadow-xs">
        <div class="p-3 mr-4 text-green-600 bg-green-100 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor"><path d="M7.5 9.25Q7.854 9.25 8.115 8.99Q8.375 8.729 8.375 8.375V6.75H6.625V8.375Q6.625 8.729 6.885 8.99Q7.146 9.25 7.5 9.25ZM8.375 5H11.625Q11.604 4.333 11.135 3.875Q10.667 3.417 10 3.417Q9.333 3.417 8.865 3.875Q8.396 4.333 8.375 5ZM12.5 9.25Q12.854 9.25 13.115 8.99Q13.375 8.729 13.375 8.375V6.75H11.625V8.375Q11.625 8.729 11.885 8.99Q12.146 9.25 12.5 9.25ZM5.083 18.333Q4.354 18.333 3.844 17.823Q3.333 17.312 3.333 16.583V6.75Q3.333 6.021 3.844 5.51Q4.354 5 5.083 5H6.625Q6.646 3.604 7.625 2.635Q8.604 1.667 10 1.667Q11.396 1.667 12.375 2.635Q13.354 3.604 13.375 5H14.917Q15.646 5 16.156 5.51Q16.667 6.021 16.667 6.75V16.583Q16.667 17.312 16.156 17.823Q15.646 18.333 14.917 18.333Z"/></svg>
        </div>
        <div class="w-full">
          <p class="mb-2 text-sm font-medium text-gray-600">
            Products
          </p>
          <p class="text-lg font-semibold text-gray-700">
            {{ productCount }}
          </p>
        </div>
      </div>
      <div class="flex items-center p-4 bg-white rounded border shadow-xs">
        <div class="p-3 mr-4 text-blue-600 bg-blue-100 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor"><path d="M9.146 12.979 13.875 8.25 12.646 7.021 9.125 10.542 7.375 8.771 6.146 10ZM10 18.333Q7.104 17.625 5.219 15.031Q3.333 12.438 3.333 9.271V4.146L10 1.667L16.667 4.146V9.271Q16.667 12.438 14.781 15.031Q12.896 17.625 10 18.333Z"/></svg>
        </div>
        <div class="w-full">
          <p class="mb-2 text-sm font-medium text-gray-600">
            Certificates
          </p>
          <p class="text-lg font-semibold text-gray-700">
            {{ certificateCount }}
          </p>
        </div>
      </div>
      <div class="flex items-center p-4 bg-white rounded border shadow-xs">
        <div class="p-3 mr-4 text-teal-600 bg-teal-100 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor"><path d="M1.667 17.5V5.833L10 2.5L18.333 5.833V17.5H13.333V10.833H6.667V17.5ZM7.458 17.5V15.75H9.208V17.5ZM9.125 15V13.25H10.875V15ZM10.792 17.5V15.75H12.542V17.5Z"/></svg>
        </div>
        <div class="w-full">
          <p class="mb-2 text-sm font-medium text-gray-600">
            Lots
          </p>
          <p class="text-lg font-semibold text-gray-700">
            {{ lotCount }}
          </p>
        </div>
      </div>
      <loader :isloading="isloading"></loader>
    </div>
  </section>
</template>

<script>
import { onBeforeMount, onMounted, onBeforeUpdate, ref, onUpdated } from '@vue/runtime-core'
import loader from '../../../components/shared/loader.vue'
import { certificatesCollection, companiesCollection, productsCollection } from '../../../firebase'
import { getDocs, query } from '@firebase/firestore'
export default {
  components: {
    loader
  },
  setup() {
    const companyCount = ref('0')
    const productCount = ref('0')
    const certificateCount = ref('0')
    const lotCount = ref('0')
    const isloading = ref(false)

    onBeforeMount(() => {
      isloading.value = true
    })

    onMounted(async() => {
      isloading.value = true
      try {
        await getCompanyCount()
        await getProductCount()
        await getCertificateCount()
        await getLotCount()
      } catch(e) {
        console.error(e)
      } finally {
        isloading.value = false 
      }
    })

    async function getCompanyCount() {
      const res = await getDocs(query(companiesCollection))
      companyCount.value = res.size
      return res.size
    }
    async function getProductCount() {
      const res = await getDocs(query(productsCollection))
      productCount.value = res.size
      return res.size
    }
    async function getCertificateCount() {
      const res = await getDocs(query(certificatesCollection))
      certificateCount.value = res.size
      return res.size
    }
    async function getLotCount() {
      lotCount.value = 0
      return 0
    }

    return {
      companyCount,
      productCount,
      certificateCount,
      lotCount,
      isloading
    }
  }
}
</script>

<style>

</style>