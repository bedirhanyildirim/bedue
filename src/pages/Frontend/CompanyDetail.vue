<template>
  <section class="max-w-screen-xl w-full flex flex-col justify-between items-center">
    <div class="w-full py-20">
      <h1 class="flex flex-col uppercase text-4xl mb-4 font-bold">
        {{ company.data.name }}
      </h1>
      <span class="text-black w-1/2 flex">
        {{ company.data.description }}
      </span>
      <span class="text-black w-1/2 flex">
        {{ company.data.website }}
      </span>
      <span class="text-black w-1/2 flex">
        {{ company.data.contact }}
      </span>
      <span class="text-black w-1/2 flex">
        {{ company.data.address + ', ' + company.data.city + ', ' + company.data.country + ', ' + company.data.ZIP }}
      </span>
      <span>
          There are {{ products.length }} produts:{{ productNamesString }}
      </span>
    </div>
  </section>  
</template>

<script>
import { onBeforeMount, onMounted, ref } from '@vue/runtime-core'
import { companiesCollection, productsCollection } from '../../firebase'
import { useRoute } from 'vue-router'
import { doc, getDoc, getDocs, query, where } from "firebase/firestore"
export default {
    setup() {
        const company = ref({})
        const route = useRoute()
        const products = ref([])
        const isloading = ref(false)
        const productNamesString = ref("")

        onBeforeMount(() => {
            isloading.value = true
        })

        company.value = {
            id: '',
            data: {
                name: ''
            }
        }

        onBeforeMount(async () => {
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
            console.log(products.value)
        }

        return {
            company,
            products,
            productNamesString
        }
    }
}
</script>

<style>

</style>