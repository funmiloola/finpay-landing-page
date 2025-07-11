<script setup>
import {ref} from "vue";
import SidebarSection from "../components/SidebarSection.vue"
const showIcon = ref(true);
const  showSidebar = ref(false)
function toggleIcon (){
  showIcon.value = !showIcon.value;
  showSidebar.value = !showSidebar.value;
}
</script>

<template>
  <div class="bg-[#E9F3F4] xlg:block lg:block md:block sm:flex justify-between items-center  ">
    <div class="flex items-center justify-between pl-16 pr-16 mt-4 ">
      <div class="flex items-center gap-1">
        <img
          src="../assets/logo/material-symbols-light--finance-chip-outline.svg"
          alt=""
          class="w-12 h-12"
        />
        <p class="text-[#180D39] text-2xl font-bold">Finpay</p>
      </div>
      <div class="xlg:flex lg:flex md:flex sm:hidden gap-92 items-center" >
        <div class="">
          <ul class="flex gap-12 items-center text-[#180D39] font-medium ">
            <li class="cursor-pointer"><a href=""> Products </a></li>
            <li class="cursor-pointer"> <a href="">Customers </a></li>
            <li class="cursor-pointer"> <a href="">Pricing </a></li>
            <li class="cursor-pointer"> <a href="">Learn </a></li>
          </ul>
        </div>
        <div class="flex gap-4 font-medium items-center pt-2">
          <div class=" text-[#180D39] bg-white border border-[#E9F3F4] px-6 py-2 rounded-xl cursor-pointer"> <a href="">Login </a></div>
          <button class="text-white border-[#2A8E9E] bg-[#2A8E9E] px-6 py-2  rounded-xl cursor-pointer" > <a href="">Sign Up </a></button>
        </div>
      </div>
    </div>
    <div class="xlg:hidden lg:hidden md:hidden sm:block  fixed top-6 right-6 z-50 cursor-pointer " @click="toggleIcon">
          <img src="../assets/logo/solar--hamburger-menu-linear.svg" alt="" class="w-12 h-12 " v-if="showIcon">
          <img src="../assets/logo/material-symbols-light--close-rounded.svg" alt="" class="w-12 h-12 " v-else>
        </div>
        <sidebar-section  v-if="showSidebar"/>
  </div>
</template>

<style scoped>
*{
  margin-top:0;
}  
</style>
