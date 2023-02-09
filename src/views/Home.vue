<template>
  <v-container fluid>
    <Navbar />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </v-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Navbar,
  },
};
</script>
