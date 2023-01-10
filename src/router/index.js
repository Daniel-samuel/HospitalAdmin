import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Dashboard from "../views/Dashboard.vue";
import AllStafLists from "@/components/AllStafLists.vue";
import AddNewStaf from "@/components/AddNewStaf.vue";
import Patient from "@/components/Patient.vue";
import Department from "@/components/Department.vue";
import ApproveHospital from "@/components/ApproveHospital.vue";
import SignIn from "@/views/Auth/SignIn.vue";
import SignUp from "@/views/Auth/SignUp.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "/staf-list",
        name: "staf-list",
        component: AllStafLists,
      },
      {
        path: "/add-new-staf",
        name: "add-new-staf",
        component: AddNewStaf,
      },
      // {
      //   path: "/department",
      //   name: "department",
      //   component: Department,
      // },
      {
        path: "/patient",
        name: "patient",
        component: Patient,
      },
      // {
      //   path: "/approval",
      //   name: "approval",
      //   component: ApproveHospital,
      // },
    ],
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
