import {HookObj} from "@/hooks/utils";
import TheLoading from "@/hooks/loading/TheLoading";

const loadingObj = new HookObj(TheLoading);
const useLoading = loadingObj.useHook.bind(loadingObj);

export {useLoading}


