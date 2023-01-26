<template>
  <div
    class="sticky top-0 z-20 h-[80px] bg-white py-6 px-2 lg:px-16 flex flex-row items-center justify-between"
  >
    <button id="menu-btn" class="block hamburger lg:hidden">
      <span class="hamburger-top"></span>
      <span class="hamburger-middle"></span>
      <span class="hamburger-bottom"></span>
    </button>
    <div
      class="w-44 flex flex-row items-center justify-between md:w-96 bg-[#F6F8FB] rounded-md py-3 px-3"
    >
      <div class="flex items-center">
        <img src="../../assets/icons/search_icon.svg" alt="" />
        <input
          type="text"
          name=""
          id=""
          class="bg-transparent focus:outline-0 px-3 bg-[#F6F8FB]"
          placeholder="Search"
        />
      </div>
      <div>
        <img
          src="../../assets/icons/submit_search_icon.svg"
          alt=""
          class="cursor-pointer"
        />
      </div>
    </div>
    <div class="flex flex-row items-center space-x-10">
      <div class="flex flex-row items-center space-x-10">
        <div class="hidden md:block text-lg font-bold">
          Welcome, Dr. {{ docname.name }}
        </div>
        <span class="bg-[#25B922] text-white border-b-2 rounded-3xl px-6 py-2"
          >Online</span
        >
      </div>
      <div>
        <img src="../../assets/icons/profile_pic.svg" alt="" />
      </div>
    </div>
  </div>
  <div>
    <div v-show="ShowMainDashboard">
      <MainDashboard />
    </div>
    <router-view></router-view>
  </div>
</template>

<script></script>
