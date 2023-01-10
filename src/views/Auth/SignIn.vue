<template>
  <div class="bg-white h-screen flex items-center">
    <!-- form -->
    <div class="w-full lg:w-1/2 px-8 md:px-32">
      <div
        class="flex flex-col gap-8 md:flex-row items-center justify-center md:justify-between mb-16"
      >
        <TurbomedicsHospitalAdinLogoIcon />
        <div>
          <!-- <ul
            class="flex list-none flex-wrap flex-row items-center bg-[#FF5200] rounded-md px-2"
          >
            <li class="text-center">
              <a
                class="text-xs font-bold px-2 my-2 mx-2 block leading-normal cursor-pointer"
                @click="toggleTabs(1)"
                :class="{
                  'text-white': openTab !== 1,
                  'bg-white text-[#323232] rounded-md px-3 py-1': openTab === 1,
                }"
              >
                Doctors
              </a>
            </li>
            <li class="text-center">
              <a
                class="text-xs font-bold px-2 my-2 mx-2 block leading-normal cursor-pointer"
                @click="toggleTabs(2)"
                :class="{
                  'text-white': openTab !== 2,
                  'bg-white text-[#323232] rounded-md px-3 py-1': openTab === 2,
                }"
              >
                Nurses
              </a>
            </li>
            <li class="text-center">
              <a
                class="text-xs font-bold px-2 my-2 mx-2 block leading-normal cursor-pointer"
                @click="toggleTabs(3)"
                :class="{
                  'text-white': openTab !== 3,
                  'bg-white text-[#323232] rounded-md px-3 py-1': openTab === 3,
                }"
              >
                Admin
              </a>
            </li>
          </ul> -->
        </div>
      </div>
      <h2
        class="font-DuplicateSans font-semibold text-md md:text-3xl text-[#000000]"
      >
        Login to your account
      </h2>

      <!-- hospital doctors sign in -->
      <div :class="{ hidden: openTab !== 1, block: openTab === 1 }">
        <SignInHospitalDoctor />
      </div>

      <!-- hospital nurses sign in
      <div :class="{ hidden: openTab !== 2, block: openTab === 2 }">
        <SignInHospitalNurse />
      </div>

      hospital admin sign in
      <div :class="{ hidden: openTab !== 3, block: openTab === 3 }">
        <SignInHospitalAdmin />
      </div> -->
    </div>
    <div class="hidden relative lg:w-1/2 lg:block right-bg-img">
      <div
        class="absolute inset-x-0 mx-auto max-w-xl bottom-8 bg-[#f19e77] bg-opacity-30 backdrop-blur-md border border-[#F3F3F3] py-3 px-8 rounded-md"
      >
        <div class="font-bold text-lg">01</div>
        <br />
        <div class="text-xl font-medium max-w-md mb-4">
          Simplify the day-to-day operations of your employees and increase the
          flow of patients
        </div>
        <div class="flex flex-row justify-between items-center">
          <div>
            <img src="../../assets/icons/Scroll-icons.svg" alt="" />
          </div>
          <div class="flex flex-row space-x-4 items-center">
            <img
              src="../../assets/icons/Prev-button.svg"
              class="cursor-pointer"
              alt=""
            />
            <img
              src="../../assets/icons/Next-button.svg"
              class="cursor-pointer"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TurbomedicsHospitalAdinLogoIcon from "@/components/icons/TurbomedicsHospitalAdinLogoIcon.vue";
import SignInHospitalDoctor from "./SignInHospitalDoctor.vue";
import SignInHospitalNurse from "./SignInHospitalNurse.vue";
import SignInHospitalAdmin from "./SignInHospitalAdmin.vue";

export default defineComponent({
  name: "SignIn",
  components: {
    TurbomedicsHospitalAdinLogoIcon,
    SignInHospitalDoctor,
    SignInHospitalNurse,
    SignInHospitalAdmin,
  },
  data() {
    return {
      openTab: 1,
    };
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
  },
});
</script>
