﻿"use strict";(function(){let loadBackground=(function(){const b=(function(){const m={"0101":["ruby","ruby","forst","ruby"],"0214":["ruby","ruby","chocolate","blush"],"0312":["leaf","leaf","lime","sun"],"0314":["twilight","twilight","sky","forst"],"0322":["sea","sea","sky","forst"],"0401":(function(){const k=Object.keys(Aero);let r=function(){return k[Math.random()*k.length|0];};return[r(),r(),r(),r()];})(),"0405":["leaf","leaf","taupe","forst"],"0501":["sun","sun","pumpkin","lime"],"0504":["sea","sea","leaf","lime"],"0512":["fuchsia","fuchsia","blush","forst"],"0601":["sky","sea","leaf","sun"],"0605":["leaf","leaf","lime","sky"],"0701":["ruby","ruby","pumpkin","sun"],"0910":["violet","violet","fuchsia","forst"],"0920":["forst","forst","sky","taupe"],"1001":["ruby","ruby","ruby","sun"],"1024":["twilight","leaf","ruby","forst"],"1101":["chocolate","chocolate","lavender","slate"],"1126":["leaf","sun","pumpkin","ruby"],"1225":["ruby","ruby","forst","forst"]};const md=(function(){let d=new Date();return(d.getMonth()+1).toString().padStart(2,"0")+d.getDate().toString().padStart(2,"0");})();for(let k in m){if(k==md){let s=m[k].map(function(v){return Aero[v].splitEvery(2).map(function(c){return parseInt(c,16);});});let cvs=document.createElement("canvas");let u=2;cvs.width=s.length*u;cvs.height=s.length*u;let ctx=cvs.getContext("2d");let d=ctx.getImageData(0,0,cvs.width,cvs.height);for(let y=0;y<cvs.height;y++){for(let x=0;x<cvs.width;x++){let n=(y*cvs.height+x)*4;let i=((s.length-(y/u|0)%s.length+(x/u|0)%s.length)%s.length);d.data[n]=s[i][1];d.data[n+1]=s[i][2];d.data[n+2]=s[i][3];d.data[n+3]=s[i][0];}}
ctx.putImageData(d,0,0);return"transparent url("+cvs.toDataURL("image/png")+")";}}})();if(b){let p=function(){let h=document.documentElement;if(h.scrollHeight>h.clientHeight){if(h.style.position!="relative"){h.style.position="relative";}}else{if(h.style.position!=""){h.style.position="";}}};window.onchange=p;window.onresize=p;window.onscroll=p;document.styleSheets[0].insertRule("html:before{content:'';position:absolute;width:100%;height:100%;background:"+b+";filter:blur(2px);z-index:-1;}");}})();})();