var D_=Object.defineProperty;var I_=(t,e,n)=>e in t?D_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ri=(t,e,n)=>I_(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function N_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var vg={exports:{}},mc={},_g={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ha=Symbol.for("react.element"),U_=Symbol.for("react.portal"),F_=Symbol.for("react.fragment"),O_=Symbol.for("react.strict_mode"),k_=Symbol.for("react.profiler"),B_=Symbol.for("react.provider"),z_=Symbol.for("react.context"),H_=Symbol.for("react.forward_ref"),V_=Symbol.for("react.suspense"),G_=Symbol.for("react.memo"),W_=Symbol.for("react.lazy"),Bh=Symbol.iterator;function X_(t){return t===null||typeof t!="object"?null:(t=Bh&&t[Bh]||t["@@iterator"],typeof t=="function"?t:null)}var xg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yg=Object.assign,Sg={};function no(t,e,n){this.props=t,this.context=e,this.refs=Sg,this.updater=n||xg}no.prototype.isReactComponent={};no.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};no.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Mg(){}Mg.prototype=no.prototype;function yd(t,e,n){this.props=t,this.context=e,this.refs=Sg,this.updater=n||xg}var Sd=yd.prototype=new Mg;Sd.constructor=yd;yg(Sd,no.prototype);Sd.isPureReactComponent=!0;var zh=Array.isArray,Eg=Object.prototype.hasOwnProperty,Md={current:null},Tg={key:!0,ref:!0,__self:!0,__source:!0};function wg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Eg.call(e,i)&&!Tg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ha,type:t,key:s,ref:o,props:r,_owner:Md.current}}function j_(t,e){return{$$typeof:ha,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ed(t){return typeof t=="object"&&t!==null&&t.$$typeof===ha}function Y_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Hh=/\/+/g;function Hc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Y_(""+t.key):e.toString(36)}function ml(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ha:case U_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Hc(o,0):i,zh(r)?(n="",t!=null&&(n=t.replace(Hh,"$&/")+"/"),ml(r,e,n,"",function(c){return c})):r!=null&&(Ed(r)&&(r=j_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Hh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",zh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Hc(s,a);o+=ml(s,e,n,l,r)}else if(l=X_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Hc(s,a++),o+=ml(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ea(t,e,n){if(t==null)return t;var i=[],r=0;return ml(t,i,"","",function(s){return e.call(n,s,r++)}),i}function $_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},gl={transition:null},q_={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:gl,ReactCurrentOwner:Md};function Ag(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:Ea,forEach:function(t,e,n){Ea(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ea(t,function(){e++}),e},toArray:function(t){return Ea(t,function(e){return e})||[]},only:function(t){if(!Ed(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=no;Ge.Fragment=F_;Ge.Profiler=k_;Ge.PureComponent=yd;Ge.StrictMode=O_;Ge.Suspense=V_;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q_;Ge.act=Ag;Ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=yg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Md.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Eg.call(e,l)&&!Tg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ha,type:t.type,key:r,ref:s,props:i,_owner:o}};Ge.createContext=function(t){return t={$$typeof:z_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:B_,_context:t},t.Consumer=t};Ge.createElement=wg;Ge.createFactory=function(t){var e=wg.bind(null,t);return e.type=t,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:H_,render:t}};Ge.isValidElement=Ed;Ge.lazy=function(t){return{$$typeof:W_,_payload:{_status:-1,_result:t},_init:$_}};Ge.memo=function(t,e){return{$$typeof:G_,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=gl.transition;gl.transition={};try{t()}finally{gl.transition=e}};Ge.unstable_act=Ag;Ge.useCallback=function(t,e){return Qt.current.useCallback(t,e)};Ge.useContext=function(t){return Qt.current.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};Ge.useEffect=function(t,e){return Qt.current.useEffect(t,e)};Ge.useId=function(){return Qt.current.useId()};Ge.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};Ge.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return Qt.current.useMemo(t,e)};Ge.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};Ge.useRef=function(t){return Qt.current.useRef(t)};Ge.useState=function(t){return Qt.current.useState(t)};Ge.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};Ge.useTransition=function(){return Qt.current.useTransition()};Ge.version="18.3.1";_g.exports=Ge;var ge=_g.exports;const K_=N_(ge);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z_=ge,Q_=Symbol.for("react.element"),J_=Symbol.for("react.fragment"),ex=Object.prototype.hasOwnProperty,tx=Z_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nx={key:!0,ref:!0,__self:!0,__source:!0};function Cg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)ex.call(e,i)&&!nx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Q_,type:t,key:s,ref:o,props:r,_owner:tx.current}}mc.Fragment=J_;mc.jsx=Cg;mc.jsxs=Cg;vg.exports=mc;var q=vg.exports,Xu={},Rg={exports:{}},_n={},bg={exports:{}},Pg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,Y){var Q=N.length;N.push(Y);e:for(;0<Q;){var oe=Q-1>>>1,xe=N[oe];if(0<r(xe,Y))N[oe]=Y,N[Q]=xe,Q=oe;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var Y=N[0],Q=N.pop();if(Q!==Y){N[0]=Q;e:for(var oe=0,xe=N.length,He=xe>>>1;oe<He;){var K=2*(oe+1)-1,ne=N[K],ue=K+1,fe=N[ue];if(0>r(ne,Q))ue<xe&&0>r(fe,ne)?(N[oe]=fe,N[ue]=Q,oe=ue):(N[oe]=ne,N[K]=Q,oe=K);else if(ue<xe&&0>r(fe,Q))N[oe]=fe,N[ue]=Q,oe=ue;else break e}}return Y}function r(N,Y){var Q=N.sortIndex-Y.sortIndex;return Q!==0?Q:N.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,h=3,p=!1,v=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(N){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=N)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function S(N){if(_=!1,x(N),!v)if(n(l)!==null)v=!0,G(R);else{var Y=n(c);Y!==null&&Z(S,Y.startTime-N)}}function R(N,Y){v=!1,_&&(_=!1,f(P),P=-1),p=!0;var Q=h;try{for(x(Y),d=n(l);d!==null&&(!(d.expirationTime>Y)||N&&!b());){var oe=d.callback;if(typeof oe=="function"){d.callback=null,h=d.priorityLevel;var xe=oe(d.expirationTime<=Y);Y=t.unstable_now(),typeof xe=="function"?d.callback=xe:d===n(l)&&i(l),x(Y)}else i(l);d=n(l)}if(d!==null)var He=!0;else{var K=n(c);K!==null&&Z(S,K.startTime-Y),He=!1}return He}finally{d=null,h=Q,p=!1}}var A=!1,w=null,P=-1,E=5,y=-1;function b(){return!(t.unstable_now()-y<E)}function U(){if(w!==null){var N=t.unstable_now();y=N;var Y=!0;try{Y=w(!0,N)}finally{Y?I():(A=!1,w=null)}}else A=!1}var I;if(typeof g=="function")I=function(){g(U)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,$=z.port2;z.port1.onmessage=U,I=function(){$.postMessage(null)}}else I=function(){m(U,0)};function G(N){w=N,A||(A=!0,I())}function Z(N,Y){P=m(function(){N(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,G(R))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var Y=3;break;default:Y=h}var Q=h;h=Y;try{return N()}finally{h=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,Y){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Q=h;h=N;try{return Y()}finally{h=Q}},t.unstable_scheduleCallback=function(N,Y,Q){var oe=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?oe+Q:oe):Q=oe,N){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=Q+xe,N={id:u++,callback:Y,priorityLevel:N,startTime:Q,expirationTime:xe,sortIndex:-1},Q>oe?(N.sortIndex=Q,e(c,N),n(l)===null&&N===n(c)&&(_?(f(P),P=-1):_=!0,Z(S,Q-oe))):(N.sortIndex=xe,e(l,N),v||p||(v=!0,G(R))),N},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(N){var Y=h;return function(){var Q=h;h=Y;try{return N.apply(this,arguments)}finally{h=Q}}}})(Pg);bg.exports=Pg;var ix=bg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rx=ge,vn=ix;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lg=new Set,Yo={};function kr(t,e){ks(t,e),ks(t+"Capture",e)}function ks(t,e){for(Yo[t]=e,t=0;t<e.length;t++)Lg.add(e[t])}var xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ju=Object.prototype.hasOwnProperty,sx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vh={},Gh={};function ox(t){return ju.call(Gh,t)?!0:ju.call(Vh,t)?!1:sx.test(t)?Gh[t]=!0:(Vh[t]=!0,!1)}function ax(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function lx(t,e,n,i){if(e===null||typeof e>"u"||ax(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){zt[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];zt[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){zt[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){zt[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){zt[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){zt[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){zt[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){zt[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){zt[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Td=/[\-:]([a-z])/g;function wd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Td,wd);zt[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Td,wd);zt[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Td,wd);zt[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){zt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});zt.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){zt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ad(t,e,n,i){var r=zt.hasOwnProperty(e)?zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(lx(e,n,r,i)&&(n=null),i||r===null?ox(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ti=rx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ta=Symbol.for("react.element"),hs=Symbol.for("react.portal"),ps=Symbol.for("react.fragment"),Cd=Symbol.for("react.strict_mode"),Yu=Symbol.for("react.profiler"),Dg=Symbol.for("react.provider"),Ig=Symbol.for("react.context"),Rd=Symbol.for("react.forward_ref"),$u=Symbol.for("react.suspense"),qu=Symbol.for("react.suspense_list"),bd=Symbol.for("react.memo"),Fi=Symbol.for("react.lazy"),Ng=Symbol.for("react.offscreen"),Wh=Symbol.iterator;function uo(t){return t===null||typeof t!="object"?null:(t=Wh&&t[Wh]||t["@@iterator"],typeof t=="function"?t:null)}var ut=Object.assign,Vc;function Ro(t){if(Vc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Vc=e&&e[1]||""}return`
`+Vc+t}var Gc=!1;function Wc(t,e){if(!t||Gc)return"";Gc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Gc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ro(t):""}function cx(t){switch(t.tag){case 5:return Ro(t.type);case 16:return Ro("Lazy");case 13:return Ro("Suspense");case 19:return Ro("SuspenseList");case 0:case 2:case 15:return t=Wc(t.type,!1),t;case 11:return t=Wc(t.type.render,!1),t;case 1:return t=Wc(t.type,!0),t;default:return""}}function Ku(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ps:return"Fragment";case hs:return"Portal";case Yu:return"Profiler";case Cd:return"StrictMode";case $u:return"Suspense";case qu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ig:return(t.displayName||"Context")+".Consumer";case Dg:return(t._context.displayName||"Context")+".Provider";case Rd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case bd:return e=t.displayName||null,e!==null?e:Ku(t.type)||"Memo";case Fi:e=t._payload,t=t._init;try{return Ku(t(e))}catch{}}return null}function ux(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ku(e);case 8:return e===Cd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ug(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function fx(t){var e=Ug(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function wa(t){t._valueTracker||(t._valueTracker=fx(t))}function Fg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Ug(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Nl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Zu(t,e){var n=e.checked;return ut({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Xh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=er(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Og(t,e){e=e.checked,e!=null&&Ad(t,"checked",e,!1)}function Qu(t,e){Og(t,e);var n=er(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ju(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ju(t,e.type,er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function jh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ju(t,e,n){(e!=="number"||Nl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var bo=Array.isArray;function Rs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+er(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ef(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return ut({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Yh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(bo(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:er(n)}}function kg(t,e){var n=er(e.value),i=er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function $h(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Bg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Bg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Aa,zg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Aa=Aa||document.createElement("div"),Aa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Aa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $o(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Uo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dx=["Webkit","ms","Moz","O"];Object.keys(Uo).forEach(function(t){dx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Uo[e]=Uo[t]})});function Hg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Uo.hasOwnProperty(t)&&Uo[t]?(""+e).trim():e+"px"}function Vg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Hg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var hx=ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nf(t,e){if(e){if(hx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function rf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sf=null;function Pd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var of=null,bs=null,Ps=null;function qh(t){if(t=ga(t)){if(typeof of!="function")throw Error(re(280));var e=t.stateNode;e&&(e=yc(e),of(t.stateNode,t.type,e))}}function Gg(t){bs?Ps?Ps.push(t):Ps=[t]:bs=t}function Wg(){if(bs){var t=bs,e=Ps;if(Ps=bs=null,qh(t),e)for(t=0;t<e.length;t++)qh(e[t])}}function Xg(t,e){return t(e)}function jg(){}var Xc=!1;function Yg(t,e,n){if(Xc)return t(e,n);Xc=!0;try{return Xg(t,e,n)}finally{Xc=!1,(bs!==null||Ps!==null)&&(jg(),Wg())}}function qo(t,e){var n=t.stateNode;if(n===null)return null;var i=yc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var af=!1;if(xi)try{var fo={};Object.defineProperty(fo,"passive",{get:function(){af=!0}}),window.addEventListener("test",fo,fo),window.removeEventListener("test",fo,fo)}catch{af=!1}function px(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Fo=!1,Ul=null,Fl=!1,lf=null,mx={onError:function(t){Fo=!0,Ul=t}};function gx(t,e,n,i,r,s,o,a,l){Fo=!1,Ul=null,px.apply(mx,arguments)}function vx(t,e,n,i,r,s,o,a,l){if(gx.apply(this,arguments),Fo){if(Fo){var c=Ul;Fo=!1,Ul=null}else throw Error(re(198));Fl||(Fl=!0,lf=c)}}function Br(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function $g(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Kh(t){if(Br(t)!==t)throw Error(re(188))}function _x(t){var e=t.alternate;if(!e){if(e=Br(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Kh(r),t;if(s===i)return Kh(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function qg(t){return t=_x(t),t!==null?Kg(t):null}function Kg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Kg(t);if(e!==null)return e;t=t.sibling}return null}var Zg=vn.unstable_scheduleCallback,Zh=vn.unstable_cancelCallback,xx=vn.unstable_shouldYield,yx=vn.unstable_requestPaint,_t=vn.unstable_now,Sx=vn.unstable_getCurrentPriorityLevel,Ld=vn.unstable_ImmediatePriority,Qg=vn.unstable_UserBlockingPriority,Ol=vn.unstable_NormalPriority,Mx=vn.unstable_LowPriority,Jg=vn.unstable_IdlePriority,gc=null,ei=null;function Ex(t){if(ei&&typeof ei.onCommitFiberRoot=="function")try{ei.onCommitFiberRoot(gc,t,void 0,(t.current.flags&128)===128)}catch{}}var zn=Math.clz32?Math.clz32:Ax,Tx=Math.log,wx=Math.LN2;function Ax(t){return t>>>=0,t===0?32:31-(Tx(t)/wx|0)|0}var Ca=64,Ra=4194304;function Po(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function kl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Po(a):(s&=o,s!==0&&(i=Po(s)))}else o=n&~r,o!==0?i=Po(o):s!==0&&(i=Po(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-zn(e),r=1<<n,i|=t[n],e&=~r;return i}function Cx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-zn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Cx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function cf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function e0(){var t=Ca;return Ca<<=1,!(Ca&4194240)&&(Ca=64),t}function jc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function pa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-zn(e),t[e]=n}function bx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-zn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Dd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function t0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var n0,Id,i0,r0,s0,uf=!1,ba=[],Wi=null,Xi=null,ji=null,Ko=new Map,Zo=new Map,Bi=[],Px="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qh(t,e){switch(t){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":Xi=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":Ko.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zo.delete(e.pointerId)}}function ho(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ga(e),e!==null&&Id(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Lx(t,e,n,i,r){switch(e){case"focusin":return Wi=ho(Wi,t,e,n,i,r),!0;case"dragenter":return Xi=ho(Xi,t,e,n,i,r),!0;case"mouseover":return ji=ho(ji,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ko.set(s,ho(Ko.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Zo.set(s,ho(Zo.get(s)||null,t,e,n,i,r)),!0}return!1}function o0(t){var e=Sr(t.target);if(e!==null){var n=Br(e);if(n!==null){if(e=n.tag,e===13){if(e=$g(n),e!==null){t.blockedOn=e,s0(t.priority,function(){i0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ff(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);sf=i,n.target.dispatchEvent(i),sf=null}else return e=ga(n),e!==null&&Id(e),t.blockedOn=n,!1;e.shift()}return!0}function Jh(t,e,n){vl(t)&&n.delete(e)}function Dx(){uf=!1,Wi!==null&&vl(Wi)&&(Wi=null),Xi!==null&&vl(Xi)&&(Xi=null),ji!==null&&vl(ji)&&(ji=null),Ko.forEach(Jh),Zo.forEach(Jh)}function po(t,e){t.blockedOn===e&&(t.blockedOn=null,uf||(uf=!0,vn.unstable_scheduleCallback(vn.unstable_NormalPriority,Dx)))}function Qo(t){function e(r){return po(r,t)}if(0<ba.length){po(ba[0],t);for(var n=1;n<ba.length;n++){var i=ba[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Wi!==null&&po(Wi,t),Xi!==null&&po(Xi,t),ji!==null&&po(ji,t),Ko.forEach(e),Zo.forEach(e),n=0;n<Bi.length;n++)i=Bi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Bi.length&&(n=Bi[0],n.blockedOn===null);)o0(n),n.blockedOn===null&&Bi.shift()}var Ls=Ti.ReactCurrentBatchConfig,Bl=!0;function Ix(t,e,n,i){var r=et,s=Ls.transition;Ls.transition=null;try{et=1,Nd(t,e,n,i)}finally{et=r,Ls.transition=s}}function Nx(t,e,n,i){var r=et,s=Ls.transition;Ls.transition=null;try{et=4,Nd(t,e,n,i)}finally{et=r,Ls.transition=s}}function Nd(t,e,n,i){if(Bl){var r=ff(t,e,n,i);if(r===null)nu(t,e,i,zl,n),Qh(t,i);else if(Lx(r,t,e,n,i))i.stopPropagation();else if(Qh(t,i),e&4&&-1<Px.indexOf(t)){for(;r!==null;){var s=ga(r);if(s!==null&&n0(s),s=ff(t,e,n,i),s===null&&nu(t,e,i,zl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else nu(t,e,i,null,n)}}var zl=null;function ff(t,e,n,i){if(zl=null,t=Pd(i),t=Sr(t),t!==null)if(e=Br(t),e===null)t=null;else if(n=e.tag,n===13){if(t=$g(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return zl=t,null}function a0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sx()){case Ld:return 1;case Qg:return 4;case Ol:case Mx:return 16;case Jg:return 536870912;default:return 16}default:return 16}}var Vi=null,Ud=null,_l=null;function l0(){if(_l)return _l;var t,e=Ud,n=e.length,i,r="value"in Vi?Vi.value:Vi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return _l=r.slice(t,1<i?1-i:void 0)}function xl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Pa(){return!0}function ep(){return!1}function xn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Pa:ep,this.isPropagationStopped=ep,this}return ut(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pa)},persist:function(){},isPersistent:Pa}),e}var io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fd=xn(io),ma=ut({},io,{view:0,detail:0}),Ux=xn(ma),Yc,$c,mo,vc=ut({},ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Od,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==mo&&(mo&&t.type==="mousemove"?(Yc=t.screenX-mo.screenX,$c=t.screenY-mo.screenY):$c=Yc=0,mo=t),Yc)},movementY:function(t){return"movementY"in t?t.movementY:$c}}),tp=xn(vc),Fx=ut({},vc,{dataTransfer:0}),Ox=xn(Fx),kx=ut({},ma,{relatedTarget:0}),qc=xn(kx),Bx=ut({},io,{animationName:0,elapsedTime:0,pseudoElement:0}),zx=xn(Bx),Hx=ut({},io,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Vx=xn(Hx),Gx=ut({},io,{data:0}),np=xn(Gx),Wx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=jx[t])?!!e[t]:!1}function Od(){return Yx}var $x=ut({},ma,{key:function(t){if(t.key){var e=Wx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Xx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Od,charCode:function(t){return t.type==="keypress"?xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qx=xn($x),Kx=ut({},vc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ip=xn(Kx),Zx=ut({},ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Od}),Qx=xn(Zx),Jx=ut({},io,{propertyName:0,elapsedTime:0,pseudoElement:0}),ey=xn(Jx),ty=ut({},vc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ny=xn(ty),iy=[9,13,27,32],kd=xi&&"CompositionEvent"in window,Oo=null;xi&&"documentMode"in document&&(Oo=document.documentMode);var ry=xi&&"TextEvent"in window&&!Oo,c0=xi&&(!kd||Oo&&8<Oo&&11>=Oo),rp=" ",sp=!1;function u0(t,e){switch(t){case"keyup":return iy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function f0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ms=!1;function sy(t,e){switch(t){case"compositionend":return f0(e);case"keypress":return e.which!==32?null:(sp=!0,rp);case"textInput":return t=e.data,t===rp&&sp?null:t;default:return null}}function oy(t,e){if(ms)return t==="compositionend"||!kd&&u0(t,e)?(t=l0(),_l=Ud=Vi=null,ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return c0&&e.locale!=="ko"?null:e.data;default:return null}}var ay={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function op(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ay[t.type]:e==="textarea"}function d0(t,e,n,i){Gg(i),e=Hl(e,"onChange"),0<e.length&&(n=new Fd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ko=null,Jo=null;function ly(t){E0(t,0)}function _c(t){var e=_s(t);if(Fg(e))return t}function cy(t,e){if(t==="change")return e}var h0=!1;if(xi){var Kc;if(xi){var Zc="oninput"in document;if(!Zc){var ap=document.createElement("div");ap.setAttribute("oninput","return;"),Zc=typeof ap.oninput=="function"}Kc=Zc}else Kc=!1;h0=Kc&&(!document.documentMode||9<document.documentMode)}function lp(){ko&&(ko.detachEvent("onpropertychange",p0),Jo=ko=null)}function p0(t){if(t.propertyName==="value"&&_c(Jo)){var e=[];d0(e,Jo,t,Pd(t)),Yg(ly,e)}}function uy(t,e,n){t==="focusin"?(lp(),ko=e,Jo=n,ko.attachEvent("onpropertychange",p0)):t==="focusout"&&lp()}function fy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _c(Jo)}function dy(t,e){if(t==="click")return _c(e)}function hy(t,e){if(t==="input"||t==="change")return _c(e)}function py(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gn=typeof Object.is=="function"?Object.is:py;function ea(t,e){if(Gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ju.call(e,r)||!Gn(t[r],e[r]))return!1}return!0}function cp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function up(t,e){var n=cp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cp(n)}}function m0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?m0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function g0(){for(var t=window,e=Nl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Nl(t.document)}return e}function Bd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function my(t){var e=g0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&m0(n.ownerDocument.documentElement,n)){if(i!==null&&Bd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=up(n,s);var o=up(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var gy=xi&&"documentMode"in document&&11>=document.documentMode,gs=null,df=null,Bo=null,hf=!1;function fp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hf||gs==null||gs!==Nl(i)||(i=gs,"selectionStart"in i&&Bd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Bo&&ea(Bo,i)||(Bo=i,i=Hl(df,"onSelect"),0<i.length&&(e=new Fd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=gs)))}function La(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vs={animationend:La("Animation","AnimationEnd"),animationiteration:La("Animation","AnimationIteration"),animationstart:La("Animation","AnimationStart"),transitionend:La("Transition","TransitionEnd")},Qc={},v0={};xi&&(v0=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function xc(t){if(Qc[t])return Qc[t];if(!vs[t])return t;var e=vs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in v0)return Qc[t]=e[n];return t}var _0=xc("animationend"),x0=xc("animationiteration"),y0=xc("animationstart"),S0=xc("transitionend"),M0=new Map,dp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(t,e){M0.set(t,e),kr(e,[t])}for(var Jc=0;Jc<dp.length;Jc++){var eu=dp[Jc],vy=eu.toLowerCase(),_y=eu[0].toUpperCase()+eu.slice(1);sr(vy,"on"+_y)}sr(_0,"onAnimationEnd");sr(x0,"onAnimationIteration");sr(y0,"onAnimationStart");sr("dblclick","onDoubleClick");sr("focusin","onFocus");sr("focusout","onBlur");sr(S0,"onTransitionEnd");ks("onMouseEnter",["mouseout","mouseover"]);ks("onMouseLeave",["mouseout","mouseover"]);ks("onPointerEnter",["pointerout","pointerover"]);ks("onPointerLeave",["pointerout","pointerover"]);kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lo));function hp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,vx(i,e,void 0,t),t.currentTarget=null}function E0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;hp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;hp(r,a,c),s=l}}}if(Fl)throw t=lf,Fl=!1,lf=null,t}function it(t,e){var n=e[_f];n===void 0&&(n=e[_f]=new Set);var i=t+"__bubble";n.has(i)||(T0(e,t,2,!1),n.add(i))}function tu(t,e,n){var i=0;e&&(i|=4),T0(n,t,i,e)}var Da="_reactListening"+Math.random().toString(36).slice(2);function ta(t){if(!t[Da]){t[Da]=!0,Lg.forEach(function(n){n!=="selectionchange"&&(xy.has(n)||tu(n,!1,t),tu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Da]||(e[Da]=!0,tu("selectionchange",!1,e))}}function T0(t,e,n,i){switch(a0(e)){case 1:var r=Ix;break;case 4:r=Nx;break;default:r=Nd}n=r.bind(null,e,n,t),r=void 0,!af||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function nu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Sr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Yg(function(){var c=s,u=Pd(n),d=[];e:{var h=M0.get(t);if(h!==void 0){var p=Fd,v=t;switch(t){case"keypress":if(xl(n)===0)break e;case"keydown":case"keyup":p=qx;break;case"focusin":v="focus",p=qc;break;case"focusout":v="blur",p=qc;break;case"beforeblur":case"afterblur":p=qc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Ox;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Qx;break;case _0:case x0:case y0:p=zx;break;case S0:p=ey;break;case"scroll":p=Ux;break;case"wheel":p=ny;break;case"copy":case"cut":case"paste":p=Vx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=ip}var _=(e&4)!==0,m=!_&&t==="scroll",f=_?h!==null?h+"Capture":null:h;_=[];for(var g=c,x;g!==null;){x=g;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,f!==null&&(S=qo(g,f),S!=null&&_.push(na(g,S,x)))),m)break;g=g.return}0<_.length&&(h=new p(h,v,null,n,u),d.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==sf&&(v=n.relatedTarget||n.fromElement)&&(Sr(v)||v[yi]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?Sr(v):null,v!==null&&(m=Br(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(_=tp,S="onMouseLeave",f="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(_=ip,S="onPointerLeave",f="onPointerEnter",g="pointer"),m=p==null?h:_s(p),x=v==null?h:_s(v),h=new _(S,g+"leave",p,n,u),h.target=m,h.relatedTarget=x,S=null,Sr(u)===c&&(_=new _(f,g+"enter",v,n,u),_.target=x,_.relatedTarget=m,S=_),m=S,p&&v)t:{for(_=p,f=v,g=0,x=_;x;x=Gr(x))g++;for(x=0,S=f;S;S=Gr(S))x++;for(;0<g-x;)_=Gr(_),g--;for(;0<x-g;)f=Gr(f),x--;for(;g--;){if(_===f||f!==null&&_===f.alternate)break t;_=Gr(_),f=Gr(f)}_=null}else _=null;p!==null&&pp(d,h,p,_,!1),v!==null&&m!==null&&pp(d,m,v,_,!0)}}e:{if(h=c?_s(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var R=cy;else if(op(h))if(h0)R=hy;else{R=fy;var A=uy}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=dy);if(R&&(R=R(t,c))){d0(d,R,n,u);break e}A&&A(t,h,c),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&Ju(h,"number",h.value)}switch(A=c?_s(c):window,t){case"focusin":(op(A)||A.contentEditable==="true")&&(gs=A,df=c,Bo=null);break;case"focusout":Bo=df=gs=null;break;case"mousedown":hf=!0;break;case"contextmenu":case"mouseup":case"dragend":hf=!1,fp(d,n,u);break;case"selectionchange":if(gy)break;case"keydown":case"keyup":fp(d,n,u)}var w;if(kd)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ms?u0(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(c0&&n.locale!=="ko"&&(ms||P!=="onCompositionStart"?P==="onCompositionEnd"&&ms&&(w=l0()):(Vi=u,Ud="value"in Vi?Vi.value:Vi.textContent,ms=!0)),A=Hl(c,P),0<A.length&&(P=new np(P,t,null,n,u),d.push({event:P,listeners:A}),w?P.data=w:(w=f0(n),w!==null&&(P.data=w)))),(w=ry?sy(t,n):oy(t,n))&&(c=Hl(c,"onBeforeInput"),0<c.length&&(u=new np("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=w))}E0(d,e)})}function na(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Hl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=qo(t,n),s!=null&&i.unshift(na(t,s,r)),s=qo(t,e),s!=null&&i.push(na(t,s,r))),t=t.return}return i}function Gr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function pp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=qo(n,s),l!=null&&o.unshift(na(n,l,a))):r||(l=qo(n,s),l!=null&&o.push(na(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var yy=/\r\n?/g,Sy=/\u0000|\uFFFD/g;function mp(t){return(typeof t=="string"?t:""+t).replace(yy,`
`).replace(Sy,"")}function Ia(t,e,n){if(e=mp(e),mp(t)!==e&&n)throw Error(re(425))}function Vl(){}var pf=null,mf=null;function gf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vf=typeof setTimeout=="function"?setTimeout:void 0,My=typeof clearTimeout=="function"?clearTimeout:void 0,gp=typeof Promise=="function"?Promise:void 0,Ey=typeof queueMicrotask=="function"?queueMicrotask:typeof gp<"u"?function(t){return gp.resolve(null).then(t).catch(Ty)}:vf;function Ty(t){setTimeout(function(){throw t})}function iu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Qo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Qo(e)}function Yi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function vp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ro=Math.random().toString(36).slice(2),Kn="__reactFiber$"+ro,ia="__reactProps$"+ro,yi="__reactContainer$"+ro,_f="__reactEvents$"+ro,wy="__reactListeners$"+ro,Ay="__reactHandles$"+ro;function Sr(t){var e=t[Kn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[yi]||n[Kn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=vp(t);t!==null;){if(n=t[Kn])return n;t=vp(t)}return e}t=n,n=t.parentNode}return null}function ga(t){return t=t[Kn]||t[yi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _s(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function yc(t){return t[ia]||null}var xf=[],xs=-1;function or(t){return{current:t}}function st(t){0>xs||(t.current=xf[xs],xf[xs]=null,xs--)}function tt(t,e){xs++,xf[xs]=t.current,t.current=e}var tr={},Yt=or(tr),nn=or(!1),br=tr;function Bs(t,e){var n=t.type.contextTypes;if(!n)return tr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function rn(t){return t=t.childContextTypes,t!=null}function Gl(){st(nn),st(Yt)}function _p(t,e,n){if(Yt.current!==tr)throw Error(re(168));tt(Yt,e),tt(nn,n)}function w0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,ux(t)||"Unknown",r));return ut({},n,i)}function Wl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,br=Yt.current,tt(Yt,t),tt(nn,nn.current),!0}function xp(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=w0(t,e,br),i.__reactInternalMemoizedMergedChildContext=t,st(nn),st(Yt),tt(Yt,t)):st(nn),tt(nn,n)}var di=null,Sc=!1,ru=!1;function A0(t){di===null?di=[t]:di.push(t)}function Cy(t){Sc=!0,A0(t)}function ar(){if(!ru&&di!==null){ru=!0;var t=0,e=et;try{var n=di;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}di=null,Sc=!1}catch(r){throw di!==null&&(di=di.slice(t+1)),Zg(Ld,ar),r}finally{et=e,ru=!1}}return null}var ys=[],Ss=0,Xl=null,jl=0,Mn=[],En=0,Pr=null,hi=1,pi="";function gr(t,e){ys[Ss++]=jl,ys[Ss++]=Xl,Xl=t,jl=e}function C0(t,e,n){Mn[En++]=hi,Mn[En++]=pi,Mn[En++]=Pr,Pr=t;var i=hi;t=pi;var r=32-zn(i)-1;i&=~(1<<r),n+=1;var s=32-zn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,hi=1<<32-zn(e)+r|n<<r|i,pi=s+t}else hi=1<<s|n<<r|i,pi=t}function zd(t){t.return!==null&&(gr(t,1),C0(t,1,0))}function Hd(t){for(;t===Xl;)Xl=ys[--Ss],ys[Ss]=null,jl=ys[--Ss],ys[Ss]=null;for(;t===Pr;)Pr=Mn[--En],Mn[En]=null,pi=Mn[--En],Mn[En]=null,hi=Mn[--En],Mn[En]=null}var gn=null,mn=null,at=!1,On=null;function R0(t,e){var n=Tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function yp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gn=t,mn=Yi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gn=t,mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Pr!==null?{id:hi,overflow:pi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gn=t,mn=null,!0):!1;default:return!1}}function yf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Sf(t){if(at){var e=mn;if(e){var n=e;if(!yp(t,e)){if(yf(t))throw Error(re(418));e=Yi(n.nextSibling);var i=gn;e&&yp(t,e)?R0(i,n):(t.flags=t.flags&-4097|2,at=!1,gn=t)}}else{if(yf(t))throw Error(re(418));t.flags=t.flags&-4097|2,at=!1,gn=t}}}function Sp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gn=t}function Na(t){if(t!==gn)return!1;if(!at)return Sp(t),at=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!gf(t.type,t.memoizedProps)),e&&(e=mn)){if(yf(t))throw b0(),Error(re(418));for(;e;)R0(t,e),e=Yi(e.nextSibling)}if(Sp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mn=Yi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mn=null}}else mn=gn?Yi(t.stateNode.nextSibling):null;return!0}function b0(){for(var t=mn;t;)t=Yi(t.nextSibling)}function zs(){mn=gn=null,at=!1}function Vd(t){On===null?On=[t]:On.push(t)}var Ry=Ti.ReactCurrentBatchConfig;function go(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function Ua(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Mp(t){var e=t._init;return e(t._payload)}function P0(t){function e(f,g){if(t){var x=f.deletions;x===null?(f.deletions=[g],f.flags|=16):x.push(g)}}function n(f,g){if(!t)return null;for(;g!==null;)e(f,g),g=g.sibling;return null}function i(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function r(f,g){return f=Zi(f,g),f.index=0,f.sibling=null,f}function s(f,g,x){return f.index=x,t?(x=f.alternate,x!==null?(x=x.index,x<g?(f.flags|=2,g):x):(f.flags|=2,g)):(f.flags|=1048576,g)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,g,x,S){return g===null||g.tag!==6?(g=fu(x,f.mode,S),g.return=f,g):(g=r(g,x),g.return=f,g)}function l(f,g,x,S){var R=x.type;return R===ps?u(f,g,x.props.children,S,x.key):g!==null&&(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Fi&&Mp(R)===g.type)?(S=r(g,x.props),S.ref=go(f,g,x),S.return=f,S):(S=Al(x.type,x.key,x.props,null,f.mode,S),S.ref=go(f,g,x),S.return=f,S)}function c(f,g,x,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=du(x,f.mode,S),g.return=f,g):(g=r(g,x.children||[]),g.return=f,g)}function u(f,g,x,S,R){return g===null||g.tag!==7?(g=Cr(x,f.mode,S,R),g.return=f,g):(g=r(g,x),g.return=f,g)}function d(f,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=fu(""+g,f.mode,x),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ta:return x=Al(g.type,g.key,g.props,null,f.mode,x),x.ref=go(f,null,g),x.return=f,x;case hs:return g=du(g,f.mode,x),g.return=f,g;case Fi:var S=g._init;return d(f,S(g._payload),x)}if(bo(g)||uo(g))return g=Cr(g,f.mode,x,null),g.return=f,g;Ua(f,g)}return null}function h(f,g,x,S){var R=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return R!==null?null:a(f,g,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ta:return x.key===R?l(f,g,x,S):null;case hs:return x.key===R?c(f,g,x,S):null;case Fi:return R=x._init,h(f,g,R(x._payload),S)}if(bo(x)||uo(x))return R!==null?null:u(f,g,x,S,null);Ua(f,x)}return null}function p(f,g,x,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(x)||null,a(g,f,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ta:return f=f.get(S.key===null?x:S.key)||null,l(g,f,S,R);case hs:return f=f.get(S.key===null?x:S.key)||null,c(g,f,S,R);case Fi:var A=S._init;return p(f,g,x,A(S._payload),R)}if(bo(S)||uo(S))return f=f.get(x)||null,u(g,f,S,R,null);Ua(g,S)}return null}function v(f,g,x,S){for(var R=null,A=null,w=g,P=g=0,E=null;w!==null&&P<x.length;P++){w.index>P?(E=w,w=null):E=w.sibling;var y=h(f,w,x[P],S);if(y===null){w===null&&(w=E);break}t&&w&&y.alternate===null&&e(f,w),g=s(y,g,P),A===null?R=y:A.sibling=y,A=y,w=E}if(P===x.length)return n(f,w),at&&gr(f,P),R;if(w===null){for(;P<x.length;P++)w=d(f,x[P],S),w!==null&&(g=s(w,g,P),A===null?R=w:A.sibling=w,A=w);return at&&gr(f,P),R}for(w=i(f,w);P<x.length;P++)E=p(w,f,P,x[P],S),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?P:E.key),g=s(E,g,P),A===null?R=E:A.sibling=E,A=E);return t&&w.forEach(function(b){return e(f,b)}),at&&gr(f,P),R}function _(f,g,x,S){var R=uo(x);if(typeof R!="function")throw Error(re(150));if(x=R.call(x),x==null)throw Error(re(151));for(var A=R=null,w=g,P=g=0,E=null,y=x.next();w!==null&&!y.done;P++,y=x.next()){w.index>P?(E=w,w=null):E=w.sibling;var b=h(f,w,y.value,S);if(b===null){w===null&&(w=E);break}t&&w&&b.alternate===null&&e(f,w),g=s(b,g,P),A===null?R=b:A.sibling=b,A=b,w=E}if(y.done)return n(f,w),at&&gr(f,P),R;if(w===null){for(;!y.done;P++,y=x.next())y=d(f,y.value,S),y!==null&&(g=s(y,g,P),A===null?R=y:A.sibling=y,A=y);return at&&gr(f,P),R}for(w=i(f,w);!y.done;P++,y=x.next())y=p(w,f,P,y.value,S),y!==null&&(t&&y.alternate!==null&&w.delete(y.key===null?P:y.key),g=s(y,g,P),A===null?R=y:A.sibling=y,A=y);return t&&w.forEach(function(U){return e(f,U)}),at&&gr(f,P),R}function m(f,g,x,S){if(typeof x=="object"&&x!==null&&x.type===ps&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ta:e:{for(var R=x.key,A=g;A!==null;){if(A.key===R){if(R=x.type,R===ps){if(A.tag===7){n(f,A.sibling),g=r(A,x.props.children),g.return=f,f=g;break e}}else if(A.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Fi&&Mp(R)===A.type){n(f,A.sibling),g=r(A,x.props),g.ref=go(f,A,x),g.return=f,f=g;break e}n(f,A);break}else e(f,A);A=A.sibling}x.type===ps?(g=Cr(x.props.children,f.mode,S,x.key),g.return=f,f=g):(S=Al(x.type,x.key,x.props,null,f.mode,S),S.ref=go(f,g,x),S.return=f,f=S)}return o(f);case hs:e:{for(A=x.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(f,g.sibling),g=r(g,x.children||[]),g.return=f,f=g;break e}else{n(f,g);break}else e(f,g);g=g.sibling}g=du(x,f.mode,S),g.return=f,f=g}return o(f);case Fi:return A=x._init,m(f,g,A(x._payload),S)}if(bo(x))return v(f,g,x,S);if(uo(x))return _(f,g,x,S);Ua(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(n(f,g.sibling),g=r(g,x),g.return=f,f=g):(n(f,g),g=fu(x,f.mode,S),g.return=f,f=g),o(f)):n(f,g)}return m}var Hs=P0(!0),L0=P0(!1),Yl=or(null),$l=null,Ms=null,Gd=null;function Wd(){Gd=Ms=$l=null}function Xd(t){var e=Yl.current;st(Yl),t._currentValue=e}function Mf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ds(t,e){$l=t,Gd=Ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(tn=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if(Gd!==t)if(t={context:t,memoizedValue:e,next:null},Ms===null){if($l===null)throw Error(re(308));Ms=t,$l.dependencies={lanes:0,firstContext:t}}else Ms=Ms.next=t;return e}var Mr=null;function jd(t){Mr===null?Mr=[t]:Mr.push(t)}function D0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,jd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Si(t,i)}function Si(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Oi=!1;function Yd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function I0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function _i(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function $i(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Si(t,n)}return r=i.interleaved,r===null?(e.next=e,jd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Si(t,n)}function yl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Dd(t,n)}}function Ep(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ql(t,e,n,i){var r=t.updateQueue;Oi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(h=e,p=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){d=v.call(p,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,h=typeof v=="function"?v.call(p,d,h):v,h==null)break e;d=ut({},d,h);break e;case 2:Oi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Dr|=o,t.lanes=o,t.memoizedState=d}}function Tp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var va={},ti=or(va),ra=or(va),sa=or(va);function Er(t){if(t===va)throw Error(re(174));return t}function $d(t,e){switch(tt(sa,e),tt(ra,t),tt(ti,va),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:tf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=tf(e,t)}st(ti),tt(ti,e)}function Vs(){st(ti),st(ra),st(sa)}function N0(t){Er(sa.current);var e=Er(ti.current),n=tf(e,t.type);e!==n&&(tt(ra,t),tt(ti,n))}function qd(t){ra.current===t&&(st(ti),st(ra))}var lt=or(0);function Kl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var su=[];function Kd(){for(var t=0;t<su.length;t++)su[t]._workInProgressVersionPrimary=null;su.length=0}var Sl=Ti.ReactCurrentDispatcher,ou=Ti.ReactCurrentBatchConfig,Lr=0,ct=null,wt=null,Nt=null,Zl=!1,zo=!1,oa=0,by=0;function Ht(){throw Error(re(321))}function Zd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gn(t[n],e[n]))return!1;return!0}function Qd(t,e,n,i,r,s){if(Lr=s,ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Sl.current=t===null||t.memoizedState===null?Iy:Ny,t=n(i,r),zo){s=0;do{if(zo=!1,oa=0,25<=s)throw Error(re(301));s+=1,Nt=wt=null,e.updateQueue=null,Sl.current=Uy,t=n(i,r)}while(zo)}if(Sl.current=Ql,e=wt!==null&&wt.next!==null,Lr=0,Nt=wt=ct=null,Zl=!1,e)throw Error(re(300));return t}function Jd(){var t=oa!==0;return oa=0,t}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?ct.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function Rn(){if(wt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Nt===null?ct.memoizedState:Nt.next;if(e!==null)Nt=e,wt=t;else{if(t===null)throw Error(re(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Nt===null?ct.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function aa(t,e){return typeof e=="function"?e(t):e}function au(t){var e=Rn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=wt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Lr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,ct.lanes|=u,Dr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Gn(i,e.memoizedState)||(tn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ct.lanes|=s,Dr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function lu(t){var e=Rn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Gn(s,e.memoizedState)||(tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function U0(){}function F0(t,e){var n=ct,i=Rn(),r=e(),s=!Gn(i.memoizedState,r);if(s&&(i.memoizedState=r,tn=!0),i=i.queue,eh(B0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Nt!==null&&Nt.memoizedState.tag&1){if(n.flags|=2048,la(9,k0.bind(null,n,i,r,e),void 0,null),Ut===null)throw Error(re(349));Lr&30||O0(n,e,r)}return r}function O0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function k0(t,e,n,i){e.value=n,e.getSnapshot=i,z0(e)&&H0(t)}function B0(t,e,n){return n(function(){z0(e)&&H0(t)})}function z0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gn(t,n)}catch{return!0}}function H0(t){var e=Si(t,1);e!==null&&Hn(e,t,1,-1)}function wp(t){var e=Xn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:t},e.queue=t,t=t.dispatch=Dy.bind(null,ct,t),[e.memoizedState,t]}function la(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function V0(){return Rn().memoizedState}function Ml(t,e,n,i){var r=Xn();ct.flags|=t,r.memoizedState=la(1|e,n,void 0,i===void 0?null:i)}function Mc(t,e,n,i){var r=Rn();i=i===void 0?null:i;var s=void 0;if(wt!==null){var o=wt.memoizedState;if(s=o.destroy,i!==null&&Zd(i,o.deps)){r.memoizedState=la(e,n,s,i);return}}ct.flags|=t,r.memoizedState=la(1|e,n,s,i)}function Ap(t,e){return Ml(8390656,8,t,e)}function eh(t,e){return Mc(2048,8,t,e)}function G0(t,e){return Mc(4,2,t,e)}function W0(t,e){return Mc(4,4,t,e)}function X0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function j0(t,e,n){return n=n!=null?n.concat([t]):null,Mc(4,4,X0.bind(null,e,t),n)}function th(){}function Y0(t,e){var n=Rn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Zd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function $0(t,e){var n=Rn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Zd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function q0(t,e,n){return Lr&21?(Gn(n,e)||(n=e0(),ct.lanes|=n,Dr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,tn=!0),t.memoizedState=n)}function Py(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=ou.transition;ou.transition={};try{t(!1),e()}finally{et=n,ou.transition=i}}function K0(){return Rn().memoizedState}function Ly(t,e,n){var i=Ki(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Z0(t))Q0(e,n);else if(n=D0(t,e,n,i),n!==null){var r=Zt();Hn(n,t,i,r),J0(n,e,i)}}function Dy(t,e,n){var i=Ki(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Z0(t))Q0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Gn(a,o)){var l=e.interleaved;l===null?(r.next=r,jd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=D0(t,e,r,i),n!==null&&(r=Zt(),Hn(n,t,i,r),J0(n,e,i))}}function Z0(t){var e=t.alternate;return t===ct||e!==null&&e===ct}function Q0(t,e){zo=Zl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function J0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Dd(t,n)}}var Ql={readContext:Cn,useCallback:Ht,useContext:Ht,useEffect:Ht,useImperativeHandle:Ht,useInsertionEffect:Ht,useLayoutEffect:Ht,useMemo:Ht,useReducer:Ht,useRef:Ht,useState:Ht,useDebugValue:Ht,useDeferredValue:Ht,useTransition:Ht,useMutableSource:Ht,useSyncExternalStore:Ht,useId:Ht,unstable_isNewReconciler:!1},Iy={readContext:Cn,useCallback:function(t,e){return Xn().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:Ap,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ml(4194308,4,X0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ml(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ml(4,2,t,e)},useMemo:function(t,e){var n=Xn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Xn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Ly.bind(null,ct,t),[i.memoizedState,t]},useRef:function(t){var e=Xn();return t={current:t},e.memoizedState=t},useState:wp,useDebugValue:th,useDeferredValue:function(t){return Xn().memoizedState=t},useTransition:function(){var t=wp(!1),e=t[0];return t=Py.bind(null,t[1]),Xn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ct,r=Xn();if(at){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Ut===null)throw Error(re(349));Lr&30||O0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Ap(B0.bind(null,i,s,t),[t]),i.flags|=2048,la(9,k0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Xn(),e=Ut.identifierPrefix;if(at){var n=pi,i=hi;n=(i&~(1<<32-zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=oa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=by++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ny={readContext:Cn,useCallback:Y0,useContext:Cn,useEffect:eh,useImperativeHandle:j0,useInsertionEffect:G0,useLayoutEffect:W0,useMemo:$0,useReducer:au,useRef:V0,useState:function(){return au(aa)},useDebugValue:th,useDeferredValue:function(t){var e=Rn();return q0(e,wt.memoizedState,t)},useTransition:function(){var t=au(aa)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:U0,useSyncExternalStore:F0,useId:K0,unstable_isNewReconciler:!1},Uy={readContext:Cn,useCallback:Y0,useContext:Cn,useEffect:eh,useImperativeHandle:j0,useInsertionEffect:G0,useLayoutEffect:W0,useMemo:$0,useReducer:lu,useRef:V0,useState:function(){return lu(aa)},useDebugValue:th,useDeferredValue:function(t){var e=Rn();return wt===null?e.memoizedState=t:q0(e,wt.memoizedState,t)},useTransition:function(){var t=lu(aa)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:U0,useSyncExternalStore:F0,useId:K0,unstable_isNewReconciler:!1};function Nn(t,e){if(t&&t.defaultProps){e=ut({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ef(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ut({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ec={isMounted:function(t){return(t=t._reactInternals)?Br(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=Ki(t),s=_i(i,r);s.payload=e,n!=null&&(s.callback=n),e=$i(t,s,r),e!==null&&(Hn(e,t,r,i),yl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=Ki(t),s=_i(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=$i(t,s,r),e!==null&&(Hn(e,t,r,i),yl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zt(),i=Ki(t),r=_i(n,i);r.tag=2,e!=null&&(r.callback=e),e=$i(t,r,i),e!==null&&(Hn(e,t,i,n),yl(e,t,i))}};function Cp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ea(n,i)||!ea(r,s):!0}function ev(t,e,n){var i=!1,r=tr,s=e.contextType;return typeof s=="object"&&s!==null?s=Cn(s):(r=rn(e)?br:Yt.current,i=e.contextTypes,s=(i=i!=null)?Bs(t,r):tr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ec,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Rp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ec.enqueueReplaceState(e,e.state,null)}function Tf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Yd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Cn(s):(s=rn(e)?br:Yt.current,r.context=Bs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ef(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ec.enqueueReplaceState(r,r.state,null),ql(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Gs(t,e){try{var n="",i=e;do n+=cx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function cu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function wf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Fy=typeof WeakMap=="function"?WeakMap:Map;function tv(t,e,n){n=_i(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ec||(ec=!0,Uf=i),wf(t,e)},n}function nv(t,e,n){n=_i(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){wf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){wf(t,e),typeof i!="function"&&(qi===null?qi=new Set([this]):qi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function bp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Fy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Ky.bind(null,t,e,n),e.then(t,t))}function Pp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Lp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=_i(-1,1),e.tag=2,$i(n,e,1))),n.lanes|=1),t)}var Oy=Ti.ReactCurrentOwner,tn=!1;function Kt(t,e,n,i){e.child=t===null?L0(e,null,n,i):Hs(e,t.child,n,i)}function Dp(t,e,n,i,r){n=n.render;var s=e.ref;return Ds(e,r),i=Qd(t,e,n,i,s,r),n=Jd(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Mi(t,e,r)):(at&&n&&zd(e),e.flags|=1,Kt(t,e,i,r),e.child)}function Ip(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!ch(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,iv(t,e,s,i,r)):(t=Al(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ea,n(o,i)&&t.ref===e.ref)return Mi(t,e,r)}return e.flags|=1,t=Zi(s,i),t.ref=e.ref,t.return=e,e.child=t}function iv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ea(s,i)&&t.ref===e.ref)if(tn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(tn=!0);else return e.lanes=t.lanes,Mi(t,e,r)}return Af(t,e,n,i,r)}function rv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt(Ts,hn),hn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,tt(Ts,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,tt(Ts,hn),hn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,tt(Ts,hn),hn|=i;return Kt(t,e,r,n),e.child}function sv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Af(t,e,n,i,r){var s=rn(n)?br:Yt.current;return s=Bs(e,s),Ds(e,r),n=Qd(t,e,n,i,s,r),i=Jd(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Mi(t,e,r)):(at&&i&&zd(e),e.flags|=1,Kt(t,e,n,r),e.child)}function Np(t,e,n,i,r){if(rn(n)){var s=!0;Wl(e)}else s=!1;if(Ds(e,r),e.stateNode===null)El(t,e),ev(e,n,i),Tf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Cn(c):(c=rn(n)?br:Yt.current,c=Bs(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Rp(e,o,i,c),Oi=!1;var h=e.memoizedState;o.state=h,ql(e,i,o,r),l=e.memoizedState,a!==i||h!==l||nn.current||Oi?(typeof u=="function"&&(Ef(e,n,u,i),l=e.memoizedState),(a=Oi||Cp(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,I0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Nn(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Cn(l):(l=rn(n)?br:Yt.current,l=Bs(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Rp(e,o,i,l),Oi=!1,h=e.memoizedState,o.state=h,ql(e,i,o,r);var v=e.memoizedState;a!==d||h!==v||nn.current||Oi?(typeof p=="function"&&(Ef(e,n,p,i),v=e.memoizedState),(c=Oi||Cp(e,n,c,i,h,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Cf(t,e,n,i,s,r)}function Cf(t,e,n,i,r,s){sv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&xp(e,n,!1),Mi(t,e,s);i=e.stateNode,Oy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Hs(e,t.child,null,s),e.child=Hs(e,null,a,s)):Kt(t,e,a,s),e.memoizedState=i.state,r&&xp(e,n,!0),e.child}function ov(t){var e=t.stateNode;e.pendingContext?_p(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_p(t,e.context,!1),$d(t,e.containerInfo)}function Up(t,e,n,i,r){return zs(),Vd(r),e.flags|=256,Kt(t,e,n,i),e.child}var Rf={dehydrated:null,treeContext:null,retryLane:0};function bf(t){return{baseLanes:t,cachePool:null,transitions:null}}function av(t,e,n){var i=e.pendingProps,r=lt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),tt(lt,r&1),t===null)return Sf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ac(o,i,0,null),t=Cr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=bf(n),e.memoizedState=Rf,t):nh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return ky(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Zi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Zi(a,s):(s=Cr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?bf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Rf,i}return s=t.child,t=s.sibling,i=Zi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function nh(t,e){return e=Ac({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Fa(t,e,n,i){return i!==null&&Vd(i),Hs(e,t.child,null,n),t=nh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ky(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=cu(Error(re(422))),Fa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ac({mode:"visible",children:i.children},r,0,null),s=Cr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Hs(e,t.child,null,o),e.child.memoizedState=bf(o),e.memoizedState=Rf,s);if(!(e.mode&1))return Fa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=cu(s,i,void 0),Fa(t,e,o,i)}if(a=(o&t.childLanes)!==0,tn||a){if(i=Ut,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Si(t,r),Hn(i,t,r,-1))}return lh(),i=cu(Error(re(421))),Fa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Zy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,mn=Yi(r.nextSibling),gn=e,at=!0,On=null,t!==null&&(Mn[En++]=hi,Mn[En++]=pi,Mn[En++]=Pr,hi=t.id,pi=t.overflow,Pr=e),e=nh(e,i.children),e.flags|=4096,e)}function Fp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Mf(t.return,e,n)}function uu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function lv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Kt(t,e,i.children,n),i=lt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fp(t,n,e);else if(t.tag===19)Fp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(tt(lt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Kl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),uu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Kl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}uu(e,!0,n,null,s);break;case"together":uu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function El(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Dr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=Zi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Zi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function By(t,e,n){switch(e.tag){case 3:ov(e),zs();break;case 5:N0(e);break;case 1:rn(e.type)&&Wl(e);break;case 4:$d(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;tt(Yl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(tt(lt,lt.current&1),e.flags|=128,null):n&e.child.childLanes?av(t,e,n):(tt(lt,lt.current&1),t=Mi(t,e,n),t!==null?t.sibling:null);tt(lt,lt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return lv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),tt(lt,lt.current),i)break;return null;case 22:case 23:return e.lanes=0,rv(t,e,n)}return Mi(t,e,n)}var cv,Pf,uv,fv;cv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pf=function(){};uv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Er(ti.current);var s=null;switch(n){case"input":r=Zu(t,r),i=Zu(t,i),s=[];break;case"select":r=ut({},r,{value:void 0}),i=ut({},i,{value:void 0}),s=[];break;case"textarea":r=ef(t,r),i=ef(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Vl)}nf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Yo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Yo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&it("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};fv=function(t,e,n,i){n!==i&&(e.flags|=4)};function vo(t,e){if(!at)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function zy(t,e,n){var i=e.pendingProps;switch(Hd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return rn(e.type)&&Gl(),Vt(e),null;case 3:return i=e.stateNode,Vs(),st(nn),st(Yt),Kd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Na(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,On!==null&&(kf(On),On=null))),Pf(t,e),Vt(e),null;case 5:qd(e);var r=Er(sa.current);if(n=e.type,t!==null&&e.stateNode!=null)uv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return Vt(e),null}if(t=Er(ti.current),Na(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Kn]=e,i[ia]=s,t=(e.mode&1)!==0,n){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(r=0;r<Lo.length;r++)it(Lo[r],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":Xh(i,s),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},it("invalid",i);break;case"textarea":Yh(i,s),it("invalid",i)}nf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ia(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ia(i.textContent,a,t),r=["children",""+a]):Yo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&it("scroll",i)}switch(n){case"input":wa(i),jh(i,s,!0);break;case"textarea":wa(i),$h(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Vl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Bg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Kn]=e,t[ia]=i,cv(t,e,!1,!1),e.stateNode=t;e:{switch(o=rf(n,i),n){case"dialog":it("cancel",t),it("close",t),r=i;break;case"iframe":case"object":case"embed":it("load",t),r=i;break;case"video":case"audio":for(r=0;r<Lo.length;r++)it(Lo[r],t);r=i;break;case"source":it("error",t),r=i;break;case"img":case"image":case"link":it("error",t),it("load",t),r=i;break;case"details":it("toggle",t),r=i;break;case"input":Xh(t,i),r=Zu(t,i),it("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ut({},i,{value:void 0}),it("invalid",t);break;case"textarea":Yh(t,i),r=ef(t,i),it("invalid",t);break;default:r=i}nf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Vg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&zg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&$o(t,l):typeof l=="number"&&$o(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Yo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&it("scroll",t):l!=null&&Ad(t,s,l,o))}switch(n){case"input":wa(t),jh(t,i,!1);break;case"textarea":wa(t),$h(t);break;case"option":i.value!=null&&t.setAttribute("value",""+er(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Rs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Rs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Vl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(t&&e.stateNode!=null)fv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=Er(sa.current),Er(ti.current),Na(e)){if(i=e.stateNode,n=e.memoizedProps,i[Kn]=e,(s=i.nodeValue!==n)&&(t=gn,t!==null))switch(t.tag){case 3:Ia(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ia(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Kn]=e,e.stateNode=i}return Vt(e),null;case 13:if(st(lt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(at&&mn!==null&&e.mode&1&&!(e.flags&128))b0(),zs(),e.flags|=98560,s=!1;else if(s=Na(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[Kn]=e}else zs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),s=!1}else On!==null&&(kf(On),On=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||lt.current&1?bt===0&&(bt=3):lh())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return Vs(),Pf(t,e),t===null&&ta(e.stateNode.containerInfo),Vt(e),null;case 10:return Xd(e.type._context),Vt(e),null;case 17:return rn(e.type)&&Gl(),Vt(e),null;case 19:if(st(lt),s=e.memoizedState,s===null)return Vt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)vo(s,!1);else{if(bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Kl(t),o!==null){for(e.flags|=128,vo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return tt(lt,lt.current&1|2),e.child}t=t.sibling}s.tail!==null&&_t()>Ws&&(e.flags|=128,i=!0,vo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Kl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),vo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!at)return Vt(e),null}else 2*_t()-s.renderingStartTime>Ws&&n!==1073741824&&(e.flags|=128,i=!0,vo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=_t(),e.sibling=null,n=lt.current,tt(lt,i?n&1|2:n&1),e):(Vt(e),null);case 22:case 23:return ah(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?hn&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function Hy(t,e){switch(Hd(e),e.tag){case 1:return rn(e.type)&&Gl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Vs(),st(nn),st(Yt),Kd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return qd(e),null;case 13:if(st(lt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));zs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return st(lt),null;case 4:return Vs(),null;case 10:return Xd(e.type._context),null;case 22:case 23:return ah(),null;case 24:return null;default:return null}}var Oa=!1,Xt=!1,Vy=typeof WeakSet=="function"?WeakSet:Set,me=null;function Es(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){mt(t,e,i)}else n.current=null}function Lf(t,e,n){try{n()}catch(i){mt(t,e,i)}}var Op=!1;function Gy(t,e){if(pf=Bl,t=g0(),Bd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(mf={focusedElem:t,selectionRange:n},Bl=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,m=v.memoizedState,f=e.stateNode,g=f.getSnapshotBeforeUpdate(e.elementType===e.type?_:Nn(e.type,_),m);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(S){mt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return v=Op,Op=!1,v}function Ho(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Lf(e,n,s)}r=r.next}while(r!==i)}}function Tc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Df(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function dv(t){var e=t.alternate;e!==null&&(t.alternate=null,dv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Kn],delete e[ia],delete e[_f],delete e[wy],delete e[Ay])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function hv(t){return t.tag===5||t.tag===3||t.tag===4}function kp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||hv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function If(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Vl));else if(i!==4&&(t=t.child,t!==null))for(If(t,e,n),t=t.sibling;t!==null;)If(t,e,n),t=t.sibling}function Nf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Nf(t,e,n),t=t.sibling;t!==null;)Nf(t,e,n),t=t.sibling}var kt=null,Un=!1;function bi(t,e,n){for(n=n.child;n!==null;)pv(t,e,n),n=n.sibling}function pv(t,e,n){if(ei&&typeof ei.onCommitFiberUnmount=="function")try{ei.onCommitFiberUnmount(gc,n)}catch{}switch(n.tag){case 5:Xt||Es(n,e);case 6:var i=kt,r=Un;kt=null,bi(t,e,n),kt=i,Un=r,kt!==null&&(Un?(t=kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&(Un?(t=kt,n=n.stateNode,t.nodeType===8?iu(t.parentNode,n):t.nodeType===1&&iu(t,n),Qo(t)):iu(kt,n.stateNode));break;case 4:i=kt,r=Un,kt=n.stateNode.containerInfo,Un=!0,bi(t,e,n),kt=i,Un=r;break;case 0:case 11:case 14:case 15:if(!Xt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Lf(n,e,o),r=r.next}while(r!==i)}bi(t,e,n);break;case 1:if(!Xt&&(Es(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){mt(n,e,a)}bi(t,e,n);break;case 21:bi(t,e,n);break;case 22:n.mode&1?(Xt=(i=Xt)||n.memoizedState!==null,bi(t,e,n),Xt=i):bi(t,e,n);break;default:bi(t,e,n)}}function Bp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Vy),e.forEach(function(i){var r=Qy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Pn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:kt=a.stateNode,Un=!1;break e;case 3:kt=a.stateNode.containerInfo,Un=!0;break e;case 4:kt=a.stateNode.containerInfo,Un=!0;break e}a=a.return}if(kt===null)throw Error(re(160));pv(s,o,r),kt=null,Un=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)mv(e,t),e=e.sibling}function mv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pn(e,t),Wn(t),i&4){try{Ho(3,t,t.return),Tc(3,t)}catch(_){mt(t,t.return,_)}try{Ho(5,t,t.return)}catch(_){mt(t,t.return,_)}}break;case 1:Pn(e,t),Wn(t),i&512&&n!==null&&Es(n,n.return);break;case 5:if(Pn(e,t),Wn(t),i&512&&n!==null&&Es(n,n.return),t.flags&32){var r=t.stateNode;try{$o(r,"")}catch(_){mt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Og(r,s),rf(a,o);var c=rf(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?Vg(r,d):u==="dangerouslySetInnerHTML"?zg(r,d):u==="children"?$o(r,d):Ad(r,u,d,c)}switch(a){case"input":Qu(r,s);break;case"textarea":kg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Rs(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Rs(r,!!s.multiple,s.defaultValue,!0):Rs(r,!!s.multiple,s.multiple?[]:"",!1))}r[ia]=s}catch(_){mt(t,t.return,_)}}break;case 6:if(Pn(e,t),Wn(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){mt(t,t.return,_)}}break;case 3:if(Pn(e,t),Wn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Qo(e.containerInfo)}catch(_){mt(t,t.return,_)}break;case 4:Pn(e,t),Wn(t);break;case 13:Pn(e,t),Wn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(sh=_t())),i&4&&Bp(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Xt=(c=Xt)||u,Pn(e,t),Xt=c):Pn(e,t),Wn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(me=t,u=t.child;u!==null;){for(d=me=u;me!==null;){switch(h=me,p=h.child,h.tag){case 0:case 11:case 14:case 15:Ho(4,h,h.return);break;case 1:Es(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){mt(i,n,_)}}break;case 5:Es(h,h.return);break;case 22:if(h.memoizedState!==null){Hp(d);continue}}p!==null?(p.return=h,me=p):Hp(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Hg("display",o))}catch(_){mt(t,t.return,_)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(_){mt(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Pn(e,t),Wn(t),i&4&&Bp(t);break;case 21:break;default:Pn(e,t),Wn(t)}}function Wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(hv(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&($o(r,""),i.flags&=-33);var s=kp(t);Nf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=kp(t);If(t,a,o);break;default:throw Error(re(161))}}catch(l){mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Wy(t,e,n){me=t,gv(t)}function gv(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Oa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Xt;a=Oa;var c=Xt;if(Oa=o,(Xt=l)&&!c)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?Vp(r):l!==null?(l.return=o,me=l):Vp(r);for(;s!==null;)me=s,gv(s),s=s.sibling;me=r,Oa=a,Xt=c}zp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):zp(t)}}function zp(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xt||Tc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Xt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Nn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Tp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Tp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Qo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Xt||e.flags&512&&Df(e)}catch(h){mt(e,e.return,h)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function Hp(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function Vp(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Tc(4,e)}catch(l){mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){mt(e,r,l)}}var s=e.return;try{Df(e)}catch(l){mt(e,s,l)}break;case 5:var o=e.return;try{Df(e)}catch(l){mt(e,o,l)}}}catch(l){mt(e,e.return,l)}if(e===t){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var Xy=Math.ceil,Jl=Ti.ReactCurrentDispatcher,ih=Ti.ReactCurrentOwner,An=Ti.ReactCurrentBatchConfig,je=0,Ut=null,Mt=null,Bt=0,hn=0,Ts=or(0),bt=0,ca=null,Dr=0,wc=0,rh=0,Vo=null,en=null,sh=0,Ws=1/0,fi=null,ec=!1,Uf=null,qi=null,ka=!1,Gi=null,tc=0,Go=0,Ff=null,Tl=-1,wl=0;function Zt(){return je&6?_t():Tl!==-1?Tl:Tl=_t()}function Ki(t){return t.mode&1?je&2&&Bt!==0?Bt&-Bt:Ry.transition!==null?(wl===0&&(wl=e0()),wl):(t=et,t!==0||(t=window.event,t=t===void 0?16:a0(t.type)),t):1}function Hn(t,e,n,i){if(50<Go)throw Go=0,Ff=null,Error(re(185));pa(t,n,i),(!(je&2)||t!==Ut)&&(t===Ut&&(!(je&2)&&(wc|=n),bt===4&&zi(t,Bt)),sn(t,i),n===1&&je===0&&!(e.mode&1)&&(Ws=_t()+500,Sc&&ar()))}function sn(t,e){var n=t.callbackNode;Rx(t,e);var i=kl(t,t===Ut?Bt:0);if(i===0)n!==null&&Zh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Zh(n),e===1)t.tag===0?Cy(Gp.bind(null,t)):A0(Gp.bind(null,t)),Ey(function(){!(je&6)&&ar()}),n=null;else{switch(t0(i)){case 1:n=Ld;break;case 4:n=Qg;break;case 16:n=Ol;break;case 536870912:n=Jg;break;default:n=Ol}n=Tv(n,vv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function vv(t,e){if(Tl=-1,wl=0,je&6)throw Error(re(327));var n=t.callbackNode;if(Is()&&t.callbackNode!==n)return null;var i=kl(t,t===Ut?Bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=nc(t,i);else{e=i;var r=je;je|=2;var s=xv();(Ut!==t||Bt!==e)&&(fi=null,Ws=_t()+500,Ar(t,e));do try{$y();break}catch(a){_v(t,a)}while(!0);Wd(),Jl.current=s,je=r,Mt!==null?e=0:(Ut=null,Bt=0,e=bt)}if(e!==0){if(e===2&&(r=cf(t),r!==0&&(i=r,e=Of(t,r))),e===1)throw n=ca,Ar(t,0),zi(t,i),sn(t,_t()),n;if(e===6)zi(t,i);else{if(r=t.current.alternate,!(i&30)&&!jy(r)&&(e=nc(t,i),e===2&&(s=cf(t),s!==0&&(i=s,e=Of(t,s))),e===1))throw n=ca,Ar(t,0),zi(t,i),sn(t,_t()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:vr(t,en,fi);break;case 3:if(zi(t,i),(i&130023424)===i&&(e=sh+500-_t(),10<e)){if(kl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Zt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=vf(vr.bind(null,t,en,fi),e);break}vr(t,en,fi);break;case 4:if(zi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-zn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=_t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Xy(i/1960))-i,10<i){t.timeoutHandle=vf(vr.bind(null,t,en,fi),i);break}vr(t,en,fi);break;case 5:vr(t,en,fi);break;default:throw Error(re(329))}}}return sn(t,_t()),t.callbackNode===n?vv.bind(null,t):null}function Of(t,e){var n=Vo;return t.current.memoizedState.isDehydrated&&(Ar(t,e).flags|=256),t=nc(t,e),t!==2&&(e=en,en=n,e!==null&&kf(e)),t}function kf(t){en===null?en=t:en.push.apply(en,t)}function jy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Gn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zi(t,e){for(e&=~rh,e&=~wc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-zn(e),i=1<<n;t[n]=-1,e&=~i}}function Gp(t){if(je&6)throw Error(re(327));Is();var e=kl(t,0);if(!(e&1))return sn(t,_t()),null;var n=nc(t,e);if(t.tag!==0&&n===2){var i=cf(t);i!==0&&(e=i,n=Of(t,i))}if(n===1)throw n=ca,Ar(t,0),zi(t,e),sn(t,_t()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vr(t,en,fi),sn(t,_t()),null}function oh(t,e){var n=je;je|=1;try{return t(e)}finally{je=n,je===0&&(Ws=_t()+500,Sc&&ar())}}function Ir(t){Gi!==null&&Gi.tag===0&&!(je&6)&&Is();var e=je;je|=1;var n=An.transition,i=et;try{if(An.transition=null,et=1,t)return t()}finally{et=i,An.transition=n,je=e,!(je&6)&&ar()}}function ah(){hn=Ts.current,st(Ts)}function Ar(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,My(n)),Mt!==null)for(n=Mt.return;n!==null;){var i=n;switch(Hd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Gl();break;case 3:Vs(),st(nn),st(Yt),Kd();break;case 5:qd(i);break;case 4:Vs();break;case 13:st(lt);break;case 19:st(lt);break;case 10:Xd(i.type._context);break;case 22:case 23:ah()}n=n.return}if(Ut=t,Mt=t=Zi(t.current,null),Bt=hn=e,bt=0,ca=null,rh=wc=Dr=0,en=Vo=null,Mr!==null){for(e=0;e<Mr.length;e++)if(n=Mr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Mr=null}return t}function _v(t,e){do{var n=Mt;try{if(Wd(),Sl.current=Ql,Zl){for(var i=ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Zl=!1}if(Lr=0,Nt=wt=ct=null,zo=!1,oa=0,ih.current=null,n===null||n.return===null){bt=1,ca=e,Mt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Pp(o);if(p!==null){p.flags&=-257,Lp(p,o,a,s,e),p.mode&1&&bp(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){bp(s,c,e),lh();break e}l=Error(re(426))}}else if(at&&a.mode&1){var m=Pp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Lp(m,o,a,s,e),Vd(Gs(l,a));break e}}s=l=Gs(l,a),bt!==4&&(bt=2),Vo===null?Vo=[s]:Vo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=tv(s,l,e);Ep(s,f);break e;case 1:a=l;var g=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(qi===null||!qi.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=nv(s,a,e);Ep(s,S);break e}}s=s.return}while(s!==null)}Sv(n)}catch(R){e=R,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(!0)}function xv(){var t=Jl.current;return Jl.current=Ql,t===null?Ql:t}function lh(){(bt===0||bt===3||bt===2)&&(bt=4),Ut===null||!(Dr&268435455)&&!(wc&268435455)||zi(Ut,Bt)}function nc(t,e){var n=je;je|=2;var i=xv();(Ut!==t||Bt!==e)&&(fi=null,Ar(t,e));do try{Yy();break}catch(r){_v(t,r)}while(!0);if(Wd(),je=n,Jl.current=i,Mt!==null)throw Error(re(261));return Ut=null,Bt=0,bt}function Yy(){for(;Mt!==null;)yv(Mt)}function $y(){for(;Mt!==null&&!xx();)yv(Mt)}function yv(t){var e=Ev(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?Sv(t):Mt=e,ih.current=null}function Sv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Hy(n,e),n!==null){n.flags&=32767,Mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{bt=6,Mt=null;return}}else if(n=zy(n,e,hn),n!==null){Mt=n;return}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);bt===0&&(bt=5)}function vr(t,e,n){var i=et,r=An.transition;try{An.transition=null,et=1,qy(t,e,n,i)}finally{An.transition=r,et=i}return null}function qy(t,e,n,i){do Is();while(Gi!==null);if(je&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(bx(t,s),t===Ut&&(Mt=Ut=null,Bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ka||(ka=!0,Tv(Ol,function(){return Is(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=An.transition,An.transition=null;var o=et;et=1;var a=je;je|=4,ih.current=null,Gy(t,n),mv(n,t),my(mf),Bl=!!pf,mf=pf=null,t.current=n,Wy(n),yx(),je=a,et=o,An.transition=s}else t.current=n;if(ka&&(ka=!1,Gi=t,tc=r),s=t.pendingLanes,s===0&&(qi=null),Ex(n.stateNode),sn(t,_t()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ec)throw ec=!1,t=Uf,Uf=null,t;return tc&1&&t.tag!==0&&Is(),s=t.pendingLanes,s&1?t===Ff?Go++:(Go=0,Ff=t):Go=0,ar(),null}function Is(){if(Gi!==null){var t=t0(tc),e=An.transition,n=et;try{if(An.transition=null,et=16>t?16:t,Gi===null)var i=!1;else{if(t=Gi,Gi=null,tc=0,je&6)throw Error(re(331));var r=je;for(je|=4,me=t.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(me=c;me!==null;){var u=me;switch(u.tag){case 0:case 11:case 15:Ho(8,u,s)}var d=u.child;if(d!==null)d.return=u,me=d;else for(;me!==null;){u=me;var h=u.sibling,p=u.return;if(dv(u),u===c){me=null;break}if(h!==null){h.return=p,me=h;break}me=p}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ho(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,me=f;break e}me=s.return}}var g=t.current;for(me=g;me!==null;){o=me;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,me=x;else e:for(o=g;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Tc(9,a)}}catch(R){mt(a,a.return,R)}if(a===o){me=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,me=S;break e}me=a.return}}if(je=r,ar(),ei&&typeof ei.onPostCommitFiberRoot=="function")try{ei.onPostCommitFiberRoot(gc,t)}catch{}i=!0}return i}finally{et=n,An.transition=e}}return!1}function Wp(t,e,n){e=Gs(n,e),e=tv(t,e,1),t=$i(t,e,1),e=Zt(),t!==null&&(pa(t,1,e),sn(t,e))}function mt(t,e,n){if(t.tag===3)Wp(t,t,n);else for(;e!==null;){if(e.tag===3){Wp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(qi===null||!qi.has(i))){t=Gs(n,t),t=nv(e,t,1),e=$i(e,t,1),t=Zt(),e!==null&&(pa(e,1,t),sn(e,t));break}}e=e.return}}function Ky(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Zt(),t.pingedLanes|=t.suspendedLanes&n,Ut===t&&(Bt&n)===n&&(bt===4||bt===3&&(Bt&130023424)===Bt&&500>_t()-sh?Ar(t,0):rh|=n),sn(t,e)}function Mv(t,e){e===0&&(t.mode&1?(e=Ra,Ra<<=1,!(Ra&130023424)&&(Ra=4194304)):e=1);var n=Zt();t=Si(t,e),t!==null&&(pa(t,e,n),sn(t,n))}function Zy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Mv(t,n)}function Qy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),Mv(t,n)}var Ev;Ev=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||nn.current)tn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return tn=!1,By(t,e,n);tn=!!(t.flags&131072)}else tn=!1,at&&e.flags&1048576&&C0(e,jl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;El(t,e),t=e.pendingProps;var r=Bs(e,Yt.current);Ds(e,n),r=Qd(null,e,i,t,r,n);var s=Jd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rn(i)?(s=!0,Wl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Yd(e),r.updater=Ec,e.stateNode=r,r._reactInternals=e,Tf(e,i,t,n),e=Cf(null,e,i,!0,s,n)):(e.tag=0,at&&s&&zd(e),Kt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(El(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=eS(i),t=Nn(i,t),r){case 0:e=Af(null,e,i,t,n);break e;case 1:e=Np(null,e,i,t,n);break e;case 11:e=Dp(null,e,i,t,n);break e;case 14:e=Ip(null,e,i,Nn(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Af(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Np(t,e,i,r,n);case 3:e:{if(ov(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,I0(t,e),ql(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Gs(Error(re(423)),e),e=Up(t,e,i,n,r);break e}else if(i!==r){r=Gs(Error(re(424)),e),e=Up(t,e,i,n,r);break e}else for(mn=Yi(e.stateNode.containerInfo.firstChild),gn=e,at=!0,On=null,n=L0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zs(),i===r){e=Mi(t,e,n);break e}Kt(t,e,i,n)}e=e.child}return e;case 5:return N0(e),t===null&&Sf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,gf(i,r)?o=null:s!==null&&gf(i,s)&&(e.flags|=32),sv(t,e),Kt(t,e,o,n),e.child;case 6:return t===null&&Sf(e),null;case 13:return av(t,e,n);case 4:return $d(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Hs(e,null,i,n):Kt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Dp(t,e,i,r,n);case 7:return Kt(t,e,e.pendingProps,n),e.child;case 8:return Kt(t,e,e.pendingProps.children,n),e.child;case 12:return Kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,tt(Yl,i._currentValue),i._currentValue=o,s!==null)if(Gn(s.value,o)){if(s.children===r.children&&!nn.current){e=Mi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=_i(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Mf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Mf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Kt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ds(e,n),r=Cn(r),i=i(r),e.flags|=1,Kt(t,e,i,n),e.child;case 14:return i=e.type,r=Nn(i,e.pendingProps),r=Nn(i.type,r),Ip(t,e,i,r,n);case 15:return iv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),El(t,e),e.tag=1,rn(i)?(t=!0,Wl(e)):t=!1,Ds(e,n),ev(e,i,r),Tf(e,i,r,n),Cf(null,e,i,!0,t,n);case 19:return lv(t,e,n);case 22:return rv(t,e,n)}throw Error(re(156,e.tag))};function Tv(t,e){return Zg(t,e)}function Jy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(t,e,n,i){return new Jy(t,e,n,i)}function ch(t){return t=t.prototype,!(!t||!t.isReactComponent)}function eS(t){if(typeof t=="function")return ch(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Rd)return 11;if(t===bd)return 14}return 2}function Zi(t,e){var n=t.alternate;return n===null?(n=Tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Al(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")ch(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ps:return Cr(n.children,r,s,e);case Cd:o=8,r|=8;break;case Yu:return t=Tn(12,n,e,r|2),t.elementType=Yu,t.lanes=s,t;case $u:return t=Tn(13,n,e,r),t.elementType=$u,t.lanes=s,t;case qu:return t=Tn(19,n,e,r),t.elementType=qu,t.lanes=s,t;case Ng:return Ac(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Dg:o=10;break e;case Ig:o=9;break e;case Rd:o=11;break e;case bd:o=14;break e;case Fi:o=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Tn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Cr(t,e,n,i){return t=Tn(7,t,i,e),t.lanes=n,t}function Ac(t,e,n,i){return t=Tn(22,t,i,e),t.elementType=Ng,t.lanes=n,t.stateNode={isHidden:!1},t}function fu(t,e,n){return t=Tn(6,t,null,e),t.lanes=n,t}function du(t,e,n){return e=Tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function tS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jc(0),this.expirationTimes=jc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function uh(t,e,n,i,r,s,o,a,l){return t=new tS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yd(s),t}function nS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function wv(t){if(!t)return tr;t=t._reactInternals;e:{if(Br(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(rn(n))return w0(t,n,e)}return e}function Av(t,e,n,i,r,s,o,a,l){return t=uh(n,i,!0,t,r,s,o,a,l),t.context=wv(null),n=t.current,i=Zt(),r=Ki(n),s=_i(i,r),s.callback=e??null,$i(n,s,r),t.current.lanes=r,pa(t,r,i),sn(t,i),t}function Cc(t,e,n,i){var r=e.current,s=Zt(),o=Ki(r);return n=wv(n),e.context===null?e.context=n:e.pendingContext=n,e=_i(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=$i(r,e,o),t!==null&&(Hn(t,r,o,s),yl(t,r,o)),o}function ic(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Xp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function fh(t,e){Xp(t,e),(t=t.alternate)&&Xp(t,e)}function iS(){return null}var Cv=typeof reportError=="function"?reportError:function(t){console.error(t)};function dh(t){this._internalRoot=t}Rc.prototype.render=dh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));Cc(t,e,null,null)};Rc.prototype.unmount=dh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ir(function(){Cc(null,t,null,null)}),e[yi]=null}};function Rc(t){this._internalRoot=t}Rc.prototype.unstable_scheduleHydration=function(t){if(t){var e=r0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Bi.length&&e!==0&&e<Bi[n].priority;n++);Bi.splice(n,0,t),n===0&&o0(t)}};function hh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function jp(){}function rS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=ic(o);s.call(c)}}var o=Av(e,i,t,0,null,!1,!1,"",jp);return t._reactRootContainer=o,t[yi]=o.current,ta(t.nodeType===8?t.parentNode:t),Ir(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=ic(l);a.call(c)}}var l=uh(t,0,!1,null,null,!1,!1,"",jp);return t._reactRootContainer=l,t[yi]=l.current,ta(t.nodeType===8?t.parentNode:t),Ir(function(){Cc(e,l,n,i)}),l}function Pc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=ic(o);a.call(l)}}Cc(e,o,t,r)}else o=rS(n,e,t,r,i);return ic(o)}n0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Po(e.pendingLanes);n!==0&&(Dd(e,n|1),sn(e,_t()),!(je&6)&&(Ws=_t()+500,ar()))}break;case 13:Ir(function(){var i=Si(t,1);if(i!==null){var r=Zt();Hn(i,t,1,r)}}),fh(t,1)}};Id=function(t){if(t.tag===13){var e=Si(t,134217728);if(e!==null){var n=Zt();Hn(e,t,134217728,n)}fh(t,134217728)}};i0=function(t){if(t.tag===13){var e=Ki(t),n=Si(t,e);if(n!==null){var i=Zt();Hn(n,t,e,i)}fh(t,e)}};r0=function(){return et};s0=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};of=function(t,e,n){switch(e){case"input":if(Qu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=yc(i);if(!r)throw Error(re(90));Fg(i),Qu(i,r)}}}break;case"textarea":kg(t,n);break;case"select":e=n.value,e!=null&&Rs(t,!!n.multiple,e,!1)}};Xg=oh;jg=Ir;var sS={usingClientEntryPoint:!1,Events:[ga,_s,yc,Gg,Wg,oh]},_o={findFiberByHostInstance:Sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},oS={bundleType:_o.bundleType,version:_o.version,rendererPackageName:_o.rendererPackageName,rendererConfig:_o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ti.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=qg(t),t===null?null:t.stateNode},findFiberByHostInstance:_o.findFiberByHostInstance||iS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ba=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ba.isDisabled&&Ba.supportsFiber)try{gc=Ba.inject(oS),ei=Ba}catch{}}_n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sS;_n.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hh(e))throw Error(re(200));return nS(t,e,null,n)};_n.createRoot=function(t,e){if(!hh(t))throw Error(re(299));var n=!1,i="",r=Cv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=uh(t,1,!1,null,null,n,!1,i,r),t[yi]=e.current,ta(t.nodeType===8?t.parentNode:t),new dh(e)};_n.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=qg(e),t=t===null?null:t.stateNode,t};_n.flushSync=function(t){return Ir(t)};_n.hydrate=function(t,e,n){if(!bc(e))throw Error(re(200));return Pc(null,t,e,!0,n)};_n.hydrateRoot=function(t,e,n){if(!hh(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Cv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Av(e,null,t,1,n??null,r,!1,s,o),t[yi]=e.current,ta(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Rc(e)};_n.render=function(t,e,n){if(!bc(e))throw Error(re(200));return Pc(null,t,e,!1,n)};_n.unmountComponentAtNode=function(t){if(!bc(t))throw Error(re(40));return t._reactRootContainer?(Ir(function(){Pc(null,null,t,!1,function(){t._reactRootContainer=null,t[yi]=null})}),!0):!1};_n.unstable_batchedUpdates=oh;_n.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!bc(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return Pc(t,e,n,!1,i)};_n.version="18.3.1-next-f1338f8080-20240426";function Rv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rv)}catch(t){console.error(t)}}Rv(),Rg.exports=_n;var aS=Rg.exports,Yp=aS;Xu.createRoot=Yp.createRoot,Xu.hydrateRoot=Yp.hydrateRoot;function $p(t,e,n){return t+(e-t)*n}function Wr(t,e,n){return[$p(t[0],e[0],n),$p(t[1],e[1],n)]}function lS(t,e){const[n,i]=t,[r,s]=e;return!(n[0]>s[0]||i[0]<r[0]||n[1]>s[1]||i[1]<r[1])}class cS{}class bv extends cS{constructor(e=1e-10){super(),this.epsilon=e}snap0(e){return Math.abs(e)<this.epsilon?0:e}snap01(e){return Math.abs(e)<this.epsilon?0:Math.abs(1-e)<this.epsilon?1:e}isCollinear(e,n,i){const r=e[0]-n[0],s=e[1]-n[1],o=n[0]-i[0],a=n[1]-i[1];return Math.abs(r*a-o*s)<this.epsilon}solveCubicNormalized(e,n,i){const r=e/3,s=n/3,o=r*r-s,a=r*(r*r-n/2)+i/2;if(Math.abs(a)<this.epsilon&&Math.abs(o)<this.epsilon)return[-r];const l=r*(r*(4*r*i-s*n)-2*n*i)+4*s*s*s+i*i;if(Math.abs(l)<this.epsilon){const d=Math.sqrt(o);return a>0?[-2*d-e/3,d-e/3]:[-d-e/3,2*d-e/3]}const c=o*o*o,u=a*a;if(u<c){const d=(a<0?-1:1)*Math.sqrt(u/c),h=Math.acos(d),p=-2*Math.sqrt(o),v=p*Math.cos(h/3)-r,_=p*Math.cos((h+2*Math.PI)/3)-r,m=p*Math.cos((h-2*Math.PI)/3)-r;return[v,_,m].sort((f,g)=>f-g)}else{const d=(a<0?1:-1)*Math.pow(Math.abs(a)+Math.sqrt(u-c),.3333333333333333),h=Math.abs(d)>=this.epsilon?o/d:0;return[d+h-r]}}solveCubic(e,n,i,r){if(Math.abs(e)<this.epsilon){if(Math.abs(n)<this.epsilon)return Math.abs(i)<this.epsilon?Math.abs(r)<this.epsilon?[0]:[]:[-r/i];const s=2*n;let o=i*i-4*n*r;return Math.abs(o)<this.epsilon?[-i/s]:o>0?(o=Math.sqrt(o),[(-i+o)/s,(-i-o)/s].sort((a,l)=>a-l)):[]}return this.solveCubicNormalized(n/e,i/e,r/e)}isEqualVec2(e,n){return Math.abs(e[0]-n[0])<this.epsilon&&Math.abs(e[1]-n[1])<this.epsilon}compareVec2(e,n){return Math.abs(n[0]-e[0])<this.epsilon?Math.abs(n[1]-e[1])<this.epsilon?0:e[1]<n[1]?-1:1:e[0]<n[0]?-1:1}}class qp{constructor(e){this.tValues=[],this.geo=e}addArray(e){for(const n of e)this.tValues.push(n);return this}add(e){if(e=this.geo.snap01(e),e<0||e>1)return this;for(const n of this.tValues)if(this.geo.snap0(e-n)===0)return this;return this.tValues.push(e),this}list(){return this.tValues.sort((e,n)=>e-n),this.tValues}}class rc{constructor(e,n){this.tValuePairs=[],this.allowOutOfRange=e,this.geo=n}add(e,n){if(e=this.geo.snap01(e),n=this.geo.snap01(n),!this.allowOutOfRange&&(e<0||e>1||n<0||n>1))return this;for(const i of this.tValuePairs)if(this.geo.snap0(e-i[0])===0||this.geo.snap0(n-i[1])===0)return this;return this.tValuePairs.push([e,n]),this}list(){return this.tValuePairs.sort((e,n)=>e[0]-n[0]),this.tValuePairs}done(){return this.tValuePairs.length<=0?null:{kind:"tValuePairs",tValuePairs:this.list()}}}class Pv{}class Ct extends Pv{constructor(e,n,i){super(),this.p0=e,this.p1=n,this.geo=i}copy(){return new Ct(this.p0,this.p1,this.geo)}isEqual(e){return this.geo.isEqualVec2(this.p0,e.p0)&&this.geo.isEqualVec2(this.p1,e.p1)}start(){return this.p0}start2(){return this.p1}end2(){return this.p0}end(){return this.p1}setStart(e){this.p0=e}setEnd(e){this.p1=e}point(e){const n=this.p0,i=this.p1;return e===0?n:e===1?i:[n[0]+(i[0]-n[0])*e,n[1]+(i[1]-n[1])*e]}split(e){if(e.length<=0)return[this];const n=e.map(s=>this.point(s));n.push(this.p1);const i=[];let r=this.p0;for(const s of n)i.push(new Ct(r,s,this.geo)),r=s;return i}reverse(){return new Ct(this.p1,this.p0,this.geo)}boundingBox(){const e=this.p0,n=this.p1;return[[Math.min(e[0],n[0]),Math.min(e[1],n[1])],[Math.max(e[0],n[0]),Math.max(e[1],n[1])]]}pointOn(e){return this.geo.isCollinear(e,this.p0,this.p1)}draw(e){const n=this.p0,i=this.p1;return e.moveTo(n[0],n[1]),e.lineTo(i[0],i[1]),e}}class At extends Pv{constructor(e,n,i,r,s){super(),this.p0=e,this.p1=n,this.p2=i,this.p3=r,this.geo=s}copy(){return new At(this.p0,this.p1,this.p2,this.p3,this.geo)}isEqual(e){return this.geo.isEqualVec2(this.p0,e.p0)&&this.geo.isEqualVec2(this.p1,e.p1)&&this.geo.isEqualVec2(this.p2,e.p2)&&this.geo.isEqualVec2(this.p3,e.p3)}start(){return this.p0}start2(){return this.p1}end2(){return this.p2}end(){return this.p3}setStart(e){this.p0=e}setEnd(e){this.p3=e}point(e){const n=this.p0,i=this.p1,r=this.p2,s=this.p3;if(e===0)return n;if(e===1)return s;const o=(1-e)*(1-e),a=e*e,l=o*(1-e),c=3*o*e,u=3*a*(1-e),d=a*e;return[n[0]*l+i[0]*c+r[0]*u+s[0]*d,n[1]*l+i[1]*c+r[1]*u+s[1]*d]}split(e){if(e.length<=0)return[this];const n=[],i=(o,a)=>{const[l,c,u,d]=o,h=Wr(l,c,a),p=Wr(c,u,a),v=Wr(u,d,a),_=Wr(h,p,a),m=Wr(p,v,a),f=Wr(_,m,a);return n.push(new At(l,h,_,f,this.geo)),[f,m,v,d]};let r=[this.p0,this.p1,this.p2,this.p3],s=0;for(const o of e)r=i(r,(o-s)/(1-s)),s=o;return n.push(new At(r[0],r[1],r[2],r[3],this.geo)),n}reverse(){return new At(this.p3,this.p2,this.p1,this.p0,this.geo)}getCubicCoefficients(e){const n=this.p0[e],i=this.p1[e],r=this.p2[e];return[this.p3[e]-3*r+3*i-n,3*r-6*i+3*n,3*i-3*n,n]}boundingTValues(){const e=new qp(this.geo),n=(a,l,c,u)=>{const d=3*u-9*c+9*l-3*a,h=6*a-12*l+6*c,p=3*l-3*a;if(this.geo.snap0(d)===0)e.add(-p/h);else{const v=h*h-4*d*p;if(v>=0){const _=Math.sqrt(v);e.add((-h+_)/(2*d)),e.add((-h-_)/(2*d))}}return e},i=this.p0,r=this.p1,s=this.p2,o=this.p3;return n(i[0],r[0],s[0],o[0]),n(i[1],r[1],s[1],o[1]),e.list()}inflectionTValues(){const e=new qp(this.geo);e.addArray(this.boundingTValues());const n=this.p0,i=this.p1,r=this.p2,s=this.p3,o=3*(i[0]-n[0]),a=3*(i[1]-n[1]),l=6*(r[0]-i[0]),c=6*(r[1]-i[1]),u=3*(s[0]-r[0]),d=3*(s[1]-r[1]),h=6*(r[0]-2*i[0]+n[0]),p=6*(r[1]-2*i[1]+n[1]),v=6*(s[0]-2*r[0]+i[0]),_=6*(s[1]-2*r[1]+i[1]),m=o-l+u,f=a-c+d,g=l-2*o,x=c-2*a,S=o,R=a,A=v-h,w=_-p,P=h,E=p,y=m*w-f*A,b=m*E+g*w-f*P-x*A,U=g*E+S*w-x*P-R*A,I=S*E-R*P;for(const z of this.geo.solveCubic(y,b,U,I))e.add(z);return e.list()}boundingBox(){const e=this.p0,n=this.p3,i=[Math.min(e[0],n[0]),Math.min(e[1],n[1])],r=[Math.max(e[0],n[0]),Math.max(e[1],n[1])];for(const s of this.boundingTValues()){const o=this.point(s);i[0]=Math.min(i[0],o[0]),i[1]=Math.min(i[1],o[1]),r[0]=Math.max(r[0],o[0]),r[1]=Math.max(r[1],o[1])}return[i,r]}mapXtoT(e,n=!1){if(this.geo.snap0(this.p0[0]-e)===0)return 0;if(this.geo.snap0(this.p3[0]-e)===0)return 1;const i=this.p0[0]-e,r=this.p1[0]-e,s=this.p2[0]-e,a=[this.p3[0]-e-3*s+3*r-i,3*s-6*r+3*i,3*r-3*i,i];for(const l of this.geo.solveCubic(a[0],a[1],a[2],a[3])){const c=this.geo.snap01(l);if(c>=0&&c<=1)return l}if(n||e>=Math.min(this.p0[0],this.p3[0])&&e<=Math.max(this.p0[0],this.p3[0]))for(let l=0;l<4;l++){let c=-1;for(let u=0;u<4;u++)a[u]!==0&&(c<0||Math.abs(a[u])<Math.abs(a[c]))&&(c=u);if(c<0)return 0;a[c]=0;for(const u of this.geo.solveCubic(a[0],a[1],a[2],a[3])){const d=this.geo.snap01(u);if(d>=0&&d<=1)return u}}return!1}mapXtoY(e,n=!1){const i=this.mapXtoT(e,n);return i===!1?!1:this.point(i)[1]}pointOn(e){if(this.geo.isEqualVec2(this.p0,e)||this.geo.isEqualVec2(this.p3,e))return!0;const n=this.mapXtoY(e[0]);return n===!1?!1:this.geo.snap0(n-e[1])===0}toLine(){const e=this.p0,n=this.p1,i=this.p2,r=this.p3;return this.geo.snap0(e[0]-n[0])===0&&this.geo.snap0(e[0]-i[0])===0&&this.geo.snap0(e[0]-r[0])===0||this.geo.snap0(e[1]-n[1])===0&&this.geo.snap0(e[1]-i[1])===0&&this.geo.snap0(e[1]-r[1])===0?new Ct(e,r,this.geo):null}draw(e){const n=this.p0,i=this.p1,r=this.p2,s=this.p3;return e.moveTo(n[0],n[1]),e.bezierCurveTo(i[0],i[1],r[0],r[1],s[0],s[1]),e}}function za(t,e){const n=e.p1[0]-e.p0[0],i=e.p1[1]-e.p0[1],r=t[0]-e.p0[0],s=t[1]-e.p0[1],o=n*n+i*i;return(r*n+s*i)/o}function uS(t,e,n){const i=t.geo,r=t.p0,s=t.p1,o=e.p0,a=e.p1,l=s[0]-r[0],c=s[1]-r[1],u=a[0]-o[0],d=a[1]-o[1],h=l*d-c*u;if(i.snap0(h)===0){if(!i.isCollinear(r,s,o))return null;const _=za(e.p0,t),m=za(e.p1,t),f=i.snap01(Math.min(_,m)),g=i.snap01(Math.max(_,m));if(g<0||f>1)return null;const x=za(t.p0,e),S=za(t.p1,e),R=i.snap01(Math.min(x,S)),A=i.snap01(Math.max(x,S));return A<0||R>1?null:{kind:"tRangePairs",tStart:[Math.max(0,f),Math.max(0,R)],tEnd:[Math.min(1,g),Math.min(1,A)]}}const p=r[0]-o[0],v=r[1]-o[1];return new rc(n,i).add((u*v-d*p)/h,(l*v-c*p)/h).done()}function Kp(t,e,n,i){const r=t.geo,s=t.p0,o=t.p1,a=o[1]-s[1],l=s[0]-o[0];if(r.snap0(l)===0){const g=e.mapXtoT(s[0],!1);if(g===!1)return null;const S=(e.point(g)[1]-s[1])/a,R=new rc(n,r);return i?R.add(g,S):R.add(S,g),R.done()}const c=a*s[0]+l*s[1],u=e.getCubicCoefficients(0),d=e.getCubicCoefficients(1),h=a*u[0]+l*d[0],p=a*u[1]+l*d[1],v=a*u[2]+l*d[2],_=a*u[3]+l*d[3]-c,m=r.solveCubic(h,p,v,_),f=new rc(n,r);if(r.snap0(a)===0)for(const g of m){const x=u[0]*g*g*g+u[1]*g*g+u[2]*g+u[3],S=(s[0]-x)/l;i?f.add(g,S):f.add(S,g)}else for(const g of m){const S=(d[0]*g*g*g+d[1]*g*g+d[2]*g+d[3]-s[1])/a;i?f.add(g,S):f.add(S,g)}return f.done()}function fS(t,e,n){const i=t.geo;if(i.isEqualVec2(t.p0,e.p0))return i.isEqualVec2(t.p3,e.p3)?i.isEqualVec2(t.p1,e.p1)&&i.isEqualVec2(t.p2,e.p2)?{kind:"tRangePairs",tStart:[0,0],tEnd:[1,1]}:{kind:"tValuePairs",tValuePairs:[[0,0],[1,1]]}:{kind:"tValuePairs",tValuePairs:[[0,0]]};if(i.isEqualVec2(t.p0,e.p3))return{kind:"tValuePairs",tValuePairs:[[0,1]]};if(i.isEqualVec2(t.p3,e.p0))return{kind:"tValuePairs",tValuePairs:[[1,0]]};if(i.isEqualVec2(t.p3,e.p3))return{kind:"tValuePairs",tValuePairs:[[1,1]]};const r=new rc(n,i),s=(o,a,l,c,u,d)=>{const h=o.boundingBox(),p=c.boundingBox();if(!lS(h,p))return;const v=(a+l)/2,_=(u+d)/2;if(i.snap0(l-a)===0&&i.snap0(d-u)===0){r.add(v,_);return}const[m,f]=o.split([.5]),[g,x]=c.split([.5]);s(m,a,v,g,u,_),s(f,v,l,g,u,_),s(m,a,v,x,_,d),s(f,v,l,x,_,d)};return s(t,0,1,e,0,1),r.done()}function Zp(t,e,n){if(t instanceof Ct){if(e instanceof Ct)return uS(t,e,n);if(e instanceof At)return Kp(t,e,n,!1)}else if(t instanceof At){if(e instanceof Ct)return Kp(e,t,n,!0);if(e instanceof At)return fS(t,e,n)}throw new Error("PolyBool: Unknown segment instance in segmentsIntersect")}class Lv{constructor(e,n=null,i=!1,r=null){var s,o,a;this.otherFill=null,this.id=(s=r==null?void 0:r.segmentId())!==null&&s!==void 0?s:-1,this.data=e,this.myFill={above:(o=n==null?void 0:n.above)!==null&&o!==void 0?o:null,below:(a=n==null?void 0:n.below)!==null&&a!==void 0?a:null},this.closed=i}}class Xs extends Lv{}class js extends Lv{}function Qp(t,e){if(t instanceof Xs)return new Xs(t.data,t.myFill,t.closed,e);if(t instanceof js)return new js(t.data,t.myFill,t.closed,e);throw new Error("PolyBool: Unknown SegmentBool in copySegmentBool")}class Jp{constructor(e,n,i,r){this.status=null,this.isStart=e,this.p=n,this.seg=i,this.primary=r}}class em{constructor(){this.nodes=[]}remove(e){const n=this.nodes.indexOf(e);n>=0&&this.nodes.splice(n,1)}getIndex(e){return this.nodes.indexOf(e)}isEmpty(){return this.nodes.length<=0}getHead(){return this.nodes[0]}removeHead(){this.nodes.shift()}insertBefore(e,n){this.findTransition(e,n).insert(e)}findTransition(e,n){var i,r;const s=(l,c)=>n(c)-n(l);let o=0,a=this.nodes.length;for(;o<a;){const l=o+a>>1;s(this.nodes[l],e)>0?a=l:o=l+1}return{before:o<=0?null:(i=this.nodes[o-1])!==null&&i!==void 0?i:null,after:(r=this.nodes[o])!==null&&r!==void 0?r:null,insert:l=>(this.nodes.splice(o,0,l),l)}}}class tm{constructor(e,n,i=null){this.events=new em,this.status=new em,this.currentPath=[],this.selfIntersection=e,this.geo=n,this.log=i}compareEvents(e,n,i,r,s,o,a,l){const c=this.geo.compareVec2(n,o);return c!==0?c:r instanceof Ct&&l instanceof Ct&&this.geo.isEqualVec2(i,a)?0:e!==s?e?1:-1:this.compareSegments(l,r)}addEvent(e){this.events.insertBefore(e,n=>n===e?0:this.compareEvents(e.isStart,e.p,e.other.p,e.seg.data,n.isStart,n.p,n.other.p,n.seg.data))}divideEvent(e,n,i){var r,s;(r=this.log)===null||r===void 0||r.segmentDivide(e.seg,i);const[o,a]=e.seg.data.split([n]);o.setEnd(i),a.setStart(i);const l=a instanceof Ct?new Xs(a,e.seg.myFill,e.seg.closed,this.log):a instanceof At?new js(a,e.seg.myFill,e.seg.closed,this.log):null;if(!l)throw new Error("PolyBool: Unknown segment data in divideEvent");return this.events.remove(e.other),e.seg.data=o,(s=this.log)===null||s===void 0||s.segmentChop(e.seg),e.other.p=i,this.addEvent(e.other),this.addSegment(l,e.primary)}beginPath(){this.currentPath=[]}closePath(){for(const e of this.currentPath)e.closed=!0}addSegment(e,n){const i=new Jp(!0,e.data.start(),e,n),r=new Jp(!1,e.data.end(),e,n);return i.other=r,r.other=i,this.addEvent(i),this.addEvent(r),i}addLine(e,n,i=!0){const r=this.geo.compareVec2(e,n);if(r===0)return;const s=new Xs(new Ct(r<0?e:n,r<0?n:e,this.geo),null,!1,this.log);this.currentPath.push(s),this.addSegment(s,i)}addCurve(e,n,i,r,s=!0){const o=new At(e,n,i,r,this.geo),a=o.split(o.inflectionTValues());for(const l of a){const c=this.geo.compareVec2(l.start(),l.end());if(c===0)continue;const u=l.toLine();if(u)this.addLine(u.p0,u.p1,s);else{const d=new js(c<0?l:l.reverse(),null,!1,this.log);this.currentPath.push(d),this.addSegment(d,s)}}}compareSegments(e,n){let i=e.start(),r=n.start2();const s=n.start();if(n.pointOn(i)){if(i=e.start2(),n.pointOn(i)){if(e instanceof Ct){if(n instanceof Ct)return 0;n instanceof At&&(i=e.point(.5))}e instanceof At&&(i=e.end())}if(n instanceof At&&this.geo.snap0(i[0]-s[0])===0&&this.geo.snap0(r[0]-s[0])===0)return Math.sign(s[1]-i[1])}else{if(n instanceof At){const h=n.mapXtoY(i[0],!0);if(h!==!1)return Math.sign(h-i[1])}if(e instanceof At){const h=Zp(e,n,!0);if(h&&h.kind==="tValuePairs")for(const p of h.tValuePairs){const v=this.geo.snap01(p[0]);if(v>0&&v<1){r=e.point(v);break}}}}const[o,a]=i,[l,c]=r,[u,d]=s;return Math.sign((l-o)*(d-a)-(c-a)*(u-o))}statusFindSurrounding(e){return this.status.findTransition(e,n=>{if(e===n)return 0;const i=this.compareSegments(e.seg.data,n.seg.data);return i===0?-1:i})}checkIntersection(e,n){var i;const r=e.seg,s=n.seg;(i=this.log)===null||i===void 0||i.checkIntersection(r,s);const o=Zp(r.data,s.data,!1);if(o===null)return null;if(o.kind==="tRangePairs"){const{tStart:[a,l],tEnd:[c,u]}=o;if(a===1&&c===1&&l===0&&u===0||a===0&&c===0&&l===1&&u===1)return null;if(a===0&&c===1&&l===0&&u===1)return n;const d=r.data.start(),h=r.data.end(),p=s.data.end();return a===0&&l===0?(c===1?this.divideEvent(n,u,h):this.divideEvent(e,c,p),n):(l>0&&l<1&&(c===1&&u===1?this.divideEvent(n,l,d):(c===1?this.divideEvent(n,u,h):this.divideEvent(e,c,p),this.divideEvent(n,l,d))),null)}else if(o.kind==="tValuePairs"){if(o.tValuePairs.length<=0)return null;let a=o.tValuePairs[0];for(let d=1;d<o.tValuePairs.length&&(a[0]===0&&a[1]===0||a[0]===0&&a[1]===1||a[0]===1&&a[1]===0||a[0]===1&&a[1]===1);d++)a=o.tValuePairs[d];const[l,c]=a,u=c===0?s.data.start():c===1?s.data.end():l===0?r.data.start():l===1?r.data.end():r.data.point(l);return l>0&&l<1&&this.divideEvent(e,l,u),c>0&&c<1&&this.divideEvent(n,c,u),null}throw new Error("PolyBool: Unknown intersection type")}calculate(){var e,n,i,r,s,o,a,l;const c=[];for(;!this.events.isEmpty();){const u=this.events.getHead();if((e=this.log)===null||e===void 0||e.vert(u.p[0]),u.isStart){(n=this.log)===null||n===void 0||n.segmentNew(u.seg,u.primary);const d=this.statusFindSurrounding(u),h=d.before,p=d.after;(i=this.log)===null||i===void 0||i.tempStatus(u.seg,h?h.seg:!1,p?p.seg:!1);const _=(()=>{if(h){const m=this.checkIntersection(u,h);if(m)return m}return p?this.checkIntersection(u,p):null})();if(_){if(this.selfIntersection){let m;u.seg.myFill.below===null?m=u.seg.closed:m=u.seg.myFill.above!==u.seg.myFill.below,m&&(_.seg.myFill.above=!_.seg.myFill.above)}else _.seg.otherFill=u.seg.myFill;(r=this.log)===null||r===void 0||r.segmentUpdate(_.seg),this.events.remove(u.other),this.events.remove(u)}if(this.events.getHead()!==u){(s=this.log)===null||s===void 0||s.rewind(u.seg);continue}if(this.selfIntersection){let m;u.seg.myFill.below===null?m=u.seg.closed:m=u.seg.myFill.above!==u.seg.myFill.below,p?u.seg.myFill.below=p.seg.myFill.above:u.seg.myFill.below=!1,u.seg.myFill.above=m?!u.seg.myFill.below:u.seg.myFill.below}else if(u.seg.otherFill===null){let m;if(!p)m=!1;else if(u.primary===p.primary){if(p.seg.otherFill===null)throw new Error("PolyBool: Unexpected state of otherFill (null)");m=p.seg.otherFill.above}else m=p.seg.myFill.above;u.seg.otherFill={above:m,below:m}}(o=this.log)===null||o===void 0||o.status(u.seg,h?h.seg:!1,p?p.seg:!1),u.other.status=d.insert(u)}else{const d=u.status;if(d===null)throw new Error("PolyBool: Zero-length segment detected; your epsilon is probably too small or too large");const h=this.status.getIndex(d);if(h>0&&h<this.status.nodes.length-1){const p=this.status.nodes[h-1],v=this.status.nodes[h+1];this.checkIntersection(p,v)}if((a=this.log)===null||a===void 0||a.statusRemove(d.seg),this.status.remove(d),!u.primary){if(!u.seg.otherFill)throw new Error("PolyBool: Unexpected state of otherFill (null)");const p=u.seg.myFill;u.seg.myFill=u.seg.otherFill,u.seg.otherFill=p}c.push(u.seg)}this.events.removeHead()}return(l=this.log)===null||l===void 0||l.done(),c}}function xo(t,e,n){const i=[];for(const r of t){const s=(r.myFill.above?8:0)+(r.myFill.below?4:0)+(r.otherFill&&r.otherFill.above?2:0)+(r.otherFill&&r.otherFill.below?1:0),o=e[s],a=(o&1)!==0,l=(o&2)!==0;if(!r.closed&&o!==0||r.closed&&a!==l){const c={above:a,below:l};if(r instanceof Xs)i.push(new Xs(r.data,c,r.closed,n));else if(r instanceof js)i.push(new js(r.data,c,r.closed,n));else throw new Error("PolyBool: Unknown SegmentBool type in SegmentSelector")}}return n==null||n.selected(i),i}class yo{static union(e,n){return xo(e,[4,2,1,0,2,2,0,0,1,0,1,0,0,0,0,0],n)}static intersect(e,n){return xo(e,[0,0,0,4,0,2,0,2,0,0,1,1,4,2,1,0],n)}static difference(e,n){return xo(e,[4,0,0,0,2,0,2,0,1,1,0,0,0,1,2,0],n)}static differenceRev(e,n){return xo(e,[4,2,1,0,0,0,1,1,0,2,0,2,0,0,0,0],n)}static xor(e,n){return xo(e,[4,2,1,0,2,0,0,1,1,0,0,2,0,1,2,0],n)}}function dS(t,e,n){return n.isCollinear(t.p0,t.p1,e.p1)?new Ct(t.p0,e.p1,n):!1}function hS(t,e,n){if(n.isCollinear(t.p2,t.p3,e.p1)){const i=e.p1[0]-t.p2[0],r=e.p1[1]-t.p2[1],s=Math.abs(i)>Math.abs(r)?(t.p3[0]-t.p2[0])/i:(t.p3[1]-t.p2[1])/r,o=n.snap01(s);if(o!==0&&o!==1){const a=new At(t.p0,[t.p0[0]+(t.p1[0]-t.p0[0])/s,t.p0[1]+(t.p1[1]-t.p0[1])/s],[e.p2[0]-s*(e.p3[0]-e.p2[0])/(1-s),e.p2[1]-s*(e.p3[1]-e.p2[1])/(1-s)],e.p3,n),[l,c]=a.split([s]);if(l.isEqual(t)&&c.isEqual(e))return a}}return!1}function So(t,e,n){return t===e?!1:t instanceof Ct&&e instanceof Ct?dS(t,e,n):t instanceof At&&e instanceof At?hS(t,e,n):!1}function pS(t,e,n){const i=[],r=[],s=[];for(const a of t){let f=function(g,x,S){return m&&(m.index=g,m.matchesHead=x,m.matchesPt1=S),m===v?(m=_,!1):(m=null,!0)};var o=f;let l=a.data;const c=a.closed,u=c?i:r,d=l.start(),h=l.end(),p=g=>{n==null||n.chainReverse(g,c);const x=[];for(const S of u[g].segs)x.unshift(S.reverse());return u[g]={segs:x,fill:!u[g].fill},x};if(l instanceof Ct&&e.isEqualVec2(d,h)){console.warn("PolyBool: Warning: Zero-length segment detected; your epsilon is probably too small or too large");continue}n==null||n.chainStart({seg:l,fill:!!a.myFill.above},c);const v={index:0,matchesHead:!1,matchesPt1:!1},_={index:0,matchesHead:!1,matchesPt1:!1};let m=v;for(let g=0;g<u.length;g++){const x=u[g].segs,S=x[0].start(),R=x[x.length-1].end();if(e.isEqualVec2(S,d)){if(f(g,!0,!0))break}else if(e.isEqualVec2(S,h)){if(f(g,!0,!1))break}else if(e.isEqualVec2(R,d)){if(f(g,!1,!0))break}else if(e.isEqualVec2(R,h)&&f(g,!1,!1))break}if(m===v){const g=!!a.myFill.above;u.push({segs:[l],fill:g}),n==null||n.chainNew({seg:l,fill:g},c)}else if(m===_){const g=v.index;n==null||n.chainMatch(g,c);const{segs:x,fill:S}=u[g];if(v.matchesHead?v.matchesPt1?(l=l.reverse(),n==null||n.chainAddHead(g,{seg:l,fill:S},c),x.unshift(l)):(n==null||n.chainAddHead(g,{seg:l,fill:S},c),x.unshift(l)):v.matchesPt1?(n==null||n.chainAddTail(g,{seg:l,fill:S},c),x.push(l)):(l=l.reverse(),n==null||n.chainAddTail(g,{seg:l,fill:S},c),x.push(l)),v.matchesHead){const R=x[1],A=So(l,R,e);A&&(x.shift(),x[0]=A,n==null||n.chainSimplifyHead(g,{seg:A,fill:S},c))}else{const R=x[x.length-2],A=So(R,l,e);A&&(x.pop(),x[x.length-1]=A,n==null||n.chainSimplifyTail(g,{seg:A,fill:S},c))}if(c){let R=x,A=R[0],w=R[R.length-1];if(R.length>0&&e.isEqualVec2(A.start(),w.end())){let P=0,E=R[0].start();for(const U of R){const I=U.end();P+=I[1]*E[0]-I[0]*E[1],E=I}P<0===S&&(R=p(g),A=R[0],w=R[R.length-1]);const b=So(w,A,e);b&&(R.pop(),R[0]=b,n==null||n.chainSimplifyClose(g,{seg:b,fill:S},c)),n==null||n.chainClose(g,c),u.splice(g,1),s.push(R)}}}else{const g=(A,w)=>{const{segs:P,fill:E}=u[A],{segs:y}=u[w];n==null||n.chainAddTail(A,{seg:l,fill:E},c),P.push(l);const b=P[P.length-2],U=So(b,l,e);U&&(P.pop(),P[P.length-1]=U,n==null||n.chainSimplifyTail(A,{seg:U,fill:E},c));const I=P[P.length-1],z=y[0],$=So(I,z,e);$&&(y.shift(),P[P.length-1]=$,n==null||n.chainSimplifyJoin(A,w,{seg:$,fill:E},c)),n==null||n.chainJoin(A,w,c),u[A].segs=P.concat(y),u.splice(w,1)},x=v.index,S=_.index;n==null||n.chainConnect(x,S,c);const R=u[x].segs.length<u[S].segs.length;v.matchesHead?_.matchesHead?R?(v.matchesPt1||(l=l.reverse()),p(x),g(x,S)):(v.matchesPt1&&(l=l.reverse()),p(S),g(S,x)):(v.matchesPt1&&(l=l.reverse()),g(S,x)):_.matchesHead?(v.matchesPt1||(l=l.reverse()),g(x,S)):R?(v.matchesPt1&&(l=l.reverse()),p(x),g(S,x)):(v.matchesPt1||(l=l.reverse()),p(S),g(x,S))}}for(const{segs:a}of r)s.push(a);return s}function mS(t,e,n,i){const[r,s,o,a,l,c]=i;n.beginPath();for(const u of t){if(u.length<=0)continue;for(let p=0;p<u.length;p++){const v=u[p];if(p===0){const[_,m]=v.start();n.moveTo(r*_+o*m+l,s*_+a*m+c)}if(v instanceof Ct){const[_,m]=v.p1;n.lineTo(r*_+o*m+l,s*_+a*m+c)}else if(v instanceof At){const[_,m]=v.p1,[f,g]=v.p2,[x,S]=v.p3;n.bezierCurveTo(r*_+o*m+l,s*_+a*m+c,r*f+o*g+l,s*f+a*g+c,r*x+o*S+l,s*x+a*S+c)}else throw new Error("PolyBool: Unknown segment instance")}const d=u[0],h=u[u.length-1];e.isEqualVec2(d.start(),h.end())&&n.closePath()}return n}class us{constructor(e,n=null,i=null){this.pathState={kind:"beginPath"},this.saveStack=[],this.matrix=[1,0,0,1,0,0],this.geo=e,this.log=i,n?this.resultState={state:"seg",segments:n}:this.resultState={state:"new",selfIntersect:new tm(!0,this.geo,this.log)}}setTransform(e,n,i,r,s,o){if(this.resultState.state!=="new")throw new Error("PolyBool: Cannot change shape after using it in an operation");return this.matrix=[e,n,i,r,s,o],this}resetTransform(){return this.matrix=[1,0,0,1,0,0],this}getTransform(){if(this.resultState.state!=="new")throw new Error("PolyBool: Cannot change shape after using it in an operation");const[e,n,i,r,s,o]=this.matrix;return{a:e,b:n,c:i,d:r,e:s,f:o}}transform(e,n,i,r,s,o){const[a,l,c,u,d,h]=this.matrix;return this.matrix=[a*e+c*n,l*e+u*n,a*i+c*r,l*i+u*r,a*s+c*o+d,l*s+u*o+h],this}rotate(e){const n=Math.cos(e),i=Math.sin(e),[r,s,o,a,l,c]=this.matrix;return this.matrix=[r*n+o*i,s*n+a*i,o*n-r*i,a*n-s*i,l,c],this}rotateDeg(e){const n=(e%360+360)%360;if(n===0)return this;let i=0,r=0;if(n===90)r=1;else if(n===180)i=-1;else if(n===270)r=-1;else if(n===45)i=r=Math.SQRT1_2;else if(n===135)r=Math.SQRT1_2,i=-Math.SQRT1_2;else if(n===225)i=r=-Math.SQRT1_2;else if(n===315)i=Math.SQRT1_2,r=-Math.SQRT1_2;else if(n===30)i=Math.sqrt(3)/2,r=.5;else if(n===60)i=.5,r=Math.sqrt(3)/2;else if(n===120)i=-.5,r=Math.sqrt(3)/2;else if(n===150)i=-Math.sqrt(3)/2,r=.5;else if(n===210)i=-Math.sqrt(3)/2,r=-.5;else if(n===240)i=-.5,r=-Math.sqrt(3)/2;else if(n===300)i=.5,r=-Math.sqrt(3)/2;else if(n===330)i=Math.sqrt(3)/2,r=-.5;else{const d=Math.PI*n/180;i=Math.cos(d),r=Math.sin(d)}const[s,o,a,l,c,u]=this.matrix;return this.matrix=[s*i+a*r,o*i+l*r,a*i-s*r,l*i-o*r,c,u],this}scale(e,n){const[i,r,s,o,a,l]=this.matrix;return this.matrix=[i*e,r*e,s*n,o*n,a,l],this}translate(e,n){const[i,r,s,o,a,l]=this.matrix;return this.matrix=[i,r,s,o,i*e+s*n+a,r*e+o*n+l],this}save(){if(this.resultState.state!=="new")throw new Error("PolyBool: Cannot change shape after using it in an operation");return this.saveStack.push({matrix:this.matrix}),this}restore(){if(this.resultState.state!=="new")throw new Error("PolyBool: Cannot change shape after using it in an operation");const e=this.saveStack.pop();return e&&(this.matrix=e.matrix),this}transformPoint(e,n){const[i,r,s,o,a,l]=this.matrix;return[i*e+s*n+a,r*e+o*n+l]}beginPath(){if(this.resultState.state!=="new")throw new Error("PolyBool: Cannot change shape after using it in an operation");return this.resultState.selfIntersect.beginPath(),this.endPath()}moveTo(e,n){if(this.resultState.state!=="new")throw new Error("PolyBool: Cannot change shape after using it in an operation");this.pathState.kind!=="beginPath"&&this.beginPath();const i=this.transformPoint(e,n);return this.pathState={kind:"moveTo",start:i,current:i},this}lineTo(e,n){if(this.resultState.state!=="new")throw new Error("PolyBool: Cannot change shape after using it in an operation");if(this.pathState.kind!=="moveTo")throw new Error("PolyBool: Must call moveTo prior to calling lineTo");const i=this.transformPoint(e,n);return this.resultState.selfIntersect.addLine(this.pathState.current,i),this.pathState.current=i,this}rect(e,n,i,r){return this.moveTo(e,n).lineTo(e+i,n).lineTo(e+i,n+r).lineTo(e,n+r).closePath().moveTo(e,n)}bezierCurveTo(e,n,i,r,s,o){if(this.resultState.state!=="new")throw new Error("PolyBool: Cannot change shape after using it in an operation");if(this.pathState.kind!=="moveTo")throw new Error("PolyBool: Must call moveTo prior to calling bezierCurveTo");const a=this.transformPoint(s,o);return this.resultState.selfIntersect.addCurve(this.pathState.current,this.transformPoint(e,n),this.transformPoint(i,r),a),this.pathState.current=a,this}closePath(){if(this.resultState.state!=="new")throw new Error("PolyBool: Cannot change shape after using it in an operation");return this.pathState.kind==="moveTo"&&!this.geo.isEqualVec2(this.pathState.start,this.pathState.current)&&(this.resultState.selfIntersect.addLine(this.pathState.current,this.pathState.start),this.pathState.current=this.pathState.start),this.resultState.selfIntersect.closePath(),this.endPath()}endPath(){if(this.resultState.state!=="new")throw new Error("PolyBool: Cannot change shape after using it in an operation");return this.pathState={kind:"beginPath"},this}selfIntersect(){return this.resultState.state==="new"&&(this.resultState={state:"seg",segments:this.resultState.selfIntersect.calculate()}),this.resultState.segments}segments(){if(this.resultState.state!=="reg"){const e=this.selfIntersect();this.resultState={state:"reg",segments:e,regions:pS(e,this.geo,this.log)}}return this.resultState.regions}output(e,n=[1,0,0,1,0,0]){return mS(this.segments(),this.geo,e,n)}combine(e){const n=new tm(!1,this.geo,this.log);for(const i of this.selfIntersect())n.addSegment(Qp(i,this.log),!0);for(const i of e.selfIntersect())n.addSegment(Qp(i,this.log),!1);return new gS(n.calculate(),this.geo,this.log)}}class gS{constructor(e,n,i=null){this.geo=n,this.segments=e,this.log=i}union(){return new us(this.geo,yo.union(this.segments,this.log),this.log)}intersect(){return new us(this.geo,yo.intersect(this.segments,this.log),this.log)}difference(){return new us(this.geo,yo.difference(this.segments,this.log),this.log)}differenceRev(){return new us(this.geo,yo.differenceRev(this.segments,this.log),this.log)}xor(){return new us(this.geo,yo.xor(this.segments,this.log),this.log)}}class vS{constructor(){this.list=[],this.nextSegmentId=0,this.curVert=NaN}push(e,n){this.list.push({type:e,data:JSON.parse(JSON.stringify(n))})}info(e,n){this.push("info",{msg:e,data:n})}segmentId(){return this.nextSegmentId++}checkIntersection(e,n){this.push("check",{seg1:e,seg2:n})}segmentDivide(e,n){this.push("div_seg",{seg:e,p:n})}segmentChop(e){this.push("chop",{seg:e})}statusRemove(e){this.push("pop_seg",{seg:e})}segmentUpdate(e){this.push("seg_update",{seg:e})}segmentNew(e,n){this.push("new_seg",{seg:e,primary:n})}tempStatus(e,n,i){this.push("temp_status",{seg:e,above:n,below:i})}rewind(e){this.push("rewind",{seg:e})}status(e,n,i){this.push("status",{seg:e,above:n,below:i})}vert(e){e!==this.curVert&&(this.push("vert",{x:e}),this.curVert=e)}selected(e){this.push("selected",{segs:e})}chainStart(e,n){this.push("chain_start",{sf:e,closed:n})}chainNew(e,n){this.push("chain_new",{sf:e,closed:n})}chainMatch(e,n){this.push("chain_match",{index:e,closed:n})}chainClose(e,n){this.push("chain_close",{index:e,closed:n})}chainAddHead(e,n,i){this.push("chain_add_head",{index:e,sf:n,closed:i})}chainAddTail(e,n,i){this.push("chain_add_tail",{index:e,sf:n,closed:i})}chainSimplifyHead(e,n,i){this.push("chain_simp_head",{index:e,sf:n,closed:i})}chainSimplifyTail(e,n,i){this.push("chain_simp_tail",{index:e,sf:n,closed:i})}chainSimplifyClose(e,n,i){this.push("chain_simp_close",{index:e,sf:n,closed:i})}chainSimplifyJoin(e,n,i,r){this.push("chain_simp_join",{index1:e,index2:n,sf:i,closed:r})}chainConnect(e,n,i){this.push("chain_con",{index1:e,index2:n,closed:i})}chainReverse(e,n){this.push("chain_rev",{index:e,closed:n})}chainJoin(e,n,i){this.push("chain_join",{index1:e,index2:n,closed:i})}done(){this.push("done",null)}}class Dv{constructor(e=new bv,n=null){this.geo=e,this.log=n}shape(){return new us(this.geo,null,this.log)}buildLog(e){var n;return this.log=e?new vS:null,(n=this.log)===null||n===void 0?void 0:n.list}segments(e){const n=this.shape();n.beginPath();for(const i of e.regions){const r=i[i.length-1];n.moveTo(r[r.length-2],r[r.length-1]);for(const s of i)if(s.length===2)n.lineTo(s[0],s[1]);else if(s.length===6)n.bezierCurveTo(s[0],s[1],s[2],s[3],s[4],s[5]);else throw new Error("PolyBool: Invalid point in region");n.closePath()}return{shape:n,inverted:e.inverted}}combine(e,n){return{shape:e.shape.combine(n.shape),inverted1:e.inverted,inverted2:n.inverted}}selectUnion(e){return{shape:e.inverted1?e.inverted2?e.shape.intersect():e.shape.difference():e.inverted2?e.shape.differenceRev():e.shape.union(),inverted:e.inverted1||e.inverted2}}selectIntersect(e){return{shape:e.inverted1?e.inverted2?e.shape.union():e.shape.differenceRev():e.inverted2?e.shape.difference():e.shape.intersect(),inverted:e.inverted1&&e.inverted2}}selectDifference(e){return{shape:e.inverted1?e.inverted2?e.shape.differenceRev():e.shape.union():e.inverted2?e.shape.intersect():e.shape.difference(),inverted:e.inverted1&&!e.inverted2}}selectDifferenceRev(e){return{shape:e.inverted1?e.inverted2?e.shape.difference():e.shape.intersect():e.inverted2?e.shape.union():e.shape.differenceRev(),inverted:!e.inverted1&&e.inverted2}}selectXor(e){return{shape:e.shape.xor(),inverted:e.inverted1!==e.inverted2}}polygon(e){const n=[],i={beginPath:()=>{},moveTo:()=>{n.push([])},lineTo:(r,s)=>{n[n.length-1].push([r,s])},bezierCurveTo:(r,s,o,a,l,c)=>{n[n.length-1].push([r,s,o,a,l,c])},closePath:()=>{}};return e.shape.output(i),{regions:n,inverted:e.inverted}}union(e,n){const i=this.segments(e),r=this.segments(n),s=this.combine(i,r),o=this.selectUnion(s);return this.polygon(o)}intersect(e,n){const i=this.segments(e),r=this.segments(n),s=this.combine(i,r),o=this.selectIntersect(s);return this.polygon(o)}difference(e,n){const i=this.segments(e),r=this.segments(n),s=this.combine(i,r),o=this.selectDifference(s);return this.polygon(o)}differenceRev(e,n){const i=this.segments(e),r=this.segments(n),s=this.combine(i,r),o=this.selectDifferenceRev(s);return this.polygon(o)}xor(e,n){const i=this.segments(e),r=this.segments(n),s=this.combine(i,r),o=this.selectXor(s);return this.polygon(o)}}new Dv;class _S extends bv{atan2Deg(e,n){return Math.abs(e)<this.epsilon?n>0||Math.abs(n)<this.epsilon?0:180:Math.abs(n)<this.epsilon?e<0?270:90:Math.abs(n-e)<this.epsilon?n<0?225:45:Math.abs(n+e)<this.epsilon?n<0?135:315:(Math.atan2(e,n)*180/Math.PI+360)%360}sinDeg(e){const n=(e%360+360)%360;switch(n){case 0:case 180:return 0;case 30:case 150:return .5;case 45:case 135:return Math.SQRT1_2;case 60:case 120:return Math.sqrt(3)/2;case 90:return 1;case 210:case 330:return-.5;case 225:case 315:return-Math.SQRT1_2;case 240:case 300:return-Math.sqrt(3)/2;case 270:return-1;default:return Math.sin(n*Math.PI/180)}}cosDeg(e){const n=(e%360+360)%360;switch(n){case 0:return 1;case 30:case 330:return Math.sqrt(3)/2;case 45:case 315:return Math.SQRT1_2;case 60:case 300:return .5;case 90:case 270:return 0;case 120:case 240:return-.5;case 135:case 225:return-Math.SQRT1_2;case 150:case 210:return-Math.sqrt(3)/2;case 180:return-1;default:return Math.cos(n*Math.PI/180)}}linesIntersect(e,n,i,r,s,o,a,l){const c=i-e,u=r-n,d=a-s,h=l-o,p=c*h-u*d;if(this.snap0(p)===0)return null;const v=e-s,_=n-o,m=this.snap01((d*_-h*v)/p),f=this.snap01((c*_-u*v)/p);return{p:[e+m*c,n+m*u],alongA:m,alongB:f}}}const jn=new _S,qe=new Dv(jn);function xS(t,e){if(jn.snap0(e)===0)return t;const n=[];t.output({beginPath:()=>{},moveTo:(o,a)=>{n.push({path:[],closed:!1})},lineTo:(o,a)=>{n[n.length-1].path.push([o,a])},bezierCurveTo:(o,a,l,c,u,d)=>{n[n.length-1].path.push([o,a,l,c,u,d])},closePath:()=>{n[n.length-1].closed=!0}});const i=Math.abs(e)/2,r=Math.sign(e)*90,s=qe.shape().beginPath();for(const{path:o,closed:a}of n){let l=o;if(a){l=[];const c=(p,v)=>{const _=o[p],m=o[(p+o.length-1)%o.length],f=m[m.length-2],g=m[m.length-1];return _.length===2||v?jn.atan2Deg(g-_[1],f-_[0]):jn.atan2Deg(_[3]-_[5],_[2]-_[4])},u=(p,v,_)=>[p[0]+_*jn.cosDeg(v),p[1]+_*jn.sinDeg(v)],d=(p,v,_)=>u(p,v-r,_),h=[];for(let p=0;p<o.length;p++){const v=(p+o.length-1)%o.length,_=o[p],m=c(v,!1),f=c(p,!0),g=c(p,!1),x=Math.min(Math.abs(m-f),Math.abs(m+360-f),Math.abs(m-(f+360)));if(jn.snap0(x)>0){const S=i*4*Math.tan(x/4*Math.PI/180)/3,R=o[v],A=R[R.length-2],w=R[R.length-1],P=[A,w];h.push(l.length);const E=u(d(P,m,i),m,-S),y=u(d(P,f,i),f,S),b=d(P,f,i);l.push([E[0],E[1],y[0],y[1],b[0],b[1]])}if(_.length===2)l.push(d(_,g,i));else{const S=d([_[0],_[1]],f,i),R=d([_[2],_[3]],g,i),A=d([_[4],_[5]],g,i);l.push([S[0],S[1],R[0],R[1],A[0],A[1]])}}for(const p of h){const v=(p+l.length-1)%l.length,_=(p+l.length-2)%l.length,m=(p+1)%l.length,f=l[_],g=l[v],x=l[p],S=l[m];if(x.length===6){const R=jn.linesIntersect(g.length===2?f[f.length-2]:g[2],g.length===2?f[f.length-1]:g[3],g[g.length-2],g[g.length-1],x[x.length-2],x[x.length-1],S[0],S[1]);R&&R.alongA>0&&R.alongA<1&&R.alongB>0&&R.alongB<1&&(x[0]=g[g.length-2],x[1]=g[g.length-1],x[2]=x[4],x[3]=x[5],g[g.length-2]=R.p[0],g[g.length-1]=R.p[1],x[4]=R.p[0],x[5]=R.p[1])}}}if(l.length>0){const c=l[l.length-1];s.moveTo(c[c.length-2],c[c.length-1]);for(const u of l)u.length===2?s.lineTo(u[0],u[1]):s.bezierCurveTo(u[0],u[1],u[2],u[3],u[4],u[5])}}return s}class Fn{constructor(e,n,i=qe.shape(),r=qe.shape(),s=qe.shape()){this.home={origin:[0,0],angle:0},this.thickness=e,this.kerf=n,this.border=i,this.cuts=r,this.scores=s}replace(e){var n,i,r,s,o;const a=new Fn((n=e.thickness)!==null&&n!==void 0?n:this.thickness,(i=e.kerf)!==null&&i!==void 0?i:this.kerf,(r=e.border)!==null&&r!==void 0?r:this.border,(s=e.cuts)!==null&&s!==void 0?s:this.cuts,(o=e.scores)!==null&&o!==void 0?o:this.scores);return a.setHome(this.home.origin,this.home.angle),a}copy(){return this.replace({})}static combine(e,n,i){const r=n.cuts.combine(i.cuts).union().combine(e).intersect(),s=n.scores.combine(i.scores).union().combine(e).intersect();return n.replace({border:e,cuts:r,scores:s})}static union(e,n){return Fn.combine(e.border.combine(n.border).union(),e,n)}static intersect(e,n){return Fn.combine(e.border.combine(n.border).intersect(),e,n)}static subtract(e,n){return Fn.combine(e.border.combine(n.border).difference(),e,n)}static xor(e,n){return Fn.combine(e.border.combine(n.border).xor(),e,n)}unionBorder(e){return Fn.union(this,this.replace({border:e,cuts:qe.shape(),scores:qe.shape()}))}subtractBorder(e){return Fn.subtract(this,this.replace({border:e,cuts:qe.shape(),scores:qe.shape()}))}setHome(e,n){return this.home={origin:e,angle:n},this}newShape(){return qe.shape().translate(this.home.origin[0],this.home.origin[1]).rotateDeg(this.home.angle)}boundingBox(){const e=[1/0,1/0],n=[-1/0,-1/0];let i=!0;const r=s=>{for(const o of s.segments())for(const a of o){const l=a.boundingBox();e[0]=Math.min(e[0],l[0][0]),e[1]=Math.min(e[1],l[0][1]),n[0]=Math.max(n[0],l[1][0]),n[1]=Math.max(n[1],l[1][1]),i=!1}};return r(this.border),r(this.cuts),r(this.scores),i&&(e[0]=e[1]=n[0]=n[1]=0),[e,n]}applyKerf(){return jn.snap0(this.kerf)===0?this:this.replace({kerf:0,border:xS(this.border,this.kerf)})}}class yS{constructor(e){}}function fs(t,e=0){switch(typeof t){case"string":return JSON.stringify(t).replace(/--/g,"\\u002d-");case"boolean":case"number":return JSON.stringify(t);case"object":if(t===null)return"null";if(Array.isArray(t))if(t.every(n=>typeof n=="object"&&n!==null)){const n=[];for(let i=0;i<t.length;i++){const r=fs(t[i],e);r&&n.push(r)}return`[${n.join(", ")}]`}else{let n=[];for(let r=0;r<t.length;r++){const s=fs(t[r]);s&&n.push(s)}const i=`[${n.join(",")}]`;if(i.length<60&&!i.includes(`
`))return i;n=[];for(let r=0;r<t.length;r++){const s=fs(t[r],e+1);s&&n.push(s)}return`[
${"  ".repeat(e+1)}${n.join(`,
`)}
${"  ".repeat(e)}]`}else{const n=[];for(const[i,r]of Object.entries(t)){const s=fs(i),o=fs(r,e+1);o&&n.push(`${"  ".repeat(e+1)}${s}: ${o}`)}return`{
${n.join(`,
`)}
${"  ".repeat(e)}}`}}return""}class SS extends yS{constructor(e){super(e),this.surfaces=[],this.comments=[],this.settings=e}addSurface(e,n,i,r){this.surfaces.push({offset:e,surface:n.applyKerf(),cutColor:i,scoreColor:r})}addComment(e){this.comments.push(e)}toFile(){const e=l=>`${Math.round(l*1e3)/1e3}`,n=[];let i=0,r=0,s=100,o=100;if(this.surfaces.length>0){const l=[[1/0,1/0],[-1/0,-1/0]];for(const{offset:p,surface:v}of this.surfaces){const _=v.boundingBox();l[0][0]=Math.min(l[0][0],p[0]+_[0][0]-10),l[0][1]=Math.min(l[0][1],p[1]+_[0][1]-10),l[1][0]=Math.max(l[1][0],p[0]+_[1][0]+10),l[1][1]=Math.max(l[1][1],p[1]+_[1][1]+10)}i=l[0][0],r=l[0][1],s=l[1][0]-l[0][0],o=l[1][1]-l[0][1];let c=0;const u=()=>{n.push(`<g id="p-${c++}" style="fill:none;stroke-linecap:round;stroke-linejoin:round;">`)},d=()=>{n.push("</g>")},h=(p,v,_)=>{const m=[];v.output({beginPath:()=>{},moveTo:(f,g)=>{m.push(`M${e(f)} ${e(g)}`)},lineTo:(f,g)=>{m.push(`L${e(f)} ${e(g)}`)},bezierCurveTo:(f,g,x,S,R,A)=>{m.push(`C${e(f)} ${e(g)} ${e(x)} ${e(S)} ${e(R)} ${e(A)}`)},closePath:()=>{m.push("Z")}},[1,0,0,1,p[0],p[1]]),n.push(`<path stroke="${_}" stroke-width="1" d="${m.join("")}" />`)};for(const{offset:p,surface:v,cutColor:_,scoreColor:m}of this.surfaces)u(),u(),h(p,v.scores,m),d(),u(),h(p,v.border,_),h(p,v.cuts,_),d(),d()}const{units:a}=this.settings;return{mimeType:"image/svg+xml",extension:".svg",data:new TextEncoder().encode(`<?xml version='1.0' encoding='utf-8'?>
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

Exported on: ${new Date().toString()}
-->
${this.comments.map(l=>`<!--
${fs(l)}
-->`).join(`
`)}
${n.join(`
`)}
</svg>`)}}}function MS(t){const{fileFormat:e}=t;switch(e){case"svg":return new SS(t);default:throw new Error(`Unknown export file format: ${e}`)}}class _a{}class Iv{}class ph extends Iv{thickness(e,n){return this.jointThickness(!1,e,n)}draw(e,n,i,r){return this.jointDraw(e,n,!1,i,r)}}class Nv extends ph{name(){return"ButtJoint"}schema(){return{properties:{invert:{type:"boolean",metadata:{default:!1,title:"Invert",description:"Swap settings for receiving side"}},length1:{type:"float64",metadata:{default:0,title:"Length 1",description:"Length of butt 1 (multiples of material thickness)"}},length2:{type:"float64",metadata:{default:1,title:"Length 2",description:"Length of butt 2 (multiples of material thickness)"}}},metadata:{order:["invert","length1","length2"]}}}jointThickness(e,n,{length1:i,length2:r,invert:s}){return(e!==s?r:i)*n}jointDraw(e,n,i,r,s){return e}}function Uv({length:t,width1:e,width2:n,cornerDistance1:i,cornerDistance2:r,centerDistance:s},o){let a=0;const l=(d,h)=>{o(a,d,h),a+=d},c=d=>{if(d>1e4)throw new Error("Too many fingers");l(e,!0);for(let h=0;h<d;h++)l(n,!1),l(e,!0)},u=t-i-r;if(s>0){const d=(u-s)/2,h=Math.floor((d-e)/(e+n)),p=e+h*(e+n);l(i+(d-p)/2,!1),c(h),l(s+d-p,!1),c(h),l(r+(d-p)/2,!1)}else{const d=Math.floor((u-e)/(e+n)),h=e+d*(e+n);l(i+(u-h)/2,!1),c(d),l(r+(u-h)/2,!1)}}class Fv extends ph{name(){return"BoxJoint"}schema(){return{properties:{invert:{type:"boolean",metadata:{default:!1,title:"Invert",description:"Swap settings for receiving side"}},width1:{type:"float64",metadata:{default:6,title:"Width 1",description:"Width of finger 1 (units)"}},length1:{type:"float64",metadata:{default:1,title:"Length 1",description:"Length of finger 1 (multiples of material thickness)"}},width2:{type:"float64",metadata:{default:6,title:"Width 2",description:"Width of finger 2 (units)"}},length2:{type:"float64",metadata:{default:1,title:"Length 2",description:"Length of finger 2 (multiples of material thickness)"}},play:{type:"float64",metadata:{default:0,title:"Play",description:"Extra space around fingers (units)"}},cornerDistance:{type:"float64",metadata:{default:12,title:"Corner Distance",description:"Reserved space near corners to exclude fingers (units)"}},cornerDistance1Delta:{type:"float64",nullable:!0,metadata:{default:null,defaultNotNull:0,title:"Corner Distance 1 Delta",description:"Additional corner distance"}},cornerDistance2Delta:{type:"float64",nullable:!0,metadata:{default:null,defaultNotNull:0,title:"Corner Distance 2 Delta",description:"Additional corner distance"}},centerDistance:{type:"float64",metadata:{default:0,title:"Center Distance",description:"Reserved space near center to exclude fingers (units)"}}},metadata:{order:["invert","width1","length1","width2","length2","play","cornerDistance","centerDistance"]}}}jointThickness(e,n,{length1:i,length2:r,invert:s}){return(e!==s?r:i)*n}jointDraw(e,n,i,r,{invert:s,width1:o,length1:a,width2:l,length2:c,play:u,cornerDistance:d,cornerDistance1Delta:h,cornerDistance2Delta:p,centerDistance:v}){const _=i!==s,m=(_?c:a)*r;return Uv({length:n,width1:o,width2:l,cornerDistance1:d+(h??0),cornerDistance2:d+(p??0),centerDistance:v},(f,g,x)=>{x===_&&(e=e.subtractBorder(e.newShape().beginPath().rect(f-u/2,0,g+u,m).closePath()))}),e}}class Ov extends Iv{name(){return"LegEdge"}schema(){return{properties:{flatWidth:{type:"float64",metadata:{default:.1,title:"Flat Width",description:"Flat part of leg (fraction of overall length)"}},curveWidth:{type:"float64",metadata:{default:.15,title:"Curve Width",description:"Curve part of leg (fraction of overall length)"}},curveAmount:{type:"float64",metadata:{default:.05,title:"Curve Amount",description:"How extreme to curve (fraction of overall length)"}},height:{type:"float64",metadata:{default:10,title:"Height (units)"}}},metadata:{order:["flatWidth","curveWidth","curveAmount","height"]}}}thickness(e,{height:n}){return Math.max(0,n)}draw(e,n,i,{flatWidth:r,curveWidth:s,curveAmount:o,height:a}){return a<=0?e:e.subtractBorder(e.newShape().beginPath().moveTo(r*n,0).bezierCurveTo((r+o)*n,0,(r+s-o)*n,a,(r+s)*n,a).lineTo((1-r-s)*n,a).bezierCurveTo((1-r-s+o)*n,a,(1-r-o)*n,0,(1-r)*n,0).closePath())}}function kv(t,e={},n){return{discriminator:"kind",mapping:t.map(i=>({[i.name()]:{properties:{kind:{type:"string",metadata:{default:i.name(),title:i.name()}},params:i.schema()},metadata:{order:["params"],untabParams:!0}}})).reduce((i,r)=>({...i,...r}),{}),nullable:n,metadata:{default:t[0].name(),order:t.map(i=>i.name()),...e}}}const hu=[new Fv,new Nv,new Ov];class ES extends ph{name(){return"MortiseAndTenonJoint"}schema(){return{properties:{invert:{type:"boolean",metadata:{default:!1,title:"Invert",description:"Swap settings for receiving side"}},width1:{type:"float64",metadata:{default:6,title:"Width 1",description:"Width of tenon (units)"}},tenonLength:{type:"float64",metadata:{default:1,title:"Tenon Length",description:"Length of tenon (multiples of material thickness)"}},width2:{type:"float64",metadata:{default:6,title:"Width 2",description:"Width between tenons (units)"}},holeDistance:{type:"float64",metadata:{default:3,title:"Hole Distance",description:"Distance of mortises from edge (units)"}},play:{type:"float64",metadata:{default:0,title:"Play",description:"Extra space between mortise and tenons (units)"}},thicknessPlay:{type:"float64",metadata:{default:0,title:"Thickness Play",description:"Extra thickness added to mortise holes (units)"}},cornerDistance:{type:"float64",metadata:{default:12,title:"Corner Distance",description:"Reserved space near corners to exclude joints (units)"}},cornerDistance1Delta:{type:"float64",nullable:!0,metadata:{default:null,defaultNotNull:0,title:"Corner Distance 1 Delta",description:"Additional corner distance"}},cornerDistance2Delta:{type:"float64",nullable:!0,metadata:{default:null,defaultNotNull:0,title:"Corner Distance 2 Delta",description:"Additional corner distance"}},centerDistance:{type:"float64",metadata:{default:0,title:"Center Distance",description:"Reserved space near center to exclude joints (units)"}},mortiseEdge:kv(hu,{default:null,defaultNotNull:"LegEdge",title:"Mortise Edge"},!0)},metadata:{order:["invert","width1","tenonLength","width2","holeDistance","play","thicknessPlay","cornerDistance","centerDistance","mortiseEdge"]}}}jointThickness(e,n,{tenonLength:i,invert:r,mortiseEdge:s}){if(e!==r){if(s){const a=hu.find(l=>l.name()===s.kind);if(!a)throw new Error("Invalid mortise edge");return a.thickness(n,s.params)}return 0}return i*n}jointDraw(e,n,i,r,{invert:s,width1:o,tenonLength:a,width2:l,holeDistance:c,play:u,thicknessPlay:d,cornerDistance:h,cornerDistance1Delta:p,cornerDistance2Delta:v,centerDistance:_,mortiseEdge:m}){const f=i!==s;let g=0;if(f&&m){const x=hu.find(S=>S.name()===m.kind);if(!x)throw new Error("Invalid mortise edge");g=x.thickness(r,m.params),e=x.draw(e,n,r,m.params)}return Uv({length:n,width1:o,width2:l,cornerDistance1:h+(p??0),cornerDistance2:h+(v??0),centerDistance:_},(x,S,R)=>{if(f&&R){const A=r,w=c+g;e=e.subtractBorder(e.newShape().beginPath().rect(x-u/2,w-d,S+u,A+d*2).closePath())}else if(!f&&!R){const A=a*r;e=e.subtractBorder(e.newShape().beginPath().rect(x-u/2,0,S+u,A).closePath())}}),e}}const Do=[new Nv,new Fv,new Ov,new ES];function Ha(t={},e){return kv(Do,t,e)}const nm={" ":0,"!":74240,'"':516,"#":43580,$:43707,"%":61081,"&":37745,"'":512,"(":5120,")":16640,"*":65280,"+":43520,",":16384,"-":34816,".":65536,"/":17408,0:17663,1:1036,2:34935,3:2111,4:34956,5:35003,6:35067,7:15,8:35071,9:35007,":":8704,";":16896,"<":37888,"=":34864,">":18688,"?":75783,"@":2807,A:35023,B:10815,C:243,D:8767,E:33011,F:32963,G:2299,H:35020,I:8755,J:124,K:38080,L:240,M:1484,N:4556,O:255,P:35015,Q:4351,R:39111,S:35003,T:8707,U:252,V:17600,W:20684,X:21760,Y:35004,Z:17459,"[":8722,"\\":4352,"]":8737,"^":20480,_:48,"`":256,"{":41490,"|":8704,"}":10785,"~":52224},TS=(t,e,n,i,r)=>{var s;const o=(s=nm[r.toUpperCase()])!==null&&s!==void 0?s:nm["?"],a=(c,u,d,h)=>{t.moveTo(e[0]+c*n,e[1]+u*i).lineTo(e[0]+d*n,e[1]+h*i)},l=.025;o&1&&a(l,0,.5-l,0),o&2&&a(.5+l,0,1-l,0),o&4&&a(1,l,1,.5-l),o&8&&a(1,.5+l,1,1-l),o&16&&a(1-l,1,.5+l,1),o&32&&a(.5-l,1,l,1),o&64&&a(0,1-l,0,.5+l),o&128&&a(0,.5-l,0,l),o&256&&a(l,l,.5-l,.5-l),o&512&&a(.5,l,.5,.5-l),o&1024&&a(1-l,l,.5+l,.5-l),o&2048&&a(.5+l,.5,1-l,.5),o&4096&&a(.5+l,.5+l,1-l,1-l),o&8192&&(o&65536?a(.5,.5+l,.5,.8-l):a(.5,.5+l,.5,1-l)),o&16384&&a(.5-l,.5+l,l,1-l),o&32768&&a(.5-l,.5,l,.5),o&65536&&a(.5,.8+l,.5,1-l)};function wS(t,e,n,i,r,s){const o=t.split(`
`),a=o.reduce((p,v)=>Math.max(p,v.length),0),l=typeof s=="number"?s:Math.min((i-5)/a*2,(r-5)/o.length),c=l/2,u=e+(i-c*a)/2,d=n+(r-l*o.length)/2,h=qe.shape();for(let p=0;p<o.length;p++){const v=o[p];for(let _=0;_<v.length;_++)TS(h,[u+c*_+c*.15,d+l*p+l*.15],c*.7,l*.7,v.charAt(_))}return h}class Lc extends _a{name(){return"Rectangle"}schema(){return{properties:{label:{type:"string",nullable:!0,metadata:{default:null,defaultNotNull:"",nullHint:"none",title:"Label"}},labelFontSize:{type:"float64",nullable:!0,metadata:{default:null,defaultNotNull:10,nullHint:"auto",title:"Label Font Size (units)"}},thickness:{type:"float64",nullable:!0,metadata:{default:null,defaultNotNull:3,nullHint:"default",title:"Material Thickness (units)"}},kerf:{type:"float64",nullable:!0,metadata:{default:null,defaultNotNull:.1,nullHint:"default",title:"Kerf (units)",description:"Thickness of material removed by cutting tool"}},width:{type:"float64",metadata:{default:100,title:"Inner Width (units)"}},height:{type:"float64",metadata:{default:100,title:"Inner Height (units)"}},edge1:Ha({title:"Top"}),edge2:Ha({title:"Right"}),edge3:Ha({title:"Bottom"}),edge4:Ha({title:"Left"})},metadata:{order:["label","labelFontSize","thickness","kerf","width","height","edge1","edge2","edge3","edge4"]}}}generate(e,{label:n,labelFontSize:i,thickness:r,kerf:s,width:o,height:a,edge1:l,edge2:c,edge3:u,edge4:d}){const h=typeof r=="number"?r:e.defaultThickness,p=typeof s=="number"?s:e.defaultKerf,v=Do.find(U=>U.name()===l.kind);if(!v)throw new Error("Bad top edge");const _=Do.find(U=>U.name()===c.kind);if(!_)throw new Error("Bad right edge");const m=Do.find(U=>U.name()===u.kind);if(!m)throw new Error("Bad bottom edge");const f=Do.find(U=>U.name()===d.kind);if(!f)throw new Error("Bad left edge");const g=v.thickness(h,l.params),x=_.thickness(h,c.params),S=m.thickness(h,u.params),R=f.thickness(h,d.params),A=o+x+R,w=a+g+S,P=qe.shape().beginPath().moveTo(0,0).lineTo(A,0).lineTo(A,w).lineTo(0,w).closePath(),E=qe.shape(),y=n?wS(n,R,g,o,a,i):qe.shape();let b=new Fn(h,p,P,E,y);return b=v.draw(b.setHome([0,0],0),A,h,{...l.params,cornerDistance1Delta:R,cornerDistance2Delta:x}),b=_.draw(b.setHome([A,0],90),w,h,{...c.params,cornerDistance1Delta:g,cornerDistance2Delta:S}),b=m.draw(b.setHome([A,w],180),A,h,{...u.params,cornerDistance1Delta:x,cornerDistance2Delta:R}),b=f.draw(b.setHome([0,w],270),w,h,{...d.params,cornerDistance1Delta:S,cornerDistance2Delta:g}),[b]}}class AS extends _a{name(){return"BoxPlain"}schema(){return{properties:{labels:{type:"boolean",metadata:{default:!1,title:"Labels"}},width:{type:"float64",metadata:{default:100,title:"Inner Width (units)"}},depth:{type:"float64",metadata:{default:100,title:"Inner Depth (units)"}},height:{type:"float64",metadata:{default:100,title:"Inner Height (units)"}},holeDistance:{type:"float64",metadata:{default:3,title:"Hole Distance",description:"Distance of mortises from edge (units)"}},play:{type:"float64",metadata:{default:0,title:"Play",description:"Extra space between fingers (units)"}},thicknessPlay:{type:"float64",metadata:{default:0,title:"Thickness Play",description:"Extra thickness added to mortise holes (units)"}}},metadata:{order:["labels","width","depth","height","holeDistance","play","thicknessPlay"]}}}generate(e,{labels:n,width:i,depth:r,height:s,holeDistance:o,play:a,thicknessPlay:l}){const{defaultThickness:c}=e,u=new Lc,d=v=>({kind:"MortiseAndTenonJoint",params:{invert:v,width1:2*c,tenonLength:1,width2:2*c,holeDistance:o,play:a,thicknessPlay:l,cornerDistance:2*c,centerDistance:0}}),h=()=>({kind:"ButtJoint",params:{invert:!1,length1:0,length2:1}}),p=v=>({kind:"BoxJoint",params:{invert:v,width1:2*c,length1:1,width2:2*c,length2:1,play:a,cornerDistance:2*c,centerDistance:0}});return[...u.generate(e,{width:i,height:r,edge1:d(!1),edge2:d(!1),edge3:d(!1),edge4:d(!1),...n?{label:"Bottom"}:{}}),...u.generate(e,{width:r,height:s,edge1:h(),edge2:p(!1),edge3:d(!0),edge4:p(!1),...n?{label:"Left"}:{}}),...u.generate(e,{width:r,height:s,edge1:h(),edge2:p(!1),edge3:d(!0),edge4:p(!1),...n?{label:"Right"}:{}}),...u.generate(e,{width:i,height:s,edge1:h(),edge2:p(!0),edge3:d(!0),edge4:p(!0),...n?{label:"Front"}:{}}),...u.generate(e,{width:i,height:s,edge1:h(),edge2:p(!0),edge3:d(!0),edge4:p(!0),...n?{label:"Back"}:{}})]}}class CS extends _a{name(){return"BoxNested"}schema(){return{properties:{labels:{type:"boolean",metadata:{default:!1,title:"Labels"}},width:{type:"float64",metadata:{default:100,title:"Inner Width (units)"}},depth:{type:"float64",metadata:{default:100,title:"Inner Depth (units)"}},height:{type:"float64",metadata:{default:100,title:"Inner Height (units)"}},holeDistance:{type:"float64",metadata:{default:3,title:"Hole Distance",description:"Distance of mortises from edge (units)"}},play:{type:"float64",metadata:{default:0,title:"Play",description:"Extra space between fingers (units)"}},thicknessPlay:{type:"float64",metadata:{default:0,title:"Thickness Play",description:"Extra thickness added to mortise holes (units)"}}},metadata:{order:["labels","width","depth","height","holeDistance","play","thicknessPlay"]}}}generate(e,{labels:n,width:i,depth:r,height:s,holeDistance:o,play:a,thicknessPlay:l}){const{defaultThickness:c}=e,u=new Lc,d=(_,m,f)=>({kind:"MortiseAndTenonJoint",params:{invert:_,width1:2*c,tenonLength:m,width2:2*c,holeDistance:o,play:a,thicknessPlay:l,cornerDistance:2*c,centerDistance:0,mortiseEdge:f}}),h=()=>({kind:"ButtJoint",params:{invert:!1,length1:0,length2:1}}),p=(_,m)=>({kind:"BoxJoint",params:{invert:_,width1:2*c,length1:m,width2:2*c,length2:m,play:a,cornerDistance:2*c,centerDistance:0}}),v=()=>({kind:"LegEdge",params:{flatWidth:.1,curveWidth:.15,curveAmount:.05,height:10}});return[...u.generate(e,{width:i,height:r,edge1:d(!1,2),edge2:d(!1,1),edge3:d(!1,2),edge4:d(!1,1),...n?{label:"Bottom"}:{}}),...u.generate(e,{width:r,height:s,edge1:h(),edge2:p(!1,2),edge3:d(!0,1),edge4:p(!1,2),...n?{label:"Left"}:{}}),...u.generate(e,{width:r,height:s,edge1:h(),edge2:p(!1,2),edge3:d(!0,1),edge4:p(!1,2),...n?{label:"Right"}:{}}),...u.generate(e,{width:i,height:s,edge1:h(),edge2:p(!0,1),edge3:d(!0,1),edge4:p(!0,1),...n?{label:"Front"}:{}}),...u.generate(e,{width:i,height:s,edge1:h(),edge2:p(!0,1),edge3:d(!0,1,v()),edge4:p(!0,1),...n?{label:"Inner Front"}:{}}),...u.generate(e,{width:i,height:s,edge1:h(),edge2:p(!0,1),edge3:d(!0,1),edge4:p(!0,1),...n?{label:"Back"}:{}}),...u.generate(e,{width:i,height:s,edge1:h(),edge2:p(!0,1),edge3:d(!0,1,v()),edge4:p(!0,1),...n?{label:"Inner Back"}:{}})]}}class RS extends _a{name(){return"BoxTuck"}schema(){return{properties:{thickness:{type:"float64",nullable:!0,metadata:{default:null,defaultNotNull:3,nullHint:"default",title:"Material Thickness (units)"}},kerf:{type:"float64",nullable:!0,metadata:{default:null,defaultNotNull:.1,nullHint:"default",title:"Kerf (units)",description:"Thickness of material removed by cutting tool"}},width:{type:"float64",metadata:{default:100,title:"Inner Width (units)"}},depth:{type:"float64",metadata:{default:20,title:"Inner Depth (units)"}},height:{type:"float64",metadata:{default:100,title:"Inner Height (units)"}},scorePadding:{type:"float64",metadata:{default:1,title:"Score Padding (units)"}},notchWidth:{type:"float64",metadata:{default:7,title:"Notch Width (units)"}},notchHeight:{type:"float64",metadata:{default:2,title:"Notch Height (units)"}}},metadata:{order:["thickness","kerf","width","depth","height","scorePadding","notchWidth","notchHeight"]}}}generate(e,{thickness:n,kerf:i,width:r,depth:s,height:o,scorePadding:a,notchWidth:l,notchHeight:c}){const u=typeof n=="number"?n:e.defaultThickness,d=typeof i=="number"?i:e.defaultKerf;let h=new Fn(u,d);const p=0,v=0,_=r,m=o,f=p+_,g=0,x=s+u,S=o,R=f+x,A=0,w=r+u,P=o,E=R+w,y=0,b=s+u,U=o,I=s+u;h=h.unionBorder(qe.shape().rect(p,v,_,m).rect(f,g,x,S).rect(R,A,w,P).rect(E,y,b,U).rect(p,v,_,-I).rect(p,v+m,_,I)),h=h.unionBorder(qe.shape().moveTo(0,0).bezierCurveTo(-s*.75,0,-s*.75,0,-s*.75,s*.75).lineTo(-s*.75,o-s*.75).bezierCurveTo(-s*.75,o,-s*.75,o,0,o).closePath()),h=h.unionBorder(qe.shape().moveTo(p,v-I).bezierCurveTo(p,v-I-s*.9,p,v-I-s*.9,p+s*.9,v-I-s*.9).lineTo(p+_-s*.9,v-I-s*.9).bezierCurveTo(p+_,v-I-s*.9,p+_,v-I-s*.9,p+_,v-I).closePath()),h=h.unionBorder(qe.shape().moveTo(p,v+m+I).bezierCurveTo(p,v+m+I+s*.9,p,v+m+I+s*.9,p+s*.9,v+m+I+s*.9).lineTo(p+_-s*.9,v+m+I+s*.9).bezierCurveTo(p+_,v+m+I+s*.9,p+_,v+m+I+s*.9,p+_,v+m+I).closePath()),h=h.unionBorder(qe.shape().rect(f,g,x-u,-s).combine(qe.shape().moveTo(f,g).lineTo(f+x*.05,g-s).lineTo(f,g-s).closePath()).difference().combine(qe.shape().moveTo(f+x-u,g).lineTo(f+x-u-l*.1,g-l).lineTo(f+x-u-l*.2,g-l).lineTo(f+x-u-l*.2-(s-l)*.1,g-s).lineTo(f+x-u,g-s).closePath()).difference()),h=h.unionBorder(qe.shape().rect(f,g+S,x-u,s).combine(qe.shape().moveTo(f,g+S).lineTo(f+s*.05,g+S+s).lineTo(f,g+S+s).closePath()).difference().combine(qe.shape().moveTo(f+x-u,g+S).lineTo(f+x-u-l*.1,g+S+l).lineTo(f+x-u-l*.2,g+S+l).lineTo(f+x-u-l*.2-(s-l)*.1,g+S+s).lineTo(f+x-u,g+S+s).closePath()).difference()),h=h.unionBorder(qe.shape().rect(E+u,y,b-u,-s).combine(qe.shape().moveTo(E+u,y).lineTo(E+u+l*.1,y-l).lineTo(E+u+l*.2,y-l).lineTo(E+u+l*.2+(s-l)*.1,y-s).lineTo(E+u,y-s).closePath()).difference().combine(qe.shape().moveTo(E+b,y).lineTo(E+b-s*.05,y-s).lineTo(E+b,y-s).closePath()).difference()),h=h.unionBorder(qe.shape().rect(E+u,y+U,b-u,s).combine(qe.shape().moveTo(E+u,y+U).lineTo(E+u+l*.1,y+U+l).lineTo(E+u+l*.2,y+U+l).lineTo(E+u+l*.2+(s-l)*.1,y+U+s).lineTo(E+u,y+U+s).closePath()).difference().combine(qe.shape().moveTo(E+b,y+U).lineTo(E+b-s*.05,y+U+s).lineTo(E+b,y+U+s).closePath()).difference());{const z=a;h=h.replace({cuts:qe.shape().moveTo(p,v-I).lineTo(p+l-1,v-I).bezierCurveTo(p+l,v-I,p+l,v-I,p+l,v-I+1).lineTo(p+l,v-I+c).moveTo(p+_,v-I).lineTo(p+_-l+1,v-I).bezierCurveTo(p+_-l,v-I,p+_-l,v-I,p+_-l,v-I+1).lineTo(p+_-l,v-I+c).moveTo(p,v+m+I).lineTo(p+l-1,v+m+I).bezierCurveTo(p+l,v+m+I,p+l,v+m+I,p+l,v+m+I-1).lineTo(p+l,v+m+I-c).moveTo(p+_,v+m+I).lineTo(p+_-l+1,v+m+I).bezierCurveTo(p+_-l,v+m+I,p+_-l,v+m+I,p+_-l,v+m+I-1).lineTo(p+_-l,v+m+I-c),scores:qe.shape().moveTo(p+z,v-u).lineTo(p+_-z,v-u).moveTo(p+_,v+z).lineTo(p+_,v+m-z).moveTo(p,v+z).lineTo(p,v+m-z).moveTo(p+z,v+m+u).lineTo(p+_-z,v+m+u).moveTo(p+z+l,v-I).lineTo(p+_-z-l,v-I).moveTo(p+z+l,v+m+I).lineTo(p+_-z-l,v+m+I).moveTo(f+z,g).lineTo(f+x-u-z,g).moveTo(f+z,g+S).lineTo(f+x-u-z,g+S).moveTo(f+x,g+z).lineTo(f+x,g+S-z).moveTo(E+u+z,y).lineTo(E+b-z,y).moveTo(E+u+z,y+U).lineTo(E+b-z,y+U).moveTo(E,y+z).lineTo(E,y+U-z)})}return[Fn.union(h,h)]}}class bS extends _a{name(){return"KerfTester"}schema(){return{properties:{labels:{type:"boolean",metadata:{default:!0,title:"Labels"}},width:{type:"float64",metadata:{default:30,title:"Outer Width (units)"}},height:{type:"float64",metadata:{default:15,title:"Outer Height (units)"}},play:{type:"float64",metadata:{default:0,title:"Play",description:"Extra space between fingers (units)"}},testCount:{type:"int32",metadata:{default:8,title:"Number of tests"}},kerfStart:{type:"float64",metadata:{default:.08,title:"Kerf start value (units)"}},kerfIncrement:{type:"float64",metadata:{default:.02,title:"Kerf increment value (per test)"}}},metadata:{order:["labels","width","height","play","testCount","kerfStart","kerfIncrement"]}}}generate(e,{labels:n,width:i,height:r,play:s,testCount:o,kerfStart:a,kerfIncrement:l}){const{defaultThickness:c}=e,u=new Lc,d=()=>({kind:"ButtJoint",params:{invert:!1,length1:0,length2:1}}),h=v=>({kind:"BoxJoint",params:{invert:v,width1:2*c,length1:1,width2:2*c,length2:1,play:s,cornerDistance:2*c,centerDistance:0}}),p=[];for(let v=0;v<o;v++){const _=a+v*l;p.push(...u.generate(e,{width:i,height:r,kerf:_,edge1:h(!1),edge2:d(),edge3:d(),edge4:d(),...n?{label:_.toFixed(3)}:{}}),...u.generate(e,{width:i,height:r,kerf:_,edge1:d(),edge2:d(),edge3:h(!0),edge4:d(),...n?{label:_.toFixed(3)}:{}}))}return p}}const pu=[new CS,new AS,new RS,new bS,new Lc],Va={properties:{defaultThickness:{type:"float64",metadata:{default:3,title:"Default Material Thickness (units)"}},defaultKerf:{type:"float64",metadata:{default:.1,title:"Default Kerf (units)",description:"Thickness of material removed by cutting tool"}},units:{enum:["mm","in"],metadata:{default:"mm",title:"Units"}},fileFormat:{enum:["svg"],metadata:{default:"svg",title:"File Format"}},debug:{type:"boolean",metadata:{default:!1,title:"Debug"}}},metadata:{title:"Settings",order:["defaultThickness","defaultKerf","units","fileFormat","debug"],startHidden:!0}},Bv=new Set,on=new WeakMap,Ys=new WeakMap,Nr=new WeakMap,Bf=new WeakMap,PS=new WeakMap,$s=new WeakMap,sc=new WeakMap,Io=new WeakSet;let nr,mh=0,gh=0;const mi="__aa_tgt",ua="__aa_del",oc="__aa_new",LS=t=>{const e=OS(t);e&&e.forEach(n=>kS(n))},DS=t=>{t.forEach(e=>{e.target===nr&&NS(),on.has(e.target)&&zr(e.target)})};function IS(t){const e=Bf.get(t);e==null||e.disconnect();let n=on.get(t),i=0;const r=5;n||(n=qs(t),on.set(t,n));const{offsetWidth:s,offsetHeight:o}=nr,l=[n.top-r,s-(n.left+r+n.width),o-(n.top+r+n.height),n.left-r].map(u=>`${-1*Math.floor(u)}px`).join(" "),c=new IntersectionObserver(()=>{++i>1&&zr(t)},{root:nr,threshold:1,rootMargin:l});c.observe(t),Bf.set(t,c)}function zr(t){clearTimeout(sc.get(t));const e=Dc(t),n=fa(e)?500:e.duration;sc.set(t,setTimeout(async()=>{const i=Nr.get(t);try{await(i==null?void 0:i.finished),on.set(t,qs(t)),IS(t)}catch{}},n))}function NS(){clearTimeout(sc.get(nr)),sc.set(nr,setTimeout(()=>{Bv.forEach(t=>Gv(t,e=>zv(()=>zr(e))))},100))}function US(t){setTimeout(()=>{PS.set(t,setInterval(()=>zv(zr.bind(null,t)),2e3))},Math.round(2e3*Math.random()))}function zv(t){typeof requestIdleCallback=="function"?requestIdleCallback(()=>t()):requestAnimationFrame(()=>t())}let zf,ws;const FS=typeof window<"u"&&"ResizeObserver"in window;FS&&(nr=document.documentElement,zf=new MutationObserver(LS),ws=new ResizeObserver(DS),window.addEventListener("scroll",()=>{gh=window.scrollY,mh=window.scrollX}),ws.observe(nr));function OS(t){return t.reduce((i,r)=>[...i,...Array.from(r.addedNodes),...Array.from(r.removedNodes)],[]).every(i=>i.nodeName==="#comment")?!1:t.reduce((i,r)=>{if(i===!1)return!1;if(r.target instanceof Element){if(mu(r.target),!i.has(r.target)){i.add(r.target);for(let s=0;s<r.target.children.length;s++){const o=r.target.children.item(s);if(o){if(ua in o)return!1;mu(r.target,o),i.add(o)}}}if(r.removedNodes.length)for(let s=0;s<r.removedNodes.length;s++){const o=r.removedNodes[s];if(ua in o)return!1;o instanceof Element&&(i.add(o),mu(r.target,o),Ys.set(o,[r.previousSibling,r.nextSibling]))}}return i},new Set)}function mu(t,e){!e&&!(mi in t)?Object.defineProperty(t,mi,{value:t}):e&&!(mi in e)&&Object.defineProperty(e,mi,{value:t})}function kS(t){var e;const n=t.isConnected,i=on.has(t);n&&Ys.has(t)&&Ys.delete(t),Nr.has(t)&&((e=Nr.get(t))===null||e===void 0||e.cancel()),oc in t?im(t):i&&n?zS(t):i&&!n?HS(t):im(t)}function Yn(t){return Number(t.replace(/[^0-9.\-]/g,""))}function BS(t){let e=t.parentElement;for(;e;){if(e.scrollLeft||e.scrollTop)return{x:e.scrollLeft,y:e.scrollTop};e=e.parentElement}return{x:0,y:0}}function qs(t){const e=t.getBoundingClientRect(),{x:n,y:i}=BS(t);return{top:e.top+i,left:e.left+n,width:e.width,height:e.height}}function Hv(t,e,n){let i=e.width,r=e.height,s=n.width,o=n.height;const a=getComputedStyle(t);if(a.getPropertyValue("box-sizing")==="content-box"){const c=Yn(a.paddingTop)+Yn(a.paddingBottom)+Yn(a.borderTopWidth)+Yn(a.borderBottomWidth),u=Yn(a.paddingLeft)+Yn(a.paddingRight)+Yn(a.borderRightWidth)+Yn(a.borderLeftWidth);i-=u,s-=u,r-=c,o-=c}return[i,s,r,o].map(Math.round)}function Dc(t){return mi in t&&$s.has(t[mi])?$s.get(t[mi]):{duration:250,easing:"ease-in-out"}}function Vv(t){if(mi in t)return t[mi]}function vh(t){const e=Vv(t);return e?Io.has(e):!1}function Gv(t,...e){e.forEach(n=>n(t,$s.has(t)));for(let n=0;n<t.children.length;n++){const i=t.children.item(n);i&&e.forEach(r=>r(i,$s.has(i)))}}function _h(t){return Array.isArray(t)?t:[t]}function fa(t){return typeof t=="function"}function zS(t){const e=on.get(t),n=qs(t);if(!vh(t))return on.set(t,n);let i;if(!e)return;const r=Dc(t);if(typeof r!="function"){const s=e.left-n.left,o=e.top-n.top,[a,l,c,u]=Hv(t,e,n),d={transform:`translate(${s}px, ${o}px)`},h={transform:"translate(0, 0)"};a!==l&&(d.width=`${a}px`,h.width=`${l}px`),c!==u&&(d.height=`${c}px`,h.height=`${u}px`),i=t.animate([d,h],{duration:r.duration,easing:r.easing})}else{const[s]=_h(r(t,"remain",e,n));i=new Animation(s),i.play()}Nr.set(t,i),on.set(t,n),i.addEventListener("finish",zr.bind(null,t))}function im(t){oc in t&&delete t[oc];const e=qs(t);on.set(t,e);const n=Dc(t);if(!vh(t))return;let i;if(typeof n!="function")i=t.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:n.duration*1.5,easing:"ease-in"});else{const[r]=_h(n(t,"add",e));i=new Animation(r),i.play()}Nr.set(t,i),i.addEventListener("finish",zr.bind(null,t))}function rm(t,e){var n;t.remove(),on.delete(t),Ys.delete(t),Nr.delete(t),(n=Bf.get(t))===null||n===void 0||n.disconnect(),setTimeout(()=>{if(ua in t&&delete t[ua],Object.defineProperty(t,oc,{value:!0,configurable:!0}),e&&t instanceof HTMLElement)for(const i in e)t.style[i]=""},0)}function HS(t){var e;if(!Ys.has(t)||!on.has(t))return;const[n,i]=Ys.get(t);Object.defineProperty(t,ua,{value:!0,configurable:!0});const r=window.scrollX,s=window.scrollY;if(i&&i.parentNode&&i.parentNode instanceof Element?i.parentNode.insertBefore(t,i):n&&n.parentNode?n.parentNode.appendChild(t):(e=Vv(t))===null||e===void 0||e.appendChild(t),!vh(t))return rm(t);const[o,a,l,c]=GS(t),u=Dc(t),d=on.get(t);(r!==mh||s!==gh)&&VS(t,r,s,u);let h,p={position:"absolute",top:`${o}px`,left:`${a}px`,width:`${l}px`,height:`${c}px`,margin:"0",pointerEvents:"none",transformOrigin:"center",zIndex:"100"};if(!fa(u))Object.assign(t.style,p),h=t.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:u.duration,easing:"ease-out"});else{const[v,_]=_h(u(t,"remove",d));(_==null?void 0:_.styleReset)!==!1&&(p=(_==null?void 0:_.styleReset)||p,Object.assign(t.style,p)),h=new Animation(v),h.play()}Nr.set(t,h),h.addEventListener("finish",rm.bind(null,t,p))}function VS(t,e,n,i){const r=mh-e,s=gh-n,o=document.documentElement.style.scrollBehavior;if(getComputedStyle(nr).scrollBehavior==="smooth"&&(document.documentElement.style.scrollBehavior="auto"),window.scrollTo(window.scrollX+r,window.scrollY+s),!t.parentElement)return;const l=t.parentElement;let c=l.clientHeight,u=l.clientWidth;const d=performance.now();function h(){requestAnimationFrame(()=>{if(!fa(i)){const p=c-l.clientHeight,v=u-l.clientWidth;d+i.duration>performance.now()?(window.scrollTo({left:window.scrollX-v,top:window.scrollY-p}),c=l.clientHeight,u=l.clientWidth,h()):document.documentElement.style.scrollBehavior=o}})}h()}function GS(t){const e=on.get(t),[n,,i]=Hv(t,e,qs(t));let r=t.parentElement;for(;r&&(getComputedStyle(r).position==="static"||r instanceof HTMLBodyElement);)r=r.parentElement;r||(r=document.body);const s=getComputedStyle(r),o=on.get(r)||qs(r),a=Math.round(e.top-o.top)-Yn(s.borderTopWidth),l=Math.round(e.left-o.left)-Yn(s.borderLeftWidth);return[a,l,n,i]}function WS(t,e={}){return zf&&ws&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!fa(e)&&!e.disrespectUserMotionPreference||(Io.add(t),getComputedStyle(t).position==="static"&&Object.assign(t.style,{position:"relative"}),Gv(t,zr,US,r=>ws==null?void 0:ws.observe(r)),fa(e)?$s.set(t,e):$s.set(t,{duration:250,easing:"ease-in-out",...e}),zf.observe(t,{childList:!0}),Bv.add(t))),Object.freeze({parent:t,enable:()=>{Io.add(t)},disable:()=>{Io.delete(t)},isEnabled:()=>Io.has(t)})}function XS(t){const[e,n]=ge.useState(),i=ge.useMemo(()=>t,[]),r=ge.useCallback(o=>{o instanceof HTMLElement?n(WS(o,i)):n(void 0)},[i]),s=ge.useCallback(o=>{e&&(o?e.enable():e.disable())},[e]);return[r,s]}function jS({className:t,children:e}){const[n]=XS();return q.jsx("div",{className:t,ref:n,children:e})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xh="167",Xr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},jr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},YS=0,sm=1,$S=2,Wv=1,qS=2,ui=3,ir=0,an=1,Zn=2,Qi=0,Ns=1,om=2,am=3,lm=4,KS=5,xr=100,ZS=101,QS=102,JS=103,eM=104,tM=200,nM=201,iM=202,rM=203,Hf=204,Vf=205,sM=206,oM=207,aM=208,lM=209,cM=210,uM=211,fM=212,dM=213,hM=214,pM=0,mM=1,gM=2,ac=3,vM=4,_M=5,xM=6,yM=7,yh=0,SM=1,MM=2,Ji=0,EM=1,TM=2,wM=3,AM=4,CM=5,RM=6,bM=7,Xv=300,Ks=301,Zs=302,Gf=303,Wf=304,Ic=306,Xf=1e3,Tr=1001,jf=1002,wn=1003,PM=1004,Ga=1005,kn=1006,gu=1007,wr=1008,Ei=1009,jv=1010,Yv=1011,da=1012,Sh=1013,Ur=1014,gi=1015,xa=1016,Mh=1017,Eh=1018,Qs=1020,$v=35902,qv=1021,Kv=1022,Bn=1023,Zv=1024,Qv=1025,Us=1026,Js=1027,Jv=1028,Th=1029,e_=1030,wh=1031,Ah=1033,Cl=33776,Rl=33777,bl=33778,Pl=33779,Yf=35840,$f=35841,qf=35842,Kf=35843,Zf=36196,Qf=37492,Jf=37496,ed=37808,td=37809,nd=37810,id=37811,rd=37812,sd=37813,od=37814,ad=37815,ld=37816,cd=37817,ud=37818,fd=37819,dd=37820,hd=37821,Ll=36492,pd=36494,md=36495,t_=36283,gd=36284,vd=36285,_d=36286,LM=3200,DM=3201,n_=0,IM=1,Hi="",$n="srgb",lr="srgb-linear",Ch="display-p3",Nc="display-p3-linear",lc="linear",rt="srgb",cc="rec709",uc="p3",Yr=7680,cm=519,NM=512,UM=513,FM=514,i_=515,OM=516,kM=517,BM=518,zM=519,um=35044,fm="300 es",vi=2e3,fc=2001;class Hr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dm=1234567;const Wo=Math.PI/180,eo=180/Math.PI;function so(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[t&255]+Gt[t>>8&255]+Gt[t>>16&255]+Gt[t>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[n&63|128]+Gt[n>>8&255]+"-"+Gt[n>>16&255]+Gt[n>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function jt(t,e,n){return Math.max(e,Math.min(n,t))}function Rh(t,e){return(t%e+e)%e}function HM(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function VM(t,e,n){return t!==e?(n-t)/(e-t):0}function Xo(t,e,n){return(1-n)*t+n*e}function GM(t,e,n,i){return Xo(t,e,1-Math.exp(-n*i))}function WM(t,e=1){return e-Math.abs(Rh(t,e*2)-e)}function XM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function jM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function YM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function $M(t,e){return t+Math.random()*(e-t)}function qM(t){return t*(.5-Math.random())}function KM(t){t!==void 0&&(dm=t);let e=dm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ZM(t){return t*Wo}function QM(t){return t*eo}function JM(t){return(t&t-1)===0&&t!==0}function e1(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function t1(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function n1(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*d,l*h,a*c);break;case"YZY":t.set(l*h,a*u,l*d,a*c);break;case"ZXZ":t.set(l*d,l*h,a*u,a*c);break;case"XZX":t.set(a*u,l*v,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*v,a*c);break;case"ZYZ":t.set(l*v,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ds(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function $t(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const i1={DEG2RAD:Wo,RAD2DEG:eo,generateUUID:so,clamp:jt,euclideanModulo:Rh,mapLinear:HM,inverseLerp:VM,lerp:Xo,damp:GM,pingpong:WM,smoothstep:XM,smootherstep:jM,randInt:YM,randFloat:$M,randFloatSpread:qM,seededRandom:KM,degToRad:ZM,radToDeg:QM,isPowerOfTwo:JM,ceilPowerOfTwo:e1,floorPowerOfTwo:t1,setQuaternionFromProperEuler:n1,normalize:$t,denormalize:ds};class Ne{constructor(e=0,n=0){Ne.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,n,i,r,s,o,a,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],v=i[8],_=r[0],m=r[3],f=r[6],g=r[1],x=r[4],S=r[7],R=r[2],A=r[5],w=r[8];return s[0]=o*_+a*g+l*R,s[3]=o*m+a*x+l*A,s[6]=o*f+a*S+l*w,s[1]=c*_+u*g+d*R,s[4]=c*m+u*x+d*A,s[7]=c*f+u*S+d*w,s[2]=h*_+p*g+v*R,s[5]=h*m+p*x+v*A,s[8]=h*f+p*S+v*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,p=c*s-o*l,v=n*d+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=p*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(vu.makeScale(e,n)),this}rotate(e){return this.premultiply(vu.makeRotation(-e)),this}translate(e,n){return this.premultiply(vu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vu=new Be;function r_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function dc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function r1(){const t=dc("canvas");return t.style.display="block",t}const hm={};function jo(t){t in hm||(hm[t]=!0,console.warn(t))}function s1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const pm=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),mm=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Mo={[lr]:{transfer:lc,primaries:cc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[$n]:{transfer:rt,primaries:cc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Nc]:{transfer:lc,primaries:uc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(mm),fromReference:t=>t.applyMatrix3(pm)},[Ch]:{transfer:rt,primaries:uc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(mm),fromReference:t=>t.applyMatrix3(pm).convertLinearToSRGB()}},o1=new Set([lr,Nc]),Je={enabled:!0,_workingColorSpace:lr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!o1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Mo[e].toReference,r=Mo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Mo[t].primaries},getTransfer:function(t){return t===Hi?lc:Mo[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Mo[e].luminanceCoefficients)}};function Fs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function _u(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let $r;class a1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$r===void 0&&($r=dc("canvas")),$r.width=e.width,$r.height=e.height;const i=$r.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=$r}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=dc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Fs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Fs(n[i]/255)*255):n[i]=Fs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let l1=0;class s_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:l1++}),this.uuid=so(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(xu(r[o].image)):s.push(xu(r[o]))}else s=xu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function xu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?a1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let c1=0;class ln extends Hr{constructor(e=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=Tr,r=Tr,s=kn,o=wr,a=Bn,l=Ei,c=ln.DEFAULT_ANISOTROPY,u=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=so(),this.name="",this.source=new s_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xf:e.x=e.x-Math.floor(e.x);break;case Tr:e.x=e.x<0?0:1;break;case jf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xf:e.y=e.y-Math.floor(e.y);break;case Tr:e.y=e.y<0?0:1;break;case jf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Xv;ln.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,n=0,i=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],v=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,S=(p+1)/2,R=(f+1)/2,A=(u+h)/4,w=(d+_)/4,P=(v+m)/4;return x>S&&x>R?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=w/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=P/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=w/s,r=P/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-v)*(m-v)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(d-_)/g,this.z=(h-u)/g,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class u1 extends Hr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Rt(0,0,e,n),this.scissorTest=!1,this.viewport=new Rt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new ln(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new s_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fr extends u1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class o_ extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class f1 extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Or{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],v=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=v,e[n+3]=_;return}if(d!==_||l!==h||c!==p||u!==v){let m=1-a;const f=l*h+c*p+u*v+d*_,g=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const R=Math.sqrt(x),A=Math.atan2(R,f*g);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const S=a*g;if(l=l*m+h*S,c=c*m+p*S,u=u*m+v*S,d=d*m+_*S,m===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=R,c*=R,u*=R,d*=R}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],h=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+u*d+l*p-c*h,e[n+1]=l*v+u*h+c*d-a*p,e[n+2]=c*v+u*p+a*h-l*d,e[n+3]=u*v-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"YXZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"ZXY":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"ZYX":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"YZX":this._x=h*u*d+c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d-h*p*v;break;case"XZY":this._x=h*u*d-c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(gm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(gm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return yu.copy(this).projectOnVector(e),this.sub(yu)}reflect(e){return this.sub(yu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yu=new k,gm=new Or;class ya{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ln.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ln.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ln.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ln):Ln.fromBufferAttribute(s,o),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wa.copy(i.boundingBox)),Wa.applyMatrix4(e.matrixWorld),this.union(Wa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Eo),Xa.subVectors(this.max,Eo),qr.subVectors(e.a,Eo),Kr.subVectors(e.b,Eo),Zr.subVectors(e.c,Eo),Pi.subVectors(Kr,qr),Li.subVectors(Zr,Kr),ur.subVectors(qr,Zr);let n=[0,-Pi.z,Pi.y,0,-Li.z,Li.y,0,-ur.z,ur.y,Pi.z,0,-Pi.x,Li.z,0,-Li.x,ur.z,0,-ur.x,-Pi.y,Pi.x,0,-Li.y,Li.x,0,-ur.y,ur.x,0];return!Su(n,qr,Kr,Zr,Xa)||(n=[1,0,0,0,1,0,0,0,1],!Su(n,qr,Kr,Zr,Xa))?!1:(ja.crossVectors(Pi,Li),n=[ja.x,ja.y,ja.z],Su(n,qr,Kr,Zr,Xa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new k,new k,new k,new k,new k,new k,new k,new k],Ln=new k,Wa=new ya,qr=new k,Kr=new k,Zr=new k,Pi=new k,Li=new k,ur=new k,Eo=new k,Xa=new k,ja=new k,fr=new k;function Su(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){fr.fromArray(t,s);const a=r.x*Math.abs(fr.x)+r.y*Math.abs(fr.y)+r.z*Math.abs(fr.z),l=e.dot(fr),c=n.dot(fr),u=i.dot(fr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const d1=new ya,To=new k,Mu=new k;class Uc{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):d1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;To.subVectors(e,this.center);const n=To.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(To,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(To.copy(e.center).add(Mu)),this.expandByPoint(To.copy(e.center).sub(Mu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oi=new k,Eu=new k,Ya=new k,Di=new k,Tu=new k,$a=new k,wu=new k;class bh{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=oi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,n),oi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Eu.copy(e).add(n).multiplyScalar(.5),Ya.copy(n).sub(e).normalize(),Di.copy(this.origin).sub(Eu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ya),a=Di.dot(this.direction),l=-Di.dot(Ya),c=Di.lengthSq(),u=Math.abs(1-o*o);let d,h,p,v;if(u>0)if(d=o*l-a,h=o*a-l,v=s*u,d>=0)if(h>=-v)if(h<=v){const _=1/u;d*=_,h*=_,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-v?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=v?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Eu).addScaledVector(Ya,h),p}intersectSphere(e,n){oi.subVectors(e.center,this.origin);const i=oi.dot(this.direction),r=oi.dot(oi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,n,i,r,s){Tu.subVectors(n,e),$a.subVectors(i,e),wu.crossVectors(Tu,$a);let o=this.direction.dot(wu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Di.subVectors(this.origin,e);const l=a*this.direction.dot($a.crossVectors(Di,$a));if(l<0)return null;const c=a*this.direction.dot(Tu.cross(Di));if(c<0||l+c>o)return null;const u=-a*Di.dot(wu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,n,i,r,s,o,a,l,c,u,d,h,p,v,_,m){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,h,p,v,_,m)}set(e,n,i,r,s,o,a,l,c,u,d,h,p,v,_,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=v,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Qr.setFromMatrixColumn(e,0).length(),s=1/Qr.setFromMatrixColumn(e,1).length(),o=1/Qr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*d,v=a*u,_=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+v*c,n[5]=h-_*c,n[9]=-a*l,n[2]=_-h*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,v=c*u,_=c*d;n[0]=h+_*a,n[4]=v*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-v,n[6]=_+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,v=c*u,_=c*d;n[0]=h-_*a,n[4]=-o*d,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*u,n[9]=_-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*d,v=a*u,_=a*d;n[0]=l*u,n[4]=v*c-p,n[8]=h*c+_,n[1]=l*d,n[5]=_*c+h,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,v=a*l,_=a*c;n[0]=l*u,n[4]=_-h*d,n[8]=v*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+v,n[10]=h-_*d}else if(e.order==="XZY"){const h=o*l,p=o*c,v=a*l,_=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+_,n[5]=o*u,n[9]=p*d-v,n[2]=v*d-p,n[6]=a*u,n[10]=_*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(h1,e,p1)}lookAt(e,n,i){const r=this.elements;return fn.subVectors(e,n),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Ii.crossVectors(i,fn),Ii.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Ii.crossVectors(i,fn)),Ii.normalize(),qa.crossVectors(fn,Ii),r[0]=Ii.x,r[4]=qa.x,r[8]=fn.x,r[1]=Ii.y,r[5]=qa.y,r[9]=fn.y,r[2]=Ii.z,r[6]=qa.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],v=i[2],_=i[6],m=i[10],f=i[14],g=i[3],x=i[7],S=i[11],R=i[15],A=r[0],w=r[4],P=r[8],E=r[12],y=r[1],b=r[5],U=r[9],I=r[13],z=r[2],$=r[6],G=r[10],Z=r[14],N=r[3],Y=r[7],Q=r[11],oe=r[15];return s[0]=o*A+a*y+l*z+c*N,s[4]=o*w+a*b+l*$+c*Y,s[8]=o*P+a*U+l*G+c*Q,s[12]=o*E+a*I+l*Z+c*oe,s[1]=u*A+d*y+h*z+p*N,s[5]=u*w+d*b+h*$+p*Y,s[9]=u*P+d*U+h*G+p*Q,s[13]=u*E+d*I+h*Z+p*oe,s[2]=v*A+_*y+m*z+f*N,s[6]=v*w+_*b+m*$+f*Y,s[10]=v*P+_*U+m*G+f*Q,s[14]=v*E+_*I+m*Z+f*oe,s[3]=g*A+x*y+S*z+R*N,s[7]=g*w+x*b+S*$+R*Y,s[11]=g*P+x*U+S*G+R*Q,s[15]=g*E+x*I+S*Z+R*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],v=e[3],_=e[7],m=e[11],f=e[15];return v*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*p-i*l*p)+_*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+f*(-r*a*u-n*l*d+n*a*h+r*o*d-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],v=e[12],_=e[13],m=e[14],f=e[15],g=d*m*c-_*h*c+_*l*p-a*m*p-d*l*f+a*h*f,x=v*h*c-u*m*c-v*l*p+o*m*p+u*l*f-o*h*f,S=u*_*c-v*d*c+v*a*p-o*_*p-u*a*f+o*d*f,R=v*d*l-u*_*l-v*a*h+o*_*h+u*a*m-o*d*m,A=n*g+i*x+r*S+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=g*w,e[1]=(_*h*s-d*m*s-_*r*p+i*m*p+d*r*f-i*h*f)*w,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*f+i*l*f)*w,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*p-i*l*p)*w,e[4]=x*w,e[5]=(u*m*s-v*h*s+v*r*p-n*m*p-u*r*f+n*h*f)*w,e[6]=(v*l*s-o*m*s-v*r*c+n*m*c+o*r*f-n*l*f)*w,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*p+n*l*p)*w,e[8]=S*w,e[9]=(v*d*s-u*_*s-v*i*p+n*_*p+u*i*f-n*d*f)*w,e[10]=(o*_*s-v*a*s+v*i*c-n*_*c-o*i*f+n*a*f)*w,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*p-n*a*p)*w,e[12]=R*w,e[13]=(u*_*r-v*d*r+v*i*h-n*_*h-u*i*m+n*d*m)*w,e[14]=(v*a*r-o*_*r-v*i*l+n*_*l+o*i*m-n*a*m)*w,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*h+n*a*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,h=s*c,p=s*u,v=s*d,_=o*u,m=o*d,f=a*d,g=l*c,x=l*u,S=l*d,R=i.x,A=i.y,w=i.z;return r[0]=(1-(_+f))*R,r[1]=(p+S)*R,r[2]=(v-x)*R,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(h+f))*A,r[6]=(m+g)*A,r[7]=0,r[8]=(v+x)*w,r[9]=(m-g)*w,r[10]=(1-(h+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Qr.set(r[0],r[1],r[2]).length();const o=Qr.set(r[4],r[5],r[6]).length(),a=Qr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Dn.copy(this);const c=1/s,u=1/o,d=1/a;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=u,Dn.elements[5]*=u,Dn.elements[6]*=u,Dn.elements[8]*=d,Dn.elements[9]*=d,Dn.elements[10]*=d,n.setFromRotationMatrix(Dn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=vi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,v;if(a===vi)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===fc)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=vi){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),h=(n+e)*c,p=(i+r)*u;let v,_;if(a===vi)v=(o+s)*d,_=-2*d;else if(a===fc)v=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Qr=new k,Dn=new gt,h1=new k(0,0,0),p1=new k(1,1,1),Ii=new k,qa=new k,fn=new k,vm=new gt,_m=new Or;class ii{constructor(e=0,n=0,i=0,r=ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return vm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return _m.setFromEuler(this),this.setFromQuaternion(_m,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ii.DEFAULT_ORDER="XYZ";class a_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let m1=0;const xm=new k,Jr=new Or,ai=new gt,Ka=new k,wo=new k,g1=new k,v1=new Or,ym=new k(1,0,0),Sm=new k(0,1,0),Mm=new k(0,0,1),Em={type:"added"},_1={type:"removed"},es={type:"childadded",child:null},Au={type:"childremoved",child:null};class Pt extends Hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:m1++}),this.uuid=so(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new k,n=new ii,i=new Or,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new Be}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new a_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Jr.setFromAxisAngle(e,n),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(e,n){return Jr.setFromAxisAngle(e,n),this.quaternion.premultiply(Jr),this}rotateX(e){return this.rotateOnAxis(ym,e)}rotateY(e){return this.rotateOnAxis(Sm,e)}rotateZ(e){return this.rotateOnAxis(Mm,e)}translateOnAxis(e,n){return xm.copy(e).applyQuaternion(this.quaternion),this.position.add(xm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ym,e)}translateY(e){return this.translateOnAxis(Sm,e)}translateZ(e){return this.translateOnAxis(Mm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ka.copy(e):Ka.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(wo,Ka,this.up):ai.lookAt(Ka,wo,this.up),this.quaternion.setFromRotationMatrix(ai),r&&(ai.extractRotation(r.matrixWorld),Jr.setFromRotationMatrix(ai),this.quaternion.premultiply(Jr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Em),es.child=e,this.dispatchEvent(es),es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(_1),Au.child=e,this.dispatchEvent(Au),Au.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Em),es.child=e,this.dispatchEvent(es),es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,e,g1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,v1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Pt.DEFAULT_UP=new k(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new k,li=new k,Cu=new k,ci=new k,ts=new k,ns=new k,Tm=new k,Ru=new k,bu=new k,Pu=new k;class Qn{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),In.subVectors(e,n),r.cross(In);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){In.subVectors(r,n),li.subVectors(i,n),Cu.subVectors(e,n);const o=In.dot(In),a=In.dot(li),l=In.dot(Cu),c=li.dot(li),u=li.dot(Cu),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-a*u)*h,v=(o*u-a*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ci.x),l.addScaledVector(o,ci.y),l.addScaledVector(a,ci.z),l)}static isFrontFacing(e,n,i,r){return In.subVectors(i,n),li.subVectors(e,n),In.cross(li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),li.subVectors(this.a,this.b),In.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Qn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ts.subVectors(r,i),ns.subVectors(s,i),Ru.subVectors(e,i);const l=ts.dot(Ru),c=ns.dot(Ru);if(l<=0&&c<=0)return n.copy(i);bu.subVectors(e,r);const u=ts.dot(bu),d=ns.dot(bu);if(u>=0&&d<=u)return n.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(ts,o);Pu.subVectors(e,s);const p=ts.dot(Pu),v=ns.dot(Pu);if(v>=0&&p<=v)return n.copy(s);const _=p*c-l*v;if(_<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(ns,a);const m=u*v-p*d;if(m<=0&&d-u>=0&&p-v>=0)return Tm.subVectors(s,r),a=(d-u)/(d-u+(p-v)),n.copy(r).addScaledVector(Tm,a);const f=1/(m+_+h);return o=_*f,a=h*f,n.copy(i).addScaledVector(ts,o).addScaledVector(ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const l_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Za={h:0,s:0,l:0};function Lu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ve{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=Rh(e,1),n=jt(n,0,1),i=jt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Lu(o,s,e+1/3),this.g=Lu(o,s,e),this.b=Lu(o,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=$n){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=$n){const i=l_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}copyLinearToSRGB(e){return this.r=_u(e.r),this.g=_u(e.g),this.b=_u(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return Je.fromWorkingColorSpace(Wt.copy(this),e),Math.round(jt(Wt.r*255,0,255))*65536+Math.round(jt(Wt.g*255,0,255))*256+Math.round(jt(Wt.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(Wt.copy(this),n);const i=Wt.r,r=Wt.g,s=Wt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(Wt.copy(this),n),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=$n){Je.fromWorkingColorSpace(Wt.copy(this),e);const n=Wt.r,i=Wt.g,r=Wt.b;return e!==$n?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+n,Ni.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ni),e.getHSL(Za);const i=Xo(Ni.h,Za.h,n),r=Xo(Ni.s,Za.s,n),s=Xo(Ni.l,Za.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new Ve;Ve.NAMES=l_;let x1=0;class oo extends Hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:x1++}),this.uuid=so(),this.name="",this.type="Material",this.blending=Ns,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hf,this.blendDst=Vf,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=ac,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(i.blending=this.blending),this.side!==ir&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hf&&(i.blendSrc=this.blendSrc),this.blendDst!==Vf&&(i.blendDst=this.blendDst),this.blendEquation!==xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ac&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class c_ extends oo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new k,Qa=new Ne;class ni{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=um,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return jo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Qa.fromBufferAttribute(this,n),Qa.applyMatrix3(e),this.setXY(n,Qa.x,Qa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ds(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=$t(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ds(n,this.array)),n}setX(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ds(n,this.array)),n}setY(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ds(n,this.array)),n}setZ(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ds(n,this.array)),n}setW(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==um&&(e.usage=this.usage),e}}class u_ extends ni{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class f_ extends ni{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Vn extends ni{constructor(e,n,i){super(new Float32Array(e),n,i)}}let y1=0;const Sn=new gt,Du=new Pt,is=new k,dn=new ya,Ao=new ya,It=new k;class wi extends Hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:y1++}),this.uuid=so(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(r_(e)?f_:u_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,n,i){return Sn.makeTranslation(e,n,i),this.applyMatrix4(Sn),this}scale(e,n,i){return Sn.makeScale(e,n,i),this.applyMatrix4(Sn),this}lookAt(e){return Du.lookAt(e),Du.updateMatrix(),this.applyMatrix4(Du.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Vn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ya);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ao.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(dn.min,Ao.min),dn.expandByPoint(It),It.addVectors(dn.max,Ao.max),dn.expandByPoint(It)):(dn.expandByPoint(Ao.min),dn.expandByPoint(Ao.max))}dn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)It.fromBufferAttribute(a,c),l&&(is.fromBufferAttribute(e,c),It.add(is)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ni(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new k,l[P]=new k;const c=new k,u=new k,d=new k,h=new Ne,p=new Ne,v=new Ne,_=new k,m=new k;function f(P,E,y){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,y),h.fromBufferAttribute(s,P),p.fromBufferAttribute(s,E),v.fromBufferAttribute(s,y),u.sub(c),d.sub(c),p.sub(h),v.sub(h);const b=1/(p.x*v.y-v.x*p.y);isFinite(b)&&(_.copy(u).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(b),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(b),a[P].add(_),a[E].add(_),a[y].add(_),l[P].add(m),l[E].add(m),l[y].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let P=0,E=g.length;P<E;++P){const y=g[P],b=y.start,U=y.count;for(let I=b,z=b+U;I<z;I+=3)f(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const x=new k,S=new k,R=new k,A=new k;function w(P){R.fromBufferAttribute(r,P),A.copy(R);const E=a[P];x.copy(E),x.sub(R.multiplyScalar(R.dot(E))).normalize(),S.crossVectors(A,E);const b=S.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,b)}for(let P=0,E=g.length;P<E;++P){const y=g[P],b=y.start,U=y.count;for(let I=b,z=b+U;I<z;I+=3)w(e.getX(I+0)),w(e.getX(I+1)),w(e.getX(I+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ni(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,u=new k,d=new k;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)It.fromBufferAttribute(e,n),It.normalize(),e.setXYZ(n,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let f=0;f<u;f++)h[v++]=c[p++]}return new ni(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new wi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wm=new gt,dr=new bh,Ja=new Uc,Am=new k,rs=new k,ss=new k,os=new k,Iu=new k,el=new k,tl=new Ne,nl=new Ne,il=new Ne,Cm=new k,Rm=new k,bm=new k,rl=new k,sl=new k;class Jn extends Pt{constructor(e=new wi,n=new c_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){el.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Iu.fromBufferAttribute(d,e),o?el.addScaledVector(Iu,u):el.addScaledVector(Iu.sub(n),u))}n.add(el)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(s),dr.copy(e.ray).recast(e.near),!(Ja.containsPoint(dr.origin)===!1&&(dr.intersectSphere(Ja,Am)===null||dr.origin.distanceToSquared(Am)>(e.far-e.near)**2))&&(wm.copy(s).invert(),dr.copy(e.ray).applyMatrix4(wm),!(i.boundingBox!==null&&dr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,dr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=h.length;v<_;v++){const m=h[v],f=o[m.materialIndex],g=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,R=x;S<R;S+=3){const A=a.getX(S),w=a.getX(S+1),P=a.getX(S+2);r=ol(this,f,e,i,c,u,d,A,w,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=v,f=_;m<f;m+=3){const g=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);r=ol(this,o,e,i,c,u,d,g,x,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=h.length;v<_;v++){const m=h[v],f=o[m.materialIndex],g=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,R=x;S<R;S+=3){const A=S,w=S+1,P=S+2;r=ol(this,f,e,i,c,u,d,A,w,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=v,f=_;m<f;m+=3){const g=m,x=m+1,S=m+2;r=ol(this,o,e,i,c,u,d,g,x,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function S1(t,e,n,i,r,s,o,a){let l;if(e.side===an?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ir,a),l===null)return null;sl.copy(a),sl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(sl);return c<n.near||c>n.far?null:{distance:c,point:sl.clone(),object:t}}function ol(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,rs),t.getVertexPosition(l,ss),t.getVertexPosition(c,os);const u=S1(t,e,n,i,rs,ss,os,rl);if(u){r&&(tl.fromBufferAttribute(r,a),nl.fromBufferAttribute(r,l),il.fromBufferAttribute(r,c),u.uv=Qn.getInterpolation(rl,rs,ss,os,tl,nl,il,new Ne)),s&&(tl.fromBufferAttribute(s,a),nl.fromBufferAttribute(s,l),il.fromBufferAttribute(s,c),u.uv1=Qn.getInterpolation(rl,rs,ss,os,tl,nl,il,new Ne)),o&&(Cm.fromBufferAttribute(o,a),Rm.fromBufferAttribute(o,l),bm.fromBufferAttribute(o,c),u.normal=Qn.getInterpolation(rl,rs,ss,os,Cm,Rm,bm,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new k,materialIndex:0};Qn.getNormal(rs,ss,os,d.normal),u.face=d}return u}class ao extends wi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Vn(c,3)),this.setAttribute("normal",new Vn(u,3)),this.setAttribute("uv",new Vn(d,2));function v(_,m,f,g,x,S,R,A,w,P,E){const y=S/w,b=R/P,U=S/2,I=R/2,z=A/2,$=w+1,G=P+1;let Z=0,N=0;const Y=new k;for(let Q=0;Q<G;Q++){const oe=Q*b-I;for(let xe=0;xe<$;xe++){const He=xe*y-U;Y[_]=He*g,Y[m]=oe*x,Y[f]=z,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[f]=A>0?1:-1,u.push(Y.x,Y.y,Y.z),d.push(xe/w),d.push(1-Q/P),Z+=1}}for(let Q=0;Q<P;Q++)for(let oe=0;oe<w;oe++){const xe=h+oe+$*Q,He=h+oe+$*(Q+1),K=h+(oe+1)+$*(Q+1),ne=h+(oe+1)+$*Q;l.push(xe,He,ne),l.push(He,K,ne),N+=6}a.addGroup(p,N,E),p+=N,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function to(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function qt(t){const e={};for(let n=0;n<t.length;n++){const i=to(t[n]);for(const r in i)e[r]=i[r]}return e}function M1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function d_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const E1={clone:to,merge:qt};var T1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,w1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rr extends oo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=T1,this.fragmentShader=w1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=M1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}let h_=class extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Ui=new k,Pm=new Ne,Lm=new Ne;class pn extends h_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=eo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return eo*2*Math.atan(Math.tan(Wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,n){return this.getViewBounds(e,Pm,Lm),n.subVectors(Lm,Pm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Wo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const as=-90,ls=1;class A1 extends Pt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pn(as,ls,e,n);r.layers=this.layers,this.add(r);const s=new pn(as,ls,e,n);s.layers=this.layers,this.add(s);const o=new pn(as,ls,e,n);o.layers=this.layers,this.add(o);const a=new pn(as,ls,e,n);a.layers=this.layers,this.add(a);const l=new pn(as,ls,e,n);l.layers=this.layers,this.add(l);const c=new pn(as,ls,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class p_ extends ln{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Ks,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class C1 extends Fr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new p_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:kn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ao(5,5,5),s=new rr({name:"CubemapFromEquirect",uniforms:to(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:Qi});s.uniforms.tEquirect.value=n;const o=new Jn(r,s),a=n.minFilter;return n.minFilter===wr&&(n.minFilter=kn),new A1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Nu=new k,R1=new k,b1=new Be;class ki{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Nu.subVectors(i,n).cross(R1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Nu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||b1.getNormalMatrix(e),r=this.coplanarPoint(Nu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new Uc,al=new k;class Ph{constructor(e=new ki,n=new ki,i=new ki,r=new ki,s=new ki,o=new ki){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=vi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],p=r[8],v=r[9],_=r[10],m=r[11],f=r[12],g=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,m-p,S-f).normalize(),i[1].setComponents(l+s,h+c,m+p,S+f).normalize(),i[2].setComponents(l+o,h+u,m+v,S+g).normalize(),i[3].setComponents(l-o,h-u,m-v,S-g).normalize(),i[4].setComponents(l-a,h-d,m-_,S-x).normalize(),n===vi)i[5].setComponents(l+a,h+d,m+_,S+x).normalize();else if(n===fc)i[5].setComponents(a,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(al.x=r.normal.x>0?e.max.x:e.min.x,al.y=r.normal.y>0?e.max.y:e.min.y,al.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(al)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function m_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function P1(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l._updateRange,h=l.updateRanges;if(t.bindBuffer(c,a),d.count===-1&&h.length===0&&t.bufferSubData(c,0,u),h.length!==0){for(let p=0,v=h.length;p<v;p++){const _=h[p];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}d.count!==-1&&(t.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Fc extends wi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=n/l,p=[],v=[],_=[],m=[];for(let f=0;f<u;f++){const g=f*h-o;for(let x=0;x<c;x++){const S=x*d-s;v.push(S,-g,0),_.push(0,0,1),m.push(x/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<a;g++){const x=g+c*f,S=g+c*(f+1),R=g+1+c*(f+1),A=g+1+c*f;p.push(x,S,A),p.push(S,R,A)}this.setIndex(p),this.setAttribute("position",new Vn(v,3)),this.setAttribute("normal",new Vn(_,3)),this.setAttribute("uv",new Vn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fc(e.width,e.height,e.widthSegments,e.heightSegments)}}var L1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,D1=`#ifdef USE_ALPHAHASH
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
#endif`,I1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,N1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,F1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,O1=`#ifdef USE_AOMAP
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
#endif`,k1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B1=`#ifdef USE_BATCHING
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
#endif`,z1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,H1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,V1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,G1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,W1=`#ifdef USE_IRIDESCENCE
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
#endif`,X1=`#ifdef USE_BUMPMAP
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
#endif`,j1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Y1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,q1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,K1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Z1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Q1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,J1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,eE=`#define PI 3.141592653589793
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
} // validated`,tE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nE=`vec3 transformedNormal = objectNormal;
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
#endif`,iE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aE="gl_FragColor = linearToOutputTexel( gl_FragColor );",lE=`
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
}`,cE=`#ifdef USE_ENVMAP
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
#endif`,uE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fE=`#ifdef USE_ENVMAP
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
#endif`,dE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hE=`#ifdef USE_ENVMAP
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
#endif`,pE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_E=`#ifdef USE_GRADIENTMAP
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
}`,xE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ME=`uniform bool receiveShadow;
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
#endif`,EE=`#ifdef USE_ENVMAP
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
#endif`,TE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RE=`PhysicalMaterial material;
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
#endif`,bE=`struct PhysicalMaterial {
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
}`,PE=`
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
#endif`,LE=`#if defined( RE_IndirectDiffuse )
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
#endif`,DE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,IE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,NE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,OE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zE=`#if defined( USE_POINTS_UV )
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
#endif`,HE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,WE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jE=`#ifdef USE_MORPHTARGETS
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
#endif`,YE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$E=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,KE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JE=`#ifdef USE_NORMALMAP
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
#endif`,eT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,oT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mT=`float getShadowMask() {
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
}`,gT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vT=`#ifdef USE_SKINNING
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
#endif`,_T=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xT=`#ifdef USE_SKINNING
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
#endif`,yT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ST=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,MT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ET=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,TT=`#ifdef USE_TRANSMISSION
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
#endif`,wT=`#ifdef USE_TRANSMISSION
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
#endif`,AT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LT=`uniform sampler2D t2D;
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
}`,DT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,NT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FT=`#include <common>
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
}`,OT=`#if DEPTH_PACKING == 3200
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
}`,kT=`#define DISTANCE
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
}`,BT=`#define DISTANCE
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
}`,zT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VT=`uniform float scale;
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
}`,GT=`uniform vec3 diffuse;
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
}`,WT=`#include <common>
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
}`,XT=`uniform vec3 diffuse;
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
}`,jT=`#define LAMBERT
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
}`,YT=`#define LAMBERT
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
}`,$T=`#define MATCAP
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
}`,qT=`#define MATCAP
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
}`,KT=`#define NORMAL
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
}`,ZT=`#define NORMAL
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
}`,QT=`#define PHONG
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
}`,JT=`#define PHONG
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
}`,ew=`#define STANDARD
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
}`,tw=`#define STANDARD
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
}`,nw=`#define TOON
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
}`,iw=`#define TOON
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
}`,rw=`uniform float size;
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
}`,sw=`uniform vec3 diffuse;
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
}`,ow=`#include <common>
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
}`,aw=`uniform vec3 color;
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
}`,lw=`uniform float rotation;
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
}`,cw=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:L1,alphahash_pars_fragment:D1,alphamap_fragment:I1,alphamap_pars_fragment:N1,alphatest_fragment:U1,alphatest_pars_fragment:F1,aomap_fragment:O1,aomap_pars_fragment:k1,batching_pars_vertex:B1,batching_vertex:z1,begin_vertex:H1,beginnormal_vertex:V1,bsdfs:G1,iridescence_fragment:W1,bumpmap_pars_fragment:X1,clipping_planes_fragment:j1,clipping_planes_pars_fragment:Y1,clipping_planes_pars_vertex:$1,clipping_planes_vertex:q1,color_fragment:K1,color_pars_fragment:Z1,color_pars_vertex:Q1,color_vertex:J1,common:eE,cube_uv_reflection_fragment:tE,defaultnormal_vertex:nE,displacementmap_pars_vertex:iE,displacementmap_vertex:rE,emissivemap_fragment:sE,emissivemap_pars_fragment:oE,colorspace_fragment:aE,colorspace_pars_fragment:lE,envmap_fragment:cE,envmap_common_pars_fragment:uE,envmap_pars_fragment:fE,envmap_pars_vertex:dE,envmap_physical_pars_fragment:EE,envmap_vertex:hE,fog_vertex:pE,fog_pars_vertex:mE,fog_fragment:gE,fog_pars_fragment:vE,gradientmap_pars_fragment:_E,lightmap_pars_fragment:xE,lights_lambert_fragment:yE,lights_lambert_pars_fragment:SE,lights_pars_begin:ME,lights_toon_fragment:TE,lights_toon_pars_fragment:wE,lights_phong_fragment:AE,lights_phong_pars_fragment:CE,lights_physical_fragment:RE,lights_physical_pars_fragment:bE,lights_fragment_begin:PE,lights_fragment_maps:LE,lights_fragment_end:DE,logdepthbuf_fragment:IE,logdepthbuf_pars_fragment:NE,logdepthbuf_pars_vertex:UE,logdepthbuf_vertex:FE,map_fragment:OE,map_pars_fragment:kE,map_particle_fragment:BE,map_particle_pars_fragment:zE,metalnessmap_fragment:HE,metalnessmap_pars_fragment:VE,morphinstance_vertex:GE,morphcolor_vertex:WE,morphnormal_vertex:XE,morphtarget_pars_vertex:jE,morphtarget_vertex:YE,normal_fragment_begin:$E,normal_fragment_maps:qE,normal_pars_fragment:KE,normal_pars_vertex:ZE,normal_vertex:QE,normalmap_pars_fragment:JE,clearcoat_normal_fragment_begin:eT,clearcoat_normal_fragment_maps:tT,clearcoat_pars_fragment:nT,iridescence_pars_fragment:iT,opaque_fragment:rT,packing:sT,premultiplied_alpha_fragment:oT,project_vertex:aT,dithering_fragment:lT,dithering_pars_fragment:cT,roughnessmap_fragment:uT,roughnessmap_pars_fragment:fT,shadowmap_pars_fragment:dT,shadowmap_pars_vertex:hT,shadowmap_vertex:pT,shadowmask_pars_fragment:mT,skinbase_vertex:gT,skinning_pars_vertex:vT,skinning_vertex:_T,skinnormal_vertex:xT,specularmap_fragment:yT,specularmap_pars_fragment:ST,tonemapping_fragment:MT,tonemapping_pars_fragment:ET,transmission_fragment:TT,transmission_pars_fragment:wT,uv_pars_fragment:AT,uv_pars_vertex:CT,uv_vertex:RT,worldpos_vertex:bT,background_vert:PT,background_frag:LT,backgroundCube_vert:DT,backgroundCube_frag:IT,cube_vert:NT,cube_frag:UT,depth_vert:FT,depth_frag:OT,distanceRGBA_vert:kT,distanceRGBA_frag:BT,equirect_vert:zT,equirect_frag:HT,linedashed_vert:VT,linedashed_frag:GT,meshbasic_vert:WT,meshbasic_frag:XT,meshlambert_vert:jT,meshlambert_frag:YT,meshmatcap_vert:$T,meshmatcap_frag:qT,meshnormal_vert:KT,meshnormal_frag:ZT,meshphong_vert:QT,meshphong_frag:JT,meshphysical_vert:ew,meshphysical_frag:tw,meshtoon_vert:nw,meshtoon_frag:iw,points_vert:rw,points_frag:sw,shadow_vert:ow,shadow_frag:aw,sprite_vert:lw,sprite_frag:cw},ce={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},qn={basic:{uniforms:qt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:qt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:qt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:qt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:qt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:qt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:qt([ce.points,ce.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:qt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:qt([ce.common,ce.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:qt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:qt([ce.sprite,ce.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:qt([ce.common,ce.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:qt([ce.lights,ce.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};qn.physical={uniforms:qt([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const ll={r:0,b:0,g:0},pr=new ii,uw=new gt;function fw(t,e,n,i,r,s,o){const a=new Ve(0);let l=s===!0?0:1,c,u,d=null,h=0,p=null;function v(g){let x=g.isScene===!0?g.background:null;return x&&x.isTexture&&(x=(g.backgroundBlurriness>0?n:e).get(x)),x}function _(g){let x=!1;const S=v(g);S===null?f(a,l):S&&S.isColor&&(f(S,1),x=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,x){const S=v(x);S&&(S.isCubeTexture||S.mapping===Ic)?(u===void 0&&(u=new Jn(new ao(1,1,1),new rr({name:"BackgroundCubeMaterial",uniforms:to(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),pr.copy(x.backgroundRotation),pr.x*=-1,pr.y*=-1,pr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(uw.makeRotationFromEuler(pr)),u.material.toneMapped=Je.getTransfer(S.colorSpace)!==rt,(d!==S||h!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=S,h=S.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Jn(new Fc(2,2),new rr({name:"BackgroundMaterial",uniforms:to(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Je.getTransfer(S.colorSpace)!==rt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||h!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=S,h=S.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function f(g,x){g.getRGB(ll,d_(t)),i.buffers.color.setClear(ll.r,ll.g,ll.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(g,x=1){a.set(g),l=x,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,f(a,l)},render:_,addToRenderList:m}}function dw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(y,b,U,I,z){let $=!1;const G=d(I,U,b);s!==G&&(s=G,c(s.object)),$=p(y,I,U,z),$&&v(y,I,U,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,S(y,b,U,I),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function u(y){return t.deleteVertexArray(y)}function d(y,b,U){const I=U.wireframe===!0;let z=i[y.id];z===void 0&&(z={},i[y.id]=z);let $=z[b.id];$===void 0&&($={},z[b.id]=$);let G=$[I];return G===void 0&&(G=h(l()),$[I]=G),G}function h(y){const b=[],U=[],I=[];for(let z=0;z<n;z++)b[z]=0,U[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:U,attributeDivisors:I,object:y,attributes:{},index:null}}function p(y,b,U,I){const z=s.attributes,$=b.attributes;let G=0;const Z=U.getAttributes();for(const N in Z)if(Z[N].location>=0){const Q=z[N];let oe=$[N];if(oe===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(oe=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(oe=y.instanceColor)),Q===void 0||Q.attribute!==oe||oe&&Q.data!==oe.data)return!0;G++}return s.attributesNum!==G||s.index!==I}function v(y,b,U,I){const z={},$=b.attributes;let G=0;const Z=U.getAttributes();for(const N in Z)if(Z[N].location>=0){let Q=$[N];Q===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor));const oe={};oe.attribute=Q,Q&&Q.data&&(oe.data=Q.data),z[N]=oe,G++}s.attributes=z,s.attributesNum=G,s.index=I}function _(){const y=s.newAttributes;for(let b=0,U=y.length;b<U;b++)y[b]=0}function m(y){f(y,0)}function f(y,b){const U=s.newAttributes,I=s.enabledAttributes,z=s.attributeDivisors;U[y]=1,I[y]===0&&(t.enableVertexAttribArray(y),I[y]=1),z[y]!==b&&(t.vertexAttribDivisor(y,b),z[y]=b)}function g(){const y=s.newAttributes,b=s.enabledAttributes;for(let U=0,I=b.length;U<I;U++)b[U]!==y[U]&&(t.disableVertexAttribArray(U),b[U]=0)}function x(y,b,U,I,z,$,G){G===!0?t.vertexAttribIPointer(y,b,U,z,$):t.vertexAttribPointer(y,b,U,I,z,$)}function S(y,b,U,I){_();const z=I.attributes,$=U.getAttributes(),G=b.defaultAttributeValues;for(const Z in $){const N=$[Z];if(N.location>=0){let Y=z[Z];if(Y===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(Y=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(Y=y.instanceColor)),Y!==void 0){const Q=Y.normalized,oe=Y.itemSize,xe=e.get(Y);if(xe===void 0)continue;const He=xe.buffer,K=xe.type,ne=xe.bytesPerElement,ue=K===t.INT||K===t.UNSIGNED_INT||Y.gpuType===Sh;if(Y.isInterleavedBufferAttribute){const fe=Y.data,Ue=fe.stride,Oe=Y.offset;if(fe.isInstancedInterleavedBuffer){for(let ze=0;ze<N.locationSize;ze++)f(N.location+ze,fe.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ze=0;ze<N.locationSize;ze++)m(N.location+ze);t.bindBuffer(t.ARRAY_BUFFER,He);for(let ze=0;ze<N.locationSize;ze++)x(N.location+ze,oe/N.locationSize,K,Q,Ue*ne,(Oe+oe/N.locationSize*ze)*ne,ue)}else{if(Y.isInstancedBufferAttribute){for(let fe=0;fe<N.locationSize;fe++)f(N.location+fe,Y.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let fe=0;fe<N.locationSize;fe++)m(N.location+fe);t.bindBuffer(t.ARRAY_BUFFER,He);for(let fe=0;fe<N.locationSize;fe++)x(N.location+fe,oe/N.locationSize,K,Q,oe*ne,oe/N.locationSize*fe*ne,ue)}}else if(G!==void 0){const Q=G[Z];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(N.location,Q);break;case 3:t.vertexAttrib3fv(N.location,Q);break;case 4:t.vertexAttrib4fv(N.location,Q);break;default:t.vertexAttrib1fv(N.location,Q)}}}}g()}function R(){P();for(const y in i){const b=i[y];for(const U in b){const I=b[U];for(const z in I)u(I[z].object),delete I[z];delete b[U]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const b=i[y.id];for(const U in b){const I=b[U];for(const z in I)u(I[z].object),delete I[z];delete b[U]}delete i[y.id]}function w(y){for(const b in i){const U=i[b];if(U[y.id]===void 0)continue;const I=U[y.id];for(const z in I)u(I[z].object),delete I[z];delete U[y.id]}}function P(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:g}}function hw(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let v=0;v<d;v++)p+=u[v];n.update(p,i,1)}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],u[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let v=0;for(let _=0;_<d;_++)v+=u[_];for(let _=0;_<h.length;_++)n.update(v,i,h[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function pw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Bn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const w=A===xa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ei&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==gi&&!w)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),f=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:f,maxVaryings:g,maxFragmentUniforms:x,vertexTextures:S,maxSamples:R}}function mw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ki,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,p){const v=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const g=s?0:i,x=g*4;let S=f.clippingState||null;l.value=S,S=u(v,h,x,p);for(let R=0;R!==x;++R)S[R]=n[R];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,v){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,v!==!0||m===null){const f=p+_*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,S=p;x!==_;++x,S+=4)o.copy(d[x]).applyMatrix4(g,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function gw(t){let e=new WeakMap;function n(o,a){return a===Gf?o.mapping=Ks:a===Wf&&(o.mapping=Zs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Gf||a===Wf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new C1(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class g_ extends h_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const As=4,Dm=[.125,.215,.35,.446,.526,.582],yr=20,Uu=new g_,Im=new Ve;let Fu=null,Ou=0,ku=0,Bu=!1;const _r=(1+Math.sqrt(5))/2,cs=1/_r,Nm=[new k(-_r,cs,0),new k(_r,cs,0),new k(-cs,0,_r),new k(cs,0,_r),new k(0,_r,-cs),new k(0,_r,cs),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class Um{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Fu=this._renderer.getRenderTarget(),Ou=this._renderer.getActiveCubeFace(),ku=this._renderer.getActiveMipmapLevel(),Bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=km(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Om(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fu,Ou,ku),this._renderer.xr.enabled=Bu,e.scissorTest=!1,cl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ks||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fu=this._renderer.getRenderTarget(),Ou=this._renderer.getActiveCubeFace(),ku=this._renderer.getActiveMipmapLevel(),Bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:xa,format:Bn,colorSpace:lr,depthBuffer:!1},r=Fm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vw(s)),this._blurMaterial=_w(s,e,n)}return r}_compileMaterial(e){const n=new Jn(this._lodPlanes[0],e);this._renderer.compile(n,Uu)}_sceneToCubeUV(e,n,i,r){const a=new pn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Im),u.toneMapping=Ji,u.autoClear=!1;const p=new c_({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),v=new Jn(new ao,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Im),_=!0);for(let f=0;f<6;f++){const g=f%3;g===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):g===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const x=this._cubeSize;cl(r,g*x,f>2?x:0,x,x),u.setRenderTarget(r),_&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ks||e.mapping===Zs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=km()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Om());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Jn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;cl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Uu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Nm[(r-s-1)%Nm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Jn(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*yr-1),_=s/v,m=isFinite(s)?1+Math.floor(u*_):yr;m>yr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yr}`);const f=[];let g=0;for(let w=0;w<yr;++w){const P=w/_,E=Math.exp(-P*P/2);f.push(E),w===0?g+=E:w<m&&(g+=2*E)}for(let w=0;w<f.length;w++)f[w]=f[w]/g;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=v,h.mipInt.value=x-i;const S=this._sizeLods[r],R=3*S*(r>x-As?r-x+As:0),A=4*(this._cubeSize-S);cl(n,R,A,3*S,2*S),l.setRenderTarget(n),l.render(d,Uu)}}function vw(t){const e=[],n=[],i=[];let r=t;const s=t-As+1+Dm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-As?l=Dm[o-t+As-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,v=6,_=3,m=2,f=1,g=new Float32Array(_*v*p),x=new Float32Array(m*v*p),S=new Float32Array(f*v*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,P=A>2?0:-1,E=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];g.set(E,_*v*A),x.set(h,m*v*A);const y=[A,A,A,A,A,A];S.set(y,f*v*A)}const R=new wi;R.setAttribute("position",new ni(g,_)),R.setAttribute("uv",new ni(x,m)),R.setAttribute("faceIndex",new ni(S,f)),e.push(R),r>As&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Fm(t,e,n){const i=new Fr(t,e,n);return i.texture.mapping=Ic,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function cl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function _w(t,e,n){const i=new Float32Array(yr),r=new k(0,1,0);return new rr({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Lh(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Om(){return new rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lh(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function km(){return new rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Lh(){return`

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
	`}function xw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Gf||l===Wf,u=l===Ks||l===Zs;if(c||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Um(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Um(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function yw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&jo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Sw(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const _=h.morphAttributes[v];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const v in h)e.update(h[v],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const v in p){const _=p[v];for(let m=0,f=_.length;m<f;m++)e.update(_[m],t.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,v=d.attributes.position;let _=0;if(p!==null){const g=p.array;_=p.version;for(let x=0,S=g.length;x<S;x+=3){const R=g[x+0],A=g[x+1],w=g[x+2];h.push(R,A,A,w,w,R)}}else if(v!==void 0){const g=v.array;_=v.version;for(let x=0,S=g.length/3-1;x<S;x+=3){const R=x+0,A=x+1,w=x+2;h.push(R,A,A,w,w,R)}}else return;const m=new(r_(h)?f_:u_)(h,1);m.version=_;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Mw(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,h*o,v),n.update(p,i,v))}function u(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,v);let m=0;for(let f=0;f<v;f++)m+=p[f];n.update(m,i,1)}function d(h,p,v,_){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,_,0,v);let f=0;for(let g=0;g<v;g++)f+=p[g];for(let g=0;g<_.length;g++)n.update(f,i,_[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Ew(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Tw(t,e,n){const i=new WeakMap,r=new Rt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let y=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;h!==void 0&&h.texture.dispose();const v=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;v===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let R=a.attributes.position.count*S,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const w=new Float32Array(R*A*4*d),P=new o_(w,R,A,d);P.type=gi,P.needsUpdate=!0;const E=S*4;for(let b=0;b<d;b++){const U=f[b],I=g[b],z=x[b],$=R*A*4*b;for(let G=0;G<U.count;G++){const Z=G*E;v===!0&&(r.fromBufferAttribute(U,G),w[$+Z+0]=r.x,w[$+Z+1]=r.y,w[$+Z+2]=r.z,w[$+Z+3]=0),_===!0&&(r.fromBufferAttribute(I,G),w[$+Z+4]=r.x,w[$+Z+5]=r.y,w[$+Z+6]=r.z,w[$+Z+7]=0),m===!0&&(r.fromBufferAttribute(z,G),w[$+Z+8]=r.x,w[$+Z+9]=r.y,w[$+Z+10]=r.z,w[$+Z+11]=z.itemSize===4?r.w:1)}}h={count:d,texture:P,size:new Ne(R,A)},i.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const _=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function ww(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class v_ extends ln{constructor(e,n,i,r,s,o,a,l,c,u=Us){if(u!==Us&&u!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Us&&(i=Ur),i===void 0&&u===Js&&(i=Qs),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:wn,this.minFilter=l!==void 0?l:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const __=new ln,Bm=new v_(1,1),x_=new o_,y_=new f1,S_=new p_,zm=[],Hm=[],Vm=new Float32Array(16),Gm=new Float32Array(9),Wm=new Float32Array(4);function lo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=zm[r];if(s===void 0&&(s=new Float32Array(r),zm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Lt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Dt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Oc(t,e){let n=Hm[e];n===void 0&&(n=new Int32Array(e),Hm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Aw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2fv(this.addr,e),Dt(n,e)}}function Rw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Lt(n,e))return;t.uniform3fv(this.addr,e),Dt(n,e)}}function bw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4fv(this.addr,e),Dt(n,e)}}function Pw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;Wm.set(i),t.uniformMatrix2fv(this.addr,!1,Wm),Dt(n,i)}}function Lw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;Gm.set(i),t.uniformMatrix3fv(this.addr,!1,Gm),Dt(n,i)}}function Dw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;Vm.set(i),t.uniformMatrix4fv(this.addr,!1,Vm),Dt(n,i)}}function Iw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Nw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2iv(this.addr,e),Dt(n,e)}}function Uw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3iv(this.addr,e),Dt(n,e)}}function Fw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4iv(this.addr,e),Dt(n,e)}}function Ow(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function kw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2uiv(this.addr,e),Dt(n,e)}}function Bw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3uiv(this.addr,e),Dt(n,e)}}function zw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4uiv(this.addr,e),Dt(n,e)}}function Hw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Bm.compareFunction=i_,s=Bm):s=__,n.setTexture2D(e||s,r)}function Vw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||y_,r)}function Gw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||S_,r)}function Ww(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||x_,r)}function Xw(t){switch(t){case 5126:return Aw;case 35664:return Cw;case 35665:return Rw;case 35666:return bw;case 35674:return Pw;case 35675:return Lw;case 35676:return Dw;case 5124:case 35670:return Iw;case 35667:case 35671:return Nw;case 35668:case 35672:return Uw;case 35669:case 35673:return Fw;case 5125:return Ow;case 36294:return kw;case 36295:return Bw;case 36296:return zw;case 35678:case 36198:case 36298:case 36306:case 35682:return Hw;case 35679:case 36299:case 36307:return Vw;case 35680:case 36300:case 36308:case 36293:return Gw;case 36289:case 36303:case 36311:case 36292:return Ww}}function jw(t,e){t.uniform1fv(this.addr,e)}function Yw(t,e){const n=lo(e,this.size,2);t.uniform2fv(this.addr,n)}function $w(t,e){const n=lo(e,this.size,3);t.uniform3fv(this.addr,n)}function qw(t,e){const n=lo(e,this.size,4);t.uniform4fv(this.addr,n)}function Kw(t,e){const n=lo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Zw(t,e){const n=lo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Qw(t,e){const n=lo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Jw(t,e){t.uniform1iv(this.addr,e)}function eA(t,e){t.uniform2iv(this.addr,e)}function tA(t,e){t.uniform3iv(this.addr,e)}function nA(t,e){t.uniform4iv(this.addr,e)}function iA(t,e){t.uniform1uiv(this.addr,e)}function rA(t,e){t.uniform2uiv(this.addr,e)}function sA(t,e){t.uniform3uiv(this.addr,e)}function oA(t,e){t.uniform4uiv(this.addr,e)}function aA(t,e,n){const i=this.cache,r=e.length,s=Oc(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||__,s[o])}function lA(t,e,n){const i=this.cache,r=e.length,s=Oc(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||y_,s[o])}function cA(t,e,n){const i=this.cache,r=e.length,s=Oc(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||S_,s[o])}function uA(t,e,n){const i=this.cache,r=e.length,s=Oc(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||x_,s[o])}function fA(t){switch(t){case 5126:return jw;case 35664:return Yw;case 35665:return $w;case 35666:return qw;case 35674:return Kw;case 35675:return Zw;case 35676:return Qw;case 5124:case 35670:return Jw;case 35667:case 35671:return eA;case 35668:case 35672:return tA;case 35669:case 35673:return nA;case 5125:return iA;case 36294:return rA;case 36295:return sA;case 36296:return oA;case 35678:case 36198:case 36298:case 36306:case 35682:return aA;case 35679:case 36299:case 36307:return lA;case 35680:case 36300:case 36308:case 36293:return cA;case 36289:case 36303:case 36311:case 36292:return uA}}class dA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Xw(n.type)}}class hA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=fA(n.type)}}class pA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const zu=/(\w+)(\])?(\[|\.)?/g;function Xm(t,e){t.seq.push(e),t.map[e.id]=e}function mA(t,e,n){const i=t.name,r=i.length;for(zu.lastIndex=0;;){const s=zu.exec(i),o=zu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Xm(n,c===void 0?new dA(a,t,e):new hA(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new pA(a),Xm(n,d)),n=d}}}class Dl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);mA(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function jm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const gA=37297;let vA=0;function _A(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function xA(t){const e=Je.getPrimaries(Je.workingColorSpace),n=Je.getPrimaries(t);let i;switch(e===n?i="":e===uc&&n===cc?i="LinearDisplayP3ToLinearSRGB":e===cc&&n===uc&&(i="LinearSRGBToLinearDisplayP3"),t){case lr:case Nc:return[i,"LinearTransferOETF"];case $n:case Ch:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Ym(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+_A(t.getShaderSource(e),o)}else return r}function yA(t,e){const n=xA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function SA(t,e){let n;switch(e){case EM:n="Linear";break;case TM:n="Reinhard";break;case wM:n="OptimizedCineon";break;case AM:n="ACESFilmic";break;case RM:n="AgX";break;case bM:n="Neutral";break;case CM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ul=new k;function MA(){Je.getLuminanceCoefficients(ul);const t=ul.x.toFixed(4),e=ul.y.toFixed(4),n=ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function EA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function TA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function wA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function No(t){return t!==""}function $m(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AA=/^[ \t]*#include +<([\w\d./]+)>/gm;function xd(t){return t.replace(AA,RA)}const CA=new Map;function RA(t,e){let n=ke[e];if(n===void 0){const i=CA.get(e);if(i!==void 0)n=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return xd(n)}const bA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Km(t){return t.replace(bA,PA)}function PA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function LA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Wv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===qS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function DA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ks:case Zs:e="ENVMAP_TYPE_CUBE";break;case Ic:e="ENVMAP_TYPE_CUBE_UV";break}return e}function IA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function NA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case yh:e="ENVMAP_BLENDING_MULTIPLY";break;case SM:e="ENVMAP_BLENDING_MIX";break;case MM:e="ENVMAP_BLENDING_ADD";break}return e}function UA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function FA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=LA(n),c=DA(n),u=IA(n),d=NA(n),h=UA(n),p=EA(n),v=TA(s),_=r.createProgram();let m,f,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(No).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(No).join(`
`),f.length>0&&(f+=`
`)):(m=[Zm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),f=[Zm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ji?"#define TONE_MAPPING":"",n.toneMapping!==Ji?ke.tonemapping_pars_fragment:"",n.toneMapping!==Ji?SA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,yA("linearToOutputTexel",n.outputColorSpace),MA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(No).join(`
`)),o=xd(o),o=$m(o,n),o=qm(o,n),a=xd(a),a=$m(a,n),a=qm(a,n),o=Km(o),a=Km(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===fm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===fm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=g+m+o,S=g+f+a,R=jm(r,r.VERTEX_SHADER,x),A=jm(r,r.FRAGMENT_SHADER,S);r.attachShader(_,R),r.attachShader(_,A),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(b){if(t.debug.checkShaderErrors){const U=r.getProgramInfoLog(_).trim(),I=r.getShaderInfoLog(R).trim(),z=r.getShaderInfoLog(A).trim();let $=!0,G=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,R,A);else{const Z=Ym(r,R,"vertex"),N=Ym(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+U+`
`+Z+`
`+N)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(I===""||z==="")&&(G=!1);G&&(b.diagnostics={runnable:$,programLog:U,vertexShader:{log:I,prefix:m},fragmentShader:{log:z,prefix:f}})}r.deleteShader(R),r.deleteShader(A),P=new Dl(r,_),E=wA(r,_)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,gA)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=vA++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=A,this}let OA=0;class kA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new BA(e),n.set(e,i)),i}}class BA{constructor(e){this.id=OA++,this.code=e,this.usedTimes=0}}function zA(t,e,n,i,r,s,o){const a=new a_,l=new kA,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,y,b,U,I){const z=U.fog,$=I.geometry,G=E.isMeshStandardMaterial?U.environment:null,Z=(E.isMeshStandardMaterial?n:e).get(E.envMap||G),N=Z&&Z.mapping===Ic?Z.image.height:null,Y=v[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const Q=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,oe=Q!==void 0?Q.length:0;let xe=0;$.morphAttributes.position!==void 0&&(xe=1),$.morphAttributes.normal!==void 0&&(xe=2),$.morphAttributes.color!==void 0&&(xe=3);let He,K,ne,ue;if(Y){const Xe=qn[Y];He=Xe.vertexShader,K=Xe.fragmentShader}else He=E.vertexShader,K=E.fragmentShader,l.update(E),ne=l.getVertexShaderID(E),ue=l.getFragmentShaderID(E);const fe=t.getRenderTarget(),Ue=I.isInstancedMesh===!0,Oe=I.isBatchedMesh===!0,ze=!!E.map,nt=!!E.matcap,D=!!Z,ft=!!E.aoMap,Ye=!!E.lightMap,$e=!!E.bumpMap,Se=!!E.normalMap,dt=!!E.displacementMap,Le=!!E.emissiveMap,Ie=!!E.metalnessMap,L=!!E.roughnessMap,T=E.anisotropy>0,X=E.clearcoat>0,ee=E.dispersion>0,ie=E.iridescence>0,J=E.sheen>0,Te=E.transmission>0,le=T&&!!E.anisotropyMap,he=X&&!!E.clearcoatMap,Fe=X&&!!E.clearcoatNormalMap,se=X&&!!E.clearcoatRoughnessMap,pe=ie&&!!E.iridescenceMap,We=ie&&!!E.iridescenceThicknessMap,Ae=J&&!!E.sheenColorMap,ve=J&&!!E.sheenRoughnessMap,Re=!!E.specularMap,De=!!E.specularColorMap,ot=!!E.specularIntensityMap,M=Te&&!!E.transmissionMap,B=Te&&!!E.thicknessMap,H=!!E.gradientMap,j=!!E.alphaMap,te=E.alphaTest>0,Me=!!E.alphaHash,be=!!E.extensions;let vt=Ji;E.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(vt=t.toneMapping);const Et={shaderID:Y,shaderType:E.type,shaderName:E.name,vertexShader:He,fragmentShader:K,defines:E.defines,customVertexShaderID:ne,customFragmentShaderID:ue,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Oe,batchingColor:Oe&&I._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&I.instanceColor!==null,instancingMorph:Ue&&I.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:fe===null?t.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:lr,alphaToCoverage:!!E.alphaToCoverage,map:ze,matcap:nt,envMap:D,envMapMode:D&&Z.mapping,envMapCubeUVHeight:N,aoMap:ft,lightMap:Ye,bumpMap:$e,normalMap:Se,displacementMap:h&&dt,emissiveMap:Le,normalMapObjectSpace:Se&&E.normalMapType===IM,normalMapTangentSpace:Se&&E.normalMapType===n_,metalnessMap:Ie,roughnessMap:L,anisotropy:T,anisotropyMap:le,clearcoat:X,clearcoatMap:he,clearcoatNormalMap:Fe,clearcoatRoughnessMap:se,dispersion:ee,iridescence:ie,iridescenceMap:pe,iridescenceThicknessMap:We,sheen:J,sheenColorMap:Ae,sheenRoughnessMap:ve,specularMap:Re,specularColorMap:De,specularIntensityMap:ot,transmission:Te,transmissionMap:M,thicknessMap:B,gradientMap:H,opaque:E.transparent===!1&&E.blending===Ns&&E.alphaToCoverage===!1,alphaMap:j,alphaTest:te,alphaHash:Me,combine:E.combine,mapUv:ze&&_(E.map.channel),aoMapUv:ft&&_(E.aoMap.channel),lightMapUv:Ye&&_(E.lightMap.channel),bumpMapUv:$e&&_(E.bumpMap.channel),normalMapUv:Se&&_(E.normalMap.channel),displacementMapUv:dt&&_(E.displacementMap.channel),emissiveMapUv:Le&&_(E.emissiveMap.channel),metalnessMapUv:Ie&&_(E.metalnessMap.channel),roughnessMapUv:L&&_(E.roughnessMap.channel),anisotropyMapUv:le&&_(E.anisotropyMap.channel),clearcoatMapUv:he&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:We&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:ve&&_(E.sheenRoughnessMap.channel),specularMapUv:Re&&_(E.specularMap.channel),specularColorMapUv:De&&_(E.specularColorMap.channel),specularIntensityMapUv:ot&&_(E.specularIntensityMap.channel),transmissionMapUv:M&&_(E.transmissionMap.channel),thicknessMapUv:B&&_(E.thicknessMap.channel),alphaMapUv:j&&_(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Se||T),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!$.attributes.uv&&(ze||j),fog:!!z,useFog:E.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:I.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:xe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&b.length>0,shadowMapType:t.shadowMap.type,toneMapping:vt,decodeVideoTexture:ze&&E.map.isVideoTexture===!0&&Je.getTransfer(E.map.colorSpace)===rt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Zn,flipSided:E.side===an,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:be&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&E.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Et.vertexUv1s=c.has(1),Et.vertexUv2s=c.has(2),Et.vertexUv3s=c.has(3),c.clear(),Et}function f(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const b in E.defines)y.push(b),y.push(E.defines[b]);return E.isRawShaderMaterial===!1&&(g(y,E),x(y,E),y.push(t.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function g(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function x(E,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.doubleSided&&a.enable(10),y.flipSided&&a.enable(11),y.useDepthPacking&&a.enable(12),y.dithering&&a.enable(13),y.transmission&&a.enable(14),y.sheen&&a.enable(15),y.opaque&&a.enable(16),y.pointsUvs&&a.enable(17),y.decodeVideoTexture&&a.enable(18),y.alphaToCoverage&&a.enable(19),E.push(a.mask)}function S(E){const y=v[E.type];let b;if(y){const U=qn[y];b=E1.clone(U.uniforms)}else b=E.uniforms;return b}function R(E,y){let b;for(let U=0,I=u.length;U<I;U++){const z=u[U];if(z.cacheKey===y){b=z,++b.usedTimes;break}}return b===void 0&&(b=new FA(t,y,E,s),u.push(b)),b}function A(E){if(--E.usedTimes===0){const y=u.indexOf(E);u[y]=u[u.length-1],u.pop(),E.destroy()}}function w(E){l.remove(E)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:R,releaseProgram:A,releaseShaderCache:w,programs:u,dispose:P}}function HA(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function VA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Qm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Jm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,p,v,_,m){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:v,renderOrder:d.renderOrder,z:_,group:m},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=v,f.renderOrder=d.renderOrder,f.z=_,f.group=m),e++,f}function a(d,h,p,v,_,m){const f=o(d,h,p,v,_,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(d,h,p,v,_,m){const f=o(d,h,p,v,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function c(d,h){n.length>1&&n.sort(d||VA),i.length>1&&i.sort(h||Qm),r.length>1&&r.sort(h||Qm)}function u(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function GA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Jm,t.set(i,[o])):r>=s.length?(o=new Jm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function WA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new Ve};break;case"SpotLight":n={position:new k,direction:new k,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":n={color:new Ve,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function XA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let jA=0;function YA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function $A(t){const e=new WA,n=XA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new gt,o=new gt;function a(c){let u=0,d=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,v=0,_=0,m=0,f=0,g=0,x=0,S=0,R=0,A=0,w=0;c.sort(YA);for(let E=0,y=c.length;E<y;E++){const b=c[E],U=b.color,I=b.intensity,z=b.distance,$=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)u+=U.r*I,d+=U.g*I,h+=U.b*I;else if(b.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(b.sh.coefficients[G],I);w++}else if(b.isDirectionalLight){const G=e.get(b);if(G.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const Z=b.shadow,N=n.get(b);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=b.shadow.matrix,g++}i.directional[p]=G,p++}else if(b.isSpotLight){const G=e.get(b);G.position.setFromMatrixPosition(b.matrixWorld),G.color.copy(U).multiplyScalar(I),G.distance=z,G.coneCos=Math.cos(b.angle),G.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),G.decay=b.decay,i.spot[_]=G;const Z=b.shadow;if(b.map&&(i.spotLightMap[R]=b.map,R++,Z.updateMatrices(b),b.castShadow&&A++),i.spotLightMatrix[_]=Z.matrix,b.castShadow){const N=n.get(b);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,i.spotShadow[_]=N,i.spotShadowMap[_]=$,S++}_++}else if(b.isRectAreaLight){const G=e.get(b);G.color.copy(U).multiplyScalar(I),G.halfWidth.set(b.width*.5,0,0),G.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=G,m++}else if(b.isPointLight){const G=e.get(b);if(G.color.copy(b.color).multiplyScalar(b.intensity),G.distance=b.distance,G.decay=b.decay,b.castShadow){const Z=b.shadow,N=n.get(b);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,N.shadowCameraNear=Z.camera.near,N.shadowCameraFar=Z.camera.far,i.pointShadow[v]=N,i.pointShadowMap[v]=$,i.pointShadowMatrix[v]=b.shadow.matrix,x++}i.point[v]=G,v++}else if(b.isHemisphereLight){const G=e.get(b);G.skyColor.copy(b.color).multiplyScalar(I),G.groundColor.copy(b.groundColor).multiplyScalar(I),i.hemi[f]=G,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const P=i.hash;(P.directionalLength!==p||P.pointLength!==v||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==g||P.numPointShadows!==x||P.numSpotShadows!==S||P.numSpotMaps!==R||P.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,P.directionalLength=p,P.pointLength=v,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=g,P.numPointShadows=x,P.numSpotShadows=S,P.numSpotMaps=R,P.numLightProbes=w,i.version=jA++)}function l(c,u){let d=0,h=0,p=0,v=0,_=0;const m=u.matrixWorldInverse;for(let f=0,g=c.length;f<g;f++){const x=c[f];if(x.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(x.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function eg(t){const e=new $A(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function qA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new eg(t),e.set(r,[a])):s>=o.length?(a=new eg(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class KA extends oo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=LM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ZA extends oo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const QA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JA=`uniform sampler2D shadow_pass;
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
}`;function eC(t,e,n){let i=new Ph;const r=new Ne,s=new Ne,o=new Rt,a=new KA({depthPacking:DM}),l=new ZA,c={},u=n.maxTextureSize,d={[ir]:an,[an]:ir,[Zn]:Zn},h=new rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:QA,fragmentShader:JA}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new wi;v.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Jn(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wv;let f=this.type;this.render=function(A,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=t.getRenderTarget(),y=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),U=t.state;U.setBlending(Qi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const I=f!==ui&&this.type===ui,z=f===ui&&this.type!==ui;for(let $=0,G=A.length;$<G;$++){const Z=A[$],N=Z.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const Y=N.getFrameExtents();if(r.multiply(Y),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,N.mapSize.y=s.y)),N.map===null||I===!0||z===!0){const oe=this.type!==ui?{minFilter:wn,magFilter:wn}:{};N.map!==null&&N.map.dispose(),N.map=new Fr(r.x,r.y,oe),N.map.texture.name=Z.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const Q=N.getViewportCount();for(let oe=0;oe<Q;oe++){const xe=N.getViewport(oe);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),U.viewport(o),N.updateMatrices(Z,oe),i=N.getFrustum(),S(w,P,N.camera,Z,this.type)}N.isPointLightShadow!==!0&&this.type===ui&&g(N,P),N.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(E,y,b)};function g(A,w){const P=e.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Fr(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(w,null,P,h,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(w,null,P,p,_,null)}function x(A,w,P,E){let y=null;const b=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(b!==void 0)y=b;else if(y=P.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const U=y.uuid,I=w.uuid;let z=c[U];z===void 0&&(z={},c[U]=z);let $=z[I];$===void 0&&($=y.clone(),z[I]=$,w.addEventListener("dispose",R)),y=$}if(y.visible=w.visible,y.wireframe=w.wireframe,E===ui?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:d[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const U=t.properties.get(y);U.light=P}return y}function S(A,w,P,E,y){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===ui)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const I=e.update(A),z=A.material;if(Array.isArray(z)){const $=I.groups;for(let G=0,Z=$.length;G<Z;G++){const N=$[G],Y=z[N.materialIndex];if(Y&&Y.visible){const Q=x(A,Y,E,y);A.onBeforeShadow(t,A,w,P,I,Q,N),t.renderBufferDirect(P,null,I,Q,A,N),A.onAfterShadow(t,A,w,P,I,Q,N)}}}else if(z.visible){const $=x(A,z,E,y);A.onBeforeShadow(t,A,w,P,I,$,null),t.renderBufferDirect(P,null,I,$,A,null),A.onAfterShadow(t,A,w,P,I,$,null)}}const U=A.children;for(let I=0,z=U.length;I<z;I++)S(U[I],w,P,E,y)}function R(A){A.target.removeEventListener("dispose",R);for(const P in c){const E=c[P],y=A.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}function tC(t){function e(){let M=!1;const B=new Rt;let H=null;const j=new Rt(0,0,0,0);return{setMask:function(te){H!==te&&!M&&(t.colorMask(te,te,te,te),H=te)},setLocked:function(te){M=te},setClear:function(te,Me,be,vt,Et){Et===!0&&(te*=vt,Me*=vt,be*=vt),B.set(te,Me,be,vt),j.equals(B)===!1&&(t.clearColor(te,Me,be,vt),j.copy(B))},reset:function(){M=!1,H=null,j.set(-1,0,0,0)}}}function n(){let M=!1,B=null,H=null,j=null;return{setTest:function(te){te?ue(t.DEPTH_TEST):fe(t.DEPTH_TEST)},setMask:function(te){B!==te&&!M&&(t.depthMask(te),B=te)},setFunc:function(te){if(H!==te){switch(te){case pM:t.depthFunc(t.NEVER);break;case mM:t.depthFunc(t.ALWAYS);break;case gM:t.depthFunc(t.LESS);break;case ac:t.depthFunc(t.LEQUAL);break;case vM:t.depthFunc(t.EQUAL);break;case _M:t.depthFunc(t.GEQUAL);break;case xM:t.depthFunc(t.GREATER);break;case yM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}H=te}},setLocked:function(te){M=te},setClear:function(te){j!==te&&(t.clearDepth(te),j=te)},reset:function(){M=!1,B=null,H=null,j=null}}}function i(){let M=!1,B=null,H=null,j=null,te=null,Me=null,be=null,vt=null,Et=null;return{setTest:function(Xe){M||(Xe?ue(t.STENCIL_TEST):fe(t.STENCIL_TEST))},setMask:function(Xe){B!==Xe&&!M&&(t.stencilMask(Xe),B=Xe)},setFunc:function(Xe,Tt,xt){(H!==Xe||j!==Tt||te!==xt)&&(t.stencilFunc(Xe,Tt,xt),H=Xe,j=Tt,te=xt)},setOp:function(Xe,Tt,xt){(Me!==Xe||be!==Tt||vt!==xt)&&(t.stencilOp(Xe,Tt,xt),Me=Xe,be=Tt,vt=xt)},setLocked:function(Xe){M=Xe},setClear:function(Xe){Et!==Xe&&(t.clearStencil(Xe),Et=Xe)},reset:function(){M=!1,B=null,H=null,j=null,te=null,Me=null,be=null,vt=null,Et=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,h=[],p=null,v=!1,_=null,m=null,f=null,g=null,x=null,S=null,R=null,A=new Ve(0,0,0),w=0,P=!1,E=null,y=null,b=null,U=null,I=null;const z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,G=0;const Z=t.getParameter(t.VERSION);Z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Z)[1]),$=G>=1):Z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),$=G>=2);let N=null,Y={};const Q=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),xe=new Rt().fromArray(Q),He=new Rt().fromArray(oe);function K(M,B,H,j){const te=new Uint8Array(4),Me=t.createTexture();t.bindTexture(M,Me),t.texParameteri(M,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(M,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let be=0;be<H;be++)M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY?t.texImage3D(B,0,t.RGBA,1,1,j,0,t.RGBA,t.UNSIGNED_BYTE,te):t.texImage2D(B+be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,te);return Me}const ne={};ne[t.TEXTURE_2D]=K(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=K(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=K(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=K(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ue(t.DEPTH_TEST),s.setFunc(ac),$e(!1),Se(sm),ue(t.CULL_FACE),ft(Qi);function ue(M){c[M]!==!0&&(t.enable(M),c[M]=!0)}function fe(M){c[M]!==!1&&(t.disable(M),c[M]=!1)}function Ue(M,B){return u[M]!==B?(t.bindFramebuffer(M,B),u[M]=B,M===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=B),M===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=B),!0):!1}function Oe(M,B){let H=h,j=!1;if(M){H=d.get(B),H===void 0&&(H=[],d.set(B,H));const te=M.textures;if(H.length!==te.length||H[0]!==t.COLOR_ATTACHMENT0){for(let Me=0,be=te.length;Me<be;Me++)H[Me]=t.COLOR_ATTACHMENT0+Me;H.length=te.length,j=!0}}else H[0]!==t.BACK&&(H[0]=t.BACK,j=!0);j&&t.drawBuffers(H)}function ze(M){return p!==M?(t.useProgram(M),p=M,!0):!1}const nt={[xr]:t.FUNC_ADD,[ZS]:t.FUNC_SUBTRACT,[QS]:t.FUNC_REVERSE_SUBTRACT};nt[JS]=t.MIN,nt[eM]=t.MAX;const D={[tM]:t.ZERO,[nM]:t.ONE,[iM]:t.SRC_COLOR,[Hf]:t.SRC_ALPHA,[cM]:t.SRC_ALPHA_SATURATE,[aM]:t.DST_COLOR,[sM]:t.DST_ALPHA,[rM]:t.ONE_MINUS_SRC_COLOR,[Vf]:t.ONE_MINUS_SRC_ALPHA,[lM]:t.ONE_MINUS_DST_COLOR,[oM]:t.ONE_MINUS_DST_ALPHA,[uM]:t.CONSTANT_COLOR,[fM]:t.ONE_MINUS_CONSTANT_COLOR,[dM]:t.CONSTANT_ALPHA,[hM]:t.ONE_MINUS_CONSTANT_ALPHA};function ft(M,B,H,j,te,Me,be,vt,Et,Xe){if(M===Qi){v===!0&&(fe(t.BLEND),v=!1);return}if(v===!1&&(ue(t.BLEND),v=!0),M!==KS){if(M!==_||Xe!==P){if((m!==xr||x!==xr)&&(t.blendEquation(t.FUNC_ADD),m=xr,x=xr),Xe)switch(M){case Ns:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case om:t.blendFunc(t.ONE,t.ONE);break;case am:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case lm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}else switch(M){case Ns:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case om:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case am:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case lm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}f=null,g=null,S=null,R=null,A.set(0,0,0),w=0,_=M,P=Xe}return}te=te||B,Me=Me||H,be=be||j,(B!==m||te!==x)&&(t.blendEquationSeparate(nt[B],nt[te]),m=B,x=te),(H!==f||j!==g||Me!==S||be!==R)&&(t.blendFuncSeparate(D[H],D[j],D[Me],D[be]),f=H,g=j,S=Me,R=be),(vt.equals(A)===!1||Et!==w)&&(t.blendColor(vt.r,vt.g,vt.b,Et),A.copy(vt),w=Et),_=M,P=!1}function Ye(M,B){M.side===Zn?fe(t.CULL_FACE):ue(t.CULL_FACE);let H=M.side===an;B&&(H=!H),$e(H),M.blending===Ns&&M.transparent===!1?ft(Qi):ft(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),s.setFunc(M.depthFunc),s.setTest(M.depthTest),s.setMask(M.depthWrite),r.setMask(M.colorWrite);const j=M.stencilWrite;o.setTest(j),j&&(o.setMask(M.stencilWriteMask),o.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),o.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),Le(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?ue(t.SAMPLE_ALPHA_TO_COVERAGE):fe(t.SAMPLE_ALPHA_TO_COVERAGE)}function $e(M){E!==M&&(M?t.frontFace(t.CW):t.frontFace(t.CCW),E=M)}function Se(M){M!==YS?(ue(t.CULL_FACE),M!==y&&(M===sm?t.cullFace(t.BACK):M===$S?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):fe(t.CULL_FACE),y=M}function dt(M){M!==b&&($&&t.lineWidth(M),b=M)}function Le(M,B,H){M?(ue(t.POLYGON_OFFSET_FILL),(U!==B||I!==H)&&(t.polygonOffset(B,H),U=B,I=H)):fe(t.POLYGON_OFFSET_FILL)}function Ie(M){M?ue(t.SCISSOR_TEST):fe(t.SCISSOR_TEST)}function L(M){M===void 0&&(M=t.TEXTURE0+z-1),N!==M&&(t.activeTexture(M),N=M)}function T(M,B,H){H===void 0&&(N===null?H=t.TEXTURE0+z-1:H=N);let j=Y[H];j===void 0&&(j={type:void 0,texture:void 0},Y[H]=j),(j.type!==M||j.texture!==B)&&(N!==H&&(t.activeTexture(H),N=H),t.bindTexture(M,B||ne[M]),j.type=M,j.texture=B)}function X(){const M=Y[N];M!==void 0&&M.type!==void 0&&(t.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)}function ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function J(){try{t.texSubImage2D.apply(t,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Te(){try{t.texSubImage3D.apply(t,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function he(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Fe(){try{t.texStorage2D.apply(t,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function se(){try{t.texStorage3D.apply(t,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function pe(){try{t.texImage2D.apply(t,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function We(){try{t.texImage3D.apply(t,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Ae(M){xe.equals(M)===!1&&(t.scissor(M.x,M.y,M.z,M.w),xe.copy(M))}function ve(M){He.equals(M)===!1&&(t.viewport(M.x,M.y,M.z,M.w),He.copy(M))}function Re(M,B){let H=l.get(B);H===void 0&&(H=new WeakMap,l.set(B,H));let j=H.get(M);j===void 0&&(j=t.getUniformBlockIndex(B,M.name),H.set(M,j))}function De(M,B){const j=l.get(B).get(M);a.get(B)!==j&&(t.uniformBlockBinding(B,j,M.__bindingPointIndex),a.set(B,j))}function ot(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},N=null,Y={},u={},d=new WeakMap,h=[],p=null,v=!1,_=null,m=null,f=null,g=null,x=null,S=null,R=null,A=new Ve(0,0,0),w=0,P=!1,E=null,y=null,b=null,U=null,I=null,xe.set(0,0,t.canvas.width,t.canvas.height),He.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ue,disable:fe,bindFramebuffer:Ue,drawBuffers:Oe,useProgram:ze,setBlending:ft,setMaterial:Ye,setFlipSided:$e,setCullFace:Se,setLineWidth:dt,setPolygonOffset:Le,setScissorTest:Ie,activeTexture:L,bindTexture:T,unbindTexture:X,compressedTexImage2D:ee,compressedTexImage3D:ie,texImage2D:pe,texImage3D:We,updateUBOMapping:Re,uniformBlockBinding:De,texStorage2D:Fe,texStorage3D:se,texSubImage2D:J,texSubImage3D:Te,compressedTexSubImage2D:le,compressedTexSubImage3D:he,scissor:Ae,viewport:ve,reset:ot}}function tg(t,e,n,i){const r=nC(i);switch(n){case qv:return t*e;case Zv:return t*e;case Qv:return t*e*2;case Jv:return t*e/r.components*r.byteLength;case Th:return t*e/r.components*r.byteLength;case e_:return t*e*2/r.components*r.byteLength;case wh:return t*e*2/r.components*r.byteLength;case Kv:return t*e*3/r.components*r.byteLength;case Bn:return t*e*4/r.components*r.byteLength;case Ah:return t*e*4/r.components*r.byteLength;case Cl:case Rl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case bl:case Pl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $f:case Kf:return Math.max(t,16)*Math.max(e,8)/4;case Yf:case qf:return Math.max(t,8)*Math.max(e,8)/2;case Zf:case Qf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Jf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ed:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case td:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case nd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case id:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case rd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case sd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case od:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ad:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ld:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case cd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case ud:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case fd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case dd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case hd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ll:case pd:case md:return Math.ceil(t/4)*Math.ceil(e/4)*16;case t_:case gd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case vd:case _d:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function nC(t){switch(t){case Ei:case jv:return{byteLength:1,components:1};case da:case Yv:case xa:return{byteLength:2,components:1};case Mh:case Eh:return{byteLength:2,components:4};case Ur:case Sh:case gi:return{byteLength:4,components:1};case $v:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function iC(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(L,T){return p?new OffscreenCanvas(L,T):dc("canvas")}function _(L,T,X){let ee=1;const ie=Ie(L);if((ie.width>X||ie.height>X)&&(ee=X/Math.max(ie.width,ie.height)),ee<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const J=Math.floor(ee*ie.width),Te=Math.floor(ee*ie.height);d===void 0&&(d=v(J,Te));const le=T?v(J,Te):d;return le.width=J,le.height=Te,le.getContext("2d").drawImage(L,0,0,J,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+J+"x"+Te+")."),le}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),L;return L}function m(L){return L.generateMipmaps&&L.minFilter!==wn&&L.minFilter!==kn}function f(L){t.generateMipmap(L)}function g(L,T,X,ee,ie=!1){if(L!==null){if(t[L]!==void 0)return t[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let J=T;if(T===t.RED&&(X===t.FLOAT&&(J=t.R32F),X===t.HALF_FLOAT&&(J=t.R16F),X===t.UNSIGNED_BYTE&&(J=t.R8)),T===t.RED_INTEGER&&(X===t.UNSIGNED_BYTE&&(J=t.R8UI),X===t.UNSIGNED_SHORT&&(J=t.R16UI),X===t.UNSIGNED_INT&&(J=t.R32UI),X===t.BYTE&&(J=t.R8I),X===t.SHORT&&(J=t.R16I),X===t.INT&&(J=t.R32I)),T===t.RG&&(X===t.FLOAT&&(J=t.RG32F),X===t.HALF_FLOAT&&(J=t.RG16F),X===t.UNSIGNED_BYTE&&(J=t.RG8)),T===t.RG_INTEGER&&(X===t.UNSIGNED_BYTE&&(J=t.RG8UI),X===t.UNSIGNED_SHORT&&(J=t.RG16UI),X===t.UNSIGNED_INT&&(J=t.RG32UI),X===t.BYTE&&(J=t.RG8I),X===t.SHORT&&(J=t.RG16I),X===t.INT&&(J=t.RG32I)),T===t.RGB&&X===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),T===t.RGBA){const Te=ie?lc:Je.getTransfer(ee);X===t.FLOAT&&(J=t.RGBA32F),X===t.HALF_FLOAT&&(J=t.RGBA16F),X===t.UNSIGNED_BYTE&&(J=Te===rt?t.SRGB8_ALPHA8:t.RGBA8),X===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),X===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(L,T){let X;return L?T===null||T===Ur||T===Qs?X=t.DEPTH24_STENCIL8:T===gi?X=t.DEPTH32F_STENCIL8:T===da&&(X=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ur||T===Qs?X=t.DEPTH_COMPONENT24:T===gi?X=t.DEPTH_COMPONENT32F:T===da&&(X=t.DEPTH_COMPONENT16),X}function S(L,T){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==wn&&L.minFilter!==kn?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function R(L){const T=L.target;T.removeEventListener("dispose",R),w(T),T.isVideoTexture&&u.delete(T)}function A(L){const T=L.target;T.removeEventListener("dispose",A),E(T)}function w(L){const T=i.get(L);if(T.__webglInit===void 0)return;const X=L.source,ee=h.get(X);if(ee){const ie=ee[T.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&P(L),Object.keys(ee).length===0&&h.delete(X)}i.remove(L)}function P(L){const T=i.get(L);t.deleteTexture(T.__webglTexture);const X=L.source,ee=h.get(X);delete ee[T.__cacheKey],o.memory.textures--}function E(L){const T=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(T.__webglFramebuffer[ee]))for(let ie=0;ie<T.__webglFramebuffer[ee].length;ie++)t.deleteFramebuffer(T.__webglFramebuffer[ee][ie]);else t.deleteFramebuffer(T.__webglFramebuffer[ee]);T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[ee])}else{if(Array.isArray(T.__webglFramebuffer))for(let ee=0;ee<T.__webglFramebuffer.length;ee++)t.deleteFramebuffer(T.__webglFramebuffer[ee]);else t.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ee=0;ee<T.__webglColorRenderbuffer.length;ee++)T.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(T.__webglColorRenderbuffer[ee]);T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const X=L.textures;for(let ee=0,ie=X.length;ee<ie;ee++){const J=i.get(X[ee]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(X[ee])}i.remove(L)}let y=0;function b(){y=0}function U(){const L=y;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),y+=1,L}function I(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function z(L,T){const X=i.get(L);if(L.isVideoTexture&&dt(L),L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){const ee=L.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(X,L,T);return}}n.bindTexture(t.TEXTURE_2D,X.__webglTexture,t.TEXTURE0+T)}function $(L,T){const X=i.get(L);if(L.version>0&&X.__version!==L.version){He(X,L,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,X.__webglTexture,t.TEXTURE0+T)}function G(L,T){const X=i.get(L);if(L.version>0&&X.__version!==L.version){He(X,L,T);return}n.bindTexture(t.TEXTURE_3D,X.__webglTexture,t.TEXTURE0+T)}function Z(L,T){const X=i.get(L);if(L.version>0&&X.__version!==L.version){K(X,L,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture,t.TEXTURE0+T)}const N={[Xf]:t.REPEAT,[Tr]:t.CLAMP_TO_EDGE,[jf]:t.MIRRORED_REPEAT},Y={[wn]:t.NEAREST,[PM]:t.NEAREST_MIPMAP_NEAREST,[Ga]:t.NEAREST_MIPMAP_LINEAR,[kn]:t.LINEAR,[gu]:t.LINEAR_MIPMAP_NEAREST,[wr]:t.LINEAR_MIPMAP_LINEAR},Q={[NM]:t.NEVER,[zM]:t.ALWAYS,[UM]:t.LESS,[i_]:t.LEQUAL,[FM]:t.EQUAL,[BM]:t.GEQUAL,[OM]:t.GREATER,[kM]:t.NOTEQUAL};function oe(L,T){if(T.type===gi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===kn||T.magFilter===gu||T.magFilter===Ga||T.magFilter===wr||T.minFilter===kn||T.minFilter===gu||T.minFilter===Ga||T.minFilter===wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(L,t.TEXTURE_WRAP_S,N[T.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,N[T.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,N[T.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,Y[T.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,Y[T.minFilter]),T.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,Q[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===wn||T.minFilter!==Ga&&T.minFilter!==wr||T.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");t.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function xe(L,T){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",R));const ee=T.source;let ie=h.get(ee);ie===void 0&&(ie={},h.set(ee,ie));const J=I(T);if(J!==L.__cacheKey){ie[J]===void 0&&(ie[J]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ie[J].usedTimes++;const Te=ie[L.__cacheKey];Te!==void 0&&(ie[L.__cacheKey].usedTimes--,Te.usedTimes===0&&P(T)),L.__cacheKey=J,L.__webglTexture=ie[J].texture}return X}function He(L,T,X){let ee=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ee=t.TEXTURE_3D);const ie=xe(L,T),J=T.source;n.bindTexture(ee,L.__webglTexture,t.TEXTURE0+X);const Te=i.get(J);if(J.version!==Te.__version||ie===!0){n.activeTexture(t.TEXTURE0+X);const le=Je.getPrimaries(Je.workingColorSpace),he=T.colorSpace===Hi?null:Je.getPrimaries(T.colorSpace),Fe=T.colorSpace===Hi||le===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let se=_(T.image,!1,r.maxTextureSize);se=Le(T,se);const pe=s.convert(T.format,T.colorSpace),We=s.convert(T.type);let Ae=g(T.internalFormat,pe,We,T.colorSpace,T.isVideoTexture);oe(ee,T);let ve;const Re=T.mipmaps,De=T.isVideoTexture!==!0,ot=Te.__version===void 0||ie===!0,M=J.dataReady,B=S(T,se);if(T.isDepthTexture)Ae=x(T.format===Js,T.type),ot&&(De?n.texStorage2D(t.TEXTURE_2D,1,Ae,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Ae,se.width,se.height,0,pe,We,null));else if(T.isDataTexture)if(Re.length>0){De&&ot&&n.texStorage2D(t.TEXTURE_2D,B,Ae,Re[0].width,Re[0].height);for(let H=0,j=Re.length;H<j;H++)ve=Re[H],De?M&&n.texSubImage2D(t.TEXTURE_2D,H,0,0,ve.width,ve.height,pe,We,ve.data):n.texImage2D(t.TEXTURE_2D,H,Ae,ve.width,ve.height,0,pe,We,ve.data);T.generateMipmaps=!1}else De?(ot&&n.texStorage2D(t.TEXTURE_2D,B,Ae,se.width,se.height),M&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,pe,We,se.data)):n.texImage2D(t.TEXTURE_2D,0,Ae,se.width,se.height,0,pe,We,se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){De&&ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,B,Ae,Re[0].width,Re[0].height,se.depth);for(let H=0,j=Re.length;H<j;H++)if(ve=Re[H],T.format!==Bn)if(pe!==null)if(De){if(M)if(T.layerUpdates.size>0){const te=tg(ve.width,ve.height,T.format,T.type);for(const Me of T.layerUpdates){const be=ve.data.subarray(Me*te/ve.data.BYTES_PER_ELEMENT,(Me+1)*te/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,Me,ve.width,ve.height,1,pe,be,0,0)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,0,ve.width,ve.height,se.depth,pe,ve.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,H,Ae,ve.width,ve.height,se.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?M&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,0,ve.width,ve.height,se.depth,pe,We,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,H,Ae,ve.width,ve.height,se.depth,0,pe,We,ve.data)}else{De&&ot&&n.texStorage2D(t.TEXTURE_2D,B,Ae,Re[0].width,Re[0].height);for(let H=0,j=Re.length;H<j;H++)ve=Re[H],T.format!==Bn?pe!==null?De?M&&n.compressedTexSubImage2D(t.TEXTURE_2D,H,0,0,ve.width,ve.height,pe,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,H,Ae,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?M&&n.texSubImage2D(t.TEXTURE_2D,H,0,0,ve.width,ve.height,pe,We,ve.data):n.texImage2D(t.TEXTURE_2D,H,Ae,ve.width,ve.height,0,pe,We,ve.data)}else if(T.isDataArrayTexture)if(De){if(ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,B,Ae,se.width,se.height,se.depth),M)if(T.layerUpdates.size>0){const H=tg(se.width,se.height,T.format,T.type);for(const j of T.layerUpdates){const te=se.data.subarray(j*H/se.data.BYTES_PER_ELEMENT,(j+1)*H/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,j,se.width,se.height,1,pe,We,te)}T.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,pe,We,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ae,se.width,se.height,se.depth,0,pe,We,se.data);else if(T.isData3DTexture)De?(ot&&n.texStorage3D(t.TEXTURE_3D,B,Ae,se.width,se.height,se.depth),M&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,pe,We,se.data)):n.texImage3D(t.TEXTURE_3D,0,Ae,se.width,se.height,se.depth,0,pe,We,se.data);else if(T.isFramebufferTexture){if(ot)if(De)n.texStorage2D(t.TEXTURE_2D,B,Ae,se.width,se.height);else{let H=se.width,j=se.height;for(let te=0;te<B;te++)n.texImage2D(t.TEXTURE_2D,te,Ae,H,j,0,pe,We,null),H>>=1,j>>=1}}else if(Re.length>0){if(De&&ot){const H=Ie(Re[0]);n.texStorage2D(t.TEXTURE_2D,B,Ae,H.width,H.height)}for(let H=0,j=Re.length;H<j;H++)ve=Re[H],De?M&&n.texSubImage2D(t.TEXTURE_2D,H,0,0,pe,We,ve):n.texImage2D(t.TEXTURE_2D,H,Ae,pe,We,ve);T.generateMipmaps=!1}else if(De){if(ot){const H=Ie(se);n.texStorage2D(t.TEXTURE_2D,B,Ae,H.width,H.height)}M&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,pe,We,se)}else n.texImage2D(t.TEXTURE_2D,0,Ae,pe,We,se);m(T)&&f(ee),Te.__version=J.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function K(L,T,X){if(T.image.length!==6)return;const ee=xe(L,T),ie=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+X);const J=i.get(ie);if(ie.version!==J.__version||ee===!0){n.activeTexture(t.TEXTURE0+X);const Te=Je.getPrimaries(Je.workingColorSpace),le=T.colorSpace===Hi?null:Je.getPrimaries(T.colorSpace),he=T.colorSpace===Hi||Te===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Fe=T.isCompressedTexture||T.image[0].isCompressedTexture,se=T.image[0]&&T.image[0].isDataTexture,pe=[];for(let j=0;j<6;j++)!Fe&&!se?pe[j]=_(T.image[j],!0,r.maxCubemapSize):pe[j]=se?T.image[j].image:T.image[j],pe[j]=Le(T,pe[j]);const We=pe[0],Ae=s.convert(T.format,T.colorSpace),ve=s.convert(T.type),Re=g(T.internalFormat,Ae,ve,T.colorSpace),De=T.isVideoTexture!==!0,ot=J.__version===void 0||ee===!0,M=ie.dataReady;let B=S(T,We);oe(t.TEXTURE_CUBE_MAP,T);let H;if(Fe){De&&ot&&n.texStorage2D(t.TEXTURE_CUBE_MAP,B,Re,We.width,We.height);for(let j=0;j<6;j++){H=pe[j].mipmaps;for(let te=0;te<H.length;te++){const Me=H[te];T.format!==Bn?Ae!==null?De?M&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,te,0,0,Me.width,Me.height,Ae,Me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,te,Re,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?M&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,te,0,0,Me.width,Me.height,Ae,ve,Me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,te,Re,Me.width,Me.height,0,Ae,ve,Me.data)}}}else{if(H=T.mipmaps,De&&ot){H.length>0&&B++;const j=Ie(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,B,Re,j.width,j.height)}for(let j=0;j<6;j++)if(se){De?M&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,pe[j].width,pe[j].height,Ae,ve,pe[j].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Re,pe[j].width,pe[j].height,0,Ae,ve,pe[j].data);for(let te=0;te<H.length;te++){const be=H[te].image[j].image;De?M&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,te+1,0,0,be.width,be.height,Ae,ve,be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,te+1,Re,be.width,be.height,0,Ae,ve,be.data)}}else{De?M&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ae,ve,pe[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Re,Ae,ve,pe[j]);for(let te=0;te<H.length;te++){const Me=H[te];De?M&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,te+1,0,0,Ae,ve,Me.image[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,te+1,Re,Ae,ve,Me.image[j])}}}m(T)&&f(t.TEXTURE_CUBE_MAP),J.__version=ie.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ne(L,T,X,ee,ie,J){const Te=s.convert(X.format,X.colorSpace),le=s.convert(X.type),he=g(X.internalFormat,Te,le,X.colorSpace);if(!i.get(T).__hasExternalTextures){const se=Math.max(1,T.width>>J),pe=Math.max(1,T.height>>J);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,J,he,se,pe,T.depth,0,Te,le,null):n.texImage2D(ie,J,he,se,pe,0,Te,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),Se(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,ie,i.get(X).__webglTexture,0,$e(T)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,ie,i.get(X).__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(L,T,X){if(t.bindRenderbuffer(t.RENDERBUFFER,L),T.depthBuffer){const ee=T.depthTexture,ie=ee&&ee.isDepthTexture?ee.type:null,J=x(T.stencilBuffer,ie),Te=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=$e(T);Se(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,J,T.width,T.height):X?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,J,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,J,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,L)}else{const ee=T.textures;for(let ie=0;ie<ee.length;ie++){const J=ee[ie],Te=s.convert(J.format,J.colorSpace),le=s.convert(J.type),he=g(J.internalFormat,Te,le,J.colorSpace),Fe=$e(T);X&&Se(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,he,T.width,T.height):Se(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Fe,he,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,he,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function fe(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),z(T.depthTexture,0);const ee=i.get(T.depthTexture).__webglTexture,ie=$e(T);if(T.depthTexture.format===Us)Se(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(T.depthTexture.format===Js)Se(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ue(L){const T=i.get(L),X=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");fe(T.__webglFramebuffer,L)}else if(X){T.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[ee]),T.__webglDepthbuffer[ee]=t.createRenderbuffer(),ue(T.__webglDepthbuffer[ee],L,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=t.createRenderbuffer(),ue(T.__webglDepthbuffer,L,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Oe(L,T,X){const ee=i.get(L);T!==void 0&&ne(ee.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),X!==void 0&&Ue(L)}function ze(L){const T=L.texture,X=i.get(L),ee=i.get(T);L.addEventListener("dispose",A);const ie=L.textures,J=L.isWebGLCubeRenderTarget===!0,Te=ie.length>1;if(Te||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=T.version,o.memory.textures++),J){X.__webglFramebuffer=[];for(let le=0;le<6;le++)if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer[le]=[];for(let he=0;he<T.mipmaps.length;he++)X.__webglFramebuffer[le][he]=t.createFramebuffer()}else X.__webglFramebuffer[le]=t.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer=[];for(let le=0;le<T.mipmaps.length;le++)X.__webglFramebuffer[le]=t.createFramebuffer()}else X.__webglFramebuffer=t.createFramebuffer();if(Te)for(let le=0,he=ie.length;le<he;le++){const Fe=i.get(ie[le]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=t.createTexture(),o.memory.textures++)}if(L.samples>0&&Se(L)===!1){X.__webglMultisampledFramebuffer=t.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let le=0;le<ie.length;le++){const he=ie[le];X.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,X.__webglColorRenderbuffer[le]);const Fe=s.convert(he.format,he.colorSpace),se=s.convert(he.type),pe=g(he.internalFormat,Fe,se,he.colorSpace,L.isXRRenderTarget===!0),We=$e(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,We,pe,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,X.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=t.createRenderbuffer(),ue(X.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),oe(t.TEXTURE_CUBE_MAP,T);for(let le=0;le<6;le++)if(T.mipmaps&&T.mipmaps.length>0)for(let he=0;he<T.mipmaps.length;he++)ne(X.__webglFramebuffer[le][he],L,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,he);else ne(X.__webglFramebuffer[le],L,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(T)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let le=0,he=ie.length;le<he;le++){const Fe=ie[le],se=i.get(Fe);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),oe(t.TEXTURE_2D,Fe),ne(X.__webglFramebuffer,L,Fe,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,0),m(Fe)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(le=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,ee.__webglTexture),oe(le,T),T.mipmaps&&T.mipmaps.length>0)for(let he=0;he<T.mipmaps.length;he++)ne(X.__webglFramebuffer[he],L,T,t.COLOR_ATTACHMENT0,le,he);else ne(X.__webglFramebuffer,L,T,t.COLOR_ATTACHMENT0,le,0);m(T)&&f(le),n.unbindTexture()}L.depthBuffer&&Ue(L)}function nt(L){const T=L.textures;for(let X=0,ee=T.length;X<ee;X++){const ie=T[X];if(m(ie)){const J=L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Te=i.get(ie).__webglTexture;n.bindTexture(J,Te),f(J),n.unbindTexture()}}}const D=[],ft=[];function Ye(L){if(L.samples>0){if(Se(L)===!1){const T=L.textures,X=L.width,ee=L.height;let ie=t.COLOR_BUFFER_BIT;const J=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(L),le=T.length>1;if(le)for(let he=0;he<T.length;he++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let he=0;he<T.length;he++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[he]);const Fe=i.get(T[he]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Fe,0)}t.blitFramebuffer(0,0,X,ee,0,0,X,ee,ie,t.NEAREST),l===!0&&(D.length=0,ft.length=0,D.push(t.COLOR_ATTACHMENT0+he),L.depthBuffer&&L.resolveDepthBuffer===!1&&(D.push(J),ft.push(J),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ft)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,D))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let he=0;he<T.length;he++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,Te.__webglColorRenderbuffer[he]);const Fe=i.get(T[he]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,Fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const T=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[T])}}}function $e(L){return Math.min(r.maxSamples,L.samples)}function Se(L){const T=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function dt(L){const T=o.render.frame;u.get(L)!==T&&(u.set(L,T),L.update())}function Le(L,T){const X=L.colorSpace,ee=L.format,ie=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==lr&&X!==Hi&&(Je.getTransfer(X)===rt?(ee!==Bn||ie!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),T}function Ie(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=b,this.setTexture2D=z,this.setTexture2DArray=$,this.setTexture3D=G,this.setTextureCube=Z,this.rebindTextures=Oe,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Se}function rC(t,e){function n(i,r=Hi){let s;const o=Je.getTransfer(r);if(i===Ei)return t.UNSIGNED_BYTE;if(i===Mh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Eh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===$v)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===jv)return t.BYTE;if(i===Yv)return t.SHORT;if(i===da)return t.UNSIGNED_SHORT;if(i===Sh)return t.INT;if(i===Ur)return t.UNSIGNED_INT;if(i===gi)return t.FLOAT;if(i===xa)return t.HALF_FLOAT;if(i===qv)return t.ALPHA;if(i===Kv)return t.RGB;if(i===Bn)return t.RGBA;if(i===Zv)return t.LUMINANCE;if(i===Qv)return t.LUMINANCE_ALPHA;if(i===Us)return t.DEPTH_COMPONENT;if(i===Js)return t.DEPTH_STENCIL;if(i===Jv)return t.RED;if(i===Th)return t.RED_INTEGER;if(i===e_)return t.RG;if(i===wh)return t.RG_INTEGER;if(i===Ah)return t.RGBA_INTEGER;if(i===Cl||i===Rl||i===bl||i===Pl)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Cl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Cl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Rl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Yf||i===$f||i===qf||i===Kf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Yf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$f)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Kf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Zf||i===Qf||i===Jf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Zf||i===Qf)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Jf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ed||i===td||i===nd||i===id||i===rd||i===sd||i===od||i===ad||i===ld||i===cd||i===ud||i===fd||i===dd||i===hd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ed)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===td)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===id)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===od)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ad)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ld)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===cd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ud)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ll||i===pd||i===md)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ll)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===pd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===md)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===t_||i===gd||i===vd||i===_d)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ll)return s.COMPRESSED_RED_RGTC1_EXT;if(i===gd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_d)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class sC extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class fl extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oC={type:"move"};class Hu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(oC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new fl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const aC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lC=`
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

}`;class cC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new ln,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new rr({vertexShader:aC,fragmentShader:lC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Jn(new Fc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uC extends Hr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,v=null;const _=new cC,m=n.getContextAttributes();let f=null,g=null;const x=[],S=[],R=new Ne;let A=null;const w=new pn;w.layers.enable(1),w.viewport=new Rt;const P=new pn;P.layers.enable(2),P.viewport=new Rt;const E=[w,P],y=new sC;y.layers.enable(1),y.layers.enable(2);let b=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ne=x[K];return ne===void 0&&(ne=new Hu,x[K]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(K){let ne=x[K];return ne===void 0&&(ne=new Hu,x[K]=ne),ne.getGripSpace()},this.getHand=function(K){let ne=x[K];return ne===void 0&&(ne=new Hu,x[K]=ne),ne.getHandSpace()};function I(K){const ne=S.indexOf(K.inputSource);if(ne===-1)return;const ue=x[ne];ue!==void 0&&(ue.update(K.inputSource,K.frame,c||o),ue.dispatchEvent({type:K.type,data:K.inputSource}))}function z(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",$);for(let K=0;K<x.length;K++){const ne=S[K];ne!==null&&(S[K]=null,x[K].disconnect(ne))}b=null,U=null,_.reset(),e.setRenderTarget(f),p=null,h=null,d=null,r=null,g=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",z),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Fr(p.framebufferWidth,p.framebufferHeight,{format:Bn,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,ue=null,fe=null;m.depth&&(fe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=m.stencil?Js:Us,ue=m.stencil?Qs:Ur);const Ue={colorFormat:n.RGBA8,depthFormat:fe,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(Ue),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new Fr(h.textureWidth,h.textureHeight,{format:Bn,type:Ei,depthTexture:new v_(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(K){for(let ne=0;ne<K.removed.length;ne++){const ue=K.removed[ne],fe=S.indexOf(ue);fe>=0&&(S[fe]=null,x[fe].disconnect(ue))}for(let ne=0;ne<K.added.length;ne++){const ue=K.added[ne];let fe=S.indexOf(ue);if(fe===-1){for(let Oe=0;Oe<x.length;Oe++)if(Oe>=S.length){S.push(ue),fe=Oe;break}else if(S[Oe]===null){S[Oe]=ue,fe=Oe;break}if(fe===-1)break}const Ue=x[fe];Ue&&Ue.connect(ue)}}const G=new k,Z=new k;function N(K,ne,ue){G.setFromMatrixPosition(ne.matrixWorld),Z.setFromMatrixPosition(ue.matrixWorld);const fe=G.distanceTo(Z),Ue=ne.projectionMatrix.elements,Oe=ue.projectionMatrix.elements,ze=Ue[14]/(Ue[10]-1),nt=Ue[14]/(Ue[10]+1),D=(Ue[9]+1)/Ue[5],ft=(Ue[9]-1)/Ue[5],Ye=(Ue[8]-1)/Ue[0],$e=(Oe[8]+1)/Oe[0],Se=ze*Ye,dt=ze*$e,Le=fe/(-Ye+$e),Ie=Le*-Ye;ne.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ie),K.translateZ(Le),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const L=ze+Le,T=nt+Le,X=Se-Ie,ee=dt+(fe-Ie),ie=D*nt/T*L,J=ft*nt/T*L;K.projectionMatrix.makePerspective(X,ee,ie,J,L,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function Y(K,ne){ne===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ne.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;_.texture!==null&&(K.near=_.depthNear,K.far=_.depthFar),y.near=P.near=w.near=K.near,y.far=P.far=w.far=K.far,(b!==y.near||U!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,U=y.far,w.near=b,w.far=U,P.near=b,P.far=U,w.updateProjectionMatrix(),P.updateProjectionMatrix(),K.updateProjectionMatrix());const ne=K.parent,ue=y.cameras;Y(y,ne);for(let fe=0;fe<ue.length;fe++)Y(ue[fe],ne);ue.length===2?N(y,w,P):y.projectionMatrix.copy(w.projectionMatrix),Q(K,y,ne)};function Q(K,ne,ue){ue===null?K.matrix.copy(ne.matrixWorld):(K.matrix.copy(ue.matrixWorld),K.matrix.invert(),K.matrix.multiply(ne.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=eo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let oe=null;function xe(K,ne){if(u=ne.getViewerPose(c||o),v=ne,u!==null){const ue=u.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let fe=!1;ue.length!==y.cameras.length&&(y.cameras.length=0,fe=!0);for(let Oe=0;Oe<ue.length;Oe++){const ze=ue[Oe];let nt=null;if(p!==null)nt=p.getViewport(ze);else{const ft=d.getViewSubImage(h,ze);nt=ft.viewport,Oe===0&&(e.setRenderTargetTextures(g,ft.colorTexture,h.ignoreDepthValues?void 0:ft.depthStencilTexture),e.setRenderTarget(g))}let D=E[Oe];D===void 0&&(D=new pn,D.layers.enable(Oe),D.viewport=new Rt,E[Oe]=D),D.matrix.fromArray(ze.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(ze.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(nt.x,nt.y,nt.width,nt.height),Oe===0&&(y.matrix.copy(D.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),fe===!0&&y.cameras.push(D)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const Oe=d.getDepthInformation(ue[0]);Oe&&Oe.isValid&&Oe.texture&&_.init(e,Oe,r.renderState)}}for(let ue=0;ue<x.length;ue++){const fe=S[ue],Ue=x[ue];fe!==null&&Ue!==void 0&&Ue.update(fe,ne,c||o)}oe&&oe(K,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),v=null}const He=new m_;He.setAnimationLoop(xe),this.setAnimationLoop=function(K){oe=K},this.dispose=function(){}}}const mr=new ii,fC=new gt;function dC(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,d_(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,g,x,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),v(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,g,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===an&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===an&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const g=e.get(f),x=g.envMap,S=g.envMapRotation;x&&(m.envMap.value=x,mr.copy(S),mr.x*=-1,mr.y*=-1,mr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),m.envMapRotation.value.setFromMatrix4(fC.makeRotationFromEuler(mr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,g,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*g,m.scale.value=x*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,g){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===an&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const g=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function hC(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,x){const S=x.program;i.uniformBlockBinding(g,S)}function c(g,x){let S=r[g.id];S===void 0&&(v(g),S=u(g),r[g.id]=S,g.addEventListener("dispose",m));const R=x.program;i.updateUBOMapping(g,R);const A=e.render.frame;s[g.id]!==A&&(h(g),s[g.id]=A)}function u(g){const x=d();g.__bindingPointIndex=x;const S=t.createBuffer(),R=g.__size,A=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,R,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,S),S}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const x=r[g.id],S=g.uniforms,R=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let A=0,w=S.length;A<w;A++){const P=Array.isArray(S[A])?S[A]:[S[A]];for(let E=0,y=P.length;E<y;E++){const b=P[E];if(p(b,A,E,R)===!0){const U=b.__offset,I=Array.isArray(b.value)?b.value:[b.value];let z=0;for(let $=0;$<I.length;$++){const G=I[$],Z=_(G);typeof G=="number"||typeof G=="boolean"?(b.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,U+z,b.__data)):G.isMatrix3?(b.__data[0]=G.elements[0],b.__data[1]=G.elements[1],b.__data[2]=G.elements[2],b.__data[3]=0,b.__data[4]=G.elements[3],b.__data[5]=G.elements[4],b.__data[6]=G.elements[5],b.__data[7]=0,b.__data[8]=G.elements[6],b.__data[9]=G.elements[7],b.__data[10]=G.elements[8],b.__data[11]=0):(G.toArray(b.__data,z),z+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,U,b.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,x,S,R){const A=g.value,w=x+"_"+S;if(R[w]===void 0)return typeof A=="number"||typeof A=="boolean"?R[w]=A:R[w]=A.clone(),!0;{const P=R[w];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return R[w]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function v(g){const x=g.uniforms;let S=0;const R=16;for(let w=0,P=x.length;w<P;w++){const E=Array.isArray(x[w])?x[w]:[x[w]];for(let y=0,b=E.length;y<b;y++){const U=E[y],I=Array.isArray(U.value)?U.value:[U.value];for(let z=0,$=I.length;z<$;z++){const G=I[z],Z=_(G),N=S%R,Y=N%Z.boundary,Q=N+Y;S+=Y,Q!==0&&R-Q<Z.storage&&(S+=R-Q),U.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=Z.storage}}}const A=S%R;return A>0&&(S+=R-A),g.__size=S,g.__cache={},this}function _(g){const x={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(x.boundary=4,x.storage=4):g.isVector2?(x.boundary=8,x.storage=8):g.isVector3||g.isColor?(x.boundary=16,x.storage=12):g.isVector4?(x.boundary=16,x.storage=16):g.isMatrix3?(x.boundary=48,x.storage=48):g.isMatrix4?(x.boundary=64,x.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),x}function m(g){const x=g.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function f(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class pC{constructor(e={}){const{canvas:n=r1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),v=new Int32Array(4);let _=null,m=null;const f=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$n,this.toneMapping=Ji,this.toneMappingExposure=1;const x=this;let S=!1,R=0,A=0,w=null,P=-1,E=null;const y=new Rt,b=new Rt;let U=null;const I=new Ve(0);let z=0,$=n.width,G=n.height,Z=1,N=null,Y=null;const Q=new Rt(0,0,$,G),oe=new Rt(0,0,$,G);let xe=!1;const He=new Ph;let K=!1,ne=!1;const ue=new gt,fe=new k,Ue=new Rt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function nt(){return w===null?Z:1}let D=i;function ft(C,F){return n.getContext(C,F)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${xh}`),n.addEventListener("webglcontextlost",H,!1),n.addEventListener("webglcontextrestored",j,!1),n.addEventListener("webglcontextcreationerror",te,!1),D===null){const F="webgl2";if(D=ft(F,C),D===null)throw ft(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ye,$e,Se,dt,Le,Ie,L,T,X,ee,ie,J,Te,le,he,Fe,se,pe,We,Ae,ve,Re,De,ot;function M(){Ye=new yw(D),Ye.init(),Re=new rC(D,Ye),$e=new pw(D,Ye,e,Re),Se=new tC(D),dt=new Ew(D),Le=new HA,Ie=new iC(D,Ye,Se,Le,$e,Re,dt),L=new gw(x),T=new xw(x),X=new P1(D),De=new dw(D,X),ee=new Sw(D,X,dt,De),ie=new ww(D,ee,X,dt),We=new Tw(D,$e,Ie),Fe=new mw(Le),J=new zA(x,L,T,Ye,$e,De,Fe),Te=new dC(x,Le),le=new GA,he=new qA(Ye),pe=new fw(x,L,T,Se,ie,h,l),se=new eC(x,ie,$e),ot=new hC(D,dt,$e,Se),Ae=new hw(D,Ye,dt),ve=new Mw(D,Ye,dt),dt.programs=J.programs,x.capabilities=$e,x.extensions=Ye,x.properties=Le,x.renderLists=le,x.shadowMap=se,x.state=Se,x.info=dt}M();const B=new uC(x,D);this.xr=B,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const C=Ye.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ye.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(C){C!==void 0&&(Z=C,this.setSize($,G,!1))},this.getSize=function(C){return C.set($,G)},this.setSize=function(C,F,V=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=C,G=F,n.width=Math.floor(C*Z),n.height=Math.floor(F*Z),V===!0&&(n.style.width=C+"px",n.style.height=F+"px"),this.setViewport(0,0,C,F)},this.getDrawingBufferSize=function(C){return C.set($*Z,G*Z).floor()},this.setDrawingBufferSize=function(C,F,V){$=C,G=F,Z=V,n.width=Math.floor(C*V),n.height=Math.floor(F*V),this.setViewport(0,0,C,F)},this.getCurrentViewport=function(C){return C.copy(y)},this.getViewport=function(C){return C.copy(Q)},this.setViewport=function(C,F,V,W){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,F,V,W),Se.viewport(y.copy(Q).multiplyScalar(Z).round())},this.getScissor=function(C){return C.copy(oe)},this.setScissor=function(C,F,V,W){C.isVector4?oe.set(C.x,C.y,C.z,C.w):oe.set(C,F,V,W),Se.scissor(b.copy(oe).multiplyScalar(Z).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(C){Se.setScissorTest(xe=C)},this.setOpaqueSort=function(C){N=C},this.setTransparentSort=function(C){Y=C},this.getClearColor=function(C){return C.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(C=!0,F=!0,V=!0){let W=0;if(C){let O=!1;if(w!==null){const ae=w.texture.format;O=ae===Ah||ae===wh||ae===Th}if(O){const ae=w.texture.type,de=ae===Ei||ae===Ur||ae===da||ae===Qs||ae===Mh||ae===Eh,_e=pe.getClearColor(),ye=pe.getClearAlpha(),Ce=_e.r,Pe=_e.g,we=_e.b;de?(p[0]=Ce,p[1]=Pe,p[2]=we,p[3]=ye,D.clearBufferuiv(D.COLOR,0,p)):(v[0]=Ce,v[1]=Pe,v[2]=we,v[3]=ye,D.clearBufferiv(D.COLOR,0,v))}else W|=D.COLOR_BUFFER_BIT}F&&(W|=D.DEPTH_BUFFER_BIT),V&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",H,!1),n.removeEventListener("webglcontextrestored",j,!1),n.removeEventListener("webglcontextcreationerror",te,!1),le.dispose(),he.dispose(),Le.dispose(),L.dispose(),T.dispose(),ie.dispose(),De.dispose(),ot.dispose(),J.dispose(),B.dispose(),B.removeEventListener("sessionstart",xt),B.removeEventListener("sessionend",Ai),Ft.stop()};function H(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const C=dt.autoReset,F=se.enabled,V=se.autoUpdate,W=se.needsUpdate,O=se.type;M(),dt.autoReset=C,se.enabled=F,se.autoUpdate=V,se.needsUpdate=W,se.type=O}function te(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Me(C){const F=C.target;F.removeEventListener("dispose",Me),be(F)}function be(C){vt(C),Le.remove(C)}function vt(C){const F=Le.get(C).programs;F!==void 0&&(F.forEach(function(V){J.releaseProgram(V)}),C.isShaderMaterial&&J.releaseShaderCache(C))}this.renderBufferDirect=function(C,F,V,W,O,ae){F===null&&(F=Oe);const de=O.isMesh&&O.matrixWorld.determinant()<0,_e=R_(C,F,V,W,O);Se.setMaterial(W,de);let ye=V.index,Ce=1;if(W.wireframe===!0){if(ye=ee.getWireframeAttribute(V),ye===void 0)return;Ce=2}const Pe=V.drawRange,we=V.attributes.position;let Ke=Pe.start*Ce,ht=(Pe.start+Pe.count)*Ce;ae!==null&&(Ke=Math.max(Ke,ae.start*Ce),ht=Math.min(ht,(ae.start+ae.count)*Ce)),ye!==null?(Ke=Math.max(Ke,0),ht=Math.min(ht,ye.count)):we!=null&&(Ke=Math.max(Ke,0),ht=Math.min(ht,we.count));const pt=ht-Ke;if(pt<0||pt===1/0)return;De.setup(O,W,_e,V,ye);let cn,Ze=Ae;if(ye!==null&&(cn=X.get(ye),Ze=ve,Ze.setIndex(cn)),O.isMesh)W.wireframe===!0?(Se.setLineWidth(W.wireframeLinewidth*nt()),Ze.setMode(D.LINES)):Ze.setMode(D.TRIANGLES);else if(O.isLine){let Ee=W.linewidth;Ee===void 0&&(Ee=1),Se.setLineWidth(Ee*nt()),O.isLineSegments?Ze.setMode(D.LINES):O.isLineLoop?Ze.setMode(D.LINE_LOOP):Ze.setMode(D.LINE_STRIP)}else O.isPoints?Ze.setMode(D.POINTS):O.isSprite&&Ze.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Ze.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))Ze.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ee=O._multiDrawStarts,Ot=O._multiDrawCounts,Qe=O._multiDrawCount,bn=ye?X.get(ye).bytesPerElement:1,Vr=Le.get(W).currentProgram.getUniforms();for(let un=0;un<Qe;un++)Vr.setValue(D,"_gl_DrawID",un),Ze.render(Ee[un]/bn,Ot[un])}else if(O.isInstancedMesh)Ze.renderInstances(Ke,pt,O.count);else if(V.isInstancedBufferGeometry){const Ee=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ot=Math.min(V.instanceCount,Ee);Ze.renderInstances(Ke,pt,Ot)}else Ze.render(Ke,pt)};function Et(C,F,V){C.transparent===!0&&C.side===Zn&&C.forceSinglePass===!1?(C.side=an,C.needsUpdate=!0,Ma(C,F,V),C.side=ir,C.needsUpdate=!0,Ma(C,F,V),C.side=Zn):Ma(C,F,V)}this.compile=function(C,F,V=null){V===null&&(V=C),m=he.get(V),m.init(F),g.push(m),V.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),C!==V&&C.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const W=new Set;return C.traverse(function(O){const ae=O.material;if(ae)if(Array.isArray(ae))for(let de=0;de<ae.length;de++){const _e=ae[de];Et(_e,V,O),W.add(_e)}else Et(ae,V,O),W.add(ae)}),g.pop(),m=null,W},this.compileAsync=function(C,F,V=null){const W=this.compile(C,F,V);return new Promise(O=>{function ae(){if(W.forEach(function(de){Le.get(de).currentProgram.isReady()&&W.delete(de)}),W.size===0){O(C);return}setTimeout(ae,10)}Ye.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Xe=null;function Tt(C){Xe&&Xe(C)}function xt(){Ft.stop()}function Ai(){Ft.start()}const Ft=new m_;Ft.setAnimationLoop(Tt),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(C){Xe=C,B.setAnimationLoop(C),C===null?Ft.stop():Ft.start()},B.addEventListener("sessionstart",xt),B.addEventListener("sessionend",Ai),this.render=function(C,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(F),F=B.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,F,w),m=he.get(C,g.length),m.init(F),g.push(m),ue.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),He.setFromProjectionMatrix(ue),ne=this.localClippingEnabled,K=Fe.init(this.clippingPlanes,ne),_=le.get(C,f.length),_.init(),f.push(_),B.enabled===!0&&B.isPresenting===!0){const ae=x.xr.getDepthSensingMesh();ae!==null&&ri(ae,F,-1/0,x.sortObjects)}ri(C,F,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(N,Y),ze=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,ze&&pe.addToRenderList(_,C),this.info.render.frame++,K===!0&&Fe.beginShadows();const V=m.state.shadowsArray;se.render(V,C,F),K===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=_.opaque,O=_.transmissive;if(m.setupLights(),F.isArrayCamera){const ae=F.cameras;if(O.length>0)for(let de=0,_e=ae.length;de<_e;de++){const ye=ae[de];co(W,O,C,ye)}ze&&pe.render(C);for(let de=0,_e=ae.length;de<_e;de++){const ye=ae[de];cr(_,C,ye,ye.viewport)}}else O.length>0&&co(W,O,C,F),ze&&pe.render(C),cr(_,C,F);w!==null&&(Ie.updateMultisampleRenderTarget(w),Ie.updateRenderTargetMipmap(w)),C.isScene===!0&&C.onAfterRender(x,C,F),De.resetDefaultState(),P=-1,E=null,g.pop(),g.length>0?(m=g[g.length-1],K===!0&&Fe.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function ri(C,F,V,W){if(C.visible===!1)return;if(C.layers.test(F.layers)){if(C.isGroup)V=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(F);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||He.intersectsSprite(C)){W&&Ue.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ue);const de=ie.update(C),_e=C.material;_e.visible&&_.push(C,de,_e,V,Ue.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||He.intersectsObject(C))){const de=ie.update(C),_e=C.material;if(W&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ue.copy(C.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Ue.copy(de.boundingSphere.center)),Ue.applyMatrix4(C.matrixWorld).applyMatrix4(ue)),Array.isArray(_e)){const ye=de.groups;for(let Ce=0,Pe=ye.length;Ce<Pe;Ce++){const we=ye[Ce],Ke=_e[we.materialIndex];Ke&&Ke.visible&&_.push(C,de,Ke,V,Ue.z,we)}}else _e.visible&&_.push(C,de,_e,V,Ue.z,null)}}const ae=C.children;for(let de=0,_e=ae.length;de<_e;de++)ri(ae[de],F,V,W)}function cr(C,F,V,W){const O=C.opaque,ae=C.transmissive,de=C.transparent;m.setupLightsView(V),K===!0&&Fe.setGlobalState(x.clippingPlanes,V),W&&Se.viewport(y.copy(W)),O.length>0&&Sa(O,F,V),ae.length>0&&Sa(ae,F,V),de.length>0&&Sa(de,F,V),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function co(C,F,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new Fr(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?xa:Ei,minFilter:wr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ae=m.state.transmissionRenderTarget[W.id],de=W.viewport||y;ae.setSize(de.z,de.w);const _e=x.getRenderTarget();x.setRenderTarget(ae),x.getClearColor(I),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),x.clear(),ze&&pe.render(V);const ye=x.toneMapping;x.toneMapping=Ji;const Ce=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),K===!0&&Fe.setGlobalState(x.clippingPlanes,W),Sa(C,V,W),Ie.updateMultisampleRenderTarget(ae),Ie.updateRenderTargetMipmap(ae),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let we=0,Ke=F.length;we<Ke;we++){const ht=F[we],pt=ht.object,cn=ht.geometry,Ze=ht.material,Ee=ht.group;if(Ze.side===Zn&&pt.layers.test(W.layers)){const Ot=Ze.side;Ze.side=an,Ze.needsUpdate=!0,Uh(pt,V,W,cn,Ze,Ee),Ze.side=Ot,Ze.needsUpdate=!0,Pe=!0}}Pe===!0&&(Ie.updateMultisampleRenderTarget(ae),Ie.updateRenderTargetMipmap(ae))}x.setRenderTarget(_e),x.setClearColor(I,z),Ce!==void 0&&(W.viewport=Ce),x.toneMapping=ye}function Sa(C,F,V){const W=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ae=C.length;O<ae;O++){const de=C[O],_e=de.object,ye=de.geometry,Ce=W===null?de.material:W,Pe=de.group;_e.layers.test(V.layers)&&Uh(_e,F,V,ye,Ce,Pe)}}function Uh(C,F,V,W,O,ae){C.onBeforeRender(x,F,V,W,O,ae),C.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),O.transparent===!0&&O.side===Zn&&O.forceSinglePass===!1?(O.side=an,O.needsUpdate=!0,x.renderBufferDirect(V,F,W,O,C,ae),O.side=ir,O.needsUpdate=!0,x.renderBufferDirect(V,F,W,O,C,ae),O.side=Zn):x.renderBufferDirect(V,F,W,O,C,ae),C.onAfterRender(x,F,V,W,O,ae)}function Ma(C,F,V){F.isScene!==!0&&(F=Oe);const W=Le.get(C),O=m.state.lights,ae=m.state.shadowsArray,de=O.state.version,_e=J.getParameters(C,O.state,ae,F,V),ye=J.getProgramCacheKey(_e);let Ce=W.programs;W.environment=C.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(C.isMeshStandardMaterial?T:L).get(C.envMap||W.environment),W.envMapRotation=W.environment!==null&&C.envMap===null?F.environmentRotation:C.envMapRotation,Ce===void 0&&(C.addEventListener("dispose",Me),Ce=new Map,W.programs=Ce);let Pe=Ce.get(ye);if(Pe!==void 0){if(W.currentProgram===Pe&&W.lightsStateVersion===de)return Oh(C,_e),Pe}else _e.uniforms=J.getUniforms(C),C.onBeforeCompile(_e,x),Pe=J.acquireProgram(_e,ye),Ce.set(ye,Pe),W.uniforms=_e.uniforms;const we=W.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(we.clippingPlanes=Fe.uniform),Oh(C,_e),W.needsLights=P_(C),W.lightsStateVersion=de,W.needsLights&&(we.ambientLightColor.value=O.state.ambient,we.lightProbe.value=O.state.probe,we.directionalLights.value=O.state.directional,we.directionalLightShadows.value=O.state.directionalShadow,we.spotLights.value=O.state.spot,we.spotLightShadows.value=O.state.spotShadow,we.rectAreaLights.value=O.state.rectArea,we.ltc_1.value=O.state.rectAreaLTC1,we.ltc_2.value=O.state.rectAreaLTC2,we.pointLights.value=O.state.point,we.pointLightShadows.value=O.state.pointShadow,we.hemisphereLights.value=O.state.hemi,we.directionalShadowMap.value=O.state.directionalShadowMap,we.directionalShadowMatrix.value=O.state.directionalShadowMatrix,we.spotShadowMap.value=O.state.spotShadowMap,we.spotLightMatrix.value=O.state.spotLightMatrix,we.spotLightMap.value=O.state.spotLightMap,we.pointShadowMap.value=O.state.pointShadowMap,we.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Pe,W.uniformsList=null,Pe}function Fh(C){if(C.uniformsList===null){const F=C.currentProgram.getUniforms();C.uniformsList=Dl.seqWithValue(F.seq,C.uniforms)}return C.uniformsList}function Oh(C,F){const V=Le.get(C);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function R_(C,F,V,W,O){F.isScene!==!0&&(F=Oe),Ie.resetTextureUnits();const ae=F.fog,de=W.isMeshStandardMaterial?F.environment:null,_e=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:lr,ye=(W.isMeshStandardMaterial?T:L).get(W.envMap||de),Ce=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Pe=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),we=!!V.morphAttributes.position,Ke=!!V.morphAttributes.normal,ht=!!V.morphAttributes.color;let pt=Ji;W.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(pt=x.toneMapping);const cn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ze=cn!==void 0?cn.length:0,Ee=Le.get(W),Ot=m.state.lights;if(K===!0&&(ne===!0||C!==E)){const yn=C===E&&W.id===P;Fe.setState(W,C,yn)}let Qe=!1;W.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Ot.state.version||Ee.outputColorSpace!==_e||O.isBatchedMesh&&Ee.batching===!1||!O.isBatchedMesh&&Ee.batching===!0||O.isBatchedMesh&&Ee.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ee.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ee.instancing===!1||!O.isInstancedMesh&&Ee.instancing===!0||O.isSkinnedMesh&&Ee.skinning===!1||!O.isSkinnedMesh&&Ee.skinning===!0||O.isInstancedMesh&&Ee.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ee.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ee.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ee.instancingMorph===!1&&O.morphTexture!==null||Ee.envMap!==ye||W.fog===!0&&Ee.fog!==ae||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Fe.numPlanes||Ee.numIntersection!==Fe.numIntersection)||Ee.vertexAlphas!==Ce||Ee.vertexTangents!==Pe||Ee.morphTargets!==we||Ee.morphNormals!==Ke||Ee.morphColors!==ht||Ee.toneMapping!==pt||Ee.morphTargetsCount!==Ze)&&(Qe=!0):(Qe=!0,Ee.__version=W.version);let bn=Ee.currentProgram;Qe===!0&&(bn=Ma(W,F,O));let Vr=!1,un=!1,kc=!1;const yt=bn.getUniforms(),Ci=Ee.uniforms;if(Se.useProgram(bn.program)&&(Vr=!0,un=!0,kc=!0),W.id!==P&&(P=W.id,un=!0),Vr||E!==C){yt.setValue(D,"projectionMatrix",C.projectionMatrix),yt.setValue(D,"viewMatrix",C.matrixWorldInverse);const yn=yt.map.cameraPosition;yn!==void 0&&yn.setValue(D,fe.setFromMatrixPosition(C.matrixWorld)),$e.logarithmicDepthBuffer&&yt.setValue(D,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&yt.setValue(D,"isOrthographic",C.isOrthographicCamera===!0),E!==C&&(E=C,un=!0,kc=!0)}if(O.isSkinnedMesh){yt.setOptional(D,O,"bindMatrix"),yt.setOptional(D,O,"bindMatrixInverse");const yn=O.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),yt.setValue(D,"boneTexture",yn.boneTexture,Ie))}O.isBatchedMesh&&(yt.setOptional(D,O,"batchingTexture"),yt.setValue(D,"batchingTexture",O._matricesTexture,Ie),yt.setOptional(D,O,"batchingIdTexture"),yt.setValue(D,"batchingIdTexture",O._indirectTexture,Ie),yt.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&yt.setValue(D,"batchingColorTexture",O._colorsTexture,Ie));const Bc=V.morphAttributes;if((Bc.position!==void 0||Bc.normal!==void 0||Bc.color!==void 0)&&We.update(O,V,bn),(un||Ee.receiveShadow!==O.receiveShadow)&&(Ee.receiveShadow=O.receiveShadow,yt.setValue(D,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ci.envMap.value=ye,Ci.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(Ci.envMapIntensity.value=F.environmentIntensity),un&&(yt.setValue(D,"toneMappingExposure",x.toneMappingExposure),Ee.needsLights&&b_(Ci,kc),ae&&W.fog===!0&&Te.refreshFogUniforms(Ci,ae),Te.refreshMaterialUniforms(Ci,W,Z,G,m.state.transmissionRenderTarget[C.id]),Dl.upload(D,Fh(Ee),Ci,Ie)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Dl.upload(D,Fh(Ee),Ci,Ie),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&yt.setValue(D,"center",O.center),yt.setValue(D,"modelViewMatrix",O.modelViewMatrix),yt.setValue(D,"normalMatrix",O.normalMatrix),yt.setValue(D,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const yn=W.uniformsGroups;for(let zc=0,L_=yn.length;zc<L_;zc++){const kh=yn[zc];ot.update(kh,bn),ot.bind(kh,bn)}}return bn}function b_(C,F){C.ambientLightColor.needsUpdate=F,C.lightProbe.needsUpdate=F,C.directionalLights.needsUpdate=F,C.directionalLightShadows.needsUpdate=F,C.pointLights.needsUpdate=F,C.pointLightShadows.needsUpdate=F,C.spotLights.needsUpdate=F,C.spotLightShadows.needsUpdate=F,C.rectAreaLights.needsUpdate=F,C.hemisphereLights.needsUpdate=F}function P_(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(C,F,V){Le.get(C.texture).__webglTexture=F,Le.get(C.depthTexture).__webglTexture=V;const W=Le.get(C);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,F){const V=Le.get(C);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(C,F=0,V=0){w=C,R=F,A=V;let W=!0,O=null,ae=!1,de=!1;if(C){const ye=Le.get(C);ye.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(D.FRAMEBUFFER,null),W=!1):ye.__webglFramebuffer===void 0?Ie.setupRenderTarget(C):ye.__hasExternalTextures&&Ie.rebindTextures(C,Le.get(C.texture).__webglTexture,Le.get(C.depthTexture).__webglTexture);const Ce=C.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(de=!0);const Pe=Le.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Pe[F])?O=Pe[F][V]:O=Pe[F],ae=!0):C.samples>0&&Ie.useMultisampledRTT(C)===!1?O=Le.get(C).__webglMultisampledFramebuffer:Array.isArray(Pe)?O=Pe[V]:O=Pe,y.copy(C.viewport),b.copy(C.scissor),U=C.scissorTest}else y.copy(Q).multiplyScalar(Z).floor(),b.copy(oe).multiplyScalar(Z).floor(),U=xe;if(Se.bindFramebuffer(D.FRAMEBUFFER,O)&&W&&Se.drawBuffers(C,O),Se.viewport(y),Se.scissor(b),Se.setScissorTest(U),ae){const ye=Le.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,ye.__webglTexture,V)}else if(de){const ye=Le.get(C.texture),Ce=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.__webglTexture,V||0,Ce)}P=-1},this.readRenderTargetPixels=function(C,F,V,W,O,ae,de){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Le.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&de!==void 0&&(_e=_e[de]),_e){Se.bindFramebuffer(D.FRAMEBUFFER,_e);try{const ye=C.texture,Ce=ye.format,Pe=ye.type;if(!$e.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=C.width-W&&V>=0&&V<=C.height-O&&D.readPixels(F,V,W,O,Re.convert(Ce),Re.convert(Pe),ae)}finally{const ye=w!==null?Le.get(w).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(C,F,V,W,O,ae,de){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Le.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&de!==void 0&&(_e=_e[de]),_e){Se.bindFramebuffer(D.FRAMEBUFFER,_e);try{const ye=C.texture,Ce=ye.format,Pe=ye.type;if(!$e.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=C.width-W&&V>=0&&V<=C.height-O){const we=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,we),D.bufferData(D.PIXEL_PACK_BUFFER,ae.byteLength,D.STREAM_READ),D.readPixels(F,V,W,O,Re.convert(Ce),Re.convert(Pe),0),D.flush();const Ke=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await s1(D,Ke,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,we),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ae)}finally{D.deleteBuffer(we),D.deleteSync(Ke)}return ae}}finally{const ye=w!==null?Le.get(w).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,ye)}}},this.copyFramebufferToTexture=function(C,F=null,V=0){C.isTexture!==!0&&(jo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,C=arguments[1]);const W=Math.pow(2,-V),O=Math.floor(C.image.width*W),ae=Math.floor(C.image.height*W),de=F!==null?F.x:0,_e=F!==null?F.y:0;Ie.setTexture2D(C,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,de,_e,O,ae),Se.unbindTexture()},this.copyTextureToTexture=function(C,F,V=null,W=null,O=0){C.isTexture!==!0&&(jo("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,C=arguments[1],F=arguments[2],O=arguments[3]||0,V=null);let ae,de,_e,ye,Ce,Pe;V!==null?(ae=V.max.x-V.min.x,de=V.max.y-V.min.y,_e=V.min.x,ye=V.min.y):(ae=C.image.width,de=C.image.height,_e=0,ye=0),W!==null?(Ce=W.x,Pe=W.y):(Ce=0,Pe=0);const we=Re.convert(F.format),Ke=Re.convert(F.type);Ie.setTexture2D(F,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const ht=D.getParameter(D.UNPACK_ROW_LENGTH),pt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),cn=D.getParameter(D.UNPACK_SKIP_PIXELS),Ze=D.getParameter(D.UNPACK_SKIP_ROWS),Ee=D.getParameter(D.UNPACK_SKIP_IMAGES),Ot=C.isCompressedTexture?C.mipmaps[O]:C.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Ot.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ot.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,_e),D.pixelStorei(D.UNPACK_SKIP_ROWS,ye),C.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,O,Ce,Pe,ae,de,we,Ke,Ot.data):C.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,O,Ce,Pe,Ot.width,Ot.height,we,Ot.data):D.texSubImage2D(D.TEXTURE_2D,O,Ce,Pe,ae,de,we,Ke,Ot),D.pixelStorei(D.UNPACK_ROW_LENGTH,ht),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,cn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ze),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ee),O===0&&F.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(C,F,V=null,W=null,O=0){C.isTexture!==!0&&(jo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,C=arguments[2],F=arguments[3],O=arguments[4]||0);let ae,de,_e,ye,Ce,Pe,we,Ke,ht;const pt=C.isCompressedTexture?C.mipmaps[O]:C.image;V!==null?(ae=V.max.x-V.min.x,de=V.max.y-V.min.y,_e=V.max.z-V.min.z,ye=V.min.x,Ce=V.min.y,Pe=V.min.z):(ae=pt.width,de=pt.height,_e=pt.depth,ye=0,Ce=0,Pe=0),W!==null?(we=W.x,Ke=W.y,ht=W.z):(we=0,Ke=0,ht=0);const cn=Re.convert(F.format),Ze=Re.convert(F.type);let Ee;if(F.isData3DTexture)Ie.setTexture3D(F,0),Ee=D.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)Ie.setTexture2DArray(F,0),Ee=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const Ot=D.getParameter(D.UNPACK_ROW_LENGTH),Qe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),bn=D.getParameter(D.UNPACK_SKIP_PIXELS),Vr=D.getParameter(D.UNPACK_SKIP_ROWS),un=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,pt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ye),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ce),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Pe),C.isDataTexture||C.isData3DTexture?D.texSubImage3D(Ee,O,we,Ke,ht,ae,de,_e,cn,Ze,pt.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Ee,O,we,Ke,ht,ae,de,_e,cn,pt.data):D.texSubImage3D(Ee,O,we,Ke,ht,ae,de,_e,cn,Ze,pt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ot),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,bn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Vr),D.pixelStorei(D.UNPACK_SKIP_IMAGES,un),O===0&&F.generateMipmaps&&D.generateMipmap(Ee),Se.unbindTexture()},this.initRenderTarget=function(C){Le.get(C).__webglFramebuffer===void 0&&Ie.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Ie.setTextureCube(C,0):C.isData3DTexture?Ie.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Ie.setTexture2DArray(C,0):Ie.setTexture2D(C,0),Se.unbindTexture()},this.resetState=function(){R=0,A=0,w=null,Se.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Ch?"display-p3":"srgb",n.unpackColorSpace=Je.workingColorSpace===Nc?"display-p3":"srgb"}}class mC extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class M_ extends oo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const hc=new k,pc=new k,ng=new gt,Co=new bh,dl=new Uc,Vu=new k,ig=new k;class gC extends Pt{constructor(e=new wi,n=new M_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)hc.fromBufferAttribute(n,r-1),pc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=hc.distanceTo(pc);e.setAttribute("lineDistance",new Vn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),dl.copy(i.boundingSphere),dl.applyMatrix4(r),dl.radius+=s,e.ray.intersectsSphere(dl)===!1)return;ng.copy(r).invert(),Co.copy(e.ray).applyMatrix4(ng);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let _=p,m=v-1;_<m;_+=c){const f=u.getX(_),g=u.getX(_+1),x=hl(this,e,Co,l,f,g);x&&n.push(x)}if(this.isLineLoop){const _=u.getX(v-1),m=u.getX(p),f=hl(this,e,Co,l,_,m);f&&n.push(f)}}else{const p=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let _=p,m=v-1;_<m;_+=c){const f=hl(this,e,Co,l,_,_+1);f&&n.push(f)}if(this.isLineLoop){const _=hl(this,e,Co,l,v-1,p);_&&n.push(_)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function hl(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(hc.fromBufferAttribute(o,r),pc.fromBufferAttribute(o,s),n.distanceSqToSegment(hc,pc,Vu,ig)>i)return;Vu.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Vu);if(!(l<e.near||l>e.far))return{distance:l,point:ig.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}const rg=new k,sg=new k;class vC extends gC{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)rg.fromBufferAttribute(n,r),sg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+rg.distanceTo(sg);e.setAttribute("lineDistance",new Vn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _C extends oo{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=n_,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dh extends Pt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Gu=new gt,og=new k,ag=new k;class E_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ph,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;og.setFromMatrixPosition(e.matrixWorld),n.position.copy(og),ag.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ag),n.updateMatrixWorld(),Gu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class xC extends E_{constructor(){super(new pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,i=eo*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class yC extends Dh{constructor(e,n,i=0,r=Math.PI/3,s=0,o=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new xC}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class SC extends E_{constructor(){super(new g_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class MC extends Dh{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new SC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class EC extends Dh{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class lg{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(jt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class TC extends vC{constructor(e=10,n=10,i=4473924,r=8947848){i=new Ve(i),r=new Ve(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let h=0,p=0,v=-a;h<=n;h++,v+=o){l.push(-a,0,v,a,0,v),l.push(v,0,-a,v,0,a);const _=h===s?i:r;_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3}const u=new wi;u.setAttribute("position",new Vn(l,3)),u.setAttribute("color",new Vn(c,3));const d=new M_({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xh);const cg={type:"change"},Wu={type:"start"},ug={type:"end"},pl=new bh,fg=new ki,wC=Math.cos(70*i1.DEG2RAD);class AC extends Hr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xr.ROTATE,MIDDLE:Xr.DOLLY,RIGHT:Xr.PAN},this.touches={ONE:jr.ROTATE,TWO:jr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(M){M.addEventListener("keydown",he),this._domElementKeyEvents=M},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",he),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(cg),i.update(),s=r.NONE},this.update=function(){const M=new k,B=new Or().setFromUnitVectors(e.up,new k(0,1,0)),H=B.clone().invert(),j=new k,te=new Or,Me=new k,be=2*Math.PI;return function(Et=null){const Xe=i.object.position;M.copy(Xe).sub(i.target),M.applyQuaternion(B),a.setFromVector3(M),i.autoRotate&&s===r.NONE&&U(y(Et)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Tt=i.minAzimuthAngle,xt=i.maxAzimuthAngle;isFinite(Tt)&&isFinite(xt)&&(Tt<-Math.PI?Tt+=be:Tt>Math.PI&&(Tt-=be),xt<-Math.PI?xt+=be:xt>Math.PI&&(xt-=be),Tt<=xt?a.theta=Math.max(Tt,Math.min(xt,a.theta)):a.theta=a.theta>(Tt+xt)/2?Math.max(Tt,a.theta):Math.min(xt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Ai=!1;if(i.zoomToCursor&&A||i.object.isOrthographicCamera)a.radius=Q(a.radius);else{const Ft=a.radius;a.radius=Q(a.radius*c),Ai=Ft!=a.radius}if(M.setFromSpherical(a),M.applyQuaternion(H),Xe.copy(i.target).add(M),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&A){let Ft=null;if(i.object.isPerspectiveCamera){const ri=M.length();Ft=Q(ri*c);const cr=ri-Ft;i.object.position.addScaledVector(S,cr),i.object.updateMatrixWorld(),Ai=!!cr}else if(i.object.isOrthographicCamera){const ri=new k(R.x,R.y,0);ri.unproject(i.object);const cr=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Ai=cr!==i.object.zoom;const co=new k(R.x,R.y,0);co.unproject(i.object),i.object.position.sub(co).add(ri),i.object.updateMatrixWorld(),Ft=M.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Ft!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Ft).add(i.object.position):(pl.origin.copy(i.object.position),pl.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(pl.direction))<wC?e.lookAt(i.target):(fg.setFromNormalAndCoplanarPoint(i.object.up,i.target),pl.intersectPlane(fg,i.target))))}else if(i.object.isOrthographicCamera){const Ft=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),Ft!==i.object.zoom&&(i.object.updateProjectionMatrix(),Ai=!0)}return c=1,A=!1,Ai||j.distanceToSquared(i.object.position)>o||8*(1-te.dot(i.object.quaternion))>o||Me.distanceToSquared(i.target)>o?(i.dispatchEvent(cg),j.copy(i.object.position),te.copy(i.object.quaternion),Me.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",pe),i.domElement.removeEventListener("pointerdown",Ie),i.domElement.removeEventListener("pointercancel",T),i.domElement.removeEventListener("wheel",ie),i.domElement.removeEventListener("pointermove",L),i.domElement.removeEventListener("pointerup",T),i.domElement.getRootNode().removeEventListener("keydown",Te,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",he),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new lg,l=new lg;let c=1;const u=new k,d=new Ne,h=new Ne,p=new Ne,v=new Ne,_=new Ne,m=new Ne,f=new Ne,g=new Ne,x=new Ne,S=new k,R=new Ne;let A=!1;const w=[],P={};let E=!1;function y(M){return M!==null?2*Math.PI/60*i.autoRotateSpeed*M:2*Math.PI/60/60*i.autoRotateSpeed}function b(M){const B=Math.abs(M*.01);return Math.pow(.95,i.zoomSpeed*B)}function U(M){l.theta-=M}function I(M){l.phi-=M}const z=function(){const M=new k;return function(H,j){M.setFromMatrixColumn(j,0),M.multiplyScalar(-H),u.add(M)}}(),$=function(){const M=new k;return function(H,j){i.screenSpacePanning===!0?M.setFromMatrixColumn(j,1):(M.setFromMatrixColumn(j,0),M.crossVectors(i.object.up,M)),M.multiplyScalar(H),u.add(M)}}(),G=function(){const M=new k;return function(H,j){const te=i.domElement;if(i.object.isPerspectiveCamera){const Me=i.object.position;M.copy(Me).sub(i.target);let be=M.length();be*=Math.tan(i.object.fov/2*Math.PI/180),z(2*H*be/te.clientHeight,i.object.matrix),$(2*j*be/te.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(z(H*(i.object.right-i.object.left)/i.object.zoom/te.clientWidth,i.object.matrix),$(j*(i.object.top-i.object.bottom)/i.object.zoom/te.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Z(M){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function N(M){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Y(M,B){if(!i.zoomToCursor)return;A=!0;const H=i.domElement.getBoundingClientRect(),j=M-H.left,te=B-H.top,Me=H.width,be=H.height;R.x=j/Me*2-1,R.y=-(te/be)*2+1,S.set(R.x,R.y,1).unproject(i.object).sub(i.object.position).normalize()}function Q(M){return Math.max(i.minDistance,Math.min(i.maxDistance,M))}function oe(M){d.set(M.clientX,M.clientY)}function xe(M){Y(M.clientX,M.clientX),f.set(M.clientX,M.clientY)}function He(M){v.set(M.clientX,M.clientY)}function K(M){h.set(M.clientX,M.clientY),p.subVectors(h,d).multiplyScalar(i.rotateSpeed);const B=i.domElement;U(2*Math.PI*p.x/B.clientHeight),I(2*Math.PI*p.y/B.clientHeight),d.copy(h),i.update()}function ne(M){g.set(M.clientX,M.clientY),x.subVectors(g,f),x.y>0?Z(b(x.y)):x.y<0&&N(b(x.y)),f.copy(g),i.update()}function ue(M){_.set(M.clientX,M.clientY),m.subVectors(_,v).multiplyScalar(i.panSpeed),G(m.x,m.y),v.copy(_),i.update()}function fe(M){Y(M.clientX,M.clientY),M.deltaY<0?N(b(M.deltaY)):M.deltaY>0&&Z(b(M.deltaY)),i.update()}function Ue(M){let B=!1;switch(M.code){case i.keys.UP:M.ctrlKey||M.metaKey||M.shiftKey?I(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,i.keyPanSpeed),B=!0;break;case i.keys.BOTTOM:M.ctrlKey||M.metaKey||M.shiftKey?I(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,-i.keyPanSpeed),B=!0;break;case i.keys.LEFT:M.ctrlKey||M.metaKey||M.shiftKey?U(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(i.keyPanSpeed,0),B=!0;break;case i.keys.RIGHT:M.ctrlKey||M.metaKey||M.shiftKey?U(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(-i.keyPanSpeed,0),B=!0;break}B&&(M.preventDefault(),i.update())}function Oe(M){if(w.length===1)d.set(M.pageX,M.pageY);else{const B=De(M),H=.5*(M.pageX+B.x),j=.5*(M.pageY+B.y);d.set(H,j)}}function ze(M){if(w.length===1)v.set(M.pageX,M.pageY);else{const B=De(M),H=.5*(M.pageX+B.x),j=.5*(M.pageY+B.y);v.set(H,j)}}function nt(M){const B=De(M),H=M.pageX-B.x,j=M.pageY-B.y,te=Math.sqrt(H*H+j*j);f.set(0,te)}function D(M){i.enableZoom&&nt(M),i.enablePan&&ze(M)}function ft(M){i.enableZoom&&nt(M),i.enableRotate&&Oe(M)}function Ye(M){if(w.length==1)h.set(M.pageX,M.pageY);else{const H=De(M),j=.5*(M.pageX+H.x),te=.5*(M.pageY+H.y);h.set(j,te)}p.subVectors(h,d).multiplyScalar(i.rotateSpeed);const B=i.domElement;U(2*Math.PI*p.x/B.clientHeight),I(2*Math.PI*p.y/B.clientHeight),d.copy(h)}function $e(M){if(w.length===1)_.set(M.pageX,M.pageY);else{const B=De(M),H=.5*(M.pageX+B.x),j=.5*(M.pageY+B.y);_.set(H,j)}m.subVectors(_,v).multiplyScalar(i.panSpeed),G(m.x,m.y),v.copy(_)}function Se(M){const B=De(M),H=M.pageX-B.x,j=M.pageY-B.y,te=Math.sqrt(H*H+j*j);g.set(0,te),x.set(0,Math.pow(g.y/f.y,i.zoomSpeed)),Z(x.y),f.copy(g);const Me=(M.pageX+B.x)*.5,be=(M.pageY+B.y)*.5;Y(Me,be)}function dt(M){i.enableZoom&&Se(M),i.enablePan&&$e(M)}function Le(M){i.enableZoom&&Se(M),i.enableRotate&&Ye(M)}function Ie(M){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(M.pointerId),i.domElement.addEventListener("pointermove",L),i.domElement.addEventListener("pointerup",T)),!ve(M)&&(We(M),M.pointerType==="touch"?Fe(M):X(M)))}function L(M){i.enabled!==!1&&(M.pointerType==="touch"?se(M):ee(M))}function T(M){switch(Ae(M),w.length){case 0:i.domElement.releasePointerCapture(M.pointerId),i.domElement.removeEventListener("pointermove",L),i.domElement.removeEventListener("pointerup",T),i.dispatchEvent(ug),s=r.NONE;break;case 1:const B=w[0],H=P[B];Fe({pointerId:B,pageX:H.x,pageY:H.y});break}}function X(M){let B;switch(M.button){case 0:B=i.mouseButtons.LEFT;break;case 1:B=i.mouseButtons.MIDDLE;break;case 2:B=i.mouseButtons.RIGHT;break;default:B=-1}switch(B){case Xr.DOLLY:if(i.enableZoom===!1)return;xe(M),s=r.DOLLY;break;case Xr.ROTATE:if(M.ctrlKey||M.metaKey||M.shiftKey){if(i.enablePan===!1)return;He(M),s=r.PAN}else{if(i.enableRotate===!1)return;oe(M),s=r.ROTATE}break;case Xr.PAN:if(M.ctrlKey||M.metaKey||M.shiftKey){if(i.enableRotate===!1)return;oe(M),s=r.ROTATE}else{if(i.enablePan===!1)return;He(M),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Wu)}function ee(M){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;K(M);break;case r.DOLLY:if(i.enableZoom===!1)return;ne(M);break;case r.PAN:if(i.enablePan===!1)return;ue(M);break}}function ie(M){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(M.preventDefault(),i.dispatchEvent(Wu),fe(J(M)),i.dispatchEvent(ug))}function J(M){const B=M.deltaMode,H={clientX:M.clientX,clientY:M.clientY,deltaY:M.deltaY};switch(B){case 1:H.deltaY*=16;break;case 2:H.deltaY*=100;break}return M.ctrlKey&&!E&&(H.deltaY*=10),H}function Te(M){M.key==="Control"&&(E=!0,i.domElement.getRootNode().addEventListener("keyup",le,{passive:!0,capture:!0}))}function le(M){M.key==="Control"&&(E=!1,i.domElement.getRootNode().removeEventListener("keyup",le,{passive:!0,capture:!0}))}function he(M){i.enabled===!1||i.enablePan===!1||Ue(M)}function Fe(M){switch(Re(M),w.length){case 1:switch(i.touches.ONE){case jr.ROTATE:if(i.enableRotate===!1)return;Oe(M),s=r.TOUCH_ROTATE;break;case jr.PAN:if(i.enablePan===!1)return;ze(M),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case jr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;D(M),s=r.TOUCH_DOLLY_PAN;break;case jr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ft(M),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Wu)}function se(M){switch(Re(M),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ye(M),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;$e(M),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;dt(M),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Le(M),i.update();break;default:s=r.NONE}}function pe(M){i.enabled!==!1&&M.preventDefault()}function We(M){w.push(M.pointerId)}function Ae(M){delete P[M.pointerId];for(let B=0;B<w.length;B++)if(w[B]==M.pointerId){w.splice(B,1);return}}function ve(M){for(let B=0;B<w.length;B++)if(w[B]==M.pointerId)return!0;return!1}function Re(M){let B=P[M.pointerId];B===void 0&&(B=new Ne,P[M.pointerId]=B),B.set(M.pageX,M.pageY)}function De(M){const B=M.pointerId===w[0]?w[1]:w[0];return P[B]}i.domElement.addEventListener("contextmenu",pe),i.domElement.addEventListener("pointerdown",Ie),i.domElement.addEventListener("pointercancel",T),i.domElement.addEventListener("wheel",ie,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",Te,{passive:!0,capture:!0}),this.update()}}const T_=ge.createContext(null),Cs={black:"#000000",gray:"#666666",red:"#ff0000",orange:"#ff7700",yellow:"#ffff00",green:"#00ff00",teal:"#00ffff",blue:"#0000ff",purple:"#ff00ff"},dg=["black","gray","red","orange","yellow","green","teal","blue","purple"];function Ih(){const t=ge.useContext(T_);if(!t)throw new Error("Missing AppContext");return t}function Il(t){return t?{display:"none"}:void 0}function w_({className:t,title:e,options:n,value:i,setValue:r}){const s=ge.useCallback(o=>{const a=parseFloat(o.target.value);r(n[a].value)},[n,r]);return q.jsxs(q.Fragment,{children:[e&&q.jsxs("div",{className:"input-title",children:[e,":"]}),q.jsx("select",{className:t,value:n.findIndex(({value:o})=>o===i),onChange:s,children:n.map(({label:o},a)=>q.jsx("option",{value:`${a}`,children:o},a))})]})}function hg({value:t,setValue:e,integer:n}){const[i,r]=ge.useState(`${t}`),s=ge.useCallback(l=>{r(l.target.value);const c=parseFloat(l.target.value);isNaN(c)||e(c)},[r,e]),o=parseFloat(i),a=isNaN(o)||n&&Math.round(o)!==o;return q.jsx("input",{className:a?"number error":"number",type:"text",value:i,onChange:s})}function pg({value:t,setValue:e}){const n=ge.useCallback(i=>{e(i.target.value)},[e]);return q.jsx("input",{className:"string",type:"text",value:t,onChange:n})}function CC({typedef:t,value:e,setValue:n}){return q.jsx(q.Fragment,{children:q.jsx(Rr,{metadata:t.metadata,children:q.jsx(w_,{className:"enum",options:t.enum.map(i=>({label:i,value:i})),value:e,setValue:n})})})}function Os(t){if("type"in t||"enum"in t)return t.metadata.default;if("elements"in t){const e=t.metadata.default;return e===null?null:Array.from({length:e}).map(n=>Os(t.elements))}else if("properties"in t){const e={};for(const n of Object.keys(t.properties))e[n]=Os(t.properties[n]);return e}else if("discriminator"in t){const e=t.metadata.default;return e===null?null:Os(t.mapping[e])}else if("ref"in t)throw new Error("TODO: implement ref");throw console.error(t),new Error("Unknown typedef")}function RC({schema:t,typedef:e,value:n,setValue:i}){var p;const[r,s]=ge.useState(()=>n.map((v,_)=>_)),o=ge.useCallback(()=>{i(v=>{const _=[...v];return _.push(Os(e.elements)),_}),s(v=>{const _=v.reduce((f,g)=>Math.max(f,g),0)+1,m=[...v];return m.push(_),m})},[i,e]),a=ge.useCallback(v=>{const _=m=>{const f=[...m];return f.splice(v,1),f};i(_),s(_)},[i,s]),l=ge.useCallback(v=>{i(_=>{const m=[..._];return m.splice(v,0,JSON.parse(JSON.stringify(m[v]))),m}),s(_=>{const m=_.reduce((g,x)=>Math.max(g,x),0)+1,f=[..._];return f.splice(v,0,m),f})},[i,s]),c=ge.useCallback((v,_)=>{const m=f=>{const g=[...f],x=g.splice(v,1)[0];return g.splice(v+_,0,x),g};i(m),s(m)},[i,s]),[u,d]=ge.useState(!1),h=((p=e.metadata)==null?void 0:p.itemTitle)||"{}";return q.jsxs(q.Fragment,{children:[q.jsx(Rr,{metadata:e.metadata,postfix:`(${n.length})`,hide:u,setHide:d}),q.jsx(jS,{children:n.map((v,_)=>q.jsxs("div",{className:"tab elements-item",style:Il(u),children:[q.jsxs("div",{className:"input-title",children:[h.replace(/\{\}/g,`${_+1}`),":",q.jsxs("div",{style:{float:"right"},children:[q.jsx("button",{title:"Move Up",disabled:_<=0,className:"elements-move",onClick:()=>{c(_,-1)},children:"↑"}),q.jsx("button",{title:"Move Down",disabled:_>=n.length-1,className:"elements-move",onClick:()=>{c(_,1)},children:"↓"}),q.jsx("button",{title:"Duplicate",className:"elements-duplicate",onClick:()=>{l(_)},children:"⊕"}),q.jsx("button",{title:"Remove",className:"elements-remove",onClick:()=>{a(_)},children:"×"})]})]}),q.jsx(Nh,{schema:t,typedef:e.elements,value:v,setValue:m=>{i(f=>{const g=[...f];return g[_]=typeof m=="function"?m(g[_]):m,g})}})]},r[_]))}),n.length<=0&&q.jsx("div",{className:"tab",style:Il(u),children:q.jsx("p",{children:q.jsx("em",{children:"Empty"})})}),q.jsx("div",{className:"tab",style:Il(u),children:q.jsx("button",{onClick:o,children:`Add ${h.replace(/\{\}/g,`${n.length+1}`)}`})})]})}function A_({schema:t,typedef:e,value:n,setValue:i,skipTitle:r,hide:s}){const[o,a]=ge.useState(!!e.metadata.startHidden);return q.jsxs(q.Fragment,{children:[!r&&q.jsx(Rr,{metadata:e.metadata,hide:o,setHide:a}),e.metadata.order.map(l=>{const c=e.properties[l];return c?q.jsx("div",{className:e.metadata.untabParams&&l==="params"?void 0:"tab",style:Il(s||o),children:q.jsx(Nh,{schema:t,typedef:c,value:n[l],setValue:u=>{i(d=>({...d,[l]:typeof u=="function"?u(d[l]):u}))}})},l):q.jsxs("p",{children:["ERROR: Missing typedef for ",l]})})]})}function bC({schema:t,typedef:e,value:n,setValue:i}){const[r,s]=ge.useState(!0),o=(n==null?void 0:n[e.discriminator])??null,[a,l]=ge.useState(()=>{const d=new Map;for(const h of e.metadata.order)o===h?d.set(h,n):d.set(h,Os(e.mapping[h]));return d}),c=ge.useCallback(d=>{const h=typeof d=="function"?d(o):d;i(h===null?null:a.get(h))},[o,a,i]),u=ge.useCallback(d=>{const h=typeof d=="function"?d(n):d,p=new Map(a);p.set(o,h),l(p),i(h)},[a,n,i,o,l]);return q.jsxs(q.Fragment,{children:[q.jsx(Rr,{metadata:e.metadata}),q.jsxs("div",{className:"hide-wrap",children:[q.jsx(C_,{disabled:o===null,hide:o===null?!0:r,setHide:o===null?()=>{}:s}),q.jsx(w_,{options:[...e.nullable?[{label:e.metadata.nullHint||"<none>",value:null}]:[],...e.metadata.order.map(d=>({label:e.mapping[d].metadata.title||d,value:d}))],value:o,setValue:c})]}),o!==null&&q.jsx(A_,{hide:r,skipTitle:!0,schema:t,typedef:e.mapping[o],value:n,setValue:u},o)]})}function C_({disabled:t,hide:e,setHide:n}){const i=ge.useCallback(()=>{n==null||n(r=>!r)},[n]);return q.jsx(q.Fragment,{children:n&&q.jsx("button",{className:"hide-button",style:t?{opacity:.5}:void 0,onClick:i,children:e?"▶":"▼"})})}function Rr({metadata:{title:t,description:e},postfix:n,hide:i,setHide:r,children:s}){const{units:o}=Ih(),a=t==null?void 0:t.replace(/\(units\)/g,`(${o})`),l=e==null?void 0:e.replace(/\(units\)/g,`(${o})`);return q.jsx(q.Fragment,{children:a&&q.jsxs("div",{className:r?"input-title hide-wrap":"input-title",children:[r&&q.jsx(C_,{hide:i,setHide:r}),q.jsxs("div",{className:"title",children:[q.jsx("span",{style:r?{cursor:"pointer",userSelect:"none"}:void 0,onClick:r?()=>{r(!i)}:void 0,children:n?`${a} ${n}`:a}),l&&q.jsxs(q.Fragment,{children:[" ",q.jsx("span",{className:"description",onClick:()=>{alert(l)},title:l,children:"ⓘ"})]}),":",s&&q.jsxs(q.Fragment,{children:[" ",s]})]})]})})}function Nh({schema:t,typedef:e,value:n,setValue:i}){if("type"in e)switch(e.type){case"float64":case"int32":return q.jsx(Rr,{metadata:e.metadata,children:e.nullable?q.jsxs(q.Fragment,{children:[n===null?q.jsx("input",{className:"number",type:"text",disabled:!0,value:e.metadata.nullHint||"null"}):q.jsx(hg,{value:n,setValue:i,integer:e.type==="int32"}),q.jsx("input",{className:"nullable",type:"checkbox",checked:n!==null,onChange:()=>{i(n===null?e.metadata.defaultNotNull??0:null)}})]}):q.jsx(hg,{value:n,setValue:i,integer:e.type==="int32"})});case"string":return q.jsx(Rr,{metadata:e.metadata,children:e.nullable?q.jsxs(q.Fragment,{children:[n===null?q.jsx("input",{className:"number",type:"text",disabled:!0,value:e.metadata.nullHint||"null"}):q.jsx(pg,{value:n,setValue:i}),q.jsx("input",{className:"nullable",type:"checkbox",checked:n!==null,onChange:()=>{i(n===null?e.metadata.defaultNotNull??"":null)}})]}):q.jsx(pg,{value:n,setValue:i})});case"boolean":return q.jsx(q.Fragment,{children:q.jsx(Rr,{metadata:e.metadata,children:q.jsxs("div",{className:"boolean",children:[q.jsx("button",{className:n?"selected":void 0,onClick:()=>{i(!0)},children:"Yes"})," ",q.jsx("button",{className:n?void 0:"selected",onClick:()=>{i(!1)},children:"No"})]})})})}else{if("enum"in e)return q.jsx(CC,{schema:t,typedef:e,value:n,setValue:i});if("elements"in e)return q.jsx(RC,{schema:t,typedef:e,value:n,setValue:i});if("properties"in e)return q.jsx(A_,{schema:t,typedef:e,value:n,setValue:i});if("discriminator"in e)return q.jsx(bC,{schema:t,typedef:e,value:n,setValue:i});"ref"in e&&console.error("TODO: implement ref")}return q.jsxs("p",{children:["ERROR: Unknown JSON type def! ",q.jsx("pre",{children:JSON.stringify(e)})]})}function PC({schema:t,value:e,setValue:n}){return q.jsx(Nh,{schema:t,typedef:t,value:e,setValue:n})}class mg{constructor(e){Ri(this,"m");e?this.m=[e.m[0],e.m[1],e.m[2],e.m[3],e.m[4],e.m[5]]:this.m=[1,0,0,1,0,0]}reset(){this.m[0]=1,this.m[1]=0,this.m[2]=0,this.m[3]=1,this.m[4]=0,this.m[5]=0}copy(e){this.m[0]=e.m[0],this.m[1]=e.m[1],this.m[2]=e.m[2],this.m[3]=e.m[3],this.m[4]=e.m[4],this.m[5]=e.m[5]}multiply(e){const n=this.m[0]*e.m[0]+this.m[2]*e.m[1],i=this.m[1]*e.m[0]+this.m[3]*e.m[1],r=this.m[0]*e.m[2]+this.m[2]*e.m[3],s=this.m[1]*e.m[2]+this.m[3]*e.m[3],o=this.m[0]*e.m[4]+this.m[2]*e.m[5]+this.m[4],a=this.m[1]*e.m[4]+this.m[3]*e.m[5]+this.m[5];this.m[0]=n,this.m[1]=i,this.m[2]=r,this.m[3]=s,this.m[4]=o,this.m[5]=a}invert(){const e=1/(this.m[0]*this.m[3]-this.m[1]*this.m[2]),n=this.m[3]*e,i=-this.m[1]*e,r=-this.m[2]*e,s=this.m[0]*e,o=e*(this.m[2]*this.m[5]-this.m[3]*this.m[4]),a=e*(this.m[1]*this.m[4]-this.m[0]*this.m[5]);this.m[0]=n,this.m[1]=i,this.m[2]=r,this.m[3]=s,this.m[4]=o,this.m[5]=a}rotate(e){const n=Math.cos(e),i=Math.sin(e),r=this.m[0]*n+this.m[2]*i,s=this.m[1]*n+this.m[3]*i,o=this.m[0]*-i+this.m[2]*n,a=this.m[1]*-i+this.m[3]*n;this.m[0]=r,this.m[1]=s,this.m[2]=o,this.m[3]=a}translate(e){this.m[4]+=this.m[0]*e[0]+this.m[2]*e[1],this.m[5]+=this.m[1]*e[0]+this.m[3]*e[1]}translateXY(e,n){this.m[4]+=this.m[0]*e+this.m[2]*n,this.m[5]+=this.m[1]*e+this.m[3]*n}scale(e){this.m[0]*=e,this.m[1]*=e,this.m[2]*=e,this.m[3]*=e}transformPoint(e){return[e[0]*this.m[0]+e[1]*this.m[2]+this.m[4],e[0]*this.m[1]+e[1]*this.m[3]+this.m[5]]}}class LC{constructor(){Ri(this,"center",[0,0]);Ri(this,"zoom",0);Ri(this,"transform",new mg);Ri(this,"transformInvert",new mg)}zoomFactor(){return Math.pow(2,this.zoom)}calc(e,n){return this.transform.reset(),this.transform.translateXY(e/2,n/2),this.transform.scale(this.zoomFactor()),this.transform.translateXY(-this.center[0],-this.center[1]),this.transformInvert.copy(this.transform),this.transformInvert.invert(),this}screenToPoint(e){return this.transformInvert.transformPoint(e)}pointToScreen(e){return this.transform.transformPoint(e)}copyToContext(e){return e.setTransform(this.transform.m[0],this.transform.m[1],this.transform.m[2],this.transform.m[3],this.transform.m[4],this.transform.m[5]),this}}function DC(t,e,n,i,r,s){const o=a=>{t.fillText(a,n,i),i+=s};for(const a of e.split(`
`))if(t.measureText(a).width<r)o(a);else{const l=a.split(" ");for(let u=0;u<l.length;u++){let d=l[u],h="";for(;d.length>1&&t.measureText(d).width>=r;){const p=d.substr(-1);d=d.substr(0,d.length-1),h=p+h}h&&(l[u]=d,l.splice(u+1,0,h))}let c="";for(;;){const u=l.shift();if(typeof u>"u")break;c?t.measureText(`${c} ${u}`).width<r?c+=` ${u}`:(o(c),c=u):c=u}o(c)}}function IC({grid:t,units:e,items:n,error:i,onView:r,onGrid:s}){const[o,a]=ge.useState(null),l=ge.useCallback(m=>{a(m)},[a]),c=ge.useMemo(()=>{if(!o)return null;const m=new mC;m.background=new Ve(14935789);const f=new pn(75,1,.1,1e3),g=new pC;g.setSize(200,200);const x=new ao(1,1,1),S=new _C({color:new Ve(14532253),side:Zn}),R=new Jn(x,S);R.rotation.x+=.4,R.rotation.y+=.4,m.add(R),m.add(new EC(15790320,1));const A=new yC(16777215,2);A.position.set(0,150,0),A.angle=Math.PI*.2,A.decay=0,m.add(A);const w=new MC(16777215,2);m.add(w);const P=new TC(2e3,100,new Ve(8947848),new Ve(13421772));P.position.y=-9,m.add(P),f.position.set(0,0,2);const E=new AC(f,o);return{scene:m,camera:f,renderer:g,light:A,dlight:w,controls:E}},[o]),u=ge.useMemo(()=>o==null?void 0:o.getContext("2d"),[o]),d=window.devicePixelRatio||1,{debug:h}=Ih(),p=ge.useCallback(()=>{!o||!u||!c||(u.setTransform(1,0,0,1,0,0),u.clearRect(0,0,o.width,o.height),c.dlight.position.set(c.camera.position.x+.32,c.camera.position.y+.39,c.camera.position.z-1.3),c.renderer.render(c.scene,c.camera),u.drawImage(c.renderer.domElement,0,0,o.width,o.height))},[o,u,n,t,d,i,e,h,c]);ge.useEffect(()=>{p()},[p]);const v=ge.useCallback(()=>{o&&p()},[o,p]),_=ge.useRef(!0);return ge.useEffect(()=>{if(!o||!u||!c)return;const m=()=>{const f=o.parentElement;if(f){const g=Math.floor(f.clientWidth),x=Math.floor(f.clientHeight);o.width=g*d,o.height=x*d,c.renderer.setPixelRatio(d),c.renderer.setSize(g,x),c.camera.aspect=g/x,c.camera.updateProjectionMatrix(),o.style.width=`${g}px`,o.style.height=`${x}px`,_.current?(_.current=!1,v()):p()}};return window.addEventListener("resize",m),m(),c.controls.addEventListener("change",p),()=>{c.controls.dispose(),window.removeEventListener("resize",m)}},[o,v,_,d,p,c]),q.jsxs(q.Fragment,{children:[q.jsx("canvas",{ref:l}),q.jsxs("div",{className:"status",children:[q.jsx("button",{onClick:r,children:"View: 3D (WIP)"}),q.jsxs("button",{onClick:s,children:["Grid: ",t?"On":"Off"]}),q.jsx("button",{onClick:v,children:"Center"})]})]})}function NC({grid:t,units:e,items:n,error:i,onView:r,onGrid:s}){const[o,a]=ge.useState(null),l=ge.useCallback(m=>{a(m)},[a]),c=ge.useMemo(()=>o==null?void 0:o.getContext("2d"),[o]),u=window.devicePixelRatio||1,d=ge.useMemo(()=>new LC,[]),{debug:h}=Ih(),p=ge.useCallback(()=>{if(!(!o||!c)){if(c.setTransform(1,0,0,1,0,0),c.clearRect(0,0,o.width,o.height),d.calc(o.width,o.height).copyToContext(c),t){const m=d.screenToPoint([0,0]),f=d.screenToPoint([o.width,o.height]),g=o.width/(f[0]-m[0]),S=15*u/g,R=Math.pow(10,Math.round(Math.log10(S)));c.lineWidth=u/d.zoomFactor();const A=Math.round(m[0]/R)-1,w=Math.round(f[0]/R)+1,P=Math.round(m[1]/R)-1,E=Math.round(f[1]/R)+1;c.beginPath();for(let y=A;y<=w;y++)y%10!==0&&(c.moveTo(y*R,m[1]),c.lineTo(y*R,f[1]));for(let y=P;y<=E;y++)y%10!==0&&(c.moveTo(m[0],y*R),c.lineTo(f[0],y*R));c.strokeStyle="#ccc",c.stroke(),c.beginPath();for(let y=A;y<=w;y++)y%10===0&&(c.moveTo(y*R,m[1]),c.lineTo(y*R,f[1]));for(let y=P;y<=E;y++)y%10===0&&(c.moveTo(m[0],y*R),c.lineTo(f[0],y*R));c.strokeStyle="#888",c.stroke(),c.save(),c.setTransform(u,0,0,u,0,0),c.font="18px/18px sans-serif",c.fillStyle="#000",c.fillText(`Grid size: ${R}${e}`,10,o.height/u-17),c.restore()}if(h){for(const{surface:m,offset:f}of n){const g=m.applyKerf();g!==m&&(g.border.output(c,[1,0,0,1,f[0],f[1]]),c.lineWidth=4*u/d.zoomFactor(),c.strokeStyle="#44007777",c.stroke())}for(const{offset:m,boundingBox:f}of n)c.beginPath(),c.rect(m[0]+f[0][0],m[1]+f[0][1],f[1][0]-f[0][0],f[1][1]-f[0][1]),c.lineWidth=6*u/d.zoomFactor(),c.strokeStyle="#0cc",c.stroke()}for(const m of n){const{surface:f,offset:g}=m;f.border.output(c,[1,0,0,1,g[0],g[1]]),c.fillStyle=Cs[m.cutColor],c.save(),c.globalAlpha=.125,c.fill(),c.restore(),c.lineWidth=3*u/d.zoomFactor(),c.strokeStyle=Cs[m.cutColor],c.stroke(),f.cuts.output(c,[1,0,0,1,g[0],g[1]]),c.lineWidth=3*u/d.zoomFactor(),c.strokeStyle=Cs[m.cutColor],c.stroke(),f.scores.output(c,[1,0,0,1,g[0],g[1]]),c.lineWidth=3*u/d.zoomFactor(),c.strokeStyle=Cs[m.scoreColor],c.stroke()}if(h)for(const m of n){const{surface:f,offset:g}=m;class x{constructor(A,w){Ri(this,"color");Ri(this,"ctx");this.color=A,this.ctx=w}point(A,w){this.ctx.beginPath(),this.ctx.arc(A,w,3*u/d.zoomFactor(),0,Math.PI*2),this.ctx.fillStyle=this.color,this.ctx.fill()}beginPath(){}moveTo(){}lineTo(A,w){this.point(A,w)}bezierCurveTo(A,w,P,E,y,b){this.point(A,w),this.point(P,E),this.point(y,b)}closePath(){}}const S=f.applyKerf();S!==f&&S.border.output(new x("#93f",c),[1,0,0,1,g[0],g[1]]),f.border.output(new x("#07f",c),[1,0,0,1,g[0],g[1]])}i&&(c.save(),c.setTransform(u,0,0,u,0,0),c.font="bold 22px/22px sans-serif",c.fillStyle="#f00",DC(c,i,10,32,o.width/u-20,26),c.restore())}},[o,c,d,n,t,u,i,e,h]);ge.useEffect(()=>{p()},[p]);const v=ge.useCallback(()=>{if(!o)return;const m=[[0,0],[0,0]];for(const R of n){const A=R.offset[0]+R.boundingBox[0][0],w=R.offset[1]+R.boundingBox[0][1];m[0][0]=Math.min(m[0][0],A),m[0][1]=Math.min(m[0][1],w),m[1][0]=Math.max(m[1][0],A+R.boundingBoxSize[0]),m[1][1]=Math.max(m[1][1],w+R.boundingBoxSize[1])}d.center[0]=(m[0][0]+m[1][0])/2,d.center[1]=(m[0][1]+m[1][1])/2;const f=20,g=o.width/(m[1][0]-m[0][0]+2*f),x=o.height/(m[1][1]-m[0][1]+2*f),S=Math.min(g,x);d.zoom=Math.log2(S),p()},[o,d,p,n]),_=ge.useRef(!0);return ge.useEffect(()=>{if(!o||!c)return;const m=()=>{const y=o.parentElement;if(y){const b=Math.floor(y.clientWidth),U=Math.floor(y.clientHeight);o.width=b*u,o.height=U*u,o.style.width=`${b}px`,o.style.height=`${U}px`,_.current?(_.current=!1,v()):p()}};let f=null;const g=y=>{const b=o.getBoundingClientRect();return[u*(y.clientX-b.left),u*(y.clientY-b.top)]},x=y=>{if(f){const b=d.screenToPoint(y),U=d.screenToPoint(f.pos);f.pos=y,d.center[0]+=U[0]-b[0],d.center[1]+=U[1]-b[1],p()}},S=y=>{f=null},R=y=>{y.preventDefault();const b=g(y);f={buttons:y.buttons,pos:b},x(b)},A=y=>{y.preventDefault(),x(g(y))},w=y=>{y.preventDefault(),f&&S(g(y))},P=y=>{y.preventDefault(),f&&S(g(y))},E=y=>{y.preventDefault();const b=g(y),U=d.screenToPoint(b);d.zoom-=y.deltaY*.003,d.calc(o.width,o.height);const I=d.screenToPoint(b);d.center[0]-=I[0]-U[0],d.center[1]-=I[1]-U[1],p()};return o.addEventListener("mousedown",R),o.addEventListener("mousemove",A),o.addEventListener("mouseout",w),o.addEventListener("mouseup",P),o.addEventListener("wheel",E),window.addEventListener("resize",m),m(),()=>{o.removeEventListener("mousedown",R),o.removeEventListener("mousemove",A),o.removeEventListener("mouseout",w),o.removeEventListener("mouseup",P),o.removeEventListener("wheel",E),window.removeEventListener("resize",m)}},[o,d,v,_,u,p]),q.jsxs(q.Fragment,{children:[q.jsx("canvas",{ref:l}),q.jsxs("div",{className:"status",children:[q.jsx("button",{onClick:r,children:"View: 2D"}),q.jsxs("button",{onClick:s,children:["Grid: ",t?"On":"Off"]}),q.jsx("button",{onClick:v,children:"Center"})]})]})}function gg({value:t,onCancel:e,onImport:n}){const[i,r]=ge.useState(t),s=ge.useCallback(a=>{r(a.currentTarget.value)},[r]),o=ge.useCallback(a=>{a.stopPropagation()},[]);return q.jsxs(q.Fragment,{children:[q.jsx("div",{className:"modal-background",onClick:e}),q.jsx("div",{className:"modal-foreground",onClick:e,children:q.jsxs("div",{className:"inner",onClick:o,children:[q.jsx("button",{className:"close",type:"button",onClick:e,children:"×"}),n?q.jsx("p",{children:"Paste your settings below:"}):q.jsx("p",{children:"Copy your settings below:"}),q.jsx("textarea",{value:i,onChange:s,readOnly:!n,spellCheck:!1}),n&&q.jsx("button",{className:"import",onClick:()=>{try{n(JSON.parse(i))}catch(a){console.error(a),alert("Invalid settings")}},children:"⍈ Import"})]})})]})}function UC(){const t=ge.useMemo(()=>({definitions:{},properties:{version:{type:"int32",metadata:{default:1}},settings:{...Va,properties:{...Va.properties,itemSpacing:{type:"float64",metadata:{default:10,title:"Item Spacing (units)"}}},metadata:{...Va.metadata,order:["itemSpacing",...Va.metadata.order]}},generators:{elements:{discriminator:"kind",mapping:pu.map(b=>({[b.name()]:{properties:{kind:{type:"string",metadata:{default:b.name(),title:b.name()}},colors:{properties:{cutColor:{enum:dg,metadata:{default:"blue",title:"Cut Color"}},scoreColor:{enum:dg,metadata:{default:"red",title:"Score Color"}}},metadata:{title:"Colors",order:["cutColor","scoreColor"],startHidden:!0}},params:b.schema()},metadata:{order:["colors","params"],untabParams:!0}}})).reduce((b,U)=>({...b,...U}),{}),metadata:{default:"BoxPlain",order:pu.map(b=>b.name())}},metadata:{default:1,title:"Generators",itemTitle:"Generator {}"}}},metadata:{order:["settings","generators"]}}),[]),[e,n]=ge.useState(()=>Os(t)),[i,r]=ge.useState(1),[s,o]=ge.useState(null),[a,l]=ge.useState(""),c=e.settings.itemSpacing;ge.useEffect(()=>{const b=[],U=[];let I=1;for(const z of e.generators){const $=pu.find(G=>G.name()===z.kind);if($)try{const G=$.generate(e.settings,z.params);for(const Z of G)b.push({surface:Z,cutColor:z.colors.cutColor,scoreColor:z.colors.scoreColor})}catch(G){console.error(G),U.push(`Generator ${I}: ${G}`)}I++}o(b),l(U.join(`
`))},[e,o,l]);const u=ge.useMemo(()=>{if(!s)return null;const b=[];let U=0;for(const{surface:G,cutColor:Z,scoreColor:N}of s){const Y=G.boundingBox(),Q=(Y[1][0]-Y[0][0]+c)*(Y[1][1]-Y[0][1]+c);U+=Q,b.push({surface:G,boundingBox:Y,boundingBoxSize:[Y[1][0]-Y[0][0],Y[1][1]-Y[0][1]],area:Q,offset:[0,0],cutColor:Z,scoreColor:N})}const I=Math.sqrt(U);let z=0;const $=[0,0];for(const G of b)G.offset[0]=$[0]-G.boundingBox[0][0],G.offset[1]=$[1]-G.boundingBox[0][1],z=Math.max(z,G.boundingBoxSize[1]),$[0]+c+G.boundingBoxSize[0]<=I?$[0]+=c+G.boundingBoxSize[0]:($[0]=0,$[1]+=c+z,z=0);return b},[s,c]),d=ge.useCallback(()=>{if(!u||u.length<=0){alert("Nothing to export!");return}const b=MS(e.settings);for(const{offset:xe,surface:He,cutColor:K,scoreColor:ne}of u)b.addSurface(xe,He,Cs[K],Cs[ne]);b.addComment(e);const{mimeType:U,extension:I,data:z}=b.toFile(),$=new Blob([z],{type:U}),G=window.URL.createObjectURL($);setTimeout(()=>{window.URL.revokeObjectURL(G)},3e4);const Z=document.createElement("a");Z.href=G;const N=new Date,Y=xe=>`${xe<10?"0":""}${xe}`,Q=`${N.getFullYear()}${Y(N.getMonth()+1)}${Y(N.getDate())}`,oe=`${Y(N.getHours())}${Y(N.getMinutes())}${Y(N.getSeconds())}`;Z.download=`${e.generators[0].kind}-${Q}-${oe}${I}`,document.body.appendChild(Z),Z.style.display="none",Z.click(),Z.remove()},[e,u]),[h,p]=ge.useState(!1),v=ge.useCallback(()=>{p(!0)},[]),_=ge.useCallback(b=>{n(b),p(!1),o(null),r(U=>U+1)},[n]);ge.useEffect(()=>{try{const b=window.location.search.substr(1).split("&");for(const U of b){const I=U.split("=");if(I.length===2){const z=decodeURIComponent(I[0]),$=decodeURIComponent(I[1]);if(z==="p"){const G=JSON.parse($);_(G);return}}}}catch{}},[]);const[m,f]=ge.useState(""),g=ge.useCallback(()=>{f(JSON.stringify(e,null,2))},[e,f]),x=ge.useCallback(()=>{const b=window.location.href.replace(/\?.*$/,"");window.open(`${b}?p=${encodeURIComponent(JSON.stringify(e))}`,"_blank")},[e]),[S,R]=ge.useState("2D"),A=ge.useCallback(()=>{R(b=>b==="2D"?"3D":"2D")},[R]),[w,P]=ge.useState(!0),E=ge.useCallback(()=>{P(b=>!b)},[P]),y=ge.useMemo(()=>({units:e.settings.units,defaultKerf:e.settings.defaultKerf,debug:e.settings.debug}),[e]);return q.jsxs(T_.Provider,{value:y,children:[m&&q.jsx(gg,{value:m,onCancel:()=>{f("")}}),h&&q.jsx(gg,{value:"",onCancel:()=>{p(!1)},onImport:_}),q.jsxs("nav",{children:[q.jsxs("h2",{children:[q.jsx("a",{href:"https://github.com/velipso/boxburner",target:"_blank",children:"boxburner"}),q.jsx("span",{className:"version",children:"v0.1-alpha"})]}),q.jsx("div",{className:"nav-main",children:q.jsx(PC,{schema:t,value:e,setValue:n},i)}),q.jsxs("div",{className:"output-buttons",children:[q.jsx("button",{onClick:d,children:"↓ Download"}),q.jsx("button",{onClick:v,children:"⍈ Import"}),q.jsx("button",{onClick:g,children:"⍇ Export"}),q.jsx("button",{onClick:x,children:"⤷ URL"})]})]}),q.jsx("main",{children:u&&(S==="2D"?q.jsx(NC,{grid:w,items:u,error:a,units:e.settings.units,onView:A,onGrid:E}):q.jsx(IC,{grid:w,items:u,error:a,units:e.settings.units,onView:A,onGrid:E}))},i)]})}Xu.createRoot(document.getElementById("root")).render(q.jsx(K_.StrictMode,{children:q.jsx(UC,{})}));
