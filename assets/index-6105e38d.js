var pr=Object.defineProperty,mr=Object.defineProperties;var gr=Object.getOwnPropertyDescriptors;var ht=Object.getOwnPropertySymbols;var br=Object.prototype.hasOwnProperty,vr=Object.prototype.propertyIsEnumerable;var ze=(e,t,r)=>t in e?pr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Q=(e,t)=>{for(var r in t||(t={}))br.call(t,r)&&ze(e,r,t[r]);if(ht)for(var r of ht(t))vr.call(t,r)&&ze(e,r,t[r]);return e},pt=(e,t)=>mr(e,gr(t));var yr=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var T=(e,t,r)=>(ze(e,typeof t!="symbol"?t+"":t,r),r);var de=(e,t,r)=>new Promise((i,n)=>{var a=l=>{try{s(r.next(l))}catch(d){n(d)}},o=l=>{try{s(r.throw(l))}catch(d){n(d)}},s=l=>l.done?i(l.value):Promise.resolve(l.value).then(a,o);s((r=r.apply(e,t)).next())});import{r as m,b as mt,a as wr,R as _t,d as xr}from"./vendor-ef013e4e.js";import{J as Sr,A as kr}from"./animations-d97477bb.js";import{I as Er,G as Cr,p as $t}from"./gallery-1bdcb658.js";var Fa=yr(ur=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();var Nt={exports:{}},xe={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ar=m,Pr=Symbol.for("react.element"),Ir=Symbol.for("react.fragment"),Mr=Object.prototype.hasOwnProperty,Or=Ar.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Tr={key:!0,ref:!0,__self:!0,__source:!0};function Rt(e,t,r){var i,n={},a=null,o=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(i in t)Mr.call(t,i)&&!Tr.hasOwnProperty(i)&&(n[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)n[i]===void 0&&(n[i]=t[i]);return{$$typeof:Pr,type:e,key:a,ref:o,props:n,_owner:Or.current}}xe.Fragment=Ir;xe.jsx=Rt;xe.jsxs=Rt;Nt.exports=xe;var ae=Nt.exports;function _r(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function $r(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Nr=function(){function e(r){var i=this;this._insertTag=function(n){var a;i.tags.length===0?i.insertionPoint?a=i.insertionPoint.nextSibling:i.prepend?a=i.container.firstChild:a=i.before:a=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(n,a),i.tags.push(n)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(i){i.forEach(this._insertTag)},t.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag($r(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var a=_r(n);try{a.insertRule(i,a.cssRules.length)}catch(o){}}else n.appendChild(document.createTextNode(i));this.ctr++},t.flush=function(){this.tags.forEach(function(i){return i.parentNode&&i.parentNode.removeChild(i)}),this.tags=[],this.ctr=0},e}(),R="-ms-",ve="-moz-",S="-webkit-",Ft="comm",et="rule",tt="decl",Rr="@import",Dt="@keyframes",Fr="@layer",Dr=Math.abs,Se=String.fromCharCode,zr=Object.assign;function Lr(e,t){return N(e,0)^45?(((t<<2^N(e,0))<<2^N(e,1))<<2^N(e,2))<<2^N(e,3):0}function zt(e){return e.trim()}function Wr(e,t){return(e=t.exec(e))?e[0]:e}function k(e,t,r){return e.replace(t,r)}function Ve(e,t){return e.indexOf(t)}function N(e,t){return e.charCodeAt(t)|0}function oe(e,t,r){return e.slice(t,r)}function V(e){return e.length}function rt(e){return e.length}function ue(e,t){return t.push(e),e}function jr(e,t){return e.map(t).join("")}var ke=1,te=1,Lt=0,z=0,O=0,re="";function Ee(e,t,r,i,n,a,o){return{value:e,root:t,parent:r,type:i,props:n,children:a,line:ke,column:te,length:o,return:""}}function ie(e,t){return zr(Ee("",null,null,"",null,null,0),e,{length:-e.length},t)}function Br(){return O}function Vr(){return O=z>0?N(re,--z):0,te--,O===10&&(te=1,ke--),O}function L(){return O=z<Lt?N(re,z++):0,te++,O===10&&(te=1,ke++),O}function U(){return N(re,z)}function me(){return z}function le(e,t){return oe(re,e,t)}function se(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Wt(e){return ke=te=1,Lt=V(re=e),z=0,[]}function jt(e){return re="",e}function ge(e){return zt(le(z-1,He(e===91?e+2:e===40?e+1:e)))}function Hr(e){for(;(O=U())&&O<33;)L();return se(e)>2||se(O)>3?"":" "}function Ur(e,t){for(;--t&&L()&&!(O<48||O>102||O>57&&O<65||O>70&&O<97););return le(e,me()+(t<6&&U()==32&&L()==32))}function He(e){for(;L();)switch(O){case e:return z;case 34:case 39:e!==34&&e!==39&&He(O);break;case 40:e===41&&He(e);break;case 92:L();break}return z}function Yr(e,t){for(;L()&&e+O!==47+10;)if(e+O===42+42&&U()===47)break;return"/*"+le(t,z-1)+"*"+Se(e===47?e:L())}function Gr(e){for(;!se(U());)L();return le(e,z)}function qr(e){return jt(be("",null,null,null,[""],e=Wt(e),0,[0],e))}function be(e,t,r,i,n,a,o,s,l){for(var d=0,u=0,h=o,v=0,C=0,b=0,f=1,g=1,y=1,x=0,w="",B=n,F=a,$=i,E=w;g;)switch(b=x,x=L()){case 40:if(b!=108&&N(E,h-1)==58){Ve(E+=k(ge(x),"&","&\f"),"&\f")!=-1&&(y=-1);break}case 34:case 39:case 91:E+=ge(x);break;case 9:case 10:case 13:case 32:E+=Hr(b);break;case 92:E+=Ur(me()-1,7);continue;case 47:switch(U()){case 42:case 47:ue(Xr(Yr(L(),me()),t,r),l);break;default:E+="/"}break;case 123*f:s[d++]=V(E)*y;case 125*f:case 59:case 0:switch(x){case 0:case 125:g=0;case 59+u:y==-1&&(E=k(E,/\f/g,"")),C>0&&V(E)-h&&ue(C>32?bt(E+";",i,r,h-1):bt(k(E," ","")+";",i,r,h-2),l);break;case 59:E+=";";default:if(ue($=gt(E,t,r,d,u,n,s,w,B=[],F=[],h),a),x===123)if(u===0)be(E,t,$,$,B,a,h,s,F);else switch(v===99&&N(E,3)===110?100:v){case 100:case 108:case 109:case 115:be(e,$,$,i&&ue(gt(e,$,$,0,0,n,s,w,n,B=[],h),F),n,F,h,s,i?B:F);break;default:be(E,$,$,$,[""],F,0,s,F)}}d=u=C=0,f=y=1,w=E="",h=o;break;case 58:h=1+V(E),C=b;default:if(f<1){if(x==123)--f;else if(x==125&&f++==0&&Vr()==125)continue}switch(E+=Se(x),x*f){case 38:y=u>0?1:(E+="\f",-1);break;case 44:s[d++]=(V(E)-1)*y,y=1;break;case 64:U()===45&&(E+=ge(L())),v=U(),u=h=V(w=E+=Gr(me())),x++;break;case 45:b===45&&V(E)==2&&(f=0)}}return a}function gt(e,t,r,i,n,a,o,s,l,d,u){for(var h=n-1,v=n===0?a:[""],C=rt(v),b=0,f=0,g=0;b<i;++b)for(var y=0,x=oe(e,h+1,h=Dr(f=o[b])),w=e;y<C;++y)(w=zt(f>0?v[y]+" "+x:k(x,/&\f/g,v[y])))&&(l[g++]=w);return Ee(e,t,r,n===0?et:s,l,d,u)}function Xr(e,t,r){return Ee(e,t,r,Ft,Se(Br()),oe(e,2,-2),0)}function bt(e,t,r,i){return Ee(e,t,r,tt,oe(e,0,i),oe(e,i+1,-1),i)}function ee(e,t){for(var r="",i=rt(e),n=0;n<i;n++)r+=t(e[n],n,e,t)||"";return r}function Zr(e,t,r,i){switch(e.type){case Fr:if(e.children.length)break;case Rr:case tt:return e.return=e.return||e.value;case Ft:return"";case Dt:return e.return=e.value+"{"+ee(e.children,i)+"}";case et:e.value=e.props.join(",")}return V(r=ee(e.children,i))?e.return=e.value+"{"+r+"}":""}function Kr(e){var t=rt(e);return function(r,i,n,a){for(var o="",s=0;s<t;s++)o+=e[s](r,i,n,a)||"";return o}}function Jr(e){return function(t){t.root||(t=t.return)&&e(t)}}function Bt(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var Qr=function(t,r,i){for(var n=0,a=0;n=a,a=U(),n===38&&a===12&&(r[i]=1),!se(a);)L();return le(t,z)},en=function(t,r){var i=-1,n=44;do switch(se(n)){case 0:n===38&&U()===12&&(r[i]=1),t[i]+=Qr(z-1,r,i);break;case 2:t[i]+=ge(n);break;case 4:if(n===44){t[++i]=U()===58?"&\f":"",r[i]=t[i].length;break}default:t[i]+=Se(n)}while(n=L());return t},tn=function(t,r){return jt(en(Wt(t),r))},vt=new WeakMap,rn=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var r=t.value,i=t.parent,n=t.column===i.column&&t.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(t.props.length===1&&r.charCodeAt(0)!==58&&!vt.get(i))&&!n){vt.set(t,!0);for(var a=[],o=tn(r,a),s=i.props,l=0,d=0;l<o.length;l++)for(var u=0;u<s.length;u++,d++)t.props[d]=a[l]?o[l].replace(/&\f/g,s[u]):s[u]+" "+o[l]}}},nn=function(t){if(t.type==="decl"){var r=t.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(t.return="",t.value="")}};function Vt(e,t){switch(Lr(e,t)){case 5103:return S+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return S+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return S+e+ve+e+R+e+e;case 6828:case 4268:return S+e+R+e+e;case 6165:return S+e+R+"flex-"+e+e;case 5187:return S+e+k(e,/(\w+).+(:[^]+)/,S+"box-$1$2"+R+"flex-$1$2")+e;case 5443:return S+e+R+"flex-item-"+k(e,/flex-|-self/,"")+e;case 4675:return S+e+R+"flex-line-pack"+k(e,/align-content|flex-|-self/,"")+e;case 5548:return S+e+R+k(e,"shrink","negative")+e;case 5292:return S+e+R+k(e,"basis","preferred-size")+e;case 6060:return S+"box-"+k(e,"-grow","")+S+e+R+k(e,"grow","positive")+e;case 4554:return S+k(e,/([^-])(transform)/g,"$1"+S+"$2")+e;case 6187:return k(k(k(e,/(zoom-|grab)/,S+"$1"),/(image-set)/,S+"$1"),e,"")+e;case 5495:case 3959:return k(e,/(image-set\([^]*)/,S+"$1$`$1");case 4968:return k(k(e,/(.+:)(flex-)?(.*)/,S+"box-pack:$3"+R+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+S+e+e;case 4095:case 3583:case 4068:case 2532:return k(e,/(.+)-inline(.+)/,S+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(V(e)-1-t>6)switch(N(e,t+1)){case 109:if(N(e,t+4)!==45)break;case 102:return k(e,/(.+:)(.+)-([^]+)/,"$1"+S+"$2-$3$1"+ve+(N(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ve(e,"stretch")?Vt(k(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(N(e,t+1)!==115)break;case 6444:switch(N(e,V(e)-3-(~Ve(e,"!important")&&10))){case 107:return k(e,":",":"+S)+e;case 101:return k(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+S+(N(e,14)===45?"inline-":"")+"box$3$1"+S+"$2$3$1"+R+"$2box$3")+e}break;case 5936:switch(N(e,t+11)){case 114:return S+e+R+k(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return S+e+R+k(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return S+e+R+k(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return S+e+R+e+e}return e}var an=function(t,r,i,n){if(t.length>-1&&!t.return)switch(t.type){case tt:t.return=Vt(t.value,t.length);break;case Dt:return ee([ie(t,{value:k(t.value,"@","@"+S)})],n);case et:if(t.length)return jr(t.props,function(a){switch(Wr(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ee([ie(t,{props:[k(a,/:(read-\w+)/,":"+ve+"$1")]})],n);case"::placeholder":return ee([ie(t,{props:[k(a,/:(plac\w+)/,":"+S+"input-$1")]}),ie(t,{props:[k(a,/:(plac\w+)/,":"+ve+"$1")]}),ie(t,{props:[k(a,/:(plac\w+)/,R+"input-$1")]})],n)}return""})}},on=[an],sn=function(t){var r=t.key;if(r==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(f){var g=f.getAttribute("data-emotion");g.indexOf(" ")!==-1&&(document.head.appendChild(f),f.setAttribute("data-s",""))})}var n=t.stylisPlugins||on,a={},o,s=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(f){for(var g=f.getAttribute("data-emotion").split(" "),y=1;y<g.length;y++)a[g[y]]=!0;s.push(f)});var l,d=[rn,nn];{var u,h=[Zr,Jr(function(f){u.insert(f)})],v=Kr(d.concat(n,h)),C=function(g){return ee(qr(g),v)};l=function(g,y,x,w){u=x,C(g?g+"{"+y.styles+"}":y.styles),w&&(b.inserted[y.name]=!0)}}var b={key:r,sheet:new Nr({key:r,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:a,registered:{},insert:l};return b.sheet.hydrate(s),b};function Ue(){return Ue=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},Ue.apply(this,arguments)}var Ht={exports:{}},P={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=typeof Symbol=="function"&&Symbol.for,nt=_?Symbol.for("react.element"):60103,it=_?Symbol.for("react.portal"):60106,Ce=_?Symbol.for("react.fragment"):60107,Ae=_?Symbol.for("react.strict_mode"):60108,Pe=_?Symbol.for("react.profiler"):60114,Ie=_?Symbol.for("react.provider"):60109,Me=_?Symbol.for("react.context"):60110,at=_?Symbol.for("react.async_mode"):60111,Oe=_?Symbol.for("react.concurrent_mode"):60111,Te=_?Symbol.for("react.forward_ref"):60112,_e=_?Symbol.for("react.suspense"):60113,cn=_?Symbol.for("react.suspense_list"):60120,$e=_?Symbol.for("react.memo"):60115,Ne=_?Symbol.for("react.lazy"):60116,ln=_?Symbol.for("react.block"):60121,dn=_?Symbol.for("react.fundamental"):60117,un=_?Symbol.for("react.responder"):60118,fn=_?Symbol.for("react.scope"):60119;function W(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case nt:switch(e=e.type,e){case at:case Oe:case Ce:case Pe:case Ae:case _e:return e;default:switch(e=e&&e.$$typeof,e){case Me:case Te:case Ne:case $e:case Ie:return e;default:return t}}case it:return t}}}function Ut(e){return W(e)===Oe}P.AsyncMode=at;P.ConcurrentMode=Oe;P.ContextConsumer=Me;P.ContextProvider=Ie;P.Element=nt;P.ForwardRef=Te;P.Fragment=Ce;P.Lazy=Ne;P.Memo=$e;P.Portal=it;P.Profiler=Pe;P.StrictMode=Ae;P.Suspense=_e;P.isAsyncMode=function(e){return Ut(e)||W(e)===at};P.isConcurrentMode=Ut;P.isContextConsumer=function(e){return W(e)===Me};P.isContextProvider=function(e){return W(e)===Ie};P.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===nt};P.isForwardRef=function(e){return W(e)===Te};P.isFragment=function(e){return W(e)===Ce};P.isLazy=function(e){return W(e)===Ne};P.isMemo=function(e){return W(e)===$e};P.isPortal=function(e){return W(e)===it};P.isProfiler=function(e){return W(e)===Pe};P.isStrictMode=function(e){return W(e)===Ae};P.isSuspense=function(e){return W(e)===_e};P.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ce||e===Oe||e===Pe||e===Ae||e===_e||e===cn||typeof e=="object"&&e!==null&&(e.$$typeof===Ne||e.$$typeof===$e||e.$$typeof===Ie||e.$$typeof===Me||e.$$typeof===Te||e.$$typeof===dn||e.$$typeof===un||e.$$typeof===fn||e.$$typeof===ln)};P.typeOf=W;Ht.exports=P;var hn=Ht.exports,Yt=hn,pn={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},mn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Gt={};Gt[Yt.ForwardRef]=pn;Gt[Yt.Memo]=mn;var gn=!0;function qt(e,t,r){var i="";return r.split(" ").forEach(function(n){e[n]!==void 0?t.push(e[n]+";"):i+=n+" "}),i}var ot=function(t,r,i){var n=t.key+"-"+r.name;(i===!1||gn===!1)&&t.registered[n]===void 0&&(t.registered[n]=r.styles)},Xt=function(t,r,i){ot(t,r,i);var n=t.key+"-"+r.name;if(t.inserted[r.name]===void 0){var a=r;do t.insert(r===a?"."+n:"",a,t.sheet,!0),a=a.next;while(a!==void 0)}};function bn(e){for(var t=0,r,i=0,n=e.length;n>=4;++i,n-=4)r=e.charCodeAt(i)&255|(e.charCodeAt(++i)&255)<<8|(e.charCodeAt(++i)&255)<<16|(e.charCodeAt(++i)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,t=(r&65535)*1540483477+((r>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(n){case 3:t^=(e.charCodeAt(i+2)&255)<<16;case 2:t^=(e.charCodeAt(i+1)&255)<<8;case 1:t^=e.charCodeAt(i)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var vn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},yn=/[A-Z]|^ms/g,wn=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Zt=function(t){return t.charCodeAt(1)===45},yt=function(t){return t!=null&&typeof t!="boolean"},Le=Bt(function(e){return Zt(e)?e:e.replace(yn,"-$&").toLowerCase()}),wt=function(t,r){switch(t){case"animation":case"animationName":if(typeof r=="string")return r.replace(wn,function(i,n,a){return H={name:n,styles:a,next:H},n})}return vn[t]!==1&&!Zt(t)&&typeof r=="number"&&r!==0?r+"px":r};function ce(e,t,r){if(r==null)return"";if(r.__emotion_styles!==void 0)return r;switch(typeof r){case"boolean":return"";case"object":{if(r.anim===1)return H={name:r.name,styles:r.styles,next:H},r.name;if(r.styles!==void 0){var i=r.next;if(i!==void 0)for(;i!==void 0;)H={name:i.name,styles:i.styles,next:H},i=i.next;var n=r.styles+";";return n}return xn(e,t,r)}case"function":{if(e!==void 0){var a=H,o=r(e);return H=a,ce(e,t,o)}break}}if(t==null)return r;var s=t[r];return s!==void 0?s:r}function xn(e,t,r){var i="";if(Array.isArray(r))for(var n=0;n<r.length;n++)i+=ce(e,t,r[n])+";";else for(var a in r){var o=r[a];if(typeof o!="object")t!=null&&t[o]!==void 0?i+=a+"{"+t[o]+"}":yt(o)&&(i+=Le(a)+":"+wt(a,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var s=0;s<o.length;s++)yt(o[s])&&(i+=Le(a)+":"+wt(a,o[s])+";");else{var l=ce(e,t,o);switch(a){case"animation":case"animationName":{i+=Le(a)+":"+l+";";break}default:i+=a+"{"+l+"}"}}}return i}var xt=/label:\s*([^\s;\n{]+)\s*(;|$)/g,H,st=function(t,r,i){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var n=!0,a="";H=void 0;var o=t[0];o==null||o.raw===void 0?(n=!1,a+=ce(i,r,o)):a+=o[0];for(var s=1;s<t.length;s++)a+=ce(i,r,t[s]),n&&(a+=o[s]);xt.lastIndex=0;for(var l="",d;(d=xt.exec(a))!==null;)l+="-"+d[1];var u=bn(a)+l;return{name:u,styles:a,next:H}},Sn=function(t){return t()},kn=mt["useInsertionEffect"]?mt["useInsertionEffect"]:!1,Kt=kn||Sn,Re={}.hasOwnProperty,Jt=m.createContext(typeof HTMLElement!="undefined"?sn({key:"css"}):null);Jt.Provider;var Qt=function(t){return m.forwardRef(function(r,i){var n=m.useContext(Jt);return t(r,n,i)})},er=m.createContext({}),Ye="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",tr=function(t,r){var i={};for(var n in r)Re.call(r,n)&&(i[n]=r[n]);return i[Ye]=t,i},En=function(t){var r=t.cache,i=t.serialized,n=t.isStringTag;return ot(r,i,n),Kt(function(){return Xt(r,i,n)}),null},Cn=Qt(function(e,t,r){var i=e.css;typeof i=="string"&&t.registered[i]!==void 0&&(i=t.registered[i]);var n=e[Ye],a=[i],o="";typeof e.className=="string"?o=qt(t.registered,a,e.className):e.className!=null&&(o=e.className+" ");var s=st(a,void 0,m.useContext(er));o+=t.key+"-"+s.name;var l={};for(var d in e)Re.call(e,d)&&d!=="css"&&d!==Ye&&(l[d]=e[d]);return l.ref=r,l.className=o,m.createElement(m.Fragment,null,m.createElement(En,{cache:t,serialized:s,isStringTag:typeof n=="string"}),m.createElement(n,l))}),rr=Cn,ct=ae.Fragment;function c(e,t,r){return Re.call(t,"css")?ae.jsx(rr,tr(e,t),r):ae.jsx(e,t,r)}function A(e,t,r){return Re.call(t,"css")?ae.jsxs(rr,tr(e,t),r):ae.jsxs(e,t,r)}var Ge={},St=wr;Ge.createRoot=St.createRoot,Ge.hydrateRoot=St.hydrateRoot;const An=.3,Pn=.1,In=.1,Mn=.5,On=.2,Tn=.5,kt=.5,_n=.02,We=200,$n=50,Nn=5e3;function Rn(){const e=navigator.deviceMemory,t=navigator.hardwareConcurrency||1;return e?e>=8?"high":e>=4?"medium":"low":t>=8?"high":t>=4?"medium":"low"}function Fn(e){const t=Rn(),r=Math.min(e,$n),i=window.innerWidth*window.innerHeight,n=400*800,a=Math.min(1,i/n);let o;switch(t){case"low":o=Math.min(r,25);break;case"medium":o=Math.min(r,35);break;case"high":o=r;break;default:o=Math.min(r,30)}return Math.max(10,Math.floor(o*a))}const we=class we{constructor(t,r,i,n){T(this,"x",0);T(this,"y",0);T(this,"size",0);T(this,"speed",0);T(this,"angle",0);T(this,"spin",0);T(this,"canvas");T(this,"ctx");T(this,"color");T(this,"windX",0);T(this,"windY",0);T(this,"windDecay",.96);T(this,"lastWindApplied",0);T(this,"isActive",!0);this.canvas=t;const a=t.getContext("2d");if(!a)throw new Error("Failed to get canvas rendering context");this.ctx=a,this.color=n,this.reset(r,i)}reset(t,r){const n=Math.max(this.canvas.width-20,20),a=Math.max(this.canvas.height-20,20);this.x=Math.random()*n,this.y=Math.random()*a-a;const o=Math.max(.25,Math.min(.7,this.canvas.width/400)),s=[Math.max(1,t[0]*o),Math.max(2.5,t[1]*o)];this.size=Math.random()*(s[1]-s[0])+s[0],this.speed=Math.random()*(r[1]-r[0])+r[0],this.angle=Math.random()*Math.PI*2,this.spin=Math.random()*.02-.01,this.windX=0,this.windY=0,this.isActive=!0}applyWind(t,r){if(!r||!this.isActive)return;const i=we.tempPoint;i.x=this.x-r.x,i.y=this.y-r.y;const n=i.x*i.x+i.y*i.y,a=We*We;if(n<a){const s=1-Math.sqrt(n)/We,l=t.x*(In+Math.random()*Mn)*s,d=t.y*(On+Math.random()*Tn)*s;this.windX=this.windX*this.windDecay+l*kt,this.windY=this.windY*this.windDecay+d*kt,this.lastWindApplied=Date.now()}}update(){if(!this.isActive)return;this.x+=this.windX,this.y+=this.speed+this.windY,this.angle+=this.spin+this.windX*_n;const t=50,r=-t,i=this.canvas.width+t,n=this.canvas.height+t;(this.y>n||this.x<r||this.x>i)&&this.reset([1,5],[.5,2]),this.windX*=this.windDecay,this.windY*=this.windDecay}draw(){if(!this.isActive)return;this.ctx.save(),this.ctx.translate(this.x,this.y),this.ctx.rotate(this.angle);const t=this.canvas.width<500;if(t?this.ctx.fillStyle=this.color.includes("0.7)")||this.color.includes("0.8)")?this.color.replace(/0\.[78]\)/,"0.9)"):this.color:this.ctx.fillStyle=this.color,this.ctx.beginPath(),this.ctx.ellipse(0,0,this.size,this.size*1.5,0,0,Math.PI*2),this.ctx.fill(),t&&this.size<4){const i=(n=>typeof window!="undefined"?getComputedStyle(document.documentElement).getPropertyValue(n).trim():"")("--color-peach");this.ctx.strokeStyle=i?`rgba(${i}, 0.3)`:"rgba(0,0,0,0)",this.ctx.lineWidth=.5,this.ctx.stroke()}this.ctx.restore()}deactivate(){this.isActive=!1}};T(we,"tempPoint",{x:0,y:0});let qe=we;function Dn({density:e=100,sizeRange:t=[1,5],speedRange:r=[.5,2],color:i}={}){const n=document.createElement("canvas");n.style.position="fixed",n.style.top="0",n.style.left="0",n.style.width="100%",n.style.height="100%",n.style.pointerEvents="none",n.style.zIndex="1",n.style.overflow="hidden",document.body.appendChild(n);const a=n.getContext("2d");if(!a)throw new Error("Failed to get canvas rendering context");const o=M=>typeof window!="undefined"?getComputedStyle(document.documentElement).getPropertyValue(M).trim():"",s=o("--color-pink"),l=o("--color-peach"),d=s?`rgba(${s}, 0.85)`:l?`rgba(${l}, 0.85)`:"rgba(0,0,0,0)",u=i||d,h=Fn(e),v=Array.from({length:h},()=>new qe(n,t,r,u));function C(){n.width=window.innerWidth,n.height=window.innerHeight,v.forEach(M=>{M.reset(t,r),M.y=Math.random()*n.height-n.height*.5})}const b={x:0,y:0},f=.95;let g=!1,y={x:0,y:0},x=null,w={x:0,y:0},B,F=Date.now(),$=!1;const E=16;function J(M){g=!0;const D="touches"in M?M.touches[0]:M;y={x:D.clientX,y:D.clientY}}function Y(M){if(!g||$)return;$=!0,setTimeout(()=>{$=!1},E);const D="touches"in M?M.touches[0]:M,fr=D.clientX-y.x,hr=D.clientY-y.y;b.x=fr*An,b.y=hr*Pn,y={x:D.clientX,y:D.clientY}}function G(M){g=!1;const D="touches"in M&&M.changedTouches?M.changedTouches[0]:M;x={x:D.clientX,y:D.clientY},w=Q({},b)}window.addEventListener("mousedown",J,{passive:!0}),window.addEventListener("mousemove",Y,{passive:!0}),window.addEventListener("mouseup",G,{passive:!0}),window.addEventListener("touchstart",J,{passive:!0}),window.addEventListener("touchmove",Y,{passive:!0}),window.addEventListener("touchend",G,{passive:!0});function ft(){const M=Date.now();if(M-F>Nn){if(typeof window!="undefined"&&"gc"in window)try{window.gc()}catch(D){}F=M}a&&a.clearRect(0,0,n.width,n.height);for(const D of v)x&&(Math.abs(w.x)>.01||Math.abs(w.y)>.01)&&D.applyWind(w,x),D.update(),D.draw();g||(b.x*=f,b.y*=f,Math.abs(b.x)<.01&&(b.x=0),Math.abs(b.y)<.01&&(b.y=0),w.x*=f,w.y*=f,Math.abs(w.x)<.01&&(w.x=0),Math.abs(w.y)<.01&&(w.y=0),w.x===0&&w.y===0&&(x=null)),B=requestAnimationFrame(ft)}return window.addEventListener("resize",C),C(),ft(),()=>{cancelAnimationFrame(B),window.removeEventListener("mousedown",J),window.removeEventListener("mousemove",Y),window.removeEventListener("mouseup",G),window.removeEventListener("touchstart",J),window.removeEventListener("touchmove",Y),window.removeEventListener("touchend",G),window.removeEventListener("resize",C),v.forEach(M=>M.deactivate()),n.parentNode&&n.parentNode.removeChild(n)}}const zn="/wedding-invitation/assets/images/whaleseal-04a2d9ba.png";var Ln=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Wn=Bt(function(e){return Ln.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function jn(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return st(t)}var nr=function(){var t=jn.apply(void 0,arguments),r="animation-"+t.name;return{name:r,styles:"@keyframes "+r+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Bn=Wn,Vn=function(t){return t!=="theme"},Et=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?Bn:Vn},Ct=function(t,r,i){var n;if(r){var a=r.shouldForwardProp;n=t.__emotion_forwardProp&&a?function(o){return t.__emotion_forwardProp(o)&&a(o)}:a}return typeof n!="function"&&i&&(n=t.__emotion_forwardProp),n},Hn=function(t){var r=t.cache,i=t.serialized,n=t.isStringTag;return ot(r,i,n),Kt(function(){return Xt(r,i,n)}),null},Un=function e(t,r){var i=t.__emotion_real===t,n=i&&t.__emotion_base||t,a,o;r!==void 0&&(a=r.label,o=r.target);var s=Ct(t,r,i),l=s||Et(n),d=!l("as");return function(){var u=arguments,h=i&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&h.push("label:"+a+";"),u[0]==null||u[0].raw===void 0)h.push.apply(h,u);else{h.push(u[0][0]);for(var v=u.length,C=1;C<v;C++)h.push(u[C],u[0][C])}var b=Qt(function(f,g,y){var x=d&&f.as||n,w="",B=[],F=f;if(f.theme==null){F={};for(var $ in f)F[$]=f[$];F.theme=m.useContext(er)}typeof f.className=="string"?w=qt(g.registered,B,f.className):f.className!=null&&(w=f.className+" ");var E=st(h.concat(B),g.registered,F);w+=g.key+"-"+E.name,o!==void 0&&(w+=" "+o);var J=d&&s===void 0?Et(x):l,Y={};for(var G in f)d&&G==="as"||J(G)&&(Y[G]=f[G]);return Y.className=w,Y.ref=y,m.createElement(m.Fragment,null,m.createElement(Hn,{cache:g,serialized:E,isStringTag:typeof x=="string"}),m.createElement(x,Y))});return b.displayName=a!==void 0?a:"Styled("+(typeof n=="string"?n:n.displayName||n.name||"Component")+")",b.defaultProps=t.defaultProps,b.__emotion_real=b,b.__emotion_base=n,b.__emotion_styles=h,b.__emotion_forwardProp=s,Object.defineProperty(b,"toString",{value:function(){return"."+o}}),b.withComponent=function(f,g){return e(f,Ue({},r,g,{shouldForwardProp:Ct(b,g,!0)})).apply(void 0,h)},b}},Yn=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],p=Un.bind();Yn.forEach(function(e){p[e]=p(e)});const K=p.p`
  font-family: inherit;
  font-size: 1.5rem;
  margin: 10px;
  color: rgb(var(--color-coral));
  white-space: pre-line;
`,Gn=p.p`
  font-size: 1rem;
  margin: 10px;
  white-space: pre-line;
`,Xe=p.p`
  font-family: inherit;
  line-height: 1;
  margin: 0;
  color: rgb(var(--color-peach));
  white-space: pre-line;
`,qn=p.p`
  line-height: 2.2rem;
  white-space: pre-line;
`,Ze=p.p`
  font-weight: 200;
  text-align: ${e=>e.textAlign?e.textAlign:"start"};
  white-space: pre-line;
`,q=p.section`
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
`,Zn={title:`Sakyawira 💍 Debbie
We are celebrating our marriage!`,message:`To our dear ones who have always warmed us with their love.
We invite you to share the precious moment of our long awaited wedding celebration.

You'll find all the details about when and where below. And please understand that this inivitaion is for you only. If your partner is invited, they will get a separate invitation.

We look forward to celebrating with you!`,host:{groom:{name:"Sakyawira Ruslim",relation:"",parents:[]},bride:{name:"Debbie Hartono",relation:"",parents:[]},groomFather:{name:"Djajadi Ruslim & Silvi Oktavia Wijaya",relation:"Son of",parents:[]},brideFather:{name:"Aris Budiman Hartono & Karuniawati Tjahjadi",relation:"Daughter of ",parents:[]}},eventDetail:`February 28, 2026 (Saturday) 10:00
Duke & Duchess`},Kn=[{host:"Bride's Bank Account",accountInfo:[{name:"Debbie Fiona",relation:"",bank:"Blu/ BCA Digital ",account:"005734429248",kakaopayAccount:"",tossAccount:""}]}],Jn={address1:"Duke & Duchess",address2:"Jl. Achmad Adnawijaya No.132, Tegal Gundil, Kec. Bogor Utara, Kota Bogor, Jawa Barat 16152, Indonesia",googleMap:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7926.966471849799!2d106.8161017!3d-6.5866957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5e7ff9b0813%3A0x2861e1a0fa389449!2sDuke%20and%20Duchess!5e0!3m2!1sen!2snz!4v1746278676549!5m2!1sen!2snz",lat:37.54222,lon:126.952708},Qn=[{title:"📅 Time",desc:"February 28, 2026 (Saturday) 10:00 am"},{title:"📍 Place",desc:"Duke & Duchess, Jl. Achmad Adnawijaya No.132, Tegal Gundil, Kec. Bogor Utara, Kota Bogor, Jawa Barat 16152, Indonesia"}],ei=["❤️","💛","💌","🥺","🥳","👰🏻‍","🤵🏻‍♂️","💝","✨","💍","💒","💕","😍","🔔","💘"],ti=[{title:"Burgundy Palette",colors:["#800020","#65081F","#4C3938","#C73A52","#58181F","#C20E35","#A52A2A","#6C403E","#6D213C","#5B4148","#E52B50","#9F1D35","#650015","#C41E3A","#451425","#D2042D","#510400"]},{title:"Peach Palette",colors:["#FFD8B1","#FF9A8A","#FBD5AB","#FF775E","#FAD0C1","#EFA498","#EFA59A","#FCB6A4","#F4A384","#EFA59A","#FDE0B4","#E6CDC5","#F97272","#F9CDC4","#FFA07A"]}],ne={greeting:Zn,hostInfo:Kn,mapInfo:Jn,locationInfo:Qn,emojis:ei,dressCodes:ti},ri=e=>m.createElement("svg",Q({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 -960 960 960",width:24},e),m.createElement("path",{d:"M440-501Zm0 381L313-234q-72-65-123.5-116t-85-96q-33.5-45-49-87T40-621q0-94 63-156.5T260-840q52 0 99 22t81 62q34-40 81-62t99-22q81 0 136 45.5T831-680h-85q-18-40-53-60t-73-20q-51 0-88 27.5T463-660h-46q-31-45-70.5-72.5T260-760q-57 0-98.5 39.5T120-621q0 33 14 67t50 78.5q36 44.5 98 104T440-228q26-23 61-53t56-50l9 9 19.5 19.5L605-283l9 9q-22 20-56 49.5T498-172l-58 52Zm280-160v-120H600v-80h120v-120h80v120h120v80H800v120h-80Z"})),ni=e=>m.createElement("svg",Q({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 -960 960 960",width:24},e),m.createElement("path",{d:"M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"})),At=p.button`
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
`.withComponent("a"),ii=({isVisible:e})=>{const{emojis:t}=ne,r=()=>{i.addConfetti({emojis:t})},i=new Sr;return A(oi,{isVisible:e,children:[c(At,{onClick:r,children:c(ri,{className:"floating-icon"})}),A(At,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:[c(ni,{className:"floating-icon"}),"Scroll Up"]})]})},ai=nr`
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
`,si="/wedding-invitation/assets/images/01-15be4fbb.jpg",ci="/wedding-invitation/assets/images/02-d5068223.jpg",li="/wedding-invitation/assets/images/03-2fa304fa.jpg",di="/wedding-invitation/assets/images/04-1b00c50a.jpg",ir="/wedding-invitation/assets/images/05-4307a478.jpg",ui="/wedding-invitation/assets/images/06-10e36295.jpg",fi="/wedding-invitation/assets/images/07-c0b8fca0.jpg",hi="/wedding-invitation/assets/images/08-17704c28.jpg",pi="/wedding-invitation/assets/images/09-840d74df.jpg",mi="/wedding-invitation/assets/images/10-563453ae.jpg",gi="/wedding-invitation/assets/images/11-c97ae3e8.jpg",bi="/wedding-invitation/assets/images/12-3be7f6a8.jpg",j=[{alt:"image01",source:si,width:640,height:960},{alt:"image02",source:ci,width:640,height:960},{alt:"image03",source:li,width:640,height:960},{alt:"image04",source:di,width:640,height:960},{alt:"image05",source:ir,width:640,height:960},{alt:"image06",source:ui,width:640,height:960},{alt:"image07",source:fi,width:640,height:960},{alt:"image08",source:hi,width:640,height:960},{alt:"image09",source:pi,width:640,height:960},{alt:"image10",source:mi,width:640,height:960},{alt:"image11",source:gi,width:640,height:960},{alt:"image12",source:bi,width:640,height:960}],vi=()=>{const e={cursor:"pointer",objectFit:"contain",width:"100px",height:"150px"},r=/iPad|iPhone|iPod/.test(navigator.userAgent)?j.slice(0,8):j;return c(Cr,{children:c("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 0fr)",gridGap:2},children:r.map((i,n)=>c(Er,{cropped:!0,original:i.source,thumbnail:i.source,width:i.width,height:i.height,children:({ref:a,open:o})=>c("img",{style:e,alt:i.alt,src:i.source,ref:a,onClick:o,loading:"lazy",decoding:"async"})},n))})})},yi=()=>{const[e,t]=m.useState(!1);return A(wi,{children:[A(xi,{isMoreView:e,children:[!e&&c(Si,{}),c(vi,{})]}),!e&&c(ki,{onClick:()=>{t(!e)},children:"Expand"})]})},wi=p.div`
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
`;function Pi(){return A(ct,{children:[c(Ci,{}),c(Ai,{})]})}class Ii{constructor(){T(this,"formUrl");T(this,"nameFieldId");T(this,"messageFieldId");this.formUrl="https://docs.google.com/forms/d/e/1FAIpQLSchKDsv33J8uYdJ6DPpO56ZNmYgzAm3_vFudhzXAz3vE-tvhA/formResponse",this.nameFieldId="1920355118",this.messageFieldId="19176333"}appendEntry(t){return de(this,null,function*(){try{console.log("Attempting to submit to Google Form:",t);const r=new FormData;r.append(`entry.${this.nameFieldId}`,t.name),r.append(`entry.${this.messageFieldId}`,t.message);const i=yield fetch(this.formUrl,{method:"POST",body:r,mode:"no-cors"});return console.log("Form submission response status:",i.status),!0}catch(r){return console.error("Error submitting to Google Form:",r),!1}})}getEntries(){return de(this,null,function*(){try{const t={}.VITE_GOOGLE_SHEET_ID||"";if(!t)return console.warn("No spreadsheet ID configured for reading entries"),[];const r=`https://docs.google.com/spreadsheets/d/${t}/export?format=csv&gid=0`,i=yield fetch(r);if(!i.ok)throw new Error(`HTTP error! status: ${i.status}`);return(yield i.text()).split(`
`).slice(1).filter(s=>s.trim()).map(s=>{const[l,d,u]=s.split(",").map(h=>h.replace(/"/g,"").trim());return{name:d||"",message:u||"",timestamp:l||""}})}catch(t){return console.error("Error fetching from Google Sheets:",t),[]}})}}const Mi=new Ii,Oi=()=>{const[e,t]=m.useState(""),[r,i]=m.useState(""),[n,a]=m.useState(!1);return A(Ti,{onSubmit:s=>de(ur,null,function*(){if(s.preventDefault(),!e.trim()||!r.trim()){alert("Please fill in your name and message. 😢");return}if(e.length>50){alert("Name must be less than 50 characters. 😅");return}if(r.length>500){alert("Message must be less than 500 characters. 😅");return}a(!0);try{(yield Mi.appendEntry({name:e.trim(),message:r.trim(),timestamp:new Date().toISOString()}))?(t(""),i(""),alert("Thank you for your confirmation! 💝")):alert("Sorry, there was an error submitting your message. Please try again. 😢")}catch(l){console.error("Error submitting message:",l),alert("Sorry, there was an error submitting your message. Please try again. 😢")}finally{a(!1)}}),children:[c(_i,{placeholder:"Name",type:"text",value:e,onChange:s=>t(s.target.value)}),c($i,{placeholder:"Are you coming? (Yes/No)",value:r,onChange:s=>i(s.target.value)}),c(Ni,{type:"submit",disabled:n,children:n?"Submitting...":"Submit"})]})},Ti=p.form`
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
`,Ni=p.button`
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
`,Ri=()=>A(Fi,{children:[A(Gn,{children:["Please confirm whether you will attend our wedding!",c("br",{}),"We would love to know before January 28, 2026. 💌"]}),c(Oi,{})]}),Fi=p.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 50px;
`,Di=()=>{const{groom:e,bride:t,groomFather:r,brideFather:i}=ne.greeting.host;return c(ct,{children:A(Li,{children:[c("h2",{children:"Groom"}),c(fe,{person:e}),c(fe,{person:r}),c("span",{role:"img","aria-label":"pink heart",children:"💗"}),c("h2",{children:"Bride"}),c(fe,{person:t}),c(fe,{person:i})]})})},fe=({person:e})=>A(Wi,{children:[e.parents&&c(ct,{children:e.parents.map((t,r)=>A(_t.Fragment,{children:[r>0&&" · ",t.name]},r))}),c(ji,{children:e.relation}),c(zi,{children:e.name})]}),zi=p.span`
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
`,Wi=p.div`
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
`,ji=p.div`
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
`,Bi=()=>{const{greeting:e,mapInfo:t,locationInfo:r}=ne;return m.useEffect(()=>{const i=new Date("2025-08-16T15:30:00"),n=new Date(i.getTime()+2*60*60*1e3),a=i.toISOString().replace(/[-:]/g,"").split(".")[0]+"Z",o=n.toISOString().replace(/[-:]/g,"").split(".")[0]+"Z",s=t.address1||r[1].desc||"",l=`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Sakyawira & Debbie Wedding")}&dates=${a}/${o}&details=${encodeURIComponent(e.message)}&location=${encodeURIComponent(s)}`,d=document.getElementById("google-calendar-link");d&&d.setAttribute("href",l)},[]),A(Vi,{children:[c(Hi,{children:e.message}),c(Di,{})]})},Vi=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 0 16px;
  max-width: 100%;
`,Hi=p(qn)`
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
`,Ui=({src:e})=>c(Yi,{src:e,allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"}),Yi=p.iframe`
  width: 100%;
  max-width: 400px;
  height: 250px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(var(--shadow-rgb), 0.12);
`,Gi=p.button`
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
`.withComponent("a"),qi=()=>{const{mapInfo:e,locationInfo:t}=ne;return A(Xi,{children:[A(Pt,{children:[c(Xe,{children:t[1].title}),c(Ze,{children:t[1].desc}),c(Ui,{src:e.googleMap})]}),A(Pt,{children:[c(Xe,{children:t[0].title}),c(Ze,{children:t[0].desc}),c(Gi,{id:"google-calendar-event-link",target:"_blank",href:"https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NW43N25rNXE1NGExZDBlYzRodHBsdnNxYWggc2FreWF3aXJhQG0&tmsrc=sakyawira%40gmail.com",rel:"noreferrer",children:"Add to Calendar"})]})]})},Xi=p.div`
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
`,Zi=()=>{const{greeting:e}=ne,t=typeof window!="undefined"?new URLSearchParams(window.location.search):null;let r=t?t.get("name"):null;if(r){try{r=decodeURIComponent(r)}catch(n){}r=r.trim().slice(0,50),r=r.replace(/([a-z])([A-Z])/g,"$1 $2")}const i=r?`Hi, ${r}! 💍 Sakya & Debbie got married - come celebrate! 🎉✨`:e.title;return A("div",{children:[c(Ki,{src:ir}),c(Ji,{children:i})]})},Ki=p.img`
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
`;var Fe={},or={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function r(){for(var a="",o=0;o<arguments.length;o++){var s=arguments[o];s&&(a=n(a,i(s)))}return a}function i(a){if(typeof a=="string"||typeof a=="number")return a;if(typeof a!="object")return"";if(Array.isArray(a))return r.apply(null,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var o="";for(var s in a)t.call(a,s)&&a[s]&&(o=n(o,s));return o}function n(a,o){return o?a?a+" "+o:a+o:a}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(or);var sr=or.exports;Fe.__esModule=!0;Fe.default=void 0;var Qi=lt(m),X=lt($t),ea=lt(sr);function lt(e){return e&&e.__esModule?e:{default:e}}const cr=({animate:e=!0,className:t="",layout:r="2-columns",lineColor:i="#FFF",children:n})=>(typeof window=="object"&&document.documentElement.style.setProperty("--line-color",i),Qi.default.createElement("div",{className:(0,ea.default)(t,"vertical-timeline",{"vertical-timeline--animate":e,"vertical-timeline--two-columns":r==="2-columns","vertical-timeline--one-column-left":r==="1-column"||r==="1-column-left","vertical-timeline--one-column-right":r==="1-column-right"})},n));cr.propTypes={children:X.default.oneOfType([X.default.arrayOf(X.default.node),X.default.node]).isRequired,className:X.default.string,animate:X.default.bool,layout:X.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:X.default.string};var ta=cr;Fe.default=ta;var De={};function Ke(){return Ke=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},Ke.apply(this,arguments)}function ra(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Je(e,t)}function Je(e,t){return Je=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},Je(e,t)}function na(e,t){if(e==null)return{};var r={},i=Object.keys(e),n,a;for(a=0;a<i.length;a++)n=i[a],!(t.indexOf(n)>=0)&&(r[n]=e[n]);return r}var Qe=new Map,he=new WeakMap,It=0,lr=void 0;function ia(e){lr=e}function aa(e){return e?(he.has(e)||(It+=1,he.set(e,It.toString())),he.get(e)):"0"}function oa(e){return Object.keys(e).sort().filter(function(t){return e[t]!==void 0}).map(function(t){return t+"_"+(t==="root"?aa(e.root):e[t])}).toString()}function sa(e){var t=oa(e),r=Qe.get(t);if(!r){var i=new Map,n,a=new IntersectionObserver(function(o){o.forEach(function(s){var l,d=s.isIntersecting&&n.some(function(u){return s.intersectionRatio>=u});e.trackVisibility&&typeof s.isVisible=="undefined"&&(s.isVisible=d),(l=i.get(s.target))==null||l.forEach(function(u){u(d,s)})})},e);n=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:a,elements:i},Qe.set(t,r)}return r}function dt(e,t,r,i){if(r===void 0&&(r={}),i===void 0&&(i=lr),typeof window.IntersectionObserver=="undefined"&&i!==void 0){var n=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),function(){}}var a=sa(r),o=a.id,s=a.observer,l=a.elements,d=l.get(e)||[];return l.has(e)||l.set(e,d),d.push(t),s.observe(e),function(){d.splice(d.indexOf(t),1),d.length===0&&(l.delete(e),s.unobserve(e)),l.size===0&&(s.disconnect(),Qe.delete(o))}}var ca=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function Mt(e){return typeof e.children!="function"}var ye=function(e){ra(t,e);function t(i){var n;return n=e.call(this,i)||this,n.node=null,n._unobserveCb=null,n.handleNode=function(a){n.node&&(n.unobserve(),!a&&!n.props.triggerOnce&&!n.props.skip&&n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=a||null,n.observeNode()},n.handleChange=function(a,o){a&&n.props.triggerOnce&&n.unobserve(),Mt(n.props)||n.setState({inView:a,entry:o}),n.props.onChange&&n.props.onChange(a,o)},n.state={inView:!!i.initialInView,entry:void 0},n}var r=t.prototype;return r.componentDidUpdate=function(n){(n.rootMargin!==this.props.rootMargin||n.root!==this.props.root||n.threshold!==this.props.threshold||n.skip!==this.props.skip||n.trackVisibility!==this.props.trackVisibility||n.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},r.componentWillUnmount=function(){this.unobserve(),this.node=null},r.observeNode=function(){if(!(!this.node||this.props.skip)){var n=this.props,a=n.threshold,o=n.root,s=n.rootMargin,l=n.trackVisibility,d=n.delay,u=n.fallbackInView;this._unobserveCb=dt(this.node,this.handleChange,{threshold:a,root:o,rootMargin:s,trackVisibility:l,delay:d},u)}},r.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},r.render=function(){if(!Mt(this.props)){var n=this.state,a=n.inView,o=n.entry;return this.props.children({inView:a,entry:o,ref:this.handleNode})}var s=this.props,l=s.children,d=s.as,u=na(s,ca);return m.createElement(d||"div",Ke({ref:this.handleNode},u),l)},t}(m.Component);ye.displayName="InView";ye.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};function la(e){var t=e===void 0?{}:e,r=t.threshold,i=t.delay,n=t.trackVisibility,a=t.rootMargin,o=t.root,s=t.triggerOnce,l=t.skip,d=t.initialInView,u=t.fallbackInView,h=m.useRef(),v=m.useState({inView:!!d}),C=v[0],b=v[1],f=m.useCallback(function(y){h.current!==void 0&&(h.current(),h.current=void 0),!l&&y&&(h.current=dt(y,function(x,w){b({inView:x,entry:w}),w.isIntersecting&&s&&h.current&&(h.current(),h.current=void 0)},{root:o,rootMargin:a,threshold:r,trackVisibility:n,delay:i},u))},[Array.isArray(r)?r.toString():r,o,a,s,l,n,u,i]);m.useEffect(function(){!h.current&&C.entry&&!s&&!l&&b({inView:!!d})});var g=[f,C.inView,C.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}const da=Object.freeze(Object.defineProperty({__proto__:null,InView:ye,default:ye,defaultFallbackInView:ia,observe:dt,useInView:la},Symbol.toStringTag,{value:"Module"})),ua=xr(da);De.__esModule=!0;De.default=void 0;var Z=ut(m),I=ut($t),pe=ut(sr),fa=ua;function ut(e){return e&&e.__esModule?e:{default:e}}const dr=({children:e="",className:t="",contentArrowStyle:r=null,contentStyle:i=null,date:n="",dateClassName:a="",icon:o=null,iconClassName:s="",iconOnClick:l=null,onTimelineElementClick:d=null,iconStyle:u=null,id:h="",position:v="",style:C=null,textClassName:b="",intersectionObserverProps:f={rootMargin:"0px 0px -40px 0px",triggerOnce:!0},visible:g=!1,shadowSize:y="small"})=>Z.default.createElement(fa.InView,f,({inView:x,ref:w})=>Z.default.createElement("div",{ref:w,id:h,className:(0,pe.default)(t,"vertical-timeline-element",{"vertical-timeline-element--left":v==="left","vertical-timeline-element--right":v==="right","vertical-timeline-element--no-children":e===""}),style:C},Z.default.createElement(Z.default.Fragment,null,Z.default.createElement("span",{style:u,onClick:l,className:(0,pe.default)(s,"vertical-timeline-element-icon",`shadow-size-${y}`,{"bounce-in":x||g,"is-hidden":!(x||g)})},o),Z.default.createElement("div",{style:i,onClick:d,className:(0,pe.default)(b,"vertical-timeline-element-content",{"bounce-in":x||g,"is-hidden":!(x||g)})},Z.default.createElement("div",{style:r,className:"vertical-timeline-element-content-arrow"}),e,Z.default.createElement("span",{className:(0,pe.default)(a,"vertical-timeline-element-date")},n)))));dr.propTypes={children:I.default.oneOfType([I.default.arrayOf(I.default.node),I.default.node]),className:I.default.string,contentArrowStyle:I.default.shape({}),contentStyle:I.default.shape({}),date:I.default.node,dateClassName:I.default.string,icon:I.default.element,iconClassName:I.default.string,iconStyle:I.default.shape({}),iconOnClick:I.default.func,onTimelineElementClick:I.default.func,id:I.default.string,position:I.default.string,style:I.default.shape({}),textClassName:I.default.string,visible:I.default.bool,shadowSize:I.default.string,intersectionObserverProps:I.default.shape({root:I.default.object,rootMargin:I.default.string,threshold:I.default.number,triggerOnce:I.default.bool})};var ha=dr;De.default=ha;var Ot={VerticalTimeline:Fe.default,VerticalTimelineElement:De.default};const Tt=[{date:"2015",title:"Strangers to Best Friends",description:"A school project brought us together for a couple photo. Fate?",image:j[0].source},{date:"2017",title:"Winning a Short Movie Competition",description:"It was a romance movie, but we were just friends. Or so we thought.",image:j[1].source},{date:"2019",title:"Annual Catchup",description:"The ocean kept us apart, but we always found time once a year.",image:j[2].source},{date:"2022",title:"Officially more than Friends",description:"Debbie’s birthday. This time, we’re not just friends.",image:j[3].source},{date:"2023",title:"First Year Together",description:"Long distance, good food, and a lot of calls.",image:j[5].source},{date:"Q2 2024",title:"Engaged!",description:"Somewhere in Southeast Asia, she said yes.",image:j[6].source},{date:"Q4 2024",title:"Holiday in Bali",description:"Last deep breath before the chaos of immigration and weddding prep.",image:j[7].source},{date:"July 2025",title:"Deebie moved to Auckland, New Zealand",description:"The adventure begins. New city, new job, new life together.",image:j[8].source},{date:"August 2025",title:"Officially married!",description:"We registered our marriage with the New Zealand government!",image:j[9].source}],pa=({isCollapsed:e=!1,onExpand:t})=>A(ma,{style:{position:"relative",width:"100%",maxWidth:500},children:[c(Ot.VerticalTimeline,{lineColor:"rgba(var(--color-pink), 0.95)",children:(e?Tt.slice(0,1):Tt).map((i,n)=>A(Ot.VerticalTimelineElement,{date:i.date,dateClassName:"timeline-date-centered",iconStyle:{background:"rgba(var(--color-pink), 0.95)",color:"rgb(var(--color-white))",boxShadow:"0 0 0 4px rgba(var(--color-pink), 0.9)"},contentStyle:{background:"transparent",color:"rgb(var(--muted-text-rgb))",border:"1px solid rgba(var(--color-pink), 0.9)"},contentArrowStyle:{borderRight:"7px solid rgba(var(--color-pink), 0.9)"},children:[c(Xe,{children:i.title}),c(Ze,{children:i.description}),c(va,{src:i.image,alt:i.title,shapeIndex:n}),e&&n===1-1&&c(ya,{onClick:t,children:"Show Full Timeline"})]},n))}),e&&c(wa,{})]}),ma=p.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  background: rgba(var(--surface-rgb, 255, 255, 255), var(--surface-opacity));
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(var(--color-pink), 0.08);
  padding: 20px 0;
  position: relative;
`,ga=e=>()=>{let t=e+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296},je=e=>{const t=[];for(let r=0;r<e.length;r++){const i=e[r],n=e[(r+1)%e.length];t.push([i[0]*.75+n[0]*.25,i[1]*.75+n[1]*.25]),t.push([i[0]*.25+n[0]*.75,i[1]*.25+n[1]*.75])}return t},ba=(e=0,t=24)=>{const r=ga(e+1),i=52,n=78,a=50+(r()-.5)*6,o=50+(r()-.5)*6;let l=Array.from({length:t},()=>i+r()*(n-i)).map((u,h)=>{const v=h/t*Math.PI*2;return[a+Math.cos(v)*u,o+Math.sin(v)*u]});if(l=je(l),l=je(l),l=je(l),r()>.4){const u=Math.floor(r()*3)+1;for(let h=0;h<u;h++){const v=Math.floor(r()*l.length);l[v]=[l[v][0]+(r()-.5)*12,l[v][1]+(r()-.5)*12]}}return`polygon(${l.map(([u,h])=>[Math.max(1,Math.min(99,Math.round(u))),Math.max(1,Math.min(99,Math.round(h)))]).map(([u,h])=>`${u}% ${h}%`).join(", ")})`},va=p.img`
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
`,Pa=e=>m.createElement("svg",Q({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 -960 960 960",width:24},e),m.createElement("path",{d:"M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"})),Ia=({title:e,children:t})=>{const[r,i]=m.useState(!1);return A(Ma,{children:[A(Oa,{isActive:r,onClick:()=>{i(!r)},children:[c("p",{children:e}),c("span",{children:c(_a,{})})]}),r&&c(Ta,{children:t})]})},Ma=p.div`
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
`,$a=()=>{const{dressCodes:e}=ne;return c(Na,{children:e==null?void 0:e.map(t=>c(Ia,{title:t.title,children:c(xa,{title:t.title,colors:t.colors})},t.title))})},Na=p.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  padding: 20px;
`;function Ra(){const[e,t]=m.useState({}),[r,i]=m.useState(!1),n=m.useRef(null),a=m.useRef(null),o=m.useRef(null),s=m.useRef(null),l=m.useRef(null),d=m.useRef(null),u=m.useRef(null),h=m.useMemo(()=>({main:n,invitation:a,gallery:o,liveStream:s,giftInfo:l,directions:d,messages:u}),[]);return m.useEffect(()=>{const v=/iPad|iPhone|iPod/.test(navigator.userAgent),C=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),b=new IntersectionObserver(f=>{f.forEach(g=>{g.isIntersecting&&t(y=>pt(Q({},y),{[g.target.id]:!0}))})},{threshold:v?.05:C?.08:.1,rootMargin:v?"50px":"20px"});return Object.values(h).forEach(f=>{f.current&&b.observe(f.current)}),()=>{Object.values(h).forEach(f=>{f.current&&b.unobserve(f.current)})}},[h]),m.useEffect(()=>{const v=/iPad|iPhone|iPod/.test(navigator.userAgent),C=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);kr.init({duration:v?600:C?800:1e3,once:!0,disable:v&&window.innerWidth<768,throttleDelay:v?100:50})},[]),m.useEffect(()=>{if(/iPad|iPhone|iPod/.test(navigator.userAgent))return;const C=setTimeout(()=>{const f={density:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?8:15,sizeRange:[1,3],speedRange:[.3,.8]};try{return Dn(f)}catch(g){console.warn("Failed to start falling petals:",g);return}},100);return()=>{clearTimeout(C)}},[]),A(Xn,{children:[c(Pi,{}),c(q,{id:"main",ref:n,"data-aos":"fade-up",children:c(Zi,{})}),c("hr",{className:"separator"}),A(q,{id:"invitation",ref:a,"data-aos":"fade-up",children:[c(K,{children:"Invitation"}),c(Bi,{})]}),c("hr",{className:"separator"}),A(q,{id:"directions",ref:d,"data-aos":"fade-up",children:[c(K,{children:"Place & Time"}),c(qi,{})]}),c("hr",{className:"separator"}),A(q,{id:"giftInfo",ref:l,"data-aos":"fade-up",children:[c(K,{children:"Dress Code"}),c(Be,{style:{textAlign:"center",padding:"1rem",maxWidth:"100%",overflow:"hidden"},children:c("p",{style:{fontSize:"clamp(0.8rem, 2.5vw, 1rem)",lineHeight:"1.4",maxWidth:"95%",margin:"0 auto",wordBreak:"break-word",hyphens:"auto",fontStyle:"italic"},children:"Here are some outfit color suggestions to help you shine on our special day ✨"})}),c($a,{})]}),c("hr",{className:"separator"}),A(q,{id:"timeline","data-aos":"fade-up",children:[c(K,{children:"Our Story Timeline"}),c(pa,{isCollapsed:!r,onExpand:()=>i(!0)})]}),c("hr",{className:"separator"}),A(q,{id:"messages",ref:u,"data-aos":"fade-up",children:[c(K,{children:"Attendance Confirmation"}),c(Ri,{})]}),c("hr",{className:"separator"}),A(q,{id:"gallery",ref:o,"data-aos":"fade-up",children:[c(K,{children:"Gallery"}),c(yi,{})]}),c("hr",{className:"separator",style:{marginBottom:"10px"}}),c(q,{id:"thankyou","data-aos":"fade-up",children:A(Be,{style:{textAlign:"center",padding:"0.25rem 1rem 1.5rem 1rem",maxWidth:"100%",overflow:"hidden"},children:[c(K,{style:{marginBottom:"1.5rem",fontSize:"clamp(1.5rem, 4vw, 2rem)",wordBreak:"break-word"},children:"Thank You!"}),c("p",{style:{fontSize:"clamp(0.9rem, 3vw, 1.1rem)",lineHeight:"1.6",maxWidth:"90%",margin:"0 auto",marginBottom:"1rem",wordBreak:"break-word",hyphens:"auto"},children:"Thank you for reading all the way here! Your presence in our lives means the world to us."}),c("p",{style:{fontSize:"clamp(1rem, 3.5vw, 1.2rem)",fontWeight:"bold",wordBreak:"break-word",maxWidth:"90%",margin:"0 auto"},children:"We hope to see you soon! 💕"}),c(Be,{style:{textAlign:"center",padding:"0.25rem 1rem 1.5rem 1rem",maxWidth:"100%",overflow:"hidden"},children:c("img",{src:zn,alt:"Whale and Seal",style:{marginTop:"1.5rem",maxWidth:"220px",width:"60%",height:"auto",display:"block",marginLeft:"auto",marginRight:"auto",opacity:.95}})})]})}),c(ii,{isVisible:Object.values(e).some(Boolean)})]})}const Be=p.div`
  color: rgb(var(--color-coral));
  font-family: inherit;
`;Ge.createRoot(document.getElementById("root")).render(c(_t.StrictMode,{children:c(Ra,{})}))});export default Fa();
