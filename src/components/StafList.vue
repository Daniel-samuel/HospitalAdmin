<template>
  <div class="w-full md:w-8/12">
    <div class="bg-white py-6 rounded-md border-b-2">
      <div class="flex flex-row justify-between px-10">
        <h3 class="text-[#FF5200] text-lg font-semibold">Staf List</h3>
        <div class="flex flex-row items-center space-x-7">
          <div>
            <router-link
              to="/add-new-staf"
              class="bg-[#FF5200] text-white text-xs rounded-md px-6 py-2 border-b-2 hover:opacity-80"
            >
              + Add New Staf
            </router-link>
          </div>
          <router-link
            to="/staf-list"
            class="text-xs text-[#686868] flex items-center space-x-4 hover:underline"
          >
            View all
          </router-link>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full">
          <div class="overflow-x-auto h-80 overflow-y-scroll relative">
            <table class="min-w-full table-collapse">
              <thead>
                <tr>
                  <th
                    class="px-10 py-3 border-b-2 border-gray-200 text-left text-xs font-bold text-[#25282B]"
                  >
                    Name
                  </th>
                  <th
                    class="px-10 py-3 border-b-2 border-gray-200 text-left text-xs font-bold text-[#25282B]"
                  >
                    Department
                  </th>
                  <th
                    class="px-10 py-3 border-b-2 border-gray-200 text-left text-xs font-bold text-[#25282B]"
                  >
                    Status
                  </th>
                  <th
                    class="px-10 py-3 border-b-2 border-gray-200 text-left text-xs font-bold text-[#25282B]"
                  >
                    Account
                  </th>
                  <th
                    class="px-10 py-3 border-b-2 border-gray-200 text-left text-xs font-bold text-[#25282B]"
                  ></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="Staff in doctors" :key="Staff._id">
                  <td class="px-10 border-t border-gray-200 bg-white text-sm">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 w-10 h-10">
                        <img
                          class="w-full h-full rounded-full"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                          alt=""
                        />
                      </div>
                      <div class="ml-4">
                        <p class="text-[#52575C] whitespace-no-wrap">
                          {{ Staff.name }}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-10 py-5 border-t border-gray-200 bg-white text-sm"
                  >
                    <p class="text-[#52575C] whitespace-no-wrap">
                      {{ Staff.category || "N/A" }}
                    </p>
                  </td>
                  <td
                    class="px-10 py-5 border-t border-gray-200 bg-white text-sm"
                  >
                    <p
                      class="font-semibold text-[#25B922] whitespace-no-wrap italic"
                    >
                      {{ Staff.status || "N/A" }}
                    </p>
                  </td>
                  <td
                    class="px-10 py-5 border-t border-gray-200 bg-white text-sm"
                  >
                    <select
                      id="professions"
                      class="w-fit bg-[#25B922] text-white border-b-2 text-sm rounded-lg block p-2"
                    >
                      <option value="activated" selected>Active</option>
                      <option value="desactivated">Desactivated</option>
                    </select>
                  </td>
                  <td
                    class="py-5 border-t border-gray-200 bg-white text-sm underline"
                  ></td>
                </tr>
              </tbody>
            </table>
          </div>
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
