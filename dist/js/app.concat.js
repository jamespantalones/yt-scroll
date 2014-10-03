/*
 AngularJS v1.2.26
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(W,X,t){'use strict';function C(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.26/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function Pa(b){if(null==b||Ga(b))return!1;
var a=b.length;return 1===b.nodeType&&a?!0:v(b)||J(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d;if(b)if(P(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(J(b)||Pa(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else if(b.forEach&&b.forEach!==r)b.forEach(a,c);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Zb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Tc(b,
a,c){for(var d=Zb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function $b(b){return function(a,c){b(c,a)}}function hb(){for(var b=ma.length,a;b;){b--;a=ma[b].charCodeAt(0);if(57==a)return ma[b]="A",ma.join("");if(90==a)ma[b]="0";else return ma[b]=String.fromCharCode(a+1),ma.join("")}ma.unshift("0");return ma.join("")}function ac(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function D(b){var a=b.$$hashKey;r(arguments,function(a){a!==b&&r(a,function(a,c){b[c]=a})});ac(b,a);return b}function U(b){return parseInt(b,
10)}function bc(b,a){return D(new (D(function(){},{prototype:b})),a)}function E(){}function Qa(b){return b}function ba(b){return function(){return b}}function x(b){return"undefined"===typeof b}function y(b){return"undefined"!==typeof b}function T(b){return null!=b&&"object"===typeof b}function v(b){return"string"===typeof b}function ib(b){return"number"===typeof b}function ta(b){return"[object Date]"===za.call(b)}function P(b){return"function"===typeof b}function jb(b){return"[object RegExp]"===za.call(b)}
function Ga(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Uc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Vc(b,a,c){var d=[];r(b,function(b,f,g){d.push(a.call(c,b,f,g))});return d}function Ra(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Sa(b,a){var c=Ra(b,a);0<=c&&b.splice(c,1);return a}function Ha(b,a,c,d){if(Ga(b)||b&&b.$evalAsync&&b.$watch)throw Ta("cpws");if(a){if(b===a)throw Ta("cpi");c=c||[];
d=d||[];if(T(b)){var e=Ra(c,b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(J(b))for(var f=a.length=0;f<b.length;f++)e=Ha(b[f],null,c,d),T(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;J(a)?a.length=0:r(a,function(b,c){delete a[c]});for(f in b)e=Ha(b[f],null,c,d),T(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e;ac(a,g)}}else if(a=b)J(b)?a=Ha(b,[],c,d):ta(b)?a=new Date(b.getTime()):jb(b)?(a=RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):T(b)&&(a=Ha(b,{},c,d));
return a}function ha(b,a){if(J(b)){a=a||[];for(var c=0;c<b.length;c++)a[c]=b[c]}else if(T(b))for(c in a=a||{},b)!kb.call(b,c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(a[c]=b[c]);return a||b}function Aa(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(J(b)){if(!J(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!Aa(b[d],a[d]))return!1;return!0}}else{if(ta(b))return ta(a)?isNaN(b.getTime())&&isNaN(a.getTime())||b.getTime()===
a.getTime():!1;if(jb(b)&&jb(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||Ga(b)||Ga(a)||J(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!P(b[d])){if(!Aa(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==t&&!P(a[d]))return!1;return!0}return!1}function Bb(b,a){var c=2<arguments.length?Ba.call(arguments,2):[];return!P(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(Ba.call(arguments,
0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Wc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=t:Ga(a)?c="$WINDOW":a&&X===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function na(b,a){return"undefined"===typeof b?t:JSON.stringify(b,Wc,a?"  ":null)}function cc(b){return v(b)?JSON.parse(b):b}function Ua(b){"function"===typeof b?b=!0:b&&0!==b.length?(b=K(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;
return b}function ia(b){b=w(b).clone();try{b.empty()}catch(a){}var c=w("<div>").append(b).html();try{return 3===b[0].nodeType?K(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+K(b)})}catch(d){return K(c)}}function dc(b){try{return decodeURIComponent(b)}catch(a){}}function ec(b){var a={},c,d;r((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=dc(c[0]),y(d)&&(b=y(c[1])?dc(c[1]):!0,kb.call(a,d)?J(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Cb(b){var a=
[];r(b,function(b,d){J(b)?r(b,function(b){a.push(Ca(d,!0)+(!0===b?"":"="+Ca(b,!0)))}):a.push(Ca(d,!0)+(!0===b?"":"="+Ca(b,!0)))});return a.length?a.join("&"):""}function lb(b){return Ca(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Ca(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Xc(b,a){function c(a){a&&d.push(a)}var d=[b],e,f,g=["ng:app","ng-app","x-ng-app",
"data-ng-app"],k=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;r(g,function(a){g[a]=!0;c(X.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(r(b.querySelectorAll("."+a),c),r(b.querySelectorAll("."+a+"\\:"),c),r(b.querySelectorAll("["+a+"]"),c))});r(d,function(a){if(!e){var b=k.exec(" "+a.className+" ");b?(e=a,f=(b[2]||"").replace(/\s+/g,",")):r(a.attributes,function(b){!e&&g[b.name]&&(e=a,f=b.value)})}});e&&a(e,f?[f]:[])}function fc(b,a){var c=function(){b=w(b);if(b.injector()){var c=b[0]===X?
"document":ia(b);throw Ta("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=gc(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(W&&!d.test(W.name))return c();W.name=W.name.replace(d,"");Va.resumeBootstrap=function(b){r(b,function(b){a.push(b)});c()}}function mb(b,a){a=
a||"_";return b.replace(Yc,function(b,d){return(d?a:"")+b.toLowerCase()})}function Db(b,a,c){if(!b)throw Ta("areq",a||"?",c||"required");return b}function Wa(b,a,c){c&&J(b)&&(b=b[b.length-1]);Db(P(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Da(b,a){if("hasOwnProperty"===b)throw Ta("badname",a);}function hc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&P(b)?Bb(e,b):b}function Eb(b){var a=
b[0];b=b[b.length-1];if(a===b)return w(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return w(c)}function Zc(b){var a=C("$injector"),c=C("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||C;return b.module||(b.module=function(){var b={};return function(e,f,g){if("hasOwnProperty"===e)throw c("badname","module");f&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return n}}if(!f)throw a("nomod",
e);var c=[],d=[],l=b("$injector","invoke"),n={_invokeQueue:c,_runBlocks:d,requires:f,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide","constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:l,run:function(a){d.push(a);return this}};g&&l(g);return n}())}}())}
function $c(b){D(b,{bootstrap:fc,copy:Ha,extend:D,equals:Aa,element:w,forEach:r,injector:gc,noop:E,bind:Bb,toJson:na,fromJson:cc,identity:Qa,isUndefined:x,isDefined:y,isString:v,isFunction:P,isObject:T,isNumber:ib,isElement:Uc,isArray:J,version:ad,isDate:ta,lowercase:K,uppercase:Ia,callbacks:{counter:0},$$minErr:C,$$csp:Xa});Ya=Zc(W);try{Ya("ngLocale")}catch(a){Ya("ngLocale",[]).provider("$locale",bd)}Ya("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:cd});a.provider("$compile",
ic).directive({a:dd,input:jc,textarea:jc,form:ed,script:fd,select:gd,style:hd,option:id,ngBind:jd,ngBindHtml:kd,ngBindTemplate:ld,ngClass:md,ngClassEven:nd,ngClassOdd:od,ngCloak:pd,ngController:qd,ngForm:rd,ngHide:sd,ngIf:td,ngInclude:ud,ngInit:vd,ngNonBindable:wd,ngPluralize:xd,ngRepeat:yd,ngShow:zd,ngStyle:Ad,ngSwitch:Bd,ngSwitchWhen:Cd,ngSwitchDefault:Dd,ngOptions:Ed,ngTransclude:Fd,ngModel:Gd,ngList:Hd,ngChange:Id,required:kc,ngRequired:kc,ngValue:Jd}).directive({ngInclude:Kd}).directive(Fb).directive(lc);
a.provider({$anchorScroll:Ld,$animate:Md,$browser:Nd,$cacheFactory:Od,$controller:Pd,$document:Qd,$exceptionHandler:Rd,$filter:mc,$interpolate:Sd,$interval:Td,$http:Ud,$httpBackend:Vd,$location:Wd,$log:Xd,$parse:Yd,$rootScope:Zd,$q:$d,$sce:ae,$sceDelegate:be,$sniffer:ce,$templateCache:de,$timeout:ee,$window:fe,$$rAF:ge,$$asyncCallback:he})}])}function Za(b){return b.replace(ie,function(a,b,d,e){return e?d.toUpperCase():d}).replace(je,"Moz$1")}function Gb(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:
[this],m=a,h,l,n,p,q,s;if(!d||null!=b)for(;e.length;)for(h=e.shift(),l=0,n=h.length;l<n;l++)for(p=w(h[l]),m?p.triggerHandler("$destroy"):m=!m,q=0,p=(s=p.children()).length;q<p;q++)e.push(Ea(s[q]));return f.apply(this,arguments)}var f=Ea.fn[b],f=f.$original||f;e.$original=f;Ea.fn[b]=e}function S(b){if(b instanceof S)return b;v(b)&&(b=aa(b));if(!(this instanceof S)){if(v(b)&&"<"!=b.charAt(0))throw Hb("nosel");return new S(b)}if(v(b)){var a=b;b=X;var c;if(c=ke.exec(a))b=[b.createElement(c[1])];else{var d=
b,e;b=d.createDocumentFragment();c=[];if(Ib.test(a)){d=b.appendChild(d.createElement("div"));e=(le.exec(a)||["",""])[1].toLowerCase();e=ea[e]||ea._default;d.innerHTML="<div>&#160;</div>"+e[1]+a.replace(me,"<$1></$2>")+e[2];d.removeChild(d.firstChild);for(a=e[0];a--;)d=d.lastChild;a=0;for(e=d.childNodes.length;a<e;++a)c.push(d.childNodes[a]);d=b.firstChild;d.textContent=""}else c.push(d.createTextNode(a));b.textContent="";b.innerHTML="";b=c}Jb(this,b);w(X.createDocumentFragment()).append(this)}else Jb(this,
b)}function Kb(b){return b.cloneNode(!0)}function Ja(b){Lb(b);var a=0;for(b=b.childNodes||[];a<b.length;a++)Ja(b[a])}function nc(b,a,c,d){if(y(d))throw Hb("offargs");var e=oa(b,"events");oa(b,"handle")&&(x(a)?r(e,function(a,c){$a(b,c,a);delete e[c]}):r(a.split(" "),function(a){x(c)?($a(b,a,e[a]),delete e[a]):Sa(e[a]||[],c)}))}function Lb(b,a){var c=b.ng339,d=ab[c];d&&(a?delete ab[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),nc(b)),delete ab[c],b.ng339=t))}function oa(b,a,c){var d=
b.ng339,d=ab[d||-1];if(y(c))d||(b.ng339=d=++ne,d=ab[d]={}),d[a]=c;else return d&&d[a]}function Mb(b,a,c){var d=oa(b,"data"),e=y(c),f=!e&&y(a),g=f&&!T(a);d||g||oa(b,"data",d={});if(e)d[a]=c;else if(f){if(g)return d&&d[a];D(d,a)}else return d}function Nb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function nb(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",aa((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
" ").replace(" "+aa(a)+" "," ")))})}function ob(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");r(a.split(" "),function(a){a=aa(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",aa(c))}}function Jb(b,a){if(a){a=a.nodeName||!y(a.length)||Ga(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function oc(b,a){return pb(b,"$"+(a||"ngController")+"Controller")}function pb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=J(a)?a:[a];b;){for(var d=
0,e=a.length;d<e;d++)if((c=w.data(b,a[d]))!==t)return c;b=b.parentNode||11===b.nodeType&&b.host}}function pc(b){for(var a=0,c=b.childNodes;a<c.length;a++)Ja(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}function qc(b,a){var c=qb[a.toLowerCase()];return c&&rc[b.nodeName]&&c}function oe(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||X);if(x(c.defaultPrevented)){var f=
c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;f.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};var g=ha(a[e||c.type]||[]);r(g,function(a){a.call(b,c)});8>=Q?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Ka(b,a){var c=typeof b,d;"function"==c||"object"==c&&null!==b?"function"==typeof(d=
b.$$hashKey)?d=b.$$hashKey():d===t&&(d=b.$$hashKey=(a||hb)()):d=b;return c+":"+d}function bb(b,a){if(a){var c=0;this.nextUid=function(){return++c}}r(b,this.put,this)}function sc(b){var a,c;"function"===typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(pe,""),c=c.match(qe),r(c[1].split(re),function(b){b.replace(se,function(b,c,d){a.push(d)})})),b.$inject=a):J(b)?(c=b.length-1,Wa(b[c],"fn"),a=b.slice(0,c)):Wa(b,"fn",!0);return a}function gc(b){function a(a){return function(b,c){if(T(b))r(b,
$b(a));else return a(b,c)}}function c(a,b){Da(a,"service");if(P(b)||J(b))b=n.instantiate(b);if(!b.$get)throw cb("pget",a);return l[a+k]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],c,d,f,k;r(a,function(a){if(!h.get(a)){h.put(a,!0);try{if(v(a))for(c=Ya(a),b=b.concat(e(c.requires)).concat(c._runBlocks),d=c._invokeQueue,f=0,k=d.length;f<k;f++){var g=d[f],m=n.get(g[0]);m[g[1]].apply(m,g[2])}else P(a)?b.push(n.invoke(a)):J(a)?b.push(n.invoke(a)):Wa(a,"module")}catch(l){throw J(a)&&(a=
a[a.length-1]),l.message&&(l.stack&&-1==l.stack.indexOf(l.message))&&(l=l.message+"\n"+l.stack),cb("modulerr",a,l.stack||l.message||l);}}});return b}function f(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===g)throw cb("cdep",d+" <- "+m.join(" <- "));return a[d]}try{return m.unshift(d),a[d]=g,a[d]=b(d)}catch(e){throw a[d]===g&&delete a[d],e;}finally{m.shift()}}function d(a,b,e){var f=[],k=sc(a),g,m,h;m=0;for(g=k.length;m<g;m++){h=k[m];if("string"!==typeof h)throw cb("itkn",h);f.push(e&&e.hasOwnProperty(h)?
e[h]:c(h))}J(a)&&(a=a[g]);return a.apply(b,f)}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(J(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return T(e)||P(e)?e:c},get:c,annotate:sc,has:function(b){return l.hasOwnProperty(b+k)||a.hasOwnProperty(b)}}}var g={},k="Provider",m=[],h=new bb([],!0),l={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,ba(b))}),constant:a(function(a,
b){Da(a,"constant");l[a]=b;p[a]=b}),decorator:function(a,b){var c=n.get(a+k),d=c.$get;c.$get=function(){var a=q.invoke(d,c);return q.invoke(b,null,{$delegate:a})}}}},n=l.$injector=f(l,function(){throw cb("unpr",m.join(" <- "));}),p={},q=p.$injector=f(p,function(a){a=n.get(a+k);return q.invoke(a.$get,a)});r(e(b),function(a){q.invoke(a||E)});return q}function Ld(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;
r(a,function(a){b||"a"!==K(a.nodeName)||(b=a)});return b}function f(){var b=c.hash(),d;b?(d=g.getElementById(b))?d.scrollIntoView():(d=e(g.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});return f}]}function he(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function te(b,a,c,d){function e(a){try{a.apply(null,
Ba.call(arguments,1))}finally{if(s--,0===s)for(;F.length;)try{F.pop()()}catch(b){c.error(b)}}}function f(a,b){(function fa(){r(u,function(a){a()});A=b(fa,a)})()}function g(){z=null;N!=k.url()&&(N=k.url(),r(ca,function(a){a(k.url())}))}var k=this,m=a[0],h=b.location,l=b.history,n=b.setTimeout,p=b.clearTimeout,q={};k.isMock=!1;var s=0,F=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){s++};k.notifyWhenNoOutstandingRequests=function(a){r(u,function(a){a()});0===s?a():F.push(a)};
var u=[],A;k.addPollFn=function(a){x(A)&&f(100,n);u.push(a);return a};var N=h.href,R=a.find("base"),z=null;k.url=function(a,c){h!==b.location&&(h=b.location);l!==b.history&&(l=b.history);if(a){if(N!=a)return N=a,d.history?c?l.replaceState(null,"",a):(l.pushState(null,"",a),R.attr("href",R.attr("href"))):(z=a,c?h.replace(a):h.href=a),k}else return z||h.href.replace(/%27/g,"'")};var ca=[],L=!1;k.onUrlChange=function(a){if(!L){if(d.history)w(b).on("popstate",g);if(d.hashchange)w(b).on("hashchange",g);
else k.addPollFn(g);L=!0}ca.push(a);return a};k.$$checkUrlChange=g;k.baseHref=function(){var a=R.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var O={},da="",B=k.baseHref();k.cookies=function(a,b){var d,e,f,k;if(a)b===t?m.cookie=escape(a)+"=;path="+B+";expires=Thu, 01 Jan 1970 00:00:00 GMT":v(b)&&(d=(m.cookie=escape(a)+"="+escape(b)+";path="+B).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(m.cookie!==
da)for(da=m.cookie,d=da.split("; "),O={},f=0;f<d.length;f++)e=d[f],k=e.indexOf("="),0<k&&(a=unescape(e.substring(0,k)),O[a]===t&&(O[a]=unescape(e.substring(k+1))));return O}};k.defer=function(a,b){var c;s++;c=n(function(){delete q[c];e(a)},b||0);q[c]=!0;return c};k.defer.cancel=function(a){return q[a]?(delete q[a],p(a),e(E),!0):!1}}function Nd(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new te(b,d,a,c)}]}function Od(){this.$get=function(){function b(b,d){function e(a){a!=
n&&(p?p==a&&(p=a.n):p=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw C("$cacheFactory")("iid",b);var g=0,k=D({},d,{id:b}),m={},h=d&&d.capacity||Number.MAX_VALUE,l={},n=null,p=null;return a[b]={put:function(a,b){if(h<Number.MAX_VALUE){var c=l[a]||(l[a]={key:a});e(c)}if(!x(b))return a in m||g++,m[a]=b,g>h&&this.remove(p.key),b},get:function(a){if(h<Number.MAX_VALUE){var b=l[a];if(!b)return;e(b)}return m[a]},remove:function(a){if(h<Number.MAX_VALUE){var b=
l[a];if(!b)return;b==n&&(n=b.p);b==p&&(p=b.n);f(b.n,b.p);delete l[a]}delete m[a];g--},removeAll:function(){m={};g=0;l={};n=p=null},destroy:function(){l=k=m=null;delete a[b]},info:function(){return D({},k,{size:g})}}}var a={};b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function de(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function ic(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,f=/(([\d\w_\-]+)(?:\:([^;]+))?;?)/,
g=/^(on[a-z]+|formaction)$/;this.directive=function m(a,e){Da(a,"directive");v(a)?(Db(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];r(c[a],function(c,f){try{var g=b.invoke(c);P(g)?g={compile:ba(g)}:!g.compile&&g.link&&(g.compile=ba(g.link));g.priority=g.priority||0;g.index=f;g.name=g.name||a;g.require=g.require||g.controller&&g.name;g.restrict=g.restrict||"A";e.push(g)}catch(m){d(m)}});return e}])),c[a].push(e)):r(a,$b(m));
return this};this.aHrefSanitizationWhitelist=function(b){return y(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,l,n,p,q,s,F,u,A,N,R){function z(a,b,c,d,e){a instanceof
w||(a=w(a));r(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=w(b).wrap("<span></span>").parent()[0])});var f=L(a,b,a,c,d,e);ca(a,"ng-scope");return function(b,c,d,e){Db(b,"scope");var g=c?La.clone.call(a):a;r(d,function(a,b){g.data("$"+b+"Controller",a)});d=0;for(var m=g.length;d<m;d++){var h=g[d].nodeType;1!==h&&9!==h||g.eq(d).data("$scope",b)}c&&c(g,b);f&&f(b,g,g,e);return g}}function ca(a,b){try{a.addClass(b)}catch(c){}}function L(a,b,c,d,e,f){function g(a,c,d,e){var f,h,l,q,n,
p,s;f=c.length;var M=Array(f);for(q=0;q<f;q++)M[q]=c[q];p=q=0;for(n=m.length;q<n;p++)h=M[p],c=m[q++],f=m[q++],c?(c.scope?(l=a.$new(),w.data(h,"$scope",l)):l=a,s=c.transcludeOnThisElement?O(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?O(a,b):null,c(f,l,h,d,s)):f&&f(a,h.childNodes,t,e)}for(var m=[],h,l,q,n,p=0;p<a.length;p++)h=new Ob,l=da(a[p],[],h,0===p?d:t,e),(f=l.length?H(l,a[p],h,b,c,null,[],[],f):null)&&f.scope&&ca(h.$$element,"ng-scope"),h=f&&f.terminal||!(q=a[p].childNodes)||!q.length?
null:L(q,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b),m.push(f,h),n=n||f||h,f=null;return n?g:null}function O(a,b,c){return function(d,e,f){var g=!1;d||(d=a.$new(),g=d.$$transcluded=!0);e=b(d,e,f,c);if(g)e.on("$destroy",function(){d.$destroy()});return e}}function da(a,b,c,d,g){var m=c.$attr,h;switch(a.nodeType){case 1:fa(b,pa(Ma(a).toLowerCase()),"E",d,g);for(var l,q,n,p=a.attributes,s=0,F=p&&p.length;s<F;s++){var A=!1,N=!1;l=p[s];if(!Q||8<=Q||l.specified){h=l.name;q=
aa(l.value);l=pa(h);if(n=U.test(l))h=mb(l.substr(6),"-");var u=l.replace(/(Start|End)$/,"");l===u+"Start"&&(A=h,N=h.substr(0,h.length-5)+"end",h=h.substr(0,h.length-6));l=pa(h.toLowerCase());m[l]=h;if(n||!c.hasOwnProperty(l))c[l]=q,qc(a,l)&&(c[l]=!0);S(a,b,q,l);fa(b,l,"A",d,g,A,N)}}a=a.className;if(v(a)&&""!==a)for(;h=f.exec(a);)l=pa(h[2]),fa(b,l,"C",d,g)&&(c[l]=aa(h[3])),a=a.substr(h.index+h[0].length);break;case 3:K(b,a.nodeValue);break;case 8:try{if(h=e.exec(a.nodeValue))l=pa(h[1]),fa(b,l,"M",
d,g)&&(c[l]=aa(h[2]))}catch(z){}}b.sort(x);return b}function B(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ja("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return w(d)}function I(a,b,c){return function(d,e,f,g,h){e=B(e[0],b,c);return a(d,e,f,g,h)}}function H(a,c,d,e,f,g,m,n,p){function F(a,b,c,d){if(a){c&&(a=I(a,c,d));a.require=G.require;a.directiveName=C;if(L===G||G.$$isolateScope)a=
tc(a,{isolateScope:!0});m.push(a)}if(b){c&&(b=I(b,c,d));b.require=G.require;b.directiveName=C;if(L===G||G.$$isolateScope)b=tc(b,{isolateScope:!0});n.push(b)}}function A(a,b,c,d){var e,f="data",g=!1;if(v(b)){for(;"^"==(e=b.charAt(0))||"?"==e;)b=b.substr(1),"^"==e&&(f="inheritedData"),g=g||"?"==e;e=null;d&&"data"===f&&(e=d[b]);e=e||c[f]("$"+b+"Controller");if(!e&&!g)throw ja("ctreq",b,a);}else J(b)&&(e=[],r(b,function(b){e.push(A(a,b,c,d))}));return e}function N(a,e,f,g,p){function F(a,b){var c;2>arguments.length&&
(b=a,a=t);K&&(c=da);return p(a,b,c)}var u,M,z,O,I,B,da={},rb;u=c===f?d:ha(d,new Ob(w(f),d.$attr));M=u.$$element;if(L){var Na=/^\s*([@=&])(\??)\s*(\w*)\s*$/;B=e.$new(!0);!H||H!==L&&H!==L.$$originalDirective?M.data("$isolateScopeNoTemplate",B):M.data("$isolateScope",B);ca(M,"ng-isolate-scope");r(L.scope,function(a,c){var d=a.match(Na)||[],f=d[3]||c,g="?"==d[2],d=d[1],m,l,n,p;B.$$isolateBindings[c]=d+f;switch(d){case "@":u.$observe(f,function(a){B[c]=a});u.$$observers[f].$$scope=e;u[f]&&(B[c]=b(u[f])(e));
break;case "=":if(g&&!u[f])break;l=q(u[f]);p=l.literal?Aa:function(a,b){return a===b||a!==a&&b!==b};n=l.assign||function(){m=B[c]=l(e);throw ja("nonassign",u[f],L.name);};m=B[c]=l(e);B.$watch(function(){var a=l(e);p(a,B[c])||(p(a,m)?n(e,a=B[c]):B[c]=a);return m=a},null,l.literal);break;case "&":l=q(u[f]);B[c]=function(a){return l(e,a)};break;default:throw ja("iscp",L.name,c,a);}})}rb=p&&F;R&&r(R,function(a){var b={$scope:a===L||a.$$isolateScope?B:e,$element:M,$attrs:u,$transclude:rb},c;I=a.controller;
"@"==I&&(I=u[a.name]);c=s(I,b);da[a.name]=c;K||M.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});g=0;for(z=m.length;g<z;g++)try{O=m[g],O(O.isolateScope?B:e,M,u,O.require&&A(O.directiveName,O.require,M,da),rb)}catch(G){l(G,ia(M))}g=e;L&&(L.template||null===L.templateUrl)&&(g=B);a&&a(g,f.childNodes,t,p);for(g=n.length-1;0<=g;g--)try{O=n[g],O(O.isolateScope?B:e,M,u,O.require&&A(O.directiveName,O.require,M,da),rb)}catch(y){l(y,ia(M))}}p=p||{};for(var u=-Number.MAX_VALUE,
O,R=p.controllerDirectives,L=p.newIsolateScopeDirective,H=p.templateDirective,fa=p.nonTlbTranscludeDirective,x=!1,D=!1,K=p.hasElementTranscludeDirective,Z=d.$$element=w(c),G,C,V,S=e,Q,Fa=0,qa=a.length;Fa<qa;Fa++){G=a[Fa];var U=G.$$start,Y=G.$$end;U&&(Z=B(c,U,Y));V=t;if(u>G.priority)break;if(V=G.scope)O=O||G,G.templateUrl||(db("new/isolated scope",L,G,Z),T(V)&&(L=G));C=G.name;!G.templateUrl&&G.controller&&(V=G.controller,R=R||{},db("'"+C+"' controller",R[C],G,Z),R[C]=G);if(V=G.transclude)x=!0,G.$$tlb||
(db("transclusion",fa,G,Z),fa=G),"element"==V?(K=!0,u=G.priority,V=Z,Z=d.$$element=w(X.createComment(" "+C+": "+d[C]+" ")),c=Z[0],Na(f,Ba.call(V,0),c),S=z(V,e,u,g&&g.name,{nonTlbTranscludeDirective:fa})):(V=w(Kb(c)).contents(),Z.empty(),S=z(V,e));if(G.template)if(D=!0,db("template",H,G,Z),H=G,V=P(G.template)?G.template(Z,d):G.template,V=W(V),G.replace){g=G;V=Ib.test(V)?w(aa(V)):[];c=V[0];if(1!=V.length||1!==c.nodeType)throw ja("tplrt",C,"");Na(f,Z,c);qa={$attr:{}};V=da(c,[],qa);var $=a.splice(Fa+
1,a.length-(Fa+1));L&&y(V);a=a.concat(V).concat($);E(d,qa);qa=a.length}else Z.html(V);if(G.templateUrl)D=!0,db("template",H,G,Z),H=G,G.replace&&(g=G),N=ue(a.splice(Fa,a.length-Fa),Z,d,f,x&&S,m,n,{controllerDirectives:R,newIsolateScopeDirective:L,templateDirective:H,nonTlbTranscludeDirective:fa}),qa=a.length;else if(G.compile)try{Q=G.compile(Z,d,S),P(Q)?F(null,Q,U,Y):Q&&F(Q.pre,Q.post,U,Y)}catch(ve){l(ve,ia(Z))}G.terminal&&(N.terminal=!0,u=Math.max(u,G.priority))}N.scope=O&&!0===O.scope;N.transcludeOnThisElement=
x;N.templateOnThisElement=D;N.transclude=S;p.hasElementTranscludeDirective=K;return N}function y(a){for(var b=0,c=a.length;b<c;b++)a[b]=bc(a[b],{$$isolateScope:!0})}function fa(b,e,f,g,h,q,n){if(e===h)return null;h=null;if(c.hasOwnProperty(e)){var p;e=a.get(e+d);for(var s=0,u=e.length;s<u;s++)try{p=e[s],(g===t||g>p.priority)&&-1!=p.restrict.indexOf(f)&&(q&&(p=bc(p,{$$start:q,$$end:n})),b.push(p),h=p)}catch(F){l(F)}}return h}function E(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=
e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(ca(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function ue(a,b,c,d,e,f,g,h){var m=[],l,q,s=b[0],u=a.shift(),F=D({},u,{templateUrl:null,transclude:null,replace:null,$$originalDirective:u}),N=P(u.templateUrl)?u.templateUrl(b,c):u.templateUrl;
b.empty();n.get(A.getTrustedResourceUrl(N),{cache:p}).success(function(n){var p,A;n=W(n);if(u.replace){n=Ib.test(n)?w(aa(n)):[];p=n[0];if(1!=n.length||1!==p.nodeType)throw ja("tplrt",u.name,N);n={$attr:{}};Na(d,b,p);var z=da(p,[],n);T(u.scope)&&y(z);a=z.concat(a);E(c,n)}else p=s,b.html(n);a.unshift(F);l=H(a,p,c,e,b,u,f,g,h);r(d,function(a,c){a==p&&(d[c]=b[0])});for(q=L(b[0].childNodes,e);m.length;){n=m.shift();A=m.shift();var R=m.shift(),I=m.shift(),z=b[0];if(A!==s){var B=A.className;h.hasElementTranscludeDirective&&
u.replace||(z=Kb(p));Na(R,w(A),z);ca(w(z),B)}A=l.transcludeOnThisElement?O(n,l.transclude,I):I;l(q,n,z,d,A)}m=null}).error(function(a,b,c,d){throw ja("tpload",d.url);});return function(a,b,c,d,e){a=e;m?(m.push(b),m.push(c),m.push(d),m.push(a)):(l.transcludeOnThisElement&&(a=O(b,l.transclude,e)),l(q,b,c,d,a))}}function x(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function db(a,b,c,d){if(b)throw ja("multidir",b.name,c.name,a,ia(d));}function K(a,
c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){var b=a.parent().length;b&&ca(a.parent(),"ng-binding");return function(a,c){var e=c.parent(),f=e.data("$binding")||[];f.push(d);e.data("$binding",f);b||ca(e,"ng-binding");a.$watch(d,function(a){c[0].nodeValue=a})}}})}function C(a,b){if("srcdoc"==b)return A.HTML;var c=Ma(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return A.RESOURCE_URL}function S(a,c,d,e){var f=b(d,!0);if(f){if("multiple"===e&&"SELECT"===
Ma(a))throw ja("selmulti",ia(a));c.push({priority:100,compile:function(){return{pre:function(c,d,m){d=m.$$observers||(m.$$observers={});if(g.test(e))throw ja("nodomevents");if(f=b(m[e],!0,C(a,e)))m[e]=f(c),(d[e]||(d[e]=[])).$$inter=!0,(m.$$observers&&m.$$observers[e].$$scope||c).$watch(f,function(a,b){"class"===e&&a!=b?m.$updateClass(a,b):m.$set(e,a)})}}}})}}function Na(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,m;if(a)for(g=0,m=a.length;g<m;g++)if(a[g]==d){a[g++]=c;m=g+e-1;for(var h=a.length;g<
h;g++,m++)m<h?a[g]=a[m]:delete a[g];a.length-=e-1;break}f&&f.replaceChild(c,d);a=X.createDocumentFragment();a.appendChild(d);c[w.expando]=d[w.expando];d=1;for(e=b.length;d<e;d++)f=b[d],w(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function tc(a,b){return D(function(){return a.apply(null,arguments)},a,b)}var Ob=function(a,b){this.$$element=a;this.$attr=b||{}};Ob.prototype={$normalize:pa,$addClass:function(a){a&&0<a.length&&N.addClass(this.$$element,a)},$removeClass:function(a){a&&0<
a.length&&N.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=uc(a,b),d=uc(b,a);0===c.length?N.removeClass(this.$$element,d):0===d.length?N.addClass(this.$$element,c):N.setClass(this.$$element,c,d)},$set:function(a,b,c,d){var e=qc(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=mb(a,"-"));e=Ma(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&"src"===a)this[a]=b=R(b,"src"===a);!1!==c&&(null===b||b===t?this.$$element.removeAttr(d):
this.$$element.attr(d,b));(c=this.$$observers)&&r(c[a],function(a){try{a(b)}catch(c){l(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);F.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var qa=b.startSymbol(),Z=b.endSymbol(),W="{{"==qa||"}}"==Z?Qa:function(a){return a.replace(/\{\{/g,qa).replace(/}}/g,Z)},U=/^ngAttr[A-Z]/;return z}]}function pa(b){return Za(b.replace(we,""))}function uc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=
0;a:for(;f<d.length;f++){for(var g=d[f],k=0;k<e.length;k++)if(g==e[k])continue a;c+=(0<c.length?" ":"")+g}return c}function Pd(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){Da(a,"controller");T(a)?D(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,f){var g,k,m;v(e)&&(g=e.match(a),k=g[1],m=g[3],e=b.hasOwnProperty(k)?b[k]:hc(f.$scope,k,!0)||hc(d,k,!0),Wa(e,k,!0));g=c.instantiate(e,f);if(m){if(!f||"object"!==typeof f.$scope)throw C("$controller")("noscp",
k||e.name,m);f.$scope[m]=g}return g}}]}function Qd(){this.$get=["$window",function(b){return w(b.document)}]}function Rd(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function vc(b){var a={},c,d,e;if(!b)return a;r(b.split("\n"),function(b){e=b.indexOf(":");c=K(aa(b.substr(0,e)));d=aa(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function wc(b){var a=T(b)?b:t;return function(c){a||(a=vc(b));return c?a[K(c)]||null:a}}function xc(b,a,c){if(P(c))return c(b,
a);r(c,function(c){b=c(b,a)});return b}function Ud(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){v(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=cc(d)));return d}],transformRequest:[function(a){return T(a)&&"[object File]"!==za.call(a)&&"[object Blob]"!==za.call(a)?na(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ha(d),put:ha(d),patch:ha(d)},xsrfCookieName:"XSRF-TOKEN",
xsrfHeaderName:"X-XSRF-TOKEN"},f=this.interceptors=[],g=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,p){function q(a){function b(a){var d=D({},a,{data:xc(a.data,a.headers,c.transformResponse)});return 200<=a.status&&300>a.status?d:n.reject(d)}var c={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},d=function(a){var b=e.headers,c=D({},a.headers),d,f,b=D({},b.common,b[K(a.method)]);
a:for(d in b){a=K(d);for(f in c)if(K(f)===a)continue a;c[d]=b[d]}(function(a){var b;r(a,function(c,d){P(c)&&(b=c(),null!=b?a[d]=b:delete a[d])})})(c);return c}(a);D(c,a);c.headers=d;c.method=Ia(c.method);var f=[function(a){d=a.headers;var c=xc(a.data,wc(d),a.transformRequest);x(c)&&r(d,function(a,b){"content-type"===K(b)&&delete d[b]});x(a.withCredentials)&&!x(e.withCredentials)&&(a.withCredentials=e.withCredentials);return s(a,c,d).then(b,b)},t],g=n.when(c);for(r(A,function(a){(a.request||a.requestError)&&
f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var m=f.shift(),g=g.then(a,m)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,c)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,c)});return g};return g}function s(c,f,g){function h(a,b,c,e){I&&(200<=a&&300>a?I.put(w,[a,b,vc(c),e]):I.remove(w));p(b,a,c,e);d.$$phase||d.$apply()}function p(a,b,d,e){b=Math.max(b,0);(200<=
b&&300>b?A.resolve:A.reject)({data:a,status:b,headers:wc(d),config:c,statusText:e})}function s(){var a=Ra(q.pendingRequests,c);-1!==a&&q.pendingRequests.splice(a,1)}var A=n.defer(),r=A.promise,I,H,w=F(c.url,c.params);q.pendingRequests.push(c);r.then(s,s);!c.cache&&!e.cache||(!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method)||(I=T(c.cache)?c.cache:T(e.cache)?e.cache:u);if(I)if(H=I.get(w),y(H)){if(H&&P(H.then))return H.then(s,s),H;J(H)?p(H[1],H[0],ha(H[2]),H[3]):p(H,200,{},"OK")}else I.put(w,r);x(H)&&
((H=Pb(c.url)?b.cookies()[c.xsrfCookieName||e.xsrfCookieName]:t)&&(g[c.xsrfHeaderName||e.xsrfHeaderName]=H),a(c.method,w,f,h,g,c.timeout,c.withCredentials,c.responseType));return r}function F(a,b){if(!b)return a;var c=[];Tc(b,function(a,b){null===a||x(a)||(J(a)||(a=[a]),r(a,function(a){T(a)&&(a=ta(a)?a.toISOString():na(a));c.push(Ca(b)+"="+Ca(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var u=c("$http"),A=[];r(f,function(a){A.unshift(v(a)?p.get(a):p.invoke(a))});r(g,
function(a,b){var c=v(a)?p.get(a):p.invoke(a);A.splice(b,0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});q.pendingRequests=[];(function(a){r(arguments,function(a){q[a]=function(b,c){return q(D(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){q[a]=function(b,c,d){return q(D(d||{},{method:a,url:b,data:c}))}})})("post","put");q.defaults=e;return q}]}function xe(b){if(8>=Q&&(!b.match(/^(get|post|head|put|delete|options)$/i)||
!W.XMLHttpRequest))return new W.ActiveXObject("Microsoft.XMLHTTP");if(W.XMLHttpRequest)return new W.XMLHttpRequest;throw C("$httpBackend")("noxhr");}function Vd(){this.$get=["$browser","$window","$document",function(b,a,c){return ye(b,xe,b.defer,a.angular.callbacks,c[0])}]}function ye(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),g=null;f.type="text/javascript";f.src=a;f.async=!0;g=function(a){$a(f,"load",g);$a(f,"error",g);e.body.removeChild(f);f=null;var k=-1,s="unknown";a&&("load"!==
a.type||d[b].called||(a={type:"error"}),s=a.type,k="error"===a.type?404:200);c&&c(k,s)};sb(f,"load",g);sb(f,"error",g);8>=Q&&(f.onreadystatechange=function(){v(f.readyState)&&/loaded|complete/.test(f.readyState)&&(f.onreadystatechange=null,g({type:"load"}))});e.body.appendChild(f);return g}var g=-1;return function(e,m,h,l,n,p,q,s){function F(){A=g;R&&R();z&&z.abort()}function u(a,d,e,f,g){L&&c.cancel(L);R=z=null;0===d&&(d=e?200:"file"==ua(m).protocol?404:0);a(1223===d?204:d,e,f,g||"");b.$$completeOutstandingRequest(E)}
var A;b.$$incOutstandingRequestCount();m=m||b.url();if("jsonp"==K(e)){var N="_"+(d.counter++).toString(36);d[N]=function(a){d[N].data=a;d[N].called=!0};var R=f(m.replace("JSON_CALLBACK","angular.callbacks."+N),N,function(a,b){u(l,a,d[N].data,"",b);d[N]=E})}else{var z=a(e);z.open(e,m,!0);r(n,function(a,b){y(a)&&z.setRequestHeader(b,a)});z.onreadystatechange=function(){if(z&&4==z.readyState){var a=null,b=null,c="";A!==g&&(a=z.getAllResponseHeaders(),b="response"in z?z.response:z.responseText);A===g&&
10>Q||(c=z.statusText);u(l,A||z.status,b,a,c)}};q&&(z.withCredentials=!0);if(s)try{z.responseType=s}catch(ca){if("json"!==s)throw ca;}z.send(h||null)}if(0<p)var L=c(F,p);else p&&P(p.then)&&p.then(F)}}function Sd(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(f,h,l){for(var n,p,q=0,s=[],F=f.length,u=!1,A=[];q<F;)-1!=(n=f.indexOf(b,q))&&-1!=(p=f.indexOf(a,
n+g))?(q!=n&&s.push(f.substring(q,n)),s.push(q=c(u=f.substring(n+g,p))),q.exp=u,q=p+k,u=!0):(q!=F&&s.push(f.substring(q)),q=F);(F=s.length)||(s.push(""),F=1);if(l&&1<s.length)throw yc("noconcat",f);if(!h||u)return A.length=F,q=function(a){try{for(var b=0,c=F,g;b<c;b++){if("function"==typeof(g=s[b]))if(g=g(a),g=l?e.getTrusted(l,g):e.valueOf(g),null==g)g="";else switch(typeof g){case "string":break;case "number":g=""+g;break;default:g=na(g)}A[b]=g}return A.join("")}catch(k){a=yc("interr",f,k.toString()),
d(a)}},q.exp=f,q.parts=s,q}var g=b.length,k=a.length;f.startSymbol=function(){return b};f.endSymbol=function(){return a};return f}]}function Td(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,g,k,m){var h=a.setInterval,l=a.clearInterval,n=c.defer(),p=n.promise,q=0,s=y(m)&&!m;k=y(k)?k:0;p.then(null,null,d);p.$$intervalId=h(function(){n.notify(q++);0<k&&q>=k&&(n.resolve(q),l(p.$$intervalId),delete e[p.$$intervalId]);s||b.$apply()},g);e[p.$$intervalId]=n;return p}var e={};d.cancel=
function(b){return b&&b.$$intervalId in e?(e[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete e[b.$$intervalId],!0):!1};return d}]}function bd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),
SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Qb(b){b=b.split("/");for(var a=b.length;a--;)b[a]=
lb(b[a]);return b.join("/")}function zc(b,a,c){b=ua(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=U(b.port)||ze[b.protocol]||null}function Ac(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=ua(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=ec(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function ra(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function eb(b){var a=
b.indexOf("#");return-1==a?b:b.substr(0,a)}function Rb(b){return b.substr(0,eb(b).lastIndexOf("/")+1)}function Bc(b,a){this.$$html5=!0;a=a||"";var c=Rb(b);zc(b,this,b);this.$$parse=function(a){var e=ra(c,a);if(!v(e))throw Sb("ipthprfx",a,c);Ac(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Cb(this.$$search),b=this.$$hash?"#"+lb(this.$$hash):"";this.$$url=Qb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;
if((e=ra(b,d))!==t)return d=e,(e=ra(a,e))!==t?c+(ra("/",e)||e):b+d;if((e=ra(c,d))!==t)return c+e;if(c==d+"/")return c}}function Tb(b,a){var c=Rb(b);zc(b,this,b);this.$$parse=function(d){var e=ra(b,d)||ra(c,d),e="#"==e.charAt(0)?ra(a,e):this.$$html5?e:"";if(!v(e))throw Sb("ihshprfx",d,a);Ac(e,this,b);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Cb(this.$$search),e=this.$$hash?
"#"+lb(this.$$hash):"";this.$$url=Qb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if(eb(b)==eb(a))return a}}function Ub(b,a){this.$$html5=!0;Tb.apply(this,arguments);var c=Rb(b);this.$$rewrite=function(d){var e;if(b==eb(d))return d;if(e=ra(c,d))return b+a+e;if(c===d+"/")return c};this.$$compose=function(){var c=Cb(this.$$search),e=this.$$hash?"#"+lb(this.$$hash):"";this.$$url=Qb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function tb(b){return function(){return this[b]}}
function Cc(b,a){return function(c){if(x(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Wd(){var b="",a=!1;this.hashPrefix=function(a){return y(a)?(b=a,this):b};this.html5Mode=function(b){return y(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a){c.$broadcast("$locationChangeSuccess",k.absUrl(),a)}var k,m,h=d.baseHref(),l=d.url(),n;a?(n=l.substring(0,l.indexOf("/",l.indexOf("//")+2))+(h||"/"),m=e.history?Bc:Ub):(n=
eb(l),m=Tb);k=new m(n,"#"+b);k.$$parse(k.$$rewrite(l));var p=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var e=w(a.target);"a"!==K(e[0].nodeName);)if(e[0]===f[0]||!(e=e.parent())[0])return;var g=e.prop("href");T(g)&&"[object SVGAnimatedString]"===g.toString()&&(g=ua(g.animVal).href);if(!p.test(g)){if(m===Ub){var h=e.attr("href")||e.attr("xlink:href");if(h&&0>h.indexOf("://"))if(g="#"+b,"/"==h[0])g=n+g+h;else if("#"==h[0])g=n+g+(k.path()||"/")+h;
else{var l=k.path().split("/"),h=h.split("/");2!==l.length||l[1]||(l.length=1);for(var q=0;q<h.length;q++)"."!=h[q]&&(".."==h[q]?l.pop():h[q].length&&l.push(h[q]));g=n+g+l.join("/")}}l=k.$$rewrite(g);g&&(!e.attr("target")&&l&&!a.isDefaultPrevented())&&(a.preventDefault(),l!=d.url()&&(k.$$parse(l),c.$apply(),W.angular["ff-684208-preventDefault"]=!0))}}});k.absUrl()!=l&&d.url(k.absUrl(),!0);d.onUrlChange(function(a){k.absUrl()!=a&&(c.$evalAsync(function(){var b=k.absUrl();k.$$parse(a);c.$broadcast("$locationChangeStart",
a,b).defaultPrevented?(k.$$parse(b),d.url(b)):g(b)}),c.$$phase||c.$digest())});var q=0;c.$watch(function(){var a=d.url(),b=k.$$replace;q&&a==k.absUrl()||(q++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",k.absUrl(),a).defaultPrevented?k.$$parse(a):(d.url(k.absUrl(),b),g(a))}));k.$$replace=!1;return q});return k}]}function Xd(){var b=!0,a=this;this.debugEnabled=function(a){return y(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&
-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||E;a=!1;try{a=!!e.apply}catch(m){}return a?function(){var a=[];r(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function ka(b,
a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw la("isecfld",a);return b}function va(b,a){if(b){if(b.constructor===b)throw la("isecfn",a);if(b.document&&b.location&&b.alert&&b.setInterval)throw la("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw la("isecdom",a);if(b===Object)throw la("isecobj",a);}return b}function ub(b,a,c,d,e){va(b,d);e=e||{};a=a.split(".");for(var f,g=0;1<a.length;g++){f=ka(a.shift(),
d);var k=va(b[f],d);k||(k={},b[f]=k);b=k;b.then&&e.unwrapPromises&&(wa(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===t&&(b.$$v={}),b=b.$$v)}f=ka(a.shift(),d);va(b[f],d);return b[f]=c}function Dc(b,a,c,d,e,f,g){ka(b,f);ka(a,f);ka(c,f);ka(d,f);ka(e,f);return g.unwrapPromises?function(g,m){var h=m&&m.hasOwnProperty(b)?m:g,l;if(null==h)return h;(h=h[b])&&h.then&&(wa(f),"$$v"in h||(l=h,l.$$v=t,l.then(function(a){l.$$v=a})),h=h.$$v);if(!a)return h;if(null==h)return t;(h=h[a])&&h.then&&
(wa(f),"$$v"in h||(l=h,l.$$v=t,l.then(function(a){l.$$v=a})),h=h.$$v);if(!c)return h;if(null==h)return t;(h=h[c])&&h.then&&(wa(f),"$$v"in h||(l=h,l.$$v=t,l.then(function(a){l.$$v=a})),h=h.$$v);if(!d)return h;if(null==h)return t;(h=h[d])&&h.then&&(wa(f),"$$v"in h||(l=h,l.$$v=t,l.then(function(a){l.$$v=a})),h=h.$$v);if(!e)return h;if(null==h)return t;(h=h[e])&&h.then&&(wa(f),"$$v"in h||(l=h,l.$$v=t,l.then(function(a){l.$$v=a})),h=h.$$v);return h}:function(f,g){var h=g&&g.hasOwnProperty(b)?g:f;if(null==
h)return h;h=h[b];if(!a)return h;if(null==h)return t;h=h[a];if(!c)return h;if(null==h)return t;h=h[c];if(!d)return h;if(null==h)return t;h=h[d];return e?null==h?t:h=h[e]:h}}function Ec(b,a,c){if(Vb.hasOwnProperty(b))return Vb[b];var d=b.split("."),e=d.length,f;if(a.csp)f=6>e?Dc(d[0],d[1],d[2],d[3],d[4],c,a):function(b,f){var g=0,k;do k=Dc(d[g++],d[g++],d[g++],d[g++],d[g++],c,a)(b,f),f=t,b=k;while(g<e);return k};else{var g="var p;\n";r(d,function(b,d){ka(b,c);g+="if(s == null) return undefined;\ns="+
(d?"s":'((k&&k.hasOwnProperty("'+b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':"")});var g=g+"return s;",k=new Function("s","k","pw",g);k.toString=ba(g);f=a.unwrapPromises?function(a,b){return k(a,b,wa)}:k}"hasOwnProperty"!==b&&(Vb[b]=f);return f}function Yd(){var b={},a={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=
function(b){return y(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};this.logPromiseWarnings=function(b){return y(b)?(a.logPromiseWarnings=b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer","$log",function(c,d,e){a.csp=d.csp;wa=function(b){a.logPromiseWarnings&&!Fc.hasOwnProperty(b)&&(Fc[b]=!0,e.warn("[$parse] Promise found in the expression `"+b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(d){var e;switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];
e=new Wb(a);e=(new fb(e,c,a)).parse(d);"hasOwnProperty"!==d&&(b[d]=e);return e;case "function":return d;default:return E}}}]}function $d(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return Ae(function(a){b.$evalAsync(a)},a)}]}function Ae(b,a){function c(a){return a}function d(a){return g(a)}var e=function(){var g=[],h,l;return l={resolve:function(a){if(g){var c=g;g=t;h=f(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],h.then(a[0],a[1],a[2])})}},reject:function(a){l.resolve(k(a))},
notify:function(a){if(g){var c=g;g.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},promise:{then:function(b,f,k){var l=e(),F=function(d){try{l.resolve((P(b)?b:c)(d))}catch(e){l.reject(e),a(e)}},u=function(b){try{l.resolve((P(f)?f:d)(b))}catch(c){l.reject(c),a(c)}},A=function(b){try{l.notify((P(k)?k:c)(b))}catch(d){a(d)}};g?g.push([F,u,A]):h.then(F,u,A);return l.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):
d.reject(a);return d.promise}function d(e,f){var g=null;try{g=(a||c)()}catch(k){return b(k,!1)}return g&&P(g.then)?g.then(function(){return b(e,f)},function(a){return b(a,!1)}):b(e,f)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},f=function(a){return a&&P(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},g=function(a){var b=e();b.reject(a);return b.promise},k=function(c){return{then:function(f,g){var k=e();b(function(){try{k.resolve((P(g)?
g:d)(c))}catch(b){k.reject(b),a(b)}});return k.promise}}};return{defer:e,reject:g,when:function(k,h,l,n){var p=e(),q,s=function(b){try{return(P(h)?h:c)(b)}catch(d){return a(d),g(d)}},F=function(b){try{return(P(l)?l:d)(b)}catch(c){return a(c),g(c)}},u=function(b){try{return(P(n)?n:c)(b)}catch(d){a(d)}};b(function(){f(k).then(function(a){q||(q=!0,p.resolve(f(a).then(s,F,u)))},function(a){q||(q=!0,p.resolve(F(a)))},function(a){q||p.notify(u(a))})});return p.promise},all:function(a){var b=e(),c=0,d=J(a)?
[]:{};r(a,function(a,e){c++;f(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}function ge(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:
function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function Zd(){var b=10,a=C("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,f,g){function k(){this.$id=hb();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=
[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings={}}function m(b){if(p.$$phase)throw a("inprog",p.$$phase);p.$$phase=b}function h(a,b){var c=f(a);Wa(c,b);return c}function l(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}k.prototype={constructor:k,$new:function(a){a?(a=new k,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(this.$$childScopeClass||(this.$$childScopeClass=
function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=hb();this.$$childScopeClass=null},this.$$childScopeClass.prototype=this),a=new this.$$childScopeClass);a["this"]=a;a.$parent=this;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=h(a,"watch"),f=this.$$watchers,g={fn:b,last:n,get:e,exp:a,
eq:!!d};c=null;if(!P(b)){var k=h(b||E,"listener");g.fn=function(a,b,c){k(c)}}if("string"==typeof a&&e.constant){var l=g.fn;g.fn=function(a,b,c){l.call(this,a,b,c);Sa(f,g)}}f||(f=this.$$watchers=[]);f.unshift(g);return function(){Sa(f,g);c=null}},$watchCollection:function(a,b){var c=this,d,e,g,k=1<b.length,h=0,l=f(a),m=[],p={},n=!0,r=0;return this.$watch(function(){d=l(c);var a,b,f;if(T(d))if(Pa(d))for(e!==m&&(e=m,r=e.length=0,h++),a=d.length,r!==a&&(h++,e.length=r=a),b=0;b<a;b++)f=e[b]!==e[b]&&d[b]!==
d[b],f||e[b]===d[b]||(h++,e[b]=d[b]);else{e!==p&&(e=p={},r=0,h++);a=0;for(b in d)d.hasOwnProperty(b)&&(a++,e.hasOwnProperty(b)?(f=e[b]!==e[b]&&d[b]!==d[b],f||e[b]===d[b]||(h++,e[b]=d[b])):(r++,e[b]=d[b],h++));if(r>a)for(b in h++,e)e.hasOwnProperty(b)&&!d.hasOwnProperty(b)&&(r--,delete e[b])}else e!==d&&(e=d,h++);return h},function(){n?(n=!1,b(d,d,c)):b(d,g,c);if(k)if(T(d))if(Pa(d)){g=Array(d.length);for(var a=0;a<d.length;a++)g[a]=d[a]}else for(a in g={},d)kb.call(d,a)&&(g[a]=d[a]);else g=d})},$digest:function(){var d,
f,k,h,l=this.$$asyncQueue,r=this.$$postDigestQueue,R,z,t=b,L,O=[],w,B,I;m("$digest");g.$$checkUrlChange();c=null;do{z=!1;for(L=this;l.length;){try{I=l.shift(),I.scope.$eval(I.expression)}catch(H){p.$$phase=null,e(H)}c=null}a:do{if(h=L.$$watchers)for(R=h.length;R--;)try{if(d=h[R])if((f=d.get(L))!==(k=d.last)&&!(d.eq?Aa(f,k):"number"===typeof f&&"number"===typeof k&&isNaN(f)&&isNaN(k)))z=!0,c=d,d.last=d.eq?Ha(f,null):f,d.fn(f,k===n?f:k,L),5>t&&(w=4-t,O[w]||(O[w]=[]),B=P(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):
d.exp,B+="; newVal: "+na(f)+"; oldVal: "+na(k),O[w].push(B));else if(d===c){z=!1;break a}}catch(y){p.$$phase=null,e(y)}if(!(h=L.$$childHead||L!==this&&L.$$nextSibling))for(;L!==this&&!(h=L.$$nextSibling);)L=L.$parent}while(L=h);if((z||l.length)&&!t--)throw p.$$phase=null,a("infdig",b,na(O));}while(z||l.length);for(p.$$phase=null;r.length;)try{r.shift()()}catch(v){e(v)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==p&&(r(this.$$listenerCount,
Bb(null,l,this)),a.$$childHead==this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null,this.$$listeners={},this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=[],this.$destroy=this.$digest=this.$apply=E,this.$on=
this.$watch=function(){return E})}},$eval:function(a,b){return f(a)(this,b)},$evalAsync:function(a){p.$$phase||p.$$asyncQueue.length||g.defer(function(){p.$$asyncQueue.length&&p.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return m("$apply"),this.$eval(a)}catch(b){e(b)}finally{p.$$phase=null;try{p.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=
c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[Ra(c,b)]=null;l(e,1,a)}},$emit:function(a,b){var c=[],d,f=this,g=!1,k={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){k.defaultPrevented=!0},defaultPrevented:!1},h=[k].concat(Ba.call(arguments,1)),l,m;do{d=f.$$listeners[a]||c;k.currentScope=f;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,h)}catch(p){e(p)}else d.splice(l,
1),l--,m--;if(g)break;f=f.$parent}while(f);return k},$broadcast:function(a,b){for(var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},g=[f].concat(Ba.call(arguments,1)),k,h;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];k=0;for(h=d.length;k<h;k++)if(d[k])try{d[k].apply(null,g)}catch(l){e(l)}else d.splice(k,1),k--,h--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}return f}};
var p=new k;return p}]}function cd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return y(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;if(!Q||8<=Q)if(f=ua(c).href,""!==f&&!f.match(e))return"unsafe:"+f;return c}}}function Be(b){if("self"===b)return b;if(v(b)){if(-1<b.indexOf("***"))throw xa("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,
"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if(jb(b))return RegExp("^"+b.source+"$");throw xa("imatcher");}function Gc(b){var a=[];y(b)&&r(b,function(b){a.push(Be(b))});return a}function be(){this.SCE_CONTEXTS=ga;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Gc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Gc(b));return a};this.$get=["$injector",function(c){function d(a){var b=
function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw xa("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var f=d(),g={};g[ga.HTML]=d(f);g[ga.CSS]=d(f);g[ga.URL]=d(f);g[ga.JS]=d(f);g[ga.RESOURCE_URL]=d(g[ga.URL]);return{trustAs:function(a,b){var c=g.hasOwnProperty(a)?g[a]:null;if(!c)throw xa("icontext",
a,b);if(null===b||b===t||""===b)return b;if("string"!==typeof b)throw xa("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===t||""===d)return d;var f=g.hasOwnProperty(c)?g[c]:null;if(f&&d instanceof f)return d.$$unwrapTrustedValue();if(c===ga.RESOURCE_URL){var f=ua(d.toString()),l,n,p=!1;l=0;for(n=b.length;l<n;l++)if("self"===b[l]?Pb(f):b[l].exec(f.href)){p=!0;break}if(p)for(l=0,n=a.length;l<n;l++)if("self"===a[l]?Pb(f):a[l].exec(f.href)){p=!1;break}if(p)return d;throw xa("insecurl",
d.toString());}if(c===ga.HTML)return e(d);throw xa("unsafe");},valueOf:function(a){return a instanceof f?a.$$unwrapTrustedValue():a}}}]}function ae(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw xa("iequirks");var e=ha(ga);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},
e.valueOf=Qa);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var f=e.parseAs,g=e.getTrusted,k=e.trustAs;r(ga,function(a,b){var c=K(b);e[Za("parse_as_"+c)]=function(b){return f(a,b)};e[Za("get_trusted_"+c)]=function(b){return g(a,b)};e[Za("trust_as_"+c)]=function(b){return k(a,b)}});return e}]}function ce(){this.$get=["$window","$document",function(b,a){var c={},d=U((/android (\d+)/.exec(K((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||
{}).userAgent),f=a[0]||{},g=f.documentMode,k,m=/^(Moz|webkit|O|ms)(?=[A-Z])/,h=f.body&&f.body.style,l=!1,n=!1;if(h){for(var p in h)if(l=m.exec(p)){k=l[0];k=k.substr(0,1).toUpperCase()+k.substr(1);break}k||(k="WebkitOpacity"in h&&"webkit");l=!!("transition"in h||k+"Transition"in h);n=!!("animation"in h||k+"Animation"in h);!d||l&&n||(l=v(f.body.style.webkitTransition),n=v(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!g||7<
g),hasEvent:function(a){if("input"==a&&9==Q)return!1;if(x(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Xa(),vendorPrefix:k,transitions:l,animations:n,android:d,msie:Q,msieDocumentMode:g}}]}function ee(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,k,m){var h=c.defer(),l=h.promise,n=y(m)&&!m;k=a.defer(function(){try{h.resolve(e())}catch(a){h.reject(a),d(a)}finally{delete f[l.$$timeoutId]}n||b.$apply()},k);l.$$timeoutId=k;f[k]=h;
return l}var f={};e.cancel=function(b){return b&&b.$$timeoutId in f?(f[b.$$timeoutId].reject("canceled"),delete f[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function ua(b,a){var c=b;Q&&(Y.setAttribute("href",c),c=Y.href);Y.setAttribute("href",c);return{href:Y.href,protocol:Y.protocol?Y.protocol.replace(/:$/,""):"",host:Y.host,search:Y.search?Y.search.replace(/^\?/,""):"",hash:Y.hash?Y.hash.replace(/^#/,""):"",hostname:Y.hostname,port:Y.port,pathname:"/"===Y.pathname.charAt(0)?Y.pathname:
"/"+Y.pathname}}function Pb(b){b=v(b)?ua(b):b;return b.protocol===Hc.protocol&&b.host===Hc.host}function fe(){this.$get=ba(W)}function mc(b){function a(d,e){if(T(d)){var f={};r(d,function(b,c){f[c]=a(c,b)});return f}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Ic);a("date",Jc);a("filter",Ce);a("json",De);a("limitTo",Ee);a("lowercase",Fe);a("number",Kc);a("orderBy",Lc);a("uppercase",Ge)}function Ce(){return function(b,
a,c){if(!J(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Va.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&kb.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,
b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var g in a)(function(b){"undefined"!==typeof a[b]&&e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var k=
b[g];e.check(k)&&d.push(k)}return d}}function Ic(b){var a=b.NUMBER_FORMATS;return function(b,d){x(d)&&(d=a.CURRENCY_SYM);return Mc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Kc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Mc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Mc(b,a,c,d,e){if(null==b||!isFinite(b)||T(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",k="",m=[],h=!1;if(-1!==g.indexOf("e")){var l=g.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&
l[3]>e+1?(g="0",b=0):(k=g,h=!0)}if(h)0<e&&(-1<b&&1>b)&&(k=b.toFixed(e));else{g=(g.split(Nc)[1]||"").length;x(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);0===b&&(f=!1);b=(""+b).split(Nc);g=b[0];b=b[1]||"";var l=0,n=a.lgSize,p=a.gSize;if(g.length>=n+p)for(l=g.length-n,h=0;h<l;h++)0===(l-h)%p&&0!==h&&(k+=c),k+=g.charAt(h);for(h=l;h<g.length;h++)0===(g.length-h)%n&&0!==h&&(k+=c),k+=g.charAt(h);for(;b.length<e;)b+="0";e&&"0"!==e&&(k+=d+b.substr(0,
e))}m.push(f?a.negPre:a.posPre);m.push(k);m.push(f?a.negSuf:a.posSuf);return m.join("")}function Xb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function $(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Xb(e,a,d)}}function vb(b,a){return function(c,d){var e=c["get"+b](),f=Ia(a?"SHORT"+b:b);return d[f][e]}}function Jc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,k=b[8]?
a.setUTCFullYear:a.setFullYear,m=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=U(b[9]+b[10]),g=U(b[9]+b[11]));k.call(a,U(b[1]),U(b[2])-1,U(b[3]));f=U(b[4]||0)-f;g=U(b[5]||0)-g;k=U(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));m.call(a,f,g,k,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var f="",g=[],k,m;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;v(c)&&(c=He.test(c)?U(c):a(c));ib(c)&&(c=new Date(c));
if(!ta(c))return c;for(;e;)(m=Ie.exec(e))?(g=g.concat(Ba.call(m,1)),e=g.pop()):(g.push(e),e=null);r(g,function(a){k=Je[a];f+=k?k(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return f}}function De(){return function(b){return na(b,!0)}}function Ee(){return function(b,a){if(!J(b)&&!v(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):U(a);if(v(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=
b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Lc(b){return function(a,c,d){function e(a,b){return Ua(b)?function(b,c){return a(c,b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c==d?(ta(a)&&ta(b)&&(a=a.valueOf(),b=b.valueOf()),"string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Pa(a)||!c)return a;c=J(c)?c:[c];c=Vc(c,function(a){var c=!1,d=a||Qa;if(v(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a);if(d.constant){var g=
d();return e(function(a,b){return f(a[g],b[g])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});for(var g=[],k=0;k<a.length;k++)g.push(a[k]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function ya(b){P(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ba(b)}function Oc(b,a,c,d){function e(a,c){c=c?"-"+mb(c,"-"):"";d.setClass(b,(a?wb:xb)+c,(a?xb:wb)+c)}var f=this,g=b.parent().controller("form")||yb,k=0,m=f.$error={},h=[];f.$name=
a.name||a.ngForm;f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;g.$addControl(f);b.addClass(Oa);e(!0);f.$addControl=function(a){Da(a.$name,"input");h.push(a);a.$name&&(f[a.$name]=a)};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];r(m,function(b,c){f.$setValidity(c,!0,a)});Sa(h,a)};f.$setValidity=function(a,b,c){var d=m[a];if(b)d&&(Sa(d,c),d.length||(k--,k||(e(b),f.$valid=!0,f.$invalid=!1),m[a]=!1,e(!0,a),g.$setValidity(a,!0,f)));else{k||e(b);if(d){if(-1!=Ra(d,c))return}else m[a]=
d=[],k++,e(!1,a),g.$setValidity(a,!1,f);d.push(c);f.$valid=!1;f.$invalid=!0}};f.$setDirty=function(){d.removeClass(b,Oa);d.addClass(b,zb);f.$dirty=!0;f.$pristine=!1;g.$setDirty()};f.$setPristine=function(){d.removeClass(b,zb);d.addClass(b,Oa);f.$dirty=!1;f.$pristine=!0;r(h,function(a){a.$setPristine()})}}function sa(b,a,c,d){b.$setValidity(a,c);return c?d:t}function Pc(b,a){var c,d;if(a)for(c=0;c<a.length;++c)if(d=a[c],b[d])return!0;return!1}function Ke(b,a,c,d,e){T(e)&&(b.$$hasNativeValidators=!0,
b.$parsers.push(function(f){if(b.$error[a]||Pc(e,d)||!Pc(e,c))return f;b.$setValidity(a,!1)}))}function Ab(b,a,c,d,e,f){var g=a.prop(Le),k=a[0].placeholder,m={},h=K(a[0].type);d.$$validityState=g;if(!e.android){var l=!1;a.on("compositionstart",function(a){l=!0});a.on("compositionend",function(){l=!1;n()})}var n=function(e){if(!l){var f=a.val();if(Q&&"input"===(e||m).type&&a[0].placeholder!==k)k=a[0].placeholder;else if("password"!==h&&Ua(c.ngTrim||"T")&&(f=aa(f)),e=g&&d.$$hasNativeValidators,d.$viewValue!==
f||""===f&&e)b.$root.$$phase?d.$setViewValue(f):b.$apply(function(){d.$setViewValue(f)})}};if(e.hasEvent("input"))a.on("input",n);else{var p,q=function(){p||(p=f.defer(function(){n();p=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||q()});if(e.hasEvent("paste"))a.on("paste cut",q)}a.on("change",n);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var s=c.ngPattern;s&&((e=s.match(/^\/(.*)\/([gim]*)$/))?(s=RegExp(e[1],e[2]),e=function(a){return sa(d,
"pattern",d.$isEmpty(a)||s.test(a),a)}):e=function(c){var e=b.$eval(s);if(!e||!e.test)throw C("ngPattern")("noregexp",s,e,ia(a));return sa(d,"pattern",d.$isEmpty(c)||e.test(c),c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var r=U(c.ngMinlength);e=function(a){return sa(d,"minlength",d.$isEmpty(a)||a.length>=r,a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var u=U(c.ngMaxlength);e=function(a){return sa(d,"maxlength",d.$isEmpty(a)||a.length<=u,a)};d.$parsers.push(e);
d.$formatters.push(e)}}function Yb(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],l=0;l<b.length;l++)if(e==b[l])continue a;c.push(e)}return c}function e(a){if(!J(a)){if(v(a))return a.split(" ");if(T(a)){var b=[];r(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,k){function m(a,b){var c=g.data("$classCounts")||{},d=[];r(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<
b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function h(b){if(!0===a||f.$index%2===a){var h=e(b||[]);if(!l){var q=m(h,1);k.$addClass(q)}else if(!Aa(b,l)){var s=e(l),q=d(h,s),h=d(s,h),h=m(h,-1),q=m(q,1);0===q.length?c.removeClass(g,h):0===h.length?c.addClass(g,q):c.setClass(g,q,h)}}l=ha(b)}var l;f.$watch(k[b],h,!0);k.$observe("class",function(a){h(f.$eval(k[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var h=e(f.$eval(k[b]));g===a?(g=m(h,1),k.$addClass(g)):
(g=m(h,-1),k.$removeClass(g))}})}}}]}var Le="validity",K=function(b){return v(b)?b.toLowerCase():b},kb=Object.prototype.hasOwnProperty,Ia=function(b){return v(b)?b.toUpperCase():b},Q,w,Ea,Ba=[].slice,Me=[].push,za=Object.prototype.toString,Ta=C("ng"),Va=W.angular||(W.angular={}),Ya,Ma,ma=["0","0","0"];Q=U((/msie (\d+)/.exec(K(navigator.userAgent))||[])[1]);isNaN(Q)&&(Q=U((/trident\/.*; rv:(\d+)/.exec(K(navigator.userAgent))||[])[1]));E.$inject=[];Qa.$inject=[];var J=function(){return P(Array.isArray)?
Array.isArray:function(b){return"[object Array]"===za.call(b)}}(),aa=function(){return String.prototype.trim?function(b){return v(b)?b.trim():b}:function(b){return v(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();Ma=9>Q?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?Ia(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Xa=function(){if(y(Xa.isActive_))return Xa.isActive_;var b=!(!X.querySelector("[ng-csp]")&&!X.querySelector("[data-ng-csp]"));
if(!b)try{new Function("")}catch(a){b=!0}return Xa.isActive_=b},Yc=/[A-Z]/g,ad={full:"1.2.26",major:1,minor:2,dot:26,codeName:"zucchini-expansion"};S.expando="ng339";var ab=S.cache={},ne=1,sb=W.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},$a=W.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)};S._data=function(b){return this.cache[b[this.expando]]||{}};var ie=/([\:\-\_]+(.))/g,
je=/^moz([A-Z])/,Hb=C("jqLite"),ke=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Ib=/<|&#?\w+;/,le=/<([\w:]+)/,me=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ea={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ea.optgroup=ea.option;ea.tbody=ea.tfoot=ea.colgroup=ea.caption=ea.thead;ea.th=
ea.td;var La=S.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===X.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),S(W).on("load",a))},toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?w(this[b]):w(this[this.length+b])},length:0,push:Me,sort:[].sort,splice:[].splice},qb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){qb[K(b)]=b});var rc={};r("input select option textarea button form details".split(" "),
function(b){rc[Ia(b)]=!0});r({data:Mb,removeData:Lb},function(b,a){S[a]=b});r({data:Mb,inheritedData:pb,scope:function(b){return w.data(b,"$scope")||pb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return w.data(b,"$isolateScope")||w.data(b,"$isolateScopeNoTemplate")},controller:oc,injector:function(b){return pb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Nb,css:function(b,a,c){a=Za(a);if(y(c))b.style[a]=c;else{var d;8>=Q&&(d=b.currentStyle&&b.currentStyle[a],
""===d&&(d="auto"));d=d||b.style[a];8>=Q&&(d=""===d?t:d);return d}},attr:function(b,a,c){var d=K(a);if(qb[d])if(y(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||E).specified?d:t;else if(y(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?t:b},prop:function(b,a,c){if(y(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];if(x(d))return e?b[e]:"";b[e]=d}var a=[];9>Q?(a[1]=
"innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(x(a)){if("SELECT"===Ma(b)&&b.multiple){var c=[];r(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(x(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Ja(d[c]);b.innerHTML=a},empty:pc},function(b,a){S.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==pc&&(2==b.length&&b!==Nb&&b!==oc?a:d)===t){if(T(a)){for(e=
0;e<g;e++)if(b===Mb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===t?Math.min(g,1):g;for(f=0;f<g;f++){var k=b(this[f],a,d);e=e?e+k:k}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});r({removeData:Lb,dealoc:Ja,on:function a(c,d,e,f){if(y(f))throw Hb("onargs");var g=oa(c,"events"),k=oa(c,"handle");g||oa(c,"events",g={});k||oa(c,"handle",k=oe(c,g));r(d.split(" "),function(d){var f=g[d];if(!f){if("mouseenter"==d||"mouseleave"==d){var l=X.body.contains||X.body.compareDocumentPosition?
function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};g[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||l(this,c))||k(a,d)})}else sb(c,d,k),g[d]=[];f=g[d]}f.push(e)})},off:nc,one:function(a,c,d){a=w(a);a.on(c,function f(){a.off(c,
d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;Ja(a);r(new S(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){r(new S(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;r(new S(c),function(c){a.insertBefore(c,
d)})}},wrap:function(a,c){c=w(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Ja(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;r(new S(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:ob,removeClass:nb,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=d;x(f)&&(f=!Nb(a,c));(f?ob:nb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;
for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Kb,triggerHandler:function(a,c,d){var e,f;e=c.type||c;var g=(oa(a,"events")||{})[e];g&&(e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopPropagation:E,type:e,target:a},c.type&&(e=D(e,c)),c=ha(g),f=d?[e].concat(d):[e],r(c,function(c){c.apply(a,f)}))}},function(a,c){S.prototype[c]=
function(c,e,f){for(var g,k=0;k<this.length;k++)x(g)?(g=a(this[k],c,e,f),y(g)&&(g=w(g))):Jb(g,a(this[k],c,e,f));return y(g)?g:this};S.prototype.bind=S.prototype.on;S.prototype.unbind=S.prototype.off});bb.prototype={put:function(a,c){this[Ka(a,this.nextUid)]=c},get:function(a){return this[Ka(a,this.nextUid)]},remove:function(a){var c=this[a=Ka(a,this.nextUid)];delete this[a];return c}};var qe=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,re=/,/,se=/^\s*(_?)(\S+?)\1\s*$/,pe=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
cb=C("$injector"),Ne=C("$animate"),Md=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Ne("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$timeout","$$asyncCallback",function(a,d){return{enter:function(a,c,g,k){g?g.after(a):(c&&c[0]||(c=g.parent()),c.append(a));k&&
d(k)},leave:function(a,c){a.remove();c&&d(c)},move:function(a,c,d,k){this.enter(a,c,d,k)},addClass:function(a,c,g){c=v(c)?c:J(c)?c.join(" "):"";r(a,function(a){ob(a,c)});g&&d(g)},removeClass:function(a,c,g){c=v(c)?c:J(c)?c.join(" "):"";r(a,function(a){nb(a,c)});g&&d(g)},setClass:function(a,c,g,k){r(a,function(a){ob(a,c);nb(a,g)});k&&d(k)},enabled:E}}]}],ja=C("$compile");ic.$inject=["$provide","$$sanitizeUriProvider"];var we=/^(x[\:\-_]|data[\:\-_])/i,yc=C("$interpolate"),Oe=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
ze={http:80,https:443,ftp:21},Sb=C("$location");Ub.prototype=Tb.prototype=Bc.prototype={$$html5:!1,$$replace:!1,absUrl:tb("$$absUrl"),url:function(a){if(x(a))return this.$$url;a=Oe.exec(a);a[1]&&this.path(decodeURIComponent(a[1]));(a[2]||a[1])&&this.search(a[3]||"");this.hash(a[5]||"");return this},protocol:tb("$$protocol"),host:tb("$$host"),port:tb("$$port"),path:Cc("$$path",function(a){a=a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;
case 1:if(v(a)||ib(a))a=a.toString(),this.$$search=ec(a);else if(T(a))r(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Sb("isrcharg");break;default:x(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Cc("$$hash",function(a){return a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};var la=C("$parse"),Fc={},wa,Pe=Function.prototype.call,Qe=Function.prototype.apply,Qc=Function.prototype.bind,gb={"null":function(){return null},
"true":function(){return!0},"false":function(){return!1},undefined:E,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return y(d)?y(e)?d+e:d:y(e)?e:t},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(y(d)?d:0)-(y(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":E,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,
c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Re={n:"\n",f:"\f",r:"\r",
t:"\t",v:"\v","'":"'",'"':'"'},Wb=function(a){this.options=a};Wb.prototype={constructor:Wb,lex:function(a){this.text=a;this.index=0;this.ch=t;this.lastCh=":";for(this.tokens=[];this.index<this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent();else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch}),
this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{a=this.ch+this.peek();var c=a+this.peek(2),d=gb[this.ch],e=gb[a],f=gb[c];f?(this.tokens.push({index:this.index,text:c,fn:f}),this.index+=3):e?(this.tokens.push({index:this.index,text:a,fn:e}),this.index+=2):d?(this.tokens.push({index:this.index,text:this.ch,fn:d}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},
was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=y(c)?"s "+c+"-"+this.index+" ["+
this.text.substring(c,d)+"]":" "+d;throw la("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=K(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=
1;this.tokens.push({index:c,text:a,literal:!0,constant:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,f,g,k;this.index<this.text.length;){k=this.text.charAt(this.index);if("."===k||this.isIdent(k)||this.isNumber(k))"."===k&&(e=this.index),c+=k;else break;this.index++}if(e)for(f=this.index;f<this.text.length;){k=this.text.charAt(f);if("("===k){g=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(k))f++;else break}d={index:d,text:c};if(gb.hasOwnProperty(c))d.fn=
gb[c],d.literal=!0,d.constant=!0;else{var m=Ec(c,this.options,this.text);d.fn=D(function(a,c){return m(a,c)},{assign:function(d,e){return ub(d,c,e,a.text,a.options)}})}this.tokens.push(d);g&&(this.tokens.push({index:e,text:"."}),this.tokens.push({index:e+1,text:g}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||
this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Re[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,string:d,literal:!0,constant:!0,fn:function(){return d}});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var fb=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};fb.ZERO=D(function(){return 0},{constant:!0});fb.prototype={constructor:fb,parse:function(a){this.text=
a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);a.literal=!!c.literal;a.constant=!!c.constant}for(var d;c=
this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw la("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw la("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;if(g===a||g===c||g===d||g===
e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return D(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return D(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return D(function(e,f){return c(e,f,a,d)},{constant:a.constant&&
d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0;f<a.length;f++){var g=a[f];g&&(e=g(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());
else{var e=function(a,e,k){k=[k];for(var m=0;m<d.length;m++)k.push(d[m](a,e));return c.apply(a,k)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,f){return a.assign(d,c(d,f),f)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.assignment();
if(d=this.expect(":"))return this.ternaryFn(a,c,this.assignment());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},
relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(fb.ZERO,a.fn,
this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=Ec(d,this.options,this.text);return D(function(c,d,k){return e(k||a(c,d))},{assign:function(e,g,k){(k=a(e,k))||a.assign(e,k={});return ub(k,d,g,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return D(function(e,f){var g=a(e,f),k=d(e,f),m;ka(k,c.text);if(!g)return t;(g=va(g[k],c.text))&&(g.then&&c.options.unwrapPromises)&&
(m=g,"$$v"in g||(m.$$v=t,m.then(function(a){m.$$v=a})),g=g.$$v);return g},{assign:function(e,f,g){var k=ka(d(e,g),c.text);(g=va(a(e,g),c.text))||a.assign(e,g={});return g[k]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(f,g){for(var k=[],m=c?c(f,g):f,h=0;h<d.length;h++)k.push(va(d[h](f,g),e.text));h=a(f,g,m)||E;va(m,e.text);var l=e.text;if(h){if(h.constructor===h)throw la("isecfn",
l);if(h===Pe||h===Qe||Qc&&h===Qc)throw la("isecff",l);}k=h.apply?h.apply(m,k):h(k[0],k[1],k[2],k[3],k[4]);return va(k,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return D(function(c,d){for(var g=[],k=0;k<a.length;k++)g.push(a[k](c,d));return g},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;
var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return D(function(c,d){for(var e={},m=0;m<a.length;m++){var h=a[m];e[h.key]=h.value(c,d)}return e},{literal:!0,constant:c})}};var Vb={},xa=C("$sce"),ga={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},Y=X.createElement("a"),Hc=ua(W.location.href,!0);mc.$inject=["$provide"];Ic.$inject=["$locale"];Kc.$inject=["$locale"];
var Nc=".",Je={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:vb("Month"),MMM:vb("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:vb("Day"),EEE:vb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Xb(Math[0<
a?"floor":"ceil"](a/60),2)+Xb(Math.abs(a%60),2))}},Ie=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,He=/^\-?\d+$/;Jc.$inject=["$locale"];var Fe=ba(K),Ge=ba(Ia);Lc.$inject=["$parse"];var dd=ba({restrict:"E",compile:function(a,c){8>=Q&&(c.href||c.name||c.$set("href",""),a.append(X.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===za.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||
a.preventDefault()})}}}),Fb={};r(qb,function(a,c){if("multiple"!=a){var d=pa("ng-"+c);Fb[d]=function(){return{priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});r(["src","srcset","href"],function(a){var c=pa("ng-"+a);Fb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,k=a;"href"===a&&"[object SVGAnimatedString]"===za.call(e.prop("href"))&&(k="xlinkHref",f.$attr[k]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(k,c),Q&&g&&e.prop(g,f[k])):"href"===
a&&f.$set(k,null)})}}}});var yb={$addControl:E,$removeControl:E,$setValidity:E,$setDirty:E,$setPristine:E};Oc.$inject=["$element","$attrs","$scope","$animate"];var Rc=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:Oc,compile:function(){return{pre:function(a,e,f,g){if(!f.action){var k=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};sb(e[0],"submit",k);e.on("$destroy",function(){c(function(){$a(e[0],"submit",k)},0,!1)})}var m=e.parent().controller("form"),
h=f.name||f.ngForm;h&&ub(a,h,g,h);if(m)e.on("$destroy",function(){m.$removeControl(g);h&&ub(a,h,t,h);D(g,yb)})}}}}}]},ed=Rc(),rd=Rc(!0),Se=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Te=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Ue=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Sc={text:Ab,number:function(a,c,d,e,f,g){Ab(a,c,d,e,f,g);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||Ue.test(a))return e.$setValidity("number",
!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return t});Ke(e,"number",Ve,null,e.$$validityState);e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);return sa(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);return sa(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return sa(e,"number",e.$isEmpty(a)||
ib(a),a)})},url:function(a,c,d,e,f,g){Ab(a,c,d,e,f,g);a=function(a){return sa(e,"url",e.$isEmpty(a)||Se.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,f,g){Ab(a,c,d,e,f,g);a=function(a){return sa(e,"email",e.$isEmpty(a)||Te.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){x(d.name)&&c.attr("name",hb());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};
d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var f=d.ngTrueValue,g=d.ngFalseValue;v(f)||(f=!0);v(g)||(g=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==f};e.$formatters.push(function(a){return a===f});e.$parsers.push(function(a){return a?f:g})},hidden:E,button:E,submit:E,reset:E,file:E},Ve=["badInput"],jc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",
link:function(d,e,f,g){g&&(Sc[K(f.type)]||Sc.text)(d,e,f,g,c,a)}}}],wb="ng-valid",xb="ng-invalid",Oa="ng-pristine",zb="ng-dirty",We=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate",function(a,c,d,e,f,g){function k(a,c){c=c?"-"+mb(c,"-"):"";g.removeClass(e,(a?xb:wb)+c);g.addClass(e,(a?wb:xb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=
d.name;var m=f(d.ngModel),h=m.assign;if(!h)throw C("ngModel")("nonassign",d.ngModel,ia(e));this.$render=E;this.$isEmpty=function(a){return x(a)||""===a||null===a||a!==a};var l=e.inheritedData("$formController")||yb,n=0,p=this.$error={};e.addClass(Oa);k(!0);this.$setValidity=function(a,c){p[a]!==!c&&(c?(p[a]&&n--,n||(k(!0),this.$valid=!0,this.$invalid=!1)):(k(!1),this.$invalid=!0,this.$valid=!1,n++),p[a]=!c,k(c,a),l.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;this.$pristine=
!0;g.removeClass(e,zb);g.addClass(e,Oa)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&(this.$dirty=!0,this.$pristine=!1,g.removeClass(e,Oa),g.addClass(e,zb),l.$setDirty());r(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,h(a,d),r(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}}))};var q=this;a.$watch(function(){var c=m(a);if(q.$modelValue!==c){var d=q.$formatters,e=d.length;for(q.$modelValue=c;e--;)c=d[e](c);q.$viewValue!==c&&(q.$viewValue=
c,q.$render())}return c})}],Gd=function(){return{require:["ngModel","^?form"],controller:We,link:function(a,c,d,e){var f=e[0],g=e[1]||yb;g.$addControl(f);a.$on("$destroy",function(){g.$removeControl(f)})}}},Id=ba({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),kc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var f=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",
!0),a};e.$formatters.push(f);e.$parsers.unshift(f);d.$observe("required",function(){f(e.$viewValue)})}}}},Hd=function(){return{require:"ngModel",link:function(a,c,d,e){var f=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!x(a)){var c=[];a&&r(a.split(f),function(a){a&&c.push(aa(a))});return c}});e.$formatters.push(function(a){return J(a)?a.join(", "):t});e.$isEmpty=function(a){return!a||!a.length}}}},Xe=/^(true|false|\d+)$/,Jd=function(){return{priority:100,
compile:function(a,c){return Xe.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},jd=ya({compile:function(a){a.addClass("ng-binding");return function(a,d,e){d.data("$binding",e.ngBind);a.$watch(e.ngBind,function(a){d.text(a==t?"":a)})}}}),ld=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],
kd=["$sce","$parse",function(a,c){return{compile:function(d){d.addClass("ng-binding");return function(d,f,g){f.data("$binding",g.ngBindHtml);var k=c(g.ngBindHtml);d.$watch(function(){return(k(d)||"").toString()},function(c){f.html(a.getTrustedHtml(k(d))||"")})}}}}],md=Yb("",!0),od=Yb("Odd",0),nd=Yb("Even",1),pd=ya({compile:function(a,c){c.$set("ngCloak",t);a.removeClass("ng-cloak")}}),qd=[function(){return{scope:!0,controller:"@",priority:500}}],lc={},Ye={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var c=pa("ng-"+a);lc[c]=["$parse","$rootScope",function(d,e){return{compile:function(f,g){var k=d(g[c]);return function(c,d){d.on(a,function(d){var f=function(){k(c,{$event:d})};Ye[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var td=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var k,m,h;c.$watch(e.ngIf,function(f){Ua(f)?m||(m=c.$new(),g(m,function(c){c[c.length++]=X.createComment(" end ngIf: "+e.ngIf+
" ");k={clone:c};a.enter(c,d.parent(),d)})):(h&&(h.remove(),h=null),m&&(m.$destroy(),m=null),k&&(h=Eb(k.clone),a.leave(h,function(){h=null}),k=null))})}}}],ud=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,c,d,e,f){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Va.noop,compile:function(g,k){var m=k.ngInclude||k.src,h=k.onload||"",l=k.autoscroll;return function(g,k,q,r,F){var u=0,t,w,R,z=function(){w&&(w.remove(),w=null);t&&(t.$destroy(),t=null);
R&&(e.leave(R,function(){w=null}),w=R,R=null)};g.$watch(f.parseAsResourceUrl(m),function(f){var m=function(){!y(l)||l&&!g.$eval(l)||d()},q=++u;f?(a.get(f,{cache:c}).success(function(a){if(q===u){var c=g.$new();r.template=a;a=F(c,function(a){z();e.enter(a,null,k,m)});t=c;R=a;t.$emit("$includeContentLoaded");g.$eval(h)}}).error(function(){q===u&&z()}),g.$emit("$includeContentRequested")):(z(),r.template=null)})}}}}],Kd=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",
link:function(c,d,e,f){d.html(f.template);a(d.contents())(c)}}}],vd=ya({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),wd=ya({terminal:!0,priority:1E3}),xd=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var k=g.count,m=g.$attr.when&&f.attr(g.$attr.when),h=g.offset||0,l=e.$eval(m)||{},n={},p=c.startSymbol(),q=c.endSymbol(),s=/^when(Minus)?(.+)$/;r(g,function(a,c){s.test(c)&&(l[K(c.replace("when","").replace("Minus","-"))]=
f.attr(g.$attr[c]))});r(l,function(a,e){n[e]=c(a.replace(d,p+k+"-"+h+q))});e.$watch(function(){var c=parseFloat(e.$eval(k));if(isNaN(c))return"";c in l||(c=a.pluralCat(c-h));return n[c](e,f,!0)},function(a){f.text(a)})}}}],yd=["$parse","$animate",function(a,c){var d=C("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,link:function(e,f,g,k,m){var h=g.ngRepeat,l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),n,p,q,s,t,u,A={$id:Ka};if(!l)throw d("iexp",
h);g=l[1];k=l[2];(l=l[3])?(n=a(l),p=function(a,c,d){u&&(A[u]=a);A[t]=c;A.$index=d;return n(e,A)}):(q=function(a,c){return Ka(c)},s=function(a){return a});l=g.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",g);t=l[3]||l[1];u=l[2];var y={};e.$watchCollection(k,function(a){var g,k,l=f[0],n,A={},B,I,H,v,E,C,x,J=[];if(Pa(a))C=a,E=p||q;else{E=p||s;C=[];for(H in a)a.hasOwnProperty(H)&&"$"!=H.charAt(0)&&C.push(H);C.sort()}B=C.length;k=J.length=C.length;for(g=0;g<k;g++)if(H=a===
C?g:C[g],v=a[H],n=E(H,v,g),Da(n,"`track by` id"),y.hasOwnProperty(n))x=y[n],delete y[n],A[n]=x,J[g]=x;else{if(A.hasOwnProperty(n))throw r(J,function(a){a&&a.scope&&(y[a.id]=a)}),d("dupes",h,n,na(v));J[g]={id:n};A[n]=!1}for(H in y)y.hasOwnProperty(H)&&(x=y[H],g=Eb(x.clone),c.leave(g),r(g,function(a){a.$$NG_REMOVED=!0}),x.scope.$destroy());g=0;for(k=C.length;g<k;g++){H=a===C?g:C[g];v=a[H];x=J[g];J[g-1]&&(l=J[g-1].clone[J[g-1].clone.length-1]);if(x.scope){I=x.scope;n=l;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);
x.clone[0]!=n&&c.move(Eb(x.clone),null,w(l));l=x.clone[x.clone.length-1]}else I=e.$new();I[t]=v;u&&(I[u]=H);I.$index=g;I.$first=0===g;I.$last=g===B-1;I.$middle=!(I.$first||I.$last);I.$odd=!(I.$even=0===(g&1));x.scope||m(I,function(a){a[a.length++]=X.createComment(" end ngRepeat: "+h+" ");c.enter(a,null,w(l));l=a;x.scope=I;x.clone=a;A[x.id]=x})}y=A})}}}],zd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Ua(c)?"removeClass":"addClass"](d,"ng-hide")})}}],sd=["$animate",
function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Ua(c)?"addClass":"removeClass"](d,"ng-hide")})}}],Ad=ya(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Bd=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],k=[],m=[],h=[];c.$watch(e.ngSwitch||e.on,function(d){var n,p;n=0;for(p=m.length;n<p;++n)m[n].remove();n=m.length=0;for(p=
h.length;n<p;++n){var q=k[n];h[n].$destroy();m[n]=q;a.leave(q,function(){m.splice(n,1)})}k.length=0;h.length=0;if(g=f.cases["!"+d]||f.cases["?"])c.$eval(e.change),r(g,function(d){var e=c.$new();h.push(e);d.transclude(e,function(c){var e=d.element;k.push(c);a.enter(c,e.parent(),e)})})})}}}],Cd=ya({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),Dd=
ya({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Fd=ya({link:function(a,c,d,e,f){if(!f)throw C("ngTransclude")("orphan",ia(c));f(function(a){c.empty();c.append(a)})}}),fd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Ze=C("ngOptions"),Ed=ba({terminal:!0}),gd=["$compile","$parse",function(a,c){var d=
/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:E};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var m=this,h={},l=e,n;m.databound=d.ngModel;m.init=function(a,c,d){l=a;n=d};m.addOption=function(c){Da(c,'"option value"');h[c]=!0;l.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};
m.removeOption=function(a){this.hasOption(a)&&(delete h[a],l.$viewValue==a&&this.renderUnknownOption(a))};m.renderUnknownOption=function(c){c="? "+Ka(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",!0)};m.hasOption=function(a){return h.hasOwnProperty(a)};c.$on("$destroy",function(){m.renderUnknownOption=E})}],link:function(e,g,k,m){function h(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(v.parent()&&v.remove(),c.val(a),""===a&&u.prop("selected",!0)):x(a)&&u?c.val(""):e.renderUnknownOption(a)};
c.on("change",function(){a.$apply(function(){v.parent()&&v.remove();d.$setViewValue(c.val())})})}function l(a,c,d){var e;d.$render=function(){var a=new bb(d.$viewValue);r(c.find("option"),function(c){c.selected=y(a.get(c.value))})};a.$watch(function(){Aa(e,d.$viewValue)||(e=ha(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function k(){var a={"":[]},c=[""],d,h,
s,t,v;s=g.$modelValue;t=w(e)||[];var E=n?Zb(t):t,I,M,B;M={};B=!1;if(q)if(h=g.$modelValue,x&&J(h))for(B=new bb([]),d={},v=0;v<h.length;v++)d[m]=h[v],B.put(x(e,d),h[v]);else B=new bb(h);v=B;var D,K;for(B=0;I=E.length,B<I;B++){h=B;if(n){h=E[B];if("$"===h.charAt(0))continue;M[n]=h}M[m]=t[h];d=r(e,M)||"";(h=a[d])||(h=a[d]=[],c.push(d));q?d=y(v.remove(x?x(e,M):u(e,M))):(x?(d={},d[m]=s,d=x(e,d)===x(e,M)):d=s===u(e,M),v=v||d);D=l(e,M);D=y(D)?D:"";h.push({id:x?x(e,M):n?E[B]:B,label:D,selected:d})}q||(F||null===
s?a[""].unshift({id:"",label:"",selected:!v}):v||a[""].unshift({id:"?",label:"",selected:!0}));M=0;for(E=c.length;M<E;M++){d=c[M];h=a[d];z.length<=M?(s={element:C.clone().attr("label",d),label:h.label},t=[s],z.push(t),f.append(s.element)):(t=z[M],s=t[0],s.label!=d&&s.element.attr("label",s.label=d));D=null;B=0;for(I=h.length;B<I;B++)d=h[B],(v=t[B+1])?(D=v.element,v.label!==d.label&&D.text(v.label=d.label),v.id!==d.id&&D.val(v.id=d.id),D[0].selected!==d.selected&&(D.prop("selected",v.selected=d.selected),
Q&&D.prop("selected",v.selected))):(""===d.id&&F?K=F:(K=A.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).text(d.label),t.push({element:K,label:d.label,id:d.id,selected:d.selected}),p.addOption(d.label,K),D?D.after(K):s.element.append(K),D=K);for(B++;t.length>B;)d=t.pop(),p.removeOption(d.label),d.element.remove()}for(;z.length>M;)z.pop()[0].element.remove()}var h;if(!(h=s.match(d)))throw Ze("iexp",s,ia(f));var l=c(h[2]||h[1]),m=h[4]||h[6],n=h[5],r=c(h[3]||""),u=c(h[2]?
h[1]:m),w=c(h[7]),x=h[8]?c(h[8]):null,z=[[{element:f,label:""}]];F&&(a(F)(e),F.removeClass("ng-scope"),F.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=w(e)||[],d={},h,l,p,r,s,v,y;if(q)for(l=[],r=0,v=z.length;r<v;r++)for(a=z[r],p=1,s=a.length;p<s;p++){if((h=a[p].element)[0].selected){h=h.val();n&&(d[n]=h);if(x)for(y=0;y<c.length&&(d[m]=c[y],x(e,d)!=h);y++);else d[m]=c[h];l.push(u(e,d))}}else if(h=f.val(),"?"==h)l=t;else if(""===h)l=null;else if(x)for(y=0;y<c.length;y++){if(d[m]=
c[y],x(e,d)==h){l=u(e,d);break}}else d[m]=c[h],n&&(d[n]=h),l=u(e,d);g.$setViewValue(l);k()})});g.$render=k;e.$watchCollection(w,k);e.$watchCollection(function(){var a={},c=w(e);if(c){for(var d=Array(c.length),f=0,g=c.length;f<g;f++)a[m]=c[f],d[f]=l(e,a);return d}},k);q&&e.$watchCollection(function(){return g.$modelValue},k)}if(m[1]){var p=m[0];m=m[1];var q=k.multiple,s=k.ngOptions,F=!1,u,A=w(X.createElement("option")),C=w(X.createElement("optgroup")),v=A.clone();k=0;for(var z=g.children(),E=z.length;k<
E;k++)if(""===z[k].value){u=F=z.eq(k);break}p.init(m,F,v);q&&(m.$isEmpty=function(a){return!a||0===a.length});s?n(e,g,m):q?l(e,g,m):h(e,g,m,p)}}}}],id=["$interpolate",function(a){var c={addOption:E,removeOption:E};return{restrict:"E",priority:100,compile:function(d,e){if(x(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var h=d.parent(),l=h.data("$selectController")||h.parent().data("$selectController");l&&l.databound?d.prop("selected",!1):l=c;f?a.$watch(f,function(a,
c){e.$set("value",a);a!==c&&l.removeOption(c);l.addOption(a)}):l.addOption(e.value);d.on("$destroy",function(){l.removeOption(e.value)})}}}}],hd=ba({restrict:"E",terminal:!0});W.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):((Ea=W.jQuery)&&Ea.fn.on?(w=Ea,D(Ea.fn,{scope:La.scope,isolateScope:La.isolateScope,controller:La.controller,injector:La.injector,inheritedData:La.inheritedData}),Gb("remove",!0,!0,!1),Gb("empty",!1,!1,!1),Gb("html",!1,!1,!0)):w=S,Va.element=w,
$c(Va),w(X).ready(function(){Xc(X,fc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>');
//# sourceMappingURL=angular.min.js.map
;
(function(window, angular, undefined) {'use strict';

/**
 * @ngdoc module
 * @name ngRoute
 * @description
 *
 * # ngRoute
 *
 * The `ngRoute` module provides routing and deeplinking services and directives for angular apps.
 *
 * ## Example
 * See {@link ngRoute.$route#example $route} for an example of configuring and using `ngRoute`.
 *
 *
 * <div doc-module-components="ngRoute"></div>
 */
 /* global -ngRouteModule */
var ngRouteModule = angular.module('ngRoute', ['ng']).
                        provider('$route', $RouteProvider);

/**
 * @ngdoc provider
 * @name $routeProvider
 * @kind function
 *
 * @description
 *
 * Used for configuring routes.
 *
 * ## Example
 * See {@link ngRoute.$route#example $route} for an example of configuring and using `ngRoute`.
 *
 * ## Dependencies
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 */
function $RouteProvider(){
  function inherit(parent, extra) {
    return angular.extend(new (angular.extend(function() {}, {prototype:parent}))(), extra);
  }

  var routes = {};

  /**
   * @ngdoc method
   * @name $routeProvider#when
   *
   * @param {string} path Route path (matched against `$location.path`). If `$location.path`
   *    contains redundant trailing slash or is missing one, the route will still match and the
   *    `$location.path` will be updated to add or drop the trailing slash to exactly match the
   *    route definition.
   *
   *    * `path` can contain named groups starting with a colon: e.g. `:name`. All characters up
   *        to the next slash are matched and stored in `$routeParams` under the given `name`
   *        when the route matches.
   *    * `path` can contain named groups starting with a colon and ending with a star:
   *        e.g.`:name*`. All characters are eagerly stored in `$routeParams` under the given `name`
   *        when the route matches.
   *    * `path` can contain optional named groups with a question mark: e.g.`:name?`.
   *
   *    For example, routes like `/color/:color/largecode/:largecode*\/edit` will match
   *    `/color/brown/largecode/code/with/slashes/edit` and extract:
   *
   *    * `color: brown`
   *    * `largecode: code/with/slashes`.
   *
   *
   * @param {Object} route Mapping information to be assigned to `$route.current` on route
   *    match.
   *
   *    Object properties:
   *
   *    - `controller` – `{(string|function()=}` – Controller fn that should be associated with
   *      newly created scope or the name of a {@link angular.Module#controller registered
   *      controller} if passed as a string.
   *    - `controllerAs` – `{string=}` – A controller alias name. If present the controller will be
   *      published to scope under the `controllerAs` name.
   *    - `template` – `{string=|function()=}` – html template as a string or a function that
   *      returns an html template as a string which should be used by {@link
   *      ngRoute.directive:ngView ngView} or {@link ng.directive:ngInclude ngInclude} directives.
   *      This property takes precedence over `templateUrl`.
   *
   *      If `template` is a function, it will be called with the following parameters:
   *
   *      - `{Array.<Object>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route
   *
   *    - `templateUrl` – `{string=|function()=}` – path or function that returns a path to an html
   *      template that should be used by {@link ngRoute.directive:ngView ngView}.
   *
   *      If `templateUrl` is a function, it will be called with the following parameters:
   *
   *      - `{Array.<Object>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route
   *
   *    - `resolve` - `{Object.<string, function>=}` - An optional map of dependencies which should
   *      be injected into the controller. If any of these dependencies are promises, the router
   *      will wait for them all to be resolved or one to be rejected before the controller is
   *      instantiated.
   *      If all the promises are resolved successfully, the values of the resolved promises are
   *      injected and {@link ngRoute.$route#$routeChangeSuccess $routeChangeSuccess} event is
   *      fired. If any of the promises are rejected the
   *      {@link ngRoute.$route#$routeChangeError $routeChangeError} event is fired. The map object
   *      is:
   *
   *      - `key` – `{string}`: a name of a dependency to be injected into the controller.
   *      - `factory` - `{string|function}`: If `string` then it is an alias for a service.
   *        Otherwise if function, then it is {@link auto.$injector#invoke injected}
   *        and the return value is treated as the dependency. If the result is a promise, it is
   *        resolved before its value is injected into the controller. Be aware that
   *        `ngRoute.$routeParams` will still refer to the previous route within these resolve
   *        functions.  Use `$route.current.params` to access the new route parameters, instead.
   *
   *    - `redirectTo` – {(string|function())=} – value to update
   *      {@link ng.$location $location} path with and trigger route redirection.
   *
   *      If `redirectTo` is a function, it will be called with the following parameters:
   *
   *      - `{Object.<string>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route templateUrl.
   *      - `{string}` - current `$location.path()`
   *      - `{Object}` - current `$location.search()`
   *
   *      The custom `redirectTo` function is expected to return a string which will be used
   *      to update `$location.path()` and `$location.search()`.
   *
   *    - `[reloadOnSearch=true]` - {boolean=} - reload route when only `$location.search()`
   *      or `$location.hash()` changes.
   *
   *      If the option is set to `false` and url in the browser changes, then
   *      `$routeUpdate` event is broadcasted on the root scope.
   *
   *    - `[caseInsensitiveMatch=false]` - {boolean=} - match routes without being case sensitive
   *
   *      If the option is set to `true`, then the particular route can be matched without being
   *      case sensitive
   *
   * @returns {Object} self
   *
   * @description
   * Adds a new route definition to the `$route` service.
   */
  this.when = function(path, route) {
    routes[path] = angular.extend(
      {reloadOnSearch: true},
      route,
      path && pathRegExp(path, route)
    );

    // create redirection for trailing slashes
    if (path) {
      var redirectPath = (path[path.length-1] == '/')
            ? path.substr(0, path.length-1)
            : path +'/';

      routes[redirectPath] = angular.extend(
        {redirectTo: path},
        pathRegExp(redirectPath, route)
      );
    }

    return this;
  };

   /**
    * @param path {string} path
    * @param opts {Object} options
    * @return {?Object}
    *
    * @description
    * Normalizes the given path, returning a regular expression
    * and the original path.
    *
    * Inspired by pathRexp in visionmedia/express/lib/utils.js.
    */
  function pathRegExp(path, opts) {
    var insensitive = opts.caseInsensitiveMatch,
        ret = {
          originalPath: path,
          regexp: path
        },
        keys = ret.keys = [];

    path = path
      .replace(/([().])/g, '\\$1')
      .replace(/(\/)?:(\w+)([\?\*])?/g, function(_, slash, key, option){
        var optional = option === '?' ? option : null;
        var star = option === '*' ? option : null;
        keys.push({ name: key, optional: !!optional });
        slash = slash || '';
        return ''
          + (optional ? '' : slash)
          + '(?:'
          + (optional ? slash : '')
          + (star && '(.+?)' || '([^/]+)')
          + (optional || '')
          + ')'
          + (optional || '');
      })
      .replace(/([\/$\*])/g, '\\$1');

    ret.regexp = new RegExp('^' + path + '$', insensitive ? 'i' : '');
    return ret;
  }

  /**
   * @ngdoc method
   * @name $routeProvider#otherwise
   *
   * @description
   * Sets route definition that will be used on route change when no other route definition
   * is matched.
   *
   * @param {Object} params Mapping information to be assigned to `$route.current`.
   * @returns {Object} self
   */
  this.otherwise = function(params) {
    this.when(null, params);
    return this;
  };


  this.$get = ['$rootScope',
               '$location',
               '$routeParams',
               '$q',
               '$injector',
               '$http',
               '$templateCache',
               '$sce',
      function($rootScope, $location, $routeParams, $q, $injector, $http, $templateCache, $sce) {

    /**
     * @ngdoc service
     * @name $route
     * @requires $location
     * @requires $routeParams
     *
     * @property {Object} current Reference to the current route definition.
     * The route definition contains:
     *
     *   - `controller`: The controller constructor as define in route definition.
     *   - `locals`: A map of locals which is used by {@link ng.$controller $controller} service for
     *     controller instantiation. The `locals` contain
     *     the resolved values of the `resolve` map. Additionally the `locals` also contain:
     *
     *     - `$scope` - The current route scope.
     *     - `$template` - The current route template HTML.
     *
     * @property {Object} routes Object with all route configuration Objects as its properties.
     *
     * @description
     * `$route` is used for deep-linking URLs to controllers and views (HTML partials).
     * It watches `$location.url()` and tries to map the path to an existing route definition.
     *
     * Requires the {@link ngRoute `ngRoute`} module to be installed.
     *
     * You can define routes through {@link ngRoute.$routeProvider $routeProvider}'s API.
     *
     * The `$route` service is typically used in conjunction with the
     * {@link ngRoute.directive:ngView `ngView`} directive and the
     * {@link ngRoute.$routeParams `$routeParams`} service.
     *
     * @example
     * This example shows how changing the URL hash causes the `$route` to match a route against the
     * URL, and the `ngView` pulls in the partial.
     *
     * Note that this example is using {@link ng.directive:script inlined templates}
     * to get it working on jsfiddle as well.
     *
     * <example name="$route-service" module="ngRouteExample"
     *          deps="angular-route.js" fixBase="true">
     *   <file name="index.html">
     *     <div ng-controller="MainController">
     *       Choose:
     *       <a href="Book/Moby">Moby</a> |
     *       <a href="Book/Moby/ch/1">Moby: Ch1</a> |
     *       <a href="Book/Gatsby">Gatsby</a> |
     *       <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
     *       <a href="Book/Scarlet">Scarlet Letter</a><br/>
     *
     *       <div ng-view></div>
     *
     *       <hr />
     *
     *       <pre>$location.path() = {{$location.path()}}</pre>
     *       <pre>$route.current.templateUrl = {{$route.current.templateUrl}}</pre>
     *       <pre>$route.current.params = {{$route.current.params}}</pre>
     *       <pre>$route.current.scope.name = {{$route.current.scope.name}}</pre>
     *       <pre>$routeParams = {{$routeParams}}</pre>
     *     </div>
     *   </file>
     *
     *   <file name="book.html">
     *     controller: {{name}}<br />
     *     Book Id: {{params.bookId}}<br />
     *   </file>
     *
     *   <file name="chapter.html">
     *     controller: {{name}}<br />
     *     Book Id: {{params.bookId}}<br />
     *     Chapter Id: {{params.chapterId}}
     *   </file>
     *
     *   <file name="script.js">
     *     angular.module('ngRouteExample', ['ngRoute'])
     *
     *      .controller('MainController', function($scope, $route, $routeParams, $location) {
     *          $scope.$route = $route;
     *          $scope.$location = $location;
     *          $scope.$routeParams = $routeParams;
     *      })
     *
     *      .controller('BookController', function($scope, $routeParams) {
     *          $scope.name = "BookController";
     *          $scope.params = $routeParams;
     *      })
     *
     *      .controller('ChapterController', function($scope, $routeParams) {
     *          $scope.name = "ChapterController";
     *          $scope.params = $routeParams;
     *      })
     *
     *     .config(function($routeProvider, $locationProvider) {
     *       $routeProvider
     *        .when('/Book/:bookId', {
     *         templateUrl: 'book.html',
     *         controller: 'BookController',
     *         resolve: {
     *           // I will cause a 1 second delay
     *           delay: function($q, $timeout) {
     *             var delay = $q.defer();
     *             $timeout(delay.resolve, 1000);
     *             return delay.promise;
     *           }
     *         }
     *       })
     *       .when('/Book/:bookId/ch/:chapterId', {
     *         templateUrl: 'chapter.html',
     *         controller: 'ChapterController'
     *       });
     *
     *       // configure html5 to get links working on jsfiddle
     *       $locationProvider.html5Mode(true);
     *     });
     *
     *   </file>
     *
     *   <file name="protractor.js" type="protractor">
     *     it('should load and compile correct template', function() {
     *       element(by.linkText('Moby: Ch1')).click();
     *       var content = element(by.css('[ng-view]')).getText();
     *       expect(content).toMatch(/controller\: ChapterController/);
     *       expect(content).toMatch(/Book Id\: Moby/);
     *       expect(content).toMatch(/Chapter Id\: 1/);
     *
     *       element(by.partialLinkText('Scarlet')).click();
     *
     *       content = element(by.css('[ng-view]')).getText();
     *       expect(content).toMatch(/controller\: BookController/);
     *       expect(content).toMatch(/Book Id\: Scarlet/);
     *     });
     *   </file>
     * </example>
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeStart
     * @eventType broadcast on root scope
     * @description
     * Broadcasted before a route change. At this  point the route services starts
     * resolving all of the dependencies needed for the route change to occur.
     * Typically this involves fetching the view template as well as any dependencies
     * defined in `resolve` route property. Once  all of the dependencies are resolved
     * `$routeChangeSuccess` is fired.
     *
     * @param {Object} angularEvent Synthetic event object.
     * @param {Route} next Future route information.
     * @param {Route} current Current route information.
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeSuccess
     * @eventType broadcast on root scope
     * @description
     * Broadcasted after a route dependencies are resolved.
     * {@link ngRoute.directive:ngView ngView} listens for the directive
     * to instantiate the controller and render the view.
     *
     * @param {Object} angularEvent Synthetic event object.
     * @param {Route} current Current route information.
     * @param {Route|Undefined} previous Previous route information, or undefined if current is
     * first route entered.
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeError
     * @eventType broadcast on root scope
     * @description
     * Broadcasted if any of the resolve promises are rejected.
     *
     * @param {Object} angularEvent Synthetic event object
     * @param {Route} current Current route information.
     * @param {Route} previous Previous route information.
     * @param {Route} rejection Rejection of the promise. Usually the error of the failed promise.
     */

    /**
     * @ngdoc event
     * @name $route#$routeUpdate
     * @eventType broadcast on root scope
     * @description
     *
     * The `reloadOnSearch` property has been set to false, and we are reusing the same
     * instance of the Controller.
     */

    var forceReload = false,
        $route = {
          routes: routes,

          /**
           * @ngdoc method
           * @name $route#reload
           *
           * @description
           * Causes `$route` service to reload the current route even if
           * {@link ng.$location $location} hasn't changed.
           *
           * As a result of that, {@link ngRoute.directive:ngView ngView}
           * creates new scope, reinstantiates the controller.
           */
          reload: function() {
            forceReload = true;
            $rootScope.$evalAsync(updateRoute);
          }
        };

    $rootScope.$on('$locationChangeSuccess', updateRoute);

    return $route;

    /////////////////////////////////////////////////////

    /**
     * @param on {string} current url
     * @param route {Object} route regexp to match the url against
     * @return {?Object}
     *
     * @description
     * Check if the route matches the current url.
     *
     * Inspired by match in
     * visionmedia/express/lib/router/router.js.
     */
    function switchRouteMatcher(on, route) {
      var keys = route.keys,
          params = {};

      if (!route.regexp) return null;

      var m = route.regexp.exec(on);
      if (!m) return null;

      for (var i = 1, len = m.length; i < len; ++i) {
        var key = keys[i - 1];

        var val = m[i];

        if (key && val) {
          params[key.name] = val;
        }
      }
      return params;
    }

    function updateRoute() {
      var next = parseRoute(),
          last = $route.current;

      if (next && last && next.$$route === last.$$route
          && angular.equals(next.pathParams, last.pathParams)
          && !next.reloadOnSearch && !forceReload) {
        last.params = next.params;
        angular.copy(last.params, $routeParams);
        $rootScope.$broadcast('$routeUpdate', last);
      } else if (next || last) {
        forceReload = false;
        $rootScope.$broadcast('$routeChangeStart', next, last);
        $route.current = next;
        if (next) {
          if (next.redirectTo) {
            if (angular.isString(next.redirectTo)) {
              $location.path(interpolate(next.redirectTo, next.params)).search(next.params)
                       .replace();
            } else {
              $location.url(next.redirectTo(next.pathParams, $location.path(), $location.search()))
                       .replace();
            }
          }
        }

        $q.when(next).
          then(function() {
            if (next) {
              var locals = angular.extend({}, next.resolve),
                  template, templateUrl;

              angular.forEach(locals, function(value, key) {
                locals[key] = angular.isString(value) ?
                    $injector.get(value) : $injector.invoke(value);
              });

              if (angular.isDefined(template = next.template)) {
                if (angular.isFunction(template)) {
                  template = template(next.params);
                }
              } else if (angular.isDefined(templateUrl = next.templateUrl)) {
                if (angular.isFunction(templateUrl)) {
                  templateUrl = templateUrl(next.params);
                }
                templateUrl = $sce.getTrustedResourceUrl(templateUrl);
                if (angular.isDefined(templateUrl)) {
                  next.loadedTemplateUrl = templateUrl;
                  template = $http.get(templateUrl, {cache: $templateCache}).
                      then(function(response) { return response.data; });
                }
              }
              if (angular.isDefined(template)) {
                locals['$template'] = template;
              }
              return $q.all(locals);
            }
          }).
          // after route change
          then(function(locals) {
            if (next == $route.current) {
              if (next) {
                next.locals = locals;
                angular.copy(next.params, $routeParams);
              }
              $rootScope.$broadcast('$routeChangeSuccess', next, last);
            }
          }, function(error) {
            if (next == $route.current) {
              $rootScope.$broadcast('$routeChangeError', next, last, error);
            }
          });
      }
    }


    /**
     * @returns {Object} the current active route, by matching it against the URL
     */
    function parseRoute() {
      // Match a route
      var params, match;
      angular.forEach(routes, function(route, path) {
        if (!match && (params = switchRouteMatcher($location.path(), route))) {
          match = inherit(route, {
            params: angular.extend({}, $location.search(), params),
            pathParams: params});
          match.$$route = route;
        }
      });
      // No route matched; fallback to "otherwise" route
      return match || routes[null] && inherit(routes[null], {params: {}, pathParams:{}});
    }

    /**
     * @returns {string} interpolation of the redirect path with the parameters
     */
    function interpolate(string, params) {
      var result = [];
      angular.forEach((string||'').split(':'), function(segment, i) {
        if (i === 0) {
          result.push(segment);
        } else {
          var segmentMatch = segment.match(/(\w+)(.*)/);
          var key = segmentMatch[1];
          result.push(params[key]);
          result.push(segmentMatch[2] || '');
          delete params[key];
        }
      });
      return result.join('');
    }
  }];
}

ngRouteModule.provider('$routeParams', $RouteParamsProvider);


/**
 * @ngdoc service
 * @name $routeParams
 * @requires $route
 *
 * @description
 * The `$routeParams` service allows you to retrieve the current set of route parameters.
 *
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 *
 * The route parameters are a combination of {@link ng.$location `$location`}'s
 * {@link ng.$location#search `search()`} and {@link ng.$location#path `path()`}.
 * The `path` parameters are extracted when the {@link ngRoute.$route `$route`} path is matched.
 *
 * In case of parameter name collision, `path` params take precedence over `search` params.
 *
 * The service guarantees that the identity of the `$routeParams` object will remain unchanged
 * (but its properties will likely change) even when a route change occurs.
 *
 * Note that the `$routeParams` are only updated *after* a route change completes successfully.
 * This means that you cannot rely on `$routeParams` being correct in route resolve functions.
 * Instead you can use `$route.current.params` to access the new route's parameters.
 *
 * @example
 * ```js
 *  // Given:
 *  // URL: http://server.com/index.html#/Chapter/1/Section/2?search=moby
 *  // Route: /Chapter/:chapterId/Section/:sectionId
 *  //
 *  // Then
 *  $routeParams ==> {chapterId:'1', sectionId:'2', search:'moby'}
 * ```
 */
function $RouteParamsProvider() {
  this.$get = function() { return {}; };
}

ngRouteModule.directive('ngView', ngViewFactory);
ngRouteModule.directive('ngView', ngViewFillContentFactory);


/**
 * @ngdoc directive
 * @name ngView
 * @restrict ECA
 *
 * @description
 * # Overview
 * `ngView` is a directive that complements the {@link ngRoute.$route $route} service by
 * including the rendered template of the current route into the main layout (`index.html`) file.
 * Every time the current route changes, the included view changes with it according to the
 * configuration of the `$route` service.
 *
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 *
 * @animations
 * enter - animation is used to bring new content into the browser.
 * leave - animation is used to animate existing content away.
 *
 * The enter and leave animation occur concurrently.
 *
 * @scope
 * @priority 400
 * @param {string=} onload Expression to evaluate whenever the view updates.
 *
 * @param {string=} autoscroll Whether `ngView` should call {@link ng.$anchorScroll
 *                  $anchorScroll} to scroll the viewport after the view is updated.
 *
 *                  - If the attribute is not set, disable scrolling.
 *                  - If the attribute is set without value, enable scrolling.
 *                  - Otherwise enable scrolling only if the `autoscroll` attribute value evaluated
 *                    as an expression yields a truthy value.
 * @example
    <example name="ngView-directive" module="ngViewExample"
             deps="angular-route.js;angular-animate.js"
             animations="true" fixBase="true">
      <file name="index.html">
        <div ng-controller="MainCtrl as main">
          Choose:
          <a href="Book/Moby">Moby</a> |
          <a href="Book/Moby/ch/1">Moby: Ch1</a> |
          <a href="Book/Gatsby">Gatsby</a> |
          <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
          <a href="Book/Scarlet">Scarlet Letter</a><br/>

          <div class="view-animate-container">
            <div ng-view class="view-animate"></div>
          </div>
          <hr />

          <pre>$location.path() = {{main.$location.path()}}</pre>
          <pre>$route.current.templateUrl = {{main.$route.current.templateUrl}}</pre>
          <pre>$route.current.params = {{main.$route.current.params}}</pre>
          <pre>$route.current.scope.name = {{main.$route.current.scope.name}}</pre>
          <pre>$routeParams = {{main.$routeParams}}</pre>
        </div>
      </file>

      <file name="book.html">
        <div>
          controller: {{book.name}}<br />
          Book Id: {{book.params.bookId}}<br />
        </div>
      </file>

      <file name="chapter.html">
        <div>
          controller: {{chapter.name}}<br />
          Book Id: {{chapter.params.bookId}}<br />
          Chapter Id: {{chapter.params.chapterId}}
        </div>
      </file>

      <file name="animations.css">
        .view-animate-container {
          position:relative;
          height:100px!important;
          position:relative;
          background:white;
          border:1px solid black;
          height:40px;
          overflow:hidden;
        }

        .view-animate {
          padding:10px;
        }

        .view-animate.ng-enter, .view-animate.ng-leave {
          -webkit-transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;
          transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;

          display:block;
          width:100%;
          border-left:1px solid black;

          position:absolute;
          top:0;
          left:0;
          right:0;
          bottom:0;
          padding:10px;
        }

        .view-animate.ng-enter {
          left:100%;
        }
        .view-animate.ng-enter.ng-enter-active {
          left:0;
        }
        .view-animate.ng-leave.ng-leave-active {
          left:-100%;
        }
      </file>

      <file name="script.js">
        angular.module('ngViewExample', ['ngRoute', 'ngAnimate'])
          .config(['$routeProvider', '$locationProvider',
            function($routeProvider, $locationProvider) {
              $routeProvider
                .when('/Book/:bookId', {
                  templateUrl: 'book.html',
                  controller: 'BookCtrl',
                  controllerAs: 'book'
                })
                .when('/Book/:bookId/ch/:chapterId', {
                  templateUrl: 'chapter.html',
                  controller: 'ChapterCtrl',
                  controllerAs: 'chapter'
                });

              // configure html5 to get links working on jsfiddle
              $locationProvider.html5Mode(true);
          }])
          .controller('MainCtrl', ['$route', '$routeParams', '$location',
            function($route, $routeParams, $location) {
              this.$route = $route;
              this.$location = $location;
              this.$routeParams = $routeParams;
          }])
          .controller('BookCtrl', ['$routeParams', function($routeParams) {
            this.name = "BookCtrl";
            this.params = $routeParams;
          }])
          .controller('ChapterCtrl', ['$routeParams', function($routeParams) {
            this.name = "ChapterCtrl";
            this.params = $routeParams;
          }]);

      </file>

      <file name="protractor.js" type="protractor">
        it('should load and compile correct template', function() {
          element(by.linkText('Moby: Ch1')).click();
          var content = element(by.css('[ng-view]')).getText();
          expect(content).toMatch(/controller\: ChapterCtrl/);
          expect(content).toMatch(/Book Id\: Moby/);
          expect(content).toMatch(/Chapter Id\: 1/);

          element(by.partialLinkText('Scarlet')).click();

          content = element(by.css('[ng-view]')).getText();
          expect(content).toMatch(/controller\: BookCtrl/);
          expect(content).toMatch(/Book Id\: Scarlet/);
        });
      </file>
    </example>
 */


/**
 * @ngdoc event
 * @name ngView#$viewContentLoaded
 * @eventType emit on the current ngView scope
 * @description
 * Emitted every time the ngView content is reloaded.
 */
ngViewFactory.$inject = ['$route', '$anchorScroll', '$animate'];
function ngViewFactory(   $route,   $anchorScroll,   $animate) {
  return {
    restrict: 'ECA',
    terminal: true,
    priority: 400,
    transclude: 'element',
    link: function(scope, $element, attr, ctrl, $transclude) {
        var currentScope,
            currentElement,
            previousElement,
            autoScrollExp = attr.autoscroll,
            onloadExp = attr.onload || '';

        scope.$on('$routeChangeSuccess', update);
        update();

        function cleanupLastView() {
          if(previousElement) {
            previousElement.remove();
            previousElement = null;
          }
          if(currentScope) {
            currentScope.$destroy();
            currentScope = null;
          }
          if(currentElement) {
            $animate.leave(currentElement, function() {
              previousElement = null;
            });
            previousElement = currentElement;
            currentElement = null;
          }
        }

        function update() {
          var locals = $route.current && $route.current.locals,
              template = locals && locals.$template;

          if (angular.isDefined(template)) {
            var newScope = scope.$new();
            var current = $route.current;

            // Note: This will also link all children of ng-view that were contained in the original
            // html. If that content contains controllers, ... they could pollute/change the scope.
            // However, using ng-view on an element with additional content does not make sense...
            // Note: We can't remove them in the cloneAttchFn of $transclude as that
            // function is called before linking the content, which would apply child
            // directives to non existing elements.
            var clone = $transclude(newScope, function(clone) {
              $animate.enter(clone, null, currentElement || $element, function onNgViewEnter () {
                if (angular.isDefined(autoScrollExp)
                  && (!autoScrollExp || scope.$eval(autoScrollExp))) {
                  $anchorScroll();
                }
              });
              cleanupLastView();
            });

            currentElement = clone;
            currentScope = current.scope = newScope;
            currentScope.$emit('$viewContentLoaded');
            currentScope.$eval(onloadExp);
          } else {
            cleanupLastView();
          }
        }
    }
  };
}

// This directive is called during the $transclude call of the first `ngView` directive.
// It will replace and compile the content of the element with the loaded template.
// We need this directive so that the element content is already filled when
// the link function of another directive on the same element as ngView
// is called.
ngViewFillContentFactory.$inject = ['$compile', '$controller', '$route'];
function ngViewFillContentFactory($compile, $controller, $route) {
  return {
    restrict: 'ECA',
    priority: -400,
    link: function(scope, $element) {
      var current = $route.current,
          locals = current.locals;

      $element.html(locals.$template);

      var link = $compile($element.contents());

      if (current.controller) {
        locals.$scope = scope;
        var controller = $controller(current.controller, locals);
        if (current.controllerAs) {
          scope[current.controllerAs] = controller;
        }
        $element.data('$ngControllerController', controller);
        $element.children().data('$ngControllerController', controller);
      }

      link(scope);
    }
  };
}


})(window, window.angular);
;/*
 AngularJS v1.2.26
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(q,g,r){'use strict';function F(a){var d=[];t(d,g.noop).chars(a);return d.join("")}function m(a){var d={};a=a.split(",");var c;for(c=0;c<a.length;c++)d[a[c]]=!0;return d}function G(a,d){function c(a,b,c,h){b=g.lowercase(b);if(u[b])for(;f.last()&&v[f.last()];)e("",f.last());w[b]&&f.last()==b&&e("",b);(h=x[b]||!!h)||f.push(b);var n={};c.replace(H,function(a,b,d,c,e){n[b]=s(d||c||e||"")});d.start&&d.start(b,n,h)}function e(a,b){var c=0,e;if(b=g.lowercase(b))for(c=f.length-1;0<=c&&f[c]!=b;c--);
if(0<=c){for(e=f.length-1;e>=c;e--)d.end&&d.end(f[e]);f.length=c}}"string"!==typeof a&&(a=null===a||"undefined"===typeof a?"":""+a);var b,l,f=[],n=a,h;for(f.last=function(){return f[f.length-1]};a;){h="";l=!0;if(f.last()&&y[f.last()])a=a.replace(RegExp("(.*)<\\s*\\/\\s*"+f.last()+"[^>]*>","i"),function(a,b){b=b.replace(I,"$1").replace(J,"$1");d.chars&&d.chars(s(b));return""}),e("",f.last());else{if(0===a.indexOf("\x3c!--"))b=a.indexOf("--",4),0<=b&&a.lastIndexOf("--\x3e",b)===b&&(d.comment&&d.comment(a.substring(4,
b)),a=a.substring(b+3),l=!1);else if(z.test(a)){if(b=a.match(z))a=a.replace(b[0],""),l=!1}else if(K.test(a)){if(b=a.match(A))a=a.substring(b[0].length),b[0].replace(A,e),l=!1}else L.test(a)&&((b=a.match(B))?(b[4]&&(a=a.substring(b[0].length),b[0].replace(B,c)),l=!1):(h+="<",a=a.substring(1)));l&&(b=a.indexOf("<"),h+=0>b?a:a.substring(0,b),a=0>b?"":a.substring(b),d.chars&&d.chars(s(h)))}if(a==n)throw M("badparse",a);n=a}e()}function s(a){if(!a)return"";var d=N.exec(a);a=d[1];var c=d[3];if(d=d[2])p.innerHTML=
d.replace(/</g,"&lt;"),d="textContent"in p?p.textContent:p.innerText;return a+d+c}function C(a){return a.replace(/&/g,"&amp;").replace(O,function(a){var c=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(c-55296)+(a-56320)+65536)+";"}).replace(P,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function t(a,d){var c=!1,e=g.bind(a,a.push);return{start:function(a,l,f){a=g.lowercase(a);!c&&y[a]&&(c=a);c||!0!==D[a]||(e("<"),e(a),g.forEach(l,function(c,f){var k=
g.lowercase(f),l="img"===a&&"src"===k||"background"===k;!0!==Q[k]||!0===E[k]&&!d(c,l)||(e(" "),e(f),e('="'),e(C(c)),e('"'))}),e(f?"/>":">"))},end:function(a){a=g.lowercase(a);c||!0!==D[a]||(e("</"),e(a),e(">"));a==c&&(c=!1)},chars:function(a){c||e(C(a))}}}var M=g.$$minErr("$sanitize"),B=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,A=/^<\/\s*([\w:-]+)[^>]*>/,H=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,L=/^</,
K=/^<\//,I=/\x3c!--(.*?)--\x3e/g,z=/<!DOCTYPE([^>]*?)>/i,J=/<!\[CDATA\[(.*?)]]\x3e/g,O=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,P=/([^\#-~| |!])/g,x=m("area,br,col,hr,img,wbr");q=m("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");r=m("rp,rt");var w=g.extend({},r,q),u=g.extend({},q,m("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),v=g.extend({},r,m("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
y=m("script,style"),D=g.extend({},x,u,v,w),E=m("background,cite,href,longdesc,src,usemap"),Q=g.extend({},E,m("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width")),p=document.createElement("pre"),N=/^(\s*)([\s\S]*?)(\s*)$/;g.module("ngSanitize",[]).provider("$sanitize",
function(){this.$get=["$$sanitizeUri",function(a){return function(d){var c=[];G(d,t(c,function(c,b){return!/^unsafe/.test(a(c,b))}));return c.join("")}}]});g.module("ngSanitize").filter("linky",["$sanitize",function(a){var d=/((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"]/,c=/^mailto:/;return function(e,b){function l(a){a&&k.push(F(a))}function f(a,c){k.push("<a ");g.isDefined(b)&&(k.push('target="'),k.push(b),k.push('" '));k.push('href="');k.push(a);k.push('">');l(c);k.push("</a>")}
if(!e)return e;for(var n,h=e,k=[],m,p;n=h.match(d);)m=n[0],n[2]==n[3]&&(m="mailto:"+m),p=n.index,l(h.substr(0,p)),f(m,n[0].replace(c,"")),h=h.substring(p+n[0].length);l(h);return a(k.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map
;var duScrollDefaultEasing=function(e){"use strict";return.5>e?Math.pow(2*e,2)/2:1-Math.pow(2*(1-e),2)/2};angular.module("duScroll",["duScroll.scrollspy","duScroll.smoothScroll","duScroll.scrollContainer","duScroll.spyContext","duScroll.scrollHelpers"]).value("duScrollDuration",350).value("duScrollSpyWait",100).value("duScrollGreedy",!1).value("duScrollOffset",0).value("duScrollEasing",duScrollDefaultEasing),angular.module("duScroll.scrollHelpers",["duScroll.requestAnimation"]).run(["$window","$q","cancelAnimation","requestAnimation","duScrollEasing","duScrollDuration","duScrollOffset",function(e,t,n,r,o,l,i){"use strict";var u=angular.element.prototype,c=function(e){return"undefined"!=typeof HTMLDocument&&e instanceof HTMLDocument||e.nodeType&&e.nodeType===e.DOCUMENT_NODE},a=function(e){return"undefined"!=typeof HTMLElement&&e instanceof HTMLElement||e.nodeType&&e.nodeType===e.ELEMENT_NODE},s=function(e){return a(e)||c(e)?e:e[0]};u.scrollTo=function(t,n,r){var o;if(angular.isElement(t)?o=this.scrollToElement:r&&(o=this.scrollToAnimated),o)return o.apply(this,arguments);var l=s(this);return c(l)?e.scrollTo(t,n):(l.scrollLeft=t,void(l.scrollTop=n))};var d,f;u.scrollToAnimated=function(e,l,i,u){i&&!u&&(u=o);var c=this.scrollLeft(),a=this.scrollTop(),s=Math.round(e-c),p=Math.round(l-a),m=null,g=this,v="scroll mousedown mousewheel touchmove keydown",h=function(e){(!e||e.which>0)&&(g.unbind(v,h),n(d),f.reject(),d=null)};if(d&&h(),f=t.defer(),!s&&!p)return f.resolve(),f.promise;var y=function(e){null===m&&(m=e);var t=e-m,n=t>=i?1:u(t/i);g.scrollTo(c+Math.ceil(s*n),a+Math.ceil(p*n)),1>n?d=r(y):(g.unbind(v,h),d=null,f.resolve())};return g.scrollTo(c,a),g.bind(v,h),d=r(y),f.promise},u.scrollToElement=function(e,t,n,r){var o=s(this);(!angular.isNumber(t)||isNaN(t))&&(t=i);var l=this.scrollTop()+s(e).getBoundingClientRect().top-t;return a(o)&&(l-=o.getBoundingClientRect().top),this.scrollTo(0,l,n,r)};var p={scrollLeft:function(t,n,r){if(angular.isNumber(t))return this.scrollTo(t,this.scrollTop(),n,r);var o=s(this);return c(o)?e.scrollX||document.documentElement.scrollLeft||document.body.scrollLeft:o.scrollLeft},scrollTop:function(t,n,r){if(angular.isNumber(t))return this.scrollTo(this.scrollTop(),t,n,r);var o=s(this);return c(o)?e.scrollY||document.documentElement.scrollTop||document.body.scrollTop:o.scrollTop}};u.scrollToElementAnimated=function(e,t,n,r){return this.scrollToElement(e,t,n||l,r)},u.scrollTopAnimated=function(e,t,n){return this.scrollTop(e,t||l,n)},u.scrollLeftAnimated=function(e,t,n){return this.scrollLeft(e,t||l,n)};var m=function(e,t){return function(n,r){return r?t.apply(this,arguments):e.apply(this,arguments)}};for(var g in p)u[g]=u[g]?m(u[g],p[g]):p[g]}]),angular.module("duScroll.polyfill",[]).factory("polyfill",["$window",function(e){"use strict";var t=["webkit","moz","o","ms"];return function(n,r){if(e[n])return e[n];for(var o,l=n.substr(0,1).toUpperCase()+n.substr(1),i=0;i<t.length;i++)if(o=t[i]+l,e[o])return e[o];return r}}]),angular.module("duScroll.requestAnimation",["duScroll.polyfill"]).factory("requestAnimation",["polyfill","$timeout",function(e,t){"use strict";var n=0,r=function(e){var r=(new Date).getTime(),o=Math.max(0,16-(r-n)),l=t(function(){e(r+o)},o);return n=r+o,l};return e("requestAnimationFrame",r)}]).factory("cancelAnimation",["polyfill","$timeout",function(e,t){"use strict";var n=function(e){t.cancel(e)};return e("cancelAnimationFrame",n)}]),angular.module("duScroll.spyAPI",["duScroll.scrollContainerAPI"]).factory("spyAPI",["$rootScope","$timeout","scrollContainerAPI","duScrollGreedy","duScrollSpyWait",function(e,t,n,r,o){"use strict";var l=function(n){var l=!1,i=!1,u=function(){i=!1;var t=n.container,o=t[0],l=0;("undefined"!=typeof HTMLElement&&o instanceof HTMLElement||o.nodeType&&o.nodeType===o.ELEMENT_NODE)&&(l=o.getBoundingClientRect().top);var u,c,a,s,d,f;for(s=n.spies,c=n.currentlyActive,a=void 0,u=0;u<s.length;u++)d=s[u],f=d.getTargetPosition(),f&&f.top+d.offset-l<20&&-1*f.top+l<f.height&&(!a||a.top<f.top)&&(a={top:f.top,spy:d});a&&(a=a.spy),c===a||r&&!a||(c&&(c.$element.removeClass("active"),e.$broadcast("duScrollspy:becameInactive",c.$element)),a&&(a.$element.addClass("active"),e.$broadcast("duScrollspy:becameActive",a.$element)),n.currentlyActive=a)};return o?function(){l?i=!0:(u(),l=t(function(){l=!1,i&&u()},o,!1))}:u},i={},u=function(e){var t=e.$id,n={spies:[]};return n.handler=l(n),i[t]=n,e.$on("$destroy",function(){c(e)}),t},c=function(e){var t=e.$id,n=i[t],r=n.container;r&&r.off("scroll",n.handler),delete i[t]},a=u(e),s=function(e){return i[e.$id]?i[e.$id]:e.$parent?s(e.$parent):i[a]},d=function(e){var t,n,r=e.$element.scope();if(r)return s(r);for(n in i)if(t=i[n],-1!==t.spies.indexOf(e))return t},f=function(e){for(;e.parentNode;)if(e=e.parentNode,e===document)return!0;return!1},p=function(e){var t=d(e);t&&(t.spies.push(e),t.container&&f(t.container)||(t.container&&t.container.off("scroll",t.handler),t.container=n.getContainer(e.$element.scope()),t.container.on("scroll",t.handler).triggerHandler("scroll")))},m=function(e){var t=d(e);e===t.currentlyActive&&(t.currentlyActive=null);var n=t.spies.indexOf(e);-1!==n&&t.spies.splice(n,1)};return{addSpy:p,removeSpy:m,createContext:u,destroyContext:c,getContextForScope:s}}]),angular.module("duScroll.scrollContainerAPI",[]).factory("scrollContainerAPI",["$document",function(e){"use strict";var t={},n=function(e,n){var r=e.$id;return t[r]=n,r},r=function(e){return t[e.$id]?e.$id:e.$parent?r(e.$parent):void 0},o=function(n){var o=r(n);return o?t[o]:e},l=function(e){var n=r(e);n&&delete t[n]};return{getContainerId:r,getContainer:o,setContainer:n,removeContainer:l}}]),angular.module("duScroll.smoothScroll",["duScroll.scrollHelpers","duScroll.scrollContainerAPI"]).directive("duSmoothScroll",["duScrollDuration","duScrollOffset","scrollContainerAPI",function(e,t,n){"use strict";return{link:function(r,o,l){o.on("click",function(o){if(l.href&&-1!==l.href.indexOf("#")){var i=document.getElementById(l.href.replace(/.*(?=#[^\s]+$)/,"").substring(1));if(i&&i.getBoundingClientRect){o.stopPropagation&&o.stopPropagation(),o.preventDefault&&o.preventDefault();var u=l.offset?parseInt(l.offset,10):t,c=l.duration?parseInt(l.duration,10):e,a=n.getContainer(r);a.scrollToElement(angular.element(i),isNaN(u)?0:u,isNaN(c)?0:c)}}})}}}]),angular.module("duScroll.spyContext",["duScroll.spyAPI"]).directive("duSpyContext",["spyAPI",function(e){"use strict";return{restrict:"A",scope:!0,compile:function(){return{pre:function(t){e.createContext(t)}}}}}]),angular.module("duScroll.scrollContainer",["duScroll.scrollContainerAPI"]).directive("duScrollContainer",["scrollContainerAPI",function(e){"use strict";return{restrict:"A",scope:!0,compile:function(){return{pre:function(t,n,r){r.$observe("duScrollContainer",function(r){angular.isString(r)&&(r=document.getElementById(r)),r=angular.isElement(r)?angular.element(r):n,e.setContainer(t,r),t.$on("$destroy",function(){e.removeContainer(t)})})}}}}}]),angular.module("duScroll.scrollspy",["duScroll.spyAPI"]).directive("duScrollspy",["spyAPI","duScrollOffset","$timeout","$rootScope",function(e,t,n,r){"use strict";var o=function(e,t,n){angular.isElement(e)?this.target=e:angular.isString(e)&&(this.targetId=e),this.$element=t,this.offset=n};return o.prototype.getTargetElement=function(){return!this.target&&this.targetId&&(this.target=document.getElementById(this.targetId)),this.target},o.prototype.getTargetPosition=function(){var e=this.getTargetElement();return e?e.getBoundingClientRect():void 0},o.prototype.flushTargetCache=function(){this.targetId&&(this.target=void 0)},{link:function(l,i,u){var c,a=u.ngHref||u.href;a&&-1!==a.indexOf("#")?c=a.replace(/.*(?=#[^\s]+$)/,"").substring(1):u.duScrollspy&&(c=u.duScrollspy),c&&n(function(){var n=new o(c,i,-(u.offset?parseInt(u.offset,10):t));e.addSpy(n),l.$on("$destroy",function(){e.removeSpy(n)}),l.$on("$locationChangeSuccess",n.flushTargetCache.bind(n)),r.$on("$stateChangeSuccess",n.flushTargetCache.bind(n))},0,!1)}}}]);
//# sourceMappingURL=angular-scroll.min.js.map;
(function(F,e,O){'use strict';e.module("ngAnimate",["ng"]).directive("ngAnimateChildren",function(){return function(G,s,g){g=g.ngAnimateChildren;e.isString(g)&&0===g.length?s.data("$$ngAnimateChildren",!0):G.$watch(g,function(e){s.data("$$ngAnimateChildren",!!e)})}}).factory("$$animateReflow",["$$rAF","$document",function(e,s){return function(g){return e(function(){g()})}}]).config(["$provide","$animateProvider",function(G,s){function g(e){for(var g=0;g<e.length;g++){var l=e[g];if(l.nodeType==aa)return l}}
function B(l){return e.element(g(l))}var m=e.noop,u=e.forEach,P=s.$$selectors,aa=1,l="$$ngAnimateState",V="$$ngAnimateChildren",J="ng-animate",n={running:!0};G.decorator("$animate",["$delegate","$injector","$sniffer","$rootElement","$$asyncCallback","$rootScope","$document",function(z,F,$,R,E,H,O){function K(a){var b=a.data(l)||{};b.running=!0;a.data(l,b)}function L(a){if(a){var b=[],c={};a=a.substr(1).split(".");($.transitions||$.animations)&&b.push(F.get(P[""]));for(var d=0;d<a.length;d++){var f=
a[d],e=P[f];e&&!c[f]&&(b.push(F.get(e)),c[f]=!0)}return b}}function G(a,b,c){function d(a,b){var c=a[b],d=a["before"+b.charAt(0).toUpperCase()+b.substr(1)];if(c||d)return"leave"==b&&(d=c,c=null),n.push({event:b,fn:c}),h.push({event:b,fn:d}),!0}function f(b,d,e){var f=[];u(b,function(a){a.fn&&f.push(a)});var g=0;u(f,function(b,l){var C=function(){a:{if(d){(d[l]||m)();if(++g<f.length)break a;d=null}e()}};switch(b.event){case "setClass":d.push(b.fn(a,A,k,C));break;case "addClass":d.push(b.fn(a,A||c,
C));break;case "removeClass":d.push(b.fn(a,k||c,C));break;default:d.push(b.fn(a,C))}});d&&0===d.length&&e()}var g=a[0];if(g){var l="setClass"==b,p=l||"addClass"==b||"removeClass"==b,A,k;e.isArray(c)&&(A=c[0],k=c[1],c=A+" "+k);var x=a.attr("class")+" "+c;if(M(x)){var t=m,w=[],h=[],q=m,y=[],n=[],x=(" "+x).replace(/\s+/g,".");u(L(x),function(a){!d(a,b)&&l&&(d(a,"addClass"),d(a,"removeClass"))});return{node:g,event:b,className:c,isClassBased:p,isSetClassOperation:l,before:function(a){t=a;f(h,w,function(){t=
m;a()})},after:function(a){q=a;f(n,y,function(){q=m;a()})},cancel:function(){w&&(u(w,function(a){(a||m)(!0)}),t(!0));y&&(u(y,function(a){(a||m)(!0)}),q(!0))}}}}}function r(a,b,c,d,f,g,n){function p(d){var e="$animate:"+d;q&&(q[e]&&0<q[e].length)&&E(function(){c.triggerHandler(e,{event:a,className:b})})}function A(){p("before")}function m(){p("after")}function x(){p("close");n&&E(function(){n()})}function t(){t.hasBeenRun||(t.hasBeenRun=!0,g())}function w(){if(!w.hasBeenRun){w.hasBeenRun=!0;var d=
c.data(l);d&&(h&&h.isClassBased?k(c,b):(E(function(){var d=c.data(l)||{};r==d.index&&k(c,b,a)}),c.data(l,d)));x()}}var h=G(c,a,b);if(h){b=h.className;var q=e.element._data(h.node),q=q&&q.events;d||(d=f?f.parent():c.parent());var y=c.data(l)||{};f=y.active||{};var z=y.totalActive||0,C=y.last,D;h.isClassBased&&(D=y.running||y.disabled||C&&!C.isClassBased);if(D||N(c,d))t(),A(),m(),w();else{d=!1;if(0<z){D=[];if(h.isClassBased)"setClass"==C.event?(D.push(C),k(c,b)):f[b]&&(v=f[b],v.event==a?d=!0:(D.push(v),
k(c,b)));else if("leave"==a&&f["ng-leave"])d=!0;else{for(var v in f)D.push(f[v]),k(c,v);f={};z=0}0<D.length&&u(D,function(a){a.cancel()})}!h.isClassBased||(h.isSetClassOperation||d)||(d="addClass"==a==c.hasClass(b));if(d)t(),A(),m(),x();else{if("leave"==a)c.one("$destroy",function(a){a=e.element(this);var b=a.data(l);b&&(b=b.active["ng-leave"])&&(b.cancel(),k(a,"ng-leave"))});c.addClass(J);var r=Y++;z++;f[b]=h;c.data(l,{last:h,active:f,index:r,totalActive:z});A();h.before(function(d){var e=c.data(l);
d=d||!e||!e.active[b]||h.isClassBased&&e.active[b].event!=a;t();!0===d?w():(m(),h.after(w))})}}}else t(),A(),m(),w()}function T(a){if(a=g(a))a=e.isFunction(a.getElementsByClassName)?a.getElementsByClassName(J):a.querySelectorAll("."+J),u(a,function(a){a=e.element(a);(a=a.data(l))&&a.active&&u(a.active,function(a){a.cancel()})})}function k(a,b){if(g(a)==g(R))n.disabled||(n.running=!1,n.structural=!1);else if(b){var c=a.data(l)||{},d=!0===b;!d&&(c.active&&c.active[b])&&(c.totalActive--,delete c.active[b]);
if(d||!c.totalActive)a.removeClass(J),a.removeData(l)}}function N(a,b){if(n.disabled)return!0;if(g(a)==g(R))return n.running;var c,d,f;do{if(0===b.length)break;var m=g(b)==g(R),k=m?n:b.data(l)||{};if(k.disabled)return!0;m&&(f=!0);!1!==c&&(m=b.data(V),e.isDefined(m)&&(c=m));d=d||k.running||k.last&&!k.last.isClassBased}while(b=b.parent());return!f||!c&&d}var Y=0;R.data(l,n);H.$$postDigest(function(){H.$$postDigest(function(){n.running=!1})});var Q=s.classNameFilter(),M=Q?function(a){return Q.test(a)}:
function(){return!0};return{enter:function(a,b,c,d){a=e.element(a);b=b&&e.element(b);c=c&&e.element(c);K(a);z.enter(a,b,c);H.$$postDigest(function(){a=B(a);r("enter","ng-enter",a,b,c,m,d)})},leave:function(a,b){a=e.element(a);T(a);K(a);H.$$postDigest(function(){r("leave","ng-leave",B(a),null,null,function(){z.leave(a)},b)})},move:function(a,b,c,d){a=e.element(a);b=b&&e.element(b);c=c&&e.element(c);T(a);K(a);z.move(a,b,c);H.$$postDigest(function(){a=B(a);r("move","ng-move",a,b,c,m,d)})},addClass:function(a,
b,c){a=e.element(a);a=B(a);r("addClass",b,a,null,null,function(){z.addClass(a,b)},c)},removeClass:function(a,b,c){a=e.element(a);a=B(a);r("removeClass",b,a,null,null,function(){z.removeClass(a,b)},c)},setClass:function(a,b,c,d){a=e.element(a);a=B(a);r("setClass",[b,c],a,null,null,function(){z.setClass(a,b,c)},d)},enabled:function(a,b){switch(arguments.length){case 2:if(a)k(b);else{var c=b.data(l)||{};c.disabled=!0;b.data(l,c)}break;case 1:n.disabled=!a;break;default:a=!n.disabled}return!!a}}}]);s.register("",
["$window","$sniffer","$timeout","$$animateReflow",function(l,n,s,B){function E(a,U){S&&S();W.push(U);S=B(function(){u(W,function(a){a()});W=[];S=null;v={}})}function H(a,U){var b=g(a);a=e.element(b);Z.push(a);b=Date.now()+U;b<=da||(s.cancel(ca),da=b,ca=s(function(){G(Z);Z=[]},U,!1))}function G(a){u(a,function(a){(a=a.data(q))&&(a.closeAnimationFn||m)()})}function K(a,b){var c=b?v[b]:null;if(!c){var d=0,e=0,f=0,g=0,m,k,h,q;u(a,function(a){if(a.nodeType==aa){a=l.getComputedStyle(a)||{};h=a[I+P];d=
Math.max(L(h),d);q=a[I+x];m=a[I+t];e=Math.max(L(m),e);k=a[p+t];g=Math.max(L(k),g);var b=L(a[p+P]);0<b&&(b*=parseInt(a[p+w],10)||1);f=Math.max(b,f)}});c={total:0,transitionPropertyStyle:q,transitionDurationStyle:h,transitionDelayStyle:m,transitionDelay:e,transitionDuration:d,animationDelayStyle:k,animationDelay:g,animationDuration:f};b&&(v[b]=c)}return c}function L(a){var b=0;a=e.isString(a)?a.split(/\s*,\s*/):[];u(a,function(a){b=Math.max(parseFloat(a)||0,b)});return b}function J(a){var b=a.parent(),
c=b.data(h);c||(b.data(h,++ba),c=ba);return c+"-"+g(a).getAttribute("class")}function r(a,b,c,d){var e=J(b),f=e+" "+c,l=v[f]?++v[f].total:0,k={};if(0<l){var h=c+"-stagger",k=e+" "+h;(e=!v[k])&&b.addClass(h);k=K(b,k);e&&b.removeClass(h)}d=d||function(a){return a()};b.addClass(c);var h=b.data(q)||{},n=d(function(){return K(b,f)});d=n.transitionDuration;e=n.animationDuration;if(0===d&&0===e)return b.removeClass(c),!1;b.data(q,{running:h.running||0,itemIndex:l,stagger:k,timings:n,closeAnimationFn:m});
a=0<h.running||"setClass"==a;0<d&&T(b,c,a);0<e&&(0<k.animationDelay&&0===k.animationDuration)&&(g(b).style[p]="none 0s");return!0}function T(a,b,c){"ng-enter"!=b&&("ng-move"!=b&&"ng-leave"!=b)&&c?a.addClass(y):g(a).style[I+x]="none"}function k(a,b){var c=I+x,d=g(a);d.style[c]&&0<d.style[c].length&&(d.style[c]="");a.removeClass(y)}function N(a){var b=p;a=g(a);a.style[b]&&0<a.style[b].length&&(a.style[b]="")}function Y(a,b,d,e){function k(a){b.off(x,l);b.removeClass(m);c(b,d);a=g(b);for(var e in s)a.style.removeProperty(s[e])}
function l(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(V));Math.max(a-z,0)>=y&&b>=v&&e()}var h=g(b);a=b.data(q);if(-1!=h.getAttribute("class").indexOf(d)&&a){var m="";u(d.split(" "),function(a,b){m+=(0<b?" ":"")+a+"-active"});var n=a.stagger,p=a.timings,t=a.itemIndex,v=Math.max(p.transitionDuration,p.animationDuration),w=Math.max(p.transitionDelay,p.animationDelay),y=w*D,z=Date.now(),x=A+" "+X,r="",s=[];if(0<p.transitionDuration){var B=
p.transitionPropertyStyle;-1==B.indexOf("all")&&(r+=f+"transition-property: "+B+";",r+=f+"transition-duration: "+p.transitionDurationStyle+";",s.push(f+"transition-property"),s.push(f+"transition-duration"))}0<t&&(0<n.transitionDelay&&0===n.transitionDuration&&(r+=f+"transition-delay: "+Q(p.transitionDelayStyle,n.transitionDelay,t)+"; ",s.push(f+"transition-delay")),0<n.animationDelay&&0===n.animationDuration&&(r+=f+"animation-delay: "+Q(p.animationDelayStyle,n.animationDelay,t)+"; ",s.push(f+"animation-delay")));
0<s.length&&(p=h.getAttribute("style")||"",h.setAttribute("style",p+"; "+r));b.on(x,l);b.addClass(m);a.closeAnimationFn=function(){k();e()};h=(t*(Math.max(n.animationDelay,n.transitionDelay)||0)+(w+v)*C)*D;a.running++;H(b,h);return k}e()}function Q(a,b,c){var d="";u(a.split(","),function(a,e){d+=(0<e?",":"")+(c*b+parseInt(a,10))+"s"});return d}function M(a,b,d,e){if(r(a,b,d,e))return function(a){a&&c(b,d)}}function a(a,b,d,e){if(b.data(q))return Y(a,b,d,e);c(b,d);e()}function b(b,c,d,e){var f=M(b,
c,d);if(f){var g=f;E(c,function(){k(c,d);N(c);g=a(b,c,d,e)});return function(a){(g||m)(a)}}e()}function c(a,b){a.removeClass(b);var c=a.data(q);c&&(c.running&&c.running--,c.running&&0!==c.running||a.removeData(q))}function d(a,b){var c="";a=e.isArray(a)?a:a.split(/\s+/);u(a,function(a,d){a&&0<a.length&&(c+=(0<d?" ":"")+a+b)});return c}var f="",I,X,p,A;F.ontransitionend===O&&F.onwebkittransitionend!==O?(f="-webkit-",I="WebkitTransition",X="webkitTransitionEnd transitionend"):(I="transition",X="transitionend");
F.onanimationend===O&&F.onwebkitanimationend!==O?(f="-webkit-",p="WebkitAnimation",A="webkitAnimationEnd animationend"):(p="animation",A="animationend");var P="Duration",x="Property",t="Delay",w="IterationCount",h="$$ngAnimateKey",q="$$ngAnimateCSS3Data",y="ng-animate-block-transitions",V=3,C=1.5,D=1E3,v={},ba=0,W=[],S,ca=null,da=0,Z=[];return{enter:function(a,c){return b("enter",a,"ng-enter",c)},leave:function(a,c){return b("leave",a,"ng-leave",c)},move:function(a,c){return b("move",a,"ng-move",
c)},beforeSetClass:function(a,b,c,e){var f=d(c,"-remove")+" "+d(b,"-add"),g=M("setClass",a,f,function(d){var e=a.attr("class");a.removeClass(c);a.addClass(b);d=d();a.attr("class",e);return d});if(g)return E(a,function(){k(a,f);N(a);e()}),g;e()},beforeAddClass:function(a,b,c){var e=M("addClass",a,d(b,"-add"),function(c){a.addClass(b);c=c();a.removeClass(b);return c});if(e)return E(a,function(){k(a,b);N(a);c()}),e;c()},setClass:function(b,c,e,f){e=d(e,"-remove");c=d(c,"-add");return a("setClass",b,
e+" "+c,f)},addClass:function(b,c,e){return a("addClass",b,d(c,"-add"),e)},beforeRemoveClass:function(a,b,c){var e=M("removeClass",a,d(b,"-remove"),function(c){var d=a.attr("class");a.removeClass(b);c=c();a.attr("class",d);return c});if(e)return E(a,function(){k(a,b);N(a);c()}),e;c()},removeClass:function(b,c,e){return a("removeClass",b,d(c,"-remove"),e)}}}])}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map
;angular.module("youtube-embed",["ng"]).service("youtubeEmbedUtils",["$window","$rootScope",function(e,t){function r(e,t){return e.indexOf(t)>-1}var n={},a=/https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/gi,i=/t=(\d+)[ms]?(\d+)?s?/;return n.getIdFromURL=function(e){var t=e.replace(a,"$1");if(r(t,";")){var n=t.split(";");if(r(n[1],"%")){var i=decodeURIComponent(t.split(";")[1]);t=("http://youtube.com"+i).replace(a,"$1")}else t=n[0]}else r(t,"#")&&(t=t.split("#")[0]);return t},n.getTimeFromURL=function(e){e=e||"";var t=e.match(i);if(!t)return 0;var n=t[0],a=t[1],o=t[2];return"undefined"!=typeof o?(o=parseInt(o,10),a=parseInt(a,10)):r(n,"m")?(a=parseInt(a,10),o=0):(o=parseInt(a,10),a=0),o+60*a},function(){var e=["http:","https:"],t="//www.youtube.com/iframe_api";e.indexOf(window.location.protocol)<0&&(t="http:"+t);var r=document.createElement("script");r.src=t;var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(r,n)}(),n.ready=!1,e.onYouTubeIframeAPIReady=function(){t.$apply(function(){n.ready=!0})},n}]).directive("youtubeVideo",["youtubeEmbedUtils",function(e){var t=1,r={"-1":"unstarted",0:"ended",1:"playing",2:"paused",3:"buffering",5:"queued"},n="youtube.player.";return{restrict:"EA",scope:{videoId:"=?",videoUrl:"=?",player:"=?",playerVars:"=?",playerHeight:"=?",playerWidth:"=?"},link:function(a,i,o){function u(){var e=Array.prototype.slice.call(arguments);a.$apply(function(){a.$emit.apply(a,e)})}function d(e){var t=r[e.data];"undefined"!=typeof t&&u(n+t,a.player,e),a.$apply(function(){a.player.currentState=t})}function p(e){u(n+"ready",a.player,e)}function l(){var e=angular.copy(a.playerVars);e.start=e.start||a.urlStartTime;var t=new YT.Player(c,{height:a.playerHeight,width:a.playerWidth,videoId:a.videoId,playerVars:e,events:{onReady:p,onStateChange:d}});return t.id=c,t}function y(){c&&a.videoId&&(a.player&&"function"==typeof a.player.destroy&&a.player.destroy(),a.player=l())}a.utils=e;var c=o.playerId||i[0].id||"unique-youtube-embed-id-"+t++;i[0].id=c,a.playerHeight=a.playerHeight||390,a.playerWidth=a.playerWidth||640,a.playerVars=a.playerVars||{};var s=a.$watch(function(){return a.utils.ready&&("undefined"!=typeof a.videoUrl||"undefined"!=typeof a.videoId)},function(e){e&&(s(),"undefined"!=typeof a.videoUrl?a.$watch("videoUrl",function(e){a.videoId=a.utils.getIdFromURL(e),a.urlStartTime=a.utils.getTimeFromURL(e),y()}):a.$watch("videoId",function(){a.urlStartTime=null,y()}))});a.$on("$destroy",function(){a.player&&a.player.destroy()})}}}]);;!function(t){if("object"==typeof exports)module.exports=t();else if("function"==typeof define&&define.amd)define(t);else{var e;"undefined"!=typeof window?e=window:"undefined"!=typeof global?e=global:"undefined"!=typeof self&&(e=self),e.contentful=t()}}(function(){var t;return function e(t,n,r){function i(s,u){if(!n[s]){if(!t[s]){var a="function"==typeof require&&require;if(!u&&a)return a(s,!0);if(o)return o(s,!0);throw new Error("Cannot find module '"+s+"'")}var c=n[s]={exports:{}};t[s][0].call(c.exports,function(e){var n=t[s][1][e];return i(n?n:e)},c,c.exports,e,t,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(t,e,n){"use strict";function r(t){return h.reduce(t,function(t,e,n){return h.truthy(e)&&(t[n]=e),t},{})}function i(t,e){if(!h.exists(t[e]))throw new TypeError("Expected property "+e)}function o(t){return h.getPath(t,["sys","type"])in E}function s(t){var e=E[t.sys.type];return e.parse(t)}function u(t){return JSON.parse(t.body)}function a(t){return h.reduce(t,function(t,e,n){return t[n]=h.isArray(e)?e.join(","):e,t},{})}function c(t){return p(t,l,function(e){return f(t,e)||e}),t.items}function l(t){return"Link"===h.getPath(t,["sys","type"])}function f(t,e){var n=e.sys.linkType,r=e.sys.id,i=function(t){return t.sys.type===n&&t.sys.id===r};return h.find(t.items,i)||t.includes&&h.find(t.includes[n],i)}function p(t,e,n){return e(t)?n(t):h.isArray(t)||h.isObject(t)?(h.each(t,function(r,i){t[i]=p(r,e,n)}),t):t}var h=t("underscore-contrib"),d=t("questor"),v=t("redefine"),_=t("querystring"),y=v.Class({constructor:function(t){i(t,"accessToken"),i(t,"space"),this.options=h.defaults({},t,{host:"cdn.contentful.com",secure:!0})},request:function(t,e){e||(e={}),e.headers||(e.headers={}),e.query||(e.query={}),e.headers["Content-Type"]="application/vnd.contentful.delivery.v1+json",e.query.access_token=this.options.accessToken;var n=[this.options.secure?"https":"http","://",h.first(this.options.host.split(":")),":",this.options.secure?"443":"80","/spaces/",this.options.space,t,"?",_.stringify(e.query)].join("");return d(n,e).then(u).catch(Error,function(t){throw t}).catch(function(t){throw u(t)})},asset:function(t,e){return this.request("/assets/"+t).then(m.parse).nodeify(e)},assets:function(t,e){var n=x.parse(t);return this.request("/assets",{query:n}).then(h.partial(w.parse,m)).nodeify(e)},contentType:function(t,e){return this.request("/content_types/"+t).then(j.parse).nodeify(e)},contentTypes:function(t,e){var n=x.parse(t);return this.request("/content_types",{query:n}).then(h.partial(w.parse,j)).nodeify(e)},entry:function(t,e){return this.request("/entries/"+t).then(g.parse).nodeify(e)},entries:function(t,e){var n=x.parse(t);return this.request("/entries",{query:n}).then(h.partial(w.parse,g)).nodeify(e)},space:function(t){return this.request("").nodeify(t)}}),m=v.Class({constructor:function(){},statics:{parse:function(t){return h.extend(new m,{sys:T.parse(t.sys),fields:t.fields})}}}),g=v.Class({constructor:function(){},statics:{parse:function(t){return h.extend(new g,{sys:T.parse(t.sys),fields:t.fields})}}}),j=v.Class({constructor:function(){},statics:{parse:function(t){return h.extend(new j,{sys:T.parse(t.sys),fields:t.fields.map(b.parse)},h.pick(t,"name","displayField"))}}}),b=v.Class({constructor:function(){},statics:{parse:function(t){return h.extend(new b,t)}}}),w=v.Class({constructor:function(){},statics:{parse:function(t,e){p(e,o,s);var n=c(e);return v(n,{limit:e.limit,skip:e.skip,total:e.total},{enumerable:!1})}}}),x=v.Class({constructor:function(){},toQueryString:function(){return _.stringify(this)},statics:{parse:function(t){return h.extend(new x,a(t))}}}),k=v.Class({constructor:function(){},statics:{parse:function(t){return h.extend(new k,t)}}}),T=v.Class({constructor:function(){},statics:{parse:function(t){return h.extend(new T,h.pick(t,"id","revision","type","locale"),r({contentType:t.contentType&&A.parse(t.contentType),createdAt:t.createdAt&&new Date(t.createdAt),linkType:t.linkType,updatedAt:t.updatedAt&&new Date(t.updatedAt),space:t.space&&A.parse(t.space)}))}}}),A=v.Class({constructor:function(){},statics:{parse:function(t){return h.extend(new A,{sys:T.parse(t.sys)})}}});n.createClient=h.fnull(function(t){return new y(t)},{});var E={Asset:m,ContentType:j,Entry:g,Space:k}},{querystring:22,questor:19,redefine:2,"underscore-contrib":3}],2:[function(t,e){var n=this._=function(t,n,r){function i(t,e){for(var n,r={},i=Q(t),o=0,s=i.length;s>o;o++)n=i[o],r[n]=J(t,n);return Z(void 0===e?K(t):e,r)}function o(t,e,n,r){A(n||y.defaults||{},re),A(r,re),(G.call(r,S)||G.call(r,V))&&(delete re[I],delete re[L]),$(t,e,re),te(re)}function s(t,e,n,r){o(t,e,r,n instanceof l?n:n instanceof v?c(t,e,n):(oe[L]=n,oe)),delete oe[L]}function u(t,e,n){for(var r in e)G.call(e,r)&&s(t,r,e[r],n)}function a(t,e){for(var n,r=0;r<e.length;r++)n=e[r],d(n)&&(n="mixin"===(n.type||n.name)?n.call(n)||n:n[M]),X(t,n)}function c(t,e,n){var r,i=n._,o=G.call(n,P)?!!n[P]:!0,s=G.call(n,O)&&n[O],u=G.call(n,I)&&n[I];return n[S]=function(){return se&&(n=J(t,e),delete t[e]),re[L]=i.call(r=this),re[P]=o,re[O]=s,re[I]=u,$(r,e,re),te(re),se&&(A(n,re),$(t,e,re),te(re)),r[e]},se&&(n[P]=!0),n}function l(t){A(t,this)}function f(t){return new l(t)}function p(t){return Z(d(t)?t[M]:t)}function h(t,e,n){var r=p(t);return e?y(r,e,n):r}function d(t){return"function"==typeof t}function v(t){this._=d(t)?t:A(t,this)||t[L]}function _(t){return new v(t)}function y(t,e,n,r){return("string"==typeof e?s(t,e,n,r):u(t,e,n))||t}function m(t){return function(e,n,r){return("string"==typeof n?s(e,n,r,t):u(e,n,t))||e}}function g(t,e){for(var n,r,i,o;e=K(e);)for(i=Q(e),n=i.length;n--;)if(e[r=i[n]]===t){do o=K(e),e=o;while(o[r]===t);return o[r]}}function j(){return g(j.caller,this).apply(this,arguments)}function b(t,e){return"string"==typeof t?b(this,t):t[B+e]||w(t,e)}function w(t,e){return ee[L]=z.call(t[e],t),$(t,B+e,ee),ee[L]=b,t[B+e]}function x(t,e){var n,r=G.call(t,R)?t[R]:function(){},i=G.call(t,N)&&t[N],s=G.call(t,C)&&t[C];if(e||(e={},e[I]=!0),delete t[R],s&&(delete t[C],y(r[M]=p(s),"constructor",r),d(s)))for(n in s)G.call(s,n)&&"name"!==n&&"length"!==n&&o(r,n,re,J(s,n));return i&&(delete t[N],u(r,i,ie)),G.call(t,H)&&(a(r[M],[].concat(t[H])),delete t[H]),u(r[M],t,e),k(r[M]),F in r[M]||$(r[M],F,ee),r}function k(t){return G.call(t,U)?object:$(t,U,ne)}var T,A,E,F="bound",P="configurable",R="constructor",O="enumerable",C="extend",S="get",H="mixin",B="__@",q="__proto__",M="prototype",V="set",N="statics",U="super",L="value",I="writable",D=n,z=n.bind||function(t){var e=this;return function(){return e.apply(t,arguments)}},W=function(e,n){return t[e]||r[e]||n},$=W("defineProperty"),G=W("hasOwnProperty"),J=W("getOwnPropertyDescriptor"),Q=W("getOwnPropertyNames",r.keys),K=W("getPrototypeOf",function(t){return t[q]}),X=r.mixin||function(t,e){for(var n=Q(e),r=n.length;r--;o(t,n[r],re,J(e,n[r])));return t},Z=t.create||t.inherit||r.create,Y=[P,O,S,V,L,I],te=D("o","delete o."+Y.join(";delete o.")),ee=Z(null),ne=Z(null),re=Z(null),ie={},oe={},se=!1;for(ie[I]=!0,ie[O]=!0,T=0;T<Y.length;T++)Y[T]=['if(h.call(a,"','"))b.',"=a.",";"].join(Y[T]);A=D("h","return function(a,b){"+Y.join("")+"}")(G),ne[L]=function ae(t){return z.apply(g(ae.caller,t),arguments)},ne[P]=ne[O]=ne[I]=!1,$(j,"bind",ne),ne[L]=j,ee[O]=!1,ee[P]=ee[I]=!0,ee[L]=b,y.from=h,y.Class=x,y[U]=k,y.mixin=X,y.bound=b,y.clone=i,y.as=f,y.later=_,y.using=m,y.defaults={},"undefined"!=typeof e&&e.exports&&((e.exports=y).redefine=y),t.mixin?t.mixin({redefine:y}):t.redefine=y;try{E=Z(y({},{_:_(r)}))._}catch(ue){te(re),se=!0}return t}(n||this,Function,Object)},{}],3:[function(t,e){t("./underscore.array.builders"),t("./underscore.array.selectors"),t("./underscore.collections.walk"),t("./underscore.function.arity"),t("./underscore.function.combinators"),t("./underscore.function.dispatch"),t("./underscore.function.iterators"),t("./underscore.function.predicates"),t("./underscore.object.builders"),t("./underscore.object.selectors"),t("./underscore.util.existential"),t("./underscore.util.operators"),t("./underscore.util.strings"),t("./underscore.util.trampolines"),e.exports=t("underscore")},{"./underscore.array.builders":5,"./underscore.array.selectors":6,"./underscore.collections.walk":7,"./underscore.function.arity":8,"./underscore.function.combinators":9,"./underscore.function.dispatch":10,"./underscore.function.iterators":11,"./underscore.function.predicates":12,"./underscore.object.builders":13,"./underscore.object.selectors":14,"./underscore.util.existential":15,"./underscore.util.operators":16,"./underscore.util.strings":17,"./underscore.util.trampolines":18,underscore:4}],4:[function(t,e,n){(function(){var t=this,r=t._,i={},o=Array.prototype,s=Object.prototype,u=Function.prototype,a=o.push,c=o.slice,l=o.concat,f=s.toString,p=s.hasOwnProperty,h=o.forEach,d=o.map,v=o.reduce,_=o.reduceRight,y=o.filter,m=o.every,g=o.some,j=o.indexOf,b=o.lastIndexOf,w=Array.isArray,x=Object.keys,k=u.bind,T=function(t){return t instanceof T?t:this instanceof T?void(this._wrapped=t):new T(t)};"undefined"!=typeof n?("undefined"!=typeof e&&e.exports&&(n=e.exports=T),n._=T):t._=T,T.VERSION="1.5.2";var A=T.each=T.forEach=function(t,e,n){if(null!=t)if(h&&t.forEach===h)t.forEach(e,n);else if(t.length===+t.length){for(var r=0,o=t.length;o>r;r++)if(e.call(n,t[r],r,t)===i)return}else for(var s=T.keys(t),r=0,o=s.length;o>r;r++)if(e.call(n,t[s[r]],s[r],t)===i)return};T.map=T.collect=function(t,e,n){var r=[];return null==t?r:d&&t.map===d?t.map(e,n):(A(t,function(t,i,o){r.push(e.call(n,t,i,o))}),r)};var E="Reduce of empty array with no initial value";T.reduce=T.foldl=T.inject=function(t,e,n,r){var i=arguments.length>2;if(null==t&&(t=[]),v&&t.reduce===v)return r&&(e=T.bind(e,r)),i?t.reduce(e,n):t.reduce(e);if(A(t,function(t,o,s){i?n=e.call(r,n,t,o,s):(n=t,i=!0)}),!i)throw new TypeError(E);return n},T.reduceRight=T.foldr=function(t,e,n,r){var i=arguments.length>2;if(null==t&&(t=[]),_&&t.reduceRight===_)return r&&(e=T.bind(e,r)),i?t.reduceRight(e,n):t.reduceRight(e);var o=t.length;if(o!==+o){var s=T.keys(t);o=s.length}if(A(t,function(u,a,c){a=s?s[--o]:--o,i?n=e.call(r,n,t[a],a,c):(n=t[a],i=!0)}),!i)throw new TypeError(E);return n},T.find=T.detect=function(t,e,n){var r;return F(t,function(t,i,o){return e.call(n,t,i,o)?(r=t,!0):void 0}),r},T.filter=T.select=function(t,e,n){var r=[];return null==t?r:y&&t.filter===y?t.filter(e,n):(A(t,function(t,i,o){e.call(n,t,i,o)&&r.push(t)}),r)},T.reject=function(t,e,n){return T.filter(t,function(t,r,i){return!e.call(n,t,r,i)},n)},T.every=T.all=function(t,e,n){e||(e=T.identity);var r=!0;return null==t?r:m&&t.every===m?t.every(e,n):(A(t,function(t,o,s){return(r=r&&e.call(n,t,o,s))?void 0:i}),!!r)};var F=T.some=T.any=function(t,e,n){e||(e=T.identity);var r=!1;return null==t?r:g&&t.some===g?t.some(e,n):(A(t,function(t,o,s){return r||(r=e.call(n,t,o,s))?i:void 0}),!!r)};T.contains=T.include=function(t,e){return null==t?!1:j&&t.indexOf===j?-1!=t.indexOf(e):F(t,function(t){return t===e})},T.invoke=function(t,e){var n=c.call(arguments,2),r=T.isFunction(e);return T.map(t,function(t){return(r?e:t[e]).apply(t,n)})},T.pluck=function(t,e){return T.map(t,function(t){return t[e]})},T.where=function(t,e,n){return T.isEmpty(e)?n?void 0:[]:T[n?"find":"filter"](t,function(t){for(var n in e)if(e[n]!==t[n])return!1;return!0})},T.findWhere=function(t,e){return T.where(t,e,!0)},T.max=function(t,e,n){if(!e&&T.isArray(t)&&t[0]===+t[0]&&t.length<65535)return Math.max.apply(Math,t);if(!e&&T.isEmpty(t))return-1/0;var r={computed:-1/0,value:-1/0};return A(t,function(t,i,o){var s=e?e.call(n,t,i,o):t;s>r.computed&&(r={value:t,computed:s})}),r.value},T.min=function(t,e,n){if(!e&&T.isArray(t)&&t[0]===+t[0]&&t.length<65535)return Math.min.apply(Math,t);if(!e&&T.isEmpty(t))return 1/0;var r={computed:1/0,value:1/0};return A(t,function(t,i,o){var s=e?e.call(n,t,i,o):t;s<r.computed&&(r={value:t,computed:s})}),r.value},T.shuffle=function(t){var e,n=0,r=[];return A(t,function(t){e=T.random(n++),r[n-1]=r[e],r[e]=t}),r},T.sample=function(t,e,n){return arguments.length<2||n?t[T.random(t.length-1)]:T.shuffle(t).slice(0,Math.max(0,e))};var P=function(t){return T.isFunction(t)?t:function(e){return e[t]}};T.sortBy=function(t,e,n){var r=P(e);return T.pluck(T.map(t,function(t,e,i){return{value:t,index:e,criteria:r.call(n,t,e,i)}}).sort(function(t,e){var n=t.criteria,r=e.criteria;if(n!==r){if(n>r||void 0===n)return 1;if(r>n||void 0===r)return-1}return t.index-e.index}),"value")};var R=function(t){return function(e,n,r){var i={},o=null==n?T.identity:P(n);return A(e,function(n,s){var u=o.call(r,n,s,e);t(i,u,n)}),i}};T.groupBy=R(function(t,e,n){(T.has(t,e)?t[e]:t[e]=[]).push(n)}),T.indexBy=R(function(t,e,n){t[e]=n}),T.countBy=R(function(t,e){T.has(t,e)?t[e]++:t[e]=1}),T.sortedIndex=function(t,e,n,r){n=null==n?T.identity:P(n);for(var i=n.call(r,e),o=0,s=t.length;s>o;){var u=o+s>>>1;n.call(r,t[u])<i?o=u+1:s=u}return o},T.toArray=function(t){return t?T.isArray(t)?c.call(t):t.length===+t.length?T.map(t,T.identity):T.values(t):[]},T.size=function(t){return null==t?0:t.length===+t.length?t.length:T.keys(t).length},T.first=T.head=T.take=function(t,e,n){return null==t?void 0:null==e||n?t[0]:c.call(t,0,e)},T.initial=function(t,e,n){return c.call(t,0,t.length-(null==e||n?1:e))},T.last=function(t,e,n){return null==t?void 0:null==e||n?t[t.length-1]:c.call(t,Math.max(t.length-e,0))},T.rest=T.tail=T.drop=function(t,e,n){return c.call(t,null==e||n?1:e)},T.compact=function(t){return T.filter(t,T.identity)};var O=function(t,e,n){return e&&T.every(t,T.isArray)?l.apply(n,t):(A(t,function(t){T.isArray(t)||T.isArguments(t)?e?a.apply(n,t):O(t,e,n):n.push(t)}),n)};T.flatten=function(t,e){return O(t,e,[])},T.without=function(t){return T.difference(t,c.call(arguments,1))},T.uniq=T.unique=function(t,e,n,r){T.isFunction(e)&&(r=n,n=e,e=!1);var i=n?T.map(t,n,r):t,o=[],s=[];return A(i,function(n,r){(e?r&&s[s.length-1]===n:T.contains(s,n))||(s.push(n),o.push(t[r]))}),o},T.union=function(){return T.uniq(T.flatten(arguments,!0))},T.intersection=function(t){var e=c.call(arguments,1);return T.filter(T.uniq(t),function(t){return T.every(e,function(e){return T.indexOf(e,t)>=0})})},T.difference=function(t){var e=l.apply(o,c.call(arguments,1));return T.filter(t,function(t){return!T.contains(e,t)})},T.zip=function(){for(var t=T.max(T.pluck(arguments,"length").concat(0)),e=new Array(t),n=0;t>n;n++)e[n]=T.pluck(arguments,""+n);return e},T.object=function(t,e){if(null==t)return{};for(var n={},r=0,i=t.length;i>r;r++)e?n[t[r]]=e[r]:n[t[r][0]]=t[r][1];return n},T.indexOf=function(t,e,n){if(null==t)return-1;var r=0,i=t.length;if(n){if("number"!=typeof n)return r=T.sortedIndex(t,e),t[r]===e?r:-1;r=0>n?Math.max(0,i+n):n}if(j&&t.indexOf===j)return t.indexOf(e,n);for(;i>r;r++)if(t[r]===e)return r;return-1},T.lastIndexOf=function(t,e,n){if(null==t)return-1;var r=null!=n;if(b&&t.lastIndexOf===b)return r?t.lastIndexOf(e,n):t.lastIndexOf(e);for(var i=r?n:t.length;i--;)if(t[i]===e)return i;return-1},T.range=function(t,e,n){arguments.length<=1&&(e=t||0,t=0),n=arguments[2]||1;for(var r=Math.max(Math.ceil((e-t)/n),0),i=0,o=new Array(r);r>i;)o[i++]=t,t+=n;return o};var C=function(){};T.bind=function(t,e){var n,r;if(k&&t.bind===k)return k.apply(t,c.call(arguments,1));if(!T.isFunction(t))throw new TypeError;return n=c.call(arguments,2),r=function(){if(!(this instanceof r))return t.apply(e,n.concat(c.call(arguments)));C.prototype=t.prototype;var i=new C;C.prototype=null;var o=t.apply(i,n.concat(c.call(arguments)));return Object(o)===o?o:i}},T.partial=function(t){var e=c.call(arguments,1);return function(){return t.apply(this,e.concat(c.call(arguments)))}},T.bindAll=function(t){var e=c.call(arguments,1);if(0===e.length)throw new Error("bindAll must be passed function names");return A(e,function(e){t[e]=T.bind(t[e],t)}),t},T.memoize=function(t,e){var n={};return e||(e=T.identity),function(){var r=e.apply(this,arguments);return T.has(n,r)?n[r]:n[r]=t.apply(this,arguments)}},T.delay=function(t,e){var n=c.call(arguments,2);return setTimeout(function(){return t.apply(null,n)},e)},T.defer=function(t){return T.delay.apply(T,[t,1].concat(c.call(arguments,1)))},T.throttle=function(t,e,n){var r,i,o,s=null,u=0;n||(n={});var a=function(){u=n.leading===!1?0:new Date,s=null,o=t.apply(r,i)};return function(){var c=new Date;u||n.leading!==!1||(u=c);var l=e-(c-u);return r=this,i=arguments,0>=l?(clearTimeout(s),s=null,u=c,o=t.apply(r,i)):s||n.trailing===!1||(s=setTimeout(a,l)),o}},T.debounce=function(t,e,n){var r,i,o,s,u;return function(){o=this,i=arguments,s=new Date;var a=function(){var c=new Date-s;e>c?r=setTimeout(a,e-c):(r=null,n||(u=t.apply(o,i)))},c=n&&!r;return r||(r=setTimeout(a,e)),c&&(u=t.apply(o,i)),u}},T.once=function(t){var e,n=!1;return function(){return n?e:(n=!0,e=t.apply(this,arguments),t=null,e)}},T.wrap=function(t,e){return function(){var n=[t];return a.apply(n,arguments),e.apply(this,n)}},T.compose=function(){var t=arguments;return function(){for(var e=arguments,n=t.length-1;n>=0;n--)e=[t[n].apply(this,e)];return e[0]}},T.after=function(t,e){return function(){return--t<1?e.apply(this,arguments):void 0}},T.keys=x||function(t){if(t!==Object(t))throw new TypeError("Invalid object");var e=[];for(var n in t)T.has(t,n)&&e.push(n);return e},T.values=function(t){for(var e=T.keys(t),n=e.length,r=new Array(n),i=0;n>i;i++)r[i]=t[e[i]];return r},T.pairs=function(t){for(var e=T.keys(t),n=e.length,r=new Array(n),i=0;n>i;i++)r[i]=[e[i],t[e[i]]];return r},T.invert=function(t){for(var e={},n=T.keys(t),r=0,i=n.length;i>r;r++)e[t[n[r]]]=n[r];return e},T.functions=T.methods=function(t){var e=[];for(var n in t)T.isFunction(t[n])&&e.push(n);return e.sort()},T.extend=function(t){return A(c.call(arguments,1),function(e){if(e)for(var n in e)t[n]=e[n]}),t},T.pick=function(t){var e={},n=l.apply(o,c.call(arguments,1));return A(n,function(n){n in t&&(e[n]=t[n])}),e},T.omit=function(t){var e={},n=l.apply(o,c.call(arguments,1));for(var r in t)T.contains(n,r)||(e[r]=t[r]);return e},T.defaults=function(t){return A(c.call(arguments,1),function(e){if(e)for(var n in e)void 0===t[n]&&(t[n]=e[n])}),t},T.clone=function(t){return T.isObject(t)?T.isArray(t)?t.slice():T.extend({},t):t},T.tap=function(t,e){return e(t),t};var S=function(t,e,n,r){if(t===e)return 0!==t||1/t==1/e;if(null==t||null==e)return t===e;t instanceof T&&(t=t._wrapped),e instanceof T&&(e=e._wrapped);var i=f.call(t);if(i!=f.call(e))return!1;switch(i){case"[object String]":return t==String(e);case"[object Number]":return t!=+t?e!=+e:0==t?1/t==1/e:t==+e;case"[object Date]":case"[object Boolean]":return+t==+e;case"[object RegExp]":return t.source==e.source&&t.global==e.global&&t.multiline==e.multiline&&t.ignoreCase==e.ignoreCase}if("object"!=typeof t||"object"!=typeof e)return!1;for(var o=n.length;o--;)if(n[o]==t)return r[o]==e;var s=t.constructor,u=e.constructor;if(s!==u&&!(T.isFunction(s)&&s instanceof s&&T.isFunction(u)&&u instanceof u))return!1;n.push(t),r.push(e);var a=0,c=!0;if("[object Array]"==i){if(a=t.length,c=a==e.length)for(;a--&&(c=S(t[a],e[a],n,r)););}else{for(var l in t)if(T.has(t,l)&&(a++,!(c=T.has(e,l)&&S(t[l],e[l],n,r))))break;if(c){for(l in e)if(T.has(e,l)&&!a--)break;c=!a}}return n.pop(),r.pop(),c};T.isEqual=function(t,e){return S(t,e,[],[])},T.isEmpty=function(t){if(null==t)return!0;if(T.isArray(t)||T.isString(t))return 0===t.length;for(var e in t)if(T.has(t,e))return!1;return!0},T.isElement=function(t){return!(!t||1!==t.nodeType)},T.isArray=w||function(t){return"[object Array]"==f.call(t)},T.isObject=function(t){return t===Object(t)},A(["Arguments","Function","String","Number","Date","RegExp"],function(t){T["is"+t]=function(e){return f.call(e)=="[object "+t+"]"}}),T.isArguments(arguments)||(T.isArguments=function(t){return!(!t||!T.has(t,"callee"))}),"function"!=typeof/./&&(T.isFunction=function(t){return"function"==typeof t}),T.isFinite=function(t){return isFinite(t)&&!isNaN(parseFloat(t))},T.isNaN=function(t){return T.isNumber(t)&&t!=+t},T.isBoolean=function(t){return t===!0||t===!1||"[object Boolean]"==f.call(t)},T.isNull=function(t){return null===t},T.isUndefined=function(t){return void 0===t},T.has=function(t,e){return p.call(t,e)},T.noConflict=function(){return t._=r,this},T.identity=function(t){return t},T.times=function(t,e,n){for(var r=Array(Math.max(0,t)),i=0;t>i;i++)r[i]=e.call(n,i);return r},T.random=function(t,e){return null==e&&(e=t,t=0),t+Math.floor(Math.random()*(e-t+1))};var H={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};H.unescape=T.invert(H.escape);var B={escape:new RegExp("["+T.keys(H.escape).join("")+"]","g"),unescape:new RegExp("("+T.keys(H.unescape).join("|")+")","g")};T.each(["escape","unescape"],function(t){T[t]=function(e){return null==e?"":(""+e).replace(B[t],function(e){return H[t][e]})}}),T.result=function(t,e){if(null==t)return void 0;var n=t[e];return T.isFunction(n)?n.call(t):n},T.mixin=function(t){A(T.functions(t),function(e){var n=T[e]=t[e];T.prototype[e]=function(){var t=[this._wrapped];return a.apply(t,arguments),U.call(this,n.apply(T,t))}})};var q=0;T.uniqueId=function(t){var e=++q+"";return t?t+e:e},T.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var M=/(.)^/,V={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},N=/\\|'|\r|\n|\t|\u2028|\u2029/g;T.template=function(t,e,n){var r;n=T.defaults({},n,T.templateSettings);var i=new RegExp([(n.escape||M).source,(n.interpolate||M).source,(n.evaluate||M).source].join("|")+"|$","g"),o=0,s="__p+='";t.replace(i,function(e,n,r,i,u){return s+=t.slice(o,u).replace(N,function(t){return"\\"+V[t]}),n&&(s+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'"),r&&(s+="'+\n((__t=("+r+"))==null?'':__t)+\n'"),i&&(s+="';\n"+i+"\n__p+='"),o=u+e.length,e}),s+="';\n",n.variable||(s="with(obj||{}){\n"+s+"}\n"),s="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+s+"return __p;\n";try{r=new Function(n.variable||"obj","_",s)}catch(u){throw u.source=s,u}if(e)return r(e,T);var a=function(t){return r.call(this,t,T)};return a.source="function("+(n.variable||"obj")+"){\n"+s+"}",a},T.chain=function(t){return T(t).chain()};var U=function(t){return this._chain?T(t).chain():t};T.mixin(T),A(["pop","push","reverse","shift","sort","splice","unshift"],function(t){var e=o[t];T.prototype[t]=function(){var n=this._wrapped;return e.apply(n,arguments),"shift"!=t&&"splice"!=t||0!==n.length||delete n[0],U.call(this,n)}}),A(["concat","join","slice"],function(t){var e=o[t];T.prototype[t]=function(){return U.call(this,e.apply(this._wrapped,arguments))}}),T.extend(T.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this)},{}],5:[function(t){!function(e){var n=e._||t("underscore"),r=Array.prototype.slice,i=Array.prototype.concat,o=function(t){return null!=t};n.mixin({cat:function(){return n.reduce(arguments,function(t,e){return n.isArguments(e)?i.call(t,r.call(e)):i.call(t,e)},[])},cons:function(t,e){return n.cat([t],e)},partition:function(t,e,r){var i=function(t){if(null==t)return[];var o=n.take(t,e);return e===n.size(o)?n.cons(o,i(n.drop(t,e))):r?[n.take(n.cat(o,r),e)]:[]};return i(t)},partitionAll:function(t,e,r){r=null!=r?r:e;var i=function(t,e,r){return n.isEmpty(t)?[]:n.cons(n.take(t,e),i(n.drop(t,r),e,r))};return i(t,e,r)},mapcat:function(t,e){return n.cat.apply(null,n.map(t,e))},interpose:function(t,e){if(!n.isArray(t))throw new TypeError;var i=n.size(t);return 0===i?t:1===i?t:r.call(n.mapcat(t,function(t){return n.cons(t,[e])}),0,-1)},weave:function(){return n.some(arguments)?1==arguments.length?arguments[0]:n.filter(n.flatten(n.zip.apply(null,arguments),!0),function(t){return null!=t}):[]},interleave:n.weave,repeat:function(t,e){return n.times(t,function(){return e})},cycle:function(t,e){return n.flatten(n.times(t,function(){return e}),!0)},splitAt:function(t,e){return[n.take(t,e),n.drop(t,e)]},iterateUntil:function(t,e,n){for(var r=[],i=t(n);e(i);)r.push(i),i=t(i);return r},takeSkipping:function(t,e){var r=[],i=n.size(t);if(0>=e)return[];if(1===e)return t;for(var o=0;i>o;o+=e)r.push(t[o]);return r},reductions:function(t,e,r){var i=[],o=r;return n.each(t,function(n,r){o=e(o,t[r]),i.push(o)}),i},keepIndexed:function(t,e){return n.filter(n.map(n.range(n.size(t)),function(n){return e(n,t[n])}),o)},reverseOrder:function(t){if("string"==typeof t)throw new TypeError("Strings cannot be reversed by _.reverseOrder");return r.call(t).reverse()}})}(this)},{underscore:4}],6:[function(t){!function(e){var n=e._||t("underscore"),r=Array.prototype.slice,i=Array.prototype.concat,o=function(t){return null!=t},s=function(t){return t!==!1&&o(t)},u=function(t){return n.isArray(t)||n.isArguments(t)};n.mixin({second:function(t,e,n){return null==t?void 0:null==e||n?t[1]:r.call(t,1,e)},third:function(t,e,n){return null==t?void 0:null==e||n?t[2]:r.call(t,2,e)},nth:function(t,e,n){return null==e||n?void 0:t[e]},takeWhile:function(t,e){if(!u(t))throw new TypeError;for(var r=n.size(t),i=0;r>i&&s(e(t[i]));i++);return n.take(t,i)},dropWhile:function(t,e){if(!u(t))throw new TypeError;for(var r=n.size(t),i=0;r>i&&s(e(t[i]));i++);return n.drop(t,i)},splitWith:function(t,e){return[n.takeWhile(t,e),n.dropWhile(t,e)]},partitionBy:function(t,e){if(n.isEmpty(t)||!o(t))return[];var r=n.first(t),s=e(r),u=i.call([r],n.takeWhile(n.rest(t),function(t){return n.isEqual(s,e(t))}));return i.call([u],n.partitionBy(n.drop(t,n.size(u)),e))},best:function(t,e){return n.reduce(t,function(t,n){return e(t,n)?t:n})},keep:function(t,e){if(!u(t))throw new TypeError("expected an array as the first argument");return n.filter(n.map(t,function(t){return e(t)}),o)}})}(this)},{underscore:4}],7:[function(t){!function(e){function n(t){return o.isElement(t)?t.children:t}function r(t,e,n,r,i,c){var l=[];return function f(t,p,h){if(o.isObject(t)){if(l.indexOf(t)>=0)throw new TypeError(a);l.push(t)}if(n){var d=n.call(i,t,p,h);if(d===u)return u;if(d===s)return}var v,_=e(t);if(o.isObject(_)&&!o.isEmpty(_)){c&&(v=o.isArray(t)?[]:{});var y=o.any(_,function(e,n){var r=f(e,n,t);return r===u?!0:void(v&&(v[n]=r))});if(y)return u}return r?r.call(i,t,p,h,v):void 0}(t)}function i(t,e,n){var r=[];return this.preorder(t,function(t,i){return n||i!=e?void(o.has(t,e)&&(r[r.length]=t[e])):s}),r}var o=e._||t("underscore"),s={},u={},a="Not a tree: same object found in two different branches",c={find:function(t,e,n){var r;return this.preorder(t,function(t,i,o){return e.call(n,t,i,o)?(r=t,u):void 0},n),r},filter:function(t,e,n,r){var i=[];return null==t?i:(e(t,function(t,e,o){n.call(r,t,e,o)&&i.push(t)},null,this._traversalStrategy),i)},reject:function(t,e,n,r){return this.filter(t,e,function(t,e,i){return!n.call(r,t,e,i)})},map:function(t,e,n,r){var i=[];return e(t,function(t,e,o){i[i.length]=n.call(r,t,e,o)},null,this._traversalStrategy),i},pluck:function(t,e){return i.call(this,t,e,!1)},pluckRec:function(t,e){return i.call(this,t,e,!0)},postorder:function(t,e,n,i){i=i||this._traversalStrategy,r(t,i,null,e,n)},preorder:function(t,e,n,i){i=i||this._traversalStrategy,r(t,i,e,null,n)},reduce:function(t,e,n,i){var o=function(t,r,i,o){return e(o||n,t,r,i)};return r(t,this._traversalStrategy,null,o,i,!0)}};c.collect=c.map,c.detect=c.find,c.select=c.filter,o.walk=function(t){var e=o.clone(c);return o.bindAll.apply(null,[e].concat(o.keys(e))),e._traversalStrategy=t||n,e},o.extend(o.walk,o.walk())}(this)},{underscore:4}],8:[function(t){!function(e){function n(t){return function(){if(1===arguments.length)return t.apply(this,arguments);throw new RangeError("Only a single argument may be accepted.")}}var r=e._||t("underscore"),i=function(){function t(e,r,i,o,s,u){return u===!0?o.unshift(s):o.push(s),o.length==i?e.apply(r,o):n(function(){return t(e,r,i,o.slice(0),arguments[0],u)})}return function(e,r){var i=this;return n(function(){return t(e,i,e.length,[],arguments[0],r)})}}(),o=function(){var t=[];return function(e){if("function"!=typeof e)throw new Error("Argument 1 must be a function.");var n=e.length;return void 0===t[n]&&(t[n]=function(t){return function(){if(arguments.length!==n)throw new RangeError(n+" arguments must be applied.");return t.apply(this,arguments)}}),t[n](e)}}();r.mixin({fix:function(t){var e=r.rest(arguments),n=function(){for(var n=e.slice(),i=0,o=0;o<n.length||i<arguments.length;o++)n[o]===r&&(n[o]=arguments[i++]);return t.apply(null,n)};return n._original=t,n},unary:function(t){return function(e){return t.call(this,e)}},binary:function(t){return function(e,n){return t.call(this,e,n)}},ternary:function(t){return function(e,n,r){return t.call(this,e,n,r)}},quaternary:function(t){return function(e,n,r,i){return t.call(this,e,n,r,i)}},curry:i,rCurry:function(t){return i.call(this,t,!0)},curry2:function(t){return n(function(e){return n(function(n){return t.call(this,e,n)})})},curry3:function(t){return n(function(e){return n(function(r){return n(function(n){return t.call(this,e,r,n)})})})},rcurry2:function(t){return n(function(e){return n(function(n){return t.call(this,n,e)})})},rcurry3:function(t){return n(function(e){return n(function(r){return n(function(n){return t.call(this,n,r,e)})})})},enforce:o}),r.arity=function(){var t={};return function e(n,r){if(null==t[n]){for(var i=new Array(n),o=0;n>o;++o)i[o]="__"+o;var s=i.join(),u="return function ("+s+") { return fun.apply(this, arguments); };";t[n]=new Function(["fun"],u)}return null==r?function(t){return e(n,t)}:t[n](r)}}()}(this)},{underscore:4}],9:[function(t){!function(e){function n(t,e){return r.arity(t.length,function(){return t.apply(this,a.call(arguments,e))})}var r=e._||t("underscore"),i=function(t){return null!=t},o=function(t){return t!==!1&&i(t)},s=[].reverse,u=[].slice,a=[].map,c=function(t){return function(e,n){return 1===arguments.length?function(n){return t(e,n)}:t(e,n)}};r.mixin({always:function(t){return function(){return t}},pipeline:function(){var t=r.isArray(arguments[0])?arguments[0]:arguments;return function(e){return r.reduce(t,function(t,e){return e(t)},e)}},conjoin:function(){var t=arguments;return function(e){return r.every(e,function(e){return r.every(t,function(t){return t(e)})})}},disjoin:function(){var t=arguments;return function(e){return r.some(e,function(e){return r.some(t,function(t){return t(e)})})}},comparator:function(t){return function(e,n){return o(t(e,n))?-1:o(t(n,e))?1:0}},complement:function(t){return function(){return!t.apply(null,arguments)}},splat:function(t){return function(e){return t.apply(null,e)}},unsplat:function(t){var e=t.length;return 1>e?t:1===e?function(){return t.call(this,u.call(arguments,0))}:function(){var n=arguments.length,r=u.call(arguments,0,e-1),i=Math.max(e-n-1,0),o=new Array(i),s=u.call(arguments,t.length-1);return t.apply(this,r.concat(o).concat([s]))}},unsplatl:function(t){var e=t.length;return 1>e?t:1===e?function(){return t.call(this,u.call(arguments,0))}:function(){var n=arguments.length,r=u.call(arguments,Math.max(n-e+1,0)),i=u.call(arguments,0,Math.max(n-e+1,0));return t.apply(this,[i].concat(r))}},mapArgs:c(n),juxt:function(){var t=arguments;return function(){var e=arguments;return r.map(t,function(t){return t.apply(null,e)})}},fnull:function(t){var e=r.rest(arguments);return function(){for(var n=r.toArray(arguments),o=r.size(e),s=0;o>s;s++)i(n[s])||(n[s]=e[s]);return t.apply(null,n)}},flip2:function(t){return function(){var e=u.call(arguments);return e[0]=arguments[1],e[1]=arguments[0],t.apply(null,e)}},flip:function(t){return function(){var e=s.call(arguments);return t.apply(null,e)}},functionalize:function(t){return function(e){return t.apply(e,r.rest(arguments))}},methodize:function(t){return function(){return t.apply(null,r.cons(this,arguments))}},k:r.always,t:r.pipeline}),r.unsplatr=r.unsplat,r.mapArgsWith=c(r.flip(n)),r.bound=function(t,e){var n=t[e];if(!r.isFunction(n))throw new TypeError("Expected property to be a function");return r.bind(n,t)}}(this)},{underscore:4}],10:[function(t){!function(e){var n=e._||t("underscore"),r=Array.prototype.slice;
n.mixin({attempt:function(t,e){if(null==t)return void 0;var i=t[e],o=r.call(arguments,2);return n.isFunction(i)?i.apply(t,o):void 0}})}(this)},{underscore:4}],11:[function(t){!function(e){function n(t){return function(e){return t.call(this,e)}}function r(t,e,n){var r,i;for(r=void 0!==n?n:t(),i=t();null!=i;)r=e.call(i,r,i),i=t();return r}function i(t,e){var n=x;return function(){return n===x?n=t:null!=n&&(n=e.call(n,n)),n}}function o(t,e){var n,r,i=t;return function(){return null!=i?(n=e.call(i,i),r=n[1],i=null!=r?n[0]:void 0,r):void 0}}function s(t,e,n){var r=n;return function(){var n=t();return null==n?n:r=void 0===r?n:e.call(n,r,n)}}function u(t,e,n){var r,i,o=n;return function(){return i=t(),null==i?i:void 0===o?o=i:(r=e.call(i,o,i),o=r[0],r[1])}}function a(t,e){return function(){var n;return n=t(),null!=n?e.call(n,n):void 0}}function c(t,e){var n=null;return function(){var r,i;if(null==n){if(i=t(),null==i)return void(n=null);n=e.call(i,i)}for(;null==r;)if(r=n(),null==r){if(i=t(),null==i)return void(n=null);n=e.call(i,i)}return r}}function l(t,e){return function(){var n;for(n=t();null!=n;){if(e.call(n,n))return n;n=t()}return void 0}}function f(t,e){return l(t,function(t){return!e(t)})}function p(t,e){return l(t,e)()}function h(t,e,n){for(var r=0;e-->0;)t();return null!=n?function(){return++r<=n?t():void 0}:t}function d(t,e){return h(t,null==e?1:e)}function v(t,e){return h(t,0,null==e?1:e)}function _(t){var e=0;return function(){return t[e++]}}function y(t){var e,n,r;return e=0,r=[],n=function(){var i,o;return i=t[e++],i instanceof Array?(r.push({array:t,index:e}),t=i,e=0,n()):void 0===i?r.length>0?(o=r.pop(),t=o.array,e=o.index,n()):void 0:i}}function m(t){return function(){return t}}function g(t,e,n){return function(){var r;return t>e?void 0:(r=t,t+=n,r)}}function j(t,e,n){return function(){var r;return e>t?void 0:(r=t,t-=n,r)}}function b(t,e,n){return null==t?g(1,1/0,1):null==e?g(t,1/0,1):null==n?e>=t?g(t,e,1):j(t,e,1):n>0?g(t,e,n):0>n?j(t,e,Math.abs(n)):k(t)}var w=e._||t("underscore"),x={},T=n(b);w.iterators={accumulate:s,accumulateWithReturn:u,foldl:r,reduce:r,unfold:i,unfoldWithReturn:o,map:a,mapcat:c,select:l,reject:f,filter:l,find:p,slice:h,drop:d,take:v,List:_,Tree:y,constant:m,K:m,numbers:T,range:b}}(this,void 0)},{underscore:4}],12:[function(t){!function(e){var n=e._||t("underscore");n.mixin({isInstanceOf:function(t,e){return t instanceof e},isAssociative:function(t){return n.isArray(t)||n.isObject(t)||n.isArguments(t)},isIndexed:function(t){return n.isArray(t)||n.isString(t)||n.isArguments(t)},isSequential:function(t){return n.isArray(t)||n.isArguments(t)},isPlainObject:function(t){return n.isObject(t)&&t.constructor===e.Object},isZero:function(t){return 0===t},isEven:function(t){return n.isFinite(t)&&0===(1&t)},isOdd:function(t){return n.isFinite(t)&&!n.isEven(t)},isPositive:function(t){return t>0},isNegative:function(t){return 0>t},isValidDate:function(t){return n.isDate(t)&&!n.isNaN(t.getTime())},isNumeric:function(t){return!isNaN(parseFloat(t))&&isFinite(t)},isInteger:function(t){return n.isNumeric(t)&&t%1===0},isFloat:function(t){return n.isNumeric(t)&&!n.isInteger(t)},isJSON:function(t){try{JSON.parse(t)}catch(e){return!1}return!0},isIncreasing:function(){var t=n.size(arguments);if(1===t)return!0;if(2===t)return arguments[0]<arguments[1];for(var e=1;t>e;e++)if(arguments[e-1]>=arguments[e])return!1;return!0},isDecreasing:function(){var t=n.size(arguments);if(1===t)return!0;if(2===t)return arguments[0]>arguments[1];for(var e=1;t>e;e++)if(arguments[e-1]<=arguments[e])return!1;return!0}})}(this)},{underscore:4}],13:[function(t){!function(e){var n=e._||t("underscore"),r=(Array.prototype.slice,Array.prototype.concat),i=function(t){return null!=t},o=function(t){return t!==!1&&i(t)},s=function(t){return n.isArray(t)||n.isObject(t)},u=function(t){return function(e){return function(n){return t(n,e)}}};n.mixin({merge:function(){var t=n.some(arguments)?{}:null;return o(t)&&n.extend.apply(null,r.call([t],n.toArray(arguments))),t},renameKeys:function(t,e){return n.reduce(e,function(e,n,r){return i(t[r])?(e[n]=t[r],e):e},n.omit.apply(null,r.call([t],n.keys(e))))},snapshot:function(t){if(null==t||"object"!=typeof t)return t;var e=new t.constructor;for(var r in t)t.hasOwnProperty(r)&&(e[r]=n.snapshot(t[r]));return e},updatePath:function(t,e,r,o){if(!s(t))throw new TypeError("Attempted to update a non-associative object.");if(!i(r))return e(t);var u=n.isArray(r),a=u?r:[r],c=u?n.snapshot(t):n.clone(t),l=n.last(a),f=c;return n.each(n.initial(a),function(t){o&&!n.has(f,t)&&(f[t]=n.clone(o)),f=f[t]}),f[l]=e(f[l]),c},setPath:function(t,e,r,o){if(!i(r))throw new TypeError("Attempted to set a property at a null path.");return n.updatePath(t,function(){return e},r,o)},frequencies:u(n.countBy)(n.identity)})}(this)},{underscore:4}],14:[function(t){!function(e){{var n=e._||t("underscore"),r=Array.prototype.concat,i=Array.prototype;i.slice}n.mixin({accessor:function(t){return function(e){return e&&e[t]}},dictionary:function(t){return function(e){return t&&e&&t[e]}},selectKeys:function(t,e){return n.pick.apply(null,r.call([t],e))},kv:function(t,e){return n.has(t,e)?[e,t[e]]:void 0},getPath:function o(t,e){return"string"==typeof e&&(e=e.split(".")),void 0===t?void 0:0===e.length?t:null===t?void 0:o(t[n.first(e)],n.rest(e))},hasPath:function s(t,e){"string"==typeof e&&(e=e.split("."));var r=e.length;return null==t&&r>0?!1:e[0]in t?1===r?!0:s(t[n.first(e)],n.rest(e)):!1},pickWhen:function(t,e){var r={};return n.each(t,function(n,i){e(t[i])&&(r[i]=t[i])}),r},omitWhen:function(t,e){return n.pickWhen(t,function(t){return!e(t)})}})}(this)},{underscore:4}],15:[function(t){!function(e){var n=e._||t("underscore");n.mixin({exists:function(t){return null!=t},truthy:function(t){return t!==!1&&n.exists(t)},falsey:function(t){return!n.truthy(t)},not:function(t){return!t},firstExisting:function(){for(var t=0;t<arguments.length;t++)if(null!=arguments[t])return arguments[t]}})}(this)},{underscore:4}],16:[function(t){!function(e){function n(t){return function(){return E.reduce(arguments,t)}}function r(t){return function(){for(var e,n=0;n<arguments.length-1;n++)if(e=t(arguments[n],arguments[n+1]),e===!1)return e;return e}}function i(t){return function(){return!t.apply(this,arguments)}}function o(t,e){return t+e}function s(t,e){return t-e}function u(t,e){return t*e}function a(t,e){return t/e}function c(t,e){return t%e}function l(t){return++t}function f(t){return--t}function p(t){return-t}function h(t,e){return t&e}function d(t,e){return t|e}function v(t,e){return t^e}function _(t,e){return t<<e}function y(t,e){return t>>e}function m(t,e){return t>>>e}function g(t){return~t}function j(t,e){return t==e}function b(t,e){return t===e}function w(t){return!t}function x(t,e){return t>e}function k(t,e){return e>t}function T(t,e){return t>=e}function A(t,e){return e>=t}var E=e._||t("underscore");E.mixin({add:n(o),sub:n(s),mul:n(u),div:n(a),mod:c,inc:l,dec:f,neg:p,eq:r(j),seq:r(b),neq:i(r(j)),sneq:i(r(b)),not:w,gt:r(x),lt:r(k),gte:r(T),lte:r(A),bitwiseAnd:n(h),bitwiseOr:n(d),bitwiseXor:n(v),bitwiseNot:g,bitwiseLeft:n(_),bitwiseRight:n(y),bitwiseZ:n(m)})}(this)},{underscore:4}],17:[function(t){!function(e){var n=e._||t("underscore");n.mixin({explode:function(t){return t.split("")},implode:function(t){return t.join("")},camelCase:function(t){return t.replace(/-([a-z])/g,function(t){return t[1].toUpperCase()})},toDash:function(t){return t=t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()}),"-"==t.charAt(0)?t.substr(1):t},strContains:function(t,e){if("string"!=typeof t)throw new TypeError;return-1!=t.indexOf(e)}})}(this)},{underscore:4}],18:[function(t){!function(e){var n=e._||t("underscore");n.mixin({done:function(t){var e=n(t);return e.stopTrampoline=!0,e},trampoline:function(t){for(var e=t.apply(t,n.rest(arguments));n.isFunction(e)&&(e=e(),!(e instanceof n&&e.stopTrampoline)););return e.value()}})}(this)},{underscore:4}],19:[function(e,n,r){var i="undefined"!=typeof self?self:"undefined"!=typeof window?window:{};!function(e){if("object"==typeof r)n.exports=e();else if("function"==typeof t&&t.amd)t(e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof i?o=i:"undefined"!=typeof self&&(o=self),o.questor=e()}}(function(){return function t(n,r,i){function o(u,a){if(!r[u]){if(!n[u]){var c="function"==typeof e&&e;if(!a&&c)return c(u,!0);if(s)return s(u,!0);throw new Error("Cannot find module '"+u+"'")}var l=r[u]={exports:{}};n[u][0].call(l.exports,function(t){var e=n[u][1][t];return o(e?e:t)},l,l.exports,t,n,r,i)}return r[u].exports}for(var s="function"==typeof e&&e,u=0;u<i.length;u++)o(i[u]);return o}({1:[function(t,e){"use strict";function n(t,e){return e||(e={}),o({headers:e.headers,method:e.method,uri:t}).spread(function(t){var e={body:t.body,headers:r(t.getAllResponseHeaders()),status:t.statusCode};if(e.status>=300){var n=new Error(e.body);throw n.body=e.body,n.headers=e.headers,n.status=e.status,n}return e})}function r(t){var e={};if(!t)return e;for(var n=t.split("\r\n"),r=0;r<n.length;r++){var i=n[r],o=i.indexOf(": ")||i.indexOf(":");if(o>0){var s=i.substring(0,o),u=i.substring(o+2);e[s]=u}}return e}var i=t("bluebird"),o=i.promisify(t("xhr"));e.exports=n},{bluebird:5,xhr:41}],2:[function(t,e){"use strict";e.exports=function(e,n,r){function i(t,e,r){var i=n(t,o,r,e===!0&&t._isBound()?t._boundTo:void 0),s=i.promise();return s.isRejected()?s:(i.setHowMany(1),i.setUnwrap(),i.init(),s)}var o=t("./some_promise_array.js")(r);t("./assert.js"),e.any=function(t){return i(t,!1,e.any)},e.prototype.any=function(){return i(this,!0,this.any)}}},{"./assert.js":3,"./some_promise_array.js":36}],3:[function(t,e){"use strict";e.exports=function(){var t=function(){function t(t){this.constructor$(t),this.message=t,this.name="AssertionError"}return t.prototype=new Error,t.prototype.constructor=t,t.prototype.constructor$=Error,t}();return function e(n,r){if(n!==!0){var i=new t(r);throw Error.captureStackTrace&&Error.captureStackTrace(i,e),console&&console.error&&console.error(i.stack+""),i}}}()},{}],4:[function(t,e){"use strict";function n(){this._isTickUsed=!1,this._length=0,this._lateBuffer=new i,this._functionBuffer=new i(75e3);var t=this;this.consumeFunctionBuffer=function(){t._consumeFunctionBuffer()}}var r=(t("./assert.js"),t("./schedule.js")),i=t("./queue.js"),o=t("./util.js").errorObj,s=t("./util.js").tryCatch1;n.prototype.haveItemsQueued=function(){return this._length>0},n.prototype.invokeLater=function(t,e,n){this._lateBuffer.push(t,e,n),this._queueTick()},n.prototype.invoke=function(t,e,n){var r=this._functionBuffer;r.push(t,e,n),this._length=r.length(),this._queueTick()},n.prototype._consumeFunctionBuffer=function(){for(var t=this._functionBuffer;t.length()>0;){var e=t.shift(),n=t.shift(),r=t.shift();e.call(n,r)}this._reset(),this._consumeLateBuffer()},n.prototype._consumeLateBuffer=function(){for(var t=this._lateBuffer;t.length()>0;){var e=t.shift(),n=t.shift(),r=t.shift(),i=s(e,n,r);if(i===o)throw this._queueTick(),i.e}},n.prototype._queueTick=function(){this._isTickUsed||(r(this.consumeFunctionBuffer),this._isTickUsed=!0)},n.prototype._reset=function(){this._isTickUsed=!1,this._length=0},e.exports=new n},{"./assert.js":3,"./queue.js":29,"./schedule.js":32,"./util.js":40}],5:[function(t,e){"use strict";var n=t("./promise.js")();e.exports=n},{"./promise.js":21}],6:[function(t,e){"use strict";e.exports=function(t){function e(t){var e="string"==typeof this?this:""+this;return t[e]}t.prototype.call=function(t){for(var e=arguments.length,n=new Array(e-1),r=1;e>r;++r)n[r-1]=arguments[r];return this._then(function(e){return e[t].apply(e,n)},void 0,void 0,void 0,void 0,this.call)},t.prototype.get=function(t){return this._then(e,void 0,void 0,t,void 0,this.get)}}},{}],7:[function(t,e){"use strict";e.exports=function(e,n){var r=t("./errors.js"),i=t("./async.js"),o=(t("./assert.js"),r.CancellationError),s={};e.prototype._cancel=function(){if(!this.isCancellable())return this;var t;if(void 0!==(t=this._cancellationParent))return void t.cancel(s);var e=new o;this._attachExtraTrace(e),this._rejectUnchecked(e)},e.prototype.cancel=function(t){return this.isCancellable()?t===s?(this._cancel(),this):(i.invokeLater(this._cancel,this,void 0),this):this},e.prototype.cancellable=function(){return this._cancellable()?this:(this._setCancellable(),this._cancellationParent=void 0,this)},e.prototype.uncancellable=function(){var t=new e(n);return t._setTrace(this.uncancellable,this),t._follow(this),t._unsetCancellable(),this._isBound()&&t._setBoundTo(this._boundTo),t},e.prototype.fork=function(t,e,n){var r=this._then(t,e,n,void 0,void 0,this.fork);return r._setCancellable(),r._cancellationParent=void 0,r}}},{"./assert.js":3,"./async.js":4,"./errors.js":11}],8:[function(t,e){"use strict";e.exports=function(){function e(t){var e;if("function"==typeof t)e="[function "+(t.name||"anonymous")+"]";else{e=t.toString();var r=/\[object [a-zA-Z0-9$_]+\]/;if(r.test(e))try{var i=JSON.stringify(t);e=i}catch(o){}0===e.length&&(e="(empty array)")}return"(<"+n(e)+">, no stack trace)"}function n(t){var e=41;return t.length<e?t:t.substr(0,e-3)+"..."}function r(t,e){this.captureStackTrace(t,e)}var i=(t("./assert.js"),t("./util.js").inherits),o=t("./es5.js").defineProperty,s=new RegExp("\\b(?:[\\w.]*Promise(?:Array|Spawn)?\\$_\\w+|tryCatch(?:1|2|Apply)|new \\w*PromiseArray|\\w*PromiseArray\\.\\w*PromiseArray|setTimeout|CatchFilter\\$_\\w+|makeNodePromisified|processImmediate|process._tickCallback|nextTick|Async\\$\\w+)\\b"),u=null,a=null,c=!1;i(r,Error),r.prototype.captureStackTrace=function(t,e){l(this,t,e)},r.possiblyUnhandledRejection=function(t){if("object"==typeof console){var e;if("object"==typeof t||"function"==typeof t){var n=t.stack;e="Possibly unhandled "+a(n,t)}else e="Possibly unhandled "+String(t);"function"==typeof console.error||"object"==typeof console.error?console.error(e):("function"==typeof console.log||"object"==typeof console.error)&&console.log(e)}},c="CapturedTrace$captureStackTrace"!==r.prototype.captureStackTrace.name,r.combine=function(t,e){for(var n=t.length-1,r=e.length-1;r>=0;--r){var i=e[r];if(t[n]!==i)break;t.pop(),n--}t.push("From previous event:");for(var o=t.concat(e),a=[],r=0,c=o.length;c>r;++r)s.test(o[r])||r>0&&!u.test(o[r])&&"From previous event:"!==o[r]||a.push(o[r]);return a},r.isSupported=function(){return"function"==typeof l};var l=function f(){if("number"==typeof Error.stackTraceLimit&&"function"==typeof Error.captureStackTrace){u=/^\s*at\s*/,a=function(t,n){return"string"==typeof t?t:void 0!==n.name&&void 0!==n.message?n.name+". "+n.message:e(n)};var t=Error.captureStackTrace;return function(e,n){t(e,n)}}var n=new Error;if(!c&&"string"==typeof n.stack&&"function"==typeof"".startsWith&&n.stack.startsWith("stackDetection@")&&"stackDetection"===f.name){o(Error,"stackTraceLimit",{writable:!0,enumerable:!1,configurable:!1,value:25}),u=/@/;var r=/[@\n]/;return a=function(t,n){return"string"==typeof t?n.name+". "+n.message+"\n"+t:void 0!==n.name&&void 0!==n.message?n.name+". "+n.message:e(n)},function(t,e){var n,i=e.name,o=(new Error).stack,s=o.split(r),u=s.length;for(n=0;u>n&&s[n]!==i;n+=2);s=s.slice(n+2),u=s.length-2;var a="";for(n=0;u>n;n+=2)a+=s[n],a+="@",a+=s[n+1],a+="\n";t.stack=a}}return a=function(t,n){return"string"==typeof t?t:"object"!=typeof n&&"function"!=typeof n||void 0===n.name||void 0===n.message?e(n):n.name+". "+n.message},null}();return r}},{"./assert.js":3,"./es5.js":13,"./util.js":40}],9:[function(t,e){"use strict";e.exports=function(e){function n(t,e,n){this._instances=t,this._callback=e,this._promise=n}function r(t,e){var n={},r=o(t,n,e);if(r===s)return r;var i=u(n);return i.length?(s.e=new TypeError("Catch filter must inherit from Error or be a simple predicate function"),s):r}var i=t("./util.js"),o=i.tryCatch1,s=i.errorObj,u=t("./es5.js").keys;return n.prototype.doFilter=function(t){for(var n=this._callback,i=this._promise,u=i._isBound()?i._boundTo:void 0,a=0,c=this._instances.length;c>a;++a){var l=this._instances[a],f=l===Error||null!=l&&l.prototype instanceof Error;if(f&&t instanceof l){var p=o(n,u,t);return p===s?(e.e=p.e,e):p}if("function"==typeof l&&!f){var h=r(l,t);if(h===s){this._promise._attachExtraTrace(s.e),t=s.e;break}if(h){var p=o(n,u,t);return p===s?(e.e=p.e,e):p}}}return e.e=t,e},n}},{"./es5.js":13,"./util.js":40}],10:[function(t,e){"use strict";var n=t("./util.js"),r=(t("./assert.js"),n.isPrimitive),i=n.wrapsPrimitiveReceiver;e.exports=function(t){var e=function(){return this},n=function(){throw this},o=function(t,e){return 1===e?function(){throw t}:2===e?function(){return t}:void 0};t.prototype["return"]=t.prototype.thenReturn=function(t){return i&&r(t)?this._then(o(t,2),void 0,void 0,void 0,void 0,this.thenReturn):this._then(e,void 0,void 0,t,void 0,this.thenReturn)},t.prototype["throw"]=t.prototype.thenThrow=function(t){return i&&r(t)?this._then(o(t,1),void 0,void 0,void 0,void 0,this.thenThrow):this._then(n,void 0,void 0,t,void 0,this.thenThrow)}}},{"./assert.js":3,"./util.js":40}],11:[function(t,e){"use strict";function n(t){return(1&t)>0}function r(t){return(2&t)>0}function i(t){return 1|t}function o(t){return 2|t}function s(t){return-3&t}function u(t){var e;return g(t)&&void 0!==(e=t.__promiseHandled__)&&(t.__promiseHandled__=s(e)),t}function a(t){try{j(t,"__rejectionError__",d)}catch(e){}}function c(t){return null==t?!1:t instanceof d||t.__rejectionError__===d}function l(t){try{return j(t,"__promiseHandled__",0),!0}catch(e){return!1}}function f(t){return t instanceof b}function p(t){if(f(t)){var e=t.__promiseHandled__;return void 0===e?l(t):!n(e)}return!1}function h(t,e){function n(n){this.message="string"==typeof n?n:e,this.name=t,b.captureStackTrace&&b.captureStackTrace(this,this.constructor)}return m(n,b),n}function d(t){this.name="RejectionError",this.message=t,this.cause=t,t instanceof b?(this.message=t.message,this.stack=t.stack):b.captureStackTrace&&b.captureStackTrace(this,this.constructor)}var v=t("./global.js"),_=t("./es5.js").freeze,y=t("./util.js"),m=y.inherits,g=y.isObject,j=y.notEnumerableProp,b=v.Error,w=v.TypeError;"function"!=typeof w&&(w=h("TypeError","type error"));var x=v.RangeError;"function"!=typeof x&&(x=h("RangeError","range error"));var k=h("CancellationError","cancellation error"),T=h("TimeoutError","timeout error");m(d,b);var A="__BluebirdErrorTypes__",E=v[A];E||(E=_({CancellationError:k,TimeoutError:T,RejectionError:d}),j(v,A,E)),e.exports={Error:b,TypeError:w,RangeError:x,CancellationError:E.CancellationError,RejectionError:E.RejectionError,TimeoutError:E.TimeoutError,originatesFromRejection:c,markAsOriginatingFromRejection:a,attachDefaultState:l,ensureNotHandled:u,withHandledUnmarked:s,withHandledMarked:o,withStackAttached:i,isStackAttached:n,isHandled:r,canAttach:p}},{"./es5.js":13,"./global.js":17,"./util.js":40}],12:[function(t,e){"use strict";e.exports=function(e){function n(t){var n=new r(t),i=e.rejected(n),o=i._peekContext();return null!=o&&o._attachExtraTrace(n),i}var r=t("./errors.js").TypeError;return n}},{"./errors.js":11}],13:[function(t,e){function n(t){var e=[];for(var n in t)a.call(t,n)&&e.push(n);return e}function r(t,e,n){return t[e]=n.value,t}function i(t){return t}function o(t){try{return Object(t).constructor.prototype}catch(e){return l}}function s(t){try{return"[object Array]"===c.call(t)}catch(e){return!1}}var u=function(){"use strict";return void 0===this}();if(u)e.exports={freeze:Object.freeze,defineProperty:Object.defineProperty,keys:Object.keys,getPrototypeOf:Object.getPrototypeOf,isArray:Array.isArray,isES5:u};else{var a={}.hasOwnProperty,c={}.toString,l={}.constructor.prototype;e.exports={isArray:s,keys:n,defineProperty:r,freeze:i,getPrototypeOf:o,isES5:u}}},{}],14:[function(t,e){"use strict";e.exports=function(e){function n(t){for(var e=this._settledValue,n=e.length,r=new Array(n),i=0,o=0;n>o;++o){var s=t[o];(void 0!==s||o in t)&&s&&(r[i++]=e[o])}return r.length=i,r}var r=(t("./assert.js"),t("./util.js").isArray,{ref:null});e.filter=function(t,i){return e.map(t,i,r)._then(n,void 0,void 0,r.ref,void 0,e.filter)},e.prototype.filter=function(t){return this.map(t,r)._then(n,void 0,void 0,r.ref,void 0,this.filter)}}},{"./assert.js":3,"./util.js":40}],15:[function(t,e){e.exports=function(e,n){function r(){return this}function i(){throw l(this),this}function o(t){return function(){return t}}function s(t){return function(){throw l(t),t}}function u(t,e,n){var a=f&&p(e);return n?t._then(a?r:o(e),h,void 0,e,void 0,u):t._then(a?i:s(e),h,void 0,e,void 0,u)}function a(t){var r=this.promise,i=this.handler,o=r._isBound()?i.call(r._boundTo):i();if(void 0!==o){var s=e._cast(o,a,void 0);if(e.is(s))return u(s,t,r.isFulfilled())}return r.isRejected()?(l(t),n.e=t,n):t}var c=t("./util.js"),l=t("./errors.js").ensureNotHandled,f=c.wrapsPrimitiveReceiver,p=c.isPrimitive,h=c.thrower;e.prototype.lastly=e.prototype["finally"]=function(t){if("function"!=typeof t)return this.then();var e={promise:this,handler:t};return this._then(a,a,void 0,e,void 0,this.lastly)}}},{"./errors.js":11,"./util.js":40}],16:[function(t,e){"use strict";e.exports=function(e,n,r){var i=t("./promise_spawn.js")(e,r),o=t("./errors.js"),s=o.TypeError;e.coroutine=function(t){if("function"!=typeof t)throw new s("generatorFunction must be a function");var e=i;return function n(){var r=t.apply(this,arguments),i=new e(void 0,void 0,n);return i._generator=r,i._next(void 0),i.promise()}},e.spawn=function(t){if("function"!=typeof t)return n("generatorFunction must be a function");var r=new i(t,this,e.spawn),o=r.promise();return r._run(e.spawn),o}}},{"./errors.js":11,"./promise_spawn.js":25}],17:[function(t,e){var n=t("__browserify_process"),r="undefined"!=typeof self?self:"undefined"!=typeof window?window:{};e.exports=function(){return"undefined"!=typeof this?this:"undefined"!=typeof n&&"undefined"!=typeof r&&"string"==typeof n.execPath?r:"undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator&&null!==navigator&&"string"==typeof navigator.appName?void 0!==window.wrappedJSObject?window.wrappedJSObject:window:void 0}()},{__browserify_process:76}],18:[function(t,e){"use strict";e.exports=function(e,n,r,i){function o(t){var i=this,s=void 0;"function"!=typeof i&&(s=i.receiver,i=i.fn);var u=!1,a=new Array(t.length);if(void 0===s){for(var c=0,l=t.length;l>c;++c)if(void 0!==t[c]||c in t){var f=i(t[c],c,l);if(!u){var p=e._cast(f,o,void 0);if(p instanceof e){if(p.isFulfilled()){a[c]=p._settledValue;continue}u=!0,f=p}}a[c]=f}}else for(var c=0,l=t.length;l>c;++c)if(void 0!==t[c]||c in t){var f=i.call(s,t[c],c,l);if(!u){var p=e._cast(f,o,void 0);if(p instanceof e){if(p.isFulfilled()){a[c]=p._settledValue;continue}u=!0,f=p}}a[c]=f}return u?n(a,r,o,void 0).promise():a}function s(t,e,s,u,a){if("function"!=typeof e)return i("fn must be a function");s===!0&&t._isBound()&&(e={fn:e,receiver:t._boundTo});var c=n(t,r,u,s===!0&&t._isBound()?t._boundTo:void 0).promise();return void 0!==a&&(a.ref=c),c._then(o,void 0,void 0,e,void 0,u)}t("./assert.js"),e.prototype.map=function(t,e){return s(this,t,!0,this.map,e)},e.map=function(t,n,r){return s(t,n,!1,e.map,r)}}},{"./assert.js":3}],19:[function(t,e){"use strict";e.exports=function(e){function n(t){throw t}function r(t,e){var r=this,i=u(r,e,null,t);i===c&&s.invokeLater(n,void 0,i.e)}function i(t,e){var r=this,i=a(r,e,t);i===c&&s.invokeLater(n,void 0,i.e)}var o=t("./util.js"),s=t("./async.js"),u=(t("./assert.js"),o.tryCatch2),a=o.tryCatch1,c=o.errorObj;e.prototype.nodeify=function(t){return"function"==typeof t&&this._then(r,i,void 0,t,this._isBound()?this._boundTo:null,this.nodeify),this}}},{"./assert.js":3,"./async.js":4,"./util.js":40}],20:[function(t,e){"use strict";e.exports=function(e,n){var r=(t("./assert.js"),t("./util.js")),i=t("./async.js"),o=r.tryCatch1,s=r.errorObj;e.prototype.progressed=function(t){return this._then(void 0,void 0,t,void 0,void 0,this.progressed)},e.prototype._progress=function(t){this._isFollowingOrFulfilledOrRejected()||this._progressUnchecked(t)},e.prototype._progressHandlerAt=function(t){return 0===t?this._progressHandler0:this[t+2-5]},e.prototype._doProgressWith=function(t){var n=t.value,r=t.handler,i=t.promise,u=t.receiver;this._pushContext();var a=o(r,u,n);this._popContext(),a===s?null!=a.e&&"StopProgressPropagation"===a.e.name?a.e.__promiseHandled__=2:(i._attachExtraTrace(a.e),i._progress(a.e)):e.is(a)?a._then(i._progress,null,null,i,void 0,this._progress):i._progress(a)},e.prototype._progressUnchecked=function(t){if(this.isPending())for(var r=this._length(),o=0;r>o;o+=5){var s=this._progressHandlerAt(o),u=this._promiseAt(o);if(e.is(u))"function"==typeof s?i.invoke(this._doProgressWith,this,{handler:s,promise:u,receiver:this._receiverAt(o),value:t}):i.invoke(u._progress,u,t);else{var a=this._receiverAt(o);"function"==typeof s?s.call(a,t,u):e.is(a)&&a._isProxied()?a._progressUnchecked(t):n(a,u)&&a._promiseProgressed(t,u)}}}}},{"./assert.js":3,"./async.js":4,"./util.js":40}],21:[function(t,e){var n=t("__browserify_process");e.exports=function(){function e(t){return void 0===t?!1:t instanceof i}function r(t,e){return t instanceof d?e>=0:!1}function i(t){if("function"!=typeof t)throw new E("the promise constructor requires a resolver function");if(this.constructor!==i)throw new E("the promise constructor cannot be invoked directly");this._bitField=0,this._fulfillmentHandler0=void 0,this._rejectionHandler0=void 0,this._promise0=void 0,this._receiver0=void 0,this._settledValue=void 0,this._boundTo=void 0,t!==f&&this._resolveFromResolver(t)}function o(t,e,n){return s(t,d,n,e===!0&&t._isBound()?t._boundTo:void 0).promise()}function s(t,n,r,o){var u=null;return m(t)?u=t:(u=i._cast(t,r,void 0),u!==t?u._setBoundTo(o):e(u)||(u=null)),null!==u?new n(u,"function"==typeof r?r:s,o):{promise:function(){return U("expecting an array, a promise or a thenable")}}}var u=t("./global.js"),a=(t("./assert.js"),t("./util.js")),c=t("./async.js"),l=t("./errors.js"),f=function(){},p={},h={e:null},d=t("./promise_array.js")(i,f),v=t("./captured_trace.js")(),_=t("./catch_filter.js")(h),y=t("./promise_resolver.js"),m=a.isArray,g=a.notEnumerableProp,j=a.isObject,b=a.ensurePropertyExpansion,w=a.errorObj,x=a.tryCatch1,k=a.tryCatch2,T=a.tryCatchApply,A=l.RangeError,E=l.TypeError,F=l.CancellationError,P=l.TimeoutError,R=l.RejectionError,O=l.originatesFromRejection,C=l.markAsOriginatingFromRejection,S=l.ensureNotHandled,H=l.withHandledMarked,B=l.withStackAttached,q=l.isStackAttached,M=l.isHandled,V=l.canAttach,N=a.thrower,U=t("./errors_api_rejection")(i),L=function(){return new E("circular promise resolution chain")};i.prototype.bind=function(t){var e=new i(f);return I&&e._setTrace(this.bind,this),e._follow(this),e._setBoundTo(t),this._cancellable()&&(e._setCancellable(),e._cancellationParent=this),e},i.prototype.toString=function(){return"[object Promise]"},i.prototype.caught=i.prototype["catch"]=function(t){var e=arguments.length;if(e>1){var n,r=new Array(e-1),i=0;for(n=0;e-1>n;++n){var o=arguments[n];if("function"!=typeof o){var s=new E("A catch filter must be an error constructor or a filter function");return this._attachExtraTrace(s),void c.invoke(this._reject,this,s)}r[i++]=o}r.length=i,t=arguments[n],this._resetTrace(this.caught);var u=new _(r,t,this);return this._then(void 0,u.doFilter,void 0,u,void 0,this.caught)}return this._then(void 0,t,void 0,void 0,void 0,this.caught)},i.prototype.then=function(t,e,n){return this._then(t,e,n,void 0,void 0,this.then)},i.prototype.done=function(t,e,n){var r=this._then(t,e,n,void 0,void 0,this.done);r._setIsFinal()},i.prototype.spread=function(t,e){return this._then(t,e,void 0,p,void 0,this.spread)},i.prototype.isFulfilled=function(){return(268435456&this._bitField)>0},i.prototype.isRejected=function(){return(134217728&this._bitField)>0},i.prototype.isPending=function(){return!this.isResolved()},i.prototype.isResolved=function(){return(402653184&this._bitField)>0},i.prototype.isCancellable=function(){return!this.isResolved()&&this._cancellable()},i.prototype.toJSON=function(){var t={isFulfilled:!1,isRejected:!1,fulfillmentValue:void 0,rejectionReason:void 0};return this.isFulfilled()?(t.fulfillmentValue=this._settledValue,t.isFulfilled=!0):this.isRejected()&&(t.rejectionReason=this._settledValue,t.isRejected=!0),t},i.prototype.all=function(){return o(this,!0,this.all)},i.is=e,i.all=function(t){return o(t,!1,i.all)},i.join=function(){for(var t=arguments.length,e=new Array(t),n=0;t>n;++n)e[n]=arguments[n];return s(e,d,i.join,void 0).promise()},i.resolve=i.fulfilled=function(t,e){var n=new i(f);return I&&n._setTrace("function"==typeof e?e:i.resolve,void 0),n._tryFollow(t)?n:(n._cleanValues(),n._setFulfilled(),n._settledValue=t,n)},i.reject=i.rejected=function(t){var e=new i(f);return I&&e._setTrace(i.reject,void 0),C(t),e._cleanValues(),e._setRejected(),e._settledValue=t,e},i.prototype.error=function(t){return this.caught(O,t)},i.prototype._resolveFromSyncValue=function(t,e){if(t===w)this._cleanValues(),this._setRejected(),this._settledValue=t.e;else{var n=i._cast(t,e,void 0);n instanceof i?this._follow(n):(this._cleanValues(),this._setFulfilled(),this._settledValue=t)}},i.method=function(t){if("function"!=typeof t)throw new E("fn must be a function");return function e(){var n;switch(arguments.length){case 0:n=x(t,this,void 0);break;case 1:n=x(t,this,arguments[0]);break;case 2:n=k(t,this,arguments[0],arguments[1]);break;default:for(var r=arguments.length,o=new Array(r),s=0;r>s;++s)o[s]=arguments[s];n=T(t,o,this)}var u=new i(f);return I&&u._setTrace(e,void 0),u._resolveFromSyncValue(n,e),u}},i["try"]=i.attempt=function(t,e,n){if("function"!=typeof t)return U("fn must be a function");var r=m(e)?T(t,e,n):x(t,n,e),o=new i(f);return I&&o._setTrace(i.attempt,void 0),o._resolveFromSyncValue(r,i.attempt),o},i.defer=i.pending=function(t){var e=new i(f);return I&&e._setTrace("function"==typeof t?t:i.defer,void 0),new y(e)},i.bind=function(t){var e=new i(f);return I&&e._setTrace(i.bind,void 0),e._setFulfilled(),e._setBoundTo(t),e},i.cast=function(t,e){"function"!=typeof e&&(e=i.cast);var n=i._cast(t,e,void 0);return n instanceof i?n:i.resolve(n,e)},i.onPossiblyUnhandledRejection=function(t){v.possiblyUnhandledRejection="function"==typeof t?t:void 0};var I=!1||!("undefined"==typeof n||"string"!=typeof n.execPath||"object"!=typeof n.env||!n.env.BLUEBIRD_DEBUG&&"development"!==n.env.NODE_ENV);i.longStackTraces=function(){if(c.haveItemsQueued()&&I===!1)throw new Error("cannot enable long stack traces after promises have been created");I=v.isSupported()},i.hasLongStackTraces=function(){return I&&v.isSupported()},i.prototype._setProxyHandlers=function(t,e){var n=this._length();if(n>=4194298&&(n=0,this._setLength(0)),0===n)this._promise0=e,this._receiver0=t;else{var r=n-5;this[r+3]=e,this[r+4]=t,this[r+0]=this[r+1]=this[r+2]=void 0}this._setLength(n+5)},i.prototype._proxyPromiseArray=function(t,e){this._setProxyHandlers(t,e)},i.prototype._proxyPromise=function(t){t._setProxied(),this._setProxyHandlers(t,-1)},i.prototype._then=function(t,e,n,r,o,s){var u=void 0!==o,a=u?o:new i(f);if(I&&!u){var l=this._peekContext()===this._traceParent;a._traceParent=l?this._traceParent:this,a._setTrace("function"==typeof s?s:this._then,this)}!u&&this._isBound()&&a._setBoundTo(this._boundTo);var p=this._addCallbacks(t,e,n,a,r);return!u&&this._cancellable()&&(a._setCancellable(),a._cancellationParent=this),this.isResolved()&&c.invoke(this._queueSettleAt,this,p),a},i.prototype._length=function(){return 4194303&this._bitField},i.prototype._isFollowingOrFulfilledOrRejected=function(){return(939524096&this._bitField)>0},i.prototype._isFollowing=function(){return 536870912===(536870912&this._bitField)},i.prototype._setLength=function(t){this._bitField=-4194304&this._bitField|4194303&t},i.prototype._cancellable=function(){return(67108864&this._bitField)>0},i.prototype._setFulfilled=function(){this._bitField=268435456|this._bitField},i.prototype._setRejected=function(){this._bitField=134217728|this._bitField},i.prototype._setFollowing=function(){this._bitField=536870912|this._bitField
},i.prototype._setIsFinal=function(){this._bitField=33554432|this._bitField},i.prototype._isFinal=function(){return(33554432&this._bitField)>0},i.prototype._setCancellable=function(){this._bitField=67108864|this._bitField},i.prototype._unsetCancellable=function(){this._bitField=-67108865&this._bitField},i.prototype._receiverAt=function(t){var e;return e=0===t?this._receiver0:this[t+4-5],this._isBound()&&void 0===e?this._boundTo:e},i.prototype._promiseAt=function(t){return 0===t?this._promise0:this[t+3-5]},i.prototype._fulfillmentHandlerAt=function(t){return 0===t?this._fulfillmentHandler0:this[t+0-5]},i.prototype._rejectionHandlerAt=function(t){return 0===t?this._rejectionHandler0:this[t+1-5]},i.prototype._unsetAt=function(t){0===t?this._fulfillmentHandler0=this._rejectionHandler0=this._progressHandler0=this._promise0=this._receiver0=void 0:this[t-5+0]=this[t-5+1]=this[t-5+2]=this[t-5+3]=this[t-5+4]=void 0},i.prototype._resolveFromResolver=function(t){function e(t){r._tryFollow(t)||r._fulfill(t)}function n(t){r._attachExtraTrace(t),C(t),r._reject(t)}var r=this,i=I;i&&(this._setTrace(this._resolveFromResolver,void 0),this._pushContext());var o=k(t,void 0,e,n);i&&this._popContext(),void 0!==o&&o===w&&r._reject(o.e)},i.prototype._addCallbacks=function(t,e,n,r,i){var o=this._length();if(o>=4194298&&(o=0,this._setLength(0)),0===o)this._promise0=r,void 0!==i&&(this._receiver0=i),"function"==typeof t&&(this._fulfillmentHandler0=t),"function"==typeof e&&(this._rejectionHandler0=e),"function"==typeof n&&(this._progressHandler0=n);else{var s=o-5;this[s+3]=r,this[s+4]=i,this[s+0]="function"==typeof t?t:void 0,this[s+1]="function"==typeof e?e:void 0,this[s+2]="function"==typeof n?n:void 0}return this._setLength(o+5),o},i.prototype._setBoundTo=function(t){void 0!==t?(this._bitField=8388608|this._bitField,this._boundTo=t):this._bitField=-8388609&this._bitField},i.prototype._isBound=function(){return 8388608===(8388608&this._bitField)},i.prototype._spreadSlowCase=function(t,e,n,r){var i=s(n,d,this._spreadSlowCase,r).promise()._then(function(){return t.apply(r,arguments)},void 0,void 0,p,void 0,this._spreadSlowCase);e._follow(i)},i.prototype._markHandled=function(t){if("object"==typeof t&&null!==t){var e=t.__promiseHandled__;void 0===e?g(t,"__promiseHandled__",2):t.__promiseHandled__=H(e)}},i.prototype._callSpread=function(t,n,r,o){var s=this._isBound()?this._boundTo:void 0;if(m(r))for(var u=this._settlePromiseFromHandler,a=0,c=r.length;c>a;++a)if(e(i._cast(r[a],u,void 0)))return void this._spreadSlowCase(t,n,r,s);return o&&n._pushContext(),T(t,r,s)},i.prototype._callHandler=function(t,e,n,r,i){var o;return e!==p||this.isRejected()?(i&&n._pushContext(),o=x(t,e,r)):o=this._callSpread(t,n,r,i),i&&n._popContext(),o},i.prototype._settlePromiseFromHandler=function(t,n,r,o){if(!e(o))return void t.call(n,r,o);this.isRejected()&&this._markHandled(r);var s=I,u=this._callHandler(t,n,o,r,s);if(!o._isFollowing())if(u===w||u===o||u===h){var a=u===o?L():S(u.e);u!==h&&o._attachExtraTrace(a),o._rejectUnchecked(a)}else{var c=i._cast(u,s?this._settlePromiseFromHandler:void 0,o);e(c)?(o._follow(c),c._cancellable()&&(o._cancellationParent=c,o._setCancellable())):o._fulfillUnchecked(u)}},i.prototype._follow=function(t){this._setFollowing(),t.isPending()?(t._cancellable()&&(this._cancellationParent=t,this._setCancellable()),t._proxyPromise(this)):t.isFulfilled()?this._fulfillUnchecked(t._settledValue):this._rejectUnchecked(t._settledValue),I&&null==t._traceParent&&(t._traceParent=this)},i.prototype._tryFollow=function(t){if(this._isFollowingOrFulfilledOrRejected()||t===this)return!1;var n=i._cast(t,this._tryFollow,void 0);return e(n)?(this._follow(n),!0):!1},i.prototype._resetTrace=function(t){if(I){var e=this._peekContext(),n=void 0===e;this._trace=new v("function"==typeof t?t:this._resetTrace,n)}},i.prototype._setTrace=function(t,e){if(I){var n=this._peekContext();this._traceParent=n;var r=void 0===n;this._trace=void 0!==e&&e._traceParent===n?e._trace:new v("function"==typeof t?t:this._setTrace,r)}return this},i.prototype._attachExtraTrace=function(t){if(I&&V(t)){var e=this,n=t.stack;n="string"==typeof n?n.split("\n"):[];for(var r=1;null!=e&&null!=e._trace;)n=v.combine(n,e._trace.stack.split("\n")),e=e._traceParent;var i=Error.stackTraceLimit+r,o=n.length;o>i&&(n.length=i),t.stack=n.length<=r?"(No stack trace)":n.join("\n"),t.__promiseHandled__=B(t.__promiseHandled__)}},i.prototype._notifyUnhandledRejection=function(t){M(t.__promiseHandled__)||(t.__promiseHandled__=H(t.__promiseHandled__),v.possiblyUnhandledRejection(t,this))},i.prototype._unhandledRejection=function(t){M(t.__promiseHandled__)||c.invokeLater(this._notifyUnhandledRejection,this,t)},i.prototype._cleanValues=function(){this._cancellable()&&(this._cancellationParent=void 0)},i.prototype._fulfill=function(t){this._isFollowingOrFulfilledOrRejected()||this._fulfillUnchecked(t)},i.prototype._reject=function(t){this._isFollowingOrFulfilledOrRejected()||this._rejectUnchecked(t)},i.prototype._settlePromiseAt=function(t){var e=this.isFulfilled()?this._fulfillmentHandlerAt(t):this._rejectionHandlerAt(t),n=this._settledValue,o=this._receiverAt(t),s=this._promiseAt(t);if("function"==typeof e)this._settlePromiseFromHandler(e,o,n,s);else{var u=!1,a=this.isFulfilled();void 0!==o&&(o instanceof i&&o._isProxied()?(o._unsetProxied(),a?o._fulfillUnchecked(n):o._rejectUnchecked(n),u=!0):r(o,s)&&(a?o._promiseFulfilled(n,s):o._promiseRejected(n,s),u=!0)),u||(a?s._fulfill(n):s._reject(n))}t>=256&&this._queueGC()},i.prototype._isProxied=function(){return 4194304===(4194304&this._bitField)},i.prototype._setProxied=function(){this._bitField=4194304|this._bitField},i.prototype._unsetProxied=function(){this._bitField=-4194305&this._bitField},i.prototype._isGcQueued=function(){return-1073741824===(-1073741824&this._bitField)},i.prototype._setGcQueued=function(){this._bitField=-1073741824|this._bitField},i.prototype._unsetGcQueued=function(){this._bitField=1073741823&this._bitField},i.prototype._queueGC=function(){this._isGcQueued()||(this._setGcQueued(),c.invokeLater(this._gc,this,void 0))},i.prototype._gc=function(){var t=this._length();this._unsetAt(0);for(var e=0;t>e;e++)delete this[e];this._setLength(0),this._unsetGcQueued()},i.prototype._queueSettleAt=function(t){c.invoke(this._settlePromiseAt,this,t)},i.prototype._fulfillUnchecked=function(t){if(this.isPending()){if(t===this){var e=L();return this._attachExtraTrace(e),this._rejectUnchecked(e)}this._cleanValues(),this._setFulfilled(),this._settledValue=t;var n=this._length();n>0&&c.invoke(this._fulfillPromises,this,n)}},i.prototype._fulfillPromises=function(t){t=this._length();for(var e=0;t>e;e+=5)this._settlePromiseAt(e)},i.prototype._rejectUnchecked=function(t){if(this.isPending()){if(t===this){var e=L();return this._attachExtraTrace(e),this._rejectUnchecked(e)}if(this._cleanValues(),this._setRejected(),this._settledValue=t,this._isFinal())return void c.invokeLater(N,void 0,t);var n=this._length();n>0?c.invoke(this._rejectPromises,this,n):this._ensurePossibleRejectionHandled(t)}},i.prototype._rejectPromises=function(t){t=this._length();for(var n=!1,i=0;t>i;i+=5){var o=this._rejectionHandlerAt(i);if(!n)if("function"==typeof o)n=!0;else{var s=this._promiseAt(i);if(e(s)&&s._length()>0)n=!0;else{var u=this._receiverAt(i);(e(u)&&u._length()>0||r(u,s))&&(n=!0)}}this._settlePromiseAt(i)}n||this._ensurePossibleRejectionHandled(this._settledValue)},i.prototype._ensurePossibleRejectionHandled=function(t){if(void 0!==v.possiblyUnhandledRejection&&j(t)){var e=t.__promiseHandled__,n=t;if(void 0===e)n=b(t,"__promiseHandled__",0),e=0;else if(M(e))return;q(e)||this._attachExtraTrace(n),c.invoke(this._unhandledRejection,this,n)}};var D=[];i.prototype._peekContext=function(){var t=D.length-1;return t>=0?D[t]:void 0},i.prototype._pushContext=function(){I&&D.push(this)},i.prototype._popContext=function(){I&&D.pop()};var z=u.Promise;return i.noConflict=function(){return u.Promise===i&&(u.Promise=z),i},v.isSupported()||(i.longStackTraces=function(){},I=!1),i._makeSelfResolutionError=L,t("./finally.js")(i,h),t("./direct_resolve.js")(i),t("./thenables.js")(i),i.RangeError=A,i.CancellationError=F,i.TimeoutError=P,i.TypeError=E,i.RejectionError=R,t("./timers.js")(i,f),t("./synchronous_inspection.js")(i),t("./any.js")(i,s,d),t("./race.js")(i,f),t("./call_get.js")(i),t("./filter.js")(i,s,d,U),t("./generators.js")(i,U,f),t("./map.js")(i,s,d,U),t("./nodeify.js")(i),t("./promisify.js")(i,f),t("./props.js")(i,d),t("./reduce.js")(i,s,d,U),t("./settle.js")(i,s,d),t("./some.js")(i,s,d,U),t("./progress.js")(i,r),t("./cancel.js")(i,f),i.prototype=i.prototype,i}},{"./any.js":2,"./assert.js":3,"./async.js":4,"./call_get.js":6,"./cancel.js":7,"./captured_trace.js":8,"./catch_filter.js":9,"./direct_resolve.js":10,"./errors.js":11,"./errors_api_rejection":12,"./filter.js":14,"./finally.js":15,"./generators.js":16,"./global.js":17,"./map.js":18,"./nodeify.js":19,"./progress.js":20,"./promise_array.js":22,"./promise_resolver.js":24,"./promisify.js":26,"./props.js":28,"./race.js":30,"./reduce.js":31,"./settle.js":33,"./some.js":35,"./synchronous_inspection.js":37,"./thenables.js":38,"./timers.js":39,"./util.js":40,__browserify_process:76}],22:[function(t,e){"use strict";e.exports=function(e,n){function r(t){switch(t){case-1:return void 0;case-2:return[];case-3:return{}}}function i(t,r,i){var o=this._promise=new e(n),s=void 0;e.is(t)&&(s=t,t._cancellable()&&(o._setCancellable(),o._cancellationParent=t),t._isBound()&&o._setBoundTo(i)),o._setTrace(r,s),this._values=t,this._length=0,this._totalResolved=0,this._init(void 0,-2)}var o=(t("./assert.js"),t("./errors.js").ensureNotHandled),s=t("./util.js"),u=t("./async.js"),a={}.hasOwnProperty,c=s.isArray;return i.PropertiesPromiseArray=function(){},i.prototype.length=function(){return this._length},i.prototype.promise=function(){return this._promise},i.prototype._init=function(t,n){var o=this._values;if(e.is(o)){if(!o.isFulfilled())return o.isPending()?void o._then(this._init,this._reject,void 0,this,n,this.constructor):void this._reject(o._settledValue);if(o=o._settledValue,!c(o)){var s=new e.TypeError("expecting an array, a promise or a thenable");return void this.__hardReject__(s)}this._values=o}if(0===o.length)return void this._resolve(r(n));var l,f=o.length,p=f;l=this instanceof i.PropertiesPromiseArray?this._values:new Array(f);for(var h=!1,d=0;f>d;++d){var v=o[d];if(void 0!==v||a.call(o,d)){var _=e._cast(v,void 0,void 0);_ instanceof e&&_.isPending()?_._proxyPromiseArray(this,d):h=!0,l[d]=_}else p--}if(0===p)return void this._resolve(-2===n?l:r(n));if(this._values=l,this._length=p,h){var y=p===f?this._scanDirectValues:this._scanDirectValuesHoled;u.invoke(y,this,f)}},i.prototype._settlePromiseAt=function(t){var n=this._values[t];e.is(n)?n.isFulfilled()?this._promiseFulfilled(n._settledValue,t):n.isRejected()&&this._promiseRejected(n._settledValue,t):this._promiseFulfilled(n,t)},i.prototype._scanDirectValuesHoled=function(t){for(var e=0;t>e&&!this._isResolved();++e)a.call(this._values,e)&&this._settlePromiseAt(e)},i.prototype._scanDirectValues=function(t){for(var e=0;t>e&&!this._isResolved();++e)this._settlePromiseAt(e)},i.prototype._isResolved=function(){return null===this._values},i.prototype._resolve=function(t){this._values=null,this._promise._fulfill(t)},i.prototype.__hardReject__=i.prototype._reject=function(t){o(t),this._values=null,this._promise._attachExtraTrace(t),this._promise._reject(t)},i.prototype._promiseProgressed=function(t,e){this._isResolved()||this._promise._progress({index:e,value:t})},i.prototype._promiseFulfilled=function(t,e){if(!this._isResolved()){this._values[e]=t;var n=++this._totalResolved;n>=this._length&&this._resolve(this._values)}},i.prototype._promiseRejected=function(t){this._isResolved()||(this._totalResolved++,this._reject(t))},i}},{"./assert.js":3,"./async.js":4,"./errors.js":11,"./util.js":40}],23:[function(t,e){"use strict";function n(t){void 0!==t?(this._bitField=t._bitField,this._settledValue=t.isResolved()?t._settledValue:void 0):(this._bitField=0,this._settledValue=void 0)}var r=t("./errors.js").TypeError;n.prototype.isFulfilled=function(){return(268435456&this._bitField)>0},n.prototype.isRejected=function(){return(134217728&this._bitField)>0},n.prototype.isPending=function(){return 0===(402653184&this._bitField)},n.prototype.value=function(){if(!this.isFulfilled())throw new r("cannot get fulfillment value of a non-fulfilled promise");return this._settledValue},n.prototype.error=function(){if(!this.isRejected())throw new r("cannot get rejection reason of a non-rejected promise");return this._settledValue},e.exports=n},{"./errors.js":11}],24:[function(t,e){"use strict";function n(t){return t instanceof Error&&h.getPrototypeOf(t)===Error.prototype}function r(t){var e;return e=n(t)?new l(t):t,a.markAsOriginatingFromRejection(e),e}function i(t){function e(e,n){if(e){var i=r(u(e));t._attachExtraTrace(i),t._reject(i)}else if(arguments.length>2){for(var o=arguments.length,s=new Array(o-1),a=1;o>a;++a)s[a-1]=arguments[a];t._fulfill(s)}else t._fulfill(n)}return e}var o,s=t("./util.js"),u=s.maybeWrapAsError,a=t("./errors.js"),c=a.TimeoutError,l=a.RejectionError,f=t("./async.js"),p=s.haveGetters,h=t("./es5.js");if(o=p?function(t){this.promise=t}:function(t){this.promise=t,this.asCallback=i(t),this.callback=this.asCallback},p){var d={get:function(){return i(this.promise)}};h.defineProperty(o.prototype,"asCallback",d),h.defineProperty(o.prototype,"callback",d)}o._nodebackForPromise=i,o.prototype.toString=function(){return"[object PromiseResolver]"},o.prototype.resolve=o.prototype.fulfill=function(t){var e=this.promise;e._tryFollow(t)||f.invoke(e._fulfill,e,t)},o.prototype.reject=function(t){var e=this.promise;a.markAsOriginatingFromRejection(t),e._attachExtraTrace(t),f.invoke(e._reject,e,t)},o.prototype.progress=function(t){f.invoke(this.promise._progress,this.promise,t)},o.prototype.cancel=function(){f.invoke(this.promise.cancel,this.promise,void 0)},o.prototype.timeout=function(){this.reject(new c("timeout"))},o.prototype.isResolved=function(){return this.promise.isResolved()},o.prototype.toJSON=function(){return this.promise.toJSON()},e.exports=o},{"./async.js":4,"./errors.js":11,"./es5.js":13,"./util.js":40}],25:[function(t,e){"use strict";e.exports=function(e,n){function r(t,r,i){var o=this._promise=new e(n);o._setTrace(i,void 0),this._generatorFunction=t,this._receiver=r,this._generator=void 0}var i=t("./errors.js"),o=i.TypeError,s=i.ensureNotHandled,u=t("./util.js"),a=u.isArray,c=u.errorObj,l=u.tryCatch1;return r.prototype.promise=function(){return this._promise},r.prototype._run=function(){this._generator=this._generatorFunction.call(this._receiver),this._receiver=this._generatorFunction=void 0,this._next(void 0)},r.prototype._continue=function f(t){if(t===c)return this._generator=void 0,this._promise._attachExtraTrace(t.e),void this._promise._reject(t.e);var n=t.value;if(t.done===!0)this._generator=void 0,this._promise._fulfill(n);else{var r=e._cast(n,f,void 0);if(!(r instanceof e)){if(!a(r))return void this._throw(new o("A value was yielded that could not be treated as a promise"));r=e.all(r)}r._then(this._next,this._throw,void 0,this,null,void 0)}},r.prototype._throw=function(t){s(t),this._promise._attachExtraTrace(t),this._continue(l(this._generator["throw"],this._generator,t))},r.prototype._next=function(t){this._continue(l(this._generator.next,this._generator,t))},r}},{"./errors.js":11,"./util.js":40}],26:[function(t,e){"use strict";e.exports=function(e,n){function r(t){return t.__isPromisified__===!0}function i(t,r,i){function o(e){for(var n=new Array(e),i=0,o=n.length;o>i;++i)n[i]="a"+(i+1);var s=e>0?",":"";return"string"==typeof t&&r===a?"this['"+t+"']("+n.join(",")+s+" fn);break;":(void 0===r?"callback("+n.join(",")+s+" fn);":"callback.call("+(r===a?"this":"receiver")+", "+n.join(",")+s+" fn);")+"break;"}function s(){return"var args = new Array(len + 1);var i = 0;for (var i = 0; i < len; ++i) {    args[i] = arguments[i];}args[i] = fn;"}var u="string"==typeof i?i+"Async":"promisified";return new Function("Promise","callback","receiver","withAppended","maybeWrapAsError","nodebackForPromise","INTERNAL","var ret = function "+u+'(a1, a2, a3, a4, a5) {"use strict";var len = arguments.length;var promise = new Promise(INTERNAL);promise._setTrace('+u+", void 0);var fn = nodebackForPromise(promise);try{switch(len) {case 1:"+o(1)+"case 2:"+o(2)+"case 3:"+o(3)+"case 0:"+o(0)+"case 4:"+o(4)+"case 5:"+o(5)+"default: "+s()+("string"==typeof t?"this['"+t+"'].apply(":"callback.apply(")+(r===a?"this":"receiver")+", args); break;}}catch(e){ var wrapped = maybeWrapAsError(e);promise._attachExtraTrace(wrapped);promise._reject(wrapped);}return promise;}; ret.__isPromisified__ = true; return ret;")(e,t,r,p,h,f,n)}function o(t,r){function i(){var o=r;r===a&&(o=this),"string"==typeof t&&(t=o[t]);var s=new e(n);s._setTrace(i,void 0);var u=f(s);try{t.apply(o,p(arguments,u))}catch(c){var l=h(c);s._attachExtraTrace(l),s._reject(l)}return s}return i.__isPromisified__=!0,i}function s(){}function u(t,e,n){if(n){for(var r=g(t),i=0,o=r.length;o>i;i+=2){var u=r[i],c=r[i+1],l=u+"__beforePromisified__",f=u+"Async";v(t,l,c),t[f]=j(l,a,u)}return r.length>16&&(s.prototype=t),t}return j(t,e,void 0)}var a={},c=t("./util.js"),l=t("./es5.js"),f=t("./promise_resolver.js")._nodebackForPromise,p=c.withAppended,h=c.maybeWrapAsError,d=c.canEvaluate,v=c.notEnumerableProp,_=c.deprecated,y=(t("./assert.js"),new RegExp("__beforePromisified__$")),m={}.hasOwnProperty,g=function(){if(l.isES5){var t=Object.create,e=Object.getOwnPropertyDescriptor;return function(n){for(var i=n,o=[],s=t(null);null!==n;){for(var u=l.keys(n),a=0,c=u.length;c>a;++a){var f=u[a];if(!(s[f]||y.test(f)||m.call(i,f+"__beforePromisified__"))){s[f]=!0;var p=e(n,f);null==p||"function"!=typeof p.value||r(p.value)||o.push(f,p.value)}}n=l.getPrototypeOf(n)}return o}}return function(t){var e=[];for(var n in t)if(!y.test(n)&&!m.call(t,n+"__beforePromisified__")){var i=t[n];"function"!=typeof i||r(i)||e.push(n,i)}return e}}(),j=d?i:o;e.promisify=function(t,e){if("object"==typeof t&&null!==t)return _("Promise.promisify for promisifying entire objects is deprecated. Use Promise.promisifyAll instead."),u(t,e,!0);if("function"!=typeof t)throw new TypeError("fn must be a function");return r(t)?t:u(t,arguments.length<2?a:e,!1)},e.promisifyAll=function(t){if("function"!=typeof t&&"object"!=typeof t)throw new TypeError("the target of promisifyAll must be an object or a function");return u(t,void 0,!0)}}},{"./assert.js":3,"./es5.js":13,"./promise_resolver.js":24,"./util.js":40}],27:[function(t,e){"use strict";e.exports=function(e,n){function r(t,e,n){for(var r=s.keys(t),i=new Array(r.length),o=0,u=i.length;u>o;++o)i[o]=t[r[o]];if(this.constructor$(i,e,n),!this._isResolved())for(var o=0,u=r.length;u>o;++o)i.push(r[o])}var i=(t("./assert.js"),t("./util.js")),o=i.inherits,s=t("./es5.js");return o(r,n),r.prototype._init=function(){this._init$(void 0,-3)},r.prototype._promiseFulfilled=function(t,e){if(!this._isResolved()){this._values[e]=t;var n=++this._totalResolved;if(n>=this._length){for(var r={},i=this.length(),o=0,s=this.length();s>o;++o)r[this._values[o+i]]=this._values[o];this._resolve(r)}}},r.prototype._promiseProgressed=function(t,e){this._isResolved()||this._promise._progress({key:this._values[e+this.length()],value:t})},n.PropertiesPromiseArray=r,r}},{"./assert.js":3,"./es5.js":13,"./util.js":40}],28:[function(t,e){"use strict";e.exports=function(e,n){function r(t,n,r){var o,a=e._cast(t,r,void 0);return u(a)?(e.is(a)?o=a._then(e.props,void 0,void 0,void 0,void 0,r):(o=new i(a,r,n===!0&&a._isBound()?a._boundTo:void 0).promise(),n=!1),n===!0&&a._isBound()&&o._setBoundTo(a._boundTo),o):s("cannot await properties of a non-object")}var i=t("./properties_promise_array.js")(e,n),o=t("./util.js"),s=t("./errors_api_rejection")(e),u=o.isObject;e.prototype.props=function(){return r(this,!0,this.props)},e.props=function(t){return r(t,!1,e.props)}}},{"./errors_api_rejection":12,"./properties_promise_array.js":27,"./util.js":40}],29:[function(t,e){"use strict";function n(t,e,n,r,i){for(var o=0;i>o;++o)n[o+r]=t[o+e]}function r(t){return t>>>=0,t-=1,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,t|=t>>16,t+1}function i(t){return"number"!=typeof t?16:r(Math.min(Math.max(16,t),1073741824))}function o(t){this._capacity=i(t),this._length=0,this._front=0,this._makeCapacity()}t("./assert.js"),o.prototype._willBeOverCapacity=function(t){return this._capacity<t},o.prototype._pushOne=function(t){var e=this.length();this._checkCapacity(e+1);var n=this._front+e&this._capacity-1;this[n]=t,this._length=e+1},o.prototype.push=function(t,e,n){var r=this.length()+3;if(this._willBeOverCapacity(r))return this._pushOne(t),this._pushOne(e),void this._pushOne(n);var i=this._front+r-3;this._checkCapacity(r);var o=this._capacity-1;this[i+0&o]=t,this[i+1&o]=e,this[i+2&o]=n,this._length=r},o.prototype.shift=function(){var t=this._front,e=this[t];return this[t]=void 0,this._front=t+1&this._capacity-1,this._length--,e},o.prototype.length=function(){return this._length},o.prototype._makeCapacity=function(){for(var t=this._capacity,e=0;t>e;++e)this[e]=void 0},o.prototype._checkCapacity=function(t){this._capacity<t&&this._resizeTo(this._capacity<<3)},o.prototype._resizeTo=function(t){var e=this._front,r=this._capacity,i=new Array(r),o=this.length();if(n(this,0,i,0,r),this._capacity=t,this._makeCapacity(),this._front=0,r>=e+o)n(i,e,this,0,o);else{var s=o-(e+o&r-1);n(i,e,this,0,s),n(i,0,this,s,o-s)}},e.exports=o},{"./assert.js":3}],30:[function(t,e){"use strict";e.exports=function(e,n){function r(t,r,a){var c=e._cast(t,r,void 0);if(e.is(c))return s(c);if(!o(t))return i("expecting an array, a promise or a thenable");var l=new e(n);l._setTrace(r,a),void 0!==a&&(a._isBound()&&l._setBoundTo(a._boundTo),a._cancellable()&&(l._setCancellable(),l._cancellationParent=a));for(var f=l._fulfill,p=l._reject,h=0,d=t.length;d>h;++h){var v=t[h];(void 0!==v||u.call(t,h))&&e.cast(v)._then(f,p,void 0,l,null,r)}return l}var i=t("./errors_api_rejection.js")(e),o=t("./util.js").isArray,s=function(t){return t.then(function e(n){return r(n,e,t)})},u={}.hasOwnProperty;e.race=function(t){return r(t,e.race,void 0)},e.prototype.race=function(){return r(this,this.race,void 0)}}},{"./errors_api_rejection.js":12,"./util.js":40}],31:[function(t,e){"use strict";e.exports=function(e,n,r,i){function o(t,e){var n=this,r=void 0;"function"!=typeof n&&(r=n.receiver,n=n.fn);var i=t.length,o=void 0,s=0;if(void 0!==e)o=e,s=0;else if(s=1,i>0)for(var u=0;i>u;++u)if(void 0!==t[u]||u in t){o=t[u],s=u+1;break}if(void 0===r)for(var u=s;i>u;++u)(void 0!==t[u]||u in t)&&(o=n(o,t[u],u,i));else for(var u=s;i>u;++u)(void 0!==t[u]||u in t)&&(o=n.call(r,o,t[u],u,i));return o}function s(t){var e=this.fn,n=this.initialValue;return o.call(e,t,n)}function u(t,e,n,r,i){return n._then(function o(n){return a(t,e,n,r,o)},void 0,void 0,void 0,void 0,i)}function a(t,a,c,l,f){if("function"!=typeof a)return i("fn must be a function");if(l===!0&&t._isBound()&&(a={fn:a,receiver:t._boundTo}),void 0!==c){if(e.is(c)){if(!c.isFulfilled())return u(t,a,c,l,f);c=c._settledValue}return n(t,r,f,l===!0&&t._isBound()?t._boundTo:void 0).promise()._then(s,void 0,void 0,{fn:a,initialValue:c},void 0,e.reduce)}return n(t,r,f,l===!0&&t._isBound()?t._boundTo:void 0).promise()._then(o,void 0,void 0,a,void 0,f)}t("./assert.js"),e.reduce=function(t,n,r){return a(t,n,r,!1,e.reduce)},e.prototype.reduce=function(t,e){return a(this,t,e,!0,this.reduce)}}},{"./assert.js":3}],32:[function(t,e){var n,r=t("__browserify_process"),i=t("./global.js");if(t("./assert.js"),"undefined"!=typeof r&&null!==r&&"function"==typeof r.cwd&&"function"==typeof r.nextTick)n=r.nextTick;else if("function"!=typeof MutationObserver&&"function"!=typeof WebkitMutationObserver&&"function"!=typeof WebKitMutationObserver||"undefined"==typeof document||"function"!=typeof document.createElement)if("function"==typeof i.postMessage&&"function"!=typeof i.importScripts&&"function"==typeof i.addEventListener&&"function"==typeof i.removeEventListener){var o="bluebird_message_key_"+Math.random();n=function(){function t(t){if(t.source===i&&t.data===o){var n=e;e=void 0,n()}}var e=void 0;return i.addEventListener("message",t,!1),function(t){e=t,i.postMessage(o,"*")}}()}else n="function"==typeof MessageChannel?function(){var t=void 0,e=new MessageChannel;return e.port1.onmessage=function(){var e=t;t=void 0,e()},function(n){t=n,e.port2.postMessage(null)}}():i.setTimeout?function(t){setTimeout(t,4)}:function(t){t()};else n=function(){var t=i.MutationObserver||i.WebkitMutationObserver||i.WebKitMutationObserver,e=document.createElement("div"),n=void 0,r=new t(function(){var t=n;n=void 0,t()});return r.observe(e,{attributes:!0}),function(t){n=t,e.setAttribute("class","foo")}}();e.exports=n},{"./assert.js":3,"./global.js":17,__browserify_process:76}],33:[function(t,e){"use strict";e.exports=function(e,n,r){function i(t,e,r){return n(t,o,r,e===!0&&t._isBound()?t._boundTo:void 0).promise()}var o=t("./settled_promise_array.js")(e,r);e.settle=function(t){return i(t,!1,e.settle)},e.prototype.settle=function(){return i(this,!0,this.settle)}}},{"./settled_promise_array.js":34}],34:[function(t,e){"use strict";e.exports=function(e,n){function r(t,e,n){this.constructor$(t,e,n)}var i=(t("./assert.js"),t("./promise_inspection.js")),o=t("./util.js"),s=o.inherits;return s(r,n),r.prototype._promiseResolved=function(t,e){this._values[t]=e;var n=++this._totalResolved;n>=this._length&&this._resolve(this._values)},r.prototype._promiseFulfilled=function(t,e){if(!this._isResolved()){var n=new i;n._bitField=268435456,n._settledValue=t,this._promiseResolved(e,n)}},r.prototype._promiseRejected=function(t,e){if(!this._isResolved()){var n=new i;n._bitField=134217728,n._settledValue=t,this._promiseResolved(e,n)}},r}},{"./assert.js":3,"./promise_inspection.js":23,"./util.js":40}],35:[function(t,e){"use strict";e.exports=function(e,n,r,i){function o(t,e,r,o){if((0|e)!==e||0>e)return i("expecting a positive integer");var u=n(t,s,o,r===!0&&t._isBound()?t._boundTo:void 0),a=u.promise();return a.isRejected()?a:(u.setHowMany(e),u.init(),a)}var s=t("./some_promise_array.js")(r);t("./assert.js"),e.some=function(t,n){return o(t,n,!1,e.some)},e.prototype.some=function(t){return o(this,t,!0,this.some)}}},{"./assert.js":3,"./some_promise_array.js":36}],36:[function(t,e){"use strict";e.exports=function(e){function n(t,e,n){this.constructor$(t,e,n),this._howMany=0,this._unwrap=!1,this._initialized=!1}var r=t("./util.js"),i=t("./errors.js").RangeError,o=r.inherits,s=r.isArray;return o(n,e),n.prototype._init=function(){if(this._initialized){if(0===this._howMany)return void this._resolve([]);this._init$(void 0,-2);var t=s(this._values);if(this._holes=t?this._values.length-this.length():0,!this._isResolved()&&t&&this._howMany>this._canPossiblyFulfill()){var e="(Promise.some) input array contains less than "+this._howMany+" promises";this._reject(new i(e))}}},n.prototype.init=function(){this._initialized=!0,this._init()},n.prototype.setUnwrap=function(){this._unwrap=!0},n.prototype.howMany=function(){return this._howMany},n.prototype.setHowMany=function(t){this._isResolved()||(this._howMany=t)},n.prototype._promiseFulfilled=function(t){this._isResolved()||(this._addFulfilled(t),this._fulfilled()===this.howMany()&&(this._values.length=this.howMany(),this._resolve(1===this.howMany()&&this._unwrap?this._values[0]:this._values)))},n.prototype._promiseRejected=function(t){this._isResolved()||(this._addRejected(t),this.howMany()>this._canPossiblyFulfill()&&this._reject(this._values.length===this.length()?[]:this._values.slice(this.length()+this._holes)))},n.prototype._fulfilled=function(){return this._totalResolved},n.prototype._rejected=function(){return this._values.length-this.length()-this._holes},n.prototype._addRejected=function(t){this._values.push(t)},n.prototype._addFulfilled=function(t){this._values[this._totalResolved++]=t},n.prototype._canPossiblyFulfill=function(){return this.length()-this._rejected()},n}},{"./errors.js":11,"./util.js":40}],37:[function(t,e){"use strict";e.exports=function(e){var n=t("./promise_inspection.js");e.prototype.inspect=function(){return new n(this)}}},{"./promise_inspection.js":23}],38:[function(t,e){"use strict";e.exports=function(e){function n(t){try{return t.then}catch(e){return u.e=e,u}}function r(t,o,s){if(a(t)){if(t instanceof e)return t;var c=n(t);if(c===u)return o="function"==typeof o?o:r,void 0!==s&&s._attachExtraTrace(c.e),e.reject(c.e,o);if("function"==typeof c)return o="function"==typeof o?o:r,i(t,c,o,s)}return t}function i(t,n,r,i){function s(n){if(!f){if(f=!0,t===n){var r=e._makeSelfResolutionError();return void 0!==i&&i._attachExtraTrace(r),void l.reject(r)}l.resolve(n)}}function a(t){f||(f=!0,o.markAsOriginatingFromRejection(t),void 0!==i&&i._attachExtraTrace(t),l.reject(t))}var l=e.defer(r),f=!1,p=c(n,t,s,a);return p!==u||f||(f=!0,void 0!==i&&i._attachExtraTrace(p.e),l.promise._reject(p.e)),l.promise}var o=(t("./assert.js"),t("./errors.js")),s=t("./util.js"),u=s.errorObj,a=s.isObject,c=s.tryCatch2;e._cast=r}},{"./assert.js":3,"./errors.js":11,"./util.js":40}],39:[function(t,e){"use strict";var n=t("./global.js"),r=function(t,e){for(var r=arguments.length,i=new Array(r-2),o=2;r>o;++o)i[o-2]=arguments[o];n.setTimeout(function(){t.apply(void 0,i)},e)},i={};n.setTimeout(function(t){t===i&&(r=n.setTimeout)},1,i),e.exports=function(e,n){var i=(t("./util.js"),t("./assert.js"),t("./errors.js")),o=t("./errors_api_rejection")(e),s=e.TimeoutError,u=function(t,e,n){if(t.isPending()){"string"!=typeof e&&(e="operation timed out after "+n+" ms");var r=new s(e);i.markAsOriginatingFromRejection(r),t._attachExtraTrace(r),t._rejectUnchecked(r)}},a=function(t,e){e._fulfill(t)};e.delay=function(t,i,s){if(void 0===i&&(i=t,t=void 0),(0|i)!==i||0>i)return o("expecting a positive integer");"function"!=typeof s&&(s=e.delay);var u=e._cast(t,s,void 0),c=new e(n);return e.is(u)?(u._isBound()&&c._setBoundTo(u._boundTo),u._cancellable()&&(c._setCancellable(),c._cancellationParent=u),c._setTrace(s,u),c._follow(u),c.then(function(t){return e.delay(t,i)})):(c._setTrace(s,void 0),r(a,i,t,c),c)},e.prototype.delay=function(t){return e.delay(this,t,this.delay)},e.prototype.timeout=function(t,i){if((0|t)!==t||0>t)return o("expecting a positive integer");var s=new e(n);return s._setTrace(this.timeout,this),this._isBound()&&s._setBoundTo(this._boundTo),this._cancellable()&&(s._setCancellable(),s._cancellationParent=this),s._follow(this),r(u,t,s,i,t),s}}},{"./assert.js":3,"./errors.js":11,"./errors_api_rejection":12,"./global.js":17,"./util.js":40}],40:[function(t,e){"use strict";function n(t){"undefined"!=typeof console&&null!==console&&"function"==typeof console.warn&&console.warn("Bluebird: "+t)}function r(t,e,n){try{return t.call(e,n)}catch(r){return m.e=r,m}}function i(t,e,n,r){try{return t.call(e,n,r)}catch(i){return m.e=i,m}}function o(t,e,n){try{return t.apply(n,e)}catch(r){return m.e=r,m}}function s(t){return"string"==typeof t?t:""+t}function u(t){return null==t||t===!0||t===!1||"string"==typeof t||"number"==typeof t}function a(t){return!u(t)}function c(t){return u(t)?new Error(s(t)):t}function l(t,e){var n,r=t.length,i=new Array(r+1);for(n=0;r>n;++n)i[n]=t[n];return i[n]=e,i}function f(t,e,n){var r={value:n,configurable:!0,enumerable:!1,writable:!0};return d.defineProperty(t,e,r),t}function p(t){throw t}var h=t("./global.js"),d=(t("./assert.js"),t("./es5.js")),v=function(){try{var t={};return d.defineProperty(t,"f",{get:function(){return 3}}),3===t.f}catch(e){return!1}}(),_=function(t,e,n){try{return f(t,e,n),t}catch(r){for(var i={},o=d.keys(t),s=0,u=o.length;u>s;++s)try{var a=o[s];i[a]=t[a]}catch(c){i[a]=c}return f(i,e,n),i}},y=function(){return"undefined"!=typeof window&&null!==window&&"undefined"!=typeof window.document&&"undefined"!=typeof navigator&&null!==navigator&&"string"==typeof navigator.appName&&window===h?!1:!0
}(),m={e:{}},g=function(t,e){function n(){this.constructor=t,this.constructor$=e;for(var n in e.prototype)r.call(e.prototype,n)&&"$"!==n.charAt(n.length-1)&&(this[n+"$"]=e.prototype[n])}var r={}.hasOwnProperty;return n.prototype=e.prototype,t.prototype=new n,t.prototype},j=function(){return"string"!==this}.call("string"),b={thrower:p,isArray:d.isArray,haveGetters:v,notEnumerableProp:f,isPrimitive:u,isObject:a,ensurePropertyExpansion:_,canEvaluate:y,deprecated:n,errorObj:m,tryCatch1:r,tryCatch2:i,tryCatchApply:o,inherits:g,withAppended:l,asString:s,maybeWrapAsError:c,wrapsPrimitiveReceiver:j};e.exports=b},{"./assert.js":3,"./es5.js":13,"./global.js":17}],41:[function(t,e){function n(t,e){function n(){4===p.readyState&&i()}function i(){var t=null,n=p.statusCode=p.status,r=p.body=p.response||p.responseText||p.responseXML;if(0===n){var i=p.responseText||a[String(p.status).charAt(0)];t=new Error(i),t.statusCode=p.status}e(t,p,r)}function f(t){e(t,p)}"string"==typeof t&&(t={uri:t}),t=t||{},e=o(e);var p;p=t.cors?new l:new c;var h=p.url=t.uri,d=p.method=t.method||"GET",v=t.body||t.data,_=p.headers=t.headers||{},y=!!t.sync;return p.onreadystatechange=n,p.onload=i,p.onerror=f,p.onprogress=function(){},p.ontimeout=r,p.open(d,h,!y),t.cors&&(p.withCredentials=!0),y||(p.timeout="timeout"in t?t.timeout:5e3),p.setRequestHeader&&u(s(_),function(t){p.setRequestHeader(t,_[t])}),p.send(v),p}function r(){}var i=t("global/window"),o=t("once"),s=t("lodash.keys"),u=t("lodash.foreach"),a={0:"Internal XMLHttpRequest Error"},c=i.XMLHttpRequest||r,l="withCredentials"in new c?i.XMLHttpRequest:i.XDomainRequest;e.exports=n},{"global/window":42,"lodash.foreach":43,"lodash.keys":69,once:75}],42:[function(t,e){var n="undefined"!=typeof self?self:"undefined"!=typeof window?window:{};e.exports="undefined"!=typeof window?window:"undefined"!=typeof n?n:{}},{}],43:[function(t,e){function n(t,e,n){var o=-1,s=t?t.length:0;if(e=e&&"undefined"==typeof n?e:r(e,n,3),"number"==typeof s)for(;++o<s&&e(t[o],o,t)!==!1;);else i(t,e);return t}var r=t("lodash._basecreatecallback"),i=t("lodash.forown");e.exports=n},{"lodash._basecreatecallback":44,"lodash.forown":67}],44:[function(t,e){function n(t,e,n){if("function"!=typeof t)return i;if("undefined"==typeof e||!("prototype"in t))return t;var l=t.__bindData__;if("undefined"==typeof l&&(s.funcNames&&(l=!t.name),l=l||!s.funcDecomp,!l)){var f=c.call(t);s.funcNames||(l=!u.test(f)),l||(l=a.test(f),o(t,l))}if(l===!1||l!==!0&&1&l[1])return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)};case 4:return function(n,r,i,o){return t.call(e,n,r,i,o)}}return r(t,e)}var r=t("lodash.bind"),i=t("lodash.identity"),o=t("lodash._setbinddata"),s=t("lodash.support"),u=/^\s*function[ \n\r\t]+\w/,a=/\bthis\b/,c=Function.prototype.toString;e.exports=n},{"lodash._setbinddata":45,"lodash.bind":48,"lodash.identity":64,"lodash.support":65}],45:[function(t,e){var n=t("lodash._isnative"),r=t("lodash.noop"),i={configurable:!1,enumerable:!1,value:null,writable:!1},o=function(){try{var t={},e=n(e=Object.defineProperty)&&e,r=e(t,t,t)&&e}catch(i){}return r}(),s=o?function(t,e){i.value=e,o(t,"__bindData__",i)}:r;e.exports=s},{"lodash._isnative":46,"lodash.noop":47}],46:[function(t,e){function n(t){return"function"==typeof t&&o.test(t)}var r=Object.prototype,i=r.toString,o=RegExp("^"+String(i).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$");e.exports=n},{}],47:[function(t,e){function n(){}e.exports=n},{}],48:[function(t,e){function n(t,e){return arguments.length>2?r(t,17,i(arguments,2),null,e):r(t,1,null,null,e)}var r=t("lodash._createwrapper"),i=t("lodash._slice");e.exports=n},{"lodash._createwrapper":49,"lodash._slice":63}],49:[function(t,e){function n(t,e,u,l,f,p){var h=1&e,d=2&e,v=4&e,_=16&e,y=32&e;if(!d&&!o(t))throw new TypeError;_&&!u.length&&(e&=-17,_=u=!1),y&&!l.length&&(e&=-33,y=l=!1);var m=t&&t.__bindData__;if(m&&m!==!0)return m=s(m),m[2]&&(m[2]=s(m[2])),m[3]&&(m[3]=s(m[3])),!h||1&m[1]||(m[4]=f),!h&&1&m[1]&&(e|=8),!v||4&m[1]||(m[5]=p),_&&a.apply(m[2]||(m[2]=[]),u),y&&c.apply(m[3]||(m[3]=[]),l),m[1]|=e,n.apply(null,m);var g=1==e||17===e?r:i;return g([t,e,u,l,f,p])}var r=t("lodash._basebind"),i=t("lodash._basecreatewrapper"),o=t("lodash.isfunction"),s=t("lodash._slice"),u=[],a=u.push,c=u.unshift;e.exports=n},{"lodash._basebind":50,"lodash._basecreatewrapper":56,"lodash._slice":63,"lodash.isfunction":62}],50:[function(t,e){function n(t){function e(){if(u){var t=s(u);a.apply(t,arguments)}if(this instanceof e){var o=r(n.prototype),l=n.apply(o,t||arguments);return i(l)?l:o}return n.apply(c,t||arguments)}var n=t[0],u=t[2],c=t[4];return o(e,t),e}var r=t("lodash._basecreate"),i=t("lodash.isobject"),o=t("lodash._setbinddata"),s=t("lodash._slice"),u=[],a=u.push;e.exports=n},{"lodash._basecreate":51,"lodash._setbinddata":45,"lodash._slice":63,"lodash.isobject":54}],51:[function(t,e){function n(t){return o(t)?s(t):{}}var r="undefined"!=typeof self?self:"undefined"!=typeof window?window:{},i=t("lodash._isnative"),o=t("lodash.isobject"),s=(t("lodash.noop"),i(s=Object.create)&&s);s||(n=function(){function t(){}return function(e){if(o(e)){t.prototype=e;var n=new t;t.prototype=null}return n||r.Object()}}()),e.exports=n},{"lodash._isnative":52,"lodash.isobject":54,"lodash.noop":53}],52:[function(t,e){e.exports=t(46)},{}],53:[function(t,e){e.exports=t(47)},{}],54:[function(t,e){function n(t){return!(!t||!r[typeof t])}var r=t("lodash._objecttypes");e.exports=n},{"lodash._objecttypes":55}],55:[function(t,e){var n={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1};e.exports=n},{}],56:[function(t,e){function n(t){function e(){var t=d?p:this;if(l){var o=s(l);a.apply(o,arguments)}if((f||_)&&(o||(o=s(arguments)),f&&a.apply(o,f),_&&o.length<h))return c|=16,n([u,y?c:-4&c,o,null,p,h]);if(o||(o=arguments),v&&(u=t[m]),this instanceof e){t=r(u.prototype);var g=u.apply(t,o);return i(g)?g:t}return u.apply(t,o)}var u=t[0],c=t[1],l=t[2],f=t[3],p=t[4],h=t[5],d=1&c,v=2&c,_=4&c,y=8&c,m=u;return o(e,t),e}var r=t("lodash._basecreate"),i=t("lodash.isobject"),o=t("lodash._setbinddata"),s=t("lodash._slice"),u=[],a=u.push;e.exports=n},{"lodash._basecreate":57,"lodash._setbinddata":45,"lodash._slice":63,"lodash.isobject":60}],57:[function(t,e,n){arguments[4][51][0].apply(n,arguments)},{"lodash._isnative":58,"lodash.isobject":60,"lodash.noop":59}],58:[function(t,e){e.exports=t(46)},{}],59:[function(t,e){e.exports=t(47)},{}],60:[function(t,e){e.exports=t(54)},{"lodash._objecttypes":61}],61:[function(t,e){e.exports=t(55)},{}],62:[function(t,e){function n(t){return"function"==typeof t}e.exports=n},{}],63:[function(t,e){function n(t,e,n){e||(e=0),"undefined"==typeof n&&(n=t?t.length:0);for(var r=-1,i=n-e||0,o=Array(0>i?0:i);++r<i;)o[r]=t[e+r];return o}e.exports=n},{}],64:[function(t,e){function n(t){return t}e.exports=n},{}],65:[function(t,e){var n="undefined"!=typeof self?self:"undefined"!=typeof window?window:{},r=t("lodash._isnative"),i=/\bthis\b/,o={};o.funcDecomp=!r(n.WinRTError)&&i.test(function(){return this}),o.funcNames="string"==typeof Function.name,e.exports=o},{"lodash._isnative":66}],66:[function(t,e){e.exports=t(46)},{}],67:[function(t,e){var n=t("lodash._basecreatecallback"),r=t("lodash.keys"),i=t("lodash._objecttypes"),o=function(t,e,o){var s,u=t,a=u;if(!u)return a;if(!i[typeof u])return a;e=e&&"undefined"==typeof o?e:n(e,o,3);for(var c=-1,l=i[typeof u]&&r(u),f=l?l.length:0;++c<f;)if(s=l[c],e(u[s],s,t)===!1)return a;return a};e.exports=o},{"lodash._basecreatecallback":44,"lodash._objecttypes":68,"lodash.keys":69}],68:[function(t,e){e.exports=t(55)},{}],69:[function(t,e){var n=t("lodash._isnative"),r=t("lodash.isobject"),i=t("lodash._shimkeys"),o=n(o=Object.keys)&&o,s=o?function(t){return r(t)?o(t):[]}:i;e.exports=s},{"lodash._isnative":70,"lodash._shimkeys":71,"lodash.isobject":73}],70:[function(t,e){e.exports=t(46)},{}],71:[function(t,e){var n=t("lodash._objecttypes"),r=Object.prototype,i=r.hasOwnProperty,o=function(t){var e,r=t,o=[];if(!r)return o;if(!n[typeof t])return o;for(e in r)i.call(r,e)&&o.push(e);return o};e.exports=o},{"lodash._objecttypes":72}],72:[function(t,e){e.exports=t(55)},{}],73:[function(t,e){e.exports=t(54)},{"lodash._objecttypes":74}],74:[function(t,e){e.exports=t(55)},{}],75:[function(t,e){function n(t){var e=!1;return function(){return e?void 0:(e=!0,t.apply(this,arguments))}}e.exports=n,n.proto=n(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return n(this)},configurable:!0})})},{}],76:[function(t,e){var n=e.exports={};n.nextTick=function(){var t="undefined"!=typeof window&&window.setImmediate,e="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(t)return function(t){return window.setImmediate(t)};if(e){var n=[];return window.addEventListener("message",function(t){var e=t.source;if((e===window||null===e)&&"process-tick"===t.data&&(t.stopPropagation(),n.length>0)){var r=n.shift();r()}},!0),function(t){n.push(t),window.postMessage("process-tick","*")}}return function(t){setTimeout(t,0)}}(),n.title="browser",n.browser=!0,n.env={},n.argv=[],n.binding=function(){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(){throw new Error("process.chdir is not supported")}},{}]},{},[1])(1)})},{}],20:[function(t,e){"use strict";function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.exports=function(t,e,i,o){e=e||"&",i=i||"=";var s={};if("string"!=typeof t||0===t.length)return s;var u=/\+/g;t=t.split(e);var a=1e3;o&&"number"==typeof o.maxKeys&&(a=o.maxKeys);var c=t.length;a>0&&c>a&&(c=a);for(var l=0;c>l;++l){var f,p,h,d,v=t[l].replace(u,"%20"),_=v.indexOf(i);_>=0?(f=v.substr(0,_),p=v.substr(_+1)):(f=v,p=""),h=decodeURIComponent(f),d=decodeURIComponent(p),n(s,h)?r(s[h])?s[h].push(d):s[h]=[s[h],d]:s[h]=d}return s};var r=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},{}],21:[function(t,e){"use strict";function n(t,e){if(t.map)return t.map(e);for(var n=[],r=0;r<t.length;r++)n.push(e(t[r],r));return n}var r=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};e.exports=function(t,e,s,u){return e=e||"&",s=s||"=",null===t&&(t=void 0),"object"==typeof t?n(o(t),function(n){var o=encodeURIComponent(r(n))+s;return i(t[n])?t[n].map(function(t){return o+encodeURIComponent(r(t))}).join(e):o+encodeURIComponent(r(t[n]))}).join(e):u?encodeURIComponent(r(u))+s+encodeURIComponent(r(t)):""};var i=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},o=Object.keys||function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}},{}],22:[function(t,e,n){"use strict";n.decode=n.parse=t("./decode"),n.encode=n.stringify=t("./encode")},{"./decode":20,"./encode":21}]},{},[1])(1)});;'use strict';

(function(){
  var module = angular.module('ng-contentful', []);
  module.provider('contentfulClient', function ContentfulClientProvider() {
    var spaceId, accessToken, ssl=true, options= {};

    this.setSpaceId     = function (id)     { spaceId = id; };
    this.setAccessToken = function (token)  { accessToken = token; };
    this.setSSL         = function (useSSL) { ssl = !!useSSL; };
    this.setOptions     = function (opt)    { options = opt; };

    this.$get = ['$q', function ($q) {
      /*global contentful*/
      var finalOptions = Object.create(options);
      finalOptions.space = spaceId;
      finalOptions.accessToken = accessToken;
      finalOptions.secure = ssl;

      var client = contentful.createClient(finalOptions);

      pimpPromises(client, 'asset assets contentType contentTypes entry entries space'.split(' '));

      return client;

      function pimpPromises(object, methods) {
        methods.forEach(function (method) {
          var originalMethod = object[method];
          object[method] = function () {
            var args = arguments;
            return $q.when(originalMethod.apply(object, args));
          };
        });
      }
    }];
  });

  module.factory('ContentTypeList', ['$q', 'contentfulClient', function ($q, contentfulClient) {
    var cache = {};
    var lookups = {};

    return {
      lookupContentType: function (id) {
        if (cache[id]) {
          return $q.when(cache[id]);
        } else if (lookups[id]) {
          return lookups[id];
        } else {
          var lookup = contentfulClient.contentType(id)
          .then(function (contentType) {
            cache[id] = contentType;
            return contentType;
          });
          lookups[id] = lookup;
          return lookup;
        }
      },
      loadAllContentTypes: function () {
        contentfulClient.contentTypes()
        .then(function (contentTypes) {
          contentTypes.forEach(function (contentType) {
            cache[contentType.sys.id] = contentType;
          });
        });
      },
      getContentType: function (id) {
        return cache[id];
      }
    };
  }]);

  module.controller('EntryController', ['$scope', 'ContentTypeList', function ($scope, ContentTypeList) {
    $scope.entryTitle = function () {
      var contentType = getContentType();
      if (contentType) {
        return $scope.entry.fields[contentType.displayField];
      }
    };

    $scope.contentType = function () {
      return getContentType();
    };

    function lookupContentType() {
      return ContentTypeList.lookupContentType(contentTypeId());
    }

    function getContentType() {
      var ct = ContentTypeList.getContentType(contentTypeId());
      if (ct) {
        return ct;
      } else {
        lookupContentType();
      }
    }

    function contentTypeId() {
      return $scope.entry.sys.contentType.sys.id;
    }
  }]);
})();
;//
// showdown.js -- A javascript port of Markdown.
//
// Copyright (c) 2007 John Fraser.
//
// Original Markdown Copyright (c) 2004-2005 John Gruber
//   <http://daringfireball.net/projects/markdown/>
//
// Redistributable under a BSD-style open source license.
// See license.txt for more information.
//
// The full source distribution is at:
//
//				A A L
//				T C A
//				T K B
//
//   <http://www.attacklab.net/>
//

//
// Wherever possible, Showdown is a straight, line-by-line port
// of the Perl version of Markdown.
//
// This is not a normal parser design; it's basically just a
// series of string substitutions.  It's hard to read and
// maintain this way,  but keeping Showdown close to the original
// design makes it easier to port new features.
//
// More importantly, Showdown behaves like markdown.pl in most
// edge cases.  So web applications can do client-side preview
// in Javascript, and then build identical HTML on the server.
//
// This port needs the new RegExp functionality of ECMA 262,
// 3rd Edition (i.e. Javascript 1.5).  Most modern web browsers
// should do fine.  Even with the new regular expression features,
// We do a lot of work to emulate Perl's regex functionality.
// The tricky changes in this file mostly have the "attacklab:"
// label.  Major or self-explanatory changes don't.
//
// Smart diff tools like Araxis Merge will be able to match up
// this file with markdown.pl in a useful way.  A little tweaking
// helps: in a copy of markdown.pl, replace "#" with "//" and
// replace "$text" with "text".  Be sure to ignore whitespace
// and line endings.
//


//
// Showdown usage:
//
//   var text = "Markdown *rocks*.";
//
//   var converter = new Showdown.converter();
//   var html = converter.makeHtml(text);
//
//   alert(html);
//
// Note: move the sample code to the bottom of this
// file before uncommenting it.
//


//
// Showdown namespace
//
var Showdown = { extensions: {} };

//
// forEach
//
var forEach = Showdown.forEach = function(obj, callback) {
	if (typeof obj.forEach === 'function') {
		obj.forEach(callback);
	} else {
		var i, len = obj.length;
		for (i = 0; i < len; i++) {
			callback(obj[i], i, obj);
		}
	}
};

//
// Standard extension naming
//
var stdExtName = function(s) {
	return s.replace(/[_-]||\s/g, '').toLowerCase();
};

//
// converter
//
// Wraps all "globals" so that the only thing
// exposed is makeHtml().
//
Showdown.converter = function(converter_options) {

//
// Globals:
//

// Global hashes, used by various utility routines
var g_urls;
var g_titles;
var g_html_blocks;

// Used to track when we're inside an ordered or unordered list
// (see _ProcessListItems() for details):
var g_list_level = 0;

// Global extensions
var g_lang_extensions = [];
var g_output_modifiers = [];


//
// Automatic Extension Loading (node only):
//

if (typeof module !== 'undefind' && typeof exports !== 'undefined' && typeof require !== 'undefind') {
	var fs = require('fs');

	if (fs) {
		// Search extensions folder
		var extensions = fs.readdirSync((__dirname || '.')+'/extensions').filter(function(file){
			return ~file.indexOf('.js');
		}).map(function(file){
			return file.replace(/\.js$/, '');
		});
		// Load extensions into Showdown namespace
		Showdown.forEach(extensions, function(ext){
			var name = stdExtName(ext);
			Showdown.extensions[name] = require('./extensions/' + ext);
		});
	}
}

this.makeHtml = function(text) {
//
// Main function. The order in which other subs are called here is
// essential. Link and image substitutions need to happen before
// _EscapeSpecialCharsWithinTagAttributes(), so that any *'s or _'s in the <a>
// and <img> tags get encoded.
//

	// Clear the global hashes. If we don't clear these, you get conflicts
	// from other articles when generating a page which contains more than
	// one article (e.g. an index page that shows the N most recent
	// articles):
	g_urls = {};
	g_titles = {};
	g_html_blocks = [];

	// attacklab: Replace ~ with ~T
	// This lets us use tilde as an escape char to avoid md5 hashes
	// The choice of character is arbitray; anything that isn't
	// magic in Markdown will work.
	text = text.replace(/~/g,"~T");

	// attacklab: Replace $ with ~D
	// RegExp interprets $ as a special character
	// when it's in a replacement string
	text = text.replace(/\$/g,"~D");

	// Standardize line endings
	text = text.replace(/\r\n/g,"\n"); // DOS to Unix
	text = text.replace(/\r/g,"\n"); // Mac to Unix

	// Make sure text begins and ends with a couple of newlines:
	text = "\n\n" + text + "\n\n";

	// Convert all tabs to spaces.
	text = _Detab(text);

	// Strip any lines consisting only of spaces and tabs.
	// This makes subsequent regexen easier to write, because we can
	// match consecutive blank lines with /\n+/ instead of something
	// contorted like /[ \t]*\n+/ .
	text = text.replace(/^[ \t]+$/mg,"");

	// Run language extensions
	Showdown.forEach(g_lang_extensions, function(x){
		text = _ExecuteExtension(x, text);
	});

	// Handle github codeblocks prior to running HashHTML so that
	// HTML contained within the codeblock gets escaped propertly
	text = _DoGithubCodeBlocks(text);

	// Turn block-level HTML blocks into hash entries
	text = _HashHTMLBlocks(text);

	// Strip link definitions, store in hashes.
	text = _StripLinkDefinitions(text);

	text = _RunBlockGamut(text);

	text = _UnescapeSpecialChars(text);

	// attacklab: Restore dollar signs
	text = text.replace(/~D/g,"$$");

	// attacklab: Restore tildes
	text = text.replace(/~T/g,"~");

	// Run output modifiers
	Showdown.forEach(g_output_modifiers, function(x){
		text = _ExecuteExtension(x, text);
	});

	return text;
};
//
// Options:
//

// Parse extensions options into separate arrays
if (converter_options && converter_options.extensions) {

  var self = this;

	// Iterate over each plugin
	Showdown.forEach(converter_options.extensions, function(plugin){

		// Assume it's a bundled plugin if a string is given
		if (typeof plugin === 'string') {
			plugin = Showdown.extensions[stdExtName(plugin)];
		}

		if (typeof plugin === 'function') {
			// Iterate over each extension within that plugin
			Showdown.forEach(plugin(self), function(ext){
				// Sort extensions by type
				if (ext.type) {
					if (ext.type === 'language' || ext.type === 'lang') {
						g_lang_extensions.push(ext);
					} else if (ext.type === 'output' || ext.type === 'html') {
						g_output_modifiers.push(ext);
					}
				} else {
					// Assume language extension
					g_output_modifiers.push(ext);
				}
			});
		} else {
			throw "Extension '" + plugin + "' could not be loaded.  It was either not found or is not a valid extension.";
		}
	});
}


var _ExecuteExtension = function(ext, text) {
	if (ext.regex) {
		var re = new RegExp(ext.regex, 'g');
		return text.replace(re, ext.replace);
	} else if (ext.filter) {
		return ext.filter(text);
	}
};

var _StripLinkDefinitions = function(text) {
//
// Strips link definitions from text, stores the URLs and titles in
// hash references.
//

	// Link defs are in the form: ^[id]: url "optional title"

	/*
		var text = text.replace(/
				^[ ]{0,3}\[(.+)\]:  // id = $1  attacklab: g_tab_width - 1
				  [ \t]*
				  \n?				// maybe *one* newline
				  [ \t]*
				<?(\S+?)>?			// url = $2
				  [ \t]*
				  \n?				// maybe one newline
				  [ \t]*
				(?:
				  (\n*)				// any lines skipped = $3 attacklab: lookbehind removed
				  ["(]
				  (.+?)				// title = $4
				  [")]
				  [ \t]*
				)?					// title is optional
				(?:\n+|$)
			  /gm,
			  function(){...});
	*/

	// attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug
	text += "~0";

	text = text.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|(?=~0))/gm,
		function (wholeMatch,m1,m2,m3,m4) {
			m1 = m1.toLowerCase();
			g_urls[m1] = _EncodeAmpsAndAngles(m2);  // Link IDs are case-insensitive
			if (m3) {
				// Oops, found blank lines, so it's not a title.
				// Put back the parenthetical statement we stole.
				return m3+m4;
			} else if (m4) {
				g_titles[m1] = m4.replace(/"/g,"&quot;");
			}

			// Completely remove the definition from the text
			return "";
		}
	);

	// attacklab: strip sentinel
	text = text.replace(/~0/,"");

	return text;
}


var _HashHTMLBlocks = function(text) {
	// attacklab: Double up blank lines to reduce lookaround
	text = text.replace(/\n/g,"\n\n");

	// Hashify HTML blocks:
	// We only want to do this for block-level HTML tags, such as headers,
	// lists, and tables. That's because we still want to wrap <p>s around
	// "paragraphs" that are wrapped in non-block-level tags, such as anchors,
	// phrase emphasis, and spans. The list of tags we're looking for is
	// hard-coded:
	var block_tags_a = "p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del|style|section|header|footer|nav|article|aside";
	var block_tags_b = "p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside";

	// First, look for nested blocks, e.g.:
	//   <div>
	//     <div>
	//     tags for inner block must be indented.
	//     </div>
	//   </div>
	//
	// The outermost tags must start at the left margin for this to match, and
	// the inner nested divs must be indented.
	// We need to do this before the next, more liberal match, because the next
	// match will start at the first `<div>` and stop at the first `</div>`.

	// attacklab: This regex can be expensive when it fails.
	/*
		var text = text.replace(/
		(						// save in $1
			^					// start of line  (with /m)
			<($block_tags_a)	// start tag = $2
			\b					// word break
								// attacklab: hack around khtml/pcre bug...
			[^\r]*?\n			// any number of lines, minimally matching
			</\2>				// the matching end tag
			[ \t]*				// trailing spaces/tabs
			(?=\n+)				// followed by a newline
		)						// attacklab: there are sentinel newlines at end of document
		/gm,function(){...}};
	*/
	text = text.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,hashElement);

	//
	// Now match more liberally, simply from `\n<tag>` to `</tag>\n`
	//

	/*
		var text = text.replace(/
		(						// save in $1
			^					// start of line  (with /m)
			<($block_tags_b)	// start tag = $2
			\b					// word break
								// attacklab: hack around khtml/pcre bug...
			[^\r]*?				// any number of lines, minimally matching
			</\2>				// the matching end tag
			[ \t]*				// trailing spaces/tabs
			(?=\n+)				// followed by a newline
		)						// attacklab: there are sentinel newlines at end of document
		/gm,function(){...}};
	*/
	text = text.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside)\b[^\r]*?<\/\2>[ \t]*(?=\n+)\n)/gm,hashElement);

	// Special case just for <hr />. It was easier to make a special case than
	// to make the other regex more complicated.

	/*
		text = text.replace(/
		(						// save in $1
			\n\n				// Starting after a blank line
			[ ]{0,3}
			(<(hr)				// start tag = $2
			\b					// word break
			([^<>])*?			//
			\/?>)				// the matching end tag
			[ \t]*
			(?=\n{2,})			// followed by a blank line
		)
		/g,hashElement);
	*/
	text = text.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,hashElement);

	// Special case for standalone HTML comments:

	/*
		text = text.replace(/
		(						// save in $1
			\n\n				// Starting after a blank line
			[ ]{0,3}			// attacklab: g_tab_width - 1
			<!
			(--[^\r]*?--\s*)+
			>
			[ \t]*
			(?=\n{2,})			// followed by a blank line
		)
		/g,hashElement);
	*/
	text = text.replace(/(\n\n[ ]{0,3}<!(--[^\r]*?--\s*)+>[ \t]*(?=\n{2,}))/g,hashElement);

	// PHP and ASP-style processor instructions (<?...?> and <%...%>)

	/*
		text = text.replace(/
		(?:
			\n\n				// Starting after a blank line
		)
		(						// save in $1
			[ ]{0,3}			// attacklab: g_tab_width - 1
			(?:
				<([?%])			// $2
				[^\r]*?
				\2>
			)
			[ \t]*
			(?=\n{2,})			// followed by a blank line
		)
		/g,hashElement);
	*/
	text = text.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,hashElement);

	// attacklab: Undo double lines (see comment at top of this function)
	text = text.replace(/\n\n/g,"\n");
	return text;
}

var hashElement = function(wholeMatch,m1) {
	var blockText = m1;

	// Undo double lines
	blockText = blockText.replace(/\n\n/g,"\n");
	blockText = blockText.replace(/^\n/,"");

	// strip trailing blank lines
	blockText = blockText.replace(/\n+$/g,"");

	// Replace the element text with a marker ("~KxK" where x is its key)
	blockText = "\n\n~K" + (g_html_blocks.push(blockText)-1) + "K\n\n";

	return blockText;
};

var _RunBlockGamut = function(text) {
//
// These are all the transformations that form block-level
// tags like paragraphs, headers, and list items.
//
	text = _DoHeaders(text);

	// Do Horizontal Rules:
	var key = hashBlock("<hr />");
	text = text.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,key);
	text = text.replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm,key);
	text = text.replace(/^[ ]{0,2}([ ]?\_[ ]?){3,}[ \t]*$/gm,key);

	text = _DoLists(text);
	text = _DoCodeBlocks(text);
	text = _DoBlockQuotes(text);

	// We already ran _HashHTMLBlocks() before, in Markdown(), but that
	// was to escape raw HTML in the original Markdown source. This time,
	// we're escaping the markup we've just created, so that we don't wrap
	// <p> tags around block-level tags.
	text = _HashHTMLBlocks(text);
	text = _FormParagraphs(text);

	return text;
};


var _RunSpanGamut = function(text) {
//
// These are all the transformations that occur *within* block-level
// tags like paragraphs, headers, and list items.
//

	text = _DoCodeSpans(text);
	text = _EscapeSpecialCharsWithinTagAttributes(text);
	text = _EncodeBackslashEscapes(text);

	// Process anchor and image tags. Images must come first,
	// because ![foo][f] looks like an anchor.
	text = _DoImages(text);
	text = _DoAnchors(text);

	// Make links out of things like `<http://example.com/>`
	// Must come after _DoAnchors(), because you can use < and >
	// delimiters in inline links like [this](<url>).
	text = _DoAutoLinks(text);
	text = _EncodeAmpsAndAngles(text);
	text = _DoItalicsAndBold(text);

	// Do hard breaks:
	text = text.replace(/  +\n/g," <br />\n");

	return text;
}

var _EscapeSpecialCharsWithinTagAttributes = function(text) {
//
// Within tags -- meaning between < and > -- encode [\ ` * _] so they
// don't conflict with their use in Markdown for code, italics and strong.
//

	// Build a regex to find HTML tags and comments.  See Friedl's
	// "Mastering Regular Expressions", 2nd Ed., pp. 200-201.
	var regex = /(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;

	text = text.replace(regex, function(wholeMatch) {
		var tag = wholeMatch.replace(/(.)<\/?code>(?=.)/g,"$1`");
		tag = escapeCharacters(tag,"\\`*_");
		return tag;
	});

	return text;
}

var _DoAnchors = function(text) {
//
// Turn Markdown link shortcuts into XHTML <a> tags.
//
	//
	// First, handle reference-style links: [link text] [id]
	//

	/*
		text = text.replace(/
		(							// wrap whole match in $1
			\[
			(
				(?:
					\[[^\]]*\]		// allow brackets nested one level
					|
					[^\[]			// or anything else
				)*
			)
			\]

			[ ]?					// one optional space
			(?:\n[ ]*)?				// one optional newline followed by spaces

			\[
			(.*?)					// id = $3
			\]
		)()()()()					// pad remaining backreferences
		/g,_DoAnchors_callback);
	*/
	text = text.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,writeAnchorTag);

	//
	// Next, inline-style links: [link text](url "optional title")
	//

	/*
		text = text.replace(/
			(						// wrap whole match in $1
				\[
				(
					(?:
						\[[^\]]*\]	// allow brackets nested one level
					|
					[^\[\]]			// or anything else
				)
			)
			\]
			\(						// literal paren
			[ \t]*
			()						// no id, so leave $3 empty
			<?(.*?)>?				// href = $4
			[ \t]*
			(						// $5
				(['"])				// quote char = $6
				(.*?)				// Title = $7
				\6					// matching quote
				[ \t]*				// ignore any spaces/tabs between closing quote and )
			)?						// title is optional
			\)
		)
		/g,writeAnchorTag);
	*/
	text = text.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,writeAnchorTag);

	//
	// Last, handle reference-style shortcuts: [link text]
	// These must come last in case you've also got [link test][1]
	// or [link test](/foo)
	//

	/*
		text = text.replace(/
		(		 					// wrap whole match in $1
			\[
			([^\[\]]+)				// link text = $2; can't contain '[' or ']'
			\]
		)()()()()()					// pad rest of backreferences
		/g, writeAnchorTag);
	*/
	text = text.replace(/(\[([^\[\]]+)\])()()()()()/g, writeAnchorTag);

	return text;
}

var writeAnchorTag = function(wholeMatch,m1,m2,m3,m4,m5,m6,m7) {
	if (m7 == undefined) m7 = "";
	var whole_match = m1;
	var link_text   = m2;
	var link_id	 = m3.toLowerCase();
	var url		= m4;
	var title	= m7;

	if (url == "") {
		if (link_id == "") {
			// lower-case and turn embedded newlines into spaces
			link_id = link_text.toLowerCase().replace(/ ?\n/g," ");
		}
		url = "#"+link_id;

		if (g_urls[link_id] != undefined) {
			url = g_urls[link_id];
			if (g_titles[link_id] != undefined) {
				title = g_titles[link_id];
			}
		}
		else {
			if (whole_match.search(/\(\s*\)$/m)>-1) {
				// Special case for explicit empty url
				url = "";
			} else {
				return whole_match;
			}
		}
	}

	url = escapeCharacters(url,"*_");
	var result = "<a href=\"" + url + "\"";

	if (title != "") {
		title = title.replace(/"/g,"&quot;");
		title = escapeCharacters(title,"*_");
		result +=  " title=\"" + title + "\"";
	}

	result += ">" + link_text + "</a>";

	return result;
}


var _DoImages = function(text) {
//
// Turn Markdown image shortcuts into <img> tags.
//

	//
	// First, handle reference-style labeled images: ![alt text][id]
	//

	/*
		text = text.replace(/
		(						// wrap whole match in $1
			!\[
			(.*?)				// alt text = $2
			\]

			[ ]?				// one optional space
			(?:\n[ ]*)?			// one optional newline followed by spaces

			\[
			(.*?)				// id = $3
			\]
		)()()()()				// pad rest of backreferences
		/g,writeImageTag);
	*/
	text = text.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,writeImageTag);

	//
	// Next, handle inline images:  ![alt text](url "optional title")
	// Don't forget: encode * and _

	/*
		text = text.replace(/
		(						// wrap whole match in $1
			!\[
			(.*?)				// alt text = $2
			\]
			\s?					// One optional whitespace character
			\(					// literal paren
			[ \t]*
			()					// no id, so leave $3 empty
			<?(\S+?)>?			// src url = $4
			[ \t]*
			(					// $5
				(['"])			// quote char = $6
				(.*?)			// title = $7
				\6				// matching quote
				[ \t]*
			)?					// title is optional
		\)
		)
		/g,writeImageTag);
	*/
	text = text.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,writeImageTag);

	return text;
}

var writeImageTag = function(wholeMatch,m1,m2,m3,m4,m5,m6,m7) {
	var whole_match = m1;
	var alt_text   = m2;
	var link_id	 = m3.toLowerCase();
	var url		= m4;
	var title	= m7;

	if (!title) title = "";

	if (url == "") {
		if (link_id == "") {
			// lower-case and turn embedded newlines into spaces
			link_id = alt_text.toLowerCase().replace(/ ?\n/g," ");
		}
		url = "#"+link_id;

		if (g_urls[link_id] != undefined) {
			url = g_urls[link_id];
			if (g_titles[link_id] != undefined) {
				title = g_titles[link_id];
			}
		}
		else {
			return whole_match;
		}
	}

	alt_text = alt_text.replace(/"/g,"&quot;");
	url = escapeCharacters(url,"*_");
	var result = "<img src=\"" + url + "\" alt=\"" + alt_text + "\"";

	// attacklab: Markdown.pl adds empty title attributes to images.
	// Replicate this bug.

	//if (title != "") {
		title = title.replace(/"/g,"&quot;");
		title = escapeCharacters(title,"*_");
		result +=  " title=\"" + title + "\"";
	//}

	result += " />";

	return result;
}


var _DoHeaders = function(text) {

	// Setext-style headers:
	//	Header 1
	//	========
	//
	//	Header 2
	//	--------
	//
	text = text.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,
		function(wholeMatch,m1){return hashBlock('<h1 id="' + headerId(m1) + '">' + _RunSpanGamut(m1) + "</h1>");});

	text = text.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,
		function(matchFound,m1){return hashBlock('<h2 id="' + headerId(m1) + '">' + _RunSpanGamut(m1) + "</h2>");});

	// atx-style headers:
	//  # Header 1
	//  ## Header 2
	//  ## Header 2 with closing hashes ##
	//  ...
	//  ###### Header 6
	//

	/*
		text = text.replace(/
			^(\#{1,6})				// $1 = string of #'s
			[ \t]*
			(.+?)					// $2 = Header text
			[ \t]*
			\#*						// optional closing #'s (not counted)
			\n+
		/gm, function() {...});
	*/

	text = text.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,
		function(wholeMatch,m1,m2) {
			var h_level = m1.length;
			return hashBlock("<h" + h_level + ' id="' + headerId(m2) + '">' + _RunSpanGamut(m2) + "</h" + h_level + ">");
		});

	function headerId(m) {
		return m.replace(/[^\w]/g, '').toLowerCase();
	}
	return text;
}

// This declaration keeps Dojo compressor from outputting garbage:
var _ProcessListItems;

var _DoLists = function(text) {
//
// Form HTML ordered (numbered) and unordered (bulleted) lists.
//

	// attacklab: add sentinel to hack around khtml/safari bug:
	// http://bugs.webkit.org/show_bug.cgi?id=11231
	text += "~0";

	// Re-usable pattern to match any entirel ul or ol list:

	/*
		var whole_list = /
		(									// $1 = whole list
			(								// $2
				[ ]{0,3}					// attacklab: g_tab_width - 1
				([*+-]|\d+[.])				// $3 = first list item marker
				[ \t]+
			)
			[^\r]+?
			(								// $4
				~0							// sentinel for workaround; should be $
			|
				\n{2,}
				(?=\S)
				(?!							// Negative lookahead for another list item marker
					[ \t]*
					(?:[*+-]|\d+[.])[ \t]+
				)
			)
		)/g
	*/
	var whole_list = /^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;

	if (g_list_level) {
		text = text.replace(whole_list,function(wholeMatch,m1,m2) {
			var list = m1;
			var list_type = (m2.search(/[*+-]/g)>-1) ? "ul" : "ol";

			// Turn double returns into triple returns, so that we can make a
			// paragraph for the last item in a list, if necessary:
			list = list.replace(/\n{2,}/g,"\n\n\n");;
			var result = _ProcessListItems(list);

			// Trim any trailing whitespace, to put the closing `</$list_type>`
			// up on the preceding line, to get it past the current stupid
			// HTML block parser. This is a hack to work around the terrible
			// hack that is the HTML block parser.
			result = result.replace(/\s+$/,"");
			result = "<"+list_type+">" + result + "</"+list_type+">\n";
			return result;
		});
	} else {
		whole_list = /(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g;
		text = text.replace(whole_list,function(wholeMatch,m1,m2,m3) {
			var runup = m1;
			var list = m2;

			var list_type = (m3.search(/[*+-]/g)>-1) ? "ul" : "ol";
			// Turn double returns into triple returns, so that we can make a
			// paragraph for the last item in a list, if necessary:
			var list = list.replace(/\n{2,}/g,"\n\n\n");;
			var result = _ProcessListItems(list);
			result = runup + "<"+list_type+">\n" + result + "</"+list_type+">\n";
			return result;
		});
	}

	// attacklab: strip sentinel
	text = text.replace(/~0/,"");

	return text;
}

_ProcessListItems = function(list_str) {
//
//  Process the contents of a single ordered or unordered list, splitting it
//  into individual list items.
//
	// The $g_list_level global keeps track of when we're inside a list.
	// Each time we enter a list, we increment it; when we leave a list,
	// we decrement. If it's zero, we're not in a list anymore.
	//
	// We do this because when we're not inside a list, we want to treat
	// something like this:
	//
	//    I recommend upgrading to version
	//    8. Oops, now this line is treated
	//    as a sub-list.
	//
	// As a single paragraph, despite the fact that the second line starts
	// with a digit-period-space sequence.
	//
	// Whereas when we're inside a list (or sub-list), that line will be
	// treated as the start of a sub-list. What a kludge, huh? This is
	// an aspect of Markdown's syntax that's hard to parse perfectly
	// without resorting to mind-reading. Perhaps the solution is to
	// change the syntax rules such that sub-lists must start with a
	// starting cardinal number; e.g. "1." or "a.".

	g_list_level++;

	// trim trailing blank lines:
	list_str = list_str.replace(/\n{2,}$/,"\n");

	// attacklab: add sentinel to emulate \z
	list_str += "~0";

	/*
		list_str = list_str.replace(/
			(\n)?							// leading line = $1
			(^[ \t]*)						// leading whitespace = $2
			([*+-]|\d+[.]) [ \t]+			// list marker = $3
			([^\r]+?						// list item text   = $4
			(\n{1,2}))
			(?= \n* (~0 | \2 ([*+-]|\d+[.]) [ \t]+))
		/gm, function(){...});
	*/
	list_str = list_str.replace(/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+([^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm,
		function(wholeMatch,m1,m2,m3,m4){
			var item = m4;
			var leading_line = m1;
			var leading_space = m2;

			if (leading_line || (item.search(/\n{2,}/)>-1)) {
				item = _RunBlockGamut(_Outdent(item));
			}
			else {
				// Recursion for sub-lists:
				item = _DoLists(_Outdent(item));
				item = item.replace(/\n$/,""); // chomp(item)
				item = _RunSpanGamut(item);
			}

			return  "<li>" + item + "</li>\n";
		}
	);

	// attacklab: strip sentinel
	list_str = list_str.replace(/~0/g,"");

	g_list_level--;
	return list_str;
}


var _DoCodeBlocks = function(text) {
//
//  Process Markdown `<pre><code>` blocks.
//

	/*
		text = text.replace(text,
			/(?:\n\n|^)
			(								// $1 = the code block -- one or more lines, starting with a space/tab
				(?:
					(?:[ ]{4}|\t)			// Lines must start with a tab or a tab-width of spaces - attacklab: g_tab_width
					.*\n+
				)+
			)
			(\n*[ ]{0,3}[^ \t\n]|(?=~0))	// attacklab: g_tab_width
		/g,function(){...});
	*/

	// attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug
	text += "~0";

	text = text.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,
		function(wholeMatch,m1,m2) {
			var codeblock = m1;
			var nextChar = m2;

			codeblock = _EncodeCode( _Outdent(codeblock));
			codeblock = _Detab(codeblock);
			codeblock = codeblock.replace(/^\n+/g,""); // trim leading newlines
			codeblock = codeblock.replace(/\n+$/g,""); // trim trailing whitespace

			codeblock = "<pre><code>" + codeblock + "\n</code></pre>";

			return hashBlock(codeblock) + nextChar;
		}
	);

	// attacklab: strip sentinel
	text = text.replace(/~0/,"");

	return text;
};

var _DoGithubCodeBlocks = function(text) {
//
//  Process Github-style code blocks
//  Example:
//  ```ruby
//  def hello_world(x)
//    puts "Hello, #{x}"
//  end
//  ```
//


	// attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug
	text += "~0";

	text = text.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g,
		function(wholeMatch,m1,m2) {
			var language = m1;
			var codeblock = m2;

			codeblock = _EncodeCode(codeblock);
			codeblock = _Detab(codeblock);
			codeblock = codeblock.replace(/^\n+/g,""); // trim leading newlines
			codeblock = codeblock.replace(/\n+$/g,""); // trim trailing whitespace

			codeblock = "<pre><code" + (language ? " class=\"" + language + '"' : "") + ">" + codeblock + "\n</code></pre>";

			return hashBlock(codeblock);
		}
	);

	// attacklab: strip sentinel
	text = text.replace(/~0/,"");

	return text;
}

var hashBlock = function(text) {
	text = text.replace(/(^\n+|\n+$)/g,"");
	return "\n\n~K" + (g_html_blocks.push(text)-1) + "K\n\n";
}

var _DoCodeSpans = function(text) {
//
//   *  Backtick quotes are used for <code></code> spans.
//
//   *  You can use multiple backticks as the delimiters if you want to
//	 include literal backticks in the code span. So, this input:
//
//		 Just type ``foo `bar` baz`` at the prompt.
//
//	   Will translate to:
//
//		 <p>Just type <code>foo `bar` baz</code> at the prompt.</p>
//
//	There's no arbitrary limit to the number of backticks you
//	can use as delimters. If you need three consecutive backticks
//	in your code, use four for delimiters, etc.
//
//  *  You can use spaces to get literal backticks at the edges:
//
//		 ... type `` `bar` `` ...
//
//	   Turns to:
//
//		 ... type <code>`bar`</code> ...
//

	/*
		text = text.replace(/
			(^|[^\\])					// Character before opening ` can't be a backslash
			(`+)						// $2 = Opening run of `
			(							// $3 = The code block
				[^\r]*?
				[^`]					// attacklab: work around lack of lookbehind
			)
			\2							// Matching closer
			(?!`)
		/gm, function(){...});
	*/

	text = text.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
		function(wholeMatch,m1,m2,m3,m4) {
			var c = m3;
			c = c.replace(/^([ \t]*)/g,"");	// leading whitespace
			c = c.replace(/[ \t]*$/g,"");	// trailing whitespace
			c = _EncodeCode(c);
			return m1+"<code>"+c+"</code>";
		});

	return text;
}

var _EncodeCode = function(text) {
//
// Encode/escape certain characters inside Markdown code runs.
// The point is that in code, these characters are literals,
// and lose their special Markdown meanings.
//
	// Encode all ampersands; HTML entities are not
	// entities within a Markdown code span.
	text = text.replace(/&/g,"&amp;");

	// Do the angle bracket song and dance:
	text = text.replace(/</g,"&lt;");
	text = text.replace(/>/g,"&gt;");

	// Now, escape characters that are magic in Markdown:
	text = escapeCharacters(text,"\*_{}[]\\",false);

// jj the line above breaks this:
//---

//* Item

//   1. Subitem

//            special char: *
//---

	return text;
}


var _DoItalicsAndBold = function(text) {

	// <strong> must go first:
	text = text.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g,
		"<strong>$2</strong>");

	text = text.replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g,
		"<em>$2</em>");

	return text;
}


var _DoBlockQuotes = function(text) {

	/*
		text = text.replace(/
		(								// Wrap whole match in $1
			(
				^[ \t]*>[ \t]?			// '>' at the start of a line
				.+\n					// rest of the first line
				(.+\n)*					// subsequent consecutive lines
				\n*						// blanks
			)+
		)
		/gm, function(){...});
	*/

	text = text.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,
		function(wholeMatch,m1) {
			var bq = m1;

			// attacklab: hack around Konqueror 3.5.4 bug:
			// "----------bug".replace(/^-/g,"") == "bug"

			bq = bq.replace(/^[ \t]*>[ \t]?/gm,"~0");	// trim one level of quoting

			// attacklab: clean up hack
			bq = bq.replace(/~0/g,"");

			bq = bq.replace(/^[ \t]+$/gm,"");		// trim whitespace-only lines
			bq = _RunBlockGamut(bq);				// recurse

			bq = bq.replace(/(^|\n)/g,"$1  ");
			// These leading spaces screw with <pre> content, so we need to fix that:
			bq = bq.replace(
					/(\s*<pre>[^\r]+?<\/pre>)/gm,
				function(wholeMatch,m1) {
					var pre = m1;
					// attacklab: hack around Konqueror 3.5.4 bug:
					pre = pre.replace(/^  /mg,"~0");
					pre = pre.replace(/~0/g,"");
					return pre;
				});

			return hashBlock("<blockquote>\n" + bq + "\n</blockquote>");
		});
	return text;
}


var _FormParagraphs = function(text) {
//
//  Params:
//    $text - string to process with html <p> tags
//

	// Strip leading and trailing lines:
	text = text.replace(/^\n+/g,"");
	text = text.replace(/\n+$/g,"");

	var grafs = text.split(/\n{2,}/g);
	var grafsOut = [];

	//
	// Wrap <p> tags.
	//
	var end = grafs.length;
	for (var i=0; i<end; i++) {
		var str = grafs[i];

		// if this is an HTML marker, copy it
		if (str.search(/~K(\d+)K/g) >= 0) {
			grafsOut.push(str);
		}
		else if (str.search(/\S/) >= 0) {
			str = _RunSpanGamut(str);
			str = str.replace(/^([ \t]*)/g,"<p>");
			str += "</p>"
			grafsOut.push(str);
		}

	}

	//
	// Unhashify HTML blocks
	//
	end = grafsOut.length;
	for (var i=0; i<end; i++) {
		// if this is a marker for an html block...
		while (grafsOut[i].search(/~K(\d+)K/) >= 0) {
			var blockText = g_html_blocks[RegExp.$1];
			blockText = blockText.replace(/\$/g,"$$$$"); // Escape any dollar signs
			grafsOut[i] = grafsOut[i].replace(/~K\d+K/,blockText);
		}
	}

	return grafsOut.join("\n\n");
}


var _EncodeAmpsAndAngles = function(text) {
// Smart processing for ampersands and angle brackets that need to be encoded.

	// Ampersand-encoding based entirely on Nat Irons's Amputator MT plugin:
	//   http://bumppo.net/projects/amputator/
	text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;");

	// Encode naked <'s
	text = text.replace(/<(?![a-z\/?\$!])/gi,"&lt;");

	return text;
}


var _EncodeBackslashEscapes = function(text) {
//
//   Parameter:  String.
//   Returns:	The string, with after processing the following backslash
//			   escape sequences.
//

	// attacklab: The polite way to do this is with the new
	// escapeCharacters() function:
	//
	// 	text = escapeCharacters(text,"\\",true);
	// 	text = escapeCharacters(text,"`*_{}[]()>#+-.!",true);
	//
	// ...but we're sidestepping its use of the (slow) RegExp constructor
	// as an optimization for Firefox.  This function gets called a LOT.

	text = text.replace(/\\(\\)/g,escapeCharacters_callback);
	text = text.replace(/\\([`*_{}\[\]()>#+-.!])/g,escapeCharacters_callback);
	return text;
}


var _DoAutoLinks = function(text) {

	text = text.replace(/<((https?|ftp|dict):[^'">\s]+)>/gi,"<a href=\"$1\">$1</a>");

	// Email addresses: <address@domain.foo>

	/*
		text = text.replace(/
			<
			(?:mailto:)?
			(
				[-.\w]+
				\@
				[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+
			)
			>
		/gi, _DoAutoLinks_callback());
	*/
	text = text.replace(/<(?:mailto:)?([-.\w]+\@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,
		function(wholeMatch,m1) {
			return _EncodeEmailAddress( _UnescapeSpecialChars(m1) );
		}
	);

	return text;
}


var _EncodeEmailAddress = function(addr) {
//
//  Input: an email address, e.g. "foo@example.com"
//
//  Output: the email address as a mailto link, with each character
//	of the address encoded as either a decimal or hex entity, in
//	the hopes of foiling most address harvesting spam bots. E.g.:
//
//	<a href="&#x6D;&#97;&#105;&#108;&#x74;&#111;:&#102;&#111;&#111;&#64;&#101;
//	   x&#x61;&#109;&#x70;&#108;&#x65;&#x2E;&#99;&#111;&#109;">&#102;&#111;&#111;
//	   &#64;&#101;x&#x61;&#109;&#x70;&#108;&#x65;&#x2E;&#99;&#111;&#109;</a>
//
//  Based on a filter by Matthew Wickline, posted to the BBEdit-Talk
//  mailing list: <http://tinyurl.com/yu7ue>
//

	var encode = [
		function(ch){return "&#"+ch.charCodeAt(0)+";";},
		function(ch){return "&#x"+ch.charCodeAt(0).toString(16)+";";},
		function(ch){return ch;}
	];

	addr = "mailto:" + addr;

	addr = addr.replace(/./g, function(ch) {
		if (ch == "@") {
		   	// this *must* be encoded. I insist.
			ch = encode[Math.floor(Math.random()*2)](ch);
		} else if (ch !=":") {
			// leave ':' alone (to spot mailto: later)
			var r = Math.random();
			// roughly 10% raw, 45% hex, 45% dec
			ch =  (
					r > .9  ?	encode[2](ch)   :
					r > .45 ?	encode[1](ch)   :
								encode[0](ch)
				);
		}
		return ch;
	});

	addr = "<a href=\"" + addr + "\">" + addr + "</a>";
	addr = addr.replace(/">.+:/g,"\">"); // strip the mailto: from the visible part

	return addr;
}


var _UnescapeSpecialChars = function(text) {
//
// Swap back in all the special characters we've hidden.
//
	text = text.replace(/~E(\d+)E/g,
		function(wholeMatch,m1) {
			var charCodeToReplace = parseInt(m1);
			return String.fromCharCode(charCodeToReplace);
		}
	);
	return text;
}


var _Outdent = function(text) {
//
// Remove one level of line-leading tabs or spaces
//

	// attacklab: hack around Konqueror 3.5.4 bug:
	// "----------bug".replace(/^-/g,"") == "bug"

	text = text.replace(/^(\t|[ ]{1,4})/gm,"~0"); // attacklab: g_tab_width

	// attacklab: clean up hack
	text = text.replace(/~0/g,"")

	return text;
}

var _Detab = function(text) {
// attacklab: Detab's completely rewritten for speed.
// In perl we could fix it by anchoring the regexp with \G.
// In javascript we're less fortunate.

	// expand first n-1 tabs
	text = text.replace(/\t(?=\t)/g,"    "); // attacklab: g_tab_width

	// replace the nth with two sentinels
	text = text.replace(/\t/g,"~A~B");

	// use the sentinel to anchor our regex so it doesn't explode
	text = text.replace(/~B(.+?)~A/g,
		function(wholeMatch,m1,m2) {
			var leadingText = m1;
			var numSpaces = 4 - leadingText.length % 4;  // attacklab: g_tab_width

			// there *must* be a better way to do this:
			for (var i=0; i<numSpaces; i++) leadingText+=" ";

			return leadingText;
		}
	);

	// clean up sentinels
	text = text.replace(/~A/g,"    ");  // attacklab: g_tab_width
	text = text.replace(/~B/g,"");

	return text;
}


//
//  attacklab: Utility functions
//


var escapeCharacters = function(text, charsToEscape, afterBackslash) {
	// First we have to escape the escape characters so that
	// we can build a character class out of them
	var regexString = "([" + charsToEscape.replace(/([\[\]\\])/g,"\\$1") + "])";

	if (afterBackslash) {
		regexString = "\\\\" + regexString;
	}

	var regex = new RegExp(regexString,"g");
	text = text.replace(regex,escapeCharacters_callback);

	return text;
}


var escapeCharacters_callback = function(wholeMatch,m1) {
	var charCodeToEscape = m1.charCodeAt(0);
	return "~E"+charCodeToEscape+"E";
}

} // end of Showdown.converter


// export
if (typeof module !== 'undefined') module.exports = Showdown;

// stolen from AMD branch of underscore
// AMD define happens at the end for compatibility with AMD loaders
// that don't enforce next-turn semantics on modules.
if (typeof define === 'function' && define.amd) {
    define('showdown', function() {
        return Showdown;
    });
}
;// Generated by CoffeeScript 1.6.2
/*!
jQuery Waypoints - v2.0.5
Copyright (c) 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(window,function(n,r){var i,o,l,s,f,u,c,a,h,d,p,y,v,w,g,m;i=n(r);a=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;c={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};this.element[u]=this.id;c[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||a)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(a&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete c[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=this.element[w])!=null?o:[];i.push(this.id);this.element[w]=i}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=t[w];if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;e=n.extend({},n.fn[g].defaults,e);if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=c[i[0][u]];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke.call(this,"disable")},enable:function(){return d._invoke.call(this,"enable")},destroy:function(){return d._invoke.call(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t){this.each(function(){var e;e=l.getWaypointsByElement(this);return n.each(e,function(e,n){n[t]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(c,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=c[n(t)[0][u]])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=c[n(t)[0][u]];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.on("load.waypoints",function(){return n[m]("refresh")})})}).call(this);;/*! LazyYT (lazy load Youtube videos plugin) - v0.3.4 - 2014-06-30
* Usage: <div class="lazyYT" data-youtube-id="laknj093n" ratio="16:9" data-parameters="rel=0">loading...</div>
* Copyright (c) 2014 Tyler Pearson; Licensed MIT */


;(function ($) {
    'use strict';

    function setUp($el) {
        var width = $el.data('width'),
            height = $el.data('height'),
            ratio = $el.data('ratio'),
            id = $el.data('youtube-id'),
            aspectRatio = ['16', '9'],
            paddingTop = 0,
            youtubeParameters = $el.data('parameters') || '';

        if (typeof width === 'undefined' || typeof height === 'undefined') {
          height = 0;
          width = '100%';
          aspectRatio = (ratio.split(":")[1] / ratio.split(":")[0]) * 100;
          paddingTop = aspectRatio + '%';
        }

        $el.css({
            'position': 'relative',
            'height': height,
            'width': width,
            'padding-top': paddingTop,
            'background': 'url(//img.youtube.com/vi/' + id + '/hqdefault.jpg) center center no-repeat',
            'cursor': 'pointer',
            'background-size': 'cover'
        })
            .html('<p id="lazyYT-title-' + id + '" class="lazyYT-title"></p><div class="lazyYT-button"></div>')
            .addClass('lazyYT-image-loaded');

        $.getJSON('https://gdata.youtube.com/feeds/api/videos/' + id + '?v=2&alt=json', function (data) {
            $('#lazyYT-title-' + id).text(data.entry.title.$t);
        });

        $el.on('click', function (e) {
            e.preventDefault();
            if (!$el.hasClass('lazyYT-video-loaded') && $el.hasClass('lazyYT-image-loaded')) {
                $el.html('<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' + id + '?autoplay=1&' + youtubeParameters + '" style="position:absolute; top:0; left:0; width:100%; height:100%;" frameborder="0" allowfullscreen></iframe>')
                    .removeClass('lazyYT-image-loaded')
                    .addClass('lazyYT-video-loaded');
            }
        });

    }

    $.fn.lazyYT = function () {
        return this.each(function () {
            var $el = $(this).css('cursor', 'pointer');
            setUp($el);
        });
    };

}(jQuery));;(function() {
    "use strict";
    var e;
    e = angular.module("ytlist", [ "ngRoute", "ngSanitize", "ngAnimate", "ng-contentful", "duScroll", "youtube-embed", "ytControllers", "ytDirectives", "ytServices" ]);
    e.config([ "$routeProvider", "$locationProvider", "contentfulClientProvider", function(e, t, r) {
        e.when("/", {
            templateUrl: "partials/index.html",
            controller: "IndexCtrl"
        }).when("/:featureId", {
            templateUrl: "partials/detail.html",
            controller: "DetailCtrl"
        }).otherwise({
            redirectTo: "/"
        });
        r.setSpaceId("6s2rqhmim2vw");
        return r.setAccessToken("c74b04faaa839cf30d0fbf6d0fa5827984c15b39864d7fc3c48a6fe57ad6ad0d");
    } ]);
}).call(this);;(function() {
    "use strict";
    var e;
    e = angular.module("ytControllers", []);
    e.controller("IndexCtrl", [ "$scope", "$http", "contentfulClient", function(e, t, n) {
        e.features = "";
        return n.entries({
            content_type: "tGyjv9K8h2kiGAW6qe2WI",
            include: 1
        }).then(function(t) {
            console.log(t);
            return e.features = t;
        });
    } ]);
    e.controller("DetailCtrl", [ "$scope", "$routeParams", "$http", "$location", "contentfulClient", "$sce", "heightService", function(e, t, n, r, o, i, l) {
        var s;
        s = new Showdown.converter();
        e.player = {};
        e.playerVars = {
            controls: 0,
            autoplay: 0,
            modestbranding: 1,
            showinfo: 0,
            hd: 1
        };
        e.$on("youtube.player.ready", function(t, n) {
            return e.player = n;
        });
        return o.entries({
            "sys.id": t.featureId,
            include: 10
        }).then(function(t) {
            var n, r, o, u, a;
            e.feature = t[0];
            e.fields = e.feature.fields;
            a = e.fields.youTubeListItems;
            for (o = 0, u = a.length; o < u; o++) {
                n = a[o];
                r = n.fields.bodyText;
                r = s.makeHtml(r);
            }
            e.trust = function(e) {
                return i.trustAsHtml(e);
            };
            e.fields.introText = s.makeHtml(e.fields.introText);
            e.items = e.fields.youTubeListItems;
            e.video = e.items[0].fields.youTubeVideoId;
            return setTimeout(l.sendHeight, 2e3);
        });
    } ]);
}).call(this);;(function() {
    "use strict";
    var e;
    e = angular.module("ytDirectives", []);
    e.directive("checkDevice", [ "$window", "$rootScope", function(e, n) {
        var r;
        r = function(r, t, i) {
            r.onResize = function() {
                var r;
                r = e.innerWidth;
                if (r < 1024) {
                    t.removeClass("desktop").addClass("mobile");
                    return n.$broadcast("mobile");
                } else {
                    return t.removeClass("mobile").addClass("desktop");
                }
            };
            r.onResize();
            return angular.element(e).bind("resize", function() {
                return r.onResize();
            });
        };
        return {
            link: r
        };
    } ]);
    e.directive("fadeVideo", [ "$window", function(e) {
        var n, r, t;
        n = 0;
        r = 0;
        t = function(n, t, i) {
            n.fadeOutVideo = function() {
                $(".hero").fadeOut();
                return $(".video-wrapper").fadeIn();
            };
            n.fadeInVideo = function() {
                $(".hero").fadeIn();
                return $(".video-wrapper").fadeOut();
            };
            n.videoControl = function() {
                var r;
                console.log("video contorl called");
                r = e.innerWidth;
                if (r < 1024) {
                    return $.waypoints("destroy");
                } else {
                    return t.waypoint({
                        context: ".frame",
                        offset: "30%",
                        handler: function(e) {
                            if (e === "down") {
                                n.fadeOutVideo();
                            }
                            if (e === "up") {
                                return n.fadeInVideo();
                            }
                        }
                    });
                }
            };
            n.videoControl(t);
            return angular.element(e).bind("resize", function() {
                clearTimeout(r);
                return r = setTimeout(n.videoControl, 1e3);
            });
        };
        return {
            link: t
        };
    } ]);
    e.directive("lazy", function() {
        var e;
        e = function(e, n, r) {
            var t;
            t = r.videoid;
            n.data("youtube-id", t);
            return n.lazyYT();
        };
        return {
            link: e
        };
    });
    e.directive("wrap", [ "$rootScope", "$window", function(e, n) {
        var r, t;
        r = 1;
        t = function(e, t, i) {
            e.wrapMedia = function() {
                var i;
                i = n.innerWidth;
                console.log("yo");
                if (i > 1024) {
                    t.addClass("item" + r);
                    $(".item" + r).waypoint({
                        context: ".frame",
                        offset: "10%",
                        handler: function(n) {
                            var r, t, i, o;
                            r = $(this);
                            o = r.data("id");
                            i = r.data("time");
                            if (!i) {
                                i = 0;
                            }
                            t = r.data("chapter");
                            if (n === "down") {
                                if (t === 1) {
                                    return;
                                }
                                e.player.cueVideoById(o, i);
                            } else {
                                return;
                            }
                            return e.player.cueVideoById(o, i);
                        }
                    }).waypoint({
                        context: ".frame",
                        offset: "20%",
                        handler: function(n) {
                            var r, t, i, o, a;
                            r = $(this);
                            a = r.data("id");
                            i = r.prev().data("id");
                            o = r.data("time");
                            if (!o) {
                                o = 0;
                            }
                            t = r.data("chapter");
                            if (n === "up") {
                                if (i) {
                                    return e.player.cueVideoById(i, o);
                                } else {}
                            }
                        }
                    });
                    return r++;
                } else {
                    return $.waypoints("destroy");
                }
            };
            e.wrapMedia();
            return angular.element(n).bind("resize", function() {
                return e.wrapMedia();
            });
        };
        return {
            link: t
        };
    } ]);
}).call(this);;(function() {
    "use strict";
    var t;
    t = angular.module("ytServices", []);
    t.factory("heightService", [ "$rootScope", function(t) {
        var n, e, i;
        n = function() {
            return $(".frame").height();
        };
        e = function(n) {
            var e, i;
            e = {
                height: n
            };
            i = JSON.stringify(e);
            console.log(i);
            t.$broadcast("loaded");
            return window.parent.postMessage(i, "*");
        };
        window.addEventListener("resize", function() {
            var i;
            i = $(window).width();
            if (i < 768) {
                t.$broadcast("mobile");
            }
            if (i >= 768) {
                t.$broadcast("desktop");
            }
            return e(n());
        });
        i = function() {
            i = $(window).width();
            return i;
        };
        return {
            sendHeight: function() {
                return e(n());
            },
            getWidth: function() {
                return $(window).width();
            }
        };
    } ]);
}).call(this);