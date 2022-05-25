<template>
    <header id="fe-header-nav" class="fixed top-0 left-0 right-0 h-14 md:h-24 z-10 bg-white flex justify-center items-center transition-all transform-gpu">
      <div class="md:max-w-screen-xl px-4 md:px-0 w-full flex justify-between items-center h-full">
        <router-link to="/" id="fe-header-logo" class="text-xl md:text-3xl font-medium">
          <span class="text-purple-700 uppercase font-['Open_Sans']">Nutrition Search</span>
        </router-link>
        <div class="bg-white hidden lg:flex flex-row h-full items-center">
          <router-link to="/" class="fe-nav-link">Home</router-link>
          <div class="relative dropdown flex h-full">
            <router-link to="/about" class="fe-nav-link">
              <div class="flex flex-row items-center justify-between">
                <span>About</span>
                <span class="ml-1">
                  <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </span>
              </div>
            </router-link>
            <ul id="fe-navbar-dropdown-1" class="absolute left-0 top-[96px] border w-auto bg-white hidden flex-col overflow-hidden transition-all">
              <li>
                <router-link to="/about/FORCCW" class="fe-nav-link-dropdown">What is FORCCW</router-link>
              </li>
              <li>
                <router-link to="/about/quality-concerns" class="fe-nav-link-dropdown">Quality Concerns</router-link>
              </li>
              <li>
                <router-link to="/about/vision" class="fe-nav-link-dropdown">Vision & Mission</router-link>
              </li>
            </ul>
          </div>
          <div class="relative dropdown flex h-full">
            <router-link to="/quality" class="fe-nav-link">
              <div class="flex flex-row items-center justify-between">
                <span>Quality</span>
                <span class="ml-1">
                  <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </span>
              </div>
            </router-link>
            <ul id="fe-navbar-dropdown-2" class="absolute left-0 top-[96px] border w-auto bg-white hidden flex-col overflow-hidden transition-all">
              <li class="border-b">
                <router-link to="/quality/certificates" class="fe-nav-link-dropdown pb-2">
                  <div class="flex flex-row items-center justify-between">
                    <span>Certificates</span>
                    <span class="ml-1">
                      <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </div>
                </router-link>
                <ul class="flex flex-col w-full transition-all">
                  <li>
                    <router-link to="/quality/certificates/GFOC" class="fe-nav-link-dropdown-second">GFOC</router-link>
                  </li>
                  <li>
                    <router-link to="/quality/certificates/GKOC" class="fe-nav-link-dropdown-second">GKOC</router-link>
                  </li>
                  <li>
                    <router-link to="/quality/certificates/GPRO" class="fe-nav-link-dropdown-second pb-3">GPRO</router-link>
                  </li>
                </ul>
              </li>
              <li class="border-b">
                <router-link to="/quality/how-do-we-test" class="fe-nav-link-dropdown">How Do We Test</router-link>
              </li>
              <li>
                <router-link to="/quality/types" class="fe-nav-link-dropdown">Product Types</router-link>
              </li>
            </ul>
          </div>
          <router-link to="/reports" class="fe-nav-link">Reports</router-link>
          <router-link to="/faq" class="fe-nav-link">F.A.Q.</router-link>
          <router-link to="/contact" class="fe-nav-link">Contact</router-link>
        </div>
        <div class="flex lg:hidden h-full items-center">
          <div @click="toggleMobileMenu">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M3 18V16H21V18ZM3 13V11H21V13ZM3 8V6H21V8Z"/></svg>
          </div>
          <div v-show="mobileMenu" class="absolute inset-0 w-screen h-screen bg-white z-50">
            <div class="px-4 flex flex-col w-full h-full items-center justify-center">
              <span @click="toggleMobileMenu" class="absolute top-4 right-4">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6.4 19 5 17.6 10.6 12 5 6.4 6.4 5 12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4Z"/></svg>
              </span>
              <div class="flex flex-col w-2/3 md:w-1/2" @click="toggleMobileMenu">
                <router-link to="/" class="fe-nav-link-m">Home</router-link>
                <router-link to="/about" class="fe-nav-link-m">
                  <div class="flex flex-row items-center justify-between">
                    <span>About</span>
                    <span class="ml-1">
                      <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </div>
                </router-link>
                <div class="w-full flex flex-col ml-2">
                  <router-link to="/about/FORCCW" class="fe-nav-link-m text-lg">What is FORCCW</router-link>
                  <router-link to="/about/quality-concerns" class="fe-nav-link-m text-lg">Quality Concerns</router-link>
                  <router-link to="/about/vision" class="fe-nav-link-m text-lg">Vision & Mission</router-link>
                </div>
                <router-link to="/quality" class="fe-nav-link-m">
                  <div class="flex flex-row items-center justify-between">
                    <span>Quality</span>
                    <span class="ml-1">
                      <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </div>
                </router-link>
                <div class="w-full flex flex-col ml-2">
                  <router-link to="/quality/certificates" class="fe-nav-link-m text-lg">Certificates</router-link>
                  <router-link to="/about/quality-concerns" class="fe-nav-link-m text-lg">Quality Concerns</router-link>
                  <router-link to="/about/vision" class="fe-nav-link-m text-lg">Vision & Mission</router-link>
                </div>
                <router-link to="/reports" class="fe-nav-link-m">Reports</router-link>
                <router-link to="/faq" class="fe-nav-link-m">F.A.Q.</router-link>
                <router-link to="/contact" class="fe-nav-link-m">Contact</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
export default {
  data: function() {
    return {
      mobileMenu: false
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll: function(){
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById('fe-header-nav').classList.add('drop-shadow')
        document.getElementById('fe-header-nav').classList.add('md:h-16')
        document.getElementById('fe-header-nav').classList.remove('md:h-24')
        document.getElementById('fe-header-logo').classList.add('md:text-xl')
        document.getElementById('fe-header-logo').classList.remove('md:text-3xl')
        document.getElementById('fe-navbar-dropdown-1').classList.add('top-[64px]')
        document.getElementById('fe-navbar-dropdown-1').classList.remove('top-[96px]')
        document.getElementById('fe-navbar-dropdown-2').classList.add('top-[64px]')
        document.getElementById('fe-navbar-dropdown-2').classList.remove('top-[96px]')
      } else {
        document.getElementById('fe-header-nav').classList.remove('drop-shadow')
        document.getElementById('fe-header-nav').classList.add('md:h-24')
        document.getElementById('fe-header-nav').classList.remove('md:h-16')
        document.getElementById('fe-header-logo').classList.add('md:text-3xl')
        document.getElementById('fe-header-logo').classList.remove('md:text-xl')
        document.getElementById('fe-navbar-dropdown-1').classList.add('top-[96px]')
        document.getElementById('fe-navbar-dropdown-1').classList.remove('top-[64px]')
        document.getElementById('fe-navbar-dropdown-2').classList.add('top-[96px]')
        document.getElementById('fe-navbar-dropdown-2').classList.remove('top-[64px]')
      }
    },
    toggleMobileMenu: function() {
      this.mobileMenu = !this.mobileMenu
    }
  }
}
</script>

<style scoped>
  .dropdown:hover ul {
      display: flex;
    }
</style>