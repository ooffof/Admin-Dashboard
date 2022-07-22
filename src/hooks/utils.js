import {createApp} from "vue";

class HookObj{
	constructor(hookComponent) {
		const instance = createApp(hookComponent);
		const div = document.createElement("div");
		document.body.appendChild(div);
		this.hookComponent = instance.mount(div);
	}

	useHook(){
		return this.hookComponent;
	}

}


export {HookObj}
