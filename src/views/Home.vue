<template>
  <v-container fluid>
    <Navbar />
    <LandingPage />
  </v-container>
</template>

<script>
// @ is an alias to /src
import LandingPage from "@/components/LandingPage.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {
    LandingPage,
    Navbar,
  },
};
</script>
