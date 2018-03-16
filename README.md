# bubbleTalk

提取一个业务通用的冒泡转播组件。调用代码如下：

```javascript
bubbleTalk(
	{
		selector: ".bubble > li", 
		duration: 2000, 
		// 冒泡列表样式
		css: [ 
			"bubble_item_5", // 动态的最顶部泡泡（最终状态是消失）
			"bubble_item_4", // 静态的最顶部泡泡 
			"bubble_item_3", 
			"bubble_item_2", 
			"bubble_item_1", // 可见最底部泡泡（视觉上的最底部泡泡）
			"bubble_item_0", // 动态最底部泡泡
		], 
		// 如果想传入类名，也可以直接传样式
		// style 与 css 只有一个生效。 style 高于 css 参数
		style: [
			`-webkit-transition: 
				visibility step-end .6s,
				-webkit-transform ease .6s, 
				opacity linear .6s; 
			opacity: 0; 
			visibility: hidden; 
			-webkit-transform: translate3d(0, -400%, 0) translate3d(0, -20px, 0)`, 

			`-webkit-transition: 
				-webkit-transform ease .6s, 
				opacity linear .6s; 
			opacity: .4; 
			visibility: visible; 
			-webkit-transform: translate3d(0, -300%, 0) translate3d(0, -15px, 0)`, 

			`-webkit-transition: 
				-webkit-transform ease .6s, 
				opacity linear .6s; 
			opacity: .6; 
			visibility: visible; 
			-webkit-transform: translate3d(0, -200%, 0) translate3d(0, -10px, 0)`, 

			`-webkit-transition: 
				-webkit-transform ease .6s, 
				opacity linear .6s; 
			opacity: .8; 
			visibility: visible; 
			-webkit-transform: translate3d(0, -100%, 0)  translate3d(0, -5px, 0)`, 

			`-webkit-transition: 
				-webkit-transform ease .6s, 
				opacity linear .6s; 
			opacity: 1; 
			visibility: visible; 
			-webkit-transform: translate3d(0, 0, 0)`, 

			`-webkit-transition: 
				visibility step-start .6s, 
				-webkit-transform ease .6s, 
				opacity linear .6s; 
			opacity: 0; 
			visibility: hidden; 
			-webkit-transform: translate3d(0, 100%, 0)  translate3d(0, 5px, 0)`, 
		]
	}
); 
```

## 参数简介

- `selector`: 样式选择器；必选；向 bubbleTalk 传入轮播列表。
- `duration`: 轮播间隔；[可选]；默认值 2000ms
- `css`: 轮播节点类名；css 与 style 参考二选一； 
- `style`: 轮播节点内联样式；css 与 style 参考二选一； 

`style` 与 `css` 二选一，如果同时存在只取 `style`，因为组件内部会把 `style` 转换成 `css`并覆盖原来的 `css` 成员。

泡泡的数量由 style/css 的数组长度解决。

>特别注意：
1 数组第一个成员表示冒泡淡出样式
2 数组最后一个成员表示待显示样式

具体可以参考线上 [DEMO](https://leeenx.github.io/bubbleTalk/bubbleTalk.html)







