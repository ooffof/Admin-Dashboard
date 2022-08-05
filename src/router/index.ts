import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import DashboardPage from "@/pages/DashboardPage.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			redirect: "/home"
		},
		{
			path: "/home",
			component: HomePage,
			children: [{path: "dashboard", component: DashboardPage}, {path: "", component: DashboardPage}]
		},
	]
});

export default router;
