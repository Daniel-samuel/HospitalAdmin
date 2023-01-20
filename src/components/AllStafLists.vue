<template>
  <div class="mx-auto px-2 lg:px-4 py-4 min-h-[calc(100vh-80px)]">
    <div class="bg-white p-6 rounded-md">
      <div class="flex flex-row justify-between">
        <h3 class="text-[#FF5200] text-2xl font-semibold">Staf List</h3>
        <div class="flex flex-row items-center space-x-7">
          <div>
            <router-link
              to="/add-new-staf"
              class="bg-[#FF5200] text-white text-xs rounded-md px-8 py-3 border-b-2 hover:opacity-80"
            >
              + Add New Staf
            </router-link>
          </div>
        </div>
      </div>

      <div
        class="grid grid-cols-9 grid-content-center gap-8 overflow-auto scrollbar-hide my-8"
      >
        <div
          class="rounded-lg cursor-pointer py-2 flex justify-center bg-[#25B922] text-[#fff]"
        >
          All
        </div>
        <div
          class="rounded-lg cursor-pointer py-2 border border-[#B7B7B7] flex justify-center text-[#25282B]"
        >
          Doctors
        </div>
        <div
          class="rounded-lg cursor-pointer py-2 border border-[#B7B7B7] flex justify-center text-[#25282B]"
        >
          Nurses
        </div>
        <div
          class="rounded-lg cursor-pointer py-2 border border-[#B7B7B7] flex justify-center text-[#25282B]"
        >
          Others
        </div>
      </div>

      <div class="w-full">
        <div class="overflow-x-auto relative">
          <table class="min-w-full table-collapse">
            <thead>
              <tr>
                <th
                  class="pl-5 py-3 border-b-2 border-gray-200 text-left text-sm font-bold text-[#25282B]"
                >
                  ID
                </th>
                <th
                  class="pl-5 py-3 border-b-2 border-gray-200 text-left text-sm font-bold text-[#25282B]"
                >
                  Full Name
                </th>
                <th
                  class="pl-5 py-3 border-b-2 border-gray-200 text-left text-sm font-bold text-[#25282B]"
                >
                  Role
                </th>
                <th
                  class="pl-5 py-3 border-b-2 border-gray-200 text-left text-sm font-bold text-[#25282B]"
                >
                  Email
                </th>
                <th
                  class="pl-5 py-3 border-b-2 border-gray-200 text-left text-sm font-bold text-[#25282B]"
                >
                  Phone
                </th>
                <th
                  class="pl-5 py-3 border-b-2 border-gray-200 text-left text-sm font-bold text-[#25282B]"
                >
                  Department
                </th>
                <th
                  class="pl-5 py-3 border-b-2 border-gray-200 text-left text-sm font-bold text-[#25282B]"
                >
                  Status
                </th>
                <th
                  class="pl-5 py-3 border-b-2 border-gray-200 text-left text-sm font-bold text-[#25282B]"
                >
                  Account
                </th>
                <th
                  class="pl-5 py-3 border-b-2 border-gray-200 text-left text-sm font-bold text-[#25282B]"
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="Staff in doctors" :key="Staff._id">
                <td class="pl-5 py-5 border-t border-gray-200 text-sm">
                  <p class="text-[#52575C] font-semibold whitespace-no-wrap">
                    <!-- {{}} -->
                  </p>
                </td>
                <td class="pl-5 border-t border-gray-200 text-sm">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 w-10 h-10">
                      <!-- <img
                        class="w-full h-full object-cover rounded-full"
                        :src="stafList.image"
                        alt=""
                      /> -->
                    </div>
                    <div class="ml-4">
                      <p class="text-[#52575C] whitespace-no-wrap">
                        {{ Staff.name }}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="pl-5 py-5 border-t border-gray-200 text-sm">
                  <p class="text-[#52575C] whitespace-no-wrap">
                    {{ Staff.category }}
                  </p>
                </td>
                <td class="pl-5 py-5 border-t border-gray-200 text-sm">
                  <p class="text-[#52575C] font-semibold whitespace-no-wrap">
                    {{ Staff.email }}
                  </p>
                </td>
                <td class="pl-5 py-5 border-t border-gray-200 text-sm">
                  <p class="text-[#52575C] font-semibold whitespace-no-wrap">
                    {{ Staff.contactPhone }}
                  </p>
                </td>
                <td class="pl-5 py-5 border-t border-gray-200 text-sm">
                  <p class="text-[#52575C] font-semibold whitespace-no-wrap">
                    {{ Staff.category }}
                  </p>
                </td>
                <td class="pl-5 py-5 border-t border-gray-200 text-sm">
                  <p
                    class="font-semibold whitespace-no-wrap italic"
                    :class="[
                      stafList.status === 'Online'
                        ? 'text-[#25B922] '
                        : stafList.status === 'Offline'
                        ? 'text-[#9D9D9D]'
                        : stafList.status === 'Away'
                        ? 'text-[#FF0000]'
                        : stafList.status === 'Break'
                        ? 'text-[#002092]'
                        : '',
                    ]"
                  >
                    <!-- {{ "" }} -->
                  </p>
                </td>
                <td class="pl-5 py-5 border-t border-gray-200 text-sm">
                  <select
                    id="professions"
                    class="w-fit border-b-2 text-sm rounded-lg block p-2"
                    :class="[
                      stafList.account === 'Activated'
                        ? 'bg-[#25B922] text-white'
                        : stafList.account === 'Desactivated'
                        ? 'bg-[#F9F9F9] text-[#9D9D9D]'
                        : '',
                    ]"
                  >
                    <option value="activated" selected>
                      <!-- {{ "" }} -->
                    </option>
                    <option value="desactivated">Desactivated</option>
                  </select>
                </td>
                <td
                  class="pl-5 py-5 border-t border-gray-200 text-sm underline"
                >
                  <!-- {{ "" }} -->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <script>
export default {
  name: "AllStafLists",
  data() {
    return {
      stafLists: [],
    };
  },

  created() {
    this.stafLists = [
      {
        stafId: "#SB1099",
        image: "https://lawal-akande.netlify.app/images/profilepic.jpeg",
        name: "Lawal Saliou Akande",
        department: "Obs & Gyn",
        status: "Online",
        account: "Activated",
        query: "Query",
        email: "lawalsaliou@gmail.com",
        role: "Doctor",
        phoneNumber: "(+234) 813 392 3833",
      },
      {
        stafId: "#SB1094",
        image:
          "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg",
        name: "Leslie Alexander",
        department: "Paediatrics",
        status: "Offline",
        account: "Deactivated",
        query: "Query",
        email: "danieleloma@gmail.com",
        role: "Nurse",
        phoneNumber: "(+234) 813 392 3833",
      },
      {
        stafId: "#SB1093",
        image:
          "https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?b=1&s=170667a&w=0&k=20&c=TXCiY7rYEvIBd6ibj2bE-VbJu0rRGy3MlHwxt2LHt9w=",
        name: "Ronald Richards",
        department: "General Surgery",
        status: "Break",
        account: "Activated",
        query: "Query",
        email: "danieleloma@gmail.com",
        role: "Doctor",
        phoneNumber: "(+234) 813 392 3833",
      },
      {
        stafId: "#SB1092",
        image:
          "https://cdnsite1.assist.ro/sites/default/files/styles/big/public/images/blog/A%20Beginner%60s%20Intro%20to%20Vue%202-ASSIST-Software.jpg?itok=0fzXIYP3",
        name: "Ronald Richards",
        department: "Anesthesiology",
        status: "Break",
        account: "Activated",
        query: "Query",
        email: "danieleloma@gmail.com",
        role: "Doctor",
        phoneNumber: "(+234) 813 392 3833",
      },
      {
        stafId: "#SB1092",
        image:
          "https://cdnsite1.assist.ro/sites/default/files/styles/big/public/images/blog/A%20Beginner%60s%20Intro%20to%20Vue%202-ASSIST-Software.jpg?itok=0fzXIYP3",
        name: "Ronald Richards",
        department: "Anesthesiology",
        status: "Break",
        account: "Activated",
        query: "Query",
        email: "danieleloma@gmail.com",
        role: "Doctor",
        phoneNumber: "(+234) 813 392 3833",
      },
      {
        stafId: "#SB1092",
        image:
          "https://cdnsite1.assist.ro/sites/default/files/styles/big/public/images/blog/A%20Beginner%60s%20Intro%20to%20Vue%202-ASSIST-Software.jpg?itok=0fzXIYP3",
        name: "Ronald Richards",
        department: "Anesthesiology",
        status: "Break",
        account: "Activated",
        query: "Query",
        email: "danieleloma@gmail.com",
        role: "Doctor",
        phoneNumber: "(+234) 813 392 3833",
      },
      {
        stafId: "#SB1092",
        image:
          "https://cdnsite1.assist.ro/sites/default/files/styles/big/public/images/blog/A%20Beginner%60s%20Intro%20to%20Vue%202-ASSIST-Software.jpg?itok=0fzXIYP3",
        name: "Ronald Richards",
        department: "Anesthesiology",
        status: "Break",
        account: "Activated",
        query: "Query",
        email: "danieleloma@gmail.com",
        role: "Doctor",
        phoneNumber: "(+234) 813 392 3833",
      },
      {
        stafId: "#SB1092",
        image:
          "https://cdnsite1.assist.ro/sites/default/files/styles/big/public/images/blog/A%20Beginner%60s%20Intro%20to%20Vue%202-ASSIST-Software.jpg?itok=0fzXIYP3",
        name: "Ronald Richards",
        department: "Anesthesiology",
        status: "Break",
        account: "Activated",
        query: "Query",
        email: "danieleloma@gmail.com",
        role: "Doctor",
        phoneNumber: "(+234) 813 392 3833",
      },
      {
        stafId: "#SB1092",
        image:
          "https://cdnsite1.assist.ro/sites/default/files/styles/big/public/images/blog/A%20Beginner%60s%20Intro%20to%20Vue%202-ASSIST-Software.jpg?itok=0fzXIYP3",
        name: "Ronald Richards",
        department: "Anesthesiology",
        status: "Break",
        account: "Activated",
        query: "Query",
        email: "danieleloma@gmail.com",
        role: "Doctor",
        phoneNumber: "(+234) 813 392 3833",
      },
      {
        stafId: "#SB1092",
        image:
          "https://cdnsite1.assist.ro/sites/default/files/styles/big/public/images/blog/A%20Beginner%60s%20Intro%20to%20Vue%202-ASSIST-Software.jpg?itok=0fzXIYP3",
        name: "Ronald Richards",
        department: "Anesthesiology",
        status: "Break",
        account: "Activated",
        query: "Query",
        email: "danieleloma@gmail.com",
        role: "Doctor",
        phoneNumber: "(+234) 813 392 3833",
      },
      {
        stafId: "#SB1092",
        image:
          "https://cdnsite1.assist.ro/sites/default/files/styles/big/public/images/blog/A%20Beginner%60s%20Intro%20to%20Vue%202-ASSIST-Software.jpg?itok=0fzXIYP3",
        name: "Ronald Richards",
        department: "Anesthesiology",
        status: "Break",
        account: "Activated",
        query: "Query",
        email: "danieleloma@gmail.com",
        role: "Doctor",
        phoneNumber: "(+234) 813 392 3833",
      },
      {
        stafId: "#SB1092",
        image:
          "https://cdnsite1.assist.ro/sites/default/files/styles/big/public/images/blog/A%20Beginner%60s%20Intro%20to%20Vue%202-ASSIST-Software.jpg?itok=0fzXIYP3",
        name: "Ronald Richards",
        department: "Anesthesiology",
        status: "Break",
        account: "Activated",
        query: "Query",
        email: "danieleloma@gmail.com",
        role: "Doctor",
        phoneNumber: "(+234) 813 392 3833",
      },
      {
        stafId: "#SB1092",
        image:
          "https://cdnsite1.assist.ro/sites/default/files/styles/big/public/images/blog/A%20Beginner%60s%20Intro%20to%20Vue%202-ASSIST-Software.jpg?itok=0fzXIYP3",
        name: "Ronald Richards",
        department: "Anesthesiology",
        status: "Break",
        account: "Activated",
        query: "Query",
        email: "danieleloma@gmail.com",
        role: "Doctor",
        phoneNumber: "(+234) 813 392 3833",
      },
      {
        stafId: "#SB1092",
        image:
          "https://cdnsite1.assist.ro/sites/default/files/styles/big/public/images/blog/A%20Beginner%60s%20Intro%20to%20Vue%202-ASSIST-Software.jpg?itok=0fzXIYP3",
        name: "Ronald Richards",
        department: "Anesthesiology",
        status: "Break",
        account: "Activated",
        query: "Query",
        email: "danieleloma@gmail.com",
        role: "Doctor",
        phoneNumber: "(+234) 813 392 3833",
      },
      {
        stafId: "#SB1092",
        image:
          "https://cdnsite1.assist.ro/sites/default/files/styles/big/public/images/blog/A%20Beginner%60s%20Intro%20to%20Vue%202-ASSIST-Software.jpg?itok=0fzXIYP3",
        name: "Ronald Richards",
        department: "Anesthesiology",
        status: "Break",
        account: "Activated",
        query: "Query",
        email: "danieleloma@gmail.com",
        role: "Doctor",
        phoneNumber: "(+234) 813 392 3833",
      },
    ];
  },
};
</script> -->
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
