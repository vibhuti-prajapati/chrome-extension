chrome.runtime.onInstalled.addlistener( function (){
    
});
chrome.runtime.onMessage.addListener(function (request,sender,sendResponse){
    if(request.action==="micCameraInUse"){
        chrome.notifications,create({
            type:"basic",
            iconUrl:"privacy-policy.png",
            title: "Mic Camera In Use",
            message: "this website is accessing your microphone or camera."
        });
    }
    });