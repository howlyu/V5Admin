<template>
    <button
        type={props.type}
        class="flex items-center justify-center p-2 text-gray-400 transition-colors bg-gray-100 rounded-full focus:outline-none focus:ring hover:bg-gray-200 hover:text-gray-500"
      >
        <span class="sr-only">{props.text}</span>
        <slot></slot>
      </button>
</template>

<script>
import { SearchIcon } from "@heroicons/vue/outline"
export default{
    components:{
        SearchIcon
    },
    props:{
        text:{
            type: String,
            require: true,
        },
        type: {
            type: String,
            default: 'button',
        },
    },
}
</script>