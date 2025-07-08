<script setup>

</script>
<template>
  <div class="bg-[#E9F3F4]">
    <div class="flex justify-between pt-28 pl-18 pb-40 w-full">
      <div class="w-1/2">
        <h2 class="text-[#180D39] text-6xl">
          <strong>Get paid early <br /></strong> save automatically <br />
          all your pay.
        </h2>
        <p class="pt-4 text-[#180D39]">
          Supports small businesses with simple invoicing, <br />powerful
          integrations,and cash flow management tools.
        </p>
        <div class="relative w-full max-w-md pt-7">
          <input
            type="text"
            placeholder="Your bussiness email"
            class="w-3/4 px-4 py-3 pr-24 border border-white bg-white text-[#180D39] text-sm rounded-2xl outline-none"
          />
          <button
            class="flex gap-2 items-center px-3 py-3 absolute top-1/2 left-70 -translate-y-[20%] bg-[#2A8E9E] text-white rounded-xl"
          >
            Get Started
            <img
              src="../assets/logo/pepicons-pencil--arrow-right.svg"
              alt=""
              class="pr-2"
            />
          </button>
        </div>
        <div class="flex gap-24 pt-8 ">
          <p class="text-[#180D39] text-2xl font-bold">Klarna.</p>
          <p class="text-[#180D39] text-2xl font-bold">coinbase</p>
          <p class="text-[#180D39] text-2xl font-bold">instacart</p>
        </div>
      </div>
      <div class="w-1/2 relative">
        <div class= " border border-white w-1/2 2xl:w-3/5 bg-white  rounded-2xl ">
          <div class="flex pl-3 pr-2 pt-4 items-center gap-2">
            <div>
              <img src="../assets/logo/arcticons--myinsta.svg" alt="" class="w-12 h-12" />
            </div>
            <div>
              <p class="text-[#180D39] font-bold">Dipa Inhouse</p>
              <p class="text-[#180D39] text-sm">dipainhouse@gmail.com</p>
            </div>
          </div>
          <div class=" border border-[#E9F3F4] rounded-lg px-3 py-2 mx-3 mt-2">
            <p class="text-[#180D39] pt-2">Invoice</p>
            <p class="text-[#180D39] text-4xl pt-1 font-bold">$1,876,580</p>
            <p class="text-[#180D39] pt-2">April 21,2024</p>
          </div>
          <label class="flex items-center gap-28  border-[#2A8E9E] border rounded-lg mx-4 mt-2  py-2">
            <div class="flex items-center gap-1">
              <img
                src="../assets/logo/bitcoin-icons--credit-card-filled.svg"
                alt="" class="pl-2"
              />
              <span>Credit Card</span>
            </div>
            <input type="radio" />
          </label>
          <div class="flex items-center gap-2 border border-[#E9F3F4] rounded-lg mx-4 mt-2 py-2">
            <img
              src="../assets/logo/fluent--building-bank-48-regular.svg"
              alt=""
              class="w-6 h-6 pl-2"
            />
            <span>Bank Account</span>
          </div>
          <div class="flex justify-center">
            <button class="border-[#180D39] border  mt-2 py-1 mb-6 px-32 2xl:px-48 bg-[#180D39] text-white rounded-lg">Pay</button>
          </div>
        </div>
        <div class="flex flex-col absolute -top-6 left-53 w-45 ">
          <div class="border border-[#2A8E9E] bg-[#2A8E9E] rounded-t-lg cursor-pointer">
            <p class="pt-3.5 pl-4 text-white text-sm">Credit Card</p>
            <p class="pt-1.5 pl-4 pb-27 text-white text-xl">234 **** ****</p>
          </div>
          <div class="flex items-center gap-24 border border-[#180D39] bg-[#180D39] rounded-b-lg ">
            <p class="text-white pl-4 py-4 font-bold">VISA</p>
            <img src="../assets/logo/iconoir--wifi.svg" alt="" class="rotate-90" />
          </div>
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