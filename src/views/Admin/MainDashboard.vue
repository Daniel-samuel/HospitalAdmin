<template>
  <div class="mx-auto px-2 lg:px-4 py-4 min-h-[calc(100vh-80px)]">
    <PatientSummary />
    <div class="flex flex-col md:flex-row md:space-x-10">
      <HospitalProfile />
      <StafList :stafLists="stafLists" />
    </div>
  </div>
</template>

<script>
import PatientSummary from "./PatientSummary.vue";
import HospitalProfile from "@/components/HospitalProfile.vue";
import StafList from "@/components/StafList.vue";
export default {
  name: "MainDashboard",
  components: {
    PatientSummary,
    HospitalProfile,
    StafList,
  },
  data() {
    return {
      stafLists: [],
    };
  },
  created() {
    this.stafLists = [
      {
        stafId: "#SB1099",
        image: "https://lawal-lawal.netlify.app/images/profilepic.jpeg",
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
        account: "Desactivated",
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
    ];
  },
};
</script>
