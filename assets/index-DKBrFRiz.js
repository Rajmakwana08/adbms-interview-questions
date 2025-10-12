(function(){const ml=document.createElement("link").relList;if(ml&&ml.supports&&ml.supports("modulepreload"))return;for(const C of document.querySelectorAll('link[rel="modulepreload"]'))h(C);new MutationObserver(C=>{for(const F of C)if(F.type==="childList")for(const yl of F.addedNodes)yl.tagName==="LINK"&&yl.rel==="modulepreload"&&h(yl)}).observe(document,{childList:!0,subtree:!0});function $(C){const F={};return C.integrity&&(F.integrity=C.integrity),C.referrerPolicy&&(F.referrerPolicy=C.referrerPolicy),C.crossOrigin==="use-credentials"?F.credentials="include":C.crossOrigin==="anonymous"?F.credentials="omit":F.credentials="same-origin",F}function h(C){if(C.ep)return;C.ep=!0;const F=$(C);fetch(C.href,F)}})();var ef={exports:{}},Eu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dr;function w0(){if(dr)return Eu;dr=1;var D=Symbol.for("react.transitional.element"),ml=Symbol.for("react.fragment");function $(h,C,F){var yl=null;if(F!==void 0&&(yl=""+F),C.key!==void 0&&(yl=""+C.key),"key"in C){F={};for(var Cl in C)Cl!=="key"&&(F[Cl]=C[Cl])}else F=C;return C=F.ref,{$$typeof:D,type:h,key:yl,ref:C!==void 0?C:null,props:F}}return Eu.Fragment=ml,Eu.jsx=$,Eu.jsxs=$,Eu}var yr;function F0(){return yr||(yr=1,ef.exports=w0()),ef.exports}var ql=F0(),uf={exports:{}},H={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hr;function W0(){if(hr)return H;hr=1;var D=Symbol.for("react.transitional.element"),ml=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),yl=Symbol.for("react.context"),Cl=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),O=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),sl=Symbol.iterator;function Fl(o){return o===null||typeof o!="object"?null:(o=sl&&o[sl]||o["@@iterator"],typeof o=="function"?o:null)}var jl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ll=Object.assign,Rt={};function Wl(o,T,N){this.props=o,this.context=T,this.refs=Rt,this.updater=N||jl}Wl.prototype.isReactComponent={},Wl.prototype.setState=function(o,T){if(typeof o!="object"&&typeof o!="function"&&o!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,o,T,"setState")},Wl.prototype.forceUpdate=function(o){this.updater.enqueueForceUpdate(this,o,"forceUpdate")};function Ft(){}Ft.prototype=Wl.prototype;function zl(o,T,N){this.props=o,this.context=T,this.refs=Rt,this.updater=N||jl}var it=zl.prototype=new Ft;it.constructor=zl,Ll(it,Wl.prototype),it.isPureReactComponent=!0;var Tt=Array.isArray;function Ql(){}var V={H:null,A:null,T:null,S:null},Yl=Object.prototype.hasOwnProperty;function Ot(o,T,N){var U=N.ref;return{$$typeof:D,type:o,key:T,ref:U!==void 0?U:null,props:N}}function xa(o,T){return Ot(o.type,T,o.props)}function pt(o){return typeof o=="object"&&o!==null&&o.$$typeof===D}function xl(o){var T={"=":"=0",":":"=2"};return"$"+o.replace(/[=:]/g,function(N){return T[N]})}var ba=/\/+/g;function Mt(o,T){return typeof o=="object"&&o!==null&&o.key!=null?xl(""+o.key):T.toString(36)}function St(o){switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:switch(typeof o.status=="string"?o.then(Ql,Ql):(o.status="pending",o.then(function(T){o.status==="pending"&&(o.status="fulfilled",o.value=T)},function(T){o.status==="pending"&&(o.status="rejected",o.reason=T)})),o.status){case"fulfilled":return o.value;case"rejected":throw o.reason}}throw o}function E(o,T,N,U,q){var Y=typeof o;(Y==="undefined"||Y==="boolean")&&(o=null);var I=!1;if(o===null)I=!0;else switch(Y){case"bigint":case"string":case"number":I=!0;break;case"object":switch(o.$$typeof){case D:case ml:I=!0;break;case k:return I=o._init,E(I(o._payload),T,N,U,q)}}if(I)return q=q(o),I=U===""?"."+Mt(o,0):U,Tt(q)?(N="",I!=null&&(N=I.replace(ba,"$&/")+"/"),E(q,T,N,"",function(Ae){return Ae})):q!=null&&(pt(q)&&(q=xa(q,N+(q.key==null||o&&o.key===q.key?"":(""+q.key).replace(ba,"$&/")+"/")+I)),T.push(q)),1;I=0;var Bl=U===""?".":U+":";if(Tt(o))for(var hl=0;hl<o.length;hl++)U=o[hl],Y=Bl+Mt(U,hl),I+=E(U,T,N,Y,q);else if(hl=Fl(o),typeof hl=="function")for(o=hl.call(o),hl=0;!(U=o.next()).done;)U=U.value,Y=Bl+Mt(U,hl++),I+=E(U,T,N,Y,q);else if(Y==="object"){if(typeof o.then=="function")return E(St(o),T,N,U,q);throw T=String(o),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return I}function p(o,T,N){if(o==null)return o;var U=[],q=0;return E(o,U,"","",function(Y){return T.call(N,Y,q++)}),U}function B(o){if(o._status===-1){var T=o._result;T=T(),T.then(function(N){(o._status===0||o._status===-1)&&(o._status=1,o._result=N)},function(N){(o._status===0||o._status===-1)&&(o._status=2,o._result=N)}),o._status===-1&&(o._status=0,o._result=T)}if(o._status===1)return o._result.default;throw o._result}var tl=typeof reportError=="function"?reportError:function(o){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof o=="object"&&o!==null&&typeof o.message=="string"?String(o.message):String(o),error:o});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",o);return}console.error(o)},nl={map:p,forEach:function(o,T,N){p(o,function(){T.apply(this,arguments)},N)},count:function(o){var T=0;return p(o,function(){T++}),T},toArray:function(o){return p(o,function(T){return T})||[]},only:function(o){if(!pt(o))throw Error("React.Children.only expected to receive a single React element child.");return o}};return H.Activity=L,H.Children=nl,H.Component=Wl,H.Fragment=$,H.Profiler=C,H.PureComponent=zl,H.StrictMode=h,H.Suspense=z,H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,H.__COMPILER_RUNTIME={__proto__:null,c:function(o){return V.H.useMemoCache(o)}},H.cache=function(o){return function(){return o.apply(null,arguments)}},H.cacheSignal=function(){return null},H.cloneElement=function(o,T,N){if(o==null)throw Error("The argument must be a React element, but you passed "+o+".");var U=Ll({},o.props),q=o.key;if(T!=null)for(Y in T.key!==void 0&&(q=""+T.key),T)!Yl.call(T,Y)||Y==="key"||Y==="__self"||Y==="__source"||Y==="ref"&&T.ref===void 0||(U[Y]=T[Y]);var Y=arguments.length-2;if(Y===1)U.children=N;else if(1<Y){for(var I=Array(Y),Bl=0;Bl<Y;Bl++)I[Bl]=arguments[Bl+2];U.children=I}return Ot(o.type,q,U)},H.createContext=function(o){return o={$$typeof:yl,_currentValue:o,_currentValue2:o,_threadCount:0,Provider:null,Consumer:null},o.Provider=o,o.Consumer={$$typeof:F,_context:o},o},H.createElement=function(o,T,N){var U,q={},Y=null;if(T!=null)for(U in T.key!==void 0&&(Y=""+T.key),T)Yl.call(T,U)&&U!=="key"&&U!=="__self"&&U!=="__source"&&(q[U]=T[U]);var I=arguments.length-2;if(I===1)q.children=N;else if(1<I){for(var Bl=Array(I),hl=0;hl<I;hl++)Bl[hl]=arguments[hl+2];q.children=Bl}if(o&&o.defaultProps)for(U in I=o.defaultProps,I)q[U]===void 0&&(q[U]=I[U]);return Ot(o,Y,q)},H.createRef=function(){return{current:null}},H.forwardRef=function(o){return{$$typeof:Cl,render:o}},H.isValidElement=pt,H.lazy=function(o){return{$$typeof:k,_payload:{_status:-1,_result:o},_init:B}},H.memo=function(o,T){return{$$typeof:O,type:o,compare:T===void 0?null:T}},H.startTransition=function(o){var T=V.T,N={};V.T=N;try{var U=o(),q=V.S;q!==null&&q(N,U),typeof U=="object"&&U!==null&&typeof U.then=="function"&&U.then(Ql,tl)}catch(Y){tl(Y)}finally{T!==null&&N.types!==null&&(T.types=N.types),V.T=T}},H.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},H.use=function(o){return V.H.use(o)},H.useActionState=function(o,T,N){return V.H.useActionState(o,T,N)},H.useCallback=function(o,T){return V.H.useCallback(o,T)},H.useContext=function(o){return V.H.useContext(o)},H.useDebugValue=function(){},H.useDeferredValue=function(o,T){return V.H.useDeferredValue(o,T)},H.useEffect=function(o,T){return V.H.useEffect(o,T)},H.useEffectEvent=function(o){return V.H.useEffectEvent(o)},H.useId=function(){return V.H.useId()},H.useImperativeHandle=function(o,T,N){return V.H.useImperativeHandle(o,T,N)},H.useInsertionEffect=function(o,T){return V.H.useInsertionEffect(o,T)},H.useLayoutEffect=function(o,T){return V.H.useLayoutEffect(o,T)},H.useMemo=function(o,T){return V.H.useMemo(o,T)},H.useOptimistic=function(o,T){return V.H.useOptimistic(o,T)},H.useReducer=function(o,T,N){return V.H.useReducer(o,T,N)},H.useRef=function(o){return V.H.useRef(o)},H.useState=function(o){return V.H.useState(o)},H.useSyncExternalStore=function(o,T,N){return V.H.useSyncExternalStore(o,T,N)},H.useTransition=function(){return V.H.useTransition()},H.version="19.2.0",H}var vr;function of(){return vr||(vr=1,uf.exports=W0()),uf.exports}var pr=of(),nf={exports:{}},gu={},cf={exports:{}},ff={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sr;function $0(){return Sr||(Sr=1,(function(D){function ml(E,p){var B=E.length;E.push(p);l:for(;0<B;){var tl=B-1>>>1,nl=E[tl];if(0<C(nl,p))E[tl]=p,E[B]=nl,B=tl;else break l}}function $(E){return E.length===0?null:E[0]}function h(E){if(E.length===0)return null;var p=E[0],B=E.pop();if(B!==p){E[0]=B;l:for(var tl=0,nl=E.length,o=nl>>>1;tl<o;){var T=2*(tl+1)-1,N=E[T],U=T+1,q=E[U];if(0>C(N,B))U<nl&&0>C(q,N)?(E[tl]=q,E[U]=B,tl=U):(E[tl]=N,E[T]=B,tl=T);else if(U<nl&&0>C(q,B))E[tl]=q,E[U]=B,tl=U;else break l}}return p}function C(E,p){var B=E.sortIndex-p.sortIndex;return B!==0?B:E.id-p.id}if(D.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var F=performance;D.unstable_now=function(){return F.now()}}else{var yl=Date,Cl=yl.now();D.unstable_now=function(){return yl.now()-Cl}}var z=[],O=[],k=1,L=null,sl=3,Fl=!1,jl=!1,Ll=!1,Rt=!1,Wl=typeof setTimeout=="function"?setTimeout:null,Ft=typeof clearTimeout=="function"?clearTimeout:null,zl=typeof setImmediate<"u"?setImmediate:null;function it(E){for(var p=$(O);p!==null;){if(p.callback===null)h(O);else if(p.startTime<=E)h(O),p.sortIndex=p.expirationTime,ml(z,p);else break;p=$(O)}}function Tt(E){if(Ll=!1,it(E),!jl)if($(z)!==null)jl=!0,Ql||(Ql=!0,xl());else{var p=$(O);p!==null&&St(Tt,p.startTime-E)}}var Ql=!1,V=-1,Yl=5,Ot=-1;function xa(){return Rt?!0:!(D.unstable_now()-Ot<Yl)}function pt(){if(Rt=!1,Ql){var E=D.unstable_now();Ot=E;var p=!0;try{l:{jl=!1,Ll&&(Ll=!1,Ft(V),V=-1),Fl=!0;var B=sl;try{t:{for(it(E),L=$(z);L!==null&&!(L.expirationTime>E&&xa());){var tl=L.callback;if(typeof tl=="function"){L.callback=null,sl=L.priorityLevel;var nl=tl(L.expirationTime<=E);if(E=D.unstable_now(),typeof nl=="function"){L.callback=nl,it(E),p=!0;break t}L===$(z)&&h(z),it(E)}else h(z);L=$(z)}if(L!==null)p=!0;else{var o=$(O);o!==null&&St(Tt,o.startTime-E),p=!1}}break l}finally{L=null,sl=B,Fl=!1}p=void 0}}finally{p?xl():Ql=!1}}}var xl;if(typeof zl=="function")xl=function(){zl(pt)};else if(typeof MessageChannel<"u"){var ba=new MessageChannel,Mt=ba.port2;ba.port1.onmessage=pt,xl=function(){Mt.postMessage(null)}}else xl=function(){Wl(pt,0)};function St(E,p){V=Wl(function(){E(D.unstable_now())},p)}D.unstable_IdlePriority=5,D.unstable_ImmediatePriority=1,D.unstable_LowPriority=4,D.unstable_NormalPriority=3,D.unstable_Profiling=null,D.unstable_UserBlockingPriority=2,D.unstable_cancelCallback=function(E){E.callback=null},D.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Yl=0<E?Math.floor(1e3/E):5},D.unstable_getCurrentPriorityLevel=function(){return sl},D.unstable_next=function(E){switch(sl){case 1:case 2:case 3:var p=3;break;default:p=sl}var B=sl;sl=p;try{return E()}finally{sl=B}},D.unstable_requestPaint=function(){Rt=!0},D.unstable_runWithPriority=function(E,p){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var B=sl;sl=E;try{return p()}finally{sl=B}},D.unstable_scheduleCallback=function(E,p,B){var tl=D.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?tl+B:tl):B=tl,E){case 1:var nl=-1;break;case 2:nl=250;break;case 5:nl=1073741823;break;case 4:nl=1e4;break;default:nl=5e3}return nl=B+nl,E={id:k++,callback:p,priorityLevel:E,startTime:B,expirationTime:nl,sortIndex:-1},B>tl?(E.sortIndex=B,ml(O,E),$(z)===null&&E===$(O)&&(Ll?(Ft(V),V=-1):Ll=!0,St(Tt,B-tl))):(E.sortIndex=nl,ml(z,E),jl||Fl||(jl=!0,Ql||(Ql=!0,xl()))),E},D.unstable_shouldYield=xa,D.unstable_wrapCallback=function(E){var p=sl;return function(){var B=sl;sl=p;try{return E.apply(this,arguments)}finally{sl=B}}}})(ff)),ff}var Er;function k0(){return Er||(Er=1,cf.exports=$0()),cf.exports}var sf={exports:{}},_l={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gr;function I0(){if(gr)return _l;gr=1;var D=of();function ml(z){var O="https://react.dev/errors/"+z;if(1<arguments.length){O+="?args[]="+encodeURIComponent(arguments[1]);for(var k=2;k<arguments.length;k++)O+="&args[]="+encodeURIComponent(arguments[k])}return"Minified React error #"+z+"; visit "+O+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function $(){}var h={d:{f:$,r:function(){throw Error(ml(522))},D:$,C:$,L:$,m:$,X:$,S:$,M:$},p:0,findDOMNode:null},C=Symbol.for("react.portal");function F(z,O,k){var L=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:C,key:L==null?null:""+L,children:z,containerInfo:O,implementation:k}}var yl=D.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Cl(z,O){if(z==="font")return"";if(typeof O=="string")return O==="use-credentials"?O:""}return _l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,_l.createPortal=function(z,O){var k=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!O||O.nodeType!==1&&O.nodeType!==9&&O.nodeType!==11)throw Error(ml(299));return F(z,O,null,k)},_l.flushSync=function(z){var O=yl.T,k=h.p;try{if(yl.T=null,h.p=2,z)return z()}finally{yl.T=O,h.p=k,h.d.f()}},_l.preconnect=function(z,O){typeof z=="string"&&(O?(O=O.crossOrigin,O=typeof O=="string"?O==="use-credentials"?O:"":void 0):O=null,h.d.C(z,O))},_l.prefetchDNS=function(z){typeof z=="string"&&h.d.D(z)},_l.preinit=function(z,O){if(typeof z=="string"&&O&&typeof O.as=="string"){var k=O.as,L=Cl(k,O.crossOrigin),sl=typeof O.integrity=="string"?O.integrity:void 0,Fl=typeof O.fetchPriority=="string"?O.fetchPriority:void 0;k==="style"?h.d.S(z,typeof O.precedence=="string"?O.precedence:void 0,{crossOrigin:L,integrity:sl,fetchPriority:Fl}):k==="script"&&h.d.X(z,{crossOrigin:L,integrity:sl,fetchPriority:Fl,nonce:typeof O.nonce=="string"?O.nonce:void 0})}},_l.preinitModule=function(z,O){if(typeof z=="string")if(typeof O=="object"&&O!==null){if(O.as==null||O.as==="script"){var k=Cl(O.as,O.crossOrigin);h.d.M(z,{crossOrigin:k,integrity:typeof O.integrity=="string"?O.integrity:void 0,nonce:typeof O.nonce=="string"?O.nonce:void 0})}}else O==null&&h.d.M(z)},_l.preload=function(z,O){if(typeof z=="string"&&typeof O=="object"&&O!==null&&typeof O.as=="string"){var k=O.as,L=Cl(k,O.crossOrigin);h.d.L(z,k,{crossOrigin:L,integrity:typeof O.integrity=="string"?O.integrity:void 0,nonce:typeof O.nonce=="string"?O.nonce:void 0,type:typeof O.type=="string"?O.type:void 0,fetchPriority:typeof O.fetchPriority=="string"?O.fetchPriority:void 0,referrerPolicy:typeof O.referrerPolicy=="string"?O.referrerPolicy:void 0,imageSrcSet:typeof O.imageSrcSet=="string"?O.imageSrcSet:void 0,imageSizes:typeof O.imageSizes=="string"?O.imageSizes:void 0,media:typeof O.media=="string"?O.media:void 0})}},_l.preloadModule=function(z,O){if(typeof z=="string")if(O){var k=Cl(O.as,O.crossOrigin);h.d.m(z,{as:typeof O.as=="string"&&O.as!=="script"?O.as:void 0,crossOrigin:k,integrity:typeof O.integrity=="string"?O.integrity:void 0})}else h.d.m(z)},_l.requestFormReset=function(z){h.d.r(z)},_l.unstable_batchedUpdates=function(z,O){return z(O)},_l.useFormState=function(z,O,k){return yl.H.useFormState(z,O,k)},_l.useFormStatus=function(){return yl.H.useHostTransitionStatus()},_l.version="19.2.0",_l}var br;function P0(){if(br)return sf.exports;br=1;function D(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D)}catch(ml){console.error(ml)}}return D(),sf.exports=I0(),sf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tr;function ly(){if(Tr)return gu;Tr=1;var D=k0(),ml=of(),$=P0();function h(l){var t="https://react.dev/errors/"+l;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+l+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function C(l){return!(!l||l.nodeType!==1&&l.nodeType!==9&&l.nodeType!==11)}function F(l){var t=l,a=l;if(l.alternate)for(;t.return;)t=t.return;else{l=t;do t=l,(t.flags&4098)!==0&&(a=t.return),l=t.return;while(l)}return t.tag===3?a:null}function yl(l){if(l.tag===13){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function Cl(l){if(l.tag===31){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function z(l){if(F(l)!==l)throw Error(h(188))}function O(l){var t=l.alternate;if(!t){if(t=F(l),t===null)throw Error(h(188));return t!==l?null:l}for(var a=l,e=t;;){var u=a.return;if(u===null)break;var n=u.alternate;if(n===null){if(e=u.return,e!==null){a=e;continue}break}if(u.child===n.child){for(n=u.child;n;){if(n===a)return z(u),l;if(n===e)return z(u),t;n=n.sibling}throw Error(h(188))}if(a.return!==e.return)a=u,e=n;else{for(var i=!1,c=u.child;c;){if(c===a){i=!0,a=u,e=n;break}if(c===e){i=!0,e=u,a=n;break}c=c.sibling}if(!i){for(c=n.child;c;){if(c===a){i=!0,a=n,e=u;break}if(c===e){i=!0,e=n,a=u;break}c=c.sibling}if(!i)throw Error(h(189))}}if(a.alternate!==e)throw Error(h(190))}if(a.tag!==3)throw Error(h(188));return a.stateNode.current===a?l:t}function k(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l;for(l=l.child;l!==null;){if(t=k(l),t!==null)return t;l=l.sibling}return null}var L=Object.assign,sl=Symbol.for("react.element"),Fl=Symbol.for("react.transitional.element"),jl=Symbol.for("react.portal"),Ll=Symbol.for("react.fragment"),Rt=Symbol.for("react.strict_mode"),Wl=Symbol.for("react.profiler"),Ft=Symbol.for("react.consumer"),zl=Symbol.for("react.context"),it=Symbol.for("react.forward_ref"),Tt=Symbol.for("react.suspense"),Ql=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),Yl=Symbol.for("react.lazy"),Ot=Symbol.for("react.activity"),xa=Symbol.for("react.memo_cache_sentinel"),pt=Symbol.iterator;function xl(l){return l===null||typeof l!="object"?null:(l=pt&&l[pt]||l["@@iterator"],typeof l=="function"?l:null)}var ba=Symbol.for("react.client.reference");function Mt(l){if(l==null)return null;if(typeof l=="function")return l.$$typeof===ba?null:l.displayName||l.name||null;if(typeof l=="string")return l;switch(l){case Ll:return"Fragment";case Wl:return"Profiler";case Rt:return"StrictMode";case Tt:return"Suspense";case Ql:return"SuspenseList";case Ot:return"Activity"}if(typeof l=="object")switch(l.$$typeof){case jl:return"Portal";case zl:return l.displayName||"Context";case Ft:return(l._context.displayName||"Context")+".Consumer";case it:var t=l.render;return l=l.displayName,l||(l=t.displayName||t.name||"",l=l!==""?"ForwardRef("+l+")":"ForwardRef"),l;case V:return t=l.displayName||null,t!==null?t:Mt(l.type)||"Memo";case Yl:t=l._payload,l=l._init;try{return Mt(l(t))}catch{}}return null}var St=Array.isArray,E=ml.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,p=$.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B={pending:!1,data:null,method:null,action:null},tl=[],nl=-1;function o(l){return{current:l}}function T(l){0>nl||(l.current=tl[nl],tl[nl]=null,nl--)}function N(l,t){nl++,tl[nl]=l.current,l.current=t}var U=o(null),q=o(null),Y=o(null),I=o(null);function Bl(l,t){switch(N(Y,t),N(q,l),N(U,null),t.nodeType){case 9:case 11:l=(l=t.documentElement)&&(l=l.namespaceURI)?qm(l):0;break;default:if(l=t.tagName,t=t.namespaceURI)t=qm(t),l=jm(t,l);else switch(l){case"svg":l=1;break;case"math":l=2;break;default:l=0}}T(U),N(U,l)}function hl(){T(U),T(q),T(Y)}function Ae(l){l.memoizedState!==null&&N(I,l);var t=U.current,a=jm(t,l.type);t!==a&&(N(q,l),N(U,a))}function bu(l){q.current===l&&(T(U),T(q)),I.current===l&&(T(I),yu._currentValue=B)}var Yn,mf;function Ta(l){if(Yn===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Yn=t&&t[1]||"",mf=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yn+l+mf}var xn=!1;function Gn(l,t){if(!l||xn)return"";xn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var e={DetermineComponentFrameRoot:function(){try{if(t){var b=function(){throw Error()};if(Object.defineProperty(b.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(b,[])}catch(v){var y=v}Reflect.construct(l,[],b)}else{try{b.call()}catch(v){y=v}l.call(b.prototype)}}else{try{throw Error()}catch(v){y=v}(b=l())&&typeof b.catch=="function"&&b.catch(function(){})}}catch(v){if(v&&y&&typeof v.stack=="string")return[v.stack,y.stack]}return[null,null]}};e.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(e.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=e.DetermineComponentFrameRoot(),i=n[0],c=n[1];if(i&&c){var f=i.split(`
`),d=c.split(`
`);for(u=e=0;e<f.length&&!f[e].includes("DetermineComponentFrameRoot");)e++;for(;u<d.length&&!d[u].includes("DetermineComponentFrameRoot");)u++;if(e===f.length||u===d.length)for(e=f.length-1,u=d.length-1;1<=e&&0<=u&&f[e]!==d[u];)u--;for(;1<=e&&0<=u;e--,u--)if(f[e]!==d[u]){if(e!==1||u!==1)do if(e--,u--,0>u||f[e]!==d[u]){var S=`
`+f[e].replace(" at new "," at ");return l.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",l.displayName)),S}while(1<=e&&0<=u);break}}}finally{xn=!1,Error.prepareStackTrace=a}return(a=l?l.displayName||l.name:"")?Ta(a):""}function Nr(l,t){switch(l.tag){case 26:case 27:case 5:return Ta(l.type);case 16:return Ta("Lazy");case 13:return l.child!==t&&t!==null?Ta("Suspense Fallback"):Ta("Suspense");case 19:return Ta("SuspenseList");case 0:case 15:return Gn(l.type,!1);case 11:return Gn(l.type.render,!1);case 1:return Gn(l.type,!0);case 31:return Ta("Activity");default:return""}}function rf(l){try{var t="",a=null;do t+=Nr(l,a),a=l,l=l.return;while(l);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Xn=Object.prototype.hasOwnProperty,Zn=D.unstable_scheduleCallback,Vn=D.unstable_cancelCallback,Ar=D.unstable_shouldYield,Dr=D.unstable_requestPaint,$l=D.unstable_now,Ur=D.unstable_getCurrentPriorityLevel,df=D.unstable_ImmediatePriority,yf=D.unstable_UserBlockingPriority,Tu=D.unstable_NormalPriority,Rr=D.unstable_LowPriority,hf=D.unstable_IdlePriority,Mr=D.log,zr=D.unstable_setDisableYieldValue,De=null,kl=null;function Wt(l){if(typeof Mr=="function"&&zr(l),kl&&typeof kl.setStrictMode=="function")try{kl.setStrictMode(De,l)}catch{}}var Il=Math.clz32?Math.clz32:Lr,_r=Math.log,Cr=Math.LN2;function Lr(l){return l>>>=0,l===0?32:31-(_r(l)/Cr|0)|0}var Ou=256,pu=262144,Nu=4194304;function Oa(l){var t=l&42;if(t!==0)return t;switch(l&-l){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return l&261888;case 262144:case 524288:case 1048576:case 2097152:return l&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return l&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return l}}function Au(l,t,a){var e=l.pendingLanes;if(e===0)return 0;var u=0,n=l.suspendedLanes,i=l.pingedLanes;l=l.warmLanes;var c=e&134217727;return c!==0?(e=c&~n,e!==0?u=Oa(e):(i&=c,i!==0?u=Oa(i):a||(a=c&~l,a!==0&&(u=Oa(a))))):(c=e&~n,c!==0?u=Oa(c):i!==0?u=Oa(i):a||(a=e&~l,a!==0&&(u=Oa(a)))),u===0?0:t!==0&&t!==u&&(t&n)===0&&(n=u&-u,a=t&-t,n>=a||n===32&&(a&4194048)!==0)?t:u}function Ue(l,t){return(l.pendingLanes&~(l.suspendedLanes&~l.pingedLanes)&t)===0}function Br(l,t){switch(l){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vf(){var l=Nu;return Nu<<=1,(Nu&62914560)===0&&(Nu=4194304),l}function Kn(l){for(var t=[],a=0;31>a;a++)t.push(l);return t}function Re(l,t){l.pendingLanes|=t,t!==268435456&&(l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0)}function Hr(l,t,a,e,u,n){var i=l.pendingLanes;l.pendingLanes=a,l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0,l.expiredLanes&=a,l.entangledLanes&=a,l.errorRecoveryDisabledLanes&=a,l.shellSuspendCounter=0;var c=l.entanglements,f=l.expirationTimes,d=l.hiddenUpdates;for(a=i&~a;0<a;){var S=31-Il(a),b=1<<S;c[S]=0,f[S]=-1;var y=d[S];if(y!==null)for(d[S]=null,S=0;S<y.length;S++){var v=y[S];v!==null&&(v.lane&=-536870913)}a&=~b}e!==0&&Sf(l,e,0),n!==0&&u===0&&l.tag!==0&&(l.suspendedLanes|=n&~(i&~t))}function Sf(l,t,a){l.pendingLanes|=t,l.suspendedLanes&=~t;var e=31-Il(t);l.entangledLanes|=t,l.entanglements[e]=l.entanglements[e]|1073741824|a&261930}function Ef(l,t){var a=l.entangledLanes|=t;for(l=l.entanglements;a;){var e=31-Il(a),u=1<<e;u&t|l[e]&t&&(l[e]|=t),a&=~u}}function gf(l,t){var a=t&-t;return a=(a&42)!==0?1:Jn(a),(a&(l.suspendedLanes|t))!==0?0:a}function Jn(l){switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=128;break;case 268435456:l=134217728;break;default:l=0}return l}function wn(l){return l&=-l,2<l?8<l?(l&134217727)!==0?32:268435456:8:2}function bf(){var l=p.p;return l!==0?l:(l=window.event,l===void 0?32:ir(l.type))}function Tf(l,t){var a=p.p;try{return p.p=l,t()}finally{p.p=a}}var $t=Math.random().toString(36).slice(2),Al="__reactFiber$"+$t,Gl="__reactProps$"+$t,Ga="__reactContainer$"+$t,Fn="__reactEvents$"+$t,qr="__reactListeners$"+$t,jr="__reactHandles$"+$t,Of="__reactResources$"+$t,Me="__reactMarker$"+$t;function Wn(l){delete l[Al],delete l[Gl],delete l[Fn],delete l[qr],delete l[jr]}function Xa(l){var t=l[Al];if(t)return t;for(var a=l.parentNode;a;){if(t=a[Ga]||a[Al]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(l=Vm(l);l!==null;){if(a=l[Al])return a;l=Vm(l)}return t}l=a,a=l.parentNode}return null}function Za(l){if(l=l[Al]||l[Ga]){var t=l.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return l}return null}function ze(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l.stateNode;throw Error(h(33))}function Va(l){var t=l[Of];return t||(t=l[Of]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function pl(l){l[Me]=!0}var pf=new Set,Nf={};function pa(l,t){Ka(l,t),Ka(l+"Capture",t)}function Ka(l,t){for(Nf[l]=t,l=0;l<t.length;l++)pf.add(t[l])}var Qr=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Af={},Df={};function Yr(l){return Xn.call(Df,l)?!0:Xn.call(Af,l)?!1:Qr.test(l)?Df[l]=!0:(Af[l]=!0,!1)}function Du(l,t,a){if(Yr(t))if(a===null)l.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":l.removeAttribute(t);return;case"boolean":var e=t.toLowerCase().slice(0,5);if(e!=="data-"&&e!=="aria-"){l.removeAttribute(t);return}}l.setAttribute(t,""+a)}}function Uu(l,t,a){if(a===null)l.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(t);return}l.setAttribute(t,""+a)}}function zt(l,t,a,e){if(e===null)l.removeAttribute(a);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(a);return}l.setAttributeNS(t,a,""+e)}}function ct(l){switch(typeof l){case"bigint":case"boolean":case"number":case"string":case"undefined":return l;case"object":return l;default:return""}}function Uf(l){var t=l.type;return(l=l.nodeName)&&l.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function xr(l,t,a){var e=Object.getOwnPropertyDescriptor(l.constructor.prototype,t);if(!l.hasOwnProperty(t)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var u=e.get,n=e.set;return Object.defineProperty(l,t,{configurable:!0,get:function(){return u.call(this)},set:function(i){a=""+i,n.call(this,i)}}),Object.defineProperty(l,t,{enumerable:e.enumerable}),{getValue:function(){return a},setValue:function(i){a=""+i},stopTracking:function(){l._valueTracker=null,delete l[t]}}}}function $n(l){if(!l._valueTracker){var t=Uf(l)?"checked":"value";l._valueTracker=xr(l,t,""+l[t])}}function Rf(l){if(!l)return!1;var t=l._valueTracker;if(!t)return!0;var a=t.getValue(),e="";return l&&(e=Uf(l)?l.checked?"true":"false":l.value),l=e,l!==a?(t.setValue(l),!0):!1}function Ru(l){if(l=l||(typeof document<"u"?document:void 0),typeof l>"u")return null;try{return l.activeElement||l.body}catch{return l.body}}var Gr=/[\n"\\]/g;function ft(l){return l.replace(Gr,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function kn(l,t,a,e,u,n,i,c){l.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?l.type=i:l.removeAttribute("type"),t!=null?i==="number"?(t===0&&l.value===""||l.value!=t)&&(l.value=""+ct(t)):l.value!==""+ct(t)&&(l.value=""+ct(t)):i!=="submit"&&i!=="reset"||l.removeAttribute("value"),t!=null?In(l,i,ct(t)):a!=null?In(l,i,ct(a)):e!=null&&l.removeAttribute("value"),u==null&&n!=null&&(l.defaultChecked=!!n),u!=null&&(l.checked=u&&typeof u!="function"&&typeof u!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?l.name=""+ct(c):l.removeAttribute("name")}function Mf(l,t,a,e,u,n,i,c){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(l.type=n),t!=null||a!=null){if(!(n!=="submit"&&n!=="reset"||t!=null)){$n(l);return}a=a!=null?""+ct(a):"",t=t!=null?""+ct(t):a,c||t===l.value||(l.value=t),l.defaultValue=t}e=e??u,e=typeof e!="function"&&typeof e!="symbol"&&!!e,l.checked=c?l.checked:!!e,l.defaultChecked=!!e,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(l.name=i),$n(l)}function In(l,t,a){t==="number"&&Ru(l.ownerDocument)===l||l.defaultValue===""+a||(l.defaultValue=""+a)}function Ja(l,t,a,e){if(l=l.options,t){t={};for(var u=0;u<a.length;u++)t["$"+a[u]]=!0;for(a=0;a<l.length;a++)u=t.hasOwnProperty("$"+l[a].value),l[a].selected!==u&&(l[a].selected=u),u&&e&&(l[a].defaultSelected=!0)}else{for(a=""+ct(a),t=null,u=0;u<l.length;u++){if(l[u].value===a){l[u].selected=!0,e&&(l[u].defaultSelected=!0);return}t!==null||l[u].disabled||(t=l[u])}t!==null&&(t.selected=!0)}}function zf(l,t,a){if(t!=null&&(t=""+ct(t),t!==l.value&&(l.value=t),a==null)){l.defaultValue!==t&&(l.defaultValue=t);return}l.defaultValue=a!=null?""+ct(a):""}function _f(l,t,a,e){if(t==null){if(e!=null){if(a!=null)throw Error(h(92));if(St(e)){if(1<e.length)throw Error(h(93));e=e[0]}a=e}a==null&&(a=""),t=a}a=ct(t),l.defaultValue=a,e=l.textContent,e===a&&e!==""&&e!==null&&(l.value=e),$n(l)}function wa(l,t){if(t){var a=l.firstChild;if(a&&a===l.lastChild&&a.nodeType===3){a.nodeValue=t;return}}l.textContent=t}var Xr=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Cf(l,t,a){var e=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?e?l.setProperty(t,""):t==="float"?l.cssFloat="":l[t]="":e?l.setProperty(t,a):typeof a!="number"||a===0||Xr.has(t)?t==="float"?l.cssFloat=a:l[t]=(""+a).trim():l[t]=a+"px"}function Lf(l,t,a){if(t!=null&&typeof t!="object")throw Error(h(62));if(l=l.style,a!=null){for(var e in a)!a.hasOwnProperty(e)||t!=null&&t.hasOwnProperty(e)||(e.indexOf("--")===0?l.setProperty(e,""):e==="float"?l.cssFloat="":l[e]="");for(var u in t)e=t[u],t.hasOwnProperty(u)&&a[u]!==e&&Cf(l,u,e)}else for(var n in t)t.hasOwnProperty(n)&&Cf(l,n,t[n])}function Pn(l){if(l.indexOf("-")===-1)return!1;switch(l){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zr=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vr=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Mu(l){return Vr.test(""+l)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":l}function _t(){}var li=null;function ti(l){return l=l.target||l.srcElement||window,l.correspondingUseElement&&(l=l.correspondingUseElement),l.nodeType===3?l.parentNode:l}var Fa=null,Wa=null;function Bf(l){var t=Za(l);if(t&&(l=t.stateNode)){var a=l[Gl]||null;l:switch(l=t.stateNode,t.type){case"input":if(kn(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=l;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ft(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var e=a[t];if(e!==l&&e.form===l.form){var u=e[Gl]||null;if(!u)throw Error(h(90));kn(e,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(t=0;t<a.length;t++)e=a[t],e.form===l.form&&Rf(e)}break l;case"textarea":zf(l,a.value,a.defaultValue);break l;case"select":t=a.value,t!=null&&Ja(l,!!a.multiple,t,!1)}}}var ai=!1;function Hf(l,t,a){if(ai)return l(t,a);ai=!0;try{var e=l(t);return e}finally{if(ai=!1,(Fa!==null||Wa!==null)&&(Sn(),Fa&&(t=Fa,l=Wa,Wa=Fa=null,Bf(t),l)))for(t=0;t<l.length;t++)Bf(l[t])}}function _e(l,t){var a=l.stateNode;if(a===null)return null;var e=a[Gl]||null;if(e===null)return null;a=e[t];l:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(l=l.type,e=!(l==="button"||l==="input"||l==="select"||l==="textarea")),l=!e;break l;default:l=!1}if(l)return null;if(a&&typeof a!="function")throw Error(h(231,t,typeof a));return a}var Ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ei=!1;if(Ct)try{var Ce={};Object.defineProperty(Ce,"passive",{get:function(){ei=!0}}),window.addEventListener("test",Ce,Ce),window.removeEventListener("test",Ce,Ce)}catch{ei=!1}var kt=null,ui=null,zu=null;function qf(){if(zu)return zu;var l,t=ui,a=t.length,e,u="value"in kt?kt.value:kt.textContent,n=u.length;for(l=0;l<a&&t[l]===u[l];l++);var i=a-l;for(e=1;e<=i&&t[a-e]===u[n-e];e++);return zu=u.slice(l,1<e?1-e:void 0)}function _u(l){var t=l.keyCode;return"charCode"in l?(l=l.charCode,l===0&&t===13&&(l=13)):l=t,l===10&&(l=13),32<=l||l===13?l:0}function Cu(){return!0}function jf(){return!1}function Xl(l){function t(a,e,u,n,i){this._reactName=a,this._targetInst=u,this.type=e,this.nativeEvent=n,this.target=i,this.currentTarget=null;for(var c in l)l.hasOwnProperty(c)&&(a=l[c],this[c]=a?a(n):n[c]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Cu:jf,this.isPropagationStopped=jf,this}return L(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Cu)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Cu)},persist:function(){},isPersistent:Cu}),t}var Na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(l){return l.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lu=Xl(Na),Le=L({},Na,{view:0,detail:0}),Kr=Xl(Le),ni,ii,Be,Bu=L({},Le,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fi,button:0,buttons:0,relatedTarget:function(l){return l.relatedTarget===void 0?l.fromElement===l.srcElement?l.toElement:l.fromElement:l.relatedTarget},movementX:function(l){return"movementX"in l?l.movementX:(l!==Be&&(Be&&l.type==="mousemove"?(ni=l.screenX-Be.screenX,ii=l.screenY-Be.screenY):ii=ni=0,Be=l),ni)},movementY:function(l){return"movementY"in l?l.movementY:ii}}),Qf=Xl(Bu),Jr=L({},Bu,{dataTransfer:0}),wr=Xl(Jr),Fr=L({},Le,{relatedTarget:0}),ci=Xl(Fr),Wr=L({},Na,{animationName:0,elapsedTime:0,pseudoElement:0}),$r=Xl(Wr),kr=L({},Na,{clipboardData:function(l){return"clipboardData"in l?l.clipboardData:window.clipboardData}}),Ir=Xl(kr),Pr=L({},Na,{data:0}),Yf=Xl(Pr),ld={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},td={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ad={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ed(l){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(l):(l=ad[l])?!!t[l]:!1}function fi(){return ed}var ud=L({},Le,{key:function(l){if(l.key){var t=ld[l.key]||l.key;if(t!=="Unidentified")return t}return l.type==="keypress"?(l=_u(l),l===13?"Enter":String.fromCharCode(l)):l.type==="keydown"||l.type==="keyup"?td[l.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fi,charCode:function(l){return l.type==="keypress"?_u(l):0},keyCode:function(l){return l.type==="keydown"||l.type==="keyup"?l.keyCode:0},which:function(l){return l.type==="keypress"?_u(l):l.type==="keydown"||l.type==="keyup"?l.keyCode:0}}),nd=Xl(ud),id=L({},Bu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xf=Xl(id),cd=L({},Le,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fi}),fd=Xl(cd),sd=L({},Na,{propertyName:0,elapsedTime:0,pseudoElement:0}),od=Xl(sd),md=L({},Bu,{deltaX:function(l){return"deltaX"in l?l.deltaX:"wheelDeltaX"in l?-l.wheelDeltaX:0},deltaY:function(l){return"deltaY"in l?l.deltaY:"wheelDeltaY"in l?-l.wheelDeltaY:"wheelDelta"in l?-l.wheelDelta:0},deltaZ:0,deltaMode:0}),rd=Xl(md),dd=L({},Na,{newState:0,oldState:0}),yd=Xl(dd),hd=[9,13,27,32],si=Ct&&"CompositionEvent"in window,He=null;Ct&&"documentMode"in document&&(He=document.documentMode);var vd=Ct&&"TextEvent"in window&&!He,Gf=Ct&&(!si||He&&8<He&&11>=He),Xf=" ",Zf=!1;function Vf(l,t){switch(l){case"keyup":return hd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kf(l){return l=l.detail,typeof l=="object"&&"data"in l?l.data:null}var $a=!1;function Sd(l,t){switch(l){case"compositionend":return Kf(t);case"keypress":return t.which!==32?null:(Zf=!0,Xf);case"textInput":return l=t.data,l===Xf&&Zf?null:l;default:return null}}function Ed(l,t){if($a)return l==="compositionend"||!si&&Vf(l,t)?(l=qf(),zu=ui=kt=null,$a=!1,l):null;switch(l){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gf&&t.locale!=="ko"?null:t.data;default:return null}}var gd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jf(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t==="input"?!!gd[l.type]:t==="textarea"}function wf(l,t,a,e){Fa?Wa?Wa.push(e):Wa=[e]:Fa=e,t=Nn(t,"onChange"),0<t.length&&(a=new Lu("onChange","change",null,a,e),l.push({event:a,listeners:t}))}var qe=null,je=null;function bd(l){zm(l,0)}function Hu(l){var t=ze(l);if(Rf(t))return l}function Ff(l,t){if(l==="change")return t}var Wf=!1;if(Ct){var oi;if(Ct){var mi="oninput"in document;if(!mi){var $f=document.createElement("div");$f.setAttribute("oninput","return;"),mi=typeof $f.oninput=="function"}oi=mi}else oi=!1;Wf=oi&&(!document.documentMode||9<document.documentMode)}function kf(){qe&&(qe.detachEvent("onpropertychange",If),je=qe=null)}function If(l){if(l.propertyName==="value"&&Hu(je)){var t=[];wf(t,je,l,ti(l)),Hf(bd,t)}}function Td(l,t,a){l==="focusin"?(kf(),qe=t,je=a,qe.attachEvent("onpropertychange",If)):l==="focusout"&&kf()}function Od(l){if(l==="selectionchange"||l==="keyup"||l==="keydown")return Hu(je)}function pd(l,t){if(l==="click")return Hu(t)}function Nd(l,t){if(l==="input"||l==="change")return Hu(t)}function Ad(l,t){return l===t&&(l!==0||1/l===1/t)||l!==l&&t!==t}var Pl=typeof Object.is=="function"?Object.is:Ad;function Qe(l,t){if(Pl(l,t))return!0;if(typeof l!="object"||l===null||typeof t!="object"||t===null)return!1;var a=Object.keys(l),e=Object.keys(t);if(a.length!==e.length)return!1;for(e=0;e<a.length;e++){var u=a[e];if(!Xn.call(t,u)||!Pl(l[u],t[u]))return!1}return!0}function Pf(l){for(;l&&l.firstChild;)l=l.firstChild;return l}function ls(l,t){var a=Pf(l);l=0;for(var e;a;){if(a.nodeType===3){if(e=l+a.textContent.length,l<=t&&e>=t)return{node:a,offset:t-l};l=e}l:{for(;a;){if(a.nextSibling){a=a.nextSibling;break l}a=a.parentNode}a=void 0}a=Pf(a)}}function ts(l,t){return l&&t?l===t?!0:l&&l.nodeType===3?!1:t&&t.nodeType===3?ts(l,t.parentNode):"contains"in l?l.contains(t):l.compareDocumentPosition?!!(l.compareDocumentPosition(t)&16):!1:!1}function as(l){l=l!=null&&l.ownerDocument!=null&&l.ownerDocument.defaultView!=null?l.ownerDocument.defaultView:window;for(var t=Ru(l.document);t instanceof l.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)l=t.contentWindow;else break;t=Ru(l.document)}return t}function ri(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t&&(t==="input"&&(l.type==="text"||l.type==="search"||l.type==="tel"||l.type==="url"||l.type==="password")||t==="textarea"||l.contentEditable==="true")}var Dd=Ct&&"documentMode"in document&&11>=document.documentMode,ka=null,di=null,Ye=null,yi=!1;function es(l,t,a){var e=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;yi||ka==null||ka!==Ru(e)||(e=ka,"selectionStart"in e&&ri(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),Ye&&Qe(Ye,e)||(Ye=e,e=Nn(di,"onSelect"),0<e.length&&(t=new Lu("onSelect","select",null,t,a),l.push({event:t,listeners:e}),t.target=ka)))}function Aa(l,t){var a={};return a[l.toLowerCase()]=t.toLowerCase(),a["Webkit"+l]="webkit"+t,a["Moz"+l]="moz"+t,a}var Ia={animationend:Aa("Animation","AnimationEnd"),animationiteration:Aa("Animation","AnimationIteration"),animationstart:Aa("Animation","AnimationStart"),transitionrun:Aa("Transition","TransitionRun"),transitionstart:Aa("Transition","TransitionStart"),transitioncancel:Aa("Transition","TransitionCancel"),transitionend:Aa("Transition","TransitionEnd")},hi={},us={};Ct&&(us=document.createElement("div").style,"AnimationEvent"in window||(delete Ia.animationend.animation,delete Ia.animationiteration.animation,delete Ia.animationstart.animation),"TransitionEvent"in window||delete Ia.transitionend.transition);function Da(l){if(hi[l])return hi[l];if(!Ia[l])return l;var t=Ia[l],a;for(a in t)if(t.hasOwnProperty(a)&&a in us)return hi[l]=t[a];return l}var ns=Da("animationend"),is=Da("animationiteration"),cs=Da("animationstart"),Ud=Da("transitionrun"),Rd=Da("transitionstart"),Md=Da("transitioncancel"),fs=Da("transitionend"),ss=new Map,vi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vi.push("scrollEnd");function Et(l,t){ss.set(l,t),pa(t,[l])}var qu=typeof reportError=="function"?reportError:function(l){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof l=="object"&&l!==null&&typeof l.message=="string"?String(l.message):String(l),error:l});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",l);return}console.error(l)},st=[],Pa=0,Si=0;function ju(){for(var l=Pa,t=Si=Pa=0;t<l;){var a=st[t];st[t++]=null;var e=st[t];st[t++]=null;var u=st[t];st[t++]=null;var n=st[t];if(st[t++]=null,e!==null&&u!==null){var i=e.pending;i===null?u.next=u:(u.next=i.next,i.next=u),e.pending=u}n!==0&&os(a,u,n)}}function Qu(l,t,a,e){st[Pa++]=l,st[Pa++]=t,st[Pa++]=a,st[Pa++]=e,Si|=e,l.lanes|=e,l=l.alternate,l!==null&&(l.lanes|=e)}function Ei(l,t,a,e){return Qu(l,t,a,e),Yu(l)}function Ua(l,t){return Qu(l,null,null,t),Yu(l)}function os(l,t,a){l.lanes|=a;var e=l.alternate;e!==null&&(e.lanes|=a);for(var u=!1,n=l.return;n!==null;)n.childLanes|=a,e=n.alternate,e!==null&&(e.childLanes|=a),n.tag===22&&(l=n.stateNode,l===null||l._visibility&1||(u=!0)),l=n,n=n.return;return l.tag===3?(n=l.stateNode,u&&t!==null&&(u=31-Il(a),l=n.hiddenUpdates,e=l[u],e===null?l[u]=[t]:e.push(t),t.lane=a|536870912),n):null}function Yu(l){if(50<cu)throw cu=0,Uc=null,Error(h(185));for(var t=l.return;t!==null;)l=t,t=l.return;return l.tag===3?l.stateNode:null}var le={};function zd(l,t,a,e){this.tag=l,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(l,t,a,e){return new zd(l,t,a,e)}function gi(l){return l=l.prototype,!(!l||!l.isReactComponent)}function Lt(l,t){var a=l.alternate;return a===null?(a=lt(l.tag,t,l.key,l.mode),a.elementType=l.elementType,a.type=l.type,a.stateNode=l.stateNode,a.alternate=l,l.alternate=a):(a.pendingProps=t,a.type=l.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=l.flags&65011712,a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,t=l.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=l.sibling,a.index=l.index,a.ref=l.ref,a.refCleanup=l.refCleanup,a}function ms(l,t){l.flags&=65011714;var a=l.alternate;return a===null?(l.childLanes=0,l.lanes=t,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,t=a.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),l}function xu(l,t,a,e,u,n){var i=0;if(e=l,typeof l=="function")gi(l)&&(i=1);else if(typeof l=="string")i=H0(l,a,U.current)?26:l==="html"||l==="head"||l==="body"?27:5;else l:switch(l){case Ot:return l=lt(31,a,t,u),l.elementType=Ot,l.lanes=n,l;case Ll:return Ra(a.children,u,n,t);case Rt:i=8,u|=24;break;case Wl:return l=lt(12,a,t,u|2),l.elementType=Wl,l.lanes=n,l;case Tt:return l=lt(13,a,t,u),l.elementType=Tt,l.lanes=n,l;case Ql:return l=lt(19,a,t,u),l.elementType=Ql,l.lanes=n,l;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case zl:i=10;break l;case Ft:i=9;break l;case it:i=11;break l;case V:i=14;break l;case Yl:i=16,e=null;break l}i=29,a=Error(h(130,l===null?"null":typeof l,"")),e=null}return t=lt(i,a,t,u),t.elementType=l,t.type=e,t.lanes=n,t}function Ra(l,t,a,e){return l=lt(7,l,e,t),l.lanes=a,l}function bi(l,t,a){return l=lt(6,l,null,t),l.lanes=a,l}function rs(l){var t=lt(18,null,null,0);return t.stateNode=l,t}function Ti(l,t,a){return t=lt(4,l.children!==null?l.children:[],l.key,t),t.lanes=a,t.stateNode={containerInfo:l.containerInfo,pendingChildren:null,implementation:l.implementation},t}var ds=new WeakMap;function ot(l,t){if(typeof l=="object"&&l!==null){var a=ds.get(l);return a!==void 0?a:(t={value:l,source:t,stack:rf(t)},ds.set(l,t),t)}return{value:l,source:t,stack:rf(t)}}var te=[],ae=0,Gu=null,xe=0,mt=[],rt=0,It=null,Nt=1,At="";function Bt(l,t){te[ae++]=xe,te[ae++]=Gu,Gu=l,xe=t}function ys(l,t,a){mt[rt++]=Nt,mt[rt++]=At,mt[rt++]=It,It=l;var e=Nt;l=At;var u=32-Il(e)-1;e&=~(1<<u),a+=1;var n=32-Il(t)+u;if(30<n){var i=u-u%5;n=(e&(1<<i)-1).toString(32),e>>=i,u-=i,Nt=1<<32-Il(t)+u|a<<u|e,At=n+l}else Nt=1<<n|a<<u|e,At=l}function Oi(l){l.return!==null&&(Bt(l,1),ys(l,1,0))}function pi(l){for(;l===Gu;)Gu=te[--ae],te[ae]=null,xe=te[--ae],te[ae]=null;for(;l===It;)It=mt[--rt],mt[rt]=null,At=mt[--rt],mt[rt]=null,Nt=mt[--rt],mt[rt]=null}function hs(l,t){mt[rt++]=Nt,mt[rt++]=At,mt[rt++]=It,Nt=t.id,At=t.overflow,It=l}var Dl=null,cl=null,K=!1,Pt=null,dt=!1,Ni=Error(h(519));function la(l){var t=Error(h(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ge(ot(t,l)),Ni}function vs(l){var t=l.stateNode,a=l.type,e=l.memoizedProps;switch(t[Al]=l,t[Gl]=e,a){case"dialog":G("cancel",t),G("close",t);break;case"iframe":case"object":case"embed":G("load",t);break;case"video":case"audio":for(a=0;a<su.length;a++)G(su[a],t);break;case"source":G("error",t);break;case"img":case"image":case"link":G("error",t),G("load",t);break;case"details":G("toggle",t);break;case"input":G("invalid",t),Mf(t,e.value,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name,!0);break;case"select":G("invalid",t);break;case"textarea":G("invalid",t),_f(t,e.value,e.defaultValue,e.children)}a=e.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||e.suppressHydrationWarning===!0||Bm(t.textContent,a)?(e.popover!=null&&(G("beforetoggle",t),G("toggle",t)),e.onScroll!=null&&G("scroll",t),e.onScrollEnd!=null&&G("scrollend",t),e.onClick!=null&&(t.onclick=_t),t=!0):t=!1,t||la(l,!0)}function Ss(l){for(Dl=l.return;Dl;)switch(Dl.tag){case 5:case 31:case 13:dt=!1;return;case 27:case 3:dt=!0;return;default:Dl=Dl.return}}function ee(l){if(l!==Dl)return!1;if(!K)return Ss(l),K=!0,!1;var t=l.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=l.type,a=!(a!=="form"&&a!=="button")||Xc(l.type,l.memoizedProps)),a=!a),a&&cl&&la(l),Ss(l),t===13){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(h(317));cl=Zm(l)}else if(t===31){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(h(317));cl=Zm(l)}else t===27?(t=cl,ya(l.type)?(l=wc,wc=null,cl=l):cl=t):cl=Dl?ht(l.stateNode.nextSibling):null;return!0}function Ma(){cl=Dl=null,K=!1}function Ai(){var l=Pt;return l!==null&&(Jl===null?Jl=l:Jl.push.apply(Jl,l),Pt=null),l}function Ge(l){Pt===null?Pt=[l]:Pt.push(l)}var Di=o(null),za=null,Ht=null;function ta(l,t,a){N(Di,t._currentValue),t._currentValue=a}function qt(l){l._currentValue=Di.current,T(Di)}function Ui(l,t,a){for(;l!==null;){var e=l.alternate;if((l.childLanes&t)!==t?(l.childLanes|=t,e!==null&&(e.childLanes|=t)):e!==null&&(e.childLanes&t)!==t&&(e.childLanes|=t),l===a)break;l=l.return}}function Ri(l,t,a,e){var u=l.child;for(u!==null&&(u.return=l);u!==null;){var n=u.dependencies;if(n!==null){var i=u.child;n=n.firstContext;l:for(;n!==null;){var c=n;n=u;for(var f=0;f<t.length;f++)if(c.context===t[f]){n.lanes|=a,c=n.alternate,c!==null&&(c.lanes|=a),Ui(n.return,a,l),e||(i=null);break l}n=c.next}}else if(u.tag===18){if(i=u.return,i===null)throw Error(h(341));i.lanes|=a,n=i.alternate,n!==null&&(n.lanes|=a),Ui(i,a,l),i=null}else i=u.child;if(i!==null)i.return=u;else for(i=u;i!==null;){if(i===l){i=null;break}if(u=i.sibling,u!==null){u.return=i.return,i=u;break}i=i.return}u=i}}function ue(l,t,a,e){l=null;for(var u=t,n=!1;u!==null;){if(!n){if((u.flags&524288)!==0)n=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var i=u.alternate;if(i===null)throw Error(h(387));if(i=i.memoizedProps,i!==null){var c=u.type;Pl(u.pendingProps.value,i.value)||(l!==null?l.push(c):l=[c])}}else if(u===I.current){if(i=u.alternate,i===null)throw Error(h(387));i.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(l!==null?l.push(yu):l=[yu])}u=u.return}l!==null&&Ri(t,l,a,e),t.flags|=262144}function Xu(l){for(l=l.firstContext;l!==null;){if(!Pl(l.context._currentValue,l.memoizedValue))return!0;l=l.next}return!1}function _a(l){za=l,Ht=null,l=l.dependencies,l!==null&&(l.firstContext=null)}function Ul(l){return Es(za,l)}function Zu(l,t){return za===null&&_a(l),Es(l,t)}function Es(l,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Ht===null){if(l===null)throw Error(h(308));Ht=t,l.dependencies={lanes:0,firstContext:t},l.flags|=524288}else Ht=Ht.next=t;return a}var _d=typeof AbortController<"u"?AbortController:function(){var l=[],t=this.signal={aborted:!1,addEventListener:function(a,e){l.push(e)}};this.abort=function(){t.aborted=!0,l.forEach(function(a){return a()})}},Cd=D.unstable_scheduleCallback,Ld=D.unstable_NormalPriority,El={$$typeof:zl,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mi(){return{controller:new _d,data:new Map,refCount:0}}function Xe(l){l.refCount--,l.refCount===0&&Cd(Ld,function(){l.controller.abort()})}var Ze=null,zi=0,ne=0,ie=null;function Bd(l,t){if(Ze===null){var a=Ze=[];zi=0,ne=Lc(),ie={status:"pending",value:void 0,then:function(e){a.push(e)}}}return zi++,t.then(gs,gs),t}function gs(){if(--zi===0&&Ze!==null){ie!==null&&(ie.status="fulfilled");var l=Ze;Ze=null,ne=0,ie=null;for(var t=0;t<l.length;t++)(0,l[t])()}}function Hd(l,t){var a=[],e={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return l.then(function(){e.status="fulfilled",e.value=t;for(var u=0;u<a.length;u++)(0,a[u])(t)},function(u){for(e.status="rejected",e.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),e}var bs=E.S;E.S=function(l,t){um=$l(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Bd(l,t),bs!==null&&bs(l,t)};var Ca=o(null);function _i(){var l=Ca.current;return l!==null?l:il.pooledCache}function Vu(l,t){t===null?N(Ca,Ca.current):N(Ca,t.pool)}function Ts(){var l=_i();return l===null?null:{parent:El._currentValue,pool:l}}var ce=Error(h(460)),Ci=Error(h(474)),Ku=Error(h(542)),Ju={then:function(){}};function Os(l){return l=l.status,l==="fulfilled"||l==="rejected"}function ps(l,t,a){switch(a=l[a],a===void 0?l.push(t):a!==t&&(t.then(_t,_t),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,As(l),l;default:if(typeof t.status=="string")t.then(_t,_t);else{if(l=il,l!==null&&100<l.shellSuspendCounter)throw Error(h(482));l=t,l.status="pending",l.then(function(e){if(t.status==="pending"){var u=t;u.status="fulfilled",u.value=e}},function(e){if(t.status==="pending"){var u=t;u.status="rejected",u.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,As(l),l}throw Ba=t,ce}}function La(l){try{var t=l._init;return t(l._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ba=a,ce):a}}var Ba=null;function Ns(){if(Ba===null)throw Error(h(459));var l=Ba;return Ba=null,l}function As(l){if(l===ce||l===Ku)throw Error(h(483))}var fe=null,Ve=0;function wu(l){var t=Ve;return Ve+=1,fe===null&&(fe=[]),ps(fe,l,t)}function Ke(l,t){t=t.props.ref,l.ref=t!==void 0?t:null}function Fu(l,t){throw t.$$typeof===sl?Error(h(525)):(l=Object.prototype.toString.call(t),Error(h(31,l==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":l)))}function Ds(l){function t(m,s){if(l){var r=m.deletions;r===null?(m.deletions=[s],m.flags|=16):r.push(s)}}function a(m,s){if(!l)return null;for(;s!==null;)t(m,s),s=s.sibling;return null}function e(m){for(var s=new Map;m!==null;)m.key!==null?s.set(m.key,m):s.set(m.index,m),m=m.sibling;return s}function u(m,s){return m=Lt(m,s),m.index=0,m.sibling=null,m}function n(m,s,r){return m.index=r,l?(r=m.alternate,r!==null?(r=r.index,r<s?(m.flags|=67108866,s):r):(m.flags|=67108866,s)):(m.flags|=1048576,s)}function i(m){return l&&m.alternate===null&&(m.flags|=67108866),m}function c(m,s,r,g){return s===null||s.tag!==6?(s=bi(r,m.mode,g),s.return=m,s):(s=u(s,r),s.return=m,s)}function f(m,s,r,g){var M=r.type;return M===Ll?S(m,s,r.props.children,g,r.key):s!==null&&(s.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Yl&&La(M)===s.type)?(s=u(s,r.props),Ke(s,r),s.return=m,s):(s=xu(r.type,r.key,r.props,null,m.mode,g),Ke(s,r),s.return=m,s)}function d(m,s,r,g){return s===null||s.tag!==4||s.stateNode.containerInfo!==r.containerInfo||s.stateNode.implementation!==r.implementation?(s=Ti(r,m.mode,g),s.return=m,s):(s=u(s,r.children||[]),s.return=m,s)}function S(m,s,r,g,M){return s===null||s.tag!==7?(s=Ra(r,m.mode,g,M),s.return=m,s):(s=u(s,r),s.return=m,s)}function b(m,s,r){if(typeof s=="string"&&s!==""||typeof s=="number"||typeof s=="bigint")return s=bi(""+s,m.mode,r),s.return=m,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case Fl:return r=xu(s.type,s.key,s.props,null,m.mode,r),Ke(r,s),r.return=m,r;case jl:return s=Ti(s,m.mode,r),s.return=m,s;case Yl:return s=La(s),b(m,s,r)}if(St(s)||xl(s))return s=Ra(s,m.mode,r,null),s.return=m,s;if(typeof s.then=="function")return b(m,wu(s),r);if(s.$$typeof===zl)return b(m,Zu(m,s),r);Fu(m,s)}return null}function y(m,s,r,g){var M=s!==null?s.key:null;if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return M!==null?null:c(m,s,""+r,g);if(typeof r=="object"&&r!==null){switch(r.$$typeof){case Fl:return r.key===M?f(m,s,r,g):null;case jl:return r.key===M?d(m,s,r,g):null;case Yl:return r=La(r),y(m,s,r,g)}if(St(r)||xl(r))return M!==null?null:S(m,s,r,g,null);if(typeof r.then=="function")return y(m,s,wu(r),g);if(r.$$typeof===zl)return y(m,s,Zu(m,r),g);Fu(m,r)}return null}function v(m,s,r,g,M){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return m=m.get(r)||null,c(s,m,""+g,M);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Fl:return m=m.get(g.key===null?r:g.key)||null,f(s,m,g,M);case jl:return m=m.get(g.key===null?r:g.key)||null,d(s,m,g,M);case Yl:return g=La(g),v(m,s,r,g,M)}if(St(g)||xl(g))return m=m.get(r)||null,S(s,m,g,M,null);if(typeof g.then=="function")return v(m,s,r,wu(g),M);if(g.$$typeof===zl)return v(m,s,r,Zu(s,g),M);Fu(s,g)}return null}function A(m,s,r,g){for(var M=null,J=null,R=s,Q=s=0,Z=null;R!==null&&Q<r.length;Q++){R.index>Q?(Z=R,R=null):Z=R.sibling;var w=y(m,R,r[Q],g);if(w===null){R===null&&(R=Z);break}l&&R&&w.alternate===null&&t(m,R),s=n(w,s,Q),J===null?M=w:J.sibling=w,J=w,R=Z}if(Q===r.length)return a(m,R),K&&Bt(m,Q),M;if(R===null){for(;Q<r.length;Q++)R=b(m,r[Q],g),R!==null&&(s=n(R,s,Q),J===null?M=R:J.sibling=R,J=R);return K&&Bt(m,Q),M}for(R=e(R);Q<r.length;Q++)Z=v(R,m,Q,r[Q],g),Z!==null&&(l&&Z.alternate!==null&&R.delete(Z.key===null?Q:Z.key),s=n(Z,s,Q),J===null?M=Z:J.sibling=Z,J=Z);return l&&R.forEach(function(ga){return t(m,ga)}),K&&Bt(m,Q),M}function _(m,s,r,g){if(r==null)throw Error(h(151));for(var M=null,J=null,R=s,Q=s=0,Z=null,w=r.next();R!==null&&!w.done;Q++,w=r.next()){R.index>Q?(Z=R,R=null):Z=R.sibling;var ga=y(m,R,w.value,g);if(ga===null){R===null&&(R=Z);break}l&&R&&ga.alternate===null&&t(m,R),s=n(ga,s,Q),J===null?M=ga:J.sibling=ga,J=ga,R=Z}if(w.done)return a(m,R),K&&Bt(m,Q),M;if(R===null){for(;!w.done;Q++,w=r.next())w=b(m,w.value,g),w!==null&&(s=n(w,s,Q),J===null?M=w:J.sibling=w,J=w);return K&&Bt(m,Q),M}for(R=e(R);!w.done;Q++,w=r.next())w=v(R,m,Q,w.value,g),w!==null&&(l&&w.alternate!==null&&R.delete(w.key===null?Q:w.key),s=n(w,s,Q),J===null?M=w:J.sibling=w,J=w);return l&&R.forEach(function(J0){return t(m,J0)}),K&&Bt(m,Q),M}function ul(m,s,r,g){if(typeof r=="object"&&r!==null&&r.type===Ll&&r.key===null&&(r=r.props.children),typeof r=="object"&&r!==null){switch(r.$$typeof){case Fl:l:{for(var M=r.key;s!==null;){if(s.key===M){if(M=r.type,M===Ll){if(s.tag===7){a(m,s.sibling),g=u(s,r.props.children),g.return=m,m=g;break l}}else if(s.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Yl&&La(M)===s.type){a(m,s.sibling),g=u(s,r.props),Ke(g,r),g.return=m,m=g;break l}a(m,s);break}else t(m,s);s=s.sibling}r.type===Ll?(g=Ra(r.props.children,m.mode,g,r.key),g.return=m,m=g):(g=xu(r.type,r.key,r.props,null,m.mode,g),Ke(g,r),g.return=m,m=g)}return i(m);case jl:l:{for(M=r.key;s!==null;){if(s.key===M)if(s.tag===4&&s.stateNode.containerInfo===r.containerInfo&&s.stateNode.implementation===r.implementation){a(m,s.sibling),g=u(s,r.children||[]),g.return=m,m=g;break l}else{a(m,s);break}else t(m,s);s=s.sibling}g=Ti(r,m.mode,g),g.return=m,m=g}return i(m);case Yl:return r=La(r),ul(m,s,r,g)}if(St(r))return A(m,s,r,g);if(xl(r)){if(M=xl(r),typeof M!="function")throw Error(h(150));return r=M.call(r),_(m,s,r,g)}if(typeof r.then=="function")return ul(m,s,wu(r),g);if(r.$$typeof===zl)return ul(m,s,Zu(m,r),g);Fu(m,r)}return typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint"?(r=""+r,s!==null&&s.tag===6?(a(m,s.sibling),g=u(s,r),g.return=m,m=g):(a(m,s),g=bi(r,m.mode,g),g.return=m,m=g),i(m)):a(m,s)}return function(m,s,r,g){try{Ve=0;var M=ul(m,s,r,g);return fe=null,M}catch(R){if(R===ce||R===Ku)throw R;var J=lt(29,R,null,m.mode);return J.lanes=g,J.return=m,J}finally{}}}var Ha=Ds(!0),Us=Ds(!1),aa=!1;function Li(l){l.updateQueue={baseState:l.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bi(l,t){l=l.updateQueue,t.updateQueue===l&&(t.updateQueue={baseState:l.baseState,firstBaseUpdate:l.firstBaseUpdate,lastBaseUpdate:l.lastBaseUpdate,shared:l.shared,callbacks:null})}function ea(l){return{lane:l,tag:0,payload:null,callback:null,next:null}}function ua(l,t,a){var e=l.updateQueue;if(e===null)return null;if(e=e.shared,(W&2)!==0){var u=e.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),e.pending=t,t=Yu(l),os(l,null,a),t}return Qu(l,e,t,a),Yu(l)}function Je(l,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var e=t.lanes;e&=l.pendingLanes,a|=e,t.lanes=a,Ef(l,a)}}function Hi(l,t){var a=l.updateQueue,e=l.alternate;if(e!==null&&(e=e.updateQueue,a===e)){var u=null,n=null;if(a=a.firstBaseUpdate,a!==null){do{var i={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};n===null?u=n=i:n=n.next=i,a=a.next}while(a!==null);n===null?u=n=t:n=n.next=t}else u=n=t;a={baseState:e.baseState,firstBaseUpdate:u,lastBaseUpdate:n,shared:e.shared,callbacks:e.callbacks},l.updateQueue=a;return}l=a.lastBaseUpdate,l===null?a.firstBaseUpdate=t:l.next=t,a.lastBaseUpdate=t}var qi=!1;function we(){if(qi){var l=ie;if(l!==null)throw l}}function Fe(l,t,a,e){qi=!1;var u=l.updateQueue;aa=!1;var n=u.firstBaseUpdate,i=u.lastBaseUpdate,c=u.shared.pending;if(c!==null){u.shared.pending=null;var f=c,d=f.next;f.next=null,i===null?n=d:i.next=d,i=f;var S=l.alternate;S!==null&&(S=S.updateQueue,c=S.lastBaseUpdate,c!==i&&(c===null?S.firstBaseUpdate=d:c.next=d,S.lastBaseUpdate=f))}if(n!==null){var b=u.baseState;i=0,S=d=f=null,c=n;do{var y=c.lane&-536870913,v=y!==c.lane;if(v?(X&y)===y:(e&y)===y){y!==0&&y===ne&&(qi=!0),S!==null&&(S=S.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});l:{var A=l,_=c;y=t;var ul=a;switch(_.tag){case 1:if(A=_.payload,typeof A=="function"){b=A.call(ul,b,y);break l}b=A;break l;case 3:A.flags=A.flags&-65537|128;case 0:if(A=_.payload,y=typeof A=="function"?A.call(ul,b,y):A,y==null)break l;b=L({},b,y);break l;case 2:aa=!0}}y=c.callback,y!==null&&(l.flags|=64,v&&(l.flags|=8192),v=u.callbacks,v===null?u.callbacks=[y]:v.push(y))}else v={lane:y,tag:c.tag,payload:c.payload,callback:c.callback,next:null},S===null?(d=S=v,f=b):S=S.next=v,i|=y;if(c=c.next,c===null){if(c=u.shared.pending,c===null)break;v=c,c=v.next,v.next=null,u.lastBaseUpdate=v,u.shared.pending=null}}while(!0);S===null&&(f=b),u.baseState=f,u.firstBaseUpdate=d,u.lastBaseUpdate=S,n===null&&(u.shared.lanes=0),sa|=i,l.lanes=i,l.memoizedState=b}}function Rs(l,t){if(typeof l!="function")throw Error(h(191,l));l.call(t)}function Ms(l,t){var a=l.callbacks;if(a!==null)for(l.callbacks=null,l=0;l<a.length;l++)Rs(a[l],t)}var se=o(null),Wu=o(0);function zs(l,t){l=Kt,N(Wu,l),N(se,t),Kt=l|t.baseLanes}function ji(){N(Wu,Kt),N(se,se.current)}function Qi(){Kt=Wu.current,T(se),T(Wu)}var tt=o(null),yt=null;function na(l){var t=l.alternate;N(vl,vl.current&1),N(tt,l),yt===null&&(t===null||se.current!==null||t.memoizedState!==null)&&(yt=l)}function Yi(l){N(vl,vl.current),N(tt,l),yt===null&&(yt=l)}function _s(l){l.tag===22?(N(vl,vl.current),N(tt,l),yt===null&&(yt=l)):ia()}function ia(){N(vl,vl.current),N(tt,tt.current)}function at(l){T(tt),yt===l&&(yt=null),T(vl)}var vl=o(0);function $u(l){for(var t=l;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Kc(a)||Jc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var jt=0,j=null,al=null,gl=null,ku=!1,oe=!1,qa=!1,Iu=0,We=0,me=null,qd=0;function rl(){throw Error(h(321))}function xi(l,t){if(t===null)return!1;for(var a=0;a<t.length&&a<l.length;a++)if(!Pl(l[a],t[a]))return!1;return!0}function Gi(l,t,a,e,u,n){return jt=n,j=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=l===null||l.memoizedState===null?ho:ac,qa=!1,n=a(e,u),qa=!1,oe&&(n=Ls(t,a,e,u)),Cs(l),n}function Cs(l){E.H=Ie;var t=al!==null&&al.next!==null;if(jt=0,gl=al=j=null,ku=!1,We=0,me=null,t)throw Error(h(300));l===null||bl||(l=l.dependencies,l!==null&&Xu(l)&&(bl=!0))}function Ls(l,t,a,e){j=l;var u=0;do{if(oe&&(me=null),We=0,oe=!1,25<=u)throw Error(h(301));if(u+=1,gl=al=null,l.updateQueue!=null){var n=l.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}E.H=vo,n=t(a,e)}while(oe);return n}function jd(){var l=E.H,t=l.useState()[0];return t=typeof t.then=="function"?$e(t):t,l=l.useState()[0],(al!==null?al.memoizedState:null)!==l&&(j.flags|=1024),t}function Xi(){var l=Iu!==0;return Iu=0,l}function Zi(l,t,a){t.updateQueue=l.updateQueue,t.flags&=-2053,l.lanes&=~a}function Vi(l){if(ku){for(l=l.memoizedState;l!==null;){var t=l.queue;t!==null&&(t.pending=null),l=l.next}ku=!1}jt=0,gl=al=j=null,oe=!1,We=Iu=0,me=null}function Hl(){var l={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gl===null?j.memoizedState=gl=l:gl=gl.next=l,gl}function Sl(){if(al===null){var l=j.alternate;l=l!==null?l.memoizedState:null}else l=al.next;var t=gl===null?j.memoizedState:gl.next;if(t!==null)gl=t,al=l;else{if(l===null)throw j.alternate===null?Error(h(467)):Error(h(310));al=l,l={memoizedState:al.memoizedState,baseState:al.baseState,baseQueue:al.baseQueue,queue:al.queue,next:null},gl===null?j.memoizedState=gl=l:gl=gl.next=l}return gl}function Pu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $e(l){var t=We;return We+=1,me===null&&(me=[]),l=ps(me,l,t),t=j,(gl===null?t.memoizedState:gl.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?ho:ac),l}function ln(l){if(l!==null&&typeof l=="object"){if(typeof l.then=="function")return $e(l);if(l.$$typeof===zl)return Ul(l)}throw Error(h(438,String(l)))}function Ki(l){var t=null,a=j.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var e=j.alternate;e!==null&&(e=e.updateQueue,e!==null&&(e=e.memoCache,e!=null&&(t={data:e.data.map(function(u){return u.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Pu(),j.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(l),e=0;e<l;e++)a[e]=xa;return t.index++,a}function Qt(l,t){return typeof t=="function"?t(l):t}function tn(l){var t=Sl();return Ji(t,al,l)}function Ji(l,t,a){var e=l.queue;if(e===null)throw Error(h(311));e.lastRenderedReducer=a;var u=l.baseQueue,n=e.pending;if(n!==null){if(u!==null){var i=u.next;u.next=n.next,n.next=i}t.baseQueue=u=n,e.pending=null}if(n=l.baseState,u===null)l.memoizedState=n;else{t=u.next;var c=i=null,f=null,d=t,S=!1;do{var b=d.lane&-536870913;if(b!==d.lane?(X&b)===b:(jt&b)===b){var y=d.revertLane;if(y===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),b===ne&&(S=!0);else if((jt&y)===y){d=d.next,y===ne&&(S=!0);continue}else b={lane:0,revertLane:d.revertLane,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},f===null?(c=f=b,i=n):f=f.next=b,j.lanes|=y,sa|=y;b=d.action,qa&&a(n,b),n=d.hasEagerState?d.eagerState:a(n,b)}else y={lane:b,revertLane:d.revertLane,gesture:d.gesture,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},f===null?(c=f=y,i=n):f=f.next=y,j.lanes|=b,sa|=b;d=d.next}while(d!==null&&d!==t);if(f===null?i=n:f.next=c,!Pl(n,l.memoizedState)&&(bl=!0,S&&(a=ie,a!==null)))throw a;l.memoizedState=n,l.baseState=i,l.baseQueue=f,e.lastRenderedState=n}return u===null&&(e.lanes=0),[l.memoizedState,e.dispatch]}function wi(l){var t=Sl(),a=t.queue;if(a===null)throw Error(h(311));a.lastRenderedReducer=l;var e=a.dispatch,u=a.pending,n=t.memoizedState;if(u!==null){a.pending=null;var i=u=u.next;do n=l(n,i.action),i=i.next;while(i!==u);Pl(n,t.memoizedState)||(bl=!0),t.memoizedState=n,t.baseQueue===null&&(t.baseState=n),a.lastRenderedState=n}return[n,e]}function Bs(l,t,a){var e=j,u=Sl(),n=K;if(n){if(a===void 0)throw Error(h(407));a=a()}else a=t();var i=!Pl((al||u).memoizedState,a);if(i&&(u.memoizedState=a,bl=!0),u=u.queue,$i(js.bind(null,e,u,l),[l]),u.getSnapshot!==t||i||gl!==null&&gl.memoizedState.tag&1){if(e.flags|=2048,re(9,{destroy:void 0},qs.bind(null,e,u,a,t),null),il===null)throw Error(h(349));n||(jt&127)!==0||Hs(e,t,a)}return a}function Hs(l,t,a){l.flags|=16384,l={getSnapshot:t,value:a},t=j.updateQueue,t===null?(t=Pu(),j.updateQueue=t,t.stores=[l]):(a=t.stores,a===null?t.stores=[l]:a.push(l))}function qs(l,t,a,e){t.value=a,t.getSnapshot=e,Qs(t)&&Ys(l)}function js(l,t,a){return a(function(){Qs(t)&&Ys(l)})}function Qs(l){var t=l.getSnapshot;l=l.value;try{var a=t();return!Pl(l,a)}catch{return!0}}function Ys(l){var t=Ua(l,2);t!==null&&wl(t,l,2)}function Fi(l){var t=Hl();if(typeof l=="function"){var a=l;if(l=a(),qa){Wt(!0);try{a()}finally{Wt(!1)}}}return t.memoizedState=t.baseState=l,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:l},t}function xs(l,t,a,e){return l.baseState=a,Ji(l,al,typeof e=="function"?e:Qt)}function Qd(l,t,a,e,u){if(un(l))throw Error(h(485));if(l=t.action,l!==null){var n={payload:u,action:l,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){n.listeners.push(i)}};E.T!==null?a(!0):n.isTransition=!1,e(n),a=t.pending,a===null?(n.next=t.pending=n,Gs(t,n)):(n.next=a.next,t.pending=a.next=n)}}function Gs(l,t){var a=t.action,e=t.payload,u=l.state;if(t.isTransition){var n=E.T,i={};E.T=i;try{var c=a(u,e),f=E.S;f!==null&&f(i,c),Xs(l,t,c)}catch(d){Wi(l,t,d)}finally{n!==null&&i.types!==null&&(n.types=i.types),E.T=n}}else try{n=a(u,e),Xs(l,t,n)}catch(d){Wi(l,t,d)}}function Xs(l,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(e){Zs(l,t,e)},function(e){return Wi(l,t,e)}):Zs(l,t,a)}function Zs(l,t,a){t.status="fulfilled",t.value=a,Vs(t),l.state=a,t=l.pending,t!==null&&(a=t.next,a===t?l.pending=null:(a=a.next,t.next=a,Gs(l,a)))}function Wi(l,t,a){var e=l.pending;if(l.pending=null,e!==null){e=e.next;do t.status="rejected",t.reason=a,Vs(t),t=t.next;while(t!==e)}l.action=null}function Vs(l){l=l.listeners;for(var t=0;t<l.length;t++)(0,l[t])()}function Ks(l,t){return t}function Js(l,t){if(K){var a=il.formState;if(a!==null){l:{var e=j;if(K){if(cl){t:{for(var u=cl,n=dt;u.nodeType!==8;){if(!n){u=null;break t}if(u=ht(u.nextSibling),u===null){u=null;break t}}n=u.data,u=n==="F!"||n==="F"?u:null}if(u){cl=ht(u.nextSibling),e=u.data==="F!";break l}}la(e)}e=!1}e&&(t=a[0])}}return a=Hl(),a.memoizedState=a.baseState=t,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ks,lastRenderedState:t},a.queue=e,a=mo.bind(null,j,e),e.dispatch=a,e=Fi(!1),n=tc.bind(null,j,!1,e.queue),e=Hl(),u={state:t,dispatch:null,action:l,pending:null},e.queue=u,a=Qd.bind(null,j,u,n,a),u.dispatch=a,e.memoizedState=l,[t,a,!1]}function ws(l){var t=Sl();return Fs(t,al,l)}function Fs(l,t,a){if(t=Ji(l,t,Ks)[0],l=tn(Qt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var e=$e(t)}catch(i){throw i===ce?Ku:i}else e=t;t=Sl();var u=t.queue,n=u.dispatch;return a!==t.memoizedState&&(j.flags|=2048,re(9,{destroy:void 0},Yd.bind(null,u,a),null)),[e,n,l]}function Yd(l,t){l.action=t}function Ws(l){var t=Sl(),a=al;if(a!==null)return Fs(t,a,l);Sl(),t=t.memoizedState,a=Sl();var e=a.queue.dispatch;return a.memoizedState=l,[t,e,!1]}function re(l,t,a,e){return l={tag:l,create:a,deps:e,inst:t,next:null},t=j.updateQueue,t===null&&(t=Pu(),j.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=l.next=l:(e=a.next,a.next=l,l.next=e,t.lastEffect=l),l}function $s(){return Sl().memoizedState}function an(l,t,a,e){var u=Hl();j.flags|=l,u.memoizedState=re(1|t,{destroy:void 0},a,e===void 0?null:e)}function en(l,t,a,e){var u=Sl();e=e===void 0?null:e;var n=u.memoizedState.inst;al!==null&&e!==null&&xi(e,al.memoizedState.deps)?u.memoizedState=re(t,n,a,e):(j.flags|=l,u.memoizedState=re(1|t,n,a,e))}function ks(l,t){an(8390656,8,l,t)}function $i(l,t){en(2048,8,l,t)}function xd(l){j.flags|=4;var t=j.updateQueue;if(t===null)t=Pu(),j.updateQueue=t,t.events=[l];else{var a=t.events;a===null?t.events=[l]:a.push(l)}}function Is(l){var t=Sl().memoizedState;return xd({ref:t,nextImpl:l}),function(){if((W&2)!==0)throw Error(h(440));return t.impl.apply(void 0,arguments)}}function Ps(l,t){return en(4,2,l,t)}function lo(l,t){return en(4,4,l,t)}function to(l,t){if(typeof t=="function"){l=l();var a=t(l);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return l=l(),t.current=l,function(){t.current=null}}function ao(l,t,a){a=a!=null?a.concat([l]):null,en(4,4,to.bind(null,t,l),a)}function ki(){}function eo(l,t){var a=Sl();t=t===void 0?null:t;var e=a.memoizedState;return t!==null&&xi(t,e[1])?e[0]:(a.memoizedState=[l,t],l)}function uo(l,t){var a=Sl();t=t===void 0?null:t;var e=a.memoizedState;if(t!==null&&xi(t,e[1]))return e[0];if(e=l(),qa){Wt(!0);try{l()}finally{Wt(!1)}}return a.memoizedState=[e,t],e}function Ii(l,t,a){return a===void 0||(jt&1073741824)!==0&&(X&261930)===0?l.memoizedState=t:(l.memoizedState=a,l=im(),j.lanes|=l,sa|=l,a)}function no(l,t,a,e){return Pl(a,t)?a:se.current!==null?(l=Ii(l,a,e),Pl(l,t)||(bl=!0),l):(jt&42)===0||(jt&1073741824)!==0&&(X&261930)===0?(bl=!0,l.memoizedState=a):(l=im(),j.lanes|=l,sa|=l,t)}function io(l,t,a,e,u){var n=p.p;p.p=n!==0&&8>n?n:8;var i=E.T,c={};E.T=c,tc(l,!1,t,a);try{var f=u(),d=E.S;if(d!==null&&d(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var S=Hd(f,e);ke(l,t,S,nt(l))}else ke(l,t,e,nt(l))}catch(b){ke(l,t,{then:function(){},status:"rejected",reason:b},nt())}finally{p.p=n,i!==null&&c.types!==null&&(i.types=c.types),E.T=i}}function Gd(){}function Pi(l,t,a,e){if(l.tag!==5)throw Error(h(476));var u=co(l).queue;io(l,u,t,B,a===null?Gd:function(){return fo(l),a(e)})}function co(l){var t=l.memoizedState;if(t!==null)return t;t={memoizedState:B,baseState:B,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:B},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:a},next:null},l.memoizedState=t,l=l.alternate,l!==null&&(l.memoizedState=t),t}function fo(l){var t=co(l);t.next===null&&(t=l.alternate.memoizedState),ke(l,t.next.queue,{},nt())}function lc(){return Ul(yu)}function so(){return Sl().memoizedState}function oo(){return Sl().memoizedState}function Xd(l){for(var t=l.return;t!==null;){switch(t.tag){case 24:case 3:var a=nt();l=ea(a);var e=ua(t,l,a);e!==null&&(wl(e,t,a),Je(e,t,a)),t={cache:Mi()},l.payload=t;return}t=t.return}}function Zd(l,t,a){var e=nt();a={lane:e,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},un(l)?ro(t,a):(a=Ei(l,t,a,e),a!==null&&(wl(a,l,e),yo(a,t,e)))}function mo(l,t,a){var e=nt();ke(l,t,a,e)}function ke(l,t,a,e){var u={lane:e,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(un(l))ro(t,u);else{var n=l.alternate;if(l.lanes===0&&(n===null||n.lanes===0)&&(n=t.lastRenderedReducer,n!==null))try{var i=t.lastRenderedState,c=n(i,a);if(u.hasEagerState=!0,u.eagerState=c,Pl(c,i))return Qu(l,t,u,0),il===null&&ju(),!1}catch{}finally{}if(a=Ei(l,t,u,e),a!==null)return wl(a,l,e),yo(a,t,e),!0}return!1}function tc(l,t,a,e){if(e={lane:2,revertLane:Lc(),gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},un(l)){if(t)throw Error(h(479))}else t=Ei(l,a,e,2),t!==null&&wl(t,l,2)}function un(l){var t=l.alternate;return l===j||t!==null&&t===j}function ro(l,t){oe=ku=!0;var a=l.pending;a===null?t.next=t:(t.next=a.next,a.next=t),l.pending=t}function yo(l,t,a){if((a&4194048)!==0){var e=t.lanes;e&=l.pendingLanes,a|=e,t.lanes=a,Ef(l,a)}}var Ie={readContext:Ul,use:ln,useCallback:rl,useContext:rl,useEffect:rl,useImperativeHandle:rl,useLayoutEffect:rl,useInsertionEffect:rl,useMemo:rl,useReducer:rl,useRef:rl,useState:rl,useDebugValue:rl,useDeferredValue:rl,useTransition:rl,useSyncExternalStore:rl,useId:rl,useHostTransitionStatus:rl,useFormState:rl,useActionState:rl,useOptimistic:rl,useMemoCache:rl,useCacheRefresh:rl};Ie.useEffectEvent=rl;var ho={readContext:Ul,use:ln,useCallback:function(l,t){return Hl().memoizedState=[l,t===void 0?null:t],l},useContext:Ul,useEffect:ks,useImperativeHandle:function(l,t,a){a=a!=null?a.concat([l]):null,an(4194308,4,to.bind(null,t,l),a)},useLayoutEffect:function(l,t){return an(4194308,4,l,t)},useInsertionEffect:function(l,t){an(4,2,l,t)},useMemo:function(l,t){var a=Hl();t=t===void 0?null:t;var e=l();if(qa){Wt(!0);try{l()}finally{Wt(!1)}}return a.memoizedState=[e,t],e},useReducer:function(l,t,a){var e=Hl();if(a!==void 0){var u=a(t);if(qa){Wt(!0);try{a(t)}finally{Wt(!1)}}}else u=t;return e.memoizedState=e.baseState=u,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:l,lastRenderedState:u},e.queue=l,l=l.dispatch=Zd.bind(null,j,l),[e.memoizedState,l]},useRef:function(l){var t=Hl();return l={current:l},t.memoizedState=l},useState:function(l){l=Fi(l);var t=l.queue,a=mo.bind(null,j,t);return t.dispatch=a,[l.memoizedState,a]},useDebugValue:ki,useDeferredValue:function(l,t){var a=Hl();return Ii(a,l,t)},useTransition:function(){var l=Fi(!1);return l=io.bind(null,j,l.queue,!0,!1),Hl().memoizedState=l,[!1,l]},useSyncExternalStore:function(l,t,a){var e=j,u=Hl();if(K){if(a===void 0)throw Error(h(407));a=a()}else{if(a=t(),il===null)throw Error(h(349));(X&127)!==0||Hs(e,t,a)}u.memoizedState=a;var n={value:a,getSnapshot:t};return u.queue=n,ks(js.bind(null,e,n,l),[l]),e.flags|=2048,re(9,{destroy:void 0},qs.bind(null,e,n,a,t),null),a},useId:function(){var l=Hl(),t=il.identifierPrefix;if(K){var a=At,e=Nt;a=(e&~(1<<32-Il(e)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Iu++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=qd++,t="_"+t+"r_"+a.toString(32)+"_";return l.memoizedState=t},useHostTransitionStatus:lc,useFormState:Js,useActionState:Js,useOptimistic:function(l){var t=Hl();t.memoizedState=t.baseState=l;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=tc.bind(null,j,!0,a),a.dispatch=t,[l,t]},useMemoCache:Ki,useCacheRefresh:function(){return Hl().memoizedState=Xd.bind(null,j)},useEffectEvent:function(l){var t=Hl(),a={impl:l};return t.memoizedState=a,function(){if((W&2)!==0)throw Error(h(440));return a.impl.apply(void 0,arguments)}}},ac={readContext:Ul,use:ln,useCallback:eo,useContext:Ul,useEffect:$i,useImperativeHandle:ao,useInsertionEffect:Ps,useLayoutEffect:lo,useMemo:uo,useReducer:tn,useRef:$s,useState:function(){return tn(Qt)},useDebugValue:ki,useDeferredValue:function(l,t){var a=Sl();return no(a,al.memoizedState,l,t)},useTransition:function(){var l=tn(Qt)[0],t=Sl().memoizedState;return[typeof l=="boolean"?l:$e(l),t]},useSyncExternalStore:Bs,useId:so,useHostTransitionStatus:lc,useFormState:ws,useActionState:ws,useOptimistic:function(l,t){var a=Sl();return xs(a,al,l,t)},useMemoCache:Ki,useCacheRefresh:oo};ac.useEffectEvent=Is;var vo={readContext:Ul,use:ln,useCallback:eo,useContext:Ul,useEffect:$i,useImperativeHandle:ao,useInsertionEffect:Ps,useLayoutEffect:lo,useMemo:uo,useReducer:wi,useRef:$s,useState:function(){return wi(Qt)},useDebugValue:ki,useDeferredValue:function(l,t){var a=Sl();return al===null?Ii(a,l,t):no(a,al.memoizedState,l,t)},useTransition:function(){var l=wi(Qt)[0],t=Sl().memoizedState;return[typeof l=="boolean"?l:$e(l),t]},useSyncExternalStore:Bs,useId:so,useHostTransitionStatus:lc,useFormState:Ws,useActionState:Ws,useOptimistic:function(l,t){var a=Sl();return al!==null?xs(a,al,l,t):(a.baseState=l,[l,a.queue.dispatch])},useMemoCache:Ki,useCacheRefresh:oo};vo.useEffectEvent=Is;function ec(l,t,a,e){t=l.memoizedState,a=a(e,t),a=a==null?t:L({},t,a),l.memoizedState=a,l.lanes===0&&(l.updateQueue.baseState=a)}var uc={enqueueSetState:function(l,t,a){l=l._reactInternals;var e=nt(),u=ea(e);u.payload=t,a!=null&&(u.callback=a),t=ua(l,u,e),t!==null&&(wl(t,l,e),Je(t,l,e))},enqueueReplaceState:function(l,t,a){l=l._reactInternals;var e=nt(),u=ea(e);u.tag=1,u.payload=t,a!=null&&(u.callback=a),t=ua(l,u,e),t!==null&&(wl(t,l,e),Je(t,l,e))},enqueueForceUpdate:function(l,t){l=l._reactInternals;var a=nt(),e=ea(a);e.tag=2,t!=null&&(e.callback=t),t=ua(l,e,a),t!==null&&(wl(t,l,a),Je(t,l,a))}};function So(l,t,a,e,u,n,i){return l=l.stateNode,typeof l.shouldComponentUpdate=="function"?l.shouldComponentUpdate(e,n,i):t.prototype&&t.prototype.isPureReactComponent?!Qe(a,e)||!Qe(u,n):!0}function Eo(l,t,a,e){l=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,e),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,e),t.state!==l&&uc.enqueueReplaceState(t,t.state,null)}function ja(l,t){var a=t;if("ref"in t){a={};for(var e in t)e!=="ref"&&(a[e]=t[e])}if(l=l.defaultProps){a===t&&(a=L({},a));for(var u in l)a[u]===void 0&&(a[u]=l[u])}return a}function go(l){qu(l)}function bo(l){console.error(l)}function To(l){qu(l)}function nn(l,t){try{var a=l.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Oo(l,t,a){try{var e=l.onCaughtError;e(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function nc(l,t,a){return a=ea(a),a.tag=3,a.payload={element:null},a.callback=function(){nn(l,t)},a}function po(l){return l=ea(l),l.tag=3,l}function No(l,t,a,e){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var n=e.value;l.payload=function(){return u(n)},l.callback=function(){Oo(t,a,e)}}var i=a.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(l.callback=function(){Oo(t,a,e),typeof u!="function"&&(oa===null?oa=new Set([this]):oa.add(this));var c=e.stack;this.componentDidCatch(e.value,{componentStack:c!==null?c:""})})}function Vd(l,t,a,e,u){if(a.flags|=32768,e!==null&&typeof e=="object"&&typeof e.then=="function"){if(t=a.alternate,t!==null&&ue(t,a,u,!0),a=tt.current,a!==null){switch(a.tag){case 31:case 13:return yt===null?En():a.alternate===null&&dl===0&&(dl=3),a.flags&=-257,a.flags|=65536,a.lanes=u,e===Ju?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([e]):t.add(e),zc(l,e,u)),!1;case 22:return a.flags|=65536,e===Ju?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([e])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([e]):a.add(e)),zc(l,e,u)),!1}throw Error(h(435,a.tag))}return zc(l,e,u),En(),!1}if(K)return t=tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=u,e!==Ni&&(l=Error(h(422),{cause:e}),Ge(ot(l,a)))):(e!==Ni&&(t=Error(h(423),{cause:e}),Ge(ot(t,a))),l=l.current.alternate,l.flags|=65536,u&=-u,l.lanes|=u,e=ot(e,a),u=nc(l.stateNode,e,u),Hi(l,u),dl!==4&&(dl=2)),!1;var n=Error(h(520),{cause:e});if(n=ot(n,a),iu===null?iu=[n]:iu.push(n),dl!==4&&(dl=2),t===null)return!0;e=ot(e,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,l=u&-u,a.lanes|=l,l=nc(a.stateNode,e,l),Hi(a,l),!1;case 1:if(t=a.type,n=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(oa===null||!oa.has(n))))return a.flags|=65536,u&=-u,a.lanes|=u,u=po(u),No(u,l,a,e),Hi(a,u),!1}a=a.return}while(a!==null);return!1}var ic=Error(h(461)),bl=!1;function Rl(l,t,a,e){t.child=l===null?Us(t,null,a,e):Ha(t,l.child,a,e)}function Ao(l,t,a,e,u){a=a.render;var n=t.ref;if("ref"in e){var i={};for(var c in e)c!=="ref"&&(i[c]=e[c])}else i=e;return _a(t),e=Gi(l,t,a,i,n,u),c=Xi(),l!==null&&!bl?(Zi(l,t,u),Yt(l,t,u)):(K&&c&&Oi(t),t.flags|=1,Rl(l,t,e,u),t.child)}function Do(l,t,a,e,u){if(l===null){var n=a.type;return typeof n=="function"&&!gi(n)&&n.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=n,Uo(l,t,n,e,u)):(l=xu(a.type,null,e,t,t.mode,u),l.ref=t.ref,l.return=t,t.child=l)}if(n=l.child,!yc(l,u)){var i=n.memoizedProps;if(a=a.compare,a=a!==null?a:Qe,a(i,e)&&l.ref===t.ref)return Yt(l,t,u)}return t.flags|=1,l=Lt(n,e),l.ref=t.ref,l.return=t,t.child=l}function Uo(l,t,a,e,u){if(l!==null){var n=l.memoizedProps;if(Qe(n,e)&&l.ref===t.ref)if(bl=!1,t.pendingProps=e=n,yc(l,u))(l.flags&131072)!==0&&(bl=!0);else return t.lanes=l.lanes,Yt(l,t,u)}return cc(l,t,a,e,u)}function Ro(l,t,a,e){var u=e.children,n=l!==null?l.memoizedState:null;if(l===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.mode==="hidden"){if((t.flags&128)!==0){if(n=n!==null?n.baseLanes|a:a,l!==null){for(e=t.child=l.child,u=0;e!==null;)u=u|e.lanes|e.childLanes,e=e.sibling;e=u&~n}else e=0,t.child=null;return Mo(l,t,n,a,e)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},l!==null&&Vu(t,n!==null?n.cachePool:null),n!==null?zs(t,n):ji(),_s(t);else return e=t.lanes=536870912,Mo(l,t,n!==null?n.baseLanes|a:a,a,e)}else n!==null?(Vu(t,n.cachePool),zs(t,n),ia(),t.memoizedState=null):(l!==null&&Vu(t,null),ji(),ia());return Rl(l,t,u,a),t.child}function Pe(l,t){return l!==null&&l.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Mo(l,t,a,e,u){var n=_i();return n=n===null?null:{parent:El._currentValue,pool:n},t.memoizedState={baseLanes:a,cachePool:n},l!==null&&Vu(t,null),ji(),_s(t),l!==null&&ue(l,t,e,!0),t.childLanes=u,null}function cn(l,t){return t=sn({mode:t.mode,children:t.children},l.mode),t.ref=l.ref,l.child=t,t.return=l,t}function zo(l,t,a){return Ha(t,l.child,null,a),l=cn(t,t.pendingProps),l.flags|=2,at(t),t.memoizedState=null,l}function Kd(l,t,a){var e=t.pendingProps,u=(t.flags&128)!==0;if(t.flags&=-129,l===null){if(K){if(e.mode==="hidden")return l=cn(t,e),t.lanes=536870912,Pe(null,l);if(Yi(t),(l=cl)?(l=Xm(l,dt),l=l!==null&&l.data==="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:It!==null?{id:Nt,overflow:At}:null,retryLane:536870912,hydrationErrors:null},a=rs(l),a.return=t,t.child=a,Dl=t,cl=null)):l=null,l===null)throw la(t);return t.lanes=536870912,null}return cn(t,e)}var n=l.memoizedState;if(n!==null){var i=n.dehydrated;if(Yi(t),u)if(t.flags&256)t.flags&=-257,t=zo(l,t,a);else if(t.memoizedState!==null)t.child=l.child,t.flags|=128,t=null;else throw Error(h(558));else if(bl||ue(l,t,a,!1),u=(a&l.childLanes)!==0,bl||u){if(e=il,e!==null&&(i=gf(e,a),i!==0&&i!==n.retryLane))throw n.retryLane=i,Ua(l,i),wl(e,l,i),ic;En(),t=zo(l,t,a)}else l=n.treeContext,cl=ht(i.nextSibling),Dl=t,K=!0,Pt=null,dt=!1,l!==null&&hs(t,l),t=cn(t,e),t.flags|=4096;return t}return l=Lt(l.child,{mode:e.mode,children:e.children}),l.ref=t.ref,t.child=l,l.return=t,l}function fn(l,t){var a=t.ref;if(a===null)l!==null&&l.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(h(284));(l===null||l.ref!==a)&&(t.flags|=4194816)}}function cc(l,t,a,e,u){return _a(t),a=Gi(l,t,a,e,void 0,u),e=Xi(),l!==null&&!bl?(Zi(l,t,u),Yt(l,t,u)):(K&&e&&Oi(t),t.flags|=1,Rl(l,t,a,u),t.child)}function _o(l,t,a,e,u,n){return _a(t),t.updateQueue=null,a=Ls(t,e,a,u),Cs(l),e=Xi(),l!==null&&!bl?(Zi(l,t,n),Yt(l,t,n)):(K&&e&&Oi(t),t.flags|=1,Rl(l,t,a,n),t.child)}function Co(l,t,a,e,u){if(_a(t),t.stateNode===null){var n=le,i=a.contextType;typeof i=="object"&&i!==null&&(n=Ul(i)),n=new a(e,n),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=uc,t.stateNode=n,n._reactInternals=t,n=t.stateNode,n.props=e,n.state=t.memoizedState,n.refs={},Li(t),i=a.contextType,n.context=typeof i=="object"&&i!==null?Ul(i):le,n.state=t.memoizedState,i=a.getDerivedStateFromProps,typeof i=="function"&&(ec(t,a,i,e),n.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(i=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),i!==n.state&&uc.enqueueReplaceState(n,n.state,null),Fe(t,e,n,u),we(),n.state=t.memoizedState),typeof n.componentDidMount=="function"&&(t.flags|=4194308),e=!0}else if(l===null){n=t.stateNode;var c=t.memoizedProps,f=ja(a,c);n.props=f;var d=n.context,S=a.contextType;i=le,typeof S=="object"&&S!==null&&(i=Ul(S));var b=a.getDerivedStateFromProps;S=typeof b=="function"||typeof n.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,S||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(c||d!==i)&&Eo(t,n,e,i),aa=!1;var y=t.memoizedState;n.state=y,Fe(t,e,n,u),we(),d=t.memoizedState,c||y!==d||aa?(typeof b=="function"&&(ec(t,a,b,e),d=t.memoizedState),(f=aa||So(t,a,f,e,y,d,i))?(S||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(t.flags|=4194308)):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=e,t.memoizedState=d),n.props=e,n.state=d,n.context=i,e=f):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),e=!1)}else{n=t.stateNode,Bi(l,t),i=t.memoizedProps,S=ja(a,i),n.props=S,b=t.pendingProps,y=n.context,d=a.contextType,f=le,typeof d=="object"&&d!==null&&(f=Ul(d)),c=a.getDerivedStateFromProps,(d=typeof c=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(i!==b||y!==f)&&Eo(t,n,e,f),aa=!1,y=t.memoizedState,n.state=y,Fe(t,e,n,u),we();var v=t.memoizedState;i!==b||y!==v||aa||l!==null&&l.dependencies!==null&&Xu(l.dependencies)?(typeof c=="function"&&(ec(t,a,c,e),v=t.memoizedState),(S=aa||So(t,a,S,e,y,v,f)||l!==null&&l.dependencies!==null&&Xu(l.dependencies))?(d||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(e,v,f),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(e,v,f)),typeof n.componentDidUpdate=="function"&&(t.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof n.componentDidUpdate!="function"||i===l.memoizedProps&&y===l.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||i===l.memoizedProps&&y===l.memoizedState||(t.flags|=1024),t.memoizedProps=e,t.memoizedState=v),n.props=e,n.state=v,n.context=f,e=S):(typeof n.componentDidUpdate!="function"||i===l.memoizedProps&&y===l.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||i===l.memoizedProps&&y===l.memoizedState||(t.flags|=1024),e=!1)}return n=e,fn(l,t),e=(t.flags&128)!==0,n||e?(n=t.stateNode,a=e&&typeof a.getDerivedStateFromError!="function"?null:n.render(),t.flags|=1,l!==null&&e?(t.child=Ha(t,l.child,null,u),t.child=Ha(t,null,a,u)):Rl(l,t,a,u),t.memoizedState=n.state,l=t.child):l=Yt(l,t,u),l}function Lo(l,t,a,e){return Ma(),t.flags|=256,Rl(l,t,a,e),t.child}var fc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sc(l){return{baseLanes:l,cachePool:Ts()}}function oc(l,t,a){return l=l!==null?l.childLanes&~a:0,t&&(l|=ut),l}function Bo(l,t,a){var e=t.pendingProps,u=!1,n=(t.flags&128)!==0,i;if((i=n)||(i=l!==null&&l.memoizedState===null?!1:(vl.current&2)!==0),i&&(u=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,l===null){if(K){if(u?na(t):ia(),(l=cl)?(l=Xm(l,dt),l=l!==null&&l.data!=="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:It!==null?{id:Nt,overflow:At}:null,retryLane:536870912,hydrationErrors:null},a=rs(l),a.return=t,t.child=a,Dl=t,cl=null)):l=null,l===null)throw la(t);return Jc(l)?t.lanes=32:t.lanes=536870912,null}var c=e.children;return e=e.fallback,u?(ia(),u=t.mode,c=sn({mode:"hidden",children:c},u),e=Ra(e,u,a,null),c.return=t,e.return=t,c.sibling=e,t.child=c,e=t.child,e.memoizedState=sc(a),e.childLanes=oc(l,i,a),t.memoizedState=fc,Pe(null,e)):(na(t),mc(t,c))}var f=l.memoizedState;if(f!==null&&(c=f.dehydrated,c!==null)){if(n)t.flags&256?(na(t),t.flags&=-257,t=rc(l,t,a)):t.memoizedState!==null?(ia(),t.child=l.child,t.flags|=128,t=null):(ia(),c=e.fallback,u=t.mode,e=sn({mode:"visible",children:e.children},u),c=Ra(c,u,a,null),c.flags|=2,e.return=t,c.return=t,e.sibling=c,t.child=e,Ha(t,l.child,null,a),e=t.child,e.memoizedState=sc(a),e.childLanes=oc(l,i,a),t.memoizedState=fc,t=Pe(null,e));else if(na(t),Jc(c)){if(i=c.nextSibling&&c.nextSibling.dataset,i)var d=i.dgst;i=d,e=Error(h(419)),e.stack="",e.digest=i,Ge({value:e,source:null,stack:null}),t=rc(l,t,a)}else if(bl||ue(l,t,a,!1),i=(a&l.childLanes)!==0,bl||i){if(i=il,i!==null&&(e=gf(i,a),e!==0&&e!==f.retryLane))throw f.retryLane=e,Ua(l,e),wl(i,l,e),ic;Kc(c)||En(),t=rc(l,t,a)}else Kc(c)?(t.flags|=192,t.child=l.child,t=null):(l=f.treeContext,cl=ht(c.nextSibling),Dl=t,K=!0,Pt=null,dt=!1,l!==null&&hs(t,l),t=mc(t,e.children),t.flags|=4096);return t}return u?(ia(),c=e.fallback,u=t.mode,f=l.child,d=f.sibling,e=Lt(f,{mode:"hidden",children:e.children}),e.subtreeFlags=f.subtreeFlags&65011712,d!==null?c=Lt(d,c):(c=Ra(c,u,a,null),c.flags|=2),c.return=t,e.return=t,e.sibling=c,t.child=e,Pe(null,e),e=t.child,c=l.child.memoizedState,c===null?c=sc(a):(u=c.cachePool,u!==null?(f=El._currentValue,u=u.parent!==f?{parent:f,pool:f}:u):u=Ts(),c={baseLanes:c.baseLanes|a,cachePool:u}),e.memoizedState=c,e.childLanes=oc(l,i,a),t.memoizedState=fc,Pe(l.child,e)):(na(t),a=l.child,l=a.sibling,a=Lt(a,{mode:"visible",children:e.children}),a.return=t,a.sibling=null,l!==null&&(i=t.deletions,i===null?(t.deletions=[l],t.flags|=16):i.push(l)),t.child=a,t.memoizedState=null,a)}function mc(l,t){return t=sn({mode:"visible",children:t},l.mode),t.return=l,l.child=t}function sn(l,t){return l=lt(22,l,null,t),l.lanes=0,l}function rc(l,t,a){return Ha(t,l.child,null,a),l=mc(t,t.pendingProps.children),l.flags|=2,t.memoizedState=null,l}function Ho(l,t,a){l.lanes|=t;var e=l.alternate;e!==null&&(e.lanes|=t),Ui(l.return,t,a)}function dc(l,t,a,e,u,n){var i=l.memoizedState;i===null?l.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:e,tail:a,tailMode:u,treeForkCount:n}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=e,i.tail=a,i.tailMode=u,i.treeForkCount=n)}function qo(l,t,a){var e=t.pendingProps,u=e.revealOrder,n=e.tail;e=e.children;var i=vl.current,c=(i&2)!==0;if(c?(i=i&1|2,t.flags|=128):i&=1,N(vl,i),Rl(l,t,e,a),e=K?xe:0,!c&&l!==null&&(l.flags&128)!==0)l:for(l=t.child;l!==null;){if(l.tag===13)l.memoizedState!==null&&Ho(l,a,t);else if(l.tag===19)Ho(l,a,t);else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break l;for(;l.sibling===null;){if(l.return===null||l.return===t)break l;l=l.return}l.sibling.return=l.return,l=l.sibling}switch(u){case"forwards":for(a=t.child,u=null;a!==null;)l=a.alternate,l!==null&&$u(l)===null&&(u=a),a=a.sibling;a=u,a===null?(u=t.child,t.child=null):(u=a.sibling,a.sibling=null),dc(t,!1,u,a,n,e);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=t.child,t.child=null;u!==null;){if(l=u.alternate,l!==null&&$u(l)===null){t.child=u;break}l=u.sibling,u.sibling=a,a=u,u=l}dc(t,!0,a,null,n,e);break;case"together":dc(t,!1,null,null,void 0,e);break;default:t.memoizedState=null}return t.child}function Yt(l,t,a){if(l!==null&&(t.dependencies=l.dependencies),sa|=t.lanes,(a&t.childLanes)===0)if(l!==null){if(ue(l,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(l!==null&&t.child!==l.child)throw Error(h(153));if(t.child!==null){for(l=t.child,a=Lt(l,l.pendingProps),t.child=a,a.return=t;l.sibling!==null;)l=l.sibling,a=a.sibling=Lt(l,l.pendingProps),a.return=t;a.sibling=null}return t.child}function yc(l,t){return(l.lanes&t)!==0?!0:(l=l.dependencies,!!(l!==null&&Xu(l)))}function Jd(l,t,a){switch(t.tag){case 3:Bl(t,t.stateNode.containerInfo),ta(t,El,l.memoizedState.cache),Ma();break;case 27:case 5:Ae(t);break;case 4:Bl(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Yi(t),null;break;case 13:var e=t.memoizedState;if(e!==null)return e.dehydrated!==null?(na(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Bo(l,t,a):(na(t),l=Yt(l,t,a),l!==null?l.sibling:null);na(t);break;case 19:var u=(l.flags&128)!==0;if(e=(a&t.childLanes)!==0,e||(ue(l,t,a,!1),e=(a&t.childLanes)!==0),u){if(e)return qo(l,t,a);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),N(vl,vl.current),e)break;return null;case 22:return t.lanes=0,Ro(l,t,a,t.pendingProps);case 24:ta(t,El,l.memoizedState.cache)}return Yt(l,t,a)}function jo(l,t,a){if(l!==null)if(l.memoizedProps!==t.pendingProps)bl=!0;else{if(!yc(l,a)&&(t.flags&128)===0)return bl=!1,Jd(l,t,a);bl=(l.flags&131072)!==0}else bl=!1,K&&(t.flags&1048576)!==0&&ys(t,xe,t.index);switch(t.lanes=0,t.tag){case 16:l:{var e=t.pendingProps;if(l=La(t.elementType),t.type=l,typeof l=="function")gi(l)?(e=ja(l,e),t.tag=1,t=Co(null,t,l,e,a)):(t.tag=0,t=cc(null,t,l,e,a));else{if(l!=null){var u=l.$$typeof;if(u===it){t.tag=11,t=Ao(null,t,l,e,a);break l}else if(u===V){t.tag=14,t=Do(null,t,l,e,a);break l}}throw t=Mt(l)||l,Error(h(306,t,""))}}return t;case 0:return cc(l,t,t.type,t.pendingProps,a);case 1:return e=t.type,u=ja(e,t.pendingProps),Co(l,t,e,u,a);case 3:l:{if(Bl(t,t.stateNode.containerInfo),l===null)throw Error(h(387));e=t.pendingProps;var n=t.memoizedState;u=n.element,Bi(l,t),Fe(t,e,null,a);var i=t.memoizedState;if(e=i.cache,ta(t,El,e),e!==n.cache&&Ri(t,[El],a,!0),we(),e=i.element,n.isDehydrated)if(n={element:e,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=n,t.memoizedState=n,t.flags&256){t=Lo(l,t,e,a);break l}else if(e!==u){u=ot(Error(h(424)),t),Ge(u),t=Lo(l,t,e,a);break l}else{switch(l=t.stateNode.containerInfo,l.nodeType){case 9:l=l.body;break;default:l=l.nodeName==="HTML"?l.ownerDocument.body:l}for(cl=ht(l.firstChild),Dl=t,K=!0,Pt=null,dt=!0,a=Us(t,null,e,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ma(),e===u){t=Yt(l,t,a);break l}Rl(l,t,e,a)}t=t.child}return t;case 26:return fn(l,t),l===null?(a=Fm(t.type,null,t.pendingProps,null))?t.memoizedState=a:K||(a=t.type,l=t.pendingProps,e=An(Y.current).createElement(a),e[Al]=t,e[Gl]=l,Ml(e,a,l),pl(e),t.stateNode=e):t.memoizedState=Fm(t.type,l.memoizedProps,t.pendingProps,l.memoizedState),null;case 27:return Ae(t),l===null&&K&&(e=t.stateNode=Km(t.type,t.pendingProps,Y.current),Dl=t,dt=!0,u=cl,ya(t.type)?(wc=u,cl=ht(e.firstChild)):cl=u),Rl(l,t,t.pendingProps.children,a),fn(l,t),l===null&&(t.flags|=4194304),t.child;case 5:return l===null&&K&&((u=e=cl)&&(e=O0(e,t.type,t.pendingProps,dt),e!==null?(t.stateNode=e,Dl=t,cl=ht(e.firstChild),dt=!1,u=!0):u=!1),u||la(t)),Ae(t),u=t.type,n=t.pendingProps,i=l!==null?l.memoizedProps:null,e=n.children,Xc(u,n)?e=null:i!==null&&Xc(u,i)&&(t.flags|=32),t.memoizedState!==null&&(u=Gi(l,t,jd,null,null,a),yu._currentValue=u),fn(l,t),Rl(l,t,e,a),t.child;case 6:return l===null&&K&&((l=a=cl)&&(a=p0(a,t.pendingProps,dt),a!==null?(t.stateNode=a,Dl=t,cl=null,l=!0):l=!1),l||la(t)),null;case 13:return Bo(l,t,a);case 4:return Bl(t,t.stateNode.containerInfo),e=t.pendingProps,l===null?t.child=Ha(t,null,e,a):Rl(l,t,e,a),t.child;case 11:return Ao(l,t,t.type,t.pendingProps,a);case 7:return Rl(l,t,t.pendingProps,a),t.child;case 8:return Rl(l,t,t.pendingProps.children,a),t.child;case 12:return Rl(l,t,t.pendingProps.children,a),t.child;case 10:return e=t.pendingProps,ta(t,t.type,e.value),Rl(l,t,e.children,a),t.child;case 9:return u=t.type._context,e=t.pendingProps.children,_a(t),u=Ul(u),e=e(u),t.flags|=1,Rl(l,t,e,a),t.child;case 14:return Do(l,t,t.type,t.pendingProps,a);case 15:return Uo(l,t,t.type,t.pendingProps,a);case 19:return qo(l,t,a);case 31:return Kd(l,t,a);case 22:return Ro(l,t,a,t.pendingProps);case 24:return _a(t),e=Ul(El),l===null?(u=_i(),u===null&&(u=il,n=Mi(),u.pooledCache=n,n.refCount++,n!==null&&(u.pooledCacheLanes|=a),u=n),t.memoizedState={parent:e,cache:u},Li(t),ta(t,El,u)):((l.lanes&a)!==0&&(Bi(l,t),Fe(t,null,null,a),we()),u=l.memoizedState,n=t.memoizedState,u.parent!==e?(u={parent:e,cache:e},t.memoizedState=u,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=u),ta(t,El,e)):(e=n.cache,ta(t,El,e),e!==u.cache&&Ri(t,[El],a,!0))),Rl(l,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(h(156,t.tag))}function xt(l){l.flags|=4}function hc(l,t,a,e,u){if((t=(l.mode&32)!==0)&&(t=!1),t){if(l.flags|=16777216,(u&335544128)===u)if(l.stateNode.complete)l.flags|=8192;else if(om())l.flags|=8192;else throw Ba=Ju,Ci}else l.flags&=-16777217}function Qo(l,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)l.flags&=-16777217;else if(l.flags|=16777216,!Pm(t))if(om())l.flags|=8192;else throw Ba=Ju,Ci}function on(l,t){t!==null&&(l.flags|=4),l.flags&16384&&(t=l.tag!==22?vf():536870912,l.lanes|=t,ve|=t)}function lu(l,t){if(!K)switch(l.tailMode){case"hidden":t=l.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?l.tail=null:a.sibling=null;break;case"collapsed":a=l.tail;for(var e=null;a!==null;)a.alternate!==null&&(e=a),a=a.sibling;e===null?t||l.tail===null?l.tail=null:l.tail.sibling=null:e.sibling=null}}function fl(l){var t=l.alternate!==null&&l.alternate.child===l.child,a=0,e=0;if(t)for(var u=l.child;u!==null;)a|=u.lanes|u.childLanes,e|=u.subtreeFlags&65011712,e|=u.flags&65011712,u.return=l,u=u.sibling;else for(u=l.child;u!==null;)a|=u.lanes|u.childLanes,e|=u.subtreeFlags,e|=u.flags,u.return=l,u=u.sibling;return l.subtreeFlags|=e,l.childLanes=a,t}function wd(l,t,a){var e=t.pendingProps;switch(pi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fl(t),null;case 1:return fl(t),null;case 3:return a=t.stateNode,e=null,l!==null&&(e=l.memoizedState.cache),t.memoizedState.cache!==e&&(t.flags|=2048),qt(El),hl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(l===null||l.child===null)&&(ee(t)?xt(t):l===null||l.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ai())),fl(t),null;case 26:var u=t.type,n=t.memoizedState;return l===null?(xt(t),n!==null?(fl(t),Qo(t,n)):(fl(t),hc(t,u,null,e,a))):n?n!==l.memoizedState?(xt(t),fl(t),Qo(t,n)):(fl(t),t.flags&=-16777217):(l=l.memoizedProps,l!==e&&xt(t),fl(t),hc(t,u,l,e,a)),null;case 27:if(bu(t),a=Y.current,u=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==e&&xt(t);else{if(!e){if(t.stateNode===null)throw Error(h(166));return fl(t),null}l=U.current,ee(t)?vs(t):(l=Km(u,e,a),t.stateNode=l,xt(t))}return fl(t),null;case 5:if(bu(t),u=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==e&&xt(t);else{if(!e){if(t.stateNode===null)throw Error(h(166));return fl(t),null}if(n=U.current,ee(t))vs(t);else{var i=An(Y.current);switch(n){case 1:n=i.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:n=i.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":n=i.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":n=i.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":n=i.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof e.is=="string"?i.createElement("select",{is:e.is}):i.createElement("select"),e.multiple?n.multiple=!0:e.size&&(n.size=e.size);break;default:n=typeof e.is=="string"?i.createElement(u,{is:e.is}):i.createElement(u)}}n[Al]=t,n[Gl]=e;l:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)n.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break l;for(;i.sibling===null;){if(i.return===null||i.return===t)break l;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=n;l:switch(Ml(n,u,e),u){case"button":case"input":case"select":case"textarea":e=!!e.autoFocus;break l;case"img":e=!0;break l;default:e=!1}e&&xt(t)}}return fl(t),hc(t,t.type,l===null?null:l.memoizedProps,t.pendingProps,a),null;case 6:if(l&&t.stateNode!=null)l.memoizedProps!==e&&xt(t);else{if(typeof e!="string"&&t.stateNode===null)throw Error(h(166));if(l=Y.current,ee(t)){if(l=t.stateNode,a=t.memoizedProps,e=null,u=Dl,u!==null)switch(u.tag){case 27:case 5:e=u.memoizedProps}l[Al]=t,l=!!(l.nodeValue===a||e!==null&&e.suppressHydrationWarning===!0||Bm(l.nodeValue,a)),l||la(t,!0)}else l=An(l).createTextNode(e),l[Al]=t,t.stateNode=l}return fl(t),null;case 31:if(a=t.memoizedState,l===null||l.memoizedState!==null){if(e=ee(t),a!==null){if(l===null){if(!e)throw Error(h(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(h(557));l[Al]=t}else Ma(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;fl(t),l=!1}else a=Ai(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=a),l=!0;if(!l)return t.flags&256?(at(t),t):(at(t),null);if((t.flags&128)!==0)throw Error(h(558))}return fl(t),null;case 13:if(e=t.memoizedState,l===null||l.memoizedState!==null&&l.memoizedState.dehydrated!==null){if(u=ee(t),e!==null&&e.dehydrated!==null){if(l===null){if(!u)throw Error(h(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(h(317));u[Al]=t}else Ma(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;fl(t),u=!1}else u=Ai(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=u),u=!0;if(!u)return t.flags&256?(at(t),t):(at(t),null)}return at(t),(t.flags&128)!==0?(t.lanes=a,t):(a=e!==null,l=l!==null&&l.memoizedState!==null,a&&(e=t.child,u=null,e.alternate!==null&&e.alternate.memoizedState!==null&&e.alternate.memoizedState.cachePool!==null&&(u=e.alternate.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==u&&(e.flags|=2048)),a!==l&&a&&(t.child.flags|=8192),on(t,t.updateQueue),fl(t),null);case 4:return hl(),l===null&&jc(t.stateNode.containerInfo),fl(t),null;case 10:return qt(t.type),fl(t),null;case 19:if(T(vl),e=t.memoizedState,e===null)return fl(t),null;if(u=(t.flags&128)!==0,n=e.rendering,n===null)if(u)lu(e,!1);else{if(dl!==0||l!==null&&(l.flags&128)!==0)for(l=t.child;l!==null;){if(n=$u(l),n!==null){for(t.flags|=128,lu(e,!1),l=n.updateQueue,t.updateQueue=l,on(t,l),t.subtreeFlags=0,l=a,a=t.child;a!==null;)ms(a,l),a=a.sibling;return N(vl,vl.current&1|2),K&&Bt(t,e.treeForkCount),t.child}l=l.sibling}e.tail!==null&&$l()>hn&&(t.flags|=128,u=!0,lu(e,!1),t.lanes=4194304)}else{if(!u)if(l=$u(n),l!==null){if(t.flags|=128,u=!0,l=l.updateQueue,t.updateQueue=l,on(t,l),lu(e,!0),e.tail===null&&e.tailMode==="hidden"&&!n.alternate&&!K)return fl(t),null}else 2*$l()-e.renderingStartTime>hn&&a!==536870912&&(t.flags|=128,u=!0,lu(e,!1),t.lanes=4194304);e.isBackwards?(n.sibling=t.child,t.child=n):(l=e.last,l!==null?l.sibling=n:t.child=n,e.last=n)}return e.tail!==null?(l=e.tail,e.rendering=l,e.tail=l.sibling,e.renderingStartTime=$l(),l.sibling=null,a=vl.current,N(vl,u?a&1|2:a&1),K&&Bt(t,e.treeForkCount),l):(fl(t),null);case 22:case 23:return at(t),Qi(),e=t.memoizedState!==null,l!==null?l.memoizedState!==null!==e&&(t.flags|=8192):e&&(t.flags|=8192),e?(a&536870912)!==0&&(t.flags&128)===0&&(fl(t),t.subtreeFlags&6&&(t.flags|=8192)):fl(t),a=t.updateQueue,a!==null&&on(t,a.retryQueue),a=null,l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(a=l.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(t.flags|=2048),l!==null&&T(Ca),null;case 24:return a=null,l!==null&&(a=l.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),qt(El),fl(t),null;case 25:return null;case 30:return null}throw Error(h(156,t.tag))}function Fd(l,t){switch(pi(t),t.tag){case 1:return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 3:return qt(El),hl(),l=t.flags,(l&65536)!==0&&(l&128)===0?(t.flags=l&-65537|128,t):null;case 26:case 27:case 5:return bu(t),null;case 31:if(t.memoizedState!==null){if(at(t),t.alternate===null)throw Error(h(340));Ma()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 13:if(at(t),l=t.memoizedState,l!==null&&l.dehydrated!==null){if(t.alternate===null)throw Error(h(340));Ma()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 19:return T(vl),null;case 4:return hl(),null;case 10:return qt(t.type),null;case 22:case 23:return at(t),Qi(),l!==null&&T(Ca),l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 24:return qt(El),null;case 25:return null;default:return null}}function Yo(l,t){switch(pi(t),t.tag){case 3:qt(El),hl();break;case 26:case 27:case 5:bu(t);break;case 4:hl();break;case 31:t.memoizedState!==null&&at(t);break;case 13:at(t);break;case 19:T(vl);break;case 10:qt(t.type);break;case 22:case 23:at(t),Qi(),l!==null&&T(Ca);break;case 24:qt(El)}}function tu(l,t){try{var a=t.updateQueue,e=a!==null?a.lastEffect:null;if(e!==null){var u=e.next;a=u;do{if((a.tag&l)===l){e=void 0;var n=a.create,i=a.inst;e=n(),i.destroy=e}a=a.next}while(a!==u)}}catch(c){ll(t,t.return,c)}}function ca(l,t,a){try{var e=t.updateQueue,u=e!==null?e.lastEffect:null;if(u!==null){var n=u.next;e=n;do{if((e.tag&l)===l){var i=e.inst,c=i.destroy;if(c!==void 0){i.destroy=void 0,u=t;var f=a,d=c;try{d()}catch(S){ll(u,f,S)}}}e=e.next}while(e!==n)}}catch(S){ll(t,t.return,S)}}function xo(l){var t=l.updateQueue;if(t!==null){var a=l.stateNode;try{Ms(t,a)}catch(e){ll(l,l.return,e)}}}function Go(l,t,a){a.props=ja(l.type,l.memoizedProps),a.state=l.memoizedState;try{a.componentWillUnmount()}catch(e){ll(l,t,e)}}function au(l,t){try{var a=l.ref;if(a!==null){switch(l.tag){case 26:case 27:case 5:var e=l.stateNode;break;case 30:e=l.stateNode;break;default:e=l.stateNode}typeof a=="function"?l.refCleanup=a(e):a.current=e}}catch(u){ll(l,t,u)}}function Dt(l,t){var a=l.ref,e=l.refCleanup;if(a!==null)if(typeof e=="function")try{e()}catch(u){ll(l,t,u)}finally{l.refCleanup=null,l=l.alternate,l!=null&&(l.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ll(l,t,u)}else a.current=null}function Xo(l){var t=l.type,a=l.memoizedProps,e=l.stateNode;try{l:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&e.focus();break l;case"img":a.src?e.src=a.src:a.srcSet&&(e.srcset=a.srcSet)}}catch(u){ll(l,l.return,u)}}function vc(l,t,a){try{var e=l.stateNode;v0(e,l.type,a,t),e[Gl]=t}catch(u){ll(l,l.return,u)}}function Zo(l){return l.tag===5||l.tag===3||l.tag===26||l.tag===27&&ya(l.type)||l.tag===4}function Sc(l){l:for(;;){for(;l.sibling===null;){if(l.return===null||Zo(l.return))return null;l=l.return}for(l.sibling.return=l.return,l=l.sibling;l.tag!==5&&l.tag!==6&&l.tag!==18;){if(l.tag===27&&ya(l.type)||l.flags&2||l.child===null||l.tag===4)continue l;l.child.return=l,l=l.child}if(!(l.flags&2))return l.stateNode}}function Ec(l,t,a){var e=l.tag;if(e===5||e===6)l=l.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(l,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(l),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=_t));else if(e!==4&&(e===27&&ya(l.type)&&(a=l.stateNode,t=null),l=l.child,l!==null))for(Ec(l,t,a),l=l.sibling;l!==null;)Ec(l,t,a),l=l.sibling}function mn(l,t,a){var e=l.tag;if(e===5||e===6)l=l.stateNode,t?a.insertBefore(l,t):a.appendChild(l);else if(e!==4&&(e===27&&ya(l.type)&&(a=l.stateNode),l=l.child,l!==null))for(mn(l,t,a),l=l.sibling;l!==null;)mn(l,t,a),l=l.sibling}function Vo(l){var t=l.stateNode,a=l.memoizedProps;try{for(var e=l.type,u=t.attributes;u.length;)t.removeAttributeNode(u[0]);Ml(t,e,a),t[Al]=l,t[Gl]=a}catch(n){ll(l,l.return,n)}}var Gt=!1,Tl=!1,gc=!1,Ko=typeof WeakSet=="function"?WeakSet:Set,Nl=null;function Wd(l,t){if(l=l.containerInfo,xc=Cn,l=as(l),ri(l)){if("selectionStart"in l)var a={start:l.selectionStart,end:l.selectionEnd};else l:{a=(a=l.ownerDocument)&&a.defaultView||window;var e=a.getSelection&&a.getSelection();if(e&&e.rangeCount!==0){a=e.anchorNode;var u=e.anchorOffset,n=e.focusNode;e=e.focusOffset;try{a.nodeType,n.nodeType}catch{a=null;break l}var i=0,c=-1,f=-1,d=0,S=0,b=l,y=null;t:for(;;){for(var v;b!==a||u!==0&&b.nodeType!==3||(c=i+u),b!==n||e!==0&&b.nodeType!==3||(f=i+e),b.nodeType===3&&(i+=b.nodeValue.length),(v=b.firstChild)!==null;)y=b,b=v;for(;;){if(b===l)break t;if(y===a&&++d===u&&(c=i),y===n&&++S===e&&(f=i),(v=b.nextSibling)!==null)break;b=y,y=b.parentNode}b=v}a=c===-1||f===-1?null:{start:c,end:f}}else a=null}a=a||{start:0,end:0}}else a=null;for(Gc={focusedElem:l,selectionRange:a},Cn=!1,Nl=t;Nl!==null;)if(t=Nl,l=t.child,(t.subtreeFlags&1028)!==0&&l!==null)l.return=t,Nl=l;else for(;Nl!==null;){switch(t=Nl,n=t.alternate,l=t.flags,t.tag){case 0:if((l&4)!==0&&(l=t.updateQueue,l=l!==null?l.events:null,l!==null))for(a=0;a<l.length;a++)u=l[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((l&1024)!==0&&n!==null){l=void 0,a=t,u=n.memoizedProps,n=n.memoizedState,e=a.stateNode;try{var A=ja(a.type,u);l=e.getSnapshotBeforeUpdate(A,n),e.__reactInternalSnapshotBeforeUpdate=l}catch(_){ll(a,a.return,_)}}break;case 3:if((l&1024)!==0){if(l=t.stateNode.containerInfo,a=l.nodeType,a===9)Vc(l);else if(a===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":Vc(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((l&1024)!==0)throw Error(h(163))}if(l=t.sibling,l!==null){l.return=t.return,Nl=l;break}Nl=t.return}}function Jo(l,t,a){var e=a.flags;switch(a.tag){case 0:case 11:case 15:Zt(l,a),e&4&&tu(5,a);break;case 1:if(Zt(l,a),e&4)if(l=a.stateNode,t===null)try{l.componentDidMount()}catch(i){ll(a,a.return,i)}else{var u=ja(a.type,t.memoizedProps);t=t.memoizedState;try{l.componentDidUpdate(u,t,l.__reactInternalSnapshotBeforeUpdate)}catch(i){ll(a,a.return,i)}}e&64&&xo(a),e&512&&au(a,a.return);break;case 3:if(Zt(l,a),e&64&&(l=a.updateQueue,l!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Ms(l,t)}catch(i){ll(a,a.return,i)}}break;case 27:t===null&&e&4&&Vo(a);case 26:case 5:Zt(l,a),t===null&&e&4&&Xo(a),e&512&&au(a,a.return);break;case 12:Zt(l,a);break;case 31:Zt(l,a),e&4&&Wo(l,a);break;case 13:Zt(l,a),e&4&&$o(l,a),e&64&&(l=a.memoizedState,l!==null&&(l=l.dehydrated,l!==null&&(a=u0.bind(null,a),N0(l,a))));break;case 22:if(e=a.memoizedState!==null||Gt,!e){t=t!==null&&t.memoizedState!==null||Tl,u=Gt;var n=Tl;Gt=e,(Tl=t)&&!n?Vt(l,a,(a.subtreeFlags&8772)!==0):Zt(l,a),Gt=u,Tl=n}break;case 30:break;default:Zt(l,a)}}function wo(l){var t=l.alternate;t!==null&&(l.alternate=null,wo(t)),l.child=null,l.deletions=null,l.sibling=null,l.tag===5&&(t=l.stateNode,t!==null&&Wn(t)),l.stateNode=null,l.return=null,l.dependencies=null,l.memoizedProps=null,l.memoizedState=null,l.pendingProps=null,l.stateNode=null,l.updateQueue=null}var ol=null,Zl=!1;function Xt(l,t,a){for(a=a.child;a!==null;)Fo(l,t,a),a=a.sibling}function Fo(l,t,a){if(kl&&typeof kl.onCommitFiberUnmount=="function")try{kl.onCommitFiberUnmount(De,a)}catch{}switch(a.tag){case 26:Tl||Dt(a,t),Xt(l,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Tl||Dt(a,t);var e=ol,u=Zl;ya(a.type)&&(ol=a.stateNode,Zl=!1),Xt(l,t,a),mu(a.stateNode),ol=e,Zl=u;break;case 5:Tl||Dt(a,t);case 6:if(e=ol,u=Zl,ol=null,Xt(l,t,a),ol=e,Zl=u,ol!==null)if(Zl)try{(ol.nodeType===9?ol.body:ol.nodeName==="HTML"?ol.ownerDocument.body:ol).removeChild(a.stateNode)}catch(n){ll(a,t,n)}else try{ol.removeChild(a.stateNode)}catch(n){ll(a,t,n)}break;case 18:ol!==null&&(Zl?(l=ol,xm(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,a.stateNode),Ne(l)):xm(ol,a.stateNode));break;case 4:e=ol,u=Zl,ol=a.stateNode.containerInfo,Zl=!0,Xt(l,t,a),ol=e,Zl=u;break;case 0:case 11:case 14:case 15:ca(2,a,t),Tl||ca(4,a,t),Xt(l,t,a);break;case 1:Tl||(Dt(a,t),e=a.stateNode,typeof e.componentWillUnmount=="function"&&Go(a,t,e)),Xt(l,t,a);break;case 21:Xt(l,t,a);break;case 22:Tl=(e=Tl)||a.memoizedState!==null,Xt(l,t,a),Tl=e;break;default:Xt(l,t,a)}}function Wo(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null))){l=l.dehydrated;try{Ne(l)}catch(a){ll(t,t.return,a)}}}function $o(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null&&(l=l.dehydrated,l!==null))))try{Ne(l)}catch(a){ll(t,t.return,a)}}function $d(l){switch(l.tag){case 31:case 13:case 19:var t=l.stateNode;return t===null&&(t=l.stateNode=new Ko),t;case 22:return l=l.stateNode,t=l._retryCache,t===null&&(t=l._retryCache=new Ko),t;default:throw Error(h(435,l.tag))}}function rn(l,t){var a=$d(l);t.forEach(function(e){if(!a.has(e)){a.add(e);var u=n0.bind(null,l,e);e.then(u,u)}})}function Vl(l,t){var a=t.deletions;if(a!==null)for(var e=0;e<a.length;e++){var u=a[e],n=l,i=t,c=i;l:for(;c!==null;){switch(c.tag){case 27:if(ya(c.type)){ol=c.stateNode,Zl=!1;break l}break;case 5:ol=c.stateNode,Zl=!1;break l;case 3:case 4:ol=c.stateNode.containerInfo,Zl=!0;break l}c=c.return}if(ol===null)throw Error(h(160));Fo(n,i,u),ol=null,Zl=!1,n=u.alternate,n!==null&&(n.return=null),u.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ko(t,l),t=t.sibling}var gt=null;function ko(l,t){var a=l.alternate,e=l.flags;switch(l.tag){case 0:case 11:case 14:case 15:Vl(t,l),Kl(l),e&4&&(ca(3,l,l.return),tu(3,l),ca(5,l,l.return));break;case 1:Vl(t,l),Kl(l),e&512&&(Tl||a===null||Dt(a,a.return)),e&64&&Gt&&(l=l.updateQueue,l!==null&&(e=l.callbacks,e!==null&&(a=l.shared.hiddenCallbacks,l.shared.hiddenCallbacks=a===null?e:a.concat(e))));break;case 26:var u=gt;if(Vl(t,l),Kl(l),e&512&&(Tl||a===null||Dt(a,a.return)),e&4){var n=a!==null?a.memoizedState:null;if(e=l.memoizedState,a===null)if(e===null)if(l.stateNode===null){l:{e=l.type,a=l.memoizedProps,u=u.ownerDocument||u;t:switch(e){case"title":n=u.getElementsByTagName("title")[0],(!n||n[Me]||n[Al]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=u.createElement(e),u.head.insertBefore(n,u.querySelector("head > title"))),Ml(n,e,a),n[Al]=l,pl(n),e=n;break l;case"link":var i=km("link","href",u).get(e+(a.href||""));if(i){for(var c=0;c<i.length;c++)if(n=i[c],n.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&n.getAttribute("rel")===(a.rel==null?null:a.rel)&&n.getAttribute("title")===(a.title==null?null:a.title)&&n.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){i.splice(c,1);break t}}n=u.createElement(e),Ml(n,e,a),u.head.appendChild(n);break;case"meta":if(i=km("meta","content",u).get(e+(a.content||""))){for(c=0;c<i.length;c++)if(n=i[c],n.getAttribute("content")===(a.content==null?null:""+a.content)&&n.getAttribute("name")===(a.name==null?null:a.name)&&n.getAttribute("property")===(a.property==null?null:a.property)&&n.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&n.getAttribute("charset")===(a.charSet==null?null:a.charSet)){i.splice(c,1);break t}}n=u.createElement(e),Ml(n,e,a),u.head.appendChild(n);break;default:throw Error(h(468,e))}n[Al]=l,pl(n),e=n}l.stateNode=e}else Im(u,l.type,l.stateNode);else l.stateNode=$m(u,e,l.memoizedProps);else n!==e?(n===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):n.count--,e===null?Im(u,l.type,l.stateNode):$m(u,e,l.memoizedProps)):e===null&&l.stateNode!==null&&vc(l,l.memoizedProps,a.memoizedProps)}break;case 27:Vl(t,l),Kl(l),e&512&&(Tl||a===null||Dt(a,a.return)),a!==null&&e&4&&vc(l,l.memoizedProps,a.memoizedProps);break;case 5:if(Vl(t,l),Kl(l),e&512&&(Tl||a===null||Dt(a,a.return)),l.flags&32){u=l.stateNode;try{wa(u,"")}catch(A){ll(l,l.return,A)}}e&4&&l.stateNode!=null&&(u=l.memoizedProps,vc(l,u,a!==null?a.memoizedProps:u)),e&1024&&(gc=!0);break;case 6:if(Vl(t,l),Kl(l),e&4){if(l.stateNode===null)throw Error(h(162));e=l.memoizedProps,a=l.stateNode;try{a.nodeValue=e}catch(A){ll(l,l.return,A)}}break;case 3:if(Rn=null,u=gt,gt=Dn(t.containerInfo),Vl(t,l),gt=u,Kl(l),e&4&&a!==null&&a.memoizedState.isDehydrated)try{Ne(t.containerInfo)}catch(A){ll(l,l.return,A)}gc&&(gc=!1,Io(l));break;case 4:e=gt,gt=Dn(l.stateNode.containerInfo),Vl(t,l),Kl(l),gt=e;break;case 12:Vl(t,l),Kl(l);break;case 31:Vl(t,l),Kl(l),e&4&&(e=l.updateQueue,e!==null&&(l.updateQueue=null,rn(l,e)));break;case 13:Vl(t,l),Kl(l),l.child.flags&8192&&l.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(yn=$l()),e&4&&(e=l.updateQueue,e!==null&&(l.updateQueue=null,rn(l,e)));break;case 22:u=l.memoizedState!==null;var f=a!==null&&a.memoizedState!==null,d=Gt,S=Tl;if(Gt=d||u,Tl=S||f,Vl(t,l),Tl=S,Gt=d,Kl(l),e&8192)l:for(t=l.stateNode,t._visibility=u?t._visibility&-2:t._visibility|1,u&&(a===null||f||Gt||Tl||Qa(l)),a=null,t=l;;){if(t.tag===5||t.tag===26){if(a===null){f=a=t;try{if(n=f.stateNode,u)i=n.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{c=f.stateNode;var b=f.memoizedProps.style,y=b!=null&&b.hasOwnProperty("display")?b.display:null;c.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(A){ll(f,f.return,A)}}}else if(t.tag===6){if(a===null){f=t;try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(A){ll(f,f.return,A)}}}else if(t.tag===18){if(a===null){f=t;try{var v=f.stateNode;u?Gm(v,!0):Gm(f.stateNode,!1)}catch(A){ll(f,f.return,A)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===l)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break l;for(;t.sibling===null;){if(t.return===null||t.return===l)break l;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}e&4&&(e=l.updateQueue,e!==null&&(a=e.retryQueue,a!==null&&(e.retryQueue=null,rn(l,a))));break;case 19:Vl(t,l),Kl(l),e&4&&(e=l.updateQueue,e!==null&&(l.updateQueue=null,rn(l,e)));break;case 30:break;case 21:break;default:Vl(t,l),Kl(l)}}function Kl(l){var t=l.flags;if(t&2){try{for(var a,e=l.return;e!==null;){if(Zo(e)){a=e;break}e=e.return}if(a==null)throw Error(h(160));switch(a.tag){case 27:var u=a.stateNode,n=Sc(l);mn(l,n,u);break;case 5:var i=a.stateNode;a.flags&32&&(wa(i,""),a.flags&=-33);var c=Sc(l);mn(l,c,i);break;case 3:case 4:var f=a.stateNode.containerInfo,d=Sc(l);Ec(l,d,f);break;default:throw Error(h(161))}}catch(S){ll(l,l.return,S)}l.flags&=-3}t&4096&&(l.flags&=-4097)}function Io(l){if(l.subtreeFlags&1024)for(l=l.child;l!==null;){var t=l;Io(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),l=l.sibling}}function Zt(l,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Jo(l,t.alternate,t),t=t.sibling}function Qa(l){for(l=l.child;l!==null;){var t=l;switch(t.tag){case 0:case 11:case 14:case 15:ca(4,t,t.return),Qa(t);break;case 1:Dt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Go(t,t.return,a),Qa(t);break;case 27:mu(t.stateNode);case 26:case 5:Dt(t,t.return),Qa(t);break;case 22:t.memoizedState===null&&Qa(t);break;case 30:Qa(t);break;default:Qa(t)}l=l.sibling}}function Vt(l,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var e=t.alternate,u=l,n=t,i=n.flags;switch(n.tag){case 0:case 11:case 15:Vt(u,n,a),tu(4,n);break;case 1:if(Vt(u,n,a),e=n,u=e.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(d){ll(e,e.return,d)}if(e=n,u=e.updateQueue,u!==null){var c=e.stateNode;try{var f=u.shared.hiddenCallbacks;if(f!==null)for(u.shared.hiddenCallbacks=null,u=0;u<f.length;u++)Rs(f[u],c)}catch(d){ll(e,e.return,d)}}a&&i&64&&xo(n),au(n,n.return);break;case 27:Vo(n);case 26:case 5:Vt(u,n,a),a&&e===null&&i&4&&Xo(n),au(n,n.return);break;case 12:Vt(u,n,a);break;case 31:Vt(u,n,a),a&&i&4&&Wo(u,n);break;case 13:Vt(u,n,a),a&&i&4&&$o(u,n);break;case 22:n.memoizedState===null&&Vt(u,n,a),au(n,n.return);break;case 30:break;default:Vt(u,n,a)}t=t.sibling}}function bc(l,t){var a=null;l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(a=l.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(l!=null&&l.refCount++,a!=null&&Xe(a))}function Tc(l,t){l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&Xe(l))}function bt(l,t,a,e){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Po(l,t,a,e),t=t.sibling}function Po(l,t,a,e){var u=t.flags;switch(t.tag){case 0:case 11:case 15:bt(l,t,a,e),u&2048&&tu(9,t);break;case 1:bt(l,t,a,e);break;case 3:bt(l,t,a,e),u&2048&&(l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&Xe(l)));break;case 12:if(u&2048){bt(l,t,a,e),l=t.stateNode;try{var n=t.memoizedProps,i=n.id,c=n.onPostCommit;typeof c=="function"&&c(i,t.alternate===null?"mount":"update",l.passiveEffectDuration,-0)}catch(f){ll(t,t.return,f)}}else bt(l,t,a,e);break;case 31:bt(l,t,a,e);break;case 13:bt(l,t,a,e);break;case 23:break;case 22:n=t.stateNode,i=t.alternate,t.memoizedState!==null?n._visibility&2?bt(l,t,a,e):eu(l,t):n._visibility&2?bt(l,t,a,e):(n._visibility|=2,de(l,t,a,e,(t.subtreeFlags&10256)!==0||!1)),u&2048&&bc(i,t);break;case 24:bt(l,t,a,e),u&2048&&Tc(t.alternate,t);break;default:bt(l,t,a,e)}}function de(l,t,a,e,u){for(u=u&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var n=l,i=t,c=a,f=e,d=i.flags;switch(i.tag){case 0:case 11:case 15:de(n,i,c,f,u),tu(8,i);break;case 23:break;case 22:var S=i.stateNode;i.memoizedState!==null?S._visibility&2?de(n,i,c,f,u):eu(n,i):(S._visibility|=2,de(n,i,c,f,u)),u&&d&2048&&bc(i.alternate,i);break;case 24:de(n,i,c,f,u),u&&d&2048&&Tc(i.alternate,i);break;default:de(n,i,c,f,u)}t=t.sibling}}function eu(l,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=l,e=t,u=e.flags;switch(e.tag){case 22:eu(a,e),u&2048&&bc(e.alternate,e);break;case 24:eu(a,e),u&2048&&Tc(e.alternate,e);break;default:eu(a,e)}t=t.sibling}}var uu=8192;function ye(l,t,a){if(l.subtreeFlags&uu)for(l=l.child;l!==null;)lm(l,t,a),l=l.sibling}function lm(l,t,a){switch(l.tag){case 26:ye(l,t,a),l.flags&uu&&l.memoizedState!==null&&q0(a,gt,l.memoizedState,l.memoizedProps);break;case 5:ye(l,t,a);break;case 3:case 4:var e=gt;gt=Dn(l.stateNode.containerInfo),ye(l,t,a),gt=e;break;case 22:l.memoizedState===null&&(e=l.alternate,e!==null&&e.memoizedState!==null?(e=uu,uu=16777216,ye(l,t,a),uu=e):ye(l,t,a));break;default:ye(l,t,a)}}function tm(l){var t=l.alternate;if(t!==null&&(l=t.child,l!==null)){t.child=null;do t=l.sibling,l.sibling=null,l=t;while(l!==null)}}function nu(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var e=t[a];Nl=e,em(e,l)}tm(l)}if(l.subtreeFlags&10256)for(l=l.child;l!==null;)am(l),l=l.sibling}function am(l){switch(l.tag){case 0:case 11:case 15:nu(l),l.flags&2048&&ca(9,l,l.return);break;case 3:nu(l);break;case 12:nu(l);break;case 22:var t=l.stateNode;l.memoizedState!==null&&t._visibility&2&&(l.return===null||l.return.tag!==13)?(t._visibility&=-3,dn(l)):nu(l);break;default:nu(l)}}function dn(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var e=t[a];Nl=e,em(e,l)}tm(l)}for(l=l.child;l!==null;){switch(t=l,t.tag){case 0:case 11:case 15:ca(8,t,t.return),dn(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,dn(t));break;default:dn(t)}l=l.sibling}}function em(l,t){for(;Nl!==null;){var a=Nl;switch(a.tag){case 0:case 11:case 15:ca(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var e=a.memoizedState.cachePool.pool;e!=null&&e.refCount++}break;case 24:Xe(a.memoizedState.cache)}if(e=a.child,e!==null)e.return=a,Nl=e;else l:for(a=l;Nl!==null;){e=Nl;var u=e.sibling,n=e.return;if(wo(e),e===a){Nl=null;break l}if(u!==null){u.return=n,Nl=u;break l}Nl=n}}}var kd={getCacheForType:function(l){var t=Ul(El),a=t.data.get(l);return a===void 0&&(a=l(),t.data.set(l,a)),a},cacheSignal:function(){return Ul(El).controller.signal}},Id=typeof WeakMap=="function"?WeakMap:Map,W=0,il=null,x=null,X=0,P=0,et=null,fa=!1,he=!1,Oc=!1,Kt=0,dl=0,sa=0,Ya=0,pc=0,ut=0,ve=0,iu=null,Jl=null,Nc=!1,yn=0,um=0,hn=1/0,vn=null,oa=null,Ol=0,ma=null,Se=null,Jt=0,Ac=0,Dc=null,nm=null,cu=0,Uc=null;function nt(){return(W&2)!==0&&X!==0?X&-X:E.T!==null?Lc():bf()}function im(){if(ut===0)if((X&536870912)===0||K){var l=pu;pu<<=1,(pu&3932160)===0&&(pu=262144),ut=l}else ut=536870912;return l=tt.current,l!==null&&(l.flags|=32),ut}function wl(l,t,a){(l===il&&(P===2||P===9)||l.cancelPendingCommit!==null)&&(Ee(l,0),ra(l,X,ut,!1)),Re(l,a),((W&2)===0||l!==il)&&(l===il&&((W&2)===0&&(Ya|=a),dl===4&&ra(l,X,ut,!1)),Ut(l))}function cm(l,t,a){if((W&6)!==0)throw Error(h(327));var e=!a&&(t&127)===0&&(t&l.expiredLanes)===0||Ue(l,t),u=e?t0(l,t):Mc(l,t,!0),n=e;do{if(u===0){he&&!e&&ra(l,t,0,!1);break}else{if(a=l.current.alternate,n&&!Pd(a)){u=Mc(l,t,!1),n=!1;continue}if(u===2){if(n=t,l.errorRecoveryDisabledLanes&n)var i=0;else i=l.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;l:{var c=l;u=iu;var f=c.current.memoizedState.isDehydrated;if(f&&(Ee(c,i).flags|=256),i=Mc(c,i,!1),i!==2){if(Oc&&!f){c.errorRecoveryDisabledLanes|=n,Ya|=n,u=4;break l}n=Jl,Jl=u,n!==null&&(Jl===null?Jl=n:Jl.push.apply(Jl,n))}u=i}if(n=!1,u!==2)continue}}if(u===1){Ee(l,0),ra(l,t,0,!0);break}l:{switch(e=l,n=u,n){case 0:case 1:throw Error(h(345));case 4:if((t&4194048)!==t)break;case 6:ra(e,t,ut,!fa);break l;case 2:Jl=null;break;case 3:case 5:break;default:throw Error(h(329))}if((t&62914560)===t&&(u=yn+300-$l(),10<u)){if(ra(e,t,ut,!fa),Au(e,0,!0)!==0)break l;Jt=t,e.timeoutHandle=Qm(fm.bind(null,e,a,Jl,vn,Nc,t,ut,Ya,ve,fa,n,"Throttled",-0,0),u);break l}fm(e,a,Jl,vn,Nc,t,ut,Ya,ve,fa,n,null,-0,0)}}break}while(!0);Ut(l)}function fm(l,t,a,e,u,n,i,c,f,d,S,b,y,v){if(l.timeoutHandle=-1,b=t.subtreeFlags,b&8192||(b&16785408)===16785408){b={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_t},lm(t,n,b);var A=(n&62914560)===n?yn-$l():(n&4194048)===n?um-$l():0;if(A=j0(b,A),A!==null){Jt=n,l.cancelPendingCommit=A(vm.bind(null,l,t,n,a,e,u,i,c,f,S,b,null,y,v)),ra(l,n,i,!d);return}}vm(l,t,n,a,e,u,i,c,f)}function Pd(l){for(var t=l;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var e=0;e<a.length;e++){var u=a[e],n=u.getSnapshot;u=u.value;try{if(!Pl(n(),u))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ra(l,t,a,e){t&=~pc,t&=~Ya,l.suspendedLanes|=t,l.pingedLanes&=~t,e&&(l.warmLanes|=t),e=l.expirationTimes;for(var u=t;0<u;){var n=31-Il(u),i=1<<n;e[n]=-1,u&=~i}a!==0&&Sf(l,a,t)}function Sn(){return(W&6)===0?(fu(0),!1):!0}function Rc(){if(x!==null){if(P===0)var l=x.return;else l=x,Ht=za=null,Vi(l),fe=null,Ve=0,l=x;for(;l!==null;)Yo(l.alternate,l),l=l.return;x=null}}function Ee(l,t){var a=l.timeoutHandle;a!==-1&&(l.timeoutHandle=-1,g0(a)),a=l.cancelPendingCommit,a!==null&&(l.cancelPendingCommit=null,a()),Jt=0,Rc(),il=l,x=a=Lt(l.current,null),X=t,P=0,et=null,fa=!1,he=Ue(l,t),Oc=!1,ve=ut=pc=Ya=sa=dl=0,Jl=iu=null,Nc=!1,(t&8)!==0&&(t|=t&32);var e=l.entangledLanes;if(e!==0)for(l=l.entanglements,e&=t;0<e;){var u=31-Il(e),n=1<<u;t|=l[u],e&=~n}return Kt=t,ju(),a}function sm(l,t){j=null,E.H=Ie,t===ce||t===Ku?(t=Ns(),P=3):t===Ci?(t=Ns(),P=4):P=t===ic?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,et=t,x===null&&(dl=1,nn(l,ot(t,l.current)))}function om(){var l=tt.current;return l===null?!0:(X&4194048)===X?yt===null:(X&62914560)===X||(X&536870912)!==0?l===yt:!1}function mm(){var l=E.H;return E.H=Ie,l===null?Ie:l}function rm(){var l=E.A;return E.A=kd,l}function En(){dl=4,fa||(X&4194048)!==X&&tt.current!==null||(he=!0),(sa&134217727)===0&&(Ya&134217727)===0||il===null||ra(il,X,ut,!1)}function Mc(l,t,a){var e=W;W|=2;var u=mm(),n=rm();(il!==l||X!==t)&&(vn=null,Ee(l,t)),t=!1;var i=dl;l:do try{if(P!==0&&x!==null){var c=x,f=et;switch(P){case 8:Rc(),i=6;break l;case 3:case 2:case 9:case 6:tt.current===null&&(t=!0);var d=P;if(P=0,et=null,ge(l,c,f,d),a&&he){i=0;break l}break;default:d=P,P=0,et=null,ge(l,c,f,d)}}l0(),i=dl;break}catch(S){sm(l,S)}while(!0);return t&&l.shellSuspendCounter++,Ht=za=null,W=e,E.H=u,E.A=n,x===null&&(il=null,X=0,ju()),i}function l0(){for(;x!==null;)dm(x)}function t0(l,t){var a=W;W|=2;var e=mm(),u=rm();il!==l||X!==t?(vn=null,hn=$l()+500,Ee(l,t)):he=Ue(l,t);l:do try{if(P!==0&&x!==null){t=x;var n=et;t:switch(P){case 1:P=0,et=null,ge(l,t,n,1);break;case 2:case 9:if(Os(n)){P=0,et=null,ym(t);break}t=function(){P!==2&&P!==9||il!==l||(P=7),Ut(l)},n.then(t,t);break l;case 3:P=7;break l;case 4:P=5;break l;case 7:Os(n)?(P=0,et=null,ym(t)):(P=0,et=null,ge(l,t,n,7));break;case 5:var i=null;switch(x.tag){case 26:i=x.memoizedState;case 5:case 27:var c=x;if(i?Pm(i):c.stateNode.complete){P=0,et=null;var f=c.sibling;if(f!==null)x=f;else{var d=c.return;d!==null?(x=d,gn(d)):x=null}break t}}P=0,et=null,ge(l,t,n,5);break;case 6:P=0,et=null,ge(l,t,n,6);break;case 8:Rc(),dl=6;break l;default:throw Error(h(462))}}a0();break}catch(S){sm(l,S)}while(!0);return Ht=za=null,E.H=e,E.A=u,W=a,x!==null?0:(il=null,X=0,ju(),dl)}function a0(){for(;x!==null&&!Ar();)dm(x)}function dm(l){var t=jo(l.alternate,l,Kt);l.memoizedProps=l.pendingProps,t===null?gn(l):x=t}function ym(l){var t=l,a=t.alternate;switch(t.tag){case 15:case 0:t=_o(a,t,t.pendingProps,t.type,void 0,X);break;case 11:t=_o(a,t,t.pendingProps,t.type.render,t.ref,X);break;case 5:Vi(t);default:Yo(a,t),t=x=ms(t,Kt),t=jo(a,t,Kt)}l.memoizedProps=l.pendingProps,t===null?gn(l):x=t}function ge(l,t,a,e){Ht=za=null,Vi(t),fe=null,Ve=0;var u=t.return;try{if(Vd(l,u,t,a,X)){dl=1,nn(l,ot(a,l.current)),x=null;return}}catch(n){if(u!==null)throw x=u,n;dl=1,nn(l,ot(a,l.current)),x=null;return}t.flags&32768?(K||e===1?l=!0:he||(X&536870912)!==0?l=!1:(fa=l=!0,(e===2||e===9||e===3||e===6)&&(e=tt.current,e!==null&&e.tag===13&&(e.flags|=16384))),hm(t,l)):gn(t)}function gn(l){var t=l;do{if((t.flags&32768)!==0){hm(t,fa);return}l=t.return;var a=wd(t.alternate,t,Kt);if(a!==null){x=a;return}if(t=t.sibling,t!==null){x=t;return}x=t=l}while(t!==null);dl===0&&(dl=5)}function hm(l,t){do{var a=Fd(l.alternate,l);if(a!==null){a.flags&=32767,x=a;return}if(a=l.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(l=l.sibling,l!==null)){x=l;return}x=l=a}while(l!==null);dl=6,x=null}function vm(l,t,a,e,u,n,i,c,f){l.cancelPendingCommit=null;do bn();while(Ol!==0);if((W&6)!==0)throw Error(h(327));if(t!==null){if(t===l.current)throw Error(h(177));if(n=t.lanes|t.childLanes,n|=Si,Hr(l,a,n,i,c,f),l===il&&(x=il=null,X=0),Se=t,ma=l,Jt=a,Ac=n,Dc=u,nm=e,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(l.callbackNode=null,l.callbackPriority=0,i0(Tu,function(){return Tm(),null})):(l.callbackNode=null,l.callbackPriority=0),e=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||e){e=E.T,E.T=null,u=p.p,p.p=2,i=W,W|=4;try{Wd(l,t,a)}finally{W=i,p.p=u,E.T=e}}Ol=1,Sm(),Em(),gm()}}function Sm(){if(Ol===1){Ol=0;var l=ma,t=Se,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=E.T,E.T=null;var e=p.p;p.p=2;var u=W;W|=4;try{ko(t,l);var n=Gc,i=as(l.containerInfo),c=n.focusedElem,f=n.selectionRange;if(i!==c&&c&&c.ownerDocument&&ts(c.ownerDocument.documentElement,c)){if(f!==null&&ri(c)){var d=f.start,S=f.end;if(S===void 0&&(S=d),"selectionStart"in c)c.selectionStart=d,c.selectionEnd=Math.min(S,c.value.length);else{var b=c.ownerDocument||document,y=b&&b.defaultView||window;if(y.getSelection){var v=y.getSelection(),A=c.textContent.length,_=Math.min(f.start,A),ul=f.end===void 0?_:Math.min(f.end,A);!v.extend&&_>ul&&(i=ul,ul=_,_=i);var m=ls(c,_),s=ls(c,ul);if(m&&s&&(v.rangeCount!==1||v.anchorNode!==m.node||v.anchorOffset!==m.offset||v.focusNode!==s.node||v.focusOffset!==s.offset)){var r=b.createRange();r.setStart(m.node,m.offset),v.removeAllRanges(),_>ul?(v.addRange(r),v.extend(s.node,s.offset)):(r.setEnd(s.node,s.offset),v.addRange(r))}}}}for(b=[],v=c;v=v.parentNode;)v.nodeType===1&&b.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<b.length;c++){var g=b[c];g.element.scrollLeft=g.left,g.element.scrollTop=g.top}}Cn=!!xc,Gc=xc=null}finally{W=u,p.p=e,E.T=a}}l.current=t,Ol=2}}function Em(){if(Ol===2){Ol=0;var l=ma,t=Se,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=E.T,E.T=null;var e=p.p;p.p=2;var u=W;W|=4;try{Jo(l,t.alternate,t)}finally{W=u,p.p=e,E.T=a}}Ol=3}}function gm(){if(Ol===4||Ol===3){Ol=0,Dr();var l=ma,t=Se,a=Jt,e=nm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ol=5:(Ol=0,Se=ma=null,bm(l,l.pendingLanes));var u=l.pendingLanes;if(u===0&&(oa=null),wn(a),t=t.stateNode,kl&&typeof kl.onCommitFiberRoot=="function")try{kl.onCommitFiberRoot(De,t,void 0,(t.current.flags&128)===128)}catch{}if(e!==null){t=E.T,u=p.p,p.p=2,E.T=null;try{for(var n=l.onRecoverableError,i=0;i<e.length;i++){var c=e[i];n(c.value,{componentStack:c.stack})}}finally{E.T=t,p.p=u}}(Jt&3)!==0&&bn(),Ut(l),u=l.pendingLanes,(a&261930)!==0&&(u&42)!==0?l===Uc?cu++:(cu=0,Uc=l):cu=0,fu(0)}}function bm(l,t){(l.pooledCacheLanes&=t)===0&&(t=l.pooledCache,t!=null&&(l.pooledCache=null,Xe(t)))}function bn(){return Sm(),Em(),gm(),Tm()}function Tm(){if(Ol!==5)return!1;var l=ma,t=Ac;Ac=0;var a=wn(Jt),e=E.T,u=p.p;try{p.p=32>a?32:a,E.T=null,a=Dc,Dc=null;var n=ma,i=Jt;if(Ol=0,Se=ma=null,Jt=0,(W&6)!==0)throw Error(h(331));var c=W;if(W|=4,am(n.current),Po(n,n.current,i,a),W=c,fu(0,!1),kl&&typeof kl.onPostCommitFiberRoot=="function")try{kl.onPostCommitFiberRoot(De,n)}catch{}return!0}finally{p.p=u,E.T=e,bm(l,t)}}function Om(l,t,a){t=ot(a,t),t=nc(l.stateNode,t,2),l=ua(l,t,2),l!==null&&(Re(l,2),Ut(l))}function ll(l,t,a){if(l.tag===3)Om(l,l,a);else for(;t!==null;){if(t.tag===3){Om(t,l,a);break}else if(t.tag===1){var e=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(oa===null||!oa.has(e))){l=ot(a,l),a=po(2),e=ua(t,a,2),e!==null&&(No(a,e,t,l),Re(e,2),Ut(e));break}}t=t.return}}function zc(l,t,a){var e=l.pingCache;if(e===null){e=l.pingCache=new Id;var u=new Set;e.set(t,u)}else u=e.get(t),u===void 0&&(u=new Set,e.set(t,u));u.has(a)||(Oc=!0,u.add(a),l=e0.bind(null,l,t,a),t.then(l,l))}function e0(l,t,a){var e=l.pingCache;e!==null&&e.delete(t),l.pingedLanes|=l.suspendedLanes&a,l.warmLanes&=~a,il===l&&(X&a)===a&&(dl===4||dl===3&&(X&62914560)===X&&300>$l()-yn?(W&2)===0&&Ee(l,0):pc|=a,ve===X&&(ve=0)),Ut(l)}function pm(l,t){t===0&&(t=vf()),l=Ua(l,t),l!==null&&(Re(l,t),Ut(l))}function u0(l){var t=l.memoizedState,a=0;t!==null&&(a=t.retryLane),pm(l,a)}function n0(l,t){var a=0;switch(l.tag){case 31:case 13:var e=l.stateNode,u=l.memoizedState;u!==null&&(a=u.retryLane);break;case 19:e=l.stateNode;break;case 22:e=l.stateNode._retryCache;break;default:throw Error(h(314))}e!==null&&e.delete(t),pm(l,a)}function i0(l,t){return Zn(l,t)}var Tn=null,be=null,_c=!1,On=!1,Cc=!1,da=0;function Ut(l){l!==be&&l.next===null&&(be===null?Tn=be=l:be=be.next=l),On=!0,_c||(_c=!0,f0())}function fu(l,t){if(!Cc&&On){Cc=!0;do for(var a=!1,e=Tn;e!==null;){if(l!==0){var u=e.pendingLanes;if(u===0)var n=0;else{var i=e.suspendedLanes,c=e.pingedLanes;n=(1<<31-Il(42|l)+1)-1,n&=u&~(i&~c),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(a=!0,Um(e,n))}else n=X,n=Au(e,e===il?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),(n&3)===0||Ue(e,n)||(a=!0,Um(e,n));e=e.next}while(a);Cc=!1}}function c0(){Nm()}function Nm(){On=_c=!1;var l=0;da!==0&&E0()&&(l=da);for(var t=$l(),a=null,e=Tn;e!==null;){var u=e.next,n=Am(e,t);n===0?(e.next=null,a===null?Tn=u:a.next=u,u===null&&(be=a)):(a=e,(l!==0||(n&3)!==0)&&(On=!0)),e=u}Ol!==0&&Ol!==5||fu(l),da!==0&&(da=0)}function Am(l,t){for(var a=l.suspendedLanes,e=l.pingedLanes,u=l.expirationTimes,n=l.pendingLanes&-62914561;0<n;){var i=31-Il(n),c=1<<i,f=u[i];f===-1?((c&a)===0||(c&e)!==0)&&(u[i]=Br(c,t)):f<=t&&(l.expiredLanes|=c),n&=~c}if(t=il,a=X,a=Au(l,l===t?a:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),e=l.callbackNode,a===0||l===t&&(P===2||P===9)||l.cancelPendingCommit!==null)return e!==null&&e!==null&&Vn(e),l.callbackNode=null,l.callbackPriority=0;if((a&3)===0||Ue(l,a)){if(t=a&-a,t===l.callbackPriority)return t;switch(e!==null&&Vn(e),wn(a)){case 2:case 8:a=yf;break;case 32:a=Tu;break;case 268435456:a=hf;break;default:a=Tu}return e=Dm.bind(null,l),a=Zn(a,e),l.callbackPriority=t,l.callbackNode=a,t}return e!==null&&e!==null&&Vn(e),l.callbackPriority=2,l.callbackNode=null,2}function Dm(l,t){if(Ol!==0&&Ol!==5)return l.callbackNode=null,l.callbackPriority=0,null;var a=l.callbackNode;if(bn()&&l.callbackNode!==a)return null;var e=X;return e=Au(l,l===il?e:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),e===0?null:(cm(l,e,t),Am(l,$l()),l.callbackNode!=null&&l.callbackNode===a?Dm.bind(null,l):null)}function Um(l,t){if(bn())return null;cm(l,t,!0)}function f0(){b0(function(){(W&6)!==0?Zn(df,c0):Nm()})}function Lc(){if(da===0){var l=ne;l===0&&(l=Ou,Ou<<=1,(Ou&261888)===0&&(Ou=256)),da=l}return da}function Rm(l){return l==null||typeof l=="symbol"||typeof l=="boolean"?null:typeof l=="function"?l:Mu(""+l)}function Mm(l,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,l.id&&a.setAttribute("form",l.id),t.parentNode.insertBefore(a,t),l=new FormData(l),a.parentNode.removeChild(a),l}function s0(l,t,a,e,u){if(t==="submit"&&a&&a.stateNode===u){var n=Rm((u[Gl]||null).action),i=e.submitter;i&&(t=(t=i[Gl]||null)?Rm(t.formAction):i.getAttribute("formAction"),t!==null&&(n=t,i=null));var c=new Lu("action","action",null,e,u);l.push({event:c,listeners:[{instance:null,listener:function(){if(e.defaultPrevented){if(da!==0){var f=i?Mm(u,i):new FormData(u);Pi(a,{pending:!0,data:f,method:u.method,action:n},null,f)}}else typeof n=="function"&&(c.preventDefault(),f=i?Mm(u,i):new FormData(u),Pi(a,{pending:!0,data:f,method:u.method,action:n},n,f))},currentTarget:u}]})}}for(var Bc=0;Bc<vi.length;Bc++){var Hc=vi[Bc],o0=Hc.toLowerCase(),m0=Hc[0].toUpperCase()+Hc.slice(1);Et(o0,"on"+m0)}Et(ns,"onAnimationEnd"),Et(is,"onAnimationIteration"),Et(cs,"onAnimationStart"),Et("dblclick","onDoubleClick"),Et("focusin","onFocus"),Et("focusout","onBlur"),Et(Ud,"onTransitionRun"),Et(Rd,"onTransitionStart"),Et(Md,"onTransitionCancel"),Et(fs,"onTransitionEnd"),Ka("onMouseEnter",["mouseout","mouseover"]),Ka("onMouseLeave",["mouseout","mouseover"]),Ka("onPointerEnter",["pointerout","pointerover"]),Ka("onPointerLeave",["pointerout","pointerover"]),pa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),pa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),pa("onBeforeInput",["compositionend","keypress","textInput","paste"]),pa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),pa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),pa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var su="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),r0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(su));function zm(l,t){t=(t&4)!==0;for(var a=0;a<l.length;a++){var e=l[a],u=e.event;e=e.listeners;l:{var n=void 0;if(t)for(var i=e.length-1;0<=i;i--){var c=e[i],f=c.instance,d=c.currentTarget;if(c=c.listener,f!==n&&u.isPropagationStopped())break l;n=c,u.currentTarget=d;try{n(u)}catch(S){qu(S)}u.currentTarget=null,n=f}else for(i=0;i<e.length;i++){if(c=e[i],f=c.instance,d=c.currentTarget,c=c.listener,f!==n&&u.isPropagationStopped())break l;n=c,u.currentTarget=d;try{n(u)}catch(S){qu(S)}u.currentTarget=null,n=f}}}}function G(l,t){var a=t[Fn];a===void 0&&(a=t[Fn]=new Set);var e=l+"__bubble";a.has(e)||(_m(t,l,2,!1),a.add(e))}function qc(l,t,a){var e=0;t&&(e|=4),_m(a,l,e,t)}var pn="_reactListening"+Math.random().toString(36).slice(2);function jc(l){if(!l[pn]){l[pn]=!0,pf.forEach(function(a){a!=="selectionchange"&&(r0.has(a)||qc(a,!1,l),qc(a,!0,l))});var t=l.nodeType===9?l:l.ownerDocument;t===null||t[pn]||(t[pn]=!0,qc("selectionchange",!1,t))}}function _m(l,t,a,e){switch(ir(t)){case 2:var u=x0;break;case 8:u=G0;break;default:u=Ic}a=u.bind(null,t,a,l),u=void 0,!ei||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),e?u!==void 0?l.addEventListener(t,a,{capture:!0,passive:u}):l.addEventListener(t,a,!0):u!==void 0?l.addEventListener(t,a,{passive:u}):l.addEventListener(t,a,!1)}function Qc(l,t,a,e,u){var n=e;if((t&1)===0&&(t&2)===0&&e!==null)l:for(;;){if(e===null)return;var i=e.tag;if(i===3||i===4){var c=e.stateNode.containerInfo;if(c===u)break;if(i===4)for(i=e.return;i!==null;){var f=i.tag;if((f===3||f===4)&&i.stateNode.containerInfo===u)return;i=i.return}for(;c!==null;){if(i=Xa(c),i===null)return;if(f=i.tag,f===5||f===6||f===26||f===27){e=n=i;continue l}c=c.parentNode}}e=e.return}Hf(function(){var d=n,S=ti(a),b=[];l:{var y=ss.get(l);if(y!==void 0){var v=Lu,A=l;switch(l){case"keypress":if(_u(a)===0)break l;case"keydown":case"keyup":v=nd;break;case"focusin":A="focus",v=ci;break;case"focusout":A="blur",v=ci;break;case"beforeblur":case"afterblur":v=ci;break;case"click":if(a.button===2)break l;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=wr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=fd;break;case ns:case is:case cs:v=$r;break;case fs:v=od;break;case"scroll":case"scrollend":v=Kr;break;case"wheel":v=rd;break;case"copy":case"cut":case"paste":v=Ir;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=xf;break;case"toggle":case"beforetoggle":v=yd}var _=(t&4)!==0,ul=!_&&(l==="scroll"||l==="scrollend"),m=_?y!==null?y+"Capture":null:y;_=[];for(var s=d,r;s!==null;){var g=s;if(r=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||r===null||m===null||(g=_e(s,m),g!=null&&_.push(ou(s,g,r))),ul)break;s=s.return}0<_.length&&(y=new v(y,A,null,a,S),b.push({event:y,listeners:_}))}}if((t&7)===0){l:{if(y=l==="mouseover"||l==="pointerover",v=l==="mouseout"||l==="pointerout",y&&a!==li&&(A=a.relatedTarget||a.fromElement)&&(Xa(A)||A[Ga]))break l;if((v||y)&&(y=S.window===S?S:(y=S.ownerDocument)?y.defaultView||y.parentWindow:window,v?(A=a.relatedTarget||a.toElement,v=d,A=A?Xa(A):null,A!==null&&(ul=F(A),_=A.tag,A!==ul||_!==5&&_!==27&&_!==6)&&(A=null)):(v=null,A=d),v!==A)){if(_=Qf,g="onMouseLeave",m="onMouseEnter",s="mouse",(l==="pointerout"||l==="pointerover")&&(_=xf,g="onPointerLeave",m="onPointerEnter",s="pointer"),ul=v==null?y:ze(v),r=A==null?y:ze(A),y=new _(g,s+"leave",v,a,S),y.target=ul,y.relatedTarget=r,g=null,Xa(S)===d&&(_=new _(m,s+"enter",A,a,S),_.target=r,_.relatedTarget=ul,g=_),ul=g,v&&A)t:{for(_=d0,m=v,s=A,r=0,g=m;g;g=_(g))r++;g=0;for(var M=s;M;M=_(M))g++;for(;0<r-g;)m=_(m),r--;for(;0<g-r;)s=_(s),g--;for(;r--;){if(m===s||s!==null&&m===s.alternate){_=m;break t}m=_(m),s=_(s)}_=null}else _=null;v!==null&&Cm(b,y,v,_,!1),A!==null&&ul!==null&&Cm(b,ul,A,_,!0)}}l:{if(y=d?ze(d):window,v=y.nodeName&&y.nodeName.toLowerCase(),v==="select"||v==="input"&&y.type==="file")var J=Ff;else if(Jf(y))if(Wf)J=Nd;else{J=Od;var R=Td}else v=y.nodeName,!v||v.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?d&&Pn(d.elementType)&&(J=Ff):J=pd;if(J&&(J=J(l,d))){wf(b,J,a,S);break l}R&&R(l,y,d),l==="focusout"&&d&&y.type==="number"&&d.memoizedProps.value!=null&&In(y,"number",y.value)}switch(R=d?ze(d):window,l){case"focusin":(Jf(R)||R.contentEditable==="true")&&(ka=R,di=d,Ye=null);break;case"focusout":Ye=di=ka=null;break;case"mousedown":yi=!0;break;case"contextmenu":case"mouseup":case"dragend":yi=!1,es(b,a,S);break;case"selectionchange":if(Dd)break;case"keydown":case"keyup":es(b,a,S)}var Q;if(si)l:{switch(l){case"compositionstart":var Z="onCompositionStart";break l;case"compositionend":Z="onCompositionEnd";break l;case"compositionupdate":Z="onCompositionUpdate";break l}Z=void 0}else $a?Vf(l,a)&&(Z="onCompositionEnd"):l==="keydown"&&a.keyCode===229&&(Z="onCompositionStart");Z&&(Gf&&a.locale!=="ko"&&($a||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&$a&&(Q=qf()):(kt=S,ui="value"in kt?kt.value:kt.textContent,$a=!0)),R=Nn(d,Z),0<R.length&&(Z=new Yf(Z,l,null,a,S),b.push({event:Z,listeners:R}),Q?Z.data=Q:(Q=Kf(a),Q!==null&&(Z.data=Q)))),(Q=vd?Sd(l,a):Ed(l,a))&&(Z=Nn(d,"onBeforeInput"),0<Z.length&&(R=new Yf("onBeforeInput","beforeinput",null,a,S),b.push({event:R,listeners:Z}),R.data=Q)),s0(b,l,d,a,S)}zm(b,t)})}function ou(l,t,a){return{instance:l,listener:t,currentTarget:a}}function Nn(l,t){for(var a=t+"Capture",e=[];l!==null;){var u=l,n=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||n===null||(u=_e(l,a),u!=null&&e.unshift(ou(l,u,n)),u=_e(l,t),u!=null&&e.push(ou(l,u,n))),l.tag===3)return e;l=l.return}return[]}function d0(l){if(l===null)return null;do l=l.return;while(l&&l.tag!==5&&l.tag!==27);return l||null}function Cm(l,t,a,e,u){for(var n=t._reactName,i=[];a!==null&&a!==e;){var c=a,f=c.alternate,d=c.stateNode;if(c=c.tag,f!==null&&f===e)break;c!==5&&c!==26&&c!==27||d===null||(f=d,u?(d=_e(a,n),d!=null&&i.unshift(ou(a,d,f))):u||(d=_e(a,n),d!=null&&i.push(ou(a,d,f)))),a=a.return}i.length!==0&&l.push({event:t,listeners:i})}var y0=/\r\n?/g,h0=/\u0000|\uFFFD/g;function Lm(l){return(typeof l=="string"?l:""+l).replace(y0,`
`).replace(h0,"")}function Bm(l,t){return t=Lm(t),Lm(l)===t}function el(l,t,a,e,u,n){switch(a){case"children":typeof e=="string"?t==="body"||t==="textarea"&&e===""||wa(l,e):(typeof e=="number"||typeof e=="bigint")&&t!=="body"&&wa(l,""+e);break;case"className":Uu(l,"class",e);break;case"tabIndex":Uu(l,"tabindex",e);break;case"dir":case"role":case"viewBox":case"width":case"height":Uu(l,a,e);break;case"style":Lf(l,e,n);break;case"data":if(t!=="object"){Uu(l,"data",e);break}case"src":case"href":if(e===""&&(t!=="a"||a!=="href")){l.removeAttribute(a);break}if(e==null||typeof e=="function"||typeof e=="symbol"||typeof e=="boolean"){l.removeAttribute(a);break}e=Mu(""+e),l.setAttribute(a,e);break;case"action":case"formAction":if(typeof e=="function"){l.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(a==="formAction"?(t!=="input"&&el(l,t,"name",u.name,u,null),el(l,t,"formEncType",u.formEncType,u,null),el(l,t,"formMethod",u.formMethod,u,null),el(l,t,"formTarget",u.formTarget,u,null)):(el(l,t,"encType",u.encType,u,null),el(l,t,"method",u.method,u,null),el(l,t,"target",u.target,u,null)));if(e==null||typeof e=="symbol"||typeof e=="boolean"){l.removeAttribute(a);break}e=Mu(""+e),l.setAttribute(a,e);break;case"onClick":e!=null&&(l.onclick=_t);break;case"onScroll":e!=null&&G("scroll",l);break;case"onScrollEnd":e!=null&&G("scrollend",l);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(h(61));if(a=e.__html,a!=null){if(u.children!=null)throw Error(h(60));l.innerHTML=a}}break;case"multiple":l.multiple=e&&typeof e!="function"&&typeof e!="symbol";break;case"muted":l.muted=e&&typeof e!="function"&&typeof e!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(e==null||typeof e=="function"||typeof e=="boolean"||typeof e=="symbol"){l.removeAttribute("xlink:href");break}a=Mu(""+e),l.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":e!=null&&typeof e!="function"&&typeof e!="symbol"?l.setAttribute(a,""+e):l.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":e&&typeof e!="function"&&typeof e!="symbol"?l.setAttribute(a,""):l.removeAttribute(a);break;case"capture":case"download":e===!0?l.setAttribute(a,""):e!==!1&&e!=null&&typeof e!="function"&&typeof e!="symbol"?l.setAttribute(a,e):l.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":e!=null&&typeof e!="function"&&typeof e!="symbol"&&!isNaN(e)&&1<=e?l.setAttribute(a,e):l.removeAttribute(a);break;case"rowSpan":case"start":e==null||typeof e=="function"||typeof e=="symbol"||isNaN(e)?l.removeAttribute(a):l.setAttribute(a,e);break;case"popover":G("beforetoggle",l),G("toggle",l),Du(l,"popover",e);break;case"xlinkActuate":zt(l,"http://www.w3.org/1999/xlink","xlink:actuate",e);break;case"xlinkArcrole":zt(l,"http://www.w3.org/1999/xlink","xlink:arcrole",e);break;case"xlinkRole":zt(l,"http://www.w3.org/1999/xlink","xlink:role",e);break;case"xlinkShow":zt(l,"http://www.w3.org/1999/xlink","xlink:show",e);break;case"xlinkTitle":zt(l,"http://www.w3.org/1999/xlink","xlink:title",e);break;case"xlinkType":zt(l,"http://www.w3.org/1999/xlink","xlink:type",e);break;case"xmlBase":zt(l,"http://www.w3.org/XML/1998/namespace","xml:base",e);break;case"xmlLang":zt(l,"http://www.w3.org/XML/1998/namespace","xml:lang",e);break;case"xmlSpace":zt(l,"http://www.w3.org/XML/1998/namespace","xml:space",e);break;case"is":Du(l,"is",e);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Zr.get(a)||a,Du(l,a,e))}}function Yc(l,t,a,e,u,n){switch(a){case"style":Lf(l,e,n);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(h(61));if(a=e.__html,a!=null){if(u.children!=null)throw Error(h(60));l.innerHTML=a}}break;case"children":typeof e=="string"?wa(l,e):(typeof e=="number"||typeof e=="bigint")&&wa(l,""+e);break;case"onScroll":e!=null&&G("scroll",l);break;case"onScrollEnd":e!=null&&G("scrollend",l);break;case"onClick":e!=null&&(l.onclick=_t);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Nf.hasOwnProperty(a))l:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),t=a.slice(2,u?a.length-7:void 0),n=l[Gl]||null,n=n!=null?n[a]:null,typeof n=="function"&&l.removeEventListener(t,n,u),typeof e=="function")){typeof n!="function"&&n!==null&&(a in l?l[a]=null:l.hasAttribute(a)&&l.removeAttribute(a)),l.addEventListener(t,e,u);break l}a in l?l[a]=e:e===!0?l.setAttribute(a,""):Du(l,a,e)}}}function Ml(l,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":G("error",l),G("load",l);var e=!1,u=!1,n;for(n in a)if(a.hasOwnProperty(n)){var i=a[n];if(i!=null)switch(n){case"src":e=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:el(l,t,n,i,a,null)}}u&&el(l,t,"srcSet",a.srcSet,a,null),e&&el(l,t,"src",a.src,a,null);return;case"input":G("invalid",l);var c=n=i=u=null,f=null,d=null;for(e in a)if(a.hasOwnProperty(e)){var S=a[e];if(S!=null)switch(e){case"name":u=S;break;case"type":i=S;break;case"checked":f=S;break;case"defaultChecked":d=S;break;case"value":n=S;break;case"defaultValue":c=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(h(137,t));break;default:el(l,t,e,S,a,null)}}Mf(l,n,c,f,d,i,u,!1);return;case"select":G("invalid",l),e=i=n=null;for(u in a)if(a.hasOwnProperty(u)&&(c=a[u],c!=null))switch(u){case"value":n=c;break;case"defaultValue":i=c;break;case"multiple":e=c;default:el(l,t,u,c,a,null)}t=n,a=i,l.multiple=!!e,t!=null?Ja(l,!!e,t,!1):a!=null&&Ja(l,!!e,a,!0);return;case"textarea":G("invalid",l),n=u=e=null;for(i in a)if(a.hasOwnProperty(i)&&(c=a[i],c!=null))switch(i){case"value":e=c;break;case"defaultValue":u=c;break;case"children":n=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(h(91));break;default:el(l,t,i,c,a,null)}_f(l,e,u,n);return;case"option":for(f in a)if(a.hasOwnProperty(f)&&(e=a[f],e!=null))switch(f){case"selected":l.selected=e&&typeof e!="function"&&typeof e!="symbol";break;default:el(l,t,f,e,a,null)}return;case"dialog":G("beforetoggle",l),G("toggle",l),G("cancel",l),G("close",l);break;case"iframe":case"object":G("load",l);break;case"video":case"audio":for(e=0;e<su.length;e++)G(su[e],l);break;case"image":G("error",l),G("load",l);break;case"details":G("toggle",l);break;case"embed":case"source":case"link":G("error",l),G("load",l);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in a)if(a.hasOwnProperty(d)&&(e=a[d],e!=null))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:el(l,t,d,e,a,null)}return;default:if(Pn(t)){for(S in a)a.hasOwnProperty(S)&&(e=a[S],e!==void 0&&Yc(l,t,S,e,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(e=a[c],e!=null&&el(l,t,c,e,a,null))}function v0(l,t,a,e){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,n=null,i=null,c=null,f=null,d=null,S=null;for(v in a){var b=a[v];if(a.hasOwnProperty(v)&&b!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":f=b;default:e.hasOwnProperty(v)||el(l,t,v,null,e,b)}}for(var y in e){var v=e[y];if(b=a[y],e.hasOwnProperty(y)&&(v!=null||b!=null))switch(y){case"type":n=v;break;case"name":u=v;break;case"checked":d=v;break;case"defaultChecked":S=v;break;case"value":i=v;break;case"defaultValue":c=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(h(137,t));break;default:v!==b&&el(l,t,y,v,e,b)}}kn(l,i,c,f,d,S,n,u);return;case"select":v=i=c=y=null;for(n in a)if(f=a[n],a.hasOwnProperty(n)&&f!=null)switch(n){case"value":break;case"multiple":v=f;default:e.hasOwnProperty(n)||el(l,t,n,null,e,f)}for(u in e)if(n=e[u],f=a[u],e.hasOwnProperty(u)&&(n!=null||f!=null))switch(u){case"value":y=n;break;case"defaultValue":c=n;break;case"multiple":i=n;default:n!==f&&el(l,t,u,n,e,f)}t=c,a=i,e=v,y!=null?Ja(l,!!a,y,!1):!!e!=!!a&&(t!=null?Ja(l,!!a,t,!0):Ja(l,!!a,a?[]:"",!1));return;case"textarea":v=y=null;for(c in a)if(u=a[c],a.hasOwnProperty(c)&&u!=null&&!e.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:el(l,t,c,null,e,u)}for(i in e)if(u=e[i],n=a[i],e.hasOwnProperty(i)&&(u!=null||n!=null))switch(i){case"value":y=u;break;case"defaultValue":v=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(h(91));break;default:u!==n&&el(l,t,i,u,e,n)}zf(l,y,v);return;case"option":for(var A in a)if(y=a[A],a.hasOwnProperty(A)&&y!=null&&!e.hasOwnProperty(A))switch(A){case"selected":l.selected=!1;break;default:el(l,t,A,null,e,y)}for(f in e)if(y=e[f],v=a[f],e.hasOwnProperty(f)&&y!==v&&(y!=null||v!=null))switch(f){case"selected":l.selected=y&&typeof y!="function"&&typeof y!="symbol";break;default:el(l,t,f,y,e,v)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _ in a)y=a[_],a.hasOwnProperty(_)&&y!=null&&!e.hasOwnProperty(_)&&el(l,t,_,null,e,y);for(d in e)if(y=e[d],v=a[d],e.hasOwnProperty(d)&&y!==v&&(y!=null||v!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(h(137,t));break;default:el(l,t,d,y,e,v)}return;default:if(Pn(t)){for(var ul in a)y=a[ul],a.hasOwnProperty(ul)&&y!==void 0&&!e.hasOwnProperty(ul)&&Yc(l,t,ul,void 0,e,y);for(S in e)y=e[S],v=a[S],!e.hasOwnProperty(S)||y===v||y===void 0&&v===void 0||Yc(l,t,S,y,e,v);return}}for(var m in a)y=a[m],a.hasOwnProperty(m)&&y!=null&&!e.hasOwnProperty(m)&&el(l,t,m,null,e,y);for(b in e)y=e[b],v=a[b],!e.hasOwnProperty(b)||y===v||y==null&&v==null||el(l,t,b,y,e,v)}function Hm(l){switch(l){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function S0(){if(typeof performance.getEntriesByType=="function"){for(var l=0,t=0,a=performance.getEntriesByType("resource"),e=0;e<a.length;e++){var u=a[e],n=u.transferSize,i=u.initiatorType,c=u.duration;if(n&&c&&Hm(i)){for(i=0,c=u.responseEnd,e+=1;e<a.length;e++){var f=a[e],d=f.startTime;if(d>c)break;var S=f.transferSize,b=f.initiatorType;S&&Hm(b)&&(f=f.responseEnd,i+=S*(f<c?1:(c-d)/(f-d)))}if(--e,t+=8*(n+i)/(u.duration/1e3),l++,10<l)break}}if(0<l)return t/l/1e6}return navigator.connection&&(l=navigator.connection.downlink,typeof l=="number")?l:5}var xc=null,Gc=null;function An(l){return l.nodeType===9?l:l.ownerDocument}function qm(l){switch(l){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jm(l,t){if(l===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return l===1&&t==="foreignObject"?0:l}function Xc(l,t){return l==="textarea"||l==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zc=null;function E0(){var l=window.event;return l&&l.type==="popstate"?l===Zc?!1:(Zc=l,!0):(Zc=null,!1)}var Qm=typeof setTimeout=="function"?setTimeout:void 0,g0=typeof clearTimeout=="function"?clearTimeout:void 0,Ym=typeof Promise=="function"?Promise:void 0,b0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ym<"u"?function(l){return Ym.resolve(null).then(l).catch(T0)}:Qm;function T0(l){setTimeout(function(){throw l})}function ya(l){return l==="head"}function xm(l,t){var a=t,e=0;do{var u=a.nextSibling;if(l.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(e===0){l.removeChild(u),Ne(t);return}e--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")e++;else if(a==="html")mu(l.ownerDocument.documentElement);else if(a==="head"){a=l.ownerDocument.head,mu(a);for(var n=a.firstChild;n;){var i=n.nextSibling,c=n.nodeName;n[Me]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&n.rel.toLowerCase()==="stylesheet"||a.removeChild(n),n=i}}else a==="body"&&mu(l.ownerDocument.body);a=u}while(a);Ne(t)}function Gm(l,t){var a=l;l=0;do{var e=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),e&&e.nodeType===8)if(a=e.data,a==="/$"){if(l===0)break;l--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||l++;a=e}while(a)}function Vc(l){var t=l.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vc(a),Wn(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}l.removeChild(a)}}function O0(l,t,a,e){for(;l.nodeType===1;){var u=a;if(l.nodeName.toLowerCase()!==t.toLowerCase()){if(!e&&(l.nodeName!=="INPUT"||l.type!=="hidden"))break}else if(e){if(!l[Me])switch(t){case"meta":if(!l.hasAttribute("itemprop"))break;return l;case"link":if(n=l.getAttribute("rel"),n==="stylesheet"&&l.hasAttribute("data-precedence"))break;if(n!==u.rel||l.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||l.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||l.getAttribute("title")!==(u.title==null?null:u.title))break;return l;case"style":if(l.hasAttribute("data-precedence"))break;return l;case"script":if(n=l.getAttribute("src"),(n!==(u.src==null?null:u.src)||l.getAttribute("type")!==(u.type==null?null:u.type)||l.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&n&&l.hasAttribute("async")&&!l.hasAttribute("itemprop"))break;return l;default:return l}}else if(t==="input"&&l.type==="hidden"){var n=u.name==null?null:""+u.name;if(u.type==="hidden"&&l.getAttribute("name")===n)return l}else return l;if(l=ht(l.nextSibling),l===null)break}return null}function p0(l,t,a){if(t==="")return null;for(;l.nodeType!==3;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!a||(l=ht(l.nextSibling),l===null))return null;return l}function Xm(l,t){for(;l.nodeType!==8;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!t||(l=ht(l.nextSibling),l===null))return null;return l}function Kc(l){return l.data==="$?"||l.data==="$~"}function Jc(l){return l.data==="$!"||l.data==="$?"&&l.ownerDocument.readyState!=="loading"}function N0(l,t){var a=l.ownerDocument;if(l.data==="$~")l._reactRetry=t;else if(l.data!=="$?"||a.readyState!=="loading")t();else{var e=function(){t(),a.removeEventListener("DOMContentLoaded",e)};a.addEventListener("DOMContentLoaded",e),l._reactRetry=e}}function ht(l){for(;l!=null;l=l.nextSibling){var t=l.nodeType;if(t===1||t===3)break;if(t===8){if(t=l.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return l}var wc=null;function Zm(l){l=l.nextSibling;for(var t=0;l;){if(l.nodeType===8){var a=l.data;if(a==="/$"||a==="/&"){if(t===0)return ht(l.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}l=l.nextSibling}return null}function Vm(l){l=l.previousSibling;for(var t=0;l;){if(l.nodeType===8){var a=l.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return l;t--}else a!=="/$"&&a!=="/&"||t++}l=l.previousSibling}return null}function Km(l,t,a){switch(t=An(a),l){case"html":if(l=t.documentElement,!l)throw Error(h(452));return l;case"head":if(l=t.head,!l)throw Error(h(453));return l;case"body":if(l=t.body,!l)throw Error(h(454));return l;default:throw Error(h(451))}}function mu(l){for(var t=l.attributes;t.length;)l.removeAttributeNode(t[0]);Wn(l)}var vt=new Map,Jm=new Set;function Dn(l){return typeof l.getRootNode=="function"?l.getRootNode():l.nodeType===9?l:l.ownerDocument}var wt=p.d;p.d={f:A0,r:D0,D:U0,C:R0,L:M0,m:z0,X:C0,S:_0,M:L0};function A0(){var l=wt.f(),t=Sn();return l||t}function D0(l){var t=Za(l);t!==null&&t.tag===5&&t.type==="form"?fo(t):wt.r(l)}var Te=typeof document>"u"?null:document;function wm(l,t,a){var e=Te;if(e&&typeof t=="string"&&t){var u=ft(t);u='link[rel="'+l+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Jm.has(u)||(Jm.add(u),l={rel:l,crossOrigin:a,href:t},e.querySelector(u)===null&&(t=e.createElement("link"),Ml(t,"link",l),pl(t),e.head.appendChild(t)))}}function U0(l){wt.D(l),wm("dns-prefetch",l,null)}function R0(l,t){wt.C(l,t),wm("preconnect",l,t)}function M0(l,t,a){wt.L(l,t,a);var e=Te;if(e&&l&&t){var u='link[rel="preload"][as="'+ft(t)+'"]';t==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ft(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ft(a.imageSizes)+'"]')):u+='[href="'+ft(l)+'"]';var n=u;switch(t){case"style":n=Oe(l);break;case"script":n=pe(l)}vt.has(n)||(l=L({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:l,as:t},a),vt.set(n,l),e.querySelector(u)!==null||t==="style"&&e.querySelector(ru(n))||t==="script"&&e.querySelector(du(n))||(t=e.createElement("link"),Ml(t,"link",l),pl(t),e.head.appendChild(t)))}}function z0(l,t){wt.m(l,t);var a=Te;if(a&&l){var e=t&&typeof t.as=="string"?t.as:"script",u='link[rel="modulepreload"][as="'+ft(e)+'"][href="'+ft(l)+'"]',n=u;switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=pe(l)}if(!vt.has(n)&&(l=L({rel:"modulepreload",href:l},t),vt.set(n,l),a.querySelector(u)===null)){switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(du(n)))return}e=a.createElement("link"),Ml(e,"link",l),pl(e),a.head.appendChild(e)}}}function _0(l,t,a){wt.S(l,t,a);var e=Te;if(e&&l){var u=Va(e).hoistableStyles,n=Oe(l);t=t||"default";var i=u.get(n);if(!i){var c={loading:0,preload:null};if(i=e.querySelector(ru(n)))c.loading=5;else{l=L({rel:"stylesheet",href:l,"data-precedence":t},a),(a=vt.get(n))&&Fc(l,a);var f=i=e.createElement("link");pl(f),Ml(f,"link",l),f._p=new Promise(function(d,S){f.onload=d,f.onerror=S}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Un(i,t,e)}i={type:"stylesheet",instance:i,count:1,state:c},u.set(n,i)}}}function C0(l,t){wt.X(l,t);var a=Te;if(a&&l){var e=Va(a).hoistableScripts,u=pe(l),n=e.get(u);n||(n=a.querySelector(du(u)),n||(l=L({src:l,async:!0},t),(t=vt.get(u))&&Wc(l,t),n=a.createElement("script"),pl(n),Ml(n,"link",l),a.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},e.set(u,n))}}function L0(l,t){wt.M(l,t);var a=Te;if(a&&l){var e=Va(a).hoistableScripts,u=pe(l),n=e.get(u);n||(n=a.querySelector(du(u)),n||(l=L({src:l,async:!0,type:"module"},t),(t=vt.get(u))&&Wc(l,t),n=a.createElement("script"),pl(n),Ml(n,"link",l),a.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},e.set(u,n))}}function Fm(l,t,a,e){var u=(u=Y.current)?Dn(u):null;if(!u)throw Error(h(446));switch(l){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Oe(a.href),a=Va(u).hoistableStyles,e=a.get(t),e||(e={type:"style",instance:null,count:0,state:null},a.set(t,e)),e):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){l=Oe(a.href);var n=Va(u).hoistableStyles,i=n.get(l);if(i||(u=u.ownerDocument||u,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(l,i),(n=u.querySelector(ru(l)))&&!n._p&&(i.instance=n,i.state.loading=5),vt.has(l)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vt.set(l,a),n||B0(u,l,a,i.state))),t&&e===null)throw Error(h(528,""));return i}if(t&&e!==null)throw Error(h(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=pe(a),a=Va(u).hoistableScripts,e=a.get(t),e||(e={type:"script",instance:null,count:0,state:null},a.set(t,e)),e):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,l))}}function Oe(l){return'href="'+ft(l)+'"'}function ru(l){return'link[rel="stylesheet"]['+l+"]"}function Wm(l){return L({},l,{"data-precedence":l.precedence,precedence:null})}function B0(l,t,a,e){l.querySelector('link[rel="preload"][as="style"]['+t+"]")?e.loading=1:(t=l.createElement("link"),e.preload=t,t.addEventListener("load",function(){return e.loading|=1}),t.addEventListener("error",function(){return e.loading|=2}),Ml(t,"link",a),pl(t),l.head.appendChild(t))}function pe(l){return'[src="'+ft(l)+'"]'}function du(l){return"script[async]"+l}function $m(l,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var e=l.querySelector('style[data-href~="'+ft(a.href)+'"]');if(e)return t.instance=e,pl(e),e;var u=L({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return e=(l.ownerDocument||l).createElement("style"),pl(e),Ml(e,"style",u),Un(e,a.precedence,l),t.instance=e;case"stylesheet":u=Oe(a.href);var n=l.querySelector(ru(u));if(n)return t.state.loading|=4,t.instance=n,pl(n),n;e=Wm(a),(u=vt.get(u))&&Fc(e,u),n=(l.ownerDocument||l).createElement("link"),pl(n);var i=n;return i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),Ml(n,"link",e),t.state.loading|=4,Un(n,a.precedence,l),t.instance=n;case"script":return n=pe(a.src),(u=l.querySelector(du(n)))?(t.instance=u,pl(u),u):(e=a,(u=vt.get(n))&&(e=L({},a),Wc(e,u)),l=l.ownerDocument||l,u=l.createElement("script"),pl(u),Ml(u,"link",e),l.head.appendChild(u),t.instance=u);case"void":return null;default:throw Error(h(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(e=t.instance,t.state.loading|=4,Un(e,a.precedence,l));return t.instance}function Un(l,t,a){for(var e=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=e.length?e[e.length-1]:null,n=u,i=0;i<e.length;i++){var c=e[i];if(c.dataset.precedence===t)n=c;else if(n!==u)break}n?n.parentNode.insertBefore(l,n.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(l,t.firstChild))}function Fc(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.title==null&&(l.title=t.title)}function Wc(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.integrity==null&&(l.integrity=t.integrity)}var Rn=null;function km(l,t,a){if(Rn===null){var e=new Map,u=Rn=new Map;u.set(a,e)}else u=Rn,e=u.get(a),e||(e=new Map,u.set(a,e));if(e.has(l))return e;for(e.set(l,null),a=a.getElementsByTagName(l),u=0;u<a.length;u++){var n=a[u];if(!(n[Me]||n[Al]||l==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var i=n.getAttribute(t)||"";i=l+i;var c=e.get(i);c?c.push(n):e.set(i,[n])}}return e}function Im(l,t,a){l=l.ownerDocument||l,l.head.insertBefore(a,t==="title"?l.querySelector("head > title"):null)}function H0(l,t,a){if(a===1||t.itemProp!=null)return!1;switch(l){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return l=t.disabled,typeof t.precedence=="string"&&l==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Pm(l){return!(l.type==="stylesheet"&&(l.state.loading&3)===0)}function q0(l,t,a,e){if(a.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Oe(e.href),n=t.querySelector(ru(u));if(n){t=n._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Mn.bind(l),t.then(l,l)),a.state.loading|=4,a.instance=n,pl(n);return}n=t.ownerDocument||t,e=Wm(e),(u=vt.get(u))&&Fc(e,u),n=n.createElement("link"),pl(n);var i=n;i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),Ml(n,"link",e),a.instance=n}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(l.count++,a=Mn.bind(l),t.addEventListener("load",a),t.addEventListener("error",a))}}var $c=0;function j0(l,t){return l.stylesheets&&l.count===0&&_n(l,l.stylesheets),0<l.count||0<l.imgCount?function(a){var e=setTimeout(function(){if(l.stylesheets&&_n(l,l.stylesheets),l.unsuspend){var n=l.unsuspend;l.unsuspend=null,n()}},6e4+t);0<l.imgBytes&&$c===0&&($c=62500*S0());var u=setTimeout(function(){if(l.waitingForImages=!1,l.count===0&&(l.stylesheets&&_n(l,l.stylesheets),l.unsuspend)){var n=l.unsuspend;l.unsuspend=null,n()}},(l.imgBytes>$c?50:800)+t);return l.unsuspend=a,function(){l.unsuspend=null,clearTimeout(e),clearTimeout(u)}}:null}function Mn(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_n(this,this.stylesheets);else if(this.unsuspend){var l=this.unsuspend;this.unsuspend=null,l()}}}var zn=null;function _n(l,t){l.stylesheets=null,l.unsuspend!==null&&(l.count++,zn=new Map,t.forEach(Q0,l),zn=null,Mn.call(l))}function Q0(l,t){if(!(t.state.loading&4)){var a=zn.get(l);if(a)var e=a.get(null);else{a=new Map,zn.set(l,a);for(var u=l.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<u.length;n++){var i=u[n];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(a.set(i.dataset.precedence,i),e=i)}e&&a.set(null,e)}u=t.instance,i=u.getAttribute("data-precedence"),n=a.get(i)||e,n===e&&a.set(null,u),a.set(i,u),this.count++,e=Mn.bind(this),u.addEventListener("load",e),u.addEventListener("error",e),n?n.parentNode.insertBefore(u,n.nextSibling):(l=l.nodeType===9?l.head:l,l.insertBefore(u,l.firstChild)),t.state.loading|=4}}var yu={$$typeof:zl,Provider:null,Consumer:null,_currentValue:B,_currentValue2:B,_threadCount:0};function Y0(l,t,a,e,u,n,i,c,f){this.tag=1,this.containerInfo=l,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Kn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kn(0),this.hiddenUpdates=Kn(null),this.identifierPrefix=e,this.onUncaughtError=u,this.onCaughtError=n,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function lr(l,t,a,e,u,n,i,c,f,d,S,b){return l=new Y0(l,t,a,i,f,d,S,b,c),t=1,n===!0&&(t|=24),n=lt(3,null,null,t),l.current=n,n.stateNode=l,t=Mi(),t.refCount++,l.pooledCache=t,t.refCount++,n.memoizedState={element:e,isDehydrated:a,cache:t},Li(n),l}function tr(l){return l?(l=le,l):le}function ar(l,t,a,e,u,n){u=tr(u),e.context===null?e.context=u:e.pendingContext=u,e=ea(t),e.payload={element:a},n=n===void 0?null:n,n!==null&&(e.callback=n),a=ua(l,e,t),a!==null&&(wl(a,l,t),Je(a,l,t))}function er(l,t){if(l=l.memoizedState,l!==null&&l.dehydrated!==null){var a=l.retryLane;l.retryLane=a!==0&&a<t?a:t}}function kc(l,t){er(l,t),(l=l.alternate)&&er(l,t)}function ur(l){if(l.tag===13||l.tag===31){var t=Ua(l,67108864);t!==null&&wl(t,l,67108864),kc(l,67108864)}}function nr(l){if(l.tag===13||l.tag===31){var t=nt();t=Jn(t);var a=Ua(l,t);a!==null&&wl(a,l,t),kc(l,t)}}var Cn=!0;function x0(l,t,a,e){var u=E.T;E.T=null;var n=p.p;try{p.p=2,Ic(l,t,a,e)}finally{p.p=n,E.T=u}}function G0(l,t,a,e){var u=E.T;E.T=null;var n=p.p;try{p.p=8,Ic(l,t,a,e)}finally{p.p=n,E.T=u}}function Ic(l,t,a,e){if(Cn){var u=Pc(e);if(u===null)Qc(l,t,e,Ln,a),cr(l,e);else if(Z0(u,l,t,a,e))e.stopPropagation();else if(cr(l,e),t&4&&-1<X0.indexOf(l)){for(;u!==null;){var n=Za(u);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var i=Oa(n.pendingLanes);if(i!==0){var c=n;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var f=1<<31-Il(i);c.entanglements[1]|=f,i&=~f}Ut(n),(W&6)===0&&(hn=$l()+500,fu(0))}}break;case 31:case 13:c=Ua(n,2),c!==null&&wl(c,n,2),Sn(),kc(n,2)}if(n=Pc(e),n===null&&Qc(l,t,e,Ln,a),n===u)break;u=n}u!==null&&e.stopPropagation()}else Qc(l,t,e,null,a)}}function Pc(l){return l=ti(l),lf(l)}var Ln=null;function lf(l){if(Ln=null,l=Xa(l),l!==null){var t=F(l);if(t===null)l=null;else{var a=t.tag;if(a===13){if(l=yl(t),l!==null)return l;l=null}else if(a===31){if(l=Cl(t),l!==null)return l;l=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;l=null}else t!==l&&(l=null)}}return Ln=l,null}function ir(l){switch(l){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ur()){case df:return 2;case yf:return 8;case Tu:case Rr:return 32;case hf:return 268435456;default:return 32}default:return 32}}var tf=!1,ha=null,va=null,Sa=null,hu=new Map,vu=new Map,Ea=[],X0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cr(l,t){switch(l){case"focusin":case"focusout":ha=null;break;case"dragenter":case"dragleave":va=null;break;case"mouseover":case"mouseout":Sa=null;break;case"pointerover":case"pointerout":hu.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vu.delete(t.pointerId)}}function Su(l,t,a,e,u,n){return l===null||l.nativeEvent!==n?(l={blockedOn:t,domEventName:a,eventSystemFlags:e,nativeEvent:n,targetContainers:[u]},t!==null&&(t=Za(t),t!==null&&ur(t)),l):(l.eventSystemFlags|=e,t=l.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),l)}function Z0(l,t,a,e,u){switch(t){case"focusin":return ha=Su(ha,l,t,a,e,u),!0;case"dragenter":return va=Su(va,l,t,a,e,u),!0;case"mouseover":return Sa=Su(Sa,l,t,a,e,u),!0;case"pointerover":var n=u.pointerId;return hu.set(n,Su(hu.get(n)||null,l,t,a,e,u)),!0;case"gotpointercapture":return n=u.pointerId,vu.set(n,Su(vu.get(n)||null,l,t,a,e,u)),!0}return!1}function fr(l){var t=Xa(l.target);if(t!==null){var a=F(t);if(a!==null){if(t=a.tag,t===13){if(t=yl(a),t!==null){l.blockedOn=t,Tf(l.priority,function(){nr(a)});return}}else if(t===31){if(t=Cl(a),t!==null){l.blockedOn=t,Tf(l.priority,function(){nr(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){l.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}l.blockedOn=null}function Bn(l){if(l.blockedOn!==null)return!1;for(var t=l.targetContainers;0<t.length;){var a=Pc(l.nativeEvent);if(a===null){a=l.nativeEvent;var e=new a.constructor(a.type,a);li=e,a.target.dispatchEvent(e),li=null}else return t=Za(a),t!==null&&ur(t),l.blockedOn=a,!1;t.shift()}return!0}function sr(l,t,a){Bn(l)&&a.delete(t)}function V0(){tf=!1,ha!==null&&Bn(ha)&&(ha=null),va!==null&&Bn(va)&&(va=null),Sa!==null&&Bn(Sa)&&(Sa=null),hu.forEach(sr),vu.forEach(sr)}function Hn(l,t){l.blockedOn===t&&(l.blockedOn=null,tf||(tf=!0,D.unstable_scheduleCallback(D.unstable_NormalPriority,V0)))}var qn=null;function or(l){qn!==l&&(qn=l,D.unstable_scheduleCallback(D.unstable_NormalPriority,function(){qn===l&&(qn=null);for(var t=0;t<l.length;t+=3){var a=l[t],e=l[t+1],u=l[t+2];if(typeof e!="function"){if(lf(e||a)===null)continue;break}var n=Za(a);n!==null&&(l.splice(t,3),t-=3,Pi(n,{pending:!0,data:u,method:a.method,action:e},e,u))}}))}function Ne(l){function t(f){return Hn(f,l)}ha!==null&&Hn(ha,l),va!==null&&Hn(va,l),Sa!==null&&Hn(Sa,l),hu.forEach(t),vu.forEach(t);for(var a=0;a<Ea.length;a++){var e=Ea[a];e.blockedOn===l&&(e.blockedOn=null)}for(;0<Ea.length&&(a=Ea[0],a.blockedOn===null);)fr(a),a.blockedOn===null&&Ea.shift();if(a=(l.ownerDocument||l).$$reactFormReplay,a!=null)for(e=0;e<a.length;e+=3){var u=a[e],n=a[e+1],i=u[Gl]||null;if(typeof n=="function")i||or(a);else if(i){var c=null;if(n&&n.hasAttribute("formAction")){if(u=n,i=n[Gl]||null)c=i.formAction;else if(lf(u)!==null)continue}else c=i.action;typeof c=="function"?a[e+1]=c:(a.splice(e,3),e-=3),or(a)}}}function mr(){function l(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(i){return u=i})},focusReset:"manual",scroll:"manual"})}function t(){u!==null&&(u(),u=null),e||setTimeout(a,20)}function a(){if(!e&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var e=!1,u=null;return navigation.addEventListener("navigate",l),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){e=!0,navigation.removeEventListener("navigate",l),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),u!==null&&(u(),u=null)}}}function af(l){this._internalRoot=l}jn.prototype.render=af.prototype.render=function(l){var t=this._internalRoot;if(t===null)throw Error(h(409));var a=t.current,e=nt();ar(a,e,l,t,null,null)},jn.prototype.unmount=af.prototype.unmount=function(){var l=this._internalRoot;if(l!==null){this._internalRoot=null;var t=l.containerInfo;ar(l.current,2,null,l,null,null),Sn(),t[Ga]=null}};function jn(l){this._internalRoot=l}jn.prototype.unstable_scheduleHydration=function(l){if(l){var t=bf();l={blockedOn:null,target:l,priority:t};for(var a=0;a<Ea.length&&t!==0&&t<Ea[a].priority;a++);Ea.splice(a,0,l),a===0&&fr(l)}};var rr=ml.version;if(rr!=="19.2.0")throw Error(h(527,rr,"19.2.0"));p.findDOMNode=function(l){var t=l._reactInternals;if(t===void 0)throw typeof l.render=="function"?Error(h(188)):(l=Object.keys(l).join(","),Error(h(268,l)));return l=O(t),l=l!==null?k(l):null,l=l===null?null:l.stateNode,l};var K0={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:E,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qn.isDisabled&&Qn.supportsFiber)try{De=Qn.inject(K0),kl=Qn}catch{}}return gu.createRoot=function(l,t){if(!C(l))throw Error(h(299));var a=!1,e="",u=go,n=bo,i=To;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(e=t.identifierPrefix),t.onUncaughtError!==void 0&&(u=t.onUncaughtError),t.onCaughtError!==void 0&&(n=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=lr(l,1,!1,null,null,a,e,null,u,n,i,mr),l[Ga]=t.current,jc(l),new af(t)},gu.hydrateRoot=function(l,t,a){if(!C(l))throw Error(h(299));var e=!1,u="",n=go,i=bo,c=To,f=null;return a!=null&&(a.unstable_strictMode===!0&&(e=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(n=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.formState!==void 0&&(f=a.formState)),t=lr(l,1,!0,t,a??null,e,u,f,n,i,c,mr),t.context=tr(null),a=t.current,e=nt(),e=Jn(e),u=ea(e),u.callback=null,ua(a,u,e),a=e,t.current.lanes=a,Re(t,a),Ut(t),l[Ga]=t.current,jc(l),new jn(t)},gu.version="19.2.0",gu}var Or;function ty(){if(Or)return nf.exports;Or=1;function D(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D)}catch(ml){console.error(ml)}}return D(),nf.exports=ly(),nf.exports}var ay=ty();function ey(){const[D,ml]=pr.useState(null),$=[{id:1,question:"1. Study basic SQL statements.",answer:`
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


`},{id:2,question:"2. STUDY BASIC SQL STATEMENTS",answer:"",codeExample:`
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



`},{id:3,question:"3. SQL JOIN Statements",answer:"<> means -> not equal to(Equivalent to != in many programming languages).",codeExample:`
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



      `},{id:4,question:"4. Write a PL/SQL program to find the total and average of 4 subjects and display the grade",answer:"",codeExample:`
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


      `},{id:5,question:"5. Write a PL/SQL program to find factorial of a given number using Functions",answer:"",codeExample:`
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

      
`},{id:6,question:"6. Write a PL/SQL program to generate Fibonacci series using functions",answer:"",codeExample:`
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



      `},{id:7,question:"7. Write a program to Create a procedure to check if the number is prime.",answer:"",codeExample:`

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

`},{id:8,question:"8. Write a PL/SQL program to print Armstrong numbers",answer:"",codeExample:`
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


      `},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""}],h=C=>{ml(D===C?null:C)};return ql.jsxs("div",{className:"app-container",children:[ql.jsx("h1",{children:"SQL Interview Questions"}),ql.jsx("div",{className:"questions-container",children:$.map(C=>ql.jsxs("div",{className:"question-item",children:[ql.jsx("button",{className:`question-button ${D===C.id?"active":""}`,onClick:()=>h(C.id),children:C.question}),D===C.id&&ql.jsxs("div",{className:"answer-container",children:[ql.jsxs("div",{className:"answer",children:[ql.jsx("h3",{children:"Answer:"}),ql.jsx("p",{children:C.answer})]}),C.codeExample&&ql.jsxs("div",{className:"code-example",children:[ql.jsx("h3",{children:"Code Example:"}),ql.jsx("pre",{children:ql.jsx("code",{children:C.codeExample})})]})]})]},C.id))})]})}ay.createRoot(document.getElementById("root")).render(ql.jsx(pr.StrictMode,{children:ql.jsx(ey,{})}));
