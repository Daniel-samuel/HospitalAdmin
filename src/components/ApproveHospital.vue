<template>
  <div class="relative mx-auto px-2 lg:px-4 py-4 min-h-[calc(100vh-80px)]">
    <div class="bg-white p-6 rounded-md">
      <div class="flex flex-col justify-between space-y-4 my-8">
        <h3 class="text-[#FF5200] text-2xl font-semibold">Approval List</h3>
        <p>
          The following hospitals have applied to joined the
          <span class="text-[#FF5200]">TurboMedic</span> platform
        </p>
      </div>
      <Popupe
        v-if="popupTriggers.buttonTrigger"
        :TogglePopup="() => TogglePopup('buttonTrigger')"
      >
        <PopupModal @click="() => TogglePopup('buttonTrigger')" />
      </Popupe>
      <div class="w-full">
        <div class="overflow-x-auto relative">
          <table class="min-w-full table-collapse">
            <thead>
              <tr>
                <th
                  class="px-10 py-3 border-b-2 border-gray-200 text-left text-sm font-bold text-[#25282B]"
                >
                  No.
                </th>
                <th
                  class="px-10 py-3 border-b-2 border-gray-200 text-left text-sm font-bold text-[#25282B]"
                >
                  Hospital Name
                </th>
                <th
                  class="px-10 py-3 border-b-2 border-gray-200 text-left text-sm font-bold text-[#25282B]"
                >
                  Address
                </th>
                <th
                  class="px-10 py-3 border-b-2 border-gray-200 text-left text-sm font-bold text-[#25282B]"
                >
                  Departments
                </th>
                <th
                  class="px-10 py-3 border-b-2 border-gray-200 text-left text-sm font-bold text-[#25282B]"
                >
                  Doctor Count
                </th>
                <th
                  class="px-10 py-3 border-b-2 border-gray-200 text-left text-sm font-bold text-[#25282B]"
                >
                  Nurse Count
                </th>
                <th
                  class="px-10 py-3 border-b-2 border-gray-200 text-left text-sm font-bold text-[#25282B]"
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr
                :key="Hospital.HospitalNumber"
                v-for="Hospital in HospitalLists"
              >
                <td class="pl-10 py-5 border-t border-gray-200 text-sm">
                  <p class="text-[#52575C] font-semibold whitespace-no-wrap">
                    {{ Hospital.HospitalNumber }}.
                  </p>
                </td>
                <td class="pl-10 py-5 border-t border-gray-200 text-sm">
                  <p
                    class="text-[#52575C] whitespace-no-wrap underline cursor-pointer"
                    @click="() => TogglePopup('buttonTrigger')"
                  >
                    {{ Hospital.hospitalName }}
                  </p>
                </td>
                <td class="pl-10 py-5 border-t border-gray-200 text-sm">
                  <p class="text-[#52575C] font-semibold whitespace-no-wrap">
                    {{ Hospital.address }}
                  </p>
                </td>
                <td class="pl-10 py-5 border-t border-gray-200 text-sm">
                  <p class="text-[#52575C] font-semibold whitespace-no-wrap">
                    {{ Hospital.department }}
                  </p>
                </td>
                <td class="pl-10 py-5 border-t border-gray-200 text-sm">
                  <p class="text-[#52575C] font-semibold whitespace-no-wrap">
                    {{ Hospital.doctorCount }}
                  </p>
                </td>
                <td class="pl-10 py-5 border-t border-gray-200 text-sm">
                  <p class="text-[#52575C] font-semibold whitespace-no-wrap">
                    {{ Hospital.nurseCount }}
                  </p>
                </td>
                <td class="border-t border-gray-200 text-sm">
                  <div class="flex items-center space-x-4">
                    <button
                      class="bg-[#25B922] text-white rounded-xl px-6 py-2"
                    >
                      Approve
                    </button>
                    <button
                      class="border border-[#B7B7B7] text-[#FF0000] rounded-xl px-6 py-2"
                    >
                      Reject
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
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
      doctors: [],
    };
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
    this.doctors = this.getDoctors.concat(this.getNurses);
    console.log(this.doctors, "DOCS", this.$store.state.data.doctors);
  },
};
</script>
