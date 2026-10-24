/* Animation is CSS-only; this guard dismisses the intro even if another script fails. */
(()=>{
 'use strict';
 const root=document.documentElement,key='fc-brand-intro-v1',started=performance.now();
 try{if(sessionStorage.getItem(key))return;}catch{}
 root.classList.add('brand-loading');
 let finished=false;
 function finish(){if(finished)return;finished=true;root.classList.remove('brand-loading');document.getElementById('brand-loader')?.remove();try{sessionStorage.setItem(key,'seen');}catch{}}
 const guard=setTimeout(finish,2400);
 function ready(){const minimum=matchMedia('(prefers-reduced-motion:reduce)').matches?120:650;setTimeout(()=>{clearTimeout(guard);finish();},Math.max(0,minimum-(performance.now()-started)));}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ready,{once:true});else ready();
 window.addEventListener('pageshow',event=>{if(event.persisted)finish();});
})();
