// import {HookObj} from "@/hooks/utils";
// import MessageBox from "@/hooks/message/MessageBox.vue";
//
//
//
//
// const messageObj = new HookObj(MessageBox);
// const useMessage = messageObj.useHook.bind(messageObj);
//
// export {useMessage}

import MessageBox from "./MessageBox.vue";


import {createApp, reactive} from "vue";

interface Message{
	content: string
	type: string
}

const message = reactive<Message>({
	content: "成功",
	type: "success"
});

const $message = createApp(MessageBox, {message}).mount(document.createElement("div")).$el
document.body.appendChild($message);



const useMessage = function () {
	return {
		showMessage(content: string, type: string){
			const m = document.querySelector(".message")!;
			m.classList.remove("message--leave");
			message.type = type;
			setTimeout(() => {
				m.classList.add("message--leave");
			}, 1500);
		},
		hidden(){
			const m = document.querySelector(".message")!;
			m.classList.add("message--leave");
		}
	}
}

export {useMessage}
