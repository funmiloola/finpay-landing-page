<script setup>
import {useInView} from '../reusableComponent.js'
const { elementRef:futureRef, isVisible:isFutureVisible } = useInView(0.5);
const {elementRef:whyRef, isVisible:isWhyVisible} = useInView(0.5);
</script>
<template>
  <div>
    <div>
      <p class="text-center text-sm text-[#2A8E9E] pt-24" ref="futureRef"  :class="{ 'slide-top opacity-100': isFutureVisible, 'opacity-0': !isFutureVisible }" >OUR MISSION</p>
      <p class="text-center text-4xl text-[#180D39] pt-3" ref="futureRef"  :class="{ 'slide-top opacity-100': isFutureVisible, 'opacity-0': !isFutureVisible }" >
        We've helped <br />Innovative companies
      </p>
      <p class="text-center text-[#4a4b4b] pt-2" ref="futureRef"  :class="{ 'slide-top opacity-100': isFutureVisible, 'opacity-0': !isFutureVisible }" >
        Hundreds of all sizes and across all industries <br />
        have made a big improvements with us.
      </p>
      <div class="flex items-center justify-center gap-20 pt-12" ref="futureRef"  :class="{ 'typewriter opacity-100': isFutureVisible, 'opacity-0': !isFutureVisible }" >
        <div>
          <p class="text-5xl font-semibold text-[#180D39]">24%</p>
          <p class="text-[#180D39]">Revenue business</p>
        </div>
        <div>
          <p class="text-5xl font-semibold text-[#180D39]">180k</p>
          <p class="text-[#180D39]">In annual revenue</p>
        </div>
        <div>
          <p class="text-5xl font-semibold text-[#180D39]">10+</p>
          <p class="text-[#180D39]">Months of runway</p>
        </div>
      </div>
      <p class="text-center text-sm text-[#180D39] pt-16 font-semibold" ref="futureRef"  :class="{ 'typewriter opacity-100': isFutureVisible, 'opacity-0': !isFutureVisible }" >
        CHOOSE PLAN:
      </p>
      <div class="flex items-center gap-6 justify-center pb-0 pt-5" ref="futureRef"  :class="{ 'typewriter opacity-100': isFutureVisible, 'opacity-0': !isFutureVisible }" >
        <div class="border border-[#E9F3F4] bg-[#E9F3F4] px-10 w-1/3 rounded-lg">
          <p class="pt-5 pb-24 text-4xl font-bold text-[#180D39]">Plus</p>
          <div class="flex items-center justify-between pr-2">
            <p class="pb-4 text-2xl text-[#180D39]">E2.99/month</p>
            <img
              src="../assets/logo/pepicons-pencil--arrow-right.svg"
              alt=""
              class="w-8 h-8"
            />
          </div>
        </div>
        <div class="border border-[#2A8E9E] bg-[#2A8E9E] w-1/3 px-10 rounded-lg">
          <p class="pt-5 pb-24 text-4xl font-bold text-[#E9F3F4]">Premium</p>
          <div class="flex items-center justify-between pr-2">
            <p class="pb-4 text-2xl text-[#E9F3F4]">E6.99/month</p>
            <img
              src="../assets/logo/pepicons-pencil--arrow-right.svg"
              alt=""
              class="w-8 h-8"
            />
          </div>
        </div>
      </div>
    </div>
    <div class=" border border-[#023347] bg-[#023347] mx-20 mb-10 flex items-center gap-64 pl-30 pr-12 rounded-lg translate-y-35">
      <div>
        <p class="text-sm text-[#2A8E9E] pt-14" ref="whyRef"  :class="{ 'typewriter opacity-100': isWhyVisible, 'opacity-0': !isWhyVisible }" >TRY IT NOW</p>
        <p class="text-4xl text-white pt-2" ref="whyRef"  :class="{ 'typewriter opacity-100': isWhyVisible, 'opacity-0': !isWhyVisible }" >Ready to level up your <br>payment process?</p>
        <p class="text-sm text-[#b0aeae] pt-2 pb-14" ref="whyRef"  :class="{ 'typewriter opacity-100': isWhyVisible, 'opacity-0': !isWhyVisible }" >
          Supports small businesses with simple invoicing,powerful <br>
          integrations,and cash flow management tools.
        </p>
      </div>
      <div class="flex items-center gap-4" ref="whyRef"  :class="{ 'typewriter opacity-100': isWhyVisible, 'opacity-0': !isWhyVisible }" >
        <div><button class="border border-[#2A8E9E] bg-[#2A8E9E] text-white py-3 px-5 rounded-lg text-sm">Get Started Now</button></div>
        <div class="flex items-center gap-2  border border-[#2A8E9E] py-3 px-5 rounded-lg text-white text-sm"><button>Learn More</button>
        <img src="../assets/logo/pepicons-pencil--arrow-right.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>