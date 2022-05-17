<template>
<div class="w-full relative">
    <input 
      class="w-full rounded border appearance-none block bg-gray-200 text-gray-700  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
      type="text" 
      placeholder="Search company name" 
      v-model="searchString" 
      @input="creatQuery" />
    <div v-if="searchQuery.length > 0" 
      class="w-full absolute rounded bg-white border top-[100%+8px]">
        <div
          class="border-b py-3 px-4 last:border-none hover:bg-gray-200 cursor-pointer flex flex-row justify-start items-center"
          v-for="item in searchQuery"
          @click="selectItem(item)"
          :key="item.id">
            <div class="w-14 h-14 overflow-hidden mr-6 bg-white object-center flex justify-center items-center">
                <img src="https://andi.nutrasource.ca/CompanyImages/ORZK_Logo.jpg"/>
            </div>
            <div class="block">{{ item.data.name }}</div>
        </div>
    </div>
    <loader :isloading="isloading"></loader>
</div>
</template>

<script>
import { onBeforeMount, onMounted, ref } from '@vue/runtime-core'
import loader from '../../shared/loader.vue'
import { getDocs, query } from '@firebase/firestore'
import { companiesCollection } from '../../../firebase'
export default {
    components: {
        loader
    },
    setup(_, { emit }) {
        const companies = ref([])
        const isloading = ref(false)
        const selectedCompany = ref({})
        const searchString = ref('')
        const searchQuery = ref([])

        onBeforeMount(() => {
            isloading.value = true
        })
        
        onMounted(async() => {
            const q = query(companiesCollection)
            const res = await getDocs(q)
            
            res.forEach((doc) => {
                companies.value.push({
                    id: doc.id,
                    data: doc.data()
                })
            });
            isloading.value = false
        })

        function creatQuery() {
            if(searchString.value.length >= 1) {
                searchQuery.value = companies.value.filter((company) => {
                    return company.data.name.toLowerCase().includes(searchString.value.toLocaleLowerCase())
                })
            } else {
                selectItem({})
            }
        }

        function selectItem(item) {
            selectedCompany.value = item
            searchString.value = item.data ? item.data.name : ''
            searchQuery.value = []
            emit('selectedCompany', selectedCompany.value)
        }

        return {
            companies,
            isloading,
            searchString,
            searchQuery,
            creatQuery,
            selectItem
        }
    }
}
</script>

<style>

</style>