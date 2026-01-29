var pr=Object.defineProperty,mr=Object.defineProperties;var gr=Object.getOwnPropertyDescriptors;var ht=Object.getOwnPropertySymbols;var br=Object.prototype.hasOwnProperty,vr=Object.prototype.propertyIsEnumerable;var ze=(e,t,r)=>t in e?pr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Q=(e,t)=>{for(var r in t||(t={}))br.call(t,r)&&ze(e,r,t[r]);if(ht)for(var r of ht(t))vr.call(t,r)&&ze(e,r,t[r]);return e},pt=(e,t)=>mr(e,gr(t));var yr=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var T=(e,t,r)=>(ze(e,typeof t!="symbol"?t+"":t,r),r);var de=(e,t,r)=>new Promise((n,i)=>{var a=l=>{try{s(r.next(l))}catch(d){i(d)}},o=l=>{try{s(r.throw(l))}catch(d){i(d)}},s=l=>l.done?n(l.value):Promise.resolve(l.value).then(a,o);s((r=r.apply(e,t)).next())});import{r as m,b as mt,a as wr,R as _t,d as xr}from"./vendor-ef013e4e.js";import{J as Sr,A as kr}from"./animations-d97477bb.js";import{I as Er,G as Cr,p as $t}from"./gallery-1bdcb658.js";var Na=yr(ur=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();var Rt={exports:{}},xe={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ar=m,Pr=Symbol.for("react.element"),Ir=Symbol.for("react.fragment"),Mr=Object.prototype.hasOwnProperty,Or=Ar.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Tr={key:!0,ref:!0,__self:!0,__source:!0};function Ft(e,t,r){var n,i={},a=null,o=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(n in t)Mr.call(t,n)&&!Tr.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:Pr,type:e,key:a,ref:o,props:i,_owner:Or.current}}xe.Fragment=Ir;xe.jsx=Ft;xe.jsxs=Ft;Rt.exports=xe;var ae=Rt.exports;function _r(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function $r(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Rr=function(){function e(r){var n=this;this._insertTag=function(i){var a;n.tags.length===0?n.insertionPoint?a=n.insertionPoint.nextSibling:n.prepend?a=n.container.firstChild:a=n.before:a=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(i,a),n.tags.push(i)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(n){n.forEach(this._insertTag)},t.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag($r(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var a=_r(i);try{a.insertRule(n,a.cssRules.length)}catch(o){}}else i.appendChild(document.createTextNode(n));this.ctr++},t.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},e}(),F="-ms-",ve="-moz-",S="-webkit-",Nt="comm",et="rule",tt="decl",Fr="@import",Dt="@keyframes",Nr="@layer",Dr=Math.abs,Se=String.fromCharCode,zr=Object.assign;function Lr(e,t){return R(e,0)^45?(((t<<2^R(e,0))<<2^R(e,1))<<2^R(e,2))<<2^R(e,3):0}function zt(e){return e.trim()}function jr(e,t){return(e=t.exec(e))?e[0]:e}function k(e,t,r){return e.replace(t,r)}function Ve(e,t){return e.indexOf(t)}function R(e,t){return e.charCodeAt(t)|0}function oe(e,t,r){return e.slice(t,r)}function V(e){return e.length}function rt(e){return e.length}function ue(e,t){return t.push(e),e}function Wr(e,t){return e.map(t).join("")}var ke=1,te=1,Lt=0,z=0,O=0,re="";function Ee(e,t,r,n,i,a,o){return{value:e,root:t,parent:r,type:n,props:i,children:a,line:ke,column:te,length:o,return:""}}function ie(e,t){return zr(Ee("",null,null,"",null,null,0),e,{length:-e.length},t)}function Br(){return O}function Vr(){return O=z>0?R(re,--z):0,te--,O===10&&(te=1,ke--),O}function L(){return O=z<Lt?R(re,z++):0,te++,O===10&&(te=1,ke++),O}function H(){return R(re,z)}function me(){return z}function le(e,t){return oe(re,e,t)}function se(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function jt(e){return ke=te=1,Lt=V(re=e),z=0,[]}function Wt(e){return re="",e}function ge(e){return zt(le(z-1,Ue(e===91?e+2:e===40?e+1:e)))}function Ur(e){for(;(O=H())&&O<33;)L();return se(e)>2||se(O)>3?"":" "}function Hr(e,t){for(;--t&&L()&&!(O<48||O>102||O>57&&O<65||O>70&&O<97););return le(e,me()+(t<6&&H()==32&&L()==32))}function Ue(e){for(;L();)switch(O){case e:return z;case 34:case 39:e!==34&&e!==39&&Ue(O);break;case 40:e===41&&Ue(e);break;case 92:L();break}return z}function Yr(e,t){for(;L()&&e+O!==47+10;)if(e+O===42+42&&H()===47)break;return"/*"+le(t,z-1)+"*"+Se(e===47?e:L())}function qr(e){for(;!se(H());)L();return le(e,z)}function Gr(e){return Wt(be("",null,null,null,[""],e=jt(e),0,[0],e))}function be(e,t,r,n,i,a,o,s,l){for(var d=0,u=0,h=o,v=0,C=0,b=0,f=1,g=1,y=1,x=0,w="",B=i,N=a,$=n,E=w;g;)switch(b=x,x=L()){case 40:if(b!=108&&R(E,h-1)==58){Ve(E+=k(ge(x),"&","&\f"),"&\f")!=-1&&(y=-1);break}case 34:case 39:case 91:E+=ge(x);break;case 9:case 10:case 13:case 32:E+=Ur(b);break;case 92:E+=Hr(me()-1,7);continue;case 47:switch(H()){case 42:case 47:ue(Xr(Yr(L(),me()),t,r),l);break;default:E+="/"}break;case 123*f:s[d++]=V(E)*y;case 125*f:case 59:case 0:switch(x){case 0:case 125:g=0;case 59+u:y==-1&&(E=k(E,/\f/g,"")),C>0&&V(E)-h&&ue(C>32?bt(E+";",n,r,h-1):bt(k(E," ","")+";",n,r,h-2),l);break;case 59:E+=";";default:if(ue($=gt(E,t,r,d,u,i,s,w,B=[],N=[],h),a),x===123)if(u===0)be(E,t,$,$,B,a,h,s,N);else switch(v===99&&R(E,3)===110?100:v){case 100:case 108:case 109:case 115:be(e,$,$,n&&ue(gt(e,$,$,0,0,i,s,w,i,B=[],h),N),i,N,h,s,n?B:N);break;default:be(E,$,$,$,[""],N,0,s,N)}}d=u=C=0,f=y=1,w=E="",h=o;break;case 58:h=1+V(E),C=b;default:if(f<1){if(x==123)--f;else if(x==125&&f++==0&&Vr()==125)continue}switch(E+=Se(x),x*f){case 38:y=u>0?1:(E+="\f",-1);break;case 44:s[d++]=(V(E)-1)*y,y=1;break;case 64:H()===45&&(E+=ge(L())),v=H(),u=h=V(w=E+=qr(me())),x++;break;case 45:b===45&&V(E)==2&&(f=0)}}return a}function gt(e,t,r,n,i,a,o,s,l,d,u){for(var h=i-1,v=i===0?a:[""],C=rt(v),b=0,f=0,g=0;b<n;++b)for(var y=0,x=oe(e,h+1,h=Dr(f=o[b])),w=e;y<C;++y)(w=zt(f>0?v[y]+" "+x:k(x,/&\f/g,v[y])))&&(l[g++]=w);return Ee(e,t,r,i===0?et:s,l,d,u)}function Xr(e,t,r){return Ee(e,t,r,Nt,Se(Br()),oe(e,2,-2),0)}function bt(e,t,r,n){return Ee(e,t,r,tt,oe(e,0,n),oe(e,n+1,-1),n)}function ee(e,t){for(var r="",n=rt(e),i=0;i<n;i++)r+=t(e[i],i,e,t)||"";return r}function Kr(e,t,r,n){switch(e.type){case Nr:if(e.children.length)break;case Fr:case tt:return e.return=e.return||e.value;case Nt:return"";case Dt:return e.return=e.value+"{"+ee(e.children,n)+"}";case et:e.value=e.props.join(",")}return V(r=ee(e.children,n))?e.return=e.value+"{"+r+"}":""}function Zr(e){var t=rt(e);return function(r,n,i,a){for(var o="",s=0;s<t;s++)o+=e[s](r,n,i,a)||"";return o}}function Jr(e){return function(t){t.root||(t=t.return)&&e(t)}}function Bt(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var Qr=function(t,r,n){for(var i=0,a=0;i=a,a=H(),i===38&&a===12&&(r[n]=1),!se(a);)L();return le(t,z)},en=function(t,r){var n=-1,i=44;do switch(se(i)){case 0:i===38&&H()===12&&(r[n]=1),t[n]+=Qr(z-1,r,n);break;case 2:t[n]+=ge(i);break;case 4:if(i===44){t[++n]=H()===58?"&\f":"",r[n]=t[n].length;break}default:t[n]+=Se(i)}while(i=L());return t},tn=function(t,r){return Wt(en(jt(t),r))},vt=new WeakMap,rn=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var r=t.value,n=t.parent,i=t.column===n.column&&t.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(t.props.length===1&&r.charCodeAt(0)!==58&&!vt.get(n))&&!i){vt.set(t,!0);for(var a=[],o=tn(r,a),s=n.props,l=0,d=0;l<o.length;l++)for(var u=0;u<s.length;u++,d++)t.props[d]=a[l]?o[l].replace(/&\f/g,s[u]):s[u]+" "+o[l]}}},nn=function(t){if(t.type==="decl"){var r=t.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(t.return="",t.value="")}};function Vt(e,t){switch(Lr(e,t)){case 5103:return S+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return S+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return S+e+ve+e+F+e+e;case 6828:case 4268:return S+e+F+e+e;case 6165:return S+e+F+"flex-"+e+e;case 5187:return S+e+k(e,/(\w+).+(:[^]+)/,S+"box-$1$2"+F+"flex-$1$2")+e;case 5443:return S+e+F+"flex-item-"+k(e,/flex-|-self/,"")+e;case 4675:return S+e+F+"flex-line-pack"+k(e,/align-content|flex-|-self/,"")+e;case 5548:return S+e+F+k(e,"shrink","negative")+e;case 5292:return S+e+F+k(e,"basis","preferred-size")+e;case 6060:return S+"box-"+k(e,"-grow","")+S+e+F+k(e,"grow","positive")+e;case 4554:return S+k(e,/([^-])(transform)/g,"$1"+S+"$2")+e;case 6187:return k(k(k(e,/(zoom-|grab)/,S+"$1"),/(image-set)/,S+"$1"),e,"")+e;case 5495:case 3959:return k(e,/(image-set\([^]*)/,S+"$1$`$1");case 4968:return k(k(e,/(.+:)(flex-)?(.*)/,S+"box-pack:$3"+F+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+S+e+e;case 4095:case 3583:case 4068:case 2532:return k(e,/(.+)-inline(.+)/,S+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(V(e)-1-t>6)switch(R(e,t+1)){case 109:if(R(e,t+4)!==45)break;case 102:return k(e,/(.+:)(.+)-([^]+)/,"$1"+S+"$2-$3$1"+ve+(R(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ve(e,"stretch")?Vt(k(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(R(e,t+1)!==115)break;case 6444:switch(R(e,V(e)-3-(~Ve(e,"!important")&&10))){case 107:return k(e,":",":"+S)+e;case 101:return k(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+S+(R(e,14)===45?"inline-":"")+"box$3$1"+S+"$2$3$1"+F+"$2box$3")+e}break;case 5936:switch(R(e,t+11)){case 114:return S+e+F+k(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return S+e+F+k(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return S+e+F+k(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return S+e+F+e+e}return e}var an=function(t,r,n,i){if(t.length>-1&&!t.return)switch(t.type){case tt:t.return=Vt(t.value,t.length);break;case Dt:return ee([ie(t,{value:k(t.value,"@","@"+S)})],i);case et:if(t.length)return Wr(t.props,function(a){switch(jr(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ee([ie(t,{props:[k(a,/:(read-\w+)/,":"+ve+"$1")]})],i);case"::placeholder":return ee([ie(t,{props:[k(a,/:(plac\w+)/,":"+S+"input-$1")]}),ie(t,{props:[k(a,/:(plac\w+)/,":"+ve+"$1")]}),ie(t,{props:[k(a,/:(plac\w+)/,F+"input-$1")]})],i)}return""})}},on=[an],sn=function(t){var r=t.key;if(r==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(f){var g=f.getAttribute("data-emotion");g.indexOf(" ")!==-1&&(document.head.appendChild(f),f.setAttribute("data-s",""))})}var i=t.stylisPlugins||on,a={},o,s=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(f){for(var g=f.getAttribute("data-emotion").split(" "),y=1;y<g.length;y++)a[g[y]]=!0;s.push(f)});var l,d=[rn,nn];{var u,h=[Kr,Jr(function(f){u.insert(f)})],v=Zr(d.concat(i,h)),C=function(g){return ee(Gr(g),v)};l=function(g,y,x,w){u=x,C(g?g+"{"+y.styles+"}":y.styles),w&&(b.inserted[y.name]=!0)}}var b={key:r,sheet:new Rr({key:r,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:a,registered:{},insert:l};return b.sheet.hydrate(s),b};function He(){return He=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},He.apply(this,arguments)}var Ut={exports:{}},P={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=typeof Symbol=="function"&&Symbol.for,nt=_?Symbol.for("react.element"):60103,it=_?Symbol.for("react.portal"):60106,Ce=_?Symbol.for("react.fragment"):60107,Ae=_?Symbol.for("react.strict_mode"):60108,Pe=_?Symbol.for("react.profiler"):60114,Ie=_?Symbol.for("react.provider"):60109,Me=_?Symbol.for("react.context"):60110,at=_?Symbol.for("react.async_mode"):60111,Oe=_?Symbol.for("react.concurrent_mode"):60111,Te=_?Symbol.for("react.forward_ref"):60112,_e=_?Symbol.for("react.suspense"):60113,cn=_?Symbol.for("react.suspense_list"):60120,$e=_?Symbol.for("react.memo"):60115,Re=_?Symbol.for("react.lazy"):60116,ln=_?Symbol.for("react.block"):60121,dn=_?Symbol.for("react.fundamental"):60117,un=_?Symbol.for("react.responder"):60118,fn=_?Symbol.for("react.scope"):60119;function j(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case nt:switch(e=e.type,e){case at:case Oe:case Ce:case Pe:case Ae:case _e:return e;default:switch(e=e&&e.$$typeof,e){case Me:case Te:case Re:case $e:case Ie:return e;default:return t}}case it:return t}}}function Ht(e){return j(e)===Oe}P.AsyncMode=at;P.ConcurrentMode=Oe;P.ContextConsumer=Me;P.ContextProvider=Ie;P.Element=nt;P.ForwardRef=Te;P.Fragment=Ce;P.Lazy=Re;P.Memo=$e;P.Portal=it;P.Profiler=Pe;P.StrictMode=Ae;P.Suspense=_e;P.isAsyncMode=function(e){return Ht(e)||j(e)===at};P.isConcurrentMode=Ht;P.isContextConsumer=function(e){return j(e)===Me};P.isContextProvider=function(e){return j(e)===Ie};P.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===nt};P.isForwardRef=function(e){return j(e)===Te};P.isFragment=function(e){return j(e)===Ce};P.isLazy=function(e){return j(e)===Re};P.isMemo=function(e){return j(e)===$e};P.isPortal=function(e){return j(e)===it};P.isProfiler=function(e){return j(e)===Pe};P.isStrictMode=function(e){return j(e)===Ae};P.isSuspense=function(e){return j(e)===_e};P.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ce||e===Oe||e===Pe||e===Ae||e===_e||e===cn||typeof e=="object"&&e!==null&&(e.$$typeof===Re||e.$$typeof===$e||e.$$typeof===Ie||e.$$typeof===Me||e.$$typeof===Te||e.$$typeof===dn||e.$$typeof===un||e.$$typeof===fn||e.$$typeof===ln)};P.typeOf=j;Ut.exports=P;var hn=Ut.exports,Yt=hn,pn={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},mn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},qt={};qt[Yt.ForwardRef]=pn;qt[Yt.Memo]=mn;var gn=!0;function Gt(e,t,r){var n="";return r.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):n+=i+" "}),n}var ot=function(t,r,n){var i=t.key+"-"+r.name;(n===!1||gn===!1)&&t.registered[i]===void 0&&(t.registered[i]=r.styles)},Xt=function(t,r,n){ot(t,r,n);var i=t.key+"-"+r.name;if(t.inserted[r.name]===void 0){var a=r;do t.insert(r===a?"."+i:"",a,t.sheet,!0),a=a.next;while(a!==void 0)}};function bn(e){for(var t=0,r,n=0,i=e.length;i>=4;++n,i-=4)r=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,t=(r&65535)*1540483477+((r>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(n+2)&255)<<16;case 2:t^=(e.charCodeAt(n+1)&255)<<8;case 1:t^=e.charCodeAt(n)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var vn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},yn=/[A-Z]|^ms/g,wn=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Kt=function(t){return t.charCodeAt(1)===45},yt=function(t){return t!=null&&typeof t!="boolean"},Le=Bt(function(e){return Kt(e)?e:e.replace(yn,"-$&").toLowerCase()}),wt=function(t,r){switch(t){case"animation":case"animationName":if(typeof r=="string")return r.replace(wn,function(n,i,a){return U={name:i,styles:a,next:U},i})}return vn[t]!==1&&!Kt(t)&&typeof r=="number"&&r!==0?r+"px":r};function ce(e,t,r){if(r==null)return"";if(r.__emotion_styles!==void 0)return r;switch(typeof r){case"boolean":return"";case"object":{if(r.anim===1)return U={name:r.name,styles:r.styles,next:U},r.name;if(r.styles!==void 0){var n=r.next;if(n!==void 0)for(;n!==void 0;)U={name:n.name,styles:n.styles,next:U},n=n.next;var i=r.styles+";";return i}return xn(e,t,r)}case"function":{if(e!==void 0){var a=U,o=r(e);return U=a,ce(e,t,o)}break}}if(t==null)return r;var s=t[r];return s!==void 0?s:r}function xn(e,t,r){var n="";if(Array.isArray(r))for(var i=0;i<r.length;i++)n+=ce(e,t,r[i])+";";else for(var a in r){var o=r[a];if(typeof o!="object")t!=null&&t[o]!==void 0?n+=a+"{"+t[o]+"}":yt(o)&&(n+=Le(a)+":"+wt(a,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var s=0;s<o.length;s++)yt(o[s])&&(n+=Le(a)+":"+wt(a,o[s])+";");else{var l=ce(e,t,o);switch(a){case"animation":case"animationName":{n+=Le(a)+":"+l+";";break}default:n+=a+"{"+l+"}"}}}return n}var xt=/label:\s*([^\s;\n{]+)\s*(;|$)/g,U,st=function(t,r,n){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,a="";U=void 0;var o=t[0];o==null||o.raw===void 0?(i=!1,a+=ce(n,r,o)):a+=o[0];for(var s=1;s<t.length;s++)a+=ce(n,r,t[s]),i&&(a+=o[s]);xt.lastIndex=0;for(var l="",d;(d=xt.exec(a))!==null;)l+="-"+d[1];var u=bn(a)+l;return{name:u,styles:a,next:U}},Sn=function(t){return t()},kn=mt["useInsertionEffect"]?mt["useInsertionEffect"]:!1,Zt=kn||Sn,Fe={}.hasOwnProperty,Jt=m.createContext(typeof HTMLElement!="undefined"?sn({key:"css"}):null);Jt.Provider;var Qt=function(t){return m.forwardRef(function(r,n){var i=m.useContext(Jt);return t(r,i,n)})},er=m.createContext({}),Ye="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",tr=function(t,r){var n={};for(var i in r)Fe.call(r,i)&&(n[i]=r[i]);return n[Ye]=t,n},En=function(t){var r=t.cache,n=t.serialized,i=t.isStringTag;return ot(r,n,i),Zt(function(){return Xt(r,n,i)}),null},Cn=Qt(function(e,t,r){var n=e.css;typeof n=="string"&&t.registered[n]!==void 0&&(n=t.registered[n]);var i=e[Ye],a=[n],o="";typeof e.className=="string"?o=Gt(t.registered,a,e.className):e.className!=null&&(o=e.className+" ");var s=st(a,void 0,m.useContext(er));o+=t.key+"-"+s.name;var l={};for(var d in e)Fe.call(e,d)&&d!=="css"&&d!==Ye&&(l[d]=e[d]);return l.ref=r,l.className=o,m.createElement(m.Fragment,null,m.createElement(En,{cache:t,serialized:s,isStringTag:typeof i=="string"}),m.createElement(i,l))}),rr=Cn,ct=ae.Fragment;function c(e,t,r){return Fe.call(t,"css")?ae.jsx(rr,tr(e,t),r):ae.jsx(e,t,r)}function A(e,t,r){return Fe.call(t,"css")?ae.jsxs(rr,tr(e,t),r):ae.jsxs(e,t,r)}var qe={},St=wr;qe.createRoot=St.createRoot,qe.hydrateRoot=St.hydrateRoot;const An=.3,Pn=.1,In=.1,Mn=.5,On=.2,Tn=.5,kt=.5,_n=.02,je=200,$n=50,Rn=5e3;function Fn(){const e=navigator.deviceMemory,t=navigator.hardwareConcurrency||1;return e?e>=8?"high":e>=4?"medium":"low":t>=8?"high":t>=4?"medium":"low"}function Nn(e){const t=Fn(),r=Math.min(e,$n),n=window.innerWidth*window.innerHeight,i=400*800,a=Math.min(1,n/i);let o;switch(t){case"low":o=Math.min(r,25);break;case"medium":o=Math.min(r,35);break;case"high":o=r;break;default:o=Math.min(r,30)}return Math.max(10,Math.floor(o*a))}const we=class we{constructor(t,r,n,i){T(this,"x",0);T(this,"y",0);T(this,"size",0);T(this,"speed",0);T(this,"angle",0);T(this,"spin",0);T(this,"canvas");T(this,"ctx");T(this,"color");T(this,"windX",0);T(this,"windY",0);T(this,"windDecay",.96);T(this,"lastWindApplied",0);T(this,"isActive",!0);this.canvas=t;const a=t.getContext("2d");if(!a)throw new Error("Failed to get canvas rendering context");this.ctx=a,this.color=i,this.reset(r,n)}reset(t,r){const i=Math.max(this.canvas.width-20,20),a=Math.max(this.canvas.height-20,20);this.x=Math.random()*i,this.y=Math.random()*a-a;const o=Math.max(.25,Math.min(.7,this.canvas.width/400)),s=[Math.max(1,t[0]*o),Math.max(2.5,t[1]*o)];this.size=Math.random()*(s[1]-s[0])+s[0],this.speed=Math.random()*(r[1]-r[0])+r[0],this.angle=Math.random()*Math.PI*2,this.spin=Math.random()*.02-.01,this.windX=0,this.windY=0,this.isActive=!0}applyWind(t,r){if(!r||!this.isActive)return;const n=we.tempPoint;n.x=this.x-r.x,n.y=this.y-r.y;const i=n.x*n.x+n.y*n.y,a=je*je;if(i<a){const s=1-Math.sqrt(i)/je,l=t.x*(In+Math.random()*Mn)*s,d=t.y*(On+Math.random()*Tn)*s;this.windX=this.windX*this.windDecay+l*kt,this.windY=this.windY*this.windDecay+d*kt,this.lastWindApplied=Date.now()}}update(){if(!this.isActive)return;this.x+=this.windX,this.y+=this.speed+this.windY,this.angle+=this.spin+this.windX*_n;const t=50,r=-t,n=this.canvas.width+t,i=this.canvas.height+t;(this.y>i||this.x<r||this.x>n)&&this.reset([1,5],[.5,2]),this.windX*=this.windDecay,this.windY*=this.windDecay}draw(){if(!this.isActive)return;this.ctx.save(),this.ctx.translate(this.x,this.y),this.ctx.rotate(this.angle);const t=this.canvas.width<500;if(t?this.ctx.fillStyle=this.color.includes("0.7)")||this.color.includes("0.8)")?this.color.replace(/0\.[78]\)/,"0.9)"):this.color:this.ctx.fillStyle=this.color,this.ctx.beginPath(),this.ctx.ellipse(0,0,this.size,this.size*1.5,0,0,Math.PI*2),this.ctx.fill(),t&&this.size<4){const n=(i=>typeof window!="undefined"?getComputedStyle(document.documentElement).getPropertyValue(i).trim():"")("--color-peach");this.ctx.strokeStyle=n?`rgba(${n}, 0.3)`:"rgba(0,0,0,0)",this.ctx.lineWidth=.5,this.ctx.stroke()}this.ctx.restore()}deactivate(){this.isActive=!1}};T(we,"tempPoint",{x:0,y:0});let Ge=we;function Dn({density:e=100,sizeRange:t=[1,5],speedRange:r=[.5,2],color:n}={}){const i=document.createElement("canvas");i.style.position="fixed",i.style.top="0",i.style.left="0",i.style.width="100%",i.style.height="100%",i.style.pointerEvents="none",i.style.zIndex="1",i.style.overflow="hidden",document.body.appendChild(i);const a=i.getContext("2d");if(!a)throw new Error("Failed to get canvas rendering context");const o=M=>typeof window!="undefined"?getComputedStyle(document.documentElement).getPropertyValue(M).trim():"",s=o("--color-pink"),l=o("--color-peach"),d=s?`rgba(${s}, 0.85)`:l?`rgba(${l}, 0.85)`:"rgba(0,0,0,0)",u=n||d,h=Nn(e),v=Array.from({length:h},()=>new Ge(i,t,r,u));function C(){i.width=window.innerWidth,i.height=window.innerHeight,v.forEach(M=>{M.reset(t,r),M.y=Math.random()*i.height-i.height*.5})}const b={x:0,y:0},f=.95;let g=!1,y={x:0,y:0},x=null,w={x:0,y:0},B,N=Date.now(),$=!1;const E=16;function J(M){g=!0;const D="touches"in M?M.touches[0]:M;y={x:D.clientX,y:D.clientY}}function Y(M){if(!g||$)return;$=!0,setTimeout(()=>{$=!1},E);const D="touches"in M?M.touches[0]:M,fr=D.clientX-y.x,hr=D.clientY-y.y;b.x=fr*An,b.y=hr*Pn,y={x:D.clientX,y:D.clientY}}function q(M){g=!1;const D="touches"in M&&M.changedTouches?M.changedTouches[0]:M;x={x:D.clientX,y:D.clientY},w=Q({},b)}window.addEventListener("mousedown",J,{passive:!0}),window.addEventListener("mousemove",Y,{passive:!0}),window.addEventListener("mouseup",q,{passive:!0}),window.addEventListener("touchstart",J,{passive:!0}),window.addEventListener("touchmove",Y,{passive:!0}),window.addEventListener("touchend",q,{passive:!0});function ft(){const M=Date.now();if(M-N>Rn){if(typeof window!="undefined"&&"gc"in window)try{window.gc()}catch(D){}N=M}a&&a.clearRect(0,0,i.width,i.height);for(const D of v)x&&(Math.abs(w.x)>.01||Math.abs(w.y)>.01)&&D.applyWind(w,x),D.update(),D.draw();g||(b.x*=f,b.y*=f,Math.abs(b.x)<.01&&(b.x=0),Math.abs(b.y)<.01&&(b.y=0),w.x*=f,w.y*=f,Math.abs(w.x)<.01&&(w.x=0),Math.abs(w.y)<.01&&(w.y=0),w.x===0&&w.y===0&&(x=null)),B=requestAnimationFrame(ft)}return window.addEventListener("resize",C),C(),ft(),()=>{cancelAnimationFrame(B),window.removeEventListener("mousedown",J),window.removeEventListener("mousemove",Y),window.removeEventListener("mouseup",q),window.removeEventListener("touchstart",J),window.removeEventListener("touchmove",Y),window.removeEventListener("touchend",q),window.removeEventListener("resize",C),v.forEach(M=>M.deactivate()),i.parentNode&&i.parentNode.removeChild(i)}}const zn="/wedding-invitation/assets/images/whaleseal-04a2d9ba.png";var Ln=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,jn=Bt(function(e){return Ln.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function Wn(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return st(t)}var nr=function(){var t=Wn.apply(void 0,arguments),r="animation-"+t.name;return{name:r,styles:"@keyframes "+r+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Bn=jn,Vn=function(t){return t!=="theme"},Et=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?Bn:Vn},Ct=function(t,r,n){var i;if(r){var a=r.shouldForwardProp;i=t.__emotion_forwardProp&&a?function(o){return t.__emotion_forwardProp(o)&&a(o)}:a}return typeof i!="function"&&n&&(i=t.__emotion_forwardProp),i},Un=function(t){var r=t.cache,n=t.serialized,i=t.isStringTag;return ot(r,n,i),Zt(function(){return Xt(r,n,i)}),null},Hn=function e(t,r){var n=t.__emotion_real===t,i=n&&t.__emotion_base||t,a,o;r!==void 0&&(a=r.label,o=r.target);var s=Ct(t,r,n),l=s||Et(i),d=!l("as");return function(){var u=arguments,h=n&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&h.push("label:"+a+";"),u[0]==null||u[0].raw===void 0)h.push.apply(h,u);else{h.push(u[0][0]);for(var v=u.length,C=1;C<v;C++)h.push(u[C],u[0][C])}var b=Qt(function(f,g,y){var x=d&&f.as||i,w="",B=[],N=f;if(f.theme==null){N={};for(var $ in f)N[$]=f[$];N.theme=m.useContext(er)}typeof f.className=="string"?w=Gt(g.registered,B,f.className):f.className!=null&&(w=f.className+" ");var E=st(h.concat(B),g.registered,N);w+=g.key+"-"+E.name,o!==void 0&&(w+=" "+o);var J=d&&s===void 0?Et(x):l,Y={};for(var q in f)d&&q==="as"||J(q)&&(Y[q]=f[q]);return Y.className=w,Y.ref=y,m.createElement(m.Fragment,null,m.createElement(Un,{cache:g,serialized:E,isStringTag:typeof x=="string"}),m.createElement(x,Y))});return b.displayName=a!==void 0?a:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",b.defaultProps=t.defaultProps,b.__emotion_real=b,b.__emotion_base=i,b.__emotion_styles=h,b.__emotion_forwardProp=s,Object.defineProperty(b,"toString",{value:function(){return"."+o}}),b.withComponent=function(f,g){return e(f,He({},r,g,{shouldForwardProp:Ct(b,g,!0)})).apply(void 0,h)},b}},Yn=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],p=Hn.bind();Yn.forEach(function(e){p[e]=p(e)});const Z=p.p`
  font-family: inherit;
  font-size: 1.5rem;
  margin: 10px;
  color: rgb(var(--color-coral));
  white-space: pre-line;
`,qn=p.p`
  font-size: 1rem;
  margin: 10px;
  white-space: pre-line;
`,Xe=p.p`
  font-family: inherit;
  line-height: 1;
  margin: 0;
  color: rgb(var(--color-peach));
  white-space: pre-line;
`,Gn=p.p`
  line-height: 2.2rem;
  white-space: pre-line;
`,Ke=p.p`
  font-weight: 200;
  text-align: ${e=>e.textAlign?e.textAlign:"start"};
  white-space: pre-line;
`,G=p.section`
  padding: 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: rgb(var(--color-green));
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
`,Xn=p.div`
  border: 30px solid transparent; /* Initial value for the border */
  /* The visible white "panel" is painted by the ::before pseudo-element so
     its opacity can be controlled independently of the children. The decorative
     frame is painted by ::after so it sits visually above the panel but does
     not affect the content layering. */
  --surface-opacity: 0.5; /* default opacity for the panel background */
  border-image-source: url('./background.png'); /* Set the image path */
  border-image-slice: 30% 49%; /* Set the size of the image */
  border-image-width: 280px; /* Set the width of the border image */
  background-color: rgba(var(--surface-rgb), var(--surface-opacity));

  /* panel background applied directly like Button to ensure consistent translucency */
  background: rgba(var(--surface-rgb), var(--surface-opacity));
  border-radius: 8px;
  overflow: hidden;

  /* decorative frame (above the panel and the content) */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 3;
    /* prefer a processed transparent frame if present, otherwise fall back */
    background-repeat: no-repeat;
    background-position: center top;
    background-size: contain;
    pointer-events: none;
    opacity: var(--frame-opacity, 1);
    /* optionally crop outer margins of the frame so the body background shows through */
    clip-path: inset(
      var(--frame-clip, 0) var(--frame-clip, 0) var(--frame-clip, 0) var(--frame-clip, 0)
    );
  }

  /* ensure children render above the panel but below the decorative frame */
  & > * {
    position: relative;
    z-index: 2;
  }

  @media screen and (min-width: 500px) {
    width: 500px;
  }
`,Kn={title:`Sakyawira 💍 Debbie
We are celebrating our marriage!`,message:`To our dear ones who have always warmed us with their love.
We invite you to share the precious moment of our long awaited wedding celebration.

You'll find all the details about when and where below. And please understand that this inivitaion is for you only. If your partner is invited, they will get a separate invitation.

We look forward to celebrating with you!`,host:{groom:{name:"Sakyawira Ruslim",relation:"",parents:[]},bride:{name:"Debbie Hartono",relation:"",parents:[]},groomFather:{name:"Djajadi Ruslim & Silvi Oktavia Wijaya",relation:"Son of",parents:[]},brideFather:{name:"Aris Budiman Hartono & Karuniawati Tjahjadi",relation:"Daughter of ",parents:[]}},eventDetail:`February 28, 2026 (Saturday) 10:00
Duke & Duchess`},Zn=[{host:"Bride's Bank Account",accountInfo:[{name:"Debbie Fiona",relation:"",bank:"Blu/ BCA Digital ",account:"005734429248",kakaopayAccount:"",tossAccount:""}]}],Jn={address1:"Duke & Duchess",address2:"Jl. Achmad Adnawijaya No.132, Tegal Gundil, Kec. Bogor Utara, Kota Bogor, Jawa Barat 16152, Indonesia",googleMap:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7926.966471849799!2d106.8161017!3d-6.5866957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5e7ff9b0813%3A0x2861e1a0fa389449!2sDuke%20and%20Duchess!5e0!3m2!1sen!2snz!4v1746278676549!5m2!1sen!2snz",lat:37.54222,lon:126.952708},Qn=[{title:"📅 Time",desc:"February 28, 2026 (Saturday) 10:00 am"},{title:"📍 Place",desc:"Duke & Duchess, Jl. Achmad Adnawijaya No.132, Tegal Gundil, Kec. Bogor Utara, Kota Bogor, Jawa Barat 16152, Indonesia"}],ei=["❤️","💛","💌","🥺","🥳","👰🏻‍","🤵🏻‍♂️","💝","✨","💍","💒","💕","😍","🔔","💘"],ti=[{title:"Burgundy Palette",colors:["#800020","#65081F","#4C3938","#C73A52","#58181F","#C20E35","#A52A2A","#6C403E","#6D213C","#5B4148","#E52B50","#9F1D35","#650015","#C41E3A","#451425","#D2042D","#510400"]},{title:"Peach Palette",colors:["#FFD8B1","#FF9A8A","#FBD5AB","#FF775E","#FAD0C1","#EFA498","#EFA59A","#FCB6A4","#F4A384","#EFA59A","#FDE0B4","#E6CDC5","#F97272","#F9CDC4","#FFA07A"]}],ne={greeting:Kn,hostInfo:Zn,mapInfo:Jn,locationInfo:Qn,emojis:ei,dressCodes:ti},ri=e=>m.createElement("svg",Q({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 -960 960 960",width:24},e),m.createElement("path",{d:"M440-501Zm0 381L313-234q-72-65-123.5-116t-85-96q-33.5-45-49-87T40-621q0-94 63-156.5T260-840q52 0 99 22t81 62q34-40 81-62t99-22q81 0 136 45.5T831-680h-85q-18-40-53-60t-73-20q-51 0-88 27.5T463-660h-46q-31-45-70.5-72.5T260-760q-57 0-98.5 39.5T120-621q0 33 14 67t50 78.5q36 44.5 98 104T440-228q26-23 61-53t56-50l9 9 19.5 19.5L605-283l9 9q-22 20-56 49.5T498-172l-58 52Zm280-160v-120H600v-80h120v-120h80v120h120v80H800v120h-80Z"})),ni=e=>m.createElement("svg",Q({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 -960 960 960",width:24},e),m.createElement("path",{d:"M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"})),At=p.button`
  padding: 10px 20px;
  border-radius: 8px;
  border: 1px solid rgba(var(--color-peach), 0.95);
  outline: none;
  box-shadow: none;
  font-size: 0.9rem;
  cursor: pointer;
  background: rgba(var(--surface-rgb), calc(var(--surface-opacity) + 0.12));
  display: flex;
  align-items: center;
  color: rgb(var(--color-green));
  text-decoration: none;
  gap: 2px;
`.withComponent("a"),ii=({isVisible:e})=>{const{emojis:t}=ne,r=()=>{n.addConfetti({emojis:t})},n=new Sr;return A(oi,{isVisible:e,children:[c(At,{onClick:r,children:c(ri,{className:"floating-icon"})}),A(At,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:[c(ni,{className:"floating-icon"}),"Scroll Up"]})]})},ai=nr`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`,oi=p.nav`
  min-width: 280px;
  position: fixed;
  bottom: 30px;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  gap: 5px;
  display: ${e=>e.isVisible?"flex":"none"};
  animation: ${e=>e.isVisible?ai:"none"} 0.5s ease-out;
`,si="/wedding-invitation/assets/images/01-15be4fbb.jpg",ci="/wedding-invitation/assets/images/02-d5068223.jpg",li="/wedding-invitation/assets/images/03-2fa304fa.jpg",di="/wedding-invitation/assets/images/04-1b00c50a.jpg",ir="/wedding-invitation/assets/images/05-4307a478.jpg",ui="/wedding-invitation/assets/images/06-10e36295.jpg",fi="/wedding-invitation/assets/images/07-c0b8fca0.jpg",hi="/wedding-invitation/assets/images/08-17704c28.jpg",pi="/wedding-invitation/assets/images/09-840d74df.jpg",mi="/wedding-invitation/assets/images/10-563453ae.jpg",gi="/wedding-invitation/assets/images/11-c97ae3e8.jpg",bi="/wedding-invitation/assets/images/12-3be7f6a8.jpg",W=[{alt:"image01",source:si,width:640,height:960},{alt:"image02",source:ci,width:640,height:960},{alt:"image03",source:li,width:640,height:960},{alt:"image04",source:di,width:640,height:960},{alt:"image05",source:ir,width:640,height:960},{alt:"image06",source:ui,width:640,height:960},{alt:"image07",source:fi,width:640,height:960},{alt:"image08",source:hi,width:640,height:960},{alt:"image09",source:pi,width:640,height:960},{alt:"image10",source:mi,width:640,height:960},{alt:"image11",source:gi,width:640,height:960},{alt:"image12",source:bi,width:640,height:960}],vi=()=>{const e={cursor:"pointer",objectFit:"contain",width:"100px",height:"150px"},r=/iPad|iPhone|iPod/.test(navigator.userAgent)?W.slice(0,8):W;return c(Cr,{children:c("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 0fr)",gridGap:2},children:r.map((n,i)=>c(Er,{cropped:!0,original:n.source,thumbnail:n.source,width:n.width,height:n.height,children:({ref:a,open:o})=>c("img",{style:e,alt:n.alt,src:n.source,ref:a,onClick:o,loading:"lazy",decoding:"async"})},i))})})},yi=()=>{const[e,t]=m.useState(!1);return A(wi,{children:[A(xi,{isMoreView:e,children:[!e&&c(Si,{}),c(vi,{})]}),!e&&c(ki,{onClick:()=>{t(!e)},children:"Expand"})]})},wi=p.div`
  margin: 30px 0;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`,xi=p.div`
  position: relative;
  max-height: ${e=>e.isMoreView?"":"60vh"}; /* When isMoreView is true, no height limit; when false, limit to 195px */
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
`,Si=p.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    transparent 0%,
    rgba(var(--surface-rgb), var(--surface-opacity)) 90%
  );
`,ki=p.div`
  width: 100%;
  box-sizing: border-box;
  padding: 10px 20px;
  font-size: 1rem;
  align-items: center;
  border-radius: 4px;
  border: 1px solid rgba(var(--color-peach), 0.95);
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
  color: rgb(var(--muted-text-rgb));
`,Ei="/wedding-invitation/assets/images/13-512a6958.jpg",Ci=p.div`
  position: fixed;
  inset: 0;
  z-index: -999;
  background-image: url(${Ei});
  background-size: cover;
  background-position: center center;
    /* background-attachment: fixed causes iOS Safari to zoom/crop the image.
      Keep it by default for desktop, but disable on touch devices and small screens. */
  background-attachment: fixed;

  /* Target iOS Safari and other touch devices */
  @supports (-webkit-overflow-scrolling: touch) {
    background-attachment: scroll;
    background-position: center top;
  }

  /* Fallback for coarse pointers / small viewports */
  @media (max-width: 768px), (pointer: coarse) {
    background-attachment: scroll;
    background-position: center top;
  }
  filter: none;
  pointer-events: none;
`,Ai=p.div`
  position: fixed;
  inset: 0;
  z-index: -998;
  background: rgba(var(--surface-rgb), 0.18); /* subtle tint to match theme */
  pointer-events: none;
`;function Pi(){return A(ct,{children:[c(Ci,{}),c(Ai,{})]})}class Ii{constructor(){T(this,"formUrl");T(this,"nameFieldId");T(this,"messageFieldId");this.formUrl="https://docs.google.com/forms/d/e/1FAIpQLSchKDsv33J8uYdJ6DPpO56ZNmYgzAm3_vFudhzXAz3vE-tvhA/formResponse",this.nameFieldId="1920355118",this.messageFieldId="19176333"}appendEntry(t){return de(this,null,function*(){try{console.log("Attempting to submit to Google Form:",t);const r=new FormData;r.append(`entry.${this.nameFieldId}`,t.name),r.append(`entry.${this.messageFieldId}`,t.message);const n=yield fetch(this.formUrl,{method:"POST",body:r,mode:"no-cors"});return console.log("Form submission response status:",n.status),!0}catch(r){return console.error("Error submitting to Google Form:",r),!1}})}getEntries(){return de(this,null,function*(){try{const t={}.VITE_GOOGLE_SHEET_ID||"";if(!t)return console.warn("No spreadsheet ID configured for reading entries"),[];const r=`https://docs.google.com/spreadsheets/d/${t}/export?format=csv&gid=0`,n=yield fetch(r);if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);return(yield n.text()).split(`
`).slice(1).filter(s=>s.trim()).map(s=>{const[l,d,u]=s.split(",").map(h=>h.replace(/"/g,"").trim());return{name:d||"",message:u||"",timestamp:l||""}})}catch(t){return console.error("Error fetching from Google Sheets:",t),[]}})}}const Mi=new Ii,Oi=()=>{const[e,t]=m.useState(""),[r,n]=m.useState(""),[i,a]=m.useState(!1);return A(Ti,{onSubmit:s=>de(ur,null,function*(){if(s.preventDefault(),!e.trim()||!r.trim()){alert("Please fill in your name and message. 😢");return}if(e.length>50){alert("Name must be less than 50 characters. 😅");return}if(r.length>500){alert("Message must be less than 500 characters. 😅");return}a(!0);try{(yield Mi.appendEntry({name:e.trim(),message:r.trim(),timestamp:new Date().toISOString()}))?(t(""),n(""),alert("Thank you for your confirmation! 💝")):alert("Sorry, there was an error submitting your message. Please try again. 😢")}catch(l){console.error("Error submitting message:",l),alert("Sorry, there was an error submitting your message. Please try again. 😢")}finally{a(!1)}}),children:[c(_i,{placeholder:"Name",type:"text",value:e,onChange:s=>t(s.target.value)}),c($i,{placeholder:"Are you coming? (Yes/No)",value:r,onChange:s=>n(s.target.value)}),c(Ri,{type:"submit",disabled:i,children:i?"Submitting...":"Submit"})]})},Ti=p.form`
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: visible;
  align-items: center;
`,_i=p.input`
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px;
  font-size: 1rem;
  line-height: 1;
  outline: none;
  border: 1px solid rgba(var(--color-pink), 0.9);
  font-family: inherit;
  font-weight: 300;
`,$i=p.textarea`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px;
  font-size: 1rem;
  line-height: 1.5;
  outline: none;
  border: 1px solid rgba(var(--color-pink), 0.9);
  resize: none;
  font-family: inherit;
  font-weight: 300;
`,Ri=p.button`
  width: 100%;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid rgba(var(--color-green), 0.9);
  background-color: rgba(var(--color-peach), 0.95);
  font-family: inherit;
  font-weight: 500;
  color: rgb(var(--muted-text-rgb));
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: rgba(var(--color-yellow), 0.95);
    border-color: rgba(var(--color-green), 0.95);
  }

  &:disabled {
    background-color: rgba(var(--color-peach), 0.85);
    color: rgb(var(--muted-text-rgb));
    cursor: not-allowed;
    opacity: 0.7;
  }
`,Fi=()=>A(Ni,{children:[A(qn,{children:["Please confirm whether you will attend our wedding!",c("br",{}),"We would love to know before February 5, 2026. 💌"]}),c(Oi,{})]}),Ni=p.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 50px;
`,Di=()=>{const{groom:e,bride:t,groomFather:r,brideFather:n}=ne.greeting.host;return c(ct,{children:A(Li,{children:[c("h2",{children:"Groom"}),c(fe,{person:e}),c(fe,{person:r}),c("span",{role:"img","aria-label":"pink heart",children:"💗"}),c("h2",{children:"Bride"}),c(fe,{person:t}),c(fe,{person:n})]})})},fe=({person:e})=>A(ji,{children:[e.parents&&c(ct,{children:e.parents.map((t,r)=>A(_t.Fragment,{children:[r>0&&" · ",t.name]},r))}),c(Wi,{children:e.relation}),c(zi,{children:e.name})]}),zi=p.span`
  font-weight: 600;
  font-size: 1.1rem;
  color: rgb(var(--color-green));
  margin-right: 5px;
  font-style: italic;
  word-break: break-word;
  hyphens: auto;

  /* Large phones and tablets */
  @media (max-width: 480px) {
    font-size: 1rem;
  }

  /* Galaxy S20/S24 Ultra and similar */
  @media (max-width: 412px) {
    font-size: 0.95rem;
  }

  /* Galaxy S20 regular and similar */
  @media (max-width: 360px) {
    font-size: 0.9rem;
  }

  /* Extra small devices */
  @media (max-width: 320px) {
    font-size: 0.85rem;
  }
`,Li=p.div`
  gap: 8px;
  font-family: inherit;
  max-width: 100%;
  padding: 0 4px;
  box-sizing: border-box;
`,ji=p.div`
  padding: 10px 8px;
  justify-content: center;
  display: flex;
  gap: 6px;
  text-align: center;
  align-items: center;
  font-weight: 700;
  max-width: 100%;
  min-width: 0;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
  white-space: normal;
  flex-wrap: wrap;

  /* Large phones and tablets */
  @media (max-width: 480px) {
    padding: 8px 4px;
    gap: 4px;
    font-size: 0.95rem;
  }

  /* Galaxy S20/S24 Ultra and similar */
  @media (max-width: 412px) {
    padding: 6px 2px;
    gap: 3px;
    font-size: 0.9rem;
  }

  /* Galaxy S20 regular and similar */
  @media (max-width: 360px) {
    padding: 4px 1px;
    gap: 2px;
    font-size: 0.85rem;
  }

  /* Extra small devices */
  @media (max-width: 320px) {
    padding: 4px 0px;
    gap: 2px;
    font-size: 0.8rem;
  }
`,Wi=p.div`
  width: auto;
  min-width: 0;
  word-break: break-word;
  hyphens: auto;

  /* Large phones and tablets */
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }

  /* Galaxy S20/S24 Ultra and similar */
  @media (max-width: 412px) {
    font-size: 0.9rem;
  }

  /* Galaxy S20 regular and similar */
  @media (max-width: 360px) {
    font-size: 0.85rem;
  }

  /* Extra small devices */
  @media (max-width: 320px) {
    font-size: 0.8rem;
  }
`,Bi=()=>{const{greeting:e,mapInfo:t,locationInfo:r}=ne;return m.useEffect(()=>{const n=new Date("2025-08-16T15:30:00"),i=new Date(n.getTime()+2*60*60*1e3),a=n.toISOString().replace(/[-:]/g,"").split(".")[0]+"Z",o=i.toISOString().replace(/[-:]/g,"").split(".")[0]+"Z",s=t.address1||r[1].desc||"",l=`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Sakyawira & Debbie Wedding")}&dates=${a}/${o}&details=${encodeURIComponent(e.message)}&location=${encodeURIComponent(s)}`,d=document.getElementById("google-calendar-link");d&&d.setAttribute("href",l)},[]),A(Vi,{children:[c(Ui,{children:e.message}),c(Di,{})]})},Vi=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 0 16px;
  max-width: 100%;
`,Ui=p(Gn)`
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  max-width: 100%;
  text-align: center;
  line-height: 1.5;

  /* Galaxy S20 specific breakpoint (360px width) */
  @media (max-width: 360px) {
    font-size: 0.9rem;
    line-height: 1.4;
    padding: 0 8px;
  }

  /* Extra small devices */
  @media (max-width: 320px) {
    font-size: 0.85rem;
    line-height: 1.3;
    padding: 0 4px;
  }
`,Hi=({src:e})=>c(Yi,{src:e,allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"}),Yi=p.iframe`
  width: 100%;
  max-width: 400px;
  height: 250px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(var(--shadow-rgb), 0.12);
`,qi=p.button`
  padding: 10px 20px;
  border-radius: 20px;
  outline: none;
  box-shadow: none;
  font-size: 0.9rem;
  cursor: pointer;
  color: rgb(var(--color-green));
  text-decoration: none;
  background-color: rgba(var(--color-pink), 0.95);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`.withComponent("a"),Gi=()=>{const{mapInfo:e,locationInfo:t}=ne;return A(Xi,{children:[A(Pt,{children:[c(Xe,{children:t[1].title}),c(Ke,{children:t[1].desc}),c(Hi,{src:e.googleMap})]}),A(Pt,{children:[c(Xe,{children:t[0].title}),c(Ke,{children:t[0].desc}),c(qi,{id:"google-calendar-end-feb-event",target:"_blank",href:"https://calendar.app.google/oBYAttRPsaaLUvsVA",rel:"noreferrer",children:"Add to Calendar"})]})]})},Xi=p.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`,Pt=p.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-top: 24px;
`,ar=nr`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,Ki=()=>{const{greeting:e}=ne,t=typeof window!="undefined"?new URLSearchParams(window.location.search):null;let r=t?t.get("name"):null;if(r){try{r=decodeURIComponent(r)}catch(i){}r=r.trim().slice(0,50),r=r.replace(/([a-z])([A-Z])/g,"$1 $2")}const n=r?`Hi, ${r}! 💍 Sakya & Debbie got married - come celebrate! 🎉✨`:e.title;return A("div",{children:[c(Zi,{src:ir}),c(Ji,{children:n})]})},Zi=p.img`
  width: 90%;
  max-width: 450px;
  padding: 18px;
  display: block;
  margin: 0 auto;
  animation: ${ar} 1s ease-out;

  /* organic clipped shape with graceful fallback */
  border-radius: 20px;
  clip-path: polygon(
    5% 10%, 95% 5%, 100% 40%, 85% 95%, 15% 95%, 0% 55%
  );

  box-shadow: 0 10px 30px rgba(var(--shadow-rgb), 0.12);
  transition: transform 220ms ease, box-shadow 220ms ease;

  &:hover {
    transform: translateY(-6px) scale(1.01) rotate(-0.5deg);
    box-shadow: 0 18px 40px rgba(var(--shadow-rgb), 0.16);
  }
`,Ji=p.p`
  font-family: inherit;
  font-size: 2rem;
  color: rgb(var(--color-green));
  line-height: 120%;
  white-space: pre-line;
  margin: 10px 0;
  animation: ${ar} 1.2s ease-out;
`;var Ne={},or={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function r(){for(var a="",o=0;o<arguments.length;o++){var s=arguments[o];s&&(a=i(a,n(s)))}return a}function n(a){if(typeof a=="string"||typeof a=="number")return a;if(typeof a!="object")return"";if(Array.isArray(a))return r.apply(null,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var o="";for(var s in a)t.call(a,s)&&a[s]&&(o=i(o,s));return o}function i(a,o){return o?a?a+" "+o:a+o:a}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(or);var sr=or.exports;Ne.__esModule=!0;Ne.default=void 0;var Qi=lt(m),X=lt($t),ea=lt(sr);function lt(e){return e&&e.__esModule?e:{default:e}}const cr=({animate:e=!0,className:t="",layout:r="2-columns",lineColor:n="#FFF",children:i})=>(typeof window=="object"&&document.documentElement.style.setProperty("--line-color",n),Qi.default.createElement("div",{className:(0,ea.default)(t,"vertical-timeline",{"vertical-timeline--animate":e,"vertical-timeline--two-columns":r==="2-columns","vertical-timeline--one-column-left":r==="1-column"||r==="1-column-left","vertical-timeline--one-column-right":r==="1-column-right"})},i));cr.propTypes={children:X.default.oneOfType([X.default.arrayOf(X.default.node),X.default.node]).isRequired,className:X.default.string,animate:X.default.bool,layout:X.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:X.default.string};var ta=cr;Ne.default=ta;var De={};function Ze(){return Ze=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ze.apply(this,arguments)}function ra(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Je(e,t)}function Je(e,t){return Je=Object.setPrototypeOf||function(n,i){return n.__proto__=i,n},Je(e,t)}function na(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}var Qe=new Map,he=new WeakMap,It=0,lr=void 0;function ia(e){lr=e}function aa(e){return e?(he.has(e)||(It+=1,he.set(e,It.toString())),he.get(e)):"0"}function oa(e){return Object.keys(e).sort().filter(function(t){return e[t]!==void 0}).map(function(t){return t+"_"+(t==="root"?aa(e.root):e[t])}).toString()}function sa(e){var t=oa(e),r=Qe.get(t);if(!r){var n=new Map,i,a=new IntersectionObserver(function(o){o.forEach(function(s){var l,d=s.isIntersecting&&i.some(function(u){return s.intersectionRatio>=u});e.trackVisibility&&typeof s.isVisible=="undefined"&&(s.isVisible=d),(l=n.get(s.target))==null||l.forEach(function(u){u(d,s)})})},e);i=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:a,elements:n},Qe.set(t,r)}return r}function dt(e,t,r,n){if(r===void 0&&(r={}),n===void 0&&(n=lr),typeof window.IntersectionObserver=="undefined"&&n!==void 0){var i=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),function(){}}var a=sa(r),o=a.id,s=a.observer,l=a.elements,d=l.get(e)||[];return l.has(e)||l.set(e,d),d.push(t),s.observe(e),function(){d.splice(d.indexOf(t),1),d.length===0&&(l.delete(e),s.unobserve(e)),l.size===0&&(s.disconnect(),Qe.delete(o))}}var ca=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function Mt(e){return typeof e.children!="function"}var ye=function(e){ra(t,e);function t(n){var i;return i=e.call(this,n)||this,i.node=null,i._unobserveCb=null,i.handleNode=function(a){i.node&&(i.unobserve(),!a&&!i.props.triggerOnce&&!i.props.skip&&i.setState({inView:!!i.props.initialInView,entry:void 0})),i.node=a||null,i.observeNode()},i.handleChange=function(a,o){a&&i.props.triggerOnce&&i.unobserve(),Mt(i.props)||i.setState({inView:a,entry:o}),i.props.onChange&&i.props.onChange(a,o)},i.state={inView:!!n.initialInView,entry:void 0},i}var r=t.prototype;return r.componentDidUpdate=function(i){(i.rootMargin!==this.props.rootMargin||i.root!==this.props.root||i.threshold!==this.props.threshold||i.skip!==this.props.skip||i.trackVisibility!==this.props.trackVisibility||i.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},r.componentWillUnmount=function(){this.unobserve(),this.node=null},r.observeNode=function(){if(!(!this.node||this.props.skip)){var i=this.props,a=i.threshold,o=i.root,s=i.rootMargin,l=i.trackVisibility,d=i.delay,u=i.fallbackInView;this._unobserveCb=dt(this.node,this.handleChange,{threshold:a,root:o,rootMargin:s,trackVisibility:l,delay:d},u)}},r.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},r.render=function(){if(!Mt(this.props)){var i=this.state,a=i.inView,o=i.entry;return this.props.children({inView:a,entry:o,ref:this.handleNode})}var s=this.props,l=s.children,d=s.as,u=na(s,ca);return m.createElement(d||"div",Ze({ref:this.handleNode},u),l)},t}(m.Component);ye.displayName="InView";ye.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};function la(e){var t=e===void 0?{}:e,r=t.threshold,n=t.delay,i=t.trackVisibility,a=t.rootMargin,o=t.root,s=t.triggerOnce,l=t.skip,d=t.initialInView,u=t.fallbackInView,h=m.useRef(),v=m.useState({inView:!!d}),C=v[0],b=v[1],f=m.useCallback(function(y){h.current!==void 0&&(h.current(),h.current=void 0),!l&&y&&(h.current=dt(y,function(x,w){b({inView:x,entry:w}),w.isIntersecting&&s&&h.current&&(h.current(),h.current=void 0)},{root:o,rootMargin:a,threshold:r,trackVisibility:i,delay:n},u))},[Array.isArray(r)?r.toString():r,o,a,s,l,i,u,n]);m.useEffect(function(){!h.current&&C.entry&&!s&&!l&&b({inView:!!d})});var g=[f,C.inView,C.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}const da=Object.freeze(Object.defineProperty({__proto__:null,InView:ye,default:ye,defaultFallbackInView:ia,observe:dt,useInView:la},Symbol.toStringTag,{value:"Module"})),ua=xr(da);De.__esModule=!0;De.default=void 0;var K=ut(m),I=ut($t),pe=ut(sr),fa=ua;function ut(e){return e&&e.__esModule?e:{default:e}}const dr=({children:e="",className:t="",contentArrowStyle:r=null,contentStyle:n=null,date:i="",dateClassName:a="",icon:o=null,iconClassName:s="",iconOnClick:l=null,onTimelineElementClick:d=null,iconStyle:u=null,id:h="",position:v="",style:C=null,textClassName:b="",intersectionObserverProps:f={rootMargin:"0px 0px -40px 0px",triggerOnce:!0},visible:g=!1,shadowSize:y="small"})=>K.default.createElement(fa.InView,f,({inView:x,ref:w})=>K.default.createElement("div",{ref:w,id:h,className:(0,pe.default)(t,"vertical-timeline-element",{"vertical-timeline-element--left":v==="left","vertical-timeline-element--right":v==="right","vertical-timeline-element--no-children":e===""}),style:C},K.default.createElement(K.default.Fragment,null,K.default.createElement("span",{style:u,onClick:l,className:(0,pe.default)(s,"vertical-timeline-element-icon",`shadow-size-${y}`,{"bounce-in":x||g,"is-hidden":!(x||g)})},o),K.default.createElement("div",{style:n,onClick:d,className:(0,pe.default)(b,"vertical-timeline-element-content",{"bounce-in":x||g,"is-hidden":!(x||g)})},K.default.createElement("div",{style:r,className:"vertical-timeline-element-content-arrow"}),e,K.default.createElement("span",{className:(0,pe.default)(a,"vertical-timeline-element-date")},i)))));dr.propTypes={children:I.default.oneOfType([I.default.arrayOf(I.default.node),I.default.node]),className:I.default.string,contentArrowStyle:I.default.shape({}),contentStyle:I.default.shape({}),date:I.default.node,dateClassName:I.default.string,icon:I.default.element,iconClassName:I.default.string,iconStyle:I.default.shape({}),iconOnClick:I.default.func,onTimelineElementClick:I.default.func,id:I.default.string,position:I.default.string,style:I.default.shape({}),textClassName:I.default.string,visible:I.default.bool,shadowSize:I.default.string,intersectionObserverProps:I.default.shape({root:I.default.object,rootMargin:I.default.string,threshold:I.default.number,triggerOnce:I.default.bool})};var ha=dr;De.default=ha;var Ot={VerticalTimeline:Ne.default,VerticalTimelineElement:De.default};const Tt=[{date:"2015",title:"Strangers to Best Friends",description:"A school project brought us together for a couple photo. Fate?",image:W[0].source},{date:"2017",title:"Winning a Short Movie Competition",description:"It was a romance movie, but we were just friends. Or so we thought.",image:W[1].source},{date:"2019",title:"Annual Catchup",description:"The ocean kept us apart, but we always found time once a year.",image:W[2].source},{date:"2022",title:"Officially more than Friends",description:"Debbie’s birthday. This time, we’re not just friends.",image:W[3].source},{date:"2023",title:"First Year Together",description:"Long distance, good food, and a lot of calls.",image:W[5].source},{date:"Q2 2024",title:"Engaged!",description:"Somewhere in Southeast Asia, she said yes.",image:W[6].source},{date:"Q4 2024",title:"Holiday in Bali",description:"Last deep breath before the chaos of immigration and weddding prep.",image:W[7].source},{date:"July 2025",title:"Deebie moved to Auckland, New Zealand",description:"The adventure begins. New city, new job, new life together.",image:W[8].source},{date:"August 2025",title:"Officially married!",description:"We registered our marriage with the New Zealand government!",image:W[9].source}],pa=({isCollapsed:e=!1,onExpand:t})=>A(ma,{style:{position:"relative",width:"100%",maxWidth:500},children:[c(Ot.VerticalTimeline,{lineColor:"rgba(var(--color-pink), 0.95)",children:(e?Tt.slice(0,1):Tt).map((n,i)=>A(Ot.VerticalTimelineElement,{date:n.date,dateClassName:"timeline-date-centered",iconStyle:{background:"rgba(var(--color-pink), 0.95)",color:"rgb(var(--color-white))",boxShadow:"0 0 0 4px rgba(var(--color-pink), 0.9)"},contentStyle:{background:"transparent",color:"rgb(var(--muted-text-rgb))",border:"1px solid rgba(var(--color-pink), 0.9)"},contentArrowStyle:{borderRight:"7px solid rgba(var(--color-pink), 0.9)"},children:[c(Xe,{children:n.title}),c(Ke,{children:n.description}),c(va,{src:n.image,alt:n.title,shapeIndex:i}),e&&i===1-1&&c(ya,{onClick:t,children:"Show Full Timeline"})]},i))}),e&&c(wa,{})]}),ma=p.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  background: rgba(var(--surface-rgb, 255, 255, 255), var(--surface-opacity));
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(var(--color-pink), 0.08);
  padding: 20px 0;
  position: relative;
`,ga=e=>()=>{let t=e+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296},We=e=>{const t=[];for(let r=0;r<e.length;r++){const n=e[r],i=e[(r+1)%e.length];t.push([n[0]*.75+i[0]*.25,n[1]*.75+i[1]*.25]),t.push([n[0]*.25+i[0]*.75,n[1]*.25+i[1]*.75])}return t},ba=(e=0,t=24)=>{const r=ga(e+1),n=52,i=78,a=50+(r()-.5)*6,o=50+(r()-.5)*6;let l=Array.from({length:t},()=>n+r()*(i-n)).map((u,h)=>{const v=h/t*Math.PI*2;return[a+Math.cos(v)*u,o+Math.sin(v)*u]});if(l=We(l),l=We(l),l=We(l),r()>.4){const u=Math.floor(r()*3)+1;for(let h=0;h<u;h++){const v=Math.floor(r()*l.length);l[v]=[l[v][0]+(r()-.5)*12,l[v][1]+(r()-.5)*12]}}return`polygon(${l.map(([u,h])=>[Math.max(1,Math.min(99,Math.round(u))),Math.max(1,Math.min(99,Math.round(h)))]).map(([u,h])=>`${u}% ${h}%`).join(", ")})`},va=p.img`
  width: 100%;
  max-width: 320px;
  margin-top: 12px;
  box-shadow: 0 6px 18px rgba(var(--shadow-rgb), 0.08);
  transition: transform 220ms ease, box-shadow 220ms ease;
  border-radius: 10px;
  object-fit: cover;

  /* procedurally generated large blob clip-path (65% - 91% radius) */
  ${({shapeIndex:e=0})=>`clip-path: ${ba(e,7)};`}

  &:hover {
    transform: translateY(-6px) scale(1.02) rotate(-0.6deg);
    box-shadow: 0 16px 36px rgba(var(--shadow-rgb), 0.12);
  }
`,ya=p.button`
  width: 100%;
  margin-top: 16px;
  padding: 10px 0;
  border-radius: 8px;
  border: none;
  background: linear-gradient(90deg, rgba(var(--color-coral),1) 0%, rgba(var(--color-yellow),1) 100%);
  color: rgb(var(--color-white));
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(var(--color-pink), 0.1);
  transition:
    background 0.2s,
    color 0.2s;
  &:hover {
    background: linear-gradient(90deg, rgba(var(--color-yellow),1) 0%, rgba(var(--color-coral),1) 100%);
    color: rgb(var(--muted-text-rgb));
  }
`,wa=p.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
  background: linear-gradient(
    transparent 0%,
    rgba(var(--surface-rgb, 255, 255, 255), var(--surface-opacity)) 90%
  );
  pointer-events: none;
`,xa=({title:e,colors:t})=>A(Sa,{children:[e&&c(ka,{children:e}),c(Ea,{children:t.map(r=>c(Ca,{style:{background:r},children:c(Aa,{children:r})},r))})]}),Sa=p.div`
  padding: 16px 0;
`,ka=p.h4`
  margin: 0 0 10px 0;
  color: rgb(var(--muted-text-rgb));
`,Ea=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 8px;
`,Ca=p.div`
  height: 56px;
  border-radius: 6px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 6px;
  box-shadow: 0 1px 2px rgba(var(--shadow-rgb), 0.06);
`,Aa=p.span`
  font-size: 0.65rem;
  color: rgba(var(--color-white), 0.95);
  text-shadow: 0 1px 0 rgba(0,0,0,0.25);
`,Pa=e=>m.createElement("svg",Q({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 -960 960 960",width:24},e),m.createElement("path",{d:"M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"})),Ia=({title:e,children:t,defaultOpen:r=!1})=>{const[n,i]=m.useState(r);return A(Ma,{children:[A(Oa,{isActive:n,onClick:()=>{i(!n)},children:[c("p",{children:e}),c("span",{children:c(_a,{})})]}),n&&c(Ta,{children:t})]})},Ma=p.div`
  font-family: inherit;
  border: 1px solid rgba(var(--color-pink), 0.9);
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
`,Oa=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(var(--color-pink), 0.95);
  padding: 0 15px;
  cursor: pointer;
  & > p {
    color: rgb(var(--color-green));
  }
  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    transition: all 0.3s ease;
    transform: ${e=>e.isActive?"rotate(180deg)":void 0};
  }
`,Ta=p.div`
  font-size: 14px;
  text-align: justify;
  padding: 10px 20px;
  background-color: rgba(var(--surface-rgb), var(--surface-opacity));
`,_a=p(Pa)`
  width: 18px;
  height: 18px;
  fill: rgba(var(--color-pink), 1) !important;
`,$a=()=>{const{dressCodes:e}=ne;return c(Ra,{children:e==null?void 0:e.map(t=>c(Ia,{title:t.title,defaultOpen:!0,children:c(xa,{title:t.title,colors:t.colors})},t.title))})},Ra=p.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  padding: 20px;
`;function Fa(){const[e,t]=m.useState({}),[r,n]=m.useState(!1),i=m.useRef(null),a=m.useRef(null),o=m.useRef(null),s=m.useRef(null),l=m.useRef(null),d=m.useRef(null),u=m.useRef(null),h=m.useMemo(()=>({main:i,invitation:a,gallery:o,liveStream:s,giftInfo:l,directions:d,messages:u}),[]);return m.useEffect(()=>{const v=/iPad|iPhone|iPod/.test(navigator.userAgent),C=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),b=new IntersectionObserver(f=>{f.forEach(g=>{g.isIntersecting&&t(y=>pt(Q({},y),{[g.target.id]:!0}))})},{threshold:v?.05:C?.08:.1,rootMargin:v?"50px":"20px"});return Object.values(h).forEach(f=>{f.current&&b.observe(f.current)}),()=>{Object.values(h).forEach(f=>{f.current&&b.unobserve(f.current)})}},[h]),m.useEffect(()=>{const v=/iPad|iPhone|iPod/.test(navigator.userAgent),C=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);kr.init({duration:v?600:C?800:1e3,once:!0,disable:v&&window.innerWidth<768,throttleDelay:v?100:50})},[]),m.useEffect(()=>{if(/iPad|iPhone|iPod/.test(navigator.userAgent))return;const C=setTimeout(()=>{const f={density:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?8:15,sizeRange:[1,3],speedRange:[.3,.8]};try{return Dn(f)}catch(g){console.warn("Failed to start falling petals:",g);return}},100);return()=>{clearTimeout(C)}},[]),A(Xn,{children:[c(Pi,{}),c(G,{id:"main",ref:i,"data-aos":"fade-up",children:c(Ki,{})}),c("hr",{className:"separator"}),A(G,{id:"invitation",ref:a,"data-aos":"fade-up",children:[c(Z,{children:"Invitation"}),c(Bi,{})]}),c("hr",{className:"separator"}),A(G,{id:"directions",ref:d,"data-aos":"fade-up",children:[c(Z,{children:"Place & Time"}),c(Gi,{})]}),c("hr",{className:"separator"}),A(G,{id:"giftInfo",ref:l,"data-aos":"fade-up",children:[c(Z,{children:"Dress Code"}),c(Be,{style:{textAlign:"center",padding:"1rem",maxWidth:"100%",overflow:"hidden"},children:c("p",{style:{fontSize:"clamp(0.8rem, 2.5vw, 1rem)",lineHeight:"1.4",maxWidth:"95%",margin:"0 auto",wordBreak:"break-word",hyphens:"auto",fontStyle:"italic"},children:"Here are some outfit color suggestions to help you shine on our special day ✨"})}),c($a,{})]}),c("hr",{className:"separator"}),A(G,{id:"timeline","data-aos":"fade-up",children:[c(Z,{children:"Our Story Timeline"}),c(pa,{isCollapsed:!r,onExpand:()=>n(!0)})]}),c("hr",{className:"separator"}),A(G,{id:"messages",ref:u,"data-aos":"fade-up",children:[c(Z,{children:"Attendance Confirmation"}),c(Fi,{})]}),c("hr",{className:"separator"}),A(G,{id:"gallery",ref:o,"data-aos":"fade-up",children:[c(Z,{children:"Gallery"}),c(yi,{})]}),c("hr",{className:"separator",style:{marginBottom:"10px"}}),c(G,{id:"thankyou","data-aos":"fade-up",children:A(Be,{style:{textAlign:"center",padding:"0.25rem 1rem 1.5rem 1rem",maxWidth:"100%",overflow:"hidden"},children:[c(Z,{style:{marginBottom:"1.5rem",fontSize:"clamp(1.5rem, 4vw, 2rem)",wordBreak:"break-word"},children:"Thank You!"}),c("p",{style:{fontSize:"clamp(0.9rem, 3vw, 1.1rem)",lineHeight:"1.6",maxWidth:"90%",margin:"0 auto",marginBottom:"1rem",wordBreak:"break-word",hyphens:"auto"},children:"Thank you for reading all the way here! Your presence in our lives means the world to us."}),c("p",{style:{fontSize:"clamp(1rem, 3.5vw, 1.2rem)",fontWeight:"bold",wordBreak:"break-word",maxWidth:"90%",margin:"0 auto"},children:"We hope to see you soon! 💕"}),c(Be,{style:{textAlign:"center",padding:"0.25rem 1rem 1.5rem 1rem",maxWidth:"100%",overflow:"hidden"},children:c("img",{src:zn,alt:"Whale and Seal",style:{marginTop:"1.5rem",maxWidth:"220px",width:"60%",height:"auto",display:"block",marginLeft:"auto",marginRight:"auto",opacity:.95}})})]})}),c(ii,{isVisible:Object.values(e).some(Boolean)})]})}const Be=p.div`
  color: rgb(var(--color-coral));
  font-family: inherit;
`;qe.createRoot(document.getElementById("root")).render(c(_t.StrictMode,{children:c(Fa,{})}))});export default Na();
