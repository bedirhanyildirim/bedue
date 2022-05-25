<template>
<div class="bg-white h-full flex flex-col wrapper">
    <DashboardNavbar></DashboardNavbar>
    <div class="flex-auto flex bg-gray-100">
        <DashboardSidebar></DashboardSidebar>
        <router-view name="content"/>
    </div>
</div>
</template>

<script>
import DashboardNavbar from '/src/components/dashboard/layout/Navbar.vue'
import DashboardSidebar from '/src/components/dashboard/layout/Sidebar.vue'

export default {
    components: {
        DashboardNavbar,
        DashboardSidebar
    }
}
</script>

<style scoped>
.wrapper {
    height: 100vh;
}
</style>