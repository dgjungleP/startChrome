
setInterval(function(){
    chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
        if(message == 'Hello'){
            sendResponse('Hello from background.');
        }
    });
},5000);