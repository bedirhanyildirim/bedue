<template>
  <div class="w-full mt-8 relative">
    <div class="mb-2 md:mb-8 w-full flex justify-center">
      <div class="relative max-w-sm w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input 
          type="text" 
          id="table-search" 
          class="text-base w-full border-b outline-none focus:ring-purple-500 focus:border-purple-500 block pl-10 p-2.5" 
          placeholder="Search product by name"
          v-model="search"
          @input="onQuery">
      </div>
    </div>
    <div class="w-full relative overflow-x-auto">
      <table class="w-full table-auto text-sm text-left text-gray-600 relative">
        <thead class="hidden md:table-header-group text-xs text-gray-700 uppercase bg-white border-b whitespace-nowrap">
          <tr>
            <th scope="col" class="px-2 md:px-6 py-3">
              Product name
            </th>
            <th scope="col" class="px-2 md:px-6 py-3">
              Company name
            </th>
            <th scope="col" class="px-6 py-3 hidden md:table-cell">
              Type
            </th>
            <th scope="col" class="px-6 py-3">
              Certificate
            </th>
            <th scope="col" class="px-6 py-3 hidden md:table-cell">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr 
            class="bg-white border-b md:border-none"
            v-for="(item, index) in searchResult" :key="index">
            <td class="pl-2 md:px-6 py-4 font-medium text-gray-900 md:whitespace-nowrap">
              {{ item.data.name }}
            </td>
            <td class="pl-2 md:px-6 py-4">
              <a href="#" target="_blank">
                {{ item.data.company.data.name }}
              </a>
            </td>
            <td class="px-6 py-4 hidden md:table-cell">
              {{ item.data.type }}
            </td>
            <td class="pl-2 md:px-6 py-4">
              <span class="table-cell max-w-[80px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="auto" viewBox="0 0 329 120">
                    <g id="Group_2" data-name="Group 2" transform="translate(0 -1.242)">
                    <path id="Path_1" data-name="Path 1" d="M192.028,99.984C180.058,82.458,177.827,67.1,188,51c8.14-12.887,23.618-14.952,37.33-11.769,15.541,3.608,28.76-6.882,38.67-18.906" fill="none" stroke="#fdbe6f" stroke-linecap="round" stroke-width="8"/>
                    <g id="Group_1" data-name="Group 1">
                        <path id="Path_2" data-name="Path 2" d="M191.769,99.865c15.469,2.748,33.016.356,42.731-11.365,7.214-8.7,10.618-26.069,1.521-39.884-6.872-10.439-11.89-29.9-9.521-42.713" fill="none" stroke="#fdbe6f" stroke-linecap="round" stroke-width="8"/>
                    </g>
                    <path id="Path_3" data-name="Path 3" d="M169.769,89.556v.481" fill="none" stroke="#fdbe6f" stroke-linecap="round" stroke-width="10"/>
                    <path id="Path_4" data-name="Path 4" d="M169.769,89.556v.481" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="5"/>
                    <path id="Path_5" data-name="Path 5" d="M196,80v.481" fill="none" stroke="#fdbe6f" stroke-linecap="round" stroke-width="10"/>
                    <path id="Path_6" data-name="Path 6" d="M176,50v.481" fill="none" stroke="#fdbe6f" stroke-linecap="round" stroke-width="10"/>
                    <path id="Path_7" data-name="Path 7" d="M176,50v.481" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="5"/>
                    <path id="Path_8" data-name="Path 8" d="M164,68.4v1.923" fill="none" stroke="#fdbe6f" stroke-linecap="round" stroke-width="15"/>
                    <path id="Path_9" data-name="Path 9" d="M164,68v1.923" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="7"/>
                    <path id="Path_10" data-name="Path 10" d="M165.923,33.787V35.71" fill="none" stroke="#fdbe6f" stroke-linecap="round" stroke-width="20"/>
                    <path id="Path_11" data-name="Path 11" d="M165.923,33.787V35.71" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="10"/>
                    <path id="Path_12" data-name="Path 12" d="M228.423,5.9c0,4.808,5.417,19.768,9.615,21.635,4.327,1.923,19.712-4.748,23.558-7.692" fill="none" stroke="#fdbe6f" stroke-linecap="round" stroke-width="5"/>
                    <path id="Path_18" data-name="Path 18" d="M43.32,64.909H77.28v44.4a97.475,97.475,0,0,1-14.04,3.6,91.829,91.829,0,0,1-16.44,1.32q-12.72,0-21.72-5.04a32.758,32.758,0,0,1-13.56-14.88q-4.56-9.84-4.56-24.24,0-13.44,5.16-23.28a36.821,36.821,0,0,1,15.24-15.24q9.96-5.4,24.36-5.4a62.865,62.865,0,0,1,13.44,1.44,62.1,62.1,0,0,1,12,3.84l-6,14.52a43.917,43.917,0,0,0-9-3.36,41.516,41.516,0,0,0-10.56-1.32,25.9,25.9,0,0,0-13.8,3.6,24.353,24.353,0,0,0-9,10.2,35.083,35.083,0,0,0-3.12,15.36,44.731,44.731,0,0,0,2.28,14.88,21.244,21.244,0,0,0,7.2,10.2q4.92,3.6,12.84,3.6,2.64,0,4.56-.12,2.04-.24,3.72-.48,1.68-.36,3.24-.6V80.029H43.32Zm72.2,48.12H97.636V27.349h49.08v14.88h-31.2v22.08h29.04v14.88h-29.04Z" fill="#fdbe6f"/>
                    <path id="Path_19" data-name="Path 19" d="M298.16,41.269a20.38,20.38,0,0,0-9.24,2.04,18.851,18.851,0,0,0-6.72,5.88,26.682,26.682,0,0,0-4.2,9.12,51.137,51.137,0,0,0-1.32,12.12,49.619,49.619,0,0,0,2.16,15.6,19.458,19.458,0,0,0,7.08,9.72q4.8,3.36,12.24,3.36a45.942,45.942,0,0,0,10.44-1.2,103.225,103.225,0,0,0,11.4-3.36v15.24a61.059,61.059,0,0,1-11.16,3.36,64.628,64.628,0,0,1-12.36,1.08q-13.2,0-21.84-5.4a32.737,32.737,0,0,1-12.6-15.36,60.779,60.779,0,0,1-4.08-23.16,56.681,56.681,0,0,1,2.64-17.76,40.392,40.392,0,0,1,7.68-14.04,35.238,35.238,0,0,1,12.6-9.12,43.507,43.507,0,0,1,17.28-3.24,49.624,49.624,0,0,1,12.72,1.68,64.574,64.574,0,0,1,12.36,4.32l-5.88,14.76a91.728,91.728,0,0,0-9.72-3.96A28.568,28.568,0,0,0,298.16,41.269Z" fill="#fdbe6f"/>
                    </g>
                  </svg>
              </span>
            </td>
            <td class="px-6 py-4 text-right hidden md:table-cell">
              <a href="#" class="font-medium text-purple-600 hover:underline">Details</a>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-xs py-2 md:pl-6 text-center md:text-left text-gray-500/50">{{ searchResult.length }} products found</div>
      <loader :isloading="isloading"></loader>
    </div>
  </div>
</template>

<script>
import { onBeforeMount, onMounted, ref } from '@vue/runtime-core'
import { productsCollection } from '../../../firebase'
import { getDocs, query } from '@firebase/firestore'
import loader from '../../shared/loader.vue'
export default {
  components: {
    loader
  },
  setup() {
    const products = ref([])
    const search = ref('')
    const searchResult = ref([])
    const isloading = ref(false)

    onBeforeMount(() => {
      isloading.value = true
    })
        
    onMounted(async() => {
      const q = query(productsCollection)
      const res = await getDocs(q)
            
      res.forEach((doc) => {
        products.value.push({
          id: doc.id,
          data: doc.data()
        })
      });
      search.value = ''
      searchResult.value = products.value
      isloading.value = false
      document.getElementById('table-search').focus()
    })

    function onQuery() {
      if(search.value.length >= 1) {
        searchResult.value = products.value.filter((product) => {
          return product.data.name.toLowerCase().includes(search.value.toLowerCase())
        })
      } else {
        searchResult.value = products.value
      }
    }

    return {
      products,
      search,
      searchResult,
      onQuery,
      isloading
    }
  }
}
</script>

<style scoped>
</style>