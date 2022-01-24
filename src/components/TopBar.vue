<template>
    <header class='sticky top-0 z-10 bg-white flex-shrink-0 border-b transition-transform duration-500'>
        <div class="flex items-center justify-between p-2">
            <div class="flex items-center space-x-3">
                <router-link
                to='/' 
                class="p-2 text-xl font-semibold tracking-wider uppercase lg:hidden">
                K-WD
                </router-link> 

                <button onClick={toggleSidebar} class="p-2 rounded-md focus:outline-none focus:ring">
                <span class="sr-only">Toggle sidebar</span>
                    <ChevronDoubleRightIcon
                        class='w-4 h-4 text-gray-600'
                    />
                </button>
          </div>
          <nav aria-label="Secondary" class="flex items-center space-x-3">
                <IconButton text="Open search panel">
                    <SearchIcon aria-hidden="true" class="w-6 h-6"/>
                </IconButton>
                <IconButton text="Open notifications panel">
                    <BellIcon aria-hidden="true" class="w-6 h-6"/>
                </IconButton>
                <IconButton text="Open settings panel">
                    <CogIcon aria-hidden="true" class="w-6 h-6"/>
                </IconButton>
                <ProfileMenu/>
            </nav>
        </div>
        
    </header>
</template>

<script>
import IconButton from './global/IconButton'
import {
  isNotificationsPanelOpen,
  isSearchPanelOpen,
  isSettingsPanelOpen,
  isSidebarOpen,
  scrollingDown,
  scrollingUp,
  toggleSidebar,
} from '../states/globalStates'
import { ChevronDoubleRightIcon, SearchIcon, BellIcon, CogIcon } from '@heroicons/vue/outline'
import ProfileMenu from './global/ProfileMenu.vue'
export default {
    components:{
    IconButton,
    ChevronDoubleRightIcon,
    SearchIcon,
    BellIcon,
    CogIcon,
    ProfileMenu
}

}
</script>