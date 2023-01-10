<template>
  <div class="min-w-[350px] md:min-w-[800px] flex flex-col space-y-4 md:px-4">
    <h3 class="text-[#FF5200] text-2xl font-semibold">Hospital Details</h3>
    <div class="flex flex-row justify-between">
      <p class="font-bold text-md">Hospital Name</p>
      <p class="font-bold text-md text-[#52575C]">Reddington Hospital</p>
    </div>
    <div class="text-[#E8E8E8]">
      <hr />
    </div>
    <div class="flex flex-row justify-between">
      <p class="font-bold text-md">Address</p>
      <p class="font-bold text-md text-[#52575C]">
        8, Olajide Jibowu Street, Baruwa Bus stop, Lagos
      </p>
    </div>
    <div class="text-[#E8E8E8]">
      <hr />
    </div>
    <div class="flex flex-row justify-between">
      <p class="font-bold text-md">No. of Departments</p>
      <p class="font-bold text-md text-[#52575C]">23</p>
    </div>
    <div class="flex flex-row justify-between">
      <p class="font-bold text-md">Doctor Count</p>
      <p class="font-bold text-md text-[#52575C]">10</p>
    </div>
    <div class="flex flex-row justify-between">
      <p class="font-bold text-md">Nurse Count</p>
      <p class="font-bold text-md text-[#52575C]">10</p>
    </div>
    <div class="flex flex-row justify-between">
      <p class="font-bold text-md">Other Medical Personnel</p>
      <p class="font-bold text-md text-[#52575C]">23</p>
    </div>
    <div class="text-[#E8E8E8]">
      <hr />
    </div>
    <div class="flex flex-row justify-between">
      <p class="font-bold text-md">License number</p>
      <p class="font-bold text-md text-[#52575C]">XE2033JK</p>
    </div>
    <div class="text-[#E8E8E8]">
      <hr />
    </div>
    <p class="font-bold text-md">Hospital Facility Images</p>
    <div class="grid grid-cols-2  md:grid-cols-4">
      <div class="">
        <img src="../assets/images/image_13.png" class="w-44 h-44 rounded-xl object-cover" alt="">
      </div>
      <div class="">
        <img src="../assets/images/image_14.png" class="w-44 h-44 rounded-xl object-cover" alt="">
      </div>
      <div class="">
        <img src="../assets/images/image_15.png" class="w-44 h-44 rounded-xl object-cover" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popup",
  props: ["TogglePopup"],
};
</script>
