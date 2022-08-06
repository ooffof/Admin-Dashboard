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
      <div ref="sun" class="sun-box u-hidden">
        <brightness-up-icon class="u-base-icon"
                            @click="changeTheme('light')"></brightness-up-icon>
      </div>
      <base-dropdown :title="'通知'">
        <template #default>
          <div class="nav__notification-box">
            <bell-icon stroke-width="1.5"></bell-icon>
            <div class="nav__color-tip nav__color-tip--green"></div>
          </div>
        </template>
        <template #content>
          <dropdown-item mail><p>Hello World</p></dropdown-item>
          <dropdown-item check><p>网站届时发布新版本，请及时关注</p></dropdown-item>
          <dropdown-item userplus><p>Hello World</p></dropdown-item>
        </template>
      </base-dropdown>

      <base-dropdown :title="'信息'">
        <template #default>
          <div class="nav__notification-box">
            <message-circle-icon class="u-base-icon"></message-circle-icon>
            <div class="nav__color-tip nav__color-tip--red"></div>
          </div>
        </template>
        <template #content>
          <dropdown-item img src="https://picsum.photos/200/200"><p>你好，添加你为好友</p></dropdown-item>
          <dropdown-item img src="https://picsum.photos/200/201"><p>网站届时发</p></dropdown-item>
          <dropdown-item img src="https://picsum.photos/201/200"><p>Hello World</p></dropdown-item>
        </template>
      </base-dropdown>

      <div class="nav__user-box">
        <img src="https://picsum.photos/200/300" alt="user icon" class="round-image">
        <span>Admin</span>
      </div>


      <base-dropdown :title="'用户'">
        <template #default>
          <div class="nav__notification-box">
            <settings-icon class="u-base-icon nav__icon-settings"></settings-icon>
          </div>
        </template>
        <template #content>
          <dropdown-item :trash="false"><p>查看个人资料</p></dropdown-item>
          <dropdown-item :trash="false"><p>修改密码</p></dropdown-item>
          <dropdown-item :trash="false"><p>退出</p></dropdown-item>
        </template>
      </base-dropdown>
    </div>
  </nav>
</template>

<script setup lang="ts">
import SearchBox from "@/components/SearchBox.vue";
import BaseSelect from "@/components/base/BaseSelect.vue";
import BaseDropdown from "@/components/base/BaseDropdown.vue";
import DropdownItem from "@/components/base/DropdownItem.vue";
import {useStore} from "vuex";
import {ref} from "vue";
import {useLoading, useMessage} from "@/hooks";
import {useI18n} from "vue-i18n";


const store = useStore();
const {locale} = useI18n({useScope: 'global'});

const moon = ref();
const sun = ref();

const loading = useLoading();
const message = useMessage();


async function changeTheme(topic: string) {
  await loading.showAsyncLoadingWithArgs({
    duration: 1500,
    content: "正在切换主题",
  });


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
  const app = document.getElementById("app")!;
  if (store.state.isFullScreen) {
    document.exitFullscreen();
  } else {
    app.requestFullscreen();
  }

  store.commit("changeScreen");
}

async function changeLanguage(value:string) {
  await loading.showAsyncLoadingWithArgs({
    duration: 1000
  });

  value = value === "English" ? "en" : value;
  locale.value = value; // change!
}
</script>

