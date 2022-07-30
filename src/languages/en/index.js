import nav from "./nav"
import sideNav from "./side-nav";
import dashboard from "./dashboard"

export default {
		message: {
			...nav,
			...sideNav,
			...dashboard
		}
}
