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
          <div class="overflow-x-auto relative">
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
                <tr :key="stafList.stafId" v-for="stafList in stafLists">
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
                          {{ stafList.name }}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-10 py-5 border-t border-gray-200 bg-white text-sm"
                  >
                    <p
                      :class="[
                        stafList.status === 'Offline' && 'text-[#9D9D9D]',
                      ]"
                      class="text-[#52575C] whitespace-no-wrap"
                    >
                      {{ stafList.department }}
                    </p>
                  </td>
                  <td
                    class="px-10 py-5 border-t border-gray-200 bg-white text-sm"
                  >
                    <p
                      class="font-semibold whitespace-no-wrap italic"
                      :class="[
                        stafList.status === 'Online'
                          ? 'text-[#25B922]'
                          : stafList.status === 'Offline'
                          ? 'text-[#9D9D9D]'
                          : stafList.status === 'Away'
                          ? 'text-[#FF0000]'
                          : stafList.status === 'Break'
                          ? 'text-[#002092]'
                          : '',
                      ]"
                    >
                      {{ stafList.status }}
                    </p>
                  </td>
                  <td
                    class="px-10 py-5 border-t border-gray-200 bg-white text-sm"
                  >
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
                        {{ stafList.account }}
                      </option>
                      <option value="desactivated">Desactivated</option>
                    </select>
                  </td>
                  <td
                    class="py-5 border-t border-gray-200 bg-white text-sm underline"
                  >
                    {{ stafList.query }}
                  </td>
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
export default {
  name: "StafList",
  props: {
    stafLists: Array,
  },
};
</script>
