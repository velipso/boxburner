var pv=Object.defineProperty;var mv=(t,e,n)=>e in t?pv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var zr=(t,e,n)=>mv(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function gv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var rg={exports:{}},ac={},og={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sa=Symbol.for("react.element"),_v=Symbol.for("react.portal"),vv=Symbol.for("react.fragment"),xv=Symbol.for("react.strict_mode"),yv=Symbol.for("react.profiler"),Sv=Symbol.for("react.provider"),Mv=Symbol.for("react.context"),Ev=Symbol.for("react.forward_ref"),wv=Symbol.for("react.suspense"),Tv=Symbol.for("react.memo"),Av=Symbol.for("react.lazy"),Ih=Symbol.iterator;function Cv(t){return t===null||typeof t!="object"?null:(t=Ih&&t[Ih]||t["@@iterator"],typeof t=="function"?t:null)}var sg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ag=Object.assign,lg={};function Zo(t,e,n){this.props=t,this.context=e,this.refs=lg,this.updater=n||sg}Zo.prototype.isReactComponent={};Zo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function cg(){}cg.prototype=Zo.prototype;function pd(t,e,n){this.props=t,this.context=e,this.refs=lg,this.updater=n||sg}var md=pd.prototype=new cg;md.constructor=pd;ag(md,Zo.prototype);md.isPureReactComponent=!0;var Nh=Array.isArray,ug=Object.prototype.hasOwnProperty,gd={current:null},fg={key:!0,ref:!0,__self:!0,__source:!0};function dg(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)ug.call(e,i)&&!fg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:sa,type:t,key:o,ref:s,props:r,_owner:gd.current}}function Rv(t,e){return{$$typeof:sa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _d(t){return typeof t=="object"&&t!==null&&t.$$typeof===sa}function bv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Uh=/\/+/g;function Ic(t,e){return typeof t=="object"&&t!==null&&t.key!=null?bv(""+t.key):e.toString(36)}function ll(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case sa:case _v:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+Ic(s,0):i,Nh(r)?(n="",t!=null&&(n=t.replace(Uh,"$&/")+"/"),ll(r,e,n,"",function(c){return c})):r!=null&&(_d(r)&&(r=Rv(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Uh,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",Nh(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+Ic(o,a);s+=ll(o,e,n,l,r)}else if(l=Cv(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+Ic(o,a++),s+=ll(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function ga(t,e,n){if(t==null)return t;var i=[],r=0;return ll(t,i,"","",function(o){return e.call(n,o,r++)}),i}function Pv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},cl={transition:null},Lv={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:cl,ReactCurrentOwner:gd};function hg(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:ga,forEach:function(t,e,n){ga(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ga(t,function(){e++}),e},toArray:function(t){return ga(t,function(e){return e})||[]},only:function(t){if(!_d(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=Zo;Ge.Fragment=vv;Ge.Profiler=yv;Ge.PureComponent=pd;Ge.StrictMode=xv;Ge.Suspense=wv;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lv;Ge.act=hg;Ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=ag({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=gd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)ug.call(e,l)&&!fg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:sa,type:t.type,key:r,ref:o,props:i,_owner:s}};Ge.createContext=function(t){return t={$$typeof:Mv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Sv,_context:t},t.Consumer=t};Ge.createElement=dg;Ge.createFactory=function(t){var e=dg.bind(null,t);return e.type=t,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:Ev,render:t}};Ge.isValidElement=_d;Ge.lazy=function(t){return{$$typeof:Av,_payload:{_status:-1,_result:t},_init:Pv}};Ge.memo=function(t,e){return{$$typeof:Tv,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=cl.transition;cl.transition={};try{t()}finally{cl.transition=e}};Ge.unstable_act=hg;Ge.useCallback=function(t,e){return qt.current.useCallback(t,e)};Ge.useContext=function(t){return qt.current.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t){return qt.current.useDeferredValue(t)};Ge.useEffect=function(t,e){return qt.current.useEffect(t,e)};Ge.useId=function(){return qt.current.useId()};Ge.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)};Ge.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return qt.current.useMemo(t,e)};Ge.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)};Ge.useRef=function(t){return qt.current.useRef(t)};Ge.useState=function(t){return qt.current.useState(t)};Ge.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)};Ge.useTransition=function(){return qt.current.useTransition()};Ge.version="18.3.1";og.exports=Ge;var ge=og.exports;const Dv=gv(ge);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iv=ge,Nv=Symbol.for("react.element"),Uv=Symbol.for("react.fragment"),Fv=Object.prototype.hasOwnProperty,Ov=Iv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kv={key:!0,ref:!0,__self:!0,__source:!0};function pg(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)Fv.call(e,i)&&!kv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Nv,type:t,key:o,ref:s,props:r,_owner:Ov.current}}ac.Fragment=Uv;ac.jsx=pg;ac.jsxs=pg;rg.exports=ac;var $=rg.exports,ku={},mg={exports:{}},mn={},gg={exports:{}},_g={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,Z){var Q=I.length;I.push(Z);e:for(;0<Q;){var oe=Q-1>>>1,xe=I[oe];if(0<r(xe,Z))I[oe]=Z,I[Q]=xe,Q=oe;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var Z=I[0],Q=I.pop();if(Q!==Z){I[0]=Q;e:for(var oe=0,xe=I.length,He=xe>>>1;oe<He;){var q=2*(oe+1)-1,ne=I[q],ue=q+1,fe=I[ue];if(0>r(ne,Q))ue<xe&&0>r(fe,ne)?(I[oe]=fe,I[ue]=Q,oe=ue):(I[oe]=ne,I[q]=Q,oe=q);else if(ue<xe&&0>r(fe,Q))I[oe]=fe,I[ue]=Q,oe=ue;else break e}}return Z}function r(I,Z){var Q=I.sortIndex-Z.sortIndex;return Q!==0?Q:I.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],c=[],f=1,h=null,d=3,p=!1,_=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(I){for(var Z=n(c);Z!==null;){if(Z.callback===null)i(c);else if(Z.startTime<=I)i(c),Z.sortIndex=Z.expirationTime,e(l,Z);else break;Z=n(c)}}function M(I){if(x=!1,v(I),!_)if(n(l)!==null)_=!0,V(R);else{var Z=n(c);Z!==null&&K(M,Z.startTime-I)}}function R(I,Z){_=!1,x&&(x=!1,u(b),b=-1),p=!0;var Q=d;try{for(v(Z),h=n(l);h!==null&&(!(h.expirationTime>Z)||I&&!P());){var oe=h.callback;if(typeof oe=="function"){h.callback=null,d=h.priorityLevel;var xe=oe(h.expirationTime<=Z);Z=t.unstable_now(),typeof xe=="function"?h.callback=xe:h===n(l)&&i(l),v(Z)}else i(l);h=n(l)}if(h!==null)var He=!0;else{var q=n(c);q!==null&&K(M,q.startTime-Z),He=!1}return He}finally{h=null,d=Q,p=!1}}var T=!1,E=null,b=-1,A=5,y=-1;function P(){return!(t.unstable_now()-y<A)}function B(){if(E!==null){var I=t.unstable_now();y=I;var Z=!0;try{Z=E(!0,I)}finally{Z?F():(T=!1,E=null)}}else T=!1}var F;if(typeof g=="function")F=function(){g(B)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,Y=j.port2;j.port1.onmessage=B,F=function(){Y.postMessage(null)}}else F=function(){m(B,0)};function V(I){E=I,T||(T=!0,F())}function K(I,Z){b=m(function(){I(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,V(R))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(d){case 1:case 2:case 3:var Z=3;break;default:Z=d}var Q=d;d=Z;try{return I()}finally{d=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,Z){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Q=d;d=I;try{return Z()}finally{d=Q}},t.unstable_scheduleCallback=function(I,Z,Q){var oe=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?oe+Q:oe):Q=oe,I){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=Q+xe,I={id:f++,callback:Z,priorityLevel:I,startTime:Q,expirationTime:xe,sortIndex:-1},Q>oe?(I.sortIndex=Q,e(c,I),n(l)===null&&I===n(c)&&(x?(u(b),b=-1):x=!0,K(M,Q-oe))):(I.sortIndex=xe,e(l,I),_||p||(_=!0,V(R))),I},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(I){var Z=d;return function(){var Q=d;d=Z;try{return I.apply(this,arguments)}finally{d=Q}}}})(_g);gg.exports=_g;var Bv=gg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zv=ge,pn=Bv;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vg=new Set,zs={};function Ur(t,e){Uo(t,e),Uo(t+"Capture",e)}function Uo(t,e){for(zs[t]=e,t=0;t<e.length;t++)vg.add(e[t])}var _i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bu=Object.prototype.hasOwnProperty,Hv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fh={},Oh={};function Vv(t){return Bu.call(Oh,t)?!0:Bu.call(Fh,t)?!1:Hv.test(t)?Oh[t]=!0:(Fh[t]=!0,!1)}function Gv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Wv(t,e,n,i){if(e===null||typeof e>"u"||Gv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kt(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ot[t]=new Kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ot[e]=new Kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ot[t]=new Kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ot[t]=new Kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ot[t]=new Kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ot[t]=new Kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ot[t]=new Kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ot[t]=new Kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ot[t]=new Kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var vd=/[\-:]([a-z])/g;function xd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(vd,xd);Ot[e]=new Kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(vd,xd);Ot[e]=new Kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(vd,xd);Ot[e]=new Kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ot[t]=new Kt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ot[t]=new Kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function yd(t,e,n,i){var r=Ot.hasOwnProperty(e)?Ot[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Wv(e,n,r,i)&&(n=null),i||r===null?Vv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Mi=zv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_a=Symbol.for("react.element"),lo=Symbol.for("react.portal"),co=Symbol.for("react.fragment"),Sd=Symbol.for("react.strict_mode"),zu=Symbol.for("react.profiler"),xg=Symbol.for("react.provider"),yg=Symbol.for("react.context"),Md=Symbol.for("react.forward_ref"),Hu=Symbol.for("react.suspense"),Vu=Symbol.for("react.suspense_list"),Ed=Symbol.for("react.memo"),Ii=Symbol.for("react.lazy"),Sg=Symbol.for("react.offscreen"),kh=Symbol.iterator;function os(t){return t===null||typeof t!="object"?null:(t=kh&&t[kh]||t["@@iterator"],typeof t=="function"?t:null)}var ct=Object.assign,Nc;function ys(t){if(Nc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Nc=e&&e[1]||""}return`
`+Nc+t}var Uc=!1;function Fc(t,e){if(!t||Uc)return"";Uc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Uc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ys(t):""}function Xv(t){switch(t.tag){case 5:return ys(t.type);case 16:return ys("Lazy");case 13:return ys("Suspense");case 19:return ys("SuspenseList");case 0:case 2:case 15:return t=Fc(t.type,!1),t;case 11:return t=Fc(t.type.render,!1),t;case 1:return t=Fc(t.type,!0),t;default:return""}}function Gu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case co:return"Fragment";case lo:return"Portal";case zu:return"Profiler";case Sd:return"StrictMode";case Hu:return"Suspense";case Vu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case yg:return(t.displayName||"Context")+".Consumer";case xg:return(t._context.displayName||"Context")+".Provider";case Md:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ed:return e=t.displayName||null,e!==null?e:Gu(t.type)||"Memo";case Ii:e=t._payload,t=t._init;try{return Gu(t(e))}catch{}}return null}function jv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gu(e);case 8:return e===Sd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Zi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Mg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Yv(t){var e=Mg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function va(t){t._valueTracker||(t._valueTracker=Yv(t))}function Eg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Mg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Cl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wu(t,e){var n=e.checked;return ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Zi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function wg(t,e){e=e.checked,e!=null&&yd(t,"checked",e,!1)}function Xu(t,e){wg(t,e);var n=Zi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ju(t,e.type,n):e.hasOwnProperty("defaultValue")&&ju(t,e.type,Zi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ju(t,e,n){(e!=="number"||Cl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ss=Array.isArray;function wo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Zi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Yu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return ct({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(Ss(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Zi(n)}}function Tg(t,e){var n=Zi(e.value),i=Zi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Vh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ag(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $u(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ag(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xa,Cg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xa=xa||document.createElement("div"),xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Hs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Rs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$v=["Webkit","ms","Moz","O"];Object.keys(Rs).forEach(function(t){$v.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Rs[e]=Rs[t]})});function Rg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Rs.hasOwnProperty(t)&&Rs[t]?(""+e).trim():e+"px"}function bg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Rg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var qv=ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qu(t,e){if(e){if(qv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function Ku(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zu=null;function wd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qu=null,To=null,Ao=null;function Gh(t){if(t=ca(t)){if(typeof Qu!="function")throw Error(re(280));var e=t.stateNode;e&&(e=dc(e),Qu(t.stateNode,t.type,e))}}function Pg(t){To?Ao?Ao.push(t):Ao=[t]:To=t}function Lg(){if(To){var t=To,e=Ao;if(Ao=To=null,Gh(t),e)for(t=0;t<e.length;t++)Gh(e[t])}}function Dg(t,e){return t(e)}function Ig(){}var Oc=!1;function Ng(t,e,n){if(Oc)return t(e,n);Oc=!0;try{return Dg(t,e,n)}finally{Oc=!1,(To!==null||Ao!==null)&&(Ig(),Lg())}}function Vs(t,e){var n=t.stateNode;if(n===null)return null;var i=dc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var Ju=!1;if(_i)try{var ss={};Object.defineProperty(ss,"passive",{get:function(){Ju=!0}}),window.addEventListener("test",ss,ss),window.removeEventListener("test",ss,ss)}catch{Ju=!1}function Kv(t,e,n,i,r,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var bs=!1,Rl=null,bl=!1,ef=null,Zv={onError:function(t){bs=!0,Rl=t}};function Qv(t,e,n,i,r,o,s,a,l){bs=!1,Rl=null,Kv.apply(Zv,arguments)}function Jv(t,e,n,i,r,o,s,a,l){if(Qv.apply(this,arguments),bs){if(bs){var c=Rl;bs=!1,Rl=null}else throw Error(re(198));bl||(bl=!0,ef=c)}}function Fr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ug(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wh(t){if(Fr(t)!==t)throw Error(re(188))}function ex(t){var e=t.alternate;if(!e){if(e=Fr(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Wh(r),t;if(o===i)return Wh(r),e;o=o.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function Fg(t){return t=ex(t),t!==null?Og(t):null}function Og(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Og(t);if(e!==null)return e;t=t.sibling}return null}var kg=pn.unstable_scheduleCallback,Xh=pn.unstable_cancelCallback,tx=pn.unstable_shouldYield,nx=pn.unstable_requestPaint,_t=pn.unstable_now,ix=pn.unstable_getCurrentPriorityLevel,Td=pn.unstable_ImmediatePriority,Bg=pn.unstable_UserBlockingPriority,Pl=pn.unstable_NormalPriority,rx=pn.unstable_LowPriority,zg=pn.unstable_IdlePriority,lc=null,Zn=null;function ox(t){if(Zn&&typeof Zn.onCommitFiberRoot=="function")try{Zn.onCommitFiberRoot(lc,t,void 0,(t.current.flags&128)===128)}catch{}}var kn=Math.clz32?Math.clz32:lx,sx=Math.log,ax=Math.LN2;function lx(t){return t>>>=0,t===0?32:31-(sx(t)/ax|0)|0}var ya=64,Sa=4194304;function Ms(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ll(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=Ms(a):(o&=s,o!==0&&(i=Ms(o)))}else s=n&~r,s!==0?i=Ms(s):o!==0&&(i=Ms(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-kn(e),r=1<<n,i|=t[n],e&=~r;return i}function cx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ux(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-kn(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=cx(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function tf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Hg(){var t=ya;return ya<<=1,!(ya&4194240)&&(ya=64),t}function kc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function aa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-kn(e),t[e]=n}function fx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-kn(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function Ad(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-kn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Je=0;function Vg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Gg,Cd,Wg,Xg,jg,nf=!1,Ma=[],Hi=null,Vi=null,Gi=null,Gs=new Map,Ws=new Map,Fi=[],dx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jh(t,e){switch(t){case"focusin":case"focusout":Hi=null;break;case"dragenter":case"dragleave":Vi=null;break;case"mouseover":case"mouseout":Gi=null;break;case"pointerover":case"pointerout":Gs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ws.delete(e.pointerId)}}function as(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=ca(e),e!==null&&Cd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function hx(t,e,n,i,r){switch(e){case"focusin":return Hi=as(Hi,t,e,n,i,r),!0;case"dragenter":return Vi=as(Vi,t,e,n,i,r),!0;case"mouseover":return Gi=as(Gi,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Gs.set(o,as(Gs.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Ws.set(o,as(Ws.get(o)||null,t,e,n,i,r)),!0}return!1}function Yg(t){var e=vr(t.target);if(e!==null){var n=Fr(e);if(n!==null){if(e=n.tag,e===13){if(e=Ug(n),e!==null){t.blockedOn=e,jg(t.priority,function(){Wg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ul(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=rf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Zu=i,n.target.dispatchEvent(i),Zu=null}else return e=ca(n),e!==null&&Cd(e),t.blockedOn=n,!1;e.shift()}return!0}function Yh(t,e,n){ul(t)&&n.delete(e)}function px(){nf=!1,Hi!==null&&ul(Hi)&&(Hi=null),Vi!==null&&ul(Vi)&&(Vi=null),Gi!==null&&ul(Gi)&&(Gi=null),Gs.forEach(Yh),Ws.forEach(Yh)}function ls(t,e){t.blockedOn===e&&(t.blockedOn=null,nf||(nf=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,px)))}function Xs(t){function e(r){return ls(r,t)}if(0<Ma.length){ls(Ma[0],t);for(var n=1;n<Ma.length;n++){var i=Ma[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Hi!==null&&ls(Hi,t),Vi!==null&&ls(Vi,t),Gi!==null&&ls(Gi,t),Gs.forEach(e),Ws.forEach(e),n=0;n<Fi.length;n++)i=Fi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Fi.length&&(n=Fi[0],n.blockedOn===null);)Yg(n),n.blockedOn===null&&Fi.shift()}var Co=Mi.ReactCurrentBatchConfig,Dl=!0;function mx(t,e,n,i){var r=Je,o=Co.transition;Co.transition=null;try{Je=1,Rd(t,e,n,i)}finally{Je=r,Co.transition=o}}function gx(t,e,n,i){var r=Je,o=Co.transition;Co.transition=null;try{Je=4,Rd(t,e,n,i)}finally{Je=r,Co.transition=o}}function Rd(t,e,n,i){if(Dl){var r=rf(t,e,n,i);if(r===null)$c(t,e,i,Il,n),jh(t,i);else if(hx(r,t,e,n,i))i.stopPropagation();else if(jh(t,i),e&4&&-1<dx.indexOf(t)){for(;r!==null;){var o=ca(r);if(o!==null&&Gg(o),o=rf(t,e,n,i),o===null&&$c(t,e,i,Il,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else $c(t,e,i,null,n)}}var Il=null;function rf(t,e,n,i){if(Il=null,t=wd(i),t=vr(t),t!==null)if(e=Fr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ug(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Il=t,null}function $g(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ix()){case Td:return 1;case Bg:return 4;case Pl:case rx:return 16;case zg:return 536870912;default:return 16}default:return 16}}var Bi=null,bd=null,fl=null;function qg(){if(fl)return fl;var t,e=bd,n=e.length,i,r="value"in Bi?Bi.value:Bi.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return fl=r.slice(t,1<i?1-i:void 0)}function dl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ea(){return!0}function $h(){return!1}function gn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ea:$h,this.isPropagationStopped=$h,this}return ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ea)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ea)},persist:function(){},isPersistent:Ea}),e}var Qo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pd=gn(Qo),la=ct({},Qo,{view:0,detail:0}),_x=gn(la),Bc,zc,cs,cc=ct({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ld,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==cs&&(cs&&t.type==="mousemove"?(Bc=t.screenX-cs.screenX,zc=t.screenY-cs.screenY):zc=Bc=0,cs=t),Bc)},movementY:function(t){return"movementY"in t?t.movementY:zc}}),qh=gn(cc),vx=ct({},cc,{dataTransfer:0}),xx=gn(vx),yx=ct({},la,{relatedTarget:0}),Hc=gn(yx),Sx=ct({},Qo,{animationName:0,elapsedTime:0,pseudoElement:0}),Mx=gn(Sx),Ex=ct({},Qo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),wx=gn(Ex),Tx=ct({},Qo,{data:0}),Kh=gn(Tx),Ax={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Rx[t])?!!e[t]:!1}function Ld(){return bx}var Px=ct({},la,{key:function(t){if(t.key){var e=Ax[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Cx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ld,charCode:function(t){return t.type==="keypress"?dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Lx=gn(Px),Dx=ct({},cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zh=gn(Dx),Ix=ct({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ld}),Nx=gn(Ix),Ux=ct({},Qo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fx=gn(Ux),Ox=ct({},cc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kx=gn(Ox),Bx=[9,13,27,32],Dd=_i&&"CompositionEvent"in window,Ps=null;_i&&"documentMode"in document&&(Ps=document.documentMode);var zx=_i&&"TextEvent"in window&&!Ps,Kg=_i&&(!Dd||Ps&&8<Ps&&11>=Ps),Qh=" ",Jh=!1;function Zg(t,e){switch(t){case"keyup":return Bx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var uo=!1;function Hx(t,e){switch(t){case"compositionend":return Qg(e);case"keypress":return e.which!==32?null:(Jh=!0,Qh);case"textInput":return t=e.data,t===Qh&&Jh?null:t;default:return null}}function Vx(t,e){if(uo)return t==="compositionend"||!Dd&&Zg(t,e)?(t=qg(),fl=bd=Bi=null,uo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Kg&&e.locale!=="ko"?null:e.data;default:return null}}var Gx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ep(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Gx[t.type]:e==="textarea"}function Jg(t,e,n,i){Pg(i),e=Nl(e,"onChange"),0<e.length&&(n=new Pd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ls=null,js=null;function Wx(t){u0(t,0)}function uc(t){var e=po(t);if(Eg(e))return t}function Xx(t,e){if(t==="change")return e}var e0=!1;if(_i){var Vc;if(_i){var Gc="oninput"in document;if(!Gc){var tp=document.createElement("div");tp.setAttribute("oninput","return;"),Gc=typeof tp.oninput=="function"}Vc=Gc}else Vc=!1;e0=Vc&&(!document.documentMode||9<document.documentMode)}function np(){Ls&&(Ls.detachEvent("onpropertychange",t0),js=Ls=null)}function t0(t){if(t.propertyName==="value"&&uc(js)){var e=[];Jg(e,js,t,wd(t)),Ng(Wx,e)}}function jx(t,e,n){t==="focusin"?(np(),Ls=e,js=n,Ls.attachEvent("onpropertychange",t0)):t==="focusout"&&np()}function Yx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uc(js)}function $x(t,e){if(t==="click")return uc(e)}function qx(t,e){if(t==="input"||t==="change")return uc(e)}function Kx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Hn=typeof Object.is=="function"?Object.is:Kx;function Ys(t,e){if(Hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Bu.call(e,r)||!Hn(t[r],e[r]))return!1}return!0}function ip(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rp(t,e){var n=ip(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ip(n)}}function n0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?n0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function i0(){for(var t=window,e=Cl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Cl(t.document)}return e}function Id(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Zx(t){var e=i0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&n0(n.ownerDocument.documentElement,n)){if(i!==null&&Id(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=rp(n,o);var s=rp(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Qx=_i&&"documentMode"in document&&11>=document.documentMode,fo=null,of=null,Ds=null,sf=!1;function op(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sf||fo==null||fo!==Cl(i)||(i=fo,"selectionStart"in i&&Id(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ds&&Ys(Ds,i)||(Ds=i,i=Nl(of,"onSelect"),0<i.length&&(e=new Pd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=fo)))}function wa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ho={animationend:wa("Animation","AnimationEnd"),animationiteration:wa("Animation","AnimationIteration"),animationstart:wa("Animation","AnimationStart"),transitionend:wa("Transition","TransitionEnd")},Wc={},r0={};_i&&(r0=document.createElement("div").style,"AnimationEvent"in window||(delete ho.animationend.animation,delete ho.animationiteration.animation,delete ho.animationstart.animation),"TransitionEvent"in window||delete ho.transitionend.transition);function fc(t){if(Wc[t])return Wc[t];if(!ho[t])return t;var e=ho[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in r0)return Wc[t]=e[n];return t}var o0=fc("animationend"),s0=fc("animationiteration"),a0=fc("animationstart"),l0=fc("transitionend"),c0=new Map,sp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nr(t,e){c0.set(t,e),Ur(e,[t])}for(var Xc=0;Xc<sp.length;Xc++){var jc=sp[Xc],Jx=jc.toLowerCase(),ey=jc[0].toUpperCase()+jc.slice(1);nr(Jx,"on"+ey)}nr(o0,"onAnimationEnd");nr(s0,"onAnimationIteration");nr(a0,"onAnimationStart");nr("dblclick","onDoubleClick");nr("focusin","onFocus");nr("focusout","onBlur");nr(l0,"onTransitionEnd");Uo("onMouseEnter",["mouseout","mouseover"]);Uo("onMouseLeave",["mouseout","mouseover"]);Uo("onPointerEnter",["pointerout","pointerover"]);Uo("onPointerLeave",["pointerout","pointerover"]);Ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Es="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ty=new Set("cancel close invalid load scroll toggle".split(" ").concat(Es));function ap(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Jv(i,e,void 0,t),t.currentTarget=null}function u0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;ap(r,a,c),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;ap(r,a,c),o=l}}}if(bl)throw t=ef,bl=!1,ef=null,t}function nt(t,e){var n=e[ff];n===void 0&&(n=e[ff]=new Set);var i=t+"__bubble";n.has(i)||(f0(e,t,2,!1),n.add(i))}function Yc(t,e,n){var i=0;e&&(i|=4),f0(n,t,i,e)}var Ta="_reactListening"+Math.random().toString(36).slice(2);function $s(t){if(!t[Ta]){t[Ta]=!0,vg.forEach(function(n){n!=="selectionchange"&&(ty.has(n)||Yc(n,!1,t),Yc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ta]||(e[Ta]=!0,Yc("selectionchange",!1,e))}}function f0(t,e,n,i){switch($g(e)){case 1:var r=mx;break;case 4:r=gx;break;default:r=Rd}n=r.bind(null,e,n,t),r=void 0,!Ju||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function $c(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=vr(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}Ng(function(){var c=o,f=wd(n),h=[];e:{var d=c0.get(t);if(d!==void 0){var p=Pd,_=t;switch(t){case"keypress":if(dl(n)===0)break e;case"keydown":case"keyup":p=Lx;break;case"focusin":_="focus",p=Hc;break;case"focusout":_="blur",p=Hc;break;case"beforeblur":case"afterblur":p=Hc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=qh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=xx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Nx;break;case o0:case s0:case a0:p=Mx;break;case l0:p=Fx;break;case"scroll":p=_x;break;case"wheel":p=kx;break;case"copy":case"cut":case"paste":p=wx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Zh}var x=(e&4)!==0,m=!x&&t==="scroll",u=x?d!==null?d+"Capture":null:d;x=[];for(var g=c,v;g!==null;){v=g;var M=v.stateNode;if(v.tag===5&&M!==null&&(v=M,u!==null&&(M=Vs(g,u),M!=null&&x.push(qs(g,M,v)))),m)break;g=g.return}0<x.length&&(d=new p(d,_,null,n,f),h.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Zu&&(_=n.relatedTarget||n.fromElement)&&(vr(_)||_[vi]))break e;if((p||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?vr(_):null,_!==null&&(m=Fr(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(x=qh,M="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=Zh,M="onPointerLeave",u="onPointerEnter",g="pointer"),m=p==null?d:po(p),v=_==null?d:po(_),d=new x(M,g+"leave",p,n,f),d.target=m,d.relatedTarget=v,M=null,vr(f)===c&&(x=new x(u,g+"enter",_,n,f),x.target=v,x.relatedTarget=m,M=x),m=M,p&&_)t:{for(x=p,u=_,g=0,v=x;v;v=Hr(v))g++;for(v=0,M=u;M;M=Hr(M))v++;for(;0<g-v;)x=Hr(x),g--;for(;0<v-g;)u=Hr(u),v--;for(;g--;){if(x===u||u!==null&&x===u.alternate)break t;x=Hr(x),u=Hr(u)}x=null}else x=null;p!==null&&lp(h,d,p,x,!1),_!==null&&m!==null&&lp(h,m,_,x,!0)}}e:{if(d=c?po(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var R=Xx;else if(ep(d))if(e0)R=qx;else{R=Yx;var T=jx}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(R=$x);if(R&&(R=R(t,c))){Jg(h,R,n,f);break e}T&&T(t,d,c),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&ju(d,"number",d.value)}switch(T=c?po(c):window,t){case"focusin":(ep(T)||T.contentEditable==="true")&&(fo=T,of=c,Ds=null);break;case"focusout":Ds=of=fo=null;break;case"mousedown":sf=!0;break;case"contextmenu":case"mouseup":case"dragend":sf=!1,op(h,n,f);break;case"selectionchange":if(Qx)break;case"keydown":case"keyup":op(h,n,f)}var E;if(Dd)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else uo?Zg(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Kg&&n.locale!=="ko"&&(uo||b!=="onCompositionStart"?b==="onCompositionEnd"&&uo&&(E=qg()):(Bi=f,bd="value"in Bi?Bi.value:Bi.textContent,uo=!0)),T=Nl(c,b),0<T.length&&(b=new Kh(b,t,null,n,f),h.push({event:b,listeners:T}),E?b.data=E:(E=Qg(n),E!==null&&(b.data=E)))),(E=zx?Hx(t,n):Vx(t,n))&&(c=Nl(c,"onBeforeInput"),0<c.length&&(f=new Kh("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=E))}u0(h,e)})}function qs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Nl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Vs(t,n),o!=null&&i.unshift(qs(t,o,r)),o=Vs(t,e),o!=null&&i.push(qs(t,o,r))),t=t.return}return i}function Hr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lp(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Vs(n,o),l!=null&&s.unshift(qs(n,l,a))):r||(l=Vs(n,o),l!=null&&s.push(qs(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var ny=/\r\n?/g,iy=/\u0000|\uFFFD/g;function cp(t){return(typeof t=="string"?t:""+t).replace(ny,`
`).replace(iy,"")}function Aa(t,e,n){if(e=cp(e),cp(t)!==e&&n)throw Error(re(425))}function Ul(){}var af=null,lf=null;function cf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var uf=typeof setTimeout=="function"?setTimeout:void 0,ry=typeof clearTimeout=="function"?clearTimeout:void 0,up=typeof Promise=="function"?Promise:void 0,oy=typeof queueMicrotask=="function"?queueMicrotask:typeof up<"u"?function(t){return up.resolve(null).then(t).catch(sy)}:uf;function sy(t){setTimeout(function(){throw t})}function qc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Xs(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Xs(e)}function Wi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function fp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Jo=Math.random().toString(36).slice(2),Yn="__reactFiber$"+Jo,Ks="__reactProps$"+Jo,vi="__reactContainer$"+Jo,ff="__reactEvents$"+Jo,ay="__reactListeners$"+Jo,ly="__reactHandles$"+Jo;function vr(t){var e=t[Yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[vi]||n[Yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fp(t);t!==null;){if(n=t[Yn])return n;t=fp(t)}return e}t=n,n=t.parentNode}return null}function ca(t){return t=t[Yn]||t[vi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function po(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function dc(t){return t[Ks]||null}var df=[],mo=-1;function ir(t){return{current:t}}function rt(t){0>mo||(t.current=df[mo],df[mo]=null,mo--)}function et(t,e){mo++,df[mo]=t.current,t.current=e}var Qi={},Wt=ir(Qi),Jt=ir(!1),Ar=Qi;function Fo(t,e){var n=t.type.contextTypes;if(!n)return Qi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function en(t){return t=t.childContextTypes,t!=null}function Fl(){rt(Jt),rt(Wt)}function dp(t,e,n){if(Wt.current!==Qi)throw Error(re(168));et(Wt,e),et(Jt,n)}function d0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,jv(t)||"Unknown",r));return ct({},n,i)}function Ol(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qi,Ar=Wt.current,et(Wt,t),et(Jt,Jt.current),!0}function hp(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=d0(t,e,Ar),i.__reactInternalMemoizedMergedChildContext=t,rt(Jt),rt(Wt),et(Wt,t)):rt(Jt),et(Jt,n)}var ci=null,hc=!1,Kc=!1;function h0(t){ci===null?ci=[t]:ci.push(t)}function cy(t){hc=!0,h0(t)}function rr(){if(!Kc&&ci!==null){Kc=!0;var t=0,e=Je;try{var n=ci;for(Je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ci=null,hc=!1}catch(r){throw ci!==null&&(ci=ci.slice(t+1)),kg(Td,rr),r}finally{Je=e,Kc=!1}}return null}var go=[],_o=0,kl=null,Bl=0,xn=[],yn=0,Cr=null,fi=1,di="";function hr(t,e){go[_o++]=Bl,go[_o++]=kl,kl=t,Bl=e}function p0(t,e,n){xn[yn++]=fi,xn[yn++]=di,xn[yn++]=Cr,Cr=t;var i=fi;t=di;var r=32-kn(i)-1;i&=~(1<<r),n+=1;var o=32-kn(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,fi=1<<32-kn(e)+r|n<<r|i,di=o+t}else fi=1<<o|n<<r|i,di=t}function Nd(t){t.return!==null&&(hr(t,1),p0(t,1,0))}function Ud(t){for(;t===kl;)kl=go[--_o],go[_o]=null,Bl=go[--_o],go[_o]=null;for(;t===Cr;)Cr=xn[--yn],xn[yn]=null,di=xn[--yn],xn[yn]=null,fi=xn[--yn],xn[yn]=null}var hn=null,dn=null,st=!1,Un=null;function m0(t,e){var n=Mn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function pp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hn=t,dn=Wi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hn=t,dn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Cr!==null?{id:fi,overflow:di}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Mn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,hn=t,dn=null,!0):!1;default:return!1}}function hf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pf(t){if(st){var e=dn;if(e){var n=e;if(!pp(t,e)){if(hf(t))throw Error(re(418));e=Wi(n.nextSibling);var i=hn;e&&pp(t,e)?m0(i,n):(t.flags=t.flags&-4097|2,st=!1,hn=t)}}else{if(hf(t))throw Error(re(418));t.flags=t.flags&-4097|2,st=!1,hn=t}}}function mp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hn=t}function Ca(t){if(t!==hn)return!1;if(!st)return mp(t),st=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!cf(t.type,t.memoizedProps)),e&&(e=dn)){if(hf(t))throw g0(),Error(re(418));for(;e;)m0(t,e),e=Wi(e.nextSibling)}if(mp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){dn=Wi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}dn=null}}else dn=hn?Wi(t.stateNode.nextSibling):null;return!0}function g0(){for(var t=dn;t;)t=Wi(t.nextSibling)}function Oo(){dn=hn=null,st=!1}function Fd(t){Un===null?Un=[t]:Un.push(t)}var uy=Mi.ReactCurrentBatchConfig;function us(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function Ra(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gp(t){var e=t._init;return e(t._payload)}function _0(t){function e(u,g){if(t){var v=u.deletions;v===null?(u.deletions=[g],u.flags|=16):v.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=$i(u,g),u.index=0,u.sibling=null,u}function o(u,g,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<g?(u.flags|=2,g):v):(u.flags|=2,g)):(u.flags|=1048576,g)}function s(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,g,v,M){return g===null||g.tag!==6?(g=iu(v,u.mode,M),g.return=u,g):(g=r(g,v),g.return=u,g)}function l(u,g,v,M){var R=v.type;return R===co?f(u,g,v.props.children,M,v.key):g!==null&&(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ii&&gp(R)===g.type)?(M=r(g,v.props),M.ref=us(u,g,v),M.return=u,M):(M=xl(v.type,v.key,v.props,null,u.mode,M),M.ref=us(u,g,v),M.return=u,M)}function c(u,g,v,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=ru(v,u.mode,M),g.return=u,g):(g=r(g,v.children||[]),g.return=u,g)}function f(u,g,v,M,R){return g===null||g.tag!==7?(g=wr(v,u.mode,M,R),g.return=u,g):(g=r(g,v),g.return=u,g)}function h(u,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=iu(""+g,u.mode,v),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case _a:return v=xl(g.type,g.key,g.props,null,u.mode,v),v.ref=us(u,null,g),v.return=u,v;case lo:return g=ru(g,u.mode,v),g.return=u,g;case Ii:var M=g._init;return h(u,M(g._payload),v)}if(Ss(g)||os(g))return g=wr(g,u.mode,v,null),g.return=u,g;Ra(u,g)}return null}function d(u,g,v,M){var R=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return R!==null?null:a(u,g,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case _a:return v.key===R?l(u,g,v,M):null;case lo:return v.key===R?c(u,g,v,M):null;case Ii:return R=v._init,d(u,g,R(v._payload),M)}if(Ss(v)||os(v))return R!==null?null:f(u,g,v,M,null);Ra(u,v)}return null}function p(u,g,v,M,R){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(v)||null,a(g,u,""+M,R);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case _a:return u=u.get(M.key===null?v:M.key)||null,l(g,u,M,R);case lo:return u=u.get(M.key===null?v:M.key)||null,c(g,u,M,R);case Ii:var T=M._init;return p(u,g,v,T(M._payload),R)}if(Ss(M)||os(M))return u=u.get(v)||null,f(g,u,M,R,null);Ra(g,M)}return null}function _(u,g,v,M){for(var R=null,T=null,E=g,b=g=0,A=null;E!==null&&b<v.length;b++){E.index>b?(A=E,E=null):A=E.sibling;var y=d(u,E,v[b],M);if(y===null){E===null&&(E=A);break}t&&E&&y.alternate===null&&e(u,E),g=o(y,g,b),T===null?R=y:T.sibling=y,T=y,E=A}if(b===v.length)return n(u,E),st&&hr(u,b),R;if(E===null){for(;b<v.length;b++)E=h(u,v[b],M),E!==null&&(g=o(E,g,b),T===null?R=E:T.sibling=E,T=E);return st&&hr(u,b),R}for(E=i(u,E);b<v.length;b++)A=p(E,u,b,v[b],M),A!==null&&(t&&A.alternate!==null&&E.delete(A.key===null?b:A.key),g=o(A,g,b),T===null?R=A:T.sibling=A,T=A);return t&&E.forEach(function(P){return e(u,P)}),st&&hr(u,b),R}function x(u,g,v,M){var R=os(v);if(typeof R!="function")throw Error(re(150));if(v=R.call(v),v==null)throw Error(re(151));for(var T=R=null,E=g,b=g=0,A=null,y=v.next();E!==null&&!y.done;b++,y=v.next()){E.index>b?(A=E,E=null):A=E.sibling;var P=d(u,E,y.value,M);if(P===null){E===null&&(E=A);break}t&&E&&P.alternate===null&&e(u,E),g=o(P,g,b),T===null?R=P:T.sibling=P,T=P,E=A}if(y.done)return n(u,E),st&&hr(u,b),R;if(E===null){for(;!y.done;b++,y=v.next())y=h(u,y.value,M),y!==null&&(g=o(y,g,b),T===null?R=y:T.sibling=y,T=y);return st&&hr(u,b),R}for(E=i(u,E);!y.done;b++,y=v.next())y=p(E,u,b,y.value,M),y!==null&&(t&&y.alternate!==null&&E.delete(y.key===null?b:y.key),g=o(y,g,b),T===null?R=y:T.sibling=y,T=y);return t&&E.forEach(function(B){return e(u,B)}),st&&hr(u,b),R}function m(u,g,v,M){if(typeof v=="object"&&v!==null&&v.type===co&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case _a:e:{for(var R=v.key,T=g;T!==null;){if(T.key===R){if(R=v.type,R===co){if(T.tag===7){n(u,T.sibling),g=r(T,v.props.children),g.return=u,u=g;break e}}else if(T.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ii&&gp(R)===T.type){n(u,T.sibling),g=r(T,v.props),g.ref=us(u,T,v),g.return=u,u=g;break e}n(u,T);break}else e(u,T);T=T.sibling}v.type===co?(g=wr(v.props.children,u.mode,M,v.key),g.return=u,u=g):(M=xl(v.type,v.key,v.props,null,u.mode,M),M.ref=us(u,g,v),M.return=u,u=M)}return s(u);case lo:e:{for(T=v.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(u,g.sibling),g=r(g,v.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=ru(v,u.mode,M),g.return=u,u=g}return s(u);case Ii:return T=v._init,m(u,g,T(v._payload),M)}if(Ss(v))return _(u,g,v,M);if(os(v))return x(u,g,v,M);Ra(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,v),g.return=u,u=g):(n(u,g),g=iu(v,u.mode,M),g.return=u,u=g),s(u)):n(u,g)}return m}var ko=_0(!0),v0=_0(!1),zl=ir(null),Hl=null,vo=null,Od=null;function kd(){Od=vo=Hl=null}function Bd(t){var e=zl.current;rt(zl),t._currentValue=e}function mf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ro(t,e){Hl=t,Od=vo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Qt=!0),t.firstContext=null)}function An(t){var e=t._currentValue;if(Od!==t)if(t={context:t,memoizedValue:e,next:null},vo===null){if(Hl===null)throw Error(re(308));vo=t,Hl.dependencies={lanes:0,firstContext:t}}else vo=vo.next=t;return e}var xr=null;function zd(t){xr===null?xr=[t]:xr.push(t)}function x0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,zd(e)):(n.next=r.next,r.next=n),e.interleaved=n,xi(t,i)}function xi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ni=!1;function Hd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function y0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Xi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,xi(t,n)}return r=i.interleaved,r===null?(e.next=e,zd(i)):(e.next=r.next,r.next=e),i.interleaved=e,xi(t,n)}function hl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ad(t,n)}}function _p(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Vl(t,e,n,i){var r=t.updateQueue;Ni=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(o!==null){var h=r.baseState;s=0,f=c=l=null,a=o;do{var d=a.lane,p=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,x=a;switch(d=e,p=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){h=_.call(p,h,d);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,d=typeof _=="function"?_.call(p,h,d):_,d==null)break e;h=ct({},h,d);break e;case 2:Ni=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=p,l=h):f=f.next=p,s|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);br|=s,t.lanes=s,t.memoizedState=h}}function vp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var ua={},Qn=ir(ua),Zs=ir(ua),Qs=ir(ua);function yr(t){if(t===ua)throw Error(re(174));return t}function Vd(t,e){switch(et(Qs,e),et(Zs,t),et(Qn,ua),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:$u(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=$u(e,t)}rt(Qn),et(Qn,e)}function Bo(){rt(Qn),rt(Zs),rt(Qs)}function S0(t){yr(Qs.current);var e=yr(Qn.current),n=$u(e,t.type);e!==n&&(et(Zs,t),et(Qn,n))}function Gd(t){Zs.current===t&&(rt(Qn),rt(Zs))}var at=ir(0);function Gl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zc=[];function Wd(){for(var t=0;t<Zc.length;t++)Zc[t]._workInProgressVersionPrimary=null;Zc.length=0}var pl=Mi.ReactCurrentDispatcher,Qc=Mi.ReactCurrentBatchConfig,Rr=0,lt=null,wt=null,Lt=null,Wl=!1,Is=!1,Js=0,fy=0;function kt(){throw Error(re(321))}function Xd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Hn(t[n],e[n]))return!1;return!0}function jd(t,e,n,i,r,o){if(Rr=o,lt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pl.current=t===null||t.memoizedState===null?my:gy,t=n(i,r),Is){o=0;do{if(Is=!1,Js=0,25<=o)throw Error(re(301));o+=1,Lt=wt=null,e.updateQueue=null,pl.current=_y,t=n(i,r)}while(Is)}if(pl.current=Xl,e=wt!==null&&wt.next!==null,Rr=0,Lt=wt=lt=null,Wl=!1,e)throw Error(re(300));return t}function Yd(){var t=Js!==0;return Js=0,t}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?lt.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function Cn(){if(wt===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Lt===null?lt.memoizedState:Lt.next;if(e!==null)Lt=e,wt=t;else{if(t===null)throw Error(re(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Lt===null?lt.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function ea(t,e){return typeof e=="function"?e(t):e}function Jc(t){var e=Cn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=wt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,c=o;do{var f=c.lane;if((Rr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,s=i):l=l.next=h,lt.lanes|=f,br|=f}c=c.next}while(c!==null&&c!==o);l===null?s=i:l.next=a,Hn(i,e.memoizedState)||(Qt=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,lt.lanes|=o,br|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function eu(t){var e=Cn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);Hn(o,e.memoizedState)||(Qt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function M0(){}function E0(t,e){var n=lt,i=Cn(),r=e(),o=!Hn(i.memoizedState,r);if(o&&(i.memoizedState=r,Qt=!0),i=i.queue,$d(A0.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Lt!==null&&Lt.memoizedState.tag&1){if(n.flags|=2048,ta(9,T0.bind(null,n,i,r,e),void 0,null),Dt===null)throw Error(re(349));Rr&30||w0(n,e,r)}return r}function w0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=lt.updateQueue,e===null?(e={lastEffect:null,stores:null},lt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function T0(t,e,n,i){e.value=n,e.getSnapshot=i,C0(e)&&R0(t)}function A0(t,e,n){return n(function(){C0(e)&&R0(t)})}function C0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Hn(t,n)}catch{return!0}}function R0(t){var e=xi(t,1);e!==null&&Bn(e,t,1,-1)}function xp(t){var e=Gn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},e.queue=t,t=t.dispatch=py.bind(null,lt,t),[e.memoizedState,t]}function ta(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=lt.updateQueue,e===null?(e={lastEffect:null,stores:null},lt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function b0(){return Cn().memoizedState}function ml(t,e,n,i){var r=Gn();lt.flags|=t,r.memoizedState=ta(1|e,n,void 0,i===void 0?null:i)}function pc(t,e,n,i){var r=Cn();i=i===void 0?null:i;var o=void 0;if(wt!==null){var s=wt.memoizedState;if(o=s.destroy,i!==null&&Xd(i,s.deps)){r.memoizedState=ta(e,n,o,i);return}}lt.flags|=t,r.memoizedState=ta(1|e,n,o,i)}function yp(t,e){return ml(8390656,8,t,e)}function $d(t,e){return pc(2048,8,t,e)}function P0(t,e){return pc(4,2,t,e)}function L0(t,e){return pc(4,4,t,e)}function D0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function I0(t,e,n){return n=n!=null?n.concat([t]):null,pc(4,4,D0.bind(null,e,t),n)}function qd(){}function N0(t,e){var n=Cn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Xd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function U0(t,e){var n=Cn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Xd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function F0(t,e,n){return Rr&21?(Hn(n,e)||(n=Hg(),lt.lanes|=n,br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Qt=!0),t.memoizedState=n)}function dy(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var i=Qc.transition;Qc.transition={};try{t(!1),e()}finally{Je=n,Qc.transition=i}}function O0(){return Cn().memoizedState}function hy(t,e,n){var i=Yi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},k0(t))B0(e,n);else if(n=x0(t,e,n,i),n!==null){var r=$t();Bn(n,t,i,r),z0(n,e,i)}}function py(t,e,n){var i=Yi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(k0(t))B0(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,Hn(a,s)){var l=e.interleaved;l===null?(r.next=r,zd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=x0(t,e,r,i),n!==null&&(r=$t(),Bn(n,t,i,r),z0(n,e,i))}}function k0(t){var e=t.alternate;return t===lt||e!==null&&e===lt}function B0(t,e){Is=Wl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function z0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ad(t,n)}}var Xl={readContext:An,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},my={readContext:An,useCallback:function(t,e){return Gn().memoizedState=[t,e===void 0?null:e],t},useContext:An,useEffect:yp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ml(4194308,4,D0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ml(4194308,4,t,e)},useInsertionEffect:function(t,e){return ml(4,2,t,e)},useMemo:function(t,e){var n=Gn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Gn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=hy.bind(null,lt,t),[i.memoizedState,t]},useRef:function(t){var e=Gn();return t={current:t},e.memoizedState=t},useState:xp,useDebugValue:qd,useDeferredValue:function(t){return Gn().memoizedState=t},useTransition:function(){var t=xp(!1),e=t[0];return t=dy.bind(null,t[1]),Gn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=lt,r=Gn();if(st){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Dt===null)throw Error(re(349));Rr&30||w0(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,yp(A0.bind(null,i,o,t),[t]),i.flags|=2048,ta(9,T0.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=Gn(),e=Dt.identifierPrefix;if(st){var n=di,i=fi;n=(i&~(1<<32-kn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Js++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=fy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},gy={readContext:An,useCallback:N0,useContext:An,useEffect:$d,useImperativeHandle:I0,useInsertionEffect:P0,useLayoutEffect:L0,useMemo:U0,useReducer:Jc,useRef:b0,useState:function(){return Jc(ea)},useDebugValue:qd,useDeferredValue:function(t){var e=Cn();return F0(e,wt.memoizedState,t)},useTransition:function(){var t=Jc(ea)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:M0,useSyncExternalStore:E0,useId:O0,unstable_isNewReconciler:!1},_y={readContext:An,useCallback:N0,useContext:An,useEffect:$d,useImperativeHandle:I0,useInsertionEffect:P0,useLayoutEffect:L0,useMemo:U0,useReducer:eu,useRef:b0,useState:function(){return eu(ea)},useDebugValue:qd,useDeferredValue:function(t){var e=Cn();return wt===null?e.memoizedState=t:F0(e,wt.memoizedState,t)},useTransition:function(){var t=eu(ea)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:M0,useSyncExternalStore:E0,useId:O0,unstable_isNewReconciler:!1};function In(t,e){if(t&&t.defaultProps){e=ct({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ct({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var mc={isMounted:function(t){return(t=t._reactInternals)?Fr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=$t(),r=Yi(t),o=gi(i,r);o.payload=e,n!=null&&(o.callback=n),e=Xi(t,o,r),e!==null&&(Bn(e,t,r,i),hl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=$t(),r=Yi(t),o=gi(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Xi(t,o,r),e!==null&&(Bn(e,t,r,i),hl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=$t(),i=Yi(t),r=gi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Xi(t,r,i),e!==null&&(Bn(e,t,i,n),hl(e,t,i))}};function Sp(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!Ys(n,i)||!Ys(r,o):!0}function H0(t,e,n){var i=!1,r=Qi,o=e.contextType;return typeof o=="object"&&o!==null?o=An(o):(r=en(e)?Ar:Wt.current,i=e.contextTypes,o=(i=i!=null)?Fo(t,r):Qi),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=mc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function Mp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&mc.enqueueReplaceState(e,e.state,null)}function _f(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Hd(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=An(o):(o=en(e)?Ar:Wt.current,r.context=Fo(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(gf(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&mc.enqueueReplaceState(r,r.state,null),Vl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function zo(t,e){try{var n="",i=e;do n+=Xv(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function tu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function vf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var vy=typeof WeakMap=="function"?WeakMap:Map;function V0(t,e,n){n=gi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Yl||(Yl=!0,Rf=i),vf(t,e)},n}function G0(t,e,n){n=gi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){vf(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){vf(t,e),typeof i!="function"&&(ji===null?ji=new Set([this]):ji.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Ep(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new vy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Dy.bind(null,t,e,n),e.then(t,t))}function wp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Tp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=gi(-1,1),e.tag=2,Xi(n,e,1))),n.lanes|=1),t)}var xy=Mi.ReactCurrentOwner,Qt=!1;function Yt(t,e,n,i){e.child=t===null?v0(e,null,n,i):ko(e,t.child,n,i)}function Ap(t,e,n,i,r){n=n.render;var o=e.ref;return Ro(e,r),i=jd(t,e,n,i,o,r),n=Yd(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,yi(t,e,r)):(st&&n&&Nd(e),e.flags|=1,Yt(t,e,i,r),e.child)}function Cp(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!ih(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,W0(t,e,o,i,r)):(t=xl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ys,n(s,i)&&t.ref===e.ref)return yi(t,e,r)}return e.flags|=1,t=$i(o,i),t.ref=e.ref,t.return=e,e.child=t}function W0(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(Ys(o,i)&&t.ref===e.ref)if(Qt=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(Qt=!0);else return e.lanes=t.lanes,yi(t,e,r)}return xf(t,e,n,i,r)}function X0(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(yo,un),un|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,et(yo,un),un|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,et(yo,un),un|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,et(yo,un),un|=i;return Yt(t,e,r,n),e.child}function j0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function xf(t,e,n,i,r){var o=en(n)?Ar:Wt.current;return o=Fo(e,o),Ro(e,r),n=jd(t,e,n,i,o,r),i=Yd(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,yi(t,e,r)):(st&&i&&Nd(e),e.flags|=1,Yt(t,e,n,r),e.child)}function Rp(t,e,n,i,r){if(en(n)){var o=!0;Ol(e)}else o=!1;if(Ro(e,r),e.stateNode===null)gl(t,e),H0(e,n,i),_f(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=An(c):(c=en(n)?Ar:Wt.current,c=Fo(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Mp(e,s,i,c),Ni=!1;var d=e.memoizedState;s.state=d,Vl(e,i,s,r),l=e.memoizedState,a!==i||d!==l||Jt.current||Ni?(typeof f=="function"&&(gf(e,n,f,i),l=e.memoizedState),(a=Ni||Sp(e,n,a,i,d,l,c))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=c,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,y0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:In(e.type,a),s.props=c,h=e.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=An(l):(l=en(n)?Ar:Wt.current,l=Fo(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Mp(e,s,i,l),Ni=!1,d=e.memoizedState,s.state=d,Vl(e,i,s,r);var _=e.memoizedState;a!==h||d!==_||Jt.current||Ni?(typeof p=="function"&&(gf(e,n,p,i),_=e.memoizedState),(c=Ni||Sp(e,n,c,i,d,_,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,_,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,_,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),s.props=i,s.state=_,s.context=l,i=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return yf(t,e,n,i,o,r)}function yf(t,e,n,i,r,o){j0(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&hp(e,n,!1),yi(t,e,o);i=e.stateNode,xy.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=ko(e,t.child,null,o),e.child=ko(e,null,a,o)):Yt(t,e,a,o),e.memoizedState=i.state,r&&hp(e,n,!0),e.child}function Y0(t){var e=t.stateNode;e.pendingContext?dp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&dp(t,e.context,!1),Vd(t,e.containerInfo)}function bp(t,e,n,i,r){return Oo(),Fd(r),e.flags|=256,Yt(t,e,n,i),e.child}var Sf={dehydrated:null,treeContext:null,retryLane:0};function Mf(t){return{baseLanes:t,cachePool:null,transitions:null}}function $0(t,e,n){var i=e.pendingProps,r=at.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),et(at,r&1),t===null)return pf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=vc(s,i,0,null),t=wr(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Mf(n),e.memoizedState=Sf,t):Kd(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return yy(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=$i(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=$i(a,o):(o=wr(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?Mf(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Sf,i}return o=t.child,t=o.sibling,i=$i(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Kd(t,e){return e=vc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ba(t,e,n,i){return i!==null&&Fd(i),ko(e,t.child,null,n),t=Kd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function yy(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=tu(Error(re(422))),ba(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=vc({mode:"visible",children:i.children},r,0,null),o=wr(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&ko(e,t.child,null,s),e.child.memoizedState=Mf(s),e.memoizedState=Sf,o);if(!(e.mode&1))return ba(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(re(419)),i=tu(o,i,void 0),ba(t,e,s,i)}if(a=(s&t.childLanes)!==0,Qt||a){if(i=Dt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,xi(t,r),Bn(i,t,r,-1))}return nh(),i=tu(Error(re(421))),ba(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Iy.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,dn=Wi(r.nextSibling),hn=e,st=!0,Un=null,t!==null&&(xn[yn++]=fi,xn[yn++]=di,xn[yn++]=Cr,fi=t.id,di=t.overflow,Cr=e),e=Kd(e,i.children),e.flags|=4096,e)}function Pp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),mf(t.return,e,n)}function nu(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function q0(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(Yt(t,e,i.children,n),i=at.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pp(t,n,e);else if(t.tag===19)Pp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(et(at,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Gl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),nu(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Gl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}nu(e,!0,n,null,o);break;case"together":nu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function gl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function yi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=$i(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$i(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Sy(t,e,n){switch(e.tag){case 3:Y0(e),Oo();break;case 5:S0(e);break;case 1:en(e.type)&&Ol(e);break;case 4:Vd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;et(zl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(et(at,at.current&1),e.flags|=128,null):n&e.child.childLanes?$0(t,e,n):(et(at,at.current&1),t=yi(t,e,n),t!==null?t.sibling:null);et(at,at.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return q0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),et(at,at.current),i)break;return null;case 22:case 23:return e.lanes=0,X0(t,e,n)}return yi(t,e,n)}var K0,Ef,Z0,Q0;K0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ef=function(){};Z0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,yr(Qn.current);var o=null;switch(n){case"input":r=Wu(t,r),i=Wu(t,i),o=[];break;case"select":r=ct({},r,{value:void 0}),i=ct({},i,{value:void 0}),o=[];break;case"textarea":r=Yu(t,r),i=Yu(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ul)}qu(n,i);var s;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(zs.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(zs.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&nt("scroll",t),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};Q0=function(t,e,n,i){n!==i&&(e.flags|=4)};function fs(t,e){if(!st)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function My(t,e,n){var i=e.pendingProps;switch(Ud(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return en(e.type)&&Fl(),Bt(e),null;case 3:return i=e.stateNode,Bo(),rt(Jt),rt(Wt),Wd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ca(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Un!==null&&(Lf(Un),Un=null))),Ef(t,e),Bt(e),null;case 5:Gd(e);var r=yr(Qs.current);if(n=e.type,t!==null&&e.stateNode!=null)Z0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return Bt(e),null}if(t=yr(Qn.current),Ca(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[Yn]=e,i[Ks]=o,t=(e.mode&1)!==0,n){case"dialog":nt("cancel",i),nt("close",i);break;case"iframe":case"object":case"embed":nt("load",i);break;case"video":case"audio":for(r=0;r<Es.length;r++)nt(Es[r],i);break;case"source":nt("error",i);break;case"img":case"image":case"link":nt("error",i),nt("load",i);break;case"details":nt("toggle",i);break;case"input":Bh(i,o),nt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},nt("invalid",i);break;case"textarea":Hh(i,o),nt("invalid",i)}qu(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&Aa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Aa(i.textContent,a,t),r=["children",""+a]):zs.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&nt("scroll",i)}switch(n){case"input":va(i),zh(i,o,!0);break;case"textarea":va(i),Vh(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Ul)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ag(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[Yn]=e,t[Ks]=i,K0(t,e,!1,!1),e.stateNode=t;e:{switch(s=Ku(n,i),n){case"dialog":nt("cancel",t),nt("close",t),r=i;break;case"iframe":case"object":case"embed":nt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Es.length;r++)nt(Es[r],t);r=i;break;case"source":nt("error",t),r=i;break;case"img":case"image":case"link":nt("error",t),nt("load",t),r=i;break;case"details":nt("toggle",t),r=i;break;case"input":Bh(t,i),r=Wu(t,i),nt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ct({},i,{value:void 0}),nt("invalid",t);break;case"textarea":Hh(t,i),r=Yu(t,i),nt("invalid",t);break;default:r=i}qu(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?bg(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Cg(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Hs(t,l):typeof l=="number"&&Hs(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(zs.hasOwnProperty(o)?l!=null&&o==="onScroll"&&nt("scroll",t):l!=null&&yd(t,o,l,s))}switch(n){case"input":va(t),zh(t,i,!1);break;case"textarea":va(t),Vh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Zi(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?wo(t,!!i.multiple,o,!1):i.defaultValue!=null&&wo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ul)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bt(e),null;case 6:if(t&&e.stateNode!=null)Q0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=yr(Qs.current),yr(Qn.current),Ca(e)){if(i=e.stateNode,n=e.memoizedProps,i[Yn]=e,(o=i.nodeValue!==n)&&(t=hn,t!==null))switch(t.tag){case 3:Aa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Aa(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Yn]=e,e.stateNode=i}return Bt(e),null;case 13:if(rt(at),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(st&&dn!==null&&e.mode&1&&!(e.flags&128))g0(),Oo(),e.flags|=98560,o=!1;else if(o=Ca(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(re(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(re(317));o[Yn]=e}else Oo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bt(e),o=!1}else Un!==null&&(Lf(Un),Un=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||at.current&1?At===0&&(At=3):nh())),e.updateQueue!==null&&(e.flags|=4),Bt(e),null);case 4:return Bo(),Ef(t,e),t===null&&$s(e.stateNode.containerInfo),Bt(e),null;case 10:return Bd(e.type._context),Bt(e),null;case 17:return en(e.type)&&Fl(),Bt(e),null;case 19:if(rt(at),o=e.memoizedState,o===null)return Bt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)fs(o,!1);else{if(At!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Gl(t),s!==null){for(e.flags|=128,fs(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return et(at,at.current&1|2),e.child}t=t.sibling}o.tail!==null&&_t()>Ho&&(e.flags|=128,i=!0,fs(o,!1),e.lanes=4194304)}else{if(!i)if(t=Gl(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),fs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!st)return Bt(e),null}else 2*_t()-o.renderingStartTime>Ho&&n!==1073741824&&(e.flags|=128,i=!0,fs(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=_t(),e.sibling=null,n=at.current,et(at,i?n&1|2:n&1),e):(Bt(e),null);case 22:case 23:return th(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?un&1073741824&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function Ey(t,e){switch(Ud(e),e.tag){case 1:return en(e.type)&&Fl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Bo(),rt(Jt),rt(Wt),Wd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Gd(e),null;case 13:if(rt(at),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));Oo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return rt(at),null;case 4:return Bo(),null;case 10:return Bd(e.type._context),null;case 22:case 23:return th(),null;case 24:return null;default:return null}}var Pa=!1,Vt=!1,wy=typeof WeakSet=="function"?WeakSet:Set,me=null;function xo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){pt(t,e,i)}else n.current=null}function wf(t,e,n){try{n()}catch(i){pt(t,e,i)}}var Lp=!1;function Ty(t,e){if(af=Dl,t=i0(),Id(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,f=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=s+r),h!==o||i!==0&&h.nodeType!==3||(l=s+i),h.nodeType===3&&(s+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++c===r&&(a=s),d===o&&++f===i&&(l=s),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(lf={focusedElem:t,selectionRange:n},Dl=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,m=_.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:In(e.type,x),m);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(M){pt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return _=Lp,Lp=!1,_}function Ns(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&wf(e,n,o)}r=r.next}while(r!==i)}}function gc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Tf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function J0(t){var e=t.alternate;e!==null&&(t.alternate=null,J0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yn],delete e[Ks],delete e[ff],delete e[ay],delete e[ly])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function e_(t){return t.tag===5||t.tag===3||t.tag===4}function Dp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||e_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Af(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ul));else if(i!==4&&(t=t.child,t!==null))for(Af(t,e,n),t=t.sibling;t!==null;)Af(t,e,n),t=t.sibling}function Cf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Cf(t,e,n),t=t.sibling;t!==null;)Cf(t,e,n),t=t.sibling}var Ut=null,Nn=!1;function Ai(t,e,n){for(n=n.child;n!==null;)t_(t,e,n),n=n.sibling}function t_(t,e,n){if(Zn&&typeof Zn.onCommitFiberUnmount=="function")try{Zn.onCommitFiberUnmount(lc,n)}catch{}switch(n.tag){case 5:Vt||xo(n,e);case 6:var i=Ut,r=Nn;Ut=null,Ai(t,e,n),Ut=i,Nn=r,Ut!==null&&(Nn?(t=Ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ut.removeChild(n.stateNode));break;case 18:Ut!==null&&(Nn?(t=Ut,n=n.stateNode,t.nodeType===8?qc(t.parentNode,n):t.nodeType===1&&qc(t,n),Xs(t)):qc(Ut,n.stateNode));break;case 4:i=Ut,r=Nn,Ut=n.stateNode.containerInfo,Nn=!0,Ai(t,e,n),Ut=i,Nn=r;break;case 0:case 11:case 14:case 15:if(!Vt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&wf(n,e,s),r=r.next}while(r!==i)}Ai(t,e,n);break;case 1:if(!Vt&&(xo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){pt(n,e,a)}Ai(t,e,n);break;case 21:Ai(t,e,n);break;case 22:n.mode&1?(Vt=(i=Vt)||n.memoizedState!==null,Ai(t,e,n),Vt=i):Ai(t,e,n);break;default:Ai(t,e,n)}}function Ip(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new wy),e.forEach(function(i){var r=Ny.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function bn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Ut=a.stateNode,Nn=!1;break e;case 3:Ut=a.stateNode.containerInfo,Nn=!0;break e;case 4:Ut=a.stateNode.containerInfo,Nn=!0;break e}a=a.return}if(Ut===null)throw Error(re(160));t_(o,s,r),Ut=null,Nn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){pt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)n_(e,t),e=e.sibling}function n_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(bn(e,t),Vn(t),i&4){try{Ns(3,t,t.return),gc(3,t)}catch(x){pt(t,t.return,x)}try{Ns(5,t,t.return)}catch(x){pt(t,t.return,x)}}break;case 1:bn(e,t),Vn(t),i&512&&n!==null&&xo(n,n.return);break;case 5:if(bn(e,t),Vn(t),i&512&&n!==null&&xo(n,n.return),t.flags&32){var r=t.stateNode;try{Hs(r,"")}catch(x){pt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&wg(r,o),Ku(a,s);var c=Ku(a,o);for(s=0;s<l.length;s+=2){var f=l[s],h=l[s+1];f==="style"?bg(r,h):f==="dangerouslySetInnerHTML"?Cg(r,h):f==="children"?Hs(r,h):yd(r,f,h,c)}switch(a){case"input":Xu(r,o);break;case"textarea":Tg(r,o);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?wo(r,!!o.multiple,p,!1):d!==!!o.multiple&&(o.defaultValue!=null?wo(r,!!o.multiple,o.defaultValue,!0):wo(r,!!o.multiple,o.multiple?[]:"",!1))}r[Ks]=o}catch(x){pt(t,t.return,x)}}break;case 6:if(bn(e,t),Vn(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(x){pt(t,t.return,x)}}break;case 3:if(bn(e,t),Vn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Xs(e.containerInfo)}catch(x){pt(t,t.return,x)}break;case 4:bn(e,t),Vn(t);break;case 13:bn(e,t),Vn(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Jd=_t())),i&4&&Ip(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Vt=(c=Vt)||f,bn(e,t),Vt=c):bn(e,t),Vn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(me=t,f=t.child;f!==null;){for(h=me=f;me!==null;){switch(d=me,p=d.child,d.tag){case 0:case 11:case 14:case 15:Ns(4,d,d.return);break;case 1:xo(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){pt(i,n,x)}}break;case 5:xo(d,d.return);break;case 22:if(d.memoizedState!==null){Up(h);continue}}p!==null?(p.return=d,me=p):Up(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Rg("display",s))}catch(x){pt(t,t.return,x)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(x){pt(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:bn(e,t),Vn(t),i&4&&Ip(t);break;case 21:break;default:bn(e,t),Vn(t)}}function Vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(e_(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Hs(r,""),i.flags&=-33);var o=Dp(t);Cf(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=Dp(t);Af(t,a,s);break;default:throw Error(re(161))}}catch(l){pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ay(t,e,n){me=t,i_(t)}function i_(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Pa;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Vt;a=Pa;var c=Vt;if(Pa=s,(Vt=l)&&!c)for(me=r;me!==null;)s=me,l=s.child,s.tag===22&&s.memoizedState!==null?Fp(r):l!==null?(l.return=s,me=l):Fp(r);for(;o!==null;)me=o,i_(o),o=o.sibling;me=r,Pa=a,Vt=c}Np(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,me=o):Np(t)}}function Np(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vt||gc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Vt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:In(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&vp(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}vp(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Xs(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Vt||e.flags&512&&Tf(e)}catch(d){pt(e,e.return,d)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function Up(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function Fp(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{gc(4,e)}catch(l){pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){pt(e,r,l)}}var o=e.return;try{Tf(e)}catch(l){pt(e,o,l)}break;case 5:var s=e.return;try{Tf(e)}catch(l){pt(e,s,l)}}}catch(l){pt(e,e.return,l)}if(e===t){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var Cy=Math.ceil,jl=Mi.ReactCurrentDispatcher,Zd=Mi.ReactCurrentOwner,Tn=Mi.ReactCurrentBatchConfig,je=0,Dt=null,St=null,Ft=0,un=0,yo=ir(0),At=0,na=null,br=0,_c=0,Qd=0,Us=null,Zt=null,Jd=0,Ho=1/0,li=null,Yl=!1,Rf=null,ji=null,La=!1,zi=null,$l=0,Fs=0,bf=null,_l=-1,vl=0;function $t(){return je&6?_t():_l!==-1?_l:_l=_t()}function Yi(t){return t.mode&1?je&2&&Ft!==0?Ft&-Ft:uy.transition!==null?(vl===0&&(vl=Hg()),vl):(t=Je,t!==0||(t=window.event,t=t===void 0?16:$g(t.type)),t):1}function Bn(t,e,n,i){if(50<Fs)throw Fs=0,bf=null,Error(re(185));aa(t,n,i),(!(je&2)||t!==Dt)&&(t===Dt&&(!(je&2)&&(_c|=n),At===4&&Oi(t,Ft)),tn(t,i),n===1&&je===0&&!(e.mode&1)&&(Ho=_t()+500,hc&&rr()))}function tn(t,e){var n=t.callbackNode;ux(t,e);var i=Ll(t,t===Dt?Ft:0);if(i===0)n!==null&&Xh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Xh(n),e===1)t.tag===0?cy(Op.bind(null,t)):h0(Op.bind(null,t)),oy(function(){!(je&6)&&rr()}),n=null;else{switch(Vg(i)){case 1:n=Td;break;case 4:n=Bg;break;case 16:n=Pl;break;case 536870912:n=zg;break;default:n=Pl}n=f_(n,r_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function r_(t,e){if(_l=-1,vl=0,je&6)throw Error(re(327));var n=t.callbackNode;if(bo()&&t.callbackNode!==n)return null;var i=Ll(t,t===Dt?Ft:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ql(t,i);else{e=i;var r=je;je|=2;var o=s_();(Dt!==t||Ft!==e)&&(li=null,Ho=_t()+500,Er(t,e));do try{Py();break}catch(a){o_(t,a)}while(!0);kd(),jl.current=o,je=r,St!==null?e=0:(Dt=null,Ft=0,e=At)}if(e!==0){if(e===2&&(r=tf(t),r!==0&&(i=r,e=Pf(t,r))),e===1)throw n=na,Er(t,0),Oi(t,i),tn(t,_t()),n;if(e===6)Oi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Ry(r)&&(e=ql(t,i),e===2&&(o=tf(t),o!==0&&(i=o,e=Pf(t,o))),e===1))throw n=na,Er(t,0),Oi(t,i),tn(t,_t()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:pr(t,Zt,li);break;case 3:if(Oi(t,i),(i&130023424)===i&&(e=Jd+500-_t(),10<e)){if(Ll(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){$t(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=uf(pr.bind(null,t,Zt,li),e);break}pr(t,Zt,li);break;case 4:if(Oi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-kn(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=_t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Cy(i/1960))-i,10<i){t.timeoutHandle=uf(pr.bind(null,t,Zt,li),i);break}pr(t,Zt,li);break;case 5:pr(t,Zt,li);break;default:throw Error(re(329))}}}return tn(t,_t()),t.callbackNode===n?r_.bind(null,t):null}function Pf(t,e){var n=Us;return t.current.memoizedState.isDehydrated&&(Er(t,e).flags|=256),t=ql(t,e),t!==2&&(e=Zt,Zt=n,e!==null&&Lf(e)),t}function Lf(t){Zt===null?Zt=t:Zt.push.apply(Zt,t)}function Ry(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!Hn(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Oi(t,e){for(e&=~Qd,e&=~_c,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-kn(e),i=1<<n;t[n]=-1,e&=~i}}function Op(t){if(je&6)throw Error(re(327));bo();var e=Ll(t,0);if(!(e&1))return tn(t,_t()),null;var n=ql(t,e);if(t.tag!==0&&n===2){var i=tf(t);i!==0&&(e=i,n=Pf(t,i))}if(n===1)throw n=na,Er(t,0),Oi(t,e),tn(t,_t()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,pr(t,Zt,li),tn(t,_t()),null}function eh(t,e){var n=je;je|=1;try{return t(e)}finally{je=n,je===0&&(Ho=_t()+500,hc&&rr())}}function Pr(t){zi!==null&&zi.tag===0&&!(je&6)&&bo();var e=je;je|=1;var n=Tn.transition,i=Je;try{if(Tn.transition=null,Je=1,t)return t()}finally{Je=i,Tn.transition=n,je=e,!(je&6)&&rr()}}function th(){un=yo.current,rt(yo)}function Er(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ry(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(Ud(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Fl();break;case 3:Bo(),rt(Jt),rt(Wt),Wd();break;case 5:Gd(i);break;case 4:Bo();break;case 13:rt(at);break;case 19:rt(at);break;case 10:Bd(i.type._context);break;case 22:case 23:th()}n=n.return}if(Dt=t,St=t=$i(t.current,null),Ft=un=e,At=0,na=null,Qd=_c=br=0,Zt=Us=null,xr!==null){for(e=0;e<xr.length;e++)if(n=xr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}xr=null}return t}function o_(t,e){do{var n=St;try{if(kd(),pl.current=Xl,Wl){for(var i=lt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Wl=!1}if(Rr=0,Lt=wt=lt=null,Is=!1,Js=0,Zd.current=null,n===null||n.return===null){At=1,na=e,St=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=wp(s);if(p!==null){p.flags&=-257,Tp(p,s,a,o,e),p.mode&1&&Ep(o,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){Ep(o,c,e),nh();break e}l=Error(re(426))}}else if(st&&a.mode&1){var m=wp(s);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Tp(m,s,a,o,e),Fd(zo(l,a));break e}}o=l=zo(l,a),At!==4&&(At=2),Us===null?Us=[o]:Us.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var u=V0(o,l,e);_p(o,u);break e;case 1:a=l;var g=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ji===null||!ji.has(v)))){o.flags|=65536,e&=-e,o.lanes|=e;var M=G0(o,a,e);_p(o,M);break e}}o=o.return}while(o!==null)}l_(n)}catch(R){e=R,St===n&&n!==null&&(St=n=n.return);continue}break}while(!0)}function s_(){var t=jl.current;return jl.current=Xl,t===null?Xl:t}function nh(){(At===0||At===3||At===2)&&(At=4),Dt===null||!(br&268435455)&&!(_c&268435455)||Oi(Dt,Ft)}function ql(t,e){var n=je;je|=2;var i=s_();(Dt!==t||Ft!==e)&&(li=null,Er(t,e));do try{by();break}catch(r){o_(t,r)}while(!0);if(kd(),je=n,jl.current=i,St!==null)throw Error(re(261));return Dt=null,Ft=0,At}function by(){for(;St!==null;)a_(St)}function Py(){for(;St!==null&&!tx();)a_(St)}function a_(t){var e=u_(t.alternate,t,un);t.memoizedProps=t.pendingProps,e===null?l_(t):St=e,Zd.current=null}function l_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ey(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{At=6,St=null;return}}else if(n=My(n,e,un),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);At===0&&(At=5)}function pr(t,e,n){var i=Je,r=Tn.transition;try{Tn.transition=null,Je=1,Ly(t,e,n,i)}finally{Tn.transition=r,Je=i}return null}function Ly(t,e,n,i){do bo();while(zi!==null);if(je&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(fx(t,o),t===Dt&&(St=Dt=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||La||(La=!0,f_(Pl,function(){return bo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Tn.transition,Tn.transition=null;var s=Je;Je=1;var a=je;je|=4,Zd.current=null,Ty(t,n),n_(n,t),Zx(lf),Dl=!!af,lf=af=null,t.current=n,Ay(n),nx(),je=a,Je=s,Tn.transition=o}else t.current=n;if(La&&(La=!1,zi=t,$l=r),o=t.pendingLanes,o===0&&(ji=null),ox(n.stateNode),tn(t,_t()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Yl)throw Yl=!1,t=Rf,Rf=null,t;return $l&1&&t.tag!==0&&bo(),o=t.pendingLanes,o&1?t===bf?Fs++:(Fs=0,bf=t):Fs=0,rr(),null}function bo(){if(zi!==null){var t=Vg($l),e=Tn.transition,n=Je;try{if(Tn.transition=null,Je=16>t?16:t,zi===null)var i=!1;else{if(t=zi,zi=null,$l=0,je&6)throw Error(re(331));var r=je;for(je|=4,me=t.current;me!==null;){var o=me,s=o.child;if(me.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(me=c;me!==null;){var f=me;switch(f.tag){case 0:case 11:case 15:Ns(8,f,o)}var h=f.child;if(h!==null)h.return=f,me=h;else for(;me!==null;){f=me;var d=f.sibling,p=f.return;if(J0(f),f===c){me=null;break}if(d!==null){d.return=p,me=d;break}me=p}}}var _=o.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}me=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,me=s;else e:for(;me!==null;){if(o=me,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ns(9,o,o.return)}var u=o.sibling;if(u!==null){u.return=o.return,me=u;break e}me=o.return}}var g=t.current;for(me=g;me!==null;){s=me;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,me=v;else e:for(s=g;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:gc(9,a)}}catch(R){pt(a,a.return,R)}if(a===s){me=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,me=M;break e}me=a.return}}if(je=r,rr(),Zn&&typeof Zn.onPostCommitFiberRoot=="function")try{Zn.onPostCommitFiberRoot(lc,t)}catch{}i=!0}return i}finally{Je=n,Tn.transition=e}}return!1}function kp(t,e,n){e=zo(n,e),e=V0(t,e,1),t=Xi(t,e,1),e=$t(),t!==null&&(aa(t,1,e),tn(t,e))}function pt(t,e,n){if(t.tag===3)kp(t,t,n);else for(;e!==null;){if(e.tag===3){kp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ji===null||!ji.has(i))){t=zo(n,t),t=G0(e,t,1),e=Xi(e,t,1),t=$t(),e!==null&&(aa(e,1,t),tn(e,t));break}}e=e.return}}function Dy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=$t(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(Ft&n)===n&&(At===4||At===3&&(Ft&130023424)===Ft&&500>_t()-Jd?Er(t,0):Qd|=n),tn(t,e)}function c_(t,e){e===0&&(t.mode&1?(e=Sa,Sa<<=1,!(Sa&130023424)&&(Sa=4194304)):e=1);var n=$t();t=xi(t,e),t!==null&&(aa(t,e,n),tn(t,n))}function Iy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),c_(t,n)}function Ny(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),c_(t,n)}var u_;u_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Jt.current)Qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Qt=!1,Sy(t,e,n);Qt=!!(t.flags&131072)}else Qt=!1,st&&e.flags&1048576&&p0(e,Bl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;gl(t,e),t=e.pendingProps;var r=Fo(e,Wt.current);Ro(e,n),r=jd(null,e,i,t,r,n);var o=Yd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,en(i)?(o=!0,Ol(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Hd(e),r.updater=mc,e.stateNode=r,r._reactInternals=e,_f(e,i,t,n),e=yf(null,e,i,!0,o,n)):(e.tag=0,st&&o&&Nd(e),Yt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(gl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Fy(i),t=In(i,t),r){case 0:e=xf(null,e,i,t,n);break e;case 1:e=Rp(null,e,i,t,n);break e;case 11:e=Ap(null,e,i,t,n);break e;case 14:e=Cp(null,e,i,In(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),xf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),Rp(t,e,i,r,n);case 3:e:{if(Y0(e),t===null)throw Error(re(387));i=e.pendingProps,o=e.memoizedState,r=o.element,y0(t,e),Vl(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=zo(Error(re(423)),e),e=bp(t,e,i,n,r);break e}else if(i!==r){r=zo(Error(re(424)),e),e=bp(t,e,i,n,r);break e}else for(dn=Wi(e.stateNode.containerInfo.firstChild),hn=e,st=!0,Un=null,n=v0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Oo(),i===r){e=yi(t,e,n);break e}Yt(t,e,i,n)}e=e.child}return e;case 5:return S0(e),t===null&&pf(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,cf(i,r)?s=null:o!==null&&cf(i,o)&&(e.flags|=32),j0(t,e),Yt(t,e,s,n),e.child;case 6:return t===null&&pf(e),null;case 13:return $0(t,e,n);case 4:return Vd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ko(e,null,i,n):Yt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),Ap(t,e,i,r,n);case 7:return Yt(t,e,e.pendingProps,n),e.child;case 8:return Yt(t,e,e.pendingProps.children,n),e.child;case 12:return Yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,et(zl,i._currentValue),i._currentValue=s,o!==null)if(Hn(o.value,s)){if(o.children===r.children&&!Jt.current){e=yi(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=gi(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),mf(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(re(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),mf(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Yt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ro(e,n),r=An(r),i=i(r),e.flags|=1,Yt(t,e,i,n),e.child;case 14:return i=e.type,r=In(i,e.pendingProps),r=In(i.type,r),Cp(t,e,i,r,n);case 15:return W0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),gl(t,e),e.tag=1,en(i)?(t=!0,Ol(e)):t=!1,Ro(e,n),H0(e,i,r),_f(e,i,r,n),yf(null,e,i,!0,t,n);case 19:return q0(t,e,n);case 22:return X0(t,e,n)}throw Error(re(156,e.tag))};function f_(t,e){return kg(t,e)}function Uy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mn(t,e,n,i){return new Uy(t,e,n,i)}function ih(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Fy(t){if(typeof t=="function")return ih(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Md)return 11;if(t===Ed)return 14}return 2}function $i(t,e){var n=t.alternate;return n===null?(n=Mn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xl(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")ih(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case co:return wr(n.children,r,o,e);case Sd:s=8,r|=8;break;case zu:return t=Mn(12,n,e,r|2),t.elementType=zu,t.lanes=o,t;case Hu:return t=Mn(13,n,e,r),t.elementType=Hu,t.lanes=o,t;case Vu:return t=Mn(19,n,e,r),t.elementType=Vu,t.lanes=o,t;case Sg:return vc(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case xg:s=10;break e;case yg:s=9;break e;case Md:s=11;break e;case Ed:s=14;break e;case Ii:s=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Mn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function wr(t,e,n,i){return t=Mn(7,t,i,e),t.lanes=n,t}function vc(t,e,n,i){return t=Mn(22,t,i,e),t.elementType=Sg,t.lanes=n,t.stateNode={isHidden:!1},t}function iu(t,e,n){return t=Mn(6,t,null,e),t.lanes=n,t}function ru(t,e,n){return e=Mn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Oy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kc(0),this.expirationTimes=kc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function rh(t,e,n,i,r,o,s,a,l){return t=new Oy(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Mn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hd(o),t}function ky(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:lo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function d_(t){if(!t)return Qi;t=t._reactInternals;e:{if(Fr(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(en(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(en(n))return d0(t,n,e)}return e}function h_(t,e,n,i,r,o,s,a,l){return t=rh(n,i,!0,t,r,o,s,a,l),t.context=d_(null),n=t.current,i=$t(),r=Yi(n),o=gi(i,r),o.callback=e??null,Xi(n,o,r),t.current.lanes=r,aa(t,r,i),tn(t,i),t}function xc(t,e,n,i){var r=e.current,o=$t(),s=Yi(r);return n=d_(n),e.context===null?e.context=n:e.pendingContext=n,e=gi(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Xi(r,e,s),t!==null&&(Bn(t,r,s,o),hl(t,r,s)),s}function Kl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function oh(t,e){Bp(t,e),(t=t.alternate)&&Bp(t,e)}function By(){return null}var p_=typeof reportError=="function"?reportError:function(t){console.error(t)};function sh(t){this._internalRoot=t}yc.prototype.render=sh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));xc(t,e,null,null)};yc.prototype.unmount=sh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Pr(function(){xc(null,t,null,null)}),e[vi]=null}};function yc(t){this._internalRoot=t}yc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Xg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Fi.length&&e!==0&&e<Fi[n].priority;n++);Fi.splice(n,0,t),n===0&&Yg(t)}};function ah(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zp(){}function zy(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var c=Kl(s);o.call(c)}}var s=h_(e,i,t,0,null,!1,!1,"",zp);return t._reactRootContainer=s,t[vi]=s.current,$s(t.nodeType===8?t.parentNode:t),Pr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Kl(l);a.call(c)}}var l=rh(t,0,!1,null,null,!1,!1,"",zp);return t._reactRootContainer=l,t[vi]=l.current,$s(t.nodeType===8?t.parentNode:t),Pr(function(){xc(e,l,n,i)}),l}function Mc(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=Kl(s);a.call(l)}}xc(e,s,t,r)}else s=zy(n,e,t,r,i);return Kl(s)}Gg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ms(e.pendingLanes);n!==0&&(Ad(e,n|1),tn(e,_t()),!(je&6)&&(Ho=_t()+500,rr()))}break;case 13:Pr(function(){var i=xi(t,1);if(i!==null){var r=$t();Bn(i,t,1,r)}}),oh(t,1)}};Cd=function(t){if(t.tag===13){var e=xi(t,134217728);if(e!==null){var n=$t();Bn(e,t,134217728,n)}oh(t,134217728)}};Wg=function(t){if(t.tag===13){var e=Yi(t),n=xi(t,e);if(n!==null){var i=$t();Bn(n,t,e,i)}oh(t,e)}};Xg=function(){return Je};jg=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};Qu=function(t,e,n){switch(e){case"input":if(Xu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=dc(i);if(!r)throw Error(re(90));Eg(i),Xu(i,r)}}}break;case"textarea":Tg(t,n);break;case"select":e=n.value,e!=null&&wo(t,!!n.multiple,e,!1)}};Dg=eh;Ig=Pr;var Hy={usingClientEntryPoint:!1,Events:[ca,po,dc,Pg,Lg,eh]},ds={findFiberByHostInstance:vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vy={bundleType:ds.bundleType,version:ds.version,rendererPackageName:ds.rendererPackageName,rendererConfig:ds.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Fg(t),t===null?null:t.stateNode},findFiberByHostInstance:ds.findFiberByHostInstance||By,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Da=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Da.isDisabled&&Da.supportsFiber)try{lc=Da.inject(Vy),Zn=Da}catch{}}mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hy;mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ah(e))throw Error(re(200));return ky(t,e,null,n)};mn.createRoot=function(t,e){if(!ah(t))throw Error(re(299));var n=!1,i="",r=p_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=rh(t,1,!1,null,null,n,!1,i,r),t[vi]=e.current,$s(t.nodeType===8?t.parentNode:t),new sh(e)};mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=Fg(e),t=t===null?null:t.stateNode,t};mn.flushSync=function(t){return Pr(t)};mn.hydrate=function(t,e,n){if(!Sc(e))throw Error(re(200));return Mc(null,t,e,!0,n)};mn.hydrateRoot=function(t,e,n){if(!ah(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=p_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=h_(e,null,t,1,n??null,r,!1,o,s),t[vi]=e.current,$s(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new yc(e)};mn.render=function(t,e,n){if(!Sc(e))throw Error(re(200));return Mc(null,t,e,!1,n)};mn.unmountComponentAtNode=function(t){if(!Sc(t))throw Error(re(40));return t._reactRootContainer?(Pr(function(){Mc(null,null,t,!1,function(){t._reactRootContainer=null,t[vi]=null})}),!0):!1};mn.unstable_batchedUpdates=eh;mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Sc(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return Mc(t,e,n,!1,i)};mn.version="18.3.1-next-f1338f8080-20240426";function m_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m_)}catch(t){console.error(t)}}m_(),mg.exports=mn;var Gy=mg.exports,Hp=Gy;ku.createRoot=Hp.createRoot,ku.hydrateRoot=Hp.hydrateRoot;class fa{}function Vp(t,e){if(e.length<=0)throw new Error(`${t}: Cannot have empty list of commands for closed path`);const n=e[e.length-1].to;if(n[0]!==0||n[1]!==0)throw new Error(`${t}: Closed path must end on [0, 0]`)}function Gp(t){let e=0;for(let n=0;n<t.length;n++){const i=t[n].to,r=t[(n+1)%t.length].to;e+=(r[0]-i[0])*(r[1]+i[1])}return e<0}function Wy(t,e,n,i){const r=(l,c)=>t[l]*(1-c)*(1-c)*(1-c)+3*e[l]*c*(1-c)*(1-c)+3*n[l]*c*c*(1-c)+i[l]*c*c*c,o=l=>{const c=3*i[l]-9*n[l]+9*e[l]-3*t[l],f=6*t[l]-12*e[l]+6*n[l],h=3*e[l]-3*t[l];let d=Math.min(t[l],i[l]),p=Math.max(t[l],i[l]);if(Math.abs(c)<=1e-8){const _=-h/f;if(_>0&&_<1){const x=r(l,_);d=Math.min(d,x),p=Math.max(p,x)}}else{const _=f*f-4*c*h;if(_>=0){const x=Math.sqrt(_),m=(-f+x)/(2*c);if(m>0&&m<1){const g=r(l,m);d=Math.min(d,g),p=Math.max(p,g)}const u=(-f-x)/(2*c);if(u>0&&u<1){const g=r(l,u);d=Math.min(d,g),p=Math.max(p,g)}}}return[d,p]},s=o(0),a=o(1);return[[s[0],a[0]],[s[1],a[1]]]}function Xy(t){const e=[0,0],n=[0,0];let i=[0,0];for(const r of t){switch(r.kind){case"L":e[0]=Math.min(e[0],r.to[0]),e[1]=Math.min(e[1],r.to[1]),n[0]=Math.max(n[0],r.to[0]),n[1]=Math.max(n[1],r.to[1]);break;case"C":{const o=Wy(i,r.c1,r.c2,r.to);e[0]=Math.min(e[0],o[0][0]),e[1]=Math.min(e[1],o[0][1]),n[0]=Math.max(n[0],o[1][0]),n[1]=Math.max(n[1],o[1][1]);break}}i=r.to}return[e,n]}class jy{constructor({defaultThickness:e,defaultKerf:n},i,r=[],o=[],s=[],a=[]){if(this.thicknessValue=null,this.kerfValue=null,Vp("Surface border",i),!Gp(i))throw new Error("Surface border: Points must be in counter-clockwise order for border");for(let l=0;l<r.length;l++){const c=`Surface hole ${l}`;if(Vp(c,r[l].commands),Gp(r[l].commands))throw new Error(`${c}: Points must be in clockwise order for holes`)}this.defaultThickness=e,this.defaultKerf=n,this.border=i,this.holes=r,this.cuts=o,this.scores=s,this.text=a}setThickness(e){this.thicknessValue=e}setKerf(e){this.kerfValue=e}thickness(){return typeof this.thicknessValue=="number"?this.thicknessValue:this.defaultThickness}kerf(){return typeof this.kerfValue=="number"?this.kerfValue:this.defaultKerf}borderBoundingBox(){return Xy(this.border)}}const Ia={properties:{defaultThickness:{type:"float64",metadata:{default:3,title:"Default Material Thickness (units)"}},defaultKerf:{type:"float64",metadata:{default:.1,title:"Default Kerf (units)",description:"Thickness of material removed by cutting tool"}},units:{enum:["mm","in"],metadata:{default:"mm",title:"Units"}},fileFormat:{enum:["svg"],metadata:{default:"svg",title:"File Format"}},debug:{type:"boolean",metadata:{default:!1,title:"Debug"}}},metadata:{title:"Settings",order:["defaultThickness","defaultKerf","units","fileFormat","debug"],startHidden:!0}};var ui;(function(t){t[t.BeforeStart=0]="BeforeStart",t[t.EqualStart=1]="EqualStart",t[t.BetweenStartAndEnd=2]="BetweenStartAndEnd",t[t.EqualEnd=3]="EqualEnd",t[t.AfterEnd=4]="AfterEnd"})(ui||(ui={}));const Sn=1e-7;function En(t){return[t[0],t[1]]}function So(t,e,n){return e=(e%360+360)%360,n!==0&&(e===0?t[0]+=n:e===90?t[1]+=n:e===180?t[0]-=n:e===270?t[1]-=n:(t[0]+=n*Math.cos(e*Math.PI/180),t[1]+=n*Math.sin(e*Math.PI/180))),t}function Yy(t,e,n,i){const r=e[0]-t[0],o=e[1]-t[1],s=i[0]-n[0],a=i[1]-n[1],l=r*a-o*s;if(Math.abs(l)<Sn)return null;const c=t[0]-n[0],f=t[1]-n[1],h=(s*f-a*c)/l,d=(r*f-o*c)/l,p=x=>x<=-Sn?ui.BeforeStart:x<Sn?ui.EqualStart:x-1<=-Sn?ui.BetweenStartAndEnd:x-1<Sn?ui.EqualEnd:ui.AfterEnd,_=[t[0]+h*r,t[1]+h*o];return{alongA:p(h),alongB:p(d),p:_}}function ws(t,e,n){if(n<=0)return{offset:t,commands:e};const i=n/2,r=En(t),o=[],s=f=>{const h=e[f];let d=0;switch(h.kind){case"L":{const m=e[f===0?e.length-1:f-1];d=Math.atan2(m.to[1]-h.to[1],m.to[0]-h.to[0]);break}case"C":d=Math.atan2(h.c2[1]-h.to[1],h.c2[0]-h.to[0]);break}const p=d+Math.PI/2,_=i*Math.cos(p),x=i*Math.sin(p);return{angle:d,offset:[_,x]}},a=[];for(let f=0;f<e.length;f++){const h=e[f],d=e[(f+e.length-1)%e.length],{angle:p,offset:[_,x]}=s(f),{angle:m,offset:[u,g]}=s((f+e.length-1)%e.length);if(Math.abs(p-m)>=Sn){const v=Math.min(Math.abs(p-m),Math.abs(p+Math.PI*2-m),Math.abs(p-(m+Math.PI*2))),M=i*4*Math.tan(v/4)/3;a.push(o.length),o.push({kind:"C",c1:[d.to[0]+u-M*Math.cos(m),d.to[1]+g-M*Math.sin(m)],c2:[d.to[0]+_+M*Math.cos(p),d.to[1]+x+M*Math.sin(p)],to:[d.to[0]+_,d.to[1]+x]})}switch(h.kind){case"L":{o.push({kind:"L",to:[h.to[0]+_,h.to[1]+x]});break}case"C":{const M=Math.atan2(d.to[1]-h.c1[1],d.to[0]-h.c1[0])+Math.PI/2,R=i*Math.cos(M),T=i*Math.sin(M),b=Math.atan2(h.c2[1]-h.to[1],h.c2[0]-h.to[0])+Math.PI/2,A=i*Math.cos(b),y=i*Math.sin(b);o.push({kind:"C",c1:[h.c1[0]+R,h.c1[1]+T],c2:[h.c2[0]+A,h.c2[1]+y],to:[h.to[0]+A,h.to[1]+y]});break}}}for(const f of a){const h=o[(f+o.length-1)%o.length],d=o[f],p=o[(f+1)%o.length];if(d.kind==="C"){const _=Yy(h.kind==="L"?o[(f+o.length-2)%o.length].to:h.c2,h.to,d.to,p.kind==="L"?p.to:p.c1);_&&_.alongA===ui.BetweenStartAndEnd&&_.alongB===ui.BetweenStartAndEnd&&(d.c1=h.to,d.c2=d.to,h.to=En(_.p),d.to=En(_.p))}}const[l,c]=o[o.length-1].to;r[0]+=l,r[1]+=c;for(const f of o)switch(f.kind){case"L":f.to[0]-=l,f.to[1]-=c;break;case"C":f.c1[0]-=l,f.c1[1]-=c,f.c2[0]-=l,f.c2[1]-=c,f.to[0]-=l,f.to[1]-=c;break}return{offset:r,commands:o}}class Na{constructor(){this.commands=[],this.angle=0}cursor(){return this.commands.length<=0?[0,0]:this.commands[this.commands.length-1].to}lineTo(e){var n,i;const r=this.commands[this.commands.length-1];if(r&&r.kind==="L"){const o=(i=(n=this.commands[this.commands.length-2])===null||n===void 0?void 0:n.to)!==null&&i!==void 0?i:[0,0],s=r.to,a=e;if(Math.abs(o[0]-a[0])<Sn&&Math.abs(o[1]-a[1])<Sn)return this.commands.pop(),this;const l=o[0]-s[0],c=o[1]-s[1],f=s[0]-a[0],h=s[1]-a[1];if(Math.abs(l*h-f*c)<Sn)return r.to=e,this}return this.commands.push({kind:"L",to:e}),this}lineToRelative(e){const n=this.cursor();return this.lineTo([n[0]+e[0],n[1]+e[1]])}quadCurveTo(e,n){const i=this.cursor();return this.curveTo([i[0]+2*(e[0]-i[0])/3,i[1]+2*(e[1]-i[1])/3],[n[0]+2*(e[0]-n[0])/3,n[1]+2*(e[1]-n[1])/3],n)}curveTo(e,n,i){return this.commands.push({kind:"C",c1:e,c2:n,to:i}),this}turn(e){return this.angle=((this.angle+e)%360+360)%360,this}forward(e){return e!==0&&this.lineToRelative(So([0,0],this.angle,e)),this}forwardCurve(e,n,i,r,o){const s=So(En(this.cursor()),this.angle,e);this.turn(n);const a=So(En(s),this.angle,i);this.turn(r);const l=So(En(a),this.angle,o);return this.curveTo(s,a,l),this}close(){var e,n;this.lineTo([0,0]);const i=this.commands[0],r=this.commands[this.commands.length-1];if((r==null?void 0:r.kind)==="L"&&(i==null?void 0:i.kind)==="L"){const o=En((n=(e=this.commands[this.commands.length-2])===null||e===void 0?void 0:e.to)!==null&&n!==void 0?n:[0,0]),s=r.to,a=i.to,l=o[0]-s[0],c=o[1]-s[1],f=s[0]-a[0],h=s[1]-a[1];if(Math.abs(o[0]-a[0])<Sn&&Math.abs(o[1]-a[1])<Sn)this.commands.shift();else if(Math.abs(l*h-f*c)>=Sn)return[0,0];this.commands.pop();for(const d of this.commands)d.to[0]-=o[0],d.to[1]-=o[1],d.kind==="C"&&(d.c1[0]-=o[0],d.c1[1]-=o[1],d.c2[0]-=o[0],d.c2[1]-=o[1]);return[-o[0],-o[1]]}return[0,0]}build(){return this.commands}}const Wp={" ":0,"!":74240,'"':516,"#":43580,$:43707,"%":61081,"&":37745,"'":512,"(":5120,")":16640,"*":65280,"+":43520,",":16384,"-":34816,".":65536,"/":17408,0:17663,1:1036,2:34935,3:2111,4:34956,5:35003,6:35067,7:15,8:35071,9:35007,":":8704,";":16896,"<":37888,"=":34864,">":18688,"?":75783,"@":2807,A:35023,B:10815,C:243,D:8767,E:33011,F:32963,G:2299,H:35020,I:8755,J:124,K:38080,L:240,M:1484,N:4556,O:255,P:35015,Q:4351,R:39111,S:35003,T:8707,U:252,V:17600,W:20684,X:21760,Y:35004,Z:17459,"[":8722,"\\":4352,"]":8737,"^":20480,_:48,"`":256,"{":41490,"|":8704,"}":10785,"~":52224};class Df{constructor(){this.border=new Na,this.holes=[],this.cuts=[],this.scores=[],this.text=[]}hole(e,n=0){const i=new Na;return i.turn(n),this.holes.push({offset:e,db:i}),i}cut(e,n=0){const i=new Na;return i.turn(n),this.cuts.push({offset:En(e),db:i}),i}score(e,n=0){const i=new Na;return i.turn(n),this.scores.push({offset:En(e),db:i}),i}scoreChar(e,n,i,r){var o;const s=(o=Wp[r.toUpperCase()])!==null&&o!==void 0?o:Wp["?"],a=(c,f,h,d)=>{const p=En(e);p[0]+=c*n,p[1]+=f*i,this.score(p).lineToRelative([(h-c)*n,(d-f)*i])},l=.025;return s&1&&a(l,0,.5-l,0),s&2&&a(.5+l,0,1-l,0),s&4&&a(1,l,1,.5-l),s&8&&a(1,.5+l,1,1-l),s&16&&a(1-l,1,.5+l,1),s&32&&a(.5-l,1,l,1),s&64&&a(0,1-l,0,.5+l),s&128&&a(0,.5-l,0,l),s&256&&a(l,l,.5-l,.5-l),s&512&&a(.5,l,.5,.5-l),s&1024&&a(1-l,l,.5+l,.5-l),s&2048&&a(.5+l,.5,1-l,.5),s&4096&&a(.5+l,.5+l,1-l,1-l),s&8192&&(s&65536?a(.5,.5+l,.5,.8-l):a(.5,.5+l,.5,1-l)),s&16384&&a(.5-l,.5+l,l,1-l),s&32768&&a(.5-l,.5,l,.5),s&65536&&a(.5,.8+l,.5,1-l),this}build(e){const n=this.border.close();return new jy(e,this.border.build(),this.holes.map(({offset:i,db:r})=>{const o=r.close();return{offset:[i[0]+n[0]+o[0],i[1]+n[1]+o[1]],commands:r.build()}}),this.cuts.map(({offset:i,db:r})=>({offset:[i[0]+n[0],i[1]+n[1]],commands:r.build()})),this.scores.map(({offset:i,db:r})=>({offset:[i[0]+n[0],i[1]+n[1]],commands:r.build()})),this.text)}}class $y extends fa{name(){return"BoxCardstock"}schema(){return{properties:{thickness:{type:"float64",nullable:!0,metadata:{default:null,defaultNotNull:3,nullHint:"default",title:"Material Thickness (units)"}},kerf:{type:"float64",nullable:!0,metadata:{default:null,defaultNotNull:.1,nullHint:"default",title:"Kerf (units)",description:"Thickness of material removed by cutting tool"}},width:{type:"float64",metadata:{default:100,title:"Interior Width (units)"}},depth:{type:"float64",metadata:{default:100,title:"Interior Depth (units)"}},height:{type:"float64",metadata:{default:20,title:"Interior Height (units)"}},foot:{type:"float64",metadata:{default:10,title:"Foot size (units)"}}},metadata:{order:["thickness","kerf","width","depth","height","foot"]}}}generate(e,{thickness:n,kerf:i,width:r,depth:o,height:s,foot:a}){const l=typeof n=="number"?n:e.defaultThickness,c=new Df,f=s+l,h=s,d=l*2,p=6,_=R=>{const T=.8*R,E=.25*R,b=Math.atan2(T,E)*180/Math.PI;c.border.turn(-b).forward(Math.sqrt(E*E+T*T)).turn(b).forward(.5*R).turn(b).forward(Math.sqrt(E*E+T*T)).turn(-b)},x=R=>{c.border.turn(-45).forward(Math.sqrt(2)*a).turn(45).forward(R-2*a).turn(45).forward(Math.sqrt(2)*a).turn(-45)},m=()=>{c.border.turn(-90),_(f),c.score(c.border.cursor(),c.border.angle).turn(180).forward(f).turn(-90).forward(r+l*p).turn(-90).forward(f),c.border.turn(90).forward(d),c.score(c.border.cursor(),c.border.angle).forward(r+l*p-d*2),c.border.turn(-90).forward(h).turn(90),c.score(c.border.cursor(),c.border.angle).forward(r+l*p-d*2),x(r+l*p-d*2),c.border.turn(90).forward(h).turn(-90).forward(d).turn(90),_(f)},u=()=>{c.border.forward(d),c.score(c.border.cursor(),c.border.angle).forward(o+l*p-2*d),c.border.turn(-90).forward(f).turn(-90),c.score(c.border.cursor(),c.border.angle).turn(180).forward(o+l*p-2*d),c.border.forward(d).turn(90),c.score(c.border.cursor(),c.border.angle).forward(h).turn(90).forward(o+l*p).turn(90).forward(h),_(h),c.border.turn(90),x(o+l*p),c.border.turn(90),_(h),c.border.turn(90).forward(d).turn(-90).forward(f).turn(-90).forward(d).turn(90)};m(),u(),m(),u();const g=c.build(e);typeof n=="number"&&g.setThickness(n),typeof i=="number"&&g.setKerf(i);const v=new Df;v.border.forward(r).turn(90).forward(o).turn(90).forward(r).turn(90).forward(o).turn(90);const M=v.build(e);return typeof n=="number"&&M.setThickness(n),typeof i=="number"&&M.setKerf(i),[g,M]}}class g_{}class lh extends g_{thickness(e,n,i){return this.jointThickness(e,!1,n,i)}draw(e,n,i,r){this.jointDraw(e,n,!1,i,r)}}class __ extends lh{name(){return"BoxJoint"}schema(){return{properties:{invert:{type:"boolean",metadata:{default:!1,title:"Invert",description:"Swap settings for receiving side"}},width1:{type:"float64",metadata:{default:6,title:"Width 1",description:"Width of finger 1 (units)"}},length1:{type:"float64",metadata:{default:1,title:"Length 1",description:"Length of finger 1 (multiples of material thickness)"}},width2:{type:"float64",metadata:{default:6,title:"Width 2",description:"Width of finger 2 (units)"}},length2:{type:"float64",metadata:{default:1,title:"Length 2",description:"Length of finger 2 (multiples of material thickness)"}},play:{type:"float64",metadata:{default:0,title:"Play",description:"Extra space around fingers (units)"}},cornerDistance:{type:"float64",metadata:{default:12,title:"Corner Distance",description:"Reserved space near corners to exclude fingers (units)"}},centerDistance:{type:"float64",metadata:{default:0,title:"Center Distance",description:"Reserved space near center to exclude fingers (units)"}}},metadata:{order:["invert","width1","length1","width2","length2","play","cornerDistance","centerDistance"]}}}jointThickness(e,n,i,{length1:r,length2:o,invert:s}){return(n!==s?-o:r)*i}jointDraw(e,n,i,r,{invert:o,width1:s,length1:a,width2:l,length2:c,play:f,cornerDistance:h,centerDistance:d}){const p=e.border,_=i!==o,x=(_?c:a)*r,m=_?-f:f,u=_?-90:90,g=()=>p.forward(m/2).turn(-u).forward(x).turn(u).forward(s-m).turn(u).forward(x).turn(-u).forward(m/2),v=()=>p.forward(l),M=T=>{if(T>1e4)throw new Error("Too many fingers");g();for(let E=0;E<T;E++)v(),g()},R=n-h*2;if(d>0){const T=(R-d)/2,E=Math.floor((T-s)/(s+l)),b=s+E*(s+l);p.forward(h+(T-b)/2),M(E),p.forward(d+T-b),M(E),p.forward(h+(T-b)/2)}else{const T=Math.floor((R-s)/(s+l)),E=s+T*(s+l);p.forward(h+(R-E)/2),M(T),p.forward(h+(R-E)/2)}}}class v_ extends lh{name(){return"ButtJoint"}schema(){return{properties:{invert:{type:"boolean",metadata:{default:!1,title:"Invert",description:"Swap settings for receiving side"}},length1:{type:"float64",metadata:{default:0,title:"Length 1",description:"Length of butt 1 (multiples of material thickness)"}},length2:{type:"float64",metadata:{default:1,title:"Length 2",description:"Length of butt 2 (multiples of material thickness)"}}},metadata:{order:["invert","length1","length2"]}}}jointThickness(e,n,i,{length1:r,length2:o,invert:s}){return(n!==s?-o:r)*i}jointDraw(e,n,i,r,{invert:o,length1:s,length2:a}){const l=i!==o,c=(l?a:s)*r,f=l?-90:90;e.border.turn(-f).forward(c).turn(f).forward(n).turn(f).forward(c).turn(-f)}}class x_ extends g_{name(){return"LegEdge"}schema(){return{properties:{flatWidth:{type:"float64",metadata:{default:.1,title:"Flat Width",description:"Flat part of leg (fraction of overall length)"}},curveWidth:{type:"float64",metadata:{default:.15,title:"Curve Width",description:"Curve part of leg (fraction of overall length)"}},curveAmount:{type:"float64",metadata:{default:.05,title:"Curve Amount",description:"How extreme to curve (fraction of overall length)"}},height:{type:"float64",metadata:{default:10,title:"Height (units)"}}},metadata:{order:["flatWidth","curveWidth","curveAmount","height"]}}}thickness(e,n,{height:i}){return-i}draw(e,n,i,{flatWidth:r,curveWidth:o,curveAmount:s,height:a}){const l=s*n;let c=90,f=a;l!==0&&(c=180-Math.atan2(a/2,l)*180/Math.PI,f=2*Math.sqrt(a*a/4+l*l)),e.border.turn(-90).forward(a).turn(90).forward(r*n).forwardCurve(o*n*.5+l,c,f,-c,o*n*.5+l).forward((1-(r+o)*2)*n).forwardCurve(o*n*.5+l,-c,f,c,o*n*.5+l).forward(r*n).turn(90).forward(a).turn(-90)}}function y_(t,e={},n){return{discriminator:"kind",mapping:t.map(i=>({[i.name()]:{properties:{kind:{type:"string",metadata:{default:i.name(),title:i.name()}},params:i.schema()},metadata:{order:["params"],untabParams:!0}}})).reduce((i,r)=>({...i,...r}),{}),nullable:n,metadata:{default:t[0].name(),order:t.map(i=>i.name()),...e}}}const ou=[new __,new v_,new x_];class qy extends lh{name(){return"MortiseAndTenonJoint"}schema(){return{properties:{invert:{type:"boolean",metadata:{default:!1,title:"Invert",description:"Swap settings for receiving side"}},width1:{type:"float64",metadata:{default:6,title:"Width 1",description:"Width of tenon (units)"}},tenonLength:{type:"float64",metadata:{default:1,title:"Tenon Length",description:"Length of tenon (multiples of material thickness)"}},width2:{type:"float64",metadata:{default:6,title:"Width 2",description:"Width between tenons (units)"}},holeDistance:{type:"float64",metadata:{default:3,title:"Hole Distance",description:"Distance of mortises from edge (units)"}},play:{type:"float64",metadata:{default:0,title:"Play",description:"Extra space between mortise and tenons (units)"}},thicknessPlay:{type:"float64",metadata:{default:0,title:"Thickness Play",description:"Extra thickness added to mortise holes (units)"}},cornerDistance:{type:"float64",metadata:{default:12,title:"Corner Distance",description:"Reserved space near corners to exclude joints (units)"}},centerDistance:{type:"float64",metadata:{default:0,title:"Center Distance",description:"Reserved space near center to exclude joints (units)"}},mortiseEdge:y_(ou,{default:null,defaultNotNull:"LegEdge",title:"Mortise Edge"},!0)},metadata:{order:["invert","width1","tenonLength","width2","holeDistance","play","thicknessPlay","cornerDistance","centerDistance","mortiseEdge"]}}}jointThickness(e,n,i,{tenonLength:r,invert:o,mortiseEdge:s}){if(n!==o){if(s){const l=ou.find(c=>c.name()===s.kind);if(!l)throw new Error("Invalid mortise edge");return l.thickness(e,i,s.params)}return 0}return r*i}jointDraw(e,n,i,r,{invert:o,width1:s,tenonLength:a,width2:l,holeDistance:c,play:f,thicknessPlay:h,cornerDistance:d,centerDistance:p,mortiseEdge:_}){const x=i!==o,m=x?-f:f;let u=T=>{},g=()=>{},v=()=>{};const M=T=>{if(T>1e4)throw new Error("Too many fingers");g();for(let E=0;E<T;E++)v(),g()};if(x){const T=r+h*2,E=En(e.border.cursor()),b=e.border.angle;if(So(E,b+90,c+T-h),_){const A=ou.find(y=>y.name()===_.kind);if(!A)throw new Error("Invalid mortise edge");A.draw(e,n,r,_.params)}else e.border.forward(n);u=A=>{So(E,b,A)},g=()=>{u(m/2),e.hole(En(E),b).forward(s-m).turn(-90).forward(T).turn(-90).forward(s-m).turn(-90).forward(T).turn(-90),u(-m/2),u(s)},v=()=>{u(l)}}else{const T=a*r,E=90;u=b=>e.border.forward(b),g=()=>e.border.forward(m/2).turn(-E).forward(T).turn(E).forward(s-m).turn(E).forward(T).turn(-E).forward(m/2),v=()=>e.border.forward(l)}const R=n-d*2;if(p>0){const T=(R-p)/2,E=Math.floor((T-s)/(s+l)),b=s+E*(s+l);u(d+(T-b)/2),M(E),u(p+T-b),M(E),u(d+(T-b)/2)}else{const T=Math.floor((R-s)/(s+l)),E=s+T*(s+l);u(d+(R-E)/2),M(T),u(d+(R-E)/2)}}}const Ts=[new __,new v_,new x_,new qy];function Ua(t={},e){return y_(Ts,t,e)}class Ec extends fa{name(){return"Rectangle"}schema(){return{properties:{label:{type:"string",nullable:!0,metadata:{default:null,defaultNotNull:"",nullHint:"none",title:"Label"}},labelFontSize:{type:"float64",nullable:!0,metadata:{default:null,defaultNotNull:10,nullHint:"auto",title:"Label Font Size (units)"}},thickness:{type:"float64",nullable:!0,metadata:{default:null,defaultNotNull:3,nullHint:"default",title:"Material Thickness (units)"}},kerf:{type:"float64",nullable:!0,metadata:{default:null,defaultNotNull:.1,nullHint:"default",title:"Kerf (units)",description:"Thickness of material removed by cutting tool"}},width:{type:"float64",metadata:{default:100,title:"Outer Width (units)"}},height:{type:"float64",metadata:{default:100,title:"Outer Height (units)"}},edge1:Ua({title:"Top"}),edge2:Ua({title:"Right"}),edge3:Ua({title:"Bottom"}),edge4:Ua({title:"Left"})},metadata:{order:["label","labelFontSize","thickness","kerf","width","height","edge1","edge2","edge3","edge4"]}}}generate(e,{label:n,labelFontSize:i,thickness:r,kerf:o,width:s,height:a,edge1:l,edge2:c,edge3:f,edge4:h}){const d=new Df,p=Ts.find(E=>E.name()===l.kind);if(!p)throw new Error("Bad top edge");const _=Ts.find(E=>E.name()===c.kind);if(!_)throw new Error("Bad right edge");const x=Ts.find(E=>E.name()===f.kind);if(!x)throw new Error("Bad bottom edge");const m=Ts.find(E=>E.name()===h.kind);if(!m)throw new Error("Bad left edge");const u=typeof r=="number"?r:e.defaultThickness,g=p.thickness(s,u,l.params),v=_.thickness(a,u,c.params),M=x.thickness(s,u,f.params),R=m.thickness(a,u,h.params);if(s-=Math.max(0,v)+Math.max(0,R),a-=Math.max(0,g)+Math.max(0,M),R<0&&d.border.forward(-R),p.draw(d,s,u,l.params),v<0&&d.border.forward(-v),d.border.turn(90),g<0&&d.border.forward(-g),_.draw(d,a,u,c.params),M<0&&d.border.forward(-M),d.border.turn(90),v<0&&d.border.forward(-v),x.draw(d,s,u,f.params),R<0&&d.border.forward(-R),d.border.turn(90),M<0&&d.border.forward(-M),m.draw(d,a,u,h.params),g<0&&d.border.forward(-g),d.border.turn(90),n){const E=n.trim().split(`
`),b=E.reduce((F,j)=>Math.max(F,j.length),0);let A=0;typeof i=="number"?A=i:A=Math.min((s-5-Math.abs(v)-Math.abs(R))/b*2,(a-5-Math.abs(g)-Math.abs(M))/E.length);const y=A/2,P=(s-y*b)/2,B=(a-A*E.length)/2;for(let F=0;F<E.length;F++){const j=E[F];for(let Y=0;Y<j.length;Y++)d.scoreChar([P+y*Y+y*.15,B+A*F+A*.15],y*.7,A*.7,j.charAt(Y))}}const T=d.build(e);return typeof r=="number"&&T.setThickness(r),typeof o=="number"&&T.setKerf(o),[T]}}class Ky extends fa{name(){return"BoxNested (WIP)"}schema(){return{properties:{labels:{type:"boolean",metadata:{default:!1,title:"Labels"}},width:{type:"float64",metadata:{default:100,title:"Outer Width (units)"}},depth:{type:"float64",metadata:{default:100,title:"Outer Depth (units)"}},height:{type:"float64",metadata:{default:100,title:"Outer Height (units)"}},holeDistance:{type:"float64",metadata:{default:3,title:"Hole Distance",description:"Distance of mortises from edge (units)"}},play:{type:"float64",metadata:{default:0,title:"Play",description:"Extra space between fingers (units)"}},thicknessPlay:{type:"float64",metadata:{default:0,title:"Thickness Play",description:"Extra thickness added to mortise holes (units)"}}},metadata:{order:["labels","width","depth","height","holeDistance","play","thicknessPlay"]}}}generate(e,{labels:n,width:i,depth:r,height:o,holeDistance:s,play:a,thicknessPlay:l}){const{defaultThickness:c}=e,f=new Ec,h=(x,m,u)=>({kind:"MortiseAndTenonJoint",params:{invert:x,width1:2*c,tenonLength:m,width2:2*c,holeDistance:s,play:a,thicknessPlay:l,cornerDistance:2*c,centerDistance:0,mortiseEdge:u}}),d=()=>({kind:"ButtJoint",params:{invert:!1,length1:0,length2:1}}),p=(x,m)=>({kind:"BoxJoint",params:{invert:x,width1:2*c,length1:m,width2:2*c,length2:m,play:a,cornerDistance:2*c,centerDistance:0}}),_=()=>({kind:"LegEdge",params:{flatWidth:.1,curveWidth:.15,curveAmount:.05,height:10}});return[...f.generate(e,{width:i,height:r,edge1:h(!1,2),edge2:h(!1,1),edge3:h(!1,2),edge4:h(!1,1),...n?{label:"Bottom"}:{}}),...f.generate(e,{width:r,height:o,edge1:d(),edge2:p(!1,2),edge3:h(!0,1),edge4:p(!1,2),...n?{label:"Left"}:{}}),...f.generate(e,{width:r,height:o,edge1:d(),edge2:p(!1,2),edge3:h(!0,1),edge4:p(!1,2),...n?{label:"Right"}:{}}),...f.generate(e,{width:i,height:o,edge1:d(),edge2:p(!0,1),edge3:h(!0,1),edge4:p(!0,1),...n?{label:"Front"}:{}}),...f.generate(e,{width:i,height:o,edge1:d(),edge2:p(!0,1),edge3:h(!0,1,_()),edge4:p(!0,1),...n?{label:"Inner Front"}:{}}),...f.generate(e,{width:i,height:o,edge1:d(),edge2:p(!0,1),edge3:h(!0,1),edge4:p(!0,1),...n?{label:"Back"}:{}}),...f.generate(e,{width:i,height:o,edge1:d(),edge2:p(!0,1),edge3:h(!0,1,_()),edge4:p(!0,1),...n?{label:"Inner Back"}:{}})]}}class Zy extends fa{name(){return"BoxPlain"}schema(){return{properties:{labels:{type:"boolean",metadata:{default:!1,title:"Labels"}},width:{type:"float64",metadata:{default:100,title:"Outer Width (units)"}},depth:{type:"float64",metadata:{default:100,title:"Outer Depth (units)"}},height:{type:"float64",metadata:{default:100,title:"Outer Height (units)"}},holeDistance:{type:"float64",metadata:{default:3,title:"Hole Distance",description:"Distance of mortises from edge (units)"}},play:{type:"float64",metadata:{default:0,title:"Play",description:"Extra space between fingers (units)"}},thicknessPlay:{type:"float64",metadata:{default:0,title:"Thickness Play",description:"Extra thickness added to mortise holes (units)"}}},metadata:{order:["labels","width","depth","height","holeDistance","play","thicknessPlay"]}}}generate(e,{labels:n,width:i,depth:r,height:o,holeDistance:s,play:a,thicknessPlay:l}){const{defaultThickness:c}=e,f=new Ec,h=_=>({kind:"MortiseAndTenonJoint",params:{invert:_,width1:2*c,tenonLength:1,width2:2*c,holeDistance:s,play:a,thicknessPlay:l,cornerDistance:2*c,centerDistance:0}}),d=()=>({kind:"ButtJoint",params:{invert:!1,length1:0,length2:1}}),p=_=>({kind:"BoxJoint",params:{invert:_,width1:2*c,length1:1,width2:2*c,length2:1,play:a,cornerDistance:2*c,centerDistance:0}});return[...f.generate(e,{width:i,height:r,edge1:h(!1),edge2:h(!1),edge3:h(!1),edge4:h(!1),...n?{label:"Bottom"}:{}}),...f.generate(e,{width:r,height:o,edge1:d(),edge2:p(!1),edge3:h(!0),edge4:p(!1),...n?{label:"Left"}:{}}),...f.generate(e,{width:r,height:o,edge1:d(),edge2:p(!1),edge3:h(!0),edge4:p(!1),...n?{label:"Right"}:{}}),...f.generate(e,{width:i,height:o,edge1:d(),edge2:p(!0),edge3:h(!0),edge4:p(!0),...n?{label:"Front"}:{}}),...f.generate(e,{width:i,height:o,edge1:d(),edge2:p(!0),edge3:h(!0),edge4:p(!0),...n?{label:"Back"}:{}})]}}class Qy extends fa{name(){return"KerfTester"}schema(){return{properties:{labels:{type:"boolean",metadata:{default:!0,title:"Labels"}},width:{type:"float64",metadata:{default:30,title:"Outer Width (units)"}},height:{type:"float64",metadata:{default:15,title:"Outer Height (units)"}},play:{type:"float64",metadata:{default:0,title:"Play",description:"Extra space between fingers (units)"}},testCount:{type:"int32",metadata:{default:8,title:"Number of tests"}},kerfStart:{type:"float64",metadata:{default:.08,title:"Kerf start value (units)"}},kerfIncrement:{type:"float64",metadata:{default:.02,title:"Kerf increment value (per test)"}}},metadata:{order:["labels","width","height","play","testCount","kerfStart","kerfIncrement"]}}}generate(e,{labels:n,width:i,height:r,play:o,testCount:s,kerfStart:a,kerfIncrement:l}){const{defaultThickness:c}=e,f=new Ec,h=()=>({kind:"ButtJoint",params:{invert:!1,length1:0,length2:1}}),d=_=>({kind:"BoxJoint",params:{invert:_,width1:2*c,length1:1,width2:2*c,length2:1,play:o,cornerDistance:2*c,centerDistance:0}}),p=[];for(let _=0;_<s;_++){const x=a+_*l;p.push(...f.generate(e,{width:i,height:r,kerf:x,edge1:d(!1),edge2:h(),edge3:h(),edge4:h(),...n?{label:x.toFixed(3)}:{}}),...f.generate(e,{width:i,height:r,kerf:x,edge1:h(),edge2:h(),edge3:d(!0),edge4:h(),...n?{label:x.toFixed(3)}:{}}))}return p}}const su=[new $y,new Ky,new Zy,new Qy,new Ec];class Jy{constructor(e){}}class eS extends Jy{constructor(e){super(e),this.surfaces=[],this.settings=e}addSurface(e,n,i,r,o){this.surfaces.push({offset:e,surface:n,cutColor:i,holeColor:r,scoreColor:o})}toFile(){const{units:e}=this.settings,n=[[0,0],[0,0]];for(const{offset:h,surface:d}of this.surfaces){const p=d.borderBoundingBox(),_=d.kerf();n[0][0]=Math.min(n[0][0],h[0]+p[0][0]-_-10),n[0][1]=Math.min(n[0][1],h[1]+p[0][1]-_-10),n[1][0]=Math.max(n[1][0],h[0]+p[1][0]+_+10),n[1][1]=Math.max(n[1][1],h[1]+p[1][1]+_+10)}const i=[],r=h=>`${Math.round(h*1e3)/1e3}`;let o=0;const s=()=>{i.push(`<g id="p-${o++}" style="fill:none;stroke-linecap:round;stroke-linejoin:round;">`)},a=()=>{i.push("</g>")},l=(h,d,p,_,x)=>{_&&h>0&&({offset:d,commands:p}=ws(d,p,h));const m=[`M${r(d[0])} ${r(d[1])}`];for(const u of p)switch(u.kind){case"L":m.push(`L${r(d[0]+u.to[0])} ${r(d[1]+u.to[1])}`);break;case"C":m.push(`C${r(d[0]+u.c1[0])} ${r(d[1]+u.c1[1])}`,` ${r(d[0]+u.c2[0])} ${r(d[1]+u.c2[1])}`,` ${r(d[0]+u.to[0])} ${r(d[1]+u.to[1])}`);break}_&&m.push("Z"),i.push(`<path stroke="${x}" stroke-width="${h<=0?.1:h}" d="${m.join("")}" />`)};for(const{offset:h,surface:d,cutColor:p,holeColor:_,scoreColor:x}of this.surfaces){const m=d.kerf();if((d.scores.length>0||d.holes.length>0)&&s(),d.scores.length>0){s();for(const u of d.scores)l(m,[h[0]+u.offset[0],h[1]+u.offset[1]],u.commands,!1,x);a()}s(),l(m,h,d.border,!0,p);for(const u of d.cuts)l(m,[h[0]+u.offset[0],h[1]+u.offset[1]],u.commands,!1,p);if(a(),d.holes.length>0){s();for(const u of d.holes)l(m,[h[0]+u.offset[0],h[1]+u.offset[1]],u.commands,!0,_);a()}(d.scores.length>0||d.holes.length>0)&&a()}const c=n[1][0]-n[0][0],f=n[1][1]-n[0][1];return{mimeType:"image/svg+xml",extension:".svg",data:new TextEncoder().encode(`<?xml version='1.0' encoding='utf-8'?>
<svg
  width="${r(c)}${e}"
  height="${r(f)}${e}"
  viewBox="${r(n[0][0])} ${r(n[0][1])} ${r(c)} ${r(f)}"
  xmlns="http://www.w3.org/2000/svg">
<!--
Generated by boxburner
by Sean Connelly (@velipso), https://sean.fun
Project Home: https://github.com/velipso/boxburner
SPDX-License-Identifier: 0BSD
-->
${i.join("")}
</svg>`)}}}function tS(t){const{fileFormat:e}=t;switch(e){case"svg":return new eS(t);default:throw new Error(`Unknown export file format: ${e}`)}}const S_=new Set,nn=new WeakMap,Vo=new WeakMap,Lr=new WeakMap,If=new WeakMap,nS=new WeakMap,Go=new WeakMap,Zl=new WeakMap,As=new WeakSet;let Ji,ch=0,uh=0;const hi="__aa_tgt",ia="__aa_del",Ql="__aa_new",iS=t=>{const e=cS(t);e&&e.forEach(n=>uS(n))},rS=t=>{t.forEach(e=>{e.target===Ji&&sS(),nn.has(e.target)&&Or(e.target)})};function oS(t){const e=If.get(t);e==null||e.disconnect();let n=nn.get(t),i=0;const r=5;n||(n=Wo(t),nn.set(t,n));const{offsetWidth:o,offsetHeight:s}=Ji,l=[n.top-r,o-(n.left+r+n.width),s-(n.top+r+n.height),n.left-r].map(f=>`${-1*Math.floor(f)}px`).join(" "),c=new IntersectionObserver(()=>{++i>1&&Or(t)},{root:Ji,threshold:1,rootMargin:l});c.observe(t),If.set(t,c)}function Or(t){clearTimeout(Zl.get(t));const e=wc(t),n=ra(e)?500:e.duration;Zl.set(t,setTimeout(async()=>{const i=Lr.get(t);try{await(i==null?void 0:i.finished),nn.set(t,Wo(t)),oS(t)}catch{}},n))}function sS(){clearTimeout(Zl.get(Ji)),Zl.set(Ji,setTimeout(()=>{S_.forEach(t=>T_(t,e=>M_(()=>Or(e))))},100))}function aS(t){setTimeout(()=>{nS.set(t,setInterval(()=>M_(Or.bind(null,t)),2e3))},Math.round(2e3*Math.random()))}function M_(t){typeof requestIdleCallback=="function"?requestIdleCallback(()=>t()):requestAnimationFrame(()=>t())}let Nf,Mo;const lS=typeof window<"u"&&"ResizeObserver"in window;lS&&(Ji=document.documentElement,Nf=new MutationObserver(iS),Mo=new ResizeObserver(rS),window.addEventListener("scroll",()=>{uh=window.scrollY,ch=window.scrollX}),Mo.observe(Ji));function cS(t){return t.reduce((i,r)=>[...i,...Array.from(r.addedNodes),...Array.from(r.removedNodes)],[]).every(i=>i.nodeName==="#comment")?!1:t.reduce((i,r)=>{if(i===!1)return!1;if(r.target instanceof Element){if(au(r.target),!i.has(r.target)){i.add(r.target);for(let o=0;o<r.target.children.length;o++){const s=r.target.children.item(o);if(s){if(ia in s)return!1;au(r.target,s),i.add(s)}}}if(r.removedNodes.length)for(let o=0;o<r.removedNodes.length;o++){const s=r.removedNodes[o];if(ia in s)return!1;s instanceof Element&&(i.add(s),au(r.target,s),Vo.set(s,[r.previousSibling,r.nextSibling]))}}return i},new Set)}function au(t,e){!e&&!(hi in t)?Object.defineProperty(t,hi,{value:t}):e&&!(hi in e)&&Object.defineProperty(e,hi,{value:t})}function uS(t){var e;const n=t.isConnected,i=nn.has(t);n&&Vo.has(t)&&Vo.delete(t),Lr.has(t)&&((e=Lr.get(t))===null||e===void 0||e.cancel()),Ql in t?Xp(t):i&&n?dS(t):i&&!n?hS(t):Xp(t)}function Wn(t){return Number(t.replace(/[^0-9.\-]/g,""))}function fS(t){let e=t.parentElement;for(;e;){if(e.scrollLeft||e.scrollTop)return{x:e.scrollLeft,y:e.scrollTop};e=e.parentElement}return{x:0,y:0}}function Wo(t){const e=t.getBoundingClientRect(),{x:n,y:i}=fS(t);return{top:e.top+i,left:e.left+n,width:e.width,height:e.height}}function E_(t,e,n){let i=e.width,r=e.height,o=n.width,s=n.height;const a=getComputedStyle(t);if(a.getPropertyValue("box-sizing")==="content-box"){const c=Wn(a.paddingTop)+Wn(a.paddingBottom)+Wn(a.borderTopWidth)+Wn(a.borderBottomWidth),f=Wn(a.paddingLeft)+Wn(a.paddingRight)+Wn(a.borderRightWidth)+Wn(a.borderLeftWidth);i-=f,o-=f,r-=c,s-=c}return[i,o,r,s].map(Math.round)}function wc(t){return hi in t&&Go.has(t[hi])?Go.get(t[hi]):{duration:250,easing:"ease-in-out"}}function w_(t){if(hi in t)return t[hi]}function fh(t){const e=w_(t);return e?As.has(e):!1}function T_(t,...e){e.forEach(n=>n(t,Go.has(t)));for(let n=0;n<t.children.length;n++){const i=t.children.item(n);i&&e.forEach(r=>r(i,Go.has(i)))}}function dh(t){return Array.isArray(t)?t:[t]}function ra(t){return typeof t=="function"}function dS(t){const e=nn.get(t),n=Wo(t);if(!fh(t))return nn.set(t,n);let i;if(!e)return;const r=wc(t);if(typeof r!="function"){const o=e.left-n.left,s=e.top-n.top,[a,l,c,f]=E_(t,e,n),h={transform:`translate(${o}px, ${s}px)`},d={transform:"translate(0, 0)"};a!==l&&(h.width=`${a}px`,d.width=`${l}px`),c!==f&&(h.height=`${c}px`,d.height=`${f}px`),i=t.animate([h,d],{duration:r.duration,easing:r.easing})}else{const[o]=dh(r(t,"remain",e,n));i=new Animation(o),i.play()}Lr.set(t,i),nn.set(t,n),i.addEventListener("finish",Or.bind(null,t))}function Xp(t){Ql in t&&delete t[Ql];const e=Wo(t);nn.set(t,e);const n=wc(t);if(!fh(t))return;let i;if(typeof n!="function")i=t.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:n.duration*1.5,easing:"ease-in"});else{const[r]=dh(n(t,"add",e));i=new Animation(r),i.play()}Lr.set(t,i),i.addEventListener("finish",Or.bind(null,t))}function jp(t,e){var n;t.remove(),nn.delete(t),Vo.delete(t),Lr.delete(t),(n=If.get(t))===null||n===void 0||n.disconnect(),setTimeout(()=>{if(ia in t&&delete t[ia],Object.defineProperty(t,Ql,{value:!0,configurable:!0}),e&&t instanceof HTMLElement)for(const i in e)t.style[i]=""},0)}function hS(t){var e;if(!Vo.has(t)||!nn.has(t))return;const[n,i]=Vo.get(t);Object.defineProperty(t,ia,{value:!0,configurable:!0});const r=window.scrollX,o=window.scrollY;if(i&&i.parentNode&&i.parentNode instanceof Element?i.parentNode.insertBefore(t,i):n&&n.parentNode?n.parentNode.appendChild(t):(e=w_(t))===null||e===void 0||e.appendChild(t),!fh(t))return jp(t);const[s,a,l,c]=mS(t),f=wc(t),h=nn.get(t);(r!==ch||o!==uh)&&pS(t,r,o,f);let d,p={position:"absolute",top:`${s}px`,left:`${a}px`,width:`${l}px`,height:`${c}px`,margin:"0",pointerEvents:"none",transformOrigin:"center",zIndex:"100"};if(!ra(f))Object.assign(t.style,p),d=t.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:f.duration,easing:"ease-out"});else{const[_,x]=dh(f(t,"remove",h));(x==null?void 0:x.styleReset)!==!1&&(p=(x==null?void 0:x.styleReset)||p,Object.assign(t.style,p)),d=new Animation(_),d.play()}Lr.set(t,d),d.addEventListener("finish",jp.bind(null,t,p))}function pS(t,e,n,i){const r=ch-e,o=uh-n,s=document.documentElement.style.scrollBehavior;if(getComputedStyle(Ji).scrollBehavior==="smooth"&&(document.documentElement.style.scrollBehavior="auto"),window.scrollTo(window.scrollX+r,window.scrollY+o),!t.parentElement)return;const l=t.parentElement;let c=l.clientHeight,f=l.clientWidth;const h=performance.now();function d(){requestAnimationFrame(()=>{if(!ra(i)){const p=c-l.clientHeight,_=f-l.clientWidth;h+i.duration>performance.now()?(window.scrollTo({left:window.scrollX-_,top:window.scrollY-p}),c=l.clientHeight,f=l.clientWidth,d()):document.documentElement.style.scrollBehavior=s}})}d()}function mS(t){const e=nn.get(t),[n,,i]=E_(t,e,Wo(t));let r=t.parentElement;for(;r&&(getComputedStyle(r).position==="static"||r instanceof HTMLBodyElement);)r=r.parentElement;r||(r=document.body);const o=getComputedStyle(r),s=nn.get(r)||Wo(r),a=Math.round(e.top-s.top)-Wn(o.borderTopWidth),l=Math.round(e.left-s.left)-Wn(o.borderLeftWidth);return[a,l,n,i]}function gS(t,e={}){return Nf&&Mo&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!ra(e)&&!e.disrespectUserMotionPreference||(As.add(t),getComputedStyle(t).position==="static"&&Object.assign(t.style,{position:"relative"}),T_(t,Or,aS,r=>Mo==null?void 0:Mo.observe(r)),ra(e)?Go.set(t,e):Go.set(t,{duration:250,easing:"ease-in-out",...e}),Nf.observe(t,{childList:!0}),S_.add(t))),Object.freeze({parent:t,enable:()=>{As.add(t)},disable:()=>{As.delete(t)},isEnabled:()=>As.has(t)})}function _S(t){const[e,n]=ge.useState(),i=ge.useMemo(()=>t,[]),r=ge.useCallback(s=>{s instanceof HTMLElement?n(gS(s,i)):n(void 0)},[i]),o=ge.useCallback(s=>{e&&(s?e.enable():e.disable())},[e]);return[r,o]}function vS({className:t,children:e}){const[n]=_S();return $.jsx("div",{className:t,ref:n,children:e})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hh="167",Vr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Gr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xS=0,Yp=1,yS=2,A_=1,SS=2,ai=3,er=0,rn=1,$n=2,qi=0,Po=1,$p=2,qp=3,Kp=4,MS=5,gr=100,ES=101,wS=102,TS=103,AS=104,CS=200,RS=201,bS=202,PS=203,Uf=204,Ff=205,LS=206,DS=207,IS=208,NS=209,US=210,FS=211,OS=212,kS=213,BS=214,zS=0,HS=1,VS=2,Jl=3,GS=4,WS=5,XS=6,jS=7,ph=0,YS=1,$S=2,Ki=0,qS=1,KS=2,ZS=3,QS=4,JS=5,eM=6,tM=7,C_=300,Xo=301,jo=302,Of=303,kf=304,Tc=306,Bf=1e3,Sr=1001,zf=1002,wn=1003,nM=1004,Fa=1005,Fn=1006,lu=1007,Mr=1008,Si=1009,R_=1010,b_=1011,oa=1012,mh=1013,Dr=1014,pi=1015,da=1016,gh=1017,_h=1018,Yo=1020,P_=35902,L_=1021,D_=1022,On=1023,I_=1024,N_=1025,Lo=1026,$o=1027,U_=1028,vh=1029,F_=1030,xh=1031,yh=1033,yl=33776,Sl=33777,Ml=33778,El=33779,Hf=35840,Vf=35841,Gf=35842,Wf=35843,Xf=36196,jf=37492,Yf=37496,$f=37808,qf=37809,Kf=37810,Zf=37811,Qf=37812,Jf=37813,ed=37814,td=37815,nd=37816,id=37817,rd=37818,od=37819,sd=37820,ad=37821,wl=36492,ld=36494,cd=36495,O_=36283,ud=36284,fd=36285,dd=36286,iM=3200,rM=3201,k_=0,oM=1,ki="",Xn="srgb",or="srgb-linear",Sh="display-p3",Ac="display-p3-linear",ec="linear",it="srgb",tc="rec709",nc="p3",Wr=7680,Zp=519,sM=512,aM=513,lM=514,B_=515,cM=516,uM=517,fM=518,dM=519,Qp=35044,Jp="300 es",mi=2e3,ic=2001;class kr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let em=1234567;const Os=Math.PI/180,qo=180/Math.PI;function es(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[t&255]+zt[t>>8&255]+zt[t>>16&255]+zt[t>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[n&63|128]+zt[n>>8&255]+"-"+zt[n>>16&255]+zt[n>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function Gt(t,e,n){return Math.max(e,Math.min(n,t))}function Mh(t,e){return(t%e+e)%e}function hM(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function pM(t,e,n){return t!==e?(n-t)/(e-t):0}function ks(t,e,n){return(1-n)*t+n*e}function mM(t,e,n,i){return ks(t,e,1-Math.exp(-n*i))}function gM(t,e=1){return e-Math.abs(Mh(t,e*2)-e)}function _M(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function vM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function xM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function yM(t,e){return t+Math.random()*(e-t)}function SM(t){return t*(.5-Math.random())}function MM(t){t!==void 0&&(em=t);let e=em+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function EM(t){return t*Os}function wM(t){return t*qo}function TM(t){return(t&t-1)===0&&t!==0}function AM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function CM(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function RM(t,e,n,i,r){const o=Math.cos,s=Math.sin,a=o(n/2),l=s(n/2),c=o((e+i)/2),f=s((e+i)/2),h=o((e-i)/2),d=s((e-i)/2),p=o((i-e)/2),_=s((i-e)/2);switch(r){case"XYX":t.set(a*f,l*h,l*d,a*c);break;case"YZY":t.set(l*d,a*f,l*h,a*c);break;case"ZXZ":t.set(l*h,l*d,a*f,a*c);break;case"XZX":t.set(a*f,l*_,l*p,a*c);break;case"YXY":t.set(l*p,a*f,l*_,a*c);break;case"ZYZ":t.set(l*_,l*p,a*f,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ao(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Xt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const bM={DEG2RAD:Os,RAD2DEG:qo,generateUUID:es,clamp:Gt,euclideanModulo:Mh,mapLinear:hM,inverseLerp:pM,lerp:ks,damp:mM,pingpong:gM,smoothstep:_M,smootherstep:vM,randInt:xM,randFloat:yM,randFloatSpread:SM,seededRandom:MM,degToRad:EM,radToDeg:wM,isPowerOfTwo:TM,ceilPowerOfTwo:AM,floorPowerOfTwo:CM,setQuaternionFromProperEuler:RM,normalize:Xt,denormalize:ao};class Ne{constructor(e=0,n=0){Ne.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,n,i,r,o,s,a,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,c)}set(e,n,i,r,o,s,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=o,f[5]=l,f[6]=i,f[7]=s,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],p=i[5],_=i[8],x=r[0],m=r[3],u=r[6],g=r[1],v=r[4],M=r[7],R=r[2],T=r[5],E=r[8];return o[0]=s*x+a*g+l*R,o[3]=s*m+a*v+l*T,o[6]=s*u+a*M+l*E,o[1]=c*x+f*g+h*R,o[4]=c*m+f*v+h*T,o[7]=c*u+f*M+h*E,o[2]=d*x+p*g+_*R,o[5]=d*m+p*v+_*T,o[8]=d*u+p*M+_*E,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*s*f-n*a*c-i*o*f+i*a*l+r*o*c-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=f*s-a*c,d=a*l-f*o,p=c*o-s*l,_=n*h+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(r*c-f*i)*x,e[2]=(a*i-r*s)*x,e[3]=d*x,e[4]=(f*n-r*l)*x,e[5]=(r*o-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(s*n-i*o)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(cu.makeScale(e,n)),this}rotate(e){return this.premultiply(cu.makeRotation(-e)),this}translate(e,n){return this.premultiply(cu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const cu=new Be;function z_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function rc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function PM(){const t=rc("canvas");return t.style.display="block",t}const tm={};function Bs(t){t in tm||(tm[t]=!0,console.warn(t))}function LM(t,e,n){return new Promise(function(i,r){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}const nm=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),im=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),hs={[or]:{transfer:ec,primaries:tc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Xn]:{transfer:it,primaries:tc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ac]:{transfer:ec,primaries:nc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(im),fromReference:t=>t.applyMatrix3(nm)},[Sh]:{transfer:it,primaries:nc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(im),fromReference:t=>t.applyMatrix3(nm).convertLinearToSRGB()}},DM=new Set([or,Ac]),Qe={enabled:!0,_workingColorSpace:or,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!DM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=hs[e].toReference,r=hs[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return hs[t].primaries},getTransfer:function(t){return t===ki?ec:hs[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(hs[e].luminanceCoefficients)}};function Do(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function uu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Xr;class IM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xr===void 0&&(Xr=rc("canvas")),Xr.width=e.width,Xr.height=e.height;const i=Xr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Xr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=rc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Do(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Do(n[i]/255)*255):n[i]=Do(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let NM=0;class H_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=es(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(fu(r[s].image)):o.push(fu(r[s]))}else o=fu(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function fu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?IM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let UM=0;class on extends kr{constructor(e=on.DEFAULT_IMAGE,n=on.DEFAULT_MAPPING,i=Sr,r=Sr,o=Fn,s=Mr,a=On,l=Si,c=on.DEFAULT_ANISOTROPY,f=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=es(),this.name="",this.source=new H_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==C_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bf:e.x=e.x-Math.floor(e.x);break;case Sr:e.x=e.x<0?0:1;break;case zf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bf:e.y=e.y-Math.floor(e.y);break;case Sr:e.y=e.y<0?0:1;break;case zf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=C_;on.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,n=0,i=0,r=1){Tt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],p=l[5],_=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,M=(p+1)/2,R=(u+1)/2,T=(f+d)/4,E=(h+x)/4,b=(_+m)/4;return v>M&&v>R?v<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(v),r=T/i,o=E/i):M>R?M<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(M),i=T/r,o=b/r):R<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(R),i=E/o,r=b/o),this.set(i,r,o,n),this}let g=Math.sqrt((m-_)*(m-_)+(h-x)*(h-x)+(d-f)*(d-f));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(h-x)/g,this.z=(d-f)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class FM extends kr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Tt(0,0,e,n),this.scissorTest=!1,this.viewport=new Tt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new on(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new H_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ir extends FM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class V_ extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class OM extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3];const d=o[s+0],p=o[s+1],_=o[s+2],x=o[s+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=_,e[n+3]=x;return}if(h!==x||l!==d||c!==p||f!==_){let m=1-a;const u=l*d+c*p+f*_+h*x,g=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const R=Math.sqrt(v),T=Math.atan2(R,u*g);m=Math.sin(m*T)/R,a=Math.sin(a*T)/R}const M=a*g;if(l=l*m+d*M,c=c*m+p*M,f=f*m+_*M,h=h*m+x*M,m===1-a){const R=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=R,c*=R,f*=R,h*=R}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=o[s],d=o[s+1],p=o[s+2],_=o[s+3];return e[n]=a*_+f*h+l*p-c*d,e[n+1]=l*_+f*d+c*h-a*p,e[n+2]=c*_+f*p+a*d-l*h,e[n+3]=f*_-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),h=a(o/2),d=l(i/2),p=l(r/2),_=l(o/2);switch(s){case"XYZ":this._x=d*f*h+c*p*_,this._y=c*p*h-d*f*_,this._z=c*f*_+d*p*h,this._w=c*f*h-d*p*_;break;case"YXZ":this._x=d*f*h+c*p*_,this._y=c*p*h-d*f*_,this._z=c*f*_-d*p*h,this._w=c*f*h+d*p*_;break;case"ZXY":this._x=d*f*h-c*p*_,this._y=c*p*h+d*f*_,this._z=c*f*_+d*p*h,this._w=c*f*h-d*p*_;break;case"ZYX":this._x=d*f*h-c*p*_,this._y=c*p*h+d*f*_,this._z=c*f*_-d*p*h,this._w=c*f*h+d*p*_;break;case"YZX":this._x=d*f*h+c*p*_,this._y=c*p*h+d*f*_,this._z=c*f*_-d*p*h,this._w=c*f*h-d*p*_;break;case"XZY":this._x=d*f*h-c*p*_,this._y=c*p*h-d*f*_,this._z=c*f*_+d*p*h,this._w=c*f*h+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],c=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-l)*p,this._y=(o-c)*p,this._z=(s-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(f-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(o+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(o-c)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(s-r)/p,this._x=(o+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+s*a+r*c-o*l,this._y=r*f+s*l+o*a-i*c,this._z=o*f+s*c+i*l-r*a,this._w=s*f-i*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*o+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),h=Math.sin((1-n)*f)/c,d=Math.sin(n*f)/c;return this._w=s*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=o*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(rm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(rm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*i),f=2*(a*n-o*r),h=2*(o*i-s*n);return this.x=n+l*c+s*h-a*f,this.y=i+l*f+a*c-o*h,this.z=r+l*h+o*f-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return du.copy(this).projectOnVector(e),this.sub(du)}reflect(e){return this.sub(du.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const du=new O,rm=new Nr;class ha{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Pn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Pn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Pn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Pn):Pn.fromBufferAttribute(o,s),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oa.copy(i.boundingBox)),Oa.applyMatrix4(e.matrixWorld),this.union(Oa)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ps),ka.subVectors(this.max,ps),jr.subVectors(e.a,ps),Yr.subVectors(e.b,ps),$r.subVectors(e.c,ps),Ci.subVectors(Yr,jr),Ri.subVectors($r,Yr),ar.subVectors(jr,$r);let n=[0,-Ci.z,Ci.y,0,-Ri.z,Ri.y,0,-ar.z,ar.y,Ci.z,0,-Ci.x,Ri.z,0,-Ri.x,ar.z,0,-ar.x,-Ci.y,Ci.x,0,-Ri.y,Ri.x,0,-ar.y,ar.x,0];return!hu(n,jr,Yr,$r,ka)||(n=[1,0,0,0,1,0,0,0,1],!hu(n,jr,Yr,$r,ka))?!1:(Ba.crossVectors(Ci,Ri),n=[Ba.x,Ba.y,Ba.z],hu(n,jr,Yr,$r,ka))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ni=[new O,new O,new O,new O,new O,new O,new O,new O],Pn=new O,Oa=new ha,jr=new O,Yr=new O,$r=new O,Ci=new O,Ri=new O,ar=new O,ps=new O,ka=new O,Ba=new O,lr=new O;function hu(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){lr.fromArray(t,o);const a=r.x*Math.abs(lr.x)+r.y*Math.abs(lr.y)+r.z*Math.abs(lr.z),l=e.dot(lr),c=n.dot(lr),f=i.dot(lr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const kM=new ha,ms=new O,pu=new O;class Cc{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):kM.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ms.subVectors(e,this.center);const n=ms.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ms,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ms.copy(e.center).add(pu)),this.expandByPoint(ms.copy(e.center).sub(pu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new O,mu=new O,za=new O,bi=new O,gu=new O,Ha=new O,_u=new O;class Eh{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,n),ii.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){mu.copy(e).add(n).multiplyScalar(.5),za.copy(n).sub(e).normalize(),bi.copy(this.origin).sub(mu);const o=e.distanceTo(n)*.5,s=-this.direction.dot(za),a=bi.dot(this.direction),l=-bi.dot(za),c=bi.lengthSq(),f=Math.abs(1-s*s);let h,d,p,_;if(f>0)if(h=s*l-a,d=s*a-l,_=o*f,h>=0)if(d>=-_)if(d<=_){const x=1/f;h*=x,d*=x,p=h*(h+s*d+2*a)+d*(s*h+d+2*l)+c}else d=o,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*l)+c;else d=-o,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-s*o+a)),d=h>0?-o:Math.min(Math.max(-o,-l),o),p=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-o,-l),o),p=d*(d+2*l)+c):(h=Math.max(0,-(s*o+a)),d=h>0?o:Math.min(Math.max(-o,-l),o),p=-h*h+d*(d+2*l)+c);else d=s>0?-o:o,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(mu).addScaledVector(za,d),p}intersectSphere(e,n){ii.subVectors(e.center,this.origin);const i=ii.dot(this.direction),r=ii.dot(ii)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(o=(e.min.y-d.y)*f,s=(e.max.y-d.y)*f):(o=(e.max.y-d.y)*f,s=(e.min.y-d.y)*f),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,n,i,r,o){gu.subVectors(n,e),Ha.subVectors(i,e),_u.crossVectors(gu,Ha);let s=this.direction.dot(_u),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;bi.subVectors(this.origin,e);const l=a*this.direction.dot(Ha.crossVectors(bi,Ha));if(l<0)return null;const c=a*this.direction.dot(gu.cross(bi));if(c<0||l+c>s)return null;const f=-a*bi.dot(_u);return f<0?null:this.at(f/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,n,i,r,o,s,a,l,c,f,h,d,p,_,x,m){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,c,f,h,d,p,_,x,m)}set(e,n,i,r,o,s,a,l,c,f,h,d,p,_,x,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=o,u[5]=s,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=p,u[7]=_,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/qr.setFromMatrixColumn(e,0).length(),o=1/qr.setFromMatrixColumn(e,1).length(),s=1/qr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(o),h=Math.sin(o);if(e.order==="XYZ"){const d=s*f,p=s*h,_=a*f,x=a*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=p+_*c,n[5]=d-x*c,n[9]=-a*l,n[2]=x-d*c,n[6]=_+p*c,n[10]=s*l}else if(e.order==="YXZ"){const d=l*f,p=l*h,_=c*f,x=c*h;n[0]=d+x*a,n[4]=_*a-p,n[8]=s*c,n[1]=s*h,n[5]=s*f,n[9]=-a,n[2]=p*a-_,n[6]=x+d*a,n[10]=s*l}else if(e.order==="ZXY"){const d=l*f,p=l*h,_=c*f,x=c*h;n[0]=d-x*a,n[4]=-s*h,n[8]=_+p*a,n[1]=p+_*a,n[5]=s*f,n[9]=x-d*a,n[2]=-s*c,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const d=s*f,p=s*h,_=a*f,x=a*h;n[0]=l*f,n[4]=_*c-p,n[8]=d*c+x,n[1]=l*h,n[5]=x*c+d,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const d=s*l,p=s*c,_=a*l,x=a*c;n[0]=l*f,n[4]=x-d*h,n[8]=_*h+p,n[1]=h,n[5]=s*f,n[9]=-a*f,n[2]=-c*f,n[6]=p*h+_,n[10]=d-x*h}else if(e.order==="XZY"){const d=s*l,p=s*c,_=a*l,x=a*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=d*h+x,n[5]=s*f,n[9]=p*h-_,n[2]=_*h-p,n[6]=a*f,n[10]=x*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(BM,e,zM)}lookAt(e,n,i){const r=this.elements;return ln.subVectors(e,n),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Pi.crossVectors(i,ln),Pi.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Pi.crossVectors(i,ln)),Pi.normalize(),Va.crossVectors(ln,Pi),r[0]=Pi.x,r[4]=Va.x,r[8]=ln.x,r[1]=Pi.y,r[5]=Va.y,r[9]=ln.y,r[2]=Pi.z,r[6]=Va.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],p=i[13],_=i[2],x=i[6],m=i[10],u=i[14],g=i[3],v=i[7],M=i[11],R=i[15],T=r[0],E=r[4],b=r[8],A=r[12],y=r[1],P=r[5],B=r[9],F=r[13],j=r[2],Y=r[6],V=r[10],K=r[14],I=r[3],Z=r[7],Q=r[11],oe=r[15];return o[0]=s*T+a*y+l*j+c*I,o[4]=s*E+a*P+l*Y+c*Z,o[8]=s*b+a*B+l*V+c*Q,o[12]=s*A+a*F+l*K+c*oe,o[1]=f*T+h*y+d*j+p*I,o[5]=f*E+h*P+d*Y+p*Z,o[9]=f*b+h*B+d*V+p*Q,o[13]=f*A+h*F+d*K+p*oe,o[2]=_*T+x*y+m*j+u*I,o[6]=_*E+x*P+m*Y+u*Z,o[10]=_*b+x*B+m*V+u*Q,o[14]=_*A+x*F+m*K+u*oe,o[3]=g*T+v*y+M*j+R*I,o[7]=g*E+v*P+M*Y+R*Z,o[11]=g*b+v*B+M*V+R*Q,o[15]=g*A+v*F+M*K+R*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],p=e[14],_=e[3],x=e[7],m=e[11],u=e[15];return _*(+o*l*h-r*c*h-o*a*d+i*c*d+r*a*p-i*l*p)+x*(+n*l*p-n*c*d+o*s*d-r*s*p+r*c*f-o*l*f)+m*(+n*c*h-n*a*p-o*s*h+i*s*p+o*a*f-i*c*f)+u*(-r*a*f-n*l*h+n*a*d+r*s*h-i*s*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],p=e[11],_=e[12],x=e[13],m=e[14],u=e[15],g=h*m*c-x*d*c+x*l*p-a*m*p-h*l*u+a*d*u,v=_*d*c-f*m*c-_*l*p+s*m*p+f*l*u-s*d*u,M=f*x*c-_*h*c+_*a*p-s*x*p-f*a*u+s*h*u,R=_*h*l-f*x*l-_*a*d+s*x*d+f*a*m-s*h*m,T=n*g+i*v+r*M+o*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=g*E,e[1]=(x*d*o-h*m*o-x*r*p+i*m*p+h*r*u-i*d*u)*E,e[2]=(a*m*o-x*l*o+x*r*c-i*m*c-a*r*u+i*l*u)*E,e[3]=(h*l*o-a*d*o-h*r*c+i*d*c+a*r*p-i*l*p)*E,e[4]=v*E,e[5]=(f*m*o-_*d*o+_*r*p-n*m*p-f*r*u+n*d*u)*E,e[6]=(_*l*o-s*m*o-_*r*c+n*m*c+s*r*u-n*l*u)*E,e[7]=(s*d*o-f*l*o+f*r*c-n*d*c-s*r*p+n*l*p)*E,e[8]=M*E,e[9]=(_*h*o-f*x*o-_*i*p+n*x*p+f*i*u-n*h*u)*E,e[10]=(s*x*o-_*a*o+_*i*c-n*x*c-s*i*u+n*a*u)*E,e[11]=(f*a*o-s*h*o-f*i*c+n*h*c+s*i*p-n*a*p)*E,e[12]=R*E,e[13]=(f*x*r-_*h*r+_*i*d-n*x*d-f*i*m+n*h*m)*E,e[14]=(_*a*r-s*x*r-_*i*l+n*x*l+s*i*m-n*a*m)*E,e[15]=(s*h*r-f*a*r+f*i*l-n*h*l-s*i*d+n*a*d)*E,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,c=o*s,f=o*a;return this.set(c*s+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*s,0,c*l-r*a,f*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,c=o+o,f=s+s,h=a+a,d=o*c,p=o*f,_=o*h,x=s*f,m=s*h,u=a*h,g=l*c,v=l*f,M=l*h,R=i.x,T=i.y,E=i.z;return r[0]=(1-(x+u))*R,r[1]=(p+M)*R,r[2]=(_-v)*R,r[3]=0,r[4]=(p-M)*T,r[5]=(1-(d+u))*T,r[6]=(m+g)*T,r[7]=0,r[8]=(_+v)*E,r[9]=(m-g)*E,r[10]=(1-(d+x))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=qr.set(r[0],r[1],r[2]).length();const s=qr.set(r[4],r[5],r[6]).length(),a=qr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Ln.copy(this);const c=1/o,f=1/s,h=1/a;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=f,Ln.elements[5]*=f,Ln.elements[6]*=f,Ln.elements[8]*=h,Ln.elements[9]*=h,Ln.elements[10]*=h,n.setFromRotationMatrix(Ln),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=mi){const l=this.elements,c=2*o/(n-e),f=2*o/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let p,_;if(a===mi)p=-(s+o)/(s-o),_=-2*s*o/(s-o);else if(a===ic)p=-s/(s-o),_=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=mi){const l=this.elements,c=1/(n-e),f=1/(i-r),h=1/(s-o),d=(n+e)*c,p=(i+r)*f;let _,x;if(a===mi)_=(s+o)*h,x=-2*h;else if(a===ic)_=o*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const qr=new O,Ln=new mt,BM=new O(0,0,0),zM=new O(1,1,1),Pi=new O,Va=new O,ln=new O,om=new mt,sm=new Nr;class ei{constructor(e=0,n=0,i=0,r=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],f=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Gt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return om.makeRotationFromQuaternion(e),this.setFromRotationMatrix(om,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return sm.setFromEuler(this),this.setFromQuaternion(sm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class G_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let HM=0;const am=new O,Kr=new Nr,ri=new mt,Ga=new O,gs=new O,VM=new O,GM=new Nr,lm=new O(1,0,0),cm=new O(0,1,0),um=new O(0,0,1),fm={type:"added"},WM={type:"removed"},Zr={type:"childadded",child:null},vu={type:"childremoved",child:null};class Ct extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HM++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new O,n=new ei,i=new Nr,r=new O(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new Be}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new G_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Kr.setFromAxisAngle(e,n),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(e,n){return Kr.setFromAxisAngle(e,n),this.quaternion.premultiply(Kr),this}rotateX(e){return this.rotateOnAxis(lm,e)}rotateY(e){return this.rotateOnAxis(cm,e)}rotateZ(e){return this.rotateOnAxis(um,e)}translateOnAxis(e,n){return am.copy(e).applyQuaternion(this.quaternion),this.position.add(am.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(lm,e)}translateY(e){return this.translateOnAxis(cm,e)}translateZ(e){return this.translateOnAxis(um,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ga.copy(e):Ga.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(gs,Ga,this.up):ri.lookAt(Ga,gs,this.up),this.quaternion.setFromRotationMatrix(ri),r&&(ri.extractRotation(r.matrixWorld),Kr.setFromRotationMatrix(ri),this.quaternion.premultiply(Kr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fm),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(WM),vu.child=e,this.dispatchEvent(vu),vu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fm),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,e,VM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,GM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];o(e.shapes,h)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),f=s(e.images),h=s(e.shapes),d=s(e.skeletons),p=s(e.animations),_=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function s(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ct.DEFAULT_UP=new O(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new O,oi=new O,xu=new O,si=new O,Qr=new O,Jr=new O,dm=new O,yu=new O,Su=new O,Mu=new O;class qn{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Dn.subVectors(e,n),r.cross(Dn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Dn.subVectors(r,n),oi.subVectors(i,n),xu.subVectors(e,n);const s=Dn.dot(Dn),a=Dn.dot(oi),l=Dn.dot(xu),c=oi.dot(oi),f=oi.dot(xu),h=s*c-a*a;if(h===0)return o.set(0,0,0),null;const d=1/h,p=(c*l-a*f)*d,_=(s*f-a*l)*d;return o.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,si.x),l.addScaledVector(s,si.y),l.addScaledVector(a,si.z),l)}static isFrontFacing(e,n,i,r){return Dn.subVectors(i,n),oi.subVectors(e,n),Dn.cross(oi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Dn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return qn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;Qr.subVectors(r,i),Jr.subVectors(o,i),yu.subVectors(e,i);const l=Qr.dot(yu),c=Jr.dot(yu);if(l<=0&&c<=0)return n.copy(i);Su.subVectors(e,r);const f=Qr.dot(Su),h=Jr.dot(Su);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return s=l/(l-f),n.copy(i).addScaledVector(Qr,s);Mu.subVectors(e,o);const p=Qr.dot(Mu),_=Jr.dot(Mu);if(_>=0&&p<=_)return n.copy(o);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Jr,a);const m=f*_-p*h;if(m<=0&&h-f>=0&&p-_>=0)return dm.subVectors(o,r),a=(h-f)/(h-f+(p-_)),n.copy(r).addScaledVector(dm,a);const u=1/(m+x+d);return s=x*u,a=d*u,n.copy(i).addScaledVector(Qr,s).addScaledVector(Jr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const W_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Wa={h:0,s:0,l:0};function Eu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ve{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=Mh(e,1),n=Gt(n,0,1),i=Gt(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=Eu(s,o,e+1/3),this.g=Eu(s,o,e),this.b=Eu(s,o,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=Xn){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Xn){const i=W_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Do(e.r),this.g=Do(e.g),this.b=Do(e.b),this}copyLinearToSRGB(e){return this.r=uu(e.r),this.g=uu(e.g),this.b=uu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return Qe.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Gt(Ht.r*255,0,255))*65536+Math.round(Gt(Ht.g*255,0,255))*256+Math.round(Gt(Ht.b*255,0,255))}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,o=Ht.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,c;const f=(a+s)/2;if(a===s)l=0,c=0;else{const h=s-a;switch(c=f<=.5?h/(s+a):h/(2-s-a),s){case i:l=(r-o)/h+(r<o?6:0);break;case r:l=(o-i)/h+2;break;case o:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Xn){Qe.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==Xn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+n,Li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Li),e.getHSL(Wa);const i=ks(Li.h,Wa.h,n),r=ks(Li.s,Wa.s,n),o=ks(Li.l,Wa.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Ve;Ve.NAMES=W_;let XM=0;class ts extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=es(),this.name="",this.type="Material",this.blending=Po,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uf,this.blendDst=Ff,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Jl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Po&&(i.blending=this.blending),this.side!==er&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Uf&&(i.blendSrc=this.blendSrc),this.blendDst!==Ff&&(i.blendDst=this.blendDst),this.blendEquation!==gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Jl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class X_ extends ts{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new O,Xa=new Ne;class Jn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Qp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Bs("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Xa.fromBufferAttribute(this,n),Xa.applyMatrix3(e),this.setXY(n,Xa.x,Xa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ao(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Xt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ao(n,this.array)),n}setX(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ao(n,this.array)),n}setY(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ao(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ao(n,this.array)),n}setW(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array),o=Xt(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qp&&(e.usage=this.usage),e}}class j_ extends Jn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Y_ extends Jn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class zn extends Jn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let jM=0;const vn=new mt,wu=new Ct,eo=new O,cn=new ha,_s=new ha,Pt=new O;class Ei extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(z_(e)?Y_:j_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Be().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,n,i){return vn.makeTranslation(e,n,i),this.applyMatrix4(vn),this}scale(e,n,i){return vn.makeScale(e,n,i),this.applyMatrix4(vn),this}lookAt(e){return wu.lookAt(e),wu.updateMatrix(),this.applyMatrix4(wu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eo).negate(),this.translate(eo.x,eo.y,eo.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new zn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ha);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];cn.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];_s.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(cn.min,_s.min),cn.expandByPoint(Pt),Pt.addVectors(cn.max,_s.max),cn.expandByPoint(Pt)):(cn.expandByPoint(_s.min),cn.expandByPoint(_s.max))}cn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Pt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Pt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Pt.fromBufferAttribute(a,c),l&&(eo.fromBufferAttribute(e,c),Pt.add(eo)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jn(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new O,l[b]=new O;const c=new O,f=new O,h=new O,d=new Ne,p=new Ne,_=new Ne,x=new O,m=new O;function u(b,A,y){c.fromBufferAttribute(i,b),f.fromBufferAttribute(i,A),h.fromBufferAttribute(i,y),d.fromBufferAttribute(o,b),p.fromBufferAttribute(o,A),_.fromBufferAttribute(o,y),f.sub(c),h.sub(c),p.sub(d),_.sub(d);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(x.copy(f).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(f,-_.x).multiplyScalar(P),a[b].add(x),a[A].add(x),a[y].add(x),l[b].add(m),l[A].add(m),l[y].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let b=0,A=g.length;b<A;++b){const y=g[b],P=y.start,B=y.count;for(let F=P,j=P+B;F<j;F+=3)u(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const v=new O,M=new O,R=new O,T=new O;function E(b){R.fromBufferAttribute(r,b),T.copy(R);const A=a[b];v.copy(A),v.sub(R.multiplyScalar(R.dot(A))).normalize(),M.crossVectors(T,A);const P=M.dot(l[b])<0?-1:1;s.setXYZW(b,v.x,v.y,v.z,P)}for(let b=0,A=g.length;b<A;++b){const y=g[b],P=y.start,B=y.count;for(let F=P,j=P+B;F<j;F+=3)E(e.getX(F+0)),E(e.getX(F+1)),E(e.getX(F+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new O,o=new O,s=new O,a=new O,l=new O,c=new O,f=new O,h=new O;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,x),s.fromBufferAttribute(n,m),f.subVectors(s,o),h.subVectors(r,o),f.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(f),l.add(f),c.add(f),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),o.fromBufferAttribute(n,d+1),s.fromBufferAttribute(n,d+2),f.subVectors(s,o),h.subVectors(r,o),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pt.fromBufferAttribute(e,n),Pt.normalize(),e.setXYZ(n,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,h=a.normalized,d=new c.constructor(l.length*f);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*f;for(let u=0;u<f;u++)d[_++]=c[p++]}return new Jn(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ei,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let f=0,h=c.length;f<h;f++){const d=c[f],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const o=e.morphAttributes;for(const c in o){const f=[],h=o[c];for(let d=0,p=h.length;d<p;d++)f.push(h[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,f=s.length;c<f;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hm=new mt,cr=new Eh,ja=new Cc,pm=new O,to=new O,no=new O,io=new O,Tu=new O,Ya=new O,$a=new Ne,qa=new Ne,Ka=new Ne,mm=new O,gm=new O,_m=new O,Za=new O,Qa=new O;class Kn extends Ct{constructor(e=new Ei,n=new X_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){Ya.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const f=a[l],h=o[l];f!==0&&(Tu.fromBufferAttribute(h,e),s?Ya.addScaledVector(Tu,f):Ya.addScaledVector(Tu.sub(n),f))}n.add(Ya)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ja.copy(i.boundingSphere),ja.applyMatrix4(o),cr.copy(e.ray).recast(e.near),!(ja.containsPoint(cr.origin)===!1&&(cr.intersectSphere(ja,pm)===null||cr.origin.distanceToSquared(pm)>(e.far-e.near)**2))&&(hm.copy(o).invert(),cr.copy(e.ray).applyMatrix4(hm),!(i.boundingBox!==null&&cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,cr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,f=o.attributes.uv1,h=o.attributes.normal,d=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(s))for(let _=0,x=d.length;_<x;_++){const m=d[_],u=s[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=g,R=v;M<R;M+=3){const T=a.getX(M),E=a.getX(M+1),b=a.getX(M+2);r=Ja(this,u,e,i,c,f,h,T,E,b),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=_,u=x;m<u;m+=3){const g=a.getX(m),v=a.getX(m+1),M=a.getX(m+2);r=Ja(this,s,e,i,c,f,h,g,v,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,x=d.length;_<x;_++){const m=d[_],u=s[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=g,R=v;M<R;M+=3){const T=M,E=M+1,b=M+2;r=Ja(this,u,e,i,c,f,h,T,E,b),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,u=x;m<u;m+=3){const g=m,v=m+1,M=m+2;r=Ja(this,s,e,i,c,f,h,g,v,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function YM(t,e,n,i,r,o,s,a){let l;if(e.side===rn?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===er,a),l===null)return null;Qa.copy(a),Qa.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Qa);return c<n.near||c>n.far?null:{distance:c,point:Qa.clone(),object:t}}function Ja(t,e,n,i,r,o,s,a,l,c){t.getVertexPosition(a,to),t.getVertexPosition(l,no),t.getVertexPosition(c,io);const f=YM(t,e,n,i,to,no,io,Za);if(f){r&&($a.fromBufferAttribute(r,a),qa.fromBufferAttribute(r,l),Ka.fromBufferAttribute(r,c),f.uv=qn.getInterpolation(Za,to,no,io,$a,qa,Ka,new Ne)),o&&($a.fromBufferAttribute(o,a),qa.fromBufferAttribute(o,l),Ka.fromBufferAttribute(o,c),f.uv1=qn.getInterpolation(Za,to,no,io,$a,qa,Ka,new Ne)),s&&(mm.fromBufferAttribute(s,a),gm.fromBufferAttribute(s,l),_m.fromBufferAttribute(s,c),f.normal=qn.getInterpolation(Za,to,no,io,mm,gm,_m,new O),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new O,materialIndex:0};qn.getNormal(to,no,io,h.normal),f.face=h}return f}class ns extends Ei{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],f=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,s,o,0),_("z","y","x",1,-1,i,n,-e,s,o,1),_("x","z","y",1,1,e,i,n,r,s,2),_("x","z","y",1,-1,e,i,-n,r,s,3),_("x","y","z",1,-1,e,n,i,r,o,4),_("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new zn(c,3)),this.setAttribute("normal",new zn(f,3)),this.setAttribute("uv",new zn(h,2));function _(x,m,u,g,v,M,R,T,E,b,A){const y=M/E,P=R/b,B=M/2,F=R/2,j=T/2,Y=E+1,V=b+1;let K=0,I=0;const Z=new O;for(let Q=0;Q<V;Q++){const oe=Q*P-F;for(let xe=0;xe<Y;xe++){const He=xe*y-B;Z[x]=He*g,Z[m]=oe*v,Z[u]=j,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[m]=0,Z[u]=T>0?1:-1,f.push(Z.x,Z.y,Z.z),h.push(xe/E),h.push(1-Q/b),K+=1}}for(let Q=0;Q<b;Q++)for(let oe=0;oe<E;oe++){const xe=d+oe+Y*Q,He=d+oe+Y*(Q+1),q=d+(oe+1)+Y*(Q+1),ne=d+(oe+1)+Y*Q;l.push(xe,He,ne),l.push(He,q,ne),I+=6}a.addGroup(p,I,A),p+=I,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ns(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ko(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function jt(t){const e={};for(let n=0;n<t.length;n++){const i=Ko(t[n]);for(const r in i)e[r]=i[r]}return e}function $M(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function $_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const qM={clone:Ko,merge:jt};var KM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tr extends ts{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=KM,this.fragmentShader=ZM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ko(e.uniforms),this.uniformsGroups=$M(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}let q_=class extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=mi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Di=new O,vm=new Ne,xm=new Ne;class fn extends q_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=qo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qo*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,n){return this.getViewBounds(e,vm,xm),n.subVectors(xm,vm)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Os*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ro=-90,oo=1;class QM extends Ct{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fn(ro,oo,e,n);r.layers=this.layers,this.add(r);const o=new fn(ro,oo,e,n);o.layers=this.layers,this.add(o);const s=new fn(ro,oo,e,n);s.layers=this.layers,this.add(s);const a=new fn(ro,oo,e,n);a.layers=this.layers,this.add(a);const l=new fn(ro,oo,e,n);l.layers=this.layers,this.add(l);const c=new fn(ro,oo,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const c of n)this.remove(c);if(e===mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ic)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class K_ extends on{constructor(e,n,i,r,o,s,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:Xo,super(e,n,i,r,o,s,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class JM extends Ir{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new K_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Fn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ns(5,5,5),o=new tr({name:"CubemapFromEquirect",uniforms:Ko(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:qi});o.uniforms.tEquirect.value=n;const s=new Kn(r,o),a=n.minFilter;return n.minFilter===Mr&&(n.minFilter=Fn),new QM(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const Au=new O,eE=new O,tE=new Be;class Ui{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Au.subVectors(i,n).cross(eE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Au),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||tE.getNormalMatrix(e),r=this.coplanarPoint(Au).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new Cc,el=new O;class wh{constructor(e=new Ui,n=new Ui,i=new Ui,r=new Ui,o=new Ui,s=new Ui){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=mi){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],c=r[4],f=r[5],h=r[6],d=r[7],p=r[8],_=r[9],x=r[10],m=r[11],u=r[12],g=r[13],v=r[14],M=r[15];if(i[0].setComponents(l-o,d-c,m-p,M-u).normalize(),i[1].setComponents(l+o,d+c,m+p,M+u).normalize(),i[2].setComponents(l+s,d+f,m+_,M+g).normalize(),i[3].setComponents(l-s,d-f,m-_,M-g).normalize(),i[4].setComponents(l-a,d-h,m-x,M-v).normalize(),n===mi)i[5].setComponents(l+a,d+h,m+x,M+v).normalize();else if(n===ic)i[5].setComponents(a,h,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(el.x=r.normal.x>0?e.max.x:e.min.x,el.y=r.normal.y>0?e.max.y:e.min.y,el.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(el)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Z_(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function nE(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const f=l.array,h=l._updateRange,d=l.updateRanges;if(t.bindBuffer(c,a),h.count===-1&&d.length===0&&t.bufferSubData(c,0,f),d.length!==0){for(let p=0,_=d.length;p<_;p++){const x=d[p];t.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}h.count!==-1&&(t.bufferSubData(c,h.offset*f.BYTES_PER_ELEMENT,f,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}class Rc extends Ei{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,h=e/a,d=n/l,p=[],_=[],x=[],m=[];for(let u=0;u<f;u++){const g=u*d-s;for(let v=0;v<c;v++){const M=v*h-o;_.push(M,-g,0),x.push(0,0,1),m.push(v/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<a;g++){const v=g+c*u,M=g+c*(u+1),R=g+1+c*(u+1),T=g+1+c*u;p.push(v,M,T),p.push(M,R,T)}this.setIndex(p),this.setAttribute("position",new zn(_,3)),this.setAttribute("normal",new zn(x,3)),this.setAttribute("uv",new zn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rc(e.width,e.height,e.widthSegments,e.heightSegments)}}var iE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rE=`#ifdef USE_ALPHAHASH
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
#endif`,oE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cE=`#ifdef USE_AOMAP
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
#endif`,uE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fE=`#ifdef USE_BATCHING
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
#endif`,dE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gE=`#ifdef USE_IRIDESCENCE
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
#endif`,_E=`#ifdef USE_BUMPMAP
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
#endif`,vE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,SE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ME=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,EE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,TE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,AE=`#define PI 3.141592653589793
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
} // validated`,CE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,RE=`vec3 transformedNormal = objectNormal;
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
#endif`,bE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,LE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IE="gl_FragColor = linearToOutputTexel( gl_FragColor );",NE=`
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
}`,UE=`#ifdef USE_ENVMAP
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
#endif`,FE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,OE=`#ifdef USE_ENVMAP
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
#endif`,kE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,BE=`#ifdef USE_ENVMAP
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
#endif`,zE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,WE=`#ifdef USE_GRADIENTMAP
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
}`,XE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,YE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$E=`uniform bool receiveShadow;
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
#endif`,qE=`#ifdef USE_ENVMAP
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
#endif`,KE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ZE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,QE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,e1=`PhysicalMaterial material;
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
#endif`,t1=`struct PhysicalMaterial {
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
}`,n1=`
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
#endif`,i1=`#if defined( RE_IndirectDiffuse )
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
#endif`,r1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,o1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,s1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,c1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,u1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,d1=`#if defined( USE_POINTS_UV )
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
#endif`,h1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,p1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,g1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v1=`#ifdef USE_MORPHTARGETS
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
#endif`,x1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,S1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,M1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,T1=`#ifdef USE_NORMALMAP
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
#endif`,A1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,C1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,P1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,L1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,D1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,O1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,H1=`float getShadowMask() {
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
}`,V1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G1=`#ifdef USE_SKINNING
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
#endif`,W1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X1=`#ifdef USE_SKINNING
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
#endif`,j1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Y1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,q1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,K1=`#ifdef USE_TRANSMISSION
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
#endif`,Z1=`#ifdef USE_TRANSMISSION
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
#endif`,Q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ew=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iw=`uniform sampler2D t2D;
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
}`,rw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ow=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lw=`#include <common>
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
}`,cw=`#if DEPTH_PACKING == 3200
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
}`,uw=`#define DISTANCE
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
}`,fw=`#define DISTANCE
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
}`,dw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pw=`uniform float scale;
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
}`,mw=`uniform vec3 diffuse;
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
}`,gw=`#include <common>
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
}`,_w=`uniform vec3 diffuse;
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
}`,vw=`#define LAMBERT
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
}`,xw=`#define LAMBERT
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
}`,yw=`#define MATCAP
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
}`,Sw=`#define MATCAP
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
}`,Mw=`#define NORMAL
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
}`,Ew=`#define NORMAL
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
}`,ww=`#define PHONG
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
}`,Tw=`#define PHONG
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
}`,Aw=`#define STANDARD
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
}`,Cw=`#define STANDARD
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
}`,Rw=`#define TOON
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
}`,bw=`#define TOON
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
}`,Pw=`uniform float size;
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
}`,Lw=`uniform vec3 diffuse;
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
}`,Dw=`#include <common>
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
}`,Iw=`uniform vec3 color;
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
}`,Nw=`uniform float rotation;
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
}`,Uw=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:iE,alphahash_pars_fragment:rE,alphamap_fragment:oE,alphamap_pars_fragment:sE,alphatest_fragment:aE,alphatest_pars_fragment:lE,aomap_fragment:cE,aomap_pars_fragment:uE,batching_pars_vertex:fE,batching_vertex:dE,begin_vertex:hE,beginnormal_vertex:pE,bsdfs:mE,iridescence_fragment:gE,bumpmap_pars_fragment:_E,clipping_planes_fragment:vE,clipping_planes_pars_fragment:xE,clipping_planes_pars_vertex:yE,clipping_planes_vertex:SE,color_fragment:ME,color_pars_fragment:EE,color_pars_vertex:wE,color_vertex:TE,common:AE,cube_uv_reflection_fragment:CE,defaultnormal_vertex:RE,displacementmap_pars_vertex:bE,displacementmap_vertex:PE,emissivemap_fragment:LE,emissivemap_pars_fragment:DE,colorspace_fragment:IE,colorspace_pars_fragment:NE,envmap_fragment:UE,envmap_common_pars_fragment:FE,envmap_pars_fragment:OE,envmap_pars_vertex:kE,envmap_physical_pars_fragment:qE,envmap_vertex:BE,fog_vertex:zE,fog_pars_vertex:HE,fog_fragment:VE,fog_pars_fragment:GE,gradientmap_pars_fragment:WE,lightmap_pars_fragment:XE,lights_lambert_fragment:jE,lights_lambert_pars_fragment:YE,lights_pars_begin:$E,lights_toon_fragment:KE,lights_toon_pars_fragment:ZE,lights_phong_fragment:QE,lights_phong_pars_fragment:JE,lights_physical_fragment:e1,lights_physical_pars_fragment:t1,lights_fragment_begin:n1,lights_fragment_maps:i1,lights_fragment_end:r1,logdepthbuf_fragment:o1,logdepthbuf_pars_fragment:s1,logdepthbuf_pars_vertex:a1,logdepthbuf_vertex:l1,map_fragment:c1,map_pars_fragment:u1,map_particle_fragment:f1,map_particle_pars_fragment:d1,metalnessmap_fragment:h1,metalnessmap_pars_fragment:p1,morphinstance_vertex:m1,morphcolor_vertex:g1,morphnormal_vertex:_1,morphtarget_pars_vertex:v1,morphtarget_vertex:x1,normal_fragment_begin:y1,normal_fragment_maps:S1,normal_pars_fragment:M1,normal_pars_vertex:E1,normal_vertex:w1,normalmap_pars_fragment:T1,clearcoat_normal_fragment_begin:A1,clearcoat_normal_fragment_maps:C1,clearcoat_pars_fragment:R1,iridescence_pars_fragment:b1,opaque_fragment:P1,packing:L1,premultiplied_alpha_fragment:D1,project_vertex:I1,dithering_fragment:N1,dithering_pars_fragment:U1,roughnessmap_fragment:F1,roughnessmap_pars_fragment:O1,shadowmap_pars_fragment:k1,shadowmap_pars_vertex:B1,shadowmap_vertex:z1,shadowmask_pars_fragment:H1,skinbase_vertex:V1,skinning_pars_vertex:G1,skinning_vertex:W1,skinnormal_vertex:X1,specularmap_fragment:j1,specularmap_pars_fragment:Y1,tonemapping_fragment:$1,tonemapping_pars_fragment:q1,transmission_fragment:K1,transmission_pars_fragment:Z1,uv_pars_fragment:Q1,uv_pars_vertex:J1,uv_vertex:ew,worldpos_vertex:tw,background_vert:nw,background_frag:iw,backgroundCube_vert:rw,backgroundCube_frag:ow,cube_vert:sw,cube_frag:aw,depth_vert:lw,depth_frag:cw,distanceRGBA_vert:uw,distanceRGBA_frag:fw,equirect_vert:dw,equirect_frag:hw,linedashed_vert:pw,linedashed_frag:mw,meshbasic_vert:gw,meshbasic_frag:_w,meshlambert_vert:vw,meshlambert_frag:xw,meshmatcap_vert:yw,meshmatcap_frag:Sw,meshnormal_vert:Mw,meshnormal_frag:Ew,meshphong_vert:ww,meshphong_frag:Tw,meshphysical_vert:Aw,meshphysical_frag:Cw,meshtoon_vert:Rw,meshtoon_frag:bw,points_vert:Pw,points_frag:Lw,shadow_vert:Dw,shadow_frag:Iw,sprite_vert:Nw,sprite_frag:Uw},ce={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},jn={basic:{uniforms:jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:jt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:jt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:jt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:jt([ce.points,ce.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:jt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:jt([ce.common,ce.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:jt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:jt([ce.sprite,ce.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:jt([ce.common,ce.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:jt([ce.lights,ce.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};jn.physical={uniforms:jt([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const tl={r:0,b:0,g:0},fr=new ei,Fw=new mt;function Ow(t,e,n,i,r,o,s){const a=new Ve(0);let l=o===!0?0:1,c,f,h=null,d=0,p=null;function _(g){let v=g.isScene===!0?g.background:null;return v&&v.isTexture&&(v=(g.backgroundBlurriness>0?n:e).get(v)),v}function x(g){let v=!1;const M=_(g);M===null?u(a,l):M&&M.isColor&&(u(M,1),v=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,v){const M=_(v);M&&(M.isCubeTexture||M.mapping===Tc)?(f===void 0&&(f=new Kn(new ns(1,1,1),new tr({name:"BackgroundCubeMaterial",uniforms:Ko(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),fr.copy(v.backgroundRotation),fr.x*=-1,fr.y*=-1,fr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Fw.makeRotationFromEuler(fr)),f.material.toneMapped=Qe.getTransfer(M.colorSpace)!==it,(h!==M||d!==M.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,h=M,d=M.version,p=t.toneMapping),f.layers.enableAll(),g.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Kn(new Rc(2,2),new tr({name:"BackgroundMaterial",uniforms:Ko(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(M.colorSpace)!==it,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function u(g,v){g.getRGB(tl,$_(t)),i.buffers.color.setClear(tl.r,tl.g,tl.b,v,s)}return{getClearColor:function(){return a},setClearColor:function(g,v=1){a.set(g),l=v,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,u(a,l)},render:x,addToRenderList:m}}function kw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let o=r,s=!1;function a(y,P,B,F,j){let Y=!1;const V=h(F,B,P);o!==V&&(o=V,c(o.object)),Y=p(y,F,B,j),Y&&_(y,F,B,j),j!==null&&e.update(j,t.ELEMENT_ARRAY_BUFFER),(Y||s)&&(s=!1,M(y,P,B,F),j!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function f(y){return t.deleteVertexArray(y)}function h(y,P,B){const F=B.wireframe===!0;let j=i[y.id];j===void 0&&(j={},i[y.id]=j);let Y=j[P.id];Y===void 0&&(Y={},j[P.id]=Y);let V=Y[F];return V===void 0&&(V=d(l()),Y[F]=V),V}function d(y){const P=[],B=[],F=[];for(let j=0;j<n;j++)P[j]=0,B[j]=0,F[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:F,object:y,attributes:{},index:null}}function p(y,P,B,F){const j=o.attributes,Y=P.attributes;let V=0;const K=B.getAttributes();for(const I in K)if(K[I].location>=0){const Q=j[I];let oe=Y[I];if(oe===void 0&&(I==="instanceMatrix"&&y.instanceMatrix&&(oe=y.instanceMatrix),I==="instanceColor"&&y.instanceColor&&(oe=y.instanceColor)),Q===void 0||Q.attribute!==oe||oe&&Q.data!==oe.data)return!0;V++}return o.attributesNum!==V||o.index!==F}function _(y,P,B,F){const j={},Y=P.attributes;let V=0;const K=B.getAttributes();for(const I in K)if(K[I].location>=0){let Q=Y[I];Q===void 0&&(I==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),I==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor));const oe={};oe.attribute=Q,Q&&Q.data&&(oe.data=Q.data),j[I]=oe,V++}o.attributes=j,o.attributesNum=V,o.index=F}function x(){const y=o.newAttributes;for(let P=0,B=y.length;P<B;P++)y[P]=0}function m(y){u(y,0)}function u(y,P){const B=o.newAttributes,F=o.enabledAttributes,j=o.attributeDivisors;B[y]=1,F[y]===0&&(t.enableVertexAttribArray(y),F[y]=1),j[y]!==P&&(t.vertexAttribDivisor(y,P),j[y]=P)}function g(){const y=o.newAttributes,P=o.enabledAttributes;for(let B=0,F=P.length;B<F;B++)P[B]!==y[B]&&(t.disableVertexAttribArray(B),P[B]=0)}function v(y,P,B,F,j,Y,V){V===!0?t.vertexAttribIPointer(y,P,B,j,Y):t.vertexAttribPointer(y,P,B,F,j,Y)}function M(y,P,B,F){x();const j=F.attributes,Y=B.getAttributes(),V=P.defaultAttributeValues;for(const K in Y){const I=Y[K];if(I.location>=0){let Z=j[K];if(Z===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor)),Z!==void 0){const Q=Z.normalized,oe=Z.itemSize,xe=e.get(Z);if(xe===void 0)continue;const He=xe.buffer,q=xe.type,ne=xe.bytesPerElement,ue=q===t.INT||q===t.UNSIGNED_INT||Z.gpuType===mh;if(Z.isInterleavedBufferAttribute){const fe=Z.data,Ue=fe.stride,Oe=Z.offset;if(fe.isInstancedInterleavedBuffer){for(let ze=0;ze<I.locationSize;ze++)u(I.location+ze,fe.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ze=0;ze<I.locationSize;ze++)m(I.location+ze);t.bindBuffer(t.ARRAY_BUFFER,He);for(let ze=0;ze<I.locationSize;ze++)v(I.location+ze,oe/I.locationSize,q,Q,Ue*ne,(Oe+oe/I.locationSize*ze)*ne,ue)}else{if(Z.isInstancedBufferAttribute){for(let fe=0;fe<I.locationSize;fe++)u(I.location+fe,Z.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let fe=0;fe<I.locationSize;fe++)m(I.location+fe);t.bindBuffer(t.ARRAY_BUFFER,He);for(let fe=0;fe<I.locationSize;fe++)v(I.location+fe,oe/I.locationSize,q,Q,oe*ne,oe/I.locationSize*fe*ne,ue)}}else if(V!==void 0){const Q=V[K];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(I.location,Q);break;case 3:t.vertexAttrib3fv(I.location,Q);break;case 4:t.vertexAttrib4fv(I.location,Q);break;default:t.vertexAttrib1fv(I.location,Q)}}}}g()}function R(){b();for(const y in i){const P=i[y];for(const B in P){const F=P[B];for(const j in F)f(F[j].object),delete F[j];delete P[B]}delete i[y]}}function T(y){if(i[y.id]===void 0)return;const P=i[y.id];for(const B in P){const F=P[B];for(const j in F)f(F[j].object),delete F[j];delete P[B]}delete i[y.id]}function E(y){for(const P in i){const B=i[P];if(B[y.id]===void 0)continue;const F=B[y.id];for(const j in F)f(F[j].object),delete F[j];delete B[y.id]}}function b(){A(),s=!0,o!==r&&(o=r,c(o.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:A,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:m,disableUnusedAttributes:g}}function Bw(t,e,n){let i;function r(c){i=c}function o(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function s(c,f,h){h!==0&&(t.drawArraysInstanced(i,c,f,h),n.update(f,i,h))}function a(c,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,h);let p=0;for(let _=0;_<h;_++)p+=f[_];n.update(p,i,1)}function l(c,f,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)s(c[_],f[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,d,0,h);let _=0;for(let x=0;x<h;x++)_+=f[x];for(let x=0;x<d.length;x++)n.update(_,i,d[x])}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function zw(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(T){return!(T!==On&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const E=T===da&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Si&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==pi&&!E)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),u=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=p>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:u,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:M,maxSamples:R}}function Hw(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new Ui,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){o=!0,f(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,u=t.get(h);if(!r||_===null||_.length===0||o&&!m)o?f(null):c();else{const g=o?0:i,v=g*4;let M=u.clippingState||null;l.value=M,M=f(_,d,v,p);for(let R=0;R!==v;++R)M[R]=n[R];u.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,p,_){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const u=p+x*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let v=0,M=p;v!==x;++v,M+=4)s.copy(h[v]).applyMatrix4(g,a),s.normal.toArray(m,M),m[M+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Vw(t){let e=new WeakMap;function n(s,a){return a===Of?s.mapping=Xo:a===kf&&(s.mapping=jo),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===Of||a===kf)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new JM(l.height);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",r),n(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class Q_ extends q_{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Eo=4,ym=[.125,.215,.35,.446,.526,.582],_r=20,Cu=new Q_,Sm=new Ve;let Ru=null,bu=0,Pu=0,Lu=!1;const mr=(1+Math.sqrt(5))/2,so=1/mr,Mm=[new O(-mr,so,0),new O(mr,so,0),new O(-so,0,mr),new O(so,0,mr),new O(0,mr,-so),new O(0,mr,so),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class Em{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ru=this._renderer.getRenderTarget(),bu=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),Lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Am(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ru,bu,Pu),this._renderer.xr.enabled=Lu,e.scissorTest=!1,nl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xo||e.mapping===jo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ru=this._renderer.getRenderTarget(),bu=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),Lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:da,format:On,colorSpace:or,depthBuffer:!1},r=wm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wm(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gw(o)),this._blurMaterial=Ww(o,e,n)}return r}_compileMaterial(e){const n=new Kn(this._lodPlanes[0],e);this._renderer.compile(n,Cu)}_sceneToCubeUV(e,n,i,r){const a=new fn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Sm),f.toneMapping=Ki,f.autoClear=!1;const p=new X_({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),_=new Kn(new ns,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Sm),x=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):g===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const v=this._cubeSize;nl(r,g*v,u>2?v:0,v,v),f.setRenderTarget(r),x&&f.render(_,a),f.render(e,a)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Xo||e.mapping===jo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Am()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tm());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new Kn(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;nl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Cu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Mm[(r-o-1)%Mm.length];this._blur(e,o-1,o,s,a)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new Kn(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*_r-1),x=o/_,m=isFinite(o)?1+Math.floor(f*x):_r;m>_r&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_r}`);const u=[];let g=0;for(let E=0;E<_r;++E){const b=E/x,A=Math.exp(-b*b/2);u.push(A),E===0?g+=A:E<m&&(g+=2*A)}for(let E=0;E<u.length;E++)u[E]=u[E]/g;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-i;const M=this._sizeLods[r],R=3*M*(r>v-Eo?r-v+Eo:0),T=4*(this._cubeSize-M);nl(n,R,T,3*M,2*M),l.setRenderTarget(n),l.render(h,Cu)}}function Gw(t){const e=[],n=[],i=[];let r=t;const o=t-Eo+1+ym.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-Eo?l=ym[s-t+Eo-1]:s===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,_=6,x=3,m=2,u=1,g=new Float32Array(x*_*p),v=new Float32Array(m*_*p),M=new Float32Array(u*_*p);for(let T=0;T<p;T++){const E=T%3*2/3-1,b=T>2?0:-1,A=[E,b,0,E+2/3,b,0,E+2/3,b+1,0,E,b,0,E+2/3,b+1,0,E,b+1,0];g.set(A,x*_*T),v.set(d,m*_*T);const y=[T,T,T,T,T,T];M.set(y,u*_*T)}const R=new Ei;R.setAttribute("position",new Jn(g,x)),R.setAttribute("uv",new Jn(v,m)),R.setAttribute("faceIndex",new Jn(M,u)),e.push(R),r>Eo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function wm(t,e,n){const i=new Ir(t,e,n);return i.texture.mapping=Tc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function nl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Ww(t,e,n){const i=new Float32Array(_r),r=new O(0,1,0);return new tr({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Th(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Tm(){return new tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Th(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Am(){return new tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Th(){return`

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
	`}function Xw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Of||l===kf,f=l===Xo||l===jo;if(c||f){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new Em(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||f&&p&&r(p)?(n===null&&(n=new Em(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",o),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function jw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Bs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Yw(t,e,n,i){const r={},o=new WeakMap;function s(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const x=d.morphAttributes[_];for(let m=0,u=x.length;m<u;m++)e.remove(x[m])}d.removeEventListener("dispose",s),delete r[d.id];const p=o.get(d);p&&(e.remove(p),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const _ in p){const x=p[_];for(let m=0,u=x.length;m<u;m++)e.update(x[m],t.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,_=h.attributes.position;let x=0;if(p!==null){const g=p.array;x=p.version;for(let v=0,M=g.length;v<M;v+=3){const R=g[v+0],T=g[v+1],E=g[v+2];d.push(R,T,T,E,E,R)}}else if(_!==void 0){const g=_.array;x=_.version;for(let v=0,M=g.length/3-1;v<M;v+=3){const R=v+0,T=v+1,E=v+2;d.push(R,T,T,E,E,R)}}else return;const m=new(z_(d)?Y_:j_)(d,1);m.version=x;const u=o.get(h);u&&e.remove(u),o.set(h,m)}function f(h){const d=o.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return o.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function $w(t,e,n){let i;function r(d){i=d}let o,s;function a(d){o=d.type,s=d.bytesPerElement}function l(d,p){t.drawElements(i,p,o,d*s),n.update(p,i,1)}function c(d,p,_){_!==0&&(t.drawElementsInstanced(i,p,o,d*s,_),n.update(p,i,_))}function f(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,o,d,0,_);let m=0;for(let u=0;u<_;u++)m+=p[u];n.update(m,i,1)}function h(d,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)c(d[u]/s,p[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,o,d,0,x,0,_);let u=0;for(let g=0;g<_;g++)u+=p[g];for(let g=0;g<x.length;g++)n.update(u,i,x[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function qw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Kw(t,e,n){const i=new WeakMap,r=new Tt;function o(s,a,l){const c=s.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let y=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let M=0;_===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let R=a.attributes.position.count*M,T=1;R>e.maxTextureSize&&(T=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const E=new Float32Array(R*T*4*h),b=new V_(E,R,T,h);b.type=pi,b.needsUpdate=!0;const A=M*4;for(let P=0;P<h;P++){const B=u[P],F=g[P],j=v[P],Y=R*T*4*P;for(let V=0;V<B.count;V++){const K=V*A;_===!0&&(r.fromBufferAttribute(B,V),E[Y+K+0]=r.x,E[Y+K+1]=r.y,E[Y+K+2]=r.z,E[Y+K+3]=0),x===!0&&(r.fromBufferAttribute(F,V),E[Y+K+4]=r.x,E[Y+K+5]=r.y,E[Y+K+6]=r.z,E[Y+K+7]=0),m===!0&&(r.fromBufferAttribute(j,V),E[Y+K+8]=r.x,E[Y+K+9]=r.y,E[Y+K+10]=r.z,E[Y+K+11]=j.itemSize===4?r.w:1)}}d={count:h,texture:b,size:new Ne(R,T)},i.set(a,d),a.addEventListener("dispose",y)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:o}}function Zw(t,e,n,i){let r=new WeakMap;function o(l){const c=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:o,dispose:s}}class J_ extends on{constructor(e,n,i,r,o,s,a,l,c,f=Lo){if(f!==Lo&&f!==$o)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Lo&&(i=Dr),i===void 0&&f===$o&&(i=Yo),super(null,r,o,s,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:wn,this.minFilter=l!==void 0?l:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const ev=new on,Cm=new J_(1,1),tv=new V_,nv=new OM,iv=new K_,Rm=[],bm=[],Pm=new Float32Array(16),Lm=new Float32Array(9),Dm=new Float32Array(4);function is(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Rm[r];if(o===void 0&&(o=new Float32Array(r),Rm[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function bc(t,e){let n=bm[e];n===void 0&&(n=new Int32Array(e),bm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Qw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Jw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),bt(n,e)}}function eT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),bt(n,e)}}function tT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),bt(n,e)}}function nT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bt(n,e)}else{if(Rt(n,i))return;Dm.set(i),t.uniformMatrix2fv(this.addr,!1,Dm),bt(n,i)}}function iT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bt(n,e)}else{if(Rt(n,i))return;Lm.set(i),t.uniformMatrix3fv(this.addr,!1,Lm),bt(n,i)}}function rT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bt(n,e)}else{if(Rt(n,i))return;Pm.set(i),t.uniformMatrix4fv(this.addr,!1,Pm),bt(n,i)}}function oT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function sT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),bt(n,e)}}function aT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),bt(n,e)}}function lT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),bt(n,e)}}function cT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function uT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),bt(n,e)}}function fT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),bt(n,e)}}function dT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),bt(n,e)}}function hT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let o;this.type===t.SAMPLER_2D_SHADOW?(Cm.compareFunction=B_,o=Cm):o=ev,n.setTexture2D(e||o,r)}function pT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||nv,r)}function mT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||iv,r)}function gT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||tv,r)}function _T(t){switch(t){case 5126:return Qw;case 35664:return Jw;case 35665:return eT;case 35666:return tT;case 35674:return nT;case 35675:return iT;case 35676:return rT;case 5124:case 35670:return oT;case 35667:case 35671:return sT;case 35668:case 35672:return aT;case 35669:case 35673:return lT;case 5125:return cT;case 36294:return uT;case 36295:return fT;case 36296:return dT;case 35678:case 36198:case 36298:case 36306:case 35682:return hT;case 35679:case 36299:case 36307:return pT;case 35680:case 36300:case 36308:case 36293:return mT;case 36289:case 36303:case 36311:case 36292:return gT}}function vT(t,e){t.uniform1fv(this.addr,e)}function xT(t,e){const n=is(e,this.size,2);t.uniform2fv(this.addr,n)}function yT(t,e){const n=is(e,this.size,3);t.uniform3fv(this.addr,n)}function ST(t,e){const n=is(e,this.size,4);t.uniform4fv(this.addr,n)}function MT(t,e){const n=is(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ET(t,e){const n=is(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function wT(t,e){const n=is(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function TT(t,e){t.uniform1iv(this.addr,e)}function AT(t,e){t.uniform2iv(this.addr,e)}function CT(t,e){t.uniform3iv(this.addr,e)}function RT(t,e){t.uniform4iv(this.addr,e)}function bT(t,e){t.uniform1uiv(this.addr,e)}function PT(t,e){t.uniform2uiv(this.addr,e)}function LT(t,e){t.uniform3uiv(this.addr,e)}function DT(t,e){t.uniform4uiv(this.addr,e)}function IT(t,e,n){const i=this.cache,r=e.length,o=bc(n,r);Rt(i,o)||(t.uniform1iv(this.addr,o),bt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||ev,o[s])}function NT(t,e,n){const i=this.cache,r=e.length,o=bc(n,r);Rt(i,o)||(t.uniform1iv(this.addr,o),bt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||nv,o[s])}function UT(t,e,n){const i=this.cache,r=e.length,o=bc(n,r);Rt(i,o)||(t.uniform1iv(this.addr,o),bt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||iv,o[s])}function FT(t,e,n){const i=this.cache,r=e.length,o=bc(n,r);Rt(i,o)||(t.uniform1iv(this.addr,o),bt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||tv,o[s])}function OT(t){switch(t){case 5126:return vT;case 35664:return xT;case 35665:return yT;case 35666:return ST;case 35674:return MT;case 35675:return ET;case 35676:return wT;case 5124:case 35670:return TT;case 35667:case 35671:return AT;case 35668:case 35672:return CT;case 35669:case 35673:return RT;case 5125:return bT;case 36294:return PT;case 36295:return LT;case 36296:return DT;case 35678:case 36198:case 36298:case 36306:case 35682:return IT;case 35679:case 36299:case 36307:return NT;case 35680:case 36300:case 36308:case 36293:return UT;case 36289:case 36303:case 36311:case 36292:return FT}}class kT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=_T(n.type)}}class BT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=OT(n.type)}}class zT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const Du=/(\w+)(\])?(\[|\.)?/g;function Im(t,e){t.seq.push(e),t.map[e.id]=e}function HT(t,e,n){const i=t.name,r=i.length;for(Du.lastIndex=0;;){const o=Du.exec(i),s=Du.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){Im(n,c===void 0?new kT(a,t,e):new BT(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new zT(a),Im(n,h)),n=h}}}class Tl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);HT(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function Nm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const VT=37297;let GT=0;function WT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function XT(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let i;switch(e===n?i="":e===nc&&n===tc?i="LinearDisplayP3ToLinearSRGB":e===tc&&n===nc&&(i="LinearSRGBToLinearDisplayP3"),t){case or:case Ac:return[i,"LinearTransferOETF"];case Xn:case Sh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Um(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+WT(t.getShaderSource(e),s)}else return r}function jT(t,e){const n=XT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function YT(t,e){let n;switch(e){case qS:n="Linear";break;case KS:n="Reinhard";break;case ZS:n="OptimizedCineon";break;case QS:n="ACESFilmic";break;case eM:n="AgX";break;case tM:n="Neutral";break;case JS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const il=new O;function $T(){Qe.getLuminanceCoefficients(il);const t=il.x.toFixed(4),e=il.y.toFixed(4),n=il.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cs).join(`
`)}function KT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function ZT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function Cs(t){return t!==""}function Fm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Om(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QT=/^[ \t]*#include +<([\w\d./]+)>/gm;function hd(t){return t.replace(QT,eA)}const JT=new Map;function eA(t,e){let n=ke[e];if(n===void 0){const i=JT.get(e);if(i!==void 0)n=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return hd(n)}const tA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function km(t){return t.replace(tA,nA)}function nA(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Bm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function iA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===A_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===SS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function rA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Xo:case jo:e="ENVMAP_TYPE_CUBE";break;case Tc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function oA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case jo:e="ENVMAP_MODE_REFRACTION";break}return e}function sA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ph:e="ENVMAP_BLENDING_MULTIPLY";break;case YS:e="ENVMAP_BLENDING_MIX";break;case $S:e="ENVMAP_BLENDING_ADD";break}return e}function aA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function lA(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=iA(n),c=rA(n),f=oA(n),h=sA(n),d=aA(n),p=qT(n),_=KT(o),x=r.createProgram();let m,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Cs).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Cs).join(`
`),u.length>0&&(u+=`
`)):(m=[Bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),u=[Bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ki?"#define TONE_MAPPING":"",n.toneMapping!==Ki?ke.tonemapping_pars_fragment:"",n.toneMapping!==Ki?YT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,jT("linearToOutputTexel",n.outputColorSpace),$T(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Cs).join(`
`)),s=hd(s),s=Fm(s,n),s=Om(s,n),a=hd(a),a=Fm(a,n),a=Om(a,n),s=km(s),a=km(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Jp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Jp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=g+m+s,M=g+u+a,R=Nm(r,r.VERTEX_SHADER,v),T=Nm(r,r.FRAGMENT_SHADER,M);r.attachShader(x,R),r.attachShader(x,T),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function E(P){if(t.debug.checkShaderErrors){const B=r.getProgramInfoLog(x).trim(),F=r.getShaderInfoLog(R).trim(),j=r.getShaderInfoLog(T).trim();let Y=!0,V=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Y=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,R,T);else{const K=Um(r,R,"vertex"),I=Um(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+K+`
`+I)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||j==="")&&(V=!1);V&&(P.diagnostics={runnable:Y,programLog:B,vertexShader:{log:F,prefix:m},fragmentShader:{log:j,prefix:u}})}r.deleteShader(R),r.deleteShader(T),b=new Tl(r,x),A=ZT(r,x)}let b;this.getUniforms=function(){return b===void 0&&E(this),b};let A;this.getAttributes=function(){return A===void 0&&E(this),A};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,VT)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=GT++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=T,this}let cA=0;class uA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new fA(e),n.set(e,i)),i}}class fA{constructor(e){this.id=cA++,this.code=e,this.usedTimes=0}}function dA(t,e,n,i,r,o,s){const a=new G_,l=new uA,c=new Set,f=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(A){return c.add(A),A===0?"uv":`uv${A}`}function m(A,y,P,B,F){const j=B.fog,Y=F.geometry,V=A.isMeshStandardMaterial?B.environment:null,K=(A.isMeshStandardMaterial?n:e).get(A.envMap||V),I=K&&K.mapping===Tc?K.image.height:null,Z=_[A.type];A.precision!==null&&(p=r.getMaxPrecision(A.precision),p!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",p,"instead."));const Q=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,oe=Q!==void 0?Q.length:0;let xe=0;Y.morphAttributes.position!==void 0&&(xe=1),Y.morphAttributes.normal!==void 0&&(xe=2),Y.morphAttributes.color!==void 0&&(xe=3);let He,q,ne,ue;if(Z){const Xe=jn[Z];He=Xe.vertexShader,q=Xe.fragmentShader}else He=A.vertexShader,q=A.fragmentShader,l.update(A),ne=l.getVertexShaderID(A),ue=l.getFragmentShaderID(A);const fe=t.getRenderTarget(),Ue=F.isInstancedMesh===!0,Oe=F.isBatchedMesh===!0,ze=!!A.map,tt=!!A.matcap,D=!!K,ut=!!A.aoMap,Ye=!!A.lightMap,$e=!!A.bumpMap,Se=!!A.normalMap,ft=!!A.displacementMap,Le=!!A.emissiveMap,Ie=!!A.metalnessMap,L=!!A.roughnessMap,w=A.anisotropy>0,W=A.clearcoat>0,ee=A.dispersion>0,ie=A.iridescence>0,J=A.sheen>0,we=A.transmission>0,le=w&&!!A.anisotropyMap,he=W&&!!A.clearcoatMap,Fe=W&&!!A.clearcoatNormalMap,se=W&&!!A.clearcoatRoughnessMap,pe=ie&&!!A.iridescenceMap,We=ie&&!!A.iridescenceThicknessMap,Ae=J&&!!A.sheenColorMap,_e=J&&!!A.sheenRoughnessMap,Re=!!A.specularMap,De=!!A.specularColorMap,ot=!!A.specularIntensityMap,S=we&&!!A.transmissionMap,k=we&&!!A.thicknessMap,z=!!A.gradientMap,X=!!A.alphaMap,te=A.alphaTest>0,Me=!!A.alphaHash,be=!!A.extensions;let gt=Ki;A.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(gt=t.toneMapping);const Mt={shaderID:Z,shaderType:A.type,shaderName:A.name,vertexShader:He,fragmentShader:q,defines:A.defines,customVertexShaderID:ne,customFragmentShaderID:ue,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:p,batching:Oe,batchingColor:Oe&&F._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&F.instanceColor!==null,instancingMorph:Ue&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:fe===null?t.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:or,alphaToCoverage:!!A.alphaToCoverage,map:ze,matcap:tt,envMap:D,envMapMode:D&&K.mapping,envMapCubeUVHeight:I,aoMap:ut,lightMap:Ye,bumpMap:$e,normalMap:Se,displacementMap:d&&ft,emissiveMap:Le,normalMapObjectSpace:Se&&A.normalMapType===oM,normalMapTangentSpace:Se&&A.normalMapType===k_,metalnessMap:Ie,roughnessMap:L,anisotropy:w,anisotropyMap:le,clearcoat:W,clearcoatMap:he,clearcoatNormalMap:Fe,clearcoatRoughnessMap:se,dispersion:ee,iridescence:ie,iridescenceMap:pe,iridescenceThicknessMap:We,sheen:J,sheenColorMap:Ae,sheenRoughnessMap:_e,specularMap:Re,specularColorMap:De,specularIntensityMap:ot,transmission:we,transmissionMap:S,thicknessMap:k,gradientMap:z,opaque:A.transparent===!1&&A.blending===Po&&A.alphaToCoverage===!1,alphaMap:X,alphaTest:te,alphaHash:Me,combine:A.combine,mapUv:ze&&x(A.map.channel),aoMapUv:ut&&x(A.aoMap.channel),lightMapUv:Ye&&x(A.lightMap.channel),bumpMapUv:$e&&x(A.bumpMap.channel),normalMapUv:Se&&x(A.normalMap.channel),displacementMapUv:ft&&x(A.displacementMap.channel),emissiveMapUv:Le&&x(A.emissiveMap.channel),metalnessMapUv:Ie&&x(A.metalnessMap.channel),roughnessMapUv:L&&x(A.roughnessMap.channel),anisotropyMapUv:le&&x(A.anisotropyMap.channel),clearcoatMapUv:he&&x(A.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&x(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&x(A.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&x(A.iridescenceMap.channel),iridescenceThicknessMapUv:We&&x(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&x(A.sheenColorMap.channel),sheenRoughnessMapUv:_e&&x(A.sheenRoughnessMap.channel),specularMapUv:Re&&x(A.specularMap.channel),specularColorMapUv:De&&x(A.specularColorMap.channel),specularIntensityMapUv:ot&&x(A.specularIntensityMap.channel),transmissionMapUv:S&&x(A.transmissionMap.channel),thicknessMapUv:k&&x(A.thicknessMap.channel),alphaMapUv:X&&x(A.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Se||w),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Y.attributes.uv&&(ze||X),fog:!!j,useFog:A.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:F.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:xe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:A.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:gt,decodeVideoTexture:ze&&A.map.isVideoTexture===!0&&Qe.getTransfer(A.map.colorSpace)===it,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===$n,flipSided:A.side===rn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:be&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&A.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function u(A){const y=[];if(A.shaderID?y.push(A.shaderID):(y.push(A.customVertexShaderID),y.push(A.customFragmentShaderID)),A.defines!==void 0)for(const P in A.defines)y.push(P),y.push(A.defines[P]);return A.isRawShaderMaterial===!1&&(g(y,A),v(y,A),y.push(t.outputColorSpace)),y.push(A.customProgramCacheKey),y.join()}function g(A,y){A.push(y.precision),A.push(y.outputColorSpace),A.push(y.envMapMode),A.push(y.envMapCubeUVHeight),A.push(y.mapUv),A.push(y.alphaMapUv),A.push(y.lightMapUv),A.push(y.aoMapUv),A.push(y.bumpMapUv),A.push(y.normalMapUv),A.push(y.displacementMapUv),A.push(y.emissiveMapUv),A.push(y.metalnessMapUv),A.push(y.roughnessMapUv),A.push(y.anisotropyMapUv),A.push(y.clearcoatMapUv),A.push(y.clearcoatNormalMapUv),A.push(y.clearcoatRoughnessMapUv),A.push(y.iridescenceMapUv),A.push(y.iridescenceThicknessMapUv),A.push(y.sheenColorMapUv),A.push(y.sheenRoughnessMapUv),A.push(y.specularMapUv),A.push(y.specularColorMapUv),A.push(y.specularIntensityMapUv),A.push(y.transmissionMapUv),A.push(y.thicknessMapUv),A.push(y.combine),A.push(y.fogExp2),A.push(y.sizeAttenuation),A.push(y.morphTargetsCount),A.push(y.morphAttributeCount),A.push(y.numDirLights),A.push(y.numPointLights),A.push(y.numSpotLights),A.push(y.numSpotLightMaps),A.push(y.numHemiLights),A.push(y.numRectAreaLights),A.push(y.numDirLightShadows),A.push(y.numPointLightShadows),A.push(y.numSpotLightShadows),A.push(y.numSpotLightShadowsWithMaps),A.push(y.numLightProbes),A.push(y.shadowMapType),A.push(y.toneMapping),A.push(y.numClippingPlanes),A.push(y.numClipIntersection),A.push(y.depthPacking)}function v(A,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.doubleSided&&a.enable(10),y.flipSided&&a.enable(11),y.useDepthPacking&&a.enable(12),y.dithering&&a.enable(13),y.transmission&&a.enable(14),y.sheen&&a.enable(15),y.opaque&&a.enable(16),y.pointsUvs&&a.enable(17),y.decodeVideoTexture&&a.enable(18),y.alphaToCoverage&&a.enable(19),A.push(a.mask)}function M(A){const y=_[A.type];let P;if(y){const B=jn[y];P=qM.clone(B.uniforms)}else P=A.uniforms;return P}function R(A,y){let P;for(let B=0,F=f.length;B<F;B++){const j=f[B];if(j.cacheKey===y){P=j,++P.usedTimes;break}}return P===void 0&&(P=new lA(t,y,A,o),f.push(P)),P}function T(A){if(--A.usedTimes===0){const y=f.indexOf(A);f[y]=f[f.length-1],f.pop(),A.destroy()}}function E(A){l.remove(A)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:M,acquireProgram:R,releaseProgram:T,releaseShaderCache:E,programs:f,dispose:b}}function hA(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function pA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function zm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Hm(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(h,d,p,_,x,m){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:d,material:p,groupOrder:_,renderOrder:h.renderOrder,z:x,group:m},t[e]=u):(u.id=h.id,u.object=h,u.geometry=d,u.material=p,u.groupOrder=_,u.renderOrder=h.renderOrder,u.z=x,u.group=m),e++,u}function a(h,d,p,_,x,m){const u=s(h,d,p,_,x,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(h,d,p,_,x,m){const u=s(h,d,p,_,x,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,d){n.length>1&&n.sort(h||pA),i.length>1&&i.sort(d||zm),r.length>1&&r.sort(d||zm)}function f(){for(let h=e,d=t.length;h<d;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:f,sort:c}}function mA(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new Hm,t.set(i,[s])):r>=o.length?(s=new Hm,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function gA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new Ve};break;case"SpotLight":n={position:new O,direction:new O,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":n={color:new Ve,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function _A(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let vA=0;function xA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function yA(t){const e=new gA,n=_A(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,o=new mt,s=new mt;function a(c){let f=0,h=0,d=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,_=0,x=0,m=0,u=0,g=0,v=0,M=0,R=0,T=0,E=0;c.sort(xA);for(let A=0,y=c.length;A<y;A++){const P=c[A],B=P.color,F=P.intensity,j=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=B.r*F,h+=B.g*F,d+=B.b*F;else if(P.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(P.sh.coefficients[V],F);E++}else if(P.isDirectionalLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,I=n.get(P);I.shadowIntensity=K.intensity,I.shadowBias=K.bias,I.shadowNormalBias=K.normalBias,I.shadowRadius=K.radius,I.shadowMapSize=K.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=P.shadow.matrix,g++}i.directional[p]=V,p++}else if(P.isSpotLight){const V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(B).multiplyScalar(F),V.distance=j,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,i.spot[x]=V;const K=P.shadow;if(P.map&&(i.spotLightMap[R]=P.map,R++,K.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[x]=K.matrix,P.castShadow){const I=n.get(P);I.shadowIntensity=K.intensity,I.shadowBias=K.bias,I.shadowNormalBias=K.normalBias,I.shadowRadius=K.radius,I.shadowMapSize=K.mapSize,i.spotShadow[x]=I,i.spotShadowMap[x]=Y,M++}x++}else if(P.isRectAreaLight){const V=e.get(P);V.color.copy(B).multiplyScalar(F),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=V,m++}else if(P.isPointLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const K=P.shadow,I=n.get(P);I.shadowIntensity=K.intensity,I.shadowBias=K.bias,I.shadowNormalBias=K.normalBias,I.shadowRadius=K.radius,I.shadowMapSize=K.mapSize,I.shadowCameraNear=K.camera.near,I.shadowCameraFar=K.camera.far,i.pointShadow[_]=I,i.pointShadowMap[_]=Y,i.pointShadowMatrix[_]=P.shadow.matrix,v++}i.point[_]=V,_++}else if(P.isHemisphereLight){const V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(F),V.groundColor.copy(P.groundColor).multiplyScalar(F),i.hemi[u]=V,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const b=i.hash;(b.directionalLength!==p||b.pointLength!==_||b.spotLength!==x||b.rectAreaLength!==m||b.hemiLength!==u||b.numDirectionalShadows!==g||b.numPointShadows!==v||b.numSpotShadows!==M||b.numSpotMaps!==R||b.numLightProbes!==E)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=M+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=E,b.directionalLength=p,b.pointLength=_,b.spotLength=x,b.rectAreaLength=m,b.hemiLength=u,b.numDirectionalShadows=g,b.numPointShadows=v,b.numSpotShadows=M,b.numSpotMaps=R,b.numLightProbes=E,i.version=vA++)}function l(c,f){let h=0,d=0,p=0,_=0,x=0;const m=f.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const v=c[u];if(v.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),h++}else if(v.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),s.identity(),o.copy(v.matrixWorld),o.premultiply(m),s.extractRotation(o),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),_++}else if(v.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Vm(t){const e=new yA(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function o(f){n.push(f)}function s(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function SA(t){let e=new WeakMap;function n(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new Vm(t),e.set(r,[a])):o>=s.length?(a=new Vm(t),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class MA extends ts{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class EA extends ts{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TA=`uniform sampler2D shadow_pass;
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
}`;function AA(t,e,n){let i=new wh;const r=new Ne,o=new Ne,s=new Tt,a=new MA({depthPacking:rM}),l=new EA,c={},f=n.maxTextureSize,h={[er]:rn,[rn]:er,[$n]:$n},d=new tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:wA,fragmentShader:TA}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Ei;_.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Kn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=A_;let u=this.type;this.render=function(T,E,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const A=t.getRenderTarget(),y=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),B=t.state;B.setBlending(qi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const F=u!==ai&&this.type===ai,j=u===ai&&this.type!==ai;for(let Y=0,V=T.length;Y<V;Y++){const K=T[Y],I=K.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const Z=I.getFrameExtents();if(r.multiply(Z),o.copy(I.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(o.x=Math.floor(f/Z.x),r.x=o.x*Z.x,I.mapSize.x=o.x),r.y>f&&(o.y=Math.floor(f/Z.y),r.y=o.y*Z.y,I.mapSize.y=o.y)),I.map===null||F===!0||j===!0){const oe=this.type!==ai?{minFilter:wn,magFilter:wn}:{};I.map!==null&&I.map.dispose(),I.map=new Ir(r.x,r.y,oe),I.map.texture.name=K.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const Q=I.getViewportCount();for(let oe=0;oe<Q;oe++){const xe=I.getViewport(oe);s.set(o.x*xe.x,o.y*xe.y,o.x*xe.z,o.y*xe.w),B.viewport(s),I.updateMatrices(K,oe),i=I.getFrustum(),M(E,b,I.camera,K,this.type)}I.isPointLightShadow!==!0&&this.type===ai&&g(I,b),I.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(A,y,P)};function g(T,E){const b=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ir(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(E,null,b,d,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(E,null,b,p,x,null)}function v(T,E,b,A){let y=null;const P=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)y=P;else if(y=b.isPointLight===!0?l:a,t.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const B=y.uuid,F=E.uuid;let j=c[B];j===void 0&&(j={},c[B]=j);let Y=j[F];Y===void 0&&(Y=y.clone(),j[F]=Y,E.addEventListener("dispose",R)),y=Y}if(y.visible=E.visible,y.wireframe=E.wireframe,A===ai?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:h[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,b.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const B=t.properties.get(y);B.light=b}return y}function M(T,E,b,A,y){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===ai)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);const F=e.update(T),j=T.material;if(Array.isArray(j)){const Y=F.groups;for(let V=0,K=Y.length;V<K;V++){const I=Y[V],Z=j[I.materialIndex];if(Z&&Z.visible){const Q=v(T,Z,A,y);T.onBeforeShadow(t,T,E,b,F,Q,I),t.renderBufferDirect(b,null,F,Q,T,I),T.onAfterShadow(t,T,E,b,F,Q,I)}}}else if(j.visible){const Y=v(T,j,A,y);T.onBeforeShadow(t,T,E,b,F,Y,null),t.renderBufferDirect(b,null,F,Y,T,null),T.onAfterShadow(t,T,E,b,F,Y,null)}}const B=T.children;for(let F=0,j=B.length;F<j;F++)M(B[F],E,b,A,y)}function R(T){T.target.removeEventListener("dispose",R);for(const b in c){const A=c[b],y=T.target.uuid;y in A&&(A[y].dispose(),delete A[y])}}}function CA(t){function e(){let S=!1;const k=new Tt;let z=null;const X=new Tt(0,0,0,0);return{setMask:function(te){z!==te&&!S&&(t.colorMask(te,te,te,te),z=te)},setLocked:function(te){S=te},setClear:function(te,Me,be,gt,Mt){Mt===!0&&(te*=gt,Me*=gt,be*=gt),k.set(te,Me,be,gt),X.equals(k)===!1&&(t.clearColor(te,Me,be,gt),X.copy(k))},reset:function(){S=!1,z=null,X.set(-1,0,0,0)}}}function n(){let S=!1,k=null,z=null,X=null;return{setTest:function(te){te?ue(t.DEPTH_TEST):fe(t.DEPTH_TEST)},setMask:function(te){k!==te&&!S&&(t.depthMask(te),k=te)},setFunc:function(te){if(z!==te){switch(te){case zS:t.depthFunc(t.NEVER);break;case HS:t.depthFunc(t.ALWAYS);break;case VS:t.depthFunc(t.LESS);break;case Jl:t.depthFunc(t.LEQUAL);break;case GS:t.depthFunc(t.EQUAL);break;case WS:t.depthFunc(t.GEQUAL);break;case XS:t.depthFunc(t.GREATER);break;case jS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}z=te}},setLocked:function(te){S=te},setClear:function(te){X!==te&&(t.clearDepth(te),X=te)},reset:function(){S=!1,k=null,z=null,X=null}}}function i(){let S=!1,k=null,z=null,X=null,te=null,Me=null,be=null,gt=null,Mt=null;return{setTest:function(Xe){S||(Xe?ue(t.STENCIL_TEST):fe(t.STENCIL_TEST))},setMask:function(Xe){k!==Xe&&!S&&(t.stencilMask(Xe),k=Xe)},setFunc:function(Xe,Et,vt){(z!==Xe||X!==Et||te!==vt)&&(t.stencilFunc(Xe,Et,vt),z=Xe,X=Et,te=vt)},setOp:function(Xe,Et,vt){(Me!==Xe||be!==Et||gt!==vt)&&(t.stencilOp(Xe,Et,vt),Me=Xe,be=Et,gt=vt)},setLocked:function(Xe){S=Xe},setClear:function(Xe){Mt!==Xe&&(t.clearStencil(Xe),Mt=Xe)},reset:function(){S=!1,k=null,z=null,X=null,te=null,Me=null,be=null,gt=null,Mt=null}}}const r=new e,o=new n,s=new i,a=new WeakMap,l=new WeakMap;let c={},f={},h=new WeakMap,d=[],p=null,_=!1,x=null,m=null,u=null,g=null,v=null,M=null,R=null,T=new Ve(0,0,0),E=0,b=!1,A=null,y=null,P=null,B=null,F=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,V=0;const K=t.getParameter(t.VERSION);K.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(K)[1]),Y=V>=1):K.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Y=V>=2);let I=null,Z={};const Q=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),xe=new Tt().fromArray(Q),He=new Tt().fromArray(oe);function q(S,k,z,X){const te=new Uint8Array(4),Me=t.createTexture();t.bindTexture(S,Me),t.texParameteri(S,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(S,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let be=0;be<z;be++)S===t.TEXTURE_3D||S===t.TEXTURE_2D_ARRAY?t.texImage3D(k,0,t.RGBA,1,1,X,0,t.RGBA,t.UNSIGNED_BYTE,te):t.texImage2D(k+be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,te);return Me}const ne={};ne[t.TEXTURE_2D]=q(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ue(t.DEPTH_TEST),o.setFunc(Jl),$e(!1),Se(Yp),ue(t.CULL_FACE),ut(qi);function ue(S){c[S]!==!0&&(t.enable(S),c[S]=!0)}function fe(S){c[S]!==!1&&(t.disable(S),c[S]=!1)}function Ue(S,k){return f[S]!==k?(t.bindFramebuffer(S,k),f[S]=k,S===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=k),S===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=k),!0):!1}function Oe(S,k){let z=d,X=!1;if(S){z=h.get(k),z===void 0&&(z=[],h.set(k,z));const te=S.textures;if(z.length!==te.length||z[0]!==t.COLOR_ATTACHMENT0){for(let Me=0,be=te.length;Me<be;Me++)z[Me]=t.COLOR_ATTACHMENT0+Me;z.length=te.length,X=!0}}else z[0]!==t.BACK&&(z[0]=t.BACK,X=!0);X&&t.drawBuffers(z)}function ze(S){return p!==S?(t.useProgram(S),p=S,!0):!1}const tt={[gr]:t.FUNC_ADD,[ES]:t.FUNC_SUBTRACT,[wS]:t.FUNC_REVERSE_SUBTRACT};tt[TS]=t.MIN,tt[AS]=t.MAX;const D={[CS]:t.ZERO,[RS]:t.ONE,[bS]:t.SRC_COLOR,[Uf]:t.SRC_ALPHA,[US]:t.SRC_ALPHA_SATURATE,[IS]:t.DST_COLOR,[LS]:t.DST_ALPHA,[PS]:t.ONE_MINUS_SRC_COLOR,[Ff]:t.ONE_MINUS_SRC_ALPHA,[NS]:t.ONE_MINUS_DST_COLOR,[DS]:t.ONE_MINUS_DST_ALPHA,[FS]:t.CONSTANT_COLOR,[OS]:t.ONE_MINUS_CONSTANT_COLOR,[kS]:t.CONSTANT_ALPHA,[BS]:t.ONE_MINUS_CONSTANT_ALPHA};function ut(S,k,z,X,te,Me,be,gt,Mt,Xe){if(S===qi){_===!0&&(fe(t.BLEND),_=!1);return}if(_===!1&&(ue(t.BLEND),_=!0),S!==MS){if(S!==x||Xe!==b){if((m!==gr||v!==gr)&&(t.blendEquation(t.FUNC_ADD),m=gr,v=gr),Xe)switch(S){case Po:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case $p:t.blendFunc(t.ONE,t.ONE);break;case qp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Kp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case Po:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case $p:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case qp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Kp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}u=null,g=null,M=null,R=null,T.set(0,0,0),E=0,x=S,b=Xe}return}te=te||k,Me=Me||z,be=be||X,(k!==m||te!==v)&&(t.blendEquationSeparate(tt[k],tt[te]),m=k,v=te),(z!==u||X!==g||Me!==M||be!==R)&&(t.blendFuncSeparate(D[z],D[X],D[Me],D[be]),u=z,g=X,M=Me,R=be),(gt.equals(T)===!1||Mt!==E)&&(t.blendColor(gt.r,gt.g,gt.b,Mt),T.copy(gt),E=Mt),x=S,b=!1}function Ye(S,k){S.side===$n?fe(t.CULL_FACE):ue(t.CULL_FACE);let z=S.side===rn;k&&(z=!z),$e(z),S.blending===Po&&S.transparent===!1?ut(qi):ut(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),o.setFunc(S.depthFunc),o.setTest(S.depthTest),o.setMask(S.depthWrite),r.setMask(S.colorWrite);const X=S.stencilWrite;s.setTest(X),X&&(s.setMask(S.stencilWriteMask),s.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),s.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),Le(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?ue(t.SAMPLE_ALPHA_TO_COVERAGE):fe(t.SAMPLE_ALPHA_TO_COVERAGE)}function $e(S){A!==S&&(S?t.frontFace(t.CW):t.frontFace(t.CCW),A=S)}function Se(S){S!==xS?(ue(t.CULL_FACE),S!==y&&(S===Yp?t.cullFace(t.BACK):S===yS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):fe(t.CULL_FACE),y=S}function ft(S){S!==P&&(Y&&t.lineWidth(S),P=S)}function Le(S,k,z){S?(ue(t.POLYGON_OFFSET_FILL),(B!==k||F!==z)&&(t.polygonOffset(k,z),B=k,F=z)):fe(t.POLYGON_OFFSET_FILL)}function Ie(S){S?ue(t.SCISSOR_TEST):fe(t.SCISSOR_TEST)}function L(S){S===void 0&&(S=t.TEXTURE0+j-1),I!==S&&(t.activeTexture(S),I=S)}function w(S,k,z){z===void 0&&(I===null?z=t.TEXTURE0+j-1:z=I);let X=Z[z];X===void 0&&(X={type:void 0,texture:void 0},Z[z]=X),(X.type!==S||X.texture!==k)&&(I!==z&&(t.activeTexture(z),I=z),t.bindTexture(S,k||ne[S]),X.type=S,X.texture=k)}function W(){const S=Z[I];S!==void 0&&S.type!==void 0&&(t.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function J(){try{t.texSubImage2D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function we(){try{t.texSubImage3D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function he(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Fe(){try{t.texStorage2D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function se(){try{t.texStorage3D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function pe(){try{t.texImage2D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function We(){try{t.texImage3D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ae(S){xe.equals(S)===!1&&(t.scissor(S.x,S.y,S.z,S.w),xe.copy(S))}function _e(S){He.equals(S)===!1&&(t.viewport(S.x,S.y,S.z,S.w),He.copy(S))}function Re(S,k){let z=l.get(k);z===void 0&&(z=new WeakMap,l.set(k,z));let X=z.get(S);X===void 0&&(X=t.getUniformBlockIndex(k,S.name),z.set(S,X))}function De(S,k){const X=l.get(k).get(S);a.get(k)!==X&&(t.uniformBlockBinding(k,X,S.__bindingPointIndex),a.set(k,X))}function ot(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},I=null,Z={},f={},h=new WeakMap,d=[],p=null,_=!1,x=null,m=null,u=null,g=null,v=null,M=null,R=null,T=new Ve(0,0,0),E=0,b=!1,A=null,y=null,P=null,B=null,F=null,xe.set(0,0,t.canvas.width,t.canvas.height),He.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),s.reset()}return{buffers:{color:r,depth:o,stencil:s},enable:ue,disable:fe,bindFramebuffer:Ue,drawBuffers:Oe,useProgram:ze,setBlending:ut,setMaterial:Ye,setFlipSided:$e,setCullFace:Se,setLineWidth:ft,setPolygonOffset:Le,setScissorTest:Ie,activeTexture:L,bindTexture:w,unbindTexture:W,compressedTexImage2D:ee,compressedTexImage3D:ie,texImage2D:pe,texImage3D:We,updateUBOMapping:Re,uniformBlockBinding:De,texStorage2D:Fe,texStorage3D:se,texSubImage2D:J,texSubImage3D:we,compressedTexSubImage2D:le,compressedTexSubImage3D:he,scissor:Ae,viewport:_e,reset:ot}}function Gm(t,e,n,i){const r=RA(i);switch(n){case L_:return t*e;case I_:return t*e;case N_:return t*e*2;case U_:return t*e/r.components*r.byteLength;case vh:return t*e/r.components*r.byteLength;case F_:return t*e*2/r.components*r.byteLength;case xh:return t*e*2/r.components*r.byteLength;case D_:return t*e*3/r.components*r.byteLength;case On:return t*e*4/r.components*r.byteLength;case yh:return t*e*4/r.components*r.byteLength;case yl:case Sl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ml:case El:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vf:case Wf:return Math.max(t,16)*Math.max(e,8)/4;case Hf:case Gf:return Math.max(t,8)*Math.max(e,8)/2;case Xf:case jf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Yf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $f:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case qf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Kf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Zf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Qf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Jf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case ed:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case td:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case nd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case id:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case rd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case od:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case sd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ad:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case wl:case ld:case cd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case O_:case ud:return Math.ceil(t/4)*Math.ceil(e/4)*8;case fd:case dd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function RA(t){switch(t){case Si:case R_:return{byteLength:1,components:1};case oa:case b_:case da:return{byteLength:2,components:1};case gh:case _h:return{byteLength:2,components:4};case Dr:case mh:case pi:return{byteLength:4,components:1};case P_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function bA(t,e,n,i,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,f=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,w){return p?new OffscreenCanvas(L,w):rc("canvas")}function x(L,w,W){let ee=1;const ie=Ie(L);if((ie.width>W||ie.height>W)&&(ee=W/Math.max(ie.width,ie.height)),ee<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const J=Math.floor(ee*ie.width),we=Math.floor(ee*ie.height);h===void 0&&(h=_(J,we));const le=w?_(J,we):h;return le.width=J,le.height=we,le.getContext("2d").drawImage(L,0,0,J,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+J+"x"+we+")."),le}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),L;return L}function m(L){return L.generateMipmaps&&L.minFilter!==wn&&L.minFilter!==Fn}function u(L){t.generateMipmap(L)}function g(L,w,W,ee,ie=!1){if(L!==null){if(t[L]!==void 0)return t[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let J=w;if(w===t.RED&&(W===t.FLOAT&&(J=t.R32F),W===t.HALF_FLOAT&&(J=t.R16F),W===t.UNSIGNED_BYTE&&(J=t.R8)),w===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(J=t.R8UI),W===t.UNSIGNED_SHORT&&(J=t.R16UI),W===t.UNSIGNED_INT&&(J=t.R32UI),W===t.BYTE&&(J=t.R8I),W===t.SHORT&&(J=t.R16I),W===t.INT&&(J=t.R32I)),w===t.RG&&(W===t.FLOAT&&(J=t.RG32F),W===t.HALF_FLOAT&&(J=t.RG16F),W===t.UNSIGNED_BYTE&&(J=t.RG8)),w===t.RG_INTEGER&&(W===t.UNSIGNED_BYTE&&(J=t.RG8UI),W===t.UNSIGNED_SHORT&&(J=t.RG16UI),W===t.UNSIGNED_INT&&(J=t.RG32UI),W===t.BYTE&&(J=t.RG8I),W===t.SHORT&&(J=t.RG16I),W===t.INT&&(J=t.RG32I)),w===t.RGB&&W===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),w===t.RGBA){const we=ie?ec:Qe.getTransfer(ee);W===t.FLOAT&&(J=t.RGBA32F),W===t.HALF_FLOAT&&(J=t.RGBA16F),W===t.UNSIGNED_BYTE&&(J=we===it?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(L,w){let W;return L?w===null||w===Dr||w===Yo?W=t.DEPTH24_STENCIL8:w===pi?W=t.DEPTH32F_STENCIL8:w===oa&&(W=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Dr||w===Yo?W=t.DEPTH_COMPONENT24:w===pi?W=t.DEPTH_COMPONENT32F:w===oa&&(W=t.DEPTH_COMPONENT16),W}function M(L,w){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==wn&&L.minFilter!==Fn?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function R(L){const w=L.target;w.removeEventListener("dispose",R),E(w),w.isVideoTexture&&f.delete(w)}function T(L){const w=L.target;w.removeEventListener("dispose",T),A(w)}function E(L){const w=i.get(L);if(w.__webglInit===void 0)return;const W=L.source,ee=d.get(W);if(ee){const ie=ee[w.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&b(L),Object.keys(ee).length===0&&d.delete(W)}i.remove(L)}function b(L){const w=i.get(L);t.deleteTexture(w.__webglTexture);const W=L.source,ee=d.get(W);delete ee[w.__cacheKey],s.memory.textures--}function A(L){const w=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(w.__webglFramebuffer[ee]))for(let ie=0;ie<w.__webglFramebuffer[ee].length;ie++)t.deleteFramebuffer(w.__webglFramebuffer[ee][ie]);else t.deleteFramebuffer(w.__webglFramebuffer[ee]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[ee])}else{if(Array.isArray(w.__webglFramebuffer))for(let ee=0;ee<w.__webglFramebuffer.length;ee++)t.deleteFramebuffer(w.__webglFramebuffer[ee]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ee=0;ee<w.__webglColorRenderbuffer.length;ee++)w.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[ee]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const W=L.textures;for(let ee=0,ie=W.length;ee<ie;ee++){const J=i.get(W[ee]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),s.memory.textures--),i.remove(W[ee])}i.remove(L)}let y=0;function P(){y=0}function B(){const L=y;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),y+=1,L}function F(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function j(L,w){const W=i.get(L);if(L.isVideoTexture&&ft(L),L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){const ee=L.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(W,L,w);return}}n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+w)}function Y(L,w){const W=i.get(L);if(L.version>0&&W.__version!==L.version){He(W,L,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+w)}function V(L,w){const W=i.get(L);if(L.version>0&&W.__version!==L.version){He(W,L,w);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+w)}function K(L,w){const W=i.get(L);if(L.version>0&&W.__version!==L.version){q(W,L,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+w)}const I={[Bf]:t.REPEAT,[Sr]:t.CLAMP_TO_EDGE,[zf]:t.MIRRORED_REPEAT},Z={[wn]:t.NEAREST,[nM]:t.NEAREST_MIPMAP_NEAREST,[Fa]:t.NEAREST_MIPMAP_LINEAR,[Fn]:t.LINEAR,[lu]:t.LINEAR_MIPMAP_NEAREST,[Mr]:t.LINEAR_MIPMAP_LINEAR},Q={[sM]:t.NEVER,[dM]:t.ALWAYS,[aM]:t.LESS,[B_]:t.LEQUAL,[lM]:t.EQUAL,[fM]:t.GEQUAL,[cM]:t.GREATER,[uM]:t.NOTEQUAL};function oe(L,w){if(w.type===pi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Fn||w.magFilter===lu||w.magFilter===Fa||w.magFilter===Mr||w.minFilter===Fn||w.minFilter===lu||w.minFilter===Fa||w.minFilter===Mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(L,t.TEXTURE_WRAP_S,I[w.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,I[w.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,I[w.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,Z[w.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,Z[w.minFilter]),w.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,Q[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===wn||w.minFilter!==Fa&&w.minFilter!==Mr||w.type===pi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");t.texParameterf(L,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function xe(L,w){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",R));const ee=w.source;let ie=d.get(ee);ie===void 0&&(ie={},d.set(ee,ie));const J=F(w);if(J!==L.__cacheKey){ie[J]===void 0&&(ie[J]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,W=!0),ie[J].usedTimes++;const we=ie[L.__cacheKey];we!==void 0&&(ie[L.__cacheKey].usedTimes--,we.usedTimes===0&&b(w)),L.__cacheKey=J,L.__webglTexture=ie[J].texture}return W}function He(L,w,W){let ee=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ee=t.TEXTURE_3D);const ie=xe(L,w),J=w.source;n.bindTexture(ee,L.__webglTexture,t.TEXTURE0+W);const we=i.get(J);if(J.version!==we.__version||ie===!0){n.activeTexture(t.TEXTURE0+W);const le=Qe.getPrimaries(Qe.workingColorSpace),he=w.colorSpace===ki?null:Qe.getPrimaries(w.colorSpace),Fe=w.colorSpace===ki||le===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let se=x(w.image,!1,r.maxTextureSize);se=Le(w,se);const pe=o.convert(w.format,w.colorSpace),We=o.convert(w.type);let Ae=g(w.internalFormat,pe,We,w.colorSpace,w.isVideoTexture);oe(ee,w);let _e;const Re=w.mipmaps,De=w.isVideoTexture!==!0,ot=we.__version===void 0||ie===!0,S=J.dataReady,k=M(w,se);if(w.isDepthTexture)Ae=v(w.format===$o,w.type),ot&&(De?n.texStorage2D(t.TEXTURE_2D,1,Ae,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Ae,se.width,se.height,0,pe,We,null));else if(w.isDataTexture)if(Re.length>0){De&&ot&&n.texStorage2D(t.TEXTURE_2D,k,Ae,Re[0].width,Re[0].height);for(let z=0,X=Re.length;z<X;z++)_e=Re[z],De?S&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,_e.width,_e.height,pe,We,_e.data):n.texImage2D(t.TEXTURE_2D,z,Ae,_e.width,_e.height,0,pe,We,_e.data);w.generateMipmaps=!1}else De?(ot&&n.texStorage2D(t.TEXTURE_2D,k,Ae,se.width,se.height),S&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,pe,We,se.data)):n.texImage2D(t.TEXTURE_2D,0,Ae,se.width,se.height,0,pe,We,se.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){De&&ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,k,Ae,Re[0].width,Re[0].height,se.depth);for(let z=0,X=Re.length;z<X;z++)if(_e=Re[z],w.format!==On)if(pe!==null)if(De){if(S)if(w.layerUpdates.size>0){const te=Gm(_e.width,_e.height,w.format,w.type);for(const Me of w.layerUpdates){const be=_e.data.subarray(Me*te/_e.data.BYTES_PER_ELEMENT,(Me+1)*te/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,Me,_e.width,_e.height,1,pe,be,0,0)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,_e.width,_e.height,se.depth,pe,_e.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,z,Ae,_e.width,_e.height,se.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?S&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,_e.width,_e.height,se.depth,pe,We,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,z,Ae,_e.width,_e.height,se.depth,0,pe,We,_e.data)}else{De&&ot&&n.texStorage2D(t.TEXTURE_2D,k,Ae,Re[0].width,Re[0].height);for(let z=0,X=Re.length;z<X;z++)_e=Re[z],w.format!==On?pe!==null?De?S&&n.compressedTexSubImage2D(t.TEXTURE_2D,z,0,0,_e.width,_e.height,pe,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,z,Ae,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?S&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,_e.width,_e.height,pe,We,_e.data):n.texImage2D(t.TEXTURE_2D,z,Ae,_e.width,_e.height,0,pe,We,_e.data)}else if(w.isDataArrayTexture)if(De){if(ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,k,Ae,se.width,se.height,se.depth),S)if(w.layerUpdates.size>0){const z=Gm(se.width,se.height,w.format,w.type);for(const X of w.layerUpdates){const te=se.data.subarray(X*z/se.data.BYTES_PER_ELEMENT,(X+1)*z/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,X,se.width,se.height,1,pe,We,te)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,pe,We,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ae,se.width,se.height,se.depth,0,pe,We,se.data);else if(w.isData3DTexture)De?(ot&&n.texStorage3D(t.TEXTURE_3D,k,Ae,se.width,se.height,se.depth),S&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,pe,We,se.data)):n.texImage3D(t.TEXTURE_3D,0,Ae,se.width,se.height,se.depth,0,pe,We,se.data);else if(w.isFramebufferTexture){if(ot)if(De)n.texStorage2D(t.TEXTURE_2D,k,Ae,se.width,se.height);else{let z=se.width,X=se.height;for(let te=0;te<k;te++)n.texImage2D(t.TEXTURE_2D,te,Ae,z,X,0,pe,We,null),z>>=1,X>>=1}}else if(Re.length>0){if(De&&ot){const z=Ie(Re[0]);n.texStorage2D(t.TEXTURE_2D,k,Ae,z.width,z.height)}for(let z=0,X=Re.length;z<X;z++)_e=Re[z],De?S&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,pe,We,_e):n.texImage2D(t.TEXTURE_2D,z,Ae,pe,We,_e);w.generateMipmaps=!1}else if(De){if(ot){const z=Ie(se);n.texStorage2D(t.TEXTURE_2D,k,Ae,z.width,z.height)}S&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,pe,We,se)}else n.texImage2D(t.TEXTURE_2D,0,Ae,pe,We,se);m(w)&&u(ee),we.__version=J.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function q(L,w,W){if(w.image.length!==6)return;const ee=xe(L,w),ie=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+W);const J=i.get(ie);if(ie.version!==J.__version||ee===!0){n.activeTexture(t.TEXTURE0+W);const we=Qe.getPrimaries(Qe.workingColorSpace),le=w.colorSpace===ki?null:Qe.getPrimaries(w.colorSpace),he=w.colorSpace===ki||we===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Fe=w.isCompressedTexture||w.image[0].isCompressedTexture,se=w.image[0]&&w.image[0].isDataTexture,pe=[];for(let X=0;X<6;X++)!Fe&&!se?pe[X]=x(w.image[X],!0,r.maxCubemapSize):pe[X]=se?w.image[X].image:w.image[X],pe[X]=Le(w,pe[X]);const We=pe[0],Ae=o.convert(w.format,w.colorSpace),_e=o.convert(w.type),Re=g(w.internalFormat,Ae,_e,w.colorSpace),De=w.isVideoTexture!==!0,ot=J.__version===void 0||ee===!0,S=ie.dataReady;let k=M(w,We);oe(t.TEXTURE_CUBE_MAP,w);let z;if(Fe){De&&ot&&n.texStorage2D(t.TEXTURE_CUBE_MAP,k,Re,We.width,We.height);for(let X=0;X<6;X++){z=pe[X].mipmaps;for(let te=0;te<z.length;te++){const Me=z[te];w.format!==On?Ae!==null?De?S&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,te,0,0,Me.width,Me.height,Ae,Me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,te,Re,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?S&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,te,0,0,Me.width,Me.height,Ae,_e,Me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,te,Re,Me.width,Me.height,0,Ae,_e,Me.data)}}}else{if(z=w.mipmaps,De&&ot){z.length>0&&k++;const X=Ie(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,k,Re,X.width,X.height)}for(let X=0;X<6;X++)if(se){De?S&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,pe[X].width,pe[X].height,Ae,_e,pe[X].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Re,pe[X].width,pe[X].height,0,Ae,_e,pe[X].data);for(let te=0;te<z.length;te++){const be=z[te].image[X].image;De?S&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,te+1,0,0,be.width,be.height,Ae,_e,be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,te+1,Re,be.width,be.height,0,Ae,_e,be.data)}}else{De?S&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Ae,_e,pe[X]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Re,Ae,_e,pe[X]);for(let te=0;te<z.length;te++){const Me=z[te];De?S&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,te+1,0,0,Ae,_e,Me.image[X]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,te+1,Re,Ae,_e,Me.image[X])}}}m(w)&&u(t.TEXTURE_CUBE_MAP),J.__version=ie.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function ne(L,w,W,ee,ie,J){const we=o.convert(W.format,W.colorSpace),le=o.convert(W.type),he=g(W.internalFormat,we,le,W.colorSpace);if(!i.get(w).__hasExternalTextures){const se=Math.max(1,w.width>>J),pe=Math.max(1,w.height>>J);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,J,he,se,pe,w.depth,0,we,le,null):n.texImage2D(ie,J,he,se,pe,0,we,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),Se(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,ie,i.get(W).__webglTexture,0,$e(w)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,ie,i.get(W).__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(L,w,W){if(t.bindRenderbuffer(t.RENDERBUFFER,L),w.depthBuffer){const ee=w.depthTexture,ie=ee&&ee.isDepthTexture?ee.type:null,J=v(w.stencilBuffer,ie),we=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=$e(w);Se(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,J,w.width,w.height):W?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,J,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,J,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,we,t.RENDERBUFFER,L)}else{const ee=w.textures;for(let ie=0;ie<ee.length;ie++){const J=ee[ie],we=o.convert(J.format,J.colorSpace),le=o.convert(J.type),he=g(J.internalFormat,we,le,J.colorSpace),Fe=$e(w);W&&Se(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,he,w.width,w.height):Se(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Fe,he,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,he,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function fe(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),j(w.depthTexture,0);const ee=i.get(w.depthTexture).__webglTexture,ie=$e(w);if(w.depthTexture.format===Lo)Se(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(w.depthTexture.format===$o)Se(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ue(L){const w=i.get(L),W=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");fe(w.__webglFramebuffer,L)}else if(W){w.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[ee]),w.__webglDepthbuffer[ee]=t.createRenderbuffer(),ue(w.__webglDepthbuffer[ee],L,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),ue(w.__webglDepthbuffer,L,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Oe(L,w,W){const ee=i.get(L);w!==void 0&&ne(ee.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&Ue(L)}function ze(L){const w=L.texture,W=i.get(L),ee=i.get(w);L.addEventListener("dispose",T);const ie=L.textures,J=L.isWebGLCubeRenderTarget===!0,we=ie.length>1;if(we||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=w.version,s.memory.textures++),J){W.__webglFramebuffer=[];for(let le=0;le<6;le++)if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer[le]=[];for(let he=0;he<w.mipmaps.length;he++)W.__webglFramebuffer[le][he]=t.createFramebuffer()}else W.__webglFramebuffer[le]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer=[];for(let le=0;le<w.mipmaps.length;le++)W.__webglFramebuffer[le]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(we)for(let le=0,he=ie.length;le<he;le++){const Fe=i.get(ie[le]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=t.createTexture(),s.memory.textures++)}if(L.samples>0&&Se(L)===!1){W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let le=0;le<ie.length;le++){const he=ie[le];W.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[le]);const Fe=o.convert(he.format,he.colorSpace),se=o.convert(he.type),pe=g(he.internalFormat,Fe,se,he.colorSpace,L.isXRRenderTarget===!0),We=$e(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,We,pe,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,W.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),ue(W.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),oe(t.TEXTURE_CUBE_MAP,w);for(let le=0;le<6;le++)if(w.mipmaps&&w.mipmaps.length>0)for(let he=0;he<w.mipmaps.length;he++)ne(W.__webglFramebuffer[le][he],L,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,he);else ne(W.__webglFramebuffer[le],L,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(w)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(we){for(let le=0,he=ie.length;le<he;le++){const Fe=ie[le],se=i.get(Fe);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),oe(t.TEXTURE_2D,Fe),ne(W.__webglFramebuffer,L,Fe,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,0),m(Fe)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(le=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,ee.__webglTexture),oe(le,w),w.mipmaps&&w.mipmaps.length>0)for(let he=0;he<w.mipmaps.length;he++)ne(W.__webglFramebuffer[he],L,w,t.COLOR_ATTACHMENT0,le,he);else ne(W.__webglFramebuffer,L,w,t.COLOR_ATTACHMENT0,le,0);m(w)&&u(le),n.unbindTexture()}L.depthBuffer&&Ue(L)}function tt(L){const w=L.textures;for(let W=0,ee=w.length;W<ee;W++){const ie=w[W];if(m(ie)){const J=L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,we=i.get(ie).__webglTexture;n.bindTexture(J,we),u(J),n.unbindTexture()}}}const D=[],ut=[];function Ye(L){if(L.samples>0){if(Se(L)===!1){const w=L.textures,W=L.width,ee=L.height;let ie=t.COLOR_BUFFER_BIT;const J=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,we=i.get(L),le=w.length>1;if(le)for(let he=0;he<w.length;he++)n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let he=0;he<w.length;he++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,we.__webglColorRenderbuffer[he]);const Fe=i.get(w[he]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Fe,0)}t.blitFramebuffer(0,0,W,ee,0,0,W,ee,ie,t.NEAREST),l===!0&&(D.length=0,ut.length=0,D.push(t.COLOR_ATTACHMENT0+he),L.depthBuffer&&L.resolveDepthBuffer===!1&&(D.push(J),ut.push(J),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ut)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,D))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let he=0;he<w.length;he++){n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,we.__webglColorRenderbuffer[he]);const Fe=i.get(w[he]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,Fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const w=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function $e(L){return Math.min(r.maxSamples,L.samples)}function Se(L){const w=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ft(L){const w=s.render.frame;f.get(L)!==w&&(f.set(L,w),L.update())}function Le(L,w){const W=L.colorSpace,ee=L.format,ie=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||W!==or&&W!==ki&&(Qe.getTransfer(W)===it?(ee!==On||ie!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),w}function Ie(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=P,this.setTexture2D=j,this.setTexture2DArray=Y,this.setTexture3D=V,this.setTextureCube=K,this.rebindTextures=Oe,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Se}function PA(t,e){function n(i,r=ki){let o;const s=Qe.getTransfer(r);if(i===Si)return t.UNSIGNED_BYTE;if(i===gh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===_h)return t.UNSIGNED_SHORT_5_5_5_1;if(i===P_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===R_)return t.BYTE;if(i===b_)return t.SHORT;if(i===oa)return t.UNSIGNED_SHORT;if(i===mh)return t.INT;if(i===Dr)return t.UNSIGNED_INT;if(i===pi)return t.FLOAT;if(i===da)return t.HALF_FLOAT;if(i===L_)return t.ALPHA;if(i===D_)return t.RGB;if(i===On)return t.RGBA;if(i===I_)return t.LUMINANCE;if(i===N_)return t.LUMINANCE_ALPHA;if(i===Lo)return t.DEPTH_COMPONENT;if(i===$o)return t.DEPTH_STENCIL;if(i===U_)return t.RED;if(i===vh)return t.RED_INTEGER;if(i===F_)return t.RG;if(i===xh)return t.RG_INTEGER;if(i===yh)return t.RGBA_INTEGER;if(i===yl||i===Sl||i===Ml||i===El)if(s===it)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===yl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Sl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ml)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===El)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===yl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Sl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ml)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===El)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Hf||i===Vf||i===Gf||i===Wf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Hf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gf)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xf||i===jf||i===Yf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Xf||i===jf)return s===it?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Yf)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===$f||i===qf||i===Kf||i===Zf||i===Qf||i===Jf||i===ed||i===td||i===nd||i===id||i===rd||i===od||i===sd||i===ad)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===$f)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qf)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Kf)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zf)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qf)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jf)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ed)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===td)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nd)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===id)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rd)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===od)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sd)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ad)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wl||i===ld||i===cd)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===wl)return s===it?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ld)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===cd)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===O_||i===ud||i===fd||i===dd)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===wl)return o.COMPRESSED_RED_RGTC1_EXT;if(i===ud)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fd)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dd)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Yo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class LA extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class rl extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DA={type:"move"};class Iu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(DA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new rl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const IA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NA=`
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

}`;class UA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new on,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new tr({vertexShader:IA,fragmentShader:NA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Kn(new Rc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FA extends kr{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,c=null,f=null,h=null,d=null,p=null,_=null;const x=new UA,m=n.getContextAttributes();let u=null,g=null;const v=[],M=[],R=new Ne;let T=null;const E=new fn;E.layers.enable(1),E.viewport=new Tt;const b=new fn;b.layers.enable(2),b.viewport=new Tt;const A=[E,b],y=new LA;y.layers.enable(1),y.layers.enable(2);let P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ne=v[q];return ne===void 0&&(ne=new Iu,v[q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(q){let ne=v[q];return ne===void 0&&(ne=new Iu,v[q]=ne),ne.getGripSpace()},this.getHand=function(q){let ne=v[q];return ne===void 0&&(ne=new Iu,v[q]=ne),ne.getHandSpace()};function F(q){const ne=M.indexOf(q.inputSource);if(ne===-1)return;const ue=v[ne];ue!==void 0&&(ue.update(q.inputSource,q.frame,c||s),ue.dispatchEvent({type:q.type,data:q.inputSource}))}function j(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",Y);for(let q=0;q<v.length;q++){const ne=M[q];ne!==null&&(M[q]=null,v[q].disconnect(ne))}P=null,B=null,x.reset(),e.setRenderTarget(u),p=null,d=null,h=null,r=null,g=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",j),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Ir(p.framebufferWidth,p.framebufferHeight,{format:On,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,ue=null,fe=null;m.depth&&(fe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=m.stencil?$o:Lo,ue=m.stencil?Yo:Dr);const Ue={colorFormat:n.RGBA8,depthFormat:fe,scaleFactor:o};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(Ue),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),g=new Ir(d.textureWidth,d.textureHeight,{format:On,type:Si,depthTexture:new J_(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(q){for(let ne=0;ne<q.removed.length;ne++){const ue=q.removed[ne],fe=M.indexOf(ue);fe>=0&&(M[fe]=null,v[fe].disconnect(ue))}for(let ne=0;ne<q.added.length;ne++){const ue=q.added[ne];let fe=M.indexOf(ue);if(fe===-1){for(let Oe=0;Oe<v.length;Oe++)if(Oe>=M.length){M.push(ue),fe=Oe;break}else if(M[Oe]===null){M[Oe]=ue,fe=Oe;break}if(fe===-1)break}const Ue=v[fe];Ue&&Ue.connect(ue)}}const V=new O,K=new O;function I(q,ne,ue){V.setFromMatrixPosition(ne.matrixWorld),K.setFromMatrixPosition(ue.matrixWorld);const fe=V.distanceTo(K),Ue=ne.projectionMatrix.elements,Oe=ue.projectionMatrix.elements,ze=Ue[14]/(Ue[10]-1),tt=Ue[14]/(Ue[10]+1),D=(Ue[9]+1)/Ue[5],ut=(Ue[9]-1)/Ue[5],Ye=(Ue[8]-1)/Ue[0],$e=(Oe[8]+1)/Oe[0],Se=ze*Ye,ft=ze*$e,Le=fe/(-Ye+$e),Ie=Le*-Ye;ne.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ie),q.translateZ(Le),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const L=ze+Le,w=tt+Le,W=Se-Ie,ee=ft+(fe-Ie),ie=D*tt/w*L,J=ut*tt/w*L;q.projectionMatrix.makePerspective(W,ee,ie,J,L,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function Z(q,ne){ne===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ne.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;x.texture!==null&&(q.near=x.depthNear,q.far=x.depthFar),y.near=b.near=E.near=q.near,y.far=b.far=E.far=q.far,(P!==y.near||B!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,B=y.far,E.near=P,E.far=B,b.near=P,b.far=B,E.updateProjectionMatrix(),b.updateProjectionMatrix(),q.updateProjectionMatrix());const ne=q.parent,ue=y.cameras;Z(y,ne);for(let fe=0;fe<ue.length;fe++)Z(ue[fe],ne);ue.length===2?I(y,E,b):y.projectionMatrix.copy(E.projectionMatrix),Q(q,y,ne)};function Q(q,ne,ue){ue===null?q.matrix.copy(ne.matrixWorld):(q.matrix.copy(ue.matrixWorld),q.matrix.invert(),q.matrix.multiply(ne.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=qo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let oe=null;function xe(q,ne){if(f=ne.getViewerPose(c||s),_=ne,f!==null){const ue=f.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let fe=!1;ue.length!==y.cameras.length&&(y.cameras.length=0,fe=!0);for(let Oe=0;Oe<ue.length;Oe++){const ze=ue[Oe];let tt=null;if(p!==null)tt=p.getViewport(ze);else{const ut=h.getViewSubImage(d,ze);tt=ut.viewport,Oe===0&&(e.setRenderTargetTextures(g,ut.colorTexture,d.ignoreDepthValues?void 0:ut.depthStencilTexture),e.setRenderTarget(g))}let D=A[Oe];D===void 0&&(D=new fn,D.layers.enable(Oe),D.viewport=new Tt,A[Oe]=D),D.matrix.fromArray(ze.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(ze.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(tt.x,tt.y,tt.width,tt.height),Oe===0&&(y.matrix.copy(D.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),fe===!0&&y.cameras.push(D)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const Oe=h.getDepthInformation(ue[0]);Oe&&Oe.isValid&&Oe.texture&&x.init(e,Oe,r.renderState)}}for(let ue=0;ue<v.length;ue++){const fe=M[ue],Ue=v[ue];fe!==null&&Ue!==void 0&&Ue.update(fe,ne,c||s)}oe&&oe(q,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),_=null}const He=new Z_;He.setAnimationLoop(xe),this.setAnimationLoop=function(q){oe=q},this.dispose=function(){}}}const dr=new ei,OA=new mt;function kA(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,$_(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,g,v,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?o(m,u):u.isMeshToonMaterial?(o(m,u),h(m,u)):u.isMeshPhongMaterial?(o(m,u),f(m,u)):u.isMeshStandardMaterial?(o(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,M)):u.isMeshMatcapMaterial?(o(m,u),_(m,u)):u.isMeshDepthMaterial?o(m,u):u.isMeshDistanceMaterial?(o(m,u),x(m,u)):u.isMeshNormalMaterial?o(m,u):u.isLineBasicMaterial?(s(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,g,v):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function o(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===rn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===rn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const g=e.get(u),v=g.envMap,M=g.envMapRotation;v&&(m.envMap.value=v,dr.copy(M),dr.x*=-1,dr.y*=-1,dr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),m.envMapRotation.value.setFromMatrix4(OA.makeRotationFromEuler(dr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function s(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,v){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=v*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===rn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){const g=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function BA(t,e,n,i){let r={},o={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){const M=v.program;i.uniformBlockBinding(g,M)}function c(g,v){let M=r[g.id];M===void 0&&(_(g),M=f(g),r[g.id]=M,g.addEventListener("dispose",m));const R=v.program;i.updateUBOMapping(g,R);const T=e.render.frame;o[g.id]!==T&&(d(g),o[g.id]=T)}function f(g){const v=h();g.__bindingPointIndex=v;const M=t.createBuffer(),R=g.__size,T=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,R,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,M),M}function h(){for(let g=0;g<a;g++)if(s.indexOf(g)===-1)return s.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const v=r[g.id],M=g.uniforms,R=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let T=0,E=M.length;T<E;T++){const b=Array.isArray(M[T])?M[T]:[M[T]];for(let A=0,y=b.length;A<y;A++){const P=b[A];if(p(P,T,A,R)===!0){const B=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let j=0;for(let Y=0;Y<F.length;Y++){const V=F[Y],K=x(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,B+j,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,j),j+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,B,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,v,M,R){const T=g.value,E=v+"_"+M;if(R[E]===void 0)return typeof T=="number"||typeof T=="boolean"?R[E]=T:R[E]=T.clone(),!0;{const b=R[E];if(typeof T=="number"||typeof T=="boolean"){if(b!==T)return R[E]=T,!0}else if(b.equals(T)===!1)return b.copy(T),!0}return!1}function _(g){const v=g.uniforms;let M=0;const R=16;for(let E=0,b=v.length;E<b;E++){const A=Array.isArray(v[E])?v[E]:[v[E]];for(let y=0,P=A.length;y<P;y++){const B=A[y],F=Array.isArray(B.value)?B.value:[B.value];for(let j=0,Y=F.length;j<Y;j++){const V=F[j],K=x(V),I=M%R,Z=I%K.boundary,Q=I+Z;M+=Z,Q!==0&&R-Q<K.storage&&(M+=R-Q),B.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=K.storage}}}const T=M%R;return T>0&&(M+=R-T),g.__size=M,g.__cache={},this}function x(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function m(g){const v=g.target;v.removeEventListener("dispose",m);const M=s.indexOf(v.__bindingPointIndex);s.splice(M,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete o[v.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);s=[],r={},o={}}return{bind:l,update:c,dispose:u}}class zA{constructor(e={}){const{canvas:n=PM(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=s;const p=new Uint32Array(4),_=new Int32Array(4);let x=null,m=null;const u=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xn,this.toneMapping=Ki,this.toneMappingExposure=1;const v=this;let M=!1,R=0,T=0,E=null,b=-1,A=null;const y=new Tt,P=new Tt;let B=null;const F=new Ve(0);let j=0,Y=n.width,V=n.height,K=1,I=null,Z=null;const Q=new Tt(0,0,Y,V),oe=new Tt(0,0,Y,V);let xe=!1;const He=new wh;let q=!1,ne=!1;const ue=new mt,fe=new O,Ue=new Tt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function tt(){return E===null?K:1}let D=i;function ut(C,N){return n.getContext(C,N)}try{const C={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${hh}`),n.addEventListener("webglcontextlost",z,!1),n.addEventListener("webglcontextrestored",X,!1),n.addEventListener("webglcontextcreationerror",te,!1),D===null){const N="webgl2";if(D=ut(N,C),D===null)throw ut(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ye,$e,Se,ft,Le,Ie,L,w,W,ee,ie,J,we,le,he,Fe,se,pe,We,Ae,_e,Re,De,ot;function S(){Ye=new jw(D),Ye.init(),Re=new PA(D,Ye),$e=new zw(D,Ye,e,Re),Se=new CA(D),ft=new qw(D),Le=new hA,Ie=new bA(D,Ye,Se,Le,$e,Re,ft),L=new Vw(v),w=new Xw(v),W=new nE(D),De=new kw(D,W),ee=new Yw(D,W,ft,De),ie=new Zw(D,ee,W,ft),We=new Kw(D,$e,Ie),Fe=new Hw(Le),J=new dA(v,L,w,Ye,$e,De,Fe),we=new kA(v,Le),le=new mA,he=new SA(Ye),pe=new Ow(v,L,w,Se,ie,d,l),se=new AA(v,ie,$e),ot=new BA(D,ft,$e,Se),Ae=new Bw(D,Ye,ft),_e=new $w(D,Ye,ft),ft.programs=J.programs,v.capabilities=$e,v.extensions=Ye,v.properties=Le,v.renderLists=le,v.shadowMap=se,v.state=Se,v.info=ft}S();const k=new FA(v,D);this.xr=k,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const C=Ye.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ye.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(C){C!==void 0&&(K=C,this.setSize(Y,V,!1))},this.getSize=function(C){return C.set(Y,V)},this.setSize=function(C,N,H=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=C,V=N,n.width=Math.floor(C*K),n.height=Math.floor(N*K),H===!0&&(n.style.width=C+"px",n.style.height=N+"px"),this.setViewport(0,0,C,N)},this.getDrawingBufferSize=function(C){return C.set(Y*K,V*K).floor()},this.setDrawingBufferSize=function(C,N,H){Y=C,V=N,K=H,n.width=Math.floor(C*H),n.height=Math.floor(N*H),this.setViewport(0,0,C,N)},this.getCurrentViewport=function(C){return C.copy(y)},this.getViewport=function(C){return C.copy(Q)},this.setViewport=function(C,N,H,G){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,N,H,G),Se.viewport(y.copy(Q).multiplyScalar(K).round())},this.getScissor=function(C){return C.copy(oe)},this.setScissor=function(C,N,H,G){C.isVector4?oe.set(C.x,C.y,C.z,C.w):oe.set(C,N,H,G),Se.scissor(P.copy(oe).multiplyScalar(K).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(C){Se.setScissorTest(xe=C)},this.setOpaqueSort=function(C){I=C},this.setTransparentSort=function(C){Z=C},this.getClearColor=function(C){return C.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(C=!0,N=!0,H=!0){let G=0;if(C){let U=!1;if(E!==null){const ae=E.texture.format;U=ae===yh||ae===xh||ae===vh}if(U){const ae=E.texture.type,de=ae===Si||ae===Dr||ae===oa||ae===Yo||ae===gh||ae===_h,ve=pe.getClearColor(),ye=pe.getClearAlpha(),Ce=ve.r,Pe=ve.g,Te=ve.b;de?(p[0]=Ce,p[1]=Pe,p[2]=Te,p[3]=ye,D.clearBufferuiv(D.COLOR,0,p)):(_[0]=Ce,_[1]=Pe,_[2]=Te,_[3]=ye,D.clearBufferiv(D.COLOR,0,_))}else G|=D.COLOR_BUFFER_BIT}N&&(G|=D.DEPTH_BUFFER_BIT),H&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",z,!1),n.removeEventListener("webglcontextrestored",X,!1),n.removeEventListener("webglcontextcreationerror",te,!1),le.dispose(),he.dispose(),Le.dispose(),L.dispose(),w.dispose(),ie.dispose(),De.dispose(),ot.dispose(),J.dispose(),k.dispose(),k.removeEventListener("sessionstart",vt),k.removeEventListener("sessionend",wi),It.stop()};function z(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const C=ft.autoReset,N=se.enabled,H=se.autoUpdate,G=se.needsUpdate,U=se.type;S(),ft.autoReset=C,se.enabled=N,se.autoUpdate=H,se.needsUpdate=G,se.type=U}function te(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Me(C){const N=C.target;N.removeEventListener("dispose",Me),be(N)}function be(C){gt(C),Le.remove(C)}function gt(C){const N=Le.get(C).programs;N!==void 0&&(N.forEach(function(H){J.releaseProgram(H)}),C.isShaderMaterial&&J.releaseShaderCache(C))}this.renderBufferDirect=function(C,N,H,G,U,ae){N===null&&(N=Oe);const de=U.isMesh&&U.matrixWorld.determinant()<0,ve=uv(C,N,H,G,U);Se.setMaterial(G,de);let ye=H.index,Ce=1;if(G.wireframe===!0){if(ye=ee.getWireframeAttribute(H),ye===void 0)return;Ce=2}const Pe=H.drawRange,Te=H.attributes.position;let qe=Pe.start*Ce,dt=(Pe.start+Pe.count)*Ce;ae!==null&&(qe=Math.max(qe,ae.start*Ce),dt=Math.min(dt,(ae.start+ae.count)*Ce)),ye!==null?(qe=Math.max(qe,0),dt=Math.min(dt,ye.count)):Te!=null&&(qe=Math.max(qe,0),dt=Math.min(dt,Te.count));const ht=dt-qe;if(ht<0||ht===1/0)return;De.setup(U,G,ve,H,ye);let sn,Ke=Ae;if(ye!==null&&(sn=W.get(ye),Ke=_e,Ke.setIndex(sn)),U.isMesh)G.wireframe===!0?(Se.setLineWidth(G.wireframeLinewidth*tt()),Ke.setMode(D.LINES)):Ke.setMode(D.TRIANGLES);else if(U.isLine){let Ee=G.linewidth;Ee===void 0&&(Ee=1),Se.setLineWidth(Ee*tt()),U.isLineSegments?Ke.setMode(D.LINES):U.isLineLoop?Ke.setMode(D.LINE_LOOP):Ke.setMode(D.LINE_STRIP)}else U.isPoints?Ke.setMode(D.POINTS):U.isSprite&&Ke.setMode(D.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ke.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))Ke.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ee=U._multiDrawStarts,Nt=U._multiDrawCounts,Ze=U._multiDrawCount,Rn=ye?W.get(ye).bytesPerElement:1,Br=Le.get(G).currentProgram.getUniforms();for(let an=0;an<Ze;an++)Br.setValue(D,"_gl_DrawID",an),Ke.render(Ee[an]/Rn,Nt[an])}else if(U.isInstancedMesh)Ke.renderInstances(qe,ht,U.count);else if(H.isInstancedBufferGeometry){const Ee=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Nt=Math.min(H.instanceCount,Ee);Ke.renderInstances(qe,ht,Nt)}else Ke.render(qe,ht)};function Mt(C,N,H){C.transparent===!0&&C.side===$n&&C.forceSinglePass===!1?(C.side=rn,C.needsUpdate=!0,ma(C,N,H),C.side=er,C.needsUpdate=!0,ma(C,N,H),C.side=$n):ma(C,N,H)}this.compile=function(C,N,H=null){H===null&&(H=C),m=he.get(H),m.init(N),g.push(m),H.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),C!==H&&C.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const G=new Set;return C.traverse(function(U){const ae=U.material;if(ae)if(Array.isArray(ae))for(let de=0;de<ae.length;de++){const ve=ae[de];Mt(ve,H,U),G.add(ve)}else Mt(ae,H,U),G.add(ae)}),g.pop(),m=null,G},this.compileAsync=function(C,N,H=null){const G=this.compile(C,N,H);return new Promise(U=>{function ae(){if(G.forEach(function(de){Le.get(de).currentProgram.isReady()&&G.delete(de)}),G.size===0){U(C);return}setTimeout(ae,10)}Ye.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Xe=null;function Et(C){Xe&&Xe(C)}function vt(){It.stop()}function wi(){It.start()}const It=new Z_;It.setAnimationLoop(Et),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(C){Xe=C,k.setAnimationLoop(C),C===null?It.stop():It.start()},k.addEventListener("sessionstart",vt),k.addEventListener("sessionend",wi),this.render=function(C,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(N),N=k.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,N,E),m=he.get(C,g.length),m.init(N),g.push(m),ue.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),He.setFromProjectionMatrix(ue),ne=this.localClippingEnabled,q=Fe.init(this.clippingPlanes,ne),x=le.get(C,u.length),x.init(),u.push(x),k.enabled===!0&&k.isPresenting===!0){const ae=v.xr.getDepthSensingMesh();ae!==null&&ti(ae,N,-1/0,v.sortObjects)}ti(C,N,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(I,Z),ze=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,ze&&pe.addToRenderList(x,C),this.info.render.frame++,q===!0&&Fe.beginShadows();const H=m.state.shadowsArray;se.render(H,C,N),q===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=x.opaque,U=x.transmissive;if(m.setupLights(),N.isArrayCamera){const ae=N.cameras;if(U.length>0)for(let de=0,ve=ae.length;de<ve;de++){const ye=ae[de];rs(G,U,C,ye)}ze&&pe.render(C);for(let de=0,ve=ae.length;de<ve;de++){const ye=ae[de];sr(x,C,ye,ye.viewport)}}else U.length>0&&rs(G,U,C,N),ze&&pe.render(C),sr(x,C,N);E!==null&&(Ie.updateMultisampleRenderTarget(E),Ie.updateRenderTargetMipmap(E)),C.isScene===!0&&C.onAfterRender(v,C,N),De.resetDefaultState(),b=-1,A=null,g.pop(),g.length>0?(m=g[g.length-1],q===!0&&Fe.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function ti(C,N,H,G){if(C.visible===!1)return;if(C.layers.test(N.layers)){if(C.isGroup)H=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(N);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||He.intersectsSprite(C)){G&&Ue.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ue);const de=ie.update(C),ve=C.material;ve.visible&&x.push(C,de,ve,H,Ue.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||He.intersectsObject(C))){const de=ie.update(C),ve=C.material;if(G&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ue.copy(C.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Ue.copy(de.boundingSphere.center)),Ue.applyMatrix4(C.matrixWorld).applyMatrix4(ue)),Array.isArray(ve)){const ye=de.groups;for(let Ce=0,Pe=ye.length;Ce<Pe;Ce++){const Te=ye[Ce],qe=ve[Te.materialIndex];qe&&qe.visible&&x.push(C,de,qe,H,Ue.z,Te)}}else ve.visible&&x.push(C,de,ve,H,Ue.z,null)}}const ae=C.children;for(let de=0,ve=ae.length;de<ve;de++)ti(ae[de],N,H,G)}function sr(C,N,H,G){const U=C.opaque,ae=C.transmissive,de=C.transparent;m.setupLightsView(H),q===!0&&Fe.setGlobalState(v.clippingPlanes,H),G&&Se.viewport(y.copy(G)),U.length>0&&pa(U,N,H),ae.length>0&&pa(ae,N,H),de.length>0&&pa(de,N,H),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function rs(C,N,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new Ir(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?da:Si,minFilter:Mr,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ae=m.state.transmissionRenderTarget[G.id],de=G.viewport||y;ae.setSize(de.z,de.w);const ve=v.getRenderTarget();v.setRenderTarget(ae),v.getClearColor(F),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),v.clear(),ze&&pe.render(H);const ye=v.toneMapping;v.toneMapping=Ki;const Ce=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),q===!0&&Fe.setGlobalState(v.clippingPlanes,G),pa(C,H,G),Ie.updateMultisampleRenderTarget(ae),Ie.updateRenderTargetMipmap(ae),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let Te=0,qe=N.length;Te<qe;Te++){const dt=N[Te],ht=dt.object,sn=dt.geometry,Ke=dt.material,Ee=dt.group;if(Ke.side===$n&&ht.layers.test(G.layers)){const Nt=Ke.side;Ke.side=rn,Ke.needsUpdate=!0,bh(ht,H,G,sn,Ke,Ee),Ke.side=Nt,Ke.needsUpdate=!0,Pe=!0}}Pe===!0&&(Ie.updateMultisampleRenderTarget(ae),Ie.updateRenderTargetMipmap(ae))}v.setRenderTarget(ve),v.setClearColor(F,j),Ce!==void 0&&(G.viewport=Ce),v.toneMapping=ye}function pa(C,N,H){const G=N.isScene===!0?N.overrideMaterial:null;for(let U=0,ae=C.length;U<ae;U++){const de=C[U],ve=de.object,ye=de.geometry,Ce=G===null?de.material:G,Pe=de.group;ve.layers.test(H.layers)&&bh(ve,N,H,ye,Ce,Pe)}}function bh(C,N,H,G,U,ae){C.onBeforeRender(v,N,H,G,U,ae),C.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),U.transparent===!0&&U.side===$n&&U.forceSinglePass===!1?(U.side=rn,U.needsUpdate=!0,v.renderBufferDirect(H,N,G,U,C,ae),U.side=er,U.needsUpdate=!0,v.renderBufferDirect(H,N,G,U,C,ae),U.side=$n):v.renderBufferDirect(H,N,G,U,C,ae),C.onAfterRender(v,N,H,G,U,ae)}function ma(C,N,H){N.isScene!==!0&&(N=Oe);const G=Le.get(C),U=m.state.lights,ae=m.state.shadowsArray,de=U.state.version,ve=J.getParameters(C,U.state,ae,N,H),ye=J.getProgramCacheKey(ve);let Ce=G.programs;G.environment=C.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(C.isMeshStandardMaterial?w:L).get(C.envMap||G.environment),G.envMapRotation=G.environment!==null&&C.envMap===null?N.environmentRotation:C.envMapRotation,Ce===void 0&&(C.addEventListener("dispose",Me),Ce=new Map,G.programs=Ce);let Pe=Ce.get(ye);if(Pe!==void 0){if(G.currentProgram===Pe&&G.lightsStateVersion===de)return Lh(C,ve),Pe}else ve.uniforms=J.getUniforms(C),C.onBeforeCompile(ve,v),Pe=J.acquireProgram(ve,ye),Ce.set(ye,Pe),G.uniforms=ve.uniforms;const Te=G.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Te.clippingPlanes=Fe.uniform),Lh(C,ve),G.needsLights=dv(C),G.lightsStateVersion=de,G.needsLights&&(Te.ambientLightColor.value=U.state.ambient,Te.lightProbe.value=U.state.probe,Te.directionalLights.value=U.state.directional,Te.directionalLightShadows.value=U.state.directionalShadow,Te.spotLights.value=U.state.spot,Te.spotLightShadows.value=U.state.spotShadow,Te.rectAreaLights.value=U.state.rectArea,Te.ltc_1.value=U.state.rectAreaLTC1,Te.ltc_2.value=U.state.rectAreaLTC2,Te.pointLights.value=U.state.point,Te.pointLightShadows.value=U.state.pointShadow,Te.hemisphereLights.value=U.state.hemi,Te.directionalShadowMap.value=U.state.directionalShadowMap,Te.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Te.spotShadowMap.value=U.state.spotShadowMap,Te.spotLightMatrix.value=U.state.spotLightMatrix,Te.spotLightMap.value=U.state.spotLightMap,Te.pointShadowMap.value=U.state.pointShadowMap,Te.pointShadowMatrix.value=U.state.pointShadowMatrix),G.currentProgram=Pe,G.uniformsList=null,Pe}function Ph(C){if(C.uniformsList===null){const N=C.currentProgram.getUniforms();C.uniformsList=Tl.seqWithValue(N.seq,C.uniforms)}return C.uniformsList}function Lh(C,N){const H=Le.get(C);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function uv(C,N,H,G,U){N.isScene!==!0&&(N=Oe),Ie.resetTextureUnits();const ae=N.fog,de=G.isMeshStandardMaterial?N.environment:null,ve=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:or,ye=(G.isMeshStandardMaterial?w:L).get(G.envMap||de),Ce=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Pe=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Te=!!H.morphAttributes.position,qe=!!H.morphAttributes.normal,dt=!!H.morphAttributes.color;let ht=Ki;G.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(ht=v.toneMapping);const sn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ke=sn!==void 0?sn.length:0,Ee=Le.get(G),Nt=m.state.lights;if(q===!0&&(ne===!0||C!==A)){const _n=C===A&&G.id===b;Fe.setState(G,C,_n)}let Ze=!1;G.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Nt.state.version||Ee.outputColorSpace!==ve||U.isBatchedMesh&&Ee.batching===!1||!U.isBatchedMesh&&Ee.batching===!0||U.isBatchedMesh&&Ee.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ee.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ee.instancing===!1||!U.isInstancedMesh&&Ee.instancing===!0||U.isSkinnedMesh&&Ee.skinning===!1||!U.isSkinnedMesh&&Ee.skinning===!0||U.isInstancedMesh&&Ee.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ee.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ee.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ee.instancingMorph===!1&&U.morphTexture!==null||Ee.envMap!==ye||G.fog===!0&&Ee.fog!==ae||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Fe.numPlanes||Ee.numIntersection!==Fe.numIntersection)||Ee.vertexAlphas!==Ce||Ee.vertexTangents!==Pe||Ee.morphTargets!==Te||Ee.morphNormals!==qe||Ee.morphColors!==dt||Ee.toneMapping!==ht||Ee.morphTargetsCount!==Ke)&&(Ze=!0):(Ze=!0,Ee.__version=G.version);let Rn=Ee.currentProgram;Ze===!0&&(Rn=ma(G,N,U));let Br=!1,an=!1,Pc=!1;const xt=Rn.getUniforms(),Ti=Ee.uniforms;if(Se.useProgram(Rn.program)&&(Br=!0,an=!0,Pc=!0),G.id!==b&&(b=G.id,an=!0),Br||A!==C){xt.setValue(D,"projectionMatrix",C.projectionMatrix),xt.setValue(D,"viewMatrix",C.matrixWorldInverse);const _n=xt.map.cameraPosition;_n!==void 0&&_n.setValue(D,fe.setFromMatrixPosition(C.matrixWorld)),$e.logarithmicDepthBuffer&&xt.setValue(D,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&xt.setValue(D,"isOrthographic",C.isOrthographicCamera===!0),A!==C&&(A=C,an=!0,Pc=!0)}if(U.isSkinnedMesh){xt.setOptional(D,U,"bindMatrix"),xt.setOptional(D,U,"bindMatrixInverse");const _n=U.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),xt.setValue(D,"boneTexture",_n.boneTexture,Ie))}U.isBatchedMesh&&(xt.setOptional(D,U,"batchingTexture"),xt.setValue(D,"batchingTexture",U._matricesTexture,Ie),xt.setOptional(D,U,"batchingIdTexture"),xt.setValue(D,"batchingIdTexture",U._indirectTexture,Ie),xt.setOptional(D,U,"batchingColorTexture"),U._colorsTexture!==null&&xt.setValue(D,"batchingColorTexture",U._colorsTexture,Ie));const Lc=H.morphAttributes;if((Lc.position!==void 0||Lc.normal!==void 0||Lc.color!==void 0)&&We.update(U,H,Rn),(an||Ee.receiveShadow!==U.receiveShadow)&&(Ee.receiveShadow=U.receiveShadow,xt.setValue(D,"receiveShadow",U.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Ti.envMap.value=ye,Ti.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(Ti.envMapIntensity.value=N.environmentIntensity),an&&(xt.setValue(D,"toneMappingExposure",v.toneMappingExposure),Ee.needsLights&&fv(Ti,Pc),ae&&G.fog===!0&&we.refreshFogUniforms(Ti,ae),we.refreshMaterialUniforms(Ti,G,K,V,m.state.transmissionRenderTarget[C.id]),Tl.upload(D,Ph(Ee),Ti,Ie)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Tl.upload(D,Ph(Ee),Ti,Ie),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&xt.setValue(D,"center",U.center),xt.setValue(D,"modelViewMatrix",U.modelViewMatrix),xt.setValue(D,"normalMatrix",U.normalMatrix),xt.setValue(D,"modelMatrix",U.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const _n=G.uniformsGroups;for(let Dc=0,hv=_n.length;Dc<hv;Dc++){const Dh=_n[Dc];ot.update(Dh,Rn),ot.bind(Dh,Rn)}}return Rn}function fv(C,N){C.ambientLightColor.needsUpdate=N,C.lightProbe.needsUpdate=N,C.directionalLights.needsUpdate=N,C.directionalLightShadows.needsUpdate=N,C.pointLights.needsUpdate=N,C.pointLightShadows.needsUpdate=N,C.spotLights.needsUpdate=N,C.spotLightShadows.needsUpdate=N,C.rectAreaLights.needsUpdate=N,C.hemisphereLights.needsUpdate=N}function dv(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(C,N,H){Le.get(C.texture).__webglTexture=N,Le.get(C.depthTexture).__webglTexture=H;const G=Le.get(C);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,N){const H=Le.get(C);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(C,N=0,H=0){E=C,R=N,T=H;let G=!0,U=null,ae=!1,de=!1;if(C){const ye=Le.get(C);ye.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(D.FRAMEBUFFER,null),G=!1):ye.__webglFramebuffer===void 0?Ie.setupRenderTarget(C):ye.__hasExternalTextures&&Ie.rebindTextures(C,Le.get(C.texture).__webglTexture,Le.get(C.depthTexture).__webglTexture);const Ce=C.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(de=!0);const Pe=Le.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Pe[N])?U=Pe[N][H]:U=Pe[N],ae=!0):C.samples>0&&Ie.useMultisampledRTT(C)===!1?U=Le.get(C).__webglMultisampledFramebuffer:Array.isArray(Pe)?U=Pe[H]:U=Pe,y.copy(C.viewport),P.copy(C.scissor),B=C.scissorTest}else y.copy(Q).multiplyScalar(K).floor(),P.copy(oe).multiplyScalar(K).floor(),B=xe;if(Se.bindFramebuffer(D.FRAMEBUFFER,U)&&G&&Se.drawBuffers(C,U),Se.viewport(y),Se.scissor(P),Se.setScissorTest(B),ae){const ye=Le.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,ye.__webglTexture,H)}else if(de){const ye=Le.get(C.texture),Ce=N||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.__webglTexture,H||0,Ce)}b=-1},this.readRenderTargetPixels=function(C,N,H,G,U,ae,de){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Le.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&de!==void 0&&(ve=ve[de]),ve){Se.bindFramebuffer(D.FRAMEBUFFER,ve);try{const ye=C.texture,Ce=ye.format,Pe=ye.type;if(!$e.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=C.width-G&&H>=0&&H<=C.height-U&&D.readPixels(N,H,G,U,Re.convert(Ce),Re.convert(Pe),ae)}finally{const ye=E!==null?Le.get(E).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(C,N,H,G,U,ae,de){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Le.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&de!==void 0&&(ve=ve[de]),ve){Se.bindFramebuffer(D.FRAMEBUFFER,ve);try{const ye=C.texture,Ce=ye.format,Pe=ye.type;if(!$e.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=C.width-G&&H>=0&&H<=C.height-U){const Te=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.bufferData(D.PIXEL_PACK_BUFFER,ae.byteLength,D.STREAM_READ),D.readPixels(N,H,G,U,Re.convert(Ce),Re.convert(Pe),0),D.flush();const qe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await LM(D,qe,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ae)}finally{D.deleteBuffer(Te),D.deleteSync(qe)}return ae}}finally{const ye=E!==null?Le.get(E).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,ye)}}},this.copyFramebufferToTexture=function(C,N=null,H=0){C.isTexture!==!0&&(Bs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,C=arguments[1]);const G=Math.pow(2,-H),U=Math.floor(C.image.width*G),ae=Math.floor(C.image.height*G),de=N!==null?N.x:0,ve=N!==null?N.y:0;Ie.setTexture2D(C,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,de,ve,U,ae),Se.unbindTexture()},this.copyTextureToTexture=function(C,N,H=null,G=null,U=0){C.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,C=arguments[1],N=arguments[2],U=arguments[3]||0,H=null);let ae,de,ve,ye,Ce,Pe;H!==null?(ae=H.max.x-H.min.x,de=H.max.y-H.min.y,ve=H.min.x,ye=H.min.y):(ae=C.image.width,de=C.image.height,ve=0,ye=0),G!==null?(Ce=G.x,Pe=G.y):(Ce=0,Pe=0);const Te=Re.convert(N.format),qe=Re.convert(N.type);Ie.setTexture2D(N,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const dt=D.getParameter(D.UNPACK_ROW_LENGTH),ht=D.getParameter(D.UNPACK_IMAGE_HEIGHT),sn=D.getParameter(D.UNPACK_SKIP_PIXELS),Ke=D.getParameter(D.UNPACK_SKIP_ROWS),Ee=D.getParameter(D.UNPACK_SKIP_IMAGES),Nt=C.isCompressedTexture?C.mipmaps[U]:C.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Nt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Nt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ve),D.pixelStorei(D.UNPACK_SKIP_ROWS,ye),C.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,U,Ce,Pe,ae,de,Te,qe,Nt.data):C.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,U,Ce,Pe,Nt.width,Nt.height,Te,Nt.data):D.texSubImage2D(D.TEXTURE_2D,U,Ce,Pe,ae,de,Te,qe,Nt),D.pixelStorei(D.UNPACK_ROW_LENGTH,dt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ht),D.pixelStorei(D.UNPACK_SKIP_PIXELS,sn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ke),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ee),U===0&&N.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(C,N,H=null,G=null,U=0){C.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,C=arguments[2],N=arguments[3],U=arguments[4]||0);let ae,de,ve,ye,Ce,Pe,Te,qe,dt;const ht=C.isCompressedTexture?C.mipmaps[U]:C.image;H!==null?(ae=H.max.x-H.min.x,de=H.max.y-H.min.y,ve=H.max.z-H.min.z,ye=H.min.x,Ce=H.min.y,Pe=H.min.z):(ae=ht.width,de=ht.height,ve=ht.depth,ye=0,Ce=0,Pe=0),G!==null?(Te=G.x,qe=G.y,dt=G.z):(Te=0,qe=0,dt=0);const sn=Re.convert(N.format),Ke=Re.convert(N.type);let Ee;if(N.isData3DTexture)Ie.setTexture3D(N,0),Ee=D.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)Ie.setTexture2DArray(N,0),Ee=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const Nt=D.getParameter(D.UNPACK_ROW_LENGTH),Ze=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Rn=D.getParameter(D.UNPACK_SKIP_PIXELS),Br=D.getParameter(D.UNPACK_SKIP_ROWS),an=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ht.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ht.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ye),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ce),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Pe),C.isDataTexture||C.isData3DTexture?D.texSubImage3D(Ee,U,Te,qe,dt,ae,de,ve,sn,Ke,ht.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(Ee,U,Te,qe,dt,ae,de,ve,sn,ht.data):D.texSubImage3D(Ee,U,Te,qe,dt,ae,de,ve,sn,Ke,ht),D.pixelStorei(D.UNPACK_ROW_LENGTH,Nt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ze),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Rn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Br),D.pixelStorei(D.UNPACK_SKIP_IMAGES,an),U===0&&N.generateMipmaps&&D.generateMipmap(Ee),Se.unbindTexture()},this.initRenderTarget=function(C){Le.get(C).__webglFramebuffer===void 0&&Ie.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Ie.setTextureCube(C,0):C.isData3DTexture?Ie.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Ie.setTexture2DArray(C,0):Ie.setTexture2D(C,0),Se.unbindTexture()},this.resetState=function(){R=0,T=0,E=null,Se.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Sh?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===Ac?"display-p3":"srgb"}}class HA extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class rv extends ts{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const oc=new O,sc=new O,Wm=new mt,vs=new Eh,ol=new Cc,Nu=new O,Xm=new O;class VA extends Ct{constructor(e=new Ei,n=new rv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,o=n.count;r<o;r++)oc.fromBufferAttribute(n,r-1),sc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=oc.distanceTo(sc);e.setAttribute("lineDistance",new zn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ol.copy(i.boundingSphere),ol.applyMatrix4(r),ol.radius+=o,e.ray.intersectsSphere(ol)===!1)return;Wm.copy(r).invert(),vs.copy(e.ray).applyMatrix4(Wm);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=i.index,d=i.attributes.position;if(f!==null){const p=Math.max(0,s.start),_=Math.min(f.count,s.start+s.count);for(let x=p,m=_-1;x<m;x+=c){const u=f.getX(x),g=f.getX(x+1),v=sl(this,e,vs,l,u,g);v&&n.push(v)}if(this.isLineLoop){const x=f.getX(_-1),m=f.getX(p),u=sl(this,e,vs,l,x,m);u&&n.push(u)}}else{const p=Math.max(0,s.start),_=Math.min(d.count,s.start+s.count);for(let x=p,m=_-1;x<m;x+=c){const u=sl(this,e,vs,l,x,x+1);u&&n.push(u)}if(this.isLineLoop){const x=sl(this,e,vs,l,_-1,p);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function sl(t,e,n,i,r,o){const s=t.geometry.attributes.position;if(oc.fromBufferAttribute(s,r),sc.fromBufferAttribute(s,o),n.distanceSqToSegment(oc,sc,Nu,Xm)>i)return;Nu.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Nu);if(!(l<e.near||l>e.far))return{distance:l,point:Xm.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}const jm=new O,Ym=new O;class GA extends VA{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,o=n.count;r<o;r+=2)jm.fromBufferAttribute(n,r),Ym.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+jm.distanceTo(Ym);e.setAttribute("lineDistance",new zn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class WA extends ts{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=k_,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ah extends Ct{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Uu=new mt,$m=new O,qm=new O;class ov{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wh,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;$m.setFromMatrixPosition(e.matrixWorld),n.position.copy($m),qm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(qm),n.updateMatrixWorld(),Uu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Uu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class XA extends ov{constructor(){super(new fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,i=qo*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,o=e.distance||n.far;(i!==n.fov||r!==n.aspect||o!==n.far)&&(n.fov=i,n.aspect=r,n.far=o,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class jA extends Ah{constructor(e,n,i=0,r=Math.PI/3,o=0,s=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.distance=i,this.angle=r,this.penumbra=o,this.decay=s,this.map=null,this.shadow=new XA}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class YA extends ov{constructor(){super(new Q_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $A extends Ah{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new YA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class qA extends Ah{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Km{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Gt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class KA extends GA{constructor(e=10,n=10,i=4473924,r=8947848){i=new Ve(i),r=new Ve(r);const o=n/2,s=e/n,a=e/2,l=[],c=[];for(let d=0,p=0,_=-a;d<=n;d++,_+=s){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const x=d===o?i:r;x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3}const f=new Ei;f.setAttribute("position",new zn(l,3)),f.setAttribute("color",new zn(c,3));const h=new rv({vertexColors:!0,toneMapped:!1});super(f,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hh);const Zm={type:"change"},Fu={type:"start"},Qm={type:"end"},al=new Eh,Jm=new Ui,ZA=Math.cos(70*bM.DEG2RAD);class QA extends kr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vr.ROTATE,MIDDLE:Vr.DOLLY,RIGHT:Vr.PAN},this.touches={ONE:Gr.ROTATE,TWO:Gr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(S){S.addEventListener("keydown",he),this._domElementKeyEvents=S},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",he),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Zm),i.update(),o=r.NONE},this.update=function(){const S=new O,k=new Nr().setFromUnitVectors(e.up,new O(0,1,0)),z=k.clone().invert(),X=new O,te=new Nr,Me=new O,be=2*Math.PI;return function(Mt=null){const Xe=i.object.position;S.copy(Xe).sub(i.target),S.applyQuaternion(k),a.setFromVector3(S),i.autoRotate&&o===r.NONE&&B(y(Mt)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Et=i.minAzimuthAngle,vt=i.maxAzimuthAngle;isFinite(Et)&&isFinite(vt)&&(Et<-Math.PI?Et+=be:Et>Math.PI&&(Et-=be),vt<-Math.PI?vt+=be:vt>Math.PI&&(vt-=be),Et<=vt?a.theta=Math.max(Et,Math.min(vt,a.theta)):a.theta=a.theta>(Et+vt)/2?Math.max(Et,a.theta):Math.min(vt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let wi=!1;if(i.zoomToCursor&&T||i.object.isOrthographicCamera)a.radius=Q(a.radius);else{const It=a.radius;a.radius=Q(a.radius*c),wi=It!=a.radius}if(S.setFromSpherical(a),S.applyQuaternion(z),Xe.copy(i.target).add(S),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),f.set(0,0,0)),i.zoomToCursor&&T){let It=null;if(i.object.isPerspectiveCamera){const ti=S.length();It=Q(ti*c);const sr=ti-It;i.object.position.addScaledVector(M,sr),i.object.updateMatrixWorld(),wi=!!sr}else if(i.object.isOrthographicCamera){const ti=new O(R.x,R.y,0);ti.unproject(i.object);const sr=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),wi=sr!==i.object.zoom;const rs=new O(R.x,R.y,0);rs.unproject(i.object),i.object.position.sub(rs).add(ti),i.object.updateMatrixWorld(),It=S.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;It!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(It).add(i.object.position):(al.origin.copy(i.object.position),al.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(al.direction))<ZA?e.lookAt(i.target):(Jm.setFromNormalAndCoplanarPoint(i.object.up,i.target),al.intersectPlane(Jm,i.target))))}else if(i.object.isOrthographicCamera){const It=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),It!==i.object.zoom&&(i.object.updateProjectionMatrix(),wi=!0)}return c=1,T=!1,wi||X.distanceToSquared(i.object.position)>s||8*(1-te.dot(i.object.quaternion))>s||Me.distanceToSquared(i.target)>s?(i.dispatchEvent(Zm),X.copy(i.object.position),te.copy(i.object.quaternion),Me.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",pe),i.domElement.removeEventListener("pointerdown",Ie),i.domElement.removeEventListener("pointercancel",w),i.domElement.removeEventListener("wheel",ie),i.domElement.removeEventListener("pointermove",L),i.domElement.removeEventListener("pointerup",w),i.domElement.getRootNode().removeEventListener("keydown",we,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",he),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const s=1e-6,a=new Km,l=new Km;let c=1;const f=new O,h=new Ne,d=new Ne,p=new Ne,_=new Ne,x=new Ne,m=new Ne,u=new Ne,g=new Ne,v=new Ne,M=new O,R=new Ne;let T=!1;const E=[],b={};let A=!1;function y(S){return S!==null?2*Math.PI/60*i.autoRotateSpeed*S:2*Math.PI/60/60*i.autoRotateSpeed}function P(S){const k=Math.abs(S*.01);return Math.pow(.95,i.zoomSpeed*k)}function B(S){l.theta-=S}function F(S){l.phi-=S}const j=function(){const S=new O;return function(z,X){S.setFromMatrixColumn(X,0),S.multiplyScalar(-z),f.add(S)}}(),Y=function(){const S=new O;return function(z,X){i.screenSpacePanning===!0?S.setFromMatrixColumn(X,1):(S.setFromMatrixColumn(X,0),S.crossVectors(i.object.up,S)),S.multiplyScalar(z),f.add(S)}}(),V=function(){const S=new O;return function(z,X){const te=i.domElement;if(i.object.isPerspectiveCamera){const Me=i.object.position;S.copy(Me).sub(i.target);let be=S.length();be*=Math.tan(i.object.fov/2*Math.PI/180),j(2*z*be/te.clientHeight,i.object.matrix),Y(2*X*be/te.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(j(z*(i.object.right-i.object.left)/i.object.zoom/te.clientWidth,i.object.matrix),Y(X*(i.object.top-i.object.bottom)/i.object.zoom/te.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function K(S){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function I(S){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Z(S,k){if(!i.zoomToCursor)return;T=!0;const z=i.domElement.getBoundingClientRect(),X=S-z.left,te=k-z.top,Me=z.width,be=z.height;R.x=X/Me*2-1,R.y=-(te/be)*2+1,M.set(R.x,R.y,1).unproject(i.object).sub(i.object.position).normalize()}function Q(S){return Math.max(i.minDistance,Math.min(i.maxDistance,S))}function oe(S){h.set(S.clientX,S.clientY)}function xe(S){Z(S.clientX,S.clientX),u.set(S.clientX,S.clientY)}function He(S){_.set(S.clientX,S.clientY)}function q(S){d.set(S.clientX,S.clientY),p.subVectors(d,h).multiplyScalar(i.rotateSpeed);const k=i.domElement;B(2*Math.PI*p.x/k.clientHeight),F(2*Math.PI*p.y/k.clientHeight),h.copy(d),i.update()}function ne(S){g.set(S.clientX,S.clientY),v.subVectors(g,u),v.y>0?K(P(v.y)):v.y<0&&I(P(v.y)),u.copy(g),i.update()}function ue(S){x.set(S.clientX,S.clientY),m.subVectors(x,_).multiplyScalar(i.panSpeed),V(m.x,m.y),_.copy(x),i.update()}function fe(S){Z(S.clientX,S.clientY),S.deltaY<0?I(P(S.deltaY)):S.deltaY>0&&K(P(S.deltaY)),i.update()}function Ue(S){let k=!1;switch(S.code){case i.keys.UP:S.ctrlKey||S.metaKey||S.shiftKey?F(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(0,i.keyPanSpeed),k=!0;break;case i.keys.BOTTOM:S.ctrlKey||S.metaKey||S.shiftKey?F(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(0,-i.keyPanSpeed),k=!0;break;case i.keys.LEFT:S.ctrlKey||S.metaKey||S.shiftKey?B(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(i.keyPanSpeed,0),k=!0;break;case i.keys.RIGHT:S.ctrlKey||S.metaKey||S.shiftKey?B(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(-i.keyPanSpeed,0),k=!0;break}k&&(S.preventDefault(),i.update())}function Oe(S){if(E.length===1)h.set(S.pageX,S.pageY);else{const k=De(S),z=.5*(S.pageX+k.x),X=.5*(S.pageY+k.y);h.set(z,X)}}function ze(S){if(E.length===1)_.set(S.pageX,S.pageY);else{const k=De(S),z=.5*(S.pageX+k.x),X=.5*(S.pageY+k.y);_.set(z,X)}}function tt(S){const k=De(S),z=S.pageX-k.x,X=S.pageY-k.y,te=Math.sqrt(z*z+X*X);u.set(0,te)}function D(S){i.enableZoom&&tt(S),i.enablePan&&ze(S)}function ut(S){i.enableZoom&&tt(S),i.enableRotate&&Oe(S)}function Ye(S){if(E.length==1)d.set(S.pageX,S.pageY);else{const z=De(S),X=.5*(S.pageX+z.x),te=.5*(S.pageY+z.y);d.set(X,te)}p.subVectors(d,h).multiplyScalar(i.rotateSpeed);const k=i.domElement;B(2*Math.PI*p.x/k.clientHeight),F(2*Math.PI*p.y/k.clientHeight),h.copy(d)}function $e(S){if(E.length===1)x.set(S.pageX,S.pageY);else{const k=De(S),z=.5*(S.pageX+k.x),X=.5*(S.pageY+k.y);x.set(z,X)}m.subVectors(x,_).multiplyScalar(i.panSpeed),V(m.x,m.y),_.copy(x)}function Se(S){const k=De(S),z=S.pageX-k.x,X=S.pageY-k.y,te=Math.sqrt(z*z+X*X);g.set(0,te),v.set(0,Math.pow(g.y/u.y,i.zoomSpeed)),K(v.y),u.copy(g);const Me=(S.pageX+k.x)*.5,be=(S.pageY+k.y)*.5;Z(Me,be)}function ft(S){i.enableZoom&&Se(S),i.enablePan&&$e(S)}function Le(S){i.enableZoom&&Se(S),i.enableRotate&&Ye(S)}function Ie(S){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(S.pointerId),i.domElement.addEventListener("pointermove",L),i.domElement.addEventListener("pointerup",w)),!_e(S)&&(We(S),S.pointerType==="touch"?Fe(S):W(S)))}function L(S){i.enabled!==!1&&(S.pointerType==="touch"?se(S):ee(S))}function w(S){switch(Ae(S),E.length){case 0:i.domElement.releasePointerCapture(S.pointerId),i.domElement.removeEventListener("pointermove",L),i.domElement.removeEventListener("pointerup",w),i.dispatchEvent(Qm),o=r.NONE;break;case 1:const k=E[0],z=b[k];Fe({pointerId:k,pageX:z.x,pageY:z.y});break}}function W(S){let k;switch(S.button){case 0:k=i.mouseButtons.LEFT;break;case 1:k=i.mouseButtons.MIDDLE;break;case 2:k=i.mouseButtons.RIGHT;break;default:k=-1}switch(k){case Vr.DOLLY:if(i.enableZoom===!1)return;xe(S),o=r.DOLLY;break;case Vr.ROTATE:if(S.ctrlKey||S.metaKey||S.shiftKey){if(i.enablePan===!1)return;He(S),o=r.PAN}else{if(i.enableRotate===!1)return;oe(S),o=r.ROTATE}break;case Vr.PAN:if(S.ctrlKey||S.metaKey||S.shiftKey){if(i.enableRotate===!1)return;oe(S),o=r.ROTATE}else{if(i.enablePan===!1)return;He(S),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Fu)}function ee(S){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;q(S);break;case r.DOLLY:if(i.enableZoom===!1)return;ne(S);break;case r.PAN:if(i.enablePan===!1)return;ue(S);break}}function ie(S){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(S.preventDefault(),i.dispatchEvent(Fu),fe(J(S)),i.dispatchEvent(Qm))}function J(S){const k=S.deltaMode,z={clientX:S.clientX,clientY:S.clientY,deltaY:S.deltaY};switch(k){case 1:z.deltaY*=16;break;case 2:z.deltaY*=100;break}return S.ctrlKey&&!A&&(z.deltaY*=10),z}function we(S){S.key==="Control"&&(A=!0,i.domElement.getRootNode().addEventListener("keyup",le,{passive:!0,capture:!0}))}function le(S){S.key==="Control"&&(A=!1,i.domElement.getRootNode().removeEventListener("keyup",le,{passive:!0,capture:!0}))}function he(S){i.enabled===!1||i.enablePan===!1||Ue(S)}function Fe(S){switch(Re(S),E.length){case 1:switch(i.touches.ONE){case Gr.ROTATE:if(i.enableRotate===!1)return;Oe(S),o=r.TOUCH_ROTATE;break;case Gr.PAN:if(i.enablePan===!1)return;ze(S),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case Gr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;D(S),o=r.TOUCH_DOLLY_PAN;break;case Gr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ut(S),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Fu)}function se(S){switch(Re(S),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ye(S),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;$e(S),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ft(S),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Le(S),i.update();break;default:o=r.NONE}}function pe(S){i.enabled!==!1&&S.preventDefault()}function We(S){E.push(S.pointerId)}function Ae(S){delete b[S.pointerId];for(let k=0;k<E.length;k++)if(E[k]==S.pointerId){E.splice(k,1);return}}function _e(S){for(let k=0;k<E.length;k++)if(E[k]==S.pointerId)return!0;return!1}function Re(S){let k=b[S.pointerId];k===void 0&&(k=new Ne,b[S.pointerId]=k),k.set(S.pageX,S.pageY)}function De(S){const k=S.pointerId===E[0]?E[1]:E[0];return b[k]}i.domElement.addEventListener("contextmenu",pe),i.domElement.addEventListener("pointerdown",Ie),i.domElement.addEventListener("pointercancel",w),i.domElement.addEventListener("wheel",ie,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",we,{passive:!0,capture:!0}),this.update()}}const sv=ge.createContext(null),Io={black:"#000000",gray:"#666666",red:"#ff0000",orange:"#ff7700",yellow:"#ffff00",green:"#00ff00",teal:"#00ffff",blue:"#0000ff",purple:"#ff00ff"},Ou=["black","gray","red","orange","yellow","green","teal","blue","purple"];function Ch(){const t=ge.useContext(sv);if(!t)throw new Error("Missing AppContext");return t}function Al(t){return t?{display:"none"}:void 0}function av({className:t,title:e,options:n,value:i,setValue:r}){const o=ge.useCallback(s=>{const a=parseFloat(s.target.value);r(n[a].value)},[n,r]);return $.jsxs($.Fragment,{children:[e&&$.jsxs("div",{className:"input-title",children:[e,":"]}),$.jsx("select",{className:t,value:n.findIndex(({value:s})=>s===i),onChange:o,children:n.map(({label:s},a)=>$.jsx("option",{value:`${a}`,children:s},a))})]})}function eg({value:t,setValue:e,integer:n}){const[i,r]=ge.useState(`${t}`),o=ge.useCallback(l=>{r(l.target.value);const c=parseFloat(l.target.value);isNaN(c)||e(c)},[r,e]),s=parseFloat(i),a=isNaN(s)||n&&Math.round(s)!==s;return $.jsx("input",{className:a?"number error":"number",type:"text",value:i,onChange:o})}function tg({value:t,setValue:e}){const n=ge.useCallback(i=>{e(i.target.value)},[e]);return $.jsx("input",{className:"string",type:"text",value:t,onChange:n})}function JA({typedef:t,value:e,setValue:n}){return $.jsx($.Fragment,{children:$.jsx(Tr,{metadata:t.metadata,children:$.jsx(av,{className:"enum",options:t.enum.map(i=>({label:i,value:i})),value:e,setValue:n})})})}function No(t){if("type"in t||"enum"in t)return t.metadata.default;if("elements"in t){const e=t.metadata.default;return e===null?null:Array.from({length:e}).map(n=>No(t.elements))}else if("properties"in t){const e={};for(const n of Object.keys(t.properties))e[n]=No(t.properties[n]);return e}else if("discriminator"in t){const e=t.metadata.default;return e===null?null:No(t.mapping[e])}else if("ref"in t)throw new Error("TODO: implement ref");throw console.error(t),new Error("Unknown typedef")}function eC({schema:t,typedef:e,value:n,setValue:i}){var p;const[r,o]=ge.useState(()=>n.map((_,x)=>x)),s=ge.useCallback(()=>{i(_=>{const x=[..._];return x.push(No(e.elements)),x}),o(_=>{const x=_.reduce((u,g)=>Math.max(u,g),0)+1,m=[..._];return m.push(x),m})},[i,e]),a=ge.useCallback(_=>{const x=m=>{const u=[...m];return u.splice(_,1),u};i(x),o(x)},[i,o]),l=ge.useCallback(_=>{i(x=>{const m=[...x];return m.splice(_,0,JSON.parse(JSON.stringify(m[_]))),m}),o(x=>{const m=x.reduce((g,v)=>Math.max(g,v),0)+1,u=[...x];return u.splice(_,0,m),u})},[i,o]),c=ge.useCallback((_,x)=>{const m=u=>{const g=[...u],v=g.splice(_,1)[0];return g.splice(_+x,0,v),g};i(m),o(m)},[i,o]),[f,h]=ge.useState(!1),d=((p=e.metadata)==null?void 0:p.itemTitle)||"{}";return $.jsxs($.Fragment,{children:[$.jsx(Tr,{metadata:e.metadata,postfix:`(${n.length})`,hide:f,setHide:h}),$.jsx(vS,{children:n.map((_,x)=>$.jsxs("div",{className:"tab elements-item",style:Al(f),children:[$.jsxs("div",{className:"input-title",children:[d.replace(/\{\}/g,`${x+1}`),":",$.jsxs("div",{style:{float:"right"},children:[$.jsx("button",{title:"Move Up",disabled:x<=0,className:"elements-move",onClick:()=>{c(x,-1)},children:"↑"}),$.jsx("button",{title:"Move Down",disabled:x>=n.length-1,className:"elements-move",onClick:()=>{c(x,1)},children:"↓"}),$.jsx("button",{title:"Duplicate",className:"elements-duplicate",onClick:()=>{l(x)},children:"⊕"}),$.jsx("button",{title:"Remove",className:"elements-remove",onClick:()=>{a(x)},children:"×"})]})]}),$.jsx(Rh,{schema:t,typedef:e.elements,value:_,setValue:m=>{i(u=>{const g=[...u];return g[x]=typeof m=="function"?m(g[x]):m,g})}})]},r[x]))}),n.length<=0&&$.jsx("div",{className:"tab",style:Al(f),children:$.jsx("p",{children:$.jsx("em",{children:"Empty"})})}),$.jsx("div",{className:"tab",style:Al(f),children:$.jsx("button",{onClick:s,children:`Add ${d.replace(/\{\}/g,`${n.length+1}`)}`})})]})}function lv({schema:t,typedef:e,value:n,setValue:i,skipTitle:r,hide:o}){const[s,a]=ge.useState(!!e.metadata.startHidden);return $.jsxs($.Fragment,{children:[!r&&$.jsx(Tr,{metadata:e.metadata,hide:s,setHide:a}),e.metadata.order.map(l=>{const c=e.properties[l];return c?$.jsx("div",{className:e.metadata.untabParams&&l==="params"?void 0:"tab",style:Al(o||s),children:$.jsx(Rh,{schema:t,typedef:c,value:n[l],setValue:f=>{i(h=>({...h,[l]:typeof f=="function"?f(h[l]):f}))}})},l):$.jsxs("p",{children:["ERROR: Missing typedef for ",l]})})]})}function tC({schema:t,typedef:e,value:n,setValue:i}){const[r,o]=ge.useState(!0),s=(n==null?void 0:n[e.discriminator])??null,[a,l]=ge.useState(()=>{const h=new Map;for(const d of e.metadata.order)s===d?h.set(d,n):h.set(d,No(e.mapping[d]));return h}),c=ge.useCallback(h=>{const d=typeof h=="function"?h(s):h;i(d===null?null:a.get(d))},[s,a,i]),f=ge.useCallback(h=>{const d=typeof h=="function"?h(n):h,p=new Map(a);p.set(s,d),l(p),i(d)},[a,n,i,s,l]);return $.jsxs($.Fragment,{children:[$.jsx(Tr,{metadata:e.metadata}),$.jsxs("div",{className:"hide-wrap",children:[$.jsx(cv,{disabled:s===null,hide:s===null?!0:r,setHide:s===null?()=>{}:o}),$.jsx(av,{options:[...e.nullable?[{label:e.metadata.nullHint||"<none>",value:null}]:[],...e.metadata.order.map(h=>({label:e.mapping[h].metadata.title||h,value:h}))],value:s,setValue:c})]}),s!==null&&$.jsx(lv,{hide:r,skipTitle:!0,schema:t,typedef:e.mapping[s],value:n,setValue:f},s)]})}function cv({disabled:t,hide:e,setHide:n}){const i=ge.useCallback(()=>{n==null||n(r=>!r)},[n]);return $.jsx($.Fragment,{children:n&&$.jsx("button",{className:"hide-button",style:t?{opacity:.5}:void 0,onClick:i,children:e?"▶":"▼"})})}function Tr({metadata:{title:t,description:e},postfix:n,hide:i,setHide:r,children:o}){const{units:s}=Ch(),a=t==null?void 0:t.replace(/\(units\)/g,`(${s})`),l=e==null?void 0:e.replace(/\(units\)/g,`(${s})`);return $.jsx($.Fragment,{children:a&&$.jsxs("div",{className:r?"input-title hide-wrap":"input-title",children:[r&&$.jsx(cv,{hide:i,setHide:r}),$.jsxs("div",{className:"title",children:[$.jsx("span",{style:r?{cursor:"pointer",userSelect:"none"}:void 0,onClick:r?()=>{r(!i)}:void 0,children:n?`${a} ${n}`:a}),l&&$.jsxs($.Fragment,{children:[" ",$.jsx("span",{className:"description",onClick:()=>{alert(l)},title:l,children:"ⓘ"})]}),":",o&&$.jsxs($.Fragment,{children:[" ",o]})]})]})})}function Rh({schema:t,typedef:e,value:n,setValue:i}){if("type"in e)switch(e.type){case"float64":case"int32":return $.jsx(Tr,{metadata:e.metadata,children:e.nullable?$.jsxs($.Fragment,{children:[n===null?$.jsx("input",{className:"number",type:"text",disabled:!0,value:e.metadata.nullHint||"null"}):$.jsx(eg,{value:n,setValue:i,integer:e.type==="int32"}),$.jsx("input",{className:"nullable",type:"checkbox",checked:n!==null,onChange:()=>{i(n===null?e.metadata.defaultNotNull??0:null)}})]}):$.jsx(eg,{value:n,setValue:i,integer:e.type==="int32"})});case"string":return $.jsx(Tr,{metadata:e.metadata,children:e.nullable?$.jsxs($.Fragment,{children:[n===null?$.jsx("input",{className:"number",type:"text",disabled:!0,value:e.metadata.nullHint||"null"}):$.jsx(tg,{value:n,setValue:i}),$.jsx("input",{className:"nullable",type:"checkbox",checked:n!==null,onChange:()=>{i(n===null?e.metadata.defaultNotNull??"":null)}})]}):$.jsx(tg,{value:n,setValue:i})});case"boolean":return $.jsx($.Fragment,{children:$.jsx(Tr,{metadata:e.metadata,children:$.jsxs("div",{className:"boolean",children:[$.jsx("button",{className:n?"selected":void 0,onClick:()=>{i(!0)},children:"Yes"})," ",$.jsx("button",{className:n?void 0:"selected",onClick:()=>{i(!1)},children:"No"})]})})})}else{if("enum"in e)return $.jsx(JA,{schema:t,typedef:e,value:n,setValue:i});if("elements"in e)return $.jsx(eC,{schema:t,typedef:e,value:n,setValue:i});if("properties"in e)return $.jsx(lv,{schema:t,typedef:e,value:n,setValue:i});if("discriminator"in e)return $.jsx(tC,{schema:t,typedef:e,value:n,setValue:i});"ref"in e&&console.error("TODO: implement ref")}return $.jsxs("p",{children:["ERROR: Unknown JSON type def! ",$.jsx("pre",{children:JSON.stringify(e)})]})}function nC({schema:t,value:e,setValue:n}){return $.jsx(Rh,{schema:t,typedef:t,value:e,setValue:n})}class ng{constructor(e){zr(this,"m");e?this.m=[e.m[0],e.m[1],e.m[2],e.m[3],e.m[4],e.m[5]]:this.m=[1,0,0,1,0,0]}reset(){this.m[0]=1,this.m[1]=0,this.m[2]=0,this.m[3]=1,this.m[4]=0,this.m[5]=0}copy(e){this.m[0]=e.m[0],this.m[1]=e.m[1],this.m[2]=e.m[2],this.m[3]=e.m[3],this.m[4]=e.m[4],this.m[5]=e.m[5]}multiply(e){const n=this.m[0]*e.m[0]+this.m[2]*e.m[1],i=this.m[1]*e.m[0]+this.m[3]*e.m[1],r=this.m[0]*e.m[2]+this.m[2]*e.m[3],o=this.m[1]*e.m[2]+this.m[3]*e.m[3],s=this.m[0]*e.m[4]+this.m[2]*e.m[5]+this.m[4],a=this.m[1]*e.m[4]+this.m[3]*e.m[5]+this.m[5];this.m[0]=n,this.m[1]=i,this.m[2]=r,this.m[3]=o,this.m[4]=s,this.m[5]=a}invert(){const e=1/(this.m[0]*this.m[3]-this.m[1]*this.m[2]),n=this.m[3]*e,i=-this.m[1]*e,r=-this.m[2]*e,o=this.m[0]*e,s=e*(this.m[2]*this.m[5]-this.m[3]*this.m[4]),a=e*(this.m[1]*this.m[4]-this.m[0]*this.m[5]);this.m[0]=n,this.m[1]=i,this.m[2]=r,this.m[3]=o,this.m[4]=s,this.m[5]=a}rotate(e){const n=Math.cos(e),i=Math.sin(e),r=this.m[0]*n+this.m[2]*i,o=this.m[1]*n+this.m[3]*i,s=this.m[0]*-i+this.m[2]*n,a=this.m[1]*-i+this.m[3]*n;this.m[0]=r,this.m[1]=o,this.m[2]=s,this.m[3]=a}translate(e){this.m[4]+=this.m[0]*e[0]+this.m[2]*e[1],this.m[5]+=this.m[1]*e[0]+this.m[3]*e[1]}translateXY(e,n){this.m[4]+=this.m[0]*e+this.m[2]*n,this.m[5]+=this.m[1]*e+this.m[3]*n}scale(e){this.m[0]*=e,this.m[1]*=e,this.m[2]*=e,this.m[3]*=e}transformPoint(e){return[e[0]*this.m[0]+e[1]*this.m[2]+this.m[4],e[0]*this.m[1]+e[1]*this.m[3]+this.m[5]]}}class iC{constructor(){zr(this,"center",[0,0]);zr(this,"zoom",0);zr(this,"transform",new ng);zr(this,"transformInvert",new ng)}zoomFactor(){return Math.pow(2,this.zoom)}calc(e,n){return this.transform.reset(),this.transform.translateXY(e/2,n/2),this.transform.scale(this.zoomFactor()),this.transform.translateXY(-this.center[0],-this.center[1]),this.transformInvert.copy(this.transform),this.transformInvert.invert(),this}screenToPoint(e){return this.transformInvert.transformPoint(e)}pointToScreen(e){return this.transform.transformPoint(e)}copyToContext(e){return e.setTransform(this.transform.m[0],this.transform.m[1],this.transform.m[2],this.transform.m[3],this.transform.m[4],this.transform.m[5]),this}}function rC(t,e,n,i,r,o){const s=a=>{t.fillText(a,n,i),i+=o};for(const a of e.split(`
`))if(t.measureText(a).width<r)s(a);else{const l=a.split(" ");for(let f=0;f<l.length;f++){let h=l[f],d="";for(;h.length>1&&t.measureText(h).width>=r;){const p=h.substr(-1);h=h.substr(0,h.length-1),d=p+d}d&&(l[f]=h,l.splice(f+1,0,d))}let c="";for(;;){const f=l.shift();if(typeof f>"u")break;c?t.measureText(`${c} ${f}`).width<r?c+=` ${f}`:(s(c),c=f):c=f}s(c)}}function xs(t,e,{offset:n,commands:i}){t.beginPath(),t.moveTo(n[0],n[1]);for(const r of i)switch(r.kind){case"L":t.lineTo(n[0]+r.to[0],n[1]+r.to[1]);break;case"C":t.bezierCurveTo(n[0]+r.c1[0],n[1]+r.c1[1],n[0]+r.c2[0],n[1]+r.c2[1],n[0]+r.to[0],n[1]+r.to[1]);break}e&&t.closePath()}function oC({grid:t,units:e,items:n,error:i,onView:r,onGrid:o}){const[s,a]=ge.useState(null),l=ge.useCallback(m=>{a(m)},[a]),c=ge.useMemo(()=>{if(!s)return null;const m=new HA;m.background=new Ve(14935789);const u=new fn(75,1,.1,1e3),g=new zA;g.setSize(200,200);const v=new ns(1,1,1),M=new WA({color:new Ve(14532253),side:$n}),R=new Kn(v,M);R.rotation.x+=.4,R.rotation.y+=.4,m.add(R),m.add(new qA(15790320,1));const T=new jA(16777215,2);T.position.set(0,150,0),T.angle=Math.PI*.2,T.decay=0,m.add(T);const E=new $A(16777215,2);m.add(E);const b=new KA(2e3,100,new Ve(8947848),new Ve(13421772));b.position.y=-9,m.add(b),u.position.set(0,0,2);const A=new QA(u,s);return{scene:m,camera:u,renderer:g,light:T,dlight:E,controls:A}},[s]),f=ge.useMemo(()=>s==null?void 0:s.getContext("2d"),[s]),h=window.devicePixelRatio||1,{debug:d}=Ch(),p=ge.useCallback(()=>{!s||!f||!c||(f.setTransform(1,0,0,1,0,0),f.clearRect(0,0,s.width,s.height),c.dlight.position.set(c.camera.position.x+.32,c.camera.position.y+.39,c.camera.position.z-1.3),c.renderer.render(c.scene,c.camera),f.drawImage(c.renderer.domElement,0,0,s.width,s.height))},[s,f,n,t,h,i,e,d,c]);ge.useEffect(()=>{p()},[p]);const _=ge.useCallback(()=>{s&&p()},[s,p]),x=ge.useRef(!0);return ge.useEffect(()=>{if(!s||!f||!c)return;const m=()=>{const u=s.parentElement;if(u){const g=Math.floor(u.clientWidth),v=Math.floor(u.clientHeight);s.width=g*h,s.height=v*h,c.renderer.setPixelRatio(h),c.renderer.setSize(g,v),c.camera.aspect=g/v,c.camera.updateProjectionMatrix(),s.style.width=`${g}px`,s.style.height=`${v}px`,x.current?(x.current=!1,_()):p()}};return window.addEventListener("resize",m),m(),c.controls.addEventListener("change",p),()=>{c.controls.dispose(),window.removeEventListener("resize",m)}},[s,_,x,h,p,c]),$.jsxs($.Fragment,{children:[$.jsx("canvas",{ref:l}),$.jsxs("div",{className:"status",children:[$.jsx("button",{onClick:r,children:"View: 3D (WIP)"}),$.jsxs("button",{onClick:o,children:["Grid: ",t?"On":"Off"]}),$.jsx("button",{onClick:_,children:"Center"})]})]})}function sC({grid:t,units:e,items:n,error:i,onView:r,onGrid:o}){const[s,a]=ge.useState(null),l=ge.useCallback(m=>{a(m)},[a]),c=ge.useMemo(()=>s==null?void 0:s.getContext("2d"),[s]),f=window.devicePixelRatio||1,h=ge.useMemo(()=>new iC,[]),{debug:d}=Ch(),p=ge.useCallback(()=>{if(!(!s||!c)){if(c.setTransform(1,0,0,1,0,0),c.clearRect(0,0,s.width,s.height),h.calc(s.width,s.height).copyToContext(c),t){const m=h.screenToPoint([0,0]),u=h.screenToPoint([s.width,s.height]),g=s.width/(u[0]-m[0]),M=15*f/g,R=Math.pow(10,Math.round(Math.log10(M)));c.lineWidth=f/h.zoomFactor();const T=Math.round(m[0]/R)-1,E=Math.round(u[0]/R)+1,b=Math.round(m[1]/R)-1,A=Math.round(u[1]/R)+1;c.beginPath();for(let y=T;y<=E;y++)y%10!==0&&(c.moveTo(y*R,m[1]),c.lineTo(y*R,u[1]));for(let y=b;y<=A;y++)y%10!==0&&(c.moveTo(m[0],y*R),c.lineTo(u[0],y*R));c.strokeStyle="#ccc",c.stroke(),c.beginPath();for(let y=T;y<=E;y++)y%10===0&&(c.moveTo(y*R,m[1]),c.lineTo(y*R,u[1]));for(let y=b;y<=A;y++)y%10===0&&(c.moveTo(m[0],y*R),c.lineTo(u[0],y*R));c.strokeStyle="#888",c.stroke(),c.save(),c.setTransform(f,0,0,f,0,0),c.font="18px/18px sans-serif",c.fillStyle="#000",c.fillText(`Grid size: ${R}${e}`,10,s.height/f-17),c.restore()}if(d){for(const{surface:m,offset:u}of n){const g=m.kerf();if(g>0){xs(c,!0,ws(u,m.border,g)),c.lineWidth=4*f/h.zoomFactor(),c.strokeStyle="#77440077",c.stroke();for(const v of m.holes)xs(c,!0,ws([u[0]+v.offset[0],u[1]+v.offset[1]],v.commands,g)),c.lineWidth=4*f/h.zoomFactor(),c.strokeStyle="#44007777",c.stroke()}}for(const{offset:m,boundingBox:u}of n)c.beginPath(),c.rect(m[0]+u[0][0],m[1]+u[0][1],u[1][0]-u[0][0],u[1][1]-u[0][1]),c.lineWidth=6*f/h.zoomFactor(),c.strokeStyle="#0cc",c.stroke()}for(const m of n){const{surface:u,offset:g}=m;xs(c,!0,{offset:g,commands:u.border}),c.lineWidth=3*f/h.zoomFactor(),c.strokeStyle=Io[m.cutColor],c.stroke();for(const v of u.holes)xs(c,!0,{offset:[g[0]+v.offset[0],g[1]+v.offset[1]],commands:v.commands}),c.lineWidth=3*f/h.zoomFactor(),c.strokeStyle=Io[m.holeColor],c.stroke();for(const v of u.scores)xs(c,!1,{offset:[g[0]+v.offset[0],g[1]+v.offset[1]],commands:v.commands}),c.lineWidth=3*f/h.zoomFactor(),c.strokeStyle=Io[m.scoreColor],c.stroke()}if(d)for(const m of n){const{surface:u,offset:g}=m,v=(R,T,E)=>{c.beginPath(),c.arc(R,T,2*f/h.zoomFactor(),0,Math.PI*2),c.fillStyle=E,c.fill()},M=(R,T,E)=>{for(const b of T)switch(b.kind){case"L":v(R[0]+b.to[0],R[1]+b.to[1],E);break;case"C":v(R[0]+b.c1[0],R[1]+b.c1[1],E),v(R[0]+b.c2[0],R[1]+b.c2[1],E),v(R[0]+b.to[0],R[1]+b.to[1],E);break}};M(g,u.border,"#07f");for(const{surface:R,offset:T}of n){const E=R.kerf();if(E>0){const b=ws(T,R.border,E);M(b.offset,b.commands,"#07f");for(const A of R.holes){const y=ws([T[0]+A.offset[0],T[1]+A.offset[1]],A.commands,E);M(y.offset,y.commands,"#0f7")}}}for(const R of u.holes)M([g[0]+R.offset[0],g[1]+R.offset[1]],R.commands,"#0f7")}i&&(c.save(),c.setTransform(f,0,0,f,0,0),c.font="bold 22px/22px sans-serif",c.fillStyle="#f00",rC(c,i,10,32,s.width/f-20,26),c.restore())}},[s,c,h,n,t,f,i,e,d]);ge.useEffect(()=>{p()},[p]);const _=ge.useCallback(()=>{if(!s)return;const m=[[0,0],[0,0]];for(const R of n){const T=R.offset[0]+R.boundingBox[0][0],E=R.offset[1]+R.boundingBox[0][1];m[0][0]=Math.min(m[0][0],T),m[0][1]=Math.min(m[0][1],E),m[1][0]=Math.max(m[1][0],T+R.boundingBoxSize[0]),m[1][1]=Math.max(m[1][1],E+R.boundingBoxSize[1])}h.center[0]=(m[0][0]+m[1][0])/2,h.center[1]=(m[0][1]+m[1][1])/2;const u=20,g=s.width/(m[1][0]-m[0][0]+2*u),v=s.height/(m[1][1]-m[0][1]+2*u),M=Math.min(g,v);h.zoom=Math.log2(M),p()},[s,h,p,n]),x=ge.useRef(!0);return ge.useEffect(()=>{if(!s||!c)return;const m=()=>{const y=s.parentElement;if(y){const P=Math.floor(y.clientWidth),B=Math.floor(y.clientHeight);s.width=P*f,s.height=B*f,s.style.width=`${P}px`,s.style.height=`${B}px`,x.current?(x.current=!1,_()):p()}};let u=null;const g=y=>{const P=s.getBoundingClientRect();return[f*(y.clientX-P.left),f*(y.clientY-P.top)]},v=y=>{if(u){const P=h.screenToPoint(y),B=h.screenToPoint(u.pos);u.pos=y,h.center[0]+=B[0]-P[0],h.center[1]+=B[1]-P[1],p()}},M=y=>{u=null},R=y=>{y.preventDefault();const P=g(y);u={buttons:y.buttons,pos:P},v(P)},T=y=>{y.preventDefault(),v(g(y))},E=y=>{y.preventDefault(),u&&M(g(y))},b=y=>{y.preventDefault(),u&&M(g(y))},A=y=>{y.preventDefault();const P=g(y),B=h.screenToPoint(P);h.zoom-=y.deltaY*.003,h.calc(s.width,s.height);const F=h.screenToPoint(P);h.center[0]-=F[0]-B[0],h.center[1]-=F[1]-B[1],p()};return s.addEventListener("mousedown",R),s.addEventListener("mousemove",T),s.addEventListener("mouseout",E),s.addEventListener("mouseup",b),s.addEventListener("wheel",A),window.addEventListener("resize",m),m(),()=>{s.removeEventListener("mousedown",R),s.removeEventListener("mousemove",T),s.removeEventListener("mouseout",E),s.removeEventListener("mouseup",b),s.removeEventListener("wheel",A),window.removeEventListener("resize",m)}},[s,h,_,x,f,p]),$.jsxs($.Fragment,{children:[$.jsx("canvas",{ref:l}),$.jsxs("div",{className:"status",children:[$.jsx("button",{onClick:r,children:"View: 2D"}),$.jsxs("button",{onClick:o,children:["Grid: ",t?"On":"Off"]}),$.jsx("button",{onClick:_,children:"Center"})]})]})}function ig({value:t,onCancel:e,onImport:n}){const[i,r]=ge.useState(t),o=ge.useCallback(a=>{r(a.currentTarget.value)},[r]),s=ge.useCallback(a=>{a.stopPropagation()},[]);return $.jsxs($.Fragment,{children:[$.jsx("div",{className:"modal-background",onClick:e}),$.jsx("div",{className:"modal-foreground",onClick:e,children:$.jsxs("div",{className:"inner",onClick:s,children:[$.jsx("button",{className:"close",type:"button",onClick:e,children:"×"}),n?$.jsx("p",{children:"Paste your settings below:"}):$.jsx("p",{children:"Copy your settings below:"}),$.jsx("textarea",{value:i,onChange:o,readOnly:!n,spellCheck:!1}),n&&$.jsx("button",{className:"import",onClick:()=>{try{n(JSON.parse(i))}catch(a){console.error(a),alert("Invalid settings")}},children:"⍈ Import"})]})})]})}function aC(){const t=ge.useMemo(()=>({definitions:{},properties:{version:{type:"int32",metadata:{default:1}},settings:{...Ia,properties:{...Ia.properties,itemSpacing:{type:"float64",metadata:{default:10,title:"Item Spacing (units)"}}},metadata:{...Ia.metadata,order:["itemSpacing",...Ia.metadata.order]}},generators:{elements:{discriminator:"kind",mapping:su.map(P=>({[P.name()]:{properties:{kind:{type:"string",metadata:{default:P.name(),title:P.name()}},colors:{properties:{cutColor:{enum:Ou,metadata:{default:"black",title:"Cut Color"}},holeColor:{enum:Ou,metadata:{default:"blue",title:"Hole Color"}},scoreColor:{enum:Ou,metadata:{default:"red",title:"Score Color"}}},metadata:{title:"Colors",order:["cutColor","holeColor","scoreColor"],startHidden:!0}},params:P.schema()},metadata:{order:["colors","params"],untabParams:!0}}})).reduce((P,B)=>({...P,...B}),{}),metadata:{default:"BoxPlain",order:su.map(P=>P.name())}},metadata:{default:1,title:"Generators",itemTitle:"Generator {}"}}},metadata:{order:["settings","generators"]}}),[]),[e,n]=ge.useState(()=>No(t)),[i,r]=ge.useState(1),[o,s]=ge.useState(null),[a,l]=ge.useState(""),c=e.settings.itemSpacing;ge.useEffect(()=>{const P=[],B=[];let F=1;for(const j of e.generators){const Y=su.find(V=>V.name()===j.kind);if(Y)try{const V=Y.generate(e.settings,j.params);for(const K of V)P.push({surface:K,cutColor:j.colors.cutColor,holeColor:j.colors.holeColor,scoreColor:j.colors.scoreColor})}catch(V){console.error(V),B.push(`Generator ${F}: ${V}`)}F++}s(P),l(B.join(`
`))},[e,s,l]);const f=ge.useMemo(()=>{if(!o)return null;const P=[];let B=0;for(const{surface:V,cutColor:K,holeColor:I,scoreColor:Z}of o){const Q=V.borderBoundingBox(),oe=(Q[1][0]-Q[0][0]+c)*(Q[1][1]-Q[0][1]+c);B+=oe,P.push({surface:V,boundingBox:Q,boundingBoxSize:[Q[1][0]-Q[0][0],Q[1][1]-Q[0][1]],area:oe,offset:[0,0],cutColor:K,holeColor:I,scoreColor:Z})}const F=Math.sqrt(B);let j=0;const Y=[0,0];for(const V of P)V.offset[0]=Y[0]-V.boundingBox[0][0],V.offset[1]=Y[1]-V.boundingBox[0][1],j=Math.max(j,V.boundingBoxSize[1]),Y[0]+c+V.boundingBoxSize[0]<=F?Y[0]+=c+V.boundingBoxSize[0]:(Y[0]=0,Y[1]+=c+j,j=0);return P},[o,c]),h=ge.useCallback(()=>{if(!f||f.length<=0){alert("Nothing to export!");return}const P=tS(e.settings);for(const{offset:xe,surface:He,cutColor:q,holeColor:ne,scoreColor:ue}of f)P.addSurface(xe,He,Io[q],Io[ne],Io[ue]);const{mimeType:B,extension:F,data:j}=P.toFile(),Y=new Blob([j],{type:B}),V=window.URL.createObjectURL(Y);setTimeout(()=>{window.URL.revokeObjectURL(V)},3e4);const K=document.createElement("a");K.href=V;const I=new Date,Z=xe=>`${xe<10?"0":""}${xe}`,Q=`${I.getFullYear()}${Z(I.getMonth()+1)}${Z(I.getDate())}`,oe=`${Z(I.getHours())}${Z(I.getMinutes())}${Z(I.getSeconds())}`;K.download=`${e.generators[0].kind}-${Q}-${oe}${F}`,document.body.appendChild(K),K.style.display="none",K.click(),K.remove()},[e,f]),[d,p]=ge.useState(!1),_=ge.useCallback(()=>{p(!0)},[]),x=ge.useCallback(P=>{n(P),p(!1),s(null),r(B=>B+1)},[n]);ge.useEffect(()=>{try{const P=window.location.search.substr(1).split("&");for(const B of P){const F=B.split("=");if(F.length===2){const j=decodeURIComponent(F[0]),Y=decodeURIComponent(F[1]);if(j==="p"){const V=JSON.parse(Y);x(V);return}}}}catch{}},[]);const[m,u]=ge.useState(""),g=ge.useCallback(()=>{u(JSON.stringify(e,null,2))},[e,u]),v=ge.useCallback(()=>{const P=window.location.href.replace(/\?.*$/,"");window.open(`${P}?p=${encodeURIComponent(JSON.stringify(e))}`,"_blank")},[e]),[M,R]=ge.useState("2D"),T=ge.useCallback(()=>{R(P=>P==="2D"?"3D":"2D")},[R]),[E,b]=ge.useState(!0),A=ge.useCallback(()=>{b(P=>!P)},[b]),y=ge.useMemo(()=>({units:e.settings.units,defaultKerf:e.settings.defaultKerf,debug:e.settings.debug}),[e]);return $.jsxs(sv.Provider,{value:y,children:[m&&$.jsx(ig,{value:m,onCancel:()=>{u("")}}),d&&$.jsx(ig,{value:"",onCancel:()=>{p(!1)},onImport:x}),$.jsxs("nav",{children:[$.jsxs("h2",{children:[$.jsx("a",{href:"https://github.com/velipso/boxburner",target:"_blank",children:"boxburner"}),$.jsx("span",{className:"version",children:"v0.1-alpha"})]}),$.jsx("div",{className:"nav-main",children:$.jsx(nC,{schema:t,value:e,setValue:n},i)}),$.jsxs("div",{className:"output-buttons",children:[$.jsx("button",{onClick:h,children:"↓ Download"}),$.jsx("button",{onClick:_,children:"⍈ Import"}),$.jsx("button",{onClick:g,children:"⍇ Export"}),$.jsx("button",{onClick:v,children:"⤷ URL"})]})]}),$.jsx("main",{children:f&&(M==="2D"?$.jsx(sC,{grid:E,items:f,error:a,units:e.settings.units,onView:T,onGrid:A}):$.jsx(oC,{grid:E,items:f,error:a,units:e.settings.units,onView:T,onGrid:A}))},i)]})}ku.createRoot(document.getElementById("root")).render($.jsx(Dv.StrictMode,{children:$.jsx(aC,{})}));
