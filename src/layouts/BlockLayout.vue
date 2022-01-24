<template>
    <div class="max-w-[100vw] flex min-h-screen antialiased text-gray-900 bg-white">
        
        <SiderBar class=" bg-blue-500 w-64 overflow-y-auto"/>

        <!-- main container-->
        <div class="flex max-w-full flex-col flex-1">
            <TopBar/>
            <div class="bg-pink-500 flex-1 overflow-y-auto">
                <router-view></router-view>
            </div>
            
            
            <div class="flex-1 bg-zinc-500">
                <BottomBar class=""/>
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