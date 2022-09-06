<template>
  <section class="mx-auto w-full max-w-screen-xl overflow-auto px-6">
    <div v-if="error" class="alert danger mb-6">
      <span>{{ error }}</span>
    </div>
    <div v-else class="flex items-center my-6 justify-between">
      <h1 class="text-2xl font-bold">Edit Company</h1>
    </div>
  </section>
</template>

<script>
import { ref } from '@vue/reactivity'
import loader from '../../../components/shared/loader.vue'
import { onBeforeRouteLeave, useRoute } from 'vue-router'
import { onBeforeMount, onMounted } from '@vue/runtime-core'
import { doc, getDoc, getDocs, query, where } from '@firebase/firestore'
import { companiesCollection, productsCollection } from '../../../firebase'
export default {
  components: { loader },
  setup() {
    const company = ref({})
    const products = ref([])
    const isloading = ref(false)
    const error = ref('')

    const route = useRoute()

    onBeforeMount(async () => {
      document.querySelectorAll('[href="/dashboard/companies"]')[0].classList.add('router-link-active')
      document.querySelectorAll('[href="/dashboard/companies"]')[1].classList.add('router-link-active')

      isloading.value = true
      const docRef = doc(companiesCollection, route.params.id)
      const docSnap = await getDoc(docRef)
      if(docSnap.exists()) {
        company.value.id = route.params.id
        company.value.data = docSnap.data()
        getProducts()
      } else {
        error.value = "Company doesn't exist."
      }
    })

    onMounted(() => {
    })

    onBeforeRouteLeave((to, from) => {
      document.querySelectorAll('[href="/dashboard/companies"]')[0].classList.remove('router-link-active')
      document.querySelectorAll('[href="/dashboard/companies"]')[1].classList.remove('router-link-active')
    })

    async function getProducts() {
      const q = query(productsCollection, where('company.id', '==', company.value.id))
      const res = await getDocs(q)

      res.forEach((doc) => {
        products.value.push({
          id: doc.id,
          data: doc.data()
        })
      })
      isloading.value = false
    }

    return {
      company,
      products,
      isloading,
      error
    }
  }
}
</script>

<style>

</style>