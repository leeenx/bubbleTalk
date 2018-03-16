var bubbleTalk = function(config) { 
	config = config || {}; 
	if(config.css.length === 0 && config.style.length === 0 || config.selector === undefined) return ;
	var duration = config.duration || 2000; 
	// nodeList
	var $items = document.body.querySelectorAll(config.selector); 
	// 原来的类名
	var originCss = []; 
	var items = []; 
	var len = $items.length; 

	// 没有泡泡
	if(0 === len) return ; 

	for(var i = 0; i < len; ++i) {
		originCss[i] = $items[i].className || ""; 
		items[i] = {dom: $items[i], index: i}; 
	}
	
	// 运动类名
	var animCss = []; 
	// 显示的泡泡列表
	var bubbles = []; 
	var cssLen = config.css.length; 
	// 如果 config.style 存在，那么会重新生成 config.css
	if(config.style.length > 0) {
		var cssText = ''; 
		cssLen = config.style.length; 
		for(var i = 0; i < cssLen; ++i) { 
			var index = cssLen - i - 1; 
			animCss[i] = "bubble_item_" + index; 
			cssText += "." + animCss[i] + " {" + config.style[index] + "}\n"; 
		}
		var $style = document.createElement("style"); 
		$style.innerHTML = cssText; 
		document.getElementsByTagName("head")[0].appendChild($style);  
		config.css = animCss; 
	}

	// 只有一个泡泡
	if(1 === len) { 
		$items[0].className = originCss[0] + " " + animCss[1]; 
		return ;
	}
	
	// 泡泡长度
	var bubblesLen = len; 

	// 初始化泡泡
	items.forEach(function(item) {
		item.dom.className = originCss[item.index] + " " + animCss[0]; 
	}); 

	// 装载泡泡
	function fillBubbles() { 
		bubbles.push(items.shift()); 
		for(var len = Math.min(cssLen, bubbles.length), i = 0; i < len; ++i) {
			bubbles[i].dom.className = originCss[i] + " " + animCss[len - i - 1]; 
		}
		(bubbles.length === Math.min(cssLen, bubblesLen) || items.length === 0) && timer.delete("fillBubbles") & iterateBubbles(); 
	}
	// 提前装载两次
	fillBubbles() & fillBubbles(); 
	timer.setInterval(
		fillBubbles, 
		duration, 
		"fillBubbles"
	); 

	function iterateBubbles() {
		// 循环播放泡泡
		timer.setInterval(
			function() { 
				// 取泡泡头节点
				var headA = bubbles.shift(); 
				// 重置样式
				headA.dom.className = originCss[headA.index] + " " + animCss[0]; 
				items.push(headA); 

				// 从隐藏队列取出头节点 
				bubbles.push(items.shift()); 
				// 重置样式
				for(var i = 0, len = Math.min(cssLen, bubblesLen); i < len; ++i) { 
					bubbles[i].dom.className = originCss[i] + " " + animCss[len - i - 1]; 
				}
			}, 
			duration, 
			"interateBubbles"
		); 
	}
}