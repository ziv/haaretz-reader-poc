
// Add a listener to any Haaretz request
chrome.webRequest.onBeforeSendHeaders.addListener(
	function(info) {
		
		// remove referer header if exists
		for (var i = 0; i < info.requestHeaders.length; ++i) {
			if (info.requestHeaders[i].name === "Referer") {
				info.requestHeaders.splice(i, 1);
				break;
			}
		}
		
		// add referer (facebook in this case, but can be any social network or search engine that Haaretz suports)
		info.requestHeaders.push({
			name	: "Referer",
			value	: "http://www.facebook.com/"
		});
		
		return { requestHeaders: info.requestHeaders };
	},
	{
		// permisions
		urls: ["*://*.haaretz.co.il/*"],
		types: ["main_frame"]
	},
	// this is a blocking function, to change the request
	["blocking", "requestHeaders"]);
