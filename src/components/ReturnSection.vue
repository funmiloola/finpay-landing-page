<script setup>
import {useInView} from '../reusableComponent.js'
const { elementRef, isVisible } = useInView(0.5)
</script>
<template>
    <div class="border border-[#023347] bg-[#023347] mt-16">
    <div class="md:pl-42 pl-15 md:pr-42 pr-15 pt-24" >
        <p class="text-sm text-[#2A8E9E]" ref="elementRef" :class="{ 'typewriter opacity-100': isVisible, 'opacity-0': !isVisible }">STEP</p>
        <p class="md:text-4xl text-lg text-white pb-6 pt-2" ref="elementRef" :class="{ 'typewriter opacity-100': isVisible, 'opacity-0': !isVisible }">Maximize your returns with a <br> Reserve account that generates.</p>
        <div class="flex flex-col md:flex-row md:gap-8 gap-4 pb-18" ref="elementRef" :class="{ 'typewriter opacity-100': isVisible, 'opacity-0': !isVisible }">
            <div class="border border-[#08445c] bg-[#08445c] md:pl-5 pl-4 md:pr-16 pr-2 rounded-lg pb-4 ">
                <p class="md:text-6xl text-3xl bg-gradient-to-b from-white to-[#38383833] bg-clip-text text-transparent  pt-2">1</p>
                <p class="text-[#E9F3F4] text-sm md:text-lg pt-1">Open your account</p>
                <p class="text-[#9a9b9b] text-sm pt-2">Sign up to finpay and setup your account from the dashboard</p>
            </div>
            <div class="border border-[#08445c] bg-[#08445c] md:pl-5 pl-4 md:pr-16 pr-2 rounded-lg pb-4">
                <p class="md:text-6xl text-3xl bg-gradient-to-b from-white to-[#00000033] bg-clip-text text-transparent pt-2">2</p>
                <p class="text-[#E9F3F4] text-sm md:text-lg pt-1">Transfer your money</p>
                <p class="text-[#9a9b9b] text-sm pt-2">Move money from to another account into and start to earning up.</p>
            </div>
            <div class="border border-[#08445c] bg-[#08445c] md:pl-5 pl-4 md:pr-16 pr-2 rounded-lg pb-4 ">
                <p class="md:text-6xl text-3xl bg-gradient-to-b from-white to-[#00000033] bg-clip-text text-transparent pt-2">3</p>
                <p class="text-[#E9F3F4] text-sm md:text-lg pt-1">Watch your balance grow</p>
                <p class="text-[#9a9b9b] text-sm pt-2">Accessed instantly and remain insulated from market volatility</p>
            </div>
        </div>
    </div>
    </div>
</template>
<style scoped>

</style>