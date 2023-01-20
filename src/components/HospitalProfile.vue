<template>
  <div
    class="w-full md:w-4/12 bg-white border-b-2 rounded-lg p-6 col-span-2 md:col-span-1"
  >
    <h3 class="text-[#FF5200] text-md mb-8 font-semibold">Hospital Profile</h3>
    <div v-for="hos in hospital" :key="hos._id" class="flex flex-col space-y-4">
      <div>
        <p class="text-base text-[#25282B]">Hospital Name</p>
        <p class="text-sm text-[#52575C]">{{ hos.name }}</p>
      </div>
      <div>
        <p class="text-base text-[#25282B]">Address</p>
        <p class="text-sm text-[#52575C]">
          {{ hos.address }}
        </p>
      </div>
      <div>
        <p class="text-base text-[#25282B]">Hospital License</p>
        <p class="text-sm text-[#52575C]">XXE445KLW/LGA/NG</p>
      </div>
      <div>
        <p class="text-base text-[#25282B]">About</p>
        <p class="text-sm text-[#52575C]">
          The Reddington Healthcare Group is renowned at home and abroad for
          medical excellence and attracts world-class specialist Doctors
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "StafList",
  props: {
    stafLists: Array,
  },
  // components: {
  //   TotalPatientsIcon,
  //   NewPatientsIcon,
  //   TotalDoctorsIcon,
  //   TotalNursesIcon,
  // },
  data() {
    return {
      hospital: [],
    };
  },
  computed: {
    ...mapGetters(["getHospital"]),
  },
  methods: {
    async queryDoctors() {
      await this.$store.dispatch("query", {
        endpoint: "listHospital",
        storeKey: "hospital",
      });
    },

    // async queryNurses() {
    //   await this.$store.dispatch("query", {
    //     endpoint: "listHospitalAdminCreateNurse",
    //     storeKey: "nurses",
    //   });
    // },
  },
  async created() {
    await this.queryHospital();
    // await this.queryNurses();
    this.hopital = this.getHospital;
    console.log(this.doctors, "DOCS", this.$store.state.data.doctors);
  },
};
</script>
