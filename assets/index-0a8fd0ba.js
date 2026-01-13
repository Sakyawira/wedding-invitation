var mr=Object.defineProperty,pr=Object.defineProperties;var gr=Object.getOwnPropertyDescriptors;var ft=Object.getOwnPropertySymbols;var br=Object.prototype.hasOwnProperty,vr=Object.prototype.propertyIsEnumerable;var Le=(e,t,r)=>t in e?mr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,re=(e,t)=>{for(var r in t||(t={}))br.call(t,r)&&Le(e,r,t[r]);if(ft)for(var r of ft(t))vr.call(t,r)&&Le(e,r,t[r]);return e},ht=(e,t)=>pr(e,gr(t));var yr=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var O=(e,t,r)=>(Le(e,typeof t!="symbol"?t+"":t,r),r);var de=(e,t,r)=>new Promise((i,n)=>{var a=c=>{try{s(r.next(c))}catch(d){n(d)}},o=c=>{try{s(r.throw(c))}catch(d){n(d)}},s=c=>c.done?i(c.value):Promise.resolve(c.value).then(a,o);s((r=r.apply(e,t)).next())});import{r as g,b as mt,a as wr,R as _t,d as xr}from"./vendor-ef013e4e.js";import{J as Sr,A as kr}from"./animations-d97477bb.js";import{I as Er,G as Cr,p as $t}from"./gallery-1bdcb658.js";var xa=yr(ur=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();var Rt={exports:{}},xe={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pr=g,Mr=Symbol.for("react.element"),Tr=Symbol.for("react.fragment"),Ir=Object.prototype.hasOwnProperty,Ar=Pr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Or={key:!0,ref:!0,__self:!0,__source:!0};function Nt(e,t,r){var i,n={},a=null,o=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(i in t)Ir.call(t,i)&&!Or.hasOwnProperty(i)&&(n[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)n[i]===void 0&&(n[i]=t[i]);return{$$typeof:Mr,type:e,key:a,ref:o,props:n,_owner:Ar.current}}xe.Fragment=Tr;xe.jsx=Nt;xe.jsxs=Nt;Rt.exports=xe;var ie=Rt.exports;function _r(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function $r(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Rr=function(){function e(r){var i=this;this._insertTag=function(n){var a;i.tags.length===0?i.insertionPoint?a=i.insertionPoint.nextSibling:i.prepend?a=i.container.firstChild:a=i.before:a=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(n,a),i.tags.push(n)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(i){i.forEach(this._insertTag)},t.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag($r(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var a=_r(n);try{a.insertRule(i,a.cssRules.length)}catch(o){}}else n.appendChild(document.createTextNode(i));this.ctr++},t.flush=function(){this.tags.forEach(function(i){return i.parentNode&&i.parentNode.removeChild(i)}),this.tags=[],this.ctr=0},e}(),N="-ms-",ve="-moz-",k="-webkit-",Dt="comm",Qe="rule",et="decl",Nr="@import",zt="@keyframes",Dr="@layer",zr=Math.abs,Se=String.fromCharCode,Lr=Object.assign;function Fr(e,t){return R(e,0)^45?(((t<<2^R(e,0))<<2^R(e,1))<<2^R(e,2))<<2^R(e,3):0}function Lt(e){return e.trim()}function jr(e,t){return(e=t.exec(e))?e[0]:e}function E(e,t,r){return e.replace(t,r)}function Ve(e,t){return e.indexOf(t)}function R(e,t){return e.charCodeAt(t)|0}function ae(e,t,r){return e.slice(t,r)}function B(e){return e.length}function tt(e){return e.length}function ue(e,t){return t.push(e),e}function Wr(e,t){return e.map(t).join("")}var ke=1,ee=1,Ft=0,L=0,A=0,te="";function Ee(e,t,r,i,n,a,o){return{value:e,root:t,parent:r,type:i,props:n,children:a,line:ke,column:ee,length:o,return:""}}function ne(e,t){return Lr(Ee("",null,null,"",null,null,0),e,{length:-e.length},t)}function Vr(){return A}function Br(){return A=L>0?R(te,--L):0,ee--,A===10&&(ee=1,ke--),A}function F(){return A=L<Ft?R(te,L++):0,ee++,A===10&&(ee=1,ke++),A}function Y(){return R(te,L)}function pe(){return L}function ce(e,t){return ae(te,e,t)}function oe(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function jt(e){return ke=ee=1,Ft=B(te=e),L=0,[]}function Wt(e){return te="",e}function ge(e){return Lt(ce(L-1,Be(e===91?e+2:e===40?e+1:e)))}function Ur(e){for(;(A=Y())&&A<33;)F();return oe(e)>2||oe(A)>3?"":" "}function Yr(e,t){for(;--t&&F()&&!(A<48||A>102||A>57&&A<65||A>70&&A<97););return ce(e,pe()+(t<6&&Y()==32&&F()==32))}function Be(e){for(;F();)switch(A){case e:return L;case 34:case 39:e!==34&&e!==39&&Be(A);break;case 40:e===41&&Be(e);break;case 92:F();break}return L}function Gr(e,t){for(;F()&&e+A!==47+10;)if(e+A===42+42&&Y()===47)break;return"/*"+ce(t,L-1)+"*"+Se(e===47?e:F())}function qr(e){for(;!oe(Y());)F();return ce(e,L)}function Hr(e){return Wt(be("",null,null,null,[""],e=jt(e),0,[0],e))}function be(e,t,r,i,n,a,o,s,c){for(var d=0,u=0,h=o,y=0,S=0,p=0,f=1,m=1,w=1,b=0,x="",V=n,D=a,$=i,C=x;m;)switch(p=b,b=F()){case 40:if(p!=108&&R(C,h-1)==58){Ve(C+=E(ge(b),"&","&\f"),"&\f")!=-1&&(w=-1);break}case 34:case 39:case 91:C+=ge(b);break;case 9:case 10:case 13:case 32:C+=Ur(p);break;case 92:C+=Yr(pe()-1,7);continue;case 47:switch(Y()){case 42:case 47:ue(Xr(Gr(F(),pe()),t,r),c);break;default:C+="/"}break;case 123*f:s[d++]=B(C)*w;case 125*f:case 59:case 0:switch(b){case 0:case 125:m=0;case 59+u:w==-1&&(C=E(C,/\f/g,"")),S>0&&B(C)-h&&ue(S>32?gt(C+";",i,r,h-1):gt(E(C," ","")+";",i,r,h-2),c);break;case 59:C+=";";default:if(ue($=pt(C,t,r,d,u,n,s,x,V=[],D=[],h),a),b===123)if(u===0)be(C,t,$,$,V,a,h,s,D);else switch(y===99&&R(C,3)===110?100:y){case 100:case 108:case 109:case 115:be(e,$,$,i&&ue(pt(e,$,$,0,0,n,s,x,n,V=[],h),D),n,D,h,s,i?V:D);break;default:be(C,$,$,$,[""],D,0,s,D)}}d=u=S=0,f=w=1,x=C="",h=o;break;case 58:h=1+B(C),S=p;default:if(f<1){if(b==123)--f;else if(b==125&&f++==0&&Br()==125)continue}switch(C+=Se(b),b*f){case 38:w=u>0?1:(C+="\f",-1);break;case 44:s[d++]=(B(C)-1)*w,w=1;break;case 64:Y()===45&&(C+=ge(F())),y=Y(),u=h=B(x=C+=qr(pe())),b++;break;case 45:p===45&&B(C)==2&&(f=0)}}return a}function pt(e,t,r,i,n,a,o,s,c,d,u){for(var h=n-1,y=n===0?a:[""],S=tt(y),p=0,f=0,m=0;p<i;++p)for(var w=0,b=ae(e,h+1,h=zr(f=o[p])),x=e;w<S;++w)(x=Lt(f>0?y[w]+" "+b:E(b,/&\f/g,y[w])))&&(c[m++]=x);return Ee(e,t,r,n===0?Qe:s,c,d,u)}function Xr(e,t,r){return Ee(e,t,r,Dt,Se(Vr()),ae(e,2,-2),0)}function gt(e,t,r,i){return Ee(e,t,r,et,ae(e,0,i),ae(e,i+1,-1),i)}function Q(e,t){for(var r="",i=tt(e),n=0;n<i;n++)r+=t(e[n],n,e,t)||"";return r}function Zr(e,t,r,i){switch(e.type){case Dr:if(e.children.length)break;case Nr:case et:return e.return=e.return||e.value;case Dt:return"";case zt:return e.return=e.value+"{"+Q(e.children,i)+"}";case Qe:e.value=e.props.join(",")}return B(r=Q(e.children,i))?e.return=e.value+"{"+r+"}":""}function Kr(e){var t=tt(e);return function(r,i,n,a){for(var o="",s=0;s<t;s++)o+=e[s](r,i,n,a)||"";return o}}function Jr(e){return function(t){t.root||(t=t.return)&&e(t)}}function Vt(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var Qr=function(t,r,i){for(var n=0,a=0;n=a,a=Y(),n===38&&a===12&&(r[i]=1),!oe(a);)F();return ce(t,L)},en=function(t,r){var i=-1,n=44;do switch(oe(n)){case 0:n===38&&Y()===12&&(r[i]=1),t[i]+=Qr(L-1,r,i);break;case 2:t[i]+=ge(n);break;case 4:if(n===44){t[++i]=Y()===58?"&\f":"",r[i]=t[i].length;break}default:t[i]+=Se(n)}while(n=F());return t},tn=function(t,r){return Wt(en(jt(t),r))},bt=new WeakMap,rn=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var r=t.value,i=t.parent,n=t.column===i.column&&t.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(t.props.length===1&&r.charCodeAt(0)!==58&&!bt.get(i))&&!n){bt.set(t,!0);for(var a=[],o=tn(r,a),s=i.props,c=0,d=0;c<o.length;c++)for(var u=0;u<s.length;u++,d++)t.props[d]=a[c]?o[c].replace(/&\f/g,s[u]):s[u]+" "+o[c]}}},nn=function(t){if(t.type==="decl"){var r=t.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(t.return="",t.value="")}};function Bt(e,t){switch(Fr(e,t)){case 5103:return k+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return k+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return k+e+ve+e+N+e+e;case 6828:case 4268:return k+e+N+e+e;case 6165:return k+e+N+"flex-"+e+e;case 5187:return k+e+E(e,/(\w+).+(:[^]+)/,k+"box-$1$2"+N+"flex-$1$2")+e;case 5443:return k+e+N+"flex-item-"+E(e,/flex-|-self/,"")+e;case 4675:return k+e+N+"flex-line-pack"+E(e,/align-content|flex-|-self/,"")+e;case 5548:return k+e+N+E(e,"shrink","negative")+e;case 5292:return k+e+N+E(e,"basis","preferred-size")+e;case 6060:return k+"box-"+E(e,"-grow","")+k+e+N+E(e,"grow","positive")+e;case 4554:return k+E(e,/([^-])(transform)/g,"$1"+k+"$2")+e;case 6187:return E(E(E(e,/(zoom-|grab)/,k+"$1"),/(image-set)/,k+"$1"),e,"")+e;case 5495:case 3959:return E(e,/(image-set\([^]*)/,k+"$1$`$1");case 4968:return E(E(e,/(.+:)(flex-)?(.*)/,k+"box-pack:$3"+N+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+k+e+e;case 4095:case 3583:case 4068:case 2532:return E(e,/(.+)-inline(.+)/,k+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(B(e)-1-t>6)switch(R(e,t+1)){case 109:if(R(e,t+4)!==45)break;case 102:return E(e,/(.+:)(.+)-([^]+)/,"$1"+k+"$2-$3$1"+ve+(R(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ve(e,"stretch")?Bt(E(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(R(e,t+1)!==115)break;case 6444:switch(R(e,B(e)-3-(~Ve(e,"!important")&&10))){case 107:return E(e,":",":"+k)+e;case 101:return E(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+k+(R(e,14)===45?"inline-":"")+"box$3$1"+k+"$2$3$1"+N+"$2box$3")+e}break;case 5936:switch(R(e,t+11)){case 114:return k+e+N+E(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return k+e+N+E(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return k+e+N+E(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return k+e+N+e+e}return e}var an=function(t,r,i,n){if(t.length>-1&&!t.return)switch(t.type){case et:t.return=Bt(t.value,t.length);break;case zt:return Q([ne(t,{value:E(t.value,"@","@"+k)})],n);case Qe:if(t.length)return Wr(t.props,function(a){switch(jr(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Q([ne(t,{props:[E(a,/:(read-\w+)/,":"+ve+"$1")]})],n);case"::placeholder":return Q([ne(t,{props:[E(a,/:(plac\w+)/,":"+k+"input-$1")]}),ne(t,{props:[E(a,/:(plac\w+)/,":"+ve+"$1")]}),ne(t,{props:[E(a,/:(plac\w+)/,N+"input-$1")]})],n)}return""})}},on=[an],sn=function(t){var r=t.key;if(r==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(f){var m=f.getAttribute("data-emotion");m.indexOf(" ")!==-1&&(document.head.appendChild(f),f.setAttribute("data-s",""))})}var n=t.stylisPlugins||on,a={},o,s=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(f){for(var m=f.getAttribute("data-emotion").split(" "),w=1;w<m.length;w++)a[m[w]]=!0;s.push(f)});var c,d=[rn,nn];{var u,h=[Zr,Jr(function(f){u.insert(f)})],y=Kr(d.concat(n,h)),S=function(m){return Q(Hr(m),y)};c=function(m,w,b,x){u=b,S(m?m+"{"+w.styles+"}":w.styles),x&&(p.inserted[w.name]=!0)}}var p={key:r,sheet:new Rr({key:r,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:a,registered:{},insert:c};return p.sheet.hydrate(s),p};function Ue(){return Ue=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},Ue.apply(this,arguments)}var Ut={exports:{}},P={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=typeof Symbol=="function"&&Symbol.for,rt=_?Symbol.for("react.element"):60103,nt=_?Symbol.for("react.portal"):60106,Ce=_?Symbol.for("react.fragment"):60107,Pe=_?Symbol.for("react.strict_mode"):60108,Me=_?Symbol.for("react.profiler"):60114,Te=_?Symbol.for("react.provider"):60109,Ie=_?Symbol.for("react.context"):60110,it=_?Symbol.for("react.async_mode"):60111,Ae=_?Symbol.for("react.concurrent_mode"):60111,Oe=_?Symbol.for("react.forward_ref"):60112,_e=_?Symbol.for("react.suspense"):60113,cn=_?Symbol.for("react.suspense_list"):60120,$e=_?Symbol.for("react.memo"):60115,Re=_?Symbol.for("react.lazy"):60116,ln=_?Symbol.for("react.block"):60121,dn=_?Symbol.for("react.fundamental"):60117,un=_?Symbol.for("react.responder"):60118,fn=_?Symbol.for("react.scope"):60119;function j(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case rt:switch(e=e.type,e){case it:case Ae:case Ce:case Me:case Pe:case _e:return e;default:switch(e=e&&e.$$typeof,e){case Ie:case Oe:case Re:case $e:case Te:return e;default:return t}}case nt:return t}}}function Yt(e){return j(e)===Ae}P.AsyncMode=it;P.ConcurrentMode=Ae;P.ContextConsumer=Ie;P.ContextProvider=Te;P.Element=rt;P.ForwardRef=Oe;P.Fragment=Ce;P.Lazy=Re;P.Memo=$e;P.Portal=nt;P.Profiler=Me;P.StrictMode=Pe;P.Suspense=_e;P.isAsyncMode=function(e){return Yt(e)||j(e)===it};P.isConcurrentMode=Yt;P.isContextConsumer=function(e){return j(e)===Ie};P.isContextProvider=function(e){return j(e)===Te};P.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===rt};P.isForwardRef=function(e){return j(e)===Oe};P.isFragment=function(e){return j(e)===Ce};P.isLazy=function(e){return j(e)===Re};P.isMemo=function(e){return j(e)===$e};P.isPortal=function(e){return j(e)===nt};P.isProfiler=function(e){return j(e)===Me};P.isStrictMode=function(e){return j(e)===Pe};P.isSuspense=function(e){return j(e)===_e};P.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ce||e===Ae||e===Me||e===Pe||e===_e||e===cn||typeof e=="object"&&e!==null&&(e.$$typeof===Re||e.$$typeof===$e||e.$$typeof===Te||e.$$typeof===Ie||e.$$typeof===Oe||e.$$typeof===dn||e.$$typeof===un||e.$$typeof===fn||e.$$typeof===ln)};P.typeOf=j;Ut.exports=P;var hn=Ut.exports,Gt=hn,mn={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},pn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},qt={};qt[Gt.ForwardRef]=mn;qt[Gt.Memo]=pn;var gn=!0;function Ht(e,t,r){var i="";return r.split(" ").forEach(function(n){e[n]!==void 0?t.push(e[n]+";"):i+=n+" "}),i}var at=function(t,r,i){var n=t.key+"-"+r.name;(i===!1||gn===!1)&&t.registered[n]===void 0&&(t.registered[n]=r.styles)},Xt=function(t,r,i){at(t,r,i);var n=t.key+"-"+r.name;if(t.inserted[r.name]===void 0){var a=r;do t.insert(r===a?"."+n:"",a,t.sheet,!0),a=a.next;while(a!==void 0)}};function bn(e){for(var t=0,r,i=0,n=e.length;n>=4;++i,n-=4)r=e.charCodeAt(i)&255|(e.charCodeAt(++i)&255)<<8|(e.charCodeAt(++i)&255)<<16|(e.charCodeAt(++i)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,t=(r&65535)*1540483477+((r>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(n){case 3:t^=(e.charCodeAt(i+2)&255)<<16;case 2:t^=(e.charCodeAt(i+1)&255)<<8;case 1:t^=e.charCodeAt(i)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var vn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},yn=/[A-Z]|^ms/g,wn=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Zt=function(t){return t.charCodeAt(1)===45},vt=function(t){return t!=null&&typeof t!="boolean"},Fe=Vt(function(e){return Zt(e)?e:e.replace(yn,"-$&").toLowerCase()}),yt=function(t,r){switch(t){case"animation":case"animationName":if(typeof r=="string")return r.replace(wn,function(i,n,a){return U={name:n,styles:a,next:U},n})}return vn[t]!==1&&!Zt(t)&&typeof r=="number"&&r!==0?r+"px":r};function se(e,t,r){if(r==null)return"";if(r.__emotion_styles!==void 0)return r;switch(typeof r){case"boolean":return"";case"object":{if(r.anim===1)return U={name:r.name,styles:r.styles,next:U},r.name;if(r.styles!==void 0){var i=r.next;if(i!==void 0)for(;i!==void 0;)U={name:i.name,styles:i.styles,next:U},i=i.next;var n=r.styles+";";return n}return xn(e,t,r)}case"function":{if(e!==void 0){var a=U,o=r(e);return U=a,se(e,t,o)}break}}if(t==null)return r;var s=t[r];return s!==void 0?s:r}function xn(e,t,r){var i="";if(Array.isArray(r))for(var n=0;n<r.length;n++)i+=se(e,t,r[n])+";";else for(var a in r){var o=r[a];if(typeof o!="object")t!=null&&t[o]!==void 0?i+=a+"{"+t[o]+"}":vt(o)&&(i+=Fe(a)+":"+yt(a,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var s=0;s<o.length;s++)vt(o[s])&&(i+=Fe(a)+":"+yt(a,o[s])+";");else{var c=se(e,t,o);switch(a){case"animation":case"animationName":{i+=Fe(a)+":"+c+";";break}default:i+=a+"{"+c+"}"}}}return i}var wt=/label:\s*([^\s;\n{]+)\s*(;|$)/g,U,ot=function(t,r,i){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var n=!0,a="";U=void 0;var o=t[0];o==null||o.raw===void 0?(n=!1,a+=se(i,r,o)):a+=o[0];for(var s=1;s<t.length;s++)a+=se(i,r,t[s]),n&&(a+=o[s]);wt.lastIndex=0;for(var c="",d;(d=wt.exec(a))!==null;)c+="-"+d[1];var u=bn(a)+c;return{name:u,styles:a,next:U}},Sn=function(t){return t()},kn=mt["useInsertionEffect"]?mt["useInsertionEffect"]:!1,Kt=kn||Sn,Ne={}.hasOwnProperty,Jt=g.createContext(typeof HTMLElement!="undefined"?sn({key:"css"}):null);Jt.Provider;var Qt=function(t){return g.forwardRef(function(r,i){var n=g.useContext(Jt);return t(r,n,i)})},er=g.createContext({}),Ye="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",tr=function(t,r){var i={};for(var n in r)Ne.call(r,n)&&(i[n]=r[n]);return i[Ye]=t,i},En=function(t){var r=t.cache,i=t.serialized,n=t.isStringTag;return at(r,i,n),Kt(function(){return Xt(r,i,n)}),null},Cn=Qt(function(e,t,r){var i=e.css;typeof i=="string"&&t.registered[i]!==void 0&&(i=t.registered[i]);var n=e[Ye],a=[i],o="";typeof e.className=="string"?o=Ht(t.registered,a,e.className):e.className!=null&&(o=e.className+" ");var s=ot(a,void 0,g.useContext(er));o+=t.key+"-"+s.name;var c={};for(var d in e)Ne.call(e,d)&&d!=="css"&&d!==Ye&&(c[d]=e[d]);return c.ref=r,c.className=o,g.createElement(g.Fragment,null,g.createElement(En,{cache:t,serialized:s,isStringTag:typeof n=="string"}),g.createElement(n,c))}),rr=Cn,st=ie.Fragment;function l(e,t,r){return Ne.call(t,"css")?ie.jsx(rr,tr(e,t),r):ie.jsx(e,t,r)}function T(e,t,r){return Ne.call(t,"css")?ie.jsxs(rr,tr(e,t),r):ie.jsxs(e,t,r)}var Ge={},xt=wr;Ge.createRoot=xt.createRoot,Ge.hydrateRoot=xt.hydrateRoot;const Pn=.3,Mn=.1,Tn=.1,In=.5,An=.2,On=.5,St=.5,_n=.02,je=200,$n=50,Rn=5e3;function Nn(){const e=navigator.deviceMemory,t=navigator.hardwareConcurrency||1;return e?e>=8?"high":e>=4?"medium":"low":t>=8?"high":t>=4?"medium":"low"}function Dn(e){const t=Nn(),r=Math.min(e,$n),i=window.innerWidth*window.innerHeight,n=400*800,a=Math.min(1,i/n);let o;switch(t){case"low":o=Math.min(r,25);break;case"medium":o=Math.min(r,35);break;case"high":o=r;break;default:o=Math.min(r,30)}return Math.max(10,Math.floor(o*a))}const we=class we{constructor(t,r,i,n){O(this,"x",0);O(this,"y",0);O(this,"size",0);O(this,"speed",0);O(this,"angle",0);O(this,"spin",0);O(this,"canvas");O(this,"ctx");O(this,"color");O(this,"windX",0);O(this,"windY",0);O(this,"windDecay",.96);O(this,"lastWindApplied",0);O(this,"isActive",!0);this.canvas=t;const a=t.getContext("2d");if(!a)throw new Error("Failed to get canvas rendering context");this.ctx=a,this.color=n,this.reset(r,i)}reset(t,r){const n=Math.max(this.canvas.width-20,20),a=Math.max(this.canvas.height-20,20);this.x=Math.random()*n,this.y=Math.random()*a-a;const o=Math.max(.25,Math.min(.7,this.canvas.width/400)),s=[Math.max(1,t[0]*o),Math.max(2.5,t[1]*o)];this.size=Math.random()*(s[1]-s[0])+s[0],this.speed=Math.random()*(r[1]-r[0])+r[0],this.angle=Math.random()*Math.PI*2,this.spin=Math.random()*.02-.01,this.windX=0,this.windY=0,this.isActive=!0}applyWind(t,r){if(!r||!this.isActive)return;const i=we.tempPoint;i.x=this.x-r.x,i.y=this.y-r.y;const n=i.x*i.x+i.y*i.y,a=je*je;if(n<a){const s=1-Math.sqrt(n)/je,c=t.x*(Tn+Math.random()*In)*s,d=t.y*(An+Math.random()*On)*s;this.windX=this.windX*this.windDecay+c*St,this.windY=this.windY*this.windDecay+d*St,this.lastWindApplied=Date.now()}}update(){if(!this.isActive)return;this.x+=this.windX,this.y+=this.speed+this.windY,this.angle+=this.spin+this.windX*_n;const t=50,r=-t,i=this.canvas.width+t,n=this.canvas.height+t;(this.y>n||this.x<r||this.x>i)&&this.reset([1,5],[.5,2]),this.windX*=this.windDecay,this.windY*=this.windDecay}draw(){if(!this.isActive)return;this.ctx.save(),this.ctx.translate(this.x,this.y),this.ctx.rotate(this.angle);const t=this.canvas.width<500;if(t?this.ctx.fillStyle=this.color.includes("0.7)")||this.color.includes("0.8)")?this.color.replace(/0\.[78]\)/,"0.9)"):this.color:this.ctx.fillStyle=this.color,this.ctx.beginPath(),this.ctx.ellipse(0,0,this.size,this.size*1.5,0,0,Math.PI*2),this.ctx.fill(),t&&this.size<4){const i=(n=>typeof window!="undefined"?getComputedStyle(document.documentElement).getPropertyValue(n).trim():"")("--color-peach");this.ctx.strokeStyle=i?`rgba(${i}, 0.3)`:"rgba(0,0,0,0)",this.ctx.lineWidth=.5,this.ctx.stroke()}this.ctx.restore()}deactivate(){this.isActive=!1}};O(we,"tempPoint",{x:0,y:0});let qe=we;function zn({density:e=100,sizeRange:t=[1,5],speedRange:r=[.5,2],color:i}={}){const n=document.createElement("canvas");n.style.position="fixed",n.style.top="0",n.style.left="0",n.style.width="100%",n.style.height="100%",n.style.pointerEvents="none",n.style.zIndex="1",n.style.overflow="hidden",document.body.appendChild(n);const a=n.getContext("2d");if(!a)throw new Error("Failed to get canvas rendering context");const o=I=>typeof window!="undefined"?getComputedStyle(document.documentElement).getPropertyValue(I).trim():"",s=o("--color-pink"),c=o("--color-peach"),d=s?`rgba(${s}, 0.85)`:c?`rgba(${c}, 0.85)`:"rgba(0,0,0,0)",u=i||d,h=Dn(e),y=Array.from({length:h},()=>new qe(n,t,r,u));function S(){n.width=window.innerWidth,n.height=window.innerHeight,y.forEach(I=>{I.reset(t,r),I.y=Math.random()*n.height-n.height*.5})}const p={x:0,y:0},f=.95;let m=!1,w={x:0,y:0},b=null,x={x:0,y:0},V,D=Date.now(),$=!1;const C=16;function K(I){m=!0;const z="touches"in I?I.touches[0]:I;w={x:z.clientX,y:z.clientY}}function G(I){if(!m||$)return;$=!0,setTimeout(()=>{$=!1},C);const z="touches"in I?I.touches[0]:I,fr=z.clientX-w.x,hr=z.clientY-w.y;p.x=fr*Pn,p.y=hr*Mn,w={x:z.clientX,y:z.clientY}}function q(I){m=!1;const z="touches"in I&&I.changedTouches?I.changedTouches[0]:I;b={x:z.clientX,y:z.clientY},x=re({},p)}window.addEventListener("mousedown",K,{passive:!0}),window.addEventListener("mousemove",G,{passive:!0}),window.addEventListener("mouseup",q,{passive:!0}),window.addEventListener("touchstart",K,{passive:!0}),window.addEventListener("touchmove",G,{passive:!0}),window.addEventListener("touchend",q,{passive:!0});function ut(){const I=Date.now();if(I-D>Rn){if(typeof window!="undefined"&&"gc"in window)try{window.gc()}catch(z){}D=I}a&&a.clearRect(0,0,n.width,n.height);for(const z of y)b&&(Math.abs(x.x)>.01||Math.abs(x.y)>.01)&&z.applyWind(x,b),z.update(),z.draw();m||(p.x*=f,p.y*=f,Math.abs(p.x)<.01&&(p.x=0),Math.abs(p.y)<.01&&(p.y=0),x.x*=f,x.y*=f,Math.abs(x.x)<.01&&(x.x=0),Math.abs(x.y)<.01&&(x.y=0),x.x===0&&x.y===0&&(b=null)),V=requestAnimationFrame(ut)}return window.addEventListener("resize",S),S(),ut(),()=>{cancelAnimationFrame(V),window.removeEventListener("mousedown",K),window.removeEventListener("mousemove",G),window.removeEventListener("mouseup",q),window.removeEventListener("touchstart",K),window.removeEventListener("touchmove",G),window.removeEventListener("touchend",q),window.removeEventListener("resize",S),y.forEach(I=>I.deactivate()),n.parentNode&&n.parentNode.removeChild(n)}}const Ln="/wedding-invitation/assets/images/whaleseal-04a2d9ba.png";var Fn=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,jn=Vt(function(e){return Fn.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function Wn(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return ot(t)}var nr=function(){var t=Wn.apply(void 0,arguments),r="animation-"+t.name;return{name:r,styles:"@keyframes "+r+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Vn=jn,Bn=function(t){return t!=="theme"},kt=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?Vn:Bn},Et=function(t,r,i){var n;if(r){var a=r.shouldForwardProp;n=t.__emotion_forwardProp&&a?function(o){return t.__emotion_forwardProp(o)&&a(o)}:a}return typeof n!="function"&&i&&(n=t.__emotion_forwardProp),n},Un=function(t){var r=t.cache,i=t.serialized,n=t.isStringTag;return at(r,i,n),Kt(function(){return Xt(r,i,n)}),null},Yn=function e(t,r){var i=t.__emotion_real===t,n=i&&t.__emotion_base||t,a,o;r!==void 0&&(a=r.label,o=r.target);var s=Et(t,r,i),c=s||kt(n),d=!c("as");return function(){var u=arguments,h=i&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&h.push("label:"+a+";"),u[0]==null||u[0].raw===void 0)h.push.apply(h,u);else{h.push(u[0][0]);for(var y=u.length,S=1;S<y;S++)h.push(u[S],u[0][S])}var p=Qt(function(f,m,w){var b=d&&f.as||n,x="",V=[],D=f;if(f.theme==null){D={};for(var $ in f)D[$]=f[$];D.theme=g.useContext(er)}typeof f.className=="string"?x=Ht(m.registered,V,f.className):f.className!=null&&(x=f.className+" ");var C=ot(h.concat(V),m.registered,D);x+=m.key+"-"+C.name,o!==void 0&&(x+=" "+o);var K=d&&s===void 0?kt(b):c,G={};for(var q in f)d&&q==="as"||K(q)&&(G[q]=f[q]);return G.className=x,G.ref=w,g.createElement(g.Fragment,null,g.createElement(Un,{cache:m,serialized:C,isStringTag:typeof b=="string"}),g.createElement(b,G))});return p.displayName=a!==void 0?a:"Styled("+(typeof n=="string"?n:n.displayName||n.name||"Component")+")",p.defaultProps=t.defaultProps,p.__emotion_real=p,p.__emotion_base=n,p.__emotion_styles=h,p.__emotion_forwardProp=s,Object.defineProperty(p,"toString",{value:function(){return"."+o}}),p.withComponent=function(f,m){return e(f,Ue({},r,m,{shouldForwardProp:Et(p,m,!0)})).apply(void 0,h)},p}},Gn=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],v=Yn.bind();Gn.forEach(function(e){v[e]=v(e)});const J=v.p`
  font-family: inherit;
  font-size: 1.5rem;
  margin: 10px;
  color: rgb(var(--color-coral));
  white-space: pre-line;
`,qn=v.p`
  font-size: 1rem;
  margin: 10px;
  white-space: pre-line;
`,He=v.p`
  font-family: inherit;
  line-height: 1;
  margin: 0;
  color: rgb(var(--color-peach));
  white-space: pre-line;
`,Hn=v.p`
  line-height: 2.2rem;
  white-space: pre-line;
`,Xe=v.p`
  font-weight: 200;
  text-align: ${e=>e.textAlign?e.textAlign:"start"};
  white-space: pre-line;
`,Z=v.section`
  padding: 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: rgb(var(--color-green));
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
`,Xn=v.div`
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
Duke & Duchess`},Kn=[{host:"Bride's Bank Account",accountInfo:[{name:"Debbie Fiona",relation:"",bank:"Blu/ BCA Digital ",account:"005734429248",kakaopayAccount:"",tossAccount:""}]}],Jn={address1:"Duke & Duchess",address2:"Jl. Achmad Adnawijaya No.132, Tegal Gundil, Kec. Bogor Utara, Kota Bogor, Jawa Barat 16152, Indonesia",googleMap:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7926.966471849799!2d106.8161017!3d-6.5866957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5e7ff9b0813%3A0x2861e1a0fa389449!2sDuke%20and%20Duchess!5e0!3m2!1sen!2snz!4v1746278676549!5m2!1sen!2snz",lat:37.54222,lon:126.952708},Qn=[{title:"📅 Time",desc:"February 28, 2026 (Saturday) 10:00 am"},{title:"📍 Place",desc:"Duke & Duchess, Jl. Achmad Adnawijaya No.132, Tegal Gundil, Kec. Bogor Utara, Kota Bogor, Jawa Barat 16152, Indonesia"}],ei=["❤️","💛","💌","🥺","🥳","👰🏻‍","🤵🏻‍♂️","💝","✨","💍","💒","💕","😍","🔔","💘"],le={greeting:Zn,hostInfo:Kn,mapInfo:Jn,locationInfo:Qn,emojis:ei},ti=e=>g.createElement("svg",re({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 -960 960 960",width:24},e),g.createElement("path",{d:"M440-501Zm0 381L313-234q-72-65-123.5-116t-85-96q-33.5-45-49-87T40-621q0-94 63-156.5T260-840q52 0 99 22t81 62q34-40 81-62t99-22q81 0 136 45.5T831-680h-85q-18-40-53-60t-73-20q-51 0-88 27.5T463-660h-46q-31-45-70.5-72.5T260-760q-57 0-98.5 39.5T120-621q0 33 14 67t50 78.5q36 44.5 98 104T440-228q26-23 61-53t56-50l9 9 19.5 19.5L605-283l9 9q-22 20-56 49.5T498-172l-58 52Zm280-160v-120H600v-80h120v-120h80v120h120v80H800v120h-80Z"})),ri=e=>g.createElement("svg",re({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 -960 960 960",width:24},e),g.createElement("path",{d:"M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"})),Ct=v.button`
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
`.withComponent("a"),ni=({isVisible:e})=>{const{emojis:t}=le,r=()=>{i.addConfetti({emojis:t})},i=new Sr;return T(ai,{isVisible:e,children:[l(Ct,{onClick:r,children:l(ti,{className:"floating-icon"})}),T(Ct,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:[l(ri,{className:"floating-icon"}),"Scroll Up"]})]})},ii=nr`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`,ai=v.nav`
  min-width: 280px;
  position: fixed;
  bottom: 30px;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  gap: 5px;
  display: ${e=>e.isVisible?"flex":"none"};
  animation: ${e=>e.isVisible?ii:"none"} 0.5s ease-out;
`,oi="/wedding-invitation/assets/images/01-15be4fbb.jpg",si="/wedding-invitation/assets/images/02-d5068223.jpg",ci="/wedding-invitation/assets/images/03-2fa304fa.jpg",li="/wedding-invitation/assets/images/04-1b00c50a.jpg",ir="/wedding-invitation/assets/images/05-4307a478.jpg",di="/wedding-invitation/assets/images/06-10e36295.jpg",ui="/wedding-invitation/assets/images/07-c0b8fca0.jpg",fi="/wedding-invitation/assets/images/08-17704c28.jpg",hi="/wedding-invitation/assets/images/09-840d74df.jpg",mi="/wedding-invitation/assets/images/10-563453ae.jpg",pi="/wedding-invitation/assets/images/11-c97ae3e8.jpg",gi="/wedding-invitation/assets/images/12-3be7f6a8.jpg",W=[{alt:"image01",source:oi,width:640,height:960},{alt:"image02",source:si,width:640,height:960},{alt:"image03",source:ci,width:640,height:960},{alt:"image04",source:li,width:640,height:960},{alt:"image05",source:ir,width:640,height:960},{alt:"image06",source:di,width:640,height:960},{alt:"image07",source:ui,width:640,height:960},{alt:"image08",source:fi,width:640,height:960},{alt:"image09",source:hi,width:640,height:960},{alt:"image10",source:mi,width:640,height:960},{alt:"image11",source:pi,width:640,height:960},{alt:"image12",source:gi,width:640,height:960}],bi=()=>{const e={cursor:"pointer",objectFit:"contain",width:"100px",height:"150px"},r=/iPad|iPhone|iPod/.test(navigator.userAgent)?W.slice(0,8):W;return l(Cr,{children:l("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 0fr)",gridGap:2},children:r.map((i,n)=>l(Er,{cropped:!0,original:i.source,thumbnail:i.source,width:i.width,height:i.height,children:({ref:a,open:o})=>l("img",{style:e,alt:i.alt,src:i.source,ref:a,onClick:o,loading:"lazy",decoding:"async"})},n))})})},vi=()=>{const[e,t]=g.useState(!1);return T(yi,{children:[T(wi,{isMoreView:e,children:[!e&&l(xi,{}),l(bi,{})]}),!e&&l(Si,{onClick:()=>{t(!e)},children:"Expand"})]})},yi=v.div`
  margin: 30px 0;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`,wi=v.div`
  position: relative;
  max-height: ${e=>e.isMoreView?"":"60vh"}; /* When isMoreView is true, no height limit; when false, limit to 195px */
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
`,xi=v.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    transparent 0%,
    rgba(var(--surface-rgb), var(--surface-opacity)) 90%
  );
`,Si=v.div`
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
`,ki="/wedding-invitation/assets/images/13-512a6958.jpg",Ei=v.div`
  position: fixed;
  inset: 0;
  z-index: -999;
  background-image: url(${ki});
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
`,Ci=v.div`
  position: fixed;
  inset: 0;
  z-index: -998;
  background: rgba(var(--surface-rgb), 0.18); /* subtle tint to match theme */
  pointer-events: none;
`;function Pi(){return T(st,{children:[l(Ei,{}),l(Ci,{})]})}class Mi{constructor(){O(this,"formUrl");O(this,"nameFieldId");O(this,"messageFieldId");this.formUrl="https://docs.google.com/forms/d/e/1FAIpQLSchKDsv33J8uYdJ6DPpO56ZNmYgzAm3_vFudhzXAz3vE-tvhA/formResponse",this.nameFieldId="1920355118",this.messageFieldId="19176333"}appendEntry(t){return de(this,null,function*(){try{console.log("Attempting to submit to Google Form:",t);const r=new FormData;r.append(`entry.${this.nameFieldId}`,t.name),r.append(`entry.${this.messageFieldId}`,t.message);const i=yield fetch(this.formUrl,{method:"POST",body:r,mode:"no-cors"});return console.log("Form submission response status:",i.status),!0}catch(r){return console.error("Error submitting to Google Form:",r),!1}})}getEntries(){return de(this,null,function*(){try{const t={}.VITE_GOOGLE_SHEET_ID||"";if(!t)return console.warn("No spreadsheet ID configured for reading entries"),[];const r=`https://docs.google.com/spreadsheets/d/${t}/export?format=csv&gid=0`,i=yield fetch(r);if(!i.ok)throw new Error(`HTTP error! status: ${i.status}`);return(yield i.text()).split(`
`).slice(1).filter(s=>s.trim()).map(s=>{const[c,d,u]=s.split(",").map(h=>h.replace(/"/g,"").trim());return{name:d||"",message:u||"",timestamp:c||""}})}catch(t){return console.error("Error fetching from Google Sheets:",t),[]}})}}const Ti=new Mi,Ii=()=>{const[e,t]=g.useState(""),[r,i]=g.useState(""),[n,a]=g.useState(!1);return T(Ai,{onSubmit:s=>de(ur,null,function*(){if(s.preventDefault(),!e.trim()||!r.trim()){alert("Please fill in your name and message. 😢");return}if(e.length>50){alert("Name must be less than 50 characters. 😅");return}if(r.length>500){alert("Message must be less than 500 characters. 😅");return}a(!0);try{(yield Ti.appendEntry({name:e.trim(),message:r.trim(),timestamp:new Date().toISOString()}))?(t(""),i(""),alert("Thank you for your confirmation! 💝")):alert("Sorry, there was an error submitting your message. Please try again. 😢")}catch(c){console.error("Error submitting message:",c),alert("Sorry, there was an error submitting your message. Please try again. 😢")}finally{a(!1)}}),children:[l(Oi,{placeholder:"Name",type:"text",value:e,onChange:s=>t(s.target.value)}),l(_i,{placeholder:"Are you coming? (Yes/No)",value:r,onChange:s=>i(s.target.value)}),l($i,{type:"submit",disabled:n,children:n?"Submitting...":"Submit"})]})},Ai=v.form`
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: visible;
  align-items: center;
`,Oi=v.input`
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
`,_i=v.textarea`
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
`,$i=v.button`
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
`,Ri=()=>T(Ni,{children:[T(qn,{children:["Please confirm whether you will attend our wedding!",l("br",{}),"We would love to know before January 28, 2026. 💌"]}),l(Ii,{})]}),Ni=v.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 50px;
`,Di=()=>{const{groom:e,bride:t,groomFather:r,brideFather:i}=le.greeting.host;return l(st,{children:T(Li,{children:[l("h2",{children:"Groom"}),l(fe,{person:e}),l(fe,{person:r}),l("span",{role:"img","aria-label":"pink heart",children:"💗"}),l("h2",{children:"Bride"}),l(fe,{person:t}),l(fe,{person:i})]})})},fe=({person:e})=>T(Fi,{children:[e.parents&&l(st,{children:e.parents.map((t,r)=>T(_t.Fragment,{children:[r>0&&" · ",t.name]},r))}),l(ji,{children:e.relation}),l(zi,{children:e.name})]}),zi=v.span`
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
`,Li=v.div`
  gap: 8px;
  font-family: inherit;
  max-width: 100%;
  padding: 0 4px;
  box-sizing: border-box;
`,Fi=v.div`
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
`,ji=v.div`
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
`,Wi=()=>{const{greeting:e,mapInfo:t,locationInfo:r}=le;return g.useEffect(()=>{const i=new Date("2025-08-16T15:30:00"),n=new Date(i.getTime()+2*60*60*1e3),a=i.toISOString().replace(/[-:]/g,"").split(".")[0]+"Z",o=n.toISOString().replace(/[-:]/g,"").split(".")[0]+"Z",s=t.address1||r[1].desc||"",c=`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Sakyawira & Debbie Wedding")}&dates=${a}/${o}&details=${encodeURIComponent(e.message)}&location=${encodeURIComponent(s)}`,d=document.getElementById("google-calendar-link");d&&d.setAttribute("href",c)},[]),T(Vi,{children:[l(Bi,{children:e.message}),l(Di,{})]})},Vi=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 0 16px;
  max-width: 100%;
`,Bi=v(Hn)`
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
`,Ui=({src:e})=>l(Yi,{src:e,allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"}),Yi=v.iframe`
  width: 100%;
  max-width: 400px;
  height: 250px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(var(--shadow-rgb), 0.12);
`,Gi=v.button`
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
`.withComponent("a"),qi=()=>{const{mapInfo:e,locationInfo:t,greeting:r}=le,n=(()=>{const a=/([A-Za-z]+ \d{1,2}, \d{4}).*?(\d{1,2}:\d{2})/.exec(r.eventDetail);if(!a)return"#";const o=a[1],s=a[2],c=`${o} ${s}`,d=new Date(c+" GMT+0700"),u=b=>String(b).padStart(2,"0"),h=b=>b.getUTCFullYear()+u(b.getUTCMonth()+1)+u(b.getUTCDate())+"T"+u(b.getUTCHours())+u(b.getUTCMinutes())+"00Z",y=h(d),S=new Date(d.getTime()+2*60*60*1e3),p=h(S),f=encodeURIComponent("Sakyawira & Debbie Wedding"),m=encodeURIComponent(`Join us for the wedding celebration of Sakyawira and Debbie!

Location: ${e.address2}`),w=encodeURIComponent(e.address2);return`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${f}&dates=${y}/${p}&details=${m}&location=${w}&ctz=Asia/Jakarta`})();return T(Hi,{children:[T(Pt,{children:[l(He,{children:t[1].title}),l(Xe,{children:t[1].desc}),l(Ui,{src:e.googleMap})]}),T(Pt,{children:[l(He,{children:t[0].title}),l(Xe,{children:t[0].desc}),l(Gi,{id:"google-calendar-link",target:"_blank",href:n,rel:"noreferrer",children:"Add to Calendar"})]})]})},Hi=v.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`,Pt=v.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-top: 24px;
`,ar=nr`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,Xi=()=>{const{greeting:e}=le,t=typeof window!="undefined"?new URLSearchParams(window.location.search):null;let r=t?t.get("name"):null;if(r){try{r=decodeURIComponent(r)}catch(n){}r=r.trim().slice(0,50),r=r.replace(/([a-z])([A-Z])/g,"$1 $2")}const i=r?`Hi, ${r}! 💍 Sakya & Debbie got married - come celebrate! 🎉✨`:e.title;return T("div",{children:[l(Zi,{src:ir}),l(Ki,{children:i})]})},Zi=v.img`
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
`,Ki=v.p`
  font-family: inherit;
  font-size: 2rem;
  color: rgb(var(--color-green));
  line-height: 120%;
  white-space: pre-line;
  margin: 10px 0;
  animation: ${ar} 1.2s ease-out;
`;var De={},or={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function r(){for(var a="",o=0;o<arguments.length;o++){var s=arguments[o];s&&(a=n(a,i(s)))}return a}function i(a){if(typeof a=="string"||typeof a=="number")return a;if(typeof a!="object")return"";if(Array.isArray(a))return r.apply(null,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var o="";for(var s in a)t.call(a,s)&&a[s]&&(o=n(o,s));return o}function n(a,o){return o?a?a+" "+o:a+o:a}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(or);var sr=or.exports;De.__esModule=!0;De.default=void 0;var Ji=ct(g),H=ct($t),Qi=ct(sr);function ct(e){return e&&e.__esModule?e:{default:e}}const cr=({animate:e=!0,className:t="",layout:r="2-columns",lineColor:i="#FFF",children:n})=>(typeof window=="object"&&document.documentElement.style.setProperty("--line-color",i),Ji.default.createElement("div",{className:(0,Qi.default)(t,"vertical-timeline",{"vertical-timeline--animate":e,"vertical-timeline--two-columns":r==="2-columns","vertical-timeline--one-column-left":r==="1-column"||r==="1-column-left","vertical-timeline--one-column-right":r==="1-column-right"})},n));cr.propTypes={children:H.default.oneOfType([H.default.arrayOf(H.default.node),H.default.node]).isRequired,className:H.default.string,animate:H.default.bool,layout:H.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:H.default.string};var ea=cr;De.default=ea;var ze={};function Ze(){return Ze=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},Ze.apply(this,arguments)}function ta(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Ke(e,t)}function Ke(e,t){return Ke=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},Ke(e,t)}function ra(e,t){if(e==null)return{};var r={},i=Object.keys(e),n,a;for(a=0;a<i.length;a++)n=i[a],!(t.indexOf(n)>=0)&&(r[n]=e[n]);return r}var Je=new Map,he=new WeakMap,Mt=0,lr=void 0;function na(e){lr=e}function ia(e){return e?(he.has(e)||(Mt+=1,he.set(e,Mt.toString())),he.get(e)):"0"}function aa(e){return Object.keys(e).sort().filter(function(t){return e[t]!==void 0}).map(function(t){return t+"_"+(t==="root"?ia(e.root):e[t])}).toString()}function oa(e){var t=aa(e),r=Je.get(t);if(!r){var i=new Map,n,a=new IntersectionObserver(function(o){o.forEach(function(s){var c,d=s.isIntersecting&&n.some(function(u){return s.intersectionRatio>=u});e.trackVisibility&&typeof s.isVisible=="undefined"&&(s.isVisible=d),(c=i.get(s.target))==null||c.forEach(function(u){u(d,s)})})},e);n=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:a,elements:i},Je.set(t,r)}return r}function lt(e,t,r,i){if(r===void 0&&(r={}),i===void 0&&(i=lr),typeof window.IntersectionObserver=="undefined"&&i!==void 0){var n=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),function(){}}var a=oa(r),o=a.id,s=a.observer,c=a.elements,d=c.get(e)||[];return c.has(e)||c.set(e,d),d.push(t),s.observe(e),function(){d.splice(d.indexOf(t),1),d.length===0&&(c.delete(e),s.unobserve(e)),c.size===0&&(s.disconnect(),Je.delete(o))}}var sa=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function Tt(e){return typeof e.children!="function"}var ye=function(e){ta(t,e);function t(i){var n;return n=e.call(this,i)||this,n.node=null,n._unobserveCb=null,n.handleNode=function(a){n.node&&(n.unobserve(),!a&&!n.props.triggerOnce&&!n.props.skip&&n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=a||null,n.observeNode()},n.handleChange=function(a,o){a&&n.props.triggerOnce&&n.unobserve(),Tt(n.props)||n.setState({inView:a,entry:o}),n.props.onChange&&n.props.onChange(a,o)},n.state={inView:!!i.initialInView,entry:void 0},n}var r=t.prototype;return r.componentDidUpdate=function(n){(n.rootMargin!==this.props.rootMargin||n.root!==this.props.root||n.threshold!==this.props.threshold||n.skip!==this.props.skip||n.trackVisibility!==this.props.trackVisibility||n.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},r.componentWillUnmount=function(){this.unobserve(),this.node=null},r.observeNode=function(){if(!(!this.node||this.props.skip)){var n=this.props,a=n.threshold,o=n.root,s=n.rootMargin,c=n.trackVisibility,d=n.delay,u=n.fallbackInView;this._unobserveCb=lt(this.node,this.handleChange,{threshold:a,root:o,rootMargin:s,trackVisibility:c,delay:d},u)}},r.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},r.render=function(){if(!Tt(this.props)){var n=this.state,a=n.inView,o=n.entry;return this.props.children({inView:a,entry:o,ref:this.handleNode})}var s=this.props,c=s.children,d=s.as,u=ra(s,sa);return g.createElement(d||"div",Ze({ref:this.handleNode},u),c)},t}(g.Component);ye.displayName="InView";ye.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};function ca(e){var t=e===void 0?{}:e,r=t.threshold,i=t.delay,n=t.trackVisibility,a=t.rootMargin,o=t.root,s=t.triggerOnce,c=t.skip,d=t.initialInView,u=t.fallbackInView,h=g.useRef(),y=g.useState({inView:!!d}),S=y[0],p=y[1],f=g.useCallback(function(w){h.current!==void 0&&(h.current(),h.current=void 0),!c&&w&&(h.current=lt(w,function(b,x){p({inView:b,entry:x}),x.isIntersecting&&s&&h.current&&(h.current(),h.current=void 0)},{root:o,rootMargin:a,threshold:r,trackVisibility:n,delay:i},u))},[Array.isArray(r)?r.toString():r,o,a,s,c,n,u,i]);g.useEffect(function(){!h.current&&S.entry&&!s&&!c&&p({inView:!!d})});var m=[f,S.inView,S.entry];return m.ref=m[0],m.inView=m[1],m.entry=m[2],m}const la=Object.freeze(Object.defineProperty({__proto__:null,InView:ye,default:ye,defaultFallbackInView:na,observe:lt,useInView:ca},Symbol.toStringTag,{value:"Module"})),da=xr(la);ze.__esModule=!0;ze.default=void 0;var X=dt(g),M=dt($t),me=dt(sr),ua=da;function dt(e){return e&&e.__esModule?e:{default:e}}const dr=({children:e="",className:t="",contentArrowStyle:r=null,contentStyle:i=null,date:n="",dateClassName:a="",icon:o=null,iconClassName:s="",iconOnClick:c=null,onTimelineElementClick:d=null,iconStyle:u=null,id:h="",position:y="",style:S=null,textClassName:p="",intersectionObserverProps:f={rootMargin:"0px 0px -40px 0px",triggerOnce:!0},visible:m=!1,shadowSize:w="small"})=>X.default.createElement(ua.InView,f,({inView:b,ref:x})=>X.default.createElement("div",{ref:x,id:h,className:(0,me.default)(t,"vertical-timeline-element",{"vertical-timeline-element--left":y==="left","vertical-timeline-element--right":y==="right","vertical-timeline-element--no-children":e===""}),style:S},X.default.createElement(X.default.Fragment,null,X.default.createElement("span",{style:u,onClick:c,className:(0,me.default)(s,"vertical-timeline-element-icon",`shadow-size-${w}`,{"bounce-in":b||m,"is-hidden":!(b||m)})},o),X.default.createElement("div",{style:i,onClick:d,className:(0,me.default)(p,"vertical-timeline-element-content",{"bounce-in":b||m,"is-hidden":!(b||m)})},X.default.createElement("div",{style:r,className:"vertical-timeline-element-content-arrow"}),e,X.default.createElement("span",{className:(0,me.default)(a,"vertical-timeline-element-date")},n)))));dr.propTypes={children:M.default.oneOfType([M.default.arrayOf(M.default.node),M.default.node]),className:M.default.string,contentArrowStyle:M.default.shape({}),contentStyle:M.default.shape({}),date:M.default.node,dateClassName:M.default.string,icon:M.default.element,iconClassName:M.default.string,iconStyle:M.default.shape({}),iconOnClick:M.default.func,onTimelineElementClick:M.default.func,id:M.default.string,position:M.default.string,style:M.default.shape({}),textClassName:M.default.string,visible:M.default.bool,shadowSize:M.default.string,intersectionObserverProps:M.default.shape({root:M.default.object,rootMargin:M.default.string,threshold:M.default.number,triggerOnce:M.default.bool})};var fa=dr;ze.default=fa;var It={VerticalTimeline:De.default,VerticalTimelineElement:ze.default};const At=[{date:"2015",title:"Strangers to Best Friends",description:"A school project brought us together for a couple photo. Fate?",image:W[0].source},{date:"2017",title:"Winning a Short Movie Competition",description:"It was a romance movie, but we were just friends. Or so we thought.",image:W[1].source},{date:"2019",title:"Annual Catchup",description:"The ocean kept us apart, but we always found time once a year.",image:W[2].source},{date:"2022",title:"Officially more than Friends",description:"Debbie’s birthday. This time, we’re not just friends.",image:W[3].source},{date:"2023",title:"First Year Together",description:"Long distance, good food, and a lot of calls.",image:W[5].source},{date:"Q2 2024",title:"Engaged!",description:"Somewhere in Southeast Asia, she said yes.",image:W[6].source},{date:"Q4 2024",title:"Holiday in Bali",description:"Last deep breath before the chaos of immigration and weddding prep.",image:W[7].source},{date:"July 2025",title:"Deebie moved to Auckland, New Zealand",description:"The adventure begins. New city, new job, new life together.",image:W[8].source},{date:"August 2025",title:"Officially married!",description:"We registered our marriage with the New Zealand government!",image:W[9].source}],ha=({isCollapsed:e=!1,onExpand:t})=>T(ma,{style:{position:"relative",width:"100%",maxWidth:500},children:[l(It.VerticalTimeline,{lineColor:"rgba(var(--color-pink), 0.95)",children:(e?At.slice(0,1):At).map((i,n)=>T(It.VerticalTimelineElement,{date:i.date,dateClassName:"timeline-date-centered",iconStyle:{background:"rgba(var(--color-pink), 0.95)",color:"rgb(var(--color-white))",boxShadow:"0 0 0 4px rgba(var(--color-pink), 0.9)"},contentStyle:{background:"transparent",color:"rgb(var(--muted-text-rgb))",border:"1px solid rgba(var(--color-pink), 0.9)"},contentArrowStyle:{borderRight:"7px solid rgba(var(--color-pink), 0.9)"},children:[l(He,{children:i.title}),l(Xe,{children:i.description}),l(ba,{src:i.image,alt:i.title,shapeIndex:n}),e&&n===1-1&&l(va,{onClick:t,children:"Show Full Timeline"})]},n))}),e&&l(ya,{})]}),ma=v.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  background: rgba(var(--surface-rgb, 255, 255, 255), var(--surface-opacity));
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(var(--color-pink), 0.08);
  padding: 20px 0;
  position: relative;
`,pa=e=>()=>{let t=e+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296},We=e=>{const t=[];for(let r=0;r<e.length;r++){const i=e[r],n=e[(r+1)%e.length];t.push([i[0]*.75+n[0]*.25,i[1]*.75+n[1]*.25]),t.push([i[0]*.25+n[0]*.75,i[1]*.25+n[1]*.75])}return t},ga=(e=0,t=24)=>{const r=pa(e+1),i=52,n=78,a=50+(r()-.5)*6,o=50+(r()-.5)*6;let c=Array.from({length:t},()=>i+r()*(n-i)).map((u,h)=>{const y=h/t*Math.PI*2;return[a+Math.cos(y)*u,o+Math.sin(y)*u]});if(c=We(c),c=We(c),c=We(c),r()>.4){const u=Math.floor(r()*3)+1;for(let h=0;h<u;h++){const y=Math.floor(r()*c.length);c[y]=[c[y][0]+(r()-.5)*12,c[y][1]+(r()-.5)*12]}}return`polygon(${c.map(([u,h])=>[Math.max(1,Math.min(99,Math.round(u))),Math.max(1,Math.min(99,Math.round(h)))]).map(([u,h])=>`${u}% ${h}%`).join(", ")})`},ba=v.img`
  width: 100%;
  max-width: 320px;
  margin-top: 12px;
  box-shadow: 0 6px 18px rgba(var(--shadow-rgb), 0.08);
  transition: transform 220ms ease, box-shadow 220ms ease;
  border-radius: 10px;
  object-fit: cover;

  /* procedurally generated large blob clip-path (65% - 91% radius) */
  ${({shapeIndex:e=0})=>`clip-path: ${ga(e,7)};`}

  &:hover {
    transform: translateY(-6px) scale(1.02) rotate(-0.6deg);
    box-shadow: 0 16px 36px rgba(var(--shadow-rgb), 0.12);
  }
`,va=v.button`
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
`,ya=v.div`
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
`;function wa(){const[e,t]=g.useState({}),[r,i]=g.useState(!1),n=g.useRef(null),a=g.useRef(null),o=g.useRef(null),s=g.useRef(null),c=g.useRef(null),d=g.useRef(null),u=g.useRef(null),h=g.useMemo(()=>({main:n,invitation:a,gallery:o,liveStream:s,giftInfo:c,directions:d,messages:u}),[]);return g.useEffect(()=>{const y=/iPad|iPhone|iPod/.test(navigator.userAgent),S=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),p=new IntersectionObserver(f=>{f.forEach(m=>{m.isIntersecting&&t(w=>ht(re({},w),{[m.target.id]:!0}))})},{threshold:y?.05:S?.08:.1,rootMargin:y?"50px":"20px"});return Object.values(h).forEach(f=>{f.current&&p.observe(f.current)}),()=>{Object.values(h).forEach(f=>{f.current&&p.unobserve(f.current)})}},[h]),g.useEffect(()=>{const y=/iPad|iPhone|iPod/.test(navigator.userAgent),S=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);kr.init({duration:y?600:S?800:1e3,once:!0,disable:y&&window.innerWidth<768,throttleDelay:y?100:50})},[]),g.useEffect(()=>{if(/iPad|iPhone|iPod/.test(navigator.userAgent))return;const S=setTimeout(()=>{const f={density:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?8:15,sizeRange:[1,3],speedRange:[.3,.8]};try{return zn(f)}catch(m){console.warn("Failed to start falling petals:",m);return}},100);return()=>{clearTimeout(S)}},[]),T(Xn,{children:[l(Pi,{}),l(Z,{id:"main",ref:n,"data-aos":"fade-up",children:l(Xi,{})}),l("hr",{className:"separator"}),T(Z,{id:"invitation",ref:a,"data-aos":"fade-up",children:[l(J,{children:"Invitation"}),l(Wi,{})]}),l("hr",{className:"separator"}),T(Z,{id:"directions",ref:d,"data-aos":"fade-up",children:[l(J,{children:"Place & Time"}),l(qi,{})]}),l("hr",{className:"separator"}),T(Z,{id:"timeline","data-aos":"fade-up",children:[l(J,{children:"Our Story Timeline"}),l(ha,{isCollapsed:!r,onExpand:()=>i(!0)})]}),l("hr",{className:"separator"}),T(Z,{id:"messages",ref:u,"data-aos":"fade-up",children:[l(J,{children:"Attendance Confirmation"}),l(Ri,{})]}),l("hr",{className:"separator"}),T(Z,{id:"gallery",ref:o,"data-aos":"fade-up",children:[l(J,{children:"Gallery"}),l(vi,{})]}),l("hr",{className:"separator",style:{marginBottom:"10px"}}),l(Z,{id:"thankyou","data-aos":"fade-up",children:T(Ot,{style:{textAlign:"center",padding:"0.25rem 1rem 1.5rem 1rem",maxWidth:"100%",overflow:"hidden"},children:[l(J,{style:{marginBottom:"1.5rem",fontSize:"clamp(1.5rem, 4vw, 2rem)",wordBreak:"break-word"},children:"Thank You!"}),l("p",{style:{fontSize:"clamp(0.9rem, 3vw, 1.1rem)",lineHeight:"1.6",maxWidth:"90%",margin:"0 auto",marginBottom:"1rem",wordBreak:"break-word",hyphens:"auto"},children:"Thank you for reading all the way here! Your presence in our lives means the world to us."}),l("p",{style:{fontSize:"clamp(1rem, 3.5vw, 1.2rem)",fontWeight:"bold",wordBreak:"break-word",maxWidth:"90%",margin:"0 auto"},children:"We hope to see you soon! 💕"}),l(Ot,{style:{textAlign:"center",padding:"0.25rem 1rem 1.5rem 1rem",maxWidth:"100%",overflow:"hidden"},children:l("img",{src:Ln,alt:"Whale and Seal",style:{marginTop:"1.5rem",maxWidth:"220px",width:"60%",height:"auto",display:"block",marginLeft:"auto",marginRight:"auto",opacity:.95}})})]})}),l(ni,{isVisible:Object.values(e).some(Boolean)})]})}const Ot=v.div`
  color: rgb(var(--color-coral));
  font-family: inherit;
`;Ge.createRoot(document.getElementById("root")).render(l(_t.StrictMode,{children:l(wa,{})}))});export default xa();
