

chrome.webRequest.onBeforeSendHeaders.addListener(
	function(info) {
		
		// remove referer header if exists
		for (var i = 0; i < info.requestHeaders.length; ++i) {
			if (info.requestHeaders[i].name === "Referer") {
				info.requestHeaders.splice(i, 1);
				break;
			}
		}
		//console.log(info.requestHeaders);
		
		// choose referer url 
		// TODO: add more URLs that Haaretz support 
		// TODO: Do we need those URLs or can we stick with one only?
		// var list	= ["http://www.facebook.com/", "http://www.twitter.com/", "http://www.google.com"];
		// var url		= list[ Math.round(Math.random() * 2) ];
		
		var url		= "http://www.facebook.com/";
		
		// add referer
		info.requestHeaders.push({
			name	: "Referer",
			value	: url
		});
		//console.log(info.requestHeaders);
		
		return { requestHeaders: info.requestHeaders };
	},
	{
		urls: ["*://*.haaretz.co.il/*"],
		types: ["main_frame"]
	},
	["blocking", "requestHeaders"]);