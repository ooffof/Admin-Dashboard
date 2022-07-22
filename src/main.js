import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import VueTablerIcons from "vue-tabler-icons";
import VueI18n from "./languages";


import "./sass/main.scss"




const app = createApp(App);
app.use(router).use(store).use(VueTablerIcons).use(VueI18n);


app.mount("#app");

