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
const {elementRef:whyRef, isVisible:isWhyVisible} = useInView(0);
</script>
<template>
  <div >
    <div class="border border-white bg-white ml-14 mr-14 rounded-lg -translate-y-25 shadow-2xl" ref="futureRef"  :class="{ 'typewriter opacity-100': isFutureVisible, 'opacity-0': !isFutureVisible }"  >
      <p class="text-[#2A8E9E] text-sm pl-10 pt-10" >FUTURE PAYMENT</p>
      <div class="flex flex-col md:items-center md:flex-row justify-between gap-2 xl:gap-70  md:pr-36 pr-8 pl-10 pb-5 md:pb-10">
        <div>
          <p class=" text-2xl md:text-4xl pt-2 text-[#180D39]"  >
            Experience that grows <br />with your scale.
          </p>
        </div>
        <div>
          <p  class="text-[#a5a9aa] ">
            Design a financial operating system that works for <br />your
            business and streamlined cash flow <br />
            management
          </p>
        </div>
      </div>
      <div class="flex flex-col gap-8 md:flex-row pl-10 pr-10 xl:pl-10 xl:pr-10 justify-between xl:gap-19 pb-10"  ref="futureRef"  :class="{ 'typewriter opacity-100': isFutureVisible, 'opacity-0': !isFutureVisible }"  >
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
    <div class="" ref="whyRef"  :class="{ 'typewriter opacity-100': isWhyVisible, 'opacity-0': !isWhyVisible }"  >
      <p class="text-[#2A8E9E] text-sm text-center md:pt-6" ref="whyRef"  :class="{ 'typewriter opacity-100': isWhyVisible, 'opacity-0': !isWhyVisible }" >Why us</p>
      <p class="text-center pt-2 xl:text-3xl text-[#180D39] text-xl"  ref="whyRef"  :class="{ 'typewriter opacity-100': isWhyVisible, 'opacity-0': !isWhyVisible }" >
        Why they prefer Finpay
      </p>
      <div class="flex flex-col xl:flex-row items-center justify-center mx-auto xl:mx-14 gap-4"  >
        <div
          class="border border-[#E9F3F4] bg-[#E9F3F4] mt-8 mx:auto flex flex-col items-center justify-center xl:items-start  pt-8 pb-6 px-10 xl:pl-10 xl:pr-10 xl:w-2/5 w-1/2 rounded-lg"
        ref="whyRef"  :class="{ 'typewriter opacity-100': isWhyVisible, 'opacity-0': !isWhyVisible }">
          <p class="text-[#2A8E9E] xl:text-7xl text-4xl pb-5 font-bold">3k+</p>
          <p class="pt-2 xl:pr-4 text-center text-[#180D39] font-semibold xl:text-xl text-lg">
            Business already running 
            on Finpay
          </p>
        </div>
        <div
          class="border border-[#E9F3F4] bg-[#E9F3F4] flex flex-col items-center justify-center gap-4 xl:items-start mx:auto  mt-8 pt-8 pb-6 xl:pl-10 pl-10 pr-10 xl:pr-10  xl:w-2/5 w-1/2 rounded-lg"
        ref="whyRef"  :class="{ 'typewriter opacity-100': isWhyVisible, 'opacity-0': !isWhyVisible }">
          <p class="text-[#180D39] text-center md:text-xl text-lg font-semibold">
            Instant Withdraw your funds
            at any time
          </p>
          <div class="flex items-center justify-center xl:justify-center xl:gap-24  pt-8">
            <img
              src="../assets/logo/mage--shield-cross.svg"
              alt=""
              class=" xl:h-10 h-8"
            />
            <img
              src="../assets/logo/codicon--arrow-swap.svg"
              alt=""
              class="xl:w-12 w-8"
            />
            <img
              src="../assets/logo/fluent--building-bank-48-regular.svg"
              alt="" class="xl:w-12 w-8"
            />
          </div>
        </div>
      </div>
    </div>
    <div class=" xl:w-3/4 w-1/2 flex flex-col justify-center items-center px-12 xl:flex-row xl:gap-48 xl:pl-8 border border-[#E9F3F4] bg-[#E9F3F4] mt-6 mb-8 mx-auto rounded-lg" ref="whyRef"  :class="{ 'typewriter opacity-100': isWhyVisible, 'opacity-0': !isWhyVisible }" >
      <div >
        <p class="xl:text-2xl text-lg font-semibold text-[#180D39] xl:pl-2 pt-4 text-center">No asset volatility</p>
        <p class="text-[#a5a9aa] xl:pl-2 pt-4 text-center">
          Generate returns on your  cash reserves without making  any investments.
        </p>
      </div>
        <div class="bg-white mt-8 rounded-lg">
          <div class="xl:flex xl:flex-start gap-10 xl:gap-48 pt-6 pl-7">
          <div>
            <p class="xl:text-sm  text-[#180D39]">Summary</p>
            <p class="xl:text-2xl  font-bold text-[#180D39] pb-3">$1,876,580</p>
          </div>
          <div class="text-sm text-[#180D39] cursor-pointer hover:text-gray-800">
            6 Months ▼
          </div>
          </div>
          <div class="md:w-[490px] w-[160px] md:h-[230px] h-[120px] md:pl-6">
            <Line :data="chartData" :options="chartOptions"   />
          </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>