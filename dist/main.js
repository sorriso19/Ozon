(()=>{"use strict";(()=>{const e=document.getElementById("cart"),t=document.querySelector(".cart"),c=t.querySelector(".cart-close");e.addEventListener("click",(()=>{t.style.display="flex"})),c.addEventListener("click",(()=>{t.style.display=""}))})(),document.getElementById("cart").addEventListener("click",(()=>{fetch("https://jsonplaceholder.typicode.com/users").then((e=>e.json())).then((e=>{console.log(e)}))}))})();