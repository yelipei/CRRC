module.exports = {
	"plugins": {
		"postcss-pxtorem": { // 此处为添加部分
			rootValue: 100, // 换算基数，默认100，把根标签的font-size规定为1rem为50px,在设计稿上量出多少px直接在代码中写多少px
			unitPrecision: 3, //保留rem小数点多少位
			propList: ['*', '!border'], //  存储将被转换的属性列表，'!font-size' 即不对字体进行rem转换
			selectorBlackList: ['.radius'], // 要忽略并保留为px的选择器，例如fs-xl类名，里面有关px的样式将不被转换，支持正则写法。
			replace: true,
			mediaQuery: false, //（布尔值）媒体查询( @media screen 之类的)中不生效
			minPixelValue: 3, ///设置要替换的最小像素值，px小于12的不会被转换
			//propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性
			// propBlackList: ['font-size'], //黑名单
		}
	}
}
