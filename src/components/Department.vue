<template>
  <div class="mx-auto px-2 lg:px-4 py-4 min-h-[calc(100vh-80px)]">
    <div class="bg-white p-6 rounded-md">
      <div class="flex flex-row justify-between">
        <h3 class="text-[#FF5200] text-2xl font-semibold">Department</h3>
        <div class="flex flex-row items-center space-x-7">
          <div>
            <router-link
              to="/add-new-staf"
              class="bg-[#FF5200] text-white text-xs rounded-md px-8 py-3 border-b-2 hover:opacity-80"
            >
              + Create department
            </router-link>
          </div>
        </div>
      </div>

      <div class="w-full my-8">
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
                  Department Name
                </th>
                <th
                  class="px-10 py-3 border-b-2 border-gray-200 text-left text-sm font-bold text-[#25282B]"
                >
                  Head of Department
                </th>
                <th
                  class="px-10 py-3 border-b-2 border-gray-200 text-left text-sm font-bold text-[#25282B]"
                >
                  Phone
                </th>
                <th
                  class="px-10 py-3 border-b-2 border-gray-200 text-left text-sm font-bold text-[#25282B]"
                >
                  Doctor Count
                </th>
                <th
                  class="px-10 py-3 border-b-2 border-gray-200 text-left text-sm font-bold text-[#25282B]"
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr :key="Department.stafId" v-for="Department in Departments">
                <td class="pl-10 py-5 border-t border-gray-200 text-sm">
                  <p class="text-[#52575C] font-semibold whitespace-no-wrap">
                    {{ Department.stafId }}
                  </p>
                </td>
                <td class="pl-10 py-5 border-t border-gray-200 text-sm">
                  <p class="text-[#52575C] whitespace-no-wrap">
                    {{ Department.departmentName }}
                  </p>
                </td>
                <td class="pl-10 py-5 border-t border-gray-200 text-sm">
                  <p class="text-[#52575C] whitespace-no-wrap">
                    {{ Department.headOfDepartment }}
                  </p>
                </td>
                <td class="pl-10 py-5 border-t border-gray-200 text-sm">
                  <p class="text-[#52575C] font-semibold whitespace-no-wrap">
                    {{ Department.phoneNumber }}
                  </p>
                </td>
                <td class="pl-10 py-5 border-t border-gray-200 text-sm">
                  <p class="text-[#52575C] font-semibold whitespace-no-wrap">
                    {{ Department.doctorCount }}
                  </p>
                </td>
                <td
                  class="py-5 border-t border-gray-200 text-sm underline"
                ></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Department",
  data() {
    return {
      Departments: [],
    };
  },

  created() {
    this.Departments = [
      {
        stafId: "#SB1099",
        departmentName: "Family Medicine",
        headOfDepartment: "Lawal Akande",
        phoneNumber: "(+234) 813 392 3833",
        doctorCount: 5,
      },
      {
        stafId: "#SB1099",
        departmentName: "Haematology",
        headOfDepartment: "Leslie Alexander",
        phoneNumber: "(+234) 813 392 3833",
        doctorCount: 4,
      },
      {
        stafId: "#SB1099",
        departmentName: "Haematology",
        headOfDepartment: "Leslie Alexander",
        phoneNumber: "(+234) 813 392 3833",
        doctorCount: 4,
      },
      {
        stafId: "#SB1099",
        departmentName: "Haematology",
        headOfDepartment: "Leslie Alexander",
        phoneNumber: "(+234) 813 392 3833",
        doctorCount: 4,
      },
      {
        stafId: "#SB1099",
        departmentName: "Haematology",
        headOfDepartment: "Leslie Alexander",
        phoneNumber: "(+234) 813 392 3833",
        doctorCount: 4,
      },
      {
        stafId: "#SB1099",
        departmentName: "Haematology",
        headOfDepartment: "Leslie Alexander",
        phoneNumber: "(+234) 813 392 3833",
        doctorCount: 4,
      },
      {
        stafId: "#SB1099",
        departmentName: "Haematology",
        headOfDepartment: "Leslie Alexander",
        phoneNumber: "(+234) 813 392 3833",
        doctorCount: 4,
      },
      {
        stafId: "#SB1099",
        departmentName: "Haematology",
        headOfDepartment: "Leslie Alexander",
        phoneNumber: "(+234) 813 392 3833",
        doctorCount: 4,
      },
      {
        stafId: "#SB1099",
        departmentName: "Haematology",
        headOfDepartment: "Leslie Alexander",
        phoneNumber: "(+234) 813 392 3833",
        doctorCount: 4,
      },
      {
        stafId: "#SB1099",
        departmentName: "Haematology",
        headOfDepartment: "Leslie Alexander",
        phoneNumber: "(+234) 813 392 3833",
        doctorCount: 4,
      },
      {
        stafId: "#SB1099",
        departmentName: "Haematology",
        headOfDepartment: "Leslie Alexander",
        phoneNumber: "(+234) 813 392 3833",
        doctorCount: 4,
      },
      {
        stafId: "#SB1099",
        departmentName: "Haematology",
        headOfDepartment: "Leslie Alexander",
        phoneNumber: "(+234) 813 392 3833",
        doctorCount: 4,
      },
      {
        stafId: "#SB1099",
        departmentName: "Haematology",
        headOfDepartment: "Leslie Alexander",
        phoneNumber: "(+234) 813 392 3833",
        doctorCount: 4,
      },
      {
        stafId: "#SB1099",
        departmentName: "Haematology",
        headOfDepartment: "Leslie Alexander",
        phoneNumber: "(+234) 813 392 3833",
        doctorCount: 4,
      },
      {
        stafId: "#SB1099",
        departmentName: "Haematology",
        headOfDepartment: "Leslie Alexander",
        phoneNumber: "(+234) 813 392 3833",
        doctorCount: 4,
      },
      {
        stafId: "#SB1099",
        departmentName: "Haematology",
        headOfDepartment: "Leslie Alexander",
        phoneNumber: "(+234) 813 392 3833",
        doctorCount: 4,
      },
      {
        stafId: "#SB1099",
        departmentName: "Haematology",
        headOfDepartment: "Leslie Alexander",
        phoneNumber: "(+234) 813 392 3833",
        doctorCount: 4,
      },
      {
        stafId: "#SB1099",
        departmentName: "Haematology",
        headOfDepartment: "Leslie Alexander",
        phoneNumber: "(+234) 813 392 3833",
        doctorCount: 4,
      },
      {
        stafId: "#SB1099",
        departmentName: "Haematology",
        headOfDepartment: "Leslie Alexander",
        phoneNumber: "(+234) 813 392 3833",
        doctorCount: 4,
      },
      {
        stafId: "#SB1099",
        departmentName: "Haematology",
        headOfDepartment: "Leslie Alexander",
        phoneNumber: "(+234) 813 392 3833",
        doctorCount: 4,
      },
      {
        stafId: "#SB1099",
        departmentName: "Haematology",
        headOfDepartment: "Leslie Alexander",
        phoneNumber: "(+234) 813 392 3833",
        doctorCount: 4,
      },
      {
        stafId: "#SB1099",
        departmentName: "Haematology",
        headOfDepartment: "Leslie Alexander",
        phoneNumber: "(+234) 813 392 3833",
        doctorCount: 4,
      },
      {
        stafId: "#SB1099",
        departmentName: "Haematology",
        headOfDepartment: "Leslie Alexander",
        phoneNumber: "(+234) 813 392 3833",
        doctorCount: 4,
      },
    ];
  },
};
</script>
