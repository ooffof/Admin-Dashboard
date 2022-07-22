import {createRouter, createWebHistory} from "vue-router";
import TheNav from "@/layouts/TheNav";
import HomePage from "@/pages/HomePage";
import DashboardPage from "@/pages/DashboardPage";

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
