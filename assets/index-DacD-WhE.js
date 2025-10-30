(function(){const fe=document.createElement("link").relList;if(fe&&fe.supports&&fe.supports("modulepreload"))return;for(const L of document.querySelectorAll('link[rel="modulepreload"]'))y(L);new MutationObserver(L=>{for(const Z of L)if(Z.type==="childList")for(const he of Z.addedNodes)he.tagName==="LINK"&&he.rel==="modulepreload"&&y(he)}).observe(document,{childList:!0,subtree:!0});function F(L){const Z={};return L.integrity&&(Z.integrity=L.integrity),L.referrerPolicy&&(Z.referrerPolicy=L.referrerPolicy),L.crossOrigin==="use-credentials"?Z.credentials="include":L.crossOrigin==="anonymous"?Z.credentials="omit":Z.credentials="same-origin",Z}function y(L){if(L.ep)return;L.ep=!0;const Z=F(L);fetch(L.href,Z)}})();var lo={exports:{}},bn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var md;function Xh(){if(md)return bn;md=1;var A=Symbol.for("react.transitional.element"),fe=Symbol.for("react.fragment");function F(y,L,Z){var he=null;if(Z!==void 0&&(he=""+Z),L.key!==void 0&&(he=""+L.key),"key"in L){Z={};for(var Le in L)Le!=="key"&&(Z[Le]=L[Le])}else Z=L;return L=Z.ref,{$$typeof:A,type:y,key:he,ref:L!==void 0?L:null,props:Z}}return bn.Fragment=fe,bn.jsx=F,bn.jsxs=F,bn}var hd;function Zh(){return hd||(hd=1,lo.exports=Xh()),lo.exports}var ze=Zh(),no={exports:{}},w={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yd;function Jh(){if(yd)return w;yd=1;var A=Symbol.for("react.transitional.element"),fe=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),Z=Symbol.for("react.consumer"),he=Symbol.for("react.context"),Le=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),ce=Symbol.iterator;function Ze(r){return r===null||typeof r!="object"?null:(r=ce&&r[ce]||r["@@iterator"],typeof r=="function"?r:null)}var He={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xe=Object.assign,Ca={};function Je(r,v,R){this.props=r,this.context=v,this.refs=Ca,this.updater=R||He}Je.prototype.isReactComponent={},Je.prototype.setState=function(r,v){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,v,"setState")},Je.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function Za(){}Za.prototype=Je.prototype;function Ue(r,v,R){this.props=r,this.context=v,this.refs=Ca,this.updater=R||He}var ia=Ue.prototype=new Za;ia.constructor=Ue,xe(ia,Je.prototype),ia.isPureReactComponent=!0;var va=Array.isArray;function qe(){}var K={H:null,A:null,T:null,S:null},Ie=Object.prototype.hasOwnProperty;function Ta(r,v,R){var O=R.ref;return{$$typeof:A,type:r,key:v,ref:O!==void 0?O:null,props:R}}function Qt(r,v){return Ta(r.type,v,r.props)}function Da(r){return typeof r=="object"&&r!==null&&r.$$typeof===A}function Qe(r){var v={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(R){return v[R]})}var St=/\/+/g;function Ma(r,v){return typeof r=="object"&&r!==null&&r.key!=null?Qe(""+r.key):v.toString(36)}function Ea(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(qe,qe):(r.status="pending",r.then(function(v){r.status==="pending"&&(r.status="fulfilled",r.value=v)},function(v){r.status==="pending"&&(r.status="rejected",r.reason=v)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function g(r,v,R,O,z){var I=typeof r;(I==="undefined"||I==="boolean")&&(r=null);var P=!1;if(r===null)P=!0;else switch(I){case"bigint":case"string":case"number":P=!0;break;case"object":switch(r.$$typeof){case A:case fe:P=!0;break;case W:return P=r._init,g(P(r._payload),v,R,O,z)}}if(P)return z=z(r),P=O===""?"."+Ma(r,0):O,va(z)?(R="",P!=null&&(R=P.replace(St,"$&/")+"/"),g(z,v,R,"",function(Nl){return Nl})):z!=null&&(Da(z)&&(z=Qt(z,R+(z.key==null||r&&r.key===z.key?"":(""+z.key).replace(St,"$&/")+"/")+P)),v.push(z)),1;P=0;var Be=O===""?".":O+":";if(va(r))for(var ye=0;ye<r.length;ye++)O=r[ye],I=Be+Ma(O,ye),P+=g(O,v,R,I,z);else if(ye=Ze(r),typeof ye=="function")for(r=ye.call(r),ye=0;!(O=r.next()).done;)O=O.value,I=Be+Ma(O,ye++),P+=g(O,v,R,I,z);else if(I==="object"){if(typeof r.then=="function")return g(Ea(r),v,R,O,z);throw v=String(r),Error("Objects are not valid as a React child (found: "+(v==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":v)+"). If you meant to render a collection of children, use an array instead.")}return P}function D(r,v,R){if(r==null)return r;var O=[],z=0;return g(r,O,"","",function(I){return v.call(R,I,z++)}),O}function B(r){if(r._status===-1){var v=r._result;v=v(),v.then(function(R){(r._status===0||r._status===-1)&&(r._status=1,r._result=R)},function(R){(r._status===0||r._status===-1)&&(r._status=2,r._result=R)}),r._status===-1&&(r._status=0,r._result=v)}if(r._status===1)return r._result.default;throw r._result}var ae=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var v=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(v))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},ue={map:D,forEach:function(r,v,R){D(r,function(){v.apply(this,arguments)},R)},count:function(r){var v=0;return D(r,function(){v++}),v},toArray:function(r){return D(r,function(v){return v})||[]},only:function(r){if(!Da(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return w.Activity=x,w.Children=ue,w.Component=Je,w.Fragment=F,w.Profiler=L,w.PureComponent=Ue,w.StrictMode=y,w.Suspense=U,w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,w.__COMPILER_RUNTIME={__proto__:null,c:function(r){return K.H.useMemoCache(r)}},w.cache=function(r){return function(){return r.apply(null,arguments)}},w.cacheSignal=function(){return null},w.cloneElement=function(r,v,R){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var O=xe({},r.props),z=r.key;if(v!=null)for(I in v.key!==void 0&&(z=""+v.key),v)!Ie.call(v,I)||I==="key"||I==="__self"||I==="__source"||I==="ref"&&v.ref===void 0||(O[I]=v[I]);var I=arguments.length-2;if(I===1)O.children=R;else if(1<I){for(var P=Array(I),Be=0;Be<I;Be++)P[Be]=arguments[Be+2];O.children=P}return Ta(r.type,z,O)},w.createContext=function(r){return r={$$typeof:he,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:Z,_context:r},r},w.createElement=function(r,v,R){var O,z={},I=null;if(v!=null)for(O in v.key!==void 0&&(I=""+v.key),v)Ie.call(v,O)&&O!=="key"&&O!=="__self"&&O!=="__source"&&(z[O]=v[O]);var P=arguments.length-2;if(P===1)z.children=R;else if(1<P){for(var Be=Array(P),ye=0;ye<P;ye++)Be[ye]=arguments[ye+2];z.children=Be}if(r&&r.defaultProps)for(O in P=r.defaultProps,P)z[O]===void 0&&(z[O]=P[O]);return Ta(r,I,z)},w.createRef=function(){return{current:null}},w.forwardRef=function(r){return{$$typeof:Le,render:r}},w.isValidElement=Da,w.lazy=function(r){return{$$typeof:W,_payload:{_status:-1,_result:r},_init:B}},w.memo=function(r,v){return{$$typeof:T,type:r,compare:v===void 0?null:v}},w.startTransition=function(r){var v=K.T,R={};K.T=R;try{var O=r(),z=K.S;z!==null&&z(R,O),typeof O=="object"&&O!==null&&typeof O.then=="function"&&O.then(qe,ae)}catch(I){ae(I)}finally{v!==null&&R.types!==null&&(v.types=R.types),K.T=v}},w.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},w.use=function(r){return K.H.use(r)},w.useActionState=function(r,v,R){return K.H.useActionState(r,v,R)},w.useCallback=function(r,v){return K.H.useCallback(r,v)},w.useContext=function(r){return K.H.useContext(r)},w.useDebugValue=function(){},w.useDeferredValue=function(r,v){return K.H.useDeferredValue(r,v)},w.useEffect=function(r,v){return K.H.useEffect(r,v)},w.useEffectEvent=function(r){return K.H.useEffectEvent(r)},w.useId=function(){return K.H.useId()},w.useImperativeHandle=function(r,v,R){return K.H.useImperativeHandle(r,v,R)},w.useInsertionEffect=function(r,v){return K.H.useInsertionEffect(r,v)},w.useLayoutEffect=function(r,v){return K.H.useLayoutEffect(r,v)},w.useMemo=function(r,v){return K.H.useMemo(r,v)},w.useOptimistic=function(r,v){return K.H.useOptimistic(r,v)},w.useReducer=function(r,v,R){return K.H.useReducer(r,v,R)},w.useRef=function(r){return K.H.useRef(r)},w.useState=function(r){return K.H.useState(r)},w.useSyncExternalStore=function(r,v,R){return K.H.useSyncExternalStore(r,v,R)},w.useTransition=function(){return K.H.useTransition()},w.version="19.2.0",w}var pd;function co(){return pd||(pd=1,no.exports=Jh()),no.exports}var Dd=co(),uo={exports:{}},Sn={},io={exports:{}},so={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed;function Fh(){return Ed||(Ed=1,(function(A){function fe(g,D){var B=g.length;g.push(D);e:for(;0<B;){var ae=B-1>>>1,ue=g[ae];if(0<L(ue,D))g[ae]=D,g[B]=ue,B=ae;else break e}}function F(g){return g.length===0?null:g[0]}function y(g){if(g.length===0)return null;var D=g[0],B=g.pop();if(B!==D){g[0]=B;e:for(var ae=0,ue=g.length,r=ue>>>1;ae<r;){var v=2*(ae+1)-1,R=g[v],O=v+1,z=g[O];if(0>L(R,B))O<ue&&0>L(z,R)?(g[ae]=z,g[O]=B,ae=O):(g[ae]=R,g[v]=B,ae=v);else if(O<ue&&0>L(z,B))g[ae]=z,g[O]=B,ae=O;else break e}}return D}function L(g,D){var B=g.sortIndex-D.sortIndex;return B!==0?B:g.id-D.id}if(A.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var Z=performance;A.unstable_now=function(){return Z.now()}}else{var he=Date,Le=he.now();A.unstable_now=function(){return he.now()-Le}}var U=[],T=[],W=1,x=null,ce=3,Ze=!1,He=!1,xe=!1,Ca=!1,Je=typeof setTimeout=="function"?setTimeout:null,Za=typeof clearTimeout=="function"?clearTimeout:null,Ue=typeof setImmediate<"u"?setImmediate:null;function ia(g){for(var D=F(T);D!==null;){if(D.callback===null)y(T);else if(D.startTime<=g)y(T),D.sortIndex=D.expirationTime,fe(U,D);else break;D=F(T)}}function va(g){if(xe=!1,ia(g),!He)if(F(U)!==null)He=!0,qe||(qe=!0,Qe());else{var D=F(T);D!==null&&Ea(va,D.startTime-g)}}var qe=!1,K=-1,Ie=5,Ta=-1;function Qt(){return Ca?!0:!(A.unstable_now()-Ta<Ie)}function Da(){if(Ca=!1,qe){var g=A.unstable_now();Ta=g;var D=!0;try{e:{He=!1,xe&&(xe=!1,Za(K),K=-1),Ze=!0;var B=ce;try{a:{for(ia(g),x=F(U);x!==null&&!(x.expirationTime>g&&Qt());){var ae=x.callback;if(typeof ae=="function"){x.callback=null,ce=x.priorityLevel;var ue=ae(x.expirationTime<=g);if(g=A.unstable_now(),typeof ue=="function"){x.callback=ue,ia(g),D=!0;break a}x===F(U)&&y(U),ia(g)}else y(U);x=F(U)}if(x!==null)D=!0;else{var r=F(T);r!==null&&Ea(va,r.startTime-g),D=!1}}break e}finally{x=null,ce=B,Ze=!1}D=void 0}}finally{D?Qe():qe=!1}}}var Qe;if(typeof Ue=="function")Qe=function(){Ue(Da)};else if(typeof MessageChannel<"u"){var St=new MessageChannel,Ma=St.port2;St.port1.onmessage=Da,Qe=function(){Ma.postMessage(null)}}else Qe=function(){Je(Da,0)};function Ea(g,D){K=Je(function(){g(A.unstable_now())},D)}A.unstable_IdlePriority=5,A.unstable_ImmediatePriority=1,A.unstable_LowPriority=4,A.unstable_NormalPriority=3,A.unstable_Profiling=null,A.unstable_UserBlockingPriority=2,A.unstable_cancelCallback=function(g){g.callback=null},A.unstable_forceFrameRate=function(g){0>g||125<g?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ie=0<g?Math.floor(1e3/g):5},A.unstable_getCurrentPriorityLevel=function(){return ce},A.unstable_next=function(g){switch(ce){case 1:case 2:case 3:var D=3;break;default:D=ce}var B=ce;ce=D;try{return g()}finally{ce=B}},A.unstable_requestPaint=function(){Ca=!0},A.unstable_runWithPriority=function(g,D){switch(g){case 1:case 2:case 3:case 4:case 5:break;default:g=3}var B=ce;ce=g;try{return D()}finally{ce=B}},A.unstable_scheduleCallback=function(g,D,B){var ae=A.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?ae+B:ae):B=ae,g){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=B+ue,g={id:W++,callback:D,priorityLevel:g,startTime:B,expirationTime:ue,sortIndex:-1},B>ae?(g.sortIndex=B,fe(T,g),F(U)===null&&g===F(T)&&(xe?(Za(K),K=-1):xe=!0,Ea(va,B-ae))):(g.sortIndex=ue,fe(U,g),He||Ze||(He=!0,qe||(qe=!0,Qe()))),g},A.unstable_shouldYield=Qt,A.unstable_wrapCallback=function(g){var D=ce;return function(){var B=ce;ce=D;try{return g.apply(this,arguments)}finally{ce=B}}}})(so)),so}var gd;function Wh(){return gd||(gd=1,io.exports=Fh()),io.exports}var oo={exports:{}},_e={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bd;function Ph(){if(bd)return _e;bd=1;var A=co();function fe(U){var T="https://react.dev/errors/"+U;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var W=2;W<arguments.length;W++)T+="&args[]="+encodeURIComponent(arguments[W])}return"Minified React error #"+U+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function F(){}var y={d:{f:F,r:function(){throw Error(fe(522))},D:F,C:F,L:F,m:F,X:F,S:F,M:F},p:0,findDOMNode:null},L=Symbol.for("react.portal");function Z(U,T,W){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:x==null?null:""+x,children:U,containerInfo:T,implementation:W}}var he=A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Le(U,T){if(U==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return _e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=y,_e.createPortal=function(U,T){var W=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(fe(299));return Z(U,T,null,W)},_e.flushSync=function(U){var T=he.T,W=y.p;try{if(he.T=null,y.p=2,U)return U()}finally{he.T=T,y.p=W,y.d.f()}},_e.preconnect=function(U,T){typeof U=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,y.d.C(U,T))},_e.prefetchDNS=function(U){typeof U=="string"&&y.d.D(U)},_e.preinit=function(U,T){if(typeof U=="string"&&T&&typeof T.as=="string"){var W=T.as,x=Le(W,T.crossOrigin),ce=typeof T.integrity=="string"?T.integrity:void 0,Ze=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;W==="style"?y.d.S(U,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:x,integrity:ce,fetchPriority:Ze}):W==="script"&&y.d.X(U,{crossOrigin:x,integrity:ce,fetchPriority:Ze,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},_e.preinitModule=function(U,T){if(typeof U=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var W=Le(T.as,T.crossOrigin);y.d.M(U,{crossOrigin:W,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&y.d.M(U)},_e.preload=function(U,T){if(typeof U=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var W=T.as,x=Le(W,T.crossOrigin);y.d.L(U,W,{crossOrigin:x,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},_e.preloadModule=function(U,T){if(typeof U=="string")if(T){var W=Le(T.as,T.crossOrigin);y.d.m(U,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:W,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else y.d.m(U)},_e.requestFormReset=function(U){y.d.r(U)},_e.unstable_batchedUpdates=function(U,T){return U(T)},_e.useFormState=function(U,T,W){return he.H.useFormState(U,T,W)},_e.useFormStatus=function(){return he.H.useHostTransitionStatus()},_e.version="19.2.0",_e}var Sd;function $h(){if(Sd)return oo.exports;Sd=1;function A(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A)}catch(fe){console.error(fe)}}return A(),oo.exports=Ph(),oo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vd;function ey(){if(vd)return Sn;vd=1;var A=Wh(),fe=co(),F=$h();function y(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function L(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Z(e){var a=e,t=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(t=a.return),e=a.return;while(e)}return a.tag===3?t:null}function he(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function Le(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function U(e){if(Z(e)!==e)throw Error(y(188))}function T(e){var a=e.alternate;if(!a){if(a=Z(e),a===null)throw Error(y(188));return a!==e?null:e}for(var t=e,l=a;;){var n=t.return;if(n===null)break;var u=n.alternate;if(u===null){if(l=n.return,l!==null){t=l;continue}break}if(n.child===u.child){for(u=n.child;u;){if(u===t)return U(n),e;if(u===l)return U(n),a;u=u.sibling}throw Error(y(188))}if(t.return!==l.return)t=n,l=u;else{for(var i=!1,s=n.child;s;){if(s===t){i=!0,t=n,l=u;break}if(s===l){i=!0,l=n,t=u;break}s=s.sibling}if(!i){for(s=u.child;s;){if(s===t){i=!0,t=u,l=n;break}if(s===l){i=!0,l=u,t=n;break}s=s.sibling}if(!i)throw Error(y(189))}}if(t.alternate!==l)throw Error(y(190))}if(t.tag!==3)throw Error(y(188));return t.stateNode.current===t?e:a}function W(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=W(e),a!==null)return a;e=e.sibling}return null}var x=Object.assign,ce=Symbol.for("react.element"),Ze=Symbol.for("react.transitional.element"),He=Symbol.for("react.portal"),xe=Symbol.for("react.fragment"),Ca=Symbol.for("react.strict_mode"),Je=Symbol.for("react.profiler"),Za=Symbol.for("react.consumer"),Ue=Symbol.for("react.context"),ia=Symbol.for("react.forward_ref"),va=Symbol.for("react.suspense"),qe=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),Ie=Symbol.for("react.lazy"),Ta=Symbol.for("react.activity"),Qt=Symbol.for("react.memo_cache_sentinel"),Da=Symbol.iterator;function Qe(e){return e===null||typeof e!="object"?null:(e=Da&&e[Da]||e["@@iterator"],typeof e=="function"?e:null)}var St=Symbol.for("react.client.reference");function Ma(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===St?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case xe:return"Fragment";case Je:return"Profiler";case Ca:return"StrictMode";case va:return"Suspense";case qe:return"SuspenseList";case Ta:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case He:return"Portal";case Ue:return e.displayName||"Context";case Za:return(e._context.displayName||"Context")+".Consumer";case ia:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return a=e.displayName||null,a!==null?a:Ma(e.type)||"Memo";case Ie:a=e._payload,e=e._init;try{return Ma(e(a))}catch{}}return null}var Ea=Array.isArray,g=fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=F.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B={pending:!1,data:null,method:null,action:null},ae=[],ue=-1;function r(e){return{current:e}}function v(e){0>ue||(e.current=ae[ue],ae[ue]=null,ue--)}function R(e,a){ue++,ae[ue]=e.current,e.current=a}var O=r(null),z=r(null),I=r(null),P=r(null);function Be(e,a){switch(R(I,a),R(z,e),R(O,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?zf(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=zf(a),e=Hf(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}v(O),R(O,e)}function ye(){v(O),v(z),v(I)}function Nl(e){e.memoizedState!==null&&R(P,e);var a=O.current,t=Hf(a,e.type);a!==t&&(R(z,e),R(O,t))}function vn(e){z.current===e&&(v(O),v(z)),P.current===e&&(v(P),yn._currentValue=B)}var Iu,ro;function vt(e){if(Iu===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);Iu=a&&a[1]||"",ro=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Iu+e+ro}var Qu=!1;function Gu(e,a){if(!e||Qu)return"";Qu=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(p){var h=p}Reflect.construct(e,[],S)}else{try{S.call()}catch(p){h=p}e.call(S.prototype)}}else{try{throw Error()}catch(p){h=p}(S=e())&&typeof S.catch=="function"&&S.catch(function(){})}}catch(p){if(p&&h&&typeof p.stack=="string")return[p.stack,h.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=l.DetermineComponentFrameRoot(),i=u[0],s=u[1];if(i&&s){var o=i.split(`
`),m=s.split(`
`);for(n=l=0;l<o.length&&!o[l].includes("DetermineComponentFrameRoot");)l++;for(;n<m.length&&!m[n].includes("DetermineComponentFrameRoot");)n++;if(l===o.length||n===m.length)for(l=o.length-1,n=m.length-1;1<=l&&0<=n&&o[l]!==m[n];)n--;for(;1<=l&&0<=n;l--,n--)if(o[l]!==m[n]){if(l!==1||n!==1)do if(l--,n--,0>n||o[l]!==m[n]){var E=`
`+o[l].replace(" at new "," at ");return e.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",e.displayName)),E}while(1<=l&&0<=n);break}}}finally{Qu=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?vt(t):""}function Rd(e,a){switch(e.tag){case 26:case 27:case 5:return vt(e.type);case 16:return vt("Lazy");case 13:return e.child!==a&&a!==null?vt("Suspense Fallback"):vt("Suspense");case 19:return vt("SuspenseList");case 0:case 15:return Gu(e.type,!1);case 11:return Gu(e.type.render,!1);case 1:return Gu(e.type,!0);case 31:return vt("Activity");default:return""}}function fo(e){try{var a="",t=null;do a+=Rd(e,t),t=e,e=e.return;while(e);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var ju=Object.prototype.hasOwnProperty,Yu=A.unstable_scheduleCallback,Ku=A.unstable_cancelCallback,Nd=A.unstable_shouldYield,Ad=A.unstable_requestPaint,Fe=A.unstable_now,Od=A.unstable_getCurrentPriorityLevel,mo=A.unstable_ImmediatePriority,ho=A.unstable_UserBlockingPriority,Tn=A.unstable_NormalPriority,Cd=A.unstable_LowPriority,yo=A.unstable_IdlePriority,Md=A.log,Ud=A.unstable_setDisableYieldValue,Al=null,We=null;function Ja(e){if(typeof Md=="function"&&Ud(e),We&&typeof We.setStrictMode=="function")try{We.setStrictMode(Al,e)}catch{}}var Pe=Math.clz32?Math.clz32:xd,_d=Math.log,Ld=Math.LN2;function xd(e){return e>>>=0,e===0?32:31-(_d(e)/Ld|0)|0}var Dn=256,Rn=262144,Nn=4194304;function Tt(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function An(e,a,t){var l=e.pendingLanes;if(l===0)return 0;var n=0,u=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var s=l&134217727;return s!==0?(l=s&~u,l!==0?n=Tt(l):(i&=s,i!==0?n=Tt(i):t||(t=s&~e,t!==0&&(n=Tt(t))))):(s=l&~u,s!==0?n=Tt(s):i!==0?n=Tt(i):t||(t=l&~e,t!==0&&(n=Tt(t)))),n===0?0:a!==0&&a!==n&&(a&u)===0&&(u=n&-n,t=a&-a,u>=t||u===32&&(t&4194048)!==0)?a:n}function Ol(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function Bd(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function po(){var e=Nn;return Nn<<=1,(Nn&62914560)===0&&(Nn=4194304),e}function Vu(e){for(var a=[],t=0;31>t;t++)a.push(e);return a}function Cl(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function wd(e,a,t,l,n,u){var i=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var s=e.entanglements,o=e.expirationTimes,m=e.hiddenUpdates;for(t=i&~t;0<t;){var E=31-Pe(t),S=1<<E;s[E]=0,o[E]=-1;var h=m[E];if(h!==null)for(m[E]=null,E=0;E<h.length;E++){var p=h[E];p!==null&&(p.lane&=-536870913)}t&=~S}l!==0&&Eo(e,l,0),u!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=u&~(i&~a))}function Eo(e,a,t){e.pendingLanes|=a,e.suspendedLanes&=~a;var l=31-Pe(a);e.entangledLanes|=a,e.entanglements[l]=e.entanglements[l]|1073741824|t&261930}function go(e,a){var t=e.entangledLanes|=a;for(e=e.entanglements;t;){var l=31-Pe(t),n=1<<l;n&a|e[l]&a&&(e[l]|=a),t&=~n}}function bo(e,a){var t=a&-a;return t=(t&42)!==0?1:ku(t),(t&(e.suspendedLanes|a))!==0?0:t}function ku(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Xu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function So(){var e=D.p;return e!==0?e:(e=window.event,e===void 0?32:id(e.type))}function vo(e,a){var t=D.p;try{return D.p=e,a()}finally{D.p=t}}var Fa=Math.random().toString(36).slice(2),Ne="__reactFiber$"+Fa,Ge="__reactProps$"+Fa,Gt="__reactContainer$"+Fa,Zu="__reactEvents$"+Fa,zd="__reactListeners$"+Fa,Hd="__reactHandles$"+Fa,To="__reactResources$"+Fa,Ml="__reactMarker$"+Fa;function Ju(e){delete e[Ne],delete e[Ge],delete e[Zu],delete e[zd],delete e[Hd]}function jt(e){var a=e[Ne];if(a)return a;for(var t=e.parentNode;t;){if(a=t[Gt]||t[Ne]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(e=Kf(e);e!==null;){if(t=e[Ne])return t;e=Kf(e)}return a}e=t,t=e.parentNode}return null}function Yt(e){if(e=e[Ne]||e[Gt]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function Ul(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(y(33))}function Kt(e){var a=e[To];return a||(a=e[To]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function De(e){e[Ml]=!0}var Do=new Set,Ro={};function Dt(e,a){Vt(e,a),Vt(e+"Capture",a)}function Vt(e,a){for(Ro[e]=a,e=0;e<a.length;e++)Do.add(a[e])}var qd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),No={},Ao={};function Id(e){return ju.call(Ao,e)?!0:ju.call(No,e)?!1:qd.test(e)?Ao[e]=!0:(No[e]=!0,!1)}function On(e,a,t){if(Id(a))if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+t)}}function Cn(e,a,t){if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+t)}}function Ua(e,a,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(a,t,""+l)}}function sa(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oo(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Qd(e,a,t){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,u=l.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return n.call(this)},set:function(i){t=""+i,u.call(this,i)}}),Object.defineProperty(e,a,{enumerable:l.enumerable}),{getValue:function(){return t},setValue:function(i){t=""+i},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Fu(e){if(!e._valueTracker){var a=Oo(e)?"checked":"value";e._valueTracker=Qd(e,a,""+e[a])}}function Co(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var t=a.getValue(),l="";return e&&(l=Oo(e)?e.checked?"true":"false":e.value),e=l,e!==t?(a.setValue(e),!0):!1}function Mn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Gd=/[\n"\\]/g;function oa(e){return e.replace(Gd,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Wu(e,a,t,l,n,u,i,s){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),a!=null?i==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+sa(a)):e.value!==""+sa(a)&&(e.value=""+sa(a)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),a!=null?Pu(e,i,sa(a)):t!=null?Pu(e,i,sa(t)):l!=null&&e.removeAttribute("value"),n==null&&u!=null&&(e.defaultChecked=!!u),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+sa(s):e.removeAttribute("name")}function Mo(e,a,t,l,n,u,i,s){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),a!=null||t!=null){if(!(u!=="submit"&&u!=="reset"||a!=null)){Fu(e);return}t=t!=null?""+sa(t):"",a=a!=null?""+sa(a):t,s||a===e.value||(e.value=a),e.defaultValue=a}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=s?e.checked:!!l,e.defaultChecked=!!l,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i),Fu(e)}function Pu(e,a,t){a==="number"&&Mn(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function kt(e,a,t,l){if(e=e.options,a){a={};for(var n=0;n<t.length;n++)a["$"+t[n]]=!0;for(t=0;t<e.length;t++)n=a.hasOwnProperty("$"+e[t].value),e[t].selected!==n&&(e[t].selected=n),n&&l&&(e[t].defaultSelected=!0)}else{for(t=""+sa(t),a=null,n=0;n<e.length;n++){if(e[n].value===t){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}a!==null||e[n].disabled||(a=e[n])}a!==null&&(a.selected=!0)}}function Uo(e,a,t){if(a!=null&&(a=""+sa(a),a!==e.value&&(e.value=a),t==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=t!=null?""+sa(t):""}function _o(e,a,t,l){if(a==null){if(l!=null){if(t!=null)throw Error(y(92));if(Ea(l)){if(1<l.length)throw Error(y(93));l=l[0]}t=l}t==null&&(t=""),a=t}t=sa(a),e.defaultValue=t,l=e.textContent,l===t&&l!==""&&l!==null&&(e.value=l),Fu(e)}function Xt(e,a){if(a){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=a;return}}e.textContent=a}var jd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Lo(e,a,t){var l=a.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?l?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":l?e.setProperty(a,t):typeof t!="number"||t===0||jd.has(a)?a==="float"?e.cssFloat=t:e[a]=(""+t).trim():e[a]=t+"px"}function xo(e,a,t){if(a!=null&&typeof a!="object")throw Error(y(62));if(e=e.style,t!=null){for(var l in t)!t.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in a)l=a[n],a.hasOwnProperty(n)&&t[n]!==l&&Lo(e,n,l)}else for(var u in a)a.hasOwnProperty(u)&&Lo(e,u,a[u])}function $u(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Kd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Un(e){return Kd.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function _a(){}var ei=null;function ai(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zt=null,Jt=null;function Bo(e){var a=Yt(e);if(a&&(e=a.stateNode)){var t=e[Ge]||null;e:switch(e=a.stateNode,a.type){case"input":if(Wu(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,t.type==="radio"&&a!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+oa(""+a)+'"][type="radio"]'),a=0;a<t.length;a++){var l=t[a];if(l!==e&&l.form===e.form){var n=l[Ge]||null;if(!n)throw Error(y(90));Wu(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(a=0;a<t.length;a++)l=t[a],l.form===e.form&&Co(l)}break e;case"textarea":Uo(e,t.value,t.defaultValue);break e;case"select":a=t.value,a!=null&&kt(e,!!t.multiple,a,!1)}}}var ti=!1;function wo(e,a,t){if(ti)return e(a,t);ti=!0;try{var l=e(a);return l}finally{if(ti=!1,(Zt!==null||Jt!==null)&&(Eu(),Zt&&(a=Zt,e=Jt,Jt=Zt=null,Bo(a),e)))for(a=0;a<e.length;a++)Bo(e[a])}}function _l(e,a){var t=e.stateNode;if(t===null)return null;var l=t[Ge]||null;if(l===null)return null;t=l[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(y(231,a,typeof t));return t}var La=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),li=!1;if(La)try{var Ll={};Object.defineProperty(Ll,"passive",{get:function(){li=!0}}),window.addEventListener("test",Ll,Ll),window.removeEventListener("test",Ll,Ll)}catch{li=!1}var Wa=null,ni=null,_n=null;function zo(){if(_n)return _n;var e,a=ni,t=a.length,l,n="value"in Wa?Wa.value:Wa.textContent,u=n.length;for(e=0;e<t&&a[e]===n[e];e++);var i=t-e;for(l=1;l<=i&&a[t-l]===n[u-l];l++);return _n=n.slice(e,1<l?1-l:void 0)}function Ln(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function xn(){return!0}function Ho(){return!1}function je(e){function a(t,l,n,u,i){this._reactName=t,this._targetInst=n,this.type=l,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(u):u[s]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?xn:Ho,this.isPropagationStopped=Ho,this}return x(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=xn)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=xn)},persist:function(){},isPersistent:xn}),a}var Rt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bn=je(Rt),xl=x({},Rt,{view:0,detail:0}),Vd=je(xl),ui,ii,Bl,wn=x({},xl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bl&&(Bl&&e.type==="mousemove"?(ui=e.screenX-Bl.screenX,ii=e.screenY-Bl.screenY):ii=ui=0,Bl=e),ui)},movementY:function(e){return"movementY"in e?e.movementY:ii}}),qo=je(wn),kd=x({},wn,{dataTransfer:0}),Xd=je(kd),Zd=x({},xl,{relatedTarget:0}),si=je(Zd),Jd=x({},Rt,{animationName:0,elapsedTime:0,pseudoElement:0}),Fd=je(Jd),Wd=x({},Rt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pd=je(Wd),$d=x({},Rt,{data:0}),Io=je($d),em={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},am={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lm(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=tm[e])?!!a[e]:!1}function oi(){return lm}var nm=x({},xl,{key:function(e){if(e.key){var a=em[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=Ln(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?am[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oi,charCode:function(e){return e.type==="keypress"?Ln(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ln(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),um=je(nm),im=x({},wn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qo=je(im),sm=x({},xl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oi}),om=je(sm),cm=x({},Rt,{propertyName:0,elapsedTime:0,pseudoElement:0}),rm=je(cm),fm=x({},wn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dm=je(fm),mm=x({},Rt,{newState:0,oldState:0}),hm=je(mm),ym=[9,13,27,32],ci=La&&"CompositionEvent"in window,wl=null;La&&"documentMode"in document&&(wl=document.documentMode);var pm=La&&"TextEvent"in window&&!wl,Go=La&&(!ci||wl&&8<wl&&11>=wl),jo=" ",Yo=!1;function Ko(e,a){switch(e){case"keyup":return ym.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ft=!1;function Em(e,a){switch(e){case"compositionend":return Vo(a);case"keypress":return a.which!==32?null:(Yo=!0,jo);case"textInput":return e=a.data,e===jo&&Yo?null:e;default:return null}}function gm(e,a){if(Ft)return e==="compositionend"||!ci&&Ko(e,a)?(e=zo(),_n=ni=Wa=null,Ft=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Go&&a.locale!=="ko"?null:a.data;default:return null}}var bm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ko(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!bm[e.type]:a==="textarea"}function Xo(e,a,t,l){Zt?Jt?Jt.push(l):Jt=[l]:Zt=l,a=Ru(a,"onChange"),0<a.length&&(t=new Bn("onChange","change",null,t,l),e.push({event:t,listeners:a}))}var zl=null,Hl=null;function Sm(e){Uf(e,0)}function zn(e){var a=Ul(e);if(Co(a))return e}function Zo(e,a){if(e==="change")return a}var Jo=!1;if(La){var ri;if(La){var fi="oninput"in document;if(!fi){var Fo=document.createElement("div");Fo.setAttribute("oninput","return;"),fi=typeof Fo.oninput=="function"}ri=fi}else ri=!1;Jo=ri&&(!document.documentMode||9<document.documentMode)}function Wo(){zl&&(zl.detachEvent("onpropertychange",Po),Hl=zl=null)}function Po(e){if(e.propertyName==="value"&&zn(Hl)){var a=[];Xo(a,Hl,e,ai(e)),wo(Sm,a)}}function vm(e,a,t){e==="focusin"?(Wo(),zl=a,Hl=t,zl.attachEvent("onpropertychange",Po)):e==="focusout"&&Wo()}function Tm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zn(Hl)}function Dm(e,a){if(e==="click")return zn(a)}function Rm(e,a){if(e==="input"||e==="change")return zn(a)}function Nm(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var $e=typeof Object.is=="function"?Object.is:Nm;function ql(e,a){if($e(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var t=Object.keys(e),l=Object.keys(a);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var n=t[l];if(!ju.call(a,n)||!$e(e[n],a[n]))return!1}return!0}function $o(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ec(e,a){var t=$o(e);e=0;for(var l;t;){if(t.nodeType===3){if(l=e+t.textContent.length,e<=a&&l>=a)return{node:t,offset:a-e};e=l}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=$o(t)}}function ac(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?ac(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function tc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=Mn(e.document);a instanceof e.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)e=a.contentWindow;else break;a=Mn(e.document)}return a}function di(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var Am=La&&"documentMode"in document&&11>=document.documentMode,Wt=null,mi=null,Il=null,hi=!1;function lc(e,a,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;hi||Wt==null||Wt!==Mn(l)||(l=Wt,"selectionStart"in l&&di(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Il&&ql(Il,l)||(Il=l,l=Ru(mi,"onSelect"),0<l.length&&(a=new Bn("onSelect","select",null,a,t),e.push({event:a,listeners:l}),a.target=Wt)))}function Nt(e,a){var t={};return t[e.toLowerCase()]=a.toLowerCase(),t["Webkit"+e]="webkit"+a,t["Moz"+e]="moz"+a,t}var Pt={animationend:Nt("Animation","AnimationEnd"),animationiteration:Nt("Animation","AnimationIteration"),animationstart:Nt("Animation","AnimationStart"),transitionrun:Nt("Transition","TransitionRun"),transitionstart:Nt("Transition","TransitionStart"),transitioncancel:Nt("Transition","TransitionCancel"),transitionend:Nt("Transition","TransitionEnd")},yi={},nc={};La&&(nc=document.createElement("div").style,"AnimationEvent"in window||(delete Pt.animationend.animation,delete Pt.animationiteration.animation,delete Pt.animationstart.animation),"TransitionEvent"in window||delete Pt.transitionend.transition);function At(e){if(yi[e])return yi[e];if(!Pt[e])return e;var a=Pt[e],t;for(t in a)if(a.hasOwnProperty(t)&&t in nc)return yi[e]=a[t];return e}var uc=At("animationend"),ic=At("animationiteration"),sc=At("animationstart"),Om=At("transitionrun"),Cm=At("transitionstart"),Mm=At("transitioncancel"),oc=At("transitionend"),cc=new Map,pi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pi.push("scrollEnd");function ga(e,a){cc.set(e,a),Dt(a,[e])}var Hn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ca=[],$t=0,Ei=0;function qn(){for(var e=$t,a=Ei=$t=0;a<e;){var t=ca[a];ca[a++]=null;var l=ca[a];ca[a++]=null;var n=ca[a];ca[a++]=null;var u=ca[a];if(ca[a++]=null,l!==null&&n!==null){var i=l.pending;i===null?n.next=n:(n.next=i.next,i.next=n),l.pending=n}u!==0&&rc(t,n,u)}}function In(e,a,t,l){ca[$t++]=e,ca[$t++]=a,ca[$t++]=t,ca[$t++]=l,Ei|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function gi(e,a,t,l){return In(e,a,t,l),Qn(e)}function Ot(e,a){return In(e,null,null,a),Qn(e)}function rc(e,a,t){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t);for(var n=!1,u=e.return;u!==null;)u.childLanes|=t,l=u.alternate,l!==null&&(l.childLanes|=t),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(n=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,n&&a!==null&&(n=31-Pe(t),e=u.hiddenUpdates,l=e[n],l===null?e[n]=[a]:l.push(a),a.lane=t|536870912),u):null}function Qn(e){if(50<on)throw on=0,Os=null,Error(y(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var el={};function Um(e,a,t,l){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ea(e,a,t,l){return new Um(e,a,t,l)}function bi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xa(e,a){var t=e.alternate;return t===null?(t=ea(e.tag,a,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=a,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function fc(e,a){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function Gn(e,a,t,l,n,u){var i=0;if(l=e,typeof e=="function")bi(e)&&(i=1);else if(typeof e=="string")i=wh(e,t,O.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ta:return e=ea(31,t,a,n),e.elementType=Ta,e.lanes=u,e;case xe:return Ct(t.children,n,u,a);case Ca:i=8,n|=24;break;case Je:return e=ea(12,t,a,n|2),e.elementType=Je,e.lanes=u,e;case va:return e=ea(13,t,a,n),e.elementType=va,e.lanes=u,e;case qe:return e=ea(19,t,a,n),e.elementType=qe,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ue:i=10;break e;case Za:i=9;break e;case ia:i=11;break e;case K:i=14;break e;case Ie:i=16,l=null;break e}i=29,t=Error(y(130,e===null?"null":typeof e,"")),l=null}return a=ea(i,t,a,n),a.elementType=e,a.type=l,a.lanes=u,a}function Ct(e,a,t,l){return e=ea(7,e,l,a),e.lanes=t,e}function Si(e,a,t){return e=ea(6,e,null,a),e.lanes=t,e}function dc(e){var a=ea(18,null,null,0);return a.stateNode=e,a}function vi(e,a,t){return a=ea(4,e.children!==null?e.children:[],e.key,a),a.lanes=t,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var mc=new WeakMap;function ra(e,a){if(typeof e=="object"&&e!==null){var t=mc.get(e);return t!==void 0?t:(a={value:e,source:a,stack:fo(a)},mc.set(e,a),a)}return{value:e,source:a,stack:fo(a)}}var al=[],tl=0,jn=null,Ql=0,fa=[],da=0,Pa=null,Ra=1,Na="";function Ba(e,a){al[tl++]=Ql,al[tl++]=jn,jn=e,Ql=a}function hc(e,a,t){fa[da++]=Ra,fa[da++]=Na,fa[da++]=Pa,Pa=e;var l=Ra;e=Na;var n=32-Pe(l)-1;l&=~(1<<n),t+=1;var u=32-Pe(a)+n;if(30<u){var i=n-n%5;u=(l&(1<<i)-1).toString(32),l>>=i,n-=i,Ra=1<<32-Pe(a)+n|t<<n|l,Na=u+e}else Ra=1<<u|t<<n|l,Na=e}function Ti(e){e.return!==null&&(Ba(e,1),hc(e,1,0))}function Di(e){for(;e===jn;)jn=al[--tl],al[tl]=null,Ql=al[--tl],al[tl]=null;for(;e===Pa;)Pa=fa[--da],fa[da]=null,Na=fa[--da],fa[da]=null,Ra=fa[--da],fa[da]=null}function yc(e,a){fa[da++]=Ra,fa[da++]=Na,fa[da++]=Pa,Ra=a.id,Na=a.overflow,Pa=e}var Ae=null,se=null,V=!1,$a=null,ma=!1,Ri=Error(y(519));function et(e){var a=Error(y(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Gl(ra(a,e)),Ri}function pc(e){var a=e.stateNode,t=e.type,l=e.memoizedProps;switch(a[Ne]=e,a[Ge]=l,t){case"dialog":G("cancel",a),G("close",a);break;case"iframe":case"object":case"embed":G("load",a);break;case"video":case"audio":for(t=0;t<rn.length;t++)G(rn[t],a);break;case"source":G("error",a);break;case"img":case"image":case"link":G("error",a),G("load",a);break;case"details":G("toggle",a);break;case"input":G("invalid",a),Mo(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":G("invalid",a);break;case"textarea":G("invalid",a),_o(a,l.value,l.defaultValue,l.children)}t=l.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||a.textContent===""+t||l.suppressHydrationWarning===!0||Bf(a.textContent,t)?(l.popover!=null&&(G("beforetoggle",a),G("toggle",a)),l.onScroll!=null&&G("scroll",a),l.onScrollEnd!=null&&G("scrollend",a),l.onClick!=null&&(a.onclick=_a),a=!0):a=!1,a||et(e,!0)}function Ec(e){for(Ae=e.return;Ae;)switch(Ae.tag){case 5:case 31:case 13:ma=!1;return;case 27:case 3:ma=!0;return;default:Ae=Ae.return}}function ll(e){if(e!==Ae)return!1;if(!V)return Ec(e),V=!0,!1;var a=e.tag,t;if((t=a!==3&&a!==27)&&((t=a===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||js(e.type,e.memoizedProps)),t=!t),t&&se&&et(e),Ec(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));se=Yf(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));se=Yf(e)}else a===27?(a=se,ht(e.type)?(e=Xs,Xs=null,se=e):se=a):se=Ae?ya(e.stateNode.nextSibling):null;return!0}function Mt(){se=Ae=null,V=!1}function Ni(){var e=$a;return e!==null&&(ke===null?ke=e:ke.push.apply(ke,e),$a=null),e}function Gl(e){$a===null?$a=[e]:$a.push(e)}var Ai=r(null),Ut=null,wa=null;function at(e,a,t){R(Ai,a._currentValue),a._currentValue=t}function za(e){e._currentValue=Ai.current,v(Ai)}function Oi(e,a,t){for(;e!==null;){var l=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),e===t)break;e=e.return}}function Ci(e,a,t,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var u=n.dependencies;if(u!==null){var i=n.child;u=u.firstContext;e:for(;u!==null;){var s=u;u=n;for(var o=0;o<a.length;o++)if(s.context===a[o]){u.lanes|=t,s=u.alternate,s!==null&&(s.lanes|=t),Oi(u.return,t,e),l||(i=null);break e}u=s.next}}else if(n.tag===18){if(i=n.return,i===null)throw Error(y(341));i.lanes|=t,u=i.alternate,u!==null&&(u.lanes|=t),Oi(i,t,e),i=null}else i=n.child;if(i!==null)i.return=n;else for(i=n;i!==null;){if(i===e){i=null;break}if(n=i.sibling,n!==null){n.return=i.return,i=n;break}i=i.return}n=i}}function nl(e,a,t,l){e=null;for(var n=a,u=!1;n!==null;){if(!u){if((n.flags&524288)!==0)u=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var i=n.alternate;if(i===null)throw Error(y(387));if(i=i.memoizedProps,i!==null){var s=n.type;$e(n.pendingProps.value,i.value)||(e!==null?e.push(s):e=[s])}}else if(n===P.current){if(i=n.alternate,i===null)throw Error(y(387));i.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(yn):e=[yn])}n=n.return}e!==null&&Ci(a,e,t,l),a.flags|=262144}function Yn(e){for(e=e.firstContext;e!==null;){if(!$e(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _t(e){Ut=e,wa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Oe(e){return gc(Ut,e)}function Kn(e,a){return Ut===null&&_t(e),gc(e,a)}function gc(e,a){var t=a._currentValue;if(a={context:a,memoizedValue:t,next:null},wa===null){if(e===null)throw Error(y(308));wa=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else wa=wa.next=a;return t}var _m=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(t,l){e.push(l)}};this.abort=function(){a.aborted=!0,e.forEach(function(t){return t()})}},Lm=A.unstable_scheduleCallback,xm=A.unstable_NormalPriority,ge={$$typeof:Ue,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mi(){return{controller:new _m,data:new Map,refCount:0}}function jl(e){e.refCount--,e.refCount===0&&Lm(xm,function(){e.controller.abort()})}var Yl=null,Ui=0,ul=0,il=null;function Bm(e,a){if(Yl===null){var t=Yl=[];Ui=0,ul=xs(),il={status:"pending",value:void 0,then:function(l){t.push(l)}}}return Ui++,a.then(bc,bc),a}function bc(){if(--Ui===0&&Yl!==null){il!==null&&(il.status="fulfilled");var e=Yl;Yl=null,ul=0,il=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function wm(e,a){var t=[],l={status:"pending",value:null,reason:null,then:function(n){t.push(n)}};return e.then(function(){l.status="fulfilled",l.value=a;for(var n=0;n<t.length;n++)(0,t[n])(a)},function(n){for(l.status="rejected",l.reason=n,n=0;n<t.length;n++)(0,t[n])(void 0)}),l}var Sc=g.S;g.S=function(e,a){lf=Fe(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&Bm(e,a),Sc!==null&&Sc(e,a)};var Lt=r(null);function _i(){var e=Lt.current;return e!==null?e:ie.pooledCache}function Vn(e,a){a===null?R(Lt,Lt.current):R(Lt,a.pool)}function vc(){var e=_i();return e===null?null:{parent:ge._currentValue,pool:e}}var sl=Error(y(460)),Li=Error(y(474)),kn=Error(y(542)),Xn={then:function(){}};function Tc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Dc(e,a,t){switch(t=e[t],t===void 0?e.push(a):t!==a&&(a.then(_a,_a),a=t),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Nc(e),e;default:if(typeof a.status=="string")a.then(_a,_a);else{if(e=ie,e!==null&&100<e.shellSuspendCounter)throw Error(y(482));e=a,e.status="pending",e.then(function(l){if(a.status==="pending"){var n=a;n.status="fulfilled",n.value=l}},function(l){if(a.status==="pending"){var n=a;n.status="rejected",n.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Nc(e),e}throw Bt=a,sl}}function xt(e){try{var a=e._init;return a(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Bt=t,sl):t}}var Bt=null;function Rc(){if(Bt===null)throw Error(y(459));var e=Bt;return Bt=null,e}function Nc(e){if(e===sl||e===kn)throw Error(y(483))}var ol=null,Kl=0;function Zn(e){var a=Kl;return Kl+=1,ol===null&&(ol=[]),Dc(ol,e,a)}function Vl(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function Jn(e,a){throw a.$$typeof===ce?Error(y(525)):(e=Object.prototype.toString.call(a),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function Ac(e){function a(f,c){if(e){var d=f.deletions;d===null?(f.deletions=[c],f.flags|=16):d.push(c)}}function t(f,c){if(!e)return null;for(;c!==null;)a(f,c),c=c.sibling;return null}function l(f){for(var c=new Map;f!==null;)f.key!==null?c.set(f.key,f):c.set(f.index,f),f=f.sibling;return c}function n(f,c){return f=xa(f,c),f.index=0,f.sibling=null,f}function u(f,c,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<c?(f.flags|=67108866,c):d):(f.flags|=67108866,c)):(f.flags|=1048576,c)}function i(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function s(f,c,d,b){return c===null||c.tag!==6?(c=Si(d,f.mode,b),c.return=f,c):(c=n(c,d),c.return=f,c)}function o(f,c,d,b){var M=d.type;return M===xe?E(f,c,d.props.children,b,d.key):c!==null&&(c.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Ie&&xt(M)===c.type)?(c=n(c,d.props),Vl(c,d),c.return=f,c):(c=Gn(d.type,d.key,d.props,null,f.mode,b),Vl(c,d),c.return=f,c)}function m(f,c,d,b){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=vi(d,f.mode,b),c.return=f,c):(c=n(c,d.children||[]),c.return=f,c)}function E(f,c,d,b,M){return c===null||c.tag!==7?(c=Ct(d,f.mode,b,M),c.return=f,c):(c=n(c,d),c.return=f,c)}function S(f,c,d){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=Si(""+c,f.mode,d),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Ze:return d=Gn(c.type,c.key,c.props,null,f.mode,d),Vl(d,c),d.return=f,d;case He:return c=vi(c,f.mode,d),c.return=f,c;case Ie:return c=xt(c),S(f,c,d)}if(Ea(c)||Qe(c))return c=Ct(c,f.mode,d,null),c.return=f,c;if(typeof c.then=="function")return S(f,Zn(c),d);if(c.$$typeof===Ue)return S(f,Kn(f,c),d);Jn(f,c)}return null}function h(f,c,d,b){var M=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return M!==null?null:s(f,c,""+d,b);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ze:return d.key===M?o(f,c,d,b):null;case He:return d.key===M?m(f,c,d,b):null;case Ie:return d=xt(d),h(f,c,d,b)}if(Ea(d)||Qe(d))return M!==null?null:E(f,c,d,b,null);if(typeof d.then=="function")return h(f,c,Zn(d),b);if(d.$$typeof===Ue)return h(f,c,Kn(f,d),b);Jn(f,d)}return null}function p(f,c,d,b,M){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return f=f.get(d)||null,s(c,f,""+b,M);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ze:return f=f.get(b.key===null?d:b.key)||null,o(c,f,b,M);case He:return f=f.get(b.key===null?d:b.key)||null,m(c,f,b,M);case Ie:return b=xt(b),p(f,c,d,b,M)}if(Ea(b)||Qe(b))return f=f.get(d)||null,E(c,f,b,M,null);if(typeof b.then=="function")return p(f,c,d,Zn(b),M);if(b.$$typeof===Ue)return p(f,c,d,Kn(c,b),M);Jn(c,b)}return null}function N(f,c,d,b){for(var M=null,k=null,C=c,q=c=0,Y=null;C!==null&&q<d.length;q++){C.index>q?(Y=C,C=null):Y=C.sibling;var X=h(f,C,d[q],b);if(X===null){C===null&&(C=Y);break}e&&C&&X.alternate===null&&a(f,C),c=u(X,c,q),k===null?M=X:k.sibling=X,k=X,C=Y}if(q===d.length)return t(f,C),V&&Ba(f,q),M;if(C===null){for(;q<d.length;q++)C=S(f,d[q],b),C!==null&&(c=u(C,c,q),k===null?M=C:k.sibling=C,k=C);return V&&Ba(f,q),M}for(C=l(C);q<d.length;q++)Y=p(C,f,q,d[q],b),Y!==null&&(e&&Y.alternate!==null&&C.delete(Y.key===null?q:Y.key),c=u(Y,c,q),k===null?M=Y:k.sibling=Y,k=Y);return e&&C.forEach(function(bt){return a(f,bt)}),V&&Ba(f,q),M}function _(f,c,d,b){if(d==null)throw Error(y(151));for(var M=null,k=null,C=c,q=c=0,Y=null,X=d.next();C!==null&&!X.done;q++,X=d.next()){C.index>q?(Y=C,C=null):Y=C.sibling;var bt=h(f,C,X.value,b);if(bt===null){C===null&&(C=Y);break}e&&C&&bt.alternate===null&&a(f,C),c=u(bt,c,q),k===null?M=bt:k.sibling=bt,k=bt,C=Y}if(X.done)return t(f,C),V&&Ba(f,q),M;if(C===null){for(;!X.done;q++,X=d.next())X=S(f,X.value,b),X!==null&&(c=u(X,c,q),k===null?M=X:k.sibling=X,k=X);return V&&Ba(f,q),M}for(C=l(C);!X.done;q++,X=d.next())X=p(C,f,q,X.value,b),X!==null&&(e&&X.alternate!==null&&C.delete(X.key===null?q:X.key),c=u(X,c,q),k===null?M=X:k.sibling=X,k=X);return e&&C.forEach(function(kh){return a(f,kh)}),V&&Ba(f,q),M}function ne(f,c,d,b){if(typeof d=="object"&&d!==null&&d.type===xe&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Ze:e:{for(var M=d.key;c!==null;){if(c.key===M){if(M=d.type,M===xe){if(c.tag===7){t(f,c.sibling),b=n(c,d.props.children),b.return=f,f=b;break e}}else if(c.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Ie&&xt(M)===c.type){t(f,c.sibling),b=n(c,d.props),Vl(b,d),b.return=f,f=b;break e}t(f,c);break}else a(f,c);c=c.sibling}d.type===xe?(b=Ct(d.props.children,f.mode,b,d.key),b.return=f,f=b):(b=Gn(d.type,d.key,d.props,null,f.mode,b),Vl(b,d),b.return=f,f=b)}return i(f);case He:e:{for(M=d.key;c!==null;){if(c.key===M)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){t(f,c.sibling),b=n(c,d.children||[]),b.return=f,f=b;break e}else{t(f,c);break}else a(f,c);c=c.sibling}b=vi(d,f.mode,b),b.return=f,f=b}return i(f);case Ie:return d=xt(d),ne(f,c,d,b)}if(Ea(d))return N(f,c,d,b);if(Qe(d)){if(M=Qe(d),typeof M!="function")throw Error(y(150));return d=M.call(d),_(f,c,d,b)}if(typeof d.then=="function")return ne(f,c,Zn(d),b);if(d.$$typeof===Ue)return ne(f,c,Kn(f,d),b);Jn(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,c!==null&&c.tag===6?(t(f,c.sibling),b=n(c,d),b.return=f,f=b):(t(f,c),b=Si(d,f.mode,b),b.return=f,f=b),i(f)):t(f,c)}return function(f,c,d,b){try{Kl=0;var M=ne(f,c,d,b);return ol=null,M}catch(C){if(C===sl||C===kn)throw C;var k=ea(29,C,null,f.mode);return k.lanes=b,k.return=f,k}finally{}}}var wt=Ac(!0),Oc=Ac(!1),tt=!1;function xi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bi(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function lt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function nt(e,a,t){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(J&2)!==0){var n=l.pending;return n===null?a.next=a:(a.next=n.next,n.next=a),l.pending=a,a=Qn(e),rc(e,null,t),a}return In(e,l,a,t),Qn(e)}function kl(e,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194048)!==0)){var l=a.lanes;l&=e.pendingLanes,t|=l,a.lanes=t,go(e,t)}}function wi(e,a){var t=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var n=null,u=null;if(t=t.firstBaseUpdate,t!==null){do{var i={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};u===null?n=u=i:u=u.next=i,t=t.next}while(t!==null);u===null?n=u=a:u=u.next=a}else n=u=a;t={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:u,shared:l.shared,callbacks:l.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=a:e.next=a,t.lastBaseUpdate=a}var zi=!1;function Xl(){if(zi){var e=il;if(e!==null)throw e}}function Zl(e,a,t,l){zi=!1;var n=e.updateQueue;tt=!1;var u=n.firstBaseUpdate,i=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var o=s,m=o.next;o.next=null,i===null?u=m:i.next=m,i=o;var E=e.alternate;E!==null&&(E=E.updateQueue,s=E.lastBaseUpdate,s!==i&&(s===null?E.firstBaseUpdate=m:s.next=m,E.lastBaseUpdate=o))}if(u!==null){var S=n.baseState;i=0,E=m=o=null,s=u;do{var h=s.lane&-536870913,p=h!==s.lane;if(p?(j&h)===h:(l&h)===h){h!==0&&h===ul&&(zi=!0),E!==null&&(E=E.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var N=e,_=s;h=a;var ne=t;switch(_.tag){case 1:if(N=_.payload,typeof N=="function"){S=N.call(ne,S,h);break e}S=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=_.payload,h=typeof N=="function"?N.call(ne,S,h):N,h==null)break e;S=x({},S,h);break e;case 2:tt=!0}}h=s.callback,h!==null&&(e.flags|=64,p&&(e.flags|=8192),p=n.callbacks,p===null?n.callbacks=[h]:p.push(h))}else p={lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},E===null?(m=E=p,o=S):E=E.next=p,i|=h;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;p=s,s=p.next,p.next=null,n.lastBaseUpdate=p,n.shared.pending=null}}while(!0);E===null&&(o=S),n.baseState=o,n.firstBaseUpdate=m,n.lastBaseUpdate=E,u===null&&(n.shared.lanes=0),ct|=i,e.lanes=i,e.memoizedState=S}}function Cc(e,a){if(typeof e!="function")throw Error(y(191,e));e.call(a)}function Mc(e,a){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Cc(t[e],a)}var cl=r(null),Fn=r(0);function Uc(e,a){e=Va,R(Fn,e),R(cl,a),Va=e|a.baseLanes}function Hi(){R(Fn,Va),R(cl,cl.current)}function qi(){Va=Fn.current,v(cl),v(Fn)}var aa=r(null),ha=null;function ut(e){var a=e.alternate;R(pe,pe.current&1),R(aa,e),ha===null&&(a===null||cl.current!==null||a.memoizedState!==null)&&(ha=e)}function Ii(e){R(pe,pe.current),R(aa,e),ha===null&&(ha=e)}function _c(e){e.tag===22?(R(pe,pe.current),R(aa,e),ha===null&&(ha=e)):it()}function it(){R(pe,pe.current),R(aa,aa.current)}function ta(e){v(aa),ha===e&&(ha=null),v(pe)}var pe=r(0);function Wn(e){for(var a=e;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||Vs(t)||ks(t)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Ha=0,H=null,te=null,be=null,Pn=!1,rl=!1,zt=!1,$n=0,Jl=0,fl=null,zm=0;function de(){throw Error(y(321))}function Qi(e,a){if(a===null)return!1;for(var t=0;t<a.length&&t<e.length;t++)if(!$e(e[t],a[t]))return!1;return!0}function Gi(e,a,t,l,n,u){return Ha=u,H=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,g.H=e===null||e.memoizedState===null?hr:ts,zt=!1,u=t(l,n),zt=!1,rl&&(u=xc(a,t,l,n)),Lc(e),u}function Lc(e){g.H=Pl;var a=te!==null&&te.next!==null;if(Ha=0,be=te=H=null,Pn=!1,Jl=0,fl=null,a)throw Error(y(300));e===null||Se||(e=e.dependencies,e!==null&&Yn(e)&&(Se=!0))}function xc(e,a,t,l){H=e;var n=0;do{if(rl&&(fl=null),Jl=0,rl=!1,25<=n)throw Error(y(301));if(n+=1,be=te=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}g.H=yr,u=a(t,l)}while(rl);return u}function Hm(){var e=g.H,a=e.useState()[0];return a=typeof a.then=="function"?Fl(a):a,e=e.useState()[0],(te!==null?te.memoizedState:null)!==e&&(H.flags|=1024),a}function ji(){var e=$n!==0;return $n=0,e}function Yi(e,a,t){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t}function Ki(e){if(Pn){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}Pn=!1}Ha=0,be=te=H=null,rl=!1,Jl=$n=0,fl=null}function we(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?H.memoizedState=be=e:be=be.next=e,be}function Ee(){if(te===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var a=be===null?H.memoizedState:be.next;if(a!==null)be=a,te=e;else{if(e===null)throw H.alternate===null?Error(y(467)):Error(y(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},be===null?H.memoizedState=be=e:be=be.next=e}return be}function eu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fl(e){var a=Jl;return Jl+=1,fl===null&&(fl=[]),e=Dc(fl,e,a),a=H,(be===null?a.memoizedState:be.next)===null&&(a=a.alternate,g.H=a===null||a.memoizedState===null?hr:ts),e}function au(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Fl(e);if(e.$$typeof===Ue)return Oe(e)}throw Error(y(438,String(e)))}function Vi(e){var a=null,t=H.updateQueue;if(t!==null&&(a=t.memoCache),a==null){var l=H.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(n){return n.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),t===null&&(t=eu(),H.updateQueue=t),t.memoCache=a,t=a.data[a.index],t===void 0)for(t=a.data[a.index]=Array(e),l=0;l<e;l++)t[l]=Qt;return a.index++,t}function qa(e,a){return typeof a=="function"?a(e):a}function tu(e){var a=Ee();return ki(a,te,e)}function ki(e,a,t){var l=e.queue;if(l===null)throw Error(y(311));l.lastRenderedReducer=t;var n=e.baseQueue,u=l.pending;if(u!==null){if(n!==null){var i=n.next;n.next=u.next,u.next=i}a.baseQueue=n=u,l.pending=null}if(u=e.baseState,n===null)e.memoizedState=u;else{a=n.next;var s=i=null,o=null,m=a,E=!1;do{var S=m.lane&-536870913;if(S!==m.lane?(j&S)===S:(Ha&S)===S){var h=m.revertLane;if(h===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),S===ul&&(E=!0);else if((Ha&h)===h){m=m.next,h===ul&&(E=!0);continue}else S={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},o===null?(s=o=S,i=u):o=o.next=S,H.lanes|=h,ct|=h;S=m.action,zt&&t(u,S),u=m.hasEagerState?m.eagerState:t(u,S)}else h={lane:S,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},o===null?(s=o=h,i=u):o=o.next=h,H.lanes|=S,ct|=S;m=m.next}while(m!==null&&m!==a);if(o===null?i=u:o.next=s,!$e(u,e.memoizedState)&&(Se=!0,E&&(t=il,t!==null)))throw t;e.memoizedState=u,e.baseState=i,e.baseQueue=o,l.lastRenderedState=u}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Xi(e){var a=Ee(),t=a.queue;if(t===null)throw Error(y(311));t.lastRenderedReducer=e;var l=t.dispatch,n=t.pending,u=a.memoizedState;if(n!==null){t.pending=null;var i=n=n.next;do u=e(u,i.action),i=i.next;while(i!==n);$e(u,a.memoizedState)||(Se=!0),a.memoizedState=u,a.baseQueue===null&&(a.baseState=u),t.lastRenderedState=u}return[u,l]}function Bc(e,a,t){var l=H,n=Ee(),u=V;if(u){if(t===void 0)throw Error(y(407));t=t()}else t=a();var i=!$e((te||n).memoizedState,t);if(i&&(n.memoizedState=t,Se=!0),n=n.queue,Fi(Hc.bind(null,l,n,e),[e]),n.getSnapshot!==a||i||be!==null&&be.memoizedState.tag&1){if(l.flags|=2048,dl(9,{destroy:void 0},zc.bind(null,l,n,t,a),null),ie===null)throw Error(y(349));u||(Ha&127)!==0||wc(l,a,t)}return t}function wc(e,a,t){e.flags|=16384,e={getSnapshot:a,value:t},a=H.updateQueue,a===null?(a=eu(),H.updateQueue=a,a.stores=[e]):(t=a.stores,t===null?a.stores=[e]:t.push(e))}function zc(e,a,t,l){a.value=t,a.getSnapshot=l,qc(a)&&Ic(e)}function Hc(e,a,t){return t(function(){qc(a)&&Ic(e)})}function qc(e){var a=e.getSnapshot;e=e.value;try{var t=a();return!$e(e,t)}catch{return!0}}function Ic(e){var a=Ot(e,2);a!==null&&Xe(a,e,2)}function Zi(e){var a=we();if(typeof e=="function"){var t=e;if(e=t(),zt){Ja(!0);try{t()}finally{Ja(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:e},a}function Qc(e,a,t,l){return e.baseState=t,ki(e,te,typeof l=="function"?l:qa)}function qm(e,a,t,l,n){if(uu(e))throw Error(y(485));if(e=a.action,e!==null){var u={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};g.T!==null?t(!0):u.isTransition=!1,l(u),t=a.pending,t===null?(u.next=a.pending=u,Gc(a,u)):(u.next=t.next,a.pending=t.next=u)}}function Gc(e,a){var t=a.action,l=a.payload,n=e.state;if(a.isTransition){var u=g.T,i={};g.T=i;try{var s=t(n,l),o=g.S;o!==null&&o(i,s),jc(e,a,s)}catch(m){Ji(e,a,m)}finally{u!==null&&i.types!==null&&(u.types=i.types),g.T=u}}else try{u=t(n,l),jc(e,a,u)}catch(m){Ji(e,a,m)}}function jc(e,a,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(l){Yc(e,a,l)},function(l){return Ji(e,a,l)}):Yc(e,a,t)}function Yc(e,a,t){a.status="fulfilled",a.value=t,Kc(a),e.state=t,a=e.pending,a!==null&&(t=a.next,t===a?e.pending=null:(t=t.next,a.next=t,Gc(e,t)))}function Ji(e,a,t){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=t,Kc(a),a=a.next;while(a!==l)}e.action=null}function Kc(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function Vc(e,a){return a}function kc(e,a){if(V){var t=ie.formState;if(t!==null){e:{var l=H;if(V){if(se){a:{for(var n=se,u=ma;n.nodeType!==8;){if(!u){n=null;break a}if(n=ya(n.nextSibling),n===null){n=null;break a}}u=n.data,n=u==="F!"||u==="F"?n:null}if(n){se=ya(n.nextSibling),l=n.data==="F!";break e}}et(l)}l=!1}l&&(a=t[0])}}return t=we(),t.memoizedState=t.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vc,lastRenderedState:a},t.queue=l,t=fr.bind(null,H,l),l.dispatch=t,l=Zi(!1),u=as.bind(null,H,!1,l.queue),l=we(),n={state:a,dispatch:null,action:e,pending:null},l.queue=n,t=qm.bind(null,H,n,u,t),n.dispatch=t,l.memoizedState=e,[a,t,!1]}function Xc(e){var a=Ee();return Zc(a,te,e)}function Zc(e,a,t){if(a=ki(e,a,Vc)[0],e=tu(qa)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=Fl(a)}catch(i){throw i===sl?kn:i}else l=a;a=Ee();var n=a.queue,u=n.dispatch;return t!==a.memoizedState&&(H.flags|=2048,dl(9,{destroy:void 0},Im.bind(null,n,t),null)),[l,u,e]}function Im(e,a){e.action=a}function Jc(e){var a=Ee(),t=te;if(t!==null)return Zc(a,t,e);Ee(),a=a.memoizedState,t=Ee();var l=t.queue.dispatch;return t.memoizedState=e,[a,l,!1]}function dl(e,a,t,l){return e={tag:e,create:t,deps:l,inst:a,next:null},a=H.updateQueue,a===null&&(a=eu(),H.updateQueue=a),t=a.lastEffect,t===null?a.lastEffect=e.next=e:(l=t.next,t.next=e,e.next=l,a.lastEffect=e),e}function Fc(){return Ee().memoizedState}function lu(e,a,t,l){var n=we();H.flags|=e,n.memoizedState=dl(1|a,{destroy:void 0},t,l===void 0?null:l)}function nu(e,a,t,l){var n=Ee();l=l===void 0?null:l;var u=n.memoizedState.inst;te!==null&&l!==null&&Qi(l,te.memoizedState.deps)?n.memoizedState=dl(a,u,t,l):(H.flags|=e,n.memoizedState=dl(1|a,u,t,l))}function Wc(e,a){lu(8390656,8,e,a)}function Fi(e,a){nu(2048,8,e,a)}function Qm(e){H.flags|=4;var a=H.updateQueue;if(a===null)a=eu(),H.updateQueue=a,a.events=[e];else{var t=a.events;t===null?a.events=[e]:t.push(e)}}function Pc(e){var a=Ee().memoizedState;return Qm({ref:a,nextImpl:e}),function(){if((J&2)!==0)throw Error(y(440));return a.impl.apply(void 0,arguments)}}function $c(e,a){return nu(4,2,e,a)}function er(e,a){return nu(4,4,e,a)}function ar(e,a){if(typeof a=="function"){e=e();var t=a(e);return function(){typeof t=="function"?t():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function tr(e,a,t){t=t!=null?t.concat([e]):null,nu(4,4,ar.bind(null,a,e),t)}function Wi(){}function lr(e,a){var t=Ee();a=a===void 0?null:a;var l=t.memoizedState;return a!==null&&Qi(a,l[1])?l[0]:(t.memoizedState=[e,a],e)}function nr(e,a){var t=Ee();a=a===void 0?null:a;var l=t.memoizedState;if(a!==null&&Qi(a,l[1]))return l[0];if(l=e(),zt){Ja(!0);try{e()}finally{Ja(!1)}}return t.memoizedState=[l,a],l}function Pi(e,a,t){return t===void 0||(Ha&1073741824)!==0&&(j&261930)===0?e.memoizedState=a:(e.memoizedState=t,e=uf(),H.lanes|=e,ct|=e,t)}function ur(e,a,t,l){return $e(t,a)?t:cl.current!==null?(e=Pi(e,t,l),$e(e,a)||(Se=!0),e):(Ha&42)===0||(Ha&1073741824)!==0&&(j&261930)===0?(Se=!0,e.memoizedState=t):(e=uf(),H.lanes|=e,ct|=e,a)}function ir(e,a,t,l,n){var u=D.p;D.p=u!==0&&8>u?u:8;var i=g.T,s={};g.T=s,as(e,!1,a,t);try{var o=n(),m=g.S;if(m!==null&&m(s,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var E=wm(o,l);Wl(e,a,E,ua(e))}else Wl(e,a,l,ua(e))}catch(S){Wl(e,a,{then:function(){},status:"rejected",reason:S},ua())}finally{D.p=u,i!==null&&s.types!==null&&(i.types=s.types),g.T=i}}function Gm(){}function $i(e,a,t,l){if(e.tag!==5)throw Error(y(476));var n=sr(e).queue;ir(e,n,a,B,t===null?Gm:function(){return or(e),t(l)})}function sr(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:B,baseState:B,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:B},next:null};var t={};return a.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:t},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function or(e){var a=sr(e);a.next===null&&(a=e.alternate.memoizedState),Wl(e,a.next.queue,{},ua())}function es(){return Oe(yn)}function cr(){return Ee().memoizedState}function rr(){return Ee().memoizedState}function jm(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var t=ua();e=lt(t);var l=nt(a,e,t);l!==null&&(Xe(l,a,t),kl(l,a,t)),a={cache:Mi()},e.payload=a;return}a=a.return}}function Ym(e,a,t){var l=ua();t={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},uu(e)?dr(a,t):(t=gi(e,a,t,l),t!==null&&(Xe(t,e,l),mr(t,a,l)))}function fr(e,a,t){var l=ua();Wl(e,a,t,l)}function Wl(e,a,t,l){var n={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(uu(e))dr(a,n);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=a.lastRenderedReducer,u!==null))try{var i=a.lastRenderedState,s=u(i,t);if(n.hasEagerState=!0,n.eagerState=s,$e(s,i))return In(e,a,n,0),ie===null&&qn(),!1}catch{}finally{}if(t=gi(e,a,n,l),t!==null)return Xe(t,e,l),mr(t,a,l),!0}return!1}function as(e,a,t,l){if(l={lane:2,revertLane:xs(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},uu(e)){if(a)throw Error(y(479))}else a=gi(e,t,l,2),a!==null&&Xe(a,e,2)}function uu(e){var a=e.alternate;return e===H||a!==null&&a===H}function dr(e,a){rl=Pn=!0;var t=e.pending;t===null?a.next=a:(a.next=t.next,t.next=a),e.pending=a}function mr(e,a,t){if((t&4194048)!==0){var l=a.lanes;l&=e.pendingLanes,t|=l,a.lanes=t,go(e,t)}}var Pl={readContext:Oe,use:au,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useLayoutEffect:de,useInsertionEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useSyncExternalStore:de,useId:de,useHostTransitionStatus:de,useFormState:de,useActionState:de,useOptimistic:de,useMemoCache:de,useCacheRefresh:de};Pl.useEffectEvent=de;var hr={readContext:Oe,use:au,useCallback:function(e,a){return we().memoizedState=[e,a===void 0?null:a],e},useContext:Oe,useEffect:Wc,useImperativeHandle:function(e,a,t){t=t!=null?t.concat([e]):null,lu(4194308,4,ar.bind(null,a,e),t)},useLayoutEffect:function(e,a){return lu(4194308,4,e,a)},useInsertionEffect:function(e,a){lu(4,2,e,a)},useMemo:function(e,a){var t=we();a=a===void 0?null:a;var l=e();if(zt){Ja(!0);try{e()}finally{Ja(!1)}}return t.memoizedState=[l,a],l},useReducer:function(e,a,t){var l=we();if(t!==void 0){var n=t(a);if(zt){Ja(!0);try{t(a)}finally{Ja(!1)}}}else n=a;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Ym.bind(null,H,e),[l.memoizedState,e]},useRef:function(e){var a=we();return e={current:e},a.memoizedState=e},useState:function(e){e=Zi(e);var a=e.queue,t=fr.bind(null,H,a);return a.dispatch=t,[e.memoizedState,t]},useDebugValue:Wi,useDeferredValue:function(e,a){var t=we();return Pi(t,e,a)},useTransition:function(){var e=Zi(!1);return e=ir.bind(null,H,e.queue,!0,!1),we().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,t){var l=H,n=we();if(V){if(t===void 0)throw Error(y(407));t=t()}else{if(t=a(),ie===null)throw Error(y(349));(j&127)!==0||wc(l,a,t)}n.memoizedState=t;var u={value:t,getSnapshot:a};return n.queue=u,Wc(Hc.bind(null,l,u,e),[e]),l.flags|=2048,dl(9,{destroy:void 0},zc.bind(null,l,u,t,a),null),t},useId:function(){var e=we(),a=ie.identifierPrefix;if(V){var t=Na,l=Ra;t=(l&~(1<<32-Pe(l)-1)).toString(32)+t,a="_"+a+"R_"+t,t=$n++,0<t&&(a+="H"+t.toString(32)),a+="_"}else t=zm++,a="_"+a+"r_"+t.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:es,useFormState:kc,useActionState:kc,useOptimistic:function(e){var a=we();a.memoizedState=a.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=t,a=as.bind(null,H,!0,t),t.dispatch=a,[e,a]},useMemoCache:Vi,useCacheRefresh:function(){return we().memoizedState=jm.bind(null,H)},useEffectEvent:function(e){var a=we(),t={impl:e};return a.memoizedState=t,function(){if((J&2)!==0)throw Error(y(440));return t.impl.apply(void 0,arguments)}}},ts={readContext:Oe,use:au,useCallback:lr,useContext:Oe,useEffect:Fi,useImperativeHandle:tr,useInsertionEffect:$c,useLayoutEffect:er,useMemo:nr,useReducer:tu,useRef:Fc,useState:function(){return tu(qa)},useDebugValue:Wi,useDeferredValue:function(e,a){var t=Ee();return ur(t,te.memoizedState,e,a)},useTransition:function(){var e=tu(qa)[0],a=Ee().memoizedState;return[typeof e=="boolean"?e:Fl(e),a]},useSyncExternalStore:Bc,useId:cr,useHostTransitionStatus:es,useFormState:Xc,useActionState:Xc,useOptimistic:function(e,a){var t=Ee();return Qc(t,te,e,a)},useMemoCache:Vi,useCacheRefresh:rr};ts.useEffectEvent=Pc;var yr={readContext:Oe,use:au,useCallback:lr,useContext:Oe,useEffect:Fi,useImperativeHandle:tr,useInsertionEffect:$c,useLayoutEffect:er,useMemo:nr,useReducer:Xi,useRef:Fc,useState:function(){return Xi(qa)},useDebugValue:Wi,useDeferredValue:function(e,a){var t=Ee();return te===null?Pi(t,e,a):ur(t,te.memoizedState,e,a)},useTransition:function(){var e=Xi(qa)[0],a=Ee().memoizedState;return[typeof e=="boolean"?e:Fl(e),a]},useSyncExternalStore:Bc,useId:cr,useHostTransitionStatus:es,useFormState:Jc,useActionState:Jc,useOptimistic:function(e,a){var t=Ee();return te!==null?Qc(t,te,e,a):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Vi,useCacheRefresh:rr};yr.useEffectEvent=Pc;function ls(e,a,t,l){a=e.memoizedState,t=t(l,a),t=t==null?a:x({},a,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ns={enqueueSetState:function(e,a,t){e=e._reactInternals;var l=ua(),n=lt(l);n.payload=a,t!=null&&(n.callback=t),a=nt(e,n,l),a!==null&&(Xe(a,e,l),kl(a,e,l))},enqueueReplaceState:function(e,a,t){e=e._reactInternals;var l=ua(),n=lt(l);n.tag=1,n.payload=a,t!=null&&(n.callback=t),a=nt(e,n,l),a!==null&&(Xe(a,e,l),kl(a,e,l))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var t=ua(),l=lt(t);l.tag=2,a!=null&&(l.callback=a),a=nt(e,l,t),a!==null&&(Xe(a,e,t),kl(a,e,t))}};function pr(e,a,t,l,n,u,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,u,i):a.prototype&&a.prototype.isPureReactComponent?!ql(t,l)||!ql(n,u):!0}function Er(e,a,t,l){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,l),a.state!==e&&ns.enqueueReplaceState(a,a.state,null)}function Ht(e,a){var t=a;if("ref"in a){t={};for(var l in a)l!=="ref"&&(t[l]=a[l])}if(e=e.defaultProps){t===a&&(t=x({},t));for(var n in e)t[n]===void 0&&(t[n]=e[n])}return t}function gr(e){Hn(e)}function br(e){console.error(e)}function Sr(e){Hn(e)}function iu(e,a){try{var t=e.onUncaughtError;t(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function vr(e,a,t){try{var l=e.onCaughtError;l(t.value,{componentStack:t.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function us(e,a,t){return t=lt(t),t.tag=3,t.payload={element:null},t.callback=function(){iu(e,a)},t}function Tr(e){return e=lt(e),e.tag=3,e}function Dr(e,a,t,l){var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var u=l.value;e.payload=function(){return n(u)},e.callback=function(){vr(a,t,l)}}var i=t.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){vr(a,t,l),typeof n!="function"&&(rt===null?rt=new Set([this]):rt.add(this));var s=l.stack;this.componentDidCatch(l.value,{componentStack:s!==null?s:""})})}function Km(e,a,t,l,n){if(t.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=t.alternate,a!==null&&nl(a,t,n,!0),t=aa.current,t!==null){switch(t.tag){case 31:case 13:return ha===null?gu():t.alternate===null&&me===0&&(me=3),t.flags&=-257,t.flags|=65536,t.lanes=n,l===Xn?t.flags|=16384:(a=t.updateQueue,a===null?t.updateQueue=new Set([l]):a.add(l),Us(e,l,n)),!1;case 22:return t.flags|=65536,l===Xn?t.flags|=16384:(a=t.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},t.updateQueue=a):(t=a.retryQueue,t===null?a.retryQueue=new Set([l]):t.add(l)),Us(e,l,n)),!1}throw Error(y(435,t.tag))}return Us(e,l,n),gu(),!1}if(V)return a=aa.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=n,l!==Ri&&(e=Error(y(422),{cause:l}),Gl(ra(e,t)))):(l!==Ri&&(a=Error(y(423),{cause:l}),Gl(ra(a,t))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=ra(l,t),n=us(e.stateNode,l,n),wi(e,n),me!==4&&(me=2)),!1;var u=Error(y(520),{cause:l});if(u=ra(u,t),sn===null?sn=[u]:sn.push(u),me!==4&&(me=2),a===null)return!0;l=ra(l,t),t=a;do{switch(t.tag){case 3:return t.flags|=65536,e=n&-n,t.lanes|=e,e=us(t.stateNode,l,e),wi(t,e),!1;case 1:if(a=t.type,u=t.stateNode,(t.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(rt===null||!rt.has(u))))return t.flags|=65536,n&=-n,t.lanes|=n,n=Tr(n),Dr(n,e,t,l),wi(t,n),!1}t=t.return}while(t!==null);return!1}var is=Error(y(461)),Se=!1;function Ce(e,a,t,l){a.child=e===null?Oc(a,null,t,l):wt(a,e.child,t,l)}function Rr(e,a,t,l,n){t=t.render;var u=a.ref;if("ref"in l){var i={};for(var s in l)s!=="ref"&&(i[s]=l[s])}else i=l;return _t(a),l=Gi(e,a,t,i,u,n),s=ji(),e!==null&&!Se?(Yi(e,a,n),Ia(e,a,n)):(V&&s&&Ti(a),a.flags|=1,Ce(e,a,l,n),a.child)}function Nr(e,a,t,l,n){if(e===null){var u=t.type;return typeof u=="function"&&!bi(u)&&u.defaultProps===void 0&&t.compare===null?(a.tag=15,a.type=u,Ar(e,a,u,l,n)):(e=Gn(t.type,null,l,a,a.mode,n),e.ref=a.ref,e.return=a,a.child=e)}if(u=e.child,!hs(e,n)){var i=u.memoizedProps;if(t=t.compare,t=t!==null?t:ql,t(i,l)&&e.ref===a.ref)return Ia(e,a,n)}return a.flags|=1,e=xa(u,l),e.ref=a.ref,e.return=a,a.child=e}function Ar(e,a,t,l,n){if(e!==null){var u=e.memoizedProps;if(ql(u,l)&&e.ref===a.ref)if(Se=!1,a.pendingProps=l=u,hs(e,n))(e.flags&131072)!==0&&(Se=!0);else return a.lanes=e.lanes,Ia(e,a,n)}return ss(e,a,t,l,n)}function Or(e,a,t,l){var n=l.children,u=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((a.flags&128)!==0){if(u=u!==null?u.baseLanes|t:t,e!==null){for(l=a.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~u}else l=0,a.child=null;return Cr(e,a,u,t,l)}if((t&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&Vn(a,u!==null?u.cachePool:null),u!==null?Uc(a,u):Hi(),_c(a);else return l=a.lanes=536870912,Cr(e,a,u!==null?u.baseLanes|t:t,t,l)}else u!==null?(Vn(a,u.cachePool),Uc(a,u),it(),a.memoizedState=null):(e!==null&&Vn(a,null),Hi(),it());return Ce(e,a,n,t),a.child}function $l(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Cr(e,a,t,l,n){var u=_i();return u=u===null?null:{parent:ge._currentValue,pool:u},a.memoizedState={baseLanes:t,cachePool:u},e!==null&&Vn(a,null),Hi(),_c(a),e!==null&&nl(e,a,l,!0),a.childLanes=n,null}function su(e,a){return a=cu({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function Mr(e,a,t){return wt(a,e.child,null,t),e=su(a,a.pendingProps),e.flags|=2,ta(a),a.memoizedState=null,e}function Vm(e,a,t){var l=a.pendingProps,n=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(V){if(l.mode==="hidden")return e=su(a,l),a.lanes=536870912,$l(null,e);if(Ii(a),(e=se)?(e=jf(e,ma),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Pa!==null?{id:Ra,overflow:Na}:null,retryLane:536870912,hydrationErrors:null},t=dc(e),t.return=a,a.child=t,Ae=a,se=null)):e=null,e===null)throw et(a);return a.lanes=536870912,null}return su(a,l)}var u=e.memoizedState;if(u!==null){var i=u.dehydrated;if(Ii(a),n)if(a.flags&256)a.flags&=-257,a=Mr(e,a,t);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(y(558));else if(Se||nl(e,a,t,!1),n=(t&e.childLanes)!==0,Se||n){if(l=ie,l!==null&&(i=bo(l,t),i!==0&&i!==u.retryLane))throw u.retryLane=i,Ot(e,i),Xe(l,e,i),is;gu(),a=Mr(e,a,t)}else e=u.treeContext,se=ya(i.nextSibling),Ae=a,V=!0,$a=null,ma=!1,e!==null&&yc(a,e),a=su(a,l),a.flags|=4096;return a}return e=xa(e.child,{mode:l.mode,children:l.children}),e.ref=a.ref,a.child=e,e.return=a,e}function ou(e,a){var t=a.ref;if(t===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(y(284));(e===null||e.ref!==t)&&(a.flags|=4194816)}}function ss(e,a,t,l,n){return _t(a),t=Gi(e,a,t,l,void 0,n),l=ji(),e!==null&&!Se?(Yi(e,a,n),Ia(e,a,n)):(V&&l&&Ti(a),a.flags|=1,Ce(e,a,t,n),a.child)}function Ur(e,a,t,l,n,u){return _t(a),a.updateQueue=null,t=xc(a,l,t,n),Lc(e),l=ji(),e!==null&&!Se?(Yi(e,a,u),Ia(e,a,u)):(V&&l&&Ti(a),a.flags|=1,Ce(e,a,t,u),a.child)}function _r(e,a,t,l,n){if(_t(a),a.stateNode===null){var u=el,i=t.contextType;typeof i=="object"&&i!==null&&(u=Oe(i)),u=new t(l,u),a.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=ns,a.stateNode=u,u._reactInternals=a,u=a.stateNode,u.props=l,u.state=a.memoizedState,u.refs={},xi(a),i=t.contextType,u.context=typeof i=="object"&&i!==null?Oe(i):el,u.state=a.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ls(a,t,i,l),u.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&ns.enqueueReplaceState(u,u.state,null),Zl(a,l,u,n),Xl(),u.state=a.memoizedState),typeof u.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(e===null){u=a.stateNode;var s=a.memoizedProps,o=Ht(t,s);u.props=o;var m=u.context,E=t.contextType;i=el,typeof E=="object"&&E!==null&&(i=Oe(E));var S=t.getDerivedStateFromProps;E=typeof S=="function"||typeof u.getSnapshotBeforeUpdate=="function",s=a.pendingProps!==s,E||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(s||m!==i)&&Er(a,u,l,i),tt=!1;var h=a.memoizedState;u.state=h,Zl(a,l,u,n),Xl(),m=a.memoizedState,s||h!==m||tt?(typeof S=="function"&&(ls(a,t,S,l),m=a.memoizedState),(o=tt||pr(a,t,o,l,h,m,i))?(E||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(a.flags|=4194308)):(typeof u.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=m),u.props=l,u.state=m,u.context=i,l=o):(typeof u.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{u=a.stateNode,Bi(e,a),i=a.memoizedProps,E=Ht(t,i),u.props=E,S=a.pendingProps,h=u.context,m=t.contextType,o=el,typeof m=="object"&&m!==null&&(o=Oe(m)),s=t.getDerivedStateFromProps,(m=typeof s=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==S||h!==o)&&Er(a,u,l,o),tt=!1,h=a.memoizedState,u.state=h,Zl(a,l,u,n),Xl();var p=a.memoizedState;i!==S||h!==p||tt||e!==null&&e.dependencies!==null&&Yn(e.dependencies)?(typeof s=="function"&&(ls(a,t,s,l),p=a.memoizedState),(E=tt||pr(a,t,E,l,h,p,o)||e!==null&&e.dependencies!==null&&Yn(e.dependencies))?(m||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(l,p,o),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(l,p,o)),typeof u.componentDidUpdate=="function"&&(a.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(a.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=p),u.props=l,u.state=p,u.context=o,l=E):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(a.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(a.flags|=1024),l=!1)}return u=l,ou(e,a),l=(a.flags&128)!==0,u||l?(u=a.stateNode,t=l&&typeof t.getDerivedStateFromError!="function"?null:u.render(),a.flags|=1,e!==null&&l?(a.child=wt(a,e.child,null,n),a.child=wt(a,null,t,n)):Ce(e,a,t,n),a.memoizedState=u.state,e=a.child):e=Ia(e,a,n),e}function Lr(e,a,t,l){return Mt(),a.flags|=256,Ce(e,a,t,l),a.child}var os={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cs(e){return{baseLanes:e,cachePool:vc()}}function rs(e,a,t){return e=e!==null?e.childLanes&~t:0,a&&(e|=na),e}function xr(e,a,t){var l=a.pendingProps,n=!1,u=(a.flags&128)!==0,i;if((i=u)||(i=e!==null&&e.memoizedState===null?!1:(pe.current&2)!==0),i&&(n=!0,a.flags&=-129),i=(a.flags&32)!==0,a.flags&=-33,e===null){if(V){if(n?ut(a):it(),(e=se)?(e=jf(e,ma),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Pa!==null?{id:Ra,overflow:Na}:null,retryLane:536870912,hydrationErrors:null},t=dc(e),t.return=a,a.child=t,Ae=a,se=null)):e=null,e===null)throw et(a);return ks(e)?a.lanes=32:a.lanes=536870912,null}var s=l.children;return l=l.fallback,n?(it(),n=a.mode,s=cu({mode:"hidden",children:s},n),l=Ct(l,n,t,null),s.return=a,l.return=a,s.sibling=l,a.child=s,l=a.child,l.memoizedState=cs(t),l.childLanes=rs(e,i,t),a.memoizedState=os,$l(null,l)):(ut(a),fs(a,s))}var o=e.memoizedState;if(o!==null&&(s=o.dehydrated,s!==null)){if(u)a.flags&256?(ut(a),a.flags&=-257,a=ds(e,a,t)):a.memoizedState!==null?(it(),a.child=e.child,a.flags|=128,a=null):(it(),s=l.fallback,n=a.mode,l=cu({mode:"visible",children:l.children},n),s=Ct(s,n,t,null),s.flags|=2,l.return=a,s.return=a,l.sibling=s,a.child=l,wt(a,e.child,null,t),l=a.child,l.memoizedState=cs(t),l.childLanes=rs(e,i,t),a.memoizedState=os,a=$l(null,l));else if(ut(a),ks(s)){if(i=s.nextSibling&&s.nextSibling.dataset,i)var m=i.dgst;i=m,l=Error(y(419)),l.stack="",l.digest=i,Gl({value:l,source:null,stack:null}),a=ds(e,a,t)}else if(Se||nl(e,a,t,!1),i=(t&e.childLanes)!==0,Se||i){if(i=ie,i!==null&&(l=bo(i,t),l!==0&&l!==o.retryLane))throw o.retryLane=l,Ot(e,l),Xe(i,e,l),is;Vs(s)||gu(),a=ds(e,a,t)}else Vs(s)?(a.flags|=192,a.child=e.child,a=null):(e=o.treeContext,se=ya(s.nextSibling),Ae=a,V=!0,$a=null,ma=!1,e!==null&&yc(a,e),a=fs(a,l.children),a.flags|=4096);return a}return n?(it(),s=l.fallback,n=a.mode,o=e.child,m=o.sibling,l=xa(o,{mode:"hidden",children:l.children}),l.subtreeFlags=o.subtreeFlags&65011712,m!==null?s=xa(m,s):(s=Ct(s,n,t,null),s.flags|=2),s.return=a,l.return=a,l.sibling=s,a.child=l,$l(null,l),l=a.child,s=e.child.memoizedState,s===null?s=cs(t):(n=s.cachePool,n!==null?(o=ge._currentValue,n=n.parent!==o?{parent:o,pool:o}:n):n=vc(),s={baseLanes:s.baseLanes|t,cachePool:n}),l.memoizedState=s,l.childLanes=rs(e,i,t),a.memoizedState=os,$l(e.child,l)):(ut(a),t=e.child,e=t.sibling,t=xa(t,{mode:"visible",children:l.children}),t.return=a,t.sibling=null,e!==null&&(i=a.deletions,i===null?(a.deletions=[e],a.flags|=16):i.push(e)),a.child=t,a.memoizedState=null,t)}function fs(e,a){return a=cu({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function cu(e,a){return e=ea(22,e,null,a),e.lanes=0,e}function ds(e,a,t){return wt(a,e.child,null,t),e=fs(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Br(e,a,t){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a),Oi(e.return,a,t)}function ms(e,a,t,l,n,u){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:n,treeForkCount:u}:(i.isBackwards=a,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=t,i.tailMode=n,i.treeForkCount=u)}function wr(e,a,t){var l=a.pendingProps,n=l.revealOrder,u=l.tail;l=l.children;var i=pe.current,s=(i&2)!==0;if(s?(i=i&1|2,a.flags|=128):i&=1,R(pe,i),Ce(e,a,l,t),l=V?Ql:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Br(e,t,a);else if(e.tag===19)Br(e,t,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(t=a.child,n=null;t!==null;)e=t.alternate,e!==null&&Wn(e)===null&&(n=t),t=t.sibling;t=n,t===null?(n=a.child,a.child=null):(n=t.sibling,t.sibling=null),ms(a,!1,n,t,u,l);break;case"backwards":case"unstable_legacy-backwards":for(t=null,n=a.child,a.child=null;n!==null;){if(e=n.alternate,e!==null&&Wn(e)===null){a.child=n;break}e=n.sibling,n.sibling=t,t=n,n=e}ms(a,!0,t,null,u,l);break;case"together":ms(a,!1,null,null,void 0,l);break;default:a.memoizedState=null}return a.child}function Ia(e,a,t){if(e!==null&&(a.dependencies=e.dependencies),ct|=a.lanes,(t&a.childLanes)===0)if(e!==null){if(nl(e,a,t,!1),(t&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(y(153));if(a.child!==null){for(e=a.child,t=xa(e,e.pendingProps),a.child=t,t.return=a;e.sibling!==null;)e=e.sibling,t=t.sibling=xa(e,e.pendingProps),t.return=a;t.sibling=null}return a.child}function hs(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&Yn(e)))}function km(e,a,t){switch(a.tag){case 3:Be(a,a.stateNode.containerInfo),at(a,ge,e.memoizedState.cache),Mt();break;case 27:case 5:Nl(a);break;case 4:Be(a,a.stateNode.containerInfo);break;case 10:at(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Ii(a),null;break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(ut(a),a.flags|=128,null):(t&a.child.childLanes)!==0?xr(e,a,t):(ut(a),e=Ia(e,a,t),e!==null?e.sibling:null);ut(a);break;case 19:var n=(e.flags&128)!==0;if(l=(t&a.childLanes)!==0,l||(nl(e,a,t,!1),l=(t&a.childLanes)!==0),n){if(l)return wr(e,a,t);a.flags|=128}if(n=a.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),R(pe,pe.current),l)break;return null;case 22:return a.lanes=0,Or(e,a,t,a.pendingProps);case 24:at(a,ge,e.memoizedState.cache)}return Ia(e,a,t)}function zr(e,a,t){if(e!==null)if(e.memoizedProps!==a.pendingProps)Se=!0;else{if(!hs(e,t)&&(a.flags&128)===0)return Se=!1,km(e,a,t);Se=(e.flags&131072)!==0}else Se=!1,V&&(a.flags&1048576)!==0&&hc(a,Ql,a.index);switch(a.lanes=0,a.tag){case 16:e:{var l=a.pendingProps;if(e=xt(a.elementType),a.type=e,typeof e=="function")bi(e)?(l=Ht(e,l),a.tag=1,a=_r(null,a,e,l,t)):(a.tag=0,a=ss(null,a,e,l,t));else{if(e!=null){var n=e.$$typeof;if(n===ia){a.tag=11,a=Rr(null,a,e,l,t);break e}else if(n===K){a.tag=14,a=Nr(null,a,e,l,t);break e}}throw a=Ma(e)||e,Error(y(306,a,""))}}return a;case 0:return ss(e,a,a.type,a.pendingProps,t);case 1:return l=a.type,n=Ht(l,a.pendingProps),_r(e,a,l,n,t);case 3:e:{if(Be(a,a.stateNode.containerInfo),e===null)throw Error(y(387));l=a.pendingProps;var u=a.memoizedState;n=u.element,Bi(e,a),Zl(a,l,null,t);var i=a.memoizedState;if(l=i.cache,at(a,ge,l),l!==u.cache&&Ci(a,[ge],t,!0),Xl(),l=i.element,u.isDehydrated)if(u={element:l,isDehydrated:!1,cache:i.cache},a.updateQueue.baseState=u,a.memoizedState=u,a.flags&256){a=Lr(e,a,l,t);break e}else if(l!==n){n=ra(Error(y(424)),a),Gl(n),a=Lr(e,a,l,t);break e}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(se=ya(e.firstChild),Ae=a,V=!0,$a=null,ma=!0,t=Oc(a,null,l,t),a.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(Mt(),l===n){a=Ia(e,a,t);break e}Ce(e,a,l,t)}a=a.child}return a;case 26:return ou(e,a),e===null?(t=Zf(a.type,null,a.pendingProps,null))?a.memoizedState=t:V||(t=a.type,e=a.pendingProps,l=Nu(I.current).createElement(t),l[Ne]=a,l[Ge]=e,Me(l,t,e),De(l),a.stateNode=l):a.memoizedState=Zf(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Nl(a),e===null&&V&&(l=a.stateNode=Vf(a.type,a.pendingProps,I.current),Ae=a,ma=!0,n=se,ht(a.type)?(Xs=n,se=ya(l.firstChild)):se=n),Ce(e,a,a.pendingProps.children,t),ou(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&V&&((n=l=se)&&(l=Th(l,a.type,a.pendingProps,ma),l!==null?(a.stateNode=l,Ae=a,se=ya(l.firstChild),ma=!1,n=!0):n=!1),n||et(a)),Nl(a),n=a.type,u=a.pendingProps,i=e!==null?e.memoizedProps:null,l=u.children,js(n,u)?l=null:i!==null&&js(n,i)&&(a.flags|=32),a.memoizedState!==null&&(n=Gi(e,a,Hm,null,null,t),yn._currentValue=n),ou(e,a),Ce(e,a,l,t),a.child;case 6:return e===null&&V&&((e=t=se)&&(t=Dh(t,a.pendingProps,ma),t!==null?(a.stateNode=t,Ae=a,se=null,e=!0):e=!1),e||et(a)),null;case 13:return xr(e,a,t);case 4:return Be(a,a.stateNode.containerInfo),l=a.pendingProps,e===null?a.child=wt(a,null,l,t):Ce(e,a,l,t),a.child;case 11:return Rr(e,a,a.type,a.pendingProps,t);case 7:return Ce(e,a,a.pendingProps,t),a.child;case 8:return Ce(e,a,a.pendingProps.children,t),a.child;case 12:return Ce(e,a,a.pendingProps.children,t),a.child;case 10:return l=a.pendingProps,at(a,a.type,l.value),Ce(e,a,l.children,t),a.child;case 9:return n=a.type._context,l=a.pendingProps.children,_t(a),n=Oe(n),l=l(n),a.flags|=1,Ce(e,a,l,t),a.child;case 14:return Nr(e,a,a.type,a.pendingProps,t);case 15:return Ar(e,a,a.type,a.pendingProps,t);case 19:return wr(e,a,t);case 31:return Vm(e,a,t);case 22:return Or(e,a,t,a.pendingProps);case 24:return _t(a),l=Oe(ge),e===null?(n=_i(),n===null&&(n=ie,u=Mi(),n.pooledCache=u,u.refCount++,u!==null&&(n.pooledCacheLanes|=t),n=u),a.memoizedState={parent:l,cache:n},xi(a),at(a,ge,n)):((e.lanes&t)!==0&&(Bi(e,a),Zl(a,null,null,t),Xl()),n=e.memoizedState,u=a.memoizedState,n.parent!==l?(n={parent:l,cache:l},a.memoizedState=n,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=n),at(a,ge,l)):(l=u.cache,at(a,ge,l),l!==n.cache&&Ci(a,[ge],t,!0))),Ce(e,a,a.pendingProps.children,t),a.child;case 29:throw a.pendingProps}throw Error(y(156,a.tag))}function Qa(e){e.flags|=4}function ys(e,a,t,l,n){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(rf())e.flags|=8192;else throw Bt=Xn,Li}else e.flags&=-16777217}function Hr(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$f(a))if(rf())e.flags|=8192;else throw Bt=Xn,Li}function ru(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?po():536870912,e.lanes|=a,pl|=a)}function en(e,a){if(!V)switch(e.tailMode){case"hidden":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function oe(e){var a=e.alternate!==null&&e.alternate.child===e.child,t=0,l=0;if(a)for(var n=e.child;n!==null;)t|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)t|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=t,a}function Xm(e,a,t){var l=a.pendingProps;switch(Di(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(a),null;case 1:return oe(a),null;case 3:return t=a.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),za(ge),ye(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(ll(a)?Qa(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Ni())),oe(a),null;case 26:var n=a.type,u=a.memoizedState;return e===null?(Qa(a),u!==null?(oe(a),Hr(a,u)):(oe(a),ys(a,n,null,l,t))):u?u!==e.memoizedState?(Qa(a),oe(a),Hr(a,u)):(oe(a),a.flags&=-16777217):(e=e.memoizedProps,e!==l&&Qa(a),oe(a),ys(a,n,e,l,t)),null;case 27:if(vn(a),t=I.current,n=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&Qa(a);else{if(!l){if(a.stateNode===null)throw Error(y(166));return oe(a),null}e=O.current,ll(a)?pc(a):(e=Vf(n,l,t),a.stateNode=e,Qa(a))}return oe(a),null;case 5:if(vn(a),n=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&Qa(a);else{if(!l){if(a.stateNode===null)throw Error(y(166));return oe(a),null}if(u=O.current,ll(a))pc(a);else{var i=Nu(I.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof l.is=="string"?i.createElement("select",{is:l.is}):i.createElement("select"),l.multiple?u.multiple=!0:l.size&&(u.size=l.size);break;default:u=typeof l.is=="string"?i.createElement(n,{is:l.is}):i.createElement(n)}}u[Ne]=a,u[Ge]=l;e:for(i=a.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===a)break e;for(;i.sibling===null;){if(i.return===null||i.return===a)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}a.stateNode=u;e:switch(Me(u,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Qa(a)}}return oe(a),ys(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,t),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==l&&Qa(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(y(166));if(e=I.current,ll(a)){if(e=a.stateNode,t=a.memoizedProps,l=null,n=Ae,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Ne]=a,e=!!(e.nodeValue===t||l!==null&&l.suppressHydrationWarning===!0||Bf(e.nodeValue,t)),e||et(a,!0)}else e=Nu(e).createTextNode(l),e[Ne]=a,a.stateNode=e}return oe(a),null;case 31:if(t=a.memoizedState,e===null||e.memoizedState!==null){if(l=ll(a),t!==null){if(e===null){if(!l)throw Error(y(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(557));e[Ne]=a}else Mt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;oe(a),e=!1}else t=Ni(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return a.flags&256?(ta(a),a):(ta(a),null);if((a.flags&128)!==0)throw Error(y(558))}return oe(a),null;case 13:if(l=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ll(a),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(y(318));if(n=a.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(y(317));n[Ne]=a}else Mt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;oe(a),n=!1}else n=Ni(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return a.flags&256?(ta(a),a):(ta(a),null)}return ta(a),(a.flags&128)!==0?(a.lanes=t,a):(t=l!==null,e=e!==null&&e.memoizedState!==null,t&&(l=a.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),u=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(u=l.memoizedState.cachePool.pool),u!==n&&(l.flags|=2048)),t!==e&&t&&(a.child.flags|=8192),ru(a,a.updateQueue),oe(a),null);case 4:return ye(),e===null&&Hs(a.stateNode.containerInfo),oe(a),null;case 10:return za(a.type),oe(a),null;case 19:if(v(pe),l=a.memoizedState,l===null)return oe(a),null;if(n=(a.flags&128)!==0,u=l.rendering,u===null)if(n)en(l,!1);else{if(me!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(u=Wn(e),u!==null){for(a.flags|=128,en(l,!1),e=u.updateQueue,a.updateQueue=e,ru(a,e),a.subtreeFlags=0,e=t,t=a.child;t!==null;)fc(t,e),t=t.sibling;return R(pe,pe.current&1|2),V&&Ba(a,l.treeForkCount),a.child}e=e.sibling}l.tail!==null&&Fe()>yu&&(a.flags|=128,n=!0,en(l,!1),a.lanes=4194304)}else{if(!n)if(e=Wn(u),e!==null){if(a.flags|=128,n=!0,e=e.updateQueue,a.updateQueue=e,ru(a,e),en(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!V)return oe(a),null}else 2*Fe()-l.renderingStartTime>yu&&t!==536870912&&(a.flags|=128,n=!0,en(l,!1),a.lanes=4194304);l.isBackwards?(u.sibling=a.child,a.child=u):(e=l.last,e!==null?e.sibling=u:a.child=u,l.last=u)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Fe(),e.sibling=null,t=pe.current,R(pe,n?t&1|2:t&1),V&&Ba(a,l.treeForkCount),e):(oe(a),null);case 22:case 23:return ta(a),qi(),l=a.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(t&536870912)!==0&&(a.flags&128)===0&&(oe(a),a.subtreeFlags&6&&(a.flags|=8192)):oe(a),t=a.updateQueue,t!==null&&ru(a,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==t&&(a.flags|=2048),e!==null&&v(Lt),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),za(ge),oe(a),null;case 25:return null;case 30:return null}throw Error(y(156,a.tag))}function Zm(e,a){switch(Di(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return za(ge),ye(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return vn(a),null;case 31:if(a.memoizedState!==null){if(ta(a),a.alternate===null)throw Error(y(340));Mt()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(ta(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(y(340));Mt()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return v(pe),null;case 4:return ye(),null;case 10:return za(a.type),null;case 22:case 23:return ta(a),qi(),e!==null&&v(Lt),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return za(ge),null;case 25:return null;default:return null}}function qr(e,a){switch(Di(a),a.tag){case 3:za(ge),ye();break;case 26:case 27:case 5:vn(a);break;case 4:ye();break;case 31:a.memoizedState!==null&&ta(a);break;case 13:ta(a);break;case 19:v(pe);break;case 10:za(a.type);break;case 22:case 23:ta(a),qi(),e!==null&&v(Lt);break;case 24:za(ge)}}function an(e,a){try{var t=a.updateQueue,l=t!==null?t.lastEffect:null;if(l!==null){var n=l.next;t=n;do{if((t.tag&e)===e){l=void 0;var u=t.create,i=t.inst;l=u(),i.destroy=l}t=t.next}while(t!==n)}}catch(s){ee(a,a.return,s)}}function st(e,a,t){try{var l=a.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var u=n.next;l=u;do{if((l.tag&e)===e){var i=l.inst,s=i.destroy;if(s!==void 0){i.destroy=void 0,n=a;var o=t,m=s;try{m()}catch(E){ee(n,o,E)}}}l=l.next}while(l!==u)}}catch(E){ee(a,a.return,E)}}function Ir(e){var a=e.updateQueue;if(a!==null){var t=e.stateNode;try{Mc(a,t)}catch(l){ee(e,e.return,l)}}}function Qr(e,a,t){t.props=Ht(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(l){ee(e,a,l)}}function tn(e,a){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof t=="function"?e.refCleanup=t(l):t.current=l}}catch(n){ee(e,a,n)}}function Aa(e,a){var t=e.ref,l=e.refCleanup;if(t!==null)if(typeof l=="function")try{l()}catch(n){ee(e,a,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(n){ee(e,a,n)}else t.current=null}function Gr(e){var a=e.type,t=e.memoizedProps,l=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":t.autoFocus&&l.focus();break e;case"img":t.src?l.src=t.src:t.srcSet&&(l.srcset=t.srcSet)}}catch(n){ee(e,e.return,n)}}function ps(e,a,t){try{var l=e.stateNode;ph(l,e.type,t,a),l[Ge]=a}catch(n){ee(e,e.return,n)}}function jr(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ht(e.type)||e.tag===4}function Es(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jr(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ht(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gs(e,a,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,a):(a=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.appendChild(e),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=_a));else if(l!==4&&(l===27&&ht(e.type)&&(t=e.stateNode,a=null),e=e.child,e!==null))for(gs(e,a,t),e=e.sibling;e!==null;)gs(e,a,t),e=e.sibling}function fu(e,a,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?t.insertBefore(e,a):t.appendChild(e);else if(l!==4&&(l===27&&ht(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(fu(e,a,t),e=e.sibling;e!==null;)fu(e,a,t),e=e.sibling}function Yr(e){var a=e.stateNode,t=e.memoizedProps;try{for(var l=e.type,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);Me(a,l,t),a[Ne]=e,a[Ge]=t}catch(u){ee(e,e.return,u)}}var Ga=!1,ve=!1,bs=!1,Kr=typeof WeakSet=="function"?WeakSet:Set,Re=null;function Jm(e,a){if(e=e.containerInfo,Qs=Lu,e=tc(e),di(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var n=l.anchorOffset,u=l.focusNode;l=l.focusOffset;try{t.nodeType,u.nodeType}catch{t=null;break e}var i=0,s=-1,o=-1,m=0,E=0,S=e,h=null;a:for(;;){for(var p;S!==t||n!==0&&S.nodeType!==3||(s=i+n),S!==u||l!==0&&S.nodeType!==3||(o=i+l),S.nodeType===3&&(i+=S.nodeValue.length),(p=S.firstChild)!==null;)h=S,S=p;for(;;){if(S===e)break a;if(h===t&&++m===n&&(s=i),h===u&&++E===l&&(o=i),(p=S.nextSibling)!==null)break;S=h,h=S.parentNode}S=p}t=s===-1||o===-1?null:{start:s,end:o}}else t=null}t=t||{start:0,end:0}}else t=null;for(Gs={focusedElem:e,selectionRange:t},Lu=!1,Re=a;Re!==null;)if(a=Re,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,Re=e;else for(;Re!==null;){switch(a=Re,u=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)n=e[t],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,t=a,n=u.memoizedProps,u=u.memoizedState,l=t.stateNode;try{var N=Ht(t.type,n);e=l.getSnapshotBeforeUpdate(N,u),l.__reactInternalSnapshotBeforeUpdate=e}catch(_){ee(t,t.return,_)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,t=e.nodeType,t===9)Ks(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ks(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(y(163))}if(e=a.sibling,e!==null){e.return=a.return,Re=e;break}Re=a.return}}function Vr(e,a,t){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Ya(e,t),l&4&&an(5,t);break;case 1:if(Ya(e,t),l&4)if(e=t.stateNode,a===null)try{e.componentDidMount()}catch(i){ee(t,t.return,i)}else{var n=Ht(t.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(n,a,e.__reactInternalSnapshotBeforeUpdate)}catch(i){ee(t,t.return,i)}}l&64&&Ir(t),l&512&&tn(t,t.return);break;case 3:if(Ya(e,t),l&64&&(e=t.updateQueue,e!==null)){if(a=null,t.child!==null)switch(t.child.tag){case 27:case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}try{Mc(e,a)}catch(i){ee(t,t.return,i)}}break;case 27:a===null&&l&4&&Yr(t);case 26:case 5:Ya(e,t),a===null&&l&4&&Gr(t),l&512&&tn(t,t.return);break;case 12:Ya(e,t);break;case 31:Ya(e,t),l&4&&Zr(e,t);break;case 13:Ya(e,t),l&4&&Jr(e,t),l&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=nh.bind(null,t),Rh(e,t))));break;case 22:if(l=t.memoizedState!==null||Ga,!l){a=a!==null&&a.memoizedState!==null||ve,n=Ga;var u=ve;Ga=l,(ve=a)&&!u?Ka(e,t,(t.subtreeFlags&8772)!==0):Ya(e,t),Ga=n,ve=u}break;case 30:break;default:Ya(e,t)}}function kr(e){var a=e.alternate;a!==null&&(e.alternate=null,kr(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Ju(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var re=null,Ye=!1;function ja(e,a,t){for(t=t.child;t!==null;)Xr(e,a,t),t=t.sibling}function Xr(e,a,t){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(Al,t)}catch{}switch(t.tag){case 26:ve||Aa(t,a),ja(e,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:ve||Aa(t,a);var l=re,n=Ye;ht(t.type)&&(re=t.stateNode,Ye=!1),ja(e,a,t),dn(t.stateNode),re=l,Ye=n;break;case 5:ve||Aa(t,a);case 6:if(l=re,n=Ye,re=null,ja(e,a,t),re=l,Ye=n,re!==null)if(Ye)try{(re.nodeType===9?re.body:re.nodeName==="HTML"?re.ownerDocument.body:re).removeChild(t.stateNode)}catch(u){ee(t,a,u)}else try{re.removeChild(t.stateNode)}catch(u){ee(t,a,u)}break;case 18:re!==null&&(Ye?(e=re,Qf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Rl(e)):Qf(re,t.stateNode));break;case 4:l=re,n=Ye,re=t.stateNode.containerInfo,Ye=!0,ja(e,a,t),re=l,Ye=n;break;case 0:case 11:case 14:case 15:st(2,t,a),ve||st(4,t,a),ja(e,a,t);break;case 1:ve||(Aa(t,a),l=t.stateNode,typeof l.componentWillUnmount=="function"&&Qr(t,a,l)),ja(e,a,t);break;case 21:ja(e,a,t);break;case 22:ve=(l=ve)||t.memoizedState!==null,ja(e,a,t),ve=l;break;default:ja(e,a,t)}}function Zr(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Rl(e)}catch(t){ee(a,a.return,t)}}}function Jr(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Rl(e)}catch(t){ee(a,a.return,t)}}function Fm(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new Kr),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new Kr),a;default:throw Error(y(435,e.tag))}}function du(e,a){var t=Fm(e);a.forEach(function(l){if(!t.has(l)){t.add(l);var n=uh.bind(null,e,l);l.then(n,n)}})}function Ke(e,a){var t=a.deletions;if(t!==null)for(var l=0;l<t.length;l++){var n=t[l],u=e,i=a,s=i;e:for(;s!==null;){switch(s.tag){case 27:if(ht(s.type)){re=s.stateNode,Ye=!1;break e}break;case 5:re=s.stateNode,Ye=!1;break e;case 3:case 4:re=s.stateNode.containerInfo,Ye=!0;break e}s=s.return}if(re===null)throw Error(y(160));Xr(u,i,n),re=null,Ye=!1,u=n.alternate,u!==null&&(u.return=null),n.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)Fr(a,e),a=a.sibling}var ba=null;function Fr(e,a){var t=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ke(a,e),Ve(e),l&4&&(st(3,e,e.return),an(3,e),st(5,e,e.return));break;case 1:Ke(a,e),Ve(e),l&512&&(ve||t===null||Aa(t,t.return)),l&64&&Ga&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?l:t.concat(l))));break;case 26:var n=ba;if(Ke(a,e),Ve(e),l&512&&(ve||t===null||Aa(t,t.return)),l&4){var u=t!==null?t.memoizedState:null;if(l=e.memoizedState,t===null)if(l===null)if(e.stateNode===null){e:{l=e.type,t=e.memoizedProps,n=n.ownerDocument||n;a:switch(l){case"title":u=n.getElementsByTagName("title")[0],(!u||u[Ml]||u[Ne]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=n.createElement(l),n.head.insertBefore(u,n.querySelector("head > title"))),Me(u,l,t),u[Ne]=e,De(u),l=u;break e;case"link":var i=Wf("link","href",n).get(l+(t.href||""));if(i){for(var s=0;s<i.length;s++)if(u=i[s],u.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&u.getAttribute("rel")===(t.rel==null?null:t.rel)&&u.getAttribute("title")===(t.title==null?null:t.title)&&u.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){i.splice(s,1);break a}}u=n.createElement(l),Me(u,l,t),n.head.appendChild(u);break;case"meta":if(i=Wf("meta","content",n).get(l+(t.content||""))){for(s=0;s<i.length;s++)if(u=i[s],u.getAttribute("content")===(t.content==null?null:""+t.content)&&u.getAttribute("name")===(t.name==null?null:t.name)&&u.getAttribute("property")===(t.property==null?null:t.property)&&u.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&u.getAttribute("charset")===(t.charSet==null?null:t.charSet)){i.splice(s,1);break a}}u=n.createElement(l),Me(u,l,t),n.head.appendChild(u);break;default:throw Error(y(468,l))}u[Ne]=e,De(u),l=u}e.stateNode=l}else Pf(n,e.type,e.stateNode);else e.stateNode=Ff(n,l,e.memoizedProps);else u!==l?(u===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):u.count--,l===null?Pf(n,e.type,e.stateNode):Ff(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&ps(e,e.memoizedProps,t.memoizedProps)}break;case 27:Ke(a,e),Ve(e),l&512&&(ve||t===null||Aa(t,t.return)),t!==null&&l&4&&ps(e,e.memoizedProps,t.memoizedProps);break;case 5:if(Ke(a,e),Ve(e),l&512&&(ve||t===null||Aa(t,t.return)),e.flags&32){n=e.stateNode;try{Xt(n,"")}catch(N){ee(e,e.return,N)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,ps(e,n,t!==null?t.memoizedProps:n)),l&1024&&(bs=!0);break;case 6:if(Ke(a,e),Ve(e),l&4){if(e.stateNode===null)throw Error(y(162));l=e.memoizedProps,t=e.stateNode;try{t.nodeValue=l}catch(N){ee(e,e.return,N)}}break;case 3:if(Cu=null,n=ba,ba=Au(a.containerInfo),Ke(a,e),ba=n,Ve(e),l&4&&t!==null&&t.memoizedState.isDehydrated)try{Rl(a.containerInfo)}catch(N){ee(e,e.return,N)}bs&&(bs=!1,Wr(e));break;case 4:l=ba,ba=Au(e.stateNode.containerInfo),Ke(a,e),Ve(e),ba=l;break;case 12:Ke(a,e),Ve(e);break;case 31:Ke(a,e),Ve(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,du(e,l)));break;case 13:Ke(a,e),Ve(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(hu=Fe()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,du(e,l)));break;case 22:n=e.memoizedState!==null;var o=t!==null&&t.memoizedState!==null,m=Ga,E=ve;if(Ga=m||n,ve=E||o,Ke(a,e),ve=E,Ga=m,Ve(e),l&8192)e:for(a=e.stateNode,a._visibility=n?a._visibility&-2:a._visibility|1,n&&(t===null||o||Ga||ve||qt(e)),t=null,a=e;;){if(a.tag===5||a.tag===26){if(t===null){o=t=a;try{if(u=o.stateNode,n)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{s=o.stateNode;var S=o.memoizedProps.style,h=S!=null&&S.hasOwnProperty("display")?S.display:null;s.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(N){ee(o,o.return,N)}}}else if(a.tag===6){if(t===null){o=a;try{o.stateNode.nodeValue=n?"":o.memoizedProps}catch(N){ee(o,o.return,N)}}}else if(a.tag===18){if(t===null){o=a;try{var p=o.stateNode;n?Gf(p,!0):Gf(o.stateNode,!1)}catch(N){ee(o,o.return,N)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;t===a&&(t=null),a=a.return}t===a&&(t=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=e.updateQueue,l!==null&&(t=l.retryQueue,t!==null&&(l.retryQueue=null,du(e,t))));break;case 19:Ke(a,e),Ve(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,du(e,l)));break;case 30:break;case 21:break;default:Ke(a,e),Ve(e)}}function Ve(e){var a=e.flags;if(a&2){try{for(var t,l=e.return;l!==null;){if(jr(l)){t=l;break}l=l.return}if(t==null)throw Error(y(160));switch(t.tag){case 27:var n=t.stateNode,u=Es(e);fu(e,u,n);break;case 5:var i=t.stateNode;t.flags&32&&(Xt(i,""),t.flags&=-33);var s=Es(e);fu(e,s,i);break;case 3:case 4:var o=t.stateNode.containerInfo,m=Es(e);gs(e,m,o);break;default:throw Error(y(161))}}catch(E){ee(e,e.return,E)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function Wr(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;Wr(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function Ya(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Vr(e,a.alternate,a),a=a.sibling}function qt(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:st(4,a,a.return),qt(a);break;case 1:Aa(a,a.return);var t=a.stateNode;typeof t.componentWillUnmount=="function"&&Qr(a,a.return,t),qt(a);break;case 27:dn(a.stateNode);case 26:case 5:Aa(a,a.return),qt(a);break;case 22:a.memoizedState===null&&qt(a);break;case 30:qt(a);break;default:qt(a)}e=e.sibling}}function Ka(e,a,t){for(t=t&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,n=e,u=a,i=u.flags;switch(u.tag){case 0:case 11:case 15:Ka(n,u,t),an(4,u);break;case 1:if(Ka(n,u,t),l=u,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(m){ee(l,l.return,m)}if(l=u,n=l.updateQueue,n!==null){var s=l.stateNode;try{var o=n.shared.hiddenCallbacks;if(o!==null)for(n.shared.hiddenCallbacks=null,n=0;n<o.length;n++)Cc(o[n],s)}catch(m){ee(l,l.return,m)}}t&&i&64&&Ir(u),tn(u,u.return);break;case 27:Yr(u);case 26:case 5:Ka(n,u,t),t&&l===null&&i&4&&Gr(u),tn(u,u.return);break;case 12:Ka(n,u,t);break;case 31:Ka(n,u,t),t&&i&4&&Zr(n,u);break;case 13:Ka(n,u,t),t&&i&4&&Jr(n,u);break;case 22:u.memoizedState===null&&Ka(n,u,t),tn(u,u.return);break;case 30:break;default:Ka(n,u,t)}a=a.sibling}}function Ss(e,a){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&jl(t))}function vs(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&jl(e))}function Sa(e,a,t,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Pr(e,a,t,l),a=a.sibling}function Pr(e,a,t,l){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Sa(e,a,t,l),n&2048&&an(9,a);break;case 1:Sa(e,a,t,l);break;case 3:Sa(e,a,t,l),n&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&jl(e)));break;case 12:if(n&2048){Sa(e,a,t,l),e=a.stateNode;try{var u=a.memoizedProps,i=u.id,s=u.onPostCommit;typeof s=="function"&&s(i,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(o){ee(a,a.return,o)}}else Sa(e,a,t,l);break;case 31:Sa(e,a,t,l);break;case 13:Sa(e,a,t,l);break;case 23:break;case 22:u=a.stateNode,i=a.alternate,a.memoizedState!==null?u._visibility&2?Sa(e,a,t,l):ln(e,a):u._visibility&2?Sa(e,a,t,l):(u._visibility|=2,ml(e,a,t,l,(a.subtreeFlags&10256)!==0||!1)),n&2048&&Ss(i,a);break;case 24:Sa(e,a,t,l),n&2048&&vs(a.alternate,a);break;default:Sa(e,a,t,l)}}function ml(e,a,t,l,n){for(n=n&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var u=e,i=a,s=t,o=l,m=i.flags;switch(i.tag){case 0:case 11:case 15:ml(u,i,s,o,n),an(8,i);break;case 23:break;case 22:var E=i.stateNode;i.memoizedState!==null?E._visibility&2?ml(u,i,s,o,n):ln(u,i):(E._visibility|=2,ml(u,i,s,o,n)),n&&m&2048&&Ss(i.alternate,i);break;case 24:ml(u,i,s,o,n),n&&m&2048&&vs(i.alternate,i);break;default:ml(u,i,s,o,n)}a=a.sibling}}function ln(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var t=e,l=a,n=l.flags;switch(l.tag){case 22:ln(t,l),n&2048&&Ss(l.alternate,l);break;case 24:ln(t,l),n&2048&&vs(l.alternate,l);break;default:ln(t,l)}a=a.sibling}}var nn=8192;function hl(e,a,t){if(e.subtreeFlags&nn)for(e=e.child;e!==null;)$r(e,a,t),e=e.sibling}function $r(e,a,t){switch(e.tag){case 26:hl(e,a,t),e.flags&nn&&e.memoizedState!==null&&zh(t,ba,e.memoizedState,e.memoizedProps);break;case 5:hl(e,a,t);break;case 3:case 4:var l=ba;ba=Au(e.stateNode.containerInfo),hl(e,a,t),ba=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=nn,nn=16777216,hl(e,a,t),nn=l):hl(e,a,t));break;default:hl(e,a,t)}}function ef(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function un(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var l=a[t];Re=l,tf(l,e)}ef(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)af(e),e=e.sibling}function af(e){switch(e.tag){case 0:case 11:case 15:un(e),e.flags&2048&&st(9,e,e.return);break;case 3:un(e);break;case 12:un(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,mu(e)):un(e);break;default:un(e)}}function mu(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var l=a[t];Re=l,tf(l,e)}ef(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:st(8,a,a.return),mu(a);break;case 22:t=a.stateNode,t._visibility&2&&(t._visibility&=-3,mu(a));break;default:mu(a)}e=e.sibling}}function tf(e,a){for(;Re!==null;){var t=Re;switch(t.tag){case 0:case 11:case 15:st(8,t,a);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var l=t.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:jl(t.memoizedState.cache)}if(l=t.child,l!==null)l.return=t,Re=l;else e:for(t=e;Re!==null;){l=Re;var n=l.sibling,u=l.return;if(kr(l),l===t){Re=null;break e}if(n!==null){n.return=u,Re=n;break e}Re=u}}}var Wm={getCacheForType:function(e){var a=Oe(ge),t=a.data.get(e);return t===void 0&&(t=e(),a.data.set(e,t)),t},cacheSignal:function(){return Oe(ge).controller.signal}},Pm=typeof WeakMap=="function"?WeakMap:Map,J=0,ie=null,Q=null,j=0,$=0,la=null,ot=!1,yl=!1,Ts=!1,Va=0,me=0,ct=0,It=0,Ds=0,na=0,pl=0,sn=null,ke=null,Rs=!1,hu=0,lf=0,yu=1/0,pu=null,rt=null,Te=0,ft=null,El=null,ka=0,Ns=0,As=null,nf=null,on=0,Os=null;function ua(){return(J&2)!==0&&j!==0?j&-j:g.T!==null?xs():So()}function uf(){if(na===0)if((j&536870912)===0||V){var e=Rn;Rn<<=1,(Rn&3932160)===0&&(Rn=262144),na=e}else na=536870912;return e=aa.current,e!==null&&(e.flags|=32),na}function Xe(e,a,t){(e===ie&&($===2||$===9)||e.cancelPendingCommit!==null)&&(gl(e,0),dt(e,j,na,!1)),Cl(e,t),((J&2)===0||e!==ie)&&(e===ie&&((J&2)===0&&(It|=t),me===4&&dt(e,j,na,!1)),Oa(e))}function sf(e,a,t){if((J&6)!==0)throw Error(y(327));var l=!t&&(a&127)===0&&(a&e.expiredLanes)===0||Ol(e,a),n=l?ah(e,a):Ms(e,a,!0),u=l;do{if(n===0){yl&&!l&&dt(e,a,0,!1);break}else{if(t=e.current.alternate,u&&!$m(t)){n=Ms(e,a,!1),u=!1;continue}if(n===2){if(u=a,e.errorRecoveryDisabledLanes&u)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){a=i;e:{var s=e;n=sn;var o=s.current.memoizedState.isDehydrated;if(o&&(gl(s,i).flags|=256),i=Ms(s,i,!1),i!==2){if(Ts&&!o){s.errorRecoveryDisabledLanes|=u,It|=u,n=4;break e}u=ke,ke=n,u!==null&&(ke===null?ke=u:ke.push.apply(ke,u))}n=i}if(u=!1,n!==2)continue}}if(n===1){gl(e,0),dt(e,a,0,!0);break}e:{switch(l=e,u=n,u){case 0:case 1:throw Error(y(345));case 4:if((a&4194048)!==a)break;case 6:dt(l,a,na,!ot);break e;case 2:ke=null;break;case 3:case 5:break;default:throw Error(y(329))}if((a&62914560)===a&&(n=hu+300-Fe(),10<n)){if(dt(l,a,na,!ot),An(l,0,!0)!==0)break e;ka=a,l.timeoutHandle=qf(of.bind(null,l,t,ke,pu,Rs,a,na,It,pl,ot,u,"Throttled",-0,0),n);break e}of(l,t,ke,pu,Rs,a,na,It,pl,ot,u,null,-0,0)}}break}while(!0);Oa(e)}function of(e,a,t,l,n,u,i,s,o,m,E,S,h,p){if(e.timeoutHandle=-1,S=a.subtreeFlags,S&8192||(S&16785408)===16785408){S={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_a},$r(a,u,S);var N=(u&62914560)===u?hu-Fe():(u&4194048)===u?lf-Fe():0;if(N=Hh(S,N),N!==null){ka=u,e.cancelPendingCommit=N(pf.bind(null,e,a,u,t,l,n,i,s,o,E,S,null,h,p)),dt(e,u,i,!m);return}}pf(e,a,u,t,l,n,i,s,o)}function $m(e){for(var a=e;;){var t=a.tag;if((t===0||t===11||t===15)&&a.flags&16384&&(t=a.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var l=0;l<t.length;l++){var n=t[l],u=n.getSnapshot;n=n.value;try{if(!$e(u(),n))return!1}catch{return!1}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function dt(e,a,t,l){a&=~Ds,a&=~It,e.suspendedLanes|=a,e.pingedLanes&=~a,l&&(e.warmLanes|=a),l=e.expirationTimes;for(var n=a;0<n;){var u=31-Pe(n),i=1<<u;l[u]=-1,n&=~i}t!==0&&Eo(e,t,a)}function Eu(){return(J&6)===0?(cn(0),!1):!0}function Cs(){if(Q!==null){if($===0)var e=Q.return;else e=Q,wa=Ut=null,Ki(e),ol=null,Kl=0,e=Q;for(;e!==null;)qr(e.alternate,e),e=e.return;Q=null}}function gl(e,a){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,bh(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),ka=0,Cs(),ie=e,Q=t=xa(e.current,null),j=a,$=0,la=null,ot=!1,yl=Ol(e,a),Ts=!1,pl=na=Ds=It=ct=me=0,ke=sn=null,Rs=!1,(a&8)!==0&&(a|=a&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=a;0<l;){var n=31-Pe(l),u=1<<n;a|=e[n],l&=~u}return Va=a,qn(),t}function cf(e,a){H=null,g.H=Pl,a===sl||a===kn?(a=Rc(),$=3):a===Li?(a=Rc(),$=4):$=a===is?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,la=a,Q===null&&(me=1,iu(e,ra(a,e.current)))}function rf(){var e=aa.current;return e===null?!0:(j&4194048)===j?ha===null:(j&62914560)===j||(j&536870912)!==0?e===ha:!1}function ff(){var e=g.H;return g.H=Pl,e===null?Pl:e}function df(){var e=g.A;return g.A=Wm,e}function gu(){me=4,ot||(j&4194048)!==j&&aa.current!==null||(yl=!0),(ct&134217727)===0&&(It&134217727)===0||ie===null||dt(ie,j,na,!1)}function Ms(e,a,t){var l=J;J|=2;var n=ff(),u=df();(ie!==e||j!==a)&&(pu=null,gl(e,a)),a=!1;var i=me;e:do try{if($!==0&&Q!==null){var s=Q,o=la;switch($){case 8:Cs(),i=6;break e;case 3:case 2:case 9:case 6:aa.current===null&&(a=!0);var m=$;if($=0,la=null,bl(e,s,o,m),t&&yl){i=0;break e}break;default:m=$,$=0,la=null,bl(e,s,o,m)}}eh(),i=me;break}catch(E){cf(e,E)}while(!0);return a&&e.shellSuspendCounter++,wa=Ut=null,J=l,g.H=n,g.A=u,Q===null&&(ie=null,j=0,qn()),i}function eh(){for(;Q!==null;)mf(Q)}function ah(e,a){var t=J;J|=2;var l=ff(),n=df();ie!==e||j!==a?(pu=null,yu=Fe()+500,gl(e,a)):yl=Ol(e,a);e:do try{if($!==0&&Q!==null){a=Q;var u=la;a:switch($){case 1:$=0,la=null,bl(e,a,u,1);break;case 2:case 9:if(Tc(u)){$=0,la=null,hf(a);break}a=function(){$!==2&&$!==9||ie!==e||($=7),Oa(e)},u.then(a,a);break e;case 3:$=7;break e;case 4:$=5;break e;case 7:Tc(u)?($=0,la=null,hf(a)):($=0,la=null,bl(e,a,u,7));break;case 5:var i=null;switch(Q.tag){case 26:i=Q.memoizedState;case 5:case 27:var s=Q;if(i?$f(i):s.stateNode.complete){$=0,la=null;var o=s.sibling;if(o!==null)Q=o;else{var m=s.return;m!==null?(Q=m,bu(m)):Q=null}break a}}$=0,la=null,bl(e,a,u,5);break;case 6:$=0,la=null,bl(e,a,u,6);break;case 8:Cs(),me=6;break e;default:throw Error(y(462))}}th();break}catch(E){cf(e,E)}while(!0);return wa=Ut=null,g.H=l,g.A=n,J=t,Q!==null?0:(ie=null,j=0,qn(),me)}function th(){for(;Q!==null&&!Nd();)mf(Q)}function mf(e){var a=zr(e.alternate,e,Va);e.memoizedProps=e.pendingProps,a===null?bu(e):Q=a}function hf(e){var a=e,t=a.alternate;switch(a.tag){case 15:case 0:a=Ur(t,a,a.pendingProps,a.type,void 0,j);break;case 11:a=Ur(t,a,a.pendingProps,a.type.render,a.ref,j);break;case 5:Ki(a);default:qr(t,a),a=Q=fc(a,Va),a=zr(t,a,Va)}e.memoizedProps=e.pendingProps,a===null?bu(e):Q=a}function bl(e,a,t,l){wa=Ut=null,Ki(a),ol=null,Kl=0;var n=a.return;try{if(Km(e,n,a,t,j)){me=1,iu(e,ra(t,e.current)),Q=null;return}}catch(u){if(n!==null)throw Q=n,u;me=1,iu(e,ra(t,e.current)),Q=null;return}a.flags&32768?(V||l===1?e=!0:yl||(j&536870912)!==0?e=!1:(ot=e=!0,(l===2||l===9||l===3||l===6)&&(l=aa.current,l!==null&&l.tag===13&&(l.flags|=16384))),yf(a,e)):bu(a)}function bu(e){var a=e;do{if((a.flags&32768)!==0){yf(a,ot);return}e=a.return;var t=Xm(a.alternate,a,Va);if(t!==null){Q=t;return}if(a=a.sibling,a!==null){Q=a;return}Q=a=e}while(a!==null);me===0&&(me=5)}function yf(e,a){do{var t=Zm(e.alternate,e);if(t!==null){t.flags&=32767,Q=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&(e=e.sibling,e!==null)){Q=e;return}Q=e=t}while(e!==null);me=6,Q=null}function pf(e,a,t,l,n,u,i,s,o){e.cancelPendingCommit=null;do Su();while(Te!==0);if((J&6)!==0)throw Error(y(327));if(a!==null){if(a===e.current)throw Error(y(177));if(u=a.lanes|a.childLanes,u|=Ei,wd(e,t,u,i,s,o),e===ie&&(Q=ie=null,j=0),El=a,ft=e,ka=t,Ns=u,As=n,nf=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ih(Tn,function(){return vf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=g.T,g.T=null,n=D.p,D.p=2,i=J,J|=4;try{Jm(e,a,t)}finally{J=i,D.p=n,g.T=l}}Te=1,Ef(),gf(),bf()}}function Ef(){if(Te===1){Te=0;var e=ft,a=El,t=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||t){t=g.T,g.T=null;var l=D.p;D.p=2;var n=J;J|=4;try{Fr(a,e);var u=Gs,i=tc(e.containerInfo),s=u.focusedElem,o=u.selectionRange;if(i!==s&&s&&s.ownerDocument&&ac(s.ownerDocument.documentElement,s)){if(o!==null&&di(s)){var m=o.start,E=o.end;if(E===void 0&&(E=m),"selectionStart"in s)s.selectionStart=m,s.selectionEnd=Math.min(E,s.value.length);else{var S=s.ownerDocument||document,h=S&&S.defaultView||window;if(h.getSelection){var p=h.getSelection(),N=s.textContent.length,_=Math.min(o.start,N),ne=o.end===void 0?_:Math.min(o.end,N);!p.extend&&_>ne&&(i=ne,ne=_,_=i);var f=ec(s,_),c=ec(s,ne);if(f&&c&&(p.rangeCount!==1||p.anchorNode!==f.node||p.anchorOffset!==f.offset||p.focusNode!==c.node||p.focusOffset!==c.offset)){var d=S.createRange();d.setStart(f.node,f.offset),p.removeAllRanges(),_>ne?(p.addRange(d),p.extend(c.node,c.offset)):(d.setEnd(c.node,c.offset),p.addRange(d))}}}}for(S=[],p=s;p=p.parentNode;)p.nodeType===1&&S.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<S.length;s++){var b=S[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}Lu=!!Qs,Gs=Qs=null}finally{J=n,D.p=l,g.T=t}}e.current=a,Te=2}}function gf(){if(Te===2){Te=0;var e=ft,a=El,t=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||t){t=g.T,g.T=null;var l=D.p;D.p=2;var n=J;J|=4;try{Vr(e,a.alternate,a)}finally{J=n,D.p=l,g.T=t}}Te=3}}function bf(){if(Te===4||Te===3){Te=0,Ad();var e=ft,a=El,t=ka,l=nf;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Te=5:(Te=0,El=ft=null,Sf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(rt=null),Xu(t),a=a.stateNode,We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(Al,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=g.T,n=D.p,D.p=2,g.T=null;try{for(var u=e.onRecoverableError,i=0;i<l.length;i++){var s=l[i];u(s.value,{componentStack:s.stack})}}finally{g.T=a,D.p=n}}(ka&3)!==0&&Su(),Oa(e),n=e.pendingLanes,(t&261930)!==0&&(n&42)!==0?e===Os?on++:(on=0,Os=e):on=0,cn(0)}}function Sf(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,jl(a)))}function Su(){return Ef(),gf(),bf(),vf()}function vf(){if(Te!==5)return!1;var e=ft,a=Ns;Ns=0;var t=Xu(ka),l=g.T,n=D.p;try{D.p=32>t?32:t,g.T=null,t=As,As=null;var u=ft,i=ka;if(Te=0,El=ft=null,ka=0,(J&6)!==0)throw Error(y(331));var s=J;if(J|=4,af(u.current),Pr(u,u.current,i,t),J=s,cn(0,!1),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(Al,u)}catch{}return!0}finally{D.p=n,g.T=l,Sf(e,a)}}function Tf(e,a,t){a=ra(t,a),a=us(e.stateNode,a,2),e=nt(e,a,2),e!==null&&(Cl(e,2),Oa(e))}function ee(e,a,t){if(e.tag===3)Tf(e,e,t);else for(;a!==null;){if(a.tag===3){Tf(a,e,t);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(rt===null||!rt.has(l))){e=ra(t,e),t=Tr(2),l=nt(a,t,2),l!==null&&(Dr(t,l,a,e),Cl(l,2),Oa(l));break}}a=a.return}}function Us(e,a,t){var l=e.pingCache;if(l===null){l=e.pingCache=new Pm;var n=new Set;l.set(a,n)}else n=l.get(a),n===void 0&&(n=new Set,l.set(a,n));n.has(t)||(Ts=!0,n.add(t),e=lh.bind(null,e,a,t),a.then(e,e))}function lh(e,a,t){var l=e.pingCache;l!==null&&l.delete(a),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,ie===e&&(j&t)===t&&(me===4||me===3&&(j&62914560)===j&&300>Fe()-hu?(J&2)===0&&gl(e,0):Ds|=t,pl===j&&(pl=0)),Oa(e)}function Df(e,a){a===0&&(a=po()),e=Ot(e,a),e!==null&&(Cl(e,a),Oa(e))}function nh(e){var a=e.memoizedState,t=0;a!==null&&(t=a.retryLane),Df(e,t)}function uh(e,a){var t=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(t=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(y(314))}l!==null&&l.delete(a),Df(e,t)}function ih(e,a){return Yu(e,a)}var vu=null,Sl=null,_s=!1,Tu=!1,Ls=!1,mt=0;function Oa(e){e!==Sl&&e.next===null&&(Sl===null?vu=Sl=e:Sl=Sl.next=e),Tu=!0,_s||(_s=!0,oh())}function cn(e,a){if(!Ls&&Tu){Ls=!0;do for(var t=!1,l=vu;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var u=0;else{var i=l.suspendedLanes,s=l.pingedLanes;u=(1<<31-Pe(42|e)+1)-1,u&=n&~(i&~s),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(t=!0,Of(l,u))}else u=j,u=An(l,l===ie?u:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(u&3)===0||Ol(l,u)||(t=!0,Of(l,u));l=l.next}while(t);Ls=!1}}function sh(){Rf()}function Rf(){Tu=_s=!1;var e=0;mt!==0&&gh()&&(e=mt);for(var a=Fe(),t=null,l=vu;l!==null;){var n=l.next,u=Nf(l,a);u===0?(l.next=null,t===null?vu=n:t.next=n,n===null&&(Sl=t)):(t=l,(e!==0||(u&3)!==0)&&(Tu=!0)),l=n}Te!==0&&Te!==5||cn(e),mt!==0&&(mt=0)}function Nf(e,a){for(var t=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var i=31-Pe(u),s=1<<i,o=n[i];o===-1?((s&t)===0||(s&l)!==0)&&(n[i]=Bd(s,a)):o<=a&&(e.expiredLanes|=s),u&=~s}if(a=ie,t=j,t=An(e,e===a?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,t===0||e===a&&($===2||$===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Ku(l),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Ol(e,t)){if(a=t&-t,a===e.callbackPriority)return a;switch(l!==null&&Ku(l),Xu(t)){case 2:case 8:t=ho;break;case 32:t=Tn;break;case 268435456:t=yo;break;default:t=Tn}return l=Af.bind(null,e),t=Yu(t,l),e.callbackPriority=a,e.callbackNode=t,a}return l!==null&&l!==null&&Ku(l),e.callbackPriority=2,e.callbackNode=null,2}function Af(e,a){if(Te!==0&&Te!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Su()&&e.callbackNode!==t)return null;var l=j;return l=An(e,e===ie?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(sf(e,l,a),Nf(e,Fe()),e.callbackNode!=null&&e.callbackNode===t?Af.bind(null,e):null)}function Of(e,a){if(Su())return null;sf(e,a,!0)}function oh(){Sh(function(){(J&6)!==0?Yu(mo,sh):Rf()})}function xs(){if(mt===0){var e=ul;e===0&&(e=Dn,Dn<<=1,(Dn&261888)===0&&(Dn=256)),mt=e}return mt}function Cf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Un(""+e)}function Mf(e,a){var t=a.ownerDocument.createElement("input");return t.name=a.name,t.value=a.value,e.id&&t.setAttribute("form",e.id),a.parentNode.insertBefore(t,a),e=new FormData(e),t.parentNode.removeChild(t),e}function ch(e,a,t,l,n){if(a==="submit"&&t&&t.stateNode===n){var u=Cf((n[Ge]||null).action),i=l.submitter;i&&(a=(a=i[Ge]||null)?Cf(a.formAction):i.getAttribute("formAction"),a!==null&&(u=a,i=null));var s=new Bn("action","action",null,l,n);e.push({event:s,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(mt!==0){var o=i?Mf(n,i):new FormData(n);$i(t,{pending:!0,data:o,method:n.method,action:u},null,o)}}else typeof u=="function"&&(s.preventDefault(),o=i?Mf(n,i):new FormData(n),$i(t,{pending:!0,data:o,method:n.method,action:u},u,o))},currentTarget:n}]})}}for(var Bs=0;Bs<pi.length;Bs++){var ws=pi[Bs],rh=ws.toLowerCase(),fh=ws[0].toUpperCase()+ws.slice(1);ga(rh,"on"+fh)}ga(uc,"onAnimationEnd"),ga(ic,"onAnimationIteration"),ga(sc,"onAnimationStart"),ga("dblclick","onDoubleClick"),ga("focusin","onFocus"),ga("focusout","onBlur"),ga(Om,"onTransitionRun"),ga(Cm,"onTransitionStart"),ga(Mm,"onTransitionCancel"),ga(oc,"onTransitionEnd"),Vt("onMouseEnter",["mouseout","mouseover"]),Vt("onMouseLeave",["mouseout","mouseover"]),Vt("onPointerEnter",["pointerout","pointerover"]),Vt("onPointerLeave",["pointerout","pointerover"]),Dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Dt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(rn));function Uf(e,a){a=(a&4)!==0;for(var t=0;t<e.length;t++){var l=e[t],n=l.event;l=l.listeners;e:{var u=void 0;if(a)for(var i=l.length-1;0<=i;i--){var s=l[i],o=s.instance,m=s.currentTarget;if(s=s.listener,o!==u&&n.isPropagationStopped())break e;u=s,n.currentTarget=m;try{u(n)}catch(E){Hn(E)}n.currentTarget=null,u=o}else for(i=0;i<l.length;i++){if(s=l[i],o=s.instance,m=s.currentTarget,s=s.listener,o!==u&&n.isPropagationStopped())break e;u=s,n.currentTarget=m;try{u(n)}catch(E){Hn(E)}n.currentTarget=null,u=o}}}}function G(e,a){var t=a[Zu];t===void 0&&(t=a[Zu]=new Set);var l=e+"__bubble";t.has(l)||(_f(a,e,2,!1),t.add(l))}function zs(e,a,t){var l=0;a&&(l|=4),_f(t,e,l,a)}var Du="_reactListening"+Math.random().toString(36).slice(2);function Hs(e){if(!e[Du]){e[Du]=!0,Do.forEach(function(t){t!=="selectionchange"&&(dh.has(t)||zs(t,!1,e),zs(t,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Du]||(a[Du]=!0,zs("selectionchange",!1,a))}}function _f(e,a,t,l){switch(id(a)){case 2:var n=Qh;break;case 8:n=Gh;break;default:n=Ps}t=n.bind(null,a,t,e),n=void 0,!li||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(a,t,{capture:!0,passive:n}):e.addEventListener(a,t,!0):n!==void 0?e.addEventListener(a,t,{passive:n}):e.addEventListener(a,t,!1)}function qs(e,a,t,l,n){var u=l;if((a&1)===0&&(a&2)===0&&l!==null)e:for(;;){if(l===null)return;var i=l.tag;if(i===3||i===4){var s=l.stateNode.containerInfo;if(s===n)break;if(i===4)for(i=l.return;i!==null;){var o=i.tag;if((o===3||o===4)&&i.stateNode.containerInfo===n)return;i=i.return}for(;s!==null;){if(i=jt(s),i===null)return;if(o=i.tag,o===5||o===6||o===26||o===27){l=u=i;continue e}s=s.parentNode}}l=l.return}wo(function(){var m=u,E=ai(t),S=[];e:{var h=cc.get(e);if(h!==void 0){var p=Bn,N=e;switch(e){case"keypress":if(Ln(t)===0)break e;case"keydown":case"keyup":p=um;break;case"focusin":N="focus",p=si;break;case"focusout":N="blur",p=si;break;case"beforeblur":case"afterblur":p=si;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=qo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Xd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=om;break;case uc:case ic:case sc:p=Fd;break;case oc:p=rm;break;case"scroll":case"scrollend":p=Vd;break;case"wheel":p=dm;break;case"copy":case"cut":case"paste":p=Pd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Qo;break;case"toggle":case"beforetoggle":p=hm}var _=(a&4)!==0,ne=!_&&(e==="scroll"||e==="scrollend"),f=_?h!==null?h+"Capture":null:h;_=[];for(var c=m,d;c!==null;){var b=c;if(d=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||d===null||f===null||(b=_l(c,f),b!=null&&_.push(fn(c,b,d))),ne)break;c=c.return}0<_.length&&(h=new p(h,N,null,t,E),S.push({event:h,listeners:_}))}}if((a&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",h&&t!==ei&&(N=t.relatedTarget||t.fromElement)&&(jt(N)||N[Gt]))break e;if((p||h)&&(h=E.window===E?E:(h=E.ownerDocument)?h.defaultView||h.parentWindow:window,p?(N=t.relatedTarget||t.toElement,p=m,N=N?jt(N):null,N!==null&&(ne=Z(N),_=N.tag,N!==ne||_!==5&&_!==27&&_!==6)&&(N=null)):(p=null,N=m),p!==N)){if(_=qo,b="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(_=Qo,b="onPointerLeave",f="onPointerEnter",c="pointer"),ne=p==null?h:Ul(p),d=N==null?h:Ul(N),h=new _(b,c+"leave",p,t,E),h.target=ne,h.relatedTarget=d,b=null,jt(E)===m&&(_=new _(f,c+"enter",N,t,E),_.target=d,_.relatedTarget=ne,b=_),ne=b,p&&N)a:{for(_=mh,f=p,c=N,d=0,b=f;b;b=_(b))d++;b=0;for(var M=c;M;M=_(M))b++;for(;0<d-b;)f=_(f),d--;for(;0<b-d;)c=_(c),b--;for(;d--;){if(f===c||c!==null&&f===c.alternate){_=f;break a}f=_(f),c=_(c)}_=null}else _=null;p!==null&&Lf(S,h,p,_,!1),N!==null&&ne!==null&&Lf(S,ne,N,_,!0)}}e:{if(h=m?Ul(m):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var k=Zo;else if(ko(h))if(Jo)k=Rm;else{k=Tm;var C=vm}else p=h.nodeName,!p||p.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?m&&$u(m.elementType)&&(k=Zo):k=Dm;if(k&&(k=k(e,m))){Xo(S,k,t,E);break e}C&&C(e,h,m),e==="focusout"&&m&&h.type==="number"&&m.memoizedProps.value!=null&&Pu(h,"number",h.value)}switch(C=m?Ul(m):window,e){case"focusin":(ko(C)||C.contentEditable==="true")&&(Wt=C,mi=m,Il=null);break;case"focusout":Il=mi=Wt=null;break;case"mousedown":hi=!0;break;case"contextmenu":case"mouseup":case"dragend":hi=!1,lc(S,t,E);break;case"selectionchange":if(Am)break;case"keydown":case"keyup":lc(S,t,E)}var q;if(ci)e:{switch(e){case"compositionstart":var Y="onCompositionStart";break e;case"compositionend":Y="onCompositionEnd";break e;case"compositionupdate":Y="onCompositionUpdate";break e}Y=void 0}else Ft?Ko(e,t)&&(Y="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(Y="onCompositionStart");Y&&(Go&&t.locale!=="ko"&&(Ft||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&Ft&&(q=zo()):(Wa=E,ni="value"in Wa?Wa.value:Wa.textContent,Ft=!0)),C=Ru(m,Y),0<C.length&&(Y=new Io(Y,e,null,t,E),S.push({event:Y,listeners:C}),q?Y.data=q:(q=Vo(t),q!==null&&(Y.data=q)))),(q=pm?Em(e,t):gm(e,t))&&(Y=Ru(m,"onBeforeInput"),0<Y.length&&(C=new Io("onBeforeInput","beforeinput",null,t,E),S.push({event:C,listeners:Y}),C.data=q)),ch(S,e,m,t,E)}Uf(S,a)})}function fn(e,a,t){return{instance:e,listener:a,currentTarget:t}}function Ru(e,a){for(var t=a+"Capture",l=[];e!==null;){var n=e,u=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||u===null||(n=_l(e,t),n!=null&&l.unshift(fn(e,n,u)),n=_l(e,a),n!=null&&l.push(fn(e,n,u))),e.tag===3)return l;e=e.return}return[]}function mh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Lf(e,a,t,l,n){for(var u=a._reactName,i=[];t!==null&&t!==l;){var s=t,o=s.alternate,m=s.stateNode;if(s=s.tag,o!==null&&o===l)break;s!==5&&s!==26&&s!==27||m===null||(o=m,n?(m=_l(t,u),m!=null&&i.unshift(fn(t,m,o))):n||(m=_l(t,u),m!=null&&i.push(fn(t,m,o)))),t=t.return}i.length!==0&&e.push({event:a,listeners:i})}var hh=/\r\n?/g,yh=/\u0000|\uFFFD/g;function xf(e){return(typeof e=="string"?e:""+e).replace(hh,`
`).replace(yh,"")}function Bf(e,a){return a=xf(a),xf(e)===a}function le(e,a,t,l,n,u){switch(t){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||Xt(e,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&Xt(e,""+l);break;case"className":Cn(e,"class",l);break;case"tabIndex":Cn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Cn(e,t,l);break;case"style":xo(e,l,u);break;case"data":if(a!=="object"){Cn(e,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||t!=="href")){e.removeAttribute(t);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=Un(""+l),e.setAttribute(t,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(t==="formAction"?(a!=="input"&&le(e,a,"name",n.name,n,null),le(e,a,"formEncType",n.formEncType,n,null),le(e,a,"formMethod",n.formMethod,n,null),le(e,a,"formTarget",n.formTarget,n,null)):(le(e,a,"encType",n.encType,n,null),le(e,a,"method",n.method,n,null),le(e,a,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=Un(""+l),e.setAttribute(t,l);break;case"onClick":l!=null&&(e.onclick=_a);break;case"onScroll":l!=null&&G("scroll",e);break;case"onScrollEnd":l!=null&&G("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(y(61));if(t=l.__html,t!=null){if(n.children!=null)throw Error(y(60));e.innerHTML=t}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}t=Un(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""+l):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":l===!0?e.setAttribute(t,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,l):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(t,l):e.removeAttribute(t);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(t):e.setAttribute(t,l);break;case"popover":G("beforetoggle",e),G("toggle",e),On(e,"popover",l);break;case"xlinkActuate":Ua(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ua(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ua(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ua(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ua(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ua(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ua(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ua(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ua(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":On(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Yd.get(t)||t,On(e,t,l))}}function Is(e,a,t,l,n,u){switch(t){case"style":xo(e,l,u);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(y(61));if(t=l.__html,t!=null){if(n.children!=null)throw Error(y(60));e.innerHTML=t}}break;case"children":typeof l=="string"?Xt(e,l):(typeof l=="number"||typeof l=="bigint")&&Xt(e,""+l);break;case"onScroll":l!=null&&G("scroll",e);break;case"onScrollEnd":l!=null&&G("scrollend",e);break;case"onClick":l!=null&&(e.onclick=_a);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ro.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(n=t.endsWith("Capture"),a=t.slice(2,n?t.length-7:void 0),u=e[Ge]||null,u=u!=null?u[t]:null,typeof u=="function"&&e.removeEventListener(a,u,n),typeof l=="function")){typeof u!="function"&&u!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(a,l,n);break e}t in e?e[t]=l:l===!0?e.setAttribute(t,""):On(e,t,l)}}}function Me(e,a,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":G("error",e),G("load",e);var l=!1,n=!1,u;for(u in t)if(t.hasOwnProperty(u)){var i=t[u];if(i!=null)switch(u){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(y(137,a));default:le(e,a,u,i,t,null)}}n&&le(e,a,"srcSet",t.srcSet,t,null),l&&le(e,a,"src",t.src,t,null);return;case"input":G("invalid",e);var s=u=i=n=null,o=null,m=null;for(l in t)if(t.hasOwnProperty(l)){var E=t[l];if(E!=null)switch(l){case"name":n=E;break;case"type":i=E;break;case"checked":o=E;break;case"defaultChecked":m=E;break;case"value":u=E;break;case"defaultValue":s=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(y(137,a));break;default:le(e,a,l,E,t,null)}}Mo(e,u,s,o,m,i,n,!1);return;case"select":G("invalid",e),l=i=u=null;for(n in t)if(t.hasOwnProperty(n)&&(s=t[n],s!=null))switch(n){case"value":u=s;break;case"defaultValue":i=s;break;case"multiple":l=s;default:le(e,a,n,s,t,null)}a=u,t=i,e.multiple=!!l,a!=null?kt(e,!!l,a,!1):t!=null&&kt(e,!!l,t,!0);return;case"textarea":G("invalid",e),u=n=l=null;for(i in t)if(t.hasOwnProperty(i)&&(s=t[i],s!=null))switch(i){case"value":l=s;break;case"defaultValue":n=s;break;case"children":u=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(y(91));break;default:le(e,a,i,s,t,null)}_o(e,l,n,u);return;case"option":for(o in t)if(t.hasOwnProperty(o)&&(l=t[o],l!=null))switch(o){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:le(e,a,o,l,t,null)}return;case"dialog":G("beforetoggle",e),G("toggle",e),G("cancel",e),G("close",e);break;case"iframe":case"object":G("load",e);break;case"video":case"audio":for(l=0;l<rn.length;l++)G(rn[l],e);break;case"image":G("error",e),G("load",e);break;case"details":G("toggle",e);break;case"embed":case"source":case"link":G("error",e),G("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in t)if(t.hasOwnProperty(m)&&(l=t[m],l!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(y(137,a));default:le(e,a,m,l,t,null)}return;default:if($u(a)){for(E in t)t.hasOwnProperty(E)&&(l=t[E],l!==void 0&&Is(e,a,E,l,t,void 0));return}}for(s in t)t.hasOwnProperty(s)&&(l=t[s],l!=null&&le(e,a,s,l,t,null))}function ph(e,a,t,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,u=null,i=null,s=null,o=null,m=null,E=null;for(p in t){var S=t[p];if(t.hasOwnProperty(p)&&S!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":o=S;default:l.hasOwnProperty(p)||le(e,a,p,null,l,S)}}for(var h in l){var p=l[h];if(S=t[h],l.hasOwnProperty(h)&&(p!=null||S!=null))switch(h){case"type":u=p;break;case"name":n=p;break;case"checked":m=p;break;case"defaultChecked":E=p;break;case"value":i=p;break;case"defaultValue":s=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(y(137,a));break;default:p!==S&&le(e,a,h,p,l,S)}}Wu(e,i,s,o,m,E,u,n);return;case"select":p=i=s=h=null;for(u in t)if(o=t[u],t.hasOwnProperty(u)&&o!=null)switch(u){case"value":break;case"multiple":p=o;default:l.hasOwnProperty(u)||le(e,a,u,null,l,o)}for(n in l)if(u=l[n],o=t[n],l.hasOwnProperty(n)&&(u!=null||o!=null))switch(n){case"value":h=u;break;case"defaultValue":s=u;break;case"multiple":i=u;default:u!==o&&le(e,a,n,u,l,o)}a=s,t=i,l=p,h!=null?kt(e,!!t,h,!1):!!l!=!!t&&(a!=null?kt(e,!!t,a,!0):kt(e,!!t,t?[]:"",!1));return;case"textarea":p=h=null;for(s in t)if(n=t[s],t.hasOwnProperty(s)&&n!=null&&!l.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:le(e,a,s,null,l,n)}for(i in l)if(n=l[i],u=t[i],l.hasOwnProperty(i)&&(n!=null||u!=null))switch(i){case"value":h=n;break;case"defaultValue":p=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(y(91));break;default:n!==u&&le(e,a,i,n,l,u)}Uo(e,h,p);return;case"option":for(var N in t)if(h=t[N],t.hasOwnProperty(N)&&h!=null&&!l.hasOwnProperty(N))switch(N){case"selected":e.selected=!1;break;default:le(e,a,N,null,l,h)}for(o in l)if(h=l[o],p=t[o],l.hasOwnProperty(o)&&h!==p&&(h!=null||p!=null))switch(o){case"selected":e.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:le(e,a,o,h,l,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _ in t)h=t[_],t.hasOwnProperty(_)&&h!=null&&!l.hasOwnProperty(_)&&le(e,a,_,null,l,h);for(m in l)if(h=l[m],p=t[m],l.hasOwnProperty(m)&&h!==p&&(h!=null||p!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(y(137,a));break;default:le(e,a,m,h,l,p)}return;default:if($u(a)){for(var ne in t)h=t[ne],t.hasOwnProperty(ne)&&h!==void 0&&!l.hasOwnProperty(ne)&&Is(e,a,ne,void 0,l,h);for(E in l)h=l[E],p=t[E],!l.hasOwnProperty(E)||h===p||h===void 0&&p===void 0||Is(e,a,E,h,l,p);return}}for(var f in t)h=t[f],t.hasOwnProperty(f)&&h!=null&&!l.hasOwnProperty(f)&&le(e,a,f,null,l,h);for(S in l)h=l[S],p=t[S],!l.hasOwnProperty(S)||h===p||h==null&&p==null||le(e,a,S,h,l,p)}function wf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Eh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,t=performance.getEntriesByType("resource"),l=0;l<t.length;l++){var n=t[l],u=n.transferSize,i=n.initiatorType,s=n.duration;if(u&&s&&wf(i)){for(i=0,s=n.responseEnd,l+=1;l<t.length;l++){var o=t[l],m=o.startTime;if(m>s)break;var E=o.transferSize,S=o.initiatorType;E&&wf(S)&&(o=o.responseEnd,i+=E*(o<s?1:(s-m)/(o-m)))}if(--l,a+=8*(u+i)/(n.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Qs=null,Gs=null;function Nu(e){return e.nodeType===9?e:e.ownerDocument}function zf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hf(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function js(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Ys=null;function gh(){var e=window.event;return e&&e.type==="popstate"?e===Ys?!1:(Ys=e,!0):(Ys=null,!1)}var qf=typeof setTimeout=="function"?setTimeout:void 0,bh=typeof clearTimeout=="function"?clearTimeout:void 0,If=typeof Promise=="function"?Promise:void 0,Sh=typeof queueMicrotask=="function"?queueMicrotask:typeof If<"u"?function(e){return If.resolve(null).then(e).catch(vh)}:qf;function vh(e){setTimeout(function(){throw e})}function ht(e){return e==="head"}function Qf(e,a){var t=a,l=0;do{var n=t.nextSibling;if(e.removeChild(t),n&&n.nodeType===8)if(t=n.data,t==="/$"||t==="/&"){if(l===0){e.removeChild(n),Rl(a);return}l--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")l++;else if(t==="html")dn(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,dn(t);for(var u=t.firstChild;u;){var i=u.nextSibling,s=u.nodeName;u[Ml]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&u.rel.toLowerCase()==="stylesheet"||t.removeChild(u),u=i}}else t==="body"&&dn(e.ownerDocument.body);t=n}while(t);Rl(a)}function Gf(e,a){var t=e;e=0;do{var l=t.nextSibling;if(t.nodeType===1?a?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(a?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=l}while(t)}function Ks(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var t=a;switch(a=a.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Ks(t),Ju(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function Th(e,a,t,l){for(;e.nodeType===1;){var n=t;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ml])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var u=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=ya(e.nextSibling),e===null)break}return null}function Dh(e,a,t){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ya(e.nextSibling),e===null))return null;return e}function jf(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ya(e.nextSibling),e===null))return null;return e}function Vs(e){return e.data==="$?"||e.data==="$~"}function ks(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Rh(e,a){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||t.readyState!=="loading")a();else{var l=function(){a(),t.removeEventListener("DOMContentLoaded",l)};t.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function ya(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var Xs=null;function Yf(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(a===0)return ya(e.nextSibling);a--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||a++}e=e.nextSibling}return null}function Kf(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(a===0)return e;a--}else t!=="/$"&&t!=="/&"||a++}e=e.previousSibling}return null}function Vf(e,a,t){switch(a=Nu(t),e){case"html":if(e=a.documentElement,!e)throw Error(y(452));return e;case"head":if(e=a.head,!e)throw Error(y(453));return e;case"body":if(e=a.body,!e)throw Error(y(454));return e;default:throw Error(y(451))}}function dn(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Ju(e)}var pa=new Map,kf=new Set;function Au(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Xa=D.d;D.d={f:Nh,r:Ah,D:Oh,C:Ch,L:Mh,m:Uh,X:Lh,S:_h,M:xh};function Nh(){var e=Xa.f(),a=Eu();return e||a}function Ah(e){var a=Yt(e);a!==null&&a.tag===5&&a.type==="form"?or(a):Xa.r(e)}var vl=typeof document>"u"?null:document;function Xf(e,a,t){var l=vl;if(l&&typeof a=="string"&&a){var n=oa(a);n='link[rel="'+e+'"][href="'+n+'"]',typeof t=="string"&&(n+='[crossorigin="'+t+'"]'),kf.has(n)||(kf.add(n),e={rel:e,crossOrigin:t,href:a},l.querySelector(n)===null&&(a=l.createElement("link"),Me(a,"link",e),De(a),l.head.appendChild(a)))}}function Oh(e){Xa.D(e),Xf("dns-prefetch",e,null)}function Ch(e,a){Xa.C(e,a),Xf("preconnect",e,a)}function Mh(e,a,t){Xa.L(e,a,t);var l=vl;if(l&&e&&a){var n='link[rel="preload"][as="'+oa(a)+'"]';a==="image"&&t&&t.imageSrcSet?(n+='[imagesrcset="'+oa(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(n+='[imagesizes="'+oa(t.imageSizes)+'"]')):n+='[href="'+oa(e)+'"]';var u=n;switch(a){case"style":u=Tl(e);break;case"script":u=Dl(e)}pa.has(u)||(e=x({rel:"preload",href:a==="image"&&t&&t.imageSrcSet?void 0:e,as:a},t),pa.set(u,e),l.querySelector(n)!==null||a==="style"&&l.querySelector(mn(u))||a==="script"&&l.querySelector(hn(u))||(a=l.createElement("link"),Me(a,"link",e),De(a),l.head.appendChild(a)))}}function Uh(e,a){Xa.m(e,a);var t=vl;if(t&&e){var l=a&&typeof a.as=="string"?a.as:"script",n='link[rel="modulepreload"][as="'+oa(l)+'"][href="'+oa(e)+'"]',u=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Dl(e)}if(!pa.has(u)&&(e=x({rel:"modulepreload",href:e},a),pa.set(u,e),t.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(hn(u)))return}l=t.createElement("link"),Me(l,"link",e),De(l),t.head.appendChild(l)}}}function _h(e,a,t){Xa.S(e,a,t);var l=vl;if(l&&e){var n=Kt(l).hoistableStyles,u=Tl(e);a=a||"default";var i=n.get(u);if(!i){var s={loading:0,preload:null};if(i=l.querySelector(mn(u)))s.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":a},t),(t=pa.get(u))&&Zs(e,t);var o=i=l.createElement("link");De(o),Me(o,"link",e),o._p=new Promise(function(m,E){o.onload=m,o.onerror=E}),o.addEventListener("load",function(){s.loading|=1}),o.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Ou(i,a,l)}i={type:"stylesheet",instance:i,count:1,state:s},n.set(u,i)}}}function Lh(e,a){Xa.X(e,a);var t=vl;if(t&&e){var l=Kt(t).hoistableScripts,n=Dl(e),u=l.get(n);u||(u=t.querySelector(hn(n)),u||(e=x({src:e,async:!0},a),(a=pa.get(n))&&Js(e,a),u=t.createElement("script"),De(u),Me(u,"link",e),t.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(n,u))}}function xh(e,a){Xa.M(e,a);var t=vl;if(t&&e){var l=Kt(t).hoistableScripts,n=Dl(e),u=l.get(n);u||(u=t.querySelector(hn(n)),u||(e=x({src:e,async:!0,type:"module"},a),(a=pa.get(n))&&Js(e,a),u=t.createElement("script"),De(u),Me(u,"link",e),t.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(n,u))}}function Zf(e,a,t,l){var n=(n=I.current)?Au(n):null;if(!n)throw Error(y(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(a=Tl(t.href),t=Kt(n).hoistableStyles,l=t.get(a),l||(l={type:"style",instance:null,count:0,state:null},t.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Tl(t.href);var u=Kt(n).hoistableStyles,i=u.get(e);if(i||(n=n.ownerDocument||n,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,i),(u=n.querySelector(mn(e)))&&!u._p&&(i.instance=u,i.state.loading=5),pa.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},pa.set(e,t),u||Bh(n,e,t,i.state))),a&&l===null)throw Error(y(528,""));return i}if(a&&l!==null)throw Error(y(529,""));return null;case"script":return a=t.async,t=t.src,typeof t=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Dl(t),t=Kt(n).hoistableScripts,l=t.get(a),l||(l={type:"script",instance:null,count:0,state:null},t.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(y(444,e))}}function Tl(e){return'href="'+oa(e)+'"'}function mn(e){return'link[rel="stylesheet"]['+e+"]"}function Jf(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function Bh(e,a,t,l){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=e.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),Me(a,"link",t),De(a),e.head.appendChild(a))}function Dl(e){return'[src="'+oa(e)+'"]'}function hn(e){return"script[async]"+e}function Ff(e,a,t){if(a.count++,a.instance===null)switch(a.type){case"style":var l=e.querySelector('style[data-href~="'+oa(t.href)+'"]');if(l)return a.instance=l,De(l),l;var n=x({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),De(l),Me(l,"style",n),Ou(l,t.precedence,e),a.instance=l;case"stylesheet":n=Tl(t.href);var u=e.querySelector(mn(n));if(u)return a.state.loading|=4,a.instance=u,De(u),u;l=Jf(t),(n=pa.get(n))&&Zs(l,n),u=(e.ownerDocument||e).createElement("link"),De(u);var i=u;return i._p=new Promise(function(s,o){i.onload=s,i.onerror=o}),Me(u,"link",l),a.state.loading|=4,Ou(u,t.precedence,e),a.instance=u;case"script":return u=Dl(t.src),(n=e.querySelector(hn(u)))?(a.instance=n,De(n),n):(l=t,(n=pa.get(u))&&(l=x({},t),Js(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),De(n),Me(n,"link",l),e.head.appendChild(n),a.instance=n);case"void":return null;default:throw Error(y(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,Ou(l,t.precedence,e));return a.instance}function Ou(e,a,t){for(var l=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,u=n,i=0;i<l.length;i++){var s=l[i];if(s.dataset.precedence===a)u=s;else if(u!==n)break}u?u.parentNode.insertBefore(e,u.nextSibling):(a=t.nodeType===9?t.head:t,a.insertBefore(e,a.firstChild))}function Zs(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function Js(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var Cu=null;function Wf(e,a,t){if(Cu===null){var l=new Map,n=Cu=new Map;n.set(t,l)}else n=Cu,l=n.get(t),l||(l=new Map,n.set(t,l));if(l.has(e))return l;for(l.set(e,null),t=t.getElementsByTagName(e),n=0;n<t.length;n++){var u=t[n];if(!(u[Ml]||u[Ne]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(a)||"";i=e+i;var s=l.get(i);s?s.push(u):l.set(i,[u])}}return l}function Pf(e,a,t){e=e.ownerDocument||e,e.head.insertBefore(t,a==="title"?e.querySelector("head > title"):null)}function wh(e,a,t){if(t===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function $f(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function zh(e,a,t,l){if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var n=Tl(l.href),u=a.querySelector(mn(n));if(u){a=u._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=Mu.bind(e),a.then(e,e)),t.state.loading|=4,t.instance=u,De(u);return}u=a.ownerDocument||a,l=Jf(l),(n=pa.get(n))&&Zs(l,n),u=u.createElement("link"),De(u);var i=u;i._p=new Promise(function(s,o){i.onload=s,i.onerror=o}),Me(u,"link",l),t.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,a),(a=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=Mu.bind(e),a.addEventListener("load",t),a.addEventListener("error",t))}}var Fs=0;function Hh(e,a){return e.stylesheets&&e.count===0&&_u(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var l=setTimeout(function(){if(e.stylesheets&&_u(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+a);0<e.imgBytes&&Fs===0&&(Fs=62500*Eh());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&_u(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Fs?50:800)+a);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Mu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_u(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Uu=null;function _u(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Uu=new Map,a.forEach(qh,e),Uu=null,Mu.call(e))}function qh(e,a){if(!(a.state.loading&4)){var t=Uu.get(e);if(t)var l=t.get(null);else{t=new Map,Uu.set(e,t);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<n.length;u++){var i=n[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(t.set(i.dataset.precedence,i),l=i)}l&&t.set(null,l)}n=a.instance,i=n.getAttribute("data-precedence"),u=t.get(i)||l,u===l&&t.set(null,n),t.set(i,n),this.count++,l=Mu.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),u?u.parentNode.insertBefore(n,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),a.state.loading|=4}}var yn={$$typeof:Ue,Provider:null,Consumer:null,_currentValue:B,_currentValue2:B,_threadCount:0};function Ih(e,a,t,l,n,u,i,s,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vu(0),this.hiddenUpdates=Vu(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function ed(e,a,t,l,n,u,i,s,o,m,E,S){return e=new Ih(e,a,t,i,o,m,E,S,s),a=1,u===!0&&(a|=24),u=ea(3,null,null,a),e.current=u,u.stateNode=e,a=Mi(),a.refCount++,e.pooledCache=a,a.refCount++,u.memoizedState={element:l,isDehydrated:t,cache:a},xi(u),e}function ad(e){return e?(e=el,e):el}function td(e,a,t,l,n,u){n=ad(n),l.context===null?l.context=n:l.pendingContext=n,l=lt(a),l.payload={element:t},u=u===void 0?null:u,u!==null&&(l.callback=u),t=nt(e,l,a),t!==null&&(Xe(t,e,a),kl(t,e,a))}function ld(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<a?t:a}}function Ws(e,a){ld(e,a),(e=e.alternate)&&ld(e,a)}function nd(e){if(e.tag===13||e.tag===31){var a=Ot(e,67108864);a!==null&&Xe(a,e,67108864),Ws(e,67108864)}}function ud(e){if(e.tag===13||e.tag===31){var a=ua();a=ku(a);var t=Ot(e,a);t!==null&&Xe(t,e,a),Ws(e,a)}}var Lu=!0;function Qh(e,a,t,l){var n=g.T;g.T=null;var u=D.p;try{D.p=2,Ps(e,a,t,l)}finally{D.p=u,g.T=n}}function Gh(e,a,t,l){var n=g.T;g.T=null;var u=D.p;try{D.p=8,Ps(e,a,t,l)}finally{D.p=u,g.T=n}}function Ps(e,a,t,l){if(Lu){var n=$s(l);if(n===null)qs(e,a,l,xu,t),sd(e,l);else if(Yh(n,e,a,t,l))l.stopPropagation();else if(sd(e,l),a&4&&-1<jh.indexOf(e)){for(;n!==null;){var u=Yt(n);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=Tt(u.pendingLanes);if(i!==0){var s=u;for(s.pendingLanes|=2,s.entangledLanes|=2;i;){var o=1<<31-Pe(i);s.entanglements[1]|=o,i&=~o}Oa(u),(J&6)===0&&(yu=Fe()+500,cn(0))}}break;case 31:case 13:s=Ot(u,2),s!==null&&Xe(s,u,2),Eu(),Ws(u,2)}if(u=$s(l),u===null&&qs(e,a,l,xu,t),u===n)break;n=u}n!==null&&l.stopPropagation()}else qs(e,a,l,null,t)}}function $s(e){return e=ai(e),eo(e)}var xu=null;function eo(e){if(xu=null,e=jt(e),e!==null){var a=Z(e);if(a===null)e=null;else{var t=a.tag;if(t===13){if(e=he(a),e!==null)return e;e=null}else if(t===31){if(e=Le(a),e!==null)return e;e=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return xu=e,null}function id(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Od()){case mo:return 2;case ho:return 8;case Tn:case Cd:return 32;case yo:return 268435456;default:return 32}default:return 32}}var ao=!1,yt=null,pt=null,Et=null,pn=new Map,En=new Map,gt=[],jh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sd(e,a){switch(e){case"focusin":case"focusout":yt=null;break;case"dragenter":case"dragleave":pt=null;break;case"mouseover":case"mouseout":Et=null;break;case"pointerover":case"pointerout":pn.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":En.delete(a.pointerId)}}function gn(e,a,t,l,n,u){return e===null||e.nativeEvent!==u?(e={blockedOn:a,domEventName:t,eventSystemFlags:l,nativeEvent:u,targetContainers:[n]},a!==null&&(a=Yt(a),a!==null&&nd(a)),e):(e.eventSystemFlags|=l,a=e.targetContainers,n!==null&&a.indexOf(n)===-1&&a.push(n),e)}function Yh(e,a,t,l,n){switch(a){case"focusin":return yt=gn(yt,e,a,t,l,n),!0;case"dragenter":return pt=gn(pt,e,a,t,l,n),!0;case"mouseover":return Et=gn(Et,e,a,t,l,n),!0;case"pointerover":var u=n.pointerId;return pn.set(u,gn(pn.get(u)||null,e,a,t,l,n)),!0;case"gotpointercapture":return u=n.pointerId,En.set(u,gn(En.get(u)||null,e,a,t,l,n)),!0}return!1}function od(e){var a=jt(e.target);if(a!==null){var t=Z(a);if(t!==null){if(a=t.tag,a===13){if(a=he(t),a!==null){e.blockedOn=a,vo(e.priority,function(){ud(t)});return}}else if(a===31){if(a=Le(t),a!==null){e.blockedOn=a,vo(e.priority,function(){ud(t)});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bu(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var t=$s(e.nativeEvent);if(t===null){t=e.nativeEvent;var l=new t.constructor(t.type,t);ei=l,t.target.dispatchEvent(l),ei=null}else return a=Yt(t),a!==null&&nd(a),e.blockedOn=t,!1;a.shift()}return!0}function cd(e,a,t){Bu(e)&&t.delete(a)}function Kh(){ao=!1,yt!==null&&Bu(yt)&&(yt=null),pt!==null&&Bu(pt)&&(pt=null),Et!==null&&Bu(Et)&&(Et=null),pn.forEach(cd),En.forEach(cd)}function wu(e,a){e.blockedOn===a&&(e.blockedOn=null,ao||(ao=!0,A.unstable_scheduleCallback(A.unstable_NormalPriority,Kh)))}var zu=null;function rd(e){zu!==e&&(zu=e,A.unstable_scheduleCallback(A.unstable_NormalPriority,function(){zu===e&&(zu=null);for(var a=0;a<e.length;a+=3){var t=e[a],l=e[a+1],n=e[a+2];if(typeof l!="function"){if(eo(l||t)===null)continue;break}var u=Yt(t);u!==null&&(e.splice(a,3),a-=3,$i(u,{pending:!0,data:n,method:t.method,action:l},l,n))}}))}function Rl(e){function a(o){return wu(o,e)}yt!==null&&wu(yt,e),pt!==null&&wu(pt,e),Et!==null&&wu(Et,e),pn.forEach(a),En.forEach(a);for(var t=0;t<gt.length;t++){var l=gt[t];l.blockedOn===e&&(l.blockedOn=null)}for(;0<gt.length&&(t=gt[0],t.blockedOn===null);)od(t),t.blockedOn===null&&gt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(l=0;l<t.length;l+=3){var n=t[l],u=t[l+1],i=n[Ge]||null;if(typeof u=="function")i||rd(t);else if(i){var s=null;if(u&&u.hasAttribute("formAction")){if(n=u,i=u[Ge]||null)s=i.formAction;else if(eo(n)!==null)continue}else s=i.action;typeof s=="function"?t[l+1]=s:(t.splice(l,3),l-=3),rd(t)}}}function fd(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return n=i})},focusReset:"manual",scroll:"manual"})}function a(){n!==null&&(n(),n=null),l||setTimeout(t,20)}function t(){if(!l&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(t,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),n!==null&&(n(),n=null)}}}function to(e){this._internalRoot=e}Hu.prototype.render=to.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(y(409));var t=a.current,l=ua();td(t,l,e,a,null,null)},Hu.prototype.unmount=to.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;td(e.current,2,null,e,null,null),Eu(),a[Gt]=null}};function Hu(e){this._internalRoot=e}Hu.prototype.unstable_scheduleHydration=function(e){if(e){var a=So();e={blockedOn:null,target:e,priority:a};for(var t=0;t<gt.length&&a!==0&&a<gt[t].priority;t++);gt.splice(t,0,e),t===0&&od(e)}};var dd=fe.version;if(dd!=="19.2.0")throw Error(y(527,dd,"19.2.0"));D.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=T(a),e=e!==null?W(e):null,e=e===null?null:e.stateNode,e};var Vh={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:g,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qu.isDisabled&&qu.supportsFiber)try{Al=qu.inject(Vh),We=qu}catch{}}return Sn.createRoot=function(e,a){if(!L(e))throw Error(y(299));var t=!1,l="",n=gr,u=br,i=Sr;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(n=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(i=a.onRecoverableError)),a=ed(e,1,!1,null,null,t,l,null,n,u,i,fd),e[Gt]=a.current,Hs(e),new to(a)},Sn.hydrateRoot=function(e,a,t){if(!L(e))throw Error(y(299));var l=!1,n="",u=gr,i=br,s=Sr,o=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(u=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.formState!==void 0&&(o=t.formState)),a=ed(e,1,!0,a,t??null,l,n,o,u,i,s,fd),a.context=ad(null),t=a.current,l=ua(),l=ku(l),n=lt(l),n.callback=null,nt(t,n,l),t=l,a.current.lanes=t,Cl(a,t),Oa(a),e[Gt]=a.current,Hs(e),new Hu(a)},Sn.version="19.2.0",Sn}var Td;function ay(){if(Td)return uo.exports;Td=1;function A(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A)}catch(fe){console.error(fe)}}return A(),uo.exports=ey(),uo.exports}var ty=ay();function ly(){const[A,fe]=Dd.useState(null),F=[{id:1,question:"1. Difference between Data and Information.",answer:"",codeExample:`
🟩 Difference between Data and Information

| Data                            | Information                                      |
| ------------------------------- | ------------------------------------------------ |
| Raw facts and figures.          | Processed and meaningful data.                   |
| Has no clear meaning by itself. | Has meaning and can be used for decision-making. |
| Example: 85, 90, 78             | Example: “The average marks are 84.”             |
| Input for processing.           | Output after processing.                         |
| Can be unorganized.             | Always organized and structured.                 |


🧠 In short:

Data is raw and unprocessed.
Information is data that has been processed into a useful form.

      `},{id:2,question:"2. Explain DBMS vs File System.",answer:"",codeExample:`
🟩 Difference between DBMS and File System

| DBMS (Database Management System)                     | File System                                                   |
| ------------------------------------------------------| --------------------------------------------------------------|
| Stores data in tables using a database.               | Stores data in files on the computer.                         |
| Provides data security and integrity.                 | No built-in security — data can be easily changed or lost.    |
| Reduces data redundancy (same data not stored twice). | High data redundancy (same data may be stored in many files). |
| Supports data sharing among multiple users.           | Difficult to share data among many users.                     |
| Allows easy backup and recovery.                      | Manual backup required.                                       |
| Uses SQL for data management.                         | No query language — user must write code manually.            |


🧠 In short:

A DBMS is an advanced system that stores, manages, and secures data efficiently.
A File System is a simple method of storing data in files without much control or features.

      `},{id:3,question:"3. List and explain Functions of DBMS.",answer:"",codeExample:`
🟩 Functions of DBMS

  A Database Management System (DBMS) performs several important functions to store, manage, and control data efficiently.


1️⃣ Data Storage Management

  DBMS stores data in tables inside databases.
  It handles how data is saved, organized, and retrieved from storage devices.
  🧩 Example: Saving student details in a database.


2️⃣ Data Retrieval

Allows users to fetch or view specific data using queries (like SQL).

  Makes data access fast and easy.
  🧩 Example: SELECT * FROM students WHERE grade = 'A';


3️⃣ Data Manipulation

  Supports operations like insert, update, delete, and search on data.
  🧩 Example: Adding a new record of a student.


4️⃣ Data Security

  Controls who can access or modify the data using authentication (like username & password) and authorization (permissions).


5️⃣ Backup and Recovery

  Automatically creates backups and helps recover data after system failure or crash.


6️⃣ Data Integrity

  Ensures accuracy and consistency of data using rules (like primary key, foreign key, etc.).
  🧩 Example: A student cannot have a duplicate roll number.


7️⃣ Data Independence

  Changes in database structure do not affect application programs.
  🧩 Example: Changing column size does not break your program.


8️⃣ Concurrency Control

  Allows multiple users to access data at the same time without conflict.
  🧩 Example: Two users updating different student records simultaneously.


✅ In short:
  DBMS manages data efficiently by storing, retrieving, securing, and maintaining it — ensuring accuracy and reliability.
      `},{id:4,question:"4. Explain Three-Schema Architecture with diagram.",answer:"",codeExample:`
🟩 Three-Schema Architecture of DBMS

The Three-Schema Architecture describes how a database system is structured into three levels —
  1️⃣ External Schema
  2️⃣ Conceptual Schema
  3️⃣ Internal Schema

This model was proposed by ANSI/SPARC to separate user views, logical structure, and physical storage.

🧭 Diagram (Simple Text Format)
        +-----------------------------+
        |     External Level          |
        | (User Views / Applications) |
        +-------------↑---------------+
                      |
        +-------------|---------------+
        |     Conceptual Level        |
        | (Logical structure of DB)   |
        +-------------↑---------------+
                      |
        +-------------|---------------+
        |     Internal Level          |
        | (Physical storage of data)  |
        +-----------------------------+



🧩 1️⃣ External Level (View Level)

  It is the top level.
  Shows how users view the data.
  Each user/application can have a different view of the same database.

🧠 Example:
  A student sees only marks and name, while the admin sees all details (fees, address, etc.).



🧩 2️⃣ Conceptual Level (Logical Level)

  Describes the structure of the entire database.   
  Defines entities, attributes, relationships, and constraints.
  It hides how data is stored physically.

🧠 Example:
  Defining tables like Students(roll_no, name, marks) and Courses(course_id, course_name).



🧩 3️⃣ Internal Level (Physical Level)

  The lowest level.
  Deals with how data is actually stored in memory (files, indexes, etc.).
  Focuses on storage space, access paths, and performance.

🧠 Example:
  Data stored in hard disks, indexes, or data blocks.


💡 Main Advantage

✅ Provides data abstraction — each level hides details of the next level.
✅ Makes database easier to manage and modify without affecting users.


🧠 In short:

External: User view
Conceptual: Logical view
Internal: Physical storage view
      `},{id:5,question:"5. Define Data Models and explain their types.",answer:"",codeExample:`
🟩 Definition: Data Model

A Data Model is a way to describe how data is stored, connected, and processed inside a database.
It provides a framework to design the structure of the database and relationships among data.

🧠 In short:
    A data model defines how data is represented and organized in the database.

🟦 Types of Data Models


1️⃣ Hierarchical Data Model

  Data is organized in a tree-like structure.
  Each record has one parent and many children (one-to-many relationship).
  Uses parent-child relationship.

🧩 Example:

Company
 ├── Department
 │     ├── Employee1
 │     └── Employee2


🟢 Used in: IBM’s Information Management System (IMS)

Diagram:
             Company
                |
       +--------+--------+
       |                 |
   Department1       Department2
       |                 |
   +---+---+         +---+---+
   |       |         |       |
Employee1 Employee2 Employee3 Employee4


  A Company has many Departments,
  Each Department has many Employees.
🧠 Used in: IBM IMS



2️⃣ Network Data Model

  Data is organized using pointers or links.
  A record can have multiple parents and children (many-to-many relationship).
  More flexible than hierarchical model.

🧩 Example:
A student can enroll in many courses, and each course can have many students.

Diagram:
   +-----------+         +-----------+
   |  Student  | <-----> |  Course   |
   +-----------+         +-----------+
   | S_ID      |         | C_ID      |
   | S_Name    |         | C_Name    |
   +-----------+         +-----------+

Example:
  A Student can enroll in many Courses.
  A Course can have many Students.

🧠 Used in: IDMS (Integrated Data Management System)



3️⃣ Relational Data Model

  Data is stored in tables (relations) with rows and columns.
  Each table has a primary key.
  Uses SQL to manage data.
  Most commonly used model.

🧩 Example:

| Student_ID | Name | Course |
| ---------- | ---- | ------ |
| 101        | Raj  | DBMS   |
| 102        | Neha | Java   |

Example:
  Data stored in tables.
  Each record (row) is unique and identified by StudentID.
🧠 Used in: MySQL, Oracle, PostgreSQL



4️⃣ Entity-Relationship (ER) Model

  Represents data using entities, attributes, and relationships.
  Usually drawn as ER diagrams.
  Used in database design phase.

Example:

Entity: STUDENT, COURSE
Relationship: enrolls_in
Attributes: RollNo, Name, CourseID, Title

Diagram:

 [STUDENT] --------< enrolls_in >-------- [COURSE]
     |                                        |
  (RollNo, Name)                       (CourseID, Title)

🧠 Used for: Database schema design before creating tables


5️⃣ Object-Oriented Data Model

  Data is stored as objects, similar to OOP (Object-Oriented Programming).
  Supports inheritance, encapsulation, and polymorphism.
  Used in advanced applications.

🧩 Example:
A Student object with properties (name, age) and methods (display()).

Diagram:

          +------------------+
          |     Person       |
          |------------------|
          | name, age        |
          +------------------+
                 ^
                 |
     +----------------------+
     |      Student         |
     |----------------------|
     | rollNo, course       |
     | displayDetails()     |
     +----------------------+

Example:

  Class Person → Parent class
  Class Student → Child class inherits Person
  Stores data as objects with attributes and methods

🧠 Used in: Object databases (e.g., db4o, ObjectDB)



🧠 In short summary:

| Type            | Structure     | Relationship Type        |
| --------------- | ------------- | ------------------------ |
| Hierarchical    | Tree          | One-to-Many              |
| Network         | Graph         | Many-to-Many             |
| Relational      | Table         | Relations via keys       |
| ER Model        | Diagram       | Entities & Relationships |
| Object-Oriented | Objects       | Inheritance & Methods    |

      `},{id:6,question:"6. Explain Components of DBMS.",answer:"",codeExample:`
🟩 Components of DBMS

A Database Management System (DBMS) is made up of several components that work together to store, manage, and control access to data efficiently.


🧩 1️⃣ Hardware

  The physical devices used to store and run the database.
  Includes computers, servers, hard disks, and storage devices.

🧠 Example: Hard drive storing all student records.



🧩 2️⃣ Software

  The actual DBMS software (like MySQL, Oracle, SQL Server) and related programs.
  Controls how data is stored, retrieved, and updated.

🧠 Example: MySQL software that processes your SQL queries.



🧩 3️⃣ Data

  The main content stored in the database.
  Can be user data, metadata (data about data), or system data.

🧠 Example: Student table data (roll_no, name, marks).



🧩 4️⃣ Users

People who interact with the database.
There are 3 main types:

  Database Administrator (DBA): Manages the database.
  Application Programmer: Writes code to access data.
  End User: Uses the application to view or enter data.

🧠 Example: Teacher entering marks, student viewing results.



🧩 5️⃣ Procedures

  Instructions and rules for using and managing the database.
  Define how data should be stored, accessed, and updated safely.

🧠 Example: Backup procedure or data entry guidelines.



🧩 6️⃣ Database Access Language

  A special language used to communicate with the DBMS.
  In most systems, this is SQL (Structured Query Language).

🧠 Example:
  SELECT * FROM Students;



🧠 In short summary:
| Component       | Description         | Example                   |
| --------------- | ------------------- | ------------------------- |
| Hardware        | Physical devices    | Hard disk, server         |
| Software        | DBMS & programs     | Oracle, MySQL             |
| Data            | Stored information  | Tables, records           |
| Users           | People using DB     | DBA, programmer, end user |
| Procedures      | Rules & methods     | Backup process            |
| Access Language | Used to access data | SQL                       |


✅ In short:

A DBMS works through hardware, software, data, users, procedures, and language to manage databases efficiently.

      `},{id:7,question:"7. Explain Advantages and Disadvantages of file-based system.",answer:"",codeExample:`
🟩 File-Based System

A File-Based System is the traditional method of storing data in separate files on a computer.
Each application manages its own data file (e.g., text files, spreadsheets).

🧠 Example:
A library has separate files for books.txt, members.txt, and loans.txt.

🟢 Advantages of File-Based System

1️⃣ Simple and Easy to Use
  Easy to create and manage using basic programs like C, C++, or Excel.


2️⃣ Low Cost
  No need for expensive database software — just file storage.


3️⃣ Faster for Small Data
  Works quickly for small amounts of data since no DBMS overhead.


4️⃣ Backup is Easy
  Files can be easily copied or moved for backup.


5️⃣ Less Hardware Requirement
  Works on systems with limited resources (no database server needed).

🔴 Disadvantages of File-Based System

1️⃣ Data Redundancy
  Same data may be stored in multiple files → wastes space.


2️⃣ Data Inconsistency
  When the same data is updated in one file but not in others → mismatch.


3️⃣ Lack of Security
  No built-in protection — anyone can access or modify files.


4️⃣ Difficult Data Sharing
  Hard to share data between applications or multiple users.


5️⃣ No Data Relationships
  Cannot easily link data between files (like in relational databases).


6️⃣ Manual Backup and Recovery
  Must handle backup and restore manually if data is lost.


7️⃣ Poor Data Integrity
  No rules (like primary key or constraints) to keep data accurate.

🧠 In short:

Advantages: Simple, cheap, easy for small data.
Disadvantages: Redundancy, no security, no sharing, inconsistency.

      `},{id:8,question:"8. What is Data Independence and its types?",answer:"",codeExample:`
🟩 What is Data Independence?

Data Independence means the ability to change the structure of the database at one level without affecting the other levels.
It helps to separate data storage and data usage, so that users don’t have to worry about how data is actually stored.


🧠 In simple words:
  You can change the way data is stored without changing your program.


📊 Data Independence comes from the Three-Schema Architecture:

    External Level  ←→  Conceptual Level  ←→  Internal Level


There are two types of Data Independence 👇


🟢 1️⃣ Logical Data Independence

  Ability to change the conceptual schema (logical structure) without changing the external views or application programs.
  In other words, users are not affected if you change the database design.

🧩 Example:
Adding a new column “email” to the Student table doesn’t require changes in programs that don’t use it.

🧠 Goal: Protect users from changes in the logical design of data.




🟣 2️⃣ Physical Data Independence

  Ability to change the internal schema (storage structure) without changing the conceptual schema.
  Means you can modify how data is stored (e.g., using indexes or files) without affecting database structure.

🧩 Example:
Storing data on SSD instead of HDD or creating an index — but table design remains the same.

🧠 Goal: Protect users and programs from changes in physical storage.


---------------------------

🧠 In short summary:

| Type                       | Definition                                                   | Example                                  |
| -------------------------- | ------------------------------------------------------------ | ---------------------------------------- |
| Logical Data Independence  | Change in logical structure doesn’t affect user view.        | Add/remove column in table.              |
| Physical Data Independence | Change in physical storage doesn’t affect logical structure. | Move data to new hard disk or add index. |


✅ In short:
  Data Independence helps in making databases flexible, easy to maintain, and less dependent on hardware or structure.

      `},{id:9,question:"9. What are the types of databases?",answer:"",codeExample:`
🟩 Types of Databases

A database is an organized collection of data that can be easily accessed, managed, and updated.
There are different types of databases based on data storage, structure, and usage.


🟢 1️⃣ Centralized Database

  All data is stored in one central location.
  Users from different places access it through a network.

🧠 Example:
A bank stores all customer data in one central server.

🟢 Advantage: Easy to manage and backup.
🔴 Disadvantage: If the central server fails, the system stops working.


🟣 2️⃣ Distributed Database

  Data is stored in multiple locations (servers) connected by a network.
  Looks like one single database to users.

🧠 Example:
Google or Amazon — data is stored across many servers worldwide.

🟢 Advantage: Fast access and fault tolerance.
🔴 Disadvantage: Complex to maintain and synchronize.


🔵 3️⃣ Relational Database (RDBMS)

  Data is stored in tables (rows and columns).
  Tables are related using keys (primary, foreign).
  Uses SQL to manage data.

🧠 Example: MySQL, Oracle, PostgreSQL.

🟢 Advantage: Easy to use and ensures data integrity.


🟠 4️⃣ Object-Oriented Database

  Data is stored as objects (like in OOP).
  Each object has data (attributes) and functions (methods).

🧠 Example: ObjectDB, db4o.

🟢 Advantage: Works well with object-oriented programming languages.


🟤 5️⃣ Hierarchical Database

  Data is arranged in a tree-like structure (parent-child relationship).
  One parent can have many children.

🧠 Example: IBM Information Management System (IMS).

🟢 Advantage: Fast access for one-to-many data.
🔴 Disadvantage: Difficult to modify structure.


🟣 6️⃣ Network Database

  Similar to hierarchical but allows many-to-many relationships.
  Uses pointers to connect records.

🧠 Example: Integrated Data Store (IDS).

🟢 Advantage: Flexible structure.
🔴 Disadvantage: Complex to design.


🟢 7️⃣ NoSQL Database

  Used for unstructured or big data.
  Does not use tables like relational databases.
  Types: Key-Value, Document, Column, Graph.

🧠 Example: MongoDB, Cassandra, Redis.
🟢 Advantage: Scalable and fast for large data.


🧠 In short summary:

| Type            | Structure / Storage      | Example        |
| --------------- | ------------------------ | -------------- |
| Centralized     | One central location     | Bank database  |
| Distributed     | Multiple connected sites | Google servers |
| Relational      | Tables (SQL)             | MySQL          |
| Object-Oriented | Objects                  | ObjectDB       |
| Hierarchical    | Tree structure           | IMS            |
| Network         | Graph links              | IDS            |
| NoSQL           | Unstructured data        | MongoDB        |


✅ In short:
Databases can be centralized or distributed, and can store data in tables, trees, graphs, or documents depending on the need.
      `},{id:10,question:"10. Explain Characteristics of Data in Database.",answer:"",codeExample:`
🟩 Characteristics of Data in a Database

Data stored in a database has some important characteristics that make it useful, reliable, and easy to manage.


🟢 1️⃣ Accuracy

  Data must be correct and error-free.
  Ensures reliable decision-making.

🧠 Example: A student’s marks should be exactly as entered in exams.


🟣 2️⃣ Consistency

  Data should be uniform across the database.
  Same information should not conflict in different places.

🧠 Example: If a student’s grade is “A” in one table, it should not show “B” in another table.


🔵 3️⃣ Completeness

  All required data must be present.
  Missing data can cause errors in processing.

🧠 Example: Every student record should have roll number, name, and marks.


🟠 4️⃣ Timeliness / Up-to-date

  Data should be current and updated regularly.
  Outdated data may lead to wrong decisions.

🧠 Example: Updated attendance of students every day.


🟤 5️⃣ Uniqueness / Non-redundancy

  Each data item should be stored only once.
  Avoids unnecessary duplication.

🧠 Example: Student ID should be unique — no two students have the same ID.


🟢 6️⃣ Validity / Integrity

  Data must satisfy certain rules or constraints.
  Ensures data is meaningful and logical.

🧠 Example: Marks of a student cannot be negative; email should have “@”.


🟠 7️⃣ Accessibility

  Data should be easily retrievable when needed by authorized users.

🧠 Example: Teachers can quickly access student marks using queries.


🧠 In short summary:
| Characteristic     | Meaning / Example             |
| ------------------ | ----------------------------- |
| Accuracy           | Correct and error-free        |
| Consistency        | Uniform across database       |
| Completeness       | All required data present     |
| Timeliness         | Up-to-date information        |
| Uniqueness         | No duplication, unique keys   |
| Integrity          | Follows rules and constraints |
| Accessibility      | Easy to retrieve when needed  |

✅ In short:

Data in a database should be accurate, consistent, complete, timely, unique, valid, and easily accessible to be useful and reliable.
      `},{id:11,question:"11. Explain the structure of PL/SQL block.",answer:"",codeExample:`
🟩 PL/SQL Block Structure

A PL/SQL program is written as a block of code.
It has three main sections:

DECLARE  -- Optional
   -- Declaration of variables, constants, cursors
BEGIN    -- Mandatory
   -- Executable statements (logic of the program)
EXCEPTION  -- Optional
   -- Error handling statements
END;     -- Mandatory



🟢 1️⃣ Declaration Section (DECLARE)

  Optional section.
  Used to declare variables, constants, cursors, or types.
  Only variables that are declared here can be used in the BEGIN section.

🧩 Example:

DECLARE
   v_name VARCHAR2(20);
   v_age  NUMBER;



🟣 2️⃣ Execution Section (BEGIN)

  Mandatory section.
  Contains all the PL/SQL statements to perform operations like calculations, queries, updates, etc.

🧩 Example:

BEGIN
   v_name := 'Raj';
   v_age := 20;
   DBMS_OUTPUT.PUT_LINE('Name: ' || v_name || ', Age: ' || v_age);
END;



🟤 3️⃣ Exception Section (EXCEPTION)

  Optional section.
  Handles errors and exceptions that occur in the execution section.
  Ensures program does not terminate abruptly.

🧩 Example:

EXCEPTION
   WHEN ZERO_DIVIDE THEN
      DBMS_OUTPUT.PUT_LINE('Error: Division by zero!');
   WHEN OTHERS THEN
      DBMS_OUTPUT.PUT_LINE('Some other error occurred.');

🟠 Complete Example of PL/SQL Block

DECLARE
   v_num1 NUMBER := 10;
   v_num2 NUMBER := 0;
   v_result NUMBER;
BEGIN
   v_result := v_num1 / v_num2;  -- This will cause division by zero
   DBMS_OUTPUT.PUT_LINE('Result: ' || v_result);
EXCEPTION
   WHEN ZERO_DIVIDE THEN
      DBMS_OUTPUT.PUT_LINE('Cannot divide by zero!');
END;


Output:
Cannot divide by zero!


🧠 In short summary
| Section     | Purpose                               | Mandatory/Optional     |
| ----------- | ------------------------------------- | ---------------------- |
| DECLARE     | Declare variables, constants, cursors | Optional               |
| BEGIN       | Executable statements                 | Mandatory              |
| EXCEPTION   | Handle runtime errors                 | Optional               |
| END         | End of PL/SQL block                   | Mandatory              |


✅ Memory Tip for Exams:

“D-B-E-E” → Declare, Begin, Execute, Exception, End

      `},{id:12,question:"12. Write syntax and example for cursor declaration and working.",answer:"",codeExample:`
🟩 What is a Cursor?

A cursor is a pointer that allows you to fetch rows from a result set one by one.
It is used when a query returns more than one row.

🟢 Types of Cursors

Implicit Cursor – Automatically created by PL/SQL for simple queries (like SELECT INTO).

Explicit Cursor – Defined by the programmer for queries returning multiple rows.

Here we focus on Explicit Cursor.

🟦 Syntax of Explicit Cursor
-- 1. Cursor Declaration
CURSOR cursor_name IS
   SELECT_statement;

-- 2. Cursor Opening
OPEN cursor_name;

-- 3. Fetching Data
FETCH cursor_name INTO variable1, variable2, ...;

-- 4. Cursor Closing
CLOSE cursor_name;



🟢 Example of Cursor

DECLARE
   -- Cursor Declaration
   CURSOR emp_cursor IS
      SELECT emp_id, emp_name FROM employees;

   -- Variables to hold fetched data
   v_id employees.emp_id%TYPE;              //%TYPE means: take the same data type as that column in the table.
   v_name employees.emp_name%TYPE;            So if emp_id is a NUMBER and emp_name is VARCHAR2(50), these variables match automatically.
BEGIN
   -- Open the cursor
   OPEN emp_cursor;

   -- Loop to fetch all rows
   LOOP
      FETCH emp_cursor INTO v_id, v_name;
      EXIT WHEN emp_cursor%NOTFOUND;  -- Exit loop when no more rows
      DBMS_OUTPUT.PUT_LINE('ID: ' || v_id || ', Name: ' || v_name);
   END LOOP;

   -- Close the cursor
   CLOSE emp_cursor;
END;



🧠 Key Points

%NOTFOUND → Returns TRUE if no more rows to fetch.
OPEN → Starts the cursor.
FETCH → Retrieves one row at a time.
CLOSE → Releases resources used by cursor.

🟠 In short:

Cursor = Pointer to handle multiple rows.
Steps: Declare → Open → Fetch → Close
      `},{id:13,question:"13. Explain the working of cursor with example.",answer:"",codeExample:`
🟩 Working of Cursor

A cursor works like a pointer that goes through the rows returned by a query one by one.


Steps to work with an explicit cursor:

1️⃣ Declare the Cursor – Define the query and name the cursor.
2️⃣ Open the Cursor – Establish the result set for processing.
3️⃣ Fetch Data – Retrieve rows one by one from the cursor into variables.
4️⃣ Check for End – Use %NOTFOUND to know if all rows are fetched.
5️⃣ Close the Cursor – Release resources used by the cursor.



🟢 Flow Diagram of Cursor Working

Declare Cursor
      ↓
Open Cursor
      ↓
Fetch Row into Variables
      ↓
Check %NOTFOUND → If TRUE, Exit Loop
      ↓
Process Row (e.g., display values)
      ↓
Repeat Fetch until all rows are processed
      ↓
Close Cursor



🟦 Example of Cursor Working

DECLARE
   -- Step 1: Declare cursor
   CURSOR emp_cursor IS
      SELECT emp_id, emp_name FROM employees;

   -- Variables to store fetched data
   v_id employees.emp_id%TYPE;
   v_name employees.emp_name%TYPE;
BEGIN
   -- Step 2: Open cursor
   OPEN emp_cursor;

   -- Step 3 & 4: Fetch and loop through all rows
   LOOP
      FETCH emp_cursor INTO v_id, v_name;
      EXIT WHEN emp_cursor%NOTFOUND;  -- Exit when no more rows

      -- Step 5: Process row
      DBMS_OUTPUT.PUT_LINE('ID: ' || v_id || ', Name: ' || v_name);
   END LOOP;

   -- Step 6: Close cursor
   CLOSE emp_cursor;
END;


🧠 Explanation in Simple Words

  Cursor points to the first row.
  Fetch gets the data of that row into variables.
  Loop moves cursor to the next row until all rows are processed.
  Close releases resources.


🟠 Short Exam Note

Cursor working = Declare → Open → Fetch → Process → Loop → Close

      `},{id:14,question:"14. Differentiate between cursor and trigger.",answer:"",codeExample:`
| Cursor                                                     | Trigger                                                                                  |
| -----------------------------------------------------------| ---------------------------------------------------------------------------------------- |
| A pointer to fetch rows from a query result set one by one.| A special procedure that automatically executes when a specific event occurs on a table. |
| Manually controlled by the programmer.                     | Automatically executed by the database system.                                           |
| Used to process multiple rows returned by a query.         | Used to enforce rules, constraints, or audit changes.                                    |
| Works when explicitly opened, fetched, and closed.         | Works before or after insert, update, or delete operations.                              |
| Local to the PL/SQL block where it is declared.            | Defined at table or view level and persists in the database.                             |
| Example: Fetch all student records to display one by one.  | Example: Automatically update last_modified column when a record is updated.             |


🟢 Cursor Example

DECLARE
   CURSOR c1 IS SELECT emp_id, emp_name FROM employees;
   v_id employees.emp_id%TYPE;
   v_name employees.emp_name%TYPE;
BEGIN
   OPEN c1;
   LOOP
      FETCH c1 INTO v_id, v_name;
      EXIT WHEN c1%NOTFOUND;
      DBMS_OUTPUT.PUT_LINE('ID: ' || v_id || ', Name: ' || v_name);
   END LOOP;
   CLOSE c1;
END;



🟢 Trigger Example

CREATE OR REPLACE TRIGGER update_timestamp    //if triger is already exist than replace
BEFORE UPDATE ON employees
FOR EACH ROW
BEGIN
   :NEW.last_modified := SYSDATE;            //update the last_modified fillds set (SYSDATE) system current date 
END;


---------------------------------------------------------------------------------------

:NEW and :OLD — Special Variables

Oracle provides two pseudo-records inside triggers:
| Variable | Refers to                                                | Used in                           |
| -------- | -------------------------------------------------------- | --------------------------------- |
| :OLD     | The original (existing) value in the table before update | BEFORE or AFTER UPDATE            |
| :NEW     | The new value that will be written to the table          | BEFORE or AFTER INSERT/UPDATE     |


🧠 What is SYSDATE?

👉 SYSDATE is a built-in Oracle function that returns the current date and time of the database server system.

It includes:

  Date (day, month, year)
  Time (hour, minute, second)
`},{id:15,question:"15. Explain types of triggers with syntax.",answer:"",codeExample:`
🟩 Trigger in PL/SQL

A trigger is a block of PL/SQL code that automatically executes (fires) when a specific event occurs on a table or view.
👉 Example: When a new record is inserted, updated, or deleted.

🟢 Types of Triggers

There are two main classifications of triggers:


🟠 1. Based on Timing
| Type               | Explanation                                                                               | Syntax Example                                                                                                                                       |
| -------------------| ------------------------------------------------------------------------------------------| -----------------------------------------------------------------------------------------------------------------------------------------------------|
| BEFORE Trigger     | Executes before the triggering event (like before inserting, updating, or deleting data). | sql CREATE OR REPLACE TRIGGER before_emp_insert BEFORE INSERT ON employees FOR EACH ROW BEGIN DBMS_OUTPUT.PUT_LINE('Before Insert'); END;            |
| AFTER Trigger      | Executes after the triggering event.                                                      | sql CREATE OR REPLACE TRIGGER after_emp_insert AFTER INSERT ON employees FOR EACH ROW BEGIN DBMS_OUTPUT.PUT_LINE('After Insert'); END;               |
| INSTEAD OF Trigger | Used mainly for views, replaces the triggering action with custom logic.                  | sql CREATE OR REPLACE TRIGGER instead_of_emp_update INSTEAD OF UPDATE ON emp_view FOR EACH ROW BEGIN DBMS_OUTPUT.PUT_LINE('Instead of Update'); END; |



🟢 2. Based on Event
| Type           | Explanation                      | Syntax Example                                                                                                                      |
| ---------------| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------|
| INSERT Trigger | Fires when a record is inserted. | sql CREATE OR REPLACE TRIGGER trg_insert BEFORE INSERT ON employees FOR EACH ROW BEGIN DBMS_OUTPUT.PUT_LINE('Insert Trigger'); END; |
| UPDATE Trigger | Fires when a record is updated.  | sql CREATE OR REPLACE TRIGGER trg_update AFTER UPDATE ON employees FOR EACH ROW BEGIN DBMS_OUTPUT.PUT_LINE('Update Trigger'); END;  |
| DELETE Trigger | Fires when a record is deleted.  | sql CREATE OR REPLACE TRIGGER trg_delete BEFORE DELETE ON employees FOR EACH ROW BEGIN DBMS_OUTPUT.PUT_LINE('Delete Trigger'); END; |


🧠 In short:

  BEFORE Trigger → Runs before action.
  AFTER Trigger → Runs after action.
  INSTEAD OF Trigger → Used for views.
  INSERT / UPDATE / DELETE Triggers → Run on specific events.
`},{id:16,question:"16. Write syntax of CREATE TRIGGER and DROP TRIGGER.",answer:"",codeExample:`
🟩 1️⃣ CREATE TRIGGER – Syntax

Used to create a new trigger in PL/SQL.

✅ Syntax:
CREATE [OR REPLACE] TRIGGER trigger_name
{BEFORE | AFTER | INSTEAD OF}
{INSERT | UPDATE | DELETE}
ON table_name
[FOR EACH ROW]
BEGIN
   -- Trigger logic (what should happen)
END;


🟢 Example:
CREATE OR REPLACE TRIGGER trg_before_insert
BEFORE INSERT ON employees
FOR EACH ROW
BEGIN
   DBMS_OUTPUT.PUT_LINE('Before inserting a new employee record');
END;


🧠 Explanation:
This trigger executes before inserting a new record into the employees table.



🟩 2️⃣ DROP TRIGGER – Syntax

Used to remove (delete) an existing trigger from the database.

✅ Syntax:
      DROP TRIGGER trigger_name;


🟢 Example:
      DROP TRIGGER trg_before_insert;

🧠 Explanation:
This command deletes the trigger named trg_before_insert from the database.


🧠 In Short:

  CREATE TRIGGER → To make a trigger.
  DROP TRIGGER → To delete a trigger.
  BEFORE | AFTER | INSTEAD OF → Defines when it should execute.

      `},{id:17,question:"17. Explain advantages and disadvantages of triggers.",answer:"",codeExample:`
🟩 Advantages of Triggers

1️⃣ Automatic Execution
  Triggers run automatically when an event (INSERT, UPDATE, DELETE) happens — no need to call them manually.

2️⃣ Enforces Data Integrity
  Ensures valid and consistent data in tables (e.g., checking business rules before data insertion).

3️⃣ Maintains Audit Trail
  Keeps a history of changes automatically (e.g., who updated or deleted a record).

4️⃣ Reduces Repeated Code
  Common actions can be handled once in a trigger instead of writing the same code in multiple programs.

5️⃣ Cascading Actions
  Can perform related updates automatically in other tables (e.g., when deleting an employee, delete related records).


🔴 Disadvantages of Triggers

1️⃣ Difficult to Debug
  Since triggers run automatically, it’s hard to trace or find errors in them.

2️⃣ Hidden Logic
  Business logic in triggers is not always visible in the main code — making programs harder to understand.

3️⃣ Performance Overhead
  If too many triggers fire at once, they can slow down database operations.

4️⃣ Complex Maintenance
  Multiple triggers on one table can cause confusion and unexpected results.

5️⃣ Limited Control
  You cannot manually control trigger execution order (except with careful design).


🧠 In Short:

✅ Advantages: Auto execution, data integrity, audit, less code.
❌ Disadvantages: Hard to debug, hidden logic, slower performance.
      `},{id:18,question:"18. Difference between explicit and implicit cursors.",answer:"",codeExample:`
🟩 Difference between Explicit and Implicit Cursor
    
| Explicit Cursor                                                    | Implicit Cursor                                                   |
| -------------------------------------------------------------------| ------------------------------------------------------------------|
| Declared manually by the programmer.                               | Created automatically by Oracle for every SQL statement.          |
| Used when a query returns multiple rows.                           | Used when a query returns only one row.                           |
| Requires explicit steps — DECLARE, OPEN, FETCH, and CLOSE.         | Oracle automatically opens, fetches, and closes it.               |
| Gives better control over fetching data.                           | Has less control, used for simple operations.                     |
| Example: Processing multiple employee records.                     | Example: Fetching one employee record using SELECT INTO.          |
| Uses attributes like %FOUND, %NOTFOUND, %ROWCOUNT, %ISOPEN.        | Uses similar attributes with prefix SQL%FOUND, SQL%NOTFOUND, etc. |



🟢 Example of Explicit Cursor

DECLARE
   CURSOR c1 IS SELECT emp_name FROM employees;
   v_name employees.emp_name%TYPE;
BEGIN
   OPEN c1;
   LOOP
      FETCH c1 INTO v_name;
      EXIT WHEN c1%NOTFOUND;
      DBMS_OUTPUT.PUT_LINE(v_name);
   END LOOP;
   CLOSE c1;
END;


🟢 Example of Implicit Cursor

DECLARE
   v_name employees.emp_name%TYPE;
BEGIN
   SELECT emp_name INTO v_name FROM employees WHERE emp_id = 101;
   DBMS_OUTPUT.PUT_LINE('Employee Name: ' || v_name);
END;

🧠 In short:

Explicit Cursor → You create and control it (for many rows).
Implicit Cursor → Oracle handles it automatically (for one row).
      `},{id:19,question:"19. Explain PL/SQL block components with example.",answer:"",codeExample:`
🟩 PL/SQL Block

A PL/SQL block is the basic unit of a PL/SQL program.
It groups together related declarations and statements into one logical block.

🧠 Think of it like a small program inside Oracle.

🟢 Structure (Components) of a PL/SQL Block

A PL/SQL block has 3 main sections:

[1] Declaration Section   (Optional)
[2] Execution Section     (Mandatory)
[3] Exception Section     (Optional)



🔹 1️⃣ Declaration Section

Used to declare variables, constants, cursors, etc.
Starts with the keyword DECLARE.

📘 Example:

DECLARE
   emp_id NUMBER;
   emp_name VARCHAR2(30);



🔹 2️⃣ Execution Section

Contains the main logic — SQL and PL/SQL statements.
Starts with the keyword BEGIN and ends with END;.
This part must be present in every PL/SQL block.

📘 Example:

BEGIN
   emp_id := 101;
   emp_name := 'Raj';
   DBMS_OUTPUT.PUT_LINE('Employee ID: ' || emp_id);
   DBMS_OUTPUT.PUT_LINE('Employee Name: ' || emp_name);
END;



🔹 3️⃣ Exception Section

Handles errors or exceptions that may occur during execution.
Starts with the keyword EXCEPTION.

📘 Example:

EXCEPTION
   WHEN OTHERS THEN
      DBMS_OUTPUT.PUT_LINE('An error occurred!');



🟦 Full Example of a PL/SQL Block

DECLARE
   emp_id NUMBER := 101;
   emp_name VARCHAR2(30) := 'Raj';
BEGIN
   DBMS_OUTPUT.PUT_LINE('Employee ID: ' || emp_id);
   DBMS_OUTPUT.PUT_LINE('Employee Name: ' || emp_name);
EXCEPTION
   WHEN OTHERS THEN
      DBMS_OUTPUT.PUT_LINE('An error occurred!');
END;


🧠 In short:
| Section     | Purpose                             |
| ------------| ----------------------------------- |
| Declaration | Define variables and constants      |
| Execution   | Write main logic and SQL statements |
| Exception   | Handle runtime errors               |
`},{id:20,question:"20. Write a cursor-based stored procedure example.",answer:"",codeExample:`
  🟩 Cursor-Based Stored Procedure

A stored procedure is a named block of PL/SQL code stored in the database.
A cursor-based stored procedure uses a cursor to process multiple rows one by one from a query.


🟢 Example: Display all employee names using a cursor

CREATE OR REPLACE PROCEDURE display_employees IS
   -- Step 1: Declare cursor
   CURSOR emp_cursor IS
      SELECT emp_id, emp_name FROM employees;

   -- Step 2: Declare variables to hold fetched values
   v_id employees.emp_id%TYPE;
   v_name employees.emp_name%TYPE;
BEGIN
   -- Step 3: Open the cursor
   OPEN emp_cursor;

   -- Step 4: Fetch each row using a loop
   LOOP
      FETCH emp_cursor INTO v_id, v_name;
      EXIT WHEN emp_cursor%NOTFOUND;  -- Exit when no more rows
      DBMS_OUTPUT.PUT_LINE('ID: ' || v_id || ' | Name: ' || v_name);
   END LOOP;

   -- Step 5: Close the cursor
   CLOSE emp_cursor;
END;
/



🟦 To Execute the Procedure
BEGIN
   display_employees;
END;
/


🧠 Step-by-step Explanation

1️⃣ Declare Cursor → Defines which data to fetch (here, all employees).
2️⃣ Open Cursor → Executes the SQL query.
3️⃣ Fetch Cursor → Gets one row at a time into variables.
4️⃣ Loop → Repeats fetching until all rows are read.
5️⃣ Close Cursor → Frees the memory used by the cursor.


🟢 In short:

Cursor-based Stored Procedure = Stored Procedure + Cursor
→ Used to process multiple rows automatically.


---------------------------------------------------------------------------------------

what is Stored Procedure

🟩 Stored Procedure (in PL/SQL)

A Stored Procedure is a named block of PL/SQL code that is stored permanently in the database.
It can be executed (called) whenever needed to perform a specific task.

🧠 Think of it like a small reusable program saved inside the database.

🟢 Definition:

A Stored Procedure is a precompiled collection of SQL and PL/SQL statements stored in the database, which can be executed by calling its name.

🟦 Syntax:
CREATE OR REPLACE PROCEDURE procedure_name
IS
   -- Declaration section
BEGIN
   -- Execution section
   -- Your SQL or PL/SQL logic here
EXCEPTION
   -- Optional: Error handling
END;
/

🟢 Example:
CREATE OR REPLACE PROCEDURE show_message IS
BEGIN
   DBMS_OUTPUT.PUT_LINE('Hello! This is a stored procedure.');
END;
/


To execute:

BEGIN
   show_message;
END;
/


🧠 Output:
  Hello! This is a stored procedure.


🟢 Advantages of Stored Procedures

1️⃣ Reusability – You can call the same code multiple times.
2️⃣ Improved Performance – Precompiled and stored, so runs faster.
3️⃣ Security – Users can execute the procedure without seeing the code.
4️⃣ Less Network Traffic – Only the procedure call is sent, not full queries.
5️⃣ Modularity – Complex logic can be divided into smaller procedures.


🔴 Disadvantages

1️⃣ Harder to Debug – Errors inside procedures can be tricky to trace.
2️⃣ Portability Issues – May differ slightly between databases.
3️⃣ Consumes Database Storage – Stored permanently in the database.



🧠 In short:

A Stored Procedure = A saved PL/SQL program that performs a task and can be reused anytime.


`},{id:21,question:"21. Define Backup and explain its types.",answer:"",codeExample:`
What is Backup?

A Backup means making a copy of data and keeping it in another safe place.
It helps you to recover your data if the original data is lost or damaged.

🧠 Example:
If your computer or database crashes, you can use the backup copy to get your data back.

🟢 Types of Backup

1️⃣ Full Backup

  It copies all data (everything) from the database or system.
  It takes more time and space, but it is the safest type of backup.

📘 Example:
You take a backup of all student records every Sunday.
👉 If data is lost, you can restore everything from this backup.


2️⃣ Incremental Backup

  It copies only the data that has changed since the last backup.
  It is faster and uses less space.

📘 Example:
You took a full backup on Sunday.
On Monday, you take a backup — it will save only the data changed after Sunday.


3️⃣ Differential Backup

  It copies all the data changed since the last full backup.
  It grows bigger every day until the next full backup.

📘 Example:
You took a full backup on Sunday.
On Wednesday, the differential backup will copy everything changed from Sunday to Wednesday.


4️⃣ Logical Backup

  It backs up database objects like tables, views, and stored procedures.
  Saved as text files or dump files.

📘 Example:
Using a command like EXP or Data Pump to export a table’s data and save it as a file.



5️⃣ Physical Backup

  It copies the actual physical files (data files, log files, control files) used by the database. 
  Used for complete recovery of the database.

📘 Example:
Copying the database storage files (like .dbf or .log files) from the server to another disk.



🧠 Short Summary Table

| Type of Backup      | Meaning (in simple words)                  | Example                             |
| --------------------| ------------------------------------------ | ----------------------------------- |
| Full Backup         | Copy of all data                           | Backup of full student database     |
| Incremental Backup  | Copy of only changed data                  | Backup only changes after Sunday    |
| Differential Backup | Copy of all changes since last full backup | Backup changes from Sunday to today |
| Logical Backup      | Backup of tables or objects                | Export table data to file           |
| Physical Backup     | Backup of physical files                   | Copy database files from server     |


✅ In short:

Backup = Safety copy of data
Helps to restore your data if the main data is lost.
`},{id:22,question:"22. Define Recovery and its importance in DBMS.",answer:"",codeExample:`
🟩 What is Recovery in DBMS?

Recovery means getting back the lost or damaged data after a system failure or crash.
It helps the database to go back to a correct and consistent state — just like it was before the problem happened.


🧠 In short:
Recovery = Restoring the database to its last correct state.


🟢 Why Recovery is Important? (Importance of Recovery)

✅ Protects data from loss
  If the system crashes, recovery brings the lost data back.

✅ Maintains data consistency
  Ensures that the data remains correct and complete after failure.

✅ Restores transactions
  Unfinished (incomplete) transactions are rolled back (undone).
  Completed transactions are saved (redone).

✅ Improves reliability
  Users can trust that their data is safe even if something goes wrong.

✅ Saves time and effort
  You don’t need to re-enter all data manually — recovery does it automatically.


🧠 Types of Failures Recovered in DBMS:

  Transaction Failure – Error during a transaction (like divide by zero).
  System Failure – Power cut or system crash.
  Media Failure – Hard disk or storage damage.


📘 Example (Easy to Understand):

Imagine you are entering student marks in the database.
Suddenly, your computer shuts down (power failure).
➡️ When you restart the system, Recovery helps to restore all saved data up to the last commit point.
Unfinished entries will be undone to keep the database correct.


🧾 In short summary:

| Term       | Meaning                                                   |
| -----------| ------------------------------------------------------------- |
| Recovery   | Process of getting lost data back after a crash               |
| Goal       | Bring database to a consistent state                          |
| Importance | Protects data, ensures correctness, and restores transactions |

      `},{id:23,question:"23. Explain Rollback and Commit techniques.",answer:"",codeExample:`
🟩 1️⃣ COMMIT

Definition:

Commit is used to save all the changes made by a transaction permanently in the database.
Once committed, changes cannot be undone.

📘 Syntax:

COMMIT;


📘 Example:

UPDATE students
SET marks = 95
WHERE student_id = 101;

COMMIT;  -- Save changes permanently


🧠 Explanation:

The student’s marks are updated to 95.
After COMMIT, the change is permanent.



🟩 2️⃣ ROLLBACK

Definition:

Rollback is used to undo changes made by a transaction.
Restores the database to its previous consistent state.

📘 Syntax:

ROLLBACK;


📘 Example:

UPDATE students
SET marks = 50
WHERE student_id = 102;

ROLLBACK;  -- Undo the change



🧠 Explanation:

The student’s marks temporarily change to 50.
After ROLLBACK, the marks go back to the previous value (before the update).


🟢 Key Points:

| Technique | Purpose                  | Effect                    |
| ----------| ------------------------ | ------------------------- |
| COMMIT    | Save changes permanently | Changes cannot be undone  |
| ROLLBACK  | Undo changes             | Reverts to previous state |



🧠 In short words:

COMMIT = “Save permanently”
ROLLBACK = “Undo / Go back”`},{id:24,question:"24. Explain Checkpoint Recovery with diagram.",answer:"",codeExample:`
🟩 What is Checkpoint Recovery?

Checkpoint Recovery is a technique in DBMS used to recover the database faster after a system crash.
    A checkpoint is a point in time when the database writes all current changes from memory (buffers) to the disk.
    After a crash, the system only needs to recover changes made after the last checkpoint, not the entire database.


🧠 In short:
  Checkpoint = “Save the current state of database on disk so recovery is faster.”

🟢 Steps in Checkpoint Recovery

1. Database writes all modified data (dirty pages) from memory to disk.
2. Database records the checkpoint in log files.
3. If a system crash happens:
    Only redo or undo transactions after the last checkpoint.
    Database is restored faster.


🔹 Advantages of Checkpoint Recovery

  Faster recovery after a crash
  Reduces the amount of redo and undo work
  Ensures database consistency


🟦 Diagram of Checkpoint Recovery

Time ----->

Transaction 1:  START  ---- UPDATE ---- COMMIT
Transaction 2:  START  ---- UPDATE ---- (not committed yet)
Transaction 3:  START  ---- UPDATE ---- COMMIT

Checkpoint ---- Memory changes written to disk

System Crash

Recovery:
- Redo committed transactions after last checkpoint
- Undo uncommitted transactions


Explanation of Diagram:

  The checkpoint ensures all committed changes before it are saved on disk.
  After a crash, the DBMS only replays transactions after the checkpoint, saving time.
    

🧠 In short words for exam:
| Term       | Meaning                                                              |
| -----------| -------------------------------------------------------------------- |
| Checkpoint | Saves current state of database on disk                              |
| Recovery   | After crash, redo changes after checkpoint, undo uncommitted changes |
| Purpose    | Faster database recovery and consistency                             |


----------------------------------------------------------------------------------------------

🔴 What Does “Redo” Mean in DBMS (Checkpoint or Recovery)?

👉 Redo means re-applying or re-performing all the changes of transactions that were committed (completed successfully)
but not yet written to disk when the crash happened.

🧠 In Simple Words:

Redo = “Do it again, because the system crash happened before the data was fully saved.”

🧩 Example

Imagine this:
| Time                    | Action                | Status          |
| ----------------------- | --------------------- | --------------- |
| T1: START               | Start transaction     | –               |
| T1: UPDATE salary=50000 | Changed in memory     | Not yet on disk |
| ✅ T1: COMMIT            | Transaction completed | –               |
| 💥 Crash                | System failure        | –               |

At the time of crash:

  The COMMIT was done (so T1 should be saved)
  But the data change (salary=50000) was still in memory, not yet written to disk.


When the database restarts:

  It checks the log file and sees that T1 was committed.
  So it redoes (re-applies) that update → salary=50000 on disk.

That’s called REDO.


---------------------------------------------------

🔴 What is UNDO in DBMS?

👉 UNDO means reversing (canceling) the changes made by uncommitted transactions after a crash or rollback.

It ensures the database goes back to a consistent state — as if those incomplete transactions never happened.

🧠 In simple words:

UNDO = “Cancel uncommitted work.”

If a transaction started making changes but didn’t finish (no COMMIT),
those changes must be undone (rolled back).

🧩 Example

Let’s take an example to understand it clearly:

| Time                      | Action                    | Transaction Status |
| ------------------------- | ------------------------- | ------------------ |
| T1: START                 | Begin transaction         | –                  |
| T1: UPDATE salary = 50000 | Change in memory          | Uncommitted        |
| 💥 System crash           | Transaction not committed | ❌                |


When the database restarts:

  It sees that T1 never committed.
  So Oracle or DBMS will UNDO (reverse) those changes.
    That means → salary change is canceled and goes back to old value.

  `},{id:25,question:"25. Differentiate between Backup and Recovery.",answer:"",codeExample:`
🟩 Difference Between Backup and Recovery

| Backup                                                      | Recovery                                                          |
| ----------------------------------------------------------- | ------------------------------------------------------------------|
| Making a copy of data and saving it in a safe place.        | Restoring lost or damaged data from backup or logs.               |
| Done before any data loss occurs.                           | Done after a failure or crash.                                    |
| Purpose: To protect data from loss.                         | Purpose: To bring database back to correct state.                 |
| Example: Copying the student database to another disk.      | Example: Restoring the student database after a system crash.     |
| Can be full, incremental, or differential.                  | Can be rollback recovery, checkpoint recovery, or media recovery. |
| Performed manually or automatically at scheduled intervals. | Performed automatically by DBMS during recovery process.          |


🧠 In short words:

Backup = Save a copy
Recovery = Use backup to restore data

      `},{id:26,question:"26. List and explain advantages and disadvantages of Backup.",answer:"",codeExample:`
🟩 Advantages of Backup

1️⃣ Data Protection
  Keeps a copy of your data safe in case the original data is lost or damaged.

2️⃣ Disaster Recovery
  Helps restore data after hardware failure, virus attack, or accidental deletion.

3️⃣ Business Continuity
  Ensures that business or operations can continue without major interruptions.

4️⃣ Version Control
  You can maintain multiple copies of data at different times and restore previous versions if needed.

5️⃣ Reduces Manual Work
  Instead of re-entering all lost data, you can restore from backup easily.


🔴 Disadvantages of Backup

1️⃣ Consumes Storage Space
  Full backups take large amounts of disk space.

2️⃣ Time-Consuming
  Creating backups, especially full backups, can take a long time.

3️⃣ May Require Special Tools
  Sometimes backup software or hardware is needed, which can be costly.

4️⃣ Not Foolproof
  If backups are not updated regularly or stored safely, they may become useless.

5️⃣ Extra Maintenance
  Managing multiple backups and schedules can be difficult and tedious.


🧠 In short words for exams:

| Advantages                   | Disadvantages               |
| ---------------------------- | ------------------------------- |
| Protects data from loss      | Uses large storage space        |
| Helps in disaster recovery   | Can be time-consuming           |
| Ensures business continuity  | Requires tools/hardware         |
| Maintains versions of data   | Not always reliable if outdated |
| Saves manual re-entry effort | Extra effort to manage          |


      `},{id:27,question:"27. What is Transaction Log Backup and how is it used?",answer:"",codeExample:`
🟩 What is Transaction Log Backup?

A Transaction Log Backup is a backup of the transaction log of a database.
  The transaction log records all changes made to the database (inserts, updates, deletes).
  Transaction log backup does not backup the full database, only the log of changes.


🧠 In short:
Transaction Log Backup = Backup of all recent database changes.


🟢 How It Is Used

1. Recovery to a Point in Time:
  If the database crashes, you can restore the last full backup and then apply transaction log backups to recover data up to a specific time.

2. Supports Incremental Recovery:
  Saves only changes since the last transaction log backup, reducing backup time and storage.

3. Prevents Data Loss:
  All committed transactions are saved in the log, so no committed changes are lost.


🔹 Example (Easy to Understand)

Take a full backup of the student database on Sunday.


Every day, take transaction log backups:
  Monday → log backup of all changes on Monday
  Tuesday → log backup of all changes on Tuesday


If a crash happens on Tuesday:

  Restore Sunday’s full backup
  Apply Monday and Tuesday log backups
  Database is recovered up to the crash point.


🧠 In short words:

| Term                   | Meaning / Use                                           |
| -----------------------| ------------------------------------------------------- |
| Transaction Log Backup | Backup of all recent changes (insert, update, delete)   |
| Purpose                | Recover database to a specific point in time            |
| Advantage              | Saves time and storage; prevents loss of committed data |
`},{id:28,question:"28. Explain current trends in DBMS (any 3).",answer:"",codeExample:`
🟩 Current Trends in DBMS

Modern databases are evolving to handle big data, cloud computing, and real-time analytics. Here are 3 main trends:

1️⃣ Cloud Databases

Databases are now hosted on cloud platforms like AWS, Azure, or Oracle Cloud.
Users can access data from anywhere, scale storage easily, and pay as they use.

📘 Example:
Amazon RDS, Google Cloud SQL, or Azure SQL Database.

Advantages:

No hardware setup needed
Easy to scale
Automatic backups and maintenance



2️⃣ Big Data and NoSQL Databases

Traditional relational databases (RDBMS) are not ideal for huge, unstructured data.
NoSQL databases like MongoDB, Cassandra, and Couchbase handle big data efficiently.

📘 Example:
Social media platforms store massive user posts and comments in NoSQL databases.

Advantages:

Handles large volume of data
Supports unstructured and semi-structured data
High speed and flexibility



3️⃣ In-Memory Databases

Stores data in RAM instead of disk for very fast access.
Useful for real-time applications like stock trading, online gaming, and analytics.

📘 Example:
SAP HANA, Redis, Oracle TimesTen.

Advantages:

  Extremely fast queries
  Real-time analytics possible
  Reduces latency in data access


🧠 In short words for exams:
| Trend            | Meaning                            | Example               |
| ---------------- | ---------------------------------- | --------------------- |
| Cloud Databases  | Databases hosted on cloud          | Amazon RDS, Azure SQL |
| NoSQL / Big Data | Handles large & unstructured data  | MongoDB, Cassandra    |
| In-Memory DB     | Data stored in RAM for fast access | SAP HANA, Redis       |

      `},{id:29,question:"29. Explain AI in databases and its benefits.",answer:"",codeExample:`
🟩 AI in Databases

AI (Artificial Intelligence) in databases means using AI techniques to improve how databases store, manage, and analyze data.
  AI can automatically optimize queries, detect patterns, predict trends, and make databases smarter.
  It reduces human effort and increases efficiency, speed, and accuracy.

🧠 In short:
  AI in databases = “Making the database smart using AI.”


  🟢 Benefits of AI in Databases

1️⃣ Automated Query Optimization

  AI can analyze queries and choose the fastest way to fetch data.
    📘 Example: A database predicting which indexes to use for a query.


2️⃣ Predictive Analytics
  AI helps predict trends using stored data.
    📘 Example: Sales database predicts future product demand.


3️⃣ Anomaly and Fraud Detection
  AI can detect unusual transactions or errors automatically.
    📘 Example: Banking database identifies suspicious transactions.


4️⃣ Smart Indexing & Storage Management
  AI decides where and how to store data for fast access.


5️⃣ Reduced Human Effort
  Many manual tasks like tuning, monitoring, and backups can be automated with AI.


🧠 In short words for exams:
| AI Feature in DB     | Benefit             | Example                              |
| -------------------- | ------------------- | ------------------------------------ |
| Query Optimization   | Faster queries      | Database chooses best indexes        |
| Predictive Analytics | Predict trends      | Sales forecast using historical data |
| Anomaly Detection    | Detect errors/fraud | Bank detects suspicious transaction  |
| Smart Storage        | Fast data access    | AI decides storage location          |
| Automation           | Less human effort   | Automatic tuning & backups           |

      `},{id:30,question:"30. What is a Relational Structure? Explain with an example.",answer:"",codeExample:`
🟩 What is Relational Structure?

A Relational Structure is the way data is organized in a relational database.
  Data is stored in tables (relations) consisting of rows and columns.
  Each row represents a record (tuple), and each column represents an attribute (field).
  Tables are related to each other using keys (primary key, foreign key).

🧠 In short:
Relational Structure = Data stored in tables with rows and columns and linked by keys.


🟢 Characteristics of Relational Structure

1. Data is organized in tables (relations).
2. Each row (tuple) is unique.
3. Each column (attribute) has a name and data type.
4. Relationships between tables are maintained using keys.


🔹 Example of Relational Structure
Table 1: Students
| Student_ID (PK) | Name  | Age | Class |
| --------------- | ----- | --- | ----- |
| 101             | Raj   | 16  | 10    |
| 102             | Priya | 15  | 9     |
| 103             | Anil  | 16  | 10    |


Table 2: Marks
| Student_ID (FK) | Subject | Marks |
| --------------- | ------- | ----- |
| 101             | Math    | 95    |
| 102             | Math    | 88    |
| 103             | Math    | 92    |



🧠 In short words for exams:
| Term                 | Meaning                                             |
| -------------------- | --------------------------------------------------- |
| Relational Structure | Organizing data in tables with rows and columns     |
| Row / Tuple          | A single record in a table                          |
| Column / Attribute   | A field in the table                                |
| Primary Key          | Unique identifier for each row                      |
| Foreign Key          | Links one table to another                          |

`},{id:31,question:"31. What is an ER Model? Describe its components and symbols used in an ER diagram. and Differentiate between Strong Entity and Weak Entity with examples.",answer:"",codeExample:`
🟩 What is an ER Model?

ER Model (Entity–Relationship Model) is a data modeling technique used to visually describe how data is related in a database.
It was introduced by Peter Chen in 1976.


🧠 In short:
  ER Model shows entities (tables), their attributes (fields), and relationships between them using diagrams.


🟢 Purpose of ER Model

  To design the structure of a database before creating it.
  To clearly show how data is connected.

🟩 Components of ER Model
| Component             | Description                                                               | Symbol in ER Diagram                    |
| ----------------------| ------------------------------------------------------------------------- | --------------------------------------- |
| Entity                | An object or thing that stores data (e.g., Student, Teacher).             | 🟦 Rectangle                            |
| Attribute             | Properties or characteristics of an entity (e.g., Name, Age).             | 🟢 Oval                                 |
| Relationship          | Shows how two entities are connected (e.g., Student *enrolls in* Course). | 🔶 Diamond                              |
| Primary Key           | A unique attribute that identifies each record.                           | Underlined attribute name               |
| Weak Entity           | Entity that depends on a strong entity; has no primary key.               | Double Rectangle                        |
| Multivalued Attribute | Attribute that can have multiple values (e.g., phone numbers).            | Double Oval                             |
| Derived Attribute     | Attribute that can be calculated (e.g., Age from DOB).                    | Dashed Oval                             |
| Cardinality           | Defines number of relationships (1:1, 1:N, M:N).                          | Shown near relationship lines (1, N, M) |


🧠 Example (Easy to Understand):

Entities:

Student (Student_ID, Name, Age)
Course (Course_ID, Course_Name)


Relationship:

Student enrolls in Course


🔹 ER Diagram Symbols Example:

 [STUDENT] ─── (enrolls in) ─── [COURSE]
   |                              |
  (Name)                        (Course_Name)


📘 Explanation:

  Student and Course are entities (rectangles).
  enrolls in is a relationship (diamond).
  Name, Course_Name are attributes (ovals).

🧾 In short for exam:
| Component             | Symbol           | Example     |
| --------------------- | ---------------- | ----------- |
| Entity                | Rectangle        | Student     |
| Attribute             | Oval             | Name        |
| Relationship          | Diamond          | Enrolls in  |
| Primary Key           | Underlined       | Student_ID  |
| Weak Entity           | Double Rectangle | Dependent   |
| Derived Attribute     | Dashed Oval      | Age         |
| Multivalued Attribute | Double Oval      | Phone_No    |

✅ Summary:

ER Model = Diagram that shows entities, attributes, and relationships clearly before creating a database.


🧠 Example:

Entity (Table): STUDENT
Attributes (Columns): RollNo, Name, Age
Record (Row): 101, Raj, 20

🔹 Simple Way to Remember

Entity = Table
Attribute = Column
Record = Row


-----------------------------------------------------------------------------------------------
Differentiate between Strong Entity and Weak Entity with examples.

| Strong Entity                                           | Weak Entity                                                             |
| --------------------------------------------------------| ------------------------------------------------------------------------|
| Has a primary key that uniquely identifies each record. | Does not have a primary key of its own.                                 |
| Can exist independently in the database.                | Depends on a strong entity for its existence.                           |
| Represented by a single rectangle in an ER diagram.     | Represented by a double rectangle in an ER diagram.                     |
| Relationship with another entity is usually one-to-many.| Always has a total participation (double line) with its strong entity.  |
| Example: Student, Department, Employee                  | Example: Dependent (child of employee), Order Item (part of an order)   |


🧠 Simple Explanation with Example
🔹 Example:

Entity 1: Employee (Emp_ID, Name)
→ Has a primary key (Emp_ID) → ✅ Strong Entity

Entity 2: Dependent (Dep_Name, Age, Emp_ID)
→ No unique key on its own, depends on Emp_ID of Employee → ❌ Weak Entity

Relationship:
Each Dependent belongs to one Employee, and cannot exist without that Employee.

🧾 In short words for exam:
| Term          | Meaning                                        |
| --------------| ---------------------------------------------- |
| Strong Entity | Independent; has its own primary key           |
| Weak Entity   | Dependent; uses foreign key from strong entity |
| Example       | Employee (strong) – Dependent (weak)           |


      `},{id:32,question:"32. What is Cardinality? Explain One-to-One, One-to-Many, and Many-to-Many relationships with examples.",answer:"",codeExample:`
🟩 What is Cardinality?

Cardinality means the number of relationships between two entities in a database.
It shows how many instances of one entity are related to instances of another entity.

🧠 In short:
  Cardinality = Relationship between tables (1:1, 1:N, or M:N)


🟢 Types of Cardinality

1️⃣ One-to-One (1:1) Relationship

➡ One record in Entity A is related to only one record in Entity B.

📘 Example:

  Each person has one passport.
  Each passport belongs to one person.

PERSON (1) ───── (1) PASSPORT

🗣️ Meaning: One person ↔ One passport.



2️⃣ One-to-Many (1:N) Relationship

➡ One record in Entity A can be related to many records in Entity B.
But each record in Entity B is related to only one record in Entity A.

📘 Example:

  One teacher teaches many students.
  Each student is taught by one teacher.
      
TEACHER (1) ───── (N) STUDENT

🗣️ Meaning: One teacher ↔ Many students.



3️⃣ Many-to-Many (M:N) Relationship

➡ Many records in Entity A are related to many records in Entity B.

📘 Example:

  A student can take many courses.
  A course can have many students.

STUDENT (M) ───── (N) COURSE

🗣️ Meaning: Many students ↔ Many courses.


✅ Quick Summary Table
| Type         | Symbol     | Example            |
| ------------ | ---------- | ------------------ |
| One-to-One   | 1 : 1      | Person – Passport  |
| One-to-Many  | 1 : N      | Teacher – Students |
| Many-to-Many | M : N      | Student – Course   |


💡 In short (for exam line):

Cardinality defines how many times one entity can be associated with another entity.
It can be 1:1, 1:N, or M:N.
  `},{id:33,question:"33. What are Attributes? Explain types of attributes (Key, Composite, Multivalued, Derived).",answer:"",codeExample:`
🟩 What are Attributes?

An attribute is a property or characteristic of an entity in a database.
It gives details or information about the entity.

🧠 In short:

Attribute = Characteristic of an entity.

📘 Example:
For the entity STUDENT,
attributes can be → Roll_No, Name, Age, Address.

  Entity: STUDENT
  Attributes: Roll_No, Name, Age, Address


🟢 Types of Attributes
1️⃣ Key Attribute

A unique identifier for each record in a table.
It helps to uniquely identify an entity.

📘 Example:
Roll_No uniquely identifies each student.

🗣️ Example line:

  Roll_No is the Key Attribute of STUDENT.


2️⃣ Composite Attribute

An attribute that can be divided into smaller parts.

📘 Example:
Full_Name → divided into → First_Name and Last_Name
Address → divided into → City, State, Pincode

🗣️ Example line:

  Address is a Composite Attribute because it can be split into smaller parts.


3️⃣ Multivalued Attribute

An attribute that can have more than one value for a single entity.

📘 Example:
Phone_Number → A student can have multiple phone numbers.

🗣️ Example line:

  Phone_Number is a Multivalued Attribute.


4️⃣ Derived Attribute

An attribute whose value is calculated or derived from other attributes.

📘 Example:
Age can be calculated from Date_of_Birth.

🗣️ Example line:

  Age is a Derived Attribute because it is calculated from Date_of_Birth.

✅ Quick Summary Table
| Type                  | Meaning                       | Example               |
| --------------------- | ----------------------------- | --------------------- |
| Key Attribute         | Uniquely identifies an entity | Roll_No               |
| Composite Attribute   | Can be divided into sub-parts | Address → City, State |
| Multivalued Attribute | Has more than one value       | Phone_Number          |
| Derived Attribute     | Calculated from other values  | Age (from DOB)        |

      `},{id:34,question:"34. Define and differentiate between Super Key, Candidate Key, Unique Key, and Primary Key.",answer:"",codeExample:`
🟩 Definition
1️⃣ Super Key

A Super Key is any set of one or more attributes that can uniquely identify a record in a table.
It may include extra/unnecessary attributes.

📘 Example:
In a STUDENT table → (Roll_No, Name, Email)

Possible Super Keys:

{Roll_No}
{Roll_No, Name}
{Email, Roll_No}

🗣️ Note: Every Primary Key is a Super Key, but not every Super Key is a Primary Key.


How to use Super Key in SQL

In SQL, we enforce uniqueness using PRIMARY KEY or UNIQUE constraints.

From your table:

CREATE TABLE Student (
    Roll_No INT PRIMARY KEY,   -- Roll_No is unique, a Super Key
    Name VARCHAR(50),
    Email VARCHAR(50) UNIQUE   -- Email is also unique, another Super Key
);


Here:
  Roll_No → Super Key (also the Primary Key)
  Email → Super Key (enforced by UNIQUE)


---------------------------------------------------------------------------------------


2️⃣ Candidate Key

A Candidate Key is a minimal Super Key — meaning it has no unnecessary attributes.
There can be multiple Candidate Keys in one table.

📘 Example:

  {Roll_No}
  {Email}
  Both can uniquely identify a student → so both are Candidate Keys.

------------------

🧠 Step 1: What means "Minimal Super Key" (in very simple words)

  A Super Key can identify each record uniquely (✅ unique).
  A Minimal Super Key means — you removed all extra columns from it, but it’s still unique.
  That minimal one becomes your Candidate Key.

So basically:
  Minimal Super Key = Smallest combination of columns that uniquely identify a record.

🧩 Step 2: Understand using Example Table
| Roll_No | Name | Email                                 |
| ------- | ---- | ------------------------------------- |
| 101     | Raj  | [raj@mail.com](mailto:raj@mail.com)   |
| 102     | Neha | [neha@mail.com](mailto:neha@mail.com) |


Now see 👇
| Combination    | Unique?   | Extra Column?  | Type                       |
| -------------- | -------   | -------------  | ---------------------------|
| Roll_No        | ✅ Yes   | ❌ No          | Minimal Super Key ✅       |
| Email          | ✅ Yes   | ❌ No          | Minimal Super Key ✅       |
| Roll_No + Name | ✅ Yes   | ✅ Yes         | Super Key (not minimal ❌) |

✅ So the Minimal Super Keys are {Roll_No} and {Email}
These are also called Candidate Keys.

💻 SQL Example:

CREATE TABLE Student (
    Roll_No INT PRIMARY KEY,   -- Minimal Super Key chosen as main (Primary Key)
    Name VARCHAR(50),
    Email VARCHAR(50) UNIQUE   -- Another Minimal Super Key
);

💡 What this means:

Roll_No is Primary Key → one chosen Minimal Super Key
Email is Unique Key → another Minimal Super Key

---------------------------------------------------------------------------------------


3️⃣ Primary Key

A Primary Key is the main key chosen from Candidate Keys to uniquely identify each record.
It cannot have NULL or duplicate values.

📘 Example:
If we choose {Roll_No} from the Candidate Keys,
then Roll_No becomes the Primary Key.

📘 SQL Example:
CREATE TABLE Student (
    Roll_No INT PRIMARY KEY,
    Name VARCHAR(50),
    Email VARCHAR(50)
);

👉 Here, Roll_No is the Primary Key.
👉 It is unique and not null.


---------------------------------------------------------------------------------------

4️⃣ Unique Key
✅ Definition:

A Unique Key also ensures that the column’s value is unique for every record,
but it can have one NULL value (unlike Primary Key).

📘 SQL Example:
CREATE TABLE Student (
    Roll_No INT PRIMARY KEY,
    Name VARCHAR(50),
    Email VARCHAR(50) UNIQUE
);


👉 Email is Unique Key
👉 Every email must be different, but it can be NULL once.


🧾 ✅ Difference Table
| Type              | Description                                                                   | Allows NULL                | Example            |
| ----------------- | ----------------------------------------------------------------------------- | ---------------------------| ------------------ |
| Super Key         | Any set of attributes that uniquely identify a record (may have extra fields) | Yes                        | {Roll_No, Name}    |
| Candidate Key     | Minimal Super Key (no extra fields)                                           | No                         | {Roll_No}, {Email} |
| Primary Key       | Main Candidate Key chosen to identify each record                             | ❌ No                     | Roll_No           |
| Unique Key        | Ensures all values are unique but can contain one NULL                        | ✅ Yes (one null allowed) | Email             |


`},{id:35,question:"35. What are Integrity Constraints? Explain Entity Integrity and Referential Integrity with examples.",answer:"",codeExample:`
🟩 What are Integrity Constraints?

Integrity Constraints are rules that ensure the accuracy and consistency of data in a database.

🧠 In short:

Integrity constraints make sure that data in tables is correct, valid, and reliable.

🟢 Types of Integrity Constraints
1️⃣ Entity Integrity

  Ensures that each record (row) in a table can be uniquely identified.
  It is applied on the Primary Key.
  Primary Key cannot be NULL or duplicate.

📘 Example:

| Roll_No  | Name  |
| ---------| ----- |
| 101      | Raj   |
| 102      | Meena |
| NULL ❌  | Rohan |
| 101 ❌   | Neha  |


🗣️ Rule:
  Every row must have a unique and non-null Primary Key.



2️⃣ Referential Integrity

  Ensures that the relationship between two tables remains consistent.
  It is applied using a Foreign Key.
  The Foreign Key value in one table must match a Primary Key value in another table.

📘 Example:

STUDENT Table

| Roll_No | Name  |
| ------- | ----- |
| 101     | Raj   |
| 102     | Meena |


MARKS Table

| Roll_No | Marks |
| ------- | ----- |
| 101     | 85    |
| 102     | 90    |
| 103 ❌  | 80    |



🗣️ Rule:
Roll_No 103 doesn’t exist in the STUDENT table → violates Referential Integrity.


✅ Quick Summary Table

| Type                      | Ensures                              | Applied On     | Example                                |
| ------------------------- | ------------------------------------ | -------------- | -------------------------------------- |
| Entity Integrity          | Each row is unique and not null      | Primary Key    | Roll_No must be unique & not null      |
| Referential Integrity     | Relationship between tables is valid | Foreign Key    | Roll_No in MARKS must exist in STUDENT |


💡 In short (for exam):

Integrity constraints keep the data in the database correct and consistent.
Entity Integrity checks Primary Keys.
Referential Integrity checks Foreign Keys.


      `},{id:36,question:"36. What is Indexing in DBMS? Explain how it improves query performance.",answer:"",codeExample:`
🟩 What is Indexing in DBMS?

Indexing is a technique used in a database to speed up data retrieval.
It works like an index in a book, helping you find data quickly without scanning every row.

🧠 In short:
  Indexing helps the database find records faster, just like a book index helps you find topics quickly.


🟢 How Indexing Works

  The DBMS creates an index table with key values (like Roll_No, Name, etc.) and their memory locations (addresses).
  When you search for a value, the DBMS uses the index instead of checking each record one by one.

📘 Example:

STUDENT Table
| Roll_No | Name  | City   |
| ------- | ----- | ------ |
| 101     | Raj   | Delhi  |
| 102     | Meena | Mumbai |
| 103     | Rohan | Pune   |


If we create an index on Roll_No,
then searching for Roll_No = 103 becomes much faster,
because the system looks it up in the index instead of scanning the whole table.


🟣 How Indexing Improves Query Performance

✅ 1. Faster Search:
DBMS can find data directly using the index instead of checking every record.

✅ 2. Reduces Disk Access:
Only the required blocks are accessed, saving time.

✅ 3. Quick Sorting and Grouping:
Indexes help queries with ORDER BY, GROUP BY, and JOIN operations.

✅ 4. Efficient Data Retrieval:
Helps when searching large databases frequently.


⚠️ Note:

Indexing improves read (SELECT) operations.
But it can slow down write (INSERT, UPDATE, DELETE) operations because the index also needs to be updated.
      


✅ Simple Example (SQL)
-- Create index on Roll_No column
CREATE INDEX idx_rollno ON STUDENT(Roll_No);

-- Now this query runs faster
SELECT * FROM STUDENT WHERE Roll_No = 103;


🧾 In short (for exam):

Indexing is used to improve the speed of data retrieval in DBMS.
It works like a book index and helps find records quickly using keys instead of scanning the whole table.
`},{id:37,question:"37. Differentiate between Primary Index, Clustering Index, and Secondary Index.",answer:"Ordered index",codeExample:`
🟩 1️⃣ Primary Index

🧠 Meaning:

  Created automatically when you define a PRIMARY KEY.
  The table data is physically sorted based on this key.
  Only one Primary Index per table.

📘 Example:

CREATE TABLE Student (
    Roll_No INT PRIMARY KEY,   -- Primary Index is created automatically
    Name VARCHAR(50),
    City VARCHAR(50)
);



➡ Here, Roll_No is the Primary Key,
so the Primary Index is automatically created on Roll_No.

✅ Used for fast access based on Roll_No.




🟣 2️⃣ Clustering Index
🧠 Meaning:

  Created on a non-primary key column.
  Used to group rows having similar values.
  The data in the table is physically arranged (clustered) by that column.
  Only one clustering index allowed per table.

📘 Example:

CREATE TABLE Employee (
    Emp_ID INT,
    Emp_Name VARCHAR(50),
    Department VARCHAR(30)
);

-- Create Clustering Index on Department column
CREATE CLUSTERED INDEX idx_department ON Employee(Department);


➡ Here, employees are stored grouped by Department,
so all employees in the same department are physically near each other.

✅ Used when many queries use GROUP BY or WHERE Department = ‘HR’.
      


🔵 3️⃣ Secondary Index
🧠 Meaning:

Created on a non-key or unsorted column.

Helps speed up search on columns not used for sorting.

Multiple secondary indexes can exist in one table.

📘 Example:
CREATE TABLE Student (
    Roll_No INT PRIMARY KEY,
    Name VARCHAR(50),
    City VARCHAR(50)
);

-- Create Secondary Index on Name
CREATE INDEX idx_name ON Student(Name);


➡ Here, the table is sorted by Roll_No,
but an index on Name helps find students by name quickly.

✅ Used for searching data based on Name, City, etc.



✅ Quick Summary Table
| Type             | Based On                          | SQL Command Example                                            | Data Arrangement   | Number Allowed |
| -----------------| --------------------------------- | ---------------------------------------------------------------| ---------------------- | ------------------ |
| Primary Index    | Primary Key                       | PRIMARY KEY                                                    | Data sorted by key     | Only one           |
| Clustering Index | Non-primary key used for grouping | CREATE CLUSTERED INDEX idx_department ON Employee(Department); | Data grouped by column | Only one           |
| Secondary Index  | Non-key or unsorted column        | CREATE INDEX idx_name ON Student(Name);                        | No physical change     | Many allowed       |


🧠 In short (for exam):

Primary Index: automatic on primary key
Clustering Index: groups data on non-key column
Secondary Index: speeds up search on other columns
`},{id:38,question:"38. Write an SQL example to create a table with a Primary Key and Foreign Key.",answer:"",codeExample:`
🟩 Concept Recap

Primary Key:
Uniquely identifies each record in a table. (No duplicate or NULL values)

Foreign Key:
Creates a link/relationship between two tables.
It refers to the Primary Key of another table.

🧠 Example: Create Two Tables

1️⃣ Parent Table: DEPARTMENT

CREATE TABLE Department (
    Dept_ID INT PRIMARY KEY,        -- Primary Key
    Dept_Name VARCHAR(50)
);


✅ Here,
Dept_ID uniquely identifies each department → Primary Key

2️⃣ Child Table: EMPLOYEE

CREATE TABLE Employee (
    Emp_ID INT PRIMARY KEY,         -- Primary Key
    Emp_Name VARCHAR(50),
    Dept_ID INT,                    -- Foreign Key column
    FOREIGN KEY (Dept_ID) REFERENCES Department(Dept_ID)
);



✅ Here,

Emp_ID → uniquely identifies employee → Primary Key
Dept_ID → refers to Dept_ID of Department table → Foreign Key



📘 Meaning (Relation)

| Department Table     |           |
| -------------------- | --------- |
| Dept_ID              | Dept_Name |
| 1                    | HR        |
| 2                    | IT        |
| 3                    | Sales     |

	

| Employee Table     |          |
| ------------------ | -------- |
| Emp_ID             | Emp_Name |
| 101                | Raj      |
| 102                | Meena    |
| 103                | Rohan    |




🗣️ Explanation:

Employee Raj belongs to Dept_ID 1 (HR).
The Foreign Key (Dept_ID) ensures that every employee’s department exists in the Department table.
If you try to insert Dept_ID = 5 (not in Department table), DBMS will not allow it.

✅ In short (for exam):

Primary Key uniquely identifies records in a table.
Foreign Key connects one table to another by referencing its Primary Key.`},{id:39,question:"39. Differentiate between DDL, DML, DCL, TCL, and DQL with examples.",answer:"",codeExample:`
🟩 1️⃣ DDL – Data Definition Language

🧠 Meaning:
Used to define or change the structure of the database (like tables, columns, constraints).

📘 Common Commands:
CREATE, ALTER, DROP, TRUNCATE

📗 Example:

CREATE TABLE Student (
    Roll_No INT PRIMARY KEY,
    Name VARCHAR(50),
    City VARCHAR(50)
);


🗣️ Meaning: Creates a new table structure.



🟢 2️⃣ DML – Data Manipulation Language

🧠 Meaning:
Used to insert, update, delete, or modify data inside tables.

📘 Common Commands:
INSERT, UPDATE, DELETE

📗 Example:

INSERT INTO Student VALUES (101, 'Raj', 'Delhi');
UPDATE Student SET City = 'Mumbai' WHERE Roll_No = 101;


🗣️ Meaning: Adds or changes the actual data in the table.



🔵 3️⃣ DCL – Data Control Language

🧠 Meaning:
Used to control access and permissions in the database (security control).

📘 Common Commands:
GRANT, REVOKE

📗 Example:

GRANT SELECT ON Student TO user1;
REVOKE SELECT ON Student FROM user1;


🗣️ Meaning: Gives or removes permission to access the Student table.



🟣 4️⃣ TCL – Transaction Control Language

🧠 Meaning:
Used to manage transactions and ensure data consistency.

📘 Common Commands:
COMMIT, ROLLBACK, SAVEPOINT

📗 Example:

BEGIN;
UPDATE Student SET City = 'Pune' WHERE Roll_No = 101;
COMMIT;

🗣️ Meaning: Saves or cancels changes made during a transaction.



🟠 5️⃣ DQL – Data Query Language

🧠 Meaning:
Used to retrieve data from the database.

📘 Common Command:
SELECT

📗 Example:

SELECT * FROM Student WHERE City = 'Delhi';

🗣️ Meaning: Fetches data from the table.



✅ Quick Difference Table

| Type   | Full Form                    | Purpose                    | Example Commands       | Example Query                     |
| -------| ---------------------------- | -------------------------- | ---------------------- | ----------------------------------|
| DDL23  | Data Definition Language     | Defines database structure | CREATE, ALTER, DROP    | CREATE TABLE Student(...)         |
| DML23  | Data Manipulation Language   | Manages table data         | INSERT, UPDATE, DELETE | INSERT INTO Student VALUES (...)  |
| DCL23  | Data Control Language        | Controls user permissions  | GRANT, REVOKE          | GRANT SELECT ON Student TO user1; |
| TCL23  | Transaction Control Language | Controls transactions      | COMMIT, ROLLBACK       | COMMIT;                           |
| DQL23  | Data Query Language          | Retrieves data             | SELECT                 | SELECT * FROM Student;            |


🧠 In short (for exam):

DDL → defines structure
DML → manipulates data
DCL → controls access
TCL → manages transactions
DQL → retrieves data


      `},{id:40,question:"40. Explain COMMIT, ROLLBACK, and SAVEPOINT commands.",answer:"",codeExample:`
🟩 1️⃣ COMMIT Command
🔹 Meaning:

The COMMIT command is used to save all the changes made during the current transaction permanently in the database.

Once you use COMMIT, you cannot undo the changes.

🔹 Syntax:
COMMIT;

🔹 Example:
UPDATE Student SET City = 'Mumbai' WHERE Roll_No = 101;
COMMIT;


🗣️ Meaning: The change (City → Mumbai) is permanently saved.

🟧 2️⃣ ROLLBACK Command
🔹 Meaning:

The ROLLBACK command is used to undo (cancel) the changes made in the current transaction before they are committed.

It brings the database back to its previous state.

🔹 Syntax:
ROLLBACK;

🔹 Example:
UPDATE Student SET City = 'Delhi' WHERE Roll_No = 101;
ROLLBACK;


🗣️ Meaning: The update is cancelled, and the old data is restored.




🟦 3️⃣ SAVEPOINT Command
🔹 Meaning:

A SAVEPOINT is a temporary marker within a transaction that allows you to ROLLBACK only to that point instead of undoing the entire transaction.

It helps manage large transactions more safely.

🔹 Syntax:
SAVEPOINT savepoint_name;

🔹 Example:

BEGIN;
UPDATE Student SET City = 'Delhi' WHERE Roll_No = 101;
SAVEPOINT A;

UPDATE Student SET City = 'Mumbai' WHERE Roll_No = 102;
ROLLBACK TO A;
COMMIT;


🗣️ Explanation:

  SAVEPOINT A creates a mark.
  You can undo only the changes made after SAVEPOINT A using ROLLBACK TO A.
  Then, COMMIT saves the remaining changes.
      

| Step | Command                                             | What Happens                                                                               |
| ---- | ----------------------------------------------------| -------------------------------------------------------------------------------------------|
| 1️⃣  | BEGIN;                                              | Transaction starts (nothing saved yet).                                                    |
| 2️⃣  | UPDATE Student SET City='Delhi' WHERE Roll_No=101;  | Change made in memory (not yet permanent).                                                 |
| 3️⃣  | SAVEPOINT A;                                        | A “mark” is set here — like saving a checkpoint.                                           |
| 4️⃣  | UPDATE Student SET City='Mumbai' WHERE Roll_No=102; | Another change made (after Savepoint A).                                                   |
| 5️⃣  | ROLLBACK TO A;                                      | Undo all changes after Savepoint A (so City='Mumbai' is undone, but City='Delhi' remains). |
| 6️⃣  | COMMIT;                                             | Save all remaining changes permanently.                                                    |

      `},{id:41,question:"41. Explain Relational Algebra operations with examples.",answer:"This concept is used for only Theory (DBMS concept) not run on sql",codeExample:`
🧩 What is Relational Algebra?

Relational Algebra is a theoretical language used to perform operations on tables (relations) in a database.

It helps us to retrieve, combine, and manipulate data stored in tables.

⚙️ Main Relational Algebra Operations

🔹 1️⃣ SELECT (σ) → Filter Rows

Purpose: Selects (filters) rows that satisfy a given condition.

Symbol: σ (sigma)

Syntax:

σ(condition)(Table_Name)


Example:

σ(Salary > 50000)(Employee)


🗣️ Meaning: Select all employees whose salary is greater than 50,000.



🔹 2️⃣ PROJECT (π) → Choose Columns

Purpose: Selects specific columns (attributes) from a table.

Symbol: π (pi)

Syntax:

π(column1, column2)(Table_Name)


Example:

π(Name, Salary)(Employee)


🗣️ Meaning: Display only Name and Salary columns from the Employee table.



🔹 3️⃣ UNION (∪) → Combine Tables

Purpose: Combines rows from two tables (duplicates removed).

Symbol: ∪ (union)

Syntax:

Table1 ∪ Table2


Example:

Student_A ∪ Student_B


🗣️ Meaning: Combine all students from both tables (no duplicates).



🔹 4️⃣ SET DIFFERENCE (−) → Find Missing Records

Purpose: Finds rows that are in Table1 but not in Table2.

Symbol: − (minus)

Syntax:

Table1 − Table2


Example:

Student_A − Student_B


🗣️ Meaning: Shows students who are in A but not in B.



🔹 5️⃣ CARTESIAN PRODUCT (×) → Combine Every Row

Purpose: Combines each row of one table with each row of another.

Symbol: × (cross)

Syntax:

Table1 × Table2


Example:

Employee × Department


🗣️ Meaning: Combines every employee with every department (used before joins).



🔹 6️⃣ RENAME (ρ) → Rename Table or Column

Purpose: Renames a table or attributes for better understanding.

Symbol: ρ (rho)

Syntax:

ρ(NewTableName, Table)


Example:

ρ(Emp, Employee)


🗣️ Meaning: Rename the table Employee to Emp.




🔹 7️⃣ INTERSECTION (∩) → Common Records

Purpose: Returns rows that are common in both tables.

Symbol: ∩ (intersection)

Syntax:

Table1 ∩ Table2


Example:

Student_A ∩ Student_B


🗣️ Meaning: Students who are in both A and B.




🔹 8️⃣ JOIN (⨝) → Combine Related Tables

Purpose: Combines rows from two tables based on a related column.

Symbol: ⨝ (join)

Syntax:

Table1 ⨝ condition Table2


Example:

Employee ⨝ Employee.DeptID = Department.DeptID


🗣️ Meaning: Combine employees with their department details.



✅ Summary Table

| Operation         | Symbol | Purpose                                | Example                   |
| ----------------- | ------ | -------------------------------------- | ------------------------- |
| Select            | σ      | Filters rows                           | σ(Salary>50000)(Employee) |
| Project           | π      | Selects columns                        | π(Name, Salary)(Employee) |
| Union             | ∪      | Combines rows from two tables          | A ∪ B                     |
| Set Difference    | −      | Finds rows in one table not in another | A − B                     |
| Cartesian Product | ×      | Combines all rows                      | A × B                     |
| Rename            | ρ      | Renames table/columns                  | ρ(Emp, Employee)          |
| Intersection      | ∩      | Common rows                            | A ∩ B                     |
| Join              | ⨝     | Combine related data                   | A ⨝ B                     |



      `},{id:42,question:"42. Differentiate between Relational Algebra and Relational Calculus.",answer:"",codeExample:`
🧩 Difference between Relational Algebra and Relational Calculus

| Relational Algebra                                                          | Relational Calculus                                                       |
| ----------------------------------------------------------------------------| --------------------------------------------------------------------------|
| It is procedural — tells how to get the result.                             | It is non-procedural — tells what result you want, not how to get it.     |
| Focuses on operations like SELECT, PROJECT, JOIN, etc.                      | Focuses on conditions and expressions to describe the result.             |
| It works step-by-step to produce output.                                    | It only defines the desired output, and the system decides how to get it. |
| Used mainly for query execution in DBMS.                                    | Used mainly for query representation and theoretical understanding.       |
| Example: σ(Salary > 50000)(Employee) → Select employees with salary > 50000 | Example: { e.Name                                                         |
| Easier to implement in a database system.                                   | Easier to understand logically for users.                                 |



💡 In short:

Relational Algebra → "How" to get data (step-by-step operations).
Relational Calculus → "What" data to get (logic-based expression).

      `},{id:43,question:"43. Explain Views and their types with syntax.",answer:"",codeExample:`
🧩 What is a View in DBMS?

A View is a virtual table that shows data from one or more tables.
It does not store data physically — it just displays data stored in other tables.

You can think of a view as a saved SQL query that can be used like a table.

🧠 Example:
CREATE VIEW Employee_View AS
SELECT Name, Salary
FROM Employee
WHERE Salary > 50000;


🗣️ This creates a view named Employee_View that shows employees earning more than ₹50,000.

🔹 Why Views are Used

To simplify complex queries
To restrict access to sensitive data (security)
To provide customized data for users
To make data independent of table structure changes


🧱 Types of Views in DBMS

| Type                  | Description                                                                                                      | Example / Syntax                                                                                                     |
| ----------------------| -----------------------------------------------------------------------------------------------------------------| ---------------------------------------------------------------------------------------------------------------------|
| 1️⃣ Simple View       | Created from one table and does not contain group functions or subqueries.                                       | sql CREATE VIEW Emp_View AS SELECT Name, Salary FROM Employee;                                                       |
| 2️⃣ Complex View      | Created from multiple tables using joins, or includes functions/subqueries.                                      | sql CREATE VIEW EmpDept_View AS SELECT e.Name, d.DeptName FROM Employee e JOIN Department d ON e.DeptID = d.DeptID;  |
| 3️⃣ Read-Only View    | Data cannot be updated through this view. Usually when it includes joins, group functions, or distinct values.   | Same as complex view (non-updatable).                                                                                |
| 4️⃣ Updatable View    | Allows INSERT, UPDATE, and DELETE operations — only when created from a single table without functions or joins. | sql CREATE VIEW Emp_View AS SELECT EmpID, Name FROM Employee;                                                        |
| 5️⃣ Materialized View | A physical copy of data stored in the database for fast performance (used in large databases).                   | sql CREATE MATERIALIZED VIEW Sales_Summary AS SELECT Region, SUM(Sales) FROM Orders GROUP BY Region;                 |



⚙️ Syntax for Creating and Dropping a View

Create View:

CREATE VIEW view_name AS
SELECT column1, column2
FROM table_name
WHERE condition;


Drop View:

DROP VIEW view_name;


💡 In short:

View = Virtual Table
Simple View → 1 Table
Complex View → Multiple Tables
Materialized View → Stored Copy of Data

      `},{id:44,question:"44. What is NoSQL? List its types and advantages.",answer:"",codeExample:`
🧩 What is NoSQL?

NoSQL stands for "Not Only SQL".
It is a database system used to store and manage unstructured, semi-structured, or large-scale data that does not fit well into traditional relational databases.

💡 In short:
NoSQL databases are used when data is big, complex, or rapidly changing, like in social media, IoT, e-commerce, etc.

⚙️ Main Features of NoSQL

Does not use tables and rows like SQL.
Stores data in JSON, key-value pairs, documents, or graphs.
Can handle big data and scales horizontally (add more servers easily).
Provides high performance and flexibility.

🗂️ Types of NoSQL Databases

| Type                      | Description                                                                         | Example              |
| --------------------------| ------------------------------------------------------------------------------------| ---------------------|
| 1️⃣ Key-Value Store       | Data is stored as key–value pairs (like a dictionary). Fast for lookups.            | Redis, DynamoDB       |
| 2️⃣ Document Store        | Data stored in documents (like JSON or XML format).                                 | MongoDB, CouchDB      |
| 3️⃣ Column-Oriented Store | Data stored in columns instead of rows, good for analytics.                         | Cassandra, HBase      |
| 4️⃣ Graph-Based Store     | Stores data as nodes and relationships (used for social networks, recommendations). | Neo4j, Amazon Neptune |

🌟 Advantages of NoSQL

  Handles Big Data easily.
  High Speed and Performance — faster read/write operations.
  Scalable — can handle millions of users.
  Flexible Schema — no need for fixed table structure.
  Better for Cloud and Real-time Applications.
  Easier to work with unstructured data (like text, images, JSON).

💡 Example (Document Store - MongoDB):
{
  "name": "Raj",
  "age": 22,
  "course": "BCA"
}


🗣️ This is a single document (like one record) stored in a NoSQL database.



✅ In short:

  NoSQL = Not Only SQL
  Used for Big, unstructured, or fast-changing data
  Types: Key-Value, Document, Column, Graph
  Advantages: Fast, Scalable, Flexible
      `},{id:45,question:"45. Compare SQL and NoSQL databases.",answer:"",codeExample:`
🧩 Difference between SQL and NoSQL Databases
| SQL Database                                                               | NoSQL Database                                                                             |
| ---------------------------------------------------------------------------| -------------------------------------------------------------------------------------------|
| SQL stands for Structured Query Language.                                  | NoSQL stands for Not Only SQL.                                                             |
| It is a relational database (stores data in tables with rows and columns). | It is a non-relational database (stores data as key-value, documents, columns, or graphs). |
| Has a fixed schema (structure of table is predefined).                     | Has a dynamic / flexible schema (structure can change easily).                             |
| Best for structured data (like numbers, names, records).                   | Best for unstructured or semi-structured data (like JSON, text, images).                   |
| Uses SQL queries to retrieve and manage data.                              | Uses different query methods, depending on the database type.                              |
| Supports ACID properties (ensures reliability of transactions).            | Supports BASE properties (focuses on high speed and flexibility).                          |
| Vertically scalable (increase power of one server).                        | Horizontally scalable (add more servers to handle more data).                              |
| Examples: MySQL, Oracle, PostgreSQL, MS SQL Server.                        | Examples: MongoDB, Cassandra, Redis, Neo4j.                                                |
| Suitable for complex queries and transactions.                             | Suitable for large-scale, real-time, or distributed data.                                  |


💡 In short:

  SQL → Structured, relational, fixed schema, ACID
  NoSQL → Unstructured, flexible schema, fast, scalable
      `},{id:46,question:"46. Explain Aggregation functions with syntax and example.",answer:"",codeExample:`
🧩 What are Aggregation Functions?

Aggregation functions are built-in SQL functions that perform calculations on multiple rows of a table and return a single result (summary value).

💡 Used mainly with the GROUP BY clause to group and summarize data.

⚙️ Common Aggregation Functions
| Function | Description                                  | Syntax             | Example                                                           |
| ---------| -------------------------------------------- | -------------------| ------------------------------------------------------------------|
| COUNT()  | Counts the number of rows.                   | COUNT(column_name) | SELECT COUNT(*) FROM Employee; <br>👉 Counts total employees.     |
| SUM()    | Calculates total sum of a numeric column.    | SUM(column_name)   | SELECT SUM(Salary) FROM Employee; <br>👉 Finds total salary paid. |
| AVG()    | Finds the average value of a numeric column. | AVG(column_name)   | SELECT AVG(Salary) FROM Employee; <br>👉 Finds average salary.    |
| MAX()    | Finds the maximum value in a column.         | MAX(column_name)   | SELECT MAX(Salary) FROM Employee; <br>👉 Finds highest salary.    |
| MIN()    | Finds the minimum value in a column.         | MIN(column_name)   | SELECT MIN(Salary) FROM Employee; <br>👉 Finds lowest salary.     |


🧠 Example with GROUP BY
SELECT Department, AVG(Salary) AS Average_Salary
FROM Employee
GROUP BY Department;


🗣️ This query shows the average salary of employees in each department.

💡 In short:

  Aggregate functions work on a set of rows.
  They return one result per group or per table.
  Common ones: COUNT, SUM, AVG, MAX, MIN.
      
      `},{id:47,question:"47. Write a query using CREATE VIEW for two tables.",answer:"",codeExample:`
🧩 Example Tables

Table 1: Employee

| EmpID | EmpName | DeptID | Salary |
| ----- | ------- | ------ | ------ |
| 1     | Raj     | 101    | 50000  |
| 2     | Meera   | 102    | 60000  |
| 3     | Amit    | 101    | 55000  |


Table 2: Department

| DeptID | DeptName |
| ------ | -------- |
| 101    | HR       |
| 102    | IT       |


⚙️ Query: Create a View combining two tables
CREATE VIEW Emp_Dept_View AS
SELECT e.EmpName, e.Salary, d.DeptName
FROM Employee e
JOIN Department d
ON e.DeptID = d.DeptID;


🧠 Explanation:

CREATE VIEW Emp_Dept_View AS → Creates a virtual table named Emp_Dept_View.
Employee e JOIN Department d → Combines data from both tables.
ON e.DeptID = d.DeptID → Connects both tables using the DeptID field.
The view will show employee names, their salaries, and department names.


📊 Result of View:
| EmpName | Salary | DeptName |
| ------- | ------ | -------- |
| Raj     | 50000  | HR       |
| Meera   | 60000  | IT       |
| Amit    | 55000  | HR       |


🧾 To use the View:
SELECT * FROM Emp_Dept_View;


🗣️ This will display the combined data as shown above.



      `},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1.1,question:"1 Study basic SQL statements.",answer:`
Query to study CREATE table command 
Query to study ALTER table commands 
Query to study DROP table command 
Query to study RENAME table command 
Query to study INSERT command 
Query to study UPDATE command 
Query to study DELETE command`,codeExample:`
1️⃣ CREATE TABLE Command

CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(50),
    Age INT,
    City VARCHAR(30)
);


✅ Output:
Table created successfully.

----------------------------------------------------------------------------------

2️⃣ INSERT Command

INSERT INTO Students (StudentID, Name, Age, City)
VALUES (1, 'Raj', 21, 'Keshod'),
       (2, 'Mihir', 22, 'Junagadh'),
       (3, 'Priya', 20, 'Surat');


✅ Output:
3 rows inserted successfully.


✅ After Insert — Table Data:
| StudentID | Name  | Age | City     |
| --------- | ----- | --- | -------- |
| 1         | Raj   | 21  | Keshod   |
| 2         | Mihir | 22  | Junagadh |
| 3         | Priya | 20  | Surat    |

----------------------------------------------------------------------------------

3️⃣ ALTER TABLE Command

➕ Add a new column

ALTER TABLE Students
ADD Email VARCHAR(50);


✅ Output:
Table altered successfully.


✅ Now Table Structure:
| Column Name | Data Type   |
| ----------- | ----------- |
| StudentID   | INT         |
| Name        | VARCHAR(50) |
| Age         | INT         |
| City        | VARCHAR(30) |
| Email       | VARCHAR(50) |

----------------------------------------------------------------------------------

4️⃣ UPDATE Command

UPDATE Students
SET City = 'Rajkot', Email = 'raj@example.com'
WHERE StudentID = 1;


✅ Output:
1 row updated successfully.

✅ After Update — Table Data:
| StudentID | Name  | Age | City     | Email                                     |
| --------- | ----- | --- | -------- | ----------------------------------------- |
| 1         | Raj   | 21  | Rajkot   | [raj@example.com](mailto:raj@example.com) |
| 2         | Mihir | 22  | Junagadh | NULL                                      |
| 3         | Priya | 20  | Surat    | NULL                                      |

----------------------------------------------------------------------------------

5️⃣ DELETE Command

DELETE FROM Students
WHERE StudentID = 3;


✅ Output:
1 row deleted successfully.


✅ After Delete — Table Data:
| StudentID | Name  | Age | City     | Email                                     |
| --------- | ----- | --- | -------- | ----------------------------------------- |
| 1         | Raj   | 21  | Rajkot   | [raj@example.com](mailto:raj@example.com) |
| 2         | Mihir | 22  | Junagadh | NULL                                      |

----------------------------------------------------------------------------------

6️⃣ RENAME TABLE Command

RENAME TABLE Students TO CollegeStudents;


✅ Output:

Table renamed successfully.


✅ Now the table name is:
CollegeStudents

✅ Table Data:
| StudentID | Name  | Age | City     | Email                                     |
| --------- | ----- | --- | -------- | ----------------------------------------- |
| 1         | Raj   | 21  | Rajkot   | [raj@example.com](mailto:raj@example.com) |
| 2         | Mihir | 22  | Junagadh | NULL                                      |

----------------------------------------------------------------------------------

7️⃣ DROP TABLE Command

DROP TABLE CollegeStudents;


✅ Output:
Table dropped successfully.


✅ Now if you try:

SELECT * FROM CollegeStudents;


❌ Error:

ERROR: Table 'CollegeStudents' doesn't exist.

✅ Summary (With Results)
| Command      | Purpose           | Example Output               |
| ------------ | ----------------- | ---------------------------- |
| CREATE TABLE | Creates table     | Table created successfully   |
| INSERT       | Adds data         | 3 rows inserted successfully |
| ALTER TABLE  | Changes structure | Table altered successfully   |
| UPDATE       | Changes data      | 1 row updated successfully   |
| DELETE       | Removes data      | 1 row deleted successfully   |
| RENAME TABLE | Renames table     | Table renamed successfully   |
| DROP TABLE   | Deletes table     | Table dropped successfully   |




-----------------------------------------------------------------------------------
-----------------------------------------------------------------------------------

🔹 Meaning of AS

The keyword AS is used to give a temporary name (alias) to a column or table in an SQL query.
It does not change the real column or table name in the database — it only renames it for the duration of the query result.

📘 Your Example
SELECT ProductName AS Name FROM Products
UNION
SELECT CustomerName AS Name FROM Customers;

Step-by-step explanation:

First query:

SELECT ProductName AS Name FROM Products;


This selects the column ProductName from the Products table.

Using AS Name, it renames the output column to Name instead of showing “ProductName” in the result.

✅ Output example:

Name
Laptop
Keyboard

Second query:

SELECT CustomerName AS Name FROM Customers;


Similarly, it selects CustomerName from Customers and renames it to Name.

✅ Output example:

Name
Rajesh Kumar
Neha Sharma

UNION combines both results:

Because both subqueries have the same column name (Name), the union works smoothly.

The final output merges all product and customer names into a single column called Name.

✅ Final Output:
| Name         |
| ------------ |
| Laptop       |
| Keyboard     |
| Rajesh Kumar |
| Neha Sharma  |


`},{id:2.2,question:"2 STUDY BASIC SQL STATEMENTS",answer:"",codeExample:`
A. Basic SELECT Queries

📘 Question:
Write an SQL query to retrieve all columns and rows from the Employees table.

SELECT * FROM Employees;

✅ Explanation:
* means all columns — this shows the full Employees table.

Example Output:
| EmployeeID | FirstName | LastName | Salary | DepartmentID |
| ---------- | --------- | -------- | ------ | ------------ |
| 1          | Raj       | Doe      | 50000  | D01          |
| 2          | Mihir     | Patel    | 60000  | D02          |
| 3          | Priya     | Shah     | 55000  | D01          |


----------------------------------------------------------------------------------

B. Filtering Data

📘 Question:
Find all employees whose last name is 'Doe'.

SELECT * FROM Employees
WHERE LastName = 'Doe';


✅ Explanation:
WHERE is used to filter specific rows that meet the condition.

Example Output:
| EmployeeID | FirstName | LastName | Salary | DepartmentID |
| ---------- | --------- | -------- | ------ | ------------ |
| 1          | Raj       | Doe      | 50000  | D01          |


----------------------------------------------------------------------------------

C. Sorting Data

📘 Question:
List all books from the Books table, ordered by publication year in descending order.

SELECT * FROM Books
ORDER BY PublicationYear DESC;


✅ Explanation:
ORDER BY arranges rows; DESC = descending (newest first).

Example Output:
| BookID | Title       | Author   | PublicationYear |
| ------ | ----------- | -------- | --------------- |
| 3      | Learn SQL   | Sam Roy  | 2024            |
| 1      | DBMS Basics | A. Mehta | 2023            |
| 2      | Data Models | S. Shah  | 2020            |


----------------------------------------------------------------------------------

D. Aggregating Data

📘 Question:
Find the total number of orders in the Orders table.

SELECT COUNT(*) AS TotalOrders
FROM Orders;


✅ Explanation:
COUNT(*) counts total rows (orders).

Example Output:
| TotalOrders |
| ----------- |
| 150         |


----------------------------------------------------------------------------------

E. Grouping Data

📘 Question:
Find the average salary of employees in each department.

SELECT DepartmentID, AVG(Salary) AS AverageSalary
FROM Employees
GROUP BY DepartmentID;


✅ Explanation:
GROUP BY groups data by department, and AVG() calculates the average per group.

Example Output:
| DepartmentID | AverageSalary |
| ------------ | ------------- |
| D01          | 52500         |
| D02          | 60000         |


----------------------------------------------------------------------------------

F. Using DISTINCT

📘 Question:
List all unique job titles from the Employees table.

SELECT DISTINCT JobTitle
FROM Employees;


✅ Explanation:
DISTINCT removes duplicate job titles.

Example Output:
| JobTitle  |
| --------- |
| Manager   |
| Developer |
| Analyst   |


----------------------------------------------------------------------------------

G. Using LIKE

📘 Question:
Find all products from the Products table where the product name contains the word ‘Laptop’.

SELECT * FROM Products
WHERE ProductName LIKE '%Laptop%';


✅ Explanation:
%Laptop% means any text before or after the word Laptop.

Example Output:
| ProductID | ProductName       | Price |
| --------- | ----------------- | ----- |
| 1         | HP Laptop         | 55000 |
| 2         | Dell Laptop       | 60000 |
| 5         | Lenovo Laptop 15" | 58000 |


----------------------------------------------------------------------------------

H. Nested Subqueries

📘 Question:
Find the names of employees who have a salary greater than the average salary of all employees.

SELECT FirstName, LastName, Salary
FROM Employees
WHERE Salary > (
    SELECT AVG(Salary)
    FROM Employees
);


✅ Explanation:
The inner query calculates the average salary;
the outer query selects those earning more than that.

Example Output:
| FirstName | LastName | Salary |
| --------- | -------- | ------ |
| Mihir     | Patel    | 60000  |


----------------------------------------------------------------------------------

I. Set Operations

📘 Question:
Find the union of all product names from the Products table and all customer names from the Customers table.

SELECT ProductName AS Name FROM Products
UNION
SELECT CustomerName AS Name FROM Customers;


✅ Explanation:
UNION combines results from two queries, removing duplicates.

Example Output:
| Name              |
| ----------------- |
| HP Laptop         |
| Dell Laptop       |
| Lenovo Laptop 15" |
| Rajesh Kumar      |
| Priya Shah        |


----------------------------------------------------------------------------------

✅ Summary Table
| No. | Topic         | SQL Keyword          | Example Table        | Key Function       |
| --- | ------------- | -------------------- | -------------------- | ------------------ |
| A   | Select All    | SELECT *             | Employees            | Show all data      |
| B   | Filter        | WHERE                | Employees            | Find specific rows |
| C   | Sort          | ORDER BY DESC        | Books                | Sort descending    |
| D   | Aggregate     | COUNT()              | Orders               | Count total rows   |
| E   | Group         | GROUP BY + AVG()     | Employees            | Group by dept      |
| F   | Unique        | DISTINC              | Employees            | Remove duplicates  |
| G   | Pattern Match | LIKE %text%'         | Products             | Search text        |
| H   | Subquery      | Nested SELECT        | Employees            | Compare to avg     |
| I   | Set Operation | UNION                | Products + Customers | Combine data       |



`},{id:3.3,question:"3 SQL JOIN Statements",answer:"<> means -> not equal to(Equivalent to != in many programming languages).",codeExample:`

🧩 What happens when you write only JOIN without type?

👉 When you write JOIN (without INNER, LEFT, RIGHT, or FULL),
SQL treats it as an INNER JOIN by default.




1️⃣ INNER JOIN

📘 Question:
Find the names of customers and their associated orders.

Tables:

Customers(CustomerID, CustomerName)

Orders(OrderID, CustomerID, OrderDate)

SELECT Customers.CustomerName, Orders.OrderID, Orders.OrderDate
FROM Customers
INNER JOIN Orders
ON Customers.CustomerID = Orders.CustomerID;


✅ Explanation:
INNER JOIN returns only matching rows between both tables (customers who have placed orders).

Example Output:
| CustomerName | OrderID | OrderDate  |
| ------------ | ------- | ---------- |
| Raj          | 101     | 2024-10-01 |
| Priya        | 102     | 2024-10-02 |
| Mihir        | 104     | 2024-10-04 |


----------------------------------------------------------------------------------

2️⃣ LEFT JOIN (LEFT OUTER JOIN)

📘 Question:
List all customers and any orders they may have — include customers without orders.

SELECT Customers.CustomerName, Orders.OrderID, Orders.OrderDate
FROM Customers
LEFT JOIN Orders
ON Customers.CustomerID = Orders.CustomerID;


✅ Explanation:
LEFT JOIN returns all customers, even if they have no orders (shows NULL for order details).

Example Output:
| CustomerName | OrderID | OrderDate  |
| ------------ | ------- | ---------- |
| Raj          | 101     | 2024-10-01 |
| Priya        | 102     | 2024-10-02 |
| Mihir        | 104     | 2024-10-04 |
| Neha         | NULL    | NULL       |

👉 Here, Neha has no order.


----------------------------------------------------------------------------------

3️⃣ RIGHT JOIN (RIGHT OUTER JOIN)

📘 Question:
List all orders and their associated customer details.
Include orders that do not have an associated customer.

SELECT Customers.CustomerName, Orders.OrderID, Orders.OrderDate
FROM Customers
RIGHT JOIN Orders
ON Customers.CustomerID = Orders.CustomerID;


✅ Explanation:
RIGHT JOIN returns all orders, even if no matching customer exists.

Example Output:
| CustomerName | OrderID | OrderDate  |
| ------------ | ------- | ---------- |
| Raj          | 101     | 2024-10-01 |
| Priya        | 102     | 2024-10-02 |
| NULL         | 105     | 2024-10-05 |

👉 Order 105 has no registered customer.


----------------------------------------------------------------------------------

4️⃣ FULL JOIN (FULL OUTER JOIN)

📘 Question:
List all customers and orders — including customers without orders and orders without customers.

SELECT Customers.CustomerName, Orders.OrderID, Orders.OrderDate
FROM Customers
FULL OUTER JOIN Orders
ON Customers.CustomerID = Orders.CustomerID;


✅ Explanation:
FULL OUTER JOIN returns all records from both tables — unmatched rows show NULL values.

Example Output:
| CustomerName | OrderID | OrderDate  |
| ------------ | ------- | ---------- |
| Raj          | 101     | 2024-10-01 |
| Priya        | 102     | 2024-10-02 |
| Neha         | NULL    | NULL       |
| NULL         | 105     | 2024-10-05 |



----------------------------------------------------------------------------------

5️⃣ SELF JOIN

🔹 What is a SELF JOIN?
  A SELF JOIN is when a table is joined with itself.


That means:

  The same table appears twice in the query.
  We use different aliases to treat them like two separate tables.
  It’s useful when rows in a table are related to other rows in the same table.

🔸 Example Situation

Imagine a table named Employees:
| EmpID | EmpName | ManagerID |
| ----- | ------- | --------- |
| 1     | Raj     | NULL      |
| 2     | Neha    | 1         |
| 3     | Aachal  | 1         |
| 4     | Riya    | 2         |
| 5     | Karan   | 2         |


Here:

ManagerID refers to another EmpID in the same table.
→ So, each employee’s manager is also an employee.


🔹 SELF JOIN Query

We can use a SELF JOIN to find each employee and their manager’s name.

SELECT 
    e.EmpName AS Employee,
    m.EmpName AS Manager
FROM 
    Employees AS e
JOIN 
    Employees AS m
ON 
    e.ManagerID = m.EmpID;


🔸 Explanation
| Symbol                  | Meaning                                      |
| ----------------------- | -------------------------------------------- |
| Employees AS e          | first copy of the table (for employees)      |
| Employees AS m          | second copy of the same table (for managers) |
| e.ManagerID = m.EmpID   | connects each employee to their manager      |


✅ Output:
| Employee | Manager |
| -------- | ------- |
| Neha     | Raj     |
| Aachal   | Raj     |
| Riya     | Neha    |
| Karan    | Neha    |


💡 Why use SELF JOIN?

To compare rows in the same table.

To find relationships within one table (e.g., employees reporting to managers, prerequisite courses, parent-child relationships, etc.)

🧩 Simple Tip

Always use aliases (like e, m) when doing a SELF JOIN —
otherwise, SQL won’t know which copy of the table you’re referring to.


-----------------------------------------------------------------------------------

if you not understand above all then show this :


🔸 What the condition does:

e.ManagerID = m.EmpID means:

Take each employee (e) from the first table copy.

Find the manager (m) from the second table copy
where the employee’s ManagerID matches the manager’s EmpID.

So:

✅ If the condition matches, that employee–manager pair is shown.

❌ If it does not match, that employee (like the CEO who has no manager) is not shown — because JOIN only shows matching rows.


📘 Example:

| EmpID | EmpName | ManagerID |
| ----- | ------- | --------- |
| 1     | Raj     | NULL      |
| 2     | Neha    | 1         |
| 3     | Aachal  | 1         |
| 4     | Riya    | 2         |
| 5     | Karan   | 2         |

condition e.ManagerID = m.EmpID;

🔹 Step by step:
                           this side check who is manager of whom
| e.EmpName | e.ManagerID | m.EmpID | m.EmpName | Match?       |
| --------- | ----------- | ------- | --------- | ----------   |
| Raj       | NULL        | —       | —         | ❌ no match |
| Neha      | 1           | 1       | Raj       | ✅ yes      |
| Aachal    | 1           | 1       | Raj       | ✅ yes      |
| Riya      | 2           | 2       | Neha      | ✅ yes      |
| Karan     | 2           | 2       | Neha      | ✅ yes      |


✅ Result (only matched ones):

| Employee | Manager |
| -------- | ------- |
| Neha     | Raj     |
| Aachal   | Raj     |
| Riya     | Neha    |
| Karan    | Neha    |


----------------------------------------------------------------------------------
----------------------------------------------------------------------------------


6️⃣ CROSS JOIN

A CROSS JOIN returns the Cartesian product of two tables.
That means:
👉 Every row from the first table is combined with every row from the second table.

There is no condition (like ON) in a CROSS JOIN.

🔸 Basic Example

Table 1: Students
| ID | Name |
| -- | ---- |
| 1  | Raj  |
| 2  | Neha |

Table 2: Subjects
| SubID | Subject |
| ----- | ------- |
| 101   | Math    |
| 102   | Science |


🔹 Query:

SELECT Name, Subject
FROM Students
CROSS JOIN Subjects;


🔹 What Happens:

  Each student is paired with every subject.
  The result = number of rows in Students × number of rows in Subjects

Here:
2 students × 2 subjects = 4 rows

✅ Output:

| Name | Subject |
| ---- | ------- |
| Raj  | Math    |
| Raj  | Science |
| Neha | Math    |
| Neha | Science |



⚠️ Be Careful

If both tables are large, a CROSS JOIN can produce millions of rows because it multiplies the total count.

Example:

  Table A → 1,000 rows
  Table B → 500 rows
    👉 Result = 1,000 × 500 = 500,000 rows



      `},{id:4.4,question:"4. Write a PL/SQL program to find the total and average of 4 subjects and display the grade",answer:"",codeExample:`
PL/SQL Program: Total, Average & Grade


DECLARE
    -- Declare variables for 4 subjects
    sub1 NUMBER := 85;
    sub2 NUMBER := 75;
    sub3 NUMBER := 90;
    sub4 NUMBER := 80;

    -- Variables for total, average, and grade
    total NUMBER;
    avg NUMBER;
    grade CHAR(2);
BEGIN
    -- Calculate total and average
    total := sub1 + sub2 + sub3 + sub4;
    avg := total / 4;

    -- Determine grade based on average
    IF avg >= 90 THEN
        grade := 'A';
    ELSIF avg >= 75 THEN
        grade := 'B';
    ELSIF avg >= 60 THEN
        grade := 'C';
    ELSE
        grade := 'F';
    END IF;

    -- Display results
    DBMS_OUTPUT.PUT_LINE('Marks in 4 Subjects:');
    DBMS_OUTPUT.PUT_LINE('Subject 1 = ' || sub1);
    DBMS_OUTPUT.PUT_LINE('Subject 2 = ' || sub2);
    DBMS_OUTPUT.PUT_LINE('Subject 3 = ' || sub3);
    DBMS_OUTPUT.PUT_LINE('Subject 4 = ' || sub4);
    DBMS_OUTPUT.PUT_LINE('----------------------------');
    DBMS_OUTPUT.PUT_LINE('Total Marks = ' || total);
    DBMS_OUTPUT.PUT_LINE('Average = ' || avg);
    DBMS_OUTPUT.PUT_LINE('Grade = ' || grade);
END;
/



✅ Explanation:
| Step                    | Description               |
| ----------------------- | ------------------------- |
| DECLARE                 | Used to define variables  |
| BEGIN ... END           | The main executable block |
| IF ... ELSIF ... ELSE   | Used for grade decision   |
| DBMS_OUTPUT.PUT_LINE    | Displays output on screen |



💡 Sample Output:
Marks in 4 Subjects:
Subject 1 = 85
Subject 2 = 75
Subject 3 = 90
Subject 4 = 80
----------------------------
Total Marks = 330
Average = 82.5
Grade = B


-----------------------------------------------------------------------------------

if you want to enter subject marks with user input then use this code:


DECLARE
    -- Declare variables for subjects
    sub1 NUMBER;
    sub2 NUMBER;
    sub3 NUMBER;
    sub4 NUMBER;

    -- Variables for total, average, and grade
    total NUMBER;
    avg NUMBER;
    grade CHAR(2);
BEGIN
    -- Accept user input for 4 subjects
    sub1 := &sub1;
    sub2 := &sub2;
    sub3 := &sub3;
    sub4 := &sub4;

    -- Calculate total and average
    total := sub1 + sub2 + sub3 + sub4;
    avg := total / 4;

    -- Determine grade based on average
    IF avg >= 90 THEN
        grade := 'A';
    ELSIF avg >= 75 THEN
        grade := 'B';
    ELSIF avg >= 60 THEN
        grade := 'C';
    ELSE
        grade := 'F';
    END IF;

    -- Display results
    DBMS_OUTPUT.PUT_LINE('Marks in 4 Subjects:');
    DBMS_OUTPUT.PUT_LINE('Subject 1 = ' || sub1);
    DBMS_OUTPUT.PUT_LINE('Subject 2 = ' || sub2);
    DBMS_OUTPUT.PUT_LINE('Subject 3 = ' || sub3);
    DBMS_OUTPUT.PUT_LINE('Subject 4 = ' || sub4);
    DBMS_OUTPUT.PUT_LINE('----------------------------');
    DBMS_OUTPUT.PUT_LINE('Total Marks = ' || total);
    DBMS_OUTPUT.PUT_LINE('Average = ' || avg);
    DBMS_OUTPUT.PUT_LINE('Grade = ' || grade);
END;
/



💡 Sample Run:

When you execute the program in SQL*Plus or Oracle Live SQL, it will ask:

Enter value for sub1: 90
Enter value for sub2: 80
Enter value for sub3: 75
Enter value for sub4: 85


✅ Output:

Marks in 4 Subjects:
Subject 1 = 90
Subject 2 = 80
Subject 3 = 75
Subject 4 = 85
----------------------------
Total Marks = 330
Average = 82.5
Grade = B


      `},{id:5.5,question:"5. Write a PL/SQL program to find factorial of a given number using Functions",answer:"",codeExample:`
PL/SQL Program — Factorial Using Recursive Function


DECLARE
    -- Declare a variable to store user input
    n NUMBER;
    result NUMBER;

    -- Function to calculate factorial using recursion
    FUNCTION factorial(num NUMBER)
    RETURN NUMBER
    IS
    BEGIN
        IF num = 0 THEN
            RETURN 1;  -- Base case: factorial of 0 = 1
        ELSE
            RETURN num * factorial(num - 1);  -- Recursive call
        END IF;
    END;

BEGIN
    -- Take input from user
    n := &n;

    -- Call the function
    result := factorial(n);

    -- Display the result
    DBMS_OUTPUT.PUT_LINE('Number = ' || n);
    DBMS_OUTPUT.PUT_LINE('Factorial = ' || result);
END;
/



✅ Explanation:

| Step                               | Description                   |
| ---------------------------------- | ----------------------------- |
| FUNCTION factorial                 | Declares a recursive function |
| IF num = 0 THEN RETURN 1;          | Base case for recursion       |
| RETURN num * factorial(num - 1);   | Recursive call                |
| n := &n;                           | Accepts input from the user   |
| DBMS_OUTPUT.PUT_LINE               | Displays output               |


💡 Sample Run:

When you execute the program in Oracle SQL or SQL*Plus:

Enter value for n: 5


✅ Output:

Number = 5
Factorial = 120

🧩 How Recursion Works (for n = 5):
factorial(5)
= 5 * factorial(4)
= 5 * 4 * factorial(3)
= 5 * 4 * 3 * factorial(2)
= 5 * 4 * 3 * 2 * factorial(1)
= 5 * 4 * 3 * 2 * 1
= 120

      
`},{id:6.6,question:"6. Write a PL/SQL program to generate Fibonacci series using functions",answer:"",codeExample:`
PL/SQL Program — Fibonacci Series Using Function


DECLARE
    n NUMBER;       -- input (non-negative)
    
    -- Recursive function matching: fib(0)=0, fib(1)=1
    FUNCTION fib(num NUMBER) RETURN NUMBER IS
    BEGIN
        IF num < 0 THEN
            RETURN NULL; -- invalid
        ELSIF num = 0 THEN
            RETURN 0;
        ELSIF num = 1 THEN
            RETURN 1;
        ELSE
            RETURN fib(num - 1) + fib(num - 2);
        END IF;
    END;

BEGIN
    -- Get user input
    n := &n; -- enter non-negative integer

    IF n < 0 THEN
        DBMS_OUTPUT.PUT_LINE('Please enter a non-negative integer.');
    ELSE
        DBMS_OUTPUT.PUT_LINE('Fibonacci numbers from 0 to ' || n || ':');
        FOR i IN 0..n LOOP
            DBMS_OUTPUT.PUT(fib(i) || ' ');
        END LOOP;
        DBMS_OUTPUT.NEW_LINE;
        DBMS_OUTPUT.PUT_LINE('fibonacci(' || n || ') = ' || fib(n));
    END IF;
END;
/


Example Run:
If you input n = 7, output will be:

Fibonacci numbers from 0 to 7:
0 1 1 2 3 5 8 13 
fibonacci(7) = 13



-----------------------------------------------------------------------------------

if you want to understand how the Fibonacci function works step-by-step, here’s a breakdown:

🧮 Recursive Formula
fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)
fibonacci(0) = 0
fibonacci(1) = 1

Example: fibonacci(7)
fibonacci(7)
= fibonacci(6) + fibonacci(5)
= (fibonacci(5) + fibonacci(4)) + (fibonacci(4) + fibonacci(3))
= ((fibonacci(4) + fibonacci(3)) + (fibonacci(3) + fibonacci(2))) 
  + ((fibonacci(3) + fibonacci(2)) + (fibonacci(2) + fibonacci(1)))
= (((fibonacci(3) + fibonacci(2)) + (fibonacci(2) + fibonacci(1))) 
   + ((fibonacci(2) + fibonacci(1)) + (fibonacci(1) + fibonacci(0))))
  + (((fibonacci(2) + fibonacci(1)) + (fibonacci(1) + fibonacci(0))) 
     + ((fibonacci(1) + fibonacci(0)) + (fibonacci(0) + fibonacci(-1))))


Now, let’s simplify step by step (using base cases):

fibonacci(0) = 0
fibonacci(1) = 1

So,

fibonacci(2) = fibonacci(1) + fibonacci(0) = 1 + 0 = 1
fibonacci(3) = fibonacci(2) + fibonacci(1) = 1 + 1 = 2
fibonacci(4) = fibonacci(3) + fibonacci(2) = 2 + 1 = 3
fibonacci(5) = fibonacci(4) + fibonacci(3) = 3 + 2 = 5
fibonacci(6) = fibonacci(5) + fibonacci(4) = 5 + 3 = 8
fibonacci(7) = fibonacci(6) + fibonacci(5) = 8 + 5 = 13

✅ Final Answer
fibonacci(7) = 13

Step Summary
fibonacci(7) = fibonacci(6) + fibonacci(5)
              = (8) + (5)
              = 13



      `},{id:7.7,question:"7. Write a program to Create a procedure to check if the number is prime.",answer:"",codeExample:`

✅ PL/SQL Code


SET SERVEROUTPUT ON;                           //display output from DBMS_OUTPUT.PUT_LINE commands. Without this, you won’t see any printed messages.

DECLARE
    n NUMBER;

    -- Procedure to check if number is prime
    PROCEDURE check_prime(num IN NUMBER) IS       // the NUMBER id like a data type of num
        i NUMBER;
        flag BOOLEAN := TRUE;
    BEGIN
        IF num <= 1 THEN
            DBMS_OUTPUT.PUT_LINE(num || ' is NOT a prime number.');        // -> || is the string concatenation operator (it joins text and variables together).
        ELSE                                                   // sqrt(9)=3   //floor is always returns small integer value like 12.9 = 12, -12.9 = -13
            FOR i IN 2 .. FLOOR(SQRT(num)) LOOP               // sqrt(7)=2.6457, floor(2.6457)=2, sqrt() is returns the square root of a number. 
                IF MOD(num, i) = 0 THEN                       // mod(10,3)=1, mod(10,5)=0     
                    flag := FALSE;
                    EXIT;
                END IF;
            END LOOP;

            IF flag THEN
                DBMS_OUTPUT.PUT_LINE(num || ' is a PRIME number.');
            ELSE
                DBMS_OUTPUT.PUT_LINE(num || ' is NOT a prime number.');
            END IF;
        END IF;
    END;

BEGIN
    -- Get input number from user
    n := &n;   -- Example: Enter 7
    check_prime(n);
END;
/



📘 Example Outputs

Input:

Enter value for n: 7

Output:

7 is a PRIME number.



Input:

Enter value for n: 12

Output:

12 is NOT a prime number.


--------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------

        If we already use SQRT(num), why do we still need FLOOR()?

🔸 1. What SQRT(num) returns

sqrt() returns a decimal (floating-point) value.

Example:

SQRT(25) = 5
SQRT(10) = 3.162277...
SQRT(9) = 3


So for numbers that are not perfect squares, SQRT(num) gives a decimal value like 3.162.


-----------------------------------



🔹 SQRT(num):

SQRT means square root.

Example: SQRT(9) = 3, SQRT(16) = 4.

In prime number checking, you only need to test divisibility up to the square root of the number, not beyond.

Because:

If a number has a factor larger than its square root, the other factor must be smaller — so you’ve already checked it.

Example:
To check 25, you only test 2, 3, 4, 5 → because 25 = 5 × 5.



🔹 FLOOR()

FLOOR() returns the largest integer less than or equal to a number (removes decimals).

Example:

FLOOR(4.9) = 4
FLOOR(3.2) = 3


So if SQRT(num) = 4.47, FLOOR(SQRT(num)) = 4.

That means the loop will stop at 4.


🔹 MOD(num, i)

MOD(a, b) returns the remainder when a is divided by b.

Example:

MOD(10, 3) = 1   (since 10 ÷ 3 = 3 remainder 1)
MOD(10, 5) = 0   (since 10 ÷ 5 = 2 remainder 0)



--------------------------------------------------------------------------------------------


🧠 1. What is a Procedure?

👉 A procedure is like a small program inside your database.
It performs some work — for example:

Checking if a number is prime

Adding new data

Showing student marks

Calculating total salary



🎯 2. Why do we use a Procedure?

Because sometimes we need to do the same work again and again.
Instead of writing the same code every time,
we write it once inside a procedure and then call it whenever needed.

✅ Example in real life:

Think of a procedure like a machine in your shop.

You build the machine once.

Then whenever you need it, you just press a button — it works for you.

Same way —
in PL/SQL, you create a procedure once,
and then call it anytime to do that job automatically.


💻 3. How a Procedure Works (simple view)

When you create a procedure:
  You give it a name
  You tell it what to do

When you run (call) it:
  It executes those steps automatically.


⚖️ Differences Between Procedure and Function
| Feature            | Procedure                                             | Function                                                   |
| -------------------| ----------------------------------------------------- | ---------------------------------------------------------- |
| Purpose            | To perform a task (e.g., check prime, display result) | To perform a task and return a value                       |
| Returns a value?   | ❌ No                                                 | ✅ Yes (using RETURN)                                     |
| How it is called   | Called using a block: BEGIN ... END;                  | Called inside an expression like x := function_name(5);    |
| Used in SQL query? | ❌ Usually No                                         | ✅ Can be used in SQL SELECT statements                   |
| Example use        | Checking if number is prime, printing messages        | Calculating factorial or total salary and returning result |

`},{id:8.8,question:"8. Write a PL/SQL program to print Armstrong numbers",answer:"",codeExample:`
PL/SQL Program — Armstrong Numbers


SET SERVEROUTPUT ON;

DECLARE
    num NUMBER;         -- number to check
    n NUMBER;           -- copy of the number
    rem NUMBER;         -- remainder (each digit)
    sum NUMBER;         -- sum of cubes of digits
BEGIN
    DBMS_OUTPUT.PUT_LINE('Armstrong numbers between 1 and 1000 are:');

    FOR num IN 1..1000 LOOP
        n := num;
        sum := 0;

        -- separate digits and calculate cube of each digit
        WHILE n > 0 LOOP
            rem := MOD(n, 10);            -- get last digit
            sum := sum + (rem * rem * rem); -- cube of digit and add
            n := TRUNC(n / 10);           -- remove last digit
        END LOOP;

        -- check if sum equals original number
        IF sum = num THEN
            DBMS_OUTPUT.PUT_LINE(num);
        END IF;
    END LOOP;
END;
/


📘 Output

Armstrong numbers between 1 and 1000 are:
1
153
370
371
407


-----------------------------------------------------------------------------------

what is Armstrong Number

💡 Definition:

An Armstrong Number (also called a Narcissistic Number) is a number that is equal to the sum of the cubes of its digits (for a 3-digit number).

In general:

For an n-digit number, each digit is raised to the power of n,
and the sum of those powers equals the original number.

🧠 Example 1:

153

Let’s break it down:
| Digit   | Cube (³)                 |
| ------- | ------------------------ |
| 1       | 1³ = 1                   |
| 5       | 5³ = 125                 |
| 3       | 3³ = 27                  |
| Sum     | 1 + 125 + 27 = 153 ✅    |

So 153 = 153, hence it is an Armstrong number.

-------------

📘 Why it’s called “cube”

It comes from geometry:

If you make a cube (a 3D box) with each side of length n,

The volume of the cube = n × n × n = n³.

So in math, raising to the power of 3 is called cubing.

--------------------------------------------------------------------------------------


💡 The truth is:

MOD() always returns the remainder — that’s its real purpose.
But in this Armstrong number program, the remainder happens to be the last digit of the number.

Let’s understand why 👇

Take an example:
Suppose n = 153

    rem := MOD(n, 10);


➡️ Here,
MOD(153, 10) means remainder when 153 is divided by 10
→ 153 ÷ 10 = 15 remainder 3

✅ So rem = 3 — and that’s the last digit of 153.

Then we remove that last digit:
    n := TRUNC(n / 10);

➡️ 153 ÷ 10 = 15.3 → TRUNC(15.3) = 15





1️⃣ What TRUNC() does

TRUNC(x) → Removes the decimal part, no matter if the number is positive or negative.
It simply chops off everything after the decimal.

TRUNC(x) → means truncate, i.e., remove the decimal (fractional) part of a number.
It does not round, it just cuts off the decimal part.

✅ Examples:

TRUNC(12.9)   → 12
TRUNC(12.1)   → 12
TRUNC(-12.9)  → -12
TRUNC(-12.1)  → -12



⚙️ 2️⃣ What FLOOR() does                 //floor is always returns small integer value like 12.9 = 12, -12.9 = -13

FLOOR(x) → Rounds down to the nearest whole number, toward −infinity (the smaller number).

✅ Examples:

FLOOR(12.9)   → 12
FLOOR(12.1)   → 12
FLOOR(-12.1)  → -13   ← notice this!
FLOOR(-12.9)  → -13


      `},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""}],y=L=>{fe(A===L?null:L)};return ze.jsxs("div",{className:"app-container",children:[ze.jsx("h1",{children:"ADBMS Interview Questions"}),ze.jsx("div",{className:"questions-container",children:F.map(L=>ze.jsxs("div",{className:"question-item",children:[ze.jsx("button",{className:`question-button ${A===L.id?"active":""}`,onClick:()=>y(L.id),children:L.question}),A===L.id&&ze.jsxs("div",{className:"answer-container",children:[ze.jsxs("div",{className:"answer",children:[ze.jsx("h3",{children:"Answer:"}),ze.jsx("p",{children:L.answer})]}),L.codeExample&&ze.jsxs("div",{className:"code-example",children:[ze.jsx("h3",{children:"Code Example:"}),ze.jsx("pre",{children:ze.jsx("code",{children:L.codeExample})})]})]})]},L.id))})]})}ty.createRoot(document.getElementById("root")).render(ze.jsx(Dd.StrictMode,{children:ze.jsx(ly,{})}));
