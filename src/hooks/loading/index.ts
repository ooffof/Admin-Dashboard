// import {HookObj} from "@/hooks/utils";
// import TheLoading from "@/hooks/loading/TheLoading.vue";
//
//
// const loadingObj = new HookObj(TheLoading);
// const useLoading = loadingObj.useHook.bind(loadingObj);
//
// export {useLoading}


import TheLoading from "./TheLoading.vue";
import {createApp, reactive} from "vue";

interface Loading {
	show: boolean
	content: string
}

const DEFAULT_DURATION = 1500
const DEFAULT_CONTENT ="正在拼命加载"

const loading = reactive<Loading>({
	show: false,
	content: DEFAULT_CONTENT
})

const $loading = createApp(TheLoading, {loading}).mount(document.createElement("div")).$el
document.body.appendChild($loading);

const useLoading = function () {
	return {
		showLoadingWithArgs(args: { duration?: number, content?: string }) {
			loading.content = args.content || DEFAULT_CONTENT
			loading.show = true
			setTimeout(() => loading.show = false, args.duration || DEFAULT_DURATION);
		},

		async showAsyncLoadingWithArgs(args: { duration?: number, content?: string }) {
			loading.show = true
			loading.content = args.content || DEFAULT_CONTENT

			const promise = new Promise<void>(resolve => {
				setTimeout(() => {
					loading.show = false;
					resolve();
				}, args.duration || DEFAULT_DURATION)
			});

			return promise;
		},
		showLoadingEternally() {
			loading.show = true;
		},

		hideLoading() {
			loading.show = false;
		}
	}
}

export {useLoading}


