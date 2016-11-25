      chrome.webRequest.onHeadersReceived.addListener(function(details) { 
        	console.log(details.responseHeaders);
			for (var i = 0, l = details.responseHeaders.length; i < l; i++) {
			  console.log(details.responseHeaders[i].name);
			}        	
         },
        {urls: ["*://www.evil.com/"]},
        ["responseHeaders"]);

