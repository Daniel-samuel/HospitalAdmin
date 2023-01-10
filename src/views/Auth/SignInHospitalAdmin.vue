<template>
  <div class="flex flex-col w-full md:w-8/12">
    <form @submit.prevent="login()">
      <Transition :duration="550">
        <div class="mt-4">
          <div class="mt-4">
            <label
              class="text-[#9A9A9A] font-medium xs:text-sm md:text-lg"
              for="Hospital"
              >Hospital</label
            ><br />
            <input
              class="font-DuplicateSans w-full bg-[#fff] py-3 pl-8 mt-1 rounded-md border border-[#9A9A9A] text-[#959595]"
              type="text"
              name="text"
              placeholder="Enter your hospital code"
            />
          </div>
          <div class="mt-4">
            <label
              class="text-[#9A9A9A] font-medium xs:text-sm md:text-lg"
              for="Hospital"
              >Email</label
            ><br />
            <input
              class="font-DuplicateSans w-full bg-[#fff] py-3 pl-8 mt-1 rounded-md border border-[#9A9A9A] text-[#959595]"
              type="email"
              name="email"
              v-model="args.email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div class="mt-4 mb-1">
            <label
              class="text-[#9A9A9A] font-medium xs:text-sm md:text-lg"
              for="Hospital"
              >Password</label
            ><br />
            <input
              class="font-DuplicateSans w-full bg-[#fff] py-3 pl-8 mt-1 rounded-md border border-[#9A9A9A] text-[#959595]"
              type="password"
              name="password"
              placeholder="Enter your password"
              v-model="args.password"
              required
            />
          </div>
          <div class="flex flex-row tems-center justify-between">
            <div class="flex flex-row items-center space-x-1">
              <input type="checkbox" name="" id="" class="cursor-pointer" />
              <p class="text-xs text-[#959595]">Remember me</p>
            </div>
            <router-link
              to=""
              class="text-xs text-[#959595] hover:underline hover:text-[#FF5200]"
              >Forgot Password?</router-link
            >
          </div>
          <button
            @click="login"
            class="bg-[#FF5200] text-md rounded-md text-white mt-8 py-4 hover:scale-105 duration-300 w-full"
          >
            Sign in
          </button>
        </div>
      </Transition>
    </form>
  </div>
  <div class="w-full md:w-8/12">
    <!-- <div class="mt-10 text-sm md:text-md text-center">
      <span class="text-[#959595]">Don't have an account? </span
      ><router-link to="/signup" class="text-[#FF5200] hover:underline"
        >Sign up</router-link
      >
    </div> -->
    <div class="mt-10 text-xs md:text-sm text-center">
      <span class="text-[#FF5200]">Privacy policy and Terms and Condition</span>
    </div>
  </div>
</template>

<script>
import { useToast } from "vue-toastification";
const toast = useToast();

import { mapActions, mapMutations, mapGetters } from "vuex";

export default {
  name: "loginDoctor",

  data() {
    return {
      args: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    ...mapMutations(["set"]),

    async login() {
      console.log("mmdsmmsmdsm");
      let res;
      res = await this.$store.dispatch("mutate", {
        endpoint: "CreateHospitalAdminLogin",
        data: { input: this.args },
      });

      if (res) {
        toast.success("Login Successful");
        localStorage.setItem("token", res.token);
        localStorage.setItem("doctorId", res._id);
        localStorage.setItem("hospitalId", res.hospital);

        console.log(res);

        this.set({
          type: "isLoggedIn",
          data: true,
        });

        console.log(this.$store.state.data.isLoggedIn);

        this.$router.push({ name: "Dashboard" });
      }
    },
  },

  created() {},
};
</script>
