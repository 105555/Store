import{m as b,V as y,u as D,b as d}from"./VOverlay-e88ee54e.js";import{f as h}from"./forwardRefs-e658ad70.js";import{p as S,j as x,D as w,y as B,$ as F,A as v,U as I,q as R,f as m,G as g,a0 as T}from"./index-aa075662.js";import{u as A,j as O}from"./VAvatar-fe7aa7e1.js";const j=S({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...b({origin:"center center",scrollStrategy:"block",transition:{component:y},zIndex:2400})},"VDialog"),$=x()({name:"VDialog",props:j(),emits:{"update:modelValue":a=>!0},setup(a,p){let{slots:c}=p;const n=w(a,"modelValue"),{scopeId:V}=D(),o=B();function i(l){var r,s;const e=l.relatedTarget,t=l.target;if(e!==t&&((r=o.value)!=null&&r.contentEl)&&((s=o.value)!=null&&s.globalTop)&&![document,o.value.contentEl].includes(t)&&!o.value.contentEl.contains(t)){const u=T(o.value.contentEl);if(!u.length)return;const f=u[0],P=u[u.length-1];e===f?P.focus():f.focus()}}F&&v(()=>n.value&&a.retainFocus,l=>{l?document.addEventListener("focusin",i):document.removeEventListener("focusin",i)},{immediate:!0}),v(n,async l=>{var e,t;await I(),l?(e=o.value.contentEl)==null||e.focus({preventScroll:!0}):(t=o.value.activatorEl)==null||t.focus({preventScroll:!0})});const E=R(()=>g({"aria-haspopup":"dialog","aria-expanded":String(n.value)},a.activatorProps));return A(()=>{const l=d.filterProps(a);return m(d,g({ref:o,class:["v-dialog",{"v-dialog--fullscreen":a.fullscreen,"v-dialog--scrollable":a.scrollable},a.class],style:a.style},l,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,"aria-modal":"true",activatorProps:E.value,role:"dialog"},V),{activator:c.activator,default:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return m(O,{root:"VDialog"},{default:()=>{var s;return[(s=c.default)==null?void 0:s.call(c,...t)]}})}})}),h({},o)}});export{$ as V};
