import {createI18n} from "vue-i18n";
import zhCn from "@/languages/zh-cn";
import en from "@/languages/en"

const i18 = new createI18n({
	locale: 'zh-cn',
	messages:{
		'zh-cn': zhCn,
		'en': en
	}
})

export default i18;
