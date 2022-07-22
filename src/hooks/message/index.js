import {HookObj} from "@/hooks/utils";
import MessageBox from "@/hooks/message/MessageBox";

const messageObj = new HookObj(MessageBox);
const useMessage = messageObj.useHook.bind(messageObj);

export {useMessage}
