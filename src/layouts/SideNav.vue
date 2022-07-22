<template>
  <div class="side-nav" ref="sideNav">
    <div class="side-nav__logo-box">
      <img src="../assets/imgs/logo.jpg" alt="logo image">
      <span>RBSVM-UI</span>
    </div>
    <div class="side-nav__menu">
      <ul class="side-nav__items">
        <span class="side-nav__sub-category">
          {{ t('message.mainMenu.text') }}
        </span>
        <li class="side-nav__item">
          <dashboard-icon class="u-base-icon"></dashboard-icon>
          <span>{{ t('message.mainMenu.dashboard')}}</span>
        </li>


        <span class="side-nav__sub-category">
          {{t('message.funs.text')}}
        </span>
        <li class="side-nav__item">
          <box-icon class="u-base-icon"></box-icon>
          <span>{{t('message.funs.list[0]')}}</span>
          <div class="side-nav__label side-nav__label--new">New</div>
        </li>
        <li class="side-nav__item side-nav__slide-hidden">
          <users-icon class="u-base-icon"></users-icon>
          <span>{{t('message.funs.list[1]')}}</span>
          <chevrons-right-icon class="u-base-icon arrow-right" @click="toggleSlideMenu"></chevrons-right-icon>
        </li>
        <ul class="side-nav__slide-menu">
          <li>
            <dashboard-icon class="u-base-icon"></dashboard-icon>
            <span>hello world</span>
          </li>
          <li>
            <dashboard-icon class="u-base-icon"></dashboard-icon>
            <span>hello world</span>
          </li>
          <li>
            <dashboard-icon class="u-base-icon"></dashboard-icon>
            <span>hello world</span>
          </li>
        </ul>
        <li class="side-nav__item side-nav__slide-hidden">
          <bookmarks-icon class="u-base-icon"></bookmarks-icon>
          <span>{{t('message.funs.list[2]')}}</span>
          <chevrons-right-icon class="u-base-icon arrow-right" @click="toggleSlideMenu"></chevrons-right-icon>
        </li>
        <ul class="side-nav__slide-menu">
          <li>
            <dashboard-icon class="u-base-icon"></dashboard-icon>
            <span>hello world</span>
          </li>
          <li>
            <dashboard-icon class="u-base-icon"></dashboard-icon>
            <span>hello world</span>
          </li>
          <li>
            <dashboard-icon class="u-base-icon"></dashboard-icon>
            <span>hello world</span>
          </li>
        </ul>
        <li class="side-nav__item">
          <border-all-icon class="u-base-icon"></border-all-icon>
          <span>{{t('message.funs.list[3]')}}</span>
        </li>


        <span class="side-nav__sub-category">
          {{t('message.funs.text')}}
        </span>
        <li class="side-nav__item">
          <dashboard-icon class="u-base-icon"></dashboard-icon>
          <span>{{t('message.funs.list[0]')}}</span>
        </li>
        <li class="side-nav__item side-nav__slide-hidden">
          <dashboard-icon class="u-base-icon"></dashboard-icon>
          <span>{{t('message.funs.list[1]')}}</span>
          <div class="side-nav__label side-nav__label--hot">Hot</div>
        </li>
        <ul class="side-nav__slide-menu">
          <li>
            <dashboard-icon class="u-base-icon"></dashboard-icon>
            <span>hello world</span>
          </li>
          <li>
            <dashboard-icon class="u-base-icon"></dashboard-icon>
            <span>hello world</span>
          </li>
          <li>
            <dashboard-icon class="u-base-icon"></dashboard-icon>
            <span>hello world</span>
          </li>
        </ul>
        <li class="side-nav__item side-nav__slide-hidden">
          <dashboard-icon class="u-base-icon"></dashboard-icon>
          <span>{{t('message.funs.list[2]')}}</span>
          <chevrons-right-icon class="u-base-icon arrow-right" @click="toggleSlideMenu"></chevrons-right-icon>
        </li>
        <ul class="side-nav__slide-menu">
          <li>
            <dashboard-icon class="u-base-icon"></dashboard-icon>
            <span>hello world</span>
          </li>
          <li>
            <dashboard-icon class="u-base-icon"></dashboard-icon>
            <span>hello world</span>
          </li>
          <li>
            <dashboard-icon class="u-base-icon"></dashboard-icon>
            <span>hello world</span>
          </li>
        </ul>
        <li class="side-nav__item">
          <dashboard-icon class="u-base-icon"></dashboard-icon>
          <span>{{t('message.funs.list[3]')}}</span>
        </li>


      </ul>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {watch, computed, ref} from "vue";
import {useI18n} from "vue-i18n";

export default {
  name: "SideNav",
  setup() {
    const {t} = useI18n();
    const state = useStore().state;
    const sideMenuToggled = computed(() => state.sideMenuToggled);
    const sideNav = ref({});
    watch(sideMenuToggled, () => {
      sideNav.value.classList.toggle("side-nav__collapse");
      const slideMenuList = document.querySelectorAll(".side-nav__slide-menu");
      slideMenuList.forEach(value => {
        value.classList.toggle("u-hidden");
      });
    })
    ;

    function toggleSlideMenu(e) {
      const target = e.target;
      const parent = target.closest("li");
      parent.classList.toggle("side-nav__slide-hidden");
      target.classList.toggle("arrow-right--rotate");
    }

    return {
      sideNav, toggleSlideMenu, t
    };
  }
};
</script>

