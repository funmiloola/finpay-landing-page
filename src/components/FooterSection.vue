<script setup>
import {useInView} from '../reusableComponent.js'
const { elementRef, isVisible } = useInView(0.5)
</script>
<template>
    <div class="bg-[#E9F3F4]">
        <div class="flex flex-col gap-10 xl:flex-row items-start justify-between xl:mx-36 mx-26 pt-48 pb-18 border-b border-b-[#b0aeae]" ref="elementRef" :class="{ 'typewriter opacity-100': isVisible, 'opacity-0': !isVisible }">
            <div class="flex items-center gap-1">
                <img src="../assets/logo/material-symbols-light--finance-chip-outline.svg" alt="" class="w-12 h-12">
                <p class="text-[#180D39] text-2xl font-bold" >Finpay</p>
            </div>
            <div class="flex flex-col md:flex-row justify-center gap-24">
                <div>
                    <ul>
                        <li class="font-bold text-[#180D39] text-lg">Solutions</li>
                        <li class="pt-4 text-sm text-[#b0aeae]"><a href="">Small Businesses</a></li>
                        <li class="pt-2 text-sm text-[#b0aeae]"><a href="">Freelancers</a></li>
                        <li class="pt-2 text-sm text-[#b0aeae]"><a href="">Customers</a></li>
                        <li class="pt-2 text-sm text-[#b0aeae]"><a href="">Taxes</a></li>
                    </ul>   
                </div>
                <div>
                    <ul>
                        <li class="font-bold text-[#180D39] text-lg">Company</li>
                        <li class="pt-4 text-sm text-[#b0aeae]"><a href="">About us</a></li>
                        <li class="pt-2 text-sm text-[#b0aeae]"><a href="">Career</a></li>
                        <li class="pt-2 text-sm text-[#b0aeae]"><a href="">Contact</a></li>
                    </ul>
                </div>
                <div>
                     <ul>
                        <li class="font-bold text-[#180D39] text-lg">Learn</li>
                        <li class="pt-4 text-sm text-[#b0aeae]"><a href="">Blog</a></li>
                        <li class="pt-2 text-sm text-[#b0aeae]"><a href="">Ebooks</a></li>
                        <li class="pt-2 text-sm text-[#b0aeae]"><a href="">Guides</a></li>
                        <li class="pt-2 text-sm text-[#b0aeae]"><a href="">Template</a></li>
                    </ul>
                </div>
            </div>
            <div ref="elementRef">
                <p class="text-[#180D39]">Follow us on</p>
                <div class="flex items-center gap-2">
                    <a href="">
                    <img src="../assets/logo/la--twitter.svg" alt="">
                    </a>
                    <a href="">
                     <img src="../assets/logo/radix-icons--linkedin-logo.svg" alt="">
                     </a>
                     <a href="">
                     <img src="../assets/logo/ic--twotone-facebook.svg" alt="">
                     </a>
                </div>
            </div>
        </div>
        <p class="text-center py-4 text-sm text-[#180D39] font-semibold" ref="elementRef" :class="{ 'typewriter opacity-100': isVisible, 'opacity-0': !isVisible }">@Finpay 2025,All Rights Reserved.</p>
    </div>
</template>
<style scoped>

</style>