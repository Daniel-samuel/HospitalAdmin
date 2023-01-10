<template>
  <div class="relative">
    <div
      class="relative inset-0 w-full min-h-screen md:fixed xl:w-1/2 overflow-auto scrollbar-hide px-2 md:px-28 py-10"
    >
      <div
        class="flex flex-col gap-8 md:flex-row items-center justify-center md:justify-between mb-16"
      >
        <TurbomedicsAdinLogoIcon />
      </div>
      <h2
        class="font-DuplicateSans font-semibold text-md md:text-3xl text-[#000000]"
      >
        Create an account
      </h2>
      <div class="flex flex-col w-full">
        <form action="">
          <Transition :duration="550">
            <div class="mt-4">
              <div class="mt-4">
                <label class="text-[#9A9A9A] font-medium text-sm" for="Hospital"
                  >Hospital Name</label
                ><br />
                <input
                  class="font-DuplicateSans w-full bg-[#fff] py-1 pl-6 mt-1 rounded-md border border-[#9A9A9A] text-[#959595] focus:outline-none focus:border-[#FF5200] focus:ring-0"
                  type="email"
                  name="email"
                  placeholder="Enter your hospital name"
                />
              </div>
              <div class="mt-4">
                <label class="text-[#9A9A9A] font-medium text-sm" for="Address"
                  >Address</label
                ><br />
                <input
                  class="font-DuplicateSans w-full bg-[#fff] py-1 pl-6 mt-1 rounded-md border border-[#9A9A9A] text-[#959595] focus:outline-none focus:border-[#FF5200] focus:ring-0"
                  type="email"
                  name="email"
                  placeholder="Enter your Address"
                />
              </div>
              <div class="mt-4">
                <label
                  class="text-[#9A9A9A] font-medium text-sm"
                  for="License Number"
                  >License Number</label
                ><br />
                <input
                  class="font-DuplicateSans w-full bg-[#fff] py-1 pl-6 mt-1 rounded-md border border-[#9A9A9A] text-[#959595] focus:outline-none focus:border-[#FF5200] focus:ring-0"
                  type="email"
                  name="email"
                  placeholder="Enter your licence number"
                />
              </div>
              <div class="mt-4">
                <label class="text-[#9A9A9A] font-medium text-sm" for="email"
                  >Email</label
                ><br />
                <input
                  class="font-DuplicateSans w-full bg-[#fff] py-1 pl-6 mt-1 rounded-md border border-[#9A9A9A] text-[#959595] focus:outline-none focus:border-[#FF5200] focus:ring-0"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div class="">
                  <label
                    class="text-[#9A9A9A] font-medium text-sm"
                    for="DepartmentCount"
                    >Department Count</label
                  ><br />
                  <input
                    class="font-DuplicateSans w-full bg-[#fff] py-1 px-2 mt-1 rounded-md border border-[#9A9A9A] text-[#959595] focus:outline-none focus:border-[#FF5200] focus:ring-0"
                    type="text"
                    name="Department Count"
                  />
                </div>
                <div class="">
                  <label
                    class="text-[#9A9A9A] font-medium text-sm"
                    for="DepartmentCount"
                    >Doctor Count</label
                  ><br />
                  <input
                    class="font-DuplicateSans w-full bg-[#fff] py-1 px-2 mt-1 rounded-md border border-[#9A9A9A] text-[#959595] focus:outline-none focus:border-[#FF5200] focus:ring-0"
                    type="text"
                    name="Doctor Count"
                  />
                </div>
                <div class="">
                  <label
                    class="text-[#9A9A9A] font-medium text-sm"
                    for="NurseCount"
                    >Nurse Count</label
                  ><br />
                  <input
                    class="font-DuplicateSans w-full bg-[#fff] py-1 px-2 mt-1 rounded-md border border-[#9A9A9A] text-[#959595] focus:outline-none focus:border-[#FF5200] focus:ring-0"
                    type="text"
                    name="Nurse Count"
                  />
                </div>
              </div>
              <div class="flex flex-row items-end mt-4">
                <div class="w-4/12">
                  <label
                    class="text-[#9A9A9A] font-medium text-sm"
                    for="NurseCount"
                    >Other Health Professionals</label
                  ><br />
                  <input
                    class="font-DuplicateSans w-full bg-[#fff] py-1 px-2 mt-1 rounded-md border border-[#9A9A9A] text-[#959595] focus:outline-none focus:border-[#FF5200] focus:ring-0"
                    type="text"
                    name="Nurse Count"
                  />
                </div>
                <div class="w-8/12">
                  <label
                    for="dropzone-file"
                    class="flex flex-row items-center justify-center w-full cursor-pointer"
                  >
                    <div class="flex flex-row space-x-4 items-center">
                      <UploadFilesOrangeIcon />
                      <p class="text-xs text-[#323232]">
                        <span class="text-[#FF5200] underline"
                          >Upload Image</span
                        >
                        <span class="underline"
                          >(Add up to 5 hospital facility images)</span
                        >
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                  </label>
                </div>
              </div>

              <button
                class="bg-[#FF5200] text-md rounded-md text-white mt-8 py-3 hover:scale-105 duration-300 w-full"
              >
                Sign up
              </button>
            </div>
          </Transition>
        </form>
      </div>
      <div class="w-full">
        <div class="mt-10 text-sm md:text-md text-center">
          <span class="text-[#959595]">Already have an account? </span
          ><router-link to="/signin" class="text-[#FF5200] hover:underline"
            >Sign in</router-link
          >
        </div>
        <div class="mt-10 text-xs md:text-sm text-center">
          <span class="text-[#FF5200]"
            >Privacy policy and Terms and Condition</span
          >
        </div>
      </div>
    </div>
    <div class="hidden xl:block w-full ml-auto md:w-1/2 right-bg-img">
      <div
        class="absolute inset-x-0 mx-auto max-w-xl bottom-8 -right-[700px] bg-[#f19e77] bg-opacity-30 backdrop-blur-md border border-[#F3F3F3] py-3 px-8 rounded-md"
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
import TurbomedicsAdinLogoIcon from "@/components/icons/TurbomedicsHospitalAdinLogoIcon.vue";
import SignInDoctor from "./SignInHospitalDoctor.vue";
import SignInNurse from "./SignInHospitalNurse.vue";
import SignIAdmin from "./SignInHospitalAdmin.vue";
import UploadFilesOrangeIcon from "@/components/icons/UploadFilesOrangeIcon.vue";

export default defineComponent({
  name: "SignUp",
  components: {
    TurbomedicsAdinLogoIcon,
    SignInDoctor,
    SignInNurse,
    SignIAdmin,
    UploadFilesOrangeIcon,
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
