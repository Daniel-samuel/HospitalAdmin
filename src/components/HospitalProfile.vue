<template>
  <div
    class="w-full md:w-4/12 bg-white border-b-2 rounded-lg p-6 col-span-2 md:col-span-1"
  >
    <h3 class="text-[#FF5200] text-md mb-8 font-semibold">Hospital Profile</h3>
    <div>
      <div class="flex flex-col space-y-4">
        <div>
          <p class="text-base text-[#25282B]">Hospital Name</p>
          <p class="text-sm text-[#52575C]">{{ hospital.name }}</p>
        </div>
        <div>
          <p class="text-base text-[#25282B]">Address</p>
          <p class="text-sm text-[#52575C]">
            {{ hospital.address }}
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
    async queryHospital() {
      const viewHospitalId = localStorage.getItem("hospital");
      await this.$store.dispatch("query", {
        payload: { viewHospitalId },
        endpoint: "viewHospital",
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
    this.hospital = this.getHospital;
    console.log(
      typeof this.hospital,
      typeof this.getHospital,
      this.hospital.name
    );
  },
};
</script>
