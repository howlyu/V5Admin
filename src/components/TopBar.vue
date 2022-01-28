<template>
    <header>
        <div
            class="flex items-center justify-between p-2 border-b bg-gray-100 dark:border-gray-100"
        >
            <!-- Mobile menu button -->
            <button
                @click="isMobileMainMenuOpen = !isMobileMainMenuOpen"
                class="p-1 transition-colors duration-200 rounded-md hover:text-primary hover:bg-blue-100 dark:hover:text-light dark:hover:bg-gray-800 dark:bg-gray-900 md:hidden focus:outline-none focus:ring"
            >
                <span class="sr-only">Open main manu</span>
                <span aria-hidden="true">
                    <MenuIcon class="w-8 h-8"></MenuIcon>
                </span>
            </button>

            <!-- Brand Logo -->
            <router-link
                to="/"
                class="inline-block text-2xl font-bold tracking-wider uppercase text-gray-900 dark:text-gray-100"
            >FBIing</router-link>

            <!-- switch theme-->
            <div class="w-72 fixed top-16">
                <Listbox v-model="selectedTheme">
                    <div class="relative mt-1">
                        <ListboxButton
                            class="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
                        >
                            <span class="block truncate">{{ selectedTheme.name }}</span>
                            <span
                                class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
                            >
                                <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
                            </span>
                        </ListboxButton>

                        <transition
                            leave-active-class="transition duration-100 ease-in"
                            leave-from-class="opacity-100"
                            leave-to-class="opacity-0"
                        >
                            <ListboxOptions
                                class="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                            >
                                <ListboxOption
                                    v-slot="{ active, selected }"
                                    v-for="theme in themelist"
                                    :key="theme.name"
                                    :value="theme.name"
                                    as="template"
                                >
                                    <li
                                        :class="[
                                            active ? 'text-amber-900 bg-amber-100' : 'text-gray-900',
                                            'cursor-default select-none relative py-2 pl-10 pr-4',
                                        ]"
                                    >
                                        <span
                                            :class="[
                                                selected ? 'font-medium' : 'font-normal',
                                                'block truncate',
                                            ]"
                                            @click="toggleMode(theme.name)"
                                        >{{ theme.name }}</span>
                                        <span
                                            v-if="selected"
                                            class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                                        >
                                            <CheckIcon class="w-5 h-5" aria-hidden="true" />
                                        </span>
                                    </li>
                                </ListboxOption>
                            </ListboxOptions>
                        </transition>
                    </div>
                </Listbox>
            </div>

            <!-- Mobile sub menu button -->
            <button
                @click="toggleSubMenu()"
                class="p-1 transition-colors duration-200 rounded-md text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark md:hidden focus:outline-none focus:ring"
            >
                <span class="sr-only">Open sub manu</span>
                <span aria-hidden="true">
                    <DotsVerticalIcon class="w-8 h-8" />
                </span>
            </button>

            <!-- Desktop Right buttons -->
            <nav aria-label="Secondary" class="hidden space-x-3 md:flex md:items-center">
                <IconButton text="Open search panel" @click="toggleMode()">
                    <SearchIcon aria-hidden="true" class="w-6 h-6" />
                </IconButton>
                <IconButton text="Open notifications panel">
                    <BellIcon aria-hidden="true" class="w-6 h-6" />
                </IconButton>
                <IconButton text="Open settings panel">
                    <CogIcon aria-hidden="true" class="w-6 h-6" />
                </IconButton>
                <ProfileMenu />
            </nav>

            <!-- Mobile sub menu-->
            <nav
                x-transition:enter="transition duration-200 ease-in-out transform sm:duration-500"
                x-transition:enter-start="-translate-y-full opacity-0"
                x-transition:enter-end="translate-y-0 opacity-100"
                x-transition:leave="transition duration-300 ease-in-out transform sm:duration-500"
                x-transition:leave-start="translate-y-0 opacity-100"
                x-transition:leave-end="-translate-y-full opacity-0"
                v-show="isMobileSubMenuOpen"
                @click="toggleSubMenu()"
                class="absolute flex items-center p-4 bg-white rounded-md shadow-lg dark:bg-darker top-16 inset-x-4 md:hidden"
                aria-label="Secondary"
            >
                <IconButton text="Open search panel">
                    <SearchIcon aria-hidden="true" class="w-6 h-6" />
                </IconButton>
                <IconButton text="Open notifications panel">
                    <BellIcon aria-hidden="true" class="w-6 h-6" />
                </IconButton>
                <IconButton text="Open settings panel">
                    <CogIcon aria-hidden="true" class="w-6 h-6" />
                </IconButton>
                <ProfileMenu class="relative ml-auto" />
            </nav>
        </div>
    </header>
</template>

<script>
import IconButton from './global/IconButton'
import { ref } from 'vue'
import {
    Listbox,
    ListboxLabel,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'
import { ChevronDoubleRightIcon, SearchIcon, BellIcon, CogIcon, MenuIcon, DotsVerticalIcon } from '@heroicons/vue/outline'
import ProfileMenu from './global/ProfileMenu.vue'


export default {
    components: {
        IconButton,
        ProfileMenu,
        ChevronDoubleRightIcon,
        SearchIcon,
        BellIcon,
        CogIcon,
        MenuIcon,
        DotsVerticalIcon,
        CheckIcon,
        SelectorIcon,
        Listbox,
        ListboxLabel,
        ListboxButton,
        ListboxOptions,
        ListboxOption,

    },
    data() {
        return {
            isMobileSubMenuOpen: false,
            selectedTheme: ref('light'),
            themelist: [
                { name: 'light' },
                { name: 'dark' },
                { name: 'halloween' },
                { name: 'emerald' },
                { name: 'synthwave' },
            ],

        }
    },
    methods: {
        toggleSubMenu() {
            this.isMobileSubMenuOpen = !this.isMobileSubMenuOpen
            console.log(this.isMobileSubMenuOpen);
        },
        toggleMode(themename) {
            document.body.setAttribute('data-theme', themename)
            console.log(document.body.getAttribute('data-theme'))
        },
    },

}
</script>