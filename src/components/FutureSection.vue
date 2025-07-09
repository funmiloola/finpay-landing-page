<script setup>
import { Line } from "vue-chartjs";
import { Filler } from "chart.js";
import {useInView} from '../reusableComponent.js'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

const chartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      data: [200000, 300000, 500000, 700000, 900000, 1200000],
      borderColor: "#2A8E9E",
      backgroundColor: (context) => {
        const chart = context.chart;
        const {ctx, chartArea} = chart;

        if (!chartArea) return null; // Wait until chart is ready

        const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
        gradient.addColorStop(0, 'rgba(42, 142, 158, 0.4)'); // light blue top
        gradient.addColorStop(1, 'rgba(42, 142, 158, 0)');   // transparent bottom

        return gradient;
      },
      tension: 0.4,
      fill:true,
      pointRadius: 0,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
  scales: {
    x: {
      grid: { display: false,
        drawBorder:false,
       },
      ticks: { color: "#A0AEC0",
               display:true
       },
    },
    y: {
      grid: { drawBorder: false,
        display:false
       },
      ticks: { display: false },
    },
  },
};

const LineChart = Line;

const { elementRef:futureRef, isVisible:isFutureVisible } = useInView(0.5);
const {elementRef:whyRef, isVisible:isWhyVisible} = useInView(0.5);
</script>
<template>
  <div >
    <div class="border border-white bg-white ml-14 mr-14 rounded-lg -translate-y-25 shadow-2xl" >
      <p class="text-[#2A8E9E] text-sm pl-10 pt-10" ref="futureRef"  :class="{ 'typewriter opacity-100': isFutureVisible, 'opacity-0': !isFutureVisible }" >FUTURE PAYMENT</p>
      <div class="flex items-center gap-90 2xl:gap-0 2xl:justify-between 2xl:pr-36 pl-10 pb-10">
        <div>
          <p class="text-4xl pt-2 text-[#180D39]"  ref="futureRef"  :class="{ 'typewriter opacity-100': isFutureVisible, 'opacity-0': !isFutureVisible }"  >
            Experience that grows <br />with your scale.
          </p>
        </div>
        <div>
          <p  class="text-[#a5a9aa]" ref="futureRef"  :class="{ 'slide-top opacity-100': isFutureVisible, 'opacity-0': !isFutureVisible }" >
            Design a financial operating system that works for <br />your
            business and streamlined cash flow <br />
            management
          </p>
        </div>
      </div>
      <div class="flex items-center pl-10 pr-10 gap-19 pb-10"  ref="futureRef"  :class="{ 'typewriter opacity-100': isFutureVisible, 'opacity-0': !isFutureVisible }"  >
        <div>
          <img
            src="../assets/logo/bi--box-arrow-in-right.svg"
            alt=""
            class="w-6 h-6"
          />
          <p class="text-[#180D39] pt-3 font-bold">Free transfers</p>
          <p class="text-[#a5a9aa] pt-3">
            Create a financial experienceay and automate repeat purchase by
            scheduling recurring payments.
          </p>
        </div>
        <div>
          <img src="../assets/logo/iconoir--house-rooms.svg" alt="" />
          <p class="text-[#180D39] pt-3 font-bold">Multiple account</p>
          <p class="text-[#a5a9aa] pt-3">
            Run your operations with cash from your account and generate yield
            on funds stored in your account.
          </p>
        </div>
        <div>
          <img
            src="../assets/logo/icon-park-outline--triangular-pyramid.svg"
            alt=""
          />
          <p class="text-[#180D39] pt-3 font-bold">Unmatched security</p>
          <p class="text-[#a5a9aa] pt-3">
            Securely manage your finances with organization-wide MFA,
            card-locking,ar account-level controls.
          </p>
        </div>
      </div>
    </div>
    <div class="">
      <p class="text-[#2A8E9E] text-sm text-center pt-6"  ref="whyRef"  :class="{ 'slide-top opacity-100': isWhyVisible, 'opacity-0': !isWhyVisible }" >Why us</p>
      <p class="text-center pt-2 text-3xl text-[#180D39]"  ref="whyRef"  :class="{ 'slide-top opacity-100': isWhyVisible, 'opacity-0': !isWhyVisible }" >
        Why they prefer Finpay
      </p>
      <div class="flex items-center justify-center mx-14 gap-4" ref="whyRef"  :class="{ 'typewriter opacity-100': isWhyVisible, 'opacity-0': !isWhyVisible }" >
        <div
          class="border border-[#E9F3F4] bg-[#E9F3F4] mt-8  pt-8 pb-6 pl-10 w-2/5 rounded-lg"
        >
          <p class="text-[#2A8E9E] text-7xl pb-5 font-bold">3k+</p>
          <p class="pt-2 pr-4 text-[#180D39] font-semibold text-xl">
            Business already running <br />
            on Finpay
          </p>
        </div>
        <div
          class="border border-[#E9F3F4] bg-[#E9F3F4]  mt-8 pt-8 pb-12 pl-10 w-2/5 rounded-lg"
        >
          <p class="text-[#180D39] text-xl font-semibold">
            Instant Withdraw your funds <br />
            at any time
          </p>
          <div class="flex items-center justify-center gap-12 pt-4">
            <img
              src="../assets/logo/mage--shield-cross.svg"
              alt=""
              class="h-10"
            />
            <img
              src="../assets/logo/codicon--arrow-swap.svg"
              alt=""
              class="w-12"
            />
            <img
              src="../assets/logo/fluent--building-bank-48-regular.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class=" w-3/4 flex justify-center items-center gap-58 border border-[#E9F3F4] bg-[#E9F3F4] mt-6 mb-8 mx-auto rounded-lg" ref="whyRef"  :class="{ 'typewriter opacity-100': isWhyVisible, 'opacity-0': !isWhyVisible }" >
      <div>
        <p class="text-2xl font-semibold text-[#180D39] pl-2 ">No asset volatility</p>
        <p class="text-[#a5a9aa] pl-2 pt-4">
          Generate returns on your <br> cash reserves without making  <br>any investments.
        </p>
      </div>
        <div class="bg-white mt-8 rounded-lg">
          <div class="flex flex-start gap-48 pt-6 pl-7 pr-3">
          <div>
            <p class="text-sm text-[#180D39]">Summary</p>
            <p class="text-2xl font-bold text-[#180D39] pb-3">$1,876,580</p>
          </div>
          <div class="text-sm text-[#180D39] cursor-pointer hover:text-gray-800">
            6 Months ▼
          </div>
          </div>
          <div class="w-[490px] h-[220px] px-6">
            <Line :data="chartData" :options="chartOptions" />
          </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>