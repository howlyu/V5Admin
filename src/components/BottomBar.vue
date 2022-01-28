<template>
  <footer class="flex items-center justify-between p-4">
    <div>FBIing &copy; {{ new Date().getFullYear() }}</div>
    <div class="text-sm">
      Made by &nbsp;
      <a
        class="text-blue-400 underline"
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
      >Henry Yu</a>
    </div>
  </footer>
</template>

<script>
import { scrollingDown, scrollingUp } from "@/states/globalStates"
export default {
  components: {
    scrollingUp,
    scrollingDown,
  }
}
</script>