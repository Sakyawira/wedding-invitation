var pr=Object.defineProperty,mr=Object.defineProperties;var gr=Object.getOwnPropertyDescriptors;var pt=Object.getOwnPropertySymbols;var br=Object.prototype.hasOwnProperty,vr=Object.prototype.propertyIsEnumerable;var De=(e,t,r)=>t in e?pr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,X=(e,t)=>{for(var r in t||(t={}))br.call(t,r)&&De(e,r,t[r]);if(pt)for(var r of pt(t))vr.call(t,r)&&De(e,r,t[r]);return e},mt=(e,t)=>mr(e,gr(t));var yr=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var O=(e,t,r)=>(De(e,typeof t!="symbol"?t+"":t,r),r);var de=(e,t,r)=>new Promise((i,n)=>{var a=l=>{try{s(r.next(l))}catch(d){n(d)}},o=l=>{try{s(r.throw(l))}catch(d){n(d)}},s=l=>l.done?i(l.value):Promise.resolve(l.value).then(a,o);s((r=r.apply(e,t)).next())});import{r as p,b as gt,a as wr,R as $t,d as xr}from"./vendor-ef013e4e.js";import{J as Sr,A as kr}from"./animations-d97477bb.js";import{I as Er,G as Cr,p as Rt}from"./gallery-1bdcb658.js";var Ba=yr(ur=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();var Nt={exports:{}},xe={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tr=p,Ir=Symbol.for("react.element"),Ar=Symbol.for("react.fragment"),Pr=Object.prototype.hasOwnProperty,Mr=Tr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Or={key:!0,ref:!0,__self:!0,__source:!0};function Lt(e,t,r){var i,n={},a=null,o=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(i in t)Pr.call(t,i)&&!Or.hasOwnProperty(i)&&(n[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)n[i]===void 0&&(n[i]=t[i]);return{$$typeof:Ir,type:e,key:a,ref:o,props:n,_owner:Mr.current}}xe.Fragment=Ar;xe.jsx=Lt;xe.jsxs=Lt;Nt.exports=xe;var ae=Nt.exports;function _r(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function $r(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Rr=function(){function e(r){var i=this;this._insertTag=function(n){var a;i.tags.length===0?i.insertionPoint?a=i.insertionPoint.nextSibling:i.prepend?a=i.container.firstChild:a=i.before:a=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(n,a),i.tags.push(n)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(i){i.forEach(this._insertTag)},t.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag($r(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var a=_r(n);try{a.insertRule(i,a.cssRules.length)}catch(o){}}else n.appendChild(document.createTextNode(i));this.ctr++},t.flush=function(){this.tags.forEach(function(i){return i.parentNode&&i.parentNode.removeChild(i)}),this.tags=[],this.ctr=0},e}(),N="-ms-",ve="-moz-",E="-webkit-",zt="comm",et="rule",tt="decl",Nr="@import",Dt="@keyframes",Lr="@layer",zr=Math.abs,Se=String.fromCharCode,Dr=Object.assign;function Fr(e,t){return R(e,0)^45?(((t<<2^R(e,0))<<2^R(e,1))<<2^R(e,2))<<2^R(e,3):0}function Ft(e){return e.trim()}function jr(e,t){return(e=t.exec(e))?e[0]:e}function C(e,t,r){return e.replace(t,r)}function Ve(e,t){return e.indexOf(t)}function R(e,t){return e.charCodeAt(t)|0}function oe(e,t,r){return e.slice(t,r)}function q(e){return e.length}function rt(e){return e.length}function ue(e,t){return t.push(e),e}function Wr(e,t){return e.map(t).join("")}var ke=1,te=1,jt=0,D=0,M=0,re="";function Ee(e,t,r,i,n,a,o){return{value:e,root:t,parent:r,type:i,props:n,children:a,line:ke,column:te,length:o,return:""}}function ie(e,t){return Dr(Ee("",null,null,"",null,null,0),e,{length:-e.length},t)}function qr(){return M}function Vr(){return M=D>0?R(re,--D):0,te--,M===10&&(te=1,ke--),M}function F(){return M=D<jt?R(re,D++):0,te++,M===10&&(te=1,ke++),M}function B(){return R(re,D)}function me(){return D}function le(e,t){return oe(re,e,t)}function se(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Wt(e){return ke=te=1,jt=q(re=e),D=0,[]}function qt(e){return re="",e}function ge(e){return Ft(le(D-1,Be(e===91?e+2:e===40?e+1:e)))}function Br(e){for(;(M=B())&&M<33;)F();return se(e)>2||se(M)>3?"":" "}function Ur(e,t){for(;--t&&F()&&!(M<48||M>102||M>57&&M<65||M>70&&M<97););return le(e,me()+(t<6&&B()==32&&F()==32))}function Be(e){for(;F();)switch(M){case e:return D;case 34:case 39:e!==34&&e!==39&&Be(M);break;case 40:e===41&&Be(e);break;case 92:F();break}return D}function Gr(e,t){for(;F()&&e+M!==47+10;)if(e+M===42+42&&B()===47)break;return"/*"+le(t,D-1)+"*"+Se(e===47?e:F())}function Hr(e){for(;!se(B());)F();return le(e,D)}function Yr(e){return qt(be("",null,null,null,[""],e=Wt(e),0,[0],e))}function be(e,t,r,i,n,a,o,s,l){for(var d=0,h=0,g=o,S=0,k=0,b=0,u=1,m=1,y=1,v=0,x="",W=n,L=a,$=i,T=x;m;)switch(b=v,v=F()){case 40:if(b!=108&&R(T,g-1)==58){Ve(T+=C(ge(v),"&","&\f"),"&\f")!=-1&&(y=-1);break}case 34:case 39:case 91:T+=ge(v);break;case 9:case 10:case 13:case 32:T+=Br(b);break;case 92:T+=Ur(me()-1,7);continue;case 47:switch(B()){case 42:case 47:ue(Xr(Gr(F(),me()),t,r),l);break;default:T+="/"}break;case 123*u:s[d++]=q(T)*y;case 125*u:case 59:case 0:switch(v){case 0:case 125:m=0;case 59+h:y==-1&&(T=C(T,/\f/g,"")),k>0&&q(T)-g&&ue(k>32?vt(T+";",i,r,g-1):vt(C(T," ","")+";",i,r,g-2),l);break;case 59:T+=";";default:if(ue($=bt(T,t,r,d,h,n,s,x,W=[],L=[],g),a),v===123)if(h===0)be(T,t,$,$,W,a,g,s,L);else switch(S===99&&R(T,3)===110?100:S){case 100:case 108:case 109:case 115:be(e,$,$,i&&ue(bt(e,$,$,0,0,n,s,x,n,W=[],g),L),n,L,g,s,i?W:L);break;default:be(T,$,$,$,[""],L,0,s,L)}}d=h=k=0,u=y=1,x=T="",g=o;break;case 58:g=1+q(T),k=b;default:if(u<1){if(v==123)--u;else if(v==125&&u++==0&&Vr()==125)continue}switch(T+=Se(v),v*u){case 38:y=h>0?1:(T+="\f",-1);break;case 44:s[d++]=(q(T)-1)*y,y=1;break;case 64:B()===45&&(T+=ge(F())),S=B(),h=g=q(x=T+=Hr(me())),v++;break;case 45:b===45&&q(T)==2&&(u=0)}}return a}function bt(e,t,r,i,n,a,o,s,l,d,h){for(var g=n-1,S=n===0?a:[""],k=rt(S),b=0,u=0,m=0;b<i;++b)for(var y=0,v=oe(e,g+1,g=zr(u=o[b])),x=e;y<k;++y)(x=Ft(u>0?S[y]+" "+v:C(v,/&\f/g,S[y])))&&(l[m++]=x);return Ee(e,t,r,n===0?et:s,l,d,h)}function Xr(e,t,r){return Ee(e,t,r,zt,Se(qr()),oe(e,2,-2),0)}function vt(e,t,r,i){return Ee(e,t,r,tt,oe(e,0,i),oe(e,i+1,-1),i)}function ee(e,t){for(var r="",i=rt(e),n=0;n<i;n++)r+=t(e[n],n,e,t)||"";return r}function Zr(e,t,r,i){switch(e.type){case Lr:if(e.children.length)break;case Nr:case tt:return e.return=e.return||e.value;case zt:return"";case Dt:return e.return=e.value+"{"+ee(e.children,i)+"}";case et:e.value=e.props.join(",")}return q(r=ee(e.children,i))?e.return=e.value+"{"+r+"}":""}function Kr(e){var t=rt(e);return function(r,i,n,a){for(var o="",s=0;s<t;s++)o+=e[s](r,i,n,a)||"";return o}}function Jr(e){return function(t){t.root||(t=t.return)&&e(t)}}function Vt(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var Qr=function(t,r,i){for(var n=0,a=0;n=a,a=B(),n===38&&a===12&&(r[i]=1),!se(a);)F();return le(t,D)},en=function(t,r){var i=-1,n=44;do switch(se(n)){case 0:n===38&&B()===12&&(r[i]=1),t[i]+=Qr(D-1,r,i);break;case 2:t[i]+=ge(n);break;case 4:if(n===44){t[++i]=B()===58?"&\f":"",r[i]=t[i].length;break}default:t[i]+=Se(n)}while(n=F());return t},tn=function(t,r){return qt(en(Wt(t),r))},yt=new WeakMap,rn=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var r=t.value,i=t.parent,n=t.column===i.column&&t.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(t.props.length===1&&r.charCodeAt(0)!==58&&!yt.get(i))&&!n){yt.set(t,!0);for(var a=[],o=tn(r,a),s=i.props,l=0,d=0;l<o.length;l++)for(var h=0;h<s.length;h++,d++)t.props[d]=a[l]?o[l].replace(/&\f/g,s[h]):s[h]+" "+o[l]}}},nn=function(t){if(t.type==="decl"){var r=t.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(t.return="",t.value="")}};function Bt(e,t){switch(Fr(e,t)){case 5103:return E+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return E+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return E+e+ve+e+N+e+e;case 6828:case 4268:return E+e+N+e+e;case 6165:return E+e+N+"flex-"+e+e;case 5187:return E+e+C(e,/(\w+).+(:[^]+)/,E+"box-$1$2"+N+"flex-$1$2")+e;case 5443:return E+e+N+"flex-item-"+C(e,/flex-|-self/,"")+e;case 4675:return E+e+N+"flex-line-pack"+C(e,/align-content|flex-|-self/,"")+e;case 5548:return E+e+N+C(e,"shrink","negative")+e;case 5292:return E+e+N+C(e,"basis","preferred-size")+e;case 6060:return E+"box-"+C(e,"-grow","")+E+e+N+C(e,"grow","positive")+e;case 4554:return E+C(e,/([^-])(transform)/g,"$1"+E+"$2")+e;case 6187:return C(C(C(e,/(zoom-|grab)/,E+"$1"),/(image-set)/,E+"$1"),e,"")+e;case 5495:case 3959:return C(e,/(image-set\([^]*)/,E+"$1$`$1");case 4968:return C(C(e,/(.+:)(flex-)?(.*)/,E+"box-pack:$3"+N+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+E+e+e;case 4095:case 3583:case 4068:case 2532:return C(e,/(.+)-inline(.+)/,E+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(q(e)-1-t>6)switch(R(e,t+1)){case 109:if(R(e,t+4)!==45)break;case 102:return C(e,/(.+:)(.+)-([^]+)/,"$1"+E+"$2-$3$1"+ve+(R(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ve(e,"stretch")?Bt(C(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(R(e,t+1)!==115)break;case 6444:switch(R(e,q(e)-3-(~Ve(e,"!important")&&10))){case 107:return C(e,":",":"+E)+e;case 101:return C(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+E+(R(e,14)===45?"inline-":"")+"box$3$1"+E+"$2$3$1"+N+"$2box$3")+e}break;case 5936:switch(R(e,t+11)){case 114:return E+e+N+C(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return E+e+N+C(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return E+e+N+C(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return E+e+N+e+e}return e}var an=function(t,r,i,n){if(t.length>-1&&!t.return)switch(t.type){case tt:t.return=Bt(t.value,t.length);break;case Dt:return ee([ie(t,{value:C(t.value,"@","@"+E)})],n);case et:if(t.length)return Wr(t.props,function(a){switch(jr(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ee([ie(t,{props:[C(a,/:(read-\w+)/,":"+ve+"$1")]})],n);case"::placeholder":return ee([ie(t,{props:[C(a,/:(plac\w+)/,":"+E+"input-$1")]}),ie(t,{props:[C(a,/:(plac\w+)/,":"+ve+"$1")]}),ie(t,{props:[C(a,/:(plac\w+)/,N+"input-$1")]})],n)}return""})}},on=[an],sn=function(t){var r=t.key;if(r==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(u){var m=u.getAttribute("data-emotion");m.indexOf(" ")!==-1&&(document.head.appendChild(u),u.setAttribute("data-s",""))})}var n=t.stylisPlugins||on,a={},o,s=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(u){for(var m=u.getAttribute("data-emotion").split(" "),y=1;y<m.length;y++)a[m[y]]=!0;s.push(u)});var l,d=[rn,nn];{var h,g=[Zr,Jr(function(u){h.insert(u)})],S=Kr(d.concat(n,g)),k=function(m){return ee(Yr(m),S)};l=function(m,y,v,x){h=v,k(m?m+"{"+y.styles+"}":y.styles),x&&(b.inserted[y.name]=!0)}}var b={key:r,sheet:new Rr({key:r,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:a,registered:{},insert:l};return b.sheet.hydrate(s),b};function Ue(){return Ue=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},Ue.apply(this,arguments)}var Ut={exports:{}},I={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=typeof Symbol=="function"&&Symbol.for,nt=_?Symbol.for("react.element"):60103,it=_?Symbol.for("react.portal"):60106,Ce=_?Symbol.for("react.fragment"):60107,Te=_?Symbol.for("react.strict_mode"):60108,Ie=_?Symbol.for("react.profiler"):60114,Ae=_?Symbol.for("react.provider"):60109,Pe=_?Symbol.for("react.context"):60110,at=_?Symbol.for("react.async_mode"):60111,Me=_?Symbol.for("react.concurrent_mode"):60111,Oe=_?Symbol.for("react.forward_ref"):60112,_e=_?Symbol.for("react.suspense"):60113,cn=_?Symbol.for("react.suspense_list"):60120,$e=_?Symbol.for("react.memo"):60115,Re=_?Symbol.for("react.lazy"):60116,ln=_?Symbol.for("react.block"):60121,dn=_?Symbol.for("react.fundamental"):60117,un=_?Symbol.for("react.responder"):60118,fn=_?Symbol.for("react.scope"):60119;function j(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case nt:switch(e=e.type,e){case at:case Me:case Ce:case Ie:case Te:case _e:return e;default:switch(e=e&&e.$$typeof,e){case Pe:case Oe:case Re:case $e:case Ae:return e;default:return t}}case it:return t}}}function Gt(e){return j(e)===Me}I.AsyncMode=at;I.ConcurrentMode=Me;I.ContextConsumer=Pe;I.ContextProvider=Ae;I.Element=nt;I.ForwardRef=Oe;I.Fragment=Ce;I.Lazy=Re;I.Memo=$e;I.Portal=it;I.Profiler=Ie;I.StrictMode=Te;I.Suspense=_e;I.isAsyncMode=function(e){return Gt(e)||j(e)===at};I.isConcurrentMode=Gt;I.isContextConsumer=function(e){return j(e)===Pe};I.isContextProvider=function(e){return j(e)===Ae};I.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===nt};I.isForwardRef=function(e){return j(e)===Oe};I.isFragment=function(e){return j(e)===Ce};I.isLazy=function(e){return j(e)===Re};I.isMemo=function(e){return j(e)===$e};I.isPortal=function(e){return j(e)===it};I.isProfiler=function(e){return j(e)===Ie};I.isStrictMode=function(e){return j(e)===Te};I.isSuspense=function(e){return j(e)===_e};I.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ce||e===Me||e===Ie||e===Te||e===_e||e===cn||typeof e=="object"&&e!==null&&(e.$$typeof===Re||e.$$typeof===$e||e.$$typeof===Ae||e.$$typeof===Pe||e.$$typeof===Oe||e.$$typeof===dn||e.$$typeof===un||e.$$typeof===fn||e.$$typeof===ln)};I.typeOf=j;Ut.exports=I;var hn=Ut.exports,Ht=hn,pn={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},mn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Yt={};Yt[Ht.ForwardRef]=pn;Yt[Ht.Memo]=mn;var gn=!0;function Xt(e,t,r){var i="";return r.split(" ").forEach(function(n){e[n]!==void 0?t.push(e[n]+";"):i+=n+" "}),i}var ot=function(t,r,i){var n=t.key+"-"+r.name;(i===!1||gn===!1)&&t.registered[n]===void 0&&(t.registered[n]=r.styles)},Zt=function(t,r,i){ot(t,r,i);var n=t.key+"-"+r.name;if(t.inserted[r.name]===void 0){var a=r;do t.insert(r===a?"."+n:"",a,t.sheet,!0),a=a.next;while(a!==void 0)}};function bn(e){for(var t=0,r,i=0,n=e.length;n>=4;++i,n-=4)r=e.charCodeAt(i)&255|(e.charCodeAt(++i)&255)<<8|(e.charCodeAt(++i)&255)<<16|(e.charCodeAt(++i)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,t=(r&65535)*1540483477+((r>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(n){case 3:t^=(e.charCodeAt(i+2)&255)<<16;case 2:t^=(e.charCodeAt(i+1)&255)<<8;case 1:t^=e.charCodeAt(i)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var vn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},yn=/[A-Z]|^ms/g,wn=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Kt=function(t){return t.charCodeAt(1)===45},wt=function(t){return t!=null&&typeof t!="boolean"},Fe=Vt(function(e){return Kt(e)?e:e.replace(yn,"-$&").toLowerCase()}),xt=function(t,r){switch(t){case"animation":case"animationName":if(typeof r=="string")return r.replace(wn,function(i,n,a){return V={name:n,styles:a,next:V},n})}return vn[t]!==1&&!Kt(t)&&typeof r=="number"&&r!==0?r+"px":r};function ce(e,t,r){if(r==null)return"";if(r.__emotion_styles!==void 0)return r;switch(typeof r){case"boolean":return"";case"object":{if(r.anim===1)return V={name:r.name,styles:r.styles,next:V},r.name;if(r.styles!==void 0){var i=r.next;if(i!==void 0)for(;i!==void 0;)V={name:i.name,styles:i.styles,next:V},i=i.next;var n=r.styles+";";return n}return xn(e,t,r)}case"function":{if(e!==void 0){var a=V,o=r(e);return V=a,ce(e,t,o)}break}}if(t==null)return r;var s=t[r];return s!==void 0?s:r}function xn(e,t,r){var i="";if(Array.isArray(r))for(var n=0;n<r.length;n++)i+=ce(e,t,r[n])+";";else for(var a in r){var o=r[a];if(typeof o!="object")t!=null&&t[o]!==void 0?i+=a+"{"+t[o]+"}":wt(o)&&(i+=Fe(a)+":"+xt(a,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var s=0;s<o.length;s++)wt(o[s])&&(i+=Fe(a)+":"+xt(a,o[s])+";");else{var l=ce(e,t,o);switch(a){case"animation":case"animationName":{i+=Fe(a)+":"+l+";";break}default:i+=a+"{"+l+"}"}}}return i}var St=/label:\s*([^\s;\n{]+)\s*(;|$)/g,V,st=function(t,r,i){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var n=!0,a="";V=void 0;var o=t[0];o==null||o.raw===void 0?(n=!1,a+=ce(i,r,o)):a+=o[0];for(var s=1;s<t.length;s++)a+=ce(i,r,t[s]),n&&(a+=o[s]);St.lastIndex=0;for(var l="",d;(d=St.exec(a))!==null;)l+="-"+d[1];var h=bn(a)+l;return{name:h,styles:a,next:V}},Sn=function(t){return t()},kn=gt["useInsertionEffect"]?gt["useInsertionEffect"]:!1,Jt=kn||Sn,Ne={}.hasOwnProperty,Qt=p.createContext(typeof HTMLElement!="undefined"?sn({key:"css"}):null);Qt.Provider;var er=function(t){return p.forwardRef(function(r,i){var n=p.useContext(Qt);return t(r,n,i)})},tr=p.createContext({}),Ge="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",rr=function(t,r){var i={};for(var n in r)Ne.call(r,n)&&(i[n]=r[n]);return i[Ge]=t,i},En=function(t){var r=t.cache,i=t.serialized,n=t.isStringTag;return ot(r,i,n),Jt(function(){return Zt(r,i,n)}),null},Cn=er(function(e,t,r){var i=e.css;typeof i=="string"&&t.registered[i]!==void 0&&(i=t.registered[i]);var n=e[Ge],a=[i],o="";typeof e.className=="string"?o=Xt(t.registered,a,e.className):e.className!=null&&(o=e.className+" ");var s=st(a,void 0,p.useContext(tr));o+=t.key+"-"+s.name;var l={};for(var d in e)Ne.call(e,d)&&d!=="css"&&d!==Ge&&(l[d]=e[d]);return l.ref=r,l.className=o,p.createElement(p.Fragment,null,p.createElement(En,{cache:t,serialized:s,isStringTag:typeof n=="string"}),p.createElement(n,l))}),nr=Cn,ct=ae.Fragment;function c(e,t,r){return Ne.call(t,"css")?ae.jsx(nr,rr(e,t),r):ae.jsx(e,t,r)}function w(e,t,r){return Ne.call(t,"css")?ae.jsxs(nr,rr(e,t),r):ae.jsxs(e,t,r)}var He={},kt=wr;He.createRoot=kt.createRoot,He.hydrateRoot=kt.hydrateRoot;const Tn=.3,In=.1,An=.1,Pn=.5,Mn=.2,On=.5,Et=.5,_n=.02,je=200,$n=50,Rn=5e3;function Nn(){const e=navigator.deviceMemory,t=navigator.hardwareConcurrency||1;return e?e>=8?"high":e>=4?"medium":"low":t>=8?"high":t>=4?"medium":"low"}function Ln(e){const t=Nn(),r=Math.min(e,$n),i=window.innerWidth*window.innerHeight,n=400*800,a=Math.min(1,i/n);let o;switch(t){case"low":o=Math.min(r,25);break;case"medium":o=Math.min(r,35);break;case"high":o=r;break;default:o=Math.min(r,30)}return Math.max(10,Math.floor(o*a))}const we=class we{constructor(t,r,i,n){O(this,"x",0);O(this,"y",0);O(this,"size",0);O(this,"speed",0);O(this,"angle",0);O(this,"spin",0);O(this,"canvas");O(this,"ctx");O(this,"color");O(this,"windX",0);O(this,"windY",0);O(this,"windDecay",.96);O(this,"lastWindApplied",0);O(this,"isActive",!0);this.canvas=t;const a=t.getContext("2d");if(!a)throw new Error("Failed to get canvas rendering context");this.ctx=a,this.color=n,this.reset(r,i)}reset(t,r){const n=Math.max(this.canvas.width-20,20),a=Math.max(this.canvas.height-20,20);this.x=Math.random()*n,this.y=Math.random()*a-a;const o=Math.max(.25,Math.min(.7,this.canvas.width/400)),s=[Math.max(1,t[0]*o),Math.max(2.5,t[1]*o)];this.size=Math.random()*(s[1]-s[0])+s[0],this.speed=Math.random()*(r[1]-r[0])+r[0],this.angle=Math.random()*Math.PI*2,this.spin=Math.random()*.02-.01,this.windX=0,this.windY=0,this.isActive=!0}applyWind(t,r){if(!r||!this.isActive)return;const i=we.tempPoint;i.x=this.x-r.x,i.y=this.y-r.y;const n=i.x*i.x+i.y*i.y,a=je*je;if(n<a){const s=1-Math.sqrt(n)/je,l=t.x*(An+Math.random()*Pn)*s,d=t.y*(Mn+Math.random()*On)*s;this.windX=this.windX*this.windDecay+l*Et,this.windY=this.windY*this.windDecay+d*Et,this.lastWindApplied=Date.now()}}update(){if(!this.isActive)return;this.x+=this.windX,this.y+=this.speed+this.windY,this.angle+=this.spin+this.windX*_n;const t=50,r=-t,i=this.canvas.width+t,n=this.canvas.height+t;(this.y>n||this.x<r||this.x>i)&&this.reset([1,5],[.5,2]),this.windX*=this.windDecay,this.windY*=this.windDecay}draw(){if(!this.isActive)return;this.ctx.save(),this.ctx.translate(this.x,this.y),this.ctx.rotate(this.angle);const t=this.canvas.width<500;if(t?this.ctx.fillStyle=this.color.includes("0.7)")||this.color.includes("0.8)")?this.color.replace(/0\.[78]\)/,"0.9)"):this.color:this.ctx.fillStyle=this.color,this.ctx.beginPath(),this.ctx.ellipse(0,0,this.size,this.size*1.5,0,0,Math.PI*2),this.ctx.fill(),t&&this.size<4){const i=(n=>typeof window!="undefined"?getComputedStyle(document.documentElement).getPropertyValue(n).trim():"")("--color-peach");this.ctx.strokeStyle=i?`rgba(${i}, 0.3)`:"rgba(0,0,0,0)",this.ctx.lineWidth=.5,this.ctx.stroke()}this.ctx.restore()}deactivate(){this.isActive=!1}};O(we,"tempPoint",{x:0,y:0});let Ye=we;function zn({density:e=100,sizeRange:t=[1,5],speedRange:r=[.5,2],color:i}={}){const n=document.createElement("canvas");n.style.position="fixed",n.style.top="0",n.style.left="0",n.style.width="100%",n.style.height="100%",n.style.pointerEvents="none",n.style.zIndex="1",n.style.overflow="hidden",document.body.appendChild(n);const a=n.getContext("2d");if(!a)throw new Error("Failed to get canvas rendering context");const o=P=>typeof window!="undefined"?getComputedStyle(document.documentElement).getPropertyValue(P).trim():"",s=o("--color-pink"),l=o("--color-peach"),d=s?`rgba(${s}, 0.85)`:l?`rgba(${l}, 0.85)`:"rgba(0,0,0,0)",h=i||d,g=Ln(e),S=Array.from({length:g},()=>new Ye(n,t,r,h));function k(){n.width=window.innerWidth,n.height=window.innerHeight,S.forEach(P=>{P.reset(t,r),P.y=Math.random()*n.height-n.height*.5})}const b={x:0,y:0},u=.95;let m=!1,y={x:0,y:0},v=null,x={x:0,y:0},W,L=Date.now(),$=!1;const T=16;function Q(P){m=!0;const z="touches"in P?P.touches[0]:P;y={x:z.clientX,y:z.clientY}}function U(P){if(!m||$)return;$=!0,setTimeout(()=>{$=!1},T);const z="touches"in P?P.touches[0]:P,fr=z.clientX-y.x,hr=z.clientY-y.y;b.x=fr*Tn,b.y=hr*In,y={x:z.clientX,y:z.clientY}}function G(P){m=!1;const z="touches"in P&&P.changedTouches?P.changedTouches[0]:P;v={x:z.clientX,y:z.clientY},x=X({},b)}window.addEventListener("mousedown",Q,{passive:!0}),window.addEventListener("mousemove",U,{passive:!0}),window.addEventListener("mouseup",G,{passive:!0}),window.addEventListener("touchstart",Q,{passive:!0}),window.addEventListener("touchmove",U,{passive:!0}),window.addEventListener("touchend",G,{passive:!0});function ht(){const P=Date.now();if(P-L>Rn){if(typeof window!="undefined"&&"gc"in window)try{window.gc()}catch(z){}L=P}a&&a.clearRect(0,0,n.width,n.height);for(const z of S)v&&(Math.abs(x.x)>.01||Math.abs(x.y)>.01)&&z.applyWind(x,v),z.update(),z.draw();m||(b.x*=u,b.y*=u,Math.abs(b.x)<.01&&(b.x=0),Math.abs(b.y)<.01&&(b.y=0),x.x*=u,x.y*=u,Math.abs(x.x)<.01&&(x.x=0),Math.abs(x.y)<.01&&(x.y=0),x.x===0&&x.y===0&&(v=null)),W=requestAnimationFrame(ht)}return window.addEventListener("resize",k),k(),ht(),()=>{cancelAnimationFrame(W),window.removeEventListener("mousedown",Q),window.removeEventListener("mousemove",U),window.removeEventListener("mouseup",G),window.removeEventListener("touchstart",Q),window.removeEventListener("touchmove",U),window.removeEventListener("touchend",G),window.removeEventListener("resize",k),S.forEach(P=>P.deactivate()),n.parentNode&&n.parentNode.removeChild(n)}}const Dn="/wedding-invitation/assets/images/whaleseal-04a2d9ba.png";var Fn=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,jn=Vt(function(e){return Fn.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function Wn(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return st(t)}var ir=function(){var t=Wn.apply(void 0,arguments),r="animation-"+t.name;return{name:r,styles:"@keyframes "+r+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},qn=jn,Vn=function(t){return t!=="theme"},Ct=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?qn:Vn},Tt=function(t,r,i){var n;if(r){var a=r.shouldForwardProp;n=t.__emotion_forwardProp&&a?function(o){return t.__emotion_forwardProp(o)&&a(o)}:a}return typeof n!="function"&&i&&(n=t.__emotion_forwardProp),n},Bn=function(t){var r=t.cache,i=t.serialized,n=t.isStringTag;return ot(r,i,n),Jt(function(){return Zt(r,i,n)}),null},Un=function e(t,r){var i=t.__emotion_real===t,n=i&&t.__emotion_base||t,a,o;r!==void 0&&(a=r.label,o=r.target);var s=Tt(t,r,i),l=s||Ct(n),d=!l("as");return function(){var h=arguments,g=i&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&g.push("label:"+a+";"),h[0]==null||h[0].raw===void 0)g.push.apply(g,h);else{g.push(h[0][0]);for(var S=h.length,k=1;k<S;k++)g.push(h[k],h[0][k])}var b=er(function(u,m,y){var v=d&&u.as||n,x="",W=[],L=u;if(u.theme==null){L={};for(var $ in u)L[$]=u[$];L.theme=p.useContext(tr)}typeof u.className=="string"?x=Xt(m.registered,W,u.className):u.className!=null&&(x=u.className+" ");var T=st(g.concat(W),m.registered,L);x+=m.key+"-"+T.name,o!==void 0&&(x+=" "+o);var Q=d&&s===void 0?Ct(v):l,U={};for(var G in u)d&&G==="as"||Q(G)&&(U[G]=u[G]);return U.className=x,U.ref=y,p.createElement(p.Fragment,null,p.createElement(Bn,{cache:m,serialized:T,isStringTag:typeof v=="string"}),p.createElement(v,U))});return b.displayName=a!==void 0?a:"Styled("+(typeof n=="string"?n:n.displayName||n.name||"Component")+")",b.defaultProps=t.defaultProps,b.__emotion_real=b,b.__emotion_base=n,b.__emotion_styles=g,b.__emotion_forwardProp=s,Object.defineProperty(b,"toString",{value:function(){return"."+o}}),b.withComponent=function(u,m){return e(u,Ue({},r,m,{shouldForwardProp:Tt(b,m,!0)})).apply(void 0,g)},b}},Gn=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],f=Un.bind();Gn.forEach(function(e){f[e]=f(e)});const Z=f.p`
  font-family: inherit;
  font-size: 1.5rem;
  margin: 10px;
  color: rgb(var(--color-coral));
  white-space: pre-line;
`,Hn=f.p`
  font-size: 1rem;
  margin: 10px;
  white-space: pre-line;
`,Xe=f.p`
  font-family: inherit;
  line-height: 1;
  margin: 0;
  color: rgb(var(--color-peach));
  white-space: pre-line;
`,Yn=f.p`
  line-height: 2.2rem;
  white-space: pre-line;
`,Ze=f.p`
  font-weight: 200;
  text-align: ${e=>e.textAlign?e.textAlign:"start"};
  white-space: pre-line;
`,H=f.section`
  padding: 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: rgb(var(--color-green));
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
`,Xn=()=>c(Zn,{children:c(Kn,{src:"https://www.youtube-nocookie.com/embed/_GQr5ciW8JI?si=hucyuZGTTEEGYthF&",title:"YouTube Live Stream",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),Zn=f.div`
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
`,Kn=f.iframe`
  width: 100%;
  height: 315px;
  border: none;
  border-radius: 8px;
`,Jn={title:`Sakyawira 💍 Debbie
We are getting married!`,message:`To our dear ones who have always warmed us with their love.
We invite you to share the precious moment of our first step as a married couple.

You'll find all the details about when and where below. And if you can't make it in person, no worries—there will be a livestream link so you can celebrate with us from anywhere!`,host:{groom:{name:"Sakyawira Ruslim",relation:"",parents:[]},bride:{name:"Debbie Hartono",relation:"",parents:[]},groomFather:{name:"Djajadi Ruslim & Silvi Oktavia Wijaya",relation:"Son of",parents:[]},brideFather:{name:"Aris Budiman Hartono & Karuniawati Tjahjadi",relation:"Daughter of ",parents:[]}},eventDetail:`February 28, 2026 (Saturday) 10:00
Duke & Duchess`},Qn=[{host:"Bride's Bank Account",accountInfo:[{name:"Debbie Fiona",relation:"",bank:"Blu/ BCA Digital ",account:"005734429248",kakaopayAccount:"",tossAccount:""}]}],ei={address1:"Duke & Duchess",address2:"Jl. Achmad Adnawijaya No.132, Tegal Gundil, Kec. Bogor Utara, Kota Bogor, Jawa Barat 16152, Indonesia",googleMap:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7926.966471849799!2d106.8161017!3d-6.5866957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5e7ff9b0813%3A0x2861e1a0fa389449!2sDuke%20and%20Duchess!5e0!3m2!1sen!2snz!4v1746278676549!5m2!1sen!2snz",lat:37.54222,lon:126.952708},ti=[{title:"📅 Time",desc:"February 28, 2026 (Saturday) 10:00"},{title:"📍 Place",desc:"Duke & Duchess, Jl. Achmad Adnawijaya No.132, Tegal Gundil, Kec. Bogor Utara, Kota Bogor, Jawa Barat 16152, Indonesia"}],ri=["❤️","💛","💌","🥺","🥳","👰🏻‍","🤵🏻‍♂️","💝","✨","💍","💒","💕","😍","🔔","💘"],ne={greeting:Jn,hostInfo:Qn,mapInfo:ei,locationInfo:ti,emojis:ri},ni=e=>p.createElement("svg",X({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 -960 960 960",width:24},e),p.createElement("path",{d:"M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"})),ii="/wedding-invitation/assets/images/kakaopay-b0bb60b9.png",ai="/wedding-invitation/assets/images/toss-665116ae.png",oi=({name:e,relation:t,bank:r,account:i,kakaopayAccount:n,tossAccount:a})=>w(si,{children:[w(ci,{children:[c(li,{children:t}),c(di,{children:e})]}),w(ui,{children:[w(fi,{children:[r," ",i]}),c(hi,{onClick:()=>{navigator.clipboard.writeText(i).then(()=>{alert("Account number has been copied.😉😉")},()=>{alert("Failed to copy account number.🥲🥲")})},children:c(ni,{fill:"rgb(var(--color-peach))"})})]}),w(pi,{children:[n&&c(It,{href:n,target:"_blank",rel:"noreferrer",children:c(mi,{src:ii,alt:"kakaopay"})}),a&&c(It,{href:a,target:"_blank",rel:"noreferrer",children:c(gi,{src:ai,alt:"toss"})})]})]}),si=f.div`
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
`,ci=f.div`
  height: inherit;
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 5px 0;
`,li=f.span`
    color: rgb(var(--color-green));
`,di=f.span`
  font-size: 1rem;
`,ui=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,fi=f.div``,hi=f.button`
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  gap: 2px;
  outline: none;
  box-shadow: none;
    background: rgba(var(--surface-rgb), var(--surface-opacity));
`,pi=f.div`
  display: flex;
  width: 100%;
  gap: 2px;
`,It=f.button`
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
`.withComponent("a"),mi=f.img`
  width: 50px;
`,gi=f.img`
  width: 70px;
`,bi=e=>p.createElement("svg",X({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 -960 960 960",width:24},e),p.createElement("path",{d:"M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"})),vi=({title:e,children:t})=>{const[r,i]=p.useState(!1);return w(yi,{children:[w(wi,{isActive:r,onClick:()=>{i(!r)},children:[c("p",{children:e}),c("span",{children:c(Si,{})})]}),r&&c(xi,{children:t})]})},yi=f.div`
  font-family: inherit;
  border: 1px solid rgba(var(--color-pink), 0.9);
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
`,wi=f.div`
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
`,xi=f.div`
  font-size: 14px;
  text-align: justify;
  padding: 10px 20px;
  background-color: rgba(var(--surface-rgb), var(--surface-opacity));
`,Si=f(bi)`
  width: 18px;
  height: 18px;
  fill: rgba(var(--color-pink), 1) !important;
`,ki=()=>{const{hostInfo:e}=ne;return c(Ei,{children:e.map(t=>c(vi,{title:t.host,children:t.accountInfo.map(r=>c(oi,{name:r.name,relation:r.relation,bank:r.bank,account:r.account,kakaopayAccount:r.kakaopayAccount,tossAccount:r.tossAccount},r.name))},t.host))})},Ei=f.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  padding: 20px;
`,Ci=f.div`
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
`,Ti=e=>p.createElement("svg",X({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 -960 960 960",width:24},e),p.createElement("path",{d:"M440-501Zm0 381L313-234q-72-65-123.5-116t-85-96q-33.5-45-49-87T40-621q0-94 63-156.5T260-840q52 0 99 22t81 62q34-40 81-62t99-22q81 0 136 45.5T831-680h-85q-18-40-53-60t-73-20q-51 0-88 27.5T463-660h-46q-31-45-70.5-72.5T260-760q-57 0-98.5 39.5T120-621q0 33 14 67t50 78.5q36 44.5 98 104T440-228q26-23 61-53t56-50l9 9 19.5 19.5L605-283l9 9q-22 20-56 49.5T498-172l-58 52Zm280-160v-120H600v-80h120v-120h80v120h120v80H800v120h-80Z"})),Ii=e=>p.createElement("svg",X({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 -960 960 960",width:24},e),p.createElement("path",{d:"M720-80q-50 0-85-35t-35-85q0-7 1-14.5t3-13.5L322-392q-17 15-38 23.5t-44 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q23 0 44 8.5t38 23.5l282-164q-2-6-3-13.5t-1-14.5q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-23 0-44-8.5T638-672L356-508q2 6 3 13.5t1 14.5q0 7-1 14.5t-3 13.5l282 164q17-15 38-23.5t44-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-640q17 0 28.5-11.5T760-760q0-17-11.5-28.5T720-800q-17 0-28.5 11.5T680-760q0 17 11.5 28.5T720-720ZM240-440q17 0 28.5-11.5T280-480q0-17-11.5-28.5T240-520q-17 0-28.5 11.5T200-480q0 17 11.5 28.5T240-440Zm480 280q17 0 28.5-11.5T760-200q0-17-11.5-28.5T720-240q-17 0-28.5 11.5T680-200q0 17 11.5 28.5T720-160Zm0-600ZM240-480Zm480 280Z"})),Ai=e=>p.createElement("svg",X({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 -960 960 960",width:24},e),p.createElement("path",{d:"M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"})),We=f.button`
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
`.withComponent("a"),Pi=({isVisible:e})=>{const{emojis:t}=ne,r=()=>{navigator.clipboard.writeText(window.location.href).then(()=>{alert("Address copied successfully. 😉😉")},()=>{alert("Failed to copy the address. 🥲🥲")})},i=()=>{n.addConfetti({emojis:t})},n=new Sr;return w(Oi,{isVisible:e,children:[c(We,{onClick:i,children:c(Ti,{className:"floating-icon"})}),w(We,{onClick:r,children:[c(Ii,{className:"floating-icon"}),"Share"]}),w(We,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:[c(Ai,{className:"floating-icon"}),"Scroll Up"]})]})},Mi=ir`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`,Oi=f.nav`
  min-width: 280px;
  position: fixed;
  bottom: 30px;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  gap: 5px;
  display: ${e=>e.isVisible?"flex":"none"};
  animation: ${e=>e.isVisible?Mi:"none"} 0.5s ease-out;
`,_i="/wedding-invitation/assets/images/01-15be4fbb.jpg",$i="/wedding-invitation/assets/images/02-d5068223.jpg",Ri="/wedding-invitation/assets/images/03-2fa304fa.jpg",Ni="/wedding-invitation/assets/images/04-1b00c50a.jpg",lt="/wedding-invitation/assets/images/05-23035f3c.jpg",Li="/wedding-invitation/assets/images/06-10e36295.jpg",zi="/wedding-invitation/assets/images/07-c0b8fca0.jpg",Di="/wedding-invitation/assets/images/08-17704c28.jpg",Fi="/wedding-invitation/assets/images/09-0a42ab04.jpg",ji="/wedding-invitation/assets/images/10-4774c332.jpg",Wi="/wedding-invitation/assets/images/11-c97ae3e8.jpg",qi="/wedding-invitation/assets/images/12-3be7f6a8.jpg",Y=[{alt:"image01",source:_i,width:640,height:960},{alt:"image02",source:$i,width:640,height:960},{alt:"image03",source:Ri,width:640,height:960},{alt:"image04",source:Ni,width:640,height:960},{alt:"image05",source:lt,width:640,height:960},{alt:"image06",source:Li,width:640,height:960},{alt:"image07",source:zi,width:640,height:960},{alt:"image08",source:Di,width:640,height:960},{alt:"image09",source:Fi,width:640,height:960},{alt:"image10",source:ji,width:640,height:960},{alt:"image11",source:Wi,width:640,height:960},{alt:"image12",source:qi,width:640,height:960}],Vi=()=>{const e={cursor:"pointer",objectFit:"contain",width:"100px",height:"150px"},r=/iPad|iPhone|iPod/.test(navigator.userAgent)?Y.slice(0,8):Y;return c(Cr,{children:c("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 0fr)",gridGap:2},children:r.map((i,n)=>c(Er,{cropped:!0,original:i.source,thumbnail:i.source,width:i.width,height:i.height,children:({ref:a,open:o})=>c("img",{style:e,alt:i.alt,src:i.source,ref:a,onClick:o,loading:"lazy",decoding:"async"})},n))})})},Bi=()=>{const[e,t]=p.useState(!1);return w(Ui,{children:[w(Gi,{isMoreView:e,children:[!e&&c(Hi,{}),c(Vi,{})]}),!e&&c(Yi,{onClick:()=>{t(!e)},children:"Expand"})]})},Ui=f.div`
  margin: 30px 0;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Gi=f.div`
  position: relative;
  max-height: ${e=>e.isMoreView?"":"60vh"}; /* When isMoreView is true, no height limit; when false, limit to 195px */
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
`,Hi=f.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    transparent 0%,
    rgba(var(--surface-rgb), var(--surface-opacity)) 90%
  );
`,Yi=f.div`
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
`,Xi=f.div`
  position: fixed;
  inset: 0;
  z-index: -999;
  background-image: url(${lt});
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  filter: none;
  pointer-events: none;
`,Zi=f.div`
  position: fixed;
  inset: 0;
  z-index: -998;
  background: rgba(var(--surface-rgb), 0.18); /* subtle tint to match theme */
  pointer-events: none;
`;function Ki(){return w(ct,{children:[c(Xi,{}),c(Zi,{})]})}class Ji{constructor(){O(this,"formUrl");O(this,"nameFieldId");O(this,"messageFieldId");this.formUrl="https://docs.google.com/forms/d/e/1FAIpQLSdqh6LYuVn7Dqd7UgOLdgL3NS8aARLvi_P-HhXKSeBqfRGdSw/formResponse",this.nameFieldId="1920355118",this.messageFieldId="19176333"}appendEntry(t){return de(this,null,function*(){try{console.log("Attempting to submit to Google Form:",t);const r=new FormData;r.append(`entry.${this.nameFieldId}`,t.name),r.append(`entry.${this.messageFieldId}`,t.message);const i=yield fetch(this.formUrl,{method:"POST",body:r,mode:"no-cors"});return console.log("Form submission response status:",i.status),!0}catch(r){return console.error("Error submitting to Google Form:",r),!1}})}getEntries(){return de(this,null,function*(){try{const t={}.VITE_GOOGLE_SHEET_ID||"";if(!t)return console.warn("No spreadsheet ID configured for reading entries"),[];const r=`https://docs.google.com/spreadsheets/d/${t}/export?format=csv&gid=0`,i=yield fetch(r);if(!i.ok)throw new Error(`HTTP error! status: ${i.status}`);return(yield i.text()).split(`
`).slice(1).filter(s=>s.trim()).map(s=>{const[l,d,h]=s.split(",").map(g=>g.replace(/"/g,"").trim());return{name:d||"",message:h||"",timestamp:l||""}})}catch(t){return console.error("Error fetching from Google Sheets:",t),[]}})}}const Qi=new Ji,ea=()=>{const[e,t]=p.useState(""),[r,i]=p.useState(""),[n,a]=p.useState(!1);return w(ta,{onSubmit:s=>de(ur,null,function*(){if(s.preventDefault(),!e.trim()||!r.trim()){alert("Please fill in your name and message. 😢");return}if(e.length>50){alert("Name must be less than 50 characters. 😅");return}if(r.length>500){alert("Message must be less than 500 characters. 😅");return}a(!0);try{(yield Qi.appendEntry({name:e.trim(),message:r.trim(),timestamp:new Date().toISOString()}))?(t(""),i(""),alert("Thank you for your message! 💝")):alert("Sorry, there was an error submitting your message. Please try again. 😢")}catch(l){console.error("Error submitting message:",l),alert("Sorry, there was an error submitting your message. Please try again. 😢")}finally{a(!1)}}),children:[c(ra,{placeholder:"Name",type:"text",value:e,onChange:s=>t(s.target.value)}),c(na,{placeholder:"Message",value:r,onChange:s=>i(s.target.value)}),c(ia,{type:"submit",disabled:n,children:n?"Submitting...":"Submit"})]})},ta=f.form`
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: visible;
  align-items: center;
`,ra=f.input`
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
`,na=f.textarea`
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
`,ia=f.button`
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
`,aa=()=>w(oa,{children:[w(Hn,{children:["Please leave a message.",c("br",{}),"After the wedding, it will be delivered to the bride and groom."]}),c(ea,{})]}),oa=f.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 50px;
`,sa=()=>{const{groom:e,bride:t,groomFather:r,brideFather:i}=ne.greeting.host;return c(ct,{children:w(la,{children:[c("h2",{children:"Groom"}),c(fe,{person:e}),c(fe,{person:r}),c("span",{role:"img","aria-label":"pink heart",children:"💗"}),c("h2",{children:"Bride"}),c(fe,{person:t}),c(fe,{person:i})]})})},fe=({person:e})=>w(da,{children:[e.parents&&c(ct,{children:e.parents.map((t,r)=>w($t.Fragment,{children:[r>0&&" · ",t.name]},r))}),c(ua,{children:e.relation}),c(ca,{children:e.name})]}),ca=f.span`
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
`,la=f.div`
  gap: 8px;
  font-family: inherit;
  max-width: 100%;
  padding: 0 4px;
  box-sizing: border-box;
`,da=f.div`
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
`,ua=f.div`
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
`,fa=()=>{const{greeting:e,mapInfo:t,locationInfo:r}=ne;return p.useEffect(()=>{const i=new Date("2025-08-16T15:30:00"),n=new Date(i.getTime()+2*60*60*1e3),a=i.toISOString().replace(/[-:]/g,"").split(".")[0]+"Z",o=n.toISOString().replace(/[-:]/g,"").split(".")[0]+"Z",s=t.address1||r[1].desc||"",l=`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Sakyawira & Debbie Wedding")}&dates=${a}/${o}&details=${encodeURIComponent(e.message)}&location=${encodeURIComponent(s)}`,d=document.getElementById("google-calendar-link");d&&d.setAttribute("href",l)},[]),w(ha,{children:[c(pa,{children:e.message}),c(sa,{})]})},ha=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 0 16px;
  max-width: 100%;
`,pa=f(Yn)`
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
`,ma=({src:e})=>c(ga,{src:e,allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"}),ga=f.iframe`
  width: 100%;
  max-width: 400px;
  height: 250px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(var(--shadow-rgb), 0.12);
`,ba=f.button`
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
`.withComponent("a"),va=()=>{const{mapInfo:e,locationInfo:t,greeting:r}=ne,n=(()=>{const a=/([A-Za-z]+ \d{1,2}, \d{4}).*?(\d{1,2}:\d{2})/.exec(r.eventDetail);if(!a)return"#";const o=a[1],s=a[2],l=`${o} ${s}`,d=new Date(l+" GMT+0700"),h=v=>String(v).padStart(2,"0"),g=v=>v.getUTCFullYear()+h(v.getUTCMonth()+1)+h(v.getUTCDate())+"T"+h(v.getUTCHours())+h(v.getUTCMinutes())+"00Z",S=g(d),k=new Date(d.getTime()+2*60*60*1e3),b=g(k),u=encodeURIComponent("Sakyawira & Debbie Wedding"),m=encodeURIComponent(`Join us for the wedding celebration of Sakyawira and Debbie!

Location: ${e.address2}`),y=encodeURIComponent(e.address2);return`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${u}&dates=${S}/${b}&details=${m}&location=${y}&ctz=Asia/Jakarta`})();return w(ya,{children:[w(At,{children:[c(Xe,{children:t[1].title}),c(Ze,{children:t[1].desc}),c(ma,{src:e.googleMap})]}),w(At,{children:[c(Xe,{children:t[0].title}),c(Ze,{children:t[0].desc}),c(ba,{id:"google-calendar-link",target:"_blank",href:n,rel:"noreferrer",children:"Add to Calendar"})]})]})},ya=f.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`,At=f.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-top: 24px;
`,ar=ir`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,wa=()=>{const{greeting:e}=ne,t=typeof window!="undefined"?new URLSearchParams(window.location.search):null;let r=t?t.get("name"):null;if(r){try{r=decodeURIComponent(r)}catch(n){}r=r.trim().slice(0,50),r=r.replace(/([a-z])([A-Z])/g,"$1 $2")}const i=r?`Hi, ${r}! 💍 Sakya & Debbie are getting married - come celebrate! 🎉✨`:e.title;return w("div",{children:[c(xa,{src:lt}),c(Sa,{children:i})]})},xa=f.img`
  border-radius: 200px 200px 0 0;
  width: 90%;
  max-width: 450px;
  padding: 20px;
  animation: ${ar} 1s ease-out;
`,Sa=f.p`
  font-family: inherit;
  font-size: 2rem;
  color: rgb(var(--color-green));
  line-height: 120%;
  white-space: pre-line;
  margin: 10px 0;
  animation: ${ar} 1.2s ease-out;
`;var Le={},or={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function r(){for(var a="",o=0;o<arguments.length;o++){var s=arguments[o];s&&(a=n(a,i(s)))}return a}function i(a){if(typeof a=="string"||typeof a=="number")return a;if(typeof a!="object")return"";if(Array.isArray(a))return r.apply(null,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var o="";for(var s in a)t.call(a,s)&&a[s]&&(o=n(o,s));return o}function n(a,o){return o?a?a+" "+o:a+o:a}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(or);var sr=or.exports;Le.__esModule=!0;Le.default=void 0;var ka=dt(p),K=dt(Rt),Ea=dt(sr);function dt(e){return e&&e.__esModule?e:{default:e}}const cr=({animate:e=!0,className:t="",layout:r="2-columns",lineColor:i="#FFF",children:n})=>(typeof window=="object"&&document.documentElement.style.setProperty("--line-color",i),ka.default.createElement("div",{className:(0,Ea.default)(t,"vertical-timeline",{"vertical-timeline--animate":e,"vertical-timeline--two-columns":r==="2-columns","vertical-timeline--one-column-left":r==="1-column"||r==="1-column-left","vertical-timeline--one-column-right":r==="1-column-right"})},n));cr.propTypes={children:K.default.oneOfType([K.default.arrayOf(K.default.node),K.default.node]).isRequired,className:K.default.string,animate:K.default.bool,layout:K.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:K.default.string};var Ca=cr;Le.default=Ca;var ze={};function Ke(){return Ke=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},Ke.apply(this,arguments)}function Ta(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Je(e,t)}function Je(e,t){return Je=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},Je(e,t)}function Ia(e,t){if(e==null)return{};var r={},i=Object.keys(e),n,a;for(a=0;a<i.length;a++)n=i[a],!(t.indexOf(n)>=0)&&(r[n]=e[n]);return r}var Qe=new Map,he=new WeakMap,Pt=0,lr=void 0;function Aa(e){lr=e}function Pa(e){return e?(he.has(e)||(Pt+=1,he.set(e,Pt.toString())),he.get(e)):"0"}function Ma(e){return Object.keys(e).sort().filter(function(t){return e[t]!==void 0}).map(function(t){return t+"_"+(t==="root"?Pa(e.root):e[t])}).toString()}function Oa(e){var t=Ma(e),r=Qe.get(t);if(!r){var i=new Map,n,a=new IntersectionObserver(function(o){o.forEach(function(s){var l,d=s.isIntersecting&&n.some(function(h){return s.intersectionRatio>=h});e.trackVisibility&&typeof s.isVisible=="undefined"&&(s.isVisible=d),(l=i.get(s.target))==null||l.forEach(function(h){h(d,s)})})},e);n=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:a,elements:i},Qe.set(t,r)}return r}function ut(e,t,r,i){if(r===void 0&&(r={}),i===void 0&&(i=lr),typeof window.IntersectionObserver=="undefined"&&i!==void 0){var n=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),function(){}}var a=Oa(r),o=a.id,s=a.observer,l=a.elements,d=l.get(e)||[];return l.has(e)||l.set(e,d),d.push(t),s.observe(e),function(){d.splice(d.indexOf(t),1),d.length===0&&(l.delete(e),s.unobserve(e)),l.size===0&&(s.disconnect(),Qe.delete(o))}}var _a=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function Mt(e){return typeof e.children!="function"}var ye=function(e){Ta(t,e);function t(i){var n;return n=e.call(this,i)||this,n.node=null,n._unobserveCb=null,n.handleNode=function(a){n.node&&(n.unobserve(),!a&&!n.props.triggerOnce&&!n.props.skip&&n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=a||null,n.observeNode()},n.handleChange=function(a,o){a&&n.props.triggerOnce&&n.unobserve(),Mt(n.props)||n.setState({inView:a,entry:o}),n.props.onChange&&n.props.onChange(a,o)},n.state={inView:!!i.initialInView,entry:void 0},n}var r=t.prototype;return r.componentDidUpdate=function(n){(n.rootMargin!==this.props.rootMargin||n.root!==this.props.root||n.threshold!==this.props.threshold||n.skip!==this.props.skip||n.trackVisibility!==this.props.trackVisibility||n.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},r.componentWillUnmount=function(){this.unobserve(),this.node=null},r.observeNode=function(){if(!(!this.node||this.props.skip)){var n=this.props,a=n.threshold,o=n.root,s=n.rootMargin,l=n.trackVisibility,d=n.delay,h=n.fallbackInView;this._unobserveCb=ut(this.node,this.handleChange,{threshold:a,root:o,rootMargin:s,trackVisibility:l,delay:d},h)}},r.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},r.render=function(){if(!Mt(this.props)){var n=this.state,a=n.inView,o=n.entry;return this.props.children({inView:a,entry:o,ref:this.handleNode})}var s=this.props,l=s.children,d=s.as,h=Ia(s,_a);return p.createElement(d||"div",Ke({ref:this.handleNode},h),l)},t}(p.Component);ye.displayName="InView";ye.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};function $a(e){var t=e===void 0?{}:e,r=t.threshold,i=t.delay,n=t.trackVisibility,a=t.rootMargin,o=t.root,s=t.triggerOnce,l=t.skip,d=t.initialInView,h=t.fallbackInView,g=p.useRef(),S=p.useState({inView:!!d}),k=S[0],b=S[1],u=p.useCallback(function(y){g.current!==void 0&&(g.current(),g.current=void 0),!l&&y&&(g.current=ut(y,function(v,x){b({inView:v,entry:x}),x.isIntersecting&&s&&g.current&&(g.current(),g.current=void 0)},{root:o,rootMargin:a,threshold:r,trackVisibility:n,delay:i},h))},[Array.isArray(r)?r.toString():r,o,a,s,l,n,h,i]);p.useEffect(function(){!g.current&&k.entry&&!s&&!l&&b({inView:!!d})});var m=[u,k.inView,k.entry];return m.ref=m[0],m.inView=m[1],m.entry=m[2],m}const Ra=Object.freeze(Object.defineProperty({__proto__:null,InView:ye,default:ye,defaultFallbackInView:Aa,observe:ut,useInView:$a},Symbol.toStringTag,{value:"Module"})),Na=xr(Ra);ze.__esModule=!0;ze.default=void 0;var J=ft(p),A=ft(Rt),pe=ft(sr),La=Na;function ft(e){return e&&e.__esModule?e:{default:e}}const dr=({children:e="",className:t="",contentArrowStyle:r=null,contentStyle:i=null,date:n="",dateClassName:a="",icon:o=null,iconClassName:s="",iconOnClick:l=null,onTimelineElementClick:d=null,iconStyle:h=null,id:g="",position:S="",style:k=null,textClassName:b="",intersectionObserverProps:u={rootMargin:"0px 0px -40px 0px",triggerOnce:!0},visible:m=!1,shadowSize:y="small"})=>J.default.createElement(La.InView,u,({inView:v,ref:x})=>J.default.createElement("div",{ref:x,id:g,className:(0,pe.default)(t,"vertical-timeline-element",{"vertical-timeline-element--left":S==="left","vertical-timeline-element--right":S==="right","vertical-timeline-element--no-children":e===""}),style:k},J.default.createElement(J.default.Fragment,null,J.default.createElement("span",{style:h,onClick:l,className:(0,pe.default)(s,"vertical-timeline-element-icon",`shadow-size-${y}`,{"bounce-in":v||m,"is-hidden":!(v||m)})},o),J.default.createElement("div",{style:i,onClick:d,className:(0,pe.default)(b,"vertical-timeline-element-content",{"bounce-in":v||m,"is-hidden":!(v||m)})},J.default.createElement("div",{style:r,className:"vertical-timeline-element-content-arrow"}),e,J.default.createElement("span",{className:(0,pe.default)(a,"vertical-timeline-element-date")},n)))));dr.propTypes={children:A.default.oneOfType([A.default.arrayOf(A.default.node),A.default.node]),className:A.default.string,contentArrowStyle:A.default.shape({}),contentStyle:A.default.shape({}),date:A.default.node,dateClassName:A.default.string,icon:A.default.element,iconClassName:A.default.string,iconStyle:A.default.shape({}),iconOnClick:A.default.func,onTimelineElementClick:A.default.func,id:A.default.string,position:A.default.string,style:A.default.shape({}),textClassName:A.default.string,visible:A.default.bool,shadowSize:A.default.string,intersectionObserverProps:A.default.shape({root:A.default.object,rootMargin:A.default.string,threshold:A.default.number,triggerOnce:A.default.bool})};var za=dr;ze.default=za;var Ot={VerticalTimeline:Le.default,VerticalTimelineElement:ze.default};const _t=[{date:"2015",title:"Strangers to Best Friends",description:"A school project brought us together for a couple photo. Fate?",image:Y[0].source},{date:"2017",title:"Winning a Short Movie Competition",description:"It was a romance movie, but we were just friends. Or so we thought.",image:Y[1].source},{date:"2019",title:"Annual Catchup",description:"The ocean kept us apart, but we always found time once a year.",image:Y[2].source},{date:"2022",title:"Officially more than Friends",description:"Debbie’s birthday. This time, we’re not just friends.",image:Y[3].source},{date:"2023",title:"First Year Together",description:"Long distance, good food, and a lot of calls.",image:Y[5].source},{date:"Q2 2024",title:"Engaged!",description:"Somewhere in Southeast Asia, she said yes.",image:Y[6].source},{date:"Q4 2024",title:"Holiday in Bali",description:"Last deep breath before the chaos of immigration and weddding prep.",image:Y[7].source}],Da=({isCollapsed:e=!1,onExpand:t})=>w(Fa,{style:{position:"relative",width:"100%",maxWidth:500},children:[c(Ot.VerticalTimeline,{lineColor:"rgba(var(--color-pink), 0.95)",children:(e?_t.slice(0,1):_t).map((i,n)=>w(Ot.VerticalTimelineElement,{date:i.date,dateClassName:"timeline-date-centered",iconStyle:{background:"rgba(var(--color-pink), 0.95)",color:"rgb(var(--color-white))",boxShadow:"0 0 0 4px rgba(var(--color-pink), 0.9)"},contentStyle:{background:"transparent",color:"rgb(var(--muted-text-rgb))",border:"1px solid rgba(var(--color-pink), 0.9)"},contentArrowStyle:{borderRight:"7px solid rgba(var(--color-pink), 0.9)"},children:[c(Xe,{children:i.title}),c(Ze,{children:i.description}),c(ja,{src:i.image,alt:i.title}),e&&n===1-1&&c(Wa,{onClick:t,children:"Show Full Timeline"})]},n))}),e&&c(qa,{})]}),Fa=f.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  background: rgba(var(--surface-rgb, 255, 255, 255), var(--surface-opacity));
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(var(--color-pink), 0.08);
  padding: 20px 0;
  position: relative;
`,ja=f.img`
  width: 100%;
  max-width: 320px;
  border-radius: 12px;
  margin-top: 12px;
  box-shadow: 0 2px 8px rgba(var(--color-pink), 0.1);
`,Wa=f.button`
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
`,qa=f.div`
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
`;function Va(){const[e,t]=p.useState({}),[r,i]=p.useState(!1),n=p.useRef(null),a=p.useRef(null),o=p.useRef(null),s=p.useRef(null),l=p.useRef(null),d=p.useRef(null),h=p.useRef(null),g=p.useMemo(()=>({main:n,invitation:a,gallery:o,liveStream:s,giftInfo:l,directions:d,messages:h}),[]);return p.useEffect(()=>{const S=/iPad|iPhone|iPod/.test(navigator.userAgent),k=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),b=new IntersectionObserver(u=>{u.forEach(m=>{m.isIntersecting&&t(y=>mt(X({},y),{[m.target.id]:!0}))})},{threshold:S?.05:k?.08:.1,rootMargin:S?"50px":"20px"});return Object.values(g).forEach(u=>{u.current&&b.observe(u.current)}),()=>{Object.values(g).forEach(u=>{u.current&&b.unobserve(u.current)})}},[g]),p.useEffect(()=>{const S=/iPad|iPhone|iPod/.test(navigator.userAgent),k=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);kr.init({duration:S?600:k?800:1e3,once:!0,disable:S&&window.innerWidth<768,throttleDelay:S?100:50})},[]),p.useEffect(()=>{if(/iPad|iPhone|iPod/.test(navigator.userAgent))return;const k=setTimeout(()=>{const u={density:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?8:15,sizeRange:[1,3],speedRange:[.3,.8]};try{return zn(u)}catch(m){console.warn("Failed to start falling petals:",m);return}},100);return()=>{clearTimeout(k)}},[]),w(Ci,{children:[c(Ki,{}),c(H,{id:"main",ref:n,"data-aos":"fade-up",children:c(wa,{})}),c("hr",{className:"separator"}),w(H,{id:"invitation",ref:a,"data-aos":"fade-up",children:[c(Z,{children:"Invitation"}),c(fa,{})]}),c("hr",{className:"separator"}),w(H,{id:"directions",ref:d,"data-aos":"fade-up",children:[c(Z,{children:"Place & Time"}),c(va,{})]}),c("hr",{className:"separator"}),w(H,{id:"timeline","data-aos":"fade-up",children:[c(Z,{children:"Our Story Timeline"}),c(Da,{isCollapsed:!r,onExpand:()=>i(!0)})]}),c("hr",{className:"separator"}),w(H,{id:"liveStream",ref:s,"data-aos":"fade-up",children:[c(Z,{children:"Live Stream"}),c(Xn,{})]}),c("hr",{className:"separator"}),w(H,{id:"giftInfo",ref:l,"data-aos":"fade-up",children:[c(Z,{children:"Gift Information"}),c(qe,{style:{textAlign:"center",padding:"1rem",maxWidth:"100%",overflow:"hidden"},children:c("p",{style:{fontSize:"clamp(0.8rem, 2.5vw, 1rem)",lineHeight:"1.4",maxWidth:"95%",margin:"0 auto",wordBreak:"break-word",hyphens:"auto",fontStyle:"italic"},children:"For our Indonesian friends who wish to send gifts"})}),c(ki,{})]}),c("hr",{className:"separator"}),w(H,{id:"messages",ref:h,"data-aos":"fade-up",children:[c(Z,{children:"Messages to the Couple"}),c(aa,{})]}),c("hr",{className:"separator"}),w(H,{id:"gallery",ref:o,"data-aos":"fade-up",children:[c(Z,{children:"Gallery"}),c(Bi,{})]}),c("hr",{className:"separator",style:{marginBottom:"10px"}}),c(H,{id:"thankyou","data-aos":"fade-up",children:w(qe,{style:{textAlign:"center",padding:"0.25rem 1rem 1.5rem 1rem",maxWidth:"100%",overflow:"hidden"},children:[c(Z,{style:{marginBottom:"1.5rem",fontSize:"clamp(1.5rem, 4vw, 2rem)",wordBreak:"break-word"},children:"Thank You!"}),c("p",{style:{fontSize:"clamp(0.9rem, 3vw, 1.1rem)",lineHeight:"1.6",maxWidth:"90%",margin:"0 auto",marginBottom:"1rem",wordBreak:"break-word",hyphens:"auto"},children:"Thank you for reading all the way here! Your presence in our lives means the world to us."}),c("p",{style:{fontSize:"clamp(1rem, 3.5vw, 1.2rem)",fontWeight:"bold",wordBreak:"break-word",maxWidth:"90%",margin:"0 auto"},children:"We hope to see you soon! 💕"}),c(qe,{style:{textAlign:"center",padding:"0.25rem 1rem 1.5rem 1rem",maxWidth:"100%",overflow:"hidden"},children:c("img",{src:Dn,alt:"Whale and Seal",style:{marginTop:"1.5rem",maxWidth:"220px",width:"60%",height:"auto",display:"block",marginLeft:"auto",marginRight:"auto",opacity:.95}})})]})}),c(Pi,{isVisible:Object.values(e).some(Boolean)})]})}const qe=f.div`
  color: rgb(var(--color-coral));
  font-family: inherit;
`;He.createRoot(document.getElementById("root")).render(c($t.StrictMode,{children:c(Va,{})}))});export default Ba();
