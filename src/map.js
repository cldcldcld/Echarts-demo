// export function MP(ak) {  
//   return new Promise(function (resolve, reject) {
//     var script = document.createElement("script");  
//     script.type = "text/javascript";  
//     script.src = "https://api.map.baidu.com/api?v=3.0&ak="+ak+"&callback=init";
//     script.dataset.name = 'map'
//     script.onerror = reject;
//     document.head.appendChild(script);
//     window.onload  = function () {
//       if(typeof BMap !== "undefined") {
//         resolve();
//       }
//     }  
//   })  
// } 