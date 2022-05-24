<template>
    <header class="fixed top-0 left-0 right-0 h-20 z-10 bg-white flex justify-center items-center drop-shadow">
      <div class="max-w-screen-xl w-full flex justify-between items-center">
        <router-link to="/" class="text-2xl font-medium">
          <span class="text-purple-700">Nutrition Search</span>
        </router-link>
        <div class="bg-white flex flex-row">
          <router-link to="/" class="fe-nav-link">Home</router-link>
          <div class="relative dropdown flex">
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
            <ul class="absolute left-0 top-[80px] border w-auto bg-white hidden flex-col overflow-hidden transition-all">
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
          <div class="relative dropdown flex">
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
            <ul class="absolute left-0 top-[80px] border w-auto bg-white hidden flex-col overflow-hidden transition-all">
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
      </div>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
  .dropdown:hover ul {
      display: flex;
    }
</style>