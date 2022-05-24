<template>
  <footer class="w-full flex justify-center relative shadow-[0_-1px_2px_0_rgba(0,0,0,0.1)]">
      <div class="w-full flex justify-between relative max-w-screen-xl py-6">
          <div class="w-1/5 lfex flex-col">
              <router-link to="/" class="text-xl font-medium block mb-6">
                <span class="text-black hover:text-purple-700">Nutrition Search</span>
              </router-link>
              <div class="w-full">
                  <span class="text-gray-500 text-xs mb-1 block">Address</span>
                  <span class="text-black text-sm mb-3 block">Akçaburgaz Mahallesi 153. Sokak No:27 Esenyurt Istanbul Turkey</span>
                  <span class="text-gray-500 text-xs mb-1 block">Email</span>
                  <span class="text-black text-sm mb-3 block">info@nutritionsearch.org</span>
                  <span class="text-gray-500 text-xs mb-1 block">Tel No</span>
                  <span class="text-black text-sm mb-3 block">+90 212 447 47 37</span>
              </div>
          </div>
          <div class="w-2/3 flex flex-row">
              <div class="w-1/3">
                  <span class="text-gray-500 text-xs mb-2 block">Pages</span>
                  <ul class="flex flex-col">
                      <li>
                          <router-link to="/" class="fe-footer-nav-link">Home</router-link>
                      </li>
                      <li>
                          <router-link to="/about" class="fe-footer-nav-link">About</router-link>
                      </li>
                      <li>
                          <router-link to="/quality" class="fe-footer-nav-link">Quality</router-link>
                      </li>
                      <li>
                          <router-link to="/reports" class="fe-footer-nav-link">Reports</router-link>
                      </li>
                      <li>
                          <router-link to="/faq" class="fe-footer-nav-link">F.A.Q.</router-link>
                      </li>
                      <li>
                          <router-link to="/contact" class="fe-footer-nav-link">Contact</router-link>
                      </li>
                  </ul>
              </div>
              <div class="w-1/3">
                  <span class="text-gray-500 text-xs mb-2 block">Certificates</span>
                  <ul class="flex flex-col">
                      <li>
                          <router-link to="/quality/certificates/GFOC" class="fe-footer-nav-link">GFOC</router-link>
                      </li>
                      <li>
                          <router-link to="/quality/certificates/GKOC" class="fe-footer-nav-link">GKOC</router-link>
                      </li>
                      <li>
                          <router-link to="/quality/certificates/GPRO" class="fe-footer-nav-link">GPRO</router-link>
                      </li>
                  </ul>
              </div>
              <div class="w-1/3">
                  <span class="text-gray-500 text-xs mb-2 block">Details</span>
                  <ul class="flex flex-col">
                      <li>
                          <router-link to="/about/FORCCW" class="fe-footer-nav-link">FORCCW</router-link>
                      </li>
                      <li>
                          <router-link to="/about/quality-concerns" class="fe-footer-nav-link">Quality Concerns</router-link>
                      </li>
                      <li>
                          <router-link to="/about/vision" class="fe-footer-nav-link">Vision</router-link>
                      </li>
                      <li>
                          <router-link to="/quality/how-do-we-test" class="fe-footer-nav-link">How Do We Test</router-link>
                      </li>
                      <li>
                          <router-link to="/quality/types" class="fe-footer-nav-link">Product Types</router-link>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>

</style>