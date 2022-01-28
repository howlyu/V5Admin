<template>
    <aside class="flex-shrink-0 hidden w-64 bordr-r md:block">
        <div class="flex flex-col h-full justify-between">
            <div class="flex flex-col">
                <!-- sidebar header-->
                <div class="flex items-center justify-between flex-shrink-0 p-2">
                    <router-link
                        to="/"
                        class="p-2 text-xl font-semibold leading-8 tracking-wider uppercase whitespace-nowrap"
                    >
                        K
                        <span :class="isSidebarOpen ? 'lg:hidden' : 'lg:hidden'">-WD</span>
                    </router-link>
                </div>

                <!-- sidebar menu list-->
                <nav class="flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto">
                    <div>
                        <a
                            href="/"
                            class="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-gray-300 hover:bg-indigo-200"
                            role="button"
                            aria-hidden="true"
                        >
                            <span aria-hidden="true">
                                <HomeIcon class="w-5 h-5"></HomeIcon>
                            </span>
                            <span class="ml-2 text-sm">Main</span>
                        </a>
                    </div>
                    <div v-for="item in menulists">
                        <a
                            :key="item.id"
                            href="#"
                            @click="toggleList()"
                            class="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-gray-300 hover:bg-indigo-200"
                            role="button"
                            aria-hidden="true"
                            :aria-expanded="item.isOpen ? 'true' : 'false'"
                        >
                            <span aria-hidden="true">
                                <document-text-icon class="w-5 h-5" />
                            </span>
                            <span class="ml-2 text-sm">{{ item.text }}</span>
                            <span class="ml-auto" aria-hidden="true">
                                <ChevronRightIcon
                                    class="w-4 h-4 transition-transform transform"
                                    :class="openAll ? 'rotate-90' : 'rotate-0'"
                                ></ChevronRightIcon>
                            </span>
                        </a>
                        <div
                            role="menu"
                            v-show="openAll"
                            class="mt-2 space-y-2 px-7"
                            aria-label="Dashboards"
                        >
                            <a
                                href="index.html"
                                role="menuitem"
                                class="block p-2 text-sm text-gray-700 transition-colors duration-200 rounded-md dark:text-light dark:hover:text-light hover:text-gray-700"
                                v-for="(i, idx) in item.items"
                            >{{ i.text }}</a>
                        </div>
                    </div>
                </nav>
            </div>

            <!-- sidebar footer-->
            <div class="flex-shrink-0 py-2 px-4 h-14 border-t space-y-2">
                <button class="btn btn-primary">
                    <span aria-hidden="true">
                        <LogoutIcon aria-hidden="true" class="w-6 h-6 mr-2" />
                    </span>
                    <span>Logout</span>
                </button>
            </div>
        </div>
    </aside>
</template>
<script>
// import { isSidebarOpen } from "@/states/globalStates";
import { ChevronRightIcon, DocumentTextIcon, HomeIcon, LogoutIcon, MailIcon } from "@heroicons/vue/outline";

export default {
    components: {
        HomeIcon,
        DocumentTextIcon,
        MailIcon,
        ChevronRightIcon,
        LogoutIcon,
    },
    data() {
        return {
            isSidebarOpen: true,
            loading: true,
            openAll: true,
            menulists: [
                {
                    id: 1,
                    text: "Dashboards",
                    path: "/",
                    icon: "<DocumentTextIcon class='w-5 h-5'></DocumentTextIcon>",
                    isOpen: false,
                    items: [
                        {
                            text: "Default",
                            icon: "",
                            path: "#",
                        },
                        {
                            text: "Project Management",
                            icon: "",
                            path: "#",
                        },
                        {
                            text: "E-Commerce",
                            icon: "",
                            path: "#",
                        },
                    ]
                },
                {
                    id: 2,
                    text: "Compoents",
                    path: "/",
                    icon: MailIcon,
                    isOpen: true,
                    items: [
                        {
                            text: "Alerts",
                            icon: "",
                            path: "#",
                        },
                        {
                            text: "Buttons",
                            icon: "",
                            path: "#",
                        },
                        {
                            text: "Modals",
                            icon: "",
                            path: "#",
                        },
                    ]
                },
            ]
        }
    },
    methods: {
        toggleList() {
            this.openAll = !this.openAll
            console.log(this.openAll)
            // isSidebarOpen = !isSidebarOpen.value
            // console.log(isSidebarOpen.value)
        },
        // setTheme(value){
        //     window.localStorage.setItem('dark', value)
        // },
        // getTheme(){
        //     if (window.localStorage.getItem('dark')){
        //         return JSON.parse(window.localStorage.getItem('dark'))
        //     }

        //     return !!window.matchMedia && window.matchMedia('(prefers-color-schema: dark)').matches
        // },
        // toggleSidbarMenu() {
        //     isSidebarOpen = !isSidebarOpen
        // }
    },
}

</script>