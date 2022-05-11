<template>
  <aside class="w-64 border-r p-2 border-gray-200 flex flex-col overflow-auto overflow-x-scroll">
        <nav class="flex flex-col space-y-2">
            <router-link to="/dashboard/home" class="nav-link active">Dashboard</router-link>
            <router-link to="/dashboard/pages" class="nav-link">Pages</router-link>
            <router-link to="/dashboard/menu" class="nav-link">Menu</router-link>
            <router-link to="/dashboard/companies" class="nav-link">Companies</router-link>
            <router-link to="/dashboard/products" class="nav-link">Products</router-link>
            <router-link to="/dashboard/certificates" class="nav-link">Certificates</router-link>
            <router-link to="/dashboard/users" class="nav-link">Users</router-link>
        </nav>
  </aside>
</template>

<script>
export default {

}
</script>

<style>

</style>