<template>
    <div
        class="flex flex-row h-screen antialiased text-gray-900 bg-gray-100 dark:bg-gray-900 dark:text-gray-100"
    >
        <!-- Sidebar -->
        <SiderBar class="flex-shrink-0 hidden w-64 border-r md:block" />

        <!-- main container-->
        <div class="flex-1 flex flex-col justify-between">
            <div class="flex flex-col h-5/6">
                <!-- Navbar -->
                <TopBar class="bg-white dark:text-gray-100 dark:bg-gray-900" />

                <!-- Main content-->
                <main class>
                    <router-view></router-view>
                </main>
            </div>

            <!-- Main footer-->
            <div class="bg-white border-t h-14 dark:text-gray-900 dark:border-gray-900">
                <BottomBar />
            </div>
        </div>
    </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import SiderBar from "@/components/SiderBar.vue";
import BottomBar from "@/components/BottomBar.vue";
export default {
    components: { TopBar, SiderBar, BottomBar }
}
</script>