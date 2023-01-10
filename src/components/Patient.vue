<template>
  <div class="mx-auto px-2 lg:px-4 py-4 min-h-[calc(100vh-80px)]">
    <div class="bg-white p-6 rounded-md">
      <div class="flex flex-row justify-between">
        <h3 class="text-[#FF5200] text-2xl font-semibold">Patient List</h3>
        <div class="flex flex-row items-center space-x-7">
          <div>
            <router-link
              to="/add-new-staf"
              class="bg-[#FF5200] text-white text-xs rounded-md px-8 py-3 border-b-2 hover:opacity-80"
            >
              + Add New Patient
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
                  class="px-10 py-3 border-b-2 border-gray-200 text-left text-sm font-bold text-[#25282B]"
                >
                  ID
                </th>
                <th
                  class="px-10 py-3 border-b-2 border-gray-200 text-left text-sm font-bold text-[#25282B]"
                >
                  Name
                </th>
                <th
                  class="px-10 py-3 border-b-2 border-gray-200 text-left text-sm font-bold text-[#25282B]"
                >
                  Gender
                </th>
                <th
                  class="px-10 py-3 border-b-2 border-gray-200 text-left text-sm font-bold text-[#25282B]"
                >
                  Date Check in
                </th>
                <th
                  class="px-10 py-3 border-b-2 border-gray-200 text-left text-sm font-bold text-[#25282B]"
                >
                  Doctor Assigned
                </th>
                <th
                  class="px-10 py-3 border-b-2 border-gray-200 text-left text-sm font-bold text-[#25282B]"
                >
                  Disease
                </th>
                <th
                  class="px-10 py-3 border-b-2 border-gray-200 text-left text-sm font-bold text-[#25282B]"
                >
                  Status
                </th>
                <th
                  class="px-10 py-3 border-b-2 border-gray-200 text-left text-sm font-bold text-[#25282B]"
                >
                  Ward No.
                </th>
                <th
                  class="px-10 py-3 border-b-2 border-gray-200 text-left text-sm font-bold text-[#25282B]"
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr :key="patient.patientId" v-for="patient in allPatients">
                <td class="pl-10 py-5 border-t border-gray-200 text-sm">
                  <p class="text-[#52575C] font-semibold whitespace-no-wrap">
                    {{ patient.patientId }}
                  </p>
                </td>
                <td class="pl-10 border-t border-gray-200 text-sm">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 w-10 h-10">
                      <img
                        class="w-full h-full object-cover rounded-full"
                        :src="patient.image"
                        alt=""
                      />
                    </div>
                    <div class="ml-4">
                      <p class="text-[#52575C] whitespace-no-wrap">
                        {{ patient.name }}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="pl-10 py-5 border-t border-gray-200 text-sm">
                  <p class="text-[#52575C] whitespace-no-wrap">
                    {{ patient.gender }}
                  </p>
                </td>
                <td class="pl-10 py-5 border-t border-gray-200 text-sm">
                  <p class="text-[#52575C] font-semibold whitespace-no-wrap">
                    {{ patient.dateCheckedIn }}
                  </p>
                </td>
                <td class="pl-10 py-5 border-t border-gray-200 text-sm">
                  <p class="text-[#52575C] font-semibold whitespace-no-wrap">
                    {{ patient.doctorAssigned }}
                  </p>
                </td>
                <td class="pl-10 py-5 border-t border-gray-200 text-sm">
                  <p class="text-[#52575C] font-semibold whitespace-no-wrap">
                    {{ patient.disease }}
                  </p>
                </td>
                <td class="pl-10 py-5 border-t border-gray-200 text-sm">
                  <p
                    class="font-semibold whitespace-no-wrap"
                    :class="[
                      patient.status === 'Admitted'
                        ? 'text-[#25B922] '
                        : patient.status === 'Discharged'
                        ? 'text-[#DA70FF]'
                        : patient.status === 'BID'
                        ? 'text-[#011D7E]'
                        : patient.status === 'Absconded'
                        ? 'text-[#FF8328]'
                        : '',
                    ]"
                  >
                    {{ patient.status }}
                  </p>
                </td>
                <td class="pl-10 py-5 border-t border-gray-200 text-sm">
                  <p class="text-[#52575C] font-semibold whitespace-no-wrap">
                    {{ patient.wardNumber }}
                  </p>
                </td>
                <td class="py-5 border-t border-gray-200 text-sm">
                  <PatientSummaryIcon />
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
import PatientSummaryIcon from "@/components/icons/PatientSummaryIcon.vue";
export default {
  name: "Patient",
  components: {
    PatientSummaryIcon,
  },
  data() {
    return {
      allPatients: [],
    };
  },

  created() {
    this.allPatients = [
      {
        patientId: "#SB1099",
        image: "https://lawal-akande.netlify.app/images/profilepic.jpeg",
        name: "Leslie Alexander",
        gender: "Female",
        dateCheckedIn: "10/10/2020",
        doctorAssigned: "Dr. Hallow",
        disease: "Diabetes",
        status: "Admitted",
        wardNumber: "B-101",
      },
      {
        patientId: "#SB1093",
        image: "https://lawal-akande.netlify.app/images/profilepic.jpeg",
        name: "Ronald Richards",
        gender: "Male",
        dateCheckedIn: "10/10/2020",
        doctorAssigned: "Dr. Dave Thompson",
        disease: "Diabetes",
        status: "Discharged",
        wardNumber: "B-101",
      },
      {
        patientId: "#SB1092",
        image: "https://lawal-akande.netlify.app/images/profilepic.jpeg",
        name: "Jane Cooper",
        gender: "Male",
        dateCheckedIn: "10/10/2020",
        doctorAssigned: "Dr. Dave Harries",
        disease: "Diabetes",
        status: "BID",
        wardNumber: "B-101",
      },
      {
        patientId: "#SB1092",
        image: "https://lawal-akande.netlify.app/images/profilepic.jpeg",
        name: "Robert Fox",
        gender: "Male",
        dateCheckedIn: "10/10/2020",
        doctorAssigned: "Dr. Solanke",
        disease: "Diabetes",
        status: "Absconded",
        wardNumber: "B-101",
      },
      {
        patientId: "#SB1092",
        image: "https://lawal-akande.netlify.app/images/profilepic.jpeg",
        name: "Jenny Wilson",
        gender: "Male",
        dateCheckedIn: "10/10/2020",
        doctorAssigned: "Dr. Solanke",
        disease: "Diabetes",
        status: "Absconded",
        wardNumber: "B-101",
      },
    ];
  },
};
</script>
