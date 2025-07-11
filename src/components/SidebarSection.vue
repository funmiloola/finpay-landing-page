<script setup>
import { ref } from "vue";
const navs = ref(["Products", "Customers", "Pricing", "Learn"]);
</script>

<template>
  <div>
    <div
      class="xlg:hidden lg:hidden md:hidden sm:flex-col gap-8 fixed bg-white w-full h-full left-0 pt-20 z-40"
    >
      <ul class="flex flex-col items-center gap-8">
        <li
          v-for="(nav, index) in navs"
          :key="index"
          class="text-center font-medium text-lg cursor-pointer"
        >
          
        <a href="">{{ nav }}</a></li>
      </ul>

      <div class="flex flex-col items-center gap-6 mt-8">
        <div
          class="font-medium text-black text-lg bg-transparent border-none"
        >
          <a href="">Login</a>
        </div>
        <button
          class="px-8 py-3 bg-[#2A8E9E] text-white rounded-lg text-lg font-bold cursor-pointer"
        >
          Sign up
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>