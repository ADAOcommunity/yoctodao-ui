!function(){"use strict";var e,n,t,r,o,c,a,i,f,u,s={},d={};function l(e){var n=d[e];if(void 0!==n)return n.exports;var t=d[e]={id:e,loaded:!1,exports:{}};return s[e].call(t.exports,t,t.exports,l),t.loaded=!0,t.exports}l.m=s,e="function"==typeof Symbol?Symbol("webpack then"):"__webpack_then__",n="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",t=function(e){e&&(e.forEach((function(e){e.r--})),e.forEach((function(e){e.r--?e.r++:e()})))},r=function(e){!--e.r&&e()},o=function(e,n){e?e.push(n):r(n)},l.a=function(c,a,i){var f,u,s,d=i&&[],l=c.exports,p=!0,b=!1,m=function(n,t,r){b||(b=!0,t.r+=n.length,n.map((function(n,o){n[e](t,r)})),b=!1)},h=new Promise((function(e,n){s=n,u=function(){e(l),t(d),d=0}}));h[n]=l,h[e]=function(e,n){if(p)return r(e);f&&m(f,e,n),o(d,e),h.catch(n)},c.exports=h,a((function(c){if(!c)return u();var a,i;f=function(c){return c.map((function(c){if(null!==c&&"object"==typeof c){if(c[e])return c;if(c.then){var a=[];c.then((function(e){i[n]=e,t(a),a=0}));var i={};return i[e]=function(e,n){o(a,e),c.catch(n)},i}}var f={};return f[e]=function(e){r(e)},f[n]=c,f}))}(c);var s=new Promise((function(e,t){(a=function(){e(i=f.map((function(e){return e[n]})))}).r=0,m(f,a,t)}));return a.r?s:i})).then(u,s),p=!1},c=[],l.O=function(e,n,t,r){if(!n){var o=1/0;for(u=0;u<c.length;u++){n=c[u][0],t=c[u][1],r=c[u][2];for(var a=!0,i=0;i<n.length;i++)(!1&r||o>=r)&&Object.keys(l.O).every((function(e){return l.O[e](n[i])}))?n.splice(i--,1):(a=!1,r<o&&(o=r));if(a){c.splice(u--,1);var f=t();void 0!==f&&(e=f)}}return e}r=r||0;for(var u=c.length;u>0&&c[u-1][2]>r;u--)c[u]=c[u-1];c[u]=[n,t,r]},l.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(n,{a:n}),n},l.d=function(e,n){for(var t in n)l.o(n,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},l.f={},l.e=function(e){return Promise.all(Object.keys(l.f).reduce((function(n,t){return l.f[t](e,n),n}),[]))},l.u=function(e){return({29:"57352d49",98:"component---src-pages-opening-js",172:"component---src-pages-tutorial-js",212:"component---src-templates-profile-js",329:"component---src-pages-faq-js",330:"0d3980a1f8ecaeb9c8df76f240dd17b55036fa65",334:"125b0409",413:"62605e92ecafe1a7bd83a47c3ec9b9aa8cf3b574",471:"component---src-templates-spacebud-js",532:"styles",678:"component---src-pages-index-js",682:"component---src-pages-about-js",713:"component---src-pages-privacy-policy-js",829:"b51e3fe019fcb250873da7ce7eb7fb8e92bb9742",883:"component---src-pages-404-js",959:"component---src-templates-explore-js",973:"3c6fe6bb",994:"1252e5ffa352fa7d7f9000a05975864309b2f62c"}[e]||e)+"-"+{29:"9653277d5608d3ed40b9",98:"e9e0da9f31378bc748f6",172:"752e7e2e3f5a57e7eb5b",212:"9eeb7231a3c9a762d8db",329:"1f2f58d6cd69f2018fa1",330:"aa8fe677d2ff92d3ca35",334:"dea89b720cf43d9970b2",413:"763e0e6ea8981161743e",471:"bb392d1fae4034269a9c",532:"6cffa6a558b39ca41017",678:"c103b6335e8cf6aa2131",682:"e74d2af2f95b41559961",713:"cdb628550e5f2bd0f0f9",829:"d5726ef652796976abab",883:"37abb34b4c463a37b039",886:"cfcbfafbe1a920b7bd3d",939:"8f05b27a45dc3ab23dc7",959:"29ce66cc298742e5ce82",973:"2eda199efac2e2b95a14",994:"b37f42ca3e84e255427f"}[e]+".js"},l.miniCssF=function(e){return"styles.c0e2b6a3e64eb342fa10.css"},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a={},i="space-budz:",l.l=function(e,n,t,r){if(a[e])a[e].push(n);else{var o,c;if(void 0!==t)for(var f=document.getElementsByTagName("script"),u=0;u<f.length;u++){var s=f[u];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==i+t){o=s;break}}o||(c=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,l.nc&&o.setAttribute("nonce",l.nc),o.setAttribute("data-webpack",i+t),o.src=e),a[e]=[n];var d=function(n,t){o.onerror=o.onload=null,clearTimeout(p);var r=a[e];if(delete a[e],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),c&&document.head.appendChild(o)}},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},l.v=function(e,n,t,r){var o=fetch(l.p+""+t+".module.wasm");return"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(o,r).then((function(n){return Object.assign(e,n.instance.exports)})):o.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,r)})).then((function(n){return Object.assign(e,n.instance.exports)}))},l.p="/",f=function(e){return new Promise((function(n,t){var r=l.miniCssF(e),o=l.p+r;if(function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=(a=t[r]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===n))return a}var c=document.getElementsByTagName("style");for(r=0;r<c.length;r++){var a;if((o=(a=c[r]).getAttribute("data-href"))===e||o===n)return a}}(r,o))return n();!function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(c){if(o.onerror=o.onload=null,"load"===c.type)t();else{var a=c&&("load"===c.type?"missing":c.type),i=c&&c.target&&c.target.href||n,f=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");f.code="CSS_CHUNK_LOAD_FAILED",f.type=a,f.request=i,o.parentNode.removeChild(o),r(f)}},o.href=n,document.head.appendChild(o)}(e,o,n,t)}))},u={658:0},l.f.miniCss=function(e,n){u[e]?n.push(u[e]):0!==u[e]&&{532:1}[e]&&n.push(u[e]=f(e).then((function(){u[e]=0}),(function(n){throw delete u[e],n})))},function(){var e={658:0,532:0};l.f.j=function(n,t){var r=l.o(e,n)?e[n]:void 0;if(0!==r)if(r)t.push(r[2]);else if(/^(532|658)$/.test(n))e[n]=0;else{var o=new Promise((function(t,o){r=e[n]=[t,o]}));t.push(r[2]=o);var c=l.p+l.u(n),a=new Error;l.l(c,(function(t){if(l.o(e,n)&&(0!==(r=e[n])&&(e[n]=void 0),r)){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;a.message="Loading chunk "+n+" failed.\n("+o+": "+c+")",a.name="ChunkLoadError",a.type=o,a.request=c,r[1](a)}}),"chunk-"+n,n)}},l.O.j=function(n){return 0===e[n]};var n=function(n,t){var r,o,c=t[0],a=t[1],i=t[2],f=0;if(c.some((function(n){return 0!==e[n]}))){for(r in a)l.o(a,r)&&(l.m[r]=a[r]);if(i)var u=i(l)}for(n&&n(t);f<c.length;f++)o=c[f],l.o(e,o)&&e[o]&&e[o][0](),e[c[f]]=0;return l.O(u)},t=self.webpackChunkspace_budz=self.webpackChunkspace_budz||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}()}();
//# sourceMappingURL=webpack-runtime-52becb81b95615aac818.js.map