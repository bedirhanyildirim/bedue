<template>
  <footer class="w-full flex flex-col justify-center items-center relative shadow-[0_-1px_2px_0_rgba(0,0,0,0.1)]">
      <div class="w-full flex flex-col md:flex-row justify-between relative max-w-screen-md lg:max-w-screen-xl px-4 xl:px-0 py-6">
          <div class="w-full md:w-1/5 flex flex-col">
              <router-link to="/" class="text-xl font-medium block mb-6">
                <span class="text-black hover:text-purple-700 block">Nutrition Search</span>
              </router-link>
              <!-- <div class="hidden md:block md:w-full">
                  <span class="text-gray-500 text-xs mb-1 block">Company</span>
                  <span class="text-black text-sm mb-3 block">Nutrition Search Arge Eğitim ve Danışmanlık Anonim Şirketi</span>
                  <span class="text-gray-500 text-xs mb-1 block">Address</span>
                  <span class="text-black text-sm mb-3 block">Akçaburgaz Mahallesi 153. Sokak No:27 Esenyurt Istanbul Turkey</span>
                  <span class="text-gray-500 text-xs mb-1 block">Email</span>
                  <span class="text-black text-sm mb-3 block">info@nutritionsearch.org</span>
                  <span class="text-gray-500 text-xs mb-1 block">Tel No</span>
                  <span class="text-black text-sm mb-3 block">+90 212 447 47 37</span>
              </div> -->
              <div class="hidden md:block md:w-full">
                  <span class="text-gray-500 text-xs mb-1 block">Şirket Ünvanı</span>
                  <span class="text-black text-sm mb-3 block">Nutrition Search Arge Eğitim ve Danışmanlık Anonim Şirketi</span>
                  <span class="text-gray-500 text-xs mb-1 block">Adres</span>
                  <span class="text-black text-sm mb-3 block">Çifte Havuzlar Mahallesi YTÜ Kuluçka Merkezi D2 Blok No:151/1F/2B03 Esenler İstanbul Türkiye</span>
                  <span class="text-gray-500 text-xs mb-1 block">Email</span>
                  <span class="text-black text-sm mb-3 block">nutritionsearch2022@gmail.com</span>
                  <span class="text-gray-500 text-xs mb-1 block">Tel No</span>
                  <span class="text-black text-sm mb-3 block">+90 530 185 03 90</span>
              </div>
          </div>
          <div class="w-ful md:w-2/3 flex flex-row">
              <div class="hidden md:block md:w-1/3">
                  <!-- <span class="text-gray-500 text-xs mb-2 block">Pages</span>
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
                  </ul> -->
                  <span class="text-gray-500 text-xs mb-2 block">Sayfalar</span>
                  <ul class="flex flex-col">
                      <li>
                          <router-link to="/" class="fe-footer-nav-link">Anasayfa</router-link>
                      </li>
                      <li>
                          <router-link to="/about" class="fe-footer-nav-link">Hakkımızda</router-link>
                      </li>
                      <li>
                          <router-link to="/quality" class="fe-footer-nav-link">Kalite</router-link>
                      </li>
                      <li>
                          <router-link to="/reports" class="fe-footer-nav-link">Raporlar</router-link>
                      </li>
                      <li>
                          <router-link to="/faq" class="fe-footer-nav-link">S.S.S.</router-link>
                      </li>
                      <li>
                          <router-link to="/contact" class="fe-footer-nav-link">İletişim</router-link>
                      </li>
                  </ul>
              </div>
              <div class="w-1/2 md:w-1/3">
                  <!-- <span class="text-gray-500 text-xs mb-2 block">Certificates</span> -->
                  <span class="text-gray-500 text-xs mb-2 block">Sertifikalar</span>
                  <ul class="flex flex-col">
                      <li>
                          <router-link to="/quality/certificates/GFOC" class="fe-footer-nav-link">GFOC</router-link>
                      </li>
                      <li>
                          <router-link to="/quality/certificates/GKOC" class="fe-footer-nav-link">GKOC</router-link>
                      </li>
                      <li>
                          <router-link to="/quality/certificates/GPC" class="fe-footer-nav-link">GPC</router-link>
                      </li>
                  </ul>
              </div>
              <div class="w-1/2 md:hidden">
                  <!-- <span class="text-gray-500 text-xs mb-2 block">Social</span> -->
                  <span class="text-gray-500 text-xs mb-2 block">Sosyal Medya</span>
                  <ul class="flex flex-col">
                      <li>
                          <router-link to="/quality/certificates/GFOC" class="fe-footer-nav-link">Facebook</router-link>
                      </li>
                      <li>
                          <router-link to="/quality/certificates/GKOC" class="fe-footer-nav-link">Instagram</router-link>
                      </li>
                      <li>
                          <router-link to="/quality/certificates/GPRO" class="fe-footer-nav-link">Twitter</router-link>
                      </li>
                  </ul>
              </div>
              <div class="hidden md:block md:w-1/3">
                  <!-- <span class="text-gray-500 text-xs mb-2 block">Details</span>
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
                  </ul> -->
                  <span class="text-gray-500 text-xs mb-2 block">Detaylar</span>
                  <ul class="flex flex-col">
                    <li>
                        <!-- <router-link to="/reports" class="fe-footer-nav-link">Reports</router-link> -->
                        <router-link to="/reports" class="fe-footer-nav-link">Raporlar</router-link>
                    </li>
                    <li>
                        <!-- <router-link to="/quality" class="fe-footer-nav-link">Quality</router-link> -->
                        <router-link to="/quality" class="fe-footer-nav-link">Kalite</router-link>
                    </li>
                    <li>
                        <!-- <router-link to="/about/mission" class="fe-footer-nav-link">Mission</router-link> -->
                        <router-link to="/about/mission" class="fe-footer-nav-link">Misyon</router-link>
                    </li>
                    <li>
                        <!-- <router-link to="/quality/how-do-we-test" class="fe-footer-nav-link">HOW DO WE TEST</router-link> -->
                        <router-link to="/quality/how-do-we-test" class="fe-footer-nav-link">Testler Nasıl Yapılır</router-link>
                    </li>
                    <li>
                        <!-- <router-link to="/quality/types" class="fe-footer-nav-link">Product Types</router-link> -->
                        <router-link to="/quality/types" class="fe-footer-nav-link">Ürün Türleri ve Formatları</router-link>
                    </li>
                  </ul>
              </div>
          </div>
      </div>
      <div class="w-full border-t flex justify-center">
          <div class="max-w-screen-md lg:max-w-screen-xl px-4 py-1 lg:px-0 flex justify-center">
              <span class="block text-center text-xs w-full">Developed by <a href="https://bedirhan.design" target="_blank" class="font-bold">bedcodes</a> &copy; 2022</span>
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