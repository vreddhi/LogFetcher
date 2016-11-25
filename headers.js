      chrome.webRequest.onHeadersReceived.addListener(function(details) { 
      	console.log("**********--------------********************" );
      	console.log("URL " + details.url);
	    details.responseHeaders.forEach(function(v){	    	      
		      if(v.name == "X-Cache" || v.name == "Date" || v.name == "X-Akamai-Request-ID"){
		       console.log("Name: " + v.name + " Value: " + v.value );		 		        
		      }
	      })			  		       	
         },
        {urls: ["*://*/*"]},
        ["responseHeaders"]);

