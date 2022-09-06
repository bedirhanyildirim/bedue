<template>
  <div class="w-full relative">
    <section class="w-full flex justify-center relative">
      <div class="absolute w-full top-0 bottom-0 bg-hero-image-01 bg-center bg-no-repeat bg-cover bg-origin-border saturate-50 object-cover"></div>
      <div class="absolute w-full top-0 bottom-0 bg-white/50 lg:bg-white/30 saturate-100"></div>
      <div class="z-[1] max-w-screen-md lg:max-w-screen-xl px-4 xl:px-0 w-full flex flex-col-reverse lg:flex-row justify-between lg:items-center py-20 saturate-100">
        <div class="w-full lg:w-3/4">
          <h1 class="uppercase text-center lg:text-left text-2xl md:text-5xl font-bold">{{ company.data.name }}</h1>
        </div>
        <div class="w-full lg:w-1/4 px-8 lg:m-0 lg:p-0 lg:justify-end justify-center h-full flex mb-12">
          <div class="w-auto h-full min-h-[180px] lg:min-h-[120px] aspect-square overflow-hidden shadow-xl bg-white object-center flex justify-center items-center">
              <img src="https://andi.nutrasource.ca/CompanyImages/ORZK_Logo.jpg"/>
            </div>
        </div>
      </div>
    </section>
    <section class="w-full flex flex-col justify-between items-center">
      <div class="w-full max-w-screen-xl px-4 xl:px-0 py-10 md:py-20 flex flex-col md:flex-row justify-between">
        <div class="w-full md:w-2/3 md:pr-4">
          <h2 class="uppercase text-xl lg:text-2xl font-bold">
            Details
          </h2>
          <span class="text-black block my-4 text-lg">
            {{ company.data.description }}
          </span>
        </div>
        <address class="w-full md:w-1/3 md:pl-8 md:border-l not-italic">
          <h2 class="uppercase text-lg mt-4 font-bold md:mt-0">Website</h2>
          <span class="text-purple-700 block mt-2 mb-4">
            <a :href="'https://' + company.data.website" target="_blank">{{ company.data.website }}</a>
          </span>
          <h2 class="uppercase text-lg mt-4 font-bold">Contact</h2>
          <span class="text-purple-700 block mt-2 mb-4">
            <a :href="'tel:' + company.data.contact">{{ company.data.contact }}</a>
          </span>
          <h2 class="uppercase text-lg mt-4 font-bold">Email</h2>
          <span class="text-purple-700 block mt-2 mb-4">
            <a href="mailto:contact@nutritionsearch.org">contact@nutritionsearch.org</a>
          </span>
          <h2 class="uppercase text-lg mt-4 font-bold">Address</h2>
          <span class="text-purple-700 block mt-2 mb-4">
            <a :href="'https://maps.google.com/?q=' + company.data.address + ', ' + company.data.city + ', ' + company.data.ZIP" target="_blank">
              {{ company.data.address + ', ' + company.data.city + ', ' + company.data.country + ', ' + company.data.ZIP }}
            </a>
          </span>
        </address>
      </div>
    </section>  
    <section class="w-full flex flex-col justify-between items-center relative">
      <div class="w-full max-w-screen-xl px-4 xl:px-0 py-10 md:py-20 flex flex-col">
        <h2 class="uppercase text-xl lg:text-2xl font-bold">Products</h2>
        <span class="w-full block">
          There are {{ products.length }} produts:{{ productNamesString }}
        </span>
      </div>
    </section>
    <loader class="z-10" :isloading="isloading"></loader>
  </div>
</template>

<script>
import { onBeforeMount, onMounted, ref } from '@vue/runtime-core'
import { companiesCollection, productsCollection } from '../../firebase'
import { useRoute } from 'vue-router'
import { doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import loader from '../../components/shared/loader.vue'
export default {
  components: { loader },
  setup() {
    const company = ref({})
    const route = useRoute()
    const products = ref([])
    const isloading = ref(false)
    const productNamesString = ref('')

    company.value = {
      id: '',
      data: {
        name: ''
      }
    }

    onBeforeMount(async () => {
      isloading.value = true
      const docRef = doc(companiesCollection, route.params.id)
      const docSnap = await getDoc(docRef)
      company.value.id = route.params.id
      company.value.data = docSnap.data()
      getProducts()
    })

    async function getProducts() {
      const q = query(productsCollection, where("company.id", "==", company.value.id))
      const res = await getDocs(q)
      
      res.forEach((doc) => {
        products.value.push({
          id: doc.id,
          data: doc.data()
        })
        productNamesString.value += " " + doc.data().name
      })
      isloading.value = false
    }

    return {
      company,
      products,
      productNamesString,
      isloading
    }
  }
}
</script>

<style>

</style>