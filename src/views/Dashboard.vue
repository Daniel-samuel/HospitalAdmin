<template>
  <div class="w-screen flex flex-row">
    <Sidebar />
    <div class="h-full w-full bg-[#F6F8FB]">
      <MainContent />
    </div>
  </div>
</template>

<script>
import Sidebar from "./Admin/Sidebar.vue";
import MainContent from "./Admin/MainContent.vue";
import MainDashboard from "./Admin/MainDashboard.vue";
import PatientSummary from "./Admin/PatientSummary.vue";
export default {
  name: "Dashboard",
  components: {
    Sidebar,
    MainContent,
    MainDashboard,
    PatientSummary,
  },
  data() {
    return {
      showSidebar: true,
    };
  },

  methods: {
    // hide and show sidebar on medium screen
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
  },
};
</script>
