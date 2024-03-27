import{c as T,h as M,a as ne,b as J,d as U,g as le,_ as ie,Q as re,e as ae}from"./plugin-vue_export-helper.c40a6c34.js";import{c as f,h as m,r as _,k as A,o as R,l as B,n as Z,m as K,g as V,p as j,i as D,q as L,t as W,w,u as ee,v as se,x as O,a as ue,y as te,z as ce,f as C,d as de,A as fe,B as ve,C as Q,D as P}from"./index.cae33fbc.js";var he=T({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:d}){const n=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>m("div",{class:n.value},M(d.default))}}),X=T({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:d}){const n=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>m("div",{class:n.value,role:"toolbar"},M(d.default))}});function me(){const e=_(!A.value);return e.value===!1&&R(()=>{e.value=!0}),{isHydrated:e}}const oe=typeof ResizeObserver!="undefined",Y=oe===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var F=T({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:d}){let n=null,o,t={width:-1,height:-1};function s(c){c===!0||e.debounce===0||e.debounce==="0"?u():n===null&&(n=setTimeout(u,e.debounce))}function u(){if(n!==null&&(clearTimeout(n),n=null),o){const{offsetWidth:c,offsetHeight:r}=o;(c!==t.width||r!==t.height)&&(t={width:c,height:r},d("resize",t))}}const{proxy:g}=V();if(g.trigger=s,oe===!0){let c;const r=b=>{o=g.$el.parentNode,o?(c=new ResizeObserver(s),c.observe(o),u()):b!==!0&&K(()=>{r(!0)})};return R(()=>{r()}),B(()=>{n!==null&&clearTimeout(n),c!==void 0&&(c.disconnect!==void 0?c.disconnect():o&&c.unobserve(o))}),Z}else{let b=function(){n!==null&&(clearTimeout(n),n=null),r!==void 0&&(r.removeEventListener!==void 0&&r.removeEventListener("resize",s,j.passive),r=void 0)},y=function(){b(),o&&o.contentDocument&&(r=o.contentDocument.defaultView,r.addEventListener("resize",s,j.passive),u())};const{isHydrated:c}=me();let r;return R(()=>{K(()=>{o=g.$el,o&&y()})}),B(b),()=>{if(c.value===!0)return m("object",{class:"q--avoid-card-border",style:Y.style,tabindex:-1,type:"text/html",data:Y.url,"aria-hidden":"true",onLoad:y})}}}}),ge=T({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:d,emit:n}){const{proxy:{$q:o}}=V(),t=D(W,L);if(t===L)return console.error("QHeader needs to be child of QLayout"),L;const s=_(parseInt(e.heightHint,10)),u=_(!0),g=f(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||o.platform.is.ios&&t.isContainer.value===!0),c=f(()=>{if(e.modelValue!==!0)return 0;if(g.value===!0)return u.value===!0?s.value:0;const i=s.value-t.scroll.value.position;return i>0?i:0}),r=f(()=>e.modelValue!==!0||g.value===!0&&u.value!==!0),b=f(()=>e.modelValue===!0&&r.value===!0&&e.reveal===!0),y=f(()=>"q-header q-layout__section--marginal "+(g.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(r.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),q=f(()=>{const i=t.rows.value.top,z={};return i[0]==="l"&&t.left.space===!0&&(z[o.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),i[2]==="r"&&t.right.space===!0&&(z[o.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),z});function v(i,z){t.update("header",i,z)}function x(i,z){i.value!==z&&(i.value=z)}function p({height:i}){x(s,i),v("size",i)}function S(i){b.value===!0&&x(u,!0),n("focusin",i)}w(()=>e.modelValue,i=>{v("space",i),x(u,!0),t.animate()}),w(c,i=>{v("offset",i)}),w(()=>e.reveal,i=>{i===!1&&x(u,e.modelValue)}),w(u,i=>{t.animate(),n("reveal",i)}),w(t.scroll,i=>{e.reveal===!0&&x(u,i.direction==="up"||i.position<=e.revealOffset||i.position-i.inflectionPoint<100)});const $={};return t.instances.header=$,e.modelValue===!0&&v("size",s.value),v("space",e.modelValue),v("offset",c.value),B(()=>{t.instances.header===$&&(t.instances.header=void 0,v("size",0),v("offset",0),v("space",!1))}),()=>{const i=ne(d.default,[]);return e.elevated===!0&&i.push(m("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),i.push(m(F,{debounce:0,onResize:p})),m("header",{class:y.value,style:q.value,onFocusin:S},i)}}}),be=T({name:"QPageContainer",setup(e,{slots:d}){const{proxy:{$q:n}}=V(),o=D(W,L);if(o===L)return console.error("QPageContainer needs to be child of QLayout"),L;ee(se,!0);const t=f(()=>{const s={};return o.header.space===!0&&(s.paddingTop=`${o.header.size}px`),o.right.space===!0&&(s[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${o.right.size}px`),o.footer.space===!0&&(s.paddingBottom=`${o.footer.size}px`),o.left.space===!0&&(s[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${o.left.size}px`),s});return()=>m("div",{class:"q-page-container",style:t.value},M(d.default))}}),ye=T({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:d,emit:n}){const{proxy:{$q:o}}=V(),t=D(W,L);if(t===L)return console.error("QFooter needs to be child of QLayout"),L;const s=_(parseInt(e.heightHint,10)),u=_(!0),g=_(A.value===!0||t.isContainer.value===!0?0:window.innerHeight),c=f(()=>e.reveal===!0||t.view.value.indexOf("F")!==-1||o.platform.is.ios&&t.isContainer.value===!0),r=f(()=>t.isContainer.value===!0?t.containerHeight.value:g.value),b=f(()=>{if(e.modelValue!==!0)return 0;if(c.value===!0)return u.value===!0?s.value:0;const l=t.scroll.value.position+r.value+s.value-t.height.value;return l>0?l:0}),y=f(()=>e.modelValue!==!0||c.value===!0&&u.value!==!0),q=f(()=>e.modelValue===!0&&y.value===!0&&e.reveal===!0),v=f(()=>"q-footer q-layout__section--marginal "+(c.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(y.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(c.value!==!0?" hidden":""):"")),x=f(()=>{const l=t.rows.value.bottom,h={};return l[0]==="l"&&t.left.space===!0&&(h[o.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),l[2]==="r"&&t.right.space===!0&&(h[o.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),h});function p(l,h){t.update("footer",l,h)}function S(l,h){l.value!==h&&(l.value=h)}function $({height:l}){S(s,l),p("size",l)}function i(){if(e.reveal!==!0)return;const{direction:l,position:h,inflectionPoint:H}=t.scroll.value;S(u,l==="up"||h-H<100||t.height.value-r.value-h-s.value<300)}function z(l){q.value===!0&&S(u,!0),n("focusin",l)}w(()=>e.modelValue,l=>{p("space",l),S(u,!0),t.animate()}),w(b,l=>{p("offset",l)}),w(()=>e.reveal,l=>{l===!1&&S(u,e.modelValue)}),w(u,l=>{t.animate(),n("reveal",l)}),w([s,t.scroll,t.height],i),w(()=>o.screen.height,l=>{t.isContainer.value!==!0&&S(g,l)});const a={};return t.instances.footer=a,e.modelValue===!0&&p("size",s.value),p("space",e.modelValue),p("offset",b.value),B(()=>{t.instances.footer===a&&(t.instances.footer=void 0,p("size",0),p("offset",0),p("space",!1))}),()=>{const l=J(d.default,[m(F,{debounce:0,onResize:$})]);return e.elevated===!0&&l.push(m("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),m("footer",{class:v.value,style:x.value,onFocusin:z},l)}}});const we=[null,document,document.body,document.scrollingElement,document.documentElement];function pe(e,d){let n=le(d);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return we.includes(n)?window:n}function ze(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function xe(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let E;function N(){if(E!==void 0)return E;const e=document.createElement("p"),d=document.createElement("div");U(e,{width:"100%",height:"200px"}),U(d,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),d.appendChild(e),document.body.appendChild(d);const n=e.offsetWidth;d.style.overflow="scroll";let o=e.offsetWidth;return n===o&&(o=d.clientWidth),d.remove(),E=n-o,E}const{passive:G}=j,_e=["both","horizontal","vertical"];var qe=T({name:"QScrollObserver",props:{axis:{type:String,validator:e=>_e.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:d}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let o=null,t,s;w(()=>e.scrollTarget,()=>{c(),g()});function u(){o!==null&&o();const y=Math.max(0,ze(t)),q=xe(t),v={top:y-n.position.top,left:q-n.position.left};if(e.axis==="vertical"&&v.top===0||e.axis==="horizontal"&&v.left===0)return;const x=Math.abs(v.top)>=Math.abs(v.left)?v.top<0?"up":"down":v.left<0?"left":"right";n.position={top:y,left:q},n.directionChanged=n.direction!==x,n.delta=v,n.directionChanged===!0&&(n.direction=x,n.inflectionPoint=n.position),d("scroll",{...n})}function g(){t=pe(s,e.scrollTarget),t.addEventListener("scroll",r,G),r(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",r,G),t=void 0)}function r(y){if(y===!0||e.debounce===0||e.debounce==="0")u();else if(o===null){const[q,v]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];o=()=>{v(q),o=null}}}const{proxy:b}=V();return w(()=>b.$q.lang.rtl,u),R(()=>{s=b.$el.parentNode,g()}),B(()=>{o!==null&&o(),c()}),Object.assign(b,{trigger:r,getPosition:()=>n}),Z}}),Se=T({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:d,emit:n}){const{proxy:{$q:o}}=V(),t=_(null),s=_(o.screen.height),u=_(e.container===!0?0:o.screen.width),g=_({position:0,direction:"down",inflectionPoint:0}),c=_(0),r=_(A.value===!0?0:N()),b=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),y=f(()=>e.container===!1?{minHeight:o.screen.height+"px"}:null),q=f(()=>r.value!==0?{[o.lang.rtl===!0?"left":"right"]:`${r.value}px`}:null),v=f(()=>r.value!==0?{[o.lang.rtl===!0?"right":"left"]:0,[o.lang.rtl===!0?"left":"right"]:`-${r.value}px`,width:`calc(100% + ${r.value}px)`}:null);function x(a){if(e.container===!0||document.qScrollPrevented!==!0){const l={position:a.position.top,direction:a.direction,directionChanged:a.directionChanged,inflectionPoint:a.inflectionPoint.top,delta:a.delta.top};g.value=l,e.onScroll!==void 0&&n("scroll",l)}}function p(a){const{height:l,width:h}=a;let H=!1;s.value!==l&&(H=!0,s.value=l,e.onScrollHeight!==void 0&&n("scrollHeight",l),$()),u.value!==h&&(H=!0,u.value=h),H===!0&&e.onResize!==void 0&&n("resize",a)}function S({height:a}){c.value!==a&&(c.value=a,$())}function $(){if(e.container===!0){const a=s.value>c.value?N():0;r.value!==a&&(r.value=a)}}let i=null;const z={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:t,height:s,containerHeight:c,scrollbarWidth:r,totalWidth:f(()=>u.value+r.value),rows:f(()=>{const a=e.view.toLowerCase().split(" ");return{top:a[0].split(""),middle:a[1].split(""),bottom:a[2].split("")}}),header:O({size:0,offset:0,space:!1}),right:O({size:300,offset:0,space:!1}),footer:O({size:0,offset:0,space:!1}),left:O({size:300,offset:0,space:!1}),scroll:g,animate(){i!==null?clearTimeout(i):document.body.classList.add("q-body--layout-animate"),i=setTimeout(()=>{i=null,document.body.classList.remove("q-body--layout-animate")},155)},update(a,l,h){z[a][l]=h}};if(ee(W,z),N()>0){let h=function(){a=null,l.classList.remove("hide-scrollbar")},H=function(){if(a===null){if(l.scrollHeight>o.screen.height)return;l.classList.add("hide-scrollbar")}else clearTimeout(a);a=setTimeout(h,300)},k=function(I){a!==null&&I==="remove"&&(clearTimeout(a),h()),window[`${I}EventListener`]("resize",H)},a=null;const l=document.body;w(()=>e.container!==!0?"add":"remove",k),e.container!==!0&&k("add"),ue(()=>{k("remove")})}return()=>{const a=J(d.default,[m(qe,{onScroll:x}),m(F,{onResize:p})]),l=m("div",{class:b.value,style:y.value,ref:e.container===!0?void 0:t,tabindex:-1},a);return e.container===!0?m("div",{class:"q-layout-container overflow-hidden",ref:t},[m(F,{onResize:S}),m("div",{class:"absolute-full",style:q.value},[m("div",{class:"scroll",style:v.value},[l])])]):l}}});const Ce={};function Le(e,d){return te(),ce("div",null,[C(re,{push:"",color:"secondary",rounded:"",icon:"account_balance_wallet",label:"Connect Wallet","aria-label":"Connect Wallet"})])}var Te=ie(Ce,[["render",Le]]);const $e=P("div",{class:"row items-center"},[P("img",{src:ae,alt:"BATON Logo",style:{height:"2.5rem"}}),P("div",{class:"q-pl-sm text-primary text-bold"}," BATON Coin ")],-1),He=P("div",{class:"row items-center justify-center text-black"}," by GoodLizard \u{1F98E} ",-1),Be=de({__name:"MainLayout",setup(e){return(d,n)=>{const o=fe("router-view");return te(),ve(Se,{view:"lHh Lpr lff"},{default:Q(()=>[C(ge,null,{default:Q(()=>[C(X,{class:"bg-white"},{default:Q(()=>[C(he,null,{default:Q(()=>[$e]),_:1}),C(Te)]),_:1})]),_:1}),C(be,null,{default:Q(()=>[C(o)]),_:1}),C(ye,null,{default:Q(()=>[C(X,{class:"bg-white justify-center"},{default:Q(()=>[He]),_:1})]),_:1})]),_:1})}}});export{Be as default};