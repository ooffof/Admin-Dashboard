<template>
  <div class="home-page">
    <side-nav ></side-nav>
    <div class="home-page__main">
      <the-nav></the-nav>
      <router-view class="home-page__content"></router-view>
    </div>
  </div>
</template>

<script>
import SideNav from "@/layouts/SideNav";
import TheNav from "@/layouts/TheNav";
export default {
  name: "HomePage",
  components: {SideNav, TheNav}
};
</script>

