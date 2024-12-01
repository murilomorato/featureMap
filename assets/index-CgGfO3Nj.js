(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function d_(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var df={exports:{}},Zo={},hf={exports:{}},ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm;function Zv(){if(zm)return ct;zm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),_=Symbol.iterator;function x(L){return L===null||typeof L!="object"?null:(L=_&&L[_]||L["@@iterator"],typeof L=="function"?L:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function S(L,ee,Te){this.props=L,this.context=ee,this.refs=T,this.updater=Te||y}S.prototype.isReactComponent={},S.prototype.setState=function(L,ee){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,ee,"setState")},S.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function v(){}v.prototype=S.prototype;function F(L,ee,Te){this.props=L,this.context=ee,this.refs=T,this.updater=Te||y}var D=F.prototype=new v;D.constructor=F,E(D,S.prototype),D.isPureReactComponent=!0;var P=Array.isArray,Y=Object.prototype.hasOwnProperty,B={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function $(L,ee,Te){var Z,ce={},xe=null,pe=null;if(ee!=null)for(Z in ee.ref!==void 0&&(pe=ee.ref),ee.key!==void 0&&(xe=""+ee.key),ee)Y.call(ee,Z)&&!O.hasOwnProperty(Z)&&(ce[Z]=ee[Z]);var we=arguments.length-2;if(we===1)ce.children=Te;else if(1<we){for(var De=Array(we),Ze=0;Ze<we;Ze++)De[Ze]=arguments[Ze+2];ce.children=De}if(L&&L.defaultProps)for(Z in we=L.defaultProps,we)ce[Z]===void 0&&(ce[Z]=we[Z]);return{$$typeof:i,type:L,key:xe,ref:pe,props:ce,_owner:B.current}}function C(L,ee){return{$$typeof:i,type:L.type,key:ee,ref:L.ref,props:L.props,_owner:L._owner}}function R(L){return typeof L=="object"&&L!==null&&L.$$typeof===i}function V(L){var ee={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Te){return ee[Te]})}var fe=/\/+/g;function oe(L,ee){return typeof L=="object"&&L!==null&&L.key!=null?V(""+L.key):ee.toString(36)}function N(L,ee,Te,Z,ce){var xe=typeof L;(xe==="undefined"||xe==="boolean")&&(L=null);var pe=!1;if(L===null)pe=!0;else switch(xe){case"string":case"number":pe=!0;break;case"object":switch(L.$$typeof){case i:case e:pe=!0}}if(pe)return pe=L,ce=ce(pe),L=Z===""?"."+oe(pe,0):Z,P(ce)?(Te="",L!=null&&(Te=L.replace(fe,"$&/")+"/"),N(ce,ee,Te,"",function(Ze){return Ze})):ce!=null&&(R(ce)&&(ce=C(ce,Te+(!ce.key||pe&&pe.key===ce.key?"":(""+ce.key).replace(fe,"$&/")+"/")+L)),ee.push(ce)),1;if(pe=0,Z=Z===""?".":Z+":",P(L))for(var we=0;we<L.length;we++){xe=L[we];var De=Z+oe(xe,we);pe+=N(xe,ee,Te,De,ce)}else if(De=x(L),typeof De=="function")for(L=De.call(L),we=0;!(xe=L.next()).done;)xe=xe.value,De=Z+oe(xe,we++),pe+=N(xe,ee,Te,De,ce);else if(xe==="object")throw ee=String(L),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return pe}function K(L,ee,Te){if(L==null)return L;var Z=[],ce=0;return N(L,Z,"","",function(xe){return ee.call(Te,xe,ce++)}),Z}function z(L){if(L._status===-1){var ee=L._result;ee=ee(),ee.then(function(Te){(L._status===0||L._status===-1)&&(L._status=1,L._result=Te)},function(Te){(L._status===0||L._status===-1)&&(L._status=2,L._result=Te)}),L._status===-1&&(L._status=0,L._result=ee)}if(L._status===1)return L._result.default;throw L._result}var j={current:null},I={transition:null},te={ReactCurrentDispatcher:j,ReactCurrentBatchConfig:I,ReactCurrentOwner:B};function Q(){throw Error("act(...) is not supported in production builds of React.")}return ct.Children={map:K,forEach:function(L,ee,Te){K(L,function(){ee.apply(this,arguments)},Te)},count:function(L){var ee=0;return K(L,function(){ee++}),ee},toArray:function(L){return K(L,function(ee){return ee})||[]},only:function(L){if(!R(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},ct.Component=S,ct.Fragment=t,ct.Profiler=o,ct.PureComponent=F,ct.StrictMode=s,ct.Suspense=h,ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,ct.act=Q,ct.cloneElement=function(L,ee,Te){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var Z=E({},L.props),ce=L.key,xe=L.ref,pe=L._owner;if(ee!=null){if(ee.ref!==void 0&&(xe=ee.ref,pe=B.current),ee.key!==void 0&&(ce=""+ee.key),L.type&&L.type.defaultProps)var we=L.type.defaultProps;for(De in ee)Y.call(ee,De)&&!O.hasOwnProperty(De)&&(Z[De]=ee[De]===void 0&&we!==void 0?we[De]:ee[De])}var De=arguments.length-2;if(De===1)Z.children=Te;else if(1<De){we=Array(De);for(var Ze=0;Ze<De;Ze++)we[Ze]=arguments[Ze+2];Z.children=we}return{$$typeof:i,type:L.type,key:ce,ref:xe,props:Z,_owner:pe}},ct.createContext=function(L){return L={$$typeof:c,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:l,_context:L},L.Consumer=L},ct.createElement=$,ct.createFactory=function(L){var ee=$.bind(null,L);return ee.type=L,ee},ct.createRef=function(){return{current:null}},ct.forwardRef=function(L){return{$$typeof:f,render:L}},ct.isValidElement=R,ct.lazy=function(L){return{$$typeof:m,_payload:{_status:-1,_result:L},_init:z}},ct.memo=function(L,ee){return{$$typeof:p,type:L,compare:ee===void 0?null:ee}},ct.startTransition=function(L){var ee=I.transition;I.transition={};try{L()}finally{I.transition=ee}},ct.unstable_act=Q,ct.useCallback=function(L,ee){return j.current.useCallback(L,ee)},ct.useContext=function(L){return j.current.useContext(L)},ct.useDebugValue=function(){},ct.useDeferredValue=function(L){return j.current.useDeferredValue(L)},ct.useEffect=function(L,ee){return j.current.useEffect(L,ee)},ct.useId=function(){return j.current.useId()},ct.useImperativeHandle=function(L,ee,Te){return j.current.useImperativeHandle(L,ee,Te)},ct.useInsertionEffect=function(L,ee){return j.current.useInsertionEffect(L,ee)},ct.useLayoutEffect=function(L,ee){return j.current.useLayoutEffect(L,ee)},ct.useMemo=function(L,ee){return j.current.useMemo(L,ee)},ct.useReducer=function(L,ee,Te){return j.current.useReducer(L,ee,Te)},ct.useRef=function(L){return j.current.useRef(L)},ct.useState=function(L){return j.current.useState(L)},ct.useSyncExternalStore=function(L,ee,Te){return j.current.useSyncExternalStore(L,ee,Te)},ct.useTransition=function(){return j.current.useTransition()},ct.version="18.3.1",ct}var km;function Kd(){return km||(km=1,hf.exports=Zv()),hf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm;function Qv(){if(Bm)return Zo;Bm=1;var i=Kd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,p){var m,_={},x=null,y=null;p!==void 0&&(x=""+p),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(y=h.ref);for(m in h)s.call(h,m)&&!l.hasOwnProperty(m)&&(_[m]=h[m]);if(f&&f.defaultProps)for(m in h=f.defaultProps,h)_[m]===void 0&&(_[m]=h[m]);return{$$typeof:e,type:f,key:x,ref:y,props:_,_owner:o.current}}return Zo.Fragment=t,Zo.jsx=c,Zo.jsxs=c,Zo}var Hm;function Jv(){return Hm||(Hm=1,df.exports=Qv()),df.exports}var wi=Jv(),En=Kd();const ex=d_(En);var pf={exports:{}},Dn={},mf={exports:{}},gf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm;function tx(){return Vm||(Vm=1,function(i){function e(I,te){var Q=I.length;I.push(te);e:for(;0<Q;){var L=Q-1>>>1,ee=I[L];if(0<o(ee,te))I[L]=te,I[Q]=ee,Q=L;else break e}}function t(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var te=I[0],Q=I.pop();if(Q!==te){I[0]=Q;e:for(var L=0,ee=I.length,Te=ee>>>1;L<Te;){var Z=2*(L+1)-1,ce=I[Z],xe=Z+1,pe=I[xe];if(0>o(ce,Q))xe<ee&&0>o(pe,ce)?(I[L]=pe,I[xe]=Q,L=xe):(I[L]=ce,I[Z]=Q,L=Z);else if(xe<ee&&0>o(pe,Q))I[L]=pe,I[xe]=Q,L=xe;else break e}}return te}function o(I,te){var Q=I.sortIndex-te.sortIndex;return Q!==0?Q:I.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();i.unstable_now=function(){return c.now()-f}}var h=[],p=[],m=1,_=null,x=3,y=!1,E=!1,T=!1,S=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(I){for(var te=t(p);te!==null;){if(te.callback===null)s(p);else if(te.startTime<=I)s(p),te.sortIndex=te.expirationTime,e(h,te);else break;te=t(p)}}function P(I){if(T=!1,D(I),!E)if(t(h)!==null)E=!0,z(Y);else{var te=t(p);te!==null&&j(P,te.startTime-I)}}function Y(I,te){E=!1,T&&(T=!1,v($),$=-1),y=!0;var Q=x;try{for(D(te),_=t(h);_!==null&&(!(_.expirationTime>te)||I&&!V());){var L=_.callback;if(typeof L=="function"){_.callback=null,x=_.priorityLevel;var ee=L(_.expirationTime<=te);te=i.unstable_now(),typeof ee=="function"?_.callback=ee:_===t(h)&&s(h),D(te)}else s(h);_=t(h)}if(_!==null)var Te=!0;else{var Z=t(p);Z!==null&&j(P,Z.startTime-te),Te=!1}return Te}finally{_=null,x=Q,y=!1}}var B=!1,O=null,$=-1,C=5,R=-1;function V(){return!(i.unstable_now()-R<C)}function fe(){if(O!==null){var I=i.unstable_now();R=I;var te=!0;try{te=O(!0,I)}finally{te?oe():(B=!1,O=null)}}else B=!1}var oe;if(typeof F=="function")oe=function(){F(fe)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,K=N.port2;N.port1.onmessage=fe,oe=function(){K.postMessage(null)}}else oe=function(){S(fe,0)};function z(I){O=I,B||(B=!0,oe())}function j(I,te){$=S(function(){I(i.unstable_now())},te)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(I){I.callback=null},i.unstable_continueExecution=function(){E||y||(E=!0,z(Y))},i.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<I?Math.floor(1e3/I):5},i.unstable_getCurrentPriorityLevel=function(){return x},i.unstable_getFirstCallbackNode=function(){return t(h)},i.unstable_next=function(I){switch(x){case 1:case 2:case 3:var te=3;break;default:te=x}var Q=x;x=te;try{return I()}finally{x=Q}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(I,te){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Q=x;x=I;try{return te()}finally{x=Q}},i.unstable_scheduleCallback=function(I,te,Q){var L=i.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?L+Q:L):Q=L,I){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=Q+ee,I={id:m++,callback:te,priorityLevel:I,startTime:Q,expirationTime:ee,sortIndex:-1},Q>L?(I.sortIndex=Q,e(p,I),t(h)===null&&I===t(p)&&(T?(v($),$=-1):T=!0,j(P,Q-L))):(I.sortIndex=ee,e(h,I),E||y||(E=!0,z(Y))),I},i.unstable_shouldYield=V,i.unstable_wrapCallback=function(I){var te=x;return function(){var Q=x;x=te;try{return I.apply(this,arguments)}finally{x=Q}}}}(gf)),gf}var Gm;function nx(){return Gm||(Gm=1,mf.exports=tx()),mf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm;function ix(){if(Wm)return Dn;Wm=1;var i=Kd(),e=nx();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},_={};function x(n){return h.call(_,n)?!0:h.call(m,n)?!1:p.test(n)?_[n]=!0:(m[n]=!0,!1)}function y(n,r,a,u){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,r,a,u){if(r===null||typeof r>"u"||y(n,r,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function T(n,r,a,u,d,g,M){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=g,this.removeEmptyString=M}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];S[r]=new T(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function F(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(v,F);S[r]=new T(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(v,F);S[r]=new T(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(v,F);S[r]=new T(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function D(n,r,a,u){var d=S.hasOwnProperty(r)?S[r]:null;(d!==null?d.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(E(r,a,d,u)&&(a=null),u||d===null?x(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,u=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,u?n.setAttributeNS(u,r,a):n.setAttribute(r,a))))}var P=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Y=Symbol.for("react.element"),B=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),V=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),j=Symbol.for("react.offscreen"),I=Symbol.iterator;function te(n){return n===null||typeof n!="object"?null:(n=I&&n[I]||n["@@iterator"],typeof n=="function"?n:null)}var Q=Object.assign,L;function ee(n){if(L===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);L=r&&r[1]||""}return`
`+L+n}var Te=!1;function Z(n,r){if(!n||Te)return"";Te=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(se){var u=se}Reflect.construct(n,[],r)}else{try{r.call()}catch(se){u=se}n.call(r.prototype)}else{try{throw Error()}catch(se){u=se}n()}}catch(se){if(se&&u&&typeof se.stack=="string"){for(var d=se.stack.split(`
`),g=u.stack.split(`
`),M=d.length-1,U=g.length-1;1<=M&&0<=U&&d[M]!==g[U];)U--;for(;1<=M&&0<=U;M--,U--)if(d[M]!==g[U]){if(M!==1||U!==1)do if(M--,U--,0>U||d[M]!==g[U]){var k=`
`+d[M].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=M&&0<=U);break}}}finally{Te=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ee(n):""}function ce(n){switch(n.tag){case 5:return ee(n.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return n=Z(n.type,!1),n;case 11:return n=Z(n.type.render,!1),n;case 1:return n=Z(n.type,!0),n;default:return""}}function xe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case B:return"Portal";case C:return"Profiler";case $:return"StrictMode";case oe:return"Suspense";case N:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case fe:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case K:return r=n.displayName||null,r!==null?r:xe(n.type)||"Memo";case z:r=n._payload,n=n._init;try{return xe(n(r))}catch{}}return null}function pe(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(r);case 8:return r===$?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function we(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function De(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ze(n){var r=De(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(M){u=""+M,g.call(this,M)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Rt(n){n._valueTracker||(n._valueTracker=Ze(n))}function ht(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),u="";return n&&(u=De(n)?n.checked?"true":"false":n.value),n=u,n!==a?(r.setValue(n),!0):!1}function Lt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function H(n,r){var a=r.checked;return Q({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function mn(n,r){var a=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;a=we(r.value!=null?r.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ft(n,r){r=r.checked,r!=null&&D(n,"checked",r,!1)}function lt(n,r){ft(n,r);var a=we(r.value),u=r.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?At(n,r.type,a):r.hasOwnProperty("defaultValue")&&At(n,r.type,we(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ye(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function At(n,r,a){(r!=="number"||Lt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var We=Array.isArray;function b(n,r,a,u){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&u&&(n[a].defaultSelected=!0)}else{for(a=""+we(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function w(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return Q({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ie(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(We(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:we(a)}}function me(n,r){var a=we(r.value),u=we(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function _e(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function de(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ve(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?de(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ae,Ie=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,u,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,u,d)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ae.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function at(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ze=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){ze.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Me[r]=Me[n]})});function $e(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Me.hasOwnProperty(n)&&Me[n]?(""+r).trim():r+"px"}function Qe(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var u=a.indexOf("--")===0,d=$e(a,r[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,d):n[a]=d}}var ke=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ut(n,r){if(r){if(ke[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function nt(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wt=null;function X(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Re=null,ue=null,he=null;function Le(n){if(n=Fo(n)){if(typeof Re!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Ga(r),Re(n.stateNode,n.type,r))}}function be(n){ue?he?he.push(n):he=[n]:ue=n}function it(){if(ue){var n=ue,r=he;if(he=ue=null,Le(n),r)for(n=0;n<r.length;n++)Le(r[n])}}function Ut(n,r){return n(r)}function $t(){}var vt=!1;function An(n,r,a){if(vt)return n(r,a);vt=!0;try{return Ut(n,r,a)}finally{vt=!1,(ue!==null||he!==null)&&($t(),it())}}function gn(n,r){var a=n.stateNode;if(a===null)return null;var u=Ga(a);if(u===null)return null;a=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var hs=!1;if(f)try{var Qi={};Object.defineProperty(Qi,"passive",{get:function(){hs=!0}}),window.addEventListener("test",Qi,Qi),window.removeEventListener("test",Qi,Qi)}catch{hs=!1}function Ri(n,r,a,u,d,g,M,U,k){var se=Array.prototype.slice.call(arguments,3);try{r.apply(a,se)}catch(ve){this.onError(ve)}}var Ci=!1,Nr=null,Ir=!1,Ji=null,Ma={onError:function(n){Ci=!0,Nr=n}};function ps(n,r,a,u,d,g,M,U,k){Ci=!1,Nr=null,Ri.apply(Ma,arguments)}function Ea(n,r,a,u,d,g,M,U,k){if(ps.apply(this,arguments),Ci){if(Ci){var se=Nr;Ci=!1,Nr=null}else throw Error(t(198));Ir||(Ir=!0,Ji=se)}}function mi(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,r.flags&4098&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function wa(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Ta(n){if(mi(n)!==n)throw Error(t(188))}function Nu(n){var r=n.alternate;if(!r){if(r=mi(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,u=r;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(u=d.return,u!==null){a=u;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return Ta(d),n;if(g===u)return Ta(d),r;g=g.sibling}throw Error(t(188))}if(a.return!==u.return)a=d,u=g;else{for(var M=!1,U=d.child;U;){if(U===a){M=!0,a=d,u=g;break}if(U===u){M=!0,u=d,a=g;break}U=U.sibling}if(!M){for(U=g.child;U;){if(U===a){M=!0,a=g,u=d;break}if(U===u){M=!0,u=g,a=d;break}U=U.sibling}if(!M)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function Aa(n){return n=Nu(n),n!==null?Ra(n):null}function Ra(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Ra(n);if(r!==null)return r;n=n.sibling}return null}var A=e.unstable_scheduleCallback,q=e.unstable_cancelCallback,ae=e.unstable_shouldYield,le=e.unstable_requestPaint,G=e.unstable_now,Se=e.unstable_getCurrentPriorityLevel,Ce=e.unstable_ImmediatePriority,Ne=e.unstable_UserBlockingPriority,Fe=e.unstable_NormalPriority,Je=e.unstable_LowPriority,et=e.unstable_IdlePriority,Xe=null,rt=null;function yt(n){if(rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(Xe,n,void 0,(n.current.flags&128)===128)}catch{}}var St=Math.clz32?Math.clz32:qe,Ft=Math.log,_t=Math.LN2;function qe(n){return n>>>=0,n===0?32:31-(Ft(n)/_t|0)|0}var Ht=64,mt=4194304;function rn(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Zn(n,r){var a=n.pendingLanes;if(a===0)return 0;var u=0,d=n.suspendedLanes,g=n.pingedLanes,M=a&268435455;if(M!==0){var U=M&~d;U!==0?u=rn(U):(g&=M,g!==0&&(u=rn(g)))}else M=a&~d,M!==0?u=rn(M):g!==0&&(u=rn(g));if(u===0)return 0;if(r!==0&&r!==u&&!(r&d)&&(d=u&-u,g=r&-r,d>=g||d===16&&(g&4194240)!==0))return r;if(u&4&&(u|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=u;0<r;)a=31-St(r),d=1<<a,u|=n[a],r&=~d;return u}function _n(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fr(n,r){for(var a=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,g=n.pendingLanes;0<g;){var M=31-St(g),U=1<<M,k=d[M];k===-1?(!(U&a)||U&u)&&(d[M]=_n(U,r)):k<=r&&(n.expiredLanes|=U),g&=~U}}function Ct(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function vn(){var n=Ht;return Ht<<=1,!(Ht&4194240)&&(Ht=64),n}function an(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Gt(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-St(r),n[r]=a}function ln(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-St(a),g=1<<d;r[d]=0,u[d]=-1,n[d]=-1,a&=~g}}function Or(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var u=31-St(a),d=1<<u;d&r|n[u]&r&&(n[u]|=r),a&=~d}}var dt=0;function gh(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var _h,Iu,vh,xh,yh,Fu=!1,Ca=[],er=null,tr=null,nr=null,yo=new Map,So=new Map,ir=[],x0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sh(n,r){switch(n){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":yo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(r.pointerId)}}function Mo(n,r,a,u,d,g){return n===null||n.nativeEvent!==g?(n={blockedOn:r,domEventName:a,eventSystemFlags:u,nativeEvent:g,targetContainers:[d]},r!==null&&(r=Fo(r),r!==null&&Iu(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function y0(n,r,a,u,d){switch(r){case"focusin":return er=Mo(er,n,r,a,u,d),!0;case"dragenter":return tr=Mo(tr,n,r,a,u,d),!0;case"mouseover":return nr=Mo(nr,n,r,a,u,d),!0;case"pointerover":var g=d.pointerId;return yo.set(g,Mo(yo.get(g)||null,n,r,a,u,d)),!0;case"gotpointercapture":return g=d.pointerId,So.set(g,Mo(So.get(g)||null,n,r,a,u,d)),!0}return!1}function Mh(n){var r=zr(n.target);if(r!==null){var a=mi(r);if(a!==null){if(r=a.tag,r===13){if(r=wa(a),r!==null){n.blockedOn=r,yh(n.priority,function(){vh(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Pa(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=zu(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);wt=u,a.target.dispatchEvent(u),wt=null}else return r=Fo(a),r!==null&&Iu(r),n.blockedOn=a,!1;r.shift()}return!0}function Eh(n,r,a){Pa(n)&&a.delete(r)}function S0(){Fu=!1,er!==null&&Pa(er)&&(er=null),tr!==null&&Pa(tr)&&(tr=null),nr!==null&&Pa(nr)&&(nr=null),yo.forEach(Eh),So.forEach(Eh)}function Eo(n,r){n.blockedOn===r&&(n.blockedOn=null,Fu||(Fu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,S0)))}function wo(n){function r(d){return Eo(d,n)}if(0<Ca.length){Eo(Ca[0],n);for(var a=1;a<Ca.length;a++){var u=Ca[a];u.blockedOn===n&&(u.blockedOn=null)}}for(er!==null&&Eo(er,n),tr!==null&&Eo(tr,n),nr!==null&&Eo(nr,n),yo.forEach(r),So.forEach(r),a=0;a<ir.length;a++)u=ir[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<ir.length&&(a=ir[0],a.blockedOn===null);)Mh(a),a.blockedOn===null&&ir.shift()}var ms=P.ReactCurrentBatchConfig,ba=!0;function M0(n,r,a,u){var d=dt,g=ms.transition;ms.transition=null;try{dt=1,Ou(n,r,a,u)}finally{dt=d,ms.transition=g}}function E0(n,r,a,u){var d=dt,g=ms.transition;ms.transition=null;try{dt=4,Ou(n,r,a,u)}finally{dt=d,ms.transition=g}}function Ou(n,r,a,u){if(ba){var d=zu(n,r,a,u);if(d===null)tc(n,r,u,La,a),Sh(n,u);else if(y0(d,n,r,a,u))u.stopPropagation();else if(Sh(n,u),r&4&&-1<x0.indexOf(n)){for(;d!==null;){var g=Fo(d);if(g!==null&&_h(g),g=zu(n,r,a,u),g===null&&tc(n,r,u,La,a),g===d)break;d=g}d!==null&&u.stopPropagation()}else tc(n,r,u,null,a)}}var La=null;function zu(n,r,a,u){if(La=null,n=X(u),n=zr(n),n!==null)if(r=mi(n),r===null)n=null;else if(a=r.tag,a===13){if(n=wa(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return La=n,null}function wh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Se()){case Ce:return 1;case Ne:return 4;case Fe:case Je:return 16;case et:return 536870912;default:return 16}default:return 16}}var rr=null,ku=null,Da=null;function Th(){if(Da)return Da;var n,r=ku,a=r.length,u,d="value"in rr?rr.value:rr.textContent,g=d.length;for(n=0;n<a&&r[n]===d[n];n++);var M=a-n;for(u=1;u<=M&&r[a-u]===d[g-u];u++);return Da=d.slice(n,1<u?1-u:void 0)}function Ua(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Na(){return!0}function Ah(){return!1}function In(n){function r(a,u,d,g,M){this._reactName=a,this._targetInst=d,this.type=u,this.nativeEvent=g,this.target=M,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(a=n[U],this[U]=a?a(g):g[U]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Na:Ah,this.isPropagationStopped=Ah,this}return Q(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Na)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Na)},persist:function(){},isPersistent:Na}),r}var gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bu=In(gs),To=Q({},gs,{view:0,detail:0}),w0=In(To),Hu,Vu,Ao,Ia=Q({},To,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ao&&(Ao&&n.type==="mousemove"?(Hu=n.screenX-Ao.screenX,Vu=n.screenY-Ao.screenY):Vu=Hu=0,Ao=n),Hu)},movementY:function(n){return"movementY"in n?n.movementY:Vu}}),Rh=In(Ia),T0=Q({},Ia,{dataTransfer:0}),A0=In(T0),R0=Q({},To,{relatedTarget:0}),Gu=In(R0),C0=Q({},gs,{animationName:0,elapsedTime:0,pseudoElement:0}),P0=In(C0),b0=Q({},gs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),L0=In(b0),D0=Q({},gs,{data:0}),Ch=In(D0),U0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},N0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},I0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F0(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=I0[n])?!!r[n]:!1}function Wu(){return F0}var O0=Q({},To,{key:function(n){if(n.key){var r=U0[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Ua(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?N0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wu,charCode:function(n){return n.type==="keypress"?Ua(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ua(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),z0=In(O0),k0=Q({},Ia,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ph=In(k0),B0=Q({},To,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wu}),H0=In(B0),V0=Q({},gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),G0=In(V0),W0=Q({},Ia,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),X0=In(W0),Y0=[9,13,27,32],Xu=f&&"CompositionEvent"in window,Ro=null;f&&"documentMode"in document&&(Ro=document.documentMode);var q0=f&&"TextEvent"in window&&!Ro,bh=f&&(!Xu||Ro&&8<Ro&&11>=Ro),Lh=" ",Dh=!1;function Uh(n,r){switch(n){case"keyup":return Y0.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var _s=!1;function $0(n,r){switch(n){case"compositionend":return Nh(r);case"keypress":return r.which!==32?null:(Dh=!0,Lh);case"textInput":return n=r.data,n===Lh&&Dh?null:n;default:return null}}function j0(n,r){if(_s)return n==="compositionend"||!Xu&&Uh(n,r)?(n=Th(),Da=ku=rr=null,_s=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return bh&&r.locale!=="ko"?null:r.data;default:return null}}var K0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ih(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!K0[n.type]:r==="textarea"}function Fh(n,r,a,u){be(u),r=Ba(r,"onChange"),0<r.length&&(a=new Bu("onChange","change",null,a,u),n.push({event:a,listeners:r}))}var Co=null,Po=null;function Z0(n){ep(n,0)}function Fa(n){var r=Ms(n);if(ht(r))return n}function Q0(n,r){if(n==="change")return r}var Oh=!1;if(f){var Yu;if(f){var qu="oninput"in document;if(!qu){var zh=document.createElement("div");zh.setAttribute("oninput","return;"),qu=typeof zh.oninput=="function"}Yu=qu}else Yu=!1;Oh=Yu&&(!document.documentMode||9<document.documentMode)}function kh(){Co&&(Co.detachEvent("onpropertychange",Bh),Po=Co=null)}function Bh(n){if(n.propertyName==="value"&&Fa(Po)){var r=[];Fh(r,Po,n,X(n)),An(Z0,r)}}function J0(n,r,a){n==="focusin"?(kh(),Co=r,Po=a,Co.attachEvent("onpropertychange",Bh)):n==="focusout"&&kh()}function ev(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Fa(Po)}function tv(n,r){if(n==="click")return Fa(r)}function nv(n,r){if(n==="input"||n==="change")return Fa(r)}function iv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Qn=typeof Object.is=="function"?Object.is:iv;function bo(n,r){if(Qn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),u=Object.keys(r);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var d=a[u];if(!h.call(r,d)||!Qn(n[d],r[d]))return!1}return!0}function Hh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Vh(n,r){var a=Hh(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=r&&u>=r)return{node:a,offset:r-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Hh(a)}}function Gh(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Gh(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Wh(){for(var n=window,r=Lt();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Lt(n.document)}return r}function $u(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function rv(n){var r=Wh(),a=n.focusedElem,u=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Gh(a.ownerDocument.documentElement,a)){if(u!==null&&$u(a)){if(r=u.start,n=u.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,g=Math.min(u.start,d);u=u.end===void 0?g:Math.min(u.end,d),!n.extend&&g>u&&(d=u,u=g,g=d),d=Vh(a,g);var M=Vh(a,u);d&&M&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),g>u?(n.addRange(r),n.extend(M.node,M.offset)):(r.setEnd(M.node,M.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var sv=f&&"documentMode"in document&&11>=document.documentMode,vs=null,ju=null,Lo=null,Ku=!1;function Xh(n,r,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ku||vs==null||vs!==Lt(u)||(u=vs,"selectionStart"in u&&$u(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Lo&&bo(Lo,u)||(Lo=u,u=Ba(ju,"onSelect"),0<u.length&&(r=new Bu("onSelect","select",null,r,a),n.push({event:r,listeners:u}),r.target=vs)))}function Oa(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var xs={animationend:Oa("Animation","AnimationEnd"),animationiteration:Oa("Animation","AnimationIteration"),animationstart:Oa("Animation","AnimationStart"),transitionend:Oa("Transition","TransitionEnd")},Zu={},Yh={};f&&(Yh=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function za(n){if(Zu[n])return Zu[n];if(!xs[n])return n;var r=xs[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Yh)return Zu[n]=r[a];return n}var qh=za("animationend"),$h=za("animationiteration"),jh=za("animationstart"),Kh=za("transitionend"),Zh=new Map,Qh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(n,r){Zh.set(n,r),l(r,[n])}for(var Qu=0;Qu<Qh.length;Qu++){var Ju=Qh[Qu],ov=Ju.toLowerCase(),av=Ju[0].toUpperCase()+Ju.slice(1);sr(ov,"on"+av)}sr(qh,"onAnimationEnd"),sr($h,"onAnimationIteration"),sr(jh,"onAnimationStart"),sr("dblclick","onDoubleClick"),sr("focusin","onFocus"),sr("focusout","onBlur"),sr(Kh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Do));function Jh(n,r,a){var u=n.type||"unknown-event";n.currentTarget=a,Ea(u,r,void 0,n),n.currentTarget=null}function ep(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],d=u.event;u=u.listeners;e:{var g=void 0;if(r)for(var M=u.length-1;0<=M;M--){var U=u[M],k=U.instance,se=U.currentTarget;if(U=U.listener,k!==g&&d.isPropagationStopped())break e;Jh(d,U,se),g=k}else for(M=0;M<u.length;M++){if(U=u[M],k=U.instance,se=U.currentTarget,U=U.listener,k!==g&&d.isPropagationStopped())break e;Jh(d,U,se),g=k}}}if(Ir)throw n=Ji,Ir=!1,Ji=null,n}function Nt(n,r){var a=r[ac];a===void 0&&(a=r[ac]=new Set);var u=n+"__bubble";a.has(u)||(tp(r,n,2,!1),a.add(u))}function ec(n,r,a){var u=0;r&&(u|=4),tp(a,n,u,r)}var ka="_reactListening"+Math.random().toString(36).slice(2);function Uo(n){if(!n[ka]){n[ka]=!0,s.forEach(function(a){a!=="selectionchange"&&(lv.has(a)||ec(a,!1,n),ec(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[ka]||(r[ka]=!0,ec("selectionchange",!1,r))}}function tp(n,r,a,u){switch(wh(r)){case 1:var d=M0;break;case 4:d=E0;break;default:d=Ou}a=d.bind(null,r,a,n),d=void 0,!hs||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function tc(n,r,a,u,d){var g=u;if(!(r&1)&&!(r&2)&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var U=u.stateNode.containerInfo;if(U===d||U.nodeType===8&&U.parentNode===d)break;if(M===4)for(M=u.return;M!==null;){var k=M.tag;if((k===3||k===4)&&(k=M.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;M=M.return}for(;U!==null;){if(M=zr(U),M===null)return;if(k=M.tag,k===5||k===6){u=g=M;continue e}U=U.parentNode}}u=u.return}An(function(){var se=g,ve=X(a),ye=[];e:{var ge=Zh.get(n);if(ge!==void 0){var Ue=Bu,Be=n;switch(n){case"keypress":if(Ua(a)===0)break e;case"keydown":case"keyup":Ue=z0;break;case"focusin":Be="focus",Ue=Gu;break;case"focusout":Be="blur",Ue=Gu;break;case"beforeblur":case"afterblur":Ue=Gu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=Rh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=A0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=H0;break;case qh:case $h:case jh:Ue=P0;break;case Kh:Ue=G0;break;case"scroll":Ue=w0;break;case"wheel":Ue=X0;break;case"copy":case"cut":case"paste":Ue=L0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=Ph}var He=(r&4)!==0,Wt=!He&&n==="scroll",J=He?ge!==null?ge+"Capture":null:ge;He=[];for(var W=se,ne;W!==null;){ne=W;var Ee=ne.stateNode;if(ne.tag===5&&Ee!==null&&(ne=Ee,J!==null&&(Ee=gn(W,J),Ee!=null&&He.push(No(W,Ee,ne)))),Wt)break;W=W.return}0<He.length&&(ge=new Ue(ge,Be,null,a,ve),ye.push({event:ge,listeners:He}))}}if(!(r&7)){e:{if(ge=n==="mouseover"||n==="pointerover",Ue=n==="mouseout"||n==="pointerout",ge&&a!==wt&&(Be=a.relatedTarget||a.fromElement)&&(zr(Be)||Be[Pi]))break e;if((Ue||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ue?(Be=a.relatedTarget||a.toElement,Ue=se,Be=Be?zr(Be):null,Be!==null&&(Wt=mi(Be),Be!==Wt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(Ue=null,Be=se),Ue!==Be)){if(He=Rh,Ee="onMouseLeave",J="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(He=Ph,Ee="onPointerLeave",J="onPointerEnter",W="pointer"),Wt=Ue==null?ge:Ms(Ue),ne=Be==null?ge:Ms(Be),ge=new He(Ee,W+"leave",Ue,a,ve),ge.target=Wt,ge.relatedTarget=ne,Ee=null,zr(ve)===se&&(He=new He(J,W+"enter",Be,a,ve),He.target=ne,He.relatedTarget=Wt,Ee=He),Wt=Ee,Ue&&Be)t:{for(He=Ue,J=Be,W=0,ne=He;ne;ne=ys(ne))W++;for(ne=0,Ee=J;Ee;Ee=ys(Ee))ne++;for(;0<W-ne;)He=ys(He),W--;for(;0<ne-W;)J=ys(J),ne--;for(;W--;){if(He===J||J!==null&&He===J.alternate)break t;He=ys(He),J=ys(J)}He=null}else He=null;Ue!==null&&np(ye,ge,Ue,He,!1),Be!==null&&Wt!==null&&np(ye,Wt,Be,He,!0)}}e:{if(ge=se?Ms(se):window,Ue=ge.nodeName&&ge.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&ge.type==="file")var Ge=Q0;else if(Ih(ge))if(Oh)Ge=nv;else{Ge=ev;var je=J0}else(Ue=ge.nodeName)&&Ue.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Ge=tv);if(Ge&&(Ge=Ge(n,se))){Fh(ye,Ge,a,ve);break e}je&&je(n,ge,se),n==="focusout"&&(je=ge._wrapperState)&&je.controlled&&ge.type==="number"&&At(ge,"number",ge.value)}switch(je=se?Ms(se):window,n){case"focusin":(Ih(je)||je.contentEditable==="true")&&(vs=je,ju=se,Lo=null);break;case"focusout":Lo=ju=vs=null;break;case"mousedown":Ku=!0;break;case"contextmenu":case"mouseup":case"dragend":Ku=!1,Xh(ye,a,ve);break;case"selectionchange":if(sv)break;case"keydown":case"keyup":Xh(ye,a,ve)}var Ke;if(Xu)e:{switch(n){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else _s?Uh(n,a)&&(tt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(tt="onCompositionStart");tt&&(bh&&a.locale!=="ko"&&(_s||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&_s&&(Ke=Th()):(rr=ve,ku="value"in rr?rr.value:rr.textContent,_s=!0)),je=Ba(se,tt),0<je.length&&(tt=new Ch(tt,n,null,a,ve),ye.push({event:tt,listeners:je}),Ke?tt.data=Ke:(Ke=Nh(a),Ke!==null&&(tt.data=Ke)))),(Ke=q0?$0(n,a):j0(n,a))&&(se=Ba(se,"onBeforeInput"),0<se.length&&(ve=new Ch("onBeforeInput","beforeinput",null,a,ve),ye.push({event:ve,listeners:se}),ve.data=Ke))}ep(ye,r)})}function No(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Ba(n,r){for(var a=r+"Capture",u=[];n!==null;){var d=n,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=gn(n,a),g!=null&&u.unshift(No(n,g,d)),g=gn(n,r),g!=null&&u.push(No(n,g,d))),n=n.return}return u}function ys(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function np(n,r,a,u,d){for(var g=r._reactName,M=[];a!==null&&a!==u;){var U=a,k=U.alternate,se=U.stateNode;if(k!==null&&k===u)break;U.tag===5&&se!==null&&(U=se,d?(k=gn(a,g),k!=null&&M.unshift(No(a,k,U))):d||(k=gn(a,g),k!=null&&M.push(No(a,k,U)))),a=a.return}M.length!==0&&n.push({event:r,listeners:M})}var uv=/\r\n?/g,cv=/\u0000|\uFFFD/g;function ip(n){return(typeof n=="string"?n:""+n).replace(uv,`
`).replace(cv,"")}function Ha(n,r,a){if(r=ip(r),ip(n)!==r&&a)throw Error(t(425))}function Va(){}var nc=null,ic=null;function rc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var sc=typeof setTimeout=="function"?setTimeout:void 0,fv=typeof clearTimeout=="function"?clearTimeout:void 0,rp=typeof Promise=="function"?Promise:void 0,dv=typeof queueMicrotask=="function"?queueMicrotask:typeof rp<"u"?function(n){return rp.resolve(null).then(n).catch(hv)}:sc;function hv(n){setTimeout(function(){throw n})}function oc(n,r){var a=r,u=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(u===0){n.removeChild(d),wo(r);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=d}while(a);wo(r)}function or(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function sp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Ss=Math.random().toString(36).slice(2),gi="__reactFiber$"+Ss,Io="__reactProps$"+Ss,Pi="__reactContainer$"+Ss,ac="__reactEvents$"+Ss,pv="__reactListeners$"+Ss,mv="__reactHandles$"+Ss;function zr(n){var r=n[gi];if(r)return r;for(var a=n.parentNode;a;){if(r=a[Pi]||a[gi]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=sp(n);n!==null;){if(a=n[gi])return a;n=sp(n)}return r}n=a,a=n.parentNode}return null}function Fo(n){return n=n[gi]||n[Pi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ms(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ga(n){return n[Io]||null}var lc=[],Es=-1;function ar(n){return{current:n}}function It(n){0>Es||(n.current=lc[Es],lc[Es]=null,Es--)}function Dt(n,r){Es++,lc[Es]=n.current,n.current=r}var lr={},un=ar(lr),Rn=ar(!1),kr=lr;function ws(n,r){var a=n.type.contextTypes;if(!a)return lr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=r[g];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Cn(n){return n=n.childContextTypes,n!=null}function Wa(){It(Rn),It(un)}function op(n,r,a){if(un.current!==lr)throw Error(t(168));Dt(un,r),Dt(Rn,a)}function ap(n,r,a){var u=n.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var d in u)if(!(d in r))throw Error(t(108,pe(n)||"Unknown",d));return Q({},a,u)}function Xa(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||lr,kr=un.current,Dt(un,n),Dt(Rn,Rn.current),!0}function lp(n,r,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=ap(n,r,kr),u.__reactInternalMemoizedMergedChildContext=n,It(Rn),It(un),Dt(un,n)):It(Rn),Dt(Rn,a)}var bi=null,Ya=!1,uc=!1;function up(n){bi===null?bi=[n]:bi.push(n)}function gv(n){Ya=!0,up(n)}function ur(){if(!uc&&bi!==null){uc=!0;var n=0,r=dt;try{var a=bi;for(dt=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}bi=null,Ya=!1}catch(d){throw bi!==null&&(bi=bi.slice(n+1)),A(Ce,ur),d}finally{dt=r,uc=!1}}return null}var Ts=[],As=0,qa=null,$a=0,Vn=[],Gn=0,Br=null,Li=1,Di="";function Hr(n,r){Ts[As++]=$a,Ts[As++]=qa,qa=n,$a=r}function cp(n,r,a){Vn[Gn++]=Li,Vn[Gn++]=Di,Vn[Gn++]=Br,Br=n;var u=Li;n=Di;var d=32-St(u)-1;u&=~(1<<d),a+=1;var g=32-St(r)+d;if(30<g){var M=d-d%5;g=(u&(1<<M)-1).toString(32),u>>=M,d-=M,Li=1<<32-St(r)+d|a<<d|u,Di=g+n}else Li=1<<g|a<<d|u,Di=n}function cc(n){n.return!==null&&(Hr(n,1),cp(n,1,0))}function fc(n){for(;n===qa;)qa=Ts[--As],Ts[As]=null,$a=Ts[--As],Ts[As]=null;for(;n===Br;)Br=Vn[--Gn],Vn[Gn]=null,Di=Vn[--Gn],Vn[Gn]=null,Li=Vn[--Gn],Vn[Gn]=null}var Fn=null,On=null,Ot=!1,Jn=null;function fp(n,r){var a=qn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function dp(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Fn=n,On=or(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Fn=n,On=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Br!==null?{id:Li,overflow:Di}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=qn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,Fn=n,On=null,!0):!1;default:return!1}}function dc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function hc(n){if(Ot){var r=On;if(r){var a=r;if(!dp(n,r)){if(dc(n))throw Error(t(418));r=or(a.nextSibling);var u=Fn;r&&dp(n,r)?fp(u,a):(n.flags=n.flags&-4097|2,Ot=!1,Fn=n)}}else{if(dc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ot=!1,Fn=n}}}function hp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Fn=n}function ja(n){if(n!==Fn)return!1;if(!Ot)return hp(n),Ot=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!rc(n.type,n.memoizedProps)),r&&(r=On)){if(dc(n))throw pp(),Error(t(418));for(;r;)fp(n,r),r=or(r.nextSibling)}if(hp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){On=or(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}On=null}}else On=Fn?or(n.stateNode.nextSibling):null;return!0}function pp(){for(var n=On;n;)n=or(n.nextSibling)}function Rs(){On=Fn=null,Ot=!1}function pc(n){Jn===null?Jn=[n]:Jn.push(n)}var _v=P.ReactCurrentBatchConfig;function Oo(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var d=u,g=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===g?r.ref:(r=function(M){var U=d.refs;M===null?delete U[g]:U[g]=M},r._stringRef=g,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ka(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function mp(n){var r=n._init;return r(n._payload)}function gp(n){function r(J,W){if(n){var ne=J.deletions;ne===null?(J.deletions=[W],J.flags|=16):ne.push(W)}}function a(J,W){if(!n)return null;for(;W!==null;)r(J,W),W=W.sibling;return null}function u(J,W){for(J=new Map;W!==null;)W.key!==null?J.set(W.key,W):J.set(W.index,W),W=W.sibling;return J}function d(J,W){return J=_r(J,W),J.index=0,J.sibling=null,J}function g(J,W,ne){return J.index=ne,n?(ne=J.alternate,ne!==null?(ne=ne.index,ne<W?(J.flags|=2,W):ne):(J.flags|=2,W)):(J.flags|=1048576,W)}function M(J){return n&&J.alternate===null&&(J.flags|=2),J}function U(J,W,ne,Ee){return W===null||W.tag!==6?(W=of(ne,J.mode,Ee),W.return=J,W):(W=d(W,ne),W.return=J,W)}function k(J,W,ne,Ee){var Ge=ne.type;return Ge===O?ve(J,W,ne.props.children,Ee,ne.key):W!==null&&(W.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===z&&mp(Ge)===W.type)?(Ee=d(W,ne.props),Ee.ref=Oo(J,W,ne),Ee.return=J,Ee):(Ee=yl(ne.type,ne.key,ne.props,null,J.mode,Ee),Ee.ref=Oo(J,W,ne),Ee.return=J,Ee)}function se(J,W,ne,Ee){return W===null||W.tag!==4||W.stateNode.containerInfo!==ne.containerInfo||W.stateNode.implementation!==ne.implementation?(W=af(ne,J.mode,Ee),W.return=J,W):(W=d(W,ne.children||[]),W.return=J,W)}function ve(J,W,ne,Ee,Ge){return W===null||W.tag!==7?(W=jr(ne,J.mode,Ee,Ge),W.return=J,W):(W=d(W,ne),W.return=J,W)}function ye(J,W,ne){if(typeof W=="string"&&W!==""||typeof W=="number")return W=of(""+W,J.mode,ne),W.return=J,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case Y:return ne=yl(W.type,W.key,W.props,null,J.mode,ne),ne.ref=Oo(J,null,W),ne.return=J,ne;case B:return W=af(W,J.mode,ne),W.return=J,W;case z:var Ee=W._init;return ye(J,Ee(W._payload),ne)}if(We(W)||te(W))return W=jr(W,J.mode,ne,null),W.return=J,W;Ka(J,W)}return null}function ge(J,W,ne,Ee){var Ge=W!==null?W.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number")return Ge!==null?null:U(J,W,""+ne,Ee);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case Y:return ne.key===Ge?k(J,W,ne,Ee):null;case B:return ne.key===Ge?se(J,W,ne,Ee):null;case z:return Ge=ne._init,ge(J,W,Ge(ne._payload),Ee)}if(We(ne)||te(ne))return Ge!==null?null:ve(J,W,ne,Ee,null);Ka(J,ne)}return null}function Ue(J,W,ne,Ee,Ge){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return J=J.get(ne)||null,U(W,J,""+Ee,Ge);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case Y:return J=J.get(Ee.key===null?ne:Ee.key)||null,k(W,J,Ee,Ge);case B:return J=J.get(Ee.key===null?ne:Ee.key)||null,se(W,J,Ee,Ge);case z:var je=Ee._init;return Ue(J,W,ne,je(Ee._payload),Ge)}if(We(Ee)||te(Ee))return J=J.get(ne)||null,ve(W,J,Ee,Ge,null);Ka(W,Ee)}return null}function Be(J,W,ne,Ee){for(var Ge=null,je=null,Ke=W,tt=W=0,tn=null;Ke!==null&&tt<ne.length;tt++){Ke.index>tt?(tn=Ke,Ke=null):tn=Ke.sibling;var Mt=ge(J,Ke,ne[tt],Ee);if(Mt===null){Ke===null&&(Ke=tn);break}n&&Ke&&Mt.alternate===null&&r(J,Ke),W=g(Mt,W,tt),je===null?Ge=Mt:je.sibling=Mt,je=Mt,Ke=tn}if(tt===ne.length)return a(J,Ke),Ot&&Hr(J,tt),Ge;if(Ke===null){for(;tt<ne.length;tt++)Ke=ye(J,ne[tt],Ee),Ke!==null&&(W=g(Ke,W,tt),je===null?Ge=Ke:je.sibling=Ke,je=Ke);return Ot&&Hr(J,tt),Ge}for(Ke=u(J,Ke);tt<ne.length;tt++)tn=Ue(Ke,J,tt,ne[tt],Ee),tn!==null&&(n&&tn.alternate!==null&&Ke.delete(tn.key===null?tt:tn.key),W=g(tn,W,tt),je===null?Ge=tn:je.sibling=tn,je=tn);return n&&Ke.forEach(function(vr){return r(J,vr)}),Ot&&Hr(J,tt),Ge}function He(J,W,ne,Ee){var Ge=te(ne);if(typeof Ge!="function")throw Error(t(150));if(ne=Ge.call(ne),ne==null)throw Error(t(151));for(var je=Ge=null,Ke=W,tt=W=0,tn=null,Mt=ne.next();Ke!==null&&!Mt.done;tt++,Mt=ne.next()){Ke.index>tt?(tn=Ke,Ke=null):tn=Ke.sibling;var vr=ge(J,Ke,Mt.value,Ee);if(vr===null){Ke===null&&(Ke=tn);break}n&&Ke&&vr.alternate===null&&r(J,Ke),W=g(vr,W,tt),je===null?Ge=vr:je.sibling=vr,je=vr,Ke=tn}if(Mt.done)return a(J,Ke),Ot&&Hr(J,tt),Ge;if(Ke===null){for(;!Mt.done;tt++,Mt=ne.next())Mt=ye(J,Mt.value,Ee),Mt!==null&&(W=g(Mt,W,tt),je===null?Ge=Mt:je.sibling=Mt,je=Mt);return Ot&&Hr(J,tt),Ge}for(Ke=u(J,Ke);!Mt.done;tt++,Mt=ne.next())Mt=Ue(Ke,J,tt,Mt.value,Ee),Mt!==null&&(n&&Mt.alternate!==null&&Ke.delete(Mt.key===null?tt:Mt.key),W=g(Mt,W,tt),je===null?Ge=Mt:je.sibling=Mt,je=Mt);return n&&Ke.forEach(function(Kv){return r(J,Kv)}),Ot&&Hr(J,tt),Ge}function Wt(J,W,ne,Ee){if(typeof ne=="object"&&ne!==null&&ne.type===O&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case Y:e:{for(var Ge=ne.key,je=W;je!==null;){if(je.key===Ge){if(Ge=ne.type,Ge===O){if(je.tag===7){a(J,je.sibling),W=d(je,ne.props.children),W.return=J,J=W;break e}}else if(je.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===z&&mp(Ge)===je.type){a(J,je.sibling),W=d(je,ne.props),W.ref=Oo(J,je,ne),W.return=J,J=W;break e}a(J,je);break}else r(J,je);je=je.sibling}ne.type===O?(W=jr(ne.props.children,J.mode,Ee,ne.key),W.return=J,J=W):(Ee=yl(ne.type,ne.key,ne.props,null,J.mode,Ee),Ee.ref=Oo(J,W,ne),Ee.return=J,J=Ee)}return M(J);case B:e:{for(je=ne.key;W!==null;){if(W.key===je)if(W.tag===4&&W.stateNode.containerInfo===ne.containerInfo&&W.stateNode.implementation===ne.implementation){a(J,W.sibling),W=d(W,ne.children||[]),W.return=J,J=W;break e}else{a(J,W);break}else r(J,W);W=W.sibling}W=af(ne,J.mode,Ee),W.return=J,J=W}return M(J);case z:return je=ne._init,Wt(J,W,je(ne._payload),Ee)}if(We(ne))return Be(J,W,ne,Ee);if(te(ne))return He(J,W,ne,Ee);Ka(J,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"?(ne=""+ne,W!==null&&W.tag===6?(a(J,W.sibling),W=d(W,ne),W.return=J,J=W):(a(J,W),W=of(ne,J.mode,Ee),W.return=J,J=W),M(J)):a(J,W)}return Wt}var Cs=gp(!0),_p=gp(!1),Za=ar(null),Qa=null,Ps=null,mc=null;function gc(){mc=Ps=Qa=null}function _c(n){var r=Za.current;It(Za),n._currentValue=r}function vc(n,r,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===a)break;n=n.return}}function bs(n,r){Qa=n,mc=Ps=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&r&&(Pn=!0),n.firstContext=null)}function Wn(n){var r=n._currentValue;if(mc!==n)if(n={context:n,memoizedValue:r,next:null},Ps===null){if(Qa===null)throw Error(t(308));Ps=n,Qa.dependencies={lanes:0,firstContext:n}}else Ps=Ps.next=n;return r}var Vr=null;function xc(n){Vr===null?Vr=[n]:Vr.push(n)}function vp(n,r,a,u){var d=r.interleaved;return d===null?(a.next=a,xc(r)):(a.next=d.next,d.next=a),r.interleaved=a,Ui(n,u)}function Ui(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var cr=!1;function yc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ni(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function fr(n,r,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,xt&2){var d=u.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),u.pending=r,Ui(n,a)}return d=u.interleaved,d===null?(r.next=r,xc(u)):(r.next=d.next,d.next=r),u.interleaved=r,Ui(n,a)}function Ja(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var u=r.lanes;u&=n.pendingLanes,a|=u,r.lanes=a,Or(n,a)}}function yp(n,r){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var M={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=M:g=g.next=M,a=a.next}while(a!==null);g===null?d=g=r:g=g.next=r}else d=g=r;a={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function el(n,r,a,u){var d=n.updateQueue;cr=!1;var g=d.firstBaseUpdate,M=d.lastBaseUpdate,U=d.shared.pending;if(U!==null){d.shared.pending=null;var k=U,se=k.next;k.next=null,M===null?g=se:M.next=se,M=k;var ve=n.alternate;ve!==null&&(ve=ve.updateQueue,U=ve.lastBaseUpdate,U!==M&&(U===null?ve.firstBaseUpdate=se:U.next=se,ve.lastBaseUpdate=k))}if(g!==null){var ye=d.baseState;M=0,ve=se=k=null,U=g;do{var ge=U.lane,Ue=U.eventTime;if((u&ge)===ge){ve!==null&&(ve=ve.next={eventTime:Ue,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Be=n,He=U;switch(ge=r,Ue=a,He.tag){case 1:if(Be=He.payload,typeof Be=="function"){ye=Be.call(Ue,ye,ge);break e}ye=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=He.payload,ge=typeof Be=="function"?Be.call(Ue,ye,ge):Be,ge==null)break e;ye=Q({},ye,ge);break e;case 2:cr=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,ge=d.effects,ge===null?d.effects=[U]:ge.push(U))}else Ue={eventTime:Ue,lane:ge,tag:U.tag,payload:U.payload,callback:U.callback,next:null},ve===null?(se=ve=Ue,k=ye):ve=ve.next=Ue,M|=ge;if(U=U.next,U===null){if(U=d.shared.pending,U===null)break;ge=U,U=ge.next,ge.next=null,d.lastBaseUpdate=ge,d.shared.pending=null}}while(!0);if(ve===null&&(k=ye),d.baseState=k,d.firstBaseUpdate=se,d.lastBaseUpdate=ve,r=d.shared.interleaved,r!==null){d=r;do M|=d.lane,d=d.next;while(d!==r)}else g===null&&(d.shared.lanes=0);Xr|=M,n.lanes=M,n.memoizedState=ye}}function Sp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var u=n[r],d=u.callback;if(d!==null){if(u.callback=null,u=a,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var zo={},_i=ar(zo),ko=ar(zo),Bo=ar(zo);function Gr(n){if(n===zo)throw Error(t(174));return n}function Sc(n,r){switch(Dt(Bo,r),Dt(ko,n),Dt(_i,zo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ve(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Ve(r,n)}It(_i),Dt(_i,r)}function Ls(){It(_i),It(ko),It(Bo)}function Mp(n){Gr(Bo.current);var r=Gr(_i.current),a=Ve(r,n.type);r!==a&&(Dt(ko,n),Dt(_i,a))}function Mc(n){ko.current===n&&(It(_i),It(ko))}var zt=ar(0);function tl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ec=[];function wc(){for(var n=0;n<Ec.length;n++)Ec[n]._workInProgressVersionPrimary=null;Ec.length=0}var nl=P.ReactCurrentDispatcher,Tc=P.ReactCurrentBatchConfig,Wr=0,kt=null,jt=null,Jt=null,il=!1,Ho=!1,Vo=0,vv=0;function cn(){throw Error(t(321))}function Ac(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Qn(n[a],r[a]))return!1;return!0}function Rc(n,r,a,u,d,g){if(Wr=g,kt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,nl.current=n===null||n.memoizedState===null?Mv:Ev,n=a(u,d),Ho){g=0;do{if(Ho=!1,Vo=0,25<=g)throw Error(t(301));g+=1,Jt=jt=null,r.updateQueue=null,nl.current=wv,n=a(u,d)}while(Ho)}if(nl.current=ol,r=jt!==null&&jt.next!==null,Wr=0,Jt=jt=kt=null,il=!1,r)throw Error(t(300));return n}function Cc(){var n=Vo!==0;return Vo=0,n}function vi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?kt.memoizedState=Jt=n:Jt=Jt.next=n,Jt}function Xn(){if(jt===null){var n=kt.alternate;n=n!==null?n.memoizedState:null}else n=jt.next;var r=Jt===null?kt.memoizedState:Jt.next;if(r!==null)Jt=r,jt=n;else{if(n===null)throw Error(t(310));jt=n,n={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},Jt===null?kt.memoizedState=Jt=n:Jt=Jt.next=n}return Jt}function Go(n,r){return typeof r=="function"?r(n):r}function Pc(n){var r=Xn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=jt,d=u.baseQueue,g=a.pending;if(g!==null){if(d!==null){var M=d.next;d.next=g.next,g.next=M}u.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,u=u.baseState;var U=M=null,k=null,se=g;do{var ve=se.lane;if((Wr&ve)===ve)k!==null&&(k=k.next={lane:0,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),u=se.hasEagerState?se.eagerState:n(u,se.action);else{var ye={lane:ve,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null};k===null?(U=k=ye,M=u):k=k.next=ye,kt.lanes|=ve,Xr|=ve}se=se.next}while(se!==null&&se!==g);k===null?M=u:k.next=U,Qn(u,r.memoizedState)||(Pn=!0),r.memoizedState=u,r.baseState=M,r.baseQueue=k,a.lastRenderedState=u}if(n=a.interleaved,n!==null){d=n;do g=d.lane,kt.lanes|=g,Xr|=g,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function bc(n){var r=Xn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,d=a.pending,g=r.memoizedState;if(d!==null){a.pending=null;var M=d=d.next;do g=n(g,M.action),M=M.next;while(M!==d);Qn(g,r.memoizedState)||(Pn=!0),r.memoizedState=g,r.baseQueue===null&&(r.baseState=g),a.lastRenderedState=g}return[g,u]}function Ep(){}function wp(n,r){var a=kt,u=Xn(),d=r(),g=!Qn(u.memoizedState,d);if(g&&(u.memoizedState=d,Pn=!0),u=u.queue,Lc(Rp.bind(null,a,u,n),[n]),u.getSnapshot!==r||g||Jt!==null&&Jt.memoizedState.tag&1){if(a.flags|=2048,Wo(9,Ap.bind(null,a,u,d,r),void 0,null),en===null)throw Error(t(349));Wr&30||Tp(a,r,d)}return d}function Tp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=kt.updateQueue,r===null?(r={lastEffect:null,stores:null},kt.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function Ap(n,r,a,u){r.value=a,r.getSnapshot=u,Cp(r)&&Pp(n)}function Rp(n,r,a){return a(function(){Cp(r)&&Pp(n)})}function Cp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Qn(n,a)}catch{return!0}}function Pp(n){var r=Ui(n,1);r!==null&&ii(r,n,1,-1)}function bp(n){var r=vi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Go,lastRenderedState:n},r.queue=n,n=n.dispatch=Sv.bind(null,kt,n),[r.memoizedState,n]}function Wo(n,r,a,u){return n={tag:n,create:r,destroy:a,deps:u,next:null},r=kt.updateQueue,r===null?(r={lastEffect:null,stores:null},kt.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,r.lastEffect=n)),n}function Lp(){return Xn().memoizedState}function rl(n,r,a,u){var d=vi();kt.flags|=n,d.memoizedState=Wo(1|r,a,void 0,u===void 0?null:u)}function sl(n,r,a,u){var d=Xn();u=u===void 0?null:u;var g=void 0;if(jt!==null){var M=jt.memoizedState;if(g=M.destroy,u!==null&&Ac(u,M.deps)){d.memoizedState=Wo(r,a,g,u);return}}kt.flags|=n,d.memoizedState=Wo(1|r,a,g,u)}function Dp(n,r){return rl(8390656,8,n,r)}function Lc(n,r){return sl(2048,8,n,r)}function Up(n,r){return sl(4,2,n,r)}function Np(n,r){return sl(4,4,n,r)}function Ip(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Fp(n,r,a){return a=a!=null?a.concat([n]):null,sl(4,4,Ip.bind(null,r,n),a)}function Dc(){}function Op(n,r){var a=Xn();r=r===void 0?null:r;var u=a.memoizedState;return u!==null&&r!==null&&Ac(r,u[1])?u[0]:(a.memoizedState=[n,r],n)}function zp(n,r){var a=Xn();r=r===void 0?null:r;var u=a.memoizedState;return u!==null&&r!==null&&Ac(r,u[1])?u[0]:(n=n(),a.memoizedState=[n,r],n)}function kp(n,r,a){return Wr&21?(Qn(a,r)||(a=vn(),kt.lanes|=a,Xr|=a,n.baseState=!0),r):(n.baseState&&(n.baseState=!1,Pn=!0),n.memoizedState=a)}function xv(n,r){var a=dt;dt=a!==0&&4>a?a:4,n(!0);var u=Tc.transition;Tc.transition={};try{n(!1),r()}finally{dt=a,Tc.transition=u}}function Bp(){return Xn().memoizedState}function yv(n,r,a){var u=mr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},Hp(n))Vp(r,a);else if(a=vp(n,r,a,u),a!==null){var d=yn();ii(a,n,u,d),Gp(a,r,u)}}function Sv(n,r,a){var u=mr(n),d={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(Hp(n))Vp(r,d);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=r.lastRenderedReducer,g!==null))try{var M=r.lastRenderedState,U=g(M,a);if(d.hasEagerState=!0,d.eagerState=U,Qn(U,M)){var k=r.interleaved;k===null?(d.next=d,xc(r)):(d.next=k.next,k.next=d),r.interleaved=d;return}}catch{}finally{}a=vp(n,r,d,u),a!==null&&(d=yn(),ii(a,n,u,d),Gp(a,r,u))}}function Hp(n){var r=n.alternate;return n===kt||r!==null&&r===kt}function Vp(n,r){Ho=il=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Gp(n,r,a){if(a&4194240){var u=r.lanes;u&=n.pendingLanes,a|=u,r.lanes=a,Or(n,a)}}var ol={readContext:Wn,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useInsertionEffect:cn,useLayoutEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useMutableSource:cn,useSyncExternalStore:cn,useId:cn,unstable_isNewReconciler:!1},Mv={readContext:Wn,useCallback:function(n,r){return vi().memoizedState=[n,r===void 0?null:r],n},useContext:Wn,useEffect:Dp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,rl(4194308,4,Ip.bind(null,r,n),a)},useLayoutEffect:function(n,r){return rl(4194308,4,n,r)},useInsertionEffect:function(n,r){return rl(4,2,n,r)},useMemo:function(n,r){var a=vi();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var u=vi();return r=a!==void 0?a(r):r,u.memoizedState=u.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},u.queue=n,n=n.dispatch=yv.bind(null,kt,n),[u.memoizedState,n]},useRef:function(n){var r=vi();return n={current:n},r.memoizedState=n},useState:bp,useDebugValue:Dc,useDeferredValue:function(n){return vi().memoizedState=n},useTransition:function(){var n=bp(!1),r=n[0];return n=xv.bind(null,n[1]),vi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var u=kt,d=vi();if(Ot){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),en===null)throw Error(t(349));Wr&30||Tp(u,r,a)}d.memoizedState=a;var g={value:a,getSnapshot:r};return d.queue=g,Dp(Rp.bind(null,u,g,n),[n]),u.flags|=2048,Wo(9,Ap.bind(null,u,g,a,r),void 0,null),a},useId:function(){var n=vi(),r=en.identifierPrefix;if(Ot){var a=Di,u=Li;a=(u&~(1<<32-St(u)-1)).toString(32)+a,r=":"+r+"R"+a,a=Vo++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=vv++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Ev={readContext:Wn,useCallback:Op,useContext:Wn,useEffect:Lc,useImperativeHandle:Fp,useInsertionEffect:Up,useLayoutEffect:Np,useMemo:zp,useReducer:Pc,useRef:Lp,useState:function(){return Pc(Go)},useDebugValue:Dc,useDeferredValue:function(n){var r=Xn();return kp(r,jt.memoizedState,n)},useTransition:function(){var n=Pc(Go)[0],r=Xn().memoizedState;return[n,r]},useMutableSource:Ep,useSyncExternalStore:wp,useId:Bp,unstable_isNewReconciler:!1},wv={readContext:Wn,useCallback:Op,useContext:Wn,useEffect:Lc,useImperativeHandle:Fp,useInsertionEffect:Up,useLayoutEffect:Np,useMemo:zp,useReducer:bc,useRef:Lp,useState:function(){return bc(Go)},useDebugValue:Dc,useDeferredValue:function(n){var r=Xn();return jt===null?r.memoizedState=n:kp(r,jt.memoizedState,n)},useTransition:function(){var n=bc(Go)[0],r=Xn().memoizedState;return[n,r]},useMutableSource:Ep,useSyncExternalStore:wp,useId:Bp,unstable_isNewReconciler:!1};function ei(n,r){if(n&&n.defaultProps){r=Q({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function Uc(n,r,a,u){r=n.memoizedState,a=a(u,r),a=a==null?r:Q({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var al={isMounted:function(n){return(n=n._reactInternals)?mi(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var u=yn(),d=mr(n),g=Ni(u,d);g.payload=r,a!=null&&(g.callback=a),r=fr(n,g,d),r!==null&&(ii(r,n,d,u),Ja(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var u=yn(),d=mr(n),g=Ni(u,d);g.tag=1,g.payload=r,a!=null&&(g.callback=a),r=fr(n,g,d),r!==null&&(ii(r,n,d,u),Ja(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=yn(),u=mr(n),d=Ni(a,u);d.tag=2,r!=null&&(d.callback=r),r=fr(n,d,u),r!==null&&(ii(r,n,u,a),Ja(r,n,u))}};function Wp(n,r,a,u,d,g,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,M):r.prototype&&r.prototype.isPureReactComponent?!bo(a,u)||!bo(d,g):!0}function Xp(n,r,a){var u=!1,d=lr,g=r.contextType;return typeof g=="object"&&g!==null?g=Wn(g):(d=Cn(r)?kr:un.current,u=r.contextTypes,g=(u=u!=null)?ws(n,d):lr),r=new r(a,g),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=al,n.stateNode=r,r._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=g),r}function Yp(n,r,a,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,u),r.state!==n&&al.enqueueReplaceState(r,r.state,null)}function Nc(n,r,a,u){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},yc(n);var g=r.contextType;typeof g=="object"&&g!==null?d.context=Wn(g):(g=Cn(r)?kr:un.current,d.context=ws(n,g)),d.state=n.memoizedState,g=r.getDerivedStateFromProps,typeof g=="function"&&(Uc(n,r,g,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&al.enqueueReplaceState(d,d.state,null),el(n,a,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ds(n,r){try{var a="",u=r;do a+=ce(u),u=u.return;while(u);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:r,stack:d,digest:null}}function Ic(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function Fc(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var Tv=typeof WeakMap=="function"?WeakMap:Map;function qp(n,r,a){a=Ni(-1,a),a.tag=3,a.payload={element:null};var u=r.value;return a.callback=function(){pl||(pl=!0,Zc=u),Fc(n,r)},a}function $p(n,r,a){a=Ni(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=r.value;a.payload=function(){return u(d)},a.callback=function(){Fc(n,r)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Fc(n,r),typeof u!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var M=r.stack;this.componentDidCatch(r.value,{componentStack:M!==null?M:""})}),a}function jp(n,r,a){var u=n.pingCache;if(u===null){u=n.pingCache=new Tv;var d=new Set;u.set(r,d)}else d=u.get(r),d===void 0&&(d=new Set,u.set(r,d));d.has(a)||(d.add(a),n=kv.bind(null,n,r,a),r.then(n,n))}function Kp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Zp(n,r,a,u,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Ni(-1,1),r.tag=2,fr(a,r,1))),a.lanes|=1),n)}var Av=P.ReactCurrentOwner,Pn=!1;function xn(n,r,a,u){r.child=n===null?_p(r,null,a,u):Cs(r,n.child,a,u)}function Qp(n,r,a,u,d){a=a.render;var g=r.ref;return bs(r,d),u=Rc(n,r,a,u,g,d),a=Cc(),n!==null&&!Pn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Ii(n,r,d)):(Ot&&a&&cc(r),r.flags|=1,xn(n,r,u,d),r.child)}function Jp(n,r,a,u,d){if(n===null){var g=a.type;return typeof g=="function"&&!sf(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=g,em(n,r,g,u,d)):(n=yl(a.type,null,u,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(g=n.child,!(n.lanes&d)){var M=g.memoizedProps;if(a=a.compare,a=a!==null?a:bo,a(M,u)&&n.ref===r.ref)return Ii(n,r,d)}return r.flags|=1,n=_r(g,u),n.ref=r.ref,n.return=r,r.child=n}function em(n,r,a,u,d){if(n!==null){var g=n.memoizedProps;if(bo(g,u)&&n.ref===r.ref)if(Pn=!1,r.pendingProps=u=g,(n.lanes&d)!==0)n.flags&131072&&(Pn=!0);else return r.lanes=n.lanes,Ii(n,r,d)}return Oc(n,r,a,u,d)}function tm(n,r,a){var u=r.pendingProps,d=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(Ns,zn),zn|=a;else{if(!(a&1073741824))return n=g!==null?g.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Dt(Ns,zn),zn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:a,Dt(Ns,zn),zn|=u}else g!==null?(u=g.baseLanes|a,r.memoizedState=null):u=a,Dt(Ns,zn),zn|=u;return xn(n,r,d,a),r.child}function nm(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function Oc(n,r,a,u,d){var g=Cn(a)?kr:un.current;return g=ws(r,g),bs(r,d),a=Rc(n,r,a,u,g,d),u=Cc(),n!==null&&!Pn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Ii(n,r,d)):(Ot&&u&&cc(r),r.flags|=1,xn(n,r,a,d),r.child)}function im(n,r,a,u,d){if(Cn(a)){var g=!0;Xa(r)}else g=!1;if(bs(r,d),r.stateNode===null)ul(n,r),Xp(r,a,u),Nc(r,a,u,d),u=!0;else if(n===null){var M=r.stateNode,U=r.memoizedProps;M.props=U;var k=M.context,se=a.contextType;typeof se=="object"&&se!==null?se=Wn(se):(se=Cn(a)?kr:un.current,se=ws(r,se));var ve=a.getDerivedStateFromProps,ye=typeof ve=="function"||typeof M.getSnapshotBeforeUpdate=="function";ye||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==u||k!==se)&&Yp(r,M,u,se),cr=!1;var ge=r.memoizedState;M.state=ge,el(r,u,M,d),k=r.memoizedState,U!==u||ge!==k||Rn.current||cr?(typeof ve=="function"&&(Uc(r,a,ve,u),k=r.memoizedState),(U=cr||Wp(r,a,U,u,ge,k,se))?(ye||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(r.flags|=4194308)):(typeof M.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=k),M.props=u,M.state=k,M.context=se,u=U):(typeof M.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{M=r.stateNode,xp(n,r),U=r.memoizedProps,se=r.type===r.elementType?U:ei(r.type,U),M.props=se,ye=r.pendingProps,ge=M.context,k=a.contextType,typeof k=="object"&&k!==null?k=Wn(k):(k=Cn(a)?kr:un.current,k=ws(r,k));var Ue=a.getDerivedStateFromProps;(ve=typeof Ue=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==ye||ge!==k)&&Yp(r,M,u,k),cr=!1,ge=r.memoizedState,M.state=ge,el(r,u,M,d);var Be=r.memoizedState;U!==ye||ge!==Be||Rn.current||cr?(typeof Ue=="function"&&(Uc(r,a,Ue,u),Be=r.memoizedState),(se=cr||Wp(r,a,se,u,ge,Be,k)||!1)?(ve||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(u,Be,k),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(u,Be,k)),typeof M.componentDidUpdate=="function"&&(r.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof M.componentDidUpdate!="function"||U===n.memoizedProps&&ge===n.memoizedState||(r.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&ge===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=Be),M.props=u,M.state=Be,M.context=k,u=se):(typeof M.componentDidUpdate!="function"||U===n.memoizedProps&&ge===n.memoizedState||(r.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&ge===n.memoizedState||(r.flags|=1024),u=!1)}return zc(n,r,a,u,g,d)}function zc(n,r,a,u,d,g){nm(n,r);var M=(r.flags&128)!==0;if(!u&&!M)return d&&lp(r,a,!1),Ii(n,r,g);u=r.stateNode,Av.current=r;var U=M&&typeof a.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,n!==null&&M?(r.child=Cs(r,n.child,null,g),r.child=Cs(r,null,U,g)):xn(n,r,U,g),r.memoizedState=u.state,d&&lp(r,a,!0),r.child}function rm(n){var r=n.stateNode;r.pendingContext?op(n,r.pendingContext,r.pendingContext!==r.context):r.context&&op(n,r.context,!1),Sc(n,r.containerInfo)}function sm(n,r,a,u,d){return Rs(),pc(d),r.flags|=256,xn(n,r,a,u),r.child}var kc={dehydrated:null,treeContext:null,retryLane:0};function Bc(n){return{baseLanes:n,cachePool:null,transitions:null}}function om(n,r,a){var u=r.pendingProps,d=zt.current,g=!1,M=(r.flags&128)!==0,U;if((U=M)||(U=n!==null&&n.memoizedState===null?!1:(d&2)!==0),U?(g=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Dt(zt,d&1),n===null)return hc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(r.mode&1?n.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(M=u.children,n=u.fallback,g?(u=r.mode,g=r.child,M={mode:"hidden",children:M},!(u&1)&&g!==null?(g.childLanes=0,g.pendingProps=M):g=Sl(M,u,0,null),n=jr(n,u,a,null),g.return=r,n.return=r,g.sibling=n,r.child=g,r.child.memoizedState=Bc(a),r.memoizedState=kc,n):Hc(r,M));if(d=n.memoizedState,d!==null&&(U=d.dehydrated,U!==null))return Rv(n,r,M,u,U,d,a);if(g){g=u.fallback,M=r.mode,d=n.child,U=d.sibling;var k={mode:"hidden",children:u.children};return!(M&1)&&r.child!==d?(u=r.child,u.childLanes=0,u.pendingProps=k,r.deletions=null):(u=_r(d,k),u.subtreeFlags=d.subtreeFlags&14680064),U!==null?g=_r(U,g):(g=jr(g,M,a,null),g.flags|=2),g.return=r,u.return=r,u.sibling=g,r.child=u,u=g,g=r.child,M=n.child.memoizedState,M=M===null?Bc(a):{baseLanes:M.baseLanes|a,cachePool:null,transitions:M.transitions},g.memoizedState=M,g.childLanes=n.childLanes&~a,r.memoizedState=kc,u}return g=n.child,n=g.sibling,u=_r(g,{mode:"visible",children:u.children}),!(r.mode&1)&&(u.lanes=a),u.return=r,u.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=u,r.memoizedState=null,u}function Hc(n,r){return r=Sl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function ll(n,r,a,u){return u!==null&&pc(u),Cs(r,n.child,null,a),n=Hc(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Rv(n,r,a,u,d,g,M){if(a)return r.flags&256?(r.flags&=-257,u=Ic(Error(t(422))),ll(n,r,M,u)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(g=u.fallback,d=r.mode,u=Sl({mode:"visible",children:u.children},d,0,null),g=jr(g,d,M,null),g.flags|=2,u.return=r,g.return=r,u.sibling=g,r.child=u,r.mode&1&&Cs(r,n.child,null,M),r.child.memoizedState=Bc(M),r.memoizedState=kc,g);if(!(r.mode&1))return ll(n,r,M,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var U=u.dgst;return u=U,g=Error(t(419)),u=Ic(g,u,void 0),ll(n,r,M,u)}if(U=(M&n.childLanes)!==0,Pn||U){if(u=en,u!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(u.suspendedLanes|M)?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,Ui(n,d),ii(u,n,d,-1))}return rf(),u=Ic(Error(t(421))),ll(n,r,M,u)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=Bv.bind(null,n),d._reactRetry=r,null):(n=g.treeContext,On=or(d.nextSibling),Fn=r,Ot=!0,Jn=null,n!==null&&(Vn[Gn++]=Li,Vn[Gn++]=Di,Vn[Gn++]=Br,Li=n.id,Di=n.overflow,Br=r),r=Hc(r,u.children),r.flags|=4096,r)}function am(n,r,a){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),vc(n.return,r,a)}function Vc(n,r,a,u,d){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:d}:(g.isBackwards=r,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=a,g.tailMode=d)}function lm(n,r,a){var u=r.pendingProps,d=u.revealOrder,g=u.tail;if(xn(n,r,u.children,a),u=zt.current,u&2)u=u&1|2,r.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&am(n,a,r);else if(n.tag===19)am(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Dt(zt,u),!(r.mode&1))r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&tl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),Vc(r,!1,d,a,g);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&tl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Vc(r,!0,a,null,g);break;case"together":Vc(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ul(n,r){!(r.mode&1)&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Ii(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Xr|=r.lanes,!(a&r.childLanes))return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=_r(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=_r(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function Cv(n,r,a){switch(r.tag){case 3:rm(r),Rs();break;case 5:Mp(r);break;case 1:Cn(r.type)&&Xa(r);break;case 4:Sc(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,d=r.memoizedProps.value;Dt(Za,u._currentValue),u._currentValue=d;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(Dt(zt,zt.current&1),r.flags|=128,null):a&r.child.childLanes?om(n,r,a):(Dt(zt,zt.current&1),n=Ii(n,r,a),n!==null?n.sibling:null);Dt(zt,zt.current&1);break;case 19:if(u=(a&r.childLanes)!==0,n.flags&128){if(u)return lm(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Dt(zt,zt.current),u)break;return null;case 22:case 23:return r.lanes=0,tm(n,r,a)}return Ii(n,r,a)}var um,Gc,cm,fm;um=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Gc=function(){},cm=function(n,r,a,u){var d=n.memoizedProps;if(d!==u){n=r.stateNode,Gr(_i.current);var g=null;switch(a){case"input":d=H(n,d),u=H(n,u),g=[];break;case"select":d=Q({},d,{value:void 0}),u=Q({},u,{value:void 0}),g=[];break;case"textarea":d=w(n,d),u=w(n,u),g=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Va)}ut(a,u);var M;a=null;for(se in d)if(!u.hasOwnProperty(se)&&d.hasOwnProperty(se)&&d[se]!=null)if(se==="style"){var U=d[se];for(M in U)U.hasOwnProperty(M)&&(a||(a={}),a[M]="")}else se!=="dangerouslySetInnerHTML"&&se!=="children"&&se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&se!=="autoFocus"&&(o.hasOwnProperty(se)?g||(g=[]):(g=g||[]).push(se,null));for(se in u){var k=u[se];if(U=d!=null?d[se]:void 0,u.hasOwnProperty(se)&&k!==U&&(k!=null||U!=null))if(se==="style")if(U){for(M in U)!U.hasOwnProperty(M)||k&&k.hasOwnProperty(M)||(a||(a={}),a[M]="");for(M in k)k.hasOwnProperty(M)&&U[M]!==k[M]&&(a||(a={}),a[M]=k[M])}else a||(g||(g=[]),g.push(se,a)),a=k;else se==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,U=U?U.__html:void 0,k!=null&&U!==k&&(g=g||[]).push(se,k)):se==="children"?typeof k!="string"&&typeof k!="number"||(g=g||[]).push(se,""+k):se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&(o.hasOwnProperty(se)?(k!=null&&se==="onScroll"&&Nt("scroll",n),g||U===k||(g=[])):(g=g||[]).push(se,k))}a&&(g=g||[]).push("style",a);var se=g;(r.updateQueue=se)&&(r.flags|=4)}},fm=function(n,r,a,u){a!==u&&(r.flags|=4)};function Xo(n,r){if(!Ot)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function fn(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=a,r}function Pv(n,r,a){var u=r.pendingProps;switch(fc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(r),null;case 1:return Cn(r.type)&&Wa(),fn(r),null;case 3:return u=r.stateNode,Ls(),It(Rn),It(un),wc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(ja(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Jn!==null&&(ef(Jn),Jn=null))),Gc(n,r),fn(r),null;case 5:Mc(r);var d=Gr(Bo.current);if(a=r.type,n!==null&&r.stateNode!=null)cm(n,r,a,u,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(t(166));return fn(r),null}if(n=Gr(_i.current),ja(r)){u=r.stateNode,a=r.type;var g=r.memoizedProps;switch(u[gi]=r,u[Io]=g,n=(r.mode&1)!==0,a){case"dialog":Nt("cancel",u),Nt("close",u);break;case"iframe":case"object":case"embed":Nt("load",u);break;case"video":case"audio":for(d=0;d<Do.length;d++)Nt(Do[d],u);break;case"source":Nt("error",u);break;case"img":case"image":case"link":Nt("error",u),Nt("load",u);break;case"details":Nt("toggle",u);break;case"input":mn(u,g),Nt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},Nt("invalid",u);break;case"textarea":ie(u,g),Nt("invalid",u)}ut(a,g),d=null;for(var M in g)if(g.hasOwnProperty(M)){var U=g[M];M==="children"?typeof U=="string"?u.textContent!==U&&(g.suppressHydrationWarning!==!0&&Ha(u.textContent,U,n),d=["children",U]):typeof U=="number"&&u.textContent!==""+U&&(g.suppressHydrationWarning!==!0&&Ha(u.textContent,U,n),d=["children",""+U]):o.hasOwnProperty(M)&&U!=null&&M==="onScroll"&&Nt("scroll",u)}switch(a){case"input":Rt(u),Ye(u,g,!0);break;case"textarea":Rt(u),_e(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=Va)}u=d,r.updateQueue=u,u!==null&&(r.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=de(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=M.createElement(a,{is:u.is}):(n=M.createElement(a),a==="select"&&(M=n,u.multiple?M.multiple=!0:u.size&&(M.size=u.size))):n=M.createElementNS(n,a),n[gi]=r,n[Io]=u,um(n,r,!1,!1),r.stateNode=n;e:{switch(M=nt(a,u),a){case"dialog":Nt("cancel",n),Nt("close",n),d=u;break;case"iframe":case"object":case"embed":Nt("load",n),d=u;break;case"video":case"audio":for(d=0;d<Do.length;d++)Nt(Do[d],n);d=u;break;case"source":Nt("error",n),d=u;break;case"img":case"image":case"link":Nt("error",n),Nt("load",n),d=u;break;case"details":Nt("toggle",n),d=u;break;case"input":mn(n,u),d=H(n,u),Nt("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=Q({},u,{value:void 0}),Nt("invalid",n);break;case"textarea":ie(n,u),d=w(n,u),Nt("invalid",n);break;default:d=u}ut(a,d),U=d;for(g in U)if(U.hasOwnProperty(g)){var k=U[g];g==="style"?Qe(n,k):g==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Ie(n,k)):g==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&at(n,k):typeof k=="number"&&at(n,""+k):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?k!=null&&g==="onScroll"&&Nt("scroll",n):k!=null&&D(n,g,k,M))}switch(a){case"input":Rt(n),Ye(n,u,!1);break;case"textarea":Rt(n),_e(n);break;case"option":u.value!=null&&n.setAttribute("value",""+we(u.value));break;case"select":n.multiple=!!u.multiple,g=u.value,g!=null?b(n,!!u.multiple,g,!1):u.defaultValue!=null&&b(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Va)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return fn(r),null;case 6:if(n&&r.stateNode!=null)fm(n,r,n.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(t(166));if(a=Gr(Bo.current),Gr(_i.current),ja(r)){if(u=r.stateNode,a=r.memoizedProps,u[gi]=r,(g=u.nodeValue!==a)&&(n=Fn,n!==null))switch(n.tag){case 3:Ha(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ha(u.nodeValue,a,(n.mode&1)!==0)}g&&(r.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[gi]=r,r.stateNode=u}return fn(r),null;case 13:if(It(zt),u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ot&&On!==null&&r.mode&1&&!(r.flags&128))pp(),Rs(),r.flags|=98560,g=!1;else if(g=ja(r),u!==null&&u.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=r.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[gi]=r}else Rs(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;fn(r),g=!1}else Jn!==null&&(ef(Jn),Jn=null),g=!0;if(!g)return r.flags&65536?r:null}return r.flags&128?(r.lanes=a,r):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(r.child.flags|=8192,r.mode&1&&(n===null||zt.current&1?Kt===0&&(Kt=3):rf())),r.updateQueue!==null&&(r.flags|=4),fn(r),null);case 4:return Ls(),Gc(n,r),n===null&&Uo(r.stateNode.containerInfo),fn(r),null;case 10:return _c(r.type._context),fn(r),null;case 17:return Cn(r.type)&&Wa(),fn(r),null;case 19:if(It(zt),g=r.memoizedState,g===null)return fn(r),null;if(u=(r.flags&128)!==0,M=g.rendering,M===null)if(u)Xo(g,!1);else{if(Kt!==0||n!==null&&n.flags&128)for(n=r.child;n!==null;){if(M=tl(n),M!==null){for(r.flags|=128,Xo(g,!1),u=M.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=a,a=r.child;a!==null;)g=a,n=u,g.flags&=14680066,M=g.alternate,M===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=M.childLanes,g.lanes=M.lanes,g.child=M.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=M.memoizedProps,g.memoizedState=M.memoizedState,g.updateQueue=M.updateQueue,g.type=M.type,n=M.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Dt(zt,zt.current&1|2),r.child}n=n.sibling}g.tail!==null&&G()>Is&&(r.flags|=128,u=!0,Xo(g,!1),r.lanes=4194304)}else{if(!u)if(n=tl(M),n!==null){if(r.flags|=128,u=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),Xo(g,!0),g.tail===null&&g.tailMode==="hidden"&&!M.alternate&&!Ot)return fn(r),null}else 2*G()-g.renderingStartTime>Is&&a!==1073741824&&(r.flags|=128,u=!0,Xo(g,!1),r.lanes=4194304);g.isBackwards?(M.sibling=r.child,r.child=M):(a=g.last,a!==null?a.sibling=M:r.child=M,g.last=M)}return g.tail!==null?(r=g.tail,g.rendering=r,g.tail=r.sibling,g.renderingStartTime=G(),r.sibling=null,a=zt.current,Dt(zt,u?a&1|2:a&1),r):(fn(r),null);case 22:case 23:return nf(),u=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(r.flags|=8192),u&&r.mode&1?zn&1073741824&&(fn(r),r.subtreeFlags&6&&(r.flags|=8192)):fn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function bv(n,r){switch(fc(r),r.tag){case 1:return Cn(r.type)&&Wa(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ls(),It(Rn),It(un),wc(),n=r.flags,n&65536&&!(n&128)?(r.flags=n&-65537|128,r):null;case 5:return Mc(r),null;case 13:if(It(zt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Rs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return It(zt),null;case 4:return Ls(),null;case 10:return _c(r.type._context),null;case 22:case 23:return nf(),null;case 24:return null;default:return null}}var cl=!1,dn=!1,Lv=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Us(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){Vt(n,r,u)}else a.current=null}function Wc(n,r,a){try{a()}catch(u){Vt(n,r,u)}}var dm=!1;function Dv(n,r){if(nc=ba,n=Wh(),$u(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var d=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var M=0,U=-1,k=-1,se=0,ve=0,ye=n,ge=null;t:for(;;){for(var Ue;ye!==a||d!==0&&ye.nodeType!==3||(U=M+d),ye!==g||u!==0&&ye.nodeType!==3||(k=M+u),ye.nodeType===3&&(M+=ye.nodeValue.length),(Ue=ye.firstChild)!==null;)ge=ye,ye=Ue;for(;;){if(ye===n)break t;if(ge===a&&++se===d&&(U=M),ge===g&&++ve===u&&(k=M),(Ue=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=Ue}a=U===-1||k===-1?null:{start:U,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(ic={focusedElem:n,selectionRange:a},ba=!1,Oe=r;Oe!==null;)if(r=Oe,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Oe=n;else for(;Oe!==null;){r=Oe;try{var Be=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var He=Be.memoizedProps,Wt=Be.memoizedState,J=r.stateNode,W=J.getSnapshotBeforeUpdate(r.elementType===r.type?He:ei(r.type,He),Wt);J.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var ne=r.stateNode.containerInfo;ne.nodeType===1?ne.textContent="":ne.nodeType===9&&ne.documentElement&&ne.removeChild(ne.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){Vt(r,r.return,Ee)}if(n=r.sibling,n!==null){n.return=r.return,Oe=n;break}Oe=r.return}return Be=dm,dm=!1,Be}function Yo(n,r,a){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var g=d.destroy;d.destroy=void 0,g!==void 0&&Wc(r,a,g)}d=d.next}while(d!==u)}}function fl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==r)}}function Xc(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function hm(n){var r=n.alternate;r!==null&&(n.alternate=null,hm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[gi],delete r[Io],delete r[ac],delete r[pv],delete r[mv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function pm(n){return n.tag===5||n.tag===3||n.tag===4}function mm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||pm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Yc(n,r,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Va));else if(u!==4&&(n=n.child,n!==null))for(Yc(n,r,a),n=n.sibling;n!==null;)Yc(n,r,a),n=n.sibling}function qc(n,r,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(qc(n,r,a),n=n.sibling;n!==null;)qc(n,r,a),n=n.sibling}var sn=null,ti=!1;function dr(n,r,a){for(a=a.child;a!==null;)gm(n,r,a),a=a.sibling}function gm(n,r,a){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(Xe,a)}catch{}switch(a.tag){case 5:dn||Us(a,r);case 6:var u=sn,d=ti;sn=null,dr(n,r,a),sn=u,ti=d,sn!==null&&(ti?(n=sn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):sn.removeChild(a.stateNode));break;case 18:sn!==null&&(ti?(n=sn,a=a.stateNode,n.nodeType===8?oc(n.parentNode,a):n.nodeType===1&&oc(n,a),wo(n)):oc(sn,a.stateNode));break;case 4:u=sn,d=ti,sn=a.stateNode.containerInfo,ti=!0,dr(n,r,a),sn=u,ti=d;break;case 0:case 11:case 14:case 15:if(!dn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var g=d,M=g.destroy;g=g.tag,M!==void 0&&(g&2||g&4)&&Wc(a,r,M),d=d.next}while(d!==u)}dr(n,r,a);break;case 1:if(!dn&&(Us(a,r),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(U){Vt(a,r,U)}dr(n,r,a);break;case 21:dr(n,r,a);break;case 22:a.mode&1?(dn=(u=dn)||a.memoizedState!==null,dr(n,r,a),dn=u):dr(n,r,a);break;default:dr(n,r,a)}}function _m(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Lv),r.forEach(function(u){var d=Hv.bind(null,n,u);a.has(u)||(a.add(u),u.then(d,d))})}}function ni(n,r){var a=r.deletions;if(a!==null)for(var u=0;u<a.length;u++){var d=a[u];try{var g=n,M=r,U=M;e:for(;U!==null;){switch(U.tag){case 5:sn=U.stateNode,ti=!1;break e;case 3:sn=U.stateNode.containerInfo,ti=!0;break e;case 4:sn=U.stateNode.containerInfo,ti=!0;break e}U=U.return}if(sn===null)throw Error(t(160));gm(g,M,d),sn=null,ti=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(se){Vt(d,r,se)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)vm(r,n),r=r.sibling}function vm(n,r){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ni(r,n),xi(n),u&4){try{Yo(3,n,n.return),fl(3,n)}catch(He){Vt(n,n.return,He)}try{Yo(5,n,n.return)}catch(He){Vt(n,n.return,He)}}break;case 1:ni(r,n),xi(n),u&512&&a!==null&&Us(a,a.return);break;case 5:if(ni(r,n),xi(n),u&512&&a!==null&&Us(a,a.return),n.flags&32){var d=n.stateNode;try{at(d,"")}catch(He){Vt(n,n.return,He)}}if(u&4&&(d=n.stateNode,d!=null)){var g=n.memoizedProps,M=a!==null?a.memoizedProps:g,U=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{U==="input"&&g.type==="radio"&&g.name!=null&&ft(d,g),nt(U,M);var se=nt(U,g);for(M=0;M<k.length;M+=2){var ve=k[M],ye=k[M+1];ve==="style"?Qe(d,ye):ve==="dangerouslySetInnerHTML"?Ie(d,ye):ve==="children"?at(d,ye):D(d,ve,ye,se)}switch(U){case"input":lt(d,g);break;case"textarea":me(d,g);break;case"select":var ge=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var Ue=g.value;Ue!=null?b(d,!!g.multiple,Ue,!1):ge!==!!g.multiple&&(g.defaultValue!=null?b(d,!!g.multiple,g.defaultValue,!0):b(d,!!g.multiple,g.multiple?[]:"",!1))}d[Io]=g}catch(He){Vt(n,n.return,He)}}break;case 6:if(ni(r,n),xi(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,g=n.memoizedProps;try{d.nodeValue=g}catch(He){Vt(n,n.return,He)}}break;case 3:if(ni(r,n),xi(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{wo(r.containerInfo)}catch(He){Vt(n,n.return,He)}break;case 4:ni(r,n),xi(n);break;case 13:ni(r,n),xi(n),d=n.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(Kc=G())),u&4&&_m(n);break;case 22:if(ve=a!==null&&a.memoizedState!==null,n.mode&1?(dn=(se=dn)||ve,ni(r,n),dn=se):ni(r,n),xi(n),u&8192){if(se=n.memoizedState!==null,(n.stateNode.isHidden=se)&&!ve&&n.mode&1)for(Oe=n,ve=n.child;ve!==null;){for(ye=Oe=ve;Oe!==null;){switch(ge=Oe,Ue=ge.child,ge.tag){case 0:case 11:case 14:case 15:Yo(4,ge,ge.return);break;case 1:Us(ge,ge.return);var Be=ge.stateNode;if(typeof Be.componentWillUnmount=="function"){u=ge,a=ge.return;try{r=u,Be.props=r.memoizedProps,Be.state=r.memoizedState,Be.componentWillUnmount()}catch(He){Vt(u,a,He)}}break;case 5:Us(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Sm(ye);continue}}Ue!==null?(Ue.return=ge,Oe=Ue):Sm(ye)}ve=ve.sibling}e:for(ve=null,ye=n;;){if(ye.tag===5){if(ve===null){ve=ye;try{d=ye.stateNode,se?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(U=ye.stateNode,k=ye.memoizedProps.style,M=k!=null&&k.hasOwnProperty("display")?k.display:null,U.style.display=$e("display",M))}catch(He){Vt(n,n.return,He)}}}else if(ye.tag===6){if(ve===null)try{ye.stateNode.nodeValue=se?"":ye.memoizedProps}catch(He){Vt(n,n.return,He)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;ve===ye&&(ve=null),ye=ye.return}ve===ye&&(ve=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:ni(r,n),xi(n),u&4&&_m(n);break;case 21:break;default:ni(r,n),xi(n)}}function xi(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(pm(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(at(d,""),u.flags&=-33);var g=mm(n);qc(n,g,d);break;case 3:case 4:var M=u.stateNode.containerInfo,U=mm(n);Yc(n,U,M);break;default:throw Error(t(161))}}catch(k){Vt(n,n.return,k)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Uv(n,r,a){Oe=n,xm(n)}function xm(n,r,a){for(var u=(n.mode&1)!==0;Oe!==null;){var d=Oe,g=d.child;if(d.tag===22&&u){var M=d.memoizedState!==null||cl;if(!M){var U=d.alternate,k=U!==null&&U.memoizedState!==null||dn;U=cl;var se=dn;if(cl=M,(dn=k)&&!se)for(Oe=d;Oe!==null;)M=Oe,k=M.child,M.tag===22&&M.memoizedState!==null?Mm(d):k!==null?(k.return=M,Oe=k):Mm(d);for(;g!==null;)Oe=g,xm(g),g=g.sibling;Oe=d,cl=U,dn=se}ym(n)}else d.subtreeFlags&8772&&g!==null?(g.return=d,Oe=g):ym(n)}}function ym(n){for(;Oe!==null;){var r=Oe;if(r.flags&8772){var a=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:dn||fl(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!dn)if(a===null)u.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:ei(r.type,a.memoizedProps);u.componentDidUpdate(d,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=r.updateQueue;g!==null&&Sp(r,g,u);break;case 3:var M=r.updateQueue;if(M!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Sp(r,M,a)}break;case 5:var U=r.stateNode;if(a===null&&r.flags&4){a=U;var k=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var se=r.alternate;if(se!==null){var ve=se.memoizedState;if(ve!==null){var ye=ve.dehydrated;ye!==null&&wo(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}dn||r.flags&512&&Xc(r)}catch(ge){Vt(r,r.return,ge)}}if(r===n){Oe=null;break}if(a=r.sibling,a!==null){a.return=r.return,Oe=a;break}Oe=r.return}}function Sm(n){for(;Oe!==null;){var r=Oe;if(r===n){Oe=null;break}var a=r.sibling;if(a!==null){a.return=r.return,Oe=a;break}Oe=r.return}}function Mm(n){for(;Oe!==null;){var r=Oe;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{fl(4,r)}catch(k){Vt(r,a,k)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var d=r.return;try{u.componentDidMount()}catch(k){Vt(r,d,k)}}var g=r.return;try{Xc(r)}catch(k){Vt(r,g,k)}break;case 5:var M=r.return;try{Xc(r)}catch(k){Vt(r,M,k)}}}catch(k){Vt(r,r.return,k)}if(r===n){Oe=null;break}var U=r.sibling;if(U!==null){U.return=r.return,Oe=U;break}Oe=r.return}}var Nv=Math.ceil,dl=P.ReactCurrentDispatcher,$c=P.ReactCurrentOwner,Yn=P.ReactCurrentBatchConfig,xt=0,en=null,Yt=null,on=0,zn=0,Ns=ar(0),Kt=0,qo=null,Xr=0,hl=0,jc=0,$o=null,bn=null,Kc=0,Is=1/0,Fi=null,pl=!1,Zc=null,hr=null,ml=!1,pr=null,gl=0,jo=0,Qc=null,_l=-1,vl=0;function yn(){return xt&6?G():_l!==-1?_l:_l=G()}function mr(n){return n.mode&1?xt&2&&on!==0?on&-on:_v.transition!==null?(vl===0&&(vl=vn()),vl):(n=dt,n!==0||(n=window.event,n=n===void 0?16:wh(n.type)),n):1}function ii(n,r,a,u){if(50<jo)throw jo=0,Qc=null,Error(t(185));Gt(n,a,u),(!(xt&2)||n!==en)&&(n===en&&(!(xt&2)&&(hl|=a),Kt===4&&gr(n,on)),Ln(n,u),a===1&&xt===0&&!(r.mode&1)&&(Is=G()+500,Ya&&ur()))}function Ln(n,r){var a=n.callbackNode;Fr(n,r);var u=Zn(n,n===en?on:0);if(u===0)a!==null&&q(a),n.callbackNode=null,n.callbackPriority=0;else if(r=u&-u,n.callbackPriority!==r){if(a!=null&&q(a),r===1)n.tag===0?gv(wm.bind(null,n)):up(wm.bind(null,n)),dv(function(){!(xt&6)&&ur()}),a=null;else{switch(gh(u)){case 1:a=Ce;break;case 4:a=Ne;break;case 16:a=Fe;break;case 536870912:a=et;break;default:a=Fe}a=Dm(a,Em.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function Em(n,r){if(_l=-1,vl=0,xt&6)throw Error(t(327));var a=n.callbackNode;if(Fs()&&n.callbackNode!==a)return null;var u=Zn(n,n===en?on:0);if(u===0)return null;if(u&30||u&n.expiredLanes||r)r=xl(n,u);else{r=u;var d=xt;xt|=2;var g=Am();(en!==n||on!==r)&&(Fi=null,Is=G()+500,qr(n,r));do try{Ov();break}catch(U){Tm(n,U)}while(!0);gc(),dl.current=g,xt=d,Yt!==null?r=0:(en=null,on=0,r=Kt)}if(r!==0){if(r===2&&(d=Ct(n),d!==0&&(u=d,r=Jc(n,d))),r===1)throw a=qo,qr(n,0),gr(n,u),Ln(n,G()),a;if(r===6)gr(n,u);else{if(d=n.current.alternate,!(u&30)&&!Iv(d)&&(r=xl(n,u),r===2&&(g=Ct(n),g!==0&&(u=g,r=Jc(n,g))),r===1))throw a=qo,qr(n,0),gr(n,u),Ln(n,G()),a;switch(n.finishedWork=d,n.finishedLanes=u,r){case 0:case 1:throw Error(t(345));case 2:$r(n,bn,Fi);break;case 3:if(gr(n,u),(u&130023424)===u&&(r=Kc+500-G(),10<r)){if(Zn(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){yn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=sc($r.bind(null,n,bn,Fi),r);break}$r(n,bn,Fi);break;case 4:if(gr(n,u),(u&4194240)===u)break;for(r=n.eventTimes,d=-1;0<u;){var M=31-St(u);g=1<<M,M=r[M],M>d&&(d=M),u&=~g}if(u=d,u=G()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Nv(u/1960))-u,10<u){n.timeoutHandle=sc($r.bind(null,n,bn,Fi),u);break}$r(n,bn,Fi);break;case 5:$r(n,bn,Fi);break;default:throw Error(t(329))}}}return Ln(n,G()),n.callbackNode===a?Em.bind(null,n):null}function Jc(n,r){var a=$o;return n.current.memoizedState.isDehydrated&&(qr(n,r).flags|=256),n=xl(n,r),n!==2&&(r=bn,bn=a,r!==null&&ef(r)),n}function ef(n){bn===null?bn=n:bn.push.apply(bn,n)}function Iv(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var d=a[u],g=d.getSnapshot;d=d.value;try{if(!Qn(g(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function gr(n,r){for(r&=~jc,r&=~hl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-St(r),u=1<<a;n[a]=-1,r&=~u}}function wm(n){if(xt&6)throw Error(t(327));Fs();var r=Zn(n,0);if(!(r&1))return Ln(n,G()),null;var a=xl(n,r);if(n.tag!==0&&a===2){var u=Ct(n);u!==0&&(r=u,a=Jc(n,u))}if(a===1)throw a=qo,qr(n,0),gr(n,r),Ln(n,G()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,$r(n,bn,Fi),Ln(n,G()),null}function tf(n,r){var a=xt;xt|=1;try{return n(r)}finally{xt=a,xt===0&&(Is=G()+500,Ya&&ur())}}function Yr(n){pr!==null&&pr.tag===0&&!(xt&6)&&Fs();var r=xt;xt|=1;var a=Yn.transition,u=dt;try{if(Yn.transition=null,dt=1,n)return n()}finally{dt=u,Yn.transition=a,xt=r,!(xt&6)&&ur()}}function nf(){zn=Ns.current,It(Ns)}function qr(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,fv(a)),Yt!==null)for(a=Yt.return;a!==null;){var u=a;switch(fc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Wa();break;case 3:Ls(),It(Rn),It(un),wc();break;case 5:Mc(u);break;case 4:Ls();break;case 13:It(zt);break;case 19:It(zt);break;case 10:_c(u.type._context);break;case 22:case 23:nf()}a=a.return}if(en=n,Yt=n=_r(n.current,null),on=zn=r,Kt=0,qo=null,jc=hl=Xr=0,bn=$o=null,Vr!==null){for(r=0;r<Vr.length;r++)if(a=Vr[r],u=a.interleaved,u!==null){a.interleaved=null;var d=u.next,g=a.pending;if(g!==null){var M=g.next;g.next=d,u.next=M}a.pending=u}Vr=null}return n}function Tm(n,r){do{var a=Yt;try{if(gc(),nl.current=ol,il){for(var u=kt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}il=!1}if(Wr=0,Jt=jt=kt=null,Ho=!1,Vo=0,$c.current=null,a===null||a.return===null){Kt=1,qo=r,Yt=null;break}e:{var g=n,M=a.return,U=a,k=r;if(r=on,U.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var se=k,ve=U,ye=ve.tag;if(!(ve.mode&1)&&(ye===0||ye===11||ye===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Ue=Kp(M);if(Ue!==null){Ue.flags&=-257,Zp(Ue,M,U,g,r),Ue.mode&1&&jp(g,se,r),r=Ue,k=se;var Be=r.updateQueue;if(Be===null){var He=new Set;He.add(k),r.updateQueue=He}else Be.add(k);break e}else{if(!(r&1)){jp(g,se,r),rf();break e}k=Error(t(426))}}else if(Ot&&U.mode&1){var Wt=Kp(M);if(Wt!==null){!(Wt.flags&65536)&&(Wt.flags|=256),Zp(Wt,M,U,g,r),pc(Ds(k,U));break e}}g=k=Ds(k,U),Kt!==4&&(Kt=2),$o===null?$o=[g]:$o.push(g),g=M;do{switch(g.tag){case 3:g.flags|=65536,r&=-r,g.lanes|=r;var J=qp(g,k,r);yp(g,J);break e;case 1:U=k;var W=g.type,ne=g.stateNode;if(!(g.flags&128)&&(typeof W.getDerivedStateFromError=="function"||ne!==null&&typeof ne.componentDidCatch=="function"&&(hr===null||!hr.has(ne)))){g.flags|=65536,r&=-r,g.lanes|=r;var Ee=$p(g,U,r);yp(g,Ee);break e}}g=g.return}while(g!==null)}Cm(a)}catch(Ge){r=Ge,Yt===a&&a!==null&&(Yt=a=a.return);continue}break}while(!0)}function Am(){var n=dl.current;return dl.current=ol,n===null?ol:n}function rf(){(Kt===0||Kt===3||Kt===2)&&(Kt=4),en===null||!(Xr&268435455)&&!(hl&268435455)||gr(en,on)}function xl(n,r){var a=xt;xt|=2;var u=Am();(en!==n||on!==r)&&(Fi=null,qr(n,r));do try{Fv();break}catch(d){Tm(n,d)}while(!0);if(gc(),xt=a,dl.current=u,Yt!==null)throw Error(t(261));return en=null,on=0,Kt}function Fv(){for(;Yt!==null;)Rm(Yt)}function Ov(){for(;Yt!==null&&!ae();)Rm(Yt)}function Rm(n){var r=Lm(n.alternate,n,zn);n.memoizedProps=n.pendingProps,r===null?Cm(n):Yt=r,$c.current=null}function Cm(n){var r=n;do{var a=r.alternate;if(n=r.return,r.flags&32768){if(a=bv(a,r),a!==null){a.flags&=32767,Yt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Kt=6,Yt=null;return}}else if(a=Pv(a,r,zn),a!==null){Yt=a;return}if(r=r.sibling,r!==null){Yt=r;return}Yt=r=n}while(r!==null);Kt===0&&(Kt=5)}function $r(n,r,a){var u=dt,d=Yn.transition;try{Yn.transition=null,dt=1,zv(n,r,a,u)}finally{Yn.transition=d,dt=u}return null}function zv(n,r,a,u){do Fs();while(pr!==null);if(xt&6)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(ln(n,g),n===en&&(Yt=en=null,on=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||ml||(ml=!0,Dm(Fe,function(){return Fs(),null})),g=(a.flags&15990)!==0,a.subtreeFlags&15990||g){g=Yn.transition,Yn.transition=null;var M=dt;dt=1;var U=xt;xt|=4,$c.current=null,Dv(n,a),vm(a,n),rv(ic),ba=!!nc,ic=nc=null,n.current=a,Uv(a),le(),xt=U,dt=M,Yn.transition=g}else n.current=a;if(ml&&(ml=!1,pr=n,gl=d),g=n.pendingLanes,g===0&&(hr=null),yt(a.stateNode),Ln(n,G()),r!==null)for(u=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],u(d.value,{componentStack:d.stack,digest:d.digest});if(pl)throw pl=!1,n=Zc,Zc=null,n;return gl&1&&n.tag!==0&&Fs(),g=n.pendingLanes,g&1?n===Qc?jo++:(jo=0,Qc=n):jo=0,ur(),null}function Fs(){if(pr!==null){var n=gh(gl),r=Yn.transition,a=dt;try{if(Yn.transition=null,dt=16>n?16:n,pr===null)var u=!1;else{if(n=pr,pr=null,gl=0,xt&6)throw Error(t(331));var d=xt;for(xt|=4,Oe=n.current;Oe!==null;){var g=Oe,M=g.child;if(Oe.flags&16){var U=g.deletions;if(U!==null){for(var k=0;k<U.length;k++){var se=U[k];for(Oe=se;Oe!==null;){var ve=Oe;switch(ve.tag){case 0:case 11:case 15:Yo(8,ve,g)}var ye=ve.child;if(ye!==null)ye.return=ve,Oe=ye;else for(;Oe!==null;){ve=Oe;var ge=ve.sibling,Ue=ve.return;if(hm(ve),ve===se){Oe=null;break}if(ge!==null){ge.return=Ue,Oe=ge;break}Oe=Ue}}}var Be=g.alternate;if(Be!==null){var He=Be.child;if(He!==null){Be.child=null;do{var Wt=He.sibling;He.sibling=null,He=Wt}while(He!==null)}}Oe=g}}if(g.subtreeFlags&2064&&M!==null)M.return=g,Oe=M;else e:for(;Oe!==null;){if(g=Oe,g.flags&2048)switch(g.tag){case 0:case 11:case 15:Yo(9,g,g.return)}var J=g.sibling;if(J!==null){J.return=g.return,Oe=J;break e}Oe=g.return}}var W=n.current;for(Oe=W;Oe!==null;){M=Oe;var ne=M.child;if(M.subtreeFlags&2064&&ne!==null)ne.return=M,Oe=ne;else e:for(M=W;Oe!==null;){if(U=Oe,U.flags&2048)try{switch(U.tag){case 0:case 11:case 15:fl(9,U)}}catch(Ge){Vt(U,U.return,Ge)}if(U===M){Oe=null;break e}var Ee=U.sibling;if(Ee!==null){Ee.return=U.return,Oe=Ee;break e}Oe=U.return}}if(xt=d,ur(),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(Xe,n)}catch{}u=!0}return u}finally{dt=a,Yn.transition=r}}return!1}function Pm(n,r,a){r=Ds(a,r),r=qp(n,r,1),n=fr(n,r,1),r=yn(),n!==null&&(Gt(n,1,r),Ln(n,r))}function Vt(n,r,a){if(n.tag===3)Pm(n,n,a);else for(;r!==null;){if(r.tag===3){Pm(r,n,a);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(hr===null||!hr.has(u))){n=Ds(a,n),n=$p(r,n,1),r=fr(r,n,1),n=yn(),r!==null&&(Gt(r,1,n),Ln(r,n));break}}r=r.return}}function kv(n,r,a){var u=n.pingCache;u!==null&&u.delete(r),r=yn(),n.pingedLanes|=n.suspendedLanes&a,en===n&&(on&a)===a&&(Kt===4||Kt===3&&(on&130023424)===on&&500>G()-Kc?qr(n,0):jc|=a),Ln(n,r)}function bm(n,r){r===0&&(n.mode&1?(r=mt,mt<<=1,!(mt&130023424)&&(mt=4194304)):r=1);var a=yn();n=Ui(n,r),n!==null&&(Gt(n,r,a),Ln(n,a))}function Bv(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),bm(n,a)}function Hv(n,r){var a=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(r),bm(n,a)}var Lm;Lm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Rn.current)Pn=!0;else{if(!(n.lanes&a)&&!(r.flags&128))return Pn=!1,Cv(n,r,a);Pn=!!(n.flags&131072)}else Pn=!1,Ot&&r.flags&1048576&&cp(r,$a,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;ul(n,r),n=r.pendingProps;var d=ws(r,un.current);bs(r,a),d=Rc(null,r,u,n,d,a);var g=Cc();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Cn(u)?(g=!0,Xa(r)):g=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,yc(r),d.updater=al,r.stateNode=d,d._reactInternals=r,Nc(r,u,n,a),r=zc(null,r,u,!0,g,a)):(r.tag=0,Ot&&g&&cc(r),xn(null,r,d,a),r=r.child),r;case 16:u=r.elementType;e:{switch(ul(n,r),n=r.pendingProps,d=u._init,u=d(u._payload),r.type=u,d=r.tag=Gv(u),n=ei(u,n),d){case 0:r=Oc(null,r,u,n,a);break e;case 1:r=im(null,r,u,n,a);break e;case 11:r=Qp(null,r,u,n,a);break e;case 14:r=Jp(null,r,u,ei(u.type,n),a);break e}throw Error(t(306,u,""))}return r;case 0:return u=r.type,d=r.pendingProps,d=r.elementType===u?d:ei(u,d),Oc(n,r,u,d,a);case 1:return u=r.type,d=r.pendingProps,d=r.elementType===u?d:ei(u,d),im(n,r,u,d,a);case 3:e:{if(rm(r),n===null)throw Error(t(387));u=r.pendingProps,g=r.memoizedState,d=g.element,xp(n,r),el(r,u,null,a);var M=r.memoizedState;if(u=M.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},r.updateQueue.baseState=g,r.memoizedState=g,r.flags&256){d=Ds(Error(t(423)),r),r=sm(n,r,u,a,d);break e}else if(u!==d){d=Ds(Error(t(424)),r),r=sm(n,r,u,a,d);break e}else for(On=or(r.stateNode.containerInfo.firstChild),Fn=r,Ot=!0,Jn=null,a=_p(r,null,u,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Rs(),u===d){r=Ii(n,r,a);break e}xn(n,r,u,a)}r=r.child}return r;case 5:return Mp(r),n===null&&hc(r),u=r.type,d=r.pendingProps,g=n!==null?n.memoizedProps:null,M=d.children,rc(u,d)?M=null:g!==null&&rc(u,g)&&(r.flags|=32),nm(n,r),xn(n,r,M,a),r.child;case 6:return n===null&&hc(r),null;case 13:return om(n,r,a);case 4:return Sc(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=Cs(r,null,u,a):xn(n,r,u,a),r.child;case 11:return u=r.type,d=r.pendingProps,d=r.elementType===u?d:ei(u,d),Qp(n,r,u,d,a);case 7:return xn(n,r,r.pendingProps,a),r.child;case 8:return xn(n,r,r.pendingProps.children,a),r.child;case 12:return xn(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(u=r.type._context,d=r.pendingProps,g=r.memoizedProps,M=d.value,Dt(Za,u._currentValue),u._currentValue=M,g!==null)if(Qn(g.value,M)){if(g.children===d.children&&!Rn.current){r=Ii(n,r,a);break e}}else for(g=r.child,g!==null&&(g.return=r);g!==null;){var U=g.dependencies;if(U!==null){M=g.child;for(var k=U.firstContext;k!==null;){if(k.context===u){if(g.tag===1){k=Ni(-1,a&-a),k.tag=2;var se=g.updateQueue;if(se!==null){se=se.shared;var ve=se.pending;ve===null?k.next=k:(k.next=ve.next,ve.next=k),se.pending=k}}g.lanes|=a,k=g.alternate,k!==null&&(k.lanes|=a),vc(g.return,a,r),U.lanes|=a;break}k=k.next}}else if(g.tag===10)M=g.type===r.type?null:g.child;else if(g.tag===18){if(M=g.return,M===null)throw Error(t(341));M.lanes|=a,U=M.alternate,U!==null&&(U.lanes|=a),vc(M,a,r),M=g.sibling}else M=g.child;if(M!==null)M.return=g;else for(M=g;M!==null;){if(M===r){M=null;break}if(g=M.sibling,g!==null){g.return=M.return,M=g;break}M=M.return}g=M}xn(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,u=r.pendingProps.children,bs(r,a),d=Wn(d),u=u(d),r.flags|=1,xn(n,r,u,a),r.child;case 14:return u=r.type,d=ei(u,r.pendingProps),d=ei(u.type,d),Jp(n,r,u,d,a);case 15:return em(n,r,r.type,r.pendingProps,a);case 17:return u=r.type,d=r.pendingProps,d=r.elementType===u?d:ei(u,d),ul(n,r),r.tag=1,Cn(u)?(n=!0,Xa(r)):n=!1,bs(r,a),Xp(r,u,d),Nc(r,u,d,a),zc(null,r,u,!0,n,a);case 19:return lm(n,r,a);case 22:return tm(n,r,a)}throw Error(t(156,r.tag))};function Dm(n,r){return A(n,r)}function Vv(n,r,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(n,r,a,u){return new Vv(n,r,a,u)}function sf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Gv(n){if(typeof n=="function")return sf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===fe)return 11;if(n===K)return 14}return 2}function _r(n,r){var a=n.alternate;return a===null?(a=qn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function yl(n,r,a,u,d,g){var M=2;if(u=n,typeof n=="function")sf(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case O:return jr(a.children,d,g,r);case $:M=8,d|=8;break;case C:return n=qn(12,a,r,d|2),n.elementType=C,n.lanes=g,n;case oe:return n=qn(13,a,r,d),n.elementType=oe,n.lanes=g,n;case N:return n=qn(19,a,r,d),n.elementType=N,n.lanes=g,n;case j:return Sl(a,d,g,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:M=10;break e;case V:M=9;break e;case fe:M=11;break e;case K:M=14;break e;case z:M=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=qn(M,a,r,d),r.elementType=n,r.type=u,r.lanes=g,r}function jr(n,r,a,u){return n=qn(7,n,u,r),n.lanes=a,n}function Sl(n,r,a,u){return n=qn(22,n,u,r),n.elementType=j,n.lanes=a,n.stateNode={isHidden:!1},n}function of(n,r,a){return n=qn(6,n,null,r),n.lanes=a,n}function af(n,r,a){return r=qn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Wv(n,r,a,u,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=an(0),this.expirationTimes=an(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=an(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function lf(n,r,a,u,d,g,M,U,k){return n=new Wv(n,r,a,U,k),r===1?(r=1,g===!0&&(r|=8)):r=0,g=qn(3,null,null,r),n.current=g,g.stateNode=n,g.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},yc(g),n}function Xv(n,r,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:u==null?null:""+u,children:n,containerInfo:r,implementation:a}}function Um(n){if(!n)return lr;n=n._reactInternals;e:{if(mi(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Cn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Cn(a))return ap(n,a,r)}return r}function Nm(n,r,a,u,d,g,M,U,k){return n=lf(a,u,!0,n,d,g,M,U,k),n.context=Um(null),a=n.current,u=yn(),d=mr(a),g=Ni(u,d),g.callback=r??null,fr(a,g,d),n.current.lanes=d,Gt(n,d,u),Ln(n,u),n}function Ml(n,r,a,u){var d=r.current,g=yn(),M=mr(d);return a=Um(a),r.context===null?r.context=a:r.pendingContext=a,r=Ni(g,M),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=fr(d,r,M),n!==null&&(ii(n,d,M,g),Ja(n,d,M)),M}function El(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Im(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function uf(n,r){Im(n,r),(n=n.alternate)&&Im(n,r)}function Yv(){return null}var Fm=typeof reportError=="function"?reportError:function(n){console.error(n)};function cf(n){this._internalRoot=n}wl.prototype.render=cf.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Ml(n,r,null,null)},wl.prototype.unmount=cf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Yr(function(){Ml(null,n,null,null)}),r[Pi]=null}};function wl(n){this._internalRoot=n}wl.prototype.unstable_scheduleHydration=function(n){if(n){var r=xh();n={blockedOn:null,target:n,priority:r};for(var a=0;a<ir.length&&r!==0&&r<ir[a].priority;a++);ir.splice(a,0,n),a===0&&Mh(n)}};function ff(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Tl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Om(){}function qv(n,r,a,u,d){if(d){if(typeof u=="function"){var g=u;u=function(){var se=El(M);g.call(se)}}var M=Nm(r,u,n,0,null,!1,!1,"",Om);return n._reactRootContainer=M,n[Pi]=M.current,Uo(n.nodeType===8?n.parentNode:n),Yr(),M}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var U=u;u=function(){var se=El(k);U.call(se)}}var k=lf(n,0,!1,null,null,!1,!1,"",Om);return n._reactRootContainer=k,n[Pi]=k.current,Uo(n.nodeType===8?n.parentNode:n),Yr(function(){Ml(r,k,a,u)}),k}function Al(n,r,a,u,d){var g=a._reactRootContainer;if(g){var M=g;if(typeof d=="function"){var U=d;d=function(){var k=El(M);U.call(k)}}Ml(r,M,n,d)}else M=qv(a,r,n,d,u);return El(M)}_h=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=rn(r.pendingLanes);a!==0&&(Or(r,a|1),Ln(r,G()),!(xt&6)&&(Is=G()+500,ur()))}break;case 13:Yr(function(){var u=Ui(n,1);if(u!==null){var d=yn();ii(u,n,1,d)}}),uf(n,1)}},Iu=function(n){if(n.tag===13){var r=Ui(n,134217728);if(r!==null){var a=yn();ii(r,n,134217728,a)}uf(n,134217728)}},vh=function(n){if(n.tag===13){var r=mr(n),a=Ui(n,r);if(a!==null){var u=yn();ii(a,n,r,u)}uf(n,r)}},xh=function(){return dt},yh=function(n,r){var a=dt;try{return dt=n,r()}finally{dt=a}},Re=function(n,r,a){switch(r){case"input":if(lt(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var u=a[r];if(u!==n&&u.form===n.form){var d=Ga(u);if(!d)throw Error(t(90));ht(u),lt(u,d)}}}break;case"textarea":me(n,a);break;case"select":r=a.value,r!=null&&b(n,!!a.multiple,r,!1)}},Ut=tf,$t=Yr;var $v={usingClientEntryPoint:!1,Events:[Fo,Ms,Ga,be,it,tf]},Ko={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jv={bundleType:Ko.bundleType,version:Ko.version,rendererPackageName:Ko.rendererPackageName,rendererConfig:Ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Aa(n),n===null?null:n.stateNode},findFiberByHostInstance:Ko.findFiberByHostInstance||Yv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rl.isDisabled&&Rl.supportsFiber)try{Xe=Rl.inject(jv),rt=Rl}catch{}}return Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$v,Dn.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ff(r))throw Error(t(200));return Xv(n,r,null,a)},Dn.createRoot=function(n,r){if(!ff(n))throw Error(t(299));var a=!1,u="",d=Fm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=lf(n,1,!1,null,null,a,!1,u,d),n[Pi]=r.current,Uo(n.nodeType===8?n.parentNode:n),new cf(r)},Dn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Aa(r),n=n===null?null:n.stateNode,n},Dn.flushSync=function(n){return Yr(n)},Dn.hydrate=function(n,r,a){if(!Tl(r))throw Error(t(200));return Al(null,n,r,!0,a)},Dn.hydrateRoot=function(n,r,a){if(!ff(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,d=!1,g="",M=Fm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(M=a.onRecoverableError)),r=Nm(r,null,n,1,a??null,d,!1,g,M),n[Pi]=r.current,Uo(n),u)for(n=0;n<u.length;n++)a=u[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new wl(r)},Dn.render=function(n,r,a){if(!Tl(r))throw Error(t(200));return Al(null,n,r,!1,a)},Dn.unmountComponentAtNode=function(n){if(!Tl(n))throw Error(t(40));return n._reactRootContainer?(Yr(function(){Al(null,null,n,!1,function(){n._reactRootContainer=null,n[Pi]=null})}),!0):!1},Dn.unstable_batchedUpdates=tf,Dn.unstable_renderSubtreeIntoContainer=function(n,r,a,u){if(!Tl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Al(n,r,a,!1,u)},Dn.version="18.3.1-next-f1338f8080-20240426",Dn}var Xm;function rx(){if(Xm)return pf.exports;Xm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),pf.exports=ix(),pf.exports}var sx=rx();const ox=d_(sx);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zd="171",ax=0,Ym=1,lx=2,h_=1,ux=2,Gi=3,Dr=0,Nn=1,Wi=2,Pr=0,io=1,qm=2,$m=3,jm=4,cx=5,rs=100,fx=101,dx=102,hx=103,px=104,mx=200,gx=201,_x=202,vx=203,Qf=204,Jf=205,xx=206,yx=207,Sx=208,Mx=209,Ex=210,wx=211,Tx=212,Ax=213,Rx=214,ed=0,td=1,nd=2,ao=3,id=4,rd=5,sd=6,od=7,p_=0,Cx=1,Px=2,br=0,bx=1,Lx=2,Dx=3,Ux=4,Nx=5,Ix=6,Fx=7,m_=300,lo=301,uo=302,ad=303,ld=304,Ru=306,ud=1e3,os=1001,cd=1002,ci=1003,Ox=1004,Cl=1005,Mi=1006,_f=1007,as=1008,ji=1009,g_=1010,__=1011,fa=1012,Qd=1013,cs=1014,Xi=1015,ga=1016,Jd=1017,eh=1018,co=1020,v_=35902,x_=1021,y_=1022,ui=1023,S_=1024,M_=1025,ro=1026,fo=1027,E_=1028,th=1029,w_=1030,nh=1031,ih=1033,su=33776,ou=33777,au=33778,lu=33779,fd=35840,dd=35841,hd=35842,pd=35843,md=36196,gd=37492,_d=37496,vd=37808,xd=37809,yd=37810,Sd=37811,Md=37812,Ed=37813,wd=37814,Td=37815,Ad=37816,Rd=37817,Cd=37818,Pd=37819,bd=37820,Ld=37821,uu=36492,Dd=36494,Ud=36495,T_=36283,Nd=36284,Id=36285,Fd=36286,zx=3200,kx=3201,Bx=0,Hx=1,Rr="",jn="srgb",ho="srgb-linear",mu="linear",Pt="srgb",Os=7680,Km=519,Vx=512,Gx=513,Wx=514,A_=515,Xx=516,Yx=517,qx=518,$x=519,Od=35044,Zm="300 es",Yi=2e3,gu=2001;class _o{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vf=Math.PI/180,zd=180/Math.PI;function Lr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[s&255]+hn[s>>8&255]+hn[s>>16&255]+hn[s>>24&255]).toLowerCase()}function gt(i,e,t){return Math.max(e,Math.min(t,i))}function jx(i,e){return(i%e+e)%e}function xf(i,e,t){return(1-t)*i+t*e}function Si(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class pt{constructor(e=0,t=0){pt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(gt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(gt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*o+e.x,this.y=l*o+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,t,s,o,l,c,f,h,p){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,f,h,p)}set(e,t,s,o,l,c,f,h,p){const m=this.elements;return m[0]=e,m[1]=o,m[2]=f,m[3]=t,m[4]=l,m[5]=h,m[6]=s,m[7]=c,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,c=s[0],f=s[3],h=s[6],p=s[1],m=s[4],_=s[7],x=s[2],y=s[5],E=s[8],T=o[0],S=o[3],v=o[6],F=o[1],D=o[4],P=o[7],Y=o[2],B=o[5],O=o[8];return l[0]=c*T+f*F+h*Y,l[3]=c*S+f*D+h*B,l[6]=c*v+f*P+h*O,l[1]=p*T+m*F+_*Y,l[4]=p*S+m*D+_*B,l[7]=p*v+m*P+_*O,l[2]=x*T+y*F+E*Y,l[5]=x*S+y*D+E*B,l[8]=x*v+y*P+E*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],m=e[8];return t*c*m-t*f*p-s*l*m+s*f*h+o*l*p-o*c*h}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],m=e[8],_=m*c-f*p,x=f*h-m*l,y=p*l-c*h,E=t*_+s*x+o*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=_*T,e[1]=(o*p-m*s)*T,e[2]=(f*s-o*c)*T,e[3]=x*T,e[4]=(m*t-o*h)*T,e[5]=(o*l-f*t)*T,e[6]=y*T,e[7]=(s*h-p*t)*T,e[8]=(c*t-s*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,c,f){const h=Math.cos(l),p=Math.sin(l);return this.set(s*h,s*p,-s*(h*c+p*f)+c+e,-o*p,o*h,-o*(-p*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(yf.makeScale(e,t)),this}rotate(e){return this.premultiply(yf.makeRotation(-e)),this}translate(e,t){return this.premultiply(yf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yf=new st;function R_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _u(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kx(){const i=_u("canvas");return i.style.display="block",i}const Qm={};function to(i){i in Qm||(Qm[i]=!0,console.warn(i))}function Zx(i,e,t){return new Promise(function(s,o){function l(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function Qx(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Jx(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Jm=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eg=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ey(){const i={enabled:!0,workingColorSpace:ho,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Pt&&(o.r=$i(o.r),o.g=$i(o.g),o.b=$i(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Pt&&(o.r=so(o.r),o.g=so(o.g),o.b=so(o.b))),o},fromWorkingColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},toWorkingColorSpace:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Rr?mu:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return i.define({[ho]:{primaries:e,whitePoint:s,transfer:mu,toXYZ:Jm,fromXYZ:eg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:e,whitePoint:s,transfer:Pt,toXYZ:Jm,fromXYZ:eg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}}),i}const Et=ey();function $i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function so(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let zs;class ty{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zs===void 0&&(zs=_u("canvas")),zs.width=e.width,zs.height=e.height;const s=zs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=zs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_u("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=$i(l[c]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor($i(t[s]/255)*255):t[s]=$i(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ny=0;class C_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=Lr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(Sf(o[c].image)):l.push(Sf(o[c]))}else l=Sf(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function Sf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ty.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let iy=0;class wn extends _o{constructor(e=wn.DEFAULT_IMAGE,t=wn.DEFAULT_MAPPING,s=os,o=os,l=Mi,c=as,f=ui,h=ji,p=wn.DEFAULT_ANISOTROPY,m=Rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iy++}),this.uuid=Lr(),this.name="",this.source=new C_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==m_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ud:e.x=e.x-Math.floor(e.x);break;case os:e.x=e.x<0?0:1;break;case cd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ud:e.y=e.y-Math.floor(e.y);break;case os:e.y=e.y<0?0:1;break;case cd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=m_;wn.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,t=0,s=0,o=1){Xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const h=e.elements,p=h[0],m=h[4],_=h[8],x=h[1],y=h[5],E=h[9],T=h[2],S=h[6],v=h[10];if(Math.abs(m-x)<.01&&Math.abs(_-T)<.01&&Math.abs(E-S)<.01){if(Math.abs(m+x)<.1&&Math.abs(_+T)<.1&&Math.abs(E+S)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(p+1)/2,P=(y+1)/2,Y=(v+1)/2,B=(m+x)/4,O=(_+T)/4,$=(E+S)/4;return D>P&&D>Y?D<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(D),o=B/s,l=O/s):P>Y?P<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),s=B/o,l=$/o):Y<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(Y),s=O/l,o=$/l),this.set(s,o,l,t),this}let F=Math.sqrt((S-E)*(S-E)+(_-T)*(_-T)+(x-m)*(x-m));return Math.abs(F)<.001&&(F=1),this.x=(S-E)/F,this.y=(_-T)/F,this.z=(x-m)/F,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(gt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ry extends _o{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t);const o={width:e,height:t,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const l=new wn(o,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);l.flipY=!1,l.generateMipmaps=s.generateMipmaps,l.internalFormat=s.internalFormat,this.textures=[];const c=s.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,o=e.textures.length;s<o;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new C_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fs extends ry{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class P_ extends wn{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=ci,this.minFilter=ci,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sy extends wn{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=ci,this.minFilter=ci,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _a{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,c,f){let h=s[o+0],p=s[o+1],m=s[o+2],_=s[o+3];const x=l[c+0],y=l[c+1],E=l[c+2],T=l[c+3];if(f===0){e[t+0]=h,e[t+1]=p,e[t+2]=m,e[t+3]=_;return}if(f===1){e[t+0]=x,e[t+1]=y,e[t+2]=E,e[t+3]=T;return}if(_!==T||h!==x||p!==y||m!==E){let S=1-f;const v=h*x+p*y+m*E+_*T,F=v>=0?1:-1,D=1-v*v;if(D>Number.EPSILON){const Y=Math.sqrt(D),B=Math.atan2(Y,v*F);S=Math.sin(S*B)/Y,f=Math.sin(f*B)/Y}const P=f*F;if(h=h*S+x*P,p=p*S+y*P,m=m*S+E*P,_=_*S+T*P,S===1-f){const Y=1/Math.sqrt(h*h+p*p+m*m+_*_);h*=Y,p*=Y,m*=Y,_*=Y}}e[t]=h,e[t+1]=p,e[t+2]=m,e[t+3]=_}static multiplyQuaternionsFlat(e,t,s,o,l,c){const f=s[o],h=s[o+1],p=s[o+2],m=s[o+3],_=l[c],x=l[c+1],y=l[c+2],E=l[c+3];return e[t]=f*E+m*_+h*y-p*x,e[t+1]=h*E+m*x+p*_-f*y,e[t+2]=p*E+m*y+f*x-h*_,e[t+3]=m*E-f*_-h*x-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,p=f(s/2),m=f(o/2),_=f(l/2),x=h(s/2),y=h(o/2),E=h(l/2);switch(c){case"XYZ":this._x=x*m*_+p*y*E,this._y=p*y*_-x*m*E,this._z=p*m*E+x*y*_,this._w=p*m*_-x*y*E;break;case"YXZ":this._x=x*m*_+p*y*E,this._y=p*y*_-x*m*E,this._z=p*m*E-x*y*_,this._w=p*m*_+x*y*E;break;case"ZXY":this._x=x*m*_-p*y*E,this._y=p*y*_+x*m*E,this._z=p*m*E+x*y*_,this._w=p*m*_-x*y*E;break;case"ZYX":this._x=x*m*_-p*y*E,this._y=p*y*_+x*m*E,this._z=p*m*E-x*y*_,this._w=p*m*_+x*y*E;break;case"YZX":this._x=x*m*_+p*y*E,this._y=p*y*_+x*m*E,this._z=p*m*E-x*y*_,this._w=p*m*_-x*y*E;break;case"XZY":this._x=x*m*_-p*y*E,this._y=p*y*_-x*m*E,this._z=p*m*E+x*y*_,this._w=p*m*_+x*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],c=t[1],f=t[5],h=t[9],p=t[2],m=t[6],_=t[10],x=s+f+_;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(m-h)*y,this._y=(l-p)*y,this._z=(c-o)*y}else if(s>f&&s>_){const y=2*Math.sqrt(1+s-f-_);this._w=(m-h)/y,this._x=.25*y,this._y=(o+c)/y,this._z=(l+p)/y}else if(f>_){const y=2*Math.sqrt(1+f-s-_);this._w=(l-p)/y,this._x=(o+c)/y,this._y=.25*y,this._z=(h+m)/y}else{const y=2*Math.sqrt(1+_-s-f);this._w=(c-o)/y,this._x=(l+p)/y,this._y=(h+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,c=e._w,f=t._x,h=t._y,p=t._z,m=t._w;return this._x=s*m+c*f+o*p-l*h,this._y=o*m+c*h+l*f-s*p,this._z=l*m+c*p+s*h-o*f,this._w=c*m-s*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,o=this._y,l=this._z,c=this._w;let f=c*e._w+s*e._x+o*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=s,this._y=o,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const y=1-t;return this._w=y*c+t*this._w,this._x=y*s+t*this._x,this._y=y*o+t*this._y,this._z=y*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),m=Math.atan2(p,f),_=Math.sin((1-t)*m)/p,x=Math.sin(t*m)/p;return this._w=c*_+this._w*x,this._x=s*_+this._x*x,this._y=o*_+this._y*x,this._z=l*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(e=0,t=0,s=0){re.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,c=e.y,f=e.z,h=e.w,p=2*(c*o-f*s),m=2*(f*t-l*o),_=2*(l*s-c*t);return this.x=t+h*p+c*_-f*m,this.y=s+h*m+f*p-l*_,this.z=o+h*_+l*m-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(gt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*c-s*h,this.z=s*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Mf.copy(this).projectOnVector(e),this.sub(Mf)}reflect(e){return this.sub(Mf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(gt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mf=new re,tg=new _a;class va{constructor(e=new re(1/0,1/0,1/0),t=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,ri):ri.fromBufferAttribute(l,c),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Pl.copy(s.boundingBox)),Pl.applyMatrix4(e.matrixWorld),this.union(Pl)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qo),bl.subVectors(this.max,Qo),ks.subVectors(e.a,Qo),Bs.subVectors(e.b,Qo),Hs.subVectors(e.c,Qo),xr.subVectors(Bs,ks),yr.subVectors(Hs,Bs),Kr.subVectors(ks,Hs);let t=[0,-xr.z,xr.y,0,-yr.z,yr.y,0,-Kr.z,Kr.y,xr.z,0,-xr.x,yr.z,0,-yr.x,Kr.z,0,-Kr.x,-xr.y,xr.x,0,-yr.y,yr.x,0,-Kr.y,Kr.x,0];return!Ef(t,ks,Bs,Hs,bl)||(t=[1,0,0,0,1,0,0,0,1],!Ef(t,ks,Bs,Hs,bl))?!1:(Ll.crossVectors(xr,yr),t=[Ll.x,Ll.y,Ll.z],Ef(t,ks,Bs,Hs,bl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Oi=[new re,new re,new re,new re,new re,new re,new re,new re],ri=new re,Pl=new va,ks=new re,Bs=new re,Hs=new re,xr=new re,yr=new re,Kr=new re,Qo=new re,bl=new re,Ll=new re,Zr=new re;function Ef(i,e,t,s,o){for(let l=0,c=i.length-3;l<=c;l+=3){Zr.fromArray(i,l);const f=o.x*Math.abs(Zr.x)+o.y*Math.abs(Zr.y)+o.z*Math.abs(Zr.z),h=e.dot(Zr),p=t.dot(Zr),m=s.dot(Zr);if(Math.max(-Math.max(h,p,m),Math.min(h,p,m))>f)return!1}return!0}const oy=new va,Jo=new re,wf=new re;class Cu{constructor(e=new re,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):oy.setFromPoints(e).getCenter(s);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jo.subVectors(e,this.center);const t=Jo.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(Jo,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jo.copy(e.center).add(wf)),this.expandByPoint(Jo.copy(e.center).sub(wf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zi=new re,Tf=new re,Dl=new re,Sr=new re,Af=new re,Ul=new re,Rf=new re;class rh{constructor(e=new re,t=new re(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){Tf.copy(e).add(t).multiplyScalar(.5),Dl.copy(t).sub(e).normalize(),Sr.copy(this.origin).sub(Tf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Dl),f=Sr.dot(this.direction),h=-Sr.dot(Dl),p=Sr.lengthSq(),m=Math.abs(1-c*c);let _,x,y,E;if(m>0)if(_=c*h-f,x=c*f-h,E=l*m,_>=0)if(x>=-E)if(x<=E){const T=1/m;_*=T,x*=T,y=_*(_+c*x+2*f)+x*(c*_+x+2*h)+p}else x=l,_=Math.max(0,-(c*x+f)),y=-_*_+x*(x+2*h)+p;else x=-l,_=Math.max(0,-(c*x+f)),y=-_*_+x*(x+2*h)+p;else x<=-E?(_=Math.max(0,-(-c*l+f)),x=_>0?-l:Math.min(Math.max(-l,-h),l),y=-_*_+x*(x+2*h)+p):x<=E?(_=0,x=Math.min(Math.max(-l,-h),l),y=x*(x+2*h)+p):(_=Math.max(0,-(c*l+f)),x=_>0?l:Math.min(Math.max(-l,-h),l),y=-_*_+x*(x+2*h)+p);else x=c>0?-l:l,_=Math.max(0,-(c*x+f)),y=-_*_+x*(x+2*h)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Tf).addScaledVector(Dl,x),y}intersectSphere(e,t){zi.subVectors(e.center,this.origin);const s=zi.dot(this.direction),o=zi.dot(zi)-s*s,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=s-c,h=s+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,c,f,h;const p=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(s=(e.min.x-x.x)*p,o=(e.max.x-x.x)*p):(s=(e.max.x-x.x)*p,o=(e.min.x-x.x)*p),m>=0?(l=(e.min.y-x.y)*m,c=(e.max.y-x.y)*m):(l=(e.max.y-x.y)*m,c=(e.min.y-x.y)*m),s>c||l>o||((l>s||isNaN(s))&&(s=l),(c<o||isNaN(o))&&(o=c),_>=0?(f=(e.min.z-x.z)*_,h=(e.max.z-x.z)*_):(f=(e.max.z-x.z)*_,h=(e.min.z-x.z)*_),s>h||f>o)||((f>s||s!==s)&&(s=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,s,o,l){Af.subVectors(t,e),Ul.subVectors(s,e),Rf.crossVectors(Af,Ul);let c=this.direction.dot(Rf),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Sr.subVectors(this.origin,e);const h=f*this.direction.dot(Ul.crossVectors(Sr,Ul));if(h<0)return null;const p=f*this.direction.dot(Af.cross(Sr));if(p<0||h+p>c)return null;const m=-f*Sr.dot(Rf);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,t,s,o,l,c,f,h,p,m,_,x,y,E,T,S){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,f,h,p,m,_,x,y,E,T,S)}set(e,t,s,o,l,c,f,h,p,m,_,x,y,E,T,S){const v=this.elements;return v[0]=e,v[4]=t,v[8]=s,v[12]=o,v[1]=l,v[5]=c,v[9]=f,v[13]=h,v[2]=p,v[6]=m,v[10]=_,v[14]=x,v[3]=y,v[7]=E,v[11]=T,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,o=1/Vs.setFromMatrixColumn(e,0).length(),l=1/Vs.setFromMatrixColumn(e,1).length(),c=1/Vs.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,c=Math.cos(s),f=Math.sin(s),h=Math.cos(o),p=Math.sin(o),m=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const x=c*m,y=c*_,E=f*m,T=f*_;t[0]=h*m,t[4]=-h*_,t[8]=p,t[1]=y+E*p,t[5]=x-T*p,t[9]=-f*h,t[2]=T-x*p,t[6]=E+y*p,t[10]=c*h}else if(e.order==="YXZ"){const x=h*m,y=h*_,E=p*m,T=p*_;t[0]=x+T*f,t[4]=E*f-y,t[8]=c*p,t[1]=c*_,t[5]=c*m,t[9]=-f,t[2]=y*f-E,t[6]=T+x*f,t[10]=c*h}else if(e.order==="ZXY"){const x=h*m,y=h*_,E=p*m,T=p*_;t[0]=x-T*f,t[4]=-c*_,t[8]=E+y*f,t[1]=y+E*f,t[5]=c*m,t[9]=T-x*f,t[2]=-c*p,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const x=c*m,y=c*_,E=f*m,T=f*_;t[0]=h*m,t[4]=E*p-y,t[8]=x*p+T,t[1]=h*_,t[5]=T*p+x,t[9]=y*p-E,t[2]=-p,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const x=c*h,y=c*p,E=f*h,T=f*p;t[0]=h*m,t[4]=T-x*_,t[8]=E*_+y,t[1]=_,t[5]=c*m,t[9]=-f*m,t[2]=-p*m,t[6]=y*_+E,t[10]=x-T*_}else if(e.order==="XZY"){const x=c*h,y=c*p,E=f*h,T=f*p;t[0]=h*m,t[4]=-_,t[8]=p*m,t[1]=x*_+T,t[5]=c*m,t[9]=y*_-E,t[2]=E*_-y,t[6]=f*m,t[10]=T*_+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ay,e,ly)}lookAt(e,t,s){const o=this.elements;return kn.subVectors(e,t),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),Mr.crossVectors(s,kn),Mr.lengthSq()===0&&(Math.abs(s.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),Mr.crossVectors(s,kn)),Mr.normalize(),Nl.crossVectors(kn,Mr),o[0]=Mr.x,o[4]=Nl.x,o[8]=kn.x,o[1]=Mr.y,o[5]=Nl.y,o[9]=kn.y,o[2]=Mr.z,o[6]=Nl.z,o[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,c=s[0],f=s[4],h=s[8],p=s[12],m=s[1],_=s[5],x=s[9],y=s[13],E=s[2],T=s[6],S=s[10],v=s[14],F=s[3],D=s[7],P=s[11],Y=s[15],B=o[0],O=o[4],$=o[8],C=o[12],R=o[1],V=o[5],fe=o[9],oe=o[13],N=o[2],K=o[6],z=o[10],j=o[14],I=o[3],te=o[7],Q=o[11],L=o[15];return l[0]=c*B+f*R+h*N+p*I,l[4]=c*O+f*V+h*K+p*te,l[8]=c*$+f*fe+h*z+p*Q,l[12]=c*C+f*oe+h*j+p*L,l[1]=m*B+_*R+x*N+y*I,l[5]=m*O+_*V+x*K+y*te,l[9]=m*$+_*fe+x*z+y*Q,l[13]=m*C+_*oe+x*j+y*L,l[2]=E*B+T*R+S*N+v*I,l[6]=E*O+T*V+S*K+v*te,l[10]=E*$+T*fe+S*z+v*Q,l[14]=E*C+T*oe+S*j+v*L,l[3]=F*B+D*R+P*N+Y*I,l[7]=F*O+D*V+P*K+Y*te,l[11]=F*$+D*fe+P*z+Y*Q,l[15]=F*C+D*oe+P*j+Y*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],c=e[1],f=e[5],h=e[9],p=e[13],m=e[2],_=e[6],x=e[10],y=e[14],E=e[3],T=e[7],S=e[11],v=e[15];return E*(+l*h*_-o*p*_-l*f*x+s*p*x+o*f*y-s*h*y)+T*(+t*h*y-t*p*x+l*c*x-o*c*y+o*p*m-l*h*m)+S*(+t*p*_-t*f*y-l*c*_+s*c*y+l*f*m-s*p*m)+v*(-o*f*m-t*h*_+t*f*x+o*c*_-s*c*x+s*h*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],m=e[8],_=e[9],x=e[10],y=e[11],E=e[12],T=e[13],S=e[14],v=e[15],F=_*S*p-T*x*p+T*h*y-f*S*y-_*h*v+f*x*v,D=E*x*p-m*S*p-E*h*y+c*S*y+m*h*v-c*x*v,P=m*T*p-E*_*p+E*f*y-c*T*y-m*f*v+c*_*v,Y=E*_*h-m*T*h-E*f*x+c*T*x+m*f*S-c*_*S,B=t*F+s*D+o*P+l*Y;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/B;return e[0]=F*O,e[1]=(T*x*l-_*S*l-T*o*y+s*S*y+_*o*v-s*x*v)*O,e[2]=(f*S*l-T*h*l+T*o*p-s*S*p-f*o*v+s*h*v)*O,e[3]=(_*h*l-f*x*l-_*o*p+s*x*p+f*o*y-s*h*y)*O,e[4]=D*O,e[5]=(m*S*l-E*x*l+E*o*y-t*S*y-m*o*v+t*x*v)*O,e[6]=(E*h*l-c*S*l-E*o*p+t*S*p+c*o*v-t*h*v)*O,e[7]=(c*x*l-m*h*l+m*o*p-t*x*p-c*o*y+t*h*y)*O,e[8]=P*O,e[9]=(E*_*l-m*T*l-E*s*y+t*T*y+m*s*v-t*_*v)*O,e[10]=(c*T*l-E*f*l+E*s*p-t*T*p-c*s*v+t*f*v)*O,e[11]=(m*f*l-c*_*l-m*s*p+t*_*p+c*s*y-t*f*y)*O,e[12]=Y*O,e[13]=(m*T*o-E*_*o+E*s*x-t*T*x-m*s*S+t*_*S)*O,e[14]=(E*f*o-c*T*o-E*s*h+t*T*h+c*s*S-t*f*S)*O,e[15]=(c*_*o-m*f*o+m*s*h-t*_*h-c*s*x+t*f*x)*O,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,c=e.x,f=e.y,h=e.z,p=l*c,m=l*f;return this.set(p*c+s,p*f-o*h,p*h+o*f,0,p*f+o*h,m*f+s,m*h-o*c,0,p*h-o*f,m*h+o*c,l*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,c){return this.set(1,s,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,p=l+l,m=c+c,_=f+f,x=l*p,y=l*m,E=l*_,T=c*m,S=c*_,v=f*_,F=h*p,D=h*m,P=h*_,Y=s.x,B=s.y,O=s.z;return o[0]=(1-(T+v))*Y,o[1]=(y+P)*Y,o[2]=(E-D)*Y,o[3]=0,o[4]=(y-P)*B,o[5]=(1-(x+v))*B,o[6]=(S+F)*B,o[7]=0,o[8]=(E+D)*O,o[9]=(S-F)*O,o[10]=(1-(x+T))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;let l=Vs.set(o[0],o[1],o[2]).length();const c=Vs.set(o[4],o[5],o[6]).length(),f=Vs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],si.copy(this);const p=1/l,m=1/c,_=1/f;return si.elements[0]*=p,si.elements[1]*=p,si.elements[2]*=p,si.elements[4]*=m,si.elements[5]*=m,si.elements[6]*=m,si.elements[8]*=_,si.elements[9]*=_,si.elements[10]*=_,t.setFromRotationMatrix(si),s.x=l,s.y=c,s.z=f,this}makePerspective(e,t,s,o,l,c,f=Yi){const h=this.elements,p=2*l/(t-e),m=2*l/(s-o),_=(t+e)/(t-e),x=(s+o)/(s-o);let y,E;if(f===Yi)y=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(f===gu)y=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=p,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=m,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=y,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,s,o,l,c,f=Yi){const h=this.elements,p=1/(t-e),m=1/(s-o),_=1/(c-l),x=(t+e)*p,y=(s+o)*m;let E,T;if(f===Yi)E=(c+l)*_,T=-2*_;else if(f===gu)E=l*_,T=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*m,h[9]=0,h[13]=-y,h[2]=0,h[6]=0,h[10]=T,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const Vs=new re,si=new Bt,ay=new re(0,0,0),ly=new re(1,1,1),Mr=new re,Nl=new re,kn=new re,ng=new Bt,ig=new _a;class Ki{constructor(e=0,t=0,s=0,o=Ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],h=o[1],p=o[5],m=o[9],_=o[2],x=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(gt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-gt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return ng.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ng,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ig.setFromEuler(this),this.setFromQuaternion(ig,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ki.DEFAULT_ORDER="XYZ";class sh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uy=0;const rg=new re,Gs=new _a,ki=new Bt,Il=new re,ea=new re,cy=new re,fy=new _a,sg=new re(1,0,0),og=new re(0,1,0),ag=new re(0,0,1),lg={type:"added"},dy={type:"removed"},Ws={type:"childadded",child:null},Cf={type:"childremoved",child:null};class Tn extends _o{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=Lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const e=new re,t=new Ki,s=new _a,o=new re(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Bt},normalMatrix:{value:new st}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(sg,e)}rotateY(e){return this.rotateOnAxis(og,e)}rotateZ(e){return this.rotateOnAxis(ag,e)}translateOnAxis(e,t){return rg.copy(e).applyQuaternion(this.quaternion),this.position.add(rg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sg,e)}translateY(e){return this.translateOnAxis(og,e)}translateZ(e){return this.translateOnAxis(ag,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Il.copy(e):Il.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(ea,Il,this.up):ki.lookAt(Il,ea,this.up),this.quaternion.setFromRotationMatrix(ki),o&&(ki.extractRotation(o.matrixWorld),Gs.setFromRotationMatrix(ki),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lg),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dy),Cf.child=e,this.dispatchEvent(Cf),Cf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lg),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,e,cy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,fy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,m=h.length;p<m;p++){const _=h[p];l(e.shapes,_)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),p=c(e.textures),m=c(e.images),_=c(e.shapes),x=c(e.skeletons),y=c(e.animations),E=c(e.nodes);f.length>0&&(s.geometries=f),h.length>0&&(s.materials=h),p.length>0&&(s.textures=p),m.length>0&&(s.images=m),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=o,s;function c(f){const h=[];for(const p in f){const m=f[p];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}Tn.DEFAULT_UP=new re(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new re,Bi=new re,Pf=new re,Hi=new re,Xs=new re,Ys=new re,ug=new re,bf=new re,Lf=new re,Df=new re,Uf=new Xt,Nf=new Xt,If=new Xt;class Kn{constructor(e=new re,t=new re,s=new re){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),oi.subVectors(e,t),o.cross(oi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){oi.subVectors(o,t),Bi.subVectors(s,t),Pf.subVectors(e,t);const c=oi.dot(oi),f=oi.dot(Bi),h=oi.dot(Pf),p=Bi.dot(Bi),m=Bi.dot(Pf),_=c*p-f*f;if(_===0)return l.set(0,0,0),null;const x=1/_,y=(p*h-f*m)*x,E=(c*m-f*h)*x;return l.set(1-y-E,E,y)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,t,s,o,l,c,f,h){return this.getBarycoord(e,t,s,o,Hi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Hi.x),h.addScaledVector(c,Hi.y),h.addScaledVector(f,Hi.z),h)}static getInterpolatedAttribute(e,t,s,o,l,c){return Uf.setScalar(0),Nf.setScalar(0),If.setScalar(0),Uf.fromBufferAttribute(e,t),Nf.fromBufferAttribute(e,s),If.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Uf,l.x),c.addScaledVector(Nf,l.y),c.addScaledVector(If,l.z),c}static isFrontFacing(e,t,s,o){return oi.subVectors(s,t),Bi.subVectors(e,t),oi.cross(Bi).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),oi.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return Kn.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return Kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let c,f;Xs.subVectors(o,s),Ys.subVectors(l,s),bf.subVectors(e,s);const h=Xs.dot(bf),p=Ys.dot(bf);if(h<=0&&p<=0)return t.copy(s);Lf.subVectors(e,o);const m=Xs.dot(Lf),_=Ys.dot(Lf);if(m>=0&&_<=m)return t.copy(o);const x=h*_-m*p;if(x<=0&&h>=0&&m<=0)return c=h/(h-m),t.copy(s).addScaledVector(Xs,c);Df.subVectors(e,l);const y=Xs.dot(Df),E=Ys.dot(Df);if(E>=0&&y<=E)return t.copy(l);const T=y*p-h*E;if(T<=0&&p>=0&&E<=0)return f=p/(p-E),t.copy(s).addScaledVector(Ys,f);const S=m*E-y*_;if(S<=0&&_-m>=0&&y-E>=0)return ug.subVectors(l,o),f=(_-m)/(_-m+(y-E)),t.copy(o).addScaledVector(ug,f);const v=1/(S+T+x);return c=T*v,f=x*v,t.copy(s).addScaledVector(Xs,c).addScaledVector(Ys,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const b_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Er={h:0,s:0,l:0},Fl={h:0,s:0,l:0};function Ff(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}let Tt=class{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,t),this}setRGB(e,t,s,o=Et.workingColorSpace){return this.r=e,this.g=t,this.b=s,Et.toWorkingColorSpace(this,o),this}setHSL(e,t,s,o=Et.workingColorSpace){if(e=jx(e,1),t=gt(t,0,1),s=gt(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=Ff(c,l,e+1/3),this.g=Ff(c,l,e),this.b=Ff(c,l,e-1/3)}return Et.toWorkingColorSpace(this,o),this}setStyle(e,t=jn){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jn){const s=b_[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=so(e.r),this.g=so(e.g),this.b=so(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return Et.fromWorkingColorSpace(pn.copy(this),e),Math.round(gt(pn.r*255,0,255))*65536+Math.round(gt(pn.g*255,0,255))*256+Math.round(gt(pn.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.fromWorkingColorSpace(pn.copy(this),t);const s=pn.r,o=pn.g,l=pn.b,c=Math.max(s,o,l),f=Math.min(s,o,l);let h,p;const m=(f+c)/2;if(f===c)h=0,p=0;else{const _=c-f;switch(p=m<=.5?_/(c+f):_/(2-c-f),c){case s:h=(o-l)/_+(o<l?6:0);break;case o:h=(l-s)/_+2;break;case l:h=(s-o)/_+4;break}h/=6}return e.h=h,e.s=p,e.l=m,e}getRGB(e,t=Et.workingColorSpace){return Et.fromWorkingColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=jn){Et.fromWorkingColorSpace(pn.copy(this),e);const t=pn.r,s=pn.g,o=pn.b;return e!==jn?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(Er),this.setHSL(Er.h+e,Er.s+t,Er.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Er),e.getHSL(Fl);const s=xf(Er.h,Fl.h,t),o=xf(Er.s,Fl.s,t),l=xf(Er.l,Fl.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const pn=new Tt;Tt.NAMES=b_;let hy=0;class vo extends _o{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=Lr(),this.name="",this.type="Material",this.blending=io,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qf,this.blendDst=Jf,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Km,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==io&&(s.blending=this.blending),this.side!==Dr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Qf&&(s.blendSrc=this.blendSrc),this.blendDst!==Jf&&(s.blendDst=this.blendDst),this.blendEquation!==rs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==ao&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Km&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class oh extends vo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=p_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new re,Ol=new pt;class fi{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=Od,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Ol.fromBufferAttribute(this,t),Ol.applyMatrix3(e),this.setXY(t,Ol.x,Ol.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Si(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=bt(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Si(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Si(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Si(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),s=bt(s,this.array),o=bt(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),s=bt(s,this.array),o=bt(o,this.array),l=bt(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Od&&(e.usage=this.usage),e}}class L_ extends fi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class D_ extends fi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class di extends fi{constructor(e,t,s){super(new Float32Array(e),t,s)}}let py=0;const $n=new Bt,Of=new Tn,qs=new re,Bn=new va,ta=new va,nn=new re;class hi extends _o{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=Lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(R_(e)?D_:L_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new st().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,s){return $n.makeTranslation(e,t,s),this.applyMatrix4($n),this}scale(e,t,s){return $n.makeScale(e,t,s),this.applyMatrix4($n),this}lookAt(e){return Of.lookAt(e),Of.updateMatrix(),this.applyMatrix4(Of.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new di(s,3))}else{const s=Math.min(e.length,t.count);for(let o=0;o<s;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new va);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];Bn.setFromBufferAttribute(l),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const s=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];ta.setFromBufferAttribute(f),this.morphTargetsRelative?(nn.addVectors(Bn.min,ta.min),Bn.expandByPoint(nn),nn.addVectors(Bn.max,ta.max),Bn.expandByPoint(nn)):(Bn.expandByPoint(ta.min),Bn.expandByPoint(ta.max))}Bn.getCenter(s);let o=0;for(let l=0,c=e.count;l<c;l++)nn.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(nn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,m=f.count;p<m;p++)nn.fromBufferAttribute(f,p),h&&(qs.fromBufferAttribute(e,p),nn.add(qs)),o=Math.max(o,s.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let $=0;$<s.count;$++)f[$]=new re,h[$]=new re;const p=new re,m=new re,_=new re,x=new pt,y=new pt,E=new pt,T=new re,S=new re;function v($,C,R){p.fromBufferAttribute(s,$),m.fromBufferAttribute(s,C),_.fromBufferAttribute(s,R),x.fromBufferAttribute(l,$),y.fromBufferAttribute(l,C),E.fromBufferAttribute(l,R),m.sub(p),_.sub(p),y.sub(x),E.sub(x);const V=1/(y.x*E.y-E.x*y.y);isFinite(V)&&(T.copy(m).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(V),S.copy(_).multiplyScalar(y.x).addScaledVector(m,-E.x).multiplyScalar(V),f[$].add(T),f[C].add(T),f[R].add(T),h[$].add(S),h[C].add(S),h[R].add(S))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let $=0,C=F.length;$<C;++$){const R=F[$],V=R.start,fe=R.count;for(let oe=V,N=V+fe;oe<N;oe+=3)v(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const D=new re,P=new re,Y=new re,B=new re;function O($){Y.fromBufferAttribute(o,$),B.copy(Y);const C=f[$];D.copy(C),D.sub(Y.multiplyScalar(Y.dot(C))).normalize(),P.crossVectors(B,C);const V=P.dot(h[$])<0?-1:1;c.setXYZW($,D.x,D.y,D.z,V)}for(let $=0,C=F.length;$<C;++$){const R=F[$],V=R.start,fe=R.count;for(let oe=V,N=V+fe;oe<N;oe+=3)O(e.getX(oe+0)),O(e.getX(oe+1)),O(e.getX(oe+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new fi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let x=0,y=s.count;x<y;x++)s.setXYZ(x,0,0,0);const o=new re,l=new re,c=new re,f=new re,h=new re,p=new re,m=new re,_=new re;if(e)for(let x=0,y=e.count;x<y;x+=3){const E=e.getX(x+0),T=e.getX(x+1),S=e.getX(x+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,T),c.fromBufferAttribute(t,S),m.subVectors(c,l),_.subVectors(o,l),m.cross(_),f.fromBufferAttribute(s,E),h.fromBufferAttribute(s,T),p.fromBufferAttribute(s,S),f.add(m),h.add(m),p.add(m),s.setXYZ(E,f.x,f.y,f.z),s.setXYZ(T,h.x,h.y,h.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,y=t.count;x<y;x+=3)o.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),m.subVectors(c,l),_.subVectors(o,l),m.cross(_),s.setXYZ(x+0,m.x,m.y,m.z),s.setXYZ(x+1,m.x,m.y,m.z),s.setXYZ(x+2,m.x,m.y,m.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(f,h){const p=f.array,m=f.itemSize,_=f.normalized,x=new p.constructor(h.length*m);let y=0,E=0;for(let T=0,S=h.length;T<S;T++){f.isInterleavedBufferAttribute?y=h[T]*f.data.stride+f.offset:y=h[T]*m;for(let v=0;v<m;v++)x[E++]=p[y++]}return new fi(x,m,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hi,s=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,s);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let m=0,_=p.length;m<_;m++){const x=p[m],y=e(x,s);h.push(y)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const h in s){const p=s[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],m=[];for(let _=0,x=p.length;_<x;_++){const y=p[_];m.push(y.toJSON(e.data))}m.length>0&&(o[h]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const o=e.attributes;for(const p in o){const m=o[p];this.setAttribute(p,m.clone(t))}const l=e.morphAttributes;for(const p in l){const m=[],_=l[p];for(let x=0,y=_.length;x<y;x++)m.push(_[x].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,m=c.length;p<m;p++){const _=c[p];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cg=new Bt,Qr=new rh,zl=new Cu,fg=new re,kl=new re,Bl=new re,Hl=new re,zf=new re,Vl=new re,dg=new re,Gl=new re;class Ei extends Tn{constructor(e=new hi,t=new oh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Vl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const m=f[h],_=l[h];m!==0&&(zf.fromBufferAttribute(_,e),c?Vl.addScaledVector(zf,m):Vl.addScaledVector(zf.sub(t),m))}t.add(Vl)}return t}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),zl.copy(s.boundingSphere),zl.applyMatrix4(l),Qr.copy(e.ray).recast(e.near),!(zl.containsPoint(Qr.origin)===!1&&(Qr.intersectSphere(zl,fg)===null||Qr.origin.distanceToSquared(fg)>(e.far-e.near)**2))&&(cg.copy(l).invert(),Qr.copy(e.ray).applyMatrix4(cg),!(s.boundingBox!==null&&Qr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,Qr)))}_computeIntersections(e,t,s){let o;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,m=l.attributes.uv1,_=l.attributes.normal,x=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,T=x.length;E<T;E++){const S=x[E],v=c[S.materialIndex],F=Math.max(S.start,y.start),D=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let P=F,Y=D;P<Y;P+=3){const B=f.getX(P),O=f.getX(P+1),$=f.getX(P+2);o=Wl(this,v,e,s,p,m,_,B,O,$),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,y.start),T=Math.min(f.count,y.start+y.count);for(let S=E,v=T;S<v;S+=3){const F=f.getX(S),D=f.getX(S+1),P=f.getX(S+2);o=Wl(this,c,e,s,p,m,_,F,D,P),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(c))for(let E=0,T=x.length;E<T;E++){const S=x[E],v=c[S.materialIndex],F=Math.max(S.start,y.start),D=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let P=F,Y=D;P<Y;P+=3){const B=P,O=P+1,$=P+2;o=Wl(this,v,e,s,p,m,_,B,O,$),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,y.start),T=Math.min(h.count,y.start+y.count);for(let S=E,v=T;S<v;S+=3){const F=S,D=S+1,P=S+2;o=Wl(this,c,e,s,p,m,_,F,D,P),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function my(i,e,t,s,o,l,c,f){let h;if(e.side===Nn?h=s.intersectTriangle(c,l,o,!0,f):h=s.intersectTriangle(o,l,c,e.side===Dr,f),h===null)return null;Gl.copy(f),Gl.applyMatrix4(i.matrixWorld);const p=t.ray.origin.distanceTo(Gl);return p<t.near||p>t.far?null:{distance:p,point:Gl.clone(),object:i}}function Wl(i,e,t,s,o,l,c,f,h,p){i.getVertexPosition(f,kl),i.getVertexPosition(h,Bl),i.getVertexPosition(p,Hl);const m=my(i,e,t,s,kl,Bl,Hl,dg);if(m){const _=new re;Kn.getBarycoord(dg,kl,Bl,Hl,_),o&&(m.uv=Kn.getInterpolatedAttribute(o,f,h,p,_,new pt)),l&&(m.uv1=Kn.getInterpolatedAttribute(l,f,h,p,_,new pt)),c&&(m.normal=Kn.getInterpolatedAttribute(c,f,h,p,_,new re),m.normal.dot(s.direction)>0&&m.normal.multiplyScalar(-1));const x={a:f,b:h,c:p,normal:new re,materialIndex:0};Kn.getNormal(kl,Bl,Hl,x.normal),m.face=x,m.barycoord=_}return m}class xa extends hi{constructor(e=1,t=1,s=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const h=[],p=[],m=[],_=[];let x=0,y=0;E("z","y","x",-1,-1,s,t,e,c,l,0),E("z","y","x",1,-1,s,t,-e,c,l,1),E("x","z","y",1,1,e,s,t,o,c,2),E("x","z","y",1,-1,e,s,-t,o,c,3),E("x","y","z",1,-1,e,t,s,o,l,4),E("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(h),this.setAttribute("position",new di(p,3)),this.setAttribute("normal",new di(m,3)),this.setAttribute("uv",new di(_,2));function E(T,S,v,F,D,P,Y,B,O,$,C){const R=P/O,V=Y/$,fe=P/2,oe=Y/2,N=B/2,K=O+1,z=$+1;let j=0,I=0;const te=new re;for(let Q=0;Q<z;Q++){const L=Q*V-oe;for(let ee=0;ee<K;ee++){const Te=ee*R-fe;te[T]=Te*F,te[S]=L*D,te[v]=N,p.push(te.x,te.y,te.z),te[T]=0,te[S]=0,te[v]=B>0?1:-1,m.push(te.x,te.y,te.z),_.push(ee/O),_.push(1-Q/$),j+=1}}for(let Q=0;Q<$;Q++)for(let L=0;L<O;L++){const ee=x+L+K*Q,Te=x+L+K*(Q+1),Z=x+(L+1)+K*(Q+1),ce=x+(L+1)+K*Q;h.push(ee,Te,ce),h.push(Te,Z,ce),I+=6}f.addGroup(y,I,C),y+=I,x+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function po(i){const e={};for(const t in i){e[t]={};for(const s in i[t]){const o=i[t][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone():Array.isArray(o)?e[t][s]=o.slice():e[t][s]=o}}return e}function Mn(i){const e={};for(let t=0;t<i.length;t++){const s=po(i[t]);for(const o in s)e[o]=s[o]}return e}function gy(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function U_(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const _y={clone:po,merge:Mn};var vy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ur extends vo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vy,this.fragmentShader=xy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=po(e.uniforms),this.uniformsGroups=gy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class N_ extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wr=new re,hg=new pt,pg=new pt;class ai extends N_{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zd*2*Math.atan(Math.tan(vf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wr.x,wr.y).multiplyScalar(-e/wr.z),wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(wr.x,wr.y).multiplyScalar(-e/wr.z)}getViewSize(e,t){return this.getViewBounds(e,hg,pg),t.subVectors(pg,hg)}setViewOffset(e,t,s,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vf*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,p=c.fullHeight;l+=c.offsetX*o/h,t-=c.offsetY*s/p,o*=c.width/h,s*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $s=-90,js=1;class yy extends Tn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ai($s,js,e,t);o.layers=this.layers,this.add(o);const l=new ai($s,js,e,t);l.layers=this.layers,this.add(l);const c=new ai($s,js,e,t);c.layers=this.layers,this.add(c);const f=new ai($s,js,e,t);f.layers=this.layers,this.add(f);const h=new ai($s,js,e,t);h.layers=this.layers,this.add(h);const p=new ai($s,js,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,c,f,h]=t;for(const p of t)this.remove(p);if(e===Yi)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===gu)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,p,m]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,o),e.render(t,l),e.setRenderTarget(s,1,o),e.render(t,c),e.setRenderTarget(s,2,o),e.render(t,f),e.setRenderTarget(s,3,o),e.render(t,h),e.setRenderTarget(s,4,o),e.render(t,p),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,o),e.render(t,m),e.setRenderTarget(_,x,y),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class I_ extends wn{constructor(e,t,s,o,l,c,f,h,p,m){e=e!==void 0?e:[],t=t!==void 0?t:lo,super(e,t,s,o,l,c,f,h,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sy extends fs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new I_(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new xa(5,5,5),l=new Ur({name:"CubemapFromEquirect",uniforms:po(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Nn,blending:Pr});l.uniforms.tEquirect.value=t;const c=new Ei(o,l),f=t.minFilter;return t.minFilter===as&&(t.minFilter=Mi),new yy(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,s,o){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,o);e.setRenderTarget(l)}}class My extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ki,this.environmentIntensity=1,this.environmentRotation=new Ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ey{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Od,this.updateRanges=[],this.version=0,this.uuid=Lr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,s){e*=this.stride,s*=t.stride;for(let o=0,l=this.stride;o<l;o++)this.array[e+o]=t.array[s+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Lr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(t,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Lr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Sn=new re;class vu{constructor(e,t,s,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=s,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,s=this.data.count;t<s;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}getComponent(e,t){let s=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(s=Si(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=bt(s,this.array)),this.data.array[e*this.data.stride+this.offset+t]=s,this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Si(t,this.array)),t}setXY(e,t,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),s=bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this}setXYZ(e,t,s,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),s=bt(s,this.array),o=bt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this.data.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),s=bt(s,this.array),o=bt(o,this.array),l=bt(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this.data.array[e+2]=o,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let s=0;s<this.count;s++){const o=s*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return new fi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new vu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let s=0;s<this.count;s++){const o=s*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class F_ extends vo{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ks;const na=new re,Zs=new re,Qs=new re,Js=new pt,ia=new pt,O_=new Bt,Xl=new re,ra=new re,Yl=new re,mg=new pt,kf=new pt,gg=new pt;class wy extends Tn{constructor(e=new F_){if(super(),this.isSprite=!0,this.type="Sprite",Ks===void 0){Ks=new hi;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new Ey(t,5);Ks.setIndex([0,1,2,0,2,3]),Ks.setAttribute("position",new vu(s,3,0,!1)),Ks.setAttribute("uv",new vu(s,2,3,!1))}this.geometry=Ks,this.material=e,this.center=new pt(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zs.setFromMatrixScale(this.matrixWorld),O_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Qs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zs.multiplyScalar(-Qs.z);const s=this.material.rotation;let o,l;s!==0&&(l=Math.cos(s),o=Math.sin(s));const c=this.center;ql(Xl.set(-.5,-.5,0),Qs,c,Zs,o,l),ql(ra.set(.5,-.5,0),Qs,c,Zs,o,l),ql(Yl.set(.5,.5,0),Qs,c,Zs,o,l),mg.set(0,0),kf.set(1,0),gg.set(1,1);let f=e.ray.intersectTriangle(Xl,ra,Yl,!1,na);if(f===null&&(ql(ra.set(-.5,.5,0),Qs,c,Zs,o,l),kf.set(0,1),f=e.ray.intersectTriangle(Xl,Yl,ra,!1,na),f===null))return;const h=e.ray.origin.distanceTo(na);h<e.near||h>e.far||t.push({distance:h,point:na.clone(),uv:Kn.getInterpolation(na,Xl,ra,Yl,mg,kf,gg,new pt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ql(i,e,t,s,o,l){Js.subVectors(i,t).addScalar(.5).multiply(s),o!==void 0?(ia.x=l*Js.x-o*Js.y,ia.y=o*Js.x+l*Js.y):ia.copy(Js),i.copy(e),i.x+=ia.x,i.y+=ia.y,i.applyMatrix4(O_)}const Bf=new re,Ty=new re,Ay=new st;class ns{constructor(e=new re(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=Bf.subVectors(s,t).cross(Ty.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(Bf),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||Ay.getNormalMatrix(e),o=this.coplanarPoint(Bf).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jr=new Cu,$l=new re;class z_{constructor(e=new ns,t=new ns,s=new ns,o=new ns,l=new ns,c=new ns){this.planes=[e,t,s,o,l,c]}set(e,t,s,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Yi){const s=this.planes,o=e.elements,l=o[0],c=o[1],f=o[2],h=o[3],p=o[4],m=o[5],_=o[6],x=o[7],y=o[8],E=o[9],T=o[10],S=o[11],v=o[12],F=o[13],D=o[14],P=o[15];if(s[0].setComponents(h-l,x-p,S-y,P-v).normalize(),s[1].setComponents(h+l,x+p,S+y,P+v).normalize(),s[2].setComponents(h+c,x+m,S+E,P+F).normalize(),s[3].setComponents(h-c,x-m,S-E,P-F).normalize(),s[4].setComponents(h-f,x-_,S-T,P-D).normalize(),t===Yi)s[5].setComponents(h+f,x+_,S+T,P+D).normalize();else if(t===gu)s[5].setComponents(f,_,T,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jr)}intersectsSprite(e){return Jr.center.set(0,0,0),Jr.radius=.7071067811865476,Jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jr)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if($l.x=o.normal.x>0?e.max.x:e.min.x,$l.y=o.normal.y>0?e.max.y:e.min.y,$l.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint($l)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class k_ extends vo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xu=new re,yu=new re,_g=new Bt,sa=new rh,jl=new Cu,Hf=new re,vg=new re;let Ry=class extends Tn{constructor(e=new hi,t=new k_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let o=1,l=t.count;o<l;o++)xu.fromBufferAttribute(t,o-1),yu.fromBufferAttribute(t,o),s[o]=s[o-1],s[o]+=xu.distanceTo(yu);e.setAttribute("lineDistance",new di(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,c=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),jl.copy(s.boundingSphere),jl.applyMatrix4(o),jl.radius+=l,e.ray.intersectsSphere(jl)===!1)return;_g.copy(o).invert(),sa.copy(e.ray).applyMatrix4(_g);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=this.isLineSegments?2:1,m=s.index,x=s.attributes.position;if(m!==null){const y=Math.max(0,c.start),E=Math.min(m.count,c.start+c.count);for(let T=y,S=E-1;T<S;T+=p){const v=m.getX(T),F=m.getX(T+1),D=Kl(this,e,sa,h,v,F);D&&t.push(D)}if(this.isLineLoop){const T=m.getX(E-1),S=m.getX(y),v=Kl(this,e,sa,h,T,S);v&&t.push(v)}}else{const y=Math.max(0,c.start),E=Math.min(x.count,c.start+c.count);for(let T=y,S=E-1;T<S;T+=p){const v=Kl(this,e,sa,h,T,T+1);v&&t.push(v)}if(this.isLineLoop){const T=Kl(this,e,sa,h,E-1,y);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}};function Kl(i,e,t,s,o,l){const c=i.geometry.attributes.position;if(xu.fromBufferAttribute(c,o),yu.fromBufferAttribute(c,l),t.distanceSqToSegment(xu,yu,Hf,vg)>s)return;Hf.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(Hf);if(!(h<e.near||h>e.far))return{distance:h,point:vg.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}class Zl extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Cy extends wn{constructor(e,t,s,o,l,c,f,h,p){super(e,t,s,o,l,c,f,h,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class B_ extends wn{constructor(e,t,s,o,l,c,f,h,p,m=ro){if(m!==ro&&m!==fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&m===ro&&(s=cs),s===void 0&&m===fo&&(s=co),super(null,o,l,c,f,h,m,s,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=f!==void 0?f:ci,this.minFilter=h!==void 0?h:ci,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ah extends hi{constructor(e=1,t=32,s=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:s,thetaLength:o},t=Math.max(3,t);const l=[],c=[],f=[],h=[],p=new re,m=new pt;c.push(0,0,0),f.push(0,0,1),h.push(.5,.5);for(let _=0,x=3;_<=t;_++,x+=3){const y=s+_/t*o;p.x=e*Math.cos(y),p.y=e*Math.sin(y),c.push(p.x,p.y,p.z),f.push(0,0,1),m.x=(c[x]/e+1)/2,m.y=(c[x+1]/e+1)/2,h.push(m.x,m.y)}for(let _=1;_<=t;_++)l.push(_,_+1,0);this.setIndex(l),this.setAttribute("position",new di(c,3)),this.setAttribute("normal",new di(f,3)),this.setAttribute("uv",new di(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ah(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Pu extends hi{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,c=t/2,f=Math.floor(s),h=Math.floor(o),p=f+1,m=h+1,_=e/f,x=t/h,y=[],E=[],T=[],S=[];for(let v=0;v<m;v++){const F=v*x-c;for(let D=0;D<p;D++){const P=D*_-l;E.push(P,-F,0),T.push(0,0,1),S.push(D/f),S.push(1-v/h)}}for(let v=0;v<h;v++)for(let F=0;F<f;F++){const D=F+p*v,P=F+p*(v+1),Y=F+1+p*(v+1),B=F+1+p*v;y.push(D,P,B),y.push(P,Y,B)}this.setIndex(y),this.setAttribute("position",new di(E,3)),this.setAttribute("normal",new di(T,3)),this.setAttribute("uv",new di(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Py extends vo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class by extends vo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ly extends k_{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class H_ extends N_{constructor(e=-1,t=1,s=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,c=s+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=m*this.view.offsetY,h=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Dy extends ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const xg=new Bt;class Uy{constructor(e,t,s=0,o=1/0){this.ray=new rh(e,t),this.near=s,this.far=o,this.camera=null,this.layers=new sh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return xg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xg),this}intersectObject(e,t=!0,s=[]){return kd(e,this,s,t),s.sort(yg),s}intersectObjects(e,t=!0,s=[]){for(let o=0,l=e.length;o<l;o++)kd(e[o],this,s,t);return s.sort(yg),s}}function yg(i,e){return i.distance-e.distance}function kd(i,e,t,s){let o=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(o=!1),o===!0&&s===!0){const l=i.children;for(let c=0,f=l.length;c<f;c++)kd(l[c],e,t,!0)}}function Sg(i,e,t,s){const o=Ny(s);switch(t){case x_:return i*e;case S_:return i*e;case M_:return i*e*2;case E_:return i*e/o.components*o.byteLength;case th:return i*e/o.components*o.byteLength;case w_:return i*e*2/o.components*o.byteLength;case nh:return i*e*2/o.components*o.byteLength;case y_:return i*e*3/o.components*o.byteLength;case ui:return i*e*4/o.components*o.byteLength;case ih:return i*e*4/o.components*o.byteLength;case su:case ou:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case au:case lu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case dd:case pd:return Math.max(i,16)*Math.max(e,8)/4;case fd:case hd:return Math.max(i,8)*Math.max(e,8)/2;case md:case gd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _d:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xd:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case yd:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Md:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ed:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case wd:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Td:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ad:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Cd:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Pd:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case bd:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ld:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case uu:case Dd:case Ud:return Math.ceil(i/4)*Math.ceil(e/4)*16;case T_:case Nd:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Id:case Fd:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ny(i){switch(i){case ji:case g_:return{byteLength:1,components:1};case fa:case __:case ga:return{byteLength:2,components:1};case Jd:case eh:return{byteLength:2,components:4};case cs:case Qd:case Xi:return{byteLength:4,components:1};case v_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zd);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function V_(){let i=null,e=!1,t=null,s=null;function o(l,c){t(l,c),s=i.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(s=i.requestAnimationFrame(o),e=!0)},stop:function(){i.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){i=l}}}function Iy(i){const e=new WeakMap;function t(f,h){const p=f.array,m=f.usage,_=p.byteLength,x=i.createBuffer();i.bindBuffer(h,x),i.bufferData(h,p,m),f.onUploadCallback();let y;if(p instanceof Float32Array)y=i.FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=i.SHORT;else if(p instanceof Uint32Array)y=i.UNSIGNED_INT;else if(p instanceof Int32Array)y=i.INT;else if(p instanceof Int8Array)y=i.BYTE;else if(p instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:_}}function s(f,h,p){const m=h.array,_=h.updateRanges;if(i.bindBuffer(p,f),_.length===0)i.bufferSubData(p,0,m);else{_.sort((y,E)=>y.start-E.start);let x=0;for(let y=1;y<_.length;y++){const E=_[x],T=_[y];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++x,_[x]=T)}_.length=x+1;for(let y=0,E=_.length;y<E;y++){const T=_[y];i.bufferSubData(p,T.start*m.BYTES_PER_ELEMENT,m,T.start,T.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(i.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:c}}var Fy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Oy=`#ifdef USE_ALPHAHASH
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
#endif`,zy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ky=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,By=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vy=`#ifdef USE_AOMAP
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
#endif`,Gy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wy=`#ifdef USE_BATCHING
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
#endif`,Xy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$y=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jy=`#ifdef USE_IRIDESCENCE
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
#endif`,Ky=`#ifdef USE_BUMPMAP
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
#endif`,Zy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sS=`#define PI 3.141592653589793
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
} // validated`,oS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,aS=`vec3 transformedNormal = objectNormal;
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
#endif`,lS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dS="gl_FragColor = linearToOutputTexel( gl_FragColor );",hS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pS=`#ifdef USE_ENVMAP
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
#endif`,mS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gS=`#ifdef USE_ENVMAP
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
#endif`,_S=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vS=`#ifdef USE_ENVMAP
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
#endif`,xS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,MS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ES=`#ifdef USE_GRADIENTMAP
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
}`,wS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,AS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RS=`uniform bool receiveShadow;
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
#endif`,CS=`#ifdef USE_ENVMAP
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
#endif`,PS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,US=`PhysicalMaterial material;
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
#endif`,NS=`struct PhysicalMaterial {
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
}`,IS=`
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
#endif`,FS=`#if defined( RE_IndirectDiffuse )
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
#endif`,OS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,VS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,GS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,WS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,XS=`#if defined( USE_POINTS_UV )
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
#endif`,YS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$S=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZS=`#ifdef USE_MORPHTARGETS
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
#endif`,QS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,eM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rM=`#ifdef USE_NORMALMAP
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
#endif`,sM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_M=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yM=`float getShadowMask() {
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
}`,SM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,MM=`#ifdef USE_SKINNING
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
#endif`,EM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wM=`#ifdef USE_SKINNING
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
#endif`,TM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,AM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,PM=`#ifdef USE_TRANSMISSION
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
#endif`,bM=`#ifdef USE_TRANSMISSION
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
#endif`,LM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const IM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FM=`uniform sampler2D t2D;
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
}`,OM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HM=`#include <common>
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
}`,VM=`#if DEPTH_PACKING == 3200
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
}`,GM=`#define DISTANCE
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
}`,WM=`#define DISTANCE
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
}`,XM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qM=`uniform float scale;
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
}`,$M=`uniform vec3 diffuse;
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
}`,jM=`#include <common>
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
}`,KM=`uniform vec3 diffuse;
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
}`,ZM=`#define LAMBERT
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
}`,QM=`#define LAMBERT
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
}`,JM=`#define MATCAP
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
}`,eE=`#define MATCAP
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
}`,tE=`#define NORMAL
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
}`,nE=`#define NORMAL
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
}`,iE=`#define PHONG
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
}`,rE=`#define PHONG
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
}`,sE=`#define STANDARD
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
}`,oE=`#define STANDARD
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
}`,aE=`#define TOON
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
}`,lE=`#define TOON
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
}`,uE=`uniform float size;
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
}`,cE=`uniform vec3 diffuse;
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
}`,fE=`#include <common>
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
}`,dE=`uniform vec3 color;
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
}`,hE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,pE=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:Fy,alphahash_pars_fragment:Oy,alphamap_fragment:zy,alphamap_pars_fragment:ky,alphatest_fragment:By,alphatest_pars_fragment:Hy,aomap_fragment:Vy,aomap_pars_fragment:Gy,batching_pars_vertex:Wy,batching_vertex:Xy,begin_vertex:Yy,beginnormal_vertex:qy,bsdfs:$y,iridescence_fragment:jy,bumpmap_pars_fragment:Ky,clipping_planes_fragment:Zy,clipping_planes_pars_fragment:Qy,clipping_planes_pars_vertex:Jy,clipping_planes_vertex:eS,color_fragment:tS,color_pars_fragment:nS,color_pars_vertex:iS,color_vertex:rS,common:sS,cube_uv_reflection_fragment:oS,defaultnormal_vertex:aS,displacementmap_pars_vertex:lS,displacementmap_vertex:uS,emissivemap_fragment:cS,emissivemap_pars_fragment:fS,colorspace_fragment:dS,colorspace_pars_fragment:hS,envmap_fragment:pS,envmap_common_pars_fragment:mS,envmap_pars_fragment:gS,envmap_pars_vertex:_S,envmap_physical_pars_fragment:CS,envmap_vertex:vS,fog_vertex:xS,fog_pars_vertex:yS,fog_fragment:SS,fog_pars_fragment:MS,gradientmap_pars_fragment:ES,lightmap_pars_fragment:wS,lights_lambert_fragment:TS,lights_lambert_pars_fragment:AS,lights_pars_begin:RS,lights_toon_fragment:PS,lights_toon_pars_fragment:bS,lights_phong_fragment:LS,lights_phong_pars_fragment:DS,lights_physical_fragment:US,lights_physical_pars_fragment:NS,lights_fragment_begin:IS,lights_fragment_maps:FS,lights_fragment_end:OS,logdepthbuf_fragment:zS,logdepthbuf_pars_fragment:kS,logdepthbuf_pars_vertex:BS,logdepthbuf_vertex:HS,map_fragment:VS,map_pars_fragment:GS,map_particle_fragment:WS,map_particle_pars_fragment:XS,metalnessmap_fragment:YS,metalnessmap_pars_fragment:qS,morphinstance_vertex:$S,morphcolor_vertex:jS,morphnormal_vertex:KS,morphtarget_pars_vertex:ZS,morphtarget_vertex:QS,normal_fragment_begin:JS,normal_fragment_maps:eM,normal_pars_fragment:tM,normal_pars_vertex:nM,normal_vertex:iM,normalmap_pars_fragment:rM,clearcoat_normal_fragment_begin:sM,clearcoat_normal_fragment_maps:oM,clearcoat_pars_fragment:aM,iridescence_pars_fragment:lM,opaque_fragment:uM,packing:cM,premultiplied_alpha_fragment:fM,project_vertex:dM,dithering_fragment:hM,dithering_pars_fragment:pM,roughnessmap_fragment:mM,roughnessmap_pars_fragment:gM,shadowmap_pars_fragment:_M,shadowmap_pars_vertex:vM,shadowmap_vertex:xM,shadowmask_pars_fragment:yM,skinbase_vertex:SM,skinning_pars_vertex:MM,skinning_vertex:EM,skinnormal_vertex:wM,specularmap_fragment:TM,specularmap_pars_fragment:AM,tonemapping_fragment:RM,tonemapping_pars_fragment:CM,transmission_fragment:PM,transmission_pars_fragment:bM,uv_pars_fragment:LM,uv_pars_vertex:DM,uv_vertex:UM,worldpos_vertex:NM,background_vert:IM,background_frag:FM,backgroundCube_vert:OM,backgroundCube_frag:zM,cube_vert:kM,cube_frag:BM,depth_vert:HM,depth_frag:VM,distanceRGBA_vert:GM,distanceRGBA_frag:WM,equirect_vert:XM,equirect_frag:YM,linedashed_vert:qM,linedashed_frag:$M,meshbasic_vert:jM,meshbasic_frag:KM,meshlambert_vert:ZM,meshlambert_frag:QM,meshmatcap_vert:JM,meshmatcap_frag:eE,meshnormal_vert:tE,meshnormal_frag:nE,meshphong_vert:iE,meshphong_frag:rE,meshphysical_vert:sE,meshphysical_frag:oE,meshtoon_vert:aE,meshtoon_frag:lE,points_vert:uE,points_frag:cE,shadow_vert:fE,shadow_frag:dE,sprite_vert:hE,sprite_frag:pE},Pe={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},yi={basic:{uniforms:Mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:Mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Tt(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:Mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:Mn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:Mn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Tt(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:Mn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:Mn([Pe.points,Pe.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:Mn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:Mn([Pe.common,Pe.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:Mn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:Mn([Pe.sprite,Pe.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:Mn([Pe.common,Pe.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:Mn([Pe.lights,Pe.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};yi.physical={uniforms:Mn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const Ql={r:0,b:0,g:0},es=new Ki,mE=new Bt;function gE(i,e,t,s,o,l,c){const f=new Tt(0);let h=l===!0?0:1,p,m,_=null,x=0,y=null;function E(D){let P=D.isScene===!0?D.background:null;return P&&P.isTexture&&(P=(D.backgroundBlurriness>0?t:e).get(P)),P}function T(D){let P=!1;const Y=E(D);Y===null?v(f,h):Y&&Y.isColor&&(v(Y,1),P=!0);const B=i.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(i.autoClear||P)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(D,P){const Y=E(P);Y&&(Y.isCubeTexture||Y.mapping===Ru)?(m===void 0&&(m=new Ei(new xa(1,1,1),new Ur({name:"BackgroundCubeMaterial",uniforms:po(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(B,O,$){this.matrixWorld.copyPosition($.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),es.copy(P.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,Y.isCubeTexture&&Y.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),m.material.uniforms.envMap.value=Y,m.material.uniforms.flipEnvMap.value=Y.isCubeTexture&&Y.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(mE.makeRotationFromEuler(es)),m.material.toneMapped=Et.getTransfer(Y.colorSpace)!==Pt,(_!==Y||x!==Y.version||y!==i.toneMapping)&&(m.material.needsUpdate=!0,_=Y,x=Y.version,y=i.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null)):Y&&Y.isTexture&&(p===void 0&&(p=new Ei(new Pu(2,2),new Ur({name:"BackgroundMaterial",uniforms:po(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=Y,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=Et.getTransfer(Y.colorSpace)!==Pt,Y.matrixAutoUpdate===!0&&Y.updateMatrix(),p.material.uniforms.uvTransform.value.copy(Y.matrix),(_!==Y||x!==Y.version||y!==i.toneMapping)&&(p.material.needsUpdate=!0,_=Y,x=Y.version,y=i.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function v(D,P){D.getRGB(Ql,U_(i)),s.buffers.color.setClear(Ql.r,Ql.g,Ql.b,P,c)}function F(){m!==void 0&&(m.geometry.dispose(),m.material.dispose()),p!==void 0&&(p.geometry.dispose(),p.material.dispose())}return{getClearColor:function(){return f},setClearColor:function(D,P=1){f.set(D),h=P,v(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,v(f,h)},render:T,addToRenderList:S,dispose:F}}function _E(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),s={},o=x(null);let l=o,c=!1;function f(R,V,fe,oe,N){let K=!1;const z=_(oe,fe,V);l!==z&&(l=z,p(l.object)),K=y(R,oe,fe,N),K&&E(R,oe,fe,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(K||c)&&(c=!1,P(R,V,fe,oe),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function h(){return i.createVertexArray()}function p(R){return i.bindVertexArray(R)}function m(R){return i.deleteVertexArray(R)}function _(R,V,fe){const oe=fe.wireframe===!0;let N=s[R.id];N===void 0&&(N={},s[R.id]=N);let K=N[V.id];K===void 0&&(K={},N[V.id]=K);let z=K[oe];return z===void 0&&(z=x(h()),K[oe]=z),z}function x(R){const V=[],fe=[],oe=[];for(let N=0;N<t;N++)V[N]=0,fe[N]=0,oe[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:fe,attributeDivisors:oe,object:R,attributes:{},index:null}}function y(R,V,fe,oe){const N=l.attributes,K=V.attributes;let z=0;const j=fe.getAttributes();for(const I in j)if(j[I].location>=0){const Q=N[I];let L=K[I];if(L===void 0&&(I==="instanceMatrix"&&R.instanceMatrix&&(L=R.instanceMatrix),I==="instanceColor"&&R.instanceColor&&(L=R.instanceColor)),Q===void 0||Q.attribute!==L||L&&Q.data!==L.data)return!0;z++}return l.attributesNum!==z||l.index!==oe}function E(R,V,fe,oe){const N={},K=V.attributes;let z=0;const j=fe.getAttributes();for(const I in j)if(j[I].location>=0){let Q=K[I];Q===void 0&&(I==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),I==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor));const L={};L.attribute=Q,Q&&Q.data&&(L.data=Q.data),N[I]=L,z++}l.attributes=N,l.attributesNum=z,l.index=oe}function T(){const R=l.newAttributes;for(let V=0,fe=R.length;V<fe;V++)R[V]=0}function S(R){v(R,0)}function v(R,V){const fe=l.newAttributes,oe=l.enabledAttributes,N=l.attributeDivisors;fe[R]=1,oe[R]===0&&(i.enableVertexAttribArray(R),oe[R]=1),N[R]!==V&&(i.vertexAttribDivisor(R,V),N[R]=V)}function F(){const R=l.newAttributes,V=l.enabledAttributes;for(let fe=0,oe=V.length;fe<oe;fe++)V[fe]!==R[fe]&&(i.disableVertexAttribArray(fe),V[fe]=0)}function D(R,V,fe,oe,N,K,z){z===!0?i.vertexAttribIPointer(R,V,fe,N,K):i.vertexAttribPointer(R,V,fe,oe,N,K)}function P(R,V,fe,oe){T();const N=oe.attributes,K=fe.getAttributes(),z=V.defaultAttributeValues;for(const j in K){const I=K[j];if(I.location>=0){let te=N[j];if(te===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(te=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(te=R.instanceColor)),te!==void 0){const Q=te.normalized,L=te.itemSize,ee=e.get(te);if(ee===void 0)continue;const Te=ee.buffer,Z=ee.type,ce=ee.bytesPerElement,xe=Z===i.INT||Z===i.UNSIGNED_INT||te.gpuType===Qd;if(te.isInterleavedBufferAttribute){const pe=te.data,we=pe.stride,De=te.offset;if(pe.isInstancedInterleavedBuffer){for(let Ze=0;Ze<I.locationSize;Ze++)v(I.location+Ze,pe.meshPerAttribute);R.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ze=0;Ze<I.locationSize;Ze++)S(I.location+Ze);i.bindBuffer(i.ARRAY_BUFFER,Te);for(let Ze=0;Ze<I.locationSize;Ze++)D(I.location+Ze,L/I.locationSize,Z,Q,we*ce,(De+L/I.locationSize*Ze)*ce,xe)}else{if(te.isInstancedBufferAttribute){for(let pe=0;pe<I.locationSize;pe++)v(I.location+pe,te.meshPerAttribute);R.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let pe=0;pe<I.locationSize;pe++)S(I.location+pe);i.bindBuffer(i.ARRAY_BUFFER,Te);for(let pe=0;pe<I.locationSize;pe++)D(I.location+pe,L/I.locationSize,Z,Q,L*ce,L/I.locationSize*pe*ce,xe)}}else if(z!==void 0){const Q=z[j];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(I.location,Q);break;case 3:i.vertexAttrib3fv(I.location,Q);break;case 4:i.vertexAttrib4fv(I.location,Q);break;default:i.vertexAttrib1fv(I.location,Q)}}}}F()}function Y(){$();for(const R in s){const V=s[R];for(const fe in V){const oe=V[fe];for(const N in oe)m(oe[N].object),delete oe[N];delete V[fe]}delete s[R]}}function B(R){if(s[R.id]===void 0)return;const V=s[R.id];for(const fe in V){const oe=V[fe];for(const N in oe)m(oe[N].object),delete oe[N];delete V[fe]}delete s[R.id]}function O(R){for(const V in s){const fe=s[V];if(fe[R.id]===void 0)continue;const oe=fe[R.id];for(const N in oe)m(oe[N].object),delete oe[N];delete fe[R.id]}}function $(){C(),c=!0,l!==o&&(l=o,p(l.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:$,resetDefaultState:C,dispose:Y,releaseStatesOfGeometry:B,releaseStatesOfProgram:O,initAttributes:T,enableAttribute:S,disableUnusedAttributes:F}}function vE(i,e,t){let s;function o(p){s=p}function l(p,m){i.drawArrays(s,p,m),t.update(m,s,1)}function c(p,m,_){_!==0&&(i.drawArraysInstanced(s,p,m,_),t.update(m,s,_))}function f(p,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,_);let y=0;for(let E=0;E<_;E++)y+=m[E];t.update(y,s,1)}function h(p,m,_,x){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)c(p[E],m[E],x[E]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,m,0,x,0,_);let E=0;for(let T=0;T<_;T++)E+=m[T]*x[T];t.update(E,s,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function xE(i,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=i.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(O){return!(O!==ui&&s.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const $=O===ga&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==ji&&s.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Xi&&!$)}function h(O){if(O==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const m=h(p);m!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",m,"instead."),p=m);const _=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),F=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),D=i.getParameter(i.MAX_VARYING_VECTORS),P=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),Y=E>0,B=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:F,maxVaryings:D,maxFragmentUniforms:P,vertexTextures:Y,maxSamples:B}}function yE(i){const e=this;let t=null,s=0,o=!1,l=!1;const c=new ns,f=new st,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const y=_.length!==0||x||s!==0||o;return o=x,s=_.length,y},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,x){t=m(_,x,0)},this.setState=function(_,x,y){const E=_.clippingPlanes,T=_.clipIntersection,S=_.clipShadows,v=i.get(_);if(!o||E===null||E.length===0||l&&!S)l?m(null):p();else{const F=l?0:s,D=F*4;let P=v.clippingState||null;h.value=P,P=m(E,x,D,y);for(let Y=0;Y!==D;++Y)P[Y]=t[Y];v.clippingState=P,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=F}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function m(_,x,y,E){const T=_!==null?_.length:0;let S=null;if(T!==0){if(S=h.value,E!==!0||S===null){const v=y+T*4,F=x.matrixWorldInverse;f.getNormalMatrix(F),(S===null||S.length<v)&&(S=new Float32Array(v));for(let D=0,P=y;D!==T;++D,P+=4)c.copy(_[D]).applyMatrix4(F,f),c.normal.toArray(S,P),S[P+3]=c.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function SE(i){let e=new WeakMap;function t(c,f){return f===ad?c.mapping=lo:f===ld&&(c.mapping=uo),c}function s(c){if(c&&c.isTexture){const f=c.mapping;if(f===ad||f===ld)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const p=new Sy(h.height);return p.fromEquirectangularTexture(i,c),e.set(c,p),c.addEventListener("dispose",o),t(p.texture,c.mapping)}else return null}}return c}function o(c){const f=c.target;f.removeEventListener("dispose",o);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}const no=4,Mg=[.125,.215,.35,.446,.526,.582],ss=20,Vf=new H_,Eg=new Tt;let Gf=null,Wf=0,Xf=0,Yf=!1;const is=(1+Math.sqrt(5))/2,eo=1/is,wg=[new re(-is,eo,0),new re(is,eo,0),new re(-eo,0,is),new re(eo,0,is),new re(0,is,-eo),new re(0,is,eo),new re(-1,1,-1),new re(1,1,-1),new re(-1,1,1),new re(1,1,1)];class Tg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,o=100){Gf=this._renderer.getRenderTarget(),Wf=this._renderer.getActiveCubeFace(),Xf=this._renderer.getActiveMipmapLevel(),Yf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gf,Wf,Xf),this._renderer.xr.enabled=Yf,e.scissorTest=!1,Jl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===lo||e.mapping===uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gf=this._renderer.getRenderTarget(),Wf=this._renderer.getActiveCubeFace(),Xf=this._renderer.getActiveMipmapLevel(),Yf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Mi,minFilter:Mi,generateMipmaps:!1,type:ga,format:ui,colorSpace:ho,depthBuffer:!1},o=Ag(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ag(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ME(l)),this._blurMaterial=EE(l,e,t)}return o}_compileMaterial(e){const t=new Ei(this._lodPlanes[0],e);this._renderer.compile(t,Vf)}_sceneToCubeUV(e,t,s,o){const f=new ai(90,1,t,s),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,_=m.autoClear,x=m.toneMapping;m.getClearColor(Eg),m.toneMapping=br,m.autoClear=!1;const y=new oh({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),E=new Ei(new xa,y);let T=!1;const S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,T=!0):(y.color.copy(Eg),T=!0);for(let v=0;v<6;v++){const F=v%3;F===0?(f.up.set(0,h[v],0),f.lookAt(p[v],0,0)):F===1?(f.up.set(0,0,h[v]),f.lookAt(0,p[v],0)):(f.up.set(0,h[v],0),f.lookAt(0,0,p[v]));const D=this._cubeSize;Jl(o,F*D,v>2?D:0,D,D),m.setRenderTarget(o),T&&m.render(E,f),m.render(e,f)}E.geometry.dispose(),E.material.dispose(),m.toneMapping=x,m.autoClear=_,e.background=S}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===lo||e.mapping===uo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rg());const l=o?this._cubemapMaterial:this._equirectMaterial,c=new Ei(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Jl(t,0,0,3*h,2*h),s.setRenderTarget(t),s.render(c,Vf)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=wg[(o-l-1)%wg.length];this._blur(e,l-1,l,c,f)}t.autoClear=s}_blur(e,t,s,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,s,o,"latitudinal",l),this._halfBlur(c,e,s,s,o,"longitudinal",l)}_halfBlur(e,t,s,o,l,c,f){const h=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,_=new Ei(this._lodPlanes[o],p),x=p.uniforms,y=this._sizeLods[s]-1,E=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*ss-1),T=l/E,S=isFinite(l)?1+Math.floor(m*T):ss;S>ss&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ss}`);const v=[];let F=0;for(let O=0;O<ss;++O){const $=O/T,C=Math.exp(-$*$/2);v.push(C),O===0?F+=C:O<S&&(F+=2*C)}for(let O=0;O<v.length;O++)v[O]=v[O]/F;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=v,x.latitudinal.value=c==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:D}=this;x.dTheta.value=E,x.mipInt.value=D-s;const P=this._sizeLods[o],Y=3*P*(o>D-no?o-D+no:0),B=4*(this._cubeSize-P);Jl(t,Y,B,3*P,2*P),h.setRenderTarget(t),h.render(_,Vf)}}function ME(i){const e=[],t=[],s=[];let o=i;const l=i-no+1+Mg.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);t.push(f);let h=1/f;c>i-no?h=Mg[c-i+no-1]:c===0&&(h=0),s.push(h);const p=1/(f-2),m=-p,_=1+p,x=[m,m,_,m,_,_,m,m,_,_,m,_],y=6,E=6,T=3,S=2,v=1,F=new Float32Array(T*E*y),D=new Float32Array(S*E*y),P=new Float32Array(v*E*y);for(let B=0;B<y;B++){const O=B%3*2/3-1,$=B>2?0:-1,C=[O,$,0,O+2/3,$,0,O+2/3,$+1,0,O,$,0,O+2/3,$+1,0,O,$+1,0];F.set(C,T*E*B),D.set(x,S*E*B);const R=[B,B,B,B,B,B];P.set(R,v*E*B)}const Y=new hi;Y.setAttribute("position",new fi(F,T)),Y.setAttribute("uv",new fi(D,S)),Y.setAttribute("faceIndex",new fi(P,v)),e.push(Y),o>no&&o--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function Ag(i,e,t){const s=new fs(i,e,t);return s.texture.mapping=Ru,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Jl(i,e,t,s,o){i.viewport.set(e,t,s,o),i.scissor.set(e,t,s,o)}function EE(i,e,t){const s=new Float32Array(ss),o=new re(0,1,0);return new Ur({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:lh(),fragmentShader:`

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
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function Rg(){return new Ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lh(),fragmentShader:`

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
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function Cg(){return new Ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function lh(){return`

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
	`}function wE(i){let e=new WeakMap,t=null;function s(f){if(f&&f.isTexture){const h=f.mapping,p=h===ad||h===ld,m=h===lo||h===uo;if(p||m){let _=e.get(f);const x=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return t===null&&(t=new Tg(i)),_=p?t.fromEquirectangular(f,_):t.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const y=f.image;return p&&y&&y.height>0||m&&y&&o(y)?(t===null&&(t=new Tg(i)),_=p?t.fromEquirectangular(f):t.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",l),_.texture):null}}}return f}function o(f){let h=0;const p=6;for(let m=0;m<p;m++)f[m]!==void 0&&h++;return h===p}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:c}}function TE(i){const e={};function t(s){if(e[s]!==void 0)return e[s];let o;switch(s){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(s)}return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&to("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function AE(i,e,t,s){const o={},l=new WeakMap;function c(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",c),delete o[x.id];const y=l.get(x);y&&(e.remove(y),l.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function f(_,x){return o[x.id]===!0||(x.addEventListener("dispose",c),o[x.id]=!0,t.memory.geometries++),x}function h(_){const x=_.attributes;for(const y in x)e.update(x[y],i.ARRAY_BUFFER)}function p(_){const x=[],y=_.index,E=_.attributes.position;let T=0;if(y!==null){const F=y.array;T=y.version;for(let D=0,P=F.length;D<P;D+=3){const Y=F[D+0],B=F[D+1],O=F[D+2];x.push(Y,B,B,O,O,Y)}}else if(E!==void 0){const F=E.array;T=E.version;for(let D=0,P=F.length/3-1;D<P;D+=3){const Y=D+0,B=D+1,O=D+2;x.push(Y,B,B,O,O,Y)}}else return;const S=new(R_(x)?D_:L_)(x,1);S.version=T;const v=l.get(_);v&&e.remove(v),l.set(_,S)}function m(_){const x=l.get(_);if(x){const y=_.index;y!==null&&x.version<y.version&&p(_)}else p(_);return l.get(_)}return{get:f,update:h,getWireframeAttribute:m}}function RE(i,e,t){let s;function o(x){s=x}let l,c;function f(x){l=x.type,c=x.bytesPerElement}function h(x,y){i.drawElements(s,y,l,x*c),t.update(y,s,1)}function p(x,y,E){E!==0&&(i.drawElementsInstanced(s,y,l,x*c,E),t.update(y,s,E))}function m(x,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,l,x,0,E);let S=0;for(let v=0;v<E;v++)S+=y[v];t.update(S,s,1)}function _(x,y,E,T){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<x.length;v++)p(x[v]/c,y[v],T[v]);else{S.multiDrawElementsInstancedWEBGL(s,y,0,l,x,0,T,0,E);let v=0;for(let F=0;F<E;F++)v+=y[F]*T[F];t.update(v,s,1)}}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=_}function CE(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,f){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=f*(l/3);break;case i.LINES:t.lines+=f*(l/2);break;case i.LINE_STRIP:t.lines+=f*(l-1);break;case i.LINE_LOOP:t.lines+=f*l;break;case i.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function PE(i,e,t){const s=new WeakMap,o=new Xt;function l(c,f,h){const p=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=m!==void 0?m.length:0;let x=s.get(f);if(x===void 0||x.count!==_){let R=function(){$.dispose(),s.delete(f),f.removeEventListener("dispose",R)};var y=R;x!==void 0&&x.texture.dispose();const E=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],F=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let P=0;E===!0&&(P=1),T===!0&&(P=2),S===!0&&(P=3);let Y=f.attributes.position.count*P,B=1;Y>e.maxTextureSize&&(B=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);const O=new Float32Array(Y*B*4*_),$=new P_(O,Y,B,_);$.type=Xi,$.needsUpdate=!0;const C=P*4;for(let V=0;V<_;V++){const fe=v[V],oe=F[V],N=D[V],K=Y*B*4*V;for(let z=0;z<fe.count;z++){const j=z*C;E===!0&&(o.fromBufferAttribute(fe,z),O[K+j+0]=o.x,O[K+j+1]=o.y,O[K+j+2]=o.z,O[K+j+3]=0),T===!0&&(o.fromBufferAttribute(oe,z),O[K+j+4]=o.x,O[K+j+5]=o.y,O[K+j+6]=o.z,O[K+j+7]=0),S===!0&&(o.fromBufferAttribute(N,z),O[K+j+8]=o.x,O[K+j+9]=o.y,O[K+j+10]=o.z,O[K+j+11]=N.itemSize===4?o.w:1)}}x={count:_,texture:$,size:new pt(Y,B)},s.set(f,x),f.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const T=f.morphTargetsRelative?1:1-E;h.getUniforms().setValue(i,"morphTargetBaseInfluence",T),h.getUniforms().setValue(i,"morphTargetInfluences",p)}h.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}return{update:l}}function bE(i,e,t,s){let o=new WeakMap;function l(h){const p=s.render.frame,m=h.geometry,_=e.get(h,m);if(o.get(_)!==p&&(e.update(_),o.set(_,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),o.get(h)!==p&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),o.set(h,p))),h.isSkinnedMesh){const x=h.skeleton;o.get(x)!==p&&(x.update(),o.set(x,p))}return _}function c(){o=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const G_=new wn,Pg=new B_(1,1),W_=new P_,X_=new sy,Y_=new I_,bg=[],Lg=[],Dg=new Float32Array(16),Ug=new Float32Array(9),Ng=new Float32Array(4);function xo(i,e,t){const s=i[0];if(s<=0||s>0)return i;const o=e*t;let l=bg[o];if(l===void 0&&(l=new Float32Array(o),bg[o]=l),e!==0){s.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,i[c].toArray(l,f)}return l}function Zt(i,e){if(i.length!==e.length)return!1;for(let t=0,s=i.length;t<s;t++)if(i[t]!==e[t])return!1;return!0}function Qt(i,e){for(let t=0,s=e.length;t<s;t++)i[t]=e[t]}function bu(i,e){let t=Lg[e];t===void 0&&(t=new Int32Array(e),Lg[e]=t);for(let s=0;s!==e;++s)t[s]=i.allocateTextureUnit();return t}function LE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function DE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2fv(this.addr,e),Qt(t,e)}}function UE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;i.uniform3fv(this.addr,e),Qt(t,e)}}function NE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4fv(this.addr,e),Qt(t,e)}}function IE(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(Zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(Zt(t,s))return;Ng.set(s),i.uniformMatrix2fv(this.addr,!1,Ng),Qt(t,s)}}function FE(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(Zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(Zt(t,s))return;Ug.set(s),i.uniformMatrix3fv(this.addr,!1,Ug),Qt(t,s)}}function OE(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(Zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(Zt(t,s))return;Dg.set(s),i.uniformMatrix4fv(this.addr,!1,Dg),Qt(t,s)}}function zE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function kE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2iv(this.addr,e),Qt(t,e)}}function BE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3iv(this.addr,e),Qt(t,e)}}function HE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4iv(this.addr,e),Qt(t,e)}}function VE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function GE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2uiv(this.addr,e),Qt(t,e)}}function WE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3uiv(this.addr,e),Qt(t,e)}}function XE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4uiv(this.addr,e),Qt(t,e)}}function YE(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o);let l;this.type===i.SAMPLER_2D_SHADOW?(Pg.compareFunction=A_,l=Pg):l=G_,t.setTexture2D(e||l,o)}function qE(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||X_,o)}function $E(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||Y_,o)}function jE(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||W_,o)}function KE(i){switch(i){case 5126:return LE;case 35664:return DE;case 35665:return UE;case 35666:return NE;case 35674:return IE;case 35675:return FE;case 35676:return OE;case 5124:case 35670:return zE;case 35667:case 35671:return kE;case 35668:case 35672:return BE;case 35669:case 35673:return HE;case 5125:return VE;case 36294:return GE;case 36295:return WE;case 36296:return XE;case 35678:case 36198:case 36298:case 36306:case 35682:return YE;case 35679:case 36299:case 36307:return qE;case 35680:case 36300:case 36308:case 36293:return $E;case 36289:case 36303:case 36311:case 36292:return jE}}function ZE(i,e){i.uniform1fv(this.addr,e)}function QE(i,e){const t=xo(e,this.size,2);i.uniform2fv(this.addr,t)}function JE(i,e){const t=xo(e,this.size,3);i.uniform3fv(this.addr,t)}function e1(i,e){const t=xo(e,this.size,4);i.uniform4fv(this.addr,t)}function t1(i,e){const t=xo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function n1(i,e){const t=xo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function i1(i,e){const t=xo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function r1(i,e){i.uniform1iv(this.addr,e)}function s1(i,e){i.uniform2iv(this.addr,e)}function o1(i,e){i.uniform3iv(this.addr,e)}function a1(i,e){i.uniform4iv(this.addr,e)}function l1(i,e){i.uniform1uiv(this.addr,e)}function u1(i,e){i.uniform2uiv(this.addr,e)}function c1(i,e){i.uniform3uiv(this.addr,e)}function f1(i,e){i.uniform4uiv(this.addr,e)}function d1(i,e,t){const s=this.cache,o=e.length,l=bu(t,o);Zt(s,l)||(i.uniform1iv(this.addr,l),Qt(s,l));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||G_,l[c])}function h1(i,e,t){const s=this.cache,o=e.length,l=bu(t,o);Zt(s,l)||(i.uniform1iv(this.addr,l),Qt(s,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||X_,l[c])}function p1(i,e,t){const s=this.cache,o=e.length,l=bu(t,o);Zt(s,l)||(i.uniform1iv(this.addr,l),Qt(s,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||Y_,l[c])}function m1(i,e,t){const s=this.cache,o=e.length,l=bu(t,o);Zt(s,l)||(i.uniform1iv(this.addr,l),Qt(s,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||W_,l[c])}function g1(i){switch(i){case 5126:return ZE;case 35664:return QE;case 35665:return JE;case 35666:return e1;case 35674:return t1;case 35675:return n1;case 35676:return i1;case 5124:case 35670:return r1;case 35667:case 35671:return s1;case 35668:case 35672:return o1;case 35669:case 35673:return a1;case 5125:return l1;case 36294:return u1;case 36295:return c1;case 36296:return f1;case 35678:case 36198:case 36298:case 36306:case 35682:return d1;case 35679:case 36299:case 36307:return h1;case 35680:case 36300:case 36308:case 36293:return p1;case 36289:case 36303:case 36311:case 36292:return m1}}class _1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=KE(t.type)}}class v1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=g1(t.type)}}class x1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,t[f.id],s)}}}const qf=/(\w+)(\])?(\[|\.)?/g;function Ig(i,e){i.seq.push(e),i.map[e.id]=e}function y1(i,e,t){const s=i.name,o=s.length;for(qf.lastIndex=0;;){const l=qf.exec(s),c=qf.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&c+2===o){Ig(t,p===void 0?new _1(f,i,e):new v1(f,i,e));break}else{let _=t.map[f];_===void 0&&(_=new x1(f),Ig(t,_)),t=_}}}class cu{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<s;++o){const l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);y1(l,c,this)}}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=s[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&s.push(c)}return s}}function Fg(i,e,t){const s=i.createShader(e);return i.shaderSource(s,t),i.compileShader(s),s}const S1=37297;let M1=0;function E1(i,e){const t=i.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const f=c+1;s.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return s.join(`
`)}const Og=new st;function w1(i){Et._getMatrix(Og,Et.workingColorSpace,i);const e=`mat3( ${Og.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(i)){case mu:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function zg(i,e,t){const s=i.getShaderParameter(e,i.COMPILE_STATUS),o=i.getShaderInfoLog(e).trim();if(s&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+E1(i.getShaderSource(e),c)}else return o}function T1(i,e){const t=w1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function A1(i,e){let t;switch(e){case bx:t="Linear";break;case Lx:t="Reinhard";break;case Dx:t="Cineon";break;case Ux:t="ACESFilmic";break;case Ix:t="AgX";break;case Fx:t="Neutral";break;case Nx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const eu=new re;function R1(){Et.getLuminanceCoefficients(eu);const i=eu.x.toFixed(4),e=eu.y.toFixed(4),t=eu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function C1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function P1(i){const e=[];for(const t in i){const s=i[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function b1(i,e){const t={},s=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=i.getActiveAttrib(e,o),c=l.name;let f=1;l.type===i.FLOAT_MAT2&&(f=2),l.type===i.FLOAT_MAT3&&(f=3),l.type===i.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:i.getAttribLocation(e,c),locationSize:f}}return t}function la(i){return i!==""}function kg(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const L1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bd(i){return i.replace(L1,U1)}const D1=new Map;function U1(i,e){let t=ot[e];if(t===void 0){const s=D1.get(e);if(s!==void 0)t=ot[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Bd(t)}const N1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hg(i){return i.replace(N1,I1)}function I1(i,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Vg(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function F1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===h_?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ux?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Gi&&(e="SHADOWMAP_TYPE_VSM"),e}function O1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case lo:case uo:e="ENVMAP_TYPE_CUBE";break;case Ru:e="ENVMAP_TYPE_CUBE_UV";break}return e}function z1(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case uo:e="ENVMAP_MODE_REFRACTION";break}return e}function k1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case p_:e="ENVMAP_BLENDING_MULTIPLY";break;case Cx:e="ENVMAP_BLENDING_MIX";break;case Px:e="ENVMAP_BLENDING_ADD";break}return e}function B1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:s,maxMip:t}}function H1(i,e,t,s){const o=i.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=F1(t),p=O1(t),m=z1(t),_=k1(t),x=B1(t),y=C1(t),E=P1(l),T=o.createProgram();let S,v,F=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(la).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(la).join(`
`),v.length>0&&(v+=`
`)):(S=[Vg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),v=[Vg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==br?"#define TONE_MAPPING":"",t.toneMapping!==br?ot.tonemapping_pars_fragment:"",t.toneMapping!==br?A1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,T1("linearToOutputTexel",t.outputColorSpace),R1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(la).join(`
`)),c=Bd(c),c=kg(c,t),c=Bg(c,t),f=Bd(f),f=kg(f,t),f=Bg(f,t),c=Hg(c),f=Hg(f),t.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",t.glslVersion===Zm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const D=F+S+c,P=F+v+f,Y=Fg(o,o.VERTEX_SHADER,D),B=Fg(o,o.FRAGMENT_SHADER,P);o.attachShader(T,Y),o.attachShader(T,B),t.index0AttributeName!==void 0?o.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function O(V){if(i.debug.checkShaderErrors){const fe=o.getProgramInfoLog(T).trim(),oe=o.getShaderInfoLog(Y).trim(),N=o.getShaderInfoLog(B).trim();let K=!0,z=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,T,Y,B);else{const j=zg(o,Y,"vertex"),I=zg(o,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+fe+`
`+j+`
`+I)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(oe===""||N==="")&&(z=!1);z&&(V.diagnostics={runnable:K,programLog:fe,vertexShader:{log:oe,prefix:S},fragmentShader:{log:N,prefix:v}})}o.deleteShader(Y),o.deleteShader(B),$=new cu(o,T),C=b1(o,T)}let $;this.getUniforms=function(){return $===void 0&&O(this),$};let C;this.getAttributes=function(){return C===void 0&&O(this),C};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(T,S1)),R},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=M1++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=Y,this.fragmentShader=B,this}let V1=0;class G1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new W1(e),t.set(e,s)),s}}class W1{constructor(e){this.id=V1++,this.code=e,this.usedTimes=0}}function X1(i,e,t,s,o,l,c){const f=new sh,h=new G1,p=new Set,m=[],_=o.logarithmicDepthBuffer,x=o.vertexTextures;let y=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return p.add(C),C===0?"uv":`uv${C}`}function S(C,R,V,fe,oe){const N=fe.fog,K=oe.geometry,z=C.isMeshStandardMaterial?fe.environment:null,j=(C.isMeshStandardMaterial?t:e).get(C.envMap||z),I=j&&j.mapping===Ru?j.image.height:null,te=E[C.type];C.precision!==null&&(y=o.getMaxPrecision(C.precision),y!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const Q=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,L=Q!==void 0?Q.length:0;let ee=0;K.morphAttributes.position!==void 0&&(ee=1),K.morphAttributes.normal!==void 0&&(ee=2),K.morphAttributes.color!==void 0&&(ee=3);let Te,Z,ce,xe;if(te){const vt=yi[te];Te=vt.vertexShader,Z=vt.fragmentShader}else Te=C.vertexShader,Z=C.fragmentShader,h.update(C),ce=h.getVertexShaderID(C),xe=h.getFragmentShaderID(C);const pe=i.getRenderTarget(),we=i.state.buffers.depth.getReversed(),De=oe.isInstancedMesh===!0,Ze=oe.isBatchedMesh===!0,Rt=!!C.map,ht=!!C.matcap,Lt=!!j,H=!!C.aoMap,mn=!!C.lightMap,ft=!!C.bumpMap,lt=!!C.normalMap,Ye=!!C.displacementMap,At=!!C.emissiveMap,We=!!C.metalnessMap,b=!!C.roughnessMap,w=C.anisotropy>0,ie=C.clearcoat>0,me=C.dispersion>0,_e=C.iridescence>0,de=C.sheen>0,Ve=C.transmission>0,Ae=w&&!!C.anisotropyMap,Ie=ie&&!!C.clearcoatMap,at=ie&&!!C.clearcoatNormalMap,Me=ie&&!!C.clearcoatRoughnessMap,ze=_e&&!!C.iridescenceMap,$e=_e&&!!C.iridescenceThicknessMap,Qe=de&&!!C.sheenColorMap,ke=de&&!!C.sheenRoughnessMap,ut=!!C.specularMap,nt=!!C.specularColorMap,wt=!!C.specularIntensityMap,X=Ve&&!!C.transmissionMap,Re=Ve&&!!C.thicknessMap,ue=!!C.gradientMap,he=!!C.alphaMap,Le=C.alphaTest>0,be=!!C.alphaHash,it=!!C.extensions;let Ut=br;C.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Ut=i.toneMapping);const $t={shaderID:te,shaderType:C.type,shaderName:C.name,vertexShader:Te,fragmentShader:Z,defines:C.defines,customVertexShaderID:ce,customFragmentShaderID:xe,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:Ze,batchingColor:Ze&&oe._colorsTexture!==null,instancing:De,instancingColor:De&&oe.instanceColor!==null,instancingMorph:De&&oe.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:ho,alphaToCoverage:!!C.alphaToCoverage,map:Rt,matcap:ht,envMap:Lt,envMapMode:Lt&&j.mapping,envMapCubeUVHeight:I,aoMap:H,lightMap:mn,bumpMap:ft,normalMap:lt,displacementMap:x&&Ye,emissiveMap:At,normalMapObjectSpace:lt&&C.normalMapType===Hx,normalMapTangentSpace:lt&&C.normalMapType===Bx,metalnessMap:We,roughnessMap:b,anisotropy:w,anisotropyMap:Ae,clearcoat:ie,clearcoatMap:Ie,clearcoatNormalMap:at,clearcoatRoughnessMap:Me,dispersion:me,iridescence:_e,iridescenceMap:ze,iridescenceThicknessMap:$e,sheen:de,sheenColorMap:Qe,sheenRoughnessMap:ke,specularMap:ut,specularColorMap:nt,specularIntensityMap:wt,transmission:Ve,transmissionMap:X,thicknessMap:Re,gradientMap:ue,opaque:C.transparent===!1&&C.blending===io&&C.alphaToCoverage===!1,alphaMap:he,alphaTest:Le,alphaHash:be,combine:C.combine,mapUv:Rt&&T(C.map.channel),aoMapUv:H&&T(C.aoMap.channel),lightMapUv:mn&&T(C.lightMap.channel),bumpMapUv:ft&&T(C.bumpMap.channel),normalMapUv:lt&&T(C.normalMap.channel),displacementMapUv:Ye&&T(C.displacementMap.channel),emissiveMapUv:At&&T(C.emissiveMap.channel),metalnessMapUv:We&&T(C.metalnessMap.channel),roughnessMapUv:b&&T(C.roughnessMap.channel),anisotropyMapUv:Ae&&T(C.anisotropyMap.channel),clearcoatMapUv:Ie&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:at&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:ke&&T(C.sheenRoughnessMap.channel),specularMapUv:ut&&T(C.specularMap.channel),specularColorMapUv:nt&&T(C.specularColorMap.channel),specularIntensityMapUv:wt&&T(C.specularIntensityMap.channel),transmissionMapUv:X&&T(C.transmissionMap.channel),thicknessMapUv:Re&&T(C.thicknessMap.channel),alphaMapUv:he&&T(C.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(lt||w),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!K.attributes.uv&&(Rt||he),fog:!!N,useFog:C.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:we,skinning:oe.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:ee,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Rt&&C.map.isVideoTexture===!0&&Et.getTransfer(C.map.colorSpace)===Pt,decodeVideoTextureEmissive:At&&C.emissiveMap.isVideoTexture===!0&&Et.getTransfer(C.emissiveMap.colorSpace)===Pt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Wi,flipSided:C.side===Nn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:it&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&C.extensions.multiDraw===!0||Ze)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return $t.vertexUv1s=p.has(1),$t.vertexUv2s=p.has(2),$t.vertexUv3s=p.has(3),p.clear(),$t}function v(C){const R=[];if(C.shaderID?R.push(C.shaderID):(R.push(C.customVertexShaderID),R.push(C.customFragmentShaderID)),C.defines!==void 0)for(const V in C.defines)R.push(V),R.push(C.defines[V]);return C.isRawShaderMaterial===!1&&(F(R,C),D(R,C),R.push(i.outputColorSpace)),R.push(C.customProgramCacheKey),R.join()}function F(C,R){C.push(R.precision),C.push(R.outputColorSpace),C.push(R.envMapMode),C.push(R.envMapCubeUVHeight),C.push(R.mapUv),C.push(R.alphaMapUv),C.push(R.lightMapUv),C.push(R.aoMapUv),C.push(R.bumpMapUv),C.push(R.normalMapUv),C.push(R.displacementMapUv),C.push(R.emissiveMapUv),C.push(R.metalnessMapUv),C.push(R.roughnessMapUv),C.push(R.anisotropyMapUv),C.push(R.clearcoatMapUv),C.push(R.clearcoatNormalMapUv),C.push(R.clearcoatRoughnessMapUv),C.push(R.iridescenceMapUv),C.push(R.iridescenceThicknessMapUv),C.push(R.sheenColorMapUv),C.push(R.sheenRoughnessMapUv),C.push(R.specularMapUv),C.push(R.specularColorMapUv),C.push(R.specularIntensityMapUv),C.push(R.transmissionMapUv),C.push(R.thicknessMapUv),C.push(R.combine),C.push(R.fogExp2),C.push(R.sizeAttenuation),C.push(R.morphTargetsCount),C.push(R.morphAttributeCount),C.push(R.numDirLights),C.push(R.numPointLights),C.push(R.numSpotLights),C.push(R.numSpotLightMaps),C.push(R.numHemiLights),C.push(R.numRectAreaLights),C.push(R.numDirLightShadows),C.push(R.numPointLightShadows),C.push(R.numSpotLightShadows),C.push(R.numSpotLightShadowsWithMaps),C.push(R.numLightProbes),C.push(R.shadowMapType),C.push(R.toneMapping),C.push(R.numClippingPlanes),C.push(R.numClipIntersection),C.push(R.depthPacking)}function D(C,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),C.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reverseDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),C.push(f.mask)}function P(C){const R=E[C.type];let V;if(R){const fe=yi[R];V=_y.clone(fe.uniforms)}else V=C.uniforms;return V}function Y(C,R){let V;for(let fe=0,oe=m.length;fe<oe;fe++){const N=m[fe];if(N.cacheKey===R){V=N,++V.usedTimes;break}}return V===void 0&&(V=new H1(i,R,C,l),m.push(V)),V}function B(C){if(--C.usedTimes===0){const R=m.indexOf(C);m[R]=m[m.length-1],m.pop(),C.destroy()}}function O(C){h.remove(C)}function $(){h.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:P,acquireProgram:Y,releaseProgram:B,releaseShaderCache:O,programs:m,dispose:$}}function Y1(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let f=i.get(c);return f===void 0&&(f={},i.set(c,f)),f}function s(c){i.delete(c)}function o(c,f,h){i.get(c)[f]=h}function l(){i=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function q1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Gg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Wg(){const i=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function c(_,x,y,E,T,S){let v=i[e];return v===void 0?(v={id:_.id,object:_,geometry:x,material:y,groupOrder:E,renderOrder:_.renderOrder,z:T,group:S},i[e]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=y,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=T,v.group=S),e++,v}function f(_,x,y,E,T,S){const v=c(_,x,y,E,T,S);y.transmission>0?s.push(v):y.transparent===!0?o.push(v):t.push(v)}function h(_,x,y,E,T,S){const v=c(_,x,y,E,T,S);y.transmission>0?s.unshift(v):y.transparent===!0?o.unshift(v):t.unshift(v)}function p(_,x){t.length>1&&t.sort(_||q1),s.length>1&&s.sort(x||Gg),o.length>1&&o.sort(x||Gg)}function m(){for(let _=e,x=i.length;_<x;_++){const y=i[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:f,unshift:h,finish:m,sort:p}}function $1(){let i=new WeakMap;function e(s,o){const l=i.get(s);let c;return l===void 0?(c=new Wg,i.set(s,[c])):o>=l.length?(c=new Wg,l.push(c)):c=l[o],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function j1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new re,color:new Tt};break;case"SpotLight":t={position:new re,direction:new re,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new re,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new re,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":t={color:new Tt,position:new re,halfWidth:new re,halfHeight:new re};break}return i[e.id]=t,t}}}function K1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Z1=0;function Q1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function J1(i){const e=new j1,t=K1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new re);const o=new re,l=new Bt,c=new Bt;function f(p){let m=0,_=0,x=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let y=0,E=0,T=0,S=0,v=0,F=0,D=0,P=0,Y=0,B=0,O=0;p.sort(Q1);for(let C=0,R=p.length;C<R;C++){const V=p[C],fe=V.color,oe=V.intensity,N=V.distance,K=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)m+=fe.r*oe,_+=fe.g*oe,x+=fe.b*oe;else if(V.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(V.sh.coefficients[z],oe);O++}else if(V.isDirectionalLight){const z=e.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const j=V.shadow,I=t.get(V);I.shadowIntensity=j.intensity,I.shadowBias=j.bias,I.shadowNormalBias=j.normalBias,I.shadowRadius=j.radius,I.shadowMapSize=j.mapSize,s.directionalShadow[y]=I,s.directionalShadowMap[y]=K,s.directionalShadowMatrix[y]=V.shadow.matrix,F++}s.directional[y]=z,y++}else if(V.isSpotLight){const z=e.get(V);z.position.setFromMatrixPosition(V.matrixWorld),z.color.copy(fe).multiplyScalar(oe),z.distance=N,z.coneCos=Math.cos(V.angle),z.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),z.decay=V.decay,s.spot[T]=z;const j=V.shadow;if(V.map&&(s.spotLightMap[Y]=V.map,Y++,j.updateMatrices(V),V.castShadow&&B++),s.spotLightMatrix[T]=j.matrix,V.castShadow){const I=t.get(V);I.shadowIntensity=j.intensity,I.shadowBias=j.bias,I.shadowNormalBias=j.normalBias,I.shadowRadius=j.radius,I.shadowMapSize=j.mapSize,s.spotShadow[T]=I,s.spotShadowMap[T]=K,P++}T++}else if(V.isRectAreaLight){const z=e.get(V);z.color.copy(fe).multiplyScalar(oe),z.halfWidth.set(V.width*.5,0,0),z.halfHeight.set(0,V.height*.5,0),s.rectArea[S]=z,S++}else if(V.isPointLight){const z=e.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),z.distance=V.distance,z.decay=V.decay,V.castShadow){const j=V.shadow,I=t.get(V);I.shadowIntensity=j.intensity,I.shadowBias=j.bias,I.shadowNormalBias=j.normalBias,I.shadowRadius=j.radius,I.shadowMapSize=j.mapSize,I.shadowCameraNear=j.camera.near,I.shadowCameraFar=j.camera.far,s.pointShadow[E]=I,s.pointShadowMap[E]=K,s.pointShadowMatrix[E]=V.shadow.matrix,D++}s.point[E]=z,E++}else if(V.isHemisphereLight){const z=e.get(V);z.skyColor.copy(V.color).multiplyScalar(oe),z.groundColor.copy(V.groundColor).multiplyScalar(oe),s.hemi[v]=z,v++}}S>0&&(i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pe.LTC_FLOAT_1,s.rectAreaLTC2=Pe.LTC_FLOAT_2):(s.rectAreaLTC1=Pe.LTC_HALF_1,s.rectAreaLTC2=Pe.LTC_HALF_2)),s.ambient[0]=m,s.ambient[1]=_,s.ambient[2]=x;const $=s.hash;($.directionalLength!==y||$.pointLength!==E||$.spotLength!==T||$.rectAreaLength!==S||$.hemiLength!==v||$.numDirectionalShadows!==F||$.numPointShadows!==D||$.numSpotShadows!==P||$.numSpotMaps!==Y||$.numLightProbes!==O)&&(s.directional.length=y,s.spot.length=T,s.rectArea.length=S,s.point.length=E,s.hemi.length=v,s.directionalShadow.length=F,s.directionalShadowMap.length=F,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=F,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=P+Y-B,s.spotLightMap.length=Y,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=O,$.directionalLength=y,$.pointLength=E,$.spotLength=T,$.rectAreaLength=S,$.hemiLength=v,$.numDirectionalShadows=F,$.numPointShadows=D,$.numSpotShadows=P,$.numSpotMaps=Y,$.numLightProbes=O,s.version=Z1++)}function h(p,m){let _=0,x=0,y=0,E=0,T=0;const S=m.matrixWorldInverse;for(let v=0,F=p.length;v<F;v++){const D=p[v];if(D.isDirectionalLight){const P=s.directional[_];P.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(S),_++}else if(D.isSpotLight){const P=s.spot[y];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(S),P.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(S),y++}else if(D.isRectAreaLight){const P=s.rectArea[E];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(S),c.identity(),l.copy(D.matrixWorld),l.premultiply(S),c.extractRotation(l),P.halfWidth.set(D.width*.5,0,0),P.halfHeight.set(0,D.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),E++}else if(D.isPointLight){const P=s.point[x];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(S),x++}else if(D.isHemisphereLight){const P=s.hemi[T];P.direction.setFromMatrixPosition(D.matrixWorld),P.direction.transformDirection(S),T++}}}return{setup:f,setupView:h,state:s}}function Xg(i){const e=new J1(i),t=[],s=[];function o(m){p.camera=m,t.length=0,s.length=0}function l(m){t.push(m)}function c(m){s.push(m)}function f(){e.setup(t)}function h(m){e.setupView(t,m)}const p={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function ew(i){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new Xg(i),e.set(o,[f])):l>=c.length?(f=new Xg(i),c.push(f)):f=c[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const tw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nw=`uniform sampler2D shadow_pass;
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
}`;function iw(i,e,t){let s=new z_;const o=new pt,l=new pt,c=new Xt,f=new Py({depthPacking:kx}),h=new by,p={},m=t.maxTextureSize,_={[Dr]:Nn,[Nn]:Dr,[Wi]:Wi},x=new Ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:tw,fragmentShader:nw}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const E=new hi;E.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ei(E,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=h_;let v=this.type;this.render=function(B,O,$){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||B.length===0)return;const C=i.getRenderTarget(),R=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),fe=i.state;fe.setBlending(Pr),fe.buffers.color.setClear(1,1,1,1),fe.buffers.depth.setTest(!0),fe.setScissorTest(!1);const oe=v!==Gi&&this.type===Gi,N=v===Gi&&this.type!==Gi;for(let K=0,z=B.length;K<z;K++){const j=B[K],I=j.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;o.copy(I.mapSize);const te=I.getFrameExtents();if(o.multiply(te),l.copy(I.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/te.x),o.x=l.x*te.x,I.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/te.y),o.y=l.y*te.y,I.mapSize.y=l.y)),I.map===null||oe===!0||N===!0){const L=this.type!==Gi?{minFilter:ci,magFilter:ci}:{};I.map!==null&&I.map.dispose(),I.map=new fs(o.x,o.y,L),I.map.texture.name=j.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();const Q=I.getViewportCount();for(let L=0;L<Q;L++){const ee=I.getViewport(L);c.set(l.x*ee.x,l.y*ee.y,l.x*ee.z,l.y*ee.w),fe.viewport(c),I.updateMatrices(j,L),s=I.getFrustum(),P(O,$,I.camera,j,this.type)}I.isPointLightShadow!==!0&&this.type===Gi&&F(I,$),I.needsUpdate=!1}v=this.type,S.needsUpdate=!1,i.setRenderTarget(C,R,V)};function F(B,O){const $=e.update(T);x.defines.VSM_SAMPLES!==B.blurSamples&&(x.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new fs(o.x,o.y)),x.uniforms.shadow_pass.value=B.map.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,i.setRenderTarget(B.mapPass),i.clear(),i.renderBufferDirect(O,null,$,x,T,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,i.setRenderTarget(B.map),i.clear(),i.renderBufferDirect(O,null,$,y,T,null)}function D(B,O,$,C){let R=null;const V=$.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(V!==void 0)R=V;else if(R=$.isPointLight===!0?h:f,i.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const fe=R.uuid,oe=O.uuid;let N=p[fe];N===void 0&&(N={},p[fe]=N);let K=N[oe];K===void 0&&(K=R.clone(),N[oe]=K,O.addEventListener("dispose",Y)),R=K}if(R.visible=O.visible,R.wireframe=O.wireframe,C===Gi?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:_[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,$.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const fe=i.properties.get(R);fe.light=$}return R}function P(B,O,$,C,R){if(B.visible===!1)return;if(B.layers.test(O.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&R===Gi)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,B.matrixWorld);const oe=e.update(B),N=B.material;if(Array.isArray(N)){const K=oe.groups;for(let z=0,j=K.length;z<j;z++){const I=K[z],te=N[I.materialIndex];if(te&&te.visible){const Q=D(B,te,C,R);B.onBeforeShadow(i,B,O,$,oe,Q,I),i.renderBufferDirect($,null,oe,Q,B,I),B.onAfterShadow(i,B,O,$,oe,Q,I)}}}else if(N.visible){const K=D(B,N,C,R);B.onBeforeShadow(i,B,O,$,oe,K,null),i.renderBufferDirect($,null,oe,K,B,null),B.onAfterShadow(i,B,O,$,oe,K,null)}}const fe=B.children;for(let oe=0,N=fe.length;oe<N;oe++)P(fe[oe],O,$,C,R)}function Y(B){B.target.removeEventListener("dispose",Y);for(const $ in p){const C=p[$],R=B.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}const rw={[ed]:td,[nd]:sd,[id]:od,[ao]:rd,[td]:ed,[sd]:nd,[od]:id,[rd]:ao};function sw(i,e){function t(){let X=!1;const Re=new Xt;let ue=null;const he=new Xt(0,0,0,0);return{setMask:function(Le){ue!==Le&&!X&&(i.colorMask(Le,Le,Le,Le),ue=Le)},setLocked:function(Le){X=Le},setClear:function(Le,be,it,Ut,$t){$t===!0&&(Le*=Ut,be*=Ut,it*=Ut),Re.set(Le,be,it,Ut),he.equals(Re)===!1&&(i.clearColor(Le,be,it,Ut),he.copy(Re))},reset:function(){X=!1,ue=null,he.set(-1,0,0,0)}}}function s(){let X=!1,Re=!1,ue=null,he=null,Le=null;return{setReversed:function(be){if(Re!==be){const it=e.get("EXT_clip_control");Re?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT);const Ut=Le;Le=null,this.setClear(Ut)}Re=be},getReversed:function(){return Re},setTest:function(be){be?pe(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(be){ue!==be&&!X&&(i.depthMask(be),ue=be)},setFunc:function(be){if(Re&&(be=rw[be]),he!==be){switch(be){case ed:i.depthFunc(i.NEVER);break;case td:i.depthFunc(i.ALWAYS);break;case nd:i.depthFunc(i.LESS);break;case ao:i.depthFunc(i.LEQUAL);break;case id:i.depthFunc(i.EQUAL);break;case rd:i.depthFunc(i.GEQUAL);break;case sd:i.depthFunc(i.GREATER);break;case od:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=be}},setLocked:function(be){X=be},setClear:function(be){Le!==be&&(Re&&(be=1-be),i.clearDepth(be),Le=be)},reset:function(){X=!1,ue=null,he=null,Le=null,Re=!1}}}function o(){let X=!1,Re=null,ue=null,he=null,Le=null,be=null,it=null,Ut=null,$t=null;return{setTest:function(vt){X||(vt?pe(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(vt){Re!==vt&&!X&&(i.stencilMask(vt),Re=vt)},setFunc:function(vt,An,gn){(ue!==vt||he!==An||Le!==gn)&&(i.stencilFunc(vt,An,gn),ue=vt,he=An,Le=gn)},setOp:function(vt,An,gn){(be!==vt||it!==An||Ut!==gn)&&(i.stencilOp(vt,An,gn),be=vt,it=An,Ut=gn)},setLocked:function(vt){X=vt},setClear:function(vt){$t!==vt&&(i.clearStencil(vt),$t=vt)},reset:function(){X=!1,Re=null,ue=null,he=null,Le=null,be=null,it=null,Ut=null,$t=null}}}const l=new t,c=new s,f=new o,h=new WeakMap,p=new WeakMap;let m={},_={},x=new WeakMap,y=[],E=null,T=!1,S=null,v=null,F=null,D=null,P=null,Y=null,B=null,O=new Tt(0,0,0),$=0,C=!1,R=null,V=null,fe=null,oe=null,N=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,j=0;const I=i.getParameter(i.VERSION);I.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(I)[1]),z=j>=1):I.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),z=j>=2);let te=null,Q={};const L=i.getParameter(i.SCISSOR_BOX),ee=i.getParameter(i.VIEWPORT),Te=new Xt().fromArray(L),Z=new Xt().fromArray(ee);function ce(X,Re,ue,he){const Le=new Uint8Array(4),be=i.createTexture();i.bindTexture(X,be),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let it=0;it<ue;it++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(Re,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,Le):i.texImage2D(Re+it,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Le);return be}const xe={};xe[i.TEXTURE_2D]=ce(i.TEXTURE_2D,i.TEXTURE_2D,1),xe[i.TEXTURE_CUBE_MAP]=ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[i.TEXTURE_2D_ARRAY]=ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xe[i.TEXTURE_3D]=ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),pe(i.DEPTH_TEST),c.setFunc(ao),ft(!1),lt(Ym),pe(i.CULL_FACE),H(Pr);function pe(X){m[X]!==!0&&(i.enable(X),m[X]=!0)}function we(X){m[X]!==!1&&(i.disable(X),m[X]=!1)}function De(X,Re){return _[X]!==Re?(i.bindFramebuffer(X,Re),_[X]=Re,X===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=Re),X===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ze(X,Re){let ue=y,he=!1;if(X){ue=x.get(Re),ue===void 0&&(ue=[],x.set(Re,ue));const Le=X.textures;if(ue.length!==Le.length||ue[0]!==i.COLOR_ATTACHMENT0){for(let be=0,it=Le.length;be<it;be++)ue[be]=i.COLOR_ATTACHMENT0+be;ue.length=Le.length,he=!0}}else ue[0]!==i.BACK&&(ue[0]=i.BACK,he=!0);he&&i.drawBuffers(ue)}function Rt(X){return E!==X?(i.useProgram(X),E=X,!0):!1}const ht={[rs]:i.FUNC_ADD,[fx]:i.FUNC_SUBTRACT,[dx]:i.FUNC_REVERSE_SUBTRACT};ht[hx]=i.MIN,ht[px]=i.MAX;const Lt={[mx]:i.ZERO,[gx]:i.ONE,[_x]:i.SRC_COLOR,[Qf]:i.SRC_ALPHA,[Ex]:i.SRC_ALPHA_SATURATE,[Sx]:i.DST_COLOR,[xx]:i.DST_ALPHA,[vx]:i.ONE_MINUS_SRC_COLOR,[Jf]:i.ONE_MINUS_SRC_ALPHA,[Mx]:i.ONE_MINUS_DST_COLOR,[yx]:i.ONE_MINUS_DST_ALPHA,[wx]:i.CONSTANT_COLOR,[Tx]:i.ONE_MINUS_CONSTANT_COLOR,[Ax]:i.CONSTANT_ALPHA,[Rx]:i.ONE_MINUS_CONSTANT_ALPHA};function H(X,Re,ue,he,Le,be,it,Ut,$t,vt){if(X===Pr){T===!0&&(we(i.BLEND),T=!1);return}if(T===!1&&(pe(i.BLEND),T=!0),X!==cx){if(X!==S||vt!==C){if((v!==rs||P!==rs)&&(i.blendEquation(i.FUNC_ADD),v=rs,P=rs),vt)switch(X){case io:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qm:i.blendFunc(i.ONE,i.ONE);break;case $m:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jm:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case io:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qm:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case $m:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jm:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}F=null,D=null,Y=null,B=null,O.set(0,0,0),$=0,S=X,C=vt}return}Le=Le||Re,be=be||ue,it=it||he,(Re!==v||Le!==P)&&(i.blendEquationSeparate(ht[Re],ht[Le]),v=Re,P=Le),(ue!==F||he!==D||be!==Y||it!==B)&&(i.blendFuncSeparate(Lt[ue],Lt[he],Lt[be],Lt[it]),F=ue,D=he,Y=be,B=it),(Ut.equals(O)===!1||$t!==$)&&(i.blendColor(Ut.r,Ut.g,Ut.b,$t),O.copy(Ut),$=$t),S=X,C=!1}function mn(X,Re){X.side===Wi?we(i.CULL_FACE):pe(i.CULL_FACE);let ue=X.side===Nn;Re&&(ue=!ue),ft(ue),X.blending===io&&X.transparent===!1?H(Pr):H(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),c.setFunc(X.depthFunc),c.setTest(X.depthTest),c.setMask(X.depthWrite),l.setMask(X.colorWrite);const he=X.stencilWrite;f.setTest(he),he&&(f.setMask(X.stencilWriteMask),f.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),f.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),At(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function ft(X){R!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),R=X)}function lt(X){X!==ax?(pe(i.CULL_FACE),X!==V&&(X===Ym?i.cullFace(i.BACK):X===lx?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),V=X}function Ye(X){X!==fe&&(z&&i.lineWidth(X),fe=X)}function At(X,Re,ue){X?(pe(i.POLYGON_OFFSET_FILL),(oe!==Re||N!==ue)&&(i.polygonOffset(Re,ue),oe=Re,N=ue)):we(i.POLYGON_OFFSET_FILL)}function We(X){X?pe(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function b(X){X===void 0&&(X=i.TEXTURE0+K-1),te!==X&&(i.activeTexture(X),te=X)}function w(X,Re,ue){ue===void 0&&(te===null?ue=i.TEXTURE0+K-1:ue=te);let he=Q[ue];he===void 0&&(he={type:void 0,texture:void 0},Q[ue]=he),(he.type!==X||he.texture!==Re)&&(te!==ue&&(i.activeTexture(ue),te=ue),i.bindTexture(X,Re||xe[X]),he.type=X,he.texture=Re)}function ie(){const X=Q[te];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function me(){try{i.compressedTexImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _e(){try{i.compressedTexImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function de(){try{i.texSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ve(){try{i.texSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ae(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ie(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function at(){try{i.texStorage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Me(){try{i.texStorage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ze(){try{i.texImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $e(){try{i.texImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Qe(X){Te.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),Te.copy(X))}function ke(X){Z.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),Z.copy(X))}function ut(X,Re){let ue=p.get(Re);ue===void 0&&(ue=new WeakMap,p.set(Re,ue));let he=ue.get(X);he===void 0&&(he=i.getUniformBlockIndex(Re,X.name),ue.set(X,he))}function nt(X,Re){const he=p.get(Re).get(X);h.get(Re)!==he&&(i.uniformBlockBinding(Re,he,X.__bindingPointIndex),h.set(Re,he))}function wt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},te=null,Q={},_={},x=new WeakMap,y=[],E=null,T=!1,S=null,v=null,F=null,D=null,P=null,Y=null,B=null,O=new Tt(0,0,0),$=0,C=!1,R=null,V=null,fe=null,oe=null,N=null,Te.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:pe,disable:we,bindFramebuffer:De,drawBuffers:Ze,useProgram:Rt,setBlending:H,setMaterial:mn,setFlipSided:ft,setCullFace:lt,setLineWidth:Ye,setPolygonOffset:At,setScissorTest:We,activeTexture:b,bindTexture:w,unbindTexture:ie,compressedTexImage2D:me,compressedTexImage3D:_e,texImage2D:ze,texImage3D:$e,updateUBOMapping:ut,uniformBlockBinding:nt,texStorage2D:at,texStorage3D:Me,texSubImage2D:de,texSubImage3D:Ve,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Ie,scissor:Qe,viewport:ke,reset:wt}}function ow(i,e,t,s,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new pt,m=new WeakMap;let _;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(b,w){return y?new OffscreenCanvas(b,w):_u("canvas")}function T(b,w,ie){let me=1;const _e=We(b);if((_e.width>ie||_e.height>ie)&&(me=ie/Math.max(_e.width,_e.height)),me<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const de=Math.floor(me*_e.width),Ve=Math.floor(me*_e.height);_===void 0&&(_=E(de,Ve));const Ae=w?E(de,Ve):_;return Ae.width=de,Ae.height=Ve,Ae.getContext("2d").drawImage(b,0,0,de,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+de+"x"+Ve+")."),Ae}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),b;return b}function S(b){return b.generateMipmaps}function v(b){i.generateMipmap(b)}function F(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function D(b,w,ie,me,_e=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let de=w;if(w===i.RED&&(ie===i.FLOAT&&(de=i.R32F),ie===i.HALF_FLOAT&&(de=i.R16F),ie===i.UNSIGNED_BYTE&&(de=i.R8)),w===i.RED_INTEGER&&(ie===i.UNSIGNED_BYTE&&(de=i.R8UI),ie===i.UNSIGNED_SHORT&&(de=i.R16UI),ie===i.UNSIGNED_INT&&(de=i.R32UI),ie===i.BYTE&&(de=i.R8I),ie===i.SHORT&&(de=i.R16I),ie===i.INT&&(de=i.R32I)),w===i.RG&&(ie===i.FLOAT&&(de=i.RG32F),ie===i.HALF_FLOAT&&(de=i.RG16F),ie===i.UNSIGNED_BYTE&&(de=i.RG8)),w===i.RG_INTEGER&&(ie===i.UNSIGNED_BYTE&&(de=i.RG8UI),ie===i.UNSIGNED_SHORT&&(de=i.RG16UI),ie===i.UNSIGNED_INT&&(de=i.RG32UI),ie===i.BYTE&&(de=i.RG8I),ie===i.SHORT&&(de=i.RG16I),ie===i.INT&&(de=i.RG32I)),w===i.RGB_INTEGER&&(ie===i.UNSIGNED_BYTE&&(de=i.RGB8UI),ie===i.UNSIGNED_SHORT&&(de=i.RGB16UI),ie===i.UNSIGNED_INT&&(de=i.RGB32UI),ie===i.BYTE&&(de=i.RGB8I),ie===i.SHORT&&(de=i.RGB16I),ie===i.INT&&(de=i.RGB32I)),w===i.RGBA_INTEGER&&(ie===i.UNSIGNED_BYTE&&(de=i.RGBA8UI),ie===i.UNSIGNED_SHORT&&(de=i.RGBA16UI),ie===i.UNSIGNED_INT&&(de=i.RGBA32UI),ie===i.BYTE&&(de=i.RGBA8I),ie===i.SHORT&&(de=i.RGBA16I),ie===i.INT&&(de=i.RGBA32I)),w===i.RGB&&ie===i.UNSIGNED_INT_5_9_9_9_REV&&(de=i.RGB9_E5),w===i.RGBA){const Ve=_e?mu:Et.getTransfer(me);ie===i.FLOAT&&(de=i.RGBA32F),ie===i.HALF_FLOAT&&(de=i.RGBA16F),ie===i.UNSIGNED_BYTE&&(de=Ve===Pt?i.SRGB8_ALPHA8:i.RGBA8),ie===i.UNSIGNED_SHORT_4_4_4_4&&(de=i.RGBA4),ie===i.UNSIGNED_SHORT_5_5_5_1&&(de=i.RGB5_A1)}return(de===i.R16F||de===i.R32F||de===i.RG16F||de===i.RG32F||de===i.RGBA16F||de===i.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function P(b,w){let ie;return b?w===null||w===cs||w===co?ie=i.DEPTH24_STENCIL8:w===Xi?ie=i.DEPTH32F_STENCIL8:w===fa&&(ie=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===cs||w===co?ie=i.DEPTH_COMPONENT24:w===Xi?ie=i.DEPTH_COMPONENT32F:w===fa&&(ie=i.DEPTH_COMPONENT16),ie}function Y(b,w){return S(b)===!0||b.isFramebufferTexture&&b.minFilter!==ci&&b.minFilter!==Mi?Math.log2(Math.max(w.width,w.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?w.mipmaps.length:1}function B(b){const w=b.target;w.removeEventListener("dispose",B),$(w),w.isVideoTexture&&m.delete(w)}function O(b){const w=b.target;w.removeEventListener("dispose",O),R(w)}function $(b){const w=s.get(b);if(w.__webglInit===void 0)return;const ie=b.source,me=x.get(ie);if(me){const _e=me[w.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&C(b),Object.keys(me).length===0&&x.delete(ie)}s.remove(b)}function C(b){const w=s.get(b);i.deleteTexture(w.__webglTexture);const ie=b.source,me=x.get(ie);delete me[w.__cacheKey],c.memory.textures--}function R(b){const w=s.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),s.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(w.__webglFramebuffer[me]))for(let _e=0;_e<w.__webglFramebuffer[me].length;_e++)i.deleteFramebuffer(w.__webglFramebuffer[me][_e]);else i.deleteFramebuffer(w.__webglFramebuffer[me]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[me])}else{if(Array.isArray(w.__webglFramebuffer))for(let me=0;me<w.__webglFramebuffer.length;me++)i.deleteFramebuffer(w.__webglFramebuffer[me]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let me=0;me<w.__webglColorRenderbuffer.length;me++)w.__webglColorRenderbuffer[me]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[me]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const ie=b.textures;for(let me=0,_e=ie.length;me<_e;me++){const de=s.get(ie[me]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),c.memory.textures--),s.remove(ie[me])}s.remove(b)}let V=0;function fe(){V=0}function oe(){const b=V;return b>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+o.maxTextures),V+=1,b}function N(b){const w=[];return w.push(b.wrapS),w.push(b.wrapT),w.push(b.wrapR||0),w.push(b.magFilter),w.push(b.minFilter),w.push(b.anisotropy),w.push(b.internalFormat),w.push(b.format),w.push(b.type),w.push(b.generateMipmaps),w.push(b.premultiplyAlpha),w.push(b.flipY),w.push(b.unpackAlignment),w.push(b.colorSpace),w.join()}function K(b,w){const ie=s.get(b);if(b.isVideoTexture&&Ye(b),b.isRenderTargetTexture===!1&&b.version>0&&ie.__version!==b.version){const me=b.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(ie,b,w);return}}t.bindTexture(i.TEXTURE_2D,ie.__webglTexture,i.TEXTURE0+w)}function z(b,w){const ie=s.get(b);if(b.version>0&&ie.__version!==b.version){Z(ie,b,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ie.__webglTexture,i.TEXTURE0+w)}function j(b,w){const ie=s.get(b);if(b.version>0&&ie.__version!==b.version){Z(ie,b,w);return}t.bindTexture(i.TEXTURE_3D,ie.__webglTexture,i.TEXTURE0+w)}function I(b,w){const ie=s.get(b);if(b.version>0&&ie.__version!==b.version){ce(ie,b,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture,i.TEXTURE0+w)}const te={[ud]:i.REPEAT,[os]:i.CLAMP_TO_EDGE,[cd]:i.MIRRORED_REPEAT},Q={[ci]:i.NEAREST,[Ox]:i.NEAREST_MIPMAP_NEAREST,[Cl]:i.NEAREST_MIPMAP_LINEAR,[Mi]:i.LINEAR,[_f]:i.LINEAR_MIPMAP_NEAREST,[as]:i.LINEAR_MIPMAP_LINEAR},L={[Vx]:i.NEVER,[$x]:i.ALWAYS,[Gx]:i.LESS,[A_]:i.LEQUAL,[Wx]:i.EQUAL,[qx]:i.GEQUAL,[Xx]:i.GREATER,[Yx]:i.NOTEQUAL};function ee(b,w){if(w.type===Xi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Mi||w.magFilter===_f||w.magFilter===Cl||w.magFilter===as||w.minFilter===Mi||w.minFilter===_f||w.minFilter===Cl||w.minFilter===as)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,te[w.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,te[w.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,te[w.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,Q[w.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,Q[w.minFilter]),w.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,L[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ci||w.minFilter!==Cl&&w.minFilter!==as||w.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||s.get(w).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),s.get(w).__currentAnisotropy=w.anisotropy}}}function Te(b,w){let ie=!1;b.__webglInit===void 0&&(b.__webglInit=!0,w.addEventListener("dispose",B));const me=w.source;let _e=x.get(me);_e===void 0&&(_e={},x.set(me,_e));const de=N(w);if(de!==b.__cacheKey){_e[de]===void 0&&(_e[de]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,ie=!0),_e[de].usedTimes++;const Ve=_e[b.__cacheKey];Ve!==void 0&&(_e[b.__cacheKey].usedTimes--,Ve.usedTimes===0&&C(w)),b.__cacheKey=de,b.__webglTexture=_e[de].texture}return ie}function Z(b,w,ie){let me=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(me=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(me=i.TEXTURE_3D);const _e=Te(b,w),de=w.source;t.bindTexture(me,b.__webglTexture,i.TEXTURE0+ie);const Ve=s.get(de);if(de.version!==Ve.__version||_e===!0){t.activeTexture(i.TEXTURE0+ie);const Ae=Et.getPrimaries(Et.workingColorSpace),Ie=w.colorSpace===Rr?null:Et.getPrimaries(w.colorSpace),at=w.colorSpace===Rr||Ae===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let Me=T(w.image,!1,o.maxTextureSize);Me=At(w,Me);const ze=l.convert(w.format,w.colorSpace),$e=l.convert(w.type);let Qe=D(w.internalFormat,ze,$e,w.colorSpace,w.isVideoTexture);ee(me,w);let ke;const ut=w.mipmaps,nt=w.isVideoTexture!==!0,wt=Ve.__version===void 0||_e===!0,X=de.dataReady,Re=Y(w,Me);if(w.isDepthTexture)Qe=P(w.format===fo,w.type),wt&&(nt?t.texStorage2D(i.TEXTURE_2D,1,Qe,Me.width,Me.height):t.texImage2D(i.TEXTURE_2D,0,Qe,Me.width,Me.height,0,ze,$e,null));else if(w.isDataTexture)if(ut.length>0){nt&&wt&&t.texStorage2D(i.TEXTURE_2D,Re,Qe,ut[0].width,ut[0].height);for(let ue=0,he=ut.length;ue<he;ue++)ke=ut[ue],nt?X&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,ke.width,ke.height,ze,$e,ke.data):t.texImage2D(i.TEXTURE_2D,ue,Qe,ke.width,ke.height,0,ze,$e,ke.data);w.generateMipmaps=!1}else nt?(wt&&t.texStorage2D(i.TEXTURE_2D,Re,Qe,Me.width,Me.height),X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me.width,Me.height,ze,$e,Me.data)):t.texImage2D(i.TEXTURE_2D,0,Qe,Me.width,Me.height,0,ze,$e,Me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){nt&&wt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Qe,ut[0].width,ut[0].height,Me.depth);for(let ue=0,he=ut.length;ue<he;ue++)if(ke=ut[ue],w.format!==ui)if(ze!==null)if(nt){if(X)if(w.layerUpdates.size>0){const Le=Sg(ke.width,ke.height,w.format,w.type);for(const be of w.layerUpdates){const it=ke.data.subarray(be*Le/ke.data.BYTES_PER_ELEMENT,(be+1)*Le/ke.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,be,ke.width,ke.height,1,ze,it)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,ke.width,ke.height,Me.depth,ze,ke.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,Qe,ke.width,ke.height,Me.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?X&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,ke.width,ke.height,Me.depth,ze,$e,ke.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,Qe,ke.width,ke.height,Me.depth,0,ze,$e,ke.data)}else{nt&&wt&&t.texStorage2D(i.TEXTURE_2D,Re,Qe,ut[0].width,ut[0].height);for(let ue=0,he=ut.length;ue<he;ue++)ke=ut[ue],w.format!==ui?ze!==null?nt?X&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,ke.width,ke.height,ze,ke.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,Qe,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?X&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,ke.width,ke.height,ze,$e,ke.data):t.texImage2D(i.TEXTURE_2D,ue,Qe,ke.width,ke.height,0,ze,$e,ke.data)}else if(w.isDataArrayTexture)if(nt){if(wt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Qe,Me.width,Me.height,Me.depth),X)if(w.layerUpdates.size>0){const ue=Sg(Me.width,Me.height,w.format,w.type);for(const he of w.layerUpdates){const Le=Me.data.subarray(he*ue/Me.data.BYTES_PER_ELEMENT,(he+1)*ue/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,he,Me.width,Me.height,1,ze,$e,Le)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,ze,$e,Me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Qe,Me.width,Me.height,Me.depth,0,ze,$e,Me.data);else if(w.isData3DTexture)nt?(wt&&t.texStorage3D(i.TEXTURE_3D,Re,Qe,Me.width,Me.height,Me.depth),X&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,ze,$e,Me.data)):t.texImage3D(i.TEXTURE_3D,0,Qe,Me.width,Me.height,Me.depth,0,ze,$e,Me.data);else if(w.isFramebufferTexture){if(wt)if(nt)t.texStorage2D(i.TEXTURE_2D,Re,Qe,Me.width,Me.height);else{let ue=Me.width,he=Me.height;for(let Le=0;Le<Re;Le++)t.texImage2D(i.TEXTURE_2D,Le,Qe,ue,he,0,ze,$e,null),ue>>=1,he>>=1}}else if(ut.length>0){if(nt&&wt){const ue=We(ut[0]);t.texStorage2D(i.TEXTURE_2D,Re,Qe,ue.width,ue.height)}for(let ue=0,he=ut.length;ue<he;ue++)ke=ut[ue],nt?X&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,ze,$e,ke):t.texImage2D(i.TEXTURE_2D,ue,Qe,ze,$e,ke);w.generateMipmaps=!1}else if(nt){if(wt){const ue=We(Me);t.texStorage2D(i.TEXTURE_2D,Re,Qe,ue.width,ue.height)}X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ze,$e,Me)}else t.texImage2D(i.TEXTURE_2D,0,Qe,ze,$e,Me);S(w)&&v(me),Ve.__version=de.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function ce(b,w,ie){if(w.image.length!==6)return;const me=Te(b,w),_e=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+ie);const de=s.get(_e);if(_e.version!==de.__version||me===!0){t.activeTexture(i.TEXTURE0+ie);const Ve=Et.getPrimaries(Et.workingColorSpace),Ae=w.colorSpace===Rr?null:Et.getPrimaries(w.colorSpace),Ie=w.colorSpace===Rr||Ve===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const at=w.isCompressedTexture||w.image[0].isCompressedTexture,Me=w.image[0]&&w.image[0].isDataTexture,ze=[];for(let he=0;he<6;he++)!at&&!Me?ze[he]=T(w.image[he],!0,o.maxCubemapSize):ze[he]=Me?w.image[he].image:w.image[he],ze[he]=At(w,ze[he]);const $e=ze[0],Qe=l.convert(w.format,w.colorSpace),ke=l.convert(w.type),ut=D(w.internalFormat,Qe,ke,w.colorSpace),nt=w.isVideoTexture!==!0,wt=de.__version===void 0||me===!0,X=_e.dataReady;let Re=Y(w,$e);ee(i.TEXTURE_CUBE_MAP,w);let ue;if(at){nt&&wt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,ut,$e.width,$e.height);for(let he=0;he<6;he++){ue=ze[he].mipmaps;for(let Le=0;Le<ue.length;Le++){const be=ue[Le];w.format!==ui?Qe!==null?nt?X&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,0,0,be.width,be.height,Qe,be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,ut,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,0,0,be.width,be.height,Qe,ke,be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,ut,be.width,be.height,0,Qe,ke,be.data)}}}else{if(ue=w.mipmaps,nt&&wt){ue.length>0&&Re++;const he=We(ze[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,ut,he.width,he.height)}for(let he=0;he<6;he++)if(Me){nt?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ze[he].width,ze[he].height,Qe,ke,ze[he].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ut,ze[he].width,ze[he].height,0,Qe,ke,ze[he].data);for(let Le=0;Le<ue.length;Le++){const it=ue[Le].image[he].image;nt?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,0,0,it.width,it.height,Qe,ke,it.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,ut,it.width,it.height,0,Qe,ke,it.data)}}else{nt?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Qe,ke,ze[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ut,Qe,ke,ze[he]);for(let Le=0;Le<ue.length;Le++){const be=ue[Le];nt?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,0,0,Qe,ke,be.image[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,ut,Qe,ke,be.image[he])}}}S(w)&&v(i.TEXTURE_CUBE_MAP),de.__version=_e.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function xe(b,w,ie,me,_e,de){const Ve=l.convert(ie.format,ie.colorSpace),Ae=l.convert(ie.type),Ie=D(ie.internalFormat,Ve,Ae,ie.colorSpace),at=s.get(w),Me=s.get(ie);if(Me.__renderTarget=w,!at.__hasExternalTextures){const ze=Math.max(1,w.width>>de),$e=Math.max(1,w.height>>de);_e===i.TEXTURE_3D||_e===i.TEXTURE_2D_ARRAY?t.texImage3D(_e,de,Ie,ze,$e,w.depth,0,Ve,Ae,null):t.texImage2D(_e,de,Ie,ze,$e,0,Ve,Ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),lt(w)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,_e,Me.__webglTexture,0,ft(w)):(_e===i.TEXTURE_2D||_e>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,me,_e,Me.__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(b,w,ie){if(i.bindRenderbuffer(i.RENDERBUFFER,b),w.depthBuffer){const me=w.depthTexture,_e=me&&me.isDepthTexture?me.type:null,de=P(w.stencilBuffer,_e),Ve=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=ft(w);lt(w)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,de,w.width,w.height):ie?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,de,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,de,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ve,i.RENDERBUFFER,b)}else{const me=w.textures;for(let _e=0;_e<me.length;_e++){const de=me[_e],Ve=l.convert(de.format,de.colorSpace),Ae=l.convert(de.type),Ie=D(de.internalFormat,Ve,Ae,de.colorSpace),at=ft(w);ie&&lt(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,Ie,w.width,w.height):lt(w)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,Ie,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Ie,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(b,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=s.get(w.depthTexture);me.__renderTarget=w,(!me.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),K(w.depthTexture,0);const _e=me.__webglTexture,de=ft(w);if(w.depthTexture.format===ro)lt(w)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_e,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_e,0);else if(w.depthTexture.format===fo)lt(w)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_e,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function De(b){const w=s.get(b),ie=b.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==b.depthTexture){const me=b.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),me){const _e=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,me.removeEventListener("dispose",_e)};me.addEventListener("dispose",_e),w.__depthDisposeCallback=_e}w.__boundDepthTexture=me}if(b.depthTexture&&!w.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");we(w.__webglFramebuffer,b)}else if(ie){w.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[me]),w.__webglDepthbuffer[me]===void 0)w.__webglDepthbuffer[me]=i.createRenderbuffer(),pe(w.__webglDepthbuffer[me],b,!1);else{const _e=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer[me];i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,de)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),pe(w.__webglDepthbuffer,b,!1);else{const me=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,_e)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(b,w,ie){const me=s.get(b);w!==void 0&&xe(me.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ie!==void 0&&De(b)}function Rt(b){const w=b.texture,ie=s.get(b),me=s.get(w);b.addEventListener("dispose",O);const _e=b.textures,de=b.isWebGLCubeRenderTarget===!0,Ve=_e.length>1;if(Ve||(me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture()),me.__version=w.version,c.memory.textures++),de){ie.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(w.mipmaps&&w.mipmaps.length>0){ie.__webglFramebuffer[Ae]=[];for(let Ie=0;Ie<w.mipmaps.length;Ie++)ie.__webglFramebuffer[Ae][Ie]=i.createFramebuffer()}else ie.__webglFramebuffer[Ae]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){ie.__webglFramebuffer=[];for(let Ae=0;Ae<w.mipmaps.length;Ae++)ie.__webglFramebuffer[Ae]=i.createFramebuffer()}else ie.__webglFramebuffer=i.createFramebuffer();if(Ve)for(let Ae=0,Ie=_e.length;Ae<Ie;Ae++){const at=s.get(_e[Ae]);at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture(),c.memory.textures++)}if(b.samples>0&&lt(b)===!1){ie.__webglMultisampledFramebuffer=i.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let Ae=0;Ae<_e.length;Ae++){const Ie=_e[Ae];ie.__webglColorRenderbuffer[Ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ie.__webglColorRenderbuffer[Ae]);const at=l.convert(Ie.format,Ie.colorSpace),Me=l.convert(Ie.type),ze=D(Ie.internalFormat,at,Me,Ie.colorSpace,b.isXRRenderTarget===!0),$e=ft(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,$e,ze,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,ie.__webglColorRenderbuffer[Ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(ie.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(ie.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,me.__webglTexture),ee(i.TEXTURE_CUBE_MAP,w);for(let Ae=0;Ae<6;Ae++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ie=0;Ie<w.mipmaps.length;Ie++)xe(ie.__webglFramebuffer[Ae][Ie],b,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ie);else xe(ie.__webglFramebuffer[Ae],b,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);S(w)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ve){for(let Ae=0,Ie=_e.length;Ae<Ie;Ae++){const at=_e[Ae],Me=s.get(at);t.bindTexture(i.TEXTURE_2D,Me.__webglTexture),ee(i.TEXTURE_2D,at),xe(ie.__webglFramebuffer,b,at,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,0),S(at)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let Ae=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Ae=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ae,me.__webglTexture),ee(Ae,w),w.mipmaps&&w.mipmaps.length>0)for(let Ie=0;Ie<w.mipmaps.length;Ie++)xe(ie.__webglFramebuffer[Ie],b,w,i.COLOR_ATTACHMENT0,Ae,Ie);else xe(ie.__webglFramebuffer,b,w,i.COLOR_ATTACHMENT0,Ae,0);S(w)&&v(Ae),t.unbindTexture()}b.depthBuffer&&De(b)}function ht(b){const w=b.textures;for(let ie=0,me=w.length;ie<me;ie++){const _e=w[ie];if(S(_e)){const de=F(b),Ve=s.get(_e).__webglTexture;t.bindTexture(de,Ve),v(de),t.unbindTexture()}}}const Lt=[],H=[];function mn(b){if(b.samples>0){if(lt(b)===!1){const w=b.textures,ie=b.width,me=b.height;let _e=i.COLOR_BUFFER_BIT;const de=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ve=s.get(b),Ae=w.length>1;if(Ae)for(let Ie=0;Ie<w.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Ie=0;Ie<w.length;Ie++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(_e|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(_e|=i.STENCIL_BUFFER_BIT)),Ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ie]);const at=s.get(w[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,at,0)}i.blitFramebuffer(0,0,ie,me,0,0,ie,me,_e,i.NEAREST),h===!0&&(Lt.length=0,H.length=0,Lt.push(i.COLOR_ATTACHMENT0+Ie),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Lt.push(de),H.push(de),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,H)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Lt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ae)for(let Ie=0;Ie<w.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ie]);const at=s.get(w[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,at,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&h){const w=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function ft(b){return Math.min(o.maxSamples,b.samples)}function lt(b){const w=s.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ye(b){const w=c.render.frame;m.get(b)!==w&&(m.set(b,w),b.update())}function At(b,w){const ie=b.colorSpace,me=b.format,_e=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||ie!==ho&&ie!==Rr&&(Et.getTransfer(ie)===Pt?(me!==ui||_e!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),w}function We(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(p.width=b.naturalWidth||b.width,p.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(p.width=b.displayWidth,p.height=b.displayHeight):(p.width=b.width,p.height=b.height),p}this.allocateTextureUnit=oe,this.resetTextureUnits=fe,this.setTexture2D=K,this.setTexture2DArray=z,this.setTexture3D=j,this.setTextureCube=I,this.rebindTextures=Ze,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=lt}function aw(i,e){function t(s,o=Rr){let l;const c=Et.getTransfer(o);if(s===ji)return i.UNSIGNED_BYTE;if(s===Jd)return i.UNSIGNED_SHORT_4_4_4_4;if(s===eh)return i.UNSIGNED_SHORT_5_5_5_1;if(s===v_)return i.UNSIGNED_INT_5_9_9_9_REV;if(s===g_)return i.BYTE;if(s===__)return i.SHORT;if(s===fa)return i.UNSIGNED_SHORT;if(s===Qd)return i.INT;if(s===cs)return i.UNSIGNED_INT;if(s===Xi)return i.FLOAT;if(s===ga)return i.HALF_FLOAT;if(s===x_)return i.ALPHA;if(s===y_)return i.RGB;if(s===ui)return i.RGBA;if(s===S_)return i.LUMINANCE;if(s===M_)return i.LUMINANCE_ALPHA;if(s===ro)return i.DEPTH_COMPONENT;if(s===fo)return i.DEPTH_STENCIL;if(s===E_)return i.RED;if(s===th)return i.RED_INTEGER;if(s===w_)return i.RG;if(s===nh)return i.RG_INTEGER;if(s===ih)return i.RGBA_INTEGER;if(s===su||s===ou||s===au||s===lu)if(c===Pt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===su)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ou)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===au)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===lu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===su)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ou)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===au)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===lu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===fd||s===dd||s===hd||s===pd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===fd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===dd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===hd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===pd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===md||s===gd||s===_d)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===md||s===gd)return c===Pt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===_d)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===vd||s===xd||s===yd||s===Sd||s===Md||s===Ed||s===wd||s===Td||s===Ad||s===Rd||s===Cd||s===Pd||s===bd||s===Ld)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===vd)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===xd)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===yd)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Sd)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Md)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ed)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===wd)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Td)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ad)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Rd)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Cd)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Pd)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===bd)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ld)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===uu||s===Dd||s===Ud)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===uu)return c===Pt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Dd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ud)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===T_||s===Nd||s===Id||s===Fd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===uu)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Nd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Id)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Fd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===co?i.UNSIGNED_INT_24_8:i[s]!==void 0?i[s]:null}return{convert:t}}const lw={type:"move"};class $f{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,c=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const T of e.hand.values()){const S=t.getJointPose(T,s),v=this._getHandJoint(p,T);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const m=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=m.position.distanceTo(_.position),y=.02,E=.005;p.inputState.pinching&&x>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(lw)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Zl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const uw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cw=`
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

}`;class fw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const o=new wn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=s.depthNear||t.depthFar!=s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Ur({vertexShader:uw,fragmentShader:cw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ei(new Pu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dw extends _o{constructor(e,t){super();const s=this;let o=null,l=1,c=null,f="local-floor",h=1,p=null,m=null,_=null,x=null,y=null,E=null;const T=new fw,S=t.getContextAttributes();let v=null,F=null;const D=[],P=[],Y=new pt;let B=null;const O=new ai;O.viewport=new Xt;const $=new ai;$.viewport=new Xt;const C=[O,$],R=new Dy;let V=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ce=D[Z];return ce===void 0&&(ce=new $f,D[Z]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Z){let ce=D[Z];return ce===void 0&&(ce=new $f,D[Z]=ce),ce.getGripSpace()},this.getHand=function(Z){let ce=D[Z];return ce===void 0&&(ce=new $f,D[Z]=ce),ce.getHandSpace()};function oe(Z){const ce=P.indexOf(Z.inputSource);if(ce===-1)return;const xe=D[ce];xe!==void 0&&(xe.update(Z.inputSource,Z.frame,p||c),xe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function N(){o.removeEventListener("select",oe),o.removeEventListener("selectstart",oe),o.removeEventListener("selectend",oe),o.removeEventListener("squeeze",oe),o.removeEventListener("squeezestart",oe),o.removeEventListener("squeezeend",oe),o.removeEventListener("end",N),o.removeEventListener("inputsourceschange",K);for(let Z=0;Z<D.length;Z++){const ce=P[Z];ce!==null&&(P[Z]=null,D[Z].disconnect(ce))}V=null,fe=null,T.reset(),e.setRenderTarget(v),y=null,x=null,_=null,o=null,F=null,Te.stop(),s.isPresenting=!1,e.setPixelRatio(B),e.setSize(Y.width,Y.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){l=Z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){f=Z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(Z){if(o=Z,o!==null){if(v=e.getRenderTarget(),o.addEventListener("select",oe),o.addEventListener("selectstart",oe),o.addEventListener("selectend",oe),o.addEventListener("squeeze",oe),o.addEventListener("squeezestart",oe),o.addEventListener("squeezeend",oe),o.addEventListener("end",N),o.addEventListener("inputsourceschange",K),S.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(Y),o.renderState.layers===void 0){const ce={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,t,ce),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),F=new fs(y.framebufferWidth,y.framebufferHeight,{format:ui,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let ce=null,xe=null,pe=null;S.depth&&(pe=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=S.stencil?fo:ro,xe=S.stencil?co:cs);const we={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:l};_=new XRWebGLBinding(o,t),x=_.createProjectionLayer(we),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),F=new fs(x.textureWidth,x.textureHeight,{format:ui,type:ji,depthTexture:new B_(x.textureWidth,x.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(h),p=null,c=await o.requestReferenceSpace(f),Te.setContext(o),Te.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function K(Z){for(let ce=0;ce<Z.removed.length;ce++){const xe=Z.removed[ce],pe=P.indexOf(xe);pe>=0&&(P[pe]=null,D[pe].disconnect(xe))}for(let ce=0;ce<Z.added.length;ce++){const xe=Z.added[ce];let pe=P.indexOf(xe);if(pe===-1){for(let De=0;De<D.length;De++)if(De>=P.length){P.push(xe),pe=De;break}else if(P[De]===null){P[De]=xe,pe=De;break}if(pe===-1)break}const we=D[pe];we&&we.connect(xe)}}const z=new re,j=new re;function I(Z,ce,xe){z.setFromMatrixPosition(ce.matrixWorld),j.setFromMatrixPosition(xe.matrixWorld);const pe=z.distanceTo(j),we=ce.projectionMatrix.elements,De=xe.projectionMatrix.elements,Ze=we[14]/(we[10]-1),Rt=we[14]/(we[10]+1),ht=(we[9]+1)/we[5],Lt=(we[9]-1)/we[5],H=(we[8]-1)/we[0],mn=(De[8]+1)/De[0],ft=Ze*H,lt=Ze*mn,Ye=pe/(-H+mn),At=Ye*-H;if(ce.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(At),Z.translateZ(Ye),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),we[10]===-1)Z.projectionMatrix.copy(ce.projectionMatrix),Z.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const We=Ze+Ye,b=Rt+Ye,w=ft-At,ie=lt+(pe-At),me=ht*Rt/b*We,_e=Lt*Rt/b*We;Z.projectionMatrix.makePerspective(w,ie,me,_e,We,b),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function te(Z,ce){ce===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ce.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(o===null)return;let ce=Z.near,xe=Z.far;T.texture!==null&&(T.depthNear>0&&(ce=T.depthNear),T.depthFar>0&&(xe=T.depthFar)),R.near=$.near=O.near=ce,R.far=$.far=O.far=xe,(V!==R.near||fe!==R.far)&&(o.updateRenderState({depthNear:R.near,depthFar:R.far}),V=R.near,fe=R.far),O.layers.mask=Z.layers.mask|2,$.layers.mask=Z.layers.mask|4,R.layers.mask=O.layers.mask|$.layers.mask;const pe=Z.parent,we=R.cameras;te(R,pe);for(let De=0;De<we.length;De++)te(we[De],pe);we.length===2?I(R,O,$):R.projectionMatrix.copy(O.projectionMatrix),Q(Z,R,pe)};function Q(Z,ce,xe){xe===null?Z.matrix.copy(ce.matrixWorld):(Z.matrix.copy(xe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ce.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ce.projectionMatrix),Z.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=zd*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&y===null))return h},this.setFoveation=function(Z){h=Z,x!==null&&(x.fixedFoveation=Z),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Z)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(R)};let L=null;function ee(Z,ce){if(m=ce.getViewerPose(p||c),E=ce,m!==null){const xe=m.views;y!==null&&(e.setRenderTargetFramebuffer(F,y.framebuffer),e.setRenderTarget(F));let pe=!1;xe.length!==R.cameras.length&&(R.cameras.length=0,pe=!0);for(let De=0;De<xe.length;De++){const Ze=xe[De];let Rt=null;if(y!==null)Rt=y.getViewport(Ze);else{const Lt=_.getViewSubImage(x,Ze);Rt=Lt.viewport,De===0&&(e.setRenderTargetTextures(F,Lt.colorTexture,x.ignoreDepthValues?void 0:Lt.depthStencilTexture),e.setRenderTarget(F))}let ht=C[De];ht===void 0&&(ht=new ai,ht.layers.enable(De),ht.viewport=new Xt,C[De]=ht),ht.matrix.fromArray(Ze.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Ze.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),De===0&&(R.matrix.copy(ht.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),pe===!0&&R.cameras.push(ht)}const we=o.enabledFeatures;if(we&&we.includes("depth-sensing")){const De=_.getDepthInformation(xe[0]);De&&De.isValid&&De.texture&&T.init(e,De,o.renderState)}}for(let xe=0;xe<D.length;xe++){const pe=P[xe],we=D[xe];pe!==null&&we!==void 0&&we.update(pe,ce,p||c)}L&&L(Z,ce),ce.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ce}),E=null}const Te=new V_;Te.setAnimationLoop(ee),this.setAnimationLoop=function(Z){L=Z},this.dispose=function(){}}}const ts=new Ki,hw=new Bt;function pw(i,e){function t(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function s(S,v){v.color.getRGB(S.fogColor.value,U_(i)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function o(S,v,F,D,P){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(S,v):v.isMeshToonMaterial?(l(S,v),_(S,v)):v.isMeshPhongMaterial?(l(S,v),m(S,v)):v.isMeshStandardMaterial?(l(S,v),x(S,v),v.isMeshPhysicalMaterial&&y(S,v,P)):v.isMeshMatcapMaterial?(l(S,v),E(S,v)):v.isMeshDepthMaterial?l(S,v):v.isMeshDistanceMaterial?(l(S,v),T(S,v)):v.isMeshNormalMaterial?l(S,v):v.isLineBasicMaterial?(c(S,v),v.isLineDashedMaterial&&f(S,v)):v.isPointsMaterial?h(S,v,F,D):v.isSpriteMaterial?p(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,t(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===Nn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,t(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===Nn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,t(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,t(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const F=e.get(v),D=F.envMap,P=F.envMapRotation;D&&(S.envMap.value=D,ts.copy(P),ts.x*=-1,ts.y*=-1,ts.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),S.envMapRotation.value.setFromMatrix4(hw.makeRotationFromEuler(ts)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,S.aoMapTransform))}function c(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform))}function f(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function h(S,v,F,D){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*F,S.scale.value=D*.5,v.map&&(S.map.value=v.map,t(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function p(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function m(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function _(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function x(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function y(S,v,F){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Nn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=F.texture,S.transmissionSamplerSize.value.set(F.width,F.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,v){v.matcap&&(S.matcap.value=v.matcap)}function T(S,v){const F=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(F.matrixWorld),S.nearDistance.value=F.shadow.camera.near,S.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function mw(i,e,t,s){let o={},l={},c=[];const f=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(F,D){const P=D.program;s.uniformBlockBinding(F,P)}function p(F,D){let P=o[F.id];P===void 0&&(E(F),P=m(F),o[F.id]=P,F.addEventListener("dispose",S));const Y=D.program;s.updateUBOMapping(F,Y);const B=e.render.frame;l[F.id]!==B&&(x(F),l[F.id]=B)}function m(F){const D=_();F.__bindingPointIndex=D;const P=i.createBuffer(),Y=F.__size,B=F.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,Y,B),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,D,P),P}function _(){for(let F=0;F<f;F++)if(c.indexOf(F)===-1)return c.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(F){const D=o[F.id],P=F.uniforms,Y=F.__cache;i.bindBuffer(i.UNIFORM_BUFFER,D);for(let B=0,O=P.length;B<O;B++){const $=Array.isArray(P[B])?P[B]:[P[B]];for(let C=0,R=$.length;C<R;C++){const V=$[C];if(y(V,B,C,Y)===!0){const fe=V.__offset,oe=Array.isArray(V.value)?V.value:[V.value];let N=0;for(let K=0;K<oe.length;K++){const z=oe[K],j=T(z);typeof z=="number"||typeof z=="boolean"?(V.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,fe+N,V.__data)):z.isMatrix3?(V.__data[0]=z.elements[0],V.__data[1]=z.elements[1],V.__data[2]=z.elements[2],V.__data[3]=0,V.__data[4]=z.elements[3],V.__data[5]=z.elements[4],V.__data[6]=z.elements[5],V.__data[7]=0,V.__data[8]=z.elements[6],V.__data[9]=z.elements[7],V.__data[10]=z.elements[8],V.__data[11]=0):(z.toArray(V.__data,N),N+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,fe,V.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(F,D,P,Y){const B=F.value,O=D+"_"+P;if(Y[O]===void 0)return typeof B=="number"||typeof B=="boolean"?Y[O]=B:Y[O]=B.clone(),!0;{const $=Y[O];if(typeof B=="number"||typeof B=="boolean"){if($!==B)return Y[O]=B,!0}else if($.equals(B)===!1)return $.copy(B),!0}return!1}function E(F){const D=F.uniforms;let P=0;const Y=16;for(let O=0,$=D.length;O<$;O++){const C=Array.isArray(D[O])?D[O]:[D[O]];for(let R=0,V=C.length;R<V;R++){const fe=C[R],oe=Array.isArray(fe.value)?fe.value:[fe.value];for(let N=0,K=oe.length;N<K;N++){const z=oe[N],j=T(z),I=P%Y,te=I%j.boundary,Q=I+te;P+=te,Q!==0&&Y-Q<j.storage&&(P+=Y-Q),fe.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),fe.__offset=P,P+=j.storage}}}const B=P%Y;return B>0&&(P+=Y-B),F.__size=P,F.__cache={},this}function T(F){const D={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(D.boundary=4,D.storage=4):F.isVector2?(D.boundary=8,D.storage=8):F.isVector3||F.isColor?(D.boundary=16,D.storage=12):F.isVector4?(D.boundary=16,D.storage=16):F.isMatrix3?(D.boundary=48,D.storage=48):F.isMatrix4?(D.boundary=64,D.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),D}function S(F){const D=F.target;D.removeEventListener("dispose",S);const P=c.indexOf(D.__bindingPointIndex);c.splice(P,1),i.deleteBuffer(o[D.id]),delete o[D.id],delete l[D.id]}function v(){for(const F in o)i.deleteBuffer(o[F]);c=[],o={},l={}}return{bind:h,update:p,dispose:v}}class gw{constructor(e={}){const{canvas:t=Kx(),context:s=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=c;const E=new Uint32Array(4),T=new Int32Array(4);let S=null,v=null;const F=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jn,this.toneMapping=br,this.toneMappingExposure=1;const P=this;let Y=!1,B=0,O=0,$=null,C=-1,R=null;const V=new Xt,fe=new Xt;let oe=null;const N=new Tt(0);let K=0,z=t.width,j=t.height,I=1,te=null,Q=null;const L=new Xt(0,0,z,j),ee=new Xt(0,0,z,j);let Te=!1;const Z=new z_;let ce=!1,xe=!1;const pe=new Bt,we=new Bt,De=new re,Ze=new Xt,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function Lt(){return $===null?I:1}let H=s;function mn(A,q){return t.getContext(A,q)}try{const A={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zd}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",be,!1),H===null){const q="webgl2";if(H=mn(q,A),H===null)throw mn(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ft,lt,Ye,At,We,b,w,ie,me,_e,de,Ve,Ae,Ie,at,Me,ze,$e,Qe,ke,ut,nt,wt,X;function Re(){ft=new TE(H),ft.init(),nt=new aw(H,ft),lt=new xE(H,ft,e,nt),Ye=new sw(H,ft),lt.reverseDepthBuffer&&x&&Ye.buffers.depth.setReversed(!0),At=new CE(H),We=new Y1,b=new ow(H,ft,Ye,We,lt,nt,At),w=new SE(P),ie=new wE(P),me=new Iy(H),wt=new _E(H,me),_e=new AE(H,me,At,wt),de=new bE(H,_e,me,At),Qe=new PE(H,lt,b),Me=new yE(We),Ve=new X1(P,w,ie,ft,lt,wt,Me),Ae=new pw(P,We),Ie=new $1,at=new ew(ft),$e=new gE(P,w,ie,Ye,de,y,h),ze=new iw(P,de,lt),X=new mw(H,At,lt,Ye),ke=new vE(H,ft,At),ut=new RE(H,ft,At),At.programs=Ve.programs,P.capabilities=lt,P.extensions=ft,P.properties=We,P.renderLists=Ie,P.shadowMap=ze,P.state=Ye,P.info=At}Re();const ue=new dw(P,H);this.xr=ue,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=ft.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ft.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(A){A!==void 0&&(I=A,this.setSize(z,j,!1))},this.getSize=function(A){return A.set(z,j)},this.setSize=function(A,q,ae=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,j=q,t.width=Math.floor(A*I),t.height=Math.floor(q*I),ae===!0&&(t.style.width=A+"px",t.style.height=q+"px"),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(z*I,j*I).floor()},this.setDrawingBufferSize=function(A,q,ae){z=A,j=q,I=ae,t.width=Math.floor(A*ae),t.height=Math.floor(q*ae),this.setViewport(0,0,A,q)},this.getCurrentViewport=function(A){return A.copy(V)},this.getViewport=function(A){return A.copy(L)},this.setViewport=function(A,q,ae,le){A.isVector4?L.set(A.x,A.y,A.z,A.w):L.set(A,q,ae,le),Ye.viewport(V.copy(L).multiplyScalar(I).round())},this.getScissor=function(A){return A.copy(ee)},this.setScissor=function(A,q,ae,le){A.isVector4?ee.set(A.x,A.y,A.z,A.w):ee.set(A,q,ae,le),Ye.scissor(fe.copy(ee).multiplyScalar(I).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(A){Ye.setScissorTest(Te=A)},this.setOpaqueSort=function(A){te=A},this.setTransparentSort=function(A){Q=A},this.getClearColor=function(A){return A.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(A=!0,q=!0,ae=!0){let le=0;if(A){let G=!1;if($!==null){const Se=$.texture.format;G=Se===ih||Se===nh||Se===th}if(G){const Se=$.texture.type,Ce=Se===ji||Se===cs||Se===fa||Se===co||Se===Jd||Se===eh,Ne=$e.getClearColor(),Fe=$e.getClearAlpha(),Je=Ne.r,et=Ne.g,Xe=Ne.b;Ce?(E[0]=Je,E[1]=et,E[2]=Xe,E[3]=Fe,H.clearBufferuiv(H.COLOR,0,E)):(T[0]=Je,T[1]=et,T[2]=Xe,T[3]=Fe,H.clearBufferiv(H.COLOR,0,T))}else le|=H.COLOR_BUFFER_BIT}q&&(le|=H.DEPTH_BUFFER_BIT),ae&&(le|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",be,!1),$e.dispose(),Ie.dispose(),at.dispose(),We.dispose(),w.dispose(),ie.dispose(),de.dispose(),wt.dispose(),X.dispose(),Ve.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",hs),ue.removeEventListener("sessionend",Qi),Ri.stop()};function he(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Y=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),Y=!1;const A=At.autoReset,q=ze.enabled,ae=ze.autoUpdate,le=ze.needsUpdate,G=ze.type;Re(),At.autoReset=A,ze.enabled=q,ze.autoUpdate=ae,ze.needsUpdate=le,ze.type=G}function be(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function it(A){const q=A.target;q.removeEventListener("dispose",it),Ut(q)}function Ut(A){$t(A),We.remove(A)}function $t(A){const q=We.get(A).programs;q!==void 0&&(q.forEach(function(ae){Ve.releaseProgram(ae)}),A.isShaderMaterial&&Ve.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,ae,le,G,Se){q===null&&(q=Rt);const Ce=G.isMesh&&G.matrixWorld.determinant()<0,Ne=wa(A,q,ae,le,G);Ye.setMaterial(le,Ce);let Fe=ae.index,Je=1;if(le.wireframe===!0){if(Fe=_e.getWireframeAttribute(ae),Fe===void 0)return;Je=2}const et=ae.drawRange,Xe=ae.attributes.position;let rt=et.start*Je,yt=(et.start+et.count)*Je;Se!==null&&(rt=Math.max(rt,Se.start*Je),yt=Math.min(yt,(Se.start+Se.count)*Je)),Fe!==null?(rt=Math.max(rt,0),yt=Math.min(yt,Fe.count)):Xe!=null&&(rt=Math.max(rt,0),yt=Math.min(yt,Xe.count));const St=yt-rt;if(St<0||St===1/0)return;wt.setup(G,le,Ne,ae,Fe);let Ft,_t=ke;if(Fe!==null&&(Ft=me.get(Fe),_t=ut,_t.setIndex(Ft)),G.isMesh)le.wireframe===!0?(Ye.setLineWidth(le.wireframeLinewidth*Lt()),_t.setMode(H.LINES)):_t.setMode(H.TRIANGLES);else if(G.isLine){let qe=le.linewidth;qe===void 0&&(qe=1),Ye.setLineWidth(qe*Lt()),G.isLineSegments?_t.setMode(H.LINES):G.isLineLoop?_t.setMode(H.LINE_LOOP):_t.setMode(H.LINE_STRIP)}else G.isPoints?_t.setMode(H.POINTS):G.isSprite&&_t.setMode(H.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)_t.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))_t.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const qe=G._multiDrawStarts,Ht=G._multiDrawCounts,mt=G._multiDrawCount,rn=Fe?me.get(Fe).bytesPerElement:1,Zn=We.get(le).currentProgram.getUniforms();for(let _n=0;_n<mt;_n++)Zn.setValue(H,"_gl_DrawID",_n),_t.render(qe[_n]/rn,Ht[_n])}else if(G.isInstancedMesh)_t.renderInstances(rt,St,G.count);else if(ae.isInstancedBufferGeometry){const qe=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Ht=Math.min(ae.instanceCount,qe);_t.renderInstances(rt,St,Ht)}else _t.render(rt,St)};function vt(A,q,ae){A.transparent===!0&&A.side===Wi&&A.forceSinglePass===!1?(A.side=Nn,A.needsUpdate=!0,ps(A,q,ae),A.side=Dr,A.needsUpdate=!0,ps(A,q,ae),A.side=Wi):ps(A,q,ae)}this.compile=function(A,q,ae=null){ae===null&&(ae=A),v=at.get(ae),v.init(q),D.push(v),ae.traverseVisible(function(G){G.isLight&&G.layers.test(q.layers)&&(v.pushLight(G),G.castShadow&&v.pushShadow(G))}),A!==ae&&A.traverseVisible(function(G){G.isLight&&G.layers.test(q.layers)&&(v.pushLight(G),G.castShadow&&v.pushShadow(G))}),v.setupLights();const le=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const Se=G.material;if(Se)if(Array.isArray(Se))for(let Ce=0;Ce<Se.length;Ce++){const Ne=Se[Ce];vt(Ne,ae,G),le.add(Ne)}else vt(Se,ae,G),le.add(Se)}),D.pop(),v=null,le},this.compileAsync=function(A,q,ae=null){const le=this.compile(A,q,ae);return new Promise(G=>{function Se(){if(le.forEach(function(Ce){We.get(Ce).currentProgram.isReady()&&le.delete(Ce)}),le.size===0){G(A);return}setTimeout(Se,10)}ft.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let An=null;function gn(A){An&&An(A)}function hs(){Ri.stop()}function Qi(){Ri.start()}const Ri=new V_;Ri.setAnimationLoop(gn),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(A){An=A,ue.setAnimationLoop(A),A===null?Ri.stop():Ri.start()},ue.addEventListener("sessionstart",hs),ue.addEventListener("sessionend",Qi),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(q),q=ue.getCamera()),A.isScene===!0&&A.onBeforeRender(P,A,q,$),v=at.get(A,D.length),v.init(q),D.push(v),we.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Z.setFromProjectionMatrix(we),xe=this.localClippingEnabled,ce=Me.init(this.clippingPlanes,xe),S=Ie.get(A,F.length),S.init(),F.push(S),ue.enabled===!0&&ue.isPresenting===!0){const Se=P.xr.getDepthSensingMesh();Se!==null&&Ci(Se,q,-1/0,P.sortObjects)}Ci(A,q,0,P.sortObjects),S.finish(),P.sortObjects===!0&&S.sort(te,Q),ht=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,ht&&$e.addToRenderList(S,A),this.info.render.frame++,ce===!0&&Me.beginShadows();const ae=v.state.shadowsArray;ze.render(ae,A,q),ce===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const le=S.opaque,G=S.transmissive;if(v.setupLights(),q.isArrayCamera){const Se=q.cameras;if(G.length>0)for(let Ce=0,Ne=Se.length;Ce<Ne;Ce++){const Fe=Se[Ce];Ir(le,G,A,Fe)}ht&&$e.render(A);for(let Ce=0,Ne=Se.length;Ce<Ne;Ce++){const Fe=Se[Ce];Nr(S,A,Fe,Fe.viewport)}}else G.length>0&&Ir(le,G,A,q),ht&&$e.render(A),Nr(S,A,q);$!==null&&(b.updateMultisampleRenderTarget($),b.updateRenderTargetMipmap($)),A.isScene===!0&&A.onAfterRender(P,A,q),wt.resetDefaultState(),C=-1,R=null,D.pop(),D.length>0?(v=D[D.length-1],ce===!0&&Me.setGlobalState(P.clippingPlanes,v.state.camera)):v=null,F.pop(),F.length>0?S=F[F.length-1]:S=null};function Ci(A,q,ae,le){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)ae=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Z.intersectsSprite(A)){le&&Ze.setFromMatrixPosition(A.matrixWorld).applyMatrix4(we);const Ce=de.update(A),Ne=A.material;Ne.visible&&S.push(A,Ce,Ne,ae,Ze.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Z.intersectsObject(A))){const Ce=de.update(A),Ne=A.material;if(le&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ze.copy(A.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Ze.copy(Ce.boundingSphere.center)),Ze.applyMatrix4(A.matrixWorld).applyMatrix4(we)),Array.isArray(Ne)){const Fe=Ce.groups;for(let Je=0,et=Fe.length;Je<et;Je++){const Xe=Fe[Je],rt=Ne[Xe.materialIndex];rt&&rt.visible&&S.push(A,Ce,rt,ae,Ze.z,Xe)}}else Ne.visible&&S.push(A,Ce,Ne,ae,Ze.z,null)}}const Se=A.children;for(let Ce=0,Ne=Se.length;Ce<Ne;Ce++)Ci(Se[Ce],q,ae,le)}function Nr(A,q,ae,le){const G=A.opaque,Se=A.transmissive,Ce=A.transparent;v.setupLightsView(ae),ce===!0&&Me.setGlobalState(P.clippingPlanes,ae),le&&Ye.viewport(V.copy(le)),G.length>0&&Ji(G,q,ae),Se.length>0&&Ji(Se,q,ae),Ce.length>0&&Ji(Ce,q,ae),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Ir(A,q,ae,le){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[le.id]===void 0&&(v.state.transmissionRenderTarget[le.id]=new fs(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?ga:ji,minFilter:as,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const Se=v.state.transmissionRenderTarget[le.id],Ce=le.viewport||V;Se.setSize(Ce.z,Ce.w);const Ne=P.getRenderTarget();P.setRenderTarget(Se),P.getClearColor(N),K=P.getClearAlpha(),K<1&&P.setClearColor(16777215,.5),P.clear(),ht&&$e.render(ae);const Fe=P.toneMapping;P.toneMapping=br;const Je=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),v.setupLightsView(le),ce===!0&&Me.setGlobalState(P.clippingPlanes,le),Ji(A,ae,le),b.updateMultisampleRenderTarget(Se),b.updateRenderTargetMipmap(Se),ft.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Xe=0,rt=q.length;Xe<rt;Xe++){const yt=q[Xe],St=yt.object,Ft=yt.geometry,_t=yt.material,qe=yt.group;if(_t.side===Wi&&St.layers.test(le.layers)){const Ht=_t.side;_t.side=Nn,_t.needsUpdate=!0,Ma(St,ae,le,Ft,_t,qe),_t.side=Ht,_t.needsUpdate=!0,et=!0}}et===!0&&(b.updateMultisampleRenderTarget(Se),b.updateRenderTargetMipmap(Se))}P.setRenderTarget(Ne),P.setClearColor(N,K),Je!==void 0&&(le.viewport=Je),P.toneMapping=Fe}function Ji(A,q,ae){const le=q.isScene===!0?q.overrideMaterial:null;for(let G=0,Se=A.length;G<Se;G++){const Ce=A[G],Ne=Ce.object,Fe=Ce.geometry,Je=le===null?Ce.material:le,et=Ce.group;Ne.layers.test(ae.layers)&&Ma(Ne,q,ae,Fe,Je,et)}}function Ma(A,q,ae,le,G,Se){A.onBeforeRender(P,q,ae,le,G,Se),A.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(P,q,ae,le,A,Se),G.transparent===!0&&G.side===Wi&&G.forceSinglePass===!1?(G.side=Nn,G.needsUpdate=!0,P.renderBufferDirect(ae,q,le,G,A,Se),G.side=Dr,G.needsUpdate=!0,P.renderBufferDirect(ae,q,le,G,A,Se),G.side=Wi):P.renderBufferDirect(ae,q,le,G,A,Se),A.onAfterRender(P,q,ae,le,G,Se)}function ps(A,q,ae){q.isScene!==!0&&(q=Rt);const le=We.get(A),G=v.state.lights,Se=v.state.shadowsArray,Ce=G.state.version,Ne=Ve.getParameters(A,G.state,Se,q,ae),Fe=Ve.getProgramCacheKey(Ne);let Je=le.programs;le.environment=A.isMeshStandardMaterial?q.environment:null,le.fog=q.fog,le.envMap=(A.isMeshStandardMaterial?ie:w).get(A.envMap||le.environment),le.envMapRotation=le.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,Je===void 0&&(A.addEventListener("dispose",it),Je=new Map,le.programs=Je);let et=Je.get(Fe);if(et!==void 0){if(le.currentProgram===et&&le.lightsStateVersion===Ce)return mi(A,Ne),et}else Ne.uniforms=Ve.getUniforms(A),A.onBeforeCompile(Ne,P),et=Ve.acquireProgram(Ne,Fe),Je.set(Fe,et),le.uniforms=Ne.uniforms;const Xe=le.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=Me.uniform),mi(A,Ne),le.needsLights=Nu(A),le.lightsStateVersion=Ce,le.needsLights&&(Xe.ambientLightColor.value=G.state.ambient,Xe.lightProbe.value=G.state.probe,Xe.directionalLights.value=G.state.directional,Xe.directionalLightShadows.value=G.state.directionalShadow,Xe.spotLights.value=G.state.spot,Xe.spotLightShadows.value=G.state.spotShadow,Xe.rectAreaLights.value=G.state.rectArea,Xe.ltc_1.value=G.state.rectAreaLTC1,Xe.ltc_2.value=G.state.rectAreaLTC2,Xe.pointLights.value=G.state.point,Xe.pointLightShadows.value=G.state.pointShadow,Xe.hemisphereLights.value=G.state.hemi,Xe.directionalShadowMap.value=G.state.directionalShadowMap,Xe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Xe.spotShadowMap.value=G.state.spotShadowMap,Xe.spotLightMatrix.value=G.state.spotLightMatrix,Xe.spotLightMap.value=G.state.spotLightMap,Xe.pointShadowMap.value=G.state.pointShadowMap,Xe.pointShadowMatrix.value=G.state.pointShadowMatrix),le.currentProgram=et,le.uniformsList=null,et}function Ea(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=cu.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function mi(A,q){const ae=We.get(A);ae.outputColorSpace=q.outputColorSpace,ae.batching=q.batching,ae.batchingColor=q.batchingColor,ae.instancing=q.instancing,ae.instancingColor=q.instancingColor,ae.instancingMorph=q.instancingMorph,ae.skinning=q.skinning,ae.morphTargets=q.morphTargets,ae.morphNormals=q.morphNormals,ae.morphColors=q.morphColors,ae.morphTargetsCount=q.morphTargetsCount,ae.numClippingPlanes=q.numClippingPlanes,ae.numIntersection=q.numClipIntersection,ae.vertexAlphas=q.vertexAlphas,ae.vertexTangents=q.vertexTangents,ae.toneMapping=q.toneMapping}function wa(A,q,ae,le,G){q.isScene!==!0&&(q=Rt),b.resetTextureUnits();const Se=q.fog,Ce=le.isMeshStandardMaterial?q.environment:null,Ne=$===null?P.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:ho,Fe=(le.isMeshStandardMaterial?ie:w).get(le.envMap||Ce),Je=le.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,et=!!ae.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),Xe=!!ae.morphAttributes.position,rt=!!ae.morphAttributes.normal,yt=!!ae.morphAttributes.color;let St=br;le.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(St=P.toneMapping);const Ft=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,_t=Ft!==void 0?Ft.length:0,qe=We.get(le),Ht=v.state.lights;if(ce===!0&&(xe===!0||A!==R)){const Gt=A===R&&le.id===C;Me.setState(le,A,Gt)}let mt=!1;le.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Ht.state.version||qe.outputColorSpace!==Ne||G.isBatchedMesh&&qe.batching===!1||!G.isBatchedMesh&&qe.batching===!0||G.isBatchedMesh&&qe.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&qe.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&qe.instancing===!1||!G.isInstancedMesh&&qe.instancing===!0||G.isSkinnedMesh&&qe.skinning===!1||!G.isSkinnedMesh&&qe.skinning===!0||G.isInstancedMesh&&qe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&qe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&qe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&qe.instancingMorph===!1&&G.morphTexture!==null||qe.envMap!==Fe||le.fog===!0&&qe.fog!==Se||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Me.numPlanes||qe.numIntersection!==Me.numIntersection)||qe.vertexAlphas!==Je||qe.vertexTangents!==et||qe.morphTargets!==Xe||qe.morphNormals!==rt||qe.morphColors!==yt||qe.toneMapping!==St||qe.morphTargetsCount!==_t)&&(mt=!0):(mt=!0,qe.__version=le.version);let rn=qe.currentProgram;mt===!0&&(rn=ps(le,q,G));let Zn=!1,_n=!1,Fr=!1;const Ct=rn.getUniforms(),vn=qe.uniforms;if(Ye.useProgram(rn.program)&&(Zn=!0,_n=!0,Fr=!0),le.id!==C&&(C=le.id,_n=!0),Zn||R!==A){Ye.buffers.depth.getReversed()?(pe.copy(A.projectionMatrix),Qx(pe),Jx(pe),Ct.setValue(H,"projectionMatrix",pe)):Ct.setValue(H,"projectionMatrix",A.projectionMatrix),Ct.setValue(H,"viewMatrix",A.matrixWorldInverse);const ln=Ct.map.cameraPosition;ln!==void 0&&ln.setValue(H,De.setFromMatrixPosition(A.matrixWorld)),lt.logarithmicDepthBuffer&&Ct.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Ct.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,_n=!0,Fr=!0)}if(G.isSkinnedMesh){Ct.setOptional(H,G,"bindMatrix"),Ct.setOptional(H,G,"bindMatrixInverse");const Gt=G.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),Ct.setValue(H,"boneTexture",Gt.boneTexture,b))}G.isBatchedMesh&&(Ct.setOptional(H,G,"batchingTexture"),Ct.setValue(H,"batchingTexture",G._matricesTexture,b),Ct.setOptional(H,G,"batchingIdTexture"),Ct.setValue(H,"batchingIdTexture",G._indirectTexture,b),Ct.setOptional(H,G,"batchingColorTexture"),G._colorsTexture!==null&&Ct.setValue(H,"batchingColorTexture",G._colorsTexture,b));const an=ae.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&Qe.update(G,ae,rn),(_n||qe.receiveShadow!==G.receiveShadow)&&(qe.receiveShadow=G.receiveShadow,Ct.setValue(H,"receiveShadow",G.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(vn.envMap.value=Fe,vn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&q.environment!==null&&(vn.envMapIntensity.value=q.environmentIntensity),_n&&(Ct.setValue(H,"toneMappingExposure",P.toneMappingExposure),qe.needsLights&&Ta(vn,Fr),Se&&le.fog===!0&&Ae.refreshFogUniforms(vn,Se),Ae.refreshMaterialUniforms(vn,le,I,j,v.state.transmissionRenderTarget[A.id]),cu.upload(H,Ea(qe),vn,b)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(cu.upload(H,Ea(qe),vn,b),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Ct.setValue(H,"center",G.center),Ct.setValue(H,"modelViewMatrix",G.modelViewMatrix),Ct.setValue(H,"normalMatrix",G.normalMatrix),Ct.setValue(H,"modelMatrix",G.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const Gt=le.uniformsGroups;for(let ln=0,Or=Gt.length;ln<Or;ln++){const dt=Gt[ln];X.update(dt,rn),X.bind(dt,rn)}}return rn}function Ta(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function Nu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,q,ae){We.get(A.texture).__webglTexture=q,We.get(A.depthTexture).__webglTexture=ae;const le=We.get(A);le.__hasExternalTextures=!0,le.__autoAllocateDepthBuffer=ae===void 0,le.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),le.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,q){const ae=We.get(A);ae.__webglFramebuffer=q,ae.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(A,q=0,ae=0){$=A,B=q,O=ae;let le=!0,G=null,Se=!1,Ce=!1;if(A){const Fe=We.get(A);if(Fe.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(H.FRAMEBUFFER,null),le=!1;else if(Fe.__webglFramebuffer===void 0)b.setupRenderTarget(A);else if(Fe.__hasExternalTextures)b.rebindTextures(A,We.get(A.texture).__webglTexture,We.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Xe=A.depthTexture;if(Fe.__boundDepthTexture!==Xe){if(Xe!==null&&We.has(Xe)&&(A.width!==Xe.image.width||A.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(A)}}const Je=A.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ce=!0);const et=We.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(et[q])?G=et[q][ae]:G=et[q],Se=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?G=We.get(A).__webglMultisampledFramebuffer:Array.isArray(et)?G=et[ae]:G=et,V.copy(A.viewport),fe.copy(A.scissor),oe=A.scissorTest}else V.copy(L).multiplyScalar(I).floor(),fe.copy(ee).multiplyScalar(I).floor(),oe=Te;if(Ye.bindFramebuffer(H.FRAMEBUFFER,G)&&le&&Ye.drawBuffers(A,G),Ye.viewport(V),Ye.scissor(fe),Ye.setScissorTest(oe),Se){const Fe=We.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+q,Fe.__webglTexture,ae)}else if(Ce){const Fe=We.get(A.texture),Je=q||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Fe.__webglTexture,ae||0,Je)}C=-1},this.readRenderTargetPixels=function(A,q,ae,le,G,Se,Ce){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=We.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne){Ye.bindFramebuffer(H.FRAMEBUFFER,Ne);try{const Fe=A.texture,Je=Fe.format,et=Fe.type;if(!lt.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-le&&ae>=0&&ae<=A.height-G&&H.readPixels(q,ae,le,G,nt.convert(Je),nt.convert(et),Se)}finally{const Fe=$!==null?We.get($).__webglFramebuffer:null;Ye.bindFramebuffer(H.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(A,q,ae,le,G,Se,Ce){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=We.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne){const Fe=A.texture,Je=Fe.format,et=Fe.type;if(!lt.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=A.width-le&&ae>=0&&ae<=A.height-G){Ye.bindFramebuffer(H.FRAMEBUFFER,Ne);const Xe=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Xe),H.bufferData(H.PIXEL_PACK_BUFFER,Se.byteLength,H.STREAM_READ),H.readPixels(q,ae,le,G,nt.convert(Je),nt.convert(et),0);const rt=$!==null?We.get($).__webglFramebuffer:null;Ye.bindFramebuffer(H.FRAMEBUFFER,rt);const yt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Zx(H,yt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Xe),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Se),H.deleteBuffer(Xe),H.deleteSync(yt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,q=null,ae=0){A.isTexture!==!0&&(to("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,A=arguments[1]);const le=Math.pow(2,-ae),G=Math.floor(A.image.width*le),Se=Math.floor(A.image.height*le),Ce=q!==null?q.x:0,Ne=q!==null?q.y:0;b.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,ae,0,0,Ce,Ne,G,Se),Ye.unbindTexture()};const Aa=H.createFramebuffer(),Ra=H.createFramebuffer();this.copyTextureToTexture=function(A,q,ae=null,le=null,G=0,Se=null){A.isTexture!==!0&&(to("WebGLRenderer: copyTextureToTexture function signature has changed."),le=arguments[0]||null,A=arguments[1],q=arguments[2],Se=arguments[3]||0,ae=null),Se===null&&(G!==0?(to("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=G,G=0):Se=0);let Ce,Ne,Fe,Je,et,Xe,rt,yt,St;const Ft=A.isCompressedTexture?A.mipmaps[Se]:A.image;if(ae!==null)Ce=ae.max.x-ae.min.x,Ne=ae.max.y-ae.min.y,Fe=ae.isBox3?ae.max.z-ae.min.z:1,Je=ae.min.x,et=ae.min.y,Xe=ae.isBox3?ae.min.z:0;else{const an=Math.pow(2,-G);Ce=Math.floor(Ft.width*an),Ne=Math.floor(Ft.height*an),A.isDataArrayTexture?Fe=Ft.depth:A.isData3DTexture?Fe=Math.floor(Ft.depth*an):Fe=1,Je=0,et=0,Xe=0}le!==null?(rt=le.x,yt=le.y,St=le.z):(rt=0,yt=0,St=0);const _t=nt.convert(q.format),qe=nt.convert(q.type);let Ht;q.isData3DTexture?(b.setTexture3D(q,0),Ht=H.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(b.setTexture2DArray(q,0),Ht=H.TEXTURE_2D_ARRAY):(b.setTexture2D(q,0),Ht=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const mt=H.getParameter(H.UNPACK_ROW_LENGTH),rn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Zn=H.getParameter(H.UNPACK_SKIP_PIXELS),_n=H.getParameter(H.UNPACK_SKIP_ROWS),Fr=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ft.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ft.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Je),H.pixelStorei(H.UNPACK_SKIP_ROWS,et),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Xe);const Ct=A.isDataArrayTexture||A.isData3DTexture,vn=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const an=We.get(A),Gt=We.get(q),ln=We.get(an.__renderTarget),Or=We.get(Gt.__renderTarget);Ye.bindFramebuffer(H.READ_FRAMEBUFFER,ln.__webglFramebuffer),Ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,Or.__webglFramebuffer);for(let dt=0;dt<Fe;dt++)Ct&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,We.get(A).__webglTexture,G,Xe+dt),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,We.get(q).__webglTexture,Se,St+dt)),H.blitFramebuffer(Je,et,Ce,Ne,rt,yt,Ce,Ne,H.DEPTH_BUFFER_BIT,H.NEAREST);Ye.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||We.has(A)){const an=We.get(A),Gt=We.get(q);Ye.bindFramebuffer(H.READ_FRAMEBUFFER,Aa),Ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ra);for(let ln=0;ln<Fe;ln++)Ct?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,an.__webglTexture,G,Xe+ln):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,an.__webglTexture,G),vn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Gt.__webglTexture,Se,St+ln):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Gt.__webglTexture,Se),G!==0?H.blitFramebuffer(Je,et,Ce,Ne,rt,yt,Ce,Ne,H.COLOR_BUFFER_BIT,H.NEAREST):vn?H.copyTexSubImage3D(Ht,Se,rt,yt,St+ln,Je,et,Ce,Ne):H.copyTexSubImage2D(Ht,Se,rt,yt,Je,et,Ce,Ne);Ye.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else vn?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(Ht,Se,rt,yt,St,Ce,Ne,Fe,_t,qe,Ft.data):q.isCompressedArrayTexture?H.compressedTexSubImage3D(Ht,Se,rt,yt,St,Ce,Ne,Fe,_t,Ft.data):H.texSubImage3D(Ht,Se,rt,yt,St,Ce,Ne,Fe,_t,qe,Ft):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Se,rt,yt,Ce,Ne,_t,qe,Ft.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Se,rt,yt,Ft.width,Ft.height,_t,Ft.data):H.texSubImage2D(H.TEXTURE_2D,Se,rt,yt,Ce,Ne,_t,qe,Ft);H.pixelStorei(H.UNPACK_ROW_LENGTH,mt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,rn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Zn),H.pixelStorei(H.UNPACK_SKIP_ROWS,_n),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Fr),Se===0&&q.generateMipmaps&&H.generateMipmap(Ht),Ye.unbindTexture()},this.copyTextureToTexture3D=function(A,q,ae=null,le=null,G=0){return A.isTexture!==!0&&(to("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ae=arguments[0]||null,le=arguments[1]||null,A=arguments[2],q=arguments[3],G=arguments[4]||0),to('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,q,ae,le,G)},this.initRenderTarget=function(A){We.get(A).__webglFramebuffer===void 0&&b.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),Ye.unbindTexture()},this.resetState=function(){B=0,O=0,$=null,Ye.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}}const Yg=["#8070ff","#6fffff","#fffa6b","#ff8171","#8aff59","#67acff","#6cffff"],_w=({id:i,position:e,name:t,scene:s,onClick:o,opacity:l})=>{const c=En.useRef(),f=En.useRef();return En.useEffect(()=>{const h=new ah(.3,32),p=Yg[Math.floor(Math.random()*Yg.length)],m=new oh({color:p,transparent:!0,opacity:l}),_=new Ei(h,m);_.position.set(e.x,e.y,e.z),c.current=_,s.add(_);const x=document.createElement("canvas"),y=x.getContext("2d"),E=80;y.font=`${E}px Arial`,y.fillStyle="#383F46",y.fillText(t,0,E);const T=y.measureText(t).width;x.width=T,x.height=E,y.font=`${E}px Arial`,y.fillStyle="#383F46",y.fillText(t,0,E);const S=new Cy(x),v=new F_({map:S,transparent:!0,opacity:l}),F=new wy(v);F.position.set(e.x,e.y-.5,e.z),F.scale.set(T/220,E/220,1),f.current=F,s.add(F);const D=O=>{O.stopPropagation(),o(i)};_.userData={handleClick:D};const P=new Uy,Y=new pt,B=O=>{Y.x=O.clientX/window.innerWidth*2-1,Y.y=-(O.clientY/window.innerHeight)*2+1,P.setFromCamera(Y,s.userData.camera);const $=P.intersectObjects(s.children);for(let C=0;C<$.length;C++)$[C].object===_&&D(O)};return window.addEventListener("click",B),()=>{window.removeEventListener("click",B),s.remove(_),s.remove(F)}},[i,e,t,s,o,l]),En.useEffect(()=>{c.current&&(c.current.material.opacity=l),f.current&&(f.current.material.opacity=l)},[l]),null},vw=({start:i,end:e,scene:t,opacity:s})=>{const o=En.useRef();return En.useEffect(()=>{const l=new Ly({color:4870258,dashSize:.15,gapSize:.1,transparent:!0,opacity:s}),c=[];c.push(new re(i.x,i.y,i.z)),c.push(new re(e.x,e.y,e.z));const f=new hi().setFromPoints(c),h=new Ry(f,l);return h.computeLineDistances(),o.current=h,t.add(h),()=>{t.remove(h)}},[i,e,t,s]),En.useEffect(()=>{o.current&&(o.current.material.opacity=s)},[s]),null};var xw={value:()=>{}};function uh(){for(var i=0,e=arguments.length,t={},s;i<e;++i){if(!(s=arguments[i]+"")||s in t||/[\s.]/.test(s))throw new Error("illegal type: "+s);t[s]=[]}return new fu(t)}function fu(i){this._=i}function yw(i,e){return i.trim().split(/^|\s+/).map(function(t){var s="",o=t.indexOf(".");if(o>=0&&(s=t.slice(o+1),t=t.slice(0,o)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:s}})}fu.prototype=uh.prototype={constructor:fu,on:function(i,e){var t=this._,s=yw(i+"",t),o,l=-1,c=s.length;if(arguments.length<2){for(;++l<c;)if((o=(i=s[l]).type)&&(o=Sw(t[o],i.name)))return o;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++l<c;)if(o=(i=s[l]).type)t[o]=qg(t[o],i.name,e);else if(e==null)for(o in t)t[o]=qg(t[o],i.name,null);return this},copy:function(){var i={},e=this._;for(var t in e)i[t]=e[t].slice();return new fu(i)},call:function(i,e){if((o=arguments.length-2)>0)for(var t=new Array(o),s=0,o,l;s<o;++s)t[s]=arguments[s+2];if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(l=this._[i],s=0,o=l.length;s<o;++s)l[s].value.apply(e,t)},apply:function(i,e,t){if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(var s=this._[i],o=0,l=s.length;o<l;++o)s[o].value.apply(e,t)}};function Sw(i,e){for(var t=0,s=i.length,o;t<s;++t)if((o=i[t]).name===e)return o.value}function qg(i,e,t){for(var s=0,o=i.length;s<o;++s)if(i[s].name===e){i[s]=xw,i=i.slice(0,s).concat(i.slice(s+1));break}return t!=null&&i.push({name:e,value:t}),i}var Hd="http://www.w3.org/1999/xhtml";const $g={svg:"http://www.w3.org/2000/svg",xhtml:Hd,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Lu(i){var e=i+="",t=e.indexOf(":");return t>=0&&(e=i.slice(0,t))!=="xmlns"&&(i=i.slice(t+1)),$g.hasOwnProperty(e)?{space:$g[e],local:i}:i}function Mw(i){return function(){var e=this.ownerDocument,t=this.namespaceURI;return t===Hd&&e.documentElement.namespaceURI===Hd?e.createElement(i):e.createElementNS(t,i)}}function Ew(i){return function(){return this.ownerDocument.createElementNS(i.space,i.local)}}function q_(i){var e=Lu(i);return(e.local?Ew:Mw)(e)}function ww(){}function ch(i){return i==null?ww:function(){return this.querySelector(i)}}function Tw(i){typeof i!="function"&&(i=ch(i));for(var e=this._groups,t=e.length,s=new Array(t),o=0;o<t;++o)for(var l=e[o],c=l.length,f=s[o]=new Array(c),h,p,m=0;m<c;++m)(h=l[m])&&(p=i.call(h,h.__data__,m,l))&&("__data__"in h&&(p.__data__=h.__data__),f[m]=p);return new Hn(s,this._parents)}function Aw(i){return i==null?[]:Array.isArray(i)?i:Array.from(i)}function Rw(){return[]}function $_(i){return i==null?Rw:function(){return this.querySelectorAll(i)}}function Cw(i){return function(){return Aw(i.apply(this,arguments))}}function Pw(i){typeof i=="function"?i=Cw(i):i=$_(i);for(var e=this._groups,t=e.length,s=[],o=[],l=0;l<t;++l)for(var c=e[l],f=c.length,h,p=0;p<f;++p)(h=c[p])&&(s.push(i.call(h,h.__data__,p,c)),o.push(h));return new Hn(s,o)}function j_(i){return function(){return this.matches(i)}}function K_(i){return function(e){return e.matches(i)}}var bw=Array.prototype.find;function Lw(i){return function(){return bw.call(this.children,i)}}function Dw(){return this.firstElementChild}function Uw(i){return this.select(i==null?Dw:Lw(typeof i=="function"?i:K_(i)))}var Nw=Array.prototype.filter;function Iw(){return Array.from(this.children)}function Fw(i){return function(){return Nw.call(this.children,i)}}function Ow(i){return this.selectAll(i==null?Iw:Fw(typeof i=="function"?i:K_(i)))}function zw(i){typeof i!="function"&&(i=j_(i));for(var e=this._groups,t=e.length,s=new Array(t),o=0;o<t;++o)for(var l=e[o],c=l.length,f=s[o]=[],h,p=0;p<c;++p)(h=l[p])&&i.call(h,h.__data__,p,l)&&f.push(h);return new Hn(s,this._parents)}function Z_(i){return new Array(i.length)}function kw(){return new Hn(this._enter||this._groups.map(Z_),this._parents)}function Su(i,e){this.ownerDocument=i.ownerDocument,this.namespaceURI=i.namespaceURI,this._next=null,this._parent=i,this.__data__=e}Su.prototype={constructor:Su,appendChild:function(i){return this._parent.insertBefore(i,this._next)},insertBefore:function(i,e){return this._parent.insertBefore(i,e)},querySelector:function(i){return this._parent.querySelector(i)},querySelectorAll:function(i){return this._parent.querySelectorAll(i)}};function Bw(i){return function(){return i}}function Hw(i,e,t,s,o,l){for(var c=0,f,h=e.length,p=l.length;c<p;++c)(f=e[c])?(f.__data__=l[c],s[c]=f):t[c]=new Su(i,l[c]);for(;c<h;++c)(f=e[c])&&(o[c]=f)}function Vw(i,e,t,s,o,l,c){var f,h,p=new Map,m=e.length,_=l.length,x=new Array(m),y;for(f=0;f<m;++f)(h=e[f])&&(x[f]=y=c.call(h,h.__data__,f,e)+"",p.has(y)?o[f]=h:p.set(y,h));for(f=0;f<_;++f)y=c.call(i,l[f],f,l)+"",(h=p.get(y))?(s[f]=h,h.__data__=l[f],p.delete(y)):t[f]=new Su(i,l[f]);for(f=0;f<m;++f)(h=e[f])&&p.get(x[f])===h&&(o[f]=h)}function Gw(i){return i.__data__}function Ww(i,e){if(!arguments.length)return Array.from(this,Gw);var t=e?Vw:Hw,s=this._parents,o=this._groups;typeof i!="function"&&(i=Bw(i));for(var l=o.length,c=new Array(l),f=new Array(l),h=new Array(l),p=0;p<l;++p){var m=s[p],_=o[p],x=_.length,y=Xw(i.call(m,m&&m.__data__,p,s)),E=y.length,T=f[p]=new Array(E),S=c[p]=new Array(E),v=h[p]=new Array(x);t(m,_,T,S,v,y,e);for(var F=0,D=0,P,Y;F<E;++F)if(P=T[F]){for(F>=D&&(D=F+1);!(Y=S[D])&&++D<E;);P._next=Y||null}}return c=new Hn(c,s),c._enter=f,c._exit=h,c}function Xw(i){return typeof i=="object"&&"length"in i?i:Array.from(i)}function Yw(){return new Hn(this._exit||this._groups.map(Z_),this._parents)}function qw(i,e,t){var s=this.enter(),o=this,l=this.exit();return typeof i=="function"?(s=i(s),s&&(s=s.selection())):s=s.append(i+""),e!=null&&(o=e(o),o&&(o=o.selection())),t==null?l.remove():t(l),s&&o?s.merge(o).order():o}function $w(i){for(var e=i.selection?i.selection():i,t=this._groups,s=e._groups,o=t.length,l=s.length,c=Math.min(o,l),f=new Array(o),h=0;h<c;++h)for(var p=t[h],m=s[h],_=p.length,x=f[h]=new Array(_),y,E=0;E<_;++E)(y=p[E]||m[E])&&(x[E]=y);for(;h<o;++h)f[h]=t[h];return new Hn(f,this._parents)}function jw(){for(var i=this._groups,e=-1,t=i.length;++e<t;)for(var s=i[e],o=s.length-1,l=s[o],c;--o>=0;)(c=s[o])&&(l&&c.compareDocumentPosition(l)^4&&l.parentNode.insertBefore(c,l),l=c);return this}function Kw(i){i||(i=Zw);function e(_,x){return _&&x?i(_.__data__,x.__data__):!_-!x}for(var t=this._groups,s=t.length,o=new Array(s),l=0;l<s;++l){for(var c=t[l],f=c.length,h=o[l]=new Array(f),p,m=0;m<f;++m)(p=c[m])&&(h[m]=p);h.sort(e)}return new Hn(o,this._parents).order()}function Zw(i,e){return i<e?-1:i>e?1:i>=e?0:NaN}function Qw(){var i=arguments[0];return arguments[0]=this,i.apply(null,arguments),this}function Jw(){return Array.from(this)}function eT(){for(var i=this._groups,e=0,t=i.length;e<t;++e)for(var s=i[e],o=0,l=s.length;o<l;++o){var c=s[o];if(c)return c}return null}function tT(){let i=0;for(const e of this)++i;return i}function nT(){return!this.node()}function iT(i){for(var e=this._groups,t=0,s=e.length;t<s;++t)for(var o=e[t],l=0,c=o.length,f;l<c;++l)(f=o[l])&&i.call(f,f.__data__,l,o);return this}function rT(i){return function(){this.removeAttribute(i)}}function sT(i){return function(){this.removeAttributeNS(i.space,i.local)}}function oT(i,e){return function(){this.setAttribute(i,e)}}function aT(i,e){return function(){this.setAttributeNS(i.space,i.local,e)}}function lT(i,e){return function(){var t=e.apply(this,arguments);t==null?this.removeAttribute(i):this.setAttribute(i,t)}}function uT(i,e){return function(){var t=e.apply(this,arguments);t==null?this.removeAttributeNS(i.space,i.local):this.setAttributeNS(i.space,i.local,t)}}function cT(i,e){var t=Lu(i);if(arguments.length<2){var s=this.node();return t.local?s.getAttributeNS(t.space,t.local):s.getAttribute(t)}return this.each((e==null?t.local?sT:rT:typeof e=="function"?t.local?uT:lT:t.local?aT:oT)(t,e))}function Q_(i){return i.ownerDocument&&i.ownerDocument.defaultView||i.document&&i||i.defaultView}function fT(i){return function(){this.style.removeProperty(i)}}function dT(i,e,t){return function(){this.style.setProperty(i,e,t)}}function hT(i,e,t){return function(){var s=e.apply(this,arguments);s==null?this.style.removeProperty(i):this.style.setProperty(i,s,t)}}function pT(i,e,t){return arguments.length>1?this.each((e==null?fT:typeof e=="function"?hT:dT)(i,e,t??"")):mo(this.node(),i)}function mo(i,e){return i.style.getPropertyValue(e)||Q_(i).getComputedStyle(i,null).getPropertyValue(e)}function mT(i){return function(){delete this[i]}}function gT(i,e){return function(){this[i]=e}}function _T(i,e){return function(){var t=e.apply(this,arguments);t==null?delete this[i]:this[i]=t}}function vT(i,e){return arguments.length>1?this.each((e==null?mT:typeof e=="function"?_T:gT)(i,e)):this.node()[i]}function J_(i){return i.trim().split(/^|\s+/)}function fh(i){return i.classList||new e0(i)}function e0(i){this._node=i,this._names=J_(i.getAttribute("class")||"")}e0.prototype={add:function(i){var e=this._names.indexOf(i);e<0&&(this._names.push(i),this._node.setAttribute("class",this._names.join(" ")))},remove:function(i){var e=this._names.indexOf(i);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(i){return this._names.indexOf(i)>=0}};function t0(i,e){for(var t=fh(i),s=-1,o=e.length;++s<o;)t.add(e[s])}function n0(i,e){for(var t=fh(i),s=-1,o=e.length;++s<o;)t.remove(e[s])}function xT(i){return function(){t0(this,i)}}function yT(i){return function(){n0(this,i)}}function ST(i,e){return function(){(e.apply(this,arguments)?t0:n0)(this,i)}}function MT(i,e){var t=J_(i+"");if(arguments.length<2){for(var s=fh(this.node()),o=-1,l=t.length;++o<l;)if(!s.contains(t[o]))return!1;return!0}return this.each((typeof e=="function"?ST:e?xT:yT)(t,e))}function ET(){this.textContent=""}function wT(i){return function(){this.textContent=i}}function TT(i){return function(){var e=i.apply(this,arguments);this.textContent=e??""}}function AT(i){return arguments.length?this.each(i==null?ET:(typeof i=="function"?TT:wT)(i)):this.node().textContent}function RT(){this.innerHTML=""}function CT(i){return function(){this.innerHTML=i}}function PT(i){return function(){var e=i.apply(this,arguments);this.innerHTML=e??""}}function bT(i){return arguments.length?this.each(i==null?RT:(typeof i=="function"?PT:CT)(i)):this.node().innerHTML}function LT(){this.nextSibling&&this.parentNode.appendChild(this)}function DT(){return this.each(LT)}function UT(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function NT(){return this.each(UT)}function IT(i){var e=typeof i=="function"?i:q_(i);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function FT(){return null}function OT(i,e){var t=typeof i=="function"?i:q_(i),s=e==null?FT:typeof e=="function"?e:ch(e);return this.select(function(){return this.insertBefore(t.apply(this,arguments),s.apply(this,arguments)||null)})}function zT(){var i=this.parentNode;i&&i.removeChild(this)}function kT(){return this.each(zT)}function BT(){var i=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(i,this.nextSibling):i}function HT(){var i=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(i,this.nextSibling):i}function VT(i){return this.select(i?HT:BT)}function GT(i){return arguments.length?this.property("__data__",i):this.node().__data__}function WT(i){return function(e){i.call(this,e,this.__data__)}}function XT(i){return i.trim().split(/^|\s+/).map(function(e){var t="",s=e.indexOf(".");return s>=0&&(t=e.slice(s+1),e=e.slice(0,s)),{type:e,name:t}})}function YT(i){return function(){var e=this.__on;if(e){for(var t=0,s=-1,o=e.length,l;t<o;++t)l=e[t],(!i.type||l.type===i.type)&&l.name===i.name?this.removeEventListener(l.type,l.listener,l.options):e[++s]=l;++s?e.length=s:delete this.__on}}}function qT(i,e,t){return function(){var s=this.__on,o,l=WT(e);if(s){for(var c=0,f=s.length;c<f;++c)if((o=s[c]).type===i.type&&o.name===i.name){this.removeEventListener(o.type,o.listener,o.options),this.addEventListener(o.type,o.listener=l,o.options=t),o.value=e;return}}this.addEventListener(i.type,l,t),o={type:i.type,name:i.name,value:e,listener:l,options:t},s?s.push(o):this.__on=[o]}}function $T(i,e,t){var s=XT(i+""),o,l=s.length,c;if(arguments.length<2){var f=this.node().__on;if(f){for(var h=0,p=f.length,m;h<p;++h)for(o=0,m=f[h];o<l;++o)if((c=s[o]).type===m.type&&c.name===m.name)return m.value}return}for(f=e?qT:YT,o=0;o<l;++o)this.each(f(s[o],e,t));return this}function i0(i,e,t){var s=Q_(i),o=s.CustomEvent;typeof o=="function"?o=new o(e,t):(o=s.document.createEvent("Event"),t?(o.initEvent(e,t.bubbles,t.cancelable),o.detail=t.detail):o.initEvent(e,!1,!1)),i.dispatchEvent(o)}function jT(i,e){return function(){return i0(this,i,e)}}function KT(i,e){return function(){return i0(this,i,e.apply(this,arguments))}}function ZT(i,e){return this.each((typeof e=="function"?KT:jT)(i,e))}function*QT(){for(var i=this._groups,e=0,t=i.length;e<t;++e)for(var s=i[e],o=0,l=s.length,c;o<l;++o)(c=s[o])&&(yield c)}var r0=[null];function Hn(i,e){this._groups=i,this._parents=e}function ya(){return new Hn([[document.documentElement]],r0)}function JT(){return this}Hn.prototype=ya.prototype={constructor:Hn,select:Tw,selectAll:Pw,selectChild:Uw,selectChildren:Ow,filter:zw,data:Ww,enter:kw,exit:Yw,join:qw,merge:$w,selection:JT,order:jw,sort:Kw,call:Qw,nodes:Jw,node:eT,size:tT,empty:nT,each:iT,attr:cT,style:pT,property:vT,classed:MT,text:AT,html:bT,raise:DT,lower:NT,append:IT,insert:OT,remove:kT,clone:VT,datum:GT,on:$T,dispatch:ZT,[Symbol.iterator]:QT};function Cr(i){return typeof i=="string"?new Hn([[document.querySelector(i)]],[document.documentElement]):new Hn([[i]],r0)}function eA(i){let e;for(;e=i.sourceEvent;)i=e;return i}function Tr(i,e){if(i=eA(i),e===void 0&&(e=i.currentTarget),e){var t=e.ownerSVGElement||e;if(t.createSVGPoint){var s=t.createSVGPoint();return s.x=i.clientX,s.y=i.clientY,s=s.matrixTransform(e.getScreenCTM().inverse()),[s.x,s.y]}if(e.getBoundingClientRect){var o=e.getBoundingClientRect();return[i.clientX-o.left-e.clientLeft,i.clientY-o.top-e.clientTop]}}return[i.pageX,i.pageY]}const Vd={capture:!0,passive:!1};function Gd(i){i.preventDefault(),i.stopImmediatePropagation()}function tA(i){var e=i.document.documentElement,t=Cr(i).on("dragstart.drag",Gd,Vd);"onselectstart"in e?t.on("selectstart.drag",Gd,Vd):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")}function nA(i,e){var t=i.document.documentElement,s=Cr(i).on("dragstart.drag",null);e&&(s.on("click.drag",Gd,Vd),setTimeout(function(){s.on("click.drag",null)},0)),"onselectstart"in t?s.on("selectstart.drag",null):(t.style.MozUserSelect=t.__noselect,delete t.__noselect)}function dh(i,e,t){i.prototype=e.prototype=t,t.constructor=i}function s0(i,e){var t=Object.create(i.prototype);for(var s in e)t[s]=e[s];return t}function Sa(){}var da=.7,Mu=1/da,oo="\\s*([+-]?\\d+)\\s*",ha="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Ti="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",iA=/^#([0-9a-f]{3,8})$/,rA=new RegExp(`^rgb\\(${oo},${oo},${oo}\\)$`),sA=new RegExp(`^rgb\\(${Ti},${Ti},${Ti}\\)$`),oA=new RegExp(`^rgba\\(${oo},${oo},${oo},${ha}\\)$`),aA=new RegExp(`^rgba\\(${Ti},${Ti},${Ti},${ha}\\)$`),lA=new RegExp(`^hsl\\(${ha},${Ti},${Ti}\\)$`),uA=new RegExp(`^hsla\\(${ha},${Ti},${Ti},${ha}\\)$`),jg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};dh(Sa,pa,{copy(i){return Object.assign(new this.constructor,this,i)},displayable(){return this.rgb().displayable()},hex:Kg,formatHex:Kg,formatHex8:cA,formatHsl:fA,formatRgb:Zg,toString:Zg});function Kg(){return this.rgb().formatHex()}function cA(){return this.rgb().formatHex8()}function fA(){return o0(this).formatHsl()}function Zg(){return this.rgb().formatRgb()}function pa(i){var e,t;return i=(i+"").trim().toLowerCase(),(e=iA.exec(i))?(t=e[1].length,e=parseInt(e[1],16),t===6?Qg(e):t===3?new Un(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):t===8?tu(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):t===4?tu(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=rA.exec(i))?new Un(e[1],e[2],e[3],1):(e=sA.exec(i))?new Un(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=oA.exec(i))?tu(e[1],e[2],e[3],e[4]):(e=aA.exec(i))?tu(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=lA.exec(i))?t_(e[1],e[2]/100,e[3]/100,1):(e=uA.exec(i))?t_(e[1],e[2]/100,e[3]/100,e[4]):jg.hasOwnProperty(i)?Qg(jg[i]):i==="transparent"?new Un(NaN,NaN,NaN,0):null}function Qg(i){return new Un(i>>16&255,i>>8&255,i&255,1)}function tu(i,e,t,s){return s<=0&&(i=e=t=NaN),new Un(i,e,t,s)}function dA(i){return i instanceof Sa||(i=pa(i)),i?(i=i.rgb(),new Un(i.r,i.g,i.b,i.opacity)):new Un}function Wd(i,e,t,s){return arguments.length===1?dA(i):new Un(i,e,t,s??1)}function Un(i,e,t,s){this.r=+i,this.g=+e,this.b=+t,this.opacity=+s}dh(Un,Wd,s0(Sa,{brighter(i){return i=i==null?Mu:Math.pow(Mu,i),new Un(this.r*i,this.g*i,this.b*i,this.opacity)},darker(i){return i=i==null?da:Math.pow(da,i),new Un(this.r*i,this.g*i,this.b*i,this.opacity)},rgb(){return this},clamp(){return new Un(us(this.r),us(this.g),us(this.b),Eu(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Jg,formatHex:Jg,formatHex8:hA,formatRgb:e_,toString:e_}));function Jg(){return`#${ls(this.r)}${ls(this.g)}${ls(this.b)}`}function hA(){return`#${ls(this.r)}${ls(this.g)}${ls(this.b)}${ls((isNaN(this.opacity)?1:this.opacity)*255)}`}function e_(){const i=Eu(this.opacity);return`${i===1?"rgb(":"rgba("}${us(this.r)}, ${us(this.g)}, ${us(this.b)}${i===1?")":`, ${i})`}`}function Eu(i){return isNaN(i)?1:Math.max(0,Math.min(1,i))}function us(i){return Math.max(0,Math.min(255,Math.round(i)||0))}function ls(i){return i=us(i),(i<16?"0":"")+i.toString(16)}function t_(i,e,t,s){return s<=0?i=e=t=NaN:t<=0||t>=1?i=e=NaN:e<=0&&(i=NaN),new li(i,e,t,s)}function o0(i){if(i instanceof li)return new li(i.h,i.s,i.l,i.opacity);if(i instanceof Sa||(i=pa(i)),!i)return new li;if(i instanceof li)return i;i=i.rgb();var e=i.r/255,t=i.g/255,s=i.b/255,o=Math.min(e,t,s),l=Math.max(e,t,s),c=NaN,f=l-o,h=(l+o)/2;return f?(e===l?c=(t-s)/f+(t<s)*6:t===l?c=(s-e)/f+2:c=(e-t)/f+4,f/=h<.5?l+o:2-l-o,c*=60):f=h>0&&h<1?0:c,new li(c,f,h,i.opacity)}function pA(i,e,t,s){return arguments.length===1?o0(i):new li(i,e,t,s??1)}function li(i,e,t,s){this.h=+i,this.s=+e,this.l=+t,this.opacity=+s}dh(li,pA,s0(Sa,{brighter(i){return i=i==null?Mu:Math.pow(Mu,i),new li(this.h,this.s,this.l*i,this.opacity)},darker(i){return i=i==null?da:Math.pow(da,i),new li(this.h,this.s,this.l*i,this.opacity)},rgb(){var i=this.h%360+(this.h<0)*360,e=isNaN(i)||isNaN(this.s)?0:this.s,t=this.l,s=t+(t<.5?t:1-t)*e,o=2*t-s;return new Un(jf(i>=240?i-240:i+120,o,s),jf(i,o,s),jf(i<120?i+240:i-120,o,s),this.opacity)},clamp(){return new li(n_(this.h),nu(this.s),nu(this.l),Eu(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const i=Eu(this.opacity);return`${i===1?"hsl(":"hsla("}${n_(this.h)}, ${nu(this.s)*100}%, ${nu(this.l)*100}%${i===1?")":`, ${i})`}`}}));function n_(i){return i=(i||0)%360,i<0?i+360:i}function nu(i){return Math.max(0,Math.min(1,i||0))}function jf(i,e,t){return(i<60?e+(t-e)*i/60:i<180?t:i<240?e+(t-e)*(240-i)/60:e)*255}const a0=i=>()=>i;function mA(i,e){return function(t){return i+t*e}}function gA(i,e,t){return i=Math.pow(i,t),e=Math.pow(e,t)-i,t=1/t,function(s){return Math.pow(i+s*e,t)}}function _A(i){return(i=+i)==1?l0:function(e,t){return t-e?gA(e,t,i):a0(isNaN(e)?t:e)}}function l0(i,e){var t=e-i;return t?mA(i,t):a0(isNaN(i)?e:i)}const i_=function i(e){var t=_A(e);function s(o,l){var c=t((o=Wd(o)).r,(l=Wd(l)).r),f=t(o.g,l.g),h=t(o.b,l.b),p=l0(o.opacity,l.opacity);return function(m){return o.r=c(m),o.g=f(m),o.b=h(m),o.opacity=p(m),o+""}}return s.gamma=i,s}(1);function Ar(i,e){return i=+i,e=+e,function(t){return i*(1-t)+e*t}}var Xd=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Kf=new RegExp(Xd.source,"g");function vA(i){return function(){return i}}function xA(i){return function(e){return i(e)+""}}function yA(i,e){var t=Xd.lastIndex=Kf.lastIndex=0,s,o,l,c=-1,f=[],h=[];for(i=i+"",e=e+"";(s=Xd.exec(i))&&(o=Kf.exec(e));)(l=o.index)>t&&(l=e.slice(t,l),f[c]?f[c]+=l:f[++c]=l),(s=s[0])===(o=o[0])?f[c]?f[c]+=o:f[++c]=o:(f[++c]=null,h.push({i:c,x:Ar(s,o)})),t=Kf.lastIndex;return t<e.length&&(l=e.slice(t),f[c]?f[c]+=l:f[++c]=l),f.length<2?h[0]?xA(h[0].x):vA(e):(e=h.length,function(p){for(var m=0,_;m<e;++m)f[(_=h[m]).i]=_.x(p);return f.join("")})}var r_=180/Math.PI,Yd={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function u0(i,e,t,s,o,l){var c,f,h;return(c=Math.sqrt(i*i+e*e))&&(i/=c,e/=c),(h=i*t+e*s)&&(t-=i*h,s-=e*h),(f=Math.sqrt(t*t+s*s))&&(t/=f,s/=f,h/=f),i*s<e*t&&(i=-i,e=-e,h=-h,c=-c),{translateX:o,translateY:l,rotate:Math.atan2(e,i)*r_,skewX:Math.atan(h)*r_,scaleX:c,scaleY:f}}var iu;function SA(i){const e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(i+"");return e.isIdentity?Yd:u0(e.a,e.b,e.c,e.d,e.e,e.f)}function MA(i){return i==null||(iu||(iu=document.createElementNS("http://www.w3.org/2000/svg","g")),iu.setAttribute("transform",i),!(i=iu.transform.baseVal.consolidate()))?Yd:(i=i.matrix,u0(i.a,i.b,i.c,i.d,i.e,i.f))}function c0(i,e,t,s){function o(p){return p.length?p.pop()+" ":""}function l(p,m,_,x,y,E){if(p!==_||m!==x){var T=y.push("translate(",null,e,null,t);E.push({i:T-4,x:Ar(p,_)},{i:T-2,x:Ar(m,x)})}else(_||x)&&y.push("translate("+_+e+x+t)}function c(p,m,_,x){p!==m?(p-m>180?m+=360:m-p>180&&(p+=360),x.push({i:_.push(o(_)+"rotate(",null,s)-2,x:Ar(p,m)})):m&&_.push(o(_)+"rotate("+m+s)}function f(p,m,_,x){p!==m?x.push({i:_.push(o(_)+"skewX(",null,s)-2,x:Ar(p,m)}):m&&_.push(o(_)+"skewX("+m+s)}function h(p,m,_,x,y,E){if(p!==_||m!==x){var T=y.push(o(y)+"scale(",null,",",null,")");E.push({i:T-4,x:Ar(p,_)},{i:T-2,x:Ar(m,x)})}else(_!==1||x!==1)&&y.push(o(y)+"scale("+_+","+x+")")}return function(p,m){var _=[],x=[];return p=i(p),m=i(m),l(p.translateX,p.translateY,m.translateX,m.translateY,_,x),c(p.rotate,m.rotate,_,x),f(p.skewX,m.skewX,_,x),h(p.scaleX,p.scaleY,m.scaleX,m.scaleY,_,x),p=m=null,function(y){for(var E=-1,T=x.length,S;++E<T;)_[(S=x[E]).i]=S.x(y);return _.join("")}}}var EA=c0(SA,"px, ","px)","deg)"),wA=c0(MA,", ",")",")"),TA=1e-12;function s_(i){return((i=Math.exp(i))+1/i)/2}function AA(i){return((i=Math.exp(i))-1/i)/2}function RA(i){return((i=Math.exp(2*i))-1)/(i+1)}const CA=function i(e,t,s){function o(l,c){var f=l[0],h=l[1],p=l[2],m=c[0],_=c[1],x=c[2],y=m-f,E=_-h,T=y*y+E*E,S,v;if(T<TA)v=Math.log(x/p)/e,S=function(O){return[f+O*y,h+O*E,p*Math.exp(e*O*v)]};else{var F=Math.sqrt(T),D=(x*x-p*p+s*T)/(2*p*t*F),P=(x*x-p*p-s*T)/(2*x*t*F),Y=Math.log(Math.sqrt(D*D+1)-D),B=Math.log(Math.sqrt(P*P+1)-P);v=(B-Y)/e,S=function(O){var $=O*v,C=s_(Y),R=p/(t*F)*(C*RA(e*$+Y)-AA(Y));return[f+R*y,h+R*E,p*C/s_(e*$+Y)]}}return S.duration=v*1e3*e/Math.SQRT2,S}return o.rho=function(l){var c=Math.max(.001,+l),f=c*c,h=f*f;return i(c,f,h)},o}(Math.SQRT2,2,4);var go=0,ua=0,oa=0,f0=1e3,wu,ca,Tu=0,ds=0,Du=0,ma=typeof performance=="object"&&performance.now?performance:Date,d0=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(i){setTimeout(i,17)};function hh(){return ds||(d0(PA),ds=ma.now()+Du)}function PA(){ds=0}function Au(){this._call=this._time=this._next=null}Au.prototype=h0.prototype={constructor:Au,restart:function(i,e,t){if(typeof i!="function")throw new TypeError("callback is not a function");t=(t==null?hh():+t)+(e==null?0:+e),!this._next&&ca!==this&&(ca?ca._next=this:wu=this,ca=this),this._call=i,this._time=t,qd()},stop:function(){this._call&&(this._call=null,this._time=1/0,qd())}};function h0(i,e,t){var s=new Au;return s.restart(i,e,t),s}function bA(){hh(),++go;for(var i=wu,e;i;)(e=ds-i._time)>=0&&i._call.call(void 0,e),i=i._next;--go}function o_(){ds=(Tu=ma.now())+Du,go=ua=0;try{bA()}finally{go=0,DA(),ds=0}}function LA(){var i=ma.now(),e=i-Tu;e>f0&&(Du-=e,Tu=i)}function DA(){for(var i,e=wu,t,s=1/0;e;)e._call?(s>e._time&&(s=e._time),i=e,e=e._next):(t=e._next,e._next=null,e=i?i._next=t:wu=t);ca=i,qd(s)}function qd(i){if(!go){ua&&(ua=clearTimeout(ua));var e=i-ds;e>24?(i<1/0&&(ua=setTimeout(o_,i-ma.now()-Du)),oa&&(oa=clearInterval(oa))):(oa||(Tu=ma.now(),oa=setInterval(LA,f0)),go=1,d0(o_))}}function a_(i,e,t){var s=new Au;return e=e==null?0:+e,s.restart(o=>{s.stop(),i(o+e)},e,t),s}var UA=uh("start","end","cancel","interrupt"),NA=[],p0=0,l_=1,$d=2,du=3,u_=4,jd=5,hu=6;function Uu(i,e,t,s,o,l){var c=i.__transition;if(!c)i.__transition={};else if(t in c)return;IA(i,t,{name:e,index:s,group:o,on:UA,tween:NA,time:l.time,delay:l.delay,duration:l.duration,ease:l.ease,timer:null,state:p0})}function ph(i,e){var t=pi(i,e);if(t.state>p0)throw new Error("too late; already scheduled");return t}function Ai(i,e){var t=pi(i,e);if(t.state>du)throw new Error("too late; already running");return t}function pi(i,e){var t=i.__transition;if(!t||!(t=t[e]))throw new Error("transition not found");return t}function IA(i,e,t){var s=i.__transition,o;s[e]=t,t.timer=h0(l,0,t.time);function l(p){t.state=l_,t.timer.restart(c,t.delay,t.time),t.delay<=p&&c(p-t.delay)}function c(p){var m,_,x,y;if(t.state!==l_)return h();for(m in s)if(y=s[m],y.name===t.name){if(y.state===du)return a_(c);y.state===u_?(y.state=hu,y.timer.stop(),y.on.call("interrupt",i,i.__data__,y.index,y.group),delete s[m]):+m<e&&(y.state=hu,y.timer.stop(),y.on.call("cancel",i,i.__data__,y.index,y.group),delete s[m])}if(a_(function(){t.state===du&&(t.state=u_,t.timer.restart(f,t.delay,t.time),f(p))}),t.state=$d,t.on.call("start",i,i.__data__,t.index,t.group),t.state===$d){for(t.state=du,o=new Array(x=t.tween.length),m=0,_=-1;m<x;++m)(y=t.tween[m].value.call(i,i.__data__,t.index,t.group))&&(o[++_]=y);o.length=_+1}}function f(p){for(var m=p<t.duration?t.ease.call(null,p/t.duration):(t.timer.restart(h),t.state=jd,1),_=-1,x=o.length;++_<x;)o[_].call(i,m);t.state===jd&&(t.on.call("end",i,i.__data__,t.index,t.group),h())}function h(){t.state=hu,t.timer.stop(),delete s[e];for(var p in s)return;delete i.__transition}}function pu(i,e){var t=i.__transition,s,o,l=!0,c;if(t){e=e==null?null:e+"";for(c in t){if((s=t[c]).name!==e){l=!1;continue}o=s.state>$d&&s.state<jd,s.state=hu,s.timer.stop(),s.on.call(o?"interrupt":"cancel",i,i.__data__,s.index,s.group),delete t[c]}l&&delete i.__transition}}function FA(i){return this.each(function(){pu(this,i)})}function OA(i,e){var t,s;return function(){var o=Ai(this,i),l=o.tween;if(l!==t){s=t=l;for(var c=0,f=s.length;c<f;++c)if(s[c].name===e){s=s.slice(),s.splice(c,1);break}}o.tween=s}}function zA(i,e,t){var s,o;if(typeof t!="function")throw new Error;return function(){var l=Ai(this,i),c=l.tween;if(c!==s){o=(s=c).slice();for(var f={name:e,value:t},h=0,p=o.length;h<p;++h)if(o[h].name===e){o[h]=f;break}h===p&&o.push(f)}l.tween=o}}function kA(i,e){var t=this._id;if(i+="",arguments.length<2){for(var s=pi(this.node(),t).tween,o=0,l=s.length,c;o<l;++o)if((c=s[o]).name===i)return c.value;return null}return this.each((e==null?OA:zA)(t,i,e))}function mh(i,e,t){var s=i._id;return i.each(function(){var o=Ai(this,s);(o.value||(o.value={}))[e]=t.apply(this,arguments)}),function(o){return pi(o,s).value[e]}}function m0(i,e){var t;return(typeof e=="number"?Ar:e instanceof pa?i_:(t=pa(e))?(e=t,i_):yA)(i,e)}function BA(i){return function(){this.removeAttribute(i)}}function HA(i){return function(){this.removeAttributeNS(i.space,i.local)}}function VA(i,e,t){var s,o=t+"",l;return function(){var c=this.getAttribute(i);return c===o?null:c===s?l:l=e(s=c,t)}}function GA(i,e,t){var s,o=t+"",l;return function(){var c=this.getAttributeNS(i.space,i.local);return c===o?null:c===s?l:l=e(s=c,t)}}function WA(i,e,t){var s,o,l;return function(){var c,f=t(this),h;return f==null?void this.removeAttribute(i):(c=this.getAttribute(i),h=f+"",c===h?null:c===s&&h===o?l:(o=h,l=e(s=c,f)))}}function XA(i,e,t){var s,o,l;return function(){var c,f=t(this),h;return f==null?void this.removeAttributeNS(i.space,i.local):(c=this.getAttributeNS(i.space,i.local),h=f+"",c===h?null:c===s&&h===o?l:(o=h,l=e(s=c,f)))}}function YA(i,e){var t=Lu(i),s=t==="transform"?wA:m0;return this.attrTween(i,typeof e=="function"?(t.local?XA:WA)(t,s,mh(this,"attr."+i,e)):e==null?(t.local?HA:BA)(t):(t.local?GA:VA)(t,s,e))}function qA(i,e){return function(t){this.setAttribute(i,e.call(this,t))}}function $A(i,e){return function(t){this.setAttributeNS(i.space,i.local,e.call(this,t))}}function jA(i,e){var t,s;function o(){var l=e.apply(this,arguments);return l!==s&&(t=(s=l)&&$A(i,l)),t}return o._value=e,o}function KA(i,e){var t,s;function o(){var l=e.apply(this,arguments);return l!==s&&(t=(s=l)&&qA(i,l)),t}return o._value=e,o}function ZA(i,e){var t="attr."+i;if(arguments.length<2)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;var s=Lu(i);return this.tween(t,(s.local?jA:KA)(s,e))}function QA(i,e){return function(){ph(this,i).delay=+e.apply(this,arguments)}}function JA(i,e){return e=+e,function(){ph(this,i).delay=e}}function eR(i){var e=this._id;return arguments.length?this.each((typeof i=="function"?QA:JA)(e,i)):pi(this.node(),e).delay}function tR(i,e){return function(){Ai(this,i).duration=+e.apply(this,arguments)}}function nR(i,e){return e=+e,function(){Ai(this,i).duration=e}}function iR(i){var e=this._id;return arguments.length?this.each((typeof i=="function"?tR:nR)(e,i)):pi(this.node(),e).duration}function rR(i,e){if(typeof e!="function")throw new Error;return function(){Ai(this,i).ease=e}}function sR(i){var e=this._id;return arguments.length?this.each(rR(e,i)):pi(this.node(),e).ease}function oR(i,e){return function(){var t=e.apply(this,arguments);if(typeof t!="function")throw new Error;Ai(this,i).ease=t}}function aR(i){if(typeof i!="function")throw new Error;return this.each(oR(this._id,i))}function lR(i){typeof i!="function"&&(i=j_(i));for(var e=this._groups,t=e.length,s=new Array(t),o=0;o<t;++o)for(var l=e[o],c=l.length,f=s[o]=[],h,p=0;p<c;++p)(h=l[p])&&i.call(h,h.__data__,p,l)&&f.push(h);return new Zi(s,this._parents,this._name,this._id)}function uR(i){if(i._id!==this._id)throw new Error;for(var e=this._groups,t=i._groups,s=e.length,o=t.length,l=Math.min(s,o),c=new Array(s),f=0;f<l;++f)for(var h=e[f],p=t[f],m=h.length,_=c[f]=new Array(m),x,y=0;y<m;++y)(x=h[y]||p[y])&&(_[y]=x);for(;f<s;++f)c[f]=e[f];return new Zi(c,this._parents,this._name,this._id)}function cR(i){return(i+"").trim().split(/^|\s+/).every(function(e){var t=e.indexOf(".");return t>=0&&(e=e.slice(0,t)),!e||e==="start"})}function fR(i,e,t){var s,o,l=cR(e)?ph:Ai;return function(){var c=l(this,i),f=c.on;f!==s&&(o=(s=f).copy()).on(e,t),c.on=o}}function dR(i,e){var t=this._id;return arguments.length<2?pi(this.node(),t).on.on(i):this.each(fR(t,i,e))}function hR(i){return function(){var e=this.parentNode;for(var t in this.__transition)if(+t!==i)return;e&&e.removeChild(this)}}function pR(){return this.on("end.remove",hR(this._id))}function mR(i){var e=this._name,t=this._id;typeof i!="function"&&(i=ch(i));for(var s=this._groups,o=s.length,l=new Array(o),c=0;c<o;++c)for(var f=s[c],h=f.length,p=l[c]=new Array(h),m,_,x=0;x<h;++x)(m=f[x])&&(_=i.call(m,m.__data__,x,f))&&("__data__"in m&&(_.__data__=m.__data__),p[x]=_,Uu(p[x],e,t,x,p,pi(m,t)));return new Zi(l,this._parents,e,t)}function gR(i){var e=this._name,t=this._id;typeof i!="function"&&(i=$_(i));for(var s=this._groups,o=s.length,l=[],c=[],f=0;f<o;++f)for(var h=s[f],p=h.length,m,_=0;_<p;++_)if(m=h[_]){for(var x=i.call(m,m.__data__,_,h),y,E=pi(m,t),T=0,S=x.length;T<S;++T)(y=x[T])&&Uu(y,e,t,T,x,E);l.push(x),c.push(m)}return new Zi(l,c,e,t)}var _R=ya.prototype.constructor;function vR(){return new _R(this._groups,this._parents)}function xR(i,e){var t,s,o;return function(){var l=mo(this,i),c=(this.style.removeProperty(i),mo(this,i));return l===c?null:l===t&&c===s?o:o=e(t=l,s=c)}}function g0(i){return function(){this.style.removeProperty(i)}}function yR(i,e,t){var s,o=t+"",l;return function(){var c=mo(this,i);return c===o?null:c===s?l:l=e(s=c,t)}}function SR(i,e,t){var s,o,l;return function(){var c=mo(this,i),f=t(this),h=f+"";return f==null&&(h=f=(this.style.removeProperty(i),mo(this,i))),c===h?null:c===s&&h===o?l:(o=h,l=e(s=c,f))}}function MR(i,e){var t,s,o,l="style."+e,c="end."+l,f;return function(){var h=Ai(this,i),p=h.on,m=h.value[l]==null?f||(f=g0(e)):void 0;(p!==t||o!==m)&&(s=(t=p).copy()).on(c,o=m),h.on=s}}function ER(i,e,t){var s=(i+="")=="transform"?EA:m0;return e==null?this.styleTween(i,xR(i,s)).on("end.style."+i,g0(i)):typeof e=="function"?this.styleTween(i,SR(i,s,mh(this,"style."+i,e))).each(MR(this._id,i)):this.styleTween(i,yR(i,s,e),t).on("end.style."+i,null)}function wR(i,e,t){return function(s){this.style.setProperty(i,e.call(this,s),t)}}function TR(i,e,t){var s,o;function l(){var c=e.apply(this,arguments);return c!==o&&(s=(o=c)&&wR(i,c,t)),s}return l._value=e,l}function AR(i,e,t){var s="style."+(i+="");if(arguments.length<2)return(s=this.tween(s))&&s._value;if(e==null)return this.tween(s,null);if(typeof e!="function")throw new Error;return this.tween(s,TR(i,e,t??""))}function RR(i){return function(){this.textContent=i}}function CR(i){return function(){var e=i(this);this.textContent=e??""}}function PR(i){return this.tween("text",typeof i=="function"?CR(mh(this,"text",i)):RR(i==null?"":i+""))}function bR(i){return function(e){this.textContent=i.call(this,e)}}function LR(i){var e,t;function s(){var o=i.apply(this,arguments);return o!==t&&(e=(t=o)&&bR(o)),e}return s._value=i,s}function DR(i){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(i==null)return this.tween(e,null);if(typeof i!="function")throw new Error;return this.tween(e,LR(i))}function UR(){for(var i=this._name,e=this._id,t=_0(),s=this._groups,o=s.length,l=0;l<o;++l)for(var c=s[l],f=c.length,h,p=0;p<f;++p)if(h=c[p]){var m=pi(h,e);Uu(h,i,t,p,c,{time:m.time+m.delay+m.duration,delay:0,duration:m.duration,ease:m.ease})}return new Zi(s,this._parents,i,t)}function NR(){var i,e,t=this,s=t._id,o=t.size();return new Promise(function(l,c){var f={value:c},h={value:function(){--o===0&&l()}};t.each(function(){var p=Ai(this,s),m=p.on;m!==i&&(e=(i=m).copy(),e._.cancel.push(f),e._.interrupt.push(f),e._.end.push(h)),p.on=e}),o===0&&l()})}var IR=0;function Zi(i,e,t,s){this._groups=i,this._parents=e,this._name=t,this._id=s}function _0(){return++IR}var Vi=ya.prototype;Zi.prototype={constructor:Zi,select:mR,selectAll:gR,selectChild:Vi.selectChild,selectChildren:Vi.selectChildren,filter:lR,merge:uR,selection:vR,transition:UR,call:Vi.call,nodes:Vi.nodes,node:Vi.node,size:Vi.size,empty:Vi.empty,each:Vi.each,on:dR,attr:YA,attrTween:ZA,style:ER,styleTween:AR,text:PR,textTween:DR,remove:pR,tween:kA,delay:eR,duration:iR,ease:sR,easeVarying:aR,end:NR,[Symbol.iterator]:Vi[Symbol.iterator]};function FR(i){return((i*=2)<=1?i*i*i:(i-=2)*i*i+2)/2}var OR={time:null,delay:0,duration:250,ease:FR};function zR(i,e){for(var t;!(t=i.__transition)||!(t=t[e]);)if(!(i=i.parentNode))throw new Error(`transition ${e} not found`);return t}function kR(i){var e,t;i instanceof Zi?(e=i._id,i=i._name):(e=_0(),(t=OR).time=hh(),i=i==null?null:i+"");for(var s=this._groups,o=s.length,l=0;l<o;++l)for(var c=s[l],f=c.length,h,p=0;p<f;++p)(h=c[p])&&Uu(h,i,e,p,c,t||zR(h,e));return new Zi(s,this._parents,i,e)}ya.prototype.interrupt=FA;ya.prototype.transition=kR;const ru=i=>()=>i;function BR(i,{sourceEvent:e,target:t,transform:s,dispatch:o}){Object.defineProperties(this,{type:{value:i,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},target:{value:t,enumerable:!0,configurable:!0},transform:{value:s,enumerable:!0,configurable:!0},_:{value:o}})}function qi(i,e,t){this.k=i,this.x=e,this.y=t}qi.prototype={constructor:qi,scale:function(i){return i===1?this:new qi(this.k*i,this.x,this.y)},translate:function(i,e){return i===0&e===0?this:new qi(this.k,this.x+this.k*i,this.y+this.k*e)},apply:function(i){return[i[0]*this.k+this.x,i[1]*this.k+this.y]},applyX:function(i){return i*this.k+this.x},applyY:function(i){return i*this.k+this.y},invert:function(i){return[(i[0]-this.x)/this.k,(i[1]-this.y)/this.k]},invertX:function(i){return(i-this.x)/this.k},invertY:function(i){return(i-this.y)/this.k},rescaleX:function(i){return i.copy().domain(i.range().map(this.invertX,this).map(i.invert,i))},rescaleY:function(i){return i.copy().domain(i.range().map(this.invertY,this).map(i.invert,i))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var v0=new qi(1,0,0);qi.prototype;function Zf(i){i.stopImmediatePropagation()}function aa(i){i.preventDefault(),i.stopImmediatePropagation()}function HR(i){return(!i.ctrlKey||i.type==="wheel")&&!i.button}function VR(){var i=this;return i instanceof SVGElement?(i=i.ownerSVGElement||i,i.hasAttribute("viewBox")?(i=i.viewBox.baseVal,[[i.x,i.y],[i.x+i.width,i.y+i.height]]):[[0,0],[i.width.baseVal.value,i.height.baseVal.value]]):[[0,0],[i.clientWidth,i.clientHeight]]}function c_(){return this.__zoom||v0}function GR(i){return-i.deltaY*(i.deltaMode===1?.05:i.deltaMode?1:.002)*(i.ctrlKey?10:1)}function WR(){return navigator.maxTouchPoints||"ontouchstart"in this}function XR(i,e,t){var s=i.invertX(e[0][0])-t[0][0],o=i.invertX(e[1][0])-t[1][0],l=i.invertY(e[0][1])-t[0][1],c=i.invertY(e[1][1])-t[1][1];return i.translate(o>s?(s+o)/2:Math.min(0,s)||Math.max(0,o),c>l?(l+c)/2:Math.min(0,l)||Math.max(0,c))}function YR(){var i=HR,e=VR,t=XR,s=GR,o=WR,l=[0,1/0],c=[[-1/0,-1/0],[1/0,1/0]],f=250,h=CA,p=uh("start","zoom","end"),m,_,x,y=500,E=150,T=0,S=10;function v(N){N.property("__zoom",c_).on("wheel.zoom",$,{passive:!1}).on("mousedown.zoom",C).on("dblclick.zoom",R).filter(o).on("touchstart.zoom",V).on("touchmove.zoom",fe).on("touchend.zoom touchcancel.zoom",oe).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}v.transform=function(N,K,z,j){var I=N.selection?N.selection():N;I.property("__zoom",c_),N!==I?Y(N,K,z,j):I.interrupt().each(function(){B(this,arguments).event(j).start().zoom(null,typeof K=="function"?K.apply(this,arguments):K).end()})},v.scaleBy=function(N,K,z,j){v.scaleTo(N,function(){var I=this.__zoom.k,te=typeof K=="function"?K.apply(this,arguments):K;return I*te},z,j)},v.scaleTo=function(N,K,z,j){v.transform(N,function(){var I=e.apply(this,arguments),te=this.__zoom,Q=z==null?P(I):typeof z=="function"?z.apply(this,arguments):z,L=te.invert(Q),ee=typeof K=="function"?K.apply(this,arguments):K;return t(D(F(te,ee),Q,L),I,c)},z,j)},v.translateBy=function(N,K,z,j){v.transform(N,function(){return t(this.__zoom.translate(typeof K=="function"?K.apply(this,arguments):K,typeof z=="function"?z.apply(this,arguments):z),e.apply(this,arguments),c)},null,j)},v.translateTo=function(N,K,z,j,I){v.transform(N,function(){var te=e.apply(this,arguments),Q=this.__zoom,L=j==null?P(te):typeof j=="function"?j.apply(this,arguments):j;return t(v0.translate(L[0],L[1]).scale(Q.k).translate(typeof K=="function"?-K.apply(this,arguments):-K,typeof z=="function"?-z.apply(this,arguments):-z),te,c)},j,I)};function F(N,K){return K=Math.max(l[0],Math.min(l[1],K)),K===N.k?N:new qi(K,N.x,N.y)}function D(N,K,z){var j=K[0]-z[0]*N.k,I=K[1]-z[1]*N.k;return j===N.x&&I===N.y?N:new qi(N.k,j,I)}function P(N){return[(+N[0][0]+ +N[1][0])/2,(+N[0][1]+ +N[1][1])/2]}function Y(N,K,z,j){N.on("start.zoom",function(){B(this,arguments).event(j).start()}).on("interrupt.zoom end.zoom",function(){B(this,arguments).event(j).end()}).tween("zoom",function(){var I=this,te=arguments,Q=B(I,te).event(j),L=e.apply(I,te),ee=z==null?P(L):typeof z=="function"?z.apply(I,te):z,Te=Math.max(L[1][0]-L[0][0],L[1][1]-L[0][1]),Z=I.__zoom,ce=typeof K=="function"?K.apply(I,te):K,xe=h(Z.invert(ee).concat(Te/Z.k),ce.invert(ee).concat(Te/ce.k));return function(pe){if(pe===1)pe=ce;else{var we=xe(pe),De=Te/we[2];pe=new qi(De,ee[0]-we[0]*De,ee[1]-we[1]*De)}Q.zoom(null,pe)}})}function B(N,K,z){return!z&&N.__zooming||new O(N,K)}function O(N,K){this.that=N,this.args=K,this.active=0,this.sourceEvent=null,this.extent=e.apply(N,K),this.taps=0}O.prototype={event:function(N){return N&&(this.sourceEvent=N),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(N,K){return this.mouse&&N!=="mouse"&&(this.mouse[1]=K.invert(this.mouse[0])),this.touch0&&N!=="touch"&&(this.touch0[1]=K.invert(this.touch0[0])),this.touch1&&N!=="touch"&&(this.touch1[1]=K.invert(this.touch1[0])),this.that.__zoom=K,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(N){var K=Cr(this.that).datum();p.call(N,this.that,new BR(N,{sourceEvent:this.sourceEvent,target:v,type:N,transform:this.that.__zoom,dispatch:p}),K)}};function $(N,...K){if(!i.apply(this,arguments))return;var z=B(this,K).event(N),j=this.__zoom,I=Math.max(l[0],Math.min(l[1],j.k*Math.pow(2,s.apply(this,arguments)))),te=Tr(N);if(z.wheel)(z.mouse[0][0]!==te[0]||z.mouse[0][1]!==te[1])&&(z.mouse[1]=j.invert(z.mouse[0]=te)),clearTimeout(z.wheel);else{if(j.k===I)return;z.mouse=[te,j.invert(te)],pu(this),z.start()}aa(N),z.wheel=setTimeout(Q,E),z.zoom("mouse",t(D(F(j,I),z.mouse[0],z.mouse[1]),z.extent,c));function Q(){z.wheel=null,z.end()}}function C(N,...K){if(x||!i.apply(this,arguments))return;var z=N.currentTarget,j=B(this,K,!0).event(N),I=Cr(N.view).on("mousemove.zoom",ee,!0).on("mouseup.zoom",Te,!0),te=Tr(N,z),Q=N.clientX,L=N.clientY;tA(N.view),Zf(N),j.mouse=[te,this.__zoom.invert(te)],pu(this),j.start();function ee(Z){if(aa(Z),!j.moved){var ce=Z.clientX-Q,xe=Z.clientY-L;j.moved=ce*ce+xe*xe>T}j.event(Z).zoom("mouse",t(D(j.that.__zoom,j.mouse[0]=Tr(Z,z),j.mouse[1]),j.extent,c))}function Te(Z){I.on("mousemove.zoom mouseup.zoom",null),nA(Z.view,j.moved),aa(Z),j.event(Z).end()}}function R(N,...K){if(i.apply(this,arguments)){var z=this.__zoom,j=Tr(N.changedTouches?N.changedTouches[0]:N,this),I=z.invert(j),te=z.k*(N.shiftKey?.5:2),Q=t(D(F(z,te),j,I),e.apply(this,K),c);aa(N),f>0?Cr(this).transition().duration(f).call(Y,Q,j,N):Cr(this).call(v.transform,Q,j,N)}}function V(N,...K){if(i.apply(this,arguments)){var z=N.touches,j=z.length,I=B(this,K,N.changedTouches.length===j).event(N),te,Q,L,ee;for(Zf(N),Q=0;Q<j;++Q)L=z[Q],ee=Tr(L,this),ee=[ee,this.__zoom.invert(ee),L.identifier],I.touch0?!I.touch1&&I.touch0[2]!==ee[2]&&(I.touch1=ee,I.taps=0):(I.touch0=ee,te=!0,I.taps=1+!!m);m&&(m=clearTimeout(m)),te&&(I.taps<2&&(_=ee[0],m=setTimeout(function(){m=null},y)),pu(this),I.start())}}function fe(N,...K){if(this.__zooming){var z=B(this,K).event(N),j=N.changedTouches,I=j.length,te,Q,L,ee;for(aa(N),te=0;te<I;++te)Q=j[te],L=Tr(Q,this),z.touch0&&z.touch0[2]===Q.identifier?z.touch0[0]=L:z.touch1&&z.touch1[2]===Q.identifier&&(z.touch1[0]=L);if(Q=z.that.__zoom,z.touch1){var Te=z.touch0[0],Z=z.touch0[1],ce=z.touch1[0],xe=z.touch1[1],pe=(pe=ce[0]-Te[0])*pe+(pe=ce[1]-Te[1])*pe,we=(we=xe[0]-Z[0])*we+(we=xe[1]-Z[1])*we;Q=F(Q,Math.sqrt(pe/we)),L=[(Te[0]+ce[0])/2,(Te[1]+ce[1])/2],ee=[(Z[0]+xe[0])/2,(Z[1]+xe[1])/2]}else if(z.touch0)L=z.touch0[0],ee=z.touch0[1];else return;z.zoom("touch",t(D(Q,L,ee),z.extent,c))}}function oe(N,...K){if(this.__zooming){var z=B(this,K).event(N),j=N.changedTouches,I=j.length,te,Q;for(Zf(N),x&&clearTimeout(x),x=setTimeout(function(){x=null},y),te=0;te<I;++te)Q=j[te],z.touch0&&z.touch0[2]===Q.identifier?delete z.touch0:z.touch1&&z.touch1[2]===Q.identifier&&delete z.touch1;if(z.touch1&&!z.touch0&&(z.touch0=z.touch1,delete z.touch1),z.touch0)z.touch0[1]=this.__zoom.invert(z.touch0[0]);else if(z.end(),z.taps===2&&(Q=Tr(Q,this),Math.hypot(_[0]-Q[0],_[1]-Q[1])<S)){var L=Cr(this).on("dblclick.zoom");L&&L.apply(this,arguments)}}}return v.wheelDelta=function(N){return arguments.length?(s=typeof N=="function"?N:ru(+N),v):s},v.filter=function(N){return arguments.length?(i=typeof N=="function"?N:ru(!!N),v):i},v.touchable=function(N){return arguments.length?(o=typeof N=="function"?N:ru(!!N),v):o},v.extent=function(N){return arguments.length?(e=typeof N=="function"?N:ru([[+N[0][0],+N[0][1]],[+N[1][0],+N[1][1]]]),v):e},v.scaleExtent=function(N){return arguments.length?(l[0]=+N[0],l[1]=+N[1],v):[l[0],l[1]]},v.translateExtent=function(N){return arguments.length?(c[0][0]=+N[0][0],c[1][0]=+N[1][0],c[0][1]=+N[0][1],c[1][1]=+N[1][1],v):[[c[0][0],c[0][1]],[c[1][0],c[1][1]]]},v.constrain=function(N){return arguments.length?(t=N,v):t},v.duration=function(N){return arguments.length?(f=+N,v):f},v.interpolate=function(N){return arguments.length?(h=N,v):h},v.on=function(){var N=p.on.apply(p,arguments);return N===p?v:N},v.clickDistance=function(N){return arguments.length?(T=(N=+N)*N,v):Math.sqrt(T)},v.tapDistance=function(N){return arguments.length?(S=+N,v):S},v}const qR=(i,e,t)=>{const s=i/e,o=new H_(t*s/-2,t*s/2,t/2,t/-2,1,1e3);return o.position.z=10,o},$R=(i,e)=>{const t=new gw({antialias:!0});return t.setSize(i,e),t.setClearColor(1445423,1),t},jR=(i,e,t)=>{const s=window.innerWidth,o=window.innerHeight,l=s/o;i.setSize(s,o),e.left=t*l/-2,e.right=t*l/2,e.top=t/2,e.bottom=t/-2,e.updateProjectionMatrix()},KR=(i,e,t,s)=>{const o=YR().scaleExtent([.1,10]).on("zoom",c=>{const{k:f,x:h,y:p}=c.transform,m=Tr(c,i.domElement),_=m[0]/i.domElement.clientWidth*2-1,x=-(m[1]/i.domElement.clientHeight)*2+1,y=new re(_,x,1).unproject(e);e.zoom=f*t,e.position.set(y.x*s,y.y*s,10),e.updateProjectionMatrix()});Cr(i.domElement).call(o)},ZR=async(i,e,t,s,o)=>{const{points:l,lines:c}=await o();t(l),s(c);const f=window.innerWidth,h=window.innerHeight,p=20,m=qR(f,h,p);e.current.userData.camera=m;const _=$R(f,h);i.current.appendChild(_.domElement),KR(_,m,1,.1);const E=()=>{requestAnimationFrame(E),_.render(e.current,m)};E();const T=()=>jR(_,m,p);return window.addEventListener("resize",T),()=>{window.removeEventListener("resize",T),i.current.removeChild(_.domElement)}},QR=(i,e,t,s)=>{t(i);const o=e.reduce((l,c)=>(c.idPointStart===i?l.push(c.idPointEnd):c.idPointEnd===i&&l.push(c.idPointStart),l),[]);s(o),console.log(`Ponto clicado: ${i}`),console.log(`Ponto conectado: ${o}`)};function JR(i){var e=Math.random()*2*Math.PI,t=Math.random()*i*i,s=Math.sqrt(t)*Math.cos(e),o=Math.sqrt(t)*Math.sin(e);return{x:s,y:o,z:0}}class eC{constructor(e,t,s,o){this.id=e,this.name=t,this.description=s,this.position=o}}const f_=(i,e)=>{const t=i.find(s=>s.id===e);return t?t.position:null};class tC{constructor(e,t,s){this.id=e,this.idPointStart=t,this.idPointEnd=s}}const nC=async()=>{try{const i=await iC(),e=rC(i);return{points:i,lines:e}}catch(i){return console.error(`Failed when try to get points and connections: ${i}`),{points:[],lines:[]}}},iC=async()=>Array.from({length:50},(s,o)=>new eC(o,`Point ${o}`,"Lorem ipsum dolor sit amet, consectetur adipiscing elit",JR(10))),rC=i=>{const t=[];for(let o=0;o<100;o++){let l=Math.floor(Math.random()*i.length),c=Math.floor(Math.random()*i.length);if(l!==c){let f=new tC(o,l,c);t.push(f)}}return t.map((o,l)=>{const c=f_(i,o.idPointStart),f=f_(i,o.idPointEnd);return l<t.length-1?{id:l,start:c,end:f,idPointStart:o.idPointStart,idPointEnd:o.idPointEnd}:null}).filter(o=>o!==null)},sC=()=>{const i=En.useRef(null),e=En.useRef(new My),[t,s]=En.useState([]),[o,l]=En.useState([]),[c,f]=En.useState(null),[h,p]=En.useState([]);En.useEffect(()=>ZR(i,e,s,l,nC),[]);const m=_=>{QR(_,o,f,p)};return wi.jsxs("div",{ref:i,children:[t.map(_=>wi.jsx(_w,{id:_.id,position:_.position,name:_.name,scene:e.current,onClick:m,opacity:c===_.id||h.includes(_.id)?1:c?.1:1},_.id)),o.map(_=>wi.jsx(vw,{start:_.start,end:_.end,scene:e.current,opacity:c===_.idPointStart||c===_.idPointEnd?1:c?.2:1},_.id))]})};function oC(){return wi.jsx("main",{className:"main-container",children:wi.jsx("div",{className:"main-content",children:wi.jsx(sC,{})})})}function aC(){return wi.jsx("div",{className:"App",children:wi.jsx(oC,{})})}ox.render(wi.jsx(ex.StrictMode,{children:wi.jsx(aC,{})}),document.getElementById("root"));
