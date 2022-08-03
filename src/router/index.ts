import {createRouter, createWebHistory} from "vue-router";
import TheNav from "@/layouts/TheNav.vue";
import HomePage from "@/pages/HomePage.vue";
import DashboardPage from "@/pages/DashboardPage.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{path: "/nav", component: TheNav},
		{
			path: "/home",
			component: HomePage,
			children: [{path: "dashboard", component: DashboardPage}, {path: "", component: DashboardPage}]
		},
	]
});

export default router;
