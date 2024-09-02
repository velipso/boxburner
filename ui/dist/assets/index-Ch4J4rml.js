var L_=Object.defineProperty;var D_=(t,e,n)=>e in t?L_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ri=(t,e,n)=>D_(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function I_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var gg={exports:{}},hc={},vg={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var da=Symbol.for("react.element"),N_=Symbol.for("react.portal"),U_=Symbol.for("react.fragment"),F_=Symbol.for("react.strict_mode"),O_=Symbol.for("react.profiler"),k_=Symbol.for("react.provider"),B_=Symbol.for("react.context"),z_=Symbol.for("react.forward_ref"),H_=Symbol.for("react.suspense"),V_=Symbol.for("react.memo"),G_=Symbol.for("react.lazy"),kh=Symbol.iterator;function W_(t){return t===null||typeof t!="object"?null:(t=kh&&t[kh]||t["@@iterator"],typeof t=="function"?t:null)}var _g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xg=Object.assign,yg={};function to(t,e,n){this.props=t,this.context=e,this.refs=yg,this.updater=n||_g}to.prototype.isReactComponent={};to.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};to.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Sg(){}Sg.prototype=to.prototype;function xd(t,e,n){this.props=t,this.context=e,this.refs=yg,this.updater=n||_g}var yd=xd.prototype=new Sg;yd.constructor=xd;xg(yd,to.prototype);yd.isPureReactComponent=!0;var Bh=Array.isArray,Mg=Object.prototype.hasOwnProperty,Sd={current:null},Eg={key:!0,ref:!0,__self:!0,__source:!0};function wg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Mg.call(e,i)&&!Eg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:da,type:t,key:s,ref:o,props:r,_owner:Sd.current}}function X_(t,e){return{$$typeof:da,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Md(t){return typeof t=="object"&&t!==null&&t.$$typeof===da}function j_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var zh=/\/+/g;function zc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?j_(""+t.key):e.toString(36)}function hl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case da:case N_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+zc(o,0):i,Bh(r)?(n="",t!=null&&(n=t.replace(zh,"$&/")+"/"),hl(r,e,n,"",function(c){return c})):r!=null&&(Md(r)&&(r=X_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(zh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Bh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+zc(s,a);o+=hl(s,e,n,l,r)}else if(l=W_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+zc(s,a++),o+=hl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Sa(t,e,n){if(t==null)return t;var i=[],r=0;return hl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Y_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Zt={current:null},pl={transition:null},$_={ReactCurrentDispatcher:Zt,ReactCurrentBatchConfig:pl,ReactCurrentOwner:Sd};function Tg(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:Sa,forEach:function(t,e,n){Sa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Sa(t,function(){e++}),e},toArray:function(t){return Sa(t,function(e){return e})||[]},only:function(t){if(!Md(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=to;Ge.Fragment=U_;Ge.Profiler=O_;Ge.PureComponent=xd;Ge.StrictMode=F_;Ge.Suspense=H_;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$_;Ge.act=Tg;Ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=xg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Sd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Mg.call(e,l)&&!Eg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:da,type:t.type,key:r,ref:s,props:i,_owner:o}};Ge.createContext=function(t){return t={$$typeof:B_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:k_,_context:t},t.Consumer=t};Ge.createElement=wg;Ge.createFactory=function(t){var e=wg.bind(null,t);return e.type=t,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:z_,render:t}};Ge.isValidElement=Md;Ge.lazy=function(t){return{$$typeof:G_,_payload:{_status:-1,_result:t},_init:Y_}};Ge.memo=function(t,e){return{$$typeof:V_,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=pl.transition;pl.transition={};try{t()}finally{pl.transition=e}};Ge.unstable_act=Tg;Ge.useCallback=function(t,e){return Zt.current.useCallback(t,e)};Ge.useContext=function(t){return Zt.current.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t){return Zt.current.useDeferredValue(t)};Ge.useEffect=function(t,e){return Zt.current.useEffect(t,e)};Ge.useId=function(){return Zt.current.useId()};Ge.useImperativeHandle=function(t,e,n){return Zt.current.useImperativeHandle(t,e,n)};Ge.useInsertionEffect=function(t,e){return Zt.current.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return Zt.current.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return Zt.current.useMemo(t,e)};Ge.useReducer=function(t,e,n){return Zt.current.useReducer(t,e,n)};Ge.useRef=function(t){return Zt.current.useRef(t)};Ge.useState=function(t){return Zt.current.useState(t)};Ge.useSyncExternalStore=function(t,e,n){return Zt.current.useSyncExternalStore(t,e,n)};Ge.useTransition=function(){return Zt.current.useTransition()};Ge.version="18.3.1";vg.exports=Ge;var ge=vg.exports;const q_=I_(ge);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K_=ge,Z_=Symbol.for("react.element"),Q_=Symbol.for("react.fragment"),J_=Object.prototype.hasOwnProperty,ex=K_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tx={key:!0,ref:!0,__self:!0,__source:!0};function Ag(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)J_.call(e,i)&&!tx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Z_,type:t,key:s,ref:o,props:r,_owner:ex.current}}hc.Fragment=Q_;hc.jsx=Ag;hc.jsxs=Ag;gg.exports=hc;var q=gg.exports,Wu={},Cg={exports:{}},vn={},Rg={exports:{}},bg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,j){var Q=I.length;I.push(j);e:for(;0<Q;){var oe=Q-1>>>1,xe=I[oe];if(0<r(xe,j))I[oe]=j,I[Q]=xe,Q=oe;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var j=I[0],Q=I.pop();if(Q!==j){I[0]=Q;e:for(var oe=0,xe=I.length,He=xe>>>1;oe<He;){var K=2*(oe+1)-1,ne=I[K],ue=K+1,fe=I[ue];if(0>r(ne,Q))ue<xe&&0>r(fe,ne)?(I[oe]=fe,I[ue]=Q,oe=ue):(I[oe]=ne,I[K]=Q,oe=K);else if(ue<xe&&0>r(fe,Q))I[oe]=fe,I[ue]=Q,oe=ue;else break e}}return j}function r(I,j){var Q=I.sortIndex-j.sortIndex;return Q!==0?Q:I.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,h=3,p=!1,x=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(I){for(var j=n(c);j!==null;){if(j.callback===null)i(c);else if(j.startTime<=I)i(c),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(c)}}function S(I){if(v=!1,_(I),!x)if(n(l)!==null)x=!0,V(R);else{var j=n(c);j!==null&&Z(S,j.startTime-I)}}function R(I,j){x=!1,v&&(v=!1,f(P),P=-1),p=!0;var Q=h;try{for(_(j),d=n(l);d!==null&&(!(d.expirationTime>j)||I&&!b());){var oe=d.callback;if(typeof oe=="function"){d.callback=null,h=d.priorityLevel;var xe=oe(d.expirationTime<=j);j=t.unstable_now(),typeof xe=="function"?d.callback=xe:d===n(l)&&i(l),_(j)}else i(l);d=n(l)}if(d!==null)var He=!0;else{var K=n(c);K!==null&&Z(S,K.startTime-j),He=!1}return He}finally{d=null,h=Q,p=!1}}var T=!1,w=null,P=-1,A=5,y=-1;function b(){return!(t.unstable_now()-y<A)}function F(){if(w!==null){var I=t.unstable_now();y=I;var j=!0;try{j=w(!0,I)}finally{j?O():(T=!1,w=null)}}else T=!1}var O;if(typeof g=="function")O=function(){g(F)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,$=Y.port2;Y.port1.onmessage=F,O=function(){$.postMessage(null)}}else O=function(){m(F,0)};function V(I){w=I,T||(T=!0,O())}function Z(I,j){P=m(function(){I(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){x||p||(x=!0,V(R))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var j=3;break;default:j=h}var Q=h;h=j;try{return I()}finally{h=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,j){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Q=h;h=I;try{return j()}finally{h=Q}},t.unstable_scheduleCallback=function(I,j,Q){var oe=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?oe+Q:oe):Q=oe,I){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=Q+xe,I={id:u++,callback:j,priorityLevel:I,startTime:Q,expirationTime:xe,sortIndex:-1},Q>oe?(I.sortIndex=Q,e(c,I),n(l)===null&&I===n(c)&&(v?(f(P),P=-1):v=!0,Z(S,Q-oe))):(I.sortIndex=xe,e(l,I),x||p||(x=!0,V(R))),I},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(I){var j=h;return function(){var Q=h;h=j;try{return I.apply(this,arguments)}finally{h=Q}}}})(bg);Rg.exports=bg;var nx=Rg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ix=ge,gn=nx;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Pg=new Set,jo={};function kr(t,e){Os(t,e),Os(t+"Capture",e)}function Os(t,e){for(jo[t]=e,t=0;t<e.length;t++)Pg.add(e[t])}var xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xu=Object.prototype.hasOwnProperty,rx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hh={},Vh={};function sx(t){return Xu.call(Vh,t)?!0:Xu.call(Hh,t)?!1:rx.test(t)?Vh[t]=!0:(Hh[t]=!0,!1)}function ox(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ax(t,e,n,i){if(e===null||typeof e>"u"||ox(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Qt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Bt[t]=new Qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Bt[e]=new Qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Bt[t]=new Qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Bt[t]=new Qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Bt[t]=new Qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Bt[t]=new Qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Bt[t]=new Qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Bt[t]=new Qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Bt[t]=new Qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ed=/[\-:]([a-z])/g;function wd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ed,wd);Bt[e]=new Qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ed,wd);Bt[e]=new Qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ed,wd);Bt[e]=new Qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Bt[t]=new Qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Bt.xlinkHref=new Qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Bt[t]=new Qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Td(t,e,n,i){var r=Bt.hasOwnProperty(e)?Bt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ax(e,n,r,i)&&(n=null),i||r===null?sx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var wi=ix.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ma=Symbol.for("react.element"),ds=Symbol.for("react.portal"),hs=Symbol.for("react.fragment"),Ad=Symbol.for("react.strict_mode"),ju=Symbol.for("react.profiler"),Lg=Symbol.for("react.provider"),Dg=Symbol.for("react.context"),Cd=Symbol.for("react.forward_ref"),Yu=Symbol.for("react.suspense"),$u=Symbol.for("react.suspense_list"),Rd=Symbol.for("react.memo"),Fi=Symbol.for("react.lazy"),Ig=Symbol.for("react.offscreen"),Gh=Symbol.iterator;function co(t){return t===null||typeof t!="object"?null:(t=Gh&&t[Gh]||t["@@iterator"],typeof t=="function"?t:null)}var ct=Object.assign,Hc;function Co(t){if(Hc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Hc=e&&e[1]||""}return`
`+Hc+t}var Vc=!1;function Gc(t,e){if(!t||Vc)return"";Vc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Vc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Co(t):""}function lx(t){switch(t.tag){case 5:return Co(t.type);case 16:return Co("Lazy");case 13:return Co("Suspense");case 19:return Co("SuspenseList");case 0:case 2:case 15:return t=Gc(t.type,!1),t;case 11:return t=Gc(t.type.render,!1),t;case 1:return t=Gc(t.type,!0),t;default:return""}}function qu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hs:return"Fragment";case ds:return"Portal";case ju:return"Profiler";case Ad:return"StrictMode";case Yu:return"Suspense";case $u:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Dg:return(t.displayName||"Context")+".Consumer";case Lg:return(t._context.displayName||"Context")+".Provider";case Cd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Rd:return e=t.displayName||null,e!==null?e:qu(t.type)||"Memo";case Fi:e=t._payload,t=t._init;try{return qu(t(e))}catch{}}return null}function cx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qu(e);case 8:return e===Ad?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ng(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ux(t){var e=Ng(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ea(t){t._valueTracker||(t._valueTracker=ux(t))}function Ug(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Ng(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Dl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ku(t,e){var n=e.checked;return ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Wh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=er(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Fg(t,e){e=e.checked,e!=null&&Td(t,"checked",e,!1)}function Zu(t,e){Fg(t,e);var n=er(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Qu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Qu(t,e.type,er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Xh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Qu(t,e,n){(e!=="number"||Dl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ro=Array.isArray;function Cs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+er(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Ju(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return ct({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function jh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(Ro(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:er(n)}}function Og(t,e){var n=er(e.value),i=er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Yh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function kg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ef(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?kg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wa,Bg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(wa=wa||document.createElement("div"),wa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Yo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var No={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fx=["Webkit","ms","Moz","O"];Object.keys(No).forEach(function(t){fx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),No[e]=No[t]})});function zg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||No.hasOwnProperty(t)&&No[t]?(""+e).trim():e+"px"}function Hg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=zg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var dx=ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tf(t,e){if(e){if(dx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function nf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rf=null;function bd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var sf=null,Rs=null,bs=null;function $h(t){if(t=ma(t)){if(typeof sf!="function")throw Error(re(280));var e=t.stateNode;e&&(e=_c(e),sf(t.stateNode,t.type,e))}}function Vg(t){Rs?bs?bs.push(t):bs=[t]:Rs=t}function Gg(){if(Rs){var t=Rs,e=bs;if(bs=Rs=null,$h(t),e)for(t=0;t<e.length;t++)$h(e[t])}}function Wg(t,e){return t(e)}function Xg(){}var Wc=!1;function jg(t,e,n){if(Wc)return t(e,n);Wc=!0;try{return Wg(t,e,n)}finally{Wc=!1,(Rs!==null||bs!==null)&&(Xg(),Gg())}}function $o(t,e){var n=t.stateNode;if(n===null)return null;var i=_c(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var of=!1;if(xi)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){of=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{of=!1}function hx(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Uo=!1,Il=null,Nl=!1,af=null,px={onError:function(t){Uo=!0,Il=t}};function mx(t,e,n,i,r,s,o,a,l){Uo=!1,Il=null,hx.apply(px,arguments)}function gx(t,e,n,i,r,s,o,a,l){if(mx.apply(this,arguments),Uo){if(Uo){var c=Il;Uo=!1,Il=null}else throw Error(re(198));Nl||(Nl=!0,af=c)}}function Br(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Yg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function qh(t){if(Br(t)!==t)throw Error(re(188))}function vx(t){var e=t.alternate;if(!e){if(e=Br(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return qh(r),t;if(s===i)return qh(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function $g(t){return t=vx(t),t!==null?qg(t):null}function qg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=qg(t);if(e!==null)return e;t=t.sibling}return null}var Kg=gn.unstable_scheduleCallback,Kh=gn.unstable_cancelCallback,_x=gn.unstable_shouldYield,xx=gn.unstable_requestPaint,vt=gn.unstable_now,yx=gn.unstable_getCurrentPriorityLevel,Pd=gn.unstable_ImmediatePriority,Zg=gn.unstable_UserBlockingPriority,Ul=gn.unstable_NormalPriority,Sx=gn.unstable_LowPriority,Qg=gn.unstable_IdlePriority,pc=null,Jn=null;function Mx(t){if(Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot(pc,t,void 0,(t.current.flags&128)===128)}catch{}}var kn=Math.clz32?Math.clz32:Tx,Ex=Math.log,wx=Math.LN2;function Tx(t){return t>>>=0,t===0?32:31-(Ex(t)/wx|0)|0}var Ta=64,Aa=4194304;function bo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=bo(a):(s&=o,s!==0&&(i=bo(s)))}else o=n&~r,o!==0?i=bo(o):s!==0&&(i=bo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-kn(e),r=1<<n,i|=t[n],e&=~r;return i}function Ax(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-kn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Ax(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function lf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Jg(){var t=Ta;return Ta<<=1,!(Ta&4194240)&&(Ta=64),t}function Xc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ha(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-kn(e),t[e]=n}function Rx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-kn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Ld(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-kn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Je=0;function e0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var t0,Dd,n0,i0,r0,cf=!1,Ca=[],Wi=null,Xi=null,ji=null,qo=new Map,Ko=new Map,Bi=[],bx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zh(t,e){switch(t){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":Xi=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":qo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(e.pointerId)}}function fo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ma(e),e!==null&&Dd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Px(t,e,n,i,r){switch(e){case"focusin":return Wi=fo(Wi,t,e,n,i,r),!0;case"dragenter":return Xi=fo(Xi,t,e,n,i,r),!0;case"mouseover":return ji=fo(ji,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return qo.set(s,fo(qo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ko.set(s,fo(Ko.get(s)||null,t,e,n,i,r)),!0}return!1}function s0(t){var e=Sr(t.target);if(e!==null){var n=Br(e);if(n!==null){if(e=n.tag,e===13){if(e=Yg(n),e!==null){t.blockedOn=e,r0(t.priority,function(){n0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ml(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=uf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);rf=i,n.target.dispatchEvent(i),rf=null}else return e=ma(n),e!==null&&Dd(e),t.blockedOn=n,!1;e.shift()}return!0}function Qh(t,e,n){ml(t)&&n.delete(e)}function Lx(){cf=!1,Wi!==null&&ml(Wi)&&(Wi=null),Xi!==null&&ml(Xi)&&(Xi=null),ji!==null&&ml(ji)&&(ji=null),qo.forEach(Qh),Ko.forEach(Qh)}function ho(t,e){t.blockedOn===e&&(t.blockedOn=null,cf||(cf=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,Lx)))}function Zo(t){function e(r){return ho(r,t)}if(0<Ca.length){ho(Ca[0],t);for(var n=1;n<Ca.length;n++){var i=Ca[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Wi!==null&&ho(Wi,t),Xi!==null&&ho(Xi,t),ji!==null&&ho(ji,t),qo.forEach(e),Ko.forEach(e),n=0;n<Bi.length;n++)i=Bi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Bi.length&&(n=Bi[0],n.blockedOn===null);)s0(n),n.blockedOn===null&&Bi.shift()}var Ps=wi.ReactCurrentBatchConfig,Ol=!0;function Dx(t,e,n,i){var r=Je,s=Ps.transition;Ps.transition=null;try{Je=1,Id(t,e,n,i)}finally{Je=r,Ps.transition=s}}function Ix(t,e,n,i){var r=Je,s=Ps.transition;Ps.transition=null;try{Je=4,Id(t,e,n,i)}finally{Je=r,Ps.transition=s}}function Id(t,e,n,i){if(Ol){var r=uf(t,e,n,i);if(r===null)tu(t,e,i,kl,n),Zh(t,i);else if(Px(r,t,e,n,i))i.stopPropagation();else if(Zh(t,i),e&4&&-1<bx.indexOf(t)){for(;r!==null;){var s=ma(r);if(s!==null&&t0(s),s=uf(t,e,n,i),s===null&&tu(t,e,i,kl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else tu(t,e,i,null,n)}}var kl=null;function uf(t,e,n,i){if(kl=null,t=bd(i),t=Sr(t),t!==null)if(e=Br(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Yg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return kl=t,null}function o0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yx()){case Pd:return 1;case Zg:return 4;case Ul:case Sx:return 16;case Qg:return 536870912;default:return 16}default:return 16}}var Vi=null,Nd=null,gl=null;function a0(){if(gl)return gl;var t,e=Nd,n=e.length,i,r="value"in Vi?Vi.value:Vi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return gl=r.slice(t,1<i?1-i:void 0)}function vl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ra(){return!0}function Jh(){return!1}function _n(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ra:Jh,this.isPropagationStopped=Jh,this}return ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ra)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ra)},persist:function(){},isPersistent:Ra}),e}var no={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ud=_n(no),pa=ct({},no,{view:0,detail:0}),Nx=_n(pa),jc,Yc,po,mc=ct({},pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==po&&(po&&t.type==="mousemove"?(jc=t.screenX-po.screenX,Yc=t.screenY-po.screenY):Yc=jc=0,po=t),jc)},movementY:function(t){return"movementY"in t?t.movementY:Yc}}),ep=_n(mc),Ux=ct({},mc,{dataTransfer:0}),Fx=_n(Ux),Ox=ct({},pa,{relatedTarget:0}),$c=_n(Ox),kx=ct({},no,{animationName:0,elapsedTime:0,pseudoElement:0}),Bx=_n(kx),zx=ct({},no,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Hx=_n(zx),Vx=ct({},no,{data:0}),tp=_n(Vx),Gx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Xx[t])?!!e[t]:!1}function Fd(){return jx}var Yx=ct({},pa,{key:function(t){if(t.key){var e=Gx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Wx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fd,charCode:function(t){return t.type==="keypress"?vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$x=_n(Yx),qx=ct({},mc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),np=_n(qx),Kx=ct({},pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fd}),Zx=_n(Kx),Qx=ct({},no,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jx=_n(Qx),ey=ct({},mc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ty=_n(ey),ny=[9,13,27,32],Od=xi&&"CompositionEvent"in window,Fo=null;xi&&"documentMode"in document&&(Fo=document.documentMode);var iy=xi&&"TextEvent"in window&&!Fo,l0=xi&&(!Od||Fo&&8<Fo&&11>=Fo),ip=" ",rp=!1;function c0(t,e){switch(t){case"keyup":return ny.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function u0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ps=!1;function ry(t,e){switch(t){case"compositionend":return u0(e);case"keypress":return e.which!==32?null:(rp=!0,ip);case"textInput":return t=e.data,t===ip&&rp?null:t;default:return null}}function sy(t,e){if(ps)return t==="compositionend"||!Od&&c0(t,e)?(t=a0(),gl=Nd=Vi=null,ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return l0&&e.locale!=="ko"?null:e.data;default:return null}}var oy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!oy[t.type]:e==="textarea"}function f0(t,e,n,i){Vg(i),e=Bl(e,"onChange"),0<e.length&&(n=new Ud("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Oo=null,Qo=null;function ay(t){M0(t,0)}function gc(t){var e=vs(t);if(Ug(e))return t}function ly(t,e){if(t==="change")return e}var d0=!1;if(xi){var qc;if(xi){var Kc="oninput"in document;if(!Kc){var op=document.createElement("div");op.setAttribute("oninput","return;"),Kc=typeof op.oninput=="function"}qc=Kc}else qc=!1;d0=qc&&(!document.documentMode||9<document.documentMode)}function ap(){Oo&&(Oo.detachEvent("onpropertychange",h0),Qo=Oo=null)}function h0(t){if(t.propertyName==="value"&&gc(Qo)){var e=[];f0(e,Qo,t,bd(t)),jg(ay,e)}}function cy(t,e,n){t==="focusin"?(ap(),Oo=e,Qo=n,Oo.attachEvent("onpropertychange",h0)):t==="focusout"&&ap()}function uy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gc(Qo)}function fy(t,e){if(t==="click")return gc(e)}function dy(t,e){if(t==="input"||t==="change")return gc(e)}function hy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Hn=typeof Object.is=="function"?Object.is:hy;function Jo(t,e){if(Hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Xu.call(e,r)||!Hn(t[r],e[r]))return!1}return!0}function lp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cp(t,e){var n=lp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lp(n)}}function p0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?p0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function m0(){for(var t=window,e=Dl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Dl(t.document)}return e}function kd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function py(t){var e=m0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&p0(n.ownerDocument.documentElement,n)){if(i!==null&&kd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=cp(n,s);var o=cp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var my=xi&&"documentMode"in document&&11>=document.documentMode,ms=null,ff=null,ko=null,df=!1;function up(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;df||ms==null||ms!==Dl(i)||(i=ms,"selectionStart"in i&&kd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ko&&Jo(ko,i)||(ko=i,i=Bl(ff,"onSelect"),0<i.length&&(e=new Ud("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ms)))}function ba(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var gs={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionend:ba("Transition","TransitionEnd")},Zc={},g0={};xi&&(g0=document.createElement("div").style,"AnimationEvent"in window||(delete gs.animationend.animation,delete gs.animationiteration.animation,delete gs.animationstart.animation),"TransitionEvent"in window||delete gs.transitionend.transition);function vc(t){if(Zc[t])return Zc[t];if(!gs[t])return t;var e=gs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in g0)return Zc[t]=e[n];return t}var v0=vc("animationend"),_0=vc("animationiteration"),x0=vc("animationstart"),y0=vc("transitionend"),S0=new Map,fp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(t,e){S0.set(t,e),kr(e,[t])}for(var Qc=0;Qc<fp.length;Qc++){var Jc=fp[Qc],gy=Jc.toLowerCase(),vy=Jc[0].toUpperCase()+Jc.slice(1);sr(gy,"on"+vy)}sr(v0,"onAnimationEnd");sr(_0,"onAnimationIteration");sr(x0,"onAnimationStart");sr("dblclick","onDoubleClick");sr("focusin","onFocus");sr("focusout","onBlur");sr(y0,"onTransitionEnd");Os("onMouseEnter",["mouseout","mouseover"]);Os("onMouseLeave",["mouseout","mouseover"]);Os("onPointerEnter",["pointerout","pointerover"]);Os("onPointerLeave",["pointerout","pointerover"]);kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_y=new Set("cancel close invalid load scroll toggle".split(" ").concat(Po));function dp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,gx(i,e,void 0,t),t.currentTarget=null}function M0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;dp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;dp(r,a,c),s=l}}}if(Nl)throw t=af,Nl=!1,af=null,t}function nt(t,e){var n=e[vf];n===void 0&&(n=e[vf]=new Set);var i=t+"__bubble";n.has(i)||(E0(e,t,2,!1),n.add(i))}function eu(t,e,n){var i=0;e&&(i|=4),E0(n,t,i,e)}var Pa="_reactListening"+Math.random().toString(36).slice(2);function ea(t){if(!t[Pa]){t[Pa]=!0,Pg.forEach(function(n){n!=="selectionchange"&&(_y.has(n)||eu(n,!1,t),eu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Pa]||(e[Pa]=!0,eu("selectionchange",!1,e))}}function E0(t,e,n,i){switch(o0(e)){case 1:var r=Dx;break;case 4:r=Ix;break;default:r=Id}n=r.bind(null,e,n,t),r=void 0,!of||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function tu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Sr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}jg(function(){var c=s,u=bd(n),d=[];e:{var h=S0.get(t);if(h!==void 0){var p=Ud,x=t;switch(t){case"keypress":if(vl(n)===0)break e;case"keydown":case"keyup":p=$x;break;case"focusin":x="focus",p=$c;break;case"focusout":x="blur",p=$c;break;case"beforeblur":case"afterblur":p=$c;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Fx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Zx;break;case v0:case _0:case x0:p=Bx;break;case y0:p=Jx;break;case"scroll":p=Nx;break;case"wheel":p=ty;break;case"copy":case"cut":case"paste":p=Hx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=np}var v=(e&4)!==0,m=!v&&t==="scroll",f=v?h!==null?h+"Capture":null:h;v=[];for(var g=c,_;g!==null;){_=g;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,f!==null&&(S=$o(g,f),S!=null&&v.push(ta(g,S,_)))),m)break;g=g.return}0<v.length&&(h=new p(h,x,null,n,u),d.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==rf&&(x=n.relatedTarget||n.fromElement)&&(Sr(x)||x[yi]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=c,x=x?Sr(x):null,x!==null&&(m=Br(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=c),p!==x)){if(v=ep,S="onMouseLeave",f="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(v=np,S="onPointerLeave",f="onPointerEnter",g="pointer"),m=p==null?h:vs(p),_=x==null?h:vs(x),h=new v(S,g+"leave",p,n,u),h.target=m,h.relatedTarget=_,S=null,Sr(u)===c&&(v=new v(f,g+"enter",x,n,u),v.target=_,v.relatedTarget=m,S=v),m=S,p&&x)t:{for(v=p,f=x,g=0,_=v;_;_=Gr(_))g++;for(_=0,S=f;S;S=Gr(S))_++;for(;0<g-_;)v=Gr(v),g--;for(;0<_-g;)f=Gr(f),_--;for(;g--;){if(v===f||f!==null&&v===f.alternate)break t;v=Gr(v),f=Gr(f)}v=null}else v=null;p!==null&&hp(d,h,p,v,!1),x!==null&&m!==null&&hp(d,m,x,v,!0)}}e:{if(h=c?vs(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var R=ly;else if(sp(h))if(d0)R=dy;else{R=uy;var T=cy}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=fy);if(R&&(R=R(t,c))){f0(d,R,n,u);break e}T&&T(t,h,c),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&Qu(h,"number",h.value)}switch(T=c?vs(c):window,t){case"focusin":(sp(T)||T.contentEditable==="true")&&(ms=T,ff=c,ko=null);break;case"focusout":ko=ff=ms=null;break;case"mousedown":df=!0;break;case"contextmenu":case"mouseup":case"dragend":df=!1,up(d,n,u);break;case"selectionchange":if(my)break;case"keydown":case"keyup":up(d,n,u)}var w;if(Od)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ps?c0(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(l0&&n.locale!=="ko"&&(ps||P!=="onCompositionStart"?P==="onCompositionEnd"&&ps&&(w=a0()):(Vi=u,Nd="value"in Vi?Vi.value:Vi.textContent,ps=!0)),T=Bl(c,P),0<T.length&&(P=new tp(P,t,null,n,u),d.push({event:P,listeners:T}),w?P.data=w:(w=u0(n),w!==null&&(P.data=w)))),(w=iy?ry(t,n):sy(t,n))&&(c=Bl(c,"onBeforeInput"),0<c.length&&(u=new tp("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=w))}M0(d,e)})}function ta(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=$o(t,n),s!=null&&i.unshift(ta(t,s,r)),s=$o(t,e),s!=null&&i.push(ta(t,s,r))),t=t.return}return i}function Gr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=$o(n,s),l!=null&&o.unshift(ta(n,l,a))):r||(l=$o(n,s),l!=null&&o.push(ta(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var xy=/\r\n?/g,yy=/\u0000|\uFFFD/g;function pp(t){return(typeof t=="string"?t:""+t).replace(xy,`
`).replace(yy,"")}function La(t,e,n){if(e=pp(e),pp(t)!==e&&n)throw Error(re(425))}function zl(){}var hf=null,pf=null;function mf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var gf=typeof setTimeout=="function"?setTimeout:void 0,Sy=typeof clearTimeout=="function"?clearTimeout:void 0,mp=typeof Promise=="function"?Promise:void 0,My=typeof queueMicrotask=="function"?queueMicrotask:typeof mp<"u"?function(t){return mp.resolve(null).then(t).catch(Ey)}:gf;function Ey(t){setTimeout(function(){throw t})}function nu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Zo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Zo(e)}function Yi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function gp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var io=Math.random().toString(36).slice(2),$n="__reactFiber$"+io,na="__reactProps$"+io,yi="__reactContainer$"+io,vf="__reactEvents$"+io,wy="__reactListeners$"+io,Ty="__reactHandles$"+io;function Sr(t){var e=t[$n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[yi]||n[$n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=gp(t);t!==null;){if(n=t[$n])return n;t=gp(t)}return e}t=n,n=t.parentNode}return null}function ma(t){return t=t[$n]||t[yi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function vs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function _c(t){return t[na]||null}var _f=[],_s=-1;function or(t){return{current:t}}function rt(t){0>_s||(t.current=_f[_s],_f[_s]=null,_s--)}function et(t,e){_s++,_f[_s]=t.current,t.current=e}var tr={},jt=or(tr),tn=or(!1),br=tr;function ks(t,e){var n=t.type.contextTypes;if(!n)return tr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function nn(t){return t=t.childContextTypes,t!=null}function Hl(){rt(tn),rt(jt)}function vp(t,e,n){if(jt.current!==tr)throw Error(re(168));et(jt,e),et(tn,n)}function w0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,cx(t)||"Unknown",r));return ct({},n,i)}function Vl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,br=jt.current,et(jt,t),et(tn,tn.current),!0}function _p(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=w0(t,e,br),i.__reactInternalMemoizedMergedChildContext=t,rt(tn),rt(jt),et(jt,t)):rt(tn),et(tn,n)}var di=null,xc=!1,iu=!1;function T0(t){di===null?di=[t]:di.push(t)}function Ay(t){xc=!0,T0(t)}function ar(){if(!iu&&di!==null){iu=!0;var t=0,e=Je;try{var n=di;for(Je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}di=null,xc=!1}catch(r){throw di!==null&&(di=di.slice(t+1)),Kg(Pd,ar),r}finally{Je=e,iu=!1}}return null}var xs=[],ys=0,Gl=null,Wl=0,Sn=[],Mn=0,Pr=null,hi=1,pi="";function gr(t,e){xs[ys++]=Wl,xs[ys++]=Gl,Gl=t,Wl=e}function A0(t,e,n){Sn[Mn++]=hi,Sn[Mn++]=pi,Sn[Mn++]=Pr,Pr=t;var i=hi;t=pi;var r=32-kn(i)-1;i&=~(1<<r),n+=1;var s=32-kn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,hi=1<<32-kn(e)+r|n<<r|i,pi=s+t}else hi=1<<s|n<<r|i,pi=t}function Bd(t){t.return!==null&&(gr(t,1),A0(t,1,0))}function zd(t){for(;t===Gl;)Gl=xs[--ys],xs[ys]=null,Wl=xs[--ys],xs[ys]=null;for(;t===Pr;)Pr=Sn[--Mn],Sn[Mn]=null,pi=Sn[--Mn],Sn[Mn]=null,hi=Sn[--Mn],Sn[Mn]=null}var mn=null,pn=null,ot=!1,Un=null;function C0(t,e){var n=En(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function xp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,pn=Yi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Pr!==null?{id:hi,overflow:pi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=En(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,pn=null,!0):!1;default:return!1}}function xf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yf(t){if(ot){var e=pn;if(e){var n=e;if(!xp(t,e)){if(xf(t))throw Error(re(418));e=Yi(n.nextSibling);var i=mn;e&&xp(t,e)?C0(i,n):(t.flags=t.flags&-4097|2,ot=!1,mn=t)}}else{if(xf(t))throw Error(re(418));t.flags=t.flags&-4097|2,ot=!1,mn=t}}}function yp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function Da(t){if(t!==mn)return!1;if(!ot)return yp(t),ot=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!mf(t.type,t.memoizedProps)),e&&(e=pn)){if(xf(t))throw R0(),Error(re(418));for(;e;)C0(t,e),e=Yi(e.nextSibling)}if(yp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pn=Yi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pn=null}}else pn=mn?Yi(t.stateNode.nextSibling):null;return!0}function R0(){for(var t=pn;t;)t=Yi(t.nextSibling)}function Bs(){pn=mn=null,ot=!1}function Hd(t){Un===null?Un=[t]:Un.push(t)}var Cy=wi.ReactCurrentBatchConfig;function mo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function Ia(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Sp(t){var e=t._init;return e(t._payload)}function b0(t){function e(f,g){if(t){var _=f.deletions;_===null?(f.deletions=[g],f.flags|=16):_.push(g)}}function n(f,g){if(!t)return null;for(;g!==null;)e(f,g),g=g.sibling;return null}function i(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function r(f,g){return f=Zi(f,g),f.index=0,f.sibling=null,f}function s(f,g,_){return f.index=_,t?(_=f.alternate,_!==null?(_=_.index,_<g?(f.flags|=2,g):_):(f.flags|=2,g)):(f.flags|=1048576,g)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,g,_,S){return g===null||g.tag!==6?(g=uu(_,f.mode,S),g.return=f,g):(g=r(g,_),g.return=f,g)}function l(f,g,_,S){var R=_.type;return R===hs?u(f,g,_.props.children,S,_.key):g!==null&&(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Fi&&Sp(R)===g.type)?(S=r(g,_.props),S.ref=mo(f,g,_),S.return=f,S):(S=wl(_.type,_.key,_.props,null,f.mode,S),S.ref=mo(f,g,_),S.return=f,S)}function c(f,g,_,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=fu(_,f.mode,S),g.return=f,g):(g=r(g,_.children||[]),g.return=f,g)}function u(f,g,_,S,R){return g===null||g.tag!==7?(g=Cr(_,f.mode,S,R),g.return=f,g):(g=r(g,_),g.return=f,g)}function d(f,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=uu(""+g,f.mode,_),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ma:return _=wl(g.type,g.key,g.props,null,f.mode,_),_.ref=mo(f,null,g),_.return=f,_;case ds:return g=fu(g,f.mode,_),g.return=f,g;case Fi:var S=g._init;return d(f,S(g._payload),_)}if(Ro(g)||co(g))return g=Cr(g,f.mode,_,null),g.return=f,g;Ia(f,g)}return null}function h(f,g,_,S){var R=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return R!==null?null:a(f,g,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ma:return _.key===R?l(f,g,_,S):null;case ds:return _.key===R?c(f,g,_,S):null;case Fi:return R=_._init,h(f,g,R(_._payload),S)}if(Ro(_)||co(_))return R!==null?null:u(f,g,_,S,null);Ia(f,_)}return null}function p(f,g,_,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(_)||null,a(g,f,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ma:return f=f.get(S.key===null?_:S.key)||null,l(g,f,S,R);case ds:return f=f.get(S.key===null?_:S.key)||null,c(g,f,S,R);case Fi:var T=S._init;return p(f,g,_,T(S._payload),R)}if(Ro(S)||co(S))return f=f.get(_)||null,u(g,f,S,R,null);Ia(g,S)}return null}function x(f,g,_,S){for(var R=null,T=null,w=g,P=g=0,A=null;w!==null&&P<_.length;P++){w.index>P?(A=w,w=null):A=w.sibling;var y=h(f,w,_[P],S);if(y===null){w===null&&(w=A);break}t&&w&&y.alternate===null&&e(f,w),g=s(y,g,P),T===null?R=y:T.sibling=y,T=y,w=A}if(P===_.length)return n(f,w),ot&&gr(f,P),R;if(w===null){for(;P<_.length;P++)w=d(f,_[P],S),w!==null&&(g=s(w,g,P),T===null?R=w:T.sibling=w,T=w);return ot&&gr(f,P),R}for(w=i(f,w);P<_.length;P++)A=p(w,f,P,_[P],S),A!==null&&(t&&A.alternate!==null&&w.delete(A.key===null?P:A.key),g=s(A,g,P),T===null?R=A:T.sibling=A,T=A);return t&&w.forEach(function(b){return e(f,b)}),ot&&gr(f,P),R}function v(f,g,_,S){var R=co(_);if(typeof R!="function")throw Error(re(150));if(_=R.call(_),_==null)throw Error(re(151));for(var T=R=null,w=g,P=g=0,A=null,y=_.next();w!==null&&!y.done;P++,y=_.next()){w.index>P?(A=w,w=null):A=w.sibling;var b=h(f,w,y.value,S);if(b===null){w===null&&(w=A);break}t&&w&&b.alternate===null&&e(f,w),g=s(b,g,P),T===null?R=b:T.sibling=b,T=b,w=A}if(y.done)return n(f,w),ot&&gr(f,P),R;if(w===null){for(;!y.done;P++,y=_.next())y=d(f,y.value,S),y!==null&&(g=s(y,g,P),T===null?R=y:T.sibling=y,T=y);return ot&&gr(f,P),R}for(w=i(f,w);!y.done;P++,y=_.next())y=p(w,f,P,y.value,S),y!==null&&(t&&y.alternate!==null&&w.delete(y.key===null?P:y.key),g=s(y,g,P),T===null?R=y:T.sibling=y,T=y);return t&&w.forEach(function(F){return e(f,F)}),ot&&gr(f,P),R}function m(f,g,_,S){if(typeof _=="object"&&_!==null&&_.type===hs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Ma:e:{for(var R=_.key,T=g;T!==null;){if(T.key===R){if(R=_.type,R===hs){if(T.tag===7){n(f,T.sibling),g=r(T,_.props.children),g.return=f,f=g;break e}}else if(T.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Fi&&Sp(R)===T.type){n(f,T.sibling),g=r(T,_.props),g.ref=mo(f,T,_),g.return=f,f=g;break e}n(f,T);break}else e(f,T);T=T.sibling}_.type===hs?(g=Cr(_.props.children,f.mode,S,_.key),g.return=f,f=g):(S=wl(_.type,_.key,_.props,null,f.mode,S),S.ref=mo(f,g,_),S.return=f,f=S)}return o(f);case ds:e:{for(T=_.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(f,g.sibling),g=r(g,_.children||[]),g.return=f,f=g;break e}else{n(f,g);break}else e(f,g);g=g.sibling}g=fu(_,f.mode,S),g.return=f,f=g}return o(f);case Fi:return T=_._init,m(f,g,T(_._payload),S)}if(Ro(_))return x(f,g,_,S);if(co(_))return v(f,g,_,S);Ia(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(f,g.sibling),g=r(g,_),g.return=f,f=g):(n(f,g),g=uu(_,f.mode,S),g.return=f,f=g),o(f)):n(f,g)}return m}var zs=b0(!0),P0=b0(!1),Xl=or(null),jl=null,Ss=null,Vd=null;function Gd(){Vd=Ss=jl=null}function Wd(t){var e=Xl.current;rt(Xl),t._currentValue=e}function Sf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ls(t,e){jl=t,Vd=Ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(en=!0),t.firstContext=null)}function An(t){var e=t._currentValue;if(Vd!==t)if(t={context:t,memoizedValue:e,next:null},Ss===null){if(jl===null)throw Error(re(308));Ss=t,jl.dependencies={lanes:0,firstContext:t}}else Ss=Ss.next=t;return e}var Mr=null;function Xd(t){Mr===null?Mr=[t]:Mr.push(t)}function L0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Xd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Si(t,i)}function Si(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Oi=!1;function jd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function D0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function _i(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function $i(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Si(t,n)}return r=i.interleaved,r===null?(e.next=e,Xd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Si(t,n)}function _l(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ld(t,n)}}function Mp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Yl(t,e,n,i){var r=t.updateQueue;Oi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,v=a;switch(h=e,p=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){d=x.call(p,d,h);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,h=typeof x=="function"?x.call(p,d,h):x,h==null)break e;d=ct({},d,h);break e;case 2:Oi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Dr|=o,t.lanes=o,t.memoizedState=d}}function Ep(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var ga={},ei=or(ga),ia=or(ga),ra=or(ga);function Er(t){if(t===ga)throw Error(re(174));return t}function Yd(t,e){switch(et(ra,e),et(ia,t),et(ei,ga),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ef(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ef(e,t)}rt(ei),et(ei,e)}function Hs(){rt(ei),rt(ia),rt(ra)}function I0(t){Er(ra.current);var e=Er(ei.current),n=ef(e,t.type);e!==n&&(et(ia,t),et(ei,n))}function $d(t){ia.current===t&&(rt(ei),rt(ia))}var at=or(0);function $l(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ru=[];function qd(){for(var t=0;t<ru.length;t++)ru[t]._workInProgressVersionPrimary=null;ru.length=0}var xl=wi.ReactCurrentDispatcher,su=wi.ReactCurrentBatchConfig,Lr=0,lt=null,wt=null,It=null,ql=!1,Bo=!1,sa=0,Ry=0;function zt(){throw Error(re(321))}function Kd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Hn(t[n],e[n]))return!1;return!0}function Zd(t,e,n,i,r,s){if(Lr=s,lt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,xl.current=t===null||t.memoizedState===null?Dy:Iy,t=n(i,r),Bo){s=0;do{if(Bo=!1,sa=0,25<=s)throw Error(re(301));s+=1,It=wt=null,e.updateQueue=null,xl.current=Ny,t=n(i,r)}while(Bo)}if(xl.current=Kl,e=wt!==null&&wt.next!==null,Lr=0,It=wt=lt=null,ql=!1,e)throw Error(re(300));return t}function Qd(){var t=sa!==0;return sa=0,t}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?lt.memoizedState=It=t:It=It.next=t,It}function Cn(){if(wt===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=It===null?lt.memoizedState:It.next;if(e!==null)It=e,wt=t;else{if(t===null)throw Error(re(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},It===null?lt.memoizedState=It=t:It=It.next=t}return It}function oa(t,e){return typeof e=="function"?e(t):e}function ou(t){var e=Cn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=wt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Lr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,lt.lanes|=u,Dr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Hn(i,e.memoizedState)||(en=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,lt.lanes|=s,Dr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function au(t){var e=Cn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Hn(s,e.memoizedState)||(en=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function N0(){}function U0(t,e){var n=lt,i=Cn(),r=e(),s=!Hn(i.memoizedState,r);if(s&&(i.memoizedState=r,en=!0),i=i.queue,Jd(k0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||It!==null&&It.memoizedState.tag&1){if(n.flags|=2048,aa(9,O0.bind(null,n,i,r,e),void 0,null),Nt===null)throw Error(re(349));Lr&30||F0(n,e,r)}return r}function F0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=lt.updateQueue,e===null?(e={lastEffect:null,stores:null},lt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function O0(t,e,n,i){e.value=n,e.getSnapshot=i,B0(e)&&z0(t)}function k0(t,e,n){return n(function(){B0(e)&&z0(t)})}function B0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Hn(t,n)}catch{return!0}}function z0(t){var e=Si(t,1);e!==null&&Bn(e,t,1,-1)}function wp(t){var e=Gn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:t},e.queue=t,t=t.dispatch=Ly.bind(null,lt,t),[e.memoizedState,t]}function aa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=lt.updateQueue,e===null?(e={lastEffect:null,stores:null},lt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function H0(){return Cn().memoizedState}function yl(t,e,n,i){var r=Gn();lt.flags|=t,r.memoizedState=aa(1|e,n,void 0,i===void 0?null:i)}function yc(t,e,n,i){var r=Cn();i=i===void 0?null:i;var s=void 0;if(wt!==null){var o=wt.memoizedState;if(s=o.destroy,i!==null&&Kd(i,o.deps)){r.memoizedState=aa(e,n,s,i);return}}lt.flags|=t,r.memoizedState=aa(1|e,n,s,i)}function Tp(t,e){return yl(8390656,8,t,e)}function Jd(t,e){return yc(2048,8,t,e)}function V0(t,e){return yc(4,2,t,e)}function G0(t,e){return yc(4,4,t,e)}function W0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function X0(t,e,n){return n=n!=null?n.concat([t]):null,yc(4,4,W0.bind(null,e,t),n)}function eh(){}function j0(t,e){var n=Cn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Kd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Y0(t,e){var n=Cn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Kd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function $0(t,e,n){return Lr&21?(Hn(n,e)||(n=Jg(),lt.lanes|=n,Dr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,en=!0),t.memoizedState=n)}function by(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var i=su.transition;su.transition={};try{t(!1),e()}finally{Je=n,su.transition=i}}function q0(){return Cn().memoizedState}function Py(t,e,n){var i=Ki(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},K0(t))Z0(e,n);else if(n=L0(t,e,n,i),n!==null){var r=Kt();Bn(n,t,i,r),Q0(n,e,i)}}function Ly(t,e,n){var i=Ki(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(K0(t))Z0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Hn(a,o)){var l=e.interleaved;l===null?(r.next=r,Xd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=L0(t,e,r,i),n!==null&&(r=Kt(),Bn(n,t,i,r),Q0(n,e,i))}}function K0(t){var e=t.alternate;return t===lt||e!==null&&e===lt}function Z0(t,e){Bo=ql=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Q0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ld(t,n)}}var Kl={readContext:An,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},Dy={readContext:An,useCallback:function(t,e){return Gn().memoizedState=[t,e===void 0?null:e],t},useContext:An,useEffect:Tp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,yl(4194308,4,W0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return yl(4194308,4,t,e)},useInsertionEffect:function(t,e){return yl(4,2,t,e)},useMemo:function(t,e){var n=Gn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Gn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Py.bind(null,lt,t),[i.memoizedState,t]},useRef:function(t){var e=Gn();return t={current:t},e.memoizedState=t},useState:wp,useDebugValue:eh,useDeferredValue:function(t){return Gn().memoizedState=t},useTransition:function(){var t=wp(!1),e=t[0];return t=by.bind(null,t[1]),Gn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=lt,r=Gn();if(ot){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Nt===null)throw Error(re(349));Lr&30||F0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Tp(k0.bind(null,i,s,t),[t]),i.flags|=2048,aa(9,O0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Gn(),e=Nt.identifierPrefix;if(ot){var n=pi,i=hi;n=(i&~(1<<32-kn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=sa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ry++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Iy={readContext:An,useCallback:j0,useContext:An,useEffect:Jd,useImperativeHandle:X0,useInsertionEffect:V0,useLayoutEffect:G0,useMemo:Y0,useReducer:ou,useRef:H0,useState:function(){return ou(oa)},useDebugValue:eh,useDeferredValue:function(t){var e=Cn();return $0(e,wt.memoizedState,t)},useTransition:function(){var t=ou(oa)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:N0,useSyncExternalStore:U0,useId:q0,unstable_isNewReconciler:!1},Ny={readContext:An,useCallback:j0,useContext:An,useEffect:Jd,useImperativeHandle:X0,useInsertionEffect:V0,useLayoutEffect:G0,useMemo:Y0,useReducer:au,useRef:H0,useState:function(){return au(oa)},useDebugValue:eh,useDeferredValue:function(t){var e=Cn();return wt===null?e.memoizedState=t:$0(e,wt.memoizedState,t)},useTransition:function(){var t=au(oa)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:N0,useSyncExternalStore:U0,useId:q0,unstable_isNewReconciler:!1};function In(t,e){if(t&&t.defaultProps){e=ct({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Mf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ct({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Sc={isMounted:function(t){return(t=t._reactInternals)?Br(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=Ki(t),s=_i(i,r);s.payload=e,n!=null&&(s.callback=n),e=$i(t,s,r),e!==null&&(Bn(e,t,r,i),_l(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=Ki(t),s=_i(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=$i(t,s,r),e!==null&&(Bn(e,t,r,i),_l(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Kt(),i=Ki(t),r=_i(n,i);r.tag=2,e!=null&&(r.callback=e),e=$i(t,r,i),e!==null&&(Bn(e,t,i,n),_l(e,t,i))}};function Ap(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Jo(n,i)||!Jo(r,s):!0}function J0(t,e,n){var i=!1,r=tr,s=e.contextType;return typeof s=="object"&&s!==null?s=An(s):(r=nn(e)?br:jt.current,i=e.contextTypes,s=(i=i!=null)?ks(t,r):tr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Sc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Cp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Sc.enqueueReplaceState(e,e.state,null)}function Ef(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},jd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=An(s):(s=nn(e)?br:jt.current,r.context=ks(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Mf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Sc.enqueueReplaceState(r,r.state,null),Yl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Vs(t,e){try{var n="",i=e;do n+=lx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function lu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function wf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Uy=typeof WeakMap=="function"?WeakMap:Map;function ev(t,e,n){n=_i(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ql||(Ql=!0,Nf=i),wf(t,e)},n}function tv(t,e,n){n=_i(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){wf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){wf(t,e),typeof i!="function"&&(qi===null?qi=new Set([this]):qi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Rp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Uy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=qy.bind(null,t,e,n),e.then(t,t))}function bp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Pp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=_i(-1,1),e.tag=2,$i(n,e,1))),n.lanes|=1),t)}var Fy=wi.ReactCurrentOwner,en=!1;function qt(t,e,n,i){e.child=t===null?P0(e,null,n,i):zs(e,t.child,n,i)}function Lp(t,e,n,i,r){n=n.render;var s=e.ref;return Ls(e,r),i=Zd(t,e,n,i,s,r),n=Qd(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Mi(t,e,r)):(ot&&n&&Bd(e),e.flags|=1,qt(t,e,i,r),e.child)}function Dp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!lh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,nv(t,e,s,i,r)):(t=wl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Jo,n(o,i)&&t.ref===e.ref)return Mi(t,e,r)}return e.flags|=1,t=Zi(s,i),t.ref=e.ref,t.return=e,e.child=t}function nv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Jo(s,i)&&t.ref===e.ref)if(en=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(en=!0);else return e.lanes=t.lanes,Mi(t,e,r)}return Tf(t,e,n,i,r)}function iv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(Es,dn),dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,et(Es,dn),dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,et(Es,dn),dn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,et(Es,dn),dn|=i;return qt(t,e,r,n),e.child}function rv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Tf(t,e,n,i,r){var s=nn(n)?br:jt.current;return s=ks(e,s),Ls(e,r),n=Zd(t,e,n,i,s,r),i=Qd(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Mi(t,e,r)):(ot&&i&&Bd(e),e.flags|=1,qt(t,e,n,r),e.child)}function Ip(t,e,n,i,r){if(nn(n)){var s=!0;Vl(e)}else s=!1;if(Ls(e,r),e.stateNode===null)Sl(t,e),J0(e,n,i),Ef(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=An(c):(c=nn(n)?br:jt.current,c=ks(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Cp(e,o,i,c),Oi=!1;var h=e.memoizedState;o.state=h,Yl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||tn.current||Oi?(typeof u=="function"&&(Mf(e,n,u,i),l=e.memoizedState),(a=Oi||Ap(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,D0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:In(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=An(l):(l=nn(n)?br:jt.current,l=ks(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Cp(e,o,i,l),Oi=!1,h=e.memoizedState,o.state=h,Yl(e,i,o,r);var x=e.memoizedState;a!==d||h!==x||tn.current||Oi?(typeof p=="function"&&(Mf(e,n,p,i),x=e.memoizedState),(c=Oi||Ap(e,n,c,i,h,x,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Af(t,e,n,i,s,r)}function Af(t,e,n,i,r,s){rv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&_p(e,n,!1),Mi(t,e,s);i=e.stateNode,Fy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=zs(e,t.child,null,s),e.child=zs(e,null,a,s)):qt(t,e,a,s),e.memoizedState=i.state,r&&_p(e,n,!0),e.child}function sv(t){var e=t.stateNode;e.pendingContext?vp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&vp(t,e.context,!1),Yd(t,e.containerInfo)}function Np(t,e,n,i,r){return Bs(),Hd(r),e.flags|=256,qt(t,e,n,i),e.child}var Cf={dehydrated:null,treeContext:null,retryLane:0};function Rf(t){return{baseLanes:t,cachePool:null,transitions:null}}function ov(t,e,n){var i=e.pendingProps,r=at.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),et(at,r&1),t===null)return yf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=wc(o,i,0,null),t=Cr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Rf(n),e.memoizedState=Cf,t):th(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Oy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Zi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Zi(a,s):(s=Cr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Rf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Cf,i}return s=t.child,t=s.sibling,i=Zi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function th(t,e){return e=wc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Na(t,e,n,i){return i!==null&&Hd(i),zs(e,t.child,null,n),t=th(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Oy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=lu(Error(re(422))),Na(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=wc({mode:"visible",children:i.children},r,0,null),s=Cr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&zs(e,t.child,null,o),e.child.memoizedState=Rf(o),e.memoizedState=Cf,s);if(!(e.mode&1))return Na(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=lu(s,i,void 0),Na(t,e,o,i)}if(a=(o&t.childLanes)!==0,en||a){if(i=Nt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Si(t,r),Bn(i,t,r,-1))}return ah(),i=lu(Error(re(421))),Na(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ky.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,pn=Yi(r.nextSibling),mn=e,ot=!0,Un=null,t!==null&&(Sn[Mn++]=hi,Sn[Mn++]=pi,Sn[Mn++]=Pr,hi=t.id,pi=t.overflow,Pr=e),e=th(e,i.children),e.flags|=4096,e)}function Up(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Sf(t.return,e,n)}function cu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function av(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(qt(t,e,i.children,n),i=at.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Up(t,n,e);else if(t.tag===19)Up(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(et(at,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&$l(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),cu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&$l(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}cu(e,!0,n,null,s);break;case"together":cu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Sl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Dr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=Zi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Zi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ky(t,e,n){switch(e.tag){case 3:sv(e),Bs();break;case 5:I0(e);break;case 1:nn(e.type)&&Vl(e);break;case 4:Yd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;et(Xl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(et(at,at.current&1),e.flags|=128,null):n&e.child.childLanes?ov(t,e,n):(et(at,at.current&1),t=Mi(t,e,n),t!==null?t.sibling:null);et(at,at.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return av(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),et(at,at.current),i)break;return null;case 22:case 23:return e.lanes=0,iv(t,e,n)}return Mi(t,e,n)}var lv,bf,cv,uv;lv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bf=function(){};cv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Er(ei.current);var s=null;switch(n){case"input":r=Ku(t,r),i=Ku(t,i),s=[];break;case"select":r=ct({},r,{value:void 0}),i=ct({},i,{value:void 0}),s=[];break;case"textarea":r=Ju(t,r),i=Ju(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=zl)}tf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(jo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(jo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&nt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};uv=function(t,e,n,i){n!==i&&(e.flags|=4)};function go(t,e){if(!ot)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function By(t,e,n){var i=e.pendingProps;switch(zd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ht(e),null;case 1:return nn(e.type)&&Hl(),Ht(e),null;case 3:return i=e.stateNode,Hs(),rt(tn),rt(jt),qd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Da(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Un!==null&&(Of(Un),Un=null))),bf(t,e),Ht(e),null;case 5:$d(e);var r=Er(ra.current);if(n=e.type,t!==null&&e.stateNode!=null)cv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return Ht(e),null}if(t=Er(ei.current),Da(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[$n]=e,i[na]=s,t=(e.mode&1)!==0,n){case"dialog":nt("cancel",i),nt("close",i);break;case"iframe":case"object":case"embed":nt("load",i);break;case"video":case"audio":for(r=0;r<Po.length;r++)nt(Po[r],i);break;case"source":nt("error",i);break;case"img":case"image":case"link":nt("error",i),nt("load",i);break;case"details":nt("toggle",i);break;case"input":Wh(i,s),nt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},nt("invalid",i);break;case"textarea":jh(i,s),nt("invalid",i)}tf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&La(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&La(i.textContent,a,t),r=["children",""+a]):jo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&nt("scroll",i)}switch(n){case"input":Ea(i),Xh(i,s,!0);break;case"textarea":Ea(i),Yh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=zl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=kg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[$n]=e,t[na]=i,lv(t,e,!1,!1),e.stateNode=t;e:{switch(o=nf(n,i),n){case"dialog":nt("cancel",t),nt("close",t),r=i;break;case"iframe":case"object":case"embed":nt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Po.length;r++)nt(Po[r],t);r=i;break;case"source":nt("error",t),r=i;break;case"img":case"image":case"link":nt("error",t),nt("load",t),r=i;break;case"details":nt("toggle",t),r=i;break;case"input":Wh(t,i),r=Ku(t,i),nt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ct({},i,{value:void 0}),nt("invalid",t);break;case"textarea":jh(t,i),r=Ju(t,i),nt("invalid",t);break;default:r=i}tf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Hg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Bg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Yo(t,l):typeof l=="number"&&Yo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(jo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&nt("scroll",t):l!=null&&Td(t,s,l,o))}switch(n){case"input":Ea(t),Xh(t,i,!1);break;case"textarea":Ea(t),Yh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+er(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Cs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Cs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=zl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ht(e),null;case 6:if(t&&e.stateNode!=null)uv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=Er(ra.current),Er(ei.current),Da(e)){if(i=e.stateNode,n=e.memoizedProps,i[$n]=e,(s=i.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:La(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&La(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[$n]=e,e.stateNode=i}return Ht(e),null;case 13:if(rt(at),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ot&&pn!==null&&e.mode&1&&!(e.flags&128))R0(),Bs(),e.flags|=98560,s=!1;else if(s=Da(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[$n]=e}else Bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ht(e),s=!1}else Un!==null&&(Of(Un),Un=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||at.current&1?Rt===0&&(Rt=3):ah())),e.updateQueue!==null&&(e.flags|=4),Ht(e),null);case 4:return Hs(),bf(t,e),t===null&&ea(e.stateNode.containerInfo),Ht(e),null;case 10:return Wd(e.type._context),Ht(e),null;case 17:return nn(e.type)&&Hl(),Ht(e),null;case 19:if(rt(at),s=e.memoizedState,s===null)return Ht(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)go(s,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=$l(t),o!==null){for(e.flags|=128,go(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return et(at,at.current&1|2),e.child}t=t.sibling}s.tail!==null&&vt()>Gs&&(e.flags|=128,i=!0,go(s,!1),e.lanes=4194304)}else{if(!i)if(t=$l(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),go(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ot)return Ht(e),null}else 2*vt()-s.renderingStartTime>Gs&&n!==1073741824&&(e.flags|=128,i=!0,go(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=vt(),e.sibling=null,n=at.current,et(at,i?n&1|2:n&1),e):(Ht(e),null);case 22:case 23:return oh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?dn&1073741824&&(Ht(e),e.subtreeFlags&6&&(e.flags|=8192)):Ht(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function zy(t,e){switch(zd(e),e.tag){case 1:return nn(e.type)&&Hl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Hs(),rt(tn),rt(jt),qd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $d(e),null;case 13:if(rt(at),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));Bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return rt(at),null;case 4:return Hs(),null;case 10:return Wd(e.type._context),null;case 22:case 23:return oh(),null;case 24:return null;default:return null}}var Ua=!1,Wt=!1,Hy=typeof WeakSet=="function"?WeakSet:Set,me=null;function Ms(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){pt(t,e,i)}else n.current=null}function Pf(t,e,n){try{n()}catch(i){pt(t,e,i)}}var Fp=!1;function Vy(t,e){if(hf=Ol,t=m0(),kd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(pf={focusedElem:t,selectionRange:n},Ol=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,m=x.memoizedState,f=e.stateNode,g=f.getSnapshotBeforeUpdate(e.elementType===e.type?v:In(e.type,v),m);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(S){pt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return x=Fp,Fp=!1,x}function zo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Pf(e,n,s)}r=r.next}while(r!==i)}}function Mc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Lf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function fv(t){var e=t.alternate;e!==null&&(t.alternate=null,fv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$n],delete e[na],delete e[vf],delete e[wy],delete e[Ty])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function dv(t){return t.tag===5||t.tag===3||t.tag===4}function Op(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||dv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Df(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=zl));else if(i!==4&&(t=t.child,t!==null))for(Df(t,e,n),t=t.sibling;t!==null;)Df(t,e,n),t=t.sibling}function If(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(If(t,e,n),t=t.sibling;t!==null;)If(t,e,n),t=t.sibling}var Ot=null,Nn=!1;function bi(t,e,n){for(n=n.child;n!==null;)hv(t,e,n),n=n.sibling}function hv(t,e,n){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount(pc,n)}catch{}switch(n.tag){case 5:Wt||Ms(n,e);case 6:var i=Ot,r=Nn;Ot=null,bi(t,e,n),Ot=i,Nn=r,Ot!==null&&(Nn?(t=Ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ot.removeChild(n.stateNode));break;case 18:Ot!==null&&(Nn?(t=Ot,n=n.stateNode,t.nodeType===8?nu(t.parentNode,n):t.nodeType===1&&nu(t,n),Zo(t)):nu(Ot,n.stateNode));break;case 4:i=Ot,r=Nn,Ot=n.stateNode.containerInfo,Nn=!0,bi(t,e,n),Ot=i,Nn=r;break;case 0:case 11:case 14:case 15:if(!Wt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Pf(n,e,o),r=r.next}while(r!==i)}bi(t,e,n);break;case 1:if(!Wt&&(Ms(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){pt(n,e,a)}bi(t,e,n);break;case 21:bi(t,e,n);break;case 22:n.mode&1?(Wt=(i=Wt)||n.memoizedState!==null,bi(t,e,n),Wt=i):bi(t,e,n);break;default:bi(t,e,n)}}function kp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Hy),e.forEach(function(i){var r=Zy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function bn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ot=a.stateNode,Nn=!1;break e;case 3:Ot=a.stateNode.containerInfo,Nn=!0;break e;case 4:Ot=a.stateNode.containerInfo,Nn=!0;break e}a=a.return}if(Ot===null)throw Error(re(160));hv(s,o,r),Ot=null,Nn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){pt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)pv(e,t),e=e.sibling}function pv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(bn(e,t),Vn(t),i&4){try{zo(3,t,t.return),Mc(3,t)}catch(v){pt(t,t.return,v)}try{zo(5,t,t.return)}catch(v){pt(t,t.return,v)}}break;case 1:bn(e,t),Vn(t),i&512&&n!==null&&Ms(n,n.return);break;case 5:if(bn(e,t),Vn(t),i&512&&n!==null&&Ms(n,n.return),t.flags&32){var r=t.stateNode;try{Yo(r,"")}catch(v){pt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Fg(r,s),nf(a,o);var c=nf(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?Hg(r,d):u==="dangerouslySetInnerHTML"?Bg(r,d):u==="children"?Yo(r,d):Td(r,u,d,c)}switch(a){case"input":Zu(r,s);break;case"textarea":Og(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Cs(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Cs(r,!!s.multiple,s.defaultValue,!0):Cs(r,!!s.multiple,s.multiple?[]:"",!1))}r[na]=s}catch(v){pt(t,t.return,v)}}break;case 6:if(bn(e,t),Vn(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){pt(t,t.return,v)}}break;case 3:if(bn(e,t),Vn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Zo(e.containerInfo)}catch(v){pt(t,t.return,v)}break;case 4:bn(e,t),Vn(t);break;case 13:bn(e,t),Vn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(rh=vt())),i&4&&kp(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Wt=(c=Wt)||u,bn(e,t),Wt=c):bn(e,t),Vn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(me=t,u=t.child;u!==null;){for(d=me=u;me!==null;){switch(h=me,p=h.child,h.tag){case 0:case 11:case 14:case 15:zo(4,h,h.return);break;case 1:Ms(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(v){pt(i,n,v)}}break;case 5:Ms(h,h.return);break;case 22:if(h.memoizedState!==null){zp(d);continue}}p!==null?(p.return=h,me=p):zp(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=zg("display",o))}catch(v){pt(t,t.return,v)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(v){pt(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:bn(e,t),Vn(t),i&4&&kp(t);break;case 21:break;default:bn(e,t),Vn(t)}}function Vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(dv(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Yo(r,""),i.flags&=-33);var s=Op(t);If(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Op(t);Df(t,a,o);break;default:throw Error(re(161))}}catch(l){pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Gy(t,e,n){me=t,mv(t)}function mv(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ua;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Wt;a=Ua;var c=Wt;if(Ua=o,(Wt=l)&&!c)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?Hp(r):l!==null?(l.return=o,me=l):Hp(r);for(;s!==null;)me=s,mv(s),s=s.sibling;me=r,Ua=a,Wt=c}Bp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):Bp(t)}}function Bp(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Wt||Mc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Wt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:In(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ep(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ep(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Zo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Wt||e.flags&512&&Lf(e)}catch(h){pt(e,e.return,h)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function zp(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function Hp(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Mc(4,e)}catch(l){pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){pt(e,r,l)}}var s=e.return;try{Lf(e)}catch(l){pt(e,s,l)}break;case 5:var o=e.return;try{Lf(e)}catch(l){pt(e,o,l)}}}catch(l){pt(e,e.return,l)}if(e===t){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var Wy=Math.ceil,Zl=wi.ReactCurrentDispatcher,nh=wi.ReactCurrentOwner,Tn=wi.ReactCurrentBatchConfig,je=0,Nt=null,St=null,kt=0,dn=0,Es=or(0),Rt=0,la=null,Dr=0,Ec=0,ih=0,Ho=null,Jt=null,rh=0,Gs=1/0,ui=null,Ql=!1,Nf=null,qi=null,Fa=!1,Gi=null,Jl=0,Vo=0,Uf=null,Ml=-1,El=0;function Kt(){return je&6?vt():Ml!==-1?Ml:Ml=vt()}function Ki(t){return t.mode&1?je&2&&kt!==0?kt&-kt:Cy.transition!==null?(El===0&&(El=Jg()),El):(t=Je,t!==0||(t=window.event,t=t===void 0?16:o0(t.type)),t):1}function Bn(t,e,n,i){if(50<Vo)throw Vo=0,Uf=null,Error(re(185));ha(t,n,i),(!(je&2)||t!==Nt)&&(t===Nt&&(!(je&2)&&(Ec|=n),Rt===4&&zi(t,kt)),rn(t,i),n===1&&je===0&&!(e.mode&1)&&(Gs=vt()+500,xc&&ar()))}function rn(t,e){var n=t.callbackNode;Cx(t,e);var i=Fl(t,t===Nt?kt:0);if(i===0)n!==null&&Kh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Kh(n),e===1)t.tag===0?Ay(Vp.bind(null,t)):T0(Vp.bind(null,t)),My(function(){!(je&6)&&ar()}),n=null;else{switch(e0(i)){case 1:n=Pd;break;case 4:n=Zg;break;case 16:n=Ul;break;case 536870912:n=Qg;break;default:n=Ul}n=Ev(n,gv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function gv(t,e){if(Ml=-1,El=0,je&6)throw Error(re(327));var n=t.callbackNode;if(Ds()&&t.callbackNode!==n)return null;var i=Fl(t,t===Nt?kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ec(t,i);else{e=i;var r=je;je|=2;var s=_v();(Nt!==t||kt!==e)&&(ui=null,Gs=vt()+500,Ar(t,e));do try{Yy();break}catch(a){vv(t,a)}while(!0);Gd(),Zl.current=s,je=r,St!==null?e=0:(Nt=null,kt=0,e=Rt)}if(e!==0){if(e===2&&(r=lf(t),r!==0&&(i=r,e=Ff(t,r))),e===1)throw n=la,Ar(t,0),zi(t,i),rn(t,vt()),n;if(e===6)zi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Xy(r)&&(e=ec(t,i),e===2&&(s=lf(t),s!==0&&(i=s,e=Ff(t,s))),e===1))throw n=la,Ar(t,0),zi(t,i),rn(t,vt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:vr(t,Jt,ui);break;case 3:if(zi(t,i),(i&130023424)===i&&(e=rh+500-vt(),10<e)){if(Fl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Kt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=gf(vr.bind(null,t,Jt,ui),e);break}vr(t,Jt,ui);break;case 4:if(zi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-kn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Wy(i/1960))-i,10<i){t.timeoutHandle=gf(vr.bind(null,t,Jt,ui),i);break}vr(t,Jt,ui);break;case 5:vr(t,Jt,ui);break;default:throw Error(re(329))}}}return rn(t,vt()),t.callbackNode===n?gv.bind(null,t):null}function Ff(t,e){var n=Ho;return t.current.memoizedState.isDehydrated&&(Ar(t,e).flags|=256),t=ec(t,e),t!==2&&(e=Jt,Jt=n,e!==null&&Of(e)),t}function Of(t){Jt===null?Jt=t:Jt.push.apply(Jt,t)}function Xy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Hn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zi(t,e){for(e&=~ih,e&=~Ec,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-kn(e),i=1<<n;t[n]=-1,e&=~i}}function Vp(t){if(je&6)throw Error(re(327));Ds();var e=Fl(t,0);if(!(e&1))return rn(t,vt()),null;var n=ec(t,e);if(t.tag!==0&&n===2){var i=lf(t);i!==0&&(e=i,n=Ff(t,i))}if(n===1)throw n=la,Ar(t,0),zi(t,e),rn(t,vt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vr(t,Jt,ui),rn(t,vt()),null}function sh(t,e){var n=je;je|=1;try{return t(e)}finally{je=n,je===0&&(Gs=vt()+500,xc&&ar())}}function Ir(t){Gi!==null&&Gi.tag===0&&!(je&6)&&Ds();var e=je;je|=1;var n=Tn.transition,i=Je;try{if(Tn.transition=null,Je=1,t)return t()}finally{Je=i,Tn.transition=n,je=e,!(je&6)&&ar()}}function oh(){dn=Es.current,rt(Es)}function Ar(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Sy(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(zd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Hl();break;case 3:Hs(),rt(tn),rt(jt),qd();break;case 5:$d(i);break;case 4:Hs();break;case 13:rt(at);break;case 19:rt(at);break;case 10:Wd(i.type._context);break;case 22:case 23:oh()}n=n.return}if(Nt=t,St=t=Zi(t.current,null),kt=dn=e,Rt=0,la=null,ih=Ec=Dr=0,Jt=Ho=null,Mr!==null){for(e=0;e<Mr.length;e++)if(n=Mr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Mr=null}return t}function vv(t,e){do{var n=St;try{if(Gd(),xl.current=Kl,ql){for(var i=lt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ql=!1}if(Lr=0,It=wt=lt=null,Bo=!1,sa=0,nh.current=null,n===null||n.return===null){Rt=1,la=e,St=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=kt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=bp(o);if(p!==null){p.flags&=-257,Pp(p,o,a,s,e),p.mode&1&&Rp(s,c,e),e=p,l=c;var x=e.updateQueue;if(x===null){var v=new Set;v.add(l),e.updateQueue=v}else x.add(l);break e}else{if(!(e&1)){Rp(s,c,e),ah();break e}l=Error(re(426))}}else if(ot&&a.mode&1){var m=bp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Pp(m,o,a,s,e),Hd(Vs(l,a));break e}}s=l=Vs(l,a),Rt!==4&&(Rt=2),Ho===null?Ho=[s]:Ho.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=ev(s,l,e);Mp(s,f);break e;case 1:a=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(qi===null||!qi.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=tv(s,a,e);Mp(s,S);break e}}s=s.return}while(s!==null)}yv(n)}catch(R){e=R,St===n&&n!==null&&(St=n=n.return);continue}break}while(!0)}function _v(){var t=Zl.current;return Zl.current=Kl,t===null?Kl:t}function ah(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),Nt===null||!(Dr&268435455)&&!(Ec&268435455)||zi(Nt,kt)}function ec(t,e){var n=je;je|=2;var i=_v();(Nt!==t||kt!==e)&&(ui=null,Ar(t,e));do try{jy();break}catch(r){vv(t,r)}while(!0);if(Gd(),je=n,Zl.current=i,St!==null)throw Error(re(261));return Nt=null,kt=0,Rt}function jy(){for(;St!==null;)xv(St)}function Yy(){for(;St!==null&&!_x();)xv(St)}function xv(t){var e=Mv(t.alternate,t,dn);t.memoizedProps=t.pendingProps,e===null?yv(t):St=e,nh.current=null}function yv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=zy(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,St=null;return}}else if(n=By(n,e,dn),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);Rt===0&&(Rt=5)}function vr(t,e,n){var i=Je,r=Tn.transition;try{Tn.transition=null,Je=1,$y(t,e,n,i)}finally{Tn.transition=r,Je=i}return null}function $y(t,e,n,i){do Ds();while(Gi!==null);if(je&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Rx(t,s),t===Nt&&(St=Nt=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fa||(Fa=!0,Ev(Ul,function(){return Ds(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Tn.transition,Tn.transition=null;var o=Je;Je=1;var a=je;je|=4,nh.current=null,Vy(t,n),pv(n,t),py(pf),Ol=!!hf,pf=hf=null,t.current=n,Gy(n),xx(),je=a,Je=o,Tn.transition=s}else t.current=n;if(Fa&&(Fa=!1,Gi=t,Jl=r),s=t.pendingLanes,s===0&&(qi=null),Mx(n.stateNode),rn(t,vt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ql)throw Ql=!1,t=Nf,Nf=null,t;return Jl&1&&t.tag!==0&&Ds(),s=t.pendingLanes,s&1?t===Uf?Vo++:(Vo=0,Uf=t):Vo=0,ar(),null}function Ds(){if(Gi!==null){var t=e0(Jl),e=Tn.transition,n=Je;try{if(Tn.transition=null,Je=16>t?16:t,Gi===null)var i=!1;else{if(t=Gi,Gi=null,Jl=0,je&6)throw Error(re(331));var r=je;for(je|=4,me=t.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(me=c;me!==null;){var u=me;switch(u.tag){case 0:case 11:case 15:zo(8,u,s)}var d=u.child;if(d!==null)d.return=u,me=d;else for(;me!==null;){u=me;var h=u.sibling,p=u.return;if(fv(u),u===c){me=null;break}if(h!==null){h.return=p,me=h;break}me=p}}}var x=s.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:zo(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,me=f;break e}me=s.return}}var g=t.current;for(me=g;me!==null;){o=me;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,me=_;else e:for(o=g;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Mc(9,a)}}catch(R){pt(a,a.return,R)}if(a===o){me=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,me=S;break e}me=a.return}}if(je=r,ar(),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot(pc,t)}catch{}i=!0}return i}finally{Je=n,Tn.transition=e}}return!1}function Gp(t,e,n){e=Vs(n,e),e=ev(t,e,1),t=$i(t,e,1),e=Kt(),t!==null&&(ha(t,1,e),rn(t,e))}function pt(t,e,n){if(t.tag===3)Gp(t,t,n);else for(;e!==null;){if(e.tag===3){Gp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(qi===null||!qi.has(i))){t=Vs(n,t),t=tv(e,t,1),e=$i(e,t,1),t=Kt(),e!==null&&(ha(e,1,t),rn(e,t));break}}e=e.return}}function qy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Kt(),t.pingedLanes|=t.suspendedLanes&n,Nt===t&&(kt&n)===n&&(Rt===4||Rt===3&&(kt&130023424)===kt&&500>vt()-rh?Ar(t,0):ih|=n),rn(t,e)}function Sv(t,e){e===0&&(t.mode&1?(e=Aa,Aa<<=1,!(Aa&130023424)&&(Aa=4194304)):e=1);var n=Kt();t=Si(t,e),t!==null&&(ha(t,e,n),rn(t,n))}function Ky(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Sv(t,n)}function Zy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),Sv(t,n)}var Mv;Mv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tn.current)en=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return en=!1,ky(t,e,n);en=!!(t.flags&131072)}else en=!1,ot&&e.flags&1048576&&A0(e,Wl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Sl(t,e),t=e.pendingProps;var r=ks(e,jt.current);Ls(e,n),r=Zd(null,e,i,t,r,n);var s=Qd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nn(i)?(s=!0,Vl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,jd(e),r.updater=Sc,e.stateNode=r,r._reactInternals=e,Ef(e,i,t,n),e=Af(null,e,i,!0,s,n)):(e.tag=0,ot&&s&&Bd(e),qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Sl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Jy(i),t=In(i,t),r){case 0:e=Tf(null,e,i,t,n);break e;case 1:e=Ip(null,e,i,t,n);break e;case 11:e=Lp(null,e,i,t,n);break e;case 14:e=Dp(null,e,i,In(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),Tf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),Ip(t,e,i,r,n);case 3:e:{if(sv(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,D0(t,e),Yl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Vs(Error(re(423)),e),e=Np(t,e,i,n,r);break e}else if(i!==r){r=Vs(Error(re(424)),e),e=Np(t,e,i,n,r);break e}else for(pn=Yi(e.stateNode.containerInfo.firstChild),mn=e,ot=!0,Un=null,n=P0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bs(),i===r){e=Mi(t,e,n);break e}qt(t,e,i,n)}e=e.child}return e;case 5:return I0(e),t===null&&yf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,mf(i,r)?o=null:s!==null&&mf(i,s)&&(e.flags|=32),rv(t,e),qt(t,e,o,n),e.child;case 6:return t===null&&yf(e),null;case 13:return ov(t,e,n);case 4:return Yd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=zs(e,null,i,n):qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),Lp(t,e,i,r,n);case 7:return qt(t,e,e.pendingProps,n),e.child;case 8:return qt(t,e,e.pendingProps.children,n),e.child;case 12:return qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,et(Xl,i._currentValue),i._currentValue=o,s!==null)if(Hn(s.value,o)){if(s.children===r.children&&!tn.current){e=Mi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=_i(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Sf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Sf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ls(e,n),r=An(r),i=i(r),e.flags|=1,qt(t,e,i,n),e.child;case 14:return i=e.type,r=In(i,e.pendingProps),r=In(i.type,r),Dp(t,e,i,r,n);case 15:return nv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),Sl(t,e),e.tag=1,nn(i)?(t=!0,Vl(e)):t=!1,Ls(e,n),J0(e,i,r),Ef(e,i,r,n),Af(null,e,i,!0,t,n);case 19:return av(t,e,n);case 22:return iv(t,e,n)}throw Error(re(156,e.tag))};function Ev(t,e){return Kg(t,e)}function Qy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(t,e,n,i){return new Qy(t,e,n,i)}function lh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Jy(t){if(typeof t=="function")return lh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Cd)return 11;if(t===Rd)return 14}return 2}function Zi(t,e){var n=t.alternate;return n===null?(n=En(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function wl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")lh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case hs:return Cr(n.children,r,s,e);case Ad:o=8,r|=8;break;case ju:return t=En(12,n,e,r|2),t.elementType=ju,t.lanes=s,t;case Yu:return t=En(13,n,e,r),t.elementType=Yu,t.lanes=s,t;case $u:return t=En(19,n,e,r),t.elementType=$u,t.lanes=s,t;case Ig:return wc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Lg:o=10;break e;case Dg:o=9;break e;case Cd:o=11;break e;case Rd:o=14;break e;case Fi:o=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=En(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Cr(t,e,n,i){return t=En(7,t,i,e),t.lanes=n,t}function wc(t,e,n,i){return t=En(22,t,i,e),t.elementType=Ig,t.lanes=n,t.stateNode={isHidden:!1},t}function uu(t,e,n){return t=En(6,t,null,e),t.lanes=n,t}function fu(t,e,n){return e=En(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function eS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xc(0),this.expirationTimes=Xc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ch(t,e,n,i,r,s,o,a,l){return t=new eS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=En(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jd(s),t}function tS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ds,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function wv(t){if(!t)return tr;t=t._reactInternals;e:{if(Br(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(nn(n))return w0(t,n,e)}return e}function Tv(t,e,n,i,r,s,o,a,l){return t=ch(n,i,!0,t,r,s,o,a,l),t.context=wv(null),n=t.current,i=Kt(),r=Ki(n),s=_i(i,r),s.callback=e??null,$i(n,s,r),t.current.lanes=r,ha(t,r,i),rn(t,i),t}function Tc(t,e,n,i){var r=e.current,s=Kt(),o=Ki(r);return n=wv(n),e.context===null?e.context=n:e.pendingContext=n,e=_i(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=$i(r,e,o),t!==null&&(Bn(t,r,o,s),_l(t,r,o)),o}function tc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Wp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function uh(t,e){Wp(t,e),(t=t.alternate)&&Wp(t,e)}function nS(){return null}var Av=typeof reportError=="function"?reportError:function(t){console.error(t)};function fh(t){this._internalRoot=t}Ac.prototype.render=fh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));Tc(t,e,null,null)};Ac.prototype.unmount=fh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ir(function(){Tc(null,t,null,null)}),e[yi]=null}};function Ac(t){this._internalRoot=t}Ac.prototype.unstable_scheduleHydration=function(t){if(t){var e=i0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Bi.length&&e!==0&&e<Bi[n].priority;n++);Bi.splice(n,0,t),n===0&&s0(t)}};function dh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Cc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Xp(){}function iS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=tc(o);s.call(c)}}var o=Tv(e,i,t,0,null,!1,!1,"",Xp);return t._reactRootContainer=o,t[yi]=o.current,ea(t.nodeType===8?t.parentNode:t),Ir(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=tc(l);a.call(c)}}var l=ch(t,0,!1,null,null,!1,!1,"",Xp);return t._reactRootContainer=l,t[yi]=l.current,ea(t.nodeType===8?t.parentNode:t),Ir(function(){Tc(e,l,n,i)}),l}function Rc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=tc(o);a.call(l)}}Tc(e,o,t,r)}else o=iS(n,e,t,r,i);return tc(o)}t0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=bo(e.pendingLanes);n!==0&&(Ld(e,n|1),rn(e,vt()),!(je&6)&&(Gs=vt()+500,ar()))}break;case 13:Ir(function(){var i=Si(t,1);if(i!==null){var r=Kt();Bn(i,t,1,r)}}),uh(t,1)}};Dd=function(t){if(t.tag===13){var e=Si(t,134217728);if(e!==null){var n=Kt();Bn(e,t,134217728,n)}uh(t,134217728)}};n0=function(t){if(t.tag===13){var e=Ki(t),n=Si(t,e);if(n!==null){var i=Kt();Bn(n,t,e,i)}uh(t,e)}};i0=function(){return Je};r0=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};sf=function(t,e,n){switch(e){case"input":if(Zu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=_c(i);if(!r)throw Error(re(90));Ug(i),Zu(i,r)}}}break;case"textarea":Og(t,n);break;case"select":e=n.value,e!=null&&Cs(t,!!n.multiple,e,!1)}};Wg=sh;Xg=Ir;var rS={usingClientEntryPoint:!1,Events:[ma,vs,_c,Vg,Gg,sh]},vo={findFiberByHostInstance:Sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sS={bundleType:vo.bundleType,version:vo.version,rendererPackageName:vo.rendererPackageName,rendererConfig:vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=$g(t),t===null?null:t.stateNode},findFiberByHostInstance:vo.findFiberByHostInstance||nS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oa.isDisabled&&Oa.supportsFiber)try{pc=Oa.inject(sS),Jn=Oa}catch{}}vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rS;vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dh(e))throw Error(re(200));return tS(t,e,null,n)};vn.createRoot=function(t,e){if(!dh(t))throw Error(re(299));var n=!1,i="",r=Av;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ch(t,1,!1,null,null,n,!1,i,r),t[yi]=e.current,ea(t.nodeType===8?t.parentNode:t),new fh(e)};vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=$g(e),t=t===null?null:t.stateNode,t};vn.flushSync=function(t){return Ir(t)};vn.hydrate=function(t,e,n){if(!Cc(e))throw Error(re(200));return Rc(null,t,e,!0,n)};vn.hydrateRoot=function(t,e,n){if(!dh(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Av;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Tv(e,null,t,1,n??null,r,!1,s,o),t[yi]=e.current,ea(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ac(e)};vn.render=function(t,e,n){if(!Cc(e))throw Error(re(200));return Rc(null,t,e,!1,n)};vn.unmountComponentAtNode=function(t){if(!Cc(t))throw Error(re(40));return t._reactRootContainer?(Ir(function(){Rc(null,null,t,!1,function(){t._reactRootContainer=null,t[yi]=null})}),!0):!1};vn.unstable_batchedUpdates=sh;vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Cc(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return Rc(t,e,n,!1,i)};vn.version="18.3.1-next-f1338f8080-20240426";function Cv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cv)}catch(t){console.error(t)}}Cv(),Cg.exports=vn;var oS=Cg.exports,jp=oS;Wu.createRoot=jp.createRoot,Wu.hydrateRoot=jp.hydrateRoot;function Yp(t,e,n){return t+(e-t)*n}function Wr(t,e,n){return[Yp(t[0],e[0],n),Yp(t[1],e[1],n)]}function aS(t,e){const[n,i]=t,[r,s]=e;return!(n[0]>s[0]||i[0]<r[0]||n[1]>s[1]||i[1]<r[1])}class lS{}class Rv extends lS{constructor(e=1e-10){super(),this.epsilon=e}snap0(e){return Math.abs(e)<this.epsilon?0:e}snap01(e){return Math.abs(e)<this.epsilon?0:Math.abs(1-e)<this.epsilon?1:e}isCollinear(e,n,i){const r=e[0]-n[0],s=e[1]-n[1],o=n[0]-i[0],a=n[1]-i[1];return Math.abs(r*a-o*s)<this.epsilon}solveCubicNormalized(e,n,i){const r=e/3,s=n/3,o=r*r-s,a=r*(r*r-n/2)+i/2;if(Math.abs(a)<this.epsilon&&Math.abs(o)<this.epsilon)return[-r];const l=r*(r*(4*r*i-s*n)-2*n*i)+4*s*s*s+i*i;if(Math.abs(l)<this.epsilon){const d=Math.sqrt(o);return a>0?[-2*d-e/3,d-e/3]:[-d-e/3,2*d-e/3]}const c=o*o*o,u=a*a;if(u<c){const d=(a<0?-1:1)*Math.sqrt(u/c),h=Math.acos(d),p=-2*Math.sqrt(o),x=p*Math.cos(h/3)-r,v=p*Math.cos((h+2*Math.PI)/3)-r,m=p*Math.cos((h-2*Math.PI)/3)-r;return[x,v,m].sort((f,g)=>f-g)}else{const d=(a<0?1:-1)*Math.pow(Math.abs(a)+Math.sqrt(u-c),.3333333333333333),h=Math.abs(d)>=this.epsilon?o/d:0;return[d+h-r]}}solveCubic(e,n,i,r){if(Math.abs(e)<this.epsilon){if(Math.abs(n)<this.epsilon)return Math.abs(i)<this.epsilon?Math.abs(r)<this.epsilon?[0]:[]:[-r/i];const s=2*n;let o=i*i-4*n*r;return Math.abs(o)<this.epsilon?[-i/s]:o>0?(o=Math.sqrt(o),[(-i+o)/s,(-i-o)/s].sort((a,l)=>a-l)):[]}return this.solveCubicNormalized(n/e,i/e,r/e)}isEqualVec2(e,n){return Math.abs(e[0]-n[0])<this.epsilon&&Math.abs(e[1]-n[1])<this.epsilon}compareVec2(e,n){return Math.abs(n[0]-e[0])<this.epsilon?Math.abs(n[1]-e[1])<this.epsilon?0:e[1]<n[1]?-1:1:e[0]<n[0]?-1:1}}class $p{constructor(e){this.tValues=[],this.geo=e}addArray(e){for(const n of e)this.tValues.push(n);return this}add(e){if(e=this.geo.snap01(e),e<0||e>1)return this;for(const n of this.tValues)if(this.geo.snap0(e-n)===0)return this;return this.tValues.push(e),this}list(){return this.tValues.sort((e,n)=>e-n),this.tValues}}class nc{constructor(e,n){this.tValuePairs=[],this.allowOutOfRange=e,this.geo=n}add(e,n){if(e=this.geo.snap01(e),n=this.geo.snap01(n),!this.allowOutOfRange&&(e<0||e>1||n<0||n>1))return this;for(const i of this.tValuePairs)if(this.geo.snap0(e-i[0])===0||this.geo.snap0(n-i[1])===0)return this;return this.tValuePairs.push([e,n]),this}list(){return this.tValuePairs.sort((e,n)=>e[0]-n[0]),this.tValuePairs}done(){return this.tValuePairs.length<=0?null:{kind:"tValuePairs",tValuePairs:this.list()}}}class bv{}class At extends bv{constructor(e,n,i){super(),this.p0=e,this.p1=n,this.geo=i}copy(){return new At(this.p0,this.p1,this.geo)}isEqual(e){return this.geo.isEqualVec2(this.p0,e.p0)&&this.geo.isEqualVec2(this.p1,e.p1)}start(){return this.p0}start2(){return this.p1}end2(){return this.p0}end(){return this.p1}setStart(e){this.p0=e}setEnd(e){this.p1=e}point(e){const n=this.p0,i=this.p1;return e===0?n:e===1?i:[n[0]+(i[0]-n[0])*e,n[1]+(i[1]-n[1])*e]}split(e){if(e.length<=0)return[this];const n=e.map(s=>this.point(s));n.push(this.p1);const i=[];let r=this.p0;for(const s of n)i.push(new At(r,s,this.geo)),r=s;return i}reverse(){return new At(this.p1,this.p0,this.geo)}boundingBox(){const e=this.p0,n=this.p1;return[[Math.min(e[0],n[0]),Math.min(e[1],n[1])],[Math.max(e[0],n[0]),Math.max(e[1],n[1])]]}pointOn(e){return this.geo.isCollinear(e,this.p0,this.p1)}draw(e){const n=this.p0,i=this.p1;return e.moveTo(n[0],n[1]),e.lineTo(i[0],i[1]),e}}class Tt extends bv{constructor(e,n,i,r,s){super(),this.p0=e,this.p1=n,this.p2=i,this.p3=r,this.geo=s}copy(){return new Tt(this.p0,this.p1,this.p2,this.p3,this.geo)}isEqual(e){return this.geo.isEqualVec2(this.p0,e.p0)&&this.geo.isEqualVec2(this.p1,e.p1)&&this.geo.isEqualVec2(this.p2,e.p2)&&this.geo.isEqualVec2(this.p3,e.p3)}start(){return this.p0}start2(){return this.p1}end2(){return this.p2}end(){return this.p3}setStart(e){this.p0=e}setEnd(e){this.p3=e}point(e){const n=this.p0,i=this.p1,r=this.p2,s=this.p3;if(e===0)return n;if(e===1)return s;const o=(1-e)*(1-e),a=e*e,l=o*(1-e),c=3*o*e,u=3*a*(1-e),d=a*e;return[n[0]*l+i[0]*c+r[0]*u+s[0]*d,n[1]*l+i[1]*c+r[1]*u+s[1]*d]}split(e){if(e.length<=0)return[this];const n=[],i=(o,a)=>{const[l,c,u,d]=o,h=Wr(l,c,a),p=Wr(c,u,a),x=Wr(u,d,a),v=Wr(h,p,a),m=Wr(p,x,a),f=Wr(v,m,a);return n.push(new Tt(l,h,v,f,this.geo)),[f,m,x,d]};let r=[this.p0,this.p1,this.p2,this.p3],s=0;for(const o of e)r=i(r,(o-s)/(1-s)),s=o;return n.push(new Tt(r[0],r[1],r[2],r[3],this.geo)),n}reverse(){return new Tt(this.p3,this.p2,this.p1,this.p0,this.geo)}getCubicCoefficients(e){const n=this.p0[e],i=this.p1[e],r=this.p2[e];return[this.p3[e]-3*r+3*i-n,3*r-6*i+3*n,3*i-3*n,n]}boundingTValues(){const e=new $p(this.geo),n=(a,l,c,u)=>{const d=3*u-9*c+9*l-3*a,h=6*a-12*l+6*c,p=3*l-3*a;if(this.geo.snap0(d)===0)e.add(-p/h);else{const x=h*h-4*d*p;if(x>=0){const v=Math.sqrt(x);e.add((-h+v)/(2*d)),e.add((-h-v)/(2*d))}}return e},i=this.p0,r=this.p1,s=this.p2,o=this.p3;return n(i[0],r[0],s[0],o[0]),n(i[1],r[1],s[1],o[1]),e.list()}inflectionTValues(){const e=new $p(this.geo);e.addArray(this.boundingTValues());const n=this.p0,i=this.p1,r=this.p2,s=this.p3,o=3*(i[0]-n[0]),a=3*(i[1]-n[1]),l=6*(r[0]-i[0]),c=6*(r[1]-i[1]),u=3*(s[0]-r[0]),d=3*(s[1]-r[1]),h=6*(r[0]-2*i[0]+n[0]),p=6*(r[1]-2*i[1]+n[1]),x=6*(s[0]-2*r[0]+i[0]),v=6*(s[1]-2*r[1]+i[1]),m=o-l+u,f=a-c+d,g=l-2*o,_=c-2*a,S=o,R=a,T=x-h,w=v-p,P=h,A=p,y=m*w-f*T,b=m*A+g*w-f*P-_*T,F=g*A+S*w-_*P-R*T,O=S*A-R*P;for(const Y of this.geo.solveCubic(y,b,F,O))e.add(Y);return e.list()}boundingBox(){const e=this.p0,n=this.p3,i=[Math.min(e[0],n[0]),Math.min(e[1],n[1])],r=[Math.max(e[0],n[0]),Math.max(e[1],n[1])];for(const s of this.boundingTValues()){const o=this.point(s);i[0]=Math.min(i[0],o[0]),i[1]=Math.min(i[1],o[1]),r[0]=Math.max(r[0],o[0]),r[1]=Math.max(r[1],o[1])}return[i,r]}mapXtoT(e,n=!1){if(this.geo.snap0(this.p0[0]-e)===0)return 0;if(this.geo.snap0(this.p3[0]-e)===0)return 1;const i=this.p0[0]-e,r=this.p1[0]-e,s=this.p2[0]-e,a=[this.p3[0]-e-3*s+3*r-i,3*s-6*r+3*i,3*r-3*i,i];for(const l of this.geo.solveCubic(a[0],a[1],a[2],a[3])){const c=this.geo.snap01(l);if(c>=0&&c<=1)return l}if(n||e>=Math.min(this.p0[0],this.p3[0])&&e<=Math.max(this.p0[0],this.p3[0]))for(let l=0;l<4;l++){let c=-1;for(let u=0;u<4;u++)a[u]!==0&&(c<0||Math.abs(a[u])<Math.abs(a[c]))&&(c=u);if(c<0)return 0;a[c]=0;for(const u of this.geo.solveCubic(a[0],a[1],a[2],a[3])){const d=this.geo.snap01(u);if(d>=0&&d<=1)return u}}return!1}mapXtoY(e,n=!1){const i=this.mapXtoT(e,n);return i===!1?!1:this.point(i)[1]}pointOn(e){if(this.geo.isEqualVec2(this.p0,e)||this.geo.isEqualVec2(this.p3,e))return!0;const n=this.mapXtoY(e[0]);return n===!1?!1:this.geo.snap0(n-e[1])===0}toLine(){const e=this.p0,n=this.p1,i=this.p2,r=this.p3;return this.geo.snap0(e[0]-n[0])===0&&this.geo.snap0(e[0]-i[0])===0&&this.geo.snap0(e[0]-r[0])===0||this.geo.snap0(e[1]-n[1])===0&&this.geo.snap0(e[1]-i[1])===0&&this.geo.snap0(e[1]-r[1])===0?new At(e,r,this.geo):null}draw(e){const n=this.p0,i=this.p1,r=this.p2,s=this.p3;return e.moveTo(n[0],n[1]),e.bezierCurveTo(i[0],i[1],r[0],r[1],s[0],s[1]),e}}function ka(t,e){const n=e.p1[0]-e.p0[0],i=e.p1[1]-e.p0[1],r=t[0]-e.p0[0],s=t[1]-e.p0[1],o=n*n+i*i;return(r*n+s*i)/o}function cS(t,e,n){const i=t.geo,r=t.p0,s=t.p1,o=e.p0,a=e.p1,l=s[0]-r[0],c=s[1]-r[1],u=a[0]-o[0],d=a[1]-o[1],h=l*d-c*u;if(i.snap0(h)===0){if(!i.isCollinear(r,s,o))return null;const v=ka(e.p0,t),m=ka(e.p1,t),f=i.snap01(Math.min(v,m)),g=i.snap01(Math.max(v,m));if(g<0||f>1)return null;const _=ka(t.p0,e),S=ka(t.p1,e),R=i.snap01(Math.min(_,S)),T=i.snap01(Math.max(_,S));return T<0||R>1?null:{kind:"tRangePairs",tStart:[Math.max(0,f),Math.max(0,R)],tEnd:[Math.min(1,g),Math.min(1,T)]}}const p=r[0]-o[0],x=r[1]-o[1];return new nc(n,i).add((u*x-d*p)/h,(l*x-c*p)/h).done()}function qp(t,e,n,i){const r=t.geo,s=t.p0,o=t.p1,a=o[1]-s[1],l=s[0]-o[0];if(r.snap0(l)===0){const g=e.mapXtoT(s[0],!1);if(g===!1)return null;const S=(e.point(g)[1]-s[1])/a,R=new nc(n,r);return i?R.add(g,S):R.add(S,g),R.done()}const c=a*s[0]+l*s[1],u=e.getCubicCoefficients(0),d=e.getCubicCoefficients(1),h=a*u[0]+l*d[0],p=a*u[1]+l*d[1],x=a*u[2]+l*d[2],v=a*u[3]+l*d[3]-c,m=r.solveCubic(h,p,x,v),f=new nc(n,r);if(r.snap0(a)===0)for(const g of m){const _=u[0]*g*g*g+u[1]*g*g+u[2]*g+u[3],S=(s[0]-_)/l;i?f.add(g,S):f.add(S,g)}else for(const g of m){const S=(d[0]*g*g*g+d[1]*g*g+d[2]*g+d[3]-s[1])/a;i?f.add(g,S):f.add(S,g)}return f.done()}function uS(t,e,n){const i=t.geo;if(i.isEqualVec2(t.p0,e.p0))return i.isEqualVec2(t.p3,e.p3)?i.isEqualVec2(t.p1,e.p1)&&i.isEqualVec2(t.p2,e.p2)?{kind:"tRangePairs",tStart:[0,0],tEnd:[1,1]}:{kind:"tValuePairs",tValuePairs:[[0,0],[1,1]]}:{kind:"tValuePairs",tValuePairs:[[0,0]]};if(i.isEqualVec2(t.p0,e.p3))return{kind:"tValuePairs",tValuePairs:[[0,1]]};if(i.isEqualVec2(t.p3,e.p0))return{kind:"tValuePairs",tValuePairs:[[1,0]]};if(i.isEqualVec2(t.p3,e.p3))return{kind:"tValuePairs",tValuePairs:[[1,1]]};const r=new nc(n,i),s=(o,a,l,c,u,d)=>{const h=o.boundingBox(),p=c.boundingBox();if(!aS(h,p))return;const x=(a+l)/2,v=(u+d)/2;if(i.snap0(l-a)===0&&i.snap0(d-u)===0){r.add(x,v);return}const[m,f]=o.split([.5]),[g,_]=c.split([.5]);s(m,a,x,g,u,v),s(f,x,l,g,u,v),s(m,a,x,_,v,d),s(f,x,l,_,v,d)};return s(t,0,1,e,0,1),r.done()}function Kp(t,e,n){if(t instanceof At){if(e instanceof At)return cS(t,e,n);if(e instanceof Tt)return qp(t,e,n,!1)}else if(t instanceof Tt){if(e instanceof At)return qp(e,t,n,!0);if(e instanceof Tt)return uS(t,e,n)}throw new Error("PolyBool: Unknown segment instance in segmentsIntersect")}class Pv{constructor(e,n=null,i=!1,r=null){var s,o,a;this.otherFill=null,this.id=(s=r==null?void 0:r.segmentId())!==null&&s!==void 0?s:-1,this.data=e,this.myFill={above:(o=n==null?void 0:n.above)!==null&&o!==void 0?o:null,below:(a=n==null?void 0:n.below)!==null&&a!==void 0?a:null},this.closed=i}}class Ws extends Pv{}class Xs extends Pv{}function Zp(t,e){if(t instanceof Ws)return new Ws(t.data,t.myFill,t.closed,e);if(t instanceof Xs)return new Xs(t.data,t.myFill,t.closed,e);throw new Error("PolyBool: Unknown SegmentBool in copySegmentBool")}class Qp{constructor(e,n,i,r){this.status=null,this.isStart=e,this.p=n,this.seg=i,this.primary=r}}class Jp{constructor(){this.nodes=[]}remove(e){const n=this.nodes.indexOf(e);n>=0&&this.nodes.splice(n,1)}getIndex(e){return this.nodes.indexOf(e)}isEmpty(){return this.nodes.length<=0}getHead(){return this.nodes[0]}removeHead(){this.nodes.shift()}insertBefore(e,n){this.findTransition(e,n).insert(e)}findTransition(e,n){var i,r;const s=(l,c)=>n(c)-n(l);let o=0,a=this.nodes.length;for(;o<a;){const l=o+a>>1;s(this.nodes[l],e)>0?a=l:o=l+1}return{before:o<=0?null:(i=this.nodes[o-1])!==null&&i!==void 0?i:null,after:(r=this.nodes[o])!==null&&r!==void 0?r:null,insert:l=>(this.nodes.splice(o,0,l),l)}}}class em{constructor(e,n,i=null){this.events=new Jp,this.status=new Jp,this.currentPath=[],this.selfIntersection=e,this.geo=n,this.log=i}compareEvents(e,n,i,r,s,o,a,l){const c=this.geo.compareVec2(n,o);return c!==0?c:r instanceof At&&l instanceof At&&this.geo.isEqualVec2(i,a)?0:e!==s?e?1:-1:this.compareSegments(l,r)}addEvent(e){this.events.insertBefore(e,n=>n===e?0:this.compareEvents(e.isStart,e.p,e.other.p,e.seg.data,n.isStart,n.p,n.other.p,n.seg.data))}divideEvent(e,n,i){var r,s;(r=this.log)===null||r===void 0||r.segmentDivide(e.seg,i);const[o,a]=e.seg.data.split([n]);o.setEnd(i),a.setStart(i);const l=a instanceof At?new Ws(a,e.seg.myFill,e.seg.closed,this.log):a instanceof Tt?new Xs(a,e.seg.myFill,e.seg.closed,this.log):null;if(!l)throw new Error("PolyBool: Unknown segment data in divideEvent");return this.events.remove(e.other),e.seg.data=o,(s=this.log)===null||s===void 0||s.segmentChop(e.seg),e.other.p=i,this.addEvent(e.other),this.addSegment(l,e.primary)}beginPath(){this.currentPath=[]}closePath(){for(const e of this.currentPath)e.closed=!0}addSegment(e,n){const i=new Qp(!0,e.data.start(),e,n),r=new Qp(!1,e.data.end(),e,n);return i.other=r,r.other=i,this.addEvent(i),this.addEvent(r),i}addLine(e,n,i=!0){const r=this.geo.compareVec2(e,n);if(r===0)return;const s=new Ws(new At(r<0?e:n,r<0?n:e,this.geo),null,!1,this.log);this.currentPath.push(s),this.addSegment(s,i)}addCurve(e,n,i,r,s=!0){const o=new Tt(e,n,i,r,this.geo),a=o.split(o.inflectionTValues());for(const l of a){const c=this.geo.compareVec2(l.start(),l.end());if(c===0)continue;const u=l.toLine();if(u)this.addLine(u.p0,u.p1,s);else{const d=new Xs(c<0?l:l.reverse(),null,!1,this.log);this.currentPath.push(d),this.addSegment(d,s)}}}compareSegments(e,n){let i=e.start(),r=n.start2();const s=n.start();if(n.pointOn(i)){if(i=e.start2(),n.pointOn(i)){if(e instanceof At){if(n instanceof At)return 0;n instanceof Tt&&(i=e.point(.5))}e instanceof Tt&&(i=e.end())}if(n instanceof Tt&&this.geo.snap0(i[0]-s[0])===0&&this.geo.snap0(r[0]-s[0])===0)return Math.sign(s[1]-i[1])}else{if(n instanceof Tt){const h=n.mapXtoY(i[0],!0);if(h!==!1)return Math.sign(h-i[1])}if(e instanceof Tt){const h=Kp(e,n,!0);if(h&&h.kind==="tValuePairs")for(const p of h.tValuePairs){const x=this.geo.snap01(p[0]);if(x>0&&x<1){r=e.point(x);break}}}}const[o,a]=i,[l,c]=r,[u,d]=s;return Math.sign((l-o)*(d-a)-(c-a)*(u-o))}statusFindSurrounding(e){return this.status.findTransition(e,n=>{if(e===n)return 0;const i=this.compareSegments(e.seg.data,n.seg.data);return i===0?-1:i})}checkIntersection(e,n){var i;const r=e.seg,s=n.seg;(i=this.log)===null||i===void 0||i.checkIntersection(r,s);const o=Kp(r.data,s.data,!1);if(o===null)return null;if(o.kind==="tRangePairs"){const{tStart:[a,l],tEnd:[c,u]}=o;if(a===1&&c===1&&l===0&&u===0||a===0&&c===0&&l===1&&u===1)return null;if(a===0&&c===1&&l===0&&u===1)return n;const d=r.data.start(),h=r.data.end(),p=s.data.end();return a===0&&l===0?(c===1?this.divideEvent(n,u,h):this.divideEvent(e,c,p),n):(l>0&&l<1&&(c===1&&u===1?this.divideEvent(n,l,d):(c===1?this.divideEvent(n,u,h):this.divideEvent(e,c,p),this.divideEvent(n,l,d))),null)}else if(o.kind==="tValuePairs"){if(o.tValuePairs.length<=0)return null;let a=o.tValuePairs[0];for(let d=1;d<o.tValuePairs.length&&(a[0]===0&&a[1]===0||a[0]===0&&a[1]===1||a[0]===1&&a[1]===0||a[0]===1&&a[1]===1);d++)a=o.tValuePairs[d];const[l,c]=a,u=c===0?s.data.start():c===1?s.data.end():l===0?r.data.start():l===1?r.data.end():r.data.point(l);return l>0&&l<1&&this.divideEvent(e,l,u),c>0&&c<1&&this.divideEvent(n,c,u),null}throw new Error("PolyBool: Unknown intersection type")}calculate(){var e,n,i,r,s,o,a,l;const c=[];for(;!this.events.isEmpty();){const u=this.events.getHead();if((e=this.log)===null||e===void 0||e.vert(u.p[0]),u.isStart){(n=this.log)===null||n===void 0||n.segmentNew(u.seg,u.primary);const d=this.statusFindSurrounding(u),h=d.before,p=d.after;(i=this.log)===null||i===void 0||i.tempStatus(u.seg,h?h.seg:!1,p?p.seg:!1);const v=(()=>{if(h){const m=this.checkIntersection(u,h);if(m)return m}return p?this.checkIntersection(u,p):null})();if(v){if(this.selfIntersection){let m;u.seg.myFill.below===null?m=u.seg.closed:m=u.seg.myFill.above!==u.seg.myFill.below,m&&(v.seg.myFill.above=!v.seg.myFill.above)}else v.seg.otherFill=u.seg.myFill;(r=this.log)===null||r===void 0||r.segmentUpdate(v.seg),this.events.remove(u.other),this.events.remove(u)}if(this.events.getHead()!==u){(s=this.log)===null||s===void 0||s.rewind(u.seg);continue}if(this.selfIntersection){let m;u.seg.myFill.below===null?m=u.seg.closed:m=u.seg.myFill.above!==u.seg.myFill.below,p?u.seg.myFill.below=p.seg.myFill.above:u.seg.myFill.below=!1,u.seg.myFill.above=m?!u.seg.myFill.below:u.seg.myFill.below}else if(u.seg.otherFill===null){let m;if(!p)m=!1;else if(u.primary===p.primary){if(p.seg.otherFill===null)throw new Error("PolyBool: Unexpected state of otherFill (null)");m=p.seg.otherFill.above}else m=p.seg.myFill.above;u.seg.otherFill={above:m,below:m}}(o=this.log)===null||o===void 0||o.status(u.seg,h?h.seg:!1,p?p.seg:!1),u.other.status=d.insert(u)}else{const d=u.status;if(d===null)throw new Error("PolyBool: Zero-length segment detected; your epsilon is probably too small or too large");const h=this.status.getIndex(d);if(h>0&&h<this.status.nodes.length-1){const p=this.status.nodes[h-1],x=this.status.nodes[h+1];this.checkIntersection(p,x)}if((a=this.log)===null||a===void 0||a.statusRemove(d.seg),this.status.remove(d),!u.primary){if(!u.seg.otherFill)throw new Error("PolyBool: Unexpected state of otherFill (null)");const p=u.seg.myFill;u.seg.myFill=u.seg.otherFill,u.seg.otherFill=p}c.push(u.seg)}this.events.removeHead()}return(l=this.log)===null||l===void 0||l.done(),c}}function _o(t,e,n){const i=[];for(const r of t){const s=(r.myFill.above?8:0)+(r.myFill.below?4:0)+(r.otherFill&&r.otherFill.above?2:0)+(r.otherFill&&r.otherFill.below?1:0),o=e[s],a=(o&1)!==0,l=(o&2)!==0;if(!r.closed&&o!==0||r.closed&&a!==l){const c={above:a,below:l};if(r instanceof Ws)i.push(new Ws(r.data,c,r.closed,n));else if(r instanceof Xs)i.push(new Xs(r.data,c,r.closed,n));else throw new Error("PolyBool: Unknown SegmentBool type in SegmentSelector")}}return n==null||n.selected(i),i}class xo{static union(e,n){return _o(e,[4,2,1,0,2,2,0,0,1,0,1,0,0,0,0,0],n)}static intersect(e,n){return _o(e,[0,0,0,4,0,2,0,2,0,0,1,1,4,2,1,0],n)}static difference(e,n){return _o(e,[4,0,0,0,2,0,2,0,1,1,0,0,0,1,2,0],n)}static differenceRev(e,n){return _o(e,[4,2,1,0,0,0,1,1,0,2,0,2,0,0,0,0],n)}static xor(e,n){return _o(e,[4,2,1,0,2,0,0,1,1,0,0,2,0,1,2,0],n)}}function fS(t,e,n){return n.isCollinear(t.p0,t.p1,e.p1)?new At(t.p0,e.p1,n):!1}function dS(t,e,n){if(n.isCollinear(t.p2,t.p3,e.p1)){const i=e.p1[0]-t.p2[0],r=e.p1[1]-t.p2[1],s=Math.abs(i)>Math.abs(r)?(t.p3[0]-t.p2[0])/i:(t.p3[1]-t.p2[1])/r,o=n.snap01(s);if(o!==0&&o!==1){const a=new Tt(t.p0,[t.p0[0]+(t.p1[0]-t.p0[0])/s,t.p0[1]+(t.p1[1]-t.p0[1])/s],[e.p2[0]-s*(e.p3[0]-e.p2[0])/(1-s),e.p2[1]-s*(e.p3[1]-e.p2[1])/(1-s)],e.p3,n),[l,c]=a.split([s]);if(l.isEqual(t)&&c.isEqual(e))return a}}return!1}function yo(t,e,n){return t===e?!1:t instanceof At&&e instanceof At?fS(t,e,n):t instanceof Tt&&e instanceof Tt?dS(t,e,n):!1}function hS(t,e,n){const i=[],r=[],s=[];for(const a of t){let f=function(g,_,S){return m&&(m.index=g,m.matchesHead=_,m.matchesPt1=S),m===x?(m=v,!1):(m=null,!0)};var o=f;let l=a.data;const c=a.closed,u=c?i:r,d=l.start(),h=l.end(),p=g=>{n==null||n.chainReverse(g,c);const _=[];for(const S of u[g].segs)_.unshift(S.reverse());return u[g]={segs:_,fill:!u[g].fill},_};if(l instanceof At&&e.isEqualVec2(d,h)){console.warn("PolyBool: Warning: Zero-length segment detected; your epsilon is probably too small or too large");continue}n==null||n.chainStart({seg:l,fill:!!a.myFill.above},c);const x={index:0,matchesHead:!1,matchesPt1:!1},v={index:0,matchesHead:!1,matchesPt1:!1};let m=x;for(let g=0;g<u.length;g++){const _=u[g].segs,S=_[0].start(),R=_[_.length-1].end();if(e.isEqualVec2(S,d)){if(f(g,!0,!0))break}else if(e.isEqualVec2(S,h)){if(f(g,!0,!1))break}else if(e.isEqualVec2(R,d)){if(f(g,!1,!0))break}else if(e.isEqualVec2(R,h)&&f(g,!1,!1))break}if(m===x){const g=!!a.myFill.above;u.push({segs:[l],fill:g}),n==null||n.chainNew({seg:l,fill:g},c)}else if(m===v){const g=x.index;n==null||n.chainMatch(g,c);const{segs:_,fill:S}=u[g];if(x.matchesHead?x.matchesPt1?(l=l.reverse(),n==null||n.chainAddHead(g,{seg:l,fill:S},c),_.unshift(l)):(n==null||n.chainAddHead(g,{seg:l,fill:S},c),_.unshift(l)):x.matchesPt1?(n==null||n.chainAddTail(g,{seg:l,fill:S},c),_.push(l)):(l=l.reverse(),n==null||n.chainAddTail(g,{seg:l,fill:S},c),_.push(l)),x.matchesHead){const R=_[1],T=yo(l,R,e);T&&(_.shift(),_[0]=T,n==null||n.chainSimplifyHead(g,{seg:T,fill:S},c))}else{const R=_[_.length-2],T=yo(R,l,e);T&&(_.pop(),_[_.length-1]=T,n==null||n.chainSimplifyTail(g,{seg:T,fill:S},c))}if(c){let R=_,T=R[0],w=R[R.length-1];if(R.length>0&&e.isEqualVec2(T.start(),w.end())){let P=0,A=R[0].start();for(const F of R){const O=F.end();P+=O[1]*A[0]-O[0]*A[1],A=O}P<0===S&&(R=p(g),T=R[0],w=R[R.length-1]);const b=yo(w,T,e);b&&(R.pop(),R[0]=b,n==null||n.chainSimplifyClose(g,{seg:b,fill:S},c)),n==null||n.chainClose(g,c),u.splice(g,1),s.push(R)}}}else{const g=(T,w)=>{const{segs:P,fill:A}=u[T],{segs:y}=u[w];n==null||n.chainAddTail(T,{seg:l,fill:A},c),P.push(l);const b=P[P.length-2],F=yo(b,l,e);F&&(P.pop(),P[P.length-1]=F,n==null||n.chainSimplifyTail(T,{seg:F,fill:A},c));const O=P[P.length-1],Y=y[0],$=yo(O,Y,e);$&&(y.shift(),P[P.length-1]=$,n==null||n.chainSimplifyJoin(T,w,{seg:$,fill:A},c)),n==null||n.chainJoin(T,w,c),u[T].segs=P.concat(y),u.splice(w,1)},_=x.index,S=v.index;n==null||n.chainConnect(_,S,c);const R=u[_].segs.length<u[S].segs.length;x.matchesHead?v.matchesHead?R?(x.matchesPt1||(l=l.reverse()),p(_),g(_,S)):(x.matchesPt1&&(l=l.reverse()),p(S),g(S,_)):(x.matchesPt1&&(l=l.reverse()),g(S,_)):v.matchesHead?(x.matchesPt1||(l=l.reverse()),g(_,S)):R?(x.matchesPt1&&(l=l.reverse()),p(_),g(S,_)):(x.matchesPt1||(l=l.reverse()),p(S),g(_,S))}}for(const{segs:a}of r)s.push(a);return s}function pS(t,e,n,i){const[r,s,o,a,l,c]=i;n.beginPath();for(const u of t){if(u.length<=0)continue;for(let p=0;p<u.length;p++){const x=u[p];if(p===0){const[v,m]=x.start();n.moveTo(r*v+o*m+l,s*v+a*m+c)}if(x instanceof At){const[v,m]=x.p1;n.lineTo(r*v+o*m+l,s*v+a*m+c)}else if(x instanceof Tt){const[v,m]=x.p1,[f,g]=x.p2,[_,S]=x.p3;n.bezierCurveTo(r*v+o*m+l,s*v+a*m+c,r*f+o*g+l,s*f+a*g+c,r*_+o*S+l,s*_+a*S+c)}else throw new Error("PolyBool: Unknown segment instance")}const d=u[0],h=u[u.length-1];e.isEqualVec2(d.start(),h.end())&&n.closePath()}return n}class us{constructor(e,n=null,i=null){this.pathState={kind:"beginPath"},this.saveStack=[],this.matrix=[1,0,0,1,0,0],this.geo=e,this.log=i,n?this.resultState={state:"seg",segments:n}:this.resultState={state:"new",selfIntersect:new em(!0,this.geo,this.log)}}setTransform(e,n,i,r,s,o){if(this.resultState.state!=="new")throw new Error("PolyBool: Cannot change shape after using it in an operation");return this.matrix=[e,n,i,r,s,o],this}resetTransform(){return this.matrix=[1,0,0,1,0,0],this}getTransform(){if(this.resultState.state!=="new")throw new Error("PolyBool: Cannot change shape after using it in an operation");const[e,n,i,r,s,o]=this.matrix;return{a:e,b:n,c:i,d:r,e:s,f:o}}transform(e,n,i,r,s,o){const[a,l,c,u,d,h]=this.matrix;return this.matrix=[a*e+c*n,l*e+u*n,a*i+c*r,l*i+u*r,a*s+c*o+d,l*s+u*o+h],this}rotate(e){const n=Math.cos(e),i=Math.sin(e),[r,s,o,a,l,c]=this.matrix;return this.matrix=[r*n+o*i,s*n+a*i,o*n-r*i,a*n-s*i,l,c],this}rotateDeg(e){const n=(e%360+360)%360;if(n===0)return this;let i=0,r=0;if(n===90)r=1;else if(n===180)i=-1;else if(n===270)r=-1;else if(n===45)i=r=Math.SQRT1_2;else if(n===135)r=Math.SQRT1_2,i=-Math.SQRT1_2;else if(n===225)i=r=-Math.SQRT1_2;else if(n===315)i=Math.SQRT1_2,r=-Math.SQRT1_2;else if(n===30)i=Math.sqrt(3)/2,r=.5;else if(n===60)i=.5,r=Math.sqrt(3)/2;else if(n===120)i=-.5,r=Math.sqrt(3)/2;else if(n===150)i=-Math.sqrt(3)/2,r=.5;else if(n===210)i=-Math.sqrt(3)/2,r=-.5;else if(n===240)i=-.5,r=-Math.sqrt(3)/2;else if(n===300)i=.5,r=-Math.sqrt(3)/2;else if(n===330)i=Math.sqrt(3)/2,r=-.5;else{const d=Math.PI*n/180;i=Math.cos(d),r=Math.sin(d)}const[s,o,a,l,c,u]=this.matrix;return this.matrix=[s*i+a*r,o*i+l*r,a*i-s*r,l*i-o*r,c,u],this}scale(e,n){const[i,r,s,o,a,l]=this.matrix;return this.matrix=[i*e,r*e,s*n,o*n,a,l],this}translate(e,n){const[i,r,s,o,a,l]=this.matrix;return this.matrix=[i,r,s,o,i*e+s*n+a,r*e+o*n+l],this}save(){if(this.resultState.state!=="new")throw new Error("PolyBool: Cannot change shape after using it in an operation");return this.saveStack.push({matrix:this.matrix}),this}restore(){if(this.resultState.state!=="new")throw new Error("PolyBool: Cannot change shape after using it in an operation");const e=this.saveStack.pop();return e&&(this.matrix=e.matrix),this}transformPoint(e,n){const[i,r,s,o,a,l]=this.matrix;return[i*e+s*n+a,r*e+o*n+l]}beginPath(){if(this.resultState.state!=="new")throw new Error("PolyBool: Cannot change shape after using it in an operation");return this.resultState.selfIntersect.beginPath(),this.endPath()}moveTo(e,n){if(this.resultState.state!=="new")throw new Error("PolyBool: Cannot change shape after using it in an operation");this.pathState.kind!=="beginPath"&&this.beginPath();const i=this.transformPoint(e,n);return this.pathState={kind:"moveTo",start:i,current:i},this}lineTo(e,n){if(this.resultState.state!=="new")throw new Error("PolyBool: Cannot change shape after using it in an operation");if(this.pathState.kind!=="moveTo")throw new Error("PolyBool: Must call moveTo prior to calling lineTo");const i=this.transformPoint(e,n);return this.resultState.selfIntersect.addLine(this.pathState.current,i),this.pathState.current=i,this}rect(e,n,i,r){return this.moveTo(e,n).lineTo(e+i,n).lineTo(e+i,n+r).lineTo(e,n+r).closePath().moveTo(e,n)}bezierCurveTo(e,n,i,r,s,o){if(this.resultState.state!=="new")throw new Error("PolyBool: Cannot change shape after using it in an operation");if(this.pathState.kind!=="moveTo")throw new Error("PolyBool: Must call moveTo prior to calling bezierCurveTo");const a=this.transformPoint(s,o);return this.resultState.selfIntersect.addCurve(this.pathState.current,this.transformPoint(e,n),this.transformPoint(i,r),a),this.pathState.current=a,this}closePath(){if(this.resultState.state!=="new")throw new Error("PolyBool: Cannot change shape after using it in an operation");return this.pathState.kind==="moveTo"&&!this.geo.isEqualVec2(this.pathState.start,this.pathState.current)&&(this.resultState.selfIntersect.addLine(this.pathState.current,this.pathState.start),this.pathState.current=this.pathState.start),this.resultState.selfIntersect.closePath(),this.endPath()}endPath(){if(this.resultState.state!=="new")throw new Error("PolyBool: Cannot change shape after using it in an operation");return this.pathState={kind:"beginPath"},this}selfIntersect(){return this.resultState.state==="new"&&(this.resultState={state:"seg",segments:this.resultState.selfIntersect.calculate()}),this.resultState.segments}segments(){if(this.resultState.state!=="reg"){const e=this.selfIntersect();this.resultState={state:"reg",segments:e,regions:hS(e,this.geo,this.log)}}return this.resultState.regions}output(e,n=[1,0,0,1,0,0]){return pS(this.segments(),this.geo,e,n)}combine(e){const n=new em(!1,this.geo,this.log);for(const i of this.selfIntersect())n.addSegment(Zp(i,this.log),!0);for(const i of e.selfIntersect())n.addSegment(Zp(i,this.log),!1);return new mS(n.calculate(),this.geo,this.log)}}class mS{constructor(e,n,i=null){this.geo=n,this.segments=e,this.log=i}union(){return new us(this.geo,xo.union(this.segments,this.log),this.log)}intersect(){return new us(this.geo,xo.intersect(this.segments,this.log),this.log)}difference(){return new us(this.geo,xo.difference(this.segments,this.log),this.log)}differenceRev(){return new us(this.geo,xo.differenceRev(this.segments,this.log),this.log)}xor(){return new us(this.geo,xo.xor(this.segments,this.log),this.log)}}class gS{constructor(){this.list=[],this.nextSegmentId=0,this.curVert=NaN}push(e,n){this.list.push({type:e,data:JSON.parse(JSON.stringify(n))})}info(e,n){this.push("info",{msg:e,data:n})}segmentId(){return this.nextSegmentId++}checkIntersection(e,n){this.push("check",{seg1:e,seg2:n})}segmentDivide(e,n){this.push("div_seg",{seg:e,p:n})}segmentChop(e){this.push("chop",{seg:e})}statusRemove(e){this.push("pop_seg",{seg:e})}segmentUpdate(e){this.push("seg_update",{seg:e})}segmentNew(e,n){this.push("new_seg",{seg:e,primary:n})}tempStatus(e,n,i){this.push("temp_status",{seg:e,above:n,below:i})}rewind(e){this.push("rewind",{seg:e})}status(e,n,i){this.push("status",{seg:e,above:n,below:i})}vert(e){e!==this.curVert&&(this.push("vert",{x:e}),this.curVert=e)}selected(e){this.push("selected",{segs:e})}chainStart(e,n){this.push("chain_start",{sf:e,closed:n})}chainNew(e,n){this.push("chain_new",{sf:e,closed:n})}chainMatch(e,n){this.push("chain_match",{index:e,closed:n})}chainClose(e,n){this.push("chain_close",{index:e,closed:n})}chainAddHead(e,n,i){this.push("chain_add_head",{index:e,sf:n,closed:i})}chainAddTail(e,n,i){this.push("chain_add_tail",{index:e,sf:n,closed:i})}chainSimplifyHead(e,n,i){this.push("chain_simp_head",{index:e,sf:n,closed:i})}chainSimplifyTail(e,n,i){this.push("chain_simp_tail",{index:e,sf:n,closed:i})}chainSimplifyClose(e,n,i){this.push("chain_simp_close",{index:e,sf:n,closed:i})}chainSimplifyJoin(e,n,i,r){this.push("chain_simp_join",{index1:e,index2:n,sf:i,closed:r})}chainConnect(e,n,i){this.push("chain_con",{index1:e,index2:n,closed:i})}chainReverse(e,n){this.push("chain_rev",{index:e,closed:n})}chainJoin(e,n,i){this.push("chain_join",{index1:e,index2:n,closed:i})}done(){this.push("done",null)}}class Lv{constructor(e=new Rv,n=null){this.geo=e,this.log=n}shape(){return new us(this.geo,null,this.log)}buildLog(e){var n;return this.log=e?new gS:null,(n=this.log)===null||n===void 0?void 0:n.list}segments(e){const n=this.shape();n.beginPath();for(const i of e.regions){const r=i[i.length-1];n.moveTo(r[r.length-2],r[r.length-1]);for(const s of i)if(s.length===2)n.lineTo(s[0],s[1]);else if(s.length===6)n.bezierCurveTo(s[0],s[1],s[2],s[3],s[4],s[5]);else throw new Error("PolyBool: Invalid point in region");n.closePath()}return{shape:n,inverted:e.inverted}}combine(e,n){return{shape:e.shape.combine(n.shape),inverted1:e.inverted,inverted2:n.inverted}}selectUnion(e){return{shape:e.inverted1?e.inverted2?e.shape.intersect():e.shape.difference():e.inverted2?e.shape.differenceRev():e.shape.union(),inverted:e.inverted1||e.inverted2}}selectIntersect(e){return{shape:e.inverted1?e.inverted2?e.shape.union():e.shape.differenceRev():e.inverted2?e.shape.difference():e.shape.intersect(),inverted:e.inverted1&&e.inverted2}}selectDifference(e){return{shape:e.inverted1?e.inverted2?e.shape.differenceRev():e.shape.union():e.inverted2?e.shape.intersect():e.shape.difference(),inverted:e.inverted1&&!e.inverted2}}selectDifferenceRev(e){return{shape:e.inverted1?e.inverted2?e.shape.difference():e.shape.intersect():e.inverted2?e.shape.union():e.shape.differenceRev(),inverted:!e.inverted1&&e.inverted2}}selectXor(e){return{shape:e.shape.xor(),inverted:e.inverted1!==e.inverted2}}polygon(e){const n=[],i={beginPath:()=>{},moveTo:()=>{n.push([])},lineTo:(r,s)=>{n[n.length-1].push([r,s])},bezierCurveTo:(r,s,o,a,l,c)=>{n[n.length-1].push([r,s,o,a,l,c])},closePath:()=>{}};return e.shape.output(i),{regions:n,inverted:e.inverted}}union(e,n){const i=this.segments(e),r=this.segments(n),s=this.combine(i,r),o=this.selectUnion(s);return this.polygon(o)}intersect(e,n){const i=this.segments(e),r=this.segments(n),s=this.combine(i,r),o=this.selectIntersect(s);return this.polygon(o)}difference(e,n){const i=this.segments(e),r=this.segments(n),s=this.combine(i,r),o=this.selectDifference(s);return this.polygon(o)}differenceRev(e,n){const i=this.segments(e),r=this.segments(n),s=this.combine(i,r),o=this.selectDifferenceRev(s);return this.polygon(o)}xor(e,n){const i=this.segments(e),r=this.segments(n),s=this.combine(i,r),o=this.selectXor(s);return this.polygon(o)}}new Lv;class vS extends Rv{atan2Deg(e,n){return Math.abs(e)<this.epsilon?n>0||Math.abs(n)<this.epsilon?0:180:Math.abs(n)<this.epsilon?e<0?270:90:Math.abs(n-e)<this.epsilon?n<0?225:45:Math.abs(n+e)<this.epsilon?n<0?135:315:(Math.atan2(e,n)*180/Math.PI+360)%360}sinDeg(e){const n=(e%360+360)%360;switch(n){case 0:case 180:return 0;case 30:case 150:return .5;case 45:case 135:return Math.SQRT1_2;case 60:case 120:return Math.sqrt(3)/2;case 90:return 1;case 210:case 330:return-.5;case 225:case 315:return-Math.SQRT1_2;case 240:case 300:return-Math.sqrt(3)/2;case 270:return-1;default:return Math.sin(n*Math.PI/180)}}cosDeg(e){const n=(e%360+360)%360;switch(n){case 0:return 1;case 30:case 330:return Math.sqrt(3)/2;case 45:case 315:return Math.SQRT1_2;case 60:case 300:return .5;case 90:case 270:return 0;case 120:case 240:return-.5;case 135:case 225:return-Math.SQRT1_2;case 150:case 210:return-Math.sqrt(3)/2;case 180:return-1;default:return Math.cos(n*Math.PI/180)}}linesIntersect(e,n,i,r,s,o,a,l){const c=i-e,u=r-n,d=a-s,h=l-o,p=c*h-u*d;if(this.snap0(p)===0)return null;const x=e-s,v=n-o,m=this.snap01((d*v-h*x)/p),f=this.snap01((c*v-u*x)/p);return{p:[e+m*c,n+m*u],alongA:m,alongB:f}}}const Wn=new vS,qn=new Lv(Wn);function _S(t,e){if(Wn.snap0(e)===0)return t;const n=[];t.output({beginPath:()=>{},moveTo:(o,a)=>{n.push({path:[],closed:!1})},lineTo:(o,a)=>{n[n.length-1].path.push([o,a])},bezierCurveTo:(o,a,l,c,u,d)=>{n[n.length-1].path.push([o,a,l,c,u,d])},closePath:()=>{n[n.length-1].closed=!0}});const i=Math.abs(e)/2,r=Math.sign(e)*90,s=qn.shape().beginPath();for(const{path:o,closed:a}of n){let l=o;if(a){l=[];const c=(p,x)=>{const v=o[p],m=o[(p+o.length-1)%o.length],f=m[m.length-2],g=m[m.length-1];return v.length===2||x?Wn.atan2Deg(g-v[1],f-v[0]):Wn.atan2Deg(v[3]-v[5],v[2]-v[4])},u=(p,x,v)=>[p[0]+v*Wn.cosDeg(x),p[1]+v*Wn.sinDeg(x)],d=(p,x,v)=>u(p,x-r,v),h=[];for(let p=0;p<o.length;p++){const x=(p+o.length-1)%o.length,v=o[p],m=c(x,!1),f=c(p,!0),g=c(p,!1),_=Math.min(Math.abs(m-f),Math.abs(m+360-f),Math.abs(m-(f+360)));if(Wn.snap0(_)>0){const S=i*4*Math.tan(_/4*Math.PI/180)/3,R=o[x],T=R[R.length-2],w=R[R.length-1],P=[T,w];h.push(l.length);const A=u(d(P,m,i),m,-S),y=u(d(P,f,i),f,S),b=d(P,f,i);l.push([A[0],A[1],y[0],y[1],b[0],b[1]])}if(v.length===2)l.push(d(v,g,i));else{const S=d([v[0],v[1]],f,i),R=d([v[2],v[3]],g,i),T=d([v[4],v[5]],g,i);l.push([S[0],S[1],R[0],R[1],T[0],T[1]])}}for(const p of h){const x=(p+l.length-1)%l.length,v=(p+l.length-2)%l.length,m=(p+1)%l.length,f=l[v],g=l[x],_=l[p],S=l[m];if(_.length===6){const R=Wn.linesIntersect(g.length===2?f[f.length-2]:g[2],g.length===2?f[f.length-1]:g[3],g[g.length-2],g[g.length-1],_[_.length-2],_[_.length-1],S[0],S[1]);R&&R.alongA>0&&R.alongA<1&&R.alongB>0&&R.alongB<1&&(_[0]=g[g.length-2],_[1]=g[g.length-1],_[2]=_[4],_[3]=_[5],g[g.length-2]=R.p[0],g[g.length-1]=R.p[1],_[4]=R.p[0],_[5]=R.p[1])}}}if(l.length>0){const c=l[l.length-1];s.moveTo(c[c.length-2],c[c.length-1]);for(const u of l)u.length===2?s.lineTo(u[0],u[1]):s.bezierCurveTo(u[0],u[1],u[2],u[3],u[4],u[5])}}return s}class fi{constructor(e,n,i,r,s){this.home={origin:[0,0],angle:0},this.thickness=e,this.kerf=n,this.border=i,this.cuts=r,this.scores=s}replace(e){var n,i,r,s,o;const a=new fi((n=e.thickness)!==null&&n!==void 0?n:this.thickness,(i=e.kerf)!==null&&i!==void 0?i:this.kerf,(r=e.border)!==null&&r!==void 0?r:this.border,(s=e.cuts)!==null&&s!==void 0?s:this.cuts,(o=e.scores)!==null&&o!==void 0?o:this.scores);return a.setHome(this.home.origin,this.home.angle),a}copy(){return this.replace({})}static combine(e,n,i){const r=n.cuts.combine(i.cuts).union().combine(e).intersect(),s=n.scores.combine(i.scores).union().combine(e).intersect();return n.replace({border:e,cuts:r,scores:s})}static union(e,n){return fi.combine(e.border.combine(n.border).union(),e,n)}static intersect(e,n){return fi.combine(e.border.combine(n.border).intersect(),e,n)}static subtract(e,n){return fi.combine(e.border.combine(n.border).difference(),e,n)}static xor(e,n){return fi.combine(e.border.combine(n.border).xor(),e,n)}unionBorder(e){return fi.union(this,this.replace({border:e,cuts:qn.shape(),scores:qn.shape()}))}subtractBorder(e){return fi.subtract(this,this.replace({border:e,cuts:qn.shape(),scores:qn.shape()}))}setHome(e,n){return this.home={origin:e,angle:n},this}newShape(){return qn.shape().translate(this.home.origin[0],this.home.origin[1]).rotateDeg(this.home.angle)}boundingBox(){const e=[1/0,1/0],n=[-1/0,-1/0];let i=!0;const r=s=>{for(const o of s.segments())for(const a of o){const l=a.boundingBox();e[0]=Math.min(e[0],l[0][0]),e[1]=Math.min(e[1],l[0][1]),n[0]=Math.max(n[0],l[1][0]),n[1]=Math.max(n[1],l[1][1]),i=!1}};return r(this.border),r(this.cuts),r(this.scores),i&&(e[0]=e[1]=n[0]=n[1]=0),[e,n]}applyKerf(){return Wn.snap0(this.kerf)===0?this:this.replace({kerf:0,border:_S(this.border,this.kerf)})}}class xS{constructor(e){}}class yS extends xS{constructor(e){super(e),this.surfaces=[],this.settings=e}addSurface(e,n,i,r){this.surfaces.push({offset:e,surface:n.applyKerf(),cutColor:i,scoreColor:r})}toFile(){const e=l=>`${Math.round(l*1e3)/1e3}`,n=[];let i=0,r=0,s=100,o=100;if(this.surfaces.length>0){const l=[[1/0,1/0],[-1/0,-1/0]];for(const{offset:p,surface:x}of this.surfaces){const v=x.boundingBox();l[0][0]=Math.min(l[0][0],p[0]+v[0][0]-10),l[0][1]=Math.min(l[0][1],p[1]+v[0][1]-10),l[1][0]=Math.max(l[1][0],p[0]+v[1][0]+10),l[1][1]=Math.max(l[1][1],p[1]+v[1][1]+10)}i=l[0][0],r=l[0][1],s=l[1][0]-l[0][0],o=l[1][1]-l[0][1];let c=0;const u=()=>{n.push(`<g id="p-${c++}" style="fill:none;stroke-linecap:round;stroke-linejoin:round;">`)},d=()=>{n.push("</g>")},h=(p,x,v)=>{const m=[];x.output({beginPath:()=>{},moveTo:(f,g)=>{m.push(`M${e(f)} ${e(g)}`)},lineTo:(f,g)=>{m.push(`L${e(f)} ${e(g)}`)},bezierCurveTo:(f,g,_,S,R,T)=>{m.push(`C${e(f)} ${e(g)} ${e(_)} ${e(S)} ${e(R)} ${e(T)}`)},closePath:()=>{m.push("Z")}},[1,0,0,1,p[0],p[1]]),n.push(`<path stroke="${v}" stroke-width="1" d="${m.join("")}" />`)};for(const{offset:p,surface:x,cutColor:v,scoreColor:m}of this.surfaces)u(),u(),h(p,x.scores,m),d(),u(),h(p,x.border,v),h(p,x.cuts,v),d(),d()}const{units:a}=this.settings;return{mimeType:"image/svg+xml",extension:".svg",data:new TextEncoder().encode(`<?xml version='1.0' encoding='utf-8'?>
<svg
  width="${e(s)}${a}"
  height="${e(o)}${a}"
  viewBox="${e(i)} ${e(r)} ${e(s)} ${e(o)}"
  xmlns="http://www.w3.org/2000/svg">
<!--
Generated by boxburner
by Sean Connelly (@velipso), https://sean.fun
Project Home: https://github.com/velipso/boxburner
SPDX-License-Identifier: 0BSD
-->
${n.join("")}
</svg>`)}}}function SS(t){const{fileFormat:e}=t;switch(e){case"svg":return new yS(t);default:throw new Error(`Unknown export file format: ${e}`)}}class bc{}class Dv{}class hh extends Dv{thickness(e,n){return this.jointThickness(!1,e,n)}draw(e,n,i,r){return this.jointDraw(e,n,!1,i,r)}}class Iv extends hh{name(){return"ButtJoint"}schema(){return{properties:{invert:{type:"boolean",metadata:{default:!1,title:"Invert",description:"Swap settings for receiving side"}},length1:{type:"float64",metadata:{default:0,title:"Length 1",description:"Length of butt 1 (multiples of material thickness)"}},length2:{type:"float64",metadata:{default:1,title:"Length 2",description:"Length of butt 2 (multiples of material thickness)"}}},metadata:{order:["invert","length1","length2"]}}}jointThickness(e,n,{length1:i,length2:r,invert:s}){return(e!==s?r:i)*n}jointDraw(e,n,i,r,s){return e}}function Nv({length:t,width1:e,width2:n,cornerDistance1:i,cornerDistance2:r,centerDistance:s},o){let a=0;const l=(d,h)=>{o(a,d,h),a+=d},c=d=>{if(d>1e4)throw new Error("Too many fingers");l(e,!0);for(let h=0;h<d;h++)l(n,!1),l(e,!0)},u=t-i-r;if(s>0){const d=(u-s)/2,h=Math.floor((d-e)/(e+n)),p=e+h*(e+n);l(i+(d-p)/2,!1),c(h),l(s+d-p,!1),c(h),l(r+(d-p)/2,!1)}else{const d=Math.floor((u-e)/(e+n)),h=e+d*(e+n);l(i+(u-h)/2,!1),c(d),l(r+(u-h)/2,!1)}}class Uv extends hh{name(){return"BoxJoint"}schema(){return{properties:{invert:{type:"boolean",metadata:{default:!1,title:"Invert",description:"Swap settings for receiving side"}},width1:{type:"float64",metadata:{default:6,title:"Width 1",description:"Width of finger 1 (units)"}},length1:{type:"float64",metadata:{default:1,title:"Length 1",description:"Length of finger 1 (multiples of material thickness)"}},width2:{type:"float64",metadata:{default:6,title:"Width 2",description:"Width of finger 2 (units)"}},length2:{type:"float64",metadata:{default:1,title:"Length 2",description:"Length of finger 2 (multiples of material thickness)"}},play:{type:"float64",metadata:{default:0,title:"Play",description:"Extra space around fingers (units)"}},cornerDistance:{type:"float64",metadata:{default:12,title:"Corner Distance",description:"Reserved space near corners to exclude fingers (units)"}},cornerDistance1Delta:{type:"float64",nullable:!0,metadata:{default:null,defaultNotNull:0,title:"Corner Distance 1 Delta",description:"Additional corner distance"}},cornerDistance2Delta:{type:"float64",nullable:!0,metadata:{default:null,defaultNotNull:0,title:"Corner Distance 2 Delta",description:"Additional corner distance"}},centerDistance:{type:"float64",metadata:{default:0,title:"Center Distance",description:"Reserved space near center to exclude fingers (units)"}}},metadata:{order:["invert","width1","length1","width2","length2","play","cornerDistance","centerDistance"]}}}jointThickness(e,n,{length1:i,length2:r,invert:s}){return(e!==s?r:i)*n}jointDraw(e,n,i,r,{invert:s,width1:o,length1:a,width2:l,length2:c,play:u,cornerDistance:d,cornerDistance1Delta:h,cornerDistance2Delta:p,centerDistance:x}){const v=i!==s,m=(v?c:a)*r;return Nv({length:n,width1:o,width2:l,cornerDistance1:d+(h??0),cornerDistance2:d+(p??0),centerDistance:x},(f,g,_)=>{_===v&&(e=e.subtractBorder(e.newShape().beginPath().rect(f-u/2,0,g+u,m).closePath()))}),e}}class Fv extends Dv{name(){return"LegEdge"}schema(){return{properties:{flatWidth:{type:"float64",metadata:{default:.1,title:"Flat Width",description:"Flat part of leg (fraction of overall length)"}},curveWidth:{type:"float64",metadata:{default:.15,title:"Curve Width",description:"Curve part of leg (fraction of overall length)"}},curveAmount:{type:"float64",metadata:{default:.05,title:"Curve Amount",description:"How extreme to curve (fraction of overall length)"}},height:{type:"float64",metadata:{default:10,title:"Height (units)"}}},metadata:{order:["flatWidth","curveWidth","curveAmount","height"]}}}thickness(e,{height:n}){return Math.max(0,n)}draw(e,n,i,{flatWidth:r,curveWidth:s,curveAmount:o,height:a}){return a<=0?e:e.subtractBorder(e.newShape().beginPath().moveTo(r*n,0).bezierCurveTo((r+o)*n,0,(r+s-o)*n,a,(r+s)*n,a).lineTo((1-r-s)*n,a).bezierCurveTo((1-r-s+o)*n,a,(1-r-o)*n,0,(1-r)*n,0).closePath())}}function Ov(t,e={},n){return{discriminator:"kind",mapping:t.map(i=>({[i.name()]:{properties:{kind:{type:"string",metadata:{default:i.name(),title:i.name()}},params:i.schema()},metadata:{order:["params"],untabParams:!0}}})).reduce((i,r)=>({...i,...r}),{}),nullable:n,metadata:{default:t[0].name(),order:t.map(i=>i.name()),...e}}}const du=[new Uv,new Iv,new Fv];class MS extends hh{name(){return"MortiseAndTenonJoint"}schema(){return{properties:{invert:{type:"boolean",metadata:{default:!1,title:"Invert",description:"Swap settings for receiving side"}},width1:{type:"float64",metadata:{default:6,title:"Width 1",description:"Width of tenon (units)"}},tenonLength:{type:"float64",metadata:{default:1,title:"Tenon Length",description:"Length of tenon (multiples of material thickness)"}},width2:{type:"float64",metadata:{default:6,title:"Width 2",description:"Width between tenons (units)"}},holeDistance:{type:"float64",metadata:{default:3,title:"Hole Distance",description:"Distance of mortises from edge (units)"}},play:{type:"float64",metadata:{default:0,title:"Play",description:"Extra space between mortise and tenons (units)"}},thicknessPlay:{type:"float64",metadata:{default:0,title:"Thickness Play",description:"Extra thickness added to mortise holes (units)"}},cornerDistance:{type:"float64",metadata:{default:12,title:"Corner Distance",description:"Reserved space near corners to exclude joints (units)"}},cornerDistance1Delta:{type:"float64",nullable:!0,metadata:{default:null,defaultNotNull:0,title:"Corner Distance 1 Delta",description:"Additional corner distance"}},cornerDistance2Delta:{type:"float64",nullable:!0,metadata:{default:null,defaultNotNull:0,title:"Corner Distance 2 Delta",description:"Additional corner distance"}},centerDistance:{type:"float64",metadata:{default:0,title:"Center Distance",description:"Reserved space near center to exclude joints (units)"}},mortiseEdge:Ov(du,{default:null,defaultNotNull:"LegEdge",title:"Mortise Edge"},!0)},metadata:{order:["invert","width1","tenonLength","width2","holeDistance","play","thicknessPlay","cornerDistance","centerDistance","mortiseEdge"]}}}jointThickness(e,n,{tenonLength:i,invert:r,mortiseEdge:s}){if(e!==r){if(s){const a=du.find(l=>l.name()===s.kind);if(!a)throw new Error("Invalid mortise edge");return a.thickness(n,s.params)}return 0}return i*n}jointDraw(e,n,i,r,{invert:s,width1:o,tenonLength:a,width2:l,holeDistance:c,play:u,thicknessPlay:d,cornerDistance:h,cornerDistance1Delta:p,cornerDistance2Delta:x,centerDistance:v,mortiseEdge:m}){const f=i!==s;let g=0;if(f&&m){const _=du.find(S=>S.name()===m.kind);if(!_)throw new Error("Invalid mortise edge");g=_.thickness(r,m.params),e=_.draw(e,n,r,m.params)}return Nv({length:n,width1:o,width2:l,cornerDistance1:h+(p??0),cornerDistance2:h+(x??0),centerDistance:v},(_,S,R)=>{if(f&&R){const T=r,w=c+g;e=e.subtractBorder(e.newShape().beginPath().rect(_-u/2,w-d,S+u,T+d*2).closePath())}else if(!f&&!R){const T=a*r;e=e.subtractBorder(e.newShape().beginPath().rect(_-u/2,0,S+u,T).closePath())}}),e}}const Lo=[new Iv,new Uv,new Fv,new MS];function Ba(t={},e){return Ov(Lo,t,e)}const tm={" ":0,"!":74240,'"':516,"#":43580,$:43707,"%":61081,"&":37745,"'":512,"(":5120,")":16640,"*":65280,"+":43520,",":16384,"-":34816,".":65536,"/":17408,0:17663,1:1036,2:34935,3:2111,4:34956,5:35003,6:35067,7:15,8:35071,9:35007,":":8704,";":16896,"<":37888,"=":34864,">":18688,"?":75783,"@":2807,A:35023,B:10815,C:243,D:8767,E:33011,F:32963,G:2299,H:35020,I:8755,J:124,K:38080,L:240,M:1484,N:4556,O:255,P:35015,Q:4351,R:39111,S:35003,T:8707,U:252,V:17600,W:20684,X:21760,Y:35004,Z:17459,"[":8722,"\\":4352,"]":8737,"^":20480,_:48,"`":256,"{":41490,"|":8704,"}":10785,"~":52224},ES=(t,e,n,i,r)=>{var s;const o=(s=tm[r.toUpperCase()])!==null&&s!==void 0?s:tm["?"],a=(c,u,d,h)=>{t.moveTo(e[0]+c*n,e[1]+u*i).lineTo(e[0]+d*n,e[1]+h*i)},l=.025;o&1&&a(l,0,.5-l,0),o&2&&a(.5+l,0,1-l,0),o&4&&a(1,l,1,.5-l),o&8&&a(1,.5+l,1,1-l),o&16&&a(1-l,1,.5+l,1),o&32&&a(.5-l,1,l,1),o&64&&a(0,1-l,0,.5+l),o&128&&a(0,.5-l,0,l),o&256&&a(l,l,.5-l,.5-l),o&512&&a(.5,l,.5,.5-l),o&1024&&a(1-l,l,.5+l,.5-l),o&2048&&a(.5+l,.5,1-l,.5),o&4096&&a(.5+l,.5+l,1-l,1-l),o&8192&&(o&65536?a(.5,.5+l,.5,.8-l):a(.5,.5+l,.5,1-l)),o&16384&&a(.5-l,.5+l,l,1-l),o&32768&&a(.5-l,.5,l,.5),o&65536&&a(.5,.8+l,.5,1-l)};function wS(t,e,n,i,r,s){const o=t.split(`
`),a=o.reduce((p,x)=>Math.max(p,x.length),0),l=typeof s=="number"?s:Math.min((i-5)/a*2,(r-5)/o.length),c=l/2,u=e+(i-c*a)/2,d=n+(r-l*o.length)/2,h=qn.shape();for(let p=0;p<o.length;p++){const x=o[p];for(let v=0;v<x.length;v++)ES(h,[u+c*v+c*.15,d+l*p+l*.15],c*.7,l*.7,x.charAt(v))}return h}class Pc extends bc{name(){return"Rectangle"}schema(){return{properties:{label:{type:"string",nullable:!0,metadata:{default:null,defaultNotNull:"",nullHint:"none",title:"Label"}},labelFontSize:{type:"float64",nullable:!0,metadata:{default:null,defaultNotNull:10,nullHint:"auto",title:"Label Font Size (units)"}},thickness:{type:"float64",nullable:!0,metadata:{default:null,defaultNotNull:3,nullHint:"default",title:"Material Thickness (units)"}},kerf:{type:"float64",nullable:!0,metadata:{default:null,defaultNotNull:.1,nullHint:"default",title:"Kerf (units)",description:"Thickness of material removed by cutting tool"}},width:{type:"float64",metadata:{default:100,title:"Inner Width (units)"}},height:{type:"float64",metadata:{default:100,title:"Inner Height (units)"}},edge1:Ba({title:"Top"}),edge2:Ba({title:"Right"}),edge3:Ba({title:"Bottom"}),edge4:Ba({title:"Left"})},metadata:{order:["label","labelFontSize","thickness","kerf","width","height","edge1","edge2","edge3","edge4"]}}}generate(e,{label:n,labelFontSize:i,thickness:r,kerf:s,width:o,height:a,edge1:l,edge2:c,edge3:u,edge4:d}){const h=typeof r=="number"?r:e.defaultThickness,p=typeof s=="number"?s:e.defaultKerf,x=Lo.find(F=>F.name()===l.kind);if(!x)throw new Error("Bad top edge");const v=Lo.find(F=>F.name()===c.kind);if(!v)throw new Error("Bad right edge");const m=Lo.find(F=>F.name()===u.kind);if(!m)throw new Error("Bad bottom edge");const f=Lo.find(F=>F.name()===d.kind);if(!f)throw new Error("Bad left edge");const g=x.thickness(h,l.params),_=v.thickness(h,c.params),S=m.thickness(h,u.params),R=f.thickness(h,d.params),T=o+_+R,w=a+g+S,P=qn.shape().beginPath().moveTo(0,0).lineTo(T,0).lineTo(T,w).lineTo(0,w).closePath(),A=qn.shape(),y=n?wS(n,R,g,o,a,i):qn.shape();let b=new fi(h,p,P,A,y);return b=x.draw(b.setHome([0,0],0),T,h,{...l.params,cornerDistance1Delta:R,cornerDistance2Delta:_}),b=v.draw(b.setHome([T,0],90),w,h,{...c.params,cornerDistance1Delta:g,cornerDistance2Delta:S}),b=m.draw(b.setHome([T,w],180),T,h,{...u.params,cornerDistance1Delta:_,cornerDistance2Delta:R}),b=f.draw(b.setHome([0,w],270),w,h,{...d.params,cornerDistance1Delta:S,cornerDistance2Delta:g}),[b]}}class TS extends bc{name(){return"BoxPlain"}schema(){return{properties:{labels:{type:"boolean",metadata:{default:!1,title:"Labels"}},width:{type:"float64",metadata:{default:100,title:"Inner Width (units)"}},depth:{type:"float64",metadata:{default:100,title:"Inner Depth (units)"}},height:{type:"float64",metadata:{default:100,title:"Inner Height (units)"}},holeDistance:{type:"float64",metadata:{default:3,title:"Hole Distance",description:"Distance of mortises from edge (units)"}},play:{type:"float64",metadata:{default:0,title:"Play",description:"Extra space between fingers (units)"}},thicknessPlay:{type:"float64",metadata:{default:0,title:"Thickness Play",description:"Extra thickness added to mortise holes (units)"}}},metadata:{order:["labels","width","depth","height","holeDistance","play","thicknessPlay"]}}}generate(e,{labels:n,width:i,depth:r,height:s,holeDistance:o,play:a,thicknessPlay:l}){const{defaultThickness:c}=e,u=new Pc,d=x=>({kind:"MortiseAndTenonJoint",params:{invert:x,width1:2*c,tenonLength:1,width2:2*c,holeDistance:o,play:a,thicknessPlay:l,cornerDistance:2*c,centerDistance:0}}),h=()=>({kind:"ButtJoint",params:{invert:!1,length1:0,length2:1}}),p=x=>({kind:"BoxJoint",params:{invert:x,width1:2*c,length1:1,width2:2*c,length2:1,play:a,cornerDistance:2*c,centerDistance:0}});return[...u.generate(e,{width:i,height:r,edge1:d(!1),edge2:d(!1),edge3:d(!1),edge4:d(!1),...n?{label:"Bottom"}:{}}),...u.generate(e,{width:r,height:s,edge1:h(),edge2:p(!1),edge3:d(!0),edge4:p(!1),...n?{label:"Left"}:{}}),...u.generate(e,{width:r,height:s,edge1:h(),edge2:p(!1),edge3:d(!0),edge4:p(!1),...n?{label:"Right"}:{}}),...u.generate(e,{width:i,height:s,edge1:h(),edge2:p(!0),edge3:d(!0),edge4:p(!0),...n?{label:"Front"}:{}}),...u.generate(e,{width:i,height:s,edge1:h(),edge2:p(!0),edge3:d(!0),edge4:p(!0),...n?{label:"Back"}:{}})]}}class AS extends bc{name(){return"BoxNested"}schema(){return{properties:{labels:{type:"boolean",metadata:{default:!1,title:"Labels"}},width:{type:"float64",metadata:{default:100,title:"Inner Width (units)"}},depth:{type:"float64",metadata:{default:100,title:"Inner Depth (units)"}},height:{type:"float64",metadata:{default:100,title:"Inner Height (units)"}},holeDistance:{type:"float64",metadata:{default:3,title:"Hole Distance",description:"Distance of mortises from edge (units)"}},play:{type:"float64",metadata:{default:0,title:"Play",description:"Extra space between fingers (units)"}},thicknessPlay:{type:"float64",metadata:{default:0,title:"Thickness Play",description:"Extra thickness added to mortise holes (units)"}}},metadata:{order:["labels","width","depth","height","holeDistance","play","thicknessPlay"]}}}generate(e,{labels:n,width:i,depth:r,height:s,holeDistance:o,play:a,thicknessPlay:l}){const{defaultThickness:c}=e,u=new Pc,d=(v,m,f)=>({kind:"MortiseAndTenonJoint",params:{invert:v,width1:2*c,tenonLength:m,width2:2*c,holeDistance:o,play:a,thicknessPlay:l,cornerDistance:2*c,centerDistance:0,mortiseEdge:f}}),h=()=>({kind:"ButtJoint",params:{invert:!1,length1:0,length2:1}}),p=(v,m)=>({kind:"BoxJoint",params:{invert:v,width1:2*c,length1:m,width2:2*c,length2:m,play:a,cornerDistance:2*c,centerDistance:0}}),x=()=>({kind:"LegEdge",params:{flatWidth:.1,curveWidth:.15,curveAmount:.05,height:10}});return[...u.generate(e,{width:i,height:r,edge1:d(!1,2),edge2:d(!1,1),edge3:d(!1,2),edge4:d(!1,1),...n?{label:"Bottom"}:{}}),...u.generate(e,{width:r,height:s,edge1:h(),edge2:p(!1,2),edge3:d(!0,1),edge4:p(!1,2),...n?{label:"Left"}:{}}),...u.generate(e,{width:r,height:s,edge1:h(),edge2:p(!1,2),edge3:d(!0,1),edge4:p(!1,2),...n?{label:"Right"}:{}}),...u.generate(e,{width:i,height:s,edge1:h(),edge2:p(!0,1),edge3:d(!0,1),edge4:p(!0,1),...n?{label:"Front"}:{}}),...u.generate(e,{width:i,height:s,edge1:h(),edge2:p(!0,1),edge3:d(!0,1,x()),edge4:p(!0,1),...n?{label:"Inner Front"}:{}}),...u.generate(e,{width:i,height:s,edge1:h(),edge2:p(!0,1),edge3:d(!0,1),edge4:p(!0,1),...n?{label:"Back"}:{}}),...u.generate(e,{width:i,height:s,edge1:h(),edge2:p(!0,1),edge3:d(!0,1,x()),edge4:p(!0,1),...n?{label:"Inner Back"}:{}})]}}class CS extends bc{name(){return"KerfTester"}schema(){return{properties:{labels:{type:"boolean",metadata:{default:!0,title:"Labels"}},width:{type:"float64",metadata:{default:30,title:"Outer Width (units)"}},height:{type:"float64",metadata:{default:15,title:"Outer Height (units)"}},play:{type:"float64",metadata:{default:0,title:"Play",description:"Extra space between fingers (units)"}},testCount:{type:"int32",metadata:{default:8,title:"Number of tests"}},kerfStart:{type:"float64",metadata:{default:.08,title:"Kerf start value (units)"}},kerfIncrement:{type:"float64",metadata:{default:.02,title:"Kerf increment value (per test)"}}},metadata:{order:["labels","width","height","play","testCount","kerfStart","kerfIncrement"]}}}generate(e,{labels:n,width:i,height:r,play:s,testCount:o,kerfStart:a,kerfIncrement:l}){const{defaultThickness:c}=e,u=new Pc,d=()=>({kind:"ButtJoint",params:{invert:!1,length1:0,length2:1}}),h=x=>({kind:"BoxJoint",params:{invert:x,width1:2*c,length1:1,width2:2*c,length2:1,play:s,cornerDistance:2*c,centerDistance:0}}),p=[];for(let x=0;x<o;x++){const v=a+x*l;p.push(...u.generate(e,{width:i,height:r,kerf:v,edge1:h(!1),edge2:d(),edge3:d(),edge4:d(),...n?{label:v.toFixed(3)}:{}}),...u.generate(e,{width:i,height:r,kerf:v,edge1:d(),edge2:d(),edge3:h(!0),edge4:d(),...n?{label:v.toFixed(3)}:{}}))}return p}}const hu=[new AS,new TS,new CS,new Pc],za={properties:{defaultThickness:{type:"float64",metadata:{default:3,title:"Default Material Thickness (units)"}},defaultKerf:{type:"float64",metadata:{default:.1,title:"Default Kerf (units)",description:"Thickness of material removed by cutting tool"}},units:{enum:["mm","in"],metadata:{default:"mm",title:"Units"}},fileFormat:{enum:["svg"],metadata:{default:"svg",title:"File Format"}},debug:{type:"boolean",metadata:{default:!1,title:"Debug"}}},metadata:{title:"Settings",order:["defaultThickness","defaultKerf","units","fileFormat","debug"],startHidden:!0}},kv=new Set,sn=new WeakMap,js=new WeakMap,Nr=new WeakMap,kf=new WeakMap,RS=new WeakMap,Ys=new WeakMap,ic=new WeakMap,Do=new WeakSet;let nr,ph=0,mh=0;const mi="__aa_tgt",ca="__aa_del",rc="__aa_new",bS=t=>{const e=US(t);e&&e.forEach(n=>FS(n))},PS=t=>{t.forEach(e=>{e.target===nr&&DS(),sn.has(e.target)&&zr(e.target)})};function LS(t){const e=kf.get(t);e==null||e.disconnect();let n=sn.get(t),i=0;const r=5;n||(n=$s(t),sn.set(t,n));const{offsetWidth:s,offsetHeight:o}=nr,l=[n.top-r,s-(n.left+r+n.width),o-(n.top+r+n.height),n.left-r].map(u=>`${-1*Math.floor(u)}px`).join(" "),c=new IntersectionObserver(()=>{++i>1&&zr(t)},{root:nr,threshold:1,rootMargin:l});c.observe(t),kf.set(t,c)}function zr(t){clearTimeout(ic.get(t));const e=Lc(t),n=ua(e)?500:e.duration;ic.set(t,setTimeout(async()=>{const i=Nr.get(t);try{await(i==null?void 0:i.finished),sn.set(t,$s(t)),LS(t)}catch{}},n))}function DS(){clearTimeout(ic.get(nr)),ic.set(nr,setTimeout(()=>{kv.forEach(t=>Vv(t,e=>Bv(()=>zr(e))))},100))}function IS(t){setTimeout(()=>{RS.set(t,setInterval(()=>Bv(zr.bind(null,t)),2e3))},Math.round(2e3*Math.random()))}function Bv(t){typeof requestIdleCallback=="function"?requestIdleCallback(()=>t()):requestAnimationFrame(()=>t())}let Bf,ws;const NS=typeof window<"u"&&"ResizeObserver"in window;NS&&(nr=document.documentElement,Bf=new MutationObserver(bS),ws=new ResizeObserver(PS),window.addEventListener("scroll",()=>{mh=window.scrollY,ph=window.scrollX}),ws.observe(nr));function US(t){return t.reduce((i,r)=>[...i,...Array.from(r.addedNodes),...Array.from(r.removedNodes)],[]).every(i=>i.nodeName==="#comment")?!1:t.reduce((i,r)=>{if(i===!1)return!1;if(r.target instanceof Element){if(pu(r.target),!i.has(r.target)){i.add(r.target);for(let s=0;s<r.target.children.length;s++){const o=r.target.children.item(s);if(o){if(ca in o)return!1;pu(r.target,o),i.add(o)}}}if(r.removedNodes.length)for(let s=0;s<r.removedNodes.length;s++){const o=r.removedNodes[s];if(ca in o)return!1;o instanceof Element&&(i.add(o),pu(r.target,o),js.set(o,[r.previousSibling,r.nextSibling]))}}return i},new Set)}function pu(t,e){!e&&!(mi in t)?Object.defineProperty(t,mi,{value:t}):e&&!(mi in e)&&Object.defineProperty(e,mi,{value:t})}function FS(t){var e;const n=t.isConnected,i=sn.has(t);n&&js.has(t)&&js.delete(t),Nr.has(t)&&((e=Nr.get(t))===null||e===void 0||e.cancel()),rc in t?nm(t):i&&n?kS(t):i&&!n?BS(t):nm(t)}function Xn(t){return Number(t.replace(/[^0-9.\-]/g,""))}function OS(t){let e=t.parentElement;for(;e;){if(e.scrollLeft||e.scrollTop)return{x:e.scrollLeft,y:e.scrollTop};e=e.parentElement}return{x:0,y:0}}function $s(t){const e=t.getBoundingClientRect(),{x:n,y:i}=OS(t);return{top:e.top+i,left:e.left+n,width:e.width,height:e.height}}function zv(t,e,n){let i=e.width,r=e.height,s=n.width,o=n.height;const a=getComputedStyle(t);if(a.getPropertyValue("box-sizing")==="content-box"){const c=Xn(a.paddingTop)+Xn(a.paddingBottom)+Xn(a.borderTopWidth)+Xn(a.borderBottomWidth),u=Xn(a.paddingLeft)+Xn(a.paddingRight)+Xn(a.borderRightWidth)+Xn(a.borderLeftWidth);i-=u,s-=u,r-=c,o-=c}return[i,s,r,o].map(Math.round)}function Lc(t){return mi in t&&Ys.has(t[mi])?Ys.get(t[mi]):{duration:250,easing:"ease-in-out"}}function Hv(t){if(mi in t)return t[mi]}function gh(t){const e=Hv(t);return e?Do.has(e):!1}function Vv(t,...e){e.forEach(n=>n(t,Ys.has(t)));for(let n=0;n<t.children.length;n++){const i=t.children.item(n);i&&e.forEach(r=>r(i,Ys.has(i)))}}function vh(t){return Array.isArray(t)?t:[t]}function ua(t){return typeof t=="function"}function kS(t){const e=sn.get(t),n=$s(t);if(!gh(t))return sn.set(t,n);let i;if(!e)return;const r=Lc(t);if(typeof r!="function"){const s=e.left-n.left,o=e.top-n.top,[a,l,c,u]=zv(t,e,n),d={transform:`translate(${s}px, ${o}px)`},h={transform:"translate(0, 0)"};a!==l&&(d.width=`${a}px`,h.width=`${l}px`),c!==u&&(d.height=`${c}px`,h.height=`${u}px`),i=t.animate([d,h],{duration:r.duration,easing:r.easing})}else{const[s]=vh(r(t,"remain",e,n));i=new Animation(s),i.play()}Nr.set(t,i),sn.set(t,n),i.addEventListener("finish",zr.bind(null,t))}function nm(t){rc in t&&delete t[rc];const e=$s(t);sn.set(t,e);const n=Lc(t);if(!gh(t))return;let i;if(typeof n!="function")i=t.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:n.duration*1.5,easing:"ease-in"});else{const[r]=vh(n(t,"add",e));i=new Animation(r),i.play()}Nr.set(t,i),i.addEventListener("finish",zr.bind(null,t))}function im(t,e){var n;t.remove(),sn.delete(t),js.delete(t),Nr.delete(t),(n=kf.get(t))===null||n===void 0||n.disconnect(),setTimeout(()=>{if(ca in t&&delete t[ca],Object.defineProperty(t,rc,{value:!0,configurable:!0}),e&&t instanceof HTMLElement)for(const i in e)t.style[i]=""},0)}function BS(t){var e;if(!js.has(t)||!sn.has(t))return;const[n,i]=js.get(t);Object.defineProperty(t,ca,{value:!0,configurable:!0});const r=window.scrollX,s=window.scrollY;if(i&&i.parentNode&&i.parentNode instanceof Element?i.parentNode.insertBefore(t,i):n&&n.parentNode?n.parentNode.appendChild(t):(e=Hv(t))===null||e===void 0||e.appendChild(t),!gh(t))return im(t);const[o,a,l,c]=HS(t),u=Lc(t),d=sn.get(t);(r!==ph||s!==mh)&&zS(t,r,s,u);let h,p={position:"absolute",top:`${o}px`,left:`${a}px`,width:`${l}px`,height:`${c}px`,margin:"0",pointerEvents:"none",transformOrigin:"center",zIndex:"100"};if(!ua(u))Object.assign(t.style,p),h=t.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:u.duration,easing:"ease-out"});else{const[x,v]=vh(u(t,"remove",d));(v==null?void 0:v.styleReset)!==!1&&(p=(v==null?void 0:v.styleReset)||p,Object.assign(t.style,p)),h=new Animation(x),h.play()}Nr.set(t,h),h.addEventListener("finish",im.bind(null,t,p))}function zS(t,e,n,i){const r=ph-e,s=mh-n,o=document.documentElement.style.scrollBehavior;if(getComputedStyle(nr).scrollBehavior==="smooth"&&(document.documentElement.style.scrollBehavior="auto"),window.scrollTo(window.scrollX+r,window.scrollY+s),!t.parentElement)return;const l=t.parentElement;let c=l.clientHeight,u=l.clientWidth;const d=performance.now();function h(){requestAnimationFrame(()=>{if(!ua(i)){const p=c-l.clientHeight,x=u-l.clientWidth;d+i.duration>performance.now()?(window.scrollTo({left:window.scrollX-x,top:window.scrollY-p}),c=l.clientHeight,u=l.clientWidth,h()):document.documentElement.style.scrollBehavior=o}})}h()}function HS(t){const e=sn.get(t),[n,,i]=zv(t,e,$s(t));let r=t.parentElement;for(;r&&(getComputedStyle(r).position==="static"||r instanceof HTMLBodyElement);)r=r.parentElement;r||(r=document.body);const s=getComputedStyle(r),o=sn.get(r)||$s(r),a=Math.round(e.top-o.top)-Xn(s.borderTopWidth),l=Math.round(e.left-o.left)-Xn(s.borderLeftWidth);return[a,l,n,i]}function VS(t,e={}){return Bf&&ws&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!ua(e)&&!e.disrespectUserMotionPreference||(Do.add(t),getComputedStyle(t).position==="static"&&Object.assign(t.style,{position:"relative"}),Vv(t,zr,IS,r=>ws==null?void 0:ws.observe(r)),ua(e)?Ys.set(t,e):Ys.set(t,{duration:250,easing:"ease-in-out",...e}),Bf.observe(t,{childList:!0}),kv.add(t))),Object.freeze({parent:t,enable:()=>{Do.add(t)},disable:()=>{Do.delete(t)},isEnabled:()=>Do.has(t)})}function GS(t){const[e,n]=ge.useState(),i=ge.useMemo(()=>t,[]),r=ge.useCallback(o=>{o instanceof HTMLElement?n(VS(o,i)):n(void 0)},[i]),s=ge.useCallback(o=>{e&&(o?e.enable():e.disable())},[e]);return[r,s]}function WS({className:t,children:e}){const[n]=GS();return q.jsx("div",{className:t,ref:n,children:e})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _h="167",Xr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},jr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},XS=0,rm=1,jS=2,Gv=1,YS=2,ci=3,ir=0,on=1,Kn=2,Qi=0,Is=1,sm=2,om=3,am=4,$S=5,xr=100,qS=101,KS=102,ZS=103,QS=104,JS=200,eM=201,tM=202,nM=203,zf=204,Hf=205,iM=206,rM=207,sM=208,oM=209,aM=210,lM=211,cM=212,uM=213,fM=214,dM=0,hM=1,pM=2,sc=3,mM=4,gM=5,vM=6,_M=7,xh=0,xM=1,yM=2,Ji=0,SM=1,MM=2,EM=3,wM=4,TM=5,AM=6,CM=7,Wv=300,qs=301,Ks=302,Vf=303,Gf=304,Dc=306,Wf=1e3,wr=1001,Xf=1002,wn=1003,RM=1004,Ha=1005,Fn=1006,mu=1007,Tr=1008,Ei=1009,Xv=1010,jv=1011,fa=1012,yh=1013,Ur=1014,gi=1015,va=1016,Sh=1017,Mh=1018,Zs=1020,Yv=35902,$v=1021,qv=1022,On=1023,Kv=1024,Zv=1025,Ns=1026,Qs=1027,Qv=1028,Eh=1029,Jv=1030,wh=1031,Th=1033,Tl=33776,Al=33777,Cl=33778,Rl=33779,jf=35840,Yf=35841,$f=35842,qf=35843,Kf=36196,Zf=37492,Qf=37496,Jf=37808,ed=37809,td=37810,nd=37811,id=37812,rd=37813,sd=37814,od=37815,ad=37816,ld=37817,cd=37818,ud=37819,fd=37820,dd=37821,bl=36492,hd=36494,pd=36495,e_=36283,md=36284,gd=36285,vd=36286,bM=3200,PM=3201,t_=0,LM=1,Hi="",jn="srgb",lr="srgb-linear",Ah="display-p3",Ic="display-p3-linear",oc="linear",it="srgb",ac="rec709",lc="p3",Yr=7680,lm=519,DM=512,IM=513,NM=514,n_=515,UM=516,FM=517,OM=518,kM=519,cm=35044,um="300 es",vi=2e3,cc=2001;class Hr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fm=1234567;const Go=Math.PI/180,Js=180/Math.PI;function ro(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[t&255]+Vt[t>>8&255]+Vt[t>>16&255]+Vt[t>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[n&63|128]+Vt[n>>8&255]+"-"+Vt[n>>16&255]+Vt[n>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function Xt(t,e,n){return Math.max(e,Math.min(n,t))}function Ch(t,e){return(t%e+e)%e}function BM(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function zM(t,e,n){return t!==e?(n-t)/(e-t):0}function Wo(t,e,n){return(1-n)*t+n*e}function HM(t,e,n,i){return Wo(t,e,1-Math.exp(-n*i))}function VM(t,e=1){return e-Math.abs(Ch(t,e*2)-e)}function GM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function WM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function XM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function jM(t,e){return t+Math.random()*(e-t)}function YM(t){return t*(.5-Math.random())}function $M(t){t!==void 0&&(fm=t);let e=fm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qM(t){return t*Go}function KM(t){return t*Js}function ZM(t){return(t&t-1)===0&&t!==0}function QM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function JM(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function e1(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),x=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*d,l*h,a*c);break;case"YZY":t.set(l*h,a*u,l*d,a*c);break;case"ZXZ":t.set(l*d,l*h,a*u,a*c);break;case"XZX":t.set(a*u,l*x,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*x,a*c);break;case"ZYZ":t.set(l*x,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function fs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Yt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const t1={DEG2RAD:Go,RAD2DEG:Js,generateUUID:ro,clamp:Xt,euclideanModulo:Ch,mapLinear:BM,inverseLerp:zM,lerp:Wo,damp:HM,pingpong:VM,smoothstep:GM,smootherstep:WM,randInt:XM,randFloat:jM,randFloatSpread:YM,seededRandom:$M,degToRad:qM,radToDeg:KM,isPowerOfTwo:ZM,ceilPowerOfTwo:QM,floorPowerOfTwo:JM,setQuaternionFromProperEuler:e1,normalize:Yt,denormalize:fs};class Ne{constructor(e=0,n=0){Ne.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,n,i,r,s,o,a,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],x=i[8],v=r[0],m=r[3],f=r[6],g=r[1],_=r[4],S=r[7],R=r[2],T=r[5],w=r[8];return s[0]=o*v+a*g+l*R,s[3]=o*m+a*_+l*T,s[6]=o*f+a*S+l*w,s[1]=c*v+u*g+d*R,s[4]=c*m+u*_+d*T,s[7]=c*f+u*S+d*w,s[2]=h*v+p*g+x*R,s[5]=h*m+p*_+x*T,s[8]=h*f+p*S+x*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,p=c*s-o*l,x=n*d+i*h+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=d*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(gu.makeScale(e,n)),this}rotate(e){return this.premultiply(gu.makeRotation(-e)),this}translate(e,n){return this.premultiply(gu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gu=new Be;function i_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function uc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function n1(){const t=uc("canvas");return t.style.display="block",t}const dm={};function Xo(t){t in dm||(dm[t]=!0,console.warn(t))}function i1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const hm=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pm=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),So={[lr]:{transfer:oc,primaries:ac,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[jn]:{transfer:it,primaries:ac,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ic]:{transfer:oc,primaries:lc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(pm),fromReference:t=>t.applyMatrix3(hm)},[Ah]:{transfer:it,primaries:lc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(pm),fromReference:t=>t.applyMatrix3(hm).convertLinearToSRGB()}},r1=new Set([lr,Ic]),Qe={enabled:!0,_workingColorSpace:lr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!r1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=So[e].toReference,r=So[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return So[t].primaries},getTransfer:function(t){return t===Hi?oc:So[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(So[e].luminanceCoefficients)}};function Us(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function vu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let $r;class s1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$r===void 0&&($r=uc("canvas")),$r.width=e.width,$r.height=e.height;const i=$r.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=$r}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=uc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Us(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Us(n[i]/255)*255):n[i]=Us(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let o1=0;class r_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:o1++}),this.uuid=ro(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(_u(r[o].image)):s.push(_u(r[o]))}else s=_u(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function _u(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?s1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let a1=0;class an extends Hr{constructor(e=an.DEFAULT_IMAGE,n=an.DEFAULT_MAPPING,i=wr,r=wr,s=Fn,o=Tr,a=On,l=Ei,c=an.DEFAULT_ANISOTROPY,u=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a1++}),this.uuid=ro(),this.name="",this.source=new r_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wf:e.x=e.x-Math.floor(e.x);break;case wr:e.x=e.x<0?0:1;break;case Xf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wf:e.y=e.y-Math.floor(e.y);break;case wr:e.y=e.y<0?0:1;break;case Xf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Wv;an.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,n=0,i=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],x=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,S=(p+1)/2,R=(f+1)/2,T=(u+h)/4,w=(d+v)/4,P=(x+m)/4;return _>S&&_>R?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=T/i,s=w/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=P/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=w/s,r=P/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-x)*(m-x)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(g)<.001&&(g=1),this.x=(m-x)/g,this.y=(d-v)/g,this.z=(h-u)/g,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class l1 extends Hr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new an(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new r_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fr extends l1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class s_ extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class c1 extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Or{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],x=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=x,e[n+3]=v;return}if(d!==v||l!==h||c!==p||u!==x){let m=1-a;const f=l*h+c*p+u*x+d*v,g=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const R=Math.sqrt(_),T=Math.atan2(R,f*g);m=Math.sin(m*T)/R,a=Math.sin(a*T)/R}const S=a*g;if(l=l*m+h*S,c=c*m+p*S,u=u*m+x*S,d=d*m+v*S,m===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=R,c*=R,u*=R,d*=R}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],h=s[o+1],p=s[o+2],x=s[o+3];return e[n]=a*x+u*d+l*p-c*h,e[n+1]=l*x+u*h+c*d-a*p,e[n+2]=c*x+u*p+a*h-l*d,e[n+3]=u*x-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d-h*p*x;break;case"YXZ":this._x=h*u*d+c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d+h*p*x;break;case"ZXY":this._x=h*u*d-c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d-h*p*x;break;case"ZYX":this._x=h*u*d-c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d+h*p*x;break;case"YZX":this._x=h*u*d+c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d-h*p*x;break;case"XZY":this._x=h*u*d-c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d+h*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(mm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(mm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xu.copy(this).projectOnVector(e),this.sub(xu)}reflect(e){return this.sub(xu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xu=new k,mm=new Or;class _a{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Pn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Pn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Pn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pn):Pn.fromBufferAttribute(s,o),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Va.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Va.copy(i.boundingBox)),Va.applyMatrix4(e.matrixWorld),this.union(Va)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mo),Ga.subVectors(this.max,Mo),qr.subVectors(e.a,Mo),Kr.subVectors(e.b,Mo),Zr.subVectors(e.c,Mo),Pi.subVectors(Kr,qr),Li.subVectors(Zr,Kr),ur.subVectors(qr,Zr);let n=[0,-Pi.z,Pi.y,0,-Li.z,Li.y,0,-ur.z,ur.y,Pi.z,0,-Pi.x,Li.z,0,-Li.x,ur.z,0,-ur.x,-Pi.y,Pi.x,0,-Li.y,Li.x,0,-ur.y,ur.x,0];return!yu(n,qr,Kr,Zr,Ga)||(n=[1,0,0,0,1,0,0,0,1],!yu(n,qr,Kr,Zr,Ga))?!1:(Wa.crossVectors(Pi,Li),n=[Wa.x,Wa.y,Wa.z],yu(n,qr,Kr,Zr,Ga))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ri=[new k,new k,new k,new k,new k,new k,new k,new k],Pn=new k,Va=new _a,qr=new k,Kr=new k,Zr=new k,Pi=new k,Li=new k,ur=new k,Mo=new k,Ga=new k,Wa=new k,fr=new k;function yu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){fr.fromArray(t,s);const a=r.x*Math.abs(fr.x)+r.y*Math.abs(fr.y)+r.z*Math.abs(fr.z),l=e.dot(fr),c=n.dot(fr),u=i.dot(fr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const u1=new _a,Eo=new k,Su=new k;class Nc{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):u1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Eo.subVectors(e,this.center);const n=Eo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Eo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Su.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Eo.copy(e.center).add(Su)),this.expandByPoint(Eo.copy(e.center).sub(Su))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const si=new k,Mu=new k,Xa=new k,Di=new k,Eu=new k,ja=new k,wu=new k;class Rh{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=si.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,n),si.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Mu.copy(e).add(n).multiplyScalar(.5),Xa.copy(n).sub(e).normalize(),Di.copy(this.origin).sub(Mu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Xa),a=Di.dot(this.direction),l=-Di.dot(Xa),c=Di.lengthSq(),u=Math.abs(1-o*o);let d,h,p,x;if(u>0)if(d=o*l-a,h=o*a-l,x=s*u,d>=0)if(h>=-x)if(h<=x){const v=1/u;d*=v,h*=v,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-x?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=x?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Mu).addScaledVector(Xa,h),p}intersectSphere(e,n){si.subVectors(e.center,this.origin);const i=si.dot(this.direction),r=si.dot(si)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,n,i,r,s){Eu.subVectors(n,e),ja.subVectors(i,e),wu.crossVectors(Eu,ja);let o=this.direction.dot(wu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Di.subVectors(this.origin,e);const l=a*this.direction.dot(ja.crossVectors(Di,ja));if(l<0)return null;const c=a*this.direction.dot(Eu.cross(Di));if(c<0||l+c>o)return null;const u=-a*Di.dot(wu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,n,i,r,s,o,a,l,c,u,d,h,p,x,v,m){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,h,p,x,v,m)}set(e,n,i,r,s,o,a,l,c,u,d,h,p,x,v,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=x,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Qr.setFromMatrixColumn(e,0).length(),s=1/Qr.setFromMatrixColumn(e,1).length(),o=1/Qr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*d,x=a*u,v=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+x*c,n[5]=h-v*c,n[9]=-a*l,n[2]=v-h*c,n[6]=x+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,x=c*u,v=c*d;n[0]=h+v*a,n[4]=x*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-x,n[6]=v+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,x=c*u,v=c*d;n[0]=h-v*a,n[4]=-o*d,n[8]=x+p*a,n[1]=p+x*a,n[5]=o*u,n[9]=v-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*d,x=a*u,v=a*d;n[0]=l*u,n[4]=x*c-p,n[8]=h*c+v,n[1]=l*d,n[5]=v*c+h,n[9]=p*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,x=a*l,v=a*c;n[0]=l*u,n[4]=v-h*d,n[8]=x*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+x,n[10]=h-v*d}else if(e.order==="XZY"){const h=o*l,p=o*c,x=a*l,v=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+v,n[5]=o*u,n[9]=p*d-x,n[2]=x*d-p,n[6]=a*u,n[10]=v*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(f1,e,d1)}lookAt(e,n,i){const r=this.elements;return un.subVectors(e,n),un.lengthSq()===0&&(un.z=1),un.normalize(),Ii.crossVectors(i,un),Ii.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Ii.crossVectors(i,un)),Ii.normalize(),Ya.crossVectors(un,Ii),r[0]=Ii.x,r[4]=Ya.x,r[8]=un.x,r[1]=Ii.y,r[5]=Ya.y,r[9]=un.y,r[2]=Ii.z,r[6]=Ya.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],x=i[2],v=i[6],m=i[10],f=i[14],g=i[3],_=i[7],S=i[11],R=i[15],T=r[0],w=r[4],P=r[8],A=r[12],y=r[1],b=r[5],F=r[9],O=r[13],Y=r[2],$=r[6],V=r[10],Z=r[14],I=r[3],j=r[7],Q=r[11],oe=r[15];return s[0]=o*T+a*y+l*Y+c*I,s[4]=o*w+a*b+l*$+c*j,s[8]=o*P+a*F+l*V+c*Q,s[12]=o*A+a*O+l*Z+c*oe,s[1]=u*T+d*y+h*Y+p*I,s[5]=u*w+d*b+h*$+p*j,s[9]=u*P+d*F+h*V+p*Q,s[13]=u*A+d*O+h*Z+p*oe,s[2]=x*T+v*y+m*Y+f*I,s[6]=x*w+v*b+m*$+f*j,s[10]=x*P+v*F+m*V+f*Q,s[14]=x*A+v*O+m*Z+f*oe,s[3]=g*T+_*y+S*Y+R*I,s[7]=g*w+_*b+S*$+R*j,s[11]=g*P+_*F+S*V+R*Q,s[15]=g*A+_*O+S*Z+R*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],x=e[3],v=e[7],m=e[11],f=e[15];return x*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*p-i*l*p)+v*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+f*(-r*a*u-n*l*d+n*a*h+r*o*d-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],x=e[12],v=e[13],m=e[14],f=e[15],g=d*m*c-v*h*c+v*l*p-a*m*p-d*l*f+a*h*f,_=x*h*c-u*m*c-x*l*p+o*m*p+u*l*f-o*h*f,S=u*v*c-x*d*c+x*a*p-o*v*p-u*a*f+o*d*f,R=x*d*l-u*v*l-x*a*h+o*v*h+u*a*m-o*d*m,T=n*g+i*_+r*S+s*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=g*w,e[1]=(v*h*s-d*m*s-v*r*p+i*m*p+d*r*f-i*h*f)*w,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*f+i*l*f)*w,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*p-i*l*p)*w,e[4]=_*w,e[5]=(u*m*s-x*h*s+x*r*p-n*m*p-u*r*f+n*h*f)*w,e[6]=(x*l*s-o*m*s-x*r*c+n*m*c+o*r*f-n*l*f)*w,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*p+n*l*p)*w,e[8]=S*w,e[9]=(x*d*s-u*v*s-x*i*p+n*v*p+u*i*f-n*d*f)*w,e[10]=(o*v*s-x*a*s+x*i*c-n*v*c-o*i*f+n*a*f)*w,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*p-n*a*p)*w,e[12]=R*w,e[13]=(u*v*r-x*d*r+x*i*h-n*v*h-u*i*m+n*d*m)*w,e[14]=(x*a*r-o*v*r-x*i*l+n*v*l+o*i*m-n*a*m)*w,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*h+n*a*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,h=s*c,p=s*u,x=s*d,v=o*u,m=o*d,f=a*d,g=l*c,_=l*u,S=l*d,R=i.x,T=i.y,w=i.z;return r[0]=(1-(v+f))*R,r[1]=(p+S)*R,r[2]=(x-_)*R,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(h+f))*T,r[6]=(m+g)*T,r[7]=0,r[8]=(x+_)*w,r[9]=(m-g)*w,r[10]=(1-(h+v))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Qr.set(r[0],r[1],r[2]).length();const o=Qr.set(r[4],r[5],r[6]).length(),a=Qr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ln.copy(this);const c=1/s,u=1/o,d=1/a;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=d,Ln.elements[9]*=d,Ln.elements[10]*=d,n.setFromRotationMatrix(Ln),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=vi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,x;if(a===vi)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===cc)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=vi){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),h=(n+e)*c,p=(i+r)*u;let x,v;if(a===vi)x=(o+s)*d,v=-2*d;else if(a===cc)x=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Qr=new k,Ln=new mt,f1=new k(0,0,0),d1=new k(1,1,1),Ii=new k,Ya=new k,un=new k,gm=new mt,vm=new Or;class ni{constructor(e=0,n=0,i=0,r=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return gm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return vm.setFromEuler(this),this.setFromQuaternion(vm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class o_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let h1=0;const _m=new k,Jr=new Or,oi=new mt,$a=new k,wo=new k,p1=new k,m1=new Or,xm=new k(1,0,0),ym=new k(0,1,0),Sm=new k(0,0,1),Mm={type:"added"},g1={type:"removed"},es={type:"childadded",child:null},Tu={type:"childremoved",child:null};class bt extends Hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:h1++}),this.uuid=ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new k,n=new ni,i=new Or,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new Be}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new o_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Jr.setFromAxisAngle(e,n),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(e,n){return Jr.setFromAxisAngle(e,n),this.quaternion.premultiply(Jr),this}rotateX(e){return this.rotateOnAxis(xm,e)}rotateY(e){return this.rotateOnAxis(ym,e)}rotateZ(e){return this.rotateOnAxis(Sm,e)}translateOnAxis(e,n){return _m.copy(e).applyQuaternion(this.quaternion),this.position.add(_m.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(xm,e)}translateY(e){return this.translateOnAxis(ym,e)}translateZ(e){return this.translateOnAxis(Sm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?$a.copy(e):$a.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(wo,$a,this.up):oi.lookAt($a,wo,this.up),this.quaternion.setFromRotationMatrix(oi),r&&(oi.extractRotation(r.matrixWorld),Jr.setFromRotationMatrix(oi),this.quaternion.premultiply(Jr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mm),es.child=e,this.dispatchEvent(es),es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(g1),Tu.child=e,this.dispatchEvent(Tu),Tu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mm),es.child=e,this.dispatchEvent(es),es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,e,p1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,m1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}bt.DEFAULT_UP=new k(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new k,ai=new k,Au=new k,li=new k,ts=new k,ns=new k,Em=new k,Cu=new k,Ru=new k,bu=new k;class Zn{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Dn.subVectors(e,n),r.cross(Dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Dn.subVectors(r,n),ai.subVectors(i,n),Au.subVectors(e,n);const o=Dn.dot(Dn),a=Dn.dot(ai),l=Dn.dot(Au),c=ai.dot(ai),u=ai.dot(Au),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-a*u)*h,x=(o*u-a*l)*h;return s.set(1-p-x,x,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,li.x),l.addScaledVector(o,li.y),l.addScaledVector(a,li.z),l)}static isFrontFacing(e,n,i,r){return Dn.subVectors(i,n),ai.subVectors(e,n),Dn.cross(ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Dn.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Zn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ts.subVectors(r,i),ns.subVectors(s,i),Cu.subVectors(e,i);const l=ts.dot(Cu),c=ns.dot(Cu);if(l<=0&&c<=0)return n.copy(i);Ru.subVectors(e,r);const u=ts.dot(Ru),d=ns.dot(Ru);if(u>=0&&d<=u)return n.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(ts,o);bu.subVectors(e,s);const p=ts.dot(bu),x=ns.dot(bu);if(x>=0&&p<=x)return n.copy(s);const v=p*c-l*x;if(v<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(ns,a);const m=u*x-p*d;if(m<=0&&d-u>=0&&p-x>=0)return Em.subVectors(s,r),a=(d-u)/(d-u+(p-x)),n.copy(r).addScaledVector(Em,a);const f=1/(m+v+h);return o=v*f,a=h*f,n.copy(i).addScaledVector(ts,o).addScaledVector(ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const a_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},qa={h:0,s:0,l:0};function Pu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ve{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=Ch(e,1),n=Xt(n,0,1),i=Xt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Pu(o,s,e+1/3),this.g=Pu(o,s,e),this.b=Pu(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=jn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=jn){const i=a_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}copyLinearToSRGB(e){return this.r=vu(e.r),this.g=vu(e.g),this.b=vu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return Qe.fromWorkingColorSpace(Gt.copy(this),e),Math.round(Xt(Gt.r*255,0,255))*65536+Math.round(Xt(Gt.g*255,0,255))*256+Math.round(Xt(Gt.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Gt.copy(this),n);const i=Gt.r,r=Gt.g,s=Gt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Gt.copy(this),n),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=jn){Qe.fromWorkingColorSpace(Gt.copy(this),e);const n=Gt.r,i=Gt.g,r=Gt.b;return e!==jn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+n,Ni.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ni),e.getHSL(qa);const i=Wo(Ni.h,qa.h,n),r=Wo(Ni.s,qa.s,n),s=Wo(Ni.l,qa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Ve;Ve.NAMES=a_;let v1=0;class so extends Hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:v1++}),this.uuid=ro(),this.name="",this.type="Material",this.blending=Is,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zf,this.blendDst=Hf,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=sc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(i.blending=this.blending),this.side!==ir&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zf&&(i.blendSrc=this.blendSrc),this.blendDst!==Hf&&(i.blendDst=this.blendDst),this.blendEquation!==xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==sc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class l_ extends so{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new k,Ka=new Ne;class ti{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=cm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Xo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ka.fromBufferAttribute(this,n),Ka.applyMatrix3(e),this.setXY(n,Ka.x,Ka.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=fs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Yt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=fs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=fs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=fs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=fs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array),s=Yt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cm&&(e.usage=this.usage),e}}class c_ extends ti{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class u_ extends ti{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class zn extends ti{constructor(e,n,i){super(new Float32Array(e),n,i)}}let _1=0;const yn=new mt,Lu=new bt,is=new k,fn=new _a,To=new _a,Dt=new k;class Ti extends Hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_1++}),this.uuid=ro(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(i_(e)?u_:c_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,n,i){return yn.makeTranslation(e,n,i),this.applyMatrix4(yn),this}scale(e,n,i){return yn.makeScale(e,n,i),this.applyMatrix4(yn),this}lookAt(e){return Lu.lookAt(e),Lu.updateMatrix(),this.applyMatrix4(Lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new zn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _a);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];To.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(fn.min,To.min),fn.expandByPoint(Dt),Dt.addVectors(fn.max,To.max),fn.expandByPoint(Dt)):(fn.expandByPoint(To.min),fn.expandByPoint(To.max))}fn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Dt.fromBufferAttribute(a,c),l&&(is.fromBufferAttribute(e,c),Dt.add(is)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ti(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new k,l[P]=new k;const c=new k,u=new k,d=new k,h=new Ne,p=new Ne,x=new Ne,v=new k,m=new k;function f(P,A,y){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,A),d.fromBufferAttribute(i,y),h.fromBufferAttribute(s,P),p.fromBufferAttribute(s,A),x.fromBufferAttribute(s,y),u.sub(c),d.sub(c),p.sub(h),x.sub(h);const b=1/(p.x*x.y-x.x*p.y);isFinite(b)&&(v.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(b),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(b),a[P].add(v),a[A].add(v),a[y].add(v),l[P].add(m),l[A].add(m),l[y].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let P=0,A=g.length;P<A;++P){const y=g[P],b=y.start,F=y.count;for(let O=b,Y=b+F;O<Y;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const _=new k,S=new k,R=new k,T=new k;function w(P){R.fromBufferAttribute(r,P),T.copy(R);const A=a[P];_.copy(A),_.sub(R.multiplyScalar(R.dot(A))).normalize(),S.crossVectors(T,A);const b=S.dot(l[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,b)}for(let P=0,A=g.length;P<A;++P){const y=g[P],b=y.start,F=y.count;for(let O=b,Y=b+F;O<Y;O+=3)w(e.getX(O+0)),w(e.getX(O+1)),w(e.getX(O+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ti(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,u=new k,d=new k;if(e)for(let h=0,p=e.count;h<p;h+=3){const x=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Dt.fromBufferAttribute(e,n),Dt.normalize(),e.setXYZ(n,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let p=0,x=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let f=0;f<u;f++)h[x++]=c[p++]}return new ti(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ti,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wm=new mt,dr=new Rh,Za=new Nc,Tm=new k,rs=new k,ss=new k,os=new k,Du=new k,Qa=new k,Ja=new Ne,el=new Ne,tl=new Ne,Am=new k,Cm=new k,Rm=new k,nl=new k,il=new k;class Qn extends bt{constructor(e=new Ti,n=new l_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Qa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Du.fromBufferAttribute(d,e),o?Qa.addScaledVector(Du,u):Qa.addScaledVector(Du.sub(n),u))}n.add(Qa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Za.copy(i.boundingSphere),Za.applyMatrix4(s),dr.copy(e.ray).recast(e.near),!(Za.containsPoint(dr.origin)===!1&&(dr.intersectSphere(Za,Tm)===null||dr.origin.distanceToSquared(Tm)>(e.far-e.near)**2))&&(wm.copy(s).invert(),dr.copy(e.ray).applyMatrix4(wm),!(i.boundingBox!==null&&dr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,dr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=h.length;x<v;x++){const m=h[x],f=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,R=_;S<R;S+=3){const T=a.getX(S),w=a.getX(S+1),P=a.getX(S+2);r=rl(this,f,e,i,c,u,d,T,w,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=x,f=v;m<f;m+=3){const g=a.getX(m),_=a.getX(m+1),S=a.getX(m+2);r=rl(this,o,e,i,c,u,d,g,_,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,v=h.length;x<v;x++){const m=h[x],f=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,R=_;S<R;S+=3){const T=S,w=S+1,P=S+2;r=rl(this,f,e,i,c,u,d,T,w,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=x,f=v;m<f;m+=3){const g=m,_=m+1,S=m+2;r=rl(this,o,e,i,c,u,d,g,_,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function x1(t,e,n,i,r,s,o,a){let l;if(e.side===on?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ir,a),l===null)return null;il.copy(a),il.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(il);return c<n.near||c>n.far?null:{distance:c,point:il.clone(),object:t}}function rl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,rs),t.getVertexPosition(l,ss),t.getVertexPosition(c,os);const u=x1(t,e,n,i,rs,ss,os,nl);if(u){r&&(Ja.fromBufferAttribute(r,a),el.fromBufferAttribute(r,l),tl.fromBufferAttribute(r,c),u.uv=Zn.getInterpolation(nl,rs,ss,os,Ja,el,tl,new Ne)),s&&(Ja.fromBufferAttribute(s,a),el.fromBufferAttribute(s,l),tl.fromBufferAttribute(s,c),u.uv1=Zn.getInterpolation(nl,rs,ss,os,Ja,el,tl,new Ne)),o&&(Am.fromBufferAttribute(o,a),Cm.fromBufferAttribute(o,l),Rm.fromBufferAttribute(o,c),u.normal=Zn.getInterpolation(nl,rs,ss,os,Am,Cm,Rm,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new k,materialIndex:0};Zn.getNormal(rs,ss,os,d.normal),u.face=d}return u}class oo extends Ti{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,p=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new zn(c,3)),this.setAttribute("normal",new zn(u,3)),this.setAttribute("uv",new zn(d,2));function x(v,m,f,g,_,S,R,T,w,P,A){const y=S/w,b=R/P,F=S/2,O=R/2,Y=T/2,$=w+1,V=P+1;let Z=0,I=0;const j=new k;for(let Q=0;Q<V;Q++){const oe=Q*b-O;for(let xe=0;xe<$;xe++){const He=xe*y-F;j[v]=He*g,j[m]=oe*_,j[f]=Y,c.push(j.x,j.y,j.z),j[v]=0,j[m]=0,j[f]=T>0?1:-1,u.push(j.x,j.y,j.z),d.push(xe/w),d.push(1-Q/P),Z+=1}}for(let Q=0;Q<P;Q++)for(let oe=0;oe<w;oe++){const xe=h+oe+$*Q,He=h+oe+$*(Q+1),K=h+(oe+1)+$*(Q+1),ne=h+(oe+1)+$*Q;l.push(xe,He,ne),l.push(He,K,ne),I+=6}a.addGroup(p,I,A),p+=I,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function eo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=eo(t[n]);for(const r in i)e[r]=i[r]}return e}function y1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function f_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const S1={clone:eo,merge:$t};var M1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,E1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rr extends so{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=M1,this.fragmentShader=E1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=eo(e.uniforms),this.uniformsGroups=y1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}let d_=class extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Ui=new k,bm=new Ne,Pm=new Ne;class hn extends d_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Js*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(Go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,n){return this.getViewBounds(e,bm,Pm),n.subVectors(Pm,bm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Go*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const as=-90,ls=1;class w1 extends bt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new hn(as,ls,e,n);r.layers=this.layers,this.add(r);const s=new hn(as,ls,e,n);s.layers=this.layers,this.add(s);const o=new hn(as,ls,e,n);o.layers=this.layers,this.add(o);const a=new hn(as,ls,e,n);a.layers=this.layers,this.add(a);const l=new hn(as,ls,e,n);l.layers=this.layers,this.add(l);const c=new hn(as,ls,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,h,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class h_ extends an{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:qs,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class T1 extends Fr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new h_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Fn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new oo(5,5,5),s=new rr({name:"CubemapFromEquirect",uniforms:eo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Qi});s.uniforms.tEquirect.value=n;const o=new Qn(r,s),a=n.minFilter;return n.minFilter===Tr&&(n.minFilter=Fn),new w1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Iu=new k,A1=new k,C1=new Be;class ki{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Iu.subVectors(i,n).cross(A1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Iu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||C1.getNormalMatrix(e),r=this.coplanarPoint(Iu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new Nc,sl=new k;class bh{constructor(e=new ki,n=new ki,i=new ki,r=new ki,s=new ki,o=new ki){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=vi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],p=r[8],x=r[9],v=r[10],m=r[11],f=r[12],g=r[13],_=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,m-p,S-f).normalize(),i[1].setComponents(l+s,h+c,m+p,S+f).normalize(),i[2].setComponents(l+o,h+u,m+x,S+g).normalize(),i[3].setComponents(l-o,h-u,m-x,S-g).normalize(),i[4].setComponents(l-a,h-d,m-v,S-_).normalize(),n===vi)i[5].setComponents(l+a,h+d,m+v,S+_).normalize();else if(n===cc)i[5].setComponents(a,d,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(sl.x=r.normal.x>0?e.max.x:e.min.x,sl.y=r.normal.y>0?e.max.y:e.min.y,sl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(sl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function p_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function R1(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l._updateRange,h=l.updateRanges;if(t.bindBuffer(c,a),d.count===-1&&h.length===0&&t.bufferSubData(c,0,u),h.length!==0){for(let p=0,x=h.length;p<x;p++){const v=h[p];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}d.count!==-1&&(t.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Uc extends Ti{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=n/l,p=[],x=[],v=[],m=[];for(let f=0;f<u;f++){const g=f*h-o;for(let _=0;_<c;_++){const S=_*d-s;x.push(S,-g,0),v.push(0,0,1),m.push(_/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<a;g++){const _=g+c*f,S=g+c*(f+1),R=g+1+c*(f+1),T=g+1+c*f;p.push(_,S,T),p.push(S,R,T)}this.setIndex(p),this.setAttribute("position",new zn(x,3)),this.setAttribute("normal",new zn(v,3)),this.setAttribute("uv",new zn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uc(e.width,e.height,e.widthSegments,e.heightSegments)}}var b1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,P1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,L1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,D1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,N1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,U1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,F1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,k1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,B1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,z1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,H1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,V1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,G1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,W1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,X1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,j1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Y1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,q1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,K1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Z1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Q1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,J1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,eE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sE="gl_FragColor = linearToOutputTexel( gl_FragColor );",oE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,aE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,uE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_E=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,SE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ME=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,EE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,TE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,AE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,CE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,RE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,PE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,UE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,FE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,OE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,VE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,XE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,YE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$E=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,QE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ew=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ow=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,fw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_w=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ew=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ww=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Uw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Fw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ow=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ww=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Yw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$w=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Jw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,iT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,aT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:b1,alphahash_pars_fragment:P1,alphamap_fragment:L1,alphamap_pars_fragment:D1,alphatest_fragment:I1,alphatest_pars_fragment:N1,aomap_fragment:U1,aomap_pars_fragment:F1,batching_pars_vertex:O1,batching_vertex:k1,begin_vertex:B1,beginnormal_vertex:z1,bsdfs:H1,iridescence_fragment:V1,bumpmap_pars_fragment:G1,clipping_planes_fragment:W1,clipping_planes_pars_fragment:X1,clipping_planes_pars_vertex:j1,clipping_planes_vertex:Y1,color_fragment:$1,color_pars_fragment:q1,color_pars_vertex:K1,color_vertex:Z1,common:Q1,cube_uv_reflection_fragment:J1,defaultnormal_vertex:eE,displacementmap_pars_vertex:tE,displacementmap_vertex:nE,emissivemap_fragment:iE,emissivemap_pars_fragment:rE,colorspace_fragment:sE,colorspace_pars_fragment:oE,envmap_fragment:aE,envmap_common_pars_fragment:lE,envmap_pars_fragment:cE,envmap_pars_vertex:uE,envmap_physical_pars_fragment:SE,envmap_vertex:fE,fog_vertex:dE,fog_pars_vertex:hE,fog_fragment:pE,fog_pars_fragment:mE,gradientmap_pars_fragment:gE,lightmap_pars_fragment:vE,lights_lambert_fragment:_E,lights_lambert_pars_fragment:xE,lights_pars_begin:yE,lights_toon_fragment:ME,lights_toon_pars_fragment:EE,lights_phong_fragment:wE,lights_phong_pars_fragment:TE,lights_physical_fragment:AE,lights_physical_pars_fragment:CE,lights_fragment_begin:RE,lights_fragment_maps:bE,lights_fragment_end:PE,logdepthbuf_fragment:LE,logdepthbuf_pars_fragment:DE,logdepthbuf_pars_vertex:IE,logdepthbuf_vertex:NE,map_fragment:UE,map_pars_fragment:FE,map_particle_fragment:OE,map_particle_pars_fragment:kE,metalnessmap_fragment:BE,metalnessmap_pars_fragment:zE,morphinstance_vertex:HE,morphcolor_vertex:VE,morphnormal_vertex:GE,morphtarget_pars_vertex:WE,morphtarget_vertex:XE,normal_fragment_begin:jE,normal_fragment_maps:YE,normal_pars_fragment:$E,normal_pars_vertex:qE,normal_vertex:KE,normalmap_pars_fragment:ZE,clearcoat_normal_fragment_begin:QE,clearcoat_normal_fragment_maps:JE,clearcoat_pars_fragment:ew,iridescence_pars_fragment:tw,opaque_fragment:nw,packing:iw,premultiplied_alpha_fragment:rw,project_vertex:sw,dithering_fragment:ow,dithering_pars_fragment:aw,roughnessmap_fragment:lw,roughnessmap_pars_fragment:cw,shadowmap_pars_fragment:uw,shadowmap_pars_vertex:fw,shadowmap_vertex:dw,shadowmask_pars_fragment:hw,skinbase_vertex:pw,skinning_pars_vertex:mw,skinning_vertex:gw,skinnormal_vertex:vw,specularmap_fragment:_w,specularmap_pars_fragment:xw,tonemapping_fragment:yw,tonemapping_pars_fragment:Sw,transmission_fragment:Mw,transmission_pars_fragment:Ew,uv_pars_fragment:ww,uv_pars_vertex:Tw,uv_vertex:Aw,worldpos_vertex:Cw,background_vert:Rw,background_frag:bw,backgroundCube_vert:Pw,backgroundCube_frag:Lw,cube_vert:Dw,cube_frag:Iw,depth_vert:Nw,depth_frag:Uw,distanceRGBA_vert:Fw,distanceRGBA_frag:Ow,equirect_vert:kw,equirect_frag:Bw,linedashed_vert:zw,linedashed_frag:Hw,meshbasic_vert:Vw,meshbasic_frag:Gw,meshlambert_vert:Ww,meshlambert_frag:Xw,meshmatcap_vert:jw,meshmatcap_frag:Yw,meshnormal_vert:$w,meshnormal_frag:qw,meshphong_vert:Kw,meshphong_frag:Zw,meshphysical_vert:Qw,meshphysical_frag:Jw,meshtoon_vert:eT,meshtoon_frag:tT,points_vert:nT,points_frag:iT,shadow_vert:rT,shadow_frag:sT,sprite_vert:oT,sprite_frag:aT},ce={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Yn={basic:{uniforms:$t([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:$t([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:$t([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:$t([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:$t([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:$t([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:$t([ce.points,ce.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:$t([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:$t([ce.common,ce.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:$t([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:$t([ce.sprite,ce.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:$t([ce.common,ce.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:$t([ce.lights,ce.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Yn.physical={uniforms:$t([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const ol={r:0,b:0,g:0},pr=new ni,lT=new mt;function cT(t,e,n,i,r,s,o){const a=new Ve(0);let l=s===!0?0:1,c,u,d=null,h=0,p=null;function x(g){let _=g.isScene===!0?g.background:null;return _&&_.isTexture&&(_=(g.backgroundBlurriness>0?n:e).get(_)),_}function v(g){let _=!1;const S=x(g);S===null?f(a,l):S&&S.isColor&&(f(S,1),_=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,_){const S=x(_);S&&(S.isCubeTexture||S.mapping===Dc)?(u===void 0&&(u=new Qn(new oo(1,1,1),new rr({name:"BackgroundCubeMaterial",uniforms:eo(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),pr.copy(_.backgroundRotation),pr.x*=-1,pr.y*=-1,pr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(lT.makeRotationFromEuler(pr)),u.material.toneMapped=Qe.getTransfer(S.colorSpace)!==it,(d!==S||h!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=S,h=S.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Qn(new Uc(2,2),new rr({name:"BackgroundMaterial",uniforms:eo(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(S.colorSpace)!==it,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||h!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=S,h=S.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function f(g,_){g.getRGB(ol,f_(t)),i.buffers.color.setClear(ol.r,ol.g,ol.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(g,_=1){a.set(g),l=_,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,f(a,l)},render:v,addToRenderList:m}}function uT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(y,b,F,O,Y){let $=!1;const V=d(O,F,b);s!==V&&(s=V,c(s.object)),$=p(y,O,F,Y),$&&x(y,O,F,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,S(y,b,F,O),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function u(y){return t.deleteVertexArray(y)}function d(y,b,F){const O=F.wireframe===!0;let Y=i[y.id];Y===void 0&&(Y={},i[y.id]=Y);let $=Y[b.id];$===void 0&&($={},Y[b.id]=$);let V=$[O];return V===void 0&&(V=h(l()),$[O]=V),V}function h(y){const b=[],F=[],O=[];for(let Y=0;Y<n;Y++)b[Y]=0,F[Y]=0,O[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:F,attributeDivisors:O,object:y,attributes:{},index:null}}function p(y,b,F,O){const Y=s.attributes,$=b.attributes;let V=0;const Z=F.getAttributes();for(const I in Z)if(Z[I].location>=0){const Q=Y[I];let oe=$[I];if(oe===void 0&&(I==="instanceMatrix"&&y.instanceMatrix&&(oe=y.instanceMatrix),I==="instanceColor"&&y.instanceColor&&(oe=y.instanceColor)),Q===void 0||Q.attribute!==oe||oe&&Q.data!==oe.data)return!0;V++}return s.attributesNum!==V||s.index!==O}function x(y,b,F,O){const Y={},$=b.attributes;let V=0;const Z=F.getAttributes();for(const I in Z)if(Z[I].location>=0){let Q=$[I];Q===void 0&&(I==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),I==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor));const oe={};oe.attribute=Q,Q&&Q.data&&(oe.data=Q.data),Y[I]=oe,V++}s.attributes=Y,s.attributesNum=V,s.index=O}function v(){const y=s.newAttributes;for(let b=0,F=y.length;b<F;b++)y[b]=0}function m(y){f(y,0)}function f(y,b){const F=s.newAttributes,O=s.enabledAttributes,Y=s.attributeDivisors;F[y]=1,O[y]===0&&(t.enableVertexAttribArray(y),O[y]=1),Y[y]!==b&&(t.vertexAttribDivisor(y,b),Y[y]=b)}function g(){const y=s.newAttributes,b=s.enabledAttributes;for(let F=0,O=b.length;F<O;F++)b[F]!==y[F]&&(t.disableVertexAttribArray(F),b[F]=0)}function _(y,b,F,O,Y,$,V){V===!0?t.vertexAttribIPointer(y,b,F,Y,$):t.vertexAttribPointer(y,b,F,O,Y,$)}function S(y,b,F,O){v();const Y=O.attributes,$=F.getAttributes(),V=b.defaultAttributeValues;for(const Z in $){const I=$[Z];if(I.location>=0){let j=Y[Z];if(j===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(j=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(j=y.instanceColor)),j!==void 0){const Q=j.normalized,oe=j.itemSize,xe=e.get(j);if(xe===void 0)continue;const He=xe.buffer,K=xe.type,ne=xe.bytesPerElement,ue=K===t.INT||K===t.UNSIGNED_INT||j.gpuType===yh;if(j.isInterleavedBufferAttribute){const fe=j.data,Ue=fe.stride,Oe=j.offset;if(fe.isInstancedInterleavedBuffer){for(let ze=0;ze<I.locationSize;ze++)f(I.location+ze,fe.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ze=0;ze<I.locationSize;ze++)m(I.location+ze);t.bindBuffer(t.ARRAY_BUFFER,He);for(let ze=0;ze<I.locationSize;ze++)_(I.location+ze,oe/I.locationSize,K,Q,Ue*ne,(Oe+oe/I.locationSize*ze)*ne,ue)}else{if(j.isInstancedBufferAttribute){for(let fe=0;fe<I.locationSize;fe++)f(I.location+fe,j.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let fe=0;fe<I.locationSize;fe++)m(I.location+fe);t.bindBuffer(t.ARRAY_BUFFER,He);for(let fe=0;fe<I.locationSize;fe++)_(I.location+fe,oe/I.locationSize,K,Q,oe*ne,oe/I.locationSize*fe*ne,ue)}}else if(V!==void 0){const Q=V[Z];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(I.location,Q);break;case 3:t.vertexAttrib3fv(I.location,Q);break;case 4:t.vertexAttrib4fv(I.location,Q);break;default:t.vertexAttrib1fv(I.location,Q)}}}}g()}function R(){P();for(const y in i){const b=i[y];for(const F in b){const O=b[F];for(const Y in O)u(O[Y].object),delete O[Y];delete b[F]}delete i[y]}}function T(y){if(i[y.id]===void 0)return;const b=i[y.id];for(const F in b){const O=b[F];for(const Y in O)u(O[Y].object),delete O[Y];delete b[F]}delete i[y.id]}function w(y){for(const b in i){const F=i[b];if(F[y.id]===void 0)continue;const O=F[y.id];for(const Y in O)u(O[Y].object),delete O[Y];delete F[y.id]}}function P(){A(),o=!0,s!==r&&(s=r,c(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:A,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:g}}function fT(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let x=0;x<d;x++)p+=u[x];n.update(p,i,1)}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)o(c[x],u[x],h[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let x=0;for(let v=0;v<d;v++)x+=u[v];for(let v=0;v<h.length;v++)n.update(x,i,h[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function dT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==On&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const w=T===va&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ei&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==gi&&!w)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),f=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:f,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:S,maxSamples:R}}function hT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ki,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,p){const x=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!r||x===null||x.length===0||s&&!m)s?u(null):c();else{const g=s?0:i,_=g*4;let S=f.clippingState||null;l.value=S,S=u(x,h,_,p);for(let R=0;R!==_;++R)S[R]=n[R];f.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,x){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,x!==!0||m===null){const f=p+v*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,S=p;_!==v;++_,S+=4)o.copy(d[_]).applyMatrix4(g,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function pT(t){let e=new WeakMap;function n(o,a){return a===Vf?o.mapping=qs:a===Gf&&(o.mapping=Ks),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Vf||a===Gf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new T1(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class m_ extends d_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ts=4,Lm=[.125,.215,.35,.446,.526,.582],yr=20,Nu=new m_,Dm=new Ve;let Uu=null,Fu=0,Ou=0,ku=!1;const _r=(1+Math.sqrt(5))/2,cs=1/_r,Im=[new k(-_r,cs,0),new k(_r,cs,0),new k(-cs,0,_r),new k(cs,0,_r),new k(0,_r,-cs),new k(0,_r,cs),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class Nm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Uu=this._renderer.getRenderTarget(),Fu=this._renderer.getActiveCubeFace(),Ou=this._renderer.getActiveMipmapLevel(),ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uu,Fu,Ou),this._renderer.xr.enabled=ku,e.scissorTest=!1,al(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===qs||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uu=this._renderer.getRenderTarget(),Fu=this._renderer.getActiveCubeFace(),Ou=this._renderer.getActiveMipmapLevel(),ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:va,format:On,colorSpace:lr,depthBuffer:!1},r=Um(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Um(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mT(s)),this._blurMaterial=gT(s,e,n)}return r}_compileMaterial(e){const n=new Qn(this._lodPlanes[0],e);this._renderer.compile(n,Nu)}_sceneToCubeUV(e,n,i,r){const a=new hn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Dm),u.toneMapping=Ji,u.autoClear=!1;const p=new l_({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),x=new Qn(new oo,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Dm),v=!0);for(let f=0;f<6;f++){const g=f%3;g===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):g===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const _=this._cubeSize;al(r,g*_,f>2?_:0,_,_),u.setRenderTarget(r),v&&u.render(x,a),u.render(e,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===qs||e.mapping===Ks;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Om()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Qn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;al(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Nu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Im[(r-s-1)%Im.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Qn(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*yr-1),v=s/x,m=isFinite(s)?1+Math.floor(u*v):yr;m>yr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yr}`);const f=[];let g=0;for(let w=0;w<yr;++w){const P=w/v,A=Math.exp(-P*P/2);f.push(A),w===0?g+=A:w<m&&(g+=2*A)}for(let w=0;w<f.length;w++)f[w]=f[w]/g;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=x,h.mipInt.value=_-i;const S=this._sizeLods[r],R=3*S*(r>_-Ts?r-_+Ts:0),T=4*(this._cubeSize-S);al(n,R,T,3*S,2*S),l.setRenderTarget(n),l.render(d,Nu)}}function mT(t){const e=[],n=[],i=[];let r=t;const s=t-Ts+1+Lm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ts?l=Lm[o-t+Ts-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,x=6,v=3,m=2,f=1,g=new Float32Array(v*x*p),_=new Float32Array(m*x*p),S=new Float32Array(f*x*p);for(let T=0;T<p;T++){const w=T%3*2/3-1,P=T>2?0:-1,A=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];g.set(A,v*x*T),_.set(h,m*x*T);const y=[T,T,T,T,T,T];S.set(y,f*x*T)}const R=new Ti;R.setAttribute("position",new ti(g,v)),R.setAttribute("uv",new ti(_,m)),R.setAttribute("faceIndex",new ti(S,f)),e.push(R),r>Ts&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Um(t,e,n){const i=new Fr(t,e,n);return i.texture.mapping=Dc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function al(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function gT(t,e,n){const i=new Float32Array(yr),r=new k(0,1,0);return new rr({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Fm(){return new rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Om(){return new rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Ph(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Vf||l===Gf,u=l===qs||l===Ks;if(c||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Nm(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Nm(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function _T(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Xo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function xT(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const v=h.morphAttributes[x];for(let m=0,f=v.length;m<f;m++)e.remove(v[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const x in h)e.update(h[x],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const x in p){const v=p[x];for(let m=0,f=v.length;m<f;m++)e.update(v[m],t.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,x=d.attributes.position;let v=0;if(p!==null){const g=p.array;v=p.version;for(let _=0,S=g.length;_<S;_+=3){const R=g[_+0],T=g[_+1],w=g[_+2];h.push(R,T,T,w,w,R)}}else if(x!==void 0){const g=x.array;v=x.version;for(let _=0,S=g.length/3-1;_<S;_+=3){const R=_+0,T=_+1,w=_+2;h.push(R,T,T,w,w,R)}}else return;const m=new(i_(h)?u_:c_)(h,1);m.version=v;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function yT(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,x){x!==0&&(t.drawElementsInstanced(i,p,s,h*o,x),n.update(p,i,x))}function u(h,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,x);let m=0;for(let f=0;f<x;f++)m+=p[f];n.update(m,i,1)}function d(h,p,x,v){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/o,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,v,0,x);let f=0;for(let g=0;g<x;g++)f+=p[g];for(let g=0;g<v.length;g++)n.update(f,i,v[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function ST(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function MT(t,e,n){const i=new WeakMap,r=new Ct;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let y=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;h!==void 0&&h.texture.dispose();const x=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let S=0;x===!0&&(S=1),v===!0&&(S=2),m===!0&&(S=3);let R=a.attributes.position.count*S,T=1;R>e.maxTextureSize&&(T=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const w=new Float32Array(R*T*4*d),P=new s_(w,R,T,d);P.type=gi,P.needsUpdate=!0;const A=S*4;for(let b=0;b<d;b++){const F=f[b],O=g[b],Y=_[b],$=R*T*4*b;for(let V=0;V<F.count;V++){const Z=V*A;x===!0&&(r.fromBufferAttribute(F,V),w[$+Z+0]=r.x,w[$+Z+1]=r.y,w[$+Z+2]=r.z,w[$+Z+3]=0),v===!0&&(r.fromBufferAttribute(O,V),w[$+Z+4]=r.x,w[$+Z+5]=r.y,w[$+Z+6]=r.z,w[$+Z+7]=0),m===!0&&(r.fromBufferAttribute(Y,V),w[$+Z+8]=r.x,w[$+Z+9]=r.y,w[$+Z+10]=r.z,w[$+Z+11]=Y.itemSize===4?r.w:1)}}h={count:d,texture:P,size:new Ne(R,T)},i.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const v=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function ET(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class g_ extends an{constructor(e,n,i,r,s,o,a,l,c,u=Ns){if(u!==Ns&&u!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ns&&(i=Ur),i===void 0&&u===Qs&&(i=Zs),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:wn,this.minFilter=l!==void 0?l:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const v_=new an,km=new g_(1,1),__=new s_,x_=new c1,y_=new h_,Bm=[],zm=[],Hm=new Float32Array(16),Vm=new Float32Array(9),Gm=new Float32Array(4);function ao(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Bm[r];if(s===void 0&&(s=new Float32Array(r),Bm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Lt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Fc(t,e){let n=zm[e];n===void 0&&(n=new Int32Array(e),zm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function wT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function TT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2fv(this.addr,e),Lt(n,e)}}function AT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pt(n,e))return;t.uniform3fv(this.addr,e),Lt(n,e)}}function CT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4fv(this.addr,e),Lt(n,e)}}function RT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Gm.set(i),t.uniformMatrix2fv(this.addr,!1,Gm),Lt(n,i)}}function bT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Vm.set(i),t.uniformMatrix3fv(this.addr,!1,Vm),Lt(n,i)}}function PT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Hm.set(i),t.uniformMatrix4fv(this.addr,!1,Hm),Lt(n,i)}}function LT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function DT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2iv(this.addr,e),Lt(n,e)}}function IT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3iv(this.addr,e),Lt(n,e)}}function NT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4iv(this.addr,e),Lt(n,e)}}function UT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function FT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2uiv(this.addr,e),Lt(n,e)}}function OT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3uiv(this.addr,e),Lt(n,e)}}function kT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4uiv(this.addr,e),Lt(n,e)}}function BT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(km.compareFunction=n_,s=km):s=v_,n.setTexture2D(e||s,r)}function zT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||x_,r)}function HT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||y_,r)}function VT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||__,r)}function GT(t){switch(t){case 5126:return wT;case 35664:return TT;case 35665:return AT;case 35666:return CT;case 35674:return RT;case 35675:return bT;case 35676:return PT;case 5124:case 35670:return LT;case 35667:case 35671:return DT;case 35668:case 35672:return IT;case 35669:case 35673:return NT;case 5125:return UT;case 36294:return FT;case 36295:return OT;case 36296:return kT;case 35678:case 36198:case 36298:case 36306:case 35682:return BT;case 35679:case 36299:case 36307:return zT;case 35680:case 36300:case 36308:case 36293:return HT;case 36289:case 36303:case 36311:case 36292:return VT}}function WT(t,e){t.uniform1fv(this.addr,e)}function XT(t,e){const n=ao(e,this.size,2);t.uniform2fv(this.addr,n)}function jT(t,e){const n=ao(e,this.size,3);t.uniform3fv(this.addr,n)}function YT(t,e){const n=ao(e,this.size,4);t.uniform4fv(this.addr,n)}function $T(t,e){const n=ao(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function qT(t,e){const n=ao(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function KT(t,e){const n=ao(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ZT(t,e){t.uniform1iv(this.addr,e)}function QT(t,e){t.uniform2iv(this.addr,e)}function JT(t,e){t.uniform3iv(this.addr,e)}function eA(t,e){t.uniform4iv(this.addr,e)}function tA(t,e){t.uniform1uiv(this.addr,e)}function nA(t,e){t.uniform2uiv(this.addr,e)}function iA(t,e){t.uniform3uiv(this.addr,e)}function rA(t,e){t.uniform4uiv(this.addr,e)}function sA(t,e,n){const i=this.cache,r=e.length,s=Fc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||v_,s[o])}function oA(t,e,n){const i=this.cache,r=e.length,s=Fc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||x_,s[o])}function aA(t,e,n){const i=this.cache,r=e.length,s=Fc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||y_,s[o])}function lA(t,e,n){const i=this.cache,r=e.length,s=Fc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||__,s[o])}function cA(t){switch(t){case 5126:return WT;case 35664:return XT;case 35665:return jT;case 35666:return YT;case 35674:return $T;case 35675:return qT;case 35676:return KT;case 5124:case 35670:return ZT;case 35667:case 35671:return QT;case 35668:case 35672:return JT;case 35669:case 35673:return eA;case 5125:return tA;case 36294:return nA;case 36295:return iA;case 36296:return rA;case 35678:case 36198:case 36298:case 36306:case 35682:return sA;case 35679:case 36299:case 36307:return oA;case 35680:case 36300:case 36308:case 36293:return aA;case 36289:case 36303:case 36311:case 36292:return lA}}class uA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=GT(n.type)}}class fA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=cA(n.type)}}class dA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Bu=/(\w+)(\])?(\[|\.)?/g;function Wm(t,e){t.seq.push(e),t.map[e.id]=e}function hA(t,e,n){const i=t.name,r=i.length;for(Bu.lastIndex=0;;){const s=Bu.exec(i),o=Bu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Wm(n,c===void 0?new uA(a,t,e):new fA(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new dA(a),Wm(n,d)),n=d}}}class Pl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);hA(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Xm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const pA=37297;let mA=0;function gA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function vA(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let i;switch(e===n?i="":e===lc&&n===ac?i="LinearDisplayP3ToLinearSRGB":e===ac&&n===lc&&(i="LinearSRGBToLinearDisplayP3"),t){case lr:case Ic:return[i,"LinearTransferOETF"];case jn:case Ah:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function jm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+gA(t.getShaderSource(e),o)}else return r}function _A(t,e){const n=vA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function xA(t,e){let n;switch(e){case SM:n="Linear";break;case MM:n="Reinhard";break;case EM:n="OptimizedCineon";break;case wM:n="ACESFilmic";break;case AM:n="AgX";break;case CM:n="Neutral";break;case TM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ll=new k;function yA(){Qe.getLuminanceCoefficients(ll);const t=ll.x.toFixed(4),e=ll.y.toFixed(4),n=ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function SA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function MA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function EA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Io(t){return t!==""}function Ym(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $m(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wA=/^[ \t]*#include +<([\w\d./]+)>/gm;function _d(t){return t.replace(wA,AA)}const TA=new Map;function AA(t,e){let n=ke[e];if(n===void 0){const i=TA.get(e);if(i!==void 0)n=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return _d(n)}const CA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qm(t){return t.replace(CA,RA)}function RA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Km(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Gv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===YS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ci&&(e="SHADOWMAP_TYPE_VSM"),e}function PA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case qs:case Ks:e="ENVMAP_TYPE_CUBE";break;case Dc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function LA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ks:e="ENVMAP_MODE_REFRACTION";break}return e}function DA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case xh:e="ENVMAP_BLENDING_MULTIPLY";break;case xM:e="ENVMAP_BLENDING_MIX";break;case yM:e="ENVMAP_BLENDING_ADD";break}return e}function IA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function NA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=bA(n),c=PA(n),u=LA(n),d=DA(n),h=IA(n),p=SA(n),x=MA(s),v=r.createProgram();let m,f,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Io).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Io).join(`
`),f.length>0&&(f+=`
`)):(m=[Km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),f=[Km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ji?"#define TONE_MAPPING":"",n.toneMapping!==Ji?ke.tonemapping_pars_fragment:"",n.toneMapping!==Ji?xA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,_A("linearToOutputTexel",n.outputColorSpace),yA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Io).join(`
`)),o=_d(o),o=Ym(o,n),o=$m(o,n),a=_d(a),a=Ym(a,n),a=$m(a,n),o=qm(o),a=qm(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===um?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===um?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=g+m+o,S=g+f+a,R=Xm(r,r.VERTEX_SHADER,_),T=Xm(r,r.FRAGMENT_SHADER,S);r.attachShader(v,R),r.attachShader(v,T),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(b){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(v).trim(),O=r.getShaderInfoLog(R).trim(),Y=r.getShaderInfoLog(T).trim();let $=!0,V=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,R,T);else{const Z=jm(r,R,"vertex"),I=jm(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+F+`
`+Z+`
`+I)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||Y==="")&&(V=!1);V&&(b.diagnostics={runnable:$,programLog:F,vertexShader:{log:O,prefix:m},fragmentShader:{log:Y,prefix:f}})}r.deleteShader(R),r.deleteShader(T),P=new Pl(r,v),A=EA(r,v)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let A;this.getAttributes=function(){return A===void 0&&w(this),A};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(v,pA)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=mA++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=T,this}let UA=0;class FA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new OA(e),n.set(e,i)),i}}class OA{constructor(e){this.id=UA++,this.code=e,this.usedTimes=0}}function kA(t,e,n,i,r,s,o){const a=new o_,l=new FA,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(A){return c.add(A),A===0?"uv":`uv${A}`}function m(A,y,b,F,O){const Y=F.fog,$=O.geometry,V=A.isMeshStandardMaterial?F.environment:null,Z=(A.isMeshStandardMaterial?n:e).get(A.envMap||V),I=Z&&Z.mapping===Dc?Z.image.height:null,j=x[A.type];A.precision!==null&&(p=r.getMaxPrecision(A.precision),p!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",p,"instead."));const Q=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,oe=Q!==void 0?Q.length:0;let xe=0;$.morphAttributes.position!==void 0&&(xe=1),$.morphAttributes.normal!==void 0&&(xe=2),$.morphAttributes.color!==void 0&&(xe=3);let He,K,ne,ue;if(j){const Xe=Yn[j];He=Xe.vertexShader,K=Xe.fragmentShader}else He=A.vertexShader,K=A.fragmentShader,l.update(A),ne=l.getVertexShaderID(A),ue=l.getFragmentShaderID(A);const fe=t.getRenderTarget(),Ue=O.isInstancedMesh===!0,Oe=O.isBatchedMesh===!0,ze=!!A.map,tt=!!A.matcap,D=!!Z,ut=!!A.aoMap,Ye=!!A.lightMap,$e=!!A.bumpMap,Se=!!A.normalMap,ft=!!A.displacementMap,Le=!!A.emissiveMap,Ie=!!A.metalnessMap,L=!!A.roughnessMap,E=A.anisotropy>0,W=A.clearcoat>0,ee=A.dispersion>0,ie=A.iridescence>0,J=A.sheen>0,we=A.transmission>0,le=E&&!!A.anisotropyMap,he=W&&!!A.clearcoatMap,Fe=W&&!!A.clearcoatNormalMap,se=W&&!!A.clearcoatRoughnessMap,pe=ie&&!!A.iridescenceMap,We=ie&&!!A.iridescenceThicknessMap,Ae=J&&!!A.sheenColorMap,ve=J&&!!A.sheenRoughnessMap,Re=!!A.specularMap,De=!!A.specularColorMap,st=!!A.specularIntensityMap,M=we&&!!A.transmissionMap,B=we&&!!A.thicknessMap,z=!!A.gradientMap,X=!!A.alphaMap,te=A.alphaTest>0,Me=!!A.alphaHash,be=!!A.extensions;let gt=Ji;A.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(gt=t.toneMapping);const Mt={shaderID:j,shaderType:A.type,shaderName:A.name,vertexShader:He,fragmentShader:K,defines:A.defines,customVertexShaderID:ne,customFragmentShaderID:ue,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:p,batching:Oe,batchingColor:Oe&&O._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&O.instanceColor!==null,instancingMorph:Ue&&O.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:fe===null?t.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:lr,alphaToCoverage:!!A.alphaToCoverage,map:ze,matcap:tt,envMap:D,envMapMode:D&&Z.mapping,envMapCubeUVHeight:I,aoMap:ut,lightMap:Ye,bumpMap:$e,normalMap:Se,displacementMap:h&&ft,emissiveMap:Le,normalMapObjectSpace:Se&&A.normalMapType===LM,normalMapTangentSpace:Se&&A.normalMapType===t_,metalnessMap:Ie,roughnessMap:L,anisotropy:E,anisotropyMap:le,clearcoat:W,clearcoatMap:he,clearcoatNormalMap:Fe,clearcoatRoughnessMap:se,dispersion:ee,iridescence:ie,iridescenceMap:pe,iridescenceThicknessMap:We,sheen:J,sheenColorMap:Ae,sheenRoughnessMap:ve,specularMap:Re,specularColorMap:De,specularIntensityMap:st,transmission:we,transmissionMap:M,thicknessMap:B,gradientMap:z,opaque:A.transparent===!1&&A.blending===Is&&A.alphaToCoverage===!1,alphaMap:X,alphaTest:te,alphaHash:Me,combine:A.combine,mapUv:ze&&v(A.map.channel),aoMapUv:ut&&v(A.aoMap.channel),lightMapUv:Ye&&v(A.lightMap.channel),bumpMapUv:$e&&v(A.bumpMap.channel),normalMapUv:Se&&v(A.normalMap.channel),displacementMapUv:ft&&v(A.displacementMap.channel),emissiveMapUv:Le&&v(A.emissiveMap.channel),metalnessMapUv:Ie&&v(A.metalnessMap.channel),roughnessMapUv:L&&v(A.roughnessMap.channel),anisotropyMapUv:le&&v(A.anisotropyMap.channel),clearcoatMapUv:he&&v(A.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&v(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&v(A.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&v(A.iridescenceMap.channel),iridescenceThicknessMapUv:We&&v(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&v(A.sheenColorMap.channel),sheenRoughnessMapUv:ve&&v(A.sheenRoughnessMap.channel),specularMapUv:Re&&v(A.specularMap.channel),specularColorMapUv:De&&v(A.specularColorMap.channel),specularIntensityMapUv:st&&v(A.specularIntensityMap.channel),transmissionMapUv:M&&v(A.transmissionMap.channel),thicknessMapUv:B&&v(A.thicknessMap.channel),alphaMapUv:X&&v(A.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Se||E),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!$.attributes.uv&&(ze||X),fog:!!Y,useFog:A.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:O.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:xe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:t.shadowMap.enabled&&b.length>0,shadowMapType:t.shadowMap.type,toneMapping:gt,decodeVideoTexture:ze&&A.map.isVideoTexture===!0&&Qe.getTransfer(A.map.colorSpace)===it,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Kn,flipSided:A.side===on,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:be&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&A.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function f(A){const y=[];if(A.shaderID?y.push(A.shaderID):(y.push(A.customVertexShaderID),y.push(A.customFragmentShaderID)),A.defines!==void 0)for(const b in A.defines)y.push(b),y.push(A.defines[b]);return A.isRawShaderMaterial===!1&&(g(y,A),_(y,A),y.push(t.outputColorSpace)),y.push(A.customProgramCacheKey),y.join()}function g(A,y){A.push(y.precision),A.push(y.outputColorSpace),A.push(y.envMapMode),A.push(y.envMapCubeUVHeight),A.push(y.mapUv),A.push(y.alphaMapUv),A.push(y.lightMapUv),A.push(y.aoMapUv),A.push(y.bumpMapUv),A.push(y.normalMapUv),A.push(y.displacementMapUv),A.push(y.emissiveMapUv),A.push(y.metalnessMapUv),A.push(y.roughnessMapUv),A.push(y.anisotropyMapUv),A.push(y.clearcoatMapUv),A.push(y.clearcoatNormalMapUv),A.push(y.clearcoatRoughnessMapUv),A.push(y.iridescenceMapUv),A.push(y.iridescenceThicknessMapUv),A.push(y.sheenColorMapUv),A.push(y.sheenRoughnessMapUv),A.push(y.specularMapUv),A.push(y.specularColorMapUv),A.push(y.specularIntensityMapUv),A.push(y.transmissionMapUv),A.push(y.thicknessMapUv),A.push(y.combine),A.push(y.fogExp2),A.push(y.sizeAttenuation),A.push(y.morphTargetsCount),A.push(y.morphAttributeCount),A.push(y.numDirLights),A.push(y.numPointLights),A.push(y.numSpotLights),A.push(y.numSpotLightMaps),A.push(y.numHemiLights),A.push(y.numRectAreaLights),A.push(y.numDirLightShadows),A.push(y.numPointLightShadows),A.push(y.numSpotLightShadows),A.push(y.numSpotLightShadowsWithMaps),A.push(y.numLightProbes),A.push(y.shadowMapType),A.push(y.toneMapping),A.push(y.numClippingPlanes),A.push(y.numClipIntersection),A.push(y.depthPacking)}function _(A,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.doubleSided&&a.enable(10),y.flipSided&&a.enable(11),y.useDepthPacking&&a.enable(12),y.dithering&&a.enable(13),y.transmission&&a.enable(14),y.sheen&&a.enable(15),y.opaque&&a.enable(16),y.pointsUvs&&a.enable(17),y.decodeVideoTexture&&a.enable(18),y.alphaToCoverage&&a.enable(19),A.push(a.mask)}function S(A){const y=x[A.type];let b;if(y){const F=Yn[y];b=S1.clone(F.uniforms)}else b=A.uniforms;return b}function R(A,y){let b;for(let F=0,O=u.length;F<O;F++){const Y=u[F];if(Y.cacheKey===y){b=Y,++b.usedTimes;break}}return b===void 0&&(b=new NA(t,y,A,s),u.push(b)),b}function T(A){if(--A.usedTimes===0){const y=u.indexOf(A);u[y]=u[u.length-1],u.pop(),A.destroy()}}function w(A){l.remove(A)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:R,releaseProgram:T,releaseShaderCache:w,programs:u,dispose:P}}function BA(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function zA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Zm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Qm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,p,x,v,m){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:x,renderOrder:d.renderOrder,z:v,group:m},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=x,f.renderOrder=d.renderOrder,f.z=v,f.group=m),e++,f}function a(d,h,p,x,v,m){const f=o(d,h,p,x,v,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(d,h,p,x,v,m){const f=o(d,h,p,x,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function c(d,h){n.length>1&&n.sort(d||zA),i.length>1&&i.sort(h||Zm),r.length>1&&r.sort(h||Zm)}function u(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function HA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Qm,t.set(i,[o])):r>=s.length?(o=new Qm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function VA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new Ve};break;case"SpotLight":n={position:new k,direction:new k,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":n={color:new Ve,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function GA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let WA=0;function XA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function jA(t){const e=new VA,n=GA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new mt,o=new mt;function a(c){let u=0,d=0,h=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,x=0,v=0,m=0,f=0,g=0,_=0,S=0,R=0,T=0,w=0;c.sort(XA);for(let A=0,y=c.length;A<y;A++){const b=c[A],F=b.color,O=b.intensity,Y=b.distance,$=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)u+=F.r*O,d+=F.g*O,h+=F.b*O;else if(b.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(b.sh.coefficients[V],O);w++}else if(b.isDirectionalLight){const V=e.get(b);if(V.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const Z=b.shadow,I=n.get(b);I.shadowIntensity=Z.intensity,I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=b.shadow.matrix,g++}i.directional[p]=V,p++}else if(b.isSpotLight){const V=e.get(b);V.position.setFromMatrixPosition(b.matrixWorld),V.color.copy(F).multiplyScalar(O),V.distance=Y,V.coneCos=Math.cos(b.angle),V.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),V.decay=b.decay,i.spot[v]=V;const Z=b.shadow;if(b.map&&(i.spotLightMap[R]=b.map,R++,Z.updateMatrices(b),b.castShadow&&T++),i.spotLightMatrix[v]=Z.matrix,b.castShadow){const I=n.get(b);I.shadowIntensity=Z.intensity,I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,i.spotShadow[v]=I,i.spotShadowMap[v]=$,S++}v++}else if(b.isRectAreaLight){const V=e.get(b);V.color.copy(F).multiplyScalar(O),V.halfWidth.set(b.width*.5,0,0),V.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=V,m++}else if(b.isPointLight){const V=e.get(b);if(V.color.copy(b.color).multiplyScalar(b.intensity),V.distance=b.distance,V.decay=b.decay,b.castShadow){const Z=b.shadow,I=n.get(b);I.shadowIntensity=Z.intensity,I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,I.shadowCameraNear=Z.camera.near,I.shadowCameraFar=Z.camera.far,i.pointShadow[x]=I,i.pointShadowMap[x]=$,i.pointShadowMatrix[x]=b.shadow.matrix,_++}i.point[x]=V,x++}else if(b.isHemisphereLight){const V=e.get(b);V.skyColor.copy(b.color).multiplyScalar(O),V.groundColor.copy(b.groundColor).multiplyScalar(O),i.hemi[f]=V,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const P=i.hash;(P.directionalLength!==p||P.pointLength!==x||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==g||P.numPointShadows!==_||P.numSpotShadows!==S||P.numSpotMaps!==R||P.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=x,i.hemi.length=f,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=S+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=w,P.directionalLength=p,P.pointLength=x,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=g,P.numPointShadows=_,P.numSpotShadows=S,P.numSpotMaps=R,P.numLightProbes=w,i.version=WA++)}function l(c,u){let d=0,h=0,p=0,x=0,v=0;const m=u.matrixWorldInverse;for(let f=0,g=c.length;f<g;f++){const _=c[f];if(_.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(_.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const S=i.rectArea[x];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),h++}else if(_.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Jm(t){const e=new jA(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function YA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Jm(t),e.set(r,[a])):s>=o.length?(a=new Jm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class $A extends so{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qA extends so{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const KA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function QA(t,e,n){let i=new bh;const r=new Ne,s=new Ne,o=new Ct,a=new $A({depthPacking:PM}),l=new qA,c={},u=n.maxTextureSize,d={[ir]:on,[on]:ir,[Kn]:Kn},h=new rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:KA,fragmentShader:ZA}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new Ti;x.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Qn(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gv;let f=this.type;this.render=function(T,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const A=t.getRenderTarget(),y=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Qi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=f!==ci&&this.type===ci,Y=f===ci&&this.type!==ci;for(let $=0,V=T.length;$<V;$++){const Z=T[$],I=Z.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const j=I.getFrameExtents();if(r.multiply(j),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,I.mapSize.y=s.y)),I.map===null||O===!0||Y===!0){const oe=this.type!==ci?{minFilter:wn,magFilter:wn}:{};I.map!==null&&I.map.dispose(),I.map=new Fr(r.x,r.y,oe),I.map.texture.name=Z.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const Q=I.getViewportCount();for(let oe=0;oe<Q;oe++){const xe=I.getViewport(oe);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),F.viewport(o),I.updateMatrices(Z,oe),i=I.getFrustum(),S(w,P,I.camera,Z,this.type)}I.isPointLightShadow!==!0&&this.type===ci&&g(I,P),I.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(A,y,b)};function g(T,w){const P=e.update(v);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Fr(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(w,null,P,h,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(w,null,P,p,v,null)}function _(T,w,P,A){let y=null;const b=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(b!==void 0)y=b;else if(y=P.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const F=y.uuid,O=w.uuid;let Y=c[F];Y===void 0&&(Y={},c[F]=Y);let $=Y[O];$===void 0&&($=y.clone(),Y[O]=$,w.addEventListener("dispose",R)),y=$}if(y.visible=w.visible,y.wireframe=w.wireframe,A===ci?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:d[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=t.properties.get(y);F.light=P}return y}function S(T,w,P,A,y){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===ci)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const O=e.update(T),Y=T.material;if(Array.isArray(Y)){const $=O.groups;for(let V=0,Z=$.length;V<Z;V++){const I=$[V],j=Y[I.materialIndex];if(j&&j.visible){const Q=_(T,j,A,y);T.onBeforeShadow(t,T,w,P,O,Q,I),t.renderBufferDirect(P,null,O,Q,T,I),T.onAfterShadow(t,T,w,P,O,Q,I)}}}else if(Y.visible){const $=_(T,Y,A,y);T.onBeforeShadow(t,T,w,P,O,$,null),t.renderBufferDirect(P,null,O,$,T,null),T.onAfterShadow(t,T,w,P,O,$,null)}}const F=T.children;for(let O=0,Y=F.length;O<Y;O++)S(F[O],w,P,A,y)}function R(T){T.target.removeEventListener("dispose",R);for(const P in c){const A=c[P],y=T.target.uuid;y in A&&(A[y].dispose(),delete A[y])}}}function JA(t){function e(){let M=!1;const B=new Ct;let z=null;const X=new Ct(0,0,0,0);return{setMask:function(te){z!==te&&!M&&(t.colorMask(te,te,te,te),z=te)},setLocked:function(te){M=te},setClear:function(te,Me,be,gt,Mt){Mt===!0&&(te*=gt,Me*=gt,be*=gt),B.set(te,Me,be,gt),X.equals(B)===!1&&(t.clearColor(te,Me,be,gt),X.copy(B))},reset:function(){M=!1,z=null,X.set(-1,0,0,0)}}}function n(){let M=!1,B=null,z=null,X=null;return{setTest:function(te){te?ue(t.DEPTH_TEST):fe(t.DEPTH_TEST)},setMask:function(te){B!==te&&!M&&(t.depthMask(te),B=te)},setFunc:function(te){if(z!==te){switch(te){case dM:t.depthFunc(t.NEVER);break;case hM:t.depthFunc(t.ALWAYS);break;case pM:t.depthFunc(t.LESS);break;case sc:t.depthFunc(t.LEQUAL);break;case mM:t.depthFunc(t.EQUAL);break;case gM:t.depthFunc(t.GEQUAL);break;case vM:t.depthFunc(t.GREATER);break;case _M:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}z=te}},setLocked:function(te){M=te},setClear:function(te){X!==te&&(t.clearDepth(te),X=te)},reset:function(){M=!1,B=null,z=null,X=null}}}function i(){let M=!1,B=null,z=null,X=null,te=null,Me=null,be=null,gt=null,Mt=null;return{setTest:function(Xe){M||(Xe?ue(t.STENCIL_TEST):fe(t.STENCIL_TEST))},setMask:function(Xe){B!==Xe&&!M&&(t.stencilMask(Xe),B=Xe)},setFunc:function(Xe,Et,_t){(z!==Xe||X!==Et||te!==_t)&&(t.stencilFunc(Xe,Et,_t),z=Xe,X=Et,te=_t)},setOp:function(Xe,Et,_t){(Me!==Xe||be!==Et||gt!==_t)&&(t.stencilOp(Xe,Et,_t),Me=Xe,be=Et,gt=_t)},setLocked:function(Xe){M=Xe},setClear:function(Xe){Mt!==Xe&&(t.clearStencil(Xe),Mt=Xe)},reset:function(){M=!1,B=null,z=null,X=null,te=null,Me=null,be=null,gt=null,Mt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,h=[],p=null,x=!1,v=null,m=null,f=null,g=null,_=null,S=null,R=null,T=new Ve(0,0,0),w=0,P=!1,A=null,y=null,b=null,F=null,O=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,V=0;const Z=t.getParameter(t.VERSION);Z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Z)[1]),$=V>=1):Z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),$=V>=2);let I=null,j={};const Q=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),xe=new Ct().fromArray(Q),He=new Ct().fromArray(oe);function K(M,B,z,X){const te=new Uint8Array(4),Me=t.createTexture();t.bindTexture(M,Me),t.texParameteri(M,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(M,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let be=0;be<z;be++)M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY?t.texImage3D(B,0,t.RGBA,1,1,X,0,t.RGBA,t.UNSIGNED_BYTE,te):t.texImage2D(B+be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,te);return Me}const ne={};ne[t.TEXTURE_2D]=K(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=K(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=K(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=K(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ue(t.DEPTH_TEST),s.setFunc(sc),$e(!1),Se(rm),ue(t.CULL_FACE),ut(Qi);function ue(M){c[M]!==!0&&(t.enable(M),c[M]=!0)}function fe(M){c[M]!==!1&&(t.disable(M),c[M]=!1)}function Ue(M,B){return u[M]!==B?(t.bindFramebuffer(M,B),u[M]=B,M===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=B),M===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=B),!0):!1}function Oe(M,B){let z=h,X=!1;if(M){z=d.get(B),z===void 0&&(z=[],d.set(B,z));const te=M.textures;if(z.length!==te.length||z[0]!==t.COLOR_ATTACHMENT0){for(let Me=0,be=te.length;Me<be;Me++)z[Me]=t.COLOR_ATTACHMENT0+Me;z.length=te.length,X=!0}}else z[0]!==t.BACK&&(z[0]=t.BACK,X=!0);X&&t.drawBuffers(z)}function ze(M){return p!==M?(t.useProgram(M),p=M,!0):!1}const tt={[xr]:t.FUNC_ADD,[qS]:t.FUNC_SUBTRACT,[KS]:t.FUNC_REVERSE_SUBTRACT};tt[ZS]=t.MIN,tt[QS]=t.MAX;const D={[JS]:t.ZERO,[eM]:t.ONE,[tM]:t.SRC_COLOR,[zf]:t.SRC_ALPHA,[aM]:t.SRC_ALPHA_SATURATE,[sM]:t.DST_COLOR,[iM]:t.DST_ALPHA,[nM]:t.ONE_MINUS_SRC_COLOR,[Hf]:t.ONE_MINUS_SRC_ALPHA,[oM]:t.ONE_MINUS_DST_COLOR,[rM]:t.ONE_MINUS_DST_ALPHA,[lM]:t.CONSTANT_COLOR,[cM]:t.ONE_MINUS_CONSTANT_COLOR,[uM]:t.CONSTANT_ALPHA,[fM]:t.ONE_MINUS_CONSTANT_ALPHA};function ut(M,B,z,X,te,Me,be,gt,Mt,Xe){if(M===Qi){x===!0&&(fe(t.BLEND),x=!1);return}if(x===!1&&(ue(t.BLEND),x=!0),M!==$S){if(M!==v||Xe!==P){if((m!==xr||_!==xr)&&(t.blendEquation(t.FUNC_ADD),m=xr,_=xr),Xe)switch(M){case Is:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case sm:t.blendFunc(t.ONE,t.ONE);break;case om:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case am:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}else switch(M){case Is:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case sm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case om:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case am:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}f=null,g=null,S=null,R=null,T.set(0,0,0),w=0,v=M,P=Xe}return}te=te||B,Me=Me||z,be=be||X,(B!==m||te!==_)&&(t.blendEquationSeparate(tt[B],tt[te]),m=B,_=te),(z!==f||X!==g||Me!==S||be!==R)&&(t.blendFuncSeparate(D[z],D[X],D[Me],D[be]),f=z,g=X,S=Me,R=be),(gt.equals(T)===!1||Mt!==w)&&(t.blendColor(gt.r,gt.g,gt.b,Mt),T.copy(gt),w=Mt),v=M,P=!1}function Ye(M,B){M.side===Kn?fe(t.CULL_FACE):ue(t.CULL_FACE);let z=M.side===on;B&&(z=!z),$e(z),M.blending===Is&&M.transparent===!1?ut(Qi):ut(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),s.setFunc(M.depthFunc),s.setTest(M.depthTest),s.setMask(M.depthWrite),r.setMask(M.colorWrite);const X=M.stencilWrite;o.setTest(X),X&&(o.setMask(M.stencilWriteMask),o.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),o.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),Le(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?ue(t.SAMPLE_ALPHA_TO_COVERAGE):fe(t.SAMPLE_ALPHA_TO_COVERAGE)}function $e(M){A!==M&&(M?t.frontFace(t.CW):t.frontFace(t.CCW),A=M)}function Se(M){M!==XS?(ue(t.CULL_FACE),M!==y&&(M===rm?t.cullFace(t.BACK):M===jS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):fe(t.CULL_FACE),y=M}function ft(M){M!==b&&($&&t.lineWidth(M),b=M)}function Le(M,B,z){M?(ue(t.POLYGON_OFFSET_FILL),(F!==B||O!==z)&&(t.polygonOffset(B,z),F=B,O=z)):fe(t.POLYGON_OFFSET_FILL)}function Ie(M){M?ue(t.SCISSOR_TEST):fe(t.SCISSOR_TEST)}function L(M){M===void 0&&(M=t.TEXTURE0+Y-1),I!==M&&(t.activeTexture(M),I=M)}function E(M,B,z){z===void 0&&(I===null?z=t.TEXTURE0+Y-1:z=I);let X=j[z];X===void 0&&(X={type:void 0,texture:void 0},j[z]=X),(X.type!==M||X.texture!==B)&&(I!==z&&(t.activeTexture(z),I=z),t.bindTexture(M,B||ne[M]),X.type=M,X.texture=B)}function W(){const M=j[I];M!==void 0&&M.type!==void 0&&(t.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)}function ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function J(){try{t.texSubImage2D.apply(t,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function we(){try{t.texSubImage3D.apply(t,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function he(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Fe(){try{t.texStorage2D.apply(t,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function se(){try{t.texStorage3D.apply(t,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function pe(){try{t.texImage2D.apply(t,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function We(){try{t.texImage3D.apply(t,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Ae(M){xe.equals(M)===!1&&(t.scissor(M.x,M.y,M.z,M.w),xe.copy(M))}function ve(M){He.equals(M)===!1&&(t.viewport(M.x,M.y,M.z,M.w),He.copy(M))}function Re(M,B){let z=l.get(B);z===void 0&&(z=new WeakMap,l.set(B,z));let X=z.get(M);X===void 0&&(X=t.getUniformBlockIndex(B,M.name),z.set(M,X))}function De(M,B){const X=l.get(B).get(M);a.get(B)!==X&&(t.uniformBlockBinding(B,X,M.__bindingPointIndex),a.set(B,X))}function st(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},I=null,j={},u={},d=new WeakMap,h=[],p=null,x=!1,v=null,m=null,f=null,g=null,_=null,S=null,R=null,T=new Ve(0,0,0),w=0,P=!1,A=null,y=null,b=null,F=null,O=null,xe.set(0,0,t.canvas.width,t.canvas.height),He.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ue,disable:fe,bindFramebuffer:Ue,drawBuffers:Oe,useProgram:ze,setBlending:ut,setMaterial:Ye,setFlipSided:$e,setCullFace:Se,setLineWidth:ft,setPolygonOffset:Le,setScissorTest:Ie,activeTexture:L,bindTexture:E,unbindTexture:W,compressedTexImage2D:ee,compressedTexImage3D:ie,texImage2D:pe,texImage3D:We,updateUBOMapping:Re,uniformBlockBinding:De,texStorage2D:Fe,texStorage3D:se,texSubImage2D:J,texSubImage3D:we,compressedTexSubImage2D:le,compressedTexSubImage3D:he,scissor:Ae,viewport:ve,reset:st}}function eg(t,e,n,i){const r=eC(i);switch(n){case $v:return t*e;case Kv:return t*e;case Zv:return t*e*2;case Qv:return t*e/r.components*r.byteLength;case Eh:return t*e/r.components*r.byteLength;case Jv:return t*e*2/r.components*r.byteLength;case wh:return t*e*2/r.components*r.byteLength;case qv:return t*e*3/r.components*r.byteLength;case On:return t*e*4/r.components*r.byteLength;case Th:return t*e*4/r.components*r.byteLength;case Tl:case Al:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Cl:case Rl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Yf:case qf:return Math.max(t,16)*Math.max(e,8)/4;case jf:case $f:return Math.max(t,8)*Math.max(e,8)/2;case Kf:case Zf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Qf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Jf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ed:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case td:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case nd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case id:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case rd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case sd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case od:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ad:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ld:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case cd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ud:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case fd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case dd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case bl:case hd:case pd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case e_:case md:return Math.ceil(t/4)*Math.ceil(e/4)*8;case gd:case vd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function eC(t){switch(t){case Ei:case Xv:return{byteLength:1,components:1};case fa:case jv:case va:return{byteLength:2,components:1};case Sh:case Mh:return{byteLength:2,components:4};case Ur:case yh:case gi:return{byteLength:4,components:1};case Yv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function tC(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,E){return p?new OffscreenCanvas(L,E):uc("canvas")}function v(L,E,W){let ee=1;const ie=Ie(L);if((ie.width>W||ie.height>W)&&(ee=W/Math.max(ie.width,ie.height)),ee<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const J=Math.floor(ee*ie.width),we=Math.floor(ee*ie.height);d===void 0&&(d=x(J,we));const le=E?x(J,we):d;return le.width=J,le.height=we,le.getContext("2d").drawImage(L,0,0,J,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+J+"x"+we+")."),le}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),L;return L}function m(L){return L.generateMipmaps&&L.minFilter!==wn&&L.minFilter!==Fn}function f(L){t.generateMipmap(L)}function g(L,E,W,ee,ie=!1){if(L!==null){if(t[L]!==void 0)return t[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let J=E;if(E===t.RED&&(W===t.FLOAT&&(J=t.R32F),W===t.HALF_FLOAT&&(J=t.R16F),W===t.UNSIGNED_BYTE&&(J=t.R8)),E===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(J=t.R8UI),W===t.UNSIGNED_SHORT&&(J=t.R16UI),W===t.UNSIGNED_INT&&(J=t.R32UI),W===t.BYTE&&(J=t.R8I),W===t.SHORT&&(J=t.R16I),W===t.INT&&(J=t.R32I)),E===t.RG&&(W===t.FLOAT&&(J=t.RG32F),W===t.HALF_FLOAT&&(J=t.RG16F),W===t.UNSIGNED_BYTE&&(J=t.RG8)),E===t.RG_INTEGER&&(W===t.UNSIGNED_BYTE&&(J=t.RG8UI),W===t.UNSIGNED_SHORT&&(J=t.RG16UI),W===t.UNSIGNED_INT&&(J=t.RG32UI),W===t.BYTE&&(J=t.RG8I),W===t.SHORT&&(J=t.RG16I),W===t.INT&&(J=t.RG32I)),E===t.RGB&&W===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),E===t.RGBA){const we=ie?oc:Qe.getTransfer(ee);W===t.FLOAT&&(J=t.RGBA32F),W===t.HALF_FLOAT&&(J=t.RGBA16F),W===t.UNSIGNED_BYTE&&(J=we===it?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function _(L,E){let W;return L?E===null||E===Ur||E===Zs?W=t.DEPTH24_STENCIL8:E===gi?W=t.DEPTH32F_STENCIL8:E===fa&&(W=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ur||E===Zs?W=t.DEPTH_COMPONENT24:E===gi?W=t.DEPTH_COMPONENT32F:E===fa&&(W=t.DEPTH_COMPONENT16),W}function S(L,E){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==wn&&L.minFilter!==Fn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function R(L){const E=L.target;E.removeEventListener("dispose",R),w(E),E.isVideoTexture&&u.delete(E)}function T(L){const E=L.target;E.removeEventListener("dispose",T),A(E)}function w(L){const E=i.get(L);if(E.__webglInit===void 0)return;const W=L.source,ee=h.get(W);if(ee){const ie=ee[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&P(L),Object.keys(ee).length===0&&h.delete(W)}i.remove(L)}function P(L){const E=i.get(L);t.deleteTexture(E.__webglTexture);const W=L.source,ee=h.get(W);delete ee[E.__cacheKey],o.memory.textures--}function A(L){const E=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(E.__webglFramebuffer[ee]))for(let ie=0;ie<E.__webglFramebuffer[ee].length;ie++)t.deleteFramebuffer(E.__webglFramebuffer[ee][ie]);else t.deleteFramebuffer(E.__webglFramebuffer[ee]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[ee])}else{if(Array.isArray(E.__webglFramebuffer))for(let ee=0;ee<E.__webglFramebuffer.length;ee++)t.deleteFramebuffer(E.__webglFramebuffer[ee]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ee=0;ee<E.__webglColorRenderbuffer.length;ee++)E.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[ee]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=L.textures;for(let ee=0,ie=W.length;ee<ie;ee++){const J=i.get(W[ee]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(W[ee])}i.remove(L)}let y=0;function b(){y=0}function F(){const L=y;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),y+=1,L}function O(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function Y(L,E){const W=i.get(L);if(L.isVideoTexture&&ft(L),L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){const ee=L.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(W,L,E);return}}n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+E)}function $(L,E){const W=i.get(L);if(L.version>0&&W.__version!==L.version){He(W,L,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+E)}function V(L,E){const W=i.get(L);if(L.version>0&&W.__version!==L.version){He(W,L,E);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+E)}function Z(L,E){const W=i.get(L);if(L.version>0&&W.__version!==L.version){K(W,L,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+E)}const I={[Wf]:t.REPEAT,[wr]:t.CLAMP_TO_EDGE,[Xf]:t.MIRRORED_REPEAT},j={[wn]:t.NEAREST,[RM]:t.NEAREST_MIPMAP_NEAREST,[Ha]:t.NEAREST_MIPMAP_LINEAR,[Fn]:t.LINEAR,[mu]:t.LINEAR_MIPMAP_NEAREST,[Tr]:t.LINEAR_MIPMAP_LINEAR},Q={[DM]:t.NEVER,[kM]:t.ALWAYS,[IM]:t.LESS,[n_]:t.LEQUAL,[NM]:t.EQUAL,[OM]:t.GEQUAL,[UM]:t.GREATER,[FM]:t.NOTEQUAL};function oe(L,E){if(E.type===gi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Fn||E.magFilter===mu||E.magFilter===Ha||E.magFilter===Tr||E.minFilter===Fn||E.minFilter===mu||E.minFilter===Ha||E.minFilter===Tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(L,t.TEXTURE_WRAP_S,I[E.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,I[E.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,I[E.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,j[E.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,j[E.minFilter]),E.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,Q[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===wn||E.minFilter!==Ha&&E.minFilter!==Tr||E.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");t.texParameterf(L,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function xe(L,E){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",R));const ee=E.source;let ie=h.get(ee);ie===void 0&&(ie={},h.set(ee,ie));const J=O(E);if(J!==L.__cacheKey){ie[J]===void 0&&(ie[J]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ie[J].usedTimes++;const we=ie[L.__cacheKey];we!==void 0&&(ie[L.__cacheKey].usedTimes--,we.usedTimes===0&&P(E)),L.__cacheKey=J,L.__webglTexture=ie[J].texture}return W}function He(L,E,W){let ee=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ee=t.TEXTURE_3D);const ie=xe(L,E),J=E.source;n.bindTexture(ee,L.__webglTexture,t.TEXTURE0+W);const we=i.get(J);if(J.version!==we.__version||ie===!0){n.activeTexture(t.TEXTURE0+W);const le=Qe.getPrimaries(Qe.workingColorSpace),he=E.colorSpace===Hi?null:Qe.getPrimaries(E.colorSpace),Fe=E.colorSpace===Hi||le===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let se=v(E.image,!1,r.maxTextureSize);se=Le(E,se);const pe=s.convert(E.format,E.colorSpace),We=s.convert(E.type);let Ae=g(E.internalFormat,pe,We,E.colorSpace,E.isVideoTexture);oe(ee,E);let ve;const Re=E.mipmaps,De=E.isVideoTexture!==!0,st=we.__version===void 0||ie===!0,M=J.dataReady,B=S(E,se);if(E.isDepthTexture)Ae=_(E.format===Qs,E.type),st&&(De?n.texStorage2D(t.TEXTURE_2D,1,Ae,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Ae,se.width,se.height,0,pe,We,null));else if(E.isDataTexture)if(Re.length>0){De&&st&&n.texStorage2D(t.TEXTURE_2D,B,Ae,Re[0].width,Re[0].height);for(let z=0,X=Re.length;z<X;z++)ve=Re[z],De?M&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,ve.width,ve.height,pe,We,ve.data):n.texImage2D(t.TEXTURE_2D,z,Ae,ve.width,ve.height,0,pe,We,ve.data);E.generateMipmaps=!1}else De?(st&&n.texStorage2D(t.TEXTURE_2D,B,Ae,se.width,se.height),M&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,pe,We,se.data)):n.texImage2D(t.TEXTURE_2D,0,Ae,se.width,se.height,0,pe,We,se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){De&&st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,B,Ae,Re[0].width,Re[0].height,se.depth);for(let z=0,X=Re.length;z<X;z++)if(ve=Re[z],E.format!==On)if(pe!==null)if(De){if(M)if(E.layerUpdates.size>0){const te=eg(ve.width,ve.height,E.format,E.type);for(const Me of E.layerUpdates){const be=ve.data.subarray(Me*te/ve.data.BYTES_PER_ELEMENT,(Me+1)*te/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,Me,ve.width,ve.height,1,pe,be,0,0)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,ve.width,ve.height,se.depth,pe,ve.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,z,Ae,ve.width,ve.height,se.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?M&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,ve.width,ve.height,se.depth,pe,We,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,z,Ae,ve.width,ve.height,se.depth,0,pe,We,ve.data)}else{De&&st&&n.texStorage2D(t.TEXTURE_2D,B,Ae,Re[0].width,Re[0].height);for(let z=0,X=Re.length;z<X;z++)ve=Re[z],E.format!==On?pe!==null?De?M&&n.compressedTexSubImage2D(t.TEXTURE_2D,z,0,0,ve.width,ve.height,pe,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,z,Ae,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?M&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,ve.width,ve.height,pe,We,ve.data):n.texImage2D(t.TEXTURE_2D,z,Ae,ve.width,ve.height,0,pe,We,ve.data)}else if(E.isDataArrayTexture)if(De){if(st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,B,Ae,se.width,se.height,se.depth),M)if(E.layerUpdates.size>0){const z=eg(se.width,se.height,E.format,E.type);for(const X of E.layerUpdates){const te=se.data.subarray(X*z/se.data.BYTES_PER_ELEMENT,(X+1)*z/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,X,se.width,se.height,1,pe,We,te)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,pe,We,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ae,se.width,se.height,se.depth,0,pe,We,se.data);else if(E.isData3DTexture)De?(st&&n.texStorage3D(t.TEXTURE_3D,B,Ae,se.width,se.height,se.depth),M&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,pe,We,se.data)):n.texImage3D(t.TEXTURE_3D,0,Ae,se.width,se.height,se.depth,0,pe,We,se.data);else if(E.isFramebufferTexture){if(st)if(De)n.texStorage2D(t.TEXTURE_2D,B,Ae,se.width,se.height);else{let z=se.width,X=se.height;for(let te=0;te<B;te++)n.texImage2D(t.TEXTURE_2D,te,Ae,z,X,0,pe,We,null),z>>=1,X>>=1}}else if(Re.length>0){if(De&&st){const z=Ie(Re[0]);n.texStorage2D(t.TEXTURE_2D,B,Ae,z.width,z.height)}for(let z=0,X=Re.length;z<X;z++)ve=Re[z],De?M&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,pe,We,ve):n.texImage2D(t.TEXTURE_2D,z,Ae,pe,We,ve);E.generateMipmaps=!1}else if(De){if(st){const z=Ie(se);n.texStorage2D(t.TEXTURE_2D,B,Ae,z.width,z.height)}M&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,pe,We,se)}else n.texImage2D(t.TEXTURE_2D,0,Ae,pe,We,se);m(E)&&f(ee),we.__version=J.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function K(L,E,W){if(E.image.length!==6)return;const ee=xe(L,E),ie=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+W);const J=i.get(ie);if(ie.version!==J.__version||ee===!0){n.activeTexture(t.TEXTURE0+W);const we=Qe.getPrimaries(Qe.workingColorSpace),le=E.colorSpace===Hi?null:Qe.getPrimaries(E.colorSpace),he=E.colorSpace===Hi||we===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Fe=E.isCompressedTexture||E.image[0].isCompressedTexture,se=E.image[0]&&E.image[0].isDataTexture,pe=[];for(let X=0;X<6;X++)!Fe&&!se?pe[X]=v(E.image[X],!0,r.maxCubemapSize):pe[X]=se?E.image[X].image:E.image[X],pe[X]=Le(E,pe[X]);const We=pe[0],Ae=s.convert(E.format,E.colorSpace),ve=s.convert(E.type),Re=g(E.internalFormat,Ae,ve,E.colorSpace),De=E.isVideoTexture!==!0,st=J.__version===void 0||ee===!0,M=ie.dataReady;let B=S(E,We);oe(t.TEXTURE_CUBE_MAP,E);let z;if(Fe){De&&st&&n.texStorage2D(t.TEXTURE_CUBE_MAP,B,Re,We.width,We.height);for(let X=0;X<6;X++){z=pe[X].mipmaps;for(let te=0;te<z.length;te++){const Me=z[te];E.format!==On?Ae!==null?De?M&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,te,0,0,Me.width,Me.height,Ae,Me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,te,Re,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?M&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,te,0,0,Me.width,Me.height,Ae,ve,Me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,te,Re,Me.width,Me.height,0,Ae,ve,Me.data)}}}else{if(z=E.mipmaps,De&&st){z.length>0&&B++;const X=Ie(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,B,Re,X.width,X.height)}for(let X=0;X<6;X++)if(se){De?M&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,pe[X].width,pe[X].height,Ae,ve,pe[X].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Re,pe[X].width,pe[X].height,0,Ae,ve,pe[X].data);for(let te=0;te<z.length;te++){const be=z[te].image[X].image;De?M&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,te+1,0,0,be.width,be.height,Ae,ve,be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,te+1,Re,be.width,be.height,0,Ae,ve,be.data)}}else{De?M&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Ae,ve,pe[X]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Re,Ae,ve,pe[X]);for(let te=0;te<z.length;te++){const Me=z[te];De?M&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,te+1,0,0,Ae,ve,Me.image[X]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,te+1,Re,Ae,ve,Me.image[X])}}}m(E)&&f(t.TEXTURE_CUBE_MAP),J.__version=ie.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ne(L,E,W,ee,ie,J){const we=s.convert(W.format,W.colorSpace),le=s.convert(W.type),he=g(W.internalFormat,we,le,W.colorSpace);if(!i.get(E).__hasExternalTextures){const se=Math.max(1,E.width>>J),pe=Math.max(1,E.height>>J);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,J,he,se,pe,E.depth,0,we,le,null):n.texImage2D(ie,J,he,se,pe,0,we,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),Se(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,ie,i.get(W).__webglTexture,0,$e(E)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,ie,i.get(W).__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(L,E,W){if(t.bindRenderbuffer(t.RENDERBUFFER,L),E.depthBuffer){const ee=E.depthTexture,ie=ee&&ee.isDepthTexture?ee.type:null,J=_(E.stencilBuffer,ie),we=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=$e(E);Se(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,J,E.width,E.height):W?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,J,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,J,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,we,t.RENDERBUFFER,L)}else{const ee=E.textures;for(let ie=0;ie<ee.length;ie++){const J=ee[ie],we=s.convert(J.format,J.colorSpace),le=s.convert(J.type),he=g(J.internalFormat,we,le,J.colorSpace),Fe=$e(E);W&&Se(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,he,E.width,E.height):Se(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Fe,he,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,he,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function fe(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);const ee=i.get(E.depthTexture).__webglTexture,ie=$e(E);if(E.depthTexture.format===Ns)Se(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(E.depthTexture.format===Qs)Se(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ue(L){const E=i.get(L),W=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");fe(E.__webglFramebuffer,L)}else if(W){E.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ee]),E.__webglDepthbuffer[ee]=t.createRenderbuffer(),ue(E.__webglDepthbuffer[ee],L,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),ue(E.__webglDepthbuffer,L,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Oe(L,E,W){const ee=i.get(L);E!==void 0&&ne(ee.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&Ue(L)}function ze(L){const E=L.texture,W=i.get(L),ee=i.get(E);L.addEventListener("dispose",T);const ie=L.textures,J=L.isWebGLCubeRenderTarget===!0,we=ie.length>1;if(we||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=E.version,o.memory.textures++),J){W.__webglFramebuffer=[];for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[le]=[];for(let he=0;he<E.mipmaps.length;he++)W.__webglFramebuffer[le][he]=t.createFramebuffer()}else W.__webglFramebuffer[le]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let le=0;le<E.mipmaps.length;le++)W.__webglFramebuffer[le]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(we)for(let le=0,he=ie.length;le<he;le++){const Fe=i.get(ie[le]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=t.createTexture(),o.memory.textures++)}if(L.samples>0&&Se(L)===!1){W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let le=0;le<ie.length;le++){const he=ie[le];W.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[le]);const Fe=s.convert(he.format,he.colorSpace),se=s.convert(he.type),pe=g(he.internalFormat,Fe,se,he.colorSpace,L.isXRRenderTarget===!0),We=$e(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,We,pe,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,W.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),ue(W.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),oe(t.TEXTURE_CUBE_MAP,E);for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)ne(W.__webglFramebuffer[le][he],L,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,he);else ne(W.__webglFramebuffer[le],L,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(E)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(we){for(let le=0,he=ie.length;le<he;le++){const Fe=ie[le],se=i.get(Fe);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),oe(t.TEXTURE_2D,Fe),ne(W.__webglFramebuffer,L,Fe,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,0),m(Fe)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(le=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,ee.__webglTexture),oe(le,E),E.mipmaps&&E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)ne(W.__webglFramebuffer[he],L,E,t.COLOR_ATTACHMENT0,le,he);else ne(W.__webglFramebuffer,L,E,t.COLOR_ATTACHMENT0,le,0);m(E)&&f(le),n.unbindTexture()}L.depthBuffer&&Ue(L)}function tt(L){const E=L.textures;for(let W=0,ee=E.length;W<ee;W++){const ie=E[W];if(m(ie)){const J=L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,we=i.get(ie).__webglTexture;n.bindTexture(J,we),f(J),n.unbindTexture()}}}const D=[],ut=[];function Ye(L){if(L.samples>0){if(Se(L)===!1){const E=L.textures,W=L.width,ee=L.height;let ie=t.COLOR_BUFFER_BIT;const J=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,we=i.get(L),le=E.length>1;if(le)for(let he=0;he<E.length;he++)n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let he=0;he<E.length;he++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,we.__webglColorRenderbuffer[he]);const Fe=i.get(E[he]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Fe,0)}t.blitFramebuffer(0,0,W,ee,0,0,W,ee,ie,t.NEAREST),l===!0&&(D.length=0,ut.length=0,D.push(t.COLOR_ATTACHMENT0+he),L.depthBuffer&&L.resolveDepthBuffer===!1&&(D.push(J),ut.push(J),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ut)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,D))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let he=0;he<E.length;he++){n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,we.__webglColorRenderbuffer[he]);const Fe=i.get(E[he]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,Fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const E=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function $e(L){return Math.min(r.maxSamples,L.samples)}function Se(L){const E=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ft(L){const E=o.render.frame;u.get(L)!==E&&(u.set(L,E),L.update())}function Le(L,E){const W=L.colorSpace,ee=L.format,ie=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||W!==lr&&W!==Hi&&(Qe.getTransfer(W)===it?(ee!==On||ie!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}function Ie(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=b,this.setTexture2D=Y,this.setTexture2DArray=$,this.setTexture3D=V,this.setTextureCube=Z,this.rebindTextures=Oe,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Se}function nC(t,e){function n(i,r=Hi){let s;const o=Qe.getTransfer(r);if(i===Ei)return t.UNSIGNED_BYTE;if(i===Sh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Mh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Yv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Xv)return t.BYTE;if(i===jv)return t.SHORT;if(i===fa)return t.UNSIGNED_SHORT;if(i===yh)return t.INT;if(i===Ur)return t.UNSIGNED_INT;if(i===gi)return t.FLOAT;if(i===va)return t.HALF_FLOAT;if(i===$v)return t.ALPHA;if(i===qv)return t.RGB;if(i===On)return t.RGBA;if(i===Kv)return t.LUMINANCE;if(i===Zv)return t.LUMINANCE_ALPHA;if(i===Ns)return t.DEPTH_COMPONENT;if(i===Qs)return t.DEPTH_STENCIL;if(i===Qv)return t.RED;if(i===Eh)return t.RED_INTEGER;if(i===Jv)return t.RG;if(i===wh)return t.RG_INTEGER;if(i===Th)return t.RGBA_INTEGER;if(i===Tl||i===Al||i===Cl||i===Rl)if(o===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Tl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Tl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Al)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Cl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Rl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jf||i===Yf||i===$f||i===qf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===jf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Yf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$f)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kf||i===Zf||i===Qf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Kf||i===Zf)return o===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Qf)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Jf||i===ed||i===td||i===nd||i===id||i===rd||i===sd||i===od||i===ad||i===ld||i===cd||i===ud||i===fd||i===dd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Jf)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ed)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===td)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===id)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===sd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===od)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ad)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ld)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===cd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ud)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===dd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bl||i===hd||i===pd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===bl)return o===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===pd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===e_||i===md||i===gd||i===vd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===bl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===md)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===gd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class iC extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class cl extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rC={type:"move"};class zu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,x=.005;c.inputState.pinching&&h>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new cl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const sC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class aC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new an,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new rr({vertexShader:sC,fragmentShader:oC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Qn(new Uc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lC extends Hr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,x=null;const v=new aC,m=n.getContextAttributes();let f=null,g=null;const _=[],S=[],R=new Ne;let T=null;const w=new hn;w.layers.enable(1),w.viewport=new Ct;const P=new hn;P.layers.enable(2),P.viewport=new Ct;const A=[w,P],y=new iC;y.layers.enable(1),y.layers.enable(2);let b=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ne=_[K];return ne===void 0&&(ne=new zu,_[K]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(K){let ne=_[K];return ne===void 0&&(ne=new zu,_[K]=ne),ne.getGripSpace()},this.getHand=function(K){let ne=_[K];return ne===void 0&&(ne=new zu,_[K]=ne),ne.getHandSpace()};function O(K){const ne=S.indexOf(K.inputSource);if(ne===-1)return;const ue=_[ne];ue!==void 0&&(ue.update(K.inputSource,K.frame,c||o),ue.dispatchEvent({type:K.type,data:K.inputSource}))}function Y(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",$);for(let K=0;K<_.length;K++){const ne=S[K];ne!==null&&(S[K]=null,_[K].disconnect(ne))}b=null,F=null,v.reset(),e.setRenderTarget(f),p=null,h=null,d=null,r=null,g=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Fr(p.framebufferWidth,p.framebufferHeight,{format:On,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,ue=null,fe=null;m.depth&&(fe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=m.stencil?Qs:Ns,ue=m.stencil?Zs:Ur);const Ue={colorFormat:n.RGBA8,depthFormat:fe,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(Ue),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new Fr(h.textureWidth,h.textureHeight,{format:On,type:Ei,depthTexture:new g_(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function $(K){for(let ne=0;ne<K.removed.length;ne++){const ue=K.removed[ne],fe=S.indexOf(ue);fe>=0&&(S[fe]=null,_[fe].disconnect(ue))}for(let ne=0;ne<K.added.length;ne++){const ue=K.added[ne];let fe=S.indexOf(ue);if(fe===-1){for(let Oe=0;Oe<_.length;Oe++)if(Oe>=S.length){S.push(ue),fe=Oe;break}else if(S[Oe]===null){S[Oe]=ue,fe=Oe;break}if(fe===-1)break}const Ue=_[fe];Ue&&Ue.connect(ue)}}const V=new k,Z=new k;function I(K,ne,ue){V.setFromMatrixPosition(ne.matrixWorld),Z.setFromMatrixPosition(ue.matrixWorld);const fe=V.distanceTo(Z),Ue=ne.projectionMatrix.elements,Oe=ue.projectionMatrix.elements,ze=Ue[14]/(Ue[10]-1),tt=Ue[14]/(Ue[10]+1),D=(Ue[9]+1)/Ue[5],ut=(Ue[9]-1)/Ue[5],Ye=(Ue[8]-1)/Ue[0],$e=(Oe[8]+1)/Oe[0],Se=ze*Ye,ft=ze*$e,Le=fe/(-Ye+$e),Ie=Le*-Ye;ne.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ie),K.translateZ(Le),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const L=ze+Le,E=tt+Le,W=Se-Ie,ee=ft+(fe-Ie),ie=D*tt/E*L,J=ut*tt/E*L;K.projectionMatrix.makePerspective(W,ee,ie,J,L,E),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function j(K,ne){ne===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ne.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;v.texture!==null&&(K.near=v.depthNear,K.far=v.depthFar),y.near=P.near=w.near=K.near,y.far=P.far=w.far=K.far,(b!==y.near||F!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,F=y.far,w.near=b,w.far=F,P.near=b,P.far=F,w.updateProjectionMatrix(),P.updateProjectionMatrix(),K.updateProjectionMatrix());const ne=K.parent,ue=y.cameras;j(y,ne);for(let fe=0;fe<ue.length;fe++)j(ue[fe],ne);ue.length===2?I(y,w,P):y.projectionMatrix.copy(w.projectionMatrix),Q(K,y,ne)};function Q(K,ne,ue){ue===null?K.matrix.copy(ne.matrixWorld):(K.matrix.copy(ue.matrixWorld),K.matrix.invert(),K.matrix.multiply(ne.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Js*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let oe=null;function xe(K,ne){if(u=ne.getViewerPose(c||o),x=ne,u!==null){const ue=u.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let fe=!1;ue.length!==y.cameras.length&&(y.cameras.length=0,fe=!0);for(let Oe=0;Oe<ue.length;Oe++){const ze=ue[Oe];let tt=null;if(p!==null)tt=p.getViewport(ze);else{const ut=d.getViewSubImage(h,ze);tt=ut.viewport,Oe===0&&(e.setRenderTargetTextures(g,ut.colorTexture,h.ignoreDepthValues?void 0:ut.depthStencilTexture),e.setRenderTarget(g))}let D=A[Oe];D===void 0&&(D=new hn,D.layers.enable(Oe),D.viewport=new Ct,A[Oe]=D),D.matrix.fromArray(ze.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(ze.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(tt.x,tt.y,tt.width,tt.height),Oe===0&&(y.matrix.copy(D.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),fe===!0&&y.cameras.push(D)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const Oe=d.getDepthInformation(ue[0]);Oe&&Oe.isValid&&Oe.texture&&v.init(e,Oe,r.renderState)}}for(let ue=0;ue<_.length;ue++){const fe=S[ue],Ue=_[ue];fe!==null&&Ue!==void 0&&Ue.update(fe,ne,c||o)}oe&&oe(K,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),x=null}const He=new p_;He.setAnimationLoop(xe),this.setAnimationLoop=function(K){oe=K},this.dispose=function(){}}}const mr=new ni,cC=new mt;function uC(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,f_(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,g,_,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),x(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),v(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,g,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===on&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===on&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const g=e.get(f),_=g.envMap,S=g.envMapRotation;_&&(m.envMap.value=_,mr.copy(S),mr.x*=-1,mr.y*=-1,mr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),m.envMapRotation.value.setFromMatrix4(cC.makeRotationFromEuler(mr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,g,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*g,m.scale.value=_*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,g){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===on&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const g=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function fC(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const S=_.program;i.uniformBlockBinding(g,S)}function c(g,_){let S=r[g.id];S===void 0&&(x(g),S=u(g),r[g.id]=S,g.addEventListener("dispose",m));const R=_.program;i.updateUBOMapping(g,R);const T=e.render.frame;s[g.id]!==T&&(h(g),s[g.id]=T)}function u(g){const _=d();g.__bindingPointIndex=_;const S=t.createBuffer(),R=g.__size,T=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,R,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,S),S}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const _=r[g.id],S=g.uniforms,R=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let T=0,w=S.length;T<w;T++){const P=Array.isArray(S[T])?S[T]:[S[T]];for(let A=0,y=P.length;A<y;A++){const b=P[A];if(p(b,T,A,R)===!0){const F=b.__offset,O=Array.isArray(b.value)?b.value:[b.value];let Y=0;for(let $=0;$<O.length;$++){const V=O[$],Z=v(V);typeof V=="number"||typeof V=="boolean"?(b.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,F+Y,b.__data)):V.isMatrix3?(b.__data[0]=V.elements[0],b.__data[1]=V.elements[1],b.__data[2]=V.elements[2],b.__data[3]=0,b.__data[4]=V.elements[3],b.__data[5]=V.elements[4],b.__data[6]=V.elements[5],b.__data[7]=0,b.__data[8]=V.elements[6],b.__data[9]=V.elements[7],b.__data[10]=V.elements[8],b.__data[11]=0):(V.toArray(b.__data,Y),Y+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,b.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,_,S,R){const T=g.value,w=_+"_"+S;if(R[w]===void 0)return typeof T=="number"||typeof T=="boolean"?R[w]=T:R[w]=T.clone(),!0;{const P=R[w];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return R[w]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function x(g){const _=g.uniforms;let S=0;const R=16;for(let w=0,P=_.length;w<P;w++){const A=Array.isArray(_[w])?_[w]:[_[w]];for(let y=0,b=A.length;y<b;y++){const F=A[y],O=Array.isArray(F.value)?F.value:[F.value];for(let Y=0,$=O.length;Y<$;Y++){const V=O[Y],Z=v(V),I=S%R,j=I%Z.boundary,Q=I+j;S+=j,Q!==0&&R-Q<Z.storage&&(S+=R-Q),F.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=Z.storage}}}const T=S%R;return T>0&&(S+=R-T),g.__size=S,g.__cache={},this}function v(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function f(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class dC{constructor(e={}){const{canvas:n=n1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),x=new Int32Array(4);let v=null,m=null;const f=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jn,this.toneMapping=Ji,this.toneMappingExposure=1;const _=this;let S=!1,R=0,T=0,w=null,P=-1,A=null;const y=new Ct,b=new Ct;let F=null;const O=new Ve(0);let Y=0,$=n.width,V=n.height,Z=1,I=null,j=null;const Q=new Ct(0,0,$,V),oe=new Ct(0,0,$,V);let xe=!1;const He=new bh;let K=!1,ne=!1;const ue=new mt,fe=new k,Ue=new Ct,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function tt(){return w===null?Z:1}let D=i;function ut(C,N){return n.getContext(C,N)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${_h}`),n.addEventListener("webglcontextlost",z,!1),n.addEventListener("webglcontextrestored",X,!1),n.addEventListener("webglcontextcreationerror",te,!1),D===null){const N="webgl2";if(D=ut(N,C),D===null)throw ut(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ye,$e,Se,ft,Le,Ie,L,E,W,ee,ie,J,we,le,he,Fe,se,pe,We,Ae,ve,Re,De,st;function M(){Ye=new _T(D),Ye.init(),Re=new nC(D,Ye),$e=new dT(D,Ye,e,Re),Se=new JA(D),ft=new ST(D),Le=new BA,Ie=new tC(D,Ye,Se,Le,$e,Re,ft),L=new pT(_),E=new vT(_),W=new R1(D),De=new uT(D,W),ee=new xT(D,W,ft,De),ie=new ET(D,ee,W,ft),We=new MT(D,$e,Ie),Fe=new hT(Le),J=new kA(_,L,E,Ye,$e,De,Fe),we=new uC(_,Le),le=new HA,he=new YA(Ye),pe=new cT(_,L,E,Se,ie,h,l),se=new QA(_,ie,$e),st=new fC(D,ft,$e,Se),Ae=new fT(D,Ye,ft),ve=new yT(D,Ye,ft),ft.programs=J.programs,_.capabilities=$e,_.extensions=Ye,_.properties=Le,_.renderLists=le,_.shadowMap=se,_.state=Se,_.info=ft}M();const B=new lC(_,D);this.xr=B,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const C=Ye.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ye.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(C){C!==void 0&&(Z=C,this.setSize($,V,!1))},this.getSize=function(C){return C.set($,V)},this.setSize=function(C,N,H=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=C,V=N,n.width=Math.floor(C*Z),n.height=Math.floor(N*Z),H===!0&&(n.style.width=C+"px",n.style.height=N+"px"),this.setViewport(0,0,C,N)},this.getDrawingBufferSize=function(C){return C.set($*Z,V*Z).floor()},this.setDrawingBufferSize=function(C,N,H){$=C,V=N,Z=H,n.width=Math.floor(C*H),n.height=Math.floor(N*H),this.setViewport(0,0,C,N)},this.getCurrentViewport=function(C){return C.copy(y)},this.getViewport=function(C){return C.copy(Q)},this.setViewport=function(C,N,H,G){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,N,H,G),Se.viewport(y.copy(Q).multiplyScalar(Z).round())},this.getScissor=function(C){return C.copy(oe)},this.setScissor=function(C,N,H,G){C.isVector4?oe.set(C.x,C.y,C.z,C.w):oe.set(C,N,H,G),Se.scissor(b.copy(oe).multiplyScalar(Z).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(C){Se.setScissorTest(xe=C)},this.setOpaqueSort=function(C){I=C},this.setTransparentSort=function(C){j=C},this.getClearColor=function(C){return C.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(C=!0,N=!0,H=!0){let G=0;if(C){let U=!1;if(w!==null){const ae=w.texture.format;U=ae===Th||ae===wh||ae===Eh}if(U){const ae=w.texture.type,de=ae===Ei||ae===Ur||ae===fa||ae===Zs||ae===Sh||ae===Mh,_e=pe.getClearColor(),ye=pe.getClearAlpha(),Ce=_e.r,Pe=_e.g,Te=_e.b;de?(p[0]=Ce,p[1]=Pe,p[2]=Te,p[3]=ye,D.clearBufferuiv(D.COLOR,0,p)):(x[0]=Ce,x[1]=Pe,x[2]=Te,x[3]=ye,D.clearBufferiv(D.COLOR,0,x))}else G|=D.COLOR_BUFFER_BIT}N&&(G|=D.DEPTH_BUFFER_BIT),H&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",z,!1),n.removeEventListener("webglcontextrestored",X,!1),n.removeEventListener("webglcontextcreationerror",te,!1),le.dispose(),he.dispose(),Le.dispose(),L.dispose(),E.dispose(),ie.dispose(),De.dispose(),st.dispose(),J.dispose(),B.dispose(),B.removeEventListener("sessionstart",_t),B.removeEventListener("sessionend",Ai),Ut.stop()};function z(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const C=ft.autoReset,N=se.enabled,H=se.autoUpdate,G=se.needsUpdate,U=se.type;M(),ft.autoReset=C,se.enabled=N,se.autoUpdate=H,se.needsUpdate=G,se.type=U}function te(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Me(C){const N=C.target;N.removeEventListener("dispose",Me),be(N)}function be(C){gt(C),Le.remove(C)}function gt(C){const N=Le.get(C).programs;N!==void 0&&(N.forEach(function(H){J.releaseProgram(H)}),C.isShaderMaterial&&J.releaseShaderCache(C))}this.renderBufferDirect=function(C,N,H,G,U,ae){N===null&&(N=Oe);const de=U.isMesh&&U.matrixWorld.determinant()<0,_e=C_(C,N,H,G,U);Se.setMaterial(G,de);let ye=H.index,Ce=1;if(G.wireframe===!0){if(ye=ee.getWireframeAttribute(H),ye===void 0)return;Ce=2}const Pe=H.drawRange,Te=H.attributes.position;let qe=Pe.start*Ce,dt=(Pe.start+Pe.count)*Ce;ae!==null&&(qe=Math.max(qe,ae.start*Ce),dt=Math.min(dt,(ae.start+ae.count)*Ce)),ye!==null?(qe=Math.max(qe,0),dt=Math.min(dt,ye.count)):Te!=null&&(qe=Math.max(qe,0),dt=Math.min(dt,Te.count));const ht=dt-qe;if(ht<0||ht===1/0)return;De.setup(U,G,_e,H,ye);let ln,Ke=Ae;if(ye!==null&&(ln=W.get(ye),Ke=ve,Ke.setIndex(ln)),U.isMesh)G.wireframe===!0?(Se.setLineWidth(G.wireframeLinewidth*tt()),Ke.setMode(D.LINES)):Ke.setMode(D.TRIANGLES);else if(U.isLine){let Ee=G.linewidth;Ee===void 0&&(Ee=1),Se.setLineWidth(Ee*tt()),U.isLineSegments?Ke.setMode(D.LINES):U.isLineLoop?Ke.setMode(D.LINE_LOOP):Ke.setMode(D.LINE_STRIP)}else U.isPoints?Ke.setMode(D.POINTS):U.isSprite&&Ke.setMode(D.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ke.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))Ke.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ee=U._multiDrawStarts,Ft=U._multiDrawCounts,Ze=U._multiDrawCount,Rn=ye?W.get(ye).bytesPerElement:1,Vr=Le.get(G).currentProgram.getUniforms();for(let cn=0;cn<Ze;cn++)Vr.setValue(D,"_gl_DrawID",cn),Ke.render(Ee[cn]/Rn,Ft[cn])}else if(U.isInstancedMesh)Ke.renderInstances(qe,ht,U.count);else if(H.isInstancedBufferGeometry){const Ee=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ft=Math.min(H.instanceCount,Ee);Ke.renderInstances(qe,ht,Ft)}else Ke.render(qe,ht)};function Mt(C,N,H){C.transparent===!0&&C.side===Kn&&C.forceSinglePass===!1?(C.side=on,C.needsUpdate=!0,ya(C,N,H),C.side=ir,C.needsUpdate=!0,ya(C,N,H),C.side=Kn):ya(C,N,H)}this.compile=function(C,N,H=null){H===null&&(H=C),m=he.get(H),m.init(N),g.push(m),H.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),C!==H&&C.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const G=new Set;return C.traverse(function(U){const ae=U.material;if(ae)if(Array.isArray(ae))for(let de=0;de<ae.length;de++){const _e=ae[de];Mt(_e,H,U),G.add(_e)}else Mt(ae,H,U),G.add(ae)}),g.pop(),m=null,G},this.compileAsync=function(C,N,H=null){const G=this.compile(C,N,H);return new Promise(U=>{function ae(){if(G.forEach(function(de){Le.get(de).currentProgram.isReady()&&G.delete(de)}),G.size===0){U(C);return}setTimeout(ae,10)}Ye.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Xe=null;function Et(C){Xe&&Xe(C)}function _t(){Ut.stop()}function Ai(){Ut.start()}const Ut=new p_;Ut.setAnimationLoop(Et),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(C){Xe=C,B.setAnimationLoop(C),C===null?Ut.stop():Ut.start()},B.addEventListener("sessionstart",_t),B.addEventListener("sessionend",Ai),this.render=function(C,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(N),N=B.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,N,w),m=he.get(C,g.length),m.init(N),g.push(m),ue.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),He.setFromProjectionMatrix(ue),ne=this.localClippingEnabled,K=Fe.init(this.clippingPlanes,ne),v=le.get(C,f.length),v.init(),f.push(v),B.enabled===!0&&B.isPresenting===!0){const ae=_.xr.getDepthSensingMesh();ae!==null&&ii(ae,N,-1/0,_.sortObjects)}ii(C,N,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(I,j),ze=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,ze&&pe.addToRenderList(v,C),this.info.render.frame++,K===!0&&Fe.beginShadows();const H=m.state.shadowsArray;se.render(H,C,N),K===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=v.opaque,U=v.transmissive;if(m.setupLights(),N.isArrayCamera){const ae=N.cameras;if(U.length>0)for(let de=0,_e=ae.length;de<_e;de++){const ye=ae[de];lo(G,U,C,ye)}ze&&pe.render(C);for(let de=0,_e=ae.length;de<_e;de++){const ye=ae[de];cr(v,C,ye,ye.viewport)}}else U.length>0&&lo(G,U,C,N),ze&&pe.render(C),cr(v,C,N);w!==null&&(Ie.updateMultisampleRenderTarget(w),Ie.updateRenderTargetMipmap(w)),C.isScene===!0&&C.onAfterRender(_,C,N),De.resetDefaultState(),P=-1,A=null,g.pop(),g.length>0?(m=g[g.length-1],K===!0&&Fe.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function ii(C,N,H,G){if(C.visible===!1)return;if(C.layers.test(N.layers)){if(C.isGroup)H=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(N);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||He.intersectsSprite(C)){G&&Ue.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ue);const de=ie.update(C),_e=C.material;_e.visible&&v.push(C,de,_e,H,Ue.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||He.intersectsObject(C))){const de=ie.update(C),_e=C.material;if(G&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ue.copy(C.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Ue.copy(de.boundingSphere.center)),Ue.applyMatrix4(C.matrixWorld).applyMatrix4(ue)),Array.isArray(_e)){const ye=de.groups;for(let Ce=0,Pe=ye.length;Ce<Pe;Ce++){const Te=ye[Ce],qe=_e[Te.materialIndex];qe&&qe.visible&&v.push(C,de,qe,H,Ue.z,Te)}}else _e.visible&&v.push(C,de,_e,H,Ue.z,null)}}const ae=C.children;for(let de=0,_e=ae.length;de<_e;de++)ii(ae[de],N,H,G)}function cr(C,N,H,G){const U=C.opaque,ae=C.transmissive,de=C.transparent;m.setupLightsView(H),K===!0&&Fe.setGlobalState(_.clippingPlanes,H),G&&Se.viewport(y.copy(G)),U.length>0&&xa(U,N,H),ae.length>0&&xa(ae,N,H),de.length>0&&xa(de,N,H),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function lo(C,N,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new Fr(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?va:Ei,minFilter:Tr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ae=m.state.transmissionRenderTarget[G.id],de=G.viewport||y;ae.setSize(de.z,de.w);const _e=_.getRenderTarget();_.setRenderTarget(ae),_.getClearColor(O),Y=_.getClearAlpha(),Y<1&&_.setClearColor(16777215,.5),_.clear(),ze&&pe.render(H);const ye=_.toneMapping;_.toneMapping=Ji;const Ce=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),K===!0&&Fe.setGlobalState(_.clippingPlanes,G),xa(C,H,G),Ie.updateMultisampleRenderTarget(ae),Ie.updateRenderTargetMipmap(ae),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let Te=0,qe=N.length;Te<qe;Te++){const dt=N[Te],ht=dt.object,ln=dt.geometry,Ke=dt.material,Ee=dt.group;if(Ke.side===Kn&&ht.layers.test(G.layers)){const Ft=Ke.side;Ke.side=on,Ke.needsUpdate=!0,Nh(ht,H,G,ln,Ke,Ee),Ke.side=Ft,Ke.needsUpdate=!0,Pe=!0}}Pe===!0&&(Ie.updateMultisampleRenderTarget(ae),Ie.updateRenderTargetMipmap(ae))}_.setRenderTarget(_e),_.setClearColor(O,Y),Ce!==void 0&&(G.viewport=Ce),_.toneMapping=ye}function xa(C,N,H){const G=N.isScene===!0?N.overrideMaterial:null;for(let U=0,ae=C.length;U<ae;U++){const de=C[U],_e=de.object,ye=de.geometry,Ce=G===null?de.material:G,Pe=de.group;_e.layers.test(H.layers)&&Nh(_e,N,H,ye,Ce,Pe)}}function Nh(C,N,H,G,U,ae){C.onBeforeRender(_,N,H,G,U,ae),C.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),U.transparent===!0&&U.side===Kn&&U.forceSinglePass===!1?(U.side=on,U.needsUpdate=!0,_.renderBufferDirect(H,N,G,U,C,ae),U.side=ir,U.needsUpdate=!0,_.renderBufferDirect(H,N,G,U,C,ae),U.side=Kn):_.renderBufferDirect(H,N,G,U,C,ae),C.onAfterRender(_,N,H,G,U,ae)}function ya(C,N,H){N.isScene!==!0&&(N=Oe);const G=Le.get(C),U=m.state.lights,ae=m.state.shadowsArray,de=U.state.version,_e=J.getParameters(C,U.state,ae,N,H),ye=J.getProgramCacheKey(_e);let Ce=G.programs;G.environment=C.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(C.isMeshStandardMaterial?E:L).get(C.envMap||G.environment),G.envMapRotation=G.environment!==null&&C.envMap===null?N.environmentRotation:C.envMapRotation,Ce===void 0&&(C.addEventListener("dispose",Me),Ce=new Map,G.programs=Ce);let Pe=Ce.get(ye);if(Pe!==void 0){if(G.currentProgram===Pe&&G.lightsStateVersion===de)return Fh(C,_e),Pe}else _e.uniforms=J.getUniforms(C),C.onBeforeCompile(_e,_),Pe=J.acquireProgram(_e,ye),Ce.set(ye,Pe),G.uniforms=_e.uniforms;const Te=G.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Te.clippingPlanes=Fe.uniform),Fh(C,_e),G.needsLights=b_(C),G.lightsStateVersion=de,G.needsLights&&(Te.ambientLightColor.value=U.state.ambient,Te.lightProbe.value=U.state.probe,Te.directionalLights.value=U.state.directional,Te.directionalLightShadows.value=U.state.directionalShadow,Te.spotLights.value=U.state.spot,Te.spotLightShadows.value=U.state.spotShadow,Te.rectAreaLights.value=U.state.rectArea,Te.ltc_1.value=U.state.rectAreaLTC1,Te.ltc_2.value=U.state.rectAreaLTC2,Te.pointLights.value=U.state.point,Te.pointLightShadows.value=U.state.pointShadow,Te.hemisphereLights.value=U.state.hemi,Te.directionalShadowMap.value=U.state.directionalShadowMap,Te.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Te.spotShadowMap.value=U.state.spotShadowMap,Te.spotLightMatrix.value=U.state.spotLightMatrix,Te.spotLightMap.value=U.state.spotLightMap,Te.pointShadowMap.value=U.state.pointShadowMap,Te.pointShadowMatrix.value=U.state.pointShadowMatrix),G.currentProgram=Pe,G.uniformsList=null,Pe}function Uh(C){if(C.uniformsList===null){const N=C.currentProgram.getUniforms();C.uniformsList=Pl.seqWithValue(N.seq,C.uniforms)}return C.uniformsList}function Fh(C,N){const H=Le.get(C);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function C_(C,N,H,G,U){N.isScene!==!0&&(N=Oe),Ie.resetTextureUnits();const ae=N.fog,de=G.isMeshStandardMaterial?N.environment:null,_e=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:lr,ye=(G.isMeshStandardMaterial?E:L).get(G.envMap||de),Ce=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Pe=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Te=!!H.morphAttributes.position,qe=!!H.morphAttributes.normal,dt=!!H.morphAttributes.color;let ht=Ji;G.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ht=_.toneMapping);const ln=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ke=ln!==void 0?ln.length:0,Ee=Le.get(G),Ft=m.state.lights;if(K===!0&&(ne===!0||C!==A)){const xn=C===A&&G.id===P;Fe.setState(G,C,xn)}let Ze=!1;G.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Ft.state.version||Ee.outputColorSpace!==_e||U.isBatchedMesh&&Ee.batching===!1||!U.isBatchedMesh&&Ee.batching===!0||U.isBatchedMesh&&Ee.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ee.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ee.instancing===!1||!U.isInstancedMesh&&Ee.instancing===!0||U.isSkinnedMesh&&Ee.skinning===!1||!U.isSkinnedMesh&&Ee.skinning===!0||U.isInstancedMesh&&Ee.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ee.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ee.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ee.instancingMorph===!1&&U.morphTexture!==null||Ee.envMap!==ye||G.fog===!0&&Ee.fog!==ae||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Fe.numPlanes||Ee.numIntersection!==Fe.numIntersection)||Ee.vertexAlphas!==Ce||Ee.vertexTangents!==Pe||Ee.morphTargets!==Te||Ee.morphNormals!==qe||Ee.morphColors!==dt||Ee.toneMapping!==ht||Ee.morphTargetsCount!==Ke)&&(Ze=!0):(Ze=!0,Ee.__version=G.version);let Rn=Ee.currentProgram;Ze===!0&&(Rn=ya(G,N,U));let Vr=!1,cn=!1,Oc=!1;const xt=Rn.getUniforms(),Ci=Ee.uniforms;if(Se.useProgram(Rn.program)&&(Vr=!0,cn=!0,Oc=!0),G.id!==P&&(P=G.id,cn=!0),Vr||A!==C){xt.setValue(D,"projectionMatrix",C.projectionMatrix),xt.setValue(D,"viewMatrix",C.matrixWorldInverse);const xn=xt.map.cameraPosition;xn!==void 0&&xn.setValue(D,fe.setFromMatrixPosition(C.matrixWorld)),$e.logarithmicDepthBuffer&&xt.setValue(D,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&xt.setValue(D,"isOrthographic",C.isOrthographicCamera===!0),A!==C&&(A=C,cn=!0,Oc=!0)}if(U.isSkinnedMesh){xt.setOptional(D,U,"bindMatrix"),xt.setOptional(D,U,"bindMatrixInverse");const xn=U.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),xt.setValue(D,"boneTexture",xn.boneTexture,Ie))}U.isBatchedMesh&&(xt.setOptional(D,U,"batchingTexture"),xt.setValue(D,"batchingTexture",U._matricesTexture,Ie),xt.setOptional(D,U,"batchingIdTexture"),xt.setValue(D,"batchingIdTexture",U._indirectTexture,Ie),xt.setOptional(D,U,"batchingColorTexture"),U._colorsTexture!==null&&xt.setValue(D,"batchingColorTexture",U._colorsTexture,Ie));const kc=H.morphAttributes;if((kc.position!==void 0||kc.normal!==void 0||kc.color!==void 0)&&We.update(U,H,Rn),(cn||Ee.receiveShadow!==U.receiveShadow)&&(Ee.receiveShadow=U.receiveShadow,xt.setValue(D,"receiveShadow",U.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Ci.envMap.value=ye,Ci.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(Ci.envMapIntensity.value=N.environmentIntensity),cn&&(xt.setValue(D,"toneMappingExposure",_.toneMappingExposure),Ee.needsLights&&R_(Ci,Oc),ae&&G.fog===!0&&we.refreshFogUniforms(Ci,ae),we.refreshMaterialUniforms(Ci,G,Z,V,m.state.transmissionRenderTarget[C.id]),Pl.upload(D,Uh(Ee),Ci,Ie)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Pl.upload(D,Uh(Ee),Ci,Ie),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&xt.setValue(D,"center",U.center),xt.setValue(D,"modelViewMatrix",U.modelViewMatrix),xt.setValue(D,"normalMatrix",U.normalMatrix),xt.setValue(D,"modelMatrix",U.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const xn=G.uniformsGroups;for(let Bc=0,P_=xn.length;Bc<P_;Bc++){const Oh=xn[Bc];st.update(Oh,Rn),st.bind(Oh,Rn)}}return Rn}function R_(C,N){C.ambientLightColor.needsUpdate=N,C.lightProbe.needsUpdate=N,C.directionalLights.needsUpdate=N,C.directionalLightShadows.needsUpdate=N,C.pointLights.needsUpdate=N,C.pointLightShadows.needsUpdate=N,C.spotLights.needsUpdate=N,C.spotLightShadows.needsUpdate=N,C.rectAreaLights.needsUpdate=N,C.hemisphereLights.needsUpdate=N}function b_(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(C,N,H){Le.get(C.texture).__webglTexture=N,Le.get(C.depthTexture).__webglTexture=H;const G=Le.get(C);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,N){const H=Le.get(C);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(C,N=0,H=0){w=C,R=N,T=H;let G=!0,U=null,ae=!1,de=!1;if(C){const ye=Le.get(C);ye.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(D.FRAMEBUFFER,null),G=!1):ye.__webglFramebuffer===void 0?Ie.setupRenderTarget(C):ye.__hasExternalTextures&&Ie.rebindTextures(C,Le.get(C.texture).__webglTexture,Le.get(C.depthTexture).__webglTexture);const Ce=C.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(de=!0);const Pe=Le.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Pe[N])?U=Pe[N][H]:U=Pe[N],ae=!0):C.samples>0&&Ie.useMultisampledRTT(C)===!1?U=Le.get(C).__webglMultisampledFramebuffer:Array.isArray(Pe)?U=Pe[H]:U=Pe,y.copy(C.viewport),b.copy(C.scissor),F=C.scissorTest}else y.copy(Q).multiplyScalar(Z).floor(),b.copy(oe).multiplyScalar(Z).floor(),F=xe;if(Se.bindFramebuffer(D.FRAMEBUFFER,U)&&G&&Se.drawBuffers(C,U),Se.viewport(y),Se.scissor(b),Se.setScissorTest(F),ae){const ye=Le.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,ye.__webglTexture,H)}else if(de){const ye=Le.get(C.texture),Ce=N||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.__webglTexture,H||0,Ce)}P=-1},this.readRenderTargetPixels=function(C,N,H,G,U,ae,de){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Le.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&de!==void 0&&(_e=_e[de]),_e){Se.bindFramebuffer(D.FRAMEBUFFER,_e);try{const ye=C.texture,Ce=ye.format,Pe=ye.type;if(!$e.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=C.width-G&&H>=0&&H<=C.height-U&&D.readPixels(N,H,G,U,Re.convert(Ce),Re.convert(Pe),ae)}finally{const ye=w!==null?Le.get(w).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(C,N,H,G,U,ae,de){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Le.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&de!==void 0&&(_e=_e[de]),_e){Se.bindFramebuffer(D.FRAMEBUFFER,_e);try{const ye=C.texture,Ce=ye.format,Pe=ye.type;if(!$e.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=C.width-G&&H>=0&&H<=C.height-U){const Te=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.bufferData(D.PIXEL_PACK_BUFFER,ae.byteLength,D.STREAM_READ),D.readPixels(N,H,G,U,Re.convert(Ce),Re.convert(Pe),0),D.flush();const qe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await i1(D,qe,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ae)}finally{D.deleteBuffer(Te),D.deleteSync(qe)}return ae}}finally{const ye=w!==null?Le.get(w).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,ye)}}},this.copyFramebufferToTexture=function(C,N=null,H=0){C.isTexture!==!0&&(Xo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,C=arguments[1]);const G=Math.pow(2,-H),U=Math.floor(C.image.width*G),ae=Math.floor(C.image.height*G),de=N!==null?N.x:0,_e=N!==null?N.y:0;Ie.setTexture2D(C,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,de,_e,U,ae),Se.unbindTexture()},this.copyTextureToTexture=function(C,N,H=null,G=null,U=0){C.isTexture!==!0&&(Xo("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,C=arguments[1],N=arguments[2],U=arguments[3]||0,H=null);let ae,de,_e,ye,Ce,Pe;H!==null?(ae=H.max.x-H.min.x,de=H.max.y-H.min.y,_e=H.min.x,ye=H.min.y):(ae=C.image.width,de=C.image.height,_e=0,ye=0),G!==null?(Ce=G.x,Pe=G.y):(Ce=0,Pe=0);const Te=Re.convert(N.format),qe=Re.convert(N.type);Ie.setTexture2D(N,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const dt=D.getParameter(D.UNPACK_ROW_LENGTH),ht=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ln=D.getParameter(D.UNPACK_SKIP_PIXELS),Ke=D.getParameter(D.UNPACK_SKIP_ROWS),Ee=D.getParameter(D.UNPACK_SKIP_IMAGES),Ft=C.isCompressedTexture?C.mipmaps[U]:C.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Ft.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ft.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,_e),D.pixelStorei(D.UNPACK_SKIP_ROWS,ye),C.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,U,Ce,Pe,ae,de,Te,qe,Ft.data):C.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,U,Ce,Pe,Ft.width,Ft.height,Te,Ft.data):D.texSubImage2D(D.TEXTURE_2D,U,Ce,Pe,ae,de,Te,qe,Ft),D.pixelStorei(D.UNPACK_ROW_LENGTH,dt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ht),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ln),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ke),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ee),U===0&&N.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(C,N,H=null,G=null,U=0){C.isTexture!==!0&&(Xo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,C=arguments[2],N=arguments[3],U=arguments[4]||0);let ae,de,_e,ye,Ce,Pe,Te,qe,dt;const ht=C.isCompressedTexture?C.mipmaps[U]:C.image;H!==null?(ae=H.max.x-H.min.x,de=H.max.y-H.min.y,_e=H.max.z-H.min.z,ye=H.min.x,Ce=H.min.y,Pe=H.min.z):(ae=ht.width,de=ht.height,_e=ht.depth,ye=0,Ce=0,Pe=0),G!==null?(Te=G.x,qe=G.y,dt=G.z):(Te=0,qe=0,dt=0);const ln=Re.convert(N.format),Ke=Re.convert(N.type);let Ee;if(N.isData3DTexture)Ie.setTexture3D(N,0),Ee=D.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)Ie.setTexture2DArray(N,0),Ee=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const Ft=D.getParameter(D.UNPACK_ROW_LENGTH),Ze=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Rn=D.getParameter(D.UNPACK_SKIP_PIXELS),Vr=D.getParameter(D.UNPACK_SKIP_ROWS),cn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ht.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ht.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ye),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ce),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Pe),C.isDataTexture||C.isData3DTexture?D.texSubImage3D(Ee,U,Te,qe,dt,ae,de,_e,ln,Ke,ht.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(Ee,U,Te,qe,dt,ae,de,_e,ln,ht.data):D.texSubImage3D(Ee,U,Te,qe,dt,ae,de,_e,ln,Ke,ht),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ft),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ze),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Rn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Vr),D.pixelStorei(D.UNPACK_SKIP_IMAGES,cn),U===0&&N.generateMipmaps&&D.generateMipmap(Ee),Se.unbindTexture()},this.initRenderTarget=function(C){Le.get(C).__webglFramebuffer===void 0&&Ie.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Ie.setTextureCube(C,0):C.isData3DTexture?Ie.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Ie.setTexture2DArray(C,0):Ie.setTexture2D(C,0),Se.unbindTexture()},this.resetState=function(){R=0,T=0,w=null,Se.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Ah?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===Ic?"display-p3":"srgb"}}class hC extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class S_ extends so{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fc=new k,dc=new k,tg=new mt,Ao=new Rh,ul=new Nc,Hu=new k,ng=new k;class pC extends bt{constructor(e=new Ti,n=new S_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)fc.fromBufferAttribute(n,r-1),dc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=fc.distanceTo(dc);e.setAttribute("lineDistance",new zn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ul.copy(i.boundingSphere),ul.applyMatrix4(r),ul.radius+=s,e.ray.intersectsSphere(ul)===!1)return;tg.copy(r).invert(),Ao.copy(e.ray).applyMatrix4(tg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let v=p,m=x-1;v<m;v+=c){const f=u.getX(v),g=u.getX(v+1),_=fl(this,e,Ao,l,f,g);_&&n.push(_)}if(this.isLineLoop){const v=u.getX(x-1),m=u.getX(p),f=fl(this,e,Ao,l,v,m);f&&n.push(f)}}else{const p=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let v=p,m=x-1;v<m;v+=c){const f=fl(this,e,Ao,l,v,v+1);f&&n.push(f)}if(this.isLineLoop){const v=fl(this,e,Ao,l,x-1,p);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function fl(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(fc.fromBufferAttribute(o,r),dc.fromBufferAttribute(o,s),n.distanceSqToSegment(fc,dc,Hu,ng)>i)return;Hu.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Hu);if(!(l<e.near||l>e.far))return{distance:l,point:ng.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}const ig=new k,rg=new k;class mC extends pC{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)ig.fromBufferAttribute(n,r),rg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ig.distanceTo(rg);e.setAttribute("lineDistance",new zn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gC extends so{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=t_,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Lh extends bt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Vu=new mt,sg=new k,og=new k;class M_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bh,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;sg.setFromMatrixPosition(e.matrixWorld),n.position.copy(sg),og.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(og),n.updateMatrixWorld(),Vu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Vu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class vC extends M_{constructor(){super(new hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,i=Js*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class _C extends Lh{constructor(e,n,i=0,r=Math.PI/3,s=0,o=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new vC}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class xC extends M_{constructor(){super(new m_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yC extends Lh{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new xC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class SC extends Lh{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class ag{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Xt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class MC extends mC{constructor(e=10,n=10,i=4473924,r=8947848){i=new Ve(i),r=new Ve(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let h=0,p=0,x=-a;h<=n;h++,x+=o){l.push(-a,0,x,a,0,x),l.push(x,0,-a,x,0,a);const v=h===s?i:r;v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3}const u=new Ti;u.setAttribute("position",new zn(l,3)),u.setAttribute("color",new zn(c,3));const d=new S_({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_h}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_h);const lg={type:"change"},Gu={type:"start"},cg={type:"end"},dl=new Rh,ug=new ki,EC=Math.cos(70*t1.DEG2RAD);class wC extends Hr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xr.ROTATE,MIDDLE:Xr.DOLLY,RIGHT:Xr.PAN},this.touches={ONE:jr.ROTATE,TWO:jr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(M){M.addEventListener("keydown",he),this._domElementKeyEvents=M},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",he),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(lg),i.update(),s=r.NONE},this.update=function(){const M=new k,B=new Or().setFromUnitVectors(e.up,new k(0,1,0)),z=B.clone().invert(),X=new k,te=new Or,Me=new k,be=2*Math.PI;return function(Mt=null){const Xe=i.object.position;M.copy(Xe).sub(i.target),M.applyQuaternion(B),a.setFromVector3(M),i.autoRotate&&s===r.NONE&&F(y(Mt)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Et=i.minAzimuthAngle,_t=i.maxAzimuthAngle;isFinite(Et)&&isFinite(_t)&&(Et<-Math.PI?Et+=be:Et>Math.PI&&(Et-=be),_t<-Math.PI?_t+=be:_t>Math.PI&&(_t-=be),Et<=_t?a.theta=Math.max(Et,Math.min(_t,a.theta)):a.theta=a.theta>(Et+_t)/2?Math.max(Et,a.theta):Math.min(_t,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Ai=!1;if(i.zoomToCursor&&T||i.object.isOrthographicCamera)a.radius=Q(a.radius);else{const Ut=a.radius;a.radius=Q(a.radius*c),Ai=Ut!=a.radius}if(M.setFromSpherical(a),M.applyQuaternion(z),Xe.copy(i.target).add(M),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&T){let Ut=null;if(i.object.isPerspectiveCamera){const ii=M.length();Ut=Q(ii*c);const cr=ii-Ut;i.object.position.addScaledVector(S,cr),i.object.updateMatrixWorld(),Ai=!!cr}else if(i.object.isOrthographicCamera){const ii=new k(R.x,R.y,0);ii.unproject(i.object);const cr=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Ai=cr!==i.object.zoom;const lo=new k(R.x,R.y,0);lo.unproject(i.object),i.object.position.sub(lo).add(ii),i.object.updateMatrixWorld(),Ut=M.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Ut!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Ut).add(i.object.position):(dl.origin.copy(i.object.position),dl.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(dl.direction))<EC?e.lookAt(i.target):(ug.setFromNormalAndCoplanarPoint(i.object.up,i.target),dl.intersectPlane(ug,i.target))))}else if(i.object.isOrthographicCamera){const Ut=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),Ut!==i.object.zoom&&(i.object.updateProjectionMatrix(),Ai=!0)}return c=1,T=!1,Ai||X.distanceToSquared(i.object.position)>o||8*(1-te.dot(i.object.quaternion))>o||Me.distanceToSquared(i.target)>o?(i.dispatchEvent(lg),X.copy(i.object.position),te.copy(i.object.quaternion),Me.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",pe),i.domElement.removeEventListener("pointerdown",Ie),i.domElement.removeEventListener("pointercancel",E),i.domElement.removeEventListener("wheel",ie),i.domElement.removeEventListener("pointermove",L),i.domElement.removeEventListener("pointerup",E),i.domElement.getRootNode().removeEventListener("keydown",we,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",he),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new ag,l=new ag;let c=1;const u=new k,d=new Ne,h=new Ne,p=new Ne,x=new Ne,v=new Ne,m=new Ne,f=new Ne,g=new Ne,_=new Ne,S=new k,R=new Ne;let T=!1;const w=[],P={};let A=!1;function y(M){return M!==null?2*Math.PI/60*i.autoRotateSpeed*M:2*Math.PI/60/60*i.autoRotateSpeed}function b(M){const B=Math.abs(M*.01);return Math.pow(.95,i.zoomSpeed*B)}function F(M){l.theta-=M}function O(M){l.phi-=M}const Y=function(){const M=new k;return function(z,X){M.setFromMatrixColumn(X,0),M.multiplyScalar(-z),u.add(M)}}(),$=function(){const M=new k;return function(z,X){i.screenSpacePanning===!0?M.setFromMatrixColumn(X,1):(M.setFromMatrixColumn(X,0),M.crossVectors(i.object.up,M)),M.multiplyScalar(z),u.add(M)}}(),V=function(){const M=new k;return function(z,X){const te=i.domElement;if(i.object.isPerspectiveCamera){const Me=i.object.position;M.copy(Me).sub(i.target);let be=M.length();be*=Math.tan(i.object.fov/2*Math.PI/180),Y(2*z*be/te.clientHeight,i.object.matrix),$(2*X*be/te.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Y(z*(i.object.right-i.object.left)/i.object.zoom/te.clientWidth,i.object.matrix),$(X*(i.object.top-i.object.bottom)/i.object.zoom/te.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Z(M){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function I(M){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(M,B){if(!i.zoomToCursor)return;T=!0;const z=i.domElement.getBoundingClientRect(),X=M-z.left,te=B-z.top,Me=z.width,be=z.height;R.x=X/Me*2-1,R.y=-(te/be)*2+1,S.set(R.x,R.y,1).unproject(i.object).sub(i.object.position).normalize()}function Q(M){return Math.max(i.minDistance,Math.min(i.maxDistance,M))}function oe(M){d.set(M.clientX,M.clientY)}function xe(M){j(M.clientX,M.clientX),f.set(M.clientX,M.clientY)}function He(M){x.set(M.clientX,M.clientY)}function K(M){h.set(M.clientX,M.clientY),p.subVectors(h,d).multiplyScalar(i.rotateSpeed);const B=i.domElement;F(2*Math.PI*p.x/B.clientHeight),O(2*Math.PI*p.y/B.clientHeight),d.copy(h),i.update()}function ne(M){g.set(M.clientX,M.clientY),_.subVectors(g,f),_.y>0?Z(b(_.y)):_.y<0&&I(b(_.y)),f.copy(g),i.update()}function ue(M){v.set(M.clientX,M.clientY),m.subVectors(v,x).multiplyScalar(i.panSpeed),V(m.x,m.y),x.copy(v),i.update()}function fe(M){j(M.clientX,M.clientY),M.deltaY<0?I(b(M.deltaY)):M.deltaY>0&&Z(b(M.deltaY)),i.update()}function Ue(M){let B=!1;switch(M.code){case i.keys.UP:M.ctrlKey||M.metaKey||M.shiftKey?O(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(0,i.keyPanSpeed),B=!0;break;case i.keys.BOTTOM:M.ctrlKey||M.metaKey||M.shiftKey?O(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(0,-i.keyPanSpeed),B=!0;break;case i.keys.LEFT:M.ctrlKey||M.metaKey||M.shiftKey?F(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(i.keyPanSpeed,0),B=!0;break;case i.keys.RIGHT:M.ctrlKey||M.metaKey||M.shiftKey?F(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(-i.keyPanSpeed,0),B=!0;break}B&&(M.preventDefault(),i.update())}function Oe(M){if(w.length===1)d.set(M.pageX,M.pageY);else{const B=De(M),z=.5*(M.pageX+B.x),X=.5*(M.pageY+B.y);d.set(z,X)}}function ze(M){if(w.length===1)x.set(M.pageX,M.pageY);else{const B=De(M),z=.5*(M.pageX+B.x),X=.5*(M.pageY+B.y);x.set(z,X)}}function tt(M){const B=De(M),z=M.pageX-B.x,X=M.pageY-B.y,te=Math.sqrt(z*z+X*X);f.set(0,te)}function D(M){i.enableZoom&&tt(M),i.enablePan&&ze(M)}function ut(M){i.enableZoom&&tt(M),i.enableRotate&&Oe(M)}function Ye(M){if(w.length==1)h.set(M.pageX,M.pageY);else{const z=De(M),X=.5*(M.pageX+z.x),te=.5*(M.pageY+z.y);h.set(X,te)}p.subVectors(h,d).multiplyScalar(i.rotateSpeed);const B=i.domElement;F(2*Math.PI*p.x/B.clientHeight),O(2*Math.PI*p.y/B.clientHeight),d.copy(h)}function $e(M){if(w.length===1)v.set(M.pageX,M.pageY);else{const B=De(M),z=.5*(M.pageX+B.x),X=.5*(M.pageY+B.y);v.set(z,X)}m.subVectors(v,x).multiplyScalar(i.panSpeed),V(m.x,m.y),x.copy(v)}function Se(M){const B=De(M),z=M.pageX-B.x,X=M.pageY-B.y,te=Math.sqrt(z*z+X*X);g.set(0,te),_.set(0,Math.pow(g.y/f.y,i.zoomSpeed)),Z(_.y),f.copy(g);const Me=(M.pageX+B.x)*.5,be=(M.pageY+B.y)*.5;j(Me,be)}function ft(M){i.enableZoom&&Se(M),i.enablePan&&$e(M)}function Le(M){i.enableZoom&&Se(M),i.enableRotate&&Ye(M)}function Ie(M){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(M.pointerId),i.domElement.addEventListener("pointermove",L),i.domElement.addEventListener("pointerup",E)),!ve(M)&&(We(M),M.pointerType==="touch"?Fe(M):W(M)))}function L(M){i.enabled!==!1&&(M.pointerType==="touch"?se(M):ee(M))}function E(M){switch(Ae(M),w.length){case 0:i.domElement.releasePointerCapture(M.pointerId),i.domElement.removeEventListener("pointermove",L),i.domElement.removeEventListener("pointerup",E),i.dispatchEvent(cg),s=r.NONE;break;case 1:const B=w[0],z=P[B];Fe({pointerId:B,pageX:z.x,pageY:z.y});break}}function W(M){let B;switch(M.button){case 0:B=i.mouseButtons.LEFT;break;case 1:B=i.mouseButtons.MIDDLE;break;case 2:B=i.mouseButtons.RIGHT;break;default:B=-1}switch(B){case Xr.DOLLY:if(i.enableZoom===!1)return;xe(M),s=r.DOLLY;break;case Xr.ROTATE:if(M.ctrlKey||M.metaKey||M.shiftKey){if(i.enablePan===!1)return;He(M),s=r.PAN}else{if(i.enableRotate===!1)return;oe(M),s=r.ROTATE}break;case Xr.PAN:if(M.ctrlKey||M.metaKey||M.shiftKey){if(i.enableRotate===!1)return;oe(M),s=r.ROTATE}else{if(i.enablePan===!1)return;He(M),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Gu)}function ee(M){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;K(M);break;case r.DOLLY:if(i.enableZoom===!1)return;ne(M);break;case r.PAN:if(i.enablePan===!1)return;ue(M);break}}function ie(M){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(M.preventDefault(),i.dispatchEvent(Gu),fe(J(M)),i.dispatchEvent(cg))}function J(M){const B=M.deltaMode,z={clientX:M.clientX,clientY:M.clientY,deltaY:M.deltaY};switch(B){case 1:z.deltaY*=16;break;case 2:z.deltaY*=100;break}return M.ctrlKey&&!A&&(z.deltaY*=10),z}function we(M){M.key==="Control"&&(A=!0,i.domElement.getRootNode().addEventListener("keyup",le,{passive:!0,capture:!0}))}function le(M){M.key==="Control"&&(A=!1,i.domElement.getRootNode().removeEventListener("keyup",le,{passive:!0,capture:!0}))}function he(M){i.enabled===!1||i.enablePan===!1||Ue(M)}function Fe(M){switch(Re(M),w.length){case 1:switch(i.touches.ONE){case jr.ROTATE:if(i.enableRotate===!1)return;Oe(M),s=r.TOUCH_ROTATE;break;case jr.PAN:if(i.enablePan===!1)return;ze(M),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case jr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;D(M),s=r.TOUCH_DOLLY_PAN;break;case jr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ut(M),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Gu)}function se(M){switch(Re(M),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ye(M),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;$e(M),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ft(M),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Le(M),i.update();break;default:s=r.NONE}}function pe(M){i.enabled!==!1&&M.preventDefault()}function We(M){w.push(M.pointerId)}function Ae(M){delete P[M.pointerId];for(let B=0;B<w.length;B++)if(w[B]==M.pointerId){w.splice(B,1);return}}function ve(M){for(let B=0;B<w.length;B++)if(w[B]==M.pointerId)return!0;return!1}function Re(M){let B=P[M.pointerId];B===void 0&&(B=new Ne,P[M.pointerId]=B),B.set(M.pageX,M.pageY)}function De(M){const B=M.pointerId===w[0]?w[1]:w[0];return P[B]}i.domElement.addEventListener("contextmenu",pe),i.domElement.addEventListener("pointerdown",Ie),i.domElement.addEventListener("pointercancel",E),i.domElement.addEventListener("wheel",ie,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",we,{passive:!0,capture:!0}),this.update()}}const E_=ge.createContext(null),As={black:"#000000",gray:"#666666",red:"#ff0000",orange:"#ff7700",yellow:"#ffff00",green:"#00ff00",teal:"#00ffff",blue:"#0000ff",purple:"#ff00ff"},fg=["black","gray","red","orange","yellow","green","teal","blue","purple"];function Dh(){const t=ge.useContext(E_);if(!t)throw new Error("Missing AppContext");return t}function Ll(t){return t?{display:"none"}:void 0}function w_({className:t,title:e,options:n,value:i,setValue:r}){const s=ge.useCallback(o=>{const a=parseFloat(o.target.value);r(n[a].value)},[n,r]);return q.jsxs(q.Fragment,{children:[e&&q.jsxs("div",{className:"input-title",children:[e,":"]}),q.jsx("select",{className:t,value:n.findIndex(({value:o})=>o===i),onChange:s,children:n.map(({label:o},a)=>q.jsx("option",{value:`${a}`,children:o},a))})]})}function dg({value:t,setValue:e,integer:n}){const[i,r]=ge.useState(`${t}`),s=ge.useCallback(l=>{r(l.target.value);const c=parseFloat(l.target.value);isNaN(c)||e(c)},[r,e]),o=parseFloat(i),a=isNaN(o)||n&&Math.round(o)!==o;return q.jsx("input",{className:a?"number error":"number",type:"text",value:i,onChange:s})}function hg({value:t,setValue:e}){const n=ge.useCallback(i=>{e(i.target.value)},[e]);return q.jsx("input",{className:"string",type:"text",value:t,onChange:n})}function TC({typedef:t,value:e,setValue:n}){return q.jsx(q.Fragment,{children:q.jsx(Rr,{metadata:t.metadata,children:q.jsx(w_,{className:"enum",options:t.enum.map(i=>({label:i,value:i})),value:e,setValue:n})})})}function Fs(t){if("type"in t||"enum"in t)return t.metadata.default;if("elements"in t){const e=t.metadata.default;return e===null?null:Array.from({length:e}).map(n=>Fs(t.elements))}else if("properties"in t){const e={};for(const n of Object.keys(t.properties))e[n]=Fs(t.properties[n]);return e}else if("discriminator"in t){const e=t.metadata.default;return e===null?null:Fs(t.mapping[e])}else if("ref"in t)throw new Error("TODO: implement ref");throw console.error(t),new Error("Unknown typedef")}function AC({schema:t,typedef:e,value:n,setValue:i}){var p;const[r,s]=ge.useState(()=>n.map((x,v)=>v)),o=ge.useCallback(()=>{i(x=>{const v=[...x];return v.push(Fs(e.elements)),v}),s(x=>{const v=x.reduce((f,g)=>Math.max(f,g),0)+1,m=[...x];return m.push(v),m})},[i,e]),a=ge.useCallback(x=>{const v=m=>{const f=[...m];return f.splice(x,1),f};i(v),s(v)},[i,s]),l=ge.useCallback(x=>{i(v=>{const m=[...v];return m.splice(x,0,JSON.parse(JSON.stringify(m[x]))),m}),s(v=>{const m=v.reduce((g,_)=>Math.max(g,_),0)+1,f=[...v];return f.splice(x,0,m),f})},[i,s]),c=ge.useCallback((x,v)=>{const m=f=>{const g=[...f],_=g.splice(x,1)[0];return g.splice(x+v,0,_),g};i(m),s(m)},[i,s]),[u,d]=ge.useState(!1),h=((p=e.metadata)==null?void 0:p.itemTitle)||"{}";return q.jsxs(q.Fragment,{children:[q.jsx(Rr,{metadata:e.metadata,postfix:`(${n.length})`,hide:u,setHide:d}),q.jsx(WS,{children:n.map((x,v)=>q.jsxs("div",{className:"tab elements-item",style:Ll(u),children:[q.jsxs("div",{className:"input-title",children:[h.replace(/\{\}/g,`${v+1}`),":",q.jsxs("div",{style:{float:"right"},children:[q.jsx("button",{title:"Move Up",disabled:v<=0,className:"elements-move",onClick:()=>{c(v,-1)},children:"↑"}),q.jsx("button",{title:"Move Down",disabled:v>=n.length-1,className:"elements-move",onClick:()=>{c(v,1)},children:"↓"}),q.jsx("button",{title:"Duplicate",className:"elements-duplicate",onClick:()=>{l(v)},children:"⊕"}),q.jsx("button",{title:"Remove",className:"elements-remove",onClick:()=>{a(v)},children:"×"})]})]}),q.jsx(Ih,{schema:t,typedef:e.elements,value:x,setValue:m=>{i(f=>{const g=[...f];return g[v]=typeof m=="function"?m(g[v]):m,g})}})]},r[v]))}),n.length<=0&&q.jsx("div",{className:"tab",style:Ll(u),children:q.jsx("p",{children:q.jsx("em",{children:"Empty"})})}),q.jsx("div",{className:"tab",style:Ll(u),children:q.jsx("button",{onClick:o,children:`Add ${h.replace(/\{\}/g,`${n.length+1}`)}`})})]})}function T_({schema:t,typedef:e,value:n,setValue:i,skipTitle:r,hide:s}){const[o,a]=ge.useState(!!e.metadata.startHidden);return q.jsxs(q.Fragment,{children:[!r&&q.jsx(Rr,{metadata:e.metadata,hide:o,setHide:a}),e.metadata.order.map(l=>{const c=e.properties[l];return c?q.jsx("div",{className:e.metadata.untabParams&&l==="params"?void 0:"tab",style:Ll(s||o),children:q.jsx(Ih,{schema:t,typedef:c,value:n[l],setValue:u=>{i(d=>({...d,[l]:typeof u=="function"?u(d[l]):u}))}})},l):q.jsxs("p",{children:["ERROR: Missing typedef for ",l]})})]})}function CC({schema:t,typedef:e,value:n,setValue:i}){const[r,s]=ge.useState(!0),o=(n==null?void 0:n[e.discriminator])??null,[a,l]=ge.useState(()=>{const d=new Map;for(const h of e.metadata.order)o===h?d.set(h,n):d.set(h,Fs(e.mapping[h]));return d}),c=ge.useCallback(d=>{const h=typeof d=="function"?d(o):d;i(h===null?null:a.get(h))},[o,a,i]),u=ge.useCallback(d=>{const h=typeof d=="function"?d(n):d,p=new Map(a);p.set(o,h),l(p),i(h)},[a,n,i,o,l]);return q.jsxs(q.Fragment,{children:[q.jsx(Rr,{metadata:e.metadata}),q.jsxs("div",{className:"hide-wrap",children:[q.jsx(A_,{disabled:o===null,hide:o===null?!0:r,setHide:o===null?()=>{}:s}),q.jsx(w_,{options:[...e.nullable?[{label:e.metadata.nullHint||"<none>",value:null}]:[],...e.metadata.order.map(d=>({label:e.mapping[d].metadata.title||d,value:d}))],value:o,setValue:c})]}),o!==null&&q.jsx(T_,{hide:r,skipTitle:!0,schema:t,typedef:e.mapping[o],value:n,setValue:u},o)]})}function A_({disabled:t,hide:e,setHide:n}){const i=ge.useCallback(()=>{n==null||n(r=>!r)},[n]);return q.jsx(q.Fragment,{children:n&&q.jsx("button",{className:"hide-button",style:t?{opacity:.5}:void 0,onClick:i,children:e?"▶":"▼"})})}function Rr({metadata:{title:t,description:e},postfix:n,hide:i,setHide:r,children:s}){const{units:o}=Dh(),a=t==null?void 0:t.replace(/\(units\)/g,`(${o})`),l=e==null?void 0:e.replace(/\(units\)/g,`(${o})`);return q.jsx(q.Fragment,{children:a&&q.jsxs("div",{className:r?"input-title hide-wrap":"input-title",children:[r&&q.jsx(A_,{hide:i,setHide:r}),q.jsxs("div",{className:"title",children:[q.jsx("span",{style:r?{cursor:"pointer",userSelect:"none"}:void 0,onClick:r?()=>{r(!i)}:void 0,children:n?`${a} ${n}`:a}),l&&q.jsxs(q.Fragment,{children:[" ",q.jsx("span",{className:"description",onClick:()=>{alert(l)},title:l,children:"ⓘ"})]}),":",s&&q.jsxs(q.Fragment,{children:[" ",s]})]})]})})}function Ih({schema:t,typedef:e,value:n,setValue:i}){if("type"in e)switch(e.type){case"float64":case"int32":return q.jsx(Rr,{metadata:e.metadata,children:e.nullable?q.jsxs(q.Fragment,{children:[n===null?q.jsx("input",{className:"number",type:"text",disabled:!0,value:e.metadata.nullHint||"null"}):q.jsx(dg,{value:n,setValue:i,integer:e.type==="int32"}),q.jsx("input",{className:"nullable",type:"checkbox",checked:n!==null,onChange:()=>{i(n===null?e.metadata.defaultNotNull??0:null)}})]}):q.jsx(dg,{value:n,setValue:i,integer:e.type==="int32"})});case"string":return q.jsx(Rr,{metadata:e.metadata,children:e.nullable?q.jsxs(q.Fragment,{children:[n===null?q.jsx("input",{className:"number",type:"text",disabled:!0,value:e.metadata.nullHint||"null"}):q.jsx(hg,{value:n,setValue:i}),q.jsx("input",{className:"nullable",type:"checkbox",checked:n!==null,onChange:()=>{i(n===null?e.metadata.defaultNotNull??"":null)}})]}):q.jsx(hg,{value:n,setValue:i})});case"boolean":return q.jsx(q.Fragment,{children:q.jsx(Rr,{metadata:e.metadata,children:q.jsxs("div",{className:"boolean",children:[q.jsx("button",{className:n?"selected":void 0,onClick:()=>{i(!0)},children:"Yes"})," ",q.jsx("button",{className:n?void 0:"selected",onClick:()=>{i(!1)},children:"No"})]})})})}else{if("enum"in e)return q.jsx(TC,{schema:t,typedef:e,value:n,setValue:i});if("elements"in e)return q.jsx(AC,{schema:t,typedef:e,value:n,setValue:i});if("properties"in e)return q.jsx(T_,{schema:t,typedef:e,value:n,setValue:i});if("discriminator"in e)return q.jsx(CC,{schema:t,typedef:e,value:n,setValue:i});"ref"in e&&console.error("TODO: implement ref")}return q.jsxs("p",{children:["ERROR: Unknown JSON type def! ",q.jsx("pre",{children:JSON.stringify(e)})]})}function RC({schema:t,value:e,setValue:n}){return q.jsx(Ih,{schema:t,typedef:t,value:e,setValue:n})}class pg{constructor(e){Ri(this,"m");e?this.m=[e.m[0],e.m[1],e.m[2],e.m[3],e.m[4],e.m[5]]:this.m=[1,0,0,1,0,0]}reset(){this.m[0]=1,this.m[1]=0,this.m[2]=0,this.m[3]=1,this.m[4]=0,this.m[5]=0}copy(e){this.m[0]=e.m[0],this.m[1]=e.m[1],this.m[2]=e.m[2],this.m[3]=e.m[3],this.m[4]=e.m[4],this.m[5]=e.m[5]}multiply(e){const n=this.m[0]*e.m[0]+this.m[2]*e.m[1],i=this.m[1]*e.m[0]+this.m[3]*e.m[1],r=this.m[0]*e.m[2]+this.m[2]*e.m[3],s=this.m[1]*e.m[2]+this.m[3]*e.m[3],o=this.m[0]*e.m[4]+this.m[2]*e.m[5]+this.m[4],a=this.m[1]*e.m[4]+this.m[3]*e.m[5]+this.m[5];this.m[0]=n,this.m[1]=i,this.m[2]=r,this.m[3]=s,this.m[4]=o,this.m[5]=a}invert(){const e=1/(this.m[0]*this.m[3]-this.m[1]*this.m[2]),n=this.m[3]*e,i=-this.m[1]*e,r=-this.m[2]*e,s=this.m[0]*e,o=e*(this.m[2]*this.m[5]-this.m[3]*this.m[4]),a=e*(this.m[1]*this.m[4]-this.m[0]*this.m[5]);this.m[0]=n,this.m[1]=i,this.m[2]=r,this.m[3]=s,this.m[4]=o,this.m[5]=a}rotate(e){const n=Math.cos(e),i=Math.sin(e),r=this.m[0]*n+this.m[2]*i,s=this.m[1]*n+this.m[3]*i,o=this.m[0]*-i+this.m[2]*n,a=this.m[1]*-i+this.m[3]*n;this.m[0]=r,this.m[1]=s,this.m[2]=o,this.m[3]=a}translate(e){this.m[4]+=this.m[0]*e[0]+this.m[2]*e[1],this.m[5]+=this.m[1]*e[0]+this.m[3]*e[1]}translateXY(e,n){this.m[4]+=this.m[0]*e+this.m[2]*n,this.m[5]+=this.m[1]*e+this.m[3]*n}scale(e){this.m[0]*=e,this.m[1]*=e,this.m[2]*=e,this.m[3]*=e}transformPoint(e){return[e[0]*this.m[0]+e[1]*this.m[2]+this.m[4],e[0]*this.m[1]+e[1]*this.m[3]+this.m[5]]}}class bC{constructor(){Ri(this,"center",[0,0]);Ri(this,"zoom",0);Ri(this,"transform",new pg);Ri(this,"transformInvert",new pg)}zoomFactor(){return Math.pow(2,this.zoom)}calc(e,n){return this.transform.reset(),this.transform.translateXY(e/2,n/2),this.transform.scale(this.zoomFactor()),this.transform.translateXY(-this.center[0],-this.center[1]),this.transformInvert.copy(this.transform),this.transformInvert.invert(),this}screenToPoint(e){return this.transformInvert.transformPoint(e)}pointToScreen(e){return this.transform.transformPoint(e)}copyToContext(e){return e.setTransform(this.transform.m[0],this.transform.m[1],this.transform.m[2],this.transform.m[3],this.transform.m[4],this.transform.m[5]),this}}function PC(t,e,n,i,r,s){const o=a=>{t.fillText(a,n,i),i+=s};for(const a of e.split(`
`))if(t.measureText(a).width<r)o(a);else{const l=a.split(" ");for(let u=0;u<l.length;u++){let d=l[u],h="";for(;d.length>1&&t.measureText(d).width>=r;){const p=d.substr(-1);d=d.substr(0,d.length-1),h=p+h}h&&(l[u]=d,l.splice(u+1,0,h))}let c="";for(;;){const u=l.shift();if(typeof u>"u")break;c?t.measureText(`${c} ${u}`).width<r?c+=` ${u}`:(o(c),c=u):c=u}o(c)}}function LC({grid:t,units:e,items:n,error:i,onView:r,onGrid:s}){const[o,a]=ge.useState(null),l=ge.useCallback(m=>{a(m)},[a]),c=ge.useMemo(()=>{if(!o)return null;const m=new hC;m.background=new Ve(14935789);const f=new hn(75,1,.1,1e3),g=new dC;g.setSize(200,200);const _=new oo(1,1,1),S=new gC({color:new Ve(14532253),side:Kn}),R=new Qn(_,S);R.rotation.x+=.4,R.rotation.y+=.4,m.add(R),m.add(new SC(15790320,1));const T=new _C(16777215,2);T.position.set(0,150,0),T.angle=Math.PI*.2,T.decay=0,m.add(T);const w=new yC(16777215,2);m.add(w);const P=new MC(2e3,100,new Ve(8947848),new Ve(13421772));P.position.y=-9,m.add(P),f.position.set(0,0,2);const A=new wC(f,o);return{scene:m,camera:f,renderer:g,light:T,dlight:w,controls:A}},[o]),u=ge.useMemo(()=>o==null?void 0:o.getContext("2d"),[o]),d=window.devicePixelRatio||1,{debug:h}=Dh(),p=ge.useCallback(()=>{!o||!u||!c||(u.setTransform(1,0,0,1,0,0),u.clearRect(0,0,o.width,o.height),c.dlight.position.set(c.camera.position.x+.32,c.camera.position.y+.39,c.camera.position.z-1.3),c.renderer.render(c.scene,c.camera),u.drawImage(c.renderer.domElement,0,0,o.width,o.height))},[o,u,n,t,d,i,e,h,c]);ge.useEffect(()=>{p()},[p]);const x=ge.useCallback(()=>{o&&p()},[o,p]),v=ge.useRef(!0);return ge.useEffect(()=>{if(!o||!u||!c)return;const m=()=>{const f=o.parentElement;if(f){const g=Math.floor(f.clientWidth),_=Math.floor(f.clientHeight);o.width=g*d,o.height=_*d,c.renderer.setPixelRatio(d),c.renderer.setSize(g,_),c.camera.aspect=g/_,c.camera.updateProjectionMatrix(),o.style.width=`${g}px`,o.style.height=`${_}px`,v.current?(v.current=!1,x()):p()}};return window.addEventListener("resize",m),m(),c.controls.addEventListener("change",p),()=>{c.controls.dispose(),window.removeEventListener("resize",m)}},[o,x,v,d,p,c]),q.jsxs(q.Fragment,{children:[q.jsx("canvas",{ref:l}),q.jsxs("div",{className:"status",children:[q.jsx("button",{onClick:r,children:"View: 3D (WIP)"}),q.jsxs("button",{onClick:s,children:["Grid: ",t?"On":"Off"]}),q.jsx("button",{onClick:x,children:"Center"})]})]})}function DC({grid:t,units:e,items:n,error:i,onView:r,onGrid:s}){const[o,a]=ge.useState(null),l=ge.useCallback(m=>{a(m)},[a]),c=ge.useMemo(()=>o==null?void 0:o.getContext("2d"),[o]),u=window.devicePixelRatio||1,d=ge.useMemo(()=>new bC,[]),{debug:h}=Dh(),p=ge.useCallback(()=>{if(!(!o||!c)){if(c.setTransform(1,0,0,1,0,0),c.clearRect(0,0,o.width,o.height),d.calc(o.width,o.height).copyToContext(c),t){const m=d.screenToPoint([0,0]),f=d.screenToPoint([o.width,o.height]),g=o.width/(f[0]-m[0]),S=15*u/g,R=Math.pow(10,Math.round(Math.log10(S)));c.lineWidth=u/d.zoomFactor();const T=Math.round(m[0]/R)-1,w=Math.round(f[0]/R)+1,P=Math.round(m[1]/R)-1,A=Math.round(f[1]/R)+1;c.beginPath();for(let y=T;y<=w;y++)y%10!==0&&(c.moveTo(y*R,m[1]),c.lineTo(y*R,f[1]));for(let y=P;y<=A;y++)y%10!==0&&(c.moveTo(m[0],y*R),c.lineTo(f[0],y*R));c.strokeStyle="#ccc",c.stroke(),c.beginPath();for(let y=T;y<=w;y++)y%10===0&&(c.moveTo(y*R,m[1]),c.lineTo(y*R,f[1]));for(let y=P;y<=A;y++)y%10===0&&(c.moveTo(m[0],y*R),c.lineTo(f[0],y*R));c.strokeStyle="#888",c.stroke(),c.save(),c.setTransform(u,0,0,u,0,0),c.font="18px/18px sans-serif",c.fillStyle="#000",c.fillText(`Grid size: ${R}${e}`,10,o.height/u-17),c.restore()}if(h){for(const{surface:m,offset:f}of n){const g=m.applyKerf();g!==m&&(g.border.output(c,[1,0,0,1,f[0],f[1]]),c.lineWidth=4*u/d.zoomFactor(),c.strokeStyle="#44007777",c.stroke())}for(const{offset:m,boundingBox:f}of n)c.beginPath(),c.rect(m[0]+f[0][0],m[1]+f[0][1],f[1][0]-f[0][0],f[1][1]-f[0][1]),c.lineWidth=6*u/d.zoomFactor(),c.strokeStyle="#0cc",c.stroke()}for(const m of n){const{surface:f,offset:g}=m;f.border.output(c,[1,0,0,1,g[0],g[1]]),c.fillStyle=As[m.cutColor],c.save(),c.globalAlpha=.125,c.fill(),c.restore(),c.lineWidth=3*u/d.zoomFactor(),c.strokeStyle=As[m.cutColor],c.stroke(),f.cuts.output(c,[1,0,0,1,g[0],g[1]]),c.lineWidth=3*u/d.zoomFactor(),c.strokeStyle=As[m.cutColor],c.stroke(),f.scores.output(c,[1,0,0,1,g[0],g[1]]),c.lineWidth=3*u/d.zoomFactor(),c.strokeStyle=As[m.scoreColor],c.stroke()}if(h)for(const m of n){const{surface:f,offset:g}=m;class _{constructor(T,w){Ri(this,"color");Ri(this,"ctx");this.color=T,this.ctx=w}point(T,w){this.ctx.beginPath(),this.ctx.arc(T,w,3*u/d.zoomFactor(),0,Math.PI*2),this.ctx.fillStyle=this.color,this.ctx.fill()}beginPath(){}moveTo(){}lineTo(T,w){this.point(T,w)}bezierCurveTo(T,w,P,A,y,b){this.point(T,w),this.point(P,A),this.point(y,b)}closePath(){}}const S=f.applyKerf();S!==f&&S.border.output(new _("#93f",c),[1,0,0,1,g[0],g[1]]),f.border.output(new _("#07f",c),[1,0,0,1,g[0],g[1]])}i&&(c.save(),c.setTransform(u,0,0,u,0,0),c.font="bold 22px/22px sans-serif",c.fillStyle="#f00",PC(c,i,10,32,o.width/u-20,26),c.restore())}},[o,c,d,n,t,u,i,e,h]);ge.useEffect(()=>{p()},[p]);const x=ge.useCallback(()=>{if(!o)return;const m=[[0,0],[0,0]];for(const R of n){const T=R.offset[0]+R.boundingBox[0][0],w=R.offset[1]+R.boundingBox[0][1];m[0][0]=Math.min(m[0][0],T),m[0][1]=Math.min(m[0][1],w),m[1][0]=Math.max(m[1][0],T+R.boundingBoxSize[0]),m[1][1]=Math.max(m[1][1],w+R.boundingBoxSize[1])}d.center[0]=(m[0][0]+m[1][0])/2,d.center[1]=(m[0][1]+m[1][1])/2;const f=20,g=o.width/(m[1][0]-m[0][0]+2*f),_=o.height/(m[1][1]-m[0][1]+2*f),S=Math.min(g,_);d.zoom=Math.log2(S),p()},[o,d,p,n]),v=ge.useRef(!0);return ge.useEffect(()=>{if(!o||!c)return;const m=()=>{const y=o.parentElement;if(y){const b=Math.floor(y.clientWidth),F=Math.floor(y.clientHeight);o.width=b*u,o.height=F*u,o.style.width=`${b}px`,o.style.height=`${F}px`,v.current?(v.current=!1,x()):p()}};let f=null;const g=y=>{const b=o.getBoundingClientRect();return[u*(y.clientX-b.left),u*(y.clientY-b.top)]},_=y=>{if(f){const b=d.screenToPoint(y),F=d.screenToPoint(f.pos);f.pos=y,d.center[0]+=F[0]-b[0],d.center[1]+=F[1]-b[1],p()}},S=y=>{f=null},R=y=>{y.preventDefault();const b=g(y);f={buttons:y.buttons,pos:b},_(b)},T=y=>{y.preventDefault(),_(g(y))},w=y=>{y.preventDefault(),f&&S(g(y))},P=y=>{y.preventDefault(),f&&S(g(y))},A=y=>{y.preventDefault();const b=g(y),F=d.screenToPoint(b);d.zoom-=y.deltaY*.003,d.calc(o.width,o.height);const O=d.screenToPoint(b);d.center[0]-=O[0]-F[0],d.center[1]-=O[1]-F[1],p()};return o.addEventListener("mousedown",R),o.addEventListener("mousemove",T),o.addEventListener("mouseout",w),o.addEventListener("mouseup",P),o.addEventListener("wheel",A),window.addEventListener("resize",m),m(),()=>{o.removeEventListener("mousedown",R),o.removeEventListener("mousemove",T),o.removeEventListener("mouseout",w),o.removeEventListener("mouseup",P),o.removeEventListener("wheel",A),window.removeEventListener("resize",m)}},[o,d,x,v,u,p]),q.jsxs(q.Fragment,{children:[q.jsx("canvas",{ref:l}),q.jsxs("div",{className:"status",children:[q.jsx("button",{onClick:r,children:"View: 2D"}),q.jsxs("button",{onClick:s,children:["Grid: ",t?"On":"Off"]}),q.jsx("button",{onClick:x,children:"Center"})]})]})}function mg({value:t,onCancel:e,onImport:n}){const[i,r]=ge.useState(t),s=ge.useCallback(a=>{r(a.currentTarget.value)},[r]),o=ge.useCallback(a=>{a.stopPropagation()},[]);return q.jsxs(q.Fragment,{children:[q.jsx("div",{className:"modal-background",onClick:e}),q.jsx("div",{className:"modal-foreground",onClick:e,children:q.jsxs("div",{className:"inner",onClick:o,children:[q.jsx("button",{className:"close",type:"button",onClick:e,children:"×"}),n?q.jsx("p",{children:"Paste your settings below:"}):q.jsx("p",{children:"Copy your settings below:"}),q.jsx("textarea",{value:i,onChange:s,readOnly:!n,spellCheck:!1}),n&&q.jsx("button",{className:"import",onClick:()=>{try{n(JSON.parse(i))}catch(a){console.error(a),alert("Invalid settings")}},children:"⍈ Import"})]})})]})}function IC(){const t=ge.useMemo(()=>({definitions:{},properties:{version:{type:"int32",metadata:{default:1}},settings:{...za,properties:{...za.properties,itemSpacing:{type:"float64",metadata:{default:10,title:"Item Spacing (units)"}}},metadata:{...za.metadata,order:["itemSpacing",...za.metadata.order]}},generators:{elements:{discriminator:"kind",mapping:hu.map(b=>({[b.name()]:{properties:{kind:{type:"string",metadata:{default:b.name(),title:b.name()}},colors:{properties:{cutColor:{enum:fg,metadata:{default:"blue",title:"Cut Color"}},scoreColor:{enum:fg,metadata:{default:"red",title:"Score Color"}}},metadata:{title:"Colors",order:["cutColor","scoreColor"],startHidden:!0}},params:b.schema()},metadata:{order:["colors","params"],untabParams:!0}}})).reduce((b,F)=>({...b,...F}),{}),metadata:{default:"Rectangle",order:hu.map(b=>b.name())}},metadata:{default:1,title:"Generators",itemTitle:"Generator {}"}}},metadata:{order:["settings","generators"]}}),[]),[e,n]=ge.useState(()=>Fs(t)),[i,r]=ge.useState(1),[s,o]=ge.useState(null),[a,l]=ge.useState(""),c=e.settings.itemSpacing;ge.useEffect(()=>{const b=[],F=[];let O=1;for(const Y of e.generators){const $=hu.find(V=>V.name()===Y.kind);if($)try{const V=$.generate(e.settings,Y.params);for(const Z of V)b.push({surface:Z,cutColor:Y.colors.cutColor,scoreColor:Y.colors.scoreColor})}catch(V){console.error(V),F.push(`Generator ${O}: ${V}`)}O++}o(b),l(F.join(`
`))},[e,o,l]);const u=ge.useMemo(()=>{if(!s)return null;const b=[];let F=0;for(const{surface:V,cutColor:Z,scoreColor:I}of s){const j=V.boundingBox(),Q=(j[1][0]-j[0][0]+c)*(j[1][1]-j[0][1]+c);F+=Q,b.push({surface:V,boundingBox:j,boundingBoxSize:[j[1][0]-j[0][0],j[1][1]-j[0][1]],area:Q,offset:[0,0],cutColor:Z,scoreColor:I})}const O=Math.sqrt(F);let Y=0;const $=[0,0];for(const V of b)V.offset[0]=$[0]-V.boundingBox[0][0],V.offset[1]=$[1]-V.boundingBox[0][1],Y=Math.max(Y,V.boundingBoxSize[1]),$[0]+c+V.boundingBoxSize[0]<=O?$[0]+=c+V.boundingBoxSize[0]:($[0]=0,$[1]+=c+Y,Y=0);return b},[s,c]),d=ge.useCallback(()=>{if(!u||u.length<=0){alert("Nothing to export!");return}const b=SS(e.settings);for(const{offset:xe,surface:He,cutColor:K,scoreColor:ne}of u)b.addSurface(xe,He,As[K],As[ne]);const{mimeType:F,extension:O,data:Y}=b.toFile(),$=new Blob([Y],{type:F}),V=window.URL.createObjectURL($);setTimeout(()=>{window.URL.revokeObjectURL(V)},3e4);const Z=document.createElement("a");Z.href=V;const I=new Date,j=xe=>`${xe<10?"0":""}${xe}`,Q=`${I.getFullYear()}${j(I.getMonth()+1)}${j(I.getDate())}`,oe=`${j(I.getHours())}${j(I.getMinutes())}${j(I.getSeconds())}`;Z.download=`${e.generators[0].kind}-${Q}-${oe}${O}`,document.body.appendChild(Z),Z.style.display="none",Z.click(),Z.remove()},[e,u]),[h,p]=ge.useState(!1),x=ge.useCallback(()=>{p(!0)},[]),v=ge.useCallback(b=>{n(b),p(!1),o(null),r(F=>F+1)},[n]);ge.useEffect(()=>{try{const b=window.location.search.substr(1).split("&");for(const F of b){const O=F.split("=");if(O.length===2){const Y=decodeURIComponent(O[0]),$=decodeURIComponent(O[1]);if(Y==="p"){const V=JSON.parse($);v(V);return}}}}catch{}},[]);const[m,f]=ge.useState(""),g=ge.useCallback(()=>{f(JSON.stringify(e,null,2))},[e,f]),_=ge.useCallback(()=>{const b=window.location.href.replace(/\?.*$/,"");window.open(`${b}?p=${encodeURIComponent(JSON.stringify(e))}`,"_blank")},[e]),[S,R]=ge.useState("2D"),T=ge.useCallback(()=>{R(b=>b==="2D"?"3D":"2D")},[R]),[w,P]=ge.useState(!0),A=ge.useCallback(()=>{P(b=>!b)},[P]),y=ge.useMemo(()=>({units:e.settings.units,defaultKerf:e.settings.defaultKerf,debug:e.settings.debug}),[e]);return q.jsxs(E_.Provider,{value:y,children:[m&&q.jsx(mg,{value:m,onCancel:()=>{f("")}}),h&&q.jsx(mg,{value:"",onCancel:()=>{p(!1)},onImport:v}),q.jsxs("nav",{children:[q.jsxs("h2",{children:[q.jsx("a",{href:"https://github.com/velipso/boxburner",target:"_blank",children:"boxburner"}),q.jsx("span",{className:"version",children:"v0.1-alpha"})]}),q.jsx("div",{className:"nav-main",children:q.jsx(RC,{schema:t,value:e,setValue:n},i)}),q.jsxs("div",{className:"output-buttons",children:[q.jsx("button",{onClick:d,children:"↓ Download"}),q.jsx("button",{onClick:x,children:"⍈ Import"}),q.jsx("button",{onClick:g,children:"⍇ Export"}),q.jsx("button",{onClick:_,children:"⤷ URL"})]})]}),q.jsx("main",{children:u&&(S==="2D"?q.jsx(DC,{grid:w,items:u,error:a,units:e.settings.units,onView:T,onGrid:A}):q.jsx(LC,{grid:w,items:u,error:a,units:e.settings.units,onView:T,onGrid:A}))},i)]})}Wu.createRoot(document.getElementById("root")).render(q.jsx(q_.StrictMode,{children:q.jsx(IC,{})}));
