!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n(require("react"));else if("function"==typeof define&&define.amd)define(["react"],n);else{var t="object"==typeof exports?n(require("react")):n(e.React);for(var r in t)("object"==typeof exports?exports:e)[r]=t[r]}}(self,(e=>(()=>{"use strict";var n={60:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(601),a=t.n(r),o=t(314),c=t.n(o)()(a());c.push([e.id,".pan-card {\n    width: 340px;\n    aspect-ratio: 1.6;\n    border: 1px solid #ccc;\n    border-radius: 10px;\n    padding: 16px;\n    font-family: 'Arial, sans-serif';\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    background-color: #D8EFFF; /*#D8EFFF or #91C6F8*/\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.pan-card-header {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 56px;\n    align-items: center;\n}\n\n.pan-card-title {\n    font-size: 13px;\n    color: #333;\n    text-align: left;\n}\n\n.ln-en {\n    letter-spacing: -0.90px;\n}\n\n.ln-hi {\n    margin-bottom: 4px;\n    font-size: 15px;\n}\n\n.pan-card-emblem img {\n    width: 25px;\n}\n\n.pan-card-body {\n    text-align: left;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.pan-card-name {\n    font-size: 20px;\n    font-weight: bold;\n    margin-bottom: 8px;\n    text-transform: uppercase;\n}\n\n.pan-card-number {\n    font-size: 18px;\n    color: #333;\n}\n\n.pan-card-user-icon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 50px;\n    height: 50px;\n    border-radius: 5px;\n    background-color: #C5E8FE;\n}\n\n.pan-card-user-icon img {\n    width: 30px;\n    opacity: 0.4;\n}",""]);const i=c},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var l=0;l<e.length;l++){var p=[].concat(e[l]);r&&c[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),n.push(p))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},c=[],i=0;i<e.length;i++){var s=e[i],l=r.base?s[0]+r.base:s[0],p=o[l]||0,d="".concat(l," ").concat(p);o[l]=p+1;var u=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=a(f,r);r.byIndex=i,n.splice(i,0,{identifier:d,updater:m,references:1})}c.push(d)}return c}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var c=0;c<o.length;c++){var i=t(o[c]);n[i].references--}for(var s=r(e,a),l=0;l<o.length;l++){var p=t(o[l]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}o=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},12:n=>{n.exports=e}},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var o=t[e]={id:e,exports:{}};return n[e](o,o.exports,r),o.exports}r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var n=r.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");if(t.length)for(var a=t.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=t[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.nc=void 0;var a={};r.r(a),r.d(a,{PanCard:()=>N});var o=r(12),c=r.n(o),i=r(72),s=r.n(i),l=r(825),p=r.n(l),d=r(659),u=r.n(d),f=r(56),m=r.n(f),v=r(540),b=r.n(v),h=r(113),y=r.n(h),g=r(60),x={};x.styleTagTransform=y(),x.setAttributes=m(),x.insert=u().bind(null,"head"),x.domAPI=p(),x.insertStyleElement=b(),s()(g.A,x),g.A&&g.A.locals&&g.A.locals;const E=r.p+"b87a45ce4568c0820d08d26597db2f96.png",w=r.p+"8d28541f548c83ef3511732e5fe8a0ed.png",N=function(e){var n=e.name,t=e.number;return c().createElement("div",{className:"pan-card"},c().createElement("div",{className:"pan-card-header"},c().createElement("div",null,c().createElement("div",{className:"pan-card-title ln-hi"},"आयकर विभाग"),c().createElement("div",{className:"pan-card-title ln-en"},"INCOME TAX DEPARTMENT")),c().createElement("div",{className:"pan-card-emblem"},c().createElement("img",{src:E,alt:"National Emblem of India"})),c().createElement("div",null,c().createElement("div",{className:"pan-card-title ln-hi"},"भारत सरकार"),c().createElement("div",{className:"pan-card-title ln-en"},"GOVT. OF INDIA"))),c().createElement("div",{className:"pan-card-body"},c().createElement("div",null,c().createElement("div",{className:"pan-card-name"},n),c().createElement("div",{className:"pan-card-number"},t)),c().createElement("div",{className:"pan-card-user-icon"},c().createElement("img",{src:w,alt:"user icon"}))))};return a})()));