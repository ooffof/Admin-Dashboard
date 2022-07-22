<template>
  <nav class="nav">
    <div class="nav__left">
      <menu2-icon class="u-base-icon" @click="toggleSideBar"></menu2-icon>
      <search-box class="u-base-icon"></search-box>
    </div>
    <div class="nav__icon-box">
      <div class="nav__language-box">
        <world-icon class="nav__icon-language u-base-icon"></world-icon>
        <base-select :placeholder="'请选择语言'" :content="['简体中文', 'English']" @onSelected="changeLanguage"></base-select>
      </div>
      <arrows-maximize-icon class="u-base-icon" @click="changeScreen"></arrows-maximize-icon>
      <div ref="moon" class="moon-box">
        <moon-icon class="u-base-icon" @click="changeTheme('dark')"></moon-icon>
      </div>
      <div ref="sun"  class="sun-box u-hidden">
        <brightness-up-icon class="u-base-icon"
                            @click="changeTheme('light')"></brightness-up-icon>
      </div>
      <div class="nav__notification-box">
        <bell-icon stroke-width="1.5"></bell-icon>
        <div class="nav__color-tip nav__color-tip--green"></div>
      </div>
      <div class="nav__notification-box">
        <message-circle-icon class="u-base-icon"></message-circle-icon>
        <div class="nav__color-tip nav__color-tip--red"></div>
      </div>
      <div class="nav__user-box">
        <img src="https://picsum.photos/200/300" alt="user icon" class="round-image">
        <span>Admin</span>
      </div>
      <settings-icon class="u-base-icon nav__icon-settings" @click="test"></settings-icon>
    </div>
  </nav>
</template>

<script>
import SearchBox from "../components/SearchBox.vue";
import BaseSelect from "@/components/base/BaseSelect";
import {useStore} from "vuex";
import {ref} from "vue";
import {useLoading, useMessage} from "@/hooks";
import {useI18n} from "vue-i18n";


export default {
  name: "TheNav",
  components: {
    SearchBox, BaseSelect
  },
  setup() {
    const store = useStore();
    const {locale} = useI18n({useScope: 'global'});

    const moon = ref(null);
    const sun = ref(null);


    async function changeTheme(topic) {
      const loading = useLoading();
      await loading.showAsyncLoadingWithArgs({
        duration: 1000
      });

      const message = useMessage();

      // if (topic === "light") {
      //   moon.value.style.display = "inline-block";
      //   sun.value.style.display = "none";
      // } else {
      sun.value.classList.toggle("u-hidden");
      moon.value.classList.toggle("u-hidden");
      // }
      store.commit("changeThemeTopic", {
        value: topic
      });
      message.showMessage("切换成功", "success");

    }

    function toggleSideBar() {
      store.commit("changeSideMenuState");
    }

    function changeScreen() {
      const app = document.getElementById("app");
      if (store.state.isFullScreen) {
        document.exitFullscreen();
      } else {
        app.requestFullscreen();
      }

      store.commit("changeScreen");
    }

    async function changeLanguage(value) {
      const loading = useLoading();
      await loading.showAsyncLoadingWithArgs({
        duration: 1000
      });

      value = value === "English" ? "en" : value;
      locale.value = value; // change!
    }


    return {
      toggleSideBar,
      changeTheme,
      changeLanguage,
      moon,
      sun,
      changeScreen,

    };
  }
};
</script>

