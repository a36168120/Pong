!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=10)}([function(t,e,n){t.exports=n.p+"public/fonts/slkscr-webfont.eot"},function(t,e,n){var r=n(2);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(8)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(3)(!1);var r=n(4),i=r(n(0)),o=r(n(0)+"?#iefix"),s=r(n(5)),a=r(n(6)),l=r(n(7)+"#silkscreennormal");e.push([t.i,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/**\n * FONTS\n */\n\n@font-face {\n  font-family: 'Silkscreen Web';\n  src: url("+i+");\n  src: url("+o+") format('embedded-opentype'),\n    url("+s+") format('woff'),\n    url("+a+") format('truetype'),\n    url("+l+") format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n\n/**\n * GAME\n */\n\nhtml {\n  font-size: 16px;\n}\n\nbody {\n  align-items: center;\n  display: flex;\n  font-family: 'Silkscreen Web', monotype;\n  height: 100vh;\n  justify-content: center;\n  width: 100%;\n}\n\nh1 {\n  font-size: 2.5rem;\n  margin-bottom: 1rem; \n  text-align: center;\n}\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(o).concat([i]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){"use strict";t.exports=function(t,e){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||e?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},function(t,e,n){t.exports=n.p+"public/fonts/slkscr-webfont.woff"},function(t,e,n){t.exports=n.p+"public/fonts/slkscr-webfont.ttf"},function(t,e,n){t.exports=n.p+"public/fonts/slkscr-webfont.svg"},function(t,e,n){var r,i,o={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),a=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),l=null,u=0,h=[],c=n(9);function f(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=o[r.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](r.parts[s]);for(;s<r.parts.length;s++)i.parts.push(m(r.parts[s],e))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(m(r.parts[s],e));o[r.id]={id:r.id,refs:1,parts:a}}}}function d(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],s=e.base?o[0]+e.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function p(t,e){var n=a(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=h[h.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),h.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=a(t.insertAt.before,n);n.insertBefore(e,i)}}function b(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=h.indexOf(t);e>=0&&h.splice(e,1)}function y(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return v(e,t.attrs),p(t,e),e}function v(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function m(t,e){var n,r,i,o;if(e.transform&&t.css){if(!(o="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=o}if(e.singleton){var s=u++;n=l||(l=y(e)),r=x.bind(null,n,s,!1),i=x.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),p(t,e),e}(e),r=function(t,e,n){var r=n.css,i=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=c(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,e),i=function(){b(n),n.href&&URL.revokeObjectURL(n.href)}):(n=y(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){b(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=d(t,e);return f(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var s=n[i];(a=o[s.id]).refs--,r.push(a)}t&&f(d(t,e),e);for(i=0;i<r.length;i++){var a;if(0===(a=r[i]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete o[a.id]}}}};var g,w=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function x(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(t,e,n){"use strict";n.r(e);n(1);var r="http://www.w3.org/2000/svg",i={a:"a",z:"z",up:"ArrowUp",down:"ArrowDown",spaceBar:" "};function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var s=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.width=e,this.height=n}var e,n,i;return e=t,(n=[{key:"render",value:function(t){var e=document.createElementNS(r,"rect");e.setAttributeNS(null,"fill","#607546"),e.setAttributeNS(null,"width",this.width),e.setAttributeNS(null,"height",this.height);var n=document.createElementNS(r,"line");n.setAttributeNS(null,"x1",this.width/2),n.setAttributeNS(null,"y1",0),n.setAttributeNS(null,"x2",this.width/2),n.setAttributeNS(null,"y2",this.height),n.setAttributeNS(null,"stroke","white"),n.setAttributeNS(null,"stroke-dasharray","20, 15"),n.setAttributeNS(null,"stroke-width","4"),t.appendChild(e),t.appendChild(n)}}])&&o(e.prototype,n),i&&o(e,i),t}();function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var l=function(){function t(e,n,r,i,o,s,a,l){var u=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.boardHeight=e,this.width=n,this.height=r,this.x=i,this.y=o,this.speed=10,this.score=0,this.color=l,document.addEventListener("keydown",function(t){switch(t.key){case s:u.up();break;case a:u.down()}})}var e,n,i;return e=t,(n=[{key:"up",value:function(){this.y=this.y-this.speed,this.y=Math.max(0,this.y-this.speed)}},{key:"down",value:function(){this.y=this.y+this.speed,this.y=Math.min(this.boardHeight-this.height,this.y+this.speed)}},{key:"coordinates",value:function(t,e,n,r){return{leftX:t,rightX:t+n,topY:e,bottomY:e+r}}},{key:"render",value:function(t){var e=document.createElementNS(r,"rect");e.setAttributeNS(null,"fill",this.color),e.setAttributeNS(null,"width",this.width),e.setAttributeNS(null,"height",this.height),e.setAttributeNS(null,"x",this.x),e.setAttributeNS(null,"y",this.y),e.setAttributeNS(null,"rx",6),t.appendChild(e)}}])&&a(e.prototype,n),i&&a(e,i),t}();function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.radius=e,this.boardWidth=n,this.boardHeight=r,this.direction=1,this.reset()}var e,n,i;return e=t,(n=[{key:"reset",value:function(){for(this.x=this.boardWidth/2,this.y=this.boardHeight/2,this.vy=0;0===this.vy;)this.vy=Math.floor(10*Math.random()-5);this.vx=this.direction*(6-Math.abs(this.vy))}},{key:"wallCollision",value:function(){var t=this.x-this.radius<=0,e=this.x+this.radius>=this.boardWidth,n=this.y-this.radius<=0,r=this.y+this.radius>=this.boardHeight;t||e?this.vx=-this.vx:(n||r)&&(this.vy=-this.vy)}},{key:"paddleCollision",value:function(t,e){if(this.vx>0){var n=u(e.coordinates(e.x,e.y,e.width,e.height),4),r=n[0],i=n[1],o=n[2],s=n[3];this.x+this.radius>=r&&this.x+this.radius<=i&&this.y>=o&&this.y<=s&&(this.vx=-this.vx)}else{var a=u(t.coordinates(t.x,t.y,t.width,t.height),4),l=a[0],h=a[1],c=a[2],f=a[3];this.x-this.radius<=h&&this.x-this.radius>=l&&this.y>=c&&this.y<=f&&(this.vx=-this.vx)}}},{key:"render",value:function(t,e,n){this.x+=this.vx,this.y+=this.vy,this.wallCollision(),this.paddleCollision(e,n);var i=document.createElementNS(r,"circle");i.setAttributeNS(null,"r",this.radius),i.setAttributeNS(null,"cx",this.x),i.setAttributeNS(null,"cy",this.y),i.setAttributeNS(null,"fill","yellow"),i.setAttributeNS(null,"stroke","black"),t.appendChild(i)}}])&&h(e.prototype,n),i&&h(e,i),t}();function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var d=new(function(){function t(e,n,r){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=e,this.width=n,this.height=r,this.gameElement=document.getElementById(this.element),this.board=new s(this.width,this.height),this.paddleWidth=8,this.paddleHeight=56,this.boardGap=10,this.player1=new l(this.height,this.paddleWidth,this.paddleHeight,this.boardGap,(this.height-this.paddleHeight)/2,i.a,i.z),this.player2=new l(this.height,this.paddleWidth,this.paddleHeight,this.width-this.boardGap-this.paddleWidth,(this.height-this.paddleHeight)/2,i.up,i.down),this.ball=new c(10,this.width,this.height),document.addEventListener("keydown",function(t){switch(t.key){case i.spaceBar:o.pause=!o.pause}})}var e,n,o;return e=t,(n=[{key:"render",value:function(){if(!this.pause){this.gameElement.innerHTML="";var t=document.createElementNS(r,"svg");t.setAttributeNS(null,"width",this.width),t.setAttributeNS(null,"height",this.height),t.setAttributeNS(null,"viewBox","0 0 ".concat(this.width," ").concat(this.height)),this.gameElement.appendChild(t),this.board.render(t),this.player1.render(t),this.player2.render(t),this.ball.render(t,this.player1,this.player2)}}}])&&f(e.prototype,n),o&&f(e,o),t}())("game",512,256);!function t(){d.render(),requestAnimationFrame(t)}()}]);