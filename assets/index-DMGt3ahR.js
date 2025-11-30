(function(){const de=document.createElement("link").relList;if(de&&de.supports&&de.supports("modulepreload"))return;for(const w of document.querySelectorAll('link[rel="modulepreload"]'))p(w);new MutationObserver(w=>{for(const F of w)if(F.type==="childList")for(const he of F.addedNodes)he.tagName==="LINK"&&he.rel==="modulepreload"&&p(he)}).observe(document,{childList:!0,subtree:!0});function W(w){const F={};return w.integrity&&(F.integrity=w.integrity),w.referrerPolicy&&(F.referrerPolicy=w.referrerPolicy),w.crossOrigin==="use-credentials"?F.credentials="include":w.crossOrigin==="anonymous"?F.credentials="omit":F.credentials="same-origin",F}function p(w){if(w.ep)return;w.ep=!0;const F=W(w);fetch(w.href,F)}})();var no={exports:{}},Sl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mf;function Vh(){if(mf)return Sl;mf=1;var N=Symbol.for("react.transitional.element"),de=Symbol.for("react.fragment");function W(p,w,F){var he=null;if(F!==void 0&&(he=""+F),w.key!==void 0&&(he=""+w.key),"key"in w){F={};for(var we in w)we!=="key"&&(F[we]=w[we])}else F=w;return w=F.ref,{$$typeof:N,type:p,key:he,ref:w!==void 0?w:null,props:F}}return Sl.Fragment=de,Sl.jsx=W,Sl.jsxs=W,Sl}var hf;function Fh(){return hf||(hf=1,no.exports=Vh()),no.exports}var Ie=Fh(),lo={exports:{}},B={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pf;function Xh(){if(pf)return B;pf=1;var N=Symbol.for("react.transitional.element"),de=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),he=Symbol.for("react.context"),we=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),re=Symbol.iterator;function Fe(c){return c===null||typeof c!="object"?null:(c=re&&c[re]||c["@@iterator"],typeof c=="function"?c:null)}var ke={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xe=Object.assign,Ca={};function Xe(c,T,R){this.props=c,this.context=T,this.refs=Ca,this.updater=R||ke}Xe.prototype.isReactComponent={},Xe.prototype.setState=function(c,T){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,T,"setState")},Xe.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function Fa(){}Fa.prototype=Xe.prototype;function Le(c,T,R){this.props=c,this.context=T,this.refs=Ca,this.updater=R||ke}var ua=Le.prototype=new Fa;ua.constructor=Le,xe(ua,Xe.prototype),ua.isPureReactComponent=!0;var Ta=Array.isArray;function ze(){}var Y={H:null,A:null,T:null,S:null},He=Object.prototype.hasOwnProperty;function va(c,T,R){var O=R.ref;return{$$typeof:N,type:c,key:T,ref:O!==void 0?O:null,props:R}}function qt(c,T){return va(c.type,T,c.props)}function Da(c){return typeof c=="object"&&c!==null&&c.$$typeof===N}function qe(c){var T={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(R){return T[R]})}var bt=/\/+/g;function Ma(c,T){return typeof c=="object"&&c!==null&&c.key!=null?qe(""+c.key):T.toString(36)}function Ea(c){switch(c.status){case"fulfilled":return c.value;case"rejected":throw c.reason;default:switch(typeof c.status=="string"?c.then(ze,ze):(c.status="pending",c.then(function(T){c.status==="pending"&&(c.status="fulfilled",c.value=T)},function(T){c.status==="pending"&&(c.status="rejected",c.reason=T)})),c.status){case"fulfilled":return c.value;case"rejected":throw c.reason}}throw c}function g(c,T,R,O,I){var H=typeof c;(H==="undefined"||H==="boolean")&&(c=null);var J=!1;if(c===null)J=!0;else switch(H){case"bigint":case"string":case"number":J=!0;break;case"object":switch(c.$$typeof){case N:case de:J=!0;break;case Z:return J=c._init,g(J(c._payload),T,R,O,I)}}if(J)return I=I(c),J=O===""?"."+Ma(c,0):O,Ta(I)?(R="",J!=null&&(R=J.replace(bt,"$&/")+"/"),g(I,T,R,"",function(Nn){return Nn})):I!=null&&(Da(I)&&(I=qt(I,R+(I.key==null||c&&c.key===I.key?"":(""+I.key).replace(bt,"$&/")+"/")+J)),T.push(I)),1;J=0;var _e=O===""?".":O+":";if(Ta(c))for(var pe=0;pe<c.length;pe++)O=c[pe],H=_e+Ma(O,pe),J+=g(O,T,R,H,I);else if(pe=Fe(c),typeof pe=="function")for(c=pe.call(c),pe=0;!(O=c.next()).done;)O=O.value,H=_e+Ma(O,pe++),J+=g(O,T,R,H,I);else if(H==="object"){if(typeof c.then=="function")return g(Ea(c),T,R,O,I);throw T=String(c),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return J}function D(c,T,R){if(c==null)return c;var O=[],I=0;return g(c,O,"","",function(H){return T.call(R,H,I++)}),O}function _(c){if(c._status===-1){var T=c._result;T=T(),T.then(function(R){(c._status===0||c._status===-1)&&(c._status=1,c._result=R)},function(R){(c._status===0||c._status===-1)&&(c._status=2,c._result=R)}),c._status===-1&&(c._status=0,c._result=T)}if(c._status===1)return c._result.default;throw c._result}var ae=typeof reportError=="function"?reportError:function(c){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof c=="object"&&c!==null&&typeof c.message=="string"?String(c.message):String(c),error:c});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",c);return}console.error(c)},ie={map:D,forEach:function(c,T,R){D(c,function(){T.apply(this,arguments)},R)},count:function(c){var T=0;return D(c,function(){T++}),T},toArray:function(c){return D(c,function(T){return T})||[]},only:function(c){if(!Da(c))throw Error("React.Children.only expected to receive a single React element child.");return c}};return B.Activity=x,B.Children=ie,B.Component=Xe,B.Fragment=W,B.Profiler=w,B.PureComponent=Le,B.StrictMode=p,B.Suspense=L,B.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Y,B.__COMPILER_RUNTIME={__proto__:null,c:function(c){return Y.H.useMemoCache(c)}},B.cache=function(c){return function(){return c.apply(null,arguments)}},B.cacheSignal=function(){return null},B.cloneElement=function(c,T,R){if(c==null)throw Error("The argument must be a React element, but you passed "+c+".");var O=xe({},c.props),I=c.key;if(T!=null)for(H in T.key!==void 0&&(I=""+T.key),T)!He.call(T,H)||H==="key"||H==="__self"||H==="__source"||H==="ref"&&T.ref===void 0||(O[H]=T[H]);var H=arguments.length-2;if(H===1)O.children=R;else if(1<H){for(var J=Array(H),_e=0;_e<H;_e++)J[_e]=arguments[_e+2];O.children=J}return va(c.type,I,O)},B.createContext=function(c){return c={$$typeof:he,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null},c.Provider=c,c.Consumer={$$typeof:F,_context:c},c},B.createElement=function(c,T,R){var O,I={},H=null;if(T!=null)for(O in T.key!==void 0&&(H=""+T.key),T)He.call(T,O)&&O!=="key"&&O!=="__self"&&O!=="__source"&&(I[O]=T[O]);var J=arguments.length-2;if(J===1)I.children=R;else if(1<J){for(var _e=Array(J),pe=0;pe<J;pe++)_e[pe]=arguments[pe+2];I.children=_e}if(c&&c.defaultProps)for(O in J=c.defaultProps,J)I[O]===void 0&&(I[O]=J[O]);return va(c,H,I)},B.createRef=function(){return{current:null}},B.forwardRef=function(c){return{$$typeof:we,render:c}},B.isValidElement=Da,B.lazy=function(c){return{$$typeof:Z,_payload:{_status:-1,_result:c},_init:_}},B.memo=function(c,T){return{$$typeof:v,type:c,compare:T===void 0?null:T}},B.startTransition=function(c){var T=Y.T,R={};Y.T=R;try{var O=c(),I=Y.S;I!==null&&I(R,O),typeof O=="object"&&O!==null&&typeof O.then=="function"&&O.then(ze,ae)}catch(H){ae(H)}finally{T!==null&&R.types!==null&&(T.types=R.types),Y.T=T}},B.unstable_useCacheRefresh=function(){return Y.H.useCacheRefresh()},B.use=function(c){return Y.H.use(c)},B.useActionState=function(c,T,R){return Y.H.useActionState(c,T,R)},B.useCallback=function(c,T){return Y.H.useCallback(c,T)},B.useContext=function(c){return Y.H.useContext(c)},B.useDebugValue=function(){},B.useDeferredValue=function(c,T){return Y.H.useDeferredValue(c,T)},B.useEffect=function(c,T){return Y.H.useEffect(c,T)},B.useEffectEvent=function(c){return Y.H.useEffectEvent(c)},B.useId=function(){return Y.H.useId()},B.useImperativeHandle=function(c,T,R){return Y.H.useImperativeHandle(c,T,R)},B.useInsertionEffect=function(c,T){return Y.H.useInsertionEffect(c,T)},B.useLayoutEffect=function(c,T){return Y.H.useLayoutEffect(c,T)},B.useMemo=function(c,T){return Y.H.useMemo(c,T)},B.useOptimistic=function(c,T){return Y.H.useOptimistic(c,T)},B.useReducer=function(c,T,R){return Y.H.useReducer(c,T,R)},B.useRef=function(c){return Y.H.useRef(c)},B.useState=function(c){return Y.H.useState(c)},B.useSyncExternalStore=function(c,T,R){return Y.H.useSyncExternalStore(c,T,R)},B.useTransition=function(){return Y.H.useTransition()},B.version="19.2.0",B}var yf;function ro(){return yf||(yf=1,lo.exports=Xh()),lo.exports}var Df=ro(),io={exports:{}},bl={},uo={exports:{}},so={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ef;function Wh(){return Ef||(Ef=1,(function(N){function de(g,D){var _=g.length;g.push(D);e:for(;0<_;){var ae=_-1>>>1,ie=g[ae];if(0<w(ie,D))g[ae]=D,g[_]=ie,_=ae;else break e}}function W(g){return g.length===0?null:g[0]}function p(g){if(g.length===0)return null;var D=g[0],_=g.pop();if(_!==D){g[0]=_;e:for(var ae=0,ie=g.length,c=ie>>>1;ae<c;){var T=2*(ae+1)-1,R=g[T],O=T+1,I=g[O];if(0>w(R,_))O<ie&&0>w(I,R)?(g[ae]=I,g[O]=_,ae=O):(g[ae]=R,g[T]=_,ae=T);else if(O<ie&&0>w(I,_))g[ae]=I,g[O]=_,ae=O;else break e}}return D}function w(g,D){var _=g.sortIndex-D.sortIndex;return _!==0?_:g.id-D.id}if(N.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var F=performance;N.unstable_now=function(){return F.now()}}else{var he=Date,we=he.now();N.unstable_now=function(){return he.now()-we}}var L=[],v=[],Z=1,x=null,re=3,Fe=!1,ke=!1,xe=!1,Ca=!1,Xe=typeof setTimeout=="function"?setTimeout:null,Fa=typeof clearTimeout=="function"?clearTimeout:null,Le=typeof setImmediate<"u"?setImmediate:null;function ua(g){for(var D=W(v);D!==null;){if(D.callback===null)p(v);else if(D.startTime<=g)p(v),D.sortIndex=D.expirationTime,de(L,D);else break;D=W(v)}}function Ta(g){if(xe=!1,ua(g),!ke)if(W(L)!==null)ke=!0,ze||(ze=!0,qe());else{var D=W(v);D!==null&&Ea(Ta,D.startTime-g)}}var ze=!1,Y=-1,He=5,va=-1;function qt(){return Ca?!0:!(N.unstable_now()-va<He)}function Da(){if(Ca=!1,ze){var g=N.unstable_now();va=g;var D=!0;try{e:{ke=!1,xe&&(xe=!1,Fa(Y),Y=-1),Fe=!0;var _=re;try{a:{for(ua(g),x=W(L);x!==null&&!(x.expirationTime>g&&qt());){var ae=x.callback;if(typeof ae=="function"){x.callback=null,re=x.priorityLevel;var ie=ae(x.expirationTime<=g);if(g=N.unstable_now(),typeof ie=="function"){x.callback=ie,ua(g),D=!0;break a}x===W(L)&&p(L),ua(g)}else p(L);x=W(L)}if(x!==null)D=!0;else{var c=W(v);c!==null&&Ea(Ta,c.startTime-g),D=!1}}break e}finally{x=null,re=_,Fe=!1}D=void 0}}finally{D?qe():ze=!1}}}var qe;if(typeof Le=="function")qe=function(){Le(Da)};else if(typeof MessageChannel<"u"){var bt=new MessageChannel,Ma=bt.port2;bt.port1.onmessage=Da,qe=function(){Ma.postMessage(null)}}else qe=function(){Xe(Da,0)};function Ea(g,D){Y=Xe(function(){g(N.unstable_now())},D)}N.unstable_IdlePriority=5,N.unstable_ImmediatePriority=1,N.unstable_LowPriority=4,N.unstable_NormalPriority=3,N.unstable_Profiling=null,N.unstable_UserBlockingPriority=2,N.unstable_cancelCallback=function(g){g.callback=null},N.unstable_forceFrameRate=function(g){0>g||125<g?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):He=0<g?Math.floor(1e3/g):5},N.unstable_getCurrentPriorityLevel=function(){return re},N.unstable_next=function(g){switch(re){case 1:case 2:case 3:var D=3;break;default:D=re}var _=re;re=D;try{return g()}finally{re=_}},N.unstable_requestPaint=function(){Ca=!0},N.unstable_runWithPriority=function(g,D){switch(g){case 1:case 2:case 3:case 4:case 5:break;default:g=3}var _=re;re=g;try{return D()}finally{re=_}},N.unstable_scheduleCallback=function(g,D,_){var ae=N.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?ae+_:ae):_=ae,g){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=_+ie,g={id:Z++,callback:D,priorityLevel:g,startTime:_,expirationTime:ie,sortIndex:-1},_>ae?(g.sortIndex=_,de(v,g),W(L)===null&&g===W(v)&&(xe?(Fa(Y),Y=-1):xe=!0,Ea(Ta,_-ae))):(g.sortIndex=ie,de(L,g),ke||Fe||(ke=!0,ze||(ze=!0,qe()))),g},N.unstable_shouldYield=qt,N.unstable_wrapCallback=function(g){var D=re;return function(){var _=re;re=D;try{return g.apply(this,arguments)}finally{re=_}}}})(so)),so}var gf;function Zh(){return gf||(gf=1,uo.exports=Wh()),uo.exports}var oo={exports:{}},Ue={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sf;function Jh(){if(Sf)return Ue;Sf=1;var N=ro();function de(L){var v="https://react.dev/errors/"+L;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var Z=2;Z<arguments.length;Z++)v+="&args[]="+encodeURIComponent(arguments[Z])}return"Minified React error #"+L+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function W(){}var p={d:{f:W,r:function(){throw Error(de(522))},D:W,C:W,L:W,m:W,X:W,S:W,M:W},p:0,findDOMNode:null},w=Symbol.for("react.portal");function F(L,v,Z){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:w,key:x==null?null:""+x,children:L,containerInfo:v,implementation:Z}}var he=N.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function we(L,v){if(L==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Ue.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=p,Ue.createPortal=function(L,v){var Z=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(de(299));return F(L,v,null,Z)},Ue.flushSync=function(L){var v=he.T,Z=p.p;try{if(he.T=null,p.p=2,L)return L()}finally{he.T=v,p.p=Z,p.d.f()}},Ue.preconnect=function(L,v){typeof L=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,p.d.C(L,v))},Ue.prefetchDNS=function(L){typeof L=="string"&&p.d.D(L)},Ue.preinit=function(L,v){if(typeof L=="string"&&v&&typeof v.as=="string"){var Z=v.as,x=we(Z,v.crossOrigin),re=typeof v.integrity=="string"?v.integrity:void 0,Fe=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;Z==="style"?p.d.S(L,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:x,integrity:re,fetchPriority:Fe}):Z==="script"&&p.d.X(L,{crossOrigin:x,integrity:re,fetchPriority:Fe,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Ue.preinitModule=function(L,v){if(typeof L=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var Z=we(v.as,v.crossOrigin);p.d.M(L,{crossOrigin:Z,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&p.d.M(L)},Ue.preload=function(L,v){if(typeof L=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var Z=v.as,x=we(Z,v.crossOrigin);p.d.L(L,Z,{crossOrigin:x,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Ue.preloadModule=function(L,v){if(typeof L=="string")if(v){var Z=we(v.as,v.crossOrigin);p.d.m(L,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:Z,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else p.d.m(L)},Ue.requestFormReset=function(L){p.d.r(L)},Ue.unstable_batchedUpdates=function(L,v){return L(v)},Ue.useFormState=function(L,v,Z){return he.H.useFormState(L,v,Z)},Ue.useFormStatus=function(){return he.H.useHostTransitionStatus()},Ue.version="19.2.0",Ue}var bf;function $h(){if(bf)return oo.exports;bf=1;function N(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(N)}catch(de){console.error(de)}}return N(),oo.exports=Jh(),oo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tf;function ep(){if(Tf)return bl;Tf=1;var N=Zh(),de=ro(),W=$h();function p(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function w(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function F(e){var a=e,t=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(t=a.return),e=a.return;while(e)}return a.tag===3?t:null}function he(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function we(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function L(e){if(F(e)!==e)throw Error(p(188))}function v(e){var a=e.alternate;if(!a){if(a=F(e),a===null)throw Error(p(188));return a!==e?null:e}for(var t=e,n=a;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(n=l.return,n!==null){t=n;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return L(l),e;if(i===n)return L(l),a;i=i.sibling}throw Error(p(188))}if(t.return!==n.return)t=l,n=i;else{for(var u=!1,s=l.child;s;){if(s===t){u=!0,t=l,n=i;break}if(s===n){u=!0,n=l,t=i;break}s=s.sibling}if(!u){for(s=i.child;s;){if(s===t){u=!0,t=i,n=l;break}if(s===n){u=!0,n=i,t=l;break}s=s.sibling}if(!u)throw Error(p(189))}}if(t.alternate!==n)throw Error(p(190))}if(t.tag!==3)throw Error(p(188));return t.stateNode.current===t?e:a}function Z(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=Z(e),a!==null)return a;e=e.sibling}return null}var x=Object.assign,re=Symbol.for("react.element"),Fe=Symbol.for("react.transitional.element"),ke=Symbol.for("react.portal"),xe=Symbol.for("react.fragment"),Ca=Symbol.for("react.strict_mode"),Xe=Symbol.for("react.profiler"),Fa=Symbol.for("react.consumer"),Le=Symbol.for("react.context"),ua=Symbol.for("react.forward_ref"),Ta=Symbol.for("react.suspense"),ze=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),He=Symbol.for("react.lazy"),va=Symbol.for("react.activity"),qt=Symbol.for("react.memo_cache_sentinel"),Da=Symbol.iterator;function qe(e){return e===null||typeof e!="object"?null:(e=Da&&e[Da]||e["@@iterator"],typeof e=="function"?e:null)}var bt=Symbol.for("react.client.reference");function Ma(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===bt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case xe:return"Fragment";case Xe:return"Profiler";case Ca:return"StrictMode";case Ta:return"Suspense";case ze:return"SuspenseList";case va:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ke:return"Portal";case Le:return e.displayName||"Context";case Fa:return(e._context.displayName||"Context")+".Consumer";case ua:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Y:return a=e.displayName||null,a!==null?a:Ma(e.type)||"Memo";case He:a=e._payload,e=e._init;try{return Ma(e(a))}catch{}}return null}var Ea=Array.isArray,g=de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=W.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_={pending:!1,data:null,method:null,action:null},ae=[],ie=-1;function c(e){return{current:e}}function T(e){0>ie||(e.current=ae[ie],ae[ie]=null,ie--)}function R(e,a){ie++,ae[ie]=e.current,e.current=a}var O=c(null),I=c(null),H=c(null),J=c(null);function _e(e,a){switch(R(H,a),R(I,e),R(O,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?Bd(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=Bd(a),e=Id(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}T(O),R(O,e)}function pe(){T(O),T(I),T(H)}function Nn(e){e.memoizedState!==null&&R(J,e);var a=O.current,t=Id(a,e.type);a!==t&&(R(I,e),R(O,t))}function Tl(e){I.current===e&&(T(O),T(I)),J.current===e&&(T(J),pl._currentValue=_)}var Hi,co;function Tt(e){if(Hi===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);Hi=a&&a[1]||"",co=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Hi+e+co}var qi=!1;function Qi(e,a){if(!e||qi)return"";qi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(a){var b=function(){throw Error()};if(Object.defineProperty(b.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(b,[])}catch(y){var h=y}Reflect.construct(e,[],b)}else{try{b.call()}catch(y){h=y}e.call(b.prototype)}}else{try{throw Error()}catch(y){h=y}(b=e())&&typeof b.catch=="function"&&b.catch(function(){})}}catch(y){if(y&&h&&typeof y.stack=="string")return[y.stack,h.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),u=i[0],s=i[1];if(u&&s){var o=u.split(`
`),m=s.split(`
`);for(l=n=0;n<o.length&&!o[n].includes("DetermineComponentFrameRoot");)n++;for(;l<m.length&&!m[l].includes("DetermineComponentFrameRoot");)l++;if(n===o.length||l===m.length)for(n=o.length-1,l=m.length-1;1<=n&&0<=l&&o[n]!==m[l];)l--;for(;1<=n&&0<=l;n--,l--)if(o[n]!==m[l]){if(n!==1||l!==1)do if(n--,l--,0>l||o[n]!==m[l]){var E=`
`+o[n].replace(" at new "," at ");return e.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",e.displayName)),E}while(1<=n&&0<=l);break}}}finally{qi=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Tt(t):""}function Rf(e,a){switch(e.tag){case 26:case 27:case 5:return Tt(e.type);case 16:return Tt("Lazy");case 13:return e.child!==a&&a!==null?Tt("Suspense Fallback"):Tt("Suspense");case 19:return Tt("SuspenseList");case 0:case 15:return Qi(e.type,!1);case 11:return Qi(e.type.render,!1);case 1:return Qi(e.type,!0);case 31:return Tt("Activity");default:return""}}function fo(e){try{var a="",t=null;do a+=Rf(e,t),t=e,e=e.return;while(e);return a}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Gi=Object.prototype.hasOwnProperty,ji=N.unstable_scheduleCallback,Yi=N.unstable_cancelCallback,Af=N.unstable_shouldYield,Nf=N.unstable_requestPaint,We=N.unstable_now,Of=N.unstable_getCurrentPriorityLevel,mo=N.unstable_ImmediatePriority,ho=N.unstable_UserBlockingPriority,vl=N.unstable_NormalPriority,Cf=N.unstable_LowPriority,po=N.unstable_IdlePriority,Mf=N.log,Lf=N.unstable_setDisableYieldValue,On=null,Ze=null;function Xa(e){if(typeof Mf=="function"&&Lf(e),Ze&&typeof Ze.setStrictMode=="function")try{Ze.setStrictMode(On,e)}catch{}}var Je=Math.clz32?Math.clz32:xf,Uf=Math.log,wf=Math.LN2;function xf(e){return e>>>=0,e===0?32:31-(Uf(e)/wf|0)|0}var Dl=256,Rl=262144,Al=4194304;function vt(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Nl(e,a,t){var n=e.pendingLanes;if(n===0)return 0;var l=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var s=n&134217727;return s!==0?(n=s&~i,n!==0?l=vt(n):(u&=s,u!==0?l=vt(u):t||(t=s&~e,t!==0&&(l=vt(t))))):(s=n&~i,s!==0?l=vt(s):u!==0?l=vt(u):t||(t=n&~e,t!==0&&(l=vt(t)))),l===0?0:a!==0&&a!==l&&(a&i)===0&&(i=l&-l,t=a&-a,i>=t||i===32&&(t&4194048)!==0)?a:l}function Cn(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function _f(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yo(){var e=Al;return Al<<=1,(Al&62914560)===0&&(Al=4194304),e}function Pi(e){for(var a=[],t=0;31>t;t++)a.push(e);return a}function Mn(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Bf(e,a,t,n,l,i){var u=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var s=e.entanglements,o=e.expirationTimes,m=e.hiddenUpdates;for(t=u&~t;0<t;){var E=31-Je(t),b=1<<E;s[E]=0,o[E]=-1;var h=m[E];if(h!==null)for(m[E]=null,E=0;E<h.length;E++){var y=h[E];y!==null&&(y.lane&=-536870913)}t&=~b}n!==0&&Eo(e,n,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~a))}function Eo(e,a,t){e.pendingLanes|=a,e.suspendedLanes&=~a;var n=31-Je(a);e.entangledLanes|=a,e.entanglements[n]=e.entanglements[n]|1073741824|t&261930}function go(e,a){var t=e.entangledLanes|=a;for(e=e.entanglements;t;){var n=31-Je(t),l=1<<n;l&a|e[n]&a&&(e[n]|=a),t&=~l}}function So(e,a){var t=a&-a;return t=(t&42)!==0?1:Ki(t),(t&(e.suspendedLanes|a))!==0?0:t}function Ki(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Vi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function bo(){var e=D.p;return e!==0?e:(e=window.event,e===void 0?32:uf(e.type))}function To(e,a){var t=D.p;try{return D.p=e,a()}finally{D.p=t}}var Wa=Math.random().toString(36).slice(2),Ae="__reactFiber$"+Wa,Qe="__reactProps$"+Wa,Qt="__reactContainer$"+Wa,Fi="__reactEvents$"+Wa,If="__reactListeners$"+Wa,kf="__reactHandles$"+Wa,vo="__reactResources$"+Wa,Ln="__reactMarker$"+Wa;function Xi(e){delete e[Ae],delete e[Qe],delete e[Fi],delete e[If],delete e[kf]}function Gt(e){var a=e[Ae];if(a)return a;for(var t=e.parentNode;t;){if(a=t[Qt]||t[Ae]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(e=jd(e);e!==null;){if(t=e[Ae])return t;e=jd(e)}return a}e=t,t=e.parentNode}return null}function jt(e){if(e=e[Ae]||e[Qt]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function Un(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(p(33))}function Yt(e){var a=e[vo];return a||(a=e[vo]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function De(e){e[Ln]=!0}var Do=new Set,Ro={};function Dt(e,a){Pt(e,a),Pt(e+"Capture",a)}function Pt(e,a){for(Ro[e]=a,e=0;e<a.length;e++)Do.add(a[e])}var zf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ao={},No={};function Hf(e){return Gi.call(No,e)?!0:Gi.call(Ao,e)?!1:zf.test(e)?No[e]=!0:(Ao[e]=!0,!1)}function Ol(e,a,t){if(Hf(a))if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var n=a.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+t)}}function Cl(e,a,t){if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+t)}}function La(e,a,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(a,t,""+n)}}function sa(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oo(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function qf(e,a,t){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return l.call(this)},set:function(u){t=""+u,i.call(this,u)}}),Object.defineProperty(e,a,{enumerable:n.enumerable}),{getValue:function(){return t},setValue:function(u){t=""+u},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Wi(e){if(!e._valueTracker){var a=Oo(e)?"checked":"value";e._valueTracker=qf(e,a,""+e[a])}}function Co(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var t=a.getValue(),n="";return e&&(n=Oo(e)?e.checked?"true":"false":e.value),e=n,e!==t?(a.setValue(e),!0):!1}function Ml(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Qf=/[\n"\\]/g;function oa(e){return e.replace(Qf,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Zi(e,a,t,n,l,i,u,s){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),a!=null?u==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+sa(a)):e.value!==""+sa(a)&&(e.value=""+sa(a)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),a!=null?Ji(e,u,sa(a)):t!=null?Ji(e,u,sa(t)):n!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+sa(s):e.removeAttribute("name")}function Mo(e,a,t,n,l,i,u,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),a!=null||t!=null){if(!(i!=="submit"&&i!=="reset"||a!=null)){Wi(e);return}t=t!=null?""+sa(t):"",a=a!=null?""+sa(a):t,s||a===e.value||(e.value=a),e.defaultValue=a}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=s?e.checked:!!n,e.defaultChecked=!!n,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Wi(e)}function Ji(e,a,t){a==="number"&&Ml(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function Kt(e,a,t,n){if(e=e.options,a){a={};for(var l=0;l<t.length;l++)a["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=a.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&n&&(e[t].defaultSelected=!0)}else{for(t=""+sa(t),a=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}a!==null||e[l].disabled||(a=e[l])}a!==null&&(a.selected=!0)}}function Lo(e,a,t){if(a!=null&&(a=""+sa(a),a!==e.value&&(e.value=a),t==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=t!=null?""+sa(t):""}function Uo(e,a,t,n){if(a==null){if(n!=null){if(t!=null)throw Error(p(92));if(Ea(n)){if(1<n.length)throw Error(p(93));n=n[0]}t=n}t==null&&(t=""),a=t}t=sa(a),e.defaultValue=t,n=e.textContent,n===t&&n!==""&&n!==null&&(e.value=n),Wi(e)}function Vt(e,a){if(a){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=a;return}}e.textContent=a}var Gf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wo(e,a,t){var n=a.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?n?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":n?e.setProperty(a,t):typeof t!="number"||t===0||Gf.has(a)?a==="float"?e.cssFloat=t:e[a]=(""+t).trim():e[a]=t+"px"}function xo(e,a,t){if(a!=null&&typeof a!="object")throw Error(p(62));if(e=e.style,t!=null){for(var n in t)!t.hasOwnProperty(n)||a!=null&&a.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var l in a)n=a[l],a.hasOwnProperty(l)&&t[l]!==n&&wo(e,l,n)}else for(var i in a)a.hasOwnProperty(i)&&wo(e,i,a[i])}function $i(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Yf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ll(e){return Yf.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ua(){}var eu=null;function au(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ft=null,Xt=null;function _o(e){var a=jt(e);if(a&&(e=a.stateNode)){var t=e[Qe]||null;e:switch(e=a.stateNode,a.type){case"input":if(Zi(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,t.type==="radio"&&a!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+oa(""+a)+'"][type="radio"]'),a=0;a<t.length;a++){var n=t[a];if(n!==e&&n.form===e.form){var l=n[Qe]||null;if(!l)throw Error(p(90));Zi(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(a=0;a<t.length;a++)n=t[a],n.form===e.form&&Co(n)}break e;case"textarea":Lo(e,t.value,t.defaultValue);break e;case"select":a=t.value,a!=null&&Kt(e,!!t.multiple,a,!1)}}}var tu=!1;function Bo(e,a,t){if(tu)return e(a,t);tu=!0;try{var n=e(a);return n}finally{if(tu=!1,(Ft!==null||Xt!==null)&&(Ei(),Ft&&(a=Ft,e=Xt,Xt=Ft=null,_o(a),e)))for(a=0;a<e.length;a++)_o(e[a])}}function wn(e,a){var t=e.stateNode;if(t===null)return null;var n=t[Qe]||null;if(n===null)return null;t=n[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(p(231,a,typeof t));return t}var wa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nu=!1;if(wa)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){nu=!0}}),window.addEventListener("test",xn,xn),window.removeEventListener("test",xn,xn)}catch{nu=!1}var Za=null,lu=null,Ul=null;function Io(){if(Ul)return Ul;var e,a=lu,t=a.length,n,l="value"in Za?Za.value:Za.textContent,i=l.length;for(e=0;e<t&&a[e]===l[e];e++);var u=t-e;for(n=1;n<=u&&a[t-n]===l[i-n];n++);return Ul=l.slice(e,1<n?1-n:void 0)}function wl(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function xl(){return!0}function ko(){return!1}function Ge(e){function a(t,n,l,i,u){this._reactName=t,this._targetInst=l,this.type=n,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?xl:ko,this.isPropagationStopped=ko,this}return x(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=xl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=xl)},persist:function(){},isPersistent:xl}),a}var Rt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_l=Ge(Rt),_n=x({},Rt,{view:0,detail:0}),Pf=Ge(_n),iu,uu,Bn,Bl=x({},_n,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bn&&(Bn&&e.type==="mousemove"?(iu=e.screenX-Bn.screenX,uu=e.screenY-Bn.screenY):uu=iu=0,Bn=e),iu)},movementY:function(e){return"movementY"in e?e.movementY:uu}}),zo=Ge(Bl),Kf=x({},Bl,{dataTransfer:0}),Vf=Ge(Kf),Ff=x({},_n,{relatedTarget:0}),su=Ge(Ff),Xf=x({},Rt,{animationName:0,elapsedTime:0,pseudoElement:0}),Wf=Ge(Xf),Zf=x({},Rt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jf=Ge(Zf),$f=x({},Rt,{data:0}),Ho=Ge($f),em={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},am={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nm(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=tm[e])?!!a[e]:!1}function ou(){return nm}var lm=x({},_n,{key:function(e){if(e.key){var a=em[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=wl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?am[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ou,charCode:function(e){return e.type==="keypress"?wl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),im=Ge(lm),um=x({},Bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qo=Ge(um),sm=x({},_n,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ou}),om=Ge(sm),rm=x({},Rt,{propertyName:0,elapsedTime:0,pseudoElement:0}),cm=Ge(rm),dm=x({},Bl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fm=Ge(dm),mm=x({},Rt,{newState:0,oldState:0}),hm=Ge(mm),pm=[9,13,27,32],ru=wa&&"CompositionEvent"in window,In=null;wa&&"documentMode"in document&&(In=document.documentMode);var ym=wa&&"TextEvent"in window&&!In,Qo=wa&&(!ru||In&&8<In&&11>=In),Go=" ",jo=!1;function Yo(e,a){switch(e){case"keyup":return pm.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Po(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wt=!1;function Em(e,a){switch(e){case"compositionend":return Po(a);case"keypress":return a.which!==32?null:(jo=!0,Go);case"textInput":return e=a.data,e===Go&&jo?null:e;default:return null}}function gm(e,a){if(Wt)return e==="compositionend"||!ru&&Yo(e,a)?(e=Io(),Ul=lu=Za=null,Wt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Qo&&a.locale!=="ko"?null:a.data;default:return null}}var Sm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ko(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!Sm[e.type]:a==="textarea"}function Vo(e,a,t,n){Ft?Xt?Xt.push(n):Xt=[n]:Ft=n,a=Ri(a,"onChange"),0<a.length&&(t=new _l("onChange","change",null,t,n),e.push({event:t,listeners:a}))}var kn=null,zn=null;function bm(e){Md(e,0)}function Il(e){var a=Un(e);if(Co(a))return e}function Fo(e,a){if(e==="change")return a}var Xo=!1;if(wa){var cu;if(wa){var du="oninput"in document;if(!du){var Wo=document.createElement("div");Wo.setAttribute("oninput","return;"),du=typeof Wo.oninput=="function"}cu=du}else cu=!1;Xo=cu&&(!document.documentMode||9<document.documentMode)}function Zo(){kn&&(kn.detachEvent("onpropertychange",Jo),zn=kn=null)}function Jo(e){if(e.propertyName==="value"&&Il(zn)){var a=[];Vo(a,zn,e,au(e)),Bo(bm,a)}}function Tm(e,a,t){e==="focusin"?(Zo(),kn=a,zn=t,kn.attachEvent("onpropertychange",Jo)):e==="focusout"&&Zo()}function vm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Il(zn)}function Dm(e,a){if(e==="click")return Il(a)}function Rm(e,a){if(e==="input"||e==="change")return Il(a)}function Am(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var $e=typeof Object.is=="function"?Object.is:Am;function Hn(e,a){if($e(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var t=Object.keys(e),n=Object.keys(a);if(t.length!==n.length)return!1;for(n=0;n<t.length;n++){var l=t[n];if(!Gi.call(a,l)||!$e(e[l],a[l]))return!1}return!0}function $o(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function er(e,a){var t=$o(e);e=0;for(var n;t;){if(t.nodeType===3){if(n=e+t.textContent.length,e<=a&&n>=a)return{node:t,offset:a-e};e=n}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=$o(t)}}function ar(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?ar(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function tr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=Ml(e.document);a instanceof e.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)e=a.contentWindow;else break;a=Ml(e.document)}return a}function fu(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var Nm=wa&&"documentMode"in document&&11>=document.documentMode,Zt=null,mu=null,qn=null,hu=!1;function nr(e,a,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;hu||Zt==null||Zt!==Ml(n)||(n=Zt,"selectionStart"in n&&fu(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),qn&&Hn(qn,n)||(qn=n,n=Ri(mu,"onSelect"),0<n.length&&(a=new _l("onSelect","select",null,a,t),e.push({event:a,listeners:n}),a.target=Zt)))}function At(e,a){var t={};return t[e.toLowerCase()]=a.toLowerCase(),t["Webkit"+e]="webkit"+a,t["Moz"+e]="moz"+a,t}var Jt={animationend:At("Animation","AnimationEnd"),animationiteration:At("Animation","AnimationIteration"),animationstart:At("Animation","AnimationStart"),transitionrun:At("Transition","TransitionRun"),transitionstart:At("Transition","TransitionStart"),transitioncancel:At("Transition","TransitionCancel"),transitionend:At("Transition","TransitionEnd")},pu={},lr={};wa&&(lr=document.createElement("div").style,"AnimationEvent"in window||(delete Jt.animationend.animation,delete Jt.animationiteration.animation,delete Jt.animationstart.animation),"TransitionEvent"in window||delete Jt.transitionend.transition);function Nt(e){if(pu[e])return pu[e];if(!Jt[e])return e;var a=Jt[e],t;for(t in a)if(a.hasOwnProperty(t)&&t in lr)return pu[e]=a[t];return e}var ir=Nt("animationend"),ur=Nt("animationiteration"),sr=Nt("animationstart"),Om=Nt("transitionrun"),Cm=Nt("transitionstart"),Mm=Nt("transitioncancel"),or=Nt("transitionend"),rr=new Map,yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yu.push("scrollEnd");function ga(e,a){rr.set(e,a),Dt(a,[e])}var kl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ra=[],$t=0,Eu=0;function zl(){for(var e=$t,a=Eu=$t=0;a<e;){var t=ra[a];ra[a++]=null;var n=ra[a];ra[a++]=null;var l=ra[a];ra[a++]=null;var i=ra[a];if(ra[a++]=null,n!==null&&l!==null){var u=n.pending;u===null?l.next=l:(l.next=u.next,u.next=l),n.pending=l}i!==0&&cr(t,l,i)}}function Hl(e,a,t,n){ra[$t++]=e,ra[$t++]=a,ra[$t++]=t,ra[$t++]=n,Eu|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function gu(e,a,t,n){return Hl(e,a,t,n),ql(e)}function Ot(e,a){return Hl(e,null,null,a),ql(e)}function cr(e,a,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t);for(var l=!1,i=e.return;i!==null;)i.childLanes|=t,n=i.alternate,n!==null&&(n.childLanes|=t),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&a!==null&&(l=31-Je(t),e=i.hiddenUpdates,n=e[l],n===null?e[l]=[a]:n.push(a),a.lane=t|536870912),i):null}function ql(e){if(50<ol)throw ol=0,Os=null,Error(p(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var en={};function Lm(e,a,t,n){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ea(e,a,t,n){return new Lm(e,a,t,n)}function Su(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xa(e,a){var t=e.alternate;return t===null?(t=ea(e.tag,a,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=a,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function dr(e,a){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function Ql(e,a,t,n,l,i){var u=0;if(n=e,typeof e=="function")Su(e)&&(u=1);else if(typeof e=="string")u=Bh(e,t,O.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case va:return e=ea(31,t,a,l),e.elementType=va,e.lanes=i,e;case xe:return Ct(t.children,l,i,a);case Ca:u=8,l|=24;break;case Xe:return e=ea(12,t,a,l|2),e.elementType=Xe,e.lanes=i,e;case Ta:return e=ea(13,t,a,l),e.elementType=Ta,e.lanes=i,e;case ze:return e=ea(19,t,a,l),e.elementType=ze,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Le:u=10;break e;case Fa:u=9;break e;case ua:u=11;break e;case Y:u=14;break e;case He:u=16,n=null;break e}u=29,t=Error(p(130,e===null?"null":typeof e,"")),n=null}return a=ea(u,t,a,l),a.elementType=e,a.type=n,a.lanes=i,a}function Ct(e,a,t,n){return e=ea(7,e,n,a),e.lanes=t,e}function bu(e,a,t){return e=ea(6,e,null,a),e.lanes=t,e}function fr(e){var a=ea(18,null,null,0);return a.stateNode=e,a}function Tu(e,a,t){return a=ea(4,e.children!==null?e.children:[],e.key,a),a.lanes=t,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var mr=new WeakMap;function ca(e,a){if(typeof e=="object"&&e!==null){var t=mr.get(e);return t!==void 0?t:(a={value:e,source:a,stack:fo(a)},mr.set(e,a),a)}return{value:e,source:a,stack:fo(a)}}var an=[],tn=0,Gl=null,Qn=0,da=[],fa=0,Ja=null,Ra=1,Aa="";function _a(e,a){an[tn++]=Qn,an[tn++]=Gl,Gl=e,Qn=a}function hr(e,a,t){da[fa++]=Ra,da[fa++]=Aa,da[fa++]=Ja,Ja=e;var n=Ra;e=Aa;var l=32-Je(n)-1;n&=~(1<<l),t+=1;var i=32-Je(a)+l;if(30<i){var u=l-l%5;i=(n&(1<<u)-1).toString(32),n>>=u,l-=u,Ra=1<<32-Je(a)+l|t<<l|n,Aa=i+e}else Ra=1<<i|t<<l|n,Aa=e}function vu(e){e.return!==null&&(_a(e,1),hr(e,1,0))}function Du(e){for(;e===Gl;)Gl=an[--tn],an[tn]=null,Qn=an[--tn],an[tn]=null;for(;e===Ja;)Ja=da[--fa],da[fa]=null,Aa=da[--fa],da[fa]=null,Ra=da[--fa],da[fa]=null}function pr(e,a){da[fa++]=Ra,da[fa++]=Aa,da[fa++]=Ja,Ra=a.id,Aa=a.overflow,Ja=e}var Ne=null,se=null,P=!1,$a=null,ma=!1,Ru=Error(p(519));function et(e){var a=Error(p(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Gn(ca(a,e)),Ru}function yr(e){var a=e.stateNode,t=e.type,n=e.memoizedProps;switch(a[Ae]=e,a[Qe]=n,t){case"dialog":Q("cancel",a),Q("close",a);break;case"iframe":case"object":case"embed":Q("load",a);break;case"video":case"audio":for(t=0;t<cl.length;t++)Q(cl[t],a);break;case"source":Q("error",a);break;case"img":case"image":case"link":Q("error",a),Q("load",a);break;case"details":Q("toggle",a);break;case"input":Q("invalid",a),Mo(a,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":Q("invalid",a);break;case"textarea":Q("invalid",a),Uo(a,n.value,n.defaultValue,n.children)}t=n.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||a.textContent===""+t||n.suppressHydrationWarning===!0||xd(a.textContent,t)?(n.popover!=null&&(Q("beforetoggle",a),Q("toggle",a)),n.onScroll!=null&&Q("scroll",a),n.onScrollEnd!=null&&Q("scrollend",a),n.onClick!=null&&(a.onclick=Ua),a=!0):a=!1,a||et(e,!0)}function Er(e){for(Ne=e.return;Ne;)switch(Ne.tag){case 5:case 31:case 13:ma=!1;return;case 27:case 3:ma=!0;return;default:Ne=Ne.return}}function nn(e){if(e!==Ne)return!1;if(!P)return Er(e),P=!0,!1;var a=e.tag,t;if((t=a!==3&&a!==27)&&((t=a===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Gs(e.type,e.memoizedProps)),t=!t),t&&se&&et(e),Er(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));se=Gd(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));se=Gd(e)}else a===27?(a=se,ht(e.type)?(e=Vs,Vs=null,se=e):se=a):se=Ne?pa(e.stateNode.nextSibling):null;return!0}function Mt(){se=Ne=null,P=!1}function Au(){var e=$a;return e!==null&&(Ke===null?Ke=e:Ke.push.apply(Ke,e),$a=null),e}function Gn(e){$a===null?$a=[e]:$a.push(e)}var Nu=c(null),Lt=null,Ba=null;function at(e,a,t){R(Nu,a._currentValue),a._currentValue=t}function Ia(e){e._currentValue=Nu.current,T(Nu)}function Ou(e,a,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,n!==null&&(n.childLanes|=a)):n!==null&&(n.childLanes&a)!==a&&(n.childLanes|=a),e===t)break;e=e.return}}function Cu(e,a,t,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var u=l.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=l;for(var o=0;o<a.length;o++)if(s.context===a[o]){i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),Ou(i.return,t,e),n||(u=null);break e}i=s.next}}else if(l.tag===18){if(u=l.return,u===null)throw Error(p(341));u.lanes|=t,i=u.alternate,i!==null&&(i.lanes|=t),Ou(u,t,e),u=null}else u=l.child;if(u!==null)u.return=l;else for(u=l;u!==null;){if(u===e){u=null;break}if(l=u.sibling,l!==null){l.return=u.return,u=l;break}u=u.return}l=u}}function ln(e,a,t,n){e=null;for(var l=a,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var u=l.alternate;if(u===null)throw Error(p(387));if(u=u.memoizedProps,u!==null){var s=l.type;$e(l.pendingProps.value,u.value)||(e!==null?e.push(s):e=[s])}}else if(l===J.current){if(u=l.alternate,u===null)throw Error(p(387));u.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(pl):e=[pl])}l=l.return}e!==null&&Cu(a,e,t,n),a.flags|=262144}function jl(e){for(e=e.firstContext;e!==null;){if(!$e(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ut(e){Lt=e,Ba=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Oe(e){return gr(Lt,e)}function Yl(e,a){return Lt===null&&Ut(e),gr(e,a)}function gr(e,a){var t=a._currentValue;if(a={context:a,memoizedValue:t,next:null},Ba===null){if(e===null)throw Error(p(308));Ba=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else Ba=Ba.next=a;return t}var Um=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){a.aborted=!0,e.forEach(function(t){return t()})}},wm=N.unstable_scheduleCallback,xm=N.unstable_NormalPriority,ge={$$typeof:Le,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mu(){return{controller:new Um,data:new Map,refCount:0}}function jn(e){e.refCount--,e.refCount===0&&wm(xm,function(){e.controller.abort()})}var Yn=null,Lu=0,un=0,sn=null;function _m(e,a){if(Yn===null){var t=Yn=[];Lu=0,un=xs(),sn={status:"pending",value:void 0,then:function(n){t.push(n)}}}return Lu++,a.then(Sr,Sr),a}function Sr(){if(--Lu===0&&Yn!==null){sn!==null&&(sn.status="fulfilled");var e=Yn;Yn=null,un=0,sn=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function Bm(e,a){var t=[],n={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return e.then(function(){n.status="fulfilled",n.value=a;for(var l=0;l<t.length;l++)(0,t[l])(a)},function(l){for(n.status="rejected",n.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),n}var br=g.S;g.S=function(e,a){nd=We(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&_m(e,a),br!==null&&br(e,a)};var wt=c(null);function Uu(){var e=wt.current;return e!==null?e:ue.pooledCache}function Pl(e,a){a===null?R(wt,wt.current):R(wt,a.pool)}function Tr(){var e=Uu();return e===null?null:{parent:ge._currentValue,pool:e}}var on=Error(p(460)),wu=Error(p(474)),Kl=Error(p(542)),Vl={then:function(){}};function vr(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Dr(e,a,t){switch(t=e[t],t===void 0?e.push(a):t!==a&&(a.then(Ua,Ua),a=t),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Ar(e),e;default:if(typeof a.status=="string")a.then(Ua,Ua);else{if(e=ue,e!==null&&100<e.shellSuspendCounter)throw Error(p(482));e=a,e.status="pending",e.then(function(n){if(a.status==="pending"){var l=a;l.status="fulfilled",l.value=n}},function(n){if(a.status==="pending"){var l=a;l.status="rejected",l.reason=n}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Ar(e),e}throw _t=a,on}}function xt(e){try{var a=e._init;return a(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(_t=t,on):t}}var _t=null;function Rr(){if(_t===null)throw Error(p(459));var e=_t;return _t=null,e}function Ar(e){if(e===on||e===Kl)throw Error(p(483))}var rn=null,Pn=0;function Fl(e){var a=Pn;return Pn+=1,rn===null&&(rn=[]),Dr(rn,e,a)}function Kn(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function Xl(e,a){throw a.$$typeof===re?Error(p(525)):(e=Object.prototype.toString.call(a),Error(p(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function Nr(e){function a(d,r){if(e){var f=d.deletions;f===null?(d.deletions=[r],d.flags|=16):f.push(r)}}function t(d,r){if(!e)return null;for(;r!==null;)a(d,r),r=r.sibling;return null}function n(d){for(var r=new Map;d!==null;)d.key!==null?r.set(d.key,d):r.set(d.index,d),d=d.sibling;return r}function l(d,r){return d=xa(d,r),d.index=0,d.sibling=null,d}function i(d,r,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<r?(d.flags|=67108866,r):f):(d.flags|=67108866,r)):(d.flags|=1048576,r)}function u(d){return e&&d.alternate===null&&(d.flags|=67108866),d}function s(d,r,f,S){return r===null||r.tag!==6?(r=bu(f,d.mode,S),r.return=d,r):(r=l(r,f),r.return=d,r)}function o(d,r,f,S){var M=f.type;return M===xe?E(d,r,f.props.children,S,f.key):r!==null&&(r.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===He&&xt(M)===r.type)?(r=l(r,f.props),Kn(r,f),r.return=d,r):(r=Ql(f.type,f.key,f.props,null,d.mode,S),Kn(r,f),r.return=d,r)}function m(d,r,f,S){return r===null||r.tag!==4||r.stateNode.containerInfo!==f.containerInfo||r.stateNode.implementation!==f.implementation?(r=Tu(f,d.mode,S),r.return=d,r):(r=l(r,f.children||[]),r.return=d,r)}function E(d,r,f,S,M){return r===null||r.tag!==7?(r=Ct(f,d.mode,S,M),r.return=d,r):(r=l(r,f),r.return=d,r)}function b(d,r,f){if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return r=bu(""+r,d.mode,f),r.return=d,r;if(typeof r=="object"&&r!==null){switch(r.$$typeof){case Fe:return f=Ql(r.type,r.key,r.props,null,d.mode,f),Kn(f,r),f.return=d,f;case ke:return r=Tu(r,d.mode,f),r.return=d,r;case He:return r=xt(r),b(d,r,f)}if(Ea(r)||qe(r))return r=Ct(r,d.mode,f,null),r.return=d,r;if(typeof r.then=="function")return b(d,Fl(r),f);if(r.$$typeof===Le)return b(d,Yl(d,r),f);Xl(d,r)}return null}function h(d,r,f,S){var M=r!==null?r.key:null;if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return M!==null?null:s(d,r,""+f,S);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Fe:return f.key===M?o(d,r,f,S):null;case ke:return f.key===M?m(d,r,f,S):null;case He:return f=xt(f),h(d,r,f,S)}if(Ea(f)||qe(f))return M!==null?null:E(d,r,f,S,null);if(typeof f.then=="function")return h(d,r,Fl(f),S);if(f.$$typeof===Le)return h(d,r,Yl(d,f),S);Xl(d,f)}return null}function y(d,r,f,S,M){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return d=d.get(f)||null,s(r,d,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Fe:return d=d.get(S.key===null?f:S.key)||null,o(r,d,S,M);case ke:return d=d.get(S.key===null?f:S.key)||null,m(r,d,S,M);case He:return S=xt(S),y(d,r,f,S,M)}if(Ea(S)||qe(S))return d=d.get(f)||null,E(r,d,S,M,null);if(typeof S.then=="function")return y(d,r,f,Fl(S),M);if(S.$$typeof===Le)return y(d,r,f,Yl(r,S),M);Xl(r,S)}return null}function A(d,r,f,S){for(var M=null,K=null,C=r,z=r=0,j=null;C!==null&&z<f.length;z++){C.index>z?(j=C,C=null):j=C.sibling;var V=h(d,C,f[z],S);if(V===null){C===null&&(C=j);break}e&&C&&V.alternate===null&&a(d,C),r=i(V,r,z),K===null?M=V:K.sibling=V,K=V,C=j}if(z===f.length)return t(d,C),P&&_a(d,z),M;if(C===null){for(;z<f.length;z++)C=b(d,f[z],S),C!==null&&(r=i(C,r,z),K===null?M=C:K.sibling=C,K=C);return P&&_a(d,z),M}for(C=n(C);z<f.length;z++)j=y(C,d,z,f[z],S),j!==null&&(e&&j.alternate!==null&&C.delete(j.key===null?z:j.key),r=i(j,r,z),K===null?M=j:K.sibling=j,K=j);return e&&C.forEach(function(St){return a(d,St)}),P&&_a(d,z),M}function U(d,r,f,S){if(f==null)throw Error(p(151));for(var M=null,K=null,C=r,z=r=0,j=null,V=f.next();C!==null&&!V.done;z++,V=f.next()){C.index>z?(j=C,C=null):j=C.sibling;var St=h(d,C,V.value,S);if(St===null){C===null&&(C=j);break}e&&C&&St.alternate===null&&a(d,C),r=i(St,r,z),K===null?M=St:K.sibling=St,K=St,C=j}if(V.done)return t(d,C),P&&_a(d,z),M;if(C===null){for(;!V.done;z++,V=f.next())V=b(d,V.value,S),V!==null&&(r=i(V,r,z),K===null?M=V:K.sibling=V,K=V);return P&&_a(d,z),M}for(C=n(C);!V.done;z++,V=f.next())V=y(C,d,z,V.value,S),V!==null&&(e&&V.alternate!==null&&C.delete(V.key===null?z:V.key),r=i(V,r,z),K===null?M=V:K.sibling=V,K=V);return e&&C.forEach(function(Kh){return a(d,Kh)}),P&&_a(d,z),M}function le(d,r,f,S){if(typeof f=="object"&&f!==null&&f.type===xe&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Fe:e:{for(var M=f.key;r!==null;){if(r.key===M){if(M=f.type,M===xe){if(r.tag===7){t(d,r.sibling),S=l(r,f.props.children),S.return=d,d=S;break e}}else if(r.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===He&&xt(M)===r.type){t(d,r.sibling),S=l(r,f.props),Kn(S,f),S.return=d,d=S;break e}t(d,r);break}else a(d,r);r=r.sibling}f.type===xe?(S=Ct(f.props.children,d.mode,S,f.key),S.return=d,d=S):(S=Ql(f.type,f.key,f.props,null,d.mode,S),Kn(S,f),S.return=d,d=S)}return u(d);case ke:e:{for(M=f.key;r!==null;){if(r.key===M)if(r.tag===4&&r.stateNode.containerInfo===f.containerInfo&&r.stateNode.implementation===f.implementation){t(d,r.sibling),S=l(r,f.children||[]),S.return=d,d=S;break e}else{t(d,r);break}else a(d,r);r=r.sibling}S=Tu(f,d.mode,S),S.return=d,d=S}return u(d);case He:return f=xt(f),le(d,r,f,S)}if(Ea(f))return A(d,r,f,S);if(qe(f)){if(M=qe(f),typeof M!="function")throw Error(p(150));return f=M.call(f),U(d,r,f,S)}if(typeof f.then=="function")return le(d,r,Fl(f),S);if(f.$$typeof===Le)return le(d,r,Yl(d,f),S);Xl(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint"?(f=""+f,r!==null&&r.tag===6?(t(d,r.sibling),S=l(r,f),S.return=d,d=S):(t(d,r),S=bu(f,d.mode,S),S.return=d,d=S),u(d)):t(d,r)}return function(d,r,f,S){try{Pn=0;var M=le(d,r,f,S);return rn=null,M}catch(C){if(C===on||C===Kl)throw C;var K=ea(29,C,null,d.mode);return K.lanes=S,K.return=d,K}finally{}}}var Bt=Nr(!0),Or=Nr(!1),tt=!1;function xu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _u(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function nt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function lt(e,a,t){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(X&2)!==0){var l=n.pending;return l===null?a.next=a:(a.next=l.next,l.next=a),n.pending=a,a=ql(e),cr(e,null,t),a}return Hl(e,n,a,t),ql(e)}function Vn(e,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194048)!==0)){var n=a.lanes;n&=e.pendingLanes,t|=n,a.lanes=t,go(e,t)}}function Bu(e,a){var t=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,t===n)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var u={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};i===null?l=i=u:i=i.next=u,t=t.next}while(t!==null);i===null?l=i=a:i=i.next=a}else l=i=a;t={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=a:e.next=a,t.lastBaseUpdate=a}var Iu=!1;function Fn(){if(Iu){var e=sn;if(e!==null)throw e}}function Xn(e,a,t,n){Iu=!1;var l=e.updateQueue;tt=!1;var i=l.firstBaseUpdate,u=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var o=s,m=o.next;o.next=null,u===null?i=m:u.next=m,u=o;var E=e.alternate;E!==null&&(E=E.updateQueue,s=E.lastBaseUpdate,s!==u&&(s===null?E.firstBaseUpdate=m:s.next=m,E.lastBaseUpdate=o))}if(i!==null){var b=l.baseState;u=0,E=m=o=null,s=i;do{var h=s.lane&-536870913,y=h!==s.lane;if(y?(G&h)===h:(n&h)===h){h!==0&&h===un&&(Iu=!0),E!==null&&(E=E.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var A=e,U=s;h=a;var le=t;switch(U.tag){case 1:if(A=U.payload,typeof A=="function"){b=A.call(le,b,h);break e}b=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=U.payload,h=typeof A=="function"?A.call(le,b,h):A,h==null)break e;b=x({},b,h);break e;case 2:tt=!0}}h=s.callback,h!==null&&(e.flags|=64,y&&(e.flags|=8192),y=l.callbacks,y===null?l.callbacks=[h]:y.push(h))}else y={lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},E===null?(m=E=y,o=b):E=E.next=y,u|=h;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;y=s,s=y.next,y.next=null,l.lastBaseUpdate=y,l.shared.pending=null}}while(!0);E===null&&(o=b),l.baseState=o,l.firstBaseUpdate=m,l.lastBaseUpdate=E,i===null&&(l.shared.lanes=0),rt|=u,e.lanes=u,e.memoizedState=b}}function Cr(e,a){if(typeof e!="function")throw Error(p(191,e));e.call(a)}function Mr(e,a){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Cr(t[e],a)}var cn=c(null),Wl=c(0);function Lr(e,a){e=Pa,R(Wl,e),R(cn,a),Pa=e|a.baseLanes}function ku(){R(Wl,Pa),R(cn,cn.current)}function zu(){Pa=Wl.current,T(cn),T(Wl)}var aa=c(null),ha=null;function it(e){var a=e.alternate;R(ye,ye.current&1),R(aa,e),ha===null&&(a===null||cn.current!==null||a.memoizedState!==null)&&(ha=e)}function Hu(e){R(ye,ye.current),R(aa,e),ha===null&&(ha=e)}function Ur(e){e.tag===22?(R(ye,ye.current),R(aa,e),ha===null&&(ha=e)):ut()}function ut(){R(ye,ye.current),R(aa,aa.current)}function ta(e){T(aa),ha===e&&(ha=null),T(ye)}var ye=c(0);function Zl(e){for(var a=e;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||Ps(t)||Ks(t)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var ka=0,k=null,te=null,Se=null,Jl=!1,dn=!1,It=!1,$l=0,Wn=0,fn=null,Im=0;function fe(){throw Error(p(321))}function qu(e,a){if(a===null)return!1;for(var t=0;t<a.length&&t<e.length;t++)if(!$e(e[t],a[t]))return!1;return!0}function Qu(e,a,t,n,l,i){return ka=i,k=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,g.H=e===null||e.memoizedState===null?hc:ts,It=!1,i=t(n,l),It=!1,dn&&(i=xr(a,t,n,l)),wr(e),i}function wr(e){g.H=$n;var a=te!==null&&te.next!==null;if(ka=0,Se=te=k=null,Jl=!1,Wn=0,fn=null,a)throw Error(p(300));e===null||be||(e=e.dependencies,e!==null&&jl(e)&&(be=!0))}function xr(e,a,t,n){k=e;var l=0;do{if(dn&&(fn=null),Wn=0,dn=!1,25<=l)throw Error(p(301));if(l+=1,Se=te=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}g.H=pc,i=a(t,n)}while(dn);return i}function km(){var e=g.H,a=e.useState()[0];return a=typeof a.then=="function"?Zn(a):a,e=e.useState()[0],(te!==null?te.memoizedState:null)!==e&&(k.flags|=1024),a}function Gu(){var e=$l!==0;return $l=0,e}function ju(e,a,t){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t}function Yu(e){if(Jl){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}Jl=!1}ka=0,Se=te=k=null,dn=!1,Wn=$l=0,fn=null}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?k.memoizedState=Se=e:Se=Se.next=e,Se}function Ee(){if(te===null){var e=k.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var a=Se===null?k.memoizedState:Se.next;if(a!==null)Se=a,te=e;else{if(e===null)throw k.alternate===null?Error(p(467)):Error(p(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},Se===null?k.memoizedState=Se=e:Se=Se.next=e}return Se}function ei(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zn(e){var a=Wn;return Wn+=1,fn===null&&(fn=[]),e=Dr(fn,e,a),a=k,(Se===null?a.memoizedState:Se.next)===null&&(a=a.alternate,g.H=a===null||a.memoizedState===null?hc:ts),e}function ai(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Zn(e);if(e.$$typeof===Le)return Oe(e)}throw Error(p(438,String(e)))}function Pu(e){var a=null,t=k.updateQueue;if(t!==null&&(a=t.memoCache),a==null){var n=k.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(a={data:n.data.map(function(l){return l.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),t===null&&(t=ei(),k.updateQueue=t),t.memoCache=a,t=a.data[a.index],t===void 0)for(t=a.data[a.index]=Array(e),n=0;n<e;n++)t[n]=qt;return a.index++,t}function za(e,a){return typeof a=="function"?a(e):a}function ti(e){var a=Ee();return Ku(a,te,e)}function Ku(e,a,t){var n=e.queue;if(n===null)throw Error(p(311));n.lastRenderedReducer=t;var l=e.baseQueue,i=n.pending;if(i!==null){if(l!==null){var u=l.next;l.next=i.next,i.next=u}a.baseQueue=l=i,n.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{a=l.next;var s=u=null,o=null,m=a,E=!1;do{var b=m.lane&-536870913;if(b!==m.lane?(G&b)===b:(ka&b)===b){var h=m.revertLane;if(h===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),b===un&&(E=!0);else if((ka&h)===h){m=m.next,h===un&&(E=!0);continue}else b={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},o===null?(s=o=b,u=i):o=o.next=b,k.lanes|=h,rt|=h;b=m.action,It&&t(i,b),i=m.hasEagerState?m.eagerState:t(i,b)}else h={lane:b,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},o===null?(s=o=h,u=i):o=o.next=h,k.lanes|=b,rt|=b;m=m.next}while(m!==null&&m!==a);if(o===null?u=i:o.next=s,!$e(i,e.memoizedState)&&(be=!0,E&&(t=sn,t!==null)))throw t;e.memoizedState=i,e.baseState=u,e.baseQueue=o,n.lastRenderedState=i}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Vu(e){var a=Ee(),t=a.queue;if(t===null)throw Error(p(311));t.lastRenderedReducer=e;var n=t.dispatch,l=t.pending,i=a.memoizedState;if(l!==null){t.pending=null;var u=l=l.next;do i=e(i,u.action),u=u.next;while(u!==l);$e(i,a.memoizedState)||(be=!0),a.memoizedState=i,a.baseQueue===null&&(a.baseState=i),t.lastRenderedState=i}return[i,n]}function _r(e,a,t){var n=k,l=Ee(),i=P;if(i){if(t===void 0)throw Error(p(407));t=t()}else t=a();var u=!$e((te||l).memoizedState,t);if(u&&(l.memoizedState=t,be=!0),l=l.queue,Wu(kr.bind(null,n,l,e),[e]),l.getSnapshot!==a||u||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,mn(9,{destroy:void 0},Ir.bind(null,n,l,t,a),null),ue===null)throw Error(p(349));i||(ka&127)!==0||Br(n,a,t)}return t}function Br(e,a,t){e.flags|=16384,e={getSnapshot:a,value:t},a=k.updateQueue,a===null?(a=ei(),k.updateQueue=a,a.stores=[e]):(t=a.stores,t===null?a.stores=[e]:t.push(e))}function Ir(e,a,t,n){a.value=t,a.getSnapshot=n,zr(a)&&Hr(e)}function kr(e,a,t){return t(function(){zr(a)&&Hr(e)})}function zr(e){var a=e.getSnapshot;e=e.value;try{var t=a();return!$e(e,t)}catch{return!0}}function Hr(e){var a=Ot(e,2);a!==null&&Ve(a,e,2)}function Fu(e){var a=Be();if(typeof e=="function"){var t=e;if(e=t(),It){Xa(!0);try{t()}finally{Xa(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:e},a}function qr(e,a,t,n){return e.baseState=t,Ku(e,te,typeof n=="function"?n:za)}function zm(e,a,t,n,l){if(ii(e))throw Error(p(485));if(e=a.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};g.T!==null?t(!0):i.isTransition=!1,n(i),t=a.pending,t===null?(i.next=a.pending=i,Qr(a,i)):(i.next=t.next,a.pending=t.next=i)}}function Qr(e,a){var t=a.action,n=a.payload,l=e.state;if(a.isTransition){var i=g.T,u={};g.T=u;try{var s=t(l,n),o=g.S;o!==null&&o(u,s),Gr(e,a,s)}catch(m){Xu(e,a,m)}finally{i!==null&&u.types!==null&&(i.types=u.types),g.T=i}}else try{i=t(l,n),Gr(e,a,i)}catch(m){Xu(e,a,m)}}function Gr(e,a,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(n){jr(e,a,n)},function(n){return Xu(e,a,n)}):jr(e,a,t)}function jr(e,a,t){a.status="fulfilled",a.value=t,Yr(a),e.state=t,a=e.pending,a!==null&&(t=a.next,t===a?e.pending=null:(t=t.next,a.next=t,Qr(e,t)))}function Xu(e,a,t){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do a.status="rejected",a.reason=t,Yr(a),a=a.next;while(a!==n)}e.action=null}function Yr(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function Pr(e,a){return a}function Kr(e,a){if(P){var t=ue.formState;if(t!==null){e:{var n=k;if(P){if(se){a:{for(var l=se,i=ma;l.nodeType!==8;){if(!i){l=null;break a}if(l=pa(l.nextSibling),l===null){l=null;break a}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){se=pa(l.nextSibling),n=l.data==="F!";break e}}et(n)}n=!1}n&&(a=t[0])}}return t=Be(),t.memoizedState=t.baseState=a,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pr,lastRenderedState:a},t.queue=n,t=dc.bind(null,k,n),n.dispatch=t,n=Fu(!1),i=as.bind(null,k,!1,n.queue),n=Be(),l={state:a,dispatch:null,action:e,pending:null},n.queue=l,t=zm.bind(null,k,l,i,t),l.dispatch=t,n.memoizedState=e,[a,t,!1]}function Vr(e){var a=Ee();return Fr(a,te,e)}function Fr(e,a,t){if(a=Ku(e,a,Pr)[0],e=ti(za)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var n=Zn(a)}catch(u){throw u===on?Kl:u}else n=a;a=Ee();var l=a.queue,i=l.dispatch;return t!==a.memoizedState&&(k.flags|=2048,mn(9,{destroy:void 0},Hm.bind(null,l,t),null)),[n,i,e]}function Hm(e,a){e.action=a}function Xr(e){var a=Ee(),t=te;if(t!==null)return Fr(a,t,e);Ee(),a=a.memoizedState,t=Ee();var n=t.queue.dispatch;return t.memoizedState=e,[a,n,!1]}function mn(e,a,t,n){return e={tag:e,create:t,deps:n,inst:a,next:null},a=k.updateQueue,a===null&&(a=ei(),k.updateQueue=a),t=a.lastEffect,t===null?a.lastEffect=e.next=e:(n=t.next,t.next=e,e.next=n,a.lastEffect=e),e}function Wr(){return Ee().memoizedState}function ni(e,a,t,n){var l=Be();k.flags|=e,l.memoizedState=mn(1|a,{destroy:void 0},t,n===void 0?null:n)}function li(e,a,t,n){var l=Ee();n=n===void 0?null:n;var i=l.memoizedState.inst;te!==null&&n!==null&&qu(n,te.memoizedState.deps)?l.memoizedState=mn(a,i,t,n):(k.flags|=e,l.memoizedState=mn(1|a,i,t,n))}function Zr(e,a){ni(8390656,8,e,a)}function Wu(e,a){li(2048,8,e,a)}function qm(e){k.flags|=4;var a=k.updateQueue;if(a===null)a=ei(),k.updateQueue=a,a.events=[e];else{var t=a.events;t===null?a.events=[e]:t.push(e)}}function Jr(e){var a=Ee().memoizedState;return qm({ref:a,nextImpl:e}),function(){if((X&2)!==0)throw Error(p(440));return a.impl.apply(void 0,arguments)}}function $r(e,a){return li(4,2,e,a)}function ec(e,a){return li(4,4,e,a)}function ac(e,a){if(typeof a=="function"){e=e();var t=a(e);return function(){typeof t=="function"?t():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function tc(e,a,t){t=t!=null?t.concat([e]):null,li(4,4,ac.bind(null,a,e),t)}function Zu(){}function nc(e,a){var t=Ee();a=a===void 0?null:a;var n=t.memoizedState;return a!==null&&qu(a,n[1])?n[0]:(t.memoizedState=[e,a],e)}function lc(e,a){var t=Ee();a=a===void 0?null:a;var n=t.memoizedState;if(a!==null&&qu(a,n[1]))return n[0];if(n=e(),It){Xa(!0);try{e()}finally{Xa(!1)}}return t.memoizedState=[n,a],n}function Ju(e,a,t){return t===void 0||(ka&1073741824)!==0&&(G&261930)===0?e.memoizedState=a:(e.memoizedState=t,e=id(),k.lanes|=e,rt|=e,t)}function ic(e,a,t,n){return $e(t,a)?t:cn.current!==null?(e=Ju(e,t,n),$e(e,a)||(be=!0),e):(ka&42)===0||(ka&1073741824)!==0&&(G&261930)===0?(be=!0,e.memoizedState=t):(e=id(),k.lanes|=e,rt|=e,a)}function uc(e,a,t,n,l){var i=D.p;D.p=i!==0&&8>i?i:8;var u=g.T,s={};g.T=s,as(e,!1,a,t);try{var o=l(),m=g.S;if(m!==null&&m(s,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var E=Bm(o,n);Jn(e,a,E,ia(e))}else Jn(e,a,n,ia(e))}catch(b){Jn(e,a,{then:function(){},status:"rejected",reason:b},ia())}finally{D.p=i,u!==null&&s.types!==null&&(u.types=s.types),g.T=u}}function Qm(){}function $u(e,a,t,n){if(e.tag!==5)throw Error(p(476));var l=sc(e).queue;uc(e,l,a,_,t===null?Qm:function(){return oc(e),t(n)})}function sc(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:_,baseState:_,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:_},next:null};var t={};return a.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:t},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function oc(e){var a=sc(e);a.next===null&&(a=e.alternate.memoizedState),Jn(e,a.next.queue,{},ia())}function es(){return Oe(pl)}function rc(){return Ee().memoizedState}function cc(){return Ee().memoizedState}function Gm(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var t=ia();e=nt(t);var n=lt(a,e,t);n!==null&&(Ve(n,a,t),Vn(n,a,t)),a={cache:Mu()},e.payload=a;return}a=a.return}}function jm(e,a,t){var n=ia();t={lane:n,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},ii(e)?fc(a,t):(t=gu(e,a,t,n),t!==null&&(Ve(t,e,n),mc(t,a,n)))}function dc(e,a,t){var n=ia();Jn(e,a,t,n)}function Jn(e,a,t,n){var l={lane:n,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(ii(e))fc(a,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=a.lastRenderedReducer,i!==null))try{var u=a.lastRenderedState,s=i(u,t);if(l.hasEagerState=!0,l.eagerState=s,$e(s,u))return Hl(e,a,l,0),ue===null&&zl(),!1}catch{}finally{}if(t=gu(e,a,l,n),t!==null)return Ve(t,e,n),mc(t,a,n),!0}return!1}function as(e,a,t,n){if(n={lane:2,revertLane:xs(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ii(e)){if(a)throw Error(p(479))}else a=gu(e,t,n,2),a!==null&&Ve(a,e,2)}function ii(e){var a=e.alternate;return e===k||a!==null&&a===k}function fc(e,a){dn=Jl=!0;var t=e.pending;t===null?a.next=a:(a.next=t.next,t.next=a),e.pending=a}function mc(e,a,t){if((t&4194048)!==0){var n=a.lanes;n&=e.pendingLanes,t|=n,a.lanes=t,go(e,t)}}var $n={readContext:Oe,use:ai,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useLayoutEffect:fe,useInsertionEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useSyncExternalStore:fe,useId:fe,useHostTransitionStatus:fe,useFormState:fe,useActionState:fe,useOptimistic:fe,useMemoCache:fe,useCacheRefresh:fe};$n.useEffectEvent=fe;var hc={readContext:Oe,use:ai,useCallback:function(e,a){return Be().memoizedState=[e,a===void 0?null:a],e},useContext:Oe,useEffect:Zr,useImperativeHandle:function(e,a,t){t=t!=null?t.concat([e]):null,ni(4194308,4,ac.bind(null,a,e),t)},useLayoutEffect:function(e,a){return ni(4194308,4,e,a)},useInsertionEffect:function(e,a){ni(4,2,e,a)},useMemo:function(e,a){var t=Be();a=a===void 0?null:a;var n=e();if(It){Xa(!0);try{e()}finally{Xa(!1)}}return t.memoizedState=[n,a],n},useReducer:function(e,a,t){var n=Be();if(t!==void 0){var l=t(a);if(It){Xa(!0);try{t(a)}finally{Xa(!1)}}}else l=a;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=jm.bind(null,k,e),[n.memoizedState,e]},useRef:function(e){var a=Be();return e={current:e},a.memoizedState=e},useState:function(e){e=Fu(e);var a=e.queue,t=dc.bind(null,k,a);return a.dispatch=t,[e.memoizedState,t]},useDebugValue:Zu,useDeferredValue:function(e,a){var t=Be();return Ju(t,e,a)},useTransition:function(){var e=Fu(!1);return e=uc.bind(null,k,e.queue,!0,!1),Be().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,t){var n=k,l=Be();if(P){if(t===void 0)throw Error(p(407));t=t()}else{if(t=a(),ue===null)throw Error(p(349));(G&127)!==0||Br(n,a,t)}l.memoizedState=t;var i={value:t,getSnapshot:a};return l.queue=i,Zr(kr.bind(null,n,i,e),[e]),n.flags|=2048,mn(9,{destroy:void 0},Ir.bind(null,n,i,t,a),null),t},useId:function(){var e=Be(),a=ue.identifierPrefix;if(P){var t=Aa,n=Ra;t=(n&~(1<<32-Je(n)-1)).toString(32)+t,a="_"+a+"R_"+t,t=$l++,0<t&&(a+="H"+t.toString(32)),a+="_"}else t=Im++,a="_"+a+"r_"+t.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:es,useFormState:Kr,useActionState:Kr,useOptimistic:function(e){var a=Be();a.memoizedState=a.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=t,a=as.bind(null,k,!0,t),t.dispatch=a,[e,a]},useMemoCache:Pu,useCacheRefresh:function(){return Be().memoizedState=Gm.bind(null,k)},useEffectEvent:function(e){var a=Be(),t={impl:e};return a.memoizedState=t,function(){if((X&2)!==0)throw Error(p(440));return t.impl.apply(void 0,arguments)}}},ts={readContext:Oe,use:ai,useCallback:nc,useContext:Oe,useEffect:Wu,useImperativeHandle:tc,useInsertionEffect:$r,useLayoutEffect:ec,useMemo:lc,useReducer:ti,useRef:Wr,useState:function(){return ti(za)},useDebugValue:Zu,useDeferredValue:function(e,a){var t=Ee();return ic(t,te.memoizedState,e,a)},useTransition:function(){var e=ti(za)[0],a=Ee().memoizedState;return[typeof e=="boolean"?e:Zn(e),a]},useSyncExternalStore:_r,useId:rc,useHostTransitionStatus:es,useFormState:Vr,useActionState:Vr,useOptimistic:function(e,a){var t=Ee();return qr(t,te,e,a)},useMemoCache:Pu,useCacheRefresh:cc};ts.useEffectEvent=Jr;var pc={readContext:Oe,use:ai,useCallback:nc,useContext:Oe,useEffect:Wu,useImperativeHandle:tc,useInsertionEffect:$r,useLayoutEffect:ec,useMemo:lc,useReducer:Vu,useRef:Wr,useState:function(){return Vu(za)},useDebugValue:Zu,useDeferredValue:function(e,a){var t=Ee();return te===null?Ju(t,e,a):ic(t,te.memoizedState,e,a)},useTransition:function(){var e=Vu(za)[0],a=Ee().memoizedState;return[typeof e=="boolean"?e:Zn(e),a]},useSyncExternalStore:_r,useId:rc,useHostTransitionStatus:es,useFormState:Xr,useActionState:Xr,useOptimistic:function(e,a){var t=Ee();return te!==null?qr(t,te,e,a):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Pu,useCacheRefresh:cc};pc.useEffectEvent=Jr;function ns(e,a,t,n){a=e.memoizedState,t=t(n,a),t=t==null?a:x({},a,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ls={enqueueSetState:function(e,a,t){e=e._reactInternals;var n=ia(),l=nt(n);l.payload=a,t!=null&&(l.callback=t),a=lt(e,l,n),a!==null&&(Ve(a,e,n),Vn(a,e,n))},enqueueReplaceState:function(e,a,t){e=e._reactInternals;var n=ia(),l=nt(n);l.tag=1,l.payload=a,t!=null&&(l.callback=t),a=lt(e,l,n),a!==null&&(Ve(a,e,n),Vn(a,e,n))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var t=ia(),n=nt(t);n.tag=2,a!=null&&(n.callback=a),a=lt(e,n,t),a!==null&&(Ve(a,e,t),Vn(a,e,t))}};function yc(e,a,t,n,l,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,u):a.prototype&&a.prototype.isPureReactComponent?!Hn(t,n)||!Hn(l,i):!0}function Ec(e,a,t,n){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,n),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,n),a.state!==e&&ls.enqueueReplaceState(a,a.state,null)}function kt(e,a){var t=a;if("ref"in a){t={};for(var n in a)n!=="ref"&&(t[n]=a[n])}if(e=e.defaultProps){t===a&&(t=x({},t));for(var l in e)t[l]===void 0&&(t[l]=e[l])}return t}function gc(e){kl(e)}function Sc(e){console.error(e)}function bc(e){kl(e)}function ui(e,a){try{var t=e.onUncaughtError;t(a.value,{componentStack:a.stack})}catch(n){setTimeout(function(){throw n})}}function Tc(e,a,t){try{var n=e.onCaughtError;n(t.value,{componentStack:t.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function is(e,a,t){return t=nt(t),t.tag=3,t.payload={element:null},t.callback=function(){ui(e,a)},t}function vc(e){return e=nt(e),e.tag=3,e}function Dc(e,a,t,n){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var i=n.value;e.payload=function(){return l(i)},e.callback=function(){Tc(a,t,n)}}var u=t.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Tc(a,t,n),typeof l!="function"&&(ct===null?ct=new Set([this]):ct.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})})}function Ym(e,a,t,n,l){if(t.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(a=t.alternate,a!==null&&ln(a,t,l,!0),t=aa.current,t!==null){switch(t.tag){case 31:case 13:return ha===null?gi():t.alternate===null&&me===0&&(me=3),t.flags&=-257,t.flags|=65536,t.lanes=l,n===Vl?t.flags|=16384:(a=t.updateQueue,a===null?t.updateQueue=new Set([n]):a.add(n),Ls(e,n,l)),!1;case 22:return t.flags|=65536,n===Vl?t.flags|=16384:(a=t.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([n])},t.updateQueue=a):(t=a.retryQueue,t===null?a.retryQueue=new Set([n]):t.add(n)),Ls(e,n,l)),!1}throw Error(p(435,t.tag))}return Ls(e,n,l),gi(),!1}if(P)return a=aa.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=l,n!==Ru&&(e=Error(p(422),{cause:n}),Gn(ca(e,t)))):(n!==Ru&&(a=Error(p(423),{cause:n}),Gn(ca(a,t))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=ca(n,t),l=is(e.stateNode,n,l),Bu(e,l),me!==4&&(me=2)),!1;var i=Error(p(520),{cause:n});if(i=ca(i,t),sl===null?sl=[i]:sl.push(i),me!==4&&(me=2),a===null)return!0;n=ca(n,t),t=a;do{switch(t.tag){case 3:return t.flags|=65536,e=l&-l,t.lanes|=e,e=is(t.stateNode,n,e),Bu(t,e),!1;case 1:if(a=t.type,i=t.stateNode,(t.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ct===null||!ct.has(i))))return t.flags|=65536,l&=-l,t.lanes|=l,l=vc(l),Dc(l,e,t,n),Bu(t,l),!1}t=t.return}while(t!==null);return!1}var us=Error(p(461)),be=!1;function Ce(e,a,t,n){a.child=e===null?Or(a,null,t,n):Bt(a,e.child,t,n)}function Rc(e,a,t,n,l){t=t.render;var i=a.ref;if("ref"in n){var u={};for(var s in n)s!=="ref"&&(u[s]=n[s])}else u=n;return Ut(a),n=Qu(e,a,t,u,i,l),s=Gu(),e!==null&&!be?(ju(e,a,l),Ha(e,a,l)):(P&&s&&vu(a),a.flags|=1,Ce(e,a,n,l),a.child)}function Ac(e,a,t,n,l){if(e===null){var i=t.type;return typeof i=="function"&&!Su(i)&&i.defaultProps===void 0&&t.compare===null?(a.tag=15,a.type=i,Nc(e,a,i,n,l)):(e=Ql(t.type,null,n,a,a.mode,l),e.ref=a.ref,e.return=a,a.child=e)}if(i=e.child,!hs(e,l)){var u=i.memoizedProps;if(t=t.compare,t=t!==null?t:Hn,t(u,n)&&e.ref===a.ref)return Ha(e,a,l)}return a.flags|=1,e=xa(i,n),e.ref=a.ref,e.return=a,a.child=e}function Nc(e,a,t,n,l){if(e!==null){var i=e.memoizedProps;if(Hn(i,n)&&e.ref===a.ref)if(be=!1,a.pendingProps=n=i,hs(e,l))(e.flags&131072)!==0&&(be=!0);else return a.lanes=e.lanes,Ha(e,a,l)}return ss(e,a,t,n,l)}function Oc(e,a,t,n){var l=n.children,i=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((a.flags&128)!==0){if(i=i!==null?i.baseLanes|t:t,e!==null){for(n=a.child=e.child,l=0;n!==null;)l=l|n.lanes|n.childLanes,n=n.sibling;n=l&~i}else n=0,a.child=null;return Cc(e,a,i,t,n)}if((t&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&Pl(a,i!==null?i.cachePool:null),i!==null?Lr(a,i):ku(),Ur(a);else return n=a.lanes=536870912,Cc(e,a,i!==null?i.baseLanes|t:t,t,n)}else i!==null?(Pl(a,i.cachePool),Lr(a,i),ut(),a.memoizedState=null):(e!==null&&Pl(a,null),ku(),ut());return Ce(e,a,l,t),a.child}function el(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Cc(e,a,t,n,l){var i=Uu();return i=i===null?null:{parent:ge._currentValue,pool:i},a.memoizedState={baseLanes:t,cachePool:i},e!==null&&Pl(a,null),ku(),Ur(a),e!==null&&ln(e,a,n,!0),a.childLanes=l,null}function si(e,a){return a=ri({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function Mc(e,a,t){return Bt(a,e.child,null,t),e=si(a,a.pendingProps),e.flags|=2,ta(a),a.memoizedState=null,e}function Pm(e,a,t){var n=a.pendingProps,l=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(P){if(n.mode==="hidden")return e=si(a,n),a.lanes=536870912,el(null,e);if(Hu(a),(e=se)?(e=Qd(e,ma),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Ja!==null?{id:Ra,overflow:Aa}:null,retryLane:536870912,hydrationErrors:null},t=fr(e),t.return=a,a.child=t,Ne=a,se=null)):e=null,e===null)throw et(a);return a.lanes=536870912,null}return si(a,n)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(Hu(a),l)if(a.flags&256)a.flags&=-257,a=Mc(e,a,t);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(p(558));else if(be||ln(e,a,t,!1),l=(t&e.childLanes)!==0,be||l){if(n=ue,n!==null&&(u=So(n,t),u!==0&&u!==i.retryLane))throw i.retryLane=u,Ot(e,u),Ve(n,e,u),us;gi(),a=Mc(e,a,t)}else e=i.treeContext,se=pa(u.nextSibling),Ne=a,P=!0,$a=null,ma=!1,e!==null&&pr(a,e),a=si(a,n),a.flags|=4096;return a}return e=xa(e.child,{mode:n.mode,children:n.children}),e.ref=a.ref,a.child=e,e.return=a,e}function oi(e,a){var t=a.ref;if(t===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(p(284));(e===null||e.ref!==t)&&(a.flags|=4194816)}}function ss(e,a,t,n,l){return Ut(a),t=Qu(e,a,t,n,void 0,l),n=Gu(),e!==null&&!be?(ju(e,a,l),Ha(e,a,l)):(P&&n&&vu(a),a.flags|=1,Ce(e,a,t,l),a.child)}function Lc(e,a,t,n,l,i){return Ut(a),a.updateQueue=null,t=xr(a,n,t,l),wr(e),n=Gu(),e!==null&&!be?(ju(e,a,i),Ha(e,a,i)):(P&&n&&vu(a),a.flags|=1,Ce(e,a,t,i),a.child)}function Uc(e,a,t,n,l){if(Ut(a),a.stateNode===null){var i=en,u=t.contextType;typeof u=="object"&&u!==null&&(i=Oe(u)),i=new t(n,i),a.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ls,a.stateNode=i,i._reactInternals=a,i=a.stateNode,i.props=n,i.state=a.memoizedState,i.refs={},xu(a),u=t.contextType,i.context=typeof u=="object"&&u!==null?Oe(u):en,i.state=a.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(ns(a,t,u,n),i.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&ls.enqueueReplaceState(i,i.state,null),Xn(a,n,i,l),Fn(),i.state=a.memoizedState),typeof i.componentDidMount=="function"&&(a.flags|=4194308),n=!0}else if(e===null){i=a.stateNode;var s=a.memoizedProps,o=kt(t,s);i.props=o;var m=i.context,E=t.contextType;u=en,typeof E=="object"&&E!==null&&(u=Oe(E));var b=t.getDerivedStateFromProps;E=typeof b=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=a.pendingProps!==s,E||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||m!==u)&&Ec(a,i,n,u),tt=!1;var h=a.memoizedState;i.state=h,Xn(a,n,i,l),Fn(),m=a.memoizedState,s||h!==m||tt?(typeof b=="function"&&(ns(a,t,b,n),m=a.memoizedState),(o=tt||yc(a,t,o,n,h,m,u))?(E||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(a.flags|=4194308)):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=n,a.memoizedState=m),i.props=n,i.state=m,i.context=u,n=o):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),n=!1)}else{i=a.stateNode,_u(e,a),u=a.memoizedProps,E=kt(t,u),i.props=E,b=a.pendingProps,h=i.context,m=t.contextType,o=en,typeof m=="object"&&m!==null&&(o=Oe(m)),s=t.getDerivedStateFromProps,(m=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==b||h!==o)&&Ec(a,i,n,o),tt=!1,h=a.memoizedState,i.state=h,Xn(a,n,i,l),Fn();var y=a.memoizedState;u!==b||h!==y||tt||e!==null&&e.dependencies!==null&&jl(e.dependencies)?(typeof s=="function"&&(ns(a,t,s,n),y=a.memoizedState),(E=tt||yc(a,t,E,n,h,y,o)||e!==null&&e.dependencies!==null&&jl(e.dependencies))?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,y,o),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,y,o)),typeof i.componentDidUpdate=="function"&&(a.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(a.flags|=1024),a.memoizedProps=n,a.memoizedState=y),i.props=n,i.state=y,i.context=o,n=E):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(a.flags|=1024),n=!1)}return i=n,oi(e,a),n=(a.flags&128)!==0,i||n?(i=a.stateNode,t=n&&typeof t.getDerivedStateFromError!="function"?null:i.render(),a.flags|=1,e!==null&&n?(a.child=Bt(a,e.child,null,l),a.child=Bt(a,null,t,l)):Ce(e,a,t,l),a.memoizedState=i.state,e=a.child):e=Ha(e,a,l),e}function wc(e,a,t,n){return Mt(),a.flags|=256,Ce(e,a,t,n),a.child}var os={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rs(e){return{baseLanes:e,cachePool:Tr()}}function cs(e,a,t){return e=e!==null?e.childLanes&~t:0,a&&(e|=la),e}function xc(e,a,t){var n=a.pendingProps,l=!1,i=(a.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(ye.current&2)!==0),u&&(l=!0,a.flags&=-129),u=(a.flags&32)!==0,a.flags&=-33,e===null){if(P){if(l?it(a):ut(),(e=se)?(e=Qd(e,ma),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Ja!==null?{id:Ra,overflow:Aa}:null,retryLane:536870912,hydrationErrors:null},t=fr(e),t.return=a,a.child=t,Ne=a,se=null)):e=null,e===null)throw et(a);return Ks(e)?a.lanes=32:a.lanes=536870912,null}var s=n.children;return n=n.fallback,l?(ut(),l=a.mode,s=ri({mode:"hidden",children:s},l),n=Ct(n,l,t,null),s.return=a,n.return=a,s.sibling=n,a.child=s,n=a.child,n.memoizedState=rs(t),n.childLanes=cs(e,u,t),a.memoizedState=os,el(null,n)):(it(a),ds(a,s))}var o=e.memoizedState;if(o!==null&&(s=o.dehydrated,s!==null)){if(i)a.flags&256?(it(a),a.flags&=-257,a=fs(e,a,t)):a.memoizedState!==null?(ut(),a.child=e.child,a.flags|=128,a=null):(ut(),s=n.fallback,l=a.mode,n=ri({mode:"visible",children:n.children},l),s=Ct(s,l,t,null),s.flags|=2,n.return=a,s.return=a,n.sibling=s,a.child=n,Bt(a,e.child,null,t),n=a.child,n.memoizedState=rs(t),n.childLanes=cs(e,u,t),a.memoizedState=os,a=el(null,n));else if(it(a),Ks(s)){if(u=s.nextSibling&&s.nextSibling.dataset,u)var m=u.dgst;u=m,n=Error(p(419)),n.stack="",n.digest=u,Gn({value:n,source:null,stack:null}),a=fs(e,a,t)}else if(be||ln(e,a,t,!1),u=(t&e.childLanes)!==0,be||u){if(u=ue,u!==null&&(n=So(u,t),n!==0&&n!==o.retryLane))throw o.retryLane=n,Ot(e,n),Ve(u,e,n),us;Ps(s)||gi(),a=fs(e,a,t)}else Ps(s)?(a.flags|=192,a.child=e.child,a=null):(e=o.treeContext,se=pa(s.nextSibling),Ne=a,P=!0,$a=null,ma=!1,e!==null&&pr(a,e),a=ds(a,n.children),a.flags|=4096);return a}return l?(ut(),s=n.fallback,l=a.mode,o=e.child,m=o.sibling,n=xa(o,{mode:"hidden",children:n.children}),n.subtreeFlags=o.subtreeFlags&65011712,m!==null?s=xa(m,s):(s=Ct(s,l,t,null),s.flags|=2),s.return=a,n.return=a,n.sibling=s,a.child=n,el(null,n),n=a.child,s=e.child.memoizedState,s===null?s=rs(t):(l=s.cachePool,l!==null?(o=ge._currentValue,l=l.parent!==o?{parent:o,pool:o}:l):l=Tr(),s={baseLanes:s.baseLanes|t,cachePool:l}),n.memoizedState=s,n.childLanes=cs(e,u,t),a.memoizedState=os,el(e.child,n)):(it(a),t=e.child,e=t.sibling,t=xa(t,{mode:"visible",children:n.children}),t.return=a,t.sibling=null,e!==null&&(u=a.deletions,u===null?(a.deletions=[e],a.flags|=16):u.push(e)),a.child=t,a.memoizedState=null,t)}function ds(e,a){return a=ri({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function ri(e,a){return e=ea(22,e,null,a),e.lanes=0,e}function fs(e,a,t){return Bt(a,e.child,null,t),e=ds(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function _c(e,a,t){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a),Ou(e.return,a,t)}function ms(e,a,t,n,l,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:n,tail:t,tailMode:l,treeForkCount:i}:(u.isBackwards=a,u.rendering=null,u.renderingStartTime=0,u.last=n,u.tail=t,u.tailMode=l,u.treeForkCount=i)}function Bc(e,a,t){var n=a.pendingProps,l=n.revealOrder,i=n.tail;n=n.children;var u=ye.current,s=(u&2)!==0;if(s?(u=u&1|2,a.flags|=128):u&=1,R(ye,u),Ce(e,a,n,t),n=P?Qn:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_c(e,t,a);else if(e.tag===19)_c(e,t,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(t=a.child,l=null;t!==null;)e=t.alternate,e!==null&&Zl(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=a.child,a.child=null):(l=t.sibling,t.sibling=null),ms(a,!1,l,t,i,n);break;case"backwards":case"unstable_legacy-backwards":for(t=null,l=a.child,a.child=null;l!==null;){if(e=l.alternate,e!==null&&Zl(e)===null){a.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}ms(a,!0,t,null,i,n);break;case"together":ms(a,!1,null,null,void 0,n);break;default:a.memoizedState=null}return a.child}function Ha(e,a,t){if(e!==null&&(a.dependencies=e.dependencies),rt|=a.lanes,(t&a.childLanes)===0)if(e!==null){if(ln(e,a,t,!1),(t&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(p(153));if(a.child!==null){for(e=a.child,t=xa(e,e.pendingProps),a.child=t,t.return=a;e.sibling!==null;)e=e.sibling,t=t.sibling=xa(e,e.pendingProps),t.return=a;t.sibling=null}return a.child}function hs(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&jl(e)))}function Km(e,a,t){switch(a.tag){case 3:_e(a,a.stateNode.containerInfo),at(a,ge,e.memoizedState.cache),Mt();break;case 27:case 5:Nn(a);break;case 4:_e(a,a.stateNode.containerInfo);break;case 10:at(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Hu(a),null;break;case 13:var n=a.memoizedState;if(n!==null)return n.dehydrated!==null?(it(a),a.flags|=128,null):(t&a.child.childLanes)!==0?xc(e,a,t):(it(a),e=Ha(e,a,t),e!==null?e.sibling:null);it(a);break;case 19:var l=(e.flags&128)!==0;if(n=(t&a.childLanes)!==0,n||(ln(e,a,t,!1),n=(t&a.childLanes)!==0),l){if(n)return Bc(e,a,t);a.flags|=128}if(l=a.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),R(ye,ye.current),n)break;return null;case 22:return a.lanes=0,Oc(e,a,t,a.pendingProps);case 24:at(a,ge,e.memoizedState.cache)}return Ha(e,a,t)}function Ic(e,a,t){if(e!==null)if(e.memoizedProps!==a.pendingProps)be=!0;else{if(!hs(e,t)&&(a.flags&128)===0)return be=!1,Km(e,a,t);be=(e.flags&131072)!==0}else be=!1,P&&(a.flags&1048576)!==0&&hr(a,Qn,a.index);switch(a.lanes=0,a.tag){case 16:e:{var n=a.pendingProps;if(e=xt(a.elementType),a.type=e,typeof e=="function")Su(e)?(n=kt(e,n),a.tag=1,a=Uc(null,a,e,n,t)):(a.tag=0,a=ss(null,a,e,n,t));else{if(e!=null){var l=e.$$typeof;if(l===ua){a.tag=11,a=Rc(null,a,e,n,t);break e}else if(l===Y){a.tag=14,a=Ac(null,a,e,n,t);break e}}throw a=Ma(e)||e,Error(p(306,a,""))}}return a;case 0:return ss(e,a,a.type,a.pendingProps,t);case 1:return n=a.type,l=kt(n,a.pendingProps),Uc(e,a,n,l,t);case 3:e:{if(_e(a,a.stateNode.containerInfo),e===null)throw Error(p(387));n=a.pendingProps;var i=a.memoizedState;l=i.element,_u(e,a),Xn(a,n,null,t);var u=a.memoizedState;if(n=u.cache,at(a,ge,n),n!==i.cache&&Cu(a,[ge],t,!0),Fn(),n=u.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:u.cache},a.updateQueue.baseState=i,a.memoizedState=i,a.flags&256){a=wc(e,a,n,t);break e}else if(n!==l){l=ca(Error(p(424)),a),Gn(l),a=wc(e,a,n,t);break e}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(se=pa(e.firstChild),Ne=a,P=!0,$a=null,ma=!0,t=Or(a,null,n,t),a.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(Mt(),n===l){a=Ha(e,a,t);break e}Ce(e,a,n,t)}a=a.child}return a;case 26:return oi(e,a),e===null?(t=Vd(a.type,null,a.pendingProps,null))?a.memoizedState=t:P||(t=a.type,e=a.pendingProps,n=Ai(H.current).createElement(t),n[Ae]=a,n[Qe]=e,Me(n,t,e),De(n),a.stateNode=n):a.memoizedState=Vd(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Nn(a),e===null&&P&&(n=a.stateNode=Yd(a.type,a.pendingProps,H.current),Ne=a,ma=!0,l=se,ht(a.type)?(Vs=l,se=pa(n.firstChild)):se=l),Ce(e,a,a.pendingProps.children,t),oi(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&P&&((l=n=se)&&(n=vh(n,a.type,a.pendingProps,ma),n!==null?(a.stateNode=n,Ne=a,se=pa(n.firstChild),ma=!1,l=!0):l=!1),l||et(a)),Nn(a),l=a.type,i=a.pendingProps,u=e!==null?e.memoizedProps:null,n=i.children,Gs(l,i)?n=null:u!==null&&Gs(l,u)&&(a.flags|=32),a.memoizedState!==null&&(l=Qu(e,a,km,null,null,t),pl._currentValue=l),oi(e,a),Ce(e,a,n,t),a.child;case 6:return e===null&&P&&((e=t=se)&&(t=Dh(t,a.pendingProps,ma),t!==null?(a.stateNode=t,Ne=a,se=null,e=!0):e=!1),e||et(a)),null;case 13:return xc(e,a,t);case 4:return _e(a,a.stateNode.containerInfo),n=a.pendingProps,e===null?a.child=Bt(a,null,n,t):Ce(e,a,n,t),a.child;case 11:return Rc(e,a,a.type,a.pendingProps,t);case 7:return Ce(e,a,a.pendingProps,t),a.child;case 8:return Ce(e,a,a.pendingProps.children,t),a.child;case 12:return Ce(e,a,a.pendingProps.children,t),a.child;case 10:return n=a.pendingProps,at(a,a.type,n.value),Ce(e,a,n.children,t),a.child;case 9:return l=a.type._context,n=a.pendingProps.children,Ut(a),l=Oe(l),n=n(l),a.flags|=1,Ce(e,a,n,t),a.child;case 14:return Ac(e,a,a.type,a.pendingProps,t);case 15:return Nc(e,a,a.type,a.pendingProps,t);case 19:return Bc(e,a,t);case 31:return Pm(e,a,t);case 22:return Oc(e,a,t,a.pendingProps);case 24:return Ut(a),n=Oe(ge),e===null?(l=Uu(),l===null&&(l=ue,i=Mu(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=t),l=i),a.memoizedState={parent:n,cache:l},xu(a),at(a,ge,l)):((e.lanes&t)!==0&&(_u(e,a),Xn(a,null,null,t),Fn()),l=e.memoizedState,i=a.memoizedState,l.parent!==n?(l={parent:n,cache:n},a.memoizedState=l,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=l),at(a,ge,n)):(n=i.cache,at(a,ge,n),n!==l.cache&&Cu(a,[ge],t,!0))),Ce(e,a,a.pendingProps.children,t),a.child;case 29:throw a.pendingProps}throw Error(p(156,a.tag))}function qa(e){e.flags|=4}function ps(e,a,t,n,l){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(rd())e.flags|=8192;else throw _t=Vl,wu}else e.flags&=-16777217}function kc(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Jd(a))if(rd())e.flags|=8192;else throw _t=Vl,wu}function ci(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?yo():536870912,e.lanes|=a,En|=a)}function al(e,a){if(!P)switch(e.tailMode){case"hidden":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function oe(e){var a=e.alternate!==null&&e.alternate.child===e.child,t=0,n=0;if(a)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=t,a}function Vm(e,a,t){var n=a.pendingProps;switch(Du(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(a),null;case 1:return oe(a),null;case 3:return t=a.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),Ia(ge),pe(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(nn(a)?qa(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Au())),oe(a),null;case 26:var l=a.type,i=a.memoizedState;return e===null?(qa(a),i!==null?(oe(a),kc(a,i)):(oe(a),ps(a,l,null,n,t))):i?i!==e.memoizedState?(qa(a),oe(a),kc(a,i)):(oe(a),a.flags&=-16777217):(e=e.memoizedProps,e!==n&&qa(a),oe(a),ps(a,l,e,n,t)),null;case 27:if(Tl(a),t=H.current,l=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==n&&qa(a);else{if(!n){if(a.stateNode===null)throw Error(p(166));return oe(a),null}e=O.current,nn(a)?yr(a):(e=Yd(l,n,t),a.stateNode=e,qa(a))}return oe(a),null;case 5:if(Tl(a),l=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==n&&qa(a);else{if(!n){if(a.stateNode===null)throw Error(p(166));return oe(a),null}if(i=O.current,nn(a))yr(a);else{var u=Ai(H.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof n.is=="string"?u.createElement("select",{is:n.is}):u.createElement("select"),n.multiple?i.multiple=!0:n.size&&(i.size=n.size);break;default:i=typeof n.is=="string"?u.createElement(l,{is:n.is}):u.createElement(l)}}i[Ae]=a,i[Qe]=n;e:for(u=a.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===a)break e;for(;u.sibling===null;){if(u.return===null||u.return===a)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}a.stateNode=i;e:switch(Me(i,l,n),l){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&qa(a)}}return oe(a),ps(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,t),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==n&&qa(a);else{if(typeof n!="string"&&a.stateNode===null)throw Error(p(166));if(e=H.current,nn(a)){if(e=a.stateNode,t=a.memoizedProps,n=null,l=Ne,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[Ae]=a,e=!!(e.nodeValue===t||n!==null&&n.suppressHydrationWarning===!0||xd(e.nodeValue,t)),e||et(a,!0)}else e=Ai(e).createTextNode(n),e[Ae]=a,a.stateNode=e}return oe(a),null;case 31:if(t=a.memoizedState,e===null||e.memoizedState!==null){if(n=nn(a),t!==null){if(e===null){if(!n)throw Error(p(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(557));e[Ae]=a}else Mt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;oe(a),e=!1}else t=Au(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return a.flags&256?(ta(a),a):(ta(a),null);if((a.flags&128)!==0)throw Error(p(558))}return oe(a),null;case 13:if(n=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=nn(a),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(p(318));if(l=a.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(p(317));l[Ae]=a}else Mt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;oe(a),l=!1}else l=Au(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return a.flags&256?(ta(a),a):(ta(a),null)}return ta(a),(a.flags&128)!==0?(a.lanes=t,a):(t=n!==null,e=e!==null&&e.memoizedState!==null,t&&(n=a.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==l&&(n.flags|=2048)),t!==e&&t&&(a.child.flags|=8192),ci(a,a.updateQueue),oe(a),null);case 4:return pe(),e===null&&ks(a.stateNode.containerInfo),oe(a),null;case 10:return Ia(a.type),oe(a),null;case 19:if(T(ye),n=a.memoizedState,n===null)return oe(a),null;if(l=(a.flags&128)!==0,i=n.rendering,i===null)if(l)al(n,!1);else{if(me!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(i=Zl(e),i!==null){for(a.flags|=128,al(n,!1),e=i.updateQueue,a.updateQueue=e,ci(a,e),a.subtreeFlags=0,e=t,t=a.child;t!==null;)dr(t,e),t=t.sibling;return R(ye,ye.current&1|2),P&&_a(a,n.treeForkCount),a.child}e=e.sibling}n.tail!==null&&We()>pi&&(a.flags|=128,l=!0,al(n,!1),a.lanes=4194304)}else{if(!l)if(e=Zl(i),e!==null){if(a.flags|=128,l=!0,e=e.updateQueue,a.updateQueue=e,ci(a,e),al(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!P)return oe(a),null}else 2*We()-n.renderingStartTime>pi&&t!==536870912&&(a.flags|=128,l=!0,al(n,!1),a.lanes=4194304);n.isBackwards?(i.sibling=a.child,a.child=i):(e=n.last,e!==null?e.sibling=i:a.child=i,n.last=i)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=We(),e.sibling=null,t=ye.current,R(ye,l?t&1|2:t&1),P&&_a(a,n.treeForkCount),e):(oe(a),null);case 22:case 23:return ta(a),zu(),n=a.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(a.flags|=8192):n&&(a.flags|=8192),n?(t&536870912)!==0&&(a.flags&128)===0&&(oe(a),a.subtreeFlags&6&&(a.flags|=8192)):oe(a),t=a.updateQueue,t!==null&&ci(a,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==t&&(a.flags|=2048),e!==null&&T(wt),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),Ia(ge),oe(a),null;case 25:return null;case 30:return null}throw Error(p(156,a.tag))}function Fm(e,a){switch(Du(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Ia(ge),pe(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return Tl(a),null;case 31:if(a.memoizedState!==null){if(ta(a),a.alternate===null)throw Error(p(340));Mt()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(ta(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(p(340));Mt()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return T(ye),null;case 4:return pe(),null;case 10:return Ia(a.type),null;case 22:case 23:return ta(a),zu(),e!==null&&T(wt),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Ia(ge),null;case 25:return null;default:return null}}function zc(e,a){switch(Du(a),a.tag){case 3:Ia(ge),pe();break;case 26:case 27:case 5:Tl(a);break;case 4:pe();break;case 31:a.memoizedState!==null&&ta(a);break;case 13:ta(a);break;case 19:T(ye);break;case 10:Ia(a.type);break;case 22:case 23:ta(a),zu(),e!==null&&T(wt);break;case 24:Ia(ge)}}function tl(e,a){try{var t=a.updateQueue,n=t!==null?t.lastEffect:null;if(n!==null){var l=n.next;t=l;do{if((t.tag&e)===e){n=void 0;var i=t.create,u=t.inst;n=i(),u.destroy=n}t=t.next}while(t!==l)}}catch(s){ee(a,a.return,s)}}function st(e,a,t){try{var n=a.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var i=l.next;n=i;do{if((n.tag&e)===e){var u=n.inst,s=u.destroy;if(s!==void 0){u.destroy=void 0,l=a;var o=t,m=s;try{m()}catch(E){ee(l,o,E)}}}n=n.next}while(n!==i)}}catch(E){ee(a,a.return,E)}}function Hc(e){var a=e.updateQueue;if(a!==null){var t=e.stateNode;try{Mr(a,t)}catch(n){ee(e,e.return,n)}}}function qc(e,a,t){t.props=kt(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(n){ee(e,a,n)}}function nl(e,a){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof t=="function"?e.refCleanup=t(n):t.current=n}}catch(l){ee(e,a,l)}}function Na(e,a){var t=e.ref,n=e.refCleanup;if(t!==null)if(typeof n=="function")try{n()}catch(l){ee(e,a,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){ee(e,a,l)}else t.current=null}function Qc(e){var a=e.type,t=e.memoizedProps,n=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":t.autoFocus&&n.focus();break e;case"img":t.src?n.src=t.src:t.srcSet&&(n.srcset=t.srcSet)}}catch(l){ee(e,e.return,l)}}function ys(e,a,t){try{var n=e.stateNode;yh(n,e.type,t,a),n[Qe]=a}catch(l){ee(e,e.return,l)}}function Gc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ht(e.type)||e.tag===4}function Es(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ht(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gs(e,a,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,a?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,a):(a=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.appendChild(e),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=Ua));else if(n!==4&&(n===27&&ht(e.type)&&(t=e.stateNode,a=null),e=e.child,e!==null))for(gs(e,a,t),e=e.sibling;e!==null;)gs(e,a,t),e=e.sibling}function di(e,a,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,a?t.insertBefore(e,a):t.appendChild(e);else if(n!==4&&(n===27&&ht(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(di(e,a,t),e=e.sibling;e!==null;)di(e,a,t),e=e.sibling}function jc(e){var a=e.stateNode,t=e.memoizedProps;try{for(var n=e.type,l=a.attributes;l.length;)a.removeAttributeNode(l[0]);Me(a,n,t),a[Ae]=e,a[Qe]=t}catch(i){ee(e,e.return,i)}}var Qa=!1,Te=!1,Ss=!1,Yc=typeof WeakSet=="function"?WeakSet:Set,Re=null;function Xm(e,a){if(e=e.containerInfo,qs=wi,e=tr(e),fu(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var n=t.getSelection&&t.getSelection();if(n&&n.rangeCount!==0){t=n.anchorNode;var l=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var u=0,s=-1,o=-1,m=0,E=0,b=e,h=null;a:for(;;){for(var y;b!==t||l!==0&&b.nodeType!==3||(s=u+l),b!==i||n!==0&&b.nodeType!==3||(o=u+n),b.nodeType===3&&(u+=b.nodeValue.length),(y=b.firstChild)!==null;)h=b,b=y;for(;;){if(b===e)break a;if(h===t&&++m===l&&(s=u),h===i&&++E===n&&(o=u),(y=b.nextSibling)!==null)break;b=h,h=b.parentNode}b=y}t=s===-1||o===-1?null:{start:s,end:o}}else t=null}t=t||{start:0,end:0}}else t=null;for(Qs={focusedElem:e,selectionRange:t},wi=!1,Re=a;Re!==null;)if(a=Re,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,Re=e;else for(;Re!==null;){switch(a=Re,i=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)l=e[t],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,t=a,l=i.memoizedProps,i=i.memoizedState,n=t.stateNode;try{var A=kt(t.type,l);e=n.getSnapshotBeforeUpdate(A,i),n.__reactInternalSnapshotBeforeUpdate=e}catch(U){ee(t,t.return,U)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,t=e.nodeType,t===9)Ys(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ys(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(p(163))}if(e=a.sibling,e!==null){e.return=a.return,Re=e;break}Re=a.return}}function Pc(e,a,t){var n=t.flags;switch(t.tag){case 0:case 11:case 15:ja(e,t),n&4&&tl(5,t);break;case 1:if(ja(e,t),n&4)if(e=t.stateNode,a===null)try{e.componentDidMount()}catch(u){ee(t,t.return,u)}else{var l=kt(t.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(l,a,e.__reactInternalSnapshotBeforeUpdate)}catch(u){ee(t,t.return,u)}}n&64&&Hc(t),n&512&&nl(t,t.return);break;case 3:if(ja(e,t),n&64&&(e=t.updateQueue,e!==null)){if(a=null,t.child!==null)switch(t.child.tag){case 27:case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}try{Mr(e,a)}catch(u){ee(t,t.return,u)}}break;case 27:a===null&&n&4&&jc(t);case 26:case 5:ja(e,t),a===null&&n&4&&Qc(t),n&512&&nl(t,t.return);break;case 12:ja(e,t);break;case 31:ja(e,t),n&4&&Fc(e,t);break;case 13:ja(e,t),n&4&&Xc(e,t),n&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=lh.bind(null,t),Rh(e,t))));break;case 22:if(n=t.memoizedState!==null||Qa,!n){a=a!==null&&a.memoizedState!==null||Te,l=Qa;var i=Te;Qa=n,(Te=a)&&!i?Ya(e,t,(t.subtreeFlags&8772)!==0):ja(e,t),Qa=l,Te=i}break;case 30:break;default:ja(e,t)}}function Kc(e){var a=e.alternate;a!==null&&(e.alternate=null,Kc(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Xi(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ce=null,je=!1;function Ga(e,a,t){for(t=t.child;t!==null;)Vc(e,a,t),t=t.sibling}function Vc(e,a,t){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(On,t)}catch{}switch(t.tag){case 26:Te||Na(t,a),Ga(e,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Te||Na(t,a);var n=ce,l=je;ht(t.type)&&(ce=t.stateNode,je=!1),Ga(e,a,t),fl(t.stateNode),ce=n,je=l;break;case 5:Te||Na(t,a);case 6:if(n=ce,l=je,ce=null,Ga(e,a,t),ce=n,je=l,ce!==null)if(je)try{(ce.nodeType===9?ce.body:ce.nodeName==="HTML"?ce.ownerDocument.body:ce).removeChild(t.stateNode)}catch(i){ee(t,a,i)}else try{ce.removeChild(t.stateNode)}catch(i){ee(t,a,i)}break;case 18:ce!==null&&(je?(e=ce,Hd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),An(e)):Hd(ce,t.stateNode));break;case 4:n=ce,l=je,ce=t.stateNode.containerInfo,je=!0,Ga(e,a,t),ce=n,je=l;break;case 0:case 11:case 14:case 15:st(2,t,a),Te||st(4,t,a),Ga(e,a,t);break;case 1:Te||(Na(t,a),n=t.stateNode,typeof n.componentWillUnmount=="function"&&qc(t,a,n)),Ga(e,a,t);break;case 21:Ga(e,a,t);break;case 22:Te=(n=Te)||t.memoizedState!==null,Ga(e,a,t),Te=n;break;default:Ga(e,a,t)}}function Fc(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{An(e)}catch(t){ee(a,a.return,t)}}}function Xc(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{An(e)}catch(t){ee(a,a.return,t)}}function Wm(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new Yc),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new Yc),a;default:throw Error(p(435,e.tag))}}function fi(e,a){var t=Wm(e);a.forEach(function(n){if(!t.has(n)){t.add(n);var l=ih.bind(null,e,n);n.then(l,l)}})}function Ye(e,a){var t=a.deletions;if(t!==null)for(var n=0;n<t.length;n++){var l=t[n],i=e,u=a,s=u;e:for(;s!==null;){switch(s.tag){case 27:if(ht(s.type)){ce=s.stateNode,je=!1;break e}break;case 5:ce=s.stateNode,je=!1;break e;case 3:case 4:ce=s.stateNode.containerInfo,je=!0;break e}s=s.return}if(ce===null)throw Error(p(160));Vc(i,u,l),ce=null,je=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)Wc(a,e),a=a.sibling}var Sa=null;function Wc(e,a){var t=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ye(a,e),Pe(e),n&4&&(st(3,e,e.return),tl(3,e),st(5,e,e.return));break;case 1:Ye(a,e),Pe(e),n&512&&(Te||t===null||Na(t,t.return)),n&64&&Qa&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?n:t.concat(n))));break;case 26:var l=Sa;if(Ye(a,e),Pe(e),n&512&&(Te||t===null||Na(t,t.return)),n&4){var i=t!==null?t.memoizedState:null;if(n=e.memoizedState,t===null)if(n===null)if(e.stateNode===null){e:{n=e.type,t=e.memoizedProps,l=l.ownerDocument||l;a:switch(n){case"title":i=l.getElementsByTagName("title")[0],(!i||i[Ln]||i[Ae]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(n),l.head.insertBefore(i,l.querySelector("head > title"))),Me(i,n,t),i[Ae]=e,De(i),n=i;break e;case"link":var u=Wd("link","href",l).get(n+(t.href||""));if(u){for(var s=0;s<u.length;s++)if(i=u[s],i.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&i.getAttribute("rel")===(t.rel==null?null:t.rel)&&i.getAttribute("title")===(t.title==null?null:t.title)&&i.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){u.splice(s,1);break a}}i=l.createElement(n),Me(i,n,t),l.head.appendChild(i);break;case"meta":if(u=Wd("meta","content",l).get(n+(t.content||""))){for(s=0;s<u.length;s++)if(i=u[s],i.getAttribute("content")===(t.content==null?null:""+t.content)&&i.getAttribute("name")===(t.name==null?null:t.name)&&i.getAttribute("property")===(t.property==null?null:t.property)&&i.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&i.getAttribute("charset")===(t.charSet==null?null:t.charSet)){u.splice(s,1);break a}}i=l.createElement(n),Me(i,n,t),l.head.appendChild(i);break;default:throw Error(p(468,n))}i[Ae]=e,De(i),n=i}e.stateNode=n}else Zd(l,e.type,e.stateNode);else e.stateNode=Xd(l,n,e.memoizedProps);else i!==n?(i===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):i.count--,n===null?Zd(l,e.type,e.stateNode):Xd(l,n,e.memoizedProps)):n===null&&e.stateNode!==null&&ys(e,e.memoizedProps,t.memoizedProps)}break;case 27:Ye(a,e),Pe(e),n&512&&(Te||t===null||Na(t,t.return)),t!==null&&n&4&&ys(e,e.memoizedProps,t.memoizedProps);break;case 5:if(Ye(a,e),Pe(e),n&512&&(Te||t===null||Na(t,t.return)),e.flags&32){l=e.stateNode;try{Vt(l,"")}catch(A){ee(e,e.return,A)}}n&4&&e.stateNode!=null&&(l=e.memoizedProps,ys(e,l,t!==null?t.memoizedProps:l)),n&1024&&(Ss=!0);break;case 6:if(Ye(a,e),Pe(e),n&4){if(e.stateNode===null)throw Error(p(162));n=e.memoizedProps,t=e.stateNode;try{t.nodeValue=n}catch(A){ee(e,e.return,A)}}break;case 3:if(Ci=null,l=Sa,Sa=Ni(a.containerInfo),Ye(a,e),Sa=l,Pe(e),n&4&&t!==null&&t.memoizedState.isDehydrated)try{An(a.containerInfo)}catch(A){ee(e,e.return,A)}Ss&&(Ss=!1,Zc(e));break;case 4:n=Sa,Sa=Ni(e.stateNode.containerInfo),Ye(a,e),Pe(e),Sa=n;break;case 12:Ye(a,e),Pe(e);break;case 31:Ye(a,e),Pe(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,fi(e,n)));break;case 13:Ye(a,e),Pe(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(hi=We()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,fi(e,n)));break;case 22:l=e.memoizedState!==null;var o=t!==null&&t.memoizedState!==null,m=Qa,E=Te;if(Qa=m||l,Te=E||o,Ye(a,e),Te=E,Qa=m,Pe(e),n&8192)e:for(a=e.stateNode,a._visibility=l?a._visibility&-2:a._visibility|1,l&&(t===null||o||Qa||Te||zt(e)),t=null,a=e;;){if(a.tag===5||a.tag===26){if(t===null){o=t=a;try{if(i=o.stateNode,l)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{s=o.stateNode;var b=o.memoizedProps.style,h=b!=null&&b.hasOwnProperty("display")?b.display:null;s.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(A){ee(o,o.return,A)}}}else if(a.tag===6){if(t===null){o=a;try{o.stateNode.nodeValue=l?"":o.memoizedProps}catch(A){ee(o,o.return,A)}}}else if(a.tag===18){if(t===null){o=a;try{var y=o.stateNode;l?qd(y,!0):qd(o.stateNode,!1)}catch(A){ee(o,o.return,A)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;t===a&&(t=null),a=a.return}t===a&&(t=null),a.sibling.return=a.return,a=a.sibling}n&4&&(n=e.updateQueue,n!==null&&(t=n.retryQueue,t!==null&&(n.retryQueue=null,fi(e,t))));break;case 19:Ye(a,e),Pe(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,fi(e,n)));break;case 30:break;case 21:break;default:Ye(a,e),Pe(e)}}function Pe(e){var a=e.flags;if(a&2){try{for(var t,n=e.return;n!==null;){if(Gc(n)){t=n;break}n=n.return}if(t==null)throw Error(p(160));switch(t.tag){case 27:var l=t.stateNode,i=Es(e);di(e,i,l);break;case 5:var u=t.stateNode;t.flags&32&&(Vt(u,""),t.flags&=-33);var s=Es(e);di(e,s,u);break;case 3:case 4:var o=t.stateNode.containerInfo,m=Es(e);gs(e,m,o);break;default:throw Error(p(161))}}catch(E){ee(e,e.return,E)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function Zc(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;Zc(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function ja(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Pc(e,a.alternate,a),a=a.sibling}function zt(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:st(4,a,a.return),zt(a);break;case 1:Na(a,a.return);var t=a.stateNode;typeof t.componentWillUnmount=="function"&&qc(a,a.return,t),zt(a);break;case 27:fl(a.stateNode);case 26:case 5:Na(a,a.return),zt(a);break;case 22:a.memoizedState===null&&zt(a);break;case 30:zt(a);break;default:zt(a)}e=e.sibling}}function Ya(e,a,t){for(t=t&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var n=a.alternate,l=e,i=a,u=i.flags;switch(i.tag){case 0:case 11:case 15:Ya(l,i,t),tl(4,i);break;case 1:if(Ya(l,i,t),n=i,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(m){ee(n,n.return,m)}if(n=i,l=n.updateQueue,l!==null){var s=n.stateNode;try{var o=l.shared.hiddenCallbacks;if(o!==null)for(l.shared.hiddenCallbacks=null,l=0;l<o.length;l++)Cr(o[l],s)}catch(m){ee(n,n.return,m)}}t&&u&64&&Hc(i),nl(i,i.return);break;case 27:jc(i);case 26:case 5:Ya(l,i,t),t&&n===null&&u&4&&Qc(i),nl(i,i.return);break;case 12:Ya(l,i,t);break;case 31:Ya(l,i,t),t&&u&4&&Fc(l,i);break;case 13:Ya(l,i,t),t&&u&4&&Xc(l,i);break;case 22:i.memoizedState===null&&Ya(l,i,t),nl(i,i.return);break;case 30:break;default:Ya(l,i,t)}a=a.sibling}}function bs(e,a){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&jn(t))}function Ts(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&jn(e))}function ba(e,a,t,n){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Jc(e,a,t,n),a=a.sibling}function Jc(e,a,t,n){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ba(e,a,t,n),l&2048&&tl(9,a);break;case 1:ba(e,a,t,n);break;case 3:ba(e,a,t,n),l&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&jn(e)));break;case 12:if(l&2048){ba(e,a,t,n),e=a.stateNode;try{var i=a.memoizedProps,u=i.id,s=i.onPostCommit;typeof s=="function"&&s(u,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(o){ee(a,a.return,o)}}else ba(e,a,t,n);break;case 31:ba(e,a,t,n);break;case 13:ba(e,a,t,n);break;case 23:break;case 22:i=a.stateNode,u=a.alternate,a.memoizedState!==null?i._visibility&2?ba(e,a,t,n):ll(e,a):i._visibility&2?ba(e,a,t,n):(i._visibility|=2,hn(e,a,t,n,(a.subtreeFlags&10256)!==0||!1)),l&2048&&bs(u,a);break;case 24:ba(e,a,t,n),l&2048&&Ts(a.alternate,a);break;default:ba(e,a,t,n)}}function hn(e,a,t,n,l){for(l=l&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var i=e,u=a,s=t,o=n,m=u.flags;switch(u.tag){case 0:case 11:case 15:hn(i,u,s,o,l),tl(8,u);break;case 23:break;case 22:var E=u.stateNode;u.memoizedState!==null?E._visibility&2?hn(i,u,s,o,l):ll(i,u):(E._visibility|=2,hn(i,u,s,o,l)),l&&m&2048&&bs(u.alternate,u);break;case 24:hn(i,u,s,o,l),l&&m&2048&&Ts(u.alternate,u);break;default:hn(i,u,s,o,l)}a=a.sibling}}function ll(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var t=e,n=a,l=n.flags;switch(n.tag){case 22:ll(t,n),l&2048&&bs(n.alternate,n);break;case 24:ll(t,n),l&2048&&Ts(n.alternate,n);break;default:ll(t,n)}a=a.sibling}}var il=8192;function pn(e,a,t){if(e.subtreeFlags&il)for(e=e.child;e!==null;)$c(e,a,t),e=e.sibling}function $c(e,a,t){switch(e.tag){case 26:pn(e,a,t),e.flags&il&&e.memoizedState!==null&&Ih(t,Sa,e.memoizedState,e.memoizedProps);break;case 5:pn(e,a,t);break;case 3:case 4:var n=Sa;Sa=Ni(e.stateNode.containerInfo),pn(e,a,t),Sa=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=il,il=16777216,pn(e,a,t),il=n):pn(e,a,t));break;default:pn(e,a,t)}}function ed(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function ul(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var n=a[t];Re=n,td(n,e)}ed(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ad(e),e=e.sibling}function ad(e){switch(e.tag){case 0:case 11:case 15:ul(e),e.flags&2048&&st(9,e,e.return);break;case 3:ul(e);break;case 12:ul(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,mi(e)):ul(e);break;default:ul(e)}}function mi(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var n=a[t];Re=n,td(n,e)}ed(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:st(8,a,a.return),mi(a);break;case 22:t=a.stateNode,t._visibility&2&&(t._visibility&=-3,mi(a));break;default:mi(a)}e=e.sibling}}function td(e,a){for(;Re!==null;){var t=Re;switch(t.tag){case 0:case 11:case 15:st(8,t,a);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var n=t.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:jn(t.memoizedState.cache)}if(n=t.child,n!==null)n.return=t,Re=n;else e:for(t=e;Re!==null;){n=Re;var l=n.sibling,i=n.return;if(Kc(n),n===t){Re=null;break e}if(l!==null){l.return=i,Re=l;break e}Re=i}}}var Zm={getCacheForType:function(e){var a=Oe(ge),t=a.data.get(e);return t===void 0&&(t=e(),a.data.set(e,t)),t},cacheSignal:function(){return Oe(ge).controller.signal}},Jm=typeof WeakMap=="function"?WeakMap:Map,X=0,ue=null,q=null,G=0,$=0,na=null,ot=!1,yn=!1,vs=!1,Pa=0,me=0,rt=0,Ht=0,Ds=0,la=0,En=0,sl=null,Ke=null,Rs=!1,hi=0,nd=0,pi=1/0,yi=null,ct=null,ve=0,dt=null,gn=null,Ka=0,As=0,Ns=null,ld=null,ol=0,Os=null;function ia(){return(X&2)!==0&&G!==0?G&-G:g.T!==null?xs():bo()}function id(){if(la===0)if((G&536870912)===0||P){var e=Rl;Rl<<=1,(Rl&3932160)===0&&(Rl=262144),la=e}else la=536870912;return e=aa.current,e!==null&&(e.flags|=32),la}function Ve(e,a,t){(e===ue&&($===2||$===9)||e.cancelPendingCommit!==null)&&(Sn(e,0),ft(e,G,la,!1)),Mn(e,t),((X&2)===0||e!==ue)&&(e===ue&&((X&2)===0&&(Ht|=t),me===4&&ft(e,G,la,!1)),Oa(e))}function ud(e,a,t){if((X&6)!==0)throw Error(p(327));var n=!t&&(a&127)===0&&(a&e.expiredLanes)===0||Cn(e,a),l=n?ah(e,a):Ms(e,a,!0),i=n;do{if(l===0){yn&&!n&&ft(e,a,0,!1);break}else{if(t=e.current.alternate,i&&!$m(t)){l=Ms(e,a,!1),i=!1;continue}if(l===2){if(i=a,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){a=u;e:{var s=e;l=sl;var o=s.current.memoizedState.isDehydrated;if(o&&(Sn(s,u).flags|=256),u=Ms(s,u,!1),u!==2){if(vs&&!o){s.errorRecoveryDisabledLanes|=i,Ht|=i,l=4;break e}i=Ke,Ke=l,i!==null&&(Ke===null?Ke=i:Ke.push.apply(Ke,i))}l=u}if(i=!1,l!==2)continue}}if(l===1){Sn(e,0),ft(e,a,0,!0);break}e:{switch(n=e,i=l,i){case 0:case 1:throw Error(p(345));case 4:if((a&4194048)!==a)break;case 6:ft(n,a,la,!ot);break e;case 2:Ke=null;break;case 3:case 5:break;default:throw Error(p(329))}if((a&62914560)===a&&(l=hi+300-We(),10<l)){if(ft(n,a,la,!ot),Nl(n,0,!0)!==0)break e;Ka=a,n.timeoutHandle=kd(sd.bind(null,n,t,Ke,yi,Rs,a,la,Ht,En,ot,i,"Throttled",-0,0),l);break e}sd(n,t,Ke,yi,Rs,a,la,Ht,En,ot,i,null,-0,0)}}break}while(!0);Oa(e)}function sd(e,a,t,n,l,i,u,s,o,m,E,b,h,y){if(e.timeoutHandle=-1,b=a.subtreeFlags,b&8192||(b&16785408)===16785408){b={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ua},$c(a,i,b);var A=(i&62914560)===i?hi-We():(i&4194048)===i?nd-We():0;if(A=kh(b,A),A!==null){Ka=i,e.cancelPendingCommit=A(pd.bind(null,e,a,i,t,n,l,u,s,o,E,b,null,h,y)),ft(e,i,u,!m);return}}pd(e,a,i,t,n,l,u,s,o)}function $m(e){for(var a=e;;){var t=a.tag;if((t===0||t===11||t===15)&&a.flags&16384&&(t=a.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var n=0;n<t.length;n++){var l=t[n],i=l.getSnapshot;l=l.value;try{if(!$e(i(),l))return!1}catch{return!1}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function ft(e,a,t,n){a&=~Ds,a&=~Ht,e.suspendedLanes|=a,e.pingedLanes&=~a,n&&(e.warmLanes|=a),n=e.expirationTimes;for(var l=a;0<l;){var i=31-Je(l),u=1<<i;n[i]=-1,l&=~u}t!==0&&Eo(e,t,a)}function Ei(){return(X&6)===0?(rl(0),!1):!0}function Cs(){if(q!==null){if($===0)var e=q.return;else e=q,Ba=Lt=null,Yu(e),rn=null,Pn=0,e=q;for(;e!==null;)zc(e.alternate,e),e=e.return;q=null}}function Sn(e,a){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,Sh(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),Ka=0,Cs(),ue=e,q=t=xa(e.current,null),G=a,$=0,na=null,ot=!1,yn=Cn(e,a),vs=!1,En=la=Ds=Ht=rt=me=0,Ke=sl=null,Rs=!1,(a&8)!==0&&(a|=a&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=a;0<n;){var l=31-Je(n),i=1<<l;a|=e[l],n&=~i}return Pa=a,zl(),t}function od(e,a){k=null,g.H=$n,a===on||a===Kl?(a=Rr(),$=3):a===wu?(a=Rr(),$=4):$=a===us?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,na=a,q===null&&(me=1,ui(e,ca(a,e.current)))}function rd(){var e=aa.current;return e===null?!0:(G&4194048)===G?ha===null:(G&62914560)===G||(G&536870912)!==0?e===ha:!1}function cd(){var e=g.H;return g.H=$n,e===null?$n:e}function dd(){var e=g.A;return g.A=Zm,e}function gi(){me=4,ot||(G&4194048)!==G&&aa.current!==null||(yn=!0),(rt&134217727)===0&&(Ht&134217727)===0||ue===null||ft(ue,G,la,!1)}function Ms(e,a,t){var n=X;X|=2;var l=cd(),i=dd();(ue!==e||G!==a)&&(yi=null,Sn(e,a)),a=!1;var u=me;e:do try{if($!==0&&q!==null){var s=q,o=na;switch($){case 8:Cs(),u=6;break e;case 3:case 2:case 9:case 6:aa.current===null&&(a=!0);var m=$;if($=0,na=null,bn(e,s,o,m),t&&yn){u=0;break e}break;default:m=$,$=0,na=null,bn(e,s,o,m)}}eh(),u=me;break}catch(E){od(e,E)}while(!0);return a&&e.shellSuspendCounter++,Ba=Lt=null,X=n,g.H=l,g.A=i,q===null&&(ue=null,G=0,zl()),u}function eh(){for(;q!==null;)fd(q)}function ah(e,a){var t=X;X|=2;var n=cd(),l=dd();ue!==e||G!==a?(yi=null,pi=We()+500,Sn(e,a)):yn=Cn(e,a);e:do try{if($!==0&&q!==null){a=q;var i=na;a:switch($){case 1:$=0,na=null,bn(e,a,i,1);break;case 2:case 9:if(vr(i)){$=0,na=null,md(a);break}a=function(){$!==2&&$!==9||ue!==e||($=7),Oa(e)},i.then(a,a);break e;case 3:$=7;break e;case 4:$=5;break e;case 7:vr(i)?($=0,na=null,md(a)):($=0,na=null,bn(e,a,i,7));break;case 5:var u=null;switch(q.tag){case 26:u=q.memoizedState;case 5:case 27:var s=q;if(u?Jd(u):s.stateNode.complete){$=0,na=null;var o=s.sibling;if(o!==null)q=o;else{var m=s.return;m!==null?(q=m,Si(m)):q=null}break a}}$=0,na=null,bn(e,a,i,5);break;case 6:$=0,na=null,bn(e,a,i,6);break;case 8:Cs(),me=6;break e;default:throw Error(p(462))}}th();break}catch(E){od(e,E)}while(!0);return Ba=Lt=null,g.H=n,g.A=l,X=t,q!==null?0:(ue=null,G=0,zl(),me)}function th(){for(;q!==null&&!Af();)fd(q)}function fd(e){var a=Ic(e.alternate,e,Pa);e.memoizedProps=e.pendingProps,a===null?Si(e):q=a}function md(e){var a=e,t=a.alternate;switch(a.tag){case 15:case 0:a=Lc(t,a,a.pendingProps,a.type,void 0,G);break;case 11:a=Lc(t,a,a.pendingProps,a.type.render,a.ref,G);break;case 5:Yu(a);default:zc(t,a),a=q=dr(a,Pa),a=Ic(t,a,Pa)}e.memoizedProps=e.pendingProps,a===null?Si(e):q=a}function bn(e,a,t,n){Ba=Lt=null,Yu(a),rn=null,Pn=0;var l=a.return;try{if(Ym(e,l,a,t,G)){me=1,ui(e,ca(t,e.current)),q=null;return}}catch(i){if(l!==null)throw q=l,i;me=1,ui(e,ca(t,e.current)),q=null;return}a.flags&32768?(P||n===1?e=!0:yn||(G&536870912)!==0?e=!1:(ot=e=!0,(n===2||n===9||n===3||n===6)&&(n=aa.current,n!==null&&n.tag===13&&(n.flags|=16384))),hd(a,e)):Si(a)}function Si(e){var a=e;do{if((a.flags&32768)!==0){hd(a,ot);return}e=a.return;var t=Vm(a.alternate,a,Pa);if(t!==null){q=t;return}if(a=a.sibling,a!==null){q=a;return}q=a=e}while(a!==null);me===0&&(me=5)}function hd(e,a){do{var t=Fm(e.alternate,e);if(t!==null){t.flags&=32767,q=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&(e=e.sibling,e!==null)){q=e;return}q=e=t}while(e!==null);me=6,q=null}function pd(e,a,t,n,l,i,u,s,o){e.cancelPendingCommit=null;do bi();while(ve!==0);if((X&6)!==0)throw Error(p(327));if(a!==null){if(a===e.current)throw Error(p(177));if(i=a.lanes|a.childLanes,i|=Eu,Bf(e,t,i,u,s,o),e===ue&&(q=ue=null,G=0),gn=a,dt=e,Ka=t,As=i,Ns=l,ld=n,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,uh(vl,function(){return bd(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||n){n=g.T,g.T=null,l=D.p,D.p=2,u=X,X|=4;try{Xm(e,a,t)}finally{X=u,D.p=l,g.T=n}}ve=1,yd(),Ed(),gd()}}function yd(){if(ve===1){ve=0;var e=dt,a=gn,t=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||t){t=g.T,g.T=null;var n=D.p;D.p=2;var l=X;X|=4;try{Wc(a,e);var i=Qs,u=tr(e.containerInfo),s=i.focusedElem,o=i.selectionRange;if(u!==s&&s&&s.ownerDocument&&ar(s.ownerDocument.documentElement,s)){if(o!==null&&fu(s)){var m=o.start,E=o.end;if(E===void 0&&(E=m),"selectionStart"in s)s.selectionStart=m,s.selectionEnd=Math.min(E,s.value.length);else{var b=s.ownerDocument||document,h=b&&b.defaultView||window;if(h.getSelection){var y=h.getSelection(),A=s.textContent.length,U=Math.min(o.start,A),le=o.end===void 0?U:Math.min(o.end,A);!y.extend&&U>le&&(u=le,le=U,U=u);var d=er(s,U),r=er(s,le);if(d&&r&&(y.rangeCount!==1||y.anchorNode!==d.node||y.anchorOffset!==d.offset||y.focusNode!==r.node||y.focusOffset!==r.offset)){var f=b.createRange();f.setStart(d.node,d.offset),y.removeAllRanges(),U>le?(y.addRange(f),y.extend(r.node,r.offset)):(f.setEnd(r.node,r.offset),y.addRange(f))}}}}for(b=[],y=s;y=y.parentNode;)y.nodeType===1&&b.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<b.length;s++){var S=b[s];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}wi=!!qs,Qs=qs=null}finally{X=l,D.p=n,g.T=t}}e.current=a,ve=2}}function Ed(){if(ve===2){ve=0;var e=dt,a=gn,t=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||t){t=g.T,g.T=null;var n=D.p;D.p=2;var l=X;X|=4;try{Pc(e,a.alternate,a)}finally{X=l,D.p=n,g.T=t}}ve=3}}function gd(){if(ve===4||ve===3){ve=0,Nf();var e=dt,a=gn,t=Ka,n=ld;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?ve=5:(ve=0,gn=dt=null,Sd(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(ct=null),Vi(t),a=a.stateNode,Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(On,a,void 0,(a.current.flags&128)===128)}catch{}if(n!==null){a=g.T,l=D.p,D.p=2,g.T=null;try{for(var i=e.onRecoverableError,u=0;u<n.length;u++){var s=n[u];i(s.value,{componentStack:s.stack})}}finally{g.T=a,D.p=l}}(Ka&3)!==0&&bi(),Oa(e),l=e.pendingLanes,(t&261930)!==0&&(l&42)!==0?e===Os?ol++:(ol=0,Os=e):ol=0,rl(0)}}function Sd(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,jn(a)))}function bi(){return yd(),Ed(),gd(),bd()}function bd(){if(ve!==5)return!1;var e=dt,a=As;As=0;var t=Vi(Ka),n=g.T,l=D.p;try{D.p=32>t?32:t,g.T=null,t=Ns,Ns=null;var i=dt,u=Ka;if(ve=0,gn=dt=null,Ka=0,(X&6)!==0)throw Error(p(331));var s=X;if(X|=4,ad(i.current),Jc(i,i.current,u,t),X=s,rl(0,!1),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(On,i)}catch{}return!0}finally{D.p=l,g.T=n,Sd(e,a)}}function Td(e,a,t){a=ca(t,a),a=is(e.stateNode,a,2),e=lt(e,a,2),e!==null&&(Mn(e,2),Oa(e))}function ee(e,a,t){if(e.tag===3)Td(e,e,t);else for(;a!==null;){if(a.tag===3){Td(a,e,t);break}else if(a.tag===1){var n=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ct===null||!ct.has(n))){e=ca(t,e),t=vc(2),n=lt(a,t,2),n!==null&&(Dc(t,n,a,e),Mn(n,2),Oa(n));break}}a=a.return}}function Ls(e,a,t){var n=e.pingCache;if(n===null){n=e.pingCache=new Jm;var l=new Set;n.set(a,l)}else l=n.get(a),l===void 0&&(l=new Set,n.set(a,l));l.has(t)||(vs=!0,l.add(t),e=nh.bind(null,e,a,t),a.then(e,e))}function nh(e,a,t){var n=e.pingCache;n!==null&&n.delete(a),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,ue===e&&(G&t)===t&&(me===4||me===3&&(G&62914560)===G&&300>We()-hi?(X&2)===0&&Sn(e,0):Ds|=t,En===G&&(En=0)),Oa(e)}function vd(e,a){a===0&&(a=yo()),e=Ot(e,a),e!==null&&(Mn(e,a),Oa(e))}function lh(e){var a=e.memoizedState,t=0;a!==null&&(t=a.retryLane),vd(e,t)}function ih(e,a){var t=0;switch(e.tag){case 31:case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(p(314))}n!==null&&n.delete(a),vd(e,t)}function uh(e,a){return ji(e,a)}var Ti=null,Tn=null,Us=!1,vi=!1,ws=!1,mt=0;function Oa(e){e!==Tn&&e.next===null&&(Tn===null?Ti=Tn=e:Tn=Tn.next=e),vi=!0,Us||(Us=!0,oh())}function rl(e,a){if(!ws&&vi){ws=!0;do for(var t=!1,n=Ti;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var i=0;else{var u=n.suspendedLanes,s=n.pingedLanes;i=(1<<31-Je(42|e)+1)-1,i&=l&~(u&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(t=!0,Nd(n,i))}else i=G,i=Nl(n,n===ue?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(i&3)===0||Cn(n,i)||(t=!0,Nd(n,i));n=n.next}while(t);ws=!1}}function sh(){Dd()}function Dd(){vi=Us=!1;var e=0;mt!==0&&gh()&&(e=mt);for(var a=We(),t=null,n=Ti;n!==null;){var l=n.next,i=Rd(n,a);i===0?(n.next=null,t===null?Ti=l:t.next=l,l===null&&(Tn=t)):(t=n,(e!==0||(i&3)!==0)&&(vi=!0)),n=l}ve!==0&&ve!==5||rl(e),mt!==0&&(mt=0)}function Rd(e,a){for(var t=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-Je(i),s=1<<u,o=l[u];o===-1?((s&t)===0||(s&n)!==0)&&(l[u]=_f(s,a)):o<=a&&(e.expiredLanes|=s),i&=~s}if(a=ue,t=G,t=Nl(e,e===a?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,t===0||e===a&&($===2||$===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Yi(n),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Cn(e,t)){if(a=t&-t,a===e.callbackPriority)return a;switch(n!==null&&Yi(n),Vi(t)){case 2:case 8:t=ho;break;case 32:t=vl;break;case 268435456:t=po;break;default:t=vl}return n=Ad.bind(null,e),t=ji(t,n),e.callbackPriority=a,e.callbackNode=t,a}return n!==null&&n!==null&&Yi(n),e.callbackPriority=2,e.callbackNode=null,2}function Ad(e,a){if(ve!==0&&ve!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(bi()&&e.callbackNode!==t)return null;var n=G;return n=Nl(e,e===ue?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(ud(e,n,a),Rd(e,We()),e.callbackNode!=null&&e.callbackNode===t?Ad.bind(null,e):null)}function Nd(e,a){if(bi())return null;ud(e,a,!0)}function oh(){bh(function(){(X&6)!==0?ji(mo,sh):Dd()})}function xs(){if(mt===0){var e=un;e===0&&(e=Dl,Dl<<=1,(Dl&261888)===0&&(Dl=256)),mt=e}return mt}function Od(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ll(""+e)}function Cd(e,a){var t=a.ownerDocument.createElement("input");return t.name=a.name,t.value=a.value,e.id&&t.setAttribute("form",e.id),a.parentNode.insertBefore(t,a),e=new FormData(e),t.parentNode.removeChild(t),e}function rh(e,a,t,n,l){if(a==="submit"&&t&&t.stateNode===l){var i=Od((l[Qe]||null).action),u=n.submitter;u&&(a=(a=u[Qe]||null)?Od(a.formAction):u.getAttribute("formAction"),a!==null&&(i=a,u=null));var s=new _l("action","action",null,n,l);e.push({event:s,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(mt!==0){var o=u?Cd(l,u):new FormData(l);$u(t,{pending:!0,data:o,method:l.method,action:i},null,o)}}else typeof i=="function"&&(s.preventDefault(),o=u?Cd(l,u):new FormData(l),$u(t,{pending:!0,data:o,method:l.method,action:i},i,o))},currentTarget:l}]})}}for(var _s=0;_s<yu.length;_s++){var Bs=yu[_s],ch=Bs.toLowerCase(),dh=Bs[0].toUpperCase()+Bs.slice(1);ga(ch,"on"+dh)}ga(ir,"onAnimationEnd"),ga(ur,"onAnimationIteration"),ga(sr,"onAnimationStart"),ga("dblclick","onDoubleClick"),ga("focusin","onFocus"),ga("focusout","onBlur"),ga(Om,"onTransitionRun"),ga(Cm,"onTransitionStart"),ga(Mm,"onTransitionCancel"),ga(or,"onTransitionEnd"),Pt("onMouseEnter",["mouseout","mouseover"]),Pt("onMouseLeave",["mouseout","mouseover"]),Pt("onPointerEnter",["pointerout","pointerover"]),Pt("onPointerLeave",["pointerout","pointerover"]),Dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Dt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cl));function Md(e,a){a=(a&4)!==0;for(var t=0;t<e.length;t++){var n=e[t],l=n.event;n=n.listeners;e:{var i=void 0;if(a)for(var u=n.length-1;0<=u;u--){var s=n[u],o=s.instance,m=s.currentTarget;if(s=s.listener,o!==i&&l.isPropagationStopped())break e;i=s,l.currentTarget=m;try{i(l)}catch(E){kl(E)}l.currentTarget=null,i=o}else for(u=0;u<n.length;u++){if(s=n[u],o=s.instance,m=s.currentTarget,s=s.listener,o!==i&&l.isPropagationStopped())break e;i=s,l.currentTarget=m;try{i(l)}catch(E){kl(E)}l.currentTarget=null,i=o}}}}function Q(e,a){var t=a[Fi];t===void 0&&(t=a[Fi]=new Set);var n=e+"__bubble";t.has(n)||(Ld(a,e,2,!1),t.add(n))}function Is(e,a,t){var n=0;a&&(n|=4),Ld(t,e,n,a)}var Di="_reactListening"+Math.random().toString(36).slice(2);function ks(e){if(!e[Di]){e[Di]=!0,Do.forEach(function(t){t!=="selectionchange"&&(fh.has(t)||Is(t,!1,e),Is(t,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Di]||(a[Di]=!0,Is("selectionchange",!1,a))}}function Ld(e,a,t,n){switch(uf(a)){case 2:var l=qh;break;case 8:l=Qh;break;default:l=Js}t=l.bind(null,a,t,e),l=void 0,!nu||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(a,t,{capture:!0,passive:l}):e.addEventListener(a,t,!0):l!==void 0?e.addEventListener(a,t,{passive:l}):e.addEventListener(a,t,!1)}function zs(e,a,t,n,l){var i=n;if((a&1)===0&&(a&2)===0&&n!==null)e:for(;;){if(n===null)return;var u=n.tag;if(u===3||u===4){var s=n.stateNode.containerInfo;if(s===l)break;if(u===4)for(u=n.return;u!==null;){var o=u.tag;if((o===3||o===4)&&u.stateNode.containerInfo===l)return;u=u.return}for(;s!==null;){if(u=Gt(s),u===null)return;if(o=u.tag,o===5||o===6||o===26||o===27){n=i=u;continue e}s=s.parentNode}}n=n.return}Bo(function(){var m=i,E=au(t),b=[];e:{var h=rr.get(e);if(h!==void 0){var y=_l,A=e;switch(e){case"keypress":if(wl(t)===0)break e;case"keydown":case"keyup":y=im;break;case"focusin":A="focus",y=su;break;case"focusout":A="blur",y=su;break;case"beforeblur":case"afterblur":y=su;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=zo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Vf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=om;break;case ir:case ur:case sr:y=Wf;break;case or:y=cm;break;case"scroll":case"scrollend":y=Pf;break;case"wheel":y=fm;break;case"copy":case"cut":case"paste":y=Jf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=qo;break;case"toggle":case"beforetoggle":y=hm}var U=(a&4)!==0,le=!U&&(e==="scroll"||e==="scrollend"),d=U?h!==null?h+"Capture":null:h;U=[];for(var r=m,f;r!==null;){var S=r;if(f=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||f===null||d===null||(S=wn(r,d),S!=null&&U.push(dl(r,S,f))),le)break;r=r.return}0<U.length&&(h=new y(h,A,null,t,E),b.push({event:h,listeners:U}))}}if((a&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&t!==eu&&(A=t.relatedTarget||t.fromElement)&&(Gt(A)||A[Qt]))break e;if((y||h)&&(h=E.window===E?E:(h=E.ownerDocument)?h.defaultView||h.parentWindow:window,y?(A=t.relatedTarget||t.toElement,y=m,A=A?Gt(A):null,A!==null&&(le=F(A),U=A.tag,A!==le||U!==5&&U!==27&&U!==6)&&(A=null)):(y=null,A=m),y!==A)){if(U=zo,S="onMouseLeave",d="onMouseEnter",r="mouse",(e==="pointerout"||e==="pointerover")&&(U=qo,S="onPointerLeave",d="onPointerEnter",r="pointer"),le=y==null?h:Un(y),f=A==null?h:Un(A),h=new U(S,r+"leave",y,t,E),h.target=le,h.relatedTarget=f,S=null,Gt(E)===m&&(U=new U(d,r+"enter",A,t,E),U.target=f,U.relatedTarget=le,S=U),le=S,y&&A)a:{for(U=mh,d=y,r=A,f=0,S=d;S;S=U(S))f++;S=0;for(var M=r;M;M=U(M))S++;for(;0<f-S;)d=U(d),f--;for(;0<S-f;)r=U(r),S--;for(;f--;){if(d===r||r!==null&&d===r.alternate){U=d;break a}d=U(d),r=U(r)}U=null}else U=null;y!==null&&Ud(b,h,y,U,!1),A!==null&&le!==null&&Ud(b,le,A,U,!0)}}e:{if(h=m?Un(m):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var K=Fo;else if(Ko(h))if(Xo)K=Rm;else{K=vm;var C=Tm}else y=h.nodeName,!y||y.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?m&&$i(m.elementType)&&(K=Fo):K=Dm;if(K&&(K=K(e,m))){Vo(b,K,t,E);break e}C&&C(e,h,m),e==="focusout"&&m&&h.type==="number"&&m.memoizedProps.value!=null&&Ji(h,"number",h.value)}switch(C=m?Un(m):window,e){case"focusin":(Ko(C)||C.contentEditable==="true")&&(Zt=C,mu=m,qn=null);break;case"focusout":qn=mu=Zt=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,nr(b,t,E);break;case"selectionchange":if(Nm)break;case"keydown":case"keyup":nr(b,t,E)}var z;if(ru)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Wt?Yo(e,t)&&(j="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(j="onCompositionStart");j&&(Qo&&t.locale!=="ko"&&(Wt||j!=="onCompositionStart"?j==="onCompositionEnd"&&Wt&&(z=Io()):(Za=E,lu="value"in Za?Za.value:Za.textContent,Wt=!0)),C=Ri(m,j),0<C.length&&(j=new Ho(j,e,null,t,E),b.push({event:j,listeners:C}),z?j.data=z:(z=Po(t),z!==null&&(j.data=z)))),(z=ym?Em(e,t):gm(e,t))&&(j=Ri(m,"onBeforeInput"),0<j.length&&(C=new Ho("onBeforeInput","beforeinput",null,t,E),b.push({event:C,listeners:j}),C.data=z)),rh(b,e,m,t,E)}Md(b,a)})}function dl(e,a,t){return{instance:e,listener:a,currentTarget:t}}function Ri(e,a){for(var t=a+"Capture",n=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=wn(e,t),l!=null&&n.unshift(dl(e,l,i)),l=wn(e,a),l!=null&&n.push(dl(e,l,i))),e.tag===3)return n;e=e.return}return[]}function mh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ud(e,a,t,n,l){for(var i=a._reactName,u=[];t!==null&&t!==n;){var s=t,o=s.alternate,m=s.stateNode;if(s=s.tag,o!==null&&o===n)break;s!==5&&s!==26&&s!==27||m===null||(o=m,l?(m=wn(t,i),m!=null&&u.unshift(dl(t,m,o))):l||(m=wn(t,i),m!=null&&u.push(dl(t,m,o)))),t=t.return}u.length!==0&&e.push({event:a,listeners:u})}var hh=/\r\n?/g,ph=/\u0000|\uFFFD/g;function wd(e){return(typeof e=="string"?e:""+e).replace(hh,`
`).replace(ph,"")}function xd(e,a){return a=wd(a),wd(e)===a}function ne(e,a,t,n,l,i){switch(t){case"children":typeof n=="string"?a==="body"||a==="textarea"&&n===""||Vt(e,n):(typeof n=="number"||typeof n=="bigint")&&a!=="body"&&Vt(e,""+n);break;case"className":Cl(e,"class",n);break;case"tabIndex":Cl(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Cl(e,t,n);break;case"style":xo(e,n,i);break;case"data":if(a!=="object"){Cl(e,"data",n);break}case"src":case"href":if(n===""&&(a!=="a"||t!=="href")){e.removeAttribute(t);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(t);break}n=Ll(""+n),e.setAttribute(t,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(t==="formAction"?(a!=="input"&&ne(e,a,"name",l.name,l,null),ne(e,a,"formEncType",l.formEncType,l,null),ne(e,a,"formMethod",l.formMethod,l,null),ne(e,a,"formTarget",l.formTarget,l,null)):(ne(e,a,"encType",l.encType,l,null),ne(e,a,"method",l.method,l,null),ne(e,a,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(t);break}n=Ll(""+n),e.setAttribute(t,n);break;case"onClick":n!=null&&(e.onclick=Ua);break;case"onScroll":n!=null&&Q("scroll",e);break;case"onScrollEnd":n!=null&&Q("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(p(61));if(t=n.__html,t!=null){if(l.children!=null)throw Error(p(60));e.innerHTML=t}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}t=Ll(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,""+n):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":n===!0?e.setAttribute(t,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,n):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(t,n):e.removeAttribute(t);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(t):e.setAttribute(t,n);break;case"popover":Q("beforetoggle",e),Q("toggle",e),Ol(e,"popover",n);break;case"xlinkActuate":La(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":La(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":La(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":La(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":La(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":La(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":La(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":La(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":La(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Ol(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=jf.get(t)||t,Ol(e,t,n))}}function Hs(e,a,t,n,l,i){switch(t){case"style":xo(e,n,i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(p(61));if(t=n.__html,t!=null){if(l.children!=null)throw Error(p(60));e.innerHTML=t}}break;case"children":typeof n=="string"?Vt(e,n):(typeof n=="number"||typeof n=="bigint")&&Vt(e,""+n);break;case"onScroll":n!=null&&Q("scroll",e);break;case"onScrollEnd":n!=null&&Q("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Ua);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ro.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),a=t.slice(2,l?t.length-7:void 0),i=e[Qe]||null,i=i!=null?i[t]:null,typeof i=="function"&&e.removeEventListener(a,i,l),typeof n=="function")){typeof i!="function"&&i!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(a,n,l);break e}t in e?e[t]=n:n===!0?e.setAttribute(t,""):Ol(e,t,n)}}}function Me(e,a,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Q("error",e),Q("load",e);var n=!1,l=!1,i;for(i in t)if(t.hasOwnProperty(i)){var u=t[i];if(u!=null)switch(i){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(p(137,a));default:ne(e,a,i,u,t,null)}}l&&ne(e,a,"srcSet",t.srcSet,t,null),n&&ne(e,a,"src",t.src,t,null);return;case"input":Q("invalid",e);var s=i=u=l=null,o=null,m=null;for(n in t)if(t.hasOwnProperty(n)){var E=t[n];if(E!=null)switch(n){case"name":l=E;break;case"type":u=E;break;case"checked":o=E;break;case"defaultChecked":m=E;break;case"value":i=E;break;case"defaultValue":s=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(p(137,a));break;default:ne(e,a,n,E,t,null)}}Mo(e,i,s,o,m,u,l,!1);return;case"select":Q("invalid",e),n=u=i=null;for(l in t)if(t.hasOwnProperty(l)&&(s=t[l],s!=null))switch(l){case"value":i=s;break;case"defaultValue":u=s;break;case"multiple":n=s;default:ne(e,a,l,s,t,null)}a=i,t=u,e.multiple=!!n,a!=null?Kt(e,!!n,a,!1):t!=null&&Kt(e,!!n,t,!0);return;case"textarea":Q("invalid",e),i=l=n=null;for(u in t)if(t.hasOwnProperty(u)&&(s=t[u],s!=null))switch(u){case"value":n=s;break;case"defaultValue":l=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(p(91));break;default:ne(e,a,u,s,t,null)}Uo(e,n,l,i);return;case"option":for(o in t)if(t.hasOwnProperty(o)&&(n=t[o],n!=null))switch(o){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:ne(e,a,o,n,t,null)}return;case"dialog":Q("beforetoggle",e),Q("toggle",e),Q("cancel",e),Q("close",e);break;case"iframe":case"object":Q("load",e);break;case"video":case"audio":for(n=0;n<cl.length;n++)Q(cl[n],e);break;case"image":Q("error",e),Q("load",e);break;case"details":Q("toggle",e);break;case"embed":case"source":case"link":Q("error",e),Q("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in t)if(t.hasOwnProperty(m)&&(n=t[m],n!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(p(137,a));default:ne(e,a,m,n,t,null)}return;default:if($i(a)){for(E in t)t.hasOwnProperty(E)&&(n=t[E],n!==void 0&&Hs(e,a,E,n,t,void 0));return}}for(s in t)t.hasOwnProperty(s)&&(n=t[s],n!=null&&ne(e,a,s,n,t,null))}function yh(e,a,t,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,u=null,s=null,o=null,m=null,E=null;for(y in t){var b=t[y];if(t.hasOwnProperty(y)&&b!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":o=b;default:n.hasOwnProperty(y)||ne(e,a,y,null,n,b)}}for(var h in n){var y=n[h];if(b=t[h],n.hasOwnProperty(h)&&(y!=null||b!=null))switch(h){case"type":i=y;break;case"name":l=y;break;case"checked":m=y;break;case"defaultChecked":E=y;break;case"value":u=y;break;case"defaultValue":s=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(p(137,a));break;default:y!==b&&ne(e,a,h,y,n,b)}}Zi(e,u,s,o,m,E,i,l);return;case"select":y=u=s=h=null;for(i in t)if(o=t[i],t.hasOwnProperty(i)&&o!=null)switch(i){case"value":break;case"multiple":y=o;default:n.hasOwnProperty(i)||ne(e,a,i,null,n,o)}for(l in n)if(i=n[l],o=t[l],n.hasOwnProperty(l)&&(i!=null||o!=null))switch(l){case"value":h=i;break;case"defaultValue":s=i;break;case"multiple":u=i;default:i!==o&&ne(e,a,l,i,n,o)}a=s,t=u,n=y,h!=null?Kt(e,!!t,h,!1):!!n!=!!t&&(a!=null?Kt(e,!!t,a,!0):Kt(e,!!t,t?[]:"",!1));return;case"textarea":y=h=null;for(s in t)if(l=t[s],t.hasOwnProperty(s)&&l!=null&&!n.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:ne(e,a,s,null,n,l)}for(u in n)if(l=n[u],i=t[u],n.hasOwnProperty(u)&&(l!=null||i!=null))switch(u){case"value":h=l;break;case"defaultValue":y=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(p(91));break;default:l!==i&&ne(e,a,u,l,n,i)}Lo(e,h,y);return;case"option":for(var A in t)if(h=t[A],t.hasOwnProperty(A)&&h!=null&&!n.hasOwnProperty(A))switch(A){case"selected":e.selected=!1;break;default:ne(e,a,A,null,n,h)}for(o in n)if(h=n[o],y=t[o],n.hasOwnProperty(o)&&h!==y&&(h!=null||y!=null))switch(o){case"selected":e.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:ne(e,a,o,h,n,y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var U in t)h=t[U],t.hasOwnProperty(U)&&h!=null&&!n.hasOwnProperty(U)&&ne(e,a,U,null,n,h);for(m in n)if(h=n[m],y=t[m],n.hasOwnProperty(m)&&h!==y&&(h!=null||y!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(p(137,a));break;default:ne(e,a,m,h,n,y)}return;default:if($i(a)){for(var le in t)h=t[le],t.hasOwnProperty(le)&&h!==void 0&&!n.hasOwnProperty(le)&&Hs(e,a,le,void 0,n,h);for(E in n)h=n[E],y=t[E],!n.hasOwnProperty(E)||h===y||h===void 0&&y===void 0||Hs(e,a,E,h,n,y);return}}for(var d in t)h=t[d],t.hasOwnProperty(d)&&h!=null&&!n.hasOwnProperty(d)&&ne(e,a,d,null,n,h);for(b in n)h=n[b],y=t[b],!n.hasOwnProperty(b)||h===y||h==null&&y==null||ne(e,a,b,h,n,y)}function _d(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Eh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,t=performance.getEntriesByType("resource"),n=0;n<t.length;n++){var l=t[n],i=l.transferSize,u=l.initiatorType,s=l.duration;if(i&&s&&_d(u)){for(u=0,s=l.responseEnd,n+=1;n<t.length;n++){var o=t[n],m=o.startTime;if(m>s)break;var E=o.transferSize,b=o.initiatorType;E&&_d(b)&&(o=o.responseEnd,u+=E*(o<s?1:(s-m)/(o-m)))}if(--n,a+=8*(i+u)/(l.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var qs=null,Qs=null;function Ai(e){return e.nodeType===9?e:e.ownerDocument}function Bd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Id(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function Gs(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var js=null;function gh(){var e=window.event;return e&&e.type==="popstate"?e===js?!1:(js=e,!0):(js=null,!1)}var kd=typeof setTimeout=="function"?setTimeout:void 0,Sh=typeof clearTimeout=="function"?clearTimeout:void 0,zd=typeof Promise=="function"?Promise:void 0,bh=typeof queueMicrotask=="function"?queueMicrotask:typeof zd<"u"?function(e){return zd.resolve(null).then(e).catch(Th)}:kd;function Th(e){setTimeout(function(){throw e})}function ht(e){return e==="head"}function Hd(e,a){var t=a,n=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"||t==="/&"){if(n===0){e.removeChild(l),An(a);return}n--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")n++;else if(t==="html")fl(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,fl(t);for(var i=t.firstChild;i;){var u=i.nextSibling,s=i.nodeName;i[Ln]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||t.removeChild(i),i=u}}else t==="body"&&fl(e.ownerDocument.body);t=l}while(t);An(a)}function qd(e,a){var t=e;e=0;do{var n=t.nextSibling;if(t.nodeType===1?a?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(a?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),n&&n.nodeType===8)if(t=n.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=n}while(t)}function Ys(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var t=a;switch(a=a.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Ys(t),Xi(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function vh(e,a,t,n){for(;e.nodeType===1;){var l=t;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Ln])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=pa(e.nextSibling),e===null)break}return null}function Dh(e,a,t){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=pa(e.nextSibling),e===null))return null;return e}function Qd(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=pa(e.nextSibling),e===null))return null;return e}function Ps(e){return e.data==="$?"||e.data==="$~"}function Ks(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Rh(e,a){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||t.readyState!=="loading")a();else{var n=function(){a(),t.removeEventListener("DOMContentLoaded",n)};t.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function pa(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var Vs=null;function Gd(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(a===0)return pa(e.nextSibling);a--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||a++}e=e.nextSibling}return null}function jd(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(a===0)return e;a--}else t!=="/$"&&t!=="/&"||a++}e=e.previousSibling}return null}function Yd(e,a,t){switch(a=Ai(t),e){case"html":if(e=a.documentElement,!e)throw Error(p(452));return e;case"head":if(e=a.head,!e)throw Error(p(453));return e;case"body":if(e=a.body,!e)throw Error(p(454));return e;default:throw Error(p(451))}}function fl(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Xi(e)}var ya=new Map,Pd=new Set;function Ni(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Va=D.d;D.d={f:Ah,r:Nh,D:Oh,C:Ch,L:Mh,m:Lh,X:wh,S:Uh,M:xh};function Ah(){var e=Va.f(),a=Ei();return e||a}function Nh(e){var a=jt(e);a!==null&&a.tag===5&&a.type==="form"?oc(a):Va.r(e)}var vn=typeof document>"u"?null:document;function Kd(e,a,t){var n=vn;if(n&&typeof a=="string"&&a){var l=oa(a);l='link[rel="'+e+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),Pd.has(l)||(Pd.add(l),e={rel:e,crossOrigin:t,href:a},n.querySelector(l)===null&&(a=n.createElement("link"),Me(a,"link",e),De(a),n.head.appendChild(a)))}}function Oh(e){Va.D(e),Kd("dns-prefetch",e,null)}function Ch(e,a){Va.C(e,a),Kd("preconnect",e,a)}function Mh(e,a,t){Va.L(e,a,t);var n=vn;if(n&&e&&a){var l='link[rel="preload"][as="'+oa(a)+'"]';a==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+oa(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+oa(t.imageSizes)+'"]')):l+='[href="'+oa(e)+'"]';var i=l;switch(a){case"style":i=Dn(e);break;case"script":i=Rn(e)}ya.has(i)||(e=x({rel:"preload",href:a==="image"&&t&&t.imageSrcSet?void 0:e,as:a},t),ya.set(i,e),n.querySelector(l)!==null||a==="style"&&n.querySelector(ml(i))||a==="script"&&n.querySelector(hl(i))||(a=n.createElement("link"),Me(a,"link",e),De(a),n.head.appendChild(a)))}}function Lh(e,a){Va.m(e,a);var t=vn;if(t&&e){var n=a&&typeof a.as=="string"?a.as:"script",l='link[rel="modulepreload"][as="'+oa(n)+'"][href="'+oa(e)+'"]',i=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Rn(e)}if(!ya.has(i)&&(e=x({rel:"modulepreload",href:e},a),ya.set(i,e),t.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(hl(i)))return}n=t.createElement("link"),Me(n,"link",e),De(n),t.head.appendChild(n)}}}function Uh(e,a,t){Va.S(e,a,t);var n=vn;if(n&&e){var l=Yt(n).hoistableStyles,i=Dn(e);a=a||"default";var u=l.get(i);if(!u){var s={loading:0,preload:null};if(u=n.querySelector(ml(i)))s.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":a},t),(t=ya.get(i))&&Fs(e,t);var o=u=n.createElement("link");De(o),Me(o,"link",e),o._p=new Promise(function(m,E){o.onload=m,o.onerror=E}),o.addEventListener("load",function(){s.loading|=1}),o.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Oi(u,a,n)}u={type:"stylesheet",instance:u,count:1,state:s},l.set(i,u)}}}function wh(e,a){Va.X(e,a);var t=vn;if(t&&e){var n=Yt(t).hoistableScripts,l=Rn(e),i=n.get(l);i||(i=t.querySelector(hl(l)),i||(e=x({src:e,async:!0},a),(a=ya.get(l))&&Xs(e,a),i=t.createElement("script"),De(i),Me(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function xh(e,a){Va.M(e,a);var t=vn;if(t&&e){var n=Yt(t).hoistableScripts,l=Rn(e),i=n.get(l);i||(i=t.querySelector(hl(l)),i||(e=x({src:e,async:!0,type:"module"},a),(a=ya.get(l))&&Xs(e,a),i=t.createElement("script"),De(i),Me(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function Vd(e,a,t,n){var l=(l=H.current)?Ni(l):null;if(!l)throw Error(p(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(a=Dn(t.href),t=Yt(l).hoistableStyles,n=t.get(a),n||(n={type:"style",instance:null,count:0,state:null},t.set(a,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Dn(t.href);var i=Yt(l).hoistableStyles,u=i.get(e);if(u||(l=l.ownerDocument||l,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=l.querySelector(ml(e)))&&!i._p&&(u.instance=i,u.state.loading=5),ya.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},ya.set(e,t),i||_h(l,e,t,u.state))),a&&n===null)throw Error(p(528,""));return u}if(a&&n!==null)throw Error(p(529,""));return null;case"script":return a=t.async,t=t.src,typeof t=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Rn(t),t=Yt(l).hoistableScripts,n=t.get(a),n||(n={type:"script",instance:null,count:0,state:null},t.set(a,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(p(444,e))}}function Dn(e){return'href="'+oa(e)+'"'}function ml(e){return'link[rel="stylesheet"]['+e+"]"}function Fd(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function _h(e,a,t,n){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?n.loading=1:(a=e.createElement("link"),n.preload=a,a.addEventListener("load",function(){return n.loading|=1}),a.addEventListener("error",function(){return n.loading|=2}),Me(a,"link",t),De(a),e.head.appendChild(a))}function Rn(e){return'[src="'+oa(e)+'"]'}function hl(e){return"script[async]"+e}function Xd(e,a,t){if(a.count++,a.instance===null)switch(a.type){case"style":var n=e.querySelector('style[data-href~="'+oa(t.href)+'"]');if(n)return a.instance=n,De(n),n;var l=x({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),De(n),Me(n,"style",l),Oi(n,t.precedence,e),a.instance=n;case"stylesheet":l=Dn(t.href);var i=e.querySelector(ml(l));if(i)return a.state.loading|=4,a.instance=i,De(i),i;n=Fd(t),(l=ya.get(l))&&Fs(n,l),i=(e.ownerDocument||e).createElement("link"),De(i);var u=i;return u._p=new Promise(function(s,o){u.onload=s,u.onerror=o}),Me(i,"link",n),a.state.loading|=4,Oi(i,t.precedence,e),a.instance=i;case"script":return i=Rn(t.src),(l=e.querySelector(hl(i)))?(a.instance=l,De(l),l):(n=t,(l=ya.get(i))&&(n=x({},t),Xs(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),De(l),Me(l,"link",n),e.head.appendChild(l),a.instance=l);case"void":return null;default:throw Error(p(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(n=a.instance,a.state.loading|=4,Oi(n,t.precedence,e));return a.instance}function Oi(e,a,t){for(var n=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,i=l,u=0;u<n.length;u++){var s=n[u];if(s.dataset.precedence===a)i=s;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(a=t.nodeType===9?t.head:t,a.insertBefore(e,a.firstChild))}function Fs(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function Xs(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var Ci=null;function Wd(e,a,t){if(Ci===null){var n=new Map,l=Ci=new Map;l.set(t,n)}else l=Ci,n=l.get(t),n||(n=new Map,l.set(t,n));if(n.has(e))return n;for(n.set(e,null),t=t.getElementsByTagName(e),l=0;l<t.length;l++){var i=t[l];if(!(i[Ln]||i[Ae]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(a)||"";u=e+u;var s=n.get(u);s?s.push(i):n.set(u,[i])}}return n}function Zd(e,a,t){e=e.ownerDocument||e,e.head.insertBefore(t,a==="title"?e.querySelector("head > title"):null)}function Bh(e,a,t){if(t===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Jd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Ih(e,a,t,n){if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Dn(n.href),i=a.querySelector(ml(l));if(i){a=i._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=Mi.bind(e),a.then(e,e)),t.state.loading|=4,t.instance=i,De(i);return}i=a.ownerDocument||a,n=Fd(n),(l=ya.get(l))&&Fs(n,l),i=i.createElement("link"),De(i);var u=i;u._p=new Promise(function(s,o){u.onload=s,u.onerror=o}),Me(i,"link",n),t.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,a),(a=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=Mi.bind(e),a.addEventListener("load",t),a.addEventListener("error",t))}}var Ws=0;function kh(e,a){return e.stylesheets&&e.count===0&&Ui(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var n=setTimeout(function(){if(e.stylesheets&&Ui(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+a);0<e.imgBytes&&Ws===0&&(Ws=62500*Eh());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ui(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Ws?50:800)+a);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(l)}}:null}function Mi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ui(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Li=null;function Ui(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Li=new Map,a.forEach(zh,e),Li=null,Mi.call(e))}function zh(e,a){if(!(a.state.loading&4)){var t=Li.get(e);if(t)var n=t.get(null);else{t=new Map,Li.set(e,t);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var u=l[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(t.set(u.dataset.precedence,u),n=u)}n&&t.set(null,n)}l=a.instance,u=l.getAttribute("data-precedence"),i=t.get(u)||n,i===n&&t.set(null,l),t.set(u,l),this.count++,n=Mi.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),a.state.loading|=4}}var pl={$$typeof:Le,Provider:null,Consumer:null,_currentValue:_,_currentValue2:_,_threadCount:0};function Hh(e,a,t,n,l,i,u,s,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Pi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pi(0),this.hiddenUpdates=Pi(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function $d(e,a,t,n,l,i,u,s,o,m,E,b){return e=new Hh(e,a,t,u,o,m,E,b,s),a=1,i===!0&&(a|=24),i=ea(3,null,null,a),e.current=i,i.stateNode=e,a=Mu(),a.refCount++,e.pooledCache=a,a.refCount++,i.memoizedState={element:n,isDehydrated:t,cache:a},xu(i),e}function ef(e){return e?(e=en,e):en}function af(e,a,t,n,l,i){l=ef(l),n.context===null?n.context=l:n.pendingContext=l,n=nt(a),n.payload={element:t},i=i===void 0?null:i,i!==null&&(n.callback=i),t=lt(e,n,a),t!==null&&(Ve(t,e,a),Vn(t,e,a))}function tf(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<a?t:a}}function Zs(e,a){tf(e,a),(e=e.alternate)&&tf(e,a)}function nf(e){if(e.tag===13||e.tag===31){var a=Ot(e,67108864);a!==null&&Ve(a,e,67108864),Zs(e,67108864)}}function lf(e){if(e.tag===13||e.tag===31){var a=ia();a=Ki(a);var t=Ot(e,a);t!==null&&Ve(t,e,a),Zs(e,a)}}var wi=!0;function qh(e,a,t,n){var l=g.T;g.T=null;var i=D.p;try{D.p=2,Js(e,a,t,n)}finally{D.p=i,g.T=l}}function Qh(e,a,t,n){var l=g.T;g.T=null;var i=D.p;try{D.p=8,Js(e,a,t,n)}finally{D.p=i,g.T=l}}function Js(e,a,t,n){if(wi){var l=$s(n);if(l===null)zs(e,a,n,xi,t),sf(e,n);else if(jh(l,e,a,t,n))n.stopPropagation();else if(sf(e,n),a&4&&-1<Gh.indexOf(e)){for(;l!==null;){var i=jt(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=vt(i.pendingLanes);if(u!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;u;){var o=1<<31-Je(u);s.entanglements[1]|=o,u&=~o}Oa(i),(X&6)===0&&(pi=We()+500,rl(0))}}break;case 31:case 13:s=Ot(i,2),s!==null&&Ve(s,i,2),Ei(),Zs(i,2)}if(i=$s(n),i===null&&zs(e,a,n,xi,t),i===l)break;l=i}l!==null&&n.stopPropagation()}else zs(e,a,n,null,t)}}function $s(e){return e=au(e),eo(e)}var xi=null;function eo(e){if(xi=null,e=Gt(e),e!==null){var a=F(e);if(a===null)e=null;else{var t=a.tag;if(t===13){if(e=he(a),e!==null)return e;e=null}else if(t===31){if(e=we(a),e!==null)return e;e=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return xi=e,null}function uf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Of()){case mo:return 2;case ho:return 8;case vl:case Cf:return 32;case po:return 268435456;default:return 32}default:return 32}}var ao=!1,pt=null,yt=null,Et=null,yl=new Map,El=new Map,gt=[],Gh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sf(e,a){switch(e){case"focusin":case"focusout":pt=null;break;case"dragenter":case"dragleave":yt=null;break;case"mouseover":case"mouseout":Et=null;break;case"pointerover":case"pointerout":yl.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":El.delete(a.pointerId)}}function gl(e,a,t,n,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:a,domEventName:t,eventSystemFlags:n,nativeEvent:i,targetContainers:[l]},a!==null&&(a=jt(a),a!==null&&nf(a)),e):(e.eventSystemFlags|=n,a=e.targetContainers,l!==null&&a.indexOf(l)===-1&&a.push(l),e)}function jh(e,a,t,n,l){switch(a){case"focusin":return pt=gl(pt,e,a,t,n,l),!0;case"dragenter":return yt=gl(yt,e,a,t,n,l),!0;case"mouseover":return Et=gl(Et,e,a,t,n,l),!0;case"pointerover":var i=l.pointerId;return yl.set(i,gl(yl.get(i)||null,e,a,t,n,l)),!0;case"gotpointercapture":return i=l.pointerId,El.set(i,gl(El.get(i)||null,e,a,t,n,l)),!0}return!1}function of(e){var a=Gt(e.target);if(a!==null){var t=F(a);if(t!==null){if(a=t.tag,a===13){if(a=he(t),a!==null){e.blockedOn=a,To(e.priority,function(){lf(t)});return}}else if(a===31){if(a=we(t),a!==null){e.blockedOn=a,To(e.priority,function(){lf(t)});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _i(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var t=$s(e.nativeEvent);if(t===null){t=e.nativeEvent;var n=new t.constructor(t.type,t);eu=n,t.target.dispatchEvent(n),eu=null}else return a=jt(t),a!==null&&nf(a),e.blockedOn=t,!1;a.shift()}return!0}function rf(e,a,t){_i(e)&&t.delete(a)}function Yh(){ao=!1,pt!==null&&_i(pt)&&(pt=null),yt!==null&&_i(yt)&&(yt=null),Et!==null&&_i(Et)&&(Et=null),yl.forEach(rf),El.forEach(rf)}function Bi(e,a){e.blockedOn===a&&(e.blockedOn=null,ao||(ao=!0,N.unstable_scheduleCallback(N.unstable_NormalPriority,Yh)))}var Ii=null;function cf(e){Ii!==e&&(Ii=e,N.unstable_scheduleCallback(N.unstable_NormalPriority,function(){Ii===e&&(Ii=null);for(var a=0;a<e.length;a+=3){var t=e[a],n=e[a+1],l=e[a+2];if(typeof n!="function"){if(eo(n||t)===null)continue;break}var i=jt(t);i!==null&&(e.splice(a,3),a-=3,$u(i,{pending:!0,data:l,method:t.method,action:n},n,l))}}))}function An(e){function a(o){return Bi(o,e)}pt!==null&&Bi(pt,e),yt!==null&&Bi(yt,e),Et!==null&&Bi(Et,e),yl.forEach(a),El.forEach(a);for(var t=0;t<gt.length;t++){var n=gt[t];n.blockedOn===e&&(n.blockedOn=null)}for(;0<gt.length&&(t=gt[0],t.blockedOn===null);)of(t),t.blockedOn===null&&gt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(n=0;n<t.length;n+=3){var l=t[n],i=t[n+1],u=l[Qe]||null;if(typeof i=="function")u||cf(t);else if(u){var s=null;if(i&&i.hasAttribute("formAction")){if(l=i,u=i[Qe]||null)s=u.formAction;else if(eo(l)!==null)continue}else s=u.action;typeof s=="function"?t[n+1]=s:(t.splice(n,3),n-=3),cf(t)}}}function df(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return l=u})},focusReset:"manual",scroll:"manual"})}function a(){l!==null&&(l(),l=null),n||setTimeout(t,20)}function t(){if(!n&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(t,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),l!==null&&(l(),l=null)}}}function to(e){this._internalRoot=e}ki.prototype.render=to.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(p(409));var t=a.current,n=ia();af(t,n,e,a,null,null)},ki.prototype.unmount=to.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;af(e.current,2,null,e,null,null),Ei(),a[Qt]=null}};function ki(e){this._internalRoot=e}ki.prototype.unstable_scheduleHydration=function(e){if(e){var a=bo();e={blockedOn:null,target:e,priority:a};for(var t=0;t<gt.length&&a!==0&&a<gt[t].priority;t++);gt.splice(t,0,e),t===0&&of(e)}};var ff=de.version;if(ff!=="19.2.0")throw Error(p(527,ff,"19.2.0"));D.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(p(188)):(e=Object.keys(e).join(","),Error(p(268,e)));return e=v(a),e=e!==null?Z(e):null,e=e===null?null:e.stateNode,e};var Ph={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:g,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zi.isDisabled&&zi.supportsFiber)try{On=zi.inject(Ph),Ze=zi}catch{}}return bl.createRoot=function(e,a){if(!w(e))throw Error(p(299));var t=!1,n="",l=gc,i=Sc,u=bc;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(l=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError)),a=$d(e,1,!1,null,null,t,n,null,l,i,u,df),e[Qt]=a.current,ks(e),new to(a)},bl.hydrateRoot=function(e,a,t){if(!w(e))throw Error(p(299));var n=!1,l="",i=gc,u=Sc,s=bc,o=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.formState!==void 0&&(o=t.formState)),a=$d(e,1,!0,a,t??null,n,l,o,i,u,s,df),a.context=ef(null),t=a.current,n=ia(),n=Ki(n),l=nt(n),l.callback=null,lt(t,l,n),t=n,a.current.lanes=t,Mn(a,t),Oa(a),e[Qt]=a.current,ks(e),new ki(a)},bl.version="19.2.0",bl}var vf;function ap(){if(vf)return io.exports;vf=1;function N(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(N)}catch(de){console.error(de)}}return N(),io.exports=ep(),io.exports}var tp=ap();function np(){const[N,de]=Df.useState(null),W=[{id:1,question:"1. Difference between Data and Information.",answer:"",codeExample:`
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



      `},{id:1,question:"",answer:"",codeExample:""},{id:8888,question:"Mid paper questions and answers.",answer:"",codeExample:`
✅ Q1(a) – Short Questions (1 mark each)

(i) Define DBMS.

A Database Management System (DBMS) is software that stores, manages, and retrieves data efficiently and 
securely.


(ii) What is the purpose of a primary key?

A primary key uniquely identifies each record in a table.

  No duplicates
  No NULL values


(iii) What is an Entity?

An Entity is an object in the real world that has a separate identity.
Examples: Student, Employee, Product.


-------------------


✅ Q1(b) – Objective / MCQs / True-False / Fill Blanks

1) SQL full form
👉 C) Structured Query Language


2) A relational database developer refers to a record as:
👉 B) a tuple


3) The collection of information stored at a particular moment is called:
👉 B) Instance of the database


4) Which are DDL statements?
👉 D) All of the above
(Create, Drop, Alter)


5) ______ command modifies a column in a table.
👉 A) ALTER


6) DCL stands for:
👉 A) Data Control Language


7) Which operations are allowed in a join view?
👉 D) All of the mentioned
(UPDATE, INSERT, DELETE — depending on DBMS rules)


----------------------------------------------------------------------


✅ Q2(a) – 2-Mark Questions

1) List components of DBMS.

Components:

  Hardware
  Software
  Data
  Users (Admin, End-user, Developer)
  Procedures
  DBMS Engine (Query processor, storage manager)


2) Difference between Inner Join and Outer Join

| Inner Join                                      | Outer Join                               |
| ----------------------------------------------- | ---------------------------------------- |
| Returns only matching rows from both tables     | Returns matching + non-matching rows     |
| Nulls ignored                                   | Nulls included                           |
| Types: Inner only                               | Types: Left, Right, Full                 |


-------------------


✅ Q2(b) – 3-Mark Questions

1) Difference between Data and Information

| Data                | Information                           |
| ------------------- | ------------------------------------- |
| Raw facts, symbols  | Processed, meaningful data            |
| Example: 90, 85, 88 | Example: "Student score average = 87" |
| No context          | Has context and usefulness            |



2) What is a Cursor? Types of Cursor.

A cursor is a pointer used to retrieve, update, or navigate through result rows one at a time.

Types:

1. Implicit Cursor
  Created automatically by DBMS for SELECT INTO, INSERT, DELETE.

2. Explicit Cursor
  Created manually by programmer for complex queries.
  Steps: Declare → Open → Fetch → Close


----------------------------------------------------------------------


✅ Q3 – Attempt Any TWO (5 marks each)

Q3(i) Types of Database Backup

✔ 1. Full Backup
Backs up entire database
Slow but safest


✔ 2. Incremental Backup
Backs up only data changed since last backup
Smaller, faster


✔ 3. Differential Backup
Backs up all changes since last full backup


✔ 4. Log Backup
Captures transaction logs
Helps recover up to last transaction


✔ 5. Hot Backup
Taken while DB is running


✔ 6. Cold Backup
Taken when DB is shut down



Q3(ii) Advantages and Disadvantages of Database

Advantages

Reduces redundancy
Increases consistency
Improves data sharing
Better security
Backup & recovery support


Disadvantages

Expensive software
Requires trained staff
More hardware needed
DB failure affects whole system



Q3(iii) Explain DML commands in detail

DML = Data Manipulation Language

1. INSERT

Adds new rows

  INSERT INTO Student VALUES (1,'Raj',85);


2. UPDATE

Modifies existing rows

  UPDATE Student SET marks=90 WHERE id=1;


3. DELETE

Removes rows

  DELETE FROM Student WHERE id=1;


4. SELECT

Retrieves data

  SELECT * FROM Student;


----------------------------------------------------------------------


✅ Q4(a) – Explain Relational Algebra Operators (5 marks)

1. Selection (σ)

Selects rows satisfying condition.
Example:
σ(marks > 50)(Student)


2. Projection (π)

Selects specific columns.
π(name, marks)(Student)


3. Union ( ∪ )

Returns unique rows from both tables.


4. Intersection ( ∩ )

Common rows in both tables.


5. Difference ( − )

Rows in A not in B.


6. Cartesian Product ( × )

Combines each row of A with each row of B.


7. Join

Combines tables based on related columns.
Types: Inner, Outer, Natural.


8. Rename (ρ)

Renames table or attributes.



✅ Q4(b) ER Diagram of Banking System

⭐ STEP 1 — Understand the Entities (Rectangles)

Entities = real-world objects.

In Banking System, the main entities are:

✔ 1. CUSTOMER
A person who has bank account.

✔ 2. ACCOUNT
Bank account belonging to customer.

✔ 3. TRANSACTION
Deposits / Withdrawals / Payments.

✔ 4. BRANCH
Bank branch where account is maintained.

So we have 4 rectangles.



⭐ STEP 2 — Add Attributes (Ovals)

Attributes = details of entity.

CUSTOMER
  Customer_ID
  Name
  Phone

ACCOUNT
  Account_No
  Account_Type
  Balance

TRANSACTION
  Txn_ID
  Amount
  Date
  Txn_Type

BRANCH
  Branch_ID
  Location

Each attribute is an oval.



⭐ STEP 3 — Add Relationships (Diamonds)

Relationships connect two entities.

(A) CUSTOMER Has ACCOUNT

One customer → many accounts
Diamond name = Has

(B) ACCOUNT Performs TRANSACTION

One account → many transactions
Diamond name = Performs

(C) BRANCH Maintains ACCOUNT

One branch → many accounts
Diamond name = Maintains




⭐ STEP 4 — Now Draw the ER Diagram (Simple & Clear)

Below is a very simple diagram you can easily copy in exam.


                 +-------------+
                 |  CUSTOMER   |
                 +-------------+
                 /      |      \\
      (Customer_ID) (Name) (Phone)
                 \\
                  \\
                +---------+
                |  Has    |    (Relationship)
                +---------+
                     |
                     |
                 +-------------+
                 |   ACCOUNT   |
                 +-------------+
              /       |         \\
   (Account_No) (Type) (Balance)
                     |
         +---------------------+
         |     Performs        |
         +---------------------+
                     |
                +-------------+
                | TRANSACTION |
                +-------------+
             /      |       \\
 (Txn_ID) (Amount) (Txn_Type) (Date)

                     |
          +--------------------+
          |     Maintains      |
          +--------------------+
                     |
                 +-------------+
                 |   BRANCH    |
                 +-------------+
               /         \\
      (Branch_ID)     (Location)



⭐ Explanation in Simple Words

✔ Customer HAS Account

A customer can open one or more accounts.
Example: Raj has a Savings account + Fixed deposit.


✔ Account PERFORMS Transaction

Every transaction belongs to an account.
Example: Deposit ₹500 → linked to Account No 123


✔ Branch MAINTAINS Account

Each account belongs to a bank branch.
Example: Account No 123 is in “Vesu Branch”


⭐ VERY SIMPLE SUMMARY

Rectangles = Entities
Ovals = Attributes
Diamond = Relationship
Lines = Connections





OR OPTION
Explain ANSI SPARC Architecture of DBMS

The ANSI–SPARC DBMS Architecture defines three levels that separate physical storage from user view.


⭐ Diagram (ASCII with clear structure)

                 +-----------------------------+
                 |      External Level         |
                 | (User Views / Subschemas)   |
                 +-----------------------------+
                      /                                  /                         View 1 (Student)       View 2 (Teacher)


                 +-----------------------------+
                 |     Conceptual Level        |
                 | (Entire Logical Structure)  |
                 |  - Tables                   |
                 |  - Relationships            |
                 |  - Constraints              |
                 +-----------------------------+


                 +-----------------------------+
                 |      Internal Level         |
                 | (Physical Storage Details)  |
                 |  - File organization        |
                 |  - Indexes                  |
                 |  - Blocks & Pages           |
                 +-----------------------------+


⭐ Explanation of All Three Levels (Easy Words)

1. External Level (View Level)

  Closest to users
  Shows only required data
  Hides the rest
  Different users → different views

Example:

Student can view only marks
Admin can view all details


2. Conceptual Level (Logical Level)

  Shows the entire database structure
  Tables, relationships, primary/foreign keys
  Does NOT show physical storage
  Maintains data independence

Example:
ER diagram converted into tables.


3. Internal Level (Physical Level)

  How data is stored on disk
  File formats, indexes, hashing
  Closest to the hardware

Example:
Data stored using B-trees, clustered indexes, blocks, pages etc.


⭐ Why ANSI–SPARC is Important?

  Separates user view from physical storage
  Supports data abstraction
  Provides Data Independence
    Physical Data Independence
    Logical Data Independence
      
      `},{id:1,question:"",answer:"",codeExample:""},{id:51,question:"51. Define stored procedure.",answer:"",codeExample:`
⭐ Stored Procedure (Easy Definition)

A Stored Procedure is a pre-written SQL program stored inside the database that can be executed 
whenever needed.

✔ It contains SQL statements like SELECT, INSERT, UPDATE, DELETE, loops, conditions, etc.
✔ It saves time because you don’t need to write the same SQL again and again.


⭐ Simple Explanation

A stored procedure is like a function in a database.
You create it once, store it, and use it many times.


⭐ Basic Syntax

CREATE PROCEDURE proc_name
AS 
BEGIN
   -- SQL statements
END;



⭐ Very Simple Example

Create stored procedure:
CREATE PROCEDURE show_students
AS
BEGIN
    SELECT * FROM students;
END;



Execute it:

EXEC show_students;


⭐ Why stored procedures are used?

  Reduce repeated writing of SQL
  Improve performance
  More secure
  Easy to maintain
      
      `},{id:52,question:"52. Explain stored procedure architecture.",answer:"",codeExample:`
⭐ Stored Procedure Architecture (Easy Explanation)

A stored procedure architecture describes how a stored procedure works inside the DBMS from 
creation → storage → execution.

It mainly includes 4 components:


✅ 1. Client Application

This is the program or user that calls the stored procedure.

Example:
  PHP, Java, SQL command line, or Oracle SQL*Plus.

➡ Client sends request:

EXEC procedure_name;



✅ 2. DBMS Stored Procedure Compiler

When you create a stored procedure, the DBMS compiles it.

It checks:

  Syntax
  Valid SQL statements
  Parameters

➡ After checking, it converts the procedure into compiled code (execution plan).



✅ 3. Procedure Cache / Data Dictionary

After compilation, the stored procedure is stored in the database.

Stored in:

  System Catalog
  Procedure Cache
  Data Dictionary

➡ This helps the database run it faster next time (no need to recompile).



✅ 4. Execution Engine

Whenever a stored procedure is executed, the DBMS execution engine runs it.
It:
  Uses precompiled plan
  Executes SQL statements inside the procedure
  Returns results to the client


⭐ Simple Architecture Diagram (Easy ASCII)

   +-------------------+
   |  Client Program   |
   | (calls procedure) |
   +--------+----------+
            |
            v
   +-------------------+
   |  Procedure        |
   |   Compiler        |
   +--------+----------+
            |
            v
   +-------------------+
   | Data Dictionary   |
   | & Proc Cache      |
   | (Stores compiled) |
   +--------+----------+
            |
            v
   +-------------------+
   | Execution Engine  |
   +--------+----------+
            |
            v
   +-------------------+
   |   Output Result   |
   +-------------------+


⭐ Simple Example

CREATE PROCEDURE show_emp
AS
BEGIN
    SELECT * FROM employee;
END;


How it works:

1. You create it → Compiler checks and stores it.
2. Stored inside procedure cache.
3. When executed → Engine runs SQL.
4. Results sent to client.


⭐ Why this architecture is useful?

  Faster execution (stored & precompiled)
  Saves network traffic
  Improves security
  Easy to maintain
      
      `},{id:53,question:"53. Explain stored procedure with example and CALL statement.",answer:"",codeExample:`
⭐ Stored Procedure (Easy Explanation)

A stored procedure is a pre-written SQL program stored in the database.
You create it once and call it whenever needed.

It reduces code repetition, improves performance, and increases security.


⭐ Syntax

CREATE PROCEDURE procedure_name()
BEGIN
    -- SQL statements
END;



⭐ Simple Example

✔ Create Stored Procedure

CREATE PROCEDURE show_students()
BEGIN
    SELECT * FROM students;
END;


⭐ CALL Statement (to run the procedure)

CALL show_students();


⭐ Output (example)

The query will display all rows from the students table.



⭐ Example with Parameter (optional but useful)

Create procedure with input:

CREATE PROCEDURE getStudent(IN sid INT)
BEGIN
    SELECT * FROM students WHERE id = sid;
END;


Call it:

CALL getStudent(5);
      
      `},{id:54,question:"54. Write advantages of stored procedures.",answer:"",codeExample:`
⭐ Advantages of Stored Procedures

✅ 1. Faster Performance

SQL code is precompiled and stored inside the database.
DBMS does not need to recompile every time.
Execution becomes faster.


✅ 2. Reduces Network Traffic

Instead of sending multiple SQL statements from the application,
You send only the CALL statement.
Less data travels between application and database.


✅ 3. Reusability

Write the procedure once and use it many times.
Saves time and reduces repeated code.


✅ 4. Improved Security

Users can be allowed to run a procedure without giving access to actual tables.
Sensitive SQL logic stays hidden inside the procedure.


✅ 5. Easy Maintenance

If you need to change logic, you update the procedure only once.
No need to modify application code.


✅ 6. Modular Programming

Complex tasks can be broken into multiple small procedures.
Makes the system organized and easier to understand.


✅ 7. Less Errors

Procedures stored in the DBMS are tested and fixed once.
Reusing them reduces mistakes in applications.
      
      `},{id:55,question:"55. Write disadvantages of stored procedures.",answer:"",codeExample:`
⭐ Disadvantages of Stored Procedures

❌ 1. Harder to Debug

Debugging stored procedures is more difficult compared to normal application code.
DBMS tools for debugging are limited.


❌ 2. Database Dependent

Stored procedures depend on the specific DBMS (MySQL, Oracle, SQL Server).
You cannot easily move them to another database without changes.


❌ 3. Increased Load on Database Server

Too many stored procedures can make the database server busy,
because all processing happens on the DB side.


❌ 4. Complex to Maintain

Large systems may have hundreds of procedures,
making management complicated.


❌ 5. Version Control is Difficult

Keeping track of changes in procedures is harder than tracking changes in application code.


❌ 6. Learning Required

Developers need to learn the procedure language (PL/SQL, T-SQL, etc.),
which adds extra work.


❌ 7. Not Suitable for All Logic

Some business logic is better handled in the application,
not inside the database.

      `},{id:56,question:"56. Explain difference: stored procedure vs stored function.",answer:"",codeExample:`
✅ Stored Procedure vs Stored Function (Difference Table)


| Stored Procedure                                                      | Stored Function                                                                     |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------|
| A stored procedure is a block of SQL statements that performs a task. | A stored function is a block of SQL that performs a task and must return one value. |
| It may or may not return a value.                                     | It must return exactly one value using the RETURN statement.                        |
| Used for operations like insert, update, delete, complex logic.       | Used for calculations and returning a result.                                       |
| Called using the CALL statement.                                      | Called inside SQL statements like SELECT, WHERE, etc.                               |
| Can have IN, OUT, INOUT parameters.                                   | Mostly has IN parameters only.                                                      |
| Cannot be used directly in SQL queries.                               | Can be used in SQL queries easily.                                                  |
| Better for multiple operations at a time.                             | Better for returning a single computed result.                                      |
| Example: Insert new record, update salary, etc.                       | Example: Calculate total, average, discount, etc.                                   |


🧠 Easy Explanation (Short Notes)

Stored Procedure
  Does not need to return a value.
  Used mainly for business logic (INSERT, UPDATE, DELETE).
  Can return multiple values using OUT parameters.

Stored Function
  Must return one value.
  Used mainly for calculations.
  Can be used inside SELECT queries.

✅ Example to Understand

Stored Procedure Example
CREATE PROCEDURE addStudent(IN sName VARCHAR(50), IN sMarks INT)
BEGIN
    INSERT INTO student(name, marks) VALUES(sName, sMarks);
END;


Called as:

CALL addStudent('Raj', 90);



Stored Function Example

CREATE FUNCTION getSquare(num INT)
RETURNS INT
BEGIN
    RETURN num * num;
END;


Used as:

SELECT getSquare(5);
      `},{id:57,question:"57. What are packages (if asked — short note)?",answer:"",codeExample:`
✅ Short Note: Packages

A package in a database (mainly Oracle PL/SQL) is a collection of related procedures, functions, variables, 
and cursors stored together under one name.

It helps in organizing database programs in a structured and reusable way.

A package has two parts:

1. Package Specification (Spec) – declares procedures, functions, variables.
2. Package Body – contains the actual code of the procedures and functions.


⭐ Features of Packages

Group related procedures/functions together
Improves code organization and readability
Supports encapsulation (hiding internal code)
Increases performance (loads once into memory)
Allows reuse of code


📌 Example

Package Specification

CREATE OR REPLACE PACKAGE student_pkg AS
   PROCEDURE addStudent(sName VARCHAR, sMarks INT);
   FUNCTION getTotalStudents RETURN INT;
END student_pkg;



Package Body

CREATE OR REPLACE PACKAGE BODY student_pkg AS
   PROCEDURE addStudent(sName VARCHAR, sMarks INT) IS
   BEGIN
      INSERT INTO student(name, marks) VALUES(sName, sMarks);
   END;

   FUNCTION getTotalStudents RETURN INT IS
      total INT;
   BEGIN
      SELECT COUNT(*) INTO total FROM student;
      RETURN total;
   END;
END student_pkg;


🎯 Simple Definition (one line)

A package is a container that groups related procedures, functions, and variables together for better 
organization and reusability.




✅ OUTPUT of Package Example

1. When you run this:

CALL student_pkg.addStudent('Raj', 85);


Output/Result:

✔ A new row is inserted into the student table.

| name | marks |
| ---- | ----- |
| Raj  | 85    |

(You will not see printed output, but the data is inserted.)


2. When you run this:

SELECT student_pkg.getTotalStudents() FROM dual;


Output/Result:

It will show the total number of students in the table.


Example output:

TOTALSTUDENTS
1

(If already many rows exist, the number will be higher.)


⭐ Summary (Very Simple)

addStudent() → inserts student → no printed output → data added in table.
getTotalStudents() → returns number → you will see a numeric output.
      

🟧 Summary

| Part                             | Meaning                                             |
| -------------------------------- | --------------------------------------------------- |
| student_pkg.getTotalStudents()   | Call function inside package                        |
| FROM dual                        | Dummy table used to allow SELECT without real table |
| Output                           | Total number of students in table                   |


Note: you not understand this example you can show practical number 10.

      `},{id:58,question:"58. What is stored procedure cache?",answer:"",codeExample:`
✅ Stored Procedure Cache (Simple Explanation)

A stored procedure cache is a special memory area inside the database where the database stores the 
compiled and ready-to-run version of stored procedures.



✔ Why this exists?

Because compiling a stored procedure again and again is slow.
So the database keeps the compiled version in memory to run it faster next time.



⭐ In Simple Words

When you run a stored procedure:
  1. Database compiles it.
  2. Database stores the compiled version in cache.
  3. Next time you call the same procedure →
    Database runs it directly from cache (very fast).


💡 Why Stored Procedure Cache is Useful?

Faster execution (no need to compile every time).
Saves time for repeated procedures.
Improves overall database performance.
Reduces CPU work.



✔ Example (Very Simple)

Imagine this stored procedure:

  CALL getStudentMarks(10);


First time:
Database compiles → stores in cache.


Second time:
Database quickly runs it from cache → faster.
      
      `},{id:59,question:"59. Explain main features of stored procedures.",answer:"",codeExample:`
✅ Main Features of Stored Procedures (Simple Explanation)

A stored procedure is a block of SQL statements saved in the database.
It has several useful features that make database work faster and easier.



⭐ 1. Reusability

You write the code once and use it again and again using the CALL statement.
No need to rewrite the SQL every time.



⭐ 2. Faster Execution

Stored procedures are compiled once and stored in procedure cache,
so they run faster the next time.



⭐ 3. Reduced Network Traffic

Instead of sending multiple SQL queries from your program,
you call one stored procedure → fewer network calls.



⭐ 4. Improved Security

You can:
  control who can call the procedure
  hide the actual SQL code
  avoid SQL injection
  Only the procedure name is exposed, not the internal code.



⭐ 5. Modularity

The code is organized into blocks.
Large tasks can be broken into smaller procedures.



⭐ 6. Better Maintenance

If logic changes, you only update the stored procedure.
No need to change code in every application.



⭐ 7. Support Parameters

Stored procedures can take:
  IN parameters (input values)
  OUT parameters (return values)
  INOUT parameters (send + receive)



⭐ 8. Supports Conditional Logic

Stored procedures allow:

IF / ELSE
CASE
LOOP
WHILE
REPEAT

So you can write complex logic inside the database.



⭐ 9. Can Return Multiple Results

A stored procedure can:

  return multiple values
  return multiple result sets
  return status codes

A normal SQL query usually returns only one result.



⭐ 10. Portable

Once created, the stored procedure works for:

PHP
Java
Python
.NET
C++

Any application can call the same stored procedure.
      
      
      `},{id:61,question:"61. What is Deadlock? Explain with characteristics.",answer:"",codeExample:`
✅ What is Deadlock?

A deadlock is a situation in an operating system where two or more processes get stuck forever,
because each process is waiting for a resource held by another process.

So, no process can continue, and the system stops responding.

🔹 Simple Example

Process P1 has Resource A and needs Resource B
Process P2 has Resource B and needs Resource A
Both wait for each other → nobody gets the resource → deadlock occurs.

✅ Characteristics of Deadlock (Coffman Conditions)

Deadlock happens only when all these four conditions are true at the same time.


1️⃣ Mutual Exclusion

A resource can be used by only one process at a time.
Example: One printer cannot print for two processes at the same time.


2️⃣ Hold and Wait

A process is holding one resource and waiting for another.
Example: P1 holds Resource A and waits for Resource B.


3️⃣ No Preemption

Resources cannot be forcibly taken back.
A process must release the resource voluntarily (સ્વેચ્છાએ).


4️⃣ Circular Wait

There is a cycle of processes, each waiting for a resource held by the next process.

Example:
P1 → waiting for P2
P2 → waiting for P3
P3 → waiting for P1
This cycle = deadlock.


⭐ Summary (Easy to Learn)

Deadlock = Processes stuck forever, waiting for each other.
Deadlock occurs when these 4 conditions are true:

  Mutual Exclusion
  Hold and Wait
  No Preemption
  Circular Wait
      
      
      `},{id:62,question:"62. Explain Deadlock Prevention (Wait-Die, Wound-Wait).",answer:"",codeExample:`
✅ Deadlock Prevention(નિવારણ)

Deadlock prevention means stopping deadlock before it happens by controlling how processes wait for 
resources.

Two popular methods are:

Wait-Die
Wound-Wait

Both use timestamps (older process = high priority, younger = low priority).


🔵 1️⃣ Wait-Die Method

✔ Rule (Simple)

Older process can wait.
Younger process must die (abort).


✔ How it works?

If a younger process requests a resource held by an older process,
👉 it dies (aborted and restarted later).

If an older process requests a resource held by a younger process,
👉 it waits.


✔ Example

Let’s say:

P1 = older
P2 = younger

Case 1:
P1 wants resource held by P2 → P1 waits.

Case 2:
P2 wants resource held by P1 → P2 dies (aborted).



🔵 2️⃣ Wound-Wait Method

✔ Rule (Simple)

Older process wounds(घाव)(forces rollback) younger process.
Younger process waits when requesting resource from an older process.

✔ How it works?

If an older process requests a resource held by a younger process,
👉 older process wounds the younger (younger is rolled back).

If a younger process requests a resource held by an older process,
👉 younger process waits.


✔ Example

Let’s say:

P1 = older
P2 = younger

Case 1:
P1 wants resource held by P2 → P1 wounds P2 → P2 is rolled back.

Case 2:
P2 wants resource held by P1 → P2 waits.



⭐ Easy Difference (Table)

| Method         | Older Process                              | Younger Process           |
| -------------- | ------------------------------------------ | ------------------------- |
| Wait-Die       | Older waits                                | Younger dies (aborts)     |
| Wound-Wait     | Older wounds (forces rollback) younger     | Younger waits             |



⭐ Summary in One Line

Wait-Die: Older waits, younger dies.
Wound-Wait: Older wounds younger, younger waits.


      `},{id:63,question:"63. Explain Deadlock example (Student–Grade case).",answer:"",codeExample:`
✅ Deadlock Example: Student–Grade Case

Imagine a college system with two tables:

1. STUDENT
2. GRADE

Two transactions (programs) are running at the same time:

  T1 → wants to update the STUDENT table first
  T2 → wants to update the GRADE table first

Because both are locking different tables first, a deadlock can happen.


🎓 Real-Life Style Example

👉 Transaction T1 (Program 1)

1. Locks STUDENT table
2. Now wants to lock GRADE table

👉 Transaction T2 (Program 2)

1. Locks GRADE table
2. Now wants to lock STUDENT table


❌ How Deadlock Happens?
Step-by-step:

1. T1 locks STUDENT
  → No problem.

2. T2 locks GRADE
  → Still no problem.

3. T1 now needs GRADE, but
  → GRADE is locked by T2
  ➝ So T1 waits.

4. T2 now needs STUDENT, but
  → STUDENT is locked by T1
  ➝ So T2 waits.


Now T1 is waiting for T2,
and T2 is waiting for T1.

👉 Both are waiting forever = DEADLOCK.




🔄 Simple Diagram (Text Form)
T1: LOCK STUDENT  ------------ waits for --------->  GRADE (locked by T2)
T2: LOCK GRADE    ------------ waits for --------->  STUDENT (locked by T1)


This forms a cycle:

T1 → STUDENT → T2 → GRADE → T1


Cycle = Deadlock exists


📝 Very Simple Explanation

One program takes STUDENT first and then wants GRADE.
Another program takes GRADE first and then wants STUDENT.
Each one is holding something the other one needs.
Both are waiting and nobody can continue.
This “waiting circle” is called a deadlock.


⭐ Final One-Line Answer

In the Student–Grade deadlock, T1 locks STUDENT and waits for GRADE, while T2 locks GRADE and waits 
for STUDENT. Both wait for each other forever, creating a deadlock.
      
      
      `},{id:64,question:"64. What is Concurrency Control?",answer:"",codeExample:`
✅ What is Concurrency Control?

Concurrency Control in DBMS means managing multiple users who access the database at the same time
so that:

  data does not get corrupted
  results remain correct and consistent
  transactions run smoothly without problems like deadlock or data loss


📌 Simple Example

Suppose two students Rahul and Priya both update the same bank account at the same time.


Without concurrency control:

  Rahul adds ₹100
  Priya adds ₹200
  Final balance may become wrong (lost update problem)


With concurrency control:

  DBMS makes sure one update happens properly, then the next
  Final balance becomes correct (₹300 added)


🎯 Why Concurrency Control is Needed?

Because without it, the following problems occur:

Lost updates
Dirty reads
Incorrect results
Deadlocks

Concurrency control avoids all these issues.



🔒 How DBMS Manages It?

(DBMS uses these internally)

Locks
Timestamps
Two-Phase Locking (2PL)
Deadlock Detection/Prevention


⭐ Easy One-Line Definition
Concurrency control ensures correct and safe execution of multiple transactions running at the same time.


---------------------------------------------------------------------------


🟧 🔥 What is Concurrency Control? (Simple Explanation)

👉 Concurrency Control = The technique used by DBMS to manage multiple transactions running at 
the same time so they don’t:

  overwrite each other’s data
  read incorrect data
  get stuck in deadlocks


Example:

Two users update the same bank account at the same time → without concurrency control, data becomes 
wrong.


🟥 🔥 DEADLOCK Example (Two Transactions Blocking Each Other)

Consider a table:

CREATE TABLE accounts(
  acc_id INT PRIMARY KEY,
  balance INT
);


Assume two rows:

1 → 5000
2 → 6000


🟥 ⚠️ DEADLOCK Happens Like This
❗ Transaction T1 (User 1)

-- T1
BEGIN;
UPDATE accounts SET balance = balance + 500 WHERE acc_id = 1;  -- Lock row 1
-- T1 now waits for row 2


❗ Transaction T2 (User 2)

-- T2
BEGIN;
UPDATE accounts SET balance = balance - 300 WHERE acc_id = 2;  -- Lock row 2
-- T2 now waits for row 1


👉 T1 locked row 1 and waiting for row 2
👉 T2 locked row 2 and waiting for row 1

🔥 Both are waiting forever → DEADLOCK!

The DBMS must kill one transaction.



🟧 🔥 Concurrency Control Solutions (with Queries)

Now I will show example queries for each technique.


🟩 1. Locking (Pessimistic Concurrency Control)

Use FOR UPDATE to lock rows before using them.

✔ Solution:

BEGIN;
SELECT * FROM accounts 
WHERE acc_id = 1 
FOR UPDATE;    -- Lock row 1 first

UPDATE accounts SET balance = balance + 500 WHERE acc_id = 1;

COMMIT;


Purpose:
  Prevents other transactions from touching that row
  Avoids deadlock by clear locking order



🟩 2. Timestamp Ordering (Older transaction gets priority)

DBMS decides:
  Older transactions → go first
  Younger transactions → wait or rollback

❗ You don’t write timestamp rules manually
DBMS handles it internally using versions.

But you can simulate:

Example:

  SET TRANSACTION READ ONLY;    -- Older/safer

Older read-only transactions get priority.


🟩 3. Two-Phase Locking (2PL)

✔ Rule:

Phase 1 → Acquire all locks
Phase 2 → Release locks only after commit

Example:

BEGIN;

-- Acquire locks first
SELECT balance FROM accounts WHERE acc_id IN (1,2) FOR UPDATE;

-- Then perform updates
UPDATE accounts SET balance = balance - 300 WHERE acc_id = 1;
UPDATE accounts SET balance = balance + 300 WHERE acc_id = 2;

COMMIT;

✔ Prevents deadlock because you lock everything at start.


🟩 4. Deadlock Detection

DBMS does this automatically.
If deadlock occurs:

🔥 Oracle/MySQL will kill one transaction:

  ORA-00060: deadlock detected while waiting for resource

You don’t write code for this.

But you can simulate:

T1:
UPDATE accounts SET balance = balance + 500 WHERE acc_id = 1;

T2:
UPDATE accounts SET balance = balance + 200 WHERE acc_id = 1;

One will be killed.



🟩 5. Deadlock Prevention (Priority Method)

✔ Example rule:
  Transaction with smaller acc_id locked first.

Practical implementation:
  Always lock rows in same order.


Good Example (Prevents Deadlock)

BEGIN;

-- Always lock lower ID first
SELECT * FROM accounts WHERE acc_id = 1 FOR UPDATE;
SELECT * FROM accounts WHERE acc_id = 2 FOR UPDATE;

-- then update
UPDATE accounts SET balance = balance + 200 WHERE acc_id = 1;
UPDATE accounts SET balance = balance - 200 WHERE acc_id = 2;

COMMIT;


✔ No deadlock because order is fixed.


⭐ FINAL SUMMARY TABLE (Simple)

| Technique               | Example                         | Simple Meaning                  |
| ----------------------- | ------------------------------- | ------------------------------- |
| Locking                 | SELECT … FOR UPDATE             | Lock rows before others use     |
| Timestamp ordering      | DB handles automatically        | Older transactions first        |
| Two-phase locking       | Lock all rows → update → commit | Safe locking order              |
| Deadlock detection      | DB kills one transaction        | Auto recovery                   |
| Deadlock prevention     | Lock in fixed order             | Stop deadlock before it happens |


---------------------------------------------------------------------------


You said:
hey can you explain what is mean by FOR and  FOR UPDATE
ChatGPT said:


🟩 1. What is FOR in SQL?

FOR alone is NOT a SQL keyword.

It is used in:

✔ PL/SQL Loops

Example:

FOR i IN 1..5 LOOP
    DBMS_OUTPUT.PUT_LINE(i);
END LOOP;


Meaning:
➡ Repeat from 1 to 5


✔ Cursor FOR Loop

Example:

FOR rec IN (SELECT * FROM student) LOOP
    DBMS_OUTPUT.PUT_LINE(rec.name);
END LOOP;


Meaning:

➡ Loop through each row of SELECT query
➡ No locking, only looping

➡ So, FOR is used only for looping in PL/SQL.



🟥 2. What is FOR UPDATE in SQL?

FOR UPDATE is a SQL clause
→ used inside SELECT query


✔ Purpose:

👉 To lock selected rows
👉 Prevent other transactions from updating them
👉 Used in concurrency control
👉 Avoids deadlocks and conflicts


🟦 Example of FOR UPDATE

SELECT * 
FROM accounts 
WHERE acc_id = 1
FOR UPDATE;


Meaning:

👉 Select this row
👉 Lock it for updates
👉 No one else can modify this row until you commit/rollback


🟨 Difference Summary (SUPER EASY)

| Word           | Used In      | Meaning                      |
| -------------- | ------------ | ---------------------------- |
| FOR            | PL/SQL Loops | Repeat/iterate               |
| FOR UPDATE     | SELECT Query | Lock rows to avoid conflicts |



🟧 Example to Show the Difference

🔹 FOR (LOOP)

FOR i IN 1..3 LOOP
  DBMS_OUTPUT.PUT_LINE(i);
END LOOP;


Output:
1
2
3

🔹 FOR UPDATE (LOCK ROWS)

SELECT * FROM student WHERE id = 10 FOR UPDATE;


Meaning:

Lock this student row
No one else can update/delete it until you finish


🟩 Why FOR UPDATE is Important?

👉 Prevents two users from updating same row at same time
👉 Avoids data corruption
👉 Helps control concurrency


Example:

Transaction 1:

SELECT * FROM accounts WHERE acc_id = 1 FOR UPDATE;

Row 1 is locked.


Transaction 2:

UPDATE accounts SET balance = balance + 500 WHERE acc_id = 1;


❌ Will WAIT until Transaction 1 commits.


⭐ Simple Analogy
✔ FOR = Like a loop in programming

Ex: repeat 10 times


✔ FOR UPDATE = Like putting a "Do Not Touch" tag on a row

Only you can update it until you finish.
      `},{id:65,question:"65. Explain GRANT and REVOKE commands.",answer:"",codeExample:`
✅ GRANT Command

Meaning:

The GRANT command is used to give permissions (rights) to a user on database objects like tables, views, procedures, etc.

What permissions?

SELECT
INSERT
UPDATE
DELETE
ALL PRIVILEGES or ALL                               //PRIVILEGES mean permissions


Syntax
GRANT permission_list ON table_name TO user_name;


Example

Give SELECT and INSERT permission on students table to user raj:

  GRANT SELECT, INSERT ON students TO raj;


Give all permissions:

  GRANT ALL PRIVILEGES ON students TO raj;   or
  GRANT ALL ON students TO raj;



✅ REVOKE Command

Meaning:

The REVOKE command is used to remove previously given permissions from a user.

Syntax

REVOKE permission_list ON table_name FROM user_name;


Example

Remove SELECT permission from user raj:

  REVOKE SELECT ON students FROM raj;


Remove all permissions:

  REVOKE ALL PRIVILEGES ON students FROM raj;


⭐ Easy One-Line Difference

GRANT → Give permissions
REVOKE → Remove permissions
      
      `},{id:66,question:"66. Explain Role-Based Access Control (RBAC).",answer:"",codeExample:`
✅ Role-Based Access Control (RBAC)
Meaning:

RBAC is a security method where permissions are given to roles, not directly to users.
Then users are assigned roles.

So, user → gets role → role has permissions.


🧠 Why RBAC is used?

Easy to manage permissions
No need to give rights one by one to each user
Useful in large organizations


✅ How RBAC Works (Simple Explanation)

Create Roles
Example roles:

  Admin
  Manager
  Staff


Assign Permissions to Roles
Example:

  Admin → SELECT, INSERT, UPDATE, DELETE
  Manager → SELECT, UPDATE
  Staff → SELECT


Assign Users to Roles
Example:

  Raj → Manager
  John → Staff

Thus, Raj automatically gets Manager permissions.


✅ Simple Example (SQL)

1. Create a Role

  CREATE ROLE manager;


2. Give permissions to role

  GRANT SELECT, UPDATE ON employees TO manager;


3. Assign the role to a user

  GRANT manager TO raj;

Now Raj can SELECT and UPDATE employees data automatically.

⭐ Easy One-Line Definition

RBAC is a method where permissions are given to roles, and roles are assigned to users to simplify access 
control.
      
      `},{id:67,question:"67. What is PKI? Explain its working.",answer:"",codeExample:`
🌟 PKI (Public Key Infrastructure) — Easy Explanation

Think of PKI like a digital security system that keeps online communication safe and trustworthy.

It mainly does two things:

  1. Locks your data → So no hacker can read it
  2. Proves identity → So you know you’re talking to the real person/website


🔑 PKI uses two keys

PKI uses a pair of keys:

  Public Key → can be shared with everyone
  Private Key → must be kept secret

They work together like a lock and key.

🔐 How PKI Works — Very Simple Example

📌 Example: Raj wants to send a secret message to Neha.

✔ Step 1: Neha has two keys

  Public Key
  Private Key

✔ Step 2: Neha gives her public key to Raj

(Anyone can have it)

✔ Step 3: Raj locks (encrypts) the message using Neha’s public key
✔ Step 4: Only Neha can open (decrypt) it using her private key

➡️ This keeps the message safe.
Even if someone steals the message, they cannot open it.



🪪 But how does Raj know the key really belongs to Neha?

Here comes the important part:


👉 PKI uses Digital Certificates

A Digital Certificate is like a digital ID card that proves:

  Who the person/website is
  Their public key is real
  It is verified by a trusted authority

This trusted authority is called CA (Certificate Authority).


🏢 What does a Certificate Authority (CA) do?

  Checks identity (like KYC)
  Issues a digital certificate
  Signs it so everyone can trust it

Example CAs: DigiCert, GoDaddy, Let's Encrypt.


🔄 PKI Real-World Use Example

When you open https://google.com, your browser checks:

1. Does Google have a valid certificate?
2. Was it issued by a trusted CA?
3. Is the public key safe?

If YES → browser shows the 🔒 padlock.


⭐ Easy One-Line Definition

PKI is a digital security system that protects data using public–private keys and verifies identity using 
digital certificates.



🔐 PKI Working Diagram (Very Simple)


                +---------------------------+
                |   Certificate Authority   |
                |         (CA)              |
                +------------+--------------+
                             |
                             | Issues Digital Certificate
                             v
                     +------------------+
                     |   Neha (User)    |
                     |  Has 2 Keys:     |
                     |  - Public Key    |
                     |  - Private Key   |
                     +---------+--------+
                               |
             Neha shares       |  
             Public Key        |
                               v
                         +------------+
                         |    Raj     |
                         +------------+
                               |
                               | Encrypts message
                               | using Neha's
                               | Public Key
                               v
                      +--------------------+
                      | Encrypted Message  |
                      +--------------------+
                               |
                               v
                     +------------------------+
                     |   Neha receives it     |
                     | Decrypts using her     |
                     |   Private Key          |
                     +------------------------+


⭐ Explanation of Diagram (super simple)

1. CA (Certificate Authority) gives Neha a Digital Certificate that proves her identity.
2. Neha has:
  Public Key → shared with everyone
  Private Key → kept secret
3. Neha gives her Public Key to Raj.
4. Raj encrypts the message with that Public Key.
5. Only Neha can open (decrypt) it using her Private Key.

➡️ This makes communication safe and trusted.

      
      
      `},{id:68,question:"68. Explain Encryption and its challenges.",answer:"",codeExample:`
🔐 What is Encryption? (Easy Words)

Encryption means changing readable data into unreadable form so that only the correct person can read it.

✔ Plain text → (Encrypted) → Cipher text
✔ Only someone with the correct key can turn it back to plain text.

It protects data from:

Hackers
Unauthorized access
Data theft

Simple Example

Raj sends a message to Neha.
Raj locks (encrypts) the message with Neha’s public key.
Only Neha can open (decrypt) it with her private key.


⭐ Types of Encryption (Very Simple)

1. Symmetric Encryption

Same key for encryption and decryption
Fast
Example: AES


2. Asymmetric Encryption

Two keys: public + private
More secure, slower
Example: RSA


⚠️ Challenges of Encryption (Easy and Simple)

1️⃣ Key Management Problem

Keys must be stored safely
If the private key is lost → data cannot be recovered
If the key is stolen → encryption becomes useless


2️⃣ Performance Issues

Strong encryption uses heavy math
It can make systems slow, especially large data


3️⃣ Complex to Implement

Developers must configure it correctly
Wrong setup → security becomes weak


4️⃣ Compatibility Problems

Old systems may not support modern encryption
Upgrading everything is costly


5️⃣ Encrypted Data Cannot Be Checked

Antivirus and monitoring tools cannot see inside encrypted data
Hackers can hide malware in encrypted traffic


6️⃣ Backup and Recovery Issues

Encrypted backups require keys
If keys are misplaced → backup becomes unusable


7️⃣ Legal and Policy Restrictions

Some countries restrict strong encryption
Sharing encrypted data across borders may be regulated


⭐ Easy One-Line Summary

Encryption protects data by converting it into unreadable form, but managing keys, performance issues,
and complexity are major challenges.
      
      `},{id:69,question:"69. Explain Database Security Challenges.",answer:"",codeExample:`
Database Security Challenges (Simple Explanation)

Database security means protecting data from unauthorized access, damage, or misuse.
But keeping a database fully safe is difficult. These difficulties are called security challenges.


Below are the main challenges, explained simply:

1. Unauthorized Access

People who should NOT see the data try to access it.
  Example: Hacker tries to log in as admin.
  Reason: Weak passwords, unsafe network, no encryption.


2. SQL Injection Attacks

Attacker inserts harmful SQL commands into input boxes.
  Example: In login form, attacker enters
    "' OR '1'='1"
    → Database returns all data.


3. Insider Threats

Employees who already have access misuse the database.
Example: Staff downloads customer data for personal use.


4. Weak Authentication

Using simple login systems like:

  No OTP
  No two-factor authentication
    This makes the database easy to break into.


5. Data Leakage

Sensitive data is exposed accidentally or intentionally.
Example: Backup files shared publicly by mistake.


6. Weak or No Encryption

If the data is not encrypted:

  Hackers can easily read stolen files.
  Network data can be intercepted.


7. Malware and Ransomware

Viruses or ransomware can:

  Steal data
  Lock the entire database
  Demand money to restore access


8. Poor Access Control

Everyone gets too many permissions.
Example: A user who only needs SELECT access also gets DELETE access → risk of data loss.


9. Insecure Database Configuration

Using default settings:

Default admin password
Open ports
Public IP connections
Hackers easily exploit these.


10. No Regular Updates

Outdated DB software has security holes.
Hackers can attack known vulnerabilities.


11. Backup Security Issues

Backups stored without encryption or security can be stolen.
Example: Backup file on USB drive lost.


12. Denial of Service (DoS) Attacks

Attackers overload the database with requests.
Result: Database becomes slow or crashes.


13. Cloud Database Risks

Cloud DBs can be hacked if:

Misconfigured
Public bucket left open
Weak API keys used



Short Revision Answer (Exam Ready)

Database Security Challenges:

Unauthorized access
SQL injection
Insider threats
Weak authentication
Data leakage
Weak encryption
Malware / ransomware
Poor access control
Insecure configuration
Outdated software
Backup security issues
DoS attacks
Cloud security risks
      
      
      `},{id:70,question:"70. Explain Deadlock Detection & Recovery.",answer:"",codeExample:`
Deadlock Detection & Recovery (Easy Explanation)

Deadlock happens when two or more transactions wait for each other forever.

Example:

  T1 waits for a lock held by T2

  T2 waits for a lock held by T1
  → They will wait forever = Deadlock

To handle this, DBMS uses Deadlock Detection and Recovery.


1. Deadlock Detection

Meaning:
The DBMS regularly checks if a deadlock has happened.

How detection works:


✔️ Wait-For Graph (WFG)

A graph that shows who is waiting for whom.
If the graph has a cycle, it means deadlock exists.

Example:
T1 → waiting for T2
T2 → waiting for T1
Cycle = Deadlock.


✔️ When detection is done?

DBMS checks deadlock:

  Periodically (every few seconds), or
  When a transaction has waited too long, or
  When system load is high.



2. Deadlock Recovery

Once DBMS detects a deadlock, it must break the cycle.
There are 3 main recovery methods:


(A) Transaction Rollback

DBMS cancels (rolls back) one or more transactions to break deadlock.

How rollback works:

1. Choose a transaction to kill (called victim).
2. Undo its changes.
3. Free its locks.
4. Other transactions continue normally.

Victim selection criteria:

  Least work done
  Lowest priority
  Smallest cost
  Transaction that is easiest to restart later



(B) Terminating (Killing) a Transaction

DBMS forcefully stops one transaction completely.

Used when:

  The transaction has created the deadlock
  It is easy to restart



(C) Resource Preemption

Preemption = Taking something away.

In deadlock, two transactions are holding locks and waiting for each other.
So DBMS sometimes takes (removes) the lock from one transaction to break the deadlock.


⭐ Simple Example (Very Easy)
Suppose:

  T1 has Lock A
  T2 has Lock B

Both want each other's lock:

  T1 wants B
  T2 wants A

Deadlock!


✔️ Resource Preemption means:

DBMS says:

"T2, give me back Lock B.
I need it so T1 can continue."

So DBMS:

1. Takes Lock B from T2
2. Undo (rollback) only the part of T2 that used Lock B
3. Gives Lock B to T1
4. T1 continues and finishes
5. Later T2 will run again

⭐ Why is this not used much?

Because:

1️⃣ Hard to implement

DBMS must carefully undo only some operations — very tricky.


2️⃣ Cascading Rollback

If T2 is rolled back partially,
then any transaction that used T2's data may also need rollback.

Example:

  T2 changed something
  T3 used T2’s changed value
  If DBMS rolls back T2 → T3 may also need rollback



Short Exam-Ready Answer

Deadlock Detection

DBMS checks for deadlocks using Wait-For Graph.
If a cycle is found → Deadlock detected.


Deadlock Recovery

Methods used after detecting deadlock:

  1. Rollback a victim transaction
  2. Kill a transaction
  3. Preempt resources
      
      `},{id:71,question:"71. What is Database Survivability?",answer:"",codeExample:`
✅ Database Survivability (Easy Definition)

Database Survivability means the database can continue working even during failures, attacks, disasters, 
or system crashes.

In simple words:

👉 The database should stay alive, available, and recover quickly
—even if something bad happens.



⭐ Why is Survivability Important?

Because businesses need their data 24×7.
So even if there is:

  Server crash
  Hardware failure
  Cyber attack
  Natural disaster
  Power failure

…the database should still work or recover fast.


⭐ Main Features of Database Survivability

1️⃣ Redundancy

Copy of data stored in multiple places
(Example: Replication → same DB on two servers)


2️⃣ Failover

If one server fails, automatically shift to another server.


3️⃣ Backups

Regular copies of the database saved safely.


4️⃣ Recovery mechanisms

Redo logs, undo logs, checkpoints help restore data.


5️⃣ Security protection

Database must keep working even if attacked.


⭐ One-line Exam Answer

Database Survivability is the ability of a DBMS to continue operating, maintain data availability, and 
recover quickly during failures, disasters, or attacks.
      
      `},{id:72,question:"72. Differences between Wait-Die and Wound-Wait.",answer:"",codeExample:`
✅ Difference: Wait-Die vs Wound-Wait (Easy Words)

| Wait-Die                                                                                 | Wound-Wait                                                                              |
| -----------------------------------------------------------------------------------------| ----------------------------------------------------------------------------------------|
| Older transaction waits, younger transaction dies                                        | Older transaction wounds (forces rollback) of younger transaction                       |
| If an older transaction wants a resource held by a younger, → it waits                   | If an older transaction wants a resource held by a younger, → younger is rolled back    |
| If a younger transaction wants a resource held by an older, → younger dies (rolled back) | If a younger transaction wants a resource held by an older, → younger waits             |
| Uses non-preemptive approach (older never kills younger, it just waits)                  | Uses preemptive approach (older kills younger to avoid deadlock)                        |
| Simple but may cause more rollbacks for young transactions                               | Faster and fewer rollbacks than Wait-Die                                                |
| Example: T1 (older) → T2 (younger). T1 waits. T2 dies if it requests T1’s resource.      | Example: T1 (older) → T2 (younger). T1 wounds T2. T2 waits if it requests T1’s resource.|



⭐ Easy Memory Trick

Wait-Die → Older WAITs, Younger DIES
Wound-Wait → Older WOUNDS younger


⭐ One-line Summary

Wait-Die:
Older waits, younger dies. (Non-preemptive)

Wound-Wait:
Older wounds younger, younger waits. (Preemptive)
      
      `},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1.1,question:"1 Study basic SQL statements.",answer:"\\nQuery to study CREATE table command \\nQuery to study ALTER table commands \\nQuery to study DROP table command \\nQuery to study RENAME table command \\nQuery to study INSERT command \\nQuery to study UPDATE command \\nQuery to study DELETE command",codeExample:`
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


      `},{id:9.9,question:"9. To create triggers on a student table so that whenever we INSERT, UPDATE, or DELETE, the old or new data is automatically copied into another table named Affect.",answer:"",codeExample:`
✅ 1. Algorithm (Very Easy Steps)


Algorithm for BEFORE INSERT Trigger

  When a new record is inserted into student,
  Before inserting the row,
  Copy the new values (:NEW) into Affect table.


Algorithm for BEFORE DELETE Trigger

  When a record is deleted from student,
  Before deleting the row,
  Copy the old values (:OLD) into Affect table.


Algorithm for BEFORE UPDATE Trigger

  When a record is updated in student,
  Before updating the row,
  Copy the old values (:OLD) into Affect table.


✅ 2. PL/SQL Program (Easy & Clean Code)

Step 1: Create student table

CREATE TABLE student (
    Id INT,
    Name VARCHAR2(20),
    Score INT
);


Step 2: Insert sample data

INSERT INTO student VALUES (1, 'Sam', 800);
INSERT INTO student VALUES (2, 'Ram', 699);
INSERT INTO student VALUES (3, 'Tom', 250);
INSERT INTO student VALUES (4, 'Om', 350);
INSERT INTO student VALUES (5, 'Jay', 750);



Step 3: Create Affect table

CREATE TABLE Affect (
    Id INT,
    Name VARCHAR2(20),
    Score INT
);


output:

✅ Initial Data in student Table

Before applying any triggers:

| Id | Name | Score |
| -- | ---- | ----- |
| 1  | Sam  | 800   |
| 2  | Ram  | 699   |
| 3  | Tom  | 250   |
| 4  | Om   | 350   |
| 5  | Jay  | 750   |



Affect

(Empty at the start)

| Id | Name | Score |
| -- | ---- | ----- |
| —  | —    | —     |


---------------------


✅ BEFORE INSERT Trigger

CREATE OR REPLACE TRIGGER trg_before_insert
BEFORE INSERT ON student
FOR EACH ROW
BEGIN
    INSERT INTO Affect (Id, Name, Score)
    VALUES (:NEW.Id, :NEW.Name, :NEW.Score);
END;
/



✅ 1. After INSERT Operation

INSERT INTO student VALUES (6, 'Arjun', 500);

Trigger copies NEW row to Affect


student

| Id | Name  | Score |
| -- | ----- | ----- |
| 1  | Sam   | 800   |
| 2  | Ram   | 699   |
| 3  | Tom   | 250   |
| 4  | Om    | 350   |
| 5  | Jay   | 750   |
| 6  | Arjun | 500   |


Affect
| Id | Name  | Score |
| -- | ----- | ----- |
| 6  | Arjun | 500   |



---------------------


✅ BEFORE DELETE Trigger

CREATE OR REPLACE TRIGGER trg_before_delete
BEFORE DELETE ON student
FOR EACH ROW
BEGIN
    INSERT INTO Affect (Id, Name, Score)
    VALUES (:OLD.Id, :OLD.Name, :OLD.Score);
END;
/



✅ 2. After DELETE Operation

DELETE FROM student WHERE Id = 3;

Trigger copies OLD (deleted) row into Affect.
Deleted row: (3, Tom, 250)


student

| Id | Name  | Score |
| -- | ----- | ----- |
| 1  | Sam   | 800   |
| 2  | Ram   | 699   |
| 4  | Om    | 350   |
| 5  | Jay   | 750   |
| 6  | Arjun | 500   |


Affect

| Id | Name  | Score |
| -- | ----- | ----- |
| 6  | Arjun | 500   |
| 3  | Tom   | 250   |


---------------------


✅ BEFORE UPDATE Trigger

CREATE OR REPLACE TRIGGER trg_before_update
BEFORE UPDATE ON student
FOR EACH ROW
BEGIN
    INSERT INTO Affect (Id, Name, Score)
    VALUES (:OLD.Id, :OLD.Name, :OLD.Score);
END;
/



✅ 3. After UPDATE Operation

UPDATE student SET Score = 900 WHERE Id = 5;


Old row before update: (5, Jay, 750)
Trigger inserts old value into Affect.


student

| Id | Name  | Score |           |
| -- | ----- | ----- | --------- |
| 1  | Sam   | 800   |           |
| 2  | Ram   | 699   |           |
| 4  | Om    | 350   |           |
| 5  | Jay   | 900   | ← Updated |
| 6  | Arjun | 500   |           |


Affect

| Id | Name  | Score |                           |
| -- | ----- | ----- | ------------------------- |
| 6  | Arjun | 500   |                           |
| 3  | Tom   | 250   |                           |
| 5  | Jay   | 750   | ← Old value before update |



---------------------

🎉 Final Output

Affect (History Table)

| Id | Name  | Score |
| -- | ----- | ----- |
| 6  | Arjun | 500   |
| 3  | Tom   | 250   |
| 5  | Jay   | 750   |



student (Current Data)

| Id | Name  | Score |
| -- | ----- | ----- |
| 1  | Sam   | 800   |
| 2  | Ram   | 699   |
| 4  | Om    | 350   |
| 5  | Jay   | 900   |
| 6  | Arjun | 500   |


`},{id:10.1,question:"10. To create a Package in PL/SQL that contains: Procedure → performs Addition Function → performs Multiplication Then call them in a PL/SQL block and display results.",answer:"",codeExample:`

✅ Algorithm (Very Simple)

Algorithm for Package

Create a package specification (only declaration):

  Declare a procedure add_numbers(x, y, result OUT)
  Declare a function multiply_numbers(x, y) RETURN NUMBER


Create a package body (implementation):

  Write code for add_numbers
  Write code for multiply_numbers


Write an anonymous PL/SQL block:

  Call add_numbers(5,7, sum_result)
  Call multiply_numbers(3,4)
  Display output using DBMS_OUTPUT.PUT_LINE



✅ PL/SQL Program (Clean & Simple)

1. Package Specification

CREATE OR REPLACE PACKAGE math_operations AS
    -- Procedure for addition
    PROCEDURE add_numbers(x NUMBER, y NUMBER, result OUT NUMBER);

    -- Function for multiplication
    FUNCTION multiply_numbers(x NUMBER, y NUMBER) RETURN NUMBER;
END math_operations;
/


2. Package Body

CREATE OR REPLACE PACKAGE BODY math_operations AS

    -- Procedure logic
    PROCEDURE add_numbers(x NUMBER, y NUMBER, result OUT NUMBER) IS
    BEGIN
        result := x + y;
    END add_numbers;

    -- Function logic
    FUNCTION multiply_numbers(x NUMBER, y NUMBER) RETURN NUMBER IS
    BEGIN
        RETURN x * y;
    END multiply_numbers;

END math_operations;
/


3. Test the Package

DECLARE
    sum_result NUMBER;
    product_result NUMBER;
BEGIN
    -- Call procedure
    math_operations.add_numbers(5, 7, sum_result);
    DBMS_OUTPUT.PUT_LINE('Sum Result: ' || sum_result);

    -- Call function
    product_result := math_operations.multiply_numbers(3, 4);
    DBMS_OUTPUT.PUT_LINE('Product Result: ' || product_result);
END;
/



✅ OUTPUT (Easy to Understand Table Form)

Procedure Output (Addition)

| Input X | Input Y | Output (Sum) |
| ------- | ------- | ------------ |
| 5       | 7       | 12           |


Function Output (Multiplication)

| Input X | Input Y | Output (Product) |
| ------- | ------- | ---------------- |
| 3       | 4       | 12               |



✔ Final DBMS_OUTPUT Screen (What You See)

Sum Result: 12
Product Result: 12


------------------------------------------------------------------------------------


✅ What is a PACKAGE in PL/SQL?

👉 A package is a folder (container) that stores related procedures and functions together.

Think like this:

📦 PACKAGE = A folder
Inside this folder, you keep things that belong to one topic.

Example:
You can create a package called math_operations
Inside it, you can keep:

add_numbers()
subtract_numbers()
multiply_numbers()
divide_numbers()


📌 Why use a package?

✔ 1. Organizes code
All related code is kept together.

✔ 2. Easy to manage
If you want to use math functions, you just call the package.

✔ 3. Better performance
When package is loaded once, all its procedures/functions stay in memory → faster execution.

✔ 4. Security
You can hide logic inside package body.



✅ What is a PROCEDURE?

👉 A procedure is a block of code that performs an action but DOES NOT return a value directly.
It can give output using OUT parameters.

Example:

  PROCEDURE add_numbers(x NUMBER, y NUMBER, result OUT NUMBER)


➡ It performs an operation (addition).
➡ But it does not return value directly.
➡ You get the value through the output variable result.

📌 Think:
Procedure = A function without a return value.

It is used when you want to do something, not calculate and return something.


❓ What is "procedural"?

"Procedural" means anything related to procedures.
When we say procedural programming:

👉 It means writing code in the form of procedures (blocks of instructions).

Example:

Procedures
Functions
Code blocks

All are part of procedural programming.


🆚 Difference Between Package & Procedure (Easy Table)

| Feature       | PACKAGE                                           | PROCEDURE               |
| ------------- | ------------------------------------------------- | ----------------------- |
| Meaning       | A container that stores many procedures/functions | A single block of code  |
| Returns Value | No                                                | No (uses OUT parameter) |
| Purpose       | Organize code                                     | Perform a task          |
| Contains      | Procedures, functions, variables                  | Only code for one task  |
| Example       | math_operations package                           | add_numbers procedure   |


🧠 Simple Real-Life Example

PACKAGE = Folder on your Computer
Inside you store many files.

PROCEDURE = One file inside the folder
That file does one specific job.
      
      `},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""}],p=w=>{de(N===w?null:w)};return Ie.jsxs("div",{className:"app-container",children:[Ie.jsx("h1",{children:"ADBMS Interview Questions"}),Ie.jsx("div",{className:"questions-container",children:W.map(w=>Ie.jsxs("div",{className:"question-item",children:[Ie.jsx("button",{className:`question-button ${N===w.id?"active":""}`,onClick:()=>p(w.id),children:w.question}),N===w.id&&Ie.jsxs("div",{className:"answer-container",children:[Ie.jsxs("div",{className:"answer",children:[Ie.jsx("h3",{children:"Answer:"}),Ie.jsx("p",{children:w.answer})]}),w.codeExample&&Ie.jsxs("div",{className:"code-example",children:[Ie.jsx("h3",{children:"Code Example:"}),Ie.jsx("pre",{children:Ie.jsx("code",{children:w.codeExample})})]})]})]},w.id))})]})}tp.createRoot(document.getElementById("root")).render(Ie.jsx(Df.StrictMode,{children:Ie.jsx(np,{})}));
