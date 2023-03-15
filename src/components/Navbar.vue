<template>
  <nav class="navbar" color="white" app>
    <v-container>
      <v-row class="navbar_position">
        <div class="item_box">
          <div class="item">Product</div>
          <div class="item">Comment</div>
        </div>
        <div class="logo">MATCHA'S WORLD</div>
        <div class="item_box">
          <div class="item">Personal</div>
          <div class="item"><v-icon>mdi-cart</v-icon></div>
        </div>
      </v-row>
    </v-container>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      itemList: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 10.1vw;
  display: flex;
  align-items: center;
  .navbar_position {
    justify-content: space-around;
    .logo {
      font-family: "Luckiest Guy";
      font-size: 2.5vw;
      padding-bottom: 0.5vw;
    }
    .item_box {
      display: flex;
      justify-content: space-evenly;
      width: 20vw;
      align-items: center;
      .item {
        text-align: center;
      }
    }
  }
}
</style>