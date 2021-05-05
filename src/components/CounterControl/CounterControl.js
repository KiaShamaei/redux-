import React from 'react'

import './CounterControl.css'
// const getDeviceType = () => {
//   const ua = navigator.userAgent;
//   if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
//     return "tablet";
//   }
//   if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
//     return "mobile";
//   }
//   return "desktop";
// };
//=================get device type ====================
function getOS() {
  let userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'],
      os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'DEVICE_TYPE_MAC';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'DEVICE_TYPE_IOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'DEVICE_TYPE_Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'DEVICE_TYPE_ANDROID';
  } else if (!os && /Linux/.test(platform)) {
    os = 'DEVICE_TYPE_Linux';
  }

return os;
}
//web push notification ------------------------------------
const img = "/images/jason-leung-HM6TMmevbZQ-unsplash.jpg";
const text = "Take a look at this brand new t-shirt!";
const title = "New Product Available";
const options = {
    body: text,
    icon: "/images/jason-leung-HM6TMmevbZQ-unsplash.jpg",
    vibrate: [200, 100, 200],
    tag: "new-product",
    image: img,
    badge: "https://spyna.it/icons/android-icon-192x192.png",
    actions: [{ action: "Detail", title: "View", icon: "https://via.placeholder.com/128/ff0000" }]
 };

navigator.serviceWorker.ready.then(function(serviceWorker) {
  serviceWorker.showNotification(title, options);
});
//-------------get userAgent------------------------------------------

const getUserAgent=()=>{
  let userAgentBrowser = null
  if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) !== -1 ) 
  {
    userAgentBrowser = 'Opera';
  }
  else if(navigator.userAgent.indexOf("Chrome") !== -1 )
  {
    userAgentBrowser ='Chrome';
  }
  else if(navigator.userAgent.indexOf("Safari") !== -1)
  {
    userAgentBrowser ='Safari';
  }
  else if(navigator.userAgent.indexOf("Firefox") !== -1 ) 
  {
    userAgentBrowser ='Firefox';
  }
  else if((navigator.userAgent.indexOf("MSIE") !== -1 ) || (!!document.documentMode === true )) //IF IE > 10
  {
    userAgentBrowser ='IE'; 
  } 
  else if((navigator.userAgent.indexOf("APP") !== -1 ) )
  {
    userAgentBrowser ='APP'; 
  } 
  else if((navigator.userAgent.indexOf("API") !== -1 ) ) 
  {
    userAgentBrowser ='API'; 
  } 
  else 
  {
    userAgentBrowser ='other';
  }
  return userAgentBrowser ;
}
const createGuid=()=>{  
  function S4() {  
     return (((1+Math.random())*0x10000)|0).toString(16).substring(1);  
  }  
  return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();  
}  
const timeStamp = ()=>{
  const currentDate = new Date();
  const timeStamp = currentDate.getTime();

  return timeStamp ; 

}
 
 ; 

console.log(getOS(),getUserAgent(),createGuid(), "Time stamp : ", timeStamp());
const CounterControl = (props) => (
  <div className="counter-control" onClick={props.clicked}>
    {props.label}
  </div>
)

export default CounterControl
