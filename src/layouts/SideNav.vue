<template>
  <div class="side-nav" ref="sideNav">
    <div class="side-nav__logo-box">
      <img src="../assets/imgs/logo.jpg" alt="logo image">
      <span>RBSVM-UI</span>
    </div>
    <div class="side-nav__menu">
      <div class="side-nav__items">
        <span class="side-nav__sub-category">
          {{ t('message.mainMenu.text') }}
        </span>
        <router-link class="side-nav__item" to="/home/dashboard">
          <dashboard-icon class="u-base-icon"></dashboard-icon>
          <span>{{ t('message.mainMenu.dashboard') }}</span>
          <chevron-right-icon class="toggle-btn" @click="toggleMenu($event)"></chevron-right-icon>
          <ul class="side-nav__item__menu">
            <li><circle-icon></circle-icon>asdgsl</li>
            <li><circle-icon></circle-icon>asdgsl</li>
            <li><circle-icon></circle-icon>asdgsl</li>
          </ul>
        </router-link>


        <span class="side-nav__sub-category">
          {{ t('message.funs.text') }}
        </span>
        <router-link class="side-nav__item" to="/home">
          <box-icon class="u-base-icon"></box-icon>
          <span>{{ t('message.funs.list[0]') }}</span>
        </router-link>
        <router-link to="/home" class="side-nav__item">
          <users-icon class="u-base-icon"></users-icon>
          <span>{{ t('message.funs.list[1]') }}</span>
        </router-link>
        <router-link class="side-nav__item side-nav__slide-hidden" to="/home">
          <bookmarks-icon class="u-base-icon"></bookmarks-icon>
          <span>{{ t('message.funs.list[2]') }}</span>
        </router-link>
        <router-link class="side-nav__item" to="/home">
          <border-all-icon class="u-base-icon"></border-all-icon>
          <span>{{ t('message.funs.list[3]') }}</span>
        </router-link>


        <span class="side-nav__sub-category">
          {{ t('message.funs.text') }}
        </span>
        <router-link class="side-nav__item" to="/home">
          <dashboard-icon class="u-base-icon"></dashboard-icon>
          <span>{{ t('message.funs.list[0]') }}</span>
        </router-link>
        <router-link class="side-nav__item side-nav__slide-hidden" to="/home">
          <dashboard-icon class="u-base-icon"></dashboard-icon>
          <span>{{ t('message.funs.list[1]') }}</span>
        </router-link>
        <router-link class="side-nav__item" to="/home">
          <dashboard-icon class="u-base-icon"></dashboard-icon>
          <span>{{ t('message.funs.list[2]') }}</span>
        </router-link>
        <router-link class="side-nav__item" to="/home">
          <dashboard-icon class="u-base-icon"></dashboard-icon>
          <span>{{ t('message.funs.list[3]') }}</span>
        </router-link>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useStore} from "vuex";
import {watch, computed, ref} from "vue";
import {useI18n} from "vue-i18n";

const {t} = useI18n();
const state = useStore().state;
const sideMenuToggled = computed(() => state.sideMenuToggled);
const sideNav = ref();
watch(sideMenuToggled, () => {
  sideNav.value.classList.toggle("side-nav__collapse");
  const slideMenuList = document.querySelectorAll(".side-nav__item__menu");
  slideMenuList.forEach(value => {
    value.classList.toggle("u-hidden");
  });
});

function toggleMenu(e: MouseEvent) {
  let t = e.target as HTMLElement;
  const menu = t.closest(".side-nav__item")!.querySelector(".side-nav__item__menu") as HTMLElement;
  if(t.nodeName !== "svg"){
    t.closest("svg")!.classList.toggle("u-rotate-90");
  }else{
    t.classList.toggle("u-rotate-90");
  }

  menu.classList.toggle("u-height-auto");
}


</script>

