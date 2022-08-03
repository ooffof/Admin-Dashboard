import {createStore} from "vuex";

const store = createStore({
	state: {
		sideMenuToggled: true,
		themeTopic: "light",
		isFullScreen: false,
	},
	mutations: {
		changeSideMenuState(state) {
      state.sideMenuToggled = !state.sideMenuToggled;
		},
		changeThemeTopic(state, value){
			console.log(value);
			state.themeTopic = value
		},
		changeScreen(state){
			state.isFullScreen = !state.isFullScreen;
		}

	},
	actions: {

	}

});

export default store;
