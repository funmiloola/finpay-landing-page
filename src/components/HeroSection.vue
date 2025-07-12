<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const sectionEl = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.5 }
  )

  if (sectionEl.value) {
    observer.observe(sectionEl.value)
  }
})
</script>

<template>
 <div class=" bg-[#E9F3F4] flex flex-col xl:flex-row items-center justify-center px-6 md:px-16 max-w-[1440px] mx-auto pt-20 pb-70 md:pb-80 gap-30">
  <div class="w-full xl:w-1/2 typewriter">
  <h2 class="text-[#180D39] text-center text-4xl xl:text-6xl font-bold leading-tight">
    Get paid early <br /> save automatically <br /> all your pay.
  </h2>
  <p class="text-[#180D39] text-center mt-4">
    Supports small businesses with simple invoicing, powerful integrations, and cash flow management tools.
  </p>
   <div class="flex justify-center items-center">
  <div class="flex flex-col xl:flex-row mt-6 w-full max-w-md">
    <input
      type="text"
      placeholder="Your business email"
      class="flex-1 px-4 py-3 border bg-white border-gray-200 rounded-l-xl rounded-r-xl md:rounded-r-none outline-none"
    />
    <button
      class="bg-[#2A8E9E] text-white px-6 py-3 rounded-xl md:rounded-r-xl mt-4 xl:mt-0 cursor-pointer"
    >
      Get Started
    </button>
  </div>
</div>
  <div class="flex items-center justify-center gap-6 xl:gap-24 mt-8">
    <p class="text-[#180D39] text-xl font-bold cursor-pointer">Klarna.</p>
    <p class="text-[#180D39] text-xl font-bold cursor-pointer">coinbase</p>
    <p class="text-[#180D39] text-xl font-bold cursor-pointer">instacart</p>
  </div>
</div>
<div class="w-full slide-top xl:w-1/2 relative flex justify-center">
  <div class="bg-white border border-gray-200 rounded-2xl p-6 w-2/3 xl:w-full max-w-sm relative z-10">
    <div class="flex items-center gap-3 mb-4">
      <img src="../assets/logo/arcticons--myinsta.svg" alt="" class="w-10 h-10" />
      <div>
        <p class="text-[#180D39] font-bold">Dipa Inhouse</p>
        <p class="text-[#180D39] text-sm">dipainhouse@gmail.com</p>
      </div>
    </div>

    <div class="border border-gray-200 rounded-lg p-4 mb-4">
      <p class="text-[#180D39]">Invoice</p>
      <p class="text-[#180D39] text-3xl font-bold">$1,876,580</p>
      <p class="text-[#180D39] mt-2">April 21, 2024</p>
    </div>

    <label class="flex items-center justify-between border border-gray-200 rounded-lg p-2 mb-2 cursor-pointer">
      <div class="flex items-center gap-2">
        <img src="../assets/logo/bitcoin-icons--credit-card-filled.svg" alt="" class="w-6 h-6" />
        <span>Credit Card</span>
      </div>
      <input type="radio" name="payMethod" checked />
    </label>
    <label class="flex items-center justify-between border border-gray-200 rounded-lg p-2 cursor-pointer">
      <div class="flex items-center gap-2">
        <img src="../assets/logo/fluent--building-bank-48-regular.svg" alt="" class="w-6 h-6" />
        <span>Bank Account</span>
      </div>
      <input type="radio" name="payMethod" />
    </label>

    <button class="w-full bg-[#180D39] text-white rounded-lg py-2 mt-4">
      Pay
    </button>
  </div>

  <!-- Floating card -->
  <div class="absolute -top-10  md:right-50 xl:right-0 right-0 bg-[#2A8E9E] text-white rounded-lg w-1/2 md:w-1/4 xl:w-1/2  shadow-lg z-20">
    <p class="text-sm pl-4 pt-4">Credit Card</p>
    <p class="text-lg font-bold mt-2 pl-4 ">234 **** ****</p>
    <div class="flex justify-between items-center mt-20 py-4 rounded-b-lg px-4 bg-[#180D39]">
      <p class="font-bold">VISA</p>
      <img src="../assets/logo/iconoir--wifi.svg" alt="" class="w-5 h-5 rotate-90" />
    </div>
  </div>
</div>
 </div>
</template>
<style scoped>
/* @theme{
animation: {
        typing: 'typing 3s steps(30, end) forwards',
      },
} */

</style>