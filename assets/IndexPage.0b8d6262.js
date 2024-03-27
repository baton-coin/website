import{c as ee,h as W,u as Ke,f as Ue,i as ce,j as Ze,_ as Oe,k as Ye,l as We,m as Ge,Q as ie,a as Xe,e as Ie}from"./plugin-vue_export-helper.c40a6c34.js";import{i as fe,q as J,t as Je,v as et,c as m,h as u,g as G,y as oe,z as me,Q as tt,R as nt,D as C,S as Q,k as lt,r as E,o as ge,w as P,U as at,l as he,V as ot,W as Ne,X as rt,O as it,m as le,Y as st,Z as ut,P as re,M as dt,_ as ct,$ as ft,K as Me,d as qe,B as Pe,C as H,f as V,a0 as vt,F as mt,a1 as Qe,u as gt}from"./index.cae33fbc.js";var ht=ee({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:t}){const{proxy:{$q:n}}=G(),a=fe(Je,J);if(a===J)return console.error("QPage needs to be a deep child of QLayout"),J;if(fe(et,J)===J)return console.error("QPage needs to be child of QPageContainer"),J;const d=m(()=>{const g=(a.header.space===!0?a.header.size:0)+(a.footer.space===!0?a.footer.size:0);if(typeof e.styleFn=="function"){const k=a.isContainer.value===!0?a.containerHeight.value:n.screen.height;return e.styleFn(g,k)}return{minHeight:a.isContainer.value===!0?a.containerHeight.value-g+"px":n.screen.height===0?g!==0?`calc(100vh - ${g}px)`:"100vh":n.screen.height-g+"px"}}),v=m(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>u("main",{class:v.value,style:d.value},W(t.default))}}),je=ee({name:"QAvatar",props:{...Ke,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:t}){const n=Ue(e),a=m(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),c=m(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const d=e.icon!==void 0?[u(ce,{name:e.icon})]:void 0;return u("div",{class:a.value,style:n.value},[u("div",{class:"q-avatar__content row flex-center overflow-hidden",style:c.value},Ze(t.default,d))])}}}),De="/assets/tg_logo.f91e9d7c.png";const bt={},yt=e=>(tt("data-v-550790de"),e=e(),nt(),e),pt=yt(()=>C("blockquote",{class:"sidekick"},[Q(" Bread and circuses! "),C("cite",null,"Ancient Romans")],-1)),_t=[pt];function kt(e,t){return oe(),me("div",null,_t)}var xt=Oe(bt,[["render",kt],["__scopeId","data-v-550790de"]]),$e=ee({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const n=m(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>u(e.tag,{class:n.value},W(t.default))}});const be={dark:{type:Boolean,default:null}};function ye(e,t){return m(()=>e.dark===null?t.dark.isActive:e.dark)}const wt={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},pe={xs:2,sm:4,md:8,lg:16,xl:24};var Ct=ee({name:"QSeparator",props:{...be,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const t=G(),n=ye(e,t.proxy.$q),a=m(()=>e.vertical===!0?"vertical":"horizontal"),c=m(()=>` q-separator--${a.value}`),d=m(()=>e.inset!==!1?`${c.value}-${wt[e.inset]}`:""),v=m(()=>`q-separator${c.value}${d.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(n.value===!0?" q-separator--dark":"")),g=m(()=>{const k={};if(e.size!==void 0&&(k[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const x=e.spaced===!0?`${pe.md}px`:e.spaced in pe?`${pe[e.spaced]}px`:e.spaced,w=e.vertical===!0?["Left","Right"]:["Top","Bottom"];k[`margin${w[0]}`]=k[`margin${w[1]}`]=x}return k});return()=>u("hr",{class:v.value,style:g.value,"aria-orientation":a.value})}});let _e,se=0;const O=new Array(256);for(let e=0;e<256;e++)O[e]=(e+256).toString(16).substring(1);const St=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const n=new Uint8Array(t);return e.getRandomValues(n),n}}return t=>{const n=[];for(let a=t;a>0;a--)n.push(Math.floor(Math.random()*256));return n}})(),Re=4096;function we(){(_e===void 0||se+16>Re)&&(se=0,_e=St(Re));const e=Array.prototype.slice.call(_e,se,se+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,O[e[0]]+O[e[1]]+O[e[2]]+O[e[3]]+"-"+O[e[4]]+O[e[5]]+"-"+O[e[6]]+O[e[7]]+"-"+O[e[8]]+O[e[9]]+"-"+O[e[10]]+O[e[11]]+O[e[12]]+O[e[13]]+O[e[14]]+O[e[15]]}function qt(e){return e==null?null:e}function Be(e,t){return e==null?t===!0?`f_${we()}`:null:e}function Mt({getValue:e,required:t=!0}={}){if(lt.value===!0){const n=e!==void 0?E(qt(e())):E(null);return t===!0&&n.value===null&&ge(()=>{n.value=`f_${we()}`}),e!==void 0&&P(e,a=>{n.value=Be(a,t)}),n}return e!==void 0?m(()=>Be(e(),t)):E(`f_${we()}`)}function $t({validate:e,resetValidation:t,requiresQForm:n}){const a=fe(at,!1);if(a!==!1){const{props:c,proxy:d}=G();Object.assign(d,{validate:e,resetValidation:t}),P(()=>c.disable,v=>{v===!0?(typeof t=="function"&&t(),a.unbindComponent(d)):a.bindComponent(d)}),ge(()=>{c.disable!==!0&&a.bindComponent(d)}),he(()=>{c.disable!==!0&&a.unbindComponent(d)})}else n===!0&&console.error("Parent QForm not found on useFormChild()!")}const Ae=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,Ve=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,Fe=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,ue=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,de=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ke={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>Ae.test(e),hexaColor:e=>Ve.test(e),hexOrHexaColor:e=>Fe.test(e),rgbColor:e=>ue.test(e),rgbaColor:e=>de.test(e),rgbOrRgbaColor:e=>ue.test(e)||de.test(e),hexOrRgbColor:e=>Ae.test(e)||ue.test(e),hexaOrRgbaColor:e=>Ve.test(e)||de.test(e),anyColor:e=>Fe.test(e)||ue.test(e)||de.test(e)},Rt=[!0,!1,"ondemand"],Bt={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>Rt.includes(e)}};function At(e,t){const{props:n,proxy:a}=G(),c=E(!1),d=E(null),v=E(!1);$t({validate:D,resetValidation:j});let g=0,k;const x=m(()=>n.rules!==void 0&&n.rules!==null&&n.rules.length!==0),w=m(()=>n.disable!==!0&&x.value===!0&&t.value===!1),_=m(()=>n.error===!0||c.value===!0),te=m(()=>typeof n.errorMessage=="string"&&n.errorMessage.length!==0?n.errorMessage:d.value);P(()=>n.modelValue,()=>{v.value=!0,w.value===!0&&n.lazyRules===!1&&I()});function z(){n.lazyRules!=="ondemand"&&w.value===!0&&v.value===!0&&I()}P(()=>n.reactiveRules,K=>{K===!0?k===void 0&&(k=P(()=>n.rules,z,{immediate:!0,deep:!0})):k!==void 0&&(k(),k=void 0)},{immediate:!0}),P(()=>n.lazyRules,z),P(e,K=>{K===!0?v.value=!0:w.value===!0&&n.lazyRules!=="ondemand"&&I()});function j(){g++,t.value=!1,v.value=!1,c.value=!1,d.value=null,I.cancel()}function D(K=n.modelValue){if(n.disable===!0||x.value===!1)return!0;const B=++g,ne=t.value!==!0?()=>{v.value=!0}:()=>{},U=($,q)=>{$===!0&&ne(),c.value=$,d.value=q||null,t.value=!1},L=[];for(let $=0;$<n.rules.length;$++){const q=n.rules[$];let T;if(typeof q=="function"?T=q(K,ke):typeof q=="string"&&ke[q]!==void 0&&(T=ke[q](K)),T===!1||typeof T=="string")return U(!0,T),!1;T!==!0&&T!==void 0&&L.push(T)}return L.length===0?(U(!1),!0):(t.value=!0,Promise.all(L).then($=>{if($===void 0||Array.isArray($)===!1||$.length===0)return B===g&&U(!1),!0;const q=$.find(T=>T===!1||typeof T=="string");return B===g&&U(q!==void 0,q),q===void 0},$=>(B===g&&(console.error($),U(!0)),!1)))}const I=ot(D,0);return he(()=>{k!==void 0&&k(),I.cancel()}),Object.assign(a,{resetValidation:j,validate:D}),Ne(a,"hasError",()=>_.value),{isDirtyModel:v,hasRules:x,hasError:_,errorMessage:te,validate:D,resetValidation:j}}const Te=/^on[A-Z]/;function Vt(){const{attrs:e,vnode:t}=G(),n={listeners:E({}),attributes:E({})};function a(){const c={},d={};for(const v in e)v!=="class"&&v!=="style"&&Te.test(v)===!1&&(c[v]=e[v]);for(const v in t.props)Te.test(v)===!0&&(d[v]=t.props[v]);n.attributes.value=c,n.listeners.value=d}return rt(a),a(),n}let Ce=[],Ft=[];function Le(e){Ft.length===0?e():Ce.push(e)}function Tt(e){Ce=Ce.filter(t=>t!==e)}function Se(e){return e!=null&&(""+e).length!==0}const Et={...be,...Bt,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},zt=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function Ot({requiredForAttr:e=!0,tagProp:t}={}){const{props:n,proxy:a}=G(),c=ye(n,a.$q),d=Mt({required:e,getValue:()=>n.for});return{requiredForAttr:e,tag:t===!0?m(()=>n.tag):{value:"label"},isDark:c,editable:m(()=>n.disable!==!0&&n.readonly!==!0),innerLoading:E(!1),focused:E(!1),hasPopupOpen:!1,splitAttrs:Vt(),targetUid:d,rootRef:E(null),targetRef:E(null),controlRef:E(null)}}function It(e){const{props:t,emit:n,slots:a,attrs:c,proxy:d}=G(),{$q:v}=d;let g=null;e.hasValue===void 0&&(e.hasValue=m(()=>Se(t.modelValue))),e.emitValue===void 0&&(e.emitValue=o=>{n("update:modelValue",o)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:i,onFocusout:r}),Object.assign(e,{clearValue:f,onControlFocusin:i,onControlFocusout:r,focus:q}),e.computedCounter===void 0&&(e.computedCounter=m(()=>{if(t.counter!==!1){const o=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,b=t.maxlength!==void 0?t.maxlength:t.maxValues;return o+(b!==void 0?" / "+b:"")}}));const{isDirtyModel:k,hasRules:x,hasError:w,errorMessage:_,resetValidation:te}=At(e.focused,e.innerLoading),z=e.floatingLabel!==void 0?m(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):m(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),j=m(()=>t.bottomSlots===!0||t.hint!==void 0||x.value===!0||t.counter===!0||t.error!==null),D=m(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),I=m(()=>`q-field row no-wrap items-start q-field--${D.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(z.value===!0?" q-field--float":"")+(B.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(w.value===!0?" q-field--error":"")+(w.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&j.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),K=m(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(w.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),B=m(()=>t.labelSlot===!0||t.label!==void 0),ne=m(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&w.value!==!0?` text-${t.labelColor}`:"")),U=m(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:z.value,modelValue:t.modelValue,emitValue:e.emitValue})),L=m(()=>{const o={};return e.targetUid.value&&(o.for=e.targetUid.value),t.disable===!0&&(o["aria-disabled"]="true"),o});function $(){const o=document.activeElement;let b=e.targetRef!==void 0&&e.targetRef.value;b&&(o===null||o.id!==e.targetUid.value)&&(b.hasAttribute("tabindex")===!0||(b=b.querySelector("[tabindex]")),b&&b!==o&&b.focus({preventScroll:!0}))}function q(){Le($)}function T(){Tt($);const o=document.activeElement;o!==null&&e.rootRef.value.contains(o)&&o.blur()}function i(o){g!==null&&(clearTimeout(g),g=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,n("focus",o))}function r(o,b){g!==null&&clearTimeout(g),g=setTimeout(()=>{g=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,n("blur",o)),b!==void 0&&b())})}function f(o){it(o),v.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),n("update:modelValue",null),n("clear",t.modelValue),le(()=>{const b=k.value;te(),k.value=b})}function s(){const o=[];return a.prepend!==void 0&&o.push(u("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:re},a.prepend())),o.push(u("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},y())),w.value===!0&&t.noErrorIcon===!1&&o.push(M("error",[u(ce,{name:v.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?o.push(M("inner-loading-append",a.loading!==void 0?a.loading():[u(Ye,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&o.push(M("inner-clearable-append",[u(ce,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||v.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:f})])),a.append!==void 0&&o.push(u("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:re},a.append())),e.getInnerAppend!==void 0&&o.push(M("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&o.push(e.getControlChild()),o}function y(){const o=[];return t.prefix!==void 0&&t.prefix!==null&&o.push(u("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&o.push(e.getShadowControl()),e.getControl!==void 0?o.push(e.getControl()):a.rawControl!==void 0?o.push(a.rawControl()):a.control!==void 0&&o.push(u("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},a.control(U.value))),B.value===!0&&o.push(u("div",{class:ne.value},W(a.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&o.push(u("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),o.concat(W(a.default))}function h(){let o,b;w.value===!0?_.value!==null?(o=[u("div",{role:"alert"},_.value)],b=`q--slot-error-${_.value}`):(o=W(a.error),b="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(o=[u("div",t.hint)],b=`q--slot-hint-${t.hint}`):(o=W(a.hint),b="q--slot-hint"));const Z=t.counter===!0||a.counter!==void 0;if(t.hideBottomSpace===!0&&Z===!1&&o===void 0)return;const S=u("div",{key:b,class:"q-field__messages col"},o);return u("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:re},[t.hideBottomSpace===!0?S:u(dt,{name:"q-transition--field-message"},()=>S),Z===!0?u("div",{class:"q-field__counter"},a.counter!==void 0?a.counter():e.computedCounter.value):null])}function M(o,b){return b===null?null:u("div",{key:o,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},b)}let p=!1;return st(()=>{p=!0}),ut(()=>{p===!0&&t.autofocus===!0&&d.focus()}),t.autofocus===!0&&ge(()=>{d.focus()}),he(()=>{g!==null&&clearTimeout(g)}),Object.assign(d,{focus:q,blur:T}),function(){const b=e.getControl===void 0&&a.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...L.value}:L.value;return u(e.tag.value,{ref:e.rootRef,class:[I.value,c.class],style:c.style,...b},[a.before!==void 0?u("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:re},a.before()):null,u("div",{class:"q-field__inner relative-position col self-stretch"},[u("div",{ref:e.controlRef,class:K.value,tabindex:-1,...e.controlEvents},s()),j.value===!0?h():null]),a.after!==void 0?u("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:re},a.after()):null])}}const Ee={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},ve={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},He=Object.keys(ve);He.forEach(e=>{ve[e].regex=new RegExp(ve[e].pattern)});const Nt=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+He.join("")+"])|(.)","g"),ze=/[.*+?^${}()|[\]\\]/g,A=String.fromCharCode(1),Pt={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Qt(e,t,n,a){let c,d,v,g,k,x;const w=E(null),_=E(z());function te(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}P(()=>e.type+e.autogrow,D),P(()=>e.mask,i=>{if(i!==void 0)I(_.value,!0);else{const r=q(_.value);D(),e.modelValue!==r&&t("update:modelValue",r)}}),P(()=>e.fillMask+e.reverseFillMask,()=>{w.value===!0&&I(_.value,!0)}),P(()=>e.unmaskedValue,()=>{w.value===!0&&I(_.value)});function z(){if(D(),w.value===!0){const i=L(q(e.modelValue));return e.fillMask!==!1?T(i):i}return e.modelValue}function j(i){if(i<c.length)return c.slice(-i);let r="",f=c;const s=f.indexOf(A);if(s!==-1){for(let y=i-f.length;y>0;y--)r+=A;f=f.slice(0,s)+r+f.slice(s)}return f}function D(){if(w.value=e.mask!==void 0&&e.mask.length!==0&&te(),w.value===!1){g=void 0,c="",d="";return}const i=Ee[e.mask]===void 0?e.mask:Ee[e.mask],r=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",f=r.replace(ze,"\\$&"),s=[],y=[],h=[];let M=e.reverseFillMask===!0,p="",o="";i.replace(Nt,(F,l,R,X,Y)=>{if(X!==void 0){const N=ve[X];h.push(N),o=N.negate,M===!0&&(y.push("(?:"+o+"+)?("+N.pattern+"+)?(?:"+o+"+)?("+N.pattern+"+)?"),M=!1),y.push("(?:"+o+"+)?("+N.pattern+")?")}else if(R!==void 0)p="\\"+(R==="\\"?"":R),h.push(R),s.push("([^"+p+"]+)?"+p+"?");else{const N=l!==void 0?l:Y;p=N==="\\"?"\\\\\\\\":N.replace(ze,"\\\\$&"),h.push(N),s.push("([^"+p+"]+)?"+p+"?")}});const b=new RegExp("^"+s.join("")+"("+(p===""?".":"[^"+p+"]")+"+)?"+(p===""?"":"["+p+"]*")+"$"),Z=y.length-1,S=y.map((F,l)=>l===0&&e.reverseFillMask===!0?new RegExp("^"+f+"*"+F):l===Z?new RegExp("^"+F+"("+(o===""?".":o)+"+)?"+(e.reverseFillMask===!0?"$":f+"*")):new RegExp("^"+F));v=h,g=F=>{const l=b.exec(e.reverseFillMask===!0?F:F.slice(0,h.length+1));l!==null&&(F=l.slice(1).join(""));const R=[],X=S.length;for(let Y=0,N=F;Y<X;Y++){const ae=S[Y].exec(N);if(ae===null)break;N=N.slice(ae.shift().length),R.push(...ae)}return R.length!==0?R.join(""):F},c=h.map(F=>typeof F=="string"?F:A).join(""),d=c.split(A).join(r)}function I(i,r,f){const s=a.value,y=s.selectionEnd,h=s.value.length-y,M=q(i);r===!0&&D();const p=L(M),o=e.fillMask!==!1?T(p):p,b=_.value!==o;s.value!==o&&(s.value=o),b===!0&&(_.value=o),document.activeElement===s&&le(()=>{if(o===d){const S=e.reverseFillMask===!0?d.length:0;s.setSelectionRange(S,S,"forward");return}if(f==="insertFromPaste"&&e.reverseFillMask!==!0){const S=s.selectionEnd;let F=y-1;for(let l=k;l<=F&&l<S;l++)c[l]!==A&&F++;B.right(s,F);return}if(["deleteContentBackward","deleteContentForward"].indexOf(f)!==-1){const S=e.reverseFillMask===!0?y===0?o.length>p.length?1:0:Math.max(0,o.length-(o===d?0:Math.min(p.length,h)+1))+1:y;s.setSelectionRange(S,S,"forward");return}if(e.reverseFillMask===!0)if(b===!0){const S=Math.max(0,o.length-(o===d?0:Math.min(p.length,h+1)));S===1&&y===1?s.setSelectionRange(S,S,"forward"):B.rightReverse(s,S)}else{const S=o.length-h;s.setSelectionRange(S,S,"backward")}else if(b===!0){const S=Math.max(0,c.indexOf(A),Math.min(p.length,y)-1);B.right(s,S)}else{const S=y-1;B.right(s,S)}});const Z=e.unmaskedValue===!0?q(o):o;String(e.modelValue)!==Z&&(e.modelValue!==null||Z!=="")&&n(Z,!0)}function K(i,r,f){const s=L(q(i.value));r=Math.max(0,c.indexOf(A),Math.min(s.length,r)),k=r,i.setSelectionRange(r,f,"forward")}const B={left(i,r){const f=c.slice(r-1).indexOf(A)===-1;let s=Math.max(0,r-1);for(;s>=0;s--)if(c[s]===A){r=s,f===!0&&r++;break}if(s<0&&c[r]!==void 0&&c[r]!==A)return B.right(i,0);r>=0&&i.setSelectionRange(r,r,"backward")},right(i,r){const f=i.value.length;let s=Math.min(f,r+1);for(;s<=f;s++)if(c[s]===A){r=s;break}else c[s-1]===A&&(r=s);if(s>f&&c[r-1]!==void 0&&c[r-1]!==A)return B.left(i,f);i.setSelectionRange(r,r,"forward")},leftReverse(i,r){const f=j(i.value.length);let s=Math.max(0,r-1);for(;s>=0;s--)if(f[s-1]===A){r=s;break}else if(f[s]===A&&(r=s,s===0))break;if(s<0&&f[r]!==void 0&&f[r]!==A)return B.rightReverse(i,0);r>=0&&i.setSelectionRange(r,r,"backward")},rightReverse(i,r){const f=i.value.length,s=j(f),y=s.slice(0,r+1).indexOf(A)===-1;let h=Math.min(f,r+1);for(;h<=f;h++)if(s[h-1]===A){r=h,r>0&&y===!0&&r--;break}if(h>f&&s[r-1]!==void 0&&s[r-1]!==A)return B.leftReverse(i,f);i.setSelectionRange(r,r,"forward")}};function ne(i){t("click",i),x=void 0}function U(i){if(t("keydown",i),ct(i)===!0||i.altKey===!0)return;const r=a.value,f=r.selectionStart,s=r.selectionEnd;if(i.shiftKey||(x=void 0),i.keyCode===37||i.keyCode===39){i.shiftKey&&x===void 0&&(x=r.selectionDirection==="forward"?f:s);const y=B[(i.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(i.preventDefault(),y(r,x===f?s:f),i.shiftKey){const h=r.selectionStart;r.setSelectionRange(Math.min(x,h),Math.max(x,h),"forward")}}else i.keyCode===8&&e.reverseFillMask!==!0&&f===s?(B.left(r,f),r.setSelectionRange(r.selectionStart,s,"backward")):i.keyCode===46&&e.reverseFillMask===!0&&f===s&&(B.rightReverse(r,s),r.setSelectionRange(f,r.selectionEnd,"forward"))}function L(i){if(i==null||i==="")return"";if(e.reverseFillMask===!0)return $(i);const r=v;let f=0,s="";for(let y=0;y<r.length;y++){const h=i[f],M=r[y];if(typeof M=="string")s+=M,h===M&&f++;else if(h!==void 0&&M.regex.test(h))s+=M.transform!==void 0?M.transform(h):h,f++;else return s}return s}function $(i){const r=v,f=c.indexOf(A);let s=i.length-1,y="";for(let h=r.length-1;h>=0&&s!==-1;h--){const M=r[h];let p=i[s];if(typeof M=="string")y=M+y,p===M&&s--;else if(p!==void 0&&M.regex.test(p))do y=(M.transform!==void 0?M.transform(p):p)+y,s--,p=i[s];while(f===h&&p!==void 0&&M.regex.test(p));else return y}return y}function q(i){return typeof i!="string"||g===void 0?typeof i=="number"?g(""+i):i:g(i)}function T(i){return d.length-i.length<=0?i:e.reverseFillMask===!0&&i.length!==0?d.slice(0,-i.length)+i:i+d.slice(i.length)}return{innerValue:_,hasMask:w,moveCursorForPaste:K,updateMaskValue:I,onMaskedKeydown:U,onMaskedClick:ne}}const jt={name:String};function Dt(e){return m(()=>e.name||e.for)}function Lt(e,t){function n(){const a=e.modelValue;try{const c="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(a)===a&&("length"in a?Array.from(a):[a]).forEach(d=>{c.items.add(d)}),{files:c.files}}catch{return{files:void 0}}}return t===!0?m(()=>{if(e.type==="file")return n()}):m(n)}const Ht=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Kt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Ut=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Zt=/[a-z0-9_ -]$/i;function Yt(e){return function(n){if(n.type==="compositionend"||n.type==="change"){if(n.target.qComposing!==!0)return;n.target.qComposing=!1,e(n)}else n.type==="compositionupdate"&&n.target.qComposing!==!0&&typeof n.data=="string"&&(ft.is.firefox===!0?Zt.test(n.data)===!1:Ht.test(n.data)===!0||Kt.test(n.data)===!0||Ut.test(n.data)===!0)===!0&&(n.target.qComposing=!0)}}var Wt=ee({name:"QInput",inheritAttrs:!1,props:{...Et,...Pt,...jt,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...zt,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:n}){const{proxy:a}=G(),{$q:c}=a,d={};let v=NaN,g,k,x=null,w;const _=E(null),te=Dt(e),{innerValue:z,hasMask:j,moveCursorForPaste:D,updateMaskValue:I,onMaskedKeydown:K,onMaskedClick:B}=Qt(e,t,p,_),ne=Lt(e,!0),U=m(()=>Se(z.value)),L=Yt(h),$=Ot(),q=m(()=>e.type==="textarea"||e.autogrow===!0),T=m(()=>q.value===!0||["text","search","url","tel","password"].includes(e.type)),i=m(()=>{const l={...$.splitAttrs.listeners.value,onInput:h,onPaste:y,onChange:b,onBlur:Z,onFocus:Me};return l.onCompositionstart=l.onCompositionupdate=l.onCompositionend=L,j.value===!0&&(l.onKeydown=K,l.onClick=B),e.autogrow===!0&&(l.onAnimationend=M),l}),r=m(()=>{const l={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:te.value,...$.splitAttrs.attributes.value,id:$.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return q.value===!1&&(l.type=e.type),e.autogrow===!0&&(l.rows=1),l});P(()=>e.type,()=>{_.value&&(_.value.value=e.modelValue)}),P(()=>e.modelValue,l=>{if(j.value===!0){if(k===!0&&(k=!1,String(l)===v))return;I(l)}else z.value!==l&&(z.value=l,e.type==="number"&&d.hasOwnProperty("value")===!0&&(g===!0?g=!1:delete d.value));e.autogrow===!0&&le(o)}),P(()=>e.autogrow,l=>{l===!0?le(o):_.value!==null&&n.rows>0&&(_.value.style.height="auto")}),P(()=>e.dense,()=>{e.autogrow===!0&&le(o)});function f(){Le(()=>{const l=document.activeElement;_.value!==null&&_.value!==l&&(l===null||l.id!==$.targetUid.value)&&_.value.focus({preventScroll:!0})})}function s(){_.value!==null&&_.value.select()}function y(l){if(j.value===!0&&e.reverseFillMask!==!0){const R=l.target;D(R,R.selectionStart,R.selectionEnd)}t("paste",l)}function h(l){if(!l||!l.target)return;if(e.type==="file"){t("update:modelValue",l.target.files);return}const R=l.target.value;if(l.target.qComposing===!0){d.value=R;return}if(j.value===!0)I(R,!1,l.inputType);else if(p(R),T.value===!0&&l.target===document.activeElement){const{selectionStart:X,selectionEnd:Y}=l.target;X!==void 0&&Y!==void 0&&le(()=>{l.target===document.activeElement&&R.indexOf(l.target.value)===0&&l.target.setSelectionRange(X,Y)})}e.autogrow===!0&&o()}function M(l){t("animationend",l),o()}function p(l,R){w=()=>{x=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==l&&v!==l&&(v=l,R===!0&&(k=!0),t("update:modelValue",l),le(()=>{v===l&&(v=NaN)})),w=void 0},e.type==="number"&&(g=!0,d.value=l),e.debounce!==void 0?(x!==null&&clearTimeout(x),d.value=l,x=setTimeout(w,e.debounce)):w()}function o(){requestAnimationFrame(()=>{const l=_.value;if(l!==null){const R=l.parentNode.style,{scrollTop:X}=l,{overflowY:Y,maxHeight:N}=c.platform.is.firefox===!0?{}:window.getComputedStyle(l),ae=Y!==void 0&&Y!=="scroll";ae===!0&&(l.style.overflowY="hidden"),R.marginBottom=l.scrollHeight-1+"px",l.style.height="1px",l.style.height=l.scrollHeight+"px",ae===!0&&(l.style.overflowY=parseInt(N,10)<l.scrollHeight?"auto":"hidden"),R.marginBottom="",l.scrollTop=X}})}function b(l){L(l),x!==null&&(clearTimeout(x),x=null),w!==void 0&&w(),t("change",l.target.value)}function Z(l){l!==void 0&&Me(l),x!==null&&(clearTimeout(x),x=null),w!==void 0&&w(),g=!1,k=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{_.value!==null&&(_.value.value=z.value!==void 0?z.value:"")})}function S(){return d.hasOwnProperty("value")===!0?d.value:z.value!==void 0?z.value:""}he(()=>{Z()}),ge(()=>{e.autogrow===!0&&o()}),Object.assign($,{innerValue:z,fieldClass:m(()=>`q-${q.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:m(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:_,emitValue:p,hasValue:U,floatingLabel:m(()=>U.value===!0&&(e.type!=="number"||isNaN(z.value)===!1)||Se(e.displayValue)),getControl:()=>u(q.value===!0?"textarea":"input",{ref:_,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...r.value,...i.value,...e.type!=="file"?{value:S()}:ne.value}),getShadowControl:()=>u("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(q.value===!0?"":" text-no-wrap")},[u("span",{class:"invisible"},S()),u("span",e.shadowText)])});const F=It($);return Object.assign(a,{focus:f,select:s,getNativeElement:()=>_.value}),Ne(a,"nativeEl",()=>_.value),F}});const Gt=[u("g",[u("path",{fill:"none",stroke:"currentColor","stroke-width":"5","stroke-miterlimit":"10",d:"M58.4,51.7c-0.9-0.9-1.4-2-1.4-2.3s0.5-0.4,1.4-1.4 C70.8,43.8,79.8,30.5,80,15.5H70H30H20c0.2,15,9.2,28.1,21.6,32.3c0.9,0.9,1.4,1.2,1.4,1.5s-0.5,1.6-1.4,2.5 C29.2,56.1,20.2,69.5,20,85.5h10h40h10C79.8,69.5,70.8,55.9,58.4,51.7z"}),u("clipPath",{id:"uil-hourglass-clip1"},[u("rect",{x:"15",y:"20",width:"70",height:"25"},[u("animate",{attributeName:"height",from:"25",to:"0",dur:"1s",repeatCount:"indefinite",values:"25;0;0",keyTimes:"0;0.5;1"}),u("animate",{attributeName:"y",from:"20",to:"45",dur:"1s",repeatCount:"indefinite",values:"20;45;45",keyTimes:"0;0.5;1"})])]),u("clipPath",{id:"uil-hourglass-clip2"},[u("rect",{x:"15",y:"55",width:"70",height:"25"},[u("animate",{attributeName:"height",from:"0",to:"25",dur:"1s",repeatCount:"indefinite",values:"0;25;25",keyTimes:"0;0.5;1"}),u("animate",{attributeName:"y",from:"80",to:"55",dur:"1s",repeatCount:"indefinite",values:"80;55;55",keyTimes:"0;0.5;1"})])]),u("path",{d:"M29,23c3.1,11.4,11.3,19.5,21,19.5S67.9,34.4,71,23H29z","clip-path":"url(#uil-hourglass-clip1)",fill:"currentColor"}),u("path",{d:"M71.6,78c-3-11.6-11.5-20-21.5-20s-18.5,8.4-21.5,20H71.6z","clip-path":"url(#uil-hourglass-clip2)",fill:"currentColor"}),u("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"180 50 50",repeatCount:"indefinite",dur:"1s",values:"0 50 50;0 50 50;180 50 50",keyTimes:"0;0.7;1"})])];var Xt=ee({name:"QSpinnerHourglass",props:We,setup(e){const{cSize:t,classes:n}=Ge(e);return()=>u("svg",{class:n.value,width:t.value,height:t.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg"},Gt)}}),Jt=ee({name:"QCard",props:{...be,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=G(),a=ye(e,n),c=m(()=>"q-card"+(a.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>u(e.tag,{class:c.value},W(t.default))}});const en=C("div",{class:"text-h6 text-primary"},[Q("We are distributing "),C("b",null,"10M"),Q(" coins to early investors...")],-1),tn=C("div",{class:"text-subtitle2"},"...and you can join them right now!",-1),nn={class:"row justify-center q-pb-md"},ln={class:"row justify-center q-pb-md"},an={class:"row justify-center"},on={class:"row"},rn=qe({__name:"Invest",setup(e){const t=E(10),n=E(!1),a=m(()=>t.value<1);async function c(d=0){d=d||t.value,console.log(`Investing ${d} TON`),n.value=!0,await new Promise(v=>setTimeout(v,1e3)),n.value=!1}return(d,v)=>(oe(),Pe(Jt,{bordered:"",flat:"",class:"bg-dark"},{default:H(()=>[V($e,{class:"text-primary q-pb-xs"},{default:H(()=>[en,tn]),_:1}),V(Ct,{dark:"",inset:""}),V($e,null,{default:H(()=>[C("div",nn,[(oe(),me(mt,null,vt([1,10,100],g=>C("div",{key:g},[V(ie,{rounded:"",size:"sm",class:"q-mr-sm",color:"secondary",onClick:k=>c(g),label:`${g} TON`},null,8,["onClick","label"])])),64))]),C("div",ln,[V(Wt,{outlined:"",dark:"",dense:"",suffix:"TON",modelValue:t.value,"onUpdate:modelValue":v[0]||(v[0]=g=>t.value=g),label:"Your amount, min 1 TON",type:"number",min:"1",autofocus:"",color:"primary"},null,8,["modelValue"])]),C("div",an,[V(ie,{rounded:"",size:"lg",style:{width:"220px"},disable:a.value,loading:n.value,onClick:v[1]||(v[1]=g=>c()),class:"q-mr-sm",color:"primary",label:"Invest!"},{loading:H(()=>[C("div",on,[V(Xt,{class:"on-left"}),Q(" Investing... ")])]),_:1},8,["disable","loading"])])]),_:1})]),_:1}))}});var xe=ee({name:"QTimelineEntry",props:{heading:Boolean,tag:{type:String,default:"h3"},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},icon:String,avatar:String,color:String,title:String,subtitle:String,body:String},setup(e,{slots:t}){const n=fe(Qe,J);if(n===J)return console.error("QTimelineEntry needs to be child of QTimeline"),J;const a=m(()=>`q-timeline__entry q-timeline__entry--${e.side}`+(e.icon!==void 0||e.avatar!==void 0?" q-timeline__entry--icon":"")),c=m(()=>`q-timeline__dot text-${e.color||n.color}`),d=m(()=>n.layout==="comfortable"&&n.side==="left");return()=>{const v=Xe(t.default,[]);if(e.body!==void 0&&v.unshift(e.body),e.heading===!0){const x=[u("div"),u("div"),u(e.tag,{class:"q-timeline__heading-title"},v)];return u("div",{class:"q-timeline__heading"},d.value===!0?x.reverse():x)}let g;e.icon!==void 0?g=[u(ce,{class:"row items-center justify-center",name:e.icon})]:e.avatar!==void 0&&(g=[u("img",{class:"q-timeline__dot-img",src:e.avatar})]);const k=[u("div",{class:"q-timeline__subtitle"},[u("span",{},W(t.subtitle,[e.subtitle]))]),u("div",{class:c.value},g),u("div",{class:"q-timeline__content"},[u("h6",{class:"q-timeline__title"},W(t.title,[e.title]))].concat(v))];return u("li",{class:a.value},d.value===!0?k.reverse():k)}}}),sn=ee({name:"QTimeline",props:{...be,color:{type:String,default:"primary"},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},layout:{type:String,default:"dense",validator:e=>["dense","comfortable","loose"].includes(e)}},setup(e,{slots:t}){const n=G(),a=ye(e,n.proxy.$q);gt(Qe,e);const c=m(()=>`q-timeline q-timeline--${e.layout} q-timeline--${e.layout}--${e.side}`+(a.value===!0?" q-timeline--dark":""));return()=>u("ul",{class:c.value},W(t.default))}});const un={},dn=C("h3",{class:"text-secondary"},"Roadmap",-1),cn=C("div",{class:"q-pb-md"},[Q(" We have successfully mined "),C("b",null,"100,000,001 BATON"),Q(" tokens. "),C("br"),Q(" Ownership is revoked, so no more tokens can be minted in the future. ")],-1),fn=C("div",{class:"q-pb-md"},[C("b",null,"10,000,000 BATON"),Q(" tokens will be distributed to the early investors proportionally. "),C("br"),Q(" 5% of the total supply is reserved for the team (we are not greedy). "),C("br"),Q(" We are also building a community of BATON holders to decide the future of the project. "),C("br"),Q(" Initial distribution will be done after this stage is complete. ")],-1),vn=C("img",{src:De,alt:"Telegram Logo"},null,-1),mn=C("div",null,[Q(" We will continue distributing BATON tokens to the community. "),C("br"),Q(" But some aspects of the project will be decided by the community. "),C("br")],-1);function gn(e,t){return oe(),me("div",null,[dn,V(sn,{class:"text-left",layout:"dense",side:"right",color:"secondary"},{default:H(()=>[V(xe,{title:"BATON Mined!",subtitle:"March 25, 2024",side:"right",avatar:Ie},{default:H(()=>[cn,V(ie,{outline:"",target:"_blank",size:"sm","icon-right":"open_in_new",label:"See the transaction",href:"https://tonscan.org/jetton/EQAwmWbUVLRTSru4Yl_MqYLvgIVPtzipdx4wLa4RvjGNYRqH"})]),_:1}),V(xe,{title:"Stage 1: First distribution and community building",subtitle:"NOW",side:"left",color:"info",icon:"groups"},{default:H(()=>[fn,V(ie,{target:"_blank",color:"tg-blue",outline:"",label:"Join the community",href:"https://t.me/+GbXs8cEQck0zNGNi"},{default:H(()=>[V(je,{size:"32px",class:"q-ml-sm"},{default:H(()=>[vn]),_:1})]),_:1})]),_:1}),V(xe,{title:"Stage 2: Further distribution and development",subtitle:"Coming Soon",side:"left",color:"grey",icon:"done_all"},{default:H(()=>[mn]),_:1})]),_:1})])}var hn=Oe(un,[["render",gn]]);const bn={class:"text-center q-pt-xl"},yn=C("img",{src:Ie,alt:"BATON Logo",style:{height:"8rem"}},null,-1),pn=C("p",{class:"text-body1"},[Q(" This is a TON-based memecoin that represents a loaf of bread \u{1F956}"),C("br"),Q(" It is community-driven and YOU can decide its future ")],-1),_n={class:"q-pb-md"},kn=C("img",{src:De,alt:"Telegram Logo"},null,-1),xn=qe({__name:"IndexContent",setup(e){return(t,n)=>(oe(),me("div",bn,[V(xt),yn,pn,C("div",_n,[V(ie,{target:"_blank",color:"tg-blue",class:"q-mr-md",outline:"",label:"Join the community",href:"https://t.me/+GbXs8cEQck0zNGNi"},{default:H(()=>[V(je,{size:"32px",class:"q-ml-sm"},{default:H(()=>[kn]),_:1})]),_:1})]),C("div",null,[V(rn)]),V(hn,{class:"q-pa-md",style:{"max-width":"1000px"}})]))}}),Sn=qe({__name:"IndexPage",setup(e){return(t,n)=>(oe(),Pe(ht,{class:"row justify-evenly"},{default:H(()=>[V(xn)]),_:1}))}});export{Sn as default};