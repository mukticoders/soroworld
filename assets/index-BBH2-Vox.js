var _0=Object.defineProperty;var v0=(t,e,n)=>e in t?_0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Pt=(t,e,n)=>v0(t,typeof e!="symbol"?e+"":e,n);function x0(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function y0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var og={exports:{}},cu={},ag={exports:{}},ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var na=Symbol.for("react.element"),S0=Symbol.for("react.portal"),M0=Symbol.for("react.fragment"),E0=Symbol.for("react.strict_mode"),T0=Symbol.for("react.profiler"),w0=Symbol.for("react.provider"),A0=Symbol.for("react.context"),C0=Symbol.for("react.forward_ref"),R0=Symbol.for("react.suspense"),P0=Symbol.for("react.memo"),b0=Symbol.for("react.lazy"),Oh=Symbol.iterator;function L0(t){return t===null||typeof t!="object"?null:(t=Oh&&t[Oh]||t["@@iterator"],typeof t=="function"?t:null)}var lg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ug=Object.assign,cg={};function $s(t,e,n){this.props=t,this.context=e,this.refs=cg,this.updater=n||lg}$s.prototype.isReactComponent={};$s.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};$s.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function fg(){}fg.prototype=$s.prototype;function yd(t,e,n){this.props=t,this.context=e,this.refs=cg,this.updater=n||lg}var Sd=yd.prototype=new fg;Sd.constructor=yd;ug(Sd,$s.prototype);Sd.isPureReactComponent=!0;var Fh=Array.isArray,dg=Object.prototype.hasOwnProperty,Md={current:null},hg={key:!0,ref:!0,__self:!0,__source:!0};function pg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)dg.call(e,i)&&!hg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:na,type:t,key:s,ref:o,props:r,_owner:Md.current}}function D0(t,e){return{$$typeof:na,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ed(t){return typeof t=="object"&&t!==null&&t.$$typeof===na}function U0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var kh=/\/+/g;function Fu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?U0(""+t.key):e.toString(36)}function ul(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case na:case S0:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Fu(o,0):i,Fh(r)?(n="",t!=null&&(n=t.replace(kh,"$&/")+"/"),ul(r,e,n,"",function(u){return u})):r!=null&&(Ed(r)&&(r=D0(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(kh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Fh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Fu(s,a);o+=ul(s,e,n,l,r)}else if(l=L0(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Fu(s,a++),o+=ul(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ga(t,e,n){if(t==null)return t;var i=[],r=0;return ul(t,i,"","",function(s){return e.call(n,s,r++)}),i}function N0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},cl={transition:null},I0={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:cl,ReactCurrentOwner:Md};function mg(){throw Error("act(...) is not supported in production builds of React.")}ze.Children={map:ga,forEach:function(t,e,n){ga(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ga(t,function(){e++}),e},toArray:function(t){return ga(t,function(e){return e})||[]},only:function(t){if(!Ed(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ze.Component=$s;ze.Fragment=M0;ze.Profiler=T0;ze.PureComponent=yd;ze.StrictMode=E0;ze.Suspense=R0;ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I0;ze.act=mg;ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=ug({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Md.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)dg.call(e,l)&&!hg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:na,type:t.type,key:r,ref:s,props:i,_owner:o}};ze.createContext=function(t){return t={$$typeof:A0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:w0,_context:t},t.Consumer=t};ze.createElement=pg;ze.createFactory=function(t){var e=pg.bind(null,t);return e.type=t,e};ze.createRef=function(){return{current:null}};ze.forwardRef=function(t){return{$$typeof:C0,render:t}};ze.isValidElement=Ed;ze.lazy=function(t){return{$$typeof:b0,_payload:{_status:-1,_result:t},_init:N0}};ze.memo=function(t,e){return{$$typeof:P0,type:t,compare:e===void 0?null:e}};ze.startTransition=function(t){var e=cl.transition;cl.transition={};try{t()}finally{cl.transition=e}};ze.unstable_act=mg;ze.useCallback=function(t,e){return Qt.current.useCallback(t,e)};ze.useContext=function(t){return Qt.current.useContext(t)};ze.useDebugValue=function(){};ze.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};ze.useEffect=function(t,e){return Qt.current.useEffect(t,e)};ze.useId=function(){return Qt.current.useId()};ze.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};ze.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};ze.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};ze.useMemo=function(t,e){return Qt.current.useMemo(t,e)};ze.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};ze.useRef=function(t){return Qt.current.useRef(t)};ze.useState=function(t){return Qt.current.useState(t)};ze.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};ze.useTransition=function(){return Qt.current.useTransition()};ze.version="18.3.1";ag.exports=ze;var le=ag.exports;const gg=y0(le),O0=x0({__proto__:null,default:gg},[le]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F0=le,k0=Symbol.for("react.element"),z0=Symbol.for("react.fragment"),B0=Object.prototype.hasOwnProperty,H0=F0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,V0={key:!0,ref:!0,__self:!0,__source:!0};function _g(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)B0.call(e,i)&&!V0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:k0,type:t,key:s,ref:o,props:r,_owner:H0.current}}cu.Fragment=z0;cu.jsx=_g;cu.jsxs=_g;og.exports=cu;var xe=og.exports,zc={},vg={exports:{}},gn={},xg={exports:{}},yg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,X){var Z=D.length;D.push(X);e:for(;0<Z;){var se=Z-1>>>1,Me=D[se];if(0<r(Me,X))D[se]=X,D[Z]=Me,Z=se;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var X=D[0],Z=D.pop();if(Z!==X){D[0]=Z;e:for(var se=0,Me=D.length,Ve=Me>>>1;se<Ve;){var H=2*(se+1)-1,te=D[H],de=H+1,ce=D[de];if(0>r(te,Z))de<Me&&0>r(ce,te)?(D[se]=ce,D[de]=Z,se=de):(D[se]=te,D[H]=Z,se=H);else if(de<Me&&0>r(ce,Z))D[se]=ce,D[de]=Z,se=de;else break e}}return X}function r(D,X){var Z=D.sortIndex-X.sortIndex;return Z!==0?Z:D.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,d=null,h=3,m=!1,v=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(D){for(var X=n(u);X!==null;){if(X.callback===null)i(u);else if(X.startTime<=D)i(u),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(u)}}function S(D){if(x=!1,_(D),!v)if(n(l)!==null)v=!0,G(R);else{var X=n(u);X!==null&&$(S,X.startTime-D)}}function R(D,X){v=!1,x&&(x=!1,c(L),L=-1),m=!0;var Z=h;try{for(_(X),d=n(l);d!==null&&(!(d.expirationTime>X)||D&&!b());){var se=d.callback;if(typeof se=="function"){d.callback=null,h=d.priorityLevel;var Me=se(d.expirationTime<=X);X=t.unstable_now(),typeof Me=="function"?d.callback=Me:d===n(l)&&i(l),_(X)}else i(l);d=n(l)}if(d!==null)var Ve=!0;else{var H=n(u);H!==null&&$(S,H.startTime-X),Ve=!1}return Ve}finally{d=null,h=Z,m=!1}}var A=!1,w=null,L=-1,T=5,M=-1;function b(){return!(t.unstable_now()-M<T)}function V(){if(w!==null){var D=t.unstable_now();M=D;var X=!0;try{X=w(!0,D)}finally{X?B():(A=!1,w=null)}}else A=!1}var B;if(typeof g=="function")B=function(){g(V)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,q=Y.port2;Y.port1.onmessage=V,B=function(){q.postMessage(null)}}else B=function(){p(V,0)};function G(D){w=D,A||(A=!0,B())}function $(D,X){L=p(function(){D(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,G(R))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var X=3;break;default:X=h}var Z=h;h=X;try{return D()}finally{h=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,X){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Z=h;h=D;try{return X()}finally{h=Z}},t.unstable_scheduleCallback=function(D,X,Z){var se=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?se+Z:se):Z=se,D){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=Z+Me,D={id:f++,callback:X,priorityLevel:D,startTime:Z,expirationTime:Me,sortIndex:-1},Z>se?(D.sortIndex=Z,e(u,D),n(l)===null&&D===n(u)&&(x?(c(L),L=-1):x=!0,$(S,Z-se))):(D.sortIndex=Me,e(l,D),v||m||(v=!0,G(R))),D},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(D){var X=h;return function(){var Z=h;h=X;try{return D.apply(this,arguments)}finally{h=Z}}}})(yg);xg.exports=yg;var G0=xg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0=le,mn=G0;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sg=new Set,No={};function Or(t,e){Os(t,e),Os(t+"Capture",e)}function Os(t,e){for(No[t]=e,t=0;t<e.length;t++)Sg.add(e[t])}var xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bc=Object.prototype.hasOwnProperty,X0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zh={},Bh={};function j0(t){return Bc.call(Bh,t)?!0:Bc.call(zh,t)?!1:X0.test(t)?Bh[t]=!0:(zh[t]=!0,!1)}function Y0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function q0(t,e,n,i){if(e===null||typeof e>"u"||Y0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){kt[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];kt[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){kt[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){kt[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){kt[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){kt[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){kt[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){kt[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){kt[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Td=/[\-:]([a-z])/g;function wd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Td,wd);kt[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Td,wd);kt[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Td,wd);kt[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){kt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});kt.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){kt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ad(t,e,n,i){var r=kt.hasOwnProperty(e)?kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(q0(e,n,r,i)&&(n=null),i||r===null?j0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var wi=W0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_a=Symbol.for("react.element"),cs=Symbol.for("react.portal"),fs=Symbol.for("react.fragment"),Cd=Symbol.for("react.strict_mode"),Hc=Symbol.for("react.profiler"),Mg=Symbol.for("react.provider"),Eg=Symbol.for("react.context"),Rd=Symbol.for("react.forward_ref"),Vc=Symbol.for("react.suspense"),Gc=Symbol.for("react.suspense_list"),Pd=Symbol.for("react.memo"),Ni=Symbol.for("react.lazy"),Tg=Symbol.for("react.offscreen"),Hh=Symbol.iterator;function eo(t){return t===null||typeof t!="object"?null:(t=Hh&&t[Hh]||t["@@iterator"],typeof t=="function"?t:null)}var ft=Object.assign,ku;function vo(t){if(ku===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ku=e&&e[1]||""}return`
`+ku+t}var zu=!1;function Bu(t,e){if(!t||zu)return"";zu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{zu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?vo(t):""}function $0(t){switch(t.tag){case 5:return vo(t.type);case 16:return vo("Lazy");case 13:return vo("Suspense");case 19:return vo("SuspenseList");case 0:case 2:case 15:return t=Bu(t.type,!1),t;case 11:return t=Bu(t.type.render,!1),t;case 1:return t=Bu(t.type,!0),t;default:return""}}function Wc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case fs:return"Fragment";case cs:return"Portal";case Hc:return"Profiler";case Cd:return"StrictMode";case Vc:return"Suspense";case Gc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Eg:return(t.displayName||"Context")+".Consumer";case Mg:return(t._context.displayName||"Context")+".Provider";case Rd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Pd:return e=t.displayName||null,e!==null?e:Wc(t.type)||"Memo";case Ni:e=t._payload,t=t._init;try{return Wc(t(e))}catch{}}return null}function K0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wc(e);case 8:return e===Cd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Z0(t){var e=wg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function va(t){t._valueTracker||(t._valueTracker=Z0(t))}function Ag(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=wg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Rl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xc(t,e){var n=e.checked;return ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Vh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=er(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Cg(t,e){e=e.checked,e!=null&&Ad(t,"checked",e,!1)}function jc(t,e){Cg(t,e);var n=er(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Yc(t,e.type,er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Gh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yc(t,e,n){(e!=="number"||Rl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var xo=Array.isArray;function ws(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+er(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function qc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return ft({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Wh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(xo(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:er(n)}}function Rg(t,e){var n=er(e.value),i=er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Xh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Pg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $c(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Pg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xa,bg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xa=xa||document.createElement("div"),xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Io(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Q0=["Webkit","ms","Moz","O"];Object.keys(Eo).forEach(function(t){Q0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Eo[e]=Eo[t]})});function Lg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Eo.hasOwnProperty(t)&&Eo[t]?(""+e).trim():e+"px"}function Dg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Lg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var J0=ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kc(t,e){if(e){if(J0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function Zc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qc=null;function bd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jc=null,As=null,Cs=null;function jh(t){if(t=sa(t)){if(typeof Jc!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=mu(e),Jc(t.stateNode,t.type,e))}}function Ug(t){As?Cs?Cs.push(t):Cs=[t]:As=t}function Ng(){if(As){var t=As,e=Cs;if(Cs=As=null,jh(t),e)for(t=0;t<e.length;t++)jh(e[t])}}function Ig(t,e){return t(e)}function Og(){}var Hu=!1;function Fg(t,e,n){if(Hu)return t(e,n);Hu=!0;try{return Ig(t,e,n)}finally{Hu=!1,(As!==null||Cs!==null)&&(Og(),Ng())}}function Oo(t,e){var n=t.stateNode;if(n===null)return null;var i=mu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var ef=!1;if(xi)try{var to={};Object.defineProperty(to,"passive",{get:function(){ef=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{ef=!1}function ex(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var To=!1,Pl=null,bl=!1,tf=null,tx={onError:function(t){To=!0,Pl=t}};function nx(t,e,n,i,r,s,o,a,l){To=!1,Pl=null,ex.apply(tx,arguments)}function ix(t,e,n,i,r,s,o,a,l){if(nx.apply(this,arguments),To){if(To){var u=Pl;To=!1,Pl=null}else throw Error(ee(198));bl||(bl=!0,tf=u)}}function Fr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function kg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Yh(t){if(Fr(t)!==t)throw Error(ee(188))}function rx(t){var e=t.alternate;if(!e){if(e=Fr(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Yh(r),t;if(s===i)return Yh(r),e;s=s.sibling}throw Error(ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function zg(t){return t=rx(t),t!==null?Bg(t):null}function Bg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Bg(t);if(e!==null)return e;t=t.sibling}return null}var Hg=mn.unstable_scheduleCallback,qh=mn.unstable_cancelCallback,sx=mn.unstable_shouldYield,ox=mn.unstable_requestPaint,_t=mn.unstable_now,ax=mn.unstable_getCurrentPriorityLevel,Ld=mn.unstable_ImmediatePriority,Vg=mn.unstable_UserBlockingPriority,Ll=mn.unstable_NormalPriority,lx=mn.unstable_LowPriority,Gg=mn.unstable_IdlePriority,fu=null,ti=null;function ux(t){if(ti&&typeof ti.onCommitFiberRoot=="function")try{ti.onCommitFiberRoot(fu,t,void 0,(t.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:dx,cx=Math.log,fx=Math.LN2;function dx(t){return t>>>=0,t===0?32:31-(cx(t)/fx|0)|0}var ya=64,Sa=4194304;function yo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Dl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=yo(a):(s&=o,s!==0&&(i=yo(s)))}else o=n&~r,o!==0?i=yo(o):s!==0&&(i=yo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Xn(e),r=1<<n,i|=t[n],e&=~r;return i}function hx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function px(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Xn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=hx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function nf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Wg(){var t=ya;return ya<<=1,!(ya&4194240)&&(ya=64),t}function Vu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ia(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xn(e),t[e]=n}function mx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Xn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Dd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Xn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Je=0;function Xg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var jg,Ud,Yg,qg,$g,rf=!1,Ma=[],Gi=null,Wi=null,Xi=null,Fo=new Map,ko=new Map,Fi=[],gx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $h(t,e){switch(t){case"focusin":case"focusout":Gi=null;break;case"dragenter":case"dragleave":Wi=null;break;case"mouseover":case"mouseout":Xi=null;break;case"pointerover":case"pointerout":Fo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(e.pointerId)}}function no(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=sa(e),e!==null&&Ud(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function _x(t,e,n,i,r){switch(e){case"focusin":return Gi=no(Gi,t,e,n,i,r),!0;case"dragenter":return Wi=no(Wi,t,e,n,i,r),!0;case"mouseover":return Xi=no(Xi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Fo.set(s,no(Fo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ko.set(s,no(ko.get(s)||null,t,e,n,i,r)),!0}return!1}function Kg(t){var e=Sr(t.target);if(e!==null){var n=Fr(e);if(n!==null){if(e=n.tag,e===13){if(e=kg(n),e!==null){t.blockedOn=e,$g(t.priority,function(){Yg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=sf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Qc=i,n.target.dispatchEvent(i),Qc=null}else return e=sa(n),e!==null&&Ud(e),t.blockedOn=n,!1;e.shift()}return!0}function Kh(t,e,n){fl(t)&&n.delete(e)}function vx(){rf=!1,Gi!==null&&fl(Gi)&&(Gi=null),Wi!==null&&fl(Wi)&&(Wi=null),Xi!==null&&fl(Xi)&&(Xi=null),Fo.forEach(Kh),ko.forEach(Kh)}function io(t,e){t.blockedOn===e&&(t.blockedOn=null,rf||(rf=!0,mn.unstable_scheduleCallback(mn.unstable_NormalPriority,vx)))}function zo(t){function e(r){return io(r,t)}if(0<Ma.length){io(Ma[0],t);for(var n=1;n<Ma.length;n++){var i=Ma[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Gi!==null&&io(Gi,t),Wi!==null&&io(Wi,t),Xi!==null&&io(Xi,t),Fo.forEach(e),ko.forEach(e),n=0;n<Fi.length;n++)i=Fi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Fi.length&&(n=Fi[0],n.blockedOn===null);)Kg(n),n.blockedOn===null&&Fi.shift()}var Rs=wi.ReactCurrentBatchConfig,Ul=!0;function xx(t,e,n,i){var r=Je,s=Rs.transition;Rs.transition=null;try{Je=1,Nd(t,e,n,i)}finally{Je=r,Rs.transition=s}}function yx(t,e,n,i){var r=Je,s=Rs.transition;Rs.transition=null;try{Je=4,Nd(t,e,n,i)}finally{Je=r,Rs.transition=s}}function Nd(t,e,n,i){if(Ul){var r=sf(t,e,n,i);if(r===null)Qu(t,e,i,Nl,n),$h(t,i);else if(_x(r,t,e,n,i))i.stopPropagation();else if($h(t,i),e&4&&-1<gx.indexOf(t)){for(;r!==null;){var s=sa(r);if(s!==null&&jg(s),s=sf(t,e,n,i),s===null&&Qu(t,e,i,Nl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Qu(t,e,i,null,n)}}var Nl=null;function sf(t,e,n,i){if(Nl=null,t=bd(i),t=Sr(t),t!==null)if(e=Fr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=kg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Nl=t,null}function Zg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ax()){case Ld:return 1;case Vg:return 4;case Ll:case lx:return 16;case Gg:return 536870912;default:return 16}default:return 16}}var Bi=null,Id=null,dl=null;function Qg(){if(dl)return dl;var t,e=Id,n=e.length,i,r="value"in Bi?Bi.value:Bi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return dl=r.slice(t,1<i?1-i:void 0)}function hl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ea(){return!0}function Zh(){return!1}function _n(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ea:Zh,this.isPropagationStopped=Zh,this}return ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ea)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ea)},persist:function(){},isPersistent:Ea}),e}var Ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Od=_n(Ks),ra=ft({},Ks,{view:0,detail:0}),Sx=_n(ra),Gu,Wu,ro,du=ft({},ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ro&&(ro&&t.type==="mousemove"?(Gu=t.screenX-ro.screenX,Wu=t.screenY-ro.screenY):Wu=Gu=0,ro=t),Gu)},movementY:function(t){return"movementY"in t?t.movementY:Wu}}),Qh=_n(du),Mx=ft({},du,{dataTransfer:0}),Ex=_n(Mx),Tx=ft({},ra,{relatedTarget:0}),Xu=_n(Tx),wx=ft({},Ks,{animationName:0,elapsedTime:0,pseudoElement:0}),Ax=_n(wx),Cx=ft({},Ks,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Rx=_n(Cx),Px=ft({},Ks,{data:0}),Jh=_n(Px),bx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ux(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Dx[t])?!!e[t]:!1}function Fd(){return Ux}var Nx=ft({},ra,{key:function(t){if(t.key){var e=bx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Lx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fd,charCode:function(t){return t.type==="keypress"?hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ix=_n(Nx),Ox=ft({},du,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ep=_n(Ox),Fx=ft({},ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fd}),kx=_n(Fx),zx=ft({},Ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bx=_n(zx),Hx=ft({},du,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Vx=_n(Hx),Gx=[9,13,27,32],kd=xi&&"CompositionEvent"in window,wo=null;xi&&"documentMode"in document&&(wo=document.documentMode);var Wx=xi&&"TextEvent"in window&&!wo,Jg=xi&&(!kd||wo&&8<wo&&11>=wo),tp=" ",np=!1;function e_(t,e){switch(t){case"keyup":return Gx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function t_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ds=!1;function Xx(t,e){switch(t){case"compositionend":return t_(e);case"keypress":return e.which!==32?null:(np=!0,tp);case"textInput":return t=e.data,t===tp&&np?null:t;default:return null}}function jx(t,e){if(ds)return t==="compositionend"||!kd&&e_(t,e)?(t=Qg(),dl=Id=Bi=null,ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Jg&&e.locale!=="ko"?null:e.data;default:return null}}var Yx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ip(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Yx[t.type]:e==="textarea"}function n_(t,e,n,i){Ug(i),e=Il(e,"onChange"),0<e.length&&(n=new Od("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ao=null,Bo=null;function qx(t){h_(t,0)}function hu(t){var e=ms(t);if(Ag(e))return t}function $x(t,e){if(t==="change")return e}var i_=!1;if(xi){var ju;if(xi){var Yu="oninput"in document;if(!Yu){var rp=document.createElement("div");rp.setAttribute("oninput","return;"),Yu=typeof rp.oninput=="function"}ju=Yu}else ju=!1;i_=ju&&(!document.documentMode||9<document.documentMode)}function sp(){Ao&&(Ao.detachEvent("onpropertychange",r_),Bo=Ao=null)}function r_(t){if(t.propertyName==="value"&&hu(Bo)){var e=[];n_(e,Bo,t,bd(t)),Fg(qx,e)}}function Kx(t,e,n){t==="focusin"?(sp(),Ao=e,Bo=n,Ao.attachEvent("onpropertychange",r_)):t==="focusout"&&sp()}function Zx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hu(Bo)}function Qx(t,e){if(t==="click")return hu(e)}function Jx(t,e){if(t==="input"||t==="change")return hu(e)}function ey(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qn=typeof Object.is=="function"?Object.is:ey;function Ho(t,e){if(qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Bc.call(e,r)||!qn(t[r],e[r]))return!1}return!0}function op(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ap(t,e){var n=op(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=op(n)}}function s_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?s_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function o_(){for(var t=window,e=Rl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Rl(t.document)}return e}function zd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ty(t){var e=o_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&s_(n.ownerDocument.documentElement,n)){if(i!==null&&zd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=ap(n,s);var o=ap(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ny=xi&&"documentMode"in document&&11>=document.documentMode,hs=null,of=null,Co=null,af=!1;function lp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;af||hs==null||hs!==Rl(i)||(i=hs,"selectionStart"in i&&zd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Co&&Ho(Co,i)||(Co=i,i=Il(of,"onSelect"),0<i.length&&(e=new Od("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=hs)))}function Ta(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ps={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionend:Ta("Transition","TransitionEnd")},qu={},a_={};xi&&(a_=document.createElement("div").style,"AnimationEvent"in window||(delete ps.animationend.animation,delete ps.animationiteration.animation,delete ps.animationstart.animation),"TransitionEvent"in window||delete ps.transitionend.transition);function pu(t){if(qu[t])return qu[t];if(!ps[t])return t;var e=ps[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in a_)return qu[t]=e[n];return t}var l_=pu("animationend"),u_=pu("animationiteration"),c_=pu("animationstart"),f_=pu("transitionend"),d_=new Map,up="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(t,e){d_.set(t,e),Or(e,[t])}for(var $u=0;$u<up.length;$u++){var Ku=up[$u],iy=Ku.toLowerCase(),ry=Ku[0].toUpperCase()+Ku.slice(1);rr(iy,"on"+ry)}rr(l_,"onAnimationEnd");rr(u_,"onAnimationIteration");rr(c_,"onAnimationStart");rr("dblclick","onDoubleClick");rr("focusin","onFocus");rr("focusout","onBlur");rr(f_,"onTransitionEnd");Os("onMouseEnter",["mouseout","mouseover"]);Os("onMouseLeave",["mouseout","mouseover"]);Os("onPointerEnter",["pointerout","pointerover"]);Os("onPointerLeave",["pointerout","pointerover"]);Or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Or("onBeforeInput",["compositionend","keypress","textInput","paste"]);Or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sy=new Set("cancel close invalid load scroll toggle".split(" ").concat(So));function cp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,ix(i,e,void 0,t),t.currentTarget=null}function h_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;cp(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;cp(r,a,u),s=l}}}if(bl)throw t=tf,bl=!1,tf=null,t}function it(t,e){var n=e[df];n===void 0&&(n=e[df]=new Set);var i=t+"__bubble";n.has(i)||(p_(e,t,2,!1),n.add(i))}function Zu(t,e,n){var i=0;e&&(i|=4),p_(n,t,i,e)}var wa="_reactListening"+Math.random().toString(36).slice(2);function Vo(t){if(!t[wa]){t[wa]=!0,Sg.forEach(function(n){n!=="selectionchange"&&(sy.has(n)||Zu(n,!1,t),Zu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[wa]||(e[wa]=!0,Zu("selectionchange",!1,e))}}function p_(t,e,n,i){switch(Zg(e)){case 1:var r=xx;break;case 4:r=yx;break;default:r=Nd}n=r.bind(null,e,n,t),r=void 0,!ef||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Qu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Sr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Fg(function(){var u=s,f=bd(n),d=[];e:{var h=d_.get(t);if(h!==void 0){var m=Od,v=t;switch(t){case"keypress":if(hl(n)===0)break e;case"keydown":case"keyup":m=Ix;break;case"focusin":v="focus",m=Xu;break;case"focusout":v="blur",m=Xu;break;case"beforeblur":case"afterblur":m=Xu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Qh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Ex;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=kx;break;case l_:case u_:case c_:m=Ax;break;case f_:m=Bx;break;case"scroll":m=Sx;break;case"wheel":m=Vx;break;case"copy":case"cut":case"paste":m=Rx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=ep}var x=(e&4)!==0,p=!x&&t==="scroll",c=x?h!==null?h+"Capture":null:h;x=[];for(var g=u,_;g!==null;){_=g;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,c!==null&&(S=Oo(g,c),S!=null&&x.push(Go(g,S,_)))),p)break;g=g.return}0<x.length&&(h=new m(h,v,null,n,f),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==Qc&&(v=n.relatedTarget||n.fromElement)&&(Sr(v)||v[yi]))break e;if((m||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?Sr(v):null,v!==null&&(p=Fr(v),v!==p||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(x=Qh,S="onMouseLeave",c="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=ep,S="onPointerLeave",c="onPointerEnter",g="pointer"),p=m==null?h:ms(m),_=v==null?h:ms(v),h=new x(S,g+"leave",m,n,f),h.target=p,h.relatedTarget=_,S=null,Sr(f)===u&&(x=new x(c,g+"enter",v,n,f),x.target=_,x.relatedTarget=p,S=x),p=S,m&&v)t:{for(x=m,c=v,g=0,_=x;_;_=Vr(_))g++;for(_=0,S=c;S;S=Vr(S))_++;for(;0<g-_;)x=Vr(x),g--;for(;0<_-g;)c=Vr(c),_--;for(;g--;){if(x===c||c!==null&&x===c.alternate)break t;x=Vr(x),c=Vr(c)}x=null}else x=null;m!==null&&fp(d,h,m,x,!1),v!==null&&p!==null&&fp(d,p,v,x,!0)}}e:{if(h=u?ms(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var R=$x;else if(ip(h))if(i_)R=Jx;else{R=Zx;var A=Kx}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=Qx);if(R&&(R=R(t,u))){n_(d,R,n,f);break e}A&&A(t,h,u),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&Yc(h,"number",h.value)}switch(A=u?ms(u):window,t){case"focusin":(ip(A)||A.contentEditable==="true")&&(hs=A,of=u,Co=null);break;case"focusout":Co=of=hs=null;break;case"mousedown":af=!0;break;case"contextmenu":case"mouseup":case"dragend":af=!1,lp(d,n,f);break;case"selectionchange":if(ny)break;case"keydown":case"keyup":lp(d,n,f)}var w;if(kd)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else ds?e_(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Jg&&n.locale!=="ko"&&(ds||L!=="onCompositionStart"?L==="onCompositionEnd"&&ds&&(w=Qg()):(Bi=f,Id="value"in Bi?Bi.value:Bi.textContent,ds=!0)),A=Il(u,L),0<A.length&&(L=new Jh(L,t,null,n,f),d.push({event:L,listeners:A}),w?L.data=w:(w=t_(n),w!==null&&(L.data=w)))),(w=Wx?Xx(t,n):jx(t,n))&&(u=Il(u,"onBeforeInput"),0<u.length&&(f=new Jh("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=w))}h_(d,e)})}function Go(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Il(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Oo(t,n),s!=null&&i.unshift(Go(t,s,r)),s=Oo(t,e),s!=null&&i.push(Go(t,s,r))),t=t.return}return i}function Vr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function fp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Oo(n,s),l!=null&&o.unshift(Go(n,l,a))):r||(l=Oo(n,s),l!=null&&o.push(Go(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var oy=/\r\n?/g,ay=/\u0000|\uFFFD/g;function dp(t){return(typeof t=="string"?t:""+t).replace(oy,`
`).replace(ay,"")}function Aa(t,e,n){if(e=dp(e),dp(t)!==e&&n)throw Error(ee(425))}function Ol(){}var lf=null,uf=null;function cf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ff=typeof setTimeout=="function"?setTimeout:void 0,ly=typeof clearTimeout=="function"?clearTimeout:void 0,hp=typeof Promise=="function"?Promise:void 0,uy=typeof queueMicrotask=="function"?queueMicrotask:typeof hp<"u"?function(t){return hp.resolve(null).then(t).catch(cy)}:ff;function cy(t){setTimeout(function(){throw t})}function Ju(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),zo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);zo(e)}function ji(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function pp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Zs=Math.random().toString(36).slice(2),ei="__reactFiber$"+Zs,Wo="__reactProps$"+Zs,yi="__reactContainer$"+Zs,df="__reactEvents$"+Zs,fy="__reactListeners$"+Zs,dy="__reactHandles$"+Zs;function Sr(t){var e=t[ei];if(e)return e;for(var n=t.parentNode;n;){if(e=n[yi]||n[ei]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=pp(t);t!==null;){if(n=t[ei])return n;t=pp(t)}return e}t=n,n=t.parentNode}return null}function sa(t){return t=t[ei]||t[yi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function mu(t){return t[Wo]||null}var hf=[],gs=-1;function sr(t){return{current:t}}function st(t){0>gs||(t.current=hf[gs],hf[gs]=null,gs--)}function nt(t,e){gs++,hf[gs]=t.current,t.current=e}var tr={},Yt=sr(tr),rn=sr(!1),Rr=tr;function Fs(t,e){var n=t.type.contextTypes;if(!n)return tr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function sn(t){return t=t.childContextTypes,t!=null}function Fl(){st(rn),st(Yt)}function mp(t,e,n){if(Yt.current!==tr)throw Error(ee(168));nt(Yt,e),nt(rn,n)}function m_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,K0(t)||"Unknown",r));return ft({},n,i)}function kl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,Rr=Yt.current,nt(Yt,t),nt(rn,rn.current),!0}function gp(t,e,n){var i=t.stateNode;if(!i)throw Error(ee(169));n?(t=m_(t,e,Rr),i.__reactInternalMemoizedMergedChildContext=t,st(rn),st(Yt),nt(Yt,t)):st(rn),nt(rn,n)}var fi=null,gu=!1,ec=!1;function g_(t){fi===null?fi=[t]:fi.push(t)}function hy(t){gu=!0,g_(t)}function or(){if(!ec&&fi!==null){ec=!0;var t=0,e=Je;try{var n=fi;for(Je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}fi=null,gu=!1}catch(r){throw fi!==null&&(fi=fi.slice(t+1)),Hg(Ld,or),r}finally{Je=e,ec=!1}}return null}var _s=[],vs=0,zl=null,Bl=0,Sn=[],Mn=0,Pr=null,hi=1,pi="";function gr(t,e){_s[vs++]=Bl,_s[vs++]=zl,zl=t,Bl=e}function __(t,e,n){Sn[Mn++]=hi,Sn[Mn++]=pi,Sn[Mn++]=Pr,Pr=t;var i=hi;t=pi;var r=32-Xn(i)-1;i&=~(1<<r),n+=1;var s=32-Xn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,hi=1<<32-Xn(e)+r|n<<r|i,pi=s+t}else hi=1<<s|n<<r|i,pi=t}function Bd(t){t.return!==null&&(gr(t,1),__(t,1,0))}function Hd(t){for(;t===zl;)zl=_s[--vs],_s[vs]=null,Bl=_s[--vs],_s[vs]=null;for(;t===Pr;)Pr=Sn[--Mn],Sn[Mn]=null,pi=Sn[--Mn],Sn[Mn]=null,hi=Sn[--Mn],Sn[Mn]=null}var pn=null,hn=null,ot=!1,Bn=null;function v_(t,e){var n=wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function _p(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,pn=t,hn=ji(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,pn=t,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Pr!==null?{id:hi,overflow:pi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,pn=t,hn=null,!0):!1;default:return!1}}function pf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function mf(t){if(ot){var e=hn;if(e){var n=e;if(!_p(t,e)){if(pf(t))throw Error(ee(418));e=ji(n.nextSibling);var i=pn;e&&_p(t,e)?v_(i,n):(t.flags=t.flags&-4097|2,ot=!1,pn=t)}}else{if(pf(t))throw Error(ee(418));t.flags=t.flags&-4097|2,ot=!1,pn=t}}}function vp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pn=t}function Ca(t){if(t!==pn)return!1;if(!ot)return vp(t),ot=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!cf(t.type,t.memoizedProps)),e&&(e=hn)){if(pf(t))throw x_(),Error(ee(418));for(;e;)v_(t,e),e=ji(e.nextSibling)}if(vp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hn=ji(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hn=null}}else hn=pn?ji(t.stateNode.nextSibling):null;return!0}function x_(){for(var t=hn;t;)t=ji(t.nextSibling)}function ks(){hn=pn=null,ot=!1}function Vd(t){Bn===null?Bn=[t]:Bn.push(t)}var py=wi.ReactCurrentBatchConfig;function so(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var i=n.stateNode}if(!i)throw Error(ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function Ra(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function xp(t){var e=t._init;return e(t._payload)}function y_(t){function e(c,g){if(t){var _=c.deletions;_===null?(c.deletions=[g],c.flags|=16):_.push(g)}}function n(c,g){if(!t)return null;for(;g!==null;)e(c,g),g=g.sibling;return null}function i(c,g){for(c=new Map;g!==null;)g.key!==null?c.set(g.key,g):c.set(g.index,g),g=g.sibling;return c}function r(c,g){return c=Ki(c,g),c.index=0,c.sibling=null,c}function s(c,g,_){return c.index=_,t?(_=c.alternate,_!==null?(_=_.index,_<g?(c.flags|=2,g):_):(c.flags|=2,g)):(c.flags|=1048576,g)}function o(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,g,_,S){return g===null||g.tag!==6?(g=ac(_,c.mode,S),g.return=c,g):(g=r(g,_),g.return=c,g)}function l(c,g,_,S){var R=_.type;return R===fs?f(c,g,_.props.children,S,_.key):g!==null&&(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ni&&xp(R)===g.type)?(S=r(g,_.props),S.ref=so(c,g,_),S.return=c,S):(S=yl(_.type,_.key,_.props,null,c.mode,S),S.ref=so(c,g,_),S.return=c,S)}function u(c,g,_,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=lc(_,c.mode,S),g.return=c,g):(g=r(g,_.children||[]),g.return=c,g)}function f(c,g,_,S,R){return g===null||g.tag!==7?(g=Cr(_,c.mode,S,R),g.return=c,g):(g=r(g,_),g.return=c,g)}function d(c,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=ac(""+g,c.mode,_),g.return=c,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case _a:return _=yl(g.type,g.key,g.props,null,c.mode,_),_.ref=so(c,null,g),_.return=c,_;case cs:return g=lc(g,c.mode,_),g.return=c,g;case Ni:var S=g._init;return d(c,S(g._payload),_)}if(xo(g)||eo(g))return g=Cr(g,c.mode,_,null),g.return=c,g;Ra(c,g)}return null}function h(c,g,_,S){var R=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return R!==null?null:a(c,g,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case _a:return _.key===R?l(c,g,_,S):null;case cs:return _.key===R?u(c,g,_,S):null;case Ni:return R=_._init,h(c,g,R(_._payload),S)}if(xo(_)||eo(_))return R!==null?null:f(c,g,_,S,null);Ra(c,_)}return null}function m(c,g,_,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return c=c.get(_)||null,a(g,c,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case _a:return c=c.get(S.key===null?_:S.key)||null,l(g,c,S,R);case cs:return c=c.get(S.key===null?_:S.key)||null,u(g,c,S,R);case Ni:var A=S._init;return m(c,g,_,A(S._payload),R)}if(xo(S)||eo(S))return c=c.get(_)||null,f(g,c,S,R,null);Ra(g,S)}return null}function v(c,g,_,S){for(var R=null,A=null,w=g,L=g=0,T=null;w!==null&&L<_.length;L++){w.index>L?(T=w,w=null):T=w.sibling;var M=h(c,w,_[L],S);if(M===null){w===null&&(w=T);break}t&&w&&M.alternate===null&&e(c,w),g=s(M,g,L),A===null?R=M:A.sibling=M,A=M,w=T}if(L===_.length)return n(c,w),ot&&gr(c,L),R;if(w===null){for(;L<_.length;L++)w=d(c,_[L],S),w!==null&&(g=s(w,g,L),A===null?R=w:A.sibling=w,A=w);return ot&&gr(c,L),R}for(w=i(c,w);L<_.length;L++)T=m(w,c,L,_[L],S),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?L:T.key),g=s(T,g,L),A===null?R=T:A.sibling=T,A=T);return t&&w.forEach(function(b){return e(c,b)}),ot&&gr(c,L),R}function x(c,g,_,S){var R=eo(_);if(typeof R!="function")throw Error(ee(150));if(_=R.call(_),_==null)throw Error(ee(151));for(var A=R=null,w=g,L=g=0,T=null,M=_.next();w!==null&&!M.done;L++,M=_.next()){w.index>L?(T=w,w=null):T=w.sibling;var b=h(c,w,M.value,S);if(b===null){w===null&&(w=T);break}t&&w&&b.alternate===null&&e(c,w),g=s(b,g,L),A===null?R=b:A.sibling=b,A=b,w=T}if(M.done)return n(c,w),ot&&gr(c,L),R;if(w===null){for(;!M.done;L++,M=_.next())M=d(c,M.value,S),M!==null&&(g=s(M,g,L),A===null?R=M:A.sibling=M,A=M);return ot&&gr(c,L),R}for(w=i(c,w);!M.done;L++,M=_.next())M=m(w,c,L,M.value,S),M!==null&&(t&&M.alternate!==null&&w.delete(M.key===null?L:M.key),g=s(M,g,L),A===null?R=M:A.sibling=M,A=M);return t&&w.forEach(function(V){return e(c,V)}),ot&&gr(c,L),R}function p(c,g,_,S){if(typeof _=="object"&&_!==null&&_.type===fs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case _a:e:{for(var R=_.key,A=g;A!==null;){if(A.key===R){if(R=_.type,R===fs){if(A.tag===7){n(c,A.sibling),g=r(A,_.props.children),g.return=c,c=g;break e}}else if(A.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ni&&xp(R)===A.type){n(c,A.sibling),g=r(A,_.props),g.ref=so(c,A,_),g.return=c,c=g;break e}n(c,A);break}else e(c,A);A=A.sibling}_.type===fs?(g=Cr(_.props.children,c.mode,S,_.key),g.return=c,c=g):(S=yl(_.type,_.key,_.props,null,c.mode,S),S.ref=so(c,g,_),S.return=c,c=S)}return o(c);case cs:e:{for(A=_.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(c,g.sibling),g=r(g,_.children||[]),g.return=c,c=g;break e}else{n(c,g);break}else e(c,g);g=g.sibling}g=lc(_,c.mode,S),g.return=c,c=g}return o(c);case Ni:return A=_._init,p(c,g,A(_._payload),S)}if(xo(_))return v(c,g,_,S);if(eo(_))return x(c,g,_,S);Ra(c,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(c,g.sibling),g=r(g,_),g.return=c,c=g):(n(c,g),g=ac(_,c.mode,S),g.return=c,c=g),o(c)):n(c,g)}return p}var zs=y_(!0),S_=y_(!1),Hl=sr(null),Vl=null,xs=null,Gd=null;function Wd(){Gd=xs=Vl=null}function Xd(t){var e=Hl.current;st(Hl),t._currentValue=e}function gf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ps(t,e){Vl=t,Gd=xs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(nn=!0),t.firstContext=null)}function Pn(t){var e=t._currentValue;if(Gd!==t)if(t={context:t,memoizedValue:e,next:null},xs===null){if(Vl===null)throw Error(ee(308));xs=t,Vl.dependencies={lanes:0,firstContext:t}}else xs=xs.next=t;return e}var Mr=null;function jd(t){Mr===null?Mr=[t]:Mr.push(t)}function M_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,jd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Si(t,i)}function Si(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ii=!1;function Yd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function E_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function _i(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Yi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,We&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Si(t,n)}return r=i.interleaved,r===null?(e.next=e,jd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Si(t,n)}function pl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Dd(t,n)}}function yp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Gl(t,e,n,i){var r=t.updateQueue;Ii=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=u=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,x=a;switch(h=e,m=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(m,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,h=typeof v=="function"?v.call(m,d,h):v,h==null)break e;d=ft({},d,h);break e;case 2:Ii=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=m,l=d):f=f.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Lr|=o,t.lanes=o,t.memoizedState=d}}function Sp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var oa={},ni=sr(oa),Xo=sr(oa),jo=sr(oa);function Er(t){if(t===oa)throw Error(ee(174));return t}function qd(t,e){switch(nt(jo,e),nt(Xo,t),nt(ni,oa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:$c(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=$c(e,t)}st(ni),nt(ni,e)}function Bs(){st(ni),st(Xo),st(jo)}function T_(t){Er(jo.current);var e=Er(ni.current),n=$c(e,t.type);e!==n&&(nt(Xo,t),nt(ni,n))}function $d(t){Xo.current===t&&(st(ni),st(Xo))}var lt=sr(0);function Wl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var tc=[];function Kd(){for(var t=0;t<tc.length;t++)tc[t]._workInProgressVersionPrimary=null;tc.length=0}var ml=wi.ReactCurrentDispatcher,nc=wi.ReactCurrentBatchConfig,br=0,ut=null,wt=null,Lt=null,Xl=!1,Ro=!1,Yo=0,my=0;function zt(){throw Error(ee(321))}function Zd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qn(t[n],e[n]))return!1;return!0}function Qd(t,e,n,i,r,s){if(br=s,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ml.current=t===null||t.memoizedState===null?xy:yy,t=n(i,r),Ro){s=0;do{if(Ro=!1,Yo=0,25<=s)throw Error(ee(301));s+=1,Lt=wt=null,e.updateQueue=null,ml.current=Sy,t=n(i,r)}while(Ro)}if(ml.current=jl,e=wt!==null&&wt.next!==null,br=0,Lt=wt=ut=null,Xl=!1,e)throw Error(ee(300));return t}function Jd(){var t=Yo!==0;return Yo=0,t}function Zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?ut.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function bn(){if(wt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Lt===null?ut.memoizedState:Lt.next;if(e!==null)Lt=e,wt=t;else{if(t===null)throw Error(ee(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Lt===null?ut.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function qo(t,e){return typeof e=="function"?e(t):e}function ic(t){var e=bn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=wt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((br&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,ut.lanes|=f,Lr|=f}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,qn(i,e.memoizedState)||(nn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ut.lanes|=s,Lr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function rc(t){var e=bn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);qn(s,e.memoizedState)||(nn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function w_(){}function A_(t,e){var n=ut,i=bn(),r=e(),s=!qn(i.memoizedState,r);if(s&&(i.memoizedState=r,nn=!0),i=i.queue,eh(P_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Lt!==null&&Lt.memoizedState.tag&1){if(n.flags|=2048,$o(9,R_.bind(null,n,i,r,e),void 0,null),Ut===null)throw Error(ee(349));br&30||C_(n,e,r)}return r}function C_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function R_(t,e,n,i){e.value=n,e.getSnapshot=i,b_(e)&&L_(t)}function P_(t,e,n){return n(function(){b_(e)&&L_(t)})}function b_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qn(t,n)}catch{return!0}}function L_(t){var e=Si(t,1);e!==null&&jn(e,t,1,-1)}function Mp(t){var e=Zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:t},e.queue=t,t=t.dispatch=vy.bind(null,ut,t),[e.memoizedState,t]}function $o(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function D_(){return bn().memoizedState}function gl(t,e,n,i){var r=Zn();ut.flags|=t,r.memoizedState=$o(1|e,n,void 0,i===void 0?null:i)}function _u(t,e,n,i){var r=bn();i=i===void 0?null:i;var s=void 0;if(wt!==null){var o=wt.memoizedState;if(s=o.destroy,i!==null&&Zd(i,o.deps)){r.memoizedState=$o(e,n,s,i);return}}ut.flags|=t,r.memoizedState=$o(1|e,n,s,i)}function Ep(t,e){return gl(8390656,8,t,e)}function eh(t,e){return _u(2048,8,t,e)}function U_(t,e){return _u(4,2,t,e)}function N_(t,e){return _u(4,4,t,e)}function I_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function O_(t,e,n){return n=n!=null?n.concat([t]):null,_u(4,4,I_.bind(null,e,t),n)}function th(){}function F_(t,e){var n=bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Zd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function k_(t,e){var n=bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Zd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function z_(t,e,n){return br&21?(qn(n,e)||(n=Wg(),ut.lanes|=n,Lr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,nn=!0),t.memoizedState=n)}function gy(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var i=nc.transition;nc.transition={};try{t(!1),e()}finally{Je=n,nc.transition=i}}function B_(){return bn().memoizedState}function _y(t,e,n){var i=$i(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},H_(t))V_(e,n);else if(n=M_(t,e,n,i),n!==null){var r=Zt();jn(n,t,i,r),G_(n,e,i)}}function vy(t,e,n){var i=$i(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(H_(t))V_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,qn(a,o)){var l=e.interleaved;l===null?(r.next=r,jd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=M_(t,e,r,i),n!==null&&(r=Zt(),jn(n,t,i,r),G_(n,e,i))}}function H_(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function V_(t,e){Ro=Xl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function G_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Dd(t,n)}}var jl={readContext:Pn,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},xy={readContext:Pn,useCallback:function(t,e){return Zn().memoizedState=[t,e===void 0?null:e],t},useContext:Pn,useEffect:Ep,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,gl(4194308,4,I_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return gl(4194308,4,t,e)},useInsertionEffect:function(t,e){return gl(4,2,t,e)},useMemo:function(t,e){var n=Zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Zn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=_y.bind(null,ut,t),[i.memoizedState,t]},useRef:function(t){var e=Zn();return t={current:t},e.memoizedState=t},useState:Mp,useDebugValue:th,useDeferredValue:function(t){return Zn().memoizedState=t},useTransition:function(){var t=Mp(!1),e=t[0];return t=gy.bind(null,t[1]),Zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ut,r=Zn();if(ot){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),Ut===null)throw Error(ee(349));br&30||C_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Ep(P_.bind(null,i,s,t),[t]),i.flags|=2048,$o(9,R_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Zn(),e=Ut.identifierPrefix;if(ot){var n=pi,i=hi;n=(i&~(1<<32-Xn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Yo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=my++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},yy={readContext:Pn,useCallback:F_,useContext:Pn,useEffect:eh,useImperativeHandle:O_,useInsertionEffect:U_,useLayoutEffect:N_,useMemo:k_,useReducer:ic,useRef:D_,useState:function(){return ic(qo)},useDebugValue:th,useDeferredValue:function(t){var e=bn();return z_(e,wt.memoizedState,t)},useTransition:function(){var t=ic(qo)[0],e=bn().memoizedState;return[t,e]},useMutableSource:w_,useSyncExternalStore:A_,useId:B_,unstable_isNewReconciler:!1},Sy={readContext:Pn,useCallback:F_,useContext:Pn,useEffect:eh,useImperativeHandle:O_,useInsertionEffect:U_,useLayoutEffect:N_,useMemo:k_,useReducer:rc,useRef:D_,useState:function(){return rc(qo)},useDebugValue:th,useDeferredValue:function(t){var e=bn();return wt===null?e.memoizedState=t:z_(e,wt.memoizedState,t)},useTransition:function(){var t=rc(qo)[0],e=bn().memoizedState;return[t,e]},useMutableSource:w_,useSyncExternalStore:A_,useId:B_,unstable_isNewReconciler:!1};function kn(t,e){if(t&&t.defaultProps){e=ft({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function _f(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ft({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var vu={isMounted:function(t){return(t=t._reactInternals)?Fr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=$i(t),s=_i(i,r);s.payload=e,n!=null&&(s.callback=n),e=Yi(t,s,r),e!==null&&(jn(e,t,r,i),pl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=$i(t),s=_i(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Yi(t,s,r),e!==null&&(jn(e,t,r,i),pl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zt(),i=$i(t),r=_i(n,i);r.tag=2,e!=null&&(r.callback=e),e=Yi(t,r,i),e!==null&&(jn(e,t,i,n),pl(e,t,i))}};function Tp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ho(n,i)||!Ho(r,s):!0}function W_(t,e,n){var i=!1,r=tr,s=e.contextType;return typeof s=="object"&&s!==null?s=Pn(s):(r=sn(e)?Rr:Yt.current,i=e.contextTypes,s=(i=i!=null)?Fs(t,r):tr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function wp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&vu.enqueueReplaceState(e,e.state,null)}function vf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Yd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Pn(s):(s=sn(e)?Rr:Yt.current,r.context=Fs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(_f(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&vu.enqueueReplaceState(r,r.state,null),Gl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Hs(t,e){try{var n="",i=e;do n+=$0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function sc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var My=typeof WeakMap=="function"?WeakMap:Map;function X_(t,e,n){n=_i(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ql||(ql=!0,Pf=i),xf(t,e)},n}function j_(t,e,n){n=_i(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){xf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xf(t,e),typeof i!="function"&&(qi===null?qi=new Set([this]):qi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ap(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new My;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Oy.bind(null,t,e,n),e.then(t,t))}function Cp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Rp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=_i(-1,1),e.tag=2,Yi(n,e,1))),n.lanes|=1),t)}var Ey=wi.ReactCurrentOwner,nn=!1;function Kt(t,e,n,i){e.child=t===null?S_(e,null,n,i):zs(e,t.child,n,i)}function Pp(t,e,n,i,r){n=n.render;var s=e.ref;return Ps(e,r),i=Qd(t,e,n,i,s,r),n=Jd(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Mi(t,e,r)):(ot&&n&&Bd(e),e.flags|=1,Kt(t,e,i,r),e.child)}function bp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!uh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Y_(t,e,s,i,r)):(t=yl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ho,n(o,i)&&t.ref===e.ref)return Mi(t,e,r)}return e.flags|=1,t=Ki(s,i),t.ref=e.ref,t.return=e,e.child=t}function Y_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ho(s,i)&&t.ref===e.ref)if(nn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(nn=!0);else return e.lanes=t.lanes,Mi(t,e,r)}return yf(t,e,n,i,r)}function q_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(Ss,dn),dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,nt(Ss,dn),dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,nt(Ss,dn),dn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,nt(Ss,dn),dn|=i;return Kt(t,e,r,n),e.child}function $_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function yf(t,e,n,i,r){var s=sn(n)?Rr:Yt.current;return s=Fs(e,s),Ps(e,r),n=Qd(t,e,n,i,s,r),i=Jd(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Mi(t,e,r)):(ot&&i&&Bd(e),e.flags|=1,Kt(t,e,n,r),e.child)}function Lp(t,e,n,i,r){if(sn(n)){var s=!0;kl(e)}else s=!1;if(Ps(e,r),e.stateNode===null)_l(t,e),W_(e,n,i),vf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Pn(u):(u=sn(n)?Rr:Yt.current,u=Fs(e,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&wp(e,o,i,u),Ii=!1;var h=e.memoizedState;o.state=h,Gl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||rn.current||Ii?(typeof f=="function"&&(_f(e,n,f,i),l=e.memoizedState),(a=Ii||Tp(e,n,a,i,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,E_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:kn(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pn(l):(l=sn(n)?Rr:Yt.current,l=Fs(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&wp(e,o,i,l),Ii=!1,h=e.memoizedState,o.state=h,Gl(e,i,o,r);var v=e.memoizedState;a!==d||h!==v||rn.current||Ii?(typeof m=="function"&&(_f(e,n,m,i),v=e.memoizedState),(u=Ii||Tp(e,n,u,i,h,v,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Sf(t,e,n,i,s,r)}function Sf(t,e,n,i,r,s){$_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&gp(e,n,!1),Mi(t,e,s);i=e.stateNode,Ey.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=zs(e,t.child,null,s),e.child=zs(e,null,a,s)):Kt(t,e,a,s),e.memoizedState=i.state,r&&gp(e,n,!0),e.child}function K_(t){var e=t.stateNode;e.pendingContext?mp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&mp(t,e.context,!1),qd(t,e.containerInfo)}function Dp(t,e,n,i,r){return ks(),Vd(r),e.flags|=256,Kt(t,e,n,i),e.child}var Mf={dehydrated:null,treeContext:null,retryLane:0};function Ef(t){return{baseLanes:t,cachePool:null,transitions:null}}function Z_(t,e,n){var i=e.pendingProps,r=lt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),nt(lt,r&1),t===null)return mf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Su(o,i,0,null),t=Cr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ef(n),e.memoizedState=Mf,t):nh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Ty(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ki(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ki(a,s):(s=Cr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Ef(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Mf,i}return s=t.child,t=s.sibling,i=Ki(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function nh(t,e){return e=Su({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Pa(t,e,n,i){return i!==null&&Vd(i),zs(e,t.child,null,n),t=nh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ty(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=sc(Error(ee(422))),Pa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Su({mode:"visible",children:i.children},r,0,null),s=Cr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&zs(e,t.child,null,o),e.child.memoizedState=Ef(o),e.memoizedState=Mf,s);if(!(e.mode&1))return Pa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=sc(s,i,void 0),Pa(t,e,o,i)}if(a=(o&t.childLanes)!==0,nn||a){if(i=Ut,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Si(t,r),jn(i,t,r,-1))}return lh(),i=sc(Error(ee(421))),Pa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Fy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,hn=ji(r.nextSibling),pn=e,ot=!0,Bn=null,t!==null&&(Sn[Mn++]=hi,Sn[Mn++]=pi,Sn[Mn++]=Pr,hi=t.id,pi=t.overflow,Pr=e),e=nh(e,i.children),e.flags|=4096,e)}function Up(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),gf(t.return,e,n)}function oc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Q_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Kt(t,e,i.children,n),i=lt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Up(t,n,e);else if(t.tag===19)Up(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(nt(lt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Wl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),oc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Wl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}oc(e,!0,n,null,s);break;case"together":oc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function _l(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Lr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=Ki(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ki(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function wy(t,e,n){switch(e.tag){case 3:K_(e),ks();break;case 5:T_(e);break;case 1:sn(e.type)&&kl(e);break;case 4:qd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;nt(Hl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(nt(lt,lt.current&1),e.flags|=128,null):n&e.child.childLanes?Z_(t,e,n):(nt(lt,lt.current&1),t=Mi(t,e,n),t!==null?t.sibling:null);nt(lt,lt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Q_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),nt(lt,lt.current),i)break;return null;case 22:case 23:return e.lanes=0,q_(t,e,n)}return Mi(t,e,n)}var J_,Tf,ev,tv;J_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Tf=function(){};ev=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Er(ni.current);var s=null;switch(n){case"input":r=Xc(t,r),i=Xc(t,i),s=[];break;case"select":r=ft({},r,{value:void 0}),i=ft({},i,{value:void 0}),s=[];break;case"textarea":r=qc(t,r),i=qc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ol)}Kc(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(No.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(No.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&it("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};tv=function(t,e,n,i){n!==i&&(e.flags|=4)};function oo(t,e){if(!ot)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Ay(t,e,n){var i=e.pendingProps;switch(Hd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return sn(e.type)&&Fl(),Bt(e),null;case 3:return i=e.stateNode,Bs(),st(rn),st(Yt),Kd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ca(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Bn!==null&&(Df(Bn),Bn=null))),Tf(t,e),Bt(e),null;case 5:$d(e);var r=Er(jo.current);if(n=e.type,t!==null&&e.stateNode!=null)ev(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return Bt(e),null}if(t=Er(ni.current),Ca(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ei]=e,i[Wo]=s,t=(e.mode&1)!==0,n){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(r=0;r<So.length;r++)it(So[r],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":Vh(i,s),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},it("invalid",i);break;case"textarea":Wh(i,s),it("invalid",i)}Kc(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Aa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Aa(i.textContent,a,t),r=["children",""+a]):No.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&it("scroll",i)}switch(n){case"input":va(i),Gh(i,s,!0);break;case"textarea":va(i),Xh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ol)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Pg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ei]=e,t[Wo]=i,J_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Zc(n,i),n){case"dialog":it("cancel",t),it("close",t),r=i;break;case"iframe":case"object":case"embed":it("load",t),r=i;break;case"video":case"audio":for(r=0;r<So.length;r++)it(So[r],t);r=i;break;case"source":it("error",t),r=i;break;case"img":case"image":case"link":it("error",t),it("load",t),r=i;break;case"details":it("toggle",t),r=i;break;case"input":Vh(t,i),r=Xc(t,i),it("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ft({},i,{value:void 0}),it("invalid",t);break;case"textarea":Wh(t,i),r=qc(t,i),it("invalid",t);break;default:r=i}Kc(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Dg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&bg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Io(t,l):typeof l=="number"&&Io(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(No.hasOwnProperty(s)?l!=null&&s==="onScroll"&&it("scroll",t):l!=null&&Ad(t,s,l,o))}switch(n){case"input":va(t),Gh(t,i,!1);break;case"textarea":va(t),Xh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+er(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ws(t,!!i.multiple,s,!1):i.defaultValue!=null&&ws(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ol)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bt(e),null;case 6:if(t&&e.stateNode!=null)tv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(n=Er(jo.current),Er(ni.current),Ca(e)){if(i=e.stateNode,n=e.memoizedProps,i[ei]=e,(s=i.nodeValue!==n)&&(t=pn,t!==null))switch(t.tag){case 3:Aa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Aa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ei]=e,e.stateNode=i}return Bt(e),null;case 13:if(st(lt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ot&&hn!==null&&e.mode&1&&!(e.flags&128))x_(),ks(),e.flags|=98560,s=!1;else if(s=Ca(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[ei]=e}else ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bt(e),s=!1}else Bn!==null&&(Df(Bn),Bn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||lt.current&1?At===0&&(At=3):lh())),e.updateQueue!==null&&(e.flags|=4),Bt(e),null);case 4:return Bs(),Tf(t,e),t===null&&Vo(e.stateNode.containerInfo),Bt(e),null;case 10:return Xd(e.type._context),Bt(e),null;case 17:return sn(e.type)&&Fl(),Bt(e),null;case 19:if(st(lt),s=e.memoizedState,s===null)return Bt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)oo(s,!1);else{if(At!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Wl(t),o!==null){for(e.flags|=128,oo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return nt(lt,lt.current&1|2),e.child}t=t.sibling}s.tail!==null&&_t()>Vs&&(e.flags|=128,i=!0,oo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Wl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),oo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ot)return Bt(e),null}else 2*_t()-s.renderingStartTime>Vs&&n!==1073741824&&(e.flags|=128,i=!0,oo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=_t(),e.sibling=null,n=lt.current,nt(lt,i?n&1|2:n&1),e):(Bt(e),null);case 22:case 23:return ah(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?dn&1073741824&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function Cy(t,e){switch(Hd(e),e.tag){case 1:return sn(e.type)&&Fl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Bs(),st(rn),st(Yt),Kd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $d(e),null;case 13:if(st(lt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return st(lt),null;case 4:return Bs(),null;case 10:return Xd(e.type._context),null;case 22:case 23:return ah(),null;case 24:return null;default:return null}}var ba=!1,Gt=!1,Ry=typeof WeakSet=="function"?WeakSet:Set,he=null;function ys(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){mt(t,e,i)}else n.current=null}function wf(t,e,n){try{n()}catch(i){mt(t,e,i)}}var Np=!1;function Py(t,e){if(lf=Ul,t=o_(),zd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,d=t,h=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++u===r&&(a=o),h===s&&++f===i&&(l=o),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(uf={focusedElem:t,selectionRange:n},Ul=!1,he=e;he!==null;)if(e=he,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,he=t;else for(;he!==null;){e=he;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,p=v.memoizedState,c=e.stateNode,g=c.getSnapshotBeforeUpdate(e.elementType===e.type?x:kn(e.type,x),p);c.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(S){mt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}return v=Np,Np=!1,v}function Po(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&wf(e,n,s)}r=r.next}while(r!==i)}}function xu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Af(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function nv(t){var e=t.alternate;e!==null&&(t.alternate=null,nv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ei],delete e[Wo],delete e[df],delete e[fy],delete e[dy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function iv(t){return t.tag===5||t.tag===3||t.tag===4}function Ip(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||iv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ol));else if(i!==4&&(t=t.child,t!==null))for(Cf(t,e,n),t=t.sibling;t!==null;)Cf(t,e,n),t=t.sibling}function Rf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Rf(t,e,n),t=t.sibling;t!==null;)Rf(t,e,n),t=t.sibling}var Ot=null,zn=!1;function Ci(t,e,n){for(n=n.child;n!==null;)rv(t,e,n),n=n.sibling}function rv(t,e,n){if(ti&&typeof ti.onCommitFiberUnmount=="function")try{ti.onCommitFiberUnmount(fu,n)}catch{}switch(n.tag){case 5:Gt||ys(n,e);case 6:var i=Ot,r=zn;Ot=null,Ci(t,e,n),Ot=i,zn=r,Ot!==null&&(zn?(t=Ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ot.removeChild(n.stateNode));break;case 18:Ot!==null&&(zn?(t=Ot,n=n.stateNode,t.nodeType===8?Ju(t.parentNode,n):t.nodeType===1&&Ju(t,n),zo(t)):Ju(Ot,n.stateNode));break;case 4:i=Ot,r=zn,Ot=n.stateNode.containerInfo,zn=!0,Ci(t,e,n),Ot=i,zn=r;break;case 0:case 11:case 14:case 15:if(!Gt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&wf(n,e,o),r=r.next}while(r!==i)}Ci(t,e,n);break;case 1:if(!Gt&&(ys(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){mt(n,e,a)}Ci(t,e,n);break;case 21:Ci(t,e,n);break;case 22:n.mode&1?(Gt=(i=Gt)||n.memoizedState!==null,Ci(t,e,n),Gt=i):Ci(t,e,n);break;default:Ci(t,e,n)}}function Op(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ry),e.forEach(function(i){var r=ky.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Dn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ot=a.stateNode,zn=!1;break e;case 3:Ot=a.stateNode.containerInfo,zn=!0;break e;case 4:Ot=a.stateNode.containerInfo,zn=!0;break e}a=a.return}if(Ot===null)throw Error(ee(160));rv(s,o,r),Ot=null,zn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){mt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)sv(e,t),e=e.sibling}function sv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dn(e,t),Kn(t),i&4){try{Po(3,t,t.return),xu(3,t)}catch(x){mt(t,t.return,x)}try{Po(5,t,t.return)}catch(x){mt(t,t.return,x)}}break;case 1:Dn(e,t),Kn(t),i&512&&n!==null&&ys(n,n.return);break;case 5:if(Dn(e,t),Kn(t),i&512&&n!==null&&ys(n,n.return),t.flags&32){var r=t.stateNode;try{Io(r,"")}catch(x){mt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Cg(r,s),Zc(a,o);var u=Zc(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?Dg(r,d):f==="dangerouslySetInnerHTML"?bg(r,d):f==="children"?Io(r,d):Ad(r,f,d,u)}switch(a){case"input":jc(r,s);break;case"textarea":Rg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ws(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?ws(r,!!s.multiple,s.defaultValue,!0):ws(r,!!s.multiple,s.multiple?[]:"",!1))}r[Wo]=s}catch(x){mt(t,t.return,x)}}break;case 6:if(Dn(e,t),Kn(t),i&4){if(t.stateNode===null)throw Error(ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){mt(t,t.return,x)}}break;case 3:if(Dn(e,t),Kn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{zo(e.containerInfo)}catch(x){mt(t,t.return,x)}break;case 4:Dn(e,t),Kn(t);break;case 13:Dn(e,t),Kn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(sh=_t())),i&4&&Op(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Gt=(u=Gt)||f,Dn(e,t),Gt=u):Dn(e,t),Kn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(he=t,f=t.child;f!==null;){for(d=he=f;he!==null;){switch(h=he,m=h.child,h.tag){case 0:case 11:case 14:case 15:Po(4,h,h.return);break;case 1:ys(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){mt(i,n,x)}}break;case 5:ys(h,h.return);break;case 22:if(h.memoizedState!==null){kp(d);continue}}m!==null?(m.return=h,he=m):kp(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Lg("display",o))}catch(x){mt(t,t.return,x)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){mt(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Dn(e,t),Kn(t),i&4&&Op(t);break;case 21:break;default:Dn(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(iv(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Io(r,""),i.flags&=-33);var s=Ip(t);Rf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Ip(t);Cf(t,a,o);break;default:throw Error(ee(161))}}catch(l){mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function by(t,e,n){he=t,ov(t)}function ov(t,e,n){for(var i=(t.mode&1)!==0;he!==null;){var r=he,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ba;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Gt;a=ba;var u=Gt;if(ba=o,(Gt=l)&&!u)for(he=r;he!==null;)o=he,l=o.child,o.tag===22&&o.memoizedState!==null?zp(r):l!==null?(l.return=o,he=l):zp(r);for(;s!==null;)he=s,ov(s),s=s.sibling;he=r,ba=a,Gt=u}Fp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,he=s):Fp(t)}}function Fp(t){for(;he!==null;){var e=he;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Gt||xu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Gt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:kn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Sp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Sp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&zo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}Gt||e.flags&512&&Af(e)}catch(h){mt(e,e.return,h)}}if(e===t){he=null;break}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}}function kp(t){for(;he!==null;){var e=he;if(e===t){he=null;break}var n=e.sibling;if(n!==null){n.return=e.return,he=n;break}he=e.return}}function zp(t){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xu(4,e)}catch(l){mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){mt(e,r,l)}}var s=e.return;try{Af(e)}catch(l){mt(e,s,l)}break;case 5:var o=e.return;try{Af(e)}catch(l){mt(e,o,l)}}}catch(l){mt(e,e.return,l)}if(e===t){he=null;break}var a=e.sibling;if(a!==null){a.return=e.return,he=a;break}he=e.return}}var Ly=Math.ceil,Yl=wi.ReactCurrentDispatcher,ih=wi.ReactCurrentOwner,Cn=wi.ReactCurrentBatchConfig,We=0,Ut=null,Et=null,Ft=0,dn=0,Ss=sr(0),At=0,Ko=null,Lr=0,yu=0,rh=0,bo=null,tn=null,sh=0,Vs=1/0,ci=null,ql=!1,Pf=null,qi=null,La=!1,Hi=null,$l=0,Lo=0,bf=null,vl=-1,xl=0;function Zt(){return We&6?_t():vl!==-1?vl:vl=_t()}function $i(t){return t.mode&1?We&2&&Ft!==0?Ft&-Ft:py.transition!==null?(xl===0&&(xl=Wg()),xl):(t=Je,t!==0||(t=window.event,t=t===void 0?16:Zg(t.type)),t):1}function jn(t,e,n,i){if(50<Lo)throw Lo=0,bf=null,Error(ee(185));ia(t,n,i),(!(We&2)||t!==Ut)&&(t===Ut&&(!(We&2)&&(yu|=n),At===4&&ki(t,Ft)),on(t,i),n===1&&We===0&&!(e.mode&1)&&(Vs=_t()+500,gu&&or()))}function on(t,e){var n=t.callbackNode;px(t,e);var i=Dl(t,t===Ut?Ft:0);if(i===0)n!==null&&qh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&qh(n),e===1)t.tag===0?hy(Bp.bind(null,t)):g_(Bp.bind(null,t)),uy(function(){!(We&6)&&or()}),n=null;else{switch(Xg(i)){case 1:n=Ld;break;case 4:n=Vg;break;case 16:n=Ll;break;case 536870912:n=Gg;break;default:n=Ll}n=pv(n,av.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function av(t,e){if(vl=-1,xl=0,We&6)throw Error(ee(327));var n=t.callbackNode;if(bs()&&t.callbackNode!==n)return null;var i=Dl(t,t===Ut?Ft:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Kl(t,i);else{e=i;var r=We;We|=2;var s=uv();(Ut!==t||Ft!==e)&&(ci=null,Vs=_t()+500,Ar(t,e));do try{Ny();break}catch(a){lv(t,a)}while(!0);Wd(),Yl.current=s,We=r,Et!==null?e=0:(Ut=null,Ft=0,e=At)}if(e!==0){if(e===2&&(r=nf(t),r!==0&&(i=r,e=Lf(t,r))),e===1)throw n=Ko,Ar(t,0),ki(t,i),on(t,_t()),n;if(e===6)ki(t,i);else{if(r=t.current.alternate,!(i&30)&&!Dy(r)&&(e=Kl(t,i),e===2&&(s=nf(t),s!==0&&(i=s,e=Lf(t,s))),e===1))throw n=Ko,Ar(t,0),ki(t,i),on(t,_t()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:_r(t,tn,ci);break;case 3:if(ki(t,i),(i&130023424)===i&&(e=sh+500-_t(),10<e)){if(Dl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Zt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ff(_r.bind(null,t,tn,ci),e);break}_r(t,tn,ci);break;case 4:if(ki(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Xn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=_t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ly(i/1960))-i,10<i){t.timeoutHandle=ff(_r.bind(null,t,tn,ci),i);break}_r(t,tn,ci);break;case 5:_r(t,tn,ci);break;default:throw Error(ee(329))}}}return on(t,_t()),t.callbackNode===n?av.bind(null,t):null}function Lf(t,e){var n=bo;return t.current.memoizedState.isDehydrated&&(Ar(t,e).flags|=256),t=Kl(t,e),t!==2&&(e=tn,tn=n,e!==null&&Df(e)),t}function Df(t){tn===null?tn=t:tn.push.apply(tn,t)}function Dy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!qn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ki(t,e){for(e&=~rh,e&=~yu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xn(e),i=1<<n;t[n]=-1,e&=~i}}function Bp(t){if(We&6)throw Error(ee(327));bs();var e=Dl(t,0);if(!(e&1))return on(t,_t()),null;var n=Kl(t,e);if(t.tag!==0&&n===2){var i=nf(t);i!==0&&(e=i,n=Lf(t,i))}if(n===1)throw n=Ko,Ar(t,0),ki(t,e),on(t,_t()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_r(t,tn,ci),on(t,_t()),null}function oh(t,e){var n=We;We|=1;try{return t(e)}finally{We=n,We===0&&(Vs=_t()+500,gu&&or())}}function Dr(t){Hi!==null&&Hi.tag===0&&!(We&6)&&bs();var e=We;We|=1;var n=Cn.transition,i=Je;try{if(Cn.transition=null,Je=1,t)return t()}finally{Je=i,Cn.transition=n,We=e,!(We&6)&&or()}}function ah(){dn=Ss.current,st(Ss)}function Ar(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ly(n)),Et!==null)for(n=Et.return;n!==null;){var i=n;switch(Hd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Fl();break;case 3:Bs(),st(rn),st(Yt),Kd();break;case 5:$d(i);break;case 4:Bs();break;case 13:st(lt);break;case 19:st(lt);break;case 10:Xd(i.type._context);break;case 22:case 23:ah()}n=n.return}if(Ut=t,Et=t=Ki(t.current,null),Ft=dn=e,At=0,Ko=null,rh=yu=Lr=0,tn=bo=null,Mr!==null){for(e=0;e<Mr.length;e++)if(n=Mr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Mr=null}return t}function lv(t,e){do{var n=Et;try{if(Wd(),ml.current=jl,Xl){for(var i=ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Xl=!1}if(br=0,Lt=wt=ut=null,Ro=!1,Yo=0,ih.current=null,n===null||n.return===null){At=1,Ko=e,Et=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Cp(o);if(m!==null){m.flags&=-257,Rp(m,o,a,s,e),m.mode&1&&Ap(s,u,e),e=m,l=u;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){Ap(s,u,e),lh();break e}l=Error(ee(426))}}else if(ot&&a.mode&1){var p=Cp(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Rp(p,o,a,s,e),Vd(Hs(l,a));break e}}s=l=Hs(l,a),At!==4&&(At=2),bo===null?bo=[s]:bo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=X_(s,l,e);yp(s,c);break e;case 1:a=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(qi===null||!qi.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=j_(s,a,e);yp(s,S);break e}}s=s.return}while(s!==null)}fv(n)}catch(R){e=R,Et===n&&n!==null&&(Et=n=n.return);continue}break}while(!0)}function uv(){var t=Yl.current;return Yl.current=jl,t===null?jl:t}function lh(){(At===0||At===3||At===2)&&(At=4),Ut===null||!(Lr&268435455)&&!(yu&268435455)||ki(Ut,Ft)}function Kl(t,e){var n=We;We|=2;var i=uv();(Ut!==t||Ft!==e)&&(ci=null,Ar(t,e));do try{Uy();break}catch(r){lv(t,r)}while(!0);if(Wd(),We=n,Yl.current=i,Et!==null)throw Error(ee(261));return Ut=null,Ft=0,At}function Uy(){for(;Et!==null;)cv(Et)}function Ny(){for(;Et!==null&&!sx();)cv(Et)}function cv(t){var e=hv(t.alternate,t,dn);t.memoizedProps=t.pendingProps,e===null?fv(t):Et=e,ih.current=null}function fv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Cy(n,e),n!==null){n.flags&=32767,Et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{At=6,Et=null;return}}else if(n=Ay(n,e,dn),n!==null){Et=n;return}if(e=e.sibling,e!==null){Et=e;return}Et=e=t}while(e!==null);At===0&&(At=5)}function _r(t,e,n){var i=Je,r=Cn.transition;try{Cn.transition=null,Je=1,Iy(t,e,n,i)}finally{Cn.transition=r,Je=i}return null}function Iy(t,e,n,i){do bs();while(Hi!==null);if(We&6)throw Error(ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(mx(t,s),t===Ut&&(Et=Ut=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||La||(La=!0,pv(Ll,function(){return bs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Cn.transition,Cn.transition=null;var o=Je;Je=1;var a=We;We|=4,ih.current=null,Py(t,n),sv(n,t),ty(uf),Ul=!!lf,uf=lf=null,t.current=n,by(n),ox(),We=a,Je=o,Cn.transition=s}else t.current=n;if(La&&(La=!1,Hi=t,$l=r),s=t.pendingLanes,s===0&&(qi=null),ux(n.stateNode),on(t,_t()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ql)throw ql=!1,t=Pf,Pf=null,t;return $l&1&&t.tag!==0&&bs(),s=t.pendingLanes,s&1?t===bf?Lo++:(Lo=0,bf=t):Lo=0,or(),null}function bs(){if(Hi!==null){var t=Xg($l),e=Cn.transition,n=Je;try{if(Cn.transition=null,Je=16>t?16:t,Hi===null)var i=!1;else{if(t=Hi,Hi=null,$l=0,We&6)throw Error(ee(331));var r=We;for(We|=4,he=t.current;he!==null;){var s=he,o=s.child;if(he.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(he=u;he!==null;){var f=he;switch(f.tag){case 0:case 11:case 15:Po(8,f,s)}var d=f.child;if(d!==null)d.return=f,he=d;else for(;he!==null;){f=he;var h=f.sibling,m=f.return;if(nv(f),f===u){he=null;break}if(h!==null){h.return=m,he=h;break}he=m}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}he=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,he=o;else e:for(;he!==null;){if(s=he,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Po(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,he=c;break e}he=s.return}}var g=t.current;for(he=g;he!==null;){o=he;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,he=_;else e:for(o=g;he!==null;){if(a=he,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xu(9,a)}}catch(R){mt(a,a.return,R)}if(a===o){he=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,he=S;break e}he=a.return}}if(We=r,or(),ti&&typeof ti.onPostCommitFiberRoot=="function")try{ti.onPostCommitFiberRoot(fu,t)}catch{}i=!0}return i}finally{Je=n,Cn.transition=e}}return!1}function Hp(t,e,n){e=Hs(n,e),e=X_(t,e,1),t=Yi(t,e,1),e=Zt(),t!==null&&(ia(t,1,e),on(t,e))}function mt(t,e,n){if(t.tag===3)Hp(t,t,n);else for(;e!==null;){if(e.tag===3){Hp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(qi===null||!qi.has(i))){t=Hs(n,t),t=j_(e,t,1),e=Yi(e,t,1),t=Zt(),e!==null&&(ia(e,1,t),on(e,t));break}}e=e.return}}function Oy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Zt(),t.pingedLanes|=t.suspendedLanes&n,Ut===t&&(Ft&n)===n&&(At===4||At===3&&(Ft&130023424)===Ft&&500>_t()-sh?Ar(t,0):rh|=n),on(t,e)}function dv(t,e){e===0&&(t.mode&1?(e=Sa,Sa<<=1,!(Sa&130023424)&&(Sa=4194304)):e=1);var n=Zt();t=Si(t,e),t!==null&&(ia(t,e,n),on(t,n))}function Fy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),dv(t,n)}function ky(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),dv(t,n)}var hv;hv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rn.current)nn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return nn=!1,wy(t,e,n);nn=!!(t.flags&131072)}else nn=!1,ot&&e.flags&1048576&&__(e,Bl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;_l(t,e),t=e.pendingProps;var r=Fs(e,Yt.current);Ps(e,n),r=Qd(null,e,i,t,r,n);var s=Jd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,sn(i)?(s=!0,kl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Yd(e),r.updater=vu,e.stateNode=r,r._reactInternals=e,vf(e,i,t,n),e=Sf(null,e,i,!0,s,n)):(e.tag=0,ot&&s&&Bd(e),Kt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(_l(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=By(i),t=kn(i,t),r){case 0:e=yf(null,e,i,t,n);break e;case 1:e=Lp(null,e,i,t,n);break e;case 11:e=Pp(null,e,i,t,n);break e;case 14:e=bp(null,e,i,kn(i.type,t),n);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),yf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),Lp(t,e,i,r,n);case 3:e:{if(K_(e),t===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,E_(t,e),Gl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Hs(Error(ee(423)),e),e=Dp(t,e,i,n,r);break e}else if(i!==r){r=Hs(Error(ee(424)),e),e=Dp(t,e,i,n,r);break e}else for(hn=ji(e.stateNode.containerInfo.firstChild),pn=e,ot=!0,Bn=null,n=S_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ks(),i===r){e=Mi(t,e,n);break e}Kt(t,e,i,n)}e=e.child}return e;case 5:return T_(e),t===null&&mf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,cf(i,r)?o=null:s!==null&&cf(i,s)&&(e.flags|=32),$_(t,e),Kt(t,e,o,n),e.child;case 6:return t===null&&mf(e),null;case 13:return Z_(t,e,n);case 4:return qd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=zs(e,null,i,n):Kt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),Pp(t,e,i,r,n);case 7:return Kt(t,e,e.pendingProps,n),e.child;case 8:return Kt(t,e,e.pendingProps.children,n),e.child;case 12:return Kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,nt(Hl,i._currentValue),i._currentValue=o,s!==null)if(qn(s.value,o)){if(s.children===r.children&&!rn.current){e=Mi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=_i(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),gf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),gf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Kt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ps(e,n),r=Pn(r),i=i(r),e.flags|=1,Kt(t,e,i,n),e.child;case 14:return i=e.type,r=kn(i,e.pendingProps),r=kn(i.type,r),bp(t,e,i,r,n);case 15:return Y_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),_l(t,e),e.tag=1,sn(i)?(t=!0,kl(e)):t=!1,Ps(e,n),W_(e,i,r),vf(e,i,r,n),Sf(null,e,i,!0,t,n);case 19:return Q_(t,e,n);case 22:return q_(t,e,n)}throw Error(ee(156,e.tag))};function pv(t,e){return Hg(t,e)}function zy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(t,e,n,i){return new zy(t,e,n,i)}function uh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function By(t){if(typeof t=="function")return uh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Rd)return 11;if(t===Pd)return 14}return 2}function Ki(t,e){var n=t.alternate;return n===null?(n=wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function yl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")uh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case fs:return Cr(n.children,r,s,e);case Cd:o=8,r|=8;break;case Hc:return t=wn(12,n,e,r|2),t.elementType=Hc,t.lanes=s,t;case Vc:return t=wn(13,n,e,r),t.elementType=Vc,t.lanes=s,t;case Gc:return t=wn(19,n,e,r),t.elementType=Gc,t.lanes=s,t;case Tg:return Su(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Mg:o=10;break e;case Eg:o=9;break e;case Rd:o=11;break e;case Pd:o=14;break e;case Ni:o=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=wn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Cr(t,e,n,i){return t=wn(7,t,i,e),t.lanes=n,t}function Su(t,e,n,i){return t=wn(22,t,i,e),t.elementType=Tg,t.lanes=n,t.stateNode={isHidden:!1},t}function ac(t,e,n){return t=wn(6,t,null,e),t.lanes=n,t}function lc(t,e,n){return e=wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Hy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vu(0),this.expirationTimes=Vu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ch(t,e,n,i,r,s,o,a,l){return t=new Hy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=wn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yd(s),t}function Vy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function mv(t){if(!t)return tr;t=t._reactInternals;e:{if(Fr(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if(sn(n))return m_(t,n,e)}return e}function gv(t,e,n,i,r,s,o,a,l){return t=ch(n,i,!0,t,r,s,o,a,l),t.context=mv(null),n=t.current,i=Zt(),r=$i(n),s=_i(i,r),s.callback=e??null,Yi(n,s,r),t.current.lanes=r,ia(t,r,i),on(t,i),t}function Mu(t,e,n,i){var r=e.current,s=Zt(),o=$i(r);return n=mv(n),e.context===null?e.context=n:e.pendingContext=n,e=_i(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Yi(r,e,o),t!==null&&(jn(t,r,o,s),pl(t,r,o)),o}function Zl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Vp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function fh(t,e){Vp(t,e),(t=t.alternate)&&Vp(t,e)}function Gy(){return null}var _v=typeof reportError=="function"?reportError:function(t){console.error(t)};function dh(t){this._internalRoot=t}Eu.prototype.render=dh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));Mu(t,e,null,null)};Eu.prototype.unmount=dh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Dr(function(){Mu(null,t,null,null)}),e[yi]=null}};function Eu(t){this._internalRoot=t}Eu.prototype.unstable_scheduleHydration=function(t){if(t){var e=qg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Fi.length&&e!==0&&e<Fi[n].priority;n++);Fi.splice(n,0,t),n===0&&Kg(t)}};function hh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Gp(){}function Wy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Zl(o);s.call(u)}}var o=gv(e,i,t,0,null,!1,!1,"",Gp);return t._reactRootContainer=o,t[yi]=o.current,Vo(t.nodeType===8?t.parentNode:t),Dr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Zl(l);a.call(u)}}var l=ch(t,0,!1,null,null,!1,!1,"",Gp);return t._reactRootContainer=l,t[yi]=l.current,Vo(t.nodeType===8?t.parentNode:t),Dr(function(){Mu(e,l,n,i)}),l}function wu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Zl(o);a.call(l)}}Mu(e,o,t,r)}else o=Wy(n,e,t,r,i);return Zl(o)}jg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=yo(e.pendingLanes);n!==0&&(Dd(e,n|1),on(e,_t()),!(We&6)&&(Vs=_t()+500,or()))}break;case 13:Dr(function(){var i=Si(t,1);if(i!==null){var r=Zt();jn(i,t,1,r)}}),fh(t,1)}};Ud=function(t){if(t.tag===13){var e=Si(t,134217728);if(e!==null){var n=Zt();jn(e,t,134217728,n)}fh(t,134217728)}};Yg=function(t){if(t.tag===13){var e=$i(t),n=Si(t,e);if(n!==null){var i=Zt();jn(n,t,e,i)}fh(t,e)}};qg=function(){return Je};$g=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};Jc=function(t,e,n){switch(e){case"input":if(jc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=mu(i);if(!r)throw Error(ee(90));Ag(i),jc(i,r)}}}break;case"textarea":Rg(t,n);break;case"select":e=n.value,e!=null&&ws(t,!!n.multiple,e,!1)}};Ig=oh;Og=Dr;var Xy={usingClientEntryPoint:!1,Events:[sa,ms,mu,Ug,Ng,oh]},ao={findFiberByHostInstance:Sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jy={bundleType:ao.bundleType,version:ao.version,rendererPackageName:ao.rendererPackageName,rendererConfig:ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=zg(t),t===null?null:t.stateNode},findFiberByHostInstance:ao.findFiberByHostInstance||Gy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Da=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Da.isDisabled&&Da.supportsFiber)try{fu=Da.inject(jy),ti=Da}catch{}}gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xy;gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hh(e))throw Error(ee(200));return Vy(t,e,null,n)};gn.createRoot=function(t,e){if(!hh(t))throw Error(ee(299));var n=!1,i="",r=_v;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ch(t,1,!1,null,null,n,!1,i,r),t[yi]=e.current,Vo(t.nodeType===8?t.parentNode:t),new dh(e)};gn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=zg(e),t=t===null?null:t.stateNode,t};gn.flushSync=function(t){return Dr(t)};gn.hydrate=function(t,e,n){if(!Tu(e))throw Error(ee(200));return wu(null,t,e,!0,n)};gn.hydrateRoot=function(t,e,n){if(!hh(t))throw Error(ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=_v;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=gv(e,null,t,1,n??null,r,!1,s,o),t[yi]=e.current,Vo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Eu(e)};gn.render=function(t,e,n){if(!Tu(e))throw Error(ee(200));return wu(null,t,e,!1,n)};gn.unmountComponentAtNode=function(t){if(!Tu(t))throw Error(ee(40));return t._reactRootContainer?(Dr(function(){wu(null,null,t,!1,function(){t._reactRootContainer=null,t[yi]=null})}),!0):!1};gn.unstable_batchedUpdates=oh;gn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Tu(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return wu(t,e,n,!1,i)};gn.version="18.3.1-next-f1338f8080-20240426";function vv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vv)}catch(t){console.error(t)}}vv(),vg.exports=gn;var Yy=vg.exports,Wp=Yy;zc.createRoot=Wp.createRoot,zc.hydrateRoot=Wp.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zo(){return Zo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Zo.apply(this,arguments)}var Vi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Vi||(Vi={}));const Xp="popstate";function qy(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return Uf("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Ql(r)}return Ky(e,n,null,t)}function gt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function xv(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function $y(){return Math.random().toString(36).substr(2,8)}function jp(t,e){return{usr:t.state,key:t.key,idx:e}}function Uf(t,e,n,i){return n===void 0&&(n=null),Zo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Qs(e):e,{state:n,key:e&&e.key||i||$y()})}function Ql(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Qs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function Ky(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=Vi.Pop,l=null,u=f();u==null&&(u=0,o.replaceState(Zo({},o.state,{idx:u}),""));function f(){return(o.state||{idx:null}).idx}function d(){a=Vi.Pop;let p=f(),c=p==null?null:p-u;u=p,l&&l({action:a,location:x.location,delta:c})}function h(p,c){a=Vi.Push;let g=Uf(x.location,p,c);u=f()+1;let _=jp(g,u),S=x.createHref(g);try{o.pushState(_,"",S)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;r.location.assign(S)}s&&l&&l({action:a,location:x.location,delta:1})}function m(p,c){a=Vi.Replace;let g=Uf(x.location,p,c);u=f();let _=jp(g,u),S=x.createHref(g);o.replaceState(_,"",S),s&&l&&l({action:a,location:x.location,delta:0})}function v(p){let c=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof p=="string"?p:Ql(p);return g=g.replace(/ $/,"%20"),gt(c,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,c)}let x={get action(){return a},get location(){return t(r,o)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Xp,d),l=p,()=>{r.removeEventListener(Xp,d),l=null}},createHref(p){return e(r,p)},createURL:v,encodeLocation(p){let c=v(p);return{pathname:c.pathname,search:c.search,hash:c.hash}},push:h,replace:m,go(p){return o.go(p)}};return x}var Yp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Yp||(Yp={}));function Zy(t,e,n){return n===void 0&&(n="/"),Qy(t,e,n,!1)}function Qy(t,e,n,i){let r=typeof e=="string"?Qs(e):e,s=Gs(r.pathname||"/",n);if(s==null)return null;let o=yv(t);Jy(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=cS(s);a=lS(o[l],u,i)}return a}function yv(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(gt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=Zi([i,l.relativePath]),f=n.concat(l);s.children&&s.children.length>0&&(gt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),yv(s.children,e,f,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:oS(u,s.index),routesMeta:f})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of Sv(s.path))r(s,o,l)}),e}function Sv(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=Sv(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Jy(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:aS(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const eS=/^:[\w-]+$/,tS=3,nS=2,iS=1,rS=10,sS=-2,qp=t=>t==="*";function oS(t,e){let n=t.split("/"),i=n.length;return n.some(qp)&&(i+=sS),e&&(i+=nS),n.filter(r=>!qp(r)).reduce((r,s)=>r+(eS.test(s)?tS:s===""?iS:rS),i)}function aS(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function lS(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],u=a===i.length-1,f=s==="/"?e:e.slice(s.length)||"/",d=Jl({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},f),h=l.route;if(!d&&u&&n&&!i[i.length-1].route.index&&(d=Jl({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},f)),!d)return null;Object.assign(r,d.params),o.push({params:r,pathname:Zi([s,d.pathname]),pathnameBase:pS(Zi([s,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(s=Zi([s,d.pathnameBase]))}return o}function Jl(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=uS(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,f,d)=>{let{paramName:h,isOptional:m}=f;if(h==="*"){let x=a[d]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const v=a[d];return m&&!v?u[h]=void 0:u[h]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function uS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),xv(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function cS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return xv(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Gs(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function fS(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Qs(t):t;return{pathname:n?n.startsWith("/")?n:dS(n,e):e,search:mS(i),hash:gS(r)}}function dS(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function uc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function hS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Mv(t,e){let n=hS(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Ev(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Qs(t):(r=Zo({},t),gt(!r.pathname||!r.pathname.includes("?"),uc("?","pathname","search",r)),gt(!r.pathname||!r.pathname.includes("#"),uc("#","pathname","hash",r)),gt(!r.search||!r.search.includes("#"),uc("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!i&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;r.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=fS(r,a),u=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const Zi=t=>t.join("/").replace(/\/\/+/g,"/"),pS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),mS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,gS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function _S(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Tv=["post","put","patch","delete"];new Set(Tv);const vS=["get",...Tv];new Set(vS);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qo(){return Qo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Qo.apply(this,arguments)}const Au=le.createContext(null),wv=le.createContext(null),ar=le.createContext(null),Cu=le.createContext(null),kr=le.createContext({outlet:null,matches:[],isDataRoute:!1}),Av=le.createContext(null);function xS(t,e){let{relative:n}=e===void 0?{}:e;aa()||gt(!1);let{basename:i,navigator:r}=le.useContext(ar),{hash:s,pathname:o,search:a}=Ru(t,{relative:n}),l=o;return i!=="/"&&(l=o==="/"?i:Zi([i,o])),r.createHref({pathname:l,search:a,hash:s})}function aa(){return le.useContext(Cu)!=null}function la(){return aa()||gt(!1),le.useContext(Cu).location}function Cv(t){le.useContext(ar).static||le.useLayoutEffect(t)}function yS(){let{isDataRoute:t}=le.useContext(kr);return t?US():SS()}function SS(){aa()||gt(!1);let t=le.useContext(Au),{basename:e,future:n,navigator:i}=le.useContext(ar),{matches:r}=le.useContext(kr),{pathname:s}=la(),o=JSON.stringify(Mv(r,n.v7_relativeSplatPath)),a=le.useRef(!1);return Cv(()=>{a.current=!0}),le.useCallback(function(u,f){if(f===void 0&&(f={}),!a.current)return;if(typeof u=="number"){i.go(u);return}let d=Ev(u,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Zi([e,d.pathname])),(f.replace?i.replace:i.push)(d,f.state,f)},[e,i,o,s,t])}function Ru(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=le.useContext(ar),{matches:r}=le.useContext(kr),{pathname:s}=la(),o=JSON.stringify(Mv(r,i.v7_relativeSplatPath));return le.useMemo(()=>Ev(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function MS(t,e){return ES(t,e)}function ES(t,e,n,i){aa()||gt(!1);let{navigator:r}=le.useContext(ar),{matches:s}=le.useContext(kr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=la(),f;if(e){var d;let p=typeof e=="string"?Qs(e):e;l==="/"||(d=p.pathname)!=null&&d.startsWith(l)||gt(!1),f=p}else f=u;let h=f.pathname||"/",m=h;if(l!=="/"){let p=l.replace(/^\//,"").split("/");m="/"+h.replace(/^\//,"").split("/").slice(p.length).join("/")}let v=Zy(t,{pathname:m}),x=RS(v&&v.map(p=>Object.assign({},p,{params:Object.assign({},a,p.params),pathname:Zi([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:Zi([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,n,i);return e&&x?le.createElement(Cu.Provider,{value:{location:Qo({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Vi.Pop}},x):x}function TS(){let t=DS(),e=_S(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return le.createElement(le.Fragment,null,le.createElement("h2",null,"Unexpected Application Error!"),le.createElement("h3",{style:{fontStyle:"italic"}},e),n?le.createElement("pre",{style:r},n):null,null)}const wS=le.createElement(TS,null);class AS extends le.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?le.createElement(kr.Provider,{value:this.props.routeContext},le.createElement(Av.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function CS(t){let{routeContext:e,match:n,children:i}=t,r=le.useContext(Au);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),le.createElement(kr.Provider,{value:e},i)}function RS(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let f=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);f>=0||gt(!1),o=o.slice(0,Math.min(o.length,f+1))}let l=!1,u=-1;if(n&&i&&i.v7_partialHydration)for(let f=0;f<o.length;f++){let d=o[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=f),d.route.id){let{loaderData:h,errors:m}=n,v=d.route.loader&&h[d.route.id]===void 0&&(!m||m[d.route.id]===void 0);if(d.route.lazy||v){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((f,d,h)=>{let m,v=!1,x=null,p=null;n&&(m=a&&d.route.id?a[d.route.id]:void 0,x=d.route.errorElement||wS,l&&(u<0&&h===0?(v=!0,p=null):u===h&&(v=!0,p=d.route.hydrateFallbackElement||null)));let c=e.concat(o.slice(0,h+1)),g=()=>{let _;return m?_=x:v?_=p:d.route.Component?_=le.createElement(d.route.Component,null):d.route.element?_=d.route.element:_=f,le.createElement(CS,{match:d,routeContext:{outlet:f,matches:c,isDataRoute:n!=null},children:_})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?le.createElement(AS,{location:n.location,revalidation:n.revalidation,component:x,error:m,children:g(),routeContext:{outlet:null,matches:c,isDataRoute:!0}}):g()},null)}var Rv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Rv||{}),eu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(eu||{});function PS(t){let e=le.useContext(Au);return e||gt(!1),e}function bS(t){let e=le.useContext(wv);return e||gt(!1),e}function LS(t){let e=le.useContext(kr);return e||gt(!1),e}function Pv(t){let e=LS(),n=e.matches[e.matches.length-1];return n.route.id||gt(!1),n.route.id}function DS(){var t;let e=le.useContext(Av),n=bS(eu.UseRouteError),i=Pv(eu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function US(){let{router:t}=PS(Rv.UseNavigateStable),e=Pv(eu.UseNavigateStable),n=le.useRef(!1);return Cv(()=>{n.current=!0}),le.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Qo({fromRouteId:e},s)))},[t,e])}function Nf(t){gt(!1)}function NS(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Vi.Pop,navigator:s,static:o=!1,future:a}=t;aa()&&gt(!1);let l=e.replace(/^\/*/,"/"),u=le.useMemo(()=>({basename:l,navigator:s,static:o,future:Qo({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=Qs(i));let{pathname:f="/",search:d="",hash:h="",state:m=null,key:v="default"}=i,x=le.useMemo(()=>{let p=Gs(f,l);return p==null?null:{location:{pathname:p,search:d,hash:h,state:m,key:v},navigationType:r}},[l,f,d,h,m,v,r]);return x==null?null:le.createElement(ar.Provider,{value:u},le.createElement(Cu.Provider,{children:n,value:x}))}function IS(t){let{children:e,location:n}=t;return MS(If(e),n)}new Promise(()=>{});function If(t,e){e===void 0&&(e=[]);let n=[];return le.Children.forEach(t,(i,r)=>{if(!le.isValidElement(i))return;let s=[...e,r];if(i.type===le.Fragment){n.push.apply(n,If(i.props.children,s));return}i.type!==Nf&&gt(!1),!i.props.index||!i.props.children||gt(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=If(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tu(){return tu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},tu.apply(this,arguments)}function bv(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function OS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function FS(t,e){return t.button===0&&(!e||e==="_self")&&!OS(t)}const kS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],zS=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],BS="6";try{window.__reactRouterVersion=BS}catch{}const HS=le.createContext({isTransitioning:!1}),VS="startTransition",$p=O0[VS];function GS(t){let{basename:e,children:n,future:i,window:r}=t,s=le.useRef();s.current==null&&(s.current=qy({window:r,v5Compat:!0}));let o=s.current,[a,l]=le.useState({action:o.action,location:o.location}),{v7_startTransition:u}=i||{},f=le.useCallback(d=>{u&&$p?$p(()=>l(d)):l(d)},[l,u]);return le.useLayoutEffect(()=>o.listen(f),[o,f]),le.createElement(NS,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}const WS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",XS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Sl=le.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:f,unstable_viewTransition:d}=e,h=bv(e,kS),{basename:m}=le.useContext(ar),v,x=!1;if(typeof u=="string"&&XS.test(u)&&(v=u,WS))try{let _=new URL(window.location.href),S=u.startsWith("//")?new URL(_.protocol+u):new URL(u),R=Gs(S.pathname,m);S.origin===_.origin&&R!=null?u=R+S.search+S.hash:x=!0}catch{}let p=xS(u,{relative:r}),c=qS(u,{replace:o,state:a,target:l,preventScrollReset:f,relative:r,unstable_viewTransition:d});function g(_){i&&i(_),_.defaultPrevented||c(_)}return le.createElement("a",tu({},h,{href:v||p,onClick:x||s?i:g,ref:n,target:l}))}),jS=le.forwardRef(function(e,n){let{"aria-current":i="page",caseSensitive:r=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:f}=e,d=bv(e,zS),h=Ru(l,{relative:d.relative}),m=la(),v=le.useContext(wv),{navigator:x,basename:p}=le.useContext(ar),c=v!=null&&$S(h)&&u===!0,g=x.encodeLocation?x.encodeLocation(h).pathname:h.pathname,_=m.pathname,S=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;r||(_=_.toLowerCase(),S=S?S.toLowerCase():null,g=g.toLowerCase()),S&&p&&(S=Gs(S,p)||S);const R=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let A=_===g||!o&&_.startsWith(g)&&_.charAt(R)==="/",w=S!=null&&(S===g||!o&&S.startsWith(g)&&S.charAt(g.length)==="/"),L={isActive:A,isPending:w,isTransitioning:c},T=A?i:void 0,M;typeof s=="function"?M=s(L):M=[s,A?"active":null,w?"pending":null,c?"transitioning":null].filter(Boolean).join(" ");let b=typeof a=="function"?a(L):a;return le.createElement(Sl,tu({},d,{"aria-current":T,className:M,ref:n,style:b,to:l,unstable_viewTransition:u}),typeof f=="function"?f(L):f)});var Of;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Of||(Of={}));var Kp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Kp||(Kp={}));function YS(t){let e=le.useContext(Au);return e||gt(!1),e}function qS(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=yS(),u=la(),f=Ru(t,{relative:o});return le.useCallback(d=>{if(FS(d,n)){d.preventDefault();let h=i!==void 0?i:Ql(u)===Ql(f);l(t,{replace:h,state:r,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,f,i,r,n,t,s,o,a])}function $S(t,e){e===void 0&&(e={});let n=le.useContext(HS);n==null&&gt(!1);let{basename:i}=YS(Of.useViewTransitionState),r=Ru(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Gs(n.currentLocation.pathname,i)||n.currentLocation.pathname,o=Gs(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Jl(r.pathname,o)!=null||Jl(r.pathname,s)!=null}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ph="168",Ls={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ms={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},KS=0,Zp=1,ZS=2,Lv=1,QS=2,ui=3,nr=0,an=1,di=2,Qi=0,Ds=1,Qp=2,Jp=3,em=4,JS=5,xr=100,eM=101,tM=102,nM=103,iM=104,rM=200,sM=201,oM=202,aM=203,Ff=204,kf=205,lM=206,uM=207,cM=208,fM=209,dM=210,hM=211,pM=212,mM=213,gM=214,_M=0,vM=1,xM=2,nu=3,yM=4,SM=5,MM=6,EM=7,Dv=0,TM=1,wM=2,Ji=0,AM=1,CM=2,RM=3,PM=4,bM=5,LM=6,DM=7,Uv=300,Ws=301,Xs=302,zf=303,Bf=304,Pu=306,Hf=1e3,Tr=1001,Vf=1002,An=1003,UM=1004,Ua=1005,Tn=1006,cc=1007,wr=1008,Ei=1009,Nv=1010,Iv=1011,Jo=1012,mh=1013,Ur=1014,mi=1015,ua=1016,gh=1017,_h=1018,js=1020,Ov=35902,Fv=1021,kv=1022,Gn=1023,zv=1024,Bv=1025,Us=1026,Ys=1027,Hv=1028,vh=1029,Vv=1030,xh=1031,yh=1033,Ml=33776,El=33777,Tl=33778,wl=33779,Gf=35840,Wf=35841,Xf=35842,jf=35843,Yf=36196,qf=37492,$f=37496,Kf=37808,Zf=37809,Qf=37810,Jf=37811,ed=37812,td=37813,nd=37814,id=37815,rd=37816,sd=37817,od=37818,ad=37819,ld=37820,ud=37821,Al=36492,cd=36494,fd=36495,Gv=36283,dd=36284,hd=36285,pd=36286,NM=3200,IM=3201,OM=0,FM=1,zi="",Qn="srgb",lr="srgb-linear",Sh="display-p3",bu="display-p3-linear",iu="linear",rt="srgb",ru="rec709",su="p3",Gr=7680,tm=519,kM=512,zM=513,BM=514,Wv=515,HM=516,VM=517,GM=518,WM=519,md=35044,nm="300 es",gi=2e3,ou=2001;class zr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let im=1234567;const Do=Math.PI/180,ea=180/Math.PI;function vi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function Wt(t,e,n){return Math.max(e,Math.min(n,t))}function Mh(t,e){return(t%e+e)%e}function XM(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function jM(t,e,n){return t!==e?(n-t)/(e-t):0}function Uo(t,e,n){return(1-n)*t+n*e}function YM(t,e,n,i){return Uo(t,e,1-Math.exp(-n*i))}function qM(t,e=1){return e-Math.abs(Mh(t,e*2)-e)}function $M(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function KM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function ZM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function QM(t,e){return t+Math.random()*(e-t)}function JM(t){return t*(.5-Math.random())}function eE(t){t!==void 0&&(im=t);let e=im+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tE(t){return t*Do}function nE(t){return t*ea}function iE(t){return(t&t-1)===0&&t!==0}function rE(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function sE(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function oE(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),u=s((e+i)/2),f=o((e+i)/2),d=s((e-i)/2),h=o((e-i)/2),m=s((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":t.set(a*f,l*d,l*h,a*u);break;case"YZY":t.set(l*h,a*f,l*d,a*u);break;case"ZXZ":t.set(l*d,l*h,a*f,a*u);break;case"XZX":t.set(a*f,l*v,l*m,a*u);break;case"YXY":t.set(l*m,a*f,l*v,a*u);break;case"ZYZ":t.set(l*v,l*m,a*f,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Hn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Qe(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const gd={DEG2RAD:Do,RAD2DEG:ea,generateUUID:vi,clamp:Wt,euclideanModulo:Mh,mapLinear:XM,inverseLerp:jM,lerp:Uo,damp:YM,pingpong:qM,smoothstep:$M,smootherstep:KM,randInt:ZM,randFloat:QM,randFloatSpread:JM,seededRandom:eE,degToRad:tE,radToDeg:nE,isPowerOfTwo:iE,ceilPowerOfTwo:rE,floorPowerOfTwo:sE,setQuaternionFromProperEuler:oE,normalize:Qe,denormalize:Hn};class we{constructor(e=0,n=0){we.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,n,i,r,s,o,a,l,u){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],d=i[7],h=i[2],m=i[5],v=i[8],x=r[0],p=r[3],c=r[6],g=r[1],_=r[4],S=r[7],R=r[2],A=r[5],w=r[8];return s[0]=o*x+a*g+l*R,s[3]=o*p+a*_+l*A,s[6]=o*c+a*S+l*w,s[1]=u*x+f*g+d*R,s[4]=u*p+f*_+d*A,s[7]=u*c+f*S+d*w,s[2]=h*x+m*g+v*R,s[5]=h*p+m*_+v*A,s[8]=h*c+m*S+v*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*o*f-n*a*u-i*s*f+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=f*o-a*u,h=a*l-f*s,m=u*s-o*l,v=n*d+i*h+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=d*x,e[1]=(r*u-f*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(f*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=m*x,e[7]=(i*l-u*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(fc.makeScale(e,n)),this}rotate(e){return this.premultiply(fc.makeRotation(-e)),this}translate(e,n){return this.premultiply(fc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fc=new Fe;function Xv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ta(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function aE(){const t=ta("canvas");return t.style.display="block",t}const rm={};function Ns(t){t in rm||(rm[t]=!0,console.warn(t))}function lE(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const sm=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),om=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),lo={[lr]:{transfer:iu,primaries:ru,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Qn]:{transfer:rt,primaries:ru,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[bu]:{transfer:iu,primaries:su,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(om),fromReference:t=>t.applyMatrix3(sm)},[Sh]:{transfer:rt,primaries:su,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(om),fromReference:t=>t.applyMatrix3(sm).convertLinearToSRGB()}},uE=new Set([lr,bu]),Ke={enabled:!0,_workingColorSpace:lr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!uE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=lo[e].toReference,r=lo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return lo[t].primaries},getTransfer:function(t){return t===zi?iu:lo[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(lo[e].luminanceCoefficients)}};function Is(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function dc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Wr;class cE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Wr===void 0&&(Wr=ta("canvas")),Wr.width=e.width,Wr.height=e.height;const i=Wr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Wr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ta("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Is(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Is(n[i]/255)*255):n[i]=Is(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fE=0;class jv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=vi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(hc(r[o].image)):s.push(hc(r[o]))}else s=hc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function hc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?cE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dE=0;class Xt extends zr{constructor(e=Xt.DEFAULT_IMAGE,n=Xt.DEFAULT_MAPPING,i=Tr,r=Tr,s=Tn,o=wr,a=Gn,l=Ei,u=Xt.DEFAULT_ANISOTROPY,f=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dE++}),this.uuid=vi(),this.name="",this.source=new jv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hf:e.x=e.x-Math.floor(e.x);break;case Tr:e.x=e.x<0?0:1;break;case Vf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hf:e.y=e.y-Math.floor(e.y);break;case Tr:e.y=e.y<0?0:1;break;case Vf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Uv;Xt.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,n=0,i=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],d=l[8],h=l[1],m=l[5],v=l[9],x=l[2],p=l[6],c=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-x)<.01&&Math.abs(v-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+x)<.1&&Math.abs(v+p)<.1&&Math.abs(u+m+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,S=(m+1)/2,R=(c+1)/2,A=(f+h)/4,w=(d+x)/4,L=(v+p)/4;return _>S&&_>R?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=A/i,s=w/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=L/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=w/s,r=L/s),this.set(i,r,s,n),this}let g=Math.sqrt((p-v)*(p-v)+(d-x)*(d-x)+(h-f)*(h-f));return Math.abs(g)<.001&&(g=1),this.x=(p-v)/g,this.y=(d-x)/g,this.z=(h-f)/g,this.w=Math.acos((u+m+c-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hE extends zr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Dt(0,0,e,n),this.scissorTest=!1,this.viewport=new Dt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Xt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new jv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nr extends hE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Yv extends Xt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pE extends Xt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ir{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],m=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=v,e[n+3]=x;return}if(d!==x||l!==h||u!==m||f!==v){let p=1-a;const c=l*h+u*m+f*v+d*x,g=c>=0?1:-1,_=1-c*c;if(_>Number.EPSILON){const R=Math.sqrt(_),A=Math.atan2(R,c*g);p=Math.sin(p*A)/R,a=Math.sin(a*A)/R}const S=a*g;if(l=l*p+h*S,u=u*p+m*S,f=f*p+v*S,d=d*p+x*S,p===1-a){const R=1/Math.sqrt(l*l+u*u+f*f+d*d);l*=R,u*=R,f*=R,d*=R}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],d=s[o],h=s[o+1],m=s[o+2],v=s[o+3];return e[n]=a*v+f*d+l*m-u*h,e[n+1]=l*v+f*h+u*d-a*m,e[n+2]=u*v+f*m+a*h-l*d,e[n+3]=f*v-a*d-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*f*d+u*m*v,this._y=u*m*d-h*f*v,this._z=u*f*v+h*m*d,this._w=u*f*d-h*m*v;break;case"YXZ":this._x=h*f*d+u*m*v,this._y=u*m*d-h*f*v,this._z=u*f*v-h*m*d,this._w=u*f*d+h*m*v;break;case"ZXY":this._x=h*f*d-u*m*v,this._y=u*m*d+h*f*v,this._z=u*f*v+h*m*d,this._w=u*f*d-h*m*v;break;case"ZYX":this._x=h*f*d-u*m*v,this._y=u*m*d+h*f*v,this._z=u*f*v-h*m*d,this._w=u*f*d+h*m*v;break;case"YZX":this._x=h*f*d+u*m*v,this._y=u*m*d+h*f*v,this._z=u*f*v-h*m*d,this._w=u*f*d-h*m*v;break;case"XZY":this._x=h*f*d-u*m*v,this._y=u*m*d-h*f*v,this._z=u*f*v+h*m*d,this._w=u*f*d+h*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+o*a+r*u-s*l,this._y=r*f+o*l+s*a-i*u,this._z=s*f+o*u+i*l-r*a,this._w=o*f-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),d=Math.sin((1-n)*f)/u,h=Math.sin(n*f)/u;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(am.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(am.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*u+o*d-a*f,this.y=i+l*f+a*u-s*d,this.z=r+l*d+s*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pc.copy(this).projectOnVector(e),this.sub(pc)}reflect(e){return this.sub(pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pc=new O,am=new Ir;class ca{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Un.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Un.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Un.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Un):Un.fromBufferAttribute(s,o),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Na.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Na.copy(i.boundingBox)),Na.applyMatrix4(e.matrixWorld),this.union(Na)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(uo),Ia.subVectors(this.max,uo),Xr.subVectors(e.a,uo),jr.subVectors(e.b,uo),Yr.subVectors(e.c,uo),Ri.subVectors(jr,Xr),Pi.subVectors(Yr,jr),cr.subVectors(Xr,Yr);let n=[0,-Ri.z,Ri.y,0,-Pi.z,Pi.y,0,-cr.z,cr.y,Ri.z,0,-Ri.x,Pi.z,0,-Pi.x,cr.z,0,-cr.x,-Ri.y,Ri.x,0,-Pi.y,Pi.x,0,-cr.y,cr.x,0];return!mc(n,Xr,jr,Yr,Ia)||(n=[1,0,0,0,1,0,0,0,1],!mc(n,Xr,jr,Yr,Ia))?!1:(Oa.crossVectors(Ri,Pi),n=[Oa.x,Oa.y,Oa.z],mc(n,Xr,jr,Yr,Ia))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ri=[new O,new O,new O,new O,new O,new O,new O,new O],Un=new O,Na=new ca,Xr=new O,jr=new O,Yr=new O,Ri=new O,Pi=new O,cr=new O,uo=new O,Ia=new O,Oa=new O,fr=new O;function mc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){fr.fromArray(t,s);const a=r.x*Math.abs(fr.x)+r.y*Math.abs(fr.y)+r.z*Math.abs(fr.z),l=e.dot(fr),u=n.dot(fr),f=i.dot(fr);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const mE=new ca,co=new O,gc=new O;class fa{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):mE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;co.subVectors(e,this.center);const n=co.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(co,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(co.copy(e.center).add(gc)),this.expandByPoint(co.copy(e.center).sub(gc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const si=new O,_c=new O,Fa=new O,bi=new O,vc=new O,ka=new O,xc=new O;class da{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=si.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,n),si.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){_c.copy(e).add(n).multiplyScalar(.5),Fa.copy(n).sub(e).normalize(),bi.copy(this.origin).sub(_c);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Fa),a=bi.dot(this.direction),l=-bi.dot(Fa),u=bi.lengthSq(),f=Math.abs(1-o*o);let d,h,m,v;if(f>0)if(d=o*l-a,h=o*a-l,v=s*f,d>=0)if(h>=-v)if(h<=v){const x=1/f;d*=x,h*=x,m=d*(d+o*h+2*a)+h*(o*d+h+2*l)+u}else h=s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+u;else h<=-v?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+u):h<=v?(d=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+u):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+u);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(_c).addScaledVector(Fa,h),m}intersectSphere(e,n){si.subVectors(e.center,this.origin);const i=si.dot(this.direction),r=si.dot(si)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,n,i,r,s){vc.subVectors(n,e),ka.subVectors(i,e),xc.crossVectors(vc,ka);let o=this.direction.dot(xc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bi.subVectors(this.origin,e);const l=a*this.direction.dot(ka.crossVectors(bi,ka));if(l<0)return null;const u=a*this.direction.dot(vc.cross(bi));if(u<0||l+u>o)return null;const f=-a*bi.dot(xc);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,n,i,r,s,o,a,l,u,f,d,h,m,v,x,p){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,f,d,h,m,v,x,p)}set(e,n,i,r,s,o,a,l,u,f,d,h,m,v,x,p){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=f,c[10]=d,c[14]=h,c[3]=m,c[7]=v,c[11]=x,c[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/qr.setFromMatrixColumn(e,0).length(),s=1/qr.setFromMatrixColumn(e,1).length(),o=1/qr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,m=o*d,v=a*f,x=a*d;n[0]=l*f,n[4]=-l*d,n[8]=u,n[1]=m+v*u,n[5]=h-x*u,n[9]=-a*l,n[2]=x-h*u,n[6]=v+m*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,m=l*d,v=u*f,x=u*d;n[0]=h+x*a,n[4]=v*a-m,n[8]=o*u,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=m*a-v,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,m=l*d,v=u*f,x=u*d;n[0]=h-x*a,n[4]=-o*d,n[8]=v+m*a,n[1]=m+v*a,n[5]=o*f,n[9]=x-h*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,m=o*d,v=a*f,x=a*d;n[0]=l*f,n[4]=v*u-m,n[8]=h*u+x,n[1]=l*d,n[5]=x*u+h,n[9]=m*u-v,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*u,v=a*l,x=a*u;n[0]=l*f,n[4]=x-h*d,n[8]=v*d+m,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-u*f,n[6]=m*d+v,n[10]=h-x*d}else if(e.order==="XZY"){const h=o*l,m=o*u,v=a*l,x=a*u;n[0]=l*f,n[4]=-d,n[8]=u*f,n[1]=h*d+x,n[5]=o*f,n[9]=m*d-v,n[2]=v*d-m,n[6]=a*f,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gE,e,_E)}lookAt(e,n,i){const r=this.elements;return cn.subVectors(e,n),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Li.crossVectors(i,cn),Li.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Li.crossVectors(i,cn)),Li.normalize(),za.crossVectors(cn,Li),r[0]=Li.x,r[4]=za.x,r[8]=cn.x,r[1]=Li.y,r[5]=za.y,r[9]=cn.y,r[2]=Li.z,r[6]=za.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],d=i[5],h=i[9],m=i[13],v=i[2],x=i[6],p=i[10],c=i[14],g=i[3],_=i[7],S=i[11],R=i[15],A=r[0],w=r[4],L=r[8],T=r[12],M=r[1],b=r[5],V=r[9],B=r[13],Y=r[2],q=r[6],G=r[10],$=r[14],D=r[3],X=r[7],Z=r[11],se=r[15];return s[0]=o*A+a*M+l*Y+u*D,s[4]=o*w+a*b+l*q+u*X,s[8]=o*L+a*V+l*G+u*Z,s[12]=o*T+a*B+l*$+u*se,s[1]=f*A+d*M+h*Y+m*D,s[5]=f*w+d*b+h*q+m*X,s[9]=f*L+d*V+h*G+m*Z,s[13]=f*T+d*B+h*$+m*se,s[2]=v*A+x*M+p*Y+c*D,s[6]=v*w+x*b+p*q+c*X,s[10]=v*L+x*V+p*G+c*Z,s[14]=v*T+x*B+p*$+c*se,s[3]=g*A+_*M+S*Y+R*D,s[7]=g*w+_*b+S*q+R*X,s[11]=g*L+_*V+S*G+R*Z,s[15]=g*T+_*B+S*$+R*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],d=e[6],h=e[10],m=e[14],v=e[3],x=e[7],p=e[11],c=e[15];return v*(+s*l*d-r*u*d-s*a*h+i*u*h+r*a*m-i*l*m)+x*(+n*l*m-n*u*h+s*o*h-r*o*m+r*u*f-s*l*f)+p*(+n*u*d-n*a*m-s*o*d+i*o*m+s*a*f-i*u*f)+c*(-r*a*f-n*l*d+n*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=e[9],h=e[10],m=e[11],v=e[12],x=e[13],p=e[14],c=e[15],g=d*p*u-x*h*u+x*l*m-a*p*m-d*l*c+a*h*c,_=v*h*u-f*p*u-v*l*m+o*p*m+f*l*c-o*h*c,S=f*x*u-v*d*u+v*a*m-o*x*m-f*a*c+o*d*c,R=v*d*l-f*x*l-v*a*h+o*x*h+f*a*p-o*d*p,A=n*g+i*_+r*S+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=g*w,e[1]=(x*h*s-d*p*s-x*r*m+i*p*m+d*r*c-i*h*c)*w,e[2]=(a*p*s-x*l*s+x*r*u-i*p*u-a*r*c+i*l*c)*w,e[3]=(d*l*s-a*h*s-d*r*u+i*h*u+a*r*m-i*l*m)*w,e[4]=_*w,e[5]=(f*p*s-v*h*s+v*r*m-n*p*m-f*r*c+n*h*c)*w,e[6]=(v*l*s-o*p*s-v*r*u+n*p*u+o*r*c-n*l*c)*w,e[7]=(o*h*s-f*l*s+f*r*u-n*h*u-o*r*m+n*l*m)*w,e[8]=S*w,e[9]=(v*d*s-f*x*s-v*i*m+n*x*m+f*i*c-n*d*c)*w,e[10]=(o*x*s-v*a*s+v*i*u-n*x*u-o*i*c+n*a*c)*w,e[11]=(f*a*s-o*d*s-f*i*u+n*d*u+o*i*m-n*a*m)*w,e[12]=R*w,e[13]=(f*x*r-v*d*r+v*i*h-n*x*h-f*i*p+n*d*p)*w,e[14]=(v*a*r-o*x*r-v*i*l+n*x*l+o*i*p-n*a*p)*w,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*h+n*a*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*o,0,u*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,f=o+o,d=a+a,h=s*u,m=s*f,v=s*d,x=o*f,p=o*d,c=a*d,g=l*u,_=l*f,S=l*d,R=i.x,A=i.y,w=i.z;return r[0]=(1-(x+c))*R,r[1]=(m+S)*R,r[2]=(v-_)*R,r[3]=0,r[4]=(m-S)*A,r[5]=(1-(h+c))*A,r[6]=(p+g)*A,r[7]=0,r[8]=(v+_)*w,r[9]=(p-g)*w,r[10]=(1-(h+x))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=qr.set(r[0],r[1],r[2]).length();const o=qr.set(r[4],r[5],r[6]).length(),a=qr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const u=1/s,f=1/o,d=1/a;return Nn.elements[0]*=u,Nn.elements[1]*=u,Nn.elements[2]*=u,Nn.elements[4]*=f,Nn.elements[5]*=f,Nn.elements[6]*=f,Nn.elements[8]*=d,Nn.elements[9]*=d,Nn.elements[10]*=d,n.setFromRotationMatrix(Nn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=gi){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let m,v;if(a===gi)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===ou)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=gi){const l=this.elements,u=1/(n-e),f=1/(i-r),d=1/(o-s),h=(n+e)*u,m=(i+r)*f;let v,x;if(a===gi)v=(o+s)*d,x=-2*d;else if(a===ou)v=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const qr=new O,Nn=new ct,gE=new O(0,0,0),_E=new O(1,1,1),Li=new O,za=new O,cn=new O,lm=new ct,um=new Ir;class Ti{constructor(e=0,n=0,i=0,r=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],f=r[9],d=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return lm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return um.setFromEuler(this),this.setFromQuaternion(um,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class Eh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vE=0;const cm=new O,$r=new Ir,oi=new ct,Ba=new O,fo=new O,xE=new O,yE=new Ir,fm=new O(1,0,0),dm=new O(0,1,0),hm=new O(0,0,1),pm={type:"added"},SE={type:"removed"},Kr={type:"childadded",child:null},yc={type:"childremoved",child:null};class jt extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vE++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new O,n=new Ti,i=new Ir,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Fe}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Eh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return $r.setFromAxisAngle(e,n),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,n){return $r.setFromAxisAngle(e,n),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(fm,e)}rotateY(e){return this.rotateOnAxis(dm,e)}rotateZ(e){return this.rotateOnAxis(hm,e)}translateOnAxis(e,n){return cm.copy(e).applyQuaternion(this.quaternion),this.position.add(cm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(fm,e)}translateY(e){return this.translateOnAxis(dm,e)}translateZ(e){return this.translateOnAxis(hm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ba.copy(e):Ba.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(fo,Ba,this.up):oi.lookAt(Ba,fo,this.up),this.quaternion.setFromRotationMatrix(oi),r&&(oi.extractRotation(r.matrixWorld),$r.setFromRotationMatrix(oi),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pm),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(SE),yc.child=e,this.dispatchEvent(yc),yc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pm),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,e,xE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,yE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}jt.DEFAULT_UP=new O(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new O,ai=new O,Sc=new O,li=new O,Zr=new O,Qr=new O,mm=new O,Mc=new O,Ec=new O,Tc=new O;class Vn{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),In.subVectors(e,n),r.cross(In);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){In.subVectors(r,n),ai.subVectors(i,n),Sc.subVectors(e,n);const o=In.dot(In),a=In.dot(ai),l=In.dot(Sc),u=ai.dot(ai),f=ai.dot(Sc),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,m=(u*l-a*f)*h,v=(o*f-a*l)*h;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,li.x),l.addScaledVector(o,li.y),l.addScaledVector(a,li.z),l)}static isFrontFacing(e,n,i,r){return In.subVectors(i,n),ai.subVectors(e,n),In.cross(ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),In.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Vn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Vn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Zr.subVectors(r,i),Qr.subVectors(s,i),Mc.subVectors(e,i);const l=Zr.dot(Mc),u=Qr.dot(Mc);if(l<=0&&u<=0)return n.copy(i);Ec.subVectors(e,r);const f=Zr.dot(Ec),d=Qr.dot(Ec);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*u;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Zr,o);Tc.subVectors(e,s);const m=Zr.dot(Tc),v=Qr.dot(Tc);if(v>=0&&m<=v)return n.copy(s);const x=m*u-l*v;if(x<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(Qr,a);const p=f*v-m*d;if(p<=0&&d-f>=0&&m-v>=0)return mm.subVectors(s,r),a=(d-f)/(d-f+(m-v)),n.copy(r).addScaledVector(mm,a);const c=1/(p+x+h);return o=x*c,a=h*c,n.copy(i).addScaledVector(Zr,o).addScaledVector(Qr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Ha={h:0,s:0,l:0};function wc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ke.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ke.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ke.workingColorSpace){if(e=Mh(e,1),n=Wt(n,0,1),i=Wt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=wc(o,s,e+1/3),this.g=wc(o,s,e),this.b=wc(o,s,e-1/3)}return Ke.toWorkingColorSpace(this,r),this}setStyle(e,n=Qn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Qn){const i=qv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}copyLinearToSRGB(e){return this.r=dc(e.r),this.g=dc(e.g),this.b=dc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return Ke.fromWorkingColorSpace(Vt.copy(this),e),Math.round(Wt(Vt.r*255,0,255))*65536+Math.round(Wt(Vt.g*255,0,255))*256+Math.round(Wt(Vt.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Vt.copy(this),n);const i=Vt.r,r=Vt.g,s=Vt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Vt.copy(this),n),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Qn){Ke.fromWorkingColorSpace(Vt.copy(this),e);const n=Vt.r,i=Vt.g,r=Vt.b;return e!==Qn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+n,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Di),e.getHSL(Ha);const i=Uo(Di.h,Ha.h,n),r=Uo(Di.s,Ha.s,n),s=Uo(Di.l,Ha.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new Xe;Xe.NAMES=qv;let ME=0;class Br extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=Ds,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ff,this.blendDst=kf,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=nu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(i.blending=this.blending),this.side!==nr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ff&&(i.blendSrc=this.blendSrc),this.blendDst!==kf&&(i.blendDst=this.blendDst),this.blendEquation!==xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==nu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Th extends Br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=Dv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new O,Va=new we;class Yn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=md,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ns("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Va.fromBufferAttribute(this,n),Va.applyMatrix3(e),this.setXY(n,Va.x,Va.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix3(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix4(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyNormalMatrix(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.transformDirection(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Hn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Qe(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Hn(n,this.array)),n}setX(e,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Hn(n,this.array)),n}setY(e,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Hn(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Hn(n,this.array)),n}setW(e,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Qe(n,this.array),i=Qe(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array),s=Qe(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==md&&(e.usage=this.usage),e}}class $v extends Yn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Kv extends Yn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Rn extends Yn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let EE=0;const yn=new ct,Ac=new jt,Jr=new O,fn=new ca,ho=new ca,bt=new O;class vn extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xv(e)?Kv:$v)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,n,i){return yn.makeTranslation(e,n,i),this.applyMatrix4(yn),this}scale(e,n,i){return yn.makeScale(e,n,i),this.applyMatrix4(yn),this}lookAt(e){return Ac.lookAt(e),Ac.updateMatrix(),this.applyMatrix4(Ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jr).negate(),this.translate(Jr.x,Jr.y,Jr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Rn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ca);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ho.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(fn.min,ho.min),fn.expandByPoint(bt),bt.addVectors(fn.max,ho.max),fn.expandByPoint(bt)):(fn.expandByPoint(ho.min),fn.expandByPoint(ho.max))}fn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)bt.fromBufferAttribute(a,u),l&&(Jr.fromBufferAttribute(e,u),bt.add(Jr)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new O,l[L]=new O;const u=new O,f=new O,d=new O,h=new we,m=new we,v=new we,x=new O,p=new O;function c(L,T,M){u.fromBufferAttribute(i,L),f.fromBufferAttribute(i,T),d.fromBufferAttribute(i,M),h.fromBufferAttribute(s,L),m.fromBufferAttribute(s,T),v.fromBufferAttribute(s,M),f.sub(u),d.sub(u),m.sub(h),v.sub(h);const b=1/(m.x*v.y-v.x*m.y);isFinite(b)&&(x.copy(f).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(b),p.copy(d).multiplyScalar(m.x).addScaledVector(f,-v.x).multiplyScalar(b),a[L].add(x),a[T].add(x),a[M].add(x),l[L].add(p),l[T].add(p),l[M].add(p))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let L=0,T=g.length;L<T;++L){const M=g[L],b=M.start,V=M.count;for(let B=b,Y=b+V;B<Y;B+=3)c(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const _=new O,S=new O,R=new O,A=new O;function w(L){R.fromBufferAttribute(r,L),A.copy(R);const T=a[L];_.copy(T),_.sub(R.multiplyScalar(R.dot(T))).normalize(),S.crossVectors(A,T);const b=S.dot(l[L])<0?-1:1;o.setXYZW(L,_.x,_.y,_.z,b)}for(let L=0,T=g.length;L<T;++L){const M=g[L],b=M.start,V=M.count;for(let B=b,Y=b+V;B<Y;B+=3)w(e.getX(B+0)),w(e.getX(B+1)),w(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,u=new O,f=new O,d=new O;if(e)for(let h=0,m=e.count;h<m;h+=3){const v=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,p),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,p),a.add(f),l.add(f),u.add(f),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)bt.fromBufferAttribute(e,n),bt.normalize(),e.setXYZ(n,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,d=a.normalized,h=new u.constructor(l.length*f);let m=0,v=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*f;for(let c=0;c<f;c++)h[v++]=u[m++]}return new Yn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new vn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let f=0,d=u.length;f<d;f++){const h=u[f],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let d=0,h=u.length;d<h;d++){const m=u[d];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],d=s[u];for(let h=0,m=d.length;h<m;h++)f.push(d[h].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gm=new ct,dr=new da,Ga=new fa,_m=new O,es=new O,ts=new O,ns=new O,Cc=new O,Wa=new O,Xa=new we,ja=new we,Ya=new we,vm=new O,xm=new O,ym=new O,qa=new O,$a=new O;class Wn extends jt{constructor(e=new vn,n=new Th){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Wa.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=a[l],d=s[l];f!==0&&(Cc.fromBufferAttribute(d,e),o?Wa.addScaledVector(Cc,f):Wa.addScaledVector(Cc.sub(n),f))}n.add(Wa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ga.copy(i.boundingSphere),Ga.applyMatrix4(s),dr.copy(e.ray).recast(e.near),!(Ga.containsPoint(dr.origin)===!1&&(dr.intersectSphere(Ga,_m)===null||dr.origin.distanceToSquared(_m)>(e.far-e.near)**2))&&(gm.copy(s).invert(),dr.copy(e.ray).applyMatrix4(gm),!(i.boundingBox!==null&&dr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,dr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const p=h[v],c=o[p.materialIndex],g=Math.max(p.start,m.start),_=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=g,R=_;S<R;S+=3){const A=a.getX(S),w=a.getX(S+1),L=a.getX(S+2);r=Ka(this,c,e,i,u,f,d,A,w,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=v,c=x;p<c;p+=3){const g=a.getX(p),_=a.getX(p+1),S=a.getX(p+2);r=Ka(this,o,e,i,u,f,d,g,_,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const p=h[v],c=o[p.materialIndex],g=Math.max(p.start,m.start),_=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=g,R=_;S<R;S+=3){const A=S,w=S+1,L=S+2;r=Ka(this,c,e,i,u,f,d,A,w,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=v,c=x;p<c;p+=3){const g=p,_=p+1,S=p+2;r=Ka(this,o,e,i,u,f,d,g,_,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function TE(t,e,n,i,r,s,o,a){let l;if(e.side===an?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===nr,a),l===null)return null;$a.copy(a),$a.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo($a);return u<n.near||u>n.far?null:{distance:u,point:$a.clone(),object:t}}function Ka(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,es),t.getVertexPosition(l,ts),t.getVertexPosition(u,ns);const f=TE(t,e,n,i,es,ts,ns,qa);if(f){r&&(Xa.fromBufferAttribute(r,a),ja.fromBufferAttribute(r,l),Ya.fromBufferAttribute(r,u),f.uv=Vn.getInterpolation(qa,es,ts,ns,Xa,ja,Ya,new we)),s&&(Xa.fromBufferAttribute(s,a),ja.fromBufferAttribute(s,l),Ya.fromBufferAttribute(s,u),f.uv1=Vn.getInterpolation(qa,es,ts,ns,Xa,ja,Ya,new we)),o&&(vm.fromBufferAttribute(o,a),xm.fromBufferAttribute(o,l),ym.fromBufferAttribute(o,u),f.normal=Vn.getInterpolation(qa,es,ts,ns,vm,xm,ym,new O),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new O,materialIndex:0};Vn.getNormal(es,ts,ns,d.normal),f.face=d}return f}class ha extends vn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],d=[];let h=0,m=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Rn(u,3)),this.setAttribute("normal",new Rn(f,3)),this.setAttribute("uv",new Rn(d,2));function v(x,p,c,g,_,S,R,A,w,L,T){const M=S/w,b=R/L,V=S/2,B=R/2,Y=A/2,q=w+1,G=L+1;let $=0,D=0;const X=new O;for(let Z=0;Z<G;Z++){const se=Z*b-B;for(let Me=0;Me<q;Me++){const Ve=Me*M-V;X[x]=Ve*g,X[p]=se*_,X[c]=Y,u.push(X.x,X.y,X.z),X[x]=0,X[p]=0,X[c]=A>0?1:-1,f.push(X.x,X.y,X.z),d.push(Me/w),d.push(1-Z/L),$+=1}}for(let Z=0;Z<L;Z++)for(let se=0;se<w;se++){const Me=h+se+q*Z,Ve=h+se+q*(Z+1),H=h+(se+1)+q*(Z+1),te=h+(se+1)+q*Z;l.push(Me,Ve,te),l.push(Ve,H,te),D+=6}a.addGroup(m,D,T),m+=D,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=qs(t[n]);for(const r in i)e[r]=i[r]}return e}function wE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Zv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const AE={clone:qs,merge:$t};var CE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ir extends Br{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=CE,this.fragmentShader=RE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=wE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Qv extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=gi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ui=new O,Sm=new we,Mm=new we;class En extends Qv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ea*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Do*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ea*2*Math.atan(Math.tan(Do*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,n){return this.getViewBounds(e,Sm,Mm),n.subVectors(Mm,Sm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Do*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const is=-90,rs=1;class PE extends jt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new En(is,rs,e,n);r.layers=this.layers,this.add(r);const s=new En(is,rs,e,n);s.layers=this.layers,this.add(s);const o=new En(is,rs,e,n);o.layers=this.layers,this.add(o);const a=new En(is,rs,e,n);a.layers=this.layers,this.add(a);const l=new En(is,rs,e,n);l.layers=this.layers,this.add(l);const u=new En(is,rs,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ou)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Jv extends Xt{constructor(e,n,i,r,s,o,a,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:Ws,super(e,n,i,r,s,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bE extends Nr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Jv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Tn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ha(5,5,5),s=new ir({name:"CubemapFromEquirect",uniforms:qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:Qi});s.uniforms.tEquirect.value=n;const o=new Wn(r,s),a=n.minFilter;return n.minFilter===wr&&(n.minFilter=Tn),new PE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Rc=new O,LE=new O,DE=new Fe;class Oi{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Rc.subVectors(i,n).cross(LE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Rc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||DE.getNormalMatrix(e),r=this.coplanarPoint(Rc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new fa,Za=new O;class e0{constructor(e=new Oi,n=new Oi,i=new Oi,r=new Oi,s=new Oi,o=new Oi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=gi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],f=r[5],d=r[6],h=r[7],m=r[8],v=r[9],x=r[10],p=r[11],c=r[12],g=r[13],_=r[14],S=r[15];if(i[0].setComponents(l-s,h-u,p-m,S-c).normalize(),i[1].setComponents(l+s,h+u,p+m,S+c).normalize(),i[2].setComponents(l+o,h+f,p+v,S+g).normalize(),i[3].setComponents(l-o,h-f,p-v,S-g).normalize(),i[4].setComponents(l-a,h-d,p-x,S-_).normalize(),n===gi)i[5].setComponents(l+a,h+d,p+x,S+_).normalize();else if(n===ou)i[5].setComponents(a,d,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Za.x=r.normal.x>0?e.max.x:e.min.x,Za.y=r.normal.y>0?e.max.y:e.min.y,Za.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Za)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function t0(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function UE(t){const e=new WeakMap;function n(a,l){const u=a.array,f=a.usage,d=u.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,u,f),a.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const f=l.array,d=l._updateRange,h=l.updateRanges;if(t.bindBuffer(u,a),d.count===-1&&h.length===0&&t.bufferSubData(u,0,f),h.length!==0){for(let m=0,v=h.length;m<v;m++){const x=h[m];t.bufferSubData(u,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}d.count!==-1&&(t.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class Lu extends vn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,d=e/a,h=n/l,m=[],v=[],x=[],p=[];for(let c=0;c<f;c++){const g=c*h-o;for(let _=0;_<u;_++){const S=_*d-s;v.push(S,-g,0),x.push(0,0,1),p.push(_/a),p.push(1-c/l)}}for(let c=0;c<l;c++)for(let g=0;g<a;g++){const _=g+u*c,S=g+u*(c+1),R=g+1+u*(c+1),A=g+1+u*c;m.push(_,S,A),m.push(S,R,A)}this.setIndex(m),this.setAttribute("position",new Rn(v,3)),this.setAttribute("normal",new Rn(x,3)),this.setAttribute("uv",new Rn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lu(e.width,e.height,e.widthSegments,e.heightSegments)}}var NE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,IE=`#ifdef USE_ALPHAHASH
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
#endif`,OE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,FE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,BE=`#ifdef USE_AOMAP
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
#endif`,HE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VE=`#ifdef USE_BATCHING
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
#endif`,GE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,WE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,XE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,YE=`#ifdef USE_IRIDESCENCE
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
#endif`,qE=`#ifdef USE_BUMPMAP
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
#endif`,$E=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,KE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ZE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,QE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,JE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,iT=`#define PI 3.141592653589793
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
} // validated`,rT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sT=`vec3 transformedNormal = objectNormal;
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
#endif`,oT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cT="gl_FragColor = linearToOutputTexel( gl_FragColor );",fT=`
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
}`,dT=`#ifdef USE_ENVMAP
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
#endif`,hT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pT=`#ifdef USE_ENVMAP
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
#endif`,mT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gT=`#ifdef USE_ENVMAP
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
#endif`,_T=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ST=`#ifdef USE_GRADIENTMAP
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
}`,MT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ET=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,TT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wT=`uniform bool receiveShadow;
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
#endif`,AT=`#ifdef USE_ENVMAP
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
#endif`,CT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,RT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,LT=`PhysicalMaterial material;
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
#endif`,DT=`struct PhysicalMaterial {
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
}`,UT=`
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
#endif`,NT=`#if defined( RE_IndirectDiffuse )
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
#endif`,IT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,OT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,FT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,BT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,VT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,GT=`#if defined( USE_POINTS_UV )
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
#endif`,WT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,XT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,YT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$T=`#ifdef USE_MORPHTARGETS
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
#endif`,KT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,QT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,JT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,n1=`#ifdef USE_NORMALMAP
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
#endif`,i1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,s1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,o1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,a1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,u1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,c1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,h1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,p1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,m1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,g1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,v1=`float getShadowMask() {
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
}`,x1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,y1=`#ifdef USE_SKINNING
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
#endif`,S1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,M1=`#ifdef USE_SKINNING
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
#endif`,E1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,T1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,w1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,A1=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,C1=`#ifdef USE_TRANSMISSION
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
#endif`,R1=`#ifdef USE_TRANSMISSION
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
#endif`,P1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const U1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,N1=`uniform sampler2D t2D;
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
}`,I1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,F1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z1=`#include <common>
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
}`,B1=`#if DEPTH_PACKING == 3200
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
}`,H1=`#define DISTANCE
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
}`,V1=`#define DISTANCE
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
}`,G1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,W1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X1=`uniform float scale;
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
}`,j1=`uniform vec3 diffuse;
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
}`,Y1=`#include <common>
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
}`,q1=`uniform vec3 diffuse;
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
}`,$1=`#define LAMBERT
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
}`,K1=`#define LAMBERT
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
}`,Z1=`#define MATCAP
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
}`,Q1=`#define MATCAP
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
}`,J1=`#define NORMAL
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
}`,ew=`#define NORMAL
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
}`,tw=`#define PHONG
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
}`,nw=`#define PHONG
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
}`,iw=`#define STANDARD
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
}`,rw=`#define STANDARD
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
}`,sw=`#define TOON
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
}`,ow=`#define TOON
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
}`,aw=`uniform float size;
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
}`,lw=`uniform vec3 diffuse;
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
}`,uw=`#include <common>
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
}`,cw=`uniform vec3 color;
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
}`,fw=`uniform float rotation;
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
}`,dw=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:NE,alphahash_pars_fragment:IE,alphamap_fragment:OE,alphamap_pars_fragment:FE,alphatest_fragment:kE,alphatest_pars_fragment:zE,aomap_fragment:BE,aomap_pars_fragment:HE,batching_pars_vertex:VE,batching_vertex:GE,begin_vertex:WE,beginnormal_vertex:XE,bsdfs:jE,iridescence_fragment:YE,bumpmap_pars_fragment:qE,clipping_planes_fragment:$E,clipping_planes_pars_fragment:KE,clipping_planes_pars_vertex:ZE,clipping_planes_vertex:QE,color_fragment:JE,color_pars_fragment:eT,color_pars_vertex:tT,color_vertex:nT,common:iT,cube_uv_reflection_fragment:rT,defaultnormal_vertex:sT,displacementmap_pars_vertex:oT,displacementmap_vertex:aT,emissivemap_fragment:lT,emissivemap_pars_fragment:uT,colorspace_fragment:cT,colorspace_pars_fragment:fT,envmap_fragment:dT,envmap_common_pars_fragment:hT,envmap_pars_fragment:pT,envmap_pars_vertex:mT,envmap_physical_pars_fragment:AT,envmap_vertex:gT,fog_vertex:_T,fog_pars_vertex:vT,fog_fragment:xT,fog_pars_fragment:yT,gradientmap_pars_fragment:ST,lightmap_pars_fragment:MT,lights_lambert_fragment:ET,lights_lambert_pars_fragment:TT,lights_pars_begin:wT,lights_toon_fragment:CT,lights_toon_pars_fragment:RT,lights_phong_fragment:PT,lights_phong_pars_fragment:bT,lights_physical_fragment:LT,lights_physical_pars_fragment:DT,lights_fragment_begin:UT,lights_fragment_maps:NT,lights_fragment_end:IT,logdepthbuf_fragment:OT,logdepthbuf_pars_fragment:FT,logdepthbuf_pars_vertex:kT,logdepthbuf_vertex:zT,map_fragment:BT,map_pars_fragment:HT,map_particle_fragment:VT,map_particle_pars_fragment:GT,metalnessmap_fragment:WT,metalnessmap_pars_fragment:XT,morphinstance_vertex:jT,morphcolor_vertex:YT,morphnormal_vertex:qT,morphtarget_pars_vertex:$T,morphtarget_vertex:KT,normal_fragment_begin:ZT,normal_fragment_maps:QT,normal_pars_fragment:JT,normal_pars_vertex:e1,normal_vertex:t1,normalmap_pars_fragment:n1,clearcoat_normal_fragment_begin:i1,clearcoat_normal_fragment_maps:r1,clearcoat_pars_fragment:s1,iridescence_pars_fragment:o1,opaque_fragment:a1,packing:l1,premultiplied_alpha_fragment:u1,project_vertex:c1,dithering_fragment:f1,dithering_pars_fragment:d1,roughnessmap_fragment:h1,roughnessmap_pars_fragment:p1,shadowmap_pars_fragment:m1,shadowmap_pars_vertex:g1,shadowmap_vertex:_1,shadowmask_pars_fragment:v1,skinbase_vertex:x1,skinning_pars_vertex:y1,skinning_vertex:S1,skinnormal_vertex:M1,specularmap_fragment:E1,specularmap_pars_fragment:T1,tonemapping_fragment:w1,tonemapping_pars_fragment:A1,transmission_fragment:C1,transmission_pars_fragment:R1,uv_pars_fragment:P1,uv_pars_vertex:b1,uv_vertex:L1,worldpos_vertex:D1,background_vert:U1,background_frag:N1,backgroundCube_vert:I1,backgroundCube_frag:O1,cube_vert:F1,cube_frag:k1,depth_vert:z1,depth_frag:B1,distanceRGBA_vert:H1,distanceRGBA_frag:V1,equirect_vert:G1,equirect_frag:W1,linedashed_vert:X1,linedashed_frag:j1,meshbasic_vert:Y1,meshbasic_frag:q1,meshlambert_vert:$1,meshlambert_frag:K1,meshmatcap_vert:Z1,meshmatcap_frag:Q1,meshnormal_vert:J1,meshnormal_frag:ew,meshphong_vert:tw,meshphong_frag:nw,meshphysical_vert:iw,meshphysical_frag:rw,meshtoon_vert:sw,meshtoon_frag:ow,points_vert:aw,points_frag:lw,shadow_vert:uw,shadow_frag:cw,sprite_vert:fw,sprite_frag:dw},ae={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Jn={basic:{uniforms:$t([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:$t([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:$t([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:$t([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:$t([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:$t([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:$t([ae.points,ae.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:$t([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:$t([ae.common,ae.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:$t([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:$t([ae.sprite,ae.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:$t([ae.common,ae.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:$t([ae.lights,ae.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Jn.physical={uniforms:$t([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Qa={r:0,b:0,g:0},pr=new Ti,hw=new ct;function pw(t,e,n,i,r,s,o){const a=new Xe(0);let l=s===!0?0:1,u,f,d=null,h=0,m=null;function v(g){let _=g.isScene===!0?g.background:null;return _&&_.isTexture&&(_=(g.backgroundBlurriness>0?n:e).get(_)),_}function x(g){let _=!1;const S=v(g);S===null?c(a,l):S&&S.isColor&&(c(S,1),_=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(g,_){const S=v(_);S&&(S.isCubeTexture||S.mapping===Pu)?(f===void 0&&(f=new Wn(new ha(1,1,1),new ir({name:"BackgroundCubeMaterial",uniforms:qs(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),pr.copy(_.backgroundRotation),pr.x*=-1,pr.y*=-1,pr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),f.material.uniforms.envMap.value=S,f.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(hw.makeRotationFromEuler(pr)),f.material.toneMapped=Ke.getTransfer(S.colorSpace)!==rt,(d!==S||h!==S.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,d=S,h=S.version,m=t.toneMapping),f.layers.enableAll(),g.unshift(f,f.geometry,f.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new Wn(new Lu(2,2),new ir({name:"BackgroundMaterial",uniforms:qs(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=Ke.getTransfer(S.colorSpace)!==rt,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||h!==S.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,d=S,h=S.version,m=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function c(g,_){g.getRGB(Qa,Zv(t)),i.buffers.color.setClear(Qa.r,Qa.g,Qa.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(g,_=1){a.set(g),l=_,c(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,c(a,l)},render:x,addToRenderList:p}}function mw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(M,b,V,B,Y){let q=!1;const G=d(B,V,b);s!==G&&(s=G,u(s.object)),q=m(M,B,V,Y),q&&v(M,B,V,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,S(M,b,V,B),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return t.createVertexArray()}function u(M){return t.bindVertexArray(M)}function f(M){return t.deleteVertexArray(M)}function d(M,b,V){const B=V.wireframe===!0;let Y=i[M.id];Y===void 0&&(Y={},i[M.id]=Y);let q=Y[b.id];q===void 0&&(q={},Y[b.id]=q);let G=q[B];return G===void 0&&(G=h(l()),q[B]=G),G}function h(M){const b=[],V=[],B=[];for(let Y=0;Y<n;Y++)b[Y]=0,V[Y]=0,B[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:V,attributeDivisors:B,object:M,attributes:{},index:null}}function m(M,b,V,B){const Y=s.attributes,q=b.attributes;let G=0;const $=V.getAttributes();for(const D in $)if($[D].location>=0){const Z=Y[D];let se=q[D];if(se===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(se=M.instanceColor)),Z===void 0||Z.attribute!==se||se&&Z.data!==se.data)return!0;G++}return s.attributesNum!==G||s.index!==B}function v(M,b,V,B){const Y={},q=b.attributes;let G=0;const $=V.getAttributes();for(const D in $)if($[D].location>=0){let Z=q[D];Z===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor));const se={};se.attribute=Z,Z&&Z.data&&(se.data=Z.data),Y[D]=se,G++}s.attributes=Y,s.attributesNum=G,s.index=B}function x(){const M=s.newAttributes;for(let b=0,V=M.length;b<V;b++)M[b]=0}function p(M){c(M,0)}function c(M,b){const V=s.newAttributes,B=s.enabledAttributes,Y=s.attributeDivisors;V[M]=1,B[M]===0&&(t.enableVertexAttribArray(M),B[M]=1),Y[M]!==b&&(t.vertexAttribDivisor(M,b),Y[M]=b)}function g(){const M=s.newAttributes,b=s.enabledAttributes;for(let V=0,B=b.length;V<B;V++)b[V]!==M[V]&&(t.disableVertexAttribArray(V),b[V]=0)}function _(M,b,V,B,Y,q,G){G===!0?t.vertexAttribIPointer(M,b,V,Y,q):t.vertexAttribPointer(M,b,V,B,Y,q)}function S(M,b,V,B){x();const Y=B.attributes,q=V.getAttributes(),G=b.defaultAttributeValues;for(const $ in q){const D=q[$];if(D.location>=0){let X=Y[$];if(X===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(X=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(X=M.instanceColor)),X!==void 0){const Z=X.normalized,se=X.itemSize,Me=e.get(X);if(Me===void 0)continue;const Ve=Me.buffer,H=Me.type,te=Me.bytesPerElement,de=H===t.INT||H===t.UNSIGNED_INT||X.gpuType===mh;if(X.isInterleavedBufferAttribute){const ce=X.data,Re=ce.stride,Ue=X.offset;if(ce.isInstancedInterleavedBuffer){for(let Be=0;Be<D.locationSize;Be++)c(D.location+Be,ce.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Be=0;Be<D.locationSize;Be++)p(D.location+Be);t.bindBuffer(t.ARRAY_BUFFER,Ve);for(let Be=0;Be<D.locationSize;Be++)_(D.location+Be,se/D.locationSize,H,Z,Re*te,(Ue+se/D.locationSize*Be)*te,de)}else{if(X.isInstancedBufferAttribute){for(let ce=0;ce<D.locationSize;ce++)c(D.location+ce,X.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ce=0;ce<D.locationSize;ce++)p(D.location+ce);t.bindBuffer(t.ARRAY_BUFFER,Ve);for(let ce=0;ce<D.locationSize;ce++)_(D.location+ce,se/D.locationSize,H,Z,se*te,se/D.locationSize*ce*te,de)}}else if(G!==void 0){const Z=G[$];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(D.location,Z);break;case 3:t.vertexAttrib3fv(D.location,Z);break;case 4:t.vertexAttrib4fv(D.location,Z);break;default:t.vertexAttrib1fv(D.location,Z)}}}}g()}function R(){L();for(const M in i){const b=i[M];for(const V in b){const B=b[V];for(const Y in B)f(B[Y].object),delete B[Y];delete b[V]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;const b=i[M.id];for(const V in b){const B=b[V];for(const Y in B)f(B[Y].object),delete B[Y];delete b[V]}delete i[M.id]}function w(M){for(const b in i){const V=i[b];if(V[M.id]===void 0)continue;const B=V[M.id];for(const Y in B)f(B[Y].object),delete B[Y];delete V[M.id]}}function L(){T(),o=!0,s!==r&&(s=r,u(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:p,disableUnusedAttributes:g}}function gw(t,e,n){let i;function r(u){i=u}function s(u,f){t.drawArrays(i,u,f),n.update(f,i,1)}function o(u,f,d){d!==0&&(t.drawArraysInstanced(i,u,f,d),n.update(f,i,d))}function a(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,f,0,d);let m=0;for(let v=0;v<d;v++)m+=f[v];n.update(m,i,1)}function l(u,f,d,h){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<u.length;v++)o(u[v],f[v],h[v]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,f,0,h,0,d);let v=0;for(let x=0;x<d;x++)v+=f[x];for(let x=0;x<h.length;x++)n.update(v,i,h[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function _w(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Gn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const w=A===ua&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ei&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==mi&&!w)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const f=l(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const d=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),c=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=m>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:c,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:S,maxSamples:R}}function vw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Oi,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,m){const v=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,c=t.get(d);if(!r||v===null||v.length===0||s&&!p)s?f(null):u();else{const g=s?0:i,_=g*4;let S=c.clippingState||null;l.value=S,S=f(v,h,_,m);for(let R=0;R!==_;++R)S[R]=n[R];c.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,m,v){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,v!==!0||p===null){const c=m+x*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(p===null||p.length<c)&&(p=new Float32Array(c));for(let _=0,S=m;_!==x;++_,S+=4)o.copy(d[_]).applyMatrix4(g,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function xw(t){let e=new WeakMap;function n(o,a){return a===zf?o.mapping=Ws:a===Bf&&(o.mapping=Xs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===zf||a===Bf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new bE(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class yw extends Qv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Es=4,Em=[.125,.215,.35,.446,.526,.582],yr=20,Pc=new yw,Tm=new Xe;let bc=null,Lc=0,Dc=0,Uc=!1;const vr=(1+Math.sqrt(5))/2,ss=1/vr,wm=[new O(-vr,ss,0),new O(vr,ss,0),new O(-ss,0,vr),new O(ss,0,vr),new O(0,vr,-ss),new O(0,vr,ss),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class Am{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){bc=this._renderer.getRenderTarget(),Lc=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel(),Uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bc,Lc,Dc),this._renderer.xr.enabled=Uc,e.scissorTest=!1,Ja(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ws||e.mapping===Xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bc=this._renderer.getRenderTarget(),Lc=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel(),Uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:ua,format:Gn,colorSpace:lr,depthBuffer:!1},r=Cm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sw(s)),this._blurMaterial=Mw(s,e,n)}return r}_compileMaterial(e){const n=new Wn(this._lodPlanes[0],e);this._renderer.compile(n,Pc)}_sceneToCubeUV(e,n,i,r){const a=new En(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Tm),f.toneMapping=Ji,f.autoClear=!1;const m=new Th({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),v=new Wn(new ha,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(Tm),x=!0);for(let c=0;c<6;c++){const g=c%3;g===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):g===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const _=this._cubeSize;Ja(r,g*_,c>2?_:0,_,_),f.setRenderTarget(r),x&&f.render(v,a),f.render(e,a)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ws||e.mapping===Xs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Wn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ja(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Pc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=wm[(r-s-1)%wm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new Wn(this._lodPlanes[r],u),h=u.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*yr-1),x=s/v,p=isFinite(s)?1+Math.floor(f*x):yr;p>yr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${yr}`);const c=[];let g=0;for(let w=0;w<yr;++w){const L=w/x,T=Math.exp(-L*L/2);c.push(T),w===0?g+=T:w<p&&(g+=2*T)}for(let w=0;w<c.length;w++)c[w]=c[w]/g;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=c,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=v,h.mipInt.value=_-i;const S=this._sizeLods[r],R=3*S*(r>_-Es?r-_+Es:0),A=4*(this._cubeSize-S);Ja(n,R,A,3*S,2*S),l.setRenderTarget(n),l.render(d,Pc)}}function Sw(t){const e=[],n=[],i=[];let r=t;const s=t-Es+1+Em.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Es?l=Em[o-t+Es-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,d=1+u,h=[f,f,d,f,d,d,f,f,d,d,f,d],m=6,v=6,x=3,p=2,c=1,g=new Float32Array(x*v*m),_=new Float32Array(p*v*m),S=new Float32Array(c*v*m);for(let A=0;A<m;A++){const w=A%3*2/3-1,L=A>2?0:-1,T=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];g.set(T,x*v*A),_.set(h,p*v*A);const M=[A,A,A,A,A,A];S.set(M,c*v*A)}const R=new vn;R.setAttribute("position",new Yn(g,x)),R.setAttribute("uv",new Yn(_,p)),R.setAttribute("faceIndex",new Yn(S,c)),e.push(R),r>Es&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Cm(t,e,n){const i=new Nr(t,e,n);return i.texture.mapping=Pu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ja(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Mw(t,e,n){const i=new Float32Array(yr),r=new O(0,1,0);return new ir({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wh(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Rm(){return new ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wh(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Pm(){return new ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function wh(){return`

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
	`}function Ew(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===zf||l===Bf,f=l===Ws||l===Xs;if(u||f){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Am(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return u&&m&&m.height>0||f&&m&&r(m)?(n===null&&(n=new Am(t)),d=u?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Tw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ns("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ww(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const x=h.morphAttributes[v];for(let p=0,c=x.length;p<c;p++)e.remove(x[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const v in h)e.update(h[v],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const v in m){const x=m[v];for(let p=0,c=x.length;p<c;p++)e.update(x[p],t.ARRAY_BUFFER)}}function u(d){const h=[],m=d.index,v=d.attributes.position;let x=0;if(m!==null){const g=m.array;x=m.version;for(let _=0,S=g.length;_<S;_+=3){const R=g[_+0],A=g[_+1],w=g[_+2];h.push(R,A,A,w,w,R)}}else if(v!==void 0){const g=v.array;x=v.version;for(let _=0,S=g.length/3-1;_<S;_+=3){const R=_+0,A=_+1,w=_+2;h.push(R,A,A,w,w,R)}}else return;const p=new(Xv(h)?Kv:$v)(h,1);p.version=x;const c=s.get(d);c&&e.remove(c),s.set(d,p)}function f(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function Aw(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,m){t.drawElements(i,m,s,h*o),n.update(m,i,1)}function u(h,m,v){v!==0&&(t.drawElementsInstanced(i,m,s,h*o,v),n.update(m,i,v))}function f(h,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,v);let p=0;for(let c=0;c<v;c++)p+=m[c];n.update(p,i,1)}function d(h,m,v,x){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let c=0;c<h.length;c++)u(h[c]/o,m[c],x[c]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,x,0,v);let c=0;for(let g=0;g<v;g++)c+=m[g];for(let g=0;g<x.length;g++)n.update(c,i,x[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function Cw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Rw(t,e,n){const i=new WeakMap,r=new Dt;function s(o,a,l){const u=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let M=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var m=M;h!==void 0&&h.texture.dispose();const v=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,c=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let S=0;v===!0&&(S=1),x===!0&&(S=2),p===!0&&(S=3);let R=a.attributes.position.count*S,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const w=new Float32Array(R*A*4*d),L=new Yv(w,R,A,d);L.type=mi,L.needsUpdate=!0;const T=S*4;for(let b=0;b<d;b++){const V=c[b],B=g[b],Y=_[b],q=R*A*4*b;for(let G=0;G<V.count;G++){const $=G*T;v===!0&&(r.fromBufferAttribute(V,G),w[q+$+0]=r.x,w[q+$+1]=r.y,w[q+$+2]=r.z,w[q+$+3]=0),x===!0&&(r.fromBufferAttribute(B,G),w[q+$+4]=r.x,w[q+$+5]=r.y,w[q+$+6]=r.z,w[q+$+7]=0),p===!0&&(r.fromBufferAttribute(Y,G),w[q+$+8]=r.x,w[q+$+9]=r.y,w[q+$+10]=r.z,w[q+$+11]=Y.itemSize===4?r.w:1)}}h={count:d,texture:L,size:new we(R,A)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let p=0;p<u.length;p++)v+=u[p];const x=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function Pw(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class n0 extends Xt{constructor(e,n,i,r,s,o,a,l,u,f=Us){if(f!==Us&&f!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Us&&(i=Ur),i===void 0&&f===Ys&&(i=js),super(null,r,s,o,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:An,this.minFilter=l!==void 0?l:An,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const i0=new Xt,bm=new n0(1,1),r0=new Yv,s0=new pE,o0=new Jv,Lm=[],Dm=[],Um=new Float32Array(16),Nm=new Float32Array(9),Im=new Float32Array(4);function Js(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Lm[r];if(s===void 0&&(s=new Float32Array(r),Lm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Rt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Du(t,e){let n=Dm[e];n===void 0&&(n=new Int32Array(e),Dm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function bw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Lw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),Rt(n,e)}}function Dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),Rt(n,e)}}function Uw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),Rt(n,e)}}function Nw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;Im.set(i),t.uniformMatrix2fv(this.addr,!1,Im),Rt(n,i)}}function Iw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;Nm.set(i),t.uniformMatrix3fv(this.addr,!1,Nm),Rt(n,i)}}function Ow(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;Um.set(i),t.uniformMatrix4fv(this.addr,!1,Um),Rt(n,i)}}function Fw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function kw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),Rt(n,e)}}function zw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),Rt(n,e)}}function Bw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),Rt(n,e)}}function Hw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),Rt(n,e)}}function Gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),Rt(n,e)}}function Ww(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),Rt(n,e)}}function Xw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(bm.compareFunction=Wv,s=bm):s=i0,n.setTexture2D(e||s,r)}function jw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||s0,r)}function Yw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||o0,r)}function qw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||r0,r)}function $w(t){switch(t){case 5126:return bw;case 35664:return Lw;case 35665:return Dw;case 35666:return Uw;case 35674:return Nw;case 35675:return Iw;case 35676:return Ow;case 5124:case 35670:return Fw;case 35667:case 35671:return kw;case 35668:case 35672:return zw;case 35669:case 35673:return Bw;case 5125:return Hw;case 36294:return Vw;case 36295:return Gw;case 36296:return Ww;case 35678:case 36198:case 36298:case 36306:case 35682:return Xw;case 35679:case 36299:case 36307:return jw;case 35680:case 36300:case 36308:case 36293:return Yw;case 36289:case 36303:case 36311:case 36292:return qw}}function Kw(t,e){t.uniform1fv(this.addr,e)}function Zw(t,e){const n=Js(e,this.size,2);t.uniform2fv(this.addr,n)}function Qw(t,e){const n=Js(e,this.size,3);t.uniform3fv(this.addr,n)}function Jw(t,e){const n=Js(e,this.size,4);t.uniform4fv(this.addr,n)}function eA(t,e){const n=Js(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function tA(t,e){const n=Js(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function nA(t,e){const n=Js(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function iA(t,e){t.uniform1iv(this.addr,e)}function rA(t,e){t.uniform2iv(this.addr,e)}function sA(t,e){t.uniform3iv(this.addr,e)}function oA(t,e){t.uniform4iv(this.addr,e)}function aA(t,e){t.uniform1uiv(this.addr,e)}function lA(t,e){t.uniform2uiv(this.addr,e)}function uA(t,e){t.uniform3uiv(this.addr,e)}function cA(t,e){t.uniform4uiv(this.addr,e)}function fA(t,e,n){const i=this.cache,r=e.length,s=Du(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||i0,s[o])}function dA(t,e,n){const i=this.cache,r=e.length,s=Du(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||s0,s[o])}function hA(t,e,n){const i=this.cache,r=e.length,s=Du(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||o0,s[o])}function pA(t,e,n){const i=this.cache,r=e.length,s=Du(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||r0,s[o])}function mA(t){switch(t){case 5126:return Kw;case 35664:return Zw;case 35665:return Qw;case 35666:return Jw;case 35674:return eA;case 35675:return tA;case 35676:return nA;case 5124:case 35670:return iA;case 35667:case 35671:return rA;case 35668:case 35672:return sA;case 35669:case 35673:return oA;case 5125:return aA;case 36294:return lA;case 36295:return uA;case 36296:return cA;case 35678:case 36198:case 36298:case 36306:case 35682:return fA;case 35679:case 36299:case 36307:return dA;case 35680:case 36300:case 36308:case 36293:return hA;case 36289:case 36303:case 36311:case 36292:return pA}}class gA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=$w(n.type)}}class _A{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=mA(n.type)}}class vA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Nc=/(\w+)(\])?(\[|\.)?/g;function Om(t,e){t.seq.push(e),t.map[e.id]=e}function xA(t,e,n){const i=t.name,r=i.length;for(Nc.lastIndex=0;;){const s=Nc.exec(i),o=Nc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Om(n,u===void 0?new gA(a,t,e):new _A(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new vA(a),Om(n,d)),n=d}}}class Cl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);xA(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Fm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const yA=37297;let SA=0;function MA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function EA(t){const e=Ke.getPrimaries(Ke.workingColorSpace),n=Ke.getPrimaries(t);let i;switch(e===n?i="":e===su&&n===ru?i="LinearDisplayP3ToLinearSRGB":e===ru&&n===su&&(i="LinearSRGBToLinearDisplayP3"),t){case lr:case bu:return[i,"LinearTransferOETF"];case Qn:case Sh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function km(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+MA(t.getShaderSource(e),o)}else return r}function TA(t,e){const n=EA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function wA(t,e){let n;switch(e){case AM:n="Linear";break;case CM:n="Reinhard";break;case RM:n="Cineon";break;case PM:n="ACESFilmic";break;case LM:n="AgX";break;case DM:n="Neutral";break;case bM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const el=new O;function AA(){Ke.getLuminanceCoefficients(el);const t=el.x.toFixed(4),e=el.y.toFixed(4),n=el.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mo).join(`
`)}function RA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function PA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Mo(t){return t!==""}function zm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bA=/^[ \t]*#include +<([\w\d./]+)>/gm;function _d(t){return t.replace(bA,DA)}const LA=new Map;function DA(t,e){let n=Oe[e];if(n===void 0){const i=LA.get(e);if(i!==void 0)n=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return _d(n)}const UA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hm(t){return t.replace(UA,NA)}function NA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Vm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function IA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Lv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===QS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function OA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ws:case Xs:e="ENVMAP_TYPE_CUBE";break;case Pu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function FA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Xs:e="ENVMAP_MODE_REFRACTION";break}return e}function kA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Dv:e="ENVMAP_BLENDING_MULTIPLY";break;case TM:e="ENVMAP_BLENDING_MIX";break;case wM:e="ENVMAP_BLENDING_ADD";break}return e}function zA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function BA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=IA(n),u=OA(n),f=FA(n),d=kA(n),h=zA(n),m=CA(n),v=RA(s),x=r.createProgram();let p,c,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Mo).join(`
`),p.length>0&&(p+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Mo).join(`
`),c.length>0&&(c+=`
`)):(p=[Vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mo).join(`
`),c=[Vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ji?"#define TONE_MAPPING":"",n.toneMapping!==Ji?Oe.tonemapping_pars_fragment:"",n.toneMapping!==Ji?wA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,TA("linearToOutputTexel",n.outputColorSpace),AA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Mo).join(`
`)),o=_d(o),o=zm(o,n),o=Bm(o,n),a=_d(a),a=zm(a,n),a=Bm(a,n),o=Hm(o),a=Hm(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,c=["#define varying in",n.glslVersion===nm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===nm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const _=g+p+o,S=g+c+a,R=Fm(r,r.VERTEX_SHADER,_),A=Fm(r,r.FRAGMENT_SHADER,S);r.attachShader(x,R),r.attachShader(x,A),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function w(b){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(x).trim(),B=r.getShaderInfoLog(R).trim(),Y=r.getShaderInfoLog(A).trim();let q=!0,G=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,R,A);else{const $=km(r,R,"vertex"),D=km(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+V+`
`+$+`
`+D)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(B===""||Y==="")&&(G=!1);G&&(b.diagnostics={runnable:q,programLog:V,vertexShader:{log:B,prefix:p},fragmentShader:{log:Y,prefix:c}})}r.deleteShader(R),r.deleteShader(A),L=new Cl(r,x),T=PA(r,x)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,yA)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=SA++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=A,this}let HA=0;class VA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new GA(e),n.set(e,i)),i}}class GA{constructor(e){this.id=HA++,this.code=e,this.usedTimes=0}}function WA(t,e,n,i,r,s,o){const a=new Eh,l=new VA,u=new Set,f=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return u.add(T),T===0?"uv":`uv${T}`}function p(T,M,b,V,B){const Y=V.fog,q=B.geometry,G=T.isMeshStandardMaterial?V.environment:null,$=(T.isMeshStandardMaterial?n:e).get(T.envMap||G),D=$&&$.mapping===Pu?$.image.height:null,X=v[T.type];T.precision!==null&&(m=r.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const Z=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,se=Z!==void 0?Z.length:0;let Me=0;q.morphAttributes.position!==void 0&&(Me=1),q.morphAttributes.normal!==void 0&&(Me=2),q.morphAttributes.color!==void 0&&(Me=3);let Ve,H,te,de;if(X){const je=Jn[X];Ve=je.vertexShader,H=je.fragmentShader}else Ve=T.vertexShader,H=T.fragmentShader,l.update(T),te=l.getVertexShaderID(T),de=l.getFragmentShaderID(T);const ce=t.getRenderTarget(),Re=B.isInstancedMesh===!0,Ue=B.isBatchedMesh===!0,Be=!!T.map,dt=!!T.matcap,P=!!$,vt=!!T.aoMap,Ze=!!T.lightMap,et=!!T.bumpMap,Ee=!!T.normalMap,xt=!!T.displacementMap,Le=!!T.emissiveMap,Ne=!!T.metalnessMap,C=!!T.roughnessMap,y=T.anisotropy>0,z=T.clearcoat>0,K=T.dispersion>0,J=T.iridescence>0,Q=T.sheen>0,Te=T.transmission>0,ue=y&&!!T.anisotropyMap,me=z&&!!T.clearcoatMap,Ie=z&&!!T.clearcoatNormalMap,ne=z&&!!T.clearcoatRoughnessMap,pe=J&&!!T.iridescenceMap,He=J&&!!T.iridescenceThicknessMap,be=Q&&!!T.sheenColorMap,ge=Q&&!!T.sheenRoughnessMap,De=!!T.specularMap,ke=!!T.specularColorMap,at=!!T.specularIntensityMap,U=Te&&!!T.transmissionMap,ie=Te&&!!T.thicknessMap,W=!!T.gradientMap,j=!!T.alphaMap,oe=T.alphaTest>0,Ae=!!T.alphaHash,Ge=!!T.extensions;let yt=Ji;T.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(yt=t.toneMapping);const Nt={shaderID:X,shaderType:T.type,shaderName:T.name,vertexShader:Ve,fragmentShader:H,defines:T.defines,customVertexShaderID:te,customFragmentShaderID:de,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:Ue,batchingColor:Ue&&B._colorsTexture!==null,instancing:Re,instancingColor:Re&&B.instanceColor!==null,instancingMorph:Re&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ce===null?t.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:lr,alphaToCoverage:!!T.alphaToCoverage,map:Be,matcap:dt,envMap:P,envMapMode:P&&$.mapping,envMapCubeUVHeight:D,aoMap:vt,lightMap:Ze,bumpMap:et,normalMap:Ee,displacementMap:h&&xt,emissiveMap:Le,normalMapObjectSpace:Ee&&T.normalMapType===FM,normalMapTangentSpace:Ee&&T.normalMapType===OM,metalnessMap:Ne,roughnessMap:C,anisotropy:y,anisotropyMap:ue,clearcoat:z,clearcoatMap:me,clearcoatNormalMap:Ie,clearcoatRoughnessMap:ne,dispersion:K,iridescence:J,iridescenceMap:pe,iridescenceThicknessMap:He,sheen:Q,sheenColorMap:be,sheenRoughnessMap:ge,specularMap:De,specularColorMap:ke,specularIntensityMap:at,transmission:Te,transmissionMap:U,thicknessMap:ie,gradientMap:W,opaque:T.transparent===!1&&T.blending===Ds&&T.alphaToCoverage===!1,alphaMap:j,alphaTest:oe,alphaHash:Ae,combine:T.combine,mapUv:Be&&x(T.map.channel),aoMapUv:vt&&x(T.aoMap.channel),lightMapUv:Ze&&x(T.lightMap.channel),bumpMapUv:et&&x(T.bumpMap.channel),normalMapUv:Ee&&x(T.normalMap.channel),displacementMapUv:xt&&x(T.displacementMap.channel),emissiveMapUv:Le&&x(T.emissiveMap.channel),metalnessMapUv:Ne&&x(T.metalnessMap.channel),roughnessMapUv:C&&x(T.roughnessMap.channel),anisotropyMapUv:ue&&x(T.anisotropyMap.channel),clearcoatMapUv:me&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:He&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:be&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:ge&&x(T.sheenRoughnessMap.channel),specularMapUv:De&&x(T.specularMap.channel),specularColorMapUv:ke&&x(T.specularColorMap.channel),specularIntensityMapUv:at&&x(T.specularIntensityMap.channel),transmissionMapUv:U&&x(T.transmissionMap.channel),thicknessMapUv:ie&&x(T.thicknessMap.channel),alphaMapUv:j&&x(T.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ee||y),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!q.attributes.uv&&(Be||j),fog:!!Y,useFog:T.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:B.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Me,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&b.length>0,shadowMapType:t.shadowMap.type,toneMapping:yt,decodeVideoTexture:Be&&T.map.isVideoTexture===!0&&Ke.getTransfer(T.map.colorSpace)===rt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===di,flipSided:T.side===an,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ge&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&T.extensions.multiDraw===!0||Ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Nt.vertexUv1s=u.has(1),Nt.vertexUv2s=u.has(2),Nt.vertexUv3s=u.has(3),u.clear(),Nt}function c(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const b in T.defines)M.push(b),M.push(T.defines[b]);return T.isRawShaderMaterial===!1&&(g(M,T),_(M,T),M.push(t.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function g(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function _(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),T.push(a.mask)}function S(T){const M=v[T.type];let b;if(M){const V=Jn[M];b=AE.clone(V.uniforms)}else b=T.uniforms;return b}function R(T,M){let b;for(let V=0,B=f.length;V<B;V++){const Y=f[V];if(Y.cacheKey===M){b=Y,++b.usedTimes;break}}return b===void 0&&(b=new BA(t,M,T,s),f.push(b)),b}function A(T){if(--T.usedTimes===0){const M=f.indexOf(T);f[M]=f[f.length-1],f.pop(),T.destroy()}}function w(T){l.remove(T)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:c,getUniforms:S,acquireProgram:R,releaseProgram:A,releaseShaderCache:w,programs:f,dispose:L}}function XA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function jA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Gm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Wm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,m,v,x,p){let c=t[e];return c===void 0?(c={id:d.id,object:d,geometry:h,material:m,groupOrder:v,renderOrder:d.renderOrder,z:x,group:p},t[e]=c):(c.id=d.id,c.object=d,c.geometry=h,c.material=m,c.groupOrder=v,c.renderOrder=d.renderOrder,c.z=x,c.group=p),e++,c}function a(d,h,m,v,x,p){const c=o(d,h,m,v,x,p);m.transmission>0?i.push(c):m.transparent===!0?r.push(c):n.push(c)}function l(d,h,m,v,x,p){const c=o(d,h,m,v,x,p);m.transmission>0?i.unshift(c):m.transparent===!0?r.unshift(c):n.unshift(c)}function u(d,h){n.length>1&&n.sort(d||jA),i.length>1&&i.sort(h||Gm),r.length>1&&r.sort(h||Gm)}function f(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:u}}function YA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Wm,t.set(i,[o])):r>=s.length?(o=new Wm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function qA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new Xe};break;case"SpotLight":n={position:new O,direction:new O,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function $A(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let KA=0;function ZA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function QA(t){const e=new qA,n=$A(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new O);const r=new O,s=new ct,o=new ct;function a(u){let f=0,d=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let m=0,v=0,x=0,p=0,c=0,g=0,_=0,S=0,R=0,A=0,w=0;u.sort(ZA);for(let T=0,M=u.length;T<M;T++){const b=u[T],V=b.color,B=b.intensity,Y=b.distance,q=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)f+=V.r*B,d+=V.g*B,h+=V.b*B;else if(b.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(b.sh.coefficients[G],B);w++}else if(b.isDirectionalLight){const G=e.get(b);if(G.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const $=b.shadow,D=n.get(b);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,i.directionalShadow[m]=D,i.directionalShadowMap[m]=q,i.directionalShadowMatrix[m]=b.shadow.matrix,g++}i.directional[m]=G,m++}else if(b.isSpotLight){const G=e.get(b);G.position.setFromMatrixPosition(b.matrixWorld),G.color.copy(V).multiplyScalar(B),G.distance=Y,G.coneCos=Math.cos(b.angle),G.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),G.decay=b.decay,i.spot[x]=G;const $=b.shadow;if(b.map&&(i.spotLightMap[R]=b.map,R++,$.updateMatrices(b),b.castShadow&&A++),i.spotLightMatrix[x]=$.matrix,b.castShadow){const D=n.get(b);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,i.spotShadow[x]=D,i.spotShadowMap[x]=q,S++}x++}else if(b.isRectAreaLight){const G=e.get(b);G.color.copy(V).multiplyScalar(B),G.halfWidth.set(b.width*.5,0,0),G.halfHeight.set(0,b.height*.5,0),i.rectArea[p]=G,p++}else if(b.isPointLight){const G=e.get(b);if(G.color.copy(b.color).multiplyScalar(b.intensity),G.distance=b.distance,G.decay=b.decay,b.castShadow){const $=b.shadow,D=n.get(b);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,D.shadowCameraNear=$.camera.near,D.shadowCameraFar=$.camera.far,i.pointShadow[v]=D,i.pointShadowMap[v]=q,i.pointShadowMatrix[v]=b.shadow.matrix,_++}i.point[v]=G,v++}else if(b.isHemisphereLight){const G=e.get(b);G.skyColor.copy(b.color).multiplyScalar(B),G.groundColor.copy(b.groundColor).multiplyScalar(B),i.hemi[c]=G,c++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==m||L.pointLength!==v||L.spotLength!==x||L.rectAreaLength!==p||L.hemiLength!==c||L.numDirectionalShadows!==g||L.numPointShadows!==_||L.numSpotShadows!==S||L.numSpotMaps!==R||L.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=p,i.point.length=v,i.hemi.length=c,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=S+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,L.directionalLength=m,L.pointLength=v,L.spotLength=x,L.rectAreaLength=p,L.hemiLength=c,L.numDirectionalShadows=g,L.numPointShadows=_,L.numSpotShadows=S,L.numSpotMaps=R,L.numLightProbes=w,i.version=KA++)}function l(u,f){let d=0,h=0,m=0,v=0,x=0;const p=f.matrixWorldInverse;for(let c=0,g=u.length;c<g;c++){const _=u[c];if(_.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),d++}else if(_.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),m++}else if(_.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(_.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),h++}else if(_.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function Xm(t){const e=new QA(t),n=[],i=[];function r(f){u.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function JA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Xm(t),e.set(r,[a])):s>=o.length?(a=new Xm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class eC extends Br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=NM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tC extends Br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const nC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iC=`uniform sampler2D shadow_pass;
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
}`;function rC(t,e,n){let i=new e0;const r=new we,s=new we,o=new Dt,a=new eC({depthPacking:IM}),l=new tC,u={},f=n.maxTextureSize,d={[nr]:an,[an]:nr,[di]:di},h=new ir({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:nC,fragmentShader:iC}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new vn;v.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Wn(v,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lv;let c=this.type;this.render=function(A,w,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const T=t.getRenderTarget(),M=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),V=t.state;V.setBlending(Qi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const B=c!==ui&&this.type===ui,Y=c===ui&&this.type!==ui;for(let q=0,G=A.length;q<G;q++){const $=A[q],D=$.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const X=D.getFrameExtents();if(r.multiply(X),s.copy(D.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/X.x),r.x=s.x*X.x,D.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/X.y),r.y=s.y*X.y,D.mapSize.y=s.y)),D.map===null||B===!0||Y===!0){const se=this.type!==ui?{minFilter:An,magFilter:An}:{};D.map!==null&&D.map.dispose(),D.map=new Nr(r.x,r.y,se),D.map.texture.name=$.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const Z=D.getViewportCount();for(let se=0;se<Z;se++){const Me=D.getViewport(se);o.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),V.viewport(o),D.updateMatrices($,se),i=D.getFrustum(),S(w,L,D.camera,$,this.type)}D.isPointLightShadow!==!0&&this.type===ui&&g(D,L),D.needsUpdate=!1}c=this.type,p.needsUpdate=!1,t.setRenderTarget(T,M,b)};function g(A,w){const L=e.update(x);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Nr(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(w,null,L,h,x,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(w,null,L,m,x,null)}function _(A,w,L,T){let M=null;const b=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(b!==void 0)M=b;else if(M=L.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const V=M.uuid,B=w.uuid;let Y=u[V];Y===void 0&&(Y={},u[V]=Y);let q=Y[B];q===void 0&&(q=M.clone(),Y[B]=q,w.addEventListener("dispose",R)),M=q}if(M.visible=w.visible,M.wireframe=w.wireframe,T===ui?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:d[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=t.properties.get(M);V.light=L}return M}function S(A,w,L,T,M){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===ui)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const B=e.update(A),Y=A.material;if(Array.isArray(Y)){const q=B.groups;for(let G=0,$=q.length;G<$;G++){const D=q[G],X=Y[D.materialIndex];if(X&&X.visible){const Z=_(A,X,T,M);A.onBeforeShadow(t,A,w,L,B,Z,D),t.renderBufferDirect(L,null,B,Z,A,D),A.onAfterShadow(t,A,w,L,B,Z,D)}}}else if(Y.visible){const q=_(A,Y,T,M);A.onBeforeShadow(t,A,w,L,B,q,null),t.renderBufferDirect(L,null,B,q,A,null),A.onAfterShadow(t,A,w,L,B,q,null)}}const V=A.children;for(let B=0,Y=V.length;B<Y;B++)S(V[B],w,L,T,M)}function R(A){A.target.removeEventListener("dispose",R);for(const L in u){const T=u[L],M=A.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}function sC(t){function e(){let U=!1;const ie=new Dt;let W=null;const j=new Dt(0,0,0,0);return{setMask:function(oe){W!==oe&&!U&&(t.colorMask(oe,oe,oe,oe),W=oe)},setLocked:function(oe){U=oe},setClear:function(oe,Ae,Ge,yt,Nt){Nt===!0&&(oe*=yt,Ae*=yt,Ge*=yt),ie.set(oe,Ae,Ge,yt),j.equals(ie)===!1&&(t.clearColor(oe,Ae,Ge,yt),j.copy(ie))},reset:function(){U=!1,W=null,j.set(-1,0,0,0)}}}function n(){let U=!1,ie=null,W=null,j=null;return{setTest:function(oe){oe?de(t.DEPTH_TEST):ce(t.DEPTH_TEST)},setMask:function(oe){ie!==oe&&!U&&(t.depthMask(oe),ie=oe)},setFunc:function(oe){if(W!==oe){switch(oe){case _M:t.depthFunc(t.NEVER);break;case vM:t.depthFunc(t.ALWAYS);break;case xM:t.depthFunc(t.LESS);break;case nu:t.depthFunc(t.LEQUAL);break;case yM:t.depthFunc(t.EQUAL);break;case SM:t.depthFunc(t.GEQUAL);break;case MM:t.depthFunc(t.GREATER);break;case EM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}W=oe}},setLocked:function(oe){U=oe},setClear:function(oe){j!==oe&&(t.clearDepth(oe),j=oe)},reset:function(){U=!1,ie=null,W=null,j=null}}}function i(){let U=!1,ie=null,W=null,j=null,oe=null,Ae=null,Ge=null,yt=null,Nt=null;return{setTest:function(je){U||(je?de(t.STENCIL_TEST):ce(t.STENCIL_TEST))},setMask:function(je){ie!==je&&!U&&(t.stencilMask(je),ie=je)},setFunc:function(je,ii,$n){(W!==je||j!==ii||oe!==$n)&&(t.stencilFunc(je,ii,$n),W=je,j=ii,oe=$n)},setOp:function(je,ii,$n){(Ae!==je||Ge!==ii||yt!==$n)&&(t.stencilOp(je,ii,$n),Ae=je,Ge=ii,yt=$n)},setLocked:function(je){U=je},setClear:function(je){Nt!==je&&(t.clearStencil(je),Nt=je)},reset:function(){U=!1,ie=null,W=null,j=null,oe=null,Ae=null,Ge=null,yt=null,Nt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let u={},f={},d=new WeakMap,h=[],m=null,v=!1,x=null,p=null,c=null,g=null,_=null,S=null,R=null,A=new Xe(0,0,0),w=0,L=!1,T=null,M=null,b=null,V=null,B=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,G=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec($)[1]),q=G>=1):$.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),q=G>=2);let D=null,X={};const Z=t.getParameter(t.SCISSOR_BOX),se=t.getParameter(t.VIEWPORT),Me=new Dt().fromArray(Z),Ve=new Dt().fromArray(se);function H(U,ie,W,j){const oe=new Uint8Array(4),Ae=t.createTexture();t.bindTexture(U,Ae),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ge=0;Ge<W;Ge++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(ie,0,t.RGBA,1,1,j,0,t.RGBA,t.UNSIGNED_BYTE,oe):t.texImage2D(ie+Ge,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,oe);return Ae}const te={};te[t.TEXTURE_2D]=H(t.TEXTURE_2D,t.TEXTURE_2D,1),te[t.TEXTURE_CUBE_MAP]=H(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[t.TEXTURE_2D_ARRAY]=H(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),te[t.TEXTURE_3D]=H(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),de(t.DEPTH_TEST),s.setFunc(nu),et(!1),Ee(Zp),de(t.CULL_FACE),vt(Qi);function de(U){u[U]!==!0&&(t.enable(U),u[U]=!0)}function ce(U){u[U]!==!1&&(t.disable(U),u[U]=!1)}function Re(U,ie){return f[U]!==ie?(t.bindFramebuffer(U,ie),f[U]=ie,U===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ie),U===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ue(U,ie){let W=h,j=!1;if(U){W=d.get(ie),W===void 0&&(W=[],d.set(ie,W));const oe=U.textures;if(W.length!==oe.length||W[0]!==t.COLOR_ATTACHMENT0){for(let Ae=0,Ge=oe.length;Ae<Ge;Ae++)W[Ae]=t.COLOR_ATTACHMENT0+Ae;W.length=oe.length,j=!0}}else W[0]!==t.BACK&&(W[0]=t.BACK,j=!0);j&&t.drawBuffers(W)}function Be(U){return m!==U?(t.useProgram(U),m=U,!0):!1}const dt={[xr]:t.FUNC_ADD,[eM]:t.FUNC_SUBTRACT,[tM]:t.FUNC_REVERSE_SUBTRACT};dt[nM]=t.MIN,dt[iM]=t.MAX;const P={[rM]:t.ZERO,[sM]:t.ONE,[oM]:t.SRC_COLOR,[Ff]:t.SRC_ALPHA,[dM]:t.SRC_ALPHA_SATURATE,[cM]:t.DST_COLOR,[lM]:t.DST_ALPHA,[aM]:t.ONE_MINUS_SRC_COLOR,[kf]:t.ONE_MINUS_SRC_ALPHA,[fM]:t.ONE_MINUS_DST_COLOR,[uM]:t.ONE_MINUS_DST_ALPHA,[hM]:t.CONSTANT_COLOR,[pM]:t.ONE_MINUS_CONSTANT_COLOR,[mM]:t.CONSTANT_ALPHA,[gM]:t.ONE_MINUS_CONSTANT_ALPHA};function vt(U,ie,W,j,oe,Ae,Ge,yt,Nt,je){if(U===Qi){v===!0&&(ce(t.BLEND),v=!1);return}if(v===!1&&(de(t.BLEND),v=!0),U!==JS){if(U!==x||je!==L){if((p!==xr||_!==xr)&&(t.blendEquation(t.FUNC_ADD),p=xr,_=xr),je)switch(U){case Ds:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Qp:t.blendFunc(t.ONE,t.ONE);break;case Jp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case em:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ds:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Qp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Jp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case em:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}c=null,g=null,S=null,R=null,A.set(0,0,0),w=0,x=U,L=je}return}oe=oe||ie,Ae=Ae||W,Ge=Ge||j,(ie!==p||oe!==_)&&(t.blendEquationSeparate(dt[ie],dt[oe]),p=ie,_=oe),(W!==c||j!==g||Ae!==S||Ge!==R)&&(t.blendFuncSeparate(P[W],P[j],P[Ae],P[Ge]),c=W,g=j,S=Ae,R=Ge),(yt.equals(A)===!1||Nt!==w)&&(t.blendColor(yt.r,yt.g,yt.b,Nt),A.copy(yt),w=Nt),x=U,L=!1}function Ze(U,ie){U.side===di?ce(t.CULL_FACE):de(t.CULL_FACE);let W=U.side===an;ie&&(W=!W),et(W),U.blending===Ds&&U.transparent===!1?vt(Qi):vt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const j=U.stencilWrite;o.setTest(j),j&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Le(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function et(U){T!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),T=U)}function Ee(U){U!==KS?(de(t.CULL_FACE),U!==M&&(U===Zp?t.cullFace(t.BACK):U===ZS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ce(t.CULL_FACE),M=U}function xt(U){U!==b&&(q&&t.lineWidth(U),b=U)}function Le(U,ie,W){U?(de(t.POLYGON_OFFSET_FILL),(V!==ie||B!==W)&&(t.polygonOffset(ie,W),V=ie,B=W)):ce(t.POLYGON_OFFSET_FILL)}function Ne(U){U?de(t.SCISSOR_TEST):ce(t.SCISSOR_TEST)}function C(U){U===void 0&&(U=t.TEXTURE0+Y-1),D!==U&&(t.activeTexture(U),D=U)}function y(U,ie,W){W===void 0&&(D===null?W=t.TEXTURE0+Y-1:W=D);let j=X[W];j===void 0&&(j={type:void 0,texture:void 0},X[W]=j),(j.type!==U||j.texture!==ie)&&(D!==W&&(t.activeTexture(W),D=W),t.bindTexture(U,ie||te[U]),j.type=U,j.texture=ie)}function z(){const U=X[D];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function K(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function He(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(U){Me.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),Me.copy(U))}function ge(U){Ve.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Ve.copy(U))}function De(U,ie){let W=l.get(ie);W===void 0&&(W=new WeakMap,l.set(ie,W));let j=W.get(U);j===void 0&&(j=t.getUniformBlockIndex(ie,U.name),W.set(U,j))}function ke(U,ie){const j=l.get(ie).get(U);a.get(ie)!==j&&(t.uniformBlockBinding(ie,j,U.__bindingPointIndex),a.set(ie,j))}function at(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},D=null,X={},f={},d=new WeakMap,h=[],m=null,v=!1,x=null,p=null,c=null,g=null,_=null,S=null,R=null,A=new Xe(0,0,0),w=0,L=!1,T=null,M=null,b=null,V=null,B=null,Me.set(0,0,t.canvas.width,t.canvas.height),Ve.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:de,disable:ce,bindFramebuffer:Re,drawBuffers:Ue,useProgram:Be,setBlending:vt,setMaterial:Ze,setFlipSided:et,setCullFace:Ee,setLineWidth:xt,setPolygonOffset:Le,setScissorTest:Ne,activeTexture:C,bindTexture:y,unbindTexture:z,compressedTexImage2D:K,compressedTexImage3D:J,texImage2D:pe,texImage3D:He,updateUBOMapping:De,uniformBlockBinding:ke,texStorage2D:Ie,texStorage3D:ne,texSubImage2D:Q,texSubImage3D:Te,compressedTexSubImage2D:ue,compressedTexSubImage3D:me,scissor:be,viewport:ge,reset:at}}function jm(t,e,n,i){const r=oC(i);switch(n){case Fv:return t*e;case zv:return t*e;case Bv:return t*e*2;case Hv:return t*e/r.components*r.byteLength;case vh:return t*e/r.components*r.byteLength;case Vv:return t*e*2/r.components*r.byteLength;case xh:return t*e*2/r.components*r.byteLength;case kv:return t*e*3/r.components*r.byteLength;case Gn:return t*e*4/r.components*r.byteLength;case yh:return t*e*4/r.components*r.byteLength;case Ml:case El:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Tl:case wl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wf:case jf:return Math.max(t,16)*Math.max(e,8)/4;case Gf:case Xf:return Math.max(t,8)*Math.max(e,8)/2;case Yf:case qf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case $f:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Kf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Zf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Qf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Jf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ed:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case td:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case nd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case id:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case rd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case sd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case od:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ad:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case ld:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ud:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Al:case cd:case fd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Gv:case dd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case hd:case pd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function oC(t){switch(t){case Ei:case Nv:return{byteLength:1,components:1};case Jo:case Iv:case ua:return{byteLength:2,components:1};case gh:case _h:return{byteLength:2,components:4};case Ur:case mh:case mi:return{byteLength:4,components:1};case Ov:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function aC(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new we,f=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,y){return m?new OffscreenCanvas(C,y):ta("canvas")}function x(C,y,z){let K=1;const J=Ne(C);if((J.width>z||J.height>z)&&(K=z/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Q=Math.floor(K*J.width),Te=Math.floor(K*J.height);d===void 0&&(d=v(Q,Te));const ue=y?v(Q,Te):d;return ue.width=Q,ue.height=Te,ue.getContext("2d").drawImage(C,0,0,Q,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Q+"x"+Te+")."),ue}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==An&&C.minFilter!==Tn}function c(C){t.generateMipmap(C)}function g(C,y,z,K,J=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Q=y;if(y===t.RED&&(z===t.FLOAT&&(Q=t.R32F),z===t.HALF_FLOAT&&(Q=t.R16F),z===t.UNSIGNED_BYTE&&(Q=t.R8)),y===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(Q=t.R8UI),z===t.UNSIGNED_SHORT&&(Q=t.R16UI),z===t.UNSIGNED_INT&&(Q=t.R32UI),z===t.BYTE&&(Q=t.R8I),z===t.SHORT&&(Q=t.R16I),z===t.INT&&(Q=t.R32I)),y===t.RG&&(z===t.FLOAT&&(Q=t.RG32F),z===t.HALF_FLOAT&&(Q=t.RG16F),z===t.UNSIGNED_BYTE&&(Q=t.RG8)),y===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(Q=t.RG8UI),z===t.UNSIGNED_SHORT&&(Q=t.RG16UI),z===t.UNSIGNED_INT&&(Q=t.RG32UI),z===t.BYTE&&(Q=t.RG8I),z===t.SHORT&&(Q=t.RG16I),z===t.INT&&(Q=t.RG32I)),y===t.RGB&&z===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),y===t.RGBA){const Te=J?iu:Ke.getTransfer(K);z===t.FLOAT&&(Q=t.RGBA32F),z===t.HALF_FLOAT&&(Q=t.RGBA16F),z===t.UNSIGNED_BYTE&&(Q=Te===rt?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function _(C,y){let z;return C?y===null||y===Ur||y===js?z=t.DEPTH24_STENCIL8:y===mi?z=t.DEPTH32F_STENCIL8:y===Jo&&(z=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ur||y===js?z=t.DEPTH_COMPONENT24:y===mi?z=t.DEPTH_COMPONENT32F:y===Jo&&(z=t.DEPTH_COMPONENT16),z}function S(C,y){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==An&&C.minFilter!==Tn?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function R(C){const y=C.target;y.removeEventListener("dispose",R),w(y),y.isVideoTexture&&f.delete(y)}function A(C){const y=C.target;y.removeEventListener("dispose",A),T(y)}function w(C){const y=i.get(C);if(y.__webglInit===void 0)return;const z=C.source,K=h.get(z);if(K){const J=K[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&L(C),Object.keys(K).length===0&&h.delete(z)}i.remove(C)}function L(C){const y=i.get(C);t.deleteTexture(y.__webglTexture);const z=C.source,K=h.get(z);delete K[y.__cacheKey],o.memory.textures--}function T(C){const y=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let J=0;J<y.__webglFramebuffer[K].length;J++)t.deleteFramebuffer(y.__webglFramebuffer[K][J]);else t.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)t.deleteFramebuffer(y.__webglFramebuffer[K]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const z=C.textures;for(let K=0,J=z.length;K<J;K++){const Q=i.get(z[K]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(z[K])}i.remove(C)}let M=0;function b(){M=0}function V(){const C=M;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),M+=1,C}function B(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function Y(C,y){const z=i.get(C);if(C.isVideoTexture&&xt(C),C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){const K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ve(z,C,y);return}}n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+y)}function q(C,y){const z=i.get(C);if(C.version>0&&z.__version!==C.version){Ve(z,C,y);return}n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+y)}function G(C,y){const z=i.get(C);if(C.version>0&&z.__version!==C.version){Ve(z,C,y);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+y)}function $(C,y){const z=i.get(C);if(C.version>0&&z.__version!==C.version){H(z,C,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+y)}const D={[Hf]:t.REPEAT,[Tr]:t.CLAMP_TO_EDGE,[Vf]:t.MIRRORED_REPEAT},X={[An]:t.NEAREST,[UM]:t.NEAREST_MIPMAP_NEAREST,[Ua]:t.NEAREST_MIPMAP_LINEAR,[Tn]:t.LINEAR,[cc]:t.LINEAR_MIPMAP_NEAREST,[wr]:t.LINEAR_MIPMAP_LINEAR},Z={[kM]:t.NEVER,[WM]:t.ALWAYS,[zM]:t.LESS,[Wv]:t.LEQUAL,[BM]:t.EQUAL,[GM]:t.GEQUAL,[HM]:t.GREATER,[VM]:t.NOTEQUAL};function se(C,y){if(y.type===mi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Tn||y.magFilter===cc||y.magFilter===Ua||y.magFilter===wr||y.minFilter===Tn||y.minFilter===cc||y.minFilter===Ua||y.minFilter===wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,D[y.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,D[y.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,D[y.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,X[y.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,X[y.minFilter]),y.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Z[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===An||y.minFilter!==Ua&&y.minFilter!==wr||y.type===mi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Me(C,y){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",R));const K=y.source;let J=h.get(K);J===void 0&&(J={},h.set(K,J));const Q=B(y);if(Q!==C.__cacheKey){J[Q]===void 0&&(J[Q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,z=!0),J[Q].usedTimes++;const Te=J[C.__cacheKey];Te!==void 0&&(J[C.__cacheKey].usedTimes--,Te.usedTimes===0&&L(y)),C.__cacheKey=Q,C.__webglTexture=J[Q].texture}return z}function Ve(C,y,z){let K=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=t.TEXTURE_3D);const J=Me(C,y),Q=y.source;n.bindTexture(K,C.__webglTexture,t.TEXTURE0+z);const Te=i.get(Q);if(Q.version!==Te.__version||J===!0){n.activeTexture(t.TEXTURE0+z);const ue=Ke.getPrimaries(Ke.workingColorSpace),me=y.colorSpace===zi?null:Ke.getPrimaries(y.colorSpace),Ie=y.colorSpace===zi||ue===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let ne=x(y.image,!1,r.maxTextureSize);ne=Le(y,ne);const pe=s.convert(y.format,y.colorSpace),He=s.convert(y.type);let be=g(y.internalFormat,pe,He,y.colorSpace,y.isVideoTexture);se(K,y);let ge;const De=y.mipmaps,ke=y.isVideoTexture!==!0,at=Te.__version===void 0||J===!0,U=Q.dataReady,ie=S(y,ne);if(y.isDepthTexture)be=_(y.format===Ys,y.type),at&&(ke?n.texStorage2D(t.TEXTURE_2D,1,be,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,be,ne.width,ne.height,0,pe,He,null));else if(y.isDataTexture)if(De.length>0){ke&&at&&n.texStorage2D(t.TEXTURE_2D,ie,be,De[0].width,De[0].height);for(let W=0,j=De.length;W<j;W++)ge=De[W],ke?U&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,ge.width,ge.height,pe,He,ge.data):n.texImage2D(t.TEXTURE_2D,W,be,ge.width,ge.height,0,pe,He,ge.data);y.generateMipmaps=!1}else ke?(at&&n.texStorage2D(t.TEXTURE_2D,ie,be,ne.width,ne.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ne.width,ne.height,pe,He,ne.data)):n.texImage2D(t.TEXTURE_2D,0,be,ne.width,ne.height,0,pe,He,ne.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ke&&at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ie,be,De[0].width,De[0].height,ne.depth);for(let W=0,j=De.length;W<j;W++)if(ge=De[W],y.format!==Gn)if(pe!==null)if(ke){if(U)if(y.layerUpdates.size>0){const oe=jm(ge.width,ge.height,y.format,y.type);for(const Ae of y.layerUpdates){const Ge=ge.data.subarray(Ae*oe/ge.data.BYTES_PER_ELEMENT,(Ae+1)*oe/ge.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,Ae,ge.width,ge.height,1,pe,Ge,0,0)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,ge.width,ge.height,ne.depth,pe,ge.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,W,be,ge.width,ge.height,ne.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,ge.width,ge.height,ne.depth,pe,He,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,W,be,ge.width,ge.height,ne.depth,0,pe,He,ge.data)}else{ke&&at&&n.texStorage2D(t.TEXTURE_2D,ie,be,De[0].width,De[0].height);for(let W=0,j=De.length;W<j;W++)ge=De[W],y.format!==Gn?pe!==null?ke?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,W,0,0,ge.width,ge.height,pe,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,W,be,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?U&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,ge.width,ge.height,pe,He,ge.data):n.texImage2D(t.TEXTURE_2D,W,be,ge.width,ge.height,0,pe,He,ge.data)}else if(y.isDataArrayTexture)if(ke){if(at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ie,be,ne.width,ne.height,ne.depth),U)if(y.layerUpdates.size>0){const W=jm(ne.width,ne.height,y.format,y.type);for(const j of y.layerUpdates){const oe=ne.data.subarray(j*W/ne.data.BYTES_PER_ELEMENT,(j+1)*W/ne.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,j,ne.width,ne.height,1,pe,He,oe)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,pe,He,ne.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,ne.width,ne.height,ne.depth,0,pe,He,ne.data);else if(y.isData3DTexture)ke?(at&&n.texStorage3D(t.TEXTURE_3D,ie,be,ne.width,ne.height,ne.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,pe,He,ne.data)):n.texImage3D(t.TEXTURE_3D,0,be,ne.width,ne.height,ne.depth,0,pe,He,ne.data);else if(y.isFramebufferTexture){if(at)if(ke)n.texStorage2D(t.TEXTURE_2D,ie,be,ne.width,ne.height);else{let W=ne.width,j=ne.height;for(let oe=0;oe<ie;oe++)n.texImage2D(t.TEXTURE_2D,oe,be,W,j,0,pe,He,null),W>>=1,j>>=1}}else if(De.length>0){if(ke&&at){const W=Ne(De[0]);n.texStorage2D(t.TEXTURE_2D,ie,be,W.width,W.height)}for(let W=0,j=De.length;W<j;W++)ge=De[W],ke?U&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,pe,He,ge):n.texImage2D(t.TEXTURE_2D,W,be,pe,He,ge);y.generateMipmaps=!1}else if(ke){if(at){const W=Ne(ne);n.texStorage2D(t.TEXTURE_2D,ie,be,W.width,W.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,pe,He,ne)}else n.texImage2D(t.TEXTURE_2D,0,be,pe,He,ne);p(y)&&c(K),Te.__version=Q.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function H(C,y,z){if(y.image.length!==6)return;const K=Me(C,y),J=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+z);const Q=i.get(J);if(J.version!==Q.__version||K===!0){n.activeTexture(t.TEXTURE0+z);const Te=Ke.getPrimaries(Ke.workingColorSpace),ue=y.colorSpace===zi?null:Ke.getPrimaries(y.colorSpace),me=y.colorSpace===zi||Te===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ie=y.isCompressedTexture||y.image[0].isCompressedTexture,ne=y.image[0]&&y.image[0].isDataTexture,pe=[];for(let j=0;j<6;j++)!Ie&&!ne?pe[j]=x(y.image[j],!0,r.maxCubemapSize):pe[j]=ne?y.image[j].image:y.image[j],pe[j]=Le(y,pe[j]);const He=pe[0],be=s.convert(y.format,y.colorSpace),ge=s.convert(y.type),De=g(y.internalFormat,be,ge,y.colorSpace),ke=y.isVideoTexture!==!0,at=Q.__version===void 0||K===!0,U=J.dataReady;let ie=S(y,He);se(t.TEXTURE_CUBE_MAP,y);let W;if(Ie){ke&&at&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ie,De,He.width,He.height);for(let j=0;j<6;j++){W=pe[j].mipmaps;for(let oe=0;oe<W.length;oe++){const Ae=W[oe];y.format!==Gn?be!==null?ke?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe,0,0,Ae.width,Ae.height,be,Ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe,De,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe,0,0,Ae.width,Ae.height,be,ge,Ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe,De,Ae.width,Ae.height,0,be,ge,Ae.data)}}}else{if(W=y.mipmaps,ke&&at){W.length>0&&ie++;const j=Ne(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ie,De,j.width,j.height)}for(let j=0;j<6;j++)if(ne){ke?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,pe[j].width,pe[j].height,be,ge,pe[j].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,De,pe[j].width,pe[j].height,0,be,ge,pe[j].data);for(let oe=0;oe<W.length;oe++){const Ge=W[oe].image[j].image;ke?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe+1,0,0,Ge.width,Ge.height,be,ge,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe+1,De,Ge.width,Ge.height,0,be,ge,Ge.data)}}else{ke?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,be,ge,pe[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,De,be,ge,pe[j]);for(let oe=0;oe<W.length;oe++){const Ae=W[oe];ke?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe+1,0,0,be,ge,Ae.image[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe+1,De,be,ge,Ae.image[j])}}}p(y)&&c(t.TEXTURE_CUBE_MAP),Q.__version=J.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function te(C,y,z,K,J,Q){const Te=s.convert(z.format,z.colorSpace),ue=s.convert(z.type),me=g(z.internalFormat,Te,ue,z.colorSpace);if(!i.get(y).__hasExternalTextures){const ne=Math.max(1,y.width>>Q),pe=Math.max(1,y.height>>Q);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,Q,me,ne,pe,y.depth,0,Te,ue,null):n.texImage2D(J,Q,me,ne,pe,0,Te,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Ee(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,J,i.get(z).__webglTexture,0,et(y)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,J,i.get(z).__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function de(C,y,z){if(t.bindRenderbuffer(t.RENDERBUFFER,C),y.depthBuffer){const K=y.depthTexture,J=K&&K.isDepthTexture?K.type:null,Q=_(y.stencilBuffer,J),Te=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=et(y);Ee(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,Q,y.width,y.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,Q,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,Q,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,C)}else{const K=y.textures;for(let J=0;J<K.length;J++){const Q=K[J],Te=s.convert(Q.format,Q.colorSpace),ue=s.convert(Q.type),me=g(Q.internalFormat,Te,ue,Q.colorSpace),Ie=et(y);z&&Ee(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,me,y.width,y.height):Ee(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ie,me,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,me,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ce(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Y(y.depthTexture,0);const K=i.get(y.depthTexture).__webglTexture,J=et(y);if(y.depthTexture.format===Us)Ee(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0);else if(y.depthTexture.format===Ys)Ee(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Re(C){const y=i.get(C),z=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=K}if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ce(y.__webglFramebuffer,C)}else if(z){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=t.createRenderbuffer(),de(y.__webglDepthbuffer[K],C,!1);else{const J=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,Q)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),de(y.__webglDepthbuffer,C,!1);else{const K=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,J)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ue(C,y,z){const K=i.get(C);y!==void 0&&te(K.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&Re(C)}function Be(C){const y=C.texture,z=i.get(C),K=i.get(y);C.addEventListener("dispose",A);const J=C.textures,Q=C.isWebGLCubeRenderTarget===!0,Te=J.length>1;if(Te||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=y.version,o.memory.textures++),Q){z.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[ue]=[];for(let me=0;me<y.mipmaps.length;me++)z.__webglFramebuffer[ue][me]=t.createFramebuffer()}else z.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let ue=0;ue<y.mipmaps.length;ue++)z.__webglFramebuffer[ue]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(Te)for(let ue=0,me=J.length;ue<me;ue++){const Ie=i.get(J[ue]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&Ee(C)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ue=0;ue<J.length;ue++){const me=J[ue];z.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[ue]);const Ie=s.convert(me.format,me.colorSpace),ne=s.convert(me.type),pe=g(me.internalFormat,Ie,ne,me.colorSpace,C.isXRRenderTarget===!0),He=et(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,He,pe,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,z.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),de(z.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),se(t.TEXTURE_CUBE_MAP,y);for(let ue=0;ue<6;ue++)if(y.mipmaps&&y.mipmaps.length>0)for(let me=0;me<y.mipmaps.length;me++)te(z.__webglFramebuffer[ue][me],C,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,me);else te(z.__webglFramebuffer[ue],C,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);p(y)&&c(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let ue=0,me=J.length;ue<me;ue++){const Ie=J[ue],ne=i.get(Ie);n.bindTexture(t.TEXTURE_2D,ne.__webglTexture),se(t.TEXTURE_2D,Ie),te(z.__webglFramebuffer,C,Ie,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),p(Ie)&&c(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ue=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,K.__webglTexture),se(ue,y),y.mipmaps&&y.mipmaps.length>0)for(let me=0;me<y.mipmaps.length;me++)te(z.__webglFramebuffer[me],C,y,t.COLOR_ATTACHMENT0,ue,me);else te(z.__webglFramebuffer,C,y,t.COLOR_ATTACHMENT0,ue,0);p(y)&&c(ue),n.unbindTexture()}C.depthBuffer&&Re(C)}function dt(C){const y=C.textures;for(let z=0,K=y.length;z<K;z++){const J=y[z];if(p(J)){const Q=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Te=i.get(J).__webglTexture;n.bindTexture(Q,Te),c(Q),n.unbindTexture()}}}const P=[],vt=[];function Ze(C){if(C.samples>0){if(Ee(C)===!1){const y=C.textures,z=C.width,K=C.height;let J=t.COLOR_BUFFER_BIT;const Q=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(C),ue=y.length>1;if(ue)for(let me=0;me<y.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let me=0;me<y.length;me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[me]);const Ie=i.get(y[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ie,0)}t.blitFramebuffer(0,0,z,K,0,0,z,K,J,t.NEAREST),l===!0&&(P.length=0,vt.length=0,P.push(t.COLOR_ATTACHMENT0+me),C.depthBuffer&&C.resolveDepthBuffer===!1&&(P.push(Q),vt.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,vt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,P))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let me=0;me<y.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,Te.__webglColorRenderbuffer[me]);const Ie=i.get(y[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,Ie,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const y=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function et(C){return Math.min(r.maxSamples,C.samples)}function Ee(C){const y=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function xt(C){const y=o.render.frame;f.get(C)!==y&&(f.set(C,y),C.update())}function Le(C,y){const z=C.colorSpace,K=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==lr&&z!==zi&&(Ke.getTransfer(z)===rt?(K!==Gn||J!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),y}function Ne(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=V,this.resetTextureUnits=b,this.setTexture2D=Y,this.setTexture2DArray=q,this.setTexture3D=G,this.setTextureCube=$,this.rebindTextures=Ue,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Ee}function lC(t,e){function n(i,r=zi){let s;const o=Ke.getTransfer(r);if(i===Ei)return t.UNSIGNED_BYTE;if(i===gh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===_h)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Ov)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Nv)return t.BYTE;if(i===Iv)return t.SHORT;if(i===Jo)return t.UNSIGNED_SHORT;if(i===mh)return t.INT;if(i===Ur)return t.UNSIGNED_INT;if(i===mi)return t.FLOAT;if(i===ua)return t.HALF_FLOAT;if(i===Fv)return t.ALPHA;if(i===kv)return t.RGB;if(i===Gn)return t.RGBA;if(i===zv)return t.LUMINANCE;if(i===Bv)return t.LUMINANCE_ALPHA;if(i===Us)return t.DEPTH_COMPONENT;if(i===Ys)return t.DEPTH_STENCIL;if(i===Hv)return t.RED;if(i===vh)return t.RED_INTEGER;if(i===Vv)return t.RG;if(i===xh)return t.RG_INTEGER;if(i===yh)return t.RGBA_INTEGER;if(i===Ml||i===El||i===Tl||i===wl)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ml)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===El)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ml)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===El)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Tl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Gf||i===Wf||i===Xf||i===jf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Gf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yf||i===qf||i===$f)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Yf||i===qf)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===$f)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Kf||i===Zf||i===Qf||i===Jf||i===ed||i===td||i===nd||i===id||i===rd||i===sd||i===od||i===ad||i===ld||i===ud)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Kf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Zf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ed)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===td)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===nd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===id)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===rd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===od)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ad)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ld)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ud)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Al||i===cd||i===fd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Al)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Gv||i===dd||i===hd||i===pd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Al)return s.COMPRESSED_RED_RGTC1_EXT;if(i===dd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===hd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===js?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class uC extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ts extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cC={type:"move"};class Ic{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ts,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ts,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ts,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),c=this._getHandJoint(u,x);p!==null&&(c.matrix.fromArray(p.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=p.radius),c.visible=p!==null}const f=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=f.position.distanceTo(d.position),m=.02,v=.005;u.inputState.pinching&&h>m+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ts;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const fC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dC=`
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

}`;class hC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Xt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ir({vertexShader:fC,fragmentShader:dC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Wn(new Lu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pC extends zr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,f=null,d=null,h=null,m=null,v=null;const x=new hC,p=n.getContextAttributes();let c=null,g=null;const _=[],S=[],R=new we;let A=null;const w=new En;w.layers.enable(1),w.viewport=new Dt;const L=new En;L.layers.enable(2),L.viewport=new Dt;const T=[w,L],M=new uC;M.layers.enable(1),M.layers.enable(2);let b=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let te=_[H];return te===void 0&&(te=new Ic,_[H]=te),te.getTargetRaySpace()},this.getControllerGrip=function(H){let te=_[H];return te===void 0&&(te=new Ic,_[H]=te),te.getGripSpace()},this.getHand=function(H){let te=_[H];return te===void 0&&(te=new Ic,_[H]=te),te.getHandSpace()};function B(H){const te=S.indexOf(H.inputSource);if(te===-1)return;const de=_[te];de!==void 0&&(de.update(H.inputSource,H.frame,u||o),de.dispatchEvent({type:H.type,data:H.inputSource}))}function Y(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",q);for(let H=0;H<_.length;H++){const te=S[H];te!==null&&(S[H]=null,_[H].disconnect(te))}b=null,V=null,x.reset(),e.setRenderTarget(c),m=null,h=null,d=null,r=null,g=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(H){u=H},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(c=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const te={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),g=new Nr(m.framebufferWidth,m.framebufferHeight,{format:Gn,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let te=null,de=null,ce=null;p.depth&&(ce=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=p.stencil?Ys:Us,de=p.stencil?js:Ur);const Re={colorFormat:n.RGBA8,depthFormat:ce,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(Re),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new Nr(h.textureWidth,h.textureHeight,{format:Gn,type:Ei,depthTexture:new n0(h.textureWidth,h.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ve.setContext(r),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(H){for(let te=0;te<H.removed.length;te++){const de=H.removed[te],ce=S.indexOf(de);ce>=0&&(S[ce]=null,_[ce].disconnect(de))}for(let te=0;te<H.added.length;te++){const de=H.added[te];let ce=S.indexOf(de);if(ce===-1){for(let Ue=0;Ue<_.length;Ue++)if(Ue>=S.length){S.push(de),ce=Ue;break}else if(S[Ue]===null){S[Ue]=de,ce=Ue;break}if(ce===-1)break}const Re=_[ce];Re&&Re.connect(de)}}const G=new O,$=new O;function D(H,te,de){G.setFromMatrixPosition(te.matrixWorld),$.setFromMatrixPosition(de.matrixWorld);const ce=G.distanceTo($),Re=te.projectionMatrix.elements,Ue=de.projectionMatrix.elements,Be=Re[14]/(Re[10]-1),dt=Re[14]/(Re[10]+1),P=(Re[9]+1)/Re[5],vt=(Re[9]-1)/Re[5],Ze=(Re[8]-1)/Re[0],et=(Ue[8]+1)/Ue[0],Ee=Be*Ze,xt=Be*et,Le=ce/(-Ze+et),Ne=Le*-Ze;if(te.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ne),H.translateZ(Le),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),Re[10]===-1)H.projectionMatrix.copy(te.projectionMatrix),H.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const C=Be+Le,y=dt+Le,z=Ee-Ne,K=xt+(ce-Ne),J=P*dt/y*C,Q=vt*dt/y*C;H.projectionMatrix.makePerspective(z,K,J,Q,C,y),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function X(H,te){te===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(te.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let te=H.near,de=H.far;x.texture!==null&&(x.depthNear>0&&(te=x.depthNear),x.depthFar>0&&(de=x.depthFar)),M.near=L.near=w.near=te,M.far=L.far=w.far=de,(b!==M.near||V!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),b=M.near,V=M.far);const ce=H.parent,Re=M.cameras;X(M,ce);for(let Ue=0;Ue<Re.length;Ue++)X(Re[Ue],ce);Re.length===2?D(M,w,L):M.projectionMatrix.copy(w.projectionMatrix),Z(H,M,ce)};function Z(H,te,de){de===null?H.matrix.copy(te.matrixWorld):(H.matrix.copy(de.matrixWorld),H.matrix.invert(),H.matrix.multiply(te.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(te.projectionMatrix),H.projectionMatrixInverse.copy(te.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=ea*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let se=null;function Me(H,te){if(f=te.getViewerPose(u||o),v=te,f!==null){const de=f.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let ce=!1;de.length!==M.cameras.length&&(M.cameras.length=0,ce=!0);for(let Ue=0;Ue<de.length;Ue++){const Be=de[Ue];let dt=null;if(m!==null)dt=m.getViewport(Be);else{const vt=d.getViewSubImage(h,Be);dt=vt.viewport,Ue===0&&(e.setRenderTargetTextures(g,vt.colorTexture,h.ignoreDepthValues?void 0:vt.depthStencilTexture),e.setRenderTarget(g))}let P=T[Ue];P===void 0&&(P=new En,P.layers.enable(Ue),P.viewport=new Dt,T[Ue]=P),P.matrix.fromArray(Be.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(Be.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(dt.x,dt.y,dt.width,dt.height),Ue===0&&(M.matrix.copy(P.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ce===!0&&M.cameras.push(P)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Ue=d.getDepthInformation(de[0]);Ue&&Ue.isValid&&Ue.texture&&x.init(e,Ue,r.renderState)}}for(let de=0;de<_.length;de++){const ce=S[de],Re=_[de];ce!==null&&Re!==void 0&&Re.update(ce,te,u||o)}se&&se(H,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),v=null}const Ve=new t0;Ve.setAnimationLoop(Me),this.setAnimationLoop=function(H){se=H},this.dispose=function(){}}}const mr=new Ti,mC=new ct;function gC(t,e){function n(p,c){p.matrixAutoUpdate===!0&&p.updateMatrix(),c.value.copy(p.matrix)}function i(p,c){c.color.getRGB(p.fogColor.value,Zv(t)),c.isFog?(p.fogNear.value=c.near,p.fogFar.value=c.far):c.isFogExp2&&(p.fogDensity.value=c.density)}function r(p,c,g,_,S){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(p,c):c.isMeshToonMaterial?(s(p,c),d(p,c)):c.isMeshPhongMaterial?(s(p,c),f(p,c)):c.isMeshStandardMaterial?(s(p,c),h(p,c),c.isMeshPhysicalMaterial&&m(p,c,S)):c.isMeshMatcapMaterial?(s(p,c),v(p,c)):c.isMeshDepthMaterial?s(p,c):c.isMeshDistanceMaterial?(s(p,c),x(p,c)):c.isMeshNormalMaterial?s(p,c):c.isLineBasicMaterial?(o(p,c),c.isLineDashedMaterial&&a(p,c)):c.isPointsMaterial?l(p,c,g,_):c.isSpriteMaterial?u(p,c):c.isShadowMaterial?(p.color.value.copy(c.color),p.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(p,c){p.opacity.value=c.opacity,c.color&&p.diffuse.value.copy(c.color),c.emissive&&p.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.bumpMap&&(p.bumpMap.value=c.bumpMap,n(c.bumpMap,p.bumpMapTransform),p.bumpScale.value=c.bumpScale,c.side===an&&(p.bumpScale.value*=-1)),c.normalMap&&(p.normalMap.value=c.normalMap,n(c.normalMap,p.normalMapTransform),p.normalScale.value.copy(c.normalScale),c.side===an&&p.normalScale.value.negate()),c.displacementMap&&(p.displacementMap.value=c.displacementMap,n(c.displacementMap,p.displacementMapTransform),p.displacementScale.value=c.displacementScale,p.displacementBias.value=c.displacementBias),c.emissiveMap&&(p.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,p.emissiveMapTransform)),c.specularMap&&(p.specularMap.value=c.specularMap,n(c.specularMap,p.specularMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);const g=e.get(c),_=g.envMap,S=g.envMapRotation;_&&(p.envMap.value=_,mr.copy(S),mr.x*=-1,mr.y*=-1,mr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),p.envMapRotation.value.setFromMatrix4(mC.makeRotationFromEuler(mr)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=c.reflectivity,p.ior.value=c.ior,p.refractionRatio.value=c.refractionRatio),c.lightMap&&(p.lightMap.value=c.lightMap,p.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,p.lightMapTransform)),c.aoMap&&(p.aoMap.value=c.aoMap,p.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,p.aoMapTransform))}function o(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform))}function a(p,c){p.dashSize.value=c.dashSize,p.totalSize.value=c.dashSize+c.gapSize,p.scale.value=c.scale}function l(p,c,g,_){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.size.value=c.size*g,p.scale.value=_*.5,c.map&&(p.map.value=c.map,n(c.map,p.uvTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function u(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.rotation.value=c.rotation,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function f(p,c){p.specular.value.copy(c.specular),p.shininess.value=Math.max(c.shininess,1e-4)}function d(p,c){c.gradientMap&&(p.gradientMap.value=c.gradientMap)}function h(p,c){p.metalness.value=c.metalness,c.metalnessMap&&(p.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,p.metalnessMapTransform)),p.roughness.value=c.roughness,c.roughnessMap&&(p.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,p.roughnessMapTransform)),c.envMap&&(p.envMapIntensity.value=c.envMapIntensity)}function m(p,c,g){p.ior.value=c.ior,c.sheen>0&&(p.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),p.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(p.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,p.sheenColorMapTransform)),c.sheenRoughnessMap&&(p.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,p.sheenRoughnessMapTransform))),c.clearcoat>0&&(p.clearcoat.value=c.clearcoat,p.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(p.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,p.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(p.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===an&&p.clearcoatNormalScale.value.negate())),c.dispersion>0&&(p.dispersion.value=c.dispersion),c.iridescence>0&&(p.iridescence.value=c.iridescence,p.iridescenceIOR.value=c.iridescenceIOR,p.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(p.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,p.iridescenceMapTransform)),c.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),c.transmission>0&&(p.transmission.value=c.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),c.transmissionMap&&(p.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,p.transmissionMapTransform)),p.thickness.value=c.thickness,c.thicknessMap&&(p.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=c.attenuationDistance,p.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(p.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(p.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=c.specularIntensity,p.specularColor.value.copy(c.specularColor),c.specularColorMap&&(p.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,p.specularColorMapTransform)),c.specularIntensityMap&&(p.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,c){c.matcap&&(p.matcap.value=c.matcap)}function x(p,c){const g=e.get(c).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function _C(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const S=_.program;i.uniformBlockBinding(g,S)}function u(g,_){let S=r[g.id];S===void 0&&(v(g),S=f(g),r[g.id]=S,g.addEventListener("dispose",p));const R=_.program;i.updateUBOMapping(g,R);const A=e.render.frame;s[g.id]!==A&&(h(g),s[g.id]=A)}function f(g){const _=d();g.__bindingPointIndex=_;const S=t.createBuffer(),R=g.__size,A=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,R,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,S),S}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const _=r[g.id],S=g.uniforms,R=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let A=0,w=S.length;A<w;A++){const L=Array.isArray(S[A])?S[A]:[S[A]];for(let T=0,M=L.length;T<M;T++){const b=L[T];if(m(b,A,T,R)===!0){const V=b.__offset,B=Array.isArray(b.value)?b.value:[b.value];let Y=0;for(let q=0;q<B.length;q++){const G=B[q],$=x(G);typeof G=="number"||typeof G=="boolean"?(b.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,V+Y,b.__data)):G.isMatrix3?(b.__data[0]=G.elements[0],b.__data[1]=G.elements[1],b.__data[2]=G.elements[2],b.__data[3]=0,b.__data[4]=G.elements[3],b.__data[5]=G.elements[4],b.__data[6]=G.elements[5],b.__data[7]=0,b.__data[8]=G.elements[6],b.__data[9]=G.elements[7],b.__data[10]=G.elements[8],b.__data[11]=0):(G.toArray(b.__data,Y),Y+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,b.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,_,S,R){const A=g.value,w=_+"_"+S;if(R[w]===void 0)return typeof A=="number"||typeof A=="boolean"?R[w]=A:R[w]=A.clone(),!0;{const L=R[w];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return R[w]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function v(g){const _=g.uniforms;let S=0;const R=16;for(let w=0,L=_.length;w<L;w++){const T=Array.isArray(_[w])?_[w]:[_[w]];for(let M=0,b=T.length;M<b;M++){const V=T[M],B=Array.isArray(V.value)?V.value:[V.value];for(let Y=0,q=B.length;Y<q;Y++){const G=B[Y],$=x(G),D=S%R,X=D%$.boundary,Z=D+X;S+=X,Z!==0&&R-Z<$.storage&&(S+=R-Z),V.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=S,S+=$.storage}}}const A=S%R;return A>0&&(S+=R-A),g.__size=S,g.__cache={},this}function x(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function p(g){const _=g.target;_.removeEventListener("dispose",p);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function c(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}class vC{constructor(e={}){const{canvas:n=aE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const m=new Uint32Array(4),v=new Int32Array(4);let x=null,p=null;const c=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qn,this.toneMapping=Ji,this.toneMappingExposure=1;const _=this;let S=!1,R=0,A=0,w=null,L=-1,T=null;const M=new Dt,b=new Dt;let V=null;const B=new Xe(0);let Y=0,q=n.width,G=n.height,$=1,D=null,X=null;const Z=new Dt(0,0,q,G),se=new Dt(0,0,q,G);let Me=!1;const Ve=new e0;let H=!1,te=!1;const de=new ct,ce=new O,Re=new Dt,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function dt(){return w===null?$:1}let P=i;function vt(E,N){return n.getContext(E,N)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ph}`),n.addEventListener("webglcontextlost",W,!1),n.addEventListener("webglcontextrestored",j,!1),n.addEventListener("webglcontextcreationerror",oe,!1),P===null){const N="webgl2";if(P=vt(N,E),P===null)throw vt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ze,et,Ee,xt,Le,Ne,C,y,z,K,J,Q,Te,ue,me,Ie,ne,pe,He,be,ge,De,ke,at;function U(){Ze=new Tw(P),Ze.init(),De=new lC(P,Ze),et=new _w(P,Ze,e,De),Ee=new sC(P),xt=new Cw(P),Le=new XA,Ne=new aC(P,Ze,Ee,Le,et,De,xt),C=new xw(_),y=new Ew(_),z=new UE(P),ke=new mw(P,z),K=new ww(P,z,xt,ke),J=new Pw(P,K,z,xt),He=new Rw(P,et,Ne),Ie=new vw(Le),Q=new WA(_,C,y,Ze,et,ke,Ie),Te=new gC(_,Le),ue=new YA,me=new JA(Ze),pe=new pw(_,C,y,Ee,J,h,l),ne=new rC(_,J,et),at=new _C(P,xt,et,Ee),be=new gw(P,Ze,xt),ge=new Aw(P,Ze,xt),xt.programs=Q.programs,_.capabilities=et,_.extensions=Ze,_.properties=Le,_.renderLists=ue,_.shadowMap=ne,_.state=Ee,_.info=xt}U();const ie=new pC(_,P);this.xr=ie,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=Ze.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ze.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(q,G,!1))},this.getSize=function(E){return E.set(q,G)},this.setSize=function(E,N,F=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=E,G=N,n.width=Math.floor(E*$),n.height=Math.floor(N*$),F===!0&&(n.style.width=E+"px",n.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(q*$,G*$).floor()},this.setDrawingBufferSize=function(E,N,F){q=E,G=N,$=F,n.width=Math.floor(E*F),n.height=Math.floor(N*F),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(M)},this.getViewport=function(E){return E.copy(Z)},this.setViewport=function(E,N,F,k){E.isVector4?Z.set(E.x,E.y,E.z,E.w):Z.set(E,N,F,k),Ee.viewport(M.copy(Z).multiplyScalar($).round())},this.getScissor=function(E){return E.copy(se)},this.setScissor=function(E,N,F,k){E.isVector4?se.set(E.x,E.y,E.z,E.w):se.set(E,N,F,k),Ee.scissor(b.copy(se).multiplyScalar($).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(E){Ee.setScissorTest(Me=E)},this.setOpaqueSort=function(E){D=E},this.setTransparentSort=function(E){X=E},this.getClearColor=function(E){return E.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(E=!0,N=!0,F=!0){let k=0;if(E){let I=!1;if(w!==null){const re=w.texture.format;I=re===yh||re===xh||re===vh}if(I){const re=w.texture.type,fe=re===Ei||re===Ur||re===Jo||re===js||re===gh||re===_h,_e=pe.getClearColor(),ve=pe.getClearAlpha(),Ce=_e.r,Pe=_e.g,ye=_e.b;fe?(m[0]=Ce,m[1]=Pe,m[2]=ye,m[3]=ve,P.clearBufferuiv(P.COLOR,0,m)):(v[0]=Ce,v[1]=Pe,v[2]=ye,v[3]=ve,P.clearBufferiv(P.COLOR,0,v))}else k|=P.COLOR_BUFFER_BIT}N&&(k|=P.DEPTH_BUFFER_BIT),F&&(k|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",W,!1),n.removeEventListener("webglcontextrestored",j,!1),n.removeEventListener("webglcontextcreationerror",oe,!1),ue.dispose(),me.dispose(),Le.dispose(),C.dispose(),y.dispose(),J.dispose(),ke.dispose(),at.dispose(),Q.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",$n),ie.removeEventListener("sessionend",Ph),ur.stop()};function W(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=xt.autoReset,N=ne.enabled,F=ne.autoUpdate,k=ne.needsUpdate,I=ne.type;U(),xt.autoReset=E,ne.enabled=N,ne.autoUpdate=F,ne.needsUpdate=k,ne.type=I}function oe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ae(E){const N=E.target;N.removeEventListener("dispose",Ae),Ge(N)}function Ge(E){yt(E),Le.remove(E)}function yt(E){const N=Le.get(E).programs;N!==void 0&&(N.forEach(function(F){Q.releaseProgram(F)}),E.isShaderMaterial&&Q.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,F,k,I,re){N===null&&(N=Ue);const fe=I.isMesh&&I.matrixWorld.determinant()<0,_e=h0(E,N,F,k,I);Ee.setMaterial(k,fe);let ve=F.index,Ce=1;if(k.wireframe===!0){if(ve=K.getWireframeAttribute(F),ve===void 0)return;Ce=2}const Pe=F.drawRange,ye=F.attributes.position;let Ye=Pe.start*Ce,ht=(Pe.start+Pe.count)*Ce;re!==null&&(Ye=Math.max(Ye,re.start*Ce),ht=Math.min(ht,(re.start+re.count)*Ce)),ve!==null?(Ye=Math.max(Ye,0),ht=Math.min(ht,ve.count)):ye!=null&&(Ye=Math.max(Ye,0),ht=Math.min(ht,ye.count));const pt=ht-Ye;if(pt<0||pt===1/0)return;ke.setup(I,k,_e,F,ve);let ln,qe=be;if(ve!==null&&(ln=z.get(ve),qe=ge,qe.setIndex(ln)),I.isMesh)k.wireframe===!0?(Ee.setLineWidth(k.wireframeLinewidth*dt()),qe.setMode(P.LINES)):qe.setMode(P.TRIANGLES);else if(I.isLine){let Se=k.linewidth;Se===void 0&&(Se=1),Ee.setLineWidth(Se*dt()),I.isLineSegments?qe.setMode(P.LINES):I.isLineLoop?qe.setMode(P.LINE_LOOP):qe.setMode(P.LINE_STRIP)}else I.isPoints?qe.setMode(P.POINTS):I.isSprite&&qe.setMode(P.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)qe.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))qe.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Se=I._multiDrawStarts,It=I._multiDrawCounts,$e=I._multiDrawCount,Ln=ve?z.get(ve).bytesPerElement:1,Hr=Le.get(k).currentProgram.getUniforms();for(let un=0;un<$e;un++)Hr.setValue(P,"_gl_DrawID",un),qe.render(Se[un]/Ln,It[un])}else if(I.isInstancedMesh)qe.renderInstances(Ye,pt,I.count);else if(F.isInstancedBufferGeometry){const Se=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,It=Math.min(F.instanceCount,Se);qe.renderInstances(Ye,pt,It)}else qe.render(Ye,pt)};function Nt(E,N,F){E.transparent===!0&&E.side===di&&E.forceSinglePass===!1?(E.side=an,E.needsUpdate=!0,ma(E,N,F),E.side=nr,E.needsUpdate=!0,ma(E,N,F),E.side=di):ma(E,N,F)}this.compile=function(E,N,F=null){F===null&&(F=E),p=me.get(F),p.init(N),g.push(p),F.traverseVisible(function(I){I.isLight&&I.layers.test(N.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),E!==F&&E.traverseVisible(function(I){I.isLight&&I.layers.test(N.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights();const k=new Set;return E.traverse(function(I){const re=I.material;if(re)if(Array.isArray(re))for(let fe=0;fe<re.length;fe++){const _e=re[fe];Nt(_e,F,I),k.add(_e)}else Nt(re,F,I),k.add(re)}),g.pop(),p=null,k},this.compileAsync=function(E,N,F=null){const k=this.compile(E,N,F);return new Promise(I=>{function re(){if(k.forEach(function(fe){Le.get(fe).currentProgram.isReady()&&k.delete(fe)}),k.size===0){I(E);return}setTimeout(re,10)}Ze.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let je=null;function ii(E){je&&je(E)}function $n(){ur.stop()}function Ph(){ur.start()}const ur=new t0;ur.setAnimationLoop(ii),typeof self<"u"&&ur.setContext(self),this.setAnimationLoop=function(E){je=E,ie.setAnimationLoop(E),E===null?ur.stop():ur.start()},ie.addEventListener("sessionstart",$n),ie.addEventListener("sessionend",Ph),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(N),N=ie.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,N,w),p=me.get(E,g.length),p.init(N),g.push(p),de.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ve.setFromProjectionMatrix(de),te=this.localClippingEnabled,H=Ie.init(this.clippingPlanes,te),x=ue.get(E,c.length),x.init(),c.push(x),ie.enabled===!0&&ie.isPresenting===!0){const re=_.xr.getDepthSensingMesh();re!==null&&Uu(re,N,-1/0,_.sortObjects)}Uu(E,N,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(D,X),Be=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Be&&pe.addToRenderList(x,E),this.info.render.frame++,H===!0&&Ie.beginShadows();const F=p.state.shadowsArray;ne.render(F,E,N),H===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=x.opaque,I=x.transmissive;if(p.setupLights(),N.isArrayCamera){const re=N.cameras;if(I.length>0)for(let fe=0,_e=re.length;fe<_e;fe++){const ve=re[fe];Lh(k,I,E,ve)}Be&&pe.render(E);for(let fe=0,_e=re.length;fe<_e;fe++){const ve=re[fe];bh(x,E,ve,ve.viewport)}}else I.length>0&&Lh(k,I,E,N),Be&&pe.render(E),bh(x,E,N);w!==null&&(Ne.updateMultisampleRenderTarget(w),Ne.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(_,E,N),ke.resetDefaultState(),L=-1,T=null,g.pop(),g.length>0?(p=g[g.length-1],H===!0&&Ie.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,c.pop(),c.length>0?x=c[c.length-1]:x=null};function Uu(E,N,F,k){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)F=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ve.intersectsSprite(E)){k&&Re.setFromMatrixPosition(E.matrixWorld).applyMatrix4(de);const fe=J.update(E),_e=E.material;_e.visible&&x.push(E,fe,_e,F,Re.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ve.intersectsObject(E))){const fe=J.update(E),_e=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Re.copy(E.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Re.copy(fe.boundingSphere.center)),Re.applyMatrix4(E.matrixWorld).applyMatrix4(de)),Array.isArray(_e)){const ve=fe.groups;for(let Ce=0,Pe=ve.length;Ce<Pe;Ce++){const ye=ve[Ce],Ye=_e[ye.materialIndex];Ye&&Ye.visible&&x.push(E,fe,Ye,F,Re.z,ye)}}else _e.visible&&x.push(E,fe,_e,F,Re.z,null)}}const re=E.children;for(let fe=0,_e=re.length;fe<_e;fe++)Uu(re[fe],N,F,k)}function bh(E,N,F,k){const I=E.opaque,re=E.transmissive,fe=E.transparent;p.setupLightsView(F),H===!0&&Ie.setGlobalState(_.clippingPlanes,F),k&&Ee.viewport(M.copy(k)),I.length>0&&pa(I,N,F),re.length>0&&pa(re,N,F),fe.length>0&&pa(fe,N,F),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Lh(E,N,F,k){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Nr(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?ua:Ei,minFilter:wr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const re=p.state.transmissionRenderTarget[k.id],fe=k.viewport||M;re.setSize(fe.z,fe.w);const _e=_.getRenderTarget();_.setRenderTarget(re),_.getClearColor(B),Y=_.getClearAlpha(),Y<1&&_.setClearColor(16777215,.5),_.clear(),Be&&pe.render(F);const ve=_.toneMapping;_.toneMapping=Ji;const Ce=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),H===!0&&Ie.setGlobalState(_.clippingPlanes,k),pa(E,F,k),Ne.updateMultisampleRenderTarget(re),Ne.updateRenderTargetMipmap(re),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let ye=0,Ye=N.length;ye<Ye;ye++){const ht=N[ye],pt=ht.object,ln=ht.geometry,qe=ht.material,Se=ht.group;if(qe.side===di&&pt.layers.test(k.layers)){const It=qe.side;qe.side=an,qe.needsUpdate=!0,Dh(pt,F,k,ln,qe,Se),qe.side=It,qe.needsUpdate=!0,Pe=!0}}Pe===!0&&(Ne.updateMultisampleRenderTarget(re),Ne.updateRenderTargetMipmap(re))}_.setRenderTarget(_e),_.setClearColor(B,Y),Ce!==void 0&&(k.viewport=Ce),_.toneMapping=ve}function pa(E,N,F){const k=N.isScene===!0?N.overrideMaterial:null;for(let I=0,re=E.length;I<re;I++){const fe=E[I],_e=fe.object,ve=fe.geometry,Ce=k===null?fe.material:k,Pe=fe.group;_e.layers.test(F.layers)&&Dh(_e,N,F,ve,Ce,Pe)}}function Dh(E,N,F,k,I,re){E.onBeforeRender(_,N,F,k,I,re),E.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),I.onBeforeRender(_,N,F,k,E,re),I.transparent===!0&&I.side===di&&I.forceSinglePass===!1?(I.side=an,I.needsUpdate=!0,_.renderBufferDirect(F,N,k,I,E,re),I.side=nr,I.needsUpdate=!0,_.renderBufferDirect(F,N,k,I,E,re),I.side=di):_.renderBufferDirect(F,N,k,I,E,re),E.onAfterRender(_,N,F,k,I,re)}function ma(E,N,F){N.isScene!==!0&&(N=Ue);const k=Le.get(E),I=p.state.lights,re=p.state.shadowsArray,fe=I.state.version,_e=Q.getParameters(E,I.state,re,N,F),ve=Q.getProgramCacheKey(_e);let Ce=k.programs;k.environment=E.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(E.isMeshStandardMaterial?y:C).get(E.envMap||k.environment),k.envMapRotation=k.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Ce===void 0&&(E.addEventListener("dispose",Ae),Ce=new Map,k.programs=Ce);let Pe=Ce.get(ve);if(Pe!==void 0){if(k.currentProgram===Pe&&k.lightsStateVersion===fe)return Nh(E,_e),Pe}else _e.uniforms=Q.getUniforms(E),E.onBeforeCompile(_e,_),Pe=Q.acquireProgram(_e,ve),Ce.set(ve,Pe),k.uniforms=_e.uniforms;const ye=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ye.clippingPlanes=Ie.uniform),Nh(E,_e),k.needsLights=m0(E),k.lightsStateVersion=fe,k.needsLights&&(ye.ambientLightColor.value=I.state.ambient,ye.lightProbe.value=I.state.probe,ye.directionalLights.value=I.state.directional,ye.directionalLightShadows.value=I.state.directionalShadow,ye.spotLights.value=I.state.spot,ye.spotLightShadows.value=I.state.spotShadow,ye.rectAreaLights.value=I.state.rectArea,ye.ltc_1.value=I.state.rectAreaLTC1,ye.ltc_2.value=I.state.rectAreaLTC2,ye.pointLights.value=I.state.point,ye.pointLightShadows.value=I.state.pointShadow,ye.hemisphereLights.value=I.state.hemi,ye.directionalShadowMap.value=I.state.directionalShadowMap,ye.directionalShadowMatrix.value=I.state.directionalShadowMatrix,ye.spotShadowMap.value=I.state.spotShadowMap,ye.spotLightMatrix.value=I.state.spotLightMatrix,ye.spotLightMap.value=I.state.spotLightMap,ye.pointShadowMap.value=I.state.pointShadowMap,ye.pointShadowMatrix.value=I.state.pointShadowMatrix),k.currentProgram=Pe,k.uniformsList=null,Pe}function Uh(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=Cl.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Nh(E,N){const F=Le.get(E);F.outputColorSpace=N.outputColorSpace,F.batching=N.batching,F.batchingColor=N.batchingColor,F.instancing=N.instancing,F.instancingColor=N.instancingColor,F.instancingMorph=N.instancingMorph,F.skinning=N.skinning,F.morphTargets=N.morphTargets,F.morphNormals=N.morphNormals,F.morphColors=N.morphColors,F.morphTargetsCount=N.morphTargetsCount,F.numClippingPlanes=N.numClippingPlanes,F.numIntersection=N.numClipIntersection,F.vertexAlphas=N.vertexAlphas,F.vertexTangents=N.vertexTangents,F.toneMapping=N.toneMapping}function h0(E,N,F,k,I){N.isScene!==!0&&(N=Ue),Ne.resetTextureUnits();const re=N.fog,fe=k.isMeshStandardMaterial?N.environment:null,_e=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:lr,ve=(k.isMeshStandardMaterial?y:C).get(k.envMap||fe),Ce=k.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Pe=!!F.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),ye=!!F.morphAttributes.position,Ye=!!F.morphAttributes.normal,ht=!!F.morphAttributes.color;let pt=Ji;k.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(pt=_.toneMapping);const ln=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,qe=ln!==void 0?ln.length:0,Se=Le.get(k),It=p.state.lights;if(H===!0&&(te===!0||E!==T)){const xn=E===T&&k.id===L;Ie.setState(k,E,xn)}let $e=!1;k.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==It.state.version||Se.outputColorSpace!==_e||I.isBatchedMesh&&Se.batching===!1||!I.isBatchedMesh&&Se.batching===!0||I.isBatchedMesh&&Se.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Se.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Se.instancing===!1||!I.isInstancedMesh&&Se.instancing===!0||I.isSkinnedMesh&&Se.skinning===!1||!I.isSkinnedMesh&&Se.skinning===!0||I.isInstancedMesh&&Se.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Se.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Se.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Se.instancingMorph===!1&&I.morphTexture!==null||Se.envMap!==ve||k.fog===!0&&Se.fog!==re||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Ie.numPlanes||Se.numIntersection!==Ie.numIntersection)||Se.vertexAlphas!==Ce||Se.vertexTangents!==Pe||Se.morphTargets!==ye||Se.morphNormals!==Ye||Se.morphColors!==ht||Se.toneMapping!==pt||Se.morphTargetsCount!==qe)&&($e=!0):($e=!0,Se.__version=k.version);let Ln=Se.currentProgram;$e===!0&&(Ln=ma(k,N,I));let Hr=!1,un=!1,Nu=!1;const St=Ln.getUniforms(),Ai=Se.uniforms;if(Ee.useProgram(Ln.program)&&(Hr=!0,un=!0,Nu=!0),k.id!==L&&(L=k.id,un=!0),Hr||T!==E){St.setValue(P,"projectionMatrix",E.projectionMatrix),St.setValue(P,"viewMatrix",E.matrixWorldInverse);const xn=St.map.cameraPosition;xn!==void 0&&xn.setValue(P,ce.setFromMatrixPosition(E.matrixWorld)),et.logarithmicDepthBuffer&&St.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&St.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),T!==E&&(T=E,un=!0,Nu=!0)}if(I.isSkinnedMesh){St.setOptional(P,I,"bindMatrix"),St.setOptional(P,I,"bindMatrixInverse");const xn=I.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),St.setValue(P,"boneTexture",xn.boneTexture,Ne))}I.isBatchedMesh&&(St.setOptional(P,I,"batchingTexture"),St.setValue(P,"batchingTexture",I._matricesTexture,Ne),St.setOptional(P,I,"batchingIdTexture"),St.setValue(P,"batchingIdTexture",I._indirectTexture,Ne),St.setOptional(P,I,"batchingColorTexture"),I._colorsTexture!==null&&St.setValue(P,"batchingColorTexture",I._colorsTexture,Ne));const Iu=F.morphAttributes;if((Iu.position!==void 0||Iu.normal!==void 0||Iu.color!==void 0)&&He.update(I,F,Ln),(un||Se.receiveShadow!==I.receiveShadow)&&(Se.receiveShadow=I.receiveShadow,St.setValue(P,"receiveShadow",I.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Ai.envMap.value=ve,Ai.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&N.environment!==null&&(Ai.envMapIntensity.value=N.environmentIntensity),un&&(St.setValue(P,"toneMappingExposure",_.toneMappingExposure),Se.needsLights&&p0(Ai,Nu),re&&k.fog===!0&&Te.refreshFogUniforms(Ai,re),Te.refreshMaterialUniforms(Ai,k,$,G,p.state.transmissionRenderTarget[E.id]),Cl.upload(P,Uh(Se),Ai,Ne)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Cl.upload(P,Uh(Se),Ai,Ne),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&St.setValue(P,"center",I.center),St.setValue(P,"modelViewMatrix",I.modelViewMatrix),St.setValue(P,"normalMatrix",I.normalMatrix),St.setValue(P,"modelMatrix",I.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const xn=k.uniformsGroups;for(let Ou=0,g0=xn.length;Ou<g0;Ou++){const Ih=xn[Ou];at.update(Ih,Ln),at.bind(Ih,Ln)}}return Ln}function p0(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function m0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,N,F){Le.get(E.texture).__webglTexture=N,Le.get(E.depthTexture).__webglTexture=F;const k=Le.get(E);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=F===void 0,k.__autoAllocateDepthBuffer||Ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const F=Le.get(E);F.__webglFramebuffer=N,F.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,F=0){w=E,R=N,A=F;let k=!0,I=null,re=!1,fe=!1;if(E){const ve=Le.get(E);if(ve.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(P.FRAMEBUFFER,null),k=!1;else if(ve.__webglFramebuffer===void 0)Ne.setupRenderTarget(E);else if(ve.__hasExternalTextures)Ne.rebindTextures(E,Le.get(E.texture).__webglTexture,Le.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ye=E.depthTexture;if(ve.__boundDepthTexture!==ye){if(ye!==null&&Le.has(ye)&&(E.width!==ye.image.width||E.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(E)}}const Ce=E.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(fe=!0);const Pe=Le.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Pe[N])?I=Pe[N][F]:I=Pe[N],re=!0):E.samples>0&&Ne.useMultisampledRTT(E)===!1?I=Le.get(E).__webglMultisampledFramebuffer:Array.isArray(Pe)?I=Pe[F]:I=Pe,M.copy(E.viewport),b.copy(E.scissor),V=E.scissorTest}else M.copy(Z).multiplyScalar($).floor(),b.copy(se).multiplyScalar($).floor(),V=Me;if(Ee.bindFramebuffer(P.FRAMEBUFFER,I)&&k&&Ee.drawBuffers(E,I),Ee.viewport(M),Ee.scissor(b),Ee.setScissorTest(V),re){const ve=Le.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,ve.__webglTexture,F)}else if(fe){const ve=Le.get(E.texture),Ce=N||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,ve.__webglTexture,F||0,Ce)}L=-1},this.readRenderTargetPixels=function(E,N,F,k,I,re,fe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(_e=_e[fe]),_e){Ee.bindFramebuffer(P.FRAMEBUFFER,_e);try{const ve=E.texture,Ce=ve.format,Pe=ve.type;if(!et.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-k&&F>=0&&F<=E.height-I&&P.readPixels(N,F,k,I,De.convert(Ce),De.convert(Pe),re)}finally{const ve=w!==null?Le.get(w).__webglFramebuffer:null;Ee.bindFramebuffer(P.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(E,N,F,k,I,re,fe){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(_e=_e[fe]),_e){Ee.bindFramebuffer(P.FRAMEBUFFER,_e);try{const ve=E.texture,Ce=ve.format,Pe=ve.type;if(!et.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-k&&F>=0&&F<=E.height-I){const ye=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ye),P.bufferData(P.PIXEL_PACK_BUFFER,re.byteLength,P.STREAM_READ),P.readPixels(N,F,k,I,De.convert(Ce),De.convert(Pe),0),P.flush();const Ye=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);await lE(P,Ye,4);try{P.bindBuffer(P.PIXEL_PACK_BUFFER,ye),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,re)}finally{P.deleteBuffer(ye),P.deleteSync(Ye)}return re}}finally{const ve=w!==null?Le.get(w).__webglFramebuffer:null;Ee.bindFramebuffer(P.FRAMEBUFFER,ve)}}},this.copyFramebufferToTexture=function(E,N=null,F=0){E.isTexture!==!0&&(Ns("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);const k=Math.pow(2,-F),I=Math.floor(E.image.width*k),re=Math.floor(E.image.height*k),fe=N!==null?N.x:0,_e=N!==null?N.y:0;Ne.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,F,0,0,fe,_e,I,re),Ee.unbindTexture()},this.copyTextureToTexture=function(E,N,F=null,k=null,I=0){E.isTexture!==!0&&(Ns("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1],N=arguments[2],I=arguments[3]||0,F=null);let re,fe,_e,ve,Ce,Pe;F!==null?(re=F.max.x-F.min.x,fe=F.max.y-F.min.y,_e=F.min.x,ve=F.min.y):(re=E.image.width,fe=E.image.height,_e=0,ve=0),k!==null?(Ce=k.x,Pe=k.y):(Ce=0,Pe=0);const ye=De.convert(N.format),Ye=De.convert(N.type);Ne.setTexture2D(N,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const ht=P.getParameter(P.UNPACK_ROW_LENGTH),pt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ln=P.getParameter(P.UNPACK_SKIP_PIXELS),qe=P.getParameter(P.UNPACK_SKIP_ROWS),Se=P.getParameter(P.UNPACK_SKIP_IMAGES),It=E.isCompressedTexture?E.mipmaps[I]:E.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,It.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,It.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,_e),P.pixelStorei(P.UNPACK_SKIP_ROWS,ve),E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,I,Ce,Pe,re,fe,ye,Ye,It.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,I,Ce,Pe,It.width,It.height,ye,It.data):P.texSubImage2D(P.TEXTURE_2D,I,Ce,Pe,re,fe,ye,Ye,It),P.pixelStorei(P.UNPACK_ROW_LENGTH,ht),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,pt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ln),P.pixelStorei(P.UNPACK_SKIP_ROWS,qe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Se),I===0&&N.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(E,N,F=null,k=null,I=0){E.isTexture!==!0&&(Ns("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,k=arguments[1]||null,E=arguments[2],N=arguments[3],I=arguments[4]||0);let re,fe,_e,ve,Ce,Pe,ye,Ye,ht;const pt=E.isCompressedTexture?E.mipmaps[I]:E.image;F!==null?(re=F.max.x-F.min.x,fe=F.max.y-F.min.y,_e=F.max.z-F.min.z,ve=F.min.x,Ce=F.min.y,Pe=F.min.z):(re=pt.width,fe=pt.height,_e=pt.depth,ve=0,Ce=0,Pe=0),k!==null?(ye=k.x,Ye=k.y,ht=k.z):(ye=0,Ye=0,ht=0);const ln=De.convert(N.format),qe=De.convert(N.type);let Se;if(N.isData3DTexture)Ne.setTexture3D(N,0),Se=P.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)Ne.setTexture2DArray(N,0),Se=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const It=P.getParameter(P.UNPACK_ROW_LENGTH),$e=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ln=P.getParameter(P.UNPACK_SKIP_PIXELS),Hr=P.getParameter(P.UNPACK_SKIP_ROWS),un=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,pt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,pt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ve),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ce),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Pe),E.isDataTexture||E.isData3DTexture?P.texSubImage3D(Se,I,ye,Ye,ht,re,fe,_e,ln,qe,pt.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(Se,I,ye,Ye,ht,re,fe,_e,ln,pt.data):P.texSubImage3D(Se,I,ye,Ye,ht,re,fe,_e,ln,qe,pt),P.pixelStorei(P.UNPACK_ROW_LENGTH,It),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,$e),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ln),P.pixelStorei(P.UNPACK_SKIP_ROWS,Hr),P.pixelStorei(P.UNPACK_SKIP_IMAGES,un),I===0&&N.generateMipmaps&&P.generateMipmap(Se),Ee.unbindTexture()},this.initRenderTarget=function(E){Le.get(E).__webglFramebuffer===void 0&&Ne.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ne.setTextureCube(E,0):E.isData3DTexture?Ne.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ne.setTexture2DArray(E,0):Ne.setTexture2D(E,0),Ee.unbindTexture()},this.resetState=function(){R=0,A=0,w=null,Ee.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Sh?"display-p3":"srgb",n.unpackColorSpace=Ke.workingColorSpace===bu?"display-p3":"srgb"}}class xC extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class yC{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=md,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=vi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ns("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qt=new O;class au{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix4(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)qt.fromBufferAttribute(this,n),qt.applyNormalMatrix(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)qt.fromBufferAttribute(this,n),qt.transformDirection(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=Hn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Qe(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Hn(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Hn(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Hn(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Hn(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=Qe(n,this.array),i=Qe(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array),s=Qe(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Yn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new au(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class a0 extends Br{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let os;const po=new O,as=new O,ls=new O,us=new we,mo=new we,l0=new ct,tl=new O,go=new O,nl=new O,Ym=new we,Oc=new we,qm=new we;class SC extends jt{constructor(e=new a0){if(super(),this.isSprite=!0,this.type="Sprite",os===void 0){os=new vn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new yC(n,5);os.setIndex([0,1,2,0,2,3]),os.setAttribute("position",new au(i,3,0,!1)),os.setAttribute("uv",new au(i,2,3,!1))}this.geometry=os,this.material=e,this.center=new we(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),as.setFromMatrixScale(this.matrixWorld),l0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ls.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&as.multiplyScalar(-ls.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;il(tl.set(-.5,-.5,0),ls,o,as,r,s),il(go.set(.5,-.5,0),ls,o,as,r,s),il(nl.set(.5,.5,0),ls,o,as,r,s),Ym.set(0,0),Oc.set(1,0),qm.set(1,1);let a=e.ray.intersectTriangle(tl,go,nl,!1,po);if(a===null&&(il(go.set(-.5,.5,0),ls,o,as,r,s),Oc.set(0,1),a=e.ray.intersectTriangle(tl,nl,go,!1,po),a===null))return;const l=e.ray.origin.distanceTo(po);l<e.near||l>e.far||n.push({distance:l,point:po.clone(),uv:Vn.getInterpolation(po,tl,go,nl,Ym,Oc,qm,new we),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function il(t,e,n,i,r,s){us.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(mo.x=s*us.x-r*us.y,mo.y=r*us.x+s*us.y):mo.copy(us),t.copy(e),t.x+=mo.x,t.y+=mo.y,t.applyMatrix4(l0)}class u0 extends Br{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const lu=new O,uu=new O,$m=new ct,_o=new da,rl=new fa,Fc=new O,Km=new O;class MC extends jt{constructor(e=new vn,n=new u0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)lu.fromBufferAttribute(n,r-1),uu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=lu.distanceTo(uu);e.setAttribute("lineDistance",new Rn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rl.copy(i.boundingSphere),rl.applyMatrix4(r),rl.radius+=s,e.ray.intersectsSphere(rl)===!1)return;$m.copy(r).invert(),_o.copy(e.ray).applyMatrix4($m);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,f=i.index,h=i.attributes.position;if(f!==null){const m=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let x=m,p=v-1;x<p;x+=u){const c=f.getX(x),g=f.getX(x+1),_=sl(this,e,_o,l,c,g);_&&n.push(_)}if(this.isLineLoop){const x=f.getX(v-1),p=f.getX(m),c=sl(this,e,_o,l,x,p);c&&n.push(c)}}else{const m=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let x=m,p=v-1;x<p;x+=u){const c=sl(this,e,_o,l,x,x+1);c&&n.push(c)}if(this.isLineLoop){const x=sl(this,e,_o,l,v-1,m);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function sl(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(lu.fromBufferAttribute(o,r),uu.fromBufferAttribute(o,s),n.distanceSqToSegment(lu,uu,Fc,Km)>i)return;Fc.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Fc);if(!(l<e.near||l>e.far))return{distance:l,point:Km.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}class EC extends MC{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class c0 extends Br{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zm=new ct,vd=new da,ol=new fa,al=new O;class TC extends jt{constructor(e=new vn,n=new c0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ol.copy(i.boundingSphere),ol.applyMatrix4(r),ol.radius+=s,e.ray.intersectsSphere(ol)===!1)return;Zm.copy(r).invert(),vd.copy(e.ray).applyMatrix4(Zm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let v=h,x=m;v<x;v++){const p=u.getX(v);al.fromBufferAttribute(d,p),Qm(al,p,l,r,e,n,this)}}else{const h=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let v=h,x=m;v<x;v++)al.fromBufferAttribute(d,v),Qm(al,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Qm(t,e,n,i,r,s,o){const a=vd.distanceSqToPoint(t);if(a<n){const l=new O;vd.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class wC extends Xt{constructor(e,n,i,r,s,o,a,l,u){super(e,n,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ah extends vn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const f=[],d=new O,h=new O,m=[],v=[],x=[],p=[];for(let c=0;c<=i;c++){const g=[],_=c/i;let S=0;c===0&&o===0?S=.5/n:c===i&&l===Math.PI&&(S=-.5/n);for(let R=0;R<=n;R++){const A=R/n;d.x=-e*Math.cos(r+A*s)*Math.sin(o+_*a),d.y=e*Math.cos(o+_*a),d.z=e*Math.sin(r+A*s)*Math.sin(o+_*a),v.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),p.push(A+S,1-_),g.push(u++)}f.push(g)}for(let c=0;c<i;c++)for(let g=0;g<n;g++){const _=f[c][g+1],S=f[c][g],R=f[c+1][g],A=f[c+1][g+1];(c!==0||o>0)&&m.push(_,S,A),(c!==i-1||l<Math.PI)&&m.push(S,R,A)}this.setIndex(m),this.setAttribute("position",new Rn(v,3)),this.setAttribute("normal",new Rn(x,3)),this.setAttribute("uv",new Rn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ah(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const Jm={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class AC{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(f){a++,s===!1&&r.onStart!==void 0&&r.onStart(f,o,a),s=!0},this.itemEnd=function(f){o++,r.onProgress!==void 0&&r.onProgress(f,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,d){return u.push(f,d),this},this.removeHandler=function(f){const d=u.indexOf(f);return d!==-1&&u.splice(d,2),this},this.getHandler=function(f){for(let d=0,h=u.length;d<h;d+=2){const m=u[d],v=u[d+1];if(m.global&&(m.lastIndex=0),m.test(f))return v}return null}}}const CC=new AC;class Ch{constructor(e){this.manager=e!==void 0?e:CC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ch.DEFAULT_MATERIAL_NAME="__DEFAULT";class RC extends Ch{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Jm.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=ta("img");function l(){f(),Jm.add(e,this),n&&n(this),s.manager.itemEnd(e)}function u(d){f(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class PC extends Ch{constructor(e){super(e)}load(e,n,i,r){const s=new Xt,o=new RC(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}const eg=new ct;class bC{constructor(e,n,i=0,r=1/0){this.ray=new da(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Eh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return eg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(eg),this}intersectObject(e,n=!0,i=[]){return xd(e,this,i,n),i.sort(tg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)xd(e[r],this,i,n);return i.sort(tg),i}}function tg(t,e){return t.distance-e.distance}function xd(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)xd(s[o],e,n,!0)}}class ng{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Wt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class LC extends zr{constructor(e,n){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ph}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ph);const ig={type:"change"},Rh={type:"start"},f0={type:"end"},ll=new da,rg=new Oi,DC=Math.cos(70*gd.DEG2RAD),Tt=new O,en=2*Math.PI,tt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},kc=1e-6;class UC extends LC{constructor(e,n=null){super(e,n),this.state=tt.NONE,this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ls.ROTATE,MIDDLE:Ls.DOLLY,RIGHT:Ls.PAN},this.touches={ONE:Ms.ROTATE,TWO:Ms.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new Ir,this._lastTargetPosition=new O,this._quat=new Ir().setFromUnitVectors(e.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ng,this._sphericalDelta=new ng,this._scale=1,this._panOffset=new O,this._rotateStart=new we,this._rotateEnd=new we,this._rotateDelta=new we,this._panStart=new we,this._panEnd=new we,this._panDelta=new we,this._dollyStart=new we,this._dollyEnd=new we,this._dollyDelta=new we,this._dollyDirection=new O,this._mouse=new we,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=IC.bind(this),this._onPointerDown=NC.bind(this),this._onPointerUp=OC.bind(this),this._onContextMenu=GC.bind(this),this._onMouseWheel=zC.bind(this),this._onKeyDown=BC.bind(this),this._onTouchStart=HC.bind(this),this._onTouchMove=VC.bind(this),this._onMouseDown=FC.bind(this),this._onMouseMove=kC.bind(this),this._interceptControlDown=WC.bind(this),this._interceptControlUp=XC.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ig),this.update(),this.state=tt.NONE}update(e=null){const n=this.object.position;Tt.copy(n).sub(this.target),Tt.applyQuaternion(this._quat),this._spherical.setFromVector3(Tt),this.autoRotate&&this.state===tt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=en:i>Math.PI&&(i-=en),r<-Math.PI?r+=en:r>Math.PI&&(r-=en),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Tt.setFromSpherical(this._spherical),Tt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Tt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Tt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new O(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const u=new O(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(a),this.object.updateMatrixWorld(),o=Tt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ll.origin.copy(this.object.position),ll.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ll.direction))<DC?this.object.lookAt(this.target):(rg.setFromNormalAndCoplanarPoint(this.object.up,this.target),ll.intersectPlane(rg,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>kc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>kc||this._lastTargetPosition.distanceToSquared(this.target)>kc?(this.dispatchEvent(ig),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?en/60*this.autoRotateSpeed*e:en/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Tt.setFromMatrixColumn(n,0),Tt.multiplyScalar(-e),this._panOffset.add(Tt)}_panUp(e,n){this.screenSpacePanning===!0?Tt.setFromMatrixColumn(n,1):(Tt.setFromMatrixColumn(n,0),Tt.crossVectors(this.object.up,Tt)),Tt.multiplyScalar(e),this._panOffset.add(Tt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Tt.copy(r).sub(this.target);let s=Tt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(en*this._rotateDelta.x/n.clientHeight),this._rotateUp(en*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(en*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-en*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(en*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-en*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(en*this._rotateDelta.x/n.clientHeight),this._rotateUp(en*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new we,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function NC(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function IC(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function OC(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(f0),this.state=tt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function FC(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ls.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=tt.DOLLY;break;case Ls.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=tt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=tt.ROTATE}break;case Ls.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=tt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=tt.PAN}break;default:this.state=tt.NONE}this.state!==tt.NONE&&this.dispatchEvent(Rh)}function kC(t){switch(this.state){case tt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case tt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case tt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function zC(t){this.enabled===!1||this.enableZoom===!1||this.state!==tt.NONE||(t.preventDefault(),this.dispatchEvent(Rh),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(f0))}function BC(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function HC(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Ms.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=tt.TOUCH_ROTATE;break;case Ms.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=tt.TOUCH_PAN;break;default:this.state=tt.NONE}break;case 2:switch(this.touches.TWO){case Ms.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=tt.TOUCH_DOLLY_PAN;break;case Ms.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=tt.TOUCH_DOLLY_ROTATE;break;default:this.state=tt.NONE}break;default:this.state=tt.NONE}this.state!==tt.NONE&&this.dispatchEvent(Rh)}function VC(t){switch(this._trackPointer(t),this.state){case tt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case tt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case tt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case tt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=tt.NONE}}function GC(t){this.enabled!==!1&&t.preventDefault()}function WC(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function XC(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class jC{constructor(e){Pt(this,"mesh");Pt(this,"orbitRadius");Pt(this,"name");Pt(this,"sprite");Pt(this,"size");Pt(this,"group");const{texture:n,size:i,position:r,orbitRadius:s,name:o,group:a}=e;this.size=i;const l=new Ah(i,32,32),u=new Th({map:n});this.mesh=new Wn(l,u),r&&r.x&&r.y&&r.z&&this.mesh.position.set(r.x,r.y,r.z),this.orbitRadius=s,this.name=o,this.group=a,o&&(this.createLabel(o),this.mesh.name=o)}createLabel(e){const n=document.createElement("canvas"),i=n.getContext("2d"),r=Math.max(this.size*16,256);if(n.width=r,n.height=r/2,!i)return;const s=Math.max(this.size*4,24);i.font=`${s}px Arial`,i.fillStyle="white",i.textAlign="center",i.fillText(e,n.width/2,n.height/2);const o=new wC(n);o.needsUpdate=!0;const a=new a0({map:o});this.sprite=new SC(a);const l=Math.max(this.size*1.5,10);this.sprite.scale.set(l,l*.5,1);const u=Math.max(this.size*1.2,5);this.sprite.position.set(this.mesh.position.x,this.mesh.position.y+u,this.mesh.position.z)}updatePosition(e){if(this.orbitRadius&&(this.mesh.position.x=Math.cos(e)*this.orbitRadius,this.mesh.position.z=Math.sin(e)*this.orbitRadius,this.sprite)){const n=Math.max(this.size*1.2,5);this.sprite.position.set(this.mesh.position.x,this.mesh.position.y+n,this.mesh.position.z)}}}const YC=(t,e)=>{const n=[];for(let a=0;a<=64;a++){const l=a/64*Math.PI*2,u=Math.cos(l)*t,f=Math.sin(l)*t;n.push(new O(u,0,f))}const r=new vn().setFromPoints(n),s=new u0({color:e=="NEO"?Math.random()*16777215:8947848});return{line:new EC(r,s)}},qC=()=>{const t=new vn,e=new c0({color:16777215,size:.5}),n=2e3,i=[];for(let s=0;s<n;s++){const o=(Math.random()-.5)*3e3,a=(Math.random()-.5)*3e3,l=(Math.random()-.5)*3e3;i.push(o,a,l)}return t.setAttribute("position",new Rn(i,3)),{mesh:new TC(t,e)}},On=10,Fn=10,sg=[{texture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDydjdQ1RL4q2aBOVkHfCgIMpEjb0IFBiiUg&s",name:"Sun",group:"Star",params:{size:7,orbitRadius:0,inclination:0,velocity:0}},{texture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQlXCG5Zeg_PJXAHKYmRSBgkjdehPuRoDb8Q&s",name:"Earth",group:"Planet",params:{size:1.5,orbitRadius:Fn+1*On,inclination:5e-5,velocity:29.8}},{texture:"https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",name:"Mars",group:"Planet",params:{size:1,orbitRadius:Fn+1.524*On,inclination:1.85,velocity:24.1}},{texture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-OMXsZFqfhTgoP2i4r0KdOAsGMHxuHKD0PQ&s",name:"Venus",group:"Planet",params:{size:1.2,orbitRadius:Fn+.72*On,inclination:3.39,velocity:35}},{texture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTORdzdwfM7t3gPHwI267R9fiN8-Fqe2Dr8yg&s",name:"Mercury",group:"Planet",params:{size:.6,orbitRadius:Fn+.39*On,inclination:7,velocity:47.4}},{texture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ABVh6X-rxANutcMkEqX0Q6fQtFt7ERZPkQ&s",name:"Jupiter",group:"Planet",params:{size:5.5,orbitRadius:Fn+5.2*On,inclination:1.31,velocity:13.1}},{texture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFEBAq2y8p5pY3Q3JR4DE-fAiyFrXeGTj6VA&s",name:"Saturn",group:"Planet",params:{size:4.5,orbitRadius:Fn+9.58*On,inclination:2.49,velocity:9.7}},{texture:"https://upload.wikimedia.org/wikipedia/commons/9/95/Solarsystemscope_texture_2k_uranus.jpg",name:"Uranus",group:"Planet",params:{size:3.9,orbitRadius:Fn+19.18*On,inclination:.77,velocity:6.8}},{texture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5m6I1cNvdxJo1hMYBzgmMzcD1viyiItRiyg&s",name:"Neptune",group:"Planet",params:{size:3.8,orbitRadius:Fn+30.07*On,inclination:1.77,velocity:5.4}},{texture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy78KEXOeYxXtHY6NVxVmtCKXDMiJd1__YRA&s",name:"NEC - Comet Holmes",group:"NEO",params:{size:.2,orbitRadius:Fn+1.5*On,inclination:10,velocity:10}},{texture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy78KEXOeYxXtHY6NVxVmtCKXDMiJd1__YRA&s",name:"PHA - Asteroid 46610",group:"NEO",params:{size:.2,orbitRadius:Fn+1.2*On,inclination:8,velocity:10}},{texture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy78KEXOeYxXtHY6NVxVmtCKXDMiJd1__YRA&s",name:"NEA - Asteroid 2004 EW95",group:"NEO",params:{size:.2,orbitRadius:Fn+1*On,inclination:12,velocity:10}}];class $C{constructor(e,n,i,r=200,s=30){Pt(this,"scene");Pt(this,"camera");Pt(this,"renderer");Pt(this,"controls");Pt(this,"solarSystemGroup");Pt(this,"celestialAnimations",[]);Pt(this,"raycaster");Pt(this,"mouse");Pt(this,"mountRef");Pt(this,"handleResize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)});Pt(this,"handleClick",e=>{e.preventDefault(),this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera),this.raycaster.intersectObjects(this.scene.children,!0).forEach(i=>{if(i.object instanceof Wn){const r=sg.find(s=>s.name===i.object.name);r&&(this.setData(r),this.setIsOpen(!0))}})});this.setData=n,this.setIsOpen=i,this.MAX_ZOOM_OUT=r,this.SOLAR_SYSTEM_INCLINATION=s,this.mountRef=e,this.scene=new xC,this.scene.background=new Xe(0),this.camera=new En(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.z=30,this.renderer=new vC,this.controls=new UC(this.camera,this.renderer.domElement),this.solarSystemGroup=new Ts,this.raycaster=new bC,this.mouse=new we,this.initControls(),this.initScene()}initControls(){this.controls.enableZoom=!0,this.controls.enablePan=!0,this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.screenSpacePanning=!0,this.controls.maxDistance=this.MAX_ZOOM_OUT}initScene(){this.scene.add(this.solarSystemGroup);const e=new PC;sg.forEach(r=>{const{texture:s,glb:o,name:a,params:l,group:u}=r,{size:f,orbitRadius:d,inclination:h,velocity:m}=l,v=s?e.load(s):null;if(v){v.minFilter=Tn;const x=new jC({texture:v,size:f,orbitRadius:d,name:a,group:u}),p=new Ts;if(p.rotation.x=gd.degToRad(h),p.add(x.mesh),x.sprite&&p.add(x.sprite),this.solarSystemGroup.add(p),d>0){const g=YC(d,r.group);p.add(g.line)}const c=g=>{const _=g*m*.01;x.updatePosition(_)};this.celestialAnimations.push(c)}});const n=qC();this.scene.add(n.mesh);const i=gd.degToRad(this.SOLAR_SYSTEM_INCLINATION);this.solarSystemGroup.rotation.x=i}renderScene(){const e=Date.now()*1e-4;this.celestialAnimations.forEach(n=>n(e)),this.controls.update(),this.renderer.render(this.scene,this.camera)}start(){var n;this.renderer.setSize(window.innerWidth,window.innerHeight),(n=this.mountRef.current)==null||n.appendChild(this.renderer.domElement),window.addEventListener("resize",this.handleResize),window.addEventListener("click",this.handleClick);const e=()=>{requestAnimationFrame(e),this.renderScene()};e()}cleanup(){var e;(e=this.mountRef.current)==null||e.removeChild(this.renderer.domElement),window.removeEventListener("resize",this.handleResize),window.removeEventListener("click",this.handleClick)}}const KC=({setIsOpen:t,setData:e})=>{const n=le.useRef(null);return le.useEffect(()=>{const i=new $C(n,e,t);return i.start(),()=>{i.cleanup()}},[]),xe.jsx("div",{ref:n})},ZC=({isOpen:t,onClose:e,data:n})=>!n||!t?null:xe.jsxs(xe.Fragment,{children:[xe.jsx("div",{className:"fixed inset-0 bg-black/20 z-10",onClick:e}),xe.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-20",onClick:i=>i.stopPropagation(),children:xe.jsxs("div",{className:"w-full max-w-lg p-6 bg-white shadow-xl rounded-lg",children:[xe.jsx("h3",{className:"text-lg font-medium leading-6 text-gray-900 mb-4",children:"Details"}),xe.jsxs("div",{className:"mt-2",children:[xe.jsx("h4",{className:"text-xl font-semibold text-gray-800",children:n.name}),xe.jsxs("p",{className:"text-gray-600 mt-2",children:["Group: ",n.group]}),xe.jsxs("p",{className:"text-gray-600 mt-2",children:["Orbit Radius: ",n.params.orbitRadius," AU"]}),xe.jsxs("p",{className:"text-gray-600 mt-2",children:["Inclination: ",n.params.inclination,"°"]}),xe.jsxs("p",{className:"text-gray-600 mt-2",children:["Velocity: ",n.params.velocity," km/s"]})]}),xe.jsx("div",{className:"mt-4 flex justify-end",children:xe.jsx("button",{type:"button",className:"inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",onClick:e,children:"Close"})})]})})]}),d0=({home:t})=>xe.jsxs("div",{className:"z-50 left-0 w-full px-7 bg-gray-800 text-white flex justify-between bg-gradient-to-r from-primary via-[#1f1f1f] to-{#1f1f1f]"+(t?" fixed top-0 py-4":" sticky top-5 py-3"),children:[xe.jsx(Sl,{to:"/",children:xe.jsxs("div",{className:"flex gap-4 items-center",children:[xe.jsx("img",{src:"/NASA-Space-Apps-Challenge-2024/logo.jpeg",alt:"logo",className:"w-10 h-10 rounded-full"}),xe.jsx("h1",{className:"text-xl font-new font-medium",children:"SoroWorld"})]})}),xe.jsxs("div",{className:"flex gap-4 md:gap-8 lg:gap-12 items-center",children:[xe.jsx("div",{className:"flex gap-4 md:gap-6 items-center",children:[["Our Solar System","/explore"],["The Sun","/explore/sun"],["Planets","/explore/planets"],["Moons","/explore/moons"],["Comets","/explore/comets"],["Asteroids","/explore/asteroids"]].map(([e,n],i)=>xe.jsx(jS,{to:n,className:({isActive:r})=>r?"border-b border-white/50":"",children:xe.jsx("button",{className:"leading-4 text-sm hover:text-white/50 transition-all "+(i!=0&&" border-s-2 border-white/50 ps-4 md:ps-6"),children:e})},e))}),xe.jsx("div",{hidden:t,children:xe.jsx(Sl,{to:"/",children:xe.jsx("button",{className:"bg-blue-500 text-white px-3 py-1.5 rounded-tl-md rounded-br-md hover:bg-blue-600 active:bg-blue-700",children:"Search"})})})]}),xe.jsx("div",{hidden:!t,children:xe.jsx(Sl,{to:"/explore",children:xe.jsx("button",{className:"bg-blue-500 text-white px-3 py-1.5 rounded-tl-md rounded-br-md hover:bg-blue-600 active:bg-blue-700",children:"Start Exploring"})})})]}),QC=()=>{const[t,e]=le.useState(!1),[n,i]=le.useState(null);return xe.jsxs("div",{children:[xe.jsx(KC,{setIsOpen:e,setData:i}),xe.jsx(ZC,{isOpen:t,onClose:()=>e(!1),data:n}),xe.jsx(d0,{home:!0})]})},JC=()=>xe.jsxs("main",{className:"bg-[#0f0e13] text-white min-h-screen",children:[xe.jsx(d0,{home:!1}),xe.jsx("div",{className:"absolute z-20 top-0 left-10 w-[2px] h-full bg-white/40"}),xe.jsx("section",{className:"_hero-section py-10",children:xe.jsxs("div",{className:"grid grid-cols-2 items-center min-h-[70vh]",children:[xe.jsxs("div",{className:"px-16",children:[xe.jsxs("div",{className:"flex gap-4 items-center -ms-8",children:[xe.jsx("div",{className:"w-4 h-4 border-2 border-primary rounded-full flex items-center justify-center relative z-30",children:xe.jsx("div",{className:"w-2 h-2 bg-primary rounded-full"})}),xe.jsx("p",{className:"text-gray-500",children:"00"})]}),xe.jsx("h1",{className:"text-5xl font-[300] font-new mt-3",children:"Our Solar System"}),xe.jsx("p",{className:"py-5 lg:max-w-md",children:"The solar system has one star (the Sun), eight planets, five dwarf planets, hundreds of moons, thousands of comets, and over a million asteroids. It is located in the Milky Way galaxy and orbits the galactic center at about 515,000 miles per hour, taking around 230 million years to complete one orbit."}),xe.jsx("a",{href:"https://science.nasa.gov/solar-system/",children:xe.jsx("button",{className:"border-2 border-primary text-white px-4 py-2 rounded-tl-lg rounded-br-lg transition-all hover:scale-95 active:bg-primary/70 my-3",children:"Learn more"})})]}),xe.jsx("div",{children:xe.jsx("img",{src:"/NASA-Space-Apps-Challenge-2024/solar.png",alt:"",className:"w-full"})})]})})]});function eR(){return xe.jsx(xe.Fragment,{children:xe.jsx(GS,{basename:"NASA-Space-Apps-Challenge-2024",children:xe.jsxs(IS,{children:[xe.jsx(Nf,{path:"/",element:xe.jsx(QC,{})}),xe.jsx(Nf,{path:"/explore",element:xe.jsx(JC,{})})]})})})}zc.createRoot(document.getElementById("root")).render(xe.jsx(gg.StrictMode,{children:xe.jsx(eR,{})}));
