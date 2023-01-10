<template>
  <div class="hidden sticky top-0 h-screen lg:block w-[100px] text-white">
    <div class="flex flex-col items-center justify-center text-center">
      <div class="h-[200px] flex items-center">
        <router-link to="/dashboard">
          <img src="../../assets/images/turbomedics-logo.png" alt="" />
        </router-link>
      </div>
      <div class="space-y-1">
        <!-- Dashboard icon -->
        <div class="w-[100px]">
          <div class="flex items-center justify-between" v-if="showWhiteIcon">
            <span></span>
            <router-link to="/dashboard">
              <img
                src="../../assets/icons/dashboard_white_icon.svg"
                :class="[
                  $route.path.includes('/dashboard')
                    ? 'p-4 bg-[#FF5200] rounded-md'
                    : 'p-4',
                ]"
                alt=""
              />
            </router-link>
            <span>
              <img src="../../assets/icons/sidebar_border_right.svg" alt="" />
            </span>
          </div>
          <div class="flex justify-center" v-else>
            <router-link to="/dashboard">
              <img
                src="../../assets/icons/dashboard_gray_icon.svg"
                class="p-4"
                alt=""
              />
            </router-link>
          </div>
        </div>

        <!-- staf list icon -->
        <div class="w-[100px]">
          <div
            class="flex items-center justify-between"
            v-if="showProfileWhiteIcon"
          >
            <span></span>
            <router-link to="/staf-list">
              <img
                src="../../assets/icons/profile_white_icon.svg"
                :class="[
                  $route.path.includes('staf-list')
                    ? 'p-4 bg-[#FF5200] rounded-md'
                    : 'p-4',
                ]"
                alt=""
              />
            </router-link>
            <span>
              <img src="../../assets/icons/sidebar_border_right.svg" alt="" />
            </span>
          </div>
          <div class="flex justify-center" v-else>
            <router-link to="/staf-list">
              <img src="../../assets/icons/profil.svg" class="p-4" alt="" />
            </router-link>
          </div>
        </div>

        <!-- Department icon -->
        <!-- <div class="w-[100px]">
          <div
            class="flex items-center justify-between"
            v-if="showDepartmentWhiteIcon"
          >
            <span></span>
            <router-link to="/department">
              <img
                src="../../assets/icons/department-icon.svg"
                :class="[
                  $route.path.includes('department')
                    ? 'p-4 bg-[#FF5200] rounded-md'
                    : 'p-4',
                ]"
                alt=""
              />
            </router-link>
            <span>
              <img src="../../assets/icons/sidebar_border_right.svg" alt="" />
            </span>
          </div>
          <div class="flex justify-center" v-else>
            <router-link to="/department">
              <img
                src="../../assets/icons/department-icon.svg"
                class="p-4"
                alt=""
              />
            </router-link>
          </div>
        </div> -->

        <!-- Patient icon -->
        <div class="w-[100px]">
          <div
            class="flex items-center justify-between"
            v-if="showPatientWhiteIcon"
          >
            <span></span>
            <router-link to="/patient">
              <img
                src="../../assets/icons/patient-icon.svg"
                :class="[
                  $route.path.includes('patient')
                    ? 'p-4 bg-[#FF5200] rounded-md'
                    : 'p-4',
                ]"
                alt=""
              />
            </router-link>
            <span>
              <img src="../../assets/icons/sidebar_border_right.svg" alt="" />
            </span>
          </div>
          <div class="flex justify-center" v-else>
            <router-link to="/patient">
              <img
                src="../../assets/icons/patient-icon.svg"
                class="p-4"
                alt=""
              />
            </router-link>
          </div>
        </div>


        <!-- approval icon -->
        <!-- <div class="w-[100px]">
          <div
            class="flex items-center justify-between"
            v-if="showApprovalWhiteIcon"
          >
            <span></span>
            <router-link to="/approval">
              <img
                src="../../assets/icons/approval-icon.svg"
                :class="[
                  $route.path.includes('approval')
                    ? 'p-4 bg-[#FF5200] rounded-md'
                    : 'p-4',
                ]"
                alt=""
              />
            </router-link>
            <span>
              <img src="../../assets/icons/sidebar_border_right.svg" alt="" />
            </span>
          </div>
          <div class="flex justify-center" v-else>
            <router-link to="/approval">
              <img
                src="../../assets/icons/approval-icon.svg"
                class="p-4"
                alt=""
              />
            </router-link>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  computed: {
    showWhiteIcon() {
      return this.$route.path === "/dashboard";
    },

    showProfileWhiteIcon() {
      return this.$route.path === "/staf-list";
    },

    showDepartmentWhiteIcon() {
      return this.$route.path === "/department";
    },
    showPatientWhiteIcon() {
      return this.$route.path === "/patient";
    },
    showApprovalWhiteIcon() {
      return this.$route.path === "/approval";
    },
  },
};
</script>
