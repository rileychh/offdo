if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,l)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let n={};const u=e=>i(e,o),t={module:{uri:o},exports:n,require:u};s[o]=Promise.all(r.map((e=>t[e]||u(e)))).then((e=>(l(...e),n)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"offdo"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/app.db8e1255.css",revision:null},{url:"css/chunk-vendors.8a42e1de.css",revision:null},{url:"img/app_store_download.1fe1731d.svg",revision:null},{url:"img/google_play_download.e7f94b16.svg",revision:null},{url:"img/hero-primary-pic.55380a32.svg",revision:null},{url:"img/logo-wh-text.97dbaf6b.svg",revision:null},{url:"img/logo.577cf6b2.svg",revision:null},{url:"img/star-left.64768842.svg",revision:null},{url:"img/star-right.3e84ddde.svg",revision:null},{url:"index.html",revision:"48f77f37325cf46746a732f29345d175"},{url:"js/about.838d2c88.js",revision:null},{url:"js/app.9b42f9c2.js",revision:null},{url:"js/chunk-vendors.1030c826.js",revision:null},{url:"manifest.json",revision:"3796c63aea593af4ca4e9f6a284bf39a"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map