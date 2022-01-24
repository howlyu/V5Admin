<template>
    <Menu as="div" class="relative flex-shrink-0">
        <div>
            <MenuButton class="relative flex items-center overflow-hidden rounded-full group focus:outline-none focus:ring">
                <span class="sr-only">Open user menu</span>
                <img
                    class="object-cover w-10 h-10 rounded-full group-hover:opacity-90"
                    src="@/assets/logo.png"
                    alt="Ahmed Kamel"
                />
            </MenuButton>
        </div>
        <TransitionRoot
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-in"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
            <MenuItems class="absolute right-0 z-20 w-48 py-1 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                    <button
                        :class="[
                        active ? 'bg-violet-500 text-white' : 'text-gray-900',
                        'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                        ]"
                    >
                        <UserIcon
                        :active="active"
                        class="w-5 h-5 mr-2 text-violet-400"
                        aria-hidden="true"
                        />
                        Your Profile
                    </button>
              </MenuItem>
              </div>
              <div class="px-1 py-1">
                <MenuItem v-for="item in userMenuItems" v-slot="{ active }">

                    <button
                        :class="[
                        active ? 'bg-violet-500 text-white' : 'text-gray-900',
                        'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                        ]"
                    >
                        <LogoutIcon
                        :active="active"
                        class="w-5 h-5 mr-2 text-violet-400"
                        aria-hidden="true"
                        />
                        {{item.label}}
                    </button>
              </MenuItem>
              </div>
            </MenuItems>
        </TransitionRoot>
    </Menu>
</template>
<script>
import { Menu, MenuButton, MenuItems, MenuItem, TransitionRoot } from '@headlessui/vue'
import { LogoutIcon, UserIcon } from '@heroicons/vue/outline'
export default {
    data() {
        return {
            userMenuItems : [
                {
                    label: 'Sign out',
                    link: '#'
                }
            ],
        }
    },
    components:{
        Menu,
        MenuButton,
        MenuItems,
        MenuItem,
        TransitionRoot,
        LogoutIcon,
        UserIcon,
    },

}
</script>