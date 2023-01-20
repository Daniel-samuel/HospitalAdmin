<template>
  <div class="mx-auto px-2 lg:px-4 py-4 min-h-[calc(100vh-80px)]">
    <div class="bg-white p-6 rounded-md">
      <div class="flex flex-row justify-between">
        <h3 class="text-[#FF5200] text-2xl font-semibold">Add New Staf</h3>
      </div>

      <div class="my-6">
        <select
          id="professions"
          v-model="staffType"
          class="w-fit bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2"
        >
          <option value="doctor" selected>Doctor</option>
          <option value="nurse">Nurse</option>
        </select>
      </div>

      <!-- Upload staff files  -->
      <div
        class="flex flex-col space-y-4 md:space-y-0 md:flex-row space-x-0 md:space-x-6"
      >
        <div class="w-full md:w-2/12">
          <h2 class="text-base mb-3">Profile Picture</h2>
          <div class="flex items-center justify-center w-full">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full border border-[#FF5200] border-dashed rounded-lg cursor-pointer hover:bg-orange-50"
            >
              <div class="flex flex-col items-center justify-center py-16">
                <UploadFilesIcon />
                <p class="mb-2 text-xs text-[#323232]">
                  <span class="underline">Click to upload</span> or drag and
                  drop files
                </p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div>
        </div>
        <div class="w-full md:w-4/12">
          <h2 class="text-base mb-3">Qualification document</h2>
          <div class="flex items-center justify-center w-full">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full border border-[#FF5200] border-dashed rounded-lg cursor-pointer hover:bg-orange-50"
            >
              <div class="flex flex-col items-center justify-center py-16">
                <UploadFilesIcon />
                <p class="mb-2 text-xs text-[#323232]">
                  <span class="underline">Click to upload</span> or drag and
                  drop files
                </p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div>
        </div>
        <div class="w-full md:w-6/12">
          <h2 class="text-base mb-3">Cover Picture</h2>
          <div class="flex items-center justify-center w-full">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full border border-[#FF5200] border-dashed rounded-lg cursor-pointer hover:bg-orange-50"
            >
              <div class="flex flex-col items-center justify-center py-16">
                <UploadFilesIcon />
                <p class="mb-2 text-xs text-[#323232]">
                  <span class="underline">Click to upload</span> or drag and
                  drop files
                </p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div>
        </div>
      </div>

      <!-- Name - Phone number and Address -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-4">
        <div class="w-full">
          <label for="name" class="text-sm">Name</label>
          <input
            class="w-full text-xs border rounded-[4px] px-3 py-2 focus:outline-none focus:border-[#FF5200] focus:ring-0"
            type="text"
            name=""
            id=""
            placeholder="Full name"
            v-model="args.name"
          />
        </div>
        <div class="w-full">
          <label for="name" class="text-sm">Phone Number</label>
          <input
            class="w-full text-xs border rounded-[4px] px-3 py-2 focus:outline-none focus:border-[#FF5200] focus:ring-0"
            type="text"
            name=""
            id=""
            placeholder="Phone Number"
            v-model="args.contactPhone"
          />
        </div>
        <div class="w-full">
          <label for="name" class="text-sm">Address</label>
          <input
            class="w-full text-xs border rounded-[4px] px-3 py-2 focus:outline-none focus:border-[#FF5200] focus:ring-0"
            type="text"
            name=""
            id=""
            placeholder="Address"
            v-model="args.address"
          />
        </div>

        <!-- Age | Sex | Department -->
        <div class="w-full">
          <label for="name" class="text-sm">Age</label>
          <input
            class="w-full text-xs border rounded-[4px] px-3 py-2 focus:outline-none focus:border-[#FF5200] focus:ring-0"
            type="text"
            name=""
            id=""
            placeholder="Age"
            v-model="args.age"
          />
        </div>
        <div class="w-full">
          <label for="name" class="text-sm">Sex</label>
          <select
            id="professions"
            class="w-full text-xs border rounded-[4px] px-3 py-2 focus:outline-none focus:border-[#FF5200] focus:ring-0"
          >
            <option selected>Select Gender</option>
            <option v-for="se in Sex" :key="se" :value="se">
              {{ se }}
            </option>
          </select>
        </div>
        <div v-show="staffType === 'doctor'" class="w-full">
          <label for="name" class="text-sm">Select Department</label>
          <select
            id="professions"
            class="w-full text-xs border rounded-[4px] px-3 py-2 focus:outline-none focus:border-[#FF5200] focus:ring-0"
            v-model="args.category"
          >
            <option selected>Select Department</option>
            <option v-for="cat in categories" :key="cat" :value="cat">
              {{ cat }}
            </option>
          </select>
        </div>

        <!-- Email Address | Date of Birth | Skills -->
        <div class="w-full">
          <label for="name" class="text-sm">Email</label>
          <input
            class="w-full text-xs border rounded-[4px] px-3 py-2 focus:outline-none focus:border-[#FF5200] focus:ring-0"
            type="email"
            name=""
            id=""
            placeholder="Email"
            v-model="args.email"
          />
        </div>
        <div class="w-full">
          <label for="name" class="text-sm">Date of Birth</label>
          <input
            class="w-full text-xs border rounded-[4px] px-3 py-2 focus:outline-none focus:border-[#FF5200] focus:ring-0"
            type="date"
            name=""
            id=""
            placeholder="Separate skills with commas"
            v-model="args.DOB"
          />
        </div>
        <div class="w-full">
          <label for="name" class="text-sm">Skills</label>
          <input
            class="w-full text-xs border rounded-[4px] px-3 py-2 focus:outline-none focus:border-[#FF5200] focus:ring-0"
            type="text"
            name=""
            id=""
            placeholder="Separate skills with commas"
          />
        </div>
      </div>

      <!-- Biography -->
      <div class="">
        <label for="name" class="text-sm">Biography</label>
        <textarea
          id="message"
          rows="10"
          class="w-full text-xs border rounded-[4px] p-8 focus:outline-none focus:border-[#FF5200] focus:ring-0"
          placeholder="Write a short biography"
          v-model="args.biography"
        ></textarea>
        <div class="px-4 py-3">
          <div class="flex flex-row items-center justify-end">
            <button
              @click="addStaff"
              class="bg-[#FF5200] px-14 py-3 rounded-md text-white"
            >
              Add Staf
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UploadFilesIcon from "@/components/icons/UploadFilesIcon.vue";
import { useToast } from "vue-toastification";
const toast = useToast();

import { mapActions, mapMutations, mapGetters } from "vuex";
export default {
  name: "AddNewStaf",
  components: {
    UploadFilesIcon,
  },
  data() {
    return {
      args: {
        address: "",
        category: "",
        country: "",
        contactPhone: "",
        email: "",
        hospital: "",
        name: "",
        password: "",
        state: "",
        age: "",
        biography: "",
        DOB: "",
        sex: "",
      },
      staffType: "doctor",

      categories: [
        "CARDIOLOGIST",
        "DENTIST",
        "DERMATOLOGIST",
        "ENT",
        "GASTROENTEROLOGIST",
        "GENERAL",
        "PRACTITIONER",
        "GYNAECOLOGIST",
        "NEUROLOGIST",
        "ORTHOPAEDIC",
        "SURGEON",
        "PAEDIATRICIAN",
        "PHYSIOTHERAPIST",
        "PSYCHIATRIST",
        "UROLOGIST",
      ],

      Sex: ["MALE", "FEMALE"],
    };
  },
  methods: {
    ...mapMutations(["set"]),

    async addStaff() {
      if (this.staffType === "doctor") {
        console.log("mmdsmmsmdsm");
        let res;
        res = await this.$store.dispatch("mutate", {
          endpoint: "hospitalAdminCreateDoctor",
          data: { input: this.args },
        });

        if (res) {
          toast.success(" Successful");
          alert("Staff Added Successfully");

          console.log(res);
        }
      } else {
        console.log("mmdsmmsmdsm");
        delete this.args["category"];
        let res;
        res = await this.$store.dispatch("mutate", {
          endpoint: "hospitalAdminCreateNurse",
          data: { input: this.args },
        });

        if (res) {
          toast.success(" Successful");
          alert("Staff Added Successfully");

          console.log(res);
        }
      }
    },
  },
  created() {
    this.args.hospital = window.localStorage.getItem("hospital");
  },
};
</script>
