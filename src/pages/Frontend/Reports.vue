<template>
  <div class="max-w-screen-xl w-full flex flex-col justify-between items-center">
    <section class="w-full py-20">
      <h1 class="flex flex-col uppercase text-7xl mb-4 font-bold">
        Reports
      </h1>
      <span class="text-black w-1/2 flex">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium earum labore sint expedita? Libero possimus a placeat. Dolorum sit itaque, illo repellendus, velit commodi qui neque, voluptate a aut expedita!
      </span>
    </section>
    <section class="w-full flex flex-col items-center">
        <div class="flex flew-row text-lg">
            <button class="p-4 mx-2" :class="currentTab === 0 ? 'text-purple-700 font-bold' : ''" @click="changeTab(0)">Brands</button>
            <button class="p-4 mx-2" :class="currentTab === 1 ? 'text-purple-700 font-bold' : ''" @click="changeTab(1)">Products</button>
            <button class="p-4 mx-2" :class="currentTab === 2 ? 'text-purple-700 font-bold' : ''" @click="changeTab(2)">Certificates</button>
        </div>
        <companiesTable v-if="currentTab === 0"></companiesTable>
        <productsTable v-if="currentTab === 1"></productsTable>
        <certificatesTable v-if="currentTab === 2"></certificatesTable>
    </section>
  </div> 
</template>

<script>
import { ref } from '@vue/runtime-core'
import companiesTable from '../../components/frontend/companies/companiesTable.vue'
import productsTable from '../../components/dashboard/products/productsTable.vue'
import certificatesTable from '../../components/dashboard/certificates/certificatesTable.vue'
export default {
    components: { 
        companiesTable,
        productsTable,
        certificatesTable
    },
    setup() {
        const currentTab = ref(0)

        function changeTab(v) {
            currentTab.value = v
        }

        return {
            currentTab,
            changeTab
        }
    }
}
</script>

<style>

</style>