<template>
    <div class="grid grid-rows-6 grid-cols-12 gap-1  bg-gray-200 h-screen w-screen place-content-center">
        <TopBar class="bg-green-500 row-start-1 row-end-2 col-span-full "/>
        <SiderBar class="bg-blue-500 row-start-2 row-end-7 col-start-1 col-end-2 "/>
        <div class="bg-pink-500 row-start-2 row-end-6 col-start-2 col-end-13">
            <router-view></router-view>
        </div>
        <BottomBar class="bg-red-300 row-start-6 row-end-7 col-start-2 col-end-13"/>
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