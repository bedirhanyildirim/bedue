<template>
  <aside class="w-64 border-r p-2 bg-white border-gray-200 hidden lg:flex flex-col overflow-auto overflow-x-scroll">
    <nav class="flex flex-col justify-start flex-wrap space-y-2">
      <router-link to="/dashboard/home" class="nav-link">Dashboard</router-link>
      <router-link to="/dashboard/pages" class="nav-link">Pages</router-link>
      <router-link to="/dashboard/menu" class="nav-link">Menu</router-link>
      <router-link to="/dashboard/companies" class="nav-link">Companies</router-link>
      <router-link to="/dashboard/products" class="nav-link">Products</router-link>
      <router-link to="/dashboard/certificates" class="nav-link">Certificates</router-link>
      <router-link to="/dashboard/users" class="nav-link">Users</router-link>
      <router-link to="/" class="nav-link text-black border-t">Go to Website</router-link>
    </nav>
  </aside>
</template>

<script>
export default {

}
</script>

<style>

</style>