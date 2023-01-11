<template>
  <div class="grid grid-cols-2 xl:grid-cols-4 gap-8 mb-8">
    <div
      class="flex flex-row items-center justify-center space-x-4 bg-white rounded-md p-2 md:p-5"
    >
      <TotalDoctorsIcon />
      <div>
        <p class="text-sm">Active Doctors</p>
        <p class="text-xl font-semibold">{{ getDoctors.length }}</p>
      </div>
    </div>
    <div
      class="flex flex-row items-center justify-center space-x-4 bg-white rounded-md p-2 md:p-5"
    >
      <TotalNursesIcon />
      <div>
        <p class="text-sm">Active Nurses</p>
        <p class="text-xl font-semibold">{{ getNurses.length }}</p>
      </div>
    </div>
    <div
      class="flex flex-row items-center justify-center space-x-4 bg-white rounded-md p-2 md:p-5"
    >
      <TotalPatientsIcon />
      <div>
        <p class="text-sm">Active Patients</p>
        <p class="text-xl font-semibold">210</p>
      </div>
    </div>
    <div
      class="flex flex-row items-center justify-center space-x-4 bg-white rounded-md p-2 md:p-5"
    >
      <NewPatientsIcon />
      <div>
        <p class="text-sm">Pharmacist</p>
        <p class="text-xl font-semibold">10</p>
      </div>
    </div>
    <div
      class="flex flex-row items-center justify-center space-x-4 bg-white rounded-md p-2 md:p-5"
    >
      <TotalDoctorsIcon />
      <div>
        <p class="text-sm">Accountant</p>
        <p class="text-xl font-semibold">10</p>
      </div>
    </div>
    <div
      class="flex flex-row items-center justify-center space-x-4 bg-white rounded-md p-2 md:p-5"
    >
      <TotalNursesIcon />
      <div>
        <p class="text-sm">Receptionist</p>
        <p class="text-xl font-semibold">10</p>
      </div>
    </div>
    <div
      class="flex flex-row items-center justify-center space-x-4 bg-white rounded-md p-2 md:p-5"
    >
      <TotalPatientsIcon />
      <div>
        <p class="text-sm">Lab Technician</p>
        <p class="text-xl font-semibold">210</p>
      </div>
    </div>
  </div>
</template>

<script>
import TotalPatientsIcon from "@/components/icons/TotalPatientsIcon.vue";
import NewPatientsIcon from "@/components/icons/NewPatientsIcon.vue";
import TotalDoctorsIcon from "@/components/icons/TotalDoctorsIcon.vue";
import TotalNursesIcon from "@/components/icons/TotalNursesIcon.vue";
import { mapGetters } from "vuex";

export default {
  name: "PatientSummary",
  components: {
    TotalPatientsIcon,
    NewPatientsIcon,
    TotalDoctorsIcon,
    TotalNursesIcon,
  },
  computed: {
    ...mapGetters(["getDoctors", "getNurses"]),
  },
  methods: {
    async queryDoctors() {
      await this.$store.dispatch("query", {
        endpoint: "listHospitalAdminCreateDoctor",
        storeKey: "doctors",
      });
    },

    async queryNurses() {
      await this.$store.dispatch("query", {
        endpoint: "listHospitalAdminCreateNurse",
        storeKey: "nurses",
      });
    },
  },
  async created() {
    await this.queryDoctors();
    await this.queryNurses();
    console.log(this.getDoctors, "DOCS", this.$store.state.data.doctors);
  },
};
</script>
