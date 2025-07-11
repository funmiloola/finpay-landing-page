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
      <div class="flex flex-col md:flex-row justify-between gap-2 md:gap-90   md:pr-36 pr-8 pl-10 pb-10">
        <div>
          <p class=" text-2xl md:text-4xl pt-2 text-[#180D39]"  ref="futureRef"  :class="{ 'typewriter opacity-100': isFutureVisible, 'opacity-0': !isFutureVisible }"  >
            Experience that grows <br />with your scale.
          </p>
        </div>
        <div>
          <p  class="text-[#a5a9aa] "  ref="futureRef"  :class="{ 'slide-top opacity-100': isFutureVisible, 'opacity-0': !isFutureVisible }" >
            Design a financial operating system that works for <br />your
            business and streamlined cash flow <br />
            management
          </p>
        </div>
      </div>
      <div class="flex items-center pl-10 pr-10 gap-2 md:gap-19 pb-10"  ref="futureRef"  :class="{ 'typewriter opacity-100': isFutureVisible, 'opacity-0': !isFutureVisible }"  >
        <div>
          <img
            src="../assets/logo/bi--box-arrow-in-right.svg"
            alt=""
            class="w-6 h-6"
          />
          <p class="text-[#180D39] text-lg pt-3 font-bold">Free transfers</p>
          <p class="text-[#a5a9aa] pt-3 text-sm">
            Create a financial experienceay and automate repeat purchase by
            scheduling recurring payments.
          </p>
        </div>
        <div>
          <img src="../assets/logo/iconoir--house-rooms.svg" alt="" />
          <p class="text-[#180D39] pt-3 font-bold text-lg">Multiple account</p>
          <p class="text-[#a5a9aa] pt-3 text-sm">
            Run your operations with cash from your account and generate yield
            on funds stored in your account.
          </p>
        </div>
        <div>
          <img
            src="../assets/logo/icon-park-outline--triangular-pyramid.svg"
            alt=""
          />
          <p class="text-[#180D39] pt-3 font-bold text-lg">Unmatched security</p>
          <p class="text-[#a5a9aa] pt-3 text-sm">
            Securely manage your finances with organization-wide MFA,
            card-locking,ar account-level controls.
          </p>
        </div>
      </div>
    </div>
    <div class="">
      <p class="text-[#2A8E9E] text-sm text-center pt-6"  ref="whyRef"  :class="{ 'slide-top opacity-100': isWhyVisible, 'opacity-0': !isWhyVisible }" >Why us</p>
      <p class="text-center pt-2 md:text-3xl text-[#180D39] text-xl"  ref="whyRef"  :class="{ 'slide-top opacity-100': isWhyVisible, 'opacity-0': !isWhyVisible }" >
        Why they prefer Finpay
      </p>
      <div class="flex items-center justify-center mx-6 md:mx-14 gap-4" ref="whyRef"  :class="{ 'typewriter opacity-100': isWhyVisible, 'opacity-0': !isWhyVisible }" >
        <div
          class="border border-[#E9F3F4] bg-[#E9F3F4] mt-8  pt-8 pb-6 pl-10 md:w-2/5 w-1/3 rounded-lg"
        >
          <p class="text-[#2A8E9E] md:text-7xl text-4xl pb-5 font-bold">3k+</p>
          <p class="pt-2 md:pr-4 pr-0 text-[#180D39] font-semibold md:text-xl text-lg">
            Business already running <br />
            on Finpay
          </p>
        </div>
        <div
          class="border border-[#E9F3F4] bg-[#E9F3F4]  mt-8 pt-8 pb-12 md:pl-10 pl-10 pr-4 md:pr-0 md:w-2/5 w-1/3 rounded-lg"
        >
          <p class="text-[#180D39]  md:text-xl text-lg font-semibold">
            Instant Withdraw your funds <br />
            at any time
          </p>
          <div class="flex items-center md:justify-center md:gap-12 gap-4 pt-4">
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
    <div class=" md:w-3/4 w-2/3 flex justify-center items-center md:gap-58 gap-12 border border-[#E9F3F4] bg-[#E9F3F4] mt-6 mb-8 mx-auto rounded-lg" ref="whyRef"  :class="{ 'typewriter opacity-100': isWhyVisible, 'opacity-0': !isWhyVisible }" >
      <div>
        <p class="md:text-2xl text-lg font-semibold text-[#180D39] md:pl-2 pl-4 pt-4 ">No asset volatility</p>
        <p class="text-[#a5a9aa] md:pl-2 pl-4 pt-4">
          Generate returns on your <br> cash reserves without making  <br>any investments.
        </p>
      </div>
        <div class="bg-white mt-8 rounded-lg">
          <div class="md:flex md:flex-start gap-10 md:gap-48 pt-6 pl-7 pr-3">
          <div>
            <p class="text-sm text-[#180D39]">Summary</p>
            <p class="text-2xl font-bold text-[#180D39] pb-3">$1,876,580</p>
          </div>
          <div class="text-sm text-[#180D39] cursor-pointer hover:text-gray-800">
            6 Months ▼
          </div>
          </div>
          <div class="md:w-[490px] w-[250px] md:h-[230px] h-[120px] md:px-6">
            <Line :data="chartData" :options="chartOptions"   />
          </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>