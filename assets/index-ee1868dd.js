var mr=Object.defineProperty,gr=Object.defineProperties;var br=Object.getOwnPropertyDescriptors;var pt=Object.getOwnPropertySymbols;var vr=Object.prototype.hasOwnProperty,yr=Object.prototype.propertyIsEnumerable;var De=(e,t,r)=>t in e?mr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,X=(e,t)=>{for(var r in t||(t={}))vr.call(t,r)&&De(e,r,t[r]);if(pt)for(var r of pt(t))yr.call(t,r)&&De(e,r,t[r]);return e},mt=(e,t)=>gr(e,br(t));var wr=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var O=(e,t,r)=>(De(e,typeof t!="symbol"?t+"":t,r),r);var de=(e,t,r)=>new Promise((i,n)=>{var a=l=>{try{s(r.next(l))}catch(d){n(d)}},o=l=>{try{s(r.throw(l))}catch(d){n(d)}},s=l=>l.done?i(l.value):Promise.resolve(l.value).then(a,o);s((r=r.apply(e,t)).next())});import{r as m,b as gt,a as xr,R as $t,d as Sr}from"./vendor-ef013e4e.js";import{J as kr,A as Er}from"./animations-d97477bb.js";import{I as Cr,G as Tr,p as Rt}from"./gallery-1bdcb658.js";var Ya=wr(fr=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();var Nt={exports:{}},xe={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ir=m,Mr=Symbol.for("react.element"),Ar=Symbol.for("react.fragment"),Pr=Object.prototype.hasOwnProperty,Or=Ir.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_r={key:!0,ref:!0,__self:!0,__source:!0};function Lt(e,t,r){var i,n={},a=null,o=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(i in t)Pr.call(t,i)&&!_r.hasOwnProperty(i)&&(n[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)n[i]===void 0&&(n[i]=t[i]);return{$$typeof:Mr,type:e,key:a,ref:o,props:n,_owner:Or.current}}xe.Fragment=Ar;xe.jsx=Lt;xe.jsxs=Lt;Nt.exports=xe;var ae=Nt.exports;function $r(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Rr(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Nr=function(){function e(r){var i=this;this._insertTag=function(n){var a;i.tags.length===0?i.insertionPoint?a=i.insertionPoint.nextSibling:i.prepend?a=i.container.firstChild:a=i.before:a=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(n,a),i.tags.push(n)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(i){i.forEach(this._insertTag)},t.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Rr(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var a=$r(n);try{a.insertRule(i,a.cssRules.length)}catch(o){}}else n.appendChild(document.createTextNode(i));this.ctr++},t.flush=function(){this.tags.forEach(function(i){return i.parentNode&&i.parentNode.removeChild(i)}),this.tags=[],this.ctr=0},e}(),N="-ms-",ve="-moz-",E="-webkit-",zt="comm",tt="rule",rt="decl",Lr="@import",Dt="@keyframes",zr="@layer",Dr=Math.abs,Se=String.fromCharCode,Fr=Object.assign;function jr(e,t){return R(e,0)^45?(((t<<2^R(e,0))<<2^R(e,1))<<2^R(e,2))<<2^R(e,3):0}function Ft(e){return e.trim()}function Wr(e,t){return(e=t.exec(e))?e[0]:e}function C(e,t,r){return e.replace(t,r)}function Be(e,t){return e.indexOf(t)}function R(e,t){return e.charCodeAt(t)|0}function oe(e,t,r){return e.slice(t,r)}function q(e){return e.length}function nt(e){return e.length}function ue(e,t){return t.push(e),e}function qr(e,t){return e.map(t).join("")}var ke=1,te=1,jt=0,D=0,P=0,re="";function Ee(e,t,r,i,n,a,o){return{value:e,root:t,parent:r,type:i,props:n,children:a,line:ke,column:te,length:o,return:""}}function ie(e,t){return Fr(Ee("",null,null,"",null,null,0),e,{length:-e.length},t)}function Vr(){return P}function Br(){return P=D>0?R(re,--D):0,te--,P===10&&(te=1,ke--),P}function F(){return P=D<jt?R(re,D++):0,te++,P===10&&(te=1,ke++),P}function B(){return R(re,D)}function me(){return D}function le(e,t){return oe(re,e,t)}function se(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Wt(e){return ke=te=1,jt=q(re=e),D=0,[]}function qt(e){return re="",e}function ge(e){return Ft(le(D-1,Ue(e===91?e+2:e===40?e+1:e)))}function Ur(e){for(;(P=B())&&P<33;)F();return se(e)>2||se(P)>3?"":" "}function Gr(e,t){for(;--t&&F()&&!(P<48||P>102||P>57&&P<65||P>70&&P<97););return le(e,me()+(t<6&&B()==32&&F()==32))}function Ue(e){for(;F();)switch(P){case e:return D;case 34:case 39:e!==34&&e!==39&&Ue(P);break;case 40:e===41&&Ue(e);break;case 92:F();break}return D}function Hr(e,t){for(;F()&&e+P!==47+10;)if(e+P===42+42&&B()===47)break;return"/*"+le(t,D-1)+"*"+Se(e===47?e:F())}function Yr(e){for(;!se(B());)F();return le(e,D)}function Xr(e){return qt(be("",null,null,null,[""],e=Wt(e),0,[0],e))}function be(e,t,r,i,n,a,o,s,l){for(var d=0,u=0,p=o,y=0,k=0,b=0,f=1,g=1,w=1,v=0,S="",W=n,L=a,$=i,T=S;g;)switch(b=v,v=F()){case 40:if(b!=108&&R(T,p-1)==58){Be(T+=C(ge(v),"&","&\f"),"&\f")!=-1&&(w=-1);break}case 34:case 39:case 91:T+=ge(v);break;case 9:case 10:case 13:case 32:T+=Ur(b);break;case 92:T+=Gr(me()-1,7);continue;case 47:switch(B()){case 42:case 47:ue(Zr(Hr(F(),me()),t,r),l);break;default:T+="/"}break;case 123*f:s[d++]=q(T)*w;case 125*f:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:w==-1&&(T=C(T,/\f/g,"")),k>0&&q(T)-p&&ue(k>32?vt(T+";",i,r,p-1):vt(C(T," ","")+";",i,r,p-2),l);break;case 59:T+=";";default:if(ue($=bt(T,t,r,d,u,n,s,S,W=[],L=[],p),a),v===123)if(u===0)be(T,t,$,$,W,a,p,s,L);else switch(y===99&&R(T,3)===110?100:y){case 100:case 108:case 109:case 115:be(e,$,$,i&&ue(bt(e,$,$,0,0,n,s,S,n,W=[],p),L),n,L,p,s,i?W:L);break;default:be(T,$,$,$,[""],L,0,s,L)}}d=u=k=0,f=w=1,S=T="",p=o;break;case 58:p=1+q(T),k=b;default:if(f<1){if(v==123)--f;else if(v==125&&f++==0&&Br()==125)continue}switch(T+=Se(v),v*f){case 38:w=u>0?1:(T+="\f",-1);break;case 44:s[d++]=(q(T)-1)*w,w=1;break;case 64:B()===45&&(T+=ge(F())),y=B(),u=p=q(S=T+=Yr(me())),v++;break;case 45:b===45&&q(T)==2&&(f=0)}}return a}function bt(e,t,r,i,n,a,o,s,l,d,u){for(var p=n-1,y=n===0?a:[""],k=nt(y),b=0,f=0,g=0;b<i;++b)for(var w=0,v=oe(e,p+1,p=Dr(f=o[b])),S=e;w<k;++w)(S=Ft(f>0?y[w]+" "+v:C(v,/&\f/g,y[w])))&&(l[g++]=S);return Ee(e,t,r,n===0?tt:s,l,d,u)}function Zr(e,t,r){return Ee(e,t,r,zt,Se(Vr()),oe(e,2,-2),0)}function vt(e,t,r,i){return Ee(e,t,r,rt,oe(e,0,i),oe(e,i+1,-1),i)}function ee(e,t){for(var r="",i=nt(e),n=0;n<i;n++)r+=t(e[n],n,e,t)||"";return r}function Kr(e,t,r,i){switch(e.type){case zr:if(e.children.length)break;case Lr:case rt:return e.return=e.return||e.value;case zt:return"";case Dt:return e.return=e.value+"{"+ee(e.children,i)+"}";case tt:e.value=e.props.join(",")}return q(r=ee(e.children,i))?e.return=e.value+"{"+r+"}":""}function Jr(e){var t=nt(e);return function(r,i,n,a){for(var o="",s=0;s<t;s++)o+=e[s](r,i,n,a)||"";return o}}function Qr(e){return function(t){t.root||(t=t.return)&&e(t)}}function Vt(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var en=function(t,r,i){for(var n=0,a=0;n=a,a=B(),n===38&&a===12&&(r[i]=1),!se(a);)F();return le(t,D)},tn=function(t,r){var i=-1,n=44;do switch(se(n)){case 0:n===38&&B()===12&&(r[i]=1),t[i]+=en(D-1,r,i);break;case 2:t[i]+=ge(n);break;case 4:if(n===44){t[++i]=B()===58?"&\f":"",r[i]=t[i].length;break}default:t[i]+=Se(n)}while(n=F());return t},rn=function(t,r){return qt(tn(Wt(t),r))},yt=new WeakMap,nn=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var r=t.value,i=t.parent,n=t.column===i.column&&t.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(t.props.length===1&&r.charCodeAt(0)!==58&&!yt.get(i))&&!n){yt.set(t,!0);for(var a=[],o=rn(r,a),s=i.props,l=0,d=0;l<o.length;l++)for(var u=0;u<s.length;u++,d++)t.props[d]=a[l]?o[l].replace(/&\f/g,s[u]):s[u]+" "+o[l]}}},an=function(t){if(t.type==="decl"){var r=t.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(t.return="",t.value="")}};function Bt(e,t){switch(jr(e,t)){case 5103:return E+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return E+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return E+e+ve+e+N+e+e;case 6828:case 4268:return E+e+N+e+e;case 6165:return E+e+N+"flex-"+e+e;case 5187:return E+e+C(e,/(\w+).+(:[^]+)/,E+"box-$1$2"+N+"flex-$1$2")+e;case 5443:return E+e+N+"flex-item-"+C(e,/flex-|-self/,"")+e;case 4675:return E+e+N+"flex-line-pack"+C(e,/align-content|flex-|-self/,"")+e;case 5548:return E+e+N+C(e,"shrink","negative")+e;case 5292:return E+e+N+C(e,"basis","preferred-size")+e;case 6060:return E+"box-"+C(e,"-grow","")+E+e+N+C(e,"grow","positive")+e;case 4554:return E+C(e,/([^-])(transform)/g,"$1"+E+"$2")+e;case 6187:return C(C(C(e,/(zoom-|grab)/,E+"$1"),/(image-set)/,E+"$1"),e,"")+e;case 5495:case 3959:return C(e,/(image-set\([^]*)/,E+"$1$`$1");case 4968:return C(C(e,/(.+:)(flex-)?(.*)/,E+"box-pack:$3"+N+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+E+e+e;case 4095:case 3583:case 4068:case 2532:return C(e,/(.+)-inline(.+)/,E+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(q(e)-1-t>6)switch(R(e,t+1)){case 109:if(R(e,t+4)!==45)break;case 102:return C(e,/(.+:)(.+)-([^]+)/,"$1"+E+"$2-$3$1"+ve+(R(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Be(e,"stretch")?Bt(C(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(R(e,t+1)!==115)break;case 6444:switch(R(e,q(e)-3-(~Be(e,"!important")&&10))){case 107:return C(e,":",":"+E)+e;case 101:return C(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+E+(R(e,14)===45?"inline-":"")+"box$3$1"+E+"$2$3$1"+N+"$2box$3")+e}break;case 5936:switch(R(e,t+11)){case 114:return E+e+N+C(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return E+e+N+C(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return E+e+N+C(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return E+e+N+e+e}return e}var on=function(t,r,i,n){if(t.length>-1&&!t.return)switch(t.type){case rt:t.return=Bt(t.value,t.length);break;case Dt:return ee([ie(t,{value:C(t.value,"@","@"+E)})],n);case tt:if(t.length)return qr(t.props,function(a){switch(Wr(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ee([ie(t,{props:[C(a,/:(read-\w+)/,":"+ve+"$1")]})],n);case"::placeholder":return ee([ie(t,{props:[C(a,/:(plac\w+)/,":"+E+"input-$1")]}),ie(t,{props:[C(a,/:(plac\w+)/,":"+ve+"$1")]}),ie(t,{props:[C(a,/:(plac\w+)/,N+"input-$1")]})],n)}return""})}},sn=[on],cn=function(t){var r=t.key;if(r==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(f){var g=f.getAttribute("data-emotion");g.indexOf(" ")!==-1&&(document.head.appendChild(f),f.setAttribute("data-s",""))})}var n=t.stylisPlugins||sn,a={},o,s=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(f){for(var g=f.getAttribute("data-emotion").split(" "),w=1;w<g.length;w++)a[g[w]]=!0;s.push(f)});var l,d=[nn,an];{var u,p=[Kr,Qr(function(f){u.insert(f)})],y=Jr(d.concat(n,p)),k=function(g){return ee(Xr(g),y)};l=function(g,w,v,S){u=v,k(g?g+"{"+w.styles+"}":w.styles),S&&(b.inserted[w.name]=!0)}}var b={key:r,sheet:new Nr({key:r,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:a,registered:{},insert:l};return b.sheet.hydrate(s),b};function Ge(){return Ge=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},Ge.apply(this,arguments)}var Ut={exports:{}},I={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=typeof Symbol=="function"&&Symbol.for,it=_?Symbol.for("react.element"):60103,at=_?Symbol.for("react.portal"):60106,Ce=_?Symbol.for("react.fragment"):60107,Te=_?Symbol.for("react.strict_mode"):60108,Ie=_?Symbol.for("react.profiler"):60114,Me=_?Symbol.for("react.provider"):60109,Ae=_?Symbol.for("react.context"):60110,ot=_?Symbol.for("react.async_mode"):60111,Pe=_?Symbol.for("react.concurrent_mode"):60111,Oe=_?Symbol.for("react.forward_ref"):60112,_e=_?Symbol.for("react.suspense"):60113,ln=_?Symbol.for("react.suspense_list"):60120,$e=_?Symbol.for("react.memo"):60115,Re=_?Symbol.for("react.lazy"):60116,dn=_?Symbol.for("react.block"):60121,un=_?Symbol.for("react.fundamental"):60117,fn=_?Symbol.for("react.responder"):60118,hn=_?Symbol.for("react.scope"):60119;function j(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case it:switch(e=e.type,e){case ot:case Pe:case Ce:case Ie:case Te:case _e:return e;default:switch(e=e&&e.$$typeof,e){case Ae:case Oe:case Re:case $e:case Me:return e;default:return t}}case at:return t}}}function Gt(e){return j(e)===Pe}I.AsyncMode=ot;I.ConcurrentMode=Pe;I.ContextConsumer=Ae;I.ContextProvider=Me;I.Element=it;I.ForwardRef=Oe;I.Fragment=Ce;I.Lazy=Re;I.Memo=$e;I.Portal=at;I.Profiler=Ie;I.StrictMode=Te;I.Suspense=_e;I.isAsyncMode=function(e){return Gt(e)||j(e)===ot};I.isConcurrentMode=Gt;I.isContextConsumer=function(e){return j(e)===Ae};I.isContextProvider=function(e){return j(e)===Me};I.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===it};I.isForwardRef=function(e){return j(e)===Oe};I.isFragment=function(e){return j(e)===Ce};I.isLazy=function(e){return j(e)===Re};I.isMemo=function(e){return j(e)===$e};I.isPortal=function(e){return j(e)===at};I.isProfiler=function(e){return j(e)===Ie};I.isStrictMode=function(e){return j(e)===Te};I.isSuspense=function(e){return j(e)===_e};I.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ce||e===Pe||e===Ie||e===Te||e===_e||e===ln||typeof e=="object"&&e!==null&&(e.$$typeof===Re||e.$$typeof===$e||e.$$typeof===Me||e.$$typeof===Ae||e.$$typeof===Oe||e.$$typeof===un||e.$$typeof===fn||e.$$typeof===hn||e.$$typeof===dn)};I.typeOf=j;Ut.exports=I;var pn=Ut.exports,Ht=pn,mn={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},gn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Yt={};Yt[Ht.ForwardRef]=mn;Yt[Ht.Memo]=gn;var bn=!0;function Xt(e,t,r){var i="";return r.split(" ").forEach(function(n){e[n]!==void 0?t.push(e[n]+";"):i+=n+" "}),i}var st=function(t,r,i){var n=t.key+"-"+r.name;(i===!1||bn===!1)&&t.registered[n]===void 0&&(t.registered[n]=r.styles)},Zt=function(t,r,i){st(t,r,i);var n=t.key+"-"+r.name;if(t.inserted[r.name]===void 0){var a=r;do t.insert(r===a?"."+n:"",a,t.sheet,!0),a=a.next;while(a!==void 0)}};function vn(e){for(var t=0,r,i=0,n=e.length;n>=4;++i,n-=4)r=e.charCodeAt(i)&255|(e.charCodeAt(++i)&255)<<8|(e.charCodeAt(++i)&255)<<16|(e.charCodeAt(++i)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,t=(r&65535)*1540483477+((r>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(n){case 3:t^=(e.charCodeAt(i+2)&255)<<16;case 2:t^=(e.charCodeAt(i+1)&255)<<8;case 1:t^=e.charCodeAt(i)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var yn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},wn=/[A-Z]|^ms/g,xn=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Kt=function(t){return t.charCodeAt(1)===45},wt=function(t){return t!=null&&typeof t!="boolean"},Fe=Vt(function(e){return Kt(e)?e:e.replace(wn,"-$&").toLowerCase()}),xt=function(t,r){switch(t){case"animation":case"animationName":if(typeof r=="string")return r.replace(xn,function(i,n,a){return V={name:n,styles:a,next:V},n})}return yn[t]!==1&&!Kt(t)&&typeof r=="number"&&r!==0?r+"px":r};function ce(e,t,r){if(r==null)return"";if(r.__emotion_styles!==void 0)return r;switch(typeof r){case"boolean":return"";case"object":{if(r.anim===1)return V={name:r.name,styles:r.styles,next:V},r.name;if(r.styles!==void 0){var i=r.next;if(i!==void 0)for(;i!==void 0;)V={name:i.name,styles:i.styles,next:V},i=i.next;var n=r.styles+";";return n}return Sn(e,t,r)}case"function":{if(e!==void 0){var a=V,o=r(e);return V=a,ce(e,t,o)}break}}if(t==null)return r;var s=t[r];return s!==void 0?s:r}function Sn(e,t,r){var i="";if(Array.isArray(r))for(var n=0;n<r.length;n++)i+=ce(e,t,r[n])+";";else for(var a in r){var o=r[a];if(typeof o!="object")t!=null&&t[o]!==void 0?i+=a+"{"+t[o]+"}":wt(o)&&(i+=Fe(a)+":"+xt(a,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var s=0;s<o.length;s++)wt(o[s])&&(i+=Fe(a)+":"+xt(a,o[s])+";");else{var l=ce(e,t,o);switch(a){case"animation":case"animationName":{i+=Fe(a)+":"+l+";";break}default:i+=a+"{"+l+"}"}}}return i}var St=/label:\s*([^\s;\n{]+)\s*(;|$)/g,V,ct=function(t,r,i){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var n=!0,a="";V=void 0;var o=t[0];o==null||o.raw===void 0?(n=!1,a+=ce(i,r,o)):a+=o[0];for(var s=1;s<t.length;s++)a+=ce(i,r,t[s]),n&&(a+=o[s]);St.lastIndex=0;for(var l="",d;(d=St.exec(a))!==null;)l+="-"+d[1];var u=vn(a)+l;return{name:u,styles:a,next:V}},kn=function(t){return t()},En=gt["useInsertionEffect"]?gt["useInsertionEffect"]:!1,Jt=En||kn,Ne={}.hasOwnProperty,Qt=m.createContext(typeof HTMLElement!="undefined"?cn({key:"css"}):null);Qt.Provider;var er=function(t){return m.forwardRef(function(r,i){var n=m.useContext(Qt);return t(r,n,i)})},tr=m.createContext({}),He="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",rr=function(t,r){var i={};for(var n in r)Ne.call(r,n)&&(i[n]=r[n]);return i[He]=t,i},Cn=function(t){var r=t.cache,i=t.serialized,n=t.isStringTag;return st(r,i,n),Jt(function(){return Zt(r,i,n)}),null},Tn=er(function(e,t,r){var i=e.css;typeof i=="string"&&t.registered[i]!==void 0&&(i=t.registered[i]);var n=e[He],a=[i],o="";typeof e.className=="string"?o=Xt(t.registered,a,e.className):e.className!=null&&(o=e.className+" ");var s=ct(a,void 0,m.useContext(tr));o+=t.key+"-"+s.name;var l={};for(var d in e)Ne.call(e,d)&&d!=="css"&&d!==He&&(l[d]=e[d]);return l.ref=r,l.className=o,m.createElement(m.Fragment,null,m.createElement(Cn,{cache:t,serialized:s,isStringTag:typeof n=="string"}),m.createElement(n,l))}),nr=Tn,lt=ae.Fragment;function c(e,t,r){return Ne.call(t,"css")?ae.jsx(nr,rr(e,t),r):ae.jsx(e,t,r)}function x(e,t,r){return Ne.call(t,"css")?ae.jsxs(nr,rr(e,t),r):ae.jsxs(e,t,r)}var Ye={},kt=xr;Ye.createRoot=kt.createRoot,Ye.hydrateRoot=kt.hydrateRoot;const In=.3,Mn=.1,An=.1,Pn=.5,On=.2,_n=.5,Et=.5,$n=.02,je=200,Rn=50,Nn=5e3;function Ln(){const e=navigator.deviceMemory,t=navigator.hardwareConcurrency||1;return e?e>=8?"high":e>=4?"medium":"low":t>=8?"high":t>=4?"medium":"low"}function zn(e){const t=Ln(),r=Math.min(e,Rn),i=window.innerWidth*window.innerHeight,n=400*800,a=Math.min(1,i/n);let o;switch(t){case"low":o=Math.min(r,25);break;case"medium":o=Math.min(r,35);break;case"high":o=r;break;default:o=Math.min(r,30)}return Math.max(10,Math.floor(o*a))}const we=class we{constructor(t,r,i,n){O(this,"x",0);O(this,"y",0);O(this,"size",0);O(this,"speed",0);O(this,"angle",0);O(this,"spin",0);O(this,"canvas");O(this,"ctx");O(this,"color");O(this,"windX",0);O(this,"windY",0);O(this,"windDecay",.96);O(this,"lastWindApplied",0);O(this,"isActive",!0);this.canvas=t;const a=t.getContext("2d");if(!a)throw new Error("Failed to get canvas rendering context");this.ctx=a,this.color=n,this.reset(r,i)}reset(t,r){const n=Math.max(this.canvas.width-20,20),a=Math.max(this.canvas.height-20,20);this.x=Math.random()*n,this.y=Math.random()*a-a;const o=Math.max(.25,Math.min(.7,this.canvas.width/400)),s=[Math.max(1,t[0]*o),Math.max(2.5,t[1]*o)];this.size=Math.random()*(s[1]-s[0])+s[0],this.speed=Math.random()*(r[1]-r[0])+r[0],this.angle=Math.random()*Math.PI*2,this.spin=Math.random()*.02-.01,this.windX=0,this.windY=0,this.isActive=!0}applyWind(t,r){if(!r||!this.isActive)return;const i=we.tempPoint;i.x=this.x-r.x,i.y=this.y-r.y;const n=i.x*i.x+i.y*i.y,a=je*je;if(n<a){const s=1-Math.sqrt(n)/je,l=t.x*(An+Math.random()*Pn)*s,d=t.y*(On+Math.random()*_n)*s;this.windX=this.windX*this.windDecay+l*Et,this.windY=this.windY*this.windDecay+d*Et,this.lastWindApplied=Date.now()}}update(){if(!this.isActive)return;this.x+=this.windX,this.y+=this.speed+this.windY,this.angle+=this.spin+this.windX*$n;const t=50,r=-t,i=this.canvas.width+t,n=this.canvas.height+t;(this.y>n||this.x<r||this.x>i)&&this.reset([1,5],[.5,2]),this.windX*=this.windDecay,this.windY*=this.windDecay}draw(){if(!this.isActive)return;this.ctx.save(),this.ctx.translate(this.x,this.y),this.ctx.rotate(this.angle);const t=this.canvas.width<500;if(t?this.ctx.fillStyle=this.color.includes("0.7)")||this.color.includes("0.8)")?this.color.replace(/0\.[78]\)/,"0.9)"):this.color:this.ctx.fillStyle=this.color,this.ctx.beginPath(),this.ctx.ellipse(0,0,this.size,this.size*1.5,0,0,Math.PI*2),this.ctx.fill(),t&&this.size<4){const i=(n=>typeof window!="undefined"?getComputedStyle(document.documentElement).getPropertyValue(n).trim():"")("--color-peach");this.ctx.strokeStyle=i?`rgba(${i}, 0.3)`:"rgba(0,0,0,0)",this.ctx.lineWidth=.5,this.ctx.stroke()}this.ctx.restore()}deactivate(){this.isActive=!1}};O(we,"tempPoint",{x:0,y:0});let Xe=we;function Dn({density:e=100,sizeRange:t=[1,5],speedRange:r=[.5,2],color:i}={}){const n=document.createElement("canvas");n.style.position="fixed",n.style.top="0",n.style.left="0",n.style.width="100%",n.style.height="100%",n.style.pointerEvents="none",n.style.zIndex="1",n.style.overflow="hidden",document.body.appendChild(n);const a=n.getContext("2d");if(!a)throw new Error("Failed to get canvas rendering context");const o=A=>typeof window!="undefined"?getComputedStyle(document.documentElement).getPropertyValue(A).trim():"",s=o("--color-pink"),l=o("--color-peach"),d=s?`rgba(${s}, 0.85)`:l?`rgba(${l}, 0.85)`:"rgba(0,0,0,0)",u=i||d,p=zn(e),y=Array.from({length:p},()=>new Xe(n,t,r,u));function k(){n.width=window.innerWidth,n.height=window.innerHeight,y.forEach(A=>{A.reset(t,r),A.y=Math.random()*n.height-n.height*.5})}const b={x:0,y:0},f=.95;let g=!1,w={x:0,y:0},v=null,S={x:0,y:0},W,L=Date.now(),$=!1;const T=16;function Q(A){g=!0;const z="touches"in A?A.touches[0]:A;w={x:z.clientX,y:z.clientY}}function U(A){if(!g||$)return;$=!0,setTimeout(()=>{$=!1},T);const z="touches"in A?A.touches[0]:A,hr=z.clientX-w.x,pr=z.clientY-w.y;b.x=hr*In,b.y=pr*Mn,w={x:z.clientX,y:z.clientY}}function G(A){g=!1;const z="touches"in A&&A.changedTouches?A.changedTouches[0]:A;v={x:z.clientX,y:z.clientY},S=X({},b)}window.addEventListener("mousedown",Q,{passive:!0}),window.addEventListener("mousemove",U,{passive:!0}),window.addEventListener("mouseup",G,{passive:!0}),window.addEventListener("touchstart",Q,{passive:!0}),window.addEventListener("touchmove",U,{passive:!0}),window.addEventListener("touchend",G,{passive:!0});function ht(){const A=Date.now();if(A-L>Nn){if(typeof window!="undefined"&&"gc"in window)try{window.gc()}catch(z){}L=A}a&&a.clearRect(0,0,n.width,n.height);for(const z of y)v&&(Math.abs(S.x)>.01||Math.abs(S.y)>.01)&&z.applyWind(S,v),z.update(),z.draw();g||(b.x*=f,b.y*=f,Math.abs(b.x)<.01&&(b.x=0),Math.abs(b.y)<.01&&(b.y=0),S.x*=f,S.y*=f,Math.abs(S.x)<.01&&(S.x=0),Math.abs(S.y)<.01&&(S.y=0),S.x===0&&S.y===0&&(v=null)),W=requestAnimationFrame(ht)}return window.addEventListener("resize",k),k(),ht(),()=>{cancelAnimationFrame(W),window.removeEventListener("mousedown",Q),window.removeEventListener("mousemove",U),window.removeEventListener("mouseup",G),window.removeEventListener("touchstart",Q),window.removeEventListener("touchmove",U),window.removeEventListener("touchend",G),window.removeEventListener("resize",k),y.forEach(A=>A.deactivate()),n.parentNode&&n.parentNode.removeChild(n)}}const Fn="/wedding-invitation/assets/images/whaleseal-04a2d9ba.png";var jn=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Wn=Vt(function(e){return jn.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function qn(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return ct(t)}var ir=function(){var t=qn.apply(void 0,arguments),r="animation-"+t.name;return{name:r,styles:"@keyframes "+r+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Vn=Wn,Bn=function(t){return t!=="theme"},Ct=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?Vn:Bn},Tt=function(t,r,i){var n;if(r){var a=r.shouldForwardProp;n=t.__emotion_forwardProp&&a?function(o){return t.__emotion_forwardProp(o)&&a(o)}:a}return typeof n!="function"&&i&&(n=t.__emotion_forwardProp),n},Un=function(t){var r=t.cache,i=t.serialized,n=t.isStringTag;return st(r,i,n),Jt(function(){return Zt(r,i,n)}),null},Gn=function e(t,r){var i=t.__emotion_real===t,n=i&&t.__emotion_base||t,a,o;r!==void 0&&(a=r.label,o=r.target);var s=Tt(t,r,i),l=s||Ct(n),d=!l("as");return function(){var u=arguments,p=i&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&p.push("label:"+a+";"),u[0]==null||u[0].raw===void 0)p.push.apply(p,u);else{p.push(u[0][0]);for(var y=u.length,k=1;k<y;k++)p.push(u[k],u[0][k])}var b=er(function(f,g,w){var v=d&&f.as||n,S="",W=[],L=f;if(f.theme==null){L={};for(var $ in f)L[$]=f[$];L.theme=m.useContext(tr)}typeof f.className=="string"?S=Xt(g.registered,W,f.className):f.className!=null&&(S=f.className+" ");var T=ct(p.concat(W),g.registered,L);S+=g.key+"-"+T.name,o!==void 0&&(S+=" "+o);var Q=d&&s===void 0?Ct(v):l,U={};for(var G in f)d&&G==="as"||Q(G)&&(U[G]=f[G]);return U.className=S,U.ref=w,m.createElement(m.Fragment,null,m.createElement(Un,{cache:g,serialized:T,isStringTag:typeof v=="string"}),m.createElement(v,U))});return b.displayName=a!==void 0?a:"Styled("+(typeof n=="string"?n:n.displayName||n.name||"Component")+")",b.defaultProps=t.defaultProps,b.__emotion_real=b,b.__emotion_base=n,b.__emotion_styles=p,b.__emotion_forwardProp=s,Object.defineProperty(b,"toString",{value:function(){return"."+o}}),b.withComponent=function(f,g){return e(f,Ge({},r,g,{shouldForwardProp:Tt(b,g,!0)})).apply(void 0,p)},b}},Hn=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],h=Gn.bind();Hn.forEach(function(e){h[e]=h(e)});const Z=h.p`
  font-family: inherit;
  font-size: 1.5rem;
  margin: 10px;
  color: rgb(var(--color-coral));
  white-space: pre-line;
`,Yn=h.p`
  font-size: 1rem;
  margin: 10px;
  white-space: pre-line;
`,Ze=h.p`
  font-family: inherit;
  line-height: 1;
  margin: 0;
  color: rgb(var(--color-peach));
  white-space: pre-line;
`,Xn=h.p`
  line-height: 2.2rem;
  white-space: pre-line;
`,Ke=h.p`
  font-weight: 200;
  text-align: ${e=>e.textAlign?e.textAlign:"start"};
  white-space: pre-line;
`,H=h.section`
  padding: 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: rgb(var(--color-green));
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
`,Zn=()=>c(Kn,{children:c(Jn,{src:"https://www.youtube-nocookie.com/embed/_GQr5ciW8JI?si=hucyuZGTTEEGYthF&",title:"YouTube Live Stream",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),Kn=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto; /* Updated margin to align with the rest of the site */
  width: 100%;
  max-width: 800px;
  height: auto;
  border: 2px solid rgba(var(--color-pink), 0.9);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(var(--shadow-rgb), 0.12);
  background-color: rgba(var(--surface-rgb), var(--surface-opacity));
`,Jn=h.iframe`
  width: 100%;
  height: 315px;
  border: none;
  border-radius: 8px;
`,Qn={title:`Sakyawira 💍 Debbie
We are getting married!`,message:`To our dear ones who have always warmed us with their love.
We invite you to share the precious moment of our first step as a married couple.

You'll find all the details about when and where below. And if you can't make it in person, no worries—there will be a livestream link so you can celebrate with us from anywhere!`,host:{groom:{name:"Sakyawira Ruslim",relation:"",parents:[]},bride:{name:"Debbie Hartono",relation:"",parents:[]},groomFather:{name:"Djajadi Ruslim & Silvi Oktavia Wijaya",relation:"Son of",parents:[]},brideFather:{name:"Aris Budiman Hartono & Karuniawati Tjahjadi",relation:"Daughter of ",parents:[]}},eventDetail:`February 28, 2026 (Saturday) 10:00
Duke & Duchess`},ei=[{host:"Bride's Bank Account",accountInfo:[{name:"Debbie Fiona",relation:"",bank:"Blu/ BCA Digital ",account:"005734429248",kakaopayAccount:"",tossAccount:""}]}],ti={address1:"Duke & Duchess",address2:"Jl. Achmad Adnawijaya No.132, Tegal Gundil, Kec. Bogor Utara, Kota Bogor, Jawa Barat 16152, Indonesia",googleMap:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7926.966471849799!2d106.8161017!3d-6.5866957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5e7ff9b0813%3A0x2861e1a0fa389449!2sDuke%20and%20Duchess!5e0!3m2!1sen!2snz!4v1746278676549!5m2!1sen!2snz",lat:37.54222,lon:126.952708},ri=[{title:"📅 Time",desc:"February 28, 2026 (Saturday) 10:00"},{title:"📍 Place",desc:"Duke & Duchess, Jl. Achmad Adnawijaya No.132, Tegal Gundil, Kec. Bogor Utara, Kota Bogor, Jawa Barat 16152, Indonesia"}],ni=["❤️","💛","💌","🥺","🥳","👰🏻‍","🤵🏻‍♂️","💝","✨","💍","💒","💕","😍","🔔","💘"],ne={greeting:Qn,hostInfo:ei,mapInfo:ti,locationInfo:ri,emojis:ni},ii=e=>m.createElement("svg",X({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 -960 960 960",width:24},e),m.createElement("path",{d:"M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"})),ai="/wedding-invitation/assets/images/kakaopay-b0bb60b9.png",oi="/wedding-invitation/assets/images/toss-665116ae.png",si=({name:e,relation:t,bank:r,account:i,kakaopayAccount:n,tossAccount:a})=>x(ci,{children:[x(li,{children:[c(di,{children:t}),c(ui,{children:e})]}),x(fi,{children:[x(hi,{children:[r," ",i]}),c(pi,{onClick:()=>{navigator.clipboard.writeText(i).then(()=>{alert("Account number has been copied.😉😉")},()=>{alert("Failed to copy account number.🥲🥲")})},children:c(ii,{fill:"rgb(var(--color-peach))"})})]}),x(mi,{children:[n&&c(It,{href:n,target:"_blank",rel:"noreferrer",children:c(gi,{src:ai,alt:"kakaopay"})}),a&&c(It,{href:a,target:"_blank",rel:"noreferrer",children:c(bi,{src:oi,alt:"toss"})})]})]}),ci=h.div`
  font-family: inherit;
  padding: 20px;
  margin: 10px 0;
    border-bottom: 1px solid rgba(var(--color-pink), 0.9);
  &:last-of-type {
    margin-bottom: 0;
    border-bottom: none;
  }
  display: flex;
  flex-direction: column;
`,li=h.div`
  height: inherit;
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 5px 0;
`,di=h.span`
    color: rgb(var(--color-green));
`,ui=h.span`
  font-size: 1rem;
`,fi=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,hi=h.div``,pi=h.button`
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  gap: 2px;
  outline: none;
  box-shadow: none;
    background: rgba(var(--surface-rgb), var(--surface-opacity));
`,mi=h.div`
  display: flex;
  width: 100%;
  gap: 2px;
`,It=h.button`
  display: flex;
  align-items: center;
  justify-content: center;
    border: 1px solid rgba(var(--color-peach), 0.95);
  border-radius: 5px;
  margin: 5px 0;
  padding: 0 0.8em;
  width: inherit;
  font-size: 0.7rem;
  cursor: pointer;
  gap: 2px;
    color: rgb(var(--color-green));
  text-decoration: none;
  outline: none;
  box-shadow: none;
    background: rgba(var(--surface-rgb), var(--surface-opacity));
`.withComponent("a"),gi=h.img`
  width: 50px;
`,bi=h.img`
  width: 70px;
`,vi=e=>m.createElement("svg",X({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 -960 960 960",width:24},e),m.createElement("path",{d:"M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"})),yi=({title:e,children:t})=>{const[r,i]=m.useState(!1);return x(wi,{children:[x(xi,{isActive:r,onClick:()=>{i(!r)},children:[c("p",{children:e}),c("span",{children:c(ki,{})})]}),r&&c(Si,{children:t})]})},wi=h.div`
  font-family: inherit;
  border: 1px solid rgba(var(--color-pink), 0.9);
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
`,xi=h.div`
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
`,Si=h.div`
  font-size: 14px;
  text-align: justify;
  padding: 10px 20px;
  background-color: rgba(var(--surface-rgb), var(--surface-opacity));
`,ki=h(vi)`
  width: 18px;
  height: 18px;
  fill: rgba(var(--color-pink), 1) !important;
`,Ei=()=>{const{hostInfo:e}=ne;return c(Ci,{children:e.map(t=>c(yi,{title:t.host,children:t.accountInfo.map(r=>c(si,{name:r.name,relation:r.relation,bank:r.bank,account:r.account,kakaopayAccount:r.kakaopayAccount,tossAccount:r.tossAccount},r.name))},t.host))})},Ci=h.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  padding: 20px;
`,Ti=h.div`
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
`,Ii=e=>m.createElement("svg",X({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 -960 960 960",width:24},e),m.createElement("path",{d:"M440-501Zm0 381L313-234q-72-65-123.5-116t-85-96q-33.5-45-49-87T40-621q0-94 63-156.5T260-840q52 0 99 22t81 62q34-40 81-62t99-22q81 0 136 45.5T831-680h-85q-18-40-53-60t-73-20q-51 0-88 27.5T463-660h-46q-31-45-70.5-72.5T260-760q-57 0-98.5 39.5T120-621q0 33 14 67t50 78.5q36 44.5 98 104T440-228q26-23 61-53t56-50l9 9 19.5 19.5L605-283l9 9q-22 20-56 49.5T498-172l-58 52Zm280-160v-120H600v-80h120v-120h80v120h120v80H800v120h-80Z"})),Mi=e=>m.createElement("svg",X({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 -960 960 960",width:24},e),m.createElement("path",{d:"M720-80q-50 0-85-35t-35-85q0-7 1-14.5t3-13.5L322-392q-17 15-38 23.5t-44 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q23 0 44 8.5t38 23.5l282-164q-2-6-3-13.5t-1-14.5q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-23 0-44-8.5T638-672L356-508q2 6 3 13.5t1 14.5q0 7-1 14.5t-3 13.5l282 164q17-15 38-23.5t44-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-640q17 0 28.5-11.5T760-760q0-17-11.5-28.5T720-800q-17 0-28.5 11.5T680-760q0 17 11.5 28.5T720-720ZM240-440q17 0 28.5-11.5T280-480q0-17-11.5-28.5T240-520q-17 0-28.5 11.5T200-480q0 17 11.5 28.5T240-440Zm480 280q17 0 28.5-11.5T760-200q0-17-11.5-28.5T720-240q-17 0-28.5 11.5T680-200q0 17 11.5 28.5T720-160Zm0-600ZM240-480Zm480 280Z"})),Ai=e=>m.createElement("svg",X({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 -960 960 960",width:24},e),m.createElement("path",{d:"M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"})),We=h.button`
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
`.withComponent("a"),Pi=({isVisible:e})=>{const{emojis:t}=ne,r=()=>{navigator.clipboard.writeText(window.location.href).then(()=>{alert("Address copied successfully. 😉😉")},()=>{alert("Failed to copy the address. 🥲🥲")})},i=()=>{n.addConfetti({emojis:t})},n=new kr;return x(_i,{isVisible:e,children:[c(We,{onClick:i,children:c(Ii,{className:"floating-icon"})}),x(We,{onClick:r,children:[c(Mi,{className:"floating-icon"}),"Share"]}),x(We,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:[c(Ai,{className:"floating-icon"}),"Scroll Up"]})]})},Oi=ir`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`,_i=h.nav`
  min-width: 280px;
  position: fixed;
  bottom: 30px;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  gap: 5px;
  display: ${e=>e.isVisible?"flex":"none"};
  animation: ${e=>e.isVisible?Oi:"none"} 0.5s ease-out;
`,$i="/wedding-invitation/assets/images/01-15be4fbb.jpg",Ri="/wedding-invitation/assets/images/02-d5068223.jpg",Ni="/wedding-invitation/assets/images/03-2fa304fa.jpg",Li="/wedding-invitation/assets/images/04-1b00c50a.jpg",ar="/wedding-invitation/assets/images/05-ce1902d7.jpg",zi="/wedding-invitation/assets/images/06-10e36295.jpg",Di="/wedding-invitation/assets/images/07-c0b8fca0.jpg",Fi="/wedding-invitation/assets/images/08-17704c28.jpg",ji="/wedding-invitation/assets/images/09-0a42ab04.jpg",Wi="/wedding-invitation/assets/images/10-4774c332.jpg",qi="/wedding-invitation/assets/images/11-c97ae3e8.jpg",Vi="/wedding-invitation/assets/images/12-3be7f6a8.jpg",Y=[{alt:"image01",source:$i,width:640,height:960},{alt:"image02",source:Ri,width:640,height:960},{alt:"image03",source:Ni,width:640,height:960},{alt:"image04",source:Li,width:640,height:960},{alt:"image05",source:ar,width:640,height:960},{alt:"image06",source:zi,width:640,height:960},{alt:"image07",source:Di,width:640,height:960},{alt:"image08",source:Fi,width:640,height:960},{alt:"image09",source:ji,width:640,height:960},{alt:"image10",source:Wi,width:640,height:960},{alt:"image11",source:qi,width:640,height:960},{alt:"image12",source:Vi,width:640,height:960}],Bi=()=>{const e={cursor:"pointer",objectFit:"contain",width:"100px",height:"150px"},r=/iPad|iPhone|iPod/.test(navigator.userAgent)?Y.slice(0,8):Y;return c(Tr,{children:c("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 0fr)",gridGap:2},children:r.map((i,n)=>c(Cr,{cropped:!0,original:i.source,thumbnail:i.source,width:i.width,height:i.height,children:({ref:a,open:o})=>c("img",{style:e,alt:i.alt,src:i.source,ref:a,onClick:o,loading:"lazy",decoding:"async"})},n))})})},Ui=()=>{const[e,t]=m.useState(!1);return x(Gi,{children:[x(Hi,{isMoreView:e,children:[!e&&c(Yi,{}),c(Bi,{})]}),!e&&c(Xi,{onClick:()=>{t(!e)},children:"Expand"})]})},Gi=h.div`
  margin: 30px 0;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Hi=h.div`
  position: relative;
  max-height: ${e=>e.isMoreView?"":"60vh"}; /* When isMoreView is true, no height limit; when false, limit to 195px */
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
`,Yi=h.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    transparent 0%,
    rgba(var(--surface-rgb), var(--surface-opacity)) 90%
  );
`,Xi=h.div`
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
`,Zi="/wedding-invitation/assets/images/13-4dd5e88e.jpg",Ki=h.div`
  position: fixed;
  inset: 0;
  z-index: -999;
  background-image: url(${Zi});
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  filter: none;
  pointer-events: none;
`,Ji=h.div`
  position: fixed;
  inset: 0;
  z-index: -998;
  background: rgba(var(--surface-rgb), 0.18); /* subtle tint to match theme */
  pointer-events: none;
`;function Qi(){return x(lt,{children:[c(Ki,{}),c(Ji,{})]})}class ea{constructor(){O(this,"formUrl");O(this,"nameFieldId");O(this,"messageFieldId");this.formUrl="https://docs.google.com/forms/d/e/1FAIpQLSdqh6LYuVn7Dqd7UgOLdgL3NS8aARLvi_P-HhXKSeBqfRGdSw/formResponse",this.nameFieldId="1920355118",this.messageFieldId="19176333"}appendEntry(t){return de(this,null,function*(){try{console.log("Attempting to submit to Google Form:",t);const r=new FormData;r.append(`entry.${this.nameFieldId}`,t.name),r.append(`entry.${this.messageFieldId}`,t.message);const i=yield fetch(this.formUrl,{method:"POST",body:r,mode:"no-cors"});return console.log("Form submission response status:",i.status),!0}catch(r){return console.error("Error submitting to Google Form:",r),!1}})}getEntries(){return de(this,null,function*(){try{const t={}.VITE_GOOGLE_SHEET_ID||"";if(!t)return console.warn("No spreadsheet ID configured for reading entries"),[];const r=`https://docs.google.com/spreadsheets/d/${t}/export?format=csv&gid=0`,i=yield fetch(r);if(!i.ok)throw new Error(`HTTP error! status: ${i.status}`);return(yield i.text()).split(`
`).slice(1).filter(s=>s.trim()).map(s=>{const[l,d,u]=s.split(",").map(p=>p.replace(/"/g,"").trim());return{name:d||"",message:u||"",timestamp:l||""}})}catch(t){return console.error("Error fetching from Google Sheets:",t),[]}})}}const ta=new ea,ra=()=>{const[e,t]=m.useState(""),[r,i]=m.useState(""),[n,a]=m.useState(!1);return x(na,{onSubmit:s=>de(fr,null,function*(){if(s.preventDefault(),!e.trim()||!r.trim()){alert("Please fill in your name and message. 😢");return}if(e.length>50){alert("Name must be less than 50 characters. 😅");return}if(r.length>500){alert("Message must be less than 500 characters. 😅");return}a(!0);try{(yield ta.appendEntry({name:e.trim(),message:r.trim(),timestamp:new Date().toISOString()}))?(t(""),i(""),alert("Thank you for your message! 💝")):alert("Sorry, there was an error submitting your message. Please try again. 😢")}catch(l){console.error("Error submitting message:",l),alert("Sorry, there was an error submitting your message. Please try again. 😢")}finally{a(!1)}}),children:[c(ia,{placeholder:"Name",type:"text",value:e,onChange:s=>t(s.target.value)}),c(aa,{placeholder:"Message",value:r,onChange:s=>i(s.target.value)}),c(oa,{type:"submit",disabled:n,children:n?"Submitting...":"Submit"})]})},na=h.form`
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: visible;
  align-items: center;
`,ia=h.input`
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
`,aa=h.textarea`
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
`,oa=h.button`
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
`,sa=()=>x(ca,{children:[x(Yn,{children:["Please leave a message.",c("br",{}),"After the wedding, it will be delivered to the bride and groom."]}),c(ra,{})]}),ca=h.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 50px;
`,la=()=>{const{groom:e,bride:t,groomFather:r,brideFather:i}=ne.greeting.host;return c(lt,{children:x(ua,{children:[c("h2",{children:"Groom"}),c(fe,{person:e}),c(fe,{person:r}),c("span",{role:"img","aria-label":"pink heart",children:"💗"}),c("h2",{children:"Bride"}),c(fe,{person:t}),c(fe,{person:i})]})})},fe=({person:e})=>x(fa,{children:[e.parents&&c(lt,{children:e.parents.map((t,r)=>x($t.Fragment,{children:[r>0&&" · ",t.name]},r))}),c(ha,{children:e.relation}),c(da,{children:e.name})]}),da=h.span`
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
`,ua=h.div`
  gap: 8px;
  font-family: inherit;
  max-width: 100%;
  padding: 0 4px;
  box-sizing: border-box;
`,fa=h.div`
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
`,ha=h.div`
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
`,pa=()=>{const{greeting:e,mapInfo:t,locationInfo:r}=ne;return m.useEffect(()=>{const i=new Date("2025-08-16T15:30:00"),n=new Date(i.getTime()+2*60*60*1e3),a=i.toISOString().replace(/[-:]/g,"").split(".")[0]+"Z",o=n.toISOString().replace(/[-:]/g,"").split(".")[0]+"Z",s=t.address1||r[1].desc||"",l=`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Sakyawira & Debbie Wedding")}&dates=${a}/${o}&details=${encodeURIComponent(e.message)}&location=${encodeURIComponent(s)}`,d=document.getElementById("google-calendar-link");d&&d.setAttribute("href",l)},[]),x(ma,{children:[c(ga,{children:e.message}),c(la,{})]})},ma=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 0 16px;
  max-width: 100%;
`,ga=h(Xn)`
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
`,ba=({src:e})=>c(va,{src:e,allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"}),va=h.iframe`
  width: 100%;
  max-width: 400px;
  height: 250px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(var(--shadow-rgb), 0.12);
`,ya=h.button`
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
`.withComponent("a"),wa=()=>{const{mapInfo:e,locationInfo:t,greeting:r}=ne,n=(()=>{const a=/([A-Za-z]+ \d{1,2}, \d{4}).*?(\d{1,2}:\d{2})/.exec(r.eventDetail);if(!a)return"#";const o=a[1],s=a[2],l=`${o} ${s}`,d=new Date(l+" GMT+0700"),u=v=>String(v).padStart(2,"0"),p=v=>v.getUTCFullYear()+u(v.getUTCMonth()+1)+u(v.getUTCDate())+"T"+u(v.getUTCHours())+u(v.getUTCMinutes())+"00Z",y=p(d),k=new Date(d.getTime()+2*60*60*1e3),b=p(k),f=encodeURIComponent("Sakyawira & Debbie Wedding"),g=encodeURIComponent(`Join us for the wedding celebration of Sakyawira and Debbie!

Location: ${e.address2}`),w=encodeURIComponent(e.address2);return`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${f}&dates=${y}/${b}&details=${g}&location=${w}&ctz=Asia/Jakarta`})();return x(xa,{children:[x(Mt,{children:[c(Ze,{children:t[1].title}),c(Ke,{children:t[1].desc}),c(ba,{src:e.googleMap})]}),x(Mt,{children:[c(Ze,{children:t[0].title}),c(Ke,{children:t[0].desc}),c(ya,{id:"google-calendar-link",target:"_blank",href:n,rel:"noreferrer",children:"Add to Calendar"})]})]})},xa=h.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`,Mt=h.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-top: 24px;
`,or=ir`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,Sa=()=>{const{greeting:e}=ne,t=typeof window!="undefined"?new URLSearchParams(window.location.search):null;let r=t?t.get("name"):null;if(r){try{r=decodeURIComponent(r)}catch(n){}r=r.trim().slice(0,50),r=r.replace(/([a-z])([A-Z])/g,"$1 $2")}const i=r?`Hi, ${r}! 💍 Sakya & Debbie are getting married - come celebrate! 🎉✨`:e.title;return x("div",{children:[c(ka,{src:ar}),c(Ea,{children:i})]})},ka=h.img`
  width: 90%;
  max-width: 450px;
  padding: 18px;
  display: block;
  margin: 0 auto;
  animation: ${or} 1s ease-out;

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
`,Ea=h.p`
  font-family: inherit;
  font-size: 2rem;
  color: rgb(var(--color-green));
  line-height: 120%;
  white-space: pre-line;
  margin: 10px 0;
  animation: ${or} 1.2s ease-out;
`;var Le={},sr={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function r(){for(var a="",o=0;o<arguments.length;o++){var s=arguments[o];s&&(a=n(a,i(s)))}return a}function i(a){if(typeof a=="string"||typeof a=="number")return a;if(typeof a!="object")return"";if(Array.isArray(a))return r.apply(null,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var o="";for(var s in a)t.call(a,s)&&a[s]&&(o=n(o,s));return o}function n(a,o){return o?a?a+" "+o:a+o:a}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(sr);var cr=sr.exports;Le.__esModule=!0;Le.default=void 0;var Ca=dt(m),K=dt(Rt),Ta=dt(cr);function dt(e){return e&&e.__esModule?e:{default:e}}const lr=({animate:e=!0,className:t="",layout:r="2-columns",lineColor:i="#FFF",children:n})=>(typeof window=="object"&&document.documentElement.style.setProperty("--line-color",i),Ca.default.createElement("div",{className:(0,Ta.default)(t,"vertical-timeline",{"vertical-timeline--animate":e,"vertical-timeline--two-columns":r==="2-columns","vertical-timeline--one-column-left":r==="1-column"||r==="1-column-left","vertical-timeline--one-column-right":r==="1-column-right"})},n));lr.propTypes={children:K.default.oneOfType([K.default.arrayOf(K.default.node),K.default.node]).isRequired,className:K.default.string,animate:K.default.bool,layout:K.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:K.default.string};var Ia=lr;Le.default=Ia;var ze={};function Je(){return Je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},Je.apply(this,arguments)}function Ma(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Qe(e,t)}function Qe(e,t){return Qe=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},Qe(e,t)}function Aa(e,t){if(e==null)return{};var r={},i=Object.keys(e),n,a;for(a=0;a<i.length;a++)n=i[a],!(t.indexOf(n)>=0)&&(r[n]=e[n]);return r}var et=new Map,he=new WeakMap,At=0,dr=void 0;function Pa(e){dr=e}function Oa(e){return e?(he.has(e)||(At+=1,he.set(e,At.toString())),he.get(e)):"0"}function _a(e){return Object.keys(e).sort().filter(function(t){return e[t]!==void 0}).map(function(t){return t+"_"+(t==="root"?Oa(e.root):e[t])}).toString()}function $a(e){var t=_a(e),r=et.get(t);if(!r){var i=new Map,n,a=new IntersectionObserver(function(o){o.forEach(function(s){var l,d=s.isIntersecting&&n.some(function(u){return s.intersectionRatio>=u});e.trackVisibility&&typeof s.isVisible=="undefined"&&(s.isVisible=d),(l=i.get(s.target))==null||l.forEach(function(u){u(d,s)})})},e);n=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:a,elements:i},et.set(t,r)}return r}function ut(e,t,r,i){if(r===void 0&&(r={}),i===void 0&&(i=dr),typeof window.IntersectionObserver=="undefined"&&i!==void 0){var n=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),function(){}}var a=$a(r),o=a.id,s=a.observer,l=a.elements,d=l.get(e)||[];return l.has(e)||l.set(e,d),d.push(t),s.observe(e),function(){d.splice(d.indexOf(t),1),d.length===0&&(l.delete(e),s.unobserve(e)),l.size===0&&(s.disconnect(),et.delete(o))}}var Ra=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function Pt(e){return typeof e.children!="function"}var ye=function(e){Ma(t,e);function t(i){var n;return n=e.call(this,i)||this,n.node=null,n._unobserveCb=null,n.handleNode=function(a){n.node&&(n.unobserve(),!a&&!n.props.triggerOnce&&!n.props.skip&&n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=a||null,n.observeNode()},n.handleChange=function(a,o){a&&n.props.triggerOnce&&n.unobserve(),Pt(n.props)||n.setState({inView:a,entry:o}),n.props.onChange&&n.props.onChange(a,o)},n.state={inView:!!i.initialInView,entry:void 0},n}var r=t.prototype;return r.componentDidUpdate=function(n){(n.rootMargin!==this.props.rootMargin||n.root!==this.props.root||n.threshold!==this.props.threshold||n.skip!==this.props.skip||n.trackVisibility!==this.props.trackVisibility||n.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},r.componentWillUnmount=function(){this.unobserve(),this.node=null},r.observeNode=function(){if(!(!this.node||this.props.skip)){var n=this.props,a=n.threshold,o=n.root,s=n.rootMargin,l=n.trackVisibility,d=n.delay,u=n.fallbackInView;this._unobserveCb=ut(this.node,this.handleChange,{threshold:a,root:o,rootMargin:s,trackVisibility:l,delay:d},u)}},r.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},r.render=function(){if(!Pt(this.props)){var n=this.state,a=n.inView,o=n.entry;return this.props.children({inView:a,entry:o,ref:this.handleNode})}var s=this.props,l=s.children,d=s.as,u=Aa(s,Ra);return m.createElement(d||"div",Je({ref:this.handleNode},u),l)},t}(m.Component);ye.displayName="InView";ye.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};function Na(e){var t=e===void 0?{}:e,r=t.threshold,i=t.delay,n=t.trackVisibility,a=t.rootMargin,o=t.root,s=t.triggerOnce,l=t.skip,d=t.initialInView,u=t.fallbackInView,p=m.useRef(),y=m.useState({inView:!!d}),k=y[0],b=y[1],f=m.useCallback(function(w){p.current!==void 0&&(p.current(),p.current=void 0),!l&&w&&(p.current=ut(w,function(v,S){b({inView:v,entry:S}),S.isIntersecting&&s&&p.current&&(p.current(),p.current=void 0)},{root:o,rootMargin:a,threshold:r,trackVisibility:n,delay:i},u))},[Array.isArray(r)?r.toString():r,o,a,s,l,n,u,i]);m.useEffect(function(){!p.current&&k.entry&&!s&&!l&&b({inView:!!d})});var g=[f,k.inView,k.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}const La=Object.freeze(Object.defineProperty({__proto__:null,InView:ye,default:ye,defaultFallbackInView:Pa,observe:ut,useInView:Na},Symbol.toStringTag,{value:"Module"})),za=Sr(La);ze.__esModule=!0;ze.default=void 0;var J=ft(m),M=ft(Rt),pe=ft(cr),Da=za;function ft(e){return e&&e.__esModule?e:{default:e}}const ur=({children:e="",className:t="",contentArrowStyle:r=null,contentStyle:i=null,date:n="",dateClassName:a="",icon:o=null,iconClassName:s="",iconOnClick:l=null,onTimelineElementClick:d=null,iconStyle:u=null,id:p="",position:y="",style:k=null,textClassName:b="",intersectionObserverProps:f={rootMargin:"0px 0px -40px 0px",triggerOnce:!0},visible:g=!1,shadowSize:w="small"})=>J.default.createElement(Da.InView,f,({inView:v,ref:S})=>J.default.createElement("div",{ref:S,id:p,className:(0,pe.default)(t,"vertical-timeline-element",{"vertical-timeline-element--left":y==="left","vertical-timeline-element--right":y==="right","vertical-timeline-element--no-children":e===""}),style:k},J.default.createElement(J.default.Fragment,null,J.default.createElement("span",{style:u,onClick:l,className:(0,pe.default)(s,"vertical-timeline-element-icon",`shadow-size-${w}`,{"bounce-in":v||g,"is-hidden":!(v||g)})},o),J.default.createElement("div",{style:i,onClick:d,className:(0,pe.default)(b,"vertical-timeline-element-content",{"bounce-in":v||g,"is-hidden":!(v||g)})},J.default.createElement("div",{style:r,className:"vertical-timeline-element-content-arrow"}),e,J.default.createElement("span",{className:(0,pe.default)(a,"vertical-timeline-element-date")},n)))));ur.propTypes={children:M.default.oneOfType([M.default.arrayOf(M.default.node),M.default.node]),className:M.default.string,contentArrowStyle:M.default.shape({}),contentStyle:M.default.shape({}),date:M.default.node,dateClassName:M.default.string,icon:M.default.element,iconClassName:M.default.string,iconStyle:M.default.shape({}),iconOnClick:M.default.func,onTimelineElementClick:M.default.func,id:M.default.string,position:M.default.string,style:M.default.shape({}),textClassName:M.default.string,visible:M.default.bool,shadowSize:M.default.string,intersectionObserverProps:M.default.shape({root:M.default.object,rootMargin:M.default.string,threshold:M.default.number,triggerOnce:M.default.bool})};var Fa=ur;ze.default=Fa;var Ot={VerticalTimeline:Le.default,VerticalTimelineElement:ze.default};const _t=[{date:"2015",title:"Strangers to Best Friends",description:"A school project brought us together for a couple photo. Fate?",image:Y[0].source},{date:"2017",title:"Winning a Short Movie Competition",description:"It was a romance movie, but we were just friends. Or so we thought.",image:Y[1].source},{date:"2019",title:"Annual Catchup",description:"The ocean kept us apart, but we always found time once a year.",image:Y[2].source},{date:"2022",title:"Officially more than Friends",description:"Debbie’s birthday. This time, we’re not just friends.",image:Y[3].source},{date:"2023",title:"First Year Together",description:"Long distance, good food, and a lot of calls.",image:Y[5].source},{date:"Q2 2024",title:"Engaged!",description:"Somewhere in Southeast Asia, she said yes.",image:Y[6].source},{date:"Q4 2024",title:"Holiday in Bali",description:"Last deep breath before the chaos of immigration and weddding prep.",image:Y[7].source}],ja=({isCollapsed:e=!1,onExpand:t})=>x(Wa,{style:{position:"relative",width:"100%",maxWidth:500},children:[c(Ot.VerticalTimeline,{lineColor:"rgba(var(--color-pink), 0.95)",children:(e?_t.slice(0,1):_t).map((i,n)=>x(Ot.VerticalTimelineElement,{date:i.date,dateClassName:"timeline-date-centered",iconStyle:{background:"rgba(var(--color-pink), 0.95)",color:"rgb(var(--color-white))",boxShadow:"0 0 0 4px rgba(var(--color-pink), 0.9)"},contentStyle:{background:"transparent",color:"rgb(var(--muted-text-rgb))",border:"1px solid rgba(var(--color-pink), 0.9)"},contentArrowStyle:{borderRight:"7px solid rgba(var(--color-pink), 0.9)"},children:[c(Ze,{children:i.title}),c(Ke,{children:i.description}),c(Ba,{src:i.image,alt:i.title,shapeIndex:n}),e&&n===1-1&&c(Ua,{onClick:t,children:"Show Full Timeline"})]},n))}),e&&c(Ga,{})]}),Wa=h.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  background: rgba(var(--surface-rgb, 255, 255, 255), var(--surface-opacity));
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(var(--color-pink), 0.08);
  padding: 20px 0;
  position: relative;
`,qa=e=>()=>{let t=e+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296},qe=e=>{const t=[];for(let r=0;r<e.length;r++){const i=e[r],n=e[(r+1)%e.length];t.push([i[0]*.75+n[0]*.25,i[1]*.75+n[1]*.25]),t.push([i[0]*.25+n[0]*.75,i[1]*.25+n[1]*.75])}return t},Va=(e=0,t=24)=>{const r=qa(e+1),i=52,n=78,a=50+(r()-.5)*6,o=50+(r()-.5)*6;let l=Array.from({length:t},()=>i+r()*(n-i)).map((u,p)=>{const y=p/t*Math.PI*2;return[a+Math.cos(y)*u,o+Math.sin(y)*u]});if(l=qe(l),l=qe(l),l=qe(l),r()>.4){const u=Math.floor(r()*3)+1;for(let p=0;p<u;p++){const y=Math.floor(r()*l.length);l[y]=[l[y][0]+(r()-.5)*12,l[y][1]+(r()-.5)*12]}}return`polygon(${l.map(([u,p])=>[Math.max(1,Math.min(99,Math.round(u))),Math.max(1,Math.min(99,Math.round(p)))]).map(([u,p])=>`${u}% ${p}%`).join(", ")})`},Ba=h.img`
  width: 100%;
  max-width: 320px;
  margin-top: 12px;
  box-shadow: 0 6px 18px rgba(var(--shadow-rgb), 0.08);
  transition: transform 220ms ease, box-shadow 220ms ease;
  border-radius: 10px;
  object-fit: cover;

  /* procedurally generated large blob clip-path (65% - 91% radius) */
  ${({shapeIndex:e=0})=>`clip-path: ${Va(e,7)};`}

  &:hover {
    transform: translateY(-6px) scale(1.02) rotate(-0.6deg);
    box-shadow: 0 16px 36px rgba(var(--shadow-rgb), 0.12);
  }
`,Ua=h.button`
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
`,Ga=h.div`
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
`;function Ha(){const[e,t]=m.useState({}),[r,i]=m.useState(!1),n=m.useRef(null),a=m.useRef(null),o=m.useRef(null),s=m.useRef(null),l=m.useRef(null),d=m.useRef(null),u=m.useRef(null),p=m.useMemo(()=>({main:n,invitation:a,gallery:o,liveStream:s,giftInfo:l,directions:d,messages:u}),[]);return m.useEffect(()=>{const y=/iPad|iPhone|iPod/.test(navigator.userAgent),k=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),b=new IntersectionObserver(f=>{f.forEach(g=>{g.isIntersecting&&t(w=>mt(X({},w),{[g.target.id]:!0}))})},{threshold:y?.05:k?.08:.1,rootMargin:y?"50px":"20px"});return Object.values(p).forEach(f=>{f.current&&b.observe(f.current)}),()=>{Object.values(p).forEach(f=>{f.current&&b.unobserve(f.current)})}},[p]),m.useEffect(()=>{const y=/iPad|iPhone|iPod/.test(navigator.userAgent),k=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);Er.init({duration:y?600:k?800:1e3,once:!0,disable:y&&window.innerWidth<768,throttleDelay:y?100:50})},[]),m.useEffect(()=>{if(/iPad|iPhone|iPod/.test(navigator.userAgent))return;const k=setTimeout(()=>{const f={density:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?8:15,sizeRange:[1,3],speedRange:[.3,.8]};try{return Dn(f)}catch(g){console.warn("Failed to start falling petals:",g);return}},100);return()=>{clearTimeout(k)}},[]),x(Ti,{children:[c(Qi,{}),c(H,{id:"main",ref:n,"data-aos":"fade-up",children:c(Sa,{})}),c("hr",{className:"separator"}),x(H,{id:"invitation",ref:a,"data-aos":"fade-up",children:[c(Z,{children:"Invitation"}),c(pa,{})]}),c("hr",{className:"separator"}),x(H,{id:"directions",ref:d,"data-aos":"fade-up",children:[c(Z,{children:"Place & Time"}),c(wa,{})]}),c("hr",{className:"separator"}),x(H,{id:"timeline","data-aos":"fade-up",children:[c(Z,{children:"Our Story Timeline"}),c(ja,{isCollapsed:!r,onExpand:()=>i(!0)})]}),c("hr",{className:"separator"}),x(H,{id:"liveStream",ref:s,"data-aos":"fade-up",children:[c(Z,{children:"Live Stream"}),c(Zn,{})]}),c("hr",{className:"separator"}),x(H,{id:"giftInfo",ref:l,"data-aos":"fade-up",children:[c(Z,{children:"Gift Information"}),c(Ve,{style:{textAlign:"center",padding:"1rem",maxWidth:"100%",overflow:"hidden"},children:c("p",{style:{fontSize:"clamp(0.8rem, 2.5vw, 1rem)",lineHeight:"1.4",maxWidth:"95%",margin:"0 auto",wordBreak:"break-word",hyphens:"auto",fontStyle:"italic"},children:"For our Indonesian friends who wish to send gifts"})}),c(Ei,{})]}),c("hr",{className:"separator"}),x(H,{id:"messages",ref:u,"data-aos":"fade-up",children:[c(Z,{children:"Messages to the Couple"}),c(sa,{})]}),c("hr",{className:"separator"}),x(H,{id:"gallery",ref:o,"data-aos":"fade-up",children:[c(Z,{children:"Gallery"}),c(Ui,{})]}),c("hr",{className:"separator",style:{marginBottom:"10px"}}),c(H,{id:"thankyou","data-aos":"fade-up",children:x(Ve,{style:{textAlign:"center",padding:"0.25rem 1rem 1.5rem 1rem",maxWidth:"100%",overflow:"hidden"},children:[c(Z,{style:{marginBottom:"1.5rem",fontSize:"clamp(1.5rem, 4vw, 2rem)",wordBreak:"break-word"},children:"Thank You!"}),c("p",{style:{fontSize:"clamp(0.9rem, 3vw, 1.1rem)",lineHeight:"1.6",maxWidth:"90%",margin:"0 auto",marginBottom:"1rem",wordBreak:"break-word",hyphens:"auto"},children:"Thank you for reading all the way here! Your presence in our lives means the world to us."}),c("p",{style:{fontSize:"clamp(1rem, 3.5vw, 1.2rem)",fontWeight:"bold",wordBreak:"break-word",maxWidth:"90%",margin:"0 auto"},children:"We hope to see you soon! 💕"}),c(Ve,{style:{textAlign:"center",padding:"0.25rem 1rem 1.5rem 1rem",maxWidth:"100%",overflow:"hidden"},children:c("img",{src:Fn,alt:"Whale and Seal",style:{marginTop:"1.5rem",maxWidth:"220px",width:"60%",height:"auto",display:"block",marginLeft:"auto",marginRight:"auto",opacity:.95}})})]})}),c(Pi,{isVisible:Object.values(e).some(Boolean)})]})}const Ve=h.div`
  color: rgb(var(--color-coral));
  font-family: inherit;
`;Ye.createRoot(document.getElementById("root")).render(c($t.StrictMode,{children:c(Ha,{})}))});export default Ya();
