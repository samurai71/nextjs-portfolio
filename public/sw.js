if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const o=e=>i(e,n),d={module:{uri:n},exports:r,require:o};s[n]=Promise.all(a.map((e=>d[e]||o(e)))).then((e=>(c(...e),r)))}}define(["./workbox-df677636"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/cEcLXLl_cYpalHIBt6vyu/_buildManifest.js",revision:"83818b5749dfbc67e17e0c95e417e362"},{url:"/_next/static/cEcLXLl_cYpalHIBt6vyu/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/cEcLXLl_cYpalHIBt6vyu/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/116-b7e4a4dc6a308767.js",revision:"b7e4a4dc6a308767"},{url:"/_next/static/chunks/2ad03d77-00306a9b5b31ba45.js",revision:"00306a9b5b31ba45"},{url:"/_next/static/chunks/34fcb18c-08701e466c2f737f.js",revision:"08701e466c2f737f"},{url:"/_next/static/chunks/355f11e2-e7aacdc082a4dc6c.js",revision:"e7aacdc082a4dc6c"},{url:"/_next/static/chunks/543-72bba3161b6627a8.js",revision:"72bba3161b6627a8"},{url:"/_next/static/chunks/70da5436-72b12a03197561bd.js",revision:"72b12a03197561bd"},{url:"/_next/static/chunks/84779443-6cec8c42ea323841.js",revision:"6cec8c42ea323841"},{url:"/_next/static/chunks/8b936d9b-ccfe496d39fbeb39.js",revision:"ccfe496d39fbeb39"},{url:"/_next/static/chunks/9e974bbb-5fb95ed3899b11e6.js",revision:"5fb95ed3899b11e6"},{url:"/_next/static/chunks/framework-e75f20a0d9e1f5eb.js",revision:"e75f20a0d9e1f5eb"},{url:"/_next/static/chunks/main-f0db39b8b44c1c1e.js",revision:"f0db39b8b44c1c1e"},{url:"/_next/static/chunks/pages/404-b2a1c279d78d6f32.js",revision:"b2a1c279d78d6f32"},{url:"/_next/static/chunks/pages/_error-b266d907b5647ddf.js",revision:"b266d907b5647ddf"},{url:"/_next/static/chunks/pages/about-5b0388a1a2c36969.js",revision:"5b0388a1a2c36969"},{url:"/_next/static/chunks/pages/blogs-9d8e3842753031a6.js",revision:"9d8e3842753031a6"},{url:"/_next/static/chunks/pages/blogs/%5Bslug%5D-0dbf2c062745a950.js",revision:"0dbf2c062745a950"},{url:"/_next/static/chunks/pages/blogs/bookmark-43fa5a14d19b9740.js",revision:"43fa5a14d19b9740"},{url:"/_next/static/chunks/pages/certificates-62792c1067faa943.js",revision:"62792c1067faa943"},{url:"/_next/static/chunks/pages/index-f2dded770294a22c.js",revision:"f2dded770294a22c"},{url:"/_next/static/chunks/pages/projects-0d43f1c11e07bd9c.js",revision:"0d43f1c11e07bd9c"},{url:"/_next/static/chunks/pages/stats-8a5dd34c00b16e2c.js",revision:"8a5dd34c00b16e2c"},{url:"/_next/static/chunks/pages/utilities-636cf9929a1f5785.js",revision:"636cf9929a1f5785"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-5752944655d749a0.js",revision:"5752944655d749a0"},{url:"/_next/static/css/179b1c76115b0d4a.css",revision:"179b1c76115b0d4a"},{url:"/_next/static/css/5c9e07f02ceba4da.css",revision:"5c9e07f02ceba4da"},{url:"/_next/static/css/c2c4e2b9bf1b95af.css",revision:"c2c4e2b9bf1b95af"},{url:"/_next/static/css/f26e2d0568e1d14e.css",revision:"f26e2d0568e1d14e"},{url:"/blogs/spotify-api-nextjs/banner.png",revision:"5657713278fa0347cd421661c29c5bad"},{url:"/favicon.ico",revision:"b1808602d791a633351440a0302e5ee7"},{url:"/favicon1.ico",revision:"ad73b71cdb24e02545ce519ad00ac7f1"},{url:"/feed.xml",revision:"dde674bcfe07607f4efcc2ebfe399ac8"},{url:"/fonts/Barlow/Barlow-400.woff2",revision:"bea52c2fdd1afaa74d9dbf9ed9c45020"},{url:"/fonts/Barlow/Barlow-500.woff2",revision:"a57733ad1161b4635f0608e2eb193d5c"},{url:"/fonts/Barlow/Barlow-600.woff2",revision:"2006a22e6f02c20ae1c78f99ef46c95c"},{url:"/fonts/Barlow/Barlow-700.woff2",revision:"ac0afd7e136b283b6f1127f31c6b7c24"},{url:"/fonts/Barlow/Barlow-800.woff2",revision:"f02a20067df70c28f010bcf87289de3a"},{url:"/fonts/Inter-var.woff2",revision:"b4eb9ceb52f4afe8d463c852cf08ce5c"},{url:"/fonts/Sarina/Sarina-400.woff2",revision:"3533664b6defaa2e5f9d9934bcb3eb9d"},{url:"/icons/icon-128x128.png",revision:"2866e1f2e4688045ba06582e8146a6de"},{url:"/icons/icon-144x144.png",revision:"cad63590a7240f5adef1619f0bb9e141"},{url:"/icons/icon-152x152.png",revision:"2f44d215da7b58e2051272fa287997ba"},{url:"/icons/icon-192x192.png",revision:"86fed568455a90fbafcee68d91d9d2ec"},{url:"/icons/icon-284x284.png",revision:"680416ae3dacc78be914ac41b01d4abf"},{url:"/icons/icon-48x48.png",revision:"f94dfb358a4bce25471a8f4e45e92bf8"},{url:"/icons/icon-512x512.png",revision:"7a5e6781a8c61ecc5d90c713e7a2dbe5"},{url:"/icons/icon-72x72.png",revision:"d1050c125863d147c87731f0ea81ac33"},{url:"/icons/icon-96x96.png",revision:"e84caeabb8f61cba3871a39e213ece1d"},{url:"/icons/maskable.png",revision:"6af757f41b503032b1595773bdfaf094"},{url:"/img/Mark_blackshirt.jpg",revision:"5a59a44fa86f5651518a00c8e0df928e"},{url:"/img/codepen.svg",revision:"2b24e16c36a5cf3015a88b8cfdd56523"},{url:"/img/cover/404.svg",revision:"8fe517ae7d31fa54e68508ada0decb23"},{url:"/img/cover/blogCover.svg",revision:"eb1ed6188ccd87b80deacee1d5acd92f"},{url:"/img/cover/projectCover.svg",revision:"902b89c72173cba8cc1d4eb64d37518d"},{url:"/img/cover/skill.svg",revision:"9538ee670a3fe7131e95b96c6f4476ca"},{url:"/img/cover/skill1.svg",revision:"e64b19f7582d642f789e546b2ea53b08"},{url:"/img/cover/skillCard.svg",revision:"2810be45fa100c5021c9adfea83b9f23"},{url:"/img/dev.svg",revision:"2a4244eaa5533966aa7df9b129bc5a9b"},{url:"/img/email.svg",revision:"4082623ae3f18cbd25c66c4045f02edf"},{url:"/img/facebook.svg",revision:"51f42ec568eb2bdbc734ad787f2ae037"},{url:"/img/fire-icon.jpg",revision:"852645c932fa8fa90e4fff2c5167c4ab"},{url:"/img/github.svg",revision:"1bb027109345a90a9eab1e929d8669c2"},{url:"/img/instagram.svg",revision:"56b09463bee2c26a27aebcfa7b9d8a2a"},{url:"/img/linkedin.svg",revision:"8cc2d3a80c1ebec192c2f29c08333dc6"},{url:"/img/profile.jpg",revision:"d18a5b92862ef21c156e71de970a05ea"},{url:"/img/skills/api.webp",revision:"d50044e4d1601bf619951c359673a8f0"},{url:"/img/skills/bootstrap.webp",revision:"a3cfa758b4be0a514ec0b5ca3098fdf6"},{url:"/img/skills/c.webp",revision:"b2cecfb24624f39e149f845778bdf1f5"},{url:"/img/skills/cpp.webp",revision:"3d24db04e459b693d5bb645c0c8e5057"},{url:"/img/skills/css.webp",revision:"1077139403717df791cadb81e6fe9d38"},{url:"/img/skills/django.webp",revision:"9b6d89cb7a1003b02e43714a8d2effae"},{url:"/img/skills/draftjs.webp",revision:"44d90bc876d8297d18e8d9a99a79b3d2"},{url:"/img/skills/ds.webp",revision:"04d091bf73f768d19a5e94387fe174c8"},{url:"/img/skills/figma.webp",revision:"b534e1ac833416ee9ec9ec2959a542d8"},{url:"/img/skills/firebase.webp",revision:"9f9d588b7532049c3bb2f09eeafe4472"},{url:"/img/skills/git.webp",revision:"6b7c539d69ab269bf7c55f55dc4c2393"},{url:"/img/skills/html.webp",revision:"ead65857c3edf77e21a7b08effce25d0"},{url:"/img/skills/js.webp",revision:"9115137acf25307b581ceac386cfec74"},{url:"/img/skills/materialTailwind.webp",revision:"675db4574ede09d930433014224f4414"},{url:"/img/skills/msOffice.webp",revision:"64847dcf595e87e476d94eb4768e6d29"},{url:"/img/skills/mysql.webp",revision:"bb13ae2b41b67ffe5833d662c31ad4f0"},{url:"/img/skills/nextAuth.webp",revision:"aab70a2e90a22df120d2d303fee8b22c"},{url:"/img/skills/nextjs.webp",revision:"5043a073b53d748ef280038534d163b4"},{url:"/img/skills/nodejs.webp",revision:"cd72fbca2ca558524435f0ff02e2646b"},{url:"/img/skills/photoshop.webp",revision:"51a5560c2150b6d8c19b131c3a2546d2"},{url:"/img/skills/pygame.webp",revision:"e67b228049236b33854b80442a768291"},{url:"/img/skills/python.webp",revision:"eb939598947b379f868e654912a5db5c"},{url:"/img/skills/reactjs.webp",revision:"761ab01dc3688c8d81755f24f4908153"},{url:"/img/skills/sass.webp",revision:"ae0cc54cd574306924458bd23aa90e93"},{url:"/img/skills/sqlite3.webp",revision:"203df88836c7f934fd0e55700ff80341"},{url:"/img/skills/tailwind.webp",revision:"5b875677bc74dab378d9d71d7e9aeba3"},{url:"/img/twitter.svg",revision:"9a35c67b9ac12cd7a8817a11aafdfaec"},{url:"/loading/loading.svg",revision:"45ad35c9440e4ba69a4afaf242f380e2"},{url:"/logo.svg",revision:"ab39ce9e07f1d1b587eb058f6a37614d"},{url:"/manifest.json",revision:"beba6ae011d4c7269ce1570504211a65"},{url:"/pagesBanner/blogs.png",revision:"3626c43e913146d2111eb3545cd67db4"},{url:"/pagesBanner/certificate.png",revision:"ca68a68b45e0998f0191f475c3e59c30"},{url:"/pagesBanner/index.png",revision:"eccf1e7137485cd7f9658949838211d1"},{url:"/pagesBanner/projects.png",revision:"15fb4c7544900ee7c0151456019c3a90"},{url:"/pagesBanner/stats.png",revision:"0d017f3c5ca83eeba2fb0638dd4cc457"},{url:"/pagesBanner/uses.png",revision:"a6f86011e630197dc28d74710d422694"},{url:"/robots.txt",revision:"e4748200a933455840f896f151f8d088"},{url:"/screenshots/blogs.png",revision:"625a33be53cb510c3647dcd788569243"},{url:"/screenshots/contact.png",revision:"3fd7452fbd0f920d9f54ded34c22546c"},{url:"/screenshots/home.png",revision:"994a3e60f3ce920a50d0e0a9f83e2abe"},{url:"/screenshots/projects.png",revision:"31ed44a38aed7379450445484d60d360"},{url:"/screenshots/stats.png",revision:"95739fc7d7bd1b1acc940865842f494d"},{url:"/screenshots/utilities.png",revision:"85af1ce75f5a7ba99d40b03261042682"},{url:"/shortcuts/about.png",revision:"44cca4584e32d004a1baec83509eb1e7"},{url:"/shortcuts/blog.png",revision:"2209a57bb7f58a6db8625c83e7fd98d0"},{url:"/shortcuts/newsletter.png",revision:"f418e65e0c27552d788d884e56eabbbb"},{url:"/sitemap.xml",revision:"d85819cc05c367f47e47f87d9b55b5fd"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
