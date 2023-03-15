<template>
  <v-container>
    <v-row>
      <div class="cover">
        <div class="btnRange">
          <v-btn class="customise_btn" outlined>SHOP NOW</v-btn>
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import matchCover from "../image/matcha02.jpeg";
export default {
  name: "LandingPage",
  data() {
    return {
      image: {
        src: matchCover,
        alt: "match",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.cover {
  width: 100%;
  height: 33.33vw;
  display: flex;
  background-image: url("../image/matcha03.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  .btnRange {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    .customise_btn {
      &:hover {
        border: white 2px solid !important;
        background: #060606;
        color: #fff;
      }
    }
  }
}
</style>