"use strict";(self.webpackChunkdropdown_menu=self.webpackChunkdropdown_menu||[]).push([[296],{426:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap);"]),i.push([n.id,"* {\r\n    font-family: 'Roboto', Helvetica, Arial, sans-serif;\r\n}\r\n\r\n.container {\r\n    width: 60%;\r\n}\r\n\r\nheader {\r\n    text-align: center;\r\n}\r\n\r\nmain {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    \r\n}\r\n\r\n.drop-down {\r\n    list-style: none;\r\n    overflow: hidden;\r\n    height: 180px;\r\n    width: 200px;\r\n    padding: 0;\r\n    transition: height 0.2s ease;\r\n\r\n}\r\n\r\nbutton {\r\n    width: 200px;\r\n    height: 30px;\r\n    background: none;\r\n    border: 1px cornflowerblue solid;\r\n    cursor: pointer;\r\n    color: cornflowerblue;\r\n    font-weight: bold;\r\n    transition: all 0.2s ease;\r\n    font-size: 12pt;\r\n}\r\n\r\nbutton:hover {\r\n    background-color: cornflowerblue;\r\n    color: #fff;\r\n}\r\n\r\n.closed {\r\n    height: 33px;\r\n}\r\n\r\nli {\r\n    height: 35px;\r\n}\r\n\r\nfooter {\r\n    font-size: small;\r\n    position: absolute;\r\n    bottom: 5px;\r\n    width: calc(100vw - 10px);\r\n    text-align: center;\r\n}",""]);const s=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);t&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),r.push(u))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=t.base?c[0]+t.base:c[0],u=a[l]||0,p="".concat(l," ").concat(u);a[l]=u+1;var d=e(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)r[d].references++,r[d].updater(f);else{var h=o(f,t);t.byIndex=s,r.splice(s,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);r[s].references--}for(var c=t(n,o),l=0;l<a.length;l++){var u=e(a[l]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}a=c}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},987:(n,r,e)=>{var t=e(379),o=e.n(t),a=e(795),i=e.n(a),s=e(569),c=e.n(s),l=e(565),u=e.n(l),p=e(216),d=e.n(p),f=e(589),h=e.n(f),v=e(426),m={};m.styleTagTransform=h(),m.setAttributes=u(),m.insert=c().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=d(),o()(v.Z,m),v.Z&&v.Z.locals&&v.Z.locals;const g=document.querySelectorAll(".nav-btn");for(let n=0;n<g.length;n++)g[n].addEventListener("click",(function(){this.parentElement.classList.toggle("closed")}))}},n=>{n(n.s=987)}]);