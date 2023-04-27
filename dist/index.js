"use strict";(()=>{var C=new Map([["tiny","(max-width: 479px)"],["small","(max-width: 767px)"],["medium","(max-width: 991px)"],["main","(min-width: 992px)"]]);var v=()=>{for(let[e,o]of C)if(window.matchMedia(o).matches)return e;return"main"};var k=e=>{};var S=e=>{};var _=e=>{};var E=e=>{};var L=e=>{(window.dataLayer||[]).push(e)};var T=e=>{let o=".pill__text",u=document.querySelectorAll("input, textarea"),g=document.querySelectorAll(".form__input"),y=document.querySelectorAll(".pill"),w=document.querySelectorAll(".pill input"),p=document.querySelector("#contact-form"),a=p==null?void 0:p.querySelector('input[type="submit"]'),r=p==null?void 0:p.nextElementSibling,i=!1,s=!1,d=!1;h(),x();function h(){y.forEach(c=>{let l=c.querySelectorAll(o),f=l[0].textContent;l[1].textContent=f,c.setAttribute("data-mouse-text",f)})}function x(){u.forEach(t=>{t.addEventListener("focus",()=>{P(t)})}),g.forEach(t=>{t.addEventListener("focusout",()=>{H(t)})}),w.forEach(t=>{t.addEventListener("change",()=>{t.closest(".pill").classList.toggle("is--selected")})});let c={attributes:!0},l=(t,n)=>{for(let m of t)if(m.type==="attributes"&&m.attributeName==="style"){if(m.target.style.display==="none")return;L({form_submit:"contact"})}};new MutationObserver(l).observe(r,c);function N(t){let n=t.parentNode.querySelector(".form__input-error");return t.checkValidity()?(n.classList.add("hide"),!0):(n.classList.remove("hide"),!1)}function P(t){if(t.type!=="submit"){if(t.classList.contains("form__input")){let n=t.parentNode.querySelector(".input__border");n.style.transitionDuration="1000ms",n.style.right="0%"}if(e.site.hasMouse){let n=t.closest(".form__input-wrapper").querySelector(".form__input-scroll-to"),m=$(n).offset();$("html, body").animate({scrollTop:m.top},500)}}}function H(t){let n=t.parentNode.querySelector(".input__border");n.style.transitionDuration="500ms",n.style.right="100%";let m=t.getAttribute("name"),b=N(t);switch(m){case"name":i=b;break;case"company-name":s=b;break;case"email":d=b;break;default:break}}}};var A=e=>{document.readyState!=="loading"?u():document.addEventListener("DOMContentLoaded",u);let o=document.querySelectorAll(".work-list__item");function u(){console.log("home"),g(),y(),SITEWIDE.HASMOUSE&&w(),SITEWIDE.HASMOUSE||p()}function g(){a();function a(){document.querySelectorAll(".work-overview__tags h4").forEach(i=>{let s=i.textContent.split(" / ").sort(),d=document.createElement("div");d.classList.add("work-overview__tags"),s.forEach((h,x)=>{let c=document.createElement("div");c.classList.add("work-overview__tag");let l=document.createElement("h4");if(l.classList.add("text-size-18","text-weight-normal"),l.setAttribute("fs-cmsfilter-field","tag"),l.textContent=h,c.appendChild(l),x!==s.length-1){console.log("adding");let f=document.createElement("div");f.classList.add("text-size-18"),f.textContent="\xA0/\xA0",c.appendChild(f)}d.appendChild(c)}),i.closest(".work-overview__tags").replaceWith(d)})}}function y(){a();function a(){document.querySelectorAll(".work-overview__item").forEach(i=>{let s=i.querySelector("[data-slug]").getAttribute("data-slug");i.querySelector(".work-overview__link").href=s})}}function w(){o.forEach(r=>{r.addEventListener("mouseenter",i=>{a(r)}),r.addEventListener("mouseleave",i=>{a(r)})});function a(r){r.querySelectorAll(".background-video__wrapper").forEach(s=>{s.classList.toggle("is--hovered"),r.classList.toggle("z-2")})}}function p(){document.querySelectorAll(".work-overview__item").forEach(a=>{new IntersectionObserver((r,i)=>{r.forEach(s=>{s.isIntersecting?s.target.classList.add("in-view"):s.target.classList.remove("in-view")})},{threshold:.5}).observe(a)})}};var q=e=>{};var I=e=>{};var W=e=>{};var O=e=>{};var M=e=>{};var D=e=>{};var V=e=>{};var B=e=>{let{pathname:o}=window.location;switch(o){case"/":A(e);break;case"/work":D(e);break;case"/about-us":k(e);break;case"/careers":_(e);break;case"/news":W(e);break;case"/contact":T(e);break;case"/brand-resources":S(e);break;default:o.includes("/work/")?V(e):o==="/privacy-policy"||o==="/terms-conditions"?I(e):o.includes("/client-assets/")?E(e):o.includes("/lp/")?q(e):o.includes("/services/")?M(e):o.includes("/news/")&&O(e)}};window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{let e={site:{currentBreakpoint:v(),hasMouse:window.matchMedia("(pointer: fine)").matches}};B(e)});})();
