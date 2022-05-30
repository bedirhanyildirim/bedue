<template>
    <div class="w-ful flex flex-col">
        <span class="block text-gray-700 text-sm ml-2 mb-2">Discover certificated <span class="text-purple-700">Company</span> and <span class="text-purple-700">Product</span> reports now</span>
        <div class="w-full flex flex-row bg-white border box-content shadow">
            <div class="flex items-center justify-start relative min-w-[120px] bg-gray-100 cursor-pointer"
              @click="toggleDropdown"
              v-click-away="closeDropdown">
                <span class="p-3 text-sm">{{ selected.label }}</span>
                <svg class="ml-auto mr-2 w-4 h-4 transition-all" 
                  :class="opened ? 'rotate-180' : ''"
                  aria-hidden="true" 
                  fill="currentColor" 
                  viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
                <div class="flex flex-col items-start absolute top-0 left-0 border-t border-r border-l box-border mt-11 text-sm cursor-pointer bg-white min-w-full transition-colors"
                  v-show="opened">
                    <div v-for="(item, index) in dropdownMenu" :key="index"
                      class="w-full p-3 border-b"
                      :class="item.value === selected.value ? 'bg-purple-700 text-white' : 'hover:bg-gray-200'"
                      @click="select(item)">
                        {{ item.label }}
                    </div>
                </div>
            </div>
            <div class="w-full relative" v-click-away="() => {searchDropdownOpened = false}">
                <input type="text" id="hearSearch" placeholder="Start searching" class="w-full h-full p-2 focus:outline-none" v-model="searchText" @input="onQuery"/>
                <div class="w-full absolute top-11 bg-white border" v-if="searchDropdownOpened && !opened">
                    <div class="" v-if="searchRes.companies.length > 0">
                        <span class="block text-xs text-gray-500 p-2" v-if="selected.value === 0">Companies</span>
                        <div class="flex w-full text-sm text-black px-4 py-2 hover:bg-gray-100 cursor-pointer" 
                          v-for="(item, index) in searchRes.companies" 
                          :key="index"
                          @click="selectItem(item)">
                            {{ item.data.name }}
                        </div>
                    </div>
                    <div class="" v-if="searchRes.products.length > 0">
                        <span class="block text-xs text-gray-500 p-2" v-if="selected.value === 0">Products</span>
                        <div class="flex w-full text-sm text-black px-4 py-2 hover:bg-gray-100 cursor-pointer" 
                          v-for="(item, index) in searchRes.products" 
                          :key="index"
                          @click="selectItem(item)">
                            {{ item.data.name }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getDocs, query } from '@firebase/firestore'
import { companiesCollection, productsCollection } from '../../../firebase'
export default {
    data: function() {
        return {
            selected: {
                label: 'All',
                value: 0
            },
            opened: false,
            dropdownMenu: [
                {
                    label: 'All',
                    value: 0
                },
                {
                    label: 'Companies',
                    value: 1
                },
                {
                    label: 'Products',
                    value: 2
                }
            ],
            searchText: '',
            companies: [],
            products: [],
            searchCompRes: [],
            searchProdRes: [],
            searchRes: {
                companies: [],
                products: []
            },
            searchDropdownOpened: true,
            selectedItem: {}
        }
    },
    async beforeMount() {
        const qComp = query(companiesCollection)
        const resComp = await getDocs(qComp)
        
        resComp.forEach((doc) => {
            this.companies.push({
                id: doc.id,
                data: doc.data()
            })
        })

        const qProd = query(productsCollection)
        const resProd = await getDocs(qProd)
        
        resProd.forEach((doc) => {
            this.products.push({
                id: doc.id,
                data: doc.data()
            })
        })
    },
    mounted() {
        document.getElementById('hearSearch').focus()
    },
    methods: {
        select: function(item) {
            this.selected = item
            this.searchRes = {
                companies: [],
                products: []
            }
            this.searchText = ''
            document.getElementById('hearSearch').focus()
        },
        toggleDropdown: function() {
            this.opened = !this.opened
        },
        closeDropdown: function() {
            this.opened = false
        },
        onQuery: function() {
            this.searchRes = {
                companies: [],
                products: []
            }
            if(this.searchText.length >= 1) {
                this.searchDropdownOpened = true
                if(this.selected.value === 0) {
                    this.searchRes.companies = this.queryCompany()
                    this.searchRes.products = this.queryProduct()
                } else if(this.selected.value === 1) {
                    this.searchRes.companies = this.queryCompany()
                } else if(this.selected.value === 2) {
                    this.searchRes.products = this.queryProduct()
                }
            }
        },
        queryCompany: function() {
            return this.companies.filter((company) => {
                return company.data.name.toLowerCase().includes(this.searchText.toLowerCase())
            })
        },
        queryProduct: function() {
            return this.products.filter((product) => {
                return product.data.name.toLowerCase().includes(this.searchText.toLowerCase())
            })
        },
        selectItem(item) {
            this.selectedItem = item
            this.searchText = item.data.name
            this.searchDropdownOpened = false
        }
    }
}
</script>

<style>

</style>