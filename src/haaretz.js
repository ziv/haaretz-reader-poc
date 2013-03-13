

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
		var list	= ["http://www.facebook.com/", "http://www.twitter.com/"];
		var url		= list[ Math.round(Math.random() * 1) ];
		
		/*
		// TODO: Do we need to salt to URL? - Answer: NO!
		// create salt
		var len		= Math.round(Math.random() * 7);
		var chars	= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		var salt	= "";
		
		for (var i = 0; i < len; ++i) {
			salt += chars.charAt(Math.floor(Math.random() * chars.length));
		}
		url += salt;
		//console.log(url);
		*/
		
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