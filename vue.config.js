const {defineConfig} = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,
	chainWebpack: config => {
		config.resolve.extensions.add(".vue");
		console.log(config.resolve.extensions.store);
	},
	css: {
		loaderOptions: {
			sass: {
				additionalData: `
                @import "@/sass/abstract/_variables.scss";
                @import "@/sass/abstract/_mixins.scss";
                @import "@/sass/common/_animations.scss";
                @import "@/sass/themes/_theme-mixins.scss";
                `
			}
		}
	}
});
